---
layout: post
title: A Scheduled Protocol Upgrade is Planned for September 15
summary: To be sufficiently prepared, please run CLI v0.11.0.0 or GUI v0.11.0.0
tags: [protocol upgrade, core, crypto, community]
author: dEBRUYNE / fluffypony
---

**First and foremost, the new binaries can be found here:**  

https://getmonero.org/downloads/  

--------------  

**Note that this is a scheduled and consensual protocol upgrade. Thus, unlike the BCH / BTC split, a new coin *won't* be created.**  

-------------  

Approximately on the 15th of September there will be a scheduled protocol upgrade on the Monero network. While some pools have already upgraded, some pools are not updated yet or are in the process of upgrading. If they don't upgrade before the scheduled protocol upgrade, they will get booted off the network. As a result, you will miss out on revenue if you are mining on these pools. Thus, if you are mining on one of the pools that hasn't upgraded yet or hasn't scheduled an upgrade, please contact your pool owner as soon as possible and urge them to upgrade. Alternatively, you can switch to a pool that is on the correct version.  

A list of pools and services and their respective statuses can be found [here](https://www.reddit.com/r/Monero/comments/6yuv2s/psa_users_solominers_exchangesmerchantsservices/).  

# An important message for pool operators and miners  

Bear in mind that running CLI v0.11.0.0 or GUI v0.11.0.0 is mandatory. Any other versions will get booted off the network. Thus, miners, please email your pools and ask them if they are running v0.11.0.0. In addition, pool operators need to ensure that payouts use a minimum ring size of 5 (mixin 4), otherwise they will get rejected by the network.  

# General scheduled protocol upgrade information  

The scheduled protocol upgrade was introduced to enforce RingCT transactions and to bump the minimum ring size to 5 (mixin 4). Note that, after this scheduled protocol upgrade, you are still able to transform non RingCT outputs to RingCT outputs in a "one-time" transaction. Thus, you **don't** need to sweep a paper wallet if it contains non RingCT outputs.   

Due to variance, the scheduled protocol upgrade will take place on or around the 15th of September. There is, however, no specific date as the hard fork will be triggered by a specific blockheight. The specific blockheight for the hardfork can be found [here](https://github.com/monero-project/monero/blob/master/src/cryptonote_core/blockchain.cpp#L105). That is:  

> // version 6 starts from block 1400000, which is on or around the 16th of September, 2017. Fork time finalised on 2017-08-18.  

**As an user you need to run either CLI v0.11.0.0 or GUI v0.11.0.0.**  

# How do I upgrade?  

**CLI:**  

If you are using the CLI you ought to perform the following steps:  

1. Download the new binaries from [here](https://getmonero.org/downloads/).  

2. Extract the new binaries to a new directory of your liking.  

3. Copy over the wallet files from the old directory (the one that contains the v0.10.3.1 binaries).  

Note that a blockchain resync is **not** needed. If you open `monerod-v.0.11.0.0` it simply picks up where it left off.  

**GUI:**  

If you are using the GUI you ought to perform the following steps:  

1. Download the new binaries from [here](https://getmonero.org/downloads/).  

2. Extract the new binaries to a new directory of your liking.  

3. Open `monero-wallet-gui`^1. It should automatically load your "old" wallet and you should be set for the upcoming scheduled protocol upgrade.  

(1) On Linux you ought to start the GUI with the `start-gui.sh` script, i.e., `./start-gui.sh`.  

**Paper wallet:**  

You don't have to do anything :) However, if you want to restore a wallet after the scheduled protocol upgrade, you need to use the new binaries.  

**MyMonero**  

You don't have to do anything, as MyMonero will be properly upgraded in advance of the scheduled protocol upgrade.  

**Solo mining:**  

This process is similar to the CLI upgrade process. Thus, see aforementioned steps.  

**Pool mining:**  

Only your pool operator needs to upgrade to the new version. In addition, any mining software that you use doesn't require an upgrade.  
