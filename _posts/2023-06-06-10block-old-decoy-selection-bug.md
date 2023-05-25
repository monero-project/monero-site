---
layout: post
title: Post-Mortem of 10-Block-Old Decoy Selection Bug
summary: Emprical analysis of the high severity vulnerability within the reference wallet. Updating to the latest version is strongly advised.
tags: [urgent, crypto, community]
author: jeffro256
---

{% t global.lang_tag %}

## Quick Facts

* Severity: HIGH
* Affected versions: GUI/CLI wallet versions v0.13.0.2 to v0.18.2.1
* Impact: Loss of sender anonymity for transactions spending funds exactly 10 blocks old
* What to do: [Update to v0.18.2.2 and above]({{ site.baseurl }}/downloads)

## Introduction

When the Monero wallet needs to construct a @transaction with a certain input, it also picks decoys inputs from the chain (@ring-signature) based on a certain distribution called a "gamma distribution". The gamma distribution makes picking recent decoys more likely than picking older decoys, mimicking how real users spend their funds. However, in the gamma picker code, there was a off-by-one bug that didn't allow the gamma picker to pick decoys which are exactly 10 blocks old.    

The wallet can, however, still spend owned outputs that are exactly 10 blocks old. This means that an external observer can guess the true spend of an input ring with very high likelihood if one of the ring members is exactly 10 blocks old.    

This bug has been patched in v0.18.2.2 and it is recommended that all users update their wallets as soon as possible. Since many third-party wallet applications rely on the core "wallet2" code, if you do not use the Monero Core CLI/GUI wallets, ask the development team of your wallet if they have upgraded to the new wallet2 code.    

Upgrading your wallet to v0.18.2.2 will not only improve your sender anonymity, but will increase the anonymity pool for all other users, including those using the older vulnerable wallet code.

## Technical Explanation

