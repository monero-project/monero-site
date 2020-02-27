---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-10-21
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / Sarang
---

# Logs  

**\<suraeNoether>** Greetings everyone!  
**\<suraeNoether>** My work this past week has been fruitful. Right now I'm running simulations. These are not data collection simulations yet, but if they pass testing,  then I'm making a final push my repo and then data collection will begin and I'll be getting \*literal answers\* later this afternoon.  
**\<suraeNoether>** this is the matching/churn project  
**\<sarang>** Nice  
**\<suraeNoether>** in addition to that, sarang asked yesterday: do we care more about space or time when it comes to replacing signature schemes. luckily, we can literally quantify when it is worth switching to a new scheme  
**\<suraeNoether>** Just to remind the audience, here is how that derivation goes  
**\<suraeNoether>** Let's say we have two possible ways of encoding a database and verifying its contents.. Case I: Size of file is O(n) and time to verify file is O(n).  Case II: Size of file is O(log(n)) and time to verify file is O(n).  
**\<suraeNoether>** When is it worth it to switch from Case I to Case II? In Case I, total download and verification time is a\*n/c + b\*n/v where a and b are constants, c is average download speed, and v is average verification speed (per bit)  
**\<suraeNoether>** In Case II, total download and verification time is A\*log(n)/C + B\*n/V where A, B, C, and V are other constants, usually different than in Case I (although we can assume c = C for simplicity although often V != v)  
**\<suraeNoether>** The total cost in time to download and verify implies that Case II is better than Case I if and only if (a/c) + (b/v) > B/V + (A/c)\*(log(n)/n). To give you guys a rough idea, when n > 10^2, log(n)/n is smaller than 0.025, so this term drops pretty quickly  
**\<suraeNoether>** Since log(n)/n tends toward zero, if n is remotely large (for a blockchain we are talking about large powers of 10... and n increases as time goes on), we require a/c + b/v > B/V for this ever to be at least asymptotically a good idea to switch, and we realize that asymptotic bound pretty quickly  
**\<suraeNoether>** we can run timing tests on some schemes for to estimate ballpark values of a, b, c, v, B, and V (I suspect b = B but a != A...)  
**\<suraeNoether>** (these derivations are why we haven't \*yet\* switched to a sublinear scheme, by the way!)  
**\<sarang>** Well, that and not having a clear winner in terms of overall efficiency+soundness  
**\<sarang>** Different constructions don't necessarily scale the same way with transaction input/output structure  
**\<sarang>** The logarithmic size scaling is for the size of the specified anonymity set, overall  
**\<sarang>** How they handle multiple inputs/outputs makes a difference  
**\<suraeNoether>** indeed, all the above is very generalized and specific formulations for specific schemes are required... besides, \*none\* of the above assumes batching  
**\<suraeNoether>** although batching can be approximated by tweaking the parameters b, v, B, and V, it's still just a ballpark back of napkin thing  
**\<sarang>** This past week I've worked on a few things  
**\<sarang>** First, the IACR/2019/944 optimized IPA verifier was added to kenshamir[m]'s Rust implementation and benchmarked, showing no improvement over the Bulletproofs IPA  
**\<sarang>** We sent a note to the authors to share our results and get some clarification on the results from their paper  
**\<sarang>** But it definitively answers the question of how useful it would be in practice to use the updated verifier (answer: it wouldn't be)  
**\<mikerah>** Do you have a link to @kenshamir's rust crate?  
**\<sarang>** https://github.com/kenshamir/qesa  
**\<sarang>** I also have Triptych balance proving working  
**\<sarang>** and have completed a writeup of the algorithms  
**\<sarang>** Now I'm putting correctness proofs in, which is tedious due to the algebra  
**\<sarang>** There were some other modifications for efficiency too, which will need to be examined for soundness  
**\<sarang>** Also of note is that last week, a side-channel issue with subaddresses was reported and examined  
**\<sarang>** We discussed a fix that would essentially add a Schnorr representation proof to outputs  
**\<sarang>** I'm told there is a blog post and corresponding Breaking Monero episode ready to go that describe this  
**\<sarang>** This week, I plan to continue work on Triptych proofs: correctness, soundness, zero knowledge  
**\<sarang>** Back to you suraeNoether   
**\<suraeNoether>** This week, my action items include posting my funding request for the next quarter, assisting sarang with the soundness proof of triptych, and to actually answer some questions about churn with some rigor  
**\<sarang>** Anyone have questions, or other interesting research to share?  
**\<suraeNoether>** the work i've put into the infrastructure of this project has paid off, because the actual script running the tests is around 30 lines. the rest of the code is writing output to file etc  
**\<suraeNoether>** (the library i wrote is 700 lines with 1200 lines of tests iirc but who counts lines anyway)  
**\<sarang>** I'll be interested to see what level of support there is (or is not) for the Schnorr proof modification to avoid the subaddress side-channel attack  
**\<mikerah>** I want to pass some ideas by you all around minimal smart contracts on monero.  
**\<sarang>** ok  
**\<mikerah>** The idea is to use FHE with a DSL to then store in the extra tx\_data field of monero transactions  
**\<sarang>** DSL?  
**\<mikerah>** The main problem with this is that there isn't any actual enforcement of the smart contract logic  
**\<mikerah>** DSL = Domain Specific Language  
**\<sarang>** It's tricky because ring signatures are, by definition, signer-ambiguous  
**\<sarang>** Meaning more complex spend conditions typically don't play nicely with that  
**\<mikerah>** yeah, agreed. Has anyone looked into bringing the DLSAG construct into production?  
**\<suraeNoether>** DLSAG currently has some key image formatting problems :\\  
**\<sarang>** Not that I know of... its scaling is still linear with the ring size, and it has a tracing problem that hasn't been solved  
**\<suraeNoether>** also ^  
**\<sarang>** Right, any other questions or comments before we adjourn?  
**\<mikerah>** https://eprint.iacr.org/2019/1229.pdf  
**\<mikerah>** Has anyone had time to skim that?  
**\<mikerah>** It's the new supersonic scheme by BBS  
**\<sarang>** Ah yes, I gave it the most cursory of glances  
**\<suraeNoether>** it uses groups of unknown order, which is a fun but weird concept that is also used in VDFs  
**\<sarang>** Even so, with certain instantiations, they estimated 7 kB or so for a 1 million-gate circuit (of some structure that I don't recall)  
**\<mikerah>** My issue with constructs using groups of unknown order is what happens if a smart kid finds the order of the group?  
**\<sarang>** The hardness assumption has to do with element order IIRC  
**\<sarang>** among other hardness assumptions they require  
**\<sarang>** Anyway, it's interesting and applicable to different proving systems  
**\<sarang>** OK, I'm gonna get back to work typesetting some correctness proofs  
**\<sarang>** Thanks to everyone for attending  
