---
layout: post
title: Logs for the Dev Meeting Held on 2019-03-03
summary: March 9th Network Upgrade, and miscellaneous
tags: [dev diaries, core, crypto]
author: el00ruobuob / rehrar
---

# Logs  

**\<xmrmatterbridge> \<rehrar>** 1. Greetings  
**\<xmrmatterbridge> \<rehrar>** Who all is out there?  
**\<rbrunner>** Hoy zäme  
**\<ErCiccione[m]>** Hi  
**\<sarang>** Here, partially (in two meetings at once)  
**\<rehrar>** So it's been a while since I led a meeting, but maybe you guys had some in my absence.  
**\<rehrar>** Even so, 2. What's been done since the previous meeting?  
**\<oneiric\_>** o/  
**\<rbrunner>** Don't think so. Last week was no one  
**\<rehrar>** Obviously the release of the CLI and the GUI is upcoming. I think we should kind of skip 2  
**\<rehrar>** or at least switch it  
**\<rehrar>** 2. Fork Items  
**\<rehrar>** Anything anyone wants to talk about regarding the upcoming fork?  
**\<rehrar>** it'd be great if we got fluffypony luigi1111 and moneromooo in here  
**\<moneromooo>** I am here.  
**\<moneromooo>** Not much to say about the fork I think.  
**\<moneromooo>** We're a bit busy atm with an exploit patch to come soon.  
**\<moneromooo>** Some jerk posted about it publicly so we have to release now.  
**\<moneromooo>** pony finishing up the version PR and we can go.  
**\<rehrar>** oof, ok.  
**\<rehrar>** anyone else have something they wanted to discuss regarding the fork? Questions? Comments?  
**\<sgp\_>** hello  
**\<ErCiccione[m]>** moneromooo: so, 0.14.0 will include the patch i guess  
**\<hyc>** moneromooo is too polite, "Some jerk" is too subtle  
**\<moneromooo>** Yes.  
**\<sarang>** Was it disclosed non-publicly first somewhere?  
**\<moneromooo>** On H1.  
**\<ErCiccione[m]>** alright  
**\<rbrunner>** Someone unrelated?  
**\<oneiric\_>** how long did it sit in h1 before the public asshattery?  
**\<moneromooo>** Well, I wouldn't know, but I think we can fairly assume so since the reporter was very nice and hlepful :)  
**\<rbrunner>** :)  
**\<moneromooo>** I saw it ~3 days after filed. That was... 2 days ago I think.  
**\<oneiric\_>** wow, yeah that is shitty  
**\<moneromooo>** Well, given I have no reason to think the jerk is the reported, that's unrelated.  
**\<kinghat>** what will the subsequent HF release be numbered and has there been talk on its timeline? 1m?  
**\<moneromooo>** \*reporter  
**\<moneromooo>** You mean not the one in a week ? We don't know yet.  
**\<oneiric\_>** true, weird that two independent parties would find the same bugs so close to each other  
**\<moneromooo>** From what I've been told, the jerk knew about it, and was keeping it for reasons unknown.  
**\<kinghat>** ya the one after mar 9  
**\<rbrunner>** The "jerk" stumbled over it a few months ago  
**\<oneiric\_>** ah, then extra shittiness  
**\<rbrunner>** Extra drama :)  
**\<oneiric\_>** seem to know a lot about what the jerk knew, was that disclosed in the public posting?  
**\<moneromooo>** But hey, we need reviewers :) Please, if you're a coder, feel free :)  
**\<moneromooo>** I was told about it like an hour ago...  
**\<moneromooo>** Maybe two.  
**\<oneiric\_>** by?  
**\<moneromooo>** Private.  
**\<oneiric\_>** k  
**\<moneromooo>** (that person might decide to say)  
**\<rbrunner>** https://github.com/ryo-currency/ryo-currency/blame/f698e11c88be33aaf89c316ac68baa0cb80a9c91/src/cryptonote\_core/blockchain.cpp#L1194  
**\<fluffypony>** it was posted in #monero-research-lab by unknownids\_ an hour and a half ago  
**\<moneromooo>** That's pretty much my patch (though that part will go up later, for october).  
**\<rehrar>** and what's the timeline for getting that patch out?  
**\<moneromooo>** (or whenever the next fork is decided to be)  
**\<rehrar>** ASAP?  
**\<moneromooo>** The wallet patch is going out as soon as pony's ready to merge and have a new release.  
**\<fluffypony>** also I don't think fireice\_uk is trying to be a jerk, I think he just cares very much about his altcoin, and he thinks that the only way it succeeds is for Monero to fail, so he bashes Monero every chance he gets. I can totally understand that approach. If I had the same set of facts, and told myself the same stories, then I might also reach the same conclusion.  
**\<fluffypony>** it's probably best if we just leave him to do his thing, mud-slinging in public isn't going to help anything  
**\<oneiric\_>** wounds run deep  
**\<hyc>** note that nobody invited the CN-GPU mudslinging  
**\<hyc>** they threw that into /r/monero all by themselves, twice  
**\<sgp\_>** imo, just remove it and move on  
**\<rbrunner>** It's more like a divorce story between him and us, with a common child still to keep caring fore (CryptoNight technology)  
**\<oneiric\_>** grand censor sgp\_ to the rescue  
**\<hyc>** since the vuln is now totally public why not also patch monerod now?  
**\<moneromooo>** Because it'd be a consensus change there.  
**\<moneromooo>** And lots of people are not going to update in time.  
**\<rbrunner>** But itsn't the whole think clearly consensus abuse?  
**\<rbrunner>** \*thin  
**\<rbrunner>** \*thing  
**\<moneromooo>** Not really.  
**\<moneromooo>** It's a bit of a grey area here I think.  
**\<rbrunner>** Ok  
**\<moneromooo>** It can be consensus rejected, since there's no good reason to allow it. And will be later.  
**\<fluffypony>** it's trivially done as a soft-fork  
**\<fluffypony>** (since, as long as miners don't mine these coinbases, they don't exist)  
**\<rehrar>** well all of this is a bummer anyhow. thank you moneromooo for being on top of this and working on it so quickly  
**\<moneromooo>** Are you saying you'd rather add the daemon side of the patch now too ?  
**\<moneromooo>** Thanks to the reporter too, the report was very clear and detailed :)  
**\<fluffypony>** moneromooo: no, we don't really have a soft-fork voting system in place, so more engineering effort than it's worth right now  
**\<moneromooo>** k  
**\<hyc>** if the binaries are going to be available ASAP, why not. we still have 1 week to go.  
**\<fluffypony>** hyc: I don't think it's a good idea this close to the fork, especially since it's trivially patched at the wallet level  
**\<hyc>** ok  
**\<rehrar>** so just roll this in with 0.1 along with a lot of the other big upgrades, which should get most people to upgrade?  
**\<moneromooo>** BTW, once it's patched, if many people can rescan their wallets and make sure all is A-OK, that'd be great :)  
**\<moneromooo>** Since this is so close etc.  
**\<ErCiccione[m]>** could it be included in next release? people aleady know it's about too happen and should be soon enough.  
**\<fluffypony>** rehrar: we don't have a soft fork mechanism in place right now, and I don't think it's worth the engineering effort between now and the 0.14.1 release  
**\<fluffypony>** I totally support adding such a mechanism for future things  
**\<rehrar>** so then we're playing this by ear then? Or can you elaborate on the process?  
**\<moneromooo>** Soft fork just means people on the wrong side get orphaned and it stil works, right ? So no need for any further code ?  
**\<rehrar>** basically, how will this patch practically get out to the masses?  
**\<rehrar>** what's the timeline?  
**\<fluffypony>** moneromooo: you need the fork to activate once some threshold of miners are voting to say they are ready for the new minor version  
**\<fluffypony>** rehrar: it'll be part of 0.14.0.1, which will be the version included with the GUI  
**\<fluffypony>** and will be the point release we'll put out ASAP  
**\<rehrar>** ok  
**\<rehrar>** understood, thank you.  
**\<rbrunner>** So the GUI will arrive a few days later than planned, I guess?  
**\<fluffypony>** rbrunner: yes  
**\<rbrunner>** No problem yet  
**\<rehrar>** is there anyone from the GUI here? dEBRUYNE? medusa\_?  
**\<rehrar>** dsc\_?  
**\<ErCiccione[m]>** or selsta  
**\<ErCiccione[m]>** AFAIK GUI is tagged and ready to be built  
**\<selsta>** yes  
**\<rehrar>** yeah, I'd just like to hear a mini-report if someone wanted to give it  
**\<rehrar>** it can get into the meeting logs and normies can review them alter for funsies  
**\<selsta>** https://github.com/monero-project/monero-gui/releases/tag/v0.14.0.0  
**\<ErCiccione[m]>** most important thing is that looks and feels great  
**\<ErCiccione[m]>** the new wizards and mode are great  
**\<rehrar>** ok, great  
**\<ErCiccione[m]>** you can get the binaries from buildbot in my last PR, which was the last one with all the translations  
**\<ErCiccione[m]>** https://github.com/monero-project/monero-gui/pull/1991  
**\<rbrunner>** Nice  
**\<rehrar>** Was there any other comments about the lead up to this fork at all? GUI? CLI? Testing? Other?  
**\<selsta>** sorry, I’m kinda busy. Basically what ErCiccione[m] said. Release notes that I posted above are a good overview of what’s new.  
**\<rehrar>** Ok.  
**\<rehrar>** is needmoney90 around? He wanted this meeting and had something to say, as I recall  
**\<needmoney90>** Hey there  
**\<rehrar>** ^ this kid  
**\<needmoney90>** tat: you there?  
**\<oneiric\_>** ...  
**\<needmoney90>** The kraken Dev was supposed to be here, but I may have missed mentioning it  
**\<needmoney90>** I believe they were all on board though  
**\<needmoney90>** After chatting  
**\<needmoney90>** So it may not be necessary  
**\<rehrar>** ok, well  
**\<rehrar>** If there's nothing else, I think we can conclude here.  
**\<rehrar>** Should we have another informal meeting next week after the fork occurs, just in case?  
**\<tat>** @needmoney90 i am here  
**\<oneiric\_>** hats will be on fire, grab the buckets rehrar  
**\<needmoney90>** Oh perfect  
**\<rehrar>** ok, ceding the floor again to tat and needmoney90 real fast  
**\<moneromooo>** (I'll have one more point actually when they're done)  
**\<needmoney90>** Tat, for the logs, let's talk quickly about the timeline for payment ID deprecation, and Kraken's needs here  
**\<rehrar>** ok, sure  
**\<needmoney90>** Difficulty of implementation, how long you feel is reasonable before deprecating, etc  
**\<sgp\_>** expect a Github issue from me soon-ish on how to handle public pool output selection in the wallet. I expect this to be non-controversial, but keep an eye out for the discussion  
**\<sgp\_>** this would only apply for the public pool wallet specifically  
**\<needmoney90>** We don't want to rush the deprecation, but improving privacy is one of our primary goals, and we cannot wait forever  
**\<tat>** well, i think going to deprecate them by the fork in october is very reasonable, and informing people about clear decisions 6 month ahead would be great also from a users perspective, to make the transformation as smooth as possible  
**\<moneromooo>** Is that about short or long ones ?  
**\<tat>** i will say both, if you guys go for that, either way, 6 month is a good window  
**\<sarang>** Also please be very clear about wallet deprecation vs something like a consensus ban  
**\<rehrar>** have you guys toyed with the idea of moving to subaddresses?  
**\<sarang>** The talk about \_how\_ to wallet-deprecate in GUI and CLI has also been more contentious than I had expected  
**\<rbrunner>** There is nothing else to move to, no?  
**\<moneromooo>** Long ones have been warned about since last fork in the wallet.  
**\<moneromooo>** So it's deprecated in my book :)  
**\<moneromooo>** So yes, clear definitions will help.  
**\<sgp\_>** moneromooo: yes, long are "soft" non-consensus deprecated with the 0.14 update. Moreso than before  
**\<sarang>** Some argued that "deprecated" in GUI should mean "only available via a special flag or crazy advanced option", but others said it should mean "available by a simple toggle on a main page"  
**\<sarang>** IMO the latter option is not a deprecation at all  
**\<sgp\_>** the latter is what MyMonero and others do  
**\<moneromooo>** Well, you can't run: firefox --long-payment-id-support so... :)  
**\<fluffypony>** not yet  
**\<needmoney90>** When Firefox partnership  
**\<sarang>** If it's easy to use, then we really haven't deprecated anything  
**\<dEBRUYNE>** fluffypony: As a side note, did you start the GUI builds already?  
**\<sarang>** saying "plz don't use" is what we have already  
**\<fluffypony>** dEBRUYNE: yes, but I killed them already when this came out  
**\<fluffypony>** s/came out/was disclosed  
**\<sgp\_>** sarang: I think we should focus on consensus deprecation. The other wallets are mostly out of our control  
**\<sarang>** I also support (at least temporary) consensus ban, but I know this is not a popular opinion  
**\<dEBRUYNE>** Because you want them to include the fix or?  
**\<dEBRUYNE>** The fork is only 6 days away and presumably the fix won't be posted until 6 march  
**\<dEBRUYNE>** Add to that 1 day of building  
**\<dEBRUYNE>** We can't release a binary 2 days in advance imo  
**\<rbrunner>** I think the fix is "ASAP" now  
**\<rbrunner>** After that very public disclosure  
**\<rbrunner>** And nice explanation how to exploit :)  
**\<moneromooo>** The fix is up. 521[67]  
**\<fluffypony>** plz review  
**\<rehrar>** coo'  
**\<moneromooo>** I'll have to be out for like 40 minutes maybe. Please test (ie, rescan\_bc), and let me know if anything breaks.  
**\<rehrar>** moneromooo, you said you had something real quick, yeah?  
**\<moneromooo>** Yes:  
**\<moneromooo>** for some time now, guidov has been asking me about the new FFS, and I've been giving the poor guy the old runaround, with "it's ready, just needs to be pushed to live".  
**\<moneromooo>** (sorry guidov :P)  
**\<rehrar>** I have set up a meeting with Shay to meet with fluffypony tomorrow and finish this up  
**\<moneromooo>** He's offering to make new fuzz tests and have them run on google infrastructure.  
**\<rehrar>** it is semi-live right now and you can view it at ccs.getmoenro.org  
**\<sarang>** I noticed an HTTP link to the CCS wasn't redirected  
**\<binaryFate>** moenro ftw  
**\<fluffypony>** Mo-Enro  
**\<moneromooo>** I think this would be a very good thing because the only fuzz tests we have are the ones I've written, and they're not routinly run. And I'm not a fuzz test master at all.  
**\<rehrar>** there's just one bug with the generation of the donation pages being a little funky, and that requires access to the server, which only pony does  
**\<rehrar>** hopefully we can work that out by tomorrow  
**\<rehrar>** Be warned Ricarrrod, I have you tomorrow for a bit  
**\<moneromooo>** He also said he could do the fuzz tests for free, but report anything they find to H1 for bounties.  
**\<dEBRUYNE> \<rbrunner>** I think the fix is "ASAP" now <= If the fix is about to be reviewed + merged soon I guess it is okay  
**\<dEBRUYNE>** fluffypony: will you resume GUI builds once the fix is merged into the branch?  
**\<rehrar>** a thousand apologies for the delay moneromoooo  
**\<moneromooo>** So what to do is community preference, but having comprehensive fuzz tests running all the time would be great IMHO.  
**\<moneromooo>** I just wanted it out before he gets bored and walks away ^\_^  
**\<binaryFate>** yes we want we want  
**\<rehrar>** I say if tomorrow proves to be a bust for some reason, then have him do H1  
**\<fluffypony>** dEBRUYNE: no, I have to build binaries  
**\<fluffypony>** for CLI  
**\<rehrar>** if tomorrow is not a bust (fingers crossed) then you believe me, I will be screaming to every Monero IRC chat channel that it's live  
**\<rehrar>** so people will leave me alone :D  
**\<moneromooo>** For the record, he's already postred a H1 report, which is all fixed, but unreleased yet, because it'll be after the fork (no consensus bug, no money poppoing up in wallets, etc, don't worry).  
**\<sarang>** Is there a mechanism in place to prevent DoS generation of subaddresses?  
**\<moneromooo>** Not really.  
**\<sarang>** OK, we should expect such a thing then  
**\<moneromooo>** Feel free to file a bug about it's not forgot.  
**\<sgp\_>** tat: can you speak to what the upgrade timeline for you to move to subaddresses looks like?  
**\<dEBRUYNE>** fluffypony: Ok, could you give me a timeline on the GUI though?  
**\<fluffypony>** dEBRUYNE: as soon as the CLI bins are out I can start on the GUI bins  
**\<fluffypony>** re-start  
**\<dEBRUYNE>** All right  
**\<dEBRUYNE>** ty  
**\<rehrar>** bye moneromooo  
**\<moneromooo>** (yes, I tested it too)  
**\<rehrar>** and unless anyone has anythign else, we can call it here  
**\<rehrar>** discussion can, of course, continue to take place  
**\<rehrar>** informal meeting next week  
**\<rehrar>** just to check up on fork stuff progress  
**\<rehrar>** thanks for coming everyone. Have nice lives.    
