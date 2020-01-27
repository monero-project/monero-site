---
layout: custom
title: titles.presskit
permalink: /press-kit/index.html
---

<div class="text-center container description">
    <p>{% t press-kit.intro1 %} <strong>{% t press-kit.intro2 %}</strong> {% t press-kit.intro3 %} <a href="/press-kit/monero-press-kit.zip">{% t press-kit.intro4 %}</a></p>
</div>
<section class="container">
    <div class="row">
        <div class="left half no-pad-sm col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="info-block">
                <div class="row center-xs">
                    <div class="col">
                        <h2>{% t press-kit.symbol %}</h2>
                    </div>
                </div>
                <div class="row center-xs">
                    <img src="/press-kit/symbols/monero-symbol-480.png" alt="Monero Symbol" class="symbol-logo">
                </div>
                <div class="row center-xs press">
                    <div class="col-md-6">
                        <p>{% t press-kit.noback %} (PNG)</p>
                        <a href="/press-kit/symbols/monero-symbol-480.png">{% t press-kit.small %}</a>
                        <a href="/press-kit/symbols/monero-symbol-800.png">{% t press-kit.medium %}</a>
                        <a href="/press-kit/symbols/monero-symbol-1280.png">{% t press-kit.large %}</a>
                    </div>
                    <div class="col-md-6">
                        <p>{% t press-kit.whiteback %} (PNG)</p>
                        <a href="/press-kit/symbols/monero-symbol-on-white-480.png">{% t press-kit.small %}</a>
                        <a href="/press-kit/symbols/monero-symbol-on-white-800.png">{% t press-kit.medium %}</a>
                        <a href="/press-kit/symbols/monero-symbol-on-white-1280.png">{% t press-kit.large %}</a>
                    </div>
                </div>
                <div class="row center-xs press">
                    <a href="/press-kit/symbols/monero-symbol.ai" class="adi">{% t press-kit.symbol_file %}</a>
                </div>
            </div>
        </div>
        <div class="right half col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="info-block">
                <div class="row center-xs">
                    <div class="col">
                        <h2>{% t press-kit.logo %}</h2>
                    </div>
                </div>
                <div class="row center-xs">
                   <div class="col-xs-12">
                       <img src="/press-kit/logos/monero-logo-480.png" alt="Monero Logo" class="monero-symbol-logo">
                   </div>
                </div>
                <div class="row center-xs press">
                    <div class="col-md-6">
                        <p>{% t press-kit.noback %} (PNG)</p>
                        <a href="/press-kit/logos/monero-logo-480.png">{% t press-kit.small %}</a>
                        <a href="/press-kit/logos/monero-logo-800.png">{% t press-kit.medium %}</a>
                        <a href="/press-kit/logos/monero-logo-1280.png">{% t press-kit.large %}</a>
                    </div>
                    <div class="col-md-6">
                        <p>{% t press-kit.whiteback %} (PNG)</p>
                        <a href="/press-kit/logos/monero-logo-symbol-on-white-480.png">{% t press-kit.small %}</a>
                        <a href="/press-kit/logos/monero-logo-symbol-on-white-800.png">{% t press-kit.medium %}</a>
                        <a href="/press-kit/logos/monero-logo-symbol-on-white-1280.png">{% t press-kit.large %}</a>
                    </div>
                </div>
                <div class="row center-xs press">
                   <div class="col-xs-12">
                    <a href="/press-kit/logos/monero-logo.ai" class="adi">{% t press-kit.logo_file %}</a>
                   </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="container full">
  {% for press in site.translations[site.lang].press-kit.documents %}
  <div class="info-block">
    <h2>{{ press.category }}</h2>
    <div>
      {% for publication in press.publications %}
        <h3><a href="{{ publication.url_file }}">{{ publication.name }}</a></h3>
        <p>{{ publication.abstract }}</p>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
  <div class="info-block">
  {% for entry in site.translations[site.lang].press-kit.marketing %}
    <h2>{{ entry.category }}</h2>
    <div>
      {% for publication in entry.publications %}
      <h3><a href="{{ publication.url_file }}">{{ publication.name }}</a></h3>
      <p>{{ publication.abstract }}</p>
      {% endfor %}
    </div>
  {% endfor %}
  </div>
</section>
