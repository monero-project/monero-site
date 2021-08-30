---
terms: ["address", "addresses"]
summary: "either an alias, such as donate.getmonero.org, or a set of 95 characters starting with a 4"
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

### The Basics

When you send Monero to someone you only need one piece of information, and that is their Monero address. A *raw* Monero address is a set of 95 characters starting with a '4'. The Monero donation address, for instance, is 888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H.

Because those addresses are long and complex, you will often encounter an @OpenAlias address instead. For example, Monero donations can be sent to donate@getmonero.org or donate.getmonero.org.

If you would like to get an @OpenAlias address of your own then there is some information on the [OpenAlias page](https://openalias.org/).

### Integrated address

An integrated address is an address combined with an encrypted 64-bit @payment-ID. A raw integrated address is 106 characters long.

### In-depth Information

The address is actually the concatenation, in Base58 format, of the *public* @spend-key and the *public* @view-key, prefixed with the network byte (the number 18 for Monero) and suffixed with the first four bytes of the Keccac-256 hash of the whole string (used as a checksum).
