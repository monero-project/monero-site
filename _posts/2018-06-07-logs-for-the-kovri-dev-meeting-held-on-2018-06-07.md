---
layout: post
title: Overview and Logs for the Kovri Dev Meeting Held on 2018-06-07
summary: Discussion of the latest Kovri development updates and the alpha release
tags: [dev diaries, i2p, crypto]
author: selsta / anonimal
---

# Logs

**\<anonimal>** 1. Greetings  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** 3. Contributor FFS check-in / status  
**\<anonimal>** 4. Alpha release discussion  
**\<anonimal>** 5. Public relations discussion  
**\<anonimal>** 6. Code + ticket discussion / Q & A  
**\<anonimal>** 7. Any additional meeting items  
**\<anonimal>** 8. Confirm next meeting date/time  
**\<anonimal>** Hi  
**\<oneiric\_>** Hi  
**\<rehrar>** Heyo  
**\<rehrar>** #kovrifam  
**\<rehrar>** stolen from Verge  
**\<anonimal>** I don't think fluffypony has been to a kovri meeting since at least 2016.  
**\<\_Slack> \<sean>** Hey  
**\<anonimal>** He name-drops kovri/kovri-related in interviews all the time and shows up to monero meetings.  
**\<anonimal>** Hi sean  
**\<rehrar>** like the Queen of England  
**\<rehrar>** shall I ping him?  
**\<\_Slack> \<sean>** Hey anonimal.  
**\<anonimal>** rehrar: you already did, during the prep  
**\<rehrar>** he's not in the room, and I guess he doesn't have any other IRC bridges  
**\<anonimal>** Anyone else here? Big channel, lots of lurkers  
**\<anonimal>** NSA bots, how's it going?  
**\<oneiric\_>** lol +badbot  
**\<anonimal>** Hi iDunk  
**\<iDunk>** o/  
**\<rottensalty07>** I'm here, but I'm not a three-lettered botnet.  
**\<anonimal>** Damn  
**\<anonimal>** They could at least speak up more  
**\<anonimal>** We know you're there  
**\<anonimal>** Some poor sap sitting behind a monitor sifting through regexps  
**\<anonimal>** Oh well  
**\<anonimal>** 2. Brief review of what's been completed since the previous meeting  
**\<anonimal>** If you look at the old logs, I used to prepare very detailed records for item 2.  
**\<rottensalty07>** Lol.  
**\<anonimal>** I then realized that A) most people didn't care B) the people who did care already knew what I was going to say.  
**\<anonimal>** So, I stopped preparing for item 2 :)  
**\<anonimal>** Here's a recent item I can easily grab:  
**\<anonimal>** https://twitter.com/getkovri/status/1004568146139865089  
**\<anonimal>** Which links to https://t.co/7fDhUBt75d  
**\<anonimal>** Oops  
**\<anonimal>** http://forum.getmonero.org/6/ideas/90300/oneiric-june-august-part-time-kovri-junior-developer  
**\<rottensalty07>** Those t.co shady links. Shame.  
**\<anonimal>** The tco link points to the forum link  
**\<rottensalty07>** I'm reading through.  
**\<anonimal>** So that needs more input and should be moved to funding.  
**\<anonimal>** Alex058 responded with thumbs up  
**\<anonimal>** I'll go ahead and retweet the getkovri tweet  
**\<oneiric\_>** Much appreciation anonimal and Alex058 :)  
**\<rottensalty07>** Retweeted by wheel too.  
**\<anonimal>** No problem  
**\<rehrar>** I support oneiric\_, but I'm biased since he is bae  
**\<rottensalty07>** oneiric\_: I'm happy to see others coming out to help rehrar and anonimal labor. We are nothing but a community.  
**\<rottensalty07>** rehrar: No homo.  
**\<rehrar>** all the homo  
**\<oneiric\_>** lol rehrar  
**\<anonimal>** oneiric\_ is British Aerospace?  
**\<oneiric\_>** ?  
**\<anonimal>** "bae" ;)  
**\<oneiric\_>** lol  
**\<anonimal>** Anyway, aside from that, lots has happened between now and the previous meeting. Lots of development.  
**\<anonimal>** Anything else on point 2.?  
**\<rehrar>** not sure if I should report here  
**\<rehrar>** or in 3.  
**\<rehrar>** they kinda bleed together  
**\<anonimal>** 3. Contributor FFS check-in / status  
**\<anonimal>** Go  
**\<rehrar>** I been working  
**\<rehrar>** end  
**\<rehrar>** no but really  
**\<rehrar>** so my last payout was delayed because kovri died down for about a month or two. So rather than try to just do busywork that wouldn't help anyone, I decided to delay my work and payment until we got the band back together so we can make sure we're all working toward a common goal  
**\<anonimal>** A month or two?! Umm, no.  
**\<rehrar>** but I was doing some build work with oneiric, particularly documenting  
**\<anonimal>** When was this?  
**\<rehrar>** \*a month  
**\<anonimal>** Two weeks is a month now?  
**\<rehrar>** intermittent people in #kovri from mid April to near end of May?  
**\<anonimal>** What does #kovri have to do with your FFS?  
**\<rehrar>** ummm...I'm just explaining why I felt it would be better to hold up on the work :/  
**\<anonimal>** If I can't make it for ~2 weeks, that's when other people are needed most; not the other way around.  
**\<anonimal>** Well, whatever your rationale, I don't think anyone else cares if you weren't working on your FFS so, you probably won't hear any other complaints.  
**\<rehrar>** I have been working on my FFS. In fact it should be done today or tomorrow.  
**\<anonimal>** Sucks for me though because I get the brunt of it.  
**\<anonimal>** You just said you delayed your work, and now you're telling me you've been working...  
**\<anonimal>** Which one is it?  
**\<rehrar>** .........  
**\<rehrar>** it hasn't been delayed the entire time anonimal  
**\<rottensalty07\_>** anonimal: I believe you got twisted there...  
**\<rottensalty07\_>** He didn't work on the main thing for few days, but was working documenting under the table...  
**\<rehrar>** I was working on it for a couple weeks, then took a break while things died down, and then resumed recently when things picked back up  
**\<anonimal>** If your last payout was 2 months ago, and you said you delayed your work for 2 months, that equals 0 work if I understand correctly that 2 - 2 = 0  
**\<anonimal>** Ok  
**\<rehrar>** yes, but as you corrected, it wasn't two months, and my "month or two" comment wasn't correct as you said  
**\<anonimal>** I can't account for under the table work.  
**\<rehrar>** excuse me for speaking flippantly  
**\<rehrar>** I can PR the documentation work that I've done, but you had said that you weren't liking the whole "DO NOT MERGE" culture that had happened last time I did a PR to prove work  
**\<anonimal>** So what's been done.  
**\<rehrar>** this is what I have been trying to explain :P  
**\<anonimal>** DO NOT MERGE equals not complete so why be paid for something that hasn't been completed.  
**\<anonimal>** WIP is one thing, but you're off the hook after this FFS.  
**\<anonimal>** So, is it done?  
**\<anonimal>** You set the deadlines of Q1, not me. I just want to see where we are.  
**\<rehrar>** Documenation with oneiric\_, which is in progress,  sent a PR with the recent multilingual changes that were on the getmonero.og site, lots and lots of logo work, fielding a few dev people that contacted out of interest, serhack collab for Mastering Monero, kovri defcon work  
**\<rehrar>** documentation is not done, but fairly far along. oneiric\_ can attest that we spent quite some time working through various OS's, as not all the instrutions worked 100% and there was a large amount of trouble shooting  
**\<rehrar>** \*instructions  
**\<oneiric\_>** That's true, we worked on Debian builds, and a couple of the build options.  
**\<anonimal>** Ok  
**\<rehrar>** the OS specific documentation also requires a custom HTML/CSS scheme for the Get Started page, which I have experimented with and not found a solution for  
**\<anonimal>** I don't think all of this is needed though.  
**\<oneiric\_>** I was a bit unsure of a couple flags, and why the build was failing without them.  
**\<anonimal>** We have a table in the readme  
**\<anonimal>** What's the goal?  
**\<rehrar>** one of the things we discussed was the rewrite the kovri docs  
**\<rehrar>** and to do it in a more user friendly wa  
**\<rehrar>** \*way  
**\<rehrar>** I do indeed have a table as well, sitting in my branch of kovri docs  
**\<rehrar>** I can PR it right this second for proof  
**\<anonimal>** I ended up having to do the docs myself. https://github.com/monero-project/kovri-docs/pull/48  
**\<anonimal>** It's June. This kind of stuff needed to be done Q1.  
**\<anonimal>** The user-guide could use improving though.  
**\<anonimal>** Anyway, whatever. What's done is done.  
**\<rehrar>** the new multilingual scheme also requires different stuff for the way the site is handled  
**\<rehrar>** PR sent  
**\<anonimal>** Ok  
**\<rehrar>** the Kovri site is quite different from the Monero site, in that it relies on the pulled docs, which has pros and cons. Simplifies some things and complicates others.  
**\<anonimal>** Yes, but this doesn't change that I'm having to do things myself; things you said you would do.  
**\<anonimal>** Also, what have you done with r/kovri?  
**\<anonimal>** AFAICT nothing for this FFS.  
**\<anonimal>** In fact, someone else had to come and moderate because of spam.  
**\<anonimal>** Have you done any r/kovri work that I'm unaware of?  
**\<rehrar>** no  
**\<anonimal>** "/r/Kovri design moderation and upkeep" \<-- https://forum.getmonero.org/9/work-in-progress/89677/rehrar-s-2018-q1-kovri-proposal  
**\<anonimal>** Ok  
**\<anonimal>** Anything else for point 3. Contributor FFS check-in / status ?  
**\<oneiric\_>** We already talked about mine, nothing else from me  
**\<anonimal>** 4. Alpha release discussion  
**\<anonimal>** The date is by defcon.  
**\<anonimal>** I have no clue where pigeons is.  
**\<anonimal>** I can't develop on BSD nor windows. These meta issue tickets are piling up.  
**\<anonimal>** The alpha will be a sum result of what the community can handle.  
**\<anonimal>** s/I can't develop on BSD nor windows/I can't develop on BSD nor windows because of https://github.com/monero-project/meta/issues/178 and https://github.com/monero-project/meta/issues/238  
**\<rehrar>** I'll ping pigeons right now  
**\<anonimal>** These shouldn't be issues. This is why we need to move on https://github.com/monero-project/meta/issues/237  
**\<anonimal>** I'm already donating my time. If I wasn't donating that, then I'd be donating my money.  
**\<rehrar>** hmmm...ok. Do you think it's worthwhile to have us kovri people set up some stuff and maintain them?  
**\<anonimal>** That's the point of #237, or at least one of the points.  
**\<anonimal>** We're running out of time, anything else on 4. Alpha release discussion?  
**\<rehrar>** right, but we can get an action item on that in that we can have someone do it specifically for Kovri. Other workgroups can follow suit as they want.  
**\<anonimal>** Moving the issue from Monero Project Meta to Monero Project Taiga defeats the purpose of decentralization.  
**\<anonimal>** But no one is stopping you from doing that.  
**\<rehrar>** I can set up a Kovri taiga :)  
**\<rehrar>** and we can have our various Kovri related tasks on there instead of on the getmonero one  
**\<anonimal>** That won't work, because you're paid by Ric do work for Monero Project.  
**\<anonimal>** Me or someone else would need to host it.  
**\<anonimal>** But you can do whatever you want.  
**\<anonimal>** 10 minutes left, we need to move on.  
**\<anonimal>** 5. Public relations discussion  
**\<anonimal>** \_4matter is doing some great work behind the scenes in this area.  
**\<anonimal>** He couldn't make the meeting but I'm assuming he'll make the next one.  
**\<anonimal>** I like his ideas/approach. He can speak more when he returns.  
**\<anonimal>** I advised him that he shouldn't repeat the work that rehrar's done. rehrar did a ton of work in the outreach area and, no fault of his own, it had mixed results.  
**\<rehrar>** it was an eye opening experience :D  
**\<anonimal>** I'll add an item to the next meeting regarding public relations.  
**\<anonimal>** rehrar got to learn that developers are like violinists:  
**\<anonimal>** they all think they're hot shit or that they are soloist material - but many are not :)  
**\<anonimal>** s/violinists/young classical violinists/  
**\<anonimal>** Anyway, inside classical humor.  
**\<anonimal>** I watched rehrar's jitsi meeting recently. I think you have a penchant for sales.  
**\<anonimal>** If you haven't successfully done that, I wouldn't be surprised if you do more of that.  
**\<rehrar>** sales? Like selling stuff?  
**\<rehrar>** Selling people on stuff, I guess.  
**\<anonimal>** Yeah, and PR.  
**\<rehrar>** *shrug* not really one of my interests, but thanks.  
**\<rehrar>** :)  
**\<ErCiccione>** sorry, just finished to read the logs, i'm a bit late to the party. anything you guys want to tell me about translating getkovri?  
**\<anonimal>** Well it's come in handy.  
**\<anonimal>** Hi ErCiccione  
**\<rehrar>** PR sent ErCiccione with the newest updates similar to getmonero.org  
**\<ErCiccione>** hello :)  
**\<rehrar>** but since getkovri is set up differently, there is still a substantial amount that is not done via tags  
**\<rehrar>** handled via kovri-docs  
**\<ErCiccione>** seen it, tomorrow i will give it a better look and i will change the instructions on taiga if needed  
**\<rehrar>** I'm updating the README for the site after this meeting  
**\<ErCiccione>** ok, perfect will read the workflow changes from there  
**\<anonimal>** Thanks for all the work you've done too, ErCiccione.  
**\<\_4matter>** anonimal: saw the ping above. On mobile and out of town for a wedding, but I will read through the above.  
**\<\_4matter>** :)  
**\<anonimal>** \_4matter: ok, I said that you weren't around and other things. No rush.  
**\<anonimal>** ErCiccione: anything else?  
**\<rehrar>** question: should we have a Kovri defcon meeting on the weekday so it's easier to attend? Separate from the overall defcon meeting on Saturdays?  
**\<ErCiccione>** anonimal: happy to help. no, not from me. Will try to find some more contributors for translations in future. didn't have much luck with that last reddit post  
**\<anonimal>** Yes, or move the defcon meetings to a later time on Saturdays.  
**\<rehrar>** I can request it. What time is good?  
**\<rehrar>** This time?  
**\<anonimal>** Good luck ErCiccione, you'll find them.  
**\<ErCiccione>** :)  
**\<anonimal>** I know where michael is geographically so I understand 15:00 UTC. It's really up to him since he's heading the show.  
**\<rehrar>** alright, I'll send him a message.  
**\<anonimal>** But if the community wants me involved, then they'll have to budge just a little.  
**\<anonimal>** If not, then they'll be leaving me out and a big chunk of the project.  
**\<anonimal>** Which has been the case.  
**\<rehrar>** Honestly, Kovri is one of the bigger things that should be at Defcon, at least imo.  
**\<anonimal>** Even though I repeatedly asked if the community meetings could be moved slightly.  
**\<anonimal>** For months. And months.  
**\<anonimal>** But here we are.  
**\<rehrar>** And I'll fight to make sure you and Kovri are fairly represented there.  
**\<rehrar>** For community meetings, would an hour or two later be better?  
**\<rehrar>** my client refuses to respond  
**\<anonimal>** 17:00 UTC if possible, but that conflicts with the community meetings.  
**\<anonimal>** sgp has always been pretty staunch about that timeslot.  
**\<rehrar>** I'll tweak a few nipples and see what I can't get done  
**\<anonimal>** ouch  
**\<rehrar>** sometimes you gotta pull out the big guns  
**\<anonimal>** tweezers  
**\<anonimal>** If they won't budge, whatever we did worked last time rehrar  
**\<anonimal>** Was it a Tuesday at 20:00 or around there  
**\<anonimal>** Yeah, that.  
**\<rehrar>** after the meeting, we can discuss your meta issues for decentralization. I've got a few ideas (that don't involve me or Core Team).  
**\<anonimal>** Defcon is a lot of work, that's for sure.  
**\<rehrar>** or whenever you have the time  
**\<rehrar>** dude, what makes defcon a bigger headache is that BCOS won't communicate with us :(  
**\<anonimal>** I don't have any time for anything. I don't even have time to get to "6. Code + ticket discussion / Q & A"  
**\<anonimal>** Ideas are welcome though, of course.  
**\<rehrar>** ok. I'll put it in the Issue  
**\<anonimal>** What's the deal with BCOS?  
**\<rehrar>** they...aren't responding to emails in a timely manner (or at all)  
**\<\_Slack> \<sean>** background Seinfeld music  
**\<anonimal>** Or you can paste here if you want and I'll respond  
**\<anonimal>** lol sean  
**\<anonimal>** "So what's the deal with BCOS?!"  
**\<rehrar>** Alright, i will be fairly unavailable starting tomorrow and through the 14th  
**\<anonimal>** "Can the NOT afford to communicate with Monero?!"  
**\<rehrar>** fyi for everyone here :)  
**\<rehrar>** will respond to Wire or Signal if need be, but limited IRC  
**\<anonimal>** Sorry sean, I can't top your line with anything funnier.  
**\<\_Slack> \<sean>** BCOS.  
**\<\_Slack>** Command sent from Slack by sean:  
**\<\_Slack>** ...that's the joke.  
**\<anonimal>** Ok. Thanks for the headsup rehrar.  
**\<rehrar>** it's crazy that nobody's ever heard of them before this  
**\<anonimal>** lol sean  
**\<rehrar>** but they got such a prominent spot at Defcon  
**\<rehrar>** *shrug* oh well  
**\<anonimal>** rehrar: and will anyone ever hear about them after defcon...  
**\<rehrar>** evidently they were at last defcon in a village or something  
**\<rehrar>** disappeared for a y ear  
**\<rehrar>** then came back for the next one :D  
**\<\_Slack> \<sean>** They did post that Coinbase is a sponsor, so I'm wondering why they're so damn disorganized.  
**\<anonimal>** I don't know.  
**\<rehrar>** anyways  
**\<oneiric\_>** For 6, I spent most of late-April to May working on multiple subscriptions. Few unit tests left, break it up into smaller chunks for review, and it should be ready.  
**\<anonimal>** Ok, anything else before we move on? We're in overdrive.  
**\<anonimal>** Thank you oneiric\_, keeping us on track.  
**\<anonimal>** 6. Code + ticket discussion / Q & A  
**\<anonimal>** Ok  
**\<anonimal>** Oh, I didn't mention, for this and for the FFS check-in, I'll be submitting the next milestone too.  
**\<rehrar>** woohoo!  
**\<rehrar>** you pushing the limits, man  
**\<anonimal>** lol, I'm glad *someone* is excited, haha  
**\<anonimal>** Well at close to 180 hours, yes, I'll be submitting.  
**\<rehrar>** for real, the community doesn't appreciate the stupid amounts of work you put in to this project  
**\<anonimal>** I'm tired of the free handouts and I also just want this FFS done as I'm sure everyone else wants too.  
**\<anonimal>** Thanks rehrar.  
**\<anonimal>** Yes, they don't.  
**\<anonimal>** And most people also think fluffypony is the CEO and lead developer of Monero.  
**\<anonimal>** As seen in every recent interview.  
**\<rehrar>** isn't that the most bizarre thing?  
**\<anonimal>** Or post somewhere.  
**\<rehrar>** I see a lot of people post that he started monero too  
**\<anonimal>** I think he's given up on correcting them.  
**\<anonimal>** Anyway, so I'm the CEO and lead developer of Monero too.  
**\<rehrar>** Creator, lead dev, and CEO. Must be nice. :P  
**\<anonimal>** And I have several lambos and boats.  
**\<anonimal>** Hey, this fantasy land is pretty sweet.  
**\<rehrar>** let me in :(  
**\<oneiric\_>** Any jets flown by unicorns?  
**\<anonimal>** 7. Any additional meeting items  
**\<anonimal>** rehrar: it's simple: just say it and it appears.  
**\<anonimal>** oneiric\_: yes. As many as you want.  
**\<rehrar>** No other items from me.  
**\<anonimal>** Nothing from me but I'm on autopilot right now anyway. If I missed something, please yell.  
**\<anonimal>** Shall we schedule a kovri defcon meeting and if the community channel agrees to be flexible, we just cancel the kovri defcon meeting, rehrar?  
**\<oneiric\_>** Same, anything else I have can be discussed outside meeting, or wait until the next one.  
**\<rehrar>** that sounds like a sane thing to do  
**\<rehrar>** pinging sgp\_[m] now  
**\<anonimal>** I'll open the github issue.  
**\<anonimal>** 8. Confirm next meeting date/time  
**\<rehrar>** Google calendar knows all  
**\<anonimal>** July 5th?  
**\<anonimal>** Or sooner?  
**\<anonimal>** I can't do 21st but can do 14th and 28th.  
**\<anonimal>** rehrar probably can't do the 14th  
**\<rehrar>** can't do 14th as stated, but can do 28th  
**\<rehrar>** ^ mind reader  
**\<anonimal>** oneiric\_: 28th?  
**\<oneiric\_>** 28th works for me too  
**\<sgp\_[m]>** anonimal I must have missed your repeated desire to move the commubity meetings. I didn't realize they conflicted with your schedule, especially since there was a significant period without kovri meetings. I'm open to working out a schedule that works for everyone  
**\<anonimal>** sgp\_[m]: this goes back to the beginning of the year if not later  
**\<anonimal>** Whenever you started the community channel.  
**\<anonimal>** It's all on github and/or irc logs.  
**\<anonimal>** I just gave up complaining.  
**\<anonimal>** rehrar: oneiric\_ I'll open a new issue for the next kovri meeting  
**\<rehrar>** ok, great  
**\<anonimal>** I do look forward to resolving the Meeting Solutions issue though.  
**\<oneiric\_>** right on  
**\<anonimal>** One simple solution is a meeting bot which uploads logs to a website automatically.  
**\<anonimal>** This is old-school, done-to-death solution and works well.  
**\<anonimal>** And when you want to know the next meeting: !meeting  
**\<rehrar>** that's pretty neat  
**\<anonimal>** supybot did/does this, as did others  
**\<anonimal>** I have no idea who's doing what anymore  
**\<anonimal>** I haven't been to a Tor meeting in ages but they had their bot the last I saw.  
**\<anonimal>** Anyway, simple solution; but doesn't satisfy the modern age very well afaict  
**\<rehrar>** ICO a solution  
**\<anonimal>** That's always the solution  
**\<rehrar>** it's never not the solution  
**\<anonimal>** "Honey can you grab me milk from the store?" "Sure, startup an ICO."  
**\<anonimal>** Alright, meeting done?  
**\<rehrar>** Ye  
**\<rehrar>** bai everyone  
**\<rehrar>** kisses for all  
**\<anonimal>** Thanks everyone  
