---
terms: ["block", "blocks"]
summary: "a container of transactions, a sequence of which forms a blockchain"
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

### The Basics

A block is a container of @transactions, with a new block being added to the @blockchain once every 2 minutes (see constant `DIFFICULTY_TARGET_V2` defined as 120 seconds), on average.

Blocks also contain a special type of transaction, the @coinbase-transaction, which add newly created Monero to the network.

Blocks are created through the process of @mining, and the @node that successfully mines the block then broadcasts it to each of the @nodes connected to it, who subsequently re-broadcast the block until the entire Monero network has received it.

Fake or bad blocks generally cannot be created, as @nodes that receive blocks always verify the @transactions they contain against a set of consensus rules that all nodes adhere to, including validating the cryptographic @signatures on each transaction.
