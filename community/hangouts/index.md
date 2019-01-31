---
layout: custom
title: titles.hangouts
permalink: /community/hangouts/index.html
---

{% t global.lang_tag %}
<div class="text-center container description">
    <p class="hangouts-social">{% t hangouts.intro %}</p>
    <section class="hangouts-social container">   
        <ul class="row center-xs">
            <li>
                <a href="https://twitter.com/monerocurrency" target="_blank" rel="noreferrer noopener"><div class="social-icon twitter"></div></a>
            </li>
            <li>
                <a href="https://reddit.com/r/monero" target="_blank" rel="noreferrer noopener"><div class="social-icon reddit"></div></a>
            </li>
            <li>
                <a href="https://www.facebook.com/monerocurrency/" target="_blank" rel="noreferrer noopener"><div class="social-icon facebook"></div></a>
            </li>
            <li>
                <a href="https://github.com/monero-project" target="_blank" rel="noreferrer noopener"><div class="social-icon github"></div></a>
            </li>
        </ul>
    </section>
</div>

<div class="hangouts">
    <section class="container">
          <div class="row">
                <!-- left two-thirds block-->
               <div class="left two-thirds col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div class="col-xs-12">
                        <div class="info-block">
                            <div class="row center-xs">
                                <div class="col">
                                    <h2>{% t hangouts.resources %}</h2>
                                </div>
                            </div>
                            <div class="row center-xs">
                                <p>{% t hangouts.resources_para %}</p>
                            </div>
                            <div class="row relays center-xs">
                                <div class="col-md-4 col-sm-4 col-xs-4">
                                    <p><a href="https://monero.slack.com/" class="btn-link btn-fixed">Slack</a></p>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-4">
                                    <p><a href="https://mattermost.getmonero.org/" class="btn-link btn-fixed">Mattermost</a></p>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-4">
                                    <p><a href="https://taiga.getmonero.org/" class="btn-link btn-fixed">Taiga</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="info-block">
                            <div class="row center-xs">
                                <div class="col">
                                    <h2>{% t hangouts.irc %}</h2>
                                </div>
                            </div>
                            <div class="row start-xs">
                                <p>{% t hangouts.irc_para %}</p>
                            </div>
                            <div class="row irc">
                                {% for channel in site.translations[site.lang].hangouts.irc_channels %}
                                    <div class="col-md-4 col-xs-12">
                                        <a href="irc://chat.freenode.net/#{{ channel.channel }}">#{{ channel.channel }}</a>
                                        <p>{{ channel.description }}</p>
                                    </div>
                                {% endfor %}
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end left two-thirds block-->
                <!-- right one-third block-->
               <div class="right one-third col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div class="info-block">
                            <div class="row">
                                <div class="col">
                                    <h2>{% t hangouts.stack_exchange %}</h2>
                                    <p>{% t hangouts.stack_exchange_para %}</p>
                                    <p><a href="https://monero.stackexchange.com/questions/4277/why-does-monero-have-higher-transaction-fees-than-bitcoin">Why does monero have higher transaction fees than bitcoin?</a></p>
                                    <p><a href="https://monero.stackexchange.com/questions/4335/what-does-moneros-scaling-roadmap-look-like">What does Monero's scaling roadmap look like?</a></p>
                                    <p><a href="https://monero.stackexchange.com/questions/4302/what-cryptography-primitives-concepts-other-than-the-basic-ones-does-monero-us">What cryptography primitives/concepts, other than the basic ones, does Monero use?</a></p>
                                    <p><a href="https://monero.stackexchange.com/questions/4242/how-to-extract-data-from-local-blockchain">How to extract data from local blockchain?</a></p>
                                    <p><a href="https://monero.stackexchange.com/questions/4377/hiding-tcp-traffic-for-monero-miners">Hiding TCP traffic for Monero miners?</a></p>
                                </div>
                            </div>  
                            <div class="row">
                                <p><a href="https://monero.stackexchange.com" class="orange">{% t hangouts.stack_exchange_link %}</a></p>
                            </div>
                        </div>
               </div>
               <!-- end right one-third block-->
           </div>
        </section>
</div>

<div class="untranslated {% t hangouts.translated %}">
    <p>{% t global.untranslated %} <a class="untranslated-link" href="https://repo.getmonero.org/monero-project/monero-site/blob/master/README.md#140-how-to-translate-a-page">README</a>.</p>
</div>