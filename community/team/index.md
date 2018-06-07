---
layout: custom
title: titles.team
permalink: /community/team/index.html
---
<div class="team">
    <section class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="tabPanel-widget tabPanel-header5">
                    <label for="tab-1" tabindex="0"></label>
                    <input id="tab-1" type="radio" name="tabs" aria-hidden="true" checked>
                    <h2>{% t team.core %}</h2>
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
                                                        <a href="{{member.github}}" target="_blank" rel="noreferrer, noopener">
                                                            <div class="col social-icon github"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.twitter %}
                                                        <a href="{{member.twitter}}" target="_blank" rel="noreferrer, noopener">
                                                            <div class="col social-icon twitter"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.reddit %}
                                                        <a href="{{member.reddit}}" target="_blank" rel="noreferrer, noopener">
                                                            <div class="col social-icon reddit"></div>
                                                        </a>
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
                    <h2>{% t team.developers %}</h2>
                    <div class="tabPanel-content">
                        <div class="container full">
                            <div class="info-block text-adapt">
                                <div class="row">
                                    <div class="col-xs-12 text-adapt">
                                        <p>{% t team.developers_para1 %} <a href="https://www.openhub.net/p/monero/contributors">{% t team.developers_para2 %}</a> {% t team.developers_para3 %}</p>
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
                                                        <a href="{{member.github}}" target="_blank" rel="noreferrer, noopener">
                                                            <div class="col social-icon github"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.twitter %}
                                                        <a href="{{member.twitter}}" target="_blank" rel="noreferrer, noopener">
                                                            <div class="col social-icon twitter"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.reddit %}
                                                        <a href="{{member.reddit}}" target="_blank" rel="noreferrer, noopener">
                                                            <div class="col social-icon reddit"></div>
                                                        </a>
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
                    <h2>{% t team.community %}</h2>
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
                                                        <a href="{{member.github}}" target="_blank" rel="noreferrer, noopener">
                                                            <div class="col social-icon github"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.twitter %}
                                                        <a href="{{member.twitter}}" target="_blank" rel="noreferrer, noopener">
                                                            <div class="col social-icon twitter"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.reddit %}
                                                        <a href="{{member.reddit}}" target="_blank" rel="noreferrer, noopener">
                                                            <div class="col social-icon reddit"></div>
                                                        </a>
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
                    <h2>{% t team.mrl %}</h2>
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
                                                        <a href="{{member.github}}" target="_blank" rel="noreferrer, noopener">
                                                            <div class="col social-icon github"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.twitter %}
                                                        <a href="{{member.twitter}}" target="_blank" rel="noreferrer, noopener">
                                                            <div class="col social-icon twitter"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.reddit %}
                                                        <a href="{{member.reddit}}" target="_blank" rel="noreferrer, noopener">
                                                            <div class="col social-icon reddit"></div>
                                                        </a>
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
                    <h2>{% t team.thanks %}</h2>
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
                                                        <a href="{{member.github}}" target="_blank" rel="noreferrer, noopener">
                                                            <div class="col social-icon github"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.twitter %}
                                                        <a href="{{member.twitter}}" target="_blank" rel="noreferrer, noopener">
                                                            <div class="col social-icon twitter"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.reddit %}
                                                        <a href="{{member.reddit}}" target="_blank" rel="noreferrer, noopener">
                                                            <div class="col social-icon reddit"></div>
                                                        </a>
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

<div class="untranslated {% t team.translated %}">
    <p>{% t global.untranslated %} <a class="untranslated-link" href="https://github.com/monero-project/monero-site/blob/master/README.md">README</a>.</p>
</div>
