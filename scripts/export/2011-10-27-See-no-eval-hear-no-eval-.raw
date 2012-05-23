---
layout: post
status: publish
title: 'See no eval(), hear no eval()'
slug: See-no-eval-hear-no-eval-
---
# See no eval(), hear no eval()
## Dynamic evaluation is a great way to shoot yourself in the foot.

<p>
	Eval is a function in JavaScript that allows developers to invoke the js compiler and pass a string to be compiled and evaluated. Eval is often misused by developers which creates a&nbsp;<a href="http://www.youtube.com/watch?v=8vxEimC3HME#t=1m14s" target="_blank">ticking timebomb in your codebase</a>.&nbsp;</p>
<p>
	Here&#39;s <a href="http://blogs.msdn.com/b/ericlippert/archive/2003/11/01/53329.aspx" target="_blank">what Eric Lippert says on eval</a>:</p>
<blockquote>
	[eval] is probably the most powerful and most misused method in JScript. There are a few scenarios in which eval is invaluable. For example, when you are building up complex mathematical expressions based on user input, or when you are serializing object state to a string so that it can be stored or transmitted, and reconstituted later.</blockquote>
<p>
	Eric uses a pretty contrived example in his blog post, I don&#39;t think a lot of JavaScript devs are misusing eval in the way he shows in his post.</p>
<p>
	Most of the time, when I see a developer misusing eval, their real problem is their misunderstanding of how scoping works with JavaScript. Take the code below as an example.</p>
<p>
	I opened up the wayback machine and snagged some real production code from a previous job where we used JavaScript to scrape websites years before it was called &quot;AJAX&quot;.</p>
<pre class="prettyprint">
<code>     var httpRequest = new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
     var fStr = &quot;var callbackFunction = function () {&quot;;
     fStr += &quot;  if (nCrossings &amp;&amp; 4==httpRequest.readyState) {&quot;;
     fStr += &quot;    callback(httpRequest);&quot;;
     fStr += &quot;  } else {&quot;;
     fStr += &quot;  }&quot;;
     fStr += &quot;}&quot;;

     //alert(fStr);
     eval (fStr);</code></pre>
<p>
	<i>* note: if this looks familiar it&#39;s because I had submitted part of this code to The Daily WTF waaaaaaaaay back in 2004. Check out&nbsp;<a href="http://thedailywtf.com/Comments/JavaScript_eval().aspx" target="_blank">the original post here</a>.</i></p>
<p>
	Aside from the empty else (which is priceless), what are the other problems here?&nbsp;</p>
<ol>
	<li>
		it looks like shit. Seriously, this code makes my soul hurt.</li>
	<li>
		the eval statement is going to require a compilation to take place each time it&#39;s called. This can slow things down when it&#39;s used in a loop or used in a frequently called method.</li>
	<li>
		maintaining code like this is going to be a nightmare.</li>
	<li>
		debugging this is going to be... interesting. Note the commented out alert() statement.</li>
	<li>
		what if fStr were modified to include a variable that was assigned from user input? This could allow any number of injection attacks to take place on our codebase.</li>
</ol>
<p>
	I know what the developer intended to do here. They wanted to pass the currently executing httpRequest object into the callback that is supposed to be called once the request recieves a response.</p>
<p>
	However, the developer didn&#39;t understand that httpRequest would be available to any function created at the same level as itself. This is because JavaScript, since it shares more in common with Scheme than Java, uses a function scope instead of a block scope.</p>
<pre class="prettyprint">
<code>    var test = 10;
    function testing() {
        alert(test);
        var test = 1;
        return function() {
            alert(test);
        }
    }
    var result = testing();
    result();</code></pre>
<p>
	It will probably surprise you that the code above alerts &quot;undefined&quot; and then &quot;1&quot;. This is a perfect example of function scoping in action. In JavaScript whenever you ask for a variable you&#39;ll be given the closest scoped variable with that name.</p>
<p>
	In this example, our first alert shows &quot;undefined&quot; because in the testing function the closest scoped variable named &quot;test&quot; has not been defined yet. Once we call the result() our variable has been defined, and a reference to it has been kept alive, so we see the alert &quot;1&quot;.</p>
<p>
	Now that we know a bit more about scoping, how can we rewrite the code above to improve it?</p>
<p>
	All of that code above could easily be replaced with the following JavaScript:</p>
<pre class="prettyprint">
<code>    var httpRequest = new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
    var callbackFn = function() {
        if( nCrossings &amp;&amp; httpRequest.readyState === 4 ) { 
            callback(httpRequest); 
        }
    };
</code></pre>
<p>
	The only difference between this new code and the fStr mess above is that this doesn&#39;t take extra compilation time. This code will be easier to maintain, debug, read, and it doesn&#39;t open your codebase up to injection attacks.</p>
<p>
	99.9999% of the time, if you&#39;re using eval(), you&#39;re trying to cram a round peg in a toaster and are just hurting yourself in the long-run.</p>
