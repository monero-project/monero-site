---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-09-02
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** Agenda: https://github.com/monero-project/meta/issues/388  
**\<sarang>** (logs posted there afterward)  
**\<suraeNoether>** good morning everyone  
**\<sarang>** GREETINGS  
**\<rottensox>** Hola.  
**\<sarang>** Happy Labor Day to those celebrating it  
**\<sarang>** Happy Monday to all others  
**\<sarang>** Let's do our ROUNDTABLE  
**\<sarang>** suraeNoether: care to go first?  
**\<suraeNoether>** sure. This past week i've been coding my economarkov chain simulating a fake Monero economy to apply matching to. this is slow-going, but steady progress. in addition to that, I started reading 3 separate papers for a new-ish idea...  
**\<suraeNoether>** https://eprint.iacr.org/2016/583.pdf , https://www.microsoft.com/en-us/research/wp-content/uploads/2008/02/tcc2008.pdf , and https://link.springer.com/chapter/10.1007/3-540-36413-7\_20  
**\<suraeNoether>** the idea is new-ish to me but not the e-cash community, which is to demonstrate not a valid signature on a public message m, but \*knowledge of\* a valid signature on a public message m, without revealing the signature information like signer  
**\<suraeNoether>** that 583 paper presents a trustless way of doing so with hash functions that can be described with a boolean circuit, and presents zk proofs of knowledge of RSA, DSA, and ECDSA signatures  
**\<suraeNoether>** the idea is to replace ring signatures with something that is trustless and signer ambiguous  
**\<sarang>** Interesting  
**\<suraeNoether>** that way, instead of saying "Either A, B, or C signed this m with key image J," the statement being proven is "I have seen a valid signature on m with key image J"  
**\<sarang>** Requires efficient trustless accumulator?  
**\<suraeNoether>** coupling this together with a zk proof of membership in a strong dynamic accumulator allows for a "signature" scheme that does away with the explicit anonymity sets of ring signatures  
**\<suraeNoether>** i think i'm onto a method for doing this with key images that are compatible with our current approaches  
**\<sarang>** Nice!  
**\<suraeNoether>** but I need, probably, 2-3 additional pairs of eyes helping me out, so I'll be writing some stuff up and possibly starting a github issue for discussion on the matter  
**\<sarang>** roger  
**\<suraeNoether>** other than that, i've been offline with family for a reunion + a 100-years-olds birthday party :D  
**\<sarang>** My monthly report details my recent activities, and is available now: https://repo.getmonero.org/monero-project/ccs-proposals/merge\_requests/77#note\_7105  
**\<sarang>** Matching simulation review, updating papers, etc.  
**\<sarang>** Nothing earth-shattering over the past few days  
**\<sarang>** Very neat to hear about kenshamir[m]'s work on IACR/944  
**\<suraeNoether>** yes, i would like to hear more about that  
**\<sarang>** Is kenshamir[m] still here?  
**\<kenshamir[m]>** Hi  
**\<kenshamir[m]>** I’m here  
**\<sarang>** Anything specific you'd be interested to share about your recent work on proving systems?  
**\<sarang>** (no obligation to do so)  
**\<kenshamir[m]>** I think the most notable contribution from 944 that can be applied to bulletproofs straight away is the improved inner product argument  
**\<kenshamir[m]>** There are benchmarks which show that it gives significant improvements in verifier and prover efficiency  
**\<mikerah>** Is there no meeting today?  
**\<sarang>** In the general circuit case, correct?  
**\<sarang>** (the meeting is happening now)  
**\<sarang>** Not the optimized range proof application AFAICT  
**\<kenshamir[m]>** Yeah for 944s proving system it was the general case  
**\<kenshamir[m]>** I think if that if we tailored the proof to be specific for 944s proving system, we may be able to get a more efficient rangeproof. This is only a conjecture though and I’m unsure of how to do it at the moment  
**\<sarang>** The general case remains extremely interesting  
**\<sarang>** since the range proofs are quite efficient  
**\<kenshamir[m]>** For the general case asymptotically it is the same as the tailored bulletproofs rangeproofs from what I’ve seen  
**\<kenshamir[m]>** Yeah I agree. It will be really interesting to see what optimisations can be made with this language  
**\<kenshamir[m]>** \*Quadratic Equation Sat  
**\<kenshamir[m]>** That’s all I’ve discovered so far from 944  
**\<sarang>** Thanks kenshamir[m]   
**\<sarang>** Does anyone else have interesting work to share?  
**\<sarang>** Or, for that matter, general questions  
**\<sarang>** Righto!  
**\<sarang>** We can also move to ACTION ITEMS, if there's nothing else urgent to discuss  
**\<suraeNoether>** my action items are short and simple. economarkov chain work, reading more on proofs of knowledge of valid signatures (which i'm considering calling redacted signatures), and my end of month work report.  
**\<sarang>** I will be doing some code review, continued work on proving systems, and ongoing work with suraeNoether on his recent updates to graph matching as needed  
**\<sarang>** Well, a short meeting today, but that's ok  
**\<sarang>** Anything final before we formally adjourn?  
**\<sarang>** Adjourned! Thanks to everyone for participating  
