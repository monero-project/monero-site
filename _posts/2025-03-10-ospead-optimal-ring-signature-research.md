---
layout: post
title: OSPEAD - Optimal Ring Signature Research
summary: New research funded by the Monero community provides a method of optimal defense against statistical analysis of ring signatures. However, the research also suggests greater privacy risks in the current Monero protocol.
tags: [research, community]
author: Rucknium
---

## TL;DR

New research reveals the timing of Monero spending patterns in probabilistic form. The research could be used to improve Monero user privacy in the future. In the meantime, Monero users with extreme threat models should be aware that anti-privacy adversaries can leverage timing information to increase the probability of guessing the real spend in a ring signature to approximately 1-in-4.2 instead of 1-in-16.


## Introduction

Four technologies protect the privacy of Monero users. Dandelion++ protects users' IP addresses from being linked to their transactions. [Confidential transactions]({{ site.baseurl }}/resources/moneropedia/ringCT.html) hide the amount of value that is transferred between users. Monero's [stealth address]({{ site.baseurl }}/resources/moneropedia/stealthaddress.html) technique produces one-time-use addresses on the blockchain that cannot be linked to specific wallets without voluntary disclosure of view keys. [Ring signatures]({{ site.baseurl }}/resources/moneropedia/ringsignatures.html) obfuscate which stock of coins was spent in a transaction by combining the real spend with 15 decoy spends. This blog post discusses improvements and threats to Monero's ring signature privacy model.

As the name implies, a "decoy" serves its purpose well if it looks like the real thing. Decoys that do not match the spending patterns of real users will fail to draw the attention of an anti-privacy adversary. One of the most important spending patterns to match is the timing. The age of a stock of coins that a user spends, like units of physical paper currency circulating between consumers and merchants, forms a random probability distribution.

Monero's current decoy selection algorithm is based on research by Möser et al. (2018)[^4], which used de-anonymized transactions in the first three years of Monero's history whose real spend was known due to inadequate safeguards in the protocol. In 2017, the protocol safeguards were strengthened to thwart the techniques used by Möser et al. (2018)[^4]. As a result, de-anonymized transactions could no longer be used to update the decoy selection distribution to align it with the real spend distribution. Another way forward was needed.

## The research

