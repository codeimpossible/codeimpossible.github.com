---
layout: post
status: publish
title: 'Make &quot;Implement Interface&quot; use auto properties'
slug: Make-Implement-Interface-use-auto-properties
---
# Make &quot;Implement Interface&quot; use auto properties
##   This week I'm finding that there is a lot less pain involved in getting Visual Studio 2010 to do things my way than I thought - like no pain at all.


<p>
	I&#39;m refactoring some legacy code this week; a task that would normally be a total PITA but thanks to Visual Studio&#39;s built-in refactoring tools it&#39;s going much easier than expected. The one tool that I&#39;m a huge fan of is the &quot;Implement Interface&quot; context menu item.</p>
<p>
	To see what I mean create a new class, something simple...</p>
<pre class="prettyprint">public class MySimpleClass : IDisposable
{
}</pre>
<p>
	yeah, like that.</p>
<p>
	Now move your cursor over &quot;IDisposable&quot; and press ctrl+period. Selecting &quot;Implement Interface&quot; from the menu that appears will automagically insert all the properties and methods needed to make your class conform to the <code>IDisposable</code> interface.</p>
<p>
	It&#39;s very handy, but it generates the properties in a way that I&#39;m not particularly a fan of:</p>
<pre class="prettyprint">
<code>public object SomeProperty
{
    get
    {
        throw new NotImplementedException();
    }
    set
    {
        throw new NotImplementedException();
    }
}
</code></pre>
<p>
	Instead I&#39;d like to have this code generated using auto properties so that it looks like this:</p>
<pre class="prettyprint">
<code>public object SomeProperty { get; set; }</code>
</pre>
<p>
	I initially thought I would have to modify some built-in T4 template but thankfully it&#39;s much, much easier than that. Apparently the visual studio team took full advantage of the snippet feature when they added it because nearly every refactoring tool is editable via a <code>.snippet</code> file. You can find the snippets that visual studio uses for C# in the following directory:</p>
<p>
	<code>%programfiles%\Microsoft Visual Studio 10.0\VC#\Snippets\1033</code></p>
<p>
	The file you&#39;re looking for is in the <code>Refactoring</code> directory and is named <code>PropertyStub.snippet</code>. Open this guy up in your favorite text editor - don&#39;t worry it&#39;s just xml - and find the part that looks like this:</p>
<pre class="prettyprint">
<code>&lt;Code Language=&quot;csharp&quot;&gt;
    &lt;![CDATA[$signature$
{
	$GetterAccessibility$ get 
	{ 
		$end$throw new $Exception$(); 
	}
	$SetterAccessibility$ set 
	{ 
		throw new $Exception$(); 
	}
}]]&gt;
&lt;/Code&gt;
</code></pre>
<p>
	Replace this xml with the xml below and you&#39;ll be good to go after a quick restart of Visual Studio!</p>
<pre class="prettyprint">
<code>&lt;Code Language=&quot;csharp&quot;&gt;
    &lt;![CDATA[$signature$ { $GetterAccessibility$ get; $SetterAccessibility$ set; }]]&gt;
&lt;/Code&gt;
</code></pre>
<p>
	&nbsp;</p>
