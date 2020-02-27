---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2017-12-11
summary: Bulletproofs (range proofs), ASIC resistance, and miscellaneous
tags: [dev diaries, crypto, research]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<suraeNoether>** yes we do  
**\<suraeNoether>** good morning everyone  
**\<suraeNoether>** moneromooo, smooth, andytoshi, ArticMine, stoffu, fluffypony, endogenic, gingeropolous  
**\<suraeNoether>** pero pigeons stoffu vtnerd unknownids  
**\<hyc>** pero is here?  
**\<suraeNoether>** *shrug* his name is on the list, but i haven't heard him say anything since before we funded sarang  
**\<sarang>** "He was never here, Trebek..."  
**\<suraeNoether>** hyc  
**\<suraeNoether>** research meeting in 11 minutes, plus or minus the time it takes people to show up  
**\<sarang>** I set out some coffee and muffins for the meeting, but nobody is taking any  
**\<sarang>** Might have wasted my moneys on that one  
**\<unknownids>** lol  
**\<suraeNoether>** someone had a nice diagram or flowchart of the multisig key usage... anyone remember where it may be stashed? i meant to save it  
**\<luigi1111>** JollyMort[m]: ^^  
**\<suraeNoether>** ah yes  
**\<suraeNoether>** now i can scan my logs for it  
**\<endogenic>** meeting adjourned  
**\<suraeNoether>** lol  
**\<suraeNoether>** Welcome everyone to the Nth MRL research meeting  
**\<sarang>** hullo  
**\<suraeNoether>** agenda: 1) hellos, 2) sarang's work recently, 3) my work recently, 4) a grander discussion of "what's next after the multisig paper"  
**\<suraeNoether>** oh, and actually insert between 3) and 4) above: any other interesting research anyone else is doing  
**\<ArticMine>** hi  
**\<suraeNoether>** i know that we have at least two (i think) computer science folks in here working on things.  
**\<suraeNoether>** howdy everyone  
**\<suraeNoether>** ok, well... sarang, you want to catch us up to speed on your past few weeks?  
**\<sarang>** Sure  
**\<sarang>** Updates to the BP code (both single- and multi-output) were completed for compatibility with our existing commitment formats  
**\<sarang>** initial unit testing looks good  
**\<sarang>** The single output case has been tossed over to testnet  
**\<sarang>** A blog post was made to getmonero.org to explain our two-stage process  
**\<sarang>** First single-output (SO), then multi-output (MO)  
**\<sarang>** Doing SO first will let us sidestep the fee question for now  
**\* suraeNoether** just got a phone call from the "tax crime investigation department of the IRS." Everyone be aware: the IRS contacts you by mail not phone!  
**\<sarang>** while still gaining a lot in terms of space and verification efficiency  
**\<sarang>** Now, there are still opportunities to speed up verification  
**\<suraeNoether>** that's great news to hear  
**\<sarang>** I want to get us a better multiexponent method  
**\<sarang>** andytoshi has been working up some code for his curve of choice with his collaborators  
**\<sarang>** I did some rough testing that didn't perform as well as expected, but that can be worked on going forward  
**\<suraeNoether>** if we can get it even faster, we can play a nice game optimizing a balance between RTRS RingCT sizes and transaction throughput  
**\<sarang>** Nice thing is that any verification optimization is a drop-in function replacement  
**\<sarang>** The savings will be more relevant when we move to MO  
**\<sarang>** since that increases the number of fixed curvepoints we use in the algorithm  
**\<sarang>** I also know there's good discussion happening about the best timetable for both SO and MO  
**\<sarang>** whether or not doing SO in March is too fast, or just right, etc.  
**\<suraeNoether>** what is your opinion on that, and what are the arguments for/against going slower/faster?  
**\<sarang>** Well, it's a new method, and there are arguments against using the absolute newest stuff  
**\<sarang>** But it's also very good  
**\<sarang>** I think having it in testnet makes sense  
**\<suraeNoether>** do we have an opinion on putting up a bounty for exploits before moving it to mainnet?  
**\<sarang>** and it does address major concerns that our public has about bloat and feez  
**\<suraeNoether>** i was just looking at our average fees on monero.how  
**\<sarang>** I think there'd be a bit of a PR hit if we kept it out of March (though that is *not* an endorsement against proper testing)  
**\<sarang>** My preference is to continue beating the bejeezuz out of it in testnet and determine where that takes us  
**\<suraeNoether>** yeah, PR is not relevant to security. thing is, unless price increases by an order of magnitude (we should be so lucky), I feel like fees still aren't a big deal. they are quite low in monero compared to bitcoin, in best, worst, and average case  
**\<sarang>** Hoping to hit March, but not making the testing dependent on that timeline  
**\<suraeNoether>** but thats measured in fiat  
**\<endogenic>** in that case, is a bounty a good idea?  
**\<endogenic>** seems it might incentivize some testing  
**\<suraeNoether>** i like the idea of bounty-ing bulletproofs  
**\<sarang>** As do I  
**\<endogenic>** may i bring up something related?  
**\<endogenic>** but not to bulletproofs specifically  
**\<sarang>** For better or worse, BPs have been hyped, and anything that gets them tested is a Good Thing  
**\<suraeNoether>** we can simply dump 2\^N bulletproofs into a file and challenge the community: if you can open even one without knowing our secret masks, we'll give you such and such amount of XMR  
**\<sarang>** Well, that's not the only thing we care about  
**\<suraeNoether>** endogenic yes, let's append that to the "other stuff people are working on"  
**\<suraeNoether>** yeah, also the computational waste  
**\<sarang>** e.g. choosing "random" values in a clever way, or generating edge cases  
**\<sarang>** Or gaining partial info about amounts w/o exact values  
**\<suraeNoether>** oh i see  
**\<sarang>** endogenic: fire away  
**\<endogenic>** ok, similarly, i've been wondering how much traditional pentesting etc has been done on Monero… i've heard some fuzzing has been done, but i'm wondering as well if a more organized effort will be valuable  
**\<endogenic>** i think it would be  
**\<sarang>** Well, we already have a bounty program, no?  
**\<sarang>** A general one?  
**\<sarang>** And there was a recent large FFS for bounty  
**\<suraeNoether>** do we have a set of formal security games for bulletproofs defined for the properties we are concerned about breaking on mainnet? i know that something like a spam attack isn't easily model-able that way, but there are other properties from my understanding.  
**\<endogenic>** i've been curious about that too \^  
**\<suraeNoether>** endogenic: can you elaborate?  
**\<endogenic>** er sorry, on which?  
**\<suraeNoether>** i feel like since monero is a cryptocurrency there is a large financial incentive for penetration  
**\<sarang>** suraeNoether: the paper establishes security definitions  
**\<sarang>** proved for MO, for which SO is a degenerate case  
**\<endogenic>** suraeNoether: yeah but there might also be disincentives to let us know about it :P  
**\<suraeNoether>** endogenic: true...  
**\<suraeNoether>** well in regards to the BP, does anyone have any strong opinions on this or are we just going back and forth on speed of implementation?  
**\<suraeNoether>** and by speed i mean how quickly we are moving to mainnet not verification time  
**\<suraeNoether>** ok, sarang, anything else for you?  
**\<suraeNoether>** from\*  
**\<ArticMine>** My only questions relate to pricing vs cost when there is a cost that does not scale the same way as size  
**\<sarang>** I'm assisting suraeNoether with finalizing his paper  
**\<sarang>** And doing background work on recent zk-snark developments  
**\<sarang>** More to discuss in our "future work" segment  
**\<suraeNoether>** ArticMine: can you elaborate?  
**\<suraeNoether>** sarang: yeah no kiding  
**\<ArticMine>** This would relate to the scaling of verification time  
**\<sarang>** ArticMine: yes, the discussions on fee/penalty structure have been around this  
**\<sarang>** Fortunately they only really apply to MO-BPs, and not SO-BPs  
**\<ArticMine>** I know this may be premature at this time  
**\<sarang>** No, it's good to discuss ASAP  
**\<sarang>** But in parallel to SO deployment  
**\<suraeNoether>** i think our fee structure needs to be evaluated so that it's properties hold more or less invariant over the longrun. if it's possible that our blockchain changes over the next few years so much that miners are getting massive fees for verifying super cheap bulletproofs, or vice versa, we should change the way we compute the fees (even if we think current fee amounts are fair... which, personally, i  
**\<suraeNoether>** don't see too much of a problem with current *amounts*  
**\<suraeNoether>** on the other hand  
**\<ArticMine>** It comes down to the cost of verification vs size  
**\<sarang>** yes  
**\<suraeNoether>** yep. however... what has been banging around in my head is to take all the improved cost of verification and dump it into larger ring signatures  
**\<suraeNoether>** using RTRS RingCT  
**\<sarang>** We want to encourage the use of MO-BPs (as opposed to multiple SO) while avoiding scaling differences  
**\<suraeNoether>** hmm  
**\<ArticMine>** But size alone will do that  
**\<suraeNoether>** i need to read up on BPs. now that sarang is working on the multisig paper, i have time to learn about them.  
**\<sarang>** The bottom line is that size scales as O(log2(M)) and verification scales as O(M)  
**\<sarang>** for M outputs  
**\<ArticMine>** At what point does verification become an issue  
**\<sarang>** Miners should prefer MOs (or protocol should enforce them vs multiple SOs)  
**\<suraeNoether>** is our fee structure based on size as opposed to verification time?  
**\<sarang>** yes  
**\<suraeNoether>** i think it is  
**\<suraeNoether>** yeah  
**\<suraeNoether>** hmm  
**\<ArticMine>** Our fee structure is currently only based upon size  
**\<sarang>** ArticMine: verifying multiple SOs already scales as O(M)  
**\<suraeNoether>** what if we merely take a joint model where we take A\*size + B\*verification time for appropriately chosen constants A and B?  
**\<suraeNoether>** as our fee  
**\<ArticMine>** So id the blocksize penalty  
**\<sarang>** It's actually a little less for an MO  
**\<suraeNoether>** pick A to determine how much the miner should be compensated for storing the BP, pick B to determine how much the miner should be compensated for burning verification time on something other than hashrate  
**\<ArticMine>** I have to give this a lot of thought  
**\<suraeNoether>** yeah, this is not a simple one-and-done discussion.  
**\<ArticMine>** because it also impact the question of exchange  
**\<suraeNoether>** what do you mean by that?  
**\<sarang>** And a solid general approach to it would help address future developments that affect size vs computation time  
**\<ArticMine>** Purchasing power of Monero should scale with the number to outputs  
**\<luigi1111w>** \<suraeNoether> yep. however... what has been banging around in my head is to take all the improved cost of verification and dump it into larger ring signatures \<= I disagree. Of course there's no perfect answer, but cpu cost is currently quite on the high side IMO, and I'd like to see it lower overall.  
**\<ArticMine>** So we may have to scale the output part of the fee with the total number of outputs in the block as opposed to the blocksize  
**\<ArticMine>** Essentially two fee components one size based and one output based  
**\<suraeNoether>** ArticMine: i will need to think about that. i think computing expected verification time of a transaction should be very simple, and is a more direct measurement of how much the miner is burning on that transaction  
**\<sarang>** Yes let's continue to think about and discuss this going forward  
**\<sarang>** suraeNoether this ends my report  
**\<ArticMine>** Yes it is an other "effective penalty"  
**\<hyc>** that's the obvious way forward - if you are accounting for both storage space and CPU cost, you need the two factors present in the fee  
**\<suraeNoether>** so, actually, i want to address luigi's point  
**\<suraeNoether>** because we are tugging at two ends of the rope, cpu efficiency versus privacy  
**\<suraeNoether>** i think if monero users want to enjoy privacy over the long run, we need either zk-stark whole-blockchain-like signatures, or we need very large ring sizes. and in both cases, we can't have authenticating data like signatures scale linearly in size, or we are sunk in the water.  
**\<suraeNoether>** i've been using the attitude that each gain in speed or performance can be matched with a bigger RTRS RingCT so that users don't necessarily notice any performance change, their privacy merely increases  
**\<suraeNoether>** on the other hand, we can make things faster while keeping monero's privacy where it's at  
**\<suraeNoether>** the goal is hopefully to meet in the middle somehow  
**\<suraeNoether>** underneath the entire BP discussion is which direction we are going to take Monero over the next few months or years  
**\<suraeNoether>** which was why I wanted to bring up point 4) before, about "the future."  
**\<hyc>** along the lines of that question - if CPUs get faster over time, that should mean we can increase ringsize in the future  
**\<endogenic>** imo better to prioritize privacy  
**\<luigi1111w>** or keep up with increased use  
**\<hyc>** since we're talking about linear increases in verification cost, is there a tradeoff in traceability?  
**\<ArticMine>** Yes but we also have to keep in mind blocksize  
**\<suraeNoether>** what's that one economic principle? make something more efficient and people just use more of them instead of the overall system using fewer things. Jevon's paradox?  
**\<hyc>** e.g. if CPUs get 2x faster, does it become 2x easier to analyze the blockchain?  
**\<sarang>** https://en.wikipedia.org/wiki/Snackwell_effect ?  
**\<luigi1111w>** hyc I don't think so  
**\<ArticMine>** It is starting to look like verification time rather than size becomes the dominant cost parameter  
**\<moneromooo>** If CPUs get faster, we have more users and larger blocks.  
**\<suraeNoether>** (by the way, for point (3): the past weeks I've been working on multisig and that's essentially all. After handing it off to sarang I am now extremely excited to read about BPs and the new zk-starks, which could simply make this whole discussion moot anyhow.)  
**\<luigi1111w>** that would be some entity data crunching. They'd just add as many cpus as needed  
**\<luigi1111w>** I guess technically it'd be cheaper too, but the cost is likely not high enough to matter one way or the other  
**\<ArticMine>** Yes but the cost of verification scales exponentially relative to size  
**\<suraeNoether>** ArticMine: the verification time does appear to have become the most important feature of new cryptoschemes, to me  
**\<ArticMine>** It could become dominant eventually because of the different scaling rates  
**\<suraeNoether>** hyc: if it's exponentially difficult (in # of blocks say O(2\^i)) to analyze the monero blockchain, and you double your blocks/s of analysis, you still have an exponential amount of time for analysis O(2\^(i-1))  
**\<hyc>** Ok so that implies we wouldn't need to increase ringsize very often in the future  
**\<ArticMine>** However we must keep in mind that not all users will move to large MO proofs  
**\<luigi1111w>** why wouldn't they?  
**\<sarang>** If the vast majority of txns are still 2 outputs, that wouldn't change  
**\<moneromooo>** Mymonero users ? :)  
**\<ArticMine>** It is only advantageous to very large payers  
**\<luigi1111w>** moneromooo I think endogenic is working on copying the c++ wallet code, so it'd likely include that  
**\<luigi1111w>** otherwise I'll add it to JS probably  
**\<moneromooo>** Great.  
**\<endogenic>** we may even be able to transpile that C++ back to JS for the new web wallet, but the rest will run on the C++ yes  
**\<luigi1111w>** well I'll add it to JS anyway, for my own stuff, but probably mymonero.com too if needed  
**\<suraeNoether>** so, in terms of "The Future:" sarang and I want to write up the Monero Standards, which we are excited about, and in those standards we simply want 1) to describe what the monero codebase currently does, 2) why those choices seem to have been made (if monero) or kept (if cryptonote reference), and 3) an outline of possible future algorithms for use in place of each piece. This whole discussion about  
**\<suraeNoether>** verification time, etc, goes back to a question of which algorithms we might in "possible future algorithms," and our motivations/design philosophies for doing so.  
**\<serhack>** suraeNoether: Monero standards will be helpful for me in order to write the ebook.  
**\<suraeNoether>** serhack: the Monero Standards are going to be extremely helpful to the community for a long time afterwards. they are going to be extremely un-sexy to the community  
**\<suraeNoether>** "Now unveiling... Monero Standards! Where we tell you what we are already doing!"  
**\<hyc>** lol  
**\<suraeNoether>** "Turns out we never had a manual all along!"  
**\<serhack>** thanks suraeNoether  
**\<suraeNoether>** but i suspect htey will be referenced over and over and over and over and over  
**\<suraeNoether>** so, this is obviously an ongoing discussion. anyway. I also had an idea for educational outreach  
**\<suraeNoether>** aaaand I'm not sure if I want to talk about it yet. just like the last idea fell through, I am glad I never mentioned a specific university.  
**\<suraeNoether>** buuuut I think the community will like the idea, and I'll be hopefully announcing something about it in the middle of next month  
**\<suraeNoether>** on another note, this POW contest idea  
**\<suraeNoether>** if it were used for message authentication or anything like that, cryptonight would be wildly dangerous as a home-brewed hash function  
**\<hyc>** why so?  
**\<sarang>** In terms of public scrutiny?  
**\<suraeNoether>** unlike other hash functions, it sort of rolls a die, picks a random hash function from a certain list based on that die, hashes its random data. then it swaps some bits around, i believe there is an AES stage, and then repeat. does this for a number of rounds  
**\<suraeNoether>** until the L3 cache is totally filled up with this randomness  
**\<suraeNoether>** I believe  
**\<hyc>** pretty much, yeah  
**\<hyc>** ok so it'd be crap for signatures  
**\<suraeNoether>** point is: in 2013, if you were a 19 year old sitting around smoking pot trying to come up with a way to invent an asic resistant hash function, and all you knew about computers was that L3 functions are slow and that these handful of hash functions are considered good, this is *EXACTLY* the hash function you would come up with.  
**\<suraeNoether>** s/L3 functions/L3 cache (oy)  
**\<suraeNoether>** so the POW alternative thing is something that has been niggling at my mind for awhile  
**\<suraeNoether>** and i'm thinking i'm willing to match the Monero community up to a certain amount in XMR for a nice, big, public contest on the matter  
**\<luigi1111w>** the dice is at the end btw  
**\<hyc>** L3 isn't that slow, and it's faster than main RAM. this was a pretty good approach to prevent trivial optimization (fitting into L2 or faster)  
**\<luigi1111w>** https://github.com/monero-project/monero/blob/master/src/crypto/slow-hash.c#L488  
**\<suraeNoether>** luigi1111w: ah, thanks, i thought i had the order mixed up  
**\<suraeNoether>** hyc yes, you are correct  
**\<sarang>** It'd be important to determine what you'd want out of a new PoW suraeNoether  
**\<suraeNoether>** right  
**\<suraeNoether>** we need a rubric for judging the submissions  
**\<suraeNoether>** we need a panel of judges that are more or less impartial  
**\<hyc>** you want another asymmetric function, like PKI. slow to prove, fast to verify.  
**\<suraeNoether>** yep  
**\<suraeNoether>** if it's ASIC-able, it should be commoditized already for improved egalitarian mining and for improved environmental impact  
**\<suraeNoether>** i'm not sold that Nakamoto hash-based PoW is "the best" idea, although I know that whatever "the best" process is, it should end up being a poisson process  
**\<suraeNoether>** i want provable security for every attacker % up to and including 50%  
**\<suraeNoether>** etc etc  
**\<suraeNoether>** i'm wondering if anyone else would be willing to match some XMR  
**\<sarang>** Well hash-based has the advantage of being extremely fast to verify  
**\<sarang>** and well understood if you use an accepted hash function  
**\<suraeNoether>** because a prize could get really hefty really fast if some folks promise matching.  
**\<suraeNoether>** yep sarang there are an enormous number of advantages with hash functions  
**\<suraeNoether>** by the way, my idea i talked about yesterday on using discrete log + nakamoto PoW... I later in the day proved that it was a bad idea  
**\<suraeNoether>** i have a nice little theorem "Do not implement this scheme."  
**\<suraeNoether>** provably true  
**\<hyc>** lol  
**\<luigi1111w>** fast to verify is important  
**\<luigi1111w>** slow to prove is pretty meh  
**\<hyc>** cryptographic hashes are designed to be fast. and they don't have the desired asymmetry  
**\<luigi1111w>** resistant to excessive speedup, sure  
**\<hyc>** slow to prove is an essential component of the original PoW definition  
**\<hyc>** applied to anti-spam email service  
**\<luigi1111w>** that is provided by difficulty though  
**\<suraeNoether>** it's sufficient to replace "slow to prove" with "exponential space-time tradeoff in proving time." This way, if someone can manage a speedup, they are paying the cost with necessary storage space.  
**\<suraeNoether>** so either way you have to sink cost into hardware to participate  
**\<hyc>** I would assume one of the goals is to be reasonable on existing deployed CPUs  
**\<hyc>** whether in PCs or smartphones  
**\<suraeNoether>** so, what are people's feelings on hosting such a contest? I think I would have a 3-6 month submission deadline or something along those lines. At least 3 months so that a student can spend a full semester working on the problem with their adviser, if they want.  
**\<suraeNoether>** hyc \^ this assumes we do POW on a CPU as opposed to proof-of-storage-and-retrieval on a hard drive... and i don't want to restrict the contest submissions to PoW only.  
**\<endogenic>** i'd be concerned to confirm strategy for handling technicalities with running the contest… deciding a singular winner… what happens if there is no winner…  
**\<endogenic>** i know you already mentioned it surae  
**\<sarang>** It'd be a highly nontrivial thing to do  
**\<sarang>** You need lots of external testing  
**\<sarang>** that's why the NIST contests take so freaking long  
**\<moneromooo>** I really don't like the idea of creating an expectation we'll change to whatever this unearths.  
**\<iDunk>** ^^  
**\<luigi1111w>** I don't think that is expected  
**\<luigi1111w>** or if it is, cancel that  
**\<luigi1111w>** (expectation)  
**\<sarang>** the incentive to test NIST standards is the understanding of widespread adoption  
**\<suraeNoether>** moneromooo: we can say the default entry is the cryptonight algorithm submitted by the general fund.  
**\<suraeNoether>** everyone is competing against htat  
**\<luigi1111w>** I would be curious to see the parameters I guess  
**\<suraeNoether>** to get into the second round of judging, if we have multiple rounds, requires outrunning the bear: cryptonight. to get into the third round of judging requires outrunning each other.  
**\<hyc>** and is ASIC-resistance part of the criteria?  
**\<sarang>** I'd think so  
**\<suraeNoether>** i'm okay with ASICs if they are already commoditized (somehow)  
**\<suraeNoether>** if they are asic-able and someone can come in and blow a million bucks to own the entire monero asic market, that's a losing proposal  
**\<endogenic>** but that requires ppl to buy new hardware just to compete in mining, no?  
**\<hyc>** that seems like a bad idea to me. it means everyone who wants to participate on a level playing field has to buy new hardware.  
**\<endogenic>** seems to change the asic resistence idea  
**\<hyc>** it leaves out the vast percentage of the world that has a smartphone in their pocket  
**\<luigi1111w>** if you can blow a million bucks to own the market, something is very wrong  
**\<luigi1111w>** why can't I come in and also blow a million to take half (and so on)  
**\<ArticMine>** There a patent risks with ASICs - ASIC boost in Bitcoin comes to mind  
**\<moneromooo>** I really like how people have started mining on CPUs for new reasons. This is only possible because mining on a CPU is feasible. Those are gimmicks, granted.  
**\<endogenic>** but they might become much more widespread soon  
**\<endogenic>** people are enabling web miners etc  
**\<ArticMine>** Coinhive opened a can of worms  
**\<endogenic>** ArticMine: passive mining in an app was mostly a matter of convenience then  
**\<endogenic>** bc ppl can still bundle a mining lib and run it in the bg  
**\<endogenic>** if they want to go to the effort  
**\<ArticMine>** The trouble is who controls the mining  
**\<suraeNoether>** hmm. interesting. the whole goal of ASIC resistance is egalitarian mining, in my mind. i don't really care so much about the asic resistance as the egalitarian mining.  
**\<suraeNoether>** so let me rephrase the above  
**\<ArticMine>** The user or the app developer  
**\<endogenic>** ArticMine: who controls the target of the reward, or who controls the algo, or who controls the % of cpu used..? not sure which you mean, or if all three, etc  
**\<ArticMine>** All three  
**\<ArticMine>** In a typical mobile device it is not the end user, and that is a problem  
**\<suraeNoether>** ok, so it sounds to me like people are willing to entertain the idea if the kinks of the governing contest judging body are ironed out, and as long as a rubric is publicly agreed upon. we are quibbling about details on the rubric right now, and that tells me people are receptive to the overall idea.  
**\<hyc>** well... if it ain't broke don't fix it. what's broken?  
**\<iDunk>** "So there is a chance" :D  
**\<moneromooo>** That argument is invalid.  
**\<suraeNoether>** lol iDunk  
**\<suraeNoether>** hyc: if it ain't broke, no one will come up with a better idea  
**\<suraeNoether>** and the money goes back to the general fund  
**\<luigi1111w>** in the schwarz  
**\<suraeNoether>** well  
**\<luigi1111w>** schwartz  
**\<luigi1111w>** idk  
**\<suraeNoether>** if i offer to match some amount of XMR, and the thing doesn't get funded... the contest doesn't go through, you know?  
**\<endogenic>** yeah but we'd hate to see money spent mistakenly  
**\<endogenic>** guess ppl are just saying we need to be cautious  
**\<ArticMine>** What are the advantages?  
**\<serhack>** fund what?  
**\<endogenic>** lol serhack just woke up  
**\<suraeNoether>** serhack see above, i was talking about a PoW replacement contest  
**\<luigi1111w>** the only thing missing from the current pow that I personally care about is verification speed  
**\<luigi1111w>** it's slow  
**\<serhack>** +1 suraeNoether  
**\<serhack>** hello endogenic  
**\<suraeNoether>** ArticMine: 1) coming up with a possibly more egalitarian POW, 2) coming up with a possibly faster verification POW, 3) avoiding an eerily-designed hash function that is essentially unique in its structure  
**\<luigi1111w>** and what does #1 mean? :)  
**\<suraeNoether>** honestly? i don't know yet. measuring egalitarian-ness... doesn't that go back to like ancient greece?  
**\<suraeNoether>** heh  
**\<endogenic>** but people are not equal  
**\<endogenic>** (i looked it up)  
**\<endogenic>** surae has better math ability than i  
**\<luigi1111w>** impossible  
**\<hyc>** I don't see #3 being detrimental in current cryptonight. it's using a bunch of heavily vetted hash algos in combination  
**\<luigi1111w>** ok #2 definitely  
**\<luigi1111w>** #3 I agree with hyc  
**\<suraeNoether>** I'm not terribly concerned about 3) because if cryptonote was designed by scammers, and if cryptonight was designed maliciously, it would be difficult to discern this and it would provide the original miners with a disproportionate hash rate compared to users with similar computers. i'm a little less concerned about 2). But overall? I'm just not convinced that cryptonight is a particularly  
**\<suraeNoether>** well-thought-out way to bring ASIC resistance/egalitarian mining into the hash computation world.  
**\<suraeNoether>** add: "and its not like the original cryptonote founders are a huge % of the mining network"  
**\<suraeNoether>** hit enter a little too soon  
**\<suraeNoether>** and i'm a little *more* concerned about 2). good heavens  
**\<suraeNoether>** seems like the community is more luke warm on the idea than i had hoped. that's cool. i'll shelve it for a few months  
**\<suraeNoether>** okay, does anyone have any other topics to bring up?  
**\<suraeNoether>** Okay, well, meeting adjourned I suppose. luigi, out of curiosity: could you do me a favor? can you come up with some numbers on per-output transaction verification times (total, including ring signatures and range proofs) and PoW verification times that you consider "worst case," we never want to go slower? it would help me figure out whether we can optimize BP + RTRS RingCT to get both large ring  
**\<suraeNoether>** sizes and get verification times down  
**\<suraeNoether>** i feel like per-transaction, we should be trying to keep verification time down under 50ms, but maybe that's too slow  
**\<endogenic>** who's on the monerophone? nobody.  
**\<endogenic>** or everybody.  
**\<endogenic>** or anybody?  
**\<sarang>** In the old days, it was a "party line"  
**\<luigi1111w>** for what hardware ^\_^  
**\<luigi1111w>** and yes definitely under 50ms  
**\<luigi1111w>** complicated question though  
**\<moneromooo>** Not my my hardware then ^\_^  
**\<suraeNoether>** luigi1111w: the question i suppose is for the average node.  
**\<suraeNoether>** and, again, just need upper bounds  
**\<suraeNoether>** i know how to optimize a problem "subject to some cost \<= max\_cost"  
**\<suraeNoether>** in this case verificaiton time  
**\<luigi1111w>** can just use 50 for now  
**\<gingeropolous>** re: i think it'd be nice if we had something waiting in the wings if a change in PoW *was* needed, because right now it seems there's a gestalt that the PoW would change if there was a miracle ASIC.  
**\<gingeropolous>** woops. that should have read re: PoW -  
**\<gingeropolous>** re:  
**\<gingeropolous>** gah, sorry. this ergonomic keyboard. Re: ringsize, privacy, computation time - I have a hunch that we can extract a very useful dynamic parameter from network difficulty.  
**\<suraeNoether>** gingeropolous: yeah, we don't even need to switch to the winner immediately. it could just be the one we put into our long-term piecemeal backup plans.  
**\<hyc>** we know that there are Cryptonight implementations for FPGA already  
**\<hyc>** and apparently they're profitable, now that XMR price has risen  
**\<hyc>** the other aspect of using industry-standard algorithms - you can get impls of them off the shelf, and lump them together as Cryptonight uses them, without much hassle  
**\<ArticMine>** So time may be of the essence to change the POW algorithm  
**\<ArticMine>** In any case this POW algorithm change seems positive to me  
**\<nioc>** othe has already stated that if an asic is produced, a few changes that would be simple to implement in mining software would make those asics useless  
**\<nioc>** I believe he has already done some work on this  
**\<unknownids>** \^ i recall that too  