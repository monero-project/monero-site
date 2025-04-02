---
layout: post
title: FCMP++ Optimization Competition
summary: Announcing a competition to optimize libraries used in the Full-Chain Membership Proofs++ upgrade
tags: [crypto, announcements]
author: Justin Berman (j-berman)
---

Officially announcing a contest to optimize two libraries used in Monero's proposed upgrade to [FCMP++]({{site.baseurl}}/2024/04/27/fcmps.html): [helioselene](https://github.com/kayabaNerve/fcmp-plus-plus/tree/78754718faa21f0a5751fbd30c9495d7f7f5c2b1/crypto/helioselene) and [ec-divisors](https://github.com/kayabaNerve/fcmp-plus-plus/tree/78754718faa21f0a5751fbd30c9495d7f7f5c2b1/crypto/divisors). Read all contest rules and details [here](https://github.com/j-berman/fcmp-plus-plus-optimization-competition).

The winner for `helioselene` will receive 100 XMR, and the winner for `ec-divisors` will receive 250 XMR. This Monero will be paid out from the [Monero General Fund](https://www.reddit.com/r/Monero/comments/1iixgk9/monero_general_fund_transparency_report_february/).

The contest will open for submissions Monday, April 28th and will stop accepting submissions Monday, June 30th.

### Why

`helioselene` is a library implementing two curves, "Helios" and "Selene," which form a curve cycle towering Ed25519. Using a "tower cycle" over Ed25519 allows Monero to re-use the existing anonymity set while upgrading to FCMP++. This library is a critical component used in all aspects of FCMP++. Optimizing this library will therefore benefit all user-facing components of FCMP++ (daemon sync, wallet sync, and transaction construction).

`ec-divisors` is a library implementing the calculation of divisors of elliptic curve points. These lead to efficient verification of scalar multiplications, [as posited by Liam Eagen](https://eprint.iacr.org/2022/596). FCMP++ uses EC Divisors to improve efficiency generally. This competition is focused on optimizing divisor construction, which affects transaction construction.

### Who can participate

We will accept submissions from anyone (including anonymous users) **provided that the submission meets all competition rules**. If you have experience optimizing cryptographic libraries and/or are interested in contributing to Monero, here is as good of a chance as any!

### Where

Please visit [this link](https://github.com/j-berman/fcmp-plus-plus-optimization-competition) to read all the details on the contest, including rules, how to get started, and how to make a submission.
