---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-05-09
summary: Current project status, Roadmap, Meta issues, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**tini2p** hi all almost time for meeting  
may be chatting into the void, but posting for posterity  
0: Greetings  
allo  
1: Project status / What's been done  
over the past couple weeks, have continued work on NetDb and I2NP implementations  
have gotten through most of the data structures + processing for Garlic and other messages (except those related to Tunnels)  

**tini2p** currently working on fixing a bug with DatabaseStore wrapped in Garlic, off by 3 bytes somewhere in serialization/deserialization (not sure exactly where yet)  
still regularly attending I2P #ls2 meetings, and the last couple meetings were very productive!  
Java I2P just released .40, big congrats to their dev team!  
will continue working on Garlic, and hopefully get the message processing + networking finished by next meeting  
if I finish work on Garlic, next will be tunnels  
have also been doing a fair bit of global housekeeping on the codebase, which has taken a bit of time  

**tini2p** oh, and updated the required c++ standard to C++17 to remove some dependency on Boost  
it's not super high priority, but I am trying to eventually be Boost-free  
the remaining parts are writing an endian util for big endian integers, and swapping in standalone ASIO  
hopefully by the time tini2p is ready for public consumption, all supported platforms will have C++17 compilers (most do already)  
all of the project management / devops related stuffs have taken a seat on the backburner  

**tini2p** still need to figure out a way to run net tests on CI, probably just need to configure static ports, or an open port range on local host. not sure, so results from net tests have to be manually uploaded (not ideal)  
work on I2NP / Garlic / Tunnels / NetDb are all to get to the point of being able to talk to other implementations for ECIES testing (proposal 144)  
progress can be tracked on my netdb branch  
2: What's to come  
continued work on netdb & company  
more housekeeping refactors to remove some early spaghetti code (works, but is ugly), and some refactors for correctness  

**tini2p** (many thanks to those who indirectly pointed out the warts)  
if time permits, will dig into some of the project management / devops stuffs. first priority there being getting CI fully functional  
since the project is mainly hosted on GitLab atm, will likely be using their CI  
gitea hosting is still a long-term goal, but also very low priority atm  
3: Next meeting time  
same time (roughly) two weeks from now: 2019-05-25 @ 18:00 UTC  

**tini2p** meeting closed  
