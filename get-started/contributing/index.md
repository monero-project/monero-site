---
layout: custom
title: titles.contributing
permalink: /get-started/contributing/index.html
---
{% t global.lang_tag %}
<div class="text-center container description">
    <p>{% t contributing.intro %}</p>
</div>
<div class="contribute">
    <section class="container">
        <div class="row">         
            <!-- full block-->
            <div class="full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="info-block text-adapt">
                    <div class="row center-xs">
                        <div class="col">
                            <h2>{% t contributing.network %}</h2>
                        </div>
                    </div>
                    <div class="row start-xs">
                        <h3>{% t contributing.full-node %}</h3>
                        <p>{% t contributing.full-node_p %}</p>
                        <p>{% t contributing.full-node_p2 %} <a href="{{ site.baseurl }}/resources/user-guides/vps_run_node.html">{% t user-guides.vps-node %}</a>, <a href="{{ site.baseurl }}/resources/user-guides/node-i2p-zero.html">{% t user-guides.node-i2pzero %}</a>, <a href="http://xmrguide42y34onq.onion/tails">{% t user-guides.tailsguide %}</a>. <a href="{{ site.baseurl }}/resources/user-guides/">{% t contributing.allguides %}</a></p>
                        <h3>{% t contributing.develop %}</h3>
                        <p>{% t contributing.developp %}</p>
                            <ul class="logo">
                                <li><a href="https://github.com/monero-project/monero">{% t contributing.cli %}</a> {% t contributing.cli_p %}</li>
                                <li><a href="https://github.com/monero-project/monero-gui">{% t contributing.gui %}</a> {% t contributing.gui_p %}</li>
                                <li><a href="https://github.com/monero-project/monero-site">{% t contributing.website %}</a> {% t contributing.website_p %}</li>
                                <li>{% t contributing.bug %} <a href="https://github.com/monero-project/meta/blob/master/VULNERABILITY_RESPONSE_PROCESS.md">{% t contributing.discl %}</a></li>
                            </ul>
                        <p>{% t contributing.develop_descr %} <a href="{{ site.baseurl }}/community/workgroups/">{% t contributing.develop_wg %}</a></p>
                        <h3>{% t contributing.mine %}</h3>
                        <p>{% t contributing.mine_p %} <a href="{{ site.baseurl }}/get-started/mining/">{% t contributing.mine_link %}</a></p>
                    </div>
                </div>
            </div>
            <!-- end full block-->
            <!-- full block-->
            <div class="full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="info-block text-adapt">
                    <div class="row center-xs">
                        <div class="col">
                            <h2>{% t contributing.ffs %}</h2>
                        </div>
                    </div>
                    <div class="row start-xs">
                        <p>{% t contributing.ccs_p %}</p>
                    </div><br>
                    <div class="row center-xs">
                        <a class="btn-link btn-auto btn-primary" href="https://ccs.getmonero.org">{% t contributing.ccsbutton %}</a>
                    </div>
                </div>
            </div>
            <!-- end full block-->
            <!-- full block-->
            <div class="full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="info-block text-adapt">
                    <div class="row center-xs">
                        <div class="col">
                            <h2>{% t contributing.donate %}</h2>
                        </div>
                    </div>
                    <div class="row start-xs">
                        <p>{% t contributing.donate_p %}</p>
                    </div>
                    <div class="row start-xs">
                        <div class="col-xs-12">
                            <h3>{% t contributing.genfund %}</h3>
                            <p>{% t contributing.genfund_p %}</p>
                            <p>Monero:<br><code>888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H</code></p>
                            <p>Bitcoin:<br><code>1KTexdemPdxSBcG55heUuTjDRYqbC5ZL8H</code></p>
                            <p>@openalias: <code>donate.getmonero.org</code></p>
                        </div>
                    </div><br>
                    <div class="row center-xs">
                        <div class="col-lg-6">
                            <img class="qr" src="/img/donate-monero.png" alt="{% t contributing.altqrmonero %}"/>
                        </div>
                        <div class="col-lg-6">
                            <img class="qr" src="/img/donate-bitcoin.png" alt="{% t contributing.altqrbitcoin %}"/>
                        </div>
                    </div>
                    <div class="row start-xs">
                       <div class="col-xs-12">
                            <p>{% t contributing.donate-other_para1 %} <a href="mailto:dev@getmonero.org">dev[at]getmonero[dot]org</a> {% t contributing.donate-other_para2 %}</p>
                       </div>
                    </div>
                    <div class="row start-xs">
                        <div class="col-xs-12">
                            <h3>{% t contributing.supportdev %}</h3>
                            <p>{% t contributing.supportdev_p %}</p>
                            <p>{% t contributing.supportdev_p2 %} <a href="https://www.openhub.net/p/monero/contributors/summary">{% t contributing.supportdev_link %}</a>.</p>
                        </div>
                    </div>
                    <div class="row start-xs">
                        <div class="col-xs-12">
                            <h3>{% t contributing.sponsor %}</h3>
                            <p>{% t contributing.sponsor_p %} <a href="{{ site.baseurl }}/community/sponsorships/">{% t contributing.sponsor_link %}</a> {% t contributing.sponsor_p2 %}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- full block-->    
        </div>
    </section>
</div>
