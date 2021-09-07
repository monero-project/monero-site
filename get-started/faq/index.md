---
layout: custom
title: titles.faq
permalink: /get-started/faq/index.html
---
{% t global.lang_tag %}
<div class="container description">
    <p>{% t faq.intro %}</p>
</div>
<section class="container">
    <div class="row faq">
        <!-- left two-thirds block-->
        <div class="left two-thirds col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div class="info-block">
                <div class="row center-xs">
                    <div class="col">
                        <h2>{% t faq.toc %}</h2>
                    </div>
                </div>
                <ul>
                    <li class="category">{% t faq.general %}</li>
                    <ul class="logo">
                        <li><a href="#anchor-word">{% t faq.qword %}</a></li>
                        <li><a href="#anchor-contribute">{% t faq.qcontribute %}</a></li>
                        <li><a href="#anchor-value">{% t faq.q1 %}</a></li>
                        <li><a href="#anchor-buy">{% t faq.q2 %}</a></li>
                        <li><a href="#anchor-different">{% t faq.q4 %}</a></li>
                        <li><a href="#anchor-btc-difference">{% t faq.q7 %}</a></li>
                        <li><a href="#asic-resistance">{% t faq.qasicresistance %}</a></li>
                        <li><a href="#anchor-fungibility">{% t faq.q11 %}</a></li>
                        <li><a href="#anchor-magic">{% t faq.q13 %}</a></li>
                        <li><a href="#anchor-anonymous">{% t faq.q14 %}</a></li>
                        <li><a href="#vulnerabilities">{% t faq.qvuln %}</a></li>
                        <li><a href="#antivirus">{% t faq.qantivirus %}</a></li>
                        <li><a href="#monero-meaning">{% t faq.qmoneromeaning %}</a></li>
                        <li><a href="#hardforks">{% t faq.qhf %}</a></li>
                        <li><a href="#videos">{% t faq.qvideos %}</a></li>
                    </ul>
                    <li class="category">{% t faq.advanced %}</li>
                    <ul class="logo">
                        <li><a href="#anchor-thin-air">{% t faq.q12 %}</a></li>
                        <li><a href="#anchor-light-normal">{% t faq.q6 %}</a></li>
                        <li><a href="#anchor-block-limit">{% t faq.q8 %}</a></li>
                        <li><a href="#anchor-mixing">{% t faq.q15 %}</a></li>
                        <li><a href="#import-blockchain">{% t faq.qimporting %}</a></li>
                        <li><a href="#max-supply">{% t faq.qmaxsupply %}</a></li>
                    </ul>
                    <li class="category">{% t faq.nodeandwallet %}</li>
                    <ul class="logo">
                        <li><a href="#anchor-wallet">{% t faq.qwallet %}</a></li>
                        <li><a href="#anchor-lost-funds">{% t faq.qnofunds %}</a></li>
                        <li><a href="#long-time-move">{% t faq.qlongtimemove %}</a></li>
                        <li><a href="#anchor-tor-node">{% t faq.qnodetor %}</a></li>
                        <li><a href="#anchor-long-sync">{% t faq.q5 %}</a></li>
                        <li><a href="#anchor-full-pruned">{% t faq.qfullpruned %}</a></li>
                        <li><a href="#anchor-block-size">{% t faq.qblocksize %}</a></li>
                        <li><a href="#anchor-block-space">{% t faq.qblockspace %}</a></li>
                        <li><a href="#anchor-avoid-bc">{% t faq.qavoidbc %}</a></li>
                        <li><a href="#anchor-scanned-wallet">{% t faq.qscanned %}</a></li>
                        <li><a href="#anchor-danger-node">{% t faq.qdangernode %}</a></li>
                        <li><a href="#anchor-danger-rnode">{% t faq.qdangerrnode %}</a></li>
                    </ul>
                </ul>
            </div>
        </div>
        <!-- END left two-thirds block-->
        <!-- Right one-third block -->
        <div class="right one-third col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="info-block">
                <div class="row center-xs">
                    <div class="col">
                        <h2>{% t faq.resandhelp %}</h2>
                    </div>
                </div>
                <h3><a href="{{ site.baseurl }}/resources/user-guides/">{% t titles.userguides %}</a></h3>
                    <p>{% t faq.userguides %}</p>
                <h3><a href="{{ site.baseurl }}/resources/developer-guides/">{% t titles.developerguides %}</a></h3>
                    <p>{% t faq.devguides %}</p>
                <h3><a href="https://monero.stackexchange.com/">StackExchange</a></h3>
                    <p>{% t faq.stackexchange %}</p>
                <h3><a href="https://www.reddit.com/r/monerosupport/">r/monerosupport</a></h3>
                    <p>{% t faq.monerosupport %}</p>
                <h3><a href="https://www.monero.how/">Monero.how</a></h3>
                    <p>{% t faq.monerohow %}</p>
            </div>
        </div>
    </div>
        <!-- END Right one-third block -->
