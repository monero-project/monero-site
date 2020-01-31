---
layout: post
title: Disclosure of a Major Bug in CryptoNote Based Currencies
summary: Patched in Monero and others, but still in the wild
tags:  [core, crypto, research, urgent]
author: luigi1111 and Riccardo "fluffypony" Spagni
---

### Overview

In Monero we've discovered and patched a critical bug that affects all CryptoNote-based cryptocurrencies, and allows for the creation of an unlimited number of coins in a way that is undetectable to an observer unless they know about the fatal flaw and can search for it.

We patched it quite some time ago, and confirmed that the Monero blockchain had NEVER been exploited using this, but until the hard fork that we had a few weeks ago we were unsure as to whether or not the entire network had updated.

Once we were certain that the network had updated, we notified all active and affected CryptoNote coins, including CryptoNote themselves, Bytecoin, Forknote, Boolberry, DashCoin, and DigitalNote.

***Note that, at this time, only Monero, Aeon, Boolberry, and Forknote have updated.*** We have given the other currencies as much time as possible, but cannot hold back disclosure any longer.

***We strongly caution against anyone using, trading, exchanging, or running services involving the following currencies affected by this issue: Bytecoin, DashCoin, DigitalNote***

### Timeline

2017-02-19: A member of the Monero Research Lab discovers the exploit, triggered by a detailed discussion of the [XEdDSA signature schemes](https://whispersystems.org/docs/specifications/xeddsa/) on the [Curves mailing list](https://moderncrypto.org/mail-archive/curves/2017/000846.html)  
2017-02-20: The Monero blockchain is scanned to see if this had ever been exploited; thankfully it had not and the blockchain is intact.  
2017-02-21: The patch is surreptitiously snuck into the Monero codebase in [pull request #1744](https://github.com/monero-project/monero/pull/1744). It is kept secret to prevent it being used to attack other CryptoNote coins.  
2017-02-22: A [point release of Monero is rushed out](https://github.com/monero-project/monero/releases/tag/v0.10.2) so that exchanges and mining pools can update, under the guise of it preventing a RingCT DoS attack (such attack did not exist, but it seemed a fair explanation).  
2017-03-15: The hash of the details of the problem is committed to the Monero blockchain in tx dff7a79e44f9392e19fe5205c389d3e799f89c62d90d624219618d754b806e04  
2017-03-26: A further [point release of Monero](https://github.com/monero-project/monero/releases/tag/v0.10.3.1) is put out to prepare for a hard fork in April.  
2017-04-14: The Monero network hard forks to increase the dynamic block size minimum median, but this has the added bonus of ensuring the entire network is protected.  
2017-04-17: All CryptoNote coins are contacted, and told that they have until mid-May to patch their coins, before there will be a public disclosure of the issue.  
2017-04-17: As noted by [Riccardo "fluffypony" Spagni on Twitter](https://twitter.com/fluffyponyza/status/854029169667309569), the hash of the message sent to the various CryptoNote currencies is committed to the Monero blockchain.

### Problem

The so-called "key image" as used in CryptoNote coins utilising elliptic curve ed25519 can be modified in a special way, allowing double-spends. This effectively allows someone to create an infinite amount of coins in a way that is impossible to detect without knowing about the exploit and explicitly writing code to check for it.

### Mitigation

Several options exist for mitigation. The simplest, least invasive is noted below.

To mitigate, check key images for correctness by multiplying by the curve order l. Check that the result is the identity element.

Hexadecimal values of each:

Identity element = "0100000000000000000000000000000000000000000000000000000000000000"

Curve order (little endian) = "edd3f55c1a631258d69cf7a2def9de1400000000000000000000000000000010"

For each transaction key image, check ((key image * curve order) == (identity element)); reject transaction if false.

### Appendix: Commitment Text \#1

As committed via the payment ID in Monero transaction ID dff7a79e44f9392e19fe5205c389d3e799f89c62d90d624219618d754b806e04, the text below has a sha3-256 (ie. keccak-256) hash of 21f0216fbbdc3dc590903b579282878705ed2adab7d8213328d962c76e806d84:

~~~
Problem:
The so-called "key image" as used in Cryptonote coins utilizing elliptic curve ed25519 can be modified in a special way, allowing double-spends. I leave out exact details in this draft to give some time for mitigation.

Hash (keccak-256) of details, to be released later: <4402e902f1ac8cec96a17453dcae307d21a7995a94b76e9c3eb7ca7baeffb8c8> 


Mitigation:
Several options exist for mitigation; I include the simplest, least invasive here.

To mitigate, check key images for correctness by multiplying by the curve order l. Check that the result is the identity element.

I include hexadecimal values of each:
Identity element = "0100000000000000000000000000000000000000000000000000000000000000"
Curve order (little endian) = "edd3f55c1a631258d69cf7a2def9de1400000000000000000000000000000010"

For each transaction key image, check ((key image * curve order) == (identity element)); reject transaction if false.
~~~

### Appendix: Commitment Text \#2

As noted in the previous commitment, the text below has a sha3-256 (ie. keccak-256) hash of 4402e902f1ac8cec96a17453dcae307d21a7995a94b76e9c3eb7ca7baeffb8c8:

~~~
Dirty Details:
Adding one of the (non-idenitity) "torsion", or small subgroup, points to a key image allows up to 7 double spends to be performed per output (8 total spends). The reason this is possible is that multiplying any of these small subgroup
points by 8 returns the identity element (a kind of zero point). This means that multiplying the sum of a "normal" point and a torsion point by 8 (or a multiple of 8) will return the same point as multiplying the normal point by 8;
the small subgroup point is "factored out". This allows a signature to verify on an alternate key image *so long as* the relevant scalars are multiples of 8. Cryptonote does not use scalars that are automatically multiples of 8 (whereas
vanilla EdDSA does), but this is only a slight hurdle. An attacker need only choose the relevant scalars to be a multiple of 8 (in certain cases he cannot choose, and must instead create trial scalars until getting the desired result).

Alternate mitigations:
1. Multiply each key image by 8, then the result by 8^-1 (mod l), to get the proper key image in the correct subgroup. Reject double spends, or if the result is not the same as the input. Unwieldy.
2. Mutliply each key image by 8 before storing in the key image list/checking for double spends. Quite invasive, as it requires redoing the existing key image list.


Extra details:
Monero's (and all CryptoNote coins') elliptic curve, ed25519, has a basepoint group cofactor of 8. There are 8 subgroups in ed25519, of the following sizes:
1 ----|
2     | --- small subgroups
4     |
8 ----|
l (basepoint subgroup) ---|
2*l                       | --- large subgroups
4*l                       |
8*l (all curve points) ---|

Each small subgroup point is contained in the next larger small subgroup, and also in the corresponding large subgroup (superimpose small/large). Each large subgroup is contained in the next larger one as well. The only small subgroup
point contained in subgroup 1 and l (basepoint subgroup) is the identity element, which works as a kind of zero (no effect on point addition). Mutliplying any point by its subgroup order will return the idenitity element (same as multiplying
by 0). Mutliplying any point by 2, 4, or 8 will move it to the corresponding most exclusive subgroup (e.g., a point in 8*l subgroup multiplied by 4 would move to the 2*l subgroup, a point in the 8 subgroup multiplied by 2 would move the 4
subgroup, and so on). Adding a small subgroup (non idenitity) point to a key image in the basepoint subgroup "knocks" it out of that subgroup and into one of the larger ones. Since the order of that subgroup is not l but some multiple,
multiplying as in the proposed mitigation above does not return the identity element.
~~~
