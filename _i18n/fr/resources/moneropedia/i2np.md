---
entry: "I2NP"
tags: ["kovri"]
terms: ["I2NP"]
summary: "Protocole réseau I2P (I2P Network Protocol) : le mécanisme par lequel des messages I2NP sont envoyés sur le réseau I2P"
---

### Les Bases

Traduit depuis @I2P-Java :

>
@I2NP gère le routage et le mélange des messages entre les routeurs, de même que la sélection des transports à utiliser lors de la communication avec un pair qui a en commun de multiples transports supportés

### Informations détaillées

Traduit depuis @I2P-Java :

>
les @messages @I2NP (@I2P Network Protocol - Protocol Réseau @I2P) peuvent être utilisés pour des @messages point-à-point d'un seul saut, routeur à routeur. En @chiffrant et emballant les @messages dans d'autres @messages, ils peuvent être transmits de manière sécurisé à travers plusieurs sauts jusqu'à la @destination finale. @I2NP ne spécifie et ne requiert aucune couche de @transport particulière mais requière au moins l'utilisation d'un @transport.

>
Lorsqu'une @destination souhaite envoyer un message à une autre @destination, elle fournie à son routeur local la structure de @destination ainsi que les octets bruts du message en à envoyer. Le routeur détermine alors où l'envoyer, le distribue à travers des @tunnels sortant, en indiquant le point de terminaison auquel l'envoyer ainsi que le @tunnel entrant approprié, où il est de nouveau transmis à ce point de terminaison de @tunnel et rendu disponible pour réception sur la cible.

### Remarque

Apprenez en plu à propos du [protocole](https://geti2p.net/fr/docs/protocol/i2np) et des [spécifications](https://geti2p.net/spec/i2np) @I2NP.
