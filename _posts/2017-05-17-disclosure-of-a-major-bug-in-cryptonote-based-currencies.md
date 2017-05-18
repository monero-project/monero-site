---
layout: post
title: Disclosure of a Major Bug in CryptoNote Based Currencies
summary: Patched in Monero and others, but still in the wild
tags:  [core, crypto, research]
author: luigi1111 and Riccardo "fluffypony" Spagni
---

# Overview

In Monero we've discovered and patched a critical bug that affects all CryptoNote-based cryptocurrencies, and allows for the creation of an unlimited number of coins in a way that is undetectable to an observer unless they know about the fatal flaw and can search for it.

We patched it quite some time ago, but until the hard fork that we had a few weeks ago we were unsure as to whether or not the entire network had updated.

Once we were certain that the network had updated, we notified all active and affected CryptoNote coins, including CryptoNote themselves, Bytecoin, Forknote, Boolberry, DashCoin, and DigitalNote.

***Note that, at this time, only Monero, Aeon, Boolberry, and Forknote have updated.*** We have given the other currencies as much time as possible, but cannot hold back disclosure any longer.

***We strongly caution against anyone using, trading, exchanging, or running services involving the following currencies affected by this issue: Bytecoin, DashCoin, DigitalNote***

# Timeline

2017-02-19: A member of the Monero Research Lab discovers the exploit, triggered by a detailed discussion of the [XEdDSA signature schemes](https://whispersystems.org/docs/specifications/xeddsa/) on the [Curves mailing list](https://moderncrypto.org/mail-archive/curves/2017/000846.html)  
2017-02-21: The patch is surreptitiously snuck into the Monero codebase in [pull request #1744](https://github.com/monero-project/monero/pull/1744). It is kept secret to prevent it being used to attack other CryptoNote coins.  
2017-02-22: A [point release of Monero is rushed out](https://github.com/monero-project/monero/releases/tag/v0.10.2) so that exchanges and mining pools can update, under the guise of it preventing a RingCT DoS attack (such attack did not exist, but it seemed a fair explanation).  
2017-03-15: The hash of the details of the problem is precommitted to the Monero blockchain in tx dff7a79e44f9392e19fe5205c389d3e799f89c62d90d624219618d754b806e04  
2017-03-26: A further [point release of Monero](https://github.com/monero-project/monero/releases/tag/v0.10.3.1) is put out to prepare for a hard fork in April.  
2017-04-14: The Monero network hard forks to increase the dynamic block size minimum median, but this has the added bonus of ensuring the entire network is protected.  
2017-04-17: All CryptoNote coins are contacted, and told that they have until mid-May to patch their coins, before there will be a public disclosure of the issue.  
2017-04-17: As noted by [Riccardo "fluffypony" Spagni on Twitter](https://twitter.com/fluffyponyza/status/854029169667309569), the hash of the message sent to the various CryptoNote currencies is precommitted to the Monero blockchain.

# Problem

The so-called "key image" as used in CryptoNote coins utilising elliptic curve ed25519 can be modified in a special way, allowing double-spends. This effectively allows someone to create an infinite amount of coins in a way that is impossible to detect without knowing about the exploit and explicitly writing code to check for it.

# Mitigation

Several options exist for mitigation. The simplest, least invasive is noted below.

To mitigate, check key images for correctness by multiplying by the curve order l. Check that the result is the identity element.

Hexadecimal values of each:

Identity element = "0100000000000000000000000000000000000000000000000000000000000000"

Curve order (little endian) = "edd3f55c1a631258d69cf7a2def9de1400000000000000000000000000000010"

For each transaction key image, check ((key image * curve order) == (identity element)); reject transaction if false.
