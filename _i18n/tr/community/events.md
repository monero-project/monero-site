<div markdown="1" class="text-center container description">
Monero severler buluşup vakit geçirmekten keyif alır. Bulunduğunuz bölgedeki Monero etkinleri hakkında bilgi almak için alta bakınız.
</div>

{% for toplevel in site.data.events %}

<div class="events">
    <div class="container full col-xs-12">
           <div class="info-block text-adapt">
                <div class="row">
                    <div class="col-xs-12">
                        <h2>{{toplevel.event}}</h2>
                        <h3>Nerede</h3>
                        <p>{{toplevel.where}}</p>
                        <h3>Ne Zaman</h3>
                        <p>{{toplevel.when}}</p>
                        <h3>Açıklama</h3>
                        <p>{{toplevel.description}}</p>
                        <h3>Bağlantı</h3>
                        <a>{{toplevel.link}}</a>
                    </div>
                </div>
            </div>
    </div>
</div>

{%endfor%}
