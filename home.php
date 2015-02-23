---
layout: root
Title: Home
---

<!-- Top Boxes -->
      <div class="row info-boxes">
        <div class="col-md-5 monero-info">
            <!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->
            <img src="//static.getmonero.org/images/icon_monero.svg" class="inline-icon" style="height: 60px;"><h2>{% t index.what_is_1 %} <span class="kicks">{% t global.monero %}</span> {% t index.what_is_2 %}</h2>
            <p class="kicks text-important">{% t index.what_is_orange_block %}</p>
            <p>{% t index.what_is_text_block_1 %}</p>
            <p>{% t index.what_is_text_block_2 %} <a href="/{{ site.lang }}/getting-started/">{% t global.getting_started %}</a> {% t index.what_is_text_block_4 %}<br/>
            </p>  
        </div>
        <div class="col-md-1 info-spacer">
        </div>
        <div class="col-md-6 monero-news">
            <!-- Icon is based on work by Icomoon (http://www.icomoon.io) and is licensed under Creative Commons BY 3.0 -->
            <img src="//static.getmonero.org/images/icon_news.svg" class="inline-icon" style="height: 60px;"><h2>{% t index.the_latest %} <span class="announcements">{% t index.news %}</span></h2>
            <ul>
            {% for post in site.posts limit:3 %}
              <li>
                  <a href="{{ post.url }}">[{{ post.date | date: "%B %d" }} - <span class="news-title">{{ post.title }}</span>]</a><br>
                  {{ post.summary }}
              </li>
            {% endfor %}
            </ul>
        </div>
      </div>
      <!-- / Top Boxes -->

      <!-- Green Box -->
      <div class="row box-green">
        <div class="col-md-4 right-border inside">
            <!-- Icon is by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->
            <img src="//static.getmonero.org/images/icon_secure.svg" class="green-icon" style="height: 40px;"><h2>{% t index.secure %}</h2>
            <p>{% t index.secure_text %}</p>
        </div>
        <div class="col-md-4 inside">
            <!-- Icon is by Bogdan Rosu (http://www.bogdanrosu.com) and is licensed under Creative Commons BY 3.0 -->
            <img src="//static.getmonero.org/images/icon_private.svg" class="green-icon" style="height: 40px;"><h2>{% t index.private %}</h2>
            <p>{% t index.private_text %}</p>
        </div>
        <div class="col-md-4 left-border inside">
            <!-- Icon is by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->
            <img src="//static.getmonero.org/images/icon_untraceable.svg" class="green-icon" style="height: 40px;"><h2>{% t index.untraceable %}</h2>
            <p>{% t index.untraceable_text %}</p>
        </div>
      </div>
      <!-- / Green Box -->

      <hr class="push-top">
      <div class="row bottom-boxes">
        <div class="col-md-6">
          <!-- Icon is by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->
          <img src="//static.getmonero.org/images/icon_start.svg" class="icon" style="height: 60px;">
          <h2 class="inline">
            {% t index.how_do_i_1 %}<br><span class="softyellow-kicks">{% t index.get_started %}</span> {% t index.how_do_i_2 %}
          </h2>
          <p style="margin-top: 40px;">{% t index.get_started_1 %}<a href="https://mymonero.com">{% t index.mymonero %}</a>{% t index.get_started_2 %}</p>
          <p>{% t index.get_started_3 %}</p>
        </div>
        <div class="col-md-6">
          <div class="left-pad">
          <!-- Icon is by Yannick (http://yanlu.de) and is licensed under Creative Commons BY 3.0 -->
            <img src="//static.getmonero.org/images/icon_download.svg" class="icon" style="height: 60px;"><h2 class="no-margin hide-breaks inline">{% t index.where_can_i %} <span class="purple-kicks">{% t index.download_1 %}</span> {% t global.monero %} {% t index.download_2 %}</h2>
          </div>

          <div class="left-pad download-links-container">
            {% include download.php %}
          </div>
          <div class="col-lg-12 left-pad other-links">
              {% t index.different_os %}<br><a href="/downloads">{% t index.all_downloads %}</a>
          </div>
        </div>
      </div>