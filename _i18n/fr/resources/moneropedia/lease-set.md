---
entry: "Lot-de-baux"
tags: ["kovri"]
terms: ["LeaseSet", "LeaseSets", "lot-de-baux", "lots-de-baux"]
summary: "Contient tous les baux actuellement autorisés pour une destination I2P spécifique"
---

### Les Bases

Un Lot de baux contient un lot de @baux autorisés (et d'autres informations liés) pour une @destination spécifique.

### Informations détaillées

Un lot de baux contient :

- Tous les baux actuellement autorisés pour une @destination spécifique
- La clef publique avec laquelle les messages en ail sont chiffrés (voir @routage-en-ail)
- La clef de signature publique qui peut être utilisée pour révoquer cette version spécifique de la structure

Le lot de baux est l'une des deux structures stockées dans la @base-de-donnée-réseau (l'autre étant les @infos-des-routeurs), et verrouillé dans le SHA256 de la @destination en question.

### Remarque

Pour plus de détail, lisez le [lot de baux](https://geti2p.net/fr/docs/how/network-database#leaseSet) d'@I2P-Java.
