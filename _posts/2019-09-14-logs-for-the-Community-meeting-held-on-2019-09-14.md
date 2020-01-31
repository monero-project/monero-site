---
layout: post
title: Logs for the Community Meeting Held on 2019-09-14
summary: Community highlights, CCS updates, Workgroup report, and miscellaneous
tags: [dev diaries, crypto]
author: el00ruobuob / SamsungGalaxyPlayer
---

# Logs  


**\<sgp\_>** 0. Introduction  
**\<sgp\_>** We   would like to welcome everyone to this Monero Community Workgroup Meeting!  
**\<sgp\_>** Link to agenda on GitHub: https://github.com/monero-project/meta/issues/391  
**\<rehrar>** I will be in and out  
**\<sgp\_>** Monero Community meetings are a discussion place for anything going on in the Monero Community, including other Monero workgroups. We use meetings to encourage the community to share ideas and provide support.  
**\<sgp\_>** 1. Greetings  
**\<sgp\_>** do we have more than 3 people today?  
**\<dginovker>** Heylo  
**\<needmonero90>** Hey  
**\<sgp\_>** welcome everyone  
**\<sgp\_>** 2. Community highlights  
**\<sgp\_>** See Monero weekly highlights at https://revuo-monero.com/  
**\<sgp\_>** notably: many updates to the website https://www.reddit.com/r/Monero/comments/d35ift/getmoneroorg\_updated\_updated\_guides\_new/  
**\<monerobux>** [REDDIT] Getmonero.org updated: Updated guides, new "Announcements" section, some consensus changes, meeting logs and more (self.Monero) | 72 points (93.0%) | 12 comments | Posted by ErCiccione | Created at 2019-09-12 - 09:44:01  
**\<sgp\_>** also Daniel Kim, PhD, MBA gave the opening keynote at Monero DefCon 27 Village - watch his presentation “Foundations of Digital Money” on YouTube: https://youtu.be/r-FkL5eXam8  
**\<sgp\_>** Does anyone have community (non-workgroup) updates to share?  
**\<dginovker>** Been working on the MoneroTipsBot  
**\<dginovker>** It's working now, redesigned the security, but want to get a few more UX changes out  
**\<sgp\_>** cool  
**\<el00ruobuob\_[m]>** Hi!  
**\<sgp\_>** cool  
**\<sgp\_>** hello  
**\<dginovker>** Also fyi the bug was multiple processes talking to the same port :\<  
**\<dginovker>** Don't do that, make sure your RPCs exit correctly.  
**\<sgp\_>** 3. CCS updates  
**\<needmonero90>** Subreddit mods modified rule 6 from a vague rule about downvotes to needing service operators to disclose  
**\<needmonero90>** Oh  
**\<sgp\_>** needmonero90: I see, it already has impacted some advertising posts  
**\<needmonero90>** We'll see how it turns out  
**\<sgp\_>** There is a partially-filled CCS proposal I want to mention for completeness, but we do not need to discuss it in my opinion since it is incomplete: https://repo.getmonero.org/monero-project/ccs-proposals/merge\_requests/97  
**\<sgp\_>** on a related payment gateway note, there were recent updates to btcpayserver for monero  
**\<sgp\_>** none live yet, but work is ongoing :)  
**\<dginovker>** Just used btcpayserver for the first time today. It's very good :O  
**\<sgp\_>** i was going to use it to make a donation from monerujo, but I'm in the US so you know how that turned out....  
**\<sgp\_>** can't use xmr.to  
**\<sgp\_>** anyway, other CCS stuff  
**\<sgp\_>** Funding required:  
**\<sgp\_>** New Localization platform: Weblate (6.5/11 XMR): https://ccs.getmonero.org/proposals/ErCiccione-weblate.html  
**\<sgp\_>** Sarang: research funding for 2019 Q4 (4.05/417 XMR): https://ccs.getmonero.org/proposals/sarang-2019-q4.html  
**\<sgp\_>** Does anyone else have a CCS update, or comments about any of these CCS proposals?  
**\<rehrar>** fund!  
**\<rehrar>** next  
**\<rehrar>** ?  
**\<sgp\_>** looks like ti  
**\<sgp\_>** \*it  
**\<sgp\_>** 4. Workgroup report  
**\<sgp\_>** a. Daemon/CLI workgroup  
**\<sgp\_>** There were some discussions about how to handle lightweight server code. Users should ideally be able to connect to their own lightweight server for efficiency  
**\<sgp\_>** are others aware of large discussions?  
**\<sgp\_>** ok, we can move on then  
**\<sgp\_>** b. Localization workgroup  
**\<rehrar>** Minecraft discussion  
**\<rehrar>** oh  
**\<needmonero90>** Lol  
**\<sgp\_>** The Chinese Mastering Monero translation discussion is ongoing but making good progress. I expect that a free and print version will be available soon  
**\<sgp\_>** ErCiccione has been working on the new Weblate translation platform  
**\<sgp\_>** unless he wants to chime in with more, I'll continue on  
**\<sgp\_>** is dsc\_ here and can talk about the GUI?  
**\<dsc\_>** I'm here, can't talk about the GUI  
**\<dsc\_>** As I've only been working on i2p  
**\<dsc\_>** not sure when fluffy is building  
**\<sgp\_>** how is progress coming along there? what's the most difficult part?  
**\<kinghat>** pretty impressive we cant get updated gooeys built  
**\<dsc\_>** most difficult part for me is figuring out with -dev how to handle seed nodes :D  
**\<dsc\_>** But I think we came to a solution  
**\<sgp\_>** can you summarize it? I missed that discussion and I'm interested  
**\<dsc\_>** We need i2p seed nodes (mipseeds)  
**\<dsc\_>** else peers cant find eachother whilst using i2p  
**\<dsc\_>** since inter-network peer exchange is not taking place  
**\<dsc\_>** not sure how to best summarize it, it's a complicated subject  
**\<sgp\_>** it's cool though  
**\<dsc\_>** we'll end up hosting some i2p nodes ourselves :P (me knaccc jtgrassie)  
**\<sgp\_>** cool  
**\<sgp\_>** any other gui updates/questions?  
**\<dsc\_>** Which means we hardcode some i2p nodes inside GUI  
**\<dsc\_>** yes  
**\<dsc\_>** I have 2 months left on my CCS  
**\<kinghat>** v0.14.1.1 and v0.14.1.2 were tagged july 17 and 23.  
**\<dsc\_>** ill be picking up some easier stuff after this, design proposals etc  
**\<dsc\_>** kinghat: Yes, sucks.  
**\<dginovker>** Can we get someone else to run the builds?  
**\<kinghat>** you can get unofficial builds from the build bots or build yourself. only one can release official builds afaik.  
**\<dginovker>** Right, but I mean could we delegate the task of making official builds to someone else?  
**\<el00ruobuob\_[m]>** Or better, to a group of people, with a new gpg key  
**\<dginovker>** As long as it's done with reproducable builds, I don't see a problem with that.  
**\<kinghat>** no idea about that. repro builds for gooey are a thing but not sure where they at. probably wont be here for the HF, though.  
**\<el00ruobuob\_[m]>** IMO, all the core team should have a gpg key issued to core@getmonero.org, and should be able to release official builds on the website  
**\<kinghat>** tbh i dont know why more ppl arent talking about it. its kind of a bottleneck.  
**\<dsc\_>** I'm most interested in a release right now because of the Tails support I've coded  
**\<dsc\_>** granted, people who really want that feature will compile themselves  
**\<xmrscott[m]>** I agree, so long as it's repducible, it shouldn't be an issue if it's signed by someone on the core team  
**\<xmrscott[m]>** We really shouldn't have single points of failure anyways to begin with  
**\<el00ruobuob\_[m]>** +1  
**\<dsc\_>** the nature of Monero is such that you can decide to make your own GUI releases  
**\<dsc\_>** pack them, distribute them  
**\<dsc\_>** if you are trusted in the community you'll even get some downloads :)  
**\<dsc\_>** Just mentioning it as an option  
**\<dginovker>** I'  
**\<dginovker>** I'd rather keep it simple and have it be on getmonero.org/downloads  
**\<xmrscott[m]>** Yes, but exchanges, etc may not download unless it's signed by someone from core  
**\<sgp\_>** xmrscott[m]: doesn't really apply to the GUI  
**\<xmrscott[m]>** Ah, trues  
**\<sgp\_>** that's a horrifying thought though :)  
**\<sgp\_>** but indeed, waiting 2 months for builds isn't ideal  
**\<kinghat>** still sucks. ppl complain about usability of xmr, we get crackerjack gooey team together and we cant even get releases out.  
**\<xmrscott[m]>** Agreed, releases really shouldn't be held because out on vacation, etc by a single person, however awesome they may be  
**\<dEBRUYNE>** Lol, it's not due to vacation  
**\<sgp\_>** There are many things related to releases that need improving. Would it be useful to schedule a meeting related to just this? Or this + planning?  
**\<kinghat>** anyways ill step off the milk crate.  
**\<dginovker>** Yes please  
**\<dginovker>** I think it's due some attention  
**\<dEBRUYNE>** Meeting would be kind of useless  
**\<kinghat>** probably. the cli guys seem like they are on the ball for the HF if anyone is following that.  
**\<sgp\_>** I think it could be useful, even if only to come up with a wish list  
**\<dEBRUYNE>** There's a reason this build is delayed, that's all I can say. Going forward we'll be seeking a backup builder  
**\<dsc\_>** While releases are nice, I see it more as a convience feature :P Because you are too lazy! You can compile yourself!  
**\<dEBRUYNE>** kinghat: Are you implying the GUI team is not?  
**\<rehrar>** tagging is still delayed many times  
**\<dEBRUYNE>** rehrar: can you elaborate?  
**\<rehrar>** well, the builds aren't the only thing pony does  
**\<rehrar>** he also does the tag no?  
**\<sgp\_>** I'll explore what a meeting could look like. Maybe it's creating a wish-list, seeing how many of these goals are met for sept/oct, then building action plans for the most important ones  
**\<rehrar>** and if he's gone, that has also been delayed in the past  
**\<kinghat>** dEBRUYNE: not in the slightest. was saying they are awesome and have held up their proverbial end of the bargain.  
**\<dEBRUYNE>** rehrar: luigi can set tags if needed  
**\<dEBRUYNE>** He normally does for the GUI  
**\<kinghat>** dEBRUYNE: i should have been fair and added that with previous gooey delays there was some underlying issue. 2 months though?  
**\<dEBRUYNE>** \<dEBRUYNE> There's a reason this build is delayed, that's all I can say. Going forward we'll be seeking a backup builder  
**\<rehrar>** oko  
**\<kinghat>** i read im just life lagging atm  
**\<sgp\_>** well as long as we all agree the status quo is unacceptable, we have some reason to work towards something better  
**\<sgp\_>** with any luck I'll get a copy of my upgrade cycle defcon talk recording later this month  
**\<dEBRUYNE>** What we need is a backup builder in case fluffypony is unavailable  
**\<dEBRUYNE>** for the GUI that is  
**\<dEBRUYNE>** At least until we have deterministic builds  
**\<dEBRUYNE>** for the CLI there is no build issue, as those are already built deterministically  
**\<rehrar>** is deterministic builds a one and done?  
**\<sgp\_>** we'll see how this new upgrade goes  
**\<xmrscott[m]>** Out of curiosity how close is the GUI to getting deterministic builds?  
**\<kinghat>** until you add extras like i2pz and such.  
**\<dEBRUYNE>** xmrscott[m]: Probably still quite some time out  
**\<sgp\_>** i2p-zero has reproduceable builds luckily (experimental)  
**\<sgp\_>** let me get part d) of updates out, then we can be in open ideas  
**\<sgp\_>** d. Monero Research Lab  
**\<sgp\_>** Sarang opened his most recent funding proposal. Surae Noether published his monthly update. https://repo.getmonero.org/monero-project/ccs-proposals/merge\_requests/89#note\_7255  
**\<sgp\_>** we should see more work from surae since he is back from vacation now  
**\<sgp\_>** with any luck, another episode of breaking monero if we get our acts together  
**\<sgp\_>** 5. Open ideas time  
**\<sgp\_>** It’s open ideas time! Feel free to propose your ideas to this discussion group, and feel free to comment on others’ ideas. If you disagree with the idea, please reply with constructive criticism. Thank you!  
**\<xmrscott[m]>** Rebranding of "GUI" to something else: https://github.com/monero-project/meta/issues/384  
**\<rehrar>** yes  
**\<xmrscott[m]>** This was discussed for about an hour roughly a month ago, the issue contains a rough form of going about making that happen  
**\<sgp\_>** blockfolio could be used for unofficial polling, but we need a selection of names first for people to choose from  
**\<msvb-mob>** Does anyone have questions about Monero Hardware activities?  
**\<msvb-mob>** I missed putting the section in the agenda.  
**\<sgp\_>** msvb-mob: I have a million questions but not much time. Would you consider making a Reddit update explaining what you did for Defcon and what your next steps are?  
**\<msvb-mob>** There are no reddit posts to update, but I'm hoping to clean up the repositories, merge code, and make the already published sources more accessible.  
**\<dginovker>** xmrscott, I would rather tuck away the CLI tools more and just call the GUI "The" official wallet  
**\<msvb-mob>** Let's try for a real section in the next meeting.  
**\<msvb-mob>** sgp: I'll put the time for distributing more information into the location pointed to by the QR code of the Defcon village badges.  
**\<sgp\_>** I can't think of any good names. Maybe start with Twitter and Reddit open comments?  
**\<el00ruobuob\_[m]>** biletujo  
**\<el00ruobuob\_[m]>** esperanto for wallet  
**\<xmrscott[m]>** Well the thing is I want to make sure the process is largely sound, and people are in agreement here, so I don't get any backlash if I move on process  
**\<sgp\_>** el00ruobuob\_[m]: I kindly disagree with that name, too hard to spell :)  
**\<nioc>** please no esperanto as nobody can pronounce those words  
**\<msvb-mob>** xmrscott: Good luck with choosing a good name, that's quite difficult.  
**\<el00ruobuob\_[m]>** :(  
**\<sgp\_>** xmrscott[m]: thanks for sharing again, I also think esperanto needs to be considered extremely carefully  
**\<xmrscott[m]>** Honestly, I'll probably have to highlight it in a -dev meeting as well as that's where a good number of stakeholders are that don't attend -community meetings  
**\<sgp\_>** at some point yes, but I still think an open poll for ideas is useful now  
**\<sgp\_>** thanks for keeping this initiative alive  
**\<xmrscott[m]>** Sure  
**\<dginovker>** This might be more suitable for a research meeting, but I was talking to an IOTA guy and they were saying they had QC resistance through Lamport signatures. Does anyone have thoughts on this? https://crypto.stackexchange.com/questions/8931/quantum-resistance-of-lamport-signatures  
**\<sgp\_>** definitely seems like an MRL open ideas question dginovker :)  
**\<sgp\_>** this was merged during the meeting btw: https://github.com/monero-project/monero-gui/pull/2370  
**\<sgp\_>** 6. Confirm next meeting date/time  
**\<sgp\_>** The next community meeting will be in 2 weeks on 28 September at 17:00 UTC. The next Coffee Chat will be on 21 September at 16:00 UTC.  
**\<sgp\_>** 7. Conclusion  
**\<sgp\_>** That’s all! Thanks for attending this Monero Community meeting, and we hope to see you on r/MoneroCommunity and #monero-community. Take care, and know that change starts with YOU.  
**\<sgp\_>** As I mentioned, I'll look for a time to schedule an upgrade process meeting  
**\<msvb-mob>** sgp: Good meeting, thanks.  
**\<el00ruobuob\_[m]>** thanks, bye!  
