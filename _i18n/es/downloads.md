<div class="downloads">

<div class="container description" markdown="1">

Si necesita ayuda para elegir la aplicación correcta, haga clic [aquí](https://www.reddit.com/r/Monero/comments/64b5lf/what_is_the_best_monero_wallet/) para obtener una respuesta rápida, luego seleccione la versión apropiada para su sistema operativo. Nota: para mayor comodidad los hashes SHA256 se enumeran por las descargas, pero una lista GPG firmada de los hash está en getmonero.org/downloads/hashes.txt ] (https://getmonero.org/downloads/hashes.txt ) y debe tratarse como canónico, con la firma marcada con la clave GPG apropiada en el código fuente (en /utils/gpg_keys).

</div>
<div class="container full downdropdown">
<div class="info-block download-nav row middle-xs between-xs" id="selections">
    
    <div class="col"><a href="#windows">Windows</a></div>
    <div class="col"><a href="#mac">Mac</a></div>
    <div class="col"><a href="#linux">Linux</a></div>
    <div class="col"><a href="#arm">Arm (v7 & 8)</a></div>
    <div class="col"><a href="#bsd">BSD</a></div>
    <div class="col"><a href="#source">Source & Blockchain</a></div>
    <div class="col"><a href="#mobilelight">Mobile & Light</a></div>
    <div class="col"><a href="#hardware">Hardware</a></div>
    
</div>
</div>

<div class="container full">
  <div class="info-block row center-xs" id="pick-platform">
     <div class="mob dropdowndrop">
        <input id="check01" type="checkbox" name="menu"/>
        <label for="check01">Elija su sistema operativo</label>
        <ul id="menu">
          <li><a href="#windows">Windows</a></li>
          <li><a href="#mac">Mac</a></li>
          <li><a href="#linux">Linux</a></li>
          <li><a href="#arm">Arm (v7 & 8)</a></li>
          <li><a href="#bsd">BSD</a></li>
          <li><a href="#source">Source & Blockchain</a></li>
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
        <p class="text-center">Versión actual:{{ data_downloads.version }} {{ data_downloads.tag }}</p>
            {%endif%}



{% if data_downloads.cli_hash == "source" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<h4 id="{{ data_downloads.platform | slugify }}">
 <a href="{{ data_downloads.cli_url }}">Código fuente</a>
</h4>
</div>
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12" markdown="1">
Si prefieres usar un blockchain bootstrap, en lugar de sincronizar desde cero, puedes [usar este enlace para el programa de arranque más reciente] (https://downloads.getmonero.org/blockchain.raw). Sin embargo, normalmente es mucho más rápido sincronizar desde cero y también requiere menos RAM (la importación es muy exigente).
</div>
</div>
{% elsif data_downloads.id == "hardware" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
    
<p>La comunidad Monero acaba de financiar una <a href = "https://forum.getmonero.org/9/work-in-progress/88149/dedicated-monero-hardware-wallet" target = " _blank" rel = "noreferrer, noopener"> Cartera de Hardware Dedicado </a>  que ya está en progreso. Además, el libro principal está trabajando en la <a href="https://github.com/LedgerHQ/blue-app-monero" target="_blank" rel="noreferrer, noopener"> integración de Monero en sus carteras de hardware.</a>.</p>
</div></div>

{% elsif data_downloads.id == "mobilelight" %}
<div class="row">
<div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
<p>Los siguientes son carteras móviles o livianas que los miembros de confianza de la comunidad consideran seguros. Si hay una cartera que no está aquí, puede solicitar que la comunidad la revise. <a href="/community/hangouts/">Hangouts</a> Ve a nuestra página de Hangouts para ver dónde.</p>
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



