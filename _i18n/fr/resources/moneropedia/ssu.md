---
entry: "USS"
tags: ["kovri"]
terms: ["SSU", "USS"]
summary: "UDP Semi-fiable Sécurisé : l'un des deux transports de Kovri"
---

### Les Bases

*UDP Semi-fiable Sécurisé* est l'un des deux @transports chiffrés de @Kovri.

Similaire à @NTCP, le *premier* rôle d'@USS est de transmettre les messages @I2NP @interne-au-réseau de manière sécurisé à travers des @tunnels, mais contrairement à @NTCP, @USS fonctionne uniquement sur de l'[UDP](https://fr.wikipedia.org/wiki/User_Datagram_Protocol) chiffré.

### Informations détaillées

- Comme @NTCP, @USS est un transport de donné point-à-point, orienté connexion.
- Désigné *semi-fiable* cas @USS va retransmettre à plusieurs reprises les messages *non acquittés* (jusqu'à une certaine limite, puis les abandonner)
- @USS fournit également plusieurs services uniques (en plus de sa fonction de couche de @transport) :
  - Détection d'IP (inspection locale ou avec [test d'homologue](https://geti2p.net/fr/docs/transport/ssu#peerTesting))
  - [NAT](https://en.wikipedia.org/wiki/Network_address_translation) traversal (en utilisant des [introducteurs](https://geti2p.net/fr/docs/transport/ssu#introduction))
  - États de [pare-feu](https://fr.wikipedia.org/wiki/Pare-feu_(informatique)) et, si implémenté, @USS peut notifier @NTCP d'un changement d'adresse externe ou d'état de pare-feu

### Remarque

Pour plus de détails, lisez [USS](https://geti2p.net/fr/docs/transport/ssu) de @I2P-Java
