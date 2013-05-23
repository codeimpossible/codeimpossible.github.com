---
layout: post
published: false
title: 'Github should select a license for you'
slug: "oss-license"
date: '2013-05-22 23:30 -04:00'
tags: "open-source, licensing, github"
---

I'm tired of finding cool open source projects on github only to realize that I can't use them because they don't include a OSS license.

When you create a repo on Github, it should automatically be populated with a `LICENSE` file containing the MIT license. If you want to overwrite it you can update it yourself.

Most of the project owners I've contacted have been really great about adding a license. In fact, a lot of them just reply with "Oops! Shit, I'll add one right now." Why not force them to do this by including the license automatically?

[An article on The Register](http://www.theregister.co.uk/2013/04/18/github_licensing_study/) says that only about 15% of the projects on github declared a license.

 > According to Williamson, out of the 1,692,135 code repositories he scanned, just 219,326 of them – 14.9 percent – had a file in their top-level directories that identified any kind of license at all. Of those, 28 per cent only announced their licenses in a README file, as opposed to recommended filenames such as LICENSE or COPYING.

Seriosuly? How is this helping OSS? Github, just give these guys a nudge in the right direction.

Or, possibly even better, use a more restrictive license like GPL or a wonky one like Douglas Crockfords "do no evil" license.

Github will help you populate your `.gitignore` so why not your `LICENSE` file?
