---
tags: ["kovri"]
terms: ["Message", "Messages"]
summary: "Le mécanisme à travers lequel les informations circulent au sein d'I2P"
---

### Les Bases

Les *Messages* (qui existent au dessus de la couche @transport) contiennent différents types d'informations qui sont necessaries au réseau, mais surtout, tout ce que vous voyez, faites, envoyez ou recevez sera reçu et envoyé sous la forme de *messages*.

Il y a essentiellement deux types de *messages* dans @I2P :

- les messages de @tunnels
- les messages @I2NP

En substance : les *messages de @tunnel* **contiennent** des **fragments de message** @I2NP qui sont [réassemblés](https://geti2p.net/fr/docs/tunnels/implementation) à certains point du chemin du @tunnel.

### Informations détaillées

Les messages @I2NP ont un lien étroit avec les @messages de @tunnels au point qu'il est facile de confondre les termes @messages en lisant les spécifications @I2P-Java :

>
1. D'abord, la passerelle du tunnel accumule une quantité de messages I2NP et les prétraite dans des messages de tunnels pour distribution.
2. Puis, cette passerelle chiffre les données prétraitées et les transmet au premier saut.
3. Ce pair, et les participants suivant du tunnel, déballent une couche du chiffrement, vérifient qu'il ne s'agit pas d'un doublon, et transmettent le message au pair suivant.
4. Finalement, les messages du tunnel arrivent au point de terminaison où les messages I2NP originellement empaquetés par la passerelle sont réassemblés et transmis comme demandé.

### Remarques

- Les @messages @I2NP doivent être fragmentés car ils ont une taille variable (de 0 à environt 64 Ko) et les @messages de @tunnels ont une taille fixe (environ 1 Ko).
- Pour plus de détaille et les spécifications, rendez-vous sur les [spécifications I2NP](https://geti2p.net/spec/i2np) et les [spécifications de message de tunnel](https://geti2p.net/spec/tunnel-message)
