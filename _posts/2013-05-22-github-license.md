---
layout: post
published: false
title: 'Github should select a license for you'
slug: "oss-license"
date: '2013-05-22 23:30 -04:00'
tags: "open-source, licensing, github"
---

## I'm seeing more and more people post source code on Github without including a OSS License. You may as well just keep your code to yourself!

I'm tired of finding cool open source projects on github that I can't use because they don't include a OSS license. It's [infuriating](http://hyperboleandahalf.blogspot.com/2010/05/sneaky-hate-spiral.html).

Creating a `LICENSE` file - the community agreed upon way to license your code - on Github is completely optional, and if you actually do include one, you're in the minority.

[An article on The Register](http://www.theregister.co.uk/2013/04/18/github_licensing_study/) says that only about 15% of the projects on github declared a license.

 > According to Williamson, out of the 1,692,135 code repositories he scanned, just 219,326 of them – 14.9 percent – had a file in their top-level directories that identified any kind of license at all. Of those, 28 per cent only announced their licenses in a README file, as opposed to recommended filenames such as LICENSE or COPYING.

Allowing repositories to be created with no license was acceptable when github was focused on collaboration, but with the focus shifting towards getting others to use your code not having licenses on so many repositories is unacceptable. Most of the project owners I've contacted have been really great about adding a license. In fact, a lot of them just reply with "Oops! Shit, I'll add one right now." Why not force them to do this by including the license automatically?

When you create a repo on Github, a `LICENSE` file should be created that contains the BSD license. If you want to overwrite it you can update it yourself. Please Github, let's make this a thing!
