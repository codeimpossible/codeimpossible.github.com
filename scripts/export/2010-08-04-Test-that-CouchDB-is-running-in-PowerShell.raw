---
layout: post
status: publish
title: 'Test that CouchDB is running in PowerShell'
slug: Test-that-CouchDB-is-running-in-PowerShell
---
# Test that CouchDB is running in PowerShell
## 

I mentioned previously that I am working on <a href="http://codeimpossible.com/2010/07/21/installing-assemblies-to-gac-with-powershell/" target="_blank">a dev environment setup script</a> for a long-term project at work. The goal of this script is to get a developer's machine ready to work on the project, installing dependencies, creating dev/test databases, etc.

Since our project will be using <a href="http://couchdb.apache.org/" target="_blank">CouchDB</a> my script should create/update a few databases when it is run (this part is coming soon!). But before that can happen the script needs to check for the presence of an active CouchDB instance.  

Since CouchDB has a completely HTTP-based API we can test for its existence by opening up our <a href="http://www.google.com/chrome" target="_blank">favorite browser</a> and visiting <a href="http://localhost:5984" target="_blank">http://localhost:5984</a>. This gives us:

<pre>
{"couchdb":"Welcome","version":"1.0.0"}
</pre>

So my script is going to need to do an HTTP GET on the url above and compare it to the <a href="http://en.wikipedia.org/wiki/Json" target="_blank">JSON</a> response that CouchDB should send back. Now normally, I might want this check to be less strict, maybe only checking that <code>{"couchdb":"Welcome"</code> was returned, but in this case I want the specific version number as well so this check will be fine going forward.

If I don't get the response I expect I'll want the script to fail out immediately; No sense in continuing with the environment setup if one of the key components is missing!

<pre style=""><code class="prettyprint">
$futonurl = "http://localhost:5984"
$resp_couchdb = [string](new-object System.Net.WebClient).DownloadString($futonurl)

if( $resp_couchdb.Trim() -eq "{""couchdb"":""Welcome"",""version"":""1.0.0""}" ) {
    Write-Output "CouchDB 1.0 Found!"
    # here we can continue setting up our test/dev document stores
} else {
    throw("CouchDB v1.0 must be installed and running to continue...")
}
</code></pre>

Althought this script is pretty simple, it shows that PowerShell is not just MS-Batch 2.0. PowerShell lets me leverage .Net to do heavy lifting from the command-line that I wouldn't be able to do without creating a few console applications.