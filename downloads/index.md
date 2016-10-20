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

Monero Core consists of several applications, including bitmonerod (the daemon used if running a @full-node, as it maintains the connection to the Monero network) and monero-wallet-cli (a Monero @account manager application), as well as several other helper applications.

If you are using Monero Core for the first time you can simply download an appropriate release, and run bitmonerod to get synced up to the network.

Note: the SHA256 hashes are listed by the downloads for convenience, but a GPG-signed list of the hashes is at [getmonero.org/downloads/hashes.txt](https://getmonero.org/downloads/hashes.txt) and should be treated as canonical, with the signature checked against the appropriate GPG key in the source code (in /utils/gpg_keys).

<div class="row">

{% for data_downloads in site.data.downloads %}

{% if data_downloads.hash == "source" %}

<div class="col-lg-6" style="padding-bottom: 5px;">

<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="{{ data_downloads.url }}">
  <img src="//static.getmonero.org/images/platforms/{{ data_downloads.icon }}" style="height: 30px;"> {{ data_downloads.platform }}
 </a>
</h4>

<strong>Current Version:</strong> {{ data_downloads.version }} <em>{{ data_downloads.tag }}</em><br>
<hr>

</div>

{% elsif data_downloads.hash == "none" %}

<div class="col-lg-6" style="padding-bottom: 5px;">

<h4 id="{{ data_downloads.platform | slugify }}">
  <img src="//static.getmonero.org/images/platforms/{{ data_downloads.icon }}" style="height: 30px;"> {{ data_downloads.platform }}
</h4>

<br>
<strong>Coming Soon</strong><br>
<hr>

</div>

{% else %}

<div class="col-lg-6" style="padding-bottom: 5px;">

<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="//downloads.getmonero.org/{{ data_downloads.url }}">
  <img src="//static.getmonero.org/images/platforms/{{ data_downloads.icon }}" style="height: 30px;"> {{ data_downloads.platform }}
 </a>
</h4>

<strong>Current Version:</strong> {{ data_downloads.version }} <em>{{ data_downloads.tag }}</em><br>
<strong>SHA Hash:</strong> {{ data_downloads.hash }}<br>
<hr>

</div>

{% endif %}

{% endfor %}
</div>

### Other Downloads

- If you'd prefer to use a blockchain bootstrap, instead of syncing up from scratch, you can [use this link for the most current bootstrap](https:////downloads.getmonero.org/blockchain.raw). It is typically much faster to sync from scratch, however.
- For Monero Research Lab publications please visit the [Monero Research Lab section](/research-lab) of this site.
- High resolution and vector copies of the Monero logo [can be downloaded at this link](https://downloads.getmonero.org/resources/branding.zip).
