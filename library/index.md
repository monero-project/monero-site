---
layout: custom
title: titles.library
permalink: /library/index.html
---
{% t global.lang_tag %}
<div class="about-monero">
  <div class="center-xs container description">
    <p class="text-center">{% t library.description %}</p>
  </div>
  {% for book in site.translations[site.lang].library.books %}
    <section class="container full">
      <div class="info-block">
        <h2>{{ book.category }}</h2>
        <div>
          {% for publication in book.publications %}
            <h3><a href="{{ site.baseurl_root }}/library/{{ publication.file }}">{{ publication.name }}</a></h3>
            <p>{{ publication.abstract }}</p>
          {% endfor %}
        </div>
      </div>
    </section>
  {% endfor %}
</div>

<div class="untranslated {% t library.translated %}">
    <p>{% t global.untranslated %} <a class="untranslated-link" href="https://repo.getmonero.org/monero-project/monero-site/blob/master/README.md#140-how-to-translate-a-page">README</a>.</p>
</div>