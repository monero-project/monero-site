---
layout: post
title: Monero GUI Beta 2 Released
summary: The second beta of the Monero GUI is out!
tags: [releases]
author: Riccardo Spagni (fluffypony)
---

### Overview

The second beta of the Monero GUI has been released. Due to our focus on completing the features required for the initial release we have not, as yet, completed support for 32-bit Windows, FreeBSD, DragonflyBSD, ARMv7 Linux, and ARMv8 Linux devices. Whilst these are being worked on, it may not be feasible to support some environments (like 32-bit Windows) due to performance degradation.

Download links are at the bottom of this post, and please take note of the known issues and caveats listed below.

To upgrade, just replace your existing GUI with this newer release. Beta 1 wallets will continue to work in beta 2, without any changes required from your side.

### Known Issues

- If the GUI doesn't start on Windows, or starts with a blank screen, then try launch it using the ```start-low-graphics-mode.bat``` batch file.
- The unsigned transaction format, used by cold wallets, may cause issues when moving between platforms (eg. from Linux to Windows) for signing.
- Cold transaction signing does not work with split transactions (sends that are split over multiple transactions).

### Contributors for this Release

This release was the direct result of 50 people who worked, largely unpaid and altruistically, to put out 1202 commits containing 345 646 new lines of code. We'd like to thank them very much for their time and effort. In no particular order they are:

- Ilya Kitaev
- James Cullum
- luigi1111
- Matthias Tarasiewicz
- Derek Zhang
- Howard "hyc" Chu
- medusadigital
- Andreas Brekken
- maitscha
- hundehausen
- moneroj
- xmr-eric
- signo88
- HugTime
- marcin
- Clement
- MoroccanMalinois
- Lafudoci
- Timo Uhlmann
- Christoph Mayerhofer
- redfish
- Jaqueee
- dnaleor
- MartinUI
- Guillaume Le Vaillant
- Daniel Ternyak
- David Latapie
- henrud
- moneromooo
- Michael Campagnaro
- taushet
- schnerchi
- Jonathan Cross
- Riccardo "fluffypony" Spagni
- dEBRUYNE
- ferretinjapan
- sbialy
- Christoph Schnerch
- githubrsys
- xmrdc
- Gingeropolous
- NanoAkron
- kenshi84
- keesieboy
- moimoij
- Shrikez1
- MiWCryptAnalytics
- mochaccinuh
- Roy Jacobs
- pigeons

### Official Download Links
- [Windows, 64-bit](https://downloads.getmonero.org/gui/monero-gui-win-x64-v0.10.3.1.zip)
- [macOS, 64-bit](https://downloads.getmonero.org/gui/monero-gui-mac-x64-v0.10.3.1.tar.bz2)
- [Linux, 64-bit](https://downloads.getmonero.org/gui/monero-gui-linux-x64-v0.10.3.1.tar.bz2)
- [Linux, 32-bit](https://downloads.getmonero.org/gui/monero-gui-linux-x86-v0.10.3.1.tar.bz2)

### Download Hashes

If you would like to verify that you have downloaded the correct file, please use the following SHA256 hashes:

- monero-gui-linux-x64-v0.10.3.1.tar.bz2, 4915473265d58720fd8f019e536c2b7fb02648ab51a8087e84aa1e2434788452
- monero-gui-linux-x86-v0.10.3.1.tar.bz2, 092b49080c3380666845f7f39823b09f4960ea1e250b84b150856ef33ca30690
- monero-gui-mac-x64-v0.10.3.1.tar.bz2, c80ca68037158216a080e59e90b0a70761cff2f317d3c9cd0eeb661e8e2a1f99
- monero-gui-win-x64-v0.10.3.1.zip, 0eddd423f5f0df236303d8b9225842142b331093eb69e6183f3f694238c371a7

A GPG-signed list of the hashes is at https://getmonero.org/downloads/hashes.txt and should be treated as canonical, with the signature checked against the appropriate GPG key in the source code (in /utils/gpg_keys)