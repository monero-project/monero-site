---
layout: post
title: Monero Missive for the Week of 2014-06-10
summary: Deterministic wallets based on mnemonic seeds, fluffypony to attend the Bitcoin Supernode Conference
tags: [monero missives, conferences, exchanges, gui, usability]
author: Riccardo Spagni (fluffypony)
---

Hello XMR users! Welcome to our second Monero Missives.

**Major Updates**

1. We're happy to introduce a major new feature for Monero: deterministic wallets based on a mnemonic seed! When creating a new wallet you now get a 24 word seed that you can use to restore the wallet:  
![mnemonic screenshot](https://i.imgur.com/Qk90Rp2.png){: .center-image }  
  Usage: This affects simplewallet, and is the default behaviour for --generate-new-wallet. If you would like to disable the deterministic seed during wallet generation, you can pass the --non-deterministic flag. To restore from a seed you can use the --restore-deterministic-wallet flag.  
  This provides a MAJOR benefit in that backing up your wallet *no longer requires backing up the .bin.keys file*! All you have to do is write down the 24 words and that's the only backup you need. If you're particularly brave you can even memorise the 24 words. You can also use this to create an offline cold wallet or a paper wallet: create a wallet on a computer disconnected from the Internet, write the 24 words and the address and the view key down, and then remove all the files created by the wallet.  
  Security notes: Please note that this key is independent of your password. By default the 24 word key is written to simplewallet.log when the wallet is created. This is the expected behaviour, the next release will both exclude this from the log and reduce the default log level. Please run --generate-new-wallet with the --set_log 0 flag, or alternatively make sure to delete the simplewallet.log file afterwards.  
  Technical details: The key length for this remains 256-bits and thus does not compromise user security. The view key seed is generated from a keccak1600 hash of the spend key (which is directly from the mnemonic seed), hence the deterministic nature of this. The non-deterministic method is still available as an option.  
  How to get it: binaries in the OP have already been updated, or you can compile from the source on github.  
  Moving to a deterministic wallet: unfortunately it's not possible to retroactively make an existing wallet deterministic. If you want to take advantage of the new feature, you will have to create a new wallet and move your funds in there.

2. XMR is now on Mintpal for voting. You can find the voting link here: https://www.mintpal.com/voting#XMR - Mintpal allows 1 vote an hour from registered users who have traded before, as well as paid-for votes.

3. Monero will be officially represented by fluffypony at the Bitcoin Supernode Conference at Malla Castle in Estonia at the end of this month.

4. Neozaru has made great strides in his RPC-based Qt GUI wallet, and it requires some testing. If you are keen on trying it out, head over [to his comment the GUI thread](https://bitcointalk.org/index.php?topic=589561.msg7240186#msg7240186), give it a spin, and give him feedback.


Until next week!

PS. If you've made it this far, there's a reward in the example wallet listed in the screenshot - first to grab it gets the prize!