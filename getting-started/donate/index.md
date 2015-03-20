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

### How this Project is Funded

Ongoing development of the Monero Project is solely supported by donations and sponsors. At this time the project is vastly underfunded, and thus donations are greatly appreciated.

### Donating and Sponsoring

If you would like to make a donation you can do so by using any of the methods below:

- Donating in Monero: you can send XMR donations to [donate.getmonero.org](monero:46BeWrHpwXmHDpDEUmZBWZfoQpdc6HaERCNmx1pEYL2rAcuwufPN9rXHHtyUA4QVy66qeFQkn6sfK8aHYjA3jk3o1Bv16em?recipient_name=Monero%20Development&tx_description=Donation%20to%20Monero%20Core%20Team), or directly to our Monero donation address -  
  <span class="long-term">[46BeWrHpwXmHDpDEUmZBWZfoQpdc6HaERCNmx1pEYL2rAcuwufPN9rXHHtyUA4QVy66qeFQkn6sfK8aHYjA3jk3o1Bv16em](monero:46BeWrHpwXmHDpDEUmZBWZfoQpdc6HaERCNmx1pEYL2rAcuwufPN9rXHHtyUA4QVy66qeFQkn6sfK8aHYjA3jk3o1Bv16em?recipient_name=Monero%20Development&tx_description=Donation%20to%20Monero%20Core%20Team)</span>  
- Donating in Bitcoin: you can also send BTC donations to [donate.getmonero.org](bitcoin:1FhnVJi2V1k4MqXm2nHoEbY5LV7FPai7bb?label=Monero%20Development&message=Donation%20to%20Monero%20Core%20Team), or directly to our Bitcoin address: [1FhnVJi2V1k4MqXm2nHoEbY5LV7FPai7bb](bitcoin:1FhnVJi2V1k4MqXm2nHoEbY5LV7FPai7bb?label=Monero%20Development&message=Donation%20to%20Monero%20Core%20Team)  
- To donate via credit card, wire transfer, or PayPal, please email the core team at [{{ site.email }}](mailto:{{ site.email }})

Sponsorships are also greatly appreciated, including those companies that give us free or reduced-cost access to development hardware, hosting and other services, and software licenses. If you would like to sponsor Monero development in some form, please email the core team at [{{ site.email }}](mailto:{{ site.email }})

### Current Sponsors

Current sponsors include several mining pools that contribute a portion of their fees to development. You can find a list of these pools in [the first post on the Monero thread on Bitcointalk](https://bitcointalk.org/index.php?topic=583449.0). Over and above that, our sponsors include:

{:.text-center style="letter-spacing: 30px;"}
[![MyMonero](//static.getmonero.org/images/sponsors/mymonero.png)](https://mymonero.com) [![Kitware](//static.getmonero.org/images/sponsors/kitware.png)](http://kitware.com) [![Dome9](//static.getmonero.org/images/sponsors/dome9.png)](http://dome9.com) [![Araxis](//static.getmonero.org/images/sponsors/araxis.png)](http://araxis.com) [![JetBrains](//static.getmonero.org/images/sponsors/jetbrains.png)](http://www.jetbrains.com/)

### The Monero Community Hall of Fame

All donators to Monero development are also eligible to be listed in the [Community Hall of Fame](/getting-started/donate/hall-of-fame). Members of the most prestigious level of donators, 8th Dan, are also listed below. The full [Hall of Fame can be viewed at this link](/getting-started/donate/hall-of-fame).

<div class="text-center" markdown="1">

---

{% for donator in site.data.donators %}
{% if donator.level == 8 %}

### {{ donator.name }}, with a donation of {{ donator.amount }} XMR [<a data-toggle="tooltip" data-placement="top" data-html="true" data-original-title="{% for achievement in donator.history %}{{ achievement }}<br>{% endfor %}">history</a>]

{% if donator.quote %}
> {{ donator.quote }}
> <small>{{ donator.quote-author }}</small>
{% endif %}

{% endif %}
{% endfor %}

---

</div>