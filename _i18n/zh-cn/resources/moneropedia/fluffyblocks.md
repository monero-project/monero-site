---
summary: 'a way of saving bandwidth when sending new blocks around the network'
terms: ["fluffy blocks", "fluffyblocks"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### 基础知识

@区块由区块头和@交易组成。蓬松区块只包含一个区块头、一个交易索引列表以及接收该块的节点可能丢失的任何交易。这节省了带宽，因为节点可能已经知道区块中的大部分或所有交易，并且不需要再次发送它们。

### 另请参阅

* [BIP152
  “紧密区块传播”](https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki)

* [Xthin](https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/release/doc/bu-xthin-protocol.md)
