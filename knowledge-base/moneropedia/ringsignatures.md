---
layout: moneropedia
entry: "Ring Signature"
terms: ["ring-signature", "ring-signatures"]
summary: "a group of cryptographic signatures with at least one real participant, but no way to tell which in the group is the real one as they all appear valid"
---

### The Basics
Ring signatures make sure individual transaction outputs on the blockchain can’t be traced. A ring signature is a group of cryptographic signatures with at least one real participant, but there is no way to tell which in the group is the real one as they all appear valid, while the key image prevents double spends. When sending a transaction, you select some random transaction outputs on the blockchain and mix those with your own “real coins”. The fact that this mixing can be done offline is a huge benefit for privacy. Mixing of coins is enforced across the network, making all coins “equal”. Because every transaction output has plausible deniability on their state (spent or unspent), there are no fungibility issues with monero

{{ page.summary | capitalize }}.
