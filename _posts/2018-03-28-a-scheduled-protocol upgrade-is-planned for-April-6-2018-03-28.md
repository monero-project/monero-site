---
layout: post
title: A Scheduled Network Upgrade is Planned for April 6
summary: A scheduled network upgrade is planned for April 6. To be sufficiently prepared, please run CLI v0.12.0.0 or GUI v0.12.0.0
tags: [network upgrade, core, crypto, community]
author: dEBRUYNE / fluffypony
---

**First and foremost, the new binaries can be found here:**  

https://getmonero.org/downloads/  

Please note that the CLI Windows 32-bit, ARMv8, DragonflyBSD 64-bit, and FreeBSD 64-bit binaries as well as GUI Linux 32-bit binaries are forthcoming.  

Alternatively, you can use the Github link:  

**CLI:** https://github.com/monero-project/monero/releases/tag/v0.12.0.0  

**GUI:** https://github.com/monero-project/monero-gui/releases/tag/v0.12.0.0  

--------------  

**Note that this is a scheduled and consensual network upgrade. Thus, unlike the BCH / BTC split, a new coin *won't* be created.**  

-------------  

# General information about the scheduled network upgrade  

Approximately on the 6th of April there will be a scheduled network upgrade on the Monero network. To be sufficiently prepared, a user, service, merchant, pool operator, or exchange should run CLI v0.12.0.0 or GUI v0.12.0.0. The scheduled network upgrade introduces two major changes. First, a PoW tweak to curb any potential threat of ASICs and preserve ASIC resistance. As a result, miners will have to update their miners (i.e. mining software). Second, the minimum ring size is bumped to 7 (mixin 6). Therefore, pool operators need to ensure that payouts use a minimum ring size of 7 (mixin 6), otherwise they will get rejected by the network.  

More information about the PoW tweak can be found here:  

https://getmonero.org/2018/02/11/PoW-change-and-key-reuse.html  

https://github.com/monero-project/monero/pull/3253  

In addition, more information about the minimum ring size bump can be found [here](https://github.com/monero-project/monero/issues/3035). Lastly, both changes have been discussed extensively in the last few dev meetings, which can be read here:  

https://monerobase.com/wiki/Category:DevMeeting  

Due to variance the scheduled network upgrade will take place on or around the 6th of April. There is, however, no specific date as the hard fork will be triggered by a specific blockheight. The specific blockheight for the hardfork can be found [here](https://github.com/monero-project/monero/blob/master/src/cryptonote_core/blockchain.cpp#L110-L111). That is:  

> // version 7 starts from block 1546000, which is on or around the 6th of April, 2018. Fork time finalised on 2018-03-17.  

# How do I upgrade?  

First and foremost, we encourage users to check the integrity of the binaries and verify that they were signed by Fluffypony's GPG key. A guide that walks you through this process can be found [here](https://github.com/qubenix/monero-site/blob/7edf03f77d4c4e9fcd11bfd3de68440e5322279b/_i18n/en/resources/user-guides/verification-windows-beginner.md) for Windows and [here](https://github.com/qubenix/monero-documentation/blob/qubenix-verify/binary-verification.md) for Linux and Mac OS X.  

**CLI:**  // Windows 32-bit, Linux 32-bit, ARMv7, ARMv8, DragonflyBSD 64-bit, and FreeBSD 64-bit binaries are forthcoming  

If you are using the CLI you ought to perform the following steps:  

1. Download the new binaries from [the official website](https://getmonero.org/downloads/) or [Github](https://github.com/monero-project/monero/releases/tag/v0.12.0.0).  

2. Extract the new binaries to a new directory of your liking.  

3. Copy over the wallet files from the old directory (the one that contains the v0.11.0.0 or v0.11.1.0 binaries).  

Note that a blockchain resync is **not** needed. Thus, if you open `monerod-v.0.12.0.0`, it will simply pick up where it left off.  

**GUI:**  // Linux 32-bit binaries are forthcoming  

If you are using the GUI you ought to perform the following steps:  

1. Download the new binaries from [the official website](https://getmonero.org/downloads/) or [Github](https://github.com/monero-project/monero-gui/releases/tag/v0.12.0.0).  

2. Extract the new binaries to a new directory of your liking.  

3. Open `monero-wallet-gui`^1. It should automatically load your "old" wallet and you should be set for the upcoming scheduled network upgrade.  

(1) On Linux you ought to start the GUI with the `start-gui.sh` script, i.e., `./start-gui.sh`.  

**Paper wallet:**  

You don't have to do anything. However, if you want to restore a wallet after the scheduled network upgrade, you need to use the new binaries.  

**MyMonero:**  

You don't have to do anything, as MyMonero will be properly upgraded in advance of the scheduled network upgrade.  

**Mobile wallets:**  

Its presumed that the third-party mobile wallets (Monerujo, Cake, and Xwallet) will release a new version in advance of the scheduled network upgrade such that the user is sufficiently prepared. Basically, their new version has to use ring size 7 as minimum default, otherwise users will get their transactions rejected.  

**Solo mining:**  

This process is similar to the CLI upgrade process. Thus, see aforementioned CLI steps.  

**Pool mining:**  

Your pool operator should upgrade to the new version. In addition, you should update your mining software to the latest version (the one that includes code to accommodate the PoW tweak).  

# A call for community action  

It's in our best interest that the upcoming scheduled network upgrade transits as smoothly as possible. Therefore, it is imperative that we, as community, contact economically sensitive nodes (exchanges and services) and inform them about the new version, the upcoming scheduled network upgrade, and that they should run v0.12.0.0 to be sufficiently prepared. A list of exchanges that have integrated Monero can be found here:  

https://coinmarketcap.com/currencies/monero/#markets  

In addition, services that have integrated Monero are, for example, XMR.to, Evercoin, Shapeshift, and Changelly.  

Lastly, if you have any questions or need any assistance with upgrading, please leave a comment in this thread and the community and I will help you out.  
