<div class="container description">
<p>Monero ne s'engage pas seulement à créer une monnaie fongible, mais également à continuer la recherche dans le domaine de la confidentialité financière qu'impliquent les cryptomonnaies. Vous trouverez ci-dessous le résultat du travail de notre Laboratoire de Recherche Monero, d'autres rapports s'y ajouterons.</p>
</div>

<section class="container">
            <div class="row">
                <!-- left two-thirds block-->
                <div class="left two-thirds col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <div class="info-block research-paper">
                        <div class="row center-xs">
                            <div class="col"><h2>Rapports du Laboratoire de Recherche Monero</h2></div>
                        </div>
                        <div class="tab">
                              <input id="tab-one" type="checkbox" name="tabs" class="accordion" checked="checked">
                              <label for="tab-one" class="accordion">MRL-0001: Rapport des réaction de la chaine à la traçabilité dans CryptoNote 2.0</label>
                              <div class="tab-content">
                                <p><strong>Résumé :</strong> Ce bulletin de recherche décrit une attaque plausible sur un système anonyme basé
                                    sur les signatures de cercle. Nous nous appuyons sur le protocol de cryptomonnaie
                                    CryptoNote 2.0 apparemment publié par Nicolas van Saberhagen en 2012. Il a déjà
                                    été démontré que l'intraçabilité obscurcissant une pair de clefs à usage
                                    unique peut être dépendant de l'intraçabilité de toutes les clefs utilisées
                                    dans la composition de cette signature de cercle. Cela rend possible des réactions
                                    en chaine de la traçabilité entre les signatures de cercle, pouvant causer une
                                    réduction drastique de l'intraçabilité de l'ensemble du réseau si les paramètres
                                    sont piètrement choisis et si un attaquant possède un pourcentage suffisant du
                                    réseau. Les signatures sont cependant toujours à usage unique, et une telle
                                    attaque ne permettrait pas nécessairement de violer l'anonymat des utilisateurs.
                                    Cependant, une telle attaque pourrait potentiellement réduire la résistance dont
                                    fait preuve CryptoNote contre l'analyse de la chaîne de blocs. Ce bulletin de recherche
                                    n'a pas fait l'objet d'un examen par des tiers, et ne reflète que les résultats
                                    d'investigations internes.
                                    <br>
                                    <br>
                                    <a target="_blank" rel="noreferrer noopener" href="https://lab.getmonero.org/pubs/MRL-0001.pdf">Lire le rapport complet (en Anglais)</a>
                               </p>
                              </div>
                            </div>
                            <div class="tab">
                              <input id="tab-two" type="checkbox" name="tabs" class="accordion">
                              <label for="tab-two" class="accordion">MRL-0002: Contrefaçon par l'exploitation de l'arbre de Merkle dans des monnaies virtuelles employant le protocole CryptoNote.</label>
                              <div class="tab-content">
                                <p><strong>Résumé :</strong> Le 4 Septembre 2014, une nouvelle et inhabituelle attaque a été lancé contre
                                    le réseau de cryptomonnaie Monero. Cette attaque a segmentée le réseau en deux
                                    sous-ensembles distincts qui refusaient d'accepter les transactions légitimes
                                    de l'autre sous-ensemble. Cela causa une myriade d'effet, qui n'ont pour le
                                    moment pas tous été identifiés. L'attaquant a disposé d'une courte fenêtre
                                    temporelle pendant laquelle une forme de contrefaçon pu, par exemple, avoir lieux.
                                    Ce bulletin de recherche décrit les lacunes du code de référence CryptoNote ayant
                                    permis cette attaque, décrit la solution initialement mise en avant par Rafal
                                    Freeman de Tigusoft.pl et ultérieurement par l'équipe CryptoNote, décrit les
                                    correctifs actuels du code de base de Monero et donne des détails concrets sur
                                    ce que le bloc fautif a causé au réseau. Ce bulletin de recherche
                                    n'a pas fait l'objet d'un examen par des tiers, et ne reflète que les résultats
                                    d'investigations internes.<br>
                                    <br>
                                    <a target="_blank" rel="noreferrer noopener" href="https://lab.getmonero.org/pubs/MRL-0002.pdf">Lire le rapport complet (en Anglais)</a></p>

                              </div>
                            </div>
                            <div class="tab">
                              <input id="tab-three" type="checkbox" name="tabs" class="accordion">
                              <label for="tab-three" class="accordion">MRL-0003: Monero n'est pas si mystérieux</label>
                              <div class="tab-content">
                                <p><strong>Introduction :</strong> Récemment, quelques vagues de frayeurs concernant le code source et le protocole
                                    CryptoNote on circulé sur internet fondé sur le fait qu'il s'agisse d'un protocole
                                    plus complexe que, par exemple Bitcoin. Ce rapport tentera d'éclaircir ces méconnaissances
                                    et avec un peu de chance retirera une partie du mystère entourant les signatures de
                                    cercle de Monero. Nous commencerons par comparer les calculs mathématiques impliqués
                                    dans les signatures de cercle CryptoNote (comme décrit dans [CN]) à ceux de [FS], sur
                                    lesquelles est basé CryptoNote. Après cela, nous comparerons les calculs mathématiques
                                    des signatures de cercle à ce qui se trouve actuellement dans la base de code de CryptoNote.<br>
                                    <br>
                                    <a target="_blank" rel="noreferrer noopener" href="https://lab.getmonero.org/pubs/MRL-0003.pdf">Lire le rapport complet (en Anglais)</a></p>
                              </div>
                            </div>
                            <div class="tab">
                              <input id="tab-four" type="checkbox" name="tabs" class="accordion">
                              <label for="tab-four" class="accordion">MRL-0004: Amélioration de l'obscurcissement dans le protocole CryptoNote</label>
                              <div class="tab-content">
                                <p><strong>Résumé :</strong> Nous avons identifier plusieurs attaques d'analyse de la chaîne de blocs pouvant
                                    dégrader l'intraçabilité du protocol CryptoNote 2.0. Nous analysons de
                                    possibles solutions, discutons de leurs avantages et inconvénients et
                                    recommandons des améliorations du protocole Monero qui devraient fournir une
                                    résistance à l'analyse de la chaîne de blocs de la cryptomonnaie sur le long terme.
                                    Nos recommandations d'améliorations incluent une politique minimale protocolaire
                                    de mixage des entrées minimale de
                                    n
                                    = 2
                                    sortie distantes par signature de cercle, une augmentation protocolaire de
                                    cette valeur à
                                    n
                                    = 4
                                    au bout de deux ans et une valeur par défaut dans le portefeuille à
                                    n
                                    = 4
                                    dans l'intervalle. Nous recommandons également une méthode d'émission des sorties
                                    Monero "à la torrent". Nous discutons aussi d'une méthode de sélection du mixage
                                    des entrées non-uniforme et dépendante du temps pour atténuer les autres formes
                                    d'analyse de la chaîne de blocs identifiés ici, mais nous ne faisons aucune
                                    recommandations formelles de son implémentation pour diverses raisons. Nous y
                                    détaillons par ailleurs les répercussions découlant de ces améliorations. Ce
                                    bulletin de recherche n'a pas fait l'objet d'un examen par des tiers, et ne
                                    reflète que les résultats d'investigations internes.<br>
                                    <br>
                                    <a target="_blank" rel="noreferrer noopener" href="https://lab.getmonero.org/pubs/MRL-0004.pdf">Lire le rapport complet (en Anglais)</a></p>
                              </div>
                            </div>
                            <div class="tab">
                              <input id="tab-five" type="checkbox" name="tabs" class="accordion">
                              <label for="tab-five" class="accordion">MRL-0005: Ring Signature Confidential Transactions</label>
                              <div class="tab-content">
                                <p><strong>Résumé :</strong>
                                    Cet article présente une méthode de masquage du montant des transactions dans
                                    la cryptomonnaie anonyme fortement décentralisée Monero. De la même manière
                                    que Bitcoin, Monero est une cryptomonnaie basée sur un processus "d'extraction minière"
                                    basé sur une preuve de travail. Le protocole originel de Monero était basé sur
                                    CryptoNote , qui utilise les signatures de cercle et des clefs à usage unique
                                    pour masquer l'origine et la destination des transactions. Récemment, une
                                    technique utilisant un mécanisme déterministe pour masquer le montant d'une
                                    transaction a été étudié et implémenté par Gregory Maxwell, l'un des développeur
                                    principaux de Bitcoin. Dans cette article, nous exposons un nouveau type de
                                    signatures de cercle, une Signature de Groupe Associable Anonyme et Spontané à
                                    Plusieurs Niveaux permettant de masquer les montants, les origines et les
                                    destinations des transactions avec une efficacité raisonnable et une génération
                                    de pièces de monnaie vérifiable et fiable. Quelques extensions protocolaires
                                    sont fournies, telles que la preuve à divulgation nulle de connaissance de
                                    Schnorr, et les multi-signatures en cercle. L'auteur voudrait faire remarquer
                                    que les premières ébauches ont été publiées dans la communauté Monero et sur le
                                    canal IRC de recherche bitcoin. Des brouillons de chaîne de blocs sont disponibles
                                    dans [14], montrant que ce travail a débuté à l'été 2015 et s'est achevé début
                                    octobre 2015. Une impression électronique est également disponible sur
                                    http://eprint.iacr.org/2015/1098
                                    .<br>
                                    <br>
                                    <a href="https://lab.getmonero.org/pubs/MRL-0005.pdf" target="_blank" rel="noreferrer noopener">Lire le rapport complet (en Anglais)</a></p>
                              </div>
                            </div>
                          </div>
                    </div>
                <!-- end left two-thirds block-->

                <!-- right one-third block-->
                <div class="right one-third col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="info-block">
                        <div class="row center-xs">
                            <div class="col">
                                <h2>Livres Blancs CryptoNote</h2>
                            </div>

                        </div>
<div markdown="1">

[Livre Blanc Cryptonote](https://cryptonote.org/whitepaper.pdf)

Voici le document originel de CryptoNote écrit par l'équipe CryptoNote. En le lisant, vous comprendrez comment l'algorithme CryptoNote fonctionne d'une manière générale.

[Livre Blanc Commenté](https://downloads.getmonero.org/whitepaper_annotated.pdf)

Le Laboratoire de Recherche Monero a publié une version commentée du Livre Blanc CryptoNote. The Monero Research Lab released an annotated version of the cryptonote whitepaper. Il s'agit en quelque sorte d'un examen informel des allégations qui sont faites lignes après lignes dans le livre blanc. Il explique également certains des concepts les plus compliqués dans des termes relativement simples.

[Examen du Livre Blanc de Brandon Goodell](https://downloads.getmonero.org/whitepaper_review.pdf)

Ce document est une revue formelle par Brandon Goodell, chercheur au MRL, du document CryptoNote originel. Il analyse en détail les allégations et les calculs mathématiques présentés dans le document CryptoNote.

</div>
                    </div>
                </div>
                <!-- end right one-third block-->
            </div>
</section>
