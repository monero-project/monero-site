---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-02-26
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>** Okay, well let's get this research meeting started, I guess.   
**\<suraeNoether>** Greetings everyone who is here. :P I'll make this easy and quick: I'm working on multisig furiously, working my way into migraines so I can get it done, so i haven't thought much about much else except churning and the EABE (or more precisely the EAE) attack. I thought I would be done this morning, but I was put out of commission yesterday afternoon. so maybe this afternoon.   
**\<suraeNoether>** sarang: what have you spent the last week on?  
**\<suraeNoether>** diego[m], sgp\_[m], chachasmooth\_, silur, I believe have all been doing some work over the past few weeks but I could be misrecalling names  
**\<suraeNoether>** mercury^: is your project an attempt at estimating the age distribution of outputs the moment they are spent?  
**\<mercury^>** suraeNoether: yes.  
**\<suraeNoether>** cool, we should talk about it after this meeting  
**\<mercury^>** I have not done much work so far.  I just read the monerolink paper, then tried to think a little bit about what the actual distribution should be.  
**\<suraeNoether>** so, the monerolink paper... the parts that aren't obliterated by obscured amounts in RCT...   
**\<suraeNoether>** there is a slightly incorrect interpretation of our system, which is: the authors, Miller et al, they claimed that the youngest output in a ring is most likely to be the true spender. in fact, it's that \*the first time an output is put into a  ring\* is most likely occurrence of the true spending  
**\<suraeNoether>** which is subtly different  
**\<sarang>** I'm making more progress on SoWs  
**\<sarang>** And prepped a privacy talk  
**\<mercury^>** suraeNoether: well, both of those could be true. Is their claim false? (Is now a good time to talk about it, or should be wait until the research meeting is over?)  
**\<suraeNoether>** eh, this research meeting is a dud. their claim is also true, but leads to an estimate with much higher variance. one benefit of their approach is that it really should never result in a \*tie\* between two outputs unless they occurred in the same block. one criticism of their approach is that there is not a super clear way to estimate false positive and false negative rates  
**\<suraeNoether>** of course the criticism also holds true for my statement  
**\<suraeNoether>** testing the sensitivity and specificity of a de-anon technique is... well, nontrivial at least  
**\<gingeropolous>** its unfortunate they didn't create a fake network where they could have had ground truth  
**\<scoobybejesus>** their block explorer uses their own index instead of pub keys, so it's annoying to cross-reference  
**\<hyc>** fake network based on what? ideally you model the real network but the inputs to the real network are all unknowns  
**\<suraeNoether>** gingeropolous: the thought of the details of that gives me a headache :P  
**\<gingeropolous>** i dunno. just create a network with n "users" making transactions randomly  
**\<mercury^>** gingeropolous: but they have to act like the users of Monero.  
**\<gingeropolous>** yeah, ideally. but a fake network of random operators would be better than their current analysis, which IMO still boils down to "maybe"  
**\<suraeNoether>** mercury^: the thing about my heuristic of "find the first ring signature referencing output X, that's the true spender of output X" is true with high probability except in a scenario where an output was sitting around long enough to be included in several ring signatures, or unless several ring signatures already reference it. Hence, I think rather than concentrating on distribution of ages, I think  
**\<suraeNoether>** we should concentrate on including as many outputs that have never been used before as possible, or some sort of joint technique that takes both "number of referential ring signatures" and "block height" into account  
**\<suraeNoether>** gingeropolous: they can test their modeling technique against a null hypothesis like exponential or weibull inter-spending time. or even whole families of distributions, and see how well it does.  
**\<mercury^>** gingeropolous: Assuming that the probability of a transaction being unmasked by their method depends only on ring size, their data set would be reasonable I think.  
**\<suraeNoether>** if it is robust against many choices of distribution, then they can be rather confident in their approach in the "unknown distro" case  
**\<suraeNoether>** actually that's a hell of a good idea  
**\<mercury^>** suraeNoether: then the pool of never-unconsumed outputs is contentet and might get too small?  
**\<mercury^>** never-consumed\*  
**\<suraeNoether>** ahhhh shit i'm going to write that as a paper: rather than test the sensitivity vs. specificity directly, do it monte-carlo style. Pick a random distribution of inter-spending times from a parameterized family of distributions. Simulate an economy with monero or zcash. Try to unmask. Repeat 2^N times for each parameter, and with M parameters, you end up exploring a parameter space of size 2^(NM).  
**\<suraeNoether>** estimate false pos and false neg rate of your de-anon technique for each point in this big parameter space. Estimate the "sensitivity" of these rates to parameter perturbation. Try to find a de-anon technique that is most insensitive to choice of distribution.  
**\<suraeNoether>** suraeNoether: yeah, just weight it so you can still pick 2x or 3x outputs, just less likely to do so somehow  
**\<suraeNoether>** oh man so that'll be the paper I write after multisig is done  
**\<mercury^>** suraeNoether: I think with your approach the most likely real output consumed will just be the one that was spent the most often.  
**\<suraeNoether>** no, it's the one that has been spent least often  
**\<suraeNoether>** if an output has not yet been referenced, say X  
**\<suraeNoether>** and you make a new \*random\* transaction  
**\<suraeNoether>** the probability that X is included in that signature is, say, 1/B where B is the blockchain size  
**\<suraeNoether>** actually that probability is the same even if the output has been referenced  
**\<suraeNoether>** however, if X occurs at block height h  
**\<suraeNoether>** the only transactions that could possibly reference X occur at height h+1 or bigger  
**\<suraeNoether>** so if the blockchain is height H, and X is at height h, then at most h/H transactions on the blockchain (roughly) could possibly reference X  
**\<suraeNoether>** each of these is like rolling a B-sided die and looking for a natural 1, and we do it h/H times  
**\<suraeNoether>** that's a baseline "random" appearance of X that occurs completely innocently  
**\<mercury^>** Do you mean H−h instead of h/H? (I am new to all this…)  
**\<suraeNoether>** actually \*i do\* good catch  
**\<suraeNoether>** otoh, if we see some X at height h, and it is referenced at block h+10, and H=like a really large number compared to 10, and B=like a really large number compared to 1, the probability of this occurring \*completely innocently and at random\* is super duper small  
**\<suraeNoether>** in other words: the first time an output is referenced is the most likely time it was truly referenced  
**\<gingeropolous>** i wonder if fake out selection should be biased to those outputs that don't have any reference yet  
**\<mercury^>** suraeNoether: I can believe that this is currently true; what I said is that I cannot believe that it will stay true if one were to implement your proposed method of choosing fake outputs to consume by preferring those that have rarely been consumed.  
**\<gingeropolous>** hah  
**\<gingeropolous>** ok ill shuddup  
**\<sarang>** So  
**\<ArticMine>** Is there a temporal aspect to the idea that the first time an output is referenced it is the real output  
**\<sarang>** To test?  
**\<ArticMine>** For example is it different for recent and old outputs  
**\<mercury^>** ArticMine: I believe so.  
**\<suraeNoether>** ArticMine: yes, my argument is based on the idea that the probability an output has been spent is monotonically decreasing over time  
**\<mercury^>** ArticMine: an old output that is really being spent is more likely to have been spent before.  
**\<suraeNoether>** er.. has \*not\* been spent  
**\<ArticMine>** That is also my thought  
**\<suraeNoether>** mercury^: oh yeah i agree, i was walking you through the "derivation" of my argument.   
**\<ArticMine>** Since this is velocity of money dependent  
**\<suraeNoether>** ah, so that's the thing: miller et al made it velocity dependent by saying "youngest output in the ring."  
**\<suraeNoether>** you can make it velocity independent by saying "first time an output is referenced"  
**\<mercury^>** suraeNoether: you assume that outputs are selected uniformly among all that are available.  As far as I know that is not even currently true?  But the argument probably still holds with the current selection method.  
**\<sarang>** I believe that's the wallet code?  
**\<ArticMine>** I was thinking in changes in the velocity of money for Monero over time  
**\<suraeNoether>** mercury^: actually since we use two triangular distributions... i would have to think about that mercury^   
**\<ArticMine>** It was different in say 2014 that today and will also be different in the future  
**\<suraeNoether>** ArticMine: yeah, this is another reason distributional arguments for wallets squick me out, other than allowing an attacker insight into chain reaction saturation attacks (for lack of a better term)  
**\<ArticMine>** My thought was to have multiple ring sets that are close in time to the real output and also randomly chose ring leader outputs  
**\<mercury^>** ArticMine: the properties of the fake outputs should not depend on properties of the real output.  
**\<mercury^>** They should be chosen independently.  
**\<ArticMine>** So we start with ah output pick say 2 other outputs randomly and then build rings around the real output and the two fake ones  
**\<suraeNoether>** you know, it's funny, i usually laugh at people like IOTA for throwing around terms like neural nets etc, but... this is a great situation for a genetic algorithm. parameterize a wallet selection method as a genetic code, and parameterize an output-reveal-oracle method as another genetic code, then have the two species compete. One tries to make ring signatures that are anonymous, the other tries to  
**\<suraeNoether>** reveal ring signatures, and neither of them breed or eat until they win  
**\<ArticMine>** With the rings close in time to the real output and each of the fake one and the rings all the same size  
**\<suraeNoether>** but that'd be a senior math-bio-finance major's capstone project  
**\<suraeNoether>** or maybe a masters thesis  
**\<suraeNoether>** for an open minded advisor  
**\<gingeropolous>** just start a college already  
**\<hyc>** for bonus points, toss in a spectre/meltdown attacker trying to steal the wallet secrets  
**\<hyc>** this is just a very fancy version of CoreWars...  
**\<mercury^>** Weren't CoreWars programs written by hand?  
**\<hyc>** yes. redcode.  
**\<hyc>** but it would be easy to automate generation of CoreWars programs.  
**\<hyc>** pretty sure it was done, multiple times  
**\<hyc>** but it points to an interesting approach - we should have multiple distribution algorithms, and randomly select when creating each transaction  
**\<hyc>** otherwise an attacker will always know "they're using triangular/whatever" ...  
**\<mercury^>** hyc: I think one could guess the selection algorithm by inspecting the transaction.  
**\<gingeropolous>** is there a theoretical ringsize where distribution of fakeout selection becomes moot?  
**\<gingeropolous>** prolly depends on size of blockchain (i.e., number of available outputs)  
**\<mercury^>** gingeropolous: I would say that it affects the security that the ring size provides multiplicatively.  
