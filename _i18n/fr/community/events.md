<div markdown="1" class="text-center container description">
Les membres de la communauté Monero sont toujours prêts à se réunir pour passer un bon moment. Vérifiez ci-dessous les évènements liés à Monero qui se passent dans votre région.
</div>

{% for toplevel in site.data.events %}

<div class="events">
    <div class="container full col-xs-12">
           <div class="info-block text-adapt">
                <div class="row">
                    <div class="col-xs-12">
                        <h2>{{toplevel.event}}</h2>
                        <h3>Où</h3>
                        <p>{{toplevel.where}}</p>
                        <h3>Quand</h3>
                        <p>{{toplevel.when}}</p>
                        <h3>Description</h3>
                        <p>{{toplevel.description}}</p>
                        <h3>Lien</h3>
                        <a>{{toplevel.link}}</a>
                    </div>
                </div>
            </div>
    </div>
</div>

{%endfor%}
