---
layout: post
title: Logs for the MRL Meeting Held on 2019-10-28
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** GREETINGS  
**\<sgp\_\>** hello!  
**\<sarang\>** I'll give a few moments for others who wish to join  
**\<sarang\>** OK then  
**\<sarang\>** Since suraeNoether is unavailable for this meeting due to an appointment, I'll share my recent work  
**\<sarang\>** I've been working on algorithms and proofs for Triptych, a new transaction protocol  
**\<sarang\>** The goal is to use a single proof to represent multiple inputs at the same time, including balance proving and linking tags  
**\<sarang\>** Everything works great with completeness, zero knowledge, and soundness except for one proof component (the linking tags)  
**\<sarang\>** There's a less efficient version that operates on single inputs, but can be combined for general transactions  
**\<sarang\>** For this single-input version, modified proofs of security seem to work just fine  
**\<sarang\>** For this reason, I'll finalize work on the single-input proving system while considering alternate approaches to finalizing the soundness proof for the multi-input version  
**\<sarang\>** Separately from this, I have a small pull request (PR 6049) for a minor speedup and simplification to the Bulletproofs prover  
**\<sarang\>** Also separately from this, Derek at OSTIF informs me that an audit group is willing to complete the CLSAG review  
**\<sarang\>** JP Aumasson has offered to complete a review of the math and proofs for $7200 (USD), and his new company Teserakt has offered to then complete a code review for as little as $4800  
**\<sarang\>** He says that including dependencies would increase the time (and therefore the cost), possibly significantly  
**\<sarang\>** But the timeline could be before the end of this year, if there are no changes required to the algorithms after the math review  
**\<moneromooo\>** Dependencies, like the src/crypto code ?  
**\<sarang\>** Presumably. I do not have specific details on what his scope is (but will get this information)  
**\<sarang\>** One approach might be to review all the changes \_from MLSAG_, to show that CLSAG is no less secure as a whole than MLSAG  
**\<sarang\>** These changes are fairly minor in the grand scope of the codebase  
**\<sarang\>** I see there being efficiency advantages to having JP (and colleagues) doing both types of review, but this also reduces the total number of eyes on the combined math+code  
**\<sarang\>** That being said, JP knows his stuff  
**\<sarang\>** (he was formerly with Kudelski)  
**\<moneromooo\>** Adding eyes by having Alice do the math and Bob do the code does not provide anything of value over Alice doing both IMHO.  
**\<moneromooo\>** Assuming Alice and Bob have similar eyes and brains and proficiency in the relevant fields etc etc etc.  
**\<sarang\>** So that's my report  
**\<moneromooo\>** Is any of the new protocols being considered still compatible with multisig ?  
**\<sarang\>** Aside from CLSAG, you mean?  
**\<sarang\>** None of them specifically consider it in either algorithms or security model  
**\<sarang\>** but it's on my list for analysis on RCT3 and (eventually) Triptych, since there are some modifications to RCT3 that I wish to consider (more on this later)  
**\<moneromooo\>** I mean tryptich,  rct3 and... and.......... the other the name of which escapes me.  
**\<moneromooo\>** lelantus  
**\<sarang\>** Omniring?  
**\<moneromooo\>** Also :)  
**\<sarang\>** Omniring and Lelantus both suffer from some drawbacks at present... Omniring does not support batching, and Lelantus still has a tracing issue unless you remove stealth addressing  
**\<sarang\>** Looking into batch-compatible Omniring-style constructions with other proving systems is a topic for more investigation down the road that is nontrivial  
**\<sarang\>** Is there other research that anyone wishes to present, or other questions?  
**\<moneromooo\>** Also, rather selfishly, would any of them avoid the public-a issue we had for multi user txes ?  
**\<moneromooo\>** (if known offhand)  
**\<sarang\>** public-a?  
**\<moneromooo\>** The problem where users would have to make their a values known to other signers.  
**\<sarang\>** Ah, that's very unclear to me  
**\<sarang\>** FWIW: RCT3, Omniring, and Triptych are agnostic to how output keys are generated (though their security models address particular constructions)  
**\<sarang\>** So my ACTION ITEMS for this week are a bit in flux, mainly because I'll be at World Crypto Conference giving a talk on transaction protocols  
**\<sarang\>** But aside from that, I want to finish the proof modifications (completeness, SHVZK, special soundness) for the single-input version of Triptych (which can be used in a larger protocol to support multi-input transactions), as well as a more efficient linking tag construction that matches what RCT3 and Omniring propose  
**\<sarang\>** I also want to backport some of the ideas from the latest RCT3 update to their older version to compare efficiency  
**\<sarang\>** It's unclear if this could easily be proven secure, or what the efficiency gains would be  
**\<sarang\>** Their update did essentially two things: fix an exploitable flaw due to a particular discrete log relation, and allow for aggregated proofs of multiple inputs  
**\<sarang\>** Unfortunately, the latter means potentially large padding requirements that would also incur computational cost to the verifier  
**\<sarang\>** I want to see how easily the exploit fix could be included in the non-aggregated version... which would avoid this potential verification bloat at the cost of proof size  
**\<sarang\>** I probably won't have time to do so this week, but it's on my list  
**\<sarang\>** Anything else of note to cover before we formally adjourn?  
**\<sarang\>** All right! Thanks to everyone for attending  
**\<sarang\>** Logs will be posted shortly to the GitHub agenda issue  
