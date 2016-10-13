---
layout: moneropedia
entry: "Garlic Routing"
tags: ["kovri"]
terms: ["garlic-routing"]
summary: "Routing technology as implemented in Kovri/I2P"
---

### The Basics

The term *Garlic Routing* has a diverse history of varying interpretations.

As it currently stands, Monero defines *Garlic Routing* as the method in which @Kovri and @I2P create a message-based anonymous overlay network of internet peers.

### History

In written form, the term *Garlic Routing* can be seen as early as June of 2000 in Roger Dingledine's [Free Haven Master's thesis](http://www.freehaven.net/papers.html) (Section 8.1.1) as derived from the term [Onion Routing](http://www.onion-router.net/).

As recent as October of 2016, [#tor-dev](https://oftc.net/WebChat/) has offered insight into the creation of the term *Garlic Routing*:

Nick Mathewson:
>[I think that there was some attempt to come up with a plant whose structure resembled the 'leaky-pipe' topology of tor, but I don't believe we ever settled on one.]

Roger Dingledine:
>during the free haven brainstorming, there was a moment where we described a routing mechanism, and somebody said "garlic routing!", and everybody laughed.
so we for sure thought we had invented the name, at the time.

### In-depth Information

In technical terms, for @Kovri and @I2P, *Garlic Routing* translates to any/all of the following:

1. Layered Encryption
2. Bundling multiple messages together (garlic cloves)
3. ElGamal/AES Encryption

Note: as seen in [Tor](https://torproject.org/), *Onion Routing* also uses layered encryption but does not use ElGamal and is not message-based.

### Notes

- Permission to use the aforementioned quotes granted by Nick Mathewson and Roger Dingledine
- For more technical details, read [Garlic Routing](https://geti2p.net/en/docs/how/garlic-routing)
