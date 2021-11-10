---
summary: 'Pedersen commitments are cryptographic algorithms that allow a prover to commit to a certain value without revealing it or being able to change it'
terms: ["commitments", "commitment", "pedersen", "pedersen-commitment", "pedersen-commitments"]
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

### The Basics

Pedersen commitments are cryptographic algorithms that allow a prover to
commit to a certain value without revealing it or being able to change it.

When you spend Monero, the value of the inputs that you are spending and the
value of the outputs you are sending are encrypted and opaque to everyone
except the recipient of each of those outputs. Pedersen commitments allow
you to send Monero without revealing the value of the transactions. Pedersen
commitments also make it possible for people to verify that transactions on
the blockchain are valid and not creating Monero out of thin air.

### What It Means

As long as the encrypted output amounts created, which include an output for
the recipient and a change output back to the sender, and the unencrypted
transaction fee is equal to the sum of the inputs that are being spent, it
is a legitimate transaction and can be confirmed to not be creating Monero
out of thin air.

Pedersen commitments mean that the sums can be verified as being equal, but
the Monero value of each of the sums and the Monero value of the inputs and
outputs individually are undeterminable. Pedersen commitments also mean that
even the ratio of one input to another, or one output to another is
undeterminable.

It is unclear which inputs are really being spent as the ring signature
lists both the real inputs being spent and decoy inputs, therefore you don't
actually know which input Pedersen commitments need to be summed. That's
okay, because the @RingCT ring signature only has to prove that for one
combination of the inputs the outputs are equal to the sum of the
inputs. For mathematical reasons, this is impossible to forge.

### In-depth Information

See information in [Ring Confidential Transactions
paper](https://eprint.iacr.org/2015/1098.pdf) by Shen Noether of the Monero
Research Lab.
