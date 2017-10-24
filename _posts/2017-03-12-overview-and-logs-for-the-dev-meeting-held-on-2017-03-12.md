---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-03-12
summary: C++11, 0.10.2.2 release, and dynamic block size algorithm
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

### Overview  

An overview [can be found on MoneroBase](https://monerobase.com/wiki/DevMeeting_2017-03-12).  

### Logs  

**\<fluffypony>** 1. Greetings    
**\<fluffypony>** ok cool  
**\<fluffypony>** agenda is at https://github.com/monero-project/meta/issues/51  
**\<fluffypony>** so to start, 1. Greetings  
**\<fluffypony>** hi  
**\<iDunk>** Hi  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** so mostly fiddly bits as we get ready for the 0.10.2.2 tag and release  
**\<fluffypony>** but we'll discuss that more in 4  
**\<fluffypony>** so 3. A discussion of PR 1816, & perhaps a more general discussion of C++ templating etc.  
**\<fluffypony>** relevant link: https://github.com/monero-project/monero/pull/1816  
**\<fluffypony>** so part of the ongoing discussion happening there is "how much C++11 do we adopt"  
**\<fluffypony>** and part of the discussion I wanted to have today is "how maintainable is C++11 for us"  
**\<moneromooo>** Maybe it's a bit less about C++11 and more about making things overcomplex.  
**\<fluffypony>** yes  
**\<moneromooo>** A bit of both I guess.  
**\<fluffypony>** so if I may, I thought I'd give my largely uninformed opinion, and then I'd particularly like to hear what hyc and moneromooo and tewinget and others feel  
**\<fluffypony>** I feel that a lot of this ties into our long-term goals as developers and contributors to the Monero Project, and where we'd like to take things  
**\<fluffypony>** some of this code complexity leads to easier management later on, but requires a steep learning curve now  
**\<hyc>** I'm not up on the latest in C++. so when it comes to deciding what features to adopt, I'll stay out of it  
**\<fluffypony>** or requires things to be a little harder to manage now, but this leads to an easier to manage set of classes / functions / etc. later on  
**\<moneromooo>** Are you saying that the code being more complex makes easier to maintain later ?  
**\<hyc>** IMO though most of this stuff is complex syntax for things that have much simpler approaches already  
**\<moneromooo>** OK, I can buy that.  
**\<binaryFate>** fluffypony: "this code complexity leads to easier management later on" <-- is that true for touching part of this very code too? Seems to be the opposite  
**\<fluffypony>** but if our goal is just to "maintain" the current code base with a view to rewriting later, then obviously this is a silly exercise right now  
**\<fluffypony>** so part of this discussion really comes down to: do we, as developers, feel that we can evolve this code to a modular, manageable set of libraries and tools? or is that a pipe dream and a parallel rewrite is a better idea?  
**\<moneromooo>** I think these are separate things (or easily separatable anyway).  
**\<moneromooo>** You can do modular/manageable with simple code and complex code, and spaghetti/unminageable with simple and complex code.  
**\<ArticMine>** My question here is: Which approach is the least likely to introduce bugs?  
**\<moneromooo>** So let's do one at a time.  
**\<endogenic>** do you guys know of Rich Hickey and his view/definition of simple vs complex, easy vs difficult?  
**\* moneromooo** feels wary  
**\<hyc>** I think a parallel rewrite is the way to go. least chance of breaking the current code base.  
**\<hyc>** least intrusive overall until we have something workable on the rewrite  
**\<fluffypony>** hyc just wants to rewrite everything in C :-P  
**\<hyc>** well. yeah ;)  
**\<fluffypony>** is a rewrite too ambitious a goal? do we want resources to focus on that and the current codebase effectively plateaus?  
**\<fluffypony>** (bearing in mind that there are lots of bits we can re-use, such as vast portions of the crypto / blockchainDB stuff)  
**\<moneromooo>** I'd rewrite bit by bit, if you want to rewrite.  
**\<hyc>** good question. I tink a rewrite is low priority until the curent codebase does everything we want. i.e., multisig + kovri and whatever else  
**\<pigeons>** is vtnerd here? last week he had the most to say about c++ technique. The main concern was who else is comfortable with review  
**\<moneromooo>** Look at 0mq, which is a rewrite of just the RPC protocol. It's been a year or something.  
**\<hyc>** true  
**\<binaryFate>** I and prolly many others have no grasp of the actual usage of epee in code base. What sort of workload are we talking about to replicate?  
**\<binaryFate>** ball park  
**\<moneromooo>** Shitloads :)  
**\<fluffypony>** 0MQ's kinda a bad example, moneromooo - tewinget has had stuff on his plate that has interrupted his ability to work on Monero  
**\<moneromooo>** Besides you have to have both work in the same binary if you want to fork from one to the other at some point.  
**\<fluffypony>** but in principle, yeah, this is a multi-year project  
**\<binaryFate>** ok...  
**\<fluffypony>** moneromooo: I wonder if we couldn't pull the project in as a submodule and just reference the common files in it that we need?  
**\<hyc>** well, if someone were on it full time it wouldn't be so bad  
**\<moneromooo>** Sure, and my default view, unless proven wrong, is that it'd DoS us.  
**\<fluffypony>** pigeons: I've pinged him, but he's not here atm  
**\<i2p-relay> {-olark}** I agree with hyc. A rewrite in C should only become feasible once the current codebase is "feature-complete" kovri, multisig, 0mq etc etc  
**\<fluffypony>** olark: the opposite might be true - the more "features" we add the harder it is to rewrite  
**\<fluffypony>** what if we approached it differently  
**\<i2p-relay> {-olark}** If what is being worked on can be ported to C without technical debt that is good too.  
**\<fluffypony>** what if we have a new project whose focus is to build libraries out  
**\<fluffypony>** so maybe it starts with a consensus library that can validate txs and blocks, and knows how to build txs and blocks  
**\<endogenic>** that’s almost exactly what i was typing  
**\<fluffypony>** and then the main Monero project uses that  
**\<hyc>** sounds reasonble  
**\<fluffypony>** and eventually the project becomes a collection of files that can be dropped because they're no longer needed, and just dumb interfaces that hook into libs  
**\<i2p-relay> {-olark}** A slow transition would be ideal  
**\<endogenic>** at that point their internal implementations can be replaced with C etc right?  
**\<ArticMine>** So the rewrite is done library by library  
**\<fluffypony>** it would be massively unrestricted, since everything is created from scratch and could even have (gasp) whitespace fixes  
**\<hyc>** I was thinking about refactoring the blockchainDB stuff. it should all be hidden behind an interface class. nobody outside of blockchainDB should be including db_lmdb.h or instantiating blockchainLMDB direcftly  
**\<fluffypony>** I'm not against doing it in C, and that is super portable, but by going that low-level on everything aren't we also making it harder on ourselves?  
**\<fluffypony>** hyc: I agree with that  
**\<endogenic>** did not intend to suggest C whatsoever  
**\<fluffypony>** endogenic: too late :-P  
**\<hyc>** right, pure C is my personal goal. I wouldn't impose that on the project.  
**\<moneromooo>** tbh, the idea of spending shitloads of time and effort to replace with the same, in a way that hardforks every single part of the consensus seems outrageous. The only reason it doesn't is because the dangling prize (a nice, bug free C implementation which didn't fork) is not.  
**\<hyc>** are you saying too much risk for too little reward? or possibility of no reward?  
**\<fluffypony>** well let's be brutally honest here: we didn't write this code, and parts of it are well-written whilst others are simply *not*  
**\<fluffypony>** (didn't write it initially I mean)  
**\<moneromooo>** Too much risk for a reward that's not too easy to quantify.  
**\<endogenic>** we’ll prolly be well served by enumerating exactly what interfaces we would need (i.e. solutions to what problems) in the process of judging risk-reward - cause there may be low hanging but high value fruit  
**\<fluffypony>** perhaps we need to consider it this way: at what point do we NEED a massive rewrite that gets rid of all the technical debt?  
**\<hyc>** yeah, sounds like we need an actual review.  
**\<fluffypony>** like I can't imagine there still being dredges of epee in 10 year's time  
**\<hyc>** look at all of the existing code, draw high level boxes around pieces that make sense.  
**\<binaryFate>** After features required for decent growth of the ecosystem are there, imo  
**\<hyc>** then walk away, if you zoom in on the boxes again, does the layout you would reasonably expect to see match what exists.  
**\<binaryFate>** So answer depends with you would trade those efforts against  
**\<binaryFate>** what  
**\<hyc>** so the assumption is that the code we have now actually works. i.e. is solid enough to continue building on top.  
**\<fluffypony>** hyc: perhaps that answer leads us to the next point in the meeting  
**\<fluffypony>** so let's open that up so that it can form part of the discussion  
**\<fluffypony>** 4. A Series of Unfortunate Events: the v0.10.2.x release failures, massive regressions, and serious issues. How do we do better in future?  
**\<fluffypony>** given how many issues we've had with 0.10.2.x, IS the code solid enough?  
**\<moneromooo>** This whole thing is assuming that a rewrite would be bug free, which is a preposterous assumption.  
**\<hyc>** true, most ground-up rewrites are worse than what you started with  
**\<binaryFate>** issues in 0.10.2 are due to new stuff not old ones, no?  
**\<moneromooo>** We'd have to go find a list, but I think so, mostly.  
**\<fluffypony>** moneromooo: no no, not bug free, but something with a more complete test suite, and easier to review / manage  
**\<moneromooo>** Writing more tests is completely independent of rewriting.  
**\<codehalo>** i am writing a few applications in Swift, and I had to create a lot of C bindings to the C++ code.  
**\<codehalo>** It would have been so much easier if the codebase was just C...  
**\<hyc>** ^^ for cross-language portability our public APIs should be C  
**\* fluffypony** ponders  
**\<codehalo>** the Swift framework for LMDB has been easier to get up and running  
**\<hyc>** not sure how we could have tested more. the batch-txn changes had been in testing for a couple months  
**\<fluffypony>** I have a suspicion that going C-only would somewhat restrict our potential contributor base  
**\<moneromooo>** Why ?  
**\<hyc>** with several live blockchain reorgs and no problem. had no way to suspect a race condition was lurking.  
**\<binaryFate>** Surviving in C is possible for every C++ coder, but writing proper C for cryptocurrency software, not  
**\<fluffypony>** moneromooo: I know competent C++ developers who are mediocre when working solely in C  
**\<codehalo>** As hyc said, at least have a strong C api available  
**\<fluffypony>** sure  
**\<binaryFate>** You can do crazy sneaky things in C in terms of malicious commits, look at the contests for that it's fun.  
**\<fluffypony>** I agree with that  
**\<moneromooo>** C++ too...  
**\<binaryFate>** Reviewers able to catch that, you'd have way less of them than in C++  
**\<binaryFate>** moneromooo not if you expect writer to write proper C++, then it's obvious if it's going low-level unnecessarily  
**\<moneromooo>** WTF.  
**\<moneromooo>** Why are half the reasons given above completely suprious ?  
**\<hyc>** I think we need to back away from C vs C++. the codebase is primarily C++ now.  
**\<hyc>** we deal with what we have.  
**\<endogenic>** i agree. porting to C for whole codebase seems an answer in search of a problem - bound to go badly - is it an API issue? or is it a performance issue? can C by applied selectively, establishing standalone libs, while enabling us to maintain the expertise, past testing, etc of the existing codebase?  
**\<fluffypony>** moneromooo: spurious?  
**\<endogenic>** imo the biggest problem coming into monero initially for me was “how do i integrate with this?” or “what specifically do i integrate with?”  
**\<moneromooo>** Maybe not the right word, but... I feel like half the reasons for a choice given by people above either don't apply, or also apply to the other choice.  
**\<codehalo>** api issue  
**\<moneromooo>** Like, you don't need C to write tests.  
**\<fluffypony>** moneromooo: no I was asking if that's what you meant, you said "suprious" :)  
**\<moneromooo>** Or if you require "proper C++", then you should require "proper C" when comparing maintainability of both.  
**\<moneromooo>** Oh yes, spurious.  
**\<fluffypony>** well look, I'd like Monero to become a collection of well written, well documented libraries, with bindings in many languages  
**\<hyc>** yes, fine.  
**\<endogenic>** spurious arguments really get a pony going  
**\<moneromooo>** :D  
**\<fluffypony>** so the public side of the API should be C, even if the rest of the code is C++  
**\<binaryFate>** moneromooo yes and I was saying there is less people able to do that in C than in C++  
**\<fluffypony>** lol endogenic  
**\<hyc>** do we really need integration at the object code level? wouldn't most integrations be via RPC?  
**\<fluffypony>** hyc: no, not for libraries  
**\<moneromooo>** To write underhanded code ?  
**\<endogenic>** hyc: one problem i found was needing to use the wallet2.cpp code  
**\<fluffypony>** consider a client written in Go that just wants to use the consensus library  
**\<endogenic>** still have that issue - Snipa did too  
**\<codehalo>** @fluffy yes. a lot of libraries is the key  
**\<hyc>** yeah  
**\<hyc>** actually I've started writing that in C to do the LMDB version  
**\<binaryFate>** moneromooo less people to review and prevent people to write underhanded code  
**\<fluffypony>** ok so being able to hook into things at an object code level is a requirement  
**\<fluffypony>** also as an idea  
**\<fluffypony>** what if the "rewrite" / refactor / library effort happened in the source tree?  
**\<hyc>** hmmm. binaryFate - in that regard, C++ *is* a superset of C. so if you can't recognize underhanded code in C, you wouldn't have seen it in C++ either.  
**\<moneromooo>** Less people to review C for underhanded code, than people to review C++ for underhanded code. Assuming we require proper/nice code for both (otherwise this is a spurious argument). Maybe. It doesn't sound like a very convincing argument though.  
**\<binaryFate>** hyc for most part of the code a commiter is expected to work at a level of abstraction that is way above that of C  
**\<hyc>** fluffypony wdy mean  
**\<moneromooo>** I'd be fine with a part-by-part rewrite as we go, as I said above.  
**\<pero>** there was a discussion of c++ and crypto on hn in the last week - wondering if anyone has seen it. if not, i'll drop a link after the meeting  
**\<fluffypony>** hyc: instead of a parallel rewrite in a separate project, it can be done in the source tree in a separate directory, and can rewrite / move files into that directory, as long as references are adjusted accordingly  
**\<fluffypony>** tks pero that would be appreciated  
**\<hyc>** strikes me as being hard to coordinate, but ok  
**\<moneromooo>** I'd keep them both plugged, and fork on a height. Because they're bound to behave differently in corner cases.  
**\<moneromooo>** (for the consensus changes anyway,  the rest can be changed at once I guess)  
**\<fluffypony>** moneromooo: then it may as well be done in a separate project, unless there's another reason to keep it in the source tree?  
**\<moneromooo>** Yes, because people won't exit monerod-c++ and restart monerod-c at the fork height all at once.  
**\<bigreddmachine>** doing it in the source tree... you'd have to be working on parts of the codebase that are basically set in stone at this point, or else really keeping up with codebase, no? otherwise, wouldn't it end up like some of the other things that have been worked on in a branch that then cause merging to be hell? I don't really know what I'm talking about, but that's been what it's seemed like on a few things fro  
**\<bigreddmachine>** m an outside perspective at least...  
**\<hyc>** yeah that's what I meant about tough to coordinate  
**\<moneromooo>** But maybe I missed the point you brought fluffypony ?  
**\<fluffypony>** bigreddmachine: yes it would cause merging hell, but we merge PRs quickly enough that it shouldn't be terrible  
**\<hyc>** when I've done this scale of changes on past projects, it was only after a code freeze. feature freeze.  
**\<fluffypony>** moneromooo: well I was thinking about the way we did the blockchainDB  
**\<fluffypony>** we first created this generic class  
**\<fluffypony>** and then did the LMDB implementation for that  
**\<hyc>** which is why I wouldn't bother to start here until we have kovri etc.  
**\<pero>** found it quicker than i thought i would - https://news.ycombinator.com/item?id=13807693  
**\<fluffypony>** and THEN went back and did the in-memory implementation for that class  
**\<moneromooo>** There was no fork for this, right ? People updated mostly at the same time, but with a long tail ?  
**\<fluffypony>** yes  
**\<fluffypony>** so the in-memory interface went from being *the thing you use* to having all its functions updated to exist behind blockchainDB  
**\<fluffypony>** which was effectively a refactor effort, more than anything else  
**\<moneromooo>** I kinda like doing it like that. Though the swapping at a fork adds security.  
**\<fluffypony>** yes 100%  
**\<fluffypony>** especially for libmonero-consensus or whatever  
**\<hyc>** ok. that sounds good for mid to long term  
**\<hyc>** what do we need to do now, for 10.2 ?  
**\<bigreddmachine>** why the need to swap at a fork? if the new implementation isn't 100% compatible, wouldn't it break on a resync when inspecting older-than-the-fork blocks? so fork or no, if there's a bug it's a mess?  
**\<fluffypony>** bigreddmachine: a corner case can come up 6 months after deployment  
**\<fluffypony>** before I get to hyc's question  
**\<moneromooo>** That seems to assume a non adversarial system.  
**\<bigreddmachine>** fluffypony: so a fork lets you make sure it's compatible for everything to date, but if a corner case came up later, the old version wouldn't matter?  
**\<fluffypony>** since vtnerd is playing around with the library stuff (conceptually), any objection to him working on this? we kinda want the library stuff for the lightweight remote wallet tool (ie. open-source MyMonero-like stuff)  
**\<fluffypony>** bigreddmachine: if you don't do it at a fork height then the old version might be widely deployed  
**\<bigreddmachine>** yep, okay makes sense, thanks  
**\<Slack> \<nanoakron>** moneromooo I’m not seeing any INFO messages about ‘synchronised OK’ or ‘new block candidate’ etc. at log-level 1  
**\<moneromooo>** I'm fine with that, sure. I'd ask to not rewrite too much stuff at once, though, just because it DoSes reviewers.  
**\<moneromooo>** Especially when the code is damn hard to read/review :/  
**\<hyc>** heh  
**\<fluffypony>** moneromooo: ok agreed  
**\<fluffypony>** I'll also ask him to consider manageability / reviewability  
**\<moneromooo>** (by people who don't know much recent C++)  
**\<moneromooo>** I'm sure he can't review it quickly :P  
**\<moneromooo>** er, can.  
**\<i2p-relay> {-JJAbr}** all in Matlab, I suggest  
**\<fluffypony>** LOL  
**\<bigreddmachine>** JJAbr - I can finally review something!  
**\<hyc>** there's an LMDB driver for Matlab, fine with me :P  
**\<moneromooo>** For future things to discuss, I think it would be best if we could discuss them one at a time when they're not intertwined.  
**\<moneromooo>** Like, test coverage is unrelated to C or C++, rewrite or not.  
**\<hyc>** true  
**\<moneromooo>** Just merging them makes it harder to decide each.  
**\<i2p-relay> {-JJAbr}** I'm not joking  
**\<hyc>** I think we got sidetracked by C vs C++  
**\<fluffypony>** JJAbr: when we have more libraries then that's fully feasible  
**\<fluffypony>** moneromooo: that's fair  
**\<i2p-relay> {-JJAbr}** I'm somehow visionary, write it to Matlab, generate it into C/c++  
**\<fluffypony>** I think we should fork Rust and create our own programming language  
**\<i2p-relay> {-JJAbr}** check it with Polyspace, and it works  
**\<fluffypony>** with blackjack and hookers  
**\<moneromooo>** About tests, there's a set of functional tests that's long dead. It does transfers using wallet2 and daemon.  
**\<moneromooo>** OK, nevermind.  
**\<i2p-relay> {-JJAbr}** Visionary = see what automotive world currenty do  
**\<i2p-relay> {-JJAbr}** does  
**\<endogenic>** so confused  
**\<hyc>** automotive world writes millions of lines of code just to control an engine. that's not a good model.  
**\<pigeons>** who is working on the ethereum solidity port? :P  
**\<endogenic>** i am  
**\<i2p-relay> {-JJAbr}** "just to control an engine" = simple?  
**\<endogenic>** JJAbr: this is a dev meeting tho  
**\<endogenic>** can we chat afterwards?  
**\<i2p-relay> {-JJAbr}** you don't know what youìre talking about  
**\<i2p-relay> {-JJAbr}** anyways, sorry for the disturb  
**\<pigeons>** motion to move to next topic  
**\<fluffypony>** ok  
**\<i2p-relay> {-JJAbr}** you're talking about refactoring? do you know about what're you talking about?  
**\<endogenic>** JJAbr: yes  
**\<endogenic>** thanks  
**\<fluffypony>** 5. Code + ticket discussion / Q & A  
**\<i2p-relay> {-JJAbr}** ok  
**\<i2p-relay> {-JJAbr}** sorry to all  
**\<fluffypony>** so going back to hyc's question  
**\<fluffypony>** we're ready to tag 0.10.2.2  
**\<fluffypony>** except for the race condition stuff  
**\<fluffypony>** and I think there are two PRs that I need to merge  
**\<fluffypony>** if we get the race condition stuff done tonight then we can tag and re-start builds, finalise actual release tomorrow  
**\<moneromooo>** And a fix for the fluffy block thing smooth found earlier today.  
**\<hyc>** isn't that odd, fluffy blocks shouldn't have been live on mainnet yet  
**\<moneromooo>** Some people have been enabling it on mainnet anyway.  
**\<hyc>** ok  
**\<moneromooo>** Which, in this case, is good, because we found a couple bugs without having it fully on :P  
**\<binaryFate>** note fluffypony in front of me is busy IRL  
**\<fluffypony>** sorry about that  
**\<fluffypony>** so to move on to 6. Any additional meeting items  
**\<Slack> \<nanoakron>** Hope you get to see Bruges sometime FP - lovely city  
**\<fluffypony>** does anyone have anything else to add?  
**\<Slack> \<nanoakron>** Not here  
**\<fluffypony>** I think we have a fairly good idea as to how we can move forward, and also what's required for the release  
**\<hyc>** cool  
**\<fluffypony>** which brings us to 7. Confirm next meeting date/time  
**\<Slack> \<nanoakron>** :)  
**\<fluffypony>** March 26th?  
**\<fluffypony>** 2 weeks from now  
**\<moneromooo>** Well, we've not talked about how to make things sturdier.  
**\<fluffypony>** well  
**\<fluffypony>** I think the current release is obviously urgent, as it fixes bugs  
**\<moneromooo>** Except when I started mentioning existing tests, but chat was spammy so got dropped.  
**\<fluffypony>** but maybe the next release we need to set some testnet time frame  
**\<Slack> \<nanoakron>** What would you like to see implemented on that front moneromooo?  
**\<fluffypony>** like freeze it, and then do 4 weeks on testnet  
**\<fluffypony>** can always tag an older commit  
**\<moneromooo>** There's also a possibility to branch when doing a release, so you can cherry-pick simple fixes.  
**\<moneromooo>** That way, simple fix releases don't also come with new features that can also be buggy.  
**\<fluffypony>** as long as the version's bumped  
**\<fluffypony>** branching it for testing is not a bad idea  
**\<moneromooo>** Also, there aren't too many people on testnet, so stuff just ends up being tested on mainnet when it's released anyway (beyond obvious stuff).  
**\<moneromooo>** nanoakron: those tests aren't run, they've been disabled for a long while, I have no idea if they even work.  
**\<moneromooo>** It was already a fairly massive effort to bring all the core tests back to life...  
**\<Slack> \<nanoakron>** Oh right  
**\<Slack> \<nanoakron>** Eek  
**\<moneromooo>** I think 0MQ RPC tests would be nice, since everything's changed there AFAICT.  
**\<binaryFate>** Why not discuss this on a release-basis prior to release rather than fixing principles? Sometimes a long freeze may be superfluous, but for instance something touching fees and block sizes could use thoroughly-discussed different conditions on testnet  
**\<moneromooo>** Something which might be helpful is a user simulator.  
**\<Slack> \<nanoakron>** Unfortunately @binaryfate the fee/block size issue, whilst it really really should be analysed and studied for a while to ensure it’s the right solution for the long run, is hindering us from growing capacity now :(  
**\<ArticMine>** But one could take a two stage approach on the fee blocksize issue  
**\<ArticMine>** A one time increase to 250000 byte min blocksize and adding the 4x fee level  
**\<Slack> \<jollymort>** +1  
**\<bigreddmachine>** moneromooo: user simulator, as in something just creating random txs and such? i'm happy to make that and run on my desktop. it's already connected to testnet  
**\<ArticMine>** Then apply jollymort's proposal from 25000 to 125000 as the second stage  
**\<huskar>** moneromoo: a user simulator can be written as a system of time dependent differential equations  
**\<moneromooo>** bigreddmachine: yes, something that actually tests the testnet. Snipa has one. It's best when run on a local testnet though, so as not to spam the main one too much :)  
**\<Slack> \<nanoakron>** @ArcticMine @jollymort ok :)  
**\<pero>** does testnet need nodes?  
**\<ArticMine>** This allows more careful review of 2) while addressing the immediate issue also  
**\<Slack> \<jollymort>** 250kB would make a huge difference by itself; it would reduce the min.fee 4-times and reduce the size issue  
**\<Slack> \<jollymort>** so you could set a x4 as the default  
**\<Slack> \<jollymort>** and it would be the same old 0.3$  
**\<Slack> \<jollymort>** then, the pools could use the min.fee  
**\<bigreddmachine>** i was working on a testnet faucet - it's basically done, just need to deploy - but i could easily add something that just sends out a tx or two every 5 minutes or something like that, just to create some volume  
**\<Slack> \<jollymort>** and normal users the x4 fee  
**\<Slack> \<jollymort>** so normal users never wait  
**\<Slack> \<jollymort>** and pool payments sit in the mempool until regular users clear out  
**\<ArticMine>** Without an increase in the default fee  
**\<Slack> \<nanoakron>** What we don’t want is to be stuck in some philosophical rut like a certain other cryptocurrency…we need agreement (which I’m pretty sure we all have) that an algorithmic determination of block size is better than a human one  
**\<Slack> \<jollymort>** we have that, but we made a unintended anomaly  
**\<Slack> \<jollymort>** exibit: https://raw.githubusercontent.com/JollyMort/monero-research/master/Monero%20Dynamic%20Block%20Size%20and%20Dynamic%20Minimum%20Fee/Images/Fig3.1-7.png  
**\<Slack> \<jollymort>** no wait, wrong chart  
**\<ArticMine>** an increase in tx size to ~13000 bytes from ~500 bytes  
**\<Slack> \<nanoakron>** Yes, and a binomial distribution thereof  
**\<Slack> \<jollymort>** this one: https://raw.githubusercontent.com/JollyMort/monero-research/master/Monero%20Dynamic%20Block%20Size%20and%20Dynamic%20Minimum%20Fee/Images/Fig3.1-6.png  
**\<Slack> \<jollymort>** the spike was introduced solely by RCT  
**\<Snipa>** The user simulator I have isn't particularly complex.  I may see about writing a more complex one in the future if it's something we need.  
**\<Slack> \<jollymort>** the green one was pre-RCT  
**\<moneromooo>** Dunno if we need more complex for now. Yours did find bugs already :)  
**\<Slack> \<jollymort>** with 250kB that spike would surely be less severe  
**\<ArticMine>** That is why I propose the two stage approach  
**\<Slack> \<jollymort>** i can draw the charts if you want  
**\<Slack> \<jollymort>** make it part of the paper, too  
**\<fluffypony>** can we formally end the meeting and take meeting bot offline?  
**\<fluffypony>** we're getting out of meeting stuff anyway  
**\<ArticMine>** Sure  