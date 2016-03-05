---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-03-05
summary: Clarification on ringCT next steps, Trezor integration status, net_skeleton replacement
tags: [dev diaries, core, crypto]
author: gingeropolous
---

*March 5th, 2016*

# Logs


**\<fluffypony>** dev meeeeeeeting
**\<fluffypony>** role call
**\<gingeropolous>** ping
**\<fluffypony>** no problem :)
**\<fluffypony>** hyc / moneromooo / warptangent / luigi1112 / smooth 
**\<dEBRUYNE>** smooth, luigi1112, othe, NoodleDoodle, ArticMine, warptangent, moneromooo, hyc
**\<dEBRUYNE>** pingping
**\<fluffypony>** or any other luigi's
**\<warptangent>** present
**\<othe>** my body is here too
**\<ArticMine>** present
**\<fluffypony>** lol
**\<fluffypony>** othe: but your mind is... ?
**\<fluffypony>** ok let's start
**\<othe>** i dont know where it is fluffypony
**\<moneromooo>** er, hi ?
**\<fluffypony>** open pull requests: mostly just DB stuff by warptangent and hyc 
**\<fluffypony>** will be merged within the next couple of hours
**\<warptangent>** ok
**\<Ibragim>** how are you guys?
**\<warptangent>** glad for the weekend
**\<fluffypony>** merged pull requests in the last couple of weeks: unit test fixes, threading fixes, lots of little things
**\<fluffypony>** I suppose the big stuff is hyc's readtxn changes
**\<othe>** is the exp/performance stuff from warptangent also to be merged in?
**\<fluffypony>** warptangent / moneromooo: do one of you want to give us an overview of readtxn?
**\<warptangent>** not soon
**\<othe>** and should we add the trezor support from NoodleDoodle ?
**\<fluffypony>** othe: we're doing PR review first
**\<warptangent>** the txn cursors enable lmdb to read and write more efficiently
**\<warptangent>** hyc added write cursors and then read cursors to cover just about all the DB operations
**\<fluffypony>** cool
**\<fluffypony>** re: warptangent's performance changes 
**\<fluffypony>** we have to implement some sort of migration system 
**\<fluffypony>** we can't expect people in production to keep dropping and re-syncing 
**\<fluffypony>** so that would stall it being merged
**\<hyc>** hi, sorry I'm late. our experience with blockchain_import indicates migration will be slow
**\<warptangent>** also, migration won't take place until after things settle with the db changes and testing.
**\<warptangent>** development is ongoing here https://github.com/warptangent/bitmonero/branches in the exp/performance branch
**\<fluffypony>** hyc: well at the very least we need to detect that the current DB isn't what we expect, and that it must be converted or redownloaded
**\<fluffypony>** *resynced
**\<hyc>** right. well fortunately the DBs have version stamps so that's straightforward
**\<fluffypony>** yeah
**\<fluffypony>** ok let's move on to trezor
**\<fluffypony>** NoodleDoodle: are your changes stable enough to PR?
**fluffypony** plays elevator hold music
**\<fluffypony>** ok whilst we wait for that 
**\<fluffypony>** there's been some discussion about fees with the price rise
**\<fluffypony>** any thoughts on the fee thing?
**\<othe>** i think they are still fine
**\<ArticMine>** My thought is that fees will ultimately have to be tied to the blocksize
**\<gingeropolous>** what will be the price point when they change?
**\<fluffypony>** at the moment it's like $0.012 per kb I think
**\<dEBRUYNE>** Ideally we would wait for it to settle down a bit
**\<dEBRUYNE>** the price
**\<fluffypony>** yeah
**\<dEBRUYNE>** Too soon for adjustments imo
**\<gingeropolous>** true
**\<fluffypony>** gingeropolous: dropping fees is a hard fork, so ideally we want to bundle it into the October fork or whatever 
**\<othe>** 1 cent is nothing
**\<ArticMine>** You mean fees are in the consensus code
**\<fluffypony>** ArticMine: yes - we don't allow 0 fee transactions 
**\<dEBRUYNE>** We could just calculate the average over the last 6 months
**\<jwinterm>** I think ArticMine's point about fees being tied to block size is interesting, as block size goes up, fee per kb declines, linearly I guess
**\<fluffypony>** BitcoinErrorLog has been talking about "magic number automation", he might have some thoughts on it too
**\<fluffypony>** he's offline atm
**\<fluffypony>** jwinterm: yes
**\<hyc>** fee tied to blocksize - but you can't predict the blocksize when you create a txn to someone
**\<fluffypony>** hyc: we can use the median
**\<warptangent>** the tx size
**\<ArticMine>** It is because fess are tied to the emission and blocksize via the bock penalty
**\<jwinterm>** right, unpenalized max block size
**\<ArticMine>** So we could actually use a formula based on emission and block size
**\<ArticMine>** So that the min fee corresponds to a low position in the penalty
**\<ArticMine>** say around 5%
**\<luigi1114>** present!
**\<warptangent>** is anyone aware of another coin using a similar scheme with also using the block size? seems worth looking into.
**\<fluffypony>** not that I know of
**\<ArticMine>** This only applies to cryptonote
**\<gingeropolous>** i think it'd be awesome to find a way to do it automatically, as opposed to hardforks
**\<ArticMine>** but likely Monero would be first
**\<hyc>** it sounds good. especially since emission and blocksize are already automatic
**\<fluffypony>** ok let's sketch that out and see what we come up with
**\<fluffypony>** in the meantime, we need to push 0.9.2 out
**\<ArticMine>** I can put something together
**\<fluffypony>** I was holding off on it until the meeting
**\<ArticMine>** on fees
**\<hyc>** I'm still hitting SIGBUS on ARMv7 but go ahead with current PRs and don't wait for anything more from me
**\<fluffypony>** ok
**\<fluffypony>** moneromooo: how are you feeling on an upstream merge to dev?
**\<hyc>** I don't see my test resolving this soon
**\<fluffypony>** the current RPC interface is starting to become a problem for multiple concurrent wallet sessions
**\<moneromooo>** I'm waiting for 0.9.2 to be tagged first so that no new patches go there.
**\<fluffypony>** ok
**\<moneromooo>** (or few anyway)
**\<moneromooo>** Why is it a problem ?
**\<moneromooo>** The new one seems to be made to be non thread safe fwiw.
**\<fluffypony>** moneromooo: Peter Todd and I have hit the issue with scanning a new wallet when other wallets are open
**\<fluffypony>** and I don't think we should necessarily waste time trying to optimise an interface that's going away
**\<moneromooo>** Oh what does this break ?
**\<fluffypony>** it makes it slooooow
**\<moneromooo>** Ah, fair enough. Did you try with the 0mq one ?
**\<fluffypony>** no - was in the air (literally) :-P
**fluffypony** ponders 
**\<fluffypony>** oh yes
**\<luigi1114>** I would prefer new wallets don't auto-refresh, but I understand why it was added
**\<fluffypony>** net_skeleton become Fossa which became Mongoose
**\<moneromooo>** which needs to become gone ?
**\<fluffypony>** yes
**\<fluffypony>** the only licenses they have available are GPL and a commercial license 
**\<fluffypony>** which doesn't play well with ours
**\<ArticMine>** We would have to go GPL
**\<fluffypony>** basically we just need a library that plays well with HTTPS, and supports authentication 
**\<fluffypony>** and is compatible with our license 
**\<fluffypony>** something to keep eyes out for 
**\<fluffypony>** next up: ringCT
**\<fluffypony>** warptangent: you were chatting to Shen - what's the latest on that?
**\<warptangent>** i've begun to familiarize myself with what will need to be done, and development on that will go on top of the newer database branch
**\<fluffypony>** we'll be opening Github issues or Forum threads, either or, for the specific decisions we have to make around things like ring size
**\<warptangent>** a forum thread would work well for the first issue re: floating point or fixed
**\<fluffypony>** luigi1114: you had some thoughts on that, iirc?
**\<luigi1114>** I do
**\<moneromooo>** I feel like I've missed a lot of stuff, somehow.
**\<gingeropolous>** im still getting woops something went wrong when click on the bell on the forum... not that I need to do much for these topics, but just throwin it out there.
**\<fluffypony>** gingeropolous: thanks, will take a look at the error log
**\<moneromooo>** What's this about floating point ?
**\<luigi1114>** I think a forum or other untimed format would be easier though
**\<warptangent>** it's a decision to be made about the confidential transactions scheme
**\<moneromooo>** Alright. First I've heard of it.
**\<luigi1114>** it's how many amounts can be represented
**\<luigi1114>** size tradeoffs basically
**\<moneromooo>** So since I've not seen that conversation nor arguments, I'll just say "floating point is only fine if you really know what you're doing".
**\<luigi1114>** it's more a design decision
**\<fluffypony>** moneromooo: first you've heard of RingCT, or of the floating point / fixed issue?
**\<moneromooo>** fp/fp
**\<warptangent>** the conversation needs to take place in the forum and with Shen's input. moneromooo i only recently learned of it myself.
**\<ArticMine>** It has significant economic implications
**\<luigi1114>** we're not going to get very far here I agree warptangent
**\<fluffypony>** ok - let's create a thread
**\<fluffypony>** does anyone want to run with that?
**\<luigi1114>** *silence*
**\<fluffypony>** lol
**\<fluffypony>** crickets
**\<warptangent>** i can
**\<fluffypony>** thanks warptangent 
**\<warptangent>** i'll let NobleSir know when it's up too
**\<dEBRUYNE>** Can I make a general remark?
**\<fluffypony>** dEBRUYNE: of course
**\<dEBRUYNE>** We should change mixin to ring size or another sufficient alternative
**\<dEBRUYNE>** mixin sounds active
**\<dEBRUYNE>** which isn´t the case
**\<hyc>** we were just talking about ringsize just now, in context of RingCT
**\<fluffypony>** I know - terminology and binary name changes are going to happen for 1.0
**\<hyc>** sounds like ring size already has a meaning that we shouldn't confuse
**\<fluffypony>** and making sure flags are all uniform etc.
**\<dEBRUYNE>** hyc: Yeah I saw that, I just wanted some confirmation that we are going to change that
**\<dEBRUYNE>** certainly with a lot of newcomers coming in it might be confusing
**\<dEBRUYNE>** \<fluffypony> and making sure flags are all uniform etc. <= Great
**\<fluffypony>** definitely
**\<luigi1114>** hyc: I believe they are the same (function at least)
**\<hyc>** ok, then that's straightforward
**\<luigi1114>** ring size is the community agreed replacement for (mixin+1)
**\<warptangent>** well number of bytes in a ringct is different than what's currently mixin count
**\<warptangent>** i think that's hyc's concern
**\<dEBRUYNE>** Then we should name them similiar
**\<dEBRUYNE>** shouldn´t
**\<dEBRUYNE>** *
**\<hyc>** yes. I didn't follow ringct closely, but the fact that floating point is even an option means the two are quite different
**\<warptangent>** it's likely the latter is the one most users will even be aware of.
**\<warptangent>** but it's something to consider.
**\<dEBRUYNE>** warptangent: Agree, perhaps we could ask NobleSir if he has a sufficient synonym
**\<luigi1114>** \<warptangent> well number of bytes in a ringct is different than what's currently mixin count <= this doesn't parse for me
**\<fluffypony>** afaik users don't choose anything with ringCT, though
**\<luigi1114>** floating point/exponents/bitsize has nothing to do with ring size and won't be named similarly
**\<warptangent>** luigi1112: just the storage size for a ringct, if referred to as "ring size" could be confusing for those using "ring size" to refer to mixin count
**\<luigi1114>** ok
**\<luigi1114>** yes the former will/should not be named that way
**\<luigi1114>** signature size or something
**\<gingeropolous>** yeah, i was not aware ring size already was used for something
**\<hyc>** maybe this isn't the place for the discussion but I would have preferred something other than "ring size" for mixin count. masking factor, blinding factor.
**\<hyc>** something that actually conveys the purpose.
**\<gingeropolous>** as hyc mentioned, decoys is actually a good name / descriptor
**\<palexander>** Agree there.
**\<gingeropolous>** but it sounds too subterfugey
**\<luigi1114>** yell on the reddit thead :)
**\<fluffypony>** the thread it still open
**\<fluffypony>** lol
**\<luigi1114>** anyway not a good place here
**\<hyc>** ok
**\<luigi1114>** or time
**\<dEBRUYNE>** hyc: Ring size was just brought up earlier, it was more about the idea of changing it
**\<malmenonphome>** Just arrived, what the subject?
**\<dEBRUYNE>** Another term is fine by me as well
**\<warptangent>** i do like ring size fwiw.
**\<dEBRUYNE>** malmenonphome: Changing the term mixin to something else
**\<luigi1114>** this is basically a community thing, not a dev thing
**\<NoodleDoodle>** @fluffypony not yet, I'll work on osx/linux this weekend and see from there. As for the firmware, I'll request a pull upstream once I've added it to github. They are interested in merging it upstream.
**\<luigi1114>** (beyond making sure the name makes sense)
**\<dEBRUYNE>** luigi1114: Let´s continue to the next subject then :)
**\<malmenonphome>** Ah, ok, I agree with ring size as well, but we should think in other languages how it sounds too
**\<warptangent>** masking/blinding factor or decoy is more descriptive, but ring size could be a happy medium between that and not making every user have to feel like a rebel.
**\<binaryFate>** ring size is ok for me, if it doesn't convey meaning people will learn and that's a good thing
**\<malmenonphome>** In Portuguese... Tamanho de anel
**\<luigi1114>** right the problem with mixin is that people think it's a typo for the other word
**\<fluffypony>** yeah
**\<fluffypony>** ok - that's a discussion to have on the reddit thread or wherever
**\<warptangent>** mixin definitely gives the idea, as we've seen, that it requires other active senders
**\<fluffypony>** we're not in a position to make a decision on it in this meeting
**\<malmenonphome>** I agree
**\<gingeropolous>** any word on the dev branch? as one who has been summarizing these meetings, the can has been kicked twice now.
**\<luigi1114>** we can can kick better than bitcoin huh
**\<warptangent>** it was discussed above?
**\<fluffypony>** gingeropolous: did you miss part of the meeting?
**\<gingeropolous>** perhaps. sorry. /me hides
**\<fluffypony>** is ok
**\<fluffypony>** in the summary you can just be like "the official troll-appointed dev was late"
**\<fluffypony>** :-P
**warptangent** wonders who the first dev-appointed troll will be.
**\<fluffypony>** hah hah
**\<fluffypony>** ok I think that brings the meeting to a close
