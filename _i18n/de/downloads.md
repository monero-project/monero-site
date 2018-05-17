{% include untranslated.html %}
<div class="downloads">

<div class="container description" markdown="1">

Wenn Du Hilfe bei der Wahl der korrekten Anwendung benötigst, klicke bitte [hier](https://www.reddit.com/r/Monero/comments/64b5lf/what_is_the_best_monero_wallet/) für eine schnelle Antwort. Wähle unten anschließend die passende Version für Dein Betriebssystem.
Hinweis: Die SHA256 Hashwerte neben den Downloads dienen dem Komfort. Eine anerkannte GPG-signierte Liste der Hashwert ist unter [getmonero.org/downloads/hashes.txt](https://getmonero.org/downloads/hashes.txt) verfügbar. Der zu der Signatur gehörige öffentliche Schlüssel befindet sich im Quellcode (unter /utils/gpg_keys).

</div>
<div class="container full downdropdown">
<div class="info-block download-nav row middle-xs between-xs" id="selections">
    
    <div class="col"><a href="#windows">Windows</a></div>
    <div class="col"><a href="#mac">Mac</a></div>
    <div class="col"><a href="#linux">Linux</a></div>
    <div class="col"><a href="#arm">Arm (v7 & 8)</a></div>
    <div class="col"><a href="#bsd">BSD</a></div>
    <div class="col"><a href="#source">Code & Blockchain</a></div>
    <div class="col"><a href="#mobilelight">Mobil & Light</a></div>
    <div class="col"><a href="#hardware">Hardware</a></div>
    
</div>
</div>

<div class="container full">
  <div class="info-block row center-xs" id="pick-platform">
     <div class="mob dropdowndrop">
        <input id="check01" type="checkbox" name="menu"/>
        <label for="check01">Wähle Dein Betriebssystem</label>
        <ul id="menu">
          <li><a href="#windows">Windows</a></li>
          <li><a href="#mac">Mac</a></li>
          <li><a href="#linux">Linux</a></li>
          <li><a href="#arm">Arm (v7 & 8)</a></li>
          <li><a href="#bsd">BSD</a></li>
          <li><a href="#source">Code & Blockchain</a></li>
          <li><a href="#mobilelight">Mobil & Light</a></li>
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
        <p class="text-center">Aktuelle Version: {{ data_downloads.version }} {{ data_downloads.tag }}</p>
            {%endif%}



{% if data_downloads.cli_hash == "source" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="{{ data_downloads.cli_url }}">Quellcode</a>
</h4>
</div>
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12" markdown="1">
Wenn Du die bereits geladene Blockchain vorziehst, anstatt von Grund auf zu synchronisieren, dann kannst Du [hier](https://downloads.getmonero.org/blockchain.raw) die aktuelle Blockchain herunterladen. Normalerweise ist die Synchronisation von Grund auf schneller und benötigt deutlich weniger Arbeitsspeicher (im Gegensatz zum Import).
</div>
</div>
{% elsif data_downloads.id == "hardware" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<p>Die Monero Community hat vor kurzem ein <a href="https://forum.getmonero.org/9/work-in-progress/88149/dedicated-monero-hardware-wallet" target="_blank" rel="noreferrer, noopener">dediziertes Hardware Wallet</a> finanziert, welches sich momentan in Entwicklung befindet. Außerdem arbeitet Ledger daran, <a href="https://github.com/LedgerHQ/blue-app-monero" target="_blank" rel="noreferrer, noopener">Monero in ihre Hardware Wallets zu integrieren</a>.</p>
</div></div>

{% elsif data_downloads.id == "mobilelight" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<p>Die folgenden Mobil- und Light-Wallets werden von vertrauten Mitgliedern der Community als sicher erachtet. Sollte ein Wallet hier nicht gelistet sein, so kannst Du die Community bitten, dieses auszuprobieren. Eine Liste der Platformen der Monero Community findest Du auf der <a href="/community/hangouts/">Treffpunkt</a> Seite.</p>
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



