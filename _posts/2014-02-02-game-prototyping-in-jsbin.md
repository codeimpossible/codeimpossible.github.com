---
layout: post
published: true
title: 'Using Jsbin to prototype game features'
tags: "programming, javascript, fragcastle, game-development"
---

In 2012 I helped found a video game startup: [Frag Castle Games](http://fragcastle.com). We consider ourselves a lean startup, we try to embrace the lean startup mentality: fail fast, use data, prove hypothesis to move forward. Frag Castle is pretty unique in that all three members work day jobs.

This means that we primarily work on our startup at night and on the weekends. This means that we don't have a lot of time to waste. We try to work smart and use our time productively, but where this can be hard is during the prototyping phase. Trying out a new idea can be some of the most fun you'll have making a game but if you're not making progress immediately and if you can't demonstrate that progress to your co-workers quickly it'll start to feel like a failure.

We all work as web-focused software developers during the day so we're used to having tools that help in rapid prototyping: Twitter Bootstrap, jQuery, and websites like [jsBin](http://jsbin.com). Being able to make changes and see the output in real time gives you a really tight feedback loop where you can iterate and learn reall quickly.

In development we'd call this a [REPL](http://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) or Read, Eval, Print, Loop. Basically: read code, evaluate it, print a result, repeat.

Reecently I had to prototype a boss behavior for a game we are working on. Something I'd never done before, something I had no idea how to get done. Doing this in our game maker would have been possible (looking back) but would have added a lot of unecessary complexity. I needed something bare-bones to work with. Something that had just enough code to get me to the next step and stay out of my way.

### Jsbin + Canvas + Just Enough Js
I've had some experience in building game engines so I felt pretty confident that I could build a minimal canvas based game engine in javascript that would let me build out some

The first iteration of this used jQuery and HTML elements. It was enough to get a general idea across, but the code wasn't portable. Also, it ran like shit, constantly crashing chrome during larger edits (jsbin refreshes the rendered output page after changes are made).

I've had some experience building game engines before, so I felt confident that I could build a very basic game engine that would use HTML5's canvas to draw elements. This would give me more control over how the code looked, and would increase the performance since most browsers will use the GPU to draw canvas elements.

First step is to frame things up in jsbin, I'll need a `<CANVAS />` element and some javascript code for my game object.

{% highlight html %}
<!DOCTYPE html>
<html>
    <body>
        <canvas id="canvas" height="480" width="640"></canvas>
    </body>
</html>
{% endhighlight %}

{% highlight javascript %}
    function Game() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        var draw = this.draw = function() {

        };

        var update = this.update = function() {

        };

        var run = this.run = function() {
            update();
            draw();
        };
    }

    var game = new Game();
{% endhighlight %}

So in case you don't know about `update()` and `draw()`, I mean, `draw()` is probably really obvious. The draw function will handle drawing things to the screen. Update is for handling movement, and other logic. The run method ties these two methods together. When the game is running, the `run()` method will just execute N times a second, calling `update()` and `run()` each loop.

This is what devs refer to as "The Game Loop". You can read more about this [here](http://www.koonsolo.com/news/dewitters-gameloop/).

Now, let's draw something. How about a yellow box? Change the draw method so it looks like the one below.

{% highlight javascript %}
    var draw = this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = 'yellow';
        ctx.rect(100, 100, 64, 64);
        ctx.fill();
        ctx.stroke();
    };
{% endhighlight %}

Next, setup the `Game` object so it executes `run()` 60 times a second. We definitely wouldn't do this in a real game engine but this will be fine for prototyping.

{% highlight javascript %}
    // insert after run()

    setInterval( run, 1000 / 60 );
{% endhighlight %}

This will draw a yellow box on the screen! In case you have trouble getting this to work or if you just want to refer to the code in this post later, [I've posted this up on jsbin](http://jsbin.com/iPOzAJa/1/edit).

That's enough for part 1, in part 2 I'll cover handling more than one box, adding movement and using inheritance and objects to reduce the amount of code we need to write.

Do you think this will be helpful? No? Got any feedback, questions? Post a comment and I'll reply ASAP.
