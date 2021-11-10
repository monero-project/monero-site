---
terms: ["ring-size"]
summary: "total number of possible signers in a ring signature"
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

### The Basics

Ring size refers to the total number of signers in a @ring-signature. Before release [0.13.0 "Beryllium Bullet"]({{ site.baseurl }}/2018/10/11/monero-0.13.0-released.html), it was possible to select an arbitrary number of signers. With release 0.13, it was decided to set this number to 11 to enforce transaction uniformity.

`Ring size (11) = foreign outputs (10) + your output (1)`

Foreign outputs are typically called "decoys," and the number of decoys was previously called the "mixin" size.