---
layout: root
---

<!-- Top Boxes -->
      <div class="row info-boxes">
        <div class="col-md-5 monero-info">
            <img src="//static.monero.cc/images/icon_monero.png" class="inline-icon"><h2>{% t index.what_is %} <span class="kicks">{% t global.monero %}</span> ?</h2>
            <p><span class="kicks text-important">{% t index.what_is_orange_block %}</span> <br>
              {% t index.what_is_text_block_1 %}</p>
            <p>{% t index.what_is_text_block_2 %} <a href="/{{ site.lang }}/getting-started/">{% t global.getting_started %}</a> {% t index.what_is_text_block_4 %}<br/>
            </p>  
        </div>
        <div class="col-md-1 info-spacer">
        </div>
        <div class="col-md-6 monero-news">
            <img src="//static.monero.cc/images/icon_news.png" class="inline-icon"><h2>{% t index.the_latest %} <span class="announcements">{% t index.news %}</span></h2>
            <ul>
              <li>
                  <a href="https://bitcointalk.org/index.php?topic=583449.msg7708137#msg7708137">[{% t index.date_1 %} - <span class="news-title">{% t index.news_1 %}</span>]</a><br>
                  {% t index.news_text_1 %}
              </li>
              <li>
                  <a href="https://bitcointalk.org/index.php?topic=583449.msg7542304#msg7542304">[{% t index.date_2 %} - <span class="news-title">{% t index.news_2 %}</span>]</a><br>
                  {% t index.news_text_2 %}
              </li>
            </ul>
        </div>
      </div>
      <!-- / Top Boxes -->

      <!-- Green Box -->
      <div class="row box-green">
        <div class="col-md-4 right-border inside">
            <img src="//static.monero.cc/images/icon_private.png" class="green-icon"><h2>{% t index.private %}</h2>
            <p>{% t index.private_text %}</p>
        </div>
        <div class="col-md-4 inside">
            <img src="//static.monero.cc/images/icon_secure.png" class="green-icon"><h2>{% t index.secure %}</h2>
            <p>{% t index.secure_text %}</p>
        </div>
        <div class="col-md-4 left-border inside">
            <img src="//static.monero.cc/images/icon_untracable.png" class="green-icon"><h2>{% t index.untraceable %}</h2>
            <p>{% t index.untraceable_text %}</p>
        </div>
      </div>
      <!-- / Green Box -->

      <hr class="push-top">
      <div class="row bottom-boxes">
        <div class="col-md-6">
          <img src="//static.monero.cc/images/icon_start.png" class="icon inline">
          <h2 class="inline">
            {% t index.how_do_i %}<br><span class="green-kicks">{% t index.get_started %}</span> ?
          </h2>
          <p>{% t index.get_started_1 %}<a href="https://mymonero.com">{% t index.mymonero %}</a>{% t index.get_started_2 %}</p>
          <p>{% t index.get_started_3 %}</p>
        </div>
        <div class="col-md-6">
          <div class="left-pad">
            <img src="//static.monero.cc/images/icon_download.png" class="icon inline"><h2 class="no-margin hide-breaks inline">{% t index.where_can_i %} <span class="kicks">{% t index.download %}</span> {% t global.monero %} ?</h2>
          </div>

          <div class="left-pad download-links-container">
            {% include download.php %}
          </div>
          <div class="col-lg-12 left-pad other-links">
              {% t index.different_os %}<br><a href="/{{ site.lang }}/downloads">{% t index.all_downloads %}</a>
          </div>
        </div>
      </div>