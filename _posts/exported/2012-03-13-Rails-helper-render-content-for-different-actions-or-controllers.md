---
layout: post
status: publish
title: 'Rails helper: render content for different actions or controllers'
slug: Rails-helper-render-content-for-different-actions-or-controllers
---
# Rails helper: render content for different actions or controllers
## I needed to display different content based on which action/controller was executing.

<p>
	On my blog homepage, I have a big block of text that does a nice little intro of me for visitors. This block of text is in a partial (the blog is written in Ruby, it&#39;s another one of my side projects: <a href="http://github.com/codeimpossible/Artigo">Artigo</a>) and is shown only when the index action is rendered.</p>
<p>
	I did this because I have to use the same layout for the entire theme (it&#39;s a limitation of the current blog&#39;s theming system), which means I had to come up with a way to only render content when a certain action or controller was &quot;active&quot;. Here&#39;s how I did it:</p>
<pre class="prettyprint">
<code>  def is_active?(desc= {})
    controllerMatch = desc[:controller] == nil || params[:controller] == desc[:controller]
    actionMatch = desc[:action] == nil || params[:action] == desc[:action]
    idMatch = desc[:id] == nil || params[:id] == desc[:id]

    isactive = actionMatch &amp;&amp; idMatch &amp;&amp; controllerMatch
  end</code></pre>
<p>So this can be used to hide/show content like so:</p>
<pre class="prettyprint"><code>&lt;% if is_active?( :controller =&gt; "posts", :action =&gt; "index") -%&gt;
  &lt;%= render :partial =&gt; "themes/codeimpossible/partials/callout" %&gt;
&lt;% end -%&gt;</code></pre>
<p>Let me know if this helped you!</p>