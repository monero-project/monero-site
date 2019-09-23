---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2019-09-22
summary: Development status, 0.15 release discussion, Network upgrade planning, and miscellaneous
tags: [dev diaries, core, crypto]
author: el00ruobuob / rehrar
---

# Logs  

**\<rehrar>** ok  
**\<rehrar>** it's time  
**\<rehrar>** 1. Greetings  
**\<rehrar>** who all is here?  
**\<sgp\_>** hello :)  
**\<needmonero90>** Hi  
**\<xmrscott[m]>** Hey hey hey  
**\<rbrunner>** Hi  
**\<tevador>** hey  
**\<sech1>** \\o/  
**\<ErCiccione[m]>** Hi  
**\<ferretinjapan>** so everyone except the people rehrar pinged are here, nice.  
**\<rehrar>** it would seem so  
**\<rehrar>** moneromooo: do we have you at least? :P  
**\<moneromooo>** Yes.  
**\<rehrar>** one last round for fluffypony luigi1111 ArticMine binaryFate  
**\<rehrar>** please join us ASAP  
**\<rehrar>** in the meantime, we can move on to 2. What's been completed since last meeting?  
**\<vtnerd\_\_>** here  
**\<sech1>** I've finished RandomX JIT compiler for ARM CPUs. Verification time is even better than CN/R on ARM.  
**\<moneromooo>** Pretty good stuff here.  
**\<rbrunner>** Nice  
**\<ArticMine>** Hi  
**\<dEBRUYNE>** I am here  
**\<meksi>** Hi  
**\<tevador>** so I guess we are including the ARM JIT in the release?  
**\<tevador>** probably no reason not to  
**\<moneromooo>** It can be disabled with an env var AFAIK so sure.  
**\<tevador>** just it hasn't been heavily tested as the x86 JIT  
**\<SoiMatter>** Sirs! ferretinjapan asked moi to join.  
**\<hyc>** since it's easily toggled off, I'd say we run with it  
**\<jtgrassie>** hi  
**\<SoiMatter>** o7 I will keep still :)  
**\<moneromooo>** monerod can now synced from pruned blocks (optional). I'd like this to go in before release if reviewed.  
**\<rehrar>** Honest question to everyone, now that CLI has reproducible builds, can we as a community decide on a date without input from Core?  
**\<selsta>** GUI?  
**\<rehrar>** that's next selsta :P  
**\<selsta>** yes but it would be nice to release both the CLI and GUI at the same time and that depends on core  
**\<moneromooo>** Pony still controls the website (for binaries to be uploaded), and the DNS records (for the hashes of the binaries).  
**\<rehrar>** ok so there's distribution and GUI to consider  
**\<dEBRUYNE>** Pony said he'd be around for the CLI & GUI release  
**\<rehrar>** I mean, ultimately we want to go along this road at some point to reduce centralization anyways, no?  
**\<moneromooo>** Also needs people to build for random OSes. Does Windows have repro builds too ?  
**\<ArticMine>** Do we have a release date in mind?  
**\<dEBRUYNE>** moneromooo: Yes  
**\<dEBRUYNE>** At least for the CLI  
**\<ErCiccione[m]>** ArticMine: i think the idea was to set a date today  
**\<rehrar>** so let's set one  
**\<rehrar>** ArticMine can represent the core team here  
**\<sgp\_>** October 26?  
**\<rehrar>** Are we thinking mid-October? End of October?  
**\<dEBRUYNE>** I would personally prefer a bit more towards the end of October, as that gives us a bit more leeway  
**\<ArticMine>** I do not ave an issue with setting a release  date at this meeting  
**\<ErCiccione[m]>** i agree  
**\<hyc>** Let's go with October 31, Halloween  
**\<tevador>** is this the release date of the fork date?  
**\<tevador>** or\*  
**\<hyc>** it'll be scary  
**\<moneromooo>** I have some reservations about the stability of randomx-in-monerod. Bugs are still coming in fast.  
**\<needmonero90>** Monero's spoopy fork  
**\<rehrar>** tevador: fork date  
**\<dEBRUYNE>** tevador: fork date  
**\<sech1>** October 31 is a bit too late  
**\<moneromooo>** So pushing back would be good in my view :)  
**\<ArticMine>** and code freeze?  
**\<rehrar>** if mooo has reservations then maybe 31 is a decent date?  
**\<rehrar>** sech1: what's your reasoning?  
**\<tevador>** so better to not do it in the middle of the week  
**\<luigi1111>** I'm sorta here  
**\<sech1>** October 31 is kind of an edge of publicly promised "fork in October"  
**\<sech1>** October 26 sounds better  
**\<moneromooo>** I don't anyone (who counts) ever promised.  
**\<hyc>** assuming it's actually ready by then  
**\<needmonero90>** Welcome to decentralization sech1.  
**\<rehrar>** I am fine with 26th  
**\<tevador>** yeah, 26 October would be better if it's doable  
**\<needmonero90>** Community won't be too mad if we don't hit deadlines  
**\<SoiMatter>** Go with the date of the next UK election  
**\<hyc>** testnet has been disturbingly unstable the past few weeks.  
**\<hyc>** but most of the problems were unrelated to randomX  
**\<Inge->** Better a safe launch than an october launch.  
**\<ArticMine>** One key point is the time between release and fork date  
**\<rbrunner>** Normal testnet or the RandomX testnet?  
**\<hyc>** randomX testnet  
**\<hyc>** but the issues with peers being disconnected and banned would have happened on public testnet too if anyone bothered to exercise that  
**\<hyc>** basically current git master is unstable, recent changes to the networking code broke a lot.  
**\<sech1>** if fork is October 26 (4 weeks), would 2 weeks be enough to fix all that?  
**\<sech1>** and would additional 5 days help?  
**\<ErCiccione[m]>** i'm starting to think would be better to posticipate to after october  
**\<tevador>** so it looks more like November  
**\<ArticMine>** Release and fork date ware very different  
**\<dEBRUYNE>** hyc: Those recent changes will be reverted by 5905 right?  
**\<moneromooo>** Yes.  
**\<ArticMine>** We need to give people time to update  
**\<ErCiccione[m]>** if there are so many doubts i would just wait. No reason to rush it, this is a big fork  
**\<hyc>** agreed, safer to wait  
**\<rehrar>** so really all of this should have been discussed two weeks to a month ago  
**\<sgp\_>** I don't think the optics of a "late" Oct 31 date will be terrible. We can get ahead of it with the Halloween marketing. If people prefer November, then I think we should still pick a date  
**\<M5M400>** will this release discontinue legacy payment IDs?  
**\<rehrar>** so for next time we really need to start seriously discussing the fork two months prior to "planned" date  
**\<moneromooo>** Yes.  
**\<moneromooo>** Though currently not banned, just code removed.  
**\<dEBRUYNE>** rehrar: I don't think we could have foreseen the issues arosen on testnet  
**\<moneromooo>** Are any large exchanges still using them ?  
**\<ArticMine>** I suggest an October 31 release date with a fork date 4 weeks later  
**\<luigi1111>** late is far better than broken  
**\<sgp\_>** I can try to compile a list  
**\<sech1>** We still need to decide fork date and release schedule today  
**\<rehrar>** dEBRUYNE: literally every single fork there is a "I don't think we could have foreseen" situation?  
**\<needmonero90>** What happened to move fast and break things? This is tech!  
**\<dEBRUYNE>** Yes because there will simply be things that cannot be foreseen  
**\<dEBRUYNE>** You cannot perfectly plan such a thing  
**\<luigi1111>** I too enjoy breaking money when possible  
**\<rehrar>** ok, ArticMine has made a concrete suggestion  
**\<rehrar>** 31st release date, one month later fork date  
**\<sgp\_>** one month? why one month?  
**\<needmonero90>** I think its reasonable.  
**\<needmonero90>** No objection here.  
**\<ferretinjapan>** luigi1111, I agree, late and working is far better than on time and buggy...  
**\<hyc>** is that the same offset we used in previous releases?  
**\<M5M400>** moneromooo: i have about 330 miners still mining to payment\_id addresses. that's 5 %  
**\<sgp\_>** no, closer to two weeks I think  
**\<ArticMine>** To give people proper notice to upgrade  
**\<luigi1111>** that's what it ended up being  
**\<needmonero90>** We were pushing to the wire last time  
**\<needmonero90>** To be fair  
**\<luigi1111>** we never targeted two weeks that's simply not ideal  
**\<needmonero90>** Two weeks was cutting it close  
**\<ArticMine>** This has been an issue many times before  
**\<ErCiccione[m]>** yeah, one month seems fair  
**\<sech1>** October 31st release and November 30th fork then?  
**\<luigi1111>** yes we've always pushed releases to late but doesn't mean we shouldn't try to do better  
**\<ArticMine>** sounds fine to me  
**\<sgp\_>** So what specific fork date?  
**\<tevador>** 30th Nov  
**\<rbrunner>** November 30 is again Saturday, which is nice  
**\<sech1>** let's hope CN/R holds without ASICs until then :)  
**\<ArticMine>** So when is code freeze?  
**\<moneromooo>** Whenever we don't have anything left we want to merge :)  
**\<ErCiccione[m]>** now with reproducible build releases should be much faster, at least for CLI. We rarely managed to release at the time we decided  
**\<needmonero90>** October 31st makes sense imo  
**\<sgp\_>** I think having a release in October will help with optics. And a 31st update is easy to brand  
**\<rehrar>** alright, it looks like we have a loose consensus, unless anyone would like to speak now  
**\<ArticMine>** Sure but how much time is needed between code freeze and release?  
**\<rehrar>** in opposition  
**\<luigi1111>** like a week  
**\<luigi1111>** but fluffy fluffy fluffy  
**\<selsta>** +1  
**\<selsta>** long code freezes never work  
**\<rehrar>** luigi1111: did not show  
**\<dEBRUYNE>** We only need fluffy to upload the bins though for the CLI release  
**\<dEBRUYNE>** (and do the website)  
**\<luigi1111>** I know but if he's building he has to be able to commit to a schedule  
**\<sgp\_>** so Thanksgiving weekend hardfork (Nov 30)  
**\<sech1>** yes, better safe than sorry  
**\<hyc>** since we have reproducible builds we don't need him to build  
**\<dEBRUYNE>** rehrar: He said he'd be available for the release (he'd prefer to have a timeline a bit in advance though)  
**\<rehrar>** luigi1111: if he's unable to commit to a schedule, then we can do the deterministic builds thing, and just make sure they get uploaded  
**\<luigi1111>** ok cool  
**\<luigi1111>** then just gooey  
**\<rehrar>** which is you  
**\<ArticMine>** The time between code freeze and release need to be set buy those closest  to the code  
**\<rehrar>** can you commit to this schedule?  
**\<dEBRUYNE>** GUI gets build by pony  
**\<rehrar>** oof  
**\<needmonero90>** Speaking of build privs, I would like to formally propose that some of the GUI repo privileges be transferred to dsc (the non deterministic build part at the very least)  
**\<M5M400>** how can fluffy still be the only person able to do some vital things?  
**\<luigi1111>** I'm the one going to be doing all the merges in both projects so heh  
**\<dEBRUYNE>** rehrar: Third time and last time I will say ->  He said he'd be available for the release  
**\<rehrar>** M5M400: that's why deterministic builds is top priority  
**\<rehrar>** dEBRUYNE: ok  
**\<ferretinjapan>** M5M400, mainly because reproducible builds were never a thing before now.  
**\<needmonero90>** luigi1111: we really should move some of those responsibilities to dsc.  
**\<dEBRUYNE>** needmonero90: I disagree, then we would have coders merging their own stuff  
**\<needmonero90>** He would be the new maintainer/lead of gui  
**\<needmonero90>** Or something  
**\<rehrar>** ok, any other questions in regards to the set dates? October 31st release, November 30th fork.  
**\<moneromooo>** So what do we need for the release ? readline fixes for repro builds, randomx. The pay-for-service stuff. Payment ID changes. Hopefully the sync-pruned-blocks. Anything else that's large or really needed ?  
**\<ferretinjapan>** freeze date?  
**\<rehrar>** needmonero90: that would be the first time a non-core team member will have done this. Not impossible, but certainly unprecedented and worthy of a bigger discussion which we don't have time for here in this meeting  
**\<dEBRUYNE>** Once we branch the code is basically frozen right? Because then only fixes go in  
**\<ErCiccione[m]>** one week code freeze would be appreciated. Let's remember that there are the translation to deal with (and i beg for a code freeze since ever :D)  
**\<needmonero90>** Okay, tabled for now rehrar  
**\<moneromooo>** vtnerd\_\_: are you planning to have some more network stuff ready for the release ?  
**\<ferretinjapan>** I guess the #monero-pow guys would have a better idea when to freeze...  
**\<ArticMine>** Oct 24th as per luigi1111 selsta?  
**\<luigi1111>** he's not the only one with access to a couple things but the only one that actively used his access  
**\<dEBRUYNE>** moneromooo: The readline fix is 5892 right?  
**\<selsta>** ArticMine: yes  
**\<luigi1111>** until recently where him and pigeons have both not been to active  
**\<moneromooo>** Could be. Depends on what people who have the problem say after testing it :)  
**\<dEBRUYNE>** ArticMine: I think we can branch earlier, but moneromooo probably has a better view on that  
**\<ArticMine>** moneromooo does Oct 24 work for code freeze?  
**\<ErCiccione[m]>** pigeons is active. I asked him to update the server of getmonero last time  
**\<moneromooo>** That sounds plausible to me.  
**\<M5M400>** moneromooo: it appears bittrex and binance still use payment\_id's  
**\<ErCiccione[m]>** and he also gave me a hand with weblate  
**\<moneromooo>** Thanks.  
**\<vtnerd\_\_>** moneromooo : yes, the split mempool is jst about done (finishing core tests nows)  
**\<rehrar>** wow  
**\<dEBRUYNE>** M5M400: Binance is working on upgrading their system, needmonero90 is in touch with them  
**\<rehrar>** vtnerd\_\_: so your stuff will make it in this one?  
**\<vtnerd\_\_>** and the dandelion++ remnants \_shouldn't\_ be too painful - although I always say that :/  
**\<M5M400>** dEBRUYNE: saifu. great.  
**\<needmonero90>** Binance indicated they should be ready by fork in October. Pushing the date back shouldnt hurt the timeline.  
**\<M5M400>** anyone in touch with bittrex?  
**\<dEBRUYNE>** They are aware as far as I know  
**\<vtnerd\_\_>** I can't say whether it will "make it in", because theres always a chance something comes up during review, etc  
**\<vtnerd\_\_>** but the split mempool for the i2p/tor is close to ready. my concern is that its kind of tough the way it got shoved in  
**\<rbrunner>** You mean in a technical sense?  
**\<vtnerd\_\_>** I took hyc's approach of adding a tag to the metadata, but I had to inspect a bunch of code paths to make sure stuff didn't leak  
**\<binaryFate>** hi all, sorry got late to the party  
**\<vtnerd\_\_>** ultimately a true "physical" or "logical" split would be ideal, but it seemed kind of tough at the momnent when I tried to think about hwo to do it  
**\<moneromooo>** Oh so it's a single txpool, just txes have a flag ?  
**\<vtnerd\_\_>** yeah, unfortunately  
**\<M5M400>** are we aware of any GPU miner in the works for randX that will be ready in time for spork?  
**\<moneromooo>** That's what I did for the sync-from-pruned :)  
**\<hyc>** M5M400: xmrig is ready  
**\<luigi1111>** 24th and 31st targets are good with me for 30th fork  
**\<sech1>** M5M400 xmrig 4.0 is combined CPU + OpenCL miner  
**\<vtnerd\_\_>** if thats worth a reject, then I can go back and try again, but its a little dicey otherwise (it requires a slightly larger refactor and possibly a second lmdb database)  
**\<luigi1111>** mostly afk now  
**\<rehrar>** vtnerd\_\_: if this does make it in this time, it can be iterated on in the future no?  
**\<M5M400>** hyc: sech1: nice  
**\<moneromooo>** It's not IMHO. I'd have done that too.  
**\<moneromooo>** But then I tend to shove things in :)  
**\<vtnerd\_\_>** yes, I don't think the patch makes it harder to refactor, its probably neutral from that perspective  
**\<hyc>** I don't really see other approaches to that as being a good idea  
**\<tevador>** btw, fork height could be 1978433, which is exactly the start of a RandomX epoch and should be in the afternoon CET on Nov 30th  
**\<vtnerd\_\_>** as an example of what I mean - one of the weird cases is that fluffy blocks request can leak the anonymity channel, etc, so yeah  
**\<dEBRUYNE>** tevador: Afternoon CET would allow most people to be online, because it would basically be late evening for Asia and morning for US  
**\<moneromooo>** And let's reset testnet to fork on an epoch boundary too ?  
**\<tevador>** dEBRUYNE: yeah, nice coincidence  
**\<ErCiccione[m]>** i guess we have a fork height. Nice  
**\<rbrunner>** With a testnet fork around release, end of October?  
**\<hyc>** sounds good  
**\<dEBRUYNE>** To summarize the timeline, this is approximately correct right? Branch within 2-3 weeks, freeze October 24, release October 31, fork November 30  
**\<moneromooo>** I think we have everything we need for v12 now, apart from randomx, so we can fork the real testnet as soon as it gets merged.  
**\<rbrunner>** Even better then  
**\<tevador>** that looks like a sensible schedule  
**\<sech1>** yes, plenty of time to iron out all issues  
**\<rbrunner>** Famous last words :)  
**\<dEBRUYNE>** It at least feels we are better prepared now than last time :-P  
**\<tevador>** someone should strictly enforce code freeze this time  
**\<rehrar>** penalty of death  
**\<ErCiccione[m]>** tevador: i strongly agree  
**\<dEBRUYNE>** moneromooo: Do we need pony around to fork the real testnet?  
**\<PauleBert>** can we reset stagenet too? it is getting quite huge  
**\<moneromooo>** Yes, the miner's one of his nodes, and seed nodes need updating too.  
**\<moneromooo>** The former's not a big problem, but the latter kinda is.  
**\<needmonero90>** Don't reset stagenet :(  
**\<dEBRUYNE>** Ok, I will send him a message then  
**\<needmonero90>** Telegram tipbot uses it  
**\<rbrunner>** "Reset" means here dropping a few hundreds of blocks probably, no new genesis block  
**\<needmonero90>** It'll wipe all our balances ;\_;  
**\<rbrunner>** Back to the latest epoc date, that is  
**\<needmonero90>** (yes, I know, it's stagenet)  
**\<rbrunner>** Or a few thousands ...  
**\<M5M400>** are we in any way concerned about the probably 10x hashrate post fork and the amount of blocks being spit out quickly? might it be a good idea to set a ballpark initial diff?  
**\<hyc>** I'm guessing that will be offset by the typical hashrate drop due to not everyone updating  
**\<moneromooo>** I am not.  
**\<sech1>** I don't think so. It'll rather grow slowly.  
**\<rbrunner>** I think to remember from earlier forks that "doctoring" the diff is not trivial  
**\<sech1>** Even with higher hashrate from CPUs, hard fork drop in hashrate will make initial diff roughly the same as now  
**\<ferretinjapan>** I wouldn't be worried un less ASICs were currently saturating the network, but by the sounds of it, theres been no indication of that being the case...  
**\<M5M400>** I've seen a few big miners on the pool that are most likely CPU based. one instance of 17MH cn/r. these operations don't miss forks, as opposed to casual miners  
**\<sech1>** No signs of ASICs  
**\<ferretinjapan>** thats good.  
**\<rehrar>** alright, is there anything else of note to discuss?  
**\<ErCiccione[m]>** minor: is it fine for everybody if we take down the current warning on getmonero, it's there since last fork  
**\<needmonero90>** We need to talk about extending the Monero Foundation's Dev tax, and the Monero name trademark issue  
**\<ErCiccione[m]>** i want to avoid people not reading it because they are used to it when we put up the new one  
**\<needmonero90>** Oh wait wrong coin  
**\<needmonero90>** We good  
**\<hyc>** ErCiccione[m]: good idea  
**\<rbrunner>** Yeah, take it down before it gets a running gag or something  
**\<rbrunner>** "Monero mixes up its hardforks"  
**\<rehrar>** alright  
**\<ErCiccione[m]>** alright, will open a PR tomorrow  
**\<rehrar>** alright friends, it would seem we're all good  
**\<needmonero90>** Is Gui considered core?  
**\<needmonero90>** Or is it it's own thing  
**\<hyc>** dEBRUYNE: now that randomx has quieted down I'll get to rebasing that gitian PR of mine  
**\<ErCiccione[m]>** needmonero90:  that's actually a good question. See https://github.com/monero-project/meta/issues/384  
**\<selsta>** Please no renaming discussion.  
**\<selsta>** The github issue is a better place for that.  
**\<rehrar>** alright everyone, we'll officially break for today  
**\<rehrar>** thanks for coming. Good discussion, and got a lot done.  
**\<hyc>** who's posting meeting logs?  
**\<rehrar>** We can continue on a two weeks schedule for now? Or want to go to one week mini-check in on off weeks?  
**\<ErCiccione[m]>** hyc: el00ruobuob, usually  
**\<hyc>** ok.  
**\<hyc>** I think next mtg in 2 weeks is fine. after that, we can decide again  
**\<rehrar>** ok  
**\<ErCiccione[m]>** unles you didn't mean on getmonero  
**\<rehrar>** sounds good  
**\<dEBRUYNE>** hyc: Thanks  
**\<dEBRUYNE>** ErCiccione[m]: I'd prefer to update it with a general information thread regarding the upcoming fork  
**\<dEBRUYNE>** I can have that ready next week  
**\<ErCiccione[m]>** dEBRUYNE: sure! will you PR it on repo.getmonero?  
**\<IRC-Source\_89>** guys sorry for the question , but i missed the begining of the discussion... Have you already choosen a block height for the fork?  
**\<scoobybejesus>** tevador> btw, fork height could be 1978433, which is exactly the start of a RandomX epoch and should be in the afternoon CET on Nov 30th  
**\<dEBRUYNE>** ErCiccione[m]: Sure  
**\<scoobybejesus>** there seemed to be rough consensus on that  
**\<IRC-Source\_89>** thank you  
**\<ErCiccione[m]>** dEBRUYNE: great, thank you. Ping el00ruobuob\_ so he remembers to not PR it  
**\<dEBRUYNE>** I don't mind if he PRs it  
**\<ErCiccione[m]>** he usally PR them after more than one week, should be fine  
**\<dEBRUYNE>** Are we talking about the same thing? :P  
**\<dEBRUYNE>** I was referring to the new information thread regarding the fork  
**\<ErCiccione[m]>** I was talking about the logs :P i understood you wanted to include them in the thread.  
**\<ErCiccione[m]>** but anyway, we should really make a blog post about it.  
**\<sech1>** So will the schedule be officially announced soon?  
**\<rbrunner>** sgp\_ was fast: https://old.reddit.com/r/Monero/comments/d7twle/tentative\_monero\_015\_release\_schedule/  
**\<hyc>** sgp already announced it  
**\<dEBRUYNE>** sgp\_: Perhaps worthwhile to mention in the comments why there is a bit of a delay  
**\<sgp\_>** I don't know what happened with testnet  
**\<ErCiccione[m]>** el00ruobuob\_ ignore what i said earlier, we need the logs :P  
