---
layout: post
published: true
title: 'Using Jsbin to prototype game features'
tags: "programming, javascript, fragcastle, game-development"
---

[**TL;DR:**](#tldr) Spending time fighting your game engine or process is frustrating when you're trying to get a prototype out to your co-workers for feedback. Here's how I built a simple game engine using HTML5 and JsBin to prototype game features quickly.

---

In 2012 I helped found a video game startup: [Frag Castle Games](http://fragcastle.com). Frag Castle is unique to other game startups that I've talked to in that all three of us work day jobs. This doesn't mean that we work _less_ but it definitely means that we try to work a lot smarter. We're always looking for a way to make things easier and faster.

This makes prototyping a little stressful for us. We're caught between the exploratory and uncertain nature of building something you've never built before and wanting to show progress as soon as possible. Spending a day prototyping something can feel like an eternity if you're not able to focus solely on the implementation. If you have to worry about a ton of other little things it's likely that you're prototype isn't going to be as good as it could be.

This last week I had to prototype a boss behavior for a game we are working on. It was something I'd never done before, going into it I wasn't really sure how I was going to get it done. Attempting to build the prototype in the actual game seemed daunting. I was worried that I'd spend more time messing with other things (rooms, scripts, objects, textures) instead of the prototype. I needed something bare-bones to work with. Something that had just enough code to get me to the next step and stay out of my way.

Which is why I decided to build a game engine in using HTML5's canvas on [JsBin](http://jsbin.com).

<span style="font-size: 22px">What?</span>

I know that sounds like a step backwards from the paragraphs above, but let me explain a bit.

<a name="tldr"></a>

### Jsbin + Canvas + Just Enough Js
The first iteration of the prototype used jQuery and HTML elements. It got the idea across but the code wasn't portable, or even readable, it ran really slowly and crashed on a few browsers during demos.

I've had some (minor) experience building game engines before, so I felt confident that I could get a very (very) basic game engine that would use HTML5's canvas to draw elements. This would give me more control over how the code looked, and would increase the performance since most browsers will use the GPU to draw canvas elements.

First step is to get the foundation in place, we'll need a `<CANVAS />` element and some javascript code for the game object.

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

Update will be used to handle movement and any other logic type operations. Draw... draws things to the screen. Run will be the main entry point for the game, it will run a set number of times a second (usually 60) and call `update()` and `draw()` each loop.rs-gameloop/).

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

Next, setup the `Game` object so it executes `run()` 60 times a second. This is something I would avoid doing in a real game engine but it's perfectly fine for our needs.

{% highlight javascript %}
    // insert after run()

    setInterval( run, 1000 / 60 );
{% endhighlight %}

This will draw a yellow box on the screen! In case you have trouble getting this to work or if you just want to refer to the code in this post later, [I've posted this up on jsbin](http://jsbin.com/iPOzAJa/1/edit).

That's enough for part 1, in part 2 I'll cover handling more than one box, adding movement and using inheritance and objects to reduce the amount of code we need to write.

Got any feedback, questions? Having trouble? Post a comment and I'll reply ASAP.
