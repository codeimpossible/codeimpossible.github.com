---
layout: post
status: publish
title: 'MvcTurbine, stopping StackOverflowException on w3wp recycle'
slug: MvcTurbine-stopping-StackOverflowException-on-w3wp-recycle
---
# MvcTurbine, stopping StackOverflowException on w3wp recycle
## I had an issue the other day with MvcTurbine where our application would throw a StackOverflowException whenever the worker process recycled.

<p>
	I love MvcTurbine. If you&#39;re working on a asp.net mvc project then you should take a look at it. Having said that I&#39;ve run into one pretty strange problem with it.</p>
<p>
	Another developer noticed that there were a lot of eventlog entries on our build server for our projects w3wp process. After looking into it I found that whenever our CI server ran a build the w3wp.exe process would exit with a StackOverflowException.</p>
<p>
	Strange.</p>
<p>
	This wasn&#39;t a big deal since it wasn&#39;t affecting the overall availability of the application, but it was annoying to the dev team.</p>
<p>
	In visual studio, every time a file is added or a build is done locally the worker-process is recycled which meant that everytime a build was done locally, or a file was added to the project, each dev got the wonderful &quot;Visual Studio Just In-Time Debugger&quot; dialog. Like I said, not a big issue, just very annoying.</p>
<p>
	After a bit of googling I found that this is indeed an issue with MvcTurbine but it has a very easy fix: just add the following lines to the class that inherits from <code>TurbineApplication</code>:</p>
<pre class="prettyprint">
<code>protected override void ShutdownContext ()
{
    CurrentContext = null;
    ServiceLocator = null;
}
</code></pre>
<p>
	<a href="http://lozanotek.com/blog/">Javier Lozano</a> - the author of MvcTurbine, explains what&#39;s causing the problem:</p>
<blockquote>
	Since we register the SeviceLocator with itself and we call dispose, essentially it calls dispose on all the types that it has registered, including [itself]. So this causes a recursive loop of calls to ServiceLocator.Dispose... Essentially you&#39;re preventing the disposition of the ServiceLocator from [happening] since this piece gets called at App_Shutdown. The fix for v2.2 will not be this, instead it will be addressed at the ServiceLocator registration.</blockquote>
<p>
	Here are some links where you can <a href="http://mvcturbine.codeplex.com/Thread/View.aspx?ThreadId=219449">see the original post with Javier&#39;s answer</a>, take a <a href="https://github.com/jglozano/mvcturbine/blob/master/src/Samples/SMExtensions/Mvc/StructureMapTurbineApplication.cs">look at the code that Javier posted showing the fix in place</a>, and <a href="http://stackoverflow.com/questions/3344652/adding-removing-a-file-in-vs2010-causes-webdev-webserver20-exe-has-stopped-worki">the StackOverflow question that should provide some more context</a>.</p>
