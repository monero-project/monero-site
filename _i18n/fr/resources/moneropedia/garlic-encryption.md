---
entry: "Chiffrement en ail"
tags: ["kovri"]
terms: ["Garlic-Encryption", "Layered-Encryption", "chiffrement-en-ail", "chiffrement-par-couche"]
summary: "Chiffrement par couche tel qu'implémenté dans Kovri / I2P"
---

### Les Bases

Le @chiffrement-en-ail est l'implémentation d'@I2P du @chiffrement-par-couche basé sur @messages (similaire au [routage en oignon](https://en.wikipedia.org/wiki/Onion_routing).

En @chiffrant les @messages en couches, cela permet à un @message d'être routé à travers une séquence de mandataires sans leur permettre (ni à aucun intermédiaire) de lire le contenu du @message. Le @chiffrement-par-couche est une fonctionnalité fondamentale de @Kovri, @I2P et [Tor](https://torproject.org), et est la pierre angulaire garantissant l'anonymat au sein de ces surcouches réseaux.

### Information détaillées

Pour le @chiffrement-en-ail, les principales différences entre @Kovri / @I2P et tor sont :

- @Kovri / @I2P groupe plusieurs @messages ensemble pour former des "gousses" d'ail
  - autant de messages que nécessaires peuvent être concaténés dans une "gousse" au lieu de *seulement* un seul message
- @Kovri / @I2P utilise le @chiffrement [ElGamal](https://fr.wikipedia.org/wiki/Cryptosyst%C3%A8me_de_ElGamal) et [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) pour les @messages et les @transports

### Remarque

Pourplus de détail, voir @routage-en-ail.
