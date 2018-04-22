---
entry: "Chiffrement"
tags: ["kovri"]
terms: ["encryption", "encrypted", "encrypting", "decryption", "decrypted", "decrypting", "chiffrement", "chiffré", "chiffrée", "chiffrés", "chiffrées", "chiffrer", "chiffrant", "déchiffrement", "déchiffré", "déchiffrée", "déchiffrés", "déchiffrées", "déchiffrer", "déchiffrant"]
summary: "Le processus d'encodage de messages ou d'informations de sorte que seule les parties autorisés puissent les décoder et les lire."
---

### Les Bases

Extrait de [Chiffrement](https://fr.wikipedia.org/wiki/Chiffrement) :

>
Le chiffrement ou cryptage est un procédé de cryptographie grâce auquel on souhaite rendre la compréhension d'un document impossible à toute personne qui n'a pas la clé de (dé)chiffrement. Ce principe est généralement lié au principe d'accès conditionnel.

### Information détaillées

Extrait de [Chiffrement](https://fr.wikipedia.org/wiki/Chiffrement) :

>
 Bien que le chiffrement puisse rendre secret le sens d'un document, d'autres techniques cryptographiques sont nécessaires pour communiquer de façon sûre. Pour vérifier l'intégrité ou l'authenticité d'un document, on utilise respectivement un Message Authentication Code (MAC) ou une signature numérique. On peut aussi prendre en considération l'analyse de trafic dont la communication peut faire l'objet, puisque les motifs provenant de la présence de communications peuvent faire l'objet d'une reconnaissance de motifs. Pour rendre secrète la présence de communications, on utilise la stéganographie.

>
La sécurité d'un système de chiffrement doit reposer sur le secret de la clé de chiffrement et non sur celui de l'algorithme. Le principe de Kerckhoffs suppose en effet que l'ennemi (ou la personne qui veut déchiffrer le message codé) connaisse l'algorithme utilisé.

### Kovri

@Kovri implémente différents types de chiffrements pour *au moins* 4 capacités essentielles :

- @réensemencement pour amorce
- @Routage-en-ail : trois niveau de chiffrement (@chiffrement-en-ail) sont utilisé pour vérifier la distribution sécurisée des @messages au destinataire ou homologue de @destination
- Chiffrement de @Tunnel : les messages en ail sont envoyés à travers un @tunnel et chiffrés par la passerelle de ce @tunnel vers le point de terminaison du @tunnel
- Une couche de @Transport chiffrée empêche la capacité à déchiffrer un @messages sur la [couche liaison](https://fr.wikipedia.org/wiki/Mod%C3%A8le_OSI)

Pour plus de détails sur les types de chiffrement et les @signatures cryptographiques utilisez dans @Kovri et @I2P, consultez la page [Cryptographie](https://geti2p.net/spec/cryptography) d'@I2P-Java.
