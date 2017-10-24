---
layout: post
title: Dev Diary for the Week of 2014-07-07
summary: Work has begun on moving to an embedded database, good progress on daemonize, moving focus from i2pcpp to i2pd
tags: [dev diaries, core, accounts, i2p, i8n, blockchaindb]
author: Riccardo Spagni (fluffypony)
---

**Core**: major work has begun on moving to an embedded database. The ongoing progress on this can be followed here: https://github.com/tewinget/bitmonero/tree/blockchain

**Core / Wallet**: both the new daemonized daemon and rpcwallet are nearing a stage where they can be merged into master. The final step is to finalise the daemonizing code in rpcwallet, in such a way that it acts the same as the daemon, and we can move from there.

**I8N**: mnemonic word list German version is in progress and about 90% complete.

**I2P**: subsequent to discussions with the I2P team, we are going to be making a bit of a diagonal movement from libi2pcpp to i2pd. This should end up with us slightly ahead on the I2P integration project than we would've been. The major focus at the moment is getting TCP streaming (for persistent connections) to work, and that is where the largest focus is at present.
