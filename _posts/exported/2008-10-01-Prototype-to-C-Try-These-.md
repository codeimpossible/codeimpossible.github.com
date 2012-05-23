---
layout: post
status: publish
title: 'Prototype to C#: Try.These()'
slug: Prototype-to-C-Try-These-
---
# Prototype to C#: Try.These()
## 

The <a href="http://www.prototypejs.org" target="_blank">prototype javascript library</a> has a class (Try) and function called these(). This function accepts an array of functions as it's sole argument and it will execute each function in the array, in the order they are added, and return the result from the first function that executes without error. If none of the functions executes successfully undefined is returned.

For example:

<pre><code class="prettyprint">
var i = Try.These(
    function() { return 9 / 0; },
    function() { return 1; }
);
</code></pre>

If we ran the sample above i would equal 1 because the first function would encounter a division by zero error. However:

<pre><code class="prettyprint">
var h = 0;
var i = Try.These(
    function() { return 9 / h; },
    function() { return 1 / h; }
);
</code></pre>

i will equal undefined in this example.

With the .Net framework's generics library we can achieve roughly the same results. We won't be able to assign an undefined value to the result but we can play around with the default keyword. :D

<pre><code class="prettyprint">
public class Try
{
    public static T These(params Func[] delegates)
    {
        for (int i = 0; i &lt;= delegates.Length - 1; i++)
        {
            try
            {
                return (T)delegates[i]();
            }
            catch
            {

            }
        }
        return default(T);
    }
}
</code></pre>

So for example:

<pre><code class="prettyprint">
static void Main(string[] args)
{
    int i = 0;
    int y = Try.These(
        delegate() {
            int x = 0;
            return i / x;
        },

        delegate() {
            return ++i;
    });

    Console.Write("y is " + y.ToString());
}
</code></pre>

Will output

<code>y is 0</code>