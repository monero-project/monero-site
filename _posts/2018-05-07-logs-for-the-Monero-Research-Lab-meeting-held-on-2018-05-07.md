---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-05-07
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<sara﻿ng>** OK, it's time to begin  
**\<sarang>** Welcome to everyone; hello  
**\<sgp\_[m]>** Hi!  
**\<sarang>** Calling others: hyc suraeNoether anonimal endogenic binaryFate fluffypony luigi1111 luigi1113 rehrar[m] monerigo[m] gingeropolous dEBRUYNE  
**\<sarang>** and many others no doubt  
**\<sarang>** s/monerigo[m]/moneromooo  
**\<binaryFate>** présent  
**\<sarang>** I suppose we can discuss recent updates and such  
**\<sarang>** I have been focusing on noninteractive refund transactions  
**\<sarang>** it's surprisingly tricky to get right  
**\<sarang>** The idea of whether or not to hide block heights has big implications on size and complexity  
**\<sarang>** and also will affect the use of old outputs  
**\<theRealSurae>** Hey everyone, sorry I'm late (and not using my registered nick)  
**\<sarang>** A good higher-level question is whether we insist that having refund transactions is enough of a priority  
**\<sarang>** Hello fake suraeNoether  
**\<theRealSurae>** heh  
**\<sarang>** \*enough of a priority to devote big plumbing-level changes  
**\<sarang>** these questions have consumed me as the Whale consumed Ahab  
**\<sarang>** and, like Ahab, I spend much time in the company of Starbuck(s)  
**\<theRealSurae>** gross  
**\<sarang>** theRealSurae: what has consumed you lately?    
**\<UkoeHB>** it feels like there should be an easier way to hide amounts. Maybe worth mulling for some time  
**\<sarang>** UkoeHB: other than commitments?  
**\<rehrar[m]>** Hi  
**\<UkoeHB>** Yeah. Maybe a shift in perspective. Baseless intuition  
**\<silur>** what  
**\<sarang>** Well, the current Best Way is homomorphic commitments + range proofs to ensure balance  
**\<theRealSurae>** I've been thinking about koe's reduced mlsag and how we might be able to batch-verify ring signatures with bulletproofs. and i've been speaking with a professor at clemson university about the possibility of starting a paid project for a grad student to invent a new elliptic curve with 2^255-19 points on it, or to come up with a similar sort of variant to secp256k1  
**\<theRealSurae>** yeah, I think we are going to experience reduced returns in terms of hammering bulletproofs for improving our amount strucutres  
**\<sarang>** theRealSurae: BPs to batch verify our current MLSAG scheme?  
**\<silur>** oh yea the curve order question you asked  
**\<theRealSurae>** so, i think it'd be really really helpful for both bitcoin and monero to have alternate curves  
**\<theRealSurae>** ohgod  
**\<theRealSurae>** other than that and the multisig dump I made the night before yesterday, this week has been consumed by editing papers for other folks. Koe and my old advisor and another document. lots of reading this week  
**\<sarang>** What are your thoughts on refunds?  
**\<UkoeHB>** and thank you for that :) incredibly helpful  
**\<sarang>** UkoeHB: any big changes to your excellent paper?  
**\<UkoeHB>** Well we found out monero doesn't even use borromean sigs  
**\<UkoeHB>** genBorromean should be genSAGs  
**\<UkoeHB>** Or something  
**\<sarang>** SAG?  
**\<theRealSurae>** I've been thinking a lot about the refund structure with timelocks, and I'm trying to figure out exactly whether we have a novel "invention" in these refund transactions or whether tit is equivalent to a timelock+multisig situation  
**\<UkoeHB>** spontaneous anonymous group sig. Like LSAG but no key images  
**\<sarang>** for range?  
**\<UkoeHB>** Yeah  
**\<UkoeHB>** Check ringCT.cpp genBorromean  
**\<sarang>** Yeah I'm familiar with that code  
**\<UkoeHB>** It's 33% larger range proofs than a real borromean setup  
**\<theRealSurae>** ... i need more details about that, koe, if you don't mind...  
**\<sarang>** heh  
**\<sarang>** theRealSurae: big thing is non-interactivity  
**\<sarang>** I don't need the recipient's cooperation  
**\<UkoeHB>** I'll see what I can do  
**\<theRealSurae>** thanks koe, i'm not in a rush on that though...  
**\<theRealSurae>** I want to remind everyone that I'll be mostly away from the internet from tomorrow until the 19th, with some intermittent access.  
**\<moneromooo>** luigi1111: is this (genBorromean doesn't actually generate Borromean sigs) correct ?  
**\<UkoeHB>** yup have fun :). Vacation right?  
**\<theRealSurae>** i'm not the sort who can really put work down, but i'm trying, briefly. i managed to write up a skeleton of the unforgeability proof for multisig and hand it off to sarang to familiarize himself with the musig approach  
**\<binaryFate>** Zcash is also coming up with their own curve so as to speed up the particular things they need to. I find it worrying if the trend is that every project cooks up their curve to suit their particular needs.  
**\<theRealSurae>** and, like I said, I'm communicating with some folks at Clemson  
**\<sarang>** Yeah I've been revisiting the original musig paper  
**\<luigi1111>** Not that I know of  
**\<theRealSurae>** binaryFate: why would this be worrying?  
**\<luigi1111>** theRealSurae: 2^255-19 isn't the number of points  
**\<theRealSurae>** you are right, it's the group order  
**\<binaryFate>** against the "don't invent your own crypto", and light years away from typical review process for curves  
**\<theRealSurae>** right? i misspoke  
**\<vtnerd>** no, 2^255-19 is the prime field  
**\<sarang>** I hear it's a kind of cake  
**\<sarang>** Or that feeling when your leg falls asleep and you stand up  
**\<luigi1111>** Group order is l  
**\<luigi1111>** 2^252+blah  
**\<sarang>** aaaanyway  
**\<theRealSurae>** i confess I tend to think of our group as a scrambled mirror image of Z\_q, despite addition of points not even landing on the subgroup.  
**\<sarang>** So theRealSurae is working on unforgeability  
**\<sarang>** I am figuring out if noninteractive new-output-style refunds are worth it  
**\<sarang>** Other fun times?  
**\<theRealSurae>** binaryFate: yeah, I see that  
**\<sarang>** binaryFate: do you have any information on the Zcash efforts? I wasn't aware of their work  
**\<theRealSurae>** binaryFate: eventually that curve, even if proven to satisfy our desired properties, will have to be implemented, and the dangers or crappy implementation are huge... but I don't think that should discourage research into new curves and new proof methods using isomorphic curves  
**\<theRealSurae>** yeah, I wasn't either. I thought it was just Blockstream looking for a variant of secp256k1 so far  
**\<UkoeHB>** oh i messed up - they are borromean ugh  
**\<theRealSurae>** that's a relief koe!  
**\<sarang>** UkoeHB: what led to believe otherwise?  
**\<luigi1111>** ^  
**\<UkoeHB>** misreading code like a fool  
**\<UkoeHB>** thought this hash\_to\_scalar(L[1]) meant an array of hashes for each L[1], instead of a hash of the entire array  
**\<sarang>** Good thing hashes aren't important to borromean sigs /s  
**\<sarang>** If there aren't any other big topics to discuss, we could certainly return to refunds or previous topics  
**\<sarang>** There were suggestions from luigi1111 that the refunds needed for payment channels would be possible purely w/ timelocks + multisig  
**\<binaryFate>** will look for some link on the zcash curve thing. It's part of their roadmap to reduce overhead to generate z-transactions iirc  
**\<sarang>** I do not see how that would be possible without interaction from both parties, or a third-party arbiter  
**\<sgp\_[m]>** I just want to mention that I'm working on preserving the integrity of outputs held by mining pools  
**\<sarang>** But I'd love to be convinced otherwise  
**\<rehrar[m]>** MRL corporate cheer!  
**\<sarang>** sgp\_[m]: in response to the linking work?  
**\<luigi1111>** It does require interaction at the start  
**\<sarang>** right  
**\<sarang>** it'd have to  
**\<sarang>** So the recipient pre-signs for the refund?  
**\<rehrar[m]>** I have a bit of other ZCash news.  
**\<sgp\_[m]>** sarang kinda, yeah. I don't have too much to mention now though  
**\<sarang>** How does the network verify the spend of the originally-intended output?  
**\<sarang>** sgp\_[m]: ok, keep us updated  
**\<sneurlax>** I've contacted ehanoc re: the "transaction tree" python toolkit and we will collaborate to deliver that after I finish the scraping tool which moneromooo asked for.  mooo, I'll be sending you results this week  
**\<sneurlax>** sorry to interject  
**\<sarang>** sneurlax: excellent! That'll provide good data  
**\<theRealSurae>** rehrar[m]: tell us?  
**\<theRealSurae>** sneurlax: that's fantastic news  
**\<rehrar[m]>** ZCash wants to open a grant proposal jointly with a Monero community member (that'd be me atm) to donate a considerable sum of money to some FFS proposals.  
**\<sarang>** What types of FFS do they want to fund?  
**\<theRealSurae>** how would that work? would you have discretion over donating the funds?  
**\<rehrar[m]>** https://twitter.com/socrates1024/status/993252058923925506?s=19  
**\<theRealSurae>** i'll almost always take free money if it's no-strings  
**\<sarang>** Aw shucks, they like us!  
**\<theRealSurae>** that's... fantastic  
**\<rehrar[m]>** Dunno. When next round of bp auditing funds?  
**\<rehrar[m]>** We can out it up, raise the amount, and take out right away. Superior Coin also wants to help if you recall.  
**\<rehrar[m]>** Perhaps we can also get subaddresses audited?  
**\<theRealSurae>** hmm  
**\<sarang>** Yeah, was thinking of waiting until closer to the finalization, but I suppose there's little advantage if we can coordinate w/ OSTIF quickly  
**\<theRealSurae>** it seems like a lot of projects want to funnel their research funding through the Monero FFS  
**\<binaryFate>** the harder we criticize them the more they like us... 10k$ is not that much compared to amounts raised typically anyway  
**\<sarang>** It's a nice gesture of community spirit though  
**\<sgp\_[m]>** I think the best ones are the hardware wallet (which should work with Zcash iirc) and code audits  
**\<rehrar[m]>** They're masochists binaryfate. If we criticize harder they'll give more.  
**\<sarang>** A subaddress audit depends highly on the scope  
**\<sarang>** The BP scope was narrow-ish  
**\<theRealSurae>** binaryFate: yeah, it seems like a largely symbolic thing, but also: they've been really encouraging me and sarang to encourage you guys to ask for grant money.  
**\<theRealSurae>** rehrar[m]: i should just take zooko out to a bdsm club in denver, see if they offer us six or seven figures. :P  
**\<rehrar[m]>** In return , we can send them Monero stickers to put on their laptops.  
**\<sarang>** something something meat market  
**\<theRealSurae>** meat meat something market  
**\<binaryFate> \<rehrar[m]>** In return , we can send them Monero stickers to put on their laptops. <-- they have one at least, we've put one on zooko's back at CCC without him noticing  
**\<sarang>** I'll be interested to see how the 10K is disbursed  
**\<theRealSurae>** sarang: Is the implication that it would totally be up to our discretion? that's sort of what i'm getting...  
**\<rehrar[m]>** Zooko is a dude.  
**\<rehrar[m]>** I chilled with him in Colorado.  
**\<rehrar[m]>** Can neither confirm nor deny Verge dev there too.  
**\<theRealSurae>** What if we take the 10k, pay for a semester of a grad student working with some cryptographers to invent three new curves, a variant for secp256k1, a variant for x25519, and a variant for zcash's thing  
**\<sarang>** tall order  
**\<theRealSurae>** maybe  
**\<endogenic>** sorry rehar  
**\<theRealSurae>** it'd guarantee that student would spend the rest of his time in grad school working on that sort of thing  
**\<theRealSurae>** which I think would be a valuable thing: seed the mind-virus among as many researchers as possible  
**\<binaryFate>** They're not even asking for doing joint work with zcash stuff at this stage apparently. Would just channel to Monero topics entirely if possible.  
**\<pwrcycle>** Hi all.  
**\<binaryFate>** Anyway grad student is a great idea  
**\<theRealSurae>** binaryFate: yeah, that's the inference I made  
**\<rehrar[m]>** I'll talk with Miller.  
**\<rehrar[m]>** See how he wants to do the grant proposal.  
**\<theRealSurae>** binaryFate: the problem then is picking the student/school  
**\<pwrcycle>** Funding grant money for school research seems cool. Pinning all the hopes on one grad student seems like a bad idea.  
**\<theRealSurae>** rehrar[m]: please do, maybe CC me... I can hook him up with at least two cryptographers at Clemson who may be interested  
**\<theRealSurae>** pwrcycle: yeah, you'd pick by advisor more than student  
**\<rehrar[m]>** Maybe we can get some people to make a FFS that should have made one a while back in exchange for ZCash paper  
**\<rehrar[m]>** Like dEBRYUNE  
**\<rehrar[m]>** Then again, what use have gods for our petty currencies.  
**\<binaryFate>** Btw having some sort of pulic call for the paid internship circulating in academic circles is as important as the thing actually happening, in terms of mind-virus spreading  
**\<rehrar[m]>** Nothing more from me.  
**\<theRealSurae>** rehrar[m]: you are the greatest orator of our time  
**\<theRealSurae>** binaryFate: TRUE point  
**\<theRealSurae>** very true  
**\<theRealSurae>** sarang  
**\<sarang>** yo  
**\<theRealSurae>** when I get back I'm going to look into putting job postings on mathjobs.org  
**\<theRealSurae>** i was about to ask you to do it while i'm gone, but it's not urgent and there's no need to delegate. :P if you're curious, though :D  
**\<sarang>** I think using mathjobs is a really good idea for pure math applicants  
**\<theRealSurae>** there are lots and lots of applied jobs on there too  
**\<theRealSurae>** you should check it some time, but  
**\<theRealSurae>** creation of a curve is at the intersection of applied algebraic geometry and pure cryptography  
**\<sarang>** right, that wasn't what I meant  
**\<theRealSurae>** so it's sort of both pure and applied  
**\<theRealSurae>** oh ok  
**\<sarang>** I mean to get solid reach to academics  
**\<sarang>** that's the obvious choice  
**\<theRealSurae>** yep  
**\<sarang>** They can send us a list of all the points on their new curve, for us to check  
**\<binaryFate>** good old emails circulating between labs and advisors ("if you have a really good students, consider asking them to apply. And please forward blabla") is also worth it. Reaches more senior people than a job posting probably read primarily by students directly.  
**\<sarang>** Oh, so I've been seeing random reddit postings about deep reorgs  
**\<sarang>** But I haven't looked into it at all  
**\<sarang>** Anyone know anything?  
**\<selsta>** also articles are starting to come out https://www.trustnodes.com/2018/05/07/monero-allegedly-attack-claims-double-spends-orphaned-chains-21-block-deep  
**\<moneromooo>** I think it's fixed now (no PR yet).  
**\<sarang>** Do you know the cause?  
**\<theRealSurae>** is it known what the issue was?  
**\<sarang>** jinx  
**\<binaryFate>** The +20-blocks fork mentioned in the post is not an actual fork, you only see that when syncing. But somebody is fiddling with decent HR  
**\<sarang>** buy me a DietMonero  
**\<theRealSurae>** i thought the first few reports were possibly the OP for some reason  
**\<binaryFate>** moneromooo link or summary?  
**\<moneromooo>** Some init wasn't done in some cases when adding a tx.  
**\<sarang>** Yeah, I want to be able to give correct information  
**\<moneromooo>** So that was causing the tx to be rejected though it is valid.  
**\<theRealSurae>** hrmm  
**\<sarang>** OK, so that explains the "double spend" FUD  
**\<sarang>** The long-chain reorgs are just related to initial sync?  
**\<sarang>** It was noted that there wasn't any big spike in hashrate  
**\<sarang>** so it's not outsiders coming online and futzing  
**\<moneromooo>** If a pool doesn't accept a valid tx, it will continue mining on its own chain till it stops doing so.  
**\<sarang>** OK, so it's a single cause with these two effects?  
**\<moneromooo>** What two effects ?  
**\<sarang>** Well the reports I've seen have complained about apparent double spends (rejected tx) and long-chain reorgs  
**\<theRealSurae>** i feel like if a selfish miner was going to release a chain in an attack, the hashrate wouldn't necessarily look different to an observer, especially if the attacker had 33%+ attack power and was clever with their timestamp choice...  
**\<moneromooo>** I don't know anything about double spends.  
**\<moneromooo>** Though if a merchant is only connected to that pool, you could swindle it.  
**\<moneromooo>** The merchant would have to be only connected to that pool though, but that's not a new attack.  
**\<sarang>** Yeah that's just being cavalier  
**\<theRealSurae>** https://www.trustnodes.com/2018/05/07/monero-allegedly-attack-claims-double-spends-orphaned-chains-21-block-deep  
**\<theRealSurae>** i don't like that article for a variety of reasons, but  
**\<sarang>** Yeah that's the article I keep getting linked to  
**\<sarang>** it's based on some r/monero complaint posts  
**\<sarang>** so naturally it will be accepted as gospel and spread widely  
**\<theRealSurae>** it would be helpful to get more information from the specific users making this complaint  
**\<sarang>** A random user says one thing and the devs who know things say another thing! So there's no way to know!  
**\<binaryFate> \<sarang>** It was noted that there wasn't any big spike in hashrate <-- if someone is purposefully mining on alternative blocks rather than winning chain, we would not "see" the HR spike as it does not make blocks coming faster  
**\<moneromooo>** You'd see a hashrate spike downwards.  
**\<binaryFate>** only if that miner was mining before no?  
**\<moneromooo>** Yes.  
**\<theRealSurae>** not necessarily; an attacker with exactly 50% hash rate and honest timestamps will appear to be invisible. an attacker with lower hash rate could mess with timestamps slightly and appear invisible. an attacker with too low of a hash rate couldn't manipulate his timestamps enough to hide his activity  
**\<theRealSurae>** (not necessarily re: downward spike)  
**\<binaryFate>** Can we check how long it took them to mine a particular altchain of N blocks by checking logs on other nodes on when the last block in their chain got known to peers?  
**\<theRealSurae>** we can put a bound on it, for sure, and we can use that to estimate the hash rate power they have  
**\<theRealSurae>** ok y'all I gotta go  
**\<theRealSurae>** have a good week and a half!  
**\<binaryFate>** same!
