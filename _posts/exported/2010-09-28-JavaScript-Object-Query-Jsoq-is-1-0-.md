---
layout: post
status: publish
title: 'JavaScript Object Query (Jsoq) is 1.0!'
slug: JavaScript-Object-Query-Jsoq-is-1-0-
---
# JavaScript Object Query (Jsoq) is 1.0!
## 

I've finally pushed one of my side-projects, the JavaScript Object Query library to 1.0! I'm pretty psyched since I've been meaning to do this ever since <a href="http://codeimpossible.com/2009/02/10/introducing-the-javascript-object-query-library/">I blogged about it back in February</a>.

You can download the 1.0 release <a href="http://bitbucket.org/codeimpossible/jsoq/downloads/jsoq.1.0.min.js">here (minified)</a> and <a href="http://bitbucket.org/codeimpossible/jsoq/downloads/jsoq.1.0.debug.js">here (normal)</a>.

<strong>What is Jsoq?</strong><br />
Jsoq is a port of Linq to Objects to JavaScript. Under the covers jSoq is a bunch of wrapper code for dealing with arrays in JavaScript.

<strong>Features for v1.0</strong>
<ul>
    <li>Doesn't mess with "$" variables so it works with jQuery, Mootools, etc.</li>
    <li>using select() you can have Jsoq return only certain members from each object in it's query set</li>
    <li>use built-in filter methods first(), last(), skip(), take() or roll your own using where()</li>
    <li>ability to add functionality to your returned object via the extendEach() method</li>
    <li>you can use $q as a shortcut for the jsoq.From() method</li>
    <li>inner and left joins are now supported with the leftJoin() and innerJoin() methods</li>
</ul>


<strong>A very basic code example</strong><br />
Below is what I would call the common jsoq use case. The code below will find the first item that has a <code>value</code> property with a length greater than 3, and return an object containing its <code>id</code> property.

<pre class="prettyprint"><code>
var somearray = [
    { value: "one", id: 1 }, 
    { value: "two", id: 2 }, 
    { value: "three", id: 3 }, 
    { value: "four", id: 4 }
];

var result = $q(somearray)
                    .where(function(item) {
                        return item.value.length > 3;
                    })
                    .first()
                    .select("id");

alert(result.id); // alerts "3"
</code></pre>



For a full list of features and more code examples check out <a href="http://bitbucket.org/codeimpossible/jsoq/wiki/Home">the documentation on the official Jsoq wiki</a>, it's a bit sparse right now but I'll be adding more content in the near future.