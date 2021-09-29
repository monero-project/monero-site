---
terms: ["Locally-unique-host"]
summary: "A host defined by you and resolved only by you"
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

### The Basics

A locally-unique host is a [FQDN](https://en.wikipedia.org/wiki/FQDN) defined by **you** and resolved only by you; similar to how a [hosts file](https://en.wikipedia.org/wiki/Hosts_(file)) is implemented. Not to be confused with @canonically-unique-host.

### In-depth information

You have the option to share your interpretation of how the host is resolved (e.g., `localhost` always resolves to `127.0.0.1`) but the resolution is not canonically enforced (e.g., someone else can map `localhost` to any arbitrary IP address).

Hosts in a public subscription can be considered @canonically-unique-host's within the I2P network but, ultimately, you are free to re-define them as you wish.

### Notes

- Monero primarily uses @canonically-unique-host resolution while I2P only uses @locally-unique-host resolution.

- I2P's and @Kovri's assigned top-level domain is currently `.i2p` and @Kovri intends to only process/use the `.i2p` [top-level domain](https://en.wikipedia.org/wiki/Top_level_domain)
