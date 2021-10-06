---
layout: post
title: What is Seraphis, and Why Should You Care?
summary: Seraphis is a next-generation transaction protocol abstraction, and a candidate for Monero's next tx protocol.
tags: [protocol, cryptography, research, community]
author: koe
---

{% t global.lang_tag %}

Seraphis is a 'transaction protocol abstraction' that I have been working on (WIP draft paper available [here](https://github.com/UkoeHB/Seraphis)). As an 'abstraction', Seraphis defines rules about how you can design a real (privacy-focused) @transaction protocol without specifying concrete algorithms. For example, @RingCT is another protocol abstraction (more or less), and there are different 'real' versions corresponding to signature schemes MLSAG and @CLSAG. Seraphis is a candidate model for Monero's next transaction protocol.

Privacy-focused transaction protocols have two core structural rules.

1. How are amounts represented?
2. How are key images (a.k.a. 'linking tags') constructed?

Ever since RingCT was introduced, transaction protocols have had 'hidden amounts' by adopting the Confidential Transactions technique (the CT in RingCT). Key images, however, have seen recent innovations.

[Triptych](https://eprint.iacr.org/2020/018) is a fourth-generation privacy-focused transaction protocol (following the Bitcoin, CryptoNote, and then RingCT models) with a new key image construction that permits 'one-of-many proofs' (which behave the same as ring signatures) with significantly better performance for large reference sets (large numbers of decoys) compared to what is possible with CryptoNote/RingCT-style key images. Note that, while the Triptych paper doesn't make a distinction between a 'transaction protocol' and a 'transaction protocol abstraction', Triptych represents a new abstract model following after RingCT.

Seraphis is, similarly, a fourth-generation privacy-focused transaction protocol (abstraction). Also like Triptych, it defines a new key image construction that permits efficient one-of-many proofs. However, there are a number of notable differences between Triptych and Seraphis.


### Triptych vs. Seraphis

#### Triptych
- Pros
    - Compatible with CryptoNote user @addresses.
- Cons
    - Multisig is [much harder](https://github.com/cypherstack/triptych-multisig) with Triptych-style key images than with either CryptoNote or Seraphis key images.

#### Seraphis

When thinking about a possible implementation...

- Pros
    - Multisig can be simple, comparable to multisig with MLSAG/CLSAG.
    - 'Membership proof delegation' is possible without leaking users' private keys. This potentially allows the following:
        - Transaction chaining (required for full-featured atomic swaps).
        - Offload membership proof construction to a third party, or a view-only @wallet (possibly useful for spend-only hardware wallets where it is expensive/difficult to implement complex algorithms).
        - Ignore 10-block lock time when transacting with a **trusted party** (i.e. allow them to make your tx's membership proofs and submit the tx to the network on your behalf).
    - Flexible multi-tier address schemes. The following features can be designed into a Seraphis user address scheme (there are at least 7 design variations, half of which require 3-key addresses [a 50% increase in address length over current addresses]):
        - View-only wallet that can see spent outputs. Especially helpful for multisig and hardware wallets, since in RingCT and CryptoNote it is necessary to constantly 'export key images'.
        - View-only wallet that can see received outputs but not amounts (and optionally also see spent outputs but not amounts). Useful for delegated chain scanning, where a third party or insecure machine scans for outputs, then sends them to a more secure 2nd tier view-only wallet (or spend wallet) that can read the amounts.
        - View-only wallet that can detect the Janus attack.
    - Modular core design. This will hopefully make it easier to upgrade different pieces of a Seraphis implementation as innovations appear (or maybe we will be stuck for the next 20 years... who knows?).
- Cons
    - Not compatible with CryptoNote user addresses. If Seraphis is used to upgrade a cryptocurrency that has CryptoNote-style addresses, then users would have to replace all their public CryptoNote-style addresses with Seraphis-style addresses (they would not need new private keys or wallets).


### What about Lelantus-Spark?

[Lelantus-Spark](https://eprint.iacr.org/2021/1173) is a transaction protocol (but not an abstraction - like how Triptych is not an abstraction) very similar to Seraphis, with the same pros/cons relative to Triptych. It was developed independently from Seraphis, for the most part.

Since they were developed at the same time, the question 'why Seraphis and not Lelantus-Spark?' can just as easily be stated 'why Lelantus-Spark and not Seraphis?' Practically speaking, the authors of Lelantus-Spark have focused their attention on design details appropriate for the Firo cryptocurrency, while my design recommendations for Seraphis (in the paper) have focused on details appropriate for a cryptocurrency that currently uses standard RingCT (like Monero or MobileCoin[^mobilecoin-footnote]).

[^mobilecoin-footnote]: I first conceived of Seraphis, and wrote the paper's first draft, while an employee at MobileCoin.