Several peer-reviewed research articles suggested that near-optimal privacy for a given ring size could be provided by using a decoy distribution that closely mimics the real spend distribution (Aeeneh et al. 2021 [^1]; Kumar et al. 2017 [^3]; Möser et al. 2018 [^4]; Ronge et al. 2021 [^6]). However, some of the same papers doubted that the real spend distribution could be estimated reliably when only anonymized data was available. Rucknium, a researcher with the Monero Research Lab, proposed a method to directly estimate the real spend distribution using the ring signature data on the Monero blockchain. Members of the Monero community generously donated to fund the research plan, known as [Optimal Static Parametric Estimation of Arbitrary Distributions (OSPEAD)](https://github.com/Rucknium/OSPEAD).

OSPEAD works by chaining together two statistical techniques. First, the Bonhomme-Jochmans-Robin estimator separates the distribution of rings that use the "standard" decoy selection algorithm from the distributions of rings that use decoy selection algorithms of "third-party" wallet software (Bonhomme, Jochmans, & Robin 2016).[^2] Next, the Patra-Sen inversion estimator is used to separate the decoy distribution from the real spend distribution (Patra & Sen 2016).[^5] Note that the OSPEAD research has not yet been formally peer-reviewed.

Producing a reliable estimate of the real spend age distribution is a double-edged sword. It provides great privacy when implemented in a decoy selection algorithm, yet it also enables an anti-privacy adversary to more easily guess the real spend when the actual decoy selection algorithm used by users is very different from the real spend distribution. 

## Privacy risk

As stated above, Monero's current decoy selection algorithm is based on data from the first three years of Monero's history when the number of transactions per day was less than 10 percent of current (2025) transaction volume. Real spending patterns have changed since 2017, yet the decoy selection algorithm has changed little.

The Maximum A Posteriori (MAP) Decoder attack, first described in hypothetical form by Aeeneh et al. (2021)[^2], leverages the difference between Monero's real spend distribution and its decoy distribution. Using the MAP Decoder attack and the real spend distribution estimated in the OSPEAD research, an anti-privacy adversary has a 1-in-4.2 probability of correctly guessing the real spend at current ring size of 16.

Users should consider the following metaphor to understand the mechanics of the attack. There are 16 horses scheduled for a race. The horses are not equally fast. According to the betting markets, one of the horses has a 1-in-4.2 probability of winning. The MAP Decoder attack does not remove 12 out of the 16 horses from the race, and then randomly pick among the remaining 4 with equal probability. Instead, it always bets on the one horse that is most likely to win. It wins the bet (guesses correctly) in 1 out of 4.2 races.

Let's continue the analogy of the horse race bettor. Did they pick the winning horse (the real spend)? Unlike a normal race, we usually don't learn the outcome (if the guess was correct). This limits the impact of the attack in practice, especially since the best guess is incorrect the majority of the time, on average.

Put another way, if you guess the real spend in 4 Monero rings, you will have guessed 1 of those correctly (on average), but you don't know which of those guesses is correct. Is that useful information? That depends on the standard of evidence of the adversary.

Probabilistic guessing can create elevated privacy risk to users with extreme threat models such as those targeted by blockchain surveillance firms, especially when combined with other de-anonymizing attacks. Interested users are encouraged to read the [OSPEAD GitHub repository](https://github.com/Rucknium/OSPEAD), where code and documents are released under open source licenses.

## Developments to come

The OSPEAD-derived decoy selection distribution could be deployed to mitigate the risk of the MAP Decoder attack. However, a Monero network upgrade (hard fork) would be required for safest deployment. A network upgrade, though necessary for major improvement to Monero, is disruptive to the Monero ecosystem. The costs may outweigh the benefits.

Currently, the next expected hard fork is set to deploy [Full-Chain Membership Proofs]({{ site.baseurl }}/2024/04/27/fcmps.html), which eliminate the weaknesses of the ring signature privacy model.

## References

[^1]: [Aeeneh, S., Chervinski, J. O., Yu, J., & Zlatanov, N. (2021), New Attacks on the Untraceability of Transactions in CryptoNote-Style Blockchains. Paper presented at _2021 IEEE International Conference on Blockchain and Cryptocurrency (ICBC)_.](https://doi.org/10.1109/ICBC51069.2021.9461130)

[^2]: [Bonhomme, S., Jochmans, K., & Robin, J.-M. (2016). Non-parametric estimation of finite mixtures from repeated measurements, _Journal of the Royal Statistical Society. Series B (Statistical Methodology)_, 78(1), 211–229.](https://doi.org/10.1111/rssb.12110)

[^3]: [Kumar, A., Fischer, C., Tople, S., & Saxena, P. (2017), A Traceability Analysis of Monero’s Blockchain. Paper presented at _European Symposium on Research in Computer Security (ESORICS)_.](https://doi.org/10.1007/978-3-319-66399-9_9)

[^4]: [Möser, M., Soska, K., Heilman, E., Lee, K., Heffan, H., & Srivastava, S., et al. (2018). An Empirical Analysis of Traceability in the Monero Blockchain, _Proceedings on Privacy Enhancing Technologies_, 2018(3), 143–163.](https://doi.org/10.1515/popets-2018-0025)

[^5]: [Patra, R. K., & Sen, B. (2016). Estimation of a two-component mixture model with applications to multiple testing, _Journal of the Royal Statistical Society. Series B (Statistical Methodology)_, 78(4), 869–893.](https://doi.org/10.1111/rssb.12148)

[^6]: [Ronge, V., Egger, C., Lai, R. W. F., Schröder, D., & Yin, H. H. F. (2021). Foundations of Ring Sampling, _Proceedings on Privacy Enhancing Technologies_, 2021(3), 265–288.](https://doi.org/10.2478/popets-2021-0047)
