{% include untranslated.html %}
<div class="roadmap">
<div class="text-center pre-roadmap container">
    <div class="row">
       <div class="col-xs-4">
            <li class="completed"></li>
            <p>Completed task</p>
       </div>
       <div class="col-xs-4">
            <li class="ongoing"></li>
            <p>Ongoing task</p>
       </div>
       <div class="col-xs-4">
            <li class="upcoming"></li>
            <p>Upcoming task</p>
       </div>
    </div>
</div>
<section class="container">
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="tabPanel-widget">
                <label for="tab-1" tabindex="0"></label>
                    <input id="tab-1" type="radio" name="tabs" aria-hidden="true">
                        <h2>2014</h2>
                        <div class="tabPanel-content">              
                            {% for toplevel in site.data.lang[site.lang].roadmap %}    
                              {% if toplevel.year == 2014 %}
                                {% for roadlist in toplevel.accomplishments %}
                                  <div class="row start-xs middle-xs">
                                     <div class="col-xs-1">
                                        <span class="{{roadlist.status}}"></span>
                                     </div>
                                     <div class="col-xs-11">
                                        <p>{{roadlist.date}}: {{roadlist.name}}</p>
                                     </div>
                                  </div>
                              {%endfor%}
                              {%endif%}
                              {%endfor%}
                        </div>
                        <label for="tab-2" tabindex="0"></label>
                        <input id="tab-2" type="radio" name="tabs" aria-hidden="true">
                            <h2>2015</h2>
                            <div class="tabPanel-content">
                               {% for toplevel in site.data.lang[site.lang].roadmap %}
                              {% if toplevel.year == 2015 %}
                                {% for roadlist in toplevel.accomplishments %}
                                  <div class="row start-xs middle-xs">
                                     <div class="col-xs-1">
                                        <span class="{{roadlist.status}}"></span>
                                     </div>
                                     <div class="col-xs-11">
                                        <p>{{roadlist.date}}: {{roadlist.name}}</p>
                                     </div>
                                  </div>
                              {%endfor%}
                              {%endif%}
                              {%endfor%}
                            </div>
                            <label for="tab-3" tabindex="0"></label>
                            <input id="tab-3" type="radio" name="tabs" aria-hidden="true">
                            <h2>2016</h2>
                            <div class="tabPanel-content">
                               {% for toplevel in site.data.lang[site.lang].roadmap %}
                              {% if toplevel.year == 2016 %}
                                {% for roadlist in toplevel.accomplishments %}
                                  <div class="row start-xs middle-xs">
                                     <div class="col-xs-1">
                                        <span class="{{roadlist.status}}"></span>
                                     </div>
                                     <div class="col-xs-11">
                                        <p>{{roadlist.date}}: {{roadlist.name}}</p>
                                     </div>
                                  </div>
                              {%endfor%}
                              {%endif%}
                              {%endfor%}
                            </div>
                            <label for="tab-4" tabindex="0"></label>
                            <input id="tab-4" type="radio" name="tabs" aria-hidden="true" checked>
                            <h2>2017</h2>
                            <div class="tabPanel-content">
                               {% for toplevel in site.data.lang[site.lang].roadmap %}
                              {% if toplevel.year == 2017 %}
                                {% for roadlist in toplevel.accomplishments %}
                                  <div class="row start-xs middle-xs">
                                     <div class="col-xs-1">
                                        <span class="{{roadlist.status}}"></span>
                                     </div>
                                     <div class="col-xs-11">
                                       {% if roadlist.date %}
                                        <p>{{roadlist.date}}: {{roadlist.name}}</p>
                                        {%else%}
                                        <p>{{roadlist.name}}</p>
                                        {%endif%}
                                     </div>
                                  </div>
                              {%endfor%}
                              {%endif%}
                              {%endfor%}
                            </div>
                            <label for="tab-5" tabindex="0"></label>
                            <input id="tab-5" type="radio" name="tabs" aria-hidden="true">
                            <h2>Future</h2>
                            <div class="tabPanel-content">
                               {% for toplevel in site.data.lang[site.lang].roadmap %}
                              {% if toplevel.year == 2018 %}
                                {% for roadlist in toplevel.accomplishments %}
                                  <div class="row start-xs">
                                     <div class="col-xs-1">
                                        <span class="{{roadlist.status}}"></span>
                                     </div>
                                     <div class="col-xs-11">
                                       {% if roadlist.date %}
                                        <p>{{roadlist.date}}: {{roadlist.name}}</p>
                                        {%else%}
                                        <p>{{roadlist.name}}</p>
                                        {%endif%}
                                     </div>
                                  </div>
                              {%endfor%}
                              {%endif%}
                              {%endfor%}
                            </div>
                          </div>
        </div>
    </div>
</section>
</div>