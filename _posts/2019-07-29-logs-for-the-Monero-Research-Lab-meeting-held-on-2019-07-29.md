---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-07-29
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** OK, let's begin  
**\<sarang>** Hello all  
**\<sarang>** Logs of this meeting will be posted to the GitHub agenda issue afterward  
**\<sarang>** GREETINGS  
**\<suraeNoether>** greetings!  
**\<kenshamir[m]>** hey  
**\<sarang>** Whoops, here is the current agenda: https://github.com/monero-project/meta/issues/377  
**\<sarang>** Let's go ahead with ROUNDTABLE  
**\<sarang>** I've been working hard on an RCT3 implementation, integrating some nice optimizations and seeing if it's possible to get key images working as expected  
**\<sarang>** This also led to a bunch of other library updates that the code relies on  
**\<sarang>** So generally just a lot of coding  
**\<sarang>** I also gave a fun lecture on the Enigma cipher machine and the math behind it, which is always fun ;)  
**\<suraeNoether>** nice, what was that for? a meetup or something?  
**\<sarang>** A friend teaches at a university and thought it would be good for an undergrad crypto class  
**\<sarang>** Since the Enigma break is all about permutation groups  
**\<suraeNoether>** nice  
**\<sarang>** I should be able to finish up an integration of the BP inner product verifier optimization into RCT3 shortly  
**\<sarang>** Then, of course, DEF CON approaches!  
**\<suraeNoether>** neat  
**\<suraeNoether>** i have a very dirty branch on my computer with my matching simulations and experiments being worked upon  
**\<sarang>** How are those going?  
**\<hyc>** defcon - anyone got grasshopper repellent?  
**\<sarang>** -\_\_\_\_-  
**\<suraeNoether>** i've proven all the theorems necessary to prove that the algorithm in graphtheory.py does what i claim it does, and i'm currently testing that my simulated ledgers are doing what i expect.  
**\<sarang>** noice  
**\<sarang>** Will be very neat to see the results, and to see if/how they can work with the analysis that Isthmus et al. are doing on Monero and Zcash  
**\<suraeNoether>** in addition to that, i have a bunch of MAGIC stuff I need to get done, and my discussions with isthmus' digital forensics work are leaning in that direction  
**\<suraeNoether>** i'm thinking the content of this project may take up more than two papers :\\  
**\<sarang>** Cool!  
**\<sarang>** Also worth noting that the CLSAG paper has been updated on IACR, thanks mainly to kenshamir[m]'s comments and questions  
**\<sarang>** kenshamir[m] has also been working on a Rust implementation of CLSAG/MLSAG using the dalek library  
**\<suraeNoether>** hyc: i hear grasshoppers are delicious, i wonder if any of those fancy vegas michelin star restaurants are capitalizing on the swarm  
**\<sarang>** Anything you'd like to share on that, kenshamir[m] ?  
**\<kenshamir[m]>** Hi, the library is finished, not interopable with monero because it uses a different curve though. The numbers are quite impressive and I believe it is due to the way cLSAG was created  
**\<sarang>** aw shucks  
**\<sarang>** Will be great to see your MLSAG vs CLSAG numbers at different ring sizes  
**\<suraeNoether>** i believe there was a question re: ristretto and multi-exp like pippenger right before the meeting that would be relevant here?  
**\<sarang>** I brought it up a while back because we handle different linear combination sizes \_very\_ differently in the codebase  
**\<scoobybejesus>** is that rust code in a public repo?  
**\<sarang>** We use no fewer than 4 methods  
**\<kenshamir[m]>** The numbers above were for different ring sizes, I may have mis-typed key sizes by accident  
**\<kenshamir[m]>** 256 and 512 were for the decoy sizes; if I was not clear  
**\<sarang>** A big part of the reason CLSAG verification is faster than MLSAG is because of the introduction of a new linear combination evaluation algorithm  
**\<sarang>** kenshamir[m]: can you link them again for the logs?  
**\<sarang>** (if comfortable having them public)  
**\<kenshamir[m]>** \<scoobybejesus "is that rust code in a public re"> Not the cLSAG code, once I add documentation and sanitise it I can post it in here  
**\<sarang>** ty  
**\<kenshamir[m]>** \<sarang "kenshamir: can you link them aga"> Yep sure  
**\<scoobybejesus>** :)  
**\<sarang>** What does "without Pippenger/Straus" mean? Simple iterative evaluation of linear combinations?  
**\<kenshamir[m]>** Yep exactly  
**\<sarang>** Impressive numbers  
**\<sarang>** Of course, it's a different hash function  
**\<kenshamir[m]>** I just did scalarbase mult in a for loop  
**\<kenshamir[m]>** haha yeah that too  
**\<suraeNoether>** hmmmmm  
**\<sarang>** But if the hash function is the same across both of your CLSAG/MLSAG, then the relative numbers are good  
**\<suraeNoether>** something that is both faster and smaller and with equivalent security is a no-brainer for implementation (pending audits)  
**\<sarang>** Speaking of this, still in contact with potential auditors, who are moving very slowly  
**\<sarang>** Nothing to report on that front :/  
**\<suraeNoether>** the improved space allows for a logarithmic increase in verification time without actually slowing down the network (at least when it comes to new nodes downloading the network). judging by these numbers, a ring size of 16 or 32 is no longer like pouring molasses or concrete onto the network  
**\<sarang>** OK, any other interesting research to report?  
**\<gingeropolous>** re: audits, or roll-out in general. Is this the kind of thing that could be rolled-out in parallel with existing? i.e., have an overlap, where the network uses the existing as the primary / default, but can optionally use the new thing, and then once new thuing is vetted, just prune the old?  
**\<hyc>** ^ slow auditors - a lot of people are on summer holiday now  
**\<gingeropolous>** or, switch to the new and no longer have to relay / verify the old style during the overlap?  
**\<suraeNoether>** sarang: am i wrong in saying that gingeropolous is correct that clsag could be implemented in parallel before mlsag is deprecated?  
**\<hyc>** we had a 24hr overlap in the last hardfork for this sort of thing  
**\<gingeropolous>** this would be kinda different.  
**\<sarang>** I suppose it could be overlapping, provided the fee model supports it properly  
**\<sarang>** I don't really see why this would be useful  
**\<gingeropolous>** i dunno. i'm just opening the conversation regarding the model that all new things need to be audited  
**\<gingeropolous>** i mean, obvi auditing is great  
**\<sarang>** yes  
**\<gingeropolous>** but its not perfect  
**\<dEBRUYNE>** hyc: Yeah in general, summer constitutes low activity  
**\<sarang>** It's good for inspiring confidence, as well as the obvious benefits of catching any errors  
**\<kenshamir[m]>** Can Monero benefit from using bulletproofs for arithmetic circuits?  
**\<dEBRUYNE>** gingeropolous: Didn't we discuss that kind of model for Bulletproofs or RingCT too?  
**\<sarang>** Likely not, with our current tx model  
**\<gingeropolous>** yeah dEBRUYNE  
**\<sarang>** The scaling isn't great  
**\<dEBRUYNE>** I think it was shot down for good reasons, but I cannot remember them exactly :-P  
**\<gingeropolous>** i think that was post audit though  
**\<sarang>** and we have hash functions, which screw things up  
**\<sarang>** Zooko had a slide in some presentation where his team estimated the verification time for a circuit with the complexity of Sapling (Sprout? don't recall)  
**\<sarang>** and BP verification was O(1 s)  
**\<sarang>** Compared to our current verification time which is probably 1/50th of that  
**\<sarang>** maybe 1/100th  
**\<kenshamir[m]>** yikes  
**\<suraeNoether>** kenshamir: if we designed an arithmetic circuit to describe a ring confidential transaction language, then yes, but that's sort of what RCT3 and omniring and lelantus try to do... sarang, i think zooko was showing "what it would look like for a Sapling transaction language to be proven in the bulletproof setting" not ring confidential transactions, so it's not clear to me whether it'd be slower.  
**\<suraeNoether>** in our setting  
**\<suraeNoether>** with the exception of our non-AC-compatible hash function  
**\<dEBRUYNE>** sarang: That's verification time for fully shielded transactions?  
**\<suraeNoether>** dEBRUYNE yeah, iirc  
**\<dEBRUYNE>** Yikes  
**\<sarang>** Yeah, that timing was just to give an example of what a production-size tx circuit might look like  
**\<dEBRUYNE>** Especially given that, as far as I know, you have to run a full node in order to properly perform fully shielded transactions  
**\<dEBRUYNE>** Anyway, I digress :-P  
**\<sarang>** Anyway, suraeNoether is right in that RCT3 and Omniring try to bring the BP benefits to specific languages used to prove RingCT-type statements  
**\<sarang>** which is why we're interested in them  
**\<suraeNoether>** yeah, bulletproofs for use in SNARK-style languages is like... uhm... putting a large-diameter turbofan engine into a Mini Cooper. It's not going to do what you think it's going to do.  
**\<sarang>** BPs can be much more efficient for languages built for it  
**\<sarang>** which is why range proofs are so efficient  
**\<kenshamir[m]>** haha  
**\<suraeNoether>** indeed  
**\<suraeNoether>** moving along  
**\<sarang>** heh  
**\<sarang>** ok, other research?  
**\<sarang>** Or QUESTIONS, from the agenda?  
**\<sarang>** OK then! To ACTION ITEMS  
**\<sarang>** I'll be finalizing some things for my DEF CON talk, workshop, and panel; and finalizing some RCT3 integration optimizations  
**\<sarang>** suraeNoether: ?  
**\<suraeNoether>** oh gosh sorry  
**\<suraeNoether>** i was computing a number sorry about that. :P  
**\<sarang>** it's 7  
**\<suraeNoether>** my action items are: work on sims and the experimenter, and work with isthmus to formalize statistical hypotheses for testing all this  
**\<sarang>** Having data from Isthmus's group will be extremely valuable for this kind of analysis  
**\<suraeNoether>** actually the number is O(153.58\*N), which is the number of bits used to describe the number of possible spend histories at ring size 32 with N outputs.  
**\<suraeNoether>** which is nutters  
**\<sarang>** This is all assuming no external information?  
**\<sarang>** Or other graph-based information on chain reactions and provably-spent outputs?  
**\<suraeNoether>** merely the total number of self-consistent spend histories  
**\<sarang>** Ah ok, so for a hypothetical graph  
**\<suraeNoether>** yeah  
**\<sarang>** got it  
**\<gingeropolous>**  O(153.58\*N) ... great. now your math is talking in math  
**\<suraeNoether>** well it means that for, say, 1000 transactions at ring size 32, there are 2^(153,580) possible spend histories.  
**\<suraeNoether>** anyway  
**\<suraeNoether>** (N has to be a lot bigger than the ring size for the above formula to hold btw)  
**\<sarang>** which is... quite reasonable  
**\<sarang>** Any other final thoughts or questions before we adjourn?  
**\<sarang>** OK then! Thanks to everyone for participating. We are adjourned  
