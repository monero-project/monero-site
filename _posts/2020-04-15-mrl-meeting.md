---
layout: post
title: Logs for the MRL Meeting Held on 2020-04-15
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** First, GREETINGS  
**\<sarang\>** Hello  
**\<ArticMine\>** Hi  
**\<Isthmus\>** Heya  
**\<UkoeHB\_\>** hi  
**\<binaryFate\>** hi!  
**\<sarang\>** I'll wait a couple of minutes for anyone else to arrive  
**\<sgp\_\>** hello  
**\<sarang\>** All right, on to ROUNDTABLE  
**\<sarang\>** Who would like to share any research of interest?  
**\<cankerwort\>** Howdy  
**\<UkoeHB\_\>** https://github.com/monero-project/research-lab/issues/73  
**\<UkoeHB\_\>** Research is a big word, but there's an idea  
**\<sarang\>** It'd be possible for a recipient to miss spendable funds if this value weren't included properly  
**\<binaryFate\>** is there any potential issue if the sender does not play "nicely" (purposefully fail the scheme) but can nonetheless prove having sent some outputs to the recipient?  
**\<UkoeHB\_\>** same is true for tx pub keys  
**\<Isthmus\>** If the sender doesn't follow the rules, recipient won't see a message showing receipt of funds.  
**\<Isthmus\>** So they'd just ask the sender to make a valid transaction  
**\<sarang\>** Yep  
**\<Isthmus\>** Really, the sender hurt themselves  
**\<sarang\>** It's similar to if a sender sent a bad commitment,e tc.  
**\<sarang\>** (except for the spendability property)  
**\<UkoeHB\_\>** if there is a wallet that doesnt make view tags correctly, it will be a worthless wallet  
**\<Isthmus\>** Bingo  
**\<UkoeHB\_\>** and quickly get patched  
**\<cankerwort\>** Surely this would be a kind of "fast scan" and if the sender messed it up somehow it would still show up in a normal scan?  
**\<sarang\>** yes  
**\<binaryFate\>** They can "DoS" an exchange support easily  
**\<binaryFate\>** Probably hurt them more than the exchange  
**\<UkoeHB\_\>** yeah cankerwort it would be trivial to have fast/normal scan differentiation; the technique is very simple  
**\<sarang\>** And wallets don't have to use the method to scan at all if they don't want to  
**\<selsta\>** how would fast scan work together with supercop EC ASM? would ASM still bring a scanning speedup?  
**\<binaryFate\>** would there be interesting tradeoff too with a bit more or a bit less than a byte? (changing the 1/256 chance)  
**\<Isthmus\>** The speedup is huge if you're looking for 1-2 addresses, but marginal if you're scanning for 20,000 transactions, right?  
**\<UkoeHB\_\>** my thought is 1 byte is a very standard size, and going lower gets kinda hacky; more than that I can't imagine meaningful improvement  
**\<Isthmus\>** \*1-2 transactions  
**\<UkoeHB\_\>** which speedup?  
**\<UkoeHB\_\>** if somehow you own 80% of all tx, then yeah the view tag only helps you for (255/256)\*.2 of the rest  
**\<cankerwort\>** So a scan under this system would scan (1/256 of all transactions) + (actually relevant transactions) - overlap  
**\<UkoeHB\_\>** right  
**\<UkoeHB\_\>** and 'scan' just means perform a few more ec operations  
**\<UkoeHB\_\>** per output  
**\<UkoeHB\_\>** it's actually 1/256 of all outputs, not tx  
**\<Isthmus\>** ah yea, ty  
**\<TheCharlatan\>** why only one byte? Are two bytes too revealing?  
**\<UkoeHB\_\>** diminishing returns  
**\<UkoeHB\_\>** the marginal scan change from 1 byte to 2 byte view tags is tiny  
**\<sarang\>** OK, noted  
**\<sarang\>** Any additional questions on this idea at this point?  
**\<UkoeHB\_\>** any objections also?  
**\<Isthmus\>** I like it  
**\<TheCharlatan\>** yes :)  
**\<Isthmus\>** Hopefully this will reduce the "Y MONERO SO SLO TO SYNC" posts on reddit by 1/256 too  
**\<UkoeHB\_\>** one can only dream  
**\<cankerwort\>** I suppose generally speaking the fork when transactions get smaller anyway is a good time to introduce these QoL improvements  
**\<binaryFate\>** this looks great  
**\<sarang\>** Well, there doesn't seem to be a plan for whether or not to include Janus mitigations, which have been brought up repeatedly before  
**\<cankerwort\>** or is any reduction in transaction sizes already earmarked for bigger ringsizes?  
**\<sarang\>** There is currently no concrete plan to increase the ring size with CLSAG  
**\<sarang\>** Note that the move from MLSAG to CLSAG will reduce the typical 2-2 transaction from 2.5 kB to 1.9 kB in size  
**\<sarang\>** (absent any other changes)  
**\<UkoeHB\_\>** I think the discussion about Janus and tx extra has made some small progress  
**\<sarang\>** Sure, but small progress != PR  
**\<sarang\>** :D  
**\<sarang\>** Anything else you'd like to discuss UkoeHB\_?  
**\<UkoeHB\_\>** dont think so thanks sarang  
**\<sarang\>** OK thanks UkoeHB\_   
**\<sarang\>** Does anyone else wish to share research of interest?  
**\<sarang\>** If not, I have a couple of things to share  
**\<Isthmus\>** Hmm, I’m still working on creating a graph formalism for fungibility defects. Made a little bit of progress since last week, but it’s still not quite coherent. Being rigorous is hard. Hopefully will have something to share in a week or two.  
**\<Isthmus\>** I’m cooking up some stuff with Insight too. One of the Fellows put together a patch to prevent coinbase underclaiming now that we’ve moved away from discretized outputs. I just looked at the code, will clean it up and submit for consideration/review.  
**\<Isthmus\>** I want to get more of Insight’s engineers working in our ecosystem! Insigght has been pouring a ton of R & D resources into Polkadot, ICON, Zcash, etc. I really want to leverage my team to contribute to the Monero community at this scale too.  
**\<Isthmus\>** Having a few internal syncs to match Fellows onto open challenges, based on their skills/passions/interests.  Hopefully in the next week or two, I’ll be introducing new contributors. :- )  
**\<sarang\>** Nice  
**\<Isthmus\>** More details coming soon as those conversation proceed  
**\<sarang\>** What kinds of projects?  
**\<Isthmus\>** Meeting with the candidates this week to nail that down based on their skillsets  
**\<sarang\>** got it  
**\<cankerwort\>** And now I need to go find out wtf is Polkadot and ICON all evening  
**\<sarang\>** Thanks Isthmus   
**\<sarang\>** This PR to speed up Bulletproofs is ready to go: https://github.com/monero-project/monero/pull/6451  
**\<sarang\>** Applies retroactively, and has some pretty nice improvements  
**\<sarang\>** Saves 25% on a 64-batch of 2-output proofs  
**\<sarang\>** Feel free to review if you like  
**\<ArticMine\>** Excellent  
**\<cankerwort\>** Fantastic news  
**\<sarang\>** Second, I've been working hard on a Triptych implementation in the codebase, for more accurate real-world testing  
**\<sarang\>** This is the branch: https://github.com/SarangNoether/monero/tree/triptych  
**\<sarang\>** (note that this code is not production-ready, and should not be used in anything important)  
**\<sarang\>** Size data comparison: https://usercontent.irccloud-cdn.com/file/KvolrThG/size.png  
**\<cankerwort\>** Triptych = Tryptych 2? As in did one version supersede the other?  
**\<sarang\>** Verification timing comparison: https://usercontent.irccloud-cdn.com/file/4CATnXf6/timing.png  
**\<sarang\>** This is for Triptych, which requires separate proofs per input (much like MLSAG and CLSAG require)  
**\<sarang\>** The timing plot uses performance test data from this branch  
**\<sarang\>** The gray lines are centered at the 11-MLSAG point for visual reference  
**\<sarang\>** The timing data does \_not\_ include some unfinished optimizations, or batching, or common input sets within the same transactions  
**\<sarang\>** However, it provides an idea of how MLSAG, CLSAG, and Triptych compare generally  
**\<Isthmus\>** Noice  
**\<TheCharlatan\>** what's the gray line intersection with the Triptych line x axis value?  
**\<sarang\>** The vertical gray line is for ring size 11 across all constructions  
**\<sarang\>** The horizontal line is the size/time value for MLSAG at ring size 11  
**\<sarang\>** (again, just for visual reference)  
**\<sarang\>** To help you compare to what we have in place right now  
**\<ArticMine\>** What is the impact on tx size  
**\<sarang\>** Each transaction input (not ring element, spent input) requires a single signature, of whatever construction you prefer  
**\<sarang\>** Moving from 11-MLSAG to ~32-Triptych would result in no change to signature size  
**\<sarang\>** and would result in slightly faster verification  
**\<binaryFate\>** really impressive  
**\<cankerwort\>** These are awesome improvements! But the plan is not to go straight for Triptych right?  
**\<sarang\>** The size data are final; but again, the verification data is still WIP  
**\<sarang\>** Triptych (and all other WIP next-gen constructions) require a modification to key images that requires new engineering work for multisig  
**\<sarang\>** It's very nontrivial  
\<[keybase] seddd\>: sorry 4 late. just finishing review of CLSAG, will send draft report to sarang when done. no big findings :)  
**\<sarang\>** Thanks seddd, much appreciated  
**\<cankerwort\>** seddd = surae?  
\<[keybase] seddd\>: +1  
\<[keybase] seddd\>: not by a long shot cankerwort  
**\<sarang\>** Finally, ledger/trezor support for CLSAG is getting finished  
\<[keybase] seddd\>: (surae wayyyy smarter)  
**\<sarang\>** cslashm made a PR that'll be included in the test branch  
**\<sarang\>** and ledger has a PR on their side for firmware support that's been completed  
**\<cankerwort\>** Nice that hw wallets are so proactive compared to how exchanges were with subaddresses  
\<[keybase] seddd\>: ah, that's my next step. still haven't reviewed the ledger-side stuffs. looked at cslashm's PR tho  
**\<sarang\>** It's been very nice to see such quick work for ledger/trezor, that's for sure  
**\<sarang\>** The goal is to have support ready to go at network upgrade time  
**\<sgp\_\>** really cool numbers  
**\<sarang\>** Anyway, that's my report: BP speedup, Triptych WIP data, CLSAG device-specific support  
**\<sarang\>** Any other questions for me about those topics?  
**\<sgp\_\>** Are these numbers \*likely\* similar to Arcturus?  
**\<sgp\_\>** for non-bath  
**\<sgp\_\>** \*batch  
**\<cankerwort\>** what is Arcturus?  
**\<sarang\>** Ah, I renamed Triptych-2, both to reduce name confusion and because it operates differently  
**\<sarang\>** I never liked the name Triptych-2; it was more of a placeholder  
**\<cankerwort\>** Noted and appreciated  
**\<sarang\>** I am not good at clever naming :/  
**\<sarang\>** Anyway, to answer sgp\_'s question  
**\<sarang\>** Arcturus gives better size scaling  
**\<sarang\>** Verification timing will be very similar to Triptych  
**\<sgp\_\>** size already looks pretty good  
**\<ArticMine\>** Still if it can be made smaller then it is an improvement  
**\<sarang\>** With Arcturus, you only need one proof/signature per \_transaction\_ instead of per \_input\_  
**\<Isthmus\>** Ooooh  
**\<sarang\>** The magic of generator reuse means the verification would be similar (if you use common anon sets for Triptych for comparison)  
**\<sarang\>** (this difference is why I renamed it)  
**\<sarang\>** However, keep in mind that Arcturus relies on a nonstandard hardness assumption  
**\<ArticMine\>** What if any are the disadvantages?  
**\<sarang\>** ^^  
**\<cankerwort\>** Is the plan still to get CLSAG audited in time for the next fork? Which are now annually apparently?  
**\<sarang\>** This is my understanding  
**\<sarang\>** (but it's not my decision)  
**\<binaryFate\>** sarang what's your feeling about whether the multisig issue can be solved without foreign primitives?  
**\<sarang\>** As far as I know, we'd need support for general RSA groups for proper multisig with the next-gen constructions  
**\<sarang\>** This is for signing only, not verification  
**\<sarang\>** (even though it's RSA groups, there are no trusted setup problems, FWIW)  
**\<binaryFate\>** And you're confident about this being a requirement, or it's just that nobody found how to do without yet?  
**\<UkoeHB\_\>** I did a writeup on the multisig question here https://github.com/monero-project/research-lab/issues/72  
**\<sarang\>** If you can point out a homomorphic public-key scheme that can use arbitrary prime-order groups, I'm all ears  
**\<sarang\>** Yes, it links to code and a description that I worked out  
**\<UkoeHB\_\>** right ^  
**\<sarang\>** Paillier encryption is not specifically required  
**\<sarang\>** but you need an additively homomorphic scheme  
**\<sarang\>** Anyway, I've taken a lot of time in this meeting  
**\<sarang\>** Was there anything else of interest to share here?  
**\<TheCharlatan\>** I made a Rust PoC for including timelock blinding and commitments in transactions. The PoC builds transactions and verifies them with CLSAG signing and the locktime blinding mechanism as described in DLSAG. It looks like the additional size requirements are: input and output commitments, auxiliary (dummy) plaintext locktime, locktime image and a range proof. Thanks to CLSAG, there is no further  
**\<TheCharlatan\>** increase in the signature size. Contrary to the locktime blinding desription in DLSAG, I think we can spare the range proof on the transaction's output locktime. The main size component therefore is the additional range proof. I also had a discussion about aggregating the locktime range proof in a transaction input with the amount range proof in the output with sarang yesterday (admittedly more  
**\<TheCharlatan\>** of a lesson from sarang, than a discussion). The gist of it is that in transactions with many outputs and inputs, aggregated range proof verification would become prohibitively slow.  
\<[keybase] seddd\>: oh, awesome! please disregard then, sometimes I derp  
**\<sarang\>** TheCharlatan: there should be an additional 32 bytes to the signature  
**\<sarang\>** because of the use of an additional auxiliary linking tag  
**\<TheCharlatan\>** Ah, right I did not include tags in the description :P  
**\<sarang\>** However, adding 32 bytes per input is still pretty darn good  
**\<sarang\>** Note that verification will take a hit  
**\<sarang\>** I have a CLSAG test branch that shows the difference  
**\<sarang\>** (but I don't recall the numbers)  
**\<sarang\>** TheCharlatan: is your code public?  
**\<TheCharlatan\>** yes: https://github.com/TheCharlatan/rs-xmr-cryp/tree/master/timelock  
**\<sarang\>** Also: note that Triptych can be easily extended to support this as well, since it's also a d-LRS construction like CLSAG is  
**\<sarang\>** nice thanks  
\<[keybase] seddd\>: TheCharlatan: that's awesome! was going to live-code CLSAG in Rust this Saturday. glad to have another reference impl :)  
**\<sarang\>** There's also another CLSAG rust implementation available too  
**\<sarang\>** https://github.com/crate-crypto  
\<[keybase] seddd\>: so nice! thanks sarang :)  
**\<sarang\>** (I didn't write that, FWIW)  
\<[keybase] seddd\>: for sure, thanks for the link then :)  
**\<TheCharlatan\>** The crate-crypto implementation is much nicer, mine is more of a quick script.  
**\<sarang\>** TheCharlatan: what would be helpful from this group at this point?  
**\<TheCharlatan\>** so I don't have a good feel on the boundaries of bulletproof scaling yet. So I think some more data there would be helpful.  
**\<sarang\>** OK, I'm glad to help with that if you like  
**\<sarang\>** (probably best to save those questions for after the meeting)  
**\<TheCharlatan\>** yes :)  
**\<sarang\>** Thanks TheCharlatan  
**\<sarang\>** OK, we're just past the hour mark  
**\<sarang\>** Let's move on to ACTION ITEMS  
**\<sarang\>** What do folks plan to work on this week (that they wish to share)?  
**\<sarang\>** I plan to finish the last Triptych code optimizations, to finalize that timing data  
**\<sarang\>** as well as the CLSAG device-specific code integration  
**\<sarang\>** Others?  
**\<UkoeHB\_\>** I think Ill write a brief proposal for Janus + view tag + extra field, a package update  
**\<UkoeHB\_\>** The concept seems to be coalescing  
\<[keybase] seddd\>: just working on finishing up testing/manual review of CLSAG, writing the draft report, etc  
**\<sarang\>** Yeah, and there are several related ideas there that could happen concurrently  
\<[keybase] seddd\>: \_cedes to UkoeHB\_\_  
**\<sarang\>** Any last questions or comments before we adjourn?  
**\<UkoeHB\_\>** ArticMine: how is the fee proposal coming along?  
**\<binaryFate\>** just wants to say that was a lot of impressive developments, feels like christmas  
**\<asdc\_ccc\>** ^  
**\<ArticMine\>** Still working on the fee part.  
**\<sarang\>** All right; we are adjourned! Thanks to everyone for participating  
**\<sarang\>** Lots will be posted shortly  
**\<sarang\>** Discussions can of course continue :)  
