---
layout: static_page
title: "Community Hall of Fame"
title-pre-kick: "Community Hall of "
title-kick: "Fame"
title-post-kick: ""
kick-class: "green-kicks"
icon: "icon_hallfame"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---

### About the Hall of Fame

Originally started by Risto Pietila, and maintained for many months by cAPSLOCK, the Hall of Fame now lives here. Anyone donating to Monero development can get added to the appropriate category, and subsequent donations can move you up to a higher category.

### The List

<div class="text-center" markdown="1">

---

# 8th Dan Monero Potentates with Five Crates of Diamonds<br><small>Donators of 5 000 XMR and above</small><br><i class="fa fa-diamond"></i> <i class="fa fa-diamond"></i> <i class="fa fa-diamond"></i> <i class="fa fa-diamond"></i> <i class="fa fa-diamond"></i>

{% for donator in site.data.donators %}
{% if donator.level >= 8 %}

### {{ donator.name }}, with a donation of {{ donator.amount }} XMR [<a data-toggle="tooltip" data-placement="top" data-html="true" data-original-title="{% for achievement in donator.history %}{{ achievement }}<br>{% endfor %}">history</a>]

{% if donator.quote %}
> {{ donator.quote }}
> <small>{{ donator.quote-author }}</small>
{% endif %}

{% endif %}
{% endfor %}

---

# 7th Dan Monero Superheroes with Two Crates of Diamonds<br><small>Donators of 2 000 XMR</small><br><i class="fa fa-diamond"></i> <i class="fa fa-diamond"></i>

{% for donator in site.data.donators %}
{% if donator.level == 7 %}

#### {{ donator.name }}, with a donation of {{ donator.amount }} XMR [<a data-toggle="tooltip" data-placement="top" data-html="true" data-original-title="{% for achievement in donator.history %}{{ achievement }}<br>{% endfor %}">history</a>]

{% if donator.quote %}
> {{ donator.quote }}
> <small>{{ donator.quote-author }}</small>
{% endif %}

{% endif %}
{% endfor %}

---

### 6th Dan Monero Superheroes with One Crate of Diamonds<br><small>Donators of 1 000 XMR</small><br><i class="fa fa-diamond"></i>

{% for donator in site.data.donators %}
{% if donator.level == 6 %}

#### {{ donator.name }}, with a donation of {{ donator.amount }} XMR [<a data-toggle="tooltip" data-placement="top" data-html="true" data-original-title="{% for achievement in donator.history %}{{ achievement }}<br>{% endfor %}">history</a>]

{% if donator.quote %}
> {{ donator.quote }}
> <small>{{ donator.quote-author }}</small>
{% endif %}

{% endif %}
{% endfor %}

---

<div class="row" markdown="1">
<div class="col-lg-6 col-md-6" markdown="1">

### 5th Dan Monero Superheroes with Piles of Rhodium<br><small>Donators of 500 XMR</small>

{% for donator in site.data.donators %}
{% if donator.level == 5 %}
#### {{ donator.name }}, with a donation of {{ donator.amount }} XMR [<a data-toggle="tooltip" data-placement="top" data-html="true" data-original-title="{% for achievement in donator.history %}{{ achievement }}<br>{% endfor %}">history</a>]
{% endif %}
{% endfor %}

<hr class="hidden-md hidden-lg">

</div>
<div class="col-lg-6 col-md-6" markdown="1">

### 4th Dan Monero Superheroes with Bars of Platinum<br><small>Donators of 200 XMR</small>

{% for donator in site.data.donators %}
{% if donator.level == 4 %}
#### {{ donator.name }}, with a donation of {{ donator.amount }} XMR [<a data-toggle="tooltip" data-placement="top" data-html="true" data-original-title="{% for achievement in donator.history %}{{ achievement }}<br>{% endfor %}">history</a>]
{% endif %}
{% endfor %}

<hr class="hidden-md hidden-lg">

</div>
</div>

<div class="row hidden-sm">
<hr>
</div>

<div class="row" markdown="1">
<div class="col-lg-4 col-md-4" markdown="1">

### 3rd Dan Monero Heroes with Coins of Gold<br><small>Donators of 100 XMR</small>

{% for donator in site.data.donators %}
{% if donator.level == 3 %}
**{{ donator.name }}, with a donation of {{ donator.amount }} XMR [<a data-toggle="tooltip" data-placement="top" data-html="true" data-original-title="{% for achievement in donator.history %}{{ achievement }}<br>{% endfor %}">history</a>]**
{% endif %}
{% endfor %}

<hr class="hidden-md hidden-lg">

</div>
<div class="col-lg-4 col-md-4" markdown="1">

### 2nd Dan Monero Heroes with a Stash of Silver<br><small>Donators of 50 XMR</small>

{% for donator in site.data.donators %}
{% if donator.level == 2 %}
**{{ donator.name }}, with a donation of {{ donator.amount }} XMR [<a data-toggle="tooltip" data-placement="top" data-html="true" data-original-title="{% for achievement in donator.history %}{{ achievement }}<br>{% endfor %}">history</a>]**
{% endif %}
{% endfor %}

<hr class="hidden-md hidden-lg">

</div>
<div class="col-lg-4 col-md-4" markdown="1">

### 1st Dan Monero Heroes with a Hoard of Copper<br><small>Donators of 20 XMR</small>

{% for donator in site.data.donators %}
{% if donator.level == 1 %}
**{{ donator.name }}, with a donation of {{ donator.amount }} XMR [<a data-toggle="tooltip" data-placement="top" data-html="true" data-original-title="{% for achievement in donator.history %}{{ achievement }}<br>{% endfor %}">history</a>]**
{% endif %}
{% endfor %}

<hr class="hidden-md hidden-lg">

</div>
</div>

<div class="row hidden-sm">
<hr>
</div>

<div class="row" markdown="1">
<div class="col-lg-3 col-md-3" markdown="1">

#### 1st Kyu Monero Supporters with a Bale of High Quality Hygiene Paper<br><small>Donators of 10 XMR</small>

{% for donator in site.data.donators %}
{% if donator.level == -1 %}
{{ donator.name }}, {{ donator.amount }} XMR [<a data-toggle="tooltip" data-placement="top" data-html="true" data-original-title="{% for achievement in donator.history %}{{ achievement }}<br>{% endfor %}">history</a>]
{% endif %}
{% endfor %}

<hr class="hidden-md hidden-lg">

</div>
<div class="col-lg-3 col-md-3" markdown="1">

#### 2nd Kyu Monero Supporters with a Wad of US Dollars<br><small>Donators of 5 XMR</small>

{% for donator in site.data.donators %}
{% if donator.level == -2 %}
{{ donator.name }}, {{ donator.amount }} XMR [<a data-toggle="tooltip" data-placement="top" data-html="true" data-original-title="{% for achievement in donator.history %}{{ achievement }}<br>{% endfor %}">history</a>]
{% endif %}
{% endfor %}

<hr class="hidden-md hidden-lg">

</div>
<div class="col-lg-3 col-md-3" markdown="1">

#### 3rd Kyu Monero Supporters with a Holding of Goxcoins<br><small>Donators of 2 XMR</small>

{% for donator in site.data.donators %}
{% if donator.level == -3 %}
{{ donator.name }}, {{ donator.amount }} XMR [<a data-toggle="tooltip" data-placement="top" data-html="true" data-original-title="{% for achievement in donator.history %}{{ achievement }}<br>{% endfor %}">history</a>]
{% endif %}
{% endfor %}

<hr class="hidden-md hidden-lg">

</div>
<div class="col-lg-3 col-md-3" markdown="1">

#### 4th Kyu Monero Supporters with a Bag of Darkcoins<br><small>Donators of 1 XMR</small>

{% for donator in site.data.donators %}
{% if donator.level == -4 %}
{{ donator.name }}, {{ donator.amount }} XMR [<a data-toggle="tooltip" data-placement="top" data-html="true" data-original-title="{% for achievement in donator.history %}{{ achievement }}<br>{% endfor %}">history</a>]
{% endif %}
{% endfor %}

<hr class="hidden-md hidden-lg">

</div>
</div>

<div class="row hidden-sm">
<hr>
</div>

</div>