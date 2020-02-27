---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-09-16
summary: Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** OK, it's time for the meeting!  
**\<sarang>** Agenda: https://github.com/monero-project/meta/issues/390  
**\<sarang>** Logs posted there afterward  
**\<sarang>** GREETINGS  
**\<mikerah>** Hello  
**\<sarang>** I'll wait a couple of minutes in case anyone else shows up  
**\<kinghat>** o/  
**\<kinghat>** \*the regular crowd shuffles in\*  
**\<el00ruobuob>** Hi  
**\<sarang>** Our pal suraeNoether said he may not be available for today's meeting  
**\<sarang>** But I can share some of the things I've been working on for our ROUNDTABLE  
**\<sarang>** The ever-clever RandomRun posted an idea for a signature scheme earlier: https://github.com/monero-project/research-lab/issues/56  
**\<sarang>** Some updates have been made for efficiency, and I worked up proof-of-concept code: https://github.com/SarangNoether/skunkworks/tree/lrs/lrs  
**\<sarang>** And a timing/space analysis: https://github.com/SarangNoether/skunkworks/blob/sublinear/triptych.md  
**\<sarang>** (I gave it the name Triptych as a placeholder, so we have a name to use for clarity)  
**\<sarang>** It actually beats Lelantus in terms of 2-2 transaction size  
**\<sarang>** But verification is less efficient  
**\<sarang>** Also note that security hasn't been proven yet, but it uses a modification by Bootle et al. to a 1-of-N proof by Groth  
**\<sarang>** and that 1-of-N has good proofs  
**\<sarang>** Aside from that, I've been working with the Lelantus authors on some ideas to fix its self-spend tracing problem  
**\<sarang>** And that's coming together nicely  
**\<sarang>** The CLSAG paper will be submitted to Financial Cryptography this week  
**\<sarang>** And my CCS funding request for next quarter has been opened: https://ccs.getmonero.org/proposals/sarang-2019-q4.html  
**\<sarang>** On a more whimsical note, a preprint was just posted that does some analysis on a card-based cipher originally designed by Bruce Schneier for a book: https://arxiv.org/abs/1909.06300  
**\<sarang>** It's a neat example of a cipher that appears to resist a good deal of modern cryptanalysis, but can be done using paper, pen, and a deck of playing cards!  
**\<mikerah>** ElsieFour also has such properties except without the playing cards.  
**\<sarang>** Ah, and I'd be remiss if I didn't mention the trustless recursive SNARK paper, Halo, that was recently posted by the Zcash folks  
**\<sarang>** mikerah: I wasn't familiar with that!  
**\<sarang>** Has it undergone much analysis?  
**\<mikerah>** Here's the preprint: https://eprint.iacr.org/2017/339.pdf  
**\<sarang>** neat  
**\<mikerah>** I'm not sure if it has gone through much analysis as it's a relatively new construction.  
**\<mikerah>** But you can use paper and pen!  
**\<sarang>** Halo has some clever ideas in it, but it's worth noting (as usual) that preprints don't undergo peer review, and that Halo currently lacks a soundness proof  
**\<sarang>** It will be fun to see the new research that comes from its ideas  
**\<sarang>** Any particular questions on the items that I mentioned?  
**\<mikerah>** How would the ideas from lelantus get implemented in monero?  
**\<sarang>** Its transaction model could, hypothetically, be implemented directly  
**\<sarang>** Using a particular kind of migration transaction to transition older outputs  
**\<sarang>** It would result initially in a smaller anonymity set  
**\<sarang>** Currently Lelantus has a tracing issue that's a deal-breaker IMO  
**\<sarang>** but very recent ideas mean that may not be a problem  
**\<mikerah>** Would there be traceability problems from the current monero blockchain to this hypothetical lelantus+monero blockchain?  
**\<sarang>** How so?  
**\<mikerah>** As in, would it be possible to trace transactions between hard forked blockchains  
**\<sarang>** In such an implementation, old-style transactions would not be allowed  
**\<sarang>** Old outputs would undergo a signer-ambiguous transaction to generate a new output commitment that is Lelantus-compatible  
**\<doxxy>** sarang: greets  
**\<sarang>** So a migration is trivially distinguishable, but retains the same kind of signer ambiguity that exists now  
**\<sarang>** hi  
**\<sarang>** To be clear, there are no plans to implement this AFAIK  
**\<mikerah>** I see. I guess more work would need to be done on this front.  
**\<sarang>** It's all just research  
**\<sarang>** Anyway, that's what I've been working on  
**\<sarang>** Does anyone else wish to share interesting research?  
**\<sarang>** OK!  
**\<sarang>** Well, in that case my ACTION ITEMS are administrative stuff for FC submission, ongoing analysis of Lelantus modifications and proofs, and returning to some existing recent proving systems  
**\<sarang>** Before we adjourn, is there anything else to discuss?  
**\<gingeropolous>** i don't have any research im working on, but im enjoying banging my head regarding the randomx branch prediction problem  
**\<sarang>** Go on!  
**\<gingeropolous>** so, big chunk of CPU silicon dedicated to branch prediction. Turns out a lot of the methods use neural networks kinda thing (called perceptron at one point).  
**\<gingeropolous>** however, problem is that randomx is random - its random whether a branch will be taken  
**\<gingeropolous>** and when somethings random, hard for machine-learning / pattern recognition to get any gains  
**\<sarang>** Makes sense  
**\<gingeropolous>** however, if you try and seed random into the program (such that a branch predictor could find some emergent pattern), this information could be harvested by an ASIC or some other mitigation  
**\<gingeropolous>** so, my head sorta got stuck at that point... and if it'd be possible to somehow hide the emergent pattern... and then all the thought threads frayed  
**\<sarang>** So, using information from existing CPU architectures in order to develop better specialized hardware?  
**\<sarang>** Or information from any kind of well-designed predictor, I suppose  
**\<gingeropolous>** well the general randomx problem is to make a PoW that leverages stuff in CPUs.  
**\<gingeropolous>** and branch prediction is underleveraged due to the problem i just described  
**\<sarang>** Ah, ok  
**\<sarang>** I don't know enough about CPU branch prediction to fully appreciate this, but it sounds interesting nonetheless  
**\<sarang>** Anything else of interest to share before the meeting ends?  
**\<sarang>** All righty then  
**\<sarang>** Thanks to everyone for being here; we are now adjourned!  
**\<sarang>** Logs will be posted shortly  
