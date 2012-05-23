---
layout: post
status: publish
title: 'Wordpress.com SyntaxHighlighter - How To Remove Indent'
slug: Wordpress-com-SyntaxHighlighter-How-To-Remove-Indent
---
# Wordpress.com SyntaxHighlighter - How To Remove Indent
## 

I post a lot of source code on my blog and lately I've been having a lot of trouble trying to remove the left-padding from my source code blocks.

My problem comes from the <a href="http://code.google.com/p/syntaxhighlighter">SyntaxHighlighter</a> stylesheet that WP.com uses and how it specifies the padding-left for the ordered-lists underneath the .dp-highlighter div tag:

<pre class="prettyprint"><code>
.dp-highlighter ol
{
    list-style: decimal; /* for ie */
    background-color: #fff;
    margin: 0px 0px 1px 45px !important; /* problem */
    padding: 0px;
    color: #5C5C5C;
}
</code></pre>

The use of the !important declaration is what is messing me up. The SyntaxHighlighter stylesheet is included at the end of the page html source and my custom css is at the top, so even though the SyntaxHighlighter styles have a lower higher <a href="http://www.stuffandnonsense.co.uk/archives/css_specificity_wars.html">css specificity</a> - my styles will never override them because <a href="http://www.w3schools.com/css/css_intro.asp" target="_blank">CSS is processed top-down</a>.  <em>from "CSS Introduction" @ w3schools:</em>
<blockquote><strong>What style will be used when there is more than one style specified for an HTML element?
</strong>
Generally speaking we can say that all the styles will "cascade" into a new "virtual" style sheet by the following rules, where number four has the highest priority:
<ol>
	<li>Browser default</li>
	<li>External style sheet</li>
	<li>Internal style sheet (inside the &lt;head&gt; tag)</li>
	<li>Inline style (inside an HTML element)</li>
</ol>
So, an inline style (inside an HTML element) has the highest priority, which means that it will override a style declared inside the &lt;head&gt; tag, in an external style sheet, or in a browser (a default value).</blockquote>
At this point I began thinking that it was pointless to try any more and that I should just accept that my code blocks would forever be indented by 45 pixels.

However, I'm way too stubborn to admit defeat, and after spending a night reading about css specificity and trying some crazy hacks of my own, I realized that my problem was simple. <strong>I just wanted the code to be farther to the left</strong>.

So my solution was equally simple (<a href="http://en.wikipedia.org/wiki/Occam's_razor">Occam's Razor</a> baby!): tell the outer container to allow overflow and position the child relatively and to offset it by the distance I wanted. I did this by applying to the outer div ( the ".dp-highlighter" div ) the following style:

<pre class="prettyprint"><code>
DIV.dp-highlighter {
overflow:auto;
padding:10px;
}
</code></pre>

And added this style to the OL tag within the .dp-highlighter div:

<pre class="prettyprint"><code>
.dp-highlighter ol {
position:relative;
left:-45px;
}
</code></pre>