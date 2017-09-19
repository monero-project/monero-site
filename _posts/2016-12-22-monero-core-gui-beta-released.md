---
layout: post
title: Monero Core GUI Beta 1 Released
summary: The first beta of the long awaited Monero Core GUI
tags: [releases]
author: Riccardo Spagni (fluffypony)
---

### Overview

The first beta of the Monero Core GUI has been released. Note that, at this time, we have not completed support for 32-bit Windows, FreeBSD, and ARMv7 Linux devices. They are all being worked on, and we hope to complete support for them by the time of the first release.

Download links are at the bottom of this post, and please take note of the known issues and caveats listed below.

### Known Issues

- Due to several important updates, 0.10.1 wallet binaries will not work with with wallets created by the GUI. Please use the binaries included in the package instead. Note: you can definitely use the 0.10.1 daemon:)
- If you have been testing earlier builds you may have to delete your configs. There is [a guide describing how to do this on this StackExchange post](http://monero.stackexchange.com/questions/2866/where-are-the-monero-core-configuration-parameters-stored/2870#2870).
- Older computers may have an issue with the QT renderer, and will either crash or display a white / black window. You can change the rendering mode [as described on this StackExchange post](http://monero.stackexchange.com/questions/2928/how-to-change-the-monero-core-rendering-mode-for-older-computers/2929#2929).

### FAQ

- *Can I use a remote node?* This is certainly possible. In the wizard, change the daemon address from `localhost:18081` to the address of the remote node. For instance, if you want to use the remote node of moneroworld.com, change `localhost:18081` to `node.moneroworld.com:18081`. For more open node options, please check out the [MoneroWorld open node directory.](https://moneroworld.com/#nodes) Alternatively, you can specify a daemon address on the `Settings` page.
 
- *What do I do if the GUI is showing `Wrong Version` at the bottom left?* If you see this message the daemon you are using is incompatible with the GUI. The daemon supplied in the binaries is compatible with the GUI. Thus, if you are seeing this message you are likely using a remote node, which is running a daemon that is incompatible with the GUI. Note that you will be able to receive funds. However, you *won't* be able to send funds.
 
- *What if I get an "Can't create transaction: Wrong daemon version: internal error: histogram reports no unlocked outputs for xxxxxxxxxxxx, not even ours" error?* This means that you are using a daemon that is incompatible with the GUI. This is likely caused by using a remote node (see above). Alternatively, it could be caused by using a version 0.9.4 or  0.10.0.
 
- *What if I get an "Error: failed to load wallet: input stream error" error when trying to open an existing wallet* This is due to the wallet cache (`<walletname>`) being incompatible. You can circumvent this error by removing your wallet cache. The GUI will then open your wallet and refresh from scratch. It is advised to properly backup your wallet files before you perform this action. Also note that deleting the wallet cache results in losing some of the transaction history, namely recipient addresses and private tx keys. Thus, if you want to use an existing wallet with the GUI, it is advisable to backup your wallet cache in case you need transaction history info in the future.
 
- *What if I get an "Error opening wallet: std::bad_alloc" error?* This error is also caused by an incompatible wallet cache. See the previous question for further information.
 
- *Can I open a wallet I created with the CLI?* Yes, this is possible with the wallet picker in the wizard. Use the "I want to open a wallet from file" option and select your .keys file to open the wallet created with the CLI. Alternatively, if you already have a wallet opened and want to switch to your CLI wallet, go to the `Settings` page and choose `Close wallet`. This will bring you back to the wizard, where you can choose your CLI wallet. Note that your cache may be incompatible and you may incur an error. If this happens, see the FAQ questions above.

### Contributors for this Release

This release was the direct result of 32 people who worked, largely unpaid and altruistically, to put out 736 commits containing 321 056 new lines of code. We'd like to thank them very much for their time and effort. In no particular order they are:

- taushet
- HugTime
- James Cullum
- sbialy
- signo88
- Ilya Kitaev
- redfish
- henrud
- NanoAkron
- Kenshi Takayama
- Jaquee
- Daniel Ternyak
- Riccardo "fluffypony" Spagni
- ferretinjapan
- medusa
- Guillaume Le Vaillant
- xmrdc
- dEBRUYNE
- xmr-eric
- Christoph Mayerhofer
- Howard "hyc" Chu
- githubrsys
- moneromooo
- krzysztoff7
- Derek Zhang
- Martin Zając
- mochaccinuh
- Gingeropolous
- MoroccanMalinois
- Andreas Brekken
- Maitscha
- Clement
- Christoph Schnerch

### Official Download Links

- [Windows, 64-bit](https://downloads.getmonero.org/gui/monero.gui.win.x64.beta.zip)
- [macOS, 64-bit](https://downloads.getmonero.org/gui/monero.gui.mac.x64.beta.tar.bz2)
- [Linux, 64-bit](https://downloads.getmonero.org/gui/monero.gui.linux.x64.beta.tar.bz2)
- [Linux, 32-bit](https://downloads.getmonero.org/gui/monero.gui.linux.x86.beta.tar.bz2)

### Download Hashes

If you would like to verify that you have downloaded the correct file, please use the following SHA256 hashes:

- monero.gui.win.x64.beta.zip, cb8bdf36fb56739a0fa746bec8dd51fb3479d51a3b8f0ce41a771f1d5a924bdb
- monero.gui.mac.x64.beta.tar.bz2, 907bfb4832c74de6cec7df730dfce5d9ccc1e6de09b6a4546cb9eee1f8242968
- monero.gui.linux.x64.beta.tar.bz2, cecbe4b23f777442de861bc0981af0857dab043ed63be98f768cdd00825a8d09
- monero.gui.linux.x86.beta.tar.bz2, daabd11b271685cedf5d6321cbde5e6b7c2691630a4355a973fc0cb99b1d2dc9
