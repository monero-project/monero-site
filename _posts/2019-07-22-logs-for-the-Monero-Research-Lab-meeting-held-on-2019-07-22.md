---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-07-22
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** OK, let's get started  
**\<sarang>** GREETINGS  
**\<suraeNoether>** hello fellow not-robots  
**\<sarang>** Let's move on to ROUNDTABLE  
**\<sarang>** suraeNoether: care to begin?  
**\<suraeNoether>** sure  
**\<suraeNoether>** so this weekend i finally posted the konferenco post mortem report, the budget, and markdown'd all the things: https://www.reddit.com/r/Monero/comments/cfsc2m/suraes\_content\_dump\_konferenco\_post\_morto\_budget/  
**\<suraeNoether>** this includes my research report for the last quarter and my request for funding for Aug, Sep, Oct.  
**\<suraeNoether>** And isthmus pointed out a property of zcash's shielded pool that i am capable of modeling with my matching simulations, so i've spent a few hours this past weekend trying to get those working (still a wip)  
**\<suraeNoether>** that's all  
**\<suraeNoether>** sarang?  
**\<sarang>** Nice!  
**\<sarang>** I've posted the handout and some sample code for my upcoming DEF CON workshop  
**\<suraeNoether>** nice! thatsafineoutreach.gif  
**\<sarang>** (note that you should not use the handout or sample code in production environments, of course... only for playing around)  
**\<sarang>** And I have incomplete work on an RCT3 proof of concept implementation  
**\<sarang>** with some efficiency improvements  
**\<sarang>** the batching opportunities for RCT3 are quite nice  
**\<sarang>** as is the fact that the prover and verifier are relatively straightforward  
**\<sarang>** also also it can take advantage of any existing rangeproof implementation  
**\<sarang>** Any questions on these?  
**\<kenshamir[m]>** Hi Sarang, yes  
**\<kenshamir[m]>** Do you believe that all of the alternatives; omniring, ringct and lelantus would be a better alternative to the current ringCT even with cLSAG?  
**\<kenshamir[m]>** Are you waiting for a feature or an event before choosing a specific alternative?  
**\<kenshamir[m]>** better in terms of performance, space savings and anonymity set  
**\<sarang>** In terms of practical anonymity set, the sublinear schemes are an improvement at first glance  
**\<sarang>** but  
**\<sarang>** Lelantus requires a separate output pool and self-spends to avoid tracing  
**\<sarang>** Omniring does not support efficient batching  
**\<sarang>** RCT3 requires a separate output pool  
**\<sarang>** and in all cases, larger anonymity sets require a careful look at handling ring representation, which can become substantial  
**\<kenshamir[m]>** Hmm, so is it fair to say that in their infancy, they are not ready to take over the current ringCT?  
**\<sarang>** IMO not without a lot of careful thought on implementation details  
**\<sarang>** That being said, I'm looking at two particular things regarding that:  
**\<kenshamir[m]>** Do you think it would be better to move away from hiding users in a set of users, to hiding coins in a set of coins?  
**\<sarang>** One is determining if/how to efficiently split the rangeproof from Omniring for better verification  
**\<kenshamir[m]>** Similar to zcash  
**\<sarang>** Two is figuring out if it's possible to use the same key image format with RCT3  
**\<sarang>** Full anonymity would be great if we could do it efficiently  
**\<dEBRUYNE>** And without a trusted setup :P  
**\<kenshamir[m]>** > Two is figuring out if it's possible to use the same key image format with RCT3  
**\<kenshamir[m]>** This is very interesting  
**\<suraeNoether>** "Do you think it would be better to move away from hiding users in a set of users, to hiding coins in a set of coins?" \<-- what's the difference?  
**\<suraeNoether>** at a KYC exchange, the exchange knows your personal details and which coins are yours. same same as far as the most common threat model is concerned... unless i'm missing something  
**\<sarang>** Oh I totally missed that distinction in what kenshamir[m] said  
**\<sarang>** In all cases, users are used to derive coin data  
**\<sarang>** Anon sets are considered by coins, not by users  
**\<sarang>** Does that answer your question kenshamir[m] ?  
**\<kenshamir[m]>** Yep, I was re-reading it to make sure I understood  
**\<kenshamir[m]>** \<dEBRUYNE "And without a trusted setup :P"> yes this too :)  
**\<sarang>** This actually leads neatly into my ACTION ITEMS  
**\<sarang>** I'm working on including proper batch verification in the proof of concept code, and integrating into the test transaction flows  
**\<sarang>** Then I want to dive more deeply into the two things I mentioned to kenshamir[m]   
**\<sarang>** 1. splitting Omniring proofs for better batching  
**\<sarang>** 2. determining the feasibility/security of retaining key image structure in RCT3 to avoid an output pool split  
**\<sarang>** And finalizing DEF CON material, of course  
**\<sarang>** I'll be giving a talk and leading a workshop in the Monero village, as well as staffing an information table  
**\<sarang>** and also doing a panel discussion in the blockchain village  
**\<sarang>** suraeNoether: your action items?  
**\<suraeNoether>** uhm just working on sims  
**\<suraeNoether>** i want to finish the matching stuff soonish to start answering questions rigorously  
**\<suraeNoether>** and i want to catch up on your work on the Big Three Trustless Protocols, which is what i'm calling them in my head  
**\<sarang>** Yes, IMO the matching stuff is a priority in terms of getting results  
**\<sarang>** Moving back in the agenda slightly, does anyone else have either research to present or general questions to ask?  
**\<kenshamir[m]>** What was the matching stuff, you guys are referring to?  
**\<sarang>** Treating possible spend histories in the tx graph as a graph matching problem  
**\<sarang>** and analyzing the structure and complexity  
**\<sarang>** In an ideal tx graph, the number of valid matchings (under any data you might already have) should be very high, to provide useful anonymity  
**\<kenshamir[m]>** \<sarang "Treating possible spend historie"> ohh right, this is very cool research  
**\<sarang>** It's one possible metric to examine anonymity  
**\<sarang>** (but certainly not a complete one)  
**\<kenshamir[m]>** right, it would be interesting to see how much certainty you can produce from such a graph in terms of monero  
**\<sarang>** Initial estimates show that it's extremely low  
**\<sarang>** but that assumes no external knowledge  
**\<suraeNoether>** depends on the size, really.  
**\<kenshamir[m]>** I don't know much about it, however I am assuming that it can be used to show how certain one can be that two outputs are linked  
**\<suraeNoether>** i mean, a graph where everyone churns 100 times before spending... huge graph... obviously going to have a ton of false results  
**\<sarang>** Right, but if done poorly, you can develop heuristics on partial matchings  
**\<kenshamir[m]>** I wonder how external data influences the graph, and what type of external data  
**\<sarang>** That's the big question on this research  
**\<sarang>** Without that, it's purely academic  
**\<kenshamir[m]>** As in a real-world scenario, an adversary will have access to external data. I believe the strongest adversary would be an exchange  
**\<kenshamir[m]>** oh right  
**\<sarang>** Exchanges, governments, entities with broad access to network data  
**\<sarang>** It's a big part of why these sublinear schemes are so critical in research  
**\<sarang>** At some point, any useful graph data gets lost in the noise of large anon sets  
**\<sarang>** (this does not eliminate all types of analysis, of course)  
**\<kenshamir[m]>** So the strongest type of external data, would be to know who owns some percentage of outputs and who they are?  
**\<suraeNoether>** kenshamir[m]: that's part of it  
**\<kenshamir[m]>** \<sarang "At some point, any useful graph "> Yep right  
**\<suraeNoether>** kenshamir[m]: periodicity can be used to great effect, too  
**\<sarang>** True, timing can play a large role  
**\<sarang>** both in anon set selection and tx operations  
**\<kenshamir[m]>** \<suraeNoether "kenshamir: periodicity can be us"> Could you explain?  
**\<suraeNoether>** IP data from the network when you ctrl-v your txnid into a block explorer without tor immediately after the transaction is relayed  
**\<kenshamir[m]>** Is that "I see a payment being sent every monday at 7pm"  
**\<kenshamir[m]>**  \* Is that "I see a payment being sent every monday at 7pm"?  
**\<suraeNoether>** kenshamir[m]: okay well, imagine you are a churner with a superstitious streak and you like to churn every 88 minutes  
**\<suraeNoether>** that chain of churns will stick out like a sore thumb  
**\<sgp\_>** Joining now and caught up, hello everyone. I agree this matching paper is top priority right now  
**\<suraeNoether>** a smart churner selects the age they wait between churns from the wallet distribution. then all the outputs in the ring are drawn from the wallet distribution and no timing data is leaked at all  
**\<kenshamir[m]>** Right, that makes sense  
**\<suraeNoether>** but any sort of additional data like IP address or timing can be merged together into a big bayesian updating machine and you can develop pretty good (if probabilistic) behavior profiles of users. and this applies to zcash and monero  
**\<kenshamir[m]>** suraeNoether: do you mind going into some detail on how you are simulating?  
**\<sarang>** So right now it's a balance between determining how many times to churn (to diffuse the graph) and how not to do it badly  
**\<sarang>** To do this, we need better data (e.g. matching)  
**\<suraeNoether>** kenshamir[m]: sure, let's do it after the meeting though because it's a little involved  
**\<sarang>** OK, any other questions or work to present for this meeting?  
**\<sarang>** going once  
**\<sarang>** twice  
**\<sarang>** OK, we are adjourned! Thanks to everyone for joining us. Logs will be posted to GitHub shortly  
