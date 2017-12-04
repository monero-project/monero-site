---
layout: moneropedia
entry: "Destination"
tags: ["kovri"]
terms: ["Destination", "Destinations"]
summary: "A in-net address that serves as a final endpoint (either local or remote)"
---

### The Basics

A @destination is the @I2P @in-net address of the final endpoint you are trying to connect to (example: an @I2P website, service, or Monero node). This can also include a *local destination* of which *other* peers need to connect to in order to make contact for communication (similar to how, in @clearnet, your IP address is given to a website when you connect so it knows *where* to send the information back to).

### In-depth Information

An @I2P destination can be encoded into a @base32-address or @base64-address. Most users will only care about @base32-addresses or a `.i2p` hostname while, internally, @Kovri / @I2P @address-book uses @base64-addresses. Ultimately, all @destinations in @I2P are 516-byte (or longer) keys:

`256-byte public key + 128-byte signing key + a null certificate = 516 bytes in Base64 representation`

Note: certificates are not used now but, if they were, the keys would be longer.
