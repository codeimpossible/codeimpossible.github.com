---
layout: post
status: publish
title: 'Why alert() sucks'
slug: Why-alert-sucks
---
# Why alert() sucks
## Alerts are a terrible thing and no website should use them.

<p align="center">
	<img src="http://dl.dropbox.com/u/6291954/15086571.jpg" /></p>
<p>
	Alerts <strong>suck</strong>. In every web project that I work on, the code below is one of the first things I add. It will override the alert function an instead pass the argument supplied to the console.</p>
<pre class="prettyprint">
<code>// the console &amp;&amp; console.log check is to make sure 
// this code doesn&#39;t fail in IE which does not create 
// the console obj unless the user has dev tools open.
window.alert = function(m) {
  if(console &amp;&amp; console.log) {
    console.log(m);
  }
};</code></pre>
<p>
	Why is the code above necessary? Why should you stop using alerts in your production javascript code? Let&#39;s take a look.</p>
<p>
	<strong>Alerts block the javascript execution.</strong> When you call alert the entire javascript thread blocks until the alert dialog is closed. Sounds pretty useful right?</p>
<p>
	<strong>Alerts block the browser.</strong>&nbsp;Alert dialogs are displayed <a href="http://en.wikipedia.org/wiki/Modal_window" target="_blank">modally</a>&nbsp;which means that the parent thread (the browser) blocks until you close them.&nbsp;</p>
<p>
	<strong>They look terrible.</strong>&nbsp;This is pretty self explanatory. I&#39;ve never had an alert fit in with a websites ux. It&#39;s actually pretty jarring when you see one.</p>
<p>
	<strong>Alerts only display strings.</strong>&nbsp;Console.log can display all sorts of data, and is included in most major browsers (and node.js) which is why I chose to use console.log as a replacement for alert in the snippet above.</p>
<p>
	<strong>Alerts tend to lead to bad behaviors.</strong> I&#39;ve been working in web development for about 9 years now and in every codebase I&#39;ve worked on there is, somewhere, an alert with profanity or &quot;what the hell&quot;, or &quot;WTF&quot;, or some kind of rediculous message that a dev left in there to signal when they got to some unexpected block of code.</p>
<p>
	To this day, some developers still prefer to use this method but with all of the javascript unit test frameworks and in-browser debuggers out there this just doesn&#39;t make sense.&nbsp;</p>
