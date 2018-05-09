<div markdown="1" class="text-center container description">
La communauté Monero est diverse et variée. Nous venons de toutes parts, mais nous avons certainement nos lieux de rencontres favoris. Vous trouverez la plupart d'entre eux ci-dessous. Rejoignez-nous!
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
                                    <h2>Groupes de Travail</h2>
                                </div>
                            </div>
                            <div class="row center-xs">
                                <p>Afin de maintenir des groupes de travail organiques, Monero dispose de plusieurs ressources que la communauté peut utiliser pour se retrouver et planifier des projets. Mattermost a même des relais dans les canaux IRC liés à Monero les plus populaires.</p>
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
                                    <h2>Canaux IRC</h2>
                                </div>
                            </div>
                            <div class="row start-xs">
                                <p>La communauté Monero s'appuie sur différents canaux IRC qui répondent à des besoins spécifiques. Certains pour travailler, et d'autres simplement pour se rencontrer. Vous trouverez les plus populaires d'entre eux ci-dessous.</p>
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
                                <p>Le Stack Exchange de Monero est un moyen simple et rapide de poser des questions et trouver des réponses. Vous trouverez ci-dessous quelques-unes des meilleures questions/réponses qui sont fréquemment recherchées.</p>
                            </div>
                            <div class="row start-xs sequestions">
                                <a href="https://monero.stackexchange.com/questions/4277/why-does-monero-have-higher-transaction-fees-than-bitcoin">Pourquoi Monero a des frais de transactions supérieurs à Bitcoin ?</a>
                                <a href="https://monero.stackexchange.com/questions/4335/what-does-moneros-scaling-roadmap-look-like">A quoi ressemble la feuille de route de l'expension de Monero ?</a>
                                <a href="https://monero.stackexchange.com/questions/4302/what-cryptography-primitives-concepts-other-than-the-basic-ones-does-monero-us">Quels sont les principes et concepts de cryptographie, au delà des plus simples, que Monero utilise ?</a>
                                <a href="https://monero.stackexchange.com/questions/4242/how-to-extract-data-from-local-blockchain">Comment extraire des données depuis la chaîne de blocs stockée localement ?</a>
                                <a href="https://monero.stackexchange.com/questions/4377/hiding-tcp-traffic-for-monero-miners">Comment masquer le trafic TCP des mineurs Monero ?</a>
                            </div>  
                            <div class="row center-xs">
                                <p><a href="https://monero.stackexchange.com" class="btn-link btn-auto">Aller sur Stack Exchange</a></p>
                            </div>
                        </div>
               </div>
               <!-- end right one-third block-->
           </div>
        </section>

</div>
