---
layout: post
status: publish
title: 'That Keyword'
slug: That-Keyword
---
# That Keyword
## 

<p>
	Brian Keller <a href="http://blogs.msdn.com/briankel/archive/2004/09/23/233212.aspx" target="_blank">posed a question</a> to the readers of his blog asking what we thought, if there were such a thing, the &quot;that&quot; keyword should do in C#. What a fantastic idea! My suggestion - the that keyword would be used to allow access to inherited classes from the base class.</p>
<pre class="prettyprint">
public class MyBase
{
    public MyBase()
    {
 	//only call CallToMethod() in a specific class
 	if( typeof(that).ToString().Equals(&quot;MyChild&quot;) )
 		that.CallToMethod();
    }
}

public class MyChild : MyBase
{
    public void CallToMethod()
    {
        // more code goes here...
    }
}</pre>
<p>
	Yeah I know it&#39;s really dangerous and would definitely have some overhead associated with it but the functionality would be awesome!</p>
