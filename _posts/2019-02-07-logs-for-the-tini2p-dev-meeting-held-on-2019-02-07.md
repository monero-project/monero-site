---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-02-07
summary: Project design & goals, Current status, Timeline, Roadmap, Contributors outreach, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**\<oneiric\_>** 0. Greetings  
**\<oneiric\_>** hallo  
**\<Corklander>** Hello!  
**\<oneiric\_>** 1. Project design + goals  
**\<oneiric\_>** the main (somewhat rough) design document is here: https://github.com/tini2p/tini2p/DESIGN.md  
**\<Corklander>** I show this as the URL: https://github.com/tini2p/tini2p/blob/master/DESIGN.md  
**\<oneiric\_>** i2p components will be separated into (mostly) independent modules  
**\<oneiric\_>** thanks Corklander   
**\<oneiric\_>** only the minimal set of features for a functioning i2p router will be implemented  
**\<oneiric\_>** as new protocols come online (LS2, ECIES) old crypto will be deprecated and removed  
**\<oneiric\_>** any questions?  
**\<oneiric\_>** comments?  
**\<Corklander>** Are there any specific architecture requirements? As in, need an AES-boosted CPU, etc.?  
**\<oneiric\_>** not that i can tell so far, but i haven't focused on multi-platform too much yet  
**\<oneiric\_>** need to get it working on a single platform first :)  
**\<Corklander>** Yup. :)  
**\<oneiric\_>** that being said, i'm trying to keep portability in mind, to ease multi-platform suppoort  
**\<oneiric\_>** support\*  
**\<Corklander>** A super-slim router would have the distinct advantage of very high portability even to SoCs.    
**\<oneiric\_>** it would be amazing to run on a super slim board like that  
**\<oneiric\_>** that may require a port to c which is a potential path to go down once an mvp router is finished  
**\<oneiric\_>** ^ maybe  
**\<Corklander>** Also good to hear.  
**\<oneiric\_>** a rust impl is also on the table, but we can revisit that in the roadmap section  
**\<oneiric\_>** are we good to move on?  
**\<kinghat>** is there a non dev variant of #tini2p-dev?  
**\<oneiric\_>** kinghat: absolutely #tini2p  
**\<oneiric\_>** moving on  
**\<oneiric\_>** 2. Current project status  
**\<oneiric\_>** currently building out the ntcp2 transport, and will move to i2np, tunnels and netdb next.  
**\<oneiric\_>** client modules are completely open to independent, parallel dev  
**\<oneiric\_>** core components can be developed in parallel with some communication  
**\<oneiric\_>** the code is still in somewhat high flux, and am just rebasing on a single commit atm  
**\<oneiric\_>** fairly close to having the networking + session management for the ntcp2 transport  
**\<oneiric\_>** after that, ntcp2 will be more-or-less finished  
**\<oneiric\_>** any comments questions?  
**\<Corklander>** This is more architectural/design: what license do you plan to release?  
**\<oneiric\_>** current license is BSD-3 (to be compatible w/ kovri+monero)  
**\<oneiric\_>** it may change if necessary, currently don't see a need to  
**\<Corklander>** Good. :)  
**\<oneiric\_>** ready to move on?  
**\<oneiric\_>** 3. Development timeline estimates  
**\<oneiric\_>** the code should stabilize in the next 1-2 weeks, and i'll change to making PR/MRs against the master branch  
**\<oneiric\_>** after finishing ntcp2, i2np + tunnels should take ~1-1.5 weeks each to get working  
**\<oneiric\_>** netdb will be somewhat more involved, and may take 2-3 weeks to get working  
**\<oneiric\_>** the router context should be fairly easy to implement, ~1 week  
**\<oneiric\_>** garlic encryption, notably AES+SessionTag management, is fairly complicated, ~2-3 weeks  
**\<oneiric\_>** total estimated time for core components: ~7-12 weeks  
**\<oneiric\_>** client components are somewhat easier to implement  
**\<oneiric\_>** reseed and address book should take ~1.5-2 weeks each  
**\<oneiric\_>** the most complicated components are i2cp and the proxy interfaces  
**\<oneiric\_>** atm, only socks + http proxies will be implemented as APIs for external apps (~2-2.5 weeks each)  
**\<oneiric\_>** i2cp is the interface between the client & router context, ~2 weeks  
**\<oneiric\_>** client destinations manage the interface b/w proxies & the client context, ~1.5-2 weeks  
**\<oneiric\_>** total estimated time for client components: ~7-8.5 weeks  
**\<oneiric\_>** total time for mvp router: ~4-5 months  
**\<oneiric\_>** the above estimates are conservative, and assume a singular developer  
**\<oneiric\_>** actual dev time may be much less  
**\<oneiric\_>** questions comments?  
**\<oneiric\_>** ready to move on then?  
**\<Corklander>** Do you see use of wireframes/mockups that could help make development testing faster?  
**\<oneiric\_>** currently using Catch2 as a testing framework  
**\<oneiric\_>** all code so far is covered by test cases  
**\<oneiric\_>** currently hammering out some network bugs for ntcp2 sessions, net tests have been extremely helpful here, for example  
**\<oneiric\_>** does that answer your question?  
**\<oneiric\_>** or were you talking about something else?  
**\<Corklander>** (I'm jumping the gun and asking about how to share workload using wireframes.)  
**\<oneiric\_>** oh, i have a diagram for component interaction that i'll finish and post after the meeting  
**\<oneiric\_>** it still contains streaming + SAM components, which likely won't be implemnted  
**\<oneiric\_>** streaming library may be, but it may turn out to be unnecessary  
**\<oneiric\_>** any more discussion, or ready for roadmap item?  
**\<oneiric\_>** 4. Roadmap  
**\<oneiric\_>** finish ntcp2 transport -> netdb impl -> tunnel impl -> garlic impl -> router context impl  
**\<oneiric\_>** client destination impl -> address book impl -> socks 4a + http proxies impl -> client context impl  
**\<oneiric\_>** the above roadmap is assuming singular dev, multiple devs will parallelize efforts  
**\<oneiric\_>** questions comments?  
**\<Corklander>** On roadmap, should there be a list of infrastructure? As in git host, communications info, etc?  
**\<oneiric\_>** haven't thought too much about infrastructure at this point  
**\<oneiric\_>** once code is stable (~1-2 weeks), will dedicate more time to things like CI, git host, comms, etc  
**\<oneiric\_>** right now, the project is hosted on github/lab  
**\<oneiric\_>** heard about gitea, which also sounds like a great option  
**\<oneiric\_>** will likely setup a meta meeting to discuss all of that  
**\<oneiric\_>** thanks for bringing that up Corklander, easy to forget about  
**\<oneiric\_>** transitions nicely to the next item  
**\<oneiric\_>** any more discussion before moving on?  
**\<oneiric\_>** 5. Project management + contributor outreach  
**\<oneiric\_>** i am a developer, not a management type, and the skillsets are very different  
**\<oneiric\_>** i can do project management, but this is not my strength  
**\<oneiric\_>** at the moment, i am the only one contributing, so imho, project management is not that crucial  
**\<oneiric\_>** the importance will shift once more contributors become involved  
**\<oneiric\_>** it is good to be forward looking, and some time/effort should be dedicated to reaching out to community members with proven project management experience  
**\<oneiric\_>** contributor outreach is hugely important, and once core components are in place, i will dedicate more time to looking for developers to help out  
**\<oneiric\_>** any community help finding project managers + contributors is greatly appreciated  
**\<oneiric\_>** questions comments?  
**\<oneiric\_>** ok, almost top of the hour, final item  
**\<Corklander>** You've listed time as your only requirement for now. If you have assistance with coding it would likely impact your time to get the current roadmap finished.   
**\<Corklander>** What requirements would you like for people to assist you so that you can dedicate your time best?   
**\<oneiric\_>** absolutely, more contributors familiar with i2p (or somewhat easily brought up to speed) should decrease dev time  
**\<oneiric\_>** for client components, socks or http proxies should be the easiest to take on  
**\<oneiric\_>** familiarity with c++ is a req  
**\<oneiric\_>** doesn't have to be expert level, but novice-intermediate  
**\<oneiric\_>** i'm still a bit of a c++ greenhorn, so it would take a bit of time for me to train devs  
**\<oneiric\_>** anyone wanting to contribute to core components should be \*very\* familiar with i2p, or willing to invest a lot of independent time catching up on docs  
**\<oneiric\_>** will try to guide people through the mire as best as possible  
**\<oneiric\_>** for people totally unfamiliar with i2p, socks + http proxies will be the easiest introduction  
**\<oneiric\_>** socks being the easier of the two  
**\<oneiric\_>** ok, so we're a little over time  
**\<oneiric\_>** final item  
**\<oneiric\_>** 6. Next meeting time  
**\<oneiric\_>** is this a good time/day for people (know some are in UTC+1, so maybe its a bit late?)  
**\<oneiric\_>** also, thank you to all that attended/participated!  
**\<Corklander>** I'm good with this or later for weekdays.  
**\<oneiric\_>** ok  
**\<oneiric\_>** anyone else need a different time/day?  
**\<oneiric\_>** so next meeting will be 18:00 UTC 21-02-2019 (two weeks from today)  
**\<oneiric\_>** many thanks again to everyone who attended :)  
**\<Corklander>** Thanks oneiric!  
**\<oneiric\_>** meeting adjourned \*gavel strike\*  
