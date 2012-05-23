---
layout: post
status: publish
title: 'NodeJS on Windows Part 2: using the Jade ViewEngine'
slug: NodeJS-on-Windows-Part-2-using-the-Jade-ViewEngine
---
# NodeJS on Windows Part 2: using the Jade ViewEngine
## When we last left our nifty little NodeJS app it was spitting out "Hello World!" like a champ, let's see what other tricks we can teach it.

<p>
	<a href="http://www.codeimpossible.com/2012/4/13/Getting-started-with-NodeJS-on-Windows">Our node app that we created in part one</a> is writing out our header &quot;Hello World!&quot; really well. But that&#39;s not really that cool. Plus, it doesn&#39;t scale. If we wanted to output more HTML we would find the current solution to be a giant pain in the ass.</p>
<p>
	It would be nice if we could use a templating engine to render HTML for us...</p>
<pre class="prettyprint">
<code>$ npm install jade
</code></pre>
<p>
	<a href="http://jade-lang.com/">Jade</a> is a templating engine like HAML, which you can use as well, but I chose Jade because it works really well with ExpressJS.</p>
<p>
	Let&#39;s create our first view. We&#39;ll create a folder named <code>views</code> in the root of our project directory and in there let&#39;s create a file named &quot;index.jade&quot; and paste the following markup in there:</p>
<pre class="prettyprint">
<code>!!! 5
html(lang=&#39;en&#39;)
  head
    title= title
  body
    h1= &quot;Hello World!&quot;
</code></pre>
<p>
	If you&#39;ve used HAML before then you should understand this markup, it creates a html5 document (!!! 5) and then sets the <code>title</code> property of our view model into the <code>&lt;title&gt;</code> tag, then just renders a simple <code>&lt;h1&gt;</code> in the body.</p>
<p>
	Easy enough. Now let&#39;s get our app to render this. Right now, our app has no idea that our views are in the <code>/views</code> directory, so let&#39;s clue it in. Paste the following code just before the <code>app.listen()</code> call:</p>
<pre class="prettyprint">
<code>app.set(&#39;views&#39;, __dirname + &#39;/views&#39;);
</code></pre>
<p>
	Lastly, let&#39;s replace the <code>app.get()</code> call with the code below:</p>
<pre class="prettyprint">
<code>app.get(config.routes.index, function(req, res) {
  res.render(&#39;index.jade&#39;, {
    title: &#39;Hello World!&#39;,
    layout: false
  });
});
</code></pre>
<p>
	This tells ExpressJS to render the jade view we created and we supply a simple viewmodel. Notice that we specify an extra property on the viewmodel: <code>layout</code>. This tells jade not to look for a layout template, a view that you can use to hold all your common markup, but instead render the view as it is.</p>
<p>
	now, save your file and run the app! You should see your new page which looks amazingly similar to the old page, but instead of using strings and rendering directly to the response stream, we&#39;ve delegated the rendering task to a view engine.</p>
<p>
	This let&#39;s us keep all the view logic in a separate place so we only need to change our app code for app code related reasons. We can change the views for all the display requirements that we come up with.</p>
<p>
	So that wraps up this post. Next time I&#39;ll show you how to speed up your development process by eliminating a few steps from the save-stop-node-reload-node-refresh-the-page development cycle.</p>
<p>
	Also, I&#39;ve put all <a href="https://github.com/codeimpossible/NodeJS-On-Windows">the code for this and the rest of the series up on GitHub</a>! Fork it if you like, if you see something odd send me a comment or a pull request!</p>
