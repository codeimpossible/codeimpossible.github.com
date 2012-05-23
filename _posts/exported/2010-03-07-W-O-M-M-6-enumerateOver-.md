---
layout: post
status: publish
title: 'W.O.M.M. #6 - enumerateOver()'
slug: W-O-M-M-6-enumerateOver-
---
# W.O.M.M. #6 - enumerateOver()
## 

<img class="alignleft" title="works-on-my-machine-starburst" src="http://codeimpossible.com/wp-content/uploads/2009/06/works-on-my-machine-starburst.jpg" alt="works-on-my-machine-starburst" />

I've been focusing more and more on <a href="http://bitbucket.org/codeimpossible/jsoq"> my port of Ling-to-Objects, Jsoq</a> the past few weeks. It's still in really early stages and I'm not quite sure about it's actual usefulness but I'm learning a lot about JavaScript and having a ton of fun along the way!

Jsoq deals with arrays a lot. About 95% of it's use cases involve either looping through, altering, or creating arrays. Having a ton of <code>for</code> loops in my code just seems so... not right. For loops have always seemed dirty to me. They just aren't elegant enough. 

Here is your normal, average, everyday <code>for</code> loop in Javascript.

<pre class="prettyprint"><code>
var array = "1,2,3,4,5,6,7,8,9,10".split(',');

for(var i = -1, l = array.length; ++i &lt; l;) {
    alert(array[i]);
}
</code></pre>

This works. It's reliable and gets the message across. But what if we needed to loop over an array and get all the items that matched a condition? Using a <code>for</code> loop the code could look something like:

<pre class="prettyprint"><code>
var array = [ 1, 2, 3, 4, 5, 1, 2, 3, 4 ];
var results = [];
var condition = function(i) { return i%2 == 0; };

for(var itt = -1, len = array.length; ++itt &lt; len;) {
	if( condition(array[itt]) ) {
		results.push(array[itt]);
	}
}
</code></pre>

This does work, I've written code like this many times before, and while <em>technically</em> there isn't anything wrong with it I think there is still room for improvement.

Jsoq is going to be handling arrays all over the place so the solution to this problem <em>needs</em> to be simple.

Here's what I need:
<ul>
	<li>to loop over an entire collection and perform an action on each item.</li>
	<li>If that action produces a result, the item is to be pushed into an array and returned to after the loop is done</li>.
	<li>Also: it needs to be readable, someone else coming along should be able to determine what this thing is doing without too much difficulty. So I had my work cut out for me. </li>
</ul>

A few hours later I had a decent function that I could use to replace a lot of the <code>for</code> loops I had. After some more refactoring I was able to wipe them all out and replace them with calls to <code>enumerateOver()</code>. Here is the latest version from source control:

<pre class="prettyprint"><code>
function enumerateOver(collection, work) {
	var result = [], val = [];
	
	if (isArray(collection)) {
		try {
			for (var i = -1, l = collection.length; ++i < l;) {
				result = work(collection[i], i);
				if (typeof result !== "undefined" && result != null) {
					val.push(result);
				}
			}
		}catch (e) {
			if (e != jsoq.$break) throw(e);
		}
		
		if (val.length > 0) {
			return val;
		}
	}else {
		try {
			val = work(collection, 0);
		}
		catch (e) {
			if (e != jsoq.$break) throw(e);
		}
		if (typeof val !== 'undefined') {
			return val;
		}
	}
	return result == null ? [] : result;
}
</code></pre>

And here is the code to replace the <code>for</code> loops above, re-written to use <code>enumerateOver()</code>

<pre class="prettyprint"><code>
var results2 = enumerateOver(array, function(i, c) {
     return i%2 == 0;
});
</code></pre>

So by implmenting this function I was able to come up with a more readable, testable and streamlined codebase. Is this suitable for everyone? Definitely not, but I did it for a few reasons:

<ol>
	<li>Like I mentioned before. I've never been at ease with <code>for</code> loops and being able to replace them all with calls to a single function was a huge win for me</li>
	<li>The normal use-case didn't fit right. I needed to not only iterate over arrays but also return the results of work performed on those items. Doing this the "regular" way just wouldn't work (see previous reason)</li>
	<li>I thought this was a fun problem to solve</li>
</ol>

If you have any feedback, good, bad, or indifferent add a comment!