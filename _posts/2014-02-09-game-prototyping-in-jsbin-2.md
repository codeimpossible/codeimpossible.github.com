---
layout: post
published: true
title: 'Using Jsbin to prototype game features: Part Two'
tags: "programming, javascript, fragcastle, game-development"
---

This is part 2 of my "prototyping games in JsBin" blog post. If you haven't already, you might want to read [part one]() or [checkout the example on jsbin]() to get caught up.

In the previous post we got a quick and dirty game engine working in jsbin using canvas and javascript. We drew a small yellow box and everything is great. Except things are never as simple as "draw a yellow box". We want things to move, and have some sort of behavior, this is supposed to be a game prototype after all!

### Adding movement

Making something move is just a matter of telling the game engine to change where it is being drawn for the new frame. Remember that a "frame" is one execution of both `update()` and `draw()`, or one call to `run()`.

in order to move our box, we're going to have to change a few lines of code. Replace `update()` and `draw()` with the code below.

{% highlight javascript %}
var box_pos = { x: 100, y: 100 };
var draw = this.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.rect(box_pos.x, box_pos.y, 64, 64);
    ctx.fill();
    ctx.stroke();
};

var update = this.update = function() {
    box_pos.x += 1;
};
{% endhighlight %}

Changing the `x` value of `box_pos` now moves the box to the right, but something odd is happening. The box is leaving this odd, ugly "snail trail" behind it.

![Snail Trail](/assets/posts/game-proto-2/snail.png)

This is happening because we're always drawing the box at it's new position, but we're never clearing the screen. This causes the new box to be drawn on top of the old box, but 1px to the right, which leaves the left border of the previous box still visible. This will be pretty easy to clean up. Change the draw method so it looks like the one below.

{% highlight javascript %}
var draw = this.draw = function() {
    // clear the canvas with a bg color
    ctx.fillStyle = "#ffffff";
    ctx.fillRect (0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.rect(box_pos.x, box_pos.y, 64, 64);
    ctx.fill();
    ctx.stroke();
};
{% endhighlight %}

Clearing the frame before we draw to it is a standard practice in game engines. There are other ways to handle this, XNA uses a two-frame draw method, showing one frame to the screen while drawing to another. It is constantly alternating between the frames to conserve memory and improve performance. Here, we're just drawing a large rectangle that is the same dimensions as our canvas with the same background color as our page.

Now your box should be moving rather nicely across the screen.

![They see me rollin' they hatin'](/assets/posts/game-proto-2/box-moving-1.gif)

### Adding Boxes
This prototype is pretty good, but I'm sure you'll want to work with more than one box. What if we wanted to draw green box that moved vertically?

{% highlight javascript %}
var box_pos = { x: 100, y: 100 };
var box2_pos = { x: 100, y: 164 };
var draw = this.draw = function() {
    // clear the canvas with a bg color
    ctx.fillStyle = "#ffffff";
    ctx.fillRect (0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.rect(box_pos.x, box_pos.y, 64, 64);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.rect(box2_pos.x, box2_pos.y, 64, 64);
    ctx.fill();
    ctx.stroke();
};

var update = this.update = function() {
    box_pos.x += 1;
    box2_pos.y += 1;
};
{% endhighlight %}

Yeah you can definitely keep pasting more code into draw and update to add more boxes but this will quickly become a hot mess if we try to build out anything serious. Let's add a `GameObject` class to our game so making new objects becomes a lot easier.

{% highlight javascript %}
// adapted from underscore js's _.extend()
Game.extend = function(obj) {
  for( var i = -1, l = arguments.length; ++i < l; ) {
    var source = arguments[i];
    if( source ) {
      for(var prop in source ) {
        obj[prop] = source[prop];
      }
    }
  }
  return obj;
};

Game.GameObject = function(x, y) {
  this.pos = this.pos || { x: x, y: y };
};

// adapted from Backbone.js's Model.extend method
Game.GameObject.extend = function( instance, klass ) {
  var parent = this;
  var child;

  if (instance && instance.hasOwnProperty('constructor')) {
    child = instance.constructor;
  } else {
    child = function(){ return parent.apply(this, arguments); };
  }

  Game.extend( child, parent, klass );

  var Surrogate = function(){ this.constructor = child; };
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate;

  if (instance) Game.extend(child.prototype, instance);

  child.__super__ = parent.prototype;

  return child;
};
{% endhighlight %}

There is a lot of stuff happening in this code. `Game.extend` and `Game.GameObject.extend` can be ignored. They are two methods that help simulate inheritance in javascript. JavaScript doesn't have inheritance like you would expect if you were coming from C# or Java. These methods simulate inheritance by copying the properties and methods from one object to another as if they were being inherited from a parent to a child.

If you're interested you can read more about [Backbone's Extend method](http://backbonejs.org/docs/backbone.html#section-190) and [Underscore's Extend method](http://underscorejs.org/docs/underscore.html#section-78) to get a better idea of what they are doing.

The real important piece here is the `Game.GameObject` constructor. Each game object will have a `pos` that represents its position in the game world and this postion can be assigned when the object is created. Let's create a simple box object.

{% highlight javascript %}
var Box = Game.GameObject.extend({
    update: function() {
        // intentionally left empty.
    },

    draw: function(canvas, ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.rect(this.pos.x, this.pos.y, this.width, this.height);
        ctx.fill();
        ctx.stroke();
    }
});
{% endhighlight %}

Defining a box type is pretty easy, we pass a definition or body to `Game.GameObject.extend()` and it will return a new class that contains that body. This makes defining new game objects that contain unique behaviors really easy. Let's define two new `Box` objects: `HorizontalBox` and `VerticalBox`.

{% highlight javascript %}
var HorizontalBox = Box.extend({
    color: 'yellow',
    update: function() {
        this.pos.x += 1;
    }
});

var VerticalBox = Box.extend({
    color: 'green',
    update: function() {
        this.pos.y += 1;
    }
});
{% endhighlight %}

Since the `Box` object already defines a `draw()` we don't need to supply one in our new box objects. They will call the parent `draw()` by default. Also, since they define an `update()` the parent `update()` will _not_ be called. This is an important piece to remember.
