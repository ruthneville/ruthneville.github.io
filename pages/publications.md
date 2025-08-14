
---
layout: default
title: Publications
permalink: /pages/publications/
---

<section class="card">
  <h2>Publications</h2>
  <ol reversed>
    {% for pub in site.data.publications %}
    <li>
      <strong>{{ pub.title }}</strong> ({{ pub.year }}).
      {% if pub.journal %}<em>{{ pub.journal }}</em>.{% endif %}
      {% if pub.authors %}<br/>Authors: {{ pub.authors }}.{% endif %}
      {% if pub.links %}<br/>{% for link in pub.links %}<a href="{{ link.url }}">{{ link.label }}</a>{% if forloop.last == false %} · {% endif %}{% endfor %}{% endif %}
    </li>
    {% endfor %}
  </ol>
  <details>
    <summary>Show BibTeX</summary>
    <pre>
@article{{ example2025,
  title={{Example Title}},
  author={{Neville, Ruth and Colleagues}},
  journal={{Journal}},
  year={{2025}},
  doi={{10.xxxx/xxxxx}}
}}
    </pre>
  </details>
</section>
