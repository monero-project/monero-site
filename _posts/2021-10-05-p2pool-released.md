---
layout: post
title: Monero P2Pool is now live
summary: P2Pool decentralized pool for Monero mining is live on the mainnet
tags: [community]
author: QuickBASIC
---

{% t global.lang_tag %}

We are happy to announce that Monero P2Pool is live on the Monero network and binaries have been [released](https://github.com/SChernykh/p2pool/releases).

### What is Monero P2Pool?

Monero P2Pool is a peer-to-peer Monero mining pool developed from scratch by SChernykh (also known as sech1). P2Pool combines the advantages of pool and solo @mining; you still fully control your Monero @node and what it mines, but you get frequent payouts like on a regular pool.
P2Pool as a concept was first developed for the Bitcoin blockchain but was never fully realized due to certain limitations, mainly because it had a problem with orphaned blocks which is solved in Monero P2Pool with uncle blocks.

P2Pool has no central server that can be shutdown/blocked because it uses a separate blockchain to merge mine with Monero. There's no pool admin that can control what your hashrate is used for or decide who can mine on the pool and who can't; It's permissionless!

All pool blocks pay out to miners immediately. Because there is no pool wallet, funds are never in custody; It's trustless.

P2Pool uses PPLNS payout scheme, has 0% fee and 0 XMR payout fee (by design, fees can't be added). Everyone in the PPLNS window is rewarded directly via the coinbase transaction reward. Minimum payout is less than 0.0004 XMR due to the very efficient miner reward @transaction format; each individual miner payout takes only 38 bytes on the Monero blockchain!

### Why Monero P2Pool?

There's been some worry about mining pool centralization and the possibility of 51% attacks. Since atomic swaps went live (solving exchange delisting/KYC threat), mining is now the most centralized part of the Monero ecosystem.
Currently, one pool accounts for almost 40% of Monero's network hashrate. This is not a stable situation long-term because a pool admin can be pressured to do malicious things, shutdown their pool, or expropriate funds without paying miners.

### How does it work?

P2Pool is a sidechain to Monero, and P2Pool blocks are potentially Monero @blocks. Each miner submits block templates that include a payout for all of the miners that currently have shares in the PPLNS window.
High quality block templates are added to the P2Pool blockchain as blocks which count as "shares" for the miner who found them.

If a block is good enough to be a Monero block it is also submitted to the Monero network to be included in its blockchain. Once the Monero block is confirmed by the network, those miners are directly paid in the @coinbase-transaction because they were included already in the block.
If P2Pool "shares" are found at the same block height as an existing share, it is included as an uncle block (worth 20% less than a normal share) so you can still get paid for it (uncle blocks can be submitted up to 3 blocks behind the current height and still be included).

### Features

- Decentralized: no central server that can be shutdown/blocked.
- Permissionless: there is no one to decide who can mine on the pool and who can't.
- Trustless: there is no pool wallet; funds are never in custody. All pool blocks pay out to miners immediately.
- PPLNS payout scheme
- 0% fee and no payout fee
- Less than 0.0004 XMR minimum payout
- Fast block times, down to 1 second
- Uncle blocks are supported to avoid orphans - all your shares will be accounted for!
- Advanced mempool picking algorithm, it creates blocks with better reward than what monerod solo mining does
- Password protected private pools
- Configurable PPLNS window size and block time

*NOTE: Setting a password or changing any settings in config.json will create a separate sidechain. Only do this if you know what you're doing.*

### Getting Started

- [P2Pool Download](https://github.com/SChernykh/p2pool/releases)
- [P2Pool GitHub](https://github.com/SChernykh/p2pool)
- [P2Pool Monitoring Page](https://p2pool.io/) *Note since P2Pool is decentralized, this is only a monitoring page.*
- P2Pool [Libera.Chat](https://libera.chat/) IRC and Matrix channels: #monero-pow and #p2pool-log

### Donations

If you'd like to support further development of Monero P2Pool, SChernykh has a donation address on his [GitHub page](https://github.com/SChernykh/p2pool#donations).
