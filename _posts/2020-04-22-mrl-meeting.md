---
layout: post
title: Logs for the MRL Meeting Held on 2020-04-22
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** First, GREETINGS  
**\<sarang\>** hi  
**\<sgp\_\>** Hello  
**\<moneromooo\>** .time localtime  
**\<monerobux\>** Could not find timezone localtime.  
**\<sgp\_\>** .time cdt  
**\<monerobux\>** Could not find timezone cdt.  
**\<Isthmus\>** First agenda item is trolling the monerobux bot  
**\<sarang\>** naturally  
**\<sarang\>** Well, let's move to ROUNDTABLE  
**\<atoc\>** ooh  
**\<ArticMine\>** Hi  
**\<sarang\>** I assume Isthmus would like to share the material he posted on the agenda issue?  
**\<sarang\>** https://github.com/monero-project/meta/issues/456  
**\<sarang\>** Specifically: https://github.com/monero-project/meta/issues/456#issuecomment-617883059  
**\<Isthmus\>** Sure  
**\<sarang\>** Go ahead!  
**\<UkoeHB\_\>** hi  
**\<Isthmus\>** Just completed a study quantifying the impact of exchange rate volatility for Monero-denominated delayed payouts.  
**\<Isthmus\>** Normally I consider exchange rate stuff out of scope for MRL but this is relevant to all CCS-funded contributors  
**\<Isthmus\>** Hm, I was going to cut and paste from the GitHub issue but everything is slightly too long for IRC  
**\<Isthmus\>** Basically, I put together a sliding window statistical analysis of the XMR price timeseries to create a framework for volatility risk management  
**\<Isthmus\>** The TL;DR is this:  
**\<Isthmus\>** [INPUTS:] X% confidence that a Y-month payout will cover the quote (based on the last Z months of data) can be achieved with an [OUTPUT:] V% volatility buffer.  
**\<Isthmus\>** Suppose we want to look at the last 24 months of data  
**\<Isthmus\>** And consider a 4-month sliding window (1 month to fundraise on CCS + 3 months to execute)  
**\<Isthmus\>** Here are the outcomes based on historical data  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/tbl4tkZn/image.png  
**\<Isthmus\>** We observe an unfortunate asymmetry over the past two years, for example: contributors to projects with a 4-month timeline were more than twice as likely to experience a 50% decrease in compensation value (red line) than a 50% increase in compensation value (green line).  
**\<sarang\>** That's quite the asymmetry  
**\<Isthmus\>** That's the probability distribution function, the cumulative version is helpful too:  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/2UBTfPI7/image.png  
**\<Isthmus\>** The red cross highlights that USD/XMR decreased over 65% of sliding 4-month windows (i.e. only 35% of contributors would receive payouts worth the quote price). The orange cross shows that an 80% likelihood of receiving a sufficient payout would be achieved with a +35% buffer.  
**\<Isthmus\>** Explaining the orange cross in the framework described above: 80% confidence that a 4-month payout will cover the quote (based on the last 24 months of data) can be achieved with a 35% volatility buffer.  
**\<Isthmus\>** Now, let's consider what happens if we double the timeframe (so that the data include a bull market as well as cryptowinter). The previous plots spanned the last 2 years (blue dots); now let's extend this to 4 years (blue & green dots).  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/aCapoFx3/image.png  
**\<Isthmus\>** oops transparent background, ssorry  
**\<Isthmus\>** Now that our we include both the bull run leading up to the all time high and the subsequent decay, the extended data set contains new outcomes on both sides of the red breakeven line (+ a few outliers omitted on this plot that are shown in the next).  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/kiCGTbDh/image.png  
**\<Isthmus\>** Over the 4 year history, we see that about 60% of the windows receive a payout covering the quoted value (red cross). Since the data set now includes an 8x bubble in its entirety, the volatility insurance rate for 80% confidence rises to a 170% buffer (orange cross).  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/le8lMFik/image.png  
**\<Isthmus\>** I'm hoping that having a volatility risk management framework like this will increase funding accessibility for people/businesses that want to contribute but cannot afford speculate on income.  
**\<sarang\>** This is great data  
**\<sarang\>** Any questions for Isthmus?  
**\<sgp\_\>** Volatility is expensive  
**\<sgp\_\>** No questions, but thanks for doing this  
**\<Isthmus\>** ty :)  
**\<sarang\>** I can share next, if there are no other questions for Isthmus  
**\<ArticMine\>** More of a comment.  
**\<ArticMine\>** Thanks for the work  
**\<atoc\>** Yeah thanks, just for more clarity: what are Monero-denominated delayed payouts?  
**\<ArticMine\>** What we are dealing with is more like a two bear market as opposed to volatility  
**\<UkoeHB\_\>** It seems like long delays in payouts are not worthwhile. Either donators or donation recipients will lose on fiat-equivalent purchasing power with a good probability  
**\<ArticMine\>** With the bear trend longer than the term of the typical CCS  
**\<atoc\>** ah I see what this is now  
**\<atoc\>** I actually wondered about this previously too. This is definitely good info  
**\<moneromooo\>** Donators can't lose. They get exactly what they intend in terms of exchange rate. Recipients can lose or win. Other market participants (which could also be the donators or recipients if they choose to play the markets in the meantime) will win or lose.  
**\<UkoeHB\_\>** Donators can lose if recipients justifiably ask for premiums in the name of volatility, so donators are paying for the volatility  
**\<sarang\>** At any rate, it provides useful information for proposers and potential donors to assess the impacts of volatility  
**\<sarang\>** Isthmus: did you want to also discuss TheCharlatan's possible work on timelocks?  
**\<sarang\>** (you just posted to the agenda on it)  
**\<ArticMine\>** I think volatility is the wrong term here  
**\<Isthmus\>** @ArticMine yeah, there may be a more precise way to phrase it. Let me know if you have ideas  
**\<Isthmus\>** @sarang sure  
**\<Isthmus\>** We discovered a few months ago that Monero's plaintext unlock time leaks information and presents a transaction linkability risk  
**\<Isthmus\>** An encrypted unlock time is possible and would solve privacy issues, however the design and performance characteristics must be carefully considered.  
**\<sarang\>** Right  
**\<ArticMine\>** The issue is a systematic downward trend during the term of the particular CCS  
**\<sarang\>** We investigated this with the DLSAG preprint  
**\<Isthmus\>** Insight has put together a proposal for Isthmus & TheCharlatan to research solutions over the summer. Looking for feedback on the plan here: https://github.com/insight-decentralized-consensus-lab/monero\_encrypted\_unlock\_time  
**\<Isthmus\>** Our goals are:  
**\<sarang\>** The method from the DLSAG preprint works even without the dual-key output structure, and I have some code demonstrating both the general method and how various LRS constructions could be used for this  
**\<Isthmus\>** Detailed system design decisions (e.g. unlock\_time per output or per transaction?)  
**\<Isthmus\>** Prototype code to quickly test different approaches , including simulating transaction construction, signing and verification  
**\<Isthmus\>** Report of quantified space/time/privacy tradeoffs with each mitigation strategy  
**\<Isthmus\>** Implementation code for Monero source tree, for at least one of the chosen approaches  
**\<Isthmus\>** Comprehensive research analysis writeup , cross-referenced with code and documentation  
**\<Isthmus\>** Oh sorry Sarang, go ahead  
**\<sarang\>** Oh no, just providing some background; please continue  
**\<Isthmus\>** Oh, that was the end of the list :- )  
**\<sarang\>** Ha got it!  
**\<sarang\>** Yeah, so there was already some work on this  
**\<sarang\>** and I've been discussing it with TheCharlatan  
**\<sarang\>** Basically you can follow an approach similar to that in DLSAG using any d-LRS construction  
**\<sarang\>** Meaning MLSAG, CLSAG, Triptych can be used  
**\<sarang\>** Obviously the scaling will be different in size/time  
**\<sarang\>** But essentially you increase from a 2-LRS (signing key, amount key) to a 3-LRS (signing key, amount key, timelock key)  
**\<sarang\>** You also need to change how range proofs are structured, in a nontrivial way  
**\<sgp\_\>** Does unlock time per transaction mean all outputs have the same unlock time?  
**\<sarang\>** In theory, yes  
**\<sarang\>** But it would depend on how it's designed  
**\<Isthmus\>** Yep @sgp\_ that's how it works currently  
**\<sarang\>** Anyway, there's a marginal increase in transaction size to include the necessary auxiliary commitment data  
**\<sarang\>** But more notably, there's a time cost that scales linearly with the ring size  
**\<sgp\_\>** Maybe market research some come first to see if there's a demand for per-output. Has this been done at all?  
**\<sgp\_\>** \*should come  
**\<sarang\>** This time cost exists regardless of whether the locks are per-output or per-transaction  
**\<sarang\>** I have C++ timing data for CLSAG to show this, and could modify the new Triptych code similarly  
**\<sarang\>** (no point doing it for MLSAG)  
**\<sarang\>** Before there's too much time/effort invested in this, I think it'd be useful to determine what costs people think are acceptable to introduce this  
**\<sarang\>** The signature stuff is pretty straightforward (from 2-LRS to 3-LRS), but there's additional engineering work for a much different handling of range proofs, which would also need to change the fee structure due to Bulletproofs DoS scaling  
**\<sgp\_\>** Does this impact transactions that use the locks only or all of them?  
**\<sarang\>** and, of course, the timing hit needs to be considered  
**\<sarang\>** Well, for maximum uniformity all outputs would need locks  
**\<sarang\>** The lock could be set to 0  
**\<sarang\>** but the time cost is the same  
**\<sarang\>** Since for every ring member, you need to process its lock data  
**\<sarang\>** and the verifier can't tell which locks are 0 due to the commitment structure  
**\<UkoeHB\_\>** I feel like knaccc since I can't imagine what utility timelocks have  
**\<Isthmus\>** Crossing borders  
**\<moneromooo\>** Would encrypting lock times prevent it from being used as a second layer building block ?  
**\<sarang\>** Constructions involving cross-chain and off-chain channels would need them  
**\<sgp\_\>** Isthmus: how many transactions use these locks again? I lean towards not pursuing this unless there's a known demand  
**\<sarang\>** moneromooo: encrypting timelocks were originally designed for 2nd layer stuff in DLSAG  
**\<gingeropolous\>** i thought the second chain requires the kind of time locks that we don';t have yet  
**\<sarang\>** They aren't required for DLSAG, but they are useful to avoid spend heuristics  
**\<gingeropolous\>** second layer, sorry  
**\<sarang\>** e.g. ring members whose locks have just expired may be more likely to be true signers, etc.  
**\<gingeropolous\>** but i guess both types would need encryption  
**\<sarang\>** Anyway, if the decision is to support timelocks, requiring the commitment structure is good for mitigating heuristics, but it comes at a definite cost  
**\<sarang\>** and this cost scales with the ring size  
**\<moneromooo\>** I'd be ok with a fair cost if it is instrumental having a good second layer, but not really otherwise.  
**\<gingeropolous\>** it seems pretty integral if we want monero to be programmatic money  
**\<sarang\>** To be clear, a solution like DLSAG requires timelocks, but does not require encrypted timelocks  
**\<sarang\>** It is highly beneficial for uniformity if the timelocks are encrypted, however  
**\<UkoeHB\_\>** Isthmus it might help the proposal if there were some basic estimates of costs related to timelocks (storage requirements, additional EC ops), for both CLSAG and then for Triptych.  
**\<sarang\>** UkoeHB\_: I already have this data for CLSAG, and presented it quite a while ago  
**\<sarang\>** For Triptych there are estimates (the C++ code didn't exist at the time)  
**\<UkoeHB\_\>** ah, in which case a link would be nice  
**\<sarang\>** I can dig it up after the meeting  
**\<TheCharlatan\>** That's only the costs for the signature and commitments though, right sarang?  
**\<sarang\>** FWIW the branch is here for 3-CLSAG: https://github.com/SarangNoether/monero/tree/3-clsag  
**\<sarang\>** TheCharlatan: the range proof wouldn't necessarily incur any extra costs  
**\<sarang\>** Depending on if/how the limits are changed  
**\<sarang\>** If desired, I can update the new Triptych C++ code to support timelocks, for data on performance differences  
**\<sarang\>** it'd be pretty straightforward to do  
**\<sarang\>** Anyway, I support the idea if it's based on a solid understanding of the costs, and has general consensus  
**\<sgp\_\>** I only really support the research if we know there's a solution on the table that Monero will use for second layer stuff. The "how to encrypt" question will be answered faster than the audit process. Maybe I'm not understanding the application, but I perceive this bug hurdle as needing to come first  
**\<sarang\>** sgp\_: we know exactly \_how\_ to do it  
**\<sarang\>** (in terms of signature handling)  
**\<sgp\_\>** I meant selecting which is best  
**\<sarang\>** What's not known are specifics related to range proofs, fee structure, etc.  
**\<UkoeHB\_\>** fee would be pretty simple to update afaik  
**\<sarang\>** Perhaps. What changes is that the aggregated range proof now needs to account for newly-generated outputs, as well as a proof for each timelock input  
**\<sarang\>** But it's still something that would need to be considered and completed in the design/deployment process  
**\<UkoeHB\_\>** right  
**\<sarang\>** and it also complicates things since there are currently no specific input limits  
**\<sarang\>** whereas Bulletproofs have a ceiling-power-of-2 verification cost, which is why we limit the output count  
**\<sarang\>** Having a separate bulletproof makes little sense from a size perspective  
**\<UkoeHB\_\>** ah hm  
**\<UkoeHB\_\>** per-input timelocks may be expensive, but I defer to the estimates /o\  
**\<Isthmus\>** Could we have 1 time per transaction, and an encrypted bit with each output  
**\<Isthmus\>** 1 = use encrypted timelock  
**\<Isthmus\>** 0 = default (10 blocks)  
**\<sarang\>** Isthmus: you still need the signature and range components  
**\<sarang\>** How you assign timelock commitments to outputs isn't really relevant there  
**\<Isthmus\>** Mmkay, was just trying to think of a way to bee able to lock 1+ outputs without locking your change (without having an encrypted timelock for each output)  
**\<sarang\>** That's a pretty minimal size cost  
**\<sarang\>** The real kicker is verification  
**\<sarang\>** and the specifics on range proof structure  
**\<Isthmus\>** Yep, those are key things to nail down first  
**\<sarang\>** Well, we have CLSAG code to give real numbers on that cost  
**\<sarang\>** and it's easy to modify Triptych to give its costs  
**\<sarang\>** What is not known is what time hit is considered reasonable  
**\<sarang\>** "as low as possible" isn't a design decision  
**\<sgp\_\>** Can I step in since I really need to make sure I understand the big picture here  
**\<sarang\>** sure  
**\<sarang\>** of course  
**\<sgp\_\>** In order to add a feature, there should be at least some stated use for it, especially if there are costs  
**\<UkoeHB\_\>** nvm per-output timelocks would be cheap at 8 bytes per additional output, most cost is on input proving side  
**\<sgp\_\>** So the main benefit is the ability to add things like DLSAG and other related protocols that could allow second-layer right? That time locks are necessary for second-layer solutions we know about?  
**\<sarang\>** Well, and we allow timelocks right now; but they have multiple accepted specifications, and likely introduce spend heuristics  
**\<Isthmus\>** s/likely/do/  
**\<sarang\>** So their presence and optionality introduce fingerprinting  
**\<sgp\_\>** right but they aren't used as far as we know for anything in particular?  
**\<sarang\>** ^^ good point  
**\<Isthmus\>** Not only are timelocks used  
**\<Isthmus\>** 5 different formats are used  
**\<Isthmus\>** See the documentation linked above  
**\<sarang\>** that's what I meant  
**\<Isthmus\>** So SOMEBODY is using them  
**\<Isthmus\>** They're anonymous, unfortunately, so I don't know their use case  
**\<sarang\>** Requiring a uniform format is an obvious first step  
**\<UkoeHB\_\>** what fraction of all tx have non-zero timelocks?  
**\<TheCharlatan\>** sgp\_ they are also useful for atomic swap purposes, if you are looking for specific features.  
**\<jwinterm\>** was about to ask same UkoeHB\_  
**\<sgp\_\>** https://usercontent.irccloud-cdn.com/file/xIfs2dFC/table  
**\<jwinterm\>** TheCharlatan, but not in the state that they currently exist, right? I thought atomic swaps require the kind of time locks that bitcoin has - i.e., this tx can't be mined until certain time  
**\<gingeropolous\>** yeah right now its payment channels (lightning network) and atomic swaps, for the most relevant application of timelocks (i think)  
**\<Isthmus\>** They're not super widely used, on the order of 10k nonzero locktimes  
**\<Isthmus\>** Of course, neither are subaddresses ;- )  
**\<jwinterm\>** total number of txs is 10M order of magnitude?  
**\<Isthmus\>** 6M  
**\<Isthmus\>** Almos 7M  
**\<Isthmus\>** \*almost  
**\<jwinterm\>** .c 1e4/7e6  
**\<monerobux\>** jwinterm: 0.001428571429  
**\<sgp\_\>** dumb idea: why not threaten to remove this feature entirely unless someone justifies the need?  
**\<jwinterm\>** 0.1% more than I would've guessed  
**\<TheCharlatan\>** since we are spitballing a bit, Istmus and I also discussed introducing a more compact format. So if encrypting them is deemed undesirable, I believe we should still change their current behaviour to something more sane and less dangerous.  
**\<sgp\_\>** if these are caused by someone fucking around for no purpose, then why bother having them  
**\<UkoeHB\_\>** compact format?  
**\<sarang\>** Do you mean supporting only a single uniform format?  
**\<sarang\>** Because this seems like a natural first step  
**\<UkoeHB\_\>** iirc they are varints atm, so at most 9 bytes  
**\<sarang\>** At least removing the fingerprinting possible within the use of timelocks  
**\<sgp\_\>** in order for the \*cool\* time-lock applications to come around, we need to agree to implement something else which would come with a large advance notice. This hasn't happened obviously  
**\<sarang\>** Well, and there is no DLSAG-type payment channel use currently available  
**\<Isthmus\>** @UkoeHB\_ I thought it was uint64. I got a few outputs locked until 18446744073709551614 (about 500 billion years) over the weekend :- P  
**\<sarang\>** Isthmus: something something store of value  
**\<ArticMine\>** Using a single format for timelocks seems a sensible first step to me  
**\<UkoeHB\_\>** varints have up to 63 bits of information from what I understand  
**\<Isthmus\>** oh yea  
**\<sarang\>** OK, so in the interest of time, what's a good next step in this design process?  
**\<UkoeHB\_\>** cost estimates  
**\<sarang\>** Isthmus TheCharlatan: let's discuss that after the meeting  
**\<TheCharlatan\>** Exactly, but a varint for a timelock is completely overblown. There have been a lot of discussions on this in Bitcoin as well, for example to restrict the size to a 1 byte value that is then interpreted as a power of time.  
**\<ArticMine\>** single format  
**\<sgp\_\>** I say the cost estimate of only the cheapest option to begin with to see if that action is warranted  
**\<TheCharlatan\>** Personally I would get rid of time based lock times entirely.  
**\<Isthmus\>** That introduces a correction term when blocktime changes  
**\<Isthmus\>** But that's easy enough to do  
**\<sgp\_\>** TheCharlatan: haha exactly, or at least aggressively ask for justification from people who use them  
**\<sarang\>** OK, so beyond investigating optimal single-format cleartext use and updated cost estimates, anything else on this topic for right now?  
**\<sarang\>** (otherwise we could discuss it for hours...)  
**\<sarang\>** going once  
**\<sarang\>** going twice  
**\<sarang\>** sold  
**\<sgp\_\>** nope, I just want to stress that we need to know why they are used before slowing down transactions  
**\<sarang\>** I can briefly share a couple things in the time we have left  
**\<sarang\>** I overhauled Triptych verification to support common-key batching  
**\<TheCharlatan\>** and s/time/two - deleted the wrong word :(  
**\<sarang\>** New timing data: https://usercontent.irccloud-cdn.com/file/TWAkCeJJ/timing.png  
**\<sarang\>** This data represents the input-amortized verification cost for a 2-input set of signatures  
**\<sarang\>** Assuming the same ring is used across both inputs for Triptych  
**\<sarang\>** (for MLSAG/CLSAG it doesn't matter)  
**\<sarang\>** I also overhauled the MLSAG tests for better consistency with the other series  
**\<UkoeHB\_\>** wait isnt that way faster?  
**\<sarang\>** It should be  
**\<selsta\>** What are amortized inputs?  
**\<sarang\>** If you have a 2-input transaction, you need to compute 2 signatures  
**\<sarang\>** For MLSAG/CLSAG, this takes twice the time as one signature  
**\<sarang\>** For Triptych, if you use the same ring, you get huge batching benefits  
**\<sarang\>** So this is the per-input cost for a 2-input transaction  
**\<sarang\>** For higher-input-count txs that would share rings, the benefits get even better  
**\<UkoeHB\_\>**   
**\<sarang\>** The gray crossed lines are centered at the current N=11 MLSAG point  
**\<sarang\>** This implies that Triptych becomes slower than right now (for 2-input txs) between N=64 and N=128  
**\<sarang\>** (but you can't split the difference... you need to pick a power of 2)  
**\<sarang\>** Anyway, hopefully this gives more realistic timing data, at least across 2-input txs  
**\<sgp\_\>** is 128 about the same time as DLSAG 12? 13?  
**\<sarang\>** You can use my `triptych` branch and `clsag-device` branch to construct this data for yourself  
**\<sarang\>** I don't have C++ data for DLSAG  
**\<sgp\_\>** soory I meant MLSAG  
**\<sarang\>** I'd have to run some quick MLSAG tests on those intermediate numbers  
**\<sarang\>** I can have that shortly after the meeting (need to do a new build)  
**\<sgp\_\>** it's fine, not that important  
**\<sarang\>** It's easy, just takes a few minutes  
**\<sarang\>** Anyway, that's what I wanted to share  
**\<sgp\_\>** cool stuff  
**\<sarang\>** Does anyone else have research to share (we're running a little long, but that's ok)  
**\<UkoeHB\_\>** very cool  
**\<UkoeHB\_\>** hi yes, this proposal went up this week https://github.com/monero-project/monero/issues/6456  
**\<UkoeHB\_\>** it's a synthesis of discussion and research from IRC over the past months  
**\<sarang\>** It's very comprehensive :)  
**\<sarang\>** I admit that I haven't had a chance to sit down and devote time to it :/  
**\<sarang\>** However, do you have any concrete suggestions at this point UkoeHB\_?  
**\<UkoeHB\_\>** there needs some debate about whether to pursue Janus, and which solution to adopt, but otherwise tx structure recommendations, sorted tlv, and view tag all seem concrete to me  
**\<sarang\>** Neat  
**\<sarang\>** I'll devote time to it before the next meeting for sure  
**\<UkoeHB\_\>** also moving to mandating 1 tx pub key for 2-out tx, and 1 key per output for \>2 out tx  
**\<sarang\>** Many thanks for continuing work on that  
**\<sarang\>** OK, let's briefly review ACTION ITEMS before we adjourn  
\< is that assuming that every 2-output txn has a change output?  
**\<Isthmus\>** \*change or dummy  
**\<UkoeHB\_\>** we only have to make that assumption if Janus is implemented  
**\<Isthmus\>** Ok, so then if there's a txn being split between 2 (non-change) recipients, it must be constructed as a 3-output txn with a dummy output, right?  
**\<UkoeHB\_\>** right  
**\<Isthmus\>** Eh that seems harmless. Is a corner case anyways.  
**\<Isthmus\>** Sorry @sarang go ahead  
**\<sarang\>** Someone volunteered to do a review of the CLSAG code, which was very helpful... they also recommended adding Poly1305 authentication to wallet encryption, which is a good idea to prevent chosen-ciphertext adversaries  
**\<sarang\>** Aside from that, I'll pull up some 3-CLSAG and 3-Triptych data to help the timelock discussion, as well as some stuff on Arcturus  
**\<sarang\>** that's all for me :)  
**\<sarang\>** Anyone else?  
**\<Isthmus\>** I'll expand the timelock proposal with some more references/data/use cases  
**\<Isthmus\>** And I'll probably finish another quantum-resistance proposal today or tomorrow, currently incorporating feedback into the first draft  
**\<sarang\>** great  
**\<sarang\>** Any other final action items before we adjourn?  
**\<Isthmus\>** Oh yea, and I'll read UkoeHB\_ 's epic github issue :- )  
**\<sarang\>** Righto, we are now adjourned! Thanks to everyone for a great meeting  
