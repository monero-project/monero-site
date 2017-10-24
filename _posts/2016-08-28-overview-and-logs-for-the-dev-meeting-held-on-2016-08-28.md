---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-08-28
summary: Trezor and other hardware wallets for Monero, brief update on 0MQ and the official GUI, hardfork schedule
tags: [dev diaries, core, crypto, 0mq]
author: dEBRUYNE / fluffypony
---

### Overview 

An overview [can be found on Hello Monero](https://hellomonero.com/article/monero-bi-weekly-dev-meeting-note-highlights-2016-08-28)

### Logs

**\<hyc>** ding ding ding  
**\<fluffypony>** hello meeting-bot!  
**\<meeting-bot> [fluffypony]** hello from the other side!  
**\<fluffypony>** ok we're on  
**\<fluffypony>** ArticMine / luigi1111w / othe / smooth / hyc / moneromooo / tewinget / redfish / NoodleDoodle / anyoen I forgot  
**\<moneromooo>** There's an article about fraud in crypto on the bytecoin blog. Chutzpah, got to admit.  
**\<fluffypony>** welcome to the annual "Devs who Drink whilst Developing" meeting  
**\<fluffypony>** moneromooo: brave of them  
**\<hyc>** lol. I'm on cider today  
**\<fluffypony>** ok so  
**\<fluffypony>** in today's news  
**\<fluffypony>** nothing happened with the Monero price  
**\<fluffypony>** and so we focus on dev  
**\<hyc>** lol  
**\<fluffypony>** let's start with a quick check of open PRs  
**\<fluffypony>** except for RingCT which we'll get to  
**\<fluffypony>** redfish: how goes the CMake stuff?  
**\<NoodleDoodle>** I alive today.  
**\<moneromooo>** hey :)  
**\<fluffypony>** and a warm welcome to our special guest, NoodleDoodle  
**\<fluffypony>** :-P  
**\<fluffypony>** whilst we wait for the redfishes  
**\<fluffypony>** NoodleDoodle: do you want to talk about Trezor at all?  
**\<fluffypony>** ok good chat  
**\<hyc>** heh  
**\<fluffypony>** :-P  
**\<NoodleDoodle>** Sure :P  
**\<fluffypony>** yay, take it away  
**\<hyc>** redfish doesn't appear to be answering either  
**\<NoodleDoodle>** I'm about 1296 behind in commits. Rebasing is pretty much out of the question. Have to manually merge then release.  
**\<fluffypony>** NoodleDoodle: do you want any help with that?  
**\<NoodleDoodle>** The trezor firmware itself should be easier, except it's split into 5 or 6 repos  
**\<fluffypony>** ok cool  
**\<NoodleDoodle>** I should be able to do it.  
**\<fluffypony>** NoodleDoodle: do you want us to host it on the monero-project Github in its own repo, obvs giving you collab access, to make it more "formal" and part of the core project?  
**\<tewinget>** late, but here  
**\<NoodleDoodle>** Sure, anything. I actually started on keepkey awhile back as well, although it's not as complete as trezor.  
**\<fluffypony>** ok cool  
**\<fluffypony>** I've been fiddling with Ledger Blue, as I have the Blue and the Nano S  
**\<fluffypony>** I have a feeling they'll be a cinch after Trezor / Keepkey  
**\<fluffypony>** and, hopefully, we can PR it in to be part of the default firmware on these devices  
**\<fluffypony>** if they'll have us  
**\<fluffypony>** ok so next up  
**\<fluffypony>** hyc has a small PR to ease up our LMDB speed after you're caught up with the network  
**\<fluffypony>** which should lead to an even more robust blockchain DB, not that I've had anything resembling a corruption in ages  
**\<fluffypony>** and I kill daemons like I'm playing Doom  
**\<fluffypony>** tewinget, would you like to update us on 0MQ plx?  
**\<tewinget>** sure  
**\<tewinget>** so far, all of the daemon RPC calls pertaining to the wallet are good to go, as well as several others  
**\<tewinget>** the wallet is good to go for using the new daemon rpc library  
**\<tewinget>** oh, the new daemon rpc has a library, rather than just calling out to networking things directly.  >\*\*\_>\*\*  
**\<tewinget>** (I only got ~1 hr sleep, minor rambling will happen)  
**\<fluffypony>** tewinget: do you think it's PR-able now, and then subsequent updates to follow, or is it still too fast-and-loose to be used in "production"?  
**\<tewinget>** let's see...next things I need to do are basically polish: make command line flags / parametrize port bind options, and so on.  Documentation (both code and RPC spec)  
**\<tewinget>** well, as of right now because of how cryptocurrencies work, if it cocks up it'll just...fail?  As in, not in a destructive, send all coins to the void way, but in a boring "the tx failed to go to the daemon" or w/e way  
**\<tewinget>** that said, I should probably put a bit more time into polish with command line flags and such first, as it currently has hard-coded binding and so on, and I need to doc the API  
**\<fluffypony>** ok because that brings us on to the next topic  
**\<hyc>** the PR I've submitted actually only changes the default db mode at startup. we didn't quite figure out how to adjust it after sync finished  
**\<tewinget>** afaik (as in, if I've done it right) it's JSON-RPC compliant as well, apart from the http layer  
**\<fluffypony>** and tewinget maybe you can think about it in this context  
**\<fluffypony>** the RingCT PR is now post-review, at least by me, with multiple others having reviewed parts of it  
**\<fluffypony>** so it's merge time  
**\<fluffypony>** we haven't set fork heights yet  
**\<moneromooo>** Wait till I signed commits first.  
**\<fluffypony>** moneromooo: yes  
**\<fluffypony>** but basically the idea is to run through the testnet forks next week  
**\<fluffypony>** which means testnet will do the equivalent of September *and* March 2017 forks  
**\<fluffypony>** in one week  
**\<fluffypony>** testnet will then have RingCT live  
**\<fluffypony>** and we'll be able to focus on efficiency improvements, further testing, and so on  
**\<fluffypony>** in the meantime, it will let us code freeze sometime into September  
**\<fluffypony>** a little later than we'd have liked, but a necessity to get RingCT in to this freeze instead of only in March  
**\<fluffypony>** now here's the nice thing  
**\<fluffypony>** old daemons only know about the fork in September, and will only start nagging about that one  
**\<fluffypony>** so we can set the subsequent fork to something earlier than March  
**\<fluffypony>** but we'd have to make that decision by the next dev meeting pretty much at the latest  
**\<fluffypony>** which means  
**\<fluffypony>** next week Tue / Wed or so we'll push out binaries for 0.10-beta  
**\<fluffypony>** 0.10 will be called Wolfram Warptangent, in honour of the Monero contributor that passed away  
**\<tewinget>** well the 6-month window is a "no earlier than", but at the same time since it's basically just miners doing the voting, idk how doing it earlier pans out.  
**\* tewinget** approves the name.  
**\<ArticMine>** Does that include the GUI?  
**\<fluffypony>** ArticMine: no, this is core only  
**\<tewinget>** ArticMine: We can tag a release with GUI at any time, no forking and such  
**\<tewinget>** same with ZMQ  
**\<fluffypony>** but it includes the GUI lib changes that are needed  
**\<fluffypony>** so anyone compiling the GUI will have working beta bins to play with  
**\<fluffypony>** so I'd please like commitments from as many people as possible to participate in testnet next week  
**\* moneromooo** commits fluffypony   
**\<fluffypony>** lol  
**\* tewinget** rejects the unsigned commit  
**\* iDunk** sees travis ci build fail  
**\<fluffypony>** git commit -S -am "loony bin"  
**\<moneromooo>** OK. I'll put in a Pedersen commitment to... something.  
**\<moneromooo>** When do we set the forks then ?  
**\<tewinget>** at dinner?  
**\* fluffypony** giggles  
**\<moneromooo>** For v3, ok. v4 (rct) on monday lunchtime.  
**\<fluffypony>** moneromooo: for testnet?  
**\<moneromooo>** Obviously :P  
**\<moneromooo>** And v5 (rct only) on tuesday.  
**\<fluffypony>** you mean Monday tomorrow, or Monday next week?  
**\<moneromooo>** Fine ?  
**\<moneromooo>** Tomorrow.  
**\<fluffypony>** hmmm  
**\<moneromooo>** Too fast ?  
**\<fluffypony>** yes actually good idea - the actual fork process has been tested on private testnet, and in the previous fork  
**\<fluffypony>** so we push bins out after the fork  
**\<fluffypony>** then people can play without needing to fiddle  
**\<gingeropolous>** and this is still a no-vote fork?  
**\<moneromooo>** Yes. Screw votes, they were coded by an idiot.  
**\<fluffypony>** LOL!  
**\<fluffypony>** gingeropolous: yeah - we can re-address that in the next 6-12 months, but at the moment it's move-it-or-lose-it  
**\<gingeropolous>** yeah absolutely  
**\<fluffypony>** also the schedule is pretty widely known, except for ShapeShift who we'll email and then they'll claim they have no knowledge of the update  
**\<tewinget>** gingeropolous: plus it's technically never a no-vote fork, as if the miners get pissed off and don't want it, well, they just won't.  >\*\*\_>\*\*  
**\<gingeropolous>** lol fluffypony  
**\<fluffypony>** ok so moneromooo, your fork points are fine  
**\<moneromooo>** So will you merge the PR then build off that, or build off my branch ?  
**\<moneromooo>** (for the test builds)  
**\<fluffypony>** no, merge  
**\<moneromooo>** OK  
**\<fluffypony>** people must be able to build head on their boxes if they want  
**\<moneromooo>** (oh, the supreme importance of punctuation)  
**\* gingeropolous** hides  
**\<fluffypony>** lol  
**\<fluffypony>** ok  
**\<fluffypony>** I think that's it from my side  
**\<fluffypony>** does anyone have any questions or thoughts or anything?  
**\<gingeropolous>** im still not super clear on the fork schedule.... but it could be sleep dep  
**\<gingeropolous>** for mainnet  
**\<fluffypony>** for mainnet it's still the September v3 fork, as expected  
**\<fluffypony>** if we want we can have the v4 and v5 forks at any point after that, even though March would be the "expected" date  
**\<hyc>** iDunk: build log shows no errors, just too slow to build  
**\<tewinget>** I have a few questions, but I'll wait for others' for a few minutes first.  
**\<hyc>** testnet sched sounds good  
**\<hyc>** 0.10-beta sounds fine  
**\<iDunk>** hyc: was a joke  
**\<hyc>** iDunk: but it's unfortunately true :P  
**\<fluffypony>** so even though we wouldn't normally push a fork forward, we have to consider the influx of new users, and maybe we feel that the added privacy is essential enough to do v4 end of Oct, v5 in Dec  
**\<fluffypony>** something like that  
**\<gingeropolous>** gotcha.  
**\<fluffypony>** so we start 2017 with RingCT as the only way to transact  
**\<gingeropolous>** is there a place where the fork plan /etc is laid out?  
**\<gingeropolous>** maybe the readme of the github is a good home  
**\<fluffypony>** gingeropolous: this one, or generally?  
**\<gingeropolous>** generally  
**\<gingeropolous>** and this one  
**\<fluffypony>** generally, the Monero Forum post + all other posts that talk about the mandatory hard forks  
**\<tewinget>** gingeropolous: plans are probably in /usr/share/doc, not in /etc  
**\<fluffypony>** I agree that the Readme shoudl include it  
**\<hyc>** seems to me like we have a lot of profiling and tuning to do before ringCT will play for real  
**\<hyc>** october might be too soon  
**\<gingeropolous>** its gonna be a helluva fall  
**\<fluffypony>** this one is dev meeting specific, we'll have a summary post after that and solicit feedback from the non-dev community  
**\<fluffypony>** hyc: we do have new contributors, so we might be able to get through the tuning stuff faster  
**\<hyc>** cool  
**\<fluffypony>** I'm no fan of pushing it too hard, because it means I have to get MyMonero working with RingCT, but it's doable  
**\<gingeropolous>** yeah, I know there's the forum posts.. but considering fork early, fork often is kind of our thing, it should / could be ... more prominent  
**\<gingeropolous>** ah screw it. time to by moneroforks.whatever  
**\<fluffypony>** gingeropolous: do you want to PR a change to the readme?  
**\<fluffypony>** it'll take you from troll-dev status to readme-dev  
**\<fluffypony>** :-P  
**\<gingeropolous>** :)  
**\<fluffypony>** ok tewinget  
**\<fluffypony>** before we run out of time  
**\<fluffypony>** ask away  
**\<tewinget>** ok  
**\<tewinget>** so for one thing, I haven't seen a GUI progress update today, figured I'd ask if we have a tentative timeline?  
**\<fluffypony>** othe: any thoughts?  
**\<fluffypony>** ^^  
**\<othe>** sorry was busy drinking  
**\<othe>** yeah so ilya is traveling but back next week, we hope to fix all small reamaining issues till the week after  
**\<fluffypony>** ok  
**\<othe>** and then we can release a beta  
**\<tewinget>** awesome  
**\<othe>** together with a new tagged rls  
**\<fluffypony>** othe is there any way he can stop submitting huge PRs  
**\<othe>** and then whats following is mostly advanced settings and stuff like that  
**\<fluffypony>** it's killing it for other potential contributors  
**\<othe>** yeah i can tell him  
**\<tewinget>** if there's desire for it and nobody else takes up the task, I may sign up to do a plugin system (unless that's already in place?)  
**\<fluffypony>** he needs to PR on a feature / fix by feature basis  
**\<othe>** oh thats not in the place but something that would be cool to have tewinget  
**\<hyc>** yeah, narrow scope PRs  
**\<fluffypony>** yeah definitely, hyc  
**\<moneromooo>** And move the twitter stuff in there, just to be sure.  
**\<fluffypony>** OH!  
**\<fluffypony>** before I forget  
**\<fluffypony>** the big thing I wanted to discuss  
**\<fluffypony>** https://github.com/monero-project/bitmonero/issues/80  
**\<fluffypony>** that's going to happen before the bins are pushed  
**\<fluffypony>** so if anyone has any final thoughts on that, you'd best comment on the issue, else suck it up later :-P  
**\<fluffypony>** I'd also like us to start refactoring the parts that have CryptoNote in the name to be Monero instead  
**\<tewinget>** something something \`sed\`  
**\<fluffypony>** as RingCT + several thousand commits puts us quite far beyond the reference protocol  
**\<moneromooo>** Renaming things for the fun of it ? I'd rather not.  
**\<moneromooo>** (in the code, I mean. I'm ok with the binaries thing)  
**\<tewinget>** btw fluffypony, I \*think\* that the zmq-dev branch is PR-ready, but I'm not comfortable making that call without some testing, so if anyone would like to give it a go (testnet and mainnet are affected identically, so testnet is 100% fine for, well, testing)  
**\<ArticMine>** It simple reflects the reality of how much the code has changed from the original Cryptonote implementation  
**\<tewinget>** as I said before, I'd like to polish it up a bit first, but that's not a blocking issue for PR-ing  
**\<fluffypony>** tewinget: if you're of the opinion it can go into a mid-Sept code freeze / release then sure, else leave it till after the release because it's not HF worthy  
**\<fluffypony>** your call  
**\<tewinget>** I'm reluctantly okay with doing merges on my end before a PR, so it can wait, just figured I'd give the option.  Testing would still be great though...I need to sync the testnet chain on my VPS but then I'll badger you for some testnet moneyz  
**\<tewinget>** I'll need to discuss with someone(s) how "blocknotify" should work, and perhaps about doing something similar for miners (call it templatenotify if you like)  
**\<fluffypony>** oh that could be interesting  
**\<fluffypony>** the templatenotify I mean  
**\<hyc>** yeah templatenotify would make an immediate difference for miners  
**\<tewinget>** yea, I'm thinking a configurable parameter that is like "if there is 20% more value to be had via tx fees by changing the block template, notify the miner to update its block template with the new transactions included"  
**\<tewinget>** plus the obvious implications of changing when a new block is learned about  
**\<hyc>** right  
**\<tewinget>** but that can be done with the blocknotify that the wallet wants anyway  
**\<gingeropolous>** ooh we talkin dynamic fees?  
**\<tewinget>** at any rate, that's a design discussion for another time.  
**\<fluffypony>** tewinget: I'd prefer earlier PRs  
**\<fluffypony>** I mean  
**\<tewinget>** fluffypony: yes, yes, I meant for after that PR  
**\<fluffypony>** if it's properly borked by mid-September we can revert 0MQ for release  
**\<meeting-bot> [anonimal]** 17:06  
**\<fluffypony>** tewinget: so what I'm saying is PR soon, plx  
**\<fluffypony>** anonimal apologies  
**\<fluffypony>** is there anything else or can we call it?  
**\<hyc>** think that's good for today  
**\<tewinget>** I'd say go nuts for your kovri meeting, we're not going anywhere  
**\<fluffypony>** yay, nuts  
**\<tewinget>** so if something else comes up, address it after that meeting  
**\<fluffypony>** kk