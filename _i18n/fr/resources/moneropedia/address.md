---
layout: moneropedia
entry: "Address"
terms: ["address", "addresses"]
summary: "either an alias, such as donate.getmonero.org, or a set of 95 characters starting with a 4"
---

### The Basics

When you send Monero to someone you only need one piece of information, and that is their Monero address. A *raw* Monero address is a set of 95 characters starting with a '4'. The Monero donation address, for instance, is <span class="long-term">44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A</span>.

Because those addresses are long and complex you will often encounter an @OpenAlias address instead. For example, Monero donations can be sent to <span class="long-term">donate@getmonero.org</span> or <span class="long-term">donate.getmonero.org</span>.

If you would like to get an @OpenAlias address of your own then there is some information on the [OpenAlias page](/knowledge-base/openalias).

### Integrated address

An integrated address is an address combined with an encrypted 64-bit @payment-ID. A raw integrated address is 106 characters long.

### In-depth Information

The address is actually the concatenation, in Base58 format, of the *public* @spend-key and the *public* @view-key, prefixed with the network byte (the number 18 for Monero) and suffixed with the first four bytes of the Keccac-256 hash of the whole string (used as a checksum).
