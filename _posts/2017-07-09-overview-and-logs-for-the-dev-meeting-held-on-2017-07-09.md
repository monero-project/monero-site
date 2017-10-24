---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-07-09
summary: Discussion of open PRs and issues, 0MQ, reimagining the FFS, 0MQ, and miscellaneous
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Overview  

An overview [can be found on MoneroBase](https://monerobase.com/wiki/DevMeeting_2017-07-09).  

# Logs  

**\<fluffypony>** 1. Greetings  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<fluffypony>** 4. Reimagining the FFS (discussion)  
**\<fluffypony>** 5. Any additional meeting items  
**\<fluffypony>** 6. Confirm next meeting date/time  
**\<fluffypony>** going to skip 1 because I think we're all mostly here  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** loads of stuff, lots of PRs in process and getting close to merge  
**\<fluffypony>** and then the new website of course  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<fluffypony>** so I'd like to just have a quick step through some PRs that are still in the wings  
**\<hyc>** been getting deluged by readline and new sync commits  
**\<fluffypony>** #1936: any input?  
**\<moneromooo>** It's marked as do not merge, so I've not looked in ages. Not sure whether revler's still around.  
**\<hyc>** He commented 9 days ago to close it in favor of #2055  
**\<pero>** ^  
**\<fluffypony>** oh I missed that  
**\<fluffypony>** thanks hyc  
**\<dEBRUYNE>** Which is merged already :-P  
**\<hyc>** even better ;)  
**\<nioc>** moneromooo: yes revler is still around  
**\<fluffypony>** ok - 2023 is waiting until after the Sept fork, right?  
**\<moneromooo>** Yes.  
**\<fluffypony>** ok  
**\<fluffypony>** #2044: tewinget, there are pending comments  
**\<fluffypony>** maybe we can get this merged sometime in the next century  
**\<dEBRUYNE>** tewinget commented on that here fwiw  
**\<dEBRUYNE>** \<tewinget> dternyak: seems reasonable.  it'd have to be on a case-by-case basis as some other things are ramping up to keep me a little busier, but for now I plan to have all the suggestions / notes from moneromooo addressed by the end of today.  
**\<moneromooo>** What concerns me is that there were misc commits adding/changing RPC, and some of the stuff (ie, getinfo) is kinda reverting those.  
**\<nioc>** fluffypony: tewinget said he would deal with it by the end of the day  
**\<moneromooo>** It might be a pita to go through everything to check all is ported.  
**\<fluffypony>** moneromooo: we'll run both JSON RPC and 0MQ in parallel for the moment anyway  
**\<fluffypony>** so that should reveal it  
**\<fluffypony>** #2056: needs to be backed up by a final MRL write-up  
**\<fluffypony>** which I believe is WIP  
**\<fluffypony>** kenshi84: ^^  
**\<knaccc>** i.e. 2056 should not be merged prior to an MRL being published?  
**\<jollymort>** speaking of which, wouldn't it be simpler to c&p the write-up from #2056 into a .md file?  
**\<jollymort>** i mean, it's all there; but not in fancy TEX format  
**\<fluffypony>** @jollymort nobody wants to review it unless it's in fancy TeX :-P  
**\<hyc>** phototypesetter-ready copy or go home  
**\<fluffypony>** lol  
**\<fluffypony>** ok everything else is still WIP  
**\<hyc>** Is this a good time to mention, https://github.com/monero-project/meta/issues/85 still hasn't gotten much feedback  
**\<hyc>** which is a bit surprising, considering the intensity of the IRC chat  
**\<ArticMine>** Yes this needs feedback  
**\<ArticMine>** Project licensing  
**\<moneromooo>** Those can get merged: 2126 2131 2132 2133 (if diff agrees) 2135 2140 2142  
**\<moneromooo>** Some newer ones are also simple, but too new I guess.  
**\<fluffypony>** moneromooo: tks  
**\<fluffypony>** hyc: cross-post it to Reddit maybe?  
**\<moneromooo>** 2138 too if someone is qualified to review (I am not).  
**\<fluffypony>** ok  
**\<hyc>** hmm. reluctant to face the low signal-to-noise ratio on reddit with that ticket, but perhaps that's the only way to get eyes on it  
**\<fluffypony>** anything else on this or can we move ahead?  
**\<moneromooo>** I'd like to get guinea pigs for https://github.com/moneromooo-monero/bitmonero/tree/sync :)  
**\<moneromooo>** It's mostly working fine (pending iDunk's latest test).  
**\<iDunk>** ...ahem...  
**\<moneromooo>** :/  
**\<fluffypony>** lol  
**\<moneromooo>** Well, maybe later.  
**\<hyc>** would be nice to include a script to monitor network stats  
**\<vtnerd>** moneromooo : I have a review in progress of that branch that I hope to get out  
**\* iDunk** envisions more #2149 commits :)  
**\<moneromooo>** Ah, I've got to squash before it's reviewable.  
**\<hyc>** and quantify difference in bandwidth usage  
**\<vtnerd>** ah so its not reviewable?  
**\<vtnerd>** oh you mean squash the commit history  
**\<hyc>** the commit msgs are all so enlightening so far ;)  
**\<moneromooo>** Well, if you look at the diff itself, it should be. But it's a lot of shitty commits atm.  
**\<moneromooo>** hyc: there's a new sync\_info command which kinda does that.  
**\<hyc>** oh, cool  
**\<hyc>** but you'd also need that cmd in a before- patch, for comparison  
**\<mattcode>** can we frame the commit messages from #2149 and put them in a gallery?  
**\<moneromooo>** Ah, it doesn't really apply before the patch. I expect people would just time a sync before and after.  
**\<hyc>** :D  
**\<hyc>** I think we could just grab ifconfig stats or something instead.  
**\<hyc>** but whatever  
**\<moneromooo>** I used iftop.  
**\<moneromooo>** A bit handwavy though.  
**\<moneromooo>** But at some point after startup, it's the CPU that's the bottleneck.  
**\<pero>** nethogs does it per process  
**\<hyc>** ok. that's a good position to be in then.  
**\<fluffypony>** ok  
**\<fluffypony>** moving on?  
**\<iDunk>** Damn monero users. It would sync in no time if only there weren't any transactions.  
**\<hyc>** Who is familiar with Docker to review #2138?  
**\<hyc>** obviously I've already done those steps manually, to build Android binaries.  
**\<pigeons>** I'll take a look, but I find new docker oddities and workarounds daily  
**\<hyc>** cool  
**\<tewinget>** oh dear, late.  sorry about that.  
**\<hyc>** ok I guess that's it for open tickets  
**\<tewinget>** on my laptop; idk if I ever checked if I got my irc set up right on here; hyc ACK if you see this.  
**\<hyc>** tewinget yes?  
**\<tewinget>** kk  
**\<fluffypony>** ok  
**\<fluffypony>** 4. Reimagining the FFS (discussion)  
**\<moneromooo>** So... moving on... luigi1111, any news about N-1/N multisig theory ? :)  
**\<moneromooo>** nevermind  
**\<fluffypony>** so  
**\<fluffypony>** the FFS has worked fine the last few years, but we need to formalise some of the processes  
**\<fluffypony>** for eg. what do we do with over-funding? currently we put it into the general fund and then use that for future FFS proposals  
**\<fluffypony>** but I'm open to suggestions  
**\<rehrar>** I wrote something up for it, and it had mixed feedback. https://github.com/rehrar/meta/tree/master/FFS  
**\<rehrar>** A good deal of feedback said it was too formal, and in the Terms the Conclusion should go at the top as an Intro instead, but yeah. Any feedback is welcome. :)  
**\<moneromooo>** Maybe there could be a running "monero core team" ffs, with \<pinky up> 1 million monero limit...  
**\<hyc>** does that mean the next FFS proposal that gets submitted automatically gets a head start?  
**\<fluffypony>** hyc: we give every FFS proposals a head start anyway  
**\<hyc>** ok  
**\<fluffypony>** also pero had some thoughts  
**\<fluffypony>** iirc on time frames and so on  
**\<pero>** hmmm yea i could look at this  
**\<pero>** timeframes and scope i'd like to see more detailed in my SOWs than i have seen so far in the FFSs  
**\* tewinget** runs and hides  
**\<pero>** ;)  
**\<pero>** it's really hard to manage work if these things arent defined  
**\<pero>** and mediation/dispute resolution is impossible  
**\<pero>** what i was thinking really was to have some sort of template for prospective fundraisers  
**\<gkruja>** maybe have 2 week sprints where the devs report there work so people know thats its being worked on actively even though the time frame is pushed back due to difficulties that could come up?  
**\<tewinget>** "sprints"  ...  
**\<pero>** -\_-  
**\<moneromooo>** You run if you want dude. I'm coding.  
**\<tewinget>** gkruja, other than the term "sprints" which has a bit of a negative connotation from what I can tell, that doesn't seem like a bad idea.  
**\<pero>** maybe 2 weeks isnt that bad to have it coincide with the dev meetings - but not all FFS work is dev wwork  
**\<pero>** yea precisely tewinget  
**\<fluffypony>** milestones are the reporting periods  
**\<mattcode>** The Monero Enterprise Alliance needs to promote agility in the workplace, so we should all sprint every two weeks.  
**\<fluffypony>** mattcode: hence the creation of MEAT  
**\<tewinget>** we know how fluffypony loves his MEAT.  
**\<pero>** well i typically insert checkpoints before milestones in projects  
**\<fluffypony>** the problem with milestones is that they aren't always backed up by timeframes  
**\<pero>** so i know if my milestones arent going to be hit  
**\<pero>** and something can be actively done about it  
**\<fluffypony>** pero: that might work, but might also be too formal, we need to balance it with it being accessible to part-time contributors  
**\<hyc>** and what are our choices of things that can be done about it? Should we have a list of those spelled out?  
**\<pero>** usually solutions arent that clear cut ;p  
**\<pero>** might just be a matter of documenting a pattern of missed deadlines  
**\<gkruja>** the progress updates could be determined on a per project basis  
**\<endogenic>** better would be to list potential problems  
**\<endogenic>** answers w/o the problems are sure not to match  
**\* tewinget** runs and hides again  
**\<pero>** ;p  
**\<rehrar>** In my write up, the contract that was funded is the active contract, and if a change needs to be made for reasons then it needs to be brought before the community where the reasons for change and the proposed changes are brought up, and the community can decide whether it is acceptable or not.  
**\<fluffypony>** rehrar: but then where's the forum for that? the dev meetings?  
**\<rehrar>** Or community meeting  
**\<rehrar>** Whichever is more appropriate  
**\<rehrar>** Dev meeting for coding things, community for non-coders things  
**\<pero>** well the missed deadline example is from 'real world' tewinget ... usually you need a documented pattern like that if you want to sever a contract and fire someone  
**\<pero>** bring on a new resource/vendor  
**\<fluffypony>** yeah true, I think the dev workgroup is better suited to analysing whether something is acceptable or not  
**\<rehrar>** And as long as it's announced that a decision will be made in the upcoming meeting well beforehand, there should be no complaints that someone wasn't able to be present to vote.  
**\<endogenic>** voting is a tricky concept  
**\<moneromooo>** OTOH, decision ought to be in the hands of the donators for that particular project. Maybe I need to code some voting thing where one can prove they paid to a ffs...  
**\<pero>** another thing with better defined scope/schedule/budget  
**\<rehrar>** And that's a good point Moneromooo, should a person who didn't donate have any sway in the vote?  
**\<pero>** is that we can manage what happens when 'contractors' go over budget  
**\<pero>** tweinget and rehrar surely went much over what they estimated  
**\<endogenic>** i don't think voting should be used, personally, unless it's limited to people who are actually qualified  
**\<pero>** and unhappy resources are poorly performing resources from my experience  
**\<rehrar>** I did?  
**\<ArticMine>** Yes but should it be donators overall or donators to a specific FFS?  
**\<iDunk>** When I donated to moneromooo's latest FFS, I was late and he was already funded. I donated anyway and wished I had a way to direct the donation to him anyway.  
**\<ArticMine>** I mean we are putting general funds into these  
**\<endogenic>** we only need to resort to voting in the absence of being able to determine what the problem actually is  
**\<endogenic>** in any given case  
**\<rehrar>** Can we vote via masternode?  
**\<endogenic>** genius  
**\<fluffypony>** lol  
**\<moneromooo>** I didn't say anything becuse I am this biased, but Alice donating to Bob's clearly shows the intent.  
**\<fluffypony>** soon™  
**\<moneromooo>** \*thus  
**\<pero>** so the FFS should have an ability or mechanism for the contractor to demonstrate a need for increased budget as well  
**\<pero>** and the excess donations can be used partly for this 'contingency fund'  
**\<endogenic>** one problem is that it will be difficult to achieve consensus on what the problem is if some people who are voting have an interest in people not agreeing that such a thing is a problem  
**\<rehrar>** Maybe we can tackle this in Community Meeting too.  
**\<endogenic>** so there needs to be some kind of standard about what is more important - maintaining those interests, or the solution to the actual problems  
**\<fluffypony>** pero: increased budget = new proposal  
**\<hyc>** dunno. as I see it, FFS means you pitch a flat rate for a project. Then how you manage your time is your own business, but there's no such thing as a budget overrun  
**\<tewinget>** pero: on that note, I had trouble deciding originally for the zmq thing whether to do hourly milestones or progress milestones.  I think requiring both might be a good idea.  Either one can be the milestones for payouts, but the other should be tracked for progress as well imo.  
**\<tewinget>** I'm just going off of "what would I do differently".  
**\<moneromooo>** FTR, the kovri meeting is just starting too.  
**\<hyc>** ah we need to wrap this up then  
**\<gkruja>** if that's it then i can post my small gallery again for you guys and all the nice people on Reddit to see  
**\<gkruja>** http://imgur.com/a/mluUb  
**\<moneromooo>** I'll still be around in an hour :)  
**\<moneromooo>** (to prod luigi, arf arf)  
**\<endogenic>** see y'all again in 2 weeks?  
**\<luigi1111>** making lunch :-)  
**\<tewinget>** I'll be out cold in like 5 minutes.  I'll update sometime tonight (well, tomorrow morning/early afternoon probably for you EU folks -- I seem to be on like GMT - 10 as far as sleep goes)  
**\<fluffypony>** yup  
**\<fluffypony>** two weeks™  
**\<pero>** i think for defined deliverables, say like zmq  
**\<pero>** just a scope table would go a long way in making it more manageable  
**\<pero>** scope item | work effort | delivery eta  
**\<dternyak>** moneromooo: OTOH, decision ought to be in the hands of the donators for that particular project. Maybe I need to code some voting thing where one can prove they paid to a ffs...  
**\<dternyak>** I had a similar though, but then you run the risk of the vender funding a majority of their own FFS so that they could have majority vote on if they are fired.  
**\<dternyak>** thought\*  
**\<endogenic>** ^  
**\<endogenic>** or any of many other possibilities  
**\<moneromooo>** Interesting point.  
**\<hyc>** if they're majority funder of their own project... what's the problem?  
**\<endogenic>** they could crowd others out, for one  
**\<moneromooo>** But then it'd be expensive and nobody would pitch in for the rest ?  
**\<dternyak>** they can steal the other 49% of peoples money by never firing themselves  
**\<endogenic>** even if they aren't hiring themselves, one group can still fund projects and make the same issue  
**\<dternyak>** yes, there are several flaws  
**\<endogenic>** and as for having people in general vote on stuff... has anyone heard of "bread and circuses?" it's commonly known that people tend to choose what's convenient or what might give them temporary gain even at the expense of future survival  
**\<moneromooo>** Oh, anonimal's kovri.i2p mention made me remember a couple people said it'd be nice to have a hidden service (and eepsite) for getmonero.org. Leading by example :)  