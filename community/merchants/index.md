---
layout: custom
title: titles.merchants
permalink: /community/merchants/index.html
meta_descr: merchants.descr
---
{% t global.lang_tag %}
<section class="container">
  <div class="merchants site-wrap">
    <div class="text-center container description">
      <p>{% t merchants.descr %}</p>
    </div>
    <div class="full col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="info-block">
        <h2>{% t merchants.useit %}</h2>
        <p>{% t merchants.use %}</p>
        <p>{% t merchants.dirdescr %}</p>
        <ul class="logo">
          <li><a href="https://cryptwerk.com/pay-with/xmr/">cryptwerk.com</a></li>
          <li><a href="https://monerica.com">Monerica</a></li>
        </ul>
      </div>
    </div>
    <div class="full col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="info-block">
        <h2>P2P exchanges and Atomic Swaps</h2>
        <p>{% t merchants.descrp2p %}</p>
        <p>{% t merchants.swapsdescr %} <a href="{{ site.baseurl_root }}/2021/08/20/atomic-swaps.html">Atomic Swaps</a></p>
      </div>
    </div>
    <div class="row">
      <div class="left half no-pad-sm col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="info-block">
          <div class="center-xs">
            <img class="merch" src="/img/merchants/bisq.svg" alt="Bisq Logo" title="Bisq">
            <p>{% t merchants.bisqdescr %}</p>
          </div>
          <div>
            <p><b>{% t merchants.cardfoss %}</b> <span class="check"></span></p>
            <p><b>{% t merchants.noncustodial %}</b> <span class="check"></span></p>
            <p>{% t merchants.cardkyc %} <span class="check"></span></p>
            <p><b>XMR &#8596; fiat:</b> <span class="cross"></span> {% t merchants.cardbtcfiat %}</p>
            <p><b>{% t merchants.cardonion %}</b> <span class="cross"></span></p>
            <p><b>{% t merchants.cardi2p %}</b> <span class="cross"></span></p>
          </div>
          <div class="center-xs">
          <p><a href="https://bisq.network/" class="btn-link btn-fixed btn-primary-top">{% t merchants.visitbisq %}</a></p>
          </div>
        </div>
      </div>
      <div class="right half no-pad-sm col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="info-block">
          <div class="center-xs">
            <img class="merch" src="/img/merchants/eigenwallet.png" alt="EigenWallet Logo" title="EigenWallet">
            <p>{% t merchants.eigenwalletdescr %}</p>
          </div>
          <div>
            <p><b>{% t merchants.cardfoss %}</b> <span class="check"></span></p>
            <p><b>{% t merchants.noncustodial %}</b> <span class="check"></span></p>
            <p>{% t merchants.cardkyc %} <span class="check"></span></p>
            <p><b>XMR &#8596; fiat:</b> <span class="cross"></span></p>
            <p><b>{% t merchants.cardonion %}</b> <span class="check"></span></p>
            <p><b>{% t merchants.cardi2p %}</b> <span class="cross"></span></p>
          </div>
          <div class="center-xs">
            <p><a href="https://eigenwallet.org" class="btn-link btn-fixed btn-primary-top">{% t merchants.visiteigenwallet %}</a></p>
          </div>
        </div>
      </div>
      <div class="left half no-pad-sm col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="info-block" style="height:auto; min-height:0; align-self:flex-start;">
          <div class="center-xs">
            <img class="merch" src="/img/merchants/basicswapdex.png" alt="BasicSwapDEX Logo" title="BasicSwapDEX">
            <p>{% t merchants.basicswapdexdesc %}</p>
          </div>
          <div>
            <p><b>{% t merchants.cardfoss %}</b> <span class="check"></span></p>
            <p><b>{% t merchants.noncustodial %}</b> <span class="check"></span></p>
            <p>{% t merchants.cardkyc %} <span class="check"></span></p>
            <p><b>XMR &#8596; fiat:</b> <span class="cross"></span></p>
            <p><b>{% t merchants.cardonion %}</b> {% t merchants.setreq %} </p>
            <p><b>{% t merchants.cardi2p %}</b> <span class="cross"></span></p>
          </div>
          <div class="center-xs">
            <p><a href="https://basicswapdex.com" class="btn-link btn-fixed btn-primary-top">{% t merchants.visitbasicswapdex %}</a></p>
          </div>
        </div>
      </div>
      <div class="right half no-pad-sm col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="info-block">
          <div class="center-xs">
            <img class="merch" src="/img/haveno.png" alt="Haveno Logo" title="Haveno">
            <p>{% t merchants.havenodescr %}</p>
          </div>
          <div>
            <p><b>{% t merchants.cardfoss %}</b> <span class="check"></span></p>
            <p><b>{% t merchants.noncustodial %}</b> <span class="check"></span></p>
            <p>{% t merchants.cardkyc %} <span class="check"></span></p>
            <p><b>XMR &#8596; fiat:</b> <span class="check"></span></p>
            <p><b>{% t merchants.cardonion %}</b> <span class="check"></span></p>
            <p><b>{% t merchants.cardi2p %}</b> <span class="cross"></span></p>
          </div>
          <div class="center-xs">
            <p><a href="https://haveno.exchange" class="btn-link btn-fixed btn-primary-top">{% t merchants.visithaveno %}</a></p>
          </div>
          <br>
          <hr>
          <div class="center-xs">
            <img class="merch" src="/img/retoswap.png" alt="RetoSwap Logo" title="RetoSwap">
            <h4>RetoSwap</h4>
            <p>{% t merchants.retoswapdescr %}</p>
            <p><a href="https://retoswap.com" class="btn-link btn-fixed btn-primary-top">{% t merchants.visitretoswap %}</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="full col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="info-block">
        <h2>{% t merchants.centrexchanges %}</h2>
        <p>{% t merchants.centrexchangesp %}</p>
        <h3>CEXes</h3>
        <p>{% t merchants.cexp %}</p>
        <ul class="logo">
            <li><a href="https://www.kraken.com/">Kraken</a> (USD¹, EUR¹ ², CAD, AUD, CHF)</li>
            <li><a href="https://dvchain.co/">DV Chain (OTC)</a> (USD¹, CAD¹, GBP¹, EUR¹, JPY¹, ...)</li>
            <li><a href="https://www.bitfinex.com/">Bitfinex</a> (USD¹)</li>
            <li><a href="https://bitcoinvn.io?deposit=vnd&settle=xmr">BitcoinVN</a> (VND¹)</li>
          </ul>
          <p>¹ Fiat currency to Monero trading pair (e.g. XMR/USD, XMR/EUR)</p>
          <p>² XMR Unavailable for EEA Users</p>
        <h3>Swappers</h3>
        <p>{% t merchants.swappersp %}</p>
        <ul class="logo">
            <li><a href="https://simpleswap.io/">SimpleSwap</a></li>
            <li><a href="https://changenow.io/">ChangeNow</a></li>
            <li><a href="https://godex.io/">Godex</a></li>
            <li><a href="https://stealthex.io/">StealthEX</a></li>
          </ul>
      </div>
    </div>
    <div class="text-center container description">
      <p><em>{% t merchants.disclaimer %}</em></p>
    </div>
  </div>
</section>
