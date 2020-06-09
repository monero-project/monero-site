---
layout: post
title: Logs for the MRL Meeting Held on 2020-04-08
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** OK, time for the weekly research meeting  
**\<sarang\>** Let's get started  
**\<sarang\>** GREETINGS  
**\<sarang\>** hi  
**\<ArticMine\>** hi  
**\<atoc\>** hi  
**\<TheCharlatan\>** ahoy  
**\<sarang\>** On to ROUNDTABLE, I suppose  
**\<sarang\>** I've been working on papers for PoPETs submission, which has been a blast  
**\<binaryFate\>** hello!  
**\<sarang\>** As well as some review for a paper on hierarchical one-of-many proofs  
**\<sarang\>** Finally, plenty of code relating to Triptych  
**\<sarang\>** Not too much exciting stuff to report overall  
**\<sarang\>** Any particular questions?  
**\<atoc\>** hierarchical one-of-many-proofs sounds interesting. can you link the paper?  
**\<sarang\>** It's not on the IACR yet (and I am not the author)  
**\<sarang\>** Otherwise, anyone else who wishes to share research topics is welcome to do so  
**\<binaryFate\>** what are hierarchical one-of-many-proofs?  
**\<sarang\>** An extension of the Groth proofs used in Triptych and Lelantus that trade size for prover complexity  
**\<sarang\>** They use a clever layering technique  
**\<binaryFate\>** smaller size for increased prover complexity?  
**\<sarang\>** Other way around :)  
**\<binaryFate\>** ok :)  
**\<sarang\>** The author thought there could be verification savings in certain cases, but I don't think that's the case if you do batching in the usual way  
**\<sarang\>** Does anyone else have research topics they'd like to share or discuss here?  
**\<ArticMine\>** I can give an update on the scaling and fees issue #70  
**\<sarang\>** Sure!  
**\<ArticMine\>** I have a solution for the scaling side and minimum relay fee. I am still finalizing the fee ratios  
**\<ArticMine\>** Basically we can use the long term medium to deal with this  
**\<sarang\>** Can you summarize?  
**\<ArticMine\>** Sure  
**\<ArticMine\>** 1) Put a cap on the rate of fall of the long term medium so that it falls at the same rate it rises  
**\<ArticMine\>** 2) Make the penalty free zone dynamic as the greater of 300000 bytes and 25% of the log term medium  
**\<sarang\>** Will that 300K value change with CLSAG?  
**\<ArticMine\>** No the reference transaction size will to 2100  
**\<sarang\>** yes  
**\<sarang\>** But there are no plans to change the fixed-value penalty-free size?  
**\<ArticMine\>** The minimum relay fee will  very close to the old normal fee  
**\<ArticMine\>** So for the current minimum penalty one the minimum fee will actually go up ~2.5x  
**\<binaryFate\>** ArticMine what issue/risk is this solution tackling?  
**\<ArticMine\>** A sudden drop in use followed by a recovery  
**\<ArticMine\>** In many ways similar to COVID-19  
**\<binaryFate\>** What would be the shortcomings of the current implementation in that situation?  
**\<ArticMine\>** https://github.com/monero-project/research-lab/issues/70  
**\<ArticMine\>** This create the scenario  
**\<binaryFate\>** Ah, couldn't find issue. Thank you  
**\<ArticMine\>** The basic problem is a sharp rise in fee that can take months or year to come back to normal  
**\<ArticMine\>** Also a very sudden drop in the long term medium that also could take months or years to recover  
**\<ArticMine\>** Issue #70 does not mention COVID-19 but COVID-19 is a very good scenario  
**\<sarang\>** Will you have specific code or pseudocode soon to allow for simulations prior to any recommended deployment?  
**\<ArticMine\>** Also there are scenarios where COVID-19 cold lead to a significant demand on the Monero network in terms of transactions  
**\<ArticMine\>** Yes  
**\<ArticMine\>** I have all the formulas now except for the fee ratios  
**\<sarang\>** OK, thanks  
**\<ArticMine\>** Still working on that  
**\<sarang\>** I assume you'll post them to the issue you linked?  
**\<ArticMine\>** Yes that is where I will post this  
**\<sarang\>** Got it  
**\<sarang\>** Anything else of note that folks wish to discuss?  
**\<sarang\>** I know UkoeHB\_ recently posted his new version of Zero to Monero  
**\<sarang\>** not sure if he's around right now  
**\<ArticMine\>** Yes that is excellent  
**\<sarang\>** but that's on the getmonero library page, along with a link to the TeX source repo  
**\<sarang\>** and there was also a suggestion from UkoeHB\_ for updating how MLSAG secret data is wiped, which was a great catch (PR now available)  
**\<sarang\>** Anyone else?  
**\<sarang\>** Otherwise, we can move on to ACTION ITEMS for the week  
**\<sarang\>** I will be continuing work on a C++ implementation of Triptych for timing efficiency tests  
**\<sarang\>** as well as some new material for the multi-signer Triptych variant's security model, prior to the PoPETs submission deadline  
**\<Isthmus\>** Oops, just got back. Nice work Artic!  
**\<sarang\>** Isthmus: do you have any research or topics you'd like the group to discuss?  
**\<Isthmus\>** Ah, I've been neck deep in Zcash all week.  
**\<Isthmus\>** https://twitter.com/Mitchellpkt0/status/1245769462172745728  
**\<monerobux\>** [ Mitchell P. Krawiec-Thayer on Twitter: "Several unique phenomena in the #Zcash transaction lock\_time field. Most make sense: 0, block heights, unix timestamps, delayed broadcast. Still trying to under ] - twitter.com  
**\<Isthmus\>** We did find that funny transaction over in NRL  
**\<Isthmus\>** Probably more of a novelty than anything else  
**\<Isthmus\>** Lemme grab the link  
**\<sarang\>** Anything relating to the Zcash lock times that's been observed in the Monero network too?  
**\<Isthmus\>** https://gist.github.com/noncesense-research-lab/a90b8bc5f57ffa9fff1a22d1323e5c2c  
**\<sarang\>** Or any lessons to learn from the Zcash work?  
**\<Isthmus\>** Monero's lock times look very similar  
**\<Isthmus\>** Actually there's also 4 bands  
**\<Isthmus\>** Like this:  
**\<Isthmus\>** 0  
**\<Isthmus\>** {1,3,8,10,12}  
**\<Isthmus\>** {block heights ~ 1xxxxxx}  
**\<Isthmus\>** and then UTC timestamps  
**\<Isthmus\>** It's all over the place, and I don't think any of it is enforced, so the lock\_time field is really just an arbitrary memo xD  
**\<sarang\>** In Zcash too?  
**\<TheCharlatan\>** Did you analyze the distribution of the UTC timestamps as well?  
**\<Isthmus\>** Lemme try to find that notebook  
**\<Isthmus\>** Shoot, I don't have it on this computer  
**\<sarang\>** No worries  
**\<sarang\>** Any other action items for the week?  
**\<TheCharlatan\>** So what's up with duplicate subaddresses?  
**\<sarang\>** Isthmus: were those the only two such examples?  
**\<sarang\>** You suggested "novelty", heh  
**\<Isthmus\>** No, there were several, But all very similar, that one is representative  
**\<sarang\>** hmm  
**\<sarang\>** Along those lines, it was suggested (last week, IIRC) to move some of the more standardized tx fields out of extra  
**\<sarang\>** Which wouldn't eliminate strange behavior, of course  
**\<sarang\>** but could help with distinguishing factors like ordering etc.  
**\<sarang\>** Any further thoughts on that?  
**\<Isthmus\>** I'm working on it a bit, but need to move ideas from my head into diagrams. Will share here in a week or two.  
**\<Isthmus\>** Might have a new approach, but tbd  
**\<sarang\>** New approach to what exactly?  
**\<sarang\>** Transaction structure?  
**\<Isthmus\>** Nah, mental models that more accurately describe information leaks  
**\<Isthmus\>** But it doesn't all fit together yet.  
**\<Isthmus\>** My action item is making it into something comprehensible by next week xD  
**\<sarang\>** ah ok  
**\<sarang\>** Neat!  
**\<sarang\>** We're coming up on the end of the hour  
**\<sarang\>** Any last questions, topics, action items, etc.?  
**\<binaryFate\>** Just curious what's your perception of relevant research over the next 6 months. Everything staled? Business almost as usual?  
**\<binaryFate\>** Conferences and events are mostly canceled or moved to remote?  
**\<sarang\>** Oh you mean in the broader research community?  
**\<sarang\>** Seems that some conferences planned for later in the year are playing it by ear for now  
**\<binaryFate\>** Yeah, anything relevant to MRL and Monero, how do you see things going?  
**\<sarang\>** The cancellation of the Konferenco was unfortunate, but necessary  
**\<sarang\>** Otherwise, calls for papers seem to be mostly continuing as normal, which is great to see  
**\<binaryFate\>** ok good to know thank you  
**\<sarang\>** Perhaps bored academics stuck at home will be more eager to read and review new research too  
**\<binaryFate\>** and go straight for journals :)  
**\<Isthmus\>** Oh interesting question @binaryFate  
**\<Isthmus\>** That reminds me, when do we want to research quantum-resistant PoW and/or quantum-resistant cryptography?  
**\<Isthmus\>** Note that pqPoW isn't super important in the short term  
**\<binaryFate\>** "before it's too late"  
**\<Isthmus\>** However it is unfortunate that the Monero transaction I make tomorrow will most likely be decrypted by a quantum computer during my life time.  
**\<sarang\>** I know that suraeNoether had taken a particular interest recently in post-quantum signature constructions, but I don't know of any relevant efficient results at this point  
**\<Isthmus\>** It might be nice to have somebody put together a survey of (1) Exactly which pieces of Monero will be broken by quantum computers (2) Potentially Monero-compatible solutions  
**\<sarang\>** The reliance on discrete log hardness is the kicker  
**\<Isthmus\>** Yep, it's gonna be tricky.  
**\<Isthmus\>** But, I believe we can do it! If not, Monero has a very limited shelf-life :- P  
**\<atoc\>** I feel like the bipartite graph matching project that suraeNoether is verifying will be one of the most vulnerable  
**\<sarang\>** Graph matching is already parallelizable without a quantum computer  
**\<sarang\>** It's just a very large search space in general  
**\<sarang\>** On that happy note, let's go ahead and adjourn!  
**\<sarang\>** Thanks to everyone for participating  
**\<sarang\>** Logs will be posted shortly to the agenda GitHub issue  
