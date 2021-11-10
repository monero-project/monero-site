---
summary: "L'une des deux paires de clefs cryptographiques publiques et privées dont disposent chaque comptes, la clef *privée* de dépense permettant de dépensez tous les fonds du compte"
terms: ["spend-key", "spend-keys", "clef-de-dépense", "clefs-de-dépense"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Les Bases

L'une des deux paires de clefs cryptographiques publiques et privées dont
disposent chaque comptes, la clef *privée* de dépense permettant de dépensez
tous les fonds du compte.

### Informations détaillées

La clef de dépense *privée* est un entier de 256 bits qui est utilisé pour
signer les transactions Monero. Avec l'actuelle méthode déterministe de
dérivation de clef du portefeuille officiel, la clef privée de dépense est
également une représentation alternative de la @phrase-mnémonique. Elle peut
être utilisée pour dériver toutes les autres clefs du compte.
