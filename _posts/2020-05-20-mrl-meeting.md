---
layout: post
title: Logs for the MRL Meeting Held on 2020-05-20
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** GREETINGS  
**\<sarang\>** hello  
**\<sgp\_\>** hello  
**\<dEBRUYNE\>** hi  
**\<telapongo23\>** Hi guys, just eavesdropping here :-D  
**\<hyc\>** hello  
**\<sarang\>** Let's move to ROUNDTABLE, where anyone is welcome to share research topics of interest  
**\<sarang\>** Who wishes to share something? (I saw Isthmus just posted to the agenda issue)  
**\<ArticMine\>** Hi  
**\<sarang\>** I suppose that I can share a few items  
**\<sarang\>** First, I'll review some Arcturus numbers, some of which were presented last week  
**\<sarang\>** Recall that Arcturus is a modification of Triptych that needs only one proof per transaction, instead of one proof per spend  
**\<h4sh3d[m]\>** Hi  
**\<sarang\>** (making it similar to RCT3's update and Omniring)  
**\<sarang\>** I'll link some plots...  
**\<sarang\>** Size data for 1 input: https://usercontent.irccloud-cdn.com/file/DYMoX7jy/size-1.png  
**\<sarang\>** Size data for 2 inputs: https://usercontent.irccloud-cdn.com/file/7Hw5Wnsv/size-2.png  
**\<sarang\>** Size data for 16 inputs: https://usercontent.irccloud-cdn.com/file/QzJ03VBI/size-16.png  
**\<sarang\>** You can see the improvement as the number of inputs increases  
**\<sarang\>** From last week, I'll re-post the timing data...  
**\<sarang\>** Verification timing for 1-input/2-output transaction: https://usercontent.irccloud-cdn.com/file/airMJ4pC/timing-1-2.png  
**\<sarang\>** Verification timing for 2-input/2-output transaction: https://usercontent.irccloud-cdn.com/file/iZdBR8xe/timing-2-2.png  
**\<sarang\>** Related to this, I've been working on the Arcturus transaction security model, which uses an Omniring-style balance game/definition and applies it to the combination of Arcturus proofs and Bulletproof range proofs  
**\<sarang\>** I'll post that update when I've finished typesetting it and reorganizing the preprint on IACR  
**\<sarang\>** (but it's still in progress!)  
**\<sarang\>** Any questions for me on this material?  
**\<hyc\>** Arcturus seems to blow away the other sig mechs  
**\<fort3hlulz\>** What's the main drawback(s) of Arcturus compared to other sig mechs?  
**\<fort3hlulz\>** Seems like a clear win, but maybe there is something I'm missing.  
**\<sarang\>** The RCT3 update beats it for overall size (when looking at the whole chain), but that does very poorly in verification due to input padding  
**\<sarang\>** Arcturus relies on a nonstandard cryptographic hardness assumption  
**\<hyc\>** what are the implications of being nonstandard? needs further proofs?  
**\<sarang\>** You can see the full-chain comparative estimates on page 12 of the Arcturus IACR preprint: https://eprint.iacr.org/2020/312.pdf  
**\<sarang\>** note that in Figure 3, RCT3 wins, but in Figure 4, it loses  
**\<sarang\>** (size vs time)  
**\<sarang\>** It would need external study to see if it can either be reduced to more standard assumption, broken, or considered/tested enough to be considered reasonable  
**\<sarang\>** Triptych does not have this limitation, and relies on only standard assumptions  
**\<sarang\>** I'm submitting it to conference proceedings in the hope that it will get some quality review  
**\<sarang\>** so I want to update the security model prior to that deadline at the end of this month  
**\<hyc\>** the win on time is huge  
**\<sarang\>** FWIW both Triptych and Arcturus are very similar for verification time  
**\<sarang\>** that's because of how generators are batched similarly in both approaches  
**\<hyc\>** triptych appears to be a constant factor larger in size  
**\<hyc\>** well, nearly.  
**\<sarang\>** It requires multiple proofs, and has some extra elements included (e.g. commitment offsets)  
**\<sarang\>** Arcturus is a single proof, and does not require any commitment offsets  
**\<sarang\>** (it does have proof elements that scale with the number of spends, but does so pretty darn well)  
**\<hyc\>** at least all of the size plots are linear, no silly exponential growth  
**\<hyc\>** probably an obvious statement but I would choose to optimize time  
**\<sarang\>** In that case, Triptych and Arcturus are essentially comparable  
**\<sarang\>** with small variations relating to how balances are checked  
**\<sarang\>** and these variations disappear at higher ring sizes anyway  
**\<hyc\>** and Triptych requires no nonstandard assumptions  
**\<sarang\>** Nope  
\< ah thanks, I was wondering about this  
**\<sarang\>** I could probably add the Arcturus-style balance security definition to Triptych as well  
**\<sarang\>** Isthmus: balance checks in MLSAG/CLSAG/Triptych are identical... sum the commitment offsets and outputs to zero  
**\<sarang\>** In Arcturus it's built in to the proving system directly  
**\<sarang\>** At high ring sizes, the offset-based balance check is overshadowed by the large number of group operations required for the rest of the verification process  
**\<hyc\>** this is some great stuff. Arcturus still grows in size more slowly than Triptych,  
**\<sarang\>** At low ring sizes, they're more comparable and the difference is notable  
**\<sarang\>** Yeah  
**\<sarang\>** Its per-spend elements scale better  
**\<sarang\>** What's nifty is they both use the same underlying Groth-style cryptographic plumbing, but in different ways  
**\<sarang\>** (this is the same plumbing that Lelantus uses)  
**\<sarang\>** Anyway, I've taken up enough of the roundtable time for one day!  
**\<sarang\>** Does anyone else have research they wish to share?  
**\<Isthmus\>** TheCharlatan updated the encrypted unlock time research proposal with sarang's timing data: https://github.com/insight-decentralized-consensus-lab/monero\_encrypted\_unlock\_time  
**\<sarang\>** s/Tryptich/Triptych/  
**\<Isthmus\>** (based on feedback at previous MRL meeting, and input from sarang)  
**\<Isthmus\>** Also, experimenting with a new application for surae's seashell avatars project. Essentially, each transaction fingerprint (behavior or metadata) is compared against the behavior of the core software and assigned a 0 if matching or 1 if deviating.  
**\<Isthmus\>** Looping over fingerprints creates a fingerprint string that is ingested to produce a visual hash. These could be added to a research blockchain explorer so that it's easier to tell at a glance which transactions must have been generated by custom software.  
**\<sarang\>** I'm glad the 3-CLSAG and 3-Triptych data was useful!  
**\<Isthmus\>** For example, the first image shows the avatar for transactions that are from (or mimic) the core GUI/CLI, which has fingerprint ...0000  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/vjCauM0y/image.png  
**\<Isthmus\>** The secnd image shows the avatar for transactions that included a juvenile ring member and thus produce a different signature (...0010)  
**\<Isthmus\>** the bottom image shows the avatar for transactions that included a juvenile ring member and thus produce a different signature (...0010)  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/Lzt9vfyJ/image.png  
**\<Isthmus\>** (note that this particular issue was fixed in recent update)  
**\<Isthmus\>** Anyways, still very early toy/prototype  
**\<sarang\>** So the hash inputs are individually set bits? 1 = "basically the same as standard", 0 = "different enough"  
**\<sarang\>** and this is done over different characteristics to build the input string?  
**\<Isthmus\>** Yep  
**\<Isthmus\>** 0 = "the core wallet would construct a transaction in this way"  
**\<Isthmus\>** 1 = "the core wallet would never construct a transaction this way"  
**\<Isthmus\>** e.g. the juvenile spend example  
**\<sarang\>** got it  
**\<Isthmus\>** Will spice it up a bit though, surae comments "The skin of the shells could be fractals dependent on the hash input visualized in 2d with \*color schemes\* selected from families of pleasing color triples based on hash input..."  
**\<UkoeHB\_\>** What's a juvenile ring member,  
**\<UkoeHB\_\>** ?  
**\<Isthmus\>** Any transaction that includes a ring that includes a ring member less than 10 blocks old (based on the time it was mined)  
**\<Isthmus\>** https://github.com/monero-project/monero/issues/5712  
**\<UkoeHB\_\>** ah  
**\<Isthmus\>** The core wallet has observed a 10-block lock time, so they must have been generated by custom software  
**\<Isthmus\>** But now it's a consensus rule  
**\<sarang\>** To what extent does the visual fingerprint identify the extent to which the transaction is nonstandard?  
**\<sarang\>** e.g. can you look at a fingerprint and see "oof, this transaction is \_very\_ nonstandard!"  
**\<sarang\>** (obviously the Hamming weight of the input will tell you this by inspection)  
**\<Isthmus\>** No, since the visual hash function is appropriately unstable  
**\<UkoeHB\_\>** You could look at the fingerprint string itself to see how different, since more 1s = more different  
**\<sarang\>** That's what I mean by the Hamming weight  
**\<Isthmus\>** aaaactually if the hamming weigh was used to select the colorscale......  
**\<Isthmus\>** Then it could be intuitively accomplished  
**\<Isthmus\>** if colorscale(0) is greenish  
**\<sarang\>** At that point, what's the usefulness of the fingerprint shape?  
**\<sgp\_\>** going all the way back to the unlock time proposal, I still think the tradeoffs aren't worth it  
**\<Isthmus\>** Because 0010 and 0001 are different  
**\<sarang\>** True  
**\<sarang\>** So it really only tells you if the actual strings are different  
**\<sarang\>** I guess I figured the "more useful" component in general might be the Hamming weight  
**\<sarang\>** since one goal is to minimize it  
**\<Isthmus\>** It depends if 'degree of wrongness' is important  
**\<UkoeHB\_\>** I agree sgp\_ it feels quite expensive  
**\<Isthmus\>** From my perspective, 0010, 0001, and 0011 are 3 distinct signatures  
**\<Isthmus\>** Even though 0011 is more worse :- P  
**\<UkoeHB\_\>** ArticMine: how is it going with your penalty/fee proposal?  
**\<sarang\>** While we wait to see if ArticMine is around, were there any other questions on the material Isthmus presented?  
**\<sgp\_\>** none about the presented material, but I eventually have a question for Isthmus about the coinbase vs non-coinbase spend distributions  
**\<Isthmus\>** Hey @sgp\_ what do you have in mind? :- )  
**\<sarang\>** I would also be interested to see that for BTC  
**\<sgp\_\>** heelo Isthmus  :)  
**\<sgp\_\>** s/heelo/hello  
**\<monerobux\>** sgp\_ meant to say: hello Isthmus  :)  
**\<sgp\_\>** I really want to segregate coinbase outputs form other outputs  
**\<sgp\_\>** to do this, I ideally would like to know what the independent spend distributions are for these two categories of outputs  
**\<sgp\_\>** my suspicion is that coinbase outputs are spent faster on average  
**\<Isthmus\>** We can ascertain this by subtracting the reference distribution from the observed ensemble distribution  
**\<Isthmus\>** And split it by type:  
**\<Isthmus\>** distribution(coinbase inclusion in rings) - reference\_distribution  
**\<Isthmus\>** distribution(non-coinbase inclusion in rings) - reference\_distribution  
**\<Isthmus\>** I think @binaryFate was going to present this type of analysis at Konferenco, though I don't know if was split up by output type (non/coinbaase)  
**\<sarang\>** Having a direct measurement from something like BTC would be very helpful regardless  
**\<sarang\>** ideally to follow the Miller et al. idea of comparing known-estimated Monero behavior to BTC  
**\<Isthmus\>** I'll see about extracting true BTC spend times from Google's BigQuery dataset  
**\<sarang\>** That'd be great  
**\<Isthmus\>** There's probably some way to do it in a clever SQL one-liner  
**\<Isthmus\>** But I can do it in 20 lines!  
**\<Isthmus\>** :- P  
**\<sarang\>** Separately, it would also be interesting to see how/if overall BTC spend times have changed since Miller et al.'s paper  
**\<sarang\>** They used two different large groups of blocks  
**\<sgp\_\>** we need to have some selection for the coinbase-only rings in any case, though if the results show that the distributions are different, then that's even more reason to segregate  
\< this  
**\<sgp\_\>** note I still support coinbase-only rings even if the distributions are exactly the same :p  
**\<sarang\>** In the interest of time, were there any other topics to be brought up before moving on?  
**\<sgp\_\>** that's all fro me, thanks Isthmus  
**\<sgp\_\>** \*from  
**\<UkoeHB\_\>** Any new comments on the Tx Supplement proposal?  
**\<sarang\>** Restructuring for uniformity and Janus mitigation seems useful and reasonable to me, FWIW  
**\<sgp\_\>** agreed  
**\<sgp\_\>** costs are small  
**\<sarang\>** Especially with the savings from CLSAG  
**\<Isthmus\>** I'm in favor. Uniformity is the whole point.  
**\<ArticMine\>** UkoeHB\_ It is almost done. I held it back to give ti ore thought especially with COVID-19 which is a perfect scenario for the issue  
**\<ArticMine\>** I should have this in the next two weeks  
**\<UkoeHB\_\>** Cool thanks :)  
**\<sarang\>** OK, with the last few minutes of the hour, let's get to ACTION ITEMS  
**\<sarang\>** I would like to finish the update of the Arcturus security model, to get the updated preprint submitted for review  
**\<sarang\>** And will be discussing the CLSAG audit with Teserakt  
**\<sarang\>** Anyone else?  
**\<UkoeHB\_\>** In the tx supplement proposal I recommend moving to sorted TLV in the extra field. However, it's not completely solved. One option is to retain 'restricted tags' for core features (e.g. encrypted payment IDs, miner nonce). Are restricted tags worthwhile or too hands-on?  
**\<sarang\>** Well, certain tags would be required by consensus... can you refresh us on your definitions here?  
**\<UkoeHB\_\>** Moving to restricted tags might force more uniformity out of pool implementations, since there would be a fixed miner nonce size. However, they could just move their unique nonces to unrestricted tags.  
**\<UkoeHB\_\>** Only encrypted payment IDs would remain in the extra field after the update  
**\<UkoeHB\_\>** And miner extra nonce  
**\<UkoeHB\_\>** So not much consensus left  
**\<sarang\>** Oh, TLV for \_extra only\_... of course  
**\<sarang\>** nvm  
**\<sarang\>** I was thinking about fields in general, which is not correct  
**\<UkoeHB\_\>** With a restricted miner nonce we (probably I) could release a miner nonce guideline for pool implementer to reference  
**\<UkoeHB\_\>** If it's easy enough then hopefully most pools and solominers would be indistinguishable on-chain  
**\<sarang\>** OK, any other questions, topics, or action items before we adjourn?  
**\<h4sh3d[m]\>** I posted a proposal for the atomic swap, feedback are welcome  
**\<sarang\>** Link?  
**\<h4sh3d[m]\>** https://repo.getmonero.org/monero-project/ccs-proposals/-/merge\_requests/145  
**\<sarang\>** thanks  
**\<sarang\>** All right, let's adjourn in the interest of time (and for log posting purposes). Thanks to everyone for attending!  
