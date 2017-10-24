---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2017-06-04
summary: Brief review of what has been completed since last meeting, 96boards OpenHours showcase, website discussion, and code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<anonimal>** 1. Greetings  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** 3. Status of [96boards.org OpenHours showcase for Kovri / Monero](https://github.com/monero-project/meta/issues/46)  
**\<anonimal>** 4. Code + ticket discussion / Q & A  
**\<anonimal>** 5. Any additional meeting items  
**\<anonimal>** 6. Confirm next meeting date/time  
**\<anonimal>** Hi  
**\<moroccanmalinois>** Hi  
**\<anonimal>** Many crickets today, fluffypony moved monero meeting to next week. Maybe everyone thought kovri meeting was moved too.  
**\<anonimal>** Hi moroccanmalinois  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** RouterInfo, NetDb, I2NP (WIP in fork), cryptopp, HTTP, Reseed and docs work.  
**\<anonimal>** This month had kept me AFK more than I'd like because of various life issues. This month *should* be better.  
**\<anonimal>** Adding to 2.: rehrar website work, pigeons build work too  
**\<moroccanmalinois>** I started a private testnet but it didn't work and then i was busy. i will get back to it this week  
**\<rehrar>** Hi  
**\<anonimal>** moroccanmalinois: cool, ok :)  
**\<anonimal>** Anything else on point 2.?  
**\<rehrar>** Besides the added stuff?  
**\<anonimal>** I didn't get any more hackerone or VRP work done as I chose to focus on code instead. I think h1 stuff will be done soon though.  
**\<anonimal>** rehrar: anything, just a general re-cap.  
**\<anonimal>** Ok, moving on  
**\<anonimal>** 3. Status of [96boards.org OpenHours showcase for Kovri / Monero](https://github.com/monero-project/meta/issues/46)  
**\<rehrar>** Typing  
**\<rehrar>** Redesigned the getmonero.org custom framework, have semi-started a translation campaign, made a document on how to add and edit pages and translate them, and have done intermittent testing since then, and added a few more languages upon request.  
**\<anonimal>** Cool cool. How's the monero site coming along so we know when you can do a kovri FFS?  
**\<rehrar>** Leaving Russia tomorrow. Will be a 40 hour process getting home and the past week was spending time with wife's family since don't know when I'll be back.   But pages are being made, and I hope to have it done in less than three weeks.  
**\<anonimal>** Ok, sounds great. Safe travels.  
**\<rehrar>** For the Kovri FFS I would like a full list of things desired from me so I can put it in all at once. It'd be best so as not to have "oh wait this too" after funded and started.  
**\<rehrar>** Although being flexible is important obviously. :) But minimizing that is nice.  
**\<anonimal>** Indeed. I'll be happy to work with you on getting that part done.  
**\* anonimal** will be around when you're ready  
**\<rehrar>** Aight. Thanks.  
**\<anonimal>** No problem. Anything else on point 2.?  
**\<rehrar>** Nah  
**\<anonimal>** Oh, typo to what I said earlier this meeting. I meant "Last month had kept me AFK more than I'd like...", not "this" month. Oops X)  
**\<anonimal>** Will dEBRUYNE do editing for things like this or is that still bad IRC etiquette?  
**\* anonimal** fine either way  
**\<anonimal>** So point 3.,  
**\<anonimal>** fluffypony would need to be around. I think hyc too (if he's still onboard).  
**\<anonimal>** The podcast is June 8th, 6pm-7pm SAST  
**\<anonimal>** So... 4 days  
**\<anonimal>** I'll try to touch base with everyone tomorrow. Would like to be as prepared as possible.  
**\<moroccanmalinois>** live streamed ?  
**\<anonimal>** Ah, good question. I don't think so.  
**\* anonimal** wouldn't quote me on that though  
**\<moroccanmalinois>** lol k  
**\<anonimal>** I've only seen the podcasts on youtube and they weren't live.  
**\<anonimal>** Maybe #OpenHours can answer that  
**\* anonimal** checks site  
**\* anonimal** asked in #OpenHours  
**\<moroccanmalinois>** thanks  
**\<anonimal>** Any questions/comments on point 3.? We kind of need fluffypony around since he's the official interviewee  
**\<anonimal>** Alright, moving on,  
**\<rehrar>** Next. :P  
**\<anonimal>** 4. Code + ticket discussion / Q & A  
**\<anonimal>** I don't have any questions really. Doing some much-needed I2NP refactor work and flushing out some ideas for the messaging system (or lack thereof). WIP in my fork, stash not committed yet.  
**\<anonimal>** Anyone else?  
**\<anonimal>** (btw, open issue re: I2NP)  
**\<anonimal>** Mind you, it's all connected: RouterInfo, NetDb, I2NP -> NTCP transport layer. So this is all toward the alpha release.  
**\<anonimal>** If I can skip work that doesn't lead to a release, I will do it.  
**\<anonimal>** Until then, the rabbit hole needs fixing.  
**\<moroccanmalinois>** Just one question : i know there are known issues with NTCP, but i didn't see any major issue with SSU. A network with only kovri nodes enabling SSU but disabling NTCP should theroetically works ?  
**\<anonimal>** moroccanmalinois: yes, and we could technically release now. I thought it would be wise to remove as many of the log error messages (some of which really aren't errors per-se) so we don't get an influx of reports for known issues.  
**\<anonimal>** What do you think?  
**\<anonimal>** FYI the NTCP review lead to the RouterInfo rewrite -> NetDb work -> now I2NP work (because I'm here and it was driving me crazy).  
**\<moroccanmalinois>** I agree.  
**\<anonimal>** And there are/were lots of things to fix along the way anyway.  
**\<anonimal>** Ok. I'm very open to suggestions as we proceed.  
**\<anonimal>** moroccanmalinois: did you have any particular stumbling blocks when doing your testnet work?  
**\<moroccanmalinois>** i need a little more time to answer this. It was easy to see that it didn't work with NTCP since 15 min after the start, routers don't have anything in their netdb  
**\<anonimal>** Ah ok  
**\<moroccanmalinois>** with ssu, everything looks good but the tunnel didn't work  
**\<anonimal>** I can hop on slack more often and send a PM if you want to work out any details (if I can help in any way).  
**\<moroccanmalinois>** Thanks but i am jumping to irc, and i won't hesitate to contact you :)  
**\<anonimal>** Anything else on point 4.?  
**\<anonimal>** rehrar did you say you like doing backend webdev too?  
**\<anonimal>** moroccanmalinois: awesome, ok  
**\<rehrar>** Not my strongest point, but I am able, yes. And all of my speaking around the Reddit and other places is getting me in touch with a large number of devs, web included.  
**\<rehrar>** So what I can't do, I am positive I can get someone on.  
**\<anonimal>** Cooool. I like the sound of that.  
**\<anonimal>** I'm curious to know how far we could go with check.kovri.i2p  
**\<anonimal>** could/should  
**\<anonimal>** Anyway, that's distant stuff that we can talk more about later. I can't imagine a lot of code involved either.  
**\<rehrar>** Sure thing. We'll talk bout it soon.  
**\<danielesesta>** Good Evening  
**\<anonimal>** Once anonimal/kovri-site is moved to monero-project/kovri-site, I think I'll move the meta issue there.  
**\<anonimal>** Hello danielesesta.  
**\<rehrar>** Great to have you join @danielesesta read the backlog. :)  
**\<anonimal>** Ok so moving onto 5. Any additional meeting items  
**\<rehrar>** Ye I got one.  
**\<rehrar>** I have been thinking of starting a Kovri campaign of sorts. Marketing for devs. Just letting other open source devs know what's out there and let them know we exist and would welcome any help for improving privacy.  
**\<rehrar>** There's a number of different Reddits and websites for talking about your FOSS project.  
**\<rehrar>** I'd love to put a few things together (including that over-text interview with you we had discussed)  
**\<anonimal>** Alright, great idea.  
**\<anonimal>** When do you want to do this? I can schedule myself accordingly.  
**\<danielesesta>** we @ daashaus we are launching now some products but i believe in mid-august - september we can start on working on a proof of concept web based product on the kovri i2p  
**\<rehrar>** Im thinking next week. Need some time to resettle at home upon returning.  
**\<danielesesta>** with @rehrar we talked about making a medium of some sort for anonimous blogging  
**\<anonimal>** rehrar: ok, whenever you're ready, I'll be around.  
**\<anonimal>** Interesting. danielesesta is there a chat log or overview so I can catch up?  
**\<danielesesta>** we were talking privatly  
**\<anonimal>** rehrar: FYI there is a meta issue about this (developer search). Could we also coordinate there too?  
**\<rehrar>** Yes we can.  
**\<danielesesta>** we can launch something on beta pretty quickly if i add at least 3 devs for a month  
**\<danielesesta>** would be good maybe to run a design sprint of the product and get some ideas going with the team so we can put the project in the pipeline  
**\<danielesesta>** idk if you rehar and anonimal would like to join it maybe the first week of august?  
**\<anonimal>** danielesesta ok, so what exactly did you have in mind for the product?  
**\<rehrar>** I'd love to sure.  
**\<danielesesta>** i believe that at the moment being aninimous in the web is for an elite only, but there is a lot of people that has a very little know-how but still has a lot to contribute  
**\<danielesesta>** about telling stories and spread their words  
**\<anonimal>** So the product would be unknown at this point? Thus the meeting in August to generate ideas?  
**\<danielesesta>** our idea was to create a medium with a simple user-friendly UI/UX blogging platform for anyone to use without a big knowledge on how to be aninimous in the web  
**\<danielesesta>** that can protect them but still deliver  
**\<anonimal>** Ah, ok, great idea. Sorry, you did say that earlier but now I see what you mean.  
**\<serhack>** if you wanna help, please contact me, I am a web dev.. I'm building integrations for monero  
**\<rehrar>** Serhack, I was going to out you in touch with Daniel.  
**\<rehrar>** I will be making a slack channel soon for web devs.  
**\<rehrar>** So we can discuss Monero/Kovri needs.  
**\<danielesesta>** i think that could be a great use of a i2p browser  
**\<anonimal>** Nice, I like that idea.  
**\<danielesesta>** also a great proof of concept  
**\<serhack>** okay thanks rehrar  
**\<danielesesta>** and maybe for the first time we might apply some good design and cool features in the world of the blockchain  
**\<serhack>** :)  
**\<rehrar>** Ok. Anonimal I've got one thing to ask you.  
**\<danielesesta>** @serhack sure PM me so we keep in touch here  
**\<rehrar>** Oh, thank you you two for your contributions, Danielesesta and serhack  
**\<anonimal>** Ok, so in terms of housekeeping: danielesesta or anyone, would you be willing to open a new issue at https://github.com/monero-project/meta/issues explaining your idea/proposal so we can all have a point of contact and collaboration? Or is there a better alternative?  
**\* anonimal** would usually refer to the kovri repo but that's better for code issues  
**\<serhack>** forum :)  
**\<anonimal>** Hmm, well, the forum doesn't email me notifications (I've tried everything)  
**\<danielesesta>** i believe we can move on our own without bothering anyone we are all people that can manage ourself efficiently i believe  
**\<danielesesta>** if we encounter any issue we can email each other directly  
**\<anonimal>** It's more of a friendly reminder, not necessarily "let's all talk here and do all our work in the meta issue"  
**\<rehrar>** Given that the tasks for Kovri are more varied than just web work, as discussed above, what do you think of me opening a FFS of not necessarily web work and have it be objective based, but an hourly based sort of FFS that I can do a bunch of various tasks (Reddit, Web, Outreach campaign, etc). Whatever Kovri needs basically.  
**\<anonimal>** danielesesta: otherwise, if someone wants my input, they'll have to keep me apprised because I'm pretty busy. Just an FYI.  
**\<anonimal>** rehrar: I would advise two separate FFS' then: one for strictly website and one for the other.  
**\<anonimal>** But then again I'd also ask for fluffy's or luigi's or any monero-dev's input too.  
**\<anonimal>** A general staffer sounds good but I have no idea what everyone else thinks.  
**\<anonimal>** Ok, we're out of meeting time. Any last thoughts on additional meeting items?  
**\<rehrar>** Ok. If they're on board with the "general staffer" as you put it, then I'd love to give it a go. There's lots of house keeping to do. :)  
**\<rehrar>** Nope  
**\<anonimal>** Ok. 6. Confirm next meeting date/time  
**\<anonimal>** So, monero's is next week.  
**\<anonimal>** But we usually two ours every two weeks.  
**\<anonimal>** Maybe we'll have a mini-meeting next week after monero's?  
**\<anonimal>** \*do ours  
**\<anonimal>** Any objections to a meeting next week?  
**\<moroccanmalinois>** no objection  
**\<anonimal>** Ok, I'll set one for next week.  
**\<rehrar>** Ye. Let's do it.  
**\<anonimal>** One last thing for additional meeting items: I wanted to say hi, recognize, and thank all kovri contributors for their contributions and camaraderie.  
**\* anonimal** typing  
**\<anonimal>** A former contributor made a erroneous comment implying there were no contributors to the project. A blatant lie that I felt was disrespectful to everyone involved.  
**\<anonimal>** Anyway, so thanks everyone.  
**\<anonimal>** End of meeting!  