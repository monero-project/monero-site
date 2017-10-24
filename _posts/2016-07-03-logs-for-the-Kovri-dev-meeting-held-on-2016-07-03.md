---
layout: post
title: Logs for the Kovri Dev Meeting Held on 2016-07-03
summary: Brief review of what has been completed since last meeting, SSU refactoring, closed and open issues
tags: [dev diaries, i2p, crypto]
author: dEBRUYNE / fluffypony
---

### Logs

**\<fluffypony>** ok I guess we move on to Kovri - anonimal, the floor is yours  
**\* fluffypony:** ding dings  
**\<meeting-bot> [anonimal]** Meeting Agenda: Sunday, July 3rd, 17:00 UTC  
**\<meeting-bot> [anonimal]** 1. Greetings  
**\<meeting-bot> [anonimal]** 2. Brief review of what's been completed since the previous meeting  
**\<meeting-bot> [anonimal]** 3. Discuss SSU: status of #140 and https://github.com/EinMByte/kovri/pull/1 (if applicable), ideas, problems, and solutions (note: ask if @EinMByte will allow issues tracking within his repo)  
**\<meeting-bot> [anonimal]** 4. Discuss commit message labeling, e.g., how to organize first line of commits. Touch-up on C4.  
**\<meeting-bot> [anonimal]** 5. Review open tickets (assigned and/or unassigned): status, code ideas (if applicable), etc.  
**\<meeting-bot> [anonimal]** 6. Discuss any pertinent TODO's  
**\<meeting-bot> [anonimal]** 7. Any additional meeting items  
**\<meeting-bot> [anonimal]** 8. Confirm next meeting date/time  
**\<meeting-bot> [anonimal]** -- 1. Greetings  
**\<meeting-bot> [anonimal]** Hi  
**\<moneromooo>** hi  
**\<fluffypony>** hi  
**\<meeting-bot> [anonimal]** I know Ein is irc2p side waiting for me to move on :)  
**\<meeting-bot> [anonimal]** 2. Brief review of what's been completed since the previous meeting  
**\<meeting-bot> [fluffypony]** I'm on this side too  
**\<meeting-bot> * anonimal** wishes this was automated. /pulse only does so much  
**\<meeting-bot> [anonimal]** 28 commits (not including merges), 2 new issues open, 0 issues closed  
**\<meeting-bot> [anonimal]** All new commits in https://github.com/einmbyte/kovri/tree/ssu  
**\<meeting-bot> [anonimal]** I ended up diving into SSU with EinMByte this week. Much fun.  
**\<meeting-bot> [anonimal]** Teamwork-teamwork: within the past hour, we had figured out that the HMAC digest impl was segfaulting because GetHeader->GetMAC() was not initialized, so the segfault is fixed for now.  
**\<meeting-bot> [anonimal]** But that's just a small portion of what's been completed since previous meeting, and more issues abound. More to discuss in 3.  
**\<meeting-bot> [anonimal]** Anyone else re: completed work since previous meeting?  
**\<meeting-bot> [fluffypony]** I've been focused on the OTF funding stuff, so I haven't had a chance to finish the website work  
**\<meeting-bot> [fluffypony]** pushing that out till the next meeting, unless we have to prepare more stuff for the OTF  
**\<meeting-bot> [anonimal]** Ok. Any new issues re: OTF?  
**\<meeting-bot> [anonimal]** Seems like they've had a few lately.  
**\<meeting-bot> [anonimal]** i.e., did we get confirmation that they received our request?  
**\<meeting-bot> [fluffypony]** no I think the next step is we'll receive a pass / fail on the concept note  
**\<meeting-bot> [fluffypony]** yes we did  
**\<meeting-bot> [_trump2016]** OTF will make kovri great again!  
**\<meeting-bot> [anonimal]** Confirmation, good.  
**\<meeting-bot> [anonimal]** Anyone freenode-side? Is xmrpromotions there?  
**\<meeting-bot> [fluffypony]** so if we receive a pass we have to prepare an actual proposal  
**\<meeting-bot> [fluffypony]** but let's see when we get there  
**\<meeting-bot> [fluffypony]** (if)  
**\<meeting-bot> [fluffypony]** they were on Reddit the other day, they seem to be busy at the moment  
**\<meeting-bot> [fluffypony]** they've asked for assistance on the gnu-social thing  
**\<meeting-bot> [anonimal]** Link? What kind of assistance? I'd be happy to help.  
**\<meeting-bot> [fluffypony]** I'll have to find it and send it to you post-meeting  
**\<meeting-bot> [anonimal]** Ok. Anything else on 2.?  
**\<meeting-bot> [fluffypony]** oh found it, nevermind: https://www.reddit.com/r/Monero/comments/4qywbx/what_are_moneros_pain_points_marketing_design/d4x34p3  
**\<meeting-bot> [fluffypony]** nein  
**\<meeting-bot> [anonimal]** fluffypony: Thanks, I'll look into it later.  
**\<meeting-bot> [anonimal]** Moving on,  
**\<meeting-bot> [anonimal]** 3. Discuss SSU: status of #140 and https://github.com/EinMByte/kovri/pull/1 (if applicable), ideas, problems, and solutions (note: ask if @EinMByte will allow issues tracking within his repo)  
**\<meeting-bot> [anonimal]** So, https://github.com/EinMByte/kovri/pull/1 has been merged  
**\<meeting-bot> [anonimal]** EinMByte: will you allow issues tracking within your repo? It would help with this bug we're hunting.  
**\<meeting-bot> [anonimal]** Oops, old paste, we fixed the bug,  
**\<meeting-bot> [anonimal]** but are still dealing with related issues.  
**\<meeting-bot> * anonimal** knows Ein is somewhere, we were chatting elsewhere during the bitmonero meeting  
**\<meeting-bot> [EinMByte]** Hi  
**\<meeting-bot> [anonimal]** Maybe he still thinks its the previous meeting...  
**\<meeting-bot> [anonimal]** Hi  
**\<meeting-bot> [EinMByte]** Yes, I will allow all contributions to my repo  
**\<meeting-bot> [EinMByte]** Latest issue is: we are sending out broken packets  
**\<meeting-bot> [fluffypony]** issue tracking has to be explicitly enabled for the repo, EinMByte  
**\<meeting-bot> [EinMByte]** (but at least the segfault is fixed)  
**\<meeting-bot> [fluffypony]** it's a setting in github somewhere  
**\<meeting-bot> [anonimal]** ^ what fluffypony said  
**\<meeting-bot> [anonimal]** EinMByte: are we in a committable stage for the segfault fix? So I can see where we stand?  
**\<meeting-bot> [EinMByte]** anonimal: Already committed  
**\<meeting-bot> [EinMByte]** fluffypony: somewhere where  
**\<meeting-bot> [anonimal]** I imagine we're sending bogus packets in SessionRequest  
**\<meeting-bot> [fluffypony]** I'll check  
**\<meeting-bot> * anonimal** fetching  
**\<meeting-bot> [EinMByte]** fluffypony: Never mind, I think I got it  
**\<meeting-bot> [fluffypony]** if there's time, anonimal, can you please explain what SSU is for those who are observing the meeting ?  
**\<meeting-bot> [anonimal]** Ok, latest commit makes sense.  
**\<meeting-bot> [anonimal]** Yes,  
**\<meeting-bot> [anonimal]** tl;dr, in plain english,  
**\<meeting-bot> [anonimal]** it is one of two transport mechanisms closest to the IP layer:  
**\<meeting-bot> [anonimal]** NTCP is for TCP, SSU is for UDP.  
**\<meeting-bot> [anonimal]** SSU essentially takes care of encryption and negotiation with peers at the UDP level.  
**\<meeting-bot> [anonimal]** Does that make sense, or should I explain more?  
**\<meeting-bot> * anonimal** fetches link  
**\<meeting-bot> [anonimal]** Specification here: https://geti2p.net/spec/ssu  
**\<meeting-bot> [anonimal]** Overview here: https://geti2p.net/en/docs/transport/ssu  
**\<meeting-bot> [EinMByte]** In case anyone is really listening: we are rewriting the SSU implementation because  
**\<meeting-bot> [EinMByte]** 1) It doesn't allow for unit tests  
**\<__uguu__>** i2p needs a better udp transport  
**\<meeting-bot> [EinMByte]** 2) The design is bad, because separate concepts are not separated in code (packet parsing was done in the same functions as dealing with networking etc)  
**\<meeting-bot> [anonimal]** X) it was an unmaintainable nightmare, like much of the codebase that we have yet to refactor.  
**\<meeting-bot> [EinMByte]** __uguu__: It probably does, so let's hope SSU2 will be better  
**\<meeting-bot> [EinMByte]** (I'm not sure what the satus on SSU2 is, AFAIK there's not even a spec yet)  
**\<meeting-bot> [anonimal]** I had some ideas/problems/solutions when working on everything this week,  
**\<meeting-bot> [anonimal]** but I need more time to flesh out tangible thought.  
**\<meeting-bot> [anonimal]** I think we're on the right track, as we discussed earlier.  
**\<meeting-bot> [EinMByte]** Ok, no problem. Maybe write everything down on github?  
**\<meeting-bot> [anonimal]** Sure, I'll comment more in #140 or open an issue in your repo.  
**\<meeting-bot> [anonimal]** Essentially, I want to take a closer look at design this week as I said I would stay away when we last spoke.  
**\<meeting-bot> [anonimal]** e.g., what we discussed earlier about MAC buffer, etc.  
**\<meeting-bot> [EinMByte]** Yes, in terms of design many things are currently undecided  
**\<meeting-bot> [EinMByte]** I've mentioned before that this is more of a refactoring than a rewrite  
**\<meeting-bot> [anonimal]** Hmm... maybe I have a different vision of end-result then.  
**\<meeting-bot> [EinMByte]** At least for now, I do want design changes in the end  
**\<meeting-bot> [EinMByte]** But I wanted to make it less crappy first, and then make it good  
**\<meeting-bot> [anonimal]** I think I need to get my hands dirty and get more intimate with your new changes.  
**\<meeting-bot> [anonimal]** I understand, as I said in #1 I completely understand and agree.  
**\<meeting-bot> * anonimal** no complaints here  
**\<meeting-bot> [anonimal]** So, long story short, I'd like to get more involved. Any objections EinMByte?  
**\<meeting-bot> [EinMByte]** Of course not, I can use all help  
**\<meeting-bot> * anonimal** could work in another branch, but I think our conflicts result in better code  
**\<meeting-bot> [anonimal]** Ok, I'll comment more in #140, etc. as things progress.  
**\<meeting-bot> [anonimal]** Anything else on 3.?  
**\<meeting-bot> [EinMByte]** Not from me  
**\<meeting-bot> * anonimal** prepares for more pasting  
**\<meeting-bot> [anonimal]** Anyone here have more SSU questions?  
**\<meeting-bot> * anonimal** will work on refining better responses to such questions  
**\<meeting-bot> [fluffypony]** no that's perfect, thanks  
**\<meeting-bot> [anonimal]** Ok, moving on  
**\<meeting-bot> [anonimal]** 4. Discuss commit message labeling, e.g., how to organize first line of commits. Touch-up on C4.  
**\<meeting-bot> [anonimal]** To preface, before discussing commit titles, none of this can really be enforced at the moment because there is no payout hanging over anyone's head.  
**\<meeting-bot> [anonimal]** But our guide does ask to reference applicable ticket numbers in commit bodies - and its incredibly helpful.  
**\<meeting-bot> [anonimal]** I'm trying to be better about doing this and I hope EinMByte would also consider doing this too.  
**\<meeting-bot> [anonimal]** It should be noted that there is no mention in the guide or C4 about commit title.  
**\<meeting-bot> [anonimal]** I've been using a rough system of prepending titles with class or aspect of project worked on.  
**\<meeting-bot> [anonimal]** It does help for quick git-log searches. Again, not enforceable, but it does help IMHO.  
**\<meeting-bot> [anonimal]** Thoughts? Objections to adding to guide?  
**\<meeting-bot> [fluffypony]** can you give me an example of the prepending?  
**\<meeting-bot> [anonimal]** Yes, one moment.  
**\<meeting-bot> [EinMByte]** anonimal: I've noticed that you tend to include a longer summary  
**\<meeting-bot> [anonimal]** fluffypony: Basically what's before the colon https://github.com/EinMByte/kovri/pull/1  
**\<meeting-bot> [EinMByte]** I currently don't do that, but if you think it's worth it, I can start doing that  
**\<meeting-bot> [EinMByte]** Other than that, the main thing should be that it should be reasonably clear what the commit is about  
**\<meeting-bot> [fluffypony]** oh yeah that's cool  
**\<meeting-bot> [EinMByte]** But we all do that already  
**\<meeting-bot> [EinMByte]** I'm fine with stricter rules, just don't shout at me too much when I forget about them :p  
**\<meeting-bot> [fluffypony]** I tend to do short summaries too, but I like the prepending thing  
**\<meeting-bot> [anonimal]** EinMByte: I agree. If I were to ask of anything, it would be to references issues that commit addresses.  
**\<meeting-bot> [anonimal]** Other than that, I personally couldn't ask you to write longer summaries. Honestly, most of what you commit I understand anyway because its well-written IMHO - but that's just me.  
**\<meeting-bot> [anonimal]** So, as usual, I think about everyone else who isn't knee-deep in our mess.  
**\<meeting-bot> [anonimal]** And maybe longer summaries would help?  
**\<meeting-bot> [anonimal]** But 4. for me was more about commit title.  
**\<meeting-bot> [EinMByte]** Ok, I'll try to reference issues more often  
**\<meeting-bot> [fluffypony]** I don't think longer summaries are massively necessary as long as the commits show the route taken to get there, referencing issues is definitely helpful  
**\<meeting-bot> [EinMByte]** (not in the title, though)  
**\<meeting-bot> [anonimal]** Ok. So shall we take a vote on adding 'prepend class or project aspect into title of commit' into contributing guide?  
**\<meeting-bot> [anonimal]** (again, at this time not enforceable - just helpful)  
**\<meeting-bot> [fluffypony]** I'm fine with it  
**\<meeting-bot> [anonimal]** + me = 2 yes. Anyone else?  
**\<meeting-bot> [anonimal]** As fluffypony pointed out long ago, its not like anyone reads contributing guides anyway ;)  
**\<meeting-bot> [fluffypony]** hah hah yeah  
**\<meeting-bot> [EinMByte]** Sure  
**\<meeting-bot> [fluffypony]** but at least it's there and we can encourage it  
**\<meeting-bot> [EinMByte]** ^  
**\<meeting-bot> [anonimal]** Ok, good point on the encouragement.  
**\<meeting-bot> [fluffypony]** hey - we managed to get most Monero contributors to GPG sign commits, so it is doable :)  
**\<meeting-bot> [anonimal]** Great, done.  
**\<meeting-bot> [anonimal]** While we're on 4., this is off-the-cuff,  
**\<meeting-bot> [anonimal]** but bitmonero is working with only 1 branch now.  
**\<meeting-bot> [anonimal]** And, C4 kind of dictates that (IIRC).  
**\<meeting-bot> [anonimal]** So, do we scrap branch development and work solely in master?  
**\<meeting-bot> [fluffypony]** note that we have a use-case for moving back to the dev branch setup, because people just pull and compile  
**\<meeting-bot> [anonimal]** I've also used arguments for two branches. I'm curious to hear EinMByte's opinion.  
**\<meeting-bot> * anonimal** sigh, I2P lag  
**\<meeting-bot> * anonimal** doesn't want to move on yet, running out of time though  
**\<meeting-bot> [EinMByte]** anonimal: Not sure, I think it's good to have a stable branch  
**\<meeting-bot> [EinMByte]** also, it doesn't hurt anyone? (I think)  
**\<meeting-bot> [anonimal]** The argument is to instead warn users that anything that is built outside of a tagged version is... well, unpredictable.  
**\<meeting-bot> [anonimal]** But, since we don't have any releases yet...  
**\<meeting-bot> [EinMByte]** There's "unpredictable" and there's "possibly broken"  
**\<meeting-bot> [EinMByte]** In my opinion those are not really the same  
**\<meeting-bot> [anonimal]** Good point. I imagine though that broken branches would stay in forks and then, when fleshed out, could be sent to 1 branch master.  
**\<meeting-bot> [anonimal]** But then that would require more work maintainer-side.  
**\<meeting-bot> [anonimal]** Ay, too many options.  
**\<meeting-bot> [anonimal]** I vote to keep two branches for now.  
**\<meeting-bot> [anonimal]** Yea or Nay?  
**\<meeting-bot> [EinMByte]** ok, let's keep the branches and move on :)  
**\<meeting-bot> [anonimal]** Ok, moving on.  
**\<meeting-bot> [anonimal]** 5. Review open tickets (assigned and/or unassigned): status, code ideas (if applicable), etc.  
**\<meeting-bot> [anonimal]** My hands have been tied to SSU as we've discussed. I did hack a fix for the massive leak in #191.  
**\<meeting-bot> [anonimal]** It appears to be related to LogPrint and possibly GetFormattedSessionInfo(). I need more time with it and to produce a smoother fix.  
**\<meeting-bot> [anonimal]** But it doesn't address a few smaller leaks related to #191.  
**\<meeting-bot> [anonimal]** So, between now and next meeting, I'm somewhat sure I'll focus on SSU, #191, and getting a windows build in working order.  
**\<meeting-bot> [anonimal]** And in that order.  
**\<meeting-bot> [EinMByte]** Ok  
**\<meeting-bot> [anonimal]** *but* I also may start drafting a FFS proposal for a chunk of that time (I said I would last meeting). We'll see.  
**\<meeting-bot> [fluffypony]** +1, FFS proposals are welcome  
**\<meeting-bot> [anonimal]** EinMByte: do you think you'll be around sometime this coming week or the following week? Or are weekends better?  
**\<meeting-bot> [anonimal]** fluffypony: would you please refresh my memory on the zoho/fastmail decision (my brain is scattered at the moment)?  
**\<meeting-bot> [EinMByte]** I'll be around a few hours a day, but more actively in weekends  
**\<meeting-bot> [fluffypony]** started the process a few days ago, we're doing Zoho  
**\<meeting-bot> [anonimal]** EinMByte: sounds great.  
**\<meeting-bot> [anonimal]** fluffypony: sounds great.  
**\<meeting-bot> [anonimal]** Many great sounds!  
**\<meeting-bot> [fluffypony]** everyone can independently forward their mails to tutanota or i2pmail, or just use the Zoho mailbox  
**\<meeting-bot> [anonimal]** I'm looking forward to zoho's /projects, especially time-management.  
**\<meeting-bot> [anonimal]** Kimai is a horrid *#()*@#)$@#$#@  
**\<meeting-bot> [anonimal]** If anyone has experience using it...  
**\<meeting-bot> [fluffypony]** never heard of it, will take a look  
**\<meeting-bot> [fluffypony]** or not if it's horrible  
**\<meeting-bot> * anonimal** surprised at the lack of free, personal, opensource, time-management/billable hours solutions out there  
**\<meeting-bot> [fluffypony]** MS Project  
**\<meeting-bot> [anonimal]** IMHO you should, it may be humorous.  
**\<meeting-bot> [fluffypony]** :-P  
**\<meeting-bot> [anonimal]** I can't knock their work though, I applaud what they're doing, I just wish I had more time to contribute to their project.  
**\<meeting-bot> [fluffypony]** is it meeting.end time?  
**\<meeting-bot> [anonimal]** Eek, one more thing.  
**\<meeting-bot> * anonimal** one more paste coming  
**\<meeting-bot> [anonimal]** 6. Discuss any pertinent TODO's  
**\<meeting-bot> [anonimal]** In SSU: we're closer to resolving #119 with our new design. I've noted a few spots of missing implementation that I think will be resolved during the refactor.  
**\<meeting-bot> [anonimal]** I had mentioned in the most recent PR my interest in more sanity tests, and EinMByte did note a few overflow checks.  
**\<meeting-bot> [anonimal]** I think we're still discussing design though, so that would come a little later.  
**\<meeting-bot> [anonimal]** Thoughts?  
**\<meeting-bot> [EinMByte]** Yes, we have many places where we need more checks  
**\<meeting-bot> [EinMByte]** at least we won't leak if we throw errors etc due smart pointer usage  
**\<meeting-bot> [EinMByte]** Eventually I want to rely on exception for error handling, and I want to use the error information for peer profiling  
**\<meeting-bot> [anonimal]** Ooooooooooooooo, I like that......  
**\<meeting-bot> [anonimal]** I like that ALOT.  
**\<meeting-bot> [anonimal]** Yes, smart pointers: something the previous project had very little interest in;  
**\<meeting-bot> [anonimal]** despite the standard having been out for years.  
**\<meeting-bot> [anonimal]** Anyway, I won't start bashing as we're out of time (I love a good bashing).  
**\<meeting-bot> [anonimal]** Anything else on 6.?  
**\<meeting-bot> [anonimal]** If not, then 7.?  
**\<meeting-bot> [fluffypony]** nothing else from my side  
**\<meeting-bot> [fluffypony]** next meeting same time, same place, two weeks?  
**\<meeting-bot> [anonimal]** Works for me.  
**\<meeting-bot> [EinMByte]** Should be fine  
**\<meeting-bot> [fluffypony]** sehr gut  
**\<meeting-bot> [zzz]** will we see any kovri ppl at HOPE in 3 weeks?  
**\<meeting-bot> [fluffypony]** zzz: unfortunately not me, need to do no travelling for a little bit  
**\<meeting-bot> [fluffypony]** got too much work to do, lol  
**\<meeting-bot> [EinMByte]** not me either  
**\<meeting-bot> [anonimal]** I had planned late last year but things took a completely different turn so, nope, not this time around.  
**\<meeting-bot> [zzz]** ok, I believe echelon still has a ticket to sell, if anybody needs it  
**\<meeting-bot> [anonimal]** Thanks zzz. That echelon, quite the organizer :)  
**\<meeting-bot> [anonimal]** Anything else? Meeting?  
**\<meeting-bot> [anonimal]** I want to also thank fluffypony and dEBRUYNE and anyone else for their work on getting these logs up on the site.  
**\<meeting-bot> [fluffypony]** it's mostly dEBRUYNE, I just add spaces in at the end  
**\<meeting-bot> [anonimal]** lol, nice.  
**\<meeting-bot> [anonimal]** Ok, thanks everyone for the great meeting.  
**\<meeting-bot> [fluffypony]** thanks everyone  
**\<meeting-bot> [fluffypony]** meeting-bot going offline  
