---
layout: custom
title: titles.accepting
permalink: /get-started/accepting/index.html
---
{% t global.lang_tag %}
<section class="container">
    <div class="row">
        <div class="full">
          <div class="info-block text-adapt">
            <h3>{% t accepting.index %}</h3>
            <ul class="logo">
              <li><a href="#gui">{% t accepting.title_gui %}</a></li>
              <li><a href="#cli">{% t accepting.cliinstructions %}</a></li>
              <li><a href="#merchants">{% t accepting.merchantstitle %}</a></li>
            </ul>
            <h3 id="gui">{% t accepting.title_gui %}</h3>
              <p>{% t accepting.gui1 %}</p>
              <p>{% t accepting.gui2 %} <a href="https://github.com/monero-ecosystem/monero-GUI-guide/blob/master/monero-GUI-guide.md#receive-monero">{% t accepting.guilinkguide %}</a></p>
                <img class="top-margin" src="/img/receive.png" width="980" height="800" loading="lazy" alt="receive page">
              <p>{% t accepting.guiinstructions %}</p>
              <p>{% t accepting.guimerchant %} <a href="https://github.com/monero-ecosystem/monero-GUI-guide/blob/master/monero-GUI-guide.md#merchant-view">{% t accepting.guilinkguide1 %}</a>.</p>
                <img class="top-margin" src="/img/merchant_page.png" width="980" height="800" loading="lazy" alt="merchant view">
              <p>{% t accepting.guimerchant1 %}</p>
              <p>{% t accepting.guisteps %}</p>
              <ol>
                <li>{% t accepting.guiol %}</li>
                <li>{% t accepting.guiol1 %}</li>
                <li>{% t accepting.guiol2 %}</li>
                <li>{% t accepting.guiol3 %}</li>
                <li>{% t accepting.guiol4 %}</li>
              </ol>
            <h3 id="cli">{% t accepting.cliinstructions %}</h3>
              <p>{% t accepting.clicreatewallet %}</p>
              <p>{% t accepting.cliaccounts %}</p>
              <p>{% t accepting.clicreateaccount %}</p>
              <p><code>account new [label text with white spaces allowed]</code></p>
              <p>{% t accepting.clicreateaccount1 %}</p>
                <img class="top-margin" src="/img/account_cli.png" width="755" height="142" loading="lazy" alt="accounts">
              <p>{% t accepting.cliindex %}</p>
                <img class="top-margin" src="/img/account_switch.png" width="752" height="216" loading="lazy" alt="accounts switch">
              <p>{% t accepting.cliindex1 %}</p>
              <p><code>address new [label text with white spaces allowed]</code></p>
              <p><i>{% t accepting.clinotes %}</i></p>
            <h3 id="merchants">{% t accepting.merchantstitle %}</h3>
              <p>{% t accepting.merchantsreceive %} <a href="{{ site.baseurl }}/resources/developer-guides/">{% t accepting.merchdevguides %}</a>. {% t accepting.merchantsreceive1 %}</p>
              <p>{% t accepting.merchantsint %} <a href="https://github.com/monero-integrations">{% t accepting.merchantsintlink %}</a>.</p>
              <p>{% t accepting.merchantsthirdp %} <a href="{{ site.baseurl }}/community/merchants/#payment-gateways">{% t accepting.merchthirdlink %}</a>. {% t accepting.merchantsthirdp1 %}</p>
          </div>
        </div>                
    </div>
</section>
