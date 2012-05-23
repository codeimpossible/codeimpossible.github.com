---
layout: post
status: publish
title: 'Stupid Git Trick - getting contributor stats'
slug: Stupid-Git-Trick-getting-contributor-stats
---
# Stupid Git Trick - getting contributor stats
## Getting contributor stats for your non-public project can be a real pain, that is, unless you're using git!

<p>
	We use&nbsp;<a href="http://github.com" style="font-size: 18px; ">github</a>&nbsp;for all of our source code and documentation on the&nbsp;<a href="http://ohloh.net" style="font-size: 18px; ">Ohloh</a>&nbsp;team. We&#39;ve even got a few&nbsp;<a href="http://github.com/blackducksw" style="font-size: 18px; ">public open source</a>&nbsp;projects up there that you should check out, but I&#39;ll talk about those another time.</p>
<p>
	Earlier this week I tweeted my YTD commit stats from my new job:</p>
<blockquote class="twitter-tweet tw-align-center">
	<p>
		git stats so far - added lines: 4158 removed lines : 1628, need to get some more cleanup done!</p>
	&mdash; Jared Barboza (@codeimpossible) <a data-datetime="2011-12-13T16:08:08+00:00" href="https://twitter.com/codeimpossible/status/146622441274351616">December 13, 2011</a></blockquote>
<script src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
<p>
	And I was asked how I came up with those numbers, which made me realize two things:</p>
<ol>
	<li>
		git is awesome</li>
	<li>
		those numbers are wrong!</li>
</ol>
<h2>
	Git is awesome</h2>
<p>
	Git <strong>is</strong> awesome, and for a of other reasons that I&#39;ll cover in some future posts. Git is awesome right now because it collects stats. Not as a main feature, not really anyway, but as a by product of you and your team pushing code around.</p>
<p>
	Every commit in git is logged so git knows what the heck is going on at any given moment. Git is like that kid in college or high school that was so awesome at taking notes that he was able to buy a cannondale super v using the money he made selling copies of his notes to other people.</p>
<p>
	Git could probably afford to buy Amazing Fantasy issue 15 (first appearance of spider man for the non-nerds), git is <strong>that</strong> good at it.</p>
<p>
	Getting your commits from a git repo is pretty damned easy:</p>
<pre class="prettyprint">
<code>git log --author=&quot;Jared Barboza&quot; --pretty=tformat: --numstat
</code></pre>
<p>
	That line will ask git to go into its log and pull out the commits that you&#39;ve made and format them using the &quot;numstat&quot; formatting, more on this in a moment. The output will look like the example below, with the first column displays the number of additions (lines you added) and the second number is the number of deletions (lines removed).</p>
<pre class="prettyprint">
<code>5       8       public/javascripts/main.js
2000    0       public/javascripts/jquery/jquery.cycle.all.js
10      9       public/stylesheets/layout.css
</code></pre>
<p>
	Awesome, let&#39;s see if we can a nicer looking total out of this. Now, in order to do this we&#39;re going to need to do some terminal magic with <a href="http://gnuwin32.sourceforge.net/packages/gawk.htm">gawk</a>.</p>
<p>
	If you&#39;ve never used gawk before this might be really strange looking to you but it&#39;s pretty easy to grok. Gawk allows us to run &quot;code&quot; via the terminal and uses any text piped to it as arguments. So we can do this:</p>
<pre class="prettyprint">
<code>git log --author=&quot;Jared Barboza&quot; --pretty=tformat: --numstat | \
gawk &#39;{ add += $1 ; subs += $2 ; loc += $1 - $2 } END \
{ printf &quot;added lines: %s removed lines: %s total lines: %s\n&quot;,add,subs,loc }&#39; -
</code></pre>
<p>
	This will pipe (more about piping in the next section) the output from the <code>git log</code> command into gawk which will use each line as a new set of arguments and will keep a running total of the additions (first argument) , deletions (second argument) and the difference between the two (the &quot;true&quot; lines of code I&#39;ve commited).</p>
<p>
	After gawk is done we&#39;ll see this result on our terminal:</p>
<pre class="prettyprint">
<code>added lines: 2015 removed lines: 17 total lines: 1998
</code></pre>
<p>
	For those of you who are linux termnial n00bs like me, the <code>\</code> in the terminal command above is a line continuation character. It lets us tell the terminal that the command is continued on the next line.</p>
<p>
	The <code>|</code> character tells the terminal to take the output from the command on the left and feed it to the command on the right, this is called &quot;piping&quot;.</p>
<p>
	For all my Windows peeps, you can grab <a href="http://www.wingrep.com/features.htm">grep</a> and <a href="http://gnuwin32.sourceforge.net/packages/gawk.htm">gawk</a> for Windows to get this to work.</p>
<p>
	Now, back to the stats. They&#39;re great but they are not really accurate are they? I mean it&#39;s counting a jquery library (<a href="http://jquery.malsup.com/cycle/">jQuery Cycle</a> by Mr. Amazing himself, <a href="http://twitter.com/malsup">Mike Alsup</a>) which isn&#39;t my code so I don&#39;t want that to be part of my count. Which brings me to my next point.</p>
<h2>
	The numbers I posted are completely wrong!</h2>
<p>
	When I posted those numbers on the twitters I totally ignored the fact that I was counting files that I didn&#39;t write. So I needed to figure out how to remove certain lines from the result <em>before</em> it gets passed into gawk.</p>
<p>
	I found grep has a <code>-v</code> option that tells it to ignore lines that match the text supplied. So I can use the following in the &quot;pipeline&quot; (a chain of piped commands) to trim out the unwanted code file.</p>
<pre class="prettyprint">
<code>grep -v public/javascripts/jquery
</code></pre>
<p>
	When that it combined with the script from before I end up with:</p>
<pre class="prettyprint">
<code>git log --author=&quot;Jared Barboza&quot; --pretty=tformat: --numstat | \
grep -v public/javascripts/jquery | \
gawk &#39;{ add += $1 ; subs += $2 ; loc += $1 - $2 } END \
{ printf &quot;added lines: %s removed lines : %s total lines: %s\n&quot;,add,subs,loc }&#39; -
</code></pre>
<p>
	Which will print out</p>
<pre class="prettyprint">
<code>added lines: 15 removed lines: 17 total lines: -2
</code></pre>
<p>
	Now this is a much better count. We can see that I&#39;ve actually removed code from our codebase which is always a good thing.</p>
<h2>
	The &quot;Official Stats&quot; for my first 3 weeks</h2>
<p>
	So now that we have a much better way of determining commit stats, I re-did all my stats for the last three weeks. I used grep commands to break out the commit stats even more e.g. using <code>grep /test</code> and <code>grep /public/javascripts</code> to get the stats for unit tests and javascript.</p>
<p>
	<strong>Unit Tests:</strong> added lines: 696 removed lines: 107</p>
<p>
	<strong>Controllers:</strong> added lines: 43 removed lines: 50</p>
<p>
	<strong>Models:</strong> added lines: 71 removed lines: 77</p>
<p>
	<strong>Helpers:</strong> added lines: 15 removed lines: 7</p>
<p>
	<strong>Views:</strong> added lines: 221 removed lines: 143</p>
<p>
	<strong>Javascript:</strong> added lines: 1112 removed lines: 927</p>
<p>
	<strong>Css:</strong> added lines: 416 removed lines: 220</p>
<p>
	<strong>Project Total:</strong>&nbsp;added lines: 2574 removed lines: 1531</p>
<ul>
	<li>
		6.9% of removals and 27% of additions were unit tests</li>
	<li>
		60.5% of removals and 43% of additions were javascript</li>
</ul>
