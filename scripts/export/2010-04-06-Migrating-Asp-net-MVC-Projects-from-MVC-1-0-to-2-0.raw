---
layout: post
status: publish
title: 'Migrating Asp.net MVC Projects from MVC 1.0 to 2.0'
slug: Migrating-Asp-net-MVC-Projects-from-MVC-1-0-to-2-0
---
# Migrating Asp.net MVC Projects from MVC 1.0 to 2.0
## 

The<a href="http://haacked.com/archive/2010/03/11/aspnet-mvc2-released.aspx" target="_blank"> Asp.net Mvc 2.0 RTM came out last month</a> and a lot of people are converting their projects over. If you're just starting to manually move your projects over then stop what you are doing, <a href="http://weblogs.asp.net/leftslipper/archive/2010/03/10/migrating-asp-net-mvc-1-0-applications-to-asp-net-mvc-2-rtm.aspx" target="_blank">download and run the Mvc Converter</a>. It will save you eons of time and frustration.

If you are like me, however, and started porting your project over manually and are now knee deep in WTFBBQ sauce then follow the steps below and your project should be up and running in no time.

1. Back up your project. Just in case.

2. Open your project file(s) inside your favorite text editor (one with a decent find/replace system). Open the Find &amp; Replace dialog and find <code>"603c0e0b-db56-11dc-be95-000d561079b0"</code>, replacing it with <code>"F85E285D-A4E0-4152-9332-AB1D724D3325"</code>. My project turned up 1 result.

3. Open the Web.Config files in the root of the project and the root of the /Views folder. Open the Find &amp; Replace dialog again, this time searching for <code>"System.Web.Mvc, Version=1.0.0.0"</code> and replacing it with <code>"System.Web.Mvc, Version=2.0.0.0"</code>.

4. Add the following BindingRedirect to the bottom of the root Web.Config, just before the &lt;/Configuration&gt; node.

<pre class="prettyprint"><code>
&lt;runtime&gt;
  &lt;assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1"&gt;
    &lt;dependentAssembly&gt;
      &lt;assemblyIdentity name="System.Web.Mvc" publicKeyToken="31bf3856ad364e35"/&gt;
      &lt;bindingRedirect oldVersion="1.0.0.0" newVersion="2.0.0.0"/&gt;
    &lt;/dependentAssembly&gt;
  &lt;/assemblyBinding&gt;
&lt;/runtime&gt;
</code></pre>

5. Open the solution in Visual Studio and replace the references to System.Web.Mvc 1.0 with the 2.0 assembly.
6. Finally, and only if you really need them, open a new MVC 2.0 project and copy all the files in the /Scripts folder to your project. 

Enjoy your freshly migrated project!