An Unofficial Response to 
“An Empirical Analysis of Linkability in the Monero Blockchain” 
by Decentralized Systems Lab, authored by Andrew Miller, et al. 
 
PREFACE

This release attempts to contain the opinions of Monero’s Core Team and active contributors. It is possible that not every viewpoint is expressed, but this paper includes the best response to our ability that encapsulates all these opinions. We open all discussion to how certain viewpoints are represented, and the purpose of this response is solely for easier documentation by interested parties. We have done the best to include sources wherever possible, and to be as accurate as possible. For any concerns with this publication, please express them to dev@getmonero.org or on https://reddt.com/r/Monero. 
The Monero contributors and community at large always appreciate any research done on Monero’s technology. We heavily encourage constructive criticism of all cryptocurrencies. 

NOTABLE FINDINGS

The Monero contributors appreciate the effort that has gone into this mentioned publication and research methods. It helps quantify several realizations that had already been known to the Monero community at large for a long time (ref: MRL-0001 and MRL-0004), including the following: 
0-mixin transactions (those that only include the real input and no others) are traceable on the blockchain. MRL-0001 (published September 2014) also points this out, and Monero reacted to the concern by prohibiting 0-mixin transactions from the network in April 2016. The current minimum mixin allowed on the network is 2, which was mandated in March 2016. In September 2017, the minimum will be increased to at least 4, though there is some discussion going on in the community to choose the exact value. 
The prohibition of 0-mixin transactions has allowed the network to recover relatively quickly by making it harder to know which input is used. This paper helps quantify this recovery (see appendix). 
The proportion of transaction inputs that are deductible has fallen substantially from 1 January 2016 to 1 Feb 2017 with 2 and 4 mixin transactions. Respectively, these fell from 82% and 72% to 41% and 23% (see appendix). 
The phenomenon where the most recent input is the real one is a concern when using Monero. There is no way to prove that this input is indeed the correct one, and with recent transactions, the assertion is nearly impossible to prove and is accurate less than half of the time. As the report states, there is about a 40% chance that the first input in a default transaction is the real one. Ideally, this number should be closer to 20%. Note that this does not mean that there is a 40% chance that this transaction is traceable (see appendix). 

RECOMMENDATIONS AND RESPONSES

The following are the recommendations listed in the paper and our responses to them: 
1. The mixing sampling distribution should be modified to closer match the real distribution. We agree with this recommendation. The discussion covering the possible ways to do this, along with all associated research, can be seen on GitHub. As the paper acknowledges, we made a temporary improvement to the selection algorithm to choose more recent inputs (instead of pure random selection) in December 2016. Further improvements are required, and they are planned to be ready before or at the September 2017 hardfork date. 
2. The Monero community should engage in further data-backed analysis of privacy claims. We agree with this recommendation. Data-backed claims are an excellent way to improve the Monero privacy and security features. As stated in the paper, the threats discussed in the paper were discussed in the community previously. Unlike the paper claims, these discussions were not “informal”; instead, they were published in our MRL-0004 research paper in January 2015. Nevertheless, several of these attack vectors explained in the Decentralized Systems Lab paper are quantified for the first time. 
3. Monero users should be warned that their prior transactions are likely vulnerable to linking analysis. We mostly disagree with this recommendation. The vulnerabilities of 0-mixin transactions were well-documented and continuously shared with the Monero community while they were still allowed. The first research paper shared in the Monero community (MRL-0001) was published in September 2014. Furthermore, most of Monero’s community growth occurred after these 0-mixin transactions were prohibited across the network. 

CONCERNS

The Monero community would like to list several concerns with this research paper. They are documented below: 
1. We believe that a large proportion of 0-mixin transactions are pool payouts. These transactions should come to no one’s surprise that they are traceable, since the pools themselves publish the payment amount to each address. Thus, we believe that the claims stemming from the traceability of transactions before 0-mixin transactions were banned to be misplaced. If, for example, 50% of non-pool payouts used a positive mixin and 0% of pool payouts did, then the traceability is less for the transactions that use these mixins and greater for pool payouts. We recommend that this is acknowledged in a later iteration of the paper. Ideally, the proportion of pool payouts can be found and compared to the proportion of non-pool payouts, with different traceability proportions for each. We acknowledge that these pools using 0-mixin transactions undermines the non-pool payout transactions, though these non-pool transactions would be better shielded than if they were using 0-mixins themselves (source). 
2. We think further emphasis should have been placed in the paper to explain that the claims are largely no longer applicable with the state of Monero transactions since March 2016. Though it is mentioned that their first analysis method has little if any current or future relevance, the claims still include these transactions. Furthermore, the report incorrectly states that most transactions in 2016 are traceable with the 0-mixin method. This is largely untrue, since these were prohibited in March, and most transaction volume for the year occurred during and after August. The transactions that are most vulnerable are those in 2014 and 2015. 
3. Under the “ethics” section, they state that the paper was published immediately before countermeasures could be deployed. While this is understandable from the given perspective that the blockchain history is not going away anytime soon (or ever), we wish that they had given us an advance copy of the finished draft so that we could have discussed our concerns with the report itself. We wish not to censor any of the research (instead, we encourage research!); however, we hope that future care can be taken before the release of misleading assertions. 
4. Andrew Miller was named in the paper as a consultant to the Zerocoin Electric Coin Company and a board member of the Zcash Foundation. Zcash is a cryptocurrency with a focus on privacy that uses different technology than Monero. However, he downplayed his involvement in an interview he later participated in about this paper. We feel author involvement in cryptocurrencies with similar interests should be fully disclosed, though he did refer people to the first page of the report. Nevertheless, we feel this is extremely poor form. 

OTHER INFORMATION

1. The timing of the publication. This paper was released approximately an hour before the hardfork. While it is impossible to know the reason for the specific timing without an admission, we speculate that this was timed to draw as much attention to the paper as possible. More people would have been tuning in to see how the hardfork was proceeding than typical community participation traffic. 
2. This paper was shared as “new research” about Monero. While the research is itself new and some of the analysis is the first time that some concerns have been quantified, these concerns themselves are not new. In sharing the paper, the authors often posted misleading claims that asserted these concerns were new. 
3. The Monero Core Team was given an advance draft of the report on 15 March 2017. This report at the time looked only at transactions before January 2017. All further edits to the paper were published before consulting with the Core Team. Riccardo Spagni, known to many as fluffypony or fluffyponyza, responded commending the efforts and stated at the time that the 0-mixin analysis confirmed previous work on MRL-0004. During the email exchange, Spagni suggested that the research also be published in the Monero Research Lab research, an idea Andrew Miller seemed open to at the time. Furthermore, the real release date was later than the target given to the Core Team, and the Core Team was not given a new estimated date of release. 
4. The paper refers to the traceability of transactions in the blockchain as “linkability”. We encourage the authors to change the terminology to “traceability”, since linkability typically refers to the ability to connect cryptocurrency wallet location to real-world locations. This will help clear up misconceptions held by many community members, since the Monero Research Lab refers to the connection of funds within the cryptocurrency as “traceability.” 
5. This paper has not yet been published, is not finalized, and is not yet peer reviewed. Thus, there will most certainly be changes to this research paper before publication. We suggest that all claims and research be taken as preliminary and not concrete, since not enough people have evaluated their methods of research yet. 

CONCLUSION

We appreciate the effort that went into this research paper, but we suggest the following changes for later improvements: 
1. A re-evaluation of recommendation #3. 
2. A consideration among 0-mixin transactions for pool payouts. 
3. A clearer explanation of claims made in the paper, with separations for the history of all transactions and those used since March 2016. It is disappointing to treat the blockchain data as static when the technology has evolved significantly since Monero's launch. 
4. Future drafts to be shared with the Monero Core Team before release. Our contact information is dev@getmonero.org. 
5. Be more conservative sharing the results. We understand that the authors have an incentive to share the results with others and we also want them to be shared, but we ask that they refrain from using misleading claims to gather traffic (see appendix for example). 
6. Consider cooperating with Riccardo Spagni to permanently include the research portion of this paper in our Monero Research Lab documents. 

APPENDIX

Figure 5 from the report showing the fraction of deductible outputs. 
Notice the large drops following block height 1,000,000, when 0-mixin transactions were prohibited.
 
Table 2 from the report showing the proportion of transactions with a positive mixin that can be deduced. We would like to point out that for temporal analysis, the input can be guessed with this probability, but there is no level of certainty following March 2016 (shortly after the 0.9.0 release). 
 
Table 3 from the report showing the proportion of deducible transactions where the real input is also the most recently used one in the transaction. 
  
Tweet from research contributor with wording that we feel is misleading
