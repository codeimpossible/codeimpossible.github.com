---
layout: post
published: true
title: 'Using Jsbin to prototype game features: Part Three'
tags: "programming, javascript, fragcastle, game-development"
---
Time for part three of my "prototyping games in jsbin" series. If you're not familiar with the other two posts ([part 1](http://codeimpossible.com/2014/02/02/game-prototyping-in-jsbin/), [part 2](http://codeimpossible.com/2014/02/09/game-prototyping-in-jsbin-2/)), you should read them otherwise this post won't really make much sense.

### First in, First out

Our 2d game engine is coming along nicely. We've got a way to create objects in the game world and all new Game Objects are drawn automatically. There is a slight problem however, controlling which objects appear on top of others is a bit difficult. By default the HTML5 canvas will draw objects bottom-up (also called first-in-first-out). This means that the first object added is at the bottom of the pile, and will be rendered first. This will cause problems later on because later on in your prototyping you'll want to render an object on top of all the others, but you won't have access to the `objects` array.

So, we need a way to control which objects are drawn on top of other; we need to be able to customize the draw order of the game objects while the game is running.

_In a 3d engine we'd accomplish this by adjusting the Z axis of each object, but our 2d engine only understands the X and Y axis so every object has the same Z axis and this cannot be changed._

First step is to create some objects to demonstrate the first-in-first-out rendering issue. Replace the `VerticalBox` and `HorizontalBox` code with the code below.

{% highlight javascript %}
    var YellowBox = Box.extend({
      color: 'yellow',
      height: 64,
      width: 64
    });

    var GreenBox = Box.extend({
      color: 'green',
      height: 64,
      width: 64
    });

    var RedBox = Box.extend({
      color: 'red',
      height: 64,
      width: 64
    });

    // after game.run()....

    game.objects.push( new RedBox( 70, 70) );
    game.objects.push( new YellowBox(100, 100) );
    game.objects.push( new GreenBox(130, 130) );
{% endhighlight %}

This should draw the boxes stacked like the image on the left; try creating the `RedBox` last. Now the red box is rendered on top of both of the other boxes like the image on the right!

![RedBox, YellowBox, GreenBox](/assets/posts/game-proto-3/first-in-first-out-1.png)
![RedBox, YellowBox, GreenBox](/assets/posts/game-proto-3/first-in-first-out-2.png)


### Z-ordering: faking it till we make it

Since we don't have a Z-axis to manipulate, we'll have to fake it. Let's add a property to the `GameObject` class that we can use to track the draw order of objects. Change the `GameObject` constructor to match the code below.

{% highlight javascript %}
    Game.GameObject = function(x, y, options) {
      this.pos = this.pos || { x: x, y: y };

      this.depth = this.depth || options && options.depth || 0;
    };
{% endhighlight %}

