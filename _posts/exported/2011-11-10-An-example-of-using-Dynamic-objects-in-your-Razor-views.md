---
layout: post
status: publish
title: 'An example of using Dynamic objects in your Razor views'
slug: An-example-of-using-Dynamic-objects-in-your-Razor-views
---
# An example of using Dynamic objects in your Razor views
## @JohnBubriski posted a blog post that got me thinking of how the DynamicObject class, and a little elbow grease, can add some elegance to your MVC views.

<p>
	My good friend <a href="https://twitter.com/#!/JohnBubriski">@JohnBubriski</a> put up <a href="http://www.johnnycode.com/blog/2011/11/09/asp-net-mvc-extension-method-for-id-in-route">a great post on his blog</a> where he talks about accessing url route params in your MVC views.</p>
<p>
	John made a really good solution by adding an extension method to the HtmlHelper class which would return the <code>{id}</code> route param. This solution is simple, any developer can understand it at a glance, but I thought I would show how you might use DynamicObject and the features of .Net 4.0 to solve this problem.</p>
<pre class="prettyprint">
<code>
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Dynamic;

namespace System.Web.Mvc {

    public class DynamicUrlAccessor : DynamicObject {
        private ViewContext _context;
        
        public DynamicUrlAccessor(ViewContext context) {
            _context = context;
        }
        
        public override bool TryInvokeMember(
                InvokeMemberBinder binder, 
                object[] args, 
                out object result) {

            if (_context.RouteData.Values.ContainsKey(binder.Name)) {
                result = _context.RouteData.Values[binder.Name].ToString();
                return true;
            }

            // the dirty way too
            var querystring = HttpContext.Current.Request.QueryString;
            if (querystring.AllKeys.Contains(binder.Name)) {
                result = querystring[binder.Name].ToString();
                return true;
            }
            
            return base.TryInvokeMember(binder, args, out result);
        }
    }

    public static class ContextExtensions {

        public static dynamic RouteInfo(this System.Web.Mvc.HtmlHelper helper) {
            var accessor = new DynamicUrlAccessor(helper.ViewContext);
            return accessor;
        }
    }
}
</code>
</pre>
<p>
	Now you can use this code in your view like so:</p>
<pre class="prettyprint">
<code>
&lt;h2&gt;About&lt;/h2&gt;
&lt;p&gt;
     Hello @Html.RouteInfo().name()! You are in the @Html.RouteInfo().action() action, 
which is located in the @Html.RouteInfo().controller() controller.
&lt;/p&gt;
</code>
</pre>
<p align="center">
	<img src="http://content.screencast.com/users/codeimpossible/folders/Jing/media/456e1966-0970-4470-93a9-05789d98c8db/2011-11-09_2255.png" style="-moz-box-shadow: 10px 10px 5px #888; -webkit-box-shadow: 10px 10px 5px #888; box-shadow: 10px 10px 5px #888;" /></p>
<p>
	When the <code>RouteInfo()</code> method is called our DynamicUrlAccessor object is retuned as a <code>dynamic</code>. This in turn will cause our overridden method <code>TryInvokeMember</code> to be called.<br />
	<br />
	The binder object will contain the name of the method that was invoked, any arguments passed will be in the args[] collection. All we need to do at this point is check whether the ViewContext or the QueryString contains the requested parameter and set its value into the result variable.</p>
<p>
	So hopefully this shows you how a little work with DynamicObject can go a long way towards improving code readability and creating elegant solutions.</p>
