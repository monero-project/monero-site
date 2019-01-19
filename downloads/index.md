---
layout: custom
title: titles.downloads
permalink: /downloads/index.html
---

{% t global.lang_tag %}
<div class="downloads">
    <div class="container description">
    <p>{% t downloads.intro1 %} <a href="https://www.reddit.com/r/Monero/comments/64b5lf/what_is_the_best_monero_wallet/">{% t downloads.intro2 %}</a> {% t downloads.intro3 %} {% t downloads.note1 %} <a href="https://getmonero.org/downloads/hashes.txt ">getmonero.org/downloads/hashes.txt</a> {% t downloads.note2 %}</p>
    </div>
    <div class="container full downdropdown">
        <div class="info-block download-nav row middle-xs between-xs" id="selections">
            <div class="col"><a href="#windows">Windows</a></div>
            <div class="col"><a href="#mac">Mac</a></div>
            <div class="col"><a href="#linux">Linux</a></div>
            <div class="col"><a href="#arm">Arm (v7 & 8)</a></div>
            <div class="col"><a href="#source">{% t downloads.sourceblockchain %}</a></div>
            <div class="col"><a href="#mobilelight">{% t downloads.mobilelight %}</a></div>
            <div class="col"><a href="#hardware">{% t downloads.hardware %}</a></div>
        </div>
    </div>
    <div class="container full">
      <div class="info-block row center-xs" id="pick-platform">
         <div class="mob dropdowndrop">
            <input id="check01" type="checkbox" name="menu"/>
            <label for="check01">{% t downloads.choose %}</label>
            <ul id="menu">
              <li><a href="#windows">Windows</a></li>
              <li><a href="#mac">Mac</a></li>
              <li><a href="#linux">Linux</a></li>
              <li><a href="#arm">Arm (v7 & 8)</a></li>
              <li><a href="#source">{% t downloads.sourceblockchain %}</a></li>
              <li><a href="#mobilelight">{% t downloads.mobilelight %}</a></li>
              <li><a href="#hardware">{% t downloads.hardware %}</a></li>
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
                    {% if data_downloads.cli_hash == "source" %}
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <h3 id="{{ data_downloads.platform | slugify }}">
                                    <a href="{{ data_downloads.cli_url }}">{% t downloads.sourcecode %}</a>
                                </h3>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <p>{% t downloads.blockchain1 %} <a href="https://downloads.getmonero.org/blockchain.raw">{% t downloads.blockchain2 %}</a> {% t downloads.blockchain3 %}</p>
                            </div>
                        </div>
                    {% elsif data_downloads.id == "hardware" %}
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <p>{% t downloads.hardware1 %} <a href="https://forum.getmonero.org/9/work-in-progress/88149/dedicated-monero-hardware-wallet" target="_blank" rel="noreferrer, noopener">{% t downloads.hardware2 %}</a> {% t downloads.hardware3 %} <a href="https://github.com/LedgerHQ/blue-app-monero" target="_blank" rel="noreferrer, noopener">{% t downloads.hardware4 %}</a></p>
                            </div>
                        </div>
                    {% elsif data_downloads.id == "mobilelight" %}
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <p>{% t downloads.mobilelight1 %} <a href="/community/hangouts/"> {% t downloads.mobilelight2 %}</a> {% t downloads.mobilelight3 %}</p>
                            </div>
                        </div>
                        <div class="row between-xs mob-wallets">
                                <a href="https://cakewallet.io"><img style="height: 115px;"  src="/img/cakewallet.png" alt="Cake Wallet Logo"></a>
                                <a href="https://monerujo.io"><img style="height: 115px;" src="/img/Monerujo-wallet.png" alt="Monerujo Logo"></a>
                                <a href="https://mymonero.com"><img src="/img/mymonero.png" alt="MyMonero Logo"></a>
                                <a href="https://edge.app/"><img style="height: 115px;" src="/img/edge-wallet.png" alt="Edge Logo"></a>
                        </div>
                    {% elsif data_downloads.gui_hash == nil and data_downloads.cli_hash != nil %}
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <h3 id="{{ data_downloads.platform | slugify }}">
                                     <a href="//downloads.getmonero.org/cli/{{ data_downloads.cli_url }}"> {{ data_downloads.platform }} {% t downloads.clionly %}</a>
                                </h3>
                                <p>{% t downloads.currentversion %}: {{ data_downloads.version }} {{ data_downloads.tag }}</p>
                            </div>
                         </div>
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <p class="prehash">SHA256 Hash:</p>
                                <p class="hash"> {{ data_downloads.cli_hash }}</p>
                            </div>
                        </div>
                    {% elsif data_downloads.gui_hash != nil and data_downloads.cli_hash == nil %}
                        <div class="row">
                            <h3 id="{{ data_downloads.platform | slugify }}">
                                <a href="//downloads.getmonero.org/gui/{{ data_downloads.gui_url }}">{{ data_downloads.platform }}</a>
                            </h3>
                            <p>{% t downloads.currentversion %}: {{ data_downloads.version }} {{ data_downloads.tag }}</p>
                        </div>
                        <div class="row">
                            <p class="prehash">SHA256 Hash:</p>
                            <p class="hash"> {{ data_downloads.gui_hash }}</p>
                        </div>
                    {% elsif data_downloads.gui_hash != nil and data_downloads.cli_hash != nil %}
                        <div class="row start-md">
                            <div class="col-md-6 col-sm-12" >
                                <h3 id="{{ data_downloads.platform | slugify }}">
                                    <a href="//downloads.getmonero.org/gui/{{ data_downloads.gui_url }}">{{ data_downloads.platform }}</a>
                                </h3>
                                <p>{% t downloads.currentversion %}: {{ data_downloads.gui_version }} {{ data_downloads.tag }}</p>
                                <p class="prehash">SHA256 Hash (GUI):</p>
                                <p class="hash"> {{ data_downloads.gui_hash }}</p>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <h3>
                                    <a href="//downloads.getmonero.org/cli/{{ data_downloads.cli_url }}">{{ data_downloads.platform }} {% t downloads.clionly %}</a>
                                </h3>
                                <p>{% t downloads.currentversion %}: {{ data_downloads.cli_version }} {{ data_downloads.tag }}</p>
                                <p class="prehash">SHA256 Hash (CLI):</p>
                                <p class="hash"> {{ data_downloads.cli_hash }}</p>
                            </div>
                        </div>
                    {% endif %}
                </div>
            </section>
        {% endfor %}
    </div>
    <a href="#" class="arrow-up"><i></i></a>
</div>

<div class="untranslated {% t downloads.translated %}">
    <p>{% t global.untranslated %} <a class="untranslated-link" href="https://repo.getmonero.org/monero-project/monero-site/blob/master/README.md#140-how-to-translate-a-page">README</a>.</p>
</div>
