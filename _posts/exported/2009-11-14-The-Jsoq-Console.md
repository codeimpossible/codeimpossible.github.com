---
layout: post
status: publish
title: 'The Jsoq Console'
slug: The-Jsoq-Console
---
# The Jsoq Console
## 

During <a href="http://codeimpossible.com/2009/02/10/introducing-the-javascript-object-query-library">the first round of development for JSOQ</a> I needed a faster way to test than unit-tests alone could provide. What I needed was a dirt-simple page that I could run in a browser, enter some JavaScript code, click a button and see it execute. 

I built the initial JSOQ Console (which is still included with the JSOQ source code) in about 20 minutes and it increased my productivity by 10x.

It was much faster to test JSOQ functions with the JSOQ Console than it had been with unit-tests. As a result I was able to prototype new functionality in about 1/2 the time.

I've finally moved <a href="http://codeimpossible.com/jsoq">v0.2 of the Jsoq Console</a> to my blog here so you can use it to quickly test out your own JavaScript code!

How it works is pretty straight forward. If you've got a snippet of JavaScript, be it jQuery (for the moment jQuery is the only external library that is supported but that will change soon), JSOQ or any other javascript code, you can run it with the JSOQ Console.

Just navigate to <a href="http://tinyurl.com/jsoqconsole">http://tinyurl.com/jsoqconsole</a> or <a href="http://codeimpossible.com/jsoq">http://codeimpossible.com/jsoq</a> for those of you that like to type, paste your code into the textarea at the top of the page, press "Run" and your code will run!

So enjoy! If you get confused there are also samples that will show you how to use the more "advanced" features. Also, drop a comment or share the console with others if you thought it was useful!