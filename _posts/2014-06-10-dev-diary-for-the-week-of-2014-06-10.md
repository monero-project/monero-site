---
layout: post
title: Dev Diary for the Week of 2014-06-10
summary: New RPC calls, GPU miner launched, Doxygen code comments started
tags: [dev diaries, mining, i2p, rpc, docs]
author: Riccardo Spagni (fluffypony)
---


**RPC:** incoming_transfers is now available as a simplewallet RPC API call, and payment_id has been added as an optional argument to the transfer RPC API call. Neozaru also committed a large amount of additional functionality to the RPC API, including progress estimation to getinfo.

**I2P:** no commits this week, much of the work has been around scoping and planning the RPC subsystem.

**Core:** new seed nodes have been added, so bootstrapping on cold start should work just fine. We are going to add DNS seed node bootstrapping at a later stage.

**Docs:** work has begun on adding Doxygen comments throughout the code. This will both help us to understand the code written by "The CryptoNote Developers" (who appear at the top of every piece of source code except for the epee library), but will also result in proper developer documentation being made available.

**Mining:** Wolf` has continued to improve his CPU miner - the latest copy of which can be found on [his github repo](https://github.com/wolf9466/cpuminer-multi).

**Mining:** Claymore released a CryptoNight GPU miner, which [you can find at this thread](https://bitcointalk.org/index.php?topic=638915.0). Please be advised that his miner is currently closed source, and the appropriate level of caution should be exercised.
