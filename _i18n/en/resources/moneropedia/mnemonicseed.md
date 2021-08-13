---
terms: ["mnemonic-seed", "mnemonic"]
summary: "a 13, 14 or 25 word phrase used to backup a Monero wallet"
---

{% include disclaimer.html translated="no" translationOutdated="no" %}
### The Basics

A 13, 14 or 25 word phrase used to backup a Monero @wallet, available in a number of languages. This phrase contains all the information needed to backup and restore a wallet. You should never share it, because anyone that has access to it will be able to view and spend funds from the wallet.

### How to store the mnemonic seed safely

The most recommended way to store your mnemonic seed is to write two copies of it on a piece of paper, using a pen. Never store your mnemonic seed on a computer or any internet connected device. Don't store it on USB drives, email or cloud drives. Don't make screenshots or take photos.

By storing the mnemonic seed in a secure location, you have a complete backup of your private keys and hence all of your funds. Sharing this mnemonic seed is the equivalent of allowing another person complete access to your funds.

### Implementations

There are three types of Monero mnemonic seed:
- 25 words mnemonic seed (supported by all Monero wallets)
- 13 words mnemonic seed (supported by most Monero wallets)
- [14 words mnemonic seed with embedded restore height](https://github.com/tevador/monero-seed) (supported by Feather wallet).

In the official implementation, the mnemonic seed comprises 25 words with the last word being used as a checksum. Those words correspond to a 256-bit integer, which is the wallet's *private* @spend-key. The *private* @view-key is derived by hashing the private spend key with Keccak-256, producing a second 256-bit integer. The corresponding *public* keys are then derived from the private keys.
