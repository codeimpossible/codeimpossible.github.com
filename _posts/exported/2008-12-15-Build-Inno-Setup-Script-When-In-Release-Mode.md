---
layout: post
status: publish
title: 'Build Inno Setup Script When In Release Mode'
slug: Build-Inno-Setup-Script-When-In-Release-Mode
---
# Build Inno Setup Script When In Release Mode
## 

I use Inno Setup as an installer for all my windows-based projects. Often-times I want to build the installer when I build the project from within Visual Studio but only when I build the "Release" configuration.

Here is the post-build script that will accomplish this:

<code>c:
cd\
IF Release==$(ConfigurationName) "C:\Program Files\Inno Setup 5\Compil32.exe" /cc &lt;PATH_TO_ISS_FILE&gt;
</code>