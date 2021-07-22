---
layout: custom
title: titles.merchants
permalink: /community/merchants/index.html
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
          <li><a href="https://www.acceptedhere.io/catalog/currency/xmr/">acceptedhere.io</a></li>
        </ul>
      </div>
    </div>
    <div class="full col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="info-block">
        <h2>P2P exchanges and Atomic Swaps</h2>
        <p>{% t merchants.descrp2p %}</p>
        <p>{% t merchants.swapsdescr %} <a href="https://unstoppableswap.net/">unstoppableswap.net</a>.</p>
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
          </div>
          <div class="center-xs">
          <p><a href="https://bisq.network/" class="btn-link btn-fixed btn-primary-top">{% t merchants.visitbisq %}</a></p>
          </div>
        </div>
      </div>
      <div class="right half no-pad-sm col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="info-block">
          <div class="center-xs">
            <img class="merch" src="/img/merchants/localmonero.png" alt="LocalMonero logo" title="LocalMonero">
            <p>{% t merchants.locmondescr %}</p>
          </div>
          <div>
            <p><b>{% t merchants.cardfoss %}</b> <span class="cross"></span></p>
            <p><b>{% t merchants.noncustodial %}</b> <span class="cross"></span></p>
            <p>{% t merchants.cardkyc %} {% t merchants.depsell %}</p>
            <p><b>XMR &#8596; fiat:</b> <span class="check"></span></p>
            <p><b>{% t merchants.cardonion %}</b> <span class="check"></span></p>
          </div>
          <div class="center-xs">
            <p><a href="https://localmonero.co" class="btn-link btn-fixed btn-primary-top">{% t merchants.visitlocalmonero %}</a></p>
          </div>
        </div>
      </div>
      <div class="left half no-pad-sm col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="info-block">
          <div class="center-xs">
            <img class="merch" src="/img/merchants/hodlhodl.jpg" alt="HodlHodl Logo" title="HodlHodl">
            <p>{% t merchants.hodlhodldescr %}</p>
          </div>
          <div>
            <p><b>{% t merchants.cardfoss %}</b> <span class="cross"></span></p>
            <p><b>{% t merchants.noncustodial %}</b> <span class="check"></span></p>
            <p>{% t merchants.cardkyc %} <span class="check"></span></p>
            <p><b>XMR &#8596; fiat:</b> <span class="cross"></span> {% t merchants.cardbtcfiat %}</p>
            <p><b>{% t merchants.cardonion %}</b> <span class="cross"></span></p>
          </div>
          <div class="center-xs">
            <p><a href="https://hodlhodl.com" class="btn-link btn-fixed btn-primary-top">{% t merchants.visithodlhodl %}</a></p>
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
            <li><a href="https://www.kraken.com/">Kraken</a> (EUR*, USD*, CAD, GBP, JPY, AUD, CHF)</li>
            <li><a href="https://www.binance.com/trade.html?symbol=XMR_BTC">Binance</a> (USD, EUR, RUB, TRY, NGN, UAH, KZT, INR, ...)</li>
            <li><a href="https://dvchain.co/">DV Chain (OTC)</a> (USD*, CAD*, GBP*, EUR*, JPY*, ...)</li>
            <li><a href="https://www.bitfinex.com/">Bitfinex</a> (USD*)</li>
          </ul>
          <p>*Fiat currency to Monero trading pair (e.g. XMR/USD, XMR/EUR)</p>
        <h3>Swappers</h3>
        <p>{% t merchants.swappersp %}</p>
        <ul class="logo">
            <li><a href="https://sideshift.ai/">Sideshift.ai</a></li>
            <li><a href="https://www.morphtoken.com/">Morphtoken</a></li>
            <li><a href="https://simpleswap.io/">SimpleSwap</a></li>
            <li><a href="https://changenow.io/">ChangeNow</a></li>
            <li><a href="https://godex.io/">Godex</a></li>
          </ul>
      </div>
    </div>
    <div class="text-center container description">
      <p><em>{% t merchants.disclaimer %}</em></p>
    </div>
  </div>
</section>
