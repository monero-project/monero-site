---
layout: post
title: A Statement on the MWR Labs Disclosure
summary: Clarifying some misconceptions and statements
tags: [core, rpc, community]
author: Riccardo Spagni (fluffypony)
---

### Statement

There seem to be some misconceptions and even outrightly false statements being made around the unauthenticated RPC "bug" that was ["discovered" by MWR Labs](https://labs.mwrinfosecurity.com/advisories/csrf-vulnerability-allows-for-remote-compromise-of-monero-wallets/), and we'd like to make certain facts of the matter clear.

First off, it's important to remember that Monero is an unfunded open-source project, and the project only moves as fast as the unpaid volunteers that put their time and effort in. The Monero Core team act as stewards of the project, but we cannot represent every possible developer or contributor, and we certainly can't represent every user. Thus, this statement is from our position and ours alone.

MWR Labs did indeed contact us and responsibly disclose the CSRF attack. This was not an unknown issue to the community - see, for instance, this StackExchange comment: http://monero.stackexchange.com/a/777/47, and this was also highlighted by Juliano Rizzo from Coinspect in 2014.

In truth, RPC authentication has taken something of a back seat, as we have been working on replacing the RPC layer with 0MQ, which has support for both encryption and authentication. The RPC interface will live on in an independent stub, and will gain authentication and TLS support when someone is willing and able to work on that. In addition, the official Monero GUI doesn't use the RPC layer, and directly implements the libwallet_api for all its wallet functions.

The unauthenticated RPC has proven useful, though, as it is the only way for exchanges, mining pools, and integrators to integrate Monero. Exchanges, pools, and integrators are not at risk with this CSRF attack, as it is unthinkable that a custodial service would host a hot wallet on a computer that has a browser - these are extremely sensitive systems and the hot wallet would be hosted in an extremely well-defended environment, with most of the funds in an off-site cold wallet, lest all the deposited funds get stolen.

Thus, libraries such as MoneroNJS and Monero NodeJS cannot be said to be "vulnerable" to this, because they are libraries that are used by integrators and not by any software that would run on a machine with a browser in the background. No automated system that has a hot wallet should ever run in such an insecure environment, and developers are keenly aware of this. Statements from MWR Labs claiming that those libraries are vulnerable are technically true, in a sense, but that observation is like saying that all Monero wallets are at risk if you use "password" as your password and also post your wallet file on Dropbox and share the link on Reddit - technically true, but a largely useless observation.

Similarly, MWR Lab's claims of certain wallets being vulnerable is equally useless. MoneroGui.Net, for instance, has a huge note on the README highlighting that the project is discontinued. The same goes for bitmonero-qt and MiniNodo, both of which are unmaintained. All of these wallets wouldn't even work with the current version of Monero, so they're technically vulnerable, but it's not even possible for anyone to use them.

The only two wallets in MWR Lab's list that are actually vulnerable, and are actually in use, are bigreddmachine's Google Chrome wallet, and jwinterm's lightWallet2. In response to the disclosure, we added a quick patch to provide a way for both of these wallets to prevent the attack. They, in turn, patched their clients accordingly.

We did not enable the functionality by default for several reasons:

1. If we'd provided a flag to disable the functionality it would create a false sense of security if one of the actively developed wallets decided to just pass that flag as a quick "fix".
2. It would have broken all the mining pools, and since the mining pool software is largely fragmented and not centrally maintained there is a great chance that pool operators would have struggled to add support of their own accord (unless we added a disable flag, which just leads to point number 1)
3. It would have broken all integrators and merchants, and they would have to code in a subsystem that is going to fall away within a few months once we've had a chance to re-address the RPC authentication matter.

It is important to note that this is not a flaw in Monero, or in the implementation, or in the cryptography. This is not even something that you could encounter simply by using monero-wallet-cli. You would have to be actively using monero-wallet-cli in RPC mode, on a particularly vulnerable machine, and then click on a malicious link on a website using a browser on that same computer.

Not only is this patched, but the two actively-developed clients that were actually affected by it have been patched, and this was all done in a way that is not disruptive to existing server-side software.

More importantly, ***since monero-wallet-cli does not enable RPC mode by default, there is nothing that is vulnerable in it unless the user actively enables a setting that allows for someone to remotely control the wallet***.

We trust that MWR Labs will note this in their advisory, and adjust it accordingly.

*- The Monero Core Team*