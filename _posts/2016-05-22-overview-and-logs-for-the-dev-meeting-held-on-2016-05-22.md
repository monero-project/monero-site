---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-05-22
summary: Decisions on PRs still open, performance branch conversion problems, consolidating dev documentation on the GH wiki
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Logs

**\<fluffypony>** ok  
**\<fluffypony>** das meeting  
**\<ArticMine>** has started  
**\<fluffypony>** heh heh  
**\<xmrpromotions>** let the fun begin  
**\<fluffypony>** hyc, smooth, moneromooo, dEBRUYNE, gingeropolous, luigi1112, luigi1114, anyone I've missed  
**\<fluffypony>** hokay so  
**\<fluffypony>** first up: for those that haven't done so, please commit to the StackExchange proposal: http://area51.stackexchange.com/proposals/98617/monero  
**\<gingeropolous>** oooh i get pinged for dev meetings? :)  
**\<xmrpromotions>** and earn rep: https://forum.getmonero.org/20/general-discussion/2542/stack-exchange-commitment-requirements  
**\<fluffypony>** you're basically just committing to asking / answering a total of 10 questions over 3 months  
**\<fluffypony>** also it would be advantageous if you have over 200 rep on another StackExchange site, as xmrpromotions said  
**\<fluffypony>** I earned over 200 rep on bitcoin.stackexchange by answering like 4 questions, so it's not hard  
**\<fluffypony>** ok maybe like 6 questions, but still, not hard  
**\<fluffypony>** I think getting 200 committers in total will be easy, but having 100 committers with sufficient rep might be a little harder  
**\<fluffypony>** ok so  
**\<fluffypony>** PRs  
**\<fluffypony>** over the last couple of weeks we've merged a few PRs  
**\<fluffypony>** obviously  
**\<fluffypony>** the biggest one being the performance branch  
**\<fluffypony>** which was what warptangent was working on before he passed away  
**\<fluffypony>** and which was completed by hyc and everyone else  
**\* dEBRUYNE** pages tewinget, NoodleDoodle, ArticMine, othe  
**\<dEBRUYNE>** probably missed someone  
**\<fluffypony>** we are seeing some latent issues with auto-conversions, or that appear to be coming from the auto-conversion  
**\<fluffypony>** if users hit issues with that the fastest route is for them to sync from scratch  
**\<fluffypony>** iirc smooth has a broken conversion that we can use to analyse the issue  
**\<fluffypony>** 810 and 775 are dangling  
**\<fluffypony>** moneromooo: do you want those to stay open at present ?  
**\<moneromooo>** 810 might be cancelled, not sure.  
**\<fluffypony>** ok  
**\<moneromooo>** 775 is ready AFAIK.,  
**\<fluffypony>** ok will test it  
**\<fluffypony>** 818 is in a holding pattern pending some discussion; based on what shen has been doing lately my feeling is that we leave that till after RingCT is done  
**\<fluffypony>** on that note, RingCT seems to be pushing ahead quite nicely  
**\<fluffypony>** moneromooo: how's it looking from your side ?  
**\<moneromooo>** I'm not a cryptographer, so I got no clue really :P  
**\<fluffypony>** hah hah  
**\<moneromooo>** Once I figure out what goes where, it's just code after that.  
**\<fluffypony>** I know you're waiting for input from shen, but is it starting to make a bit of sense ?  
**\<moneromooo>** Though a lot of it I think  
**\<fluffypony>** kk  
**\<moneromooo>** Mot yet, but I've not spent a lot of time on it today (and yesterday I was out).  
**\<fluffypony>** alright  
**\<saddam>** moneromooo: I want to decrypt it manually so I can detect transactions sent to an integrated address of mine in the tx pool. Is there another way to do it?  
**\<fluffypony>** then next weekend I'll be at Bitcoin in Use in Arnhem, Netherlands  
**\<moneromooo>** How will you know it's an integrated address of yours in the first place ?  
**\<fluffypony>** and there will be several other Monero-er-ains there as well  
**\<fluffypony>** including some devs, most notably hyc  
**\<xmrpromotions>** a few ppl told me they want to meet you there:)  
**\<saddam>** oh it's the meeting, sorry. I'll wait to discuss that later moneromooo  
**\<fluffypony>** if anyone else is going to be there please let me know, we can do a Monero supper on the Saturday or something  
**\<fluffypony>** next up is a chat about documentation  
**\<fluffypony>** wallet42 has raised the idea of opening up the wiki on Github  
**\<xmrpromotions>** https://twitter.com/Falkvinge/status/731833882102910977 wants to meet you too  
**\<fluffypony>** the advantages of this is that it keeps the documentation close to the code  
**\<fluffypony>** and you can PR to the wiki or (I think) edit it inline  
**\<fluffypony>** xmrpromotions: oh neat  
**\<fluffypony>** in fact, the wiki creates a .wiki.git project that's invisible-ish  
**\<fluffypony>** so it makes syncing to GitLab easy (setting up a GitLab mirror is on the list of things to do)  
**\<fluffypony>** downside is that you can't edit it anonymously, although creating a GH account is trivial  
**\<fluffypony>** and the other downside is that we have tons of scattered documentation right now  
**\<fluffypony>** so my thinking is that the wiki is a good idea for documentation, BUT then we need to kill off all these other sources of info  
**\<dEBRUYNE>** ^ I don't mind putting part of it together  
**\<fluffypony>** so the Monero wikia has to be shuttered and that info moved over  
**\<ArticMine>** There is information all over BCT  
**\<dEBRUYNE>** we could put the guides from Moneroexamples over there too, but he doesn't necessarily have to shutdown his "source" imo  
**\<fluffypony>** same goes for dev guides etc. on the website - we should instead spend the effort writing a small Ruby plugin for the site that pulls in info from the wiki and formats it appropriately  
**\<fluffypony>** then the wiki becomes a primary source of info  
**\<fluffypony>** dEBRUYNE: yeah we could do the same thing with MoneroExamples  
**\<fluffypony>** just have a plugin that grabs it from his repos and formats it  
**\<fluffypony>** if anyone has an issue with this speak now or forever hold your peace  
**\<i2p-relay>** {-anonimal} Such consolidation sounds like a good idea.  
**\<dEBRUYNE>** fluffypony: Yeah that'd be fine too  
**\<dEBRUYNE>** as long as it consolidates the information to a central place it's fine  
**\<fluffypony>** I'll leave the question open till the start of the Kovri meeting, if nobody has major objections raised by then I'll consider the decision in favour of the GitHub wiki  
**\<ArticMine>** It is actually really needed We have info all over the place  
**\<fluffypony>** (we discussed this here a few days ago as well, and everyone generally seemed in favour of it)  
**\<fluffypony>** ArticMine: agreed  
**\<xmrpromotions>** I like the idea. Consolidation and simplification should hopefully encourage more people to contribute to it  
**\<fluffypony>** that's it from my side - next meeting will be on the 5th of May, same time  
**\<fluffypony>** if anyone has anything they want to discuss, or any other points they want to bring up, now's the time  
**\<fluffypony>** we have 20-ish minutes till the Kovri meeting  
**\<ArticMine>** I am looking at the fee structure  
**\<moneromooo>** Does anyone fancy hacking the pool code to check top hash ?  
**\<moneromooo>** It shold be fairly easy.  
**\<i2p-relay>** {-anonimal} fluffypony: s/May/June/  
**\<dEBRUYNE>** ArticMine: Is your research going to be put in a somewhat formal paper?  
**\<moneromooo>** er, s/hacking/amending/ for the peanut gallery.  
**\<ArticMine>** I'll start with a post on getmonero forum to get feedback ideas  
**\<ArticMine>** then one can develop a paper  
**\<dEBRUYNE>** all right  
**\<ArticMine>** Along the lined of my prior post on BCT regarding the adaptive block limit and penalty function. There are issues with respect to to many options in fees with RingCT  
**\<dEBRUYNE>** Is anyone willing to work on adding Monero to Bitsquare? Afaik it's only a few minor tweaks in the UI code, see issue here -> https://github.com/bitsquare/bitsquare/issues/392 | I might be able to try if I got some more time, emphasis on try though  
**\<fluffypony>** anonimal: thanks, lol  
**\<moneromooo>** To th UI of... ?  
**\<dEBRUYNE>** Bitsquare itself  
**\<dEBRUYNE>** It needs an additional field for the tx key  
**\<moneromooo>** Ah, I just saw the screenshot.  
**\<dEBRUYNE>** It's mainly to resolve disputes, if any occur  
**\<dEBRUYNE>** Btw fluffypony, any ETA on a new point release that includes the performance branch? Or are we awaiting any more PRs?  
**\<gingeropolous>** ArticMine, i look forward to the adaptive fee structure thread  
**\<luigi1112>** Oh high team  
**\<luigi1112>** Hi team too  
**\<gingeropolous>** hi luigi1112  
**\<fluffypony>** dEBRUYNE: more PRs, also gives us time to see if there are issues with auto-convert  
**\<fluffypony>** *more issues  
**\<xmrpromotions>** hi luigi1112  
**\<moneromooo>** What would I do if I wanted to try and repro that problem ? just pull, build, run ?  
**\<dEBRUYNE>** fluffypony: all right  
**\<gingeropolous>** im just curious... is 0mq gonna happen before ringCT? or ... or all at once?  
**\<fluffypony>** moneromooo: yeah  
**\<fluffypony>** gingeropolous: no clue  
**\<moneromooo>** I'm certainly doing nothing about it.  
**\<gingeropolous>** well there's months until the next hardfork... though i guess 0mq doesn't affect consensus protocols?  
**\<dEBRUYNE>** well it was either Ring CT or 0MQ for you afaik moneromooo and I think we decided last time that Ring CT was the priority (this is just to clarify to anyone reading)  
**\<fluffypony>** ok starting the meeting relay for the Kovri meeting