---
layout: static_page
title: "Donating and Sponsorships"
title-pre-kick: "Donating and "
title-kick: "Sponsorships"
title-post-kick: ""
kick-class: "kicks"
icon: "icon_donations"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---

### {% t gs.donate.how_funded %}

{% t gs.donate.how_funded_text %}

### {% t gs.donate.donate_sponsor %}

{% t gs.donate.donate_sponsor_text_1 %}

{:.text-center style="letter-spacing: 30px;"}
![Monero QR Code](//static.getmonero.org/images/donate-monero.png) ![Bitcoin QR Code](//static.getmonero.org/images/donate-bitcoin.png)

{% t gs.donate.donate_sponsor_text_2 %} 
{% t gs.donate.donate_sponsor_text_3 %}  
{% t gs.donate.donate_sponsor_text_4 %}
{% t gs.donate.donate_sponsor_text_5 %}

### {% t gs.donate.current_sponsors %}

{% t gs.donate.current_sponsors_text %}

{:.text-center style="letter-spacing: 30px;"}
[![MyMonero](//static.getmonero.org/images/sponsors/mymonero.png)](https://mymonero.com) [![Kitware](//static.getmonero.org/images/sponsors/kitware.png?1)](http://kitware.com) [![Dome9](//static.getmonero.org/images/sponsors/dome9.png)](http://dome9.com) [![Araxis](//static.getmonero.org/images/sponsors/araxis.png)](http://araxis.com) [![JetBrains](//static.getmonero.org/images/sponsors/jetbrains.png)](http://www.jetbrains.com/) [![Navicat](//static.getmonero.org/images/sponsors/navicat.png)](http://www.navicat.com/)

### {% t gs.donate.hall_of_fame %}

{% t gs.donate.hall_of_fame_text %}

<div class="text-center" markdown="1">

---

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

</div>