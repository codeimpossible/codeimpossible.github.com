---
layout: post
status: publish
title: 'Spot the bug'
slug: Spot-the-bug
---
# Spot the bug
## 

What is wrong with the code below?
 
Safe Assumptions:
<ol>
	<li><code>_dictionary</code> is a valid non-null <code>Dictionary&lt;object,object&gt;</code></li>
	<li><code>_dictionary</code> contains items that will match the passed expression</li>
	<li>This code compiles with no warnings or errors</li>
	<li>This code <strong>will</strong> throw an exception at runtime.</li>
</ol>

<pre style="display: block; overflow: auto: width: 550px;"><code class="prettyprint">
public IList&lt;TModel&gt; GetAllByCriteria&lt;TModel&gt; ( Expression&lt;Func&lt;TModel, bool&gt;&gt; criteria )
{
    Func&lt;TModel, bool&gt; action = criteria.Compile();
    return _dictionary.Where( pair =&gt; 
        action( (TModel)pair.Value ) ).Cast&lt;TModel&gt;().ToList();
}
</code></pre>
 
If you don’t see it right away then you’re not alone. I spent a while debugging to catch this. If you do see it right away then pat yourself on the back.