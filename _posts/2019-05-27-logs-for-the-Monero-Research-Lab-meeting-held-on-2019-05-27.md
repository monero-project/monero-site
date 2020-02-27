---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-05-27
summary: Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / suraeNoether
---

# Logs  

**\<suraeNoether>** Good morning everyone, and welcome to our weekly research meeting, bringing May to a close. It's been a busy month. Let's begin with agenda item 1: GREETINGS.  
**\<nioc>** peanut here  
**\<suraeNoether>** welcome, peanut gallery :P  
**\<suraeNoether>** Allrighty, since Sarang isn't joining us, this is just good ole surae today  
**\<suraeNoether>** luckily, I have a thing for you guys to read: CLSAG draft! https://github.com/b-g-goodell/research-lab/tree/master/publications/bulletins/MRL-0012-CLSAG  
**\<suraeNoether>** pretty close to 25% reduction in rate of growth of Monero's blockchain size, with around 15-25% speedup in verification times  
**\<suraeNoether>** plus more reckless projects can do colored ring confidential transactions. we are calling them MARCTs - multi-asset ringCT  
**\<suraeNoether>** we are missing one proof in the appendix that is in preparation, and we have an open question about a further reduction in signature size that may be possible  
**\<suraeNoether>** I've also been working on DLSAG. With CLSAG's colored transactions and DLSAG's return functionality plus thring signatures for threshold signing, we have most of the building blocks for off-chain scaling solutions at Monero like lightning network  
**\<suraeNoether>** i believe our co-authors are eager to publish the DLSAG paper this week  
**\<suraeNoether>** this has been a busy month  
**\<nioc>** how do CLSAG and DLSAG play together?  
**\<moneromooo>** Once that paper is out, will you expand on the remainder (wrt "most") ?  
**\<suraeNoether>** short answer: they do not yet. DLSAG has a weird key image structure that is causing problems, but we are going ahead and publishing anyway because we haven't been able to resolve the problem, but the foundational work for DLSAG should still be put out there  
**\<needmoney90>** suraeNoether: the mods were literally discussing pinning a megathread on the konferenco an hour ago  
**\<suraeNoether>** moneromooo: i believe that hash time locked contracts are the final piece of the puzzle, and one of our DLSAG co-authors is working with pedro moreno sanchez at TU wien publishing a paper on that very topic  
**\<needmoney90>** I just pinned yours, thanks for being proactive  
**\<suraeNoether>** needmoney90: dEBRUYNE asked me to post it, that sort of thing escapes my mind a lot so I need pushes from folks. :P I appreciate it  
**\<needmoney90>** Aha  
**\<needmoney90>** Makes sense  
**\<suraeNoether>** greetings  
**\<suraeNoether>** any more questions for me on DLSAG or CLSAG?  
**\<suraeNoether>** okay, now that's out of the way, since last week Spartan and RingCT3.0 and Lelantus are all floating around as ring signature replacements, and these interest me greatly. sarang and i are studying these with the intent of doing a plausibility analysis for them. in the meantime, mrl11, which is the traceability/matching paper is moving forward, a few bugs at a time  
**\<suraeNoether>** it's slow-going, and since the idea of a trustless snark would basically make the paper moot, the priority for the matching paper is sort of a toss-up  
**\<suraeNoether>** now that I've brought everyone up to date on DLSAG, CLSAG, and my other work on mrl11 and ring signature replacement: does anyone else have any research they would like to present, or topics they want to bring up?  
**\<suraeNoether>** general questions or concerns or comments?  
**\<moneromooo>** If considering spartan, it's from a MS employee. Given MS has a rich history of maliciously fucking people over, it should be done very carefully.  
**\<suraeNoether>** ^ 100% with you  
**\<moneromooo>** They do employ a lot of clever people who may not be under the borg thing though, who who knows.  
**\<moneromooo>** How far off is that secondary space win for CLSAG (considering the october or around fork) ?  
**\<suraeNoether>** moneromooo: I need to talk with sarang and randomrun about it, but i have a high degree of confidence in an approve/disapprove well before october  
**\<suraeNoether>** two video calls and we'll have it sorted  
**\<dEBRUYNE>** I think we also have to factor in audit time, because, as far as I know, the community would like to see it audited before being implemented  
**\<suraeNoether>** we can prioritize for end-of-week on that.  
**\<needmoney90>** Pff, just implement it before the audits finish  
**\<needmoney90>** What's the worst that can happen  
**\<suraeNoether>** So, I'm going to go ahead and cancel the research meeting we have planned for the Monday following the Konferenco weekend, June 24th.  
**\<needmoney90>** That makes sense.  
**\<suraeNoether>** needmoney90: i wonder if wownero will have a rainbow of colored coins before fourth of july  
**\<suraeNoether>** At least for the week leading up to the Konferenco, I don't anticipate any research progress on my front, as I prepare for the event  
**\<suraeNoether>** in between now and then my action items for reserach involve working on mrl11 simulation code while compiling info about spartan, ringct3, lelantus, and comparing against CLSAG for a comparative report.  
**\<suraeNoether>** unlike my previous papers, I think I want to use github more extensively for this comparative report, and upload updates to a document as I go so folks can sort of follow along with the development of the document  
**\<suraeNoether>** does anyone have any requested action items from me, or does anyone have any further questions about research, or the konferenco, or does anyone want to speak up about research they've done recently to contribute to Monero?  
**\<suraeNoether>** okay, i want to give a special shoutout to all the folks on the XMR outreach team who've been helping me with Konferenco promotion. Otherwise.. yeesh, it's sad here without sarang  
**\<suraeNoether>** let's adjourn this meeting; see you guys here again on 3 June for our next research meeting!  
