---
layout: moneropedia
entry: "Payment ID"
terms: ["payment-ID", "payment-IDs"]
summary: "an optional flag that is added to identify transactions to merchants, consisting of 64 hexadecimal characters"
---

### The Basics

Payment ID is an **arbitrary** and **optional** transaction attachment that consists of 32 bytes (64 hexadecimal characters).

It is usually used to identify transactions to merchants and exchanges: Given the intrinsic privacy features built into Monero, where a single public address is usually used for incoming transactions, the Payment ID is especially useful to tie incoming payments with user accounts.

### Creating a Payment ID
One can create a Payment ID quickly from the command line using OpenSSL:

```# openssl rand 32 -hex```
