---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2019-08-25
summary: Development status, Code & ticket discussion, 0.15 release discussion, and miscellaneous
tags: [dev diaries, core, crypto]
author: el00ruobuob / rehrar
---

# Logs  

**\<rbrunner>** Meeting time, but it seems Rehrar has problems getting through to here from Mattermost ...    
**\<dEBRUYNE>** rehrar can't join IRC directly?  
**\<rehrar-mob>** ok, let's do this then  
**\<rbrunner>** So you all don't see him either, right?  
**\<rehrar-mob>** I'm on the move atm, unfortunately.  
**\<dEBRUYNE>** Nope  
**\<rbrunner>** Technology, pfft  
**\<rehrar-mob>** In fact, I may be called away in about twenty minute's time.  
**\<rehrar-mob>** I can lead until then, but maybe dEBRUYNE or moneromooo can afterwards?  
**\<rehrar-mob>** normal stuff today.  
**\<dEBRUYNE>** Sure  
**\<rehrar-mob>** 1. Greetings, 2. What's done since last meeting? 3. Code/ticket discussion 4. Other meeting items 5. next meeting time  
**\<dEBRUYNE>** pings luigi1111 sarang fluffypony moneromooo vtnerd suraeNoether\_\_\_ hyc jtgrassie selsta xiphon   
**\<rehrar-mob>** 1. Greetings  
**\<rehrar-mob>** say hi  
**\<vtnerd\_\_>** hi  
**\<rbrunner>** Hi  
**\<rehrar-mob>** dsc\_ medusa\_ also  
**\<xiphon>** hi  
**\<TurtleCoin>** \<VISSER THREE> hi  
**\<rehrar-mob>** 2. What's been completed since last meeting?  
**\<sarang>** Hi  
**\<rehrar-mob>** Did you guys have a meeting a couple weeks ago? I was at defcon, so didn't attend.  
**\<hyc>** hi  
**\<dEBRUYNE>** Yes, there was a meeting two weeks ago  
**\<hyc>** there was a meeting 2 weeks ago, not much happened  
**\<rehrar-mob>** cool, so completed since then then  
**\<rehrar-mob>** been a slow past couple of weeks?   
**\<dEBRUYNE>** I've worked with luigi and mooo to get some stuff merged  
**\<dEBRUYNE>** We're at about 60 open PRs now (quite a few of those are relatively new)  
**\<rehrar-mob>** on CLI? or between both CLI and GUI?  
**\<dEBRUYNE>** CLI yes, but luigi also merged some stuff for the GUI  
**\<rehrar-mob>** any idea on what those things are? summary.  
**\<rehrar-mob>** vtnerd how's your stuff coming along? Everyone awaits with bated breath.  
**\<dEBRUYNE>** You mean what kind of PRs were merged?  
**\<rehrar-mob>** dEBRUYNE yes. What'd they do.  
**\<rehrar-mob>** Just for anyone reading the logs.  
**\<dEBRUYNE>** As far as I can see, mostly optmizations, bug fixes, readme additions  
**\<dEBRUYNE>** IPv6 support got merged  
**\<rehrar-mob>** Cool deal.  
**\<dEBRUYNE>** Also a few improvements to the deterministic build process  
**\<sarang>** I'd like additional review on a slightly older MLSAG PR: https://github.com/monero-project/monero/pull/5707  
**\<dEBRUYNE>** Bunch of new tests got added too  
**\<sarang>** (recently updated)  
**\<dEBRUYNE>** ^ Perhaps luigi1111 can have another look at that?  
**\<vtnerd\_\_>** Im working on handling the mempool separation, which is a bit tough to separate the components cleanly  
**\<rbrunner>** You mean code separation?  
**\<vtnerd\_\_>** the first PR for white noise appears to not be hated at least - I rebased and tested against the ipv6 merge  
**\<xiphon>** regarding the broken Travis builds - they were broken due to ncurses configuration, sent a PR that fixes the issue.  
**\<xiphon>** Though now some builds are halt on libunwind build error. Did we change anythign related to libunwind recently?  
**\<vtnerd\_\_>** ideally dandelion++ and this covert sending technique have different mempools  
**\<vtnerd\_\_>** but its determining how to handle it thats the tricky part - whether the txes are stored in the lmdb file like normally, kept only in memory, or separately altogether  
**\<vtnerd\_\_>** its a very subtle leak of information if your tx is in the mempool stored on disk before appearing anywhere else, but this is monero so ...  
**\<vtnerd\_\_>** dandelion++ flat out suggests separate mempools because the information can be leaked externally through p2p or rpc calls  
**\<vtnerd\_\_>** so for both dandelion++ and my CCS I proposed a separate mempool that didn't return the tx until it was "spread"  
**\<rehrar-mob>** you don't foresee any of this being live in October, yeah?  
**\<rehrar-mob>** Or perhaps none of this necessitates a hard fork?  
**\<vtnerd\_\_>** none of these needs a fork  
**\<vtnerd\_\_>** \*this  
**\<rehrar-mob>** aight, so it can go live whenever. Would any of this need to be audited, you think?  
**\<rehrar-mob>** or is it not that simple?   
**\<rehrar-mob>** I'm guessing that's the answer.  
**\<vtnerd\_\_>** uh, its not the typical thing that gets audited, theres no cryptography involved really, but its wrong of me to push against it probably  
**\<hyc>** vtnerd: explanation makes sense, thanks  
**\<rehrar-mob>** dEBRUYNE now I have to step away. I should be back in a while, but I don't expect the meeting to last that long. Can you take over?  
**\<dEBRUYNE>** Sure  
**\<rehrar-mob>** thanks  
**\<hyc>** vtnerd but it sounds like this could just be a flag on records in the single txpool  
**\<vtnerd\_\_>** yes, that is something that I thought about  
**\<hyc>** and you only need to control disclosure when a remote client is asking  
**\<hyc>** not e.g. the local CLI  
**\<xiphon>** ^ you still need to do this even with separate mempools  
**\<vtnerd\_\_>** the only negative is that its recorded on disk to what is generally believed (or at least by me, perhaps not all) to not contain "sensitive" information. that flag would be recording that the tx origin was that machine  
**\<vtnerd\_\_>** and its mixed with what is otherwise public information  
**\<hyc>** ... no, that flag's meaning is not necessarily that.  
**\<vtnerd\_\_>** it might be something I end up doing - since its less work - and document that it can be updated as needed  
**\<hyc>** the flag is "broadcasted yet" - it would be false on intermediate nodes in the dandelion stem too  
**\<vtnerd\_\_>** yes  
**\<vtnerd\_\_>** my only concern about mixing was the small data leak to disk and making sure it wasn't easy to accidentally undo.  
**\<vtnerd\_\_>** I think its just going to use an existing flag or a new one, because its the easiest to get the bulk of the concern - the externally visible network traffic - up and running  
**\<hyc>** using a separate memory-only pool has the same dangers as why we switched to LMDB in the first place  
**\<hyc>** it can grow to ubnounded size  
**\<hyc>** and unless you use locked memory, it could just get swapped to disk anyway  
**\<vtnerd\_\_>** yeah I had been considering a separate lmdb file for this. No code was written for that, but I was going through it in my head to track how much work it was  
**\<hyc>** and if you use locked memory, you'll just run out  
**\<vtnerd\_\_>** its not terrible, but cleaning up the tx inspection process should probably be done first  
**\<vtnerd\_\_>** I was thinking of storing it to disk using lmdb, but letting the user specify a separate entry point for an encrypted volume, but its going to be too much work (as you are likely hinting at)  
**\<rbrunner>** This all is only relevant if you have a local attacker, right?  
**\<hyc>** I would think so, yes  
**\<vtnerd\_\_>** for the most part. I primarily wanted to do it because I still think its easier conceptually to have two separate pieces in code handling this, but its not trivial  
**\<hyc>** and a local attacker that can examine the disk can probably also examine monerod's memory  
**\<rbrunner>** Yes, and if your starting point is "no dandelion++ whatsoever", maybe implement that quick and worry about local attackers afterwards   
**\<vtnerd\_\_>** if the person is storing the blockchain to an unencrypted portion thinking its all public information  
**\<vtnerd\_\_>** arguably everyone is running monerod on a machine using disk encryption, but perhaps not always  
**\<xiphon>** also storing txes in lmdb will help in case of casedandelion++ stem phase fail  
**\<xiphon>** one could safely restart the daemon and don't bother that any outgoing tx will be lost  
**\<vtnerd\_\_>** theres also a small concern about getting information remotely via timing, but thats another advanced attack that I was merely going to document rather than code around (it aint easy)  
**\<rbrunner>** Good argument  
**\<vtnerd\_\_>** and Im not even sure how realistic that timing attack is, its going to vary from machine to machine a lot  
**\<vtnerd\_\_>** xiphon: thats probably pointless  
**\<hyc>** fwiw, a patch for page-level encryption in LMDB is available, works fine. I haven't released it yet because I wanted to add authenticated encryption  
**\<vtnerd\_\_>** because the embargo is almost certainly going to fire, and everyone in the chain is broadcasting at that point  
**\<hyc>** which requires eating up extra space for the encryption signature  
**\<hyc>** but we could go with the current patch immediatelym if it helps  
**\<xiphon>** dvtnerd\_\_: oens't seem so to me  
**\<xiphon>** if you restart the daemon right after sending a tx and choosen stem node fails, you tx will be lost  
**\<vtnerd\_\_>** its no worse than the current code, so I don't see a reason to rush  
**\<xiphon>** and that won't happen with lmdb-stored txes  
**\<vtnerd\_\_>** and likely the timer from the origin node goes off by then anyway, its probably close  
**\<vtnerd\_\_>** although we could have it retry on connection loss to a backup node before doing the embargo timer thing  
**\<vtnerd\_\_>** with dandelion++ theres always the possibility of an intentional blackhole, so storing the stem txes to disk is not an obvious benefit  
**\<vtnerd\_\_>** the origin needs counter-measures either way  
**\<xiphon>** something  is wrong then, this sounds like we don't guarantee that tx will be broadcasted to the network  
**\<vtnerd\_\_>** you can't with dandelion++, thats how the protoocl works  
**\<vtnerd\_\_>** and to be fair, you cannot really guarantee it with the gossip protocol either  
**\<vtnerd\_\_>** theres no acking on this, its a fire and forget in monero  
**\<sarang>** D++ is intended to fail to the existing broadcast scheme, essentially  
**\<vtnerd\_\_>** yes, its one of the consequences of having a single outbound path  
**\<hyc>** ... we really should be using IP multicast  
**\<hyc>** btw, for those who aren't following this -dev channel all the time, I have a randomx testnet node on 206.127.12.163:28080  
**\<hyc>** seems there are only 5 peers active at the moment  
**\<rbrunner>** Yeah, that was one of my questions, how that's going  
**\<rbrunner>** There were plans anyway to switch testnet soon, right?  
**\<hyc>** running uneventfully so far. mining, sending coins around  
**\<hyc>** official switch is waiting on fluffypony's availability  
**\<rbrunner>**   
**\<rbrunner>** But your well-running private testnet is a pro argument, then  
**\<rbrunner>** For such a switch  
**\<dEBRUYNE>** With respect to binaries, what would the devs prefer?  
**\<dEBRUYNE>** Would a first 0.15 release within a few weeks be a proper timeline?  
**\<rbrunner>** Nobody seems to push a release, funny  
**\<xiphon>** there will be anissue with Ledger  
**\<xiphon>** They hardcoded accepted Monero version in the ledger monero app - the firmware the is installed on ledger device  
**\<xiphon>** it only accepts "0.14.1.0" string right now  
**\<rbrunner>** So they must plan to follow-up any Monero release quite closely, otherwise that does not make sense  
**\<xiphon>** and (if i'm correct) it usually takes some time for them to push an app update  
**\<hyc>** all the better to get a 0.15RC out sooner then  
**\<hyc>** and get them to use a saner version check. like >= 0.14.1  
**\<rbrunner>** Exactly  
**\<selsta>** They added the strict version check because of the change bug.  
**\<xiphon>** as a fallback plan, i thoguh about doing a workaround on the monero side  
**\<xiphon>** disabling this check by always supplying "0.14.1.0" version to the device  
**\<hyc>** yeesh...  
**\<rbrunner>** Oh, that's a straight road to hell  
**\<rbrunner>** See all the lying Windows does about the version numbers ... yikes  
**\<selsta>** They added the version check on purpose so we shouldn’t disable it like this.  
**\<xiphon>** right, i'm not saying it is good  
**\<xiphon>** but, we will loose ledger support with the new version if they won't manage to patch their code  
**\<selsta>** They managed to do it in time with the v0.14.1.2 release.  
**\<rbrunner>** That's why hyc's argument of early 15.x release is good  
**\<hyc>** yes, give them more advance warning, more time to respond  
**\<rbrunner>** The earlier before the hardfork itself that is out, the better  
**\<moneromooo>** The white noise stuff will most likely be in the october release.  
**\<moneromooo>** Before a 0.15 release, the v12 changes should be reviewed and merged.  
**\<dEBRUYNE>** xiphon: I presume they will release a new version in conjunction with our v0.15 release  
**\<moneromooo>** That's 5823.  
**\<dEBRUYNE>** So 5823 and the RandomX PR are the consensus changes that need to go in before we do an RC right?  
**\<hyc>** sounds right  
**\<hyc>** randomx is 5549  
**\<ErCiccione[m]>** so we are doing an RC release this time?  
**\<ErCiccione[m]>** because i remember many were against last hard fork  
**\<xiphon>** dEBRUYNE: hopefully they will implement version >= check, so the user won't need to update the ledger app with every monero release  
**\<selsta>** Plan was to add >= for minor point releases.  
**\<dEBRUYNE>** ErCiccione[m]: I guess we could also do a straight 0.15 and then work out any bugs via point releases  
**\<dEBRUYNE>** moneromooo, hyc, vtnerd\_\_: thoughts?  
**\<dEBRUYNE>** also xiphon   
**\<vtnerd\_\_>** well thats how its been done the last few releases  
**\<ErCiccione[m]>** i mean, i would totally go for an RC release  
**\<rbrunner>** Isn't that mostly only an issue with labels?  
**\<moneromooo>** If you're asking about version numbers, my preference is to have increasing version numbers. It mkaes things so much easier. IIRC pony prefers to have "rc" labels instead.  
**\<moneromooo>** I'm not gonna fight that, just moan from time to time and say "told you so" if it bites us later.  
**\<dEBRUYNE>** vtnerd\_\_: Right  
**\<rbrunner>** Yeah, but also, how would an RC be effectively different from a release?  
**\<rbrunner>** And not just called any other way  
**\<dEBRUYNE>** I guess we can release earlier now though because randomx and the other consensus changes are already ready  
**\<moneromooo>** As long as it contains all the needed consensus changes.  
**\<rbrunner>** You are not moaning, you are moooing  
**\<moneromooo>** That's randomx and 5823 AFAIK. If there's something else, say so.  
**\<moneromooo>** rbrunner: indeed!  
**\<xiphon>** rbrunner: "but also, how would an RC be effectively different from a release?" - i think the difference is in the official press release statement  
**\<xiphon>** we won't do one for -RC  
**\<xiphon>** so it will be for testing purposes  
**\<sech1>** randomx has 1 PR pending: https://github.com/tevador/RandomX/pull/118  
**\<rbrunner>** Hmmm, ok, but with the risk that less people test then  
**\<xiphon>** rbrunner: if that's is not how it is supposed to be, i'm lost  
**\<rbrunner>** I see what you mean, yes, it's a trade-off of course  
**\<rbrunner>** sech1: An audit result, then, this RandomX PR  
**\<hyc>** that PR appears (so far) to have no downside  
**\<ErCiccione[m]>** about the RC thing. Since there are many contrasting opinions, maybe better keep the old system.  
**\<moneromooo>** "Everybody builds their own" ?  
**\<rbrunner>** The old system does not really look broken, either, so why fix  
**\<ErCiccione[m]>** well, would be nice to have more testing before a proper release, but at this point i think it doesn't worth it.  
**\<hyc>** I suppose, if we don't do that last-minute advance-by-1-month release, it should work out fine  
**\<selsta>** Readline is still broken with reproducible builds.  
**\<selsta>** that has to get fixed with v0.15  
**\<hyc>** isn't there already a PR for that?  
**\<selsta>** I haven’t seen one.  
**\<dEBRUYNE>** We could reverse the commit that broke it I guess?  
**\<selsta>** Reversing it would mean no readline at all  But that’s better than broken readline I guess.  
**\<hyc>** hm, can't find one, must be misremembering  
**\<hyc>** I think the original problem is linking readline without its curses dependencies. the next problem is that curses has different dependencies on different OSs  
**\<dEBRUYNE>** So I guess that is added to the list of things that need to go in before we tag  
**\<dEBRUYNE>** Would a target of tagging in 2 weeks be reasonable?  
**\<hyc>** terminfo vs termcap vs ... something else  
**\<moneromooo>** Any vote against the pay-for-rpc going in ?   
**\<moneromooo>** (I have a wip patch to make it use randomx, not pushed yet)  
**\<hyc>** I have nothing oposing  
**\<rbrunner>** It's reviewed well, after all  
**\<xiphon>** would be nice to have it in the 0.15  
**\<dEBRUYNE>** I guess we can conclude the meeting then 
