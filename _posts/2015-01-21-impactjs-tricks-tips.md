---
layout: post
title: 'ImpactJS Tips & Tricks'
date: 2015-01-30
published: false
tags: "programming, game-development, impactjs, javascript"
---

1. Create a Config file almost immediately

Or the first time you need them. Creating a simple file in `lib/game/config.js` and loading it in `main.js` can save you a lot of refactoring later on. I've used this in the past to store timer durations, hit-points, even the starting level name.

2. Same goes for a Utils file

Rolling dice, flipping a coin, or getting a random item from an array. All things you're going to need to do at some point, and probably more than once. As soon as that happens push the code into a `lib/game/util.js` and load it in `main.js`. Then you can access the helper methods in all of your impact code.

Check out an example [util.js](https://github.com/codeimpossible/intro-to-impactjs/blob/master/lib/game/util.js) that I built recently.

3. 
