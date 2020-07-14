---
layout: default
title: titles.whatismonero
permalink: /get-started/what-is-monero/index.html
---
{% t global.lang_tag %}
<div class="site-wrap">
    <section class="container">
        <div class="row">
            <section class="container about-monero full col-xs-12">
                <div class="info-block">
                    <div class="row center-xs">
                        <div class="col"><h2>{% t what-is-monero.need-to-know %}</h2></div>
                    </div>
                    <div class="row middle-xs info-block-row private">
                        <div class="col-lg-7 col-md-6 col-sm-8 col-xs-12  why-text">
                            <h3>{% t what-is-monero.leading %}</h3>
                            <p>{% t what-is-monero.leading_para1 %}</p>
                            <p>{% t what-is-monero.leading_para2 %}</p>
                        </div>
                        <div class="col-lg-5 col-md-6 col-sm-4 col-xs-12 last-sm first-xs center-xs">
                            <img src="/img/crypto-lock.png" alt="Encrypted lock" class="main-icon">
                        </div>
                    </div>
                    <div class="row middle-xs info-block-row">
                        <div class="col-lg-5 col-md-6 col-sm-4 col-xs-12 center-xs">
                            <img src="/img/monero-classified.png" alt="Classified document" class="main-icon">
                        </div>
                        <div class="col-lg-7 col-md-6 col-sm-8 col-xs-12 why-text">
                            <h3>{% t what-is-monero.confidential %}</h3>
                            <p>{% t what-is-monero.confidential_para1 %}</p>
                            <p>{% t what-is-monero.confidential_para2 %}</p>
                        </div>
                    </div>
                    <div class="row middle-xs info-block-row">
                        <div class="col-lg-7 col-md-6 col-sm-8 col-xs-12 why-text">
                            <h3>{% t what-is-monero.grassroots %}</h3>
                            <p>{% t what-is-monero.grassroots_para1 %} <a href="https://www.openhub.net/p/monero" target="_blank" rel="noreferrer noopener">{% t what-is-monero.grassroots_para2 %}</a> {% t what-is-monero.grassroots_para3 %}</p>
                            <p>{% t what-is-monero.grassroots_para4 %}</p>
                        </div>
                        <div class="col-lg-5 col-md-6 col-sm-4 col-xs-12 last-sm first-xs center-xs">
                            <img src="/img/academic-growth.png" alt="Academic growth" class="main-icon">
                        </div>
                    </div>
                    <div class="row middle-xs info-block-row">
                        <div class="col-lg-5 col-md-6 col-sm-4 col-xs-12 center-xs">
                            <img src="/img/monero-electronic-cash.png" alt="Electronic cash" class="main-icon">
                        </div>
                        <div class="col-lg-7 col-md-6 col-sm-8 col-xs-12 why-text">
                            <h3>{% t what-is-monero.electronic %}</h3>
                            <p>{% t what-is-monero.electronic_para1 %}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="full col-xs-12 monero-vid">
                <div class="info-block">
                    <div class="row center-xs">
                        <div class="col"><h2>{% t what-is-monero.videos %}</h2></div>
                    </div>
                    <div class="row center-xs">
                        <div class="col-xs-12 carousel-container">
                            <ul class="carousel my-carousel">
                                <input class="carousel-activator" type="radio" id="A" name="activator" checked="checked"/>
                                <input class="carousel-activator" type="radio" id="B" name="activator"/>
                                <input class="carousel-activator" type="radio" id="C" name="activator"/>
                                <input class="carousel-activator" type="radio" id="D" name="activator"/>
                                <div class="carousel-controls">
                                    <label class="carousel-control carousel-control-backward" for="D"></label>
                                    <label class="carousel-control carousel-control-forward" for="B"></label>
                                </div>
                                <div class="carousel-controls">
                                    <label class="carousel-control carousel-control-backward" for="A"></label>
                                    <label class="carousel-control carousel-control-forward" for="C"></label>
                                </div>
                                <div class="carousel-controls">
                                    <label class="carousel-control carousel-control-backward" for="B"></label>
                                    <label class="carousel-control carousel-control-forward" for="D"></label>
                                </div>
                                <div class="carousel-controls">
                                    <label class="carousel-control carousel-control-backward" for="C"></label>
                                    <label class="carousel-control carousel-control-forward" for="A"></label>
                                </div>
                                <li class="carousel-slide ms">
                                    <h3>Monero Promo</h3>
                                    <video controls poster="/img/monero-community.png" onclick="this.paused ? this.play() : this.pause();" preload="none">
                                        <source src="/media/Monero_Promo.m4v">
                                    </video>
                                </li>
                                <li class="carousel-slide">
                                    <h3>Monero: The Essentials</h3>
                                    <video controls poster="/img/monero-cash-video-poster.png" onclick="this.paused ? this.play() : this.pause();" preload="none">
                                        <source src="/media/Monero%20-%20The%20Essentials.m4v">
                                    </video>
                                </li>
                                <li class="carousel-slide">
                                    <h3>Stealth Addresses</h3>
                                    <video controls poster="/img/stealth-address-poster.png" onclick="this.paused ? this.play() : this.pause();" preload="none">
                                        <source src="/media/Monero%20-%20Stealth%20Addresses.m4v">
                                    </video>
                                </li>
                                <li class="carousel-slide">
                                    <h3>Ring Signatures</h3>
                                    <video controls poster="/img/ring-signatures-poster.png" onclick="this.paused ? this.play() : this.pause();" preload="none">
                                        <source src="/media/Monero%20-%20Ring%20Signatures.m4v">
                                    </video>
                                </li>
                                <li class="carousel-slide">
                                    <h3>RingCT</h3>
                                    <video controls poster="/img/ringct-poster.png" onclick="this.paused ? this.play() : this.pause();" preload="none">
                                        <source src="/media/Monero%20-%20RingCT.m4v">
                                    </video>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</div>
