---
tags: ["kovri"]
terms: ["Destination", "Destinations"]
summary: "Une adresse sur le réseau qui sert comme point de terminaison (soit local, soit distant)."
---

### Les Bases

Une @destination est l'adresse @interne-au-réseau @I2P du point de terminaison final auquel vous essayé de vous connecter (exemple : un site web, service, ou nœud Monero @I2P). Cela peut aussi inclure une *destination locale* à laquelle d'*autres* homologues doivent se connecter afin de prendre contact pour communiquer (de la même manière que sur le @réseau-en-clair, votre adresse IP est donnée à un site web lorsque vous vous connectez, de sorte qu'il sache *où* renvoyer les informations).

### Informations détaillées

Une destination @I2P peut être encodée en utilisant une @adresse-base32 ou une @adresse-base64. La plupart des utilisateurs ne s'intéresseront qu'aux @adresses-base32 ou aux noms d'hôtes `.i2p`, tandis que, en interne, @Kovri et le @carnet-d'adresses @I2P utilisent des @adresses-base64. Finalement, toutes les @destinations dans @I2P sont des clefs de 516 octets (ou plus) :

`256-byte public key + 128-byte signing key + a null certificate = 516 bytes in Base64 representation`

Remarque : les certificats ne sont pas utilisés pour le moment, mais s'il l'étaient, les clefs seraient plus longues.
