---
layout: static_page
title: "Monero Merchants and Services Directory"
title-pre-kick: "Monero "
title-kick: "Merchants and Services "
title-post-kick: "Directory"
kick-class: "purple-kicks"
icon: "icon_merchants"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---

---

<div class="row">

{% for data_merchants in site.data.merchants %}

<div class="col-lg-4">

<h4 class="text-center">{{ data_merchants.category }}</h4>

<ul>

{% for data_merchant in data_merchants.merchants %}

<li><a href="{{ data_merchant.url }}">{{ data_merchant.name }}</a></li>

{% endfor %}

</ul>
<hr>
</div>

{% endfor %}

</div>

All of the merchants are organised alphabetically. If there are any merchants that no longer provide Monero services, or a merchant that wishes to be added, please [open an issue on this website's Github repository](https://github.com/monero-project/monero-site/issues) to alert us. Please, We can't accept illegal, not-trusted or scammed e-shop.
