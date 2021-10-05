---
summary: 'a way to hide the amount sent in a Monero transaction'
terms: ["ringCT", "ring-CT"]
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

### The Basics

RingCT, short for Ring Confidential Transactions, is how transaction amounts
are hidden in Monero.

Ring CT was implemented in block #1220516 in January 2017.  After September
2017, this feature became mandatory for all transactions on the network.

RingCT introduces an improved version of @ring-signatures called "A
Multi-layered Linkable Spontaneous Anonymous Group signature", which allows
for hidden amounts, origins and destinations of transactions with reasonable
efficiency and verifiable, trustless coin generation.

For more information, please read the creator Shen Noether's paper
[here](https://eprint.iacr.org/2015/1098).
