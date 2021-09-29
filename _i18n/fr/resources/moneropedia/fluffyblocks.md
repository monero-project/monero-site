---
summary: "une façon d'économiser de la bande passante lors de la transmission de nouveaux blocs sur le réseau"
terms: ["fluffy blocks", "fluffyblocks", "blocs légers", "blocs allégés"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Les Bases

Un @bloc est constitué d'une entête et de @transactions. Les blocs allégés
ne contiennent qu'une entête, une liste d'indices de transactions, et toute
transaction manquante au nœud recevant le bloc. Cela économise de la bande
passante car les nœuds peuvent déjà connaître la plupart des transactions du
blocs et non pas besoin qu'on leur transmette de nouveau.

### Voir également

* [BIP152 "Compact Block
  Relay"](https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki)

* [Xthin](https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/release/doc/bu-xthin-protocol.md)
