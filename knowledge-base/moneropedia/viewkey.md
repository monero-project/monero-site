---
layout: moneropedia
entry: "View Key"
terms: ["view-key", "view-keys"]
summary: "one of two sets of private and public cryptographic keys that each account has, with the private view key required to view all transactions related to the account"
---

### The Basics

Monero features an opaque blockchain (with an explicit allowance system called the viewkey), in sharp contrast with transparent blockchain used by any other cryptocurrency not based on @CryptoNote. Thus, Monero is said to be "private, optionally transparent". 

Every Monero address has a private viewkey which can be shared.  By sharing a viewkey a person is allowing access to view every incoming transaction for that address.  However, outgoing transactions can not currently be reliably viewed. Therefore the balance of a Monero address as shown via a viewkey should not be relied upon.



{{ page.summary | capitalize }}.
