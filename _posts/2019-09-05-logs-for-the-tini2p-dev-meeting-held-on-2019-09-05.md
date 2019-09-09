---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-09-05
summary: Current project status, Roadmap, Meta issues, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**\<tini2p\_gitlab>** meeting time!    
**\<tini2p\_gitlab>** 0: Greetings  
**\<tini2p\_gitlab>** l  
**\<DavidBurkett>** :wave:  
**\<tini2p\_gitlab>** :)  
**\<tini2p\_gitlab>** 1: What's been done  
**\<tini2p\_gitlab>** opened merge request for tunnels implementation: https://gitlab.com/tini2p/tini2p/merge\_requests/15  
**\<tini2p\_gitlab>** it's a large amount of work (around a month's worth), so I'm going to leave it up for a bit (few days)  
**\<tini2p\_gitlab>** going to take a day away from that code, and come back to it for manual review  
**\<DavidBurkett>** Awesome! Is there anyone from i2p actively reviewing it? If not, I'll review with what little knowledge I have  
**\<tini2p\_gitlab>** remember how I said "hopefully, no more major refactors", well so much for that. I overlooked some parts of OutboundEndpoint and InboundGateway processing, and had to refactor how I extract I2NP fragments from tunnel messages  
**\<tini2p\_gitlab>** @DavidBurkett many thanks! I'm the only active reviewer, so any input from you is very welcome  
**\<tini2p\_gitlab>** fresh eyes are always helpful  
**\<DavidBurkett>** :thumbsup: I'll take a look  
**\<tini2p\_gitlab>** there are still some aspects of peer selection that remain, mostly around restrictions of peers from the same /16 IPv4, and any given peer only participating in ~33% of active tunnels  
**\<tini2p\_gitlab>** not sure what layer of abstraction I should enforce those restrictions. right now, those restrictions make sense at the RouterContext layer for my impl, but TBD  
**\<tini2p\_gitlab>** the RouterContext will ultimately be pulling peers from NetDB, and feeding them into the PoolManager  
**\<tini2p\_gitlab>** so the work in that PR represents what I've been working since last meeting  
**\<tini2p\_gitlab>** a lot of time was spent on peer profiling and tunnel testing  
**\<tini2p\_gitlab>** and the refactors for the OutboundEndpoint sending a TunnelGateway message when the delivery is to another tunnel  
**\<tini2p\_gitlab>** from the existing I2P docs, it's not very clear when the different tunnel delivery types are used (Local, Router, Tunnel)  
**\<tini2p\_gitlab>** it took me implementing the things, and thinking about how the pieces fit together to really make sense of it  
**\<tini2p\_gitlab>** basically, afaiu, Local is used by the InboundGateway to tell the InboundEndpoint, "this message is for you"  
**\<tini2p\_gitlab>** Router is used by the OutboundGateway to tell the OutboundEndpoint (and maybe IBGW to IBEP) that the I2NP message should be directly delivered to a router  
**\<tini2p\_gitlab>** e.g. for DatabaseStore and DatabaseLookup messages  
**\<tini2p\_gitlab>** Tunnel delivery is used by the OutboundGateway to tell the OutboundEndpoint (and maybe IBGW to IBEP) that the I2NP message should be delivered to the InboundGateway of another tunnel  
**\<tini2p\_gitlab>** Router and Tunnel don't make sense to me for inbound tunnels, unless some form of chaining is used. not clear that it ever is from the specs  
**\<tini2p\_gitlab>** for example, if Alice sends an I2NP message through an outbound tunnel to the IBGW of another tunnel (with some indicator for chaining), and that IBGW uses Router or Tunnel delivery to tell the IBEP to deliver the I2NP message to the IBGW of yet another tunnel  
**\<tini2p\_gitlab>** maybe that exists, but I've implemented IBGW only using Local delivery to send I2NP messages to the IBEP  
**\<tini2p\_gitlab>** Local delivery is never used for outbound tunnels  
**\<tini2p\_gitlab>** anyway, figuring all that out took a bit of time, and I may send spec diffs upstream to clarify the use of the different delivery types  
**\<tini2p\_gitlab>** 2: What's next  
**\<tini2p\_gitlab>** RouterContext  
**\<tini2p\_gitlab>** and associated classes  
**\<tini2p\_gitlab>** this set of classes will be the main brains tying everything together  
**\<tini2p\_gitlab>** RouterContext will use the transport (NTCP2) to talk directly to other routers  
**\<tini2p\_gitlab>** it will use an I2NP handler to either pass messages to the NetDB or Tunnel PoolManager for further processing  
**\<tini2p\_gitlab>** similarly, resulting messages from NetDB and Tunnel processing will be returned to the RouterContext, and sent back out over NTCP2 to the appropriate router  
**\<tini2p\_gitlab>** the RouterContext will also be the main owner of the router's RouterInfo  
**\<tini2p\_gitlab>** LeaseSets for local InboundTunnels will also be compiled by the RouterContext, and stored in the NetDB  
**\<tini2p\_gitlab>** setting a goal for myself to have the RouterContext finished (in a minimally working sense) by next Thursday (2019-09-12)  
**\<tini2p\_gitlab>** with RouterContext finished/merged, I will tag a release candidate  
**\<tini2p\_gitlab>** I will be implementing a Docker/container test network for integration/end-to-end testing, to ensure all the pieces work together  
**\<tini2p\_gitlab>** I will also make changes to match the latest updates to ECIES-X25519, posted by zzz this past weekend  
**\<tini2p\_gitlab>** ECIES-X25519 changes will also go into the alpha release candidate  
**\<tini2p\_gitlab>** with RouterContext and ECIES-X25519 changes in place, tini2p will have an internally consistent implementation of I2P  
**\<tini2p\_gitlab>** and I will tag the alpha release a week after the release candidate  
**\<tini2p\_gitlab>** after alpha release, I will focus on ElGamal tunnel building, and integration tests with Java I2P and i2pd  
**\<tini2p\_gitlab>** end-to-end sessions will still be tini2p-to-tini2p, but tunnel building should be possible through Java I2P and i2pd  
**\<tini2p\_gitlab>** the Docker/container setup should be a nice testbed for inter-implementation testing, so hopefully it will be useful for other implementations as well  
**\<tini2p\_gitlab>** TBD  
**\<tini2p\_gitlab>** post-alpha release will also get some (a huge amount) of fuzz tests  
**\<tini2p\_gitlab>** basically every class with a `deserialize`method or buffer input interface, will be getting a fuzz driver attached to it  
**\<tini2p\_gitlab>** I may also be taking a small break from tini2p post-alpha release to preemptively prevent burnout  
**\<tini2p\_gitlab>** these past nine months have been basically coding tini2p everyday, often 10-12+ hours a day  
**\<tini2p\_gitlab>** 3: Questions/comments  
**\<DavidBurkett>** This project structure is really clean, and code easy to follow. Working on building now. You're doing great work  
**\<tini2p\_gitlab>** aww :3 thanks @DavidBurkett that means a lot, very kind  
**\<tini2p\_gitlab>** still needs a lot of work to be production-ready, but I'm doing my best to code well  
**\<tini2p\_gitlab>** some of the structure is heavily influenced by portions of Java I2P, i2pd and ire. there are some really good bits in those codebases  
**\<DavidBurkett>** Well I'm just talking your cmake files, your handling of dependencies, etc. Very clean  
**\<DavidBurkett>** And I've seen i2pd. This is night and day better (although i2pd is pretty easy to work with)  
**\<DavidBurkett>** [edit] And I've seen i2pd. This is night and day better (although i2pd is also pretty easy to work with)  
**\<tini2p\_gitlab>** i2pd has very different project goals and design. i2pd aims to be a one-stop-shop router, tini2p aims for use as an I2P library by other projects  
**\<DavidBurkett>** Ah, that makes sense  
**\<DavidBurkett>** I assumed i2pd was also meant to be used as a library  
**\<tini2p\_gitlab>** the CMake and dependencies took influence from Kovri (and by extension i2pd)  
**\<tini2p\_gitlab>** i2pd can also be used as a library  
**\<tini2p\_gitlab>** what I mean is that i2pd contains an HTTP server, router console, bundled client, all-in-one. somewhat similar to Java I2P, though with less apps bundled in  
**\<DavidBurkett>** :thumbsup: Understood  
**\<tini2p\_gitlab>** tini2p moves away from that singleton design, into something highly modular  
**\<tini2p\_gitlab>** a future goal is to split tini2p up further, having common structures be its own repo, with separate core and client libs  
**\<DavidBurkett>** Makes sense. Yea, I pulled i2pd into Grin++ at one point, but I had to decouple a bunch of things to be able to just pull in what I want. It wasn't a straightforward task  
**\<tini2p\_gitlab>** that's somewhat far down the line though, but it would support stuff like pluggable end-to-end and signing crypto  
**\<DavidBurkett>** That's awesome, you'll get there for sure.   
**\<tini2p\_gitlab>** :) thank you  
**\<tini2p\_gitlab>** alright, think that's about all for this meeting. unless you have something else @DavidBurkett?  
**\<DavidBurkett>** Nothing from me  
**\<tini2p\_gitlab>** for sure  
**\<tini2p\_gitlab>** 4: Next meeting  
**\<tini2p\_gitlab>** 2019-09-19 18:00 UTC  
**\<tini2p\_gitlab>** thanks all for attending (that means you @DavidBurkett ;)  
**\<DavidBurkett>** :smile:  
**\<tini2p\_gitlab>** @tini2p\_gitlab stares intently at the gaffer, wondering if it feels  