</section>
<section class="container">
    <div class="row faq">      
        <!-- full block-->
        <div class="full col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="info-block">
                <div class="row center-xs">
                    <!-- 'General' section-->
                    <div class="col"><h2>{% t faq.general %}</h2></div>
                </div>
                <div class="tab" id="anchor-word">
                    <h3><a class="anchor" href="#anchor-word"></a>{% t faq.qword %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.aword %} <a href="{{ site.baseurl }}/resources/moneropedia/">Moneropedia</a>. {% t faq.aword1 %}
                        </p>
                    </div>
                </div>
                <div class="tab" id="anchor-contribute">
                    <h3><a class="anchor" href="#anchor-contribute"></a>{% t faq.qcontribute %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.acontribute %}</p>
                        <p>{% t faq.acontribute1 %} <a href="https://translate.getmonero.org">Weblate</a>.</p>
                        <p>{% t faq.acontribute2 %} <a href="{{ site.baseurl }}/community/hangouts/">Hangouts</a>.</p>
                        <p>{% t faq.acontribute3 %}</p>
                        <p>{% t faq.acontribute4 %} <a href="https://www.monerooutreach.org/stories/getting-started-helping-monero.html">Getting started with Monero</a>.</p>
                        <p>{% t faq.additional %} <a href="{{ site.baseurl }}/get-started/accepting/">{% t titles.contributing %}</a></p>
                    </div>
                </div>
                <div class="tab" id="anchor-value">
                    <h3><a class="anchor" href="#anchor-value"></a>{% t faq.q1 %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.a1 %}</p>
                    </div>
                </div>
                <div class="tab" id="anchor-buy">
                    <h3><a class="anchor" href="#anchor-buy"></a>{% t faq.q2 %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.a2 %}</p>
                        <p>{% t faq.a2exchanges %} <a href="{{ site.baseurl }}/community/merchants/#exchanges">{% t titles.merchants %}</a>.</p>
                        <p>{% t faq.additional %} <a href="https://www.monerooutreach.org/how-to-buy-monero.html">How to Buy Monero (Monero Outreach)</a></p>
                    </div>
                </div>
                <div class="tab" id="anchor-different">
                    <h3><a class="anchor" href="#anchor-different"></a>{% t faq.q4 %}</h3>
                    <div class="tab-answer" id="anchor-different">
                        <p>{% t faq.a4 %}</p>
                        <p>{% t faq.additional %} <a href="{{ site.baseurl }}/resources/about/">{% t titles.about %}</a></p>
                    </div>
                </div>
                <div class="tab" id="anchor-btc-difference">
                    <h3><a class="anchor" href="#anchor-btc-difference"></a>{% t faq.q7 %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.a7 %}</p>
                    </div>
                </div>
                <div class="tab" id="asic-resistance">
                    <h3><a class="anchor" href="#asic-resistance"></a>{% t faq.qasicresistance %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.aasicresistance %}</p>
                        <p>{% t faq.aasicresistance1 %}</p>
                        <p>{% t faq.aasicresistance2 %}</p>
                    </div>
                </div>
                <div class="tab" id="anchor-fungibility">
                    <h3><a class="anchor" href="#anchor-fungibility"></a>{% t faq.q11 %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.a11 %}</p>
                    </div>
                </div>
                <div class="tab" id="anchor-magic">
                    <h3><a class="anchor" href="#anchor-magic"></a>{% t faq.q13 %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.a13 %}</p>
                    </div>
                </div>
                <div class="tab" id="anchor-anonymous">
                    <h3><a class="anchor" href="#anchor-anonymous"></a>{% t faq.q14 %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.a14 %}</p>
                    </div>
                </div>
                <div class="tab" id="vulnerabilities">
                    <h3><a class="anchor" href="#vulnerabilities"></a>{% t faq.qvuln %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.avuln %}</p>
                        <p>{% t faq.additional %} <a href="https://open.spotify.com/episode/77xsCeuy02Aztv0bgs3Drt?si=hyIGHD5TQjyV44b46fkhoQ&dl_branch=1">{% t faq.vulnspotify %}</a></p>
                    </div>
                </div>
                <div class="tab" id="antivirus">
                    <h3><a class="anchor" href="#antivirus"></a>{% t faq.qantivirus %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.aantivirus %}</p>
                        <p>{% t faq.aantivirus1 %}</p>
                        <p>{% t faq.additional %} <a href="{{ site.baseurl }}/resources/user-guides/verification-windows-beginner.html">{% t user-guides.verify-windows %}</a>, <a href="{{ site.baseurl }}/resources/user-guides/verification-allos-advanced.html">{% t user-guides.verify-allos %}</a></p>
                    </div>
                </div>
                <div class="tab" id="monero-meaning">
                    <h3><a class="anchor" href="#monero-meaning"></a>{% t faq.qmoneromeaning %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.amoneromeaning %}</p>
                    </div>
                </div>
                <div class="tab" id="hardforks">
                    <h3><a class="anchor" href="#monero-meaning"></a>{% t faq.qhf %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.ahf %}</p>
                        <p>{% t faq.ahf1 %}</p>
                        <p>{% t faq.additional %} <a href="{{ site.baseurl_root }}/2020/09/01/note-scheduled-upgrades.html">A note on scheduled protocol upgrades</a></p>
                    </div>
                </div>
                <div class="tab" id="videos">
                    <h3><a class="anchor" href="#videos"></a>{% t faq.qvideos %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.avideos %}</p>
                        <ol>
                            <li><a href="{{ site.baseurl_root }}/media/Monero_Promo.m4v">{% t faq.video_intro %}</a> ({% t faq.aavailable %} <a href="{{ site.baseurl_root }}/media/ru/Monero_Promo.m4v">Russian</a> {% t faq.and %} <a href="{{ site.baseurl_root }}/media/pt-br/Monero_Promo.m4v">Brazilian Portuguese</a>)</li>
                            <li><a href="{{ site.baseurl_root }}/media/Monero%20-%20The%20Essentials.m4v">{% t faq.video_essentials %}</a></li>
                            <li><a href="{{ site.baseurl_root }}/media/Monero%20-%20Stealth%20Addresses.m4v">{% t faq.video_sa %}</a> - {% t faq.mvideos %} @Stealth-Addresses</li>
                            <li><a href="{{ site.baseurl_root }}/media/Monero%20-%20Ring%20Signatures.m4v">{% t faq.video_ringsig %}</a> - {% t faq.mvideos %} @Ring-Signatures</li>
                            <li><a href="{{ site.baseurl_root }}/media/Monero%20-%20RingCT.m4v">{% t faq.video_ringct %}</a> - {% t faq.mvideos %} @RingCT</li>
                        </ol>
                    </div>
                </div>
                <div class="row center-xs">
                    <!-- 'Advanced' section-->
                    <div class="col"><h2>{% t faq.advanced %}</h2></div>
                </div>
                <div class="tab" id="anchor-thin-air">
                    <h3><a class="anchor" href="#anchor-thin-air"></a>{% t faq.q12 %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.a12-1 %}</p>
                        <p>{% t faq.a12-2 %}</p>
                        <p>{% t faq.a12-3 %}</p>
                        <p>{% t faq.additional %} <a href="{{ site.baseurl_root }}/2020/01/17/auditability.html">About supply auditability</a></p>
                    </div>
                </div>
                <div class="tab" id="anchor-light-normal">
                    <h3><a class="anchor" href="#anchor-light-normal"></a>{% t faq.q6 %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.a6 %}</p>
                    </div>
                </div>
                <div class="tab" id="anchor-block-limit">
                    <h3><a class="anchor" href="#anchor-block-limit"></a>{% t faq.q8 %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.a8 %}</p>
                    </div>
                </div>
                <div class="tab" id="anchor-mixing">
                    <h3><a class="anchor" href="#anchor-mixing"></a>{% t faq.q15 %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.a15 %}</p>
                    </div>
                </div>
                <div class="tab" id="import-blockchain">
                    <h3><a class="anchor" href="#import-blockchain"></a>{% t faq.qimporting %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.aimporting %}</p>
                         <p>{% t faq.additional %} <a href="{{ site.baseurl }}/downloads/#blockchain">{% t downloads.blockchain %}</a></p>
                    </div>
                </div>
                <div class="tab" id="max-supply">
                    <h3><a class="anchor" href="#max-supply"></a>{% t faq.qmaxsupply %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.amaxsupply %}</p>
                    </div>
                </div>
                <div class="row center-xs">
                    <!-- 'Node and Wallet' section-->
                    <div class="col"><h2>{% t faq.nodeandwallet %}</h2></div>
                </div>
                <div class="tab" id="anchor-wallet">
                    <h3><a class="anchor" href="#anchor-wallet"></a>{% t faq.qwallet %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.awallet %}</p>
                        <p>{% t faq.additional %} <a href="{{ site.baseurl }}/downloads">{% t titles.downloads %}</a></p>
                    </div>
                </div>
                <div class="tab" id="anchor-lost-funds">
                    <h3><a class="anchor" href="#anchor-lost-funds"></a>{% t faq.qnofunds %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.anofunds %}</p>
                    </div>
                </div>
                <div class="tab" id="long-time-move">
                    <h3><a class="anchor" href="#long-time-move"></a>{% t faq.qlongtimemove %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.alongtimemove %}</p>
                    </div>
                </div>
                <div class="tab" id="anchor-tor-node">
                    <h3><a class="anchor" href="#anchor-tor-node"></a>{% t faq.qnodetor %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.anodetor %}</p>
                        <p>{% t faq.additional %} <a href="{{ site.baseurl }}/resources/user-guides/tor_wallet.html">{% t user-guides.tor_wallet %}</a></p>
                    </div>
                </div>
                <div class="tab" id="anchor-long-sync">
                    <h3><a class="anchor" href="#anchor-long-sync"></a>{% t faq.q5 %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.a5 %}</p>
                    </div>
                </div>
                <div class="tab" id="anchor-full-pruned">
                    <h3><a class="anchor" href="#anchor-full-pruned"></a>{% t faq.qfullpruned %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.afullpruned %}</p>
                    </div>
                </div>
                <div class="tab" id="anchor-block-size">
                    <h3><a class="anchor" href="#anchor-block-size"></a>{% t faq.qblocksize %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.ablocksize %}</p>
                    </div>
                </div>
                <div class="tab" id="anchor-block-space">
                    <h3><a class="anchor" href="#anchor-block-space"></a>{% t faq.qblockspace %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.ablockspace %}</p>
                    </div>
                </div>
                <div class="tab" id="anchor-avoid-bc">
                    <h3><a class="anchor" href="#anchor-avoid-bc"></a>{% t faq.qavoidbc %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.aavoidbc %}</p>
                        <p>{% t faq.additional %} <a href="{{ site.baseurl }}/resources/user-guides/remote_node_gui.html">{% t user-guides.remote-node-gui %}</a></p>
                    </div>
                </div>
                <div class="tab" id="anchor-scanned-wallet">
                    <h3><a class="anchor" href="#anchor-scanned-wallet"></a>{% t faq.qscanned %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.ascanned %}</p>
                    </div>
                </div>
                <div class="tab" id="anchor-danger-node">
                    <h3><a class="anchor" href="#anchor-danger-node"></a>{% t faq.qdangernode %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.adangernode %}</p>
                    </div>
                </div>
                <div class="tab" id="anchor-danger-rnode">
                    <h3><a class="anchor" href="#anchor-danger-rnode"></a>{% t faq.qdangerrnode %}</h3>
                    <div class="tab-answer">
                        <p>{% t faq.adangerrnode %}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- END full block-->
        <a aria-label="{% t accessibility.arrowup %}" href="#" class="arrow-up"><i></i></a>
    </div>
</section>
