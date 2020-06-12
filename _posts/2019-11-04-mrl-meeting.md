---
layout: post
title: Logs for the MRL Meeting Held on 2019-11-04
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<suraeNoether\>** GREETINGS!  
**\<suraeNoether\>** I'm surae, I'm a taurus maybe, and i like long walks on the beach with high probability  
**\<sarang\>** Hi  
**\<suraeNoether\>** anyone else here?  
**\<suraeNoether\>** well, public logs will be posted of this meeting either way, so anyone who missed it can find the logs online  
**\<suraeNoether\>** okay, well, sarang, would you like to start?  
**\<sarang\>** Sure  
**\<sarang\>** I've been working on a few things...  
**\<sarang\>** More Triptych work, on math/proof for single inputs, which are fine  
**\<sarang\>** This includes some CLSAG-style key aggregation and more efficient key images  
**\<sarang\>** (more on multi-input in a sec)  
**\<sarang\>** Also gave a talk on transaction protocols  
**\<sarang\>** And looked at using the existing transaction proofs to mitigate the Janus subaddress attack  
**\<sarang\>** As to multi-input Triptych, this link is to the Overleaf paper: https://www.overleaf.com/read/ncqsdsydxvjv  
**\<sarang\>** (multi.tex)  
**\<sarang\>** The problem with witness extraction is the last equation on page 7  
**\<suraeNoether\>** you and arthur are planning on submitting for peer review, yes?  
**\<sarang\>** We could, once/if the proofs work out for multi-input  
**\<sarang\>** We want to show that for every spent input M, H(M) = r\*J  
**\<sarang\>** where J is the key image  
**\<sarang\>** and M = rG  
**\<sarang\>** What we instead show is that a sum of the form \sum\_u (\mu\_u \* H(M\_u)) = \sum\_u (witness\_u J\_u)  
**\<suraeNoether\>** do you have your talk powerpoint up on your github?  
**\<suraeNoether\>** by chance  
**\<sarang\>** yes  
**\<sarang\>** It's also the case that the sum of all witness\_u is equal to the witness found for the signing key check  
**\<sarang\>** Two equations above that one  
**\<suraeNoether\>** found it: https://github.com/SarangNoether/talks :P  
**\<sarang\>** I don't see a good line of reasoning to show why such a witness extraction would be equivalent to the honest generation of those key image  
**\<suraeNoether\>** i'm taking a look now.  
**\<suraeNoether\>** that shouldn't discourage anyone else from looking tho  
**\<sarang\>** (you have to swap the two sums in the last equation to get something of the form that's two equations above, but that's fine)  
**\<suraeNoether\>** janus mitigation right now is extra schnorr signatures, right?  
**\<sarang\>** Yes, but you can use the existing transaction proof method, provided you check against a complete subaddress  
**\<sarang\>** It's still off-chain, but functionality that exists now  
**\<suraeNoether\>** very nice. iirc sgp\_ wrote something on the janus vulnerability and made a blog post about it, or has a draft prepared. is that out or does it need updating or anything like that?  
**\<sarang\>** Probably, but I'd like someone else to confirm that tx proof verification does in fact require external input of the suspected subaddress  
**\<sarang\>** and that it's not pulled from the proof string in any way, or otherwise influenced directly by the prover  
**\<sarang\>** (since the prover could simply use the Janus-modified subaddress)  
**\<sarang\>** For this witness extraction, I suspect that it may possible to show that each u-summand in the X-check is in fact equal to a particular r\_u term  
**\<sarang\>** If that's the case, then we could easily show that the u-summand scalars in the Y-check are those \_same\_ r terms  
**\<suraeNoether\>** great, does anyone else have any other questions for sarang about his work on triptych, or his work on janus, or questions about his talk?  
**\<suraeNoether\>** well, my work this week has been on the matching code ( https://github.com/b-g-goodell/mrl-skunkworks/tree/matching-buttercup/Matching ) which has some peculiar failings right now  
**\<suraeNoether\>** my basic unit tests for graphtheory.py, which handles all the graph theoretic stuff, are passing. nodes and edges are added and deleted correctly, weighted correctly, matches are found, etc.  
**\<suraeNoether\>** but when i simulate a ledger with my simulator.py tool, the result misses some nodes and/or edges  
**\<suraeNoether\>** these aren't being caught lower down, but are being caught higher up  
**\<sarang\>** hmm  
**\<suraeNoether\>** so anyone with interest in python, graph theory, traceability, etc, can contribute by trying to figure out why my code isn't adding edges/nodes appropriately all the time. it's very bizarre behavior, and i'm sure it comes down to something ridiculous like my previous buffer problem  
**\<suraeNoether\>** but, i want to put it down for a few days since other folks in theory could help, and i have other things to do like help review triptych's proofs  
**\<sarang\>** That seems reasonable  
**\<sarang\>** Is it clear in the code (or errors) where the specific problems are?  
**\<sarang\>** i.e. if someone wishes to play around with it  
**\<suraeNoether\>** running sh tests.sh from the tools folder will auto detect all the tests and execute them; i've skipped all the tests i know are currently passing, so it'll go right into the brick wall immediately  
**\<sarang\>** got it  
**\<sarang\>** suraeNoether: if you're going to be on IRC this afternoon, we could dive into that witness extraction and see if we can't solve it  
**\<sarang\>** I have some ideas  
**\<suraeNoether\>** beyond that, i have a few papers i have begun reading, such as this one https://eprint.iacr.org/2019/1177.pdf on aggregation approaches, and a few others on interactive versions of concensus mechanisms like this one https://eprint.iacr.org/2019/1172.pdf  
**\<suraeNoether\>** sarang: i'm catching up on the triptych paper now and whiteboarding it  
**\<suraeNoether\>** if i go all pepe sylvia on the thing i may take a crazed picture for posterity  
**\<sarang\>** excellent reference  
**\<sarang\>** I'll add a few more lines to page 7 to show how the X and Y witnesses are related  
**\<sarang\>** since that should come into play in the Y-soundness  
**\<suraeNoether\>** https://www.youtube.com/watch?v=InbaU387Wl8  
**\<suraeNoether\>** so my action items today are: triptych whiteboarding, janus tx proof validation check (the external input issue you just mentioned)  
**\<sarang\>** great  
**\<suraeNoether\>** my action items immediately are to post my work report for last month and request funding for my next quarter, but i hate that and i much prefer coding and math so i'm finding myself v avoidant  
**\<sarang\>** For this week, I'd (ideally) like to figure out this soundness issue... if it's possible to do so, it provides a very interesting extension to this Groth proof scheme  
**\<suraeNoether\>** does anyone have any other research to advertise, or other questions for sarang or i?  
**\<sarang\>** and would make Triptych a competitive option for tx protocol  
**\<suraeNoether\>** it's such a great name  
**\<sarang\>** suraeNoether: here are some general notes on the witness structure for ya  
**\<suraeNoether\>** afk for about 10 minutes  
**\<suraeNoether\>** sarang ^ yes pls!  
**\<sarang\>** The prover wants to show that it knows the discrete logs (r-terms, in notation) for each of the signing pubkeys (M terms)  
**\<sarang\>** so it knows a set of r (indexed by u different spends, no index here for clarity) such that M = rG for each one  
**\<sarang\>** it also wants to show that H(M) = rJ for each one, where each J is a key image provided by the prover  
**\<sarang\>** When done honestly, each J is defined such that J = (r^-1)\*H(M)  
**\<sarang\>** In the soundness proof, the "X check" is for signing keys, and the "Y check" is for linking tags  
**\<sarang\>** X-soundness allows us to extract a witness (which involves certain Vandermonde-related coefficients) r1 such that r1\*G = mu\_1\*M\_1 + mu\_2\*M\_2 + ...  
**\<sarang\>** and we claim (MuSig/CLSAG-style) that knowing this witness r1 implies knowledge of each of the r terms going into the right-hand sum  
**\<sarang\>** Ideally, for the Y-soundness, we want to extract a related witness that implies knowledge of the same r-terms that go into the linking tag identities  
**\<sarang\>** If you stare at the rightmost terms of the bottom equation and third-from-bottom equations on page 7, you can see the u-summands match up  
**\<sarang\>** If we can show (using the form of the Vandermonde coefficients, etc.) that each u-summand in the X-soundness corresponds properly to an r-value, we may be able to make a solid argument about using those same u-summands in the Y-soundness equation (since we need the \_same\_ r-values there)  
**\<sarang\>** The construction of the Vandermonde-related coefficients \theta\_e is also discussed on page 7 (and can be found in the original Bootle paper's proof)  
**\<suraeNoether\>** back  
**\<sarang\>** This might get complicated, since rows of the Vandermonde matrix correspond to different F-S challenges :/  
**\<sarang\>** sarang is done talking now  
**\<sgp\_\>** suraeNoether: yes, the blog post should be updated to include the mitigation  
**\<suraeNoether\>** hmmmm  
**\<suraeNoether\>** sgp\_: can you link the post for the meeting logs pls?  
**\<sarang\>** sgp\_: once it's been confirmed that the verifier externally provides the expected subaddress  
**\<suraeNoether\>** showing the correspondence like that has always been a sticking point :\  
**\<sgp\_\>** https://getmonero.org/2019/10/18/subaddress-janus.html  
**\<sarang\>** suraeNoether: unless you can think of a good argument that having the same summand terms in both the X- and Y-witnesses is sufficient already  
**\<suraeNoether\>** well, i'll catch up and then i'll see what you mean by that. :P  
**\<sarang\>** e.g. we already claim that knowledge of that sum-witness in the X-portion is equivalent to knowledge of each discrete log  
**\<sarang\>** sure  
**\<suraeNoether\>** \*nod\*  
**\<sarang\>** Just remember that the key to the linking is that we show that the \_same\_ r-terms are used to construct the signing keys \_and\_ the corresponding linking keys  
**\<sarang\>** so having the same witnesses should come into play  
**\<sarang\>** It gets tricky because we don't directly show knowledge of each r-term, just the mu-weighted CLSAG-style combination  
**\<sarang\>** So I wonder if we in fact already have all the information we need to show this  
**\<sarang\>** and perhaps don't need to mess with those Vandermonde coefficients (which would be a huge pain to do)  
**\<suraeNoether\>** okay, does anyone else have any research to talk about, or questions for MRL, or requests/points to bring up/etc?  
**\<suraeNoether\>** otherwise we can adjourn the meeting and continue chatting about triptych outside of that context  
**\<sarang\>** roger  
