---
layout: moneropedia
entry: "Transactions"
terms: ["transaction", "transactions"]
summary: "a cryptographically signed container that details the transfer of Monero to a recipient (or recipients)"
---

### The Basics

{{ page.summary | capitalize }}.

A transaction's inputs are one or more recipient addresses with the corresponding amounts of funds to send to them, and a `mixin_count` parameter that specifies the amount of outputs the transaction will have mixed in. Higher amounts of `mixin_count` offer more anonymity, but that comes with a cost, since the transaction gets larger and therefore the transaction fees get higher as well.

A transaction is uniquely identified by a Transaction ID, which is usually represented as a 32-byte string (64 hexadecimal characters).

### In-depth Information
Every transaction involves two keys: a public spend key, and a public view key. The destination for an output in a transaction is actually a one-time public key computed from these two keys.

When the wallet is scanning for incoming transactions, every transaction is actually scanned to see if it is for "you". This only requires your private view key and your public spend key, and this check is immutable and cannot be faked. You cannot receive transactions and identify them without the corresponding private view key.

In order to spend the funds you have to compute a one-time private spend key for that output.
