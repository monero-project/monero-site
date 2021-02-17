---
layout: post
title: Bulletproofs+ in Monero
summary: Bulletproofs+ code is completed and ready for a security audit
tags: [community]
author: Sarang Noether, Ph.D.
image: /blog/assets/bulletproofs+/bulletproofs+.png
---

<img src="{{ page.image }}" alt="Bulletproofs+ logo"/>

## Summary

Code is now available for Bulletproofs+, a zero-knowledge proving system that can be used in the Monero protocol in place of the existing Bulletproofs zero-knowledge proving system. The new construction would make transactions smaller, faster for wallets to generate, and faster for network participants to verify. While the code is functional and includes tests for the underlying algorithms, it should be reviewed by third-party auditors if chosen for deployment in a future Monero network upgrade. The code is permissively licensed in the hope that it can be broadly useful.

Thanks to the [Multidisciplinary Academic Grants in Cryptocurrencies (MAGIC)](https://magicgrants.org) nonprofit organization for coordinating and supporting the grant for this implementation, and to the donors who made this work possible.


## Resources

- [Bulletproofs preprint](https://eprint.iacr.org/2017/1066) by Benedikt Bünz, Jonathan Bootle, Dan Boneh, Andrew Poelstra, Pieter Wuille, and Greg Maxwell.
This is the preprint (later published after peer review) used as the basis for the current Monero protocol implementation.
- [Bulletproofs+ preprint](https://eprint.iacr.org/2020/735) by Heewon Chung, Kyoohyung Han, Chanyang Ju, Myungsun Kim, and Jae Hong Seo.
This is the preprint used as the basis for the proposed Monero protocol implementation.
- [Bulletproofs+ code](https://github.com/SarangNoether/monero/tree/bp-plus) by Sarang Noether.
This is the new implementation code written for compatibility with the Monero codebase.
- [Consensus-related code](https://github.com/moneromooo-monero/bitmonero/tree/bp+c) by `moneromooo`. This code is necessary for a network upgrade that would include Bulletproofs+ proofs as a consensus rule.


## Range proving in zero knowledge

The Monero confidential transaction protocol requires the use of a zero-knowledge range proving system. Because inputs and outputs in Monero transactions have their value hidden, it's necessary to secretly prove that they represent valid amounts to avoid overflows that would fool the protocol's balance checks. The constructions used for range proving have evolved over time. Originally, the Monero protocol used a variation of ring signatures for this purpose; however, the resulting proofs were very large and slow to generate and verify, leading to slow synchronization of the blockchain and a large amount of chain bloat.

This was overhauled after the release of Bulletproofs, a much more efficient range proving system. With Bulletproofs, range proofs are much smaller and faster to verify; further, multiple proofs can be verified at the same time in a batch, leading to even more efficient synchronization.

A newer preprint modifies the Bulletproofs construction to produce Bulletproofs+, an even more efficient range proving system. Range proofs in Bulletproofs+ retain a similar underlying structure to those in Bulletproofs; however, they are slightly smaller, faster to generate, and faster to verify.

Implementation code is now available that is compatible with the Monero codebase for easy deployment.


## Efficiency

Side-by-side efficiency comparisons between Bulletproofs and Bulletproofs+ range proofs are possible using the performance test framework in the Monero codebase.

The size and timing characteristics of range proofs depend on the structure of the transaction that uses them. Because of the way that both the Bulletproofs and Bulletproofs+ algorithms work, the number of outputs in a transaction is effectively rounded up to the next power of two for range proving purposes, with a maximum of 16 outputs permitted in a transaction. The vast majority of Monero transactions contain two outputs, but 16 outputs is also common for pool payouts and other purposes.


### Size

Regardless of the number of outputs in a transaction, the corresponding Bulletproofs+ range proof is *96 bytes* smaller than a Bulletproofs range proof.

This table shows the reduction in size for the most common 2-output transaction types seen on the Monero network.

Spent inputs | Current size | New size | Reduction, % smaller
--- | --- | --- | ---
1 | 1.42 kB | 1.33 kB | 6.6%
2 | 1.92 kB | 1.83 kB | 5.1%

The results are clear. Bulletproofs+ range proofs are smaller than Bulletproofs range proofs, saving space on the blockchain!


### Time

Proof generation time is typically not an area of practical concern, since wallet software only needs to do this when making a transaction.
However, it's worth noting that a 2-output Bulletproofs+ range proof (the most common) generates *10.2%* faster!
Proving times for other numbers of outputs scale roughly linearly.

Proof verification time, on the other hand, is very important! Network participants need to verify large numbers of range proofs when joining the network and synchronizing to obtain new blocks. Fortunately, Bulletproofs+ range proofs (like those in Bulletproofs) can be verified in batches much more efficiently than doing so individually. We can see the differences clearly.

This table shows the percent reduction in verification time between the Bulletproofs and Bulletproofs+ algorithms for proofs comprising different numbers of outputs. Tests for verifying single proofs are median values over 10000 randomized tests. Tests for verifying batches of proofs are median values over 1000 randomized tests, where each batch contains 64 proofs. Absolute times are not listed, since they depend on the computing environment; however, relative times are generally comparable and consistent.

Outputs per proof | Single proofs, % faster | Batched proofs, % faster
--- | --- | ---
2  | 1.5% | 5.3%
4  | 0.5% | 9.2%
8  | 1.6% | 9.2%
16 | 0.9% | 10.8%

The results are clear. Bulletproofs+ range proofs are faster to verify than Bulletproofs range proofs, leading to faster synchronization!

*Thanks to Mortanta Manolete for designing the Bulletproofs+ logo!*
