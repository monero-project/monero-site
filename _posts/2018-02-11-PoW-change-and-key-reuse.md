---
layout: post
title: PoW change and key reuse
summary: Monero will tweak Cryptonight, and how key reuse can compromise your privacy
tags:  [mining, protocol upgrade, crypto, community]
author: dEBRYUNE, dnaleor and the Monero project
---


# PoW change

Lately, a common reoccurring subject has been ASIC resistance and how we should react to any (potential) threat from ASICs. This blog post sets out our (somewhat) formal stance on ASIC resistance and our intention to maintain ASIC resistance by swiftly reacting to any potential threat from ASICs and considering slightly modifying the PoW at every hardfork.

An ASIC (Application Specific Integrated Circuit) is custom mining hardware that is specialized for a particular use. For example, Bitcoin ASICs are specialized to mine cryptocurrencies utilizing a SHA256 hash algorithm. Due to the fact that they are designed for a specific use, they will typically have a large performance advantage over hardware that is intended for general-purpose use like CPUs, GPUs, and even FPGAs. Thus, any newly developed ASIC will obtain a significant majority of the network hashrate and introduce centralization. 

The Monero code was forked from the CryptoNote reference implementation. In the CryptoNote whitepaper (https://cryptonote.org/whitepaper.pdf), one of the identified deficiencies of Bitcoin is the Proof of Work due to its centralizing nature, as we will discuss below. In order to create a more egalitarian mining network and foster decentralization, the original CryptoNote developers created the Cryptonight Proof of Work function to "close the gap between CPU (majority) and GPU/FPGA/ASIC (minority) miners." While the CryptoNote authors admit that "It is appropriate that some users can have a certain advantage over others," they propose that "their investments should grow at least linearly with the power." Thus, it is recognized that ASICs may be an inevitable development for any Proof of Work. We also concede that ASICs may be inevitable, but we feel that any transition to an ASIC-dominated network needs to be as egalitarian as possible in order to foster decentralization. At this point in time, we suspect that any newly developed Cryptonight ASIC will not be egalitarian and will not foster a decentralized network. 

The drawback of Bitcoin's (SHA256) proof-of-work system is the easy migration from CPUs to GPUs, to FPGAs, and finally to ASICs, where each step came with huge efficiency improvements. Thus, there is a large gap between CPU mining and ASIC mining, which resulted in ASICs being the only viable way to mine. In essence, this causes centralization, because only those with access to specialized hardware (ASICs) are still able to mine, and these typically come from one or very few manufacturers. Cryptonight (Monero's proof-of-work system) intends to close the gap between CPU and GPU, FPGA, and ASIC mining by using a proof-of-work system that is memory bound over a moderate amount of memory. As a result, ASICs get significantly more expensive to build. This proof-of-work system intends to foster egalitarian mining, which yields the following benefits: First, if mining is decentralized (because CPUs and GPUs are still usable for mining), it will be very difficult to pressure miners into not confirming a certain transaction, or otherwise act as a censor to the Monero blockchain. Second, it will lessen the pressure towards centralization of mining in large data centers (as can be seen in Bitcoin). Third, it is quite difficult for governments to regulate companies selling general-purpose hardware (as opposed to companies selling specialized hardware).

Let's further discuss this last point. Specialized hardware will, most likely, only be designed by a few companies. As we can see from Bitcoin, the majority of ASICs are designed and shipped by Bitmain. As Peter Todd said:

>"There's only a tiny number of companies in the world that are capable of building performance/cost competitive ASICs, basically the likes of Intel, ASMC, GlobalFoundries, etc."

This creates a single point of failure. For instance, a government could require these ASIC manufacturers to add a "kill-switch" which allows them to shut down a miner remotely or otherwise control it. This threat has the potential to destroy the whole network. In a similar fashion, governments could require miners to have a license to buy and operate ASICs, thereby confining ASICs to a certain group of licensed people. Furthermore, licensing could ultimately lead to blacklisting certain transactions, i.e., governments can require miners to *not* mine certain transactions, where disobedience would result in miners having their license revoked. By contrast, introducing a license to operate general purpose hardware is probably an infeasible endeavor.

Mining, in general, is also prone to the rich-get-richer effect, which ultimately leads to centralization. For example, a large miner may have significant economies of scale which allows him to grow his share of the hashrate. The Cryptonight algorithm, due to its egalitarian design, somewhat mitigates this effect because miners have competition from (i) miners that have virtually no costs (e.g. botnets), (ii) hobbyist miners, who use their CPUs and GPUs to support the network and aren't predominantly profit driven, and (iii) web miners. Note that web miners have both illegitimate (e.g. mining via ads without consent) and legitimate use cases (e.g. mining to solve CAPTCHAs or mining to reduce/replace advertisements). By contrast, ASICs accelerate the rich-get-richer effect, because ASIC miners have no competition from the aforementioned mining "groups".

In sum, we strongly believe that it's beneficial to preserve our ASIC resistance. Therefore, we will perform an emergency hard fork to curb any potential threat from ASICs if needed. Furthermore, in order to maintain its goal of decentralization and to provide a deterrent for ASIC development and to protect against unknown or undetectable ASIC development, the Monero team proposes modifying the Cryptonight PoW hash every scheduled fork, twice a year. The modifications will be light, and should not change performance profiles much. The first change is now being tested, and will happen in the coming March fork. Finally, we will continue to research alternative Proof of Work functions that may provide better ASIC resistance than Cryptonight. 

Patches will be available for the following software: zone117x's pool, Snipa's pool, Lucas Jones' CPU miner, wolf0's CPU miner, ccminer-cryptonight, sgminer-gm, xmr-stak, xmrig-nvidia, wolf-xmr-miner.

# Key reuse

It is important to realize that the security of the Monero network and your own Monero is dependent on the security of your Monero keys. Your Monero keys are *MONERO* keys. Do NOT use them for any other purpose, including claiming coins from a Monero fork. Using your keys to spend the same outputs twice on different forked blockchains will damage your privacy, and others', as both spends will bear the same key image, but different rings, with only your spent output in common (this does not impact stealth addresses nor confidential transactions, just ring signatures).  Moreover, by using such a "same keys" fork, the security of your Monero private keys now depends on those third parties.

 - Forkers, if you're forking Monero, DO NOT ask users to reuse their Monero keys, but have them create new keys for your fork.

 - Users, if a forker asks you to use your Monero keys for their fork (after this notification is published), they're trying to manipulate you into being part of a large scale attack on Monero.

Be safe, and don't reuse your Monero keys for any other purpose than using Monero.

