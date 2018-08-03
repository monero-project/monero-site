---
entry: "Garlic-Encryption"
tags: ["kovri"]
terms: ["Garlic-Encryption", "Layered-Encryption"]
summary: "Layered encryption as implemented in Kovri / I2P"
---

### The Basics

@garlic-encryption is @I2P's implementation of @message based @layered-encryption (similar to flow-based [Onion-Routing](https://en.wikipedia.org/wiki/Onion_routing)).

By @encrypting @messages in layers, this allows a @message to be routed through a sequence of proxies without allowing the proxies (or any intermediaries) to read the contents of the @message. @Layered-Encryption is a fundamental feature in @Kovri, @I2P, and [Tor](https://torproject.org) and is the cornerstone for securing anonymity within these overlay-networks.

### In-depth information

For @garlic-encryption, the primary difference between @Kovri/@I2P and Tor is:

- @Kovri/@I2P bundles multiple @messages together to form garlic "cloves"
  - any number of messages can be contained in a "clove" instead of *only* a single message
- @Kovri/@I2P uses [ElGamal](https://en.wikipedia.org/wiki/ElGamal)/[AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) @encryption for @messages and @transports

### Notes

For details, see @garlic-routing.
