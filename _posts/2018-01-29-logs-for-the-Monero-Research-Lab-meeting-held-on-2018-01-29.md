---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-01-29
summary: MRL direction, ideas for research, and miscellaneous
tags: [dev diaries, crypto, research]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<sarang>** Let us begin  
**\<suraeNoether>** howdy everyone!  
**\<suraeNoether>** maybe we should ping people  
**\<endogenic>** vtnerd smooth fluffypony othe stoffu knaccc ArticMine kenshi84 pigeons gingeropolous dEBRUYNE  
**\<endogenic>** :P  
**\<endogenic>** ferretinjapan  
**\<endogenic>** silur (absent?)  
**\<endogenic>** hyc  
**\<endogenic>** endogenic  
**\<suraeNoether>** fluffypony luigi1111 andytoshi anonimal  dEBRUYNE endogenic ErCiccione gingeropolous hyc vtnerd smooth  othe  stoffu silur ArticMine kenshi84 pigeons john\_alan medusa Mouchicc  nioc unknownids  
**\* andytoshi** breakfast meeting, afk, sorry  
**\<anonimal>** Hello  
**\<ErCiccione>** Hi! (thanks for the ping)  
**\<suraeNoether>** So, today I want Sarang and I to give an account of our experience at BPASE18, and then talk about the January roadmap  
**\<hyc>** hey  
**\<suraeNoether>** and our overall work for this year  
**\<suraeNoether>** if anyone is curious, I live-tweeted the majority of talks at BPASE  
**\<sarang>** Several talks highlighted topics relating to smart contracts that have little relevance to us  
**\<sarang>** However, there were talks on SPECTRE/PHANTOM and bulletproofs that were well presented and well received  
**\<sarang>** among many others  
**\<sarang>** We'll be able to integrate a brand-new batch verification technique for bulletproofs  
**\<suraeNoether>** yes, that was big news  
**\<suraeNoether>** PHANTOM is sort of an interesting layer on top of SPECTRE, which leads to probabilistically picking only honest blocks, interesting analysis led to that  
**\<suraeNoether>** also, it turns out bulletproofs are crazy adaptible  
**\<suraeNoether>** like, you can put SHA256 into a bulletproof and proof that you know the pre-image to a hash  
**\<suraeNoether>** without revealing the pre-image  
**\<suraeNoether>** etc  
**\<suraeNoether>** very interesting stuff  
**\<sarang>** Mhmm, it's a general tool for arithmetic circuits  
**\<sarang>** Anyone else working on fun research they wish to share as well?  
**\<hyc>** very cool... all of this raises a question in my mind - when do we consider "new" technology to be "mature" ?  
**\<hyc>** we're taking extra care integrating BPs because they're "new"  
**\<anonimal>** When we stop saying sha256 ;)  
**\<anonimal>** How does sha384/512 fit into the picture?  
**\<sarang>** Maybe when people stop being excited about it and consider it just a tool?  
**\<suraeNoether>** that's a good question hyc  
**\<suraeNoether>** here's the thing: our current impelmentation of bullet proofs is specifically a range proof implementation  
**\<suraeNoether>** iirc  
**\<sarang>** yes  
**\<suraeNoether>** so in order ot make it to other things, we need to make new implementations  
**\<suraeNoether>** so the failure model or threat model for each implementation will be different  
**\<sarang>** Not necessarily. The security model for ACs is pretty well defined  
**\<sarang>** We just happen to only be using these for range proof  
**\<suraeNoether>** the reason it is so important to validate our implemenation of BP-range-proofs is because if that breaks, then people can mint money. but if we implement some other NIZK proof of knowledge with a BP, we may not need to be so nervous, because the failure of the new implementation may be small in scale, as opposed to "free-mint-ALLTHEMONEY" sort of failure model  
**\<suraeNoether>** sarang yeah: for a general AC the implementation analysis i usppose will boil down to analyzing the AC  
**\<sarang>** yes  
**\<hyc>** ok, makes sense. thanks surae  
**\* suraeNoether** thumbs up  
**\<suraeNoether>** In addition to that, gmaxwell had a brilliant idea on bug bounties  
**\<suraeNoether>** but it only kind of works for their implementation of libsecp256k1, because they have a super robust test suite  
**\<suraeNoether>** the idea is to put a bug bounty up for altering the test suite in a way such that all current tests *still pass* but you have uploaded some sort of other test that fails despite that  
**\<suraeNoether>** so if I can put a new test into the test suite, call it D, and the test suite already has tests A, B, and C... if D is a failure but A,B,C still pass, then you essentially found a new test and a new weakness, so boom, you get the bug bounty  
**\<suraeNoether>** not super helpful in our situation because our test suites are not yet robust  
**\<suraeNoether>** but it's an interesting model of bug bounties and unit tests  
**\<sarang>** Perhaps we should move on to the roadmap to allow plenty of time to discuss?  
**\<suraeNoether>** yep  
**\<suraeNoether>** So, here's the deal  
**\<suraeNoether>** well one of many deals  
**\<suraeNoether>** sarang and I are sort of trying to figure out which direction MRL should go over the next year  
**\<suraeNoether>** and we need input. Other htan writing up the Monero Standards, and finishing the multisig paper... we sort of suffer a problem where work is done in jerks and starts  
**\<sarang>** It's partly the unfortunate nature of research  
**\<suraeNoether>** like a few weeks will go by with apparently not too much to get done, then BOOM all of a sudden it's time to implement and review bulletproofs or BOOM, rtrs ringct or whatever  
**\<sarang>** I mean, I want to continue a deeper investigation of DAG structures and consensus models  
**\<suraeNoether>** and that makes it feel like we're *reactive* instead of proactive  
**\<sarang>** I think that will become increasingly more important  
**\<suraeNoether>** yeah, i do too  
**\<suraeNoether>** i've been working on an adaptable population-driven model of a cryptocurrency network to assess dynamics and how various algorithms affect them. for example, if we want to study a different consensus model or a different PoW algorithm or if we want to study how difficulty metrics respond to changes in hashrate, etc  
**\<suraeNoether>** so we can model long-term scaling issues on a controlled simulation  
**\<sarang>** Smaller things include broader implementation of curve/scalar optimizations, but that's just housekeeping stuff  
**\<suraeNoether>** I also have been working on SPECTRE and finishing up the multisig paper  
**\<sarang>** Developing outreach curricula is a non-research side of things, of course, but I believe still important for this group  
**\<suraeNoether>** which, btw, after speaking with pietr wuille in Zurich and Stanford, two separate routes an attacker could take have been made clear to me. One of them our code already accounts for. The other is something I need to speak with luigi1111  and moneromooo about  
**\<sarang>** In what regard?  
**\<hyc>** multisig?  
**\<suraeNoether>** yes for multisig i mean  
**\<suraeNoether>** there is a simple-ish fix too  
**\<suraeNoether>** it's not a huge deal, but it's a big enough deal that I want to speak in private with folks about it before proceeding  
**\<gingeropolous>** would it be worth investing time in a network simulator? i know there are various blockchain / p2p sims out there, and it might be more of a technical issue (more admin than research) ....  
**\<sarang>** Depends on what we want to model  
**\<suraeNoether>** gingeropolous: that's sort of what i'm coding. i'm dissatisfied with several of the other pieces of simulation software out there  
**\<hyc>** are you talking open source projects that we can tweak to suit ourselves?  
**\<suraeNoether>** of course  
**\<hyc>** \^ to ginger actually  
**\<suraeNoether>** oh i see what you mean hyc  
**\<suraeNoether>** yeah my mistake  
**\<gingeropolous>** im imagining something public facing, with a GUI so an average user can go "oh lets drop the fee to 0.0001 and see what happens"  
**\<gingeropolous>** some web interface  
**\<suraeNoether>** ah so gingeropolous  
**\<gingeropolous>** but that could be phase 2  
**\<suraeNoether>** forget about fees, because i'm oinly looking at block dynamics  
**\<sarang>** You'd need a much deeper understanding of how nodes/users respond to such factors though?  
**\<suraeNoether>** not transaction dynamics  
**\<suraeNoether>** but the point is to eventually build it up to do that sort of thing  
**\<gingeropolous>** cool  
**\<hyc>** quite a lot of variables to model  
**\<suraeNoether>** animate it with ggplot or something to make pretty videos  
**\<suraeNoether>** hyc yep, it's a very general model, makes it suitable for arbitrary plug-n-play sort of analyses  
**\<suraeNoether>** but back to the roadmap  
**\<suraeNoether>** i guess what i'm asking is:  
**\<suraeNoether>** what do people want to see out of MRL over the next 6 months?  
**\<suraeNoether>** other than the completed multisig paper  
**\<sarang>** To be honest, I don't think the broader Monero community really has specific opinions on research directions, if that's what you mean  
**\<suraeNoether>** hyc you are never opinion-less  
**\<hyc>** lol  
**\<hyc>** All the things you already outlined sound like important goals to me. some of it sounds like we need more people.  
**\<moneromooo>** Modelling of spent output age. Take real distribution since last release, subtract the distribution we use, get the real distribution. See if it matches miller et al.  
**\<hyc>** "get the real distribution" --> how?  
**\<moneromooo>** Then try to do that at several historical times, every month maybe. And then deduce a formula to vary gamma function over time to use a new fake outdistribution.  
**\<moneromooo>** By subtracting the fake outs distribution from the real+fake one.  
**\<moneromooo>** May or may not be good enough, I don't know.  
**\<suraeNoether>** moneromooo: if we can get a bayesian estimate that updates each hard fork, that'd be great, but it requires being able to "unmask" transactions to see their real spendable output, or to base the estimate on transactions that have already been "unmasked", or to base the estimate on another currency. Each of these have obstacles, obviously  
**\<suraeNoether>** we need some ground truth underlying data to make an estimate, and monero doesn't really allow for that  
**\<ErCiccione>** The community is pushing a lot the "fee are too high" thing and i feel will be worst with time passing. Is it possible to produce some documentation to instruct people about how Monero fees work and what are the plans for the future on this matter?  
**\<moneromooo>** I was suggesting deducing the real outs distribution.  
**\<ErCiccione>** i also agree with hyc, er should search fore more researchers  
**\<sarang>** I hear gmaxwell is unattached =p  
**\<moneromooo>** This would be assuming all txes since last release use our fake outs distribution, though, which mymonero might not. Damn.  
**\<hyc>** to some extent, that's all good news - it means the system is no longer analyzable.  
**\<dEBRUYNE>** ErCiccione: I wrote a blog about it, you can link that  
**\<suraeNoether>** so, ErCiccione: yes, fees are an important part of the discussion around bulletproofs. you are corredct that we should at least put out a statement  
**\<suraeNoether>** hyc: without access to KYC/AML data from an exchange, anyway :D  
**\<suraeNoether>** i suppose we could ask for some sanitized data from one of the exchanges...  
**\<suraeNoether>** actually that's the first time that i've been hopeful about deducing true age distribution  
**\<suraeNoether>** but here's the REAL problem  
**\<ferretinjapan>** does the current research on multisig cover more complex things like assurance contracts? I think people would definitely be keen to help fund research in enabling those types of things.  
**\<suraeNoether>** ferretinjapan: the current paper will not cover that except lightly, but i would loooove to write up a document on "applications of multisig in nearly-smart contracts."  
**\<suraeNoether>** let's say there's a really massive anonymity set: the probability of picking any one of them out for usage in a ring is really really small  
**\<ferretinjapan>** Because that could mean 100% decentralised FFS :)  
**\<suraeNoether>** and if you pulled randomly from the whole blockchain...  
**\<suraeNoether>** then the true output you are signing with *probably* hasn't been used in a signature before  
**\<suraeNoether>** and more people got into monero recently rather than in 2014  
**\<suraeNoether>** so the output being spent is *probably* the youngest one  
**\<hyc>** true  
**\<suraeNoether>** and this will *always* be the case, unless we make wallet software actively try to de-anonymize the blockchain and we publish a blacklist of known-spent outputs  
**\<suraeNoether>** or unless we make wallet software that tries to pick as many transactions from "recently" that have not yet been used in any ring signature  
**\<suraeNoether>** another way of looking at this: the first ring signature an output appears in *is likely* to be the one that actually spends it  
**\<suraeNoether>** it's not so much a matter of the age of the output  
**\<ErCiccione>** dEBRUYNE: right, i forgot about that, but i still think we should be more informative about fees, i see a lot of confusion in the average user, at least on reddit,  
**\<suraeNoether>** but how many other ring signatures already reference it  
**\<suraeNoether>** ErCiccione: absolutely +1  
**\<suraeNoether>** okay, so fees are going on my list  
**\<suraeNoether>** for analysis and a nice big public explanation, probably drawing heavily on the blog post by dEBRUYNE  
**\<suraeNoether>** speaking of which dEBRUYNE send us all a link :D  
**\<dEBRUYNE>** https://getmonero.org/2017/12/11/A-note-on-fees.html  
**\<suraeNoether>** awesome thanks  
**\<dEBRUYNE>** re: spent age of outputs, perhaps we could take a look at other chains as well?  
**\<suraeNoether>** silur has been working on a C implementation of RTRS ringct  
**\<ferretinjapan>** dEBRUYNE, aeon could be a decent model, unless it requires 100% transparency...  
**\<suraeNoether>** dEBRUYNE: that comes with its own set of assumptions. i'm actually (I think) more comfortable asking "how long does an average 50 euro bill stay in someone's wallet before being spent?" than "bitcoin"  
**\<suraeNoether>** ferretinjapan: aeon suffers the same problem we do i think  
**\<ferretinjapan>** ah  
**\<suraeNoether>** has anyone else been working on anything they want to talk about?  
**\<dEBRUYNE>** ferretinjapan: was more thinking about LTC, BTC  
**\<dEBRUYNE>** suraeNoether: whislt that it true, it may be good for pointers  
**\<ferretinjapan>** yeah, LTC is actually a good one, had a similar mining start to monero.  
**\<suraeNoether>** even if we had a good estimate of true velocity of money, it changes over time so we would need something like a bayesian updating. https://en.wikipedia.org/wiki/Velocity_of_money  
**\<suraeNoether>** sarang, do you have anything else you want to chat about?  
**\<ferretinjapan>** suraeNoether, true, but I'd wager that LTC and XMR's normal distribution after a year is probably very similar. It's probably clsest you'd get without cracking open monero proper and looking inside.  
**\<sarang>** Assembling the formal audit materials as they become available  
**\<sarang>** I still wish we had a more concrete guideline for if/when/how we'll do such things in the future  
**\<sarang>** But for now this is a Good Thing  
**\<suraeNoether>** ferretinjapan: you are assuming it's normal... it isn't, it's heavy-tailed and possibly non-unimodal. :D but you are probably correct that LTC would be a better metric than BTC imho  
**\<suraeNoether>** i am curious about one thing  
**\<suraeNoether>** Up to your concerns about opsec/privacy, gimme a +1 if you are currently an undergraduate university student  
**\<ferretinjapan>** yeah, I'm definitely not saying it's perfect just close-ish compared to the rest of the premined coins out there ;)  
**\<suraeNoether>** ferretinjapan: i agree that litecoin could be a good proxy for monero for estimating otherwise unestimable statistics  
**\<suraeNoether>** i'd also be in favor of doing it for all transparent coins and obtaining a confidence interval  
**\* anonimal** question regarding the MRL over the next 6 months  
**\<anonimal>** I first got in contact with sarang back in late August about kovri work but nothing came of it.  
**\<anonimal>** That then lead to a late October chat about said kovri work but nothing came of it.  
**\<anonimal>** Should I just not count any kovri collaboration from the Noethers? I understand, no hard feelings.  
**\<anonimal>** We simply need more researchers.  
**\<ferretinjapan>** yeah, do some box plots on a couple dozen and you might get a ballpark figure that helps.  
**\<sarang>** anonimal to be honest I didn't think we'd have so much work with RingCT and BPs occupying time  
**\<suraeNoether>** i think you are right anonimal  
**\<sarang>** It has nothing to do with lack of interest  
**\<suraeNoether>** i recall that contact  
**\<sarang>** but I apologize if it seemed that way  
**\<suraeNoether>** anonimal: is there either an explanatory text or a link or something you would you mind giving us for a look?  
**\<suraeNoether>** depending on exactly what sort of questions you are asking, there may be intersection with other work we are doing  
**\<anonimal>** What explanatory text would you like exactly?  
**\<suraeNoether>** is there a thread someplace that birthed the idea behind kovri?  
**\<anonimal>** Oh. Well those IRC logs were unfortunately pasted to a now-defunct website. I can give TL;DRs if needed though.  
**\<anonimal>** Ideally our website/docs would explain everything you need to know but rehrar and I are still WIP with them.  
**\<suraeNoether>** ok, so i'll devote a few hours this week to learning about kovri to see *whether* i can help  
**\<suraeNoether>** keeping in mind the halting problem  
**\<suraeNoether>** (can never really know how long something is going to take until you do it).  
**\<anonimal>** How realistic/effective would a noether tweetnacl review be?  
**\<anonimal>** tweetnacl has had a lot of eyes  
**\<sarang>** You want additional eyes on it?  
**\<anonimal>** (relatively speaking, imo)  
**\<anonimal>** No, just asking your professional opinion on if that would be a cost-effective use of your time.  
**\<anonimal>** IIRC fluffypony wanted teetnacl in monero as some point. I'm not sure where that conversation ended though.  
**\<selsta>** some other “news”. Sumokoin team member confirmed me today that they will donate to the BP audit with some of the premine money. i don’t really believe it yet though lol  
**\<anonimal>** Crypto++ has recently implemented tweetnacl and, once they implement a crypto++-friendly interface, kovri will drop ref10 supercop for tweetnacl.  
**\<suraeNoether>** let me learn a little about tweetnacl, and then i can assess wheter going deeper will be a rabbit hole or ... not  
**\<anonimal>** ok  
**\<suraeNoether>** i haven't tried to ignore it  
**\<suraeNoether>** squeaky wheels and all that  
**\<suraeNoether>** i'm curious about how it works  
**\<suraeNoether>** but i don't want to go on a two month bender learning a new tech while current projects languish either  
**\<suraeNoether>** i think hiring an additional person would be fantastic, for the record  
**\<sarang>** Well it does the basic ed25519 operations suraeNoether as well as hashing operations  
**\<suraeNoether>** we could get a mathjobs.org employer account and put out a *real* call for applications  
**\<suraeNoether>** sarang: well that's nice  
**\<suraeNoether>** ok, anonimal thank you so much for bringing this up  
**\<suraeNoether>** one hard part about this job  
**\<sarang>** yes indeed  
**\<anonimal>** You're welcome. I'm just really excited to finally get to use it.  
**\<suraeNoether>** is that everyone has their personal pet project they want to see analyzed, some of them are important like multisig and kovri and some not so much, and so it's difficult to figure out where priorities should go to avoid context-switching, etc  
**\<suraeNoether>** sometimes it feels like no one knows what job sarang and i have. :P  
**\<suraeNoether>** we need a suresh noether  
**\<suraeNoether>** Okay, well  
**\<anonimal>** I think this tweetnacl business would come at the end of 6 months if even within the next 6 months. Too many other priorities imho  
**\<suraeNoether>** any other concerns, questions, gentle or not so gentle priority nudges folks want to bring up?  
**\<sarang>** If anything I'd like to devote time to a review of existing analyses of tweetnacl anonimal  
**\<sarang>** to at least get a better sense of its current place  
**\<anonimal>** ok awesome  
**\<dEBRUYNE>** \<suraeNoether> we could get a mathjobs.org employer account and put out a *real* call for applications \<= I don't think this will be efficient  
**\<dEBRUYNE>** Preferably you need someone that already has a passion for Monero  
**\<ferretinjapan>** I'll just say you guys are doing a great job keeping up with all these moving targets :)  
**\<suraeNoether>** dEBRUYNE: true  
**\<suraeNoether>** thanks ferretinjapan  
**\<suraeNoether>** oh my god tweetnacl is kind of crazy, i like it ...just reading a quick description  
**\<suraeNoether>** i love the idea of a hyper compact auditable li-berry  
**\<anonimal>** +1  
**\<sarang>** Yeah the key is auditable  
**\<suraeNoether>** well, we probably can't hire andytoshi out from under blockstream. :P  
**\<suraeNoether>** or rather, i'd rather not attempt that sort of game  
**\<suraeNoether>** i'd rather find someone who is very interested in monero and may be late grad school  
**\<suraeNoether>** hmm  
**\<suraeNoether>** i can construct a call for applications e-mail and send it to a few specific departments that are crypto + CS heavy in their math programs  
**\<ErCiccione>** suraeNoether: can you make a post somwhere public with the skills you guys need from a researcher? so i can directly link that to people who may be interested  
**\<suraeNoether>** yeah, i will make the call for applications public, probably, ErCiccione  
**\<suraeNoether>** anyway  
**\<suraeNoether>** I am probably going to hold off on that for at least two weeks, though  
**\<ErCiccione>** ok thanks  
**\<suraeNoether>** to think about what it is we will need 6 months from now  
**\<suraeNoether>** in a new researcher  
**\<suraeNoether>** it's a tough question, and if anyone has any thoughts, shoot me a line at suraeNoether@gmail.com  
**\<ErCiccione>** ok, so, in case, will directly give your contact for now  
**\<suraeNoether>** okay, so without further ado, I suppose we can bid adieu on this meeting.  
**\* suraeNoether** cringes  
**\<anonimal>** Thanks noethers, thanks everyone.  
**\<ErCiccione>** thank you for the updates guys, and awesome job as always :)  
**\<ferretinjapan>** same \^  