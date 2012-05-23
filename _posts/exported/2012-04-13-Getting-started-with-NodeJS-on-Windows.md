---
layout: post
status: publish
title: 'Getting started with NodeJS on Windows'
slug: Getting-started-with-NodeJS-on-Windows
---
# Getting started with NodeJS on Windows
## I got a chance to play around with nodejs earlier this week and it took me less than 5 minutes to get up and running

<p>
	<em><strong>Note: if you install express NPM will install the 3.x alpha release which is not compatible with the most recent version of connect. I&#39;ve updated this post&#39;s instructions on installing the express module. Also, I published a package.json in <a href="https://github.com/codeimpossible/NodeJS-On-Windows">each of the examples on github</a>.</strong></em></p>
<p>
	If you work in the web development arena then you have to have heard of NodeJS. I mean if you haven&#39;t you should question the people you hang out with, because everyone seems to be talking about this.</p>
<p>
	I&#39;ve wanted to play around with it for a while, I mean it&#39;s <em>server-side <strong>JavaScript</strong></em> that is like everything I&#39;ve ever wanted!</p>
<h3>
	Installation</h3>
<p>
	Installing NodeJS on windows used to be a royal pain in the ass. It involved installing Cygwin and compiling node from source, which now-a-days is like asking someone to build their car before they test drive it.</p>
<p>
	But now Windows is a first-class installation citizen! We have <a href="http://nodejs.org/dist/v0.6.15/node-v0.6.15.msi">our own nifty installer</a> and it&#39;s pretty easy. Download, double-click, press install and let the nodejs goodnes wash over your computer.</p>
<h3>
	Packages</h3>
<p>
	Python has pip, Ruby has gems/bundler, .Net has Nuget, hell <a href="http://codeimpossible.com/2011/11/29/Installing-the-Package-Control-plugin-for-Sublime-Text">everything has a package manager these days</a>, so it would stand to reason that NodeJS would have one. And NPM (Node Package Manager) is just that. Installing a package is pretty easy since NPM comes with the NodeJS install for Windows:</p>
<pre class="prettyprint">
<code>$ npm install mongodb
</code></pre>
<p>
	BOOM, you&#39;ve got the mongodb library for Node. All set. If you pull down a node app and want to make sure you have all the dependencies installed you just do this in the root of the app:</p>
<pre class="prettyprint">
<code>$ npm install
</code></pre>
<p>
	This will read the <code>package.json</code> in the root of the app and download all of the dependencies that you are missing.</p>
<h3>
	Your first NodeJS App</h3>
<p>
	Creating a nodejs app is really simple, create new folder on your machine. Anywhere will do.</p>
<p>
	Now, let&#39;s add a package: (<em>currently v2.5.9 is the most recent version that works correctly)</em>:</p>
<pre class="prettyprint">
<code>$ npm install express@2.5.9
</code></pre>
<p>
	ExpressJS is a web framework (like rails or django or asp.net) for Node. You can run <code>express</code> from a command line and it will create a whole project scaffold for you. We&#39;re not going to do that right now. We&#39;re just going to use express to handle routing for our server.</p>
<p>
	First thing we&#39;ll need to have is some variables. We need to load ExpressJS so we can set options and setup routes. Then we&#39;ll need to create our app, and then maybe a configuration variable to store settings.</p>
<pre class="prettyprint">
<code>var express     = require(&#39;express&#39;)
    app         = express.createServer(),
    config      = {
                      routes:{
                          index: &quot;/&quot;
                      }
                  };
</code></pre>
<p>
	Okay, cool. Now we just need to tell the app what port to listen on. 8000 sounds good to me, how about you?</p>
<pre class="prettyprint">
<code>app.listen(8000);
</code></pre>
<p>
	Then we simply register a few callbacks. The first one is executed when our app has finished starting. The second is run when a request comes in on a url that matches the route we pass in, which in this case is the root &quot;/&quot;.</p>
<pre class="prettyprint">
<code>app.configure( function() {
  console.log(&#39;Express server listening on port %d in %s mode&#39;, 
                  app.address().port, app.settings.env);
});

app.get(config.routes.index, function(req, res) {
    res.send(&quot;&lt;h1&gt;Hello World!&lt;/h1&gt;&quot;)
});
</code></pre>
<p>
	So when thats all put together, we end up with:</p>
<pre class="prettyprint">
<code>var express     = require(&#39;express&#39;)
    app         = express.createServer(),
    config      = {
                      routes:{
                          index: &quot;/&quot;
                      }
                  };

app.listen(8000);

app.configure( function() {
  console.log(&#39;Express server listening on port %d in %s mode&#39;, 
                  app.address().port, app.settings.env);
});

app.get(config.routes.index, function(req, res) {
    res.send(&quot;&lt;h1&gt;Hello World!&lt;/h1&gt;&quot;)
});
</code></pre>
<p>
	Pretty simple right? Not a lot of code. Now, let&#39;s run it!</p>
<pre class="prettyprint">
<code>$ node app.js
</code></pre>
<p>
	Then we just need to make a request to <code>http://localhost:8000</code> and we should see &quot;Hello World!&quot;. And just like that you&#39;ve got your first NodeJS app (albeit a very simple one) running on Windows!</p>
<p>
	Hang on to this code as we&#39;ll start modifying this app to add more features in the next blog post.</p>
