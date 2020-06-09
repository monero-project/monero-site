---
layout: post
title: Logs for the MRL Meeting Held on 2020-04-29
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** OK, let's get started with the research meeting!  
**\<sarang\>** First, GREETINGS  
**\<sarang\>** hi  
**\<ArticMine\>** hi  
\<[keybase] unseddd\>: o7  
**\<UkoeHB\_\>** hi  
**\<sarang\>** Let's go ahead and continue with the ROUNDTABLE  
**\<sarang\>** Anyone is welcome to share research topics of interest  
**\<sarang\>** I suppose that I can share a few things  
**\<sarang\>** Relating to timelocks, I extended CLSAG and Triptych to support them  
**\<sarang\>** CLSAG: https://github.com/SarangNoether/monero/commit/28f098260c5bb4da57bb78ebc885fe27c9f10c39  
**\<sarang\>** Triptych: https://github.com/SarangNoether/monero/commit/ed48ab1686b7e7405bd6656c18e37ea21e01fe05  
**\<sarang\>** Here is corresponding timing data: https://usercontent.irccloud-cdn.com/file/dQXuFH2U/timing.png  
**\<sarang\>** 3-CLSAG and 3-Triptych are the timelock-friendly data series  
**\<sarang\>** The other data series are unchanged from when I first shared them  
**\<sarang\>** I suspect that 3-CLSAG could be optimized by perhaps another 10% or so from what appears on the plot  
**\<sarang\>** Unrelated to this, I'm updating how in-memory key encryption is handled, which is taking a bit longer than expected  
**\<sarang\>** and am reviewing the new CLSAG fuzzer tool that unseddd provided  
**\<sarang\>** That's about it from me!  
**\<sarang\>** Are there any questions that I can answer?  
**\<Isthmus\>** Nice work  
**\<sarang\>** Thanks!  
**\<ArticMine\>** CLSAG optimization in verification time, size or both  
\<[keybase] unseddd\>: seconded, nice stuff sarang  
**\<sarang\>** ArticMine: in verification time, and only for the new 3-CLSAG variant that would apply to encrypted timelocks  
**\<ArticMine\>** Great work by the way  
**\<ArticMine\>** Thanks  
**\<sarang\>** When I wrote 3-CLSAG, I used a particular multiscalar multiplication that could likely be made faster for this particular case  
**\<sarang\>** Also, huge thanks to unseddd for reviewing CLSAG and writing the fuzzer tool  
\<[keybase] unseddd\>: is 3-CLSAG limiting the multisig to three parties?  
\<[keybase] unseddd\>: np :)  
**\<sarang\>** No, it adds another key component that would be used for timelocks  
**\<sarang\>** Right now we have two key components: one for the usual signing, and the other for balance purposes  
\<[keybase] unseddd\>: ah, thanks for the clarification  
**\<sarang\>** Does anyone else wish to share research of interest?  
**\<UkoeHB\_\>** it seems like 3-triptych would reduce the ringsize likely to be selected by a power of 2  
\<[keybase] unseddd\>: not much interesting on my end. just reading formal verification papers + some pq-crypto stuff from Mike Hamburg  
**\<sarang\>** Adding encrypted timelocks is a nontrivial verification hit  
**\<ArticMine\>** What is the time ans size cost  
**\<sarang\>** What might be interesting as an alternative would be to allow cleartext timelocks, but update decoy selection to account for known spend patterns  
**\<sarang\>** It would not eliminate fingerprinting, but could help to mitigate age-related selection heuristics  
\<[keybase] unseddd\>: are there any leakage issues having the timelock in the clear?  
**\<sarang\>** ArticMine: going from CLSAG to 3-CLSAG is about 1.4x increase in verification time  
**\<sarang\>** Which could probably be reduced slightly with some extra work  
**\<sarang\>** In terms of size it's fairly trivial... adding an extra auxiliary key image (this does not account for other non-signature data)  
**\<sarang\>** unseddd: for sure  
**\<sarang\>** I'm not saying that I advocate for such an approach, only that it could be an option  
**\<sarang\>** and would not imply any size/time hits  
**\<UkoeHB\_\>** it's a ways down the road, but I'd like to mention it now; when deciding ring sizes for next gen tx protocol I feel it should be based on a broader analysis of theoretical maximum tx throughput of the network; this is because the max tx volume is when rings are \_least\_ useful to defend against non-scaling graph heuristics, and because larger ring sizes actually reduce the max tx volume; it's an optimization  
**\<UkoeHB\_\>** problem  
\<[keybase] unseddd\>: right, from a naive perspective, triptych seems like it has enough savings for the hit from timelocks  
**\<sgp\_\>** sorry I'm late. catching up  
**\<ArticMine\>** UkoeHB\_ The maximum tx throughput is also dependent on external factor tat keep improving over time  
**\<UkoeHB\_\>** unfortunately that optimization depends on the efficacy of ring sizes.. which we don't have a complete understanding of; I hope suraeNoether can return to that topic at some point  
**\<UkoeHB\_\>** ArticMine: true, there are a lot of factors to consider!  
**\<sarang\>** At the very least, we now have concrete numbers for the spacetime effects of ring size increases  
**\<atoc\>** hi  
**\<sgp\_\>** the cost of encrypted timelocks seems extreme to me tbh. I don't want to go there unless we know we need to support them for a good use-case  
**\<sarang\>** Getting timelock-related spend age data from transparent chains might be helpful if it's decided to continue to allow cleartext timelocks  
**\<sarang\>** Then output selection could be improved to account for it, and reduce the usefulness of spend-age heuristics  
\<[keybase] unseddd\>: use-case: timelocks necessary for atomic swap, encrypting is the most private  
\<[keybase] unseddd\>: could also see the counter-point for clear timelocks if they are necessary for atomic swaps (interop w/ clear chains maybe)  
**\<sgp\_\>** sarang: I agree, but given the current low utilization, I consider this low priority. The impact to the wider network is negligible  
**\<ArticMine\>** Payment channels come to mind here  
**\<ArticMine\>** also escrow  
**\<sarang\>** Getting that kind of transparent chain data seems pretty straightforward  
**\<sgp\_\>** if there's a payment channel, then we can move to make encrypted mandatory. when that happens  
**\<Isthmus\>** @sarang, it's on my to-do list for XMR and BTC  
**\<sarang\>** :D  
**\<sarang\>** How do you plan to examine spend-age data for XMR?  
**\<sarang\>** It was examined in Miller for "deducible" outputs (pretty sure that's the term they used) that were the result of chain reactions, which we find don't occur anymore  
**\<Isthmus\>** Oh, I just meant comparing the unlock time height to block height to see how many of them even make sense  
**\<Isthmus\>** Not that current usage tells us much about future applications.  
**\<sarang\>** Ah, got it  
**\<Isthmus\>** What is it that you were interested in?  
**\<atoc\>** Isthmus are you thinking about atomic swaps these days at all/  
**\<Isthmus\>** @sarang sorry I'm in a zoom call and IRC meeting at the same time, and missing little pieces of both  
**\<sarang\>** I'd like to see the age distribution of spent outputs in a transparent asset (like BTC) relative to lock expiration, to see if it differs substantially from the overall age distribution  
**\<sarang\>** No problem Isthmus!  
**\<Isthmus\>** ahhh, yea I can't officially do that for Monero yet. I'll pull it for BTC though.  
**\<UkoeHB\_\>** can't officially? it's possible?  
**\<sarang\>** Thanks! The overall distribution likely is still similar to the Miller data  
**\<sarang\>** (for BTC, of course)  
**\<sarang\>** and having that data would be an interesting check of that  
**\<Isthmus\>** @UkoeHB\_ yeah, I mean my research over the past few years reveals anonymity puddles covering like 20% of transactions. Then change outputs bleed everything, so there's a ton of data  on obviously real spend times. BUT no guarantee that it's representative.  
**\<Isthmus\>** I'll be supper curious to see the BTC distributions, will try to get that in the next week or so.  
**\<Isthmus\>** \*super  
**\<sarang\>** Yeah, Miller's team used two different large sets of blocks in BTC for their analysis  
**\<sarang\>** and found the distributions to be similar  
**\<sarang\>** but it doesn't appear they accounted for locks  
**\<sarang\>** OK, did anyone else have a topic to discuss?  
**\<Isthmus\>** Insight is interested in researching practical post-quantum cryptography for Monero, especially privacy features that will remain secure against retrospective deanonymization by future adversaries that can utilize Shor's algorithm, Grover's algorithm, etc. I want to know what our options are, and their costs (complexity, proof size, generation/verification time, etc)  
**\<Isthmus\>** https://github.com/insight-decentralized-consensus-lab/post-quantum-monero/blob/master/README.md  
**\<Isthmus\>** Looking for feedback on the research plan.  
**\<Isthmus\>** Our goals are to (1) study and simulate the threats listed above to assess vulnerability to quantum computers, (2) evaluate post-quantum cryptography scheme candidates to create a roadmap for hardening Monero against quantum adversaries, and (3) provide open-source proof-of-concept code and demos where applicable.  
\<[keybase] unseddd\>: i like pq stuff :) will take a look  
**\<sarang\>** Sounds like a fascinating project  
**\<sarang\>** I'd be very curious to see what exactly the Phase 3 deliverables would look like  
**\<Isthmus\>** Me too! ^\_^  
**\<sarang\>** and I think it'd be important to assess any transtion points between constructions/protocols  
**\<sarang\>** e.g. it was possible to transition from pre-CT to post-CT  
**\<Isthmus\>** Yeah, we'll have to document both the transition and post-transition costs/tradeoffs  
**\<sarang\>** New constructions are great, but if it's not possible/feasible to transition on the same chain, that's a sticking point  
\<[keybase] unseddd\>: here is the Hamburg paper i am reading through: https://www.shiftleft.org/papers/qromcca/  
**\<ArticMine\>** Yes this is a very interesting project  
**\<sarang\>** Are you confident about the timeline?  
**\<sarang\>** Particularly surrounding the Phase 3 stuff  
**\<sarang\>** (not that practical quantum computers are expected by the end of summer...)  
**\<Isthmus\>** There's two types of things we could prototype  
**\<UkoeHB\_\>** it does say May - June, only a couple days away, not sure if a CCS could be approved and funded in time  
\<[keybase] unseddd\>: ten million qubits by fall!!!  
**\<Isthmus\>** (1) demo of a quantum computer breaking a Monero encryption feature (at a reduced keysize, or something like that)  
**\<UkoeHB\_\>** s/June/July  
**\<monerobux\>** UkoeHB\_ meant to say: it does say May - July, only a couple days away, not sure if a CCS could be approved and funded in time  
**\<Isthmus\>** Adam did this before, got an IBM quantum computer mining bitcoin at shorter hash length  
**\<Isthmus\>** So that's demo breaking classical crypto  
**\<Isthmus\>** (2) prototype a possible solution  
**\<Isthmus\>** (so we'd use traditional computers and prototype a future solution)  
\<[keybase] unseddd\>: \_thoroughly impressed\_  
**\<Isthmus\>** Now honestly, I think that #2 would be way cooler. But it also may be hopeful thinking  
**\<Isthmus\>** I've seen Adam rapidly convert math papers to code before, but this is going to be a pretty serious endeavor  
**\<sarang\>** Either way, would be fascinating  
**\<Isthmus\>** here was my note in the writeup  
**\<Isthmus\>** "Phase 3 deliverables: The best use of time during this final stage depends strongly on results from the exploratory research. Likely deliverables are a proof of concept or prototype tooling for demonstrating a vulnerability or potential solution"  
**\<UkoeHB\_\>** would (1) also include a comparison with a classical computer on the same task? at reduced keysizes, the encryption is weaker on classical computers too  
\<[keybase] unseddd\>: Isthmus: are Adam and you regularly in IRC? what is best communication channel?  
**\<Isthmus\>** @UkoeHB\_ exactly  
**\<Isthmus\>** Adam'll be on IRC shortly :- )  
**\<Isthmus\>** We'll probably do a lot of the research in this room, if that's okay with people?  
**\<Isthmus\>** Or could make #pq-mrl  
**\<sarang\>** Up to you!  
**\<Isthmus\>**   
**\<sarang\>** OK, any other topics to address before finishing up the meeting?  
**\<UkoeHB\_\>** does anyone have new thoughts on https://github.com/monero-project/monero/issues/6456?  
\<[keybase] unseddd\>: UkoeHB\_: unfortunately no, have been consumed elsewhere. many apologies  
**\<sarang\>** UkoeHB\_: I got unexpectedly caught up in other coding, and didn't review in detail yet :/  
**\<Isthmus\>** Oh! Yeah, I'll look at that by Monday. Hopefullly today  
**\<sarang\>** my aopologies  
**\<sarang\>** s/aopologies/apologies  
**\<monerobux\>** sarang meant to say: my apologies  
**\<sarang\>** All righty, any ACTION ITEMS for the next week to share?  
**\<sarang\>** I will be reviewing 6456, reviewing some CLSAG tests, updating some in-memory encryption code, etc.  
**\<Isthmus\>** I'll probably bump the pq-monero proposal over to CCS by EOW, so shoot me a message (irc or isthmus@getmonero.org works) if you have any suggestions for updates or additions  
**\<UkoeHB\_\>** on a certain level I have nothing else to contribute to the proposal; whether it gets implemented or not is out of my control; keep in mind it likely won't be superseded by anything, so for 'tx extra', 'janus mitigation', 'tx pub keys', and 'view tag', that's the 'final answer' for the forseeable future  
**\<atoc\>** I'm working on some slides (summary) that details how Grin does their grin-btc atomic swap  
**\<atoc\>** looking to see if we can get some insight for xmr-btc swaps  
**\<hyc\>** Iǘe become convinced that itś never in any XMR holders'interest to swap for BTC, due to BTC taint issues  
**\<hyc\>** but I'd be curious to see how it can work, for future XMR(earth)/XMR(mars) swaps  
\<[keybase] unseddd\>: hyc: even for true DEX scenario?  
\<[keybase] unseddd\>: marsero  
**\<hyc\>** especially for true DEX, wher eyou can't vet the BTC  
**\<hyc\>** the benefits are all one-sided, in favor of the BTC seller  
**\<Isthmus\>** Eh if I've got a wallet full of Monero, but the sandwich shop I'm standing in only takes BTC, I might find that swap useful.  
**\<ArticMine\>** I have to agree with hyc Selling XMR for BTC on a swap is very dangerous  
\<[keybase] unseddd\>: yeah, i see your point. do you have the same opinion for other swap pairs?  
**\<hyc\>** if the other pairs also involve transparent coins, yes  
**\<sgp\_\>** +1 concern here  
**\<sarang\>** Well, in the interest of time (our hour is up), I'll adjourn the meeting for log purposes, but discussion can of course continue  
