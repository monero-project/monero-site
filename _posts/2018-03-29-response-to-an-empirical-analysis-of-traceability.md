---
layout: post
title: Response to "An Empirical Analysis of Traceability in the Monero Blockchain", Version 2
summary: A response to Malte Möser, et al.
tags:  [core, crypto, research, community]
author: Justin Ehrenhofer (SamsungGalaxyPlayer, sgp)
---

### Preface

On March 17, 2018, several researchers published the [second version](https://arxiv.org/pdf/1704.04299.pdf) of "An Empirical Analysis of Traceability in the Monero Blockchain."  I previously authored a response to the [initial version](https://arxiv.org/pdf/1704.04299v1.pdf) with the help of many other community members [here](https://getmonero.org/2017/04/19/an-unofficial-response-to-an-empirical-analysis-of-linkability.html). The researchers have changed the paper in a significant enough way that it warrants a separate response.

The Monero contributors and community at large always appreciate research done on Monero's technology. They heavily encourage constructive criticism of all cryptocurrencies. The Monero project recommends future research into several findings of the paper, which are mentioned later in this post.

To give some background on the functions of Monero, its privacy is provided through three major technologies. Stealth addresses hide the receiving addresses of transactions, so outside observers do not know which addresses certain outputs (outputs are containers of money, similar to bank notes) are assigned to. Ring signatures hide the spent outputs among other seemingly plausible ones selected according to an advanced technique. Ring confidential transactions (RingCT), an improvement to ring signatures, hides the transaction amount. Monero has had mandatory stealth addresses since inception, a mandatory minimum ringsize since March 2016, and widely-used RingCT since January 2017. This paper primarily focuses on the effectiveness of ring signatures, which provide transaction plausible deniability and obfuscate the real origin of funds being spent.

Monero researchers sought to evaluate the effectiveness of its privacy shortly after inception. Most notably, two research papers [MRL-0001](https://lab.getmonero.org/pubs/MRL-0001.pdf) ("A Note on Chain Reactions in Traceability in CryptoNote 2.0") and [MRL-0004](https://lab.getmonero.org/pubs/MRL-0004.pdf) ("Improving Obfuscation in the CryptoNote Protocol") were published in September 2014 and January 2015, respectively, which sought to evaluate the strength of ring signatures. These two papers are referenced in the Malte Möser, et al. paper. These papers found shortcomings in Monero's ring signature scheme which did not mandate a minimum ringsize at the time. [MRL-0004](https://lab.getmonero.org/pubs/MRL-0004.pdf) recommended setting a minimum ringsize of 3, the bare minimum to prevent chain reactions, and then increase the minimum to 5 in a later update. Monero followed these recommendations. Later in February 2016, MRL published [MRL-0005](https://lab.getmonero.org/pubs/MRL-0005.pdf) ("Ring Confidential Transactions").

### Notable Findings

This research paper includes several findings, some of which are completely new, others are quantified for the first time, and others reinforce previous research.

1. Transactions with zero decoys (previously named "mixins") have no ring signature protection. This is self-evident.

2. Zero-decoy transactions have a negative impact on transactions with decoys. This paper helps quantify the impact that these zero-decoy transactions have on transactions with decoys. Between the period until March 2016, most transactions did not use any decoys, leading to a very large proportion of transactions during this period having their ring signatures effectively reduced, often to only the real input.

3. From March 2016 through January 2017, the network recovered as the minimum ringsize was set, with the proportion of transactions with deducible inputs falling from about 85% to about 40% (see Figure 5).

4. In January 2017, RingCT was implemented as an optional feature. Although it was not yet mandatory, over 99% of transactions on the network used RingCT by February 2017. As a result of the quick adoption, the proportion of transactions with deducible inputs fell to nearly 0%. Since RingCT uses its own outputs, RingCT transactions are not susceptible to the negative impact of zero-decoy transactions, the largest attack mentioned in this paper. This version looked at transactions through April 2017, longer than the initial version which went through February 1, 2017.

5. In September 2017, RingCT was made mandatory for all transactions.

6. The paper looked into the impact of mining activity as recommended in the [previous response](https://getmonero.org/2017/04/19/an-unofficial-response-to-an-empirical-analysis-of-linkability.html). Figure 8 shows the proportion of network hashrate associated for specific pools with transparent mined blocks and payouts. This proportion peaked around 40% in April 2017, with most periods below 30%. Figure 9 shows the proportion of pool-related transactions was approximately 95% through all of 2015, and it was approximately 30% in April 2017. The proportion is likely too insignificant to make a meaningful impact on most transactions after January 2017. More importantly, however, the paper looked at the proportion of transactions, not the proportion of visible outputs, meaning any comparison is indirect. However, it is possible that transactions made during several days of low transaction volume until September 2017 could reach a meaningful threshold. The potential risk was further mitigated in September when the minimum ringsize was increased to 5.

7. The paper set a bound for daily Monero transaction volume on AlphaBay between $0 and $60,000 in early 2017, with a maximum of up to 10% of all AlphaBay transaction volume and up to 25% of all Monero transaction volume. AlphaBay was a darknet website that accepted Bitcoin and Monero before it was seized and shut down in July 2017. The Monero project condemns illicit use of Monero.

8. Monero uses a specific input selection algorithm for choosing which decoys to include in its ring signature. This algorithm has changed over time to be more realistic. In the past, the selection algorithm typically selected decoys that were significantly older than the real input, meaning the newest input was the real one most of the time. Figure 12 shows the effectiveness of the input selection algorithm used between January 2017 and September 2017 for the official wallet software. The algorithm was updated following the results of the initial version of the paper. The latest version has not tested this new algorithm, even though it refers to it as current. [One of the authors has acknowledged the mistake](https://twitter.com/socrates1024/status/979118079572574208) and he has promised to consider making revisions. We are happy with their response. The tested (old) selection algorithm selects approximately 25% of the decoys from the past 5 days. The [new algorithm](https://github.com/monero-project/monero/pull/1996) selects approximately 50% of the decoys from the past 1.8 days. While the current algorithm is not considered as comprehensive as the one suggested in the paper, it should be more effective than the tested algorithm.

9. The paper suggested a new input selection algorithm. The researchers observed the spend-time distribution for Monero and Bitcoin, and they fitted a parametric model on top of Monero's distribution. This selection algorithm performs significantly better than the tested algorithm that was implemented in Monero from January 2017 through September 2017.

10. The paper introduced a decoy sampling scheme they called "binned mixin sampling." Other research into this sort of selection scheme is limited.

11. The paper lists several known illicit uses of Monero and the steps that law enforcement and attackers can use to potentially learn more about these Monero transactions. The Monero project condemns illicit use of Monero.

12. The paper ends with three recommendations: 1) updating the decoy sampling distribution, 2) avoiding publicly deanonymized outputs as decoys (eg: public pool payouts), and 3) warning users their transactions before RingCT are vulnerable to tracing analysis. The first two are forward-looking recommendations for improving the protocol. The Monero project agrees with both of these forward-looking recommendations. The Monero project stands by its statement that it has always been transparent about Monero's limitations and suggested improvements. The privacy-enhancing recommendations discussed in [MRL-0004](https://lab.getmonero.org/pubs/MRL-0004.pdf), publicly published in January 2015 (over 2 years before the first version of the Malte Möser, et al. paper) were not fully-implemented until September 2017. In fact, the exact same limitations of zero-decoy transactions were discussed in [MRL-0004](https://lab.getmonero.org/pubs/MRL-0004.pdf). Below is a relevant quote from [MRL-0004](https://lab.getmonero.org/pubs/MRL-0004.pdf) which covers the same major attack as in the Malte Möser, et al. paper:
    
> To see an example of this, say that Alice fashions a ring signature using the mixins {Bob, Cynthia, Doug}. For any observer, then, the list of possible senders of the transaction is clearly {Alice, Bob, Cynthia, Doug}. If Bob, Cynthia, and Doug then each spend their transaction outputs with zero mix-ins, then it is obvious [to] any observer that they no longer own those transaction outputs. Hence, they can be excluded from the list of possible senders of Alice’s transaction, and Alice is now exposed as the sender of her transaction. It is not as if only three users, Bob, Cynthia, and Doug, spent their transactions in the clear, but as if all four users spent their transactions in the clear. Hence, any signatures using Alice’s transactions as a mix-in are now also compromised. If enough transactions are affected, there can be second-order effects, leading to a chain reaction.

### Recommendations

The Monero project has the following recommendations for the research paper:
    
1. We recommend the authors update the wording regarding the selection algorithm used between January 2017 and September 2017 to be defined as such, not as the current selection algorithm. The Monero project highly encourages the authors to test the [current selection algorithm](https://github.com/monero-project/monero/pull/1996), which was implemented specifically to address concerns in the first version of the paper. Furthermore, we recommend adding information saying the selection algorithm was modified in the applicable update section in September 2017, after version 0.11.0.

2. We recommend that the authors acknowledge the earlier expression of zero-decoy transactions as a concern, and that the risk was accurately described (though not as thoroughly quantified) in [MRL-0004](https://lab.getmonero.org/pubs/MRL-0004.pdf), published in January 2015. While we agree that certain additional communications can be made, we encourage the authors to focus on this being a previous (since patched) vulnerability that was publicly documented for several years prior. The Monero project feels that it has diligently made this information available to the public under a resources section of its website.

### Further Research

The Monero project recommends further research into the following topics discussed in this paper:
    
1. Further research into the change in Bitcoin's spend-time distribution over time to see the magnitude (if any) of its change. Compare this to other cryptocurrency projects.

2. Further research into "binned mixin sampling." This paper introduced the first documented possible recommendation for its use.

3. Further research into the impact of visible pool transactions and outputs. Create a model to see what proportion of outputs were impacted over time, potentially causing a proportion of transactions to be impacted during certain time periods.

4. Further research into the possible impact of key image reuse through chain splits, potentially causing a number of outputs to be deanonymized. While this specific attack was not mentioned in the paper, it could have similar implications to other attacks.

### Conclusion   

The second version of "An Empirical Analysis of Traceability in the Monero Blockchain" improved upon the original in many ways. The Monero project is thankful to have many of the world's top researchers evaluating the effectiveness of Monero's ring signatures.

The Monero project would like to remind everyone that the largest vulnerability in this paper was noted over two years before, was mitigated over a year before, and was nearly completely resolved before the first version of the paper was published. Nonetheless, the paper quantifies the zero-decoy impact in the most meaningful way to date, introduces several input selection improvements, and pioneers research into the impact of public pool transaction information.

This press release was shared before publication with Rachel Rose O'Leary of CoinDesk, Jamie Holmes of BTCMANAGER, and all the listed paper authors.
