---
layout: moneropedia
entry: "Garlic Routing"
tags: ["kovri"]
terms: ["Garlic-Routing"]
summary: "Routing technology as implemented in Kovri"
---

### The Basics

The term *@garlic-routing* has a diverse history of varying interpretations. As it currently stands, Monero defines *@garlic-routing* as the method in which @Kovri and @I2P create a @message-based anonymous overlay network of Internet peers.

The @Garlic-Encryption of @Garlic-Routing is similar to the @Layered-Encryption of [Onion Routing](https://en.wikipedia.org/wiki/Onion_routing) and effectively conceals the IP address of the sender and secures information sent from the sender to its @destination (and vice-versa).

### History

In written form, the term *@garlic-routing* can be seen as early as June of 2000 in Roger Dingledine's [Free Haven Master's thesis](http://www.freehaven.net/papers.html) (Section 8.1.1) as derived from the term Onion Routing.

As recent as October of 2016, [#tor-dev](https://oftc.net/WebChat/) has offered insight into the creation of the term *@garlic-routing*:

[Nick Mathewson](https://en.wikipedia.org/wiki/The_Tor_Project,_Inc):
>[I think that there was some attempt to come up with a plant whose structure resembled the 'leaky-pipe' topology of tor, but I don't believe we ever settled on one.]

[Roger Dingledine](https://en.wikipedia.org/wiki/Roger_Dingledine):
>during the free haven brainstorming, there was a moment where we described a routing mechanism, and somebody said "garlic routing!", and everybody laughed.
so we for sure thought we had invented the name, at the time.

*Note: permission to use the aforementioned quotes was granted by Nick Mathewson and Roger Dingledine*

### In-depth Information

In technical terms, for @Kovri and @I2P, *@garlic-routing* translates to any/all of the following:

- @Layered-Encryption (similar to the @layered-encryption in Onion Routing)
- Bundling multiple @messages together (garlic cloves)
- ElGamal/AES @encryption

*Note: though [Tor](https://torproject.org/) uses @layered-encryption, Tor does not use ElGamal and is not message-based.*

**Read more in @garlic-encryption.**

### Notes

- In terms of Onion/Garlic Routing, another way to envision layered @encryption is by replacing the onion/garlic with a [Matryoshka doll](https://en.wikipedia.org/wiki/Matryoshka_doll) - with each outer/inner doll having a lock and public key to the next/previous doll
- For more technical details on Garlic Routing, read the @Java-I2P entry on [Garlic Routing](https://geti2p.net/en/docs/how/garlic-routing)
