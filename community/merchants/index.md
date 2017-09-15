---
layout: custom
title: Merchants & Services
---
<div markdown="1" class="text-center container description">
Merchants of all kinds have come to value the financial privacy that Monero brings. Below is a list of the merchants that we know of that currently accept Monero for their goods and services. If a company no longer accepts Monero or you would like your business to be listed, please [open a GitHub issue and let us know](https://github.com/monero-project/monero-site/issues).
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