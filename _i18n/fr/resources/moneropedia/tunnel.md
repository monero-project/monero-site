---
entry: "Tunnel"
tags: ["kovri"]
terms: ["Tunnel", "Tunnels"]
summary: "Chemins virtuels unidirectionnels qui transmettent les messages à travers une séquence de routeurs I2P définie"
---

### Les Bases

Lorsque vous communiquez sur @I2P (visitez un @site-eep ou utilisez un @service-en-ail), vous commencez par vous connecter à un homologue en utilisant les @transports puis vous construisez des *tunnels* virtuels. Ces tunnels virtuels sont des chemins temporaires et unidirectionnels qui transmettent l'information vers votre @destination à travers une séquence définie de routeurs @I2P. Les tunnels sont construits, puis utilisés, avec le @chiffrement-en-ail par couche et sont un mécanisme générique de transports de tous les @messages @I2NP.

Chaque homologue construit, au minimum, *deux* tunnels unidirectionnels : un pour le **trafic sortant** et un pour le **trafic entrant**. Ces tunnels sont classés soit en tant que **tunnels entrants** (où les @messages arrivent en provenance du créateur du tunnel) ou en **tunnels sortants** (ou le créateur du tunnel envoie des @messages). Ainsi, *quatre* tunnels sont nécessaires pour un seul @message aller-retour et sa réponse à votre @destination (deux pour vous, deux pour votre destination).

### Informations détaillées

Traduit depuis @I2P-Java :

>
Au sein d'I2P, les @messages sont transmis dans une direction à travers un tunnel virtuel d'homologues, en utilisant n'importe quel moyen disponible pour transmettre le @message au saut suivant. Les messages arrivent à la passerelle du tunnel, sont regroupés et/ou fragmentés en @messages de @tunnel à taille fixe, et sont transmis au prochain saut du tunnel, qui traite et vérifie la validité du @message et l'envoie au saut suivant, et ainsi de suite, jusqu'à ce qu'il atteigne le point de terminaison du @tunnel. Ce point de terminaison prend le message groupé par la passerelle et le transmet comme demandé, soit à un autre routeur, à un autre tunnel sur un autre routeur, ou localement.

>
Les tunnels fonctionnent tous de la même façon, mais peuvent être classés en deux groupes différents : les tunnels entrants et les tunnels sortants. Les tunnels entrants ont une passerelle non approuvé qui transmet les messages jusqu'au créateur du tunnel, qui sert de point de terminaison du tunnel. Pour les tunnels sortants, le créateur du tunnel sert de passerelle, transmettant les messages vers le point de terminaison distant.

>
Le créateur du tunnel choisit précisément quels homologues vont participer au tunnel, et fournit à chacun les données de configuration nécessaires. Ils peuvent avoir n'importe quel nombre de sauts. C'est dans le but de rendre difficile aux participants et tierces parties de déterminer la longueur d'un tunnel, ou même pour des participants connivents de déterminer s'ils font ou non partie du même tunnel (sauf en cas de connivence entre homologues côte à côte dans le tunnel).

### Remarque

Traduit depuis @I2P-Java :

>
@I2P est intrinsèquement un réseau de commutation de paquet, même avec ces tunnels, permettant de tirer parti de multiples tunnels fonctionnant en parallèle en augmentant la résilience et la répartition de charge. Même si les tunnels au sein d'I2P se rapprochent d'un réseau à commutation de circuits, tout dans I2P est strictement basé sur les messages : les tunnels sont principalement des astuces de comptabilité qui aident à organiser la transmission des messages. Aucune hypothèse n'est faite quant à la fiabilité ou l'ordonnancement des messages, et le soin des retransmissions est laissé aux couches supérieures (p.ex. la librairie de diffusion de la couche client d'I2P).

### Documentation

Pour les spécifications et la documentation détaillée, rendez-vous sur les pages [Tunnel-Routing](https://geti2p.net/fr/docs/how/tunnel-routing) et [Tunnel-Implementation](https://geti2p.net/en/docs/tunnels/implementation).
