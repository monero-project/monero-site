---
terms: ["transaction", "transactions"]
summary: "a cryptographically signed container that details the transfer of Monero to a recipient (or recipients)"
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

### The Basics

A cryptographically signed container that details the transfer of Monero to a recipient (or recipients).

The parameters of a transaction contain one or more recipient addresses with corresponding amounts of funds and a @ring-size parameter that specifies the number outputs bound to the transaction. The more outputs that are used, a higher degree of obfuscation is possible, but that comes with a cost. Since a transaction gets larger with more outputs, the transaction fee will be higher.

It is possible to form a transaction offline, which offers additional privacy benefits.

A transaction can be uniquely identified with the use of an optional Transaction ID, which is usually represented by a 32-byte string (64 hexadecimal characters).

### In-depth Information

Every transaction involves two keys: a public @spend-key, and a public @view-key. The destination for an output in a transaction is actually a one-time public key computed from these two keys.

When a wallet is scanning for incoming transactions, every transaction is scanned to see if it is for "you". This only requires your private view key and your public spend key, and this check is immutable and cannot be faked. You cannot receive transactions and identify them without a corresponding private view key.

In order to spend the funds you have to compute a one-time private spend key for that output.  This is almost always done automatically by the Monero Wallet software.
