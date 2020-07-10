---
layout: post
title: Logs for the MRL Meeting Held on 2020-06-10
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** OK, just about time to start the meeting  
**\<sarang\>** First, greetings!  
**\<ArticMine\>** Hi  
**\<sgp\_\>** hello  
**\<Isthmus\>** Heya  
**\<sarang\>** I suppose we can move to the roundtable, where anyone is welcome to share research of interest  
**\<sarang\>** Does anyone want to go first?  
**\<sarang\>** If not, I can share a few things  
**\<sarang\>** Teserakt has sent me a draft of their analysis of the CLSAG preprint  
**\<monerobux\>** Test failed  
**\<sarang\>** bad bot  
**\<sarang\>** The draft report indicates they did not find any major issues with the construction, but they had some comments and suggestions on the formalization that I'm working to update  
**\<sarang\>** This shouldn't result in any changes to the code  
**\<sarang\>** Separately from this, I started working on some output merging analysis on the Monero chain  
**\<h4sh3d[m]\>** Hello  
**\<sarang\>** I have preliminary data but am still checking it for a few questions I have  
**\<sarang\>** I'll post a plot here, but note that it should not be relied on until checked more thoroughly  
**\<sarang\>** https://usercontent.irccloud-cdn.com/file/EHmFolZV/data\_all.png  
**\<sarang\>** An explanation...  
**\<sarang\>** I look for "zero-hop" possible merges, where outputs from the same source transaction appear in separate rings in a later destination transaction, and filter only by post-CT confidential transactions  
**\<sarang\>** Then, for each such possible merge, I look at the height difference of the source and destination transaction, and plot them here  
**\<sarang\>** The x-axis represents block height difference, and the y-axis is fractional occurrence (note the log scale!)  
**\<kiwi\_87\>** Hi. What you think about interoperability on Monero?  
**\<sarang\>** kiwi\_87: one sec  
**\<Isthmus\>** 👀  
**\<Isthmus\>** Very interesting  
**\<sarang\>** https://usercontent.irccloud-cdn.com/file/UPSZyk6P/data\_1k.png  
**\<sarang\>** Here is the same data, but zoomed (and rescaled) to the low end of the x-axis  
**\<sarang\>** Now, these are only possible merges; there's no good ground-truth data set on chain for post-CT confidential transactions  
**\<atoc\>** hi  
**\<sarang\>** So I'm going to run a simulation using the same input/output structure and the current decoy selection algorithm  
**\<sarang\>** and see if/where the distributions diverge  
**\<sarang\>** kiwi\_87: what do you mean by interoperability  
**\<sarang\>** Oh, and for this data... about 2.3% of post-CT confidential transactions contained at least one possible merge  
**\<sarang\>** (this data shows all such possible merges, not just a unique one from each transaction)  
**\<Isthmus\>** @sarang if you want to go deep into the Bayesian weeds, could calculate the probability (always positive, but varying in magnitude) that a pair(+) of these ring members would be selected together if sampled from the standard  algo  
**\<UkoeHB\_\>** Isthmus: do you recall what proportion of transactions don't use the standard gamma distribution (approximately)?  
**\<sarang\>** UkoeHB\_: note that this is \_all\_ post-CT confidential transactions, regardless of likely selection method  
**\<sarang\>** I did a filter for that but may have a minor indexing issue that threw off the data  
**\<sarang\>** Isthmus: yeah, I thought about that too (but didn't run the analysis)  
**\<sarang\>** The distribution difference is intended to give a very rough idea of how non-ideal this distribution is  
**\<ArticMine\>** The other question is ring size  
**\<Isthmus\>** @UkoeHB\_ as of Konferenco (last June) about 1% of transactions used obviously uniform selection algorithm  
**\<Isthmus\>** I haven't updated the analysis pipeline, so can't speak to recent months.  
**\<UkoeHB\_\>** ah if sarang is already filtering those out it's not a big deal  
**\<sarang\>** I'm not at the moment  
**\<sarang\>** This is all post-CT confidential transactions  
**\<Isthmus\>** @sarang what are you coding this in? I have python code to strip those out  
**\<sarang\>** This is Python as well  
**\<sarang\>** If you can link the code that'd be great, or I can write something up  
**\<sarang\>** But uniform selection seems very unlikely to cause the long tail  
**\<sarang\>** Anyway, this is the start of analysis that I hope will be useful to inform safer output selection  
**\<UkoeHB\_\>** very cool thanks for you effort sarang :)  
**\<sarang\>** Once I verify this indexing issue, I'll post both the analysis code and the data set  
**\<Isthmus\>** https://www.irccloud.com/pastebin/BChX6gR9/  
**\<sarang\>** I can't post \_all\_ the data (block, transaction, ring, ...) since it's far too big for GitHub  
**\<kiwi\_87\>** @sarang, I mean the interoperability, if it can be made between Monero and other chains, there would be more room for the adoption of XMR. I learn about this from the fact that Bitcoin is entering Ethereum network with the amount that is way larger than which on the layer 2 of Bitcoin. It helps BTC to join the DeFi and increase the adoption for  
**\<kiwi\_87\>** such crypto. Same thing can also happen with XMR, don’t you think?  
**\<sarang\>** But I can post the resulting possible merges, which are of reasonable size  
**\<sarang\>** Thanks Isthmus  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/fZgJlX2o/image.png  
**\<sarang\>** kiwi\_87: operating between Monero and other chains is surprisingly tricky, and even moreso if the goal is to maintain uniformity of transactions  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/aQVzvAAq/image.png  
**\<sarang\>** Isthmus: what are these plots?  
**\<Isthmus\>** Let ring\_member\_ages be an array of ring member ages [0.5d, 0.7d, ...]  
**\<Isthmus\>** offset-corrected median age = median(ring\_member\_ages - min(ring\_member\_ages)  
**\<Isthmus\>** The correct decoy algorithm produces OCMA's around 100 - 10000 blocks  
**\<Isthmus\>** I used 370000 as a conservative "absurdity limit"  
**\<sarang\>** Small sample =\> high variance, I assume?  
**\<Isthmus\>** Might also have to do with fact that algo reacts to txn vol changes  
**\<Isthmus\>** Anyways, anything above 10^5 is suspect  
**\<Isthmus\>** Red line is 370000 blolcks  
**\<Isthmus\>** Anything above that is absolutely not from the correct decoy algo  
**\<sarang\>** Examining the distribution with that filter will be very interesting  
**\<Isthmus\>** And in most cases, when I spot checked, were due to apparent uniform decoy selectioin algo  
**\<sarang\>** I'd expect that it wouldn't change much, but I like being proven wrong  
**\<sarang\>** Any other speculation about the effects of these selections? (just curious)  
**\<Isthmus\>** Hmm, I'm interested in the Bayesian analysis, which will tell us whether this is a novelty with 10% predictive power, or a damning tell with 95% predictive power  
**\<sarang\>** Oh and Isthmus: what transactions does this account for? The entire chain?  
**\<Isthmus\>** From introduction of RingCT until Konferenco  
**\<sarang\>** Does it filter out non-CT transactions after the CT cutoff?  
**\<sarang\>** These are low quantity, but are still present  
**\<sarang\>** and have very different selection of course  
**\<Isthmus\>** I usually ignore non-RingCT since I'm more interested in optimizing current privacy than studying historical easter eggs  
**\<sarang\>** yeah  
**\<Isthmus\>** I'll have to work my way back in the analysis pipeline to check  
**\<sarang\>** I also filtered those in the plots above  
**\<Isthmus\>** Sorry, by "ignore" RingCT, I mean "exclude them from my data set before analyzing"  
**\<sarang\>** roger  
**\<Isthmus\>** s/RingCT/non-RingCT  
**\<monerobux\>** Isthmus meant to say: Sorry, by "ignore" non-RingCT, I mean "exclude them from my data set before analyzing"  
**\<sarang\>** Oh, and I might have mentioned this last week (don't recall), but I'm still working with those CMU student researchers to confirm some updated deducibility analysis  
**\<sarang\>** They plan to revise their preprint once again  
**\<sarang\>** This is especially nice given that their "30% traceable" (or whatever it was) conclusion regarding spend age heuristics is incorrect  
**\<kiwi\_87\>** @sarang. Yeah I know it’s the hardest part. Actually our research at Incognito project is currently on this direction.  
**\<kiwi\_87\>** We have the idea of building a privacy chain learning the technology from Monero, thus allowing the high level of privacy for the chain.  
**\<kiwi\_87\>** Then build a Portal connecting to Monero with a group of decentralized custodians holding & releasing XMR when users going in & going out the layer 2. The same design can be applied to BTC, which brings XMR & BTC to the same privacy layer.  
**\<kiwi\_87\>** What do you guys all think?  
**\<sarang\>** This might be a better conversation for after the meeting kiwi\_87 if it mainly concerns research for another project  
**\<sarang\>** Unless the group disagrees  
**\<moneromooo\>** Not this silent part of the group.  
**\<sarang\>** Were there any other questions on the deducibility or output merging data?  
**\<sarang\>** If not, does anyone else wish to present research of interest for this group?  
**\<Isthmus\>** @kiwi\_87 cool, I like  seeing these types of projects. 👍  
**\<h4sh3d[m]\>** I can give some updates about the swap  
**\<sarang\>** Please do  
**\<sarang\>** (this may be relevant to you kiwi\_87)  
**\<h4sh3d[m]\>** I started working on it, I plan to have an updated version of the paper next week  
**\<h4sh3d[m]\>** So, the idea is still the same as before  
**\<kiwi\_87\>** @sarang yeah sure. I’ll talk more about what we are doing in the after-meeting time. Still, I think  interoperability on XMR could be a very bright way to increase the Monero adoption. Would love to talk to other researchers who are also diving in the same direction  
**\<h4sh3d[m]\>** split the monero spending key in two halfs, and "sell" one half or the other on the bitcoin chain depending if the swap success or not  
**\<sarang\>** via multisig, I assume  
**\<sarang\>** "You get the even bytes, and I keep the odd bytes!"  
**\<h4sh3d[m]\>** Yes, kind of. Before there was the generic zkp for the hash preimage  
**\<kiwi\_87\>** @Isthmus sure. Would love to share more in the after-meeting time. Now let’s make the convo laser-focused on Monero  
**\<sarang\>** h4sh3d[m]: but you're replacing with a cross-group DL equivalence proof via side channel, correct?  
**\<kiwi\_87\>** @h4sh3d[m] would love to hear about this. Really want to know what’s going on there with the cryptography challenge. Please update us :D  
**\<h4sh3d[m]\>** Now, by combining dl equality across group + ECDSA one-time VES, we should be able to achieve the same  
**\<h4sh3d[m]\>** ECDSA one-time VES: https://github.com/LLFourn/one-time-VES/blob/master/main.pdf  
**\<h4sh3d[m]\>** (it's an ECDSA "adaptor signatures")  
**\<sarang\>** Remind me: does this approach assume/require any particular timelock capability on the Monero side?  
**\<sarang\>** If so, to what extent?  
**\<h4sh3d[m]\>** No, nothing is required on the Monero side, that's the cool part  
**\<sarang\>** OK, thanks  
**\<sarang\>** Monero supports a very simple timelock of course  
**\<sarang\>** but it's a bit inconsistent at the moment, and apparently infrequently used  
**\<sarang\>** so if it were required, this could present a uniformity issue  
**\<h4sh3d[m]\>** We create an address where Spend = Spend\_alice + Spend\_bob (same for view)  
\<Spend, View\> corresponding address  
**\<sarang\>** Does the address protocol have issues with key cancellation?  
**\<h4sh3d[m]\>** Each participant has his own half, and one will get the second one  
**\<sarang\>** Or is there precommitment to address parts?  
**\<h4sh3d[m]\>** Not sure if I understand what you mean by key cancellation  
**\<sarang\>** If you hand me a part of a key, maybe I maliciously generate my own "key" such that the sum is any value I want  
**\<h4sh3d[m]\>** Ah yes, I thought about that  
**\<sarang\>** If this is problematic, we can each commit to our key portions first, and then check that the keys received match the commitments  
**\<sarang\>** it ensures that neither party change their mind  
**\<sarang\>** Adds a communication round  
**\<sarang\>** There are other methods involving random-oracle linear combinations too, depending on what you need  
**\<h4sh3d[m]\>** I thought about the commit, but that also mean you don't know your correct "half" (only the destiantion priv/pub), and without priv half, you are not able to continue the protocol  
**\<sarang\>** But sorry, I'm digressing here  
\<\>other cryptos, we will need more atomic swap designs and Portal designs connecting layer 2 and Monero chain  
**\<h4sh3d[m]\>** No, it's a good one  
**\<sarang\>** kiwi\_87: let's discuss after the meeting  
**\<sarang\>** h4sh3d[m]: ok, as long as it's either not necessary or taken care of via a communication round, I suppose  
**\<sarang\>** But certainly worth a close eye after the paper is updated  
**\<h4sh3d[m]\>** when we get the address, and the initialization phase is done (with zkp dl equality e.g.), one send Monero into it  
**\<kiwi\_87\>** @sarang sure  
**\<h4sh3d[m]\>** at the end, Alice or Bob, will learn the full private spend key = priv\_spend\_alice + priv\_spend\_bob  
**\<h4sh3d[m]\>** So no, nothing fancy required on the Monero side  
**\<atoc\>** nice  
**\<h4sh3d[m]\>** You will import the full keys in you wallet and do a regular transaction  
**\<sarang\>** Definitely look forward to seeing the updated paper h4sh3d[m]!  
**\<atoc\>** same  
**\<h4sh3d[m]\>** (keys that are generated withou a seed and a derivation function, so wallet must support "raw" keys)  
**\<h4sh3d[m]\>** Right now, I'm in the one-time VES paper, and your MRL-0010 one  
**\<sarang\>** got it  
**\<h4sh3d[m]\>** \* I'm done, thanks for your inputs  
**\<sarang\>** I might update MRL-0010 to specify that the Pedersen generators need an unknown DL relationship  
**\<sarang\>** Apparently that wasn't listed specifically, but is generally true for Pedersen commitment security  
**\<sarang\>** In the interest of time, were there any other research topics that need to be presented before the hour is up?  
**\<Isthmus\>** Quick update: I’m really happy to share that we’re officially beginning our audit of monero’s security and privacy mechanisms against algorithms that could be exploited by hypothetical quantum adversaries. Thank you to everybody who contributed feedback or funds to our CCS 🙏  
**\<Isthmus\>** The first step is a formalizing our adversary model and enumerating of mechanisms of interest.  
**\<Isthmus\>** Right now the attack surface list looks like {Ring Signatures, RingCT, One-time "Stealth" Addresses, Pubkey derivation, Forge amounts?, Bulletproofs, RandomX proof-of-work, Block / Transaction hashing}.  
**\<Isthmus\>** Please suggest other pieces that you’d like to see audited. :- )  
**\<Isthmus\>** Earlier I was looking at the wallet generation schematic shared to Reddit, and it has me pondering visual ways to communicate results. https://www.reddit.com/r/Monero/comments/gy0m1u/i\_made\_an\_infographic\_on\_how\_a\_monero\_wallet\_is/  
**\<monerobux\>** [REDDIT] I made an infographic on how a Monero wallet is generated. Can you find any mistakes? (https://i.redd.it/tv98m10mbd351.png) to r/Monero | 163 points (100.0%) | 18 comments | Posted by Krakataua314 | Created at 2020-06-06 - 22:42:54  
**\<Isthmus\>** https://i.redd.it/tv98m10mbd351.png  
**\<Isthmus\>** For example, the ed25519 scalarmult (used for private view key → public viewkey) is a one-way function for traditional computers (assuming hardness of the discrete log problem) but can be reversed if you can apply Shor’s algorithm.  
**\<Isthmus\>** So perhaps this could be visually annotated with directional arrow for traditional adversaries and bidirectional arrow for hypothetical quantum adversaries. Would that be an intuitive approach?  
**\<sarang\>** I like that idea  
**\<sarang\>** that's very clever  
**\<sarang\>** Can you remind us of the expected timeline Isthmus?  
**\<Isthmus\>** Will be working on this full time for the next 3 months  
**\<sarang\>** (with the understanding that research often takes unexpected twists)  
**\<Isthmus\>** Phase 1 should be quick  
**\<sarang\>** The scope was modified to focus less on deliverable code, right?  
**\<sarang\>** And more on solid understanding, possible mitigations and relevant work, and communication?  
**\<Isthmus\>** Just setting the stage for our object of study and attacker, hoping to have a first "final draft" of that done by next MRL meeting  
**\<sarang\>** Oh nice  
**\<Isthmus\>** Yep  
**\<sarang\>** That'll be great to see  
**\<Isthmus\>** And then working systemically through the cross sections  
**\<Isthmus\>** (table where each column is a quantum adversary and each row is a piece of Monero tech)  
**\<Isthmus\>** My guess is that we'll be able to fill 80% of the squares in 20% of the time  
**\<Isthmus\>** And then 20% of the squares will take 80% of the time  
**\<sarang\>** Do you expect that the final results will be suitable for broader distribution? Like to journals, refereed conferences, or simply IACR archive?  
**\<Isthmus\>** Throughout this entire project, the community will receive updates during the weekly #monero-research-lab meetings. During phase 3 however, several specific documents (the key deliverables from this research) will be freely published  
**\<Isthmus\>** 1. User-friendly writeup: This community-facing writeup will provide an approachable explanation of how hypothetical quantum computers may impact Monero, and possible future mitigations. The writeup should minimize FUD and provide the context that these vulnerabilities apply to almost all cryptocurrencies (not only Monero).  
**\<Isthmus\>** 2. Technical documentation: An MRL position paper to distill key information for (current and future) researchers and developers. The writeup should formally describe vulnerabilities, and highlight potential strategies and solutions, noting their tradeoffs. Code snippets may be included if appropriate for pedagogical purposes or clarity.  
**\<Isthmus\>** 3. Non-technical 1-pager: An ELI5 / TL;DR summary will be provided for journalists, Monero Outreach, etc. This blurb will discuss risks and myths with no technical jargon, with key takeaways that a broad audience will appreciate.  
**\<Isthmus\>** (Results and updates will be also disseminated via Twitter threads, Reddit posts, and Breaking Monero videos.)  
**\<Isthmus\>** And yea, hopefully we can get a paper or two out of this  
**\<Isthmus\>** Much of the research will be broadly applicable  
**\<sarang\>** Great!  
**\<atoc\>** Nice  
**\<sarang\>** Getting a better sense of research trends in this direction, even if not presently applicable, will be intriguing to see  
**\<sarang\>** e.g. there are plenty of ideas for post-quantum constructions, but there are generally huge barriers in efficiency that render them unusable  
**\<atoc\>** btw Isthmus, this may be off topic but can you talk a little more about the Insight program?  
**\<sarang\>** OK, we're just about out of time  
**\<sarang\>** atoc: perhaps for right after the meeting?  
**\<atoc\>** yes  
**\<sarang\>** Are there any other last questions or comments about these research topics before adjourning?  
**\<sarang\>** If not, thanks to everyone for attending and participating!  
