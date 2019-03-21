---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-03-14
summary: Current project status, Roadmap, I2P proposal implementation, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**\<oneiric\_>** time to meet is almost here  
**\<oneiric\_>** thanks to everyone for attending/lurking  
**\<oneiric\_>** item 0: Greetings  
**\<Corklander>** Hey-o!  
**\<oneiric\_>** hiyo all  
**\<oneiric\_>** welcome Corklander, looks like it may just be us today again  
**\<oneiric\_>** item 1: Current project status / what's been done  
**\<oneiric\_>** have spent the last few weeks refactoring and implementing generic wrappers for ecies  
**\<oneiric\_>** went down a rabbit hole that took way longer thatn expected  
**\<oneiric\_>** than\*  
**\<oneiric\_>** in the middle of switching crypto++ for libsodium  
**\<oneiric\_>** last remaining piece is the AES impl, which will be replaced with tiny-aes  
**\<kinghat>** hi. lurking.  
**\<oneiric\_>** reddsa took a backburner spot, and i will refocus on it after necessary refactors  
**\<oneiric\_>** hi kinghat  
**\<oneiric\_>** should be finished with refactors in next few days, and will MR the changes on gitlab  
**\<oneiric\_>** will leave it up for ~1 week for review  
**\<oneiric\_>** other than that, been working on other housekeeping refactors, and attending i2p dev meetings  
**\<oneiric\_>** any questions/comments?  
**\<kinghat>** there were i2p dev meetings? were they public?  
**\<crim->** will this have an FFS/ICO ?  
**\<kinghat>** whoops. not i2p xmr related dev meetings.  
**\<oneiric\_>** yep, every week for #ls2 meetings discussing new leaseset2/netdb specs  
**\<oneiric\_>** lol the greatest ICO crim-  
**\<oneiric\_>** with all the premines  
**\<crim->** wheres the old project?  
**\<oneiric\_>** which old project?  
**\<crim->** there was a bid FFS on kvri?  
**\<crim->** is this replacing that?  
**\<oneiric\_>** nop, not from me  
**\<oneiric\_>** i'm still up in the air on an ffs  
**\<crim->** okay, continue  
**\<crim->** well, the last one run with the money  
**\<crim->** or so I've heard  
**\<crim->** people might be afraid for another FFS  
**\<crim->** atleast me  
**\<oneiric\_>** idk about all that. my last ffs got a little borked with overpromising/miscommunication, which has hopefully been resolved  
**\<oneiric\_>** if you or anyone would like to discuss it, i'm open  
**\<kinghat>** im just here for the tini2p 😄  
**\<Corklander>** Same. Other projects are for other meetings, IMO.  
**\<oneiric\_>** its my understanding that i fairly addressed regarding milestone completion, maybe you think differently crim-?  
**\<oneiric\_>** regardless, i want people to feel they can approach me openly about funding questions  
**\<Corklander>** Ah. +1  
**\<oneiric\_>** not here to swindle anyone, and i think my track record proves that  
**\<oneiric\_>** any other questions about item 1?  
**\<kinghat>** my brain has already forgotten about the many different privacy network implementations that are in dev atm since the kovri mess.  
**\<oneiric\_>** true, i2pd is still actively developed, along with java i2p, and i2p-zero packaging  
**\<oneiric\_>** and there is ire of course :) the rust impl  
**\<oneiric\_>** there may be more  
**\<oneiric\_>** so onto item 2: Short-term road map  
**\<oneiric\_>** so will continue with refactors + reddsa/encls2 this week  
**\<oneiric\_>** hopefully should be ready to test within the next 1-2 weeks  
**\<oneiric\_>** after that will shift focus back to ecies and i2np for router-to-router communication  
**\<oneiric\_>** hopefully the generic wrappers i've written will be flexible enough for whatever crypto primitives are settled on  
**\<oneiric\_>** leaseset2 and proposal 123 afaiu are still the main focus for i2p project, though focus maybe be shifting to 144  
**\<oneiric\_>** don't quote me on that  
**\<oneiric\_>** hopefully should have router-to-router communication within the next month or so  
**\<oneiric\_>** at least ready for local testnet / vms  
**\<oneiric\_>** also need to work on some docs / other meta housekeeping, and separating impl into ipp files  
**\<oneiric\_>** any questions/comments on short-term plans?  
**\<Corklander>** For the testnet plans, do you have specific objectives?  
**\<oneiric\_>** yeah, i'd like to build something people can spin up locally with no outside networking  
**\<Corklander>** As in: 1) must complete 'hello world' round trip. 2) must have memory leaks below 100MB/day, etc?  
**\<oneiric\_>** oh  
**\<oneiric\_>** tbh, haven't thought that far into it. but can come up with some metrics for automated testnet runs  
**\<oneiric\_>** CI is still on my todo, so thanks for the reminder  
**\<Corklander>** I'm asking because I'm not sure where to separate unit and integration tests for a network-layer project.  
**\<oneiric\_>** currently, i have separated the independently testable stuff into unit\_tests  
**\<oneiric\_>** stuff that requires networking goes in net\_tests  
**\<Corklander>** Ah, right. Well that makes sense to my brain now. :)  
**\<oneiric\_>** so far, haven't seen the need for a separate integration\_test, but will if the need arises  
**\<oneiric\_>** had a slow-test dir for a bit, but it was only for elgamal, and only when prime search was turned on  
**\<oneiric\_>** now there's no elgamal at all so !!!!! ::)  
**\<oneiric\_>** also zzz brought up that it wasn't obvious the library is header-only, so people may think nothing has been done  
**\<oneiric\_>** all of the impl is currently in .h files  
**\<oneiric\_>** i will be splitting impl into .ipp files, but the library is still intended to be header-only  
**\<oneiric\_>** will write a reference router in .cc, but library user's are encouraged to just include the headers without needing a separate bin for the router  
**\<oneiric\_>** users'\*  
**\<oneiric\_>** users?  
**\<oneiric\_>** anyway  
**\<oneiric\_>** if no more on 2, item 3: I2P proposal implementation (123, 144)  
**\<oneiric\_>** not much has changed, str4d added a more fleshed-out reddsa spec  
**\<oneiric\_>** there is currently some discussion over exactly how to do aplha generation and key blinding  
**\<oneiric\_>** there will be another meeting in #ls2 on i2prc this upcoming monday, iirc  
**\<oneiric\_>** 144 is the ecies-x25519-ratchet proposal  
**\<oneiric\_>** any questions on tini2p impl plans or questions in general re: the new spec proposals?  
**\<oneiric\_>** cool deal, looks like we'll be ending early  
**\<oneiric\_>** last item: Confirm next meeting time  
**\<oneiric\_>** same time in two weeks?  
**\<kinghat>** sure. gotta jet. see ya!  
**\<Corklander>** Sure  
**\<oneiric\_>** l8er kinghat, thanks for lurkin  
**\<oneiric\_>** ok so 2019-03-28 at 18:00 UTC  
**\<oneiric\_>** meeting over, thanks all  
**\<Corklander>** Yea!  
**\<wowario>** thanks oneiric\_  
**\<oneiric\_>** thanks for the input Corklander  
**\<Corklander>** Sure!  
**\<oneiric\_>** np wowario  
**\<Corklander>** Good work, btw  
**\<oneiric\_>** thanks man  
