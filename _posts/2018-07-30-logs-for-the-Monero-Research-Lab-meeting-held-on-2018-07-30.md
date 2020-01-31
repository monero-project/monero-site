---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-07-30
summary: Sarang work, others work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** We can start now  
**\<sarang>** Greetings  
**\<sarang>** This will be a brief meeting to catch up on recent research  
**\<sarang>** All bulletproof audits have completed  
**\<sarang>** Kudelski's final report is posted. QuarksLab is updating theirs with our responses before releasing their final version. Benedikt Bunz is updating his similarly with our feedback.  
**\<silur>** yaay  
**\<sarang>** I continue to work on some new ring signature algos from Ruffing et al.  
**\<oneiric\_>** very nice, excited to read the most recent reports  
**\<sarang>** lots of fun building blocks with that scheme  
**\<sarang>** and suraeNoether has provided a multisig paper for me to review  
**\<sarang>** that is also in progress  
**\<sarang>** any questions on these things in particular?  
**\<silur>** let's collaborate on that I have an implemaentation on the first paper version  
**\<silur>** C, openssl  
**\<sarang>** silur: sure, the initial parts of the prototype are on my repo, rupol branch, in python  
**\<silur>** been working on rtrs for a long time  
**\<silur>** okay, will write you after the meeting  
**\<sarang>** anything in particular to share regarding your rtrs silur ?  
**\<silur>** well we just have to update it to the new-new-new construction  
**\<silur>** I only have the unpublished internal version of the first paper  
**\<sarang>** righto  
**\<sarang>** We shall talk afterward  
**\<sarang>** Any other interesting work to be shared?  
**\<endogenic>** anyone see a problem with running openssl transpiled via emscripten in a browser?  
**\<sarang>** I feel extremely not qualified to answer that properly  
**\<andytoshi>** endogenic: openssl, transpiling, emscripten, and browsers are all bad for security  
**\<endogenic>** yep, no worries, just throwing it out there  
**\<sarang>** lol  
**\<endogenic>** then why does monero use it lol  
**\<silur>** where?  
**\<andytoshi>** monero is writtcen in C++  
**\<endogenic>** common/util.cpp (LOL) #include <openssl/sha.h>... ringct/bulletproofs.cc #include <openssl/ssl.h> ...  
**\<silur>** yea but where do we transpile it with emscripten?  
**\<endogenic>** just asking  
**\<silur>** I don't really recommend that  
**\<endogenic>** any specific reason?  
**\<silur>** don't know about emscripten internals but we used to have a thing called openssl code health tuesdays  
**\<silur>** after a month we eliminated 40K dead lines and 8 dead platforms  
**\<silur>** I think that's a reason not to include it in browsers  
**\<endogenic>** emscripten handles that sort of stuff  
**\<andytoshi>** there are lots of reasons that projects might have an openssl dep (bitcoin had one for a while). it takes time to eliminate it as other options are developed  
**\<silur>** also it has lots of inline ASM stuff how does emscripten handle that?  
**\<andytoshi>** but in all seriousness, if you're doing crypto in a browser, you should stop, because it's snake oil. a browser cannot run code in a secure environment.  
**\<needmoney90>** Did anyone check out the paper I posted last week?  
**\<needmoney90>** https://arxiv.org/abs/1702.07588  
**\<andytoshi>** http://matasano.com/articles/javascript-cryptography/  
**\<endogenic>** andytoshi: people are going to run worse web wallets if we don't  
**\<endogenic>** run one that is  
**\<needmoney90>** I'm curious if FHE can be used for remote node syncing, to allow us to make queries on encrypted data  
**\<endogenic>** silur: 1sec  
**\<andytoshi>** needmoney90: you want PIR for that, not FHE. and there are existing PIR primitives that are actually implemented and usable (see percy++)  
**\<needmoney90>** It's possible that due to our static append only data set that we can't actually hide access patterns  
**\<silur>** needmoney90 thanks a lot, it seems super interesting  
**\<needmoney90>** Never heard of PIR, got a paper for me?  
**\<needmoney90>** Maybe I just don't know the acronym  
**\<sarang>** private information retrieval  
**\<silur>** lots of stuff on PIR  
**\<silur>** thanks for percy++, i'm working with pir a lot for riffle  
**\<silur>** where do we need that btw?  
**\<silur>** in monero?  
**\<endogenic>** silur: emscripten might not be able to handle it, depending on exactly what's there. i guess maybe an alternative implementation exists  
**\<endogenic>** people seem to have been able to do it , in any case  
**\<endogenic>** 🤞  
**\<oneiric\_>** is boringssl an option for you?  
**\<endogenic>** oh  
**\<endogenic>** ./configure --no-asm  
**\<endogenic>** of course  
**\<endogenic>** oneiric\_: not to ignore you - i'll investigate if it becomes necessary  
**\<sarang>** Anyone else wish to share something intriguing on their minds?  
**\<sarang>** Also welcome andytoshi  
**\<isthmuscrypto>** Oh, I can give a #noncense-research-lab summary  
**\<sarang>** please  
**\<isthmuscrypto>** Lots of action in the Monero Archival Project this week. @n3ptune released a new version of our custom archival daemon, and @serhack has been working wonders, configuring and maintaining our network of global VPS-based nodes.  
**\<isthmuscrypto>** I have been playing around with temporal analysis of the blockchain. Miner-reported timestamps were shown to be very unreliable, since 2% of blocks include a timestamp that is \*before\* the timestamp of the block prior.  
**\<isthmuscrypto>** These time-traveling Merlin blocks showed up while scoping out the distribution of wait times. https://usercontent.irccloud-cdn.com/file/tLUEZ9aU/ttblocks.png // Looking at the wait times for the block above and below the Merlin blocks themselves, we see that it is skewed toward a longer interval afterward, suggesting that they are actually being retroactively timestamped.  
**\<isthmuscrypto>** Our new daemon (upgraded last night) records the node-receipt timestamp(s) in addition to the miner-reported timestamp, so expect some way more detailed analysis of that soon.  
**\<isthmuscrypto>** I'm a little exploratory study of how fast the blockchain syncs at each height. It's mostly a cute novelty, but if there are interesting features (e.g. discontinuities around introduction of new tech), or notable conclusions about empirical scaling, I'll share back here.  
**\<isthmuscrypto>** (/end)  
**\<isthmuscrypto>** Whoops, here's the second link, showing the skew in wait times before and after Merlin blocks: https://usercontent.irccloud-cdn.com/file/f46p6Ddd/merlin\_parent\_child  
**\<sarang>** this is very interesting work  
**\<andytoshi>** sarang: we've made a lot of progress on musig recently; you can see https://github.com/apoelstra/secp256k1/blob/2018-04-taproot/src/modules/musig/musig.md for our current API. may have insights valuable to monero in future when you guys support arbitrary multisigs  
**\<sarang>** oh excellent, thanks  
**\<isthmuscrypto>** Shoot, I gave the wrong channel above. #noncesense-research-lab  
**\<sarang>** andytoshi: what are the overall plans for musig?  
**\<andytoshi>** sarang: well, musig signatures verify identically to schnorr..  
**\<andytoshi>** so the goal is for bitcoin to support schnorr as part of taproot  
**\<andytoshi>** and then wallets would implement musig if they're doing multisig stuff  
**\<andytoshi>** since the resulting multisigs would be smaller/more private than ones using CHECKMULTISIG  
**\<sarang>** Great, so laying the groundwork for future wallet code  
**\<sarang>** cool  
**\<sarang>** It seems fairly quiet here otherwise today, so any other material to share?  
**\<andytoshi>** not really, i've mostly been doing rust-bitcoin ecosystem work  
**\<endogenic>** yknow people have been transpiling rust to JS too :P  
**\<silur>** and wasm :D  
**\<endogenic>** well that's what i mean :P  
**\<silur>** wasm openssl is not a bad idea tho  
**\<silur>** looks like I have a new sideproject  
**\<endogenic>** oh that's just what i'm talking about...  
**\<endogenic>** whoever beats the other to it i guess  
**\<endogenic>** it's easy enough  
**\<endogenic>** i have instructions.. :P  
**\<endogenic>** i have boost transpiled already..  
**\<sarang>** Well, I think we can safely call the meeting then, everyone can continue performing admirably  
