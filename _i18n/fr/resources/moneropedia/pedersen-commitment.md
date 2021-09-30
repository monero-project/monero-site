---
summary: "Les engagements de Pedersen sont des algorythmes de cryptographie qui permettent à un prouveur de s'engager sur une certaine valeur sans la révéler ou pouvoir la modifier."
terms: ["commitments", "commitment", "pedersen", "pedersen-commitment", "pedersen-commitments", "engagement", "engagements", "engagement-de-pedersen", "engagements-de-pedersen"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Les Bases

Les engagements de Pedersen sont des algorythmes de cryptographie qui
permettent à un prouveur de s'engager sur une certaine valeur sans la
révéler ou pouvoir la modifier.

Lorsque vous dépensez des Moneroj, la valeur des entrées que vous dépensez
et la valeur des sorties que vous envoyez sont chiffrés et opaques pour tout
le monde sauf le destinataire de chacune de ces sorties. Les engagements de
Pedersen vous permettent d'envoyer des Moneroj sans révéler la valeur des
transactions. Les engagements de Pedersen permettent également aux gens de
vérifier que les transactions sur la chaîne de blocs sont valides et ne
créent pas de Moneroj à partir de rien.

### Ce que cela signifie

Tant que les montants de sortie chiffrés créés, qui comprennent une sortie
pour le destinataire et une sortie de monnaie retournant à l'expéditeur, et
que les frais de transaction non chiffrés sont égaux à la somme des entrées
qui sont dépensées, il s'agit d'une transaction légitime et on peut
confirmer qu'il n'y a pas de création de Moneroj à partir de rien.

Les engagements de Pedersen signifient que les sommes peuvent être vérifiées
comme étant égales, mais la valeur en Moneroj de chacune des sommes et les
valeurs individuelles en Moneroj des entrées et sorties sont
indéterminables. Les engagements de Pedersen signifient également que même
le ratio d'une entrée à une autre ou d'une sortie à une autre est
indéterminable.

L'entrée exacte étant dépensée n'est pas clair, car les signatures de cercle
listent à la fois les entrées réelles étant dépensées et les entrées de
leurre, donc vous ne savez pas vraiment quelles entrées les engagements de
Pedersen doivent additionner. Ce n'est pas un problème car les
@transactions-confidentielles-de-cercle des signatures de cercle doivent
uniquement prouver que pour une combinaison d'entrées les sorties sont
égales à la somme de ces entrées. Pour des raisons mathématiques, c'est
impossible à forger.

### Informations détaillées

Voir le document [Transactions confidentielles de
cercle](https://eprint.iacr.org/2015/1098.pdf) de Shen Noether du
Laboratoire de Recheche Monero.
