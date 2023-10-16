---
summary: 'soit un alias, comme donate.getmonero.org, ou un lot de 95 caractères commençant par un 4'
terms: ["address", "addresses", "adresse", "adresses"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Les Bases

When you send Monero to someone you only need one piece of information, and
that is their Monero address. A *raw* Monero address is a set of 95
characters starting with a '4' or an '8'. The Monero donation address, for
instance, is
888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H.

Comme ces adresses sont longues et complexes, vous rencontrerez souvent une
adresse @OpenAlias à la place. Par exemple, les dons à Monero peuvent être
envoyés à donate@getmonero.org ou donate.getmonero.org.

Si vous voulez disposer de votre propre adresse @OpenAlias, vous trouverez
des informations sur la [page OpenAlias](https://openalias.org/).

### Adresse intégrée

Une adresse intégrée est une adresse combinée avec un @ID-de-paiement
64-bits. Une adresse intégrée brute contient 106 caractères.

### Informations détaillées

L'adresse est en fait la concaténation, au format Base58, de la
@clef-de-dépense *publique* et de la @clef-d'audit *publique*, préfixée avec
le type de réseau (le nombre 18 pour Monero) et suffixée avec les quatre
premiers octets du hachage Keccac-256 de la chaîne complète (utilisée comme
somme de contrôle).
