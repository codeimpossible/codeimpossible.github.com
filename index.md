---
layout: page
---
{% include JB/setup %}

<ul class="ci-post-list list-unstyled">
{% for post in site.posts offset: 0 limit: 7 %}
  <li class="row">
    <article class="col-md-12 col-lg-8 col-lg-offset-1">
      <h2><a href="{{BASE_PATH}}{{post.url}}">{{post.title}}</a></h2>
      <p>{{ post.content | strip_html | truncatewords:75}}... <a href="{{BASE_PATH}}{{post.url}}" class="btn btn-small">Read More</a></p>
    </article>
  </li>
{% endfor %}
</ul>

For more reading, check the [archives](/archive.html).
