---
layout: post
title: Logs for the Dev Meeting Held on 2018-01-14
summary: Discussion of open PRs and issues, Bulletproofs, March HF, and miscellaneous
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<rehrar>** https://github.com/monero-project/meta/issues/157  
**\<rehrar>** Here's the agenda.  
**\<rehrar>** We kinda did greetings, but if anyone else is present, please say "hi"  
**\<gingeropolous>** hi  
**\<jtgrassie>** hi!  
**\<pigeons>** hi!  
**\<Maxithi>** hi  
**\<pebx>** hi  
**\<ferretinjapan>** hi  
**\<binaryFate>** hi  
**\<rehrar>** alright, so let's get started then!  
**\<rehrar>** 2. Brief review of what's been completed since the previous meeting  
**\<rehrar>** Anyone have anything exciting or fun to report since our last meeting a month ago?  
**\<rehrar>** Get any fun gifts for the holidays maybe?  
**\<Maxithi>** 24 commits 4 days ago.  
**\<Maxithi>** On the main core. Nothing special. Maybe a little cheering for cslashm and hist first Ledger PR.  
**\<endogenic>** well we've made some progress with apple, fyi … confirmed there was an account mixup on their side with a human being and we're finally getting that sorted. will update you all as i hear things  
**\<rehrar>** that IS pretty exciting Maxithi  
**\<endogenic>** have to submit some docs, etc  
**\<hyc>** nothing much to report here  
**\<sgp>** hi  
**\<rehrar>** endogenic dude, that's gotta be thrilling to get some news finally  
**\<rehrar>** ArticMine, do you want to speak briefly about Kiev?  
**\<endogenic>** rehrar yeah i mean these things usually happen instantly so once i called them they were like yeah that's no good let'sget that sorted  
**\<ArticMine>** Sure, but it is not really dev related  
**\<rehrar>** just a brief four sentence thing should be alright  
**\<vtnerd>** after a discussion with luigi1111, I should be proposing an optimization for wallet scanning that mymonero is using - want to test with a standard wallet to give real world perf numbers before PR  
**\<vtnerd>** ah sorry ArticMine  
**\<rehrar>** no, go ahead vtnerd :) anyone and everyone with an update feel free to let us know  
**\<vtnerd>** ok, this optimization is separate from the ASM work in monero-project/supercop (still pending a PR), so it works with standard ref10 (i.e. all platforms)  
**\<vtnerd>** it will require a few changes to src/crypto.{h|c} so be on the lookout for that PR  
**\<gingeropolous>** is this just for your standard refresh? or related to remote viewkey scanning... or both?  
**\<vtnerd>** this is specifically for scanning receiving outputs on a primary address  
**\<vtnerd>** it does not benefit subaddresses, but does benefit simplewallet / GUI / anyone doing viewkey scanning  
**\<medusa>** lets talk about the elephant in the room ? bulletproof is in all varieties on testnet  
**\<rehrar>** Alright. Thanks. :) Anyone else? If not we'll move on.  
**\<rehrar>** Ye, that's next.  
**\<moneromooo>** Things of note since last time: build hardening (currently breaks static builds though), DNSSEC fix on windows, DB and sync hang fixes, secure memory wiping (wip), misc code review and fixes, updates now use HTTPS and can resume downloads  
**\<ArticMine>** In brief I attended BTC awards CIS and participated in the coins panel. There were two other coins present Dash, ZenCash. Overall it went very well and provided exposure to Monero among the CIS (Commonwealth of Independent state)  crypto communities  
**\<endogenic>** medusa: last i heard MRL was looking for people to review and audit bulletproofs  
**\<endogenic>** sarang would be able to give you more information  
**\<ArticMine>** That is my brief update  
**\<ArticMine>** Whan it comes to bullteproof this has to move to September  
**\<endogenic>** moneromooo: beast mode  
**\<rehrar>** ArticMine, care to elaborate?  
**\<moneromooo>** Not all of this by me fwiw.  
**\<hyc>** Interesting ArticMine - CIS already has monero experience, thru the Karbo clone in Ukraine  
**\<medusa>** GUI is merging sub addresses finally, dsc is working on the black theme sucessfully and we hope to go live in march with 2 progress bars instead of 1 (sync and refresh separated). also we added a "change password" feature to the GUI  
**\<ArticMine>** FP spoke with  Pieter Wuille who is recommending September  
**\<sarang>** Jumping in for any questions about BPs that I can answer  
**\<ArticMine>** Is there a plan for further review?  
**\<ArticMine>** of B  
**\<sarang>** Yes  
**\<ferretinjapan>** Are there any showstoppers on bullteproofs that would justify moving back rolling it out?  
**\<sarang>** Initiating contact w/ an audit group that fluffypony knows  
**\<sarang>** It's not fully clear what their scope of review can be, but I will find out shortly on a phone meeting with them  
**\<sarang>** The goal being additional third-party review  
**\<hyc>** ferretinjapan: there's no known problems. additional review is being planned to avoid unknown problems  
**\<rehrar>** Yeah, so we naturally moved onto third item on the agenda, which is code freeze, March hard fork. Bulletproof is the biggest one. Everyone's thoughts?  
**\<binaryFate>** beyond code review, sarang what is your opinion on the need of review of the math itself? I'm worried the paper has little time to go through peer-review. But maybe match checks out so obviously that it's not needed.  
**\<sarang>** The math is solid. Additional peer review is always a welcome thing, though with diminishing returns over time  
**\<binaryFate>** (talking about the BP paper -- not the Monero specific implementation)  
**\<sarang>** yes  
**\<sarang>** In the meantime, moneromooo and I have been working on some additional optimizations for proof verification that are independent of the math or specific proof implementation  
**\<ferretinjapan>** I guess thats the thing, how much "value adding" is an additional audit for now justified?  
**\<binaryFate>** nice  
**\<sarang>** We've had a select number of informal reviews  
**\<sarang>** but no formal third-party review yet  
**\<ArticMine>** ... but still this warrants a delay to September for BP  
**\<sarang>** To get the review done? Almost certainly  
**\<sarang>** The advantage to the delay is that we could bypass single-output BPs altogether  
**\<sarang>** figure out the multi-output fee structure, and release that  
**\<medusa>** multi output for march is a non option ?  
**\<sarang>** Correct  
**\<ferretinjapan>** seems incredibly wasteful :/  
**\<sarang>** It requires a change to the way fees are computed  
**\<hyc>** I'm in favor of skipping single-output. would be a lot of work for a very short-lived feature.  
**\<sarang>** Yes, though single-output proofs will verify with the multi-output code with no changes  
**\<ferretinjapan>** you'd be better served making sure that there is a fallback to BP instead of pushing back entirely.  
**\<rbrunner>** Isn't the work almost all done anyway?  
**\<ferretinjapan>** this is a classic case of perfect being the enemy of good.  
**\<endogenic>** realized we didnt ping anonimal  
**\<sarang>** We have multi code working now  
**\<sarang>** it's not in testnet yet  
**\<sarang>** and we don't have consensus about the fee structure  
**\<hyc>** ^^  
**\<binaryFate>** I lean towards satefy in general. The ringct bug was close enough  
**\<Maxithi>** hyc Same, better safe than sorry.  
**\<iDunk>** Agreed.  
**\<dEBRUYNE>** sarang: have you considered contacting the paper authors for review?  
**\<gingeropolous>** ferretinjapan, the push to sept is about additional code review, not really about multiout  
**\<dEBRUYNE>** \<binaryFate> I lean towards satefy in general. The ringct bug was close enough \<= I can't survive another mini heart-attack probably  
**\<sarang>** We've had informal review from one author, but the other authors are working on other implementations and I would not rely on them for a speedy review  
**\<hyc>** I suggested soliciting reviews on the Cryptography email list  
**\<endogenic>** nice idea  
**\<hyc>** could also solicit reviews on twitter  
**\<dEBRUYNE>** But presumably they would have some time somewhere between now and August?  
**\<endogenic>** that too  
**\<dEBRUYNE>** \^ sara  
**\<dEBRUYNE>** sarang\*  
**\<sarang>** hyc: are you ok with making such a solicitation?  
**\<sarang>** I could certainly try the other paper authors just in case  
**\<moneromooo>** bypass single-output BPs is not an advantage.  
**\<hyc>** Yes, can do. we need to decide if we'll offer a payment  
**\<sarang>** though they are much more of a long shot  
**\<moneromooo>** bypassing  
**\<ferretinjapan>** gingeropolous, yes, but noones really given a definitive reason to delay except for an overabundance of caution, and by then it'll be unnecessary to even release. :/  
**\<endogenic>** is there a blurb/call-to-actionabout the request to review which i can pass to my relevant mailing lists?  
**\<hyc>** moneromooo: waiting till sept means we can settle on the fees without rushing  
**\<sarang>** hyc: fluffypony indicated we could make funds available for the review, but you'll have to ask him for the details  
**\<moneromooo>** It's not a lot of work, since it exists now.  
**\<ArticMine>** We are only delaying single output not multi output  
**\<moneromooo>** Multi output bulletproofs are in C++, but not plugged into the consensus, which is the annoying part.  
**\<sarang>** Anyone interested in doing a review and wanting details can contact me at sarang.noether@protonmail.com  
**\<endogenic>** such as indicating where to look in the code or repo, background docs, review process, submission format, etc?  
**\<hyc>** endogenic I'll start drafting an email announcenemt  
**\<sarang>** I'll contact the other paper authors separately  
**\<sarang>** and will still press on with the audit group to see what their scope is  
**\<luigi1111w>** there's not much work saved by skipping single output BP  
**\<moneromooo>** waiting till sept does not change anything for fees, since multi out is september anyway.  
**\<luigi1111w>** but the review time is too close for my comfort for march  
**\<luigi1111w>** I think that's the general thought anyway though  
**\<hyc>** alternatively we could delay the March release into April  
**\<sarang>** fluffypony was very opposed to that idea hyc  
**\<hyc>** ok  
**\<ferretinjapan>** could always push back the march hard fork a month or two like last time for RCT.  
**\<sarang>** not saying that's the deciding factor though  
**\<luigi1111w>** rct was pushed forward actually  
**\<rbrunner>** What's fp's main argument?  
**\<ferretinjapan>** oops, I c.  
**\<sarang>** He thought that regular releases were an advantage  
**\<rehrar>** he says that people are getting used to the hard fork schedule  
**\<sarang>** due to predictability  
**\<endogenic>** rbrunner: for?  
**\<ferretinjapan>** rbrunner, probably his snity ;)  
**\<ferretinjapan>** \*sanity  
**\<rbrunner>** Against the 1 month delay  
**\<luigi1111w>** my own shed says 3 months with fork in June :D  
**\<endogenic>** bc it c hanges the hard fork periodicity etc  
**\<endogenic>** guessing  
**\<rehrar>** I think six months is not super long to wait for bulletproofs. It'd be another thing entirely if we were discussing putting it off for a year or so, but not much is lost by being a bit safe and waiting.  
**\<gingeropolous>** ^^  
**\<ferretinjapan>** 6 months is a looong time in crypto  
**\<luigi1111w>** did someone mention future pruning  
**\* luigi1111w** runs  
**\<sarang>** sigh  
**\<gingeropolous>** future pruning? you mean double blob?  
**\<endogenic>** ferretinjapan: better than there being no crypto bc we broke it  
**\* gingeropolous** runs  
**\<sarang>** People also want Lower Fees Now  
**\<sarang>** (tm)  
**\<vtnerd>** we all want ponies sarang  
**\<sarang>** or at least, a vocal minority does  
**\<dEBRUYNE>** \<rehrar> he says that people are getting used to the hard fork schedule \<= I doubt most of the economically sensitive nodes are aware of our schedule  
**\<ferretinjapan>** endogenic, touche, but there comes a point wher you gain nothing by waiting.  
**\<ErCiccione>** I think in this phase keeping the scheduled 6 months shouldn't be a priority. Agree with dEBRUYNE  
**\<rehrar>** If we were to push back by two months from March to May, would that be a good compromise in people's opinions?  
**\<luigi1111w>** no, but 3 months from March to June.....  
**\<sarang>** If we really want additional review, the timeline will need to be flexible to the reviewers  
**\<gingeropolous>** but not rushed  
**\<Maxithi>** I'd rather have 3 months than 6.  
**\<sarang>** academic review can be a frustratingly slow and unpredictable process  
**\<rehrar>** ok, from March to June then  
**\<endogenic>** i agree with sarang, we cant dictate when third parties deliver  
**\<iDunk>** This just looks like a repeat of the last meeting.  
**\<sarang>** basically  
**\<luigi1111w>** iDunk :)  
**\<rehrar>** it basically is :P  
**\<endogenic>** we also dont have enough info to know how long sufficient reviews would take at this stage  
**\<endogenic>** so not sure it's a good idea to judge things yet  
**\<ferretinjapan>** rehrar, I think so, but I think it's important to be realistic, rushing is bad I'll admit (we don't want stressed devs!), but unnecessarily putting it off is also bad  
**\<dEBRUYNE>** 8 months seems like ample time though  
**\<rehrar>** hard part of being decentralized with no leader is that consensus on stuff is hard  
**\<ArticMine>** Why not go ahead with March and if BP is ready then to an early September HF? for BP  
**\<endogenic>** oh yeah what about the meeting agenda?  
**\<luigi1111w>** well there's really nothing left for march  
**\<sarang>** Maybe best to wait to hear about potential reviewer interest  
**\<sarang>** otherwise this is all moot  
**\<luigi1111w>** but we can fork anyway to keep schedule  
**\<sarang>** a totally moo point  
**\<rehrar>** how long do we wait though, since code freeze is soon?  
**\<sgp>** Why not plan a hardfork a month after the BP review is ready, whenever that is?  
**\<endogenic>** mooot\*  
**\<ArticMine>** Multisig is in March  
**\<luigi1111w>** not forking  
**\<rehrar>** Multisig doesn't require a hard fork though  
**\<dEBRUYNE>** Multisig doesn't require a hard fork though  
**\<luigi1111w>** but in release yes  
**\<dEBRUYNE>** lol  
**\<luigi1111w>** you guys  
**\<rehrar>** lel dEBRUYNE  
**\<endogenic>** what the  
**\<rehrar>** of one mind  
**\<gingeropolous>** but still could provide bugs to squash  
**\<endogenic>** just got the heebies  
**\<dEBRUYNE>** bots rekt  
**\<pebx>** so we don't need any hard fork in march without bp?  
**\<ferretinjapan>** sgp, I think thats a solid idea, but "consistency" may be a factor in that.  
**\<luigi1111w>** pebx part of the idea of scheduled forks is to do them anyway  
**\<rehrar>** can we go through the rest of the meeting and come back to this topic?  
**\<sgp>** I think the rewards are so large it's worth considering breaking consistency  
**\<rehrar>** just so we make sure everything else gets done?  
**\<rehrar>** then we can discuss till the end of time at the end  
**\<luigi1111w>** or 1hr, whichever is less  
**\<endogenic>** rehrar: what are you, some kinda pragmatist?  
**\<ferretinjapan>** luigi1111w, noone said anything about FIXED schedules ;)  
**\<gingeropolous>** sgp, indeed, that was the logic begind the earlier than planned ringct fork  
**\<rehrar>** Some people gotta go or don't want more than an hour  
**\<luigi1111w>** lol  
**\<dEBRUYNE>** What else is there to discuss though  
**\<endogenic>** dEBRUYNE: how about what kind of soda you're going to get for rehrar?  
**\<iDunk>** Subaddresses and fees for the next fork.  
**\<rehrar>** *shrug* screw the agenda then. We're not beholden to it right. ;) Just trying to think of people who might want to discuss code or issues.  
**\<ArticMine>** I do not see a fee change without BP  
**\<pebx>** i'm not a mathematician, however i would prefer single output bp in march/april/may than waiting for multi output with the even more controversial change in fee structure  
**\<iDunk>** Even if the value has gone up ~40x since the last adjustment ?  
**\<endogenic>** rehrar: dont be silly, no one wants to discuss issues… :P  
**\<rehrar>** troo, ok BP it is  
**\<sarang>** pebx: the fee change shouldn't be that controversial  
**\<luigi1111w>** ArticMine smooth had some arguments for reducing fee  
**\<sarang>** the alternative is DOS  
**\<rehrar>** How soon should we be looking to come to a decision? This meeting? Next?  
**\<rbrunner>** What is DOS?  
**\<Maxithi>** endogenic: rehrar: dont be silly, no one wants to discuss issues… :P \<= I do, please label them so I don't have to make lists and have dEBRUYNE tag 150 of them at once ;)  
**\<endogenic>** rbrunner: denial of service?  
**\<rbrunner>** Regarding fees?  
**\<ArticMine>** WE can lower the min fee but people are not using it anyway  
**\<endogenic>** i.e. spam?  
**\<serhack>** hi  
**\<dEBRUYNE>** For the current range proofs you'd need to tweak the penalty  
**\<luigi1111w>** not gonna happen  
**\<luigi1111w>** by march  
**\<ArticMine>** Spam to the txpool is a risk if we go too low on the min fee  
**\<dEBRUYNE>** What's not going to happen by march luigi1111w?  
**\<luigi1111w>** tweaking the pentaly  
**\<pebx>** @ArticMine most users don't know about a minimum fee...  
**\<luigi1111w>** penalty  
**\<pebx>** I see this all day in the Telegram groups "why is the fee so high?"  
**\<ArticMine>** One option change the wallet default to the min fee  
**\<dEBRUYNE>** The per kB fee isn't even that high fwiw  
**\<pebx>** most services also use the default... like mymonero does  
**\<dEBRUYNE>** The transactions are just obscenely large  
**\<endogenic>** pebx: dont worry, i'm getting close to adding priority setting to new apps  
**\<pebx>** dEBURNE isn't that why bp is so important?  
**\<dEBRUYNE>** Right, but we shouldn't rush it  
**\<Maxithi>** @ArticMine: One option change the wallet default to the min fee \<= I actually consider that a good idea as no one uses that fee...  
**\<ErCiccione>** ^^  
**\<dEBRUYNE>** That's going to result in a clogged mempool if we want to expand  
**\<luigi1111w>** I use that fee  
**\<moneromooo>** Then noone would use the current fee once it's no longer the default.  
**\<iDunk>** So do I.  
**\<luigi1111w>** well I use both kinda depending  
**\<jtgrassie>** BP shoudnt be rushed but equally shouldnt be held back to a *schedule*  
**\<luigi1111w>** dEBRUYNE some of that is unavoidable  
**\<Maxithi>** Yeah but I mean none of the people here do used it. That's the issue  
**\<luigi1111w>** two opposing forces at work  
**\<rbrunner>** It's nice to have a fee level below default to be able to say "I can wait"  
**\<dEBRUYNE>** luigi1111w: According to smooth miners will just pick the default or higher fees and leave everything else in the mempool  
**\<dEBRUYNE>** Because they can only use the last transaction for the penalty  
**\<luigi1111w>** well I'm pretty sure that was originally according to me :)  
**\<dEBRUYNE>** So you can't have 23 min fee txes and then one default  
**\<binaryFate>** \<ArticMine> One option change the wallet default to the min fee \<-- +1  
**\<endogenic>** isn't that a bad idea? \^  
**\<moneromooo>** It is.  
**\<luigi1111w>** it's an idea  
**\<luigi1111w>** I'm not sure if it's bad or good  
**\<moneromooo>** Unless people don't use monero much for half a year.  
**\<endogenic>** hm it would be cool to model this  
**\<Maxithi>** got to go, see you guys  
**\<endogenic>** but Maxithi you didnt get to chat issues  
**\<luigi1111w>** sorry I got lunch gotta run too  
**\* luigi1111w** grumbles about meeting time, again  
**\<ArticMine>** It is the human herd mentality  
**\<Maxithi>** endogenic Yeah never mind, just wanted to ask people to label more issues to make it easier to know which one require assistance.  
**\* Maxithi** agrees with luigi1111w  
**\<dEBRUYNE>** What if the wallet changes the level dependent on the backlog?  
**\<endogenic>** Maxithi: maybe you could make an issue about that?  
**\<dEBRUYNE>** So it'd use min fee if mempool is \< 1000 kB and default if \> 1000 kB?  
**\<dEBRUYNE>** \^ just using arbitrary numbers  
**\<rbrunner>** Wouldn't that just result in a lot of angry people, like "Why the hell I paid so much"?  
**\<rbrunner>** If you don't make it *very* transparent  
**\<ArticMine>** dEBRUYNE What if the wallet changes the level dependent on the backlog? \<--- That would work  
**\<dEBRUYNE>** rbrunner: How so?  
**\<hyc>** endogenic, sarang: email draft https://pastebin.mozilla.org/9075994  
**\<dEBRUYNE>** You can add a note in the wallet  
**\<pebx>** isn't that even more confusing for users?  
**\<dEBRUYNE>** "changing fee level because of backlog"  
**\<rbrunner>** I am afraid people would not understand the mechanism  
**\<rbrunner>** compare fees, see that they are different for different people  
**\<rbrunner>** or different times  
**\<rbrunner>** and shout "scam" or so ...  
**\<ArticMine>** It is what Bitcoin does  
**\<endogenic>** hyc: term "output" used before definition  
**\<dEBRUYNE>** That seems a bit too far stretched  
**\<rbrunner>** Well, people now even don't "understand" they can go one level lower for the fee, right?  
**\<sarang>** hyc: I didn't see any Java code from the authors. I wrote our Java proto code  
**\<rbrunner>** Many of them, anyway  
**\<DaveyJones>** rbunner i don't think so ... most people arn't even schooled on default vs 0.25x fee  
**\<sarang>** hyc: line 5, I'd say "are confident" instead of "are pretty confident"  
**\<hyc>** sarang: ok  
**\<endogenic>** hyc: maybe capitalize 'Java' and add a 'Therefore, ' before "The Monero Project"  
**\<rbrunner>** Yes, how will they understand how that works if it get more complicated?  
**\<rbrunner>** That's my fear, basically  
**\<endogenic>** oops  
**\<endogenic>** "mainnet. The Monero Project"  
**\<rehrar>** I'm torn tbh. I see both sides.  
**\<pebx>** @ArticMine what bitcoin does is one of the major reasons, why people are looking into Monero... fees are one thing the average bitcoin user is always confused about  
**\<DaveyJones>** basically they don't need to understand most of people moaning about tax fee's are people just count the $ value of the fee... not how it was achieved  
**\<endogenic>** otherwise looks great, tyvm!  
**\<DaveyJones>** so they basically dont care about the mechanism but the price  
**\<DaveyJones>** and wasnt the proposed mempool fee sth that should happen automatic? or did i misunderstand that  
**\<ArticMine>** pebx Bitcoin has fundamental fee problems that have nothing to do with wallet choices.  
**\<sarang>** hyc: maybe state that we "recognize the value of independent third-party review" to assure other readers that we're doing this as a "belt and suspenders" approach, rather than a legitimate worry about correctness  
**\<binaryFate>** pebx Bitcoin is a clusterfuck of floating fees and fees competitiong for a fixed block size. Here it's just about choosing the default among the 4 different levels, that's it. Then flex block cap takes care of the rest so you don't have your transaction in mempool for 14 days  
**\<sarang>** I don't want some silly media report that we don't trust our own code  
**\<jtgrassie>** IMO default fees should derived from mempool size and be completely transparent to user  
**\<endogenic>** but sarang mass media never selectively reports  
**\<sarang>** -\_-  
**\<endogenic>** that wouldn't be true journalism!  
**\<ArticMine>** It can be done at he wallet level.  
**\<binaryFate>** It's just silly that when there is factually no backlog in the mempool, the fee does not default to low  
**\<rbrunner>** Can the wallet query tx pool size already?  
**\<endogenic>** binaryFate: simplewallet does warn at least  
**\<rbrunner>** Technically, is there a call?  
**\<endogenic>** "n block backlog at that fee"  
**\<endogenic>** oh, next meeting when? 2 wks?  
**\<sarang>** endogenic: I want to make it clear that we're taking a careful but confident approach that uses peer review, just as any good academic work does  
**\<rehrar>** It was suggested earlier that if single output BP's are not merged in March, that the fee should be adjusted. If we are saying that we don't want to adjust the fee in March, I think single output BPs should be merged  
**\<endogenic>** sarang: i completely agree  
**\<jtgrassie>** 13:02 **\< endogenic>** oh, next meeting when? 2 wks?  
**\<rehrar>** Ye, sorry. If anyone needs to leave. Next meeting two weeks.  
**\<rehrar>** 28th  
**\<binaryFate>** The warn makes people think "mmm should I use more fees", not the opposite. Who when using normal and seeing 0/1 block backlog cancels, and come back to use low fees? Nobody I guess, should be automatic maybe with just a y/n confirmation  
**\<sarang>** hyc endogenic: move discussion of BP review to #monero-research-lab after meeting?  
**\<endogenic>** yes good point  
**\<endogenic>** binaryFate  
**\<hyc>** ok  
**\<endogenic>** though i dont know about automatic, from a ux standpoint, but thats just me  
**\<rbrunner>** Automatic always takes away some choice, right?  
**\<endogenic>** not necessarily  
**\<endogenic>** if the result is displayed clearly so the user can confirm before implicitly agreeing  
**\<endogenic>** then it can be ok  
**\<endogenic>** question is  
**\<endogenic>** how do you do that in a CLI?  
**\<binaryFate>** What we're discussing is just selecting the default, not forcing the user  
**\<endogenic>** may end up needing some kind of prompt or to enhance it to update some kind of display in-place  
**\<endogenic>** yes  
**\<endogenic>** must be off, myself  
**\<endogenic>** o/  
**\<rehrar>** Can we maybe plan an "urgent" meeting sometime this week or next weekend?  
**\<rehrar>** Just to discuss BP's and make a decision?  
**\<endogenic>** rehrar i'll attend any meetings  
**\<rehrar>** Or is that not a good idea.  
**\<sarang>** rehrar: Do we want to wait on review feedback?  
**\<rbrunner>** It seems BP might merit that, a special meeting  
**\<sarang>** To at least see who if anyone will review?  
**\<endogenic>** sarang: personally i would  
**\<rehrar>** Sarang, do we have an ETA on that?  
**\<DaveyJones>** BP + fee talk ?  
**\<ArticMine>** I am fine with that say next Sunday  
**\<DaveyJones>** i guess both run a little short today  
**\<endogenic>** or else i would hold the meeting with the primary objective of resolving how we can solicit and accomplish the review  
**\<DaveyJones>** and need more thoughts  
**\<sarang>** rehrar: I have a phone meeting w/ the audit group on Tuesday  
**\<rehrar>** Perfect.  
**\<sarang>** I assume hyc can post the Call For Reviews after we finish proofreading it  
**\<rehrar>** I can make an issue depending on that.  
**\<sarang>** and I'll contact the other paper authors today  
**\<rehrar>** I will put a "tentative" next meeting for next Sunday  
**\<sarang>** roger  
**\<rbrunner>** Sounds good  
**\<rehrar>** And if anything changes, I'll change it.  
**\<sarang>** I'll post any updates on the research IRC as I hear back  
**\<rehrar>** You can comment on the GitHub issue too plz.  
**\<sarang>** sure thing  
**\<rbrunner>** I am sure companies would arrange meetings of whole days for something of the importance of BP  
**\<rbrunner>** Just saying :)  
**\<rbrunner>** Just to reach consensus  
**\<rehrar>** Good idea rbrunner. 4 hour meeting planned. Followed by a small snack break. Then another four hours.  
**\<rbrunner>** :)  
**\<ErCiccione>** can we talk about code freeze now? I really need to know the date for both the localization team and the GUI guide that will go in the binaries  
**\<rehrar>** Harder to discuss now that lots of people are gone unfortunately. :/  
**\<rehrar>** BPs took most of the time.  
**\<rbrunner>** With breakthrough still somewheat elusive, if you ask me ...  
**\<rbrunner>** But maybe that's a good thing.  
**\<ErCiccione>** rehrar: yep..but that mess things up a bit for me. still around mid February btw, right?  
**\<rehrar>** rbrunner, shows we're actually decentralized?  
**\<rehrar>** Dunno erciccione, I think it was supposed to be January, but don't quote me.  
**\<rbrunner>** rehrar: Yes.  
**\<sgp>** iirc it's supposed to be 2 months  
**\<sgp>** Before the hf  
**\<rbrunner>** Was one of the important points of fp's speech in Zurich that I could attend. Impressed folks, I think  
**\<ErCiccione>** rerhrar: it was, but last time i asked dEBRUYNE he said more or less around February. i guess i'll just wait to know more  
**\<binaryFate>** rbrunner what point?  
**\<sgp>** I think it's a good idea  
**\<rbrunner>** The good decentralization of Monero  
**\<binaryFate>** ErCiccione as long as hard fork date still somewhat open and discussed, I think it's fair to assume code freeze will not happen soon. That's probably the most you can get now.  
**\<sgp>** I think some localization stuff is low-risk though and could be merged a bit later as long as the binaries can be built with sufficient time. Not my deceion though  
**\<Billy>** I do think we need to resolve the BP issue ASAP.  It needs a special meeting because these general meetings aren't going to do it.  
**\<rbrunner>** You could say that after two regular meetings, yes  
**\<rbrunner>** 1 hour is damn short, even if we don't have to emulate endless corporate meetings  
**\<ErCiccione>** ok, thanks binaryfate sgp the problem is that some translator keep asking that because they need to organize their time, but they don't want their work to be left out from the official release  