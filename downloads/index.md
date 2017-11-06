---
layout: custom
title: "Downloads"
---

<div class="downloads">

<div class="container description" markdown="1">

If you need help choosing the correct application, please click [here](https://www.reddit.com/r/Monero/comments/64b5lf/what_is_the_best_monero_wallet/) for a quick answer, then select the appropriate release for your operating system below.
Note: the SHA256 hashes are listed by the downloads for convenience, but a GPG-signed list of the hashes is at [getmonero.org/downloads/hashes.txt](https://getmonero.org/downloads/hashes.txt) and should be treated as canonical, with the signature checked against the appropriate GPG key in the source code (in /utils/gpg_keys).

</div>
<div class="container full downdropdown">
<div class="info-block download-nav row middle-xs between-xs" id="selections">
    
    <div class="col"><a href="#windows">Windows</a></div>
    <div class="col"><a href="#mac">Mac</a></div>
    <div class="col"><a href="#linux">Linux</a></div>
    <div class="col"><a href="#arm">Arm (v7 & 8)</a></div>
    <div class="col"><a href="#bsd">BSD</a></div>
    <div class="col"><a href="#source">Source & Blockchain</a></div>
    <div class="col"><a href="#mobilelight">Mobile & Light</a></div>
    <div class="col"><a href="#hardware">Hardware</a></div>
    
</div>
</div>

<div class="container full">
  <div class="info-block row center-xs" id="pick-platform">
     <div class="mob dropdowndrop">
        <input id="check01" type="checkbox" name="menu"/>
        <label for="check01">Choose your OS</label>
        <ul id="menu">
          <li><a href="#windows">Windows</a></li>
          <li><a href="#mac">Mac</a></li>
          <li><a href="#linux">Linux</a></li>
          <li><a href="#arm">Arm (v7 & 8)</a></li>
          <li><a href="#bsd">BSD</a></li>
          <li><a href="#source">Source & Blockchain</a></li>
          <li><a href="#mobilelight">Mobile & Light</a></li>
          <li><a href="#hardware">Hardware</a></li>
        </ul>
      </div>
  </div>
</div>


<div class="download-platforms">

{% for data_downloads in site.data.downloads %}

<section class="container full" id="{{ data_downloads.id}}">
    <div class="info-block">
        <h2> 
            {% if data_downloads.icon != null %}
            <span class="{{data_downloads.icon}}"></span>  
            {% endif %}
            {{data_downloads.platform}}
        </h2>
            {% if data_downloads.version != null %}
        <p class="text-center">Current Version: {{ data_downloads.version }} {{ data_downloads.tag }}</p>
            {%endif%}



{% if data_downloads.cli_hash == "source" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="{{ data_downloads.cli_url }}">Source Code</a>
</h4>
</div>
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12" markdown="1">
If you'd prefer to use a blockchain bootstrap, instead of syncing from scratch, you can [use this link for the most current bootstrap](https://downloads.getmonero.org/blockchain.raw). It is typically much faster to sync from scratch, however, and it also takes a lot less RAM (import is very greedy).
</div>
</div>
{% elsif data_downloads.id == "hardware" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<p>The Monero community has just funded a <a href="https://forum.getmonero.org/9/work-in-progress/88149/dedicated-monero-hardware-wallet" target="_blank" rel="noreferrer, noopener">Dedicated Hardware Wallet</a> which is now in progress. As well, Ledger is working on <a href="https://github.com/LedgerHQ/blue-app-monero" target="_blank" rel="noreferrer, noopener">integrating Monero into their hardware wallets</a>.</p>
</div></div>

{% elsif data_downloads.id == "mobilelight" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<p>The following are mobile or light wallets that are deemed safe by trusted members of the community. If there is a wallet that is not on here, you can request the community check it out. Go to our <a href="/community/hangouts/">Hangouts</a> page to see where we are.</p>
</div>
</div>
<div class="row center-xs">
  <div class="col-xs-12">
    <a href="https://mymonero.com"><img src="/img/mymonero.png" alt="MyMonero Logo"></a>
    <a href="https://walletmonero.com" style="margin-left: 100px;height: 116px;"><img src="/img/walletmonero.png" alt="WalletMonero Logo"></a>
  </div>
</div>


{% elsif data_downloads.gui_hash == nil and data_downloads.cli_hash != nil %}
<div class="row"><div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12"><h4 id="{{ data_downloads.platform | slugify }}">
 <a href="//downloads.getmonero.org/cli/{{ data_downloads.cli_url }}"> {{ data_downloads.platform }} (Command-line Tools Only)</a>
 </h4></div></div>
 <div class="row"><div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
 <p><strong>SHA256 Hash:</strong></p> <p class="hash"> {{ data_downloads.cli_hash }}</p></div>
</div>
{% elsif data_downloads.gui_hash != nil and data_downloads.cli_hash == nil %}
<div class="row">

<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="//downloads.getmonero.org/gui/{{ data_downloads.gui_url }}">{{ data_downloads.platform }}</a>
 </h4></div>
<div class="row">
<p><strong>SHA256 Hash:</strong></p> <p class="hash"> {{ data_downloads.gui_hash }}</p>
</div>
{% elsif data_downloads.gui_hash != nil and data_downloads.cli_hash != nil %}
<div class="row start-md">
<div class="col-md-6 col-sm-12" >

<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="//downloads.getmonero.org/gui/{{ data_downloads.gui_url }}">{{ data_downloads.platform }}</a>
</h4>
<p><strong>SHA256 Hash (GUI):</strong></p> <p class="hash"> {{ data_downloads.gui_hash }}</p>

</div>

<div class="col-md-6 col-sm-12">
<h4>
 <a href="//downloads.getmonero.org/cli/{{ data_downloads.cli_url }}">{{ data_downloads.platform }} (Command-Line Tools Only)</a>
</h4>
<p><strong>SHA256 Hash (CLI):</strong></p> <p class="hash"> {{ data_downloads.cli_hash }}</p>
</div>
</div>
{% endif %}
    </div>
</section>

{% endfor %}

</div>
<a href="#" class="arrow-up"><i></i></a>

</div>



