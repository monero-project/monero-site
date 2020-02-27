---
layout: post
title: Logs for the Community Meeting Held on 2018-03-31
summary: Community highlights, Forum Funding System updates, RFC-HWALLET-1, Localization workgroup, RIAT Monero workgroup, and miscellaneous
tags: [dev diaries, crypto]
author: el00ruobuob / SamsungGalaxyPlayer
---

# Logs  

**\<sgp\_>** All right, meeting time  
**\<sgp\_>** 0. Introduction  
**\<sgp\_>** We would like to welcome everyone to this Monero Community Meeting!  
**\<sgp\_>** Link to agenda on GitHub: https://github.com/monero-project/meta/issues/199  
**\<sgp\_>** Monero Community meetings are a discussion place for anything going on in the Monero Community. We use meetings to encourage the community to share ideas and provide support.  
**\<sgp\_>** 1. Greetings  
**\<serhack>** Hi  
**\<msvb-lab>** Hello.  
**\<ArticMine>** Hi  
**\<ErCiccione>** Hola  
**\<cryptochangement>** hola amigos de privacidad  
**\<xmrmatterbridge> \<hrumag>** Buonasera a tutti!  
**\<xmrscott[m]>** Salutations  
**\<freelikeinfreedo>** Hello 🙂  
**\<parasew[m]>** hello!  
**\<sgp\_>** looks like we have a good crowd today  
**\<sgp\_>** 2. Community highlights  
**\<sgp\_>** Monero 0.12.0.0 is released. The GUI is still forthcoming. You must update your software by April 6 to continue spending funds. You can download a copy of it here: https://github.com/monero-project/monero/releases/tag/v0.12.0.0  
**\<sgp\_>** I published a response to “An Empirical Analysis of Traceability in the Monero Blockchain”, version 2: https://getmonero.org/2018/03/29/response-to-an-empirical-analysis-of-traceability.html  
**\<sgp\_>** dsc\_\_ shared a preview of the GUI black theme: https://www.reddit.com/r/Monero/comments/86l3km/gui\_black\_theme\_preview/  
**\<monerobux>** [REDDIT] GUI - Black theme preview (self.Monero) | 104 points (98.0%) | 29 comments | Posted by dsc\_\_ | Created at 2018-03-23 - 14:36:17  
**\<sgp\_>** Does anyone else have community updates to share?  
**\<xmrscott[m]>** DefCon workgroup created  
**\<serhack>** Mastering Monero released a preview of the first chapter. If you want to contribute, https://github.com/monerobook/monerobook  
**\<xmrscott[m]>** First meeting a Saturday from now  
**\<serhack>** The preview of the first chapter is available on https://masteringmonero.com  
**\<KnifeOfPi\_>** hello!  
**\<ErCiccione>** The GUI is basically ready, binaries will be probably built within the weekend  
**\<KnifeOfPi\_>** we’re working on getting cakewallet ready  
**\<sgp\_>** ah yes xmrscott, link to the thread about DefCon here: https://www.reddit.com/r/Monero/comments/87uy99/the\_monero\_project\_defcon\_26\_aug\_912\_in\_las\_vegas/  
**\<monerobux>** [REDDIT] The Monero Project @ DefCon 26 (Aug 9-12 in Las Vegas)! Looking for volunteers! First DefCon workgroup meeting 4/7! (self.Monero) | 15 points (74.0%) | 11 comments | Posted by xmrscott | Created at 2018-03-28 - 19:50:11  
**\<sgp\_>** serhack I should have time to review the book this weekend  
**\<serhack>** A lot of updates today! Nice!  
**\<m2049r[m]>** monerujo beta is 0.12 ready (and on play store & github)  
**\<cryptochangement>** are exchanged and such all aware of the new release? the fork is in a week and we dont want them left behind  
**\<sgp\_>** dEBRUYNE will you make a list of pools and exchanges that have updated as you have done in the past?  
**\<ErCiccione>** sgp\_: +1 i wasabout to ask that  
**\<dEBRUYNE>** I guess I could, but the ecosystem has grown substantially  
**\<dEBRUYNE>** Not sure if it'd be feasible to maintain or even create such a list  
**\<KnifeOfPi\_>** I’m not sure if it’s necessary - most major pools that aren’t botnet or bitmain pools probably know  
**\<ErCiccione>** dEBRUYNE: what if we make in on etherpad? so anybody can update it  
**\<dEBRUYNE>** sgp\_: I'll ask fluffypony to send a reminder email to all pools though  
**\<cryptochangement>** at the lease it would be nice to pin a thread on reddit where people can confirm/verify that their pool/exchange/service has updated  
**\<rehrar>** or delete it D:  
**\<dEBRUYNE>** ErCiccione: I guess that could work  
**\<sgp\_>** cryptochangement I think that would be especially helpful for r/MoneroMining  
**\<dEBRUYNE>** But may be susceptible to fraud  
**\<cryptochangement>** I dont see why somebody would lie about having updated or not  
**\<m2049r[m]>** if a pool doesnt update, they are effectively mining monero0?  
**\<ErCiccione>** true. we can create a workgroup on taiga  
**\<dEBRUYNE>** m2049r[m]: yes  
**\<xmrmatterbridge> \<hrumag>** ErCiccione: +1  
**\<ArticMine>** if a pool doesnt update, they are effectively mining monero0? <--- If they do not change the seed nodes I suspect not  
**\<sgp\_>** ErCiccione would you mind creating that then and adding me as a contributor? I would like to get the pool list in r/MoneroMining  
**\<dEBRUYNE>** ArticMine: Seed nodes are only relevant for the initial connection  
**\<dEBRUYNE>** sgp\_: You can use my table from the old thread I guess?  
**\<ErCiccione>** sure, doing it now  
**\<ErCiccione>** sgp\_ ^  
**\<sgp\_>** dEBRUYNE yes, I'll start there  
**\<dEBRUYNE>** https://www.reddit.com/r/Monero/comments/6yuv2s/psa\_users\_solominers\_exchangesmerchantsservices/  
**\<monerobux>** [REDDIT] PSA: Users, (solo)miners, exchanges/merchants/services, and pool operators must be on CLI v0.11.0.0 or GUI v0.11.0.0 in advance of the scheduled protocol upgrade otherwise you will get booted off the network. Miners, please contact your pool operator to ask them if they have upgraded! (self.Monero) | 143 points (99.0%) | 189 comments | Posted by dEBRUYNE\_1 | Created at 2017-09-08 - 13:47:34  
**\<dEBRUYNE>** I'll PM you the markup  
**\<sgp\_>** I should be able to view the source  
**\<sgp\_>** Just verified, can view. No PM for that necessary  
**\<xmrmatterbridge> \<hrumag>** * CLI v0.12.0.0 or GUI v.0.12.0.0  
**\<sgp\_>** All right, I think we should move on to the next section. If there are still discussions, we can have them during open ideas time  
**\<sgp\_>** 3. FFS updates  
**\<sgp\_>** There are several Forum Funding System updates.  
**\<sgp\_>** m2049r has opened a proposal to raise funds to work on Monerujo: https://forum.getmonero.org/6/ideas/90038/m2049r-part-time-for-3-months  
**\<sgp\_>** The community funded suraeNoether for Q2: https://forum.getmonero.org/8/funding-required/90057/funding-for-surae-at-mrl-q2-2018  
**\<sgp\_>** The community funded sarangNoether for Q2: https://forum.getmonero.org/8/funding-required/90028/sarang-funding-for-april-may-2018  
**\<sgp\_>** The community funded erciccione for the localization workgroup: https://forum.getmonero.org/8/funding-required/90000/monero-localizations-coordinator-2nd-ffs  
**\<sgp\_>** The community funded moneromooo to work on Monero from April to June: https://forum.getmonero.org/8/funding-required/89998/moar-mooo-coding-april-june  
**\<sgp\_>** The community funded serhack to continue working on Mastering Monero: https://forum.getmonero.org/8/funding-required/89797/mastering-monero-ffs  
**\<suraeNoether>** thanks everyone!  
**\<sgp\_>** It seems that further discussion is necessary on the Ruby implementation: https://forum.getmonero.org/6/ideas/89913/a-native-ruby-implementation-of-the-monero-wallet  
**\<sgp\_>** I have opened a new Reddit discussion thread for this here: https://www.reddit.com/r/Monero/comments/88jlqc/other\_discussions\_on\_monero\_ruby\_ffs\_proposal/  
**\<monerobux>** [REDDIT] Other Discussions on Monero Ruby FFS Proposal (self.Monero) | 9 points (100.0%) | 8 comments | Posted by SamsungGalaxyPlayer | Created at 2018-03-31 - 16:05:30  
**\<serhack>** Thank Community!  
**\<sgp\_>** Does anyone know if the development team got wind of this, and what their recommendation is?  
**\<rehrar>** We should also talk about that MoneroCat series proposal :D  
**\<ErCiccione>** thanks a lot folks!  
**\<rehrar>** the dev team's opinion shouldn't matter in any special way in this matter  
**\<xmrmatterbridge> \<cryptochangements>** I want to see it  
**\<xmrmatterbridge> \<cryptochangements>** More for education purposes than anything  
**\<rehrar>** alternative implementations have been discussed before, and the only thing that they generally say is something to the effect of: "Make sure they know the amount of work involved"  
**\<xmrmatterbridge> \<cryptochangements>** Like that guy that implemented cryptonight in Pythob  
**\<rehrar>** wrappers ultimately fall back on the work of the C++ dev team, so not a ton of extra work involved.  
**\<rehrar>** But an alternative implementation must keep pace with C++ development (which has many contributors)  
**\<rehrar>** so if it's just one person, they'd be doing the job of moneromooo plus everyone else contributing  
**\<xmrmatterbridge> \<cryptochangements>** Even a wrapper has to be maintained to a degree. I just don't want to see the FFS for this gut funded, payed out, then never maintained  
**\<rehrar>** this is the biggest issue for the community, yes  
**\<rehrar>** the amount of maintenance for another implementation is orders of magnitude higher, so the odds of it not being maintained really skyrocket  
**\<rehrar>** I may be speaking like a downer here, but if you read my comment on the thread, I really do think it's incredibly necessary to have stuff like this  
**\<sgp\_>** All right, glad we could re-open discussion on other implementations  
**\<parasew[m]>** there is an existing gem, but the original dev stopped communicating a while ago.  
**\<m2049r[m]>** plus: maintenance is boring  
**\<xmrmatterbridge> \<cryptochangements>** I still think it would nice to have for educational purposes. It also opens doors to get integrated with other things so if somebody picks it up for that use they could be motivated to help maintain it  
**\<rehrar>** this is admittedly one weakness in the FFS  
**\<sgp\_>** Do we know of any services that would want to use a Ruby implementation? If we know of groups, it has the highest chance of being maintained  
**\<rehrar>** if a person begins the project for money, but then money dries out, they are more likely to leave as well  
**\<rehrar>** whereas if there are passion projects of alternative implementations, the money is nice (if funded), but they're more likely to continue  
**\<xmrmatterbridge> \<cryptochangements>** Somebody mentioned shopify  
**\<parasew[m]>** there are parallel efforts on this gem, the meetup organiser of the ruby meetup in vienna was also expressing interest. i guess it needs somebody to coordinate this, so the FFS proposal is needed, but it needs multiple devs/oversight imho  
**\<rehrar>** agreed parasew[m]  
**\<rehrar>** the take away for this (for me) is: this is a great idea, and I support it whole heartedly  
**\<rehrar>** but it's not as simple as some in the community might think  
**\<sgp\_>** Any other thoughts on the Ruby implementation?  
**\<sgp\_>** Or can we discuss MoneroCat: https://forum.getmonero.org/6/ideas/89764/i-d-like-to-develop-a-new-webcomic-series-starring-monerocat-and-the-justice-league-of-crypto  
**\<rehrar>** move it, fund it  
**\<parasew[m]>** move it?  
**\<xmrmatterbridge> \<cryptochangements>** Tbh I think another issue with thr fork schedule is that forking 6 months not only bricks ASICs but alternative implementations too :/ thats a discussion for another time tho  
**\<sgp\_>** All right, thanks for the discussion on these everyone  
**\<xmrmatterbridge> \<cryptochangements>** IIRC the XMR figure for that was put together when the market price was significantly higher. Is 150 XMR stilo enough for Monero Cat?  
**\<rehrar>** move the Monero Cat proposal I mean parasew[m]  
**\<sgp\_>** cryptochangements we can sort that out with the author  
**\<sgp\_>** a. RFC-HWALLET-1 project progress  
**\<msvb-lab>** Hello folks, today is the last day of RFC-HWALLET-1.  
**\<parasew[m]>** i suggest to discuss ruby implementation next time, or at least get all the people working on it on a table. i can organise an irc-discussion specifically on this topic, as i also talked to a few people interesting in helping.  
**\<msvb-lab>** Celebrate or cry.  
**\<parasew[m]>** this could solve the problem with "single point of maintainance" fails  
**\<sgp\_>** parasaw noted, we can add it to next meeting's agenda  
**\<msvb-lab>** According to the roadmap and project plan.  
**\<msvb-lab>** The good news is that it is ending due to meeting almost all requirements, namely 43 of 46 nonfunctional and functional requirements.  
**\<msvb-lab>** The results are in the GitHub repository, and docs in Taiga mostly:  
**\<msvb-lab>** https://github.com/monero-project/kastelo/  
**\<msvb-lab>** There will be some clean up, but I'll tag the sources today or soon and build tarballs for easy upload to fabricators.  
**\<rehrar>** cray cray  
**\<rehrar>** so the open spec is done and works?  
**\<msvb-lab>** In case anybody is curious what kind of activity follows, the end of RFC-HWALLET-1 does not mean the end of anything other than project structure and announcement that requirements were met.  
**\<msvb-lab>** rehrar: The open spec?  
**\<msvb-lab>** You mean schematic or?  
**\<rehrar>** nvm, I may just be an idiot. We'll talk later.  
**\<msvb-lab>** The design includes, schematic, layout, and bill of materials files.  
**\<msvb-lab>** That's the archive that usually gets sent to a PCBA or PCB fabricator.  
**\<sgp\_>** Thanks msvb-lab!  
**\<rehrar>** HOPEFULLY sometime soon I can zap the spam away  
**\<msvb-lab>** parasew[m]: We can copy to several places in fact, yes I just need some examples after the meeting or something.  
**\<sgp\_>** msvb-lab is there anything you are waiting for before your new proposal is moved to funding required? https://forum.getmonero.org/7/open-tasks/90126/advancing-monero-hardware-wallet  
**\<parasew[m]>** msvb-lab: ping me, i can also help with content-reformatting if needed!  
**\<msvb-lab>** sgp\_: I need to make sure the injection molding bids that have come in are good for the budget, and yes a few other changes before bumping 0.9 to 1.0 (the proposal.)  
**\<msvb-lab>** sgp\_: I'm also waiting for MoneroV, because it's possible they will want to fund the wallet instead.  
**\<msvb-lab>** Bad joke  
**\<sgp\_>** lmao  
**\<sgp\_>** All right thanks msvb-lab. I'm really looking forward to v1.0 of your proposal  
**\<msvb-lab>** sgp\_: Cool, thanks. Next toopic.  
**\<sgp\_>** b. Localization workgroup Q&A  
**\<ErCiccione>** sooo  
**\<ErCiccione>** m2049r: of course, that would be super. is monerujo already set for localizations?  
**\<rehrar>** erciccione, you've done great work.  
**\<m2049r[m]>** yes, we have english & spanish for now  
**\<ErCiccione>** thanks rehrar :)  
**\<xmrmatterbridge> \<hrumag>** bravo!  
**\<serhack>** Great idea m2049r :)  
**\<serhack>** Good job erciccione  
**\<ErCiccione>** great, so let's talk about that after the meeting, i'm honestly not familiar with monerujo's codebase, i need to check it out  
**\<ErCiccione>** thanks guys :)  
**\<m2049r[m]>** i'll get in touch with you  
**\<sgp\_>** Last chance for questions for ErCiccione  
**\<ErCiccione>** btw beside the GUI i haven't big updates. any question?curiosity?  
**\<rehrar>** ne  
**\<sgp\_>** All right ErCiccione, your work seems to speak for itself. Thanks for keeping us all updated  
**\<sgp\_>** 4. RIAT Monero workgroup  
**\<sgp\_>** The RIAT team would like to discuss the status of their projects for the year.  
**\<ErCiccione>** thank you sgp\_  
**\<rehrar>** RIAT?  
**\<parasew[m]>** The Monero Workgroup at RIAT has been working since 2017, we organised community workshops in dec 2017 and also hosted the team of the monero hardware wallet in vienna. We are mixed from Monero Austria meetup and have connections to other meetups as well. A meetup in Hongkong is currently also discussed.  
**\<sgp\_>** rehrar https://riat.at/  
**\<parasew[m]>** Some involved people are around here in the irc i guess, @m2049r, @nevvton\_, FreeAsInFreedom (txmr) and ofc others (you know who you are) :)  
**\<msvb-lab>** Hong Kong.  
**\<parasew[m]>** We also helped organise the assembly at the 34c3 in leipzig and we are looking forward to help spread the word with events throughout 2018. Especially now focusing on Defcon and starting with early planning on 35c3.  
**\<parasew[m]>** yes, thats us  
**\<rehrar>** noice  
**\<ArticMine>** So RIAT will be working of DefCON in Vegas  
**\<parasew[m]>** msvb-lab: i was visiting in hongkong and there are interested students who want to set up a meetup, first meetup planned between 15-30 july  
**\<parasew[m]>** ArticMine: yes we will support and help; is there a separate irc channel or should we discuss here?  
**\<ArticMine>** Excellent  
**\<rehrar>** there;s a meeting next Saturday for Defcon stuff  
**\<parasew[m]>** very good! will there be the main focus on the hardware wallet or can we also do more?  
**\<rehrar>** the Monero village that we are sharing with BCOS has quite a bit in the works so far  
**\<msvb-lab>** It will be a lot of topics all at once.  
**\<msvb-lab>** The meeting.  
**\<rehrar>** some presentations we've discussed, workshops,  
**\<rehrar>** msvb-lab, can you grab the pad link?  
**\<parasew[m]>** very nice!  
**\<freelikeinfreedo>** where is the meeting? in this channel?  
**\<freelikeinfreedo>** and which time?  
**\<rehrar>** I think so, let me grab the link  
**\<rehrar>** v  
**\<rehrar>** https://github.com/monero-project/meta/issues/200  
**\<rehrar>** lel  
**\<rehrar>** good to have more people on board  
**\<rehrar>** if you look in the backlog, there was quite a bit of discussion yesterday  
**\<freelikeinfreedo>** thanks  
**\<parasew[m]>** very nice, will check and also discuss with the others later; will also join next saturday.  
**\<parasew[m]>** workgroup at RIAT will also now meet in person more often,  
**\<parasew[m]>** The workgroup will now be meeting every monday IRL starting from april 9, and we will also be in #monero-community to discuss our progress.  
**\<parasew[m]>** m2049r: do you want to talk a bit on the monerujo plans?  
**\<m2049r[m]>** working on some tweaks for the v0.12 release  
**\<m2049r[m]>** managed to set up f-droid environment yesterday ...  
**\<m2049r[m]>** and we have a huge backlog of cool functions on taiga :)  
**\<m2049r[m]>** but i will be going for the CRAZYpass next  
**\<xmrmatterbridge> \<hrumag>** @erciccione when you're done you can come to mattermost. i've got updates and a question  
**\<m2049r[m]>** (generating secure passwords with RSA as in my published paper)  
**\<freelikeinfreedo>** > managed to set up f-droid environment yesterday ...  
**\<freelikeinfreedo>** nice! 😃  
**\<ErCiccione>** @hrumag coming!  
**\<parasew[m]>** so the workgroup will be helping in growing the userbase of monerujo , FreeAsInFreedom (txmr) had the idea for a workshop with lineage+monerujo for legacy android devices  
**\<rehrar>** woot!  
**\<rehrar>** copperhead > lineage though  
**\<rehrar>** (don't kill me)  
**\<parasew[m]>** other tasks are ofc to support msvb-lab and team to spread the word on the open hw wallet and to possibly get more attention from the open hardware communities  
**\<sgp\_>** Sounds like an awesome idea  
**\<msvb-lab>** That would be great, thanks parasew[m].  
**\<parasew[m]>** and to create workshops and other formats to bring more people to monero.  
**\<ArticMine>** copperhead is not FLOSS it is semi free  
**\<ArticMine>** since it does not allow commercial use  
**\<ArticMine>** That being said there is no reason to not support it  
**\<rehrar>** it's further removed from Google  
**\<sgp\_>** Thanks parasew for the updates! Any final thoughts?  
**\<parasew[m]>** just wanted to introduce that we will be active, anyone who wants to join physically, there is a flat in vienna we can use for guests. ping me or nevvton\_  
**\<sgp\_>** All right, thanks parasew! Always great to hear about your efforts  
**\<sgp\_>** 5. Open ideas time  
**\<sgp\_>** This meeting is going over an hour to accommodate for open ideas time  
**\<sgp\_>** Feel free to propose your ideas to this discussion group, and feel free to comment on others’ ideas. If you disagree with the idea, please reply with constructive criticism. Thank you!  
**\<sgp\_>** crickets...  
**\<rehrar>** I have an idea  
**\<rehrar>** to end the meeting  
**\<rehrar>** open for discussion  
**\<sgp\_>** Considering no one is feeling creative today, we can close the meeting  
**\<sgp\_>** 6. Confirm next meeting date/time  
**\<sgp\_>** The next community meeting will be two weeks from today on 14 April. The Coffee Chat will be next Saturday on 7 April.  
**\<sgp\_>** 7. Conclusion  
**\<sgp\_>** That’s all! Thanks for attending this Monero Community meeting, and we hope to see you on /r/MoneroCommunity and #monero-community. Take care, and know that change starts with YOU.  
**\<rehrar>** ME?  
**\<sgp\_>** Yes, YOU  
**\<rehrar>** !!!!!  
**\<msvb-lab>** sgp\_: Good one this time, last week was no good. Thanks a lot.  
**\<m2049r[m]>** and thanks sgp\_ for organizing!  
**\<msvb-lab>** Last time sgp was not with us == bad time.  
**\<parasew[m]>** thanks sgp\_  
**\<rehrar>** ye. whoever ran the last meeting was an idiot  
**\<ErCiccione>** so, sgp\_ i made the workgroup on taiga https://taiga.getmonero.org/project/erciccione-organization-pre-upgrade/  
**\<parasew[m]>** msvb-lab: are you planning some publicity for the hw-wallet or are you waiting until the proposal is done?  
**\<ErCiccione>** if anyone want to help tracking if pools and exchanges are ready for the next upgrade, contact me or sgp\_ and we will add you on the workgroup  
**\<msvb-lab>** parasew[m]: Publicity is good at any time, in fact a radio broadcast featuring us is appearing very soon on BR Bayerische Rundfunk.  
**\<sgp\_>** ErCiccione thanks, do you think we should make separate wiki pages for each type of ecosystem type? Eg: exchanges, pools, service providers, merchants, etc?  
**\<freelikeinfreedo>** > parasew[m]: Publicity is good at any time, in fact a radio broadcast featuring us is appearing very soon on BR Bayerische Rundfunk.  
**\<freelikeinfreedo>** do you know when exactly?  
**\<msvb-lab>** The reporter is still working on slicing up the two (!) hours of interview.  
**\<msvb-lab>** I have no idea when it will be ready, but I was his last interview so it could come in a couple weeks?  
**\<ErCiccione>** yes, i think that's a good way to do it sgp\_ . do you want to include merchants as well? that would be a looot of people  
**\<sgp\_>** That will be a stretch goal lol  
**\<msvb-lab>** parasew[m] pablonero[m]: Very nice that so much interest is centered in Vienna, and that you welcome visits like that.  
**\<sgp\_>** Eg: if huge merchants like Amazon took Monero, we would want to know :p  
**\<m2049r[m]>** oh - and support my FFS :)  
**\<rehrar>** no  
**\<rehrar>** ArticMine, COS is ideal for the common person since it really works for security.  
**\<rehrar>** I agree that Lineage is better for the enthusiast (people that'd be into Monero)  
**\<rehrar>** but I'd probably recommend COS for people that aren't as versed int his stuff, like family  
**\<m2049r[m]>** my understand is that copperhead is for more modern devices, no?  
**\<ArticMine>** I took a good look at COS. The common person run into an issue the moment they do anything commercial  
**\<rehrar>** I've used it, although not super extensively.  
**\<rehrar>** I will defer to you on this.  
**\<ArticMine>** I mean as simple as a kid that mows neighbor's lawn or shovels the neighbor's snow  
**\<ArticMine>** Then there are in violation of the license  
**\<ArticMine>** In my opinion Copperhead did something very stupid. They could have gone with a strong copyleft and avoided this mess  
**\<rehrar>** see, this is why I talk to ou  
**\<rehrar>** \*you  
**\<rehrar>** you have all the licensing knowledge  
**\<ArticMine>** It gets interesting like doing a software audit, to remove pirated proprietary software by replacing it with FLOSS  
**\<ArticMine>** Non commercial clauses is one of my favorites  
**\<rehrar>** consider me learned for this instance  
**\<ArticMine>** I always wonder if the % of GNU/Linux users that have read Windows EULA is greater than the % of Windows users  
**\<sgp\_>** ErCiccione I made the first version of the list but haven't contacted anyone yet  
**\<ErCiccione>** looks perfect sgp\_, what if we make the merchant section input based. We tell people that if they want they can communicate us they have upgraded, then we put them on the list  
**\<sgp\_[m]>** I haven't made the merchant list yet., though it could look similar  
**\<ErCiccione>** ah ok, i though was harder to get all the merchants. but now that i think about it we have a list on the website  
**\<sneurlax>** ArticMine, that's why we're GNU/Linux users...  
**\<vp11>** ArticMine, answer is yes in both relative and direct sense.  