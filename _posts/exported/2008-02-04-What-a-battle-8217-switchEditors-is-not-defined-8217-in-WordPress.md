---
layout: post
status: publish
title: 'What a battle: &#8217;switchEditors is not defined&#8217; in WordPress'
slug: What-a-battle-8217-switchEditors-is-not-defined-8217-in-WordPress
---
# What a battle: &#8217;switchEditors is not defined&#8217; in WordPress
## 

Okay, so the blog looks like it is back up and running. The front-end has been up for about 2-3 hours now but the admin section has been a royal pain in the ass to get back to a livable state. What happened was that earlier today I noticed that several of my toolbar items had disappeared from my edit page (most notably the "More" page break button) and I could no longer toggle between Visual and Code view.

After <a href="http://wordpress.org/search/switchEditors+is+not+defined?forums=1&amp;bugs=1" target="_blank">researching</a> <a href="http://wordpress.org/search/switchEditors+is+not+defined?forums=1" target="_blank">the</a> <a href="http://wordpress.org/support/topic/145002" target="_blank">problem</a> <a href="http://wordpress.org/support/topic/117860?replies=2" target="_blank">it</a> <a href="http://mu.wordpress.org/forums/topic.php?id=5701&amp;page" target="_blank">looked</a> like I had my work cut out for me. To make a long story short I ended up doing all of the following steps:
<ol>
	<li>Upgraded my wordpress installation</li>
	<li>down graded my wordpress installation</li>
	<li>added / removed a new MCE</li>
	<li>added / removed another MCE</li>
	<li>edited about 5 -6 wordpress php files</li>
	<li>reverted those 5 - 6 wordpress php files</li>
	<li>upgraded word press again</li>
</ol>
Until, finally, I gave up and implemented the ugliest hack ever (I am not sure why wordpress seemingly 'forgot' my toolbar settings) <a href="http://wordpress.org/support/topic/145002" target="_blank">which I discovered over at this site</a> (last post to the thread). If anyone has figured out how to fix this (in such a way that it doesn't feel so klooged together) then please speak up and let me know.