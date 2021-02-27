---
permalink: /assets/js/search-store.js
---
{% assign id_counter = -1 %}
var store = [
  {% for page in site.pages %}{% if page.title %}
    {
      'id': {% increment id_counter %},
      'title': '{{ page.title }}',
      'url': '{{ site.baseurl }}{{ page.url }}',
      'description': '{{ page.description }}',
      'content': {{ page.content | strip_html | jsonify }}
    },
  {% endif %}{% endfor %}
]
