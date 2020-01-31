---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-02-25
summary: Output Selection, MRL work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** We'll start momentarily; see agenda in topic  
**\<suraeNoether>** good mooooorning mrl  
**\<sarang>** Hullo all  
**\<sarang>** Let's get started!  
**\<ArticMine>** hi  
**\<sarang>** 1. Greetings  
**\<sarang>** A very talkative bunch we are today  
**\<suraeNoether>**  howdy  :D  
**\<vtnerd>** hello  
**\<moneromooo>** Mooooo.  
**\<sarang>** A particular topic I added to the agenda is 2. Output selection  
**\<sarang>** I have a short writeup and some sim results on the agenda issue: https://github.com/monero-project/meta/issues/307#issuecomment-466514757  
**\<sarang>** The problem is that our current algo overselects outputs from small blocks  
**\<suraeNoether>** Sarang and I last week in person nailed down some distributional stuff for output selection and coded up a few different ways of assessing the results.  
**\<sarang>** You'll see 4 different algos tested, each for 4 different chain output density scenarios  
**\<suraeNoether>** each of these scenarios represents a different plausible situation our economy could undergo  
**\<suraeNoether>** a feast scenario is one in which we get popular, a famine scenario is one in which monero usage drops  
**\<sarang>** Under normal chain conditions, each of the 3 alternatives (the fourth is the current method) does a better job than what we have now  
**\<sgp\_>** o/  
**\<sarang>** Under extreme conditions, there are tradeoffs  
**\<sarang>** Here is what I want to know from this group:  
**\<sarang>** if the chain density hits a low point, what should selection do?  
**\<sarang>** If it stays true to chain condition, we'll overselect (for example) coinbase... but if we skew to older outputs, we maintain a better weighted ratio  
**\<suraeNoether>** so, here is my thinking  
**\<suraeNoether>** if chain density is dropping, then spend-times are getting longer and longer  
**\<sarang>** yep  
**\<suraeNoether>** that's economicalliy a depression  
**\<suraeNoether>** so the average age of ring members should also increase to reflect the "true" spend-time distribution  
**\<suraeNoether>** on the other hand, during a feast scenario, the opposite is happening  
**\<sarang>** Based on that, the output-lineup algo does a better job  
**\<suraeNoether>** in that regard, it seems like the lineup method performs better htan others  
**\<suraeNoether>** yep  
**\<sarang>** under those extreme densities, it skews the ages  
**\<suraeNoether>** btw i look at geometric as a flavor of the famine scenario  
**\<suraeNoether>** oh wait, feast i mean  
**\<sarang>** Geometric was intended as a 0-order approximation of real conditions; it's not very good but it's something to use for comparison  
**\<suraeNoether>** in addition to comparing these different sampling methods, a method of directly estimating our true spend-time distribution occurred to me last night, and i'm writing it up now  
**\<sarang>** Does anyone else have any thoughts on these?  
**\<sarang>** RandomRun made a good suggestion for a more general set of quantities to test, that I'll write up and add to the table  
**\<moneromooo>** Did you try the gamma \* num-outs-per-block combo ?  
**\<sarang>** (see their comment on the issue)  
**\<sarang>** suraeNoether worked up a version of that but was not happy with its outcome  
**\<suraeNoether>** moneromooo: the lineup and bias methods are designed to estimate that method moneromooo since computing it directly runs into certain numerical problems  
**\<ArticMine>** If I understand correctly chain density is a measure of velocity  
**\<sarang>** chain density = distribution of number of outputs per block  
**\<sarang>** I don't know how much this applies to velocity if amounts and destinations cannot be known  
**\<ArticMine>** Which given a fixed money supply is a measure of velocity.  
**\<sarang>** ok  
**\<suraeNoether>** ArticMine: yes, although the specific interpretation of velocity is tricky in this context  
**\<sarang>** Does this lead you to conclusions about how the selection should behave?  
**\<ArticMine>** It relates it to market conditions  
**\<suraeNoether>** yes  
**\<ArticMine>** and also block weight  
**\<suraeNoether>** a long spend-time distribution is a recession. a short spend-time distribution is a boom.  
**\<sarang>** Unless the results from RandomRun's suggestion indicate otherwise, I'll recommend moving to the output-lineup algorithm at an upcoming release  
**\<suraeNoether>** I'm also going to mess around with sampling methods, but I'm not expecting to get something that appears to perform better than the lineup method before the next fork  
**\<sarang>** OK, moving on for now... related to this, from time to time there have been suggestions of whether to treat coinbase outputs differently for the purposes of decoy selection  
**\<ArticMine>** My question is outliers in the spends  
**\<sarang>** ArticMine: in what way  
**\<ArticMine>** Namely spend that are very different from the norm at a given point in time  
**\<suraeNoether>** articmine: this is the classic(tm) problem with spend-time distributions  
**\<sarang>** Selecting from the best known distribution is intended to account for this as much as is reasonable  
**\<sarang>** Of course, multiple rings spending outliers from the same point in time are problematic for different reasons  
**\<sarang>** Any, back to the previous statement I made about coinbase outputs...  
**\<sarang>** It is probable that they are spent with a different distribution that is (as of now) not tested  
**\<sarang>** I don't support treating them differently  
**\<sarang>** But I thought that I would mention it in the context of output selection anyway  
**\<sarang>** Using a properly weighted selection algorithm will reduce their occurrence in rings as a consequence, which seems reasonable to me  
**\<ArticMine>** but not their elimination  
**\<sarang>** No, of course not  
**\<ArticMine>** good  
**\<sarang>** With the proposed algo change, their selection will be reduced toward the fraction of their occurrence on the chain  
**\<sarang>** and will do the same for all outputs based on how dense their blocks are, of course  
**\<sarang>** Anyway, please comment after the meeting or on the GitHub agenda issue with any other thoughts on output selection  
**\<suraeNoether>** i don't support treating coinbase differently because then the next question is whether we should treat rings with ring members that come from coinbase transactions differently. and so on; the natural conclusion is to ensure transaction trees are sort of homogeneous in their depth and stuff, and that partitions the entire space way too much. it's an over-optimization with dubious benefits, imo  
**\<sgp\_>** It's my opinion that coinbase outputs will never be spent in the incredible vast majority of transactions of normal users. A heuristic to eliminate the coinbase has high accuracy for anyone not suspected of mining  
**\<suraeNoether>** sgp\_: high sensitivity but awful specificity  
**\<sarang>** ^  
**\<sgp\_>** Under normal Monero network conditions, over 75% of the hashrate is allocated to public pools. These are all transparent  
**\<ArticMine>** Who then promptly spend the coinbase  
**\<sgp\_>** yes, and it's clear which transactions spend the coinbase too  
**\<sgp\_>** so these outputs are effectively dead  
**\<sarang>** Like I said, there is probably a different spend pattern that would be interesting to examine, both in Bitcoin and in our older discernible spends  
**\<sarang>** and of course the pool issue that sgp\_ mentions  
**\<sarang>** Requiring a mix of coinbase-only in rings moves the problem up one level in the txn graph  
**\<suraeNoether>** sgp\_: protecting coinbase transactions when miners can merely churn for almost no fees is not super rational. there will always be some effectively dead outputs. i'm much more concened about the privacy problems induced b y multiple-input trnasactions that are all spending inputs from similar time periods.  
**\<sgp\_>** yes, that one level doesn't eliminate the problem, but it makes it much better than it is today  
**\<suraeNoether>** sgp\_: i don't think that's been quantified, though  
**\<ArticMine>** Yes but overall there is merit to including coinbase because of outliers  
**\<ArticMine>** among coinbase  
**\<sgp\_>** suraeNoether: I argue against protecting coinbase outputs. I want to call them all essentially transparent  
**\<suraeNoether>** sgp\_: ah, i'm okay with that  
**\<suraeNoether>** sgp\_: hmm wait  
**\<sgp\_>** Since in most cases, the vast majority are already  
**\<suraeNoether>** sgp\_: let me think about that  
**\<ArticMine>** I am not so sure. In most but not all cases  
**\<sgp\_>** Public pools don't care since they make the info transparent anyway. We don't need to "protect" them  
**\<suraeNoether>** sgp\_: i disagree that they are essentially transparent  
**\<sgp\_>** suraeNoether: why, because it's a pool-reported heuristic?  
**\<suraeNoether>** no no; i mean i disagree that coinbase transactions are essentially transparent despite the public information posted by pools  
**\<suraeNoether>** i can still manage to spend coinbase transactions with a high degree of plausible deniability  
**\<sarang>** If their payout txns are reported...  
**\<sgp\_>** Perhaps it's more accurate for me to say: we know exactly what transactions these coinbase outputs are spent in  
**\<sgp\_>** Which pronounces them dead in other transactions  
**\<sgp\_>** known decoys  
**\<suraeNoether>** yes; i thought you were tr ying to apply the blanket term to \*all\* coinbase transactions. #notallcoinbases  
**\<sgp\_>** no, only public pool transactions spending coinbase outputs  
**\<suraeNoether>** o kay, so is \*anyone\* in favor of treating coinbase transactions differently?  
**\<sarang>** To sum up: sgp\_ had previously advocated for a default/rule that a ring with a coinbase must contain only coinbase  
**\<ArticMine>** It comes down to the outliers issue. Not all coinbase outputs are dead. With a ring size of 11 we can afford to spend 1 ring on this  
**\<ArticMine>** If the ring size were say 3 I would support sgp\_s position  
**\<moneromooo>** If you want to avoid pool coinbase outs as fake outs, use a blackball list with them.  
**\<sgp\_>** ArticMine: in my opinion, the cost of wasting 1 ouptput per tx is worse than the harm' to solo miners if we avoid coinbase outputs entirely  
**\<sgp\_>** moneromooo: we want to avoid interactivity. That's really cumbersome to expect of users, and it allows for pool fuckery if they report bad info to wallet clients  
**\<sarang>** I assume moneromooo meant a blackball list with sources chosen by the user  
**\<moneromooo>** People don't have to do anything. They only do anything if they want to avoid those outputs.  
**\<sarang>** not some global version that can be DoS  
**\<ArticMine>** But you agree tat the issue is way less wit ring 11 tan say ring 3  
**\<sgp\_>** ArticMine: yes, a larger ringsize mitigates these issues  
**\<sarang>** I think that the idea of coinbase-only rings deserves more careful analysis to numerically examine the benefits and chain costs  
**\<sgp\_>** But I still advocate for this at any feasible ringsize  
**\<moneromooo>** If it was automated and everyone was magically using that system, non pool miners would be spenidng at effective mixin 0.  
**\<sgp\_>** moneromooo: yes  
**\<sgp\_>** problem is unless we avoid the coinbase outputs, wallets will select this "0-mixin" outputs in their rings  
**\<sarang>** I recommend we table this in the absence of any numerical evidence  
**\<sarang>** but that we obtain this evidence if it exists  
**\<ArticMine>** I agree  
**\<sarang>** And we can discuss after the meeting (but I wish to respect our 1-hour goal and others' time)  
**\<sarang>** On to 3. Other work  
**\<sgp\_>** I understand your point of view sarang, but the main concept isn't very difficult. You see x% of public pools which also mine and make transparent x% of new coinbase outputs  
**\<sgp\_>** but we can move on sure  
**\<sarang>** I have been working on output selection, finalizing data on block size algos, gave a talk in Nashville to a meetup  
**\<sarang>** One meta-item: the Loki Foundation wishes to fund me and/or suraeNoether in part for the next funding round  
**\<sarang>** but it comes with a contract  
**\<endogenic>** sarang's talk: https://www.youtube.com/watch?v=H8ijX02J7Y0  
**\<endogenic>** surae's talk: https://www.youtube.com/watch?v=9srtIk9M2yg  
**\<sarang>** I'm hesitant because I'm sure the contract terms could be abused if they were out for PR or other ends  
**\<sarang>** I am going to request that the contract terms be made public, since I am not a lawyer  
**\<suraeNoether>** i think that's true of any contract  
**\<moneromooo>** I don't remember them as PR whores fwiw.  
**\<sarang>** cool  
**\<moneromooo>** I didn't exactly look for it though.  
**\<suraeNoether>** however, i think we could propose amendments re: anticipated problems  
**\<sarang>** I'm trying to maintain healthy skepticism while appreciating their offer  
**\<sarang>** Yeah. If we can publish the contract and there are no serious objections, it reduces the community funding burden while not changing our research goals  
**\<ArticMine>** Making te contract public is a reasonable approach  
**\<sarang>** the total would be 15K USD, split between 1 or 2 people  
**\<endogenic>** i'd suggest consulting with a lawyer about assignment of IP, non disclosure, requirements to execute things for them, etc  
**\<sarang>** Yeah, they specifically don't take ownership of any research product  
**\<ArticMine>** Assignment of IP?  
**\<endogenic>** as mentioned when a contract is couched in consulting language they can say they had expectations of certain things  
**\<moneromooo>** One fairly easy way to prevent most of that is to say "sarang can stop this contract at any time, and the pro rata is due".  
**\<sarang>** but do state that if they share confidential info with researchers, it can't be discussed  
**\<sarang>** So if they knew about some kind of bug, they could disclose under the contract's NDA clause  
**\<moneromooo>** That is a massive no.  
**\<moneromooo>** It allows them to control what you can do open source.  
**\<sarang>** that's my fear  
**\<sarang>** If they'll alter or remove that, it takes away most of my concern  
**\<sarang>** I'll discuss with them and get the contract posted publicly  
**\<moneromooo>** If they know of a bug, htey can use H1.  
**\<sarang>** exactly  
**\<sarang>** I wonder if it's for a bug in \_their\_ software  
**\<sarang>** but anyway  
**\<sarang>** This week, I'll be finishing up additional output selection tests, doing some lit review backlog, bulletproofs MPC, etc.  
**\<sarang>** How about suraeNoether ?  
**\<suraeNoether>** Sarang and I have a deadline of March 1 for this paper we are writing; it was previously Feb 18 but it has moved. I'm finishin g up three proofs of security for that paper, and I  believe we will be making the details public soon.  
**\<suraeNoether>** sarang: have we talked with our co-authors about when we can talk about this?  
**\<sarang>** Ah yes, I forgot to mention that  
**\<sarang>** Once it's submitted I'm sure they'll post to IACR  
**\<suraeNoether>** this paper we think is rather competitive, it's proposing something novel with immediate applicability, so it should be a shoe-in for publication.  
**\<koracain>** loki... wait jeff's project? oh lol that's a safe bet  
**\<sarang>** Yep! Relates to the DLSAG construction but with much more on applications  
**\<suraeNoether>** in addition to that, i'm simulating blockchain stuff for the matching paper to try to get that out the door  
**\<suraeNoether>** i actually have a quiet week of writing for once, which is nice  
**\<suraeNoether>** konferenco stuff will have some more announcmeents later this week  
**\<suraeNoether>** if anyone wishes to submit an abstract to come speak, please drop one on us at https://konferenco.xyz  
**\<suraeNoether>** we are working to accommodate speaker travel costs, too  
**\<suraeNoether>** oh, and before I forget: the scholarship applications at MAGIC are now live, so anyone in the US, EU, or ZA who want a small scholarship to mitigate the costs of their books or whatever, swing on by https://magicgrants.org  
**\<suraeNoether>** and i think that's it!  
**\<endogenic>** thanks as always guys  
**\<sarang>** koracain: you personally believe accepting Loki funding is a good bet? Or sarcasm?  
**\<endogenic>** you're both rockstars..  
**\<sarang>** Also: any other work for anyone to report?  
**\<koracain>** i know one of their devs  
**\<sarang>** cool  
**\<suraeNoether>** oh yeah, the most interesting part of these research meetings, to me, is the folks who aren't sarang and i  
**\<sarang>** Their foundation is a legally-established foundation in Australia  
**\<moneromooo>** From experience, knowing a dev at one company does not mean you know what the boss will do when possible.  
**\<suraeNoether>** i'm interested in how wallet dev is coming from endogenic, i'm interested in what hyc has been working on with moneroR, i want to hear from isthmus but he's usually in meetings around now  
**\<koracain>** he's legit i havn't looked very hard at the project but yah lol he'd probably blow them up if they broke monero  
**\<sarang>** FWIW foundation funding wouldn't change our research goals or agenda in any way  
**\<sarang>** They require monthly reports, but we already do that  
**\<sarang>** I'm optimistic that they just want to support Monero research since it would also benefit their project  
**\<endogenic>** also when Samsung Noether  
**\<sarang>** heh  
**\<sarang>** that falls under 5. Questions  
**\<endogenic>** :P  
**\<koracain>** look hard at it but jeff is in the i2p channels on here via a relay bot  
**\<sarang>** My question for moneromooo et al: when do non-consensus decisions like output selection need to be in place for an upcoming release?  
**\<moneromooo>** If it's the output lining thing, I can have it done pretty quick given it's very similar to what we already have.  
**\<sarang>** What is the expected timeline for a point release after the network upgrade?  
**\<sarang>** A month? Two?  
**\<moneromooo>** I don't think anything was even really talked about yet.  
**\<sarang>** ok, wasn't sure  
**\<moneromooo>** But that sounds plausible.  
**\<sarang>** Well, at least the algorithm is coded up in Python already (link in agenda writeup)  
**\<sarang>** so anyone can play around or test them  
**\<sarang>** Real chain data is included (thanks to moneromooo for pulling that)  
**\<sarang>** Other questions before we wrap up and return to informal discussion?  
**\<sarang>** Righto!  
**\<sarang>** 6. Action items  
**\<sarang>** I will complete additional output selection testing and consider the possibilities for coinbase more thoroughly  
**\<sarang>** as well as get the Loki contract squared away and the other items I listed above  
**\<sarang>** suraeNoether?  
**\<sarang>** Ah, and an urgent call for translations was just made: https://www.reddit.com/r/Monero/comments/auo078/urgentcall\_for\_translators\_we\_have\_two\_days\_to/  
**\<sarang>** Quiet times... well, thanks to everyone for joining. We'll formally adjourn now, but feel free to continue any discussions about previous topics. I'll post logs on the GitHub issue later today    
