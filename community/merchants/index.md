---
layout: custom
title: titles.merchants
permalink: /community/merchants/index.html
---
<div class="text-center container description">
    <p>{% t merchants.intro1 %}<a href="https://github.com/monero-project/monero-site/issues"> {% t merchants.intro2 %}</a></p>
</div>
<div class="merchants">
{% for toplevel in site.data.merchants %}
<div class="container full" id="{{toplevel.id}}">
       <div class="info-block">
        <h2>{{toplevel.category}}</h2>
        <div class="row">
            {% assign sortedMerchants = toplevel.merchants | sort: 'name' %}
            {% for merchants in sortedMerchants %}
            <div class="col-md-4 col-sm-6 col-xs-12">
                <a href="{{merchants.url}}">{{merchants.name}}</a>
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

<div class="untranslated {% t merchants.translated %}">
    <p>{% t global.untranslated %} <a class="untranslated-link" href="https://github.com/monero-project/monero-site/blob/master/README.md">README</a>.</p>
</div>