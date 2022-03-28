---
layout: custom
title: titles.downloads
permalink: /downloads/index.html
---

{% t global.lang_tag %}
<div class="downloads">
    <div class="container description">
    <p>{% t downloads.intro %}</p>
    </div>
    <!-- Downloads menu: desktop -->
    <div class="container full downdropdown">
        <div class="info-block download-nav row middle-xs between-xs" id="selections">
            <div class="col"><a href="#gui">{% t downloads.gui %}</a></div>
            <div class="col"><a href="#cli">{% t downloads.cli %}</a></div>
            <div class="col"><a href="#mobilelight">{% t downloads.mobilelight0 %}</a></div>
            <div class="col"><a href="#blockchain">{% t downloads.blockchain %}</a></div>
            <div class="col"><a href="#hardware">{% t downloads.hardware %}</a></div>
        </div>
    </div>
    <!-- End downloads menu: desktop -->
    <!-- Downloads menu: mobile -->
    <div class="container full">
      <div class="info-block row center-xs" id="pick-platform">
         <div class="mob dropdowndrop">
            <input id="check01" type="checkbox" name="menu"/>
            <label for="check01">{% t downloads.choose %}</label>
            <ul id="menu">
              <li><a href="#gui">{% t downloads.gui %}</a></li>
              <li><a href="#cli">{% t downloads.cli %}</a></li>
              <li><a href="#mobilelight">{% t downloads.mobilelight %}</a></li>
              <li><a href="#blockchain">{% t downloads.blockchain %}</a></li>
              <li><a href="#hardware">{% t downloads.hardware %}</a></li>
            </ul>
          </div>
      </div>
    </div>
    <!-- End downloads menu: mobile -->
    <div class="download-platforms">
      <section class="container full">
        <!-- 'GUI Wallet' -->
        <div class="info-block">
        {% for item in site.data.downloads.gui %}
          <div class="row start-md">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <h2 id="gui">{% t downloads.gui %}</h2>
                <i>{% t downloads.gui_intro %}</i>
            </div>
            <div class="col-md-7 col-sm-12 align-blocks">
                <img class="screen" width="888" height="880" loading="lazy" alt="{% t accessibility.guiscreen %}" src={% if site.lang == "en" %}"/img/downloads/gui.png"{% else %}"/img/downloads/{{site.lang}}/gui.png"{% endif %}>
            </div>
            <div class="col-md-5 col-sm-12 align-blocks">
              <ul class="logo">
                <li><b>{% t downloads.simplemode %}.</b> {% t downloads.simplemode1 %}</li>
                <li><b>{% t downloads.advancedmode %}.</b> {% t downloads.advancedmode1 %}</li>
                <li><b>{% t downloads.merchantpage %}.</b> {% t downloads.merchantpage1 %}</li>
                <li><b>{% t downloads.hwcompatible %}</b> {% t downloads.hwcompatible1 %}</li>
                <li><b>{% t downloads.fiatconv %}.</b> {% t downloads.fiatconv1 %}</li>
                <li><b>{% t downloads.pruning %}.</b> {% t downloads.pruning1 %}</li>
                <li>{% t downloads.langs %}</li>
              </ul>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <h3>{% t titles.downloads %}</h3>
                <p><i>{% t downloads.currentversion %}:</i> {{ item.version }} (<a href="{{ site.baseurl_root }}/blog/tags/releases.html">{% t downloads.releasenotes %}</a>)</p>
                <div class="row">
                  <div class="col-md-4 col-sm-4 col-xs-4 desktop-only">
                    <ul>
                      <li class="downloads"><span class="icon-windows"></span><a class="orange" href="https://downloads.getmonero.org/gui/win64install">Windows 64-bit (Installer)</a></li>
                     <li class="downloads"><span class="icon-windows"></span><a class="orange" href="https://downloads.getmonero.org/gui/win64">Windows 64-bit (zip)</a></li>
                    </ul>
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 desktop-only">
                    <ul>
                      <li class="downloads"><span class="icon-linux"></span><a class="orange" href="https://downloads.getmonero.org/gui/linux64">Linux 64-bit</a></li>
                      <li class="downloads"><span class="icon-apple"></span><a class="orange" href="https://downloads.getmonero.org/gui/mac64">Mac OS X 64-bit</a></li>
                    </ul>
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 desktop-only">
                    <ul>
                      <li class="downloads"><span class="icon-github"></span><a class="orange" href="https://github.com/monero-project/monero-gui" target="_blank">{% t downloads.sourcecode %}</a></li>
                      <li class="downloads"><span class="icon-git"></span><a class="orange" href="https://downloads.getmonero.org/gui/source">{% t downloads.sourcearchive %}</a></li>
                    </ul>
                  </div>
                  <div class="mobile-only">
                    <ul class="nopadding">
                    {% for entry in item.downloads %}
                      {% unless entry.vers != nil %}
                      <li class="downloads"><span class="{{ entry.icon }}"></span><a class="orange" href="{{ entry.link }}">{{ entry.platform }}</a></li>
                      {% endunless %}
                    {% endfor %}
                    </ul>
                  </div>
                  {% for entry in item.downloads %}
                    {% if entry.vers != nil %}
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <p><i>{% t downloads.currentversion %}:</i> {{ entry.vers }}</p>
                      <ul>
                        <li class="downloads"><span class="{{ entry.icon }}"></span><a class="orange" href="{{ entry.link }}">{{ entry.platform }}</a></li>
                      </ul>
                    </div>
                    {% endif %}
                  {% endfor %}
                  <div class="col-md-12 col-sm-12 col-xs-12">
                  <p>{% t downloads.packages %} <a href="https://github.com/monero-project/monero-gui#installing-the-monero-gui-from-a-package" target="_blank">{% t downloads.packages_link %}</a>.</p>
                  <h3>{% t downloads.antivirus %}</h3>
                  <p>{% t downloads.avwarning %} <a href="{{ site.baseurl }}/get-started/faq/#antivirus">{% t downloads.moreinfofaq %}</a>.</p>
                  <h3>{% t downloads.verify %}</h3>
                    <p>{% t downloads.verify1 %} <i>{% t downloads.verify2 %}</i></p><br>
                    <details>
                    <summary>{% t downloads.showhash %}</summary>
                     <p>{% t downloads.showhash1 %} <a href="{{ site.baseurl_root }}/downloads/hashes.txt">getmonero.org/downloads/hashes.txt</a> {% t downloads.showhash2 %} <a href="https://github.com/monero-project/monero/blob/master/utils/gpg_keys/binaryfate.asc" target="_blank">{% t downloads.showhash3 %}</a>.</p>
                     <p>{% t downloads.showhash4 %} <a href="{{site.baseurl}}/resources/user-guides/verification-windows-beginner.html">{% t user-guides.verify-windows %}</a> - <a href="{{site.baseurl}}/resources/user-guides/verification-allos-advanced.html">{% t user-guides.verify-allos %}</a>.</p>
                     <dl>
                    {% for entry in item.downloads %}
                      {% unless entry.hash == nil %}
                    <dt><span class="{{ entry.icon }}"></span>{{ entry.platform }}</dt><dd class="hash">{{ entry.hash }}</dd>
                      {% endunless %}
                    {% endfor %}
                     </dl>
                  </details>
                  <h3>{% t downloads.helpsupport %}</h3>
                  <p>{% t downloads.helpsupport1 %} <a href="https://github.com/monero-ecosystem/monero-GUI-guide/releases" target="_blank">{% t downloads.helpsupport2 %}</a>.</p>
                  <p>{% t downloads.gui_helpsupport %}.</p>
                  </div>
                </div>    
            </div>
          </div>
        {% endfor %}  
        </div>
        <!-- End 'GUI Wallet' -->
        <!-- 'CLI Wallet' -->
        <div class="info-block">
        {% for item in site.data.downloads.cli %}
          <div class="row start-md">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <h2 id="cli">{% t downloads.cli %}</h2>
                <i>{% t downloads.cli_intro0 %} {% t downloads.cli_intro %}</i>
            </div>
            <div class="col-md-7 col-sm-12 align-blocks">
                <img class="screen" width="882" height="882" loading="lazy" alt="{% t accessibility.cliscreen %}" src={% if site.lang == "en" %}"/img/downloads/cli.png"{% else %}"/img/downloads/{{site.lang}}/cli.png"{% endif %}>
            </div>
            <div class="col-md-5 col-sm-12 align-blocks">
              <ul class="logo">
                <li><b>{% t downloads.localremote %}.</b> {% t downloads.localremote1 %}</li>
                <li><b>{% t downloads.transacttor %}.</b> {% t downloads.transacttor1 %}</li>
                <li><b>{% t downloads.bootstrapnode %}</b>. {% t downloads.bootstrapnode1 %}</li>
                <li><b>{% t downloads.hwcompatible %}</b> {% t downloads.hwcompatible1 %}</li>
                <li><b>{% t downloads.rpc %}</b> {% t downloads.rpc1 %}</li>
                <li><b>{% t downloads.pruning %}.</b> {% t downloads.pruning1 %}</li>
                <li><b>{% t downloads.payforrpc %}</b> {% t downloads.payforrpc1 %}</li>
              </ul>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <h3>{% t titles.downloads %}</h3>
                <p><i>{% t downloads.currentversion %}:</i> {{ item.version }} (<a href="{{ site.baseurl_root }}/blog/tags/releases.html">{% t downloads.releasenotes %}</a>)</p>
                <div class="row">
                  <div class="col-md-4 col-sm-4 col-xs-4 desktop-only">
                    <ul>
                      <li class="downloads"><span class="icon-windows"></span><a class="orange" href="https://downloads.getmonero.org/cli/win64">Windows 64-bit</a> | <a class="orange" href="https://downloads.getmonero.org/cli/win32">32-bit</a></li>
                      <li class="downloads"><span class="icon-apple"></span><a class="orange" href="https://downloads.getmonero.org/cli/mac64">Mac OS X 64-bit</a></li>
                      <li class="downloads"><span class="icon-android"></span><a class="orange" href="https://downloads.getmonero.org/cli/androidarm8">Android ARMv8</a> | <a class="orange" href="https://downloads.getmonero.org/cli/androidarm7">Android ARMv7</a></li>
                    </ul>
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 desktop-only">
                    <ul>
                      <li class="downloads"><span class="icon-linux"></span><a class="orange" href="https://downloads.getmonero.org/cli/linux64">Linux 64-bit</a> | <a class="orange" href="https://downloads.getmonero.org/cli/linux32">32-bit</a></li>
                      <li class="downloads"><span class="icon-linux"></span><a class="orange" href="https://downloads.getmonero.org/cli/linuxarm8">Linux ARMv8</a> | <a class="orange" href="https://downloads.getmonero.org/cli/linuxarm7">Linux ARMv7</a></li>
                      <li class="downloads"><span class="icon-freebsd"></span><a class="orange" href="https://downloads.getmonero.org/cli/freebsd64">FreeBSD 64-bit</a></li>
                    </ul>
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 desktop-only">
                    <ul>
                      <li class="downloads"><span class="icon-github"></span><a class="orange" href="https://github.com/monero-project/monero" target="_blank">{% t downloads.sourcecode %}</a></li>
                      <li class="downloads"><span class="icon-git"></span><a class="orange" href="https://downloads.getmonero.org/cli/source">{% t downloads.sourcearchive %}</a></li>
                    </ul>
                  </div>
                  <div class="mobile-only">
                    <ul class="nopadding">
                      {% for entry in item.downloads %}
                        {% unless entry.vers != nil %}
                          <li class="downloads"><span class="{{ entry.icon }}"></span><a class="orange" href="{{ entry.link }}">{{ entry.platform }}</a></li>
                        {% endunless %}
                      {% endfor %}
                    </ul>
                </div>
                {% for entry in item.downloads %}
                  {% if entry.vers != nil %}
                  <div class="col-md-12 col-sm-12 col-xs-12">
                    <p><i>{% t downloads.currentversion %}:</i> {{ entry.vers }}</p>
                    <ul>
                      <li class="downloads"><span class="{{ entry.icon }}"></span><a class="orange" href="{{ entry.link }}">{{ entry.platform }}</a></li>
                    </ul>
                  </div>
                  {% endif %}
                {% endfor %}
                <div class="col-md-12 col-sm-12 col-xs-12">
                <p>{% t downloads.packages %} <a href="https://github.com/monero-project/monero#installing-monero-from-a-package" target="_blank">{% t downloads.packages_link %}</a>.</p>
                <h3>{% t downloads.antivirus %}</h3>
                <p>{% t downloads.avwarning %} <a href="{{ site.baseurl }}/get-started/faq/#antivirus">{% t downloads.moreinfofaq %}</a>.</p>
                <h3>{% t downloads.verify %}</h3>
                <p>{% t downloads.verify1 %} <i>{% t downloads.verify2 %}</i></p><br>
                  <details>
                    <summary>{% t downloads.showhash %}</summary>
                     <p>{% t downloads.showhash1 %} <a href="{{ site.baseurl_root }}/downloads/hashes.txt">getmonero.org/downloads/hashes.txt</a> {% t downloads.showhash2 %} <a href="https://github.com/monero-project/monero/blob/master/utils/gpg_keys/binaryfate.asc" target="_blank">{% t downloads.showhash3 %}</a>.</p>
                     <p>{% t downloads.showhash4 %} <a href="{{site.baseurl}}/resources/user-guides/verification-windows-beginner.html">{% t user-guides.verify-windows %}</a> - <a href="{{site.baseurl}}/resources/user-guides/verification-allos-advanced.html">{% t user-guides.verify-allos %}</a>.</p>
                      <dl>
                     {% for entry in item.downloads %}
                       {% unless entry.hash == nil %}
                         <dt><span class="{{ entry.icon }}"></span>{{ entry.platform }}</dt><dd class="hash">{{ entry.hash }}</dd>
                       {% endunless %}
                    {% endfor %}
                      </dl>
                  </details>
                <h3>{% t downloads.helpsupport %}</h3>
                  <p>{% t downloads.cli_helpsupport %}.</p>
                </div>
                </div>
            </div>
          </div>
        {% endfor %}  
        </div>
      </section>
      <!-- End 'CLI Wallet' -->
      <section class="container full">
            <!-- 'Mobile & Light Wallets' -->
            <div class="info-block">
                <h2 id="mobilelight">{% t downloads.mobilelight %}</h2>
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <p>{% t downloads.mobilelight1 %} <a href="/community/hangouts/"> {% t downloads.mobilelight2 %}</a> {% t downloads.mobilelight3 %}</p>
                        </div>
                    </div>
                        <h3 class="desktop-only">{% t downloads.localsync %}</h3>
                        <p class="desktop-only">{% t downloads.localsyncinfo %}</p>
                        <table class="desktop-only">
                        <tr>
                            <th>{% t downloads.wallet %}</th>
                            <th>{% t downloads.mobile %}</th>
                            <th>{% t downloads.desktop %}</th>
                            <th>{% t downloads.sourcecode %}</th>
                        </tr>
                        <tr>
                            <td><img class="small" src="/img/cakewallet.png" width="172" height="202" loading="lazy" alt="Cake Wallet Logo"><a href="https://cakewallet.com/">Cake Wallet</a></td>
                            <td><span class="icon-android"></span><span class="icon-apple"></span></td>
                            <td>X</td>
                            <td><a class="ext-noicon" href="https://github.com/cake-tech/cake_wallet" aria-label="GitHub icon" target="_blank"><span class="icon-github"></span></a></td>
                        </tr>
                        <tr>
                            <td><img class="small" src="/img/feather.png" width="100" height="100" loading="lazy" alt="Feather logo"><a href="https://featherwallet.org/">Feather</a></td>
                            <td>X</td>
                            <td><span class="icon-linux"></span><span class="icon-windows"></span><span class="icon-apple"></span></td>
                            <td><a class="ext-noicon" href="https://git.featherwallet.org/feather/feather" aria-label="Git icon"><span class="icon-git"></span></a></td>
                        </tr>
                        <tr>
                            <td><img class="small" src="/img/Monerujo-wallet.png" width="100" height="100" loading="lazy" alt="Monerujo logo"><a href="https://monerujo.io/">Monerujo</a></td>
                            <td><span class="icon-android"></span></td>
                            <td>X</td>
                            <td><a class="ext-noicon" href="https://github.com/m2049r/xmrwallet" aria-label="GitHub icon" target="_blank"><span class="icon-github"></span></a></td>
                        </tr>
                        </table>
                        <h3 class="desktop-only">{% t downloads.remotesync %}</h3>
                        <p class="desktop-only">{% t downloads.remotesyncinfo %}</p>
                        <table class="desktop-only">
                        <tr>
                            <th>{% t downloads.wallet %}</th>
                            <th>{% t downloads.mobile %}</th>
                            <th>{% t downloads.desktop %}</th>
                            <th>{% t downloads.sourcecode %}</th>
                        </tr>
                        <tr>
                            <td><img class="small" src="/img/mymonero.png" width="141" height="95" loading="lazy" alt="Mymonero logo" style="height: 15px;"><a href="https://mymonero.com/">MyMonero</a></td>
                            <td><span class="icon-android"></span><span class="icon-apple"></span></td>
                            <td><span title="Browser" class="icon-browser"></span><span class="icon-linux"></span><span class="icon-windows"></span><span class="icon-apple"></span></td>
                            <td><a class="ext-noicon" href="https://github.com/mymonero" aria-label="GitHub icon" target="_blank"><span class="icon-github"></span></a></td>
                        </tr>
                        <tr>
                            <td><img class="small" src="/img/edge-wallet.png" width="141" height="142" loading="lazy" alt="Edge Logo"><a href="https://edge.app/">Edge</a></td>
                            <td><span class="icon-android"></span><span class="icon-apple"></span></td>
                            <td>X</td>
                            <td><a class="ext-noicon" href="https://github.com/EdgeApp" aria-label="GitHub icon" target="_blank"><span class="icon-github"></span></a></td>
                        </tr>
                        </table>
                        <div class="row between-xs mob-wallets mobile-only">
                            <h3>{% t downloads.localsync %}</h3>
                            <p>{% t downloads.localsyncinfo %}</p>
                            <ul>
                                <li><a class="ext-noicon" href="https://cakewallet.io" aria-label="GitHub icon" target="_blank"><img class="mob" style="width: 50px" src="/img/cakewallet.png" width="172" height="202" loading="lazy" alt="Cake Wallet Logo">Cake Wallet</a></li>
                                <li><a class="ext-noicon" href="https://featherwallet.org/" aria-label="Feather icon" target="_blank"><img class="mob" src="/img/feather.png" width="100" height="100" loading="lazy" alt="Feather Logo">Feather</a></li>
                                <li><a class="ext-noicon" href="https://monerujo.io" aria-label="GitHub icon" target="_blank"><img class="mob" src="/img/Monerujo-wallet.png" width="100" height="100" loading="lazy" alt="Monerujo Logo">Monerujo</a></li>
                            </ul>
                            <h3>{% t downloads.remotesync %}</h3>
                            <p>{% t downloads.remotesyncinfo %}</p>
                            <ul>
                                <li><a class="ext-noicon" href="https://mymonero.com" aria-label="GitHub icon" target="_blank"><img class="mob" src="/img/mymonero.png" width="141" height="95" loading="lazy" alt="MyMonero Logo">MyMonero</a></li>
                                <li><a class="ext-noicon" href="https://edge.app/" aria-label="GitHub icon" target="_blank"><img class="mob" src="/img/edge-wallet.png" width="141" height="142" loading="lazy" alt="Edge Logo">Edge</a></li>
                            </ul>
                        </div>
            </div>
            <!-- End 'Mobile & Light Wallets' -->
            </section>
            <section class="container full">
                <!-- 'Import Blockchain' -->
                <div class="info-block">
                    <h2 id="blockchain">{% t downloads.blockchain %}</h2>
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <p>{% t downloads.blockchain1 %} {% t downloads.blockchain2 %} <a href="{{site.baseurl}}/resources/user-guides/importing_blockchain.html">"{% t downloads.blockchain3 %}"</a> {% t downloads.blockchain4 %}</p><br>
                                <div class="center-xs"><a class="btn-link btn-auto btn-primary-top" href="https://downloads.getmonero.org/blockchain.raw">{% t downloads.blockchainbutton %}</a></div>
                            </div>
                        </div>
                </div>
                <!-- End 'Import Blockchain' -->
            </section>
            <section class="container full">
                <div class="info-block">
                <!-- 'Hardware Wallets' -->
                  <h2 id="hardware">{% t downloads.hardware %}</h2>
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12 hw">
                            <p>{% t downloads.hwdesc %}</p>
                                <table class="desktop-only">
                                <tr>
                                    <th>{% t downloads.hwth %}</th>
                                    <th>{% t downloads.hwthmodel %}</th>
                                    <th>{% t downloads.hwthsupported %}</th>
                                    <th>{% t downloads.hwthfirm %}</th>
                                </tr>
                                <tr>
                                    <td><a class="ext-noicon" href="https://support.ledger.com/hc/en-us/articles/360006352934-Monero-XMR-" target="_blank"><img class="hw" src="/img/ledger.png" loading="lazy" alt="ledger logo"></a><p><a href="https://support.ledger.com/hc/en-us/articles/360006352934-Monero-XMR-" target="_blank">{% t downloads.instructions %}</a></p></td>
                                    <td>
                                        <ul>
                                            <li>Nano S</li>
                                            <li>Nano X</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>Monero GUI</li>
                                            <li>Monero CLI</li>
                                            <li>Feather</li>
                                            <li>Monerujo</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>{% t downloads.hwnanos %}</li>
                                            <li>{% t downloads.hwnanox %}</li>
                                        </ul>     
                                    </td>
                                </tr>
                                <tr>
                                    <td><a class="ext-noicon" href="https://wiki.trezor.io/Monero_(XMR)" target="_blank"><img src="/img/trezor.png" loading="lazy" alt="Trezor logo"></a><p><a href="https://wiki.trezor.io/Monero_(XMR)" target="_blank">{% t downloads.instructions %}</a></p></td>
                                    <td>
                                        <ul>
                                            <li>Model T</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>Monero GUI</li>
                                            <li>Monero CLI</li>
                                            <li>Feather</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>{% t downloads.hwtrezor %}</li>
                                        </ul>
                                    </td>
                                </tr>
                                </table>
                                <div class="mobile-only">
                                    <div>
                                    <h3><a class="ext-noicon" href="https://support.ledger.com/hc/en-us/articles/360006352934-Monero-XMR-" target="_blank"><img class="hw" src="/img/ledger.png" loading="lazy" alt="ledger logo"></a><p><a href="https://support.ledger.com/hc/en-us/articles/360006352934-Monero-XMR-" target="_blank">{% t downloads.instructions %}</a></p></h3>
                                    <ul>
                                        <b>{% t downloads.hwmobmodels %}</b>
                                            <li>Nano S</li>
                                            <li>Nano X</li>
                                        <b>{% t downloads.hwthsupported %}:</b>
                                            <li>Monero GUI</li>
                                            <li>Monero CLI</li>
                                            <li>Feather</li>
                                            <li>Monerujo</li>
                                        <b>{% t downloads.hwthfirm %}:</b> 
                                            <li>{% t downloads.hwnanos %}</li>
                                            <li>{% t downloads.hwnanox %}</li>
                                    </ul>
                                    <h3><a class="ext-noicon" href="https://wiki.trezor.io/Monero_(XMR)" target="_blank"><img src="/img/trezor.png" loading="lazy" alt="Trezor logo"></a><p><a href="https://wiki.trezor.io/Monero_(XMR)" target="_blank">{% t downloads.instructions %}</a></p></h3>
                                    <ul>
                                        <b>{% t downloads.hwmobmodels %}</b>
                                            <li>Model T</li>
                                        <b>{% t downloads.hwthsupported %}:</b>
                                            <li>Monero GUI</li>
                                            <li>Monero CLI</li>
                                            <li>Feather</li>
                                        <b>{% t downloads.hwthfirm %}:</b> 
                                            <li>{% t downloads.hwtrezor %}</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>        
                </div>
                <!-- End 'Hardware Wallets' -->
            </section>
    </div>
    <a href="#" class="arrow-up" aria-label="{% t accessibility.arrowup %}" title="{% t accessibility.gotop %}"><i></i></a>
</div>
