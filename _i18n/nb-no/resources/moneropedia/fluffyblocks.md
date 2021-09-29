---
summary: 'en måte å lagre båndbredde når man sender nye blokker rundt om i nettverket'
terms: ["fluffy blocks", "fluffyblocks", "fluffy blokk", "fluffy blokker"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

En @blokk er laget av en topptekst og @transaksjoner. Fluffy blocks
inneholder kun en topptekst, en liste over transaksjonsindekser og
eventuelle transaksjoner som noden som mottar blokken mangler. Dette sparer
båndbredde fordi noder kanskje allerede vet om de fleste eller alle
transaksjonene i blokkene, og de trenger ikke å sendes på nytt.

### Se også

* [BIP152 "Compact Block
  Relay"](https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki)

* [Xthin](https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/release/doc/bu-xthin-protocol.md)
