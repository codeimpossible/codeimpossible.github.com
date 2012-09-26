---
layout: page
title: Anything is possible if you have access to a compiler.
tagline: Hey there
---
{% include JB/setup %}

### Hey, my name is Jared Barboza, I'm a Husband, Musician, Gamer, and Software Developer who specializes in JavaScript, Ruby, Python and C#. This is my blog.

So, yeah, this is it. My little spot on "teh interwebs".

### A long time ago, in a memory address far, far away
My first computer was an IBM PC 5155 which weighed more than I did. My first experience with programming came just after Windows 95 was released. I got a copy of Visual Basic 4.0 for my birthday and I spent that entire summer locked in my room writing code and reading every book I could get my hands on. It was awesome.

I've been hooked on writing code ever since, and through the years I've had the chance to work on awesome projects with some really great technologies and people.

### Currently
I record [a weekly podcast](http://thepullrequest.com?ref=codeimpossible) with some friends, am an active and outspoken proponent of open source software, and I'm [starting a company](http://fragcastle.com?ref=codeimpossible) with [@JohnBubriski](http://johnnycode.com).

## I also write
Below are all of the posts for this blog, I had to remove some of them when I migrated from my old host but I'm adding them back in as I get free time.

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
