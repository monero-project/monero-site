---
terms: ["OpenAlias"]
summary: "a standard that allows you to use an email or domain syntax to pay someone instead of an address, eg. donate@getmonero.org or donate.getmonero.org"
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

### The Basics

The Monero Core Team released a standard called OpenAlias which permits much more human-readable addresses and "squares" the Zooko's triangle. OpenAlias can be used for any cryptocurrency and is already implemented in Monero, Bitcoin (in latest Electrum versions) and HyperStake.

OpenAlias seeks to provide a way to simplify aliasing amidst a rapidly shifting technology climate. Users are trying to cross the bridge to private and cryptographically secure infrastructure and systems, but many of them have just barely started remembering the email addresses of their friends and family.

As part of the ongoing development of the Monero cryptocurrency project, we asked ourselves: how can we simplify payments for users unfamiliar with cryptocurrency? Monero stealth addresses are at least 95 characters long - memorizing them is not an option, and asking someone to send a payment to <95-character-string> is only going to lead to confusion.

At its most basic, OpenAlias is a TXT DNS record on a FQDN (fully qualified domain name). By combining this with DNS-related technologies we have created an aliasing standard that is extensible for developers, intuitive and familiar for users, and can interoperate with both centralized and decentralized domain systems.

A standard that allows you to use an email or domain syntax to pay someone instead of an address, eg. donate@getmonero.org or donate.getmonero.org.

More information can be found on the [OpenAlias website](https://openalias.org)
