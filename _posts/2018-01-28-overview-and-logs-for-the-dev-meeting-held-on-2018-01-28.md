---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2018-01-28
summary: Discussion of open PRs and issues, Bulletproofs, March HF, fees, Debian package, GUI update, and miscellaneous
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Overview  

An overview can be found on [MoneroBase](https://monerobase.com/wiki/DevMeeting_2018-01-28).  

# Logs  

**\<hyc>** meeting time  
**\<rehrar>** ye  
**\<rehrar>** agenda: https://github.com/monero-project/meta/issues/166  
**\<rehrar>** as always, start with 1. Greetings  
**\<sarang>** yo  
**\<msvb-lab>** Hi there.  
**\<hyc>** hey  
**\<rbrunner>** Hoi zämme  
**\<iDunk>** Hi  
**\<pebx>** hi  
**\<rehrar>** ArticMine fluffypony luigi1111 luigi1111w smooth NoodleDoodle anonimal anonimobile endogenic gingeropolous vtnerd pigeons  
**\<pigeons>** hi  
**\<vtnerd>** hi  
**\<rehrar>** dEBRUYNE Jaquee dsc dsc2 ?  
**\<gingeropolous>** oh theres a meeting?  
**\<rehrar>** anyone else?  
**\<endogenic>** no ginger  
**\<iDunk>** moneromooo  
**\<dEBRUYNE>** I am her  
**\<dEBRUYNE>** e  
**\<rehrar>** medusa moneromooo othe  
**\<smooth>** 1  
**\<rehrar>** Well, welcome everyone! :)  
**\<rehrar>** 2. Brief review of what's been completed since the previous meeting  
**\<rehrar>** Anyone have any exciting stuff to report for development?  
**\<medusa>** hi  
**\<sarang>** MRL Goes To Stanford  
**\<sarang>** It was observed that bulletproofs can have batch verification, which will be great time savings even between separate transaction  
**\<ArticMine>** hi  
**\<bearretinjapan>** hi  
**\<hyc>** batching is always interesting. have to balance batch size vs latency, waiting for enough txs to arrive to fill a batch  
**\<sarang>** This can be useful for new nodes  
**\<smooth>** currently the code waits for all the txs before doing anythign with them anyway, although that could change  
**\<sarang>** Initial testing by andytoshi indicated that subsequent proofs were only ~15% of the time complexity of a separate verification  
**\<hyc>** nice  
**\<sarang>** Yeah, it merges all the multiexp operations into one  
**\<sarang>** effectively replacing group operations with scalar operations  
**\<sarang>** So the time savings really depend on the relative timing between those ops  
**\<sarang>** Anyway, mostly excellent talks at the conference, and good lessons learned  
**\* sarang** will be quiet now  
**\<rehrar>** Anyone else? :) GUI have anything?  
**\<medusa>** the GUI project has merged sub addresses. also we removed the ability for the user to generate payment ids and integrated addresses  
**\<medusa>** in addition, there is a new monerod start up flag, called --boostrap daemon https://github.com/monero-project/monero/pull/3165  
**\<hyc>** ^^ this looks very good. I wonder if the GUI should use that by default  
**\<medusa>** the GUi will make use of this too, so there dont exist several implementations of the same thing  
**\<gingeropolous>** is that supplanting Jaquee 's thing?  
**\<medusa>** PR is allready here hyc https://github.com/monero-project/monero-gui/pull/1091  
**\<medusa>** gingeropolous:as far as i understand it, yes  
**\<rehrar>** I'll repaste xmrscott[m]'s message so people who don't want to click don't have to  
**\<rehrar>** David Mirza Ahmad, president of Subgraph OS, has put together a byte-for-byte matching Debian package and is requesting comment on some final pieces: "There some decisions to make for us, like: where does the blockchain data go? Do we start the daemon with systemd by default (feeling like no, as it can be started in GUI)? Appreciate thoughts on this." No one has provided comments on these matters so if anyone here could do so it woul  
**\<rehrar>** d be appreciated. https://github.com/monero-project/monero/issues/2395  
**\<rehrar>** \^  
**\<pebx>** thanks for the update medusa! this looks very good. we shouldn't forget that GUI is the interface to the rest of the world...  
**\<msvb-lab>** rehrar: Byte for byte matching, you mean as in reproducible build? Gitian?  
**\* rehrar** applauds the GUI people for their consistent quality work  
**\<pigeons>** I looked at his repo and i didnt see the debian control files to reproduce  
**\<rehrar>** xmrscott[m] \^ msvb-lab's question  
**\<ArticMine>** Any idea on timeline from an update at out end to the repo?  
**\<xmrscott[m]>** I believe so. I'm not familliar with build terminoogy,  
**\<xmrscott[m]>** The sha256 sums match: d5b0295d55f9951a6995e2ecc1516898799b22686ed81ca07b05b493175f2f66  
**\<xmrscott[m]>** (THis is shown on the comments in the GitHub issue)  
**\<rehrar>** Any answer for ArticMine's question?  
**\<hyc>** unknowable  
**\<rehrar>** bam  
**\<hyc>** distro release schedules are seldom anywhere near upstream release cycles  
**\<ArticMine>** My concern is stale Monero in the distro  
**\<hyc>** yes  
**\<hyc>** it's a frequent occurrence in distro packages  
**\<ArticMine>** With a six month hard for cycle  
**\<ArticMine>** fork  
**\<hyc>** which is why I've never put much priority on distrok packaging. reproducible builds are a good thing in and of themself though.  
**\<rehrar>** Alright, if nothing else, we can move on to 3. March hardfork items + code freeze  
**\<rehrar>** Anything to be discussed about the upcoming hard fork? Is there a code freeze date yet?  
**\<dEBRUYNE>** Preferably very soon. Then we don't have to rush stuff  
**\<ArticMine>** ... and bulletproofs  
**\<sarang>** What about BPs?  
**\<hyc>** seems they're off the table for March, since audits haven't been completed  
**\<hyc>** 3rd party audits  
**\<sarang>** Correct  
**\<rehrar>** missed the meeting last week ArticMine  
**\<rbrunner>** Have any been *started* in the meantime?  
**\<sarang>** I'm waiting on a formal SoW from one of the groups  
**\<sarang>** Then I'll present my recommendations among all groups  
**\<medusa>** since BP seems to be off the table, is the new wallet option the only planned change to address current high fee situation ?  
**\<sarang>** We're looking at ~40K per professional audit  
**\<sarang>** and hopefully get benedikt to do a review of at least the Java since he wrote the damn thing  
**\<sarang>** for $  
**\<rehrar>** medusa: we should crash the price in the meantime  
**\<sarang>** Should we include batch BP verification in the audited code?  
**\<sarang>** Or put that aside  
**\<endogenic>** rehrar: was that a preannouncement? :)  
**\<endogenic>** sarang: perhaps as optional extra credit?  
**\<hyc>** we should audit whatever we hope to release in Sept.  
**\<hyc>** otherwise we'll just need to do all this again for each incremental improvement. ??  
**\<sarang>** It'll be included in an updated whitepaper in Feb  
**\<sarang>** by benedikt et al., not by me  
**\<rbrunner>** Well, maybe plan in a way that makes pretty damn sure we will be ready in September :)  
**\<pebx>** what about the fees medusa mentioned? it's also something the average user sees first and complains about... if we don't release BPs there should be some lowering of fees beside the low to standard thing  
**\<dEBRUYNE>** I suppose we can discuss lowering the low priority level since it's arbitrary anyway, but we can't lower the default because we'd have to tweak the penalty as well  
**\<ferretinjapan>** BPs being released in March was also cited as a reason for onot loweiring fees.  
**\<smooth>** we can lower the default a little i think, but no one has taken the time to study it  
**\<smooth>** so actually no, we can't  
**\<sarang>** As to BP funding, I plan to open an FFS with "checkpoints" for an amount covering at least one pro audit and another for a review by one of the paper authors  
**\<endogenic>** i was just going to ask about that, smooth  
**\<smooth>** 'default' isn't really the right term though. the pending PR changes the 'default' to be dynamic  
**\<dEBRUYNE>** old default then? :P  
**\<smooth>** yeah "medium" whatever you want to call it  
**\<smooth>** "normal"  
**\<rbrunner>** base fee?  
**\<dEBRUYNE>** smooth: any opinion about lowering the lowest level?  
**\<smooth>** etc.  
**\<rehrar>** Base fee sounds good  
**\<smooth>** base fee doesn't seem like the best term to me  
**\<smooth>** implies that is actually the fee you pay  
**\<smooth>** it is more like a 'fee reference value' or something  
**\<rehrar>** I think it should be more than 'medium' though, because it's the one that will increase the block size. Something a little more souped up than 'medium'?  
**\<ferretinjapan>** floating reference fee?  
**\<rehrar>** Either way, thoughts on lowering the arbitrary 'Low Fee'?  
**\<ArticMine>** We have to be careful with the low fee level relative to the 1 tx at penalty (default)  
**\<ArticMine>** Spam attacks becomes possible if the probability of mining becomes too low  
**\<pebx>** the crypto "market" might crash in the meantime, but it also might not and what if monero's market price until september rises like within the last 8 months?  
**\<smooth>** ArticMine: but doesn't the probability of mining just depend on how many of each there are and not the fee amount?  
**\<pebx>** the minimum fee is a good protection but also a pain...  
**\<smooth>** the issue i see with too much of a gap between levels is the incentive to circumvent (just bump up your own fee a little so you are above all the others in the same level but not all the way to the next level)  
**\<dEBRUYNE>** pebx: I'd leave any price predictions out of this discussion. Tomorrow's price is most likely today's price  
**\<smooth>** the more gap the greater the incentive to do that  
**\<pebx>** dEBU  
**\<pebx>** is it not about price when it comes to fees?  
**\<smooth>** other than that the low level seems aalmost comletely arbitrary to me  
**\<dEBRUYNE>** Price surely influence fees (as they are denominated in XMR). I was just saying that we should leave *price* prediction out of it  
**\<rehrar>** Well if we want a code freeze "soon", we should try to decide this "soon" too, no? Or would this not be affected really by the freeze?  
**\<dEBRUYNE>** *prediction*  
**\<ArticMine>** I mean how low on the min fee do people want to go?  
**\<endogenic>** can we put together a study on fees and spam? having a shared model (and simulated results) we can reference and improve collectively would be great… certainly would ease the knowledge gap  
**\<pebx>** i didn't want to include any prediction, so i told it might continue or not  
**\<dEBRUYNE>** smooth: I guess if we had 1/5th or 1/6th (current is 1/4th) the gap would be still sufficiently small? Also people would have to tweak the code and compile it themselves to make use of the gap  
**\<smooth>** endogenic: it has been done. we can do another one but until it is done we can't rely on it  
**\<endogenic>** smooth: do you mean the recent writeup?  
**\<smooth>** endogenic: that one, the older one. whatever is done we can rely on. we can't rely on something that is 'can we do' especially with an imminent freeze  
**\<smooth>** of course we can do more studies  
**\<endogenic>** smooth: i would only suggest inaction until after study/ confirmation  
**\<ArticMine>** and then nothing for March, after which we will have BP  
**\<rehrar>** Which brings us full circle :P  
**\<moneromooo>** Can we finish the meeting first, and go back to the fee stuff ?  
**\<endogenic>** lol mooo  
**\<rehrar>** Alright. Moving on then! 4. Code + ticket discussion / Q & A  
**\<pebx>** nice to see you, mooo  
**\<dEBRUYNE>** pebx: Your sentence sounded like that, hence my statement. I could've misinterpreted you though.  
**\<ArticMine>** I sugest we leave fees aslon for March or at most introduce the wallet side adaptive fee between default and min  
**\<ArticMine>** alone  
**\<medusa>** thats allready merged afaik ArticMine  
**\<smooth>** the adaptive should go in if at all possible from a stability perspective imo  
**\<smooth>** oh i didn't know it was merged. great  
**\<pebx>** dEBRUYNE my point is, that at some point fees can get insane like they have been / are in bitcoin  
**\<ArticMine>** Then if it is merged that is all  
**\<gingeropolous>** ^^  
**\<medusa>** this one no ? https://github.com/monero-project/monero/pull/3123  
**\<smooth>** yes. lets move on: rehrar>** Alright. Moving on then! 4. Code + ticket discussion / Q & A  
**\<rbrunner>** I have a little thing: The Windows installer missed the Fall releases. But surely the March release is a perfect opportunity to finally put it into service ...?  
**\<hyc>** yeah sounds like we're fine for now on fee  
**\<gingeropolous>** all this code and ticket discussion  
**\<iDunk>** 3186 and 3198 need merging to fix some builds.  
**\<rbrunner>** I hope it's not itself controversial that having a Windows installer would be nice  
**\<medusa>** absolutely rbrunner, the worlk load regarding that is mostly on the shoulder of the binary builder (pony). we cant really do anything to speed it up i fear  
**\<rbrunner>** Ah well, March is early enough :)  
**\<rbrunner>** Just do not forget it :)  
**\<luigi1111>** I personally prefer portable exe but both are fine with me  
**\<moneromooo>** "portable" and "exe", hmmm :)  
**\<hyc>** lol  
**\<dEBRUYNE>** pebx: I surely hope the dynamic fee algo has kicked in by then. Anyway, I'll refrain from commenting on fees now.  
**\<luigi1111>** :)  
**\<pebx>** dEBRUYNE hope is good... but i'll also not comment fees in this meeting any more.  
**\<rehrar>** Anything else for code and ticket discussion?  
**\<rehrar>** 5. Any additional meeting items (besides fees)?  
**\<msvb-lab>** Or hardware questions.  
**\<rehrar>** did you want to share something msvb-lab?  
**\<msvb-lab>** Nothing to share. We're working on the next gen prototype.  
**\<msvb-lab>** Questions are welcome in any case.  
**\<rehrar>** Alright then.  
**\<rehrar>** 6. Confirm next meeting date/time  
**\<rehrar>** Feb 11th?  
**\<hyc>** sounds right  
**\<rehrar>** luigi has mentioned a couple times about switching the time  
**\<hyc>** btw, I'll be at FOSDEM next week. anyone else going?  
**\<medusa>** i want to thank everyone that is working on making the build envs green. you guys are heros  **\<3  
**\<rehrar>** don't know if he was serious, but does anyone else agree?  
**\<hyc>** switch to what time?  
**\<msvb-lab>** hyc: I'll be there too, at FOSDEM in Bruxelles.  
**\<rehrar>** luigi1111 luigi1111w?  
**\<rehrar>** I guess just as a general question, is this time inconvenient for other people?  
**\<hyc>** seems ok to me  
**\<rehrar>** hyc has spoken  
**\<moneromooo>** IIRC ArticMine objected.  
**\<rehrar>** I'll probably open a meta issue and ask for opinions.  
**\<ArticMine>** I would prefer an hour earlier  
**\<hyc>** good idea  
**\<rehrar>** For now we can have next dev meeting same time, and see about moving others.  
**\<endogenic>** i'm fine with an hour earlier  
**\<rehrar>** Sound ok for everyone?  
**\<pebx>** hyc can't wait for your talk to see it at least online!  
**\<rbrunner>** Yes, one hour earlier is ok as well  
**\<rehrar>** Hmmm...ok, tentative next meeting time Feb 11 at 16:00 UTC  
**\<rehrar>** The time will be open for discussion on the meeting issue  
**\<rehrar>** Meeting over. Thanks for coming everyone. You're all the best, and don't let anyone tell you otherwise.  