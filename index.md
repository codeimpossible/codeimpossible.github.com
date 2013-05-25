---
layout: page
title: Anything is possible if you have access to a compiler.
---
{% include JB/setup %}

My first computer was an IBM PC 5155 which weighed more than I did. My first experience with programming came just after Windows 95 was released. I got a copy of Visual Basic 4.0 for my birthday and I spent that entire summer locked in my room writing code and reading every book I could get my hands on. It was awesome.

I've been hooked on writing code ever since, and through the years I've had the chance to work on awesome projects with some really great technologies and people.

### Currently
I'm a UI Architect (yeah, yeah) at [Blackduck Software](http://blackducksoftware.com), where I spend a lot of time writing JavaScript. I am a co-founder and game-maker at [Frag Castle Games](http://fragcastle.com?ref=codeimpossible), which I started with my pal [@JohnBubriski](http://johnnycode.com).

## Posts

{% for post in site.posts offset: 0 limit: 7 %}
<h3><a href="{{BASE_PATH}}{{post.url}}">{{post.title}}</a>&nbsp;<small>{{ post.date | date_to_string }}</small></h3>
<p>{{ post.content | strip_html | truncatewords:75}}... <a href="{{BASE_PATH}}{{post.url}}" class="btn btn-small">Read more</a></p>
{% endfor %}

For more reading, check the [archives](/archive.html).
