---
summary: 'Un moyen de masquer le montant envoyé dans une transaction Monero'
terms: ["ringCT", "ring-CT", "transactions-confidentielles-de-cercle", "transaction-confidentielle-de-cercle"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Les Bases

RingCT, abréviation de Transactions confidentielles de cercle (*Ring
Confidential Transactions*), est la méthode grâce à laquelle les montants
sont cachés dans Monero.

Les transactions confidentielles de cercle ont été implémentées dans le
block #1220516 en Janvier 2017. Après Septembre 2017, cette fonctionnalité
est devenue obligatoire pour toutes les transactions sur le réseau.

Les transactions confidentielles de cercle introduisent une version
améliorée des @signatures-de-cercle appelées "Une signature de groupe
anonyme Spontanée multi-couches liable" (*A Multi-layered Linkable
Spontaneous Anonymous Group signature*), qui permet de masquer les montants,
les origines et les destinations des transactions avec une efficacité
suffisante et une génération de pièces contrôlable et sans nécessité de
confiance.

Pour plus d'informations, lisez le document du créateur Shen Noether
[ici](https://eprint.iacr.org/2015/1098).
