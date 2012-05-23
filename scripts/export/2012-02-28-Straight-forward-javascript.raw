---
layout: post
status: draft
title: 'Straight forward javascript'
slug: Straight-forward-javascript
---
# Straight forward javascript
## Write 2-3 sentences to grab your readers' attention. The ending should act as an introduction into your main body.

<p>
	Here is some &quot;straight forward&quot; javascript:</p>
<pre class="prettyprint">
<code>function hasUrl(text) {
  return (/https?://[\w+\.]*\.\w{2,}/i).match(text);
}</code></pre>
<p>
	We have a function that takes an argument and checks to see if it contains a url. Awesome. We can test this using a test like this:</p>
<pre class="prettyprint">
<code>blockyTest.addTest( &quot;should return true for http://www.google.com&quot;, function() {
  this.shouldBeEqual( true, hasUrl(&#39;http://www.google.com&#39;) );
});</code></pre>
<p>
	Note, in order to pimp my own stuff a bit, I&#39;m using my javascript testing library <a href="https://bitbucket.org/codeimpossible/blockytests/wiki/Home">BlockyTest</a>, but you could use <a href="http://docs.jquery.com/QUnit">Qunit</a>&nbsp;or <a href="http://www.jsunit.net/">JSunit</a>.</p>
