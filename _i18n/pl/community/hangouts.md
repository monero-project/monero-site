<div markdown="1" class="text-center container description">
Społeczność Monero jest różnorodna. Jesteśmy na całym świecie, ale mamy swoje ulubione miejsca spotkań. Większość z nich znajdziesz poniżej. Dołącz do nas!
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
                                    <h2>Materiały do pracy grupowej</h2>
                                </div>
                            </div>
                            <div class="row center-xs">
                                <p>Aby wspomóc pracę grupową, Monero posiada wiele materiałów, które mogą zostać użyte na spotkaniach i przy planowaniu projektów. Najistotniejsze z nich są nawet przekazywane najpopularniejszym kanałom IRC związanym z Monero.
                               </p>
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
                                    <h2>Kanały IRC</h2>
                                </div>
                            </div>
                            <div class="row start-xs">
                                <p>Społeczność Monero używa wielu kanałów IRC, a każdy z nich jest przeznaczony do czegoś innego. Niektóre z nich służą do pracy, a niektóre do pogadania. Najpopularniejsze z nich znajdziesz poniżej.
                                </p>
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
                                <p>Stack Exchange Monero jest szybkim i prostym sposobem na zadanie pytania i uzyskanie odpowiedzi. Poniżej znajdziesz kilka istotnych odpowiedzi na często zadawane pytania.
                              </p>
                            </div>
                            <div class="row start-xs sequestions">
                                <a href="https://monero.stackexchange.com/questions/4277/why-does-monero-have-higher-transaction-fees-than-bitcoin">Dlaczego opłaty za transakcje Monero są wyższe niż opłaty za Bitcoina?</a>
                                <a href="https://monero.stackexchange.com/questions/4335/what-does-moneros-scaling-roadmap-look-like">Jak wygląda oś czasu skalowania Monero?</a>
                                <a href="https://monero.stackexchange.com/questions/4302/what-cryptography-primitives-concepts-other-than-the-basic-ones-does-monero-us">Jakich pojęć kryptograficznych używa Monero, poza tymi podstawowymi?</a>
                                <a href="https://monero.stackexchange.com/questions/4242/how-to-extract-data-from-local-blockchain">Jak wyodrębnić dane z lokalnego łańcucha bloków?</a>
                                <a href="https://monero.stackexchange.com/questions/4302/what-cryptography-primitives-concepts-other-than-the-basic-ones-does-monero-us">Ukrycie Protokołu Kontroli Transmisji dla górników.</a>
                            </div>  
                            <div class="row center-xs">
                                <p><a href="https://monero.stackexchange.com" class="btn-link btn-auto">Odwiedź Stack Exchange</a></p>
                            </div>
                        </div>
               </div>
               <!-- end right one-third block-->
           </div>
        </section>

</div>
