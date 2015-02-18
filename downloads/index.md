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

### Monero Core

Monero Core consists of several applications, including bitmonerod (the daemon that maintains the connection to the network) and simplewallet (a Monero account manager application), as well as several other helper applications.

If you are using Monero Core for the first time you may want to download a blockchain bootstrap to get you started. A link to download the blockchain bootstrap is included in the listings below.

<div class="row">

{% for data_downloads in site.data.downloads %}

{% if data_downloads.hash == "source" %}

<div class="col-lg-6" style="padding-bottom: 5px;">

<h4>
 <a href="{{ data_downloads.url }}">
  <img src="//static.monero.cc/images/platforms/{{ data_downloads.icon }}" style="height: 30px;"> {{ data_downloads.platform }}
 </a>
</h4>

<strong>Current Version:</strong> {{ data_downloads.version }}<br>
<br>
<strong>Optional:</strong> Download a Blockchain Bootstrap from this page<br><br>
<hr>

</div>

{% elsif data_downloads.hash == "none" %}

<div class="col-lg-6" style="padding-bottom: 5px;">

<h4>
  <img src="//static.monero.cc/images/platforms/{{ data_downloads.icon }}" style="height: 30px;"> {{ data_downloads.platform }}
</h4>

<br><br>
<strong>Coming Soon</strong><br><br>
<hr>

</div>

{% else %}

<div class="col-lg-6" style="padding-bottom: 5px;">

<h4>
 <a href="{{ data_downloads.url }}">
  <img src="//static.monero.cc/images/platforms/{{ data_downloads.icon }}" style="height: 30px;"> {{ data_downloads.platform }}
 </a>
</h4>

<strong>Current Version:</strong> {{ data_downloads.version }}<br>
<strong>SHA Hash:</strong> {{ data_downloads.hash }}<br>
<br>
<strong>Optional:</strong> <a href="/downloads/blockchain/{{ data_downloads.blockchain }}/blockchain.bin">Download the Blockchain Bootstrap</a>
<hr>

</div>

{% endif %}

{% endfor %}
</div>

### Other Downloads

- For blockchain bootstraps please use the link for your current platform from the list above.
- For Monero Research Lab publications please visit the [Monero Research Lab section](/research-lab) of this site.
- High resolution and vector copies of the Monero logo [can be downloaded at this link](/downloads/resources/branding.zip).
