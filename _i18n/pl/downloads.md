<div class="downloads">

<div class="container description" markdown="1">

Jeżeli potrzebujesz pomocy przy wyborze właściwej aplikacji, kliknij [tutaj](https://www.reddit.com/r/Monero/comments/64b5lf/what_is_the_best_monero_wallet/), aby znaleźć szybką odpowiedź. Następnie wybierz poniżej wersję odpowiednią dla twojego systemu operacyjnego. Uwaga: hasze SHA256 zostały umieszczone na liście jako udogodnienie. Lista haszów podpisanych przez GPG znajduje się na stronie [getmonero.org/downloads/hashes.txt](https://getmonero.org/downloads/hashes.txt) i jest uznawana za ogónie przyjętą, z podpisem zweryfikowanym przeciwko odpowiedniemu kluczowi GPG w kodzie źródłowym (in /utils/gpg_keys).

</div>
<div class="container full downdropdown">
<div class="info-block download-nav row middle-xs between-xs" id="selections">
    
    <div class="col"><a href="#windows">Windows</a></div>
    <div class="col"><a href="#mac">Mac</a></div>
    <div class="col"><a href="#linux">Linux</a></div>
    <div class="col"><a href="#arm">Arm (v7 & 8)</a></div>
    <div class="col"><a href="#bsd">BSD</a></div>
    <div class="col"><a href="#source">Kod źródłowy i łańcuch bloków</a></div>
    <div class="col"><a href="#mobilelight">Wersje mobilne i lekkie</a></div>
    <div class="col"><a href="#hardware">Hardware</a></div>
    
</div>
</div>

<div class="container full">
  <div class="info-block row center-xs" id="pick-platform">
     <div class="mob dropdowndrop">
        <input id="check01" type="checkbox" name="menu"/>
        <label for="check01">Wybierz system operacyjny</label>
        <ul id="menu">
          <li><a href="#windows">Windows</a></li>
          <li><a href="#mac">Mac</a></li>
          <li><a href="#linux">Linux</a></li>
          <li><a href="#arm">Arm (v7 & 8)</a></li>
          <li><a href="#bsd">BSD</a></li>
          <li><a href="#source">Kod źródłowy i łańcuch bloków</a></li>
          <li><a href="#mobilelight">Wersje mobilne i lekkie</a></li>
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
        <p class="text-center">Obecna wersja: {{ data_downloads.version }} {{ data_downloads.tag }}</p>
            {%endif%}



{% if data_downloads.cli_hash == "source" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="{{ data_downloads.cli_url }}">Kod źródłowy</a>
</h4>
</div>
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12" markdown="1">
Jeśli wolisz użyć bootstrap łańcucha bloków zamiast synchronizować od zera, możesz [użyć tego linka do najnowszego bootstrapa](https://downloads.getmonero.org/blockchain.raw). Jednak synchronizacja od zera przeważnie jest dużo szybsza i zajmuje dużo mniej pamięci RAM (importowanie jest bardzo zachłanne).
</div>
</div>
{% elsif data_downloads.id == "hardware" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<p>Społeczność Monero ufundowała niedawno <a href="https://forum.getmonero.org/9/work-in-progress/88149/dedicated-monero-hardware-wallet" target="_blank" rel="noreferrer, noopener">Dedykowany Portfel Sprzętowy</a>, który jest w trakcie opracowania. Z kolei Ledger pracuje nad <a href="https://github.com/LedgerHQ/blue-app-monero" target="_blank" rel="noreferrer, noopener"></a>zintegrowaniem Monero z jego portfelem sprzętowym.</p>
</div></div>

{% elsif data_downloads.id == "mobilelight" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<p>Poniżej znajdują się portfele mobilne i lżejsze, uważane za bezpieczne przez zaufanych członków społeczności. Jeśli jakiś portfel nie znajduje się na liście, poproś społeczność o sprawdzenie go. Przejdź do strony z naszymi <a href="/community/hangouts/">Hangoutami</a> i zobacz, gdzie można nas spotkać.</p>
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
 <a href="//downloads.getmonero.org/cli/{{ data_downloads.cli_url }}"> {{ data_downloads.platform }} (Wyłącznie narzędzia wiersza poleceń)</a>
 </h4></div></div>
 <div class="row"><div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
 <p><strong>Hasz SHA256:</strong></p> <p class="hash"> {{ data_downloads.cli_hash }}</p></div>
</div>
{% elsif data_downloads.gui_hash != nil and data_downloads.cli_hash == nil %}
<div class="row">

<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="//downloads.getmonero.org/gui/{{ data_downloads.gui_url }}">{{ data_downloads.platform }}</a>
 </h4></div>
<div class="row">
<p><strong>Hasz SHA256:</strong></p> <p class="hash"> {{ data_downloads.gui_hash }}</p>
</div>
{% elsif data_downloads.gui_hash != nil and data_downloads.cli_hash != nil %}
<div class="row start-md">
<div class="col-md-6 col-sm-12" >

<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="//downloads.getmonero.org/gui/{{ data_downloads.gui_url }}">{{ data_downloads.platform }}</a>
</h4>
<p><strong>Hasz SHA256 (Graficzny Interfejs Użytkownika):</strong></p> <p class="hash"> {{ data_downloads.gui_hash }}</p>

</div>

<div class="col-md-6 col-sm-12">
<h4>
 <a href="//downloads.getmonero.org/cli/{{ data_downloads.cli_url }}">{{ data_downloads.platform }} (Wyłącznie narzędzia wiersza poleceń)</a>
</h4>
<p><strong>Hasz SHA256 (Interfejs Wiersza Poleceń):</strong></p> <p class="hash"> {{ data_downloads.cli_hash }}</p>
</div>
</div>
{% endif %}
    </div>
</section>

{% endfor %}

</div>
<a href="#" class="arrow-up"><i></i></a>

</div>



