---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-08-14
summary: Ring CT, hardfork schedule, 0MQ 
tags: [dev diaries, core, crypto, 0mq]
author: dEBRUYNE / fluffypony
---

### Overview 

An overview [can be found on Hello Monero](https://hellomonero.com/article/monero-bi-weekly-dev-meeting-note-highlights-2016-08-14)

### Logs

**\<wallet42>** moneromoo: rewview guidelines?  
**\<moneromooo>** wallet42: well, whatever you feel comfortable with. Do you have anything in mind ?  
**\<i2p-relay> {-anonimal}** Is there a meeting in a few minutes?  
**\<moneromooo>** The most important is potential for exploits.  
**\<moneromooo>** Yes.  
**\<hyc>** awesome  
**\<moneromooo>** Well, assuming the pony isn't too busy with mymonero.  
**\<darkcoinspy>** get your notepads out everyone. time to take notes on the competition  
**\<i2p-relay> {-anonimal}** Which competition?  
**\<moneromooo>** I think he just meant dash is still around. It's another crypto (ex darkcoin).  
**\<dEBRUYNE>** \<moneromooo> Well, assuming the pony isn't too busy with mymonero. <= he was online 20 min ago, fwiw :p  
**\<hyc>** fixing mymonero...  
**\<dEBRUYNE>** :-P  
**\<alex\_\_\_>** what happened to mymonero?  
**\<hyc>** its blockchain got stuck  
**\<alex\_\_\_>** ah ok  
**\<dEBRUYNE>** alex\_\_\_: \<\_Telegram> \<fluffypony> there were like 6 imports running which deadlocked the database  
**\<hyc>** I thought we fixed db\_open to disallow more than 1 process on the DB at a time  
**\<moneromooo>** Might be talking about his sql db I think.  
**\<hyc>** ah  
**\<hyc>** too bad. we've been working on an LMDB backend for mysql/mariadb but not much progress in a long time  
**\<DaveyJones>** isnt there supposed to be a meeting? xD  
**\<JjegrUseinob>** yes  
**\<JjegrUseinob>** waiting on poniex  
**\<JjegrUseinob>** ponies  
**\<hyc>** fluffypony fluffypony fluffypony ?  
**\<JjegrUseinob>** fluffypony may be drinking wine right now  
**\<JjegrUseinob>** have you seen his wine rack?  
**\<i2p-relay> {-anonimal}** Yes, epic.  
**\<JjegrUseinob>** im about to go get a drink myself  
**\<JjegrUseinob>** brb  
**\<hyc>** good idea  
**\<dEBRUYNE>** moneromooo, hyc: perhaps someone else can take the lead until he returns?  
**\<hyc>** if we had an agenda in advance that'd work. I've got no idea what needs to be covered today  
**\<moneromooo>** Well, I have just one thing to say, really: reviewers wanted (even for part of the stuff).  
**\<hyc>** OK, that's a good topic. So there's now a PR for the RingCT code  
**\<hyc>** which means it's presumably functionally complete and ready for heavy testing  
**\<dEBRUYNE>** \<hyc> if we had an agenda in advance that'd work. I've got no idea what needs to be covered today <= let's just discuss Ring CT first and the additional open PRs  
**\<DaveyJones>** paging othe, luigi1111w, luigi1112, othe, tewinget too  
**\<i2p-relay> {-anonimal}** Congratulations to everyone involved on that. Its a big one.  
**\<moneromooo>** Yes. I don't think I've got anything else to add, until luigi finds something else he wants to change.  
**\<DaveyJones>** maybe smooth too  
**\<moneromooo>** But reviewing this isn't going to be wasted anyway, even if he finds something.  
**\<dEBRUYNE>** ^ NoodleDoodle, ArticMine   
**\<DaveyJones>** but the agenda thing would be nice for such incidents  
**\<dEBRUYNE>** moneromooo: Is there a way people can help with testing?  
**\<i2p-relay> {-anonimal}** moneromooo: is there anything in particular that needs attention in terms of review?  
**\<ArticMine>** RingCT is going to need heavy testing and a public testnet would be a great asset for this  
**\<moneromooo>** Well, the private fork branch is out of date now, there'll be a public testnet once there's a modicum of review I expect.  
**\<wallet42>** I would love to setup and pay for a public testnet with a couple nodes  
**\<dEBRUYNE>** Fwiw, there's a guide to setup a private tesnet -> https://moneroexamples.github.io/private-testnet/  
**\<fluffypony>** sorry just got in  
**\<luigi1112>** Sounds good :-)  
**\<fluffypony>** was eating  
**\<moneromooo>** Hay.  
**\<moneromooo>** er, I mean... hey.  
**\<hyc>** LOL  
**\<DaveyJones>** LOL  
**\<dEBRUYNE>** People could apply the RCT PR to the code and test it on their own private testnet  
**\<fluffypony>** ok so  
**\<moneromooo>** It's already based on latest master. I did removed the forking setup though.  
**\<fluffypony>** moneromooo: you mean the PR?  
**\<moneromooo>** Yes.  
**\<moneromooo>** I kinda expect (1) reviews, (2) merge, (3) testnet, (4) any fixes PR'd separately.  
**\<fluffypony>** does the PR have a fork date?  
**\<moneromooo>** No.  
**\<wallet42>** how to activate it?  
**\<dEBRUYNE>** moneromooo: I meant apply as in manually add it because it hasn't been merged yet :-P  
**\<i2p-relay> {-anonimal}** Thanks for the link dEBRUYNE  
**\<moneromooo>** wallet42: it will activate at the right height, once it is cchosen.  
**\<i2p-relay> {-anonimal}** I have to run folks, I'll read the backlog tomorrow.  
**\<moneromooo>** see ya  
**\<fluffypony>** cheers anonimal  
**\<luigi1112>** Yeah it shouldn't have a date  
**\<fluffypony>** moneromooo: I don't understand the "right height" thing, plz explain  
**\<moneromooo>** Entries in the hard fork table in src/blockchain.cpp.  
**\<moneromooo>** (which do not exist yet)  
**\<dEBRUYNE>** I think we should set a height that adds 1-2 months to the height after this process has completed -> **\<moneromooo>** I kinda expect (1) reviews, (2) merge, (3) testnet, (4) any fixes PR'd separately.  
**\<fluffypony>** so as this stands  
**\<fluffypony>** it understands v3 transactions  
**\<dEBRUYNE>** Ring CT is such a big change that I think we could deviate once from the HF schedule  
**\<moneromooo>** Let me explain versions and stuff about this:  
**\<fluffypony>** k  
**\<moneromooo>** Currently, we are on HF 2, and tx version 1 is the only one that exists.  
**\<moneromooo>** At HF 3 (september on mainnet), pretty much nothing changes.  
**\<moneromooo>** At HF 4 (march), rct txes (v2 txes) are allowed. At HF 5 (september in a year), v1 txes are disallowed, except for sweep\_unmixable.  
**\<moneromooo>** Though the last bit (sweep\_unmixable) might be unnecessary, I'm unsure.  
**\<fluffypony>** ok  
**\<hyc>** sounds fine  
**\<moneromooo>** Oh, and at HF 4 (when rct txes are allowed), the coinbase gets in a single out, and is stored as rct, despite not being rct.  
**\<moneromooo>** So they can be spent along with rct fake outs.  
**\<fluffypony>** oh neat  
**\<hyc>** so that also means no quantization then?  
**\<moneromooo>** Yes.  
**\<dEBRUYNE>** "v1 txes are disallowed" -> does that mean everyone needs to move their coins or will a one time transaction be allowed after that?   
**\<moneromooo>** An rct tx may spend pre-rct outputs.  
**\<fluffypony>** dEBRUYNE: nobody needs to move anything yet  
**\<fluffypony>** or ever, really  
**\<hyc>** right, this doesn't affect existing outputs. only newly generated txs  
**\<luigi1112>** The block reward thing is neat if it works :-)  
**\<JjegrUseinob>** so what will september HF do then?  
**\<dEBRUYNE>** fluffypony, hyc: thanks, was asking for clarification   
**\<moneromooo>** It does. Was a pita due to breaking the tests, but it all works now :D  
**\<fluffypony>** JjegrUseinob: roll over to stick to the schedule, include the next HF date so that nodes notify  
**\<fluffypony>** and also include all the fixes to-date  
**\<luigi1112>** Quantize the reward afaik  
**\<moneromooo>** September fork just enforces the coinbase to be split into denominations.  
**\<luigi1112>** (Does someone know the state of pools?)  
**\<fluffypony>** moneromooo: are we going to point release with the rct PR merged or before then?  
**\<ArticMine>** Does the September HF force min 4 mixin?  
**\<hyc>** and that's not a significant brhavior change, right? it was always supposed to be split  
**\<moneromooo>** It was suppose dto, but not enforced.  
**\<luigi1112>** Rct doesn't really make a difference..it's just dead code until activated  
**\<luigi1112>** So the question is are there still offending pools that need to update  
**\<moneromooo>** I'm mostly bothered about having this huge chunk of stuff that creats conflicts with evreything now.  
**\<fluffypony>** luigi1112: guaranteed that MinerGate is still using their custom stuff and just fudging the version  
**\<hyc>** you're talking source code merge conflicts?  
**\<hyc>** or something else moneromooo?  
**\<moneromooo>** Like, my cold wallet tx patch is now based on rct code.  
**\<moneromooo>** Yes, git conflicts.  
**\<fluffypony>** I don't have a problem with RCT being merged before the point release  
**\<luigi1112>** fluffypony: that's fine :-) anyone else  
**\<dEBRUYNE>** \<luigi1112> (Does someone know the state of pools?) <= I can check headers  
**\<fluffypony>** tewinget: what's the status on 0MQ?  
**\<luigi1112>** I guess minor version and the block reward are good things to check  
**\<fluffypony>** maybe we should push for that in the point release if it's nearly done  
**\<luigi1112>** (Being denominated)  
**\<dEBRUYNE>** Btw fluffypony, in case tewinget isn't here  
**\<luigi1112>** Th at can probably be done in the interim between Sept and march?  
**\<dEBRUYNE>** This is from the logs:  
**\<dEBRUYNE>** **\<tewinget>** I'm a few hours of work (I hope) away from having the wallet using zmq to talk to the daemon  
**\<moneromooo>** He said he was starting work on getting the wallet to talk 0MQ yesterday (he'd been using python client with the daemon).  
**\<fluffypony>** ok  
**\<dEBRUYNE>** luigi1112: minor\_version should be 3 right?  
**\<hyc>** yes, tewinget was asking for reviews of his branch too  
**\<moneromooo>** I guess I should go look ^\_^  
**\<dEBRUYNE>** anyway, minergate is on "major\_version":2,"minor\_version":3  
**\<dEBRUYNE>** For anyone interested, the 0MQ branch can be found here -> https://github.com/tewinget/bitmonero/tree/zmq-dev  
**\<dEBRUYNE>** moneromooo, fluffypony, luigi1112: This is Minergate's coinbase transaction -> http://moneroblocks.info/tx/8a6f45c079da5e400632c29e6b8145fda593a44657881d6d91b232769511c8fc  
**\<fluffypony>** ok  
**\<dEBRUYNE>** Are there any additional meeting items?  
**\<hyc>** quick update on 32-bit support - my blockchain\_import is still running :P  
**\<fluffypony>** lol  
**\<luigi1112>** dEBRUYNE: what about other pools?  
**\<dEBRUYNE>** lemme check  
**\<fluffypony>** re: the RCT PR, I think we should aim to finish up review and merge by next weekend - any objection, moneromooo ?  
**\<moneromooo>** That'd be pretty fast.  
**\<moneromooo>** If you can find enough reviewers by then :)  
**\<fluffypony>** there will be more review post that  
**\<fluffypony>** oh btw moneromooo  
**\<fluffypony>** what are your thoughts on the testnet fork dates?  
**\<moneromooo>** I should add: along with the rct stuff, that branch has random fixes that would otherwise conflict: better output selection, no signatures stored in wallet, fixes to avoid having to run rescan\_spent (I think I got them all).  
**\<moneromooo>** I think a few days after all preliminary review + fixes are done. Then 1 day between 3 and 4, and a few days between 4 and 5 (where both tx versions are allowed).  
**\<hyc>** moneromooo: as long as those are each in their own commits, we can still tick them off 1 by 1  
**\<moneromooo>** They are, yes.  
**\<fluffypony>** moneromooo: so then once merged, say next weekend, we can PR testnet fork points  
**\<moneromooo>** Yes.  
**\<JjegrUseinob>** i never saw clear answer to artic mine question about when min mixin of 4 will be enforced  
**\<moneromooo>** No change there for now, but there should be.  
**\<hyc>** can we do it this Sept HF?  
**\<JjegrUseinob>** thank you moo and hyc. your hard work is appreciated  
**\<dEBRUYNE>** luigi1112: All pools listed here -> https://monerohash.com/#network have "major\_version":2,"minor\_version":3  
**\<fluffypony>** ok  
**\<fluffypony>** I think that's about it then - code review time  
**\<moneromooo>** \<hyc> can we do it this Sept HF?  
**\<moneromooo>** (about bumping the network minimum mixin)  
**\<hyc>** right  
**\<DaveyJones>** so is there a way some chosen folks can put items into an agenda for dev-meeting... just in case fluffy or anyone else dont have time to lead the meeting  
**\<moneromooo>** You can always ask something dev related if you wish.  
**\<DaveyJones>** so people like debruyne could atleast try to take the host  
**\<moneromooo>** It doesn't need to be made known in advance (unless it requires  research)  
**\<hyc>** mebbe propose agenda items on forum.getmonero.org or something  
**\<ArticMine>** Having an agenda ahead of time can be helpful. It does not need to be cast in stone.  
**\<JjegrUseinob>** anonimal usually has kovri meeting agenda in advance. i like that system  
**\<DaveyJones>** i mean this was the first real dev meeting for a month or sth and even today we had a eating hiccup :p  
**\<JjegrUseinob>** when will log from last meeting be on the website?  
**\<fluffypony>** lol DaveyJones  
**\<fluffypony>** JjegrUseinob: sometime next week, once dEBRUYNE has a chance  
**\<JjegrUseinob>** https://getmonero.org/blog/tags/dev%20diaries  
**\<JjegrUseinob>** i said last meeting  
**\<JjegrUseinob>** pr was merged already  
**\<JjegrUseinob>** https://github.com/monero-project/monero-site/pull/135  
* hellocccc has quit (Ping timeout: 264 seconds)  
**\<fluffypony>** JjegrUseinob: there are issues that have to be fixed  
**\<fluffypony>** eg.  
* fluffypony Missing key: menu.stackexchange  
* fluffypony Liquid Exception: exit in \_layouts/default.html  
**\<fluffypony>** so I've got to fix those first  
**\<dEBRUYNE>** \<fluffypony> JjegrUseinob: sometime next week, once dEBRUYNE has a chance <= I'll PR the logs tomorrow  
**\<fluffypony>** planning on doing it tonight  
**\<dEBRUYNE>** (today's)  
**\<JjegrUseinob>** ok ty  
**\<dEBRUYNE>** Anyway, perhaps we should put a bit of thought into whether we want to activate Ring CT in march (and thus on a scheduled date) or activate earlier on a "random" date  
**\<hyc>** not sure there's a reason to break the schedule  
**\<hyc>**  ?  
**\<JjegrUseinob>** competition from zcash seems like a good reason IF rct is ready to activate and tested enough  
**\<moneromooo>** I just realized it reads like Z(ooko)Cash.  
**\<DaveyJones>** that was intented i guess :p  
**\<ArticMine>** I am with staying on schedule with RingCT in March.  
**\<luigi1112>** I think rushing because "competition" is I'll advised here  
**\<luigi1112>** Ill  
**\<grimpants>** yes  
**\<hyc>** agreed  
**\<ArticMine>** Very ill advised  
**\<moneromooo>** The thing I'd move if we could is the september one, to a bit later, but that might break non-updaters...  
**\<moneromooo>** As we need to have a binary a couple weeks before, in order for most to update in time.  
**\<luigi1112>** I don't think we should enforce mix 4 here since it's not in existing code  
**\<dEBRUYNE>** It's good to hear thoughts from everyone on this subject  
**\<luigi1112>** It'd be a rush release  
**\<ArticMine>** Then min mix 4 is scheduled for March?  
**\<DaveyJones>** question is ... are non updaters an issue atm? i mean we are still small and in a small community people should be able to update once in 6 months ?  
**\<luigi1112>** Mix 4 goes well with rct  
**\<luigi1112>** I'm not sure it needs to be enforced until v1 is disallowed  
**\<ArticMine>** So let us make it for march  
**\<luigi1112>** That's not till 1 year from now by current rhoughts  
**\<moneromooo>** That'd be september, for v1 to be disallowed.  
**\<gingeropolous>** someone mentioned that moving the HF date up would, in general, be good for those that need truly private currency. But I also see the benefit of sticking to schedule  
**\<moneromooo>** Well, stuff like the new coin selection will be active as soon as it's merged, since it's wallet behavior. So there'll be some betterment already.  
**\<moneromooo>** And transfer maps to transfer\_new, too. So no more shitty dust for multi-tx.  
**\<gingeropolous>** i wanted to try and get into that code for the "find set that matches" behavior... someday.  
**\<JjegrUseinob>** why cant we point release those improvements soon then and have ringct fork late oct or nov?  
**\<JjegrUseinob>** for march enforcement  
**\<moneromooo>** It's a difficult problem to find the best set.  
**\<nioc>** It had been mentioned previously that in the early stages the HF schedule could be adjusted considering the important changes that need to be implemented.  
**\<moneromooo>** I don't think it's particularly important to keep to the march date, since I doubt many people will bang on testnet once a new release is out, so it'd just wait there.  
**\<moneromooo>** I mean, more time would not mean more testing.  
**\<gingeropolous>** \<JjegrUseinob> why cant we point release those improvements soon then and have ringct fork late oct or nov? - well, the arguments against this is that we're setting precedent for non-scheduled, at-whim, as-needed forking, and if we're trying to create a culture of "forking is ok", then the schedule has a particular... weight to it, perhaps  
**\<hyc>** hardforks good, more is better :P  
**\<JjegrUseinob>** i thought that monero had a social contract that largely supported flexibility this year for rct fork  
**\<gingeropolous>** but im on the fence as well... I still think we're small enough of a thing that we could pull it off  
**\<dEBRUYNE>** It was discussed before that if we would deviate from the schedule, we would only deviate once for RCT  
**\<fluffypony>** Monero Classic is going to have weekly hard forks  
**\<moneromooo>** Yes. Hardforks every two months, maybe many of them not actiually changing anything... would allow easy scheduling of changes without havinhg to wait forecer.  
**\<fluffypony>** :-P  
**\<fluffypony>** JjegrUseinob is right though  
**\<gingeropolous>** autoupdate all the things. moo's favorite  
**\<fluffypony>** we did say that we might adjust them at the beginning, and that we'd taper down to annual hard forks (or further apart) later on  
**\<DaveyJones>** can we have replay attacks too? for classic  
**\<fluffypony>** so if testnet is successful and everything is fine we can consider moving itup  
**\<fluffypony>** \*it up  
**\<JjegrUseinob>** :  
**\<JjegrUseinob>** :)  
**\<hyc>** ok, that sounds fine. when we're happy with the code integrity and test phase  
**\<gingeropolous>** im down with that. Fork early, fork often  
**\<moneromooo>** And bump mixin at this one ? Or the one after it ?  
**\<DaveyJones>** monero is a flexible adolescent... we will stiffen by time :p  
**\<dEBRUYNE>** \<fluffypony> so if testnet is successful and everything is fine we can consider moving itup <= I'd be fine with that too  
**\<dEBRUYNE>** let's make sure miners have enough time to update and receive notification  
**\<fluffypony>** moneromooo: bump mixin at Sept hardfork  
**\<dEBRUYNE>** so 1-2 months after the full "process"  
**\<fluffypony>** mixin will bump anyway for rct right  
**\<moneromooo>** So HF 5 ? Which might not be september if we being march forward.  
**\<moneromooo>** Min mixin was not touched in the rct banch.  
**\<fluffypony>** oh  
**\<fluffypony>** we're going to have to bump it for definite  
**\<luigi1112>** Don't bumb for September imo  
**\<luigi1112>** Bump  
**\<luigi1112>** It's too soon  
**\<hyc>** I suppose it ought to run on testnet first  
**\<moneromooo>** So 4, in HF 4 (with rct enable) ?  
**\<luigi1112>** This september  
**\<luigi1112>** I vote for next September but I'm somewhat ambivalent vs march  
**\<ArticMine>** Is there a reason for Sept 2017 vs March 2017 for enforcing mixin 4?  
**\<luigi1112>** Yes, it is better with ringct  
**\<luigi1112>** Which will be enforced then  
**\<moneromooo>** Oh, and the size increase as a function of mixin is rather shallow. So we can go wild.  
**\<hyc>** it seems to me min mixin 4 is a good thing regardless of rct. why wait  
**\<luigi1112>** It adds forced "junk data" for 6 months...but not a large deal most likely  
**\<moneromooo>** It's not junk, it's lovely privacy preserving data :P  
**\<moneromooo>** Or we can do 3 in march, 4 in september :)  
**\<ArticMine>** So an additional TX size issue for six months that is solved with RingCT  
**\<moneromooo>** rct txes will be larger.  
**\<moneromooo>** About 13 kB I think. A lot more constant than current.  
**\<ArticMine>** But there is a tradeoff in the need to mix the inputs broken down in powers of 10  
**\<moneromooo>** Ah, you mean to get a "privacy equivalence" ?  
**\<ArticMine>** Yes  
**\<moneromooo>** The new coin selection should help there too I think.  
**\<hyc>** we should be winding up and letting the kovri mtg start  
**\<hyc>** do we have any decisions on bumping mixin?  
**\<moneromooo>** anonimal left, no kovri meeting.  
**\<hyc>** ok  
**\<moneromooo>** I guess I'll do mixin 4 for HF 5 then, unless new stuff gets said.  
**\<ArticMine>** Sounds fine to me  
**\<hyc>** ok  
**\<moneromooo>** As an incentive for reviewers to review, my cold wallet signing patch is now based on the ringct branch, so it can't be merged without rct being merged first ^\_^  
**\<JjegrUseinob>** cold wallet signing patch will be a great feature. thanks mooooo  
**\<fluffypony>** ok I fixed the stuff that was breaking on the site  
**\<tewinget>** fluffypony: what dEBRUYNE said.  
**\<tewinget>** I totally forgot there was a dev meeting and slept right through it, woops.  
**\<moneromooo>** You can still tell us how far you are, most people are still in the channel :)  
**\<othe>** better than me, i thought i am in this channel...but i wasn´t  
**\<tewinget>** Well, there's 5-10 daemon RPC commands yet to implement, but I'm leaving them for now because they're mining/miner related.  Next thing to do (hopefully yet today) is some first pass at "libdaemonrpc" and making the wallet use it.  
**\<othe>** does ur todo list include authentication too? the current way is kinda bah  
**\<tewinget>** othe: yes, but that will be something to look at after the rest is sorted, I think.  
**\<othe>** good  
**\<moneromooo>** Oh, that reminds me.  
**\<moneromooo>** The previous 0mq branch had something called net\_skeleton, which was doing some middle layer ntworking stuff, but was GPL so needed replacing.  
**\<moneromooo>** Have you found a replacement ? Kovri uses cpp-netlib, and I was thinking using the same would be good if it fits, since more people would know, etc.  
**\<tewinget>** I'm just using zmq...  
**\<tewinget>** idk what he (oranjuice, I think?) was using net\_skeleton for.  
**\<moneromooo>** Yes, that was him/her. And I dunno either :)  
**\<othe>** i only know that theirs a license issue with that anyway  
**\<othe>** nvm...  
**\<othe>** didnt we want to replace epee with net skeleton?  
**\<tewinget>** othe: good question, to which I haven't an answer.  
**\<gingeropolous>** be sweet to get a graphical version of whatever was decided re: HF and rule versions today  
**\<gingeropolous>** i.e., timeline  
**\<gingeropolous>** cause again, the lack of harmony with all these version numbers is confusing  
**\<fluffypony>** oh  
**\<fluffypony>** tewinget / moneromooo  
**\<fluffypony>** net\_skeleton had nothing to do with 0MQ  
**\<fluffypony>** once 0MQ is in we still have to offer a JSON RPC API, right  
**\<fluffypony>** and that has to be able to provide TLS and simple auth  
**\<tewinget>** \<fluffypony> once 0MQ is in we still have to offer a JSON RPC API, right  <-- err...about that  
**\<fluffypony>** so we'd have a new helper app for JSON RPC API  
**\<fluffypony>** tewinget: it's in the spec  
**\<tewinget>** the zmq implementation thus far \*is* a json rpc  
**\<fluffypony>** no  
**\<fluffypony>** JSON RPC API is a standard  
**\<tewinget>** oh, right, that  
**\<fluffypony>** http://json-rpc.org  
**\<tewinget>** I mean, I've got it nearly identical to that standard, so it wouldn't take much doing to change it to exactly that  
**\<fluffypony>** you're just serialising data in JSON  
**\<tewinget>**     test\_str = {  
**\<tewinget>**         "request": "get\_blocks\_fast",  
**\<tewinget>**         "version": 1,  
**\<tewinget>**         "message": {  
**\<tewinget>**             "block\_ids": ["418015bb9ae982a1975da7d79277c2705727a56894ba0fb246adaabb1f4632e3"],  
**\<tewinget>**             "start\_height": 10  
**\<fluffypony>** the HTTP-based JSON RPC API is familiar to integrators  
**\<tewinget>**         }  
**\<tewinget>**     }  
**\<tewinget>** that's pretty close to the standard  
**\<fluffypony>** so we have to provide that layer  
**\<tewinget>** I'll just have to change it a little  
**\<tewinget>** oh, you mean http-based  
**\<fluffypony>** yes  
**\<fluffypony>** that's what net\_skeleton was doing  
**\<tewinget>** which spec do you mean, 1.0 or 2.0?  
**\<tewinget>** because 1.0 mentions HTTP, but doesn't specify that it's necessary as part of the spec, if I'm reading it correctly.  :P  
**\<tewinget>** that said, HTTP makes sense I suppose, just will take a bit of doing.  
**\<fluffypony>** it's transport agnostic, but every single client library supports HTTP and no other transports, lol  
**\<fluffypony>** ok but back up a second  
**\<fluffypony>** don't go running ahead and changing things just yet  
**\<tewinget>** wasn't planning to  
**\<fluffypony>** if I'm a client application talking 0MQ to the daemon I need to have some optional authentication, which 0MQ provides support for  
**\<fluffypony>** I'd only use that if I'm talking remotely to the daemon  
**\<tewinget>** with you so far  
**\<fluffypony>** same goes for encryption - not necessary on localhost  
**\<fluffypony>** so then we have this little stub applications, let's call them monero-rpc-daemon and monero-rpc-wallet  
**\<fluffypony>** they have an HTTP server  
**\<fluffypony>** and they talk 0MQ to the daemon  
**\<tewinget>** even that's slightly overcomplicated I think  
**\<tewinget>** just monero-rpc-http as one binary  
**\<fluffypony>** yeah that's fine too - as long as wallet-ing is optional  
**\<tewinget>** launch it with the correct bind ports and forward ports and it doesn't have to know which type of rpc daemon it's talking to  
**\<tewinget>** same binary would work for both wallet rpc and daemon rpc (and others if ever there are any)  
**\<fluffypony>** it can't be a dumb client though  
**\<tewinget>** right, it'll have to have auth parameters as well  
**\<fluffypony>** otherwise you're going dumb client -> rpc-wallet -> daemon  
**\<fluffypony>** three binaries  
**\<fluffypony>** ie. it has to have local wallet functionality  
**\<fluffypony>** that talks to a daemon over 0MQ  
**\<fluffypony>** ie. simplewallet gets separated out into cli-wallet and rpc-wallet  
**\<fluffypony>** both of which use 0MQ to communicate with the daemon  
**\<fluffypony>** and rpc-wallet can provide both HTTP and 0MQ interfaces, at a later stage, but definitely HTTP initially  
**\<tewinget>** so you're saying you want to wrap http-speaking into the rpc-wallet binary?  
**\<fluffypony>** simplewallet already talks HTTP  
**\<fluffypony>** when you put it in RPC mode, I mean  
**\<tewinget>** doesn't the daemon already do so as well with the current RPC?  
**\<fluffypony>** yes - and we have to support that also to be backwards compatible, but that's another story  
**\<tewinget>** you might hate this idea, but bear with me.  I was thinking for backwards-compatibility to just leave the old RPC in place until it's completely deprecated, probably with a compile flag that disables compiling it in by default.  
**\<tewinget>** not the cleanest solution, granted, but seems pragmatic imo  
**\<fluffypony>** I do hate that idea, purely because I want to rip that code out :-P  
**\<tewinget>** so what I was thinking is to have the zmq rpc for whatever binary needs it (wallet, daemon, etc) and then have an optional transparent bridge for http (possibly less transparent if using SSL over http is desired)  
**\<tewinget>** but having said bridge layer live inside the {daemon,wallet,etc} binary is okay too, I suppose.  
**\<fluffypony>** so what happens if I'm a well-designed exchange, and I have the daemon on a different machine to the wallet  
**\<fluffypony>** and I want to talk HTTPS to the wallet  
**\<tewinget>** HTTPS request -> wallet -> daemon?  I'm not sure I understand why you ask.  
**\<fluffypony>** yes precisely  
**\<tewinget>** or with the bridge as a separate binary, HTTPS request -> bridge -> wallet -> daemon  
**\<fluffypony>** the daemon is exposed to the Internet  
**\<fluffypony>** it can be attacked  
**\<fluffypony>** the wallet is sensitive, so it lives behind the DMZ  
**\<tewinget>** okay...  
**\<fluffypony>** your second one solves the case as long as I'm happy starting up a bunch of things  
**\<fluffypony>** also you'd need rpc-wallet to provide a 0MQ interface  
**\<fluffypony>** and then bridge -> wallet talks 0MQ  
**\<tewinget>** I intend for it to.  
**\<tewinget>** why would the wallet libs *not* have a 0mq interface?  Need that anyway for GUIs and shit, right?  
**\<tewinget>** err...nvm, dumb question  
**\<fluffypony>** 0MQ client != 0MQ interface  
**\<tewinget>** yea, I was thinking the wallet would run and a GUI would connect to it via 0mq, but the GUI can just use libwallet directly.  
**\<fluffypony>** yes  
**\<tewinget>** that having been said, at some point off in the future I might look into using 0mq's intra-process stuff for message passing.  
**\<tewinget>** but that's a long time in the future  
**\<fluffypony>** yeah  
**\<tewinget>** so from a code reuse standpoint, to me it makes more sense to have a bridge binary that speaks HTTP(S) and 0mq, and to have both wallet and daemon speak 0mq.  
**\<fluffypony>** yeah agreed  
**\<tewinget>** hmm...even that's not necessarily true, it wouldn't be too bad to have both speak both.  
**\<tewinget>** or rather have the wallet *just* speak http(s) to the wild, and use libdaemonrpc or w/e to speak 0mq to the daemon  
**\<tewinget>** all of the message system I've written for the 0mq so far is transport-agnostic, so that's the good news :)  
**\<tewinget>** (as it should be, but I'm just pointing it out for the sake of...well, having pointed it out, I guess)  
**\<tewinget>** fluffypony: for what it's worth, libwallet will need to have the same type of messaging system as I've implemented in the daemon, and the zmq-specific stuff is tiny, so if we do decide we do want the wallet to speak 0mq it should be a (relatively) trivial change in the end.  
**\<fluffypony>** kk  
