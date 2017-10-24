---
layout: post
title: Dev Diary for the Week of 2014-06-16
summary: New checkpoint, better mempool handling from BBR, Arch Linux support
tags: [dev diaries, usability, platforms, accounts, core]
author: Riccardo Spagni (fluffypony)
---

**Core:** Checkpoint added at block 80 000

**Core:** We've incorporated two changes from BBR - proper tx_pool handling, and a fix for the high number of orphans pool miners were experiencing. tx_pool handling is incomplete, as it is implemented by the daemon but the wallet is not, as yet, mempool aware.

**Core:** Initial tx auto-split commit, ready for testing

**Build:** Made changes to CMakeLists to allow for the project to build on Arch
