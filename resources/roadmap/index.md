---
layout: custom
title: titles.roadmap
permalink: /resources/roadmap/index.html
---
{% t global.lang_tag %}
<div class="roadmap">
    <div class="pre-roadmap container">
        <div class="row center-xs">
            <div class="col-sm-3 col-xs-4">
                <p class="pre-completed">{% t roadmap.completed %}</p>
            </div>
            <div class="col-sm-3 col-xs-4">
                <p class="pre-ongoing">{% t roadmap.ongoing %}</p>
            </div>
            <div class="col-sm-3 col-xs-4">
                <p class="pre-upcoming">{% t roadmap.upcoming %}</p>
            </div>
        </div>
    </div>
    <section class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="tabPanel-widget">
                    <label for="tab-1" tabindex="0"></label>
                    <input id="tab-1" type="radio" name="tabs" aria-hidden="true">
                    <h2>2014-2015</h2>
                    <div class="tabPanel-content">
                        <h2>2014</h2>
                            <ul>
                                {% for roadmap in site.data.lang[site.lang].roadmap.year_2014 %}
                                    <h3 id="months">{{ roadmap.month }}</h3>
                                    {% for item in roadmap.completed %}
                                        <li class="completed">{{ item.name }}</li>
                                    {% endfor %}
                                {% endfor %}
                            </ul>
                        <h2>2015</h2>
                            <ul>
                                {% for roadmap in site.data.lang[site.lang].roadmap.year_2015 %}
                                    <h3 id="months">{{ roadmap.month }}</h3>
                                    {% for item in roadmap.completed %}
                                        <li class="completed">{{ item.name }}</li>
                                    {% endfor %}
                                {% endfor %}
                            </ul>
                    </div>
                    <label for="tab-2" tabindex="0"></label>
                    <input id="tab-2" type="radio" name="tabs" aria-hidden="true">
                    <h2>2016</h2>
                    <div class="tabPanel-content">
                        <h2>2016</h2>
                            <ul>
                                {% for roadmap in site.data.lang[site.lang].roadmap.year_2016 %}
                                    <h3 id="months">{{ roadmap.month }}</h3>
                                    {% for item in roadmap.completed %}
                                        <li class="completed">{{ item.name }}</li>
                                    {% endfor %}
                                {% endfor %}
                            </ul>
                    </div>
                    <label for="tab-3" tabindex="0"></label>
                    <input id="tab-3" type="radio" name="tabs" aria-hidden="true">
                    <h2>2017</h2>
                    <div class="tabPanel-content">
                        <h2>2017</h2>
                            <ul>
                                {% for roadmap in site.data.lang[site.lang].roadmap.year_2017 %}
                                    <h3 id="months">{{ roadmap.month }}</h3>
                                    {% for item in roadmap.completed %}
                                        <li class="completed">{{ item.name }}</li>
                                    {% endfor %}
                                {% endfor %}
                            </ul>
                    </div>
                    <label for="tab-4" tabindex="0"></label>
                    <input id="tab-4" type="radio" name="tabs" aria-hidden="true">
                    <h2>2018</h2>
                    <div class="tabPanel-content">
                        <h2>2018</h2>
                            <ul>
                                {% for roadmap in site.data.lang[site.lang].roadmap.year_2018 %}
                                    <h3 id="months">{{ roadmap.month }}</h3>
                                    {% for item in roadmap.completed %}
                                        <li class="completed">{{ item.name }}</li>
                                    {% endfor %}
                                {% endfor %}
                            </ul>
                    </div>
                    <label for="tab-5" tabindex="0"></label>
                    <input id="tab-5" type="radio" name="tabs" aria-hidden="true">
                    <h2>2019</h2>
                    <div class="tabPanel-content">
                        <h2>2019</h2>
                            <ul>
                                {% for roadmap in site.data.lang[site.lang].roadmap.year_2019 %}
                                    <h3 id="months">{{ roadmap.month }}</h3>
                                    {% for item in roadmap.completed %}
                                        <li class="completed">{{ item.name }}</li>
                                    {% endfor %}
                                {% endfor %}
                            </ul>
                    </div>
                    <label for="tab-6" tabindex="0"></label>
                    <input id="tab-6" type="radio" name="tabs" aria-hidden="true" checked>
                    <h2>2020</h2>
                    <div class="tabPanel-content">
                        <h2>2020</h2>
                            <ul>
                                {% for roadmap in site.data.lang[site.lang].roadmap.year_2020 %}
                                    <h3 id="months">{{ roadmap.month }}</h3>
                                    {% for item in roadmap.completed %}
                                        <li class="completed">{{ item.name }}</li>
                                    {% endfor %}
                                    {% for item in roadmap.ongoing %}
                                        <li class="ongoing">{{ item.name }}</li>
                                    {% endfor %}
                                    {% for item in roadmap.upcoming %}
                                        <li class="upcoming">{{ item.name }}</li>
                                    {% endfor %}
                                {% endfor %}
                            </ul>
                    </div>
                    <label for="tab-7" tabindex="0"></label>
                    <input id="tab-7" type="radio" name="tabs" aria-hidden="true">
                    <h2>{% t roadmap.future %}</h2>
                    <div class="tabPanel-content">
                        <h2>{% t roadmap.future %}</h2>
                            <ul>
                                {% for roadmap in site.data.lang[site.lang].roadmap.future %}
                                    <h3 id="months">{{ roadmap.month }}</h3>
                                    {% for item in roadmap.ongoing %}
                                        <li class="ongoing">{{ item.name }}</li>
                                    {% endfor %}
                                    {% for item in roadmap.upcoming %}
                                        <li class="upcoming">{{ item.name }}</li>
                                    {% endfor %}
                                {% endfor %}
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
