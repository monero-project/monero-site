---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-04-29
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** A reminder that this meeting will be logged to the GitHub agenda issue  
**\<sarang>** Let's begin  
**\<sarang>** 1. GREETINGS  
**\<sarang>** hi  
**\<suraeNoether>** hi  
**\<nioc>** peanut gallery watching  
**\<sarang>** For 2. ROUNDTABLE, do you want to go first suraeNoether ?  
**\<suraeNoether>** how about you go first, because i tend to over-explain and write a book. :P  
**\<sarang>** Heh, sure  
**\<sarang>** My investigation into Lelantus is wrapping up  
**\<sarang>** I added multi-input spends using a modified Fiat-Shamir transform in the Groth commitment-to-zero proof protocol  
**\<sarang>** and added direct anonymous payments using stealth addresses  
**\<sarang>** Along with general refactoring and cleanup  
**\<suraeNoether>** you mean you included those things into your test code?  
**\<sarang>** aye  
**\<sarang>** https://github.com/SarangNoether/skunkworks/tree/lelantus/lelantus  
**\<suraeNoether>** neat; was the modified FS the original one you and I discussed that seemed a little sketchy?  
**\<sarang>** transaction.py has some example transaction flows  
**\<sarang>** test.py has other tests  
**\<sarang>** suraeNoether: yes  
**\<suraeNoether>** heh, so for the folks in the audience  
**\<sarang>** I asked around and the general agreement seemed to be that it's fine if used properly  
**\<suraeNoether>** so the idea is to carry out more than one sigma protocol via FS transform simultaneously, using a common challenge across the multiple protocols  
**\<suraeNoether>** computed by hashing \*all\* of the various sigma protocol's first stages in some canonical way  
**\<sarang>** Worth noting that's not an MPC perse  
**\<sarang>** \*per se  
**\<suraeNoether>** my radar goes off here, because it appears to me like this gives an adversarial prover the ability to select which hash function they use to carry out the FS transform for one of their batched sigma protocols  
**\<suraeNoether>** it probably would be very hard to pull off across all the protocols simultaneously  
**\<sarang>** the proofs are always verified in a single batch, so the verifier computes the F-S challenge themselves  
**\<suraeNoether>** anyway, this is \*lelantus\* and they are doing a weird but cool idea that doesn't have a formal security claim behind it, and it's cool, but it definitely sets off my internal radar  
**\<suraeNoether>** i'm glad you implemented it  
**\<sarang>** Also: I worked up a possible new transaction type for migrating RingCT outputs to Lelantus  
**\<sarang>** Brief writeup: https://github.com/SarangNoether/skunkworks/blob/lelantus/lelantus/migration.md  
**\<suraeNoether>** delightful!  
**\<sarang>** There's an intermediate commitment stage to avoid the necessity for a churn  
**\<sarang>** I also did some generalization work on Bulletproofs  
**\<sarang>** I was looking into a way to allow arbitrary-length inputs  
**\<sarang>** had it all coded up  
**\<suraeNoether>** ooooh  
**\<suraeNoether>** we should make that one of our calls later today  
**\<sarang>** turns out the original paper authors thought about that method too, and found it was flawed :(  
**\<suraeNoether>** er... later this week i mean  
**\<sarang>** There's another trickier way that shouldn't have this problem, and I'm getting it finished  
**\<sarang>** There are some unfortunate space-time tradeoffs with this method, though  
**\<sarang>** the scaling gets funky  
**\<suraeNoether>** i'm eager to hear about this  
**\<suraeNoether>** arbitrary-length input things are always so tricky  
**\<sarang>** The prover alternates between doing the inner product folding and sending additional scalar elements to the verifier  
**\<sarang>** it depends on some binary decompositions  
**\<sarang>** For range proofs it's probably not worth it, but we'll see  
**\<sarang>** It's much more useful for circuit applications where the inputs get very large  
**\<suraeNoether>** thanks, Sarang  
**\<sarang>** Finally, our DLSAG coauthors wanted to submit to a conference with length restrictions  
**\<suraeNoether>** oh i didn't hear about the restrictions...  
**\<sarang>** I'm antsy to release this thing, but I'll respect their constraints for submission first  
**\<suraeNoether>** i've not been following that conversation  
**\<sarang>** Yeah they had to shorten it due to page limits  
**\<sarang>** There's an unfortunate issue with key images that we don't have a good answer to yet  
**\<sarang>** (it doesn't affect anything that's deployed, only new constructions under investigation)  
**\<suraeNoether>** do you support a collaboration rule/social norm/expectation at MRL that preprints have to be made public before peer review submission?  
**\<suraeNoether>** in the future i mean  
**\<sarang>** not really  
**\<suraeNoether>** k  
**\<suraeNoether>** just a thought  
**\<sarang>** It's typical to withhold preprints until submission  
**\<suraeNoether>** well, it depends on the journal  
**\<suraeNoether>** it used to be very typical  
**\<sarang>** Sure, but I understand the desire to avoid getting scooped, etc.  
**\<suraeNoether>** it's more and more typical to post pre-prints before seeking publication  
**\<suraeNoether>** especially in the crypto space  
**\<sarang>** I personally prefer preprints ASAP, but I can respect others' wishes here  
**\<suraeNoether>** yeah, but if it's published on arxiv or iacr, you have a timestamp of your idea with your name on it, so the scooping thing never made sense to me  
**\<suraeNoether>** but that's cool  
**\<sarang>** that's a good point  
**\<suraeNoether>** thanks again, Sarang  
**\<suraeNoether>** does anyone have any questions for Sarang?  
**\<suraeNoether>** allrighty  
**\<suraeNoether>** for my update: the tail end of last week, some family showed up unexpectedly and I had to host, and this killed my productivity on Thursday and Friday. I spent most of the weekend making up for that shortfall working on simulations and a bit on CLSAG security, which was just extending my work from previously in the week. I also did some work on output selection (see below)  
**\<suraeNoether>** signature scheme proofs and analysis: I put this on the back burner last week to work on MRL11 simulations (see below, also related to output selection), so not much movement here. The remaining piece for CLSAG is matching our formal descriptions of what is being tested vs. what is being proven, to meet the theory with the application.  
**\<suraeNoether>** Most of CLSAG is within close reach of finishing, but it's a little slower going than I would like. Sarang and I have a call scheduled later today to discuss this (see below). I also sent my thring signatures paper to a colleague to attempt to destroy my security proofs before I attempt a formal peer review.  
**\<suraeNoether>** MRL11 simulations and output selection and churn etc: Some deep issues with my code cropped up, which took a lot of last week to figure out. This led to some ground-up reworking of my bipartite graph code and matching code. Finding maximal matchings in bipartite graphs worked just fine, but finding optimal matchings in bipartite graphs had to be corrected...  
**\<suraeNoether>** and none of my unit tests were catching the problem. I expect another commit later today once I make a few more changes.  
**\<suraeNoether>** Sarang and I are scheduling calls for several days this week to try to tie up some loose ends on a few remaining projects before Concensus/MCC and Monero Workshop next month. Today we are talking about CLSAG and tomorrow about simulations.  
**\<suraeNoether>** I'm speaking at Magical Crypto Conference by the way, and I'll be talking about CLSAG, DLSAG, and the general future of Monero, given upcoming signature schemes and key models; if I have time, I may speak about a longer-term future of Monero that requires deeper changes to our protocol. I only have 15 minutes so I'll be compressing the mathyness.  
**\<suraeNoether>** anyone who will be in NYC should come heckle me  
**\<suraeNoether>** Monero konferenco updates: We are about 8 weeks away! It's a little off-topic to talk about konferenco organization, but people always have questions, so I'm just going ot give a brief update.  
**\<suraeNoether>** XMRHaelan and Thunderosa have been working on some great poster and t-shirt designs. I'm uploading the final version of the poster to the konferenco website later today so we don't have a bunch of versions floating around.  
**\<suraeNoether>** Anyone here who is a speaker at the Konferenco and has not started arranging travel, please contact me immediately (I do not have a complete list in front of me, but I'll be contacting folks individually again). Also, please check https://monerokon.com under the schedule to see if any information about your talk is incorrect or if you think you are in the incorrect session, or if you need to get your title  
**\<suraeNoether>** and abstract to me (\*cough\* isthmus andytoshi). hyc pointed out that his name was accidentally excluded from a previous version of the poster, for example: we've double and triple checked things, but we are human and miss stuff.  
**\<suraeNoether>** Konferenco final touches: speaker rooms are taken care of, flights are almost done being taken care of, and all that remains is ticket and t-shirt sales before the event. If you are a speaker and you have any questions, please contact me. Also, if you are getting tickets, snag them soon because there's only a little over 2 weeks of early-bird pricing left. I'll be posting a budget update some time in the nex  
**\<suraeNoether>** 3 weeks, and a post-mortem update after the Konferenco.  
**\<andytoshi>** ok i'll do title/abstract today  
**\<suraeNoether>** so, basically, I'm catching up on Konferenco emails after the meeting, sending travel reimbursements this week, meeting with sarang on CLSAG and simulations, and writing my talk for MCC... and loving life  
**\<suraeNoether>** andytoshi: thanks brother!  
**\<suraeNoether>** this job is crazy  
**\<suraeNoether>** but i love it  
**\<andytoshi>** lol  
**\<sarang>** Any questions for suraeNoether ?  
**\<sarang>** Also, anyone else have relevant research to present here?  
**\<sarang>** right right  
**\<sarang>** I suppose that takes care of your action items for the week as well, suraeNoether?  
**\<suraeNoether>** oh yeah  
**\<suraeNoether>** although i just found this morning four separate ring signature papers i need to read  
**\<sarang>** word  
**\<suraeNoether>** maybe a fifth  
**\<suraeNoether>** \*sigh\*  
**\<sarang>** Heh, shoot along some links  
**\<sarang>** Since we didn't have additional 3. QUESTIONS  
**\<sarang>** We're on 4. ACTION ITEMS  
**\<sarang>** I will finish up this (correct) Bulletproofs input length generalization, so we have it available if desired  
**\<sarang>** as well as get more feedback for CLSAG formalization  
**\<sarang>** I've been wanting to get an implementation of circuit Bulletproofs for a long time, and would like to get started on it if time permits  
**\<sarang>** Any last questions or comments, since it's a pretty quiet day today?  
**\<moneromooo>** I do have a question:  
**\<moneromooo>** I was playing around with merging txes together, and luigi pointed out that Eve can brute force a ridiculously small space to work out which subsets of ins and outs have matching sums to reconnect inputs to outputs.  
**\<moneromooo>** So if anyone can find a way to generate these "part" txes so that the merged ins/outs add up, that'd help a lot :)  
**\<moneromooo>** (without leaking private information between participants)  
**\<sarang>** Yes, I was thinking about that construction earlier moneromooo. No solution yet, unfortunately, from me :(  
**\<sarang>** I was playing around with discrete log knowledge proofs  
**\<sarang>** Well, rarely does anyone complain that a meeting was too short, so let's go ahead and formally adjourn; research discussions can of course continue here  
**\<sarang>** Logs will be posted shortly to the GitHub agenda issue  
**\<sarang>** Thanks to everyone for attending!  
