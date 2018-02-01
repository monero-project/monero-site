{% include untranslated.html %}
<div class="downloads">

<div class="container description" markdown="1">

Se hai bisogno di aiuto per scegliere l'applicazione corretta, clicca [qui](https://www.reddit.com/r/Monero/comments/64b5lf/what_is_the_best_monero_wallet/) (in inglese) per una risposta rapida, dopodichè scegli qui sotto la release appropriata per il tuo sistema operativo.
Nota: gli hash SHA256 sono listati qui per convenienza, una lista degli hash firmata con GPG è disponibile su [getmonero.org/downloads/hashes.txt](https://getmonero.org/downloads/hashes.txt) e dovrebbe essere trattato come "canonico", confrontando le firme con l'appropriata chiave GPG nel codice sorgente (in /utils/gpg_keys).

</div>
<div class="container full downdropdown">
<div class="info-block download-nav row middle-xs between-xs" id="selections">
    
    <div class="col"><a href="#windows">Windows</a></div>
    <div class="col"><a href="#mac">Mac</a></div>
    <div class="col"><a href="#linux">Linux</a></div>
    <div class="col"><a href="#arm">Arm (v7 & 8)</a></div>
    <div class="col"><a href="#bsd">BSD</a></div>
    <div class="col"><a href="#source">Sorgente & Blockchain</a></div>
    <div class="col"><a href="#mobilelight">Mobile & Light</a></div>
    <div class="col"><a href="#hardware">Hardware</a></div>
    
</div>
</div>

<div class="container full">
  <div class="info-block row center-xs" id="pick-platform">
     <div class="mob dropdowndrop">
        <input id="check01" type="checkbox" name="menu"/>
        <label for="check01">Scegli il tuo SO</label>
        <ul id="menu">
          <li><a href="#windows">Windows</a></li>
          <li><a href="#mac">Mac</a></li>
          <li><a href="#linux">Linux</a></li>
          <li><a href="#arm">Arm (v7 & 8)</a></li>
          <li><a href="#bsd">BSD</a></li>
          <li><a href="#source">Sorgente & Blockchain</a></li>
          <li><a href="#mobilelight">Mobile & Light</a></li>
          <li><a href="#hardware">Hardware</a></li>
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
        <p class="text-center">Versione corrente: {{ data_downloads.version }} {{ data_downloads.tag }}</p>
            {%endif%}



{% if data_downloads.cli_hash == "source" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="{{ data_downloads.cli_url }}">Codice Sorgente</a>
</h4>
</div>
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12" markdown="1">
Se preferisci usare una blockchain esterna, invece di sincronizzarla da zero, puoi [scaricare la versione più recente da questo link](https://downloads.getmonero.org/blockchain.raw). E' tipicamente molto più veloce sincronizzare da zero e richiede anche molta meno RAM (la funzione "import" richiede molte risorse).
</div>
</div>
{% elsif data_downloads.id == "hardware" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<p>La community di Monero ha recentemente finanziato un <a href="https://forum.getmonero.org/9/work-in-progress/88149/dedicated-monero-hardware-wallet" target="_blank" rel="noreferrer, noopener">Hardware Wallet Dedicato</a> che è in fase di creazione. in più, Ledger sta lavorando a <a href="https://github.com/LedgerHQ/blue-app-monero" target="_blank" rel="noreferrer, noopener">integrare Monero nei loro hardware wallet</a>.</p>
</div></div>

{% elsif data_downloads.id == "mobilelight" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<p>I seguenti sono mobile o light wallet che sono considerati sicuri da membri fidati della community. Se esiste un wallet non listato qui, puoi chiedere alla community di controllarlo. Vai alla nostra
 The following are mobile or light wallets that are deemed safe by trusted members of the community. If there is a wallet that is not on here, you can request the community check it out. Go to our <a href="/community/hangouts/">Lista canali</a> per vedere dove siamo.</p>
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
 <a href="//downloads.getmonero.org/cli/{{ data_downloads.cli_url }}">{{ data_downloads.platform }} (Command-Line Tools Only)</a>
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



