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
                <a class="ext-noicon" href="https://twitter.com/monero" target="_blank" rel="noreferrer noopener" aria-label="Twitter logo"><div class="social-icon twitter"></div></a>
            </li>
            <li>
                <a class="ext-noicon" href="https://reddit.com/r/Monero" target="_blank" rel="noreferrer noopener" aria-label="Reddit logo"><div class="social-icon reddit"></div></a>
            </li>
            <li>
                <a class="ext-noicon" href="https://www.facebook.com/monerocurrency/" target="_blank" rel="noreferrer noopener" aria-label="Facebook logo"><div class="social-icon facebook"></div></a>
            </li>
            <li>
                <a class="ext-noicon" href="https://github.com/monero-project" target="_blank" rel="noreferrer noopener" aria-label="GitHub logo"><div class="social-icon github"></div></a>
            </li>
            <li>
                <a class="ext-noicon" href="https://repo.getmonero.org/users/monero-project/projects" target="_blank" rel="noreferrer noopener" aria-label="Gitlab logo"><div class="social-icon gitlab"></div></a>
            </li>
            <li>
                <a class="ext-noicon" href="https://telegram.me/monero" target="_blank" rel="noreferrer noopener" aria-label="Telegram logo"><div class="social-icon telegram"></div></a>
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
                            <div class="row around-xs">
                                <div class="center-xs">
                                    <p>{% t hangouts.resources_para %} {% t hangouts.resources_para1 %}</p>
                                </div>
                                <div class="col">
                                    <p><a href="https://translate.getmonero.org/" class="btn-link btn-fixed">Weblate</a></p>
                                </div>
                                <div class="col">
                                    <p><a href="https://matrix.to/#/#monero:monero.social" class="btn-link btn-fixed">Matrix</a></p>
                                </div>
                                <div class="col">
                                    <p><a href="https://taiga.getmonero.org/" class="btn-link btn-fixed">Taiga</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end left two-thirds block-->
                <!-- right one-third block-->
               <div class="right one-third col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div class="info-block center-xs">
                          <h2>{% t hangouts.mailing_list %}</h2>
                            <p>{% t hangouts.mailing_list1 %}</p>
                            <p><a class="btn-link btn-auto btn-primary" href="https://lists.getmonero.org/postorius/lists/monero-announce.lists.getmonero.org/">{% t hangouts.subscribe %}</a></p>
                        </div>
               </div>
               <!-- end right one-third block-->
           </div>
           <div class="info-block">
             <div class="raw">
               <div class="col">
                 <h2>{% t hangouts.irc %}</h2>
              </div>
              <div class="row start-xs">
                <p>{% t hangouts.irc_para %} {% t hangouts.bridges %}</p>
             </div>
             <div class="row irc">
             {% for channel in site.translations[site.lang].hangouts.irc_channels %}
               <div class="col-md-4 col-xs-12">
                 <a href="irc://irc.libera.chat/#{{ channel[0] }}">#{{ channel[0] }}</a> 
                 {% for rooms_list in site.data.chats.chats %}
                   {% for room in rooms_list %}
                     {% if room[0] == channel[0] %}
                       {% if rooms_list.matrix %}
                         <a class="chats-img" href="{{ rooms_list.matrix }}"><img class="matrix" src="/img/matrix-logo.svg" title="Matrix" alt="Matrix logo"></a>
                       {% endif %}
                     {% endif %}
                   {% endfor %}
                 {% endfor %}
                <p>{% t hangouts.irc_channels.{{ channel[0] }} %}</p>
              </div>
             {% endfor %}
             </div>
             </div>
           </div>
        </section>
</div>
