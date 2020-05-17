---
layout: custom
title: titles.merchants
permalink: /community/merchants/index.html
---
{% t global.lang_tag %}
<div class="merchants text-center container description">
    <p>{% t merchants.intro1 %}<a href="https://github.com/monero-project/monero-site/issues"> {% t merchants.intro2 %}</a> {% t merchants.intro3 %}</p>
</div>
<div class="merchants">

{% assign itemCount = site.data.merchants | size %}
{% assign headerRow = itemCount | divided_by: 5.0 | ceil | times: 1.0 %}
{% assign itemInRow = itemCount | divided_by: headerRow | ceil %}

{% assign Item_processed = 0 %}
<div class="container full">
  {% for toplevel in site.data.merchants %}
    {% assign isHeader = Item_processed | modulo: itemInRow %}
    {% if isHeader == 0 %}
      <div class="tabPanel-merchant tabPanel-merchant{{ itemInRow }}">
    {% endif %}
        <h2><a href="#{{ toplevel.id }}">{{ toplevel.category }}</a></h2>
        {% assign Item_processed = Item_processed | plus: 1 %}
    {% assign isHeader = Item_processed | modulo: itemInRow %}
    {% if isHeader == 0 %}
      </div>
      {% if Item_processed != itemCount %}
        {% assign headerRow = itemCount | minus: Item_processed | divided_by: 5.0 | ceil | times: 1.0 %}
        {% assign itemInRow = itemCount | minus: Item_processed | divided_by: headerRow | ceil %}
      {% endif %}
    {% endif %}
  {% endfor %}
</div>

{% for toplevel in site.data.merchants %}
<div class="container full" id="{{toplevel.id}}">
       <div class="info-block">
        <h2>{{toplevel.category}}</h2>
        <div class="row">
            {% assign sortedMerchants = toplevel.merchants | sort: 'name' %}
            {% for merchants in sortedMerchants %}
            <div class="col-md-6 col-sm-6 col-xs-12">
                <p><a href="{{merchants.url}}">{{merchants.name}}</a>
                {% if merchants.url contains ".onion" %}<img class="onion-mid" src="/img/onion-tor.svg" alt="onion" title="{% t merchants.onion %}">{% endif %}</p>
            </div>
            {% endfor %}
        </div>
        </div>
</div>
{%endfor%}

</div>
<div class="text-center container description">
    <p>
        <em>{% t merchants.disclaimer %}</em>
    </p>
</div>
