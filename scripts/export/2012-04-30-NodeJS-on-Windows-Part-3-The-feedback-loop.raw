---
layout: post
status: publish
title: 'NodeJS on Windows Part 3: The feedback loop'
slug: NodeJS-on-Windows-Part-3-The-feedback-loop
---
# NodeJS on Windows Part 3: The feedback loop
## Today we're going to learn how to use websockets to automate a huge portion of our development and testing process.

<p>
	<a href="http://codeimpossible.com/2012/4/16/NodeJS-on-Windows-Part-2-using-the-Jade-ViewEngine">In the last blog post</a> I showed you how to install jade and create your first view. However the development cycle leaves a lot to be desired. Nothing sucks more than the web ux/ui development cycle. Make a change, restart the server (optional), refresh the browser, lather rinse, repeat.</p>
<p>
	I&#39;m going to show you something awesome. Open a powershell window (<a href="http://www.codeimpossible.com/2012/4/23/Reasons-to-use-PowerShell-instead-of-CMD">you <strong>are</strong> using powershell aren&#39;t you?</a>) and execute:</p>
<pre class="prettyprint">
<code>$ npm install supervisor -g
</code></pre>
<p>
	This will install a package named Supervisor globally on your machine. Now, I could <em>tell</em> you what supervisor is but it&#39;s waaaaaay better to show you. It&#39;s ok, you can trust me, I&#39;m a blog post.... those never lie.</p>
<p>
	Anyway, let&#39;s run supervisor on the node app we created last time.</p>
<pre class="prettyprint">
<code>$ supervisor app.js
</code></pre>
<p>
	You&#39;ll see the normal app bootup messages, when you visit <code>http://localhost:8000</code> the site should load normally and show you &quot;Hello World!&quot;.</p>
<p>
	Aaaaaaand nothing is different.</p>
<h3>
	What gives?</h3>
<p>
	Yeah this doesn&#39;t sound awesome yet... but it will soon enough. Open your app.js and add the following to the <code>configure()</code> callback:</p>
<pre class="prettyprint">
<code>console.log(&quot;Jared is super awesome!&quot;);
</code></pre>
<p>
	Now, save your js file and check your powershell window. Go ahead... I&#39;ll wait.</p>
<p>
	WASN&#39;T THAT AWESOME?!?! Supervisor watches all your js files for changes, when changes are detected it will reload the app automatically! So let&#39;s change the header and see what happens.</p>
<pre class="prettyprint">
<code>res.send(&quot;&lt;h1&gt;Jared is the best!&lt;/h1&gt;&quot;);
</code></pre>
<p>
	Hmmm, looks like supervisor reloaded but we have to reload the browser manually. That seems... tedious. What if we wrote some code to have the client listen for changes on the server and refresh the page as needed?</p>
<h3>
	Kick it up a notch</h3>
<p>
	First, we&#39;ll need a few more packages.</p>
<pre class="prettyprint">
<code>$ npm install socket.io express
</code></pre>
<p>
	Socket.io is a framework that makes <a href="http://en.wikipedia.org/wiki/Websockets">websockets</a> insanely easy. When we install it we pass the express argument so that socket.io installs with special bindings for ExpressJS. We&#39;ll use socket.io to send messages between the client (our browser) and the server.</p>
<p>
	We&#39;ll work on the server side first, changing our list of variables to include the socket.io object:</p>
<pre class="prettyprint">
<code>var express     = require(&#39;express&#39;)
    app         = express.createServer(),
    jade        = require(&#39;jade&#39;),
    io          = require(&#39;socket.io&#39;).listen(app),
    config      = {
                      routes:{
                          index: &quot;/&quot;
                      }
                  };
</code></pre>
<p>
	Oh! We&#39;ll also want to pass a date to our view, so let&#39;s add that to the viewmodel:</p>
<pre class="prettyprint">
<code>res.render(&#39;index.jade&#39;, {
    title: &#39;Hello World!&#39;,
    layout: false,
    date: (new Date()).toString()
});
</code></pre>
<p>
	I&#39;ll explain what this is for in a minute.</p>
<p>
	So we&#39;ve got socket.io initialized, but we haven&#39;t told it to do anything except listen. This is fine for our purpose but normally you would have an event registered to tell socket.io what it should do with incoming requests but here, we really don&#39;t care.</p>
<p>
	When a file changes, supervisor will recycle the node server which will sever the connection with the client. We&#39;ll use this as the event on the client to trigger the page reload. Let&#39;s code that up now.</p>
<p>
	In our <code>index.jade</code> view, add the following markup:</p>
<pre class="prettyprint">
<code>h2= date
script(src=&quot;/socket.io/socket.io.js&quot;)
script
  var socket = io.connect(&#39;http://localhost:8000&#39;);
  socket.on(&#39;disconnect&#39;, function (data) {
    window.location.reload();
  });
</code></pre>
<p>
	Here we have the socket.io client library loaded <em>(socket.io provides a route to ExpressJS that handles the <code>/socket.io/*</code> request)</em> and then we use that to open a long-polling connection to the server. When that connection gets disconnected (e.g. the server gets recycled when a file is changed) our page will reload.</p>
<p>
	Also, we now have our <code>date</code> property rendered out into an <code>&lt;h2&gt;</code> so we can tell when the page gets updated. All we have to do now is start supervisor and let it know we want it to watch more than just the .js files in our root:</p>
<pre class="prettyprint">
<code>$  supervisor -w &quot;views,app.js&quot; -e &quot;jade,js&quot; app.js
</code></pre>
<p>
	The <code>-w</code> argument specifies files and directories that supervisor should watch for changes, and the <code>-e</code> argument specifies file extensions. So now when we change our view the server should recycle and the browser window should reload with the updated changes!</p>
<p>
	Using this method it would be very easy to link up css,less,sass files as well. Being able to do this with as little code as we have here is absolutely amazing and is one of the big reasons I&#39;m getting more into NodeJS now.</p>
<p>
	Also, I&#39;ve put all <a href="https://github.com/codeimpossible/NodeJS-On-Windows">the code for this and the rest of the series up on GitHub</a>! Fork it if you like, if you see something odd send me a comment or a pull request!</p>
