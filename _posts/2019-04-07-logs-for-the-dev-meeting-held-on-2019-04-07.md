---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2019-04-07
summary: Point release discussions, and miscellaneous
tags: [dev diaries, core, crypto]
author: el00ruobuob / rehrar
---

# Logs  

**\<hyc>** so, no meeting today?  
**\<hyc>** gingeropolous: you there?  
**\<rehrar>** I know you gys had a meeting last week  
**\<rehrar>** but it was impromptu, correct?  
**\<rehrar>** if we want dev meetings to stay on the weeks that community ones are not, then it should be today, since community meeting is next week  
**\<rehrar>** we can do a short one if there's not much to discuss  
**\<rehrar>** thoughts hyc?  
**\<rehrar>** the choice is up to you  
**\<hyc>** short meeting is prob a good idea just to touch base  
**\<hyc>** see how the point release is shaping up  
**\<rehrar>** hyc has spoken  
**\<rehrar>** we'll wait until designated time  
**\<hyc>** would be good to get back onto regular schedule  
**\<dEBRUYNE>** I did kind of announce it on github :P  
**\<dEBRUYNE>** So not sure if it is impromptu  
**\<rehrar>** then I was just out of it that week and didn't notice  
**\<rehrar>** but I prefer to fault others than myself, so if you could take the blame dEBRUYNE I'd appreciate that  
**\<dEBRUYNE>** :D  
**\<hyc>** anything else for today's agenda?  
**\<rehrar>** 1. Greetings? :D  
**\<hyc>** oh yeah, I always forget the social conventions  
**\<rehrar>** 2. Point release items  
**\<rehrar>** moneromooo around? dsc\_ too  
**\<rehrar>** ping the other peoples  
**\<vtnerd\_\_>** hello  
**\<selsta>** GUI is almost ready for 0.14.1  
**\<rehrar>** bam, thanks selsta  
**\<rehrar>** and that will have Trezor, yeah?  
**\<selsta>** yes  
**\<rehrar>** I don't own one, so it's not a big deal for me, but I'll have an answer for people  
**\<rehrar>** anyone to do a quick update on Monero Core?  
**\<rehrar>** also, what is the name for the core software? Can we name it?  
**\<rehrar>** We've had this discussion a lot of times.  
**\<jwinterm>** monerod and monero-wallet-cli?  
**\<rehrar>** yes  
**\<rehrar>** alright, good talk everyone  
**\<sgp\_>** hello everyone  
**\<hyc>** point release doesn't get a new name  
**\<hyc>** it's still Bron Butterfly  
**\<hyc>** Boron  
**\<rehrar>** I meant monero core software hc  
**\<rehrar>** \*hyc  
**\<hyc>** oh  
**\<sgp\_>** More than the "daemon" and "CLI"?  
**\<hyc>** what's wrong with calling it core?  
**\<rehrar>** nothing, I guess. I just don't know that there's one thing that people agree on.  
**\<rehrar>** well, doesn't seem there's anyone around to update on Monero core  
**\<rehrar>** selsta: anything else on the GUI. When expected to be done?  
**\<rehrar>** if someone wants to update on core whenever they have the time, that'd be cool.  
**\<hyc>** looks like nothing else then  
**\<moneromooo>** By core, you mean the GUI or not the GUI ?  
**\<moneromooo>** It's confusing because some people mean not the GUI now.  
**\<dEBRUYNE>** the 'monero' repository I guess :P  
**\<ErCiccione[m]>** well, with rights, since the GUI was called monero-corefor long time  
**\<dEBRUYNE>** ^ moneromooo  
**\<hyc>** but it's called monero-gui now so ...  
**\<rehrar>** it made no sense that the GUI was ever called core  
**\<hyc>** god only knows why someone thought "hey let's make a gui but not call it the gui!"  
**\<dEBRUYNE>** I can give some further updates on the GUI once mooo is done with the core stuff :p  
**\<rehrar>** Can we all agree between us present that core means CLI tools and daemon?  
**\<ErCiccione[m]>** isn't just linked hyc? IIRC it should still take you to the GUI  if you look for monero-project/monero-core  
**\<rehrar>** and GUI means GUI?  
**\<jwinterm>** most applications with GUIs are not called by their function+GUI, probably  
**\<ErCiccione[m]>** i confirm monero-core still points to monero-gui  
**\<rehrar>** oof. I'll restart the conversation again on github issue or something in regards to naming  
**\<rehrar>** either way, moneromooo is it possible to tell us where point release is at for CLI/core stufs?  
**\<dEBRUYNE>** moneromooo: My intention was to let you go first :-P  
**\<hyc>** jwinterm: do you find that's true for apps that have both GUI and CLI? particularly if only a CLI existed for a long time?  
**\<moneromooo>** We've started merging stuff before the customary 10 days wait now. I expect we'll branch soonish.  
**\<moneromooo>** The only thing I know of that's really needed before a branch is the new fake out selection.  
**\<moneromooo>** And that's PRed.  
**\<moneromooo>** A few nice to have are the SSL changes, the second part of the RPC tests, and possibly the pay-for-service but I think that one's unlikely to happen now.  
**\<rehrar>** cool, thanks  
**\<ErCiccione[m]>** i will push some translations for the CLI next week, we should have a new language available (hindi)  
**\<moneromooo>** So if anyone wants something in before the branch, be fast.  
**\<moneromooo>** And this time, there should be lots of time for translations ^\_^  
**\<rehrar>** maybe I'll PR a pleasant message when opening the wallet so I can get a "contributor" flair or the reddits  
**\<selsta>** 19:13 \<rehrar> well, doesn't seem there's anyone around to update on Monero core \<-- All features are PRed, only missing review.  
**\<ErCiccione[m]>** moneromooo: yep, not complaining this time (yet) :D  
**\<rehrar>** nice  
**\<rehrar>** dEBRUYNE: all you  
**\<dEBRUYNE>** Let's see  
**\<hyc>** btw I hope #5376 makes it in this round, it'll be helpful for the solo mining code  
**\<jwinterm>** hyc: not too many apps spring to mind that meet that criterion  
**\<dEBRUYNE>** Like selsta said, we should be ready in time for 0.14.1.0  
**\<dEBRUYNE>** There will be a revamped history page as well as a revamped address book  
**\<dEBRUYNE>** Xiphon has also posted a ffs to work on some stuff such as optimizing the communication between the wallet and the daemon and implementing a decentralized remote node scanner -> https://repo.getmonero.org/monero-project/ccs-proposals/merge\_requests/55  
**\<dEBRUYNE>** For the latter feature, we'll have to wait a bit before nodes will start using the --public-node flag  
**\<dEBRUYNE>** Oh there will also be fiat pricing (the feature will be turned off by default)  
**\<dEBRUYNE>** And we've started discussing how to easily integrate i2p-zero and tor  
**\<dEBRUYNE>** ^ If anyone has suggestion on a design, feel free to list them  
**\<rehrar>** integrate in terms of design, yes dEBRUYNE ?  
**\<dEBRUYNE>** wrt i2p, I think the easiest would be the bundle the i2p binary with the GUI binary and then have a checkbox on the settings page to start it  
**\<dEBRUYNE>** Yeah  
**\<dEBRUYNE>** The new white theme may also be included in the point release btw (vid from dsc here -> https://www.youtube.com/watch?v=gTLNwRaoa4s)  
**\<rehrar>** ok  
**\<rehrar>** ooh, that's kind of cool  
**\<dEBRUYNE>** That's it basically :-P  
**\<rehrar>** cool  
**\<rehrar>** anything else from anyone?  
**\<rehrar>** I said we could keep it short. :)  
**\<hyc>** let's call it  
**\<xmrmatterbridge> \<rehrar>** Cool. Two weeks from now. Same time. See you all then.  
**\<xmrmatterbridge> \<rehrar>** Oh, those who have used the new CCS. How was it?  
**\<xmrmatterbridge> \<rehrar>** To donate or to put up a proposal?  
**\<ErCiccione[m]>** just quickly:  
**\<ErCiccione[m]>** The guide for the GUI is completed, thanks to el00ruobuob, it only needs to be built and translated, but it can be included with next release :)  
**\<ErCiccione[m]>** https://github.com/monero-ecosystem/monero-GUI-guide  
**\<ErCiccione[m]>** reviews and features/suggestions are always welcome  
**\<ErCiccione[m]>** rehrar: I think it's a great improvement in terms of usability for the community, still needs some tweaking, but i think it's a huge improvement  
**\<dEBRUYNE>** ErCiccione[m]: Doesn't the ecosystem repo already have the Monero heart logo btw? :P  
**\<ErCiccione[m]>** dEBRUYNE: yes, but i thought would be cool to have a personalized logo. I'd like the Ecosystem Project to grow with time  
**\<dEBRUYNE>** The hear tlogo kind of grew on me :-P  
**\<ErCiccione[m]>** eheh i can't deny i would miss it  
