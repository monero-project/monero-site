---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-04-15
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** Let's begin our meeting!  
**\<sarang>** 1. GREETINGS  
**\<sarang>** Hi  
**\<[-mugatu-]>** o/  
**\<sarang>** Quiet day today...  
**\<sarang>** But I suppose we can still move to 2. ROUNDTABLE  
**\<sarang>** suraeNoether: care to go first today?  
**\<suraeNoether>** sure, my cat is missing and i want to go look for her, so i'm going to make this quick  
**\<sarang>** :(  
**\<sarang>** Understood  
**\<suraeNoether>** CLSAG signatures are fast and small, they are so fast and small that my naive colored-coin approach could support two assets and still be faster and smaller than our present MLSAG scheme  
**\<suraeNoether>** i'm not recommending coloring monero, but commenting on overall speed, it's nuts  
**\<suraeNoether>** however, as sarang mentioned, there is a key image problem i'm looking into  
**\<suraeNoether>** it's possible rectifying them will cost us some of those gains  
**\<sarang>** Yeah, I don't think a straightforward LSAG reduction works here  
**\<suraeNoether>** in the meantime, i'm handing CLSAG off to sarang for at least 7 days so i can focus on MRL11  
**\<sarang>** But I wonder if a redefinition of the security requirements to accommodate the new linking will be sufficient  
**\<suraeNoether>** since we're rounding the corner on that, it's my top priority, and i want to get CLSAG out of sight for a few days  
**\<sarang>** righto  
**\<suraeNoether>** okay, i'll be back later today, hopefully with suraecat  
**\<sarang>** Thanks, and best of luck with your search  
**\<sarang>** I completed the building blocks for a simple Lelantus transaction flow (insecure example code in agenda)  
**\<sarang>** and am in contact with the paper's author to discuss some privacy aspects of the construction  
**\<sarang>** the CLSAG example code has been updated to reflect some changes  
**\<sarang>** and, as suraeNoether said, still working on proper formalization, which is trickier than expected  
**\<sarang>** The output selection algorithm discussed here still has an open PR from moneromooo that needs eyeballs  
**\<sarang>** PR 5389  
**\<needmoney90>** Hi  
**\<sarang>** yo  
**\<needmoney90>** Will lurk mostly.  
**\<sarang>** Does anyone else have research to share?  
**\<needmoney90>** Just announcing presence  
**\<sarang>** Otherwise we can keep waxing poetic about CLSAG definitions  
**\<sgp\_>** here now  
**\<sarang>** :/  
**\<sarang>** Hi suraeNoether  
**\<sarang>** sgp\_:  
**\<sarang>** bah, silly autocomplete  
**\<moneromooo>** I have these multi user txes going in the background, and I am wondering whether the 'a' values can be reuesd for multiple outputs.  
**\<sarang>** Remind me what these values are/  
**\<needmoney90>** What's the status on M-of-N multisig?  
**\<moneromooo>** The idea is to make 16 actual outs for the "same" logical output, so they get shuffled as new outputs are added.  
**\<sarang>** (our notation is often inconsistent)  
**\<moneromooo>** And I don't know whether it's safe to keep those. I assume sharing them with other usesr of the same tx is not good.  
**\<dEBRUYNE>** \<suraeNoether> however, as sarang mentioned, there is a key image problem i'm looking into \<= This is referring to CSLAG right?  
**\<sarang>** dEBRUYNE: yes  
**\<sarang>** there are no such issues with MLSAG  
**\<dEBRUYNE>** All right, thanks for clarifying  
**\<sarang>** The problem refers to the fact that trying to reduce CLSAG to LSAG with an aggregated key yields the wrong key image  
**\<moneromooo>** a is the random secret keys generated at proive time to create the pseudoOuts.  
**\<sarang>** Hmm ok  
**\<sarang>** You asked me to review this earlier, and it completely slipped my mind  
**\<sarang>** I'll look for the code snippet you sent in PM  
**\<sarang>** to ensure I don't get wrong the terms you're referring to  
**\<moneromooo>** ty  
**\<sarang>** sgp\_: did you have something you wished to discuss too?  
**\<sgp\_>** I don't believe so  
**\<sarang>** Well, this meeting is turning out to be quite short :D  
**\<sarang>** moneromooo: anything specific, aside from the reuse question you posed?  
**\<sarang>** (to discuss here, I mean)  
**\<moneromooo>** Not at the moment I think.  
**\<sarang>** OK, I suppose we can move right along then  
**\<sarang>** to 3. QUESTIONS and 4. ACTION ITEMS  
**\<sarang>** While suraeNoether continues working on matching/churn via MRL-0011, I have several things for the week  
**\<sarang>** Now that CLSAG reduction to LSAG is proving so problematic, I want to see if definition modifications for the LSAG proofs will suffice for our use case  
**\<sarang>** I'll be checking on moneromooo's question shortly (apologies for letting that slip by)  
**\<sarang>** as well as more work on Lelantus transaction flows  
**\<dEBRUYNE>** sarang: Have you consulted RandomRun regarding this problem btw?  
**\<sarang>** suraeNoether and I have been in contact with him throughout the development process  
**\<sarang>** I don't believe this problem has practical effects on CLSAG's security, only in the complexity of the formalization  
**\<sarang>** Any other questions or action items on people's minds?  
**\<dEBRUYNE>** I see, so it does not render the scheme infeasible?  
**\<sarang>** Heh, depends  
**\<sarang>** If we end up not being able to prove secure under proper definitions, that's a bit of a quandry  
**\<sarang>** but in the worst case, we decide not to adopt the scheme, and are right back to where we are now  
**\<dEBRUYNE>** True, better safe than sorry I guess :p  
**\<sarang>** However, the space and time savings are so compelling that it's worth the effort  
**\<sarang>** ~25% space savings and 15% time savings for a 2-2 transaction  
**\<sarang>** (in the signature portion)  
**\<needmoney90>** Not bad  
**\<sarang>** OK, any last questions before we formally adjourn?  
**\<sarang>** Righto, in that case, we are adjourned. Discussion can of course continue  
**\<sarang>** Logs will be posted shortly to the GitHub agenda issue  
