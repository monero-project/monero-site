---
layout: post
title: Logs for the MRL Meeting Held on 2020-01-29
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** Let's go ahead and get started with GREETINGs  
**\<sarang\>** Hello  
**\<ArticMine\>** Hi  
**\<RingSize937\>** v Greetings  
**\<Isthmus\>** Heyo  
**\<koe\>** greetings  
**\<Insight\>** hello  
**\<atoc\>** Hi  
**\<sarang\>** Let's continue with ROUNDTABLE, where anyone is welcome to share research topics of general interest (and discuss any questions arising from them)  
**\<sarang\>** Since there was so much to discuss last week, I'll try to keep the discussion focused to the extent possible, for clarity  
**\<sarang\>** I have a few brief things to mention  
**\<sgp\_\>** hello  
**\<sarang\>** First, I wanted to better understand the effects of including hidden timelocks in CLSAG signatures, and worked up a version of 3-CLSAG in C++ for performance tests  
**\<sarang\>** Including timelocks would negate the verification time advantages of an MLSAG-CLSAG transition  
**\<sarang\>** but would still give size benefits over MLSAG  
**\<sarang\>** A similar approach would work in Triptych, so I extended the Triptych test code to 3-Triptych for this purpose  
**\<sarang\>** And, just for completeness, updated the Triptych preprint on IACR to a general d-LRS construction  
**\<sarang\>** Here is the 3-CLSAG test code, for those interested: https://github.com/SarangNoether/monero/commit/db33d18bb889043c4bdea6d8582ffe2f6c581d28  
**\<sarang\>** And the 3-Triptych concept code: https://github.com/SarangNoether/skunkworks/commit/f7581a385d72baa3dbb60c83e8d856a9335bec1f  
**\<sarang\>** And the updated Triptych preprint: https://eprint.iacr.org/2020/018  
**\<sarang\>** I also found a very minor change to make in the existing CLSAG test code  
**\<sarang\>** Finally, suraeNoether and I have been doing more security model stuff  
**\<sarang\>** Any questions on these items from anyone?  
**\<koe\>** not directly for sarang, but at Isthmus regarding timelock; what is the prevalence of non-zero timelock for non-coinbase tx?  
**\<Isthmus\>** Absurdly prevelant  
**\<koe\>** whether or not to include encrypted time lock depends in part on how much use it actually gets  
**\<koe\>** used  
**\<sarang\>** Yeah, and I'm not formally advocating for it at this point; only curious about the implications  
**\<Isthmus\>** I think our options are to remove the silly timelock field (It's just an arbitrary integer memo field currently) or encrypt it.  
**\<koe\>** I like that it's a straightforward application of concepts already used in Monero  
**\<sarang\>** Yeah, conceptually it's really neat  
**\<Isthmus\>** Will we be the first privacy coin to roll it out?  
**\<Isthmus\>** I expect that it will become industry standard  
**\<sarang\>** Does Zcash offer such functionality?  
**\<sarang\>** (I have not checked)  
**\<sgp\_\>** no clue  
**\<Isthmus\>** I don't think so, but not 100% confident  
**\<ArticMine\>** ZCash has serious scaling issues  
**\<sarang\>** Anyway, whether or not Zcash does it should not be the determining factor IMO :)  
**\<sarang\>** Merely curious  
**\<Isthmus\>** Oh wait. Zcash inherited nLockTime from Bitcoin  
**\<Isthmus\>**   
**\<Isthmus\>** I'mma fish out their information leaks too  
**\<Isthmus\>** And OP\_CLTV  
**\<sarang\>** If implemented, it would make the most sense to bundle the timelock range proofs with the existing Bulletproofs  
**\<sarang\>** So this means the sum of timelock-enabled inputs (all inputs, if mandatory) and outputs is restricted  
**\<koe\>** for Triptych, what are the steps between now and considering it for replacing RingCT?  
**\<sarang\>** Formal review, a determination about its effects on multisig (particularly on compute-limited hardware), a decision on Triptych vs something like RCT3  
**\<sarang\>** I have not yet examined how easy it would be to include timelocks in RCT3 with their security model  
**\<ArticMine\>** ^ ... and estimated recommended tx size for Triptych  
**\<sarang\>** Also note that, as I think I mentioned last week, it would not make sense to deploy hidden timelocks with MLSAG due to the poor scaling  
**\<sarang\>** (though technically possible)  
**\<koe\>** agreed  
**\<sarang\>** Anyway, I want to make sure others have time to speak as well  
**\<sarang\>** Who else wishes to share research topics?  
**\<Isthmus\>** Zebra network stack looks interesting, potential applications in Monero?  
**\<sarang\>** I saw that yesterday!  
**\<sarang\>** Blag post about it: https://www.zfnd.org/blog/a-new-network-stack-for-zcash/  
**\<sgp\_\>** cool, will check out  
**\<sarang\>** And a corresponding forum post (not much activity there yet): https://forum.zcashcommunity.com/t/a-new-network-stack-for-zcash/35870  
**\<sarang\>** It's from Zcash Foundation research  
**\<Isthmus\>** Monero maintains a single state across all the peers, right?  
**\<sarang\>** That's a good question, and I don't know the answer  
**\<sgp\_\>** ping vtnerd  
**\<sarang\>** I had thought so, but not confident in that  
**\<hyc\>** not even sure what that means. single state? what is included in that state?  
**\<hyc\>** there is an aggregate state for bandwidth limiting  
**\<hyc\>** but sync info is per-connection  
**\<Isthmus\>** Oh so maybe we already take the Zebra approach?  
**\<Isthmus\>** It seems pretty elegant.  
**\<sarang\>** Isthmus: did you have other topics you wanted to bring up as well?  
**\<hyc\>** "Unlike zcashd, which maintains a fixed number of outbound connections, we attempt to connect to as many peers as possible, subject to resource limits "  
**\<hyc\>** this approach will be troublesome for them, since they use levelDB/rocksDB for storage  
**\<hyc\>** lvelDB/rocksDB requires thousands of file descriptors for its storage.  
**\<hyc\>** that competes with the demand for socket descriptors  
**\<sarang\>** Interesting... worth bringing up as a question on the forum?  
**\<sarang\>** One of the developers (Henry) opened the thread  
**\<hyc\>** not from me. I have no interest in helping zcash project  
**\<sarang\>** ok  
**\<Isthmus\>** I'm trying to make the unlock time plot, but my laptop is struggling with the 1.5 GB data set  
**\<hyc\>** they should have already known by now that their DB choice is inappropriate for a network service that uses lots of connections, but it seems they haven't discovered that yet  
**\<sarang\>** Isthmus: no rush!  
**\<sarang\>** In the meantime, koe: did you wish to address anything in particular?  
**\<koe\>** yes muahaha  
**\<koe\>** not technically research, my roadmap has been cleaned up a bit; in particular I want to get opinions on item koe\_11, which would enable view-only wallets to know when owned outputs have been spent; also item koe\_9 which would allow all wallet implementations to more or less deprecate pre-RingCT transaction versions  
**\<koe\>** https://www.pdf-archive.com/2020/01/29/moneroroadmapkoe012920/moneroroadmapkoe012920.pdf  
**\<hyc\>** koe\_11 sounds like a high priority  
**\<koe\>** also, sarang helped me work up a decentralized CoinJoin-esque protocol (temporarily named JoinMo), which is available as chapter 9 of current ZtM2 draft  
**\<koe\>** https://www.pdf-archive.com/2020/01/29/zerotomoneromaster-v1-0-21/zerotomoneromaster-v1-0-21.pdf  
**\<koe\>** chapter 10\*  
**\<sarang\>** I like the JoinMo approach of using per-participant shared secrets to obscure the input-output mapping  
**\<koe\>** also, rbrunner at one time investigated OpenBazaar integration, and ran into some roadblocks, so my 'research' has been engineering solutions to those problems, which should be available next week  
**\<sarang\>** I'm giving extra scrutiny to the specifics around SAG/LSAG since the keys are per-output only  
**\<sarang\>** I was thinking about the implications of using a separate keyset for inputs as well  
**\<sarang\>** (keys = per-join participant keys, I mean)  
**\<koe\>** however, OpenBazaar integration would likely entail a large update to the code-base, to optimize communication rounds  
**\<koe\>** moreover, multisig in general should be updated to comply with suraeNoether's paper on the subject  
**\<sarang\>** Yes  
**\<Isthmus\>** Somewhat related to item 10, I'm still concerned about any blockchain observer being able to identify which transactions do not include any outputs to subaddresses.  
**\<Isthmus\>** n3ptune and I will make a plot of subaddress adoption over time : -)  
**\<Isthmus\>** But ideally that should not be possible.3  
**\<sarang\>** Also yes :)  
**\<sarang\>** It's been suggested before to standardize on some form of per-output keys for this purpose  
**\<sarang\>** but it never gained traction  
**\<sgp\_\>** koe: nice list! koe\_9 may be controversial since spending pre-rct would stand out more, no?  
**\<atoc\>** Yeah looks like a nice list koe  
**\<koe\>** it already stands out like a sore thumb  
**\<koe\>** but that sort of problem will exist for RingCT as well, since spending ancient outputs is always somewhat unusual  
**\<koe\>** and my suggestion is to start using pre-ringct outputs as decoys as well  
**\<hyc\>** If we told everyone to sweep them to themselves, would that also be too obvious? you could assume that every txn with pre-RCT inputs is going back to its sender  
**\<koe\>** so gamma select over entire site of outputs  
**\<koe\>** set  
**\<sgp\_\>** koe: do we currently only select rct randomly as decoys?  
**\<koe\>** yes, and coinbase (not sure if pre-ringct coinbase are included)  
**\<koe\>** coinbase are included as decoy in normal tx, which is where this idea comes from  
**\<sgp\_\>** then this actually makes spending pre-rct slightly less suspicious, no?  
**\<sarang\>** And the handling of coinbase outputs is by no means solved  
**\<Isthmus\>** This is 80% a joke: We implement Koe\_9 and sgp\_coinbase\_only rings, \*but\* require each and every one to include N coinbases and M pre-ringCT transactions, for fixed consensus parameters N and M  
**\<sarang\>** sgp\_: the distribution tail falls fast  
**\<sgp\_\>** sarang: indeed, but it's near-zero better, not near-zero worse I think  
**\<sarang\>** Yes, but does provide slightly more information (amount)  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/R26YQwiJ/image.png  
**\<Isthmus\>** ^ which is hilarious, because all of these would hypothetically unlock at HEIGHT 2 and HEIGHT 12 back in 2014, IIRC what mooo said  
**\<sarang\>** Due to the non-standard handling of that field, you mean?  
**\<sarang\>** (which should be standardized anyway)  
**\<sgp\_\>** Isthmus: hmm, I would need to see a lot more info on how many people actually spend pre-rct (suspected) compared to coinbase. My intuition leans no  
**\<ArticMine\>** So include a single pre ring CT fake if the real output is not pre ring ct  
**\<Isthmus\>** @sarang:  Yes, currently, 3 things are being put in the unlock field:  
**\<Isthmus\>** https://www.irccloud.com/pastebin/0Y87gTTq/  
**\<Isthmus\>** Argh sorry  
**\<Isthmus\>** Small integers like "12", presumably to be interpreted as height differences, i.e. "unlock in 12 blocks"  
**\<Isthmus\>** Large integers like "1980000", presumably to be interpreted as block heights  
**\<Isthmus\>** Very large integers like "1578561720", presumably to be interpreted as unix timestamps  
**\<sarang\>** yup  
**\<atoc\>** I am working on a first version implementation of xmr-btc atomic swap in Rust  
**\<atoc\>** more info here: https://github.com/h4sh3d/xmr-btc-atomic-swap/blob/master/whitepaper/xmr-btc.pdf  
**\<sarang\>** atoc: did you identify a suitable zkp?  
**\<sarang\>** Aside from things like the handling of non-compliant participants etc., the zkp of hash/log preimage was not specified   
**\<atoc\>** the paper proposes two transactions for each token  
**\<sarang\>** yep  
**\<atoc\>** is there is a zkp not specified I will look at it. So far I have just gotten some initial stuff implemented  
**\<atoc\>** however I have not gotten to the swap part yet  
**\<atoc\>** for the implementation, I have read through the paper and it seems sounds  
**\<atoc\>** sound\*  
**\<sarang\>** Yeah, you'll notice there's a requirement for a particular proof that a hash preimage and discrete log preimage are equal in equal knowledge  
**\<sarang\>** Something trustless like Bulletproofs could be used for this, with a suitable circuit  
**\<atoc\>** I see  
**\<sarang\>** The BP paper had data on such a circuit, but I was specifically told it was for testing only and was not yet suitable for any kind of deployment  
**\<atoc\>** I will take a look at that  
**\<atoc\>** We will need it. Perhaps we can see if that circuit works okay, and if not hopefully we can look at ways to improve.  
**\<sarang\>** koe: thanks for that roadmap writeup; it's nice to see many suggestions put together in one place  
**\<sarang\>** It might be useful to open research-lab issues for those that require ongoing discussion  
**\<sgp\_\>** I still advocate for those two mining pool-related proposals btw :)  
**\<atoc\>** sarang I send you a link to my repo once I push some changes  
**\<sarang\>** even though most discussion happens on IRC  
**\<atoc\>** I will send\*  
**\<sarang\>** Thanks atoc  
**\<atoc\>** You can take a look and I would like to get your feedback on it  
**\<sarang\>** Happy to help  
**\<sarang\>** Thanks for taking a look at that  
**\<atoc\>** (y)  
**\<koe\>** sure I can put on research github; was just wondering if koe\_11 should go on main repo's issues  
**\<atoc\>** Np, it seems interesting. This week I was just l familiarizing myself with different atomic swap techniques i.e off-chain and on-chain  
**\<atoc\>** And looking at the dalek library in Rust  
**\<sarang\>** koe: I'd say anything that requires ongoing unsolved research is definitely suitable for research-lab  
**\<sarang\>** But I don't dictate the scope of issues!  
**\<sarang\>** OK, we have about 10 minutes left (there's another meeting taking place at 19:00 UTC for the Konferenco)  
**\<koe\>** ok can put them up there  
**\<sarang\>** Any research topics that have not yet been brought up, and should be?  
**\<atoc\>** sarang btw have you considered publishing your list?  
**\<sarang\>** Of topics I am personally working on? Not really, it's more to help organize my own work  
**\<atoc\>** The private list that you had of research topics that need attention.  
**\<sarang\>** I should open issues for them as well  
**\<sarang\>** TBH github issues for research are not used as well as they could be  
**\<atoc\>** Yeah I think it would be could to have a public list to look through as important topics for Monero that need attention  
**\<sarang\>** Since so much of the discussion happens on IRC in real time  
**\<atoc\>** yes indeed  
**\<sarang\>** But at least those issues could be used as a central posting location  
**\<atoc\>** I currently go back to the logs, but that list was helpful.  
**\<sarang\>** I don't want people to have to scour IRC logs  
**\<sarang\>** Sure, I'll make some issues  
**\<sarang\>** We should clear out old issues as well, or request updates  
**\<nioc\>** peanut gallery here.  Now that suraeNoether 's matching project is complete (?) or nearly so, what is the plan to use it going forward ?  
**\<atoc\>** 'scouring IRC logs' - story of my life :')  
**\<sarang\>** nioc: good question for suraeNoether!  
**\<sarang\>** He has also been working on LRS security models lately  
**\<sarang\>** (which are a blocker for CLSAG review)  
**\<sarang\>** OK, let's move to ACTION ITEMS for the time being (discussion can of course continue after we formally adjourn)  
**\<sarang\>** I am writing up some material on transaction proofs/assertions, and writing up new code for a proposed InProofV2 and OutProofV2  
**\<sarang\>** As well as security model updates, some work on proof rewinding for data storage, and some odds and ends  
**\<sarang\>** Anyone else?  
**\<atoc\>** my action item: mkW my private .git repo (of atomic swap implemntation) public on Githuv  
**\<sarang\>** neat  
**\<atoc\>** Github\*  
**\<koe\>** my action items: multisig and escrowed-marketplace protocol writeup, possibly start bulletproof study if time permits  
**\<sarang\>** BPs for the ZtM writeup?  
**\<Isthmus\>** I want to make a website where you can type in a stealth address (or list of them) and see what future transactions have used them as ring members  
**\<Isthmus\>** But need a little bit more backend work before that is ready  
**\<koe\>** at the very least studying it  
**\<Isthmus\>** I think the concerning part will be seeing the outputs that have been used in no subsequent rings, and thus have a known spend state and no plausible deniable for spendedness  
**\<sarang\>** Let me know if you have any particular questions that I may be able to answer  
**\<koe\>** of course :)  
**\<sarang\>** Any other action items, or final comments before we adjourn?  
**\<sarang\>** (from anyone)  
**\<koe\>** actually spoiled my writeup from several months ago in the latest ztm2 draft whoops  
**\<sarang\>** It's great to see so much research lately into so many different areas of interest from so many people :D  
**\<sarang\>** Gets tough to keep up with everything  
**\<sarang\>** Which is a great problem to have, in some sense  
**\<sarang\>** Anyway, thanks to everyone for attending; we are now adjourned!  
