---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2017-03-26
summary: Brief review of what has been completed since last meeting, Monero HackerOne Bounty, and code & open tickets discussion
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

### Logs  

**\<anonimal>** 1. Greetings  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<i2p-relay> {-vtnerd}** oh I guess there is one more thing. the backend was going to hopefully push updates to connected clients  
**\<anonimal>** 3. Monero HackerOne Bounty https://www.reddit.com/r/Monero/comments/5zmywx/monero_bounty_for_hackerone/  
**\<i2p-relay> {-fluffypony}** ok anonimal, all yours  
**\<anonimal>** 3. Code + ticket discussion / Q & A  
**\<anonimal>** 4. Any additional meeting items  
**\<anonimal>** 5. Confirm next meeting date/time  
**\<anonimal>** Greetings.  
**\<samsunggalaxyplayer>** hey!  
**\<guzzi>** Hi  
**\<i2p-relay> {-olark}** o/  
**\<guzzi>** Sweet olark  
**\<i2p-relay> {-olark}** Yeah I missed the monero meeting unfortunately :/  
**\<i2p-relay> {-olark}** I'll read the logs  
**\<guzzi>** Really good meeting  
**\<anonimal>** On topic please  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** https://forum.getmonero.org/9/work-in-progress/86967/anonimal-s-kovri-full-time-development-funding-thread?page=&noscroll=1#post-90733  
**\<anonimal>** ^ for a summary on my part  
**\<anonimal>** moroccanmalinois has done some great work since the previous meeting. We have a new utility binary with multiple features. He's also done work elsewhere in the codebase.  
**\<moroccanmalinois>** :)  
**\<anonimal>** guzzi has also contributed to the utility binary. guzzi can you link to your FFS if you're doing work summaries/reports?  
**\<moneromooo>** What does this utility binary do, in a nutshell ?  
**\* anonimal** wants to say ./kovri-util -h  
**\<guzzi>** I will add summary tonight  
**\<guzzi>** On phone  
**\<moneromooo>** OK, I'll try to pull someday and check :P  
**\<anonimal>** guzzi: then give us a tl;dr for point 2. please  
**\<moroccanmalinois>** moneromooo base32, base64, routerinfo( reads a RI file) and su3file (reads an su3file)  
**\<moroccanmalinois>** and the crypto benchmark  
**\<guzzi>** Added benchmarks to utility  
**\<anonimal>** guzzi: I already said that, didn't you do other things too? Like research, etc.?  
**\<guzzi>** Starting in on instance class refactor a d todos  
**\<guzzi>** Researched address book for possible lmdb  
**\<guzzi>** Sgould be easy  
**\<guzzi>** Should  
**\<anonimal>** What should be easy? None of that looks easy...  
**\<anonimal>** Anyway, we'll save that for later. Anything else on point 2.?  
**\<guzzi>** Relatively easy from db perspective. Difficult from kovri perspective yes  
**\<anonimal>** 3. Monero HackerOne Bounty https://www.reddit.com/r/Monero/comments/5zmywx/monero_bounty_for_hackerone/  
**\<anonimal>** fluffypony: ^ thoughts?  
**\<i2p-relay> {-fluffypony}** so my thoughts is that we should just do a general fund across all the projects  
**\<i2p-relay> {-fluffypony}** because HackerOne let's us basically apportion stuff as needed  
**\<i2p-relay> {-fluffypony}** so we don't have to give out the entire bounty for some stupid XSS attack  
**\<anonimal>** Ok. I'll have to talk with them about setting up Monero. Do we include the GUI into /monero or create /monero-gui? We can probably wrap it into /monero if needed. Do we create /monero-site ?  
**\<i2p-relay> {-fluffypony}** anonimal: everything goes under the Monero umbrella / bounty, right?  
**\<i2p-relay> {-fluffypony}** just that each actual sub project can be represented  
**\<anonimal>** I'm speaking purely about H1 accounts.  
**\<anonimal>** We do whatever we want with fund management.  
**\<anonimal>** fluffypony: it's possible but then all monero developers have access to all bug reports for all subprojects  
**\<anonimal>** So that brings up a trust issue. I'm fine with the idea but it should be mentioned.  
**\<i2p-relay> \* fluffypony** ponders  
**\<anonimal>** Also I'd like to have access to the account as account holder. This is something I couldn't do if we throw into one account.  
**\<anonimal>** And whoever is the account holder for all subprojects has *that* responsibility. And if the single account is ever compromised...  
**\<anonimal>** In other words, it's not very decentralized in terms of who controls accounts.  
**\<i2p-relay> {-fluffypony}** anonimal: doesn't really matter if it's compromised, because there's no money there?  
**\<anonimal>** fluffypony: it's about access to reports. If we don't care about who has access to reports, then there's not much reason to use HackerOne  
**\<i2p-relay> {-fluffypony}** mooneroo: for the monero-project GitHub account the core team all have the password, because there's no easy way to share that control otherwise - could we not do the same for H1?  
**\<anonimal>** I mean, there are features/benefits, but access to vulnerabilities is a big issue.  
**\<i2p-relay> {-fluffypony}** amongst maintainers I mean  
**\<anonimal>** pinging mooneroo or moneromooo?  
**\<anonimal>** We could do that I think.  
**\<moneromooo>** Well, some members of hte monero core team are pretty much inactive AIUI. So no need to get them access to this.  
**\<i2p-relay> {-fluffypony}** whoops  
**\<i2p-relay> {-fluffypony}** I meant anonimal  
**\<i2p-relay> {-fluffypony}** sorry ignore typo  
**\<i2p-relay> {-fluffypony}** anonimal: for the monero-project GitHub account the core team all have the password, because there's no easy way to share that control otherwise - could we not do the same for H1?  
**\<i2p-relay> {-fluffypony}** moneromooo: would be among maintainers  
**\<i2p-relay> {-fluffypony}** lol  
**\<i2p-relay> {-fluffypony}** the core team have passwords for stuff like this as a fallback  
**\<anonimal>** I don't think inactive people should have access to H1. Only on a as-needed basis. Maybe when they become active again?  
**\* moneromooo** misread anonimal's ping, nevermind  
**\<ArticMine>** The drop dead theory  
**\<i2p-relay> {-fluffypony}** ^^  
**\<i2p-relay> {-fluffypony}** it's just an anti-bus factor  
**\<i2p-relay> {-fluffypony}** the main people using it would be maintainers, which are currently just me and anonimal  
**\<moneromooo>** I was given access a while back (though might have been rescinded by now).  
**\<anonimal>** No, you have access to kovri  
**\<i2p-relay> {-fluffypony}** and I don't think there's a big issue with maintainers having visibility on other reports  
**\<anonimal>** As does EinMByte but is he still alive?  
**\<anonimal>** Alright, so any other big issues with merging everything into a single account?  
**\<anonimal>** And how many subprojects do we apply this too? I can PR the VRP to all appropriate subprojects and update docs as needed.  
**\<i2p-relay> {-fluffypony}** we can always split it out later  
**\<i2p-relay> {-fluffypony}** I think the only relevant projects are: GUI, CLI, Kovri, site  
**\<anonimal>** I imagine the site and forum could gain from this too.  
**\<i2p-relay> {-fluffypony}** forum is being deprecated, so let's leave it off  
**\<i2p-relay> {-fluffypony}** but there will be some forum functionality moving into the site (FFS in particular)  
**\<i2p-relay> {-fluffypony}** so keeping the site there is necessary  
**\<anonimal>** Ok  
**\<i2p-relay> {-fluffypony}** anonimal: maybe an infrastructure one too, which is pigeons' domain?  
**\<jacobjeweler>** Nodepool code perhaps?  
**\<moneromooo>** Meh. And no real maintainer.  
**\<jacobjeweler>** Snipa's work  
**\<i2p-relay> {-fluffypony}** @JacobJeweler no, that's not a core project  
**\<i2p-relay> {-fluffypony}** external projects can do their own H1 stuff  
**\<anonimal>** fluffypony: sure, as long as we can communicate that to people e.g., use the Meta repo has a point of contact + place to post VRP etc.  
**\<i2p-relay> {-fluffypony}** I think we should come up with a paragraph for the READMEs  
**\<anonimal>** Ok. We need the VRP somewhere though. It's solid (moreso than having nothing).  
**\<pigeons>** we lost irc2p again  
**\<i2p-relay> {-pigeons}** ok i'll file a few reports as someone else for a bounty then  
**\<i2p-relay> {-fluffypony}** works here pigeons  
**\<moneromooo>** One thing also that's probably needed: a list of "this does not count". Like all that's known already.  
**\<i2p-relay> {-pigeons}** hmm yeah, just some selective drops, oh well  
**\<moneromooo>** But this is easily a bone of contention otherwise.  
**\<anonimal>** moneromooo: that's included in H1. We can incorporate that into one of the features they have.  
**\<i2p-relay> {-fluffypony}** moneromooo: agreed  
**\<i2p-relay> {-fluffypony}** every report is subjective  
**\<anonimal>** (iirc)  
**\<anonimal>** Ok, so I will contact them and move these into a single account.  
**\<anonimal>** And do all the related things necessary.  
**\<anonimal>** As for funding,  
**\* anonimal** reads backlog for fluffypony's message  
**\<anonimal>** "general fund across all projects"  
**\<anonimal>** Ok,  
**\<anonimal>** separate from the dev fund? i.e., separate address too?  
**\<i2p-relay> {-fluffypony}** this will be an FFS  
**\<i2p-relay> {-fluffypony}** just open-ended with some minimum  
**\<anonimal>** Ok, so no separate donation address. All FFS, and funds are held like the dev fund?  
**\<anonimal>** (or like any FFS project)  
**\<i2p-relay> {-fluffypony}** yes  
**\<i2p-relay> {-olark}** How much money should we aim to raise for H1?  
**\<i2p-relay> {-olark}** Assuming this will need to be replenished every now and then.  
**\<i2p-relay> {-fluffypony}** I have no idea - suggestions?  
**\<anonimal>** https://forum.getmonero.org/6/ideas/87597/monero-bounty-for-hackerone suggested 500 total for all projects  
**\<anonimal>** (500 XMR)  
**\* anonimal** checks value  
**\<i2p-relay> {-fluffypony}** olark: yes but bounties are normally denominated in USD  
**\<i2p-relay> {-fluffypony}** so potentially it wouldn't need to be replenished, or hardly  
**\<i2p-relay> {-fluffypony}** unless we have lots and lots of exploits  
**\<anonimal>** Hmmm... well, at current price, 500 seems reasonable IMHO. That could attract some serious researchers.  
**\<anonimal>** Thoughts?  
**\<i2p-relay> {-olark}** Probably easier to outline what the rewards should be for LOW, MEDIUM, and HIGH severity of vulnerabilites and then figure out how much money should be raised.  
**\<anonimal>** We don't have X thought: X being how many of Y.  
**\<anonimal>** *though  
**\<anonimal>** If we run out of the fund, we can always open a new FFS.  
**\<i2p-relay> {-olark}** 500 xmr seems like a good start anyway.  
**\<i2p-relay> {-fluffypony}** yeah let's just stick to that and see how it goes  
**\<anonimal>** Ok  
**\<i2p-relay> {-olark}** Right.  
**\<anonimal>** Awesome. Anything else on point 3.?  
**\<i2p-relay> {-fluffypony}** next?  
**\<anonimal>** Do we extend 20 minutes or are we screwed because of earlier?  
**\<moneromooo>** There are two point 3s.  
**\<moneromooo>** Extend, and whoever wants to leave leaves :)  
**\<i2p-relay> {-fluffypony}** we can extend to finish up, but let's do it ASAP so I can move on to tagging and releasing  
**\<anonimal>** lol, yes. Github turns that into 4 if I copypasta. If I get original text, it's 3.  
**\<anonimal>** 4. Code + ticket discussion / Q & A  
**\<anonimal>** Damn, well, I could easily spend 20-30 minutes on this point because we haven't had a meeting in so long.  
**\* anonimal** grabs link instead  
**\<anonimal>** Ok, here we are https://github.com/monero-project/kovri/issues?q=is%3Aopen+is%3Aissue+milestone%3A0.1.0-alpha  
**\<moroccanmalinois>** A little question about the reload : what is supposed to happen if no param changed ?  
**\<anonimal>** #187 isn't as obvious as I had hoped. I'll have to approach it differently, from the basics, and start by actually getting some unit-tests for ntcp.  
**\<moroccanmalinois>** if the user didn't specified a port, should it get a new random one ?  
**\<anonimal>** So that will be fun.  
**\<anonimal>** As for #340, #369 is moot because of the other open ticket for cutting out all unnecessary sig types,  
**\<anonimal>** #305 should actually be closed for now,  
**\<anonimal>** guzzi is working on #96. It's not mandatory for 0.1.0-alpha release so I may move it to next milestone,  
**\<anonimal>** #9 needs review and may not really be needed after all  
**\<guzzi>** I can work on those unit tests for ntcp if u want  
**\<anonimal>** No that's fine guzzi, thank you.  
**\<anonimal>** All that leaves is #46 and #362  
**\<anonimal>** ajs is on #46. He's supposed to be in talks with pigeons I think. I haven't heard from ajs in a little while though. ping ajs.  
**\<anonimal>** #362 comes at the very end once we tag. I'll throw it on AUR and away we go.  
**\* anonimal** reads moroccanmalinois's lines  
**\<anonimal>** moroccanmalinois: if no port specified in config, that would be a default option. I don't like that though.  
**\<anonimal>** What I think we should do is add a default random port to the config somehow.  
**\<anonimal>** Otherwise we jump through these kinds of hurdles. But doing that for binary releases... hmm...  
**\<i2p-relay> {-olark}** We could just set a random port when a new router context is initialized.  
**\<anonimal>** moroccanmalinois: worst case scenario, if the app is still running during restart (assuming because client and core are the only things being restarted), we reuse the previous port.  
**\<moroccanmalinois>** ok  
**\<i2p-relay> {-olark}** It currently just defaults to 0 afaik.  
**\<anonimal>** ?  
**\<i2p-relay> {-olark}** In router context.  
**\<i2p-relay> {-olark}** m_Port  
**\<i2p-relay> {-olark}** Assuming we are talking about the same thing.  
**\<anonimal>** Nope, you're not looking in the right area.  
**\<i2p-relay> {-olark}** k  
**\<anonimal>** I can explain more after the meeting. moroccanmalinois can probably too because it sounds like he understands the design as well.  
**\<moroccanmalinois>** m_Port == 0 means choose a random one. another question : i read somewhere in the java doc about a "Laptop mode", i think the pb it tries to solve is more about dynamic ips. Is it on the roadmap ?  
**\<anonimal>** Nope, not on the roadmap but it can be.  
**\<anonimal>** Just open a feature request.  
**\<moroccanmalinois>** :) ok  
**\<pero>** it was just brought to my attention yesterday? that there's a ticket for pr'ing the logo - i was under the impression that my involvement with that was done, but looks like there's some miscommunication and i can get around to that soon-ish  
**\<anonimal>** Anything else on point 4.? We don't have to rush this part if needed.  
**\<anonimal>** What/  
**\<anonimal>** ?  
**\<anonimal>** Link?  
**\<guzzi>** Learning the instance class  
**\<pero>** what what  
**\<guzzi>** Anyone apposed to creating member variables for router context and client context.  
**\<guzzi>** And giving them proper constructors  
**\<guzzi>** It was a todo to find out why they are this way currently  
**\<anonimal>** guzzi: please provide line number and file  
**\<anonimal>** pero: what's your question?  
**\<pero>** there is no question  
**\<anonimal>** guzzi: for the TODO  
**\<anonimal>** pero: there's a question mark. What is your point?  
**\<pero>** where is there a question mark  
**\<moneromooo>** After "yesterday".  
**\<moneromooo>** Looks like a typo for "".  
**\<pero>** this is ticket discussion isnt it - i was chiming in on something that was ostensibly assigned to me without my knowledge  
**\<ajs>** anonimal: pigeons said he got a server for #46, but waiting for access to move over files  
**\<anonimal>** pero: nothing was assigned to you  
**\<anonimal>** ajs: ok thanks  
**\<pero>** alright well i guess there's nothing to do then  
**\<guzzi>** Instance.cc  
**\<guzzi>** Initialize function  
**\<guzzi>** First comment inside  
**\<guzzi>** Sorry github mobile has no li e numbers  
**\<guzzi>** Line  
**\<i2p-relay> {-fluffypony}** ok maybe this discussion should happen later when you're at a computer, guzzi  
**\<anonimal>** Good idea.  
**\<i2p-relay> {-pigeons}** i'm gonna confirm some things from ya'll in a few, fqdn and git repo to pull from  
**\<anonimal>** Anything else on 4.?  
**\<guzzi>** I will comment in the pr later  
**\<anonimal>** guzzi: I know what you're talking about and see what you want, let's talk more later  
**\<guzzi>** Cool  
**\<anonimal>** 5. Any additional meeting items  
**\<anonimal>** No additional items from me afaict  
**\<moroccanmalinois>** One last question : an external app that wants to use kovri (like monero GUI), should it includes only the libs ? or it can include things from src/app ?  
**\<anonimal>** Nothing from app. I see no reason for it to include anything from app.  
**\<anonimal>** Which means we get things out of app that we need elsewhere. I wrote TODO's.  
**\<moroccanmalinois>** Perfect. thx  
**\<anonimal>** Anything else on 5.?  
**\<moroccanmalinois>** not for me  
**\<anonimal>** k  
**\<anonimal>** 30 seconds...  
**\<anonimal>** 6. Confirm next meeting date/time  
**\<i2p-relay> {-fluffypony}** 2 weeks (tm)  
**\<anonimal>** 18:00 UTC two weeks from today as usual?  
**\<anonimal>** Ok  
**\<i2p-relay> {-fluffypony}** April 9th  
**\<anonimal>** Thanks everyone  