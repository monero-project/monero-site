---
layout: static_page
title: "All Monero Downloads"
title-pre-kick: "All Monero"
title-kick: "Downloads"
title-post-kick: ""
kick-class: "red-kicks"
icon: "icon_all_downloads"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---

### {% t downloads.core %}

{% t downloads.core_text_1 %}

{% t downloads.core_text_2 %}

{% t downloads.core_text_3 %}

<div class="row">

{% for data_downloads in site.data.downloads %}

{% if data_downloads.hash == "source" %}

<div class="col-lg-6" style="padding-bottom: 5px;">

<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="{{ data_downloads.url }}">
  <img src="//static.getmonero.org/images/platforms/{{ data_downloads.icon }}" style="height: 30px;"> {{ data_downloads.platform }}
 </a>
</h4>

<strong>{% t downloads.current_version %}</strong> {{ data_downloads.version }} <em>{{ data_downloads.tag }}</em><br>
<hr>

</div>

{% elsif data_downloads.hash == "none" %}

<div class="col-lg-6" style="padding-bottom: 5px;">

<h4 id="{{ data_downloads.platform | slugify }}">
  <img src="//static.getmonero.org/images/platforms/{{ data_downloads.icon }}" style="height: 30px;"> {{ data_downloads.platform }}
</h4>

<br>
<strong>{% t downloads.coming_soon %}</strong><br>
<hr>

</div>

{% else %}

<div class="col-lg-6" style="padding-bottom: 5px;">

<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="//downloads.getmonero.org/{{ data_downloads.url }}">
  <img src="//static.getmonero.org/images/platforms/{{ data_downloads.icon }}" style="height: 30px;"> {{ data_downloads.platform }}
 </a>
</h4>

<strong>{% t downloads.current_version %}:</strong> {{ data_downloads.version }} <em>{{ data_downloads.tag }}</em><br>
<strong>SHA Hash:</strong> {{ data_downloads.hash }}<br>
<hr>

</div>

{% endif %}

{% endfor %}
</div>

### {% t downloads.other_downloads %}

{% t downloads.other_text_1 %}
{% t downloads.other_text_2 %}
{% t downloads.other_text_3 %}
