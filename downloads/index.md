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

Monero Core consists of several applications, including bitmonerod (the daemon used if running a @full-node, as it maintains the connection to the Monero network) and simplewallet (a Monero @account manager application), as well as several other helper applications.

If you are using Monero Core for the first time you may want to download a @blockchain bootstrap to get you started. A link to download the @blockchain bootstrap is included in the listings below.

- Place Windows 64-bit blockchain in %AppData%/bitmonero
- Place OS X 64-bit blockchain in ~/.bitmonero
- Place Linux 64-bit blockchain in ~/.bitmonero

Note: the SHA hashes are listed by the downloads for convenience, but a GPG-signed list of the hashes is at [getmonero.org/downloads/hashes.txt](https://getmonero.org/downloads/hashes.txt) and should be treated as canonical, with the signature checked against the appropriate GPG key in the source code (in /utils/gpg_keys).

<div class="row">

{% for data_downloads in site.data.downloads %}

{% if data_downloads.hash == "source" %}

<div class="col-lg-6" style="padding-bottom: 5px;">

<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="{{ data_downloads.url }}">
  <img src="//static.getmonero.org/images/platforms/{{ data_downloads.icon }}" style="height: 30px;"> {{ data_downloads.platform }}
 </a>
</h4>

<strong>Current Version:</strong> {{ data_downloads.version }}<br>
<br>
<strong>Optional:</strong> Download a Blockchain Bootstrap from this page<br><br>
<hr>

</div>

{% elsif data_downloads.hash == "none" %}

<div class="col-lg-6" style="padding-bottom: 5px;">

<h4 id="{{ data_downloads.platform | slugify }}">
  <img src="//static.getmonero.org/images/platforms/{{ data_downloads.icon }}" style="height: 30px;"> {{ data_downloads.platform }}
</h4>

<br><br>
<strong>Coming Soon</strong><br><br>
<hr>

</div>

{% else %}

<div class="col-lg-6" style="padding-bottom: 5px;">

<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="//downloads.getmonero.org/{{ data_downloads.url }}">
  <img src="//static.getmonero.org/images/platforms/{{ data_downloads.icon }}" style="height: 30px;"> {{ data_downloads.platform }}
 </a>
</h4>

<strong>Current Version:</strong> {{ data_downloads.version }}<br>
<strong>SHA Hash:</strong> {{ data_downloads.hash }}<br>
<br>
<strong>Optional:</strong> <a href="//downloads.getmonero.org/blockchain/{{ data_downloads.blockchain }}/blockchain.bin">Download the Blockchain Bootstrap</a>
<hr>

</div>

{% endif %}

{% endfor %}
</div>

### Other Downloads

- For @blockchain bootstraps please use the link for your current platform from the list above.
- For Monero Research Lab publications please visit the [Monero Research Lab section](/research-lab) of this site.
- High resolution and vector copies of the Monero logo [can be downloaded at this link](https://downloads.getmonero.org/resources/branding.zip).
