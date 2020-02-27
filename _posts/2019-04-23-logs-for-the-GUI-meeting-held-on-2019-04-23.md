---
layout: post
title: Logs for the GUI Meeting Held on 2019-04-23
summary: Pending PRs, Issues, past week development, coming week development and miscellaneous
tags: [gui, dev diaries]
author: el00ruobuob / dsc
---

# Logs  

**\<dsc\_>** Meeting started  
**\<dsc\_>** Welcome all  
**\<dsc\_>**  I plan to do this every week since development is going so fast nowadays, we'll have a chance to reflect on what has been worked on, what is being worked on and what should be worked on and also what should not be worked on. Greetings to all who showed up.  
**\<dsc\_>** Yes, I copy pasted that  
**\<selsta>** hi  
**\<xiphon>** hi  
**\<dsc\_>** hi  
**\<ErCiccione[m]>** Hello  
**\<dsc\_>** - Discuss pending PRs  
**\<dsc\_>** Seeing as release is soon, we should merge current PRs ASAP, in addition also rebase & merge all PRs that have [Qt 5.9] in the title, in light of pigeons success regarding updating the buildbots. After this is done, we have time for testing and translations.  
**\<dsc\_>** From my side of things, for this release I want to include my IPC PR (both #2029 and #2041 from rbrunner), the white-theme PR and the wallet explorer PR (#2068) and all PRs marked Qt 5.9.  
**\<ErCiccione[m]>** yay  
**\<dsc\_>** If anyone wants to discuss any particular PR in-depth, go for it.  
**\<selsta>** I think QR code stuff should not be included in the next release.  
**\<selsta>** Not enough time to test this.  
**\<selsta>** Also requiring buildbot changes.  
**\<selsta>** (#1816)  
**\<ErCiccione>** I agree with selsta. A lot of changes will go in for this release already, and some big ones are not merged yet.  
**\<dsc\_>** Yes that one is tricky. We already have enough on our plate  
**\<dsc\_>** lets summon luigi while we're at it  
**\<dsc\_>** .summon  
**\<xmr-pr>** luigi1111 luigi1111w luigi1113 luigi1112 luigi1114 ༼つ ◕\_◕ ༽つ  
**\<dsc\_>** Could you merge current list, soon? Thanks  
**\<dEBRUYNE>** selsta: What kind of buildbot changes does 1816 require?  
**\<selsta>** dEBRUYNE: zbar library has to get installed and to get 1816 to build on macOS seems hacky.  
**\<dEBRUYNE>** Ah I see, let's not merge that then  
**\<selsta>** see https://github.com/monero-project/monero-gui/pull/1816#issuecomment-448998772  
**\<dEBRUYNE>** Should we merge the QT 5.9 PRs?  
**\<selsta>** yes  
**\<dEBRUYNE>** Pigeons had success on the Linux buildbots, but has yet to finalize building on mac os x and windows  
**\<dsc\_>** Should not matter imo, we should merge so we have some time to test properly  
**\<xiphon>** yep, pigeons provided me an access to mac buildbot, i will take a look  
**\<dsc\_>** Seeing as buildbots will be migrated sooner or later  
**\<dsc\_>** thanks for your help on this BTW xiphon  
**\<dEBRUYNE>** Ok, then let's add the ones that are ready and reviewed to the merge list  
**\<dsc\_>** dEBRUYNE: I propose to first get rid of the current list  
**\<dsc\_>** Due to the rebases that will are required for the Qt 5.9 PRs  
**\<dsc\_>** .merges  
**\<dsc\_>** already quite long  
**\<dEBRUYNE>** Ah right  
**\<dEBRUYNE>** Perhaps we should try to semi code freeze at the end of this week?  
**\<dEBRUYNE>** i.e. ensure all necessary PRs are merged and then test a lot  
**\<dsc\_>** Yes, assuming luigi has time to merge today and tomorow  
**\<dsc\_>** if luigi is busy we might not make end of week  
**\<ErCiccione>** Yes please. Longer it is, happier i will be :D  
**\<ErCiccione>** there is also the GUI guide to update after all the merges  
**\<dsc\_>** Next agenda item?  
**\<dsc\_>** - Discuss pending issues  
**\<dsc\_>** as in, github issues.  
**\<selsta>** Anyone experienced https://github.com/monero-project/monero-gui/issues/2074 ?  
**\<dsc\_>** We're you using the debugger from within QtCreator?  
**\<dsc\_>** Never happened to me  
**\<selsta>** No debugger.  
**\<dsc\_>** I want to discuss https://github.com/monero-project/monero-gui/issues/2024  
**\<luigi1113>** so much text  
**\<dsc\_>** https://twitter.com/Ben\_Sharp\_/status/1119273759125299200  
**\<dsc\_>** Complaint from some is "dark mode is to dark"  
**\<dsc\_>** Discuss.  
**\<dsc\_>** too dark\*  
**\<dsc\_>** Also, the question wether or not we'd want white theme as a default  
**\<dEBRUYNE>** I wonder whether it would be futile to try to find the right shade of dark whilst we have a white theme  
**\<charuto>** i'd like it even darker tbh  
**\<dEBRUYNE>** Most websites use white as default, black (night) as option  
**\<dEBRUYNE>** ^ dsc\_  
**\<dsc\_>** True  
**\<ErCiccione>** I think people got used to the black theme now. I would keep that as default  
**\<xiphon>** i would like dark theme as default  
**\<dsc\_>** Personally I'd like the black theme to be default, but I'd like to see what others think.  
**\<dEBRUYNE>** I am kind of ambivalent :P  
**\<dsc\_>** Ok. As for that Github issue. a redesign will take up loads of resources. That's why I did not comment there.  
**\<selsta>** White theme should get some feedback first. We can decide in a later release if we want it to be default.  
**\<dsc\_>** But I applaud any effort in thinkering with new designs  
**\<selsta>** There are some ideas we can use from #2024 though.  
**\<dEBRUYNE>** I think a full redesign is too time consuming and too risky  
**\<selsta>** ^  
**\<dEBRUYNE>** But like selsta said, we can indeed reuse some stuff  
**\<dEBRUYNE>** make use of\*  
**\<dsc\_>** Yes, lets keep #2024 in mind going forward  
**\<dsc\_>** After we've cleared the pending PRs, we should relook at the issues, I think we can close a few  
**\<dsc\_>** ErCiccione: Are you still making an effort to report our binaries to anti-virus vendors?  
**\<ErCiccione>** dsc\_: I stopped when all of them basically replied "our system catch it, so it's malware". Also, with the cli now having the background miner option as default, i see even more difficult to get delisted from their lists  
**\<dsc\_>** Hmm, was afraid of that. Please update #1747 and/or close the issue :)  
**\<ErCiccione>** I think the only way to not get flagged would be to remove the miner from the GUI, or detach it somehow  
**\<moneromooo>** Maybe we can detect those and report them to the user as crapware.  
**\<moneromooo>** Fair's fair/.  
**\<xiphon>** I think the only way to not get flagged would be to remove the AV  
**\<ErCiccione>** dsc\_: will do.  
**\<dsc\_>** moneromooo: Agreed 100%  
**\<dsc\_>** ridiculous stuff  
**\<dEBRUYNE>** Speaking of background mining, anyone know how to disable it? https://bitcointalk.org/index.php?topic=583449.msg50721098#msg50721098  
**\<ErCiccione>** yeah, lots of big ones tho  
**\<moneromooo>** So next time someone asks, please ask them to list a file specific to that AV. I'll add some code to check and warn if found.  
**\<xiphon>** moneromooo: doesn't make a sense  
**\<xiphon>** your binary won't run  
**\<xiphon>** if the user have the AV that reports this binary  
**\<moneromooo>** Ah, it sees it before it gets run ? That's annoying indeed.  
**\<kinghat>** i think the gui should match the website, so light theme and dark theme option. i only use dark themes if theres an option btw.  
**\<ErCiccione>** some do, yes, but not all of them  
**\<ErCiccione>** (for the records: the issue about AV: https://github.com/monero-project/monero-gui/issues/1747)  
**\<dsc\_>** I guess it's a bad idea to have some code in main{} that checks the integrity of the local installation, in order to detect if files imperative to GUIs/CLIs operation have been altered or quarantined, which implies AV fucked with it.  
**\<moneromooo>** Then maybe we can piss them off by making a "warning" page in the GUI to warn people not use this list of shit AVs ^\_^  
**\<dsc\_>** Bad idea in the sense that you don't want to waste time on creating such a mechanism.  
**\<dEBRUYNE>** moneromooo: Yes, files get quarantined upon extraction of the binaries (according to users)  
**\<xiphon>** i think we shoun'd not care about this particular issue  
**\<moneromooo>** I don't mind spending time writing code that pisses off assholes.  
**\<xiphon>** AV behaviour is not under our control  
**\<ErCiccione>** xiphon: i disagree. It's bad UX  
**\<xiphon>** it is bad AV  
**\<xiphon>** is not our issue  
**\<dsc\_>** It is \*kinda\* our issue, as dEBRUYNE has to deal with users with an incomplete installation  
**\<dsc\_>** but we should ignore this issue anyhow  
**\<dEBRUYNE>** Sure, but there is little we can do at this point :P  
**\<ErCiccione>** btw, that list of AVs is from november, don't know how the situation is now with the last binaries  
**\<moneromooo>** Oh, it only removes part of the code ?  
**\<dsc\_>** Yes only certain files AFAIK.  
**\<dEBRUYNE>** Yeah not all of them  
**\<selsta>** AV on macOS blocks it completely.  
**\<moneromooo>** Is there a list of what it removes and does not remove ?  
**\<dEBRUYNE>** Tbh I think it gets quarantined due to integrated miner, but not entirely sure  
**\<dEBRUYNE>** moneromooo: differs per av -\_-  
**\<moneromooo>** I could do with a list for all.  
**\<xiphon>** Any AV works on the file basis  
**\<ErCiccione>** dEBRUYNE: yes, it's definitely the miner. That's what i was told when i contacted many AV companies (details in the issue)  
**\<moneromooo>** So we'll have a binary that just does the check, then runs the main one.  
**\<xiphon>** so it removes the whole binary file it thinks is a malware  
**\<xiphon>** yep, that would work  
**\<moneromooo>** and if they remove THAT one, it'll obviously look bad since it's just a "warn about crapware" one ^\_^  
**\<xiphon>** but i realyl a bad idea  
**\<moneromooo>** I'm not asking you to do it of course, I will :)  
**\<xiphon>** it will still complicate the stuff no matter who will do that  
**\<selsta>** Probably best to add a warning on the download page.  
**\<selsta>** And not bother further.  
**\<dEBRUYNE>** I have to agree with xiphon here  
**\<dEBRUYNE>** selsta: Yeah perhaps a popup on the website that links to the guide I created  
**\<dsc\_>** AV: waste precious CPU cycles on placebo protection. Enrich your desktop experience with totally-not-annoying popups.  
**\<ErCiccione>** dEBRUYNE> fwiw there are warnings in the GUI guide as well, we could be more verbose or integrate your guide.  
**\<dEBRUYNE>** Both should work too :P  
**\<ErCiccione>** True :)  
**\<dEBRUYNE>** Can we talk about #2100 for a bit?  
**\<dsc\_>** Go for it  
**\<dEBRUYNE>** I quite like it, but my only worry is that the DNS involved causes some issues on startup  
**\<dEBRUYNE>** In the past, we had it enabled and, for some users, the GUI would show a black screen upon startup  
**\<dEBRUYNE>** Relevant issue -> https://github.com/monero-project/monero-gui/issues/761  
**\<dsc\_>** Someone needs to test #2100. I'm not sure how to. The DNS check always returns empty for me.  
**\<dsc\_>** I can, however, confirm it does indeed do a DNS request  
**\<dsc\_>** and it always has done this, in the past, as long as I can remember  
**\<dsc\_>** I just never saw that popup  
**\<xiphon>** #761 doesn't seem to be DNS - related  
**\<dEBRUYNE>** Because it was disabled  
**\<dsc\_>** it was never disabled  
**\<dsc\_>** Unless it was disabled over at core (wallet api)  
**\<dsc\_>** which afaik. it has not  
**\<dEBRUYNE>** What is this PR doing then? https://github.com/monero-project/monero-gui/pull/777  
**\<dEBRUYNE>** :-P  
**\<dsc\_>** That PR disables a message handler registration :P  
**\<dsc\_>** which is logging related  
**\<dEBRUYNE>** I see  
**\<dsc\_>** Regardless I will look into it, it's a feature that should work properly. Regarding #2100, what do you think about linking directly to the site?  
**\<dEBRUYNE>** Is the link actually clickable?  
**\<dsc\_>** Does not seem so.  
**\<dEBRUYNE>** should we make it clickable?  
**\<dsc\_>** Hmm yeah, I'm wondering that.  
**\<dsc\_>** We can decide later. If nobody looks at #2100 I will, but I don't think it will make next release.  
**\<dsc\_>** Ill prioritize it  
**\<dsc\_>** Next agenda point, before people fall asleep  
**\<dsc\_>** - Discuss developments past week  
**\<dsc\_>** Past week I've been working 1) a CMake recipe (I'm stuck) 2) Support for database pruning 3) Updating `qml-xmr` to work with our latest changes 4) Kneuffelbund's new seed page for in the wizard (Japenese layout).  
**\<dsc\_>** Anyone have an update what he/she has been working on?  
**\<ErCiccione>** all translations for the GUI are reviewed and merged on Pootle. I'm waiting for the next big round of merges, then i will make a call for translators  
**\<ErCiccione>** as i said before, would be great to have the mergeable merged asap, so to have time to review/submit translations and update the guide  
**\<ErCiccione>** for the distracted, the guide is here: https://github.com/monero-ecosystem/monero-GUI-guide  
**\<ErCiccione>** and help is always appreciated :)  
**\<selsta>** I’m currently only reviewing PRs.  
**\<xiphon>** was looking into hardware wallet restorate height bug (already sent a PR)  
**\<xiphon>** s/restorate/restore  
**\<dEBRUYNE>** dsc\_: Including it in the next release seems a bit hasty, yes, as we've had issues with it in the past  
**\<dEBRUYNE>** Therefore it needs to be thorougly checked and tested  
**\<dsc\_>** Ok guys  
**\<dsc\_>** Next agenda point would be developments for the coming week, but it is clear, that is, we go into ship-mode and merge all the things.  
**\<dsc\_>** and test afterwards.  
**\<dsc\_>** I call the meeting finished  
**\<dsc\_>** thanks  
**\<dsc\_>** ErCiccione: It could occur that we merge after you've already started translations, please don't get mad :-P  
**\<xiphon>** Ah, almost forgot to mention  
**\<xiphon>** Had an idea regarding the issue with exchanges the still use long payment id  
**\<ErCiccione>** if it's not big stuff i will be just moderately mad. Will pray the gods of the code freeze once again :P  
**\<xiphon>** Have to say that i don't like the approach, but still want to mention it  
**\<xiphon>** We can hardcode the deposit addresses of the exchanges that are using long payment ids  
**\<xiphon>** And warn a user or explicitly show the pamyne id field for that addresses  
**\<dsc\_>** What if those exchanges have a pool of wallets?  
**\<xiphon>** It  will still be an improvement  
**\<xiphon>** Even if we don't catch all the cases  
**\<selsta>** I thought about this too while doing the PID in description PR but I’m not sure if it would be a good idea to do address specific code.  
**\<xiphon>** think they don't use multiple wallets, but i didn't check that  
**\<dsc\_>** It's not a bad idea xiphon, in the sense that it is a bad idea, but I would approve such PR  
**\<xiphon>** yeah, like i said, i don't like to have a particular service - specific code (hardcoded lsit of deposit addresses to check though), but it might somehow improve the situation with missing deposits until long payment ids get consensus banned  
**\<dsc\_>** Would this be something you could pick up or would you rather have someone else research those addresses and implement it?  
**\<dsc\_>** In any case, feel free to create an issue  
**\<xiphon>** Which services still use long payment ids? Bittrex, binance, and other?  
**\<dsc\_>** xmr.to I think/  
**\<xiphon>** "would you rather have someone else research those addresses" \<- at least this  
**\<xiphon>** i'm fine with implementing it  
**\<moneromooo>** Tippero :D  
**\<selsta>** xmr.to uses integrated or subaddress  
**\<ErCiccione>** is Tippero still alive?  
**\<dsc\_>** selsta: Ha! busted.  
**\<dsc\_>** Why are you selling Monero?  
**\<dsc\_>** (joking :P)  
**\<moneromooo>** Yes, I just checked.  
**\<scoobybejesus>** dsc\_> Complaint from some is "dark mode is too dark"   \<\<\< FWIW, i agree.  black and white are both harsh/extremes. instead of white and black themes, i'd suggest light and dark. could potentially avoid inverting images across themes by doing so.  
**\<selsta>** dsc\_: :P  
**\<xiphon>** moneromooo: what are your thoughts on having such a temporal check in the monero core wallet codebase?  
**\<xiphon>** that way both cli and gui wallets will act the same in this case  
**\<xiphon>** or we can expect that monero cli users are more experienced that gui users and have this check only in the gui code  
**\<xiphon>** s/that/than  
**\<moneromooo>** What temporal check ?  
**\<moneromooo>** You mean checking a list of known addresses that want a long payment id ?  
**\<xiphon>** yep  
**\<moneromooo>** I think it's a bit shit but maybe the lesser evil.  
**\<moneromooo>** Though we already talked about this long ago and did not do it, so...  
**\<xiphon>** alright, i think we can do this only on the gui side
