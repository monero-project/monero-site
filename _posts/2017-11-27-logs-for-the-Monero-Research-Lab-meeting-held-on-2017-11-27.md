---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2017-11-27
summary: SPECTRE, multisig, Bulletproofs (range proofs), ZKStarks, ASIC resistance, and miscellaneous
tags: [dev diaries, crypto, research]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<suraeNoether>** anyway, agenda for the day: 1) Greetings, 2) Sarang's work 3)  my work 4) open discussion. The new zksnark paper will presumably take up some of 4. :P  
**\<suraeNoether>** 1) is done i guess. :\  
**\<suraeNoether>** 2) Sarang want to bring us up to speed?  
**\<sarang>** roger  
**\<sarang>** I have working code for both linear and logarithmic bulletproofs that tests correctly  
**\<sarang>** I'm finishing up a few small optimizations to reduce the curve op count  
**\<suraeNoether>** nice  
**\<sarang>** and then it'll be ready for C++  
**\<sarang>** moneromooo already has the linear version up and running  
**\<suraeNoether>** fantastic!  
**\<sarang>** That's been my big project  
**\<suraeNoether>** page 8 of the new zksnark paper talks about dot product proof protocols  
**\<sarang>** orly  
**\<sarang>** That's the big shiny toy of bulletproofs  
**\<suraeNoether>** literally caught my eye  
**\<suraeNoether>** or rather  
**\<suraeNoether>** metaphorically? well  
**\<suraeNoether>** anyway, my point is i have done nothing but skim the paper (in the past 10 minutes) and that popped out at me  
**\<suraeNoether>** you have also been helping me on multisig, as well, don't discount that  
**\<sarang>** I shan't  
**\<suraeNoether>** anything else?  
**\<suraeNoether>** gratz on getting it working  
**\<sarang>** Thanks to everyone who offered support in the most recent fund drive  
**\<sarang>** I remain humbled  
**\<suraeNoether>** thank you, sarang! thanks again  
**\* sarang** takes a small bow  
**\<suraeNoether>** As for my work, I've been working on the multisig paper, which is intended to 1) present a formal model of our threshold ringct, and 2) show how our current implementation compares to that formal model. there are differences that i'm hunting down one by one  
**\<suraeNoether>** JollyMort[m] has found several already, and we've been having discussions about it the past few days  
**\<suraeNoether>** That has represented the vast majority of my time  
**\<suraeNoether>** In addition to that, I believe I may have a problematic example case of SPECTRE. the original authors sweep my concern aside, but i wanted to bring it up and see if anyone had any thoughts  
**\<sarang>** I'm intrigued  
**\<suraeNoether>** if two transactions using the same input are relayed nearly simultaneously, they will find their way into two separate blocks. they will appear as conflicting transactions until the spectre algorithm arranges one block to precede the other  
**\<suraeNoether>** or stay conflicting forever if spectre can never linearly order them  
**\<suraeNoether>** this can happen with a simple example of a "mostly linear" blockchain, except with a single block in the chain replaced with a pair of blocks like a diamond shape:  
**\<suraeNoether>** \_\_\_\/\\_\_\_  
**\<suraeNoether>**    \/  
**\<suraeNoether>** something that looks like that  
**\<suraeNoether>** then any transactions that conflict in the pair of non-linearly-ordered blocks will appear to conflict forever  
**\<suraeNoether>** this allows a clumsy user who re-sends a transaction twice becuase he's foolish to lose his funds.  
**\<sarang>** Can we back this up with a simulation?  
**\<suraeNoether>** i mean, we could, but there's a solid chain of lemmas that lead to a theorem i can write up later if you like  
**\<suraeNoether>** using the theorems about how rapidly sets in spectre get finalized  
**\<sarang>** Even better  
**\<sarang>** \*lemmata  
**\<suraeNoether>** now, the spectre authors said "the only reason someone would relay two transactions like this is to attempt a double spend, so it's okay that the funds are lost."  
**\<sarang>** lolwut  
**\<suraeNoether>** well  
**\<suraeNoether>** the idea is that htey are *two* transactions with valid signatures using the same input  
**\<suraeNoether>** or rather, using at least one of the same inputs  
**\<suraeNoether>** so by definition, it's a double spend  
**\<suraeNoether>** and i can't really think of a scenario where someone would compute two signatures separately like that, then relay them nearly simultaneously like that... on accident  
**\<suraeNoether>** BUT  
**\<suraeNoether>** it's enough of a leap for me to be concerned  
**\<suraeNoether>** moreover  
**\<suraeNoether>** i'm not sure if that sort of "double spend implies money lost forever instead of "eventually one of the two spends is accepted."  
**\<suraeNoether>** and what's really crazy  
**\<suraeNoether>** is that if block arrival times are very fast, like 10/s as in the original spectre paper... this problem is solved *with high probability*  
**\<suraeNoether>** so, that's where SPECTRE is sitting.  
**\<suraeNoether>** and lastly, my viewkey proposal  
**\<suraeNoether>** s/lost forever/lost forever" philosophy instead of...  
**\<scoobybejesus>** I own address A, B, and C.  I simultaneously send the same output as an input in txns A ->** B and A ->** C.  Free coins?  Or B and C each now have unspendable outputs?  
**\<suraeNoether>** a miner would see two conflicting transactions, so neither would be considered valid  
**\<suraeNoether>** and constructing another transaction later A->**D will also be considered invalid  
**\<scoobybejesus>** Ah.  Thanks.  
**\<suraeNoether>** so until spectre re-orgs the block-DAG so that the transaction A->**B precedes A->**C or vice versa, it's locked forever  
**\<gingeropolous>** right, i was wondering that... i though eventually it resolves to a bloclchain  
**\<gingeropolous>** or blockchain  
**\<suraeNoether>** actually, that's the problem: if block arrival rate is slow and you have a fork  
**\<suraeNoether>** the next block to arrive will point to both blocks as parents  
**\<sarang>** yeah  
**\<suraeNoether>** and if all blocks from there on out point to that common child block, those two blocks will never be linearly ordered  
**\<suraeNoether>** so, this would also be solved by simply telling people to try to avoid making more than 1 transaction per target block arrival rate *personally*  
**\<suraeNoether>** otherwise they are burning their own money, in a sense  
**\<sarang>** that's quite the kludge  
**\<gingeropolous>** so dbl spends are punished... kinda  
**\<suraeNoether>** gingeropolous: yes, it provides a strong incentive against making a double spend attack  
**\<suraeNoether>** which is nice  
**\<suraeNoether>** i just don't want to make it so that badly informed users of Monero don't accidentally burn their money  
**\<gingeropolous>** i wonder if we could protocolize an incubate function, where a tx has to sit in the txpool for n blocks  
**\<suraeNoether>** sarang it's not too much of a kludge, if our block arrival rate is 1/second or something  
**\<sarang>** hmm  
**\<suraeNoether>** gingeropolous: ooooh  
**\<gingeropolous>** kind of a bitch because timestamping and all..  
**\<suraeNoether>** it's worth thinking about though!  
**\<suraeNoether>** that's a good idea  
**\<suraeNoether>** okay, so does anyone else have anything they want to share about their work?  
**\<sarang>** I could add that I've posted my monthly report: https://www.reddit.com/r/Monero/comments/7frn7i/november_monthly_report_from_sarang_noether/  
**\<sarang>** Comments welcome  
**\<suraeNoether>** Also, I'd like to thank the community for funding me as well  
**\<suraeNoether>** It's astonishing  
**\<suraeNoether>** In other announcements....  
**\<suraeNoether>** rehrar is working on the next Monero Revuo  
**\<suraeNoether>** I'm not sure what the publication timeline on that is supposed to be  
**\<suraeNoether>** but it's the quarterly newsletter wherein he sort of interviews the teams at MRL in charge of various projects  
**\<sarang>** Any other discussion items?  
**\<suraeNoether>** he and Sarang and I are going to have a sit-down and talk about the direction MRL is heading. I am interested in writing up current standards for Monero, I know Sarang is also, and I want to start on that as soon as Multisig is done.  
**\<sarang>** ah yes  
**\<suraeNoether>** For each Monero standard, I also want to write up at least one proposal for replacing the standard in the case that the security of that standard is compromised  
**\<suraeNoether>** I also want to compile arguments for and against replacing certain standards sooner rather than later, for example, our "nonstandard" hash function  
**\<suraeNoether>** oh man, i should ping andytoshi too  
**\<suraeNoether>** this includes our proof of work standard  
**\<sarang>** That strikes me as our least-standard "thing"  
**\<suraeNoether>** cryptonight has some value, but it's as homebrew as can be  
**\<suraeNoether>** yeah  
**\<suraeNoether>** i wouldn't mind putting up a portion of my funding for this period toward a Proof of Work contest for Monero's replacement proof of work scheme  
**\<suraeNoether>** hmm  
**\* iDunk** reaches for a pitchfork  
**\<suraeNoether>** ?  
**\<suraeNoether>** cryptonight has value because of asic resistance. i'm okay with asics if they are commoditized. i'm not married to cryptonight in any way  
**\<suraeNoether>** i'm in a non-monogamous relationship with cryptonight  
**\<suraeNoether>** ok, well  
**\<suraeNoether>** anything else to discuss?  
**\<dEBRUYNE>** suraeNoether: i wouldn't mind putting up a portion of my funding for this period toward a Proof of Work contest for Monero's replacement proof of work scheme \<= I think othe already has some back up plans  
**\<silur>** apparently V wants ringCT in EVM2  
**\<dEBRUYNE>** You might want to talk to him about it  
**\<suraeNoether>** othe are you around?  
**\<othe>** Yes  
**\<suraeNoether>** silur V = vitalik?  
**\<silur>** yep  
**\<suraeNoether>** othe you've been thinking about POW?  
**\<othe>** Yea  
**\<othe>** Slight changes we can implement will break all asics  
**\<silur>** I introduced stringCT/ruffCT PoC code in our research channel hope it will go somewhere  
**\<othe>** Trivial to implement in cpu and gpu  
**\<suraeNoether>** oooh, that's fantastic! fluffypony sent me at least one recommendation for that a few weeks ago  
**\<suraeNoether>** but i haven't had time to look into it  
**\<othe>** Yeah that one is an example  
**\<silur>** what is this new POW?  
**\<suraeNoether>** ok, but you aren't talking about *replacing cryptonight* but modifying it  
**\<suraeNoether>** silur othe has apparently been looking at the cryptonight code very closely and determining how to swap bits around or mess with the implementation to improve asic resistance without harming gpu or cpu performance  
**\<othe>** Just modifying it randomly  
**\<silur>** I thought cryptonight is asic resistant by design O.o  
**\<othe>** Takes like 5 lines of code in gpu miner  
**\<silur>** I knew that it's not like... cuckoo cycle hard but still  
**\<othe>** Cuckoo is not hard at all  
**\<suraeNoether>** yeah cuckoo isn't asic resistant at all  
**\<suraeNoether>** i have a paper around here about it  
**\<silur>** dayum  
**\<suraeNoether>** silur cryptonight takes up L3 cache like crazy, so the asic resistance comes from forcing it through a bottleneck  
**\<suraeNoether>** but you could still have an asic on the back end of the bottleneck  
**\<othe>** There's really nothing asic resistant if u hsve money  
**\<suraeNoether>** so if someone creatively designed a computer with a huge L3 cache or something like that...  
**\<suraeNoether>** which normally you wouldn't have to worry about for something like SHA256  
**\<suraeNoether>** then the asic is still technically possible, we're just... resistant to it  
**\<suraeNoether>** because it requires novel computer architecture and design  
**\<suraeNoether>** othe i'm very glad to hear you have been working on this  
**\<suraeNoether>** ended the meeting a little too early, sarang. :\  
**\<sarang>** I'm following along on the bus  
**\<sarang>** The bus smells like ass today  
**\<suraeNoether>** http://www.cs.cmu.edu/~dga/crypto/cuckoo/analysis.pdf  
**\<othe>** Well i don't have a problem with asics but sth like shitmain has to be killed of when trying  
**\<suraeNoether>** nope, that's not the paper i was looking at  
**\<suraeNoether>** othe my primary concern is decentralization, whether it's through asic resistance or asic commoditization. the idea of cpu mining is great in some ways, but i like andytoshi's paper on the thermodynamic minimum *a whole lot.*  
**\<suraeNoether>** like, his paper made me realize that proof-of-storage or something like that? the universal minimum will be determined by the speed of light  
**\<suraeNoether>** so instead of commoditized hardware mining, you would see massive massive data centers all with fiber optic cables of *exactly the same length* to avoid time effects from light speed, etc etc  
**\<suraeNoether>** so anyway  
**\<unknownids>** this is probably useless info at this point as its all rumors, but https://rmc.one/ has said they are working on a cryptonight asic  
**\<suraeNoether>** oh yes, that is the paper. :P http://www.cs.cmu.edu/~dga/crypto/cuckoo/analysis.pdf  
**\<suraeNoether>** unknownids: eh, the minute they blow a million on taping out a few asics, we'll implement the first of othe's list of changes. :P they'll have to retape, best case scenario... and then we do it again...  
**\<othe>** Rmc one are idiots but rwal companies might be  
**\<suraeNoether>** it's easier for us to change the algo than it is for them to pump out asics  
**\<suraeNoether>** tbh if i were in the asic business i wouldn't make a move without blessings and guidance from the developers of the coin  
**\<unknownids>** good to know othe  
**\<suraeNoether>** because they'll just change their code if they don't like what you are doing  
**\<silur>** ^  
**\<suraeNoether>** whoever is designing asics for monero are preparing to burn their fiat. but hey, they probably have fiat to burn  
**\<suraeNoether>** joker.jpg  
**\<suraeNoether>** ok guys  
**\<suraeNoether>** i'll be back later today  
**\<JollyMort[m]>** entrepreneurs will always find a way to get above others; be it ASIC or botnets or webminers; what's important is that there's no barrier to entry for new players so that nobody's position is forever assured  
