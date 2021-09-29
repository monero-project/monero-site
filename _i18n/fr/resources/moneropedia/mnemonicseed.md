---
summary: 'Une phrase de 13 ou 25 mots utilisé pour sauvegarder votre compte Monero, disponible dans une quantité de langues'
terms: ["mnemonic-seed", "mnemonic", "phrase-mnémonique", "mnémonique"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Les Bases

Une phrase de 13 ou 25 mots utilisé pour sauvegarder votre compte Monero,
disponible dans une quantité de langues. Cette phrase de 25 mots (13 mots
dans le cas de MyMonero) a toutes les informations nécessaire pour voir et
dépenser des fonds depuis un @compte Monero.

### Informations détaillées

Dans le portefeuille officiel, la phrase mnémonique est composée de 25 mots
dont le dernier est utilisé en tant que somme de contrôle. Ces mots
correspondent à un entier de 256 bits, qui est la @clef-de-dépense *privée*
du compte. La @clef-d'audit privée est dérivée par hachage de la clef de
dépense via Keccak-256, produisant un second entier de 256 bits. Les clefs
*publiques* correspondantes sont alors dérivées des clefs privées.

En concervant la phrase mnémonique de 25 mots en lieu sûr, vous avez une
sauvegarde de vos clefs privée et donc de tous vos Moneroj. Partager ces 25
mots clefs est équivalent à donner l'accès à vos fonds à une autre personne.

Il n'est pas recommandé de conserver plus que vous ne voudriez perdre dans
un "portefeuille chaud", c'est à dire un portefeuille actuellement ou qui a
un jour été connecté à Internet ou chargé dans n'importe quel équipement qui
a été ou pourrait être connecté à l'avenir à Internet ou à une quelconque
source indigne de confiance !

En créant un portefeuille froid ou un @portefeuille-papier vous pouvez
conserver vos Moneroj en toute sécurité.
