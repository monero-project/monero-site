---
entry: "Routage en ail"
tags: ["kovri"]
terms: ["Garlic-Routing", "routage-en-ail"]
summary: "Technologie de routage telle qu'implémentée dans Kovri"
---

### Les Bases

Le terme de *@routage-en-ail* a une histoire aux interprétations variées. A l'heure actuelle, Monero définit le *@routage-en-ail* comme la méthode selon laquelle @Kovri et @I2P créent une surcouche réseau anonyme d'homologue sur Internet basé sur @messages.

Le @chiffrement-en-ail du @routage-en-ail est similaire au @chiffrement-par-couche du [routage en oignon](https://en.wikipedia.org/wiki/Onion_routing), il dissimule efficacement l'adresse IP de l'émetteur et sécurise les informations transmises depuis l'émetteur vers sa @destination (et vice-versa).

### Histoire

Sous forme écrite, le terme *@routage-en-ail* a été vu pour la première fois sous sa forme anglaise *@garlic-routing* début Juin 2000 dans [Free Haven Master's thesis](http://www.freehaven.net/papers.html) de Roger Dingledine's (Rubrique 8.1.1) comme dérivé du terme Routage en Onion.

Plus récemment en Octobre 2016, [#tor-dev](https://oftc.net/WebChat/) a offert un aperçu de la création du terme *@routage-en-ail* :

[Nick Mathewson](https://en.wikipedia.org/wiki/The_Tor_Project,_Inc):
>[I think that there was some attempt to come up with a plant whose structure resembled the 'leaky-pipe' topology of tor, but I don't believe we ever settled on one.]

[Roger Dingledine](https://en.wikipedia.org/wiki/Roger_Dingledine):
>during the free haven brainstorming, there was a moment where we described a routing mechanism, and somebody said "garlic routing!", and everybody laughed.
so we for sure thought we had invented the name, at the time.

*Remarque : l'utilisation des citations précédentes a été autorisée par Nick Mathewson and Roger Dingledine*

### Informations détaillées

En terme techniques, pour @Kovri et @I2P, le *@routage-en-ail* se traduit en l'un / tout ce qui suit :

- Le @chiffrement-par-couche (similaire au @chiffrement par couche du routage en oignon)
- Regrouper de multiples @messages ensemble (gousses d'ail)
- @Chiffrement ElGamal / AES

*Remarque : Bien que [Tor](https://torproject.org/) emploie @layered-encryption, Tor n'utilise pas ElGamal et n'est pas basé sur des messages.*

**Apprenez en plus sur le @chiffrement-en-ail.**

### Remarques

- En terme de routage en oignon / en ail, une autre manière de voir les @chiffrements par couche est de rempacer oignon / ail par une [poupée russe](https://fr.wikipedia.org/wiki/Poup%C3%A9e_russe) - avec chaque poupée extérieure / intérieure ayant un verrou et une clef publique pour la prochaine / précédente poupée
- Pour plus de détails technique sur le routage en ail, lisez l'article @I2P-Java sur le [Routage en ail](https://geti2p.net/fr/docs/how/garlic-routing)
