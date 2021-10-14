---
summary: "L'une des deux paires de clefs cryptographiques publiques et privées dont disposent chaque compte, la clef privée d'audit étant nécessaire pour voir toutes les transactions liées à un compte."
terms: [\"view-key\", \"view-keys\", \"clef-d'audit\", \"clefs-d'audit\"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Les Bases

L'une des deux paires de clefs cryptographiques publiques et privées dont
disposent chaque compte, la clef privée d'audit étant nécessaire pour voir
toutes les transactions liées à un compte.

Monero se caractérise par une chaîne de blocs opaque (avec un système
d'autorisation spécifique nommé @clef-d'audit), contrastant fortement des
chaînes de blocs transparentes utilisées par n'importe quelle autre
cryptomonnaie qui ne serait pas basée sur CryptoNote. Ainsi, Monero est dite
"privée, optionnellement transparente".

Chaque adresse Monero a une clef privée d'audit qui peut être partagée. En
partageant une clef d'audit une personne permet d'accéder à toutes les
transactions entrantes pour cette adresse. Cependant, les transactions
sortantes ne peuvent pas être consultées de manière fiable depuis juin
2017. C'est pourquoi il ne faudrait pas se fier au solde d'une adresse
Monero tel qu'indiqué avec une clef d'audit.
