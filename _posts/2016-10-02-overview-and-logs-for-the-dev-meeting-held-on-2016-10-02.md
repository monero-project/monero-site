---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-10-02
summary: Review and discussion of Open PRs, brief update on Ring CT, the official GUI, and Trezor for Monero
tags: [dev diaries, core, crypto, 0mq]
author: dEBRUYNE / fluffypony
---

### Overview

An overview [can be found on Hello Monero](https://hellomonero.com/article/monero-and-kovri-dev-meeting-note-highlights-2016-10-02)

### Logs

**\<fluffypony>** Hi all  
**\<fluffypony>** starting meeting bot  
**\<moneromooo>** I'm none of them.  
**\<dEBRUYNE>** I am here  
**\<fluffypony>** moneromooo: I know you're here :)  
**\<fluffypony>** ok meeting bot is up  
**\<dnaleor>** watching  
**\<fluffypony>** so  
**\<meeting-bot> [anonimal]** #kovri-dev too?  
**\<fluffypony>** kovri-dev is roped in too  
**\<othe>** k  
**\<meeting-bot> [i2p-relay] {-moneromooo}** o  
**\<fluffypony>** this is our first post-0.10.0 meeting  
**\<fluffypony>** the 0.10.0 release went fairly smoothly  
**\<fluffypony>** apart from the boost oddities  
**\<fluffypony>** on the Boost serialisation stuff  
**\<fluffypony>** it's not really feasible to do a point release just for that just yet - in a few weeks I'll have local build infrastructure that will make releases a lot easier on me  
**\<fluffypony>** since I can secure local machines far more easily than Internet-facing machines at a DC  
**\<fluffypony>** in the interim, if anyone is struggling with it the easiest thing for them to do is recover their wallet from the seed / keys  
**\<moneromooo>** And keep the old cache if they have tx keys they want to keep.  
**\<fluffypony>** ^^  
**\<fluffypony>** I'd also like to welcome all the new contributors  
**\<fluffypony>** even if it's just correcting a spelling error, all contributions are valuable  
**\<fluffypony>** and very much appreciated  
**\<fluffypony>** one thing I would like to encourage with the new contributors is to submit your GPG key via PR  
**\<fluffypony>** and side-channel it to myself or moneromooo or someone so we can independently verify the correct key goes in  
**\<fluffypony>** they live in utils/gpg_keys/  
**\<meeting-bot> [anonimal]** and if moneromooo says "ok" in your PR, that's a GOOD thing!  
**\<fluffypony>** and then once you've done that you can GPG sign your commits with -S  
**\<fluffypony>** eg. git commit -S -am "meaningful commit message"  
**\<moneromooo>** Only if it's at the start.  
**\<patthehuman>** Is there anything that needs to be made for iOS  
**\<fluffypony>** lol anonimal  
**\<fluffypony>** patthehuman: it's an open-source project, so if you want to build something for iOS then please do  
**\<fluffypony>** no need to ask permission or anyway  
**\<fluffypony>** I'd be interested to see if we could package a full node for iOS (without the wallet, lest it get removed from the app store)  
**\<patthehuman>** sure, i guess i'm wondering more along the lines of what needs to be built  
**\<patthehuman>** can you outline how that would work?  
**\<fluffypony>** and then an old iPhone or iPod Touch would work as a full node on wifi  
**\<fluffypony>** well we have native ARMv8 builds  
**\<fluffypony>** and interacting with the daemon over RPC isn't hard  
**\<ArticMine>** Why not just go with Cydia on jailbroken iOS?  
**\<fluffypony>** but I have no idea if an iOS app would let you arbitrarily launch a process  
**\<endogenic>** ArticMine: too few jailbreak their devices, no?  
**\<fluffypony>** ArticMine: absolutely - would be nice to be able to launch it as an app tho  
**\<patthehuman>** generally apps get removed from the app store if they are simple "remotes"  
**\<endogenic>** fluffypony: iOS does not allow you to spawn processes... no NSTask etc equivalent  
**\<fluffypony>** ah  
**\<TedTheFicus>** ArcticMine: I think Cydia is a good plan B. Not many non tech people are going to have jail broken phones  
**\<patthehuman>** right, they have a list of closed API's that will get you banned  
**\<fluffypony>** does Objective-C let you also run native C / C++ code?  
**\<endogenic>** fluffypony: yep as long as you can compile for an ARM target  
**\<endogenic>** compile it*  
**\<MK__>** ArticMine : A good idea and a lot of IOS devices have Jailbreak , Remember that XMR are used in the DNM as well  
**\<fluffypony>** yeah we have ARMv8 support across the board  
**\<endogenic>** Objective-C is a strict superset of C, so any C is good, and C++ can be compiled too  
**\<ArticMine>** Net applications Android 69.18% IOS 25.02% market share  
**\<fluffypony>** anyway we're getting side-tracked a little - patthehuman feel free to play around with it, if you feel like it  
**\<patthehuman>** sure  
**\<fluffypony>** so  
**\<fluffypony>** ringCT is live in testnet, and more testing would be appreciated  
**\<fluffypony>** mWo12's testnet block explorer is helpful  
**\<fluffypony>** but performance testing is also immensely useful  
**\<fluffypony>** see what cracks under pressure  
**\<fluffypony>** we have a short window until the January hard fork, so we need to hammer testnet as much as possible  
**\<trustedsetup>** is there a testnet faucet somewhere? or is mining or irc begging for testnet xmr recommended?  
**\<fluffypony>** just ask me and I'll send testnet XMR your way  
**\<patthehuman>** are there any automation processes that can hammer on testnet?  
**\<patthehuman>** i have access to a lot of r510 servers that i could potentially mirror some script to hammer on it  
**\<fluffypony>** patthehuman: you could pretty much just write a bash script to send to yourself once a second  
**\<fluffypony>** and cycle it that way  
**\<patthehuman>** cool  
**\<fluffypony>** and then see how your testnet node(s) handle catch ups, and if they keep up with testnet when blocks are bigger  
**\<fluffypony>** we also have our new buildbots ticking along nicely  
**\<fluffypony>** so we'll be killing off Travis at some point in the coming weeks  
**\<fluffypony>** build bot output has been relegated to #monero-bots  
**\<fluffypony>** and that channel is relayed to irc2p  
**\<meeting-bot> [anonimal]** Thanks pigeons  
**\<meeting-bot> [anonimal]** monero-build.i2p is also online  
**\<fluffypony>** yeah pigeons has done great work  
**\<fluffypony>** at the moment we're building for a ton of platforms  
**\<fluffypony>** including macOS 10.9, 10.10, 10.11  
**\<fluffypony>** so we should pick up PRs that break compilation more rapidly  
**\<fluffypony>** how we handle testing is a bit harder  
**\<fluffypony>** especially since some of the tests take several hours to run  
**\<fluffypony>** my current leaning is towards nightly builds + tests  
**\<fluffypony>** (of master)  
**\<fluffypony>** that way we'll catch tests that are broken by any merged PRs  
**\<moneromooo>** Daily core_tests would be useful.  
**\<fluffypony>** performance_tests would also be useful  
**\<fluffypony>** that way we can track anything that has a huge impact on performance  
**\<moneromooo>** As long as the outcome can be seen without too many hoops (ie, javacrsipt)  
**\<fluffypony>** moneromooo: we'll probably just grab the output, parse it, and shove it in a database  
**\<fluffypony>** then we can create a profiler for the site without too many issues  
**\<fluffypony>** on the PR side  
**\<fluffypony>** has anyone looked at 1082?  
**\<patthehuman>** no my apologies for being new but can you elaborate on what 1082 is  
**\<fluffypony>** or actually moneromooo: can you give everyone a brief overview of what 1082 does  
**\<fluffypony>** oh sorry patthehuman - PR = pull request  
**\<fluffypony>** so PR 1082 = https://github.com/monero-project/monero/pull/1082  
**\<patthehuman>** yeah im familiar with PR's (worst part of my work day lol)  
**\<moneromooo>** Ah, as the comment says, really.  
**\<moneromooo>** It just tries to avoid the case where someone sends money just after receiving it.  
**\<moneromooo>** That's a common enough case.  
**\<fluffypony>** "25% of the outputs are selected from the last 5 days (if possible), in order to avoid the common case of sending recently received outputs again. 25% and 5 days are subject to review later, since it's just a wallet level change."  
**\<trustedsetup>** where did the 25% come from? 25% seems somewhat arbitrary. did MRL have input on this number?  
**\<moneromooo>** They're aribtrary.  
**\<fluffypony>** trustedsetup: the MRL is of the opinion that we're never going to find a "perfect" distribution, and that distribution should be re-evaluated regularly  
**\<luigi1112>** Will look at it  
**\<fluffypony>** 25% would only be a single output at minimum mixin  
**\<trustedsetup>** ok thanks  
**\<moneromooo>** It's actually 25%, except if that gives 0, in which case it uses 1.  
**\<fluffypony>** moneromooo: and it's 25% including the "real" output, right?  
**\<moneromooo>** Yes.  
**\<moneromooo>** See line 2744 in wallet2.cpp  
**\<fluffypony>** kk  
**\<fluffypony>** as to the other open PRs  
**\<fluffypony>** most of them are not merged yet due to their being unreviewed  
**\<fluffypony>** I try give PRs a little while before reviewing them myself, otherwise I end up being the only reviewer, which is bad for security obvs  
**\<fluffypony>** bear in mind that a review is *not* in-depth line-by-line analysis  
**\<patthehuman>** pr is just a quick overview  
**\<moneromooo>** I'd hope the review does look at all lines.  
**\<fluffypony>** yup  
**\<fluffypony>** it's a sanity check, and a check for obvious screw-ups, and a check for snuck-in backdoors  
**\<fluffypony>** moneromooo: the key there was in-depth, not line-by-line ;)  
**\<moneromooo>** OK, that's fine.  
**\<fluffypony>** medusa_: are you around?  
**\<fluffypony>** ok in the absence of medusa_ being around, dEBRUYNE have you been following Ilya's progress on medusa_'s issues?  
**\<dEBRUYNE>** Yeah, he has fixed all issues opened by medusa_ as far as I know  
**\<fluffypony>** ok great  
**\<medusa_>** yes im here  
**\<dEBRUYNE>** Except -> https://github.com/monero-project/monero-core/issues/29  
**\<dEBRUYNE>** but that's more of a feature, which should be implemented later  
**\<fluffypony>** oh cool - medusa_ how are you finding it now that most of the issues have been fixed?  
**\<dEBRUYNE>** could*  
**\<TedTheFicus>** MK_ + Others who are wondering, the monero-core project that is being discussed now is the GUI  
**\<medusa_>** i think we need more feedback regarding the performance difference between gui wallet creation time and CLI wallet creation time  
**\<medusa_>** and i dont know of any major bugs that would be dangerous  
**\<fluffypony>** medusa_: there's a PR that's supposed to fix that  
**\<fluffypony>** I haven't merged it yet, but it's gone through review  
**\<dEBRUYNE>** Ilya merged jacquee's PR as well  
**\<dEBRUYNE>** he noticed a significant improvement  
**\<medusa_>** so my opinion is merge all to monero-core project master,  test there again and if its good we build the bins  
**\<dEBRUYNE>** ^ +1  
**\<dEBRUYNE>** Beta binaries will also bring more testers, who possibly could notice something we might have overlooked  
**\<fluffypony>** ok  
**\<TedTheFicus>** Im down to test once the Betas are out  
**\<fluffypony>** we'll need a point release of 0.10 to go with it  
**\<fluffypony>** so we should at least get through the current group of pending PRs before we do that  
**\<medusa_>** but we must communicate its for testing, since the seed is nowhere displayed after creation we dont want people to lose money  
**\<moneromooo>** It creates a keys file, right ?  
**\<fluffypony>** medusa_: well that's a pretty big issue :-P  
**\<medusa_>** yes  
**\<fluffypony>** ah ok  
**\<fluffypony>** so monero-wallet-cli could be shipped with it for recovery  
**\<TedTheFicus>** Good idea  
**\<moneromooo>** Well, you do need the daemon anyway, don't you.  
**\<medusa_>** yes  
**\<dEBRUYNE>** \<fluffypony> so monero-wallet-cli could be shipped with it for recovery <= It's able to recover seeds  
**\<dEBRUYNE>** It's just that only in the wizard the seed is shown once  
**\<dEBRUYNE>** oh wait, you mean restore with the .keys file?  
**\<fluffypony>** yes I meant recovery as in "recover my seed from the .keys file"  
**\<ArticMine>** Recovery from seed is the issue with the GUI?  
**\<dEBRUYNE>** ah gotcha  
**\<dEBRUYNE>** No ArticMine, there isn't a window yet to see your seed  
**\<dEBRUYNE>** after the initial wizard  
**\<fluffypony>** ArticMine: no - it just doesn't display the seed again after the wizard  
**\<fluffypony>** and given how many MyMonero support emails I get where people didn't write down their seed...  
**\<dEBRUYNE>** Should be fairly trivial to add though  
**\<fluffypony>** ok so that's about it from my side - tewinget isn't around to give us a 0MQ update  
**\<fluffypony>** hyc I don't think has started tinkering with the walletDB stuff  
**\<fluffypony>** also the forum - I know, I'm working on it, moved all broken deps into monero-project repos to better manage them and am fixing the last few niggly issues  
**\<dEBRUYNE>** fluffypony: re: GUI, preferably we would have a tab that displays viewkey/seed/spendkey, the tab could be named Private Keys or something, with a big fat warning label :P  
**\<dEBRUYNE>** Like I said, should be fairly trivial to add  
**\<fluffypony>** dEBRUYNE: good idea - open an issue for it and let Ilya do it asap :)  
**\<fluffypony>** ok so we have 7 minutes before the Kovri meeting, any other things to discuss?  
**\<dEBRUYNE>** fluffypony: will do  
**\<dEBRUYNE>** NoodleDoodle isn't here right?  
**\<moneromooo>** Who wants to volunteer to review some patches from time to time ? :)  
**\<dEBRUYNE>** moneromooo: Similiarly, would you be able to glance over / review the trezor XMR code?   
**\<moneromooo>** Where is it ?  
**\<fluffypony>** on NoodleDoodle's computer  
**\<dEBRUYNE>** https://github.com/NoodleDoodleNoodleDoodleNoodleDoodleNoo  
**\<dEBRUYNE>** ^ moneromooo   
**\<dEBRUYNE>** he has some commits in his monero repository and in trezor-xmr  
**\<fluffypony>** :-P  
**\<i2p-relay> {-anonimal}** moneromooo: I review many of them but I don't spend enough time with the codebase to ack/nack  
**\<moneromooo>** anonimal, thanks :)  
**\<moneromooo>** dEBRUYNE: Do you know which one of the three repos is the right one ?  
**\<moneromooo>** xmr, common, mcu. xmr seems likely to be one at least.  
**\<dEBRUYNE>** oh trezor-xmr  
**\<dEBRUYNE>** and monero  
**\<dEBRUYNE>** So his commits here -> https://github.com/NoodleDoodleNoodleDoodleNoodleDoodleNoo/monero/commits/master?author=NoodleDoodleNoodleDoodleNoodleDoodleNoo  
**\<moneromooo>** OK, I'll keep that in mind then.  
**\<dEBRUYNE>** & here -> https://github.com/NoodleDoodleNoodleDoodleNoodleDoodleNoo/trezor-xmr  
**\<medusa_>** i can not review the code, but i can test specific pull requests if you guys explain me what you changed  
**\<dEBRUYNE>** trezor-mcu / trezor-common has no commits from NoodleDoodle moneromooo   
**\<moneromooo>** medusa_: 1082 and 1121 could do with some testing if you feel like it.  
**\<moneromooo>** And 1140 :)  
**\<moneromooo>** 1082 changes the way fake outs are selected  
**\<cryptotekk>** wow in this pace i see GUI by tonight lol  
**\<moneromooo>** 1121 replaces the sweep_unmixable code to be more stable and, well, better  
**\<moneromooo>** 1141 adds cold wallet signing  
**\<medusa_>** oh i can test 1141  
**\<medusa_>** i still have the setip from the --offline thing  
**\<moneromooo>** 1140, sorry. Off by one...  
**\<fluffypony>** oh no off by one bug!  
**\<medusa_>** will have a look, thanks  
**\<moneromooo>** Mac, Linux, and Plan9.  
**\<cryptotekk>** android please  
**\<liberte>** lol  
**\<fluffypony>** hokay  
**\<fluffypony>** that's the end of that  
