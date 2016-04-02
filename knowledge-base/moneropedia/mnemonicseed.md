---
layout: moneropedia
entry: "Mnemonic Seed"
terms: ["mnemonic-seed", "mnemonic"]
summary: "a 13 or 25 word phrase used to backup a Monero account, available in a number of languages"
---

### The Basics

{{ page.summary | capitalize }}. This 25-word phrase (13 words in the case of MyMonero) has all the information needed to view and spend funds from a Monero @account.

### In-depth Information

In the official wallet, the mnemonic seed comprises 25 words with the last word being used as a checksum. Those words correspond to a 256-bit integer, which is the account's *private* @spend-key. The *private* @view-key is derived by hashing the private spend key with Keccak-256, producing a second 256-bit integer. The corresponding *public* keys are then derived from the private keys.

