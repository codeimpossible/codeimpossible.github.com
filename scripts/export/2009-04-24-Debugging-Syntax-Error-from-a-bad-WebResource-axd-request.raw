---
layout: post
status: publish
title: 'Debugging &quot;Syntax Error&quot; from a bad WebResource.axd request'
slug: Debugging-Syntax-Error-from-a-bad-WebResource-axd-request
---
# Debugging &quot;Syntax Error&quot; from a bad WebResource.axd request
## 

<p>
	&quot;Syntax Error, Line: 2, Char: 0&quot;. How many of you out there have seen this error while working on a web project? Usually it&#39;s because of a forgotten semi-colon or parenthesis in some external javascript file. But sometimes it&#39;s something more sinister... Something darker, dirtier and just a little bit more evil. After seeing the error message, I opened up Internet Explorer&#39;s options dialog and unchecked the following options:</p>
<ul>
	<li>
		Disable script debugging (Internet Explorer)</li>
	<li>
		Disable script debugging (Other)</li>
</ul>
<p style="text-align: center;">
	<img alt="Internet Explorer Options Dialog" class="aligncenter size-full wp-image-456" height="521" src="http://wpup.codeimpossible.com/2009/04/internet_explorer_options_2.jpg" title="Internet Explorer Options Dialog" width="415" /></p>
<p>
	I then closed IE, returned to Visual Studio, stopped and re-started debugging (ctrl+shift+F5), and watched Solution Explorer as my page began to load.</p>
<p style="text-align: center;">
	<img alt="Solution Explorer Debugging Internet Explorer" class="aligncenter size-full wp-image-442" height="265" src="http://wpup.codeimpossible.com/2009/04/solution_explorer.png" title="Solution Explorer Debugging Internet Explorer" width="309" /></p>
<p>
	Oh! That&#39;s not good. See the WebResource.axd request that has the same icon as the Default.aspx file? That means that a bad request was sent for an embedded resource and - most likely recieved a 404 page back instead of the javascript file, which caused our syntax error. Ok, so how do we figure out which WebResource reference caused the problem? Well, the only way that I have come up with so far, is to manually copy and paste each WebResource.axd url from the html source of the page to the address bar and navigate there. The pages that give return a file download are ok and the ones that don&#39;t will return a 404 page in the browser. After finishing this long process of elimination, I found the resource request that was causing my headache:</p>
<pre class="brush:html">
/WebResource.axd?d=MaCiPhUUtdXNj16OOucV5e5lHCBZO...SNIP...</pre>
<p>
	So how do we figure out which resource has embedded this troublesome URL into our html source? I found the solution to that in&nbsp;<a href="http://blogs.msdn.com/irenak/archive/2006/11/03/sysk-233-how-to-decrypt-an-asp-net-encrypted-data.aspx">Irena Kennedy&#39;s blog post on &quot;How to Decrypt an ASP.NET Encrypted Data&quot;</a>:</p>
<blockquote>
	Please note, that the code below should not be used in production code! It&rsquo;s only meant for debugging and troubleshooting, and it may break in future versions of the .NET framework if DecryptString private method changes.
	<ol>
		<li>
			Add a web page (e.g. DecryptData.aspx) to your web application. For the code to work, it must run in the same appdomain as the web application that created your encrypted string.</li>
		<li>
			Add a text box where you will type in the encrypted string.</li>
		<li>
			Add a label where you&rsquo;ll display decrypted results.</li>
		<li>
			Add a button.</li>
		<li>
			In code-behind on button click event, add the following code:</li>
	</ol>
</blockquote>
<pre class="prettyprint">
<code>
System.Reflection.BindingFlags bf =
    System.Reflection.BindingFlags.NonPublic |
    System.Reflection.BindingFlags.Static;

System.Reflection.MethodInfo DecryptString = 
    typeof(System.Web.UI.Page).GetMethod(&quot;DecryptString&quot;, bf);

DecryptedData.Text = DecryptString.Invoke(
    null, 
    new object[] { EncryptedData.Text } ) as string;

</code></pre>
<p>
	After I created this page, I pasted the WebResource.axd URL (everything up to the &amp;t=) into the DecryptedData textbox on my DecryptData.aspx page, clicked the Decrypt button, and saw that one of my custom aspx controls was responsible. I then corrected the resource path and the page loaded as it should. See the screenshot below for an example of the DecryptData page, or <a href="http://www.box.net/shared/uc9aea3999" target="_blank">download the DecryptData .ASPX and Codebehind from my box.net folder</a>.</p>
<p style="text-align: center;">
	<a href="http://wpup.codeimpossible.com/2009/04/decryption_page.png" target="_blank"><img alt="DecryptData page" class="aligncenter size-medium wp-image-445" height="219" src="http://wpup.codeimpossible.com/2009/04/decryption_page.png" title="DecryptData page" width="300" /></a></p>
