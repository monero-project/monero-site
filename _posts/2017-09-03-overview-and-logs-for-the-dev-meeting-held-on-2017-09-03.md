---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-09-03
summary: Discussion of open PRs and issues, MyMonero, RuffCT, serhack's integrations, upcoming release + scheduled protocol upgrade, dedicated hardware wallet, Monero Revuo, and miscellaneous
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Overview  

An overview can be found on [MoneroBase](https://monerobase.com/wiki/DevMeeting_2017-09-03).   

# Logs  

**\<moneromooo>** fluffypony can't make the meeting, so I'll be prodding people.  
**\<moneromooo>** First thing is the release is soon, if you want to test the release branch, please feel free.  
**\<moneromooo>** https://github.com/monero-project/monero/tree/release-v0.11.0.0  
**\<moneromooo>** There are a couple patches still unmerged, but they shouldn't impact any testing.  
**\<moneromooo>** Pony will likely start building later today, or maybe tomorrow.  
**\<moneromooo>** Other than that, I guess we'll go through people to see what they're up to.  
**\<moneromooo>** Who wants to start ?  hyc ?  
**\<hyc>** hm, I've mostly been doing little patches for the release  
**\<hyc>** whenever I tripped over something  
**\<moneromooo>** And safe sync mode :)  
**\<hyc>** new stuff worth mentioning - safesyncmode, salvage  
**\<hyc>** yeah - so now monerod will automatically switch to SAFE sync mode whenever it catches up to the network  
**\<hyc>** and will switch back to FAST if it falls behind  
**\<hyc>** so hopefully we won't need to use the salvage flag ...  
**\<hyc>** I think that's my highlights. next?  
**\<moneromooo>** So... knaccc ?  
**\<hyc>** (oh yeah, also cleaned up readline deadlocks etc)  
**\<moneromooo>** So knaccc may not be around, but knaccc's been doing prototyping of the Ruffing et al sig scheme. Maybe later.  
**\<moneromooo>** surae: around ?  
**\<serhack>** Hey!  
**\<serhack>** is there meeting?  
**\<TinusMars>** no idea  
**\<moneromooo>** surae also seems away, so serhack: anything you want to say about what you've done recently ?  
**\<dEBRUYNE>** serhack, TinusMars: yes  
**\<vtnerd>** @serhack yes, on going  
**\<serhack>** okay  
**\<serhack>** moneromoo: I'm going to release prestashop plugin!!  
**\<serhack>** Second milestone is completed  
**\<hyc>** congrats  
**\<serhack>** but I have to do some maintanance ;) prestashop plugin is beta  
**\<moneromooo>** This and woocommerce are among the most used plugins for that kind of thing, is that right ?  
**\<serhack>** yep  
**\<serhack>** in the future, whmcs, magento, shopify  
**\<serhack>** so let's wait for another ffs  
**\<moneromooo>** Great, and congrats for your first maintenance contract too :)  
**\<serhack>** moneromoo: you can go on  
**\<serhack>** thanks!  
**\<hyc>** (oh one more note, we've cleaned up blockchain\_db code structure a bit. no more backend-specific includes in the rest of the source tree, only blockchain\_db is exposed now)  
**\<moneromooo>** vtnerd: you've been cleaning up some stuff about network addresses, etc recently, want to say anything about this or other things ?  
**\<moneromooo>** Or mymonero related things.  
**\<vtnerd>** um, not sure what to report because I don't think I have any hidden patches pending core  
**\<vtnerd>** the focus of mymonero is improving the perf of that poor guy, the DB is getting killed on the current design  
**\<vtnerd>** so hopefully finally less complaints about "where is mymonero XMR?"  
**\<hyc>** is that still using mySQL?  
**\<vtnerd>** yeah for the time being  
**\<serhack>** Vtnerd: Can I ask you any question about mymonero?  
**\<endogenic>** That's one, serhack!  
**\<vtnerd>** fluffypony discussed using LMDB for the open sourced version so that a dependency was not added  
**\<serhack>** Why don't you use another db for example sqlite?  
**\<serhack>** Endogenic: oh! :)  
**\<moneromooo>** If it's going to be that kind of question, maybe leave it out for later, or #mymonero :)  
**\<vtnerd>** at this point Im dealing with a legacy made before I joined the project. so I do not know the actual rationale  
**\<hyc>** If you *must* use SQL you can use sqlightning on LMDB https://github.com/LMDB/sqlightning  
**\<vtnerd>** I'd probably move it to LMDB first however  
**\<serhack>** Oh okay sorry moneromoo  
**\<hyc>** but I see no value add from using SQL itself  
**\<vtnerd>** yes I have a partially written experimental hybrid mode  
**\<vtnerd>** because currently the transactions on the network are pulled from mySQL too, so theres overhead in that  
**\<endogenic>** No value from sql?  
**\* endogenic** defers flamewar  
**\<moneromooo>** endogenic: anything you want to add, apart from SQL discussion ? :)  
**\<endogenic>** :'(  
**\<hyc>** yeah give us the scoop endo  
**\<endogenic>** You get an ios app, and you get an ios app...!  
**\<serhack>** Wow! Endogenic :)  
**\<endogenic>** Switched back to js (desktop and android) to bring new features over  
**\<vtnerd>** the value of mysql is doing arbitrary queries easily, with the cost of building them  
**\<hyc>** so both android and ios are ready to go now?  
**\<endogenic>** Dun and bradstreet is having a little difficulty verifying mymonero for apple for some reason so we're waiting on that  
**\<endogenic>** Vtnerd and transactions? Or can that be done in application layer?  
**\<vtnerd>** anyway serhack, ask in mymonero as opposed to this meeting  
**\<serhack>** Oh okay  
**\<vtnerd>** I was going to pull the transactions directly from the monerod file  
**\<endogenic>** Oh you must mean for mm specifically  
**\<vtnerd>** so read it in real-time, like LMDB was designed to do  
**\<endogenic>** Sorry i mean db txs  
**\<endogenic>** Er  
**\<vtnerd>** currently mymonero mirrors the entire tx history in a MySQL DB  
**\<hyc>** I thought we weren't going to have the DB discussion right this moment but ... there's no value-add for that ;)  
**\<vtnerd>** anyway, for monero specifically it looks like I will do anonimal suggestion of making the supercop code a separate project lib, I think moneromooo thought that was a good idea too  
**\<hyc>** makes sense  
**\<moneromooo>** Hmm, I didn't follow any discussion on that PR, I was going to go there after the release is done.  
**\<ArticMine>** Are we having s meeting?  
**\<moneromooo>** We are.  
**\<ArticMine>** ok  
**\<moneromooo>** OK, seems we're done here, vtnerd and endogenic, unless you have anything else ?  
**\<vtnerd>** nope  
**\<vtnerd>** direct all complaints to #mymonero haha  
**\<msvb-lab>** Just curious, it was reported in the community meeting like a doubling of members or traffic. Has that translated to development/developer too?  
**\<hyc>** I've noticed a few new people in this channel asking how to help devel  
**\<moneromooo>** Jaquee: around ? Want to say something about the GUI and/or the light wallet changes ?  
**\<serhack>** Yep, @lessless has done a good work with api lessless.github.io  
**\<hyc>** is the GUI frozen for release now? are those binaries in that reddit thread basically final?  
**\<lessless>** thanks serhack, being my pleasure. what is the topic btw? :)  
**\<moneromooo>** I think it was a week delayed (IIRC Jaquee was going to be busy).  
**\<serhack>** Your website helped a lot some devs :)  
**\<moneromooo>** Alright, so Jaquee AFK too. msvb-lab, you wanted to say something about your hardware project ?  
**\<Jaquee>** nothing new from me since last meeting  
**\<moneromooo>** OK, thanks :)  
**\<msvb-lab>** moneromooo: Yes, I want mention to any newcomers the current debate surrounding hw wallets and the FFS proposal.  
**\<msvb-lab>** https://forum.getmonero.org/7/open-tasks/88160/monero-firmware-for-ledger-wallet/  
**\<msvb-lab>** ...is for a firmware port but:  
**\<msvb-lab>** https://forum.getmonero.org/7/open-tasks/88149/dedicated-monero-hardware-wallet/  
**\<msvb-lab>** is the main effort towards a dedicated Monero hardware wallet.  
**\<msvb-lab>** This is just a brief mention, because we've had discussion already last week on dev, this week on community.  
**\<dEBRUYNE>** \<hyc> is the GUI frozen for release now? are those binaries in that reddit thread basically final? \<= Jaquee said he wanted to focus on fixing bugs that were reported by people using those bins  
**\<dEBRUYNE>** So basically that + bug fixes  
**\<msvb-lab>** Anyone with opinions/suggestions please write a comment in the forum (FFS thread.)  
**\<moneromooo>** Alright. Who wants to say something next ?  
**\<msvb-lab>** moneromooo: Thanks, that's all for props 88149 and 88160.  
**\<rehrar>** I can. I have something that needs dev input.  
**\<moneromooo>** Please go ahead.  
**\<Jaquee>** dEBRUYNE hyc: code freeze was done aug 23rd afaik. (one week after monero code freeze)  
**\<rehrar>** https://drive.google.com/file/d/0B0vhnWCa9J5QYW1yc2lRNWE2NzA/view?usp=sharing  
**\<rehrar>** This is the recent Monero Revuo that will be published soon.  
**\<rehrar>** Just want to get any last opinions on the development section. Anything else major been done that I've missed?  
**\<serhack>** Great work @rehrar  
**\<serhack>** Android wallet @rehrar ?  
**\<rehrar>** Also, can someone tell me if I understood the purpose of 0MQ correctly?  
**\<rehrar>** Android wallet is September. Doesn't quite make the cut. But maybe it can be in there. Who cares, right?  
**\<serhack>** Mm. Right  
**\<lessless>** serhack I would really love that work to be carried on - there are much more calls to cover. Can it become a part of official documentation? I think that way there more chance for contributions  
**\<rehrar>** Oh, I should probably add a "What to expect in the hard fork" section.  
**\<serhack>** I think yes. But I don't know where we can post your website lessless  
**\<dEBRUYNE>** lessless: You can simply make a PR to the site repository on github  
**\<moneromooo>** So, mooo next. I fixed a few things, but mostly more work on multisig based on luigi's new directions for N-1/N. Getting a bit lost in the sea of stuff to juggle, but it's progressing.  
**\<moneromooo>** Who else wants to talk a bit about dev happenings ?  
**\<lessless>** dEBRUYNE hmm, yeah! I can do that :)  
**\<gingeropolous>** we still set for 9/21  for the fork? And its definitely 0.11.0.0 ?  
**\<moneromooo>** 9/21 ?  
**\<moneromooo>** Oh. I get it.  
**\<gingeropolous>** september 21st .. ?  
**\<moneromooo>** It's supposed to be around the 16th IIRC.  
**\<gingeropolous>** aight, well the readme is wrong then  
**\<gingeropolous>** so the version is 0.11.0.0 ?  
**\<moneromooo>** I don't think I edited that. I did not realize it was already set in te readme :)  
**\<moneromooo>** Yes.  
**\<hyc>** daemon says 12.4 days away  
**\<gingeropolous>** yeah, down in the magic table i try to maintain  
**\<hyc>** so yeah around the 16th  
**\* moneromooo** afk for a bit. If anyone else wants to say something about dev happenings, please feel free :)  
**\<msvb-lab>** Sarang got hired as mathematician, congratulations.  
**\<msvb-lab>** Any word from him (I'm curious) on plans this week or current dev work?  
**\<knaccc>** My update on RuffCT - sarang and surae are working on resolving some notation issues between the Ruffing paper and the Bootle paper, and once they resolve a few things that aren't 100% clear from the papers, we'll be able to complete the prototype very quickly and will be able to share performance benchmarks so that we can all decide what kind of ring size we can use RuffCT to achieve.  
**\<msvb-lab>** ...but he isn't here it seems.  
**\<Jaquee>** rehrar: you might want to add a text about openmonero/mymonero backend support. PR #2109  
**\<rehrar>** Thanks Jaquee, will look into it.  
**\<hyc>** hmm. might also mention rangeproof work? we had some more discussion on how to approach that this past week  
**\<ArticMine>** knaccc Any idea on the impact of RuffCT on tx size?  
**\<hyc>** knaccc you had a paste of expected sizes, can you repost the link?  
**\<knaccc>** ArticMine not yet, it looks extremely promising from a tx size perspective, but there is a problem with the implementation so preliminary figures are probably completely wrong  
**\<knaccc>** in a week hopefully we'll have proper figures  
**\<ArticMine>** great  
**\<erciccione>** @rehar if you can, would be nice to mention the increased  number of languages that monero "speaks" in the community section, we got really a lot of stuff in these last months  
**\<rehrar>** Will do eric, thanks.  
**\<hyc>** hm, maybe we should keep the Sep 21 date. gives almost an extra week for people to upgrade  
**\<hyc>** (hardfork date)  
**\<gingeropolous>** and if they were going by the repo... its what they were expecting :/  
**\<gingeropolous>** but no one reads the docs, so theres that  
**\<hyc>** true  
**\<hyc>** looks like we're out of topics then  
**\<hyc>** anyone else?  
**\<msvb-lab>** Is Sarang here?  
**\<erciccione>** @rehrar if for eric you meant me, thank you :)  
**\<msvb-lab>** Let's hear from him, I'm dying to find out what's he's working on.  
**\<hyc>** seems no Sarang  
**\<knaccc>** Sarang has been looking at the Ruffing and Bootle papers  
**\<knaccc>** that's his immediate work, I think  
**\<msvb-lab>** knaccc: Okay, cool enough. Thanks.  
**\<rehrar>** Oops. Yeah. Just realized that you're erciccione, but that's ok cuz you misspelled my name just a bit ago too  
**\<erciccione>** ooops just noticed . sorry :)  
**\<rehrar>** moneromooo save us!  
**\<iDunk>** Yeah, it's a bit... romanesco :)  
**\<serhack>** :)  
**\<gingeropolous>** thought mooo was afk  
**\<rehrar>** Yeah, so instead of floundering about, perhaps we can confirm next meeting time and end?  
**\<hyc>** well, if no one has any additional meeting items, I think we just confirm next  
**\<rehrar>** \^ this guy  
**\<hyc>** Sep 17 would be right after the hardfork  
**\<hyc>** unless we decide to change the block height to match sep 21.  
**\<rehrar>** I think that's a pretty important decision to make fairly urgently, no?  
**\<iDunk>** 1403616? To keep with \*16 recent tradition.  
**\<hyc>** certainly in the next few hours if we're going to freeze and tag today  
**\<gingeropolous>** well, i think i put the 9/21 there because in 2016 it was 9/21  
**\<gingeropolous>** but i dunno if its better to fork on a weekend or a weekday  
**\<gingeropolous>** what was 9/21/2016?  
**\<hyc>** wednesday  
**\<hyc>** So, saturday or following thursday this time  
**\<rehrar>** If the docs have said 21 for some time, perhaps it's best to keep it?  
**\<iDunk>** 1400000 was on target for 21 when it was set, I think.  
**\<iDunk>** But then nethash shot up and the diff struggled to keep the block target time to 120 seconds.  
**\<hyc>** so it sounds like Sep 21 was always the intended date  
**\<hyc>** and we should fix the height  
**\<hyc>** ok let's confirm Sep 17 next meeting, 17:00 UTC, and call it a day. Thanks everyone  
**\<rehrar>** Cya. :)  
**\<rehrar>** No Kovri meeting today!  