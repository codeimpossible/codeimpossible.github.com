---
layout: post
status: publish
title: 'This blog will be different tomorrow'
slug: This-blog-will-be-different-tomorrow
---
# This blog will be different tomorrow
## I'll be blacking out this blog tomorrow in protest of SOPA/PIPA. Want to help?

<p>
	In the words of <a href="http://www.minecraft.com">Minecraft</a> creator <a href="http://notch.tumblr.com/">Notch</a>:</p>
<blockquote>
	<p>
		No sane person can be for SOPA. I don&rsquo;t know if we&rsquo;re sane, but we are strongly, uncompromisingly against SOPA, and any similar laws. Sacrificing freedom of speech for the benefit of corporate profit is abominable and disgusting.</p>
</blockquote>
<h3>
	How can I join in?</h3>
<p>
	It&#39;s easy - If you are a software developer you should fork <a href="https://github.com/SaraJo/SOPA-PIPA-Protest-Page">Sara Chipps&#39;s SOPA-PIPA protest git repository</a> and add your website(s) to the ever-growing list of blackout participants.</p>
<p>
	Then, when the time comes (Midnight, EST on 01/18/2012) simply modify your website(s) to display the HTML in the index.html file that is located in the root of the repository.</p>
<p>
	Keep in mind that for this protest you should modify your website so that it returns a 503 response code header so that google and other search engines won&#39;t index your SOPA/PIPA protest page as original content.</p>
<p>
	There are instructions on the internet on how to do this in <a href="http://www.kristen.org/content/503-http-status-code-when-site-down">Drupal</a>, <a href="http://shiftcommathree.com/articles/make-your-rails-maintenance-page-respond-with-a-503">.htaccess</a>, <a href="http://php.net/manual/en/function.header.php">Php</a>, <a href="http://stackoverflow.com/questions/4495961/how-to-send-a-status-code-500-in-asp-net-and-still-write-to-the-response">C#</a>, and <a href="http://stackoverflow.com/questions/8890351/return-a-specific-http-status-code-in-rails">Ruby on Rails</a>.</p>
<h3>
	That made no sense</h3>
<p>
	Well, if you&#39;re not a software developer we have a much easier option. Just include the javascript below on your website and visitors to your site will be sent to <a href="http://protestsopa.org/">http://protestsopa.org/</a>.</p>
<pre class="prettyprint">
<code>&lt;script type=&quot;text/javascript&quot;&gt;
    window.location.href = &quot;http://protestsopa.org/&quot;;
&lt;/script&gt;
</code></pre>
<h3>
	I can&#39;t blackout my entire site but still want to help</h3>
<p>
	Completely understandable, and there is an option for you as well! If you include the following javascript a 50px banner will be displayed on your site (example of the banner is included below the script):</p>
<pre class="prettyprint">
<code>&lt;script type=&quot;text/javascript&quot; 
src=&quot;https://raw.github.com/SaraJo/SOPA-PIPA-Protest-Page/master/javascript-only/banner.min.js&quot;&gt;
&lt;/script&gt;
</code></pre>
<p align="center">
	<a href="http://dl.dropbox.com/u/6291954/sopa_pipa_banner_example.PNG"><img src="http://dl.dropbox.com/u/6291954/sopa_pipa_banner_example.PNG" width="400px" /></a></p>
<p>
	If you do decide to join in on the SOPA/PIPA blackout leave a comment here with your website urls and I&#39;ll make sure you get added to the list.</p>
