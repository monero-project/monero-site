---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-08-05
summary: Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** Let's go ahead and get started  
**\<sarang>** suraeNoether says he is unavailable at this time due to an appointment  
**\<sarang>** Agenda is here, where logs will be posted: https://github.com/monero-project/meta/issues/381  
**\<sarang>** GREETINGS  
**\<needmonero90>** hello  
**\<sarang>** Seeing as it's a quiet day, I'll move right along to ROUNDTABLE  
**\<sarang>** I finished work on an efficient RCT3 verifier that takes advantage of Bulletproof-style inner product scaling  
**\<sarang>** and also added fee support, which the original paper didn't natively support  
**\<sarang>** As well as many other assorted code library updates that I'd been meaning to get to over time  
**\<sarang>** Finally, I've been preparing for my DEF CON talk and workshop, and also made a simple CTF puzzle  
**\<sarang>** What have other folks been working on?  
**\<needmonero90>** nothing of particular note here, though I'm curious what the latest on the different ring signature schemes is  
**\<sarang>** Aha, that'll be the topic of my talk!  
**\<needmonero90>** its been on my mind :D  
**\<sarang>** Why's that?  
**\<needmonero90>** transaction efficiency (both time and space) is one of the obstacles we need to overcome  
**\<sarang>** Agreed  
**\<needmonero90>** randomX seems fairly solid now  
**\<sarang>** Of course, these proposals aren't really long-term scaling solutions  
**\<sarang>** but they would provide welcome improvements  
**\<needmonero90>** Is this meeting slow because of defcon? I assume so  
**\<sarang>** There are still some questions on an RCT3 proof that are being investigated  
**\<sarang>** and on the possibility of Omniring efficiency improvements  
**\<sarang>** so the status of different tx protocols may change over time  
**\<sarang>** On that note, an ACTION ITEM for me is to return to Omniring analysis  
**\<sarang>** it's a more complex approach (computationally) than RCT3  
**\<sarang>** and one of those things where the usual efficiency analysis sweeps some types of simple operations under the rug  
**\<sarang>** but those operations can add up fast!  
**\<sarang>** This weekend's village is of course another big action item :)  
**\<sarang>** Slow day today :/  
**\<sarang>** Well, in the interest of respecting everyone's time, are there any questions or other research of interest to share?  
**\<sarang>** (crickets)  
**\<JOhNKmus>**  hey I happen to be here  
**\<sarang>** hello  
**\<JOhNKmus>** I was going to ask if there has been any helpful stuff from Lelantus?  
**\<sarang>** The authors have been working on a modified prover that offloads some of the proving complexity to the verifier (and pays a bit in size)  
**\<sarang>** and the goal is still to remove the tracing that's present (and necessitates self-spend operations)  
**\<sarang>** But AFAIK there have been no solutions as of yet  
**\<JOhNKmus>** Ah okay, cool.  
**\<sarang>** I suspect that removing that problem would require big architectural changes to the whole construction :/  
**\<sarang>** but I hope that I am proven wrong :)  
**\<sarang>** Well, since it's a quiet day I suppose we can adjourn the meeting quite early  
**\<sarang>** Hopefully livestreaming will be happening at the DEF CON village so everyone can see the talks  
**\<sarang>** I'll post my slides to github after my talk, since they have (IMO) some nice and simple information comparing tx protocols  
**\<sarang>** Thanks to everyone for attending today!  
