---
layout: post
status: publish
title: 'Spot the bug - for/in and JavaScript'
slug: Spot-the-bug-for-in-and-JavaScript
---
# Spot the bug - for/in and JavaScript
## 

I'm poking around in the <a href="http://bitbucket.org/codeimpossible/jsoq" target="_blank">JSOQ source</a> this week and came across this gem. 

<pre class="prettyprint"><code>
var array = [
    { id: 1, num: 2 },
    { id: 2, num: 3}
];

// find the item with num == 2
for(var item in array) {
    if( item.num == 2 ) {
        alert(item.id);
    }
}
</code></pre> 

The code above isn't calling <code>alert(item.id)</code>. Why is this?