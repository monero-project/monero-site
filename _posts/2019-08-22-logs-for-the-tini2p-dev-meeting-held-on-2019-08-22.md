---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-08-22
summary: Current project status, Roadmap, Meta issues, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**\<tini2p\_gitlab>** 0: Greetings  
**\<tini2p\_gitlab>** hi  
**\<tini2p\_gitlab>** 1: What's been done  
**\<tini2p\_gitlab>** A lot  
**\<tini2p\_gitlab>** I've more-or-less finished the tunnel message processing classes (Hop, InboundEndpoint, InboundGateway, OutboundEndpoint, OutboundGateway)  
**\<tini2p\_gitlab>** still making changes as I impl tunnel management classes (InboundTunnel, OutboundTunnel, TransitTunnel, Pool, PoolManager), but the changes are fairly minor  
**\<tini2p\_gitlab>** had a few big, time-consuming refactors for the processing classes, but most of those are finished now (hopefully)  
**\<tini2p\_gitlab>** I am almost done with the TransitTunnel class (used for participating in Tunnels created by remote routers)  
**\<DavidBurkett>** :wave:  
**\<tini2p\_gitlab>** hi @DavidBurkett, how are you?  
**\<DavidBurkett>** Great! And yourself?  
**\<tini2p\_gitlab>** doing well, thanks :)  
**\<tini2p\_gitlab>** welcome  
**\<tini2p\_gitlab>** to the meeting  
**\<DavidBurkett>** Happy to be here. Will observe and try not to interrupt :)  
**\<tini2p\_gitlab>** right on, feel free to ask or comment at will  
**\<tini2p\_gitlab>** happy to have you, as always  
**\<tini2p\_gitlab>** so Tunnels are almost done, and have been what I've spent all of my time on over the last two weeks  
**\<tini2p\_gitlab>** 2: What's next  
**\<tini2p\_gitlab>** so, the last few I2P LS2 meetings have been a bit hairy  
**\<tini2p\_gitlab>** we've been discussing, mainly, changes to 144 (ECIES-X25519 end-to-end sessions)  
**\<tini2p\_gitlab>** admittedly, I could have handled things much better than I did  
**\<tini2p\_gitlab>** thankfully, things seem to be moving forward again, and we've concluded that reuse of ephemeral keys is a bad idea  
**\<tini2p\_gitlab>** it will require some changes to my ECIES-X25519 impl, which I will do after finishing tunnels  
**\<tini2p\_gitlab>** whether to follow the drop-until-secure or send-NewSession-until-secure is still to be determined  
**\<tini2p\_gitlab>** drop-until-secure is what I prefer, and means routers with drop end-to-end messages, until a secure channel to the Destination is established  
**\<tini2p\_gitlab>** only requires one round-trip, and support sending one 0-RTT payload in the initial NewSession and NewSessionReply messages  
**\<tini2p\_gitlab>** zzz is of the opinion that drop-until-secure will not work for performance and client-related reasons  
**\<tini2p\_gitlab>** I haven't begun to implement client stuff, so maybe zzz is right  
**\<tini2p\_gitlab>** NewSession-until-secure basically sends NewSession messages to the Destination until the first NewSessionReply is received  
**\<DavidBurkett>** Is that discussion in the PR for 144 or something?  
**\<DavidBurkett>** Or was that in IRC?  
**\<tini2p\_gitlab>** was on Irc2P, the meeting logs are here: tini2p/meta#29  
**\<DavidBurkett>** Thanks :)  
**\<tini2p\_gitlab>** and here: tini2p/meta#28  
**\<tini2p\_gitlab>** guess it might be a bit much to rehash the discussion here, just trying to summarize  
**\<DavidBurkett>** I'll read through and understand  
**\<DavidBurkett>** YOu have good TL;DR's  
**\<tini2p\_gitlab>** NewSession-until-secure also has its problems, but should be workable  
**\<tini2p\_gitlab>** thanks :)  
**\<tini2p\_gitlab>** anyway, I'll be implementing the drop-until-secure until we come to consensus on what actually becomes spec  
**\<tini2p\_gitlab>** it's simpler, more secure, and more efficient  
**\<tini2p\_gitlab>** though latency/performance may be a killer for it  
**\<tini2p\_gitlab>** after the changes for ECIES-X25519, I'll be gluing everything together with a RouterContext class  
**\<tini2p\_gitlab>** with RouterContext, I'll be able to have the NTCP2 transport talk to the Tunnels and NetDB classes  
**\<tini2p\_gitlab>** I'll create some basic unit tests, if they make sense. the majority of the tests for RouterContext will be net-tests (integration/functional tests)  
**\<tini2p\_gitlab>** with RouterContext finished, tini2p library users will be able to build their own router  
**\<tini2p\_gitlab>** that will likely be alpha-release time  
**\<tini2p\_gitlab>** I'm shooting for a one-week impl time on RouterContext, but may run into bugs/refactor work that pushes that timescale back a week or two  
**\<tini2p\_gitlab>** it's really just gluing stuff together though, so I'm hoping it goes quickly  
**\<tini2p\_gitlab>** I also need to make a small update to NTCP2 for the testnet-separation update to specs from 147  
**\<tini2p\_gitlab>** basically it's a netID check that ensures no cross-talk between mainnet and testnet routers  
**\<tini2p\_gitlab>** it's important for I2P network health, so I am happy to impl  
**\<DavidBurkett>** That's awesome! I'll watch for updates on that RouterContext. I'll try setting one up once you're finished  
**\<tini2p\_gitlab>** for sure :)  
**\<tini2p\_gitlab>** will likely be adding a docker setup, so you can run a full testnet entirely locally  
**\<DavidBurkett>** Nice!  
**\<tini2p\_gitlab>** definitely! also allows spinning up 10+ routers on different /16 pretty easily, so it may be a good way to do integration tests with I2P Java and i2pd once I add ElGamal tunnel building  
**\<tini2p\_gitlab>** ElGamal tunnel building is post-alpha though  
**\<DavidBurkett>** :)  
**\<tini2p\_gitlab>** so that's about it for stuff until alpha release  
**\<tini2p\_gitlab>** 3: Questions/Comments  
**\<DavidBurkett>** Nothing from me. :thumbsup:  
**\<tini2p\_gitlab>** for sure  
**\<tini2p\_gitlab>** 4: Next meeting  
**\<tini2p\_gitlab>** staying on normal schedule, two weeks from today: 2019-09-05 18:00 UTC  
**\<tini2p\_gitlab>** that's all, thanks all for the meeting  
**\<@tini2p\_gitlab>** gaffer banger  
