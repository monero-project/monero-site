---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-08-20
summary: Discussion of open PRs and issues, RuffCT, mobile wallets, upcoming release + scheduled protocol upgrade, dedicated hardware wallet, and miscellaneous
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Overview  

An overview can be found on [MoneroBase](https://monerobase.com/wiki/DevMeeting_2017-08-20).  

# Logs  

**\<fluffypony>** 1. Greetings  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<fluffypony>** 4. Any additional meeting items  
**\<fluffypony>** 5. Confirm next meeting date/time  
**\<fluffypony>** rehrar can do it next time :)  
**\<rehrar>** I can, sorry for the confusion  
**\<fluffypony>** 1. Greetings  
**\<fluffypony>** can all the people who aren't here just say nay  
**\<fluffypony>** :-P  
**\<hyc>** neigh  
**\<surae>** we never get past this part :  
**\<fluffypony>** it's a fun part  
**\<fluffypony>** we can move on to 2  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** I guess the big thing is that we've branched  
**\<surae>** well  
**\<surae>** from MRL  
**\<surae>** we got contacted by RingCT2.0 people, and we got contacted by a rsearcher named Tim Ruffing, each of them presenting improved set-ups for our current implementations  
**\<surae>** not sure if I should just jump in or what..  
**\<dEBRUYNE>** Yeah go ahead  
**\<hyc>** sure, go  
**\<surae>** ok so  
**\<surae>** I have a .txt file describing the pseudocode of Ruffing's sublinear ring sig + CT set-up  
**\<surae>** knaccc has been going through it and implementing it in Java  
**\<surae>** we have a surprising amount of it debugged  
**\<hyc>** \^ note, we're walking away from the RingCT2.0 stuff because it requires a trusted setup  
**\<surae>** Ah, I didn't look into it because Ruffing's doesn't have a trusted set-up or any "new" crytpo. it just doubles all our key lengths  
**\<iDunk>** surae: fpaste.org or pastebin.mozilla.org  
**\<sn0wmonster>** has the meeting started?  
**\<endogenic>** yes  
**\<sn0wmonster>** where does it say it started? jesus  
**\<surae>** iDunk is 0bin not good enough? :P  
**\<iDunk>** It requires java.  
**\<iDunk>** js actually  
**\<moneromooo>** I think it needs to be encrypted due to agreement with Tim Ruffing.  
**\<surae>** oh i didn't realize that  
**\<DaveyJones>** surae ... the mooo wants javaless paste  
**\<surae>** moneromooo no, just habit  
**\<surae>** ok one sec  
**\<moneromooo>** Oh, ok. I'm dying to see it then :D  
**\<moneromooo>** ty  
**\<surae>** we are in the midst of debugging knaccc's java code  
**\<dEBRUYNE>** surae: Could you perhaps give an ELI5 (for anyone that reads the logs later) how RuffCT will improve our protocol?  
**\<surae>** well, roughly, (ruffly)  
**\<knaccc>** lol  
**\<surae>** signature sizes are O(N) right now. So signature sizes take up "as much space" as the number of public keys implicated in the signature  
**\<surae>** Ruffing's set-up, for N=n\^m, has signature sizes O(n\*m). Verification and computation *it appears* to be on the same order. so, for example, to sign a ring signature with N=10\^17 signers, which is freaking absurd, you would need "as much space" as 10*17 = 170  public keys  
**\<surae>** there are constants and stuff, so it's not exact, but at the very least, Ruffing's set-up is looking at really absurdly large ring signatures  
**\<hyc>** ... without taking absurdly large amount of space  
**\<surae>** with a set-up like this, there should be no good reason to not simply sign every transaction with the top half of the blockchain every time  
**\<surae>** or taking absurdly large amounts of time to verify or compute  
**\<dEBRUYNE>** So we can easily use ring size 100k for instance?  
**\<dEBRUYNE>** Or even higher  
**\<hyc>** even higher  
**\<fluffypony>** EVEN HIGHER  
**\<surae>** assuming his set-up actually works (the math seems tight) and assuming his security proofs hold up (I am going to try to make independent security proofs and then later compare them), and after six months to a year of testing, etc etc  
**\<surae>** i mean  
**\<JollyMort[m]>** UNLIMITED RINGSIZE  
**\<endogenic>** fluffypony: what does the scouter say about monero's ringsize level?  
**\<moneromooo>** log(infinity) is infinity...  
**\<surae>** in a certain sense, this is like an alien came down and gifted us faster than light travel. yeah, we can go out there and start traveling around, but we have to consider consequences for the timeline. :P haha  
**\<fluffypony>** endogenic: I give up?  
**\<endogenic>** it's over 9000  
**\<fluffypony>** lol  
**\<DaveyJones>** the puns are ruff today  
**\<fluffypony>** also to add to what surae's said  
**\<moneromooo>** Would be need (pretty much) all pubkeys/commitments in RAM all the time, in order to verify such sigs ?  
**\<moneromooo>** Or can some precomp be done ?  
**\<fluffypony>** multisig isn't baked in right now, it would need to be re-done from scratch  
**\<rehrar>** the room fell silent  
**\<hyc>** I'll precompute it all for ya. trust me.  
**\<dEBRUYNE>** fluffypony: Are we certain it has to be re-done from scratch or would it possible to just tweak the current implementation?  
**\<surae>** moneromooo the signature itself only uses the commitments from the column of the signer  
**\<fluffypony>** dEBRUYNE: we're certain  
**\<dEBRUYNE>** k  
**\<DaveyJones>** fluffypony - can it be dual run like pre-ct and ring-ct till the fork?  
**\<dEBRUYNE>** I think we shouldn't forego the current implementation, because we're already quite far in  
**\<surae>** debruyne the shen-luigi multisig set-up which is a version of the schnorr multisig, might lead us to a similar set-up for RuffCT, but it's not a simple gluing like one would hope  
**\<dEBRUYNE>** In addition, it may take a year before RuffCT is actually implemented  
**\<DaveyJones>** so that we could keep luigi ms till ruff ms is done ?  
**\<dEBRUYNE>** And even longer before we have a multisig that is compatible with ruffct  
**\<JollyMort[m]>** you can always convert later  
**\<fluffypony>** DaveyJones: I don't think so, at least not trivially  
**\<JollyMort[m]>** i mean if we have to do RCT->RuffCT  
**\<surae>** dEBRUYNE I'm actually with you on that. chances are good RuffCT is about 1 year out from being live, and I wouldn't be *shocked* if we could make a threshold scheme out of it before that year is up  
**\<JollyMort[m]>** same can be done for wallets  
**\<JollyMort[m]>** RCT multisig -> RuffCT multisig  
**\<fluffypony>** well, basically this isn't going in to a hardfork until we have multisig  
**\<msvb-lab>** JollyMort[m]: hardware or software wallets?  
**\<tyrionmcmmaster>** i agree with the majority, that multisig pre-ruffct should be implemented for the time being  
**\<JollyMort[m]>** and shen/luigi multisig can work regardless of consensus rules  
**\<dEBRUYNE>** \<msvb-lab> JollyMort[m]: hardware or software wallets? \<= Doesn't matter  
**\<JollyMort[m]>** by means of one-time multisig wallets  
**\<surae>** so i'm happy finsihing up the shen-luigi multisig scheme, letting wallets use it until RuffCT goes live, they'll still be able to use it for whatever RCT outputs are still floating around if they like... and maybe users may miss out on threshold signatures for one hardfork, but probably not two.  
**\<hyc>** that sounds decent  
**\<fluffypony>** ok  
**\<DaveyJones>** \^+1  
**\<fluffypony>** guys let's move on  
**\<surae>** excellente  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<DaveyJones>** can i chime in for the AFK devs?  
**\<fluffypony>** before we discuss any specific PRs / issues  
**\<fluffypony>** I wanted to get a feel as to how we should handle the branch wrt PRs  
**\<fluffypony>** ie. do we want people to push PRs to both branches where relevant  
**\<fluffypony>** or must I just cherry-pick commits?  
**\<moneromooo>** Push to both, or the GPG signature drops.  
**\<fluffypony>** moneromooo: I meant cherry-pick to my fork and then PR it  
**\<hyc>** ok. but tat this pre-release time, how are we deciding which PRs are eligible for the release branch?  
**\<moneromooo>** fluffypony: I don't understand that.  
**\<moneromooo>** If someone wants a patch to the release branch, they PR it to that branch too.  
**\<vtnerd>** bug fixes should automatically be considered ... everything else is subjective  
**\<fluffypony>** vtnerd: it's bug fixes only  
**\<moneromooo>** I guess you can cherry-pick if the commit isn't signed in the first place.  
**\<fluffypony>** nothing else goes in, we're in code freeze on the branch  
**\<fluffypony>** moneromooo: if I cherry-pick and I sign it then it's still signed?  
**\<vtnerd>** ok good, at least we are in agreement on that  
**\<moneromooo>** Well, it's signed by you, yes...  
**\<moneromooo>** But you're kinda not the author ? :)  
**\<fluffypony>** moneromooo: with cherry-pick it lists both myself and the aithor iirc  
**\<fluffypony>** \*author  
**\<moneromooo>** I guess nobody really cares anyway.  
**\<moneromooo>** Yes, but the author's signature drops AFAIK.  
**\<moneromooo>** So you could modify a large patch, sign it, and nobody would notice.  
**\<iDunk>** I agree with moneromooo, that's not the way to do it.  
**\<hyc>** ok, so PR directly to release branch  
**\<fluffypony>** moneromooo: https://i.imgur.com/PG0YmsF.png \<- like that  
**\<hyc>** there's 22 open PRs at the moment. only a few seem to be current bugfixes  
**\<moneromooo>** Most people will just PR to master anyway, so not much trouble.  
**\<moneromooo>** I'm not sure I get the point.  
**\<fluffypony>** ok this is more about the fallback if the contributor doesn't PR to the branch in a timeous fashion  
**\<moneromooo>** In that case, if it's really needed for the branch, cherry-pick is OK I suppose.  
**\<fluffypony>** ok cool  
**\<hyc>** but re: the branch, I'd like #2313 and #2314 to go into the release. should help further reduce chance of corruption on powerfail.  
**\<moneromooo>** Agreed.  
**\<moneromooo>** I'll just fixup the target thing too.  
**\<hyc>** cool  
**\<moneromooo>** I think just removing the state check will be fine.  
**\<fluffypony>** yes  
**\<fluffypony>** if those can be PRd to the branch that would be great  
**\<hyc>** willdo  
**\<fluffypony>** ok - anything else?  
**\<JollyMort[m]>** about GUI cold signing  
**\<JollyMort[m]>** any plans to add import/export outputs&keyimage stuffs  
**\<msvb-lab>** fluffypony: Not sure when it's appropriate to ask for consensus on (yes) increase efforts towards a hardware wallet or (no) maintain status quo.  
**\<fluffypony>** what's everyone's feelings on merging 0MQ into master?  
**\<DaveyJones>** so tewinget only said that he just wants further feedback  
**\<dEBRUYNE>** JollyMort[m]: Jaquee isn't here afaik  
**\<DaveyJones>** and jaquee asked this  
**\<Jaquee>** i'm here now  
**\<hyc>** I thought merging 0MQ is slated for after the release  
**\<DaveyJones>** \<Jaquee> not sure if i can make it to the meeting. have two questions. 1. updates on disk space on build machines (when can we have an android apk available for download?) 2. updates on app store and transifex accounts?  
**\<Jaquee>** reading backlog  
**\<moneromooo>** After the release is done, yes.  
**\<DaveyJones>** oh your here :D  
**\<fluffypony>** we've already branched, tho, so surely we can merge to master?  
**\<moneromooo>** his here.  
**\<fluffypony>** msvb-lab: the dev working group don't really control external manufacturers  
**\<dEBRUYNE>** fluffypony: moneromooo wants to put in an additional review afaik  
**\<moneromooo>** I've not looked at the latest changes yet.  
**\<dEBRUYNE>** And tewinget is waiting for further feedback  
**\<fluffypony>** ok  
**\<Jaquee>** but maybe lightwallets PR can be merged? (in masteR)  
**\<pigeons1[m]>** Jaquee we got the build machine so early this week on the android jobs  
**\<rehrar>** regarding the transifex account, I've found an open-source, self-hosted alternative in weblate.org  
**\<medusa>** i dont think the fact if we branched mathers too much regradiing 0mq  
**\<Jaquee>** pigeons1[m]: Great!  
**\<rehrar>** just waiting on the new server infrastructure :)  
**\<medusa>** we should play it safe  
**\<moneromooo>** If the lightwallet stuff is the same I reviewed already, it was OK to merge IIRC.  
**\<Jaquee>** it's the same  
**\<fluffypony>** kk  
**\<dEBRUYNE>** \^ Not sure we should put that up on SE already  
**\<sn0wmonster>** i have a suggestion for future meetings, let me know when i can make it.  
**\<JollyMort[m]>** yeah i thought that too dEBRUYNE  
**\<JollyMort[m]>** surae what do you think?  
**\<fluffypony>** yeah I think some of this is confidential-ish  
**\<hyc>** are we still on ticket discussion?  
**\<DaveyJones>** aye  
**\<JollyMort[m]>** i mean, putting it in the meeting logs also makes it public  
**\<JollyMort[m]>** the genie is out of the bottle  
**\<dEBRUYNE>** I can just remove it from the logs  
**\<fluffypony>** hyc: about to move on, but you can still bring stuff up  
**\<hyc>** no that's fine  
**\<dEBRUYNE>** JollyMort[m] \^  
**\<hyc>** let's move on  
**\<dEBRUYNE>** fluffypony: Jaquee wanted to know about the appstore accounts btw  
**\<fluffypony>** surae should weigh in on that  
**\<dEBRUYNE>** If you have any update on that  
**\<Jaquee>** ^^  
**\<fluffypony>** app store accounts are waiting on the D-U-N-S number to be sent to Apple, I've sent scans of docs to Google and M$  
**\<fluffypony>** so Two Weeks™ ?  
**\<fluffypony>** 4. Any additional meeting items \<- moving on to that  
**\<fluffypony>** since it's part of it anyway  
**\<sn0wmonster>** is this where i can make a suggestion?  
**\<fluffypony>** sn0wmonster wanted to make a suggestion  
**\<sn0wmonster>** yay  
**\<sn0wmonster>** so, i noticed the meeting started only after it was obvious it was a meeting  
**\<sn0wmonster>** i don't see a Meetbot (which apparently is a package in Debian),  
**\<sn0wmonster>** so if you must do it this way, i was wondering if you wouldn't make it painfully obvious to everyone with a header of some kind, like this:  
**\<othe>** msvb-lab asked a question but got overrun, i am willing to help sponsor his hw wallet stufdlf  
**\<fluffypony>** also the time is set two weeks in advance  
**\<sn0wmonster>** \/flushq  
**\<pigeons1[m]>** Sn0wmonster makes a great meeting bot  
**\<hyc>** it's also announced on reddit and github  
**\<sn0wmonster>** beep bop boop  
**\<othe>** Ffs sake, there are 2 hw wallet proposals. Feedback appreciated.  
**\<msvb-lab>** othe: If anyone has advice on what to change in those FFS, the URLs are:  
**\<msvb-lab>** https://forum.getmonero.org/7/open-tasks/88149/dedicated-monero-hardware-wallet/  
**\<hyc>** and was announced here a few hours earlier  
**\<msvb-lab>** https://forum.getmonero.org/7/open-tasks/88160/monero-firmware-for-ledger-wallet/  
**\<endogenic>** sn0wmonster: https://github.com/monero-project/meta/issues  
**\<fluffypony>** sn0wmonster: https://www.reddit.com/r/Monero/comments/6uvu94/dev_kovri_meetings_later_today_1700_1800_utc/  
**\<DaveyJones>** shhh listen to othe and msvb-lab  
**\<sn0wmonster>** i didn't say it wasn't known, i said the *chatlog* had no introduction that the meeting had started really  
**\<endogenic>** sn0wmonster: it did though ?  
**\<JollyMort[m]>** i'm saying it had :) first post by fluffypony with the agenda 0. .. 1. .. 2.. ...  
**\<JollyMort[m]>** maybe you missed it  
**\<msvb-lab>** DaveyJones: Rather than listen, please speak whoever is interested in hardware crypto and border searches.  
**\<rehrar>** but it didn't have the Monero symbol  
**\<endogenic>** msvb-lab: doesn't quite seem like a dev item tho  
**\<hyc>** yeah, I think we can put that meeting announcement topic to rest.  
**\<DaveyJones>** msvb-lab they cannot speak if they don`t listen :D  
**\<moneromooo>** In other code news: I'm still debugging sync niggles with iDunk's help (who's been doing a LOT of testing, so many thanks). It'll be ready soon (both branch and master).  
**\<rehrar>** msvb-lab: we can talk about it in Community meeting next week?  
**\<msvb-lab>** endogenic: Okay, let's postpone. Good idea rehrar.  
**\<JollyMort[m]>** about the gui cold signing  
**\<iDunk>** Yw :)  
**\<JollyMort[m]>** it's still missing features  
**\<moneromooo>** If someone feels like syncing, please try the sync-standby3 branch :)  
**\<endogenic>** msvb-lab: no need to post-pone. maybe bring it up in #Monero ?  
**\<dEBRUYNE>** rehrar, endogenic: If there's room left, why not give msvb-lab the floor for a few minutes?  
**\<moneromooo>** It may not be code per se, but it's tech. I think it's fine here. Still 10 minutes.  
**\<othe>** I'll just sponsor it, its hilarious that there's no secure way to store xmr.  
**\<endogenic>** kk  
**\<fluffypony>** msvb-lab: a dedicated wallet would be cool  
**\<rehrar>** well that's decided then isn't it?  
**\<msvb-lab>** So the question is if we can achieve consensus on how to lower risk of another year with no wallet.  
**\<hyc>** there are two proposals tho, do we have to pick one, or do both?  
**\<msvb-lab>** hw wallet, i mean.  
**\<fluffypony>** Ledger are already working on it, not sure if we need to double up efforts there  
**\<dEBRUYNE>** Perhaps it'd be more beneficial if we have some general firmware that hw wallets could implement  
**\<surae>** gosh, sorry, i got distracted. no, please don't put up a stackexchange yet. a few weeks, no problem, but right now we should maybe keep it a little quieter~  
**\<surae>** if possible  
**\<surae>** cat's out of the bag, but i mean  
**\<msvb-lab>** hyc: One deals with dedicated hardware design, the other with porting to existing hardware.  
**\<fluffypony>** msvb-lab: https://www.reddit.com/r/Monero/comments/6thv8j/ledger_hardware_wallet_monero_integration/ \<- this is from 6 days ago  
**\<endogenic>** 2quick4u fyi  
**\<msvb-lab>** fluffypony: That's probably Cedric's document Blue-something, quite good.  
**\<dEBRUYNE>** \<msvb-lab> hyc: One deals with dedicated hardware design, the other with porting to existing hardware. \<= Even though the former would be pretty cool, the latter is probably more beneficial  
**\<JollyMort[m]>** and debruyne out the link then; i feel like simply removing stuff from the logs goes against some principle on transparency  
**\<hyc>** looks to me like Ledger has done the hard part of figuring out the division of labor between hw wallet and Monero libraries  
**\<Jaquee>** ledger said alpha around end of september iirc.  
**\<fluffypony>** I don't think there's value in doubling up on the Ledger effort  
**\<hyc>** ^^ agreed  
**\<dEBRUYNE>** What about porting to Trezor and Keepkey though?  
**\<Jaquee>** +1  
**\<msvb-lab>** There have been firmware ports (to Trezor) before that have not met Monero's feature set (RingCT) or unmaintained.  
**\<dEBRUYNE>** Perhaps msvb-lab is interested in finishing noodle's code?  
**\<fluffypony>** msvb-lab: Trezor was more complicated than that  
**\<msvb-lab>** I just hope if Cedric completes the port, that there is maintenance after that.  
**\<fluffypony>** NoodleDoodle did the Trezor firmware  
**\<JollyMort[m]>** Cedric is the Ledger crypto-guy  
**\<ferretinjapan>** fluffypony, choice is always a good thing WRT HWE wallets, otherwise we may get centralisation of support/development/monopoly of service, etc.  
**\<hyc>** I'd say we pick up whatever changes ledger comes up with and use that as a basis for other hw projects  
**\<fluffypony>** then there was a bit of a disagreement between Trezor and us  
**\<JollyMort[m]>** afaik  
**\<fwrttrukjwtrijdh>** sorry, noticed objections above to SE questions. Will delete for now. Does same objection apply to both Ruffling and RingCT2.0 paper?  
**\<fluffypony>** and then I met up with them 33c3, and they said that it's not worth us moving forward on it till Trezor 2.0  
**\<hyc>** if all the wallets use the same handshakes that saves everyone effort  
**\<fluffypony>** which was Coming Soon™  
**\<moneromooo>** Tim Ruffing requested keeping is internal as a courtesy. I don't think anhything like that applies to Ringct 2.0.  
**\<dEBRUYNE>** The 2.0 paper was posted on reddit too :P  
**\<hyc>** that's as close as we'll get to a "common firmware" - other hw wallets will be based on different chips anyway  
**\<msvb-lab>** Not sure how stable (management or technically) Trezor is, hoping Cedric follows through on the Ledger work is a possibility. We then do little or nothing and wait for results.  
**\<fluffypony>** msvb-lab: I'd support effort on a dedicated HW wallet  
**\<JollyMort[m]>** chip design etc? that sounds good  
**\<JollyMort[m]>** especially if all the schematics are published  
**\<msvb-lab>** Something that interests me is adding Monero specific features to a dedicated wallet, and make it as border search proof as possible (not supported by Ledger.)  
**\<JollyMort[m]>** so anyone can buy the parts and build it  
**\<hyc>** lol. I'm not soldering surface-mount chips by myself.  
**\<msvb-lab>** JollyMort[m]: Everything would be designed with KiCad and published in a github or similar.  
**\<sn0wmonster>** what is not border-proof about ledger?  
**\<msvb-lab>** hyc: I have a SMD lab, reflow and all.  
**\<ferretinjapan>** hyc, what's the problem? All you do is put it in the oven ;)  
**\<msvb-lab>** sn0wmonster: No ability to destroy the private key without battery.  
**\<fluffypony>** avoiding the glitching attacks just demonstrated against Trezor will be fun  
**\<hyc>** let's just say I've overcooked a few microcontrollers in my day...  
**\<endogenic>** hyc: you need an intern or two  
**\<JollyMort[m]>** hyc baking bad :)  
**\<msvb-lab>** fluffypony: Yes, glitch defense is part of the design. I'm not sure it's possible at all, but there will be research.  
**\<fluffypony>** cool beans  
**\<dEBRUYNE>** fluffypony: Do we still have time, I wanted to suggest something more generally?  
**\<msvb-lab>** fluffypony: Randomness probably plays an important role, so we have chips like ATSHA240A.  
**\<DaveyJones>** so dedicated hw of the two it will be ? so we can come to a conclusion before the end of meeting  
**\<JollyMort[m]>** Jaquee: would it be too much effort to add the import/export stuffs into gui  
**\<msvb-lab>** dEBRUYNE: Let's close off hw wallets now, but everyone please add a post to the FFS if you have a strong opinion.  
**\<msvb-lab>** Thanks for the floor folks!  
**\<JollyMort[m]>** would be nice to avoid depending on the CLI to fix cold signing glitches  
**\<dEBRUYNE>** All right, I'll leave a comment later msvb-lab :)  
**\<JollyMort[m]>** and some use cases require import/export stuffs  
**\<dEBRUYNE>** I personally wanted to raise the idea to release more often (e.g. a new release every quarter) to (i) tighten and improve the feedback loop and (ii) decrease time spend on helping out people that incur issues that are already long fixed in master  
**\<Jaquee>** JollyMort[m]: not that much effort. problem is that code is frozen in monero. so wont make into this coming release  
**\<dEBRUYNE>** I spoke with fluffypony about this in private and he was concerned it would put too much pressure on contributors  
**\<JollyMort[m]>** :(  
**\<dEBRUYNE>** So I'd like to hear their opinion about it  
**\<Jaquee>** i added some improvements yesterday  
**\<dEBRUYNE>** I guess I should mainly page Jaquee, moneromooo, hyc, iDunk  
**\<JollyMort[m]>** i saw, haven't tested it yet  
**\<dEBRUYNE>** \^ apologies if I forgot someone :P  
**\<hyc>** "release early, release often"  
**\<JollyMort[m]>** i'll check it out  
**\<moneromooo>** I think it'd put too much pressure on the pony.  
**\<dEBRUYNE>** hyc: Right, that was kind of my basis for the idea  
**\<Jaquee>** i'd love to release more often  
**\<hyc>** I think having another interim release would be nice  
**\<moneromooo>** He barely has the time to do anything AIUI.  
**\<dEBRUYNE>** moneromooo: Could this be mitigated if we had an additional maintainer?  
**\<endogenic>** i think it's funny when people say "fail fast"  
**\<fluffypony>** we need to bear in mind that this is security software  
**\<dEBRUYNE>** I think luigi wanted to do an FFS soon for it  
**\<moneromooo>** Who would you trust which can do it ?  
**\<moneromooo>** hyc!  
**\* moneromooo** flees  
**\<hyc>** :P  
**\<dEBRUYNE>** Well luigi could merge stuff and FP release?  
**\<fluffypony>** I don't think we should be pushing to release unstable software :-P  
**\<DaveyJones>** hyc or the luigi1115  
**\<fluffypony>** an additional maintainer won't make software magically stable :-P  
**\<hyc>** true  
**\<dEBRUYNE>** fluffypony: No, but it would take time away that you have to spend on merging and reviewing stuff  
**\<ferretinjapan>** I'd just like to say that a backup maintainer should be seriously considered, even if the release schedule stays the same, there's nothing like redundancy...  
**\<fluffypony>** we need way more eyes on PRs than that  
**\<fluffypony>** ferretinjapan: we already have backups  
**\<dEBRUYNE>** Also, those large merging waves inhibit the momentum of the project imo  
**\<ferretinjapan>** ah, goodo  
**\<medusa>** the lack of follow up bugfix releases causes huuge amunt of support work  
**\<fluffypony>** the Core Team have access, and luigi1115 is my direct backup  
**\<fluffypony>** medusa: we've already solved that  
**\<medusa>** how?  
**\<rehrar>** What if one release added content, and the intermin is just bug fixes?  
**\<fluffypony>** with the branch  
**\<dEBRUYNE>** \<fluffypony> I don't think we should be pushing to release unstable software :-P \<= Not saying we should, but if master is deemed stable we could put out a release with a few new features right?  
**\<medusa>** so this time we going to have a follow up release 100% ?  
**\<medusa>** like 2 weeks later  
**\<fluffypony>** medusa: it depends on if there are bug fixes  
**\<dEBRUYNE>** There are always bug fixes  
**\<dEBRUYNE>** :P  
**\<medusa>** well depends on severity i agree  
**\<medusa>** of the bug  
**\<ferretinjapan>** dEBRUYNE, what about early beta releases? Say just before the freeze?  
**\<JollyMort[m]>** for one thing, i would love to see cold signing stuffs added asap; feel like it's an important feature to those who don't want to use CLI for the same thing  
**\<JollyMort[m]>** and be able to resolve any problem people may have by using GUI functions  
**\<ferretinjapan>** or an "experimental" release?  
**\<hyc>** can we just get people to use a nightly build, for bugfix verification?  
**\<dEBRUYNE>** ferretinjapan: That seems suboptimal, as there would be new binaries a few weeks later  
**\<bigreddmachine>** Isn't that what the nightly builds are?  
**\<hyc>** and then at some point we can decide if we have something stable enough for another release  
**\<medusa>** if we potentially want to keep the branch that long, we should also slow down with merging stuff in trunk (especially 0mg)  
**\<medusa>** until we can estimate the quality of the branch somehow  
**\<fluffypony>** just looking at the recent releases, I don't think there have been a lack of them  
**\<fluffypony>** Sep 19, 2016: 0.10.0  
**\<fluffypony>** Dec 13, 2016: 0.10.1  
**\<fluffypony>** Feb 23, 2017: 0.10.2  
**\<fluffypony>** Feb 24, 2017: 0.10.2.1  
**\<fluffypony>** Mar 26, 2017: 0.10.3  
**\<fluffypony>** Mar 26, 2017: 0.10.3.1  
**\<medusa>** otherwise we risk, dpeending on buigs we have after release, to end up in a hairy position  
**\<hyc>** so it sounds like release-as-needed is working  
**\<fluffypony>** yeah, I'm not really seeing a lack of releases there  
**\<moneromooo>** especially on march the 26th.  
**\<hyc>** heh  
**\<JollyMort[m]>** release density == nan  
**\<ferretinjapan>** The last 5 months have been rather quiet, but I don't think it's all bad.  
**\<medusa>** those 1d releases dont yount  
**\<medusa>** they fix emergency stuff  
**\<ferretinjapan>** You guys were busy with making sure ringct was solid after all...  
**\<medusa>** we talk about follow up releases, with 2 weeks in between  
**\<medusa>** we enever do that  
**\<ferretinjapan>** and then there was that bug...  
**\<hyc>** 2 weeks seems too soon for a scheduled followup  
**\<bigreddmachine>** Q before meeting is over. What kinds of things need to be studied on the PoW change proposal? I'm happy to dig into that but would like some direction if possible.  
**\<hyc>** and 5 months since the last release seems too long  
**\<endogenic>** bidreddmachine: what problem necessitates that?  
**\<dEBRUYNE>** hyc: If the release merely intends to fix bugs of the latest release, is two weeks too soon?  
**\<endogenic>** the PoW change  
**\<hyc>** dEBRUYNE: I presume bug fix releases go out as soon as available  
**\<dEBRUYNE>** But we haven't done that in the past  
**\<hyc>** e.g., for emergency fixes  
**\<dEBRUYNE>** That's the issue medusa is raising  
**\<hyc>** otherwise, if it's not urgent, 2 weeks seems short.  
**\<msvb-lab>** has the meeting officially ended, one hour right?  
**\<fluffypony>** well in the past 5 months we haven't really been able to release stable + bug fixes  
**\<DaveyJones>** afaik the GUI had/has a bug that freeze's the wallet on some system thats already fixed but never got released ... thats what your talking about medusa?  
**\<bigreddmachine>** endogenic: some things were raised in the thread on GitHub. I wouldn't be going into it saying "this needs to happen" but rather trying to dissect the potential issues and see if there is anything to be gained.  
**\<fluffypony>** because we didn't branch  
**\<fluffypony>** now we branch  
**\<fluffypony>** so it seems like we're discussing something we've already fixed...?  
**\<dEBRUYNE>** DaveyJones: Yes, which causes a lot of support issues  
**\<medusa>** well we expect you to be around and build a bin  
**\<medusa>** if thats all fine that its all good  
**\<hyc>** yeah sounds like it's fixed already  
**\<dEBRUYNE>** fluffypony: For the GUI, for example, we're still helping people that incur bugs from GUI beta 2  
**\<dEBRUYNE>** That were fixed a week after the release  
**\<hyc>** 3 months from now we can raise the question of an interim release if there haven't already been a slew of releases  
**\<fluffypony>** dEBRUYNE: I know what the issue was, hence the branching thing  
**\<medusa>** its also a time and tacting thing  
**\<medusa>** if we plan to let the branch live that long you will need to thread the trunk differently  
**\<dEBRUYNE>** fluffypony: So if I understand the branching correctly, we'll release from the branch and if too much annoying bugs are found in the release version, we'll do a follow up point release to include fixes?  
**\<medusa>** it has a lof of effects  
**\<msvb-lab>** netsplit for me i guess...  
**\<bigreddmachine>** With branching now, couldn't we just have monthly  release candidates or something?  
**\<fluffypony>** dEBRUYNE: yes - follow-up releases are based off the branch  
**\<rehrar>** I know we're already over, but can we get a brief update regarding Sarang's FFS?  
**\<moneromooo>** How about we don't spam the pony yet ? Let's wait, and maybe do a release from the branch if there are bugs we want fixed.  
**\<fluffypony>** @bigreddmachine no need to timeframe it, we'll release when there are bug fixes part of the branch that make it worth releasing  
**\<fluffypony>** ie. major bug fixes  
**\<hyc>** agreed  
**\<bigreddmachine>** Fluffy, I just meant a pseudostable branch that's a bit more tested than the nightlies.  
**\<dEBRUYNE>** \<fluffypony> dEBRUYNE: yes - follow-up releases are based off the branch \<= All right, well, let's see how that will go then  
**\<fluffypony>** not spelling errors or whatevs  
**\<bigreddmachine>** But not an actual release.  
**\<bigreddmachine>** Maybe that's a "2 years down the road" thing  
**\<fluffypony>** @bigreddmachine you mean off the main branch or the release branch?  
**\<moneromooo>** We tried that before, it was a massive pita.  
**\<hyc>** can the build system do nightlies of the release branch too?  
**\<fluffypony>** hyc: pretty sure, yeah  
**\<bigreddmachine>** I meant as its own branch... Commits get tested, when somewhat sure moved to release candidates, which is still unstable, and then when that's tested moves to the actual release. Probably a pita like mooo said  
**\<fluffypony>** pigeons1[m]: ^^  
**\<fluffypony>** yeah complete PITA  
**\<bigreddmachine>** Okay just brainstorming  
**\<pigeons>** yes, i'll setup jobs for the release branch  
**\<hyc>** that ought to be good enough then as far as release candidates go  
**\<fluffypony>** re: sarang, pero were your questions satisfied?  
**\<pizzasushibeer>** As a supporter of Ledger see nothing wrong with the community funding a 2nd hw wallet initiative. More options are beneficial and im sure many of us already own multiple Bitcoin hw wallet types for a variety of reasons  
**\<DaveyJones>** pero is rarely available this week @ fluffypony  
**\<dEBRUYNE>** fluffypony: I think sarang was rewriting the proposal, but I am not sure if he has finished yet  
**\<fluffypony>** ok  
**\<pizzasushibeer>** If the community is willing to fund, it I see nothing wrong with moving proposal to funding required (after any more required clarifications are made)  
**\<sn0wmonster>** i think i'm gonna bother these guys to make a patch for their box for Monero http://bitseed.org/  
**\<sn0wmonster>** wrong channel  
**\<pizzasushibeer>** I would help contribute to the hardware wallet proposal. Im sure others agree  
**\<pigeons>** if pero's questions aren't answered maybe post a forum reply reminding him that so sarang can see clearly its outstanding still  
**\<hyc>** yeah I recall pero was going to be unavailable for the next week or two  
**\<ferretinjapan>** pizzasushibeer, I'm another person and I agree.  
**\<scoobybejesus>** sarang was about to post clarifications to his ffs a couple times recently.  it's been mentioned more than once on #mrl  
**\<hyc>** ok, we're 25minutes over. any more stuff?  
**\<dEBRUYNE>** Guess not :-P  
**\<DaveyJones>** would it be possible that -site maybe gets an additional maintainer ?  
**\<DaveyJones>** afaik it less to no coding stuff and maybe people like dEBRUYNE or rehrar would be able to maintain it... so no need to bother you fluffypony ^ ^  
**\<fluffypony>** DaveyJones: we're working on alternatives, probably doing something based off issue helper  
**\<DaveyJones>** fine :)  
**\<JollyMort[m]>** binaries and .raw downloads are high-sec  
**\<fluffypony>** ^^  
**\<rehrar>** Ye. Responsibility is scary.  
**\<fluffypony>** so issue helper could be used to trigger merges where it doesn't touch sensitive parts of the site  
**\<rehrar>** Dude, that's awesome.  
**\<rehrar>** For all those little merchant merges  
**\<DaveyJones>** yeah i had things like merchants in mind  
**\<dEBRUYNE>** And then we could give the issue helper trusted community members access to the issue helper right?  
**\<dEBRUYNE>** \^ fluffypony  
**\<rehrar>** We eventually should drop support for Merchants on the site tbh imo  
**\<fluffypony>** dEBRUYNE: yes  
**\<fluffypony>** rehrar: why?  
**\<moneromooo>** It's a good, if small, incentive for people to support monero.  
**\<moneromooo>** And for connecting monero spenders with monero earners.  
**\<rehrar>** As Monero grows it will become gigantic eventually, but maybe that's not a huge issue.  
**\<rehrar>** Just my thoughts.  
**\<hyc>** success problems are nice to have. we're not there yet  
**\<moneromooo>** Oh, sure. Once Monero's world reserve currency, it can go :)  
**\<DaveyJones>** \^ but only then  
**\<dEBRUYNE>** fluffypony: All right, seems cool. That'd also relieve you from some "low hanging fruit" work  
**\<dEBRUYNE>** Which still can be quite time consuming  
**\<fluffypony>** yup  
**\<DaveyJones>** but maybe we should put up some kind of Disclaimer  
**\<DaveyJones>** in case some service goes rogue  
**\<sn0wmonster>** which judging by bitcoin's history, is not a matter of if, but when  
**\<DaveyJones>** "this is just a list of merchants, and no appraisement by the core team"  
**\<rehrar>** I'm actually going to be going g through all the Merchants this week to find the dead websites.  
**\<moneromooo>** Warning: the monero team does not control Amazon, odd as it might seem to you.  
**\<pigeons>** cryptokingdoms  
**\<pigeons>** for example  
**\<moneromooo>** CK's kinda back from the moribund actually.  
**\<pigeons>** ok  
**\<rehrar>** Meeting = end?  
**\<DaveyJones>** sure  