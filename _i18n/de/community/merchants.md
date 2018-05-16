{% include untranslated.html %}
<div markdown="1" class="text-center container description">
Viele verschiedene Händler schätzen die finanzielle Privatsphäre wie sie Monero mit sich bringt. Unten ist eine Liste von Händler von denen wir wissen, dass sie Monero als Zahlungsoption akzeptieren. Falls ein Unternehmen nicht mehr Monero unterstützt oder du dein Geschäft hier gelistet haben möchtest, öffne bitte ein [Github Issue](https://github.com/monero-project/monero-site/issues).
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
*Bitte beachte: diese Links werden zur Bequemlichkeit und nur für informationelle Zwecke zur Verfügung gestellt; sie bedeuten keine Befürwortung jeglicher Produkte, Dienste oder Meinung der Unternehmten, Organisationen oder Individuen durch die Monero Community. Die Monero Community trägt keine Verantwortung für die Fehlerfreiheit, die Rechtsmäßigkeit oder den Inhalt dieser externen Seiten. Kontaktiere die externen Seiten zur Beantwortung zu Fragen über ihren Inhalt. Wie immer sind alle Angaben ohne Gewähr; du bist dafür verantwortlich, Eigenrecherche zu betreiben.*
</div>
