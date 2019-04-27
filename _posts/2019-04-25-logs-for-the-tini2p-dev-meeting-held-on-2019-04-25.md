---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-04-25
summary: Current project status, Roadmap, Meta issues, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**tini2p** alright, late meeting today, not that it really matters...  
Greetings  
hello  
2: Status/Progress since last meeting  
since last meeting, have been working on NetDb stuff. those interested can track my progress in the netdb branch  
almost all of the basic I2NP message processing is there, but the majority of the networking portions still remain (sending/responding to messages on the wire, etc)  
  
**tini2p** garlic encryption is also a large part of sending I2NP messages on the wire and through tunnels, so I may implement mock garlic encryption until 144 is finalized  
the next I2P #ls2 meeting is next Monday, so hopefully more is resolved there regarding what new garlic encryption will be  
have been somewhat distracted with meatspace concerns, so this past two weeks has been much less productive than normal  
3: Short-term roadmap  
Will continue implementing NetDb + Garlic, and start on Tunnels  
if those can be completed in the next 2-4 weeks, I will have a router that can at least communicate with other tini2p routers  
tini2p routers won't be able to communicate with the larger I2P network until all the new crypto is locked in  
  
**tini2p** there is a somewhat adversarial vibe i'm getting from the main I2P team, so hopefully I won't be blocked by political bullshit on their part  
if it becomes clear that I2P is intentionally blocking my progress, I will build a router independent of their network, taking all the best bits, leaving all the trash  
maybe another next-generation anonymity network spawns, similar to the I2P split from Tor at I2P's inception  
that's not the most desirable outcome, however. a great deal can be gained from both sides by having another independent I2P implementation. all the other implementations are coming from the same small group of people  
4: Next meeting  
  
**tini2p** Two weeks, roughly the same time: 2019-05-09 @ 18:00 UTC  
meeting over
