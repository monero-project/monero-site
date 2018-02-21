<div class="downloads">

<div class="container description" markdown="1">

Doğru uygulamayı seçmeniz için yardıma ihtiyacınız olursa, hızlı bir cevap için lütfen [buraya tıklayın](https://www.reddit.com/r/Monero/comments/64b5lf/what_is_the_best_monero_wallet/) , daha sonra işletim sisteminiz için alttan uygun sürümü seçin.
Not: SHA256 hash değerleri dosyaların yanında listelenmiştir, fakat GPG-imzalı hash listesi şu adrestedir: [getmonero.org/downloads/hashes.txt](https://getmonero.org/downloads/hashes.txt) ve, imzayla kaynak koddaki uygun GPG anahtarı (/utils/gpg_keys) karşılaştırılarak standart olarak alınabilir.

</div>
<div class="container full downdropdown">
<div class="info-block download-nav row middle-xs between-xs" id="selections">

    <div class="col"><a href="#windows">Windows</a></div>
    <div class="col"><a href="#mac">Mac</a></div>
    <div class="col"><a href="#linux">Linux</a></div>
    <div class="col"><a href="#arm">Arm (v7 & 8)</a></div>
    <div class="col"><a href="#bsd">BSD</a></div>
    <div class="col"><a href="#source">Kaynak & Blok Zinciri</a></div>
    <div class="col"><a href="#mobilelight">Mobil & Hafif</a></div>
    <div class="col"><a href="#hardware">Soğuk Cüzdan</a></div>

</div>
</div>

<div class="container full">
  <div class="info-block row center-xs" id="pick-platform">
     <div class="mob dropdowndrop">
        <input id="check01" type="checkbox" name="menu"/>
        <label for="check01">İşletim sisteminizi seçiniz</label>
        <ul id="menu">
          <li><a href="#windows">Windows</a></li>
          <li><a href="#mac">Mac</a></li>
          <li><a href="#linux">Linux</a></li>
          <li><a href="#arm">Arm (v7 & 8)</a></li>
          <li><a href="#bsd">BSD</a></li>
          <li><a href="#source">Kaynak & Blok Zinciri</a></li>
          <li><a href="#mobilelight">Mobil & Hafif</a></li>
          <li><a href="#hardware">Soğuk Cüzdan</a></li>
        </ul>
      </div>
  </div>
</div>


<div class="download-platforms">

{% for data_downloads in site.data.downloads %}

<section class="container full" id="{{ data_downloads.id}}">
    <div class="info-block">
        <h2>
            {% if data_downloads.icon != null %}
            <span class="{{data_downloads.icon}}"></span>  
            {% endif %}
            {{data_downloads.platform}}
        </h2>
            {% if data_downloads.version != null %}
        <p class="text-center">Güncel Sürüm: {{ data_downloads.version }} {{ data_downloads.tag }}</p>
            {%endif%}



{% if data_downloads.cli_hash == "source" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="{{ data_downloads.cli_url }}">Kaynak Kod</a>
</h4>
</div>
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12" markdown="1">
Bir blok zinciri bootstrap kullanmak isterseniz, sıfırdan eşlemek yerine, en güncel bootstrap için [bu linki kullanabilirsiniz](https://downloads.getmonero.org/blockchain.raw). Genelde sıfırdan eşlemek daha hızlıdır, ve aynı zamanda daha az RAM gerektirir.
</div>
</div>
{% elsif data_downloads.id == "hardware" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<p>Monero topluluğu bir projeye daha finansman sağladı ve <a href="https://forum.getmonero.org/9/work-in-progress/88149/dedicated-monero-hardware-wallet" target="_blank" rel="noreferrer, noopener">Özel Soğuk Cüzdan</a> geliştirmesi şu anda devam ediyor. Ek olarak, Ledger da <a href="https://github.com/LedgerHQ/blue-app-monero" target="_blank" rel="noreferrer, noopener">Monero'yu kendi soğuk cüzdanlarına entegre etmek için çalışmakta.</a>.</p>
</div></div>

{% elsif data_downloads.id == "mobilelight" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<p>Aşağıdaki mobil/hafif cüzdanlar topluluğun önemli üyeleri tarafından güvenli sayılmaktadır. Burada listelenmeyen bir cüzdan varsa, topluluktan kontrol edilmesini isteyebilirsiniz. <a href="/community/hangouts/">Hangouts</a> sayfamıza giderek güncel duruma göz atabilirsiniz.</p>
</div>
</div>
<div class="row center-xs">
  <div class="col-xs-6">
    <a href="https://mymonero.com"><img src="/img/mymonero.png" alt="MyMonero Logo"></a>
  </div>
  <div class="col-xs-6">
    <a href="https://monerujo.io"><img style="height: 115px;" src="/img/Monerujo-wallet.png" alt="Monerujo Logo"></a>
  </div>
</div>


{% elsif data_downloads.gui_hash == nil and data_downloads.cli_hash != nil %}
<div class="row"><div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12"><h4 id="{{ data_downloads.platform | slugify }}">
 <a href="//downloads.getmonero.org/cli/{{ data_downloads.cli_url }}"> {{ data_downloads.platform }} (Sadece Komut-Satırı Aracı)</a>
 </h4></div></div>
 <div class="row"><div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
 <p><strong>SHA256 Hash:</strong></p> <p class="hash"> {{ data_downloads.cli_hash }}</p></div>
</div>
{% elsif data_downloads.gui_hash != nil and data_downloads.cli_hash == nil %}
<div class="row">

<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="//downloads.getmonero.org/gui/{{ data_downloads.gui_url }}">{{ data_downloads.platform }}</a>
 </h4></div>
<div class="row">
<p><strong>SHA256 Hash:</strong></p> <p class="hash"> {{ data_downloads.gui_hash }}</p>
</div>
{% elsif data_downloads.gui_hash != nil and data_downloads.cli_hash != nil %}
<div class="row start-md">
<div class="col-md-6 col-sm-12" >

<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="//downloads.getmonero.org/gui/{{ data_downloads.gui_url }}">{{ data_downloads.platform }}</a>
</h4>
<p><strong>SHA256 Hash (GUI):</strong></p> <p class="hash"> {{ data_downloads.gui_hash }}</p>

</div>

<div class="col-md-6 col-sm-12">
<h4>
 <a href="//downloads.getmonero.org/cli/{{ data_downloads.cli_url }}">{{ data_downloads.platform }} (Sadece Komut-Satırı Aracı)</a>
</h4>
<p><strong>SHA256 Hash (CLI):</strong></p> <p class="hash"> {{ data_downloads.cli_hash }}</p>
</div>
</div>
{% endif %}
    </div>
</section>

{% endfor %}

</div>
<a href="#" class="arrow-up"><i></i></a>

</div>
