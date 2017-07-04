---
layout: moneropedia
entry: "Ring Signature"
terms: ["ring-signature", "ring-signatures"]
summary: "a group of cryptographic signatures with at least one real participant, but no way to tell which in the group is the real one as they all appear valid"
---

### The Basics
A ring signature is a type of group @signature that makes use of your @account keys and a number of public keys (also known as outputs) pulled from the @blockchain using a triangular distribution method. Over the course of time, past outputs could be used multiple times to form possible signer participants. In a "ring" of possible signers, all ring members are equal and valid. There is no way an outside observer can tell which of the possible signers in a signature group belongs to your @account. So, ring signatures ensure that transaction outputs are untraceable. Moreover, there are no fungibility issues with Monero given that every transaction output has plausible deniability (e.g. the network can not tell which outputs are spent or unspent).

To read how Monero gives you privacy by default (unlinkability), see @stealth-addresses.