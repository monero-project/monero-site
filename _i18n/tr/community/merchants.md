<div markdown="1" class="text-center container description">
Her tipten satıcı Monero’nun sağladığı finansal gizliliğe değer vermeye başladı. Altta mal ve hizmetleri karşılığında Monero kabul etmekte olan satıcıların bir listesini bulabilirsiniz. Herhangi bir kurum Monero alımını durdurmuş veya kurumunuzun listelenmesini istiyorsanız, lütfen [bir GitHub talebi oluşturarak biz haber verin](https://github.com/monero-project/monero-site/issues).
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
*Lütfen dikkat: size sağlanmış olan bu bağlantılar bilgi amaçlıdır; listelenmiş olan kurum veya kuruluş veya kişilerle ilgili herhangi bir ürün, servis veya fikir Monero topluluğu üyeleri tarafından tavsiye edilmemektedir. Monero topluluğu listelenmiş olan harici sayfalarla ilgili bilgilerin doğruluğu, yasallığı veya içeriği ile ilgili sorumluluk kabul etmemektedir. İlgili sayfalar hakkında bilgi almak isterseniz lütfen site sahiplerine ulaşınız. Her zaman olduğu gibi, alıcıya uyarı; kendi araştırmanızı kendiniz yapmakla yükümlüsünüz. Online alışveriş yaparken her zaman sağduyunuzu kullanın.*
</div>
