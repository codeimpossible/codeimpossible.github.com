---
layout: post
published: false
title: 'FragEngine: All Aboard the Game Engine'
slug: "fragengine-intro"
tags: "programming, fragengine, fragcastle, game-development"
---

<div class="video-container">
    <iframe width="560" height="315" src="//www.youtube.com/embed/YZYnctBDiEU?rel=0" frameborder="0" allowfullscreen></iframe>
</div>

<div>&nbsp;</div>

It's official: we're making our own game engine for MonoGame. After PAX it was really clear to John and I that HTML5 was not the right tech stack for Rock Kickass. There's very limited controller support, only the latest and greatest browsers support HTML5 games, and its hard to get anywhere near native performance with HTML5 on mobile devices.

We looked at some other solutions, which I may blog about later, but ultimately decided on using MonoGame as our run time for our games going forward. Looking at the code we had already written for Final Frontier and what we would need to port Rock Kickass, it became clear that we would need a shared engine to keep things sane.

I've linked our first DevDiary video at the top of this post, please take a look and give us some feedback on what you think! The video shows a demo of what the engine can do after our first month (or so) of development and we're really proud of what we've been able to accomplish. I'll go into more detail about the features shown in the video - and even more features that aren't, in future blog posts.
