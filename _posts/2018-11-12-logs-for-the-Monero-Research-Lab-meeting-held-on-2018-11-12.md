---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-11-12
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>** howdy everyone!  
**\<nioc>** meow  
**\<OpenSorceress>** :D  
**\<sarang>** hiyo  
**\<TheFuzzStone[m]>** Sup!  
**\<rehrar>** hiyo  
**\<rehrar>** .....to quote sarang  
**\<suraeNoether>** so, let's flip the usual order of the meeting to allow for questions at the beginning  
**\<suraeNoether>** i like that  
**\<suraeNoether>** in fact, i'm going to call THAT the new "usual order"  
**\<suraeNoether>** so, the agenda today is 1) questions, 2) sarang's research this week and last, 3) mine, and 4) any other project discussion that's remotely relevant to research  
**\<sarang>** roger  
**\<suraeNoether>** so, someone give me and sarang your top two questions :D  
**\<nioc>** any updates on Konferemco preparations?  
**\<rehrar>** I should have a logo and branding guidelines today  
**\<rehrar>** in regards to MRL, where are we in the churn and privacy formalizations?  
**\<rehrar>** although I assume this will be talked about with your report of the week suraeNoether  
**\<suraeNoether>** that is precisely the case  
**\<suraeNoether>** i'm in the midst of getting hard numbers for a timing for a practical attack  
**\<suraeNoether>** sarang and i have discovered an anonymity metric that could give us a guideline for "how rapidly we need to chagne our ring size with respect to blockchain size to maintain our current levels of anonymity."  
**\<suraeNoether>** this is a very useful metric, but it's dangerous to misinterpret it  
**\<sarang>** Let us shift that to the later agendum  
**\<suraeNoether>** so we're avoiding making formal proclamations about it, but we are going to use it as a rough guideline for future ring size increases  
**\<suraeNoether>** agreed  
**\<suraeNoether>** nioc our conference organizer has been checking out a few alternative venues, and we have already identified some vendors for things like catering  
**\<sarang>** I have a question... how the hell do I build the dalek bulletproof rust implementation for timing testing??!?!?!?!  
**\<sarang>** I know jack shiz about rust  
**\<suraeNoether>** that's an excellent question that occurred to me yesterday afternoon!  
**\<sarang>** they claim to be bonkers fast, even compared to libsecp256k1 (which seems nutso to me)  
**\<suraeNoether>** they are claiming some mad speed gainz on top of your already mad speed gainz  
**\<sarang>** They don't have batch verification yet tho  
**\<sarang>** (it's on their issue list)  
**\<suraeNoether>** jfc  
**\<sarang>** So I want to run timing tests myself to see  
**\<suraeNoether>** if that's the case, then... man that implementation is bonker fast like what-what  
**\<sarang>** I don't think they're lying, but I'm also naturally skeptical  
**\<sarang>** I don't find it terribly relevant since we're already pretty fast  
**\<suraeNoether>** i suspect that bulletproofs are going to benefit from 40 years of optimizations in linear algebra and ECC very very quickly  
**\<sarang>** and any changes specific to underlying curve architecture aren't useful for us ATM  
**\<rehrar>** sarang: what if it's so fast it can reverse the blackchain continuum?  
**\<rehrar>** somethign to look into  
**\<sarang>** Ah yes, the chain shrinks over time  
**\<sarang>** negachain  
**\<suraeNoether>** the blackchain continuum hypothesis, by tom clancy  
**\<suraeNoether>** or dan brown  
**\<sarang>** Anyway, it won't build for me, but I'll verify timings once I get it figured out  
**\<rehrar> \<sarang>** Ah yes, the chain shrinks over time <-- it will give extra space to your computer when it goes negative  
**\<sarang>** However, they also have ideas for non-power-of-2 stuff, which was on the back burner for me  
**\<sarang>** if it proves useful for them in a way that translates to us, great  
**\<suraeNoether>** nioc i believe we already have enough funding availalbe to put a deposit down on a location, and I would like to do that before the end of 2018. email invitations to speakers will be start being setn out this week  
**\<sarang>** nice  
**\<sarang>** Also our other conference FFS (Stanford) was funded recently, so many thanks on that front  
**\<suraeNoether>** in general: thank you to all contributors who make Monero Research Lab a funded thing  
**\<sarang>** suraeNoether and I will learn next month if either of us will be speaking there  
**\<sarang>** anyway, other questions for us?  
**\<rehrar>** ne  
**\<sarang>** In the absence of further questions, we can talk recent research  
**\<sarang>** This past week, I did two events in Chicago  
**\<sarang>** one was a hands-on Monero development workshop  
**\<sarang>** the other was a more general talk on privacy tech  
**\<sarang>** both videos are on YouTube, linked from the Monero Moon posting  
**\<sarang>** thanks to the Chicago Bitcoin and Open Blockchains group for hosting me  
**\<suraeNoether>** Did you have a good time? think you'll do something like that again?  
**\<sarang>** Yeah, I think it was very valuable  
**\<sarang>** They had good turnout and excellent questions  
**\<sarang>** I really like the workshop idea especially  
**\<sarang>** Aside from that work, I did a good amount of lit review to support suraeNoether's work (discussed shortly) on graph matchings, which was an extension of some earlier analysis we did on spent output analysis  
**\<suraeNoether>** what was the demographic of the crowd like?  
**\<sarang>** The workshop was smaller (due to scheduling shenanigans for some participants) but had folks interested in math/CS/development  
**\<sarang>** The talk had a good mix of technical folks and well-wishers  
**\<sarang>** It'd be cool to find a way to host an interactive online workshop  
**\<OpenSorceress>** what would that entail?  
**\<sarang>** Well, one set of tasks I had them do was use a simple Python ed25519 library to build some constructions  
**\<sarang>** like Pedersen commitments and Schnorr sigs  
**\<rehrar>** lol, love the name OpenSorceress. That's funny.  
**\<sarang>** So being able to do video w/ slides for introductory work would be good  
**\<sarang>** as well as interactive stuff to help the participants write code  
**\<sarang>** Then we did some basic RPC stuff  
**\<OpenSorceress>** like remote pairing?  
**\<sarang>** OpenSorceress: some situation where the workshoppers could do in-browser code, perhaps, and then let me assist interactively if needed  
**\<sarang>** I don't know if there is such a thing already  
**\<sarang>** just spitballing here  
**\<suraeNoether>** that is pretty awesome, sarang! i'm glad it's online.  
**\<OpenSorceress>** there is  
**\<sarang>** orly  
**\<OpenSorceress>** yeppers  
**\<OpenSorceress>** -> floobits pops to mind  
**\<sarang>** Cool, let's discuss after meeting  
**\<OpenSorceress>** :) ok  
**\<sarang>** I've also been working to integrate stealth addresses into the RTRSRingStringRuffCT optimizations  
**\<sarang>** and other minor tasks, etc  
**\<suraeNoether>** allrighty  
**\<sarang>** How about you suraeNoether? The graph matching, perhaps  
**\<suraeNoether>** well, i've been doing the churn and graph theoretic stuff  
**\<suraeNoether>** as I mentioned earlier, sarang and I have stumbled upon a class of anonymity metrics for graphs such as ours, and this will give us a quantitative basis for maintaining at least our current levels of anonymity as the blockchain gets larger  
**\<sarang>** It's worth noting that this isn't even new analysis  
**\<sarang>** But a really clever interpretation of older stuff that suraeNoether came up with  
**\<sarang>** which is always great in math  
**\<suraeNoether>** correct, in fact several of these were proposed right around the time Bitcoin was proposed, which amuses me  
**\<suraeNoether>** 2007, 2008, 2009  
**\<rehrar>** so are you saying that as the blockchain gets larger, anonymity decreases?  
**\<suraeNoether>** well, consider the following situation  
**\<suraeNoether>** let's say something ridiculous like "tomororw Monero goes back to ring size 1"  
**\<sarang>** It's important to note that "anonymity" here means "anonymity according to a very specific metric formulation that may or may not correspond to a particular threat model"  
**\<suraeNoether>** what happens? a bunch of blocks are added to the monero blockchain, all of which are totally linkable  
**\<suraeNoether>** this is an edge case of the following idea:  
**\<notmike>** Even I could link them!  
**\<suraeNoether>** heh  
**\<suraeNoether>** if we take our present system and add a bunch of non-anonymous stuff, we aren't improving our anonymity  
**\<suraeNoether>** in fact, we are decreasing our anonymity, by essentially diluting our nice big fat blockchain filled with fat ring sigs with non-anonymous data  
**\<sarang>** At their heart, these metrics use numbers of matchings to relate to some idea of anonymity  
**\<sarang>** a graph matching is a possible global spend history, of which there will be many  
**\<sarang>** Think of it as being a guess about true spends that's at least \_consistent\_, but of course not provable  
**\<sarang>** My current view of this type of analysis is that, being only a heuristic that could be combined with things like output age, it provides the same types of plausible deniability that ring sigs have always offered  
**\<sarang>** however  
**\<sarang>** what suraeNoether was saying about it being useful to examine proposed changes is a good idea  
**\<sarang>** So you can say "if we increase ring size to X given usage patterns Y, this metric implies that anonymity gets better"  
**\<sarang>** it's not possible to say things like "anonymity gets Z% better" though  
**\<suraeNoether>** so, to answer your question rehrar: the Edman anonymity level is \*negatively\* related to overall graph size and \*positively\* related to ring size. so we can say "okay, if our blockchain was \*this\* big, how big of a ring size would we need to have similar EAL to today?"  
**\<suraeNoether>** the fact of the matter is, though, it very slowly changes with respect to graph size at these levels  
**\<rehrar>** got it  
**\<suraeNoether>** to maintain an EAL similar ot what we have today, the blockchain could be 10x larger  
**\<suraeNoether>** and we might need a ring size of like 15 at that point, or something like that, to make it equal exactly  
**\<sarang>** I have the same types of broad, non-mathematical questions about global anonymity that I do about rings in general  
**\<sarang>** If there are 2^64 possible spend histories, is that good enough for our threat models? What if there were only 2^4? I don't know  
**\<suraeNoether>** sarang actually we can sort of answer that question quantitatively  
**\<sarang>** Well, for some threat models, "good enough" means "enough reasonable doubt to avoid someone getting in trouble for a spend history they weren't actually involved in"  
**\<sarang>** and that depends on how your legal system works  
**\<sarang>** What types were you considering?  
**\<suraeNoether>** the question an attacker needs to answer is "out of all possible spend histories with a likelihood greater than some C of being the true spend history, what % of these is a specific edge traced?" for example, if in 95% of all plausible and likely histories, edge e sending monero from address X to address Y is included in the matching, we conclude that edge e is the true spender.  
**\<suraeNoether>** we may be able to quantify our security on an individual level that way, and see how it is sensitive to game parameters  
**\<suraeNoether>** anyway, 100% of my MRL attention is on this paper right now  
**\<sarang>** A lot of this (not just graph metrics) seems to be chasing after specific heuristics (some unknown) without a real fundamental idea of what guarantees we want to be able to offer  
**\<sarang>** Subtly moving from "not provable spending" to "not heuristically-guessable spending" seems like a generally good idea, but it's like swiss cheese  
**\<suraeNoether>** all of my work so far is highlighting, essentially, the urgency with which we need to replace ring signatures  
**\<sarang>** true  
**\<suraeNoether>** and the fundamental problem with using KYC exchanges  
**\<sarang>** Well, those aren't going anywhere  
**\<sarang>** and if anything, more people will move to them  
**\<hyc>** as opposed to DEXs?  
**\<sarang>** Do you know of any usable ones?  
**\<hyc>** I assume Bisq works  
**\<gingeropolous>** bisq .. ?  
**\<hyc>** haven't used it  
**\<rehrar>** question on replacing ring signatures...is there any sort of tech (eevn un battle tested) that exists at the moment?  
**\<sarang>** nor have I  
**\<sarang>** rehrar: no  
**\<suraeNoether>** i hear bisq is good, but i haven't used it yet  
**\<suraeNoether>** rehrar: yes and no  
**\<sarang>** not without sacrificing trust  
**\<suraeNoether>** or speed/efficiency  
**\<sarang>** correct  
**\<suraeNoether>** there are some trustless set-ups that are unreasonably slow  
**\<hyc>** if we could do cross-chain atomic swaps with BTC that would eliminate a huge chunk of exchange usecases  
**\<suraeNoether>** or big  
**\<sarang>** IMO the goal of the graph matching analysis should be to at least get an order-of-magnitude estimate on Monero global spend histories  
**\<suraeNoether>** hyc that is 100% correct, and we have all the theoretical framework for that except SPV at this point, but the recent nipopow paper and another recent paper may fix that too  
**\<sarang>** I'm not convinced this provides an adversary with remarkably more actionable data than existing heuristics  
**\<OpenSorceress>** how would you go about sussing that out?  
**\<sarang>** And while it should push us toward better non-ring-sig solutions, I also don't want to FUD our users in the same way that all the other Monero tracking papers have  
**\<suraeNoether>** it should provide literally the same amount of data, just one is a global approach and one is a txn-by-txn approach  
**\<sarang>** OpenSorceress: run the analysis on at least a portion of the chain  
**\<sarang>** suraeNoether: implementing nipopow is a huge undertaking  
**\<suraeNoether>** yes  
**\<sarang>** suraeNoether: what do you see as the goal of the analysis?  
**\<suraeNoether>** provide actionable advice for the monero community on how to mitigate the worst known traceability chainalsysis attack. ultimately  
**\<sarang>** in terms of ring size specifically?  
**\<sarang>** given that the EAL is sensitive to it?  
**\<suraeNoether>** not necessarily, although that is presently a facet of the analysis, yeah.  
**\<suraeNoether>** i mean, at this point, I think that further increases in ring size without order-of-magnitude increases... i'm not convinced of their efficacy, but i can't say either way at this point  
**\<sarang>** What's the takeaway from all of this, for the folks in this meeting?  
**\<suraeNoether>** research is ongoing into the matter  
**\<suraeNoether>** progress is being made in terms of making actionable recommendations to the community  
**\<suraeNoether>** but we aren't announcing them yet, until after more consideration  
**\<suraeNoether>** i'm not sure what you mean  
**\<rehrar>** good enough for me  
**\<sarang>** Do you view this a fundamentally new form of analysis that provides adversaries with a lot of new damaging information?  
**\<sarang>** (as opposed to, for example, the closed-set attack, which really gave marginal information)  
**\<suraeNoether>** there is no practical way i can answer that question, sarang  
**\<sarang>** ok  
**\<suraeNoether>** i'm telling you it's the worst-known traceability attack  
**\<suraeNoether>** i'm estimating how bad it is  
**\<suraeNoether>** that's my job right now  
**\<sarang>** ok  
**\<sarang>** Anything else of note to share from your side regarding recent stuff?  
**\<suraeNoether>** not with respeect to MRL, no  
**\<sarang>** kk  
**\<suraeNoether>** and i have an appointment i need to get to you guys, so.. peach out  
**\<suraeNoether>** imagine whirled peas  
**\<suraeNoether>** etc  
**\<sarang>** np  
**\<suraeNoether>** love you guys \*smooches\*  
**\<sarang>** Anyone else wish to bring up something they've been working on?  
**\<sarang>** crickets!  
**\<hyc>** if you're bothered by blockchain sync speed, get your hands on Optane SSDs  
**\<sarang>** yeah?  
**\<OpenSorceress>** Optane SSDs?  
**\<endogenic>** SSDs?  
**\<sarang>** Ds?  
**\<endogenic>** ??  
**\<OpenSorceress>**  
**\<sarang>** I store the chain in RAM  
**\<hyc>** yeah http://www.lmdb.tech/bench/optanessd  
**\<endogenic>** LOL  
**\<sarang>** I build a new ASIC for each block that gets added  
**\<hyc>** Real Men store the blockchain in RAM :P  
**\<sarang>** Well, I'll officially adjourn today's meeting; thanks to all for attending  
**\<sarang>** Next week, same bat-time, same bat-channel  
**\<hyc>** ttyl  
**\<rehrar>** bai  
