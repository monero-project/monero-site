---
layout: post
title: Logs for the MRL Meeting Held on 2019-11-12
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** Hello all  
**\<sarang\>** Meeting begins presently  
**\<sgp\_\>** hello  
**\<sarang\>** First, GREETINGS  
**\<sgp\_\>** darn, beat you to it :)  
**\<sarang\>** Next up, ROUNDTABLE  
**\<suraeNoether\>** howdy :D  
**\<suraeNoether\>** sarang how about you go first  
**\<sarang\>** I backported the RCT3 exploit fix from the multi-input aggregated proving system to the single-input prover, updated code to reflect this, and checked the relevant security proofs for this construction  
**\<sarang\>** Also went through some math on ways to support multisignatures securely on the sublinear protocols under consideration, with no good answers  
**\<sarang\>** As of now, the constructions for RCT3, Omniring, and Triptych all require an output secret key inversion, which is incompatible with the linear-combination method used for doing multisignatures  
**\<sarang\>** This only comes up for RCT3 and Triptych in the key image generation step, but it's still unfortunate  
**\<suraeNoether\>** i was reading about some signature schemes that don't use hash functions and do use key inversion the other day... when i review your stuff on triptych soundness later today, i'll see if there is anythingt obvious that jumps out at me  
**\<sarang\>** Thanks  
**\<suraeNoether\>** i would assume it's not obvious because you and randomrun are both v diligent  
**\<sarang\>** A few things are still in progress too  
**\<sarang\>** Regardless of multisignature support, I'm working up a preprint on Triptych for IACR eprint  
**\<sarang\>** It'll either be the provably-secure single-signer version, or the multi-signer version if the soundness argument works out  
**\<sarang\>** It'll include the same PRF-based key image construction as found in RCT3 and Omniring, since that's much more efficient than one based on hashing public keys  
**\<sarang\>** Now passing the baton to suraeNoether   
**\<suraeNoether\>** cool, so for our traceability analysis, i'm collecting data now. i presented some preliminary results from a \*single\* simulation yesterday that were rather promising, but can't be generalized yet  
**\<sarang\>** Is the code for those results currently pushed to your repo?  
**\<suraeNoether\>** indeed, all you do is run playerchallenger.py with python3 and simulation results will be spit out  
**\<sarang\>** Can you provide the branch and commit for that version, to be sure we're running the same code?  
**\<suraeNoether\>** of course, the results will vary from simulation to simulation so the precise numbers i provided yesterday will change from simulation to simulation  
**\<sarang\>** right  
**\<suraeNoether\>** https://github.com/b-g-goodell/mrl-skunkworks/tree/matching-buttercup/Matching is the present up to date everything  
**\<sarang\>** Got it, thanks  
**\<suraeNoether\>** the code isn't complete in a lot of ways (there are always ways to make the weighting scheme selected by Eve to be better and to take into account more data), but it's complete enough to start doing some data analysis to get some hard numbers on churn  
**\<sgp\_\>** How can I configure it to test with different churn parameters?  
**\<suraeNoether\>** i am currently modifying the code to specifically investigate churn, which requires some changes to the very front end of my simulations; i don't expect it to be done today  
**\<suraeNoether\>** ^ heh  
**\<sgp\_\>** ok, so stay tuned  
**\<sarang\>** I'm seeing commit d5076 as most recent  
**\<suraeNoether\>** indeedindeed, d5076 is most common  
**\<sarang\>** roger, thanks  
**\<suraeNoether\>** i think MRL-churn-numbers will have some more satisfying answers later this week  
**\<suraeNoether\>** other than that: catching up on the RCT, omni, and triptych work that sarang has been doing  
**\<suraeNoether\>** that's all i have. OH my work report and stuff like that :P  
**\<scoobybejesus\>** fingers crossed my question makes sense  
\< could the logistics be made to work such that signing a tx still happens via linear-combination but key image is derivable independently by multisig members?  
**\<sarang\>** We'd need a secure MPC for the function J(x) = (1/x)\*U  
**\<sarang\>** If there is such a thing, it's all ok  
**\<sarang\>** (here U is a globally fixed curve group generator)  
**\<sarang\>** I'm trying to find the paper where that particular PRF was first introduced  
**\<sarang\>** Cited from Omniring (reference 20): https://www.iacr.org/cryptodb/archive/2005/PKC/3320/3320.pdf  
**\<sarang\>** Anything else to share or discuss from anybody?  
**\<sarang\>** Besides me both liking and disliking that particular pseudorandom function =p  
**\<suraeNoether\>** Just compute the logarithm then add ;)  
**\<sarang\>** But for real, an MPC for that function based on linear combinations would solve the multisig problem AFAICT  
**\<sarang\>** It may not be possible while retaining its nice PRF properties  
**\<sarang\>** (perhaps there's a formal argument that such an MPC couldn't exist)  
**\<suraeNoether\>** Slightly more seriously: why not compute the inverse of the product of the private keys and instead of a partial sum on the basepoint being passed around, a partial product on the basepoint is passed around...  
**\<suraeNoether\>** If I have x and you have y, let the combined key be 1/(xy) U  
**\<sarang\>** If you take away the affine nature of the composite key, I don't see a way to make that work cleanly with the rest of the proof  
**\<sarang\>** nor do I immediately see what partial key image data would be passed around to construct the full image  
**\<suraeNoether\>** I send you (1/x)U. You multiply by 1/y...  
**\<suraeNoether\>** So it's not just an mpc you need but specifically a linear function of the input keys...  
**\<sarang\>** Perhaps. I was thinking in the context of linear key combinations initially (since the rest of the proofs play nicely with that)  
**\<sarang\>** The current multisig works nicely because everything plays nicely with linear combinations  
**\<sarang\>** But point taken that if it were possible to relax that restriction, it could be quite compelling  
**\<sarang\>** The only point in Triptych and RCT3 that requires the use of a full private key (outside of key image construction) is at the end of the proofs, to construct a particular masked scalar  
**\<suraeNoether\>** Hmm  
**\<suraeNoether\>** Ok well I am going to continue reading on triptych and I will try to make a push later today to mess with churn number in my simulations for sgp\_  
**\<sarang\>** Righto  
**\<sarang\>** Let me know if you have any additional thoughts on multisig/MPC constructions too  
**\<sarang\>** Oh, and here's a neat paper that came out recently for doing composable zk proofs in a Python library: https://arxiv.org/abs/1911.02459  
**\<sgp\_\>** thanks suraeNoether. I'm interested in testing your model out  
**\<sarang\>** So perhaps on to ACTION ITEMS now?  
**\<sarang\>** Mine are to wrap up the Triptych formalization to a preprint as much as possible, while considering options for secure MPC  
**\<sarang\>** and then I want to do a deeper review of suraeNoether's recent work on his simulation code  
**\<sarang\>** (and clear a backlog of lit review)  
**\<suraeNoether\>** My big backlog for matching at  this point is commenting it and documenting how it works for anyone who wants to pick it up  
**\<suraeNoether\>** But other than that, I am reading today and doing my work reoorts  
