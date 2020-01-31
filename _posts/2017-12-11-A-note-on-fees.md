---
layout: post
title: A note on fees
tags: [crypto, research, community]
author: dEBRUYNE / ArticMine
---

Lately, a common reoccurring complaint has been that fees are too expensive. Whilst we don't disagree with that statement, we have to thoroughly analyze the situation first. Furthermore, the notion of devs having to release new binaries with lower fees is myopic, because (i) it'd merely kick the can down the road, (ii) changing the constants or formulas requires a hard fork, i.e., they are enforced on a consensus level, and (iii) constantly intervening would be contradictory to our grass-roots, decentralized nature.  

Let's start by comparing Monero's per kB fees to the per kB fees of other (hybrid) proof-of-work coins. Fees per kB for a typical transaction (2 inputs + 2 outputs):  

- **Bitcoin:** ~$26.90  
- **Ethereum:** ~$2.91  
- **Bitcoin Cash:** ~$0.07
- **Litecoin:** ~$0.10  
- **Dash:** ~$0.07  
- **Monero:** ~$0.24  

As you can see, the per kB fee of Monero is fairly low. However, due to the high transaction size, the absolute default fee (in $ terms) is quite high. Note that the transaction size is this big due to Monero's inherent default privacy, i.e., the range proofs, which mask the amount values, make up ~12 kB of a single transaction. RingCT, however, was absolutely necessary to strengthen the privacy of the network. More specifically, there were a lot of privacy "leaks" when Monero didn't mask amounts yet. Fortunately, [Bulletproofs](https://getmonero.org/2017/12/07/Monero-Compatible-Bulletproofs.html) will reduce transaction sizes by at least 80%.  

-----------------

To thoroughly analyze the situation, let's continue with examining the constants. We start with examining the penalty function and the dynamic block size algorithm. The formula is as follows:  

**Penalty = BaseReward * ((BlockSize / M<sub>N</sub>) - 1)²**  

The new reward is:  

**NewReward = BaseReward - Penalty**  

Where:  

 -  M<sub>N</sub> is the median of the block size over the last N blocks, with N being [100](https://github.com/monero-project/bitmonero/blob/master/src/cryptonote_config.h#L57) in Monero  
 -  BlockSize is the size of the current block  
 -  BaseReward is the reward as per the emission curve or where applicable the tail emission  
 -  NewReward is the actual reward paid to the miner  
 -  The maximum allowed block size is 2M<sub>N</sub>  

Note that the formula of the BaseReward is defined [as follows](https://bitcointalk.org/index.php?topic=583449.0):  

**BaseReward = 2 * ((S - A) * 2<sup>-20</sup> * 10<sup>-12</sup>)**  

Where:  

 -  2 is the adjustment factor for the switch to two minute blocks  
 -  S is the initial number of atomic units is = 2<sup>64</sup> - 1  
 -  A is the current circulation, which can be found [here](https://moneroblocks.info/). In addition, the current circulation (emission) displayed on the block explorer has to be multiplied with 10<sup>12</sup> (Monero uses 12 decimal places) to convert it to atomic units.  

Note that the minimum block size limit is 300 kB. Thus, miners are able to construct blocks up to 300 kB without incurring a penalty. In other words, aforementioned penalty function only "kicks in" for blocks bigger than 300 kB.  

Now, a default transaction in Monero, i.e., one that has two inputs and two outputs, is approximately 13.2 kB. Let's plug this into the formula:  

Assuming a current `BaseReward` of 5.7 XMR:  

`Penalty` = 5.7 * ((313.2/300)-1)², which yields ~0.011 XMR.  

Note that the `BaseReward` was significantly higher 6-12 months ago, which translates to a higher penalty.  

Now, miners need incentive to expand the block size. Therefore, the fee from including one additional transaction (above 300 kB) needs to outweigh the penalty. Otherwise, miners will simply fill blocks until 300 kB and exclude any other transactions, which would lead to a congested network and a large mempool. In sum, the current default fee (~0.013) was set to incentivize miners to include one additional transaction in their blocks without losing revenue.  

As you can see from aforementioned penalty function, the penalty will go down when the base reward decreases. Furthermore, as can be easily spotted by graphing the function, the penalty function is more "lenient" in the beginning of the function. This means that any decrease in transaction size translates to a bigger than equal decrease in fees. Put differently, for example, an 80% reduction in transaction size could lead to an 90% reduction in fees. Let's play around with the formula to get some more concrete numbers. Assuming single-output bulletproofs, the transaction size of a typical transaction would be ~2.5 kB. Now, let's also assume that we want to incentivize miners to expand the block size with two transactions without losing revenue. That is, they will be able to include two additional transactions (above the minimum block size limit) without the penalty outweighing the fees. Plugging in the numbers, we get:  

`Penalty` = 5.7 * ((305/300)-1)², which yields ~0.0016 XMR or ~0.0008 XMR per typical transaction.  

Reducing the transaction size with approximately 80%, but keeping the same minimum block size limit might be a bit blunt. Therefore, it could be that the minimum block size limit would be lowered to 100, 150, 200, or 250 kB. Let's plug in the numbers again:  

`Penalty` = 5.7 * ((255/250)-1)², which yields ~0.0023 XMR or ~0.00115 XMR per typical transaction.  

`Penalty` = 5.7 * ((205/200)-1)², which yields ~0.0036 XMR or ~0.0018 XMR per typical transaction.  

`Penalty` = 5.7 * ((155/150)-1)², which yields ~0.0063 XMR or ~0.00315 XMR per typical transaction.  

`Penalty` = 5.7 * ((105/100)-1)², which yields ~0.014 XMR or ~0.007 XMR per typical transaction.  

You can graph all the outcomes by setting M<sub>N</sub> to `x` and `BlockSize` to `x+5`.  

-----------------

One might ask oneself, how does the dynamic fee algorithm come into play? First, to clarify, the default fee is set to account for the penalty in a bare minimum case. That is, a case where miners expand the block size with one additional transaction above the minimum block size limit. More specifically, in the current situation it would mean creating a block of 313 kB (to reiterate, the minimum block size is 300 kB). Once the median block size (of the last 100 blocks) significantly diverges from the minimum block size, the dynamic fee algorithm comes into play.  

Let's examine the dynamic fee algorithm:  

**Fee per kB = (R/R<sub>0</sub>) * (M<sub>0</sub>/M) * F<sub>0</sub> * (60/300) * 4**  

Where:  

- R is the base reward  
- R<sub>0</sub> is the reference base reward (10 XMR)  
- M is the block size limit  
- M<sub>0</sub> is the minimum block size limit (300 kB)  
- F<sub>0</sub> is 0.002 XMR  
- 60/300 is the adjustment factor to account for the increase of the minimum block size limit (60 kB -> 300 kB)  
- 4 is the adjustment factor to account for the default fee multiplier. That is, the lowest fee level uses a multiplier of 1, whereas the default fee level uses a multiplier of 4  

As a practical example, a few moons ago the median block size increased to approximately 400 kB and the default fee went down to ~0.0095. As we can see from the formula, this approximately matches the theoretical fee. That is:  

`Fee per kB` = (6.5/10) * (300/400) * 0.002 * (60/300) * 4 = ~0.0008  

Subsequently, multiply with the size of a typical transaction (~13 kB), which yields ~0.01 XMR.  

Basically the inverse of the percentage increase of the median block size (against a base of the minimum block size) translates to the percentage reduction in fees. More specifically, a 600 kB median block size, which is a 100% (or factor 2) increase translates to a 50% (1/2) reduction in fees.  

So why did the significant price increase not lead to a significant reduction in absolute fees, i.e., fees in XMR terms? Well, basically, the factor increase in price was significantly higher than the factor increase in usage. Furthermore, the median block size needs to be constantly above 300 kB in order for the dynamic fee algorithm to work properly. Moreover, the algorithm was designed to correlate with price, but, as we can see, price is imperfectly correlated with usage. In sum, whilst usage has grown a lot, it hasn't grown as much as the price and therefore fees (in XMR terms) have not declined yet.  

-------------

From combining the penalty formula and the dynamic block size formula with the dynamic fee formula we can infer that a higher minimum block size limit (for example, 300 kB) leads to lower initial default fees, but fee reduction (by the dynamic fee algorithm) being somewhat "slow". By contrast, a lower minimum block size limit (for example, 150 kB) leads to higher initial default fees, but faster fee reduction.  

In conclusion, whilst fees are currently too high, they, most likely, won't be anymore in the future. In addition, more research has to be conducted on the topic of the minimum block size limit, because, preferably, we'd like to use a limit that doesn't require future intervention anymore.  

----------------

**A few remaining notes:**  

1. *Median* fees were taken from [Bitinfocharts](https://bitinfocharts.com/).  

2. A more in depth analysis (by ArticMine) of the penalty function can be found [here](https://bitcointalk.org/index.php?topic=753252.msg13591241#msg13591241).  

3. The penalty function in the original [CryptoNote whitepaper](cryptonote.org/whitepaper.pdf) is somewhat different. More information can be found [here](https://monero.stackexchange.com/questions/1067/block-reward-penalties-and-dynamic-block-size).  

4. Code details and the actual implementation of the dynamic block size algorithm can be found [here](https://github.com/monero-project/monero/blob/master/src/cryptonote_basic/cryptonote_basic_impl.cpp).  

5. Code details and the actual implementation of the dynamic fee algorithm can be found [here](https://github.com/monero-project/monero/commit/82dbba10d467e28e56929e2e7f3b1f04d4635da4).  
