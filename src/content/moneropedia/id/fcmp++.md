---
summary: "Monero's transaction proving system"
title: FCMP++
terms:
  - fcmp
  - fcmp-plus-plus
  - full-chain-membership-proofs
---

### The Basics

**FCMP++** (Full-Chain Membership Proofs + Spend Authorization + Linkability) is
the system Monero uses to prove that @transaction inputs are valid and unspent
without revealing which outputs are actually being spent.

Each FCMP++ input proves it does spend **one output from the whole set of
eligible outputs on the @blockchain**. The proof itself does not leak any
information about which specific output is real.

From a chain observer’s perspective, it is not possible to determine the real
input.

### What It Improves

Compared to @CLSAG:

- The **anonymity set is the entire set of Monero transactions in history**, not
  a ring of 16.
- **Double-spend detection** still works using linkable tags that cannot be tied
  back to a concrete on-chain output.
- **Spend authorization** is cleanly separated: the proof shows the spender
  controls the key to _some_ valid output in the global set, but never which
  one.

### New Capabilities

FCMP++ also enables new functionality:

- **Transaction chaining** - safely spending outputs from still-unconfirmed
  transactions, useful for advanced protocols and potential layer-2 designs.
- **Outgoing view keys** - optional keys that let a chosen auditor or watch-only
  device see both incoming and outgoing transfers, without granting any spend
  rights.
- **Stronger long-term privacy** - the design ensures that transactions do not
  expose information that future analysis can use to recover the real inputs.
