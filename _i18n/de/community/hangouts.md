{% include untranslated.html %}
<div markdown="1" class="text-center container description">
Die Monero Community ist vielfältig: Wir kommen von überall, dennoch treffen wir uns an bestimmten Plätzen am liebsten. Du findest die meisten davon unten. Schließe dich uns an!
</div>

<div class="hangouts">
    <section class="container">   
        <ul class="row center-xs">
            <li>
                <a href="https://twitter.com/monerocurrency" target="_blank" rel="noreferrer noopener"><div class="social-icon twitter"></div></a>
            </li>
            <li>
                <a href="https://reddit.com/r/monero" target="_blank" rel="noreferrer noopener"><div class="social-icon reddit"></div></a>
            </li>
            <li>
                <a href="https://www.facebook.com/monerocurrency/" target="_blank" rel="noreferrer noopener"><div class="social-icon facebook"></div></a>
            </li>
            <li>
                <a href="https://github.com/monero-project" target="_blank" rel="noreferrer noopener"><div class="social-icon github"></div></a>
            </li>
        </ul>
    </section>

    <section class="container">
          <div class="row">
                <!-- left two-thirds block-->
               <div class="left two-thirds col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div class="col-xs-12">
                        <div class="info-block">
                            <div class="row center-xs">
                                <div class="col">
                                    <h2>Arbeitsgruppen Ressourcen</h2>
                                </div>
                            </div>
                            <div class="row center-xs">
                                <p>Um organische Arbeitsgruppen zu unterstützen, hat Monero eine Vielzahl an Ressourcen, derer sich die Community zum Treffen sowie zur Projektplanung bedienen kann. Mattermost hat sogar Relays zu den populärsten Monero-bezogenen IRC Kanälen.</p>
                            </div>
                            <div class="row relays around-xs">
                                <div class="col-md-4 col-sm-4 col-xs-4">
                                    <p><a href="https://monero.slack.com/" class="btn-link btn-fixed">Slack</a></p>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-4">
                                    <p><a href="https://mattermost.getmonero.org/" class="btn-link btn-fixed">Mattermost</a></p>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-4">
                                    <p><a href="https://taiga.getmonero.org/" class="btn-link btn-fixed">Taiga</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="info-block">
                            <div class="row center-xs">
                                <div class="col">
                                    <h2>IRC Kanäle</h2>
                                </div>
                            </div>
                            <div class="row start-xs">
                                <p>Die Monero Community benutzt viele verschiedene IRC Kanäle, die jeder einen eigenen Zweck erfüllen. Einige zum Arbeiten, andere zum rumhängen. Die beliebtesten Kanäle findest du unten.</p>
                            </div>
                            <div class="row irc">
                                {% for channel in site.data.irc %}
                                    <div class="col-md-4 col-xs-12">
                                        <a href="irc://chat.freenode.net/#{{ channel.channel }}">#{{ channel.channel }}</a>
                                        <p>{{ channel.description }}</p>
                                    </div>
                                {% endfor %}
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end left two-thirds block-->

                <!-- right one-third block-->
               <div class="right one-third col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div class="info-block">
                            <div class="row center-xs">
                                <div class="col"><h2>Stack Exchange</h2></div>
                            </div>
                            <div class="row start-xs">
                                <p>Der Monero Stack Exchange ist ein schneller und einfacher Weg, um Fragen zu stellen und Antworten zu erhalten. Unten findest du einige hochqualitative Frage-Antwort-Paare zu den am häufigsten gestellten Fragen.</p>
                            </div>
                            <div class="row start-xs sequestions">
                                <a href="https://monero.stackexchange.com/questions/4277/why-does-monero-have-higher-transaction-fees-than-bitcoin">Warum hat Monero höhere Transaktionsgebühren als Bitcoin?</a>
                                <a href="https://monero.stackexchange.com/questions/4335/what-does-moneros-scaling-roadmap-look-like">Wie schaut die Roadmap von Monero hinsichtlich der Skalierung aus?</a>
                                <a href="https://monero.stackexchange.com/questions/4302/what-cryptography-primitives-concepts-other-than-the-basic-ones-does-monero-us">Welcher kryptographischen Konzepte, außer der Grundlagen, bedient sich Monero?</a>
                                <a href="https://monero.stackexchange.com/questions/4242/how-to-extract-data-from-local-blockchain">Wie extrahiert man Daten aus der lokalen Blockchain?</a>
                                <a href="https://monero.stackexchange.com/questions/4302/what-cryptography-primitives-concepts-other-than-the-basic-ones-does-monero-us">TCP Verkehr von Monero Minern verbergen?</a>
                            </div>  
                            <div class="row center-xs">
                                <p><a href="https://monero.stackexchange.com" class="btn-link btn-auto">Besuche den Stack Exchange</a></p>
                            </div>
                        </div>
               </div>
               <!-- end right one-third block-->
           </div>
        </section>

</div>
