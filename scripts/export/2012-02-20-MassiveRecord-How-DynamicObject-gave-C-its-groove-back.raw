---
layout: post
status: publish
title: 'MassiveRecord: How DynamicObject gave C# its groove back'
slug: MassiveRecord-How-DynamicObject-gave-C-its-groove-back
---
# MassiveRecord: How DynamicObject gave C# its groove back
## DynamicObject lets me create APIs in C# that would otherwise be impossible. It makes C# fun again.

<p>
	I <a href="http://codeimpossible.com/2012/2/13/MassiveRecord-A-nice-warm-blanket-for-Massive" target="_blank">blogged last time about MassiveRecord</a>, my attempt at porting ActiveRecord over to .Net as a wrapper for the micro-ORM Massive.</p>
<p>
	In this post I&#39;m going to explain a bit about how MassiveRecord can have FindByID and FindByFirstNameAndLastName with less than 200 lines of code.</p>
<p>
	<strong>First, a little about the dynamic keyword and DynamicObject.</strong></p>
<p>
	The CLR in .net has always been like a nosey neighbors.&nbsp;It wants to know when your garbage is collected, what objects you have laying around in your yard, and what type each of your variables is.</p>
<p>
	Okay, so I couldn&#39;t think of a good analogy for the last one, but I think you get the point.</p>
<p>
	In .Net 4.0&nbsp;Microsoft added the dynamic keyword - mostly to make working with COM a lot easier - but the COM developers gains are ours too. The dynamic keyword gives us the ability to tell the CLR to back off.</p>
<p>
	It let&#39; s us say &quot;I know what this object is, and I don&#39;t want to care about its type.&quot; It&#39;s the developer equivalent of closing your blinds while your nosey neighbor - Carl Lee Richman (get it?) - sits, frustrated, in his living room with his binoculars.</p>
<p>
	DynamicObject is new to .Net 4 too. It&#39;s a sealed class which means you have to inherit from it but it gives you several overridable methods that are called in different situations when your inheriting object is dynamically dispatched. DynamicObject is the &quot;man behind the curtain&quot; for MassiveRecord. It&#39;s the thing that let&#39;s MR do it&#39;s awesome voodoo magic with the FindBy*() methods.</p>
<p>
	I won&#39;t go into all of the methods that DynamicObject provides but you should <a href="http://msdn.microsoft.com/en-us/library/system.dynamic.dynamicobject.aspx" target="_blank">read about them over at the MSDN website</a>.</p>
<p>
	<strong>How does MassiveRecord do FindBy*()?</strong></p>
<p>
	Before I cover the FindBy*() methods, I think it would help to go over how MassiveRecord works from a high-level.</p>
<p>
	MassiveRecord is made up of two objects. The first is called DynamicTable which is a static class with a mini fluent interface that handles configuration and creation of the second class.</p>
<p>
	The second is the MassiveContextBase, this is the object that inherits from Massive&#39;s DynamicModel and allows users to do things like FindByUserNameAndEmail(). The code below shows how the inheritance looks:</p>
<pre class="prettyprint">
<code>// from Massive.cs
public class DynamicModel : DynamicObject {
// ... snip ...
}

// from MassiveRecord.cs
public class MassiveContextBase : DynamicModel {
// ... snip ...
}</code></pre>
<p>
	Let&#39;s go a bit deeper into how DynamicObject is used in MassiveRecord.</p>
<p>
	Since Massive&#39;s DynamicModel inherits from DynamicObject, MassiveContextBase can override any of the methods on the DynamicObject class, which it does, specifically: TryInvokeMember().</p>
