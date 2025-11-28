---
layout: custom
title: titles.hangouts
permalink: /community/hangouts/index.html
meta_descr: hangouts.intro
---

{% t global.lang_tag %}
<div class="text-center container description">
    <p class="hangouts-social">{% t hangouts.intro %}</p>
    <section class="hangouts-social container">   
        <ul class="row center-xs">
            <li>
                <a class="ext-noicon" href="https://x.com/monero" target="_blank" rel="noreferrer noopener" aria-label="Twitter logo"><div class="social-icon twitter"></div></a>
            </li>
            <li>
                <a class="ext-noicon" href="https://reddit.com/r/Monero" target="_blank" rel="noreferrer noopener" aria-label="Reddit logo"><div class="social-icon reddit"></div></a>
            </li>
            <li>
                <a class="ext-noicon" href="https://www.facebook.com/monerocurrency/" target="_blank" rel="noreferrer noopener" aria-label="Facebook logo"><div class="social-icon facebook"></div></a>
            </li>
            <li>
                <a class="ext-noicon" href="https://telegram.me/monero" target="_blank" rel="noreferrer noopener" aria-label="Telegram logo"><div class="social-icon telegram"></div></a>
            </li>
            <li>
                <a class="ext-noicon" href="https://discord.gg/SyGUMWBqvF" target="_blank" rel="noreferrer noopener" aria-label="Discord logo"><div class="social-icon discord"></div></a>
            </li>
        </ul>
    </section>
</div>

<div class="hangouts">
    <section class="container">
          <div class="row">
                <!-- left two-thirds block-->
               <div class="left one-third col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="col-xs-12 info-block">
                            <div class="row center-xs">
                                <div class="col">
                                    <h2>{% t hangouts.resources %}</h2>
                                </div>
                            </div>
                            <div class="row around-xs">
                                <div class="center-xs">
                                    <p>{% t hangouts.resources_para %}</p>
                                </div>
                                <div class="col">
                                    <p><a href="/community/workgroups/" class="btn-link btn-fixed">Workgroups</a></p>
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
                 <h2>{% t hangouts.irc-matrix %}</h2>
              </div>
              <div class="row start-xs">
                <p>{% t hangouts.irc_para %} {% t hangouts.bridges %}</p>
                <p> {% t hangouts.matrixspace %}</p>
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
             <div class="row end-xs">
              <p>{% t hangouts.tutorial %}</p>
             </div>
             </div>
           </div>
        </section>
</div>
