---
layout: post
title: Logs for the MRL Meeting Held on 2020-05-06
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** All righty! Time for the weekly research meeting  
**\<sarang\>** As always, we begin with GREETINGS  
**\<ArticMine\>** Hi  
**\<UkoeHB\_\>** hi  
**\<atoc\>** hi  
**\<sarang\>** Let's move on to ROUNDTABLE  
**\<sarang\>** Any research of interest that folks wish to share?  
**\<sarang\>** I can share a few things, I suppose  
**\<sarang\>** I worked up a PR to update how keys are encrypted in memory  
**\<sarang\>** This has follow-on effects to how they're stored on disk, and I'm making some additional updates to improve the existing unit tests and add others  
**\<sarang\>** and I'm finishing up a test implementation of Arcturus, the extension of Triptych that offers better proof sizes  
**\<sarang\>** I'd like to determine exactly what the timing differences are, since initial estimates suggested that Arcturus and Triptych would be very close  
**\<kenshamir[m]\>** Sorry if I've missed this; are there any comparisons for Arcturus, Triptych and CLSAG ?  
**\<sgp\_\>** hello  
**\<sarang\>** And kenshamir[m]: I have comparisons for CLSAG and Triptych, but this will add actual implementation data for Arcturus when finished  
**\<kenshamir[m]\>** Oh right, very cool  
**\<sarang\>** The size data is already known, FWIW  
**\<sarang\>** But the Arcturus timing was always an estimate based on operation counts  
**\<sarang\>** It's different enough in how it handles transactions that I'd like to know for sure  
**\<kenshamir[m]\>** concretely?  
**\<kenshamir[m]\>** Is there a link for it?  
**\<sarang\>** The size/timing data?  
**\<kenshamir[m]\>** Yeah, the size data  
**\<sarang\>** Yeah, let me pull it up  
**\<kenshamir[m]\>** Probably may not be that helpful for Monero, but there is a new paper out on an endomorphism that allows you to compute aG + bH faster in variable time  
**\<sarang\>** Page 11: https://eprint.iacr.org/2020/312.pdf  
**\<kenshamir[m]\>** Link : https://eprint.iacr.org/2020/454.pdf  
**\<kenshamir[m]\>** Thank you  
**\<sarang\>** Anyway, that's what I wanted to share  
**\<sarang\>** Does anyone else have research of interest?  
**\<UkoeHB\_\>** what's the gist of your encryption update?  
**\<sarang\>** The in-memory encryption of keys was being done with a chacha stream that was XORed with keys, instead of just encrypting the keys with chacha directly  
**\<sarang\>** This PR makes this change  
**\<sarang\>** The existing unit tests for wallet and key encryption also get some updates  
**\<UkoeHB\_\>** ah interesting  
**\<sarang\>** It also transitions old encrypted keys to the new format, which needs better testing that I'm still working on  
**\<sarang\>** Seems pretty quiet today!  
**\<sarang\>** We could always end early if there isn't more that needs to be discussed...  
**\<sgp\_\>** I have nothing to add except to remind people that I still want coinbase outputs to be avoided entirely in non-coinbase-spend rings :p  
**\<sarang\>** You mean the idea that a ring containing a coinbase output must have all coinbase outputs, right?  
**\<sarang\>** sgp\_: can you briefly recap your rationale, to ensure everyone is on the same page?  
**\<sgp\_\>** yes that idea  
**\<sgp\_\>** rationale is that no normal users spend coinbase outputs  
**\<sgp\_\>** even people who mine on mining pools never spend coinbase outputs  
**\<sgp\_\>** so the selection of these is markedly different from expected user spend behavior  
**\<sarang\>** When I thought about this earlier, I was concerned that it sort of kicks the can down the road one hop on the graph  
**\<sgp\_\>** separating these will increase the effective ringsize for most (\>99%) users by 10-20%  
**\<sgp\_\>** sarang: it kicks the can down the road, but it's still MUCH better  
**\<ArticMine\>** Interesting  
**\<sarang\>** And that if a heuristic was "this coinbase probably isn't the true signer" previously, it would become "this output that came from a coinbase ring probably isn't the true signer" as a somewhat weaker heuristic  
**\<sarang\>** Yeah, I think it's better but doesn't totally eliminate it  
**\<sarang\>** If it were implemented, there would need to be a decision on what selection distribution to use, which should probably be based on a transparent-chain analysis at minimum  
**\<sgp\_\>** it's still essentially one set of transactions separated (one ring signature? I'm struggling to explain this simply and also accurately)  
**\<sarang\>** to see if it matches the overall distribution  
**\<ArticMine\>** The idea is that an ouput from a mining pool is far more likely to e spent by a normal user  
**\<sgp\_\>** basically the real spend of the after-coinbase output would look the same as several transactions that select this output as the decoys  
**\<sarang\>** Yeah  
**\<sarang\>** Does my statement about the analysis for a distribution make sense?  
**\<ArticMine\>** I agree it mitigates but does not completely eliminate the risk  
**\<sgp\_\>** but now this accounts for the behavior that the user could just be a miner on a mining pool, for example  
**\<sgp\_\>** which is hugely broader  
**\<sarang\>** But it is true that right now, the spend patterns of coinbase vs non-coinbase are assumed to be the same by the selection algorithm  
**\<sarang\>** It'll be very interesting to see that distribution for coinbase-only  
**\<sgp\_\>** only solo miners can spend coinbase outputs. Miners on mining pools can also spend from-coinbase outputs  
**\<sarang\>** right  
**\<sgp\_\>** so while it kicks the can down the road, in terms of practical behavior, it's a night and day improvement  
**\<sarang\>** I'll ping Isthmus here, since his group has access to this sort of data for other chains  
**\<sgp\_\>** discussion on this idea has been mixed for years. I'd like to see this actually done  
**\<sgp\_\>** 10-20% better effective ringsizes just with smarter selection  
**\<ArticMine\>** It is a significant mitigation of the issue. I do not see a clear downside to this.  
**\<sgp\_\>** downside is to people that are running private pools. They effectively need to "churn" once by not directly sending the coinbase outputs to people  
**\<sgp\_\>** I think this is a small tradeoff  
**\<sarang\>** I think it's an improvement, provided it doesn't introduce unexpected or unintended consequences to the selection distribution, and is based on distribution data from known spends where reasonable (e.g. Bitcoin)  
**\<zkao\>** hoi, can someone evaluate how sound this ECDSA adaptor signature is? https://joinmarket.me/blog/blog/schnorrless-scriptless-scripts/ if these ECDSA adaptor signature works, it looks like the atomic swap can be done using a scheme similar to the suggested by andytoshi-sarang (equivalent discrete logs), mixed with the game theory from h4sh3d's proposal: all game theory on bitcoin script (forcing players to act or  
**\<sgp\_\>** I agree with that caveat, though I want to add my own caveat that I don't see how it can be worse  
**\<zkao\>** lose), and no need for monero refund. so it should work on monero today.  
**\<sarang\>** zkao: I didn't invent that cross-group discrete log idea; it was andytoshi  
**\<zkao\>** yes, i know, u proposed  
**\<sarang\>** sgp\_: if the coinbase-only selection distribution ends up being very different to the overall distribution, it would introduce a heuristic for coinbase true signers  
**\<sarang\>** and for all we know, it could be a very different distribution in that miners/pools spend immediately or something  
**\<sgp\_\>** luckily then we can approach coinbase with its own algo  
**\<sgp\_\>** which we can't do now  
**\<sarang\>** The non-coinbase distribution could be easily modified to simply redraw if it chooses a coinbase  
**\<sgp\_\>** if these are actually very different spend patterns, then the possibility for increased privacy is even greater  
**\<sgp\_\>** since we can handle them separately, not together  
**\<sarang\>** The coinbase distribution would simply be some fixed selection distribution on block order, that doesn't need to do the shuffling method we do now  
**\<sarang\>** sgp\_: right  
**\<sgp\_\>** my gut suggests coinbase spends are quicker on average  
**\<sgp\_\>** but Bitcoin data would be great for that ofc  
**\<sarang\>** Right  
**\<sarang\>** Hopefully someone like Isthmus's group can get that data, since they have easy access to the dataset AFAIK  
**\<sgp\_\>** I still support avoiding coinbase with the stupid method of re-selecting a coinbase is chosen, though improvements can make that better. I see even this stupid model as an incremental improvement  
**\<sgp\_\>** \*if a coinbase is chosen  
**\<sgp\_\>** what I'm trying to say is that the data on Bitcoin should help make the selections better, but that they are not prerequisites to switch since it can't be worse than it already is in my eyes  
**\<sarang\>** If there were no known distribution from Bitcoin etc., what selection for coinbase-only would you suggest?  
**\<sarang\>** Reselect-on-coinbase seems reasonably for non-coinbase rings, but there still would need to be a chosen selection distribution for coinbase-only rings  
**\<sgp\_\>** same as current probably? I agree that's not ideal  
**\<sarang\>** Well, the current one takes block density into account, and that's not relevant for coinbase-only  
**\<sgp\_\>** keeping in mind most public pools publish this data openly anyway  
**\<sgp\_\>** so frankly the coinbase rings would be susceptible to a lot of public data causing a high proportion of heuristically dead outputs  
**\<sgp\_\>** in the worst of cases I say ~90% of of the hashrate accounted for by public pools sharing coinbase data, so ringsize 11 doesn't really help with that in the best of cases  
**\<sgp\_\>** \*I saw ~90%  
**\<sarang\>** Well, at that point you could \_almost\_ suggest removing the requirement for nontrivial rings in coinbase-only at all  
**\<sarang\>** \*altogether  
**\<sarang\>** If the thought is that analysis could reveal true signers in a huge number of cases anyway  
**\<sgp\_\>** there's a push for pools to not share this data, but I agree that in the current case, coinbase rings should be considered to offer near-zero protection  
**\<sgp\_\>** really any coinbase spend. in the current situation, they are still heuristically dead, just spread across normal users' transactions  
**\<sarang\>** Hmm, we're a bit over time  
**\<sgp\_\>** yeah we can end  
**\<sarang\>** Let's move to ACTION ITEMS and then continue discussion  
**\<sarang\>** I have some unit tests update to make for the key encryption PR, and hopefully can get Arcturus code working in C++ with the timing data that I want  
**\<sarang\>** Any other updates, action items, etc. before we adjourn?  
**\<sarang\>** If not, adjourned!  
**\<sarang\>** Logs will be posted shortly  
