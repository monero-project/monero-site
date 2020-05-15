---
layout: custom
title: titles.about
permalink: /resources/about/index.html
---

{% t global.lang_tag %}
<div class="about-monero">
    <section class="container">
        <div class="row">
            <!-- left two-thirds block-->
            <div class="full col-xs-12">
                <div class="info-block text-adapt">
                    <div class="row center-xs">
                        <div class="col">
                            <h2>{% t about.history %}</h2>
                        </div>
                    </div>
                    <div>
                        <p>{% t about.history_para1 %} <a href="https://bitcointalk.org/index.php?topic=563821.0">{% t about.history_para2 %}</a> {% t about.history_para3 %}</p>
                        <p>{% t about.history_para4 %}</p>
                    </div>
                </div>
            </div>
            <!-- end right one-third block-->
        </div>
        <div class="row">
            <!-- left two-thirds block-->
            <div class="full col-xs-12">
                <div class="info-block text-adapt">
                    <div class="row center-xs">
                        <div class="col">
                            <h2>{% t about.values %}</h2>
                        </div>
                    </div>
                    <div>
                        <p>{% t about.values_para %}</p>
                        <h3>{% t about.security %}</h3>
                        <p>{% t about.security_para %}</p>
                        <h3>{% t about.privacy %}</h3>
                        <p>{% t about.privacy_para %}</p>
                        <h3>{% t about.decentralization %}</h3>
                        <p>{% t about.decentralization_para %}</p>
                    </div>
                </div>
            </div>
            <!-- end right one-third block-->
        </div>
        <div class="row">
            <!-- 'Technical info' block -->
            <div class="full col-xs-12">
                <div class="info-block text-adapt">
                    <div class="row center-xs">
                        <div class="col">
                            <h2>{% t specs.title %}</h2>
                        </div>
                    </div>
                    <div>
                        <p>{% t specs.intro %} <a href="{{ site.baseurl }}/library/">{% t specs.intro_link %}</a> {% t specs.intro1 %}.</p>
                            <h3>{% t specs.pow_title %}</h3>
                                <p>{% t specs.pow %}. <a href="https://github.com/tevador/randomx">{% t specs.pow_link %}</a>.</p>
                            <h3>{% t specs.block_emission_title %}</h3>
                                <p>{% t specs.block_emission_pre %} {% t specs.block_emission_main %}, {% t specs.block_emission_tail %} (@Tail-Emission).</p>
                            <h3>{% t specs.blocks_title %}</h3>
                                <p>{% t specs.blocks %}.</p>
                            <h3>{% t specs.privacytech_title %}</h3>
                                <ul>
                                    <li>{% t specs.privacytech_ringct %}</li>
                                    <li>{% t specs.privacytech_sh %}</li>
                                    <li>{% t specs.privacytech_rs%}</li>
                                    <li>{% t specs.privacytech_tor-i2p %}</li>
                                    <li>{% t specs.privacytech_dandelion %}</li>
                                </ul>
                    </div>
                </div>
            </div>
            <!-- End 'Technical info' block -->    
        </div>
    </section>
</div>
