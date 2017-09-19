---
layout: post
title: Dev Diary for the Week of 2014-06-02
summary: Block reward penalty adjustment, faster CPU miner, missing RPC calls added
tags: [dev diaries, mining, i2p, rpc, crypto]
author: Riccardo Spagni (fluffypony)
---

**RPC:** Neozaru and others have submitted pull requests to add RPC methods that were missing.

**I2P:** libssu has been decoupled, and outstanding changes to master have been merged.

**Core:** just a reminder that there are breaking changes to 0.8.8 to prevent a transaction dust attack on the block reward. Because of the block reward penalty, it was previously possible to constantly reduce the block reward down to nearly zero, which is what has been fixed. You can see this quite dramatically on the [Block Reward chart on monerochain.info](http://monerochain.info/charts/reward) where our average block reward plummeted by around 13% on May 25 - 27 as the fix was tested, deployed, and miners began adopting it. Please don't forget that simplewallet using the older code will not add the correct transaction fees, causing transactions to sit in the mempool for several days before being rejected.

**Core:** initial work has begun on documenting the code and on providing architecture overviews. This will be a relatively lengthy project, but will provide us with a more useful codebase that has had more eyes on it.

**Crypto:** we have also begun an initial foray into examining the underlying cryptographic and mathematic principles of the CryptoNote protocol, and ensuring that it has been correctly implemented in the reference code (Bytecoin - upon which Monero is based). We will reveal more details as this project progresses.

**Crypto:** DGA has done an incredible job of optimising the PoW hashing code, and has vastly improved the speed at which it operates. This makes syncing the blockchain faster, as well as improves the speed at which miners can run and pools can verify work.

**Mining:** Wolf has worked hard on optimising and tweaking LucasJones miner. If you are mining, it is strongly suggested you give [Wolf's fork of cpuminer-multi](https://github.com/wolf9466/cpuminer-multi) a spin. Because it takes advantage of AES-NI you may find that reducing the number of threads down to around half of the number of cores in your computer is the most efficient.