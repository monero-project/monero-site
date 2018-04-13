<div markdown="1" class="text-center container description">
Społeczność Monero zawsze jest gotowa na spotkanie się i wspólne spędzenie czasu. Sprawdź poniżej wydarzenia związane z Monero, które odbędą się w Twoim pobliżu.
</div>

{% for toplevel in site.data.events %}

<div class="events">
    <div class="container full col-xs-12">
           <div class="info-block text-adapt">
                <div class="row">
                    <div class="col-xs-12">
                        <h2>{{toplevel.event}}</h2>
                        <h3>Gdzie</h3>
                        <p>{{toplevel.where}}</p>
                        <h3>Kiedy</h3>
                        <p>{{toplevel.when}}</p>
                        <h3>Szczegóły</h3>
                        <p>{{toplevel.description}}</p>
                        <h3>Link</h3>
                        <a>{{toplevel.link}}</a>
                    </div>
                </div>
            </div>
    </div>
</div>

{%endfor%}
