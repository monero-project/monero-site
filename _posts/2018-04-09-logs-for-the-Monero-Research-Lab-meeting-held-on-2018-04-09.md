---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-04-09
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<sarang>** Let's start our abbreviated meeting presently  
**\<suraeNoether>** hey everyone  
**\<suraeNoether>** i'm surae  
**\<suraeNoether>** this is sarang  
**\<sarang>** attention all aircraft, research meeting now  
**\<suraeNoether>** we do maths sometimes, and math other times  
**\<keatonofthedrake>** :D  
**\<sarang>** When you travel to Europe, you have to surrender the "s" at immigration  
**\<rehrar>** yay  
**\<sarang>** before leaving  
**\<suraeNoether>** Okay, I've been working on a churn model, as I mentioned before, and the idea is reducing to this: if there is a proportion $p$ of poison outputs and everyone uses ring size $R$ then the probability that the first poison output appears at height H in the transaction tree is easily computable: for P(H=1) = 1-(1-p)^R and for h > 1, we have P(H=h) = (1-p)^(f(h))\*(1-(1-p)^(R^h)) where f(h) = R^(h-1) + R^(h-2) +  
**\<suraeNoether>** ... + R... reduces to f(h) = ((1-R^h)/(1-R)) - 1. So we want to pick a probability alpha describing type I error and we want to churn for some height H so that P(H=1)+...+P(H=h) > 1-alpha  
**\<suraeNoether>** this ensures that at least 100\*(1-alpha)% of the time, some poison output appears before your churned output  
**\<sarang>** Now, does height delay work into this model?  
**\<suraeNoether>** not used at all  
**\<sarang>** In case I want to delay or space my churns  
**\<sarang>** Is this because you assume uniform fraction of poisoned outputs over time?  
**\<suraeNoether>** that will probably help protect against temporal association, but the model of transaction i'm using doesn't take age of ring signatures into account at all  
**\<suraeNoether>** right  
**\<suraeNoether>** but essentially, if you can churn deeply enough so that other poison outputs are more likely to be implicated than the one you are really spending, i suppose that's the best you can really hope for lacking a more rigorous analysis  
**\<scoobybejesus>** not sure i've seen you folks define "poison outputs," though i suspect one could make a pretty approximate guess as to the definition  
**\<sarang>** Outputs controlled by Eve, who can identify them as such  
**\<smooth>** stating it adversarilly is probably more useful than uniform. assume there might be some poison outputs in whatever time period you as the target are concerned with (since you don't know there aren't)  
**\<scoobybejesus>** ty  
**\<suraeNoether>** so, to give an idea, even with a ring size of 5, you can churn 8 or 9 times and an attacker with between 1-in-a-million and 1-in-a-thousand poison outputs and the attacker will see a fake poison output before the real one  
**\<smooth>** seeing fake one before real one say 50% of the time is probably good enough  
**\<suraeNoether>** at least it provides us an actionable suggestion  
**\<sarang>** right  
**\<suraeNoether>** the good news is that churn doesn't appear useless except against extremely powerful attackers  
**\<sarang>** defined as?  
**\<suraeNoether>** high proportion of poison outputs  
**\<sarang>** defined as?  
**\<smooth>** all except yours :)  
**\<sarang>** lol  
**\<smooth>** even works against zcash  
**\<smooth>** those powerful attackers are a real pita  
**\<suraeNoether>** if an attacker has poisoned 1-in-a-thousand outputs in a large subset of the blockchain, i would call that attacker powerful  
**\<smooth>** really? that's only like 2 per day right?  
**\<smooth>** well now at least, with low usage  
**\<suraeNoether>** maybe the word powerful is misleading people. let's say "determined."  
**\<sgp\_[m]>** Yeah, 1 in 1000 is relatively easy to get...  
**\<suraeNoether>** yeah, but 75% isn't hard to get either, for short periods of time  
**\<smooth>** 2 per day could be more like 'what the hell, ill give it a try and see what i figure out'  
**\<sarang>** I'll be really interested to read the writeup with the deets!  
**\<sarang>** Other comments, in the interest of staying abbreviated today?  
**\<suraeNoether>** write-up by the end of the week  
**\<sarang>** sexcellent  
**\<suraeNoether>** oh, also, the first board meeting of MAGIC is being held at the end of this month, April 27 in denver. the board members (minus one) are all going to be there: me, sarang, my wife, rehrar, and sgp. if anyone happens to be in the area, feel free to lmk and we can all go out to lunch or whatever  
**\<sarang>** looking forward to it  
**\<koe>** btw, I finished rewriting that monero report. would anyone mind reviewing it? https://github.com/UkoeHB/Monero-RCT-report  
**\<rehrar>** creepy  
**\<suraeNoether>** koe great, i will try to read through it this week  
**\<koe>** cool thanks suraeNoether :)  
**\<rehrar>** multisig paper?  
**\<sarang>** koe: many changes?  
**\<koe>** yes  
**\<sarang>** OK, will run a diff to see  
**\<rehrar>** (status, I mean)  
**\<suraeNoether>** rehrar: making edits and waiting on comments from two folks. "in progress"  
**\<rehrar>** kthx  
**\<koe>** there were some theoretical errors, i reworked the notation scheme, added subaddresses and a summary chapter, and generally revamped everything to communicate better  
**\<sarang>** nice!  
**\<koe>** er summary section not chapter  
**\<sarang>** Funding is open for IEEE workshop later this month: https://forum.getmonero.org/8/funding-required/90165/noether-brothers-ieee-workshop  
**\<rehrar>** sarang were you planning on funding for Defcon?  
**\<koe>** and about 30-40 footnotes trying to explain eveyrthing to laymen  
**\<sarang>** rehrar: I wasn't sure what the overall funding plan for DEF CON was  
**\<sarang>** it seemed a bit up-in-the-air  
**\<rehrar>** should be discussed sooner rather than later  
**\<sarang>** agreed, but in the context of everyone  
**\<rehrar>** ye  
**\<sarang>** Plan is (ideally) for me to give a talk at the village on our crypto/math  
**\<sarang>** and touch on new developments and ideas  
**\<rehrar>** suraeNoether: coming?  
**\<sgp\_[m]>** koe this looks great  
**\<koe>** also, I should have a plan ready for the FMEA meeting that I mentioned last week, within a day or two (fingers crossed)  
**\<sarang>** cool  
**\<sarang>** koe: I'm curious, what's your background?  
**\<koe>** thanks sgp\_[m] :) if you have any comments let me know, I want it to be as perfect as possible  
**\<suraeNoether>** rehrar yeah, i'm opening a window to get tickets so i don't forget  
**\<rehrar>** noice!  
**\<koe>** mechanical engineering  
**\<sarang>** a solid discipline  
**\<sarang>** Any other items to discuss? We touched on churn, koe's updates to the kurtmagnus paper  
**\<rehrar>** wathoo been doing?  
**\<rehrar>** \*watchoo  
**\<sarang>** a lot of reading on zero-knowledge schemes and arithmetic circuits to familiarize myself with recent progress  
**\<rehrar>** sarang, I mean :P  
**\<rehrar>** thank you, no more questions, your honor  
**\<sarang>** getting back into some tests for multiexp optimizations  
**\<sarang>** in prep for the BP finalization  
**\<sarang>** it would be nice to have those operations optimized for the next network upgrade when we deploy BPs  
**\<sarang>** suraeNoether: if you want another set of eyes on churn (or other help with it) let me know  
**\<nioc>** more than nice  
**\<sarang>** nioc: but it's worth noting that those aren't consensus related  
**\<nioc>** yes  
**\<sarang>** and even with the two optimizations I worked with mooo on, we're much faster than we used to be  
**\<nioc>** still most people only upgrade wen they have to  :)  
**\<sarang>** we now use either bos-coster or straus  
**\<sarang>** these operations are also really only relevant if you bring a new node up and need to process the whole chain going forward  
**\<sarang>** the nice part is they're general and not BP specific  
**\<moneromooo>** Aggregated verification is relevant for keeping up with new blocks too.  
**\<sarang>** moneromooo: true, but less of a bottleneck  
**\<sarang>** also thanks to moneromooo for doing the codebase integrations for the optimizations so far  
**\<suraeNoether>** sarang for sure i will real soon  
**\<suraeNoether>** so this is really interesting  
**\<suraeNoether>** so, the PMF for these distributions is highly unimodal and very ... spikey. low variance, heavy tails. it's like there's a step function at a critical depth in a tree. before the step, poison outputs are rare, and after the step, poison outputs are super common. very very helpful property  
**\<sarang>** absolutely  
**\<sarang>** gradual changes make it difficult to establish cutoffs  
**\<suraeNoether>** ok so here's some sample numbers  
**\<sarang>** yes plz  
**\<suraeNoether>** ring size 15, attacker proportion 10%, it is all but certain a poison output appears either in the first ring signature or in the layer of second ring signatures; in this scenario, churning twice or three times is all that's necessary for the attacker to see some decoy poison output first before the true spender  
**\<sarang>** UkoeHB: usual terminology is "cyclic group", not "cyclical"  
**\<gingeropolous>** what fixed ringsize do u think we can pull off once BP is in?  
**\<suraeNoether>** ring size 5 and poison proportion 0.0001, it is all but certain an attacker will see a poison output before layer 6, so churning 6 or 7 times is all that's necessary  
**\<sarang>** Do you mean, in order to maintain the same tx size as right now?  
**\<gingeropolous>** i mean, will be optimal. optimal verification speed, size, privacy  
**\<sarang>** Well, there's a subgroup of users for whom "optimal" means "tiny in size"  
**\<suraeNoether>** right  
**\<suraeNoether>** so, gingeropolous   
**\<UkoeHB>** are you referring to a level of churn that puts a churner at max 'anonymity set'? ie the whole pool of txo  
**\<gingeropolous>** i mean, cause we're kicking the tires on a fixed ringsize right?  
**\<suraeNoether>** if blockstream mathemagics their way into BP sublinear ring signatures like the RTRS sigs, or some sort of hash tree or something ... then we can get pretty big rings for the same current size, verification speed, etc  
**\<suraeNoether>** UkoeHB: the maximum anonymity set is trivial: keep churning forever and don't stop  
**\<suraeNoether>** who knows if that'll happen any time soon, though  
**\<gingeropolous>** ok, so in the absence of mathemagic , is there a proposal for a fixed ringsize for v8 fork?  
**\<suraeNoether>** there are more clever statistical tricks that could be used to link monero transactions, though, this is simply an eyeball metric  
**\<UkoeHB>** maybe: 'makes a churner indistinguishable from most unrelated people'?  
**\<suraeNoether>** gingeropolous: to fix ring size? i always advocate it. a formal proposal? not really, not yet  
**\<suraeNoether>** UkoeHB: well, i don't necessarily think that's a good description either. i said what I meant: if you churn this amount, the attacker is more likely to see a decoy poison output appear in the transaction history before the true spender. whether that translates into indistinguishability from an innocent spender is a very different animal...  
**\<suraeNoether>** and not only that, the statistical test i came up with the other day didn't take into account \*how many\* of some outputs even had poison outputs in their history.. this influences the test quite a bit  
**\<suraeNoether>** but coming up with a really powerful statistical test would require strong assumptions on properties of transaction history trees, and i'm not sure that any assumptions are time-invariant (economic conditions influence a lot about how money moves)  
**\<UkoeHB>** hmm ok, so preliminary work before discussing implications  
**\<suraeNoether>** so "for now" this is "good enough" and these "air quotes" are somewhere between irony and not really believing what i say. :P i know of a handful of folks who are working on de-anonymization techniques for anonymity sets up to sizes like 50-100, so whatever sort of unlinkability we are buying here is strongly provisional on the analytic capability of the attacker  
**\<suraeNoether>** yeah  
