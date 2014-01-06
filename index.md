---
layout: page
title: Anything is possible if you have access to a compiler.
---
{% include JB/setup %}

{% for post in site.posts offset: 0 limit: 7 %}
<article class="body-article">
<h2><a href="{{BASE_PATH}}{{post.url}}">{{post.title}}</a></h2>
<p>{{ post.content | strip_html | truncatewords:75}}... <a href="{{BASE_PATH}}{{post.url}}" class="btn btn-small">Read More</a></p>
</article>
{% endfor %}

For more reading, check the [archives](/archive.html).
