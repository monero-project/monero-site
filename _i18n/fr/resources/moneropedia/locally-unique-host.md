---
tags: ["kovri"]
terms: ["Locally-unique-host", "hôte-unique-localement"]
summary: "Un hôte que vous avez définit et que vous seul pouvez résoudre"
---

### Les Bases

<<<<<<< HEAD
A locally-unique host is a [FQDN](https://en.wikipedia.org/wiki/FQDN) defined by **you** and resolved only by you; similar to how a [hosts file](https://en.wikipedia.org/wiki/Hosts_(file)) is implemented. Not to be confused with @canonically-unique-host.
=======
Un hôte unique localement est un [FQDN](https://fr.wikipedia.org/wiki/FQDN) que **vous** définissez et que vous seul pouvez résoudre, de manière analogue à l'implémentation d'un [fichier hosts](https://fr.wikipedia.org/wiki/Hosts). A ne pas confondre avec un @hôte-canonique-unique.
>>>>>>> Ongoing Moneropedia French Translation

### Informations détaillées

Vous avez la possibilité de partager votre interprétation du mécanisme de résolution d'un hôte (p.ex. `localhost` est toujours résolu en `127.0.0.1`) mais la résolution n'est pas appliquée de manière canonique (p.ex. quelqu'un d'autre pourrait faire correspondre `localhost` à une adresse IP arbitraire).

Les hôtes des souscriptions publiques peuvent être considérés comme des @hôtes-canoniques-uniques au sein du réseau @I2P, mais finalement vous êtes libre de les redéfinir selon vos désirs.

### Remarques

- Monero utilise principalement la résolution d'@hôtes-canoniques-uniques alors que @I2P utilise uniquement la résolution d'@hôte-unique-localement.
- Le domaine de premier niveau actuel d'@I2P et @Kovri est `.i2p` et @Kovri se destine à traiter / utiliser uniquement le [domaine de premier niveau](https://fr.wikipedia.org/wiki/Domaine_de_premier_niveau) `.i2p`.
