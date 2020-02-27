---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-08-26
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** All righty!  
**\<sarang>** Let's begin our meeting  
**\<sarang>** Agenda: https://github.com/monero-project/meta/issues/385  
**\<sarang>** Logs will be posted there after the meeting  
**\<sarang>** GREETINGS  
**\<rehrar>** hi  
**\<parasew[m]>** hello  
**\<suraeNoether>** good morning  
**\<sarang>** Let's move to ROUNDTABLE  
**\<sarang>** suraeNoether: care to go first?  
**\<suraeNoether>** sure, last week I made a commit to my buttercup branch with some matching algorithm fixes, which is now operating as far as i can tell 100% smoothly  
**\<sarang>** Nice! Looking forward to reviewing it  
**\<suraeNoether>** i also have the framework for a markov chain simulator of a basic ledger almost ready to push later today, which we will be using to identify best practices while churning, etc  
**\<suraeNoether>** in addition to that, I discovered a discrete distribution over the weekend that could be very helpful in working with output selection  
**\<suraeNoether>** that's pretty much it. not tremendously eventful, except the matching algo unit tests  
**\<sarang>** Will be neat to see if we can adjust output selection to such a distribution efficiently and robustly  
**\<sarang>** Low priority in the grand scheme of things, but intriguing nonetheless  
**\<sarang>** I am finishing preparation of the CLSAG paper for submission to Financial Cryptography 2020  
**\<hyc>** definitely, will be nice to have some exploration of churning that we can document  
**\<sarang>** PR 5707 has been updated to simplify the hashing code  
**\<suraeNoether>** oh, sarang and i decided we should also submit the thring signature paper to FinCrypt2020 also, sort of doubling our chances (but not really, it's nonlinear :P)  
**\<sarang>** Note that this removes `hashToPointSimple` and moves its functionality directly into the relevant unit test  
**\<sarang>** `hashToPointSimple` is only used to produce a Pedersen generator, but it's brittle on arbitrary input and not useful elsewhere  
**\<sarang>** (unless we updated how we do hash-to-points to use an iterated index, but this is not backwards-compatible)  
**\<sarang>** Additional eyes on PR 5707 would be welcome  
**\<sarang>** And: Stanford announced the dates and CFP of their next blockchain conference  
**\<sarang>** TBH it's probably not worth our time to submit a paper/presentation, given their acceptance rate  
**\<sarang>** Unless anyone has an idea for something something zero knowledge ethereum =p  
**\<sarang>** I kid, I kid  
**\<suraeNoether>** \*cough\*  
**\<suraeNoether>** but not  
**\<hyc>** lol  
**\<sarang>** Finally, I continue analysis work on proving systems  
**\<suraeNoether>** 5707 is for how the second basepoint in our pedersen commitments are selected. if i recall from my conversation with sarang earlier, this PR will make the monero codebase slightly more robust, less brittle, more consistent with the way it works, and more importantly \*more easily verified to be correct\* by new users, even though it's a relatively small change  
**\<sarang>** RingCT3.0 is exploitable in its current form, but I'm told a forthcoming fix likely solves the problem (unclear if provably at this point) with little impact on efficiency  
**\<sarang>** suraeNoether: the change only makes it harder to use the wrong hashing method :)  
**\<sarang>** and enables slightly more efficient hash-to-point operations under some constructions  
**\<sarang>** Anyway, a new preprint (IACR/944) discusses a new proving system for more general constraint systems  
**\<sarang>** And there will be a forthcoming preprint with a proving system on pairing groups, which simplifies cleanly to non-pairing groups too  
**\<sarang>** I've been looking over that one, since the authors graciously provided an advance copy  
**\<sarang>** What will be interesting is whether the Omniring prover relations can be efficiently moved into a more general proving system  
**\<sarang>** Making it easier (in theory) to do future changes  
**\<kenshamir[m]>** Could you comment on the computational complexity when you simplify the proving system to a non-pairing group?  
**\<sarang>** Eventually =p  
**\<sarang>** I've only just begun working through that paper  
**\<sarang>** FWIW I'm told the preprint is quite imminent  
**\<kenshamir[m]>** Ahh alright, any idea when it will be released?  
**\<sarang>** ^^  
**\<sarang>** Oh and suraeNoether: the primary purpose of 5707 is to speed up MLSAG by removing redundant operations... this led to simplifications of the available hashing operations as a side effect  
**\<suraeNoether>** thanks for correcting that! i didn't realize the larger scope (just started going through it)  
**\<sarang>** and at that point it seemed like a good idea to remove the brittle `hashToPointSimple` and put it directly into the unit test that enables verification of how `H` was derived  
**\<sarang>** There are two commits: the second commit moves the hash stuff around  
**\<sarang>** the first commit alters the MLSAG code  
**\<suraeNoether>** gotcha  
**\<sarang>** All righty  
**\<sarang>** Does anyone else wish to share interesting research work?  
**\<rehrar>** :/ if I were that smart, sure  
**\<sarang>** Don't underestimate yourself!  
**\<sarang>** While we're at it, we can also do GENERAL QUESTIONS for anyone  
**\<rehrar>** well, I did read a recent paper on hormesis as it relates to beetles.  
**\<sarang>** lol  
**\<rehrar>** my skills are not going to be helpful here :P  
**\<hyc>** oh, you just reminded me of that stream of tweets from Sarah Jamie Lewis yesterday, about ants and alarm pheromones  
**\<sarang>** Regarding CLSAG, the plan is to submit to several relevant conferences/journals (in sequence) and hope for acceptance  
**\<hyc>** the relevance was to illustrating how localized decision making can be gamed / subverted  
**\<sarang>** It falls into an awkward spot: it's a neat improvement on earlier work with good security model/proofs, but isn't profoundly new  
**\<sarang>** And unfortunately you can't do simultaneous submissions :/  
**\<hyc>** (and thus an argument why you need global consensus)  
**\<sarang>** The FC deadline is in September, with notification by November 15  
**\<hyc>** lots of stuff isn't profoundly new, but the imporvement still is worth talking about  
**\<sarang>** Yeah, but that's tough for publication  
**\<hyc>** maybe different forums then. heck, chip manufacturers give big presentations on ~5-10% gains  
**\<sarang>** Hence doing a fair bit of rewriting for better context  
**\<hyc>** cool. yes, expanding the scope of applicability is also a good angle  
**\<sarang>** and page limits (grumble grumble stupid wide margins)  
**\<sarang>** Aaaaanyway  
**\<sarang>** Perhaps on to ACTION ITEMS  
**\<sarang>** I have several, and I don't expect to complete them all this week  
**\<sarang>** CLSAG revisions, in preparation for submission  
**\<sarang>** My doctoral adviser always recommended putting down a paper for a week after your revisions, so you can revisit it with fresh eyes before submission  
**\<sarang>** Second is a better understanding of the reduction of this forthcoming proving system to non-pairing groups  
**\<sarang>** Third is going over suraeNoether's completed matching code  
**\<sarang>** Since suraeNoether had to step away for a few minutes, I assume his action items are applications of his test-passing matching code, and preparation of the thring signature paper for its submission (he can correct me later)  
**\<sarang>** Any last comments or questions or information from anyone?  
**\<sarang>** OK, we can adjourn! Thanks to everyone for joining in  
**\<sarang>** Logs will be posted shortly to the agenda issue  
