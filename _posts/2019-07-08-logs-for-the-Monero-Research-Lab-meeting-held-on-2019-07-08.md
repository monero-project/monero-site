---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-07-08
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** Righto, let's begin our meeting!  
**\<sarang>** Agenda: https://github.com/monero-project/meta/issues/368  
**\<sarang>** Starting now with GREETINGS  
**\<sarang>** hi  
**\<sgp\_>** Hi  
**\<sarang>** suraeNoether: you here?  
**\<sarang>** It's quiet... too quiet...  
**\<suraeNoether>** yes  
**\<suraeNoether>** sorry  
**\<suraeNoether>** hellow gents  
**\<suraeNoether>** harrow  
**\<sarang>** Let's jump into ROUNDTABLE then, with our small crowd  
**\<suraeNoether>** mine is going to be super fast: last week basically right after the research meeting i started getting very ill. long story short, i went to the hospital, and let me just say: recreational pancreatitis is not a thing for a reason  
**\<sarang>** but it'd be a cool name for a band  
**\<suraeNoether>** yes. yes. \*strokes chin\*  
**\<suraeNoether>** so, i'm trying to take it easy and i did very little this past week  
**\<sarang>** Glad to see you're well enough to debug :)  
**\<sarang>** For me, MLSAG/CLSAG verification updates continue, with PR 5707 open for review and similar changes to my CLSAG branch (to be included in later code for review)  
**\<suraeNoether>** i have a few things on my plate for today, but other than that: i'm basically all action items and no progress compared to last week. onto sarang :D  
**\<sarang>** I've been in contact with Aram, the author of the Lelantus paper/protocol; he came up with an interesting idea to make the prover very efficient, at the cost of proof size and verification  
**\<sarang>** although the verification cost can be batched, of course  
**\<sarang>** I view proving time as generally unimportant (to an extent), but it's a very clever new way to prove a 1-of-N zero commitment  
**\<suraeNoether>** good prover times means fast construction of transaction for mobile devices  
**\<suraeNoether>** which is v nice  
**\<sarang>** true  
**\<sarang>** but if it costs you both space and verification time...  
**\<suraeNoether>** unlike, say, verification time, which puts a constraint on how rapidly the network can grow, which has security consequences for the chain  
**\<suraeNoether>** ^ ah yeah that's true: is it faster with a big space tradeoff?  
**\<sarang>** Faster prover, slower verifier, bigger proof  
**\<sarang>** I think you can batch away some of the verification increase (you effectively do two smaller proofs)  
**\<sarang>** There's a non-public draft writeup already, but I assume he'll work it into the main paper once the modified security proofs are complete  
**\<suraeNoether>** oooof  
**\<suraeNoether>** very interesting consequences  
**\<sarang>** Regardless, it's a damn clever construction  
**\<suraeNoether>** i'm excited to read all about it  
**\<sarang>** I'll ask if I can send it to you suraeNoether (not public though, sorry)  
**\<sarang>** I'm investigating a possible modification to Omniring that splits out the range proofs, improving verification batching at the cost of proof size  
**\<sarang>** And, because of the Omniring non-batching currently available, am revisiting analysis of RCT3  
**\<sarang>** Which, while it would require a separate output pool (non-compatible key image structure), does allow for batching of proofs (aside from ring member group elements, which cannot be batched unless reused)  
**\<suraeNoether>** last we spoke about this, we were still interested in writing up a comparison paper, but you've done all the legwork on it so far  
**\<suraeNoether>** still the plan?  
**\<sarang>** I don't consider a formal paper necessary, or even a great use of time  
**\<sarang>** But analyses of spacetime, totally  
**\<suraeNoether>** fair, maybe we can do a blog post on tradeoffs between the three schemes or something  
**\<sarang>** Maybe, but it gets subtle and complex really quickly under many different assumptions  
**\<sarang>** There isn't really a quick-and-dirty soundbite answer to which is better or worse  
**\<sarang>** Depends heavily on input/output structure, use of fixed epochs, batch behavior, etc.  
**\<sarang>** and output pool migration is nontrivial  
**\<sarang>** Omniring would \_not\_ require this... Lelantus and RCT3 would  
**\<sarang>** (or rather, Omniring does not \_require\_ this)  
**\<suraeNoether>** see... when you say all that, it seems like it \*is\* a good use of time. maybe not high priority, but  
**\<sarang>** A comparison is useful, I agree. But I don't want it to get lost in unnecessary formality of a full paper  
**\<sarang>** And a comparison is exactly what I'm doing  
**\<sarang>** Any questions on these topics?  
**\<sgp\_>** Just a comment to say simple comparisons are good  
**\<sarang>** roger  
**\<sarang>** Does anyone else have research topics of interest to share?  
**\<sarang>** Righto!  
**\<nioc>** suraeNoether: people are wondering what the attendance was at konferenco  
**\<sarang>** At least provide a range proof  
**\<moneromooo>** 26 people and 172 sybils.  
**\<nioc>** an article in coindesk mentioned 75 which I know is way low  
**\<suraeNoether>** nioc: i'm finishing up my post-mortem report on the konferenco today (on my action item list). We had 150 swag bags made, with around 30-40 leftover, but we had 27 speakers and like 10 sponsors.  
**\<nioc>** I estimated 120 just by glancing  
**\<suraeNoether>** 75 is the number i gave coindesk for the number of attendees on Saturday morning, but more people bought tickets on both days and the totals were higher  
**\<suraeNoether>** if you count speakers and sponsors, that's around 110 on the first day, and around 125 the second  
**\<nioc>** think you mran Sunday morning  
**\<nioc>** mean  
**\<suraeNoether>** nope, we sold tickets throughout the afternoon on saturday and a few on sunday too. but coindesk asked for a comment on saturday morning, so i told them what i had sold at that point  
**\<nioc>** I'll wait for the report  
**\<suraeNoether>** k  
**\<nioc>** thx  
**\<sarang>** suraeNoether: congratulations on effectively committing yourself to running a kickass conference annually until the end of time =p  
**\<suraeNoether>** it was actually some of the best days of my life, but i've been told explicitly by my doctors that i need to take a vacation  
**\<suraeNoether>** so i'm planning for that in august, since scary cardio and internal medicine people told me so with stern voices  
**\<sarang>** Well then, let's move on to ACTION ITEMS  
**\<sarang>** I have many things in progress. Lelantus proof review, modified Omniring split proof analysis, RCT3 analysis, and starting to put together my defcon talk/workshop  
**\<suraeNoether>** my action items: konferenco post mortem, research report for previous quarter, funding request for the next 3 months, and some debuggin  
**\<sarang>** I'm doing a talk on transaction protocols (very high level), a workshop on simple cryptographic constructions with Python, and a panel discussion at the blockchain village  
**\<suraeNoether>** oh and i'm definitely not going to defcon this year. i can ship leftover swag like our USB data blockers with the monero logo and our pull-up banners if someone sends me the information for it  
**\<sarang>** :(  
**\<sarang>** The pull-up banners would be nice, assuming it's cheaper to ship than to get new ones  
**\<sarang>** as would the USB blockers  
**\<suraeNoether>** i'll look into it; ordering the usb blockers may be short notice but i can find out  
**\<suraeNoether>** unless you just meant shipping the banners  
**\<suraeNoether>** which is cool too  
**\<sarang>** Yeah I meant the banners  
**\<sarang>** I believe there was an idea to perhaps order more blockers for this (I'm not the one to ask)  
**\<sarang>** If you have extra USB blockers and would ship with the banners, cool  
**\<suraeNoether>** fantastic, i am happy folks liked the blockers  
**\<sarang>** Any last questions or comments before we formally adjourn, since agenda topics have been completed?  
**\<sarang>** Going once  
**\<sarang>** twice  
**\<sarang>** adjourned!  
**\<sarang>** Thanks to everyone for attending; logs will be posted shortly on the github issue  
