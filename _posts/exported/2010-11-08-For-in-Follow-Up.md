---
layout: post
status: publish
title: 'For/in Follow Up'
slug: For-in-Follow-Up
---
# For/in Follow Up
## JavaScript has a lot of good parts and bad parts but the for/in loop seems to walk the grey area in between. It's a fantastic feature of JavaScript when wielded appropriately, but a potentially horrible bug when used incorrectly.

<p>
	A few weeks back <a href="http://codeimpossible.com/2010/09/20/spot-the-bug-forin-and-javascript/">I wrote a post about a bug that can occur when you improperly use a for/in</a> style loop in javascript.</p>
<p>
	This is particular quirk is one that I find myself explaining to a lot of devs when they start using JavaScript, especially if they are coming from C# (with it&#39;s foreach loop having a similar syntax).</p>
<p>
	<strong>&quot;I do not think that means what you think it means.&quot;</strong><br />
	The for/in loop in JavaScript is powerful but it definitely doesn&#39;t do what you probably think it does. To understand the for/in loop we&#39;ll have to dive deeper into objects and arrays and how JavaScript <del datetime="2010-10-19T05:29:37+00:00">mis</del>treats them.</p>
<p>
	<strong>Objects in JavaScript</strong><br />
	In most other programming languages these days, everything is an object. You can see this in current languages like C# where everything inherits from System.Object or in Ruby where you can assign properties and methods to anything at will.</p>
<p>
	JavaScript is an object oriented language but it&#39;s implementation of objects is a little different from other languages. In JavaScript every object (every thing) is an array - a special array called an &quot;associative array&quot;. If you&#39;re a C# developer think <code>Dictionary&lt;string, object&gt;</code>. If you&#39;re a python developer then you&#39;re already familiar with this concept. So in JavaScript:</p>
<pre class="prettyprint">
var x = {
    something: &quot;hi&quot;
};

var y = [];
y[&quot;something&quot;] = &quot;hi&quot;;
</pre>
<p>
	<code>x</code> and <code>y</code> define the same thing. Both objects will have a <code>something</code> property with the value <code>&quot;hi&quot;</code>.&nbsp;<em>Need more proof?</em>Try the following:</p>
<pre class="prettyprint">
alert( typeof( new Array() ) );</pre>
<p>
	This will alert <code>&quot;object&quot;</code>. Huh?</p>
<p>
	Yup, an array is just an object with properties named &quot;0&quot;, &quot;1&quot;, &quot;2&quot; etc. Take a look at this next code block.</p>
<pre class="prettyprint">
var a = {
    0: &quot;hi&quot;,
    1: &quot;there&quot;
};

var b = [ &quot;hi&quot;, &quot;there&quot; ];
</pre>
<p>
	Here <code>a</code> and <code>b</code> are the same exact thing. <a href="http://beta.jsvudo.com/3f40176">Try it out!</a></p>
<p>
	<strong>Alright, that is insane but why the problem with for/in?</strong></p>
<p>
	When you use a for/in on an object in javascript you are looping over the keys in the key/value collection that makes up that object. So doing</p>
<pre class="prettyprint">
var x = {
    prop1: &quot;test&quot;,
    prop2: &quot;test&quot;
};

for(var p in x ) { 
    alert(p); 
} 
</pre>
<p>
	This code will alert &quot;prop1&quot; followed by &quot;prop2&quot;. Using a for/in doesn&#39;t try to treat the object as an array, it enumerates each property (or key) in the object.</p>
<p>
	Now you should start to see why for/in is generally a bad idea in JavaScript - that is, unless you <strong>want</strong> to loop over the properties of an object.</p>
<p>
	<strong>Another fun fact</strong></p>
<p>
	The for/in loop isn&#39;t guaranteed to alert &quot;prop1&quot; before &quot;prop2&quot;. The properties will be enumerated in whatever order the interpreter returns them in.</p>
<p>
	So to summarize, unless you want to enumerate an objects properties, and you don&#39;t care about their order, avoid using the for/in loop in your JavaScript code.</p>
