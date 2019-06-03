---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-05-23
summary: Current project status, Roadmap, Meta issues, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**tini2p** 0: Greetings  
hello to the void  
1: What's been done  
I2NP messages + processing  
NetDB initial implementation  
Global housekeeping refactors  
Endian util removing Boost::Endian dependency  
endian util was merged here: tini2p/tini2p!7  
I2NP + NetDB + housekeeping is in this open merge request: tini2p/tini2p!8  
Tunnel messages + processing still need implementation, along with some of the other networking parts of NetDB (that require Tunnels)  

**tini2p** will discuss more about Tunnels in the next meeting item  
global housekeeping was for style + correctness, cleaning up some early spaghetti code  
some housekeeping remains, so it's definitely still WIP  
2: What's to come  
ECIES updates following #ls2 discussion and prop. 144 updates  
Experimental Tunnel impl under ECIES  
Writing a proposal for Tunnel changes under ECIES, following goals of prop. 144  
Use standalone ASIO to replace Boost::ASIO dependency  
my initial experimental ECIES implementation diverges a bit from the current spec proposal  
will be updating the code to match the most recent revisions, and discussions from #ls2 meetings  
some mismatch going forward is to be expected, since there are a number of TBD sections in 144  

**tini2p** the hope is to get an MVP impl working, and come together on the necessary changes for the spec  
similarly, Tunnel changes under ECIES were left out of prop. 144, and I will be implementing an MVP following the spec goals of 144  
after getting something working, will write up a companion spec proposal for Tunnels under ECIES  
one difficulty/interesting design challenge will be I2NP fragmenting + encryption for fixed-length tunnel messages  
during this next run, I will also be replacing Boost::ASIO with standalone ASIO, completely removing Boost dependencies  

**tini2p** no Boost will hopefully reduce overall code size  
it will also ironically increase platform portability, since the project won't be tied to any particular Boost version (since no Boost)  
for tini2p's separate client library, HTTP/WebSockets will be an interesting problem to solve  
hopefully by the time the client library is being implemented, Beast will also have a standalone option  
the first two items (ECIES + Tunnels) will likely take a large amount of time, probably spanning the next few weeks (if not more)  

**tini2p** the goal is still to have a working (able to talk to other routers via Tunnels) by alpha release (2019-07-10)  
`#ls2` I2P meetings have been very productive the last few weeks, and will hopefully continue to be moving forward  
short meeting today  
3: Next meeting time  
2019-06-06 18:00 UTC  
meeting closed
