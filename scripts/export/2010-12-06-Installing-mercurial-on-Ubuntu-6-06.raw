---
layout: post
status: publish
title: 'Installing mercurial on Ubuntu 6.06'
slug: Installing-mercurial-on-Ubuntu-6-06
---
# Installing mercurial on Ubuntu 6.06
## Over thanksgiving break I dug an old linux pc out of our basement and installed began setting it up as a continuous integration machine for some personal projects.

<p>
	Installing git and svn on Ubuntu 6.06 is incredibly easy but getting mercurial installed required a few more steps. Here&#39;s what I did to get it running. <em>Update: I&#39;m keeping the list of steps here to help anyone thats stuck but if you have 6.06 and an internet connection then you should skip to the end of this post for the pain free installation steps.</em></p>
<ol>
	<li>
		Mercurial needs python &gt;= 2.4 to run, make sure it&#39;s installed.<br />
		<code>$ sudo apt-get install python</code></li>
	<li>
		You&#39;ll also need the Python C headers and a C compiler.<br />
		<code>$ sudo apt-get install build-essential gcc python-dev</code></li>
	<li>
		If you want to generate the documentation you&#39;ll need AsciiDoc and XmlTo as well.<br />
		<code>$ sudo apt-get install asciidoc xmlto</code></li>
	<li>
		download Mercurial from the <a href="http://packages.ubuntu.com/dapper/i386/mercurial/download">dapper package repo</a>.<br />
		<code>$ wget REPO_URL</code></li>
	<li>
		Install Mercurial!<br />
		<code>$ sudo dpkg -i mercurial_0.7-8_i386.deb</code></li>
</ol>
<p>
	Altogether this would look like:</p>
<pre class="prettyprint">$ sudo apt-get install python
$ sudo apt-get install build-essential gcc python-dev $ sudo apt-get install asciidoc xmlto
$ wget http://mirrors.rit.edu/ubuntu//pool/universe/m/mercurial/mercurial_0.7-8_i386.deb
$ sudo dpkg -i mercurial_0.7-8_i386.deb</pre>
<p>
	<strong>Installing Mercurial with no headaches</strong><br />
	After doing all this I found out than I could have just <a href="https://help.ubuntu.com/community/HardyUpgrades">upgrade my installation of Ubuntu to 8.04</a> and then run <code>$ sudo apt-get install mercurial</code> to install the latest version pain free. Doh!</p>
