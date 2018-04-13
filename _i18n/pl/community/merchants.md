<div markdown="1" class="text-center container description">
Różnego rodzaju handlowcy doceniają finansową prywatność, jakiej dostarcza Monero. Poniżej znajduje się lista organizacji, o których wiemy, że akceptują Monero jako środek płatniczy za swoje produkty i usługi. Jeśli któraś z nich już nie uznaje Monero lub chciałbyś, żeby Twoja firma znalazła się na liście, załóż wątek na GitHub i daj nam znać (https://github.com/monero-project/monero-site/issues).
</div>
<div class="merchants">
{% for toplevel in site.data.merchants %}
<div class="container full" id="{{toplevel.id}}">
       <div class="info-block">
        <h2>{{toplevel.category}}</h2>
        <div class="row">
            {% assign sortedMerchants = toplevel.merchants | sort: 'name' %}
            {% for merchants in sortedMerchants %}
            <div class="col-md-4 col-sm-6 col-xs-12">
                <a href="{{merchants.url}}">{{merchants.name}}</a>
            </div>
            {% endfor %}
        </div>
        </div>
</div>
{%endfor%}


</div>

<div markdown="1" class="text-center container description">
*Uwaga: powyższe linki są jedynie udogodnieniem i służą tylko do celów informacyjnych; nie reprezentują one wsparcia społeczności Monero dla żadnego z produktów, usług ani opinii wymienionych organizacji lub osób. Społeczność Monero nie bierze odpowiedzialności za zgodność, legalność ani treść tych zewnętrznych stron. W przypadku wątpliwości związanych z treścią linków, skontaktuj się z właścicielami zewnętrznej strony. Jesteś odpowiedzialny za swoje wyszukiwania. Zawsze przemyśl swój internetowy zakup.*
</div>
