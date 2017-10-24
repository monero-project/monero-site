---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-02-14
summary: Further dev branch discussions, 0.9.2 release date, RingCT implementation, DB migrator 
tags: [dev diaries, core, crypto]
author: gingeropolous
---

# Summary

## Review

Lots of stuff done in the past 2 weeks:

- v2 block tests
- flattened CMake issues (DNSSEC will work again)
- the possibilities of inconstent database state and the mempool transactions "have been clobbered"

Amongst other stuff not mentioned, but copying here from moneromoos milestone work:

- fixes for the wallet creating txes over max size the daemon will accept
- more work on tests (including tests for the MRL-0004 changes)
- going through all the V1/V2 stuff to catch what I saw was wrong
- fix for txes not expiring from pool due to other nodes coming online regularly
- better handling of pending/failed txes in simplewallet
- new command/RPC to flush txes from the txpool
- preventing two daemons from using the same data dir concurrently
- more intelligent handling against duplicate outs

## RingCT

Shen is almost done with reference code, volunteers needed to actually implement. warptangent takes on the db stuff. 

https://github.com/ShenNoether/MiniNero/tree/master/brief

When RingCT gets merged, will be a good time to merge other database formats. DB format changes - build a converter that "upgrades" format changes. It's left open, but hyc agrees to tackle it later. 

## Dev Branch

This has become the bastard child of Monero development apparently. Lines 82 - 167 encompass discussion on this topic. The goal is "to merge back to the dev branch" Ultimately the decision is to hack at it for a bit and reevalauate in next meeting. 

> <moneromooo> What I'll do it hack at it to make it work better, really. All that's needed is time without the problem of a release coming too quick.

Godspeed moneromooo. 

## Hardforks

The next fork (RingCT) will be the last time any modifications of the hardfork schedule are permitted. 

# Logs

**\<fluffypony>** welcome everyone  
**\<fluffypony>** first off, thanks for being present  
**\<fluffypony>** lots has been done in the last couple of weeks  
**\<fluffypony>** moneromooo hit another milestone on his FFS fundraiser, so good job on that  
**\<fluffypony>** he also clobbered some major issues (v2 block tests etc)  
**\<hyc>** here  
**\<fluffypony>** warptangent has also been a monster in the last couple of weeks  
**\<fluffypony>** flattened CMake issues that we were struggling with  
**\<fluffypony>** so that means that our static builds now do DNSSEC resolution again, even when a local DNSSEC root key is not available   
**\<fluffypony>** (which is basically on every Windows box)  
**\<fluffypony>** which means we need to evaluate our 0.9.2 release  
**\<fluffypony>** is there anything urgent that needs to go into 0.9.2, or can we push that out?  
**\<fluffypony>** (besides open PRs, I mean)  
**\<hyc>** I've got nothing pending  
**\<warptangent>** with the updates to block handling, the possibilities of inconstent database state was addressed(block height and hf versions not matching)  
**\<warptangent>** issues there were most urgent on my mind last time  
**\<fluffypony>** yeah, that and the mempool transactions were the two biggies  
**\<fluffypony>** both have been clobbered   
**\<warptangent>** there are some bdb updates i'm finishing up, but they aren't urgent.  
**\<fluffypony>** moneromooo: anything from your side?  
**\<moneromooo>** No  
**\<smooth>** saberhagen reporting in  
**\<fluffypony>** hah hah  
**\<warptangent>** !!  
**\<fluffypony>** better late than never :-P  
**\<warptangent>** he was here two years ago. we are the ones late  
**\<fluffypony>** well apparently he was here 5 years ago :-P  
**\<dEBRUYNE>** warptangent: 2 years? Make that 4-5  
**\<DaveyJones>** 4 years please :)  
**\<fluffypony>** hah hah  
**\<warptangent>** :)  
**\<fluffypony>** ok so  
**\<fluffypony>** let's talk about RingCT  
**\<fluffypony>** shen is getting close-to-done on his reference implementation code  
**\<fluffypony>** but it requires some actual implementation, and some DB work, to actually integrate it  
**\<fluffypony>** I think someone needs to volunteer to chiefly run with that  
**\<fluffypony>** any takers?  
**\<warptangent>** i'm up for db stuff  
**\<fluffypony>** ok it's mostly in here: https://github.com/ShenNoether/MiniNero/tree/master/brief  
**\<fluffypony>** there's been some discussion in the MRL as to what is actually required   
**\<fluffypony>** I'll ask Shen to make some notes   
**\<fluffypony>** next up  
**\<hyc>** I guess that will be a good time to merge other DB format changes too  
**\<fluffypony>** yes  
**\<fluffypony>** definitely  
**\<fluffypony>** re: DB format changes, we would need to build in a converter that "upgrades" format changes  
**\<fluffypony>** I was thinking something like Laravel's migrations would work (I think I mentioned this last time)  
**\<fluffypony>** so if I'm on format v1 there are migrations in the code to v2, v3, v4, v5, and it just runs them in succession till I'm on current  
**\<fluffypony>** that way the code only actually needs to know how to interact with the latest format  
**\<fluffypony>** and the logic of getting there from any arbitrary previous version lives in migrations  
**\<fluffypony>** (that are specific to implementations)  
**\<fluffypony>** we can either generalise that, or just do that for LMDB and leave other implementations to handle it to their liking  
**\<warptangent>** yeah that sounds good, but it can get involved too, because migrations typically are run on full-featuerd dbs like postgres and mysql that cover a lot of abstractions  
**\<warptangent>** so when you change a field, it handles the data migration and protects the database consistency if it's interrupted  
**\<fluffypony>** I don't think we'd be able to handle interruptions easily  
**\<fluffypony>** maybe dump it into a temp db and then rename?  
**\<warptangent>** here, if we're transferring 3 subdbs into one consolidate subdb, for instance, if that gets interrupted, it will be some trouble to deal with resuming  
**\<fluffypony>** so that way there's no resuming, it's restarting and wiping out any existing temp dbs  
**\<warptangent>** oh that is far easier, sure  
**\<hyc>** yeah, that tells me we really just want an offline dedicated migrate tool  
**\<warptangent>** a more integrated form of export and import  
**\<fluffypony>** hyc: I thought about that, the problem is that people are going to just upgrade ->** restart the daemon  
**\<fluffypony>** and then if it chokes and says "run this tool" they'll get frustrated  
**\<fluffypony>** also we have to automate it for the GUI too because GUI users...  
**\<moneromooo>** We don't really need to bother, there's a version field.  
**\<moneromooo>** So you could create the new dbs, then set the field to new version.  
**\<moneromooo>** If it's interrupted, it will recreate the new dbs, erasing the partial ones.  
**\<fluffypony>** as long as new dbs have unique names never used in previous ones  
**\<moneromooo>** At least for the tx/block subdb work anyway.  
**\<hyc>** we can append version# to the name if we want similar names  
**\<fluffypony>** yeah  
**\<fluffypony>** ok - I'll create that as an issue, does anyone want to have it assigned to them, or should I just leave it open for now?  
**\<smooth>** is the problem that the migration can't run as a transaction because the amount of data being moved is too large?  
**\<hyc>** leave open for now, but I'll probably take it later  
**\<hyc>** smooth - yeah, pretty much  
**\<hyc>** the txn can be that large but it slows down quite a bit then  
**\<smooth>** for some migrations that should be okay though (depending on how much the format is being changed)  
**\<hyc>** and a single txn to update the entire blockchain - you lose all progress if it's interrupted. there might be a way to migrate incrementally  
**\<hyc>** so that you can resume from an interruption  
**\<fluffypony>** ok  
**\<fluffypony>** next up  
**\<fluffypony>** once 0.9.2 is tagged in the next week we have to merge back to the dev branch  
**\<fluffypony>** and then I'd like to lock down master - anything that is PR'd either needs to be dev branch only, or has to go to both (as a backport to 0.9.x)  
**\<fluffypony>** does anyone have any objections to that?  
**\<moneromooo>** When do you plan a release after 0.9.2 ?  
**\<fluffypony>** moneromooo: the next fork date is meant to be October / September, but we can be a little flexible about when we freeze the code for that release because we want it to include RingCT  
**\<fluffypony>** if that appears to be unachievable then we'll re-address it in a couple of months time  
**\<ArticMine>** So we are looking to a freeze for Ring CT in April/May?  
**\<fluffypony>** depending on how implementation goes, yes  
**\<moneromooo>** 0.9 took quite some time, dev is flaky and needs all the buffer overflows fixed at the very least before it can be put in any release.  
**\<fluffypony>** moneromooo: I know - if we need to we can push the fork date   
**\<ArticMine>** Testing?  
**\<moneromooo>** Alright then.  
**\<fluffypony>** ArticMine: you mean in terms of functional tests or automated tests?  
**\<ArticMine>** both  
**\<xmrpromotions>** what is the minumum time allowable between freeze date and fork date? I know the desire is 6 months but what is the margin of error?  
**\<fluffypony>** xmrpromotions: for planned forks, given how small Monero is, we could probably get away with a month or two  
**\<fluffypony>** but likely for the last time  
**\<dEBRUYNE>** \<fluffypony> moneromooo: I know - if we need to we can push the fork date <= I am in favor of this as well  
**\<fluffypony>** it'll become harder and harder to do stuff like that, so if we're making an exception on a planned fork let's make it the last time  
**\<dEBRUYNE>** we don´t necessarily need to stick to a certain date for something that important  
**\<dEBRUYNE>** Agree fluffypony  
**\<fluffypony>** the larger issue here is that the 0MQ stuff was pushed prematurely because OranJuice couldn't work on Monero any longer  
**\<fluffypony>** in future I don't expect stuff like that will happen  
**\<dEBRUYNE>** Same issue with smart mining right?  
**\<smooth>** i still think we can consider dumping the dev branch. i think we need to be open minded about whether its state will hurt development rather than help it  
**\<fluffypony>** moneromooo is probably in the best position to make a call on that  
**\<smooth>** meaning it may be more productive to pull what we want from it (that isn't unfinished) and merge to master than vice versa  
**\<smooth>** \*with master (not to master)  
**\<moneromooo>** Well, personally I'd not have a dev branch so...  
**\<fluffypony>** heh  
**\<fluffypony>** if people knew how to checkout a tag it wouldn't be a problem :)  
**\<moneromooo>** Negative reinforcement helps make that a reality :)  
**\<smooth>** i agree with not having a dev branch really but it doesn't address what to do with the code we want from te current dev branch  
**\<hyc>** right, how much in there is usable?  
**\<moneromooo>** What I'll do it hack at it to make it work better, really. All that's needed is time without the problem of a release coming too quick.  
**\<moneromooo>** It is usable, just rough.  
**\<warptangent>** are the main features in the dev branch 0mq and smart mining? wouldn't it be simpler to rebase those onto master instead of trying to merge with the current dev branch?  
**\<fluffypony>** warptangent: no smart mining, just 0mq  
**\<warptangent>** ah  
**\<smooth>** i would suggest: put 0mq back on its own branch, finish it first, then merge when it is ready  
**\<dEBRUYNE>** smooth: Isn´t 0mq the mere reason we have a dev branch currently?  
**\<smooth>** so basically merge nothing from dev right now  
**\<fluffypony>** there are some other bits and pieces on the dev branch  
**\<fluffypony>** tewinget's code comments, for eg.  
**\<hyc>** if that's the only real difference between dev and master ...  
**\<dEBRUYNE>** I see  
**\<hyc>** ah  
**\<dEBRUYNE>** fluffypony: What if contributors just worked on their own fork until it is sufficient for master?  
**\<smooth>** anyway im not saying which is more productive necessary but the question is worth asking rather than inertia  
**\<dEBRUYNE>** fork/branch  
**\<fluffypony>** dEBRUYNE: that's the way it normally works  
**\<fluffypony>** the 0MQ thing was an exception  
**\<moneromooo>** It'd also mean you get to redo the merge with all the stuff I merged recently :/  
**\<fluffypony>** oh yes  
**\<moneromooo>** And deal with that fucking white space patch AGAIN  
**\<fluffypony>** my instinct is that we've put too much effort into the dev branch already to make cherry-picking worthwhile  
**\<fluffypony>** there's a handful of merges since moneromooo's last merge to dev  
**\<smooth>** effort isnt really the right measure  
**\<smooth>** the measure is how much useful value is there  
**\<fluffypony>** well it works  
**\<fluffypony>** but there are some bugs that need to be fixed  
**\<smooth>** there has been a lot of work on master only in the past few months  
**\<fluffypony>** and we need to rip the net_skeleton stuff out and replace  
**\<hyc>** so how much effort would it be to reapply just 0mq to current master  
**\<moneromooo>** Probably a big pita. However, the original merge was also a bit crappy.  
**\<fluffypony>** last merge up to dev was Jan 3rd  
**\<fluffypony>** afaik  
**\<moneromooo>** And while I was hacking on it, thre's a fair number of changes to the 0mq stuff I made in master.  
**\<moneromooo>** Like fixes, all the missing RPC calls  
**\<smooth>** in dev?  
**\<warptangent>** 0mq in master?  
**\<fluffypony>** in dev?  
**\<fluffypony>** lol  
**\<moneromooo>** Yes, in dev  
**\<smooth>** at least people are paying attention  
**\<warptangent>** lol  
**\<fluffypony>** ok I say we hack at it for a bit  
**\<smooth>** id say be open minded about it and undertake a review  
**\<fluffypony>** and then re-evaluate   
**\<warptangent>** \<fluffypony> last merge up to dev was Jan 3rd << does this also mean dev was up to date in terms of master as well?  
**\<fluffypony>** warptangent: yes that's what I mean - all of master was merged up to dev on Jan 3rd  
**\<moneromooo>** Yes. I expected we'd move to dev then.  
**\<fluffypony>** the only reason we didn't was 0.9.x fixes  
**\<warptangent>** that might not be too bad then.  
**\<smooth>** moving to dev is fine (assuming its state is good enough) but that should be independent of any necessary point releases  
**\<fluffypony>** ok - let's give it to the next meeting to reevaluate   
**\<smooth>** this is especially the case due to the premature 0mq merge  
**\<fluffypony>** speaking of the next meeting - the 28th I will be overseas, and March 6th I will be away, does anyone have an issue with us skipping the Feb 28th meeting altogether?  
**\<dEBRUYNE>** perhaps do it on another day?  
**\<dEBRUYNE>** saturday?  
**\<ArticMine>** Saturday works better for me  
**\<hyc>** Saturday is fine with me  
**\<fluffypony>** dEBRUYNE: can't do that whole weekend on the 28th, we can do March 5th but then we'd have to have a meeting the next week to be back in sync with Kovri dev meetings  
**\<fluffypony>** otherwise those of us that attend both end up with every Sunday having a block out  
**\<dEBRUYNE>** I am fine with 5 - 12 march  
**\<dEBRUYNE>** and then go on the biweekly schedule again  
**\<dEBRUYNE>** There is also the hardfork coming up on 20 March, so might be important to have at least 2 meetings before it  
**\<fluffypony>** ok - so we push the meeting till March 5th, and then the meeting thereafter will be March 14th  
**\<hyc>** 5-6 March not great for me, but that's probably not a big deal  
**\<dEBRUYNE>** 14th is a monday fluffypony  
**\<fluffypony>** sorry 13th, thanks dEBRUYNE   
**\<dEBRUYNE>** so March 5th Saturday and March 13th Sunday  
**\<fluffypony>** yes  
**\<warptangent>** that is fine here  
**\<ArticMine>** can we meet earlier on March 13th?  
**\<fluffypony>** ArticMine: Kovri meeting is at 6pm UTC, so if we meet earlier it means those of us that attend both have to block out a longer period of time  
**\<fluffypony>** I can ask to push the Kovri meeting back on that day  
**\<fluffypony>** but I know EinMByte has indicated he can't do earlier  
**\<fluffypony>** let me see what I can do in the Kovri meeting in a few minute's time  
**\<ArticMine>** It is because of the change to daylight savings time  
**\<fluffypony>** ah  
**\<ArticMine>** In the Northern hemisphere  
**\<fluffypony>** ok then the last thing, unless someone has anything to add  
**\<dEBRUYNE>** I got a general question  
**\<fluffypony>** there are open issues that are low hanging fruit, from really long ago, like #83, #84, #92  
**\<dEBRUYNE>** Is 0MQ highest priority currently? Certainly with the GUI work being done currently  
**\<fluffypony>** if you're feeling bored feel free to try knock those out, if we can keep the issues deck clean it makes it easier to maintain   
**\<fluffypony>** some are more suited to "after 0MQ", but there's others that are more general  
**\<fluffypony>** dEBRUYNE: not really, no, Ilya can only work part-time every week so it's not like the GUI is going to be done in a month  
**\<ArticMine>** I was going the raise the question of the 32 bit versions  
**\<fluffypony>** and 0MQ \*works\*, it just needs some bug fixing and massaging  
**\<fluffypony>** ArticMine: good point - I'd forgotten about that  
**\<dEBRUYNE>** fluffypony: As long as it doesn´t hold up the work it´s fine  
**\<fluffypony>** hyc: are you able to put together some build instructions for win32, given the issue with builds on 32-bit msys2?  
**\<ArticMine>** I have been testing 0.9.1.0-9cc8c24  
**\<ArticMine>** on XP and 7  
**\<hyc>** sure  
**\<hyc>** I already had a start at that on the reddit  
**\<othe>** ilya is working on the c++ interface currently, doesn´t really matter for the gui if its using zeromq or not  
**\<fluffypony>** btw hyc, you may find this of interest: https://github.com/niXman/mingw-builds  
**\<dEBRUYNE>** othe: Thanks for clarifying that  
**\<bookies>** are all issues on getmonero.org sorted on github? meaning I saw some that are probably old and might be resolved.  
**\<fluffypony>** bookies: you mean for the site, or for Monero itself?  
**\<bookies>** https://github.com/monero-project/monero-site  
**\<hyc>** fluffypony: heh, ok. are we going to tell people they need to build their own compiler before they can build win32?  
**\<fluffypony>** bookies: I haven't checked - there may very well be some old ones that are sorted  
**\<bookies>** ty  
**\<smooth>** \<hyc> fluffypony: heh, ok. are we going to tell people they need to build their own compiler before they can build win32? <= if that is what is needed then that's what the instructions should include  
**\<fluffypony>** hyc: oh - don't they provide binaries? I thought there were  
**\<fluffypony>** may have misread  
**\<hyc>** afaics they're just build scripts for building gcc etc  
**\<fluffypony>** ah ok  
**\<fluffypony>** alright, that's our hour - anything else before we close the meeting?  
**\<moneromooo>** Shall I merge master into dev again then ?  
**\<moneromooo>** I was going to do that, but...  
**\<fluffypony>** moneromooo: yes, please  
**\<moneromooo>** kk  
**\<xmrpromotions>** will someone publish the meeting minutes like last time?  
**\<fluffypony>** yes  
**\<xmrpromotions>** Thank you  
