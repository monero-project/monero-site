---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-07-15
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** Let's start  
**\<sarang>** GREETINGS  
**\<suraeNoether>** howdy everyone  
**\<suraeNoether>** anyone else here? :P  
**\<sarang>** I suppose we can continue anyway  
**\<sarang>** ROUNDTABLE  
**\<sarang>** suraeNoether: care to begin?  
**\<suraeNoether>** Sure. First, dEBRUYNE: I got an aswer from Jerry Brito re your question about bitlicense  
**\<hyc>** hi  
**\<sarang>** Can you repeat the question?  
**\<sarang>** (for our logs)  
**\<suraeNoether>** yes: dEBRUYNE was wondering if I could ask jerry brito about the possibilities of how Monero can work with the NYDFS bitlicense  
**\<suraeNoether>** the example of Zcash being something that recently been listed on coinbase, etc, indicating that the NYDFS gave their blessing somehow  
**\<sarang>** This is Zcash's compliance brief: https://z.cash/wp-content/uploads/2019/04/Zcash-Regulatory-Brief.pdf  
**\<sarang>** You may find it useful  
**\<suraeNoether>** it turns out that we have it backwards: exchange businesses or money transmitting business need to get valided through the NYDFS, and the reason that zcash was listed on coinbase had more to do with how much contact zcash has had with the coinbase team  
**\<suraeNoether>** so, rather than having coincenter talk to NYDFS, what we need to do is start having meetings with people at coinbase, or gemini, or whichever platform we are discussing  
**\<suraeNoether>** dEBRUYNE: does that make sense?  
**\<dEBRUYNE>** Yes, thanks  
**\<dEBRUYNE>** sarang: Also -> https://www.dfs.ny.gov/about/press/pr1805141.htm  
**\<sarang>** Sure, it doesn't really make sense to have a protocol validated by a regulator anyway  
**\<suraeNoether>** right  
**\<sarang>** Wait, what?  
**\<suraeNoether>** okay, moving past regulation  
**\<sarang>** That press release specifically identifies assets  
**\<sarang>** I don't really know what that means  
**\<sarang>** This is why I am neither a regulator nor a lawyer :/  
**\<suraeNoether>** well, let's move on and discuss it in a bit  
**\<sarang>** Perhaps they go to regulators with a specific version or something, I dunno  
**\<sarang>** sure  
**\<suraeNoether>** a konferenco post morto update  
**\<sarang>** s/morto/mortem ?  
**\<suraeNoether>** latin or esperanto?  
**\<sarang>** -\_\_\_\_-  
**\<suraeNoether>** lol  
**\<suraeNoether>** so anyway, i spent the past week doing a few things wrapping up the konferenco, including organizing the budget projected vs actuals  
**\<suraeNoether>** and writing these four guide documents. THESE ARE INTENDED TO BE LIVING DOCUMENTS, UPDATED REGULARLY BY KONFERENCO ORGANIZERS.  
**\<suraeNoether>** they are not commandments in stone.  
**\<suraeNoether>** https://github.com/b-g-goodell/mrl-skunkworks/tree/master/Konferenco  
**\<suraeNoether>** they are to be debated and argued  
**\<suraeNoether>** sarang and i were debating funding structures earlier  
**\<sarang>** vigorously  
**\<suraeNoether>** KonGuide.docx is a general guide for maybe how things can go in the future  
**\<suraeNoether>** i recommend even if you disagree with my budgeting/finance recommendations (with respect to the CCS or something), move past that and read the organizational part of the document  
**\<sarang>** One note... using markdown instead of docx is much better for version history on git  
**\<sarang>** (and displays natively via github)  
**\<suraeNoether>** if someone wants to convert it, i'd love that  
**\<suraeNoether>** i've been braindumping into libreoffice  
**\<suraeNoether>** KonGuideKO.docx is designed for konferenco organizers  
**\<suraeNoether>** this includes a list of things to do to get ready for the konferenco, including checklists at the end  
**\<suraeNoether>** KonGuideSC.docx is designed for the "steering committee" which will probably have whoever is financially liable for the konferenco sitting on it. they make final budget decisions and sign contracts.  
**\<suraeNoether>** KonGuideCC.docx is designed for the "content committee" which will be deciding on speakers and inviting them, and organizing the schedule  
**\<sarang>** What are a couple/few things (briefly) you would have done differently, in hindsight?  
**\<suraeNoether>** well, budgetarily, this was a nightmare. there were three very large sources of red on the budget sheet that should have been addressed  
**\<sarang>** If you would have been able to more regularly cash out the CCS (or done it in chunks), would that have solved the problem?  
**\<suraeNoether>** firstly, the original CCS request was designed to ask for 60,100$ but by the time I actually received it, it was worth $28,500 or so. waiting until it was done in one big chunk and then transferring it to me introduced so much time into the equation for price that volatility ate a lot of the money.  
**\<sarang>** Not good for the organizers or donors  
**\<sarang>** (they don't know the eventual value of their donations)  
**\<suraeNoether>** one way to rectify that could be regularly withdrawing from the funding as it goes, another way would be to have funding take place in stages  
**\<suraeNoether>** secondly, our turnout was much lower than we had all hoped  
**\<sarang>** What if you raised money based on when different things needed to be purchased? Like the venue, or food, or A/V support, etc.  
**\<sarang>** Then donors have specific things they can donate do, as opposed to more vague "this month's MonKon funding stage"  
**\<sarang>** s/do/to  
**\<suraeNoether>** so what happens if you drum up money by the payment deadline for venue but not A/V? it's a tricky question.  
**\<suraeNoether>** i don't pretend to ahve all the answers  
**\<suraeNoether>** second source of funding problems: we had 58 general admission tickets, 4 student tickets, 11 platinum tickets, 27 speaker tickets, 13 sponsor tickets, and 3 media passes. our original budget was based on 230 attendees and 20 speakers. So, our ticket sales were disappointing in that regard.  
**\<sarang>** Well presumably you would not be the one stuck with all this, and be able to focus more on research or MKon content instead  
**\<suraeNoether>** but that was exacerbated since we were paying for flights and hotels for speakers, and the increased size of the speaker list caused increased requisite costs, too  
**\<suraeNoether>** thirdly, and most fatally, i think, was the increased cost in A/V  
**\<sarang>** Having quality recordings was huge  
**\<sarang>** video views were pretty high  
**\<suraeNoether>** our original proposal was 1/3 what we ended up paying (and that doesn't count any of the time or labor or equipment donated by parasew, marcvvs, and sgp)  
**\<suraeNoether>** ^ bingo  
**\<sarang>** And it meant that anyone could watch for free  
**\<suraeNoether>** i think the A/V costs from this year is a good benchmark for future years, I don't think we got screwed on A/V, but our costs were very high in this area because of it  
**\<sarang>** A/V is expensive, hands down  
**\<sarang>** but it seems one of the best returns to the community  
**\<suraeNoether>** so, long story short: the market murdered me, the ticket sales murdered me, and A/V murdered me, but i'm still alive despite thrice being murdered  
**\<sarang>** you have 6 lives left  
**\<suraeNoether>** nah, i was murdered twice already, i'm down to 4  
**\<sarang>** Ignoring all the budgeting, I'd say it was a big success  
**\<suraeNoether>** I agree. final budget will be posted later this week once i've octuply checked everything.  
**\<suraeNoether>** nioc ^ check out our numbers from above. total attendance was like 117 before staff was included  
**\<sarang>** that's not half bad for a first run  
**\<nioc>** so my quick that totaled up 120 was not bad :)  
**\<suraeNoether>** a few brief comments for the four guides i've written: you can do what you like, if you are planning on hosting a Konferenco Wien or a Konferenco Beijing or whatever, do what you like. But make sure all of your funding and structure details are 100% clear in your CCS. Sarang thinks some of my ideas about profit for these events are not fair to the community, so consider the whole set of documents worth  
**\<suraeNoether>** arguing over and debating.  
**\<nioc>** NYC during blockchain week and MCC will get you 3x  
**\<suraeNoether>** nioc yeah, but in terms of \*ticket sales\* we had like 71 or 72 or something like that  
**\<suraeNoether>** nioc yeah but it will 4x or 5x all our expenses  
**\<dEBRUYNE>** Playing devils advocate, but the funds could've been hedged  
**\<dEBRUYNE>** There are plenty of markets that allow short selling of xmr  
**\<sarang>** There could have been more defined payouts  
**\<sarang>** suraeNoether: anything else to discuss?  
**\<sarang>** Or any questions for him?  
**\<suraeNoether>** dEBRUYNE: yeah, I received the funds on 2-5-19 and by that point the damage had been done. that would be handled by the CCS guys  
**\<suraeNoether>** sarang: defined payouts wouldn't have helped  
**\<suraeNoether>** the market crashed basically welllllll before we needed any of the money  
**\<sarang>** I see  
**\<dEBRUYNE>** At what time was the donation completed though?  
**\<dEBRUYNE>** Because at that point the price should've been hedged  
**\<suraeNoether>** dEBRUYNE: my recollection is around xmas, but i could be misrecollecting  
**\<suraeNoether>** luigi1111 may know  
**\<ArticMine>** Yes if the expenses were in USD  
**\<suraeNoether>** this question occurred to me yesterday and i forgot to write it down  
**\<dEBRUYNE>** Price moved from ~50 to ~70 (from christmas to may), so that doesn't seem right  
**\<sarang>** Shall we move on from this topic for now?  
**\<suraeNoether>** dEBRUYNE: i had only gains from the time that i was holding crypto. i just received 591 XMR worth $28,509 at the time, whereas when I posted the request it was for 591 XMR worth $60,100. The question is the gap in time between funding-completed and the time it hit the Konferenco wallet on Feb 2  
**\<nioc>** there were donations till at least Dec 16  
**\<suraeNoether>** i'm fine with waiting for specific dates from luigi or whoever can tell us  
**\<suraeNoether>** and moving on  
**\<suraeNoether>** sarang, how about you tell us about something more research related?  
**\<sarang>** Heh ok  
**\<sarang>** I have a few things  
**\<luigi1111>** I don't have info on completed funding dates  
**\<sarang>** First, I ran a timing/space analysis for the RCT3 sublinear transaction protocol  
**\<luigi1111>** not sure if there's a way to get it. surely can manually somehow  
**\<sarang>** https://github.com/SarangNoether/skunkworks/blob/sublinear/rct3.md  
**\<sarang>** I'm working up some proof-of-concept code for its spend proving system presently (not done)  
**\<sarang>** I also worked up a proof of concept for a two-layer Lelantus prover that sacrifices size and verification time for shorter prove time  
**\<sarang>** Interesting, but probably not relevant to our use case  
**\<luigi1111>** I thought sponsors were going to cover some of the shortfall or something since we knew back then 591 wasn't enough  
**\<sarang>** https://github.com/SarangNoether/skunkworks/blob/lelantus/lelantus/layer.py  
**\<dEBRUYNE>** suraeNoether: I guess we can discuss this later. One more thing I wanted to ask though, the zcash donation was made in may  
**\<dEBRUYNE>** Was that on top of the 28.5k then? Given that you received that earlier  
**\<luigi1111>** in truth, ccs isn't particularly well suited for people or projects that are sensitive to volatility. there may be mitigations of course  
**\<suraeNoether>** nope, they donated directly to the CCS so that was included  
**\<suraeNoether>** luigi1111: the goal was to get corporate sponsorships  
**\<suraeNoether>** luigi1111: we got some  
**\<suraeNoether>** luigi1111: we did not get enough to cover the shortfall  
**\<luigi1111>** I see  
**\<luigi1111>** what is the shortfall?  
**\<suraeNoether>** sarang sorry to interrupt you: good work on lelantus. have you worked out the tradeoff between our current size vs. verf time compared to a lelantus version with a faster prover?  
**\<suraeNoether>** luigi1111: i'll be posting budget later this week  
**\<luigi1111>** ok sounds good  
**\<sarang>** The faster Lelantus prover makes sense for Zcoin, who want >O(10K) ring members  
**\<sarang>** and, to be fair, you can batch away much of the verification loss  
**\<sarang>** for O(100-100K) ring members it's likely not really a problem in practice  
**\<sarang>** but it's still damn clever  
**\<suraeNoether>** i'd be interested in seeing some hard numbers, like the value N such that for >O(N) ring members, the shorter prove time is worthwhile  
**\<sarang>** whoops, O(100-1K)  
**\<sarang>** define "worthwhile"...  
**\<sarang>** all depends on what the max prove time (and the corresponding computational complexity) is that you're willing to accept  
**\<suraeNoether>** or how much verf time/space you are willing to sacrifice  
**\<sarang>** Zcoin has non-public numbers for this (can't share yet)  
**\<suraeNoether>** k  
**\<sarang>** However, it's pretty impressive... like, on the order of 10x improvement for large rings (in proving time)  
**\<sarang>** I don't think the integration into the rest of the Lelantus prover is completed yet, FWIW  
**\<sarang>** there's some info you need to extract from the 1-of-N proof for balance purposes that I haven't worked out  
**\<sarang>** On the RCT3 side, this week I should have working code for that transaction protocol  
**\<sarang>** I'm checking a bunch of their math (might have errors, not sure yet)  
**\<sarang>** and that's about it for me  
**\<sarang>** Any particular questions?  
**\<ArticMine>** On a more mundane level of mixing I estimate we can move from 11 to 13 without touching fees  
**\<sarang>** Based on my CLSAG numbers, you mean?  
**\<sarang>** or something else?  
**\<ArticMine>** No current tech  
**\<sarang>** CLSAG will almost certainly not make it into the fall upgrade  
**\<sarang>** How so?  
**\<suraeNoether>** ArticMine: i would almost rather increase fees than ring size at this point :\\  
**\<ArticMine>** There was a drop in tx size last fork  
**\<suraeNoether>** sarang i have a question: fill in the blank to complete the analogy. (lelantus protocol) : (monero protocol) :: (2-year old mid-range automobile with no damage) : \_\_\_\_\_\_\_\_  
**\<sarang>** While bigger rings are generally better, a marginal increase from 11 to 13 will do little to help analysis that already exists  
**\<sarang>** ...  
**\<suraeNoether>** 2-year old mid-range refrigerator with no stink?  
**\<sarang>** lol  
**\<sarang>** maybe that cleaning car that the Cat in the Hat drives?  
**\<sarang>** Looks cool, pretty functional, not sure what'd happen in practice =p  
**\<suraeNoether>** how about the weird stretchy-squishy car from Willy Wonka  
**\<sarang>** lol  
**\<suraeNoether>** wait, has monero switched with lelantus in your analogy?  
**\<gingeropolous>** bumpdaringsize  
**\<sarang>** erm  
**\<suraeNoether>** bumpdaringsize.gif  
**\<sarang>** We should determine specific reasons why we would increase  
**\<sarang>** e.g. things like chain reaction or accidental dead outputs are exceedingly unlikely now  
**\<gingeropolous>** \#1. 13 > 11  
**\<sarang>** things like EABCD...ZE are presumably more unaffected by such a marginal change  
**\<suraeNoether>** Does anyone have any questions for sarang about his lelantus work recently, other than stupid SAT analogies?  
**\<ArticMine>** FloodXMR is very sensitive to ring size  
**\<sarang>** (or on RCT3 for that matter)  
**\<sarang>** Yes, but we don't have correct numbers on that yet  
**\<sarang>** in terms of cost, that is  
**\<sarang>** It should be quantified before a blind increase, IMO  
**\<suraeNoether>** okay, everyone: i have to get to an appointment  
**\<sarang>** roger  
**\<suraeNoether>** remember, for the hypochondriacs: if the pain is behind and above your stomach, it could be pancreatitis and not a heart attack  
**\<ArticMine>** Ok we wait for CLSAG and then take another look at mixin  
**\<sarang>** I'm not saying we have to wait until spring  
**\<sarang>** only that I'd prefer quantified reasons for an increase to know the benefits  
**\<sarang>** Increasing from 11 to 13 won't stop a wealthy adversary from chain spamming with the current fee structure  
**\<sarang>** knowing the added protection against deanon would be useful though  
**\<sarang>** sgp\_ has a useful little tool for this  
**\<sarang>** I'll grab numbers for that part at least (the flood folks are running new simulations on a private testnet)  
**\<sarang>** OK, does anyone else have work to share?  
**\<sarang>** Or other updates relevant to this channel?  
**\<sarang>** If not, we can leave the floor open to QUESTIONS while we go over ACTION ITEMS (to respect the time)  
**\<sarang>** I'll grab numbers on an 11 -> 13 ring increase, finish up RCT3 proof-of-concept stuff, and continue defcon prep  
**\<sarang>** suraeNoether can update us later when he returns  
**\<sarang>** Any last questions or comments before we adjourn?  
**\<midipoet>** i have read over konferenco talk, and have taken notes of the links...will digest. thanks suraeNoether  
**\<sarang>** OK, we are now adjourned! Thanks to everyone for joining in  
**\<sarang>** Logs will be posted to the github agenda issue shortly  
