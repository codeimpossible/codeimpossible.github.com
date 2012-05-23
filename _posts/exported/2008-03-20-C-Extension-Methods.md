---
layout: post
status: publish
title: 'C# Extension Methods'
slug: C-Extension-Methods
---
# C# Extension Methods
## 

So over the last few days I've been screwing around with C# extension methods in Visual C# 2008 Express and I have to say they are fast becoming my favorite addition to the .NET framework. What started me on extensions was the fact that in Perl you can do the following with string manipulation:

<!--more-->

[sourcecode language="python"]
#!/usr/bin/perl
# set a string variable
$var= "=";
# repeat it
print($var x 7);
[/sourcecode]

--------- output ---------
=======

Which is a relatively easy syntax compared to what you would have to do in C#. I was able to replicate this feature of Perl easily with the following code in C#:

[sourcecode language="csharp"]
public static class StringExt
{
    public static string Replicate(this string s, int times)
    {
        string hold = s;
        for (int i = 1; i <= times - 1; i++)
        {
            hold += s;
        }

        return hold;
    }
}

//replicate a string a number of times

Console.WriteLine( "=".Replicate(7) );[/sourcecode]

--------- output ---------
=======

Not bad!