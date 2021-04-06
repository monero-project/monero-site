---
layout: custom
title: titles.moneropedia
---

<div class="container description">
    <p>{% t moneropedia.description %}</p>
</div>

{% t global.lang_tag %}
<section class="container full">
    <div class="info-block">
        <div>
            <div class="row">
                @moneropedia_index
            </div>
            <p>
                {% t moneropedia.add_new_text1 %} <a href="https://github.com/monero-project/monero-site/issues" target="_blank" rel="noreferrer noopener">{% t moneropedia.add_new_link %}</a> {% t moneropedia.add_new_text2 %}. {% t moneropedia.instructions %} <a href="https://github.com/monero-project/monero-site/#how-to-make-a-moneropedia-entry" target="_blank" rel="noreferrer noopener">README</a>
            </p>
        </div>
    </div>
</section>
