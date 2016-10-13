---
layout: moneropedia
entry: "Canonically-unique host"
tags: ["kovri"]
terms: ["canonically-unique-host"]
summary: "A host that is canonically resolved to an address or set of addresses"
---

### The Basics

A canonically-unique host is a [FQDN](https://en.wikipedia.org/wiki/FQDN) that will canonically resolve to a designated address or set of addresses. Not to be confused with a @locally-unique-host.

### In-depth information

A canonically-unique host is defined by remote authoritative sources; usually through [DNS](https://en.wikipedia.org/wiki/DNS). When resolving a peer's hostname, you will most likely use an external source for resolution unless have the following implemented:

- a database file similar to a [hosts file](https://en.wikipedia.org/wiki/etc/hosts)
- an internal-network resolver (which eventually pulls from external sources)

### Notes

- Monero primarily uses @canonically-unique-host resolution while @I2P only uses @locally-unique-host resolution.
- @I2P's and @Kovri's assigned top-level domain is currently `.i2p` and @Kovri intends to only process/use the `.i2p` [top-level domain](https://en.wikipedia.org/wiki/Top_level_domain)
