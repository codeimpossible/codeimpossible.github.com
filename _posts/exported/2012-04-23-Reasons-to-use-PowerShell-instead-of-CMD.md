---
layout: post
status: publish
title: 'Reasons to use PowerShell instead of CMD'
slug: Reasons-to-use-PowerShell-instead-of-CMD
---
# Reasons to use PowerShell instead of CMD
## I stopped using cmd.exe in favor of PowerShell almost a year ago. Here's a quick list of things that made me drop CMD forever.

<p>
	First, I guess I should say that there isn&#39;t anything necessarily&nbsp;<strong>wrong</strong> with the command line in windows. It&#39;s the &#39;ol standby for a lot of windows users. It&#39;s looked the same since 1986, it has the same familiar commands and you can use TrueType fonts if you want to be a rebel.</p>
<h3>
	I.R.O.N.</h3>
<p>
	Powershell is built on top of the .Net Framework which means that <a href="http://www.dougfinke.com/blog/index.php/2010/08/29/how-to-load-net-assemblies-in-a-powershell-session/">any assembly that is compiled with .net can be brought into powershell</a> and used to automate/extend the console.</p>
<p>
	Say goodbye to horrible .bat files in your projects. just create an ShellAutomation.dll in your project and write some powershells scripts and you&#39;re good to go!</p>
<h3>
	&quot;ls&quot;, &quot;pwd&quot;</h3>
<p>
	Two letters: &quot;ls&quot;. The PowerShell command window has support for a ton of the *nix shell commands, no more &#39;ls is not a command or batch file&#39; errors! This should be enough to get you to switch!</p>
<h3>
	It has modules!!!</h3>
<p>
	<a href="http://psget.net/">PsGet</a> is a package manager for PowerShell (remember when I said that <a href="http://codeimpossible.com/2011/11/29/Installing-the-Package-Control-plugin-for-Sublime-Text">everything needs a package manager</a>?). You can choose from a ton of modules off their directory and PsGet will isntall them for you.</p>
<h3>
	Git is better in powershell</h3>
<p>
	<a href="https://github.com/dahlbyk/posh-git/">Posh-Git</a> is a PowerShell script for, you guessed it, git that has makes me love working with git more than I ever could on linux/mac. The major selling point? contextual tab-completion. It&#39;s freaking awesome. Git on all other platforms has been put on notice.&nbsp;</p>
<h3>
	Easy automation</h3>
<p>
	PowerShell is a pretty easy language to grok. I&#39;ve only used it in passing to automate really tedious tasks, but if I can throw a workable script together in 10 minutes then the language&nbsp;<strong>has&nbsp;</strong>to be easy to understand!</p>
<h3>
	Awesome output commands</h3>
<p>
	clip is a command that copies whatever is &quot;piped&quot; to it to the clipboard. Yeah, no more right-clicking on the cmd window icon, selecting &quot;select all&quot; and pressing enter. Just pipe the output!</p>
<pre class="prettyprint">
<code>$ c:\&gt; ls | clip</code></pre>
<p>
	The directory listing for my c:\ root would be put into the clipboard, ready to be pasted into a blog post, email or <strike>message-board</strike> twitter flame.</p>
<p>
	out-gridview is a similar command but instead of putting the piped data into the clipboard, PowerShell will show a WPF-style data grid view of the data.</p>
<p>
	So that&#39;s my list, if you&#39;re using powershell already let me know what you like most about it in the comments. If I&#39;ve forgotten something obvious let me know!</p>
<p>
	For more resources on powershell, check out the <a href="http://blogs.technet.com/b/heyscriptingguy/archive/2011/06/18/top-ten-favorite-powershell-tricks-part-1.aspx">Hey!, Scripting Guy</a> blog as well as <a href="http://www.beefycode.com">BeefyCode</a>&nbsp;blog (what an awesome name for a blog). Until next time.</p>
