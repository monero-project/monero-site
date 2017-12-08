---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-07-03
summary: OTF, open PRs and issues, and brief update on Ring CT 
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

### Overview (by Aerbax)

An overview [can be found on Hello Monero](https://hellomonero.com/article/monero-bi-weekly-dev-meeting-note-highlights-2016-07-03)

### Logs

**\<fluffypony>** time for meeting to start   
**\<hyc>** ok  
**\<ArticMine>** Ok  
**\<fluffypony>** ArticMine / othe / smooth / NoodleDoodle / moneromooo / tewinget / dEBRUYNE / gingeropolous / etc.  
**\<dEBRUYNE>** somewhat here  
**\<fluffypony>** ok  
**\<fluffypony>** welcome to the 75th annual hunger games   
**\<fluffypony>** ok so  
**\<fluffypony>** first things first, small administrative update  
**\<fluffypony>** we've re-applied for funding from the OTF, but for Kovri (given their previous response)  
**\<fluffypony>** it's the start of the process, but who knows, maybe we have a bit of funding to work on both   
**\<fluffypony>** as Monero represents an example integration   
**\<fluffypony>** then the open issues are creeping up, there are a bunch I'm going to be closing as solved  
**\<fluffypony>** #754 is an interesting onw  
**\<fluffypony>** *one  
**\<fluffypony>** https://github.com/monero-project/bitmonero/issues/754  
**\<moneromooo>** We don't care now, since rct.  
**\<fluffypony>** good point  
**\<fluffypony>** ok so then it can be closed as wontfix  
**\<moneromooo>** Well, it's fixed, by transfer_new.  
**\<fluffypony>** yes   
**\<fluffypony>** so  
**\<fluffypony>** I'd like to reopen the discussion of deprecating transfer and replacing it with transfer_new  
**\<fluffypony>** or is that pointless because rct  
**\<moneromooo>** I've done that in the rct branch.  
**\<fluffypony>** ok great  
**\<fluffypony>** perfect  
**\<fluffypony>** then binary renames are on hold until the rct PR  
**\<fluffypony>** because I don't want to make that implode   
**\<hyc>** what renames?  
**\<moneromooo>** I don't think this would conflict much, if at all.  
**\<gingeropolous>** bitmonerod --> monero and stuff like that prolly  
**\<fluffypony>** hyc: https://github.com/monero-project/bitmonero/issues/80  
**\<fluffypony>** this in particular: https://github.com/monero-project/bitmonero/issues/80#issuecomment-223596750  
**\<hyc>** ah  
**\<fluffypony>** moneromooo: do you want me to PR changes to your branch then? will save you a rebase?  
**\<moneromooo>** Sure.  
**\<fluffypony>** ok great   
**\<moneromooo>** Would rct be merged before the wallet2_api stuff then ?  
**\<fluffypony>** so that's the next thing for discussion  
**\<fluffypony>** the massive wallet2 PR  
**\<fluffypony>** it's rebased against master now  
**\<fluffypony>** moneromooo: what are your thoughts on merging before or after ?  
**\<moneromooo>** I don't really have one.  
**\<moneromooo>** Maybe merge Ilya's first, since there's not going to be much review/fixes anyway.  
**\<fluffypony>** ok  
**\<gingeropolous>** so wallet2 a buncha stuff specifically designed for GUI?  
**\<moneromooo>** wallet2_api is.  
**\<fluffypony>** there's also been a fair amount of review on that PR because it's so hefty - is everyone comfortable that major issues (especially in git history) have been resolved and it can be merged?  
**\<moneromooo>** Depends on how high you put the bar.  
**\<fluffypony>** moneromooo: it's low - we can open issues to fix stuff after the merge  
**\<moneromooo>** But assuming the GPL code is gone, I think it's ok. It can be changed later.  
**\<fluffypony>** oh the GPL cmake stuff, I'll check on that  
**\<fluffypony>** looks like there's a BSD licensed replacement now  
**\<moneromooo>** I saw the comment, I did not look at the new code.  
**\<fluffypony>** hokay   
**\<fluffypony>** then there are a bunch of new PRs if anyone wants to take a glance at them  
**\<fluffypony>** #878, #879, #882, #883, #884, #885  
**\<fluffypony>** they're mostly small  
**\<fluffypony>** I need someone to check mine (885, just a readme change) before merging plx  
**\<hyc>** huh i only see up to 881  
**\<hyc>** oh PRs not issues  
**\<moneromooo>** I seem to have reviewed all these, except the windows packages one which I have no clue about.  
**\<fluffypony>** it compiled successfully   
**\<fluffypony>** couple of weird complaints about deprecations at the end  
**\<fluffypony>** C:/msys64/mingw64/include/boost/type_traits/detail/template_arity_spec.hpp:13:84: note: #pragma message: NOTE: Use of this header (template_arity_spec.hpp) is deprecated  
**\<fluffypony>**  # pragma message("NOTE: Use of this header (template_arity_spec.hpp) is deprecated")  
**\<fluffypony>**          
**\<hyc>** I've been getting that on most builds now  
**\<hyc>** boost 1.60  
**\<fluffypony>** ah   
**\<fluffypony>** boost, sigh.  
**\<hyc>** not sure what there is to do about that since it's an internal header file, not one thata we explicitly include  
**\<fluffypony>** http://permalink.gmane.org/gmane.comp.lib.boost.devel/264164  
**\<fluffypony>** fixed in 1.61  
**\<hyc>** ok  
**\<fluffypony>** ok so  
**\<fluffypony>** general update-y time  
**\<fluffypony>** tewinget doesn't seem to be around, he can update us on 0MQ when he is  
**\<fluffypony>** moneromooo: how goes ringct?  
**\<moneromooo>** I'm kinda blocked today, so I didn't do much.  
**\<fluffypony>** I mean in the last two weeks since the last meeting, lol  
**\<moneromooo>** Both that watch only thing that nobody wants to talk about, and waiting for shen's sybil resistant upgrade.  
**\<fluffypony>** kk  
**\<moneromooo>** Well, last two weeks, more tests, fixes, sweep_all now uses rct, and better output selection (for the general case).  
**\<hyc>** does rct let us do watch only with both deposits and withdrawals?  
**\<moneromooo>** No.  
**\<fluffypony>** this sorta bounces back to the MRL, so we wait for feedback  
**\<fluffypony>** hyc: are you doing anything interesting at the moment?  
**\<hyc>** not really. I still need to come up with a fix for txn_full on 32bit  
**\<hyc>** I'm traveling most of the the rest of this month  
**\<hyc>** so not much hacking time  
**\<fluffypony>** cool beans  
**\<fluffypony>** ok - anything else from anyone else?  
**\<luigi1112>** Hi  
**\<luigi1112>** :-)  
**\<moneromooo>** If anyone wants to start reviewing the rct-rptest branch, I don't think it's going to change again (save new commits).  
**\<moneromooo>** Like, find how to pwn it.  
**\<fluffypony>** oh luigi1112 I forgot to tag you at the beginning, apologies  
**\<moneromooo>** Would be a good job for Heuristic, except there's no picture of hte code...  
**\<moneromooo>** Oh, some other dev related thing: luigi1112, any news on the change to signing something from a standard address ? :)  
**\<luigi1112>** Nah I've been reading but don't have any time to participate atm  
**\<luigi1112>** Oops :-)  
**\<luigi1112>** Still soon  
**\<fluffypony>** you forgot the tm  
**\<fluffypony>** it's not soon if it's not tm  
**\<luigi1112>** Well it should be this week or next :-)  
**\<fluffypony>** ok I think that brings the meeting to a close - Kovri meeting is only in 23 minutes, so feel free to add / discuss new things and it'll be in the log  
**\<hyc>** i got nothing, catch y'all next time  
**\<gingah>** any new thoughts on the auto fee thing?  
**\<rg>** id like to bring up the most imporant issue, fluffypony -- free XMR for me  
**\<fluffypony>** gingah: auto fee?  
**\<moneromooo>** The thing ArticMine was looking at - scaling fees based on... stuff.  
**\<ArticMine>** Setting fees based on the blocksize  
**\<ArticMine>** and the reward penalty  
**\<ArticMine>** One also has to look at optimizing what transactions miners will accept vs block penalty and fees paid  
