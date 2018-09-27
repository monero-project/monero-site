---
tags: ["kovri"]
terms: ["NTCP"]
summary: "NIO-Based TCP (TCP basé sur des E/S non-bloquantes) : l'un des transports de Kovri"
---

### Les Bases

*NIO-Based TCP (TCP basé sur des E/S non-bloquantes)* est l'un des deux @transports chiffrés de @Kovri.

Tout comme @USS, la *principale* raison d'être de @NTCP est de transmettre de manière sécurisé les messages @I2NP @internes-au-réseaumais, contrairement à @USS, @NTCP fonctionne exclusivement sur du [TCP](https://fr.wikipedia.org/wiki/Transmission_Control_Protocol) chiffré.

### Informations détaillées

- Passe sûr les messages @I2NP individuel (à la fois Standard et de synchronisation temporelle) après :
   - l'établissement de TCP
   - la finalisation de la séquence d'établissement
- Utilise les @chiffrements suivants :
   - [Diffie-Hellman](https://fr.wikipedia.org/wiki/%C3%89change_de_cl%C3%A9s_Diffie-Hellman) 2048 bits
   - [AES-256](https://fr.wikipedia.org/wiki/Advanced_Encryption_Standard)/[CBC](https://fr.wikipedia.org/wiki/Mode_d%27op%C3%A9ration_(cryptographie))
- La séquence d'établissement suit les *états* suivants :
   - Pré-établissement
   - Établissement
   - Post-établissement ou "Établit"
- Utilise de la @base-de-données-réseau :
   - Nom du transport : NTCP
   - Hôte : IP (IPv4 ou IPv6) ou nom d'hôte (adresses IPv6 raccourcies (avec "::") autorisées)
   - Port : 1024 - 65535

### Remarque

Pour plus de détails, lisez [NTCP](https://geti2p.net/fr/docs/transport/ntcp) de @I2P-Java.