This code uses one of my favorite things about javascript: [truthy/falsey values](http://james.padolsey.com/javascript/truthy-falsey/) to reduce the ammount of code needed. We use the logical OR operator `||` as a shortcut; if `this.depth` is `undefined` or `null` or `0` then the `options.depth` value will be checked. If none of those values is truthy then the default value of `0` will be used.

This let's us specify a depth value three different ways:

{% highlight javascript %}

    // #1, as a property:
    var ObjectA = Game.GameObject.extend({
        depth: 1000
    });

    // #2, as a option passed to constructor
    // depth will be 100 even though its set to 1000 above!
    var game_object = new ObjectA( 100, 100, { depth: 100 });

    // #3, using the default
    // depth will be 0
    var game_object2 = new Game.GameObject( 0, 0 );

{% endhighlight %}









This is part 2 of my "prototyping games in JsBin" blog post. If you haven't already, you might want to read [part one](http://codeimpossible.com/2014/02/02/game-prototyping-in-jsbin/) or [checkout the example on jsbin](http://jsbin.com/iPOzAJa/4/edit) to get caught up.

In the previous post we got a quick and dirty game engine working in jsbin using canvas and javascript. We drew a small yellow box and got it moving; everything is great. In this post we're going to improve the game engine a bit and make it easier to have multiple blocks moving at ths same time. Heads up, there is a lot more code in this post so let's dive in and get coding!

### Adding Boxes
Like I said, the prototype is pretty good, but I'm sure you'll want to work with more than one box. So what if we wanted to draw green box that moved vertically?

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

![Double Trouble](/assets/posts/game-proto-2/boxes-moving-1.gif)

So that gives us a green box that moves down. But copying and pasting more code into draw and update to add more boxes will quickly become a hot mess. Let's add a `GameObject` class to our game to reduce the complexity of adding more objects to our game.

{% highlight javascript %}
    Game.GameObject = function(x, y) {
        this.pos = this.pos || { x: x, y: y };
    };

    // adapted from Backbone.js's Model.extend method
    Game.GameObject.extend = function( instance, klass ) {
        var parent = this;
        var child;

        // adapted from underscore js's _.extend()
        var _extend = function(obj) {
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

        if (instance && instance.hasOwnProperty('constructor')) {
            child = instance.constructor;
        } else {
            child = function(){ return parent.apply(this, arguments); };
        }

        _extend( child, parent, klass );

        var Surrogate = function(){ this.constructor = child; };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate();

        if (instance) _extend(child.prototype, instance);

        child.__super__ = parent.prototype;

        return child;
    };
{% endhighlight %}

Remember what I said about there being a lot more code in this post? There's a _ton_ of stuff happening in this code. `Game.GameObject.extend` can safely be ignored. JavaScript doesn't have inheritance like you would expect if you're experienced with C# or Java. This method simulates inheritance by copying the properties and methods from one object to another as if they were being inherited from a parent to a child.

If you're interested you can read more about [Backbone's Extend method](http://backbonejs.org/docs/backbone.html#section-190) and [Underscore's Extend method](http://underscorejs.org/docs/underscore.html#section-78) to get a better idea of what they are doing.

The real important piece here is the `Game.GameObject` constructor. It assigns a `pos` variable when the game object is created. This variable represents the objects position in the game world. You can change the `pos` at runtime and when the object is created. Let's create a simple box object.

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
        height: 64,
        width: 64,
        update: function() {
            this.pos.x += 1;
        }
    });

    var VerticalBox = Box.extend({
        color: 'green',
        height: 64,
        width: 64,
        update: function() {
            this.pos.y += 1;
        }
    });
{% endhighlight %}

Since the `Box` object already defines a `draw()` we don't need to supply one in our new box objects. They will call the parent `draw()` by default. Also, since they define an `update()` the parent `update()` will _not_ be called. This is an important piece to remember.

### Drawing GameObjects

Having the `GameObject` class is great, it'll definitely decrease the amount of code we'll have to write, but there is a small problem. The `draw()` in our `Game` class isn't setup to draw any one these objects! Fixing it won't be too difficult. Replace `update()` and `draw()` with the code below.

{% highlight javascript %}
    var objects = this.objects = [];

    var draw = this.draw = function() {
        // clear the canvas with out bg color
        ctx.fillStyle = "#ffffff";
        ctx.fillRect (0, 0, canvas.width, canvas.height);

        // call draw on each object
        for(var i = -1, l = objects.length; ++i < l; ) {
          objects[i].draw( canvas, ctx );
        }
    };

    var update = this.update = function() {
        for(var i = -1, l = objects.length; ++i < objects.length; ) {
          objects[i].update();
        }
    };
{% endhighlight %}

Adding an array named `objects` makes the code for `update()` and `draw()` really simple. Just loop and call a method on each object. Adding new objects to our game is now just a matter of adding them to the objects array. Add the code below just after we initialize the `game`.

{% highlight javascript %}
    var game = new Game();

    game.objects.push( new VerticalBox(100, 164) );
    game.objects.push( new HorizontalBox(100, 100) );
{% endhighlight %}

Now we should have our two boxes back and they should be moving like before!

![Double Trouble](/assets/posts/game-proto-2/boxes-moving-1.gif)

This article was a bit longer than the first part but that was largely due to the extend method code. We cleaned up our code quite a bit and now adding new game objects is pretty simple. I've [posted the example in this article up on jsbin](http://jsbin.com/iPOzAJa/2/edit?js,output) in case you want to check your code against the code in this article. Try changing the `height` and `width` of the two box objects we created, also see what happens if you replace the `VerticalBox` with the code below.

{% highlight javascript %}
    var VerticalBox = Box.extend({
        color: 'green',
        height: 64,
        width: 64,
        radians: 1,
        update: function() {
            this.radians += 0.1;
            this.pos = {
                x: 100 + 100 * Math.sin(this.radians),
                y: 100 + 100 * Math.cos(this.radians)
            };
        }
    });
{% endhighlight %}

This wraps up part two. Part three will focus on adding some "depth" to our game engine, making objects event more configurable, and avoiding a really troublesome bug that can cost you hours of debugging.
