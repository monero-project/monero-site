<div class="team">

   <section class="container">
    <div class="row">
        <div class="col-xs-12">
                        <div class="tabPanel-widget">
                           <label for="tab-1" tabindex="0"></label>
                            <input id="tab-1" type="radio" name="tabs" aria-hidden="true" checked>
                            <h2>Çekirdek Kadro</h2>
                            <div class="tabPanel-content">
                              <div class="row">
                                {% for toplevel in site.data.team %}
                                  {% if toplevel.area == "Core" %}
                                    {% for member in toplevel.member %}
                                        <div class="half col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                           <div class="info-block">
                                                <div class="row center-xs">
                                                    <h3>{{member.name}}</h3>
                                                </div>
                                                <div class="row center-xs">
                                                    <p>{{member.email}}</p>
                                                </div>
                                                <div class="row center-xs icons">
                                                    {% if member.github %}
                                                    <a href="{{member.github}}" target="_blank" rel="noreferrer, noopener"><div class="col social-icon github"></div></a>
                                                    {%endif%}
                                                    {% if member.twitter %}
                                                    <a href="{{member.twitter}}" target="_blank" rel="noreferrer, noopener"><div class="col social-icon twitter"></div></a>
                                                    {%endif%}
                                                    {% if member.reddit %}
                                                    <a href="{{member.reddit}}" target="_blank" rel="noreferrer, noopener"><div class="col social-icon reddit"></div></a>
                                                    {%endif%}
                                                </div>
                                            </div>
                                        </div>
                                    {%endfor%}
                                  {%endif%}
                                {%endfor%}
                              </div>
                            </div>
                            <label for="tab-2" tabindex="0"></label>
                            <input id="tab-2" type="radio" name="tabs" aria-hidden="true">
                            <h2>Geliştiriciler</h2>
                            <div class="tabPanel-content">
                             <div class="container full">
                                   <div class="info-block text-adapt">
                                        <div class="row">
                                            <div class="col-xs-12 text-adapt">
                                                <p>Monero projesine şimdiye dek 200’den fazla kişi katkıda bulundu. Toplu bir liste için, lütfen <a href="https://www.openhub.net/p/monero/contributors">OpenHub sayfasını ziyaret ediniz</a>. Monero’ya katkıları normalin çok üstünde, fantastik insanları aşağıda görebilirsiniz.</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                              <div class="row">
                                {% for toplevel in site.data.team %}
                                  {% if toplevel.area == "Developers" %}
                                    {% for member in toplevel.member %}
                                        <div class="half col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                           <div class="info-block">
                                                <div class="row center-xs">
                                                    <h3>{{member.name}}</h3>
                                                </div>
                                                <div class="row center-xs icons">
                                                    {% if member.github %}
                                                    <a href="{{member.github}}" target="_blank" rel="noreferrer, noopener"><div class="col social-icon github"></div></a>
                                                    {%endif%}
                                                    {% if member.twitter %}
                                                    <a href="{{member.twitter}}" target="_blank" rel="noreferrer, noopener"><div class="col social-icon twitter"></div></a>
                                                    {%endif%}
                                                    {% if member.reddit %}
                                                    <a href="{{member.reddit}}" target="_blank" rel="noreferrer, noopener"><div class="col social-icon reddit"></div></a>
                                                    {%endif%}
                                                </div>
                                            </div>
                                        </div>
                                    {%endfor%}
                                  {%endif%}
                                {%endfor%}
                              </div>
                            </div>
                            <label for="tab-3" tabindex="0"></label>
                            <input id="tab-3" type="radio" name="tabs" aria-hidden="true">
                            <h2>Topluluk</h2>
                            <div class="tabPanel-content">
                              <div class="row">
                                {% for toplevel in site.data.team %}
                                  {% if toplevel.area == "Community" %}
                                    {% for member in toplevel.member %}
                                        <div class="half col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                           <div class="info-block">
                                                <div class="row center-xs">
                                                    <h3>{{member.name}}</h3>
                                                </div>
                                                <div class="row center-xs icons">
                                                    {% if member.github %}
                                                    <a href="{{member.github}}" target="_blank" rel="noreferrer, noopener"><div class="col social-icon github"></div></a>
                                                    {%endif%}
                                                    {% if member.twitter %}
                                                    <a href="{{member.twitter}}" target="_blank" rel="noreferrer, noopener"><div class="col social-icon twitter"></div></a>
                                                    {%endif%}
                                                    {% if member.reddit %}
                                                    <a href="{{member.reddit}}" target="_blank" rel="noreferrer, noopener"><div class="col social-icon reddit"></div></a>
                                                    {%endif%}
                                                </div>
                                            </div>
                                        </div>
                                    {%endfor%}
                                  {%endif%}
                                {%endfor%}
                              </div>
                            </div>
                            <label for="tab-4" tabindex="0"></label>
                            <input id="tab-4" type="radio" name="tabs" aria-hidden="true">
                            <h2>Araştırma Labı</h2>
                            <div class="tabPanel-content">
                              <div class="row">
                                {% for toplevel in site.data.team %}
                                  {% if toplevel.area == "Monero Research Lab" %}
                                    {% for member in toplevel.member %}
                                        <div class="half col-lg-6 col-md-6 col-sm-12 col-xs-6">
                                           <div class="info-block">
                                                <div class="row center-xs">
                                                    <h3>{{member.name}}</h3>
                                                </div>
                                                <div class="row center-xs icons">
                                                    {% if member.github %}
                                                    <a href="{{member.github}}" target="_blank" rel="noreferrer, noopener"><div class="col social-icon github"></div></a>
                                                    {%endif%}
                                                    {% if member.twitter %}
                                                    <a href="{{member.twitter}}" target="_blank" rel="noreferrer, noopener"><div class="col social-icon twitter"></div></a>
                                                    {%endif%}
                                                    {% if member.reddit %}
                                                    <a href="{{member.reddit}}" target="_blank" rel="noreferrer, noopener"><div class="col social-icon reddit"></div></a>
                                                    {%endif%}
                                                </div>
                                            </div>
                                        </div>
                                    {%endfor%}
                                  {%endif%}
                                {%endfor%}
                              </div>
                            </div>
                            <label for="tab-5" tabindex="0"></label>
                            <input id="tab-5" type="radio" name="tabs" aria-hidden="true">
                            <h2>Özel Teşekkür</h2>
                            <div class="tabPanel-content">
                              <div class="row">
                                {% for toplevel in site.data.team %}
                                  {% if toplevel.area == "Special Thanks" %}
                                    {% for member in toplevel.member %}
                                        <div class="half col-lg-6 col-md-6 col-sm-12 col-xs-6">
                                           <div class="info-block">
                                                <div class="row center-xs">
                                                    <h3>{{member.name}}</h3>
                                                </div>
                                                <div class="row center-xs icons">
                                                    {% if member.github %}
                                                    <a href="{{member.github}}" target="_blank" rel="noreferrer, noopener"><div class="col social-icon github"></div></a>
                                                    {%endif%}
                                                    {% if member.twitter %}
                                                    <a href="{{member.twitter}}" target="_blank" rel="noreferrer, noopener"><div class="col social-icon twitter"></div></a>
                                                    {%endif%}
                                                    {% if member.reddit %}
                                                    <a href="{{member.reddit}}" target="_blank" rel="noreferrer, noopener"><div class="col social-icon reddit"></div></a>
                                                    {%endif%}
                                                </div>
                                            </div>
                                        </div>
                                    {%endfor%}
                                  {%endif%}
                                {%endfor%}
                              </div>
                            </div>
                          </div>
        </div>
    </div>
</section>


</div>
