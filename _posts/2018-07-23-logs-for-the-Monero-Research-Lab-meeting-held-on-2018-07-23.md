---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-07-23
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>** Allright everyone, let's get going on this. Today we are having a research meeting, whose purpose in general is to keep the community up to date on what MRL is doing. That includes all contributors, too, not just sarang and myself. We share papers we've been reading or writing, we disseminate our results... but also we get ideas from you guys, give you a chance to provide feedback to us. Today's agenda is:   
**\<sarang>** let us begin, eh  
**\<suraeNoether>** 1) Greetings. 2) Sarang has an update on bulletproofs for us. 3) I have an update on multisig for us. 4) ArticMine has an update on bulletproof fees but I'm not sure if available... let's see... 5) soliciting questions, etc?  
**\<sarang>** hello  
**\<suraeNoether>** Hi  
**\<oneiric\_>** hi  
**\<iDunk>** hi  
**\<suraeNoether>** Sarang, want to start us off?  
**\<sarang>** Kudelski has completed their final report, with input from us. This reduces the number of identified flaws to 3, along with some observations  
**\<sarang>** All flaws have been patched by moneromooo already  
**\<ArticMine>** hi  
**\<suraeNoether>** sweet  
**\<hyc>** if a flaw sits in a codebase, and no one is there to release it, is it a bug?  
**\<sarang>** The report is staged for release, but there was an issue with how OSTIF was credit in the report. That's been fixed and we're waiting for their sign-off as a courtesy for concurrent release and blag posting  
**\<suraeNoether>** care to describe the flaws and their severities?  
**\<sarang>** However, the final report is just the draft report (https://github.com/SarangNoether/research-lab/tree/master/audits/bulletproofs) with one issue removed, typos fixed, and our brief responses inserted  
**\<sarang>** There was a possible overflow (low priority), unsafe use of env variables (low), lack of certain scalar range verification (low)  
**\<rehrar>** hi  
**\<sarang>** and a couple of identified patches elsewhere in the codebase to harden it up a bit  
**\<dEBRUYNE>** sarang: To be clear, 3 flaws found, which already have been fixed by mooo right?  
**\<sarang>** yes  
**\<sarang>** QL expects first draft today, but they have been delightfully poor at communicating promptly, so we shall see  
**\<sarang>** Bunz has not responded to my emails in several workdays  
**\<endogenic>** "hyc> if a flaw sits in a codebase, and no one is there to release it, is it a bug?" you changed it  
**\<suraeNoether>** well that already makes the audit financially worth it, in my mind: imagine someone purposely desigining a bulletproof with the overflow issue  
**\<sarang>** None of the flaws had identified exploits  
**\<moneromooo>** Wouldn't matter, since that function will not be used :)  
**\<sgp\_[m]>** <3  
**\<suraeNoether>** hence the low priority  
**\<suraeNoether>** but i imagine someone could do something nefariously annoying with it  
**\<suraeNoether>** even if it wasn't a full on exploit  
**\<suraeNoether>** perhaps  
**\<suraeNoether>** anyway  
**\<moneromooo>** We didn't know at the time it wouldn't be used. We know only since ArticMine's fee proposal limits to one proof per tx.  
**\<suraeNoether>** aha i see! so it's even lower priority, since it's not a functional component  
**\<suraeNoether>** that's neat  
**\<suraeNoether>** "we found a flaw in your design: the appendix."  
**\<suraeNoether>** "i mean what is that really"  
**\<sarang>** Aside from BPs, I have been working with Ruffing's colleague on ring sig stuff. I now have enough information to jump a big hurdle in the prototyping code  
**\<suraeNoether>** oh yeah you saw that email he sent with the polynomial info?  
**\<sarang>** This code has been cleared for release to GitHub, so I can push to a test branch on my repo  
**\<sarang>** suraeNoether: yes  
**\<suraeNoether>** awesome  
**\<sarang>** I think he has it a little backwards tho  
**\<sarang>** (transpose of his matrix, IIRC)  
**\<sarang>** I'll check with him to confirm  
**\<suraeNoether>** these are sublinear batch-verification ring confidential transactions, for those of you in the crowd keeping track  
**\<sarang>** We haven't been cleared to release their draft paper unfortunately, just the code, with the understanding that it's very, very early  
**\<sarang>** and we have no definite plans to do anything with it yet  
**\<hyc>** needs "quantum" in the name somewhere  
**\<suraeNoether>** sarang one last thing on BPs: want to write a blog post on "the current state of our art" with bulletproofs + audit results? we can hold off on releasing it until after all the audits are in, or we could do it piecemeal, but I want a link I can point to that summarizes all the optimizations etc, and maybe summarizes the net improvements we'll be seeing  
**\<sarang>** However, it includes a built-in range proof (SORRY BULLETPROOFS) and can take advantage of our cool multiexp stuff  
**\<sarang>** suraeNoether: I'd wait  
**\<sarang>** We'll publish the Kudelski final report first, in the interest of transparency  
**\<suraeNoether>** "quantum transactions: you can either be sure the money was authorized to be sent and not a double spend, or be sure where it's supposed to go, but you can't be certain..."  
**\<hyc>** ;)  
**\<suraeNoether>** neato burrito. Does anyone have any questions for sarang on the bulletproof updates, or the sublinear ring signature scheme (the paper we have not been given permission to share, btw)  
**\<sarang>** kk  
**\<hyc>** surprised you're allowed yo publish the prototype code, since that obviously gives away the algorithm from the paper  
**\<sarang>** They wanted it clearly identified as code only representing a draft paper  
**\<sarang>** and the code has no security proofs, obviously  
**\<oneiric\_>** will the sublinear ring signatures work alongside bulletproofs to reduce signature size/ verification?  
**\<suraeNoether>** hyc they don't want to embarass themselves by pushing out incorrect proofs, or typo-laden stuff, etc, and they want the code to be labeled as sarang just described  
**\<sarang>** oneiric\_: they can either use BPs or a built-in range proof option  
**\<suraeNoether>** question: can the ruffct proofs be bulletproofed?  
**\<oneiric\_>** very cool, thanks sarang  
**\<sarang>** They essentially take all the statements in a RingCT proof and batch them all together in a big polynomial matrix  
**\<sarang>** the range proof is one row of this matrix  
**\<sarang>** then they compress them down logarithmically  
**\<suraeNoether>** that sounds to me like the bulletproof method could be applied to it. interesting.  
**\<sarang>** it's very clever  
**\<sarang>** not really  
**\<sarang>** they use a method by Bootle on polynomial zero-knowledge systems  
**\<sarang>** I can link the Bootle paper later  
**\<sarang>** that's been out for a bit already  
**\<sarang>** I don't know why you'd want to bulletproof this system  
**\<sarang>** it already is logarithmic  
**\<suraeNoether>** let me put it another way: i'm curious about whether bringing the polynomial commitments into bulletproofs would bring anything, not the other way around. but nevermind, we can move on. :P  
**\<sarang>** and allows for a fair bit of flexibility in the statements you can include all at once  
**\<sarang>** oh, I haven't considered that. My gut says "not easily"  
**\<suraeNoether>** nothing worth doin is easy. :P   
**\<suraeNoether>** speakign of which, moving onto multisig  
**\<suraeNoether>** https://v2.overleaf.com/read/bfjfkdgnhgvh  
**\<suraeNoether>** i'm moving through to verify equations, but proof structure is all finished, and we have some other updates to make like copy editing, etc  
**\<suraeNoether>** the hard parts are all completed  
**\<suraeNoether>** for \*this\* paper  
**\<sarang>** congrats!  
**\<suraeNoether>** it technically is not proving anything about MLSTAG-style ring confidential transactions, or our view key structures  
**\<sarang>** instead...  
**\<suraeNoether>** well, it's like a plain public key model, you use one key X, I use one key Y, we compute one shared key Z, and we compute a ring signature with some fake Z's  
**\<suraeNoether>** instead of: I have a pair of keys (A,B), you do too, we merge the B's, etc   
**\<suraeNoether>** but it's the underlying threshold ring signature scheme upon which  our extensions are based  
**\<suraeNoether>** and it's secure!  
**\<suraeNoether>** now, the ruffing paper with sublinear ring confidential transactions defines RCT as a primitive, and proves a variety of security properties specific to that primitive  
**\<suraeNoether>** they are helping lay the foundation of the path towards proving our entire current set-up secure... but if we are considering switching to ruffing's approach eventually...  
**\<sarang>** considering is a very strong word  
**\<sarang>** intrigued is a better word  
**\<suraeNoether>** heh, well you and I and everyone else immediately say "what" about ring signatures?  
**\<suraeNoether>** "ugh, ring signatures need to be replaced eventually"  
**\<sarang>** yes please  
**\<sarang>** but until that day, bigger is often better  
**\<sarang>** ring size, not proof size  
**\<suraeNoether>** a full and complete rigorous description of our current ring signature set-up like in this multisig paper if ring signatures days are numbered? not sold on the utility of that  
**\<rehrar>** and other things ;)  
**\<suraeNoether>** motion of the ocean, rehrar, motion of the ocean  
**\<rehrar>** lies  
**\<moneromooo>** I'm lost now.  
**\<ArticMine>** Do we have possible alternatives to ring signatures in the pipeline  
**\<sarang>** Not particularly. Nobody has a way that's untrusted and smaller and faster yet  
**\<suraeNoether>** ArticMine: other than ruffing's ring confidential transactions, which are the only good candidates we know of for ring sizes 32-64, short of using a zk-stark set-up... not yet  
**\<sarang>** Ruffing is still essentially a ring signature  
**\<sarang>** in that we rely on key images and known decoy sets  
**\<sarang>** It just uses a more general language to prove the underlying statements  
**\<suraeNoether>** fair enough  
**\<sarang>** I look forward to the shitty newzsites: MONERO TO GET RID OF BULLETPROOFS  
**\<sarang>** Anyway, I plan to continue working with the Ruffing scheme  
**\<suraeNoether>** heh  
**\<sarang>** ArticMine had much to say about fees  
**\<hyc>** I have a proposal for better than ZKPs: negative knowledge proofs. the longer you analyze them, the dumber you get.  
**\<suraeNoether>** allrighty, other than a bit of work on churn, i've spent like 12+ hours per day on multisig for a week so i'm taking a few days off. :P heh... and i'm done.  
**\<suraeNoether>** hyc i love it  
**\<suraeNoether>** hyc we should make tshirts  
**\<suraeNoether>** yes, ArticMine please enlighten us on bulletproof fees  
**\<sarang>** suraeNoether: definitely carry on with churn going forward  
**\<ArticMine>** I posted the proposal in dev https://docs.google.com/document/d/1Y3IsjH7ywJOvFeZd1qT1fRfz2lw8APp8ptcyDXzYrxk/  
**\<suraeNoether>** wheee! yay  
**\<ArticMine>** Basically we replace size with weight to account for the Log2 scaling of BP verification  
**\<sarang>** (BTW don't view link if you have an active Google session, or your information will be listed as a viewer)  
**\<ArticMine>** View it without a Google log in  
**\<sarang>** correct  
**\<sarang>** anyway, carry on  
**\<sarang>** Your second FOR loop applies to the (total number of outputs) - 2?  
**\<ArticMine>** The key is that size has to be replace with weight in the determination of the block size now block weight penalty  
**\<ArticMine>** The weight only applies when there is more than 2 outputs and we limit the maximum number of outputs to 16  
**\<suraeNoether>** so fees are flat\_fee + (# outs - 2)\*fee-per-out?  
**\<ArticMine>** Yes  
**\<suraeNoether>** sweet!  
**\<suraeNoether>** does anyone have any questions for ArticMine ?  
**\<oneiric\_>** could a reduction happen with only one output?  
**\<sarang>** Why would there be one output?  
**\<oneiric\_>** someone gaming the weighting algo  
**\<ArticMine>** if an output is spent with no change  
**\<tnsepta>** if you sweep a wallet won't there only be 1 output?  
**\<suraeNoether>** or if you want no change  
**\<suraeNoether>** yeah  
**\<sarang>** I thought wallet always generated a zero-amount second out  
**\<iDunk>** It does.  
**\<sarang>** Is that consensus level?  
**\<moneromooo>** No.  
**\<sarang>** ty  
**\<tnsepta>** didn't know that, what's the purpose of it?  
**\<tnsepta>** is it for anonymisation?  
**\<ArticMine>** Still since it is possible it need to be accounted for  
**\<suraeNoether>** tnsepta: since most txns are 2-in-2-out, it helps keep most transactions distinguishable  
**\<ArticMine>** Actually there can be many txs that are 1 in 2 out  
**\<suraeNoether>** wait?fair, i should just restrict my statement to number of outs  
**\<iDunk>** x-in-2-out  
**\<suraeNoether>** but anyway  
**\<ArticMine>** and they are significantly smaller in size now because the ring signature part is more significant  
**\<tnsepta>** yup that makes sense then from an anonymisation standpoint  
**\<suraeNoether>** Is anyone else doing anything interesting with monero they want to chat about?  
**\<ArticMine>** One other point here is increasing the ring size to 11 or using a fixed ring size of 11  
**\<ArticMine>** This actually helps mitigate the verification issue  
**\<sarang>** This is where I'd hoped we would have better data on churn/diffusion and its relationship to ring size  
**\<sgp\_[m]>** Why 11?  
**\<suraeNoether>** oh, gosh, moneromoo o built me a utility that i can use to figure out whether there is a numerical solution to that!  
**\<suraeNoether>** i forgot! i've been so busy finishing multisig  
**\<sarang>** yup yup  
**\<sgp\_[m]>** Likewise  
**\<suraeNoether>** moneromooo built a utility that computes the # of unique transaction outputs in the history of any given transaction  
**\<ArticMine>** I piked 11 as the largest ring that would still allow for an 80% fee reduction  
**\<suraeNoether>** oh, that's a good metric :D  
**\<sarang>** We should have concrete data to show the benefit  
**\<sarang>** Otherwise we're just saying "surely bigger is better"  
**\<ArticMine>** So all the fee calculations are based upon a ring size of 11 and a 2 in 2 out tx  
**\<sarang>** and then there's a counterargument about keeping ring size and taking smaller txn size  
**\<rehrar>** at the very least we wanted to moved to a fixed ringsize this upcoming hard fork, yes?  
**\<rehrar>** regardless of bigger or not  
**\<sarang>** I believe that is best  
**\<suraeNoether>** i think that would be beneficial, yes  
**\<suraeNoether>** we are at 7 now?  
**\<suraeNoether>** is that rihgt?  
**\<ArticMine>** In my proposal my recommendation is fixed 11  
**\<rehrar>** yes  
**\<sgp\_[m]>** Yes  
**\<sarang>** that is rihgt  
**\<sgp\_[m]>** Yes 7  
**\<sarang>** We can at least make fun Spinal Tap references to convince people it's a good thing  
**\<suraeNoether>** i'd support a fixed number between 7 and 11. i have no skin in this game, so to sepak  
**\<sarang>** I'd support learning the effects  
**\<suraeNoether>** sarang: oh yeah we can brand this the spinal tap update, with bulletproofs and ring size all the way to 11  
**\<sarang>** and making a decision based on that  
**\<unknownids>** 11 rings when you need 1 more ring than 10  
**\<oneiric\_>** lol  
**\<unknownids>** why not just make 10 bigger? cause ours go to 11  
**\<moneromooo>** I see you got the idea rihgt.  
**\<ArticMine>** The case for a fixed 11 are 1) User simplicity 2) No ring profiles 3) There may also be a regulatory advantage in taking away control from the user here  
**\<sarang>** I still think we need to start naming our changes (PoW, network upgrades, etc.) to make them seem less contentious  
**\<suraeNoether>** i'll run moneromoo's utility, it'll take a day or three of boiling my ram, then i'll have an answer about "what ring size is so large that improvements become negligible?  
**\<sarang>** ty suraeNoether  
**\<sarang>** keep me in the loop  
**\<rehrar>** post results here, I wanna know too  
**\<ArticMine>** Any questions?  
**\<suraeNoether>** rehrar:  of course  
**\<rehrar>** Will we be ready for the "freeze"?  
**\<dEBRUYNE>** Moving to a static ring size is more important than bumping it imo  
**\<rehrar>** has the freeze been discussed yet?  
**\<sarang>** When is our desired freeze date  
**\<sgp\_[m]>** I need to update the verification time and size increase to account for bulletproofs before making any analysis. The % will be higher since outputs are a smaller consideration  
**\<moneromooo>** Yes, one: have you considered allowing compound proofs for the case of 2^n+1 ?  
**\<ArticMine>** Is there support for static 11 ring size?  
**\<moneromooo>** Yes.  
**\<scoobybejesus>** any interest in a consensus rule that # of outputs must be >= 2?  
**\<rehrar>** I would say Yes, unless suraeNoether's research shows something surprising  
**\<suraeNoether>** ArticMine: i support a static ring size. i will hold off on a number for a day or three  
**\<oneiric\_>** Are there any arguments/reasons against using a static ring size?  
**\<sgp\_[m]>** ArticMine I need to compile more info before agreeing, but I think the number is generally reasonable  
**\<sgp\_[m]>** I definitely support static  
**\<sarang>** Some users will argue they want "greater privacy"  
**\<suraeNoether>** i think 11 in general is fine, actually  
**\<sarang>** I think those users are wrong  
**\<suraeNoether>** i may support a slightly higher number  
**\<scoobybejesus>** i tentatively support static 11  
**\<moneromooo>** No, they're not. Everyone should want greater privacy.  
**\<moneromooo>** They get to send to themselves once, and wait for a day or so.  
**\<sgp\_[m]>** People who REALLY know what they're doing lose flexibility  
**\<sarang>** I think they're wrong about the big ring size moneromooo, not wanting privacy  
**\<tnsepta>** isn't there a balance between privacy and prices?  
**\<ArticMine>** Yes  
**\<suraeNoether>** tnsepta: there is, the question is whether the balance will be on the side of privacy or prices. :P  
**\<isthmuscrypto>** @xmrhaelan et al over in Monero Outreach could do some preemptive education about "ringsize > default ---> LESS privacy, not more"  
**\<dEBRUYNE>** tnsepta: Price as in fee price or?  
**\<hyc>** but it's misguided to believe "I want greater privacy than the average monero user so whatever ringsize they use, I'm going to use a bigger one"  
**\<ArticMine>** A increase over 11 will require a modification of the fees.  
**\<ArticMine>** Basically what matters is the ratio of the reference transaction weight to the effective minimum block weight  
**\<suraeNoether>** okay, let's move on for now; seems like a static ring size is supported regardless of whether we increase it or not or by how much  
**\<ArticMine>** That alternative is to increase the minimum effective median block weight above 300000 bytes  
**\<moneromooo>** have you considered allowing compound proofs for the case of 2^n+1 ?  
**\<suraeNoether>** moneromooo: can you elaborate on your question?  
**\<sarang>** The case where the # of outputs is 3, 5, 9  
**\<moneromooo>** Sure. If you have 9 outs, have you considered allowing two proofs of 8 and 1, insetad of one of 16 ?  
**\<sarang>** and we round up  
**\<moneromooo>** Since that' the case that hurts most in verification time.  
**\<ArticMine>** Yes the tradeoff is size  
**\<moneromooo>** So you considered it, and deemed it better even in that case ?  
**\<ArticMine>** Yes  
**\<moneromooo>** OK, thanks.  
**\<ArticMine>** In fact the 9 case is the tricky one  
**\<sarang>** When is our ideal freeze date?  
**\<ArticMine>** Also the pricing treats 9 the same as 16  
**\<suraeNoether>** sarang: good question  
**\<suraeNoether>** we should have asked that in dev at the last meeting  
**\<suraeNoether>** ok does anyone else have anything they want to chat about?  
**\<isthmuscrypto>** Monero Archival Project is chugging along nicely. Transitioning to VPS infrastructure, spun up nodes on 3 continents now. Having multiple geographically-distributed archival nodes will helpful for understanding the representativeness of our data, and enables study of network topology/latency.  
**\<isthmuscrypto>** NeptuneResearch is working on updating our archival daemon to be compatible with 0.12.3.0 and expects to be done soon.  
**\<suraeNoether>** that's such a cool project isthmuscrypto   
**\<suraeNoether>** do you guys have an irc channel or a website or something  
**\<suraeNoether>** ?  
**\<isthmuscrypto>** #noncesense-research-lab  
**\<suraeNoether>** heh  
**\<isthmuscrypto>** Anybody is welcome to join, we just keep the data science-y stuff over there to avoid flooding the MRL channel  
**\<suraeNoether>** cool  
**\<suraeNoether>** i think it's interesting, though, so you're welcome to talk about it here too :D  
**\<isthmuscrypto>** Have some preliminary results analyzing the spring data. Going to do some double checking, and documentation, but will run the results by you in the next month or so.  
**\<isthmuscrypto>** Thanks! It's helpful to get input from MRL  
**\<sarang>** Our timing today is perfect; exactly one hour  
**\<sarang>** I'll finish up some polynomial stuff and continue lighting small fires under reviewers' asses =p  
**\<suraeNoether>** yep! have a good day everyone  
