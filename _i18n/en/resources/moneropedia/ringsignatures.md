---
terms: ["ring-signature", "ring-signatures"]
summary: "a group of cryptographic signatures with at least one real participant, but no way to tell which in the group is the real one as they all appear valid"
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

### The Basics

In cryptography, a ring signature is a type of digital signature that can be performed by any member of a group of users that each have keys. Therefore, a message signed with a ring signature is endorsed by someone in a particular group of people. One of the security properties of a ring signature is that it should be computationally infeasible to determine *which* of the group members' keys was used to produce the signature.

For instance, a ring signature could be used to provide an anonymous signature from "a high-ranking White House official", without revealing which official signed the message. Ring signatures are right for this application because the anonymity of a ring signature cannot be revoked, and because the group for a ring signature can be improvised (requires no prior setup).

### Application to Monero

A ring signature makes use of your @account keys and a number of public keys (also known as outputs) pulled from the @blockchain using a triangular distribution method. Over the course of time, past outputs could be used multiple times to form possible signer participants. In a "ring" of possible signers, all ring members are equal and valid. There is no way an outside observer can tell which of the possible signers in a signature group belongs to your @account. So, ring signatures ensure that transaction outputs are untraceable. Moreover, there are no @fungibility issues with Monero given that every transaction output has plausible deniability (e.g. the network can not tell which outputs are spent or unspent).

To read how Monero gives you privacy by default (unlinkability), see @stealth-addresses.