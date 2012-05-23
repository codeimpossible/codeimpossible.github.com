---
layout: post
status: draft
title: 'How to JavaScript, Lesson 1: Scope'
slug: How-to-JavaScript-Lesson-1-Scope
---
# How to JavaScript, Lesson 1: Scope
## JavaScript is my favorite language but it can be a cruel mistress. In this post I'll go over the most important aspect of JavaScript: Variable Scoping.

<p>
	JavaScript, unlike most of it&#39;s programming language cousins, only scopes variables to the function level. This can, and probably will, come around to bite a lot of you if you&#39;re coming from a C# or Java background. Remember, JavaScript is to Java as carpet is to car.</p>
<p>
	Block Scoping</p>
<p>
	The easiest way to describe block scoping is to show you a sample of block scoping in action. Below is some C#/Java code that demonstrates block scoping.</p>
<pre class="prettyprint">
using System; 
 
public class ScopeDemo { 
  private int z = 99; // known to all code within ScopeDemo
  public static void Main() { 
    int x = 10; // known to all code within Main() 
    if(x == 10) { // start new scope
      int y = 20; // known only to this block 

      // x and y both known here. 
      x = y * 2; 
    } 
    // y = 100; // Error! y not known here   
    // x is still known here. 
  } 
}
</pre>
<p>
	So see how in our demo code <code>z</code>, <code>x</code>, and <code>y</code> are all available to different sections of the codebase? This is allowed by block scoping.</p>
<h3>
	The first example, checkNumber()</h3>
<p>
	In this example we&#39;ve got a function that checks a variable <code>number</code>. If the variable isn&#39;t defined the function re-defines it. Either way, the value is alerted. Once the function is done we alert the value of <code>number</code>.</p>
<p>
	<em>What will the first alert display? What about the second?</em></p>
<pre class="prettyprint">
&lt;script type=&quot;text/javascript&quot;&gt;
var number = 1;
function checkNumber() {
    if( number == undefined ) ) {
        var number = 10;
    }
    alert(number);
}
checkNumber();
&lt;/script&gt;
</pre>
<p>
	Would it</p>
<p>
	&nbsp;</p>
<p>
	Outline:</p>
<ul>
	<li>
		Discuss scoping</li>
	<li>
		self calling functions</li>
	<li>
		window scope</li>
</ul>
<p>
	&nbsp;</p>
<p>
	Your main body should fully realize the ideas you set into motion in the introduction section. Keep your posts short and to the point as shorter blog posts are easier to read and remember.</p>
<p>
	Use a consistent style in your writing, once you&#39;ve picked a style that suites you and your audience, stick to it.</p>
<p>
	Be your own editor. Before you publish your post, go back and re-read it. Does it sound like you? Does it make sense? Does it get right to the point?</p>
