---
terms: ["fluffy blocks", "fluffyblocks"]
summary: "a way of saving bandwidth when sending new blocks around the network"
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

### The Basics

A @block is made up of a header and @transactions. Fluffy Blocks only contain
a header, a list of transaction indices, and any transactions that the node
recieving the block may be missing. This saves bandwidth because nodes might
already know about most or all of the transactions in the block and they don't
need to be sent them again.

### See Also

* [BIP152 "Compact Block Relay"](https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki)

* [Xthin](https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/release/doc/bu-xthin-protocol.md)
