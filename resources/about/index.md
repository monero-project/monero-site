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
    </section>
</div>

<div class="untranslated {% t about.translated %}">
    <p>{% t global.untranslated %} <a class="untranslated-link" href="https://repo.getmonero.org/monero-project/monero-site/blob/master/README.md#140-how-to-translate-a-page">README</a>.</p>
</div>