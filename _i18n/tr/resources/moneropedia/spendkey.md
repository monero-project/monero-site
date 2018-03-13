---
layout: moneropedia
entry: "Harcama Anahtarı"
terms: ["harcama-anahtarı", "harcama-anahtarları"]
summary: "one of the two pairs of private and public cryptographic keys that each account has, with the *private* spend key used to spend any funds in the account"
---

### The Basics

{{ page.summary | capitalize }}.

### In-depth Information

The *private* spend key is a 256-bit integer that is used to sign Monero transactions. With the current deterministic key derivation method of the official wallet, the private spend key is also an alternate representation of the @mnemonic-seed. It can be used to derive all other account keys.
