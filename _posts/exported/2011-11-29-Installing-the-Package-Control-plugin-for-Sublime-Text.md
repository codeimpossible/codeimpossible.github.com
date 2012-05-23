---
layout: post
status: publish
title: 'Installing the Package Control plugin for Sublime Text'
slug: Installing-the-Package-Control-plugin-for-Sublime-Text
---
# Installing the Package Control plugin for Sublime Text
## Package Control + Sublime Text = where has this been all my life?

<p>I wrote previously how <a href="http://www.codeimpossible.com/2011/11/13/Notepad-it-s-time-we-saw-other-editors">I've given up on Notepad++</a>. It's time to find a new editor. But this new editor has to be great. Not just "good", or "okay", or "decent" but great. We're talking Sean Connery as Bond <strong>great</strong>.
</p><p>
I've used N++ for the past 6 years as my defacto file editor. Javascript, Html, Css, Xml, java, c#, ruby, basically anything I needed to edit was run through N++. </p>

<p>Which means its replacement has to do a lot of heavy lifting in the syntax coloring and language features area. And with its really amazing plugin framework and one particularly awesome plugin, Sublime Text has no equal.</p>

<p><strong>Enter Package Control</strong></p>

<p><a href="http://wbond.net/sublime_packages/package_control">Package Control</a> is a plugin for sublime text written by Will Bond, who has <a href="http://wbond.net/sublime_packages/">an awesome collection of plugins</a> on his site. Will has instructions on <a href="http://wbond.net/sublime_packages/package_control#installation">how to install Package Control</a> on his website. It's pretty easy, just copy and paste some python text into the SublimeText console, restart the editor and you're off and running!</p>

<p>Package Control is a plugin manager for sublime text. If you've used <a href="http://rubygems.org">rubygems</a> or <a href="http://nuget.org">nuget</a> you'll be very familiar with Package Control.</p>

<p><strong>Installing your first plugin</strong></p>

<p>Installing a plugin is insanely simple. Use the key combination <code>ctrl+shift+p</code>, this will bring up the command palette window. From here you just type in "Package Control:" and you will see a listing similar to the screenshot below.</p>

<p><img src="http://content.screencast.com/users/codeimpossible/folders/Jing/media/6a9278bf-f7f3-47c6-af65-a512732274cb/2011-11-13_2050.png"></p>

<p>See that text "Install Package"...? Yeah, select that (you can click it or use the arrow keys) and PackageControl will start fetching the list of plugins from the current list of repositories. </p>

<p>You can add repositories to this list by following the directions on the Package Control website but it has a bunch of plugins included by default.</p>

<p>Once the list of plugins is retrieved it will be displayed in the same way the command palette was and you can filter the items by typing. </p>

<p>I wanted a ruby test runner so I typed in "Ruby" and I saw a plugin named "RubyTest". I pressed enter and about 30 seconds later the plugin was installed. No need to restart SublimeText!</p>

<p>Extensibility is something a lot of applications brag about (Microsoft Office, Notepad++) but only a few truly deliver on that. Sublime Text is one of those applications. Sublime Text takes the same approach to plugins that FireFox did. If you can think it, you can do it.</p></div>