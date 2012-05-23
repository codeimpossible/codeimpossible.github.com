---
layout: post
status: publish
title: 'MassiveRecord: A nice warm blanket for Massive'
slug: MassiveRecord-A-nice-warm-blanket-for-Massive
---
# MassiveRecord: A nice warm blanket for Massive
## I wanted to bring ActiveRecord over to .Net as a wrapper for the micro-ORM, Massive. I've taken some cool first steps and have something to show off!

<p>
	I&#39;ve been writing code for almost 10 years now and one thing I&#39;ve learned is that working with Databases <strong>sucks</strong>. I was ecstatic when Rob Conery released <a href="http://github.com/robconery/massive">Massive</a> last year. Massive makes databases fun again. You&#39;re not wondering what kind of SQL is going to be generated, it&#39;s fast and only about 600 lines of code.</p>
<p>
	If you haven&#39;t seen Massive in action here is a really quick snippet for you:</p>
<pre class="prettyprint">
<code>var tbl = new Products();
var products = tbl.All(where: &quot;CategoryID = @0&quot;, args: 5);
</code></pre>
<p>
	Massive makes db work pretty simple but all the sugar that it pours on your db access layer isn&#39;t enough, I wanted more.</p>
<p>
	I started thinking how this could be made easier, and how it could be done Massive-style; One semi-large code file that you just drop into your project and then rock and roll.</p>
<p>
	So I came up with <a href="http://github.com/codeimpossible/massiverecord">MassiveRecord</a>. MassiveRecord is my attempt to move the fun stuff from Rails&#39;s&nbsp;<a href="http://api.rubyonrails.org/classes/ActiveRecord/Base.html">ActiveRecord</a> over to the .Net world so developers can do things like this:</p>
<pre class="prettyprint">
<code>var products = DynamicTable.Create(&quot;Products&quot;).FindByCategory(&quot;Televisions&quot;);
</code></pre>
<p>
	Behind the scenes, MassiveRecord uses the <code>DynamicObject</code> type in .Net 4.0 to give you some awesome convention-based shortcuts. I&rsquo;ll have some more posts that go into details about how this is done but for right now all you need to know is that it&rsquo;s not a lot of code and it&rsquo;s actually pretty easy to do.</p>
<p>
	So easy that if we wanted to get all fo the products in a category and with a certain price we just alter our method call a little:</p>
<pre class="prettyprint">
<code>var products = DynamicTable.Create(&quot;Products&quot;).FindByCategoryAndPrice( &quot;Televisions&quot;, 20.00 );
</code></pre>
<p>
	MassiveRecord. Just. Works. It takes convention-based method calls, converts them to Massive black-magic and gives you the result. And there is very little configuration needed. Put this in your main application initialization code (global.asax) and you&rsquo;re golden:</p>
<pre class="prettyprint">
<code>DynamicTable.Configure( c =&gt; c.WhenAskedFor(&quot;Products&quot;).Use( s =&gt; {
    s.ConnectionString = &quot;AdventureWorks&quot;;
    s.Table = &quot;Products&quot;;
    s.PrimaryKey = &quot;Id&quot;;
}));
</code></pre>
<p>
	Now, instead of building out classes with custom methods you can keep all of your configuration in one place and rely on conventions to get things done with less code. I&rsquo;ve got more posts coming about MassiveRecord but for right now, <a href="http://github.com/codeimpossible/MassiveRecord">the code is up on github</a> and you should download it, try it out and start submitting features and fixes!</p>
