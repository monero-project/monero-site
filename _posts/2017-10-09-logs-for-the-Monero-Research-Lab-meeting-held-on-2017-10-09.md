---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2017-10-09
summary: Announcements, Round table discussion of projects, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<surae>** Okay, everyone, welcome to our first MRL Research meeting!  
**\<endogenic>** yay!  
**\<surae>** Agenda, I guess, will be 1) Greetings, 2) Announcements, 3) Round table discussion of projects, 4) anything else that anyone else can think of  
**\<surae>** So, greetings!  
**\<hyc>** hello  
**\<surae>** As far as announcements go, I'll start with the usual: Next week at this time, we'll have office hours, where people can come in and just ask whatever questions they like. Monday 17:00 UTC. Then we'll be alternating Mondays  
**\<surae>** between research meetings and "office hours"  
**\<surae>** i can't think of any other announcements...  
**\<surae>** sarang? anything?  
**\<surae>** Okay, moving along I guess  
**\<surae>** For project discussion...  
**\<surae>** Personally, I've been working on multisig. Sarang and I had some basic security definitions nailed down when he came out to visit. Unfortunately, a paper that mustn't be ignored came out by Boneh and co-authors...  
**\<surae>** https://eprint.iacr.org/2017/956.pdf  
**\<surae>** That paper presents a new scheme that is not directly relevant to us (although it may be in the future) but importantly it defines several security models  
**\<endogenic>** How lucky it came out at the same time...?  
**\<endogenic>** ;)  
**\<surae>** one of the security definitions Sarang and I came up with is actually a stronger definition than the one in that paper  
**\<endogenic>** Of course  
**\<surae>** so, it seems as if we are on the right track, if someone like Boneh is thinking about similar problems  
**\<surae>** There are some implementation issues in my description also; the current draft is here: https://www.sharelatex.com/project/5980a44556789660b0600edb  
**\<hyc>** sounds like their paper is applicable both to multisig and the ever-popular trusted setup  
**\<sarang>** Sorry here  
**\<surae>** hyc tbh i haven't gotten deep into their homomorphic-specific stuff, so i have very little idea. i'm very interested in their security definitions, though  
**\<surae>** welcome~  
**\<endogenic>** Should we mention ppl like mooo at the beginning of mtgs?  
**\<surae>** oh good idea  
**\<endogenic>** Per multisig  
**\<surae>** moneromooo knaccc luigi1111 fluffypony anonimal dEBRUYNE  
**\<sarang>** So yes multisig is coming along well  
**\<sarang>** Subaddress paper is done  
**\<sarang>** That was posted as a final draft to the channel for comment  
**\<sarang>** And is ready to go to Reddit etc  
**\<surae>** yes, Subaddress paper will now be MRL-0006, will be pushed to my github in a bit here and then i'll issue a pull request to the monero-project  
**\<surae>** send us a link real quick sarang  
**\<surae>** i'd be happy to have folks read over it one more time  
**\<surae>** is anyone else doing anything research-y? learn something new? anyone working on a project?  
**\<sarang>** https://github.com/b-g-goodell/research-lab/blob/master/publications/bulletins/in-prog/MRL-9999-subaddy/MRL-9999-subaddresses.pdf  
**\<sarang>** I am updating myself on some aggregator constructions  
**\<sarang>** And based on the Green tweet, I'd like us to do an analysis of our use of PRNGs  
**\<hyc>** I have nothing crypto-related to offer. been benchmarking DB engines lately. (LMDB still fastest.)  
**\<surae>** i'd be very interested in hearing from xpto also, since he's working on some LN stuff, and anonimal, since he's dealing with RSA I guess for kovri? knaccc is probably catching up in his RL from spending weeks programming RuffCT/StringCT/RTRS RIngCT  
**\<surae>** hyc can you link me a primer for LMDB? i know precisely zero  
**\<hyc>** https://symas.com/lmdb/technical/#pubs  
**\<surae>** nice thanks  
**\<endogenic>** i've been curious if there's a simpler implementation of i2p possible  
**\<endogenic>** and i'm just wondering (blindly) about revocable view keys  
**\<surae>** i am excited to start thinking about those more deeply. multisig is...   
**\<hyc>** ah, the notion of time-limited/expiring view keys sounds like a good idea  
**\<moneromooo>** Sorry, I was out.  
**\<surae>** yes  
**\<surae>** no problem mooo, i didn't ping anyone before we started (my bad, first time here yuk yuk)  
**\<endogenic>** hyc: i've heard some downsides to proposals of time-expiring view keys  
**\<surae>** multisig is more delicate than i thought. thing is, i'm pretty sure that our current implementation is safe enough to roll with (pending sarang's agreement, maybe). problems abound, though  
**\<endogenic>** nm90 had some concrete ideas on it  
**\<endogenic>** problems?  
**\<surae>** the problems aren't huge. it's like "well, if an adversary uses a side channel attack and listens in on this computation here, the adversary may be able to determine whether a certain key is a shared key or not, so these here should be communicated with encryption" and so on and so forth. since the security of keys in that way is far less important than being unable to go backwards and determine the  
**\<surae>** participating private keys, stuff like this isn't a huge deal  
**\<surae>** little... details. that keep building up.  
**\<surae>** so, i'm going to take a day or two off of it and work on other things, to reset my brain. it's been a few days of just multisig. Pending sarang's agreement on the multisig code being "safe enough," multisig can be put to work before the MRL-0007 paper is put out, though. Two reasons for this  
**\<sarang>** A lot of it is about assuming things about communication of coalition members  
**\<surae>** First, even if multisig satisfies weaker security definitions than i would like, we can always push changes to it later. Second, I'm already proposing a slightly different implementation in the paper than we are currently going to see in the code. I'm considering writing an appendix to this paper that compares the current code by moneromooo with my suggested implementation, and attempts to close the gap  
**\<surae>** between them.  
**\<surae>** so, anyway, i'll probably take two days off and think about blockchains or specter or difficulty or something  
**\<sarang>** Now what about this PRNG bizniss?  
**\<moneromooo>** Monero's PRNG is not homebrew, AFAIK it's the canonical construction from the Keccak authors.  
**\<surae>** ?  
**\<surae>** Our PRNG should follow whatever the best practice is. I'm not convinced NIST or ISO are the ones who describe the best practices. maybe we should have our own standard for that  
**\<sarang>** I'd like to understand it a bit better  
**\<sarang>** Especially since the issue was raised last year and kinda died away  
**\<surae>** either way, identifying where the PRNG as-is currently influences stuff that actually hits the blockchain seems to be a no-brainer sort of thing to do anyway  
**\<hyc>** https://www.deepdyve.com/lp/institute-of-electrical-and-electronics-engineers/software-only-extremely-compact-keccak-based-secure-prng-on-arm-cortex-QsZRJs71MZ  
**\<surae>** I also want to vet this spectre paper. I'm suspicious of outlandish claims.  
**\<surae>** Thanks hyc  
**\<hyc>** also https://keccak.team/files/SpongePRNG.pdf  
**\<hyc>** afaics it's already heavily studied  
**\<surae>** that's interesting. i'd be very interested to have a conversation with Green  
**\<surae>** maybe i'll shoot him an e-mail  
**\<surae>** i also want to meet an economist  
**\<endogenic>** ArticMine might be able to help you there surae  
**\<surae>** for ASIC and POW discussions. i need to learn about the game theoretic dynamics behind commoditizing hardware, decentralization, renting, etc  
**\<surae>** nice  
**\<surae>** Okay, so in the next two weeks: progress on multisig expected, i want to vet the spectre paper, sarang is learning about accumulators lacking a trusted set-up,  hyc will presumably continue playing with DB engines  
**\<hyc>** ;)  
**\<endogenic>** surae will take a short vacation  
**\<surae>** Oh  
**\<endogenic>** ... right??  
**\<sarang>** Aye  
**\<surae>** actually, yes, i need sleep and it just snowed for the first time  
**\<surae>**  i need a weekend  
**\<surae>** hard to separate work and life  
**\<sarang>** Other issues of interest?  
**\<surae>** oh, and since we are having this public discussion right now  
**\<surae>** RTRS RingCT: we've concluded that pretty much any improvement in signature verification time will lead to exponentially bigger rings for the same blockchain size.   
**\<surae>** on the flip side: any increase in verification time will lead to exponentially smaller rings  
**\<surae>** this is a property of any logarithmically sized ring sig scheme  
**\<hyc>** "lead to bigger" -> "enables using bigger" ?  
**\<surae>** yeah, for the same blockchain size  
**\<hyc>** ok  
**\<surae>** since RTRS RIngCT is log-sized and has comparable verification time compared to MLSAG, it's not feasible to implement them unless we can make them faster to verify than MLSAG. If they are as fast or slower, they aren't worth switching to  
**\<surae>** and i believe vtnerd benchmarked sandy2x and it was freaking fast  
**\<hyc>** faster than MLSAG?  
**\<surae>** well, sandy2x is just an EC arithmetic implementation  
**\<surae>** so boht MSLAG and RTRS RingCT would be faster  
**\<hyc>** ok  
**\<surae>** i believe he got around a 15% improvement in EC arithmetic time, which would lead to around 15% faster verifciation time  
**\<surae>** which would allow us to have a fixed min ring size of 10!  
**\<surae>** not 10 factorial  
**\<surae>** but 10  
**\<surae>** we could possibly even get away with a ring size closer to 32 or something like that  
**\<hyc>** so RTRS RingCT is still viable, not dead. good to know  
**\<surae>** now, knaccc had me contact some folks who did some GPU otpimization for EC  
**\<surae>** and their code also speeds up CPUs because it's so optimized  
**\<surae>** for Curve25519  
**\<surae>** they are eager to help us try to impement it, though, their emails show a lot of enthusiasm, and I didn't even ask for assistance or anything  
**\<surae>** so, i'm going to pursue that further in the next two weeks also  
**\<hyc>** excellent  
**\<surae>** i kind of wanted all that "on the record" so to speak  
**\<surae>** I can't think of anything else for now.   
**\<surae>** sarang, anything?  
**\<sarang>** Negatory  
**\<surae>** allrighty, well  
**\<sarang>** Keep up the good fight?  
**\<surae>** yep  
**\<sarang>** We can talk PRNG after  
**\<surae>** and if anyone reads any papers on forward-secure key exchange that may be helpful for revocable view keys, send them along!  
**\<surae>** yep, we can call this meeting \*over  \*
