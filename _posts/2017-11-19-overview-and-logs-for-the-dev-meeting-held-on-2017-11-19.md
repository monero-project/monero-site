---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-11-19
summary: Discussion of open PRs and issues, Bulletproofs, Monero Research Lab, Monero integrations, dedicated Monero hardware wallet, multisig, and miscellaneous
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Overview  

An overview can be found on [MoneroBase](https://monerobase.com/wiki/DevMeeting_2017-11-19).  

# Logs  

**\<rehrar>** Hey everyone! I don't know if fluffypony will be here today, but let's see about getting this thing started.  
**\<rehrar>** Hello to everyone idling in the peanut gallery  
**\<msvb-lab>** Hello.  
**\<rehrar>** 2. Brief review of what's been completed since the previous meeting  
**\<rehrar>** Can we get a mini-update from dev, gui, hardware, and mrl?  
**\<sarang>** I can speak for MRL  
**\<sarang>** We've been thoroughly investigated bulletproofs, a new form of CT range proofs  
**\<hyc>** is moneromooo here?  
**\<moneromooo>** Yes  
**\<endogenic>** have one thing to bring up  
**\<endogenic>** when there's time  
**\<sarang>** They should function as essentially a drop-in replacement that is 10% the size of the original proofs (for one output; even smaller for multiple outputs)  
**\<sarang>** with about the same verification time; possibly a teensy bit faster  
**\<sarang>** Kudos to andytoshi for a lot of great help on those, and others  
**\<hyc>** it's like a TARDIS! the bigger the input the smaller the output!  /s  
**\<rehrar>** So it's looking really promising that it'd be good for us?  
**\<sarang>** yes  
**\<sarang>** We'll start translating the Java test code over to C/C++ for more detailed work  
**\<suraeNoether>** it's a win-win: smaller-spaced range-proofs, with the same verification time  
**\<sarang>** There were some doubts about ver time, but we literally just had a convo over in MRL that pointed out a simple caching that helps us  
**\<rehrar>** MRL, folks. Let's give 'em a hand.  
**\<sarang>** It was pointed out, though, that there's very little randomness hanging around, which could affect storing stuff "in the randomness"  
**\<sarang>** That may be a deepe discussion for later  
**\<suraeNoether>** yeah, using these range proofs makes encrypting messages with range proofs far less do-able  
**\<sarang>** \*deeper  
**\<gingeropolous>** eh who cares  
**\<msvb-lab>** MRL is excellent, nice.  
**\<suraeNoether>** andytoshi is really the one who nailed it, btw  
**\<sarang>** aye  
**\<suraeNoether>** aaaaand all his co-authors  
**\<rehrar>** Can we send them a fruit basket?  
**\<endogenic>** +1  
**\<suraeNoether>** which has included, for a second time, Jonathan Bootle  
**\<sarang>** rehrar set up an FFS for it  
**\<sarang>** 0.2 XMR  
**\<suraeNoether>** and for the N^th time, greg maxwell  
**\<rehrar>** 100 XMR requested  
**\<rehrar>** biggest fruit basket ever  
**\<sarang>** Anyhoo, that's the big news from MRL right now, I suppose  
**\<rehrar>** awesome. Thanks so much.  
**\<suraeNoether>** multisig is looking like i will be ready to hand it off to sarang by the end of the month, as hoped.  
**\<suraeNoether>** and thats it for now  
**\<rehrar>** Anyone else have an update since the last meeting two weeks ago?  
**\<ArticMine>** This is huge from a scaling perspective  
**\<hyc>** absolutely  
**\<hyc>** dev has done a tone of PR merges latelt  
**\<hyc>** lately  
**\<rehrar>** can you summarize them?  
**\<hyc>** there's still been build issues with readline dependencies but I think they're pretty much sorted by now  
**\<hyc>** we've isolated readline from GUI dependencies, etc.  
**\<hyc>** mooo can probably summarize better  
**\<endogenic>** vtnerd says "oh good"  
**\<endogenic>** "woo"  
**\<moneromooo>** Hmm. I can go look at github:  
**\<moneromooo>** (mostly small things anyway)  
**\<rehrar>** FP confirmed he can't make it today. He sends his apologies.  
**\<moneromooo>** disguising password length in prompt I guess is still a small thing, but user visible  
**\<moneromooo>** less unnecessary locking in some DB readers, which should speed up some RPC  
**\<moneromooo>** Fixes for BSD build  
**\<moneromooo>** The wallet does not fetch unneeded hashes anymore (ie, starts direct from 1.4e6)  
**\<moneromooo>** CORS (for those who know what it is)  
**\<moneromooo>** A fix for show\_transfers missing more than one incoming input in a tx  
**\<moneromooo>** And I think the rest is either prior to last meeting, or small/internal stuff.  
**\<hyc>** yeah but it comprises a couple dozen PRs between then and now  
**\<rehrar>** Alright, awesome. Thanks moneromooo.  
**\<rehrar>** hardware, I know you give updates in community, but I think most of us that know are excited about the rapid progress you're making  
**\<rehrar>** care to share something small about what's been going down?  
**\<msvb-lab>** Hardware; we've settled our initial workflows and have built a twenty strong team. Journals are taking notice (see press) and the project is moving along.  
**\<msvb-lab>** https://taiga.getmonero.org/project/michael-rfc-hwallet-1-implementation/wiki/press/  
**\<msvb-lab>** I'll mark our forum proposal milestone 1 as concluded today probably.  
**\<msvb-lab>** We now have an open call to any interested in a hardware wallet, become part of the project and possibly test a prototype. See:  
**\<msvb-lab>** https://taiga.getmonero.org/project/michael-rfc-hwallet-1-implementation/wiki/preview/  
**\<msvb-lab>** I'll demonstrate our two current working protoypes at this week's first ever Monero Munich meeting.  
**\<msvb-lab>** That's all, any questions?  
**\<sgp>** What do you expect those who receive the prototypes to test?  
**\<msvb-lab>** Very weak expectations, hopefully each finds their own way to contribute and strengthen the project.  
**\<msvb-lab>** There's a test plan page, where people can make comments while testing.  
**\<msvb-lab>** But that is just one of many choices, each individual can make on their own.  
**\<msvb-lab>** Pretty lame answer no?  
**\<rehrar>** Alright, thanks msvb-lab!  
**\<msvb-lab>** Thanks for the opportunity.  
**\<moneromooo>** Sounds like pretty nice stuff is going on there, congrats :)  
**\<hyc>** (I counted 72 PRs merged since last dev meeting)  
**\<msvb-lab>** hyc: Who make most of the merges, fluffy?  
**\<rehrar>** So, we've got Code + ticket discussion / Q & A time available for the devs to discuss dev-y things. But all the mergy stuff may have to wait because of FP absence, but if there's other business to take care of, devs you have the floor  
**\<hyc>** yes he does all the merges  
**\<hyc>** we didn't get a report from GUI  
**\<rehrar>** oh, right! so sorry.  
**\<rehrar>** Anybody working on GUI have stuff to talk about.  
**\<unknownids>** ping Jaquee ?  
**\<endogenic>** so i've been chatting with mooo, Jaquee, and vtnerd recently about integrating MyMonero with the native mainline libwallet  
**\<Jaquee>** sorry. i'm on the run  
**\<endogenic>** signs point to integrating with wallet\_api  
**\<endogenic>** I may end up tackling a small portion of factoring wallet2  
**\<rehrar>** ok, no worries Jaquee.  
**\<moneromooo>** As long as not too many gratuitous changes ^\_^  
**\<endogenic>** 100% mooo  
**\<hyc>** all variable and class names being filtered thru pig-latin  
**\<gingeropolous>** dsc, in here :)  
**\<dsc>** :)  
**\<msvb-lab>** Is our GUI crew considered only monero-gui, or are mymonero.com and Moneruj (Android) included as well?  
**\<dsc>** has it started?  
**\<endogenic>** lol hyc  
**\<rehrar>** I think GUI crew is people who work on the monero-gui repo  
**\<rehrar>** mymonero and Monerujo are their own thing  
**\<rehrar>** dsc has what started?  
**\<dsc>** the meeting :D  
**\<rehrar>** oh, yeah. We're about half hour in. :)  
**\<hyc>** oh - that's worth mentioning too - the repo is now properly named monero-gui, no longer monero-core  
**\<msvb-lab>** rehrar: So Monerujo communicate on a different channel, right?  
**\<rbrunner>** That rename is a milestone :)  
**\<rehrar>** Monerujo utilizes the Mattermost where they have a private channel for the devs and core team, and a public channel for questions. They've also got a Taiga to track progress.  
**\<dsc>** aight, so I'm working on a black theme for `monero-gui` (qt5) .. learning QML in the process. Trying to get some more UX developers involved and generally just trying to document things as I go  
**\<rehrar>** I can rep Monerujo though, as I'm heavily involved with them  
**\<rehrar>** they've got some exciting stuff coming  
**\<rehrar>** yes, can you link your thread dsc?  
**\<dsc>** sure  
**\<rehrar>** The one you made a few days ago.  
**\<dsc>** https://www.reddit.com/r/Monero/comments/7dvwq0/contributing_to_monero_as_an_ux_developer_short/  
**\<rehrar>** in the comments there are the various proposals for redesigning the GUI. Are there any thoughts on any of those?  
**\<rehrar>** well, first dsc you wanted to say something, go ahead. :)  
**\<dsc>** No I was finished :P  
**\<dsc>** but to answer your question: There are 3 UI proposals of which I picked the one that was most trivial to implement  
**\<dsc>** seeing as I'm just one guy with zero QML experience, hehe.  
**\<dEBRUYNE>** rehrar: Basically we're first kind of going for the dark theme, which will have a light mode as well  
**\<dEBRUYNE>** Because it's most trivial to implement  
**\<dEBRUYNE>** (only requires minor changes to the current design)  
**\<rehrar>** https://github.com/monero-project/monero-core/issues/419  
**\<rehrar>** https://github.com/monero-project/monero-core/issues/869  
**\<rehrar>** https://github.com/monero-project/monero-core/issues/949  
**\<dEBRUYNE>** Some screenshots -> https://i.imgur.com/89YFUj7.png  
**\<rehrar>** for those interested  
**\<rehrar>** Ok. Cool deal!  
**\<dEBRUYNE>** To clarify, the dark theme is #949  
**\<hyc>** cool  
**\<dEBRUYNE>** dsc also made a PR which should make the GUI more responsive  
**\<dsc>** cant make any predictions as to when I have some tangible, taking quite some time...!  
**\<dsc>** s/some/something/  
**\<dEBRUYNE>** Also, we're aiming to include subaddresses and multisig somewhere in the future^tm  
**\<dEBRUYNE>** And, once there is a core appstore account, we'll start testing the ios port of the GUI  
**\<dEBRUYNE>** There'll be an android port as well, fwiw  
**\<msvb-lab>** dEBRUYNE: Is Qt5 easy to port to mobile?  
**\<sgp>** Is there a new android APK to test? I last saw one months ago  
**\<dEBRUYNE>** sgp: Buildbot produces APKs iirc  
**\<dEBRUYNE>** Let me check  
**\<pigeons>** No that isn't setup now  
**\<dEBRUYNE>** msvb-lab: Jaquee did it, so better to ask him :P  
**\<pigeons>** I can't promise next week even, very busy  
**\<dsc>** rehrar: To give you an idea, right now I have this: https://i.imgur.com/iLwupdB.png  
**\<dsc>** or to give anyone an idea for that matter :)  
**\<serhack>** Hello  
**\<rehrar>** looks pretty chill imo :D  
**\<dsc>** aye aye  
**\<dsc>** WIP ofc :)  
**\<rehrar>** I personally think there needs to be a bit of a restructuring of some info, but this is a good meantime  
**\<dsc>** agreed  
**\<hyc>** good stuff  
**\<hyc>** would be nice to get a more recent android build up for people to test  
**\<rehrar>** Alright. That's it from GUI? No other opinions on dEBRUYNE and dsc stuff either?  
**\<hyc>** looks like we can move on to ticket Q/A  
**\<rehrar>** ok Code + ticket discussion / Q & A  
**\<rehrar>** hyc moneromooo can you two take the lead for this?  
**\<moneromooo>** Well, if anyone has questions about them, please ask.  
**\<hyc>** I'd leave it to mooo. I'm not aware of any open questions  
**\<hyc>** ^^  
**\<dsc>** ticket Q/A \!= discussing open PR's, right?  
**\<hyc>** sure  
**\<hyc>** ask away  
**\<dsc>** low hanging fruit PRs (that can probably be merged): #919, #954, #963 on monero-gui  
**\<dsc>** not so much a question ^\_^  
**\<hyc>** probably ask luigi to merge them if fluffy is unavailable  
**\<iDunk>** luigi merges GUI PRs anyway :)  
**\<dsc>** alright  
**\<rehrar>** I think luigi is out for a few days, so be patient. (:  
**\<rehrar>** Alrighty, shall we move on?  
**\<rehrar>** FFS Formalization: https://github.com/monero-project/meta/pull/87  
**\<serhack>** Is there meeting?  
**\<hyc>** serhack started 40 minutes ago  
**\<rehrar>** we probably don't have time for a large discussion (if at all), but I just wanted to encourage the devs to take a look at the PR  
**\<serhack>** Oh  
**\<serhack>** I forgot it  
**\<rehrar>** The idea of having a set of formalized guidelines for FFS proposals going forward has been thrown around a lot. It'd be good to get some opinions on how this is laid out and any concerns that may arise from it.  
**\<serhack>** I didn't understand well: is the project funded by ffs an Official project?  
**\<ArticMine>** Does the current system work?  
**\<rehrar>** There's been hiccups ArticMine. fireice and guzzi come to mind.  
**\<endogenic>** those seem like complete outliers :P  
**\<endogenic>** not exactly legit claims to issues imo  
**\<rehrar>** Largely based on de facto expectations that are not actually formalized.  
**\<msvb-lab>** How do we learn about the hickups mentioned (in order to understand context?)  
**\<endogenic>** but proposals could stand to be more concrete, specific, detailed,  
**\<endogenic>** rehrar: formalization can be a bit of a rabbit hole as well  
**\<endogenic>** sometimes humans need to be involved  
**\<endogenic>** ppl need to recognize the situation before a formal plan can be applied  
**\<hyc>** indeed. current US political situation reflects this - institutions are designed assuming good faith in all participants  
**\<endogenic>** but if the situation is not able to be recognized by ppl then how can it be applied for the desired result?  
**\<hyc>** nobody can take all the time needed to identify every possible abusable loophole  
**\<rehrar>** What we have currently is a Core Team centered way of resolving disputes that, to my knowledge, hasn't really been utilized since I've been here  
**\<rehrar>** since we've got that right now, maybe we stick with it?  
**\<endogenic>** but identifying loopholes and plugging them is not a bad thing  
**\<endogenic>** it's just that they need to be done by humans imo  
**\<ArticMine>** We may need some tweaking to deal with the hiccups; but as afar as I can see at a fundamental level the system is working  
**\<rehrar>** don't know where else the graphic is, so I'll just link it here: https://getkovri.org/contributing.html  
**\<rehrar>** bottom of the page  
**\<rehrar>** This has not been formally replaced, so it is currently active. We can discuss that at a later time though. Let's move on.  
**\<rehrar>** 5. Any additional meeting items  
**\<rehrar>** If anyone has anything, speak up. :)  
**\<moneromooo>** If anyone wants to test multisig, feel free. PR 2134.  
**\<gingeropolous>** is there a set date for the next code freeze?  
**\<serhack>** A little update by me about Monero Integrations  
**\<rehrar>** go for it serhack  
**\<serhack>** So we (I and cryptochangements) are going to release Magento Plugin, In the past few weeks, we worked on a new cool payment box for Monero Integrations.  
**\<serhack>**  
**\<serhack>** I am currently working on OpenCart too so I think we can release Magento payment box the next week..  
**\<serhack>**  
**\<serhack>** I have talked to OpenBazaar too and they have told me that Monero + Openbazaar would be nice.. it will be a difficult task but I think I can do it  
**\<serhack>** you can go on, rehrar  
**\<moneromooo>** Everytime I read OpenBazaar, it makes me want to punch that scammer from a few years back...  
**\<rehrar>** alright, thanks man :)  
**\<rehrar>** atrides?  
**\<moneromooo>** That's the one.  
**\<rehrar>** doesn't he still run Dwarfpool?  
**\<gingeropolous>** yeah, and ppl still mine on it  
**\<rehrar>** We should encourage them not to  
**\<rehrar>** Either way: 6. Confirm next meeting date/time  
**\<rehrar>** December 3rd? Same time?  
**\<gingeropolous>** so no freeze date, eh?  
**\<rehrar>** Should we move time because daylight savings?  
**\<moneromooo>** About mid december  
**\<gingeropolous>** word.  
**\<ArticMine>** Please do not move the time  
**\<moneromooo>** Or january. Unclear.  
**\<rehrar>** ok, time not moved  
**\<rehrar>** FP would have a better answer?  
**\<hyc>** isn't a release due in January?  
**\<hyc>** and we're supposed to freeze a month before  
**\<iDunk>** March  
**\<gingeropolous>** well dec or jan gives us 3 months  
**\<hyc>** ok  
**\<rehrar>** There's a new freeze/release schedule isn't there?  
**\<hyc>** mebbe someone can open a meta issue and set some dates into it  
**\<gingeropolous>** i thought we had 3 months of freeze for more testing / fixing than before ....  
**\<moneromooo>** 3 months of freeze is gonna make me punch someone else :P  
**\<moneromooo>** It's branch, then release from the brnch aftrer 2-3 months.  
**\<moneromooo>** It's already painful when stuff doens't get merged after a month.  
**\<ArticMine>** The big one is the bullet proofs  
**\<gingeropolous>** right. i thought branch is a freeze... i.e., feature freeze.... i.e., freeze on adding wacky new stuff that requires bandaloots and warples  
**\<moneromooo>** That's not likely to be ready by then.  
**\<gingeropolous>** but yeah... perhaps that should be documented somewhere  
**\<rehrar>** (Not to interrupt, but meeting is over for those who need to go, discussion can of course continue)  
**\<rehrar>** Alright. You guys are the best! thanks for being a part of this community, and developing the software we all know and love as Morono  
**\<msvb-lab>** rehrar: Thanks, good flow of topics, great moderation.  