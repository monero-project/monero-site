---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-02-05
summary: Sync improvements for HDD, GUI 2nd Beta, fluffy blocks, and dynamic fee discussion
tags: [dev diaries, core, crypto,]
author: dEBRUYNE / fluffypony
---

### Overview  

An overview [can be found on Hello Monero](https://hellomonero.com/article/monero-dev-meeting-note-highlights-and-transcript-2017-02-05).    

### Logs  

**\<fluffypony>** ok  
**\<fluffypony>** welcome to the 77th annual hunger games  
**\<hyc>** oof  
**\<fluffypony>** 1. greetings  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<fluffypony>** 4. Any additional meeting items  
**\<fluffypony>** 5. Confirm next meeting date/time  
**\<fluffypony>** so let's start with 1  
**\<fluffypony>** hi  
**\<pero>** HOLA  
**\<hyc>** hi. I'm hyc, and I'm a monerophile  
**\<Snipa>** Morning.  
**\<DaveyJones>** ArcticMine, luigi1111, luigi1114, luigi1112,  othe, hyc, smooth, jaquee, m5M400, medusa, tewinget, zone117x, dEBRUYNE, moneromooo  
**\<i2p-relay> {-olark}** greetings  
**\<Slack> [xmr-eric]** hullo  
**\<Jaquee>** hey  
**\<DaveyJones>** one question... is there free margeritas?  
**\<anonimal>** Present in Q state.  
**\<Slack> [endogenic]** \* hands DaveyJones a margarita  
**\<fluffypony>** DaveyJones: of course, dev meetings are 100% serious business and you need margaritas for that  
**\<ArticMine>** greetings  
**\<fluffypony>** ok let's move on to 2  
**\<hyc>** when was the last meeting?  
**\<DaveyJones>** 2 weeks before christmas?  
**\<fluffypony>** it's been nearly 2 months since the last dev meeting because of end-of-year and me travelling etc.  
**\<fluffypony>** does anyone want to mention stuff that's been done  
**\<meeting-bot> [EinMByte]** Hi  
**\<fluffypony>** (brb hopping out of taxi)  
**\<meeting-bot> [i2p-relay] {-anonimal}** ^ FYI, monero meeting, kovri in 55 minutes.  
**\<hyc>** many many commits have been merged  
**\<dEBRUYNE>** I am here  
**\<hyc>** I will mention my own, using batched txns for node syncing, to reduce I/O demand  
**\<meeting-bot> [EinMByte]** anonimal: Oh right, should be keeping an eye on the meta repository too  
**\<hyc>** this seems to speed up syncing on HDD by 2-3x while improving stability  
**\<Jaquee>** great stuff hyc!  
**\<anonimal>** hyc: sounds tasty  
**\<hyc>** (the actual goal was to eliminate the few corruptions we've see non Windows)  
**\<hyc>** seen on  
**\<anonimal>** So the corruptions were fixed too?  
**\<hyc>** so far it appears so.  
**\<hyc>** I examined 3 corrupted Windows data.mdb files. they all had zero pages at the tail of the file  
**\<hyc>** due to not being sync'd before OS crashed  
**\<hyc>** the new code syncs more frequently, but in a background thread  
**\<hyc>** so throughput is still high because foreground doesn't have to wait for it  
**\<hyc>** but syncs are more often, to reduce the chance of unsync'd pages during a crash  
**\<hyc>**   but there's no 100% guarantee there.  
**\<anonimal>** IIRC, this fix/addition was after latest point release? Was point release before or after the previous meeting?  
**\<hyc>** this is for the default "fast" mode. you can still use "safe" mode for 100% guarantee, but super-slow.  
**\<hyc>** and this is recent, merge was only a week or so ago  
**\<anonimal>** ok  
**\<fluffypony>** ok back, just got to sXpher's house  
**\<hyc>** cool. I think that's it for me.  
**\<fluffypony>** hyc: tons of commits  
**\<hyc>** yeah  
**\<fluffypony>** was fluffy blocks already merged in by the last meeting?  
**\<anonimal>** I think so?... That was before point release right?  
**\<hyc>** I thought fluffyblocks was in 0.10.1  
**\<Jaquee>** yes, pretty sure it was  
**\<iDunk>** It was  
**\<moneromooo>** I think it could be enabled on mainnet now, since testnet's not shown anything wrong with it.  
**\<fluffypony>** anonimal: I can't remember  
**\<fluffypony>** moneromooo: agreed  
**\<Jaquee>** +1  
**\<anonimal>** moneromooo's new logging implementation, this is new.  
**\<moneromooo>** Snipa: you did test it with a private testnet with only such nodes, right ?  
**\<gingeropolous>** the crazy reorgs on testnet are due to old nodes on testnet?  
**\<fluffypony>** yeah the new logging colours threw me for a loop :-P  
**\<medusa>** yes logging is new, GUi scope for next release is like this:  
**\<medusa>** extended x64 x86 linux support / cold signing / view only wallets / restore from private keys / integrated mining  / better logging / daemon status button /  
**\<medusa>** +display unlock time and confirmation  
**\<Snipa>** moneromooo - No, I didn't test on a private testnet, but my personal nodes all have patches enabling it on mainnet between them, and I'm not seeing any issues with it yet.  
**\<Snipa>** All of my testnet nodes of course, have been running it as well without issues.  
**\<moneromooo>** OK, I guess my point was lost. I don't have the disk space for many blockchains to test though...  
**\<Snipa>** If I need to go setup another one, I've got enough disk space to do so.  IIRC we thought it wasn't needed because all of the active testnet nodes were using it.  
**\<fluffypony>** medusa: ok great  
**\<fluffypony>** I think for future we should have a separate line item for GUI stuff  
**\<moneromooo>** My point was that I wanted to see if it worked on a network with ONLY fluffy blocks being sent.  
**\<fluffypony>** (if there is GUI stuff I mean)  
**\<moneromooo>** But it seems everyone just mentally removes the "only" word :D  
**\<Snipa>** Ah, sorry, I must of missed that.  I can set that up still if it's wanted.  I've got more than enough nodes to do so.  
**\<moneromooo>** That'd be great, yes.  
**\<moneromooo>** I thought you'd already done that actually.  
**\<moneromooo>** What I want to know is whether there is a failure mode when a node can't sync from a fluffy block, but gets the block anyway from another peer.  
**\<fluffypony>** can't we just make testnet fluffy blocks only?  
**\<fluffypony>** and then we test it there  
**\<Snipa>** kk, I'll go figure out how to isolate a bunch of nodes this afternoon, and setup a small network to mine on.  
**\<moneromooo>** We could.  
**\<fluffypony>** testnet seems pretty robust given the amount of stuff we've done on it  
**\<fluffypony>** lol  
**\<medusa>** Snipa: https://github.com/moneroexamples/private-testnet  
**\<Snipa>** I mean, I leave a couple hundred h/s there on my test pool.  And have ~10-ish nodes up on it.  
**\<Snipa>** Oh, so I can add multiple exclusive nodes?  I think that was one of the questionmarks I was running into.  
**\<fluffypony>** okyes  
**\<fluffypony>** yes  
**\<Snipa>** Good stuff, I'll go fight with that here in a bit.  
**\<fluffypony>** ok  
**\<fluffypony>** let's move on  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<fluffypony>** issues on Github are starting to pile up, and I think we should get on top of that  
**\<fluffypony>** as discussed before, the lack of granularity in Github's permissions is a bit of an irritation  
**\<fluffypony>** we've discussed having a second repo with more collaborators, but I think that's going to create more confusion than anything else  
**\<fluffypony>** so my suggestion would be that we set up an issue closing bot that has collab status  
**\<fluffypony>** and then that has a list of people that can ping it to close issues  
**\<hyc>** that sounds cool  
**\<fluffypony>** I haven't had a chance to see if such a thing exists, but if not it isn't hard to write  
**\<pero>** https://github.com/foosel/GitIssueBot  
**\<medusa>** that sounds great  
**\<fluffypony>** and if we set it up to do re-labelling too  
**\<i2p-relay> {-anonimal}** How to protect from troll abuse?  
**\<Jaquee>** cool. could it handle labeling too?  
**\<pero>** cant close yet but perhaps can be extended  
**\<moneromooo>** by "list of people"  
**\<fluffypony>** anonimal: only specific people can ping it  
**\<i2p-relay> {-anonimal}** k  
**\<medusa>** a good start would be if everyone also takes care of their own issues in the meantime ( i know me included)  
**\<fluffypony>** medusa: agreed  
**\<fluffypony>** ok any Q&A items?  
**\<moneromooo>** About what ? Anything ?  
**\<fluffypony>** moneromooo: yes  
**\<fluffypony>** hi, I'm fluffypony, AMA  
**\<pero>** i'm actually curious about the status of paybee  
**\<pero>** ;p  
**\<moneromooo>** Then I'm annoyed at the merge commits, which can embed some arbitrary amount of dross, making things easy for an external attacker with access to github to slip pwnage.  
**\<moneromooo>** Does anyone know a good way to prevent those (with manual exceptions since tewinget already said he wouldn't rebase the massive 0MQ branch) ?  
**\<fluffypony>** pero: we can talk about it later  
**\<DaveyJones>** any word from tewinget? did not read a thing from him recently, regarding 0mq  
**\<moneromooo>** A git hook looks like the obvious option, though it's still vulnerable to github.  
**\<pero>** i asked him last night - sec  
**\<fluffypony>** moneromooo: you mean to merge without the merge commit?  
**\<Jaquee>** that would require a rebase by the merger?  
**\<pero>** \<tewinget> \<pero> very little movement on that front - the pr hasnt been touched in 2 months \<--- I haven't commented on it in as much time, but I've worked on it.  Not as much as I could/should have, of course, but...  
**\<moneromooo>** I'm not sure about that. AIUI, it's needed for the signatures. I'm not super knowledgeable about what that entails wrt amount of dross.  
**\<i2p-relay> {-anonimal}** fluffypony: you very recently finished your extended 1 month+ tour, can you fill us in with details of any notable experiences?  
**\<fluffypony>** moneromooo: it *is* needed for the signature, not everyone is signing their commits  
**\<moneromooo>** Yes, rebase would fix, but that'd need a LOT of rebases, so isn't practical.  
**\<hyc>** and cherry-picking would lose signature?  
**\<moneromooo>** cherry-pick -S resigns.  
**\<fluffypony>** it re-signs  
**\<fluffypony>** and we want to maintain author sigs where they exist  
**\<hyc>** but with picker's key, not original key?  
**\* anonimal** believes so  
**\<moneromooo>** Yes, if someone else cherry-picks, then you can't preserve sig.  
**\<moneromooo>** This massive hole just annoys me, but I'm not sure how to fix it.  
**\<fluffypony>** moneromooo: me neither  
**\<luigi1112>** are you talking about the merge commits into master or like merging instead of rebasing  
**\<fluffypony>** I don't think it's a solvable problem  
**\<moneromooo>** My automated sig checking on make thing is also vulnerable to that, since it trusts anyuthing the pony signs.  
**\<fluffypony>** luigi1112: merge commits into master  
**\<moneromooo>** Well, we can ask him to rebase, that's not hard.  
**\<moneromooo>** It is for tewinget due to the amount of stuff, but that's a special case.  
**\<fluffypony>** moneromooo: rebasing will also make it hard to use Github to track PRs, surely?  
**\<fluffypony>** rebase-only I mean  
**\<luigi1112>** so you want the maintainers merge commits to go away?  
**\<moneromooo>** I meant rebasing before PR. The merger would still do a merge commit, unfortunately.  
**\<moneromooo>** No, just yours, if you PR any. I understood fluffypony's line to mean this, maybe I misunderdtood.  
**\<hyc>** well,we can solve this but the procedure gets more awkward:  
**\<hyc>** PR author rebases before merge  
**\<hyc>** which mean merger has to contact PR author immediately before each merge  
**\<moneromooo>** Oh, I hadn't seem luigi1112's first line. Ignore my last 2 then.  
**\<moneromooo>** Yes, that's what I ment by not practical :/  
**\<fluffypony>** yeah that won't work  
**\<fluffypony>** :(  
**\<anonimal>** Question:  
**\<fluffypony>** anonimal: answer  
**\<fluffypony>** :-P  
**\<moneromooo>** I guess the best we can do it some kind of subjective "rebased not too long ago so any extra dross diff is small enough".  
**\<DaveyJones>** i know ... i know ... 42  
**\<anonimal>** Ok, two questions: is PR author out of the picture? Poof/gone?  
**\<moneromooo>** But it requires the merge to check it.  
**\<moneromooo>** anonimal: usually not, but maybe a couple days' latency. Which means the merger has all the latencies in series.  
**\* anonimal** not 100% following the problem  
**\<anonimal>** Oh, ok.  
**\<i2p-relay> {-olark}** What about hosting code on something that is under our control and not github? This would involve not using github though.  
**\<fluffypony>** moneromooo: but this is all in an effort to make sure that maintainers can't introduce extra bits in, right?  
**\<moneromooo>** I guess most of the problem is fixed by refusing any patch with irrelevant crap, with merge commits, and when they also cause more than trivial diffs in the final merge commit.  
**\<fluffypony>** olark: that's not the problem, my merge commits are GPG signed, so *I'm* the failure mode, not Github  
**\<i2p-relay> {-olark}** right  
**\<anonimal>** So, why not close their PR and reopen a new one with their branch merged (not rebased) to maintain original sigs?  
**\<moneromooo>** Well, maintainers and anyone who could fool the maintainer into signing a large merge.  
**\<anonimal>** If they can't keep up, then do the work for them?  
**\<moneromooo>** anonimal: I do not understand "why not close their PR and reopen a new one with their branch merged (not rebased) to maintain original sigs?"  
**\<hyc>** neither do I  
**\<hyc>** sounds to me like it would create exactly the problem we're trying to address  
**\<hyc>** PRs with irrelevant changes sliding in  
**\<anonimal>** I think I don't understand the problem, so my question doesn't make sense.  
**\* anonimal** is 25% here, preparing for kovri meeting  
**\<fluffypony>** moneromooo: otoh it's not like we have so many eyes on PRs that nothing at all could be snuck past us, so maybe we're trying to solve a problem that is ultimately a non-issue  
**\<hyc>** I think we should continue this after the meeting, probably won't solve it here.  
**\<moneromooo>** So... we're screwed alrady, might as well not care ?  
**\<luigi1112>** :-)  
**\<fluffypony>** moneromooo: yes :-P  
**\<moneromooo>** I guess it is a practical solution for now.  
**\<moneromooo>** Though, an easy win is to automatically reject any PR with a merge commit in it.  
**\<i2p-relay> {-olark}** hmm  
**\<moneromooo>** If github could be set up to reject those, that'd remove a good chunk of dross already.  
**\<fluffypony>** moneromooo: I'm happy with that - could the requester fix it by rebase + force-push ?  
**\<moneromooo>** (though still vulberable to github itself, but we said we don't care for now)  
**\<hyc>** do you have a recent example of a problematic PR?  
**\<moneromooo>** Yes. That's what I do when I fix a trivial thing in a PR of mine.  
**\<Slack> [nanoakron]** That’s what I do with mine  
**\<hyc>** and yes, I usually rebase my PRs on latest master  
**\<fluffypony>** on the topic of Github, pigeons has a Gitlab mirror running on our (Monero's) hardware, so we're reasonably resilient to weirdness  
**\<moneromooo>** Not a recent one. I found one, but it's a very odd behavior on a single VM.  
**\<moneromooo>** A mirror isn't really a good protection against this I think.  
**\<fluffypony>** ok so new rule is that people submitting PRs should be asked to rebase + force-push if a merge commit exists in their PR  
**\<moneromooo>** Yes, please. I do when I see them, but I often look just at the diffs and forget commits.  
**\<hyc>** yeah that sounds reasonable  
**\<Jaquee>** yep  
**\<moneromooo>** But it could be automated I think.  
**\<fluffypony>** I'll look to see if there's a hook  
**\<fluffypony>** would be nice to automate things like notices on buildbot failures  
**\<moneromooo>** I just saw a java jar one. Which seemed... meh.  
**\<fluffypony>** or on first-buildbot-failure  
**\<Slack> [jollymort]** i have one q: what if the price explodes again and does 10x - what to do with fees? make F0 in the dynamic fee calc 10x smaller? somehow i feel it would call for a one time 10x blocksize bump as well to keep the proportions same, otherwise we'd need huge multipliers to get to the point where increasing fee gives incentive to bump the blocks  
**\<fluffypony>** ArticMine: ^^  
**\<ArticMine>** A price increase without a corresponding increase in blocksize?  
**\<Slack> [jollymort]** yeah  
**\<pigeons>** the ircbot for buildbot can notify when a job goes success->fail  
**\<Slack> [nanoakron]** @jollymort it’s not really reasonable to ask the blockchain to care about the fiat price because that requires gameable oracles  
**\<fluffypony>** pigeons: can it notify on the PR tho?  
**\<pigeons>** yes  
**\<fluffypony>** pigeons: ok cool - let's chat about it later / tomorrow and figure out which platforms we want to target with that  
**\<Slack> [jollymort]** nanoakron i get it, but with the current set-up we decided on an arbitrary starting point  
**\<Slack> [nanoakron]** You mean 60k blocks?  
**\<DaveyJones>** also jollymort ... what is a reasonable time-frame to call sth a higher price to even justify changing F0 ?  
**\<moneromooo>** fwiw, there's so much constant failures that I ignore the buildot pings now (sorry)  
**\<ArticMine>** Over time the assumption is that price follows transaction demand. Over the short term ther may well be a delay.  
**\<Slack> [jollymort]** good point Davey... but i can imagine a scenario where we have 3$ fees for some period  
**\<Slack> [nanoakron]** @jollymort What is a $3 fee? How does the system determine that in a zero-trust manner?  
**\<Slack> [jollymort]** it doesn't  
**\<Slack> [jollymort]** maybe difficulty is a loose peg  
**\<Slack> [nanoakron]** Fees are an economic negotiation between miners and users  
**\<ArticMine>** If the price rises very fast it could happen. There is another complication factor here namely one time changes in transaction size  
**\<Slack> [jollymort]** yeah, was RCT size bump considered?  
**\<DaveyJones>** maybe if sth like the average tx over a given time period sink TOO low some kind of mechanism would detect such a behaviour and see it as too expensive TX  
**\<ArticMine>** Ultimately fees are set by the blocksize penalty / demand / base reward  
**\<Slack> [jollymort]** nanoakron i know that, but the minimum fee could become problematic in case of price bump  
**\<Slack> [nanoakron]** The sudden increase to RCT sizes should have perhaps been considered in advance. The problem is people who panicked and refused to use RCT Tx, thereby keeping an odd mix of large and small Tx in each block, preventing proper upwards adjustment in size and downwards adjustment in fee  
**\<DaveyJones>** buth my math is way to bad to give a better example :D  
**\<Slack> [jollymort]** so just changing F0 would probably be ok  
**\<ArticMine>** Yes the minimuim fee could need to be adjusted  
**\<Slack> [nanoakron]** @jollymort can you please model what you want to happen first and submit it as a post or code somewhere so it can be considered formally? A bit of academic rigour would be nice here  
**\<ArticMine>** We just had an effective increase in TX size ~10x +  
**\<DaveyJones>** without changing F0  
**\<ArticMine>** F0 was changed just before in anticipation  
**\<DaveyJones>** ah okay  
**\<Slack> [jollymort]** cool  
**\<Slack> [jollymort]** anyway, i'll do some study  
**\<Slack> [jollymort]** but just wanted to see your thoughts  
**\<ArticMine>** The relevant question is the change in RingCT Tx size and further optimizations  
**\<Slack> [nanoakron]** I’m not averse to the idea, so long as it can be justified with a nice model of the expected behaviour and consideration of the potential attack surface  
**\<Slack> [xmr-eric]** I have a question. When should the GUI come out of beta status? Because things are feeling pretty stable and the featureset seems complete to me.  
**\<ArticMine>** Since this influences blocksize and consequently fee paid  
**\<hyc>** It should be perpetually beta. It gets lonely around here without the reassuring lull of "where's the GUI" in the background  
**\<Slack> [jollymort]** i was thinking of: increase baseline block size x5 and reduce F0 with x0.2  
**\<Slack> [jollymort]** but block size is consensus so..  
**\<moneromooo>** Where's the LMDB wallet file ?  
**\<Slack> [jollymort]** needs some justifications  
**\<DaveyJones>** nanoakron like i said... maybe sth like the average tx numbers decrease drastically for a given time frame could be a trust-less way too do it... but i have no clue how to get a decent formula  
**\<Slack> [nanoakron]** Hrm...  
**\<DaveyJones>** as actual example... the price pumps and suddenly it is WAY to expensive to do any tx for the people  
**\<Slack> [jollymort]** tx numbers can be gamed  
**\<ArticMine>** jollymort there is merit to this  
**\<Slack> [nanoakron]** @hyc is it possible to auto-scan the database file if the system wants to crash? e.g. “Database corrupt after block 120842…rewinding…"  
**\<Slack> [jollymort]** x5 due to RCT size increase  
**\<Slack> [jollymort]** when the original 60kb was set, probably RCT was not in the works  
**\<Slack> [jollymort]** so it was based on TXes of 1kb  
**\<luigi1112>** yes  
**\<ArticMine>** the issue is the relative size of the tx to minim blocksize  
**\<Slack> [jollymort]** or whatever was the pre-RCT size  
**\<luigi1112>** is dev meeting over  
**\<hyc>** nanoakron: not in general. since we only keep 2 persistent versions of the DB.  
**\<Slack> [jollymort]** ArcticMine yes, that's how i see it  
**\<hyc>** nanoakron: if the OS failed to sync the previous two txns, then the corruption is uncrecoverable.  
**\<Slack> [nanoakron]** @hyc :( How about these pages of zeroes - if that’s a consistent failure mode can they be unwound?  
**\<Slack> [nanoakron]** Oh  
**\<fluffypony>** ok guys  
**\<Slack> [jollymort]** anyways, just wanted to know if anyone else thought about this; won't take any more of your time  
**\<fluffypony>** let's wrap it up  
**\<Slack> [nanoakron]** That’s all it takes?  
**\<Slack> [nanoakron]** 2 Tx  
**\<fluffypony>** Kovri meeting starting in 5 minutes  
**\<hyc>** nanoakron: yes. we could change this.  
**\<DaveyJones>** fluffypony ... AMA after the kovri meeting? :D about your journey and paybee?  
**\<hyc>** nanoakron: use a longer delay before reusing old pages.  
**\<DaveyJones>** if you got something to tell ^^  
**\<Slack> [nanoakron]** @hyc Ok. At least there’s a potential way through it.  
**\<i2p-relay> {-olark}** I opened an issue to start discussing alternatives to the ringsize increase in September 2017 that negates a lot of possible attack vectors on ring signatures and still ensure a 'true' strength of ringsize 4 at minimum for all transactions. It is here https://github.com/monero-project/monero/issues/1673 I think it requires serious consideration moving forward. I won't go too much into it and  
**\<i2p-relay> {-olark}** just let everyone read the writeup :p  
**\<Slack> [nanoakron]** @olark I’d like knaccc to contribute too with his modelling of churn  
**\<Slack> [xmr-eric]** I like the idea of a static ringsize  
**\<Slack> [jollymort]** i like the "static" proposal  
**\<Slack> [xmr-eric]** ^^  
**\<Slack> [jollymort]** and yes, also churn  
**\<fluffypony>** DaveyJones: sounds good - I've got to step out for a little bit  
**\<Slack> [xmr-eric]** No thoughts on getting GUI out of beta status, everybody  
**\<i2p-relay> {-olark}** because the current situation is... undesirable to say the least  
**\<moneromooo>** What is beta status ?  
**\<hyc>** xmr-eric: sounds like not yet.  
**\<Jaquee>** xmr-eric: i think we need one more beta release at least.  
**\<knaccc>** nanoakron kenshi84 blew some big holes in my churn suggestion btw, so my model isn't good yet.  
**\<Slack> [nanoakron]** @knaccc Ah…well, all discussion is good  
**\<Slack> [xmr-eric]** Cool  
**\<hyc>** knaccc: cool, is that written anywhere?  
**\<Slack> [nanoakron]** @xmr-eric and if you see bugs, please bring them up on github  
**\<fluffypony>** ok anonimal the floor is yours  
**\<Slack> [jollymort]** also, opened discussion on multiple PID / TX : ) https://github.com/monero-project/monero/issues/1659  
**\<knaccc>** hyc only in my IRC logs. Summary is that the churn only works if you're churning with pure ringct trees, doesn't work if there are non-ringCT transactions mixed in  
**\<hyc>** thx  
**\<meeting-bot> [i2p-relay] {-anonimal}** I have 2 minutes to prepare  
**\<Slack> [jollymort]** i thought you can't mix rct+non-rct outputs anyway  
**\<meeting-bot> [i2p-relay] {-anonimal}** 17:59 1 minute!  
**\<Jaquee>** +1 lmdb wallet  
**\<Slack> [nanoakron]** waits with bated breath  
**\* moneromooo** congratulates nanoakron for correct spelling.  
**\<Slack> [nanoakron]** :grimacing:  
**\<anonimal>** Any objections to me typing in #monero-dev?  
**\<knaccc>** jollymort it's when you mix with an output that is a ringct output but whose inputs are non ring-ct. that breaks churn  
**\<meeting-bot> [fluffypony]** none from fluffy-on-this-side either  
**\<fluffypony>** none  
**\<hyc>** no objection  
**\<moneromooo>** That wasn't sarcasm actually :D  
**\<meeting-bot> [i2p-relay] {-ArticMine}** Fine with me  