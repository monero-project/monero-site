<div markdown="1" class="text-center container description">
Toute sorte de commerçants ont fini par apprécier la confidentialité financière qu'apporte Monero. Vous trouverez ci-dessous une liste de commerçants dont nous savons qu'ils acceptent Monero comme moyen de paiement pour leurs biens ou leurs services. Si une société a cessé d'accepter Monero, ou bien si vous souhaitez y faire figurer votre affaire, merci [d'ouvrir un problème sur GitHub pour nous le faire savoir](https://github.com/monero-project/monero-site/issues).
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
*Notez que les liens sont fournis à titre informatif uniquement. Aucun des produits, services ou opinions des compagnies, sociétés et individus cités ne sont approuvés par la communauté en raison de leur présence dans cette liste. La communauté Monero n'assume aucune responsabilité quant à l'exactitude, la légalité ou le contenu de ces sites externes. Pour des questions concernant leurs contenus, contactez directement ces sites externes. Comme toujours, seul l'acheteur est responsable de son achat (acheteurs, méfiez-vous). C'est à vous de faire vos propres recherches. Faites toujours preuve de bon sens lorsque vous effectuez des achats en ligne.*
</div>
