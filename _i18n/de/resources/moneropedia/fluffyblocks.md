---
summary: 'Eine Möglichkeit, beim Senden neuer Blöcke Datenübertragungsraten zu verringern'
terms: ["fluffy blocks", "fluffyblocks", "Fluffy-Blocks"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

Ein @Block besteht aus einem Header und @Transaktionen. Fluffy-Blocks
enthalten lediglich einen Header, eine Liste von Transaktionsindizes und
jegliche Transaktionen, welche dem Node, der den Block empfängt, eventuell
fehlen. Dies spart Bandbreite, weil Nodes möglicherweise bereits über die
meisten Transaktionen innerhalb des Blocks Bescheid wissen und ein erneutes
Senden dieser deshalb nicht nötig ist.

### Siehe auch

* [BIP152 "Compact Block
  Relay"](https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki)

* [Xthin](https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/release/doc/bu-xthin-protocol.md)
