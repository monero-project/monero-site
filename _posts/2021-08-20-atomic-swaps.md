---
layout: post
title: "Bitcoin <-> Monero atomic swaps are now live"
summary: COMIT's tool to swap BTC <-> XMR is live on Mainnet.
tags: [community]
author: ErCiccione
---

We are happy to announce that the Atomic Swap implementation developed by the COMIT team is mature enough to be used on Monero's network. For now, makers must buy Bitcoin and takers must buy Monero, but anyone can be a maker or taker. It is easier at the moment to sell Bitcoin for Monero than the other way around. To try a swap yourself, download the [asb software](https://github.com/comit-network/xmr-btc-swap/releases) developed by the COMIT team, follow [the instructions](https://github.com/comit-network/xmr-btc-swap/blob/master/docs/cli/README.md) and let them know if you find any issues (works also over Tor!). Remember this is brand new technology and might have unexpected bugs. Be careful and only test with small amounts. To find swap providers, visit [unstoppableswap.net](https://unstoppableswap.net/).

### What are Atomic Swaps?

Atomic swaps are a way to exchange two cryptocurrencies (in our case Monero and Bitcoin) without relying on a trusted third party (like a cryptocurrency exchange company) and without needing to trust the person on the other side of the swap. These swaps are called "atomic" because they only have two possible outcomes: either the trade is successfully completed and each trader receives the other one's funds, or nothing happens and both traders keep the funds they started with. Since the protocol forces both parties to follow the rules, it is not possible to run away with the other party's coins, which is the main reason trusted third parties are required when exchanging cryptocurrencies.

Two teams are working on developing Atomic Swaps for Monero:

- [COMIT](https://github.com/comit-network/xmr-btc-swap)
- [Farcaster](https://ccs.getmonero.org/proposals/h4sh3d-atomic-swap-implementation.html) (Research funded by the Monero community through the [Community Crowdfunding System](https://ccs.getmonero.org/))