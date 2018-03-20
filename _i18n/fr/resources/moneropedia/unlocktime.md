---
layout: moneropedia
entry: "Transaction Unlock Time"
terms: ["unlock-time"]
summary: "a special transaction where the recipient can only spend the funds after a future date, as set by the sender"
---

### The Basics

{{ page.summary | capitalize }}.

Unlock time allows you to send a transaction to someone, such that they can not spend it until after a certain number of blocks, or until a certain time.

Note that this works differently than Bitcoin's [nLockTime](https://en.bitcoin.it/wiki/NLockTime), in which the transaction is not valid until the given time.
