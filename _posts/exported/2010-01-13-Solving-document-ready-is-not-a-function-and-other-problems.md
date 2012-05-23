---
layout: post
status: publish
title: 'Solving &quot;$(document).ready is not a function&quot; and other problems'
slug: Solving-document-ready-is-not-a-function-and-other-problems
---
# Solving &quot;$(document).ready is not a function&quot; and other problems
## Ever been working on a customer's site, writing some really awesome jQuery, you deploy it, and everything is awesome. And then you get an email one day...

<p>
	Has this ever happened to you: you&#39;ve been working on a customer&#39;s site, writing some really awesome jQuery flashy, fadey, scrolly, interactivey thing, you deploy it, and everything is awesome. The customer rejoices and the customer&#39;s customers rejoice. Rejoicing is had by everyone. And then you get an email one day:</p>
<blockquote>
	&quot;Everything is broken. We&#39;ve kidnapped your dog. Fix our site or you&#39;ll never see Spartacus again.&quot;</blockquote>
<p>
	And before you have time to wonder why you ever named your dog &quot;Spartacus&quot; to begin with (i mean <strong>come. on.</strong>), you&#39;re off in debug hell. You load the site and see all sorts of weird errors: <code>&ldquo;$().ready is not a function&rdquo;</code> <code>&ldquo;$(document) doesn&rsquo;t support this property or method&rdquo;</code> Or my personal favorite: <code>&ldquo;null is null or not an object&rdquo;</code></p>
<p>
	You open up FireFox, activate FireBug, load the console, and type &ldquo;alert($)&rdquo;, press run, and instead of seeing the expected jQuery function:</p>
<pre class="prettyprint">
<code>function (E, F) {
    return new (o.fn.init)(E, F);
}
</code></pre>
<p>
	You instead get:</p>
<pre class="prettyprint">
<code>function $(element) {
    if (arguments.length &gt; 1) {
        for (var i = 0, elements = [], length = arguments.length; i &lt; length; i++) {
            elements.push($(arguments[i]));
        }
        return elements;
    }
    if (Object.isString(element)) {
        element = document.getElementById(element);
    }
    return Element.extend(element);
}
</code></pre>
<p>
	Or even:</p>
<pre class="prettyprint">
<code>function $(id) {
    return document.getElementById(id);
}
</code></pre>
<p>
	<strong>DOH!</strong> Looks like another javascript library has been loaded and has overwritten the <code>$()</code> shortcut for jQuery. Woe is I. Why can&rsquo;t we all just get along?!? Well, we can&rsquo;t stop people from including their favorite javascript libraries, but what we can do is prevent our code from suffering as a result. We&rsquo;ll need a nice, big beefy, bodyguard to make sure our code isn&rsquo;t messed with while it&rsquo;s out clubbing with Prototype, Scriptaculous or even MooTools (who invited <em>him</em>??!?). Here&rsquo;s what our bodyguard function will look like</p>
<pre class="prettyprint">
<code>
( function($) {

} ) ( jQuery );
</code></pre>
<p>
	So what this does is call our anonymous function and pass the <code>jQuery</code> object. This will scope &lsquo;$&rsquo; to within our little function so we won&rsquo;t step on anyone else&rsquo;s toes (and they won&rsquo;t bump into us while we&rsquo;re on the dance floor and spill our drink everywhere). Okay, I think I&#39;ve taken the clubbing metaphor far enough.</p>
<p>
	Basically this will allow our code to run and use the <code>$</code> shortcut for JQuery as if it were loaded without any of these other libraries on the page. Here is what the completed code would look like:</p>
<pre class="prettyprint">
<code>
&lt;script src=&quot;http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js&quot; type=&quot;text/javascript&quot;&gt;
&lt;/script&gt;

&lt;script src=&quot;http://ajax.googleapis.com/ajax/libs/prototype/1.6.1.0/prototype.js&quot; type=&quot;text/javascript&quot;&gt;
&lt;/script&gt;
&lt;script src=&quot;http://ajax.googleapis.com/ajax/libs/scriptaculous/1.8.3/scriptaculous.js&quot; type=&quot;text/javascript&quot;&gt;
&lt;/script&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
( function($) {
    // we can now rely on $ within the safety of our &ldquo;bodyguard&rdquo; function
    $(document).ready( function() { alert(&quot;nyah nyah! I&rsquo;m able to use &#39;$&#39;!!!!&quot;);  } );
} ) ( jQuery );

//this will fail
$(document).ready( function() { alert(&#39;fail?&#39;); } );
&lt;/script&gt;
</code></pre>
<p>
	I love using this simple self-calling anonymous function style when working with jQuery because it saves me from typing <code>jQuery()</code>, which really does look a lot more ugly than using the <code>$()</code> shortcut. It also protects my code from any scoping issues and lets the code function normally when <a href="http://docs.jquery.com/Core/jQuery.noConflict">jQuery is put into no conflict mode</a>.</p>
<p>
	My opinion, if you&#39;re doing work in jQuery on sites that you don&#39;t control 100%, you should be using this method to protect your code and your clients.</p>
<p>
	<strong>Updated: changed link for jquery to use 1.4.1 at the google CDN (tsk, tsk, tsk I was using the googlecode.com link)</strong></p>
