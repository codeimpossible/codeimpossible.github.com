---
layout: post
status: publish
title: 'Comments stink!'
slug: Comments-stink-
---
# Comments stink!
## 

I've been thinking about the whole <a href="http://memeagora.blogspot.com/2008/11/comments-code-smell.html" target="_blank">Comments-as-a-code-smell argument</a> for a very long time. When I first heard this idea, I was in the comments are definitely needed side of the argument.

<em>"Who could hate comments so much that they would label them as a code smell?"</em> I thought.

Well, I had an epiphany the other day.

<strong>I've never seen a block of code that actually needed a comment. Ever.</strong>

If you have a section of code that feels too complex, instead of adding a comment do any/all of the following and you can, in almost every case, reduce the need for comments by 100%:
<ol>
	<li>add a sourcecontrol commit comment</li>
	<li>do a simple refactor (<a href="http://www.industriallogic.com/xp/refactoring/composeMethod.html" target="_blank">Compose Method</a> ftw people),</li>
	<li>use more descriptive variable/function/class/whatever names.</li>
</ol>
If you do all of these things and the code you are working on still seems too complex, you may have bigger problems with your overall architecture/design and adding a comment isn't going to help. In this case it's time to go back to the drawing board.

Also, everytime you commit a changeset into sourcecontrol that contains a section of code commented out god kills a kitten. Please think of the kittens.