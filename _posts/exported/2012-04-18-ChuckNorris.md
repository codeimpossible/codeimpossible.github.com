---
layout: post
status: publish
title: 'ChuckNorris'
slug: ChuckNorris
---
# ChuckNorris
## @JohnBubriski mentioned a project from the ChuckNorris suite of tools and I found myself browsing their git repo

<p>
	Looking through the git repo for&nbsp;<a href="https://github.com/chucknorris">ChuckNorris</a>, seeing the amazing number of tools that&nbsp;&nbsp;<a href="https://github.com/drusellers">Dru Sellers</a> and <a href="https://github.com/ferventcoder">Rob Reynolds</a> have turned out leaves me thinking one thought:</p>
<p align="center">
	<img alt="" src="http://dl.dropbox.com/u/6291954/bluesbrothers.jpg" /></p>
<p>
	If you don&#39;t know what ChuckNorris is, a lot of people call it a framework but it&#39;s more like a suite. There are, at the time I wrote this, about eight tools that target specific aspects of the development process. &nbsp;From database migrations, continuous builds, to deployment. ChuckNorris has a story for pretty much everything.</p>
<p>
	You don&#39;t have to use the tools together, they each work just as well separately, but when you combine them they make your life insanely simple.</p>
<p>
	You can listen to a <a href="http://castroller.com/Podcasts/Hanselminutes/2712218">episode of Hanselminutes where Scott interviews Rob about the framework</a>. It&#39;s a great episode, it reveals a lot of the inside details on how ChuckNorris came about.</p>
<p>
	To show my love for ChuckNorris I thought I would write up a few of the tools that I&#39;ve either used in the past or have thought were interesting.</p>
<p>
	<a href="https://github.com/chucknorris/roundhouse">RoundhousE</a> is a database migration tool, like db:migrate in Rails (or the new Entity Framework migrations). I&#39;ve used this in the past and it&#39;s very awesome.</p>
<p>
	<a href="https://github.com/chucknorris/warmup">WarmuP</a>, which is what <a href="http://www.johnnycode.com/blog/">@JohnBubriski</a> and I were talking about, is a project bootstrapper. Setup your project directories, templates, dependencies once and WarmuP will get them from source control and perform a token replacement on them. Pretty cool stuff.</p>
<p>
	<a href="https://github.com/chucknorris/uppercut">UppercuT</a> is a templated build system written on top of nant. I&#39;ve used this in the past as well, it sports a ton of extensibility points. Pretty much every step in the build process has Pre, Post or Replace hook so you can make it do&nbsp;<strong>anything</strong> and you can make it do anything in a matter of minutes.</p>
<p>
	Are there any OpenSource libraries/suites that you guys use that constantly surprise you with the sheer amount of features that they have? Give them a shoutout in the comments!</p>