<pre class="prettyprint">
<code>public override bool TryInvokeMember( System.Dynamic.InvokeMemberBinder binder, 
                                      object[] args, 
                                      out object result ) {
    if( binder.Name.ToLower().StartsWith( &quot;findby&quot; ) ) {
        var where = new StringBuilder();
        var method = binder.Name.ToLower().Replace( &quot;findby&quot;, &quot;&quot; );
        var methodColumns = Regex.Split( method, &quot;and&quot; );

        for( int i = 0; i &lt; methodColumns.Length; i++ )
            where.AppendFormat( &quot;{0} [{1}] = {2} &quot;, 
                                    i &gt; 0 ? &quot; and &quot; : &quot;&quot;, 
                                    methodColumns[ i ], 
                                    ToSql( args[ i ] ) );
        result = All( where: where.ToString() );
        return true;
    }

    var type = GetType();
    if( type.GetMethod( binder.Name ) != null ) {
        result = type.InvokeMember( binder.Name, 
                                    BindingFlags.Default | BindingFlags.InvokeMethod, 
                                    null, 
                                    this, 
                                    args );
        return true;
    }

    return base.TryInvokeMember( binder, args, out result );
}</code></pre>
<p>
	<strong>The breakdown</strong></p>
<p>
	Don&#39;t worry about that gigantic block of code, I&#39;ll break it down and go over it piece by piece.</p>
<p>
	TryInvokeMember takes three arguments: a binder (information about what method the user asked for), the arguments the user passed (if any), and an out argument that should hold the return value.</p>
<p>
	Lets take a look at the first IF block:</p>
<pre class="prettyprint">
<code>if( binder.Name.ToLower().StartsWith( &quot;findby&quot; ) ) {
    var where = new StringBuilder();
    var method = binder.Name.ToLower().Replace( &quot;findby&quot;, &quot;&quot; );
    var methodColumns = Regex.Split( method, &quot;and&quot; );

    for( int i = 0; i &lt; methodColumns.Length; i++ )
        where.AppendFormat( &quot;{0} [{1}] = {2} &quot;, 
                                i &gt; 0 ? &quot; and &quot; : &quot;&quot;, 
                                methodColumns[ i ], 
                                ToSql( args[ i ] ) );
    result = All( where: where.ToString() );
    return true;
}</code></pre>
<p>
	First thing MassiveRecord needs is the method name. <em>Are you trying to invoke a MassiveRcord method or a Massive method?</em> This is done by checking for a &quot;trigger phrase&quot;, specifically &quot;findby&quot;. If MassiveRecord knows the method it is broken out into columns and each column is then put into a WHERE clause using custom code - ToSql() - to format the names.</p>
<p>
	Once this step is done MassiveRecord passes the WHERE clause off to Massive&#39;s All() method and returns the result to the user. TryInvokeMember demands we return a boolean value - true if the method was handled or false if the method was not. If we return a false here then the user would see an exception at run time saying that the method could not be found.</p>
<p>
	The next piece of code is something I&#39;m actually pretty proud of.</p>
<pre class="prettyprint">
<code>var type = GetType();
if( type.GetMethod( binder.Name ) != null ) {
    result = type.InvokeMember( binder.Name, 
                                BindingFlags.Default | BindingFlags.InvokeMethod, 
                                null, 
                                this, 
                                args );
    return true;
}</code></pre>
<p>
	Since MassiveContextBase overrides TryInvokeMember every method call will have to go through TryInvokeMember() first. Even Massive-only methods like All() and Insert() will be popping through here on their way to Massive. This code checks to see if the method exists on the current class and if it does the method is executed.</p>
<p>
	The last piece shouldn&#39;t need any explanation. If both of the paths above failed, then pass the request onto Massive&#39;s implementation of TryInvokeMember and hope that it can sort out what needs to be done.</p>
<pre class="prettyprint">
<code>return base.TryInvokeMember( binder, args, out result );</code></pre>
<p>
	So that, in a nutshell, is how MassiveRecord does its voodoo to give you FindBy*() methods. I really like how DynamicObject lets me create classes and methods in C# that would otherwise be impossible. It makes C# fun again.</p>
<p>
	If you haven&#39;t done so already, please checkout <a href="https://github.com/codeimpossible/MassiveRecord">MassiveRecord on github</a>, fork it, submit patches, features, whatever!</p>
<p>
	&nbsp;</p>
