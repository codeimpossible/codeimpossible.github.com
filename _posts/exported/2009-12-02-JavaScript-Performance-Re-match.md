---
layout: post
status: publish
title: 'JavaScript Performance Re-match'
slug: JavaScript-Performance-Re-match
---
# JavaScript Performance Re-match
## 

Back in 2007 <a href="http://codinghorror.com" title="Jeff Atwood's blog">Jeff Atwood</a> ran the top 4 web browsers through the <a href="http://www2.webkit.org/perf/sunspider-0.9/sunspider.html" title="SunSpider JavaScript Benchmark">SunSpider JavaScript Benchmark</a> and <a href="http://www.codinghorror.com/blog/archives/001023.html" title="The Great Browser JavaScript Showdown">posted his findings</a>. It's been close to 2 years since then and I was curious to see how FireFox 3.5, IE8, IE7 (in Compatibility Mode) and Google Chrome 4.0.249.11 would fair. 

So I did pretty much the same thing Jeff did and here is what I found:

<img src="http://codeimpossible.com/wp-content/uploads/2009/12/JavaScript-Performance.png" alt="JavaScript Performance Graph" title="JavaScript Performance Graph" class="alignnone size-medium wp-image-704" />

<small><em>* System specs: Windows 7 64-bit on a Dual-Core 2.53ghz CPU with 4gb of RAM with no browser extensions</em></small>

<ol>
<li>Chrome kicks some serious butt over everyone else with <strong>the entire test suite running to completion in under 1 second!!</strong></li>
<li>FireFox 3.5 has some serious improvements coming in at just over 1.5 seconds total, which is about 1/10 the time it took FireFox 2.0</li>
<li>Internet Explorer 8 and Internet Explorer 7 (compat mode) are still bringing up the rear but they had a better showing than the 20+ seconds IE7 took when Jeff ran the test</li>
</ol>

<strong>Surprises?</strong>
The only thing I found surprising about the results was that if you removed the string test from both IE runs then IE8 in compatibility mode beats IE8 running normally. That doesn't seem right to me and I seriously hope JavaScript performance is something that gets addressed in IE9. And by "addressed" I mean "fixed by replacing Trident with WebKit".

So, what do these results <em>actually</em> mean? Well I guess it depends. If you use your browser to read blogs and check your gmail then you shouldn't really care about these numbers. However, if you're a web developer you should be paying strong attention to these numbers and how far they've come in <em>just 2 years</em>.
