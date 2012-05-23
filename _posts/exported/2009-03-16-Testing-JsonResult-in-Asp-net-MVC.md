---
layout: post
status: publish
title: 'Testing JsonResult in Asp.net MVC'
slug: Testing-JsonResult-in-Asp-net-MVC
---
# Testing JsonResult in Asp.net MVC
## 

So lately I've been working on a project using Asp.net MVC and TDD to build a web 2.0 application. It's a twitter-like application that I started a while ago but due to <a href="" title="Test Everything!">my failure to test everything</a> I lost about 99% of my work and had to start over from scratch.

But this was sort of a good thing because it gave me a chance to revisit a lot of things that I wasn't very happy with the first time around. I just got done adding the ability for users to post new messages via AJAX.

In the first version of the application a user would type their status into a textbox, click submit and the page would refresh with their new message at the top of their user wall. Although functional this wasn't exactly very "web 2.0"-ish.

My controller will have an action called Index that takes two parameters, the message the users is posting and the tags associated with that message. m_UserService, and m_MessageService are private objects, that interact with the database.

<pre class="prettyprint"><code>
[Authorize]
[AcceptVerbs(HttpVerbs.Post)]
public ActionResult Index(string message, string[] tags)
{

	var messageOwner = this.m_UserService
		.GetByUserName(User.Identity.Name);

	var messageObj = new Message()
	{
		Owner = new User()
		{
			Identifier = messageOwner.Identifier,
			UserName = messageOwner.UserName,
			Email = messageOwner.Email,
			RealName = messageOwner.RealName,
			IsModerator = messageOwner.IsModerator
		},
		Body = message,
		CreatedOn = DateTime.Now,
		IsReply = message.StartsWith("@")
	};

	this.m_MessageService.Post(messageObj);

	return Json(messageObj);
}
</code></pre>

The JsonResult will be serialized/deserialized by the MVC framework when the code is run in a web project or IIS but I need to be able to test this as part of our build process.

<i>* NOTE: For those of you who might be thinking "how do we get around the authorization"? I'll answer that in a later post (or you can <a href="http://www.hanselman.com/blog/ASPNETMVCSessionAtMix08TDDAndMvcMockHelpers.aspx">check out Scott Hanselmans blog for the solution</a>).</i>

Ideally I wanted to do something like the following in my test:

<pre class="prettyprint"><code>
	Assert.AreEqual("some text", jsonObject.someproperty);
</code></pre>

But since C# is a type-safe language this isn't easily doable. However, utilizing an extension method and the JavaScriptSerializer in System.Web.Script.Serialization we can come pretty close:

<pre class="prettyprint"><code>
	Assert.AreEqual("some text", jsonObject["someproperty"]);
</code></pre>

Here is the code I used to achieve this (This code depends on <a href="http://code.google.com/p/moq/">Moq v3.0.108.5 which you can download here</a>):

<pre class="prettyprint"><code>
using System;
using System.Text;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Mvc;

using Moq;

public static class JsonResultExtensions
{

	public static T Deserialize&lt;T>(this JsonResult json,
		Controller controller)
	{

		var jsonSB = new StringBuilder();

		var httpResponseMock =
			new Mock&lt;httpResponseBase>();

		httpResponseMock.Setup(mock => {
			mock.Write(It.IsAny&lt;string>());
		}).Callback&lt;string>((s) => {
			jsonSB.Append(s);
		});

		var httpContextMock =  new Mock&lt;httpContextBase>();

		httpContextMock.Setup(mock => mock.Response)
			.Returns(httpResponseMock.Object);

		controller.ControllerContext
			.HttpContext = httpContextMock.Object;

		jsonResult.ExecuteResult(
			controller.ControllerContext);

		return new JavaScriptSerializer()
			.Deserialize&lt;T>(jsonSB.ToString());
	}
}
</code></pre>

<strong>Update: Doh! I forgot to post a sample of how this extension is used in my unit tests, I've included a sample snippet below. Thanks to Ryan 'cause his comment made me realize I'd left this out!</strong>

<pre class="prettyprint"><code>
var viewResult = controller.Index() as JsonResult;
var jsonData =
    viewResult.Deserialize&lt;IDictionary&lt;string, object&gt;&gt;(controller);

Assert.AreEqual("this is a test message", jsonData["MessageBody"]);
</code></pre>