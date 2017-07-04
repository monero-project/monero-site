---
layout: custom
title: Forum Funding System
---
<div class="ffs">
   <div class="desktop">
        <div class="container description" >
               <p>Monero is a decentralized community-driven project, and the Forum Funding System is a way for members to get involved and proposals to be funded. To see how it works, <a href="">click here.</a> To see how to submit your own proposal or idea, <a href="">click here.</a></p>
        </div>
        <section class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="tabPanel-widget">
                        <label for="tab-1" tabindex="0"></label>
                            <input id="tab-1" type="radio" name="tabs" aria-hidden="true" checked="true">
                                <h2>Ideas</h2>
                                <div class="tabPanel-content">           
                                    {% for toplevel in site.data.ffs %}
                                          {% if toplevel.stage == "Ideas" %}
                                            {% for proposal in toplevel.proposals limit:2 %}
                                                <h3><a href="{{proposal.url}}">{{proposal.name}}</a></h3>
                                                <p>Summary: {{proposal.summary}}</p>
                                                <p>Author: {{proposal.author}}</p>
                                            {%endfor%}
                                          {%endif%}
                                        {%endfor%}
                                        <div class="row center-xs">
                                        <p><a href="/forum-funding-system/ideas/" class="btn-link btn-fixed">See all Ideas</a></p>
                                        </div>
                                </div>
                                <label for="tab-2" tab index="0"></label>
                                <input id="tab-2" type="radio" name="tabs" aria-h idden="true">
                                    <h2>Open Tasks</h2>
                                    <div class="tabPanel-content">
                                       {% for toplevel in site.data.ffs %}
                                          {% if toplevel.stage == "Open Tasks" %}
                                            {% for proposal in toplevel.proposals limit:2 %}
                                                <h3><a href="{{proposal.url}}">{{proposal.name}}</a></h3>
                                                <p>Summary: {{proposal.summary}}</p>
                                                <p>Author: {{proposal.author}}</p>
                                            {%endfor%}
                                          {%endif%}
                                        {%endfor%}
                                        <div class="row center-xs"><p><a href="/forum-funding-system/open-tasks/" class="btn-link btn-fixed">See all Open Tasks</a></p>
                                        </div>
                                    </div>
                                    <label for="tab-3" tabindex="0"></label>
                                    <input id="tab-3" type="radio" name="tabs" aria-hidden="true">
                                    <h2>Funding Required</h2>
                                    <div class="tabPanel-content">
                                       {% for toplevel in site.data.ffs %}
                                          {% if toplevel.stage == "Funding Required" %}
                                            {% for proposal in toplevel.proposals limit:2 %}
                                                <h3><a href="{{proposal.url}}">{{proposal.name}}</a></h3>
                                                <p>Summary: {{proposal.summary}}</p>
                                                <p>Author: {{proposal.author}}</p>
                                            {%endfor%}
                                          {%endif%}
                                        {%endfor%}
                                        <div class="row center-xs">
                                        <p><a href="/forum-funding-system/funding-required/" class="btn-link btn-fixed">See all Funding Required</a></p>
                                        </div>
                                    </div>
                                    <label for="tab-4" tabindex="0"></label>
                                    <input id="tab-4" type="radio" name="tabs" aria-hidden="true">
                                    <h2>Work in Progress</h2>
                                    <div class="tabPanel-content">
                                       {% for toplevel in site.data.ffs %}
                                          {% if toplevel.stage == "Work in Progress" %}
                                            {% for proposal in toplevel.proposals limit:2 %}
                                                <h3><a href="{{proposal.url}}">{{proposal.name}}</a></h3>
                                                <p>Summary: {{proposal.summary}}</p>
                                                <p>Author: {{proposal.author}}</p>
                                            {%endfor%}
                                          {%endif%}
                                        {%endfor%}
                                        <div class="row center-xs">
                                        <p><a href="/forum-funding-system/work-in-progress/" class="btn-link btn-fixed">See all Work in Progress</a></p>
                                        </div>
                                    </div>
                                    <label for="tab-5" tabindex="0"></label>
                                    <input id="tab-5" type="radio" name="tabs" aria-hidden="true">
                                    <h2>Completed Proposals</h2>
                                    <div class="tabPanel-content">
                                       {% for toplevel in site.data.ffs %}
                                          {% if toplevel.stage == "Completed Proposals" %}
                                            {% for proposal in toplevel.proposals limit:2 %}
                                                <h3><a href="{{proposal.url}}">{{proposal.name}}</a></h3>
                                                <p>Summary: {{proposal.summary}}</p>
                                                <p>Author: {{proposal.author}}</p>
                                            {%endfor%}
                                          {%endif%}
                                        {%endfor%}
                                        <div class="row center-xs">
                                        <p><a href="/forum-funding-system/completed-proposals/" class="btn-link btn-fixed">See Completed Proposals</a></p>
                                        </div>
                                    </div>
                                  </div>
                </div>
            </div>
        </section>
    </div>
    <div class="mobile">
       <div class="container">
        <div class="row"> 
               <div class="col-md-6 col-sm-6 col-xs-6">
                  <div class="ffs-btn-wrap">
                   <a id="ffs-ideas" class="ffs-btn" href="/forum-funding-system/ideas/">Ideas
                    </a>
                  </div>
                </div>
            

            <div class="col-md-6 col-sm-6 col-xs-6">
                  <div class="ffs-btn-wrap">
                   <a id="ffs-opentasks" class="ffs-btn" href="/forum-funding-system/open-tasks/">Open Tasks</a>
                    </div>
            </div>
            
        </div>
        </div>
        <div class="container">
        <div class="row"> 
           
            <div class="col-md-6 col-sm-6 col-xs-6">
                  <div class="ffs-btn-wrap">
                  <a id="ffs-fundingrequired" class="ffs-btn" href="/forum-funding-system/funding-required/">Funding Required</a>
                    </div>
            </div>
            

            
            <div class="col-md-6 col-sm-6 col-xs-6">
                  <div class="ffs-btn-wrap">
                   <a id="ffs-workinprogress" class="ffs-btn" href="/forum-funding-system/work-in-progress/">Work in Progress</a>
                    </div>
            </div>
            
            </div>
            </div>
    <section class="container">
        <div class="row">      
            <!-- full block-->
            
            <div class="col-xs-12">
                  <div class="ffs-btn-wrap">
                   <a id="ffs-completedproposals" class="ffs-btn" href="/forum-funding-system/completed-proposals/">Completed Proposals</a>
                    </div>
            </div>
            
            <!-- end full block -->
        </div>
    </section>
    </div>
</div>