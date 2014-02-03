---
layout: post
published: false
title: 'Using Jsbin to prototype game features'
tags: "programming, javascript, fragcastle, game-development"
---

* audience? experienced game developers? indies? beginners?

* we're small and don't have a lot of experience
* prototyping is more valuable to us
* failing fast is important too, we don't have a lot of time
* REPL is the best development style, hands down
* REPL + game development = winning
* started out as DOM manip, too slow, too confusing

## part 1
* the game object, and the game loop
* draw/update separate
* might not be apparent now, but will help later
* draw a yellow box

## part 2
* objects need to be easy to make
* objects need to have inheritance, here comes extend and extend
* add another box (green)

## part 3
* depth, welcome to array.sort
* why only sort in render?
* set depth in initialize() or perish

thats enough to cover in one post.
