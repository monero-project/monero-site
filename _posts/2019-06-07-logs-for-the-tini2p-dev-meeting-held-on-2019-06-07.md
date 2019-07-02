---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-06-07
summary: Current project status, Roadmap, Meta issues, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**tini2p** makeup meeting time from yesterday!  
0: Greetings  
hi  
1: What's been done  
a lot of updates for ECIES based on the spec updates  
due to the nature of the original experimental impl, and the WIP status of 144, there were many divergences. many have been shored up, and now my impl more closely matches the current spec  
progress can be tracked in my ecies branch  
still need to write up the AckRequest message block, NewSession message variants, and ExistingSession message  
  
**tini2p** all the other ECIES crypto, HKDF, and messages are updated  
2: What's next  
next up is the remaining message impl + processing  
after that is in place, will be moving on to tunnel impl  
once tunnel impl is in (probably 1-2 weeks, optimistically), tini2p routers should be able to talk to each other end-to-end  
following some more testing, and writing fuzz suites, I will be moving to blinded LS2 impl to help with 149 spec testing  
oh, forgot, Elligator2 impl is still needed for ECIES (saving for last since it will need to be custom crypto (oooooo scary)  
  
**tini2p** will do my best to have a verified impl using the validation scripts  
will also be pulling out Boost::Asio for standalone-ASIO, which should be a fairly straight-forward switch  
and will likely switch to BearSSL for constant-time TLS, AES and other crypto  
currently LibreSSL is only used for AES, so this should also be a straightforward swap  
all of the items just listed will likely take me until alpha-release on 2019-07-10  
  
**tini2p** hopefully, I will meet the alpha-release goal of tini2p routers being able to communicate with each other  
if Java I2P and/or i2pd also have full ECIES + new tunnel impl (yet-to-be-written spec), will of course be doing integration tests with those routers to validate the new specs  
somewhat long-view: post-alpha-release will largely consist of hammering out bugs, and solidifying remaining work on new specs. beta-release will contain those updates, and some work toward consumable APIs for client software (I2CP + SAMv3)  
3: Next meeting time  
  
**tini2p** 2019-06-20 18:00 UTC  
any objections?  
alright, see all you lurkers next meeting :P    
