---
layout: post
title: Post-Mortem of Decoy Selection Bugs
summary: Patched in official wallet, update highly recommended
tags:  [core, crypto, dev, community]
author: Justin Berman (j-berman)
---

{% t global.lang_tag %}

When constructing a new @transaction, a Monero wallet references a past output a user received in a prior transaction, and uses it as an input to the new transaction. Today, the wallet mixes this output with a set of 10 decoy outputs selected from other people's transactions from across the blockchain (@ring-signature). Thus, an observer cannot tell which among the 11 total outputs is the real one a user spends in a transaction, obfuscating the link from the user's new transaction to their prior transaction. The decoy selection algorithm specifically handles the selection process for choosing which decoys to mix real outputs with when constructing a transaction.

Between Monero versions v0.14.1.0 and v0.17.2.2, the core wallet code had two bugs in the decoy selection algorithm that impacted Monero users' privacy:

1. The algorithm sometimes ignored very recent spendable outputs for consideration as decoys, thus rendering it clearer when users spent outputs immediately after the outputs were able to be spent.

2. If transaction volume were to increase substantially over a sustained period of time, then wallets would eventually construct transactions that reveal real outputs in the vast majority of cases.

Both have been patched in [v0.17.2.3]({{ site.baseurl }}/2021/08/31/monero-0.17.2.3-released.html) and it is highly recommended to upgrade as soon as able.

Users should also be aware that the implications of the first bug are not as severe as previously reported. It was [widely publicized](https://decrypt.co/76938/monero-developers-disclose-significant-bug-privacy-algorithm) that as a result of the first bug, some very newly spent outputs observed on chain were guaranteed identifiable as real outputs spent in a transaction, however, *this is not actually the case*. Since publication, we learned that at least one popular light wallet ([MyMonero](https://mymonero.com/)) has been using a [separate implementation](https://github.com/vtnerd/monero-lws/blob/faa51780f3f8e6c5c0c4235499b95c246e074f29/src/util/gamma_picker.cpp) of the decoy selection algorithm that *did not have the bug*. Therefore, MyMonero users could have feasibly constructed transactions that selected newly spendable outputs as decoys, which means newly spent outputs observed on chain were not guaranteed identifiable as real outputs.

Note that having distinct implementations of the decoy selection algorithm is not ideal. Ideally, all wallets would conform to the same spec of the decoy selection algorithm to ensure transaction uniformity, so that transactions on-chain cannot be tied to a particular wallet implementation.

## Technical Explanations

### Applying the algorithm incorrectly (Bug 1)

The decoy selection algorithm is designed to select outputs from across the blockchain based on observed spending patterns, as recommended in [Möser et al](https://arxiv.org/pdf/1704.04299/). The paper's analysis uses spending patterns from earlier versions of Monero — where in some cases, the real outputs used in transactions could be deduced with certainty — in order to arrive at a distribution of Monero user spending patterns. The paper highlights that users were more likely to spend outputs received relatively quickly than they were to spend outputs held for a long time. The paper then recommends factoring in the observed spending patterns when selecting outputs from across the blockchain to use as decoys, rather than apply an equal probability to the entire set of outputs from across the blockchain. This way, newer outputs would be more likely to be selected as decoys than older outputs, thus better obfuscating which output is real in users' transactions.

When the paper's recommendation [was first implemented in Monero v0.13.0.0](https://github.com/monero-project/monero/pull/3528), the wallet correctly applied the observed spending pattern from the tip of the blockchain when selecting decoys. However, when the algorithm [was upgraded in v0.14.1.0](https://github.com/monero-project/monero/pull/5389), the algorithm applied the observed spending pattern from 10 blocks prior to the chain tip. This was done because outputs younger than 10 blocks old are locked and cannot be spent, therefore it seemed logical to apply the distribution starting 10 blocks prior to the chain tip so as to only consider spendable outputs. However, the implementation ended up ignoring some very recent spendable outputs for consideration as decoys. Additionally, it caused the algorithm to select marginally fewer decoy outputs roughly 10 to 20 blocks old.

This bug was patched in PR [#7821](https://github.com/monero-project/monero/pull/7821).

### Divide by 0 (Bug 2)

The upgrade to the decoy selection algorithm in v0.14.1.0 factored in block size variance in order to better match spending patterns and reduce bias toward selecting coinbase outputs as decoys. When selecting a decoy, the algorithm first determines the age in seconds that the decoy output should be (by using the distribution of known spending patterns, as discussed above). Then, the algorithm divides the expected output age in seconds by the average seconds spaced between each output observed over the trailing year, in order to arrive at the output in the chain that should be used as a decoy. If the number of outputs in a year is equivalent to the number of seconds in a year, then the average seconds spaced between each output over the year is 1.

The calculation of average seconds per output had a bug where it would [truncate](https://en.wikipedia.org/wiki/Truncation) the result. If the average seconds per output were to fall below 1, the result would have truncated to 0. When the algorithm divides the expected output age in seconds by 0, it ends up selecting decoys exclusively from the most recent spendable block on most systems. Thus, if output volume were to increase substantially over a sustained period, such that the seconds spaced between each output over the trailing year were to fall below 1 (i.e. the number of outputs over the trailing year exceeds the number of seconds in a year), then the algorithm would have selected decoys from the most recent spendable block in the vast majority of cases. At the time of this publication, the average seconds per output is around 1.7.

This divide by 0 bug was patched in PR [#7845](https://github.com/monero-project/monero/pull/7845).

## Conclusion

Work to improve the decoy selection algorithm is [ongoing](https://github.com/monero-project/research-lab/issues/86). It has room for improvement to provide stronger protection to users under a wider set of circumstances. A call to arms: anyone with a background in statistics and probability theory is encouraged to join in discussions geared toward improving the algorithm. Discussions are frequent in the #monero-research-lab and #monero-dev IRC/Matrix channels. While innovative research to improve Monero's cryptography continues in parallel in order to substantially increase the number of decoys mixed with real outputs in a transaction (i.e. increase the ring size), research to improve the decoy selection algorithm's statistical obfuscation techniques is also receiving more attention. If you feel you have the requisite skills, keep in mind there is [growing interest](https://www.reddit.com/r/Monero/comments/pkg3d6/the_monero_project_should_actively_recruit/) from the Monero community to actively recruit you to the Monero project. If you are interested, consider contacting [a Monero workgroup]({{ site.baseurl }}/community/workgroups/ ).
