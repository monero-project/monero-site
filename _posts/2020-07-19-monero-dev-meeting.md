---
layout: post
title: Logs for the Dev Meeting Held on 2020-07-19
tags: [dev diaries, core, crypto]
author: asymptotically / ErCiccione
---

# Logs

**\<ErCiccione[m]\>** Ok everybody let's start this meeting. This is an important one since we should decide the date for the upcoming network upgrade and what consensus changes should be included. The agenda is here: https://github.com/monero-project/meta/issues/485  
**\<ErCiccione[m]\>** Let's have a round of greetings to get an idea of who is here  
**\<SerHack\>** Hi  
**\<sgp\_\>** Hello  
**\<ErCiccione[m]\>** Hi everybody  
**\<sarang\>** Hello  
**\<Snipa\>** Good morning.  
**\<sethsimmons\>** Hi all :)  
**\<rbrunner\>** Grüezi  
**\<ErCiccione[m]\>** So the main point is to decide what are we going to include in the next release, but before that, would be great to have an overview of the status of CLSAG and related audits.  
**\<ErCiccione[m]\>** Sarang, go ahead please  
**\<ErCiccione[m]\>** :)  
**\<sarang\>** Sure  
**\<sarang\>** JP and Antony (the reviewers) have completed their audit of the preprint and code  
**\<sarang\>** They're finalizing the report for public release  
**\<sarang\>** The preprint has already been updated, and the code does not require any security updates  
**\<sarang\>** moneromooo is in the process of rebasing the code  
**\<sarang\>** I've been in contact with folks on the Ledger and Trezor teams throughout the process, since they have their own development and release timelines  
**\<moneromooo\>** in the process of preparing to get ready to start rebasing the code  
**\<sarang\>** :)  
**\<ErCiccione[m]\>** What's the ETA for having it PRd and ready for final reviews?  
**\<sarang\>** Trezor is pretty much ready to go; they'll need the fork height and can then update firmware, but the Monero-specific development is done  
**\<sarang\>** Ledger has done most of the work already and has code ready for integration on their side, but it hasn't been completed yet  
**\<sarang\>** The person I've been working with (Francois) said the team that does the firmware integrations does \_not\_ have this on their 2-month timeline for some reason  
**\<sarang\>** and that Francois would not be able to do the integration until after September 21 due to scheduling  
**\<sarang\>** They're check to see if the Ledger integration team can prioritize this if needed  
**\<sarang\>** Further, they want a couple of weeks to test after the integration is complete  
**\<sarang\>** and then can set the fork height and release on whatever timeline they choose  
**\<sarang\>** Is there a general opinion of when the upgrade should be, ideally?  
**\<rbrunner\>** Personally I don't see much more argument than "Why wait with improvements" ...  
**\<sarang\>** It seems like Ledger is the biggest unknown right now  
**\<sgp\_\>** Annoying that Ledger can't do any work for 2 months  
**\<sethsimmons\>** I'm all for pushing this ASAP once code is ready to go, but if Ledger is #soon we could wait for that.  
**\<sarang\>** Francois asked for 4 weeks between release and the upgrade height, presumably for prioritizing testing  
**\<ErCiccione[m]\>** I guess ledger will have to adapt their schedule.  
\<sgp\_ "Annoying that Ledger can't do an"\> Yeah no kidding...  
**\<rbrunner\>** "on whatever timeline they choose" sounds a little, well, harsh  
**\<sarang\>** but they are unavailable until September 21 to do the rebase and integration  
**\<ErCiccione[m]\>** Sarang: that's a good idea reguardless and we usually do it afaik  
**\<sarang\>** rbrunner: I didn't mean that to sound harsh  
**\<sethsimmons\>** Do we have a "release checklist" for this including these items?  
**\<sarang\>** I just meant that I don't know what's required for their releases  
**\<rbrunner\>** Alright :)  
**\<ErCiccione[m]\>** sethsimmons: the checklist is something good to have. We can discuss that once we have a date :)  
**\<sethsimmons\>** Ok, I'll start capturing some items for it to circle back to later.  
**\<ArticMine\>** So we are looking realistically at the end of October?  
**\<sarang\>** If the Ledger timeline works as I understand it from Francois, it sounds like end of October would be the soonest they could support  
**\<sarang\>** but it's unclear if that's guaranteed to work for the Ledger team  
**\<sethsimmons\>** What can we do to get a clearer timeline for them?  
**\<rbrunner\>** We all on ourselves could do this probably a month earlier, right?  
**\<sgp\_\>** 3 months of notice is extremely generous time  
**\<sarang\>** sethsimmons: I'm not sure  
**\<sarang\>** Francois is reaching out to the coin integration team to get a better sense of their prioritization  
**\<sarang\>** I haven't heard back about this yet  
**\<ErCiccione[m]\>** It is extremely generous. I wouldn't go beyond three months  
**\<sarang\>** But part of this seems to be that Francois is not available to do the necessary rebase until after Sep 21 for other reasons  
**\<sethsimmons\>** And there isn't anyone else at Ledger that can do it?  
**\<sarang\>** I do not know  
**\<sarang\>** Someone else previously worked on Monero support with Ledger, but recently passed this on to Francoid  
**\<sarang\>** \*Francois  
**\<sethsimmons\>** Ah, yes, forgot about that.  
**\<sgp\_\>** What about tentatively saying Oct 1?  
**\<ErCiccione[m]\>** Sounds good to me  
**\<sarang\>** I don't think that works  
**\<rbrunner\>** Maybe depends on Ledger's reaction to that.  
**\<dEBRUYNE\>** Seems too early  
**\<dEBRUYNE\>** We also have to account for other wallet providers such as MyMonero  
**\<ArticMine\>** I would suggest October 31  
**\<UkoeHB\_\>** Spooky  
**\<sarang\>** If Francois can start the integration right away on Sep 21 and Ledger prioritizes it on their timeline, they'd still want a couple of weeks to test their release with updated Monero code before releasing firmware with the block height  
**\<ErCiccione[m]\>** I wouldn't base the timeline on ledger's needs. We are giving them planty of time to adapt  
**\<sarang\>** I agree that at some point the release needs to happen, but I hope there can be as much support as is possible in a reasonable timeline  
**\<dEBRUYNE\>** I am all for allotting time for third-party wallets etc., but due to Ledger we're basically frozen for 2 months  
**\<ErCiccione[m]\>** They are a company that makes money on Monero. They ahould adapt on us, not the other way round  
**\<ErCiccione[m]\>** \*should  
**\<rbrunner\>** I tend to agree. If some entity cannot live with 3 months of advance warning, well, tough.  
**\<ErCiccione[m]\>** Giving plenty of time is fine. Adapting to their priorities is not  
**\<rbrunner\>** That's half of our "old" hardfork schedule, after all  
**\<UkoeHB\_\>** There have also been months of advance warning. The code was written a while ago  
**\<sarang\>** Well, they were also presumably waiting to know of any changes  
**\<ErCiccione[m]\>** Thanks for the thumbs up on matrix but those don't show up on IRC, please write what's in your mind :)  
**\<sarang\>** I know that Francois was unavailable to join this meeting today (but said they would read the logs later), but I can present the October 31 and get their thoughts  
**\<sgp\_\>** I still would rather present Oct 1  
**\<sethsimmons\>** As much as leaving Ledger users out to dry sucks (that includes me), if we give 3m and thats not enough with a lot of extra runway before now I'm not sure thats something we can wait even longer for.  
**\<sarang\>** Perhaps someone else can do the necessary rebase  
**\<sgp\_\>** Oct 31 is the absolute latest and is very non-ideal  
**\<sethsimmons\>** Yeah I'd love to hear if anyone else at Ledger can step in  
**\<sarang\>** They made it sound like rebase and working with Ledger integration team was all that was left to do  
**\<sethsimmons\>** 2mo without a way to rebase is.. odd  
**\<ErCiccione[m]\>** I tend to agree woth sgp  
**\<ArticMine\>** I would make October 31 firm, or maybe something like Oct 20  
**\<ArticMine\>** but make it firm  
**\<sarang\>** OK, so working backward from there  
**\<sarang\>** October 1 is the ideal \_fork height\_?  
**\<sarang\>** Not release  
**\<sgp\_\>** Coffee Chat planned on Oct 17. We can make another update edition  
**\<ErCiccione[m]\>** Oct 17 sounds like a good compromise.  
**\<ArticMine\>** Yes that seems reasonable  
**\<sethsimmons\>** That gives them 3+ weeks to rebase/test after their 9/21 date  
**\<sethsimmons\>** Hopefully that is plenty.  
**\<sarang\>** So I'd like to know what the proposed dates would be for (a) setting the block height, (b) releasing code, (c) the upgrade height occurring  
**\<sgp\_\>** b) Sept 17  
**\<sarang\>** Of course, once the Monero code is rebased, they can build and test on a private testnet as they wish  
**\<ErCiccione[m]\>** Block height 17 oct release one month before?  
**\<dEBRUYNE\>** sethsimmons: We need a release at least a few weeks in advance of the height  
**\<sgp\_\>** There will need to be another release for Ledger but that's only impactful to Ledger users, not consensus  
**\<dEBRUYNE\>** Preferably a month or so  
**\<sethsimmons\>** For sure  
**\<sarang\>** Note that there's already Ledger-specific code in the current Monero CLSAG branch  
**\<rbrunner\>** Yes, that would speak for a September 17 release, right?  
**\<ErCiccione[m]\>** Release 17 sept, hard fork 17 october?  
**\<ErCiccione[m]\>** Are people ok with that?  
**\<kinghat[m]\>** does monero have a list of commandments? 11. thou shalt not hold releases for outside entities.  
**\<ArticMine\>** That makes sense  
**\<kinghat[m]\>** amen  
**\<rbrunner\>** And maybe merged our changes into master on August 17? With time to play around on Testnet  
**\<sarang\>** OK, so when would the height be finalized?  
**\<sarang\>** Since that needs to go into their dev cycle  
**\<sarang\>** (this is where a release checklist would be \_very\_ helpful...)  
**\<ErCiccione[m]\>** I guess even now if we have a date for the hf.  
\<sarang "(this is where a release checkli"\> I'm compiling a starter as we speak :)  
**\<rbrunner\>** Seems so, the hardfork height should the be least problem if we have a date :)  
**\<sarang\>** rbrunner: right, but it needs to happen :D  
**\<sethsimmons\>** It could vary slightly in timing depending on HR changes, but we could set it now  
**\<sarang\>** sethsimmons: block times are pretty consistent overall  
**\<sethsimmons\>** Generally, yes, I wouldn't expect much variance.  
**\<sgp\_\>** Why not pick the exact height shortly before the Sept ~17 release  
**\<sgp\_\>** We did the important part of choosing the date today  
**\<ErCiccione[m]\>** Does anybody have anything against 17 september release, 17 october hard fork? Otherwise we can officialize it as decided  
**\<sethsimmons\>** Sounds good to me.  
**\<sarang\>** OK, so to recap... the intent is to merge all changes by August 17 for testnet, release on September 17, and fork on October 17?  
**\<ArticMine\>** The release need to have the fork hard coded?  
**\<rbrunner\>** I think it better has it, yes  
**\<sgp\_\>** Yeah  
**\<sarang\>** moneromooo: since you're getting all the CLSAG stuff rebased and updated, does that sound reasonable?  
**\<moneromooo\>** I can do it in time yes.  
**\<sarang\>** I'll reach out to Francois again with this timeline and see what the Ledger team can prioritize  
**\<sarang\>** and will reach out to the Trezor team too  
**\<sarang\>** Trezor basically said "let us know when your code is done and the height is set, and we're good"  
**\<ErCiccione[m]\>** Nice. Let's keep going then  
**\<sgp\_\>** Trezor sounds awesome haha  
**\<ErCiccione[m]\>** What other consensus changes do we want in?  
**\<rbrunner\>** Are there any waiting?  
**\<sethsimmons\>** Only potential one is BP+, correct?  
**\<sgp\_\>** There were a few more things included in the logs I posted in the meeting issue  
**\<ArticMine\>** and issue 70 in MRL  
**\<sgp\_\>** Coinbase rings is one I'm pushing for  
**\<moneromooo\>** I want to straightn out some unlock time stuff, technically a consensus change, but no functional change.  
**\<moneromooo\>** I've been meaning to do that for a long while.  
**\<sarang\>** If the freeze deadline is mid-August, I doubt BP+ could safely make it in  
**\<sgp\_\>** moneromooo: sounds good to me :)  
\<sgp\_ "Coinbase rings is one I'm pushin"\> What is needed for that?  
**\<sarang\>** but TBH the size savings aren't so significant as to make that a huge loss  
**\<sethsimmons\>** AKA could coinbase rings easily make it in in time?  
**\<sgp\_\>** BP+ would also need more review/audit right?  
\<sarang "but TBH the size savings aren't "\> Yeah no need to rush that at all.  
**\<sarang\>** sgp\_: I personally think so, but part of it depends on what the actual diffs from the current code end up being  
**\<sgp\_\>** So no BP+ then  
**\<sarang\>** When I brought up BP+ earlier (when the preprint came out), the reaction seemed quite "meh"  
**\<sarang\>** and only now seems to have come up again with the new CCS  
**\<sarang\>** But no, I would not plan on BP+ for the fall upgrade  
**\<sarang\>** and certainly don't block for it  
**\<ArticMine\>** How big are the savings?  
**\<sarang\>** Something like 90 bytes per single proof  
**\<sarang\>** Not massive, but not trivial either  
**\<ErCiccione[m]\>** Ok, so seems that consensus is to keep bp+ out for now.  
**\<ErCiccione[m]\>** What abut coinbase rings? Do we need more discussion about that?  
**\<sgp\_\>** For coinbase-only rings, luigi supports reducing the coinbase ringsize to only 1  
**\<sethsimmons\>** I'm still not sure whats still needed for that/how feasible it is to make it into the HF  
**\<sethsimmons\>** sgp\_: can you speak to that?  
**\<sethsimmons\>** I'm for the change overall, just not sure on details  
**\<sgp\_\>** I can't speak to moo and others' ability to code it in time  
**\<sethsimmons\>** moneromooo: any idea on timelines for that/is anyone else helping with coding that?  
**\<moneromooo\>** Nobody is doing this AFAIK. I won't unless MRL clearly says it should be done.  
**\<moneromooo\>** In which case it's an easy change I think.  
**\<rbrunner\>** Yeah, reading the IRC notes on the meta issue I was wondering whether there is already our famous "loose consensus" about this, or quite diverging opinions  
**\<sethsimmons\>** sarang: any feedback on that overall?  
**\<sethsimmons\>** I've seen back and forth but no clear decision.  
**\<rbrunner\>** After all it's again some step up in protocol complexity.  
**\<ErCiccione[m]\>** rbrunner: my feeling too  
**\<ArticMine\>** I see the question being consensus rather than coding time  
**\<sethsimmons\>** Appears so :)  
**\<sarang\>** I marginally support such a change, but it would require pretty hefty testing  
**\<sarang\>** Since it would affect how outputs are selected in the distribution  
**\<sgp\_\>** This doesn't require a consensus change, but it's related to https://github.com/monero-project/monero/issues/5222  
**\<sethsimmons\>** coinbase rings requires consensus change, correct?  
**\<sgp\_\>** Yeah  
**\<moneromooo\>** Yes, if you want nodes to reject those that don't behave.  
**\<sethsimmons\>** Figured, just wanted to make sure.  
**\<sethsimmons\>** The main reason I'd like to see it in this upgrade (if we can reach rough consensus) is because its not worth its own HF so would have to wait for another down the line  
**\<sethsimmons\>** Which could be a while.  
**\<sethsimmons\>** Would it be worthwhile to separate out a meeting for that discussion?  
**\<sarang\>** sethsimmons: for which proposal exactly?  
**\<sarang\>** (too many things flying back and forth)  
**\<sethsimmons\>** coinbase ring changes  
**\<sethsimmons\>** SOrry :)  
**\<ErCiccione[m]\>** I would say let's wait for clear consensus before deciding  about coinbase rings in the october hard fork. It's not super urgent anyway and we don't have to decide now.  
**\<sarang\>** Rushing output selection changes seems unwise  
**\<sarang\>** but that's not a reason not to do them if desired, of course  
**\<rbrunner\>** Well, if we want to be able to play with the release on Testnet in 1 month, that's not much time left.  
**\<sethsimmons\>** True, especially since it seems to need a good bit of testing/verification even after code release  
**\<hyc\>** you can always setup private testnets  
**\<sarang\>** The CLSAG changes are significant enough that I think delaying for smaller changes is not worth it  
**\<sarang\>** Having plenty of time to test CLSAG will be important  
**\<sethsimmons\>** Definitely agree.  
**\<sgp\_\>** I don't think this would cause a delay; rather no one else seems enthusiastic about it  
**\<sethsimmons\>** I'm enthusiastic about it :P But there certainly doesn't seem to be strong consensus  
**\<rbrunner\>** I would rather wait a little and wait for 50+ rings, with Triptych, making some such problems marginal as I see it  
**\<hyc\>** no clear benefit, nobody knows what the risks actually are. sounds like a bad idea  
**\<sethsimmons\>** Hmm, hadn't thought about what effect increased ringsizes would have on it in future.  
**\<sgp\_\>** The problem stays and scales, but the convincing ringsize is still larger  
**\<ErCiccione[m]\>** Alright. I think the general feeling is to not include coinbase rings in the upcoming release. Let's not go in depth about it now, it can be discussed in another meeting :)  
**\<sgp\_\>** Sure, no one else really cares so pass  
**\<ErCiccione[m]\>** Anything else that we want in? Or any blockers that should be resolved?  
**\<rbrunner\>** Well, not care sounds harsh, just different weighting of trade-offs maybe  
**\<sarang\>** sgp\_: I do care, and would support a change if implemented and tested carefully  
**\<sarang\>** I think it's somewhat marginal for heuristics, as I've said elsewhere  
**\<ErCiccione[m]\>** As far as i understood there shouldn't be blockers, right? The biggest issue right now seems to be ledger that cpuld be late  
**\<sarang\>** Right, it's not clear when the Ledger release would be available  
**\<rbrunner\>** Let's see what they come up if a little gentle pressure  
**\<sarang\>** Yeah, now that there's a date in mind, I'll let them know and see what could be done  
**\<rbrunner\>** Of an October 17 hardfork  
**\<sarang\>** Perhaps they hadn't prioritized because no date was known  
**\<sarang\>** which is understandable  
**\<sarang\>** And if there are useful coinbase changes and/or BP+, that would make for a nice subsequent release at some point  
**\<sethsimmons\>** Good point on the subsequent release :)  
**\<rbrunner\>** So we won't run out of hardforks anytime soon :)  
**\<sethsimmons\>** Gotta keep the FUD alive :D  
**\<ErCiccione[m]\>** Alright. So, let's start talking about splitting duties. Wpuld be good to have a checklist of stuff that needs to be done and people willing to take care of it  
**\<sarang\>** Yeah, a while back I brought up the idea of a checklist  
**\<ErCiccione[m]\>** We don't necessarely have to decide everything now, but wpuld be good to start  
**\<sarang\>** Where assignments can be made for who is responsible, and when, etc.  
\<ErCiccione[m] "Alright. So, let's start talking"\> I have a WIP checklist I can share if you'd like.  
**\<sarang\>** and hopefully avoid a lot of the small errors and problems that happen from time to time  
**\<sarang\>** e.g. "the hashes don't match" etc.  
**\<sethsimmons\>** And I'm happy to own some of the administrative tasks (contacting entities, etc.)  
**\<rbrunner\>** Didn't fluffypony hand over something a while ago?  
**\<ErCiccione[m]\>** sethsimmons: yes please we can then integrate it with some that are already around (fluffypony has one)  
**\<sarang\>** rbrunner: he had a few things, yes  
**\<sarang\>** Having an ongoing list would be great, and any issues that arise can be added to avoid in future releases  
**\<sethsimmons\>** Let me post to a pastebin site  
**\<sethsimmons\>** Copy paste will end poorly for you IRCers  
**\<sarang\>** yeahhhhh  
**\<sethsimmons\>** https://paste.centos.org/view/84f18a65  
**\<sethsimmons\>** Initial list  
**\<sethsimmons\>** Very WIP  
**\<hyc\>** hmmm. Can post an instance of the checklist for each release  
**\<hyc\>** on gitlab  
**\<sethsimmons\>** I'm sure I have some steps out of order etc  
**\<hyc\>** and make each point an unresolved thread  
\<hyc "on gitlab"\> Yeah that would be the intent  
**\<hyc\>** and then resolve them as they are taken care of  
**\<sethsimmons\>** Host it in an issue perhaps with MD checklist  
**\<sarang\>** something something gantt chart  
**\<sethsimmons\>** \*meta issue  
**\<rbrunner\>** Soon we will end up on JIRA  
**\<sethsimmons\>** I'm a JIRA admin dont tempt me  
**\<hyc\>** JIRA - where software projects go to die  
**\<sethsimmons\>** :P  
**\<sarang\>** GitHub supports basic kanban boards  
**\<ErCiccione[m]\>** I would say a basic kanban on github would do it. We could link issues to it and assign issues to prople  
**\<sethsimmons\>** Should I open a meta issue to work through the creation of the checklist?  
**\<sethsimmons\>** So we can have discussion/updates/etc.  
**\<rbrunner\>** Sounds good  
**\<sarang\>** Ah, a checklist checklist  
**\<sethsimmons\>** XD  
**\<sethsimmons\>** We've gone too deep  
**\<ErCiccione[m]\>** Lol, but i do think would be useful  
**\<sethsimmons\>** Any initial feedback on the first stab at the list?  
**\<sgp\_\>** I have a self-hosted Wekan available (Trello clone)  
**\<sethsimmons\>** If not I'll open the issue now and we can iterate as needed.  
**\<sarang\>** Ledger/Trezor coding is a bit more abstract  
**\<sarang\>** Unless you mean "on the Monero codebase"  
**\<ErCiccione[m]\>** sgp\_: i would keep it simple and just create one on github. Also much more visible  
**\<sarang\>** e.g. there's Ledger-specific code in Monero  
**\<sarang\>** as a device option  
**\<sethsimmons\>** I'll break that into our end and their end  
**\<sethsimmons\>** \< https://matrix.org/\_matrix/media/r0/download/matrix.org/ioQposdWvgLsHrglHKedyYMn \>  
**\<sethsimmons\>** Oof that didn't paste well  
**\<sethsimmons\>** https://paste.centos.org/view/29c74c53 \<- Better?  
**\<sarang\>** Wallets should be informed as early as possible IMO  
**\<sarang\>** As should exchanges  
**\<sethsimmons\>** Right after fork height, or tagging?  
**\<sarang\>** Seems that exchanges operate at the speed of a glacier as it is  
**\<sarang\>** I'd say right at fork height, so they can plan for it  
**\<sethsimmons\>** done.  
**\<sarang\>** Even if they don't start working right away, then they at least know when to expect the release and the upgrade  
**\<sethsimmons\>** Any last updates? Don't wanna derail this meeting too much with the first take on it.  
**\<ErCiccione[m]\>** Alright. I would say we can conclude the meeting  
**\<ErCiccione[m]\>** The discussion about the checklist can continue after or directly on the meta issue  
**\<sarang\>** OK, what are action items on this?  
**\<sarang\>** I'm going to contact Trezor and Ledger folks ASAP with these dates  
**\<ErCiccione[m]\>** Nope, we are done.  
**\<ErCiccione[m]\>** Thanks everybody for participating. You are free to go back to your sundays :)  
