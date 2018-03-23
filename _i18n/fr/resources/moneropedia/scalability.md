---
layout: moneropedia
entry: "Scalability"
terms: ["scalability"]
summary: "Growth potential of Monero, resources required, and methods of increasing efficiency"
---

### The Basics

Monero has no hardcoded maximum block size, which means that unlike Bitcoin it does not have a 1 MB block size limit preventing scaling. However, a block reward penalty mechanism is built into the protocol to avoid a too excessive block size increase: The new block's size (NBS) is compared to the median size M100 of the last 100 blocks. If NBS>M100, the block reward gets reduced in quadratic dependency of how much NBS exceeds M100. E.g. if NBS is [10%, 50%, 80%, 100%] greater than M100, the nominal block reward gets reduced by [1%, 25%, 64%, 100%]. Generally, blocks greater than 2*M100 are not allowed, and blocks <= 60kB are always free of any block reward penalties.
