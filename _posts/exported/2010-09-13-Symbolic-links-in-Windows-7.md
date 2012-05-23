---
layout: post
status: publish
title: 'Symbolic links in Windows 7'
slug: Symbolic-links-in-Windows-7
---
# Symbolic links in Windows 7
## 

A symbolic link is a text file that contains a relative or absolute path to another directory or file. When an operating system receives a request for a path that resolves to a symbolic link the operating system loads the linked directory or file transparently.

So let's say I had the following symbolic link setup: 

<code>Folder A -linked-to-> Folder B.</code>

When I browse to <code>Folder A</code> I would see the contents of <code>Folder B</code> as if they existed in <code>Folder A</code>! Since the folders are linked I can change any of the files in either location, and I can delete the symbolic folder (<code>Folder A</code>) without deleting the target folder!

Symbolic links have been around for a looooooong time ( in pretty much every other operating system ) but Windows got this feature only recently - as of Windows Vista mklink ships with the OS bits. 

To make a symbolic link, open a command line and use mklink (in Windows Vista and greater):
<pre><code class="prettyprint">
mklink /D &lt;path_to_symbolic_dir&gt; &lt;path_to_target_dir&gt;
</code></pre>

For example:
<pre><code class="prettyprint">
mklink /D "C:\My Linked Folder" "C:\My Project Folder"
</code></pre>
