---
terms: ["stealth-address", "stealth-addresses"]
summary: "automatic one-time addresses for every transaction"
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

### The Basics

Stealth addresses are an important part of Monero's inherent privacy. They allow and require the sender to create random one-time addresses for every @transaction on behalf of the recipient. The recipient can publish just one address, yet have all of his/her incoming payments go to unique addresses on the @blockchain, where they cannot be linked back to either the recipient's published address or any other transactions' addresses. By using stealth addresses, only the sender and receiver can determine where a payment was sent.

When you create a Monero account you’ll have a private @view-key, a private @spend-key, and a Public Address. The @spend-key is used to send payments, the @view-key is used to display incoming transactions destined for your account, and the Public Address is for receiving payments. Both the @spend-key and @view-key are used to build your Monero address. You can have a “watch only” wallet that only uses the @view-key. This feature can be used for accounting or auditing purposes but is currently unreliable due to the inability to track outgoing transactions. You can decide who can see your Monero balance by sharing your @view-key. Monero is private by default and optionally semi-transparent!

When using the Monero Wallet all this is handled by the software.  Sending Monero is as easy as entering the destination address, the amount, and pressing Send.  To recieve Monero, simply provide the sender your Public Address.

To learn how Monero prevents tracking history (untraceability), see @ring-signatures.
