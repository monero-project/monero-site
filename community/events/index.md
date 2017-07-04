---
layout: custom
title: Events
---

<div markdown="1" class="text-center container description">
Monero people are always down to get together and have a good time. Check below to see Monero-related events happening in your area.
</div>

{% for toplevel in site.data.events %}

<div class="events">
    <div class="container full col-xs-12">
           <div class="info-block text-adapt">
                <div class="row">
                    <div class="col-xs-12">
                        <h2>{{toplevel.event}}</h2>
                        <h3>Where</h3>
                        <p>{{toplevel.where}}</p>
                        <h3>When</h3>
                        <p>{{toplevel.when}}</p>
                        <h3>Description</h3>
                        <p>{{toplevel.description}}</p>
                        <h3>Link</h3>
                        <a>{{toplevel.link}}</a>
                    </div>
                </div>
            </div>
    </div>
</div>

{%endfor%}