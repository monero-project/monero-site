---
layout: moneropedia
entry: "Stealth Address"
terms: ["stealth-address", "stealth-addresses"]
summary: "automatic one-time addresses for every transaction"
---

### The Basics

Stealth addresses are an important part of Monero's inherent privacy. They allow and require the sender to create random one-time addresses for every @transaction on behalf of the recipient. The recipient can publish just one address, yet have all of his/her incoming payments go to unique addresses on the @blockchain, where they cannot be linked back to either the recipient's published address or any other transactions' addresses. By using stealth addresses, only the sender and receiver can determine where a payment was sent.

When you create a Monero wallet, you’ll get a private viewkey and a private spendkey. The spendkey is needed for making payments, the viewkey is used to “claim” incoming transactions. Both the public spendkey and viewkey are used to build your monero address. You can have a “watch only” wallet that only uses the viewkey. This feature can be used for accounting or auditing purposes. You can decide who can see your balance by handing out your viewkey. Monero is private by default and optionally transparent!

To read how Monero prevents tracking history (untraceability), see @ring-signatures.
