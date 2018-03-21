<div class="downloads">

<div class="container description" markdown="1">

Si vous avez besoin d'aide pour choisir la bonne application, merci de cliquer [ici](https://www.reddit.com/r/Monero/comments/64b5lf/what_is_the_best_monero_wallet/) pour une réponse rapide, puis sélectionner va version appropriée pour votre système d'exploitation ci-dessous.
Note : les sommes de contrôle SHA256 sont indiquées à côté des téléchargements par commodité, mais une liste signée par GPG des sommes de contrôle est disponible à [getmonero.org/downloads/hashes.txt](https://getmonero.org/downloads/hashes.txt) et devrait être traitée de manière canonique, en vérifiant la signature vis-à-vis de la clef GPG appropriée dans le code source (dans /utils/gpg_keys).

</div>
<div class="container full downdropdown">
<div class="info-block download-nav row middle-xs between-xs" id="selections">

    <div class="col"><a href="#windows">Windows</a></div>
    <div class="col"><a href="#mac">Mac</a></div>
    <div class="col"><a href="#linux">Linux</a></div>
    <div class="col"><a href="#arm">Arm (v7 & 8)</a></div>
    <div class="col"><a href="#bsd">BSD</a></div>
    <div class="col"><a href="#source">Source & Blockchain</a></div>
    <div class="col"><a href="#mobilelight">Mobile & Léger</a></div>
    <div class="col"><a href="#hardware">Matériel</a></div>

</div>
</div>

<div class="container full">
  <div class="info-block row center-xs" id="pick-platform">
     <div class="mob dropdowndrop">
        <input id="check01" type="checkbox" name="menu"/>
        <label for="check01">Choose your OS</label>
        <ul id="menu">
          <li><a href="#windows">Windows</a></li>
          <li><a href="#mac">Mac</a></li>
          <li><a href="#linux">Linux</a></li>
          <li><a href="#arm">Arm (v7 & 8)</a></li>
          <li><a href="#bsd">BSD</a></li>
          <li><a href="#source">Source & Blockchain</a></li>
          <li><a href="#mobilelight">Mobile & Léger</a></li>
          <li><a href="#hardware">Matériel</a></li>
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
        <p class="text-center">Current Version: {{ data_downloads.version }} {{ data_downloads.tag }}</p>
            {%endif%}



{% if data_downloads.cli_hash == "source" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="{{ data_downloads.cli_url }}">Code Source</a>
</h4>
</div>
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12" markdown="1">
Si vous préférer utiliser un bootstrap de la blockchain, plutôt que de synchroniser à partir de zéro, vous pouvez [utiliser ce lien pour obtenir le bootstrap le plus récent](https://downloads.getmonero.org/blockchain.raw). Il est cependant habituellement plus rapide de synchroniser à partir de zéro, et cela consomme également nettement moins de RAM (l'import est particulièrement gourmand).
</div>
</div>
{% elsif data_downloads.id == "hardware" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<p>La communauté Monero vient de financer un <a href="https://forum.getmonero.org/9/work-in-progress/88149/dedicated-monero-hardware-wallet" target="_blank" rel="noreferrer, noopener">Portefeuille Matériel Dédié</a> qui est en cours d'avancement. De même, Ledger travail sur une <a href="https://github.com/LedgerHQ/blue-app-monero" target="_blank" rel="noreferrer, noopener">intégration de Monero dans leurs portefeuilles matériels</a>.</p>
</div></div>

{% elsif data_downloads.id == "mobilelight" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<p>Ci-dessous des portefeuilles mobiles ou légers jugés sûrs par des membres de confiance de la communauté. Si un portefeuille n'est pas cité ici, vous pouvez demander à la communauté de le vérifier. Allez à la page <a href="/community/hangouts/">Rencontres</a> pour voir où nous sommes.</p>
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
 <a href="//downloads.getmonero.org/cli/{{ data_downloads.cli_url }}"> {{ data_downloads.platform }} (Command-line Tools Only)</a>
 </h4></div></div>
 <div class="row"><div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
 <p><strong>Somme de contrôle SHA256 :</strong></p> <p class="hash"> {{ data_downloads.cli_hash }}</p></div>
</div>
{% elsif data_downloads.gui_hash != nil and data_downloads.cli_hash == nil %}
<div class="row">

<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="//downloads.getmonero.org/gui/{{ data_downloads.gui_url }}">{{ data_downloads.platform }}</a>
 </h4></div>
<div class="row">
<p><strong>Somme de contrôle SHA256 :</strong></p> <p class="hash"> {{ data_downloads.gui_hash }}</p>
</div>
{% elsif data_downloads.gui_hash != nil and data_downloads.cli_hash != nil %}
<div class="row start-md">
<div class="col-md-6 col-sm-12" >

<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="//downloads.getmonero.org/gui/{{ data_downloads.gui_url }}">{{ data_downloads.platform }}</a>
</h4>
<p><strong>Somme de contrôle SHA256 (GUI) :</strong></p> <p class="hash"> {{ data_downloads.gui_hash }}</p>

</div>

<div class="col-md-6 col-sm-12">
<h4>
 <a href="//downloads.getmonero.org/cli/{{ data_downloads.cli_url }}">{{ data_downloads.platform }} (Command-Line Tools Only)</a>
</h4>
<p><strong>Somme de contrôle SHA256 (CLI) :</strong></p> <p class="hash"> {{ data_downloads.cli_hash }}</p>
</div>
</div>
{% endif %}
    </div>
</section>

{% endfor %}

</div>
<a href="#" class="arrow-up"><i></i></a>

</div>
