---
layout: moneropedia
entry: "Payment ID"
terms: ["payment-ID", "payment-IDs"]
summary: "an optional flag that is added to identify transactions to merchants, consisting of 64 hexadecimal characters"
---

### The Basics

Payment ID is an **arbitrary** and **optional** transaction attachment that consists of 32 bytes (64 hexadecimal characters) or 8 bytes (in the case of integrated addresses).

The Payment ID is usually used to identify transactions to merchants and exchanges: Given the intrinsic privacy features built into Monero, where a single public address is usually used for incoming transactions, the Payment ID is especially useful to tie incoming payments with user accounts.

### Compact Payment ID's and Integrated Addresses

Since the 0.9 Hydrogen Helix version, the Payment IDs can be encrypted and embedded in a payment address. The payment ID's of this type should be 64-bits.

### Creating a Payment ID
One can create a Payment ID quickly from the command line using OpenSSL:

```# openssl rand 32 -hex```

or

```# openssl rand 8 -hex``` to get a PaymentID for an Integrated Address.

