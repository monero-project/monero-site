---
summary: "Un hôte qui est résolu canoniquement en une adresse ou un groupe d'adresses"
terms: ["Canonically-unique-host", "hôte-canonique-unique", "hôtes-canoniques-uniques"]
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

### Les Bases

Un hôte canonique unique est un [FQDN](https://en.wikipedia.org/wiki/FQDN)
qui sera résolu canoniquement en une adresse désignée ou un groupe
d'adresses. A ne pas confondre avec un @hôte-unique-localement.

### Informations détaillées

Un hôte canonique unique est défini par des sources autoritaires distantes,
communément à travers
[DNS](https://fr.wikipedia.org/wiki/Domain_Name_System). Lors de la
résolution du nom d'hôte d'un correspondant, vous utiliserez certainement
une source externe pour la résolution, à moins que vous n'ayez ceci
d'implémenté :

- un fichier de bases de données similaire à un [fichier
hosts](https://en.wikipedia.org/wiki/etc/hosts)  - un résolveur interne (qui
éventuellement récupèrera des données depuis des sources externes)

### Remarques

- Monero utilise en premier lieu la résolution de @hôte-canonique-unique
alors que I2P utilise uniquement la résolution d'@hôte-unique-localement.  -
le domaine de premier niveau auto-attribué de I2P et @Kovri est actuellement
`.i2p` et @Kovri se destine à n'utiliser et ne traiter que le [domaine de
premier niveau](https://fr.wikipedia.org/wiki/Top_level_domain) `.i2p`.
