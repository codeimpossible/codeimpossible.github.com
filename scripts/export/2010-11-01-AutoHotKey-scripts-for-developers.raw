---
layout: post
status: publish
title: 'AutoHotKey scripts for developers'
slug: AutoHotKey-scripts-for-developers
---
# AutoHotKey scripts for developers
## This week I'll post some useful AutoHotKey scripts that I use to make every-day coding easier.

<p>
	If you&#39;re not familiar with AutoHotKey yet, I&#39;ve <a href="http://codeimpossible.com/2010/10/27/autohotkey-an-introduction">blogged about it before</a> and I would recommend giving that post a read. For the rest of you I thought I would post some useful AHK scripts that I have come across.</p>
<p>
	<strong>The most important AHK script ever. </strong><br />
	Disabling Caps-lock. I constantly fat-finger the caps-lock button. With this script, I never have to worry about it again.</p>
<pre>
SetCapsLockState, AlwaysOff</pre>
<p>
	<strong>Generate a &quot;safe&quot; jQuery code block</strong><br />
	This script will generate a self-calling anonymous function that scopes jQuery and protects your code from other possible interference from other javascript frameworks. You can <a href="http://codeimpossible.com/2010/01/13/solving-document-ready-is-not-a-function-and-other-problems">read more about it here</a>.</p>
<pre>;insert a self-calling anonymous method to scope jQuery calls
:*R0:{jqsafe}::
(
(function($) {{} 
    $(function() {{}
    // ...code to run on dom ready

{Left}{Left}{Left}{Left}{}});`n{}})(jQuery);
)
return</pre>
<p>
	<strong>Include jQuery from the Google CDN</strong><br />
	This script will turn <code>{jqgoog#.#.#}</code> into a <code>&lt;script&gt;</code> tag pointing to that version of jquery, specified by the #.#.#, hosted on googles cdn. <code>{jqgoog1.4.2}</code> will become: <em>Line breaks added for readability</em></p>
<pre class="prettyprint">&lt;script 
type=&rdquo;text/javascript&rdquo; 
src=http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js&gt;&lt;/script&gt;
</pre>
<p><code>{jqgoog1}</code> will become: <em>Line breaks added for readability</em></p>
<pre class="prettyprint">&lt;script 
type=&rdquo;text/javascript&rdquo; 
src=http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js&gt;&lt;/script&gt;
</pre>
<p>Here is the script.</p>
<pre>; Include jQuery from google cdn
~{::
Input, UserInput, I V L13 C, {}}, jqgoog*,
if ErrorLevel = NewInput
    return
Test := InStr( UserInput, &quot;jqgoog&quot; )
Len := StrLen( UserInput ) + 2

if Test &gt; 0:
{
	jqVer := RegExReplace( UserInput, &quot;jqgoog&quot;, &quot;&quot; )
	SetKeyDelay, -1  ; Most editors can handle the fastest speed.
	
	Loop %Len%
	{
		Send, {backspace}
	}
	
	Send, &lt;script type=&quot;text/javascript&quot; src=&quot;http://ajax.googleapis.com/ajax/libs/jquery/%jqVer%/jquery.min.js&quot;&gt;&lt;/script&gt;
    return
}
return</pre>
<p>
	<strong>Automate writing simple database connection code in C#</strong><br />
	This script will turn <code>{atwood}</code> into a block of C# that can connect to a database and issue a query.</p>
<pre>
:*R0:{atwood}::
(
var connString = ConfigurationManager.ConnectionStrings[&quot;connection&quot;].ConnectionString;
var query = @&quot;&quot;;
using(var conn = new SqlConnection(connString))
{{}
    conn.Open();
using( var cmd = new SqlCommand( query, conn ) ) 
{{}
    
{}}
{Left}{}}
)
return</pre>
<p>
	Here&#39;s the output:</p>
<pre class="prettyprint">
var connString = ConfigurationManager.ConnectionStrings[&quot;connection&quot;].ConnectionString;
var query = @&quot;&quot;;
using(var conn = new SqlConnection(connString))
{
    conn.Open();
    using( var cmd = new SqlCommand( query, conn ) )
    {
	
    }
}</pre>
<p>&nbsp;</p>
<p>Enjoy!</p>
<p>&nbsp;</p>
