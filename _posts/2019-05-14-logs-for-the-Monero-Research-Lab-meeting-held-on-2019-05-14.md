---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-05-14
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** Agenda: https://github.com/monero-project/meta/issues/344  
**\<sarang>** Logs of this meeting will be posted there  
**\<sarang>** GREETINGS  
**\<suraeNoether>** howdy!  
**\<suraeNoether>** how is everyone?  
**\<suraeNoether>** who had fun at MCC? \*this guy\*  
**\<suraeNoether>** okay  
**\<suraeNoether>** well let's beign  
**\<suraeNoether>** begin\*  
**\<suraeNoether>** for the roundtable portion  
**\<suraeNoether>** let's start with general questions from the audience, and let's go around and see if anyone has anything to present  
**\<suraeNoether>** other than sarang and i anyway  
**\<sarang>** Heh, I suppose we can move to presentations  
**\<suraeNoether>** yup  
**\<sarang>** go ahead suraeNoether   
**\<suraeNoether>** go ahead sir  
**\<suraeNoether>** ahah  
**\<sarang>** jinx  
**\<suraeNoether>** okay  
**\<suraeNoether>** well, CLSAG paper is undergoing the final round the corner. sarang and i are working on the final details today with randomrun, and i hope we can make a public version of the paper available in the next several days (unless some flaw is found)  
**\<sarang>** Yeah, just need that timing data and a definite answer on the hash coeffs in the proof  
**\<suraeNoether>** DLSAG paper is undergoing further review, but I believe we are putting up an IACR version of that in the coming days also  
**\<sarang>** Yep, waiting on all authors to sign off  
**\<suraeNoether>** MRL11 is still in progress, but now that clsag and dlsag are off my plate, it's being cranked up in terms of priority  
**\<suraeNoether>** i anticipate rapid progress on that as well  
**\<suraeNoether>** May 20-24, sarang and endogenic and I are doing the Monero workshop, and I believe we may be having Gao from Clemson come give us talks on starks and fully homomorphic encryption in the RLWE setting  
**\<suraeNoether>** (sarang, we should do some studying before then together on that)  
**\<sarang>** of course  
**\<suraeNoether>** I gave a talk, sat on a panel, and gave an interview at the magical crypto conference  
**\<suraeNoether>** all of those are up on youtube; the talk was about four different branches of research here at MRL  
**\<suraeNoether>** other than that, i guess i'd prefer answering questions rather than talking myself into a rabbit hole  
**\<suraeNoether>** nioc and i have had some conversations about how long-winded i can be so i'm going to zip it unless folks want more details :D  
**\<sarang>** Any questions for suraeNoether on this work?  
**\<suraeNoether>** so, for the audience members who are new  
**\<suraeNoether>** DLSAG = dual-recipient output signatures = work toward the claim-or-refund primitive that can underly smart contracts and lightning network. CLSAG = compressed signatures making the rate of growth on the monterion blockchain hopefully 25% smaller and faster to verify  
**\<suraeNoether>** MRL11 = traceability resistance analysis  
**\<suraeNoether>** so, work is important, hard, and slow going, but doing it right is very important to us  
**\<suraeNoether>** anyway, sarang, how about yourself?  
**\<sarang>** Plenty to mention  
**\<sarang>** I had overhauled some definitions and such in the CLSAG paper, which suraeNoether has completed more edits on  
**\<sarang>** In particular, some stuff on multi-asset transactions that could be enabled by this  
**\<sarang>** I'll get timing data and then we can release for review  
**\<moneromooo>** "multi-asset" being akin to coloured coins ?  
**\<sarang>** ya  
**\<sarang>** Not saying I'm recommending such a thing for us, but it's an easy application  
**\<sarang>** I've been working on some draft protocols for how a Monero coinjoin could work  
**\<sarang>** Right now the initial scheme requires a certain amount of trust in a dealer, but is very efficient  
**\<sarang>** This is obviously not ideal  
**\<sarang>** MoJoin, I call it  
**\<sarang>** FWIW it doesn't leak spend data to the dealer, only the partition of inputs-and-outputs to each player in the join  
**\<sarang>** sgp\_ and I did two Breaking Monero episodes, one on input/output counts and one on block explorers  
**\<sarang>** that's the main stuff for me  
**\<suraeNoether>** oh, guys: we are deciding to extend early-bird pricing for a few more days  
**\<suraeNoether>** i'll be advertising it  
**\<suraeNoether>** but don't forget to get your ticket at monerokon.com before prices change, if you are still coming  
**\<suraeNoether>** students are especially encouraged to attend; there will likely be partial rebates at the door for student tickets  
**\<sarang>** Any particular questions for me?  
**\<suraeNoether>** how many rounds of interaction in mojoin?  
**\<moneromooo>** The "Gao [...] fully homomorphic" thing makes me wonder if that could not be looked at in conjunction with dealerless coinjoin :)  
**\<sarang>** 3  
**\<sarang>** This is minimal because of the BP MPC  
**\<suraeNoether>** yeah, that's cool. moneromooo i think that's probably a safe avenue of stuff for us to talk about  
**\<sarang>** Er, no... 4 rounds now, sorry  
**\<sarang>** I had to make a change  
**\<suraeNoether>** oh  
**\<sarang>** The extra round is to avoid commitment sums being used to brute-force the partition by an observer  
**\<sarang>** Making the resulting transaction identical to one not MoJoined (although the output count is something of a giveaway)  
**\<moneromooo>** BTW, something I've not done in the branch is merging outputs to the same destination (originally the intent was to make Alice + Bob atomically paying Carol).  
**\<moneromooo>** Would that be possible with the dealer based coinjoin ?  
**\<sarang>** So A+B generate a single joint output?  
**\<moneromooo>** yes.  
**\<sarang>** I don't think it's possible to do the BP MPC without leaking the full mask  
**\<sarang>** unless that's acceptable  
**\<moneromooo>** That's fine in that case since Alice and Bob to advertise what they're paying, since each of them verifies the other does pay.  
**\<sarang>** Would this assume another side channel between them that's outside of the join?  
**\<sarang>** So it'd be a plug-and-play operation into a join?  
**\<moneromooo>** I dunno. If you need one I guess.  
**\<sarang>** Hmm  
**\<sarang>** It's probably possible, under the right trust model between A+B  
**\<sarang>** Of course, "probably possible" is quite the weaselworld  
**\<sgp\_>** I'm here and caught up, sorry for being late  
**\<sarang>** hi  
**\<suraeNoether>** nbd  
**\<sarang>** talking coinjoin  
**\<fort3hlulz>** Whats the advantage for Monero in using a CoinJoin implementation? if its better to chat later about it Ill shutup :)  
**\<suraeNoether>** no, that's a great question  
**\<moneromooo>** It adds another layer of privacy. If Eve looks at one tx, she can't assume anymore than all the inputs are from hte same owner.  
**\<sarang>** Yeah, it tries to break the common-ownership assumption  
**\<fort3hlulz>** Ah, so its a mitigation of poisoning/EAE attacks specifically? How does it affect Tx size/blockchain bloat?  
**\<sarang>** My thought about the dealer model (if it's a necessity, which is yet TBD) is that under a malicious dealer assumption, you basically revert back to the current model  
**\<moneromooo>** If we're lucky, smaller txes since one single BP :)  
**\<sarang>** Another quick note that hyc and I had a call with Trail of Bits, an auditor who submitted a SoW  
**\<sarang>** they'll be updating their numbers, and noted that another project may be interested in helping fund RandomX  
**\<sarang>** We'll have a call with those folks tomorrow  
**\<hyc>** Hi, just finished my other call  
**\<sarang>** yo  
**\<hyc>** yeah, some good stuff from Trail of Bits  
**\<fort3hlulz>** Awesome, I'm excited to learn more about CoinJoin on Monero as well as CLSAG, thanks guys! Ill get out of your hair now :)  
**\<sarang>** Thanks for the question fort3hlulz   
**\<sarang>** The security of coinjoins in Monero is still very much in the air  
**\<hyc>** also for the benchmark freaks (like me) Huawei has offered to give me access to some servers with their newest chip, for benchmarking purposes  
**\<hyc>** will be getting efficiency numbers for CN/R and RandomX on ARMv8  
**\<suraeNoether>** ooooh  
**\<suraeNoether>** thats... fantastic...  
**\<sarang>** nice  
**\<hyc>** thes guys https://e.huawei.com/us/products/cloud-computing-dc/servers/arm-based  
**\<sarang>** We'll post the ToB updated SoW when they provide it  
**\<suraeNoether>** and MRL marches forward into tomorrow's yesterday of the future^tm  
**\<hyc>** general availability is end of June, early access is nice  
**\<hyc>** that's all for me  
**\<sarang>** Does anyone else have research to present?  
**\<sarang>** Or general questions at all?  
**\<suraeNoether>** whats the coolest plane you've flown?  
**\<luigi1113>** what kind of pie do you like?  
**\<suraeNoether>** berry berry  
**\<sarang>** suraeNoether: commercially, or piloting myself?  
**\<suraeNoether>** with greek yogurt  
**\<suraeNoether>** ^ both  
**\<sarang>** Commercially, Nepal  
**\<sarang>** Myself, in between buildings in downtown San Francisco and the Golden Gate  
**\<sarang>** which apparently is legal  
**\<suraeNoether>** not place, plane, but i'll accept your answer happily  
**\<suraeNoether>** that's awesome  
**\<sarang>** Oh heh, didn't see that  
**\<sarang>** Commercially, B787  
**\<sarang>** Myself, probably a DA40  
**\<sarang>** it's got the aerodynamics of a glider  
**\<sarang>** WEll  
**\<sarang>** Let's move to action items  
**\<sarang>** suraeNoether: ?  
**\<suraeNoether>** final dlsag review today  
**\<suraeNoether>** mrl11 rest of the week  
**\<suraeNoether>** uhmmm... and if anything else is handed back to me like clsag  
**\<sarang>** word  
**\<suraeNoether>** adjective  
**\<sarang>** I'll get those CLSAG timings into the paper and finalize the proof question we had  
**\<sarang>** Carry on with MoJoin  
**\<sarang>** etc.  
**\<sarang>** Any final words before we formally adjourn?  
**\<dEBRUYNE>** Perhaps a blog post from CLSAG could be written (similar to the one for Bulletproofs)  
**\<suraeNoether>** just excited for lunch  
**\<sarang>** "Signatures. They are smaller and faster."  
**\<dEBRUYNE>** I don't think many community members would understand CLSAG from the technical paper alone :P  
**\<sarang>** But yes, we could do that once we're satisfied with security  
**\<sgp\_>** People need these blog posts or else no one will know  
**\<suraeNoether>** dEBRUYNE: that would be good, yes.  
**\<sarang>** All righty, thanks to everyone for attending  
**\<sarang>** We are now formally adjourned; logs will appear shortly  
