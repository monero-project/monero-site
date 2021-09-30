---
summary: 'an optional flag that is added to identify transactions to merchants, consisting of 64 hexadecimal characters'
terms: ["payment-ID", "payment-IDs"]
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

*Note:* Long Payment IDs have been removed since release 0.15; it's not possible to use them anymore. More info in the [blog post]({{ site.baseurl_root }}/2019/06/04/Long-Payment-ID-Deprecation.html) that announced their deprecation.

### The Basics

Payment ID is an **arbitrary** and **optional** transaction attachment that
consists of 32 bytes (64 hexadecimal characters) or 8 bytes (in the case of
integrated addresses).

The Payment ID is usually used to identify transactions to merchants and
exchanges: Given the intrinsic privacy features built into Monero, where a
single public address is usually used for incoming transactions, the Payment
ID is especially useful to tie incoming payments with user accounts.

### Compact Payment IDs and Integrated Addresses

Since the 0.9 Hydrogen Helix version, Payment IDs can be encrypted and
embedded in a payment address. The Payment IDs of this type should be
64-bits and are encrypted with a random one-time key known only to the
sender and receiver.

### Creating a Payment ID

It is recommended to use the official wallet's `integrated_address` command
to automatically generate Integrated Addresses that contain Compact Payment
IDs. If you want to use the command line, you can generate Payment IDs as
follows:

Creating a compact Payment ID for an Integrated Address:

```# openssl rand -hex 8```

Creating an old-style Payment ID:

```# openssl rand -hex 32```