Large portions of the text below are copied directly from [j-berman's](https://github.com/j-berman) ["Post-Mortem of Decoy Selection Bugs"]({{ site.baseurl_root }}/2021/09/20/post-mortem-of-decoy-selection-bugs.html) in 2021

### More In-Depth Background


The decoy selection algorithm is designed to select outputs from across the blockchain based on observed spending patterns, as recommended in [Moser et al](https://arxiv.org/pdf/1704.04299/). The paper's analysis uses spending patterns from earlier versions of Monero - where in some cases, the real outputs used in transactions could be deduced with certainty - in order to arrive at a distribution of Monero user spending patterns.    

The paper highlights that users were more likely to spend outputs received relatively quickly than they were to spend outputs held for a long time. The paper then recommends factoring in the observed spending patterns when selecting outputs from across the blockchain to use as decoys, rather than apply an equal probability to the entire set of outputs from across the blockchain. This way, newer outputs would be more likely to be selected as decoys than older outputs, thus better obfuscating which output is real in users' transactions.

When the paper's recommendation [was first implemented in Monero v0.13.0.0](https://github.com/monero-project/monero/pull/3528), the wallet correctly applied the observed spending pattern from the tip of the blockchain when selecting decoys. However, when the algorithm [was upgraded in v0.14.1.0](https://github.com/monero-project/monero/pull/5389), the algorithm applied the observed spending pattern from 10 blocks prior to the chain tip. This was done because outputs younger than 10 blocks old are locked and cannot be spent, therefore it seemed logical to apply the distribution starting 10 blocks prior to the chain tip so as to only consider spendable outputs.

### The Off-By-One Bug

Before picking decoys for a new transaction, the wallet grabs the cumulative distribution of outputs across the blocks for the entire chain using the RPC command /get_output_distrubution.bin. To prevent the gamma picker from picking decoys from blocks that are younger than ten blocks, [an \"end\" pointer is calculated](https://github.com/monero-project/monero/blob/35e0a968bde4644a86f6f455b1a50ca25398fa15/src/wallet/wallet2.cpp#L970) which bounds the chain information that the gamma picker considers. You can see that the calculation does not consider the last 10 blocks (the block unlock time) of chain information. However, since a newly created transactions will not enter the current highest block, but the next future block, the newest information considered at the time of transaction construction is actually 11 blocks older than the next future block (which ostensibily a new transaction will reside in).

However, wallets will still construct transactions with owned ring members that are exactly 10 blocks old. If all wallets adhere to this flawed logic, then the only time an 10-block old ring member will show up in a transaction is if it is the true spend. This heuristic would be devastating for sender anonymity with 10-block old true spends.

The bug was patched in PR [#8794](https://github.com/monero-project/monero/pull/8794).

### Empirical Analysis

<img src="/blog/assets/2023-05-25-10block-old-decoy-selection-bug/percent-of-rct-inputs-exactly-x-blocks-old.png" position="center" style="border-radius: 8px;" alt="Percent of RCT inputs exactly N blocks old">

The graph you see above shows how much 10-block-old ring members vs 11-block-old ring members appeared in transactions over time. The blue line represents the percent of transaction ring members on-chain that are exactly 10 blocks old over time, with yellow representing the same for 11-block-old ring members. The dashed green line shows the ratio between these two values over time.    

There are a few interesting patterns, but the most relevant to this analysis is the spike in 10-block old ring member usage after the v0.18.2.2 release, the first wallet release with the bug fixed, as well as the increase in ratio between these two ages.    

Since there is currently no way for the core dev team to track wallet version usage, there isn't any readily available data on the proportions of users using old wallets versus new wallets, information which would help establish correlation in the 10-block old ring member data.    

However, such a noticeable spike in the number of 10-block old ring member usage coinciding precisely when the patched release was launched suggests that this patch did statistically alter decoy selection for young ring members.    

Also, thankfully, the data tells a more complex story than our worst-case heuristic scenario. There were still a lot of 10-block old ring member usage before the bug was patched, likely due to custom wallet software. This makes the deanonymization heuristic less potent than originally anticipated.

## Conclusion

Not to beat a dead horse, echoing j-berman in his [original decoy selection bug post-motem]({{ site.baseurl_root }}/2021/09/20/post-mortem-of-decoy-selection-bugs.html): "anyone with a background in statistics and probability theory is encouraged to join in discussions geared toward improving the algorithm." In hindsight, this bug could have been discovered if the statistical distributions had been analyzed carefully.    

Instead, the bug was [stumbled upon by accident](https://github.com/monero-project/monero/pull/8794#issuecomment-1478585470) while [attempting to fix an infinite while loop](https://github.com/monero-project/monero/pull/8794#issue-1633821949) during decoy selection. This brings me to a second point which I think is important but may be controversial: the wallet2 decoy selection code needs to be completely rewritten. The `wallet2::get_outs` function is [over 600 lines long](https://github.com/monero-project/monero/blob/94e67bf96bbc010241f29ada6abc89f49a81759c/src/wallet/wallet2.cpp#L8165), with few comments and inadequate testing.    

Seeing as how the important decoy selection is to the privacy model of Monero, the code which actually implements this functionality in most wallets is of substandard quality. There are a lot of great ongoing discussions relating to decoy selection like [non-coinbase-only selection for non-coinbase](https://github.com/monero-project/research-lab/issues/109), [coinbase consolidation transactions](https://github.com/monero-project/research-lab/issues/108), [ring binning](https://github.com/monero-project/research-lab/issues/84), [etc](https://github.com/monero-project/research-lab/issues/86).    

And while Monero has always been forward focused, it has also been more grounded and battle-tested as compared to other more experimental privacy-preserving coins. This only happens through the hard work and dedication of community members peering over the code and hardening it. Feel free to join the IRC/Matrix channels listed on the Monero [Hangouts]({{ site.baseurl }}/community/hangouts/) or [Workgroups]({{ site.baseurl }}/community/workgroups/) page to participate and communicate more with existing community members.