---
layout: moneropedia
entry: "Base32 address"
tags: ["kovri"]
terms: ["base32-address", "base32-addresses"]
summary: "Base32 encoded hash of a Base64 address"
---

### The Basics

A Base32 address is a shortened, encoded version of an @I2P address. The Base32 address is the first part in a `.b32.i2p` hostname.

Example:

`i35yftyyb22xhcvghmev46t5knefur5v66qzekkajatwfwhyklvq.b32.i2p`

where

`i35yftyyb22xhcvghmev46t5knefur5v66qzekkajatwfwhyklvq` is the Base32 address.

### In-depth Information

Ultimately, a Base32 address is a 52 character [Base32 encoded representation](https://en.wikipedia.org/wiki/Base32) of the full SHA-256 hash of an @I2P @base64-address.

TODO(anonimal): finish (256 bits, etc.)

### Notes

**Note: `.b32` is not a sub-domain of `.i2p`**
