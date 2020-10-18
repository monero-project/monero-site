---
layout: custom
title: titles.team
permalink: /community/team/index.html
---
{% t global.lang_tag %}
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
                                                        <a class="ext-noicon" href="{{member.github}}" target="_blank" rel="noreferrer, noopener" aria-label="GitHub logo">
                                                            <div class="col social-icon github"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.twitter %}
                                                        <a class="ext-noicon" href="{{member.twitter}}" target="_blank" rel="noreferrer, noopener" aria-label="Twitter logo">
                                                            <div class="col social-icon twitter"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.reddit %}
                                                        <a class="ext-noicon" href="{{member.reddit}}" target="_blank" rel="noreferrer, noopener" aria-label="Reddit logo">
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
                            <div class="info-block">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <p class="nopad">{% t team.developers_para1 %} <a href="https://www.openhub.net/p/monero/contributors">{% t team.developers_para2 %}</a> {% t team.developers_para3 %}</p>
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
                                                        <a class="ext-noicon" href="{{member.github}}" target="_blank" rel="noreferrer, noopener" aria-label="GitHub logo">
                                                            <div class="col social-icon github"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.twitter %}
                                                        <a class="ext-noicon" href="{{member.twitter}}" target="_blank" rel="noreferrer, noopener" aria-label="Twitter logo">
                                                            <div class="col social-icon twitter"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.reddit %}
                                                        <a class="ext-noicon" href="{{member.reddit}}" target="_blank" rel="noreferrer, noopener" aria-label="Reddit logo">
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
                                                        <a class="ext-noicon" href="{{member.github}}" target="_blank" rel="noreferrer, noopener" aria-label="GitHub logo">
                                                            <div class="col social-icon github"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.twitter %}
                                                        <a class="ext-noicon" href="{{member.twitter}}" target="_blank" rel="noreferrer, noopener" aria-label="Twitter logo">
                                                            <div class="col social-icon twitter"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.reddit %}
                                                        <a class="ext-noicon" href="{{member.reddit}}" target="_blank" rel="noreferrer, noopener" aria-label="Reddit logo">
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
                                                    {% if member.email and member.email1 %}
                                                      <div class="row center-xs">
                                                        <p>{{ member.email }}<br>
                                                           {{ member.email1 }}</p>
                                                      </div>
                                                    {% elsif member.email %}
                                                      <div class="row center-xs">
                                                        <p>{{ member.email }}</p>
                                                      </div>
                                                    {% endif %}
                                                <div class="row center-xs icons">
                                                    {% if member.github %}
                                                        <a class="ext-noicon" href="{{member.github}}" target="_blank" rel="noreferrer, noopener" aria-label="GitHub logo"> 
                                                            <div class="col social-icon github"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.twitter %}
                                                        <a class="ext-noicon" href="{{member.twitter}}" target="_blank" rel="noreferrer, noopener" aria-label="Twitter logo">
                                                            <div class="col social-icon twitter"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.reddit %}
                                                        <a class="ext-noicon" href="{{member.reddit}}" target="_blank" rel="noreferrer, noopener" aria-label="Reddit logo">
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
                                                        <a class="ext-noicon" href="{{member.github}}" target="_blank" rel="noreferrer, noopener" aria-label="GitHub logo">
                                                            <div class="col social-icon github"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.twitter %}
                                                        <a class="ext-noicon" href="{{member.twitter}}" target="_blank" rel="noreferrer, noopener" aria-label="Twitter logo">
                                                            <div class="col social-icon twitter"></div>
                                                        </a>
                                                    {%endif%}
                                                    {% if member.reddit %}
                                                        <a class="ext-noicon" href="{{member.reddit}}" target="_blank" rel="noreferrer, noopener" aria-label="Reddit logo">
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
