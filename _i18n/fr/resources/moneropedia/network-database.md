---
entry: "Base de données réseau"
tags: ["kovri"]
terms: ["Network-Database", "base-de-données-réseau"]
summary: "Une base de données distribuée qui contient les informations de routeurs nécessaire pour que le réseau reste intact"
---

### Les Bases

Une @base-de-données-réseau est une [base de données distribuée](https://fr.wikipedia.org/wiki/Base_de_donn%C3%A9es_distribu%C3%A9e) qui contient les informations des routeurs que les pairs doivent utiliser afin que le réseau reste intact.

### Informations détaillées

Traduit depuis @I2P-Java:

>
La @base-de-données-réseau d'@IEP est une base de données distribuée spécialisée qui contient uniquement deux types de données : les informations de contact des routeurs (@Infos-des-routeurs) et les informations de contact des @destinations (@Lots-de-baux). Chaque donnée est signée par la partie appropriée et vérifiée par tous ceux qui l'utilisent ou la conservent. De plus, la donnée contient une information de durée de vie, permettant aux entrées désuètes d'êtres supprimées, aux nouvelles entrées de remplacer les anciennes, et une protection vis-à-vis de certaines classes d'attaques.

>
La @base-de-données-réseau est distribué par une technique simple appelée "@floodfill", selon laquelle une portions de tous les routeurs, appelés "routeurs @floodfill", maintiennent et distribuent la base de données.

### Notes

Lisez [Base de Données](https://geti2p.net/fr/docs/how/network-database) pour plus de détails.
