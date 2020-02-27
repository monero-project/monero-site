---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-09-17
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>** welcome to the #monero-research-lab meeting for 17 September 2018  
**\<sarang>** Hullo  
**\<silur>** hi  
**\<suraeNoether>** we didn't meet last week because Sarang and I were meeting in person for some productivity turned up to 11, enabled partly by endogenic  
**\<sarang>** When snarks  
**\<sarang>** Or at least snark  
**\<suraeNoether>** today's agenda is only 1) greetings is 2) a brief update on what folks have been working on and what they see coming up next  
**\<suraeNoether>** we got 1) out of the way so efficiently, i'm just blown away, look at you guys, you are rock stars  
**\<dog\\>** lol  
**\<sarang>** Shine on suraeNoether  
**\<silur>** ^  
**\<suraeNoether>** sarang has recently been doing some digging into view key solutions for additional functionality like balance-proving or proofs-of-reserve; is there anything you want to bring up publicly about those for now sarang?  
**\<suraeNoether>** since you have like 3minutes  
**\<sarang>** Just that the nature of our txn model means balance proofs open up knapsack style problems, are not efficient, and therefore I think not something of great priority  
**\<suraeNoether>** yeah, and we can elaborate on that for folks who are interested as the week goes on  
**\<sarang>** Sure  
**\<suraeNoether>** or just later today :D  
**\<suraeNoether>** earlier this week, I discussed some stuff regarding finding provably spent subsets of output keys  
**\<sarang>** Oh and they're likely always going to be interactive, which is a bad ux  
**\<suraeNoether>** sarang and i worked some of this out in person  
**\<sarang>** Aye  
**\<suraeNoether>** essentially the take-away is this:   
**\<suraeNoether>** let's say some entity like the Monero Project wants to keep a blackball list of provably spent outputs  
**\<suraeNoether>** to avoid mixing with future ring signatures  
**\<suraeNoether>** let's say a user doesn't trust the Monero Project  
**\<suraeNoether>** this user wants to verify all the computations used in computing that blackball list, to verify that the list is  a complete list of all provably spent outputs  
**\<suraeNoether>** the user loses trust in the Monero project if any provably spent set is found that is not on the list, or if any set on the list is not actually provably spent  
**\<suraeNoether>** how long does the user need to take to verify a small section of the list? let's say only for transactions created in a single day?  
**\<gingeropolous>** tree fitty  
**\<suraeNoether>** well, the answer to that is in the binomial coefficient: to completely verify a day's worth of transactions (between 10^3 and 10^4 presently), with a ring size of r=7, requires presently at least 1000-choose-7 checks. this is... around 2e17 things to check. even in constant time, that takes a loooong time to check  
**\<suraeNoether>** it's maybe doable, but to verify even a month's of transactions is like 4e27, and there's a certain point where verifiers can no longer check the list for completeness  
**\<binaryFate>** I disagree the user loses trust if a provably spent set is not on the list (assuming he uses his own method, not the public sources for determining blackball list). The opposite would be more devastating.  
**\<sarang>** I agree  
**\<sarang>** We just want the user to trust that nobody is being censored  
**\<sarang>** And verifying the list will be easy  
**\<suraeNoether>** binaryFate: that's fair, what i mean is if the Monero Project is acting like a curating party for this blackball list, they are acting as a trusted third party, so there is a risk to the user if that third party is acting dishonestly  
**\<sarang>** Each item can also have its rings listed  
**\<sarang>** So the user checks her own copy of the chain  
**\<binaryFate>** I think it's fine as long as it's advertise as a "best effort" and not claiming to be exhaustive.  
**\<suraeNoether>** right, checking small pieces of this list for provable spent-ness is easy: verifying that the list is \*complete\* can be made "essentially impossible" by picking larger rings; and using this sort of heuristic, we (sarang and I) determined anything above ring size 45-ish is wasteful in this regard  
**\<sarang>** You're all in luck. My plane is delayed  
**\<gingeropolous>** is there a way to distribute the computation BOINC style? decentralize all the things and all  
**\<sarang>** The initial computation  
**\<sarang>** Yes  
**\<binaryFate>** I would be way more comfortable to give up completely on the idea to claim we're exhaustive.  
**\<sarang>** Then everyone can check their peers work  
**\<suraeNoether>** but the key take-away here is that checking our blackball list for ring sizes beyond 3 is impractical for our project. we kicked the idea around of a sidechain that rewards finding provably spent sets on the main chain and proving their spent-ness on the side-chain to earn a PoW reward :D  
**\<binaryFate>** There might be more tricks we did not realize yet.  
**\<sarang>** We can do a small ring complete subset analysis once  
**\<sarang>** And hardcode it  
**\<suraeNoether>** yep  
**\<sarang>** Optional user verification  
**\<binaryFate>** Better to go with "best effort given computational ressources used and state of our understanding; anyone welcome to improve it"  
**\<sarang>** Yes  
**\<suraeNoether>** binaryFate: for sure, for sure  
**\<sarang>** We will have the complete list for those small rings  
**\<gingeropolous>** also seems reasonable given our constant releases and forks and checkpoints  
**\<sarang>** We don't need to run it further  
**\<sarang>** But I'm writing up a quick thing on it  
**\<suraeNoether>** right, point is now we have a reasonable expectation of when to stop increasing our curation of the blackball list: ring size 4 is pretty much impractical already, ring size 5 is going to be... a... loooong.... wait...  
**\<binaryFate>** that's totally ok  
**\<suraeNoether>** on other fronts, I've been looking into zk-snarks and starks as a sidechain on monero, with no transparent pool (the "transparent" pool would be monero's base layer, and this starky side-chain would be the optional "shielded" pool on top of it). i'm looking into trust-free accumulators; i think there's actually a "whole new protocol" sort of thing going on using certain accumulator constructions (see   
**\<suraeNoether>** https://link.springer.com/chapter/10.1007/978-3-642-31284-7\_14 for example)  
**\<IsthmusCrypto>** Can these calculations be parallelized/cluster-ified?  
**\<IsthmusCrypto>** (the blackball)  
**\<suraeNoether>** yes they can  
**\<gingeropolous>** im curious - is this calculation / processing done on a given state? Or is it done while building the blockchain? i.e., you could imagine a Sync 2.0 where the monero blockchain takes even LONGER because while your synchronizing, your own computer is curating its own blackball  
**\<suraeNoether>** very parallelizable  
**\<suraeNoether>** but huuuuge search space  
**\<sarang>** Worth noting that verification is fast for the user  
**\<sarang>** gingeropolous: I don't think we'd need to do a live version during sync  
**\<sarang>** Damn. Planes radar altimeter is busted :(  
**\<sarang>** No bueno  
**\<suraeNoether>** gingeropolous: there are ways to make it faster to blackball in a rolling computation like that, but even for a single day's worth of blocks per batch, you end up having a huge space to search (which is why i selected a day above)  
**\<gingeropolous>** and if the blacksync indeed does work, you could just prune them from the blockchain and the network eventually reaches a blackballed consensus because those outputs just don't exist... hrmmmm  
**\<gingeropolous>** but it doesn't matter because once we're at ringsize 21 we can all go on vacation  
**\<suraeNoether>** yeah, and syncing from scratch doesn't really solve the problem, because even short periods of time end up with huge search spaces  
**\<suraeNoether>** if i had a single transaction to the blockchain with a single output, i need to check every known subset to see which share ring members with the new transaction  
**\<IsthmusCrypto>** >\_\<  
**\<sarang>** But that also means an attacker would have to do that too  
**\<suraeNoether>** yes, precisely  
**\<sarang>** So it becomes nbd  
**\<sarang>** Under a certain threat set  
**\<binaryFate>** If ultimately we're facing an NP-complete/NP-hard problem, we could quantify it and demonstrate no attacker can go beyond rings N, no more than we can.  
**\<suraeNoether>** for complete lists, that is correct; a ring size of, say, 45-ish gets us close to "you have to brute force more things than particles in the universe" territory  
**\<sarang>** Yeah that's the reasonable approach idea  
**\<suraeNoether>** but you still have heuristic linkability; all this is merely to discuss proven spent-ness  
**\<binaryFate>** This is all theoretical fun anyway, in practice it's assumed all this has no bearings on post-ringct tx anyway  
**\<sarang>** Given high ring sizes yes  
**\<binaryFate>** suraeNoether Monero always has heuristic linkability anyway... we're only very good at plausible deniablity  
**\<suraeNoether>** yeah, the likelihood this happens on accident is vanishingly small, so someone would have to be doing it on purpose for it to really be a problem  
**\<suraeNoether>** binaryFate: absolutely correct  
**\<sarang>** And this is a fairly easy way to improve safety  
**\<sarang>** Therefore worth doing  
**\<suraeNoether>** ok, so this week i am finally going to pick a journal for peer review for thring signatures  
**\<sarang>** And even doing it on purpose requires collusion anyway  
**\<sarang>** And then the attacker can just outputs they control anyway  
**\<IsthmusCrypto>** That would be an interesting idea, if a hostile node just returns outputs off the blackball list whenever queried for decoys  
**\<suraeNoether>** IsthmusCrypto: yeah but why would it do that instead of using its own outputs? :P  
**\<suraeNoether>** sarang and i go back and forth on it  
**\<IsthmusCrypto>** Depends if the node is lawful evil or chaotic evil  
**\<IsthmusCrypto>** lawful might use own outputs. Chaotic might just ruin it for everybody.  
**\<needmoney90>** It would get noticed immediately  
**\<needmoney90>** Or fairly quickly  
**\<needmoney90>** If they used known black balled outputs  
**\<needmoney90>** Exclusively  
**\<IsthmusCrypto>** Is somebody watching out for that, or should MAP set it up?  
**\<IsthmusCrypto>** Oh  
**\<IsthmusCrypto>** because they're all so old  
**\<IsthmusCrypto>** yeah, that would be obvious  
**\<IsthmusCrypto>** smh  
**\<IsthmusCrypto>** sorry, continue  
**\<suraeNoether>** anyway, i don't think provably spentness is really the issue  
**\<suraeNoether>** i believe that if you take the bipartite graph model and weight edges by output key age at the time of the transaction used it, we would re-attain the monerolink heuristic linkability model; what's funny about that, though, is that even if you were to optimize that guy to look for "probably" not provably spent outputs, you would still have such a large space to search through, you'd never quite be sure if  
**\<suraeNoether>** there wasn't a more likely solution right around the corner  
**\<suraeNoether>** i want to quantify that  
**\<suraeNoether>** because i think heuristic linkability is more a danger issue for monero  
**\<suraeNoether>** thank accidentally using provably spent ring members  
**\<IsthmusCrypto>** ^^ agree  
**\<suraeNoether>** later this week, i'll be reviewing the general M/N multisig thing  
**\<suraeNoether>** is there anything else that folks want MRL to work on, bring up, discuss, etc? There will be news about the Denver Monero Conference later this week, I think.  
**\<suraeNoether>** IsthmusCrypto and silur you guys have been working on stuff  
**\<suraeNoether>** would you care to discuss it?  
**\<IsthmusCrypto>** I can give a quick update on some of the #noncesense-research-lab projects  
**\<IsthmusCrypto>** 1) Working on ways to automate identification of selfish/stubborn mining, since I have been doing it by visual inspection so far. One example written up so far.  
**\<IsthmusCrypto>** 2) Doing a small study of nodes doubled up on IP addresses. Checked peer lists and found duplicates. This is a subtle type of centralization - if 20% of our nodes/miners are showing up over a handful of ProtonVPN addresses, then another DoS on the VPN would have the side effect of knocking a disproportional number of machines off the network.	  
**\<IsthmusCrypto>** 3)Vanity stealth addresses generation. If all of your personal outgoing transactions have the same prefix, then they will be indistinguishable from each other. This maximizes fungibility and eliminates headaches caused by how difficult it is to link your transactions on the blockchain. When you restore your wallet, use the same vanity code - the initial sync time decreases by orders of magnitude when your  
**\<IsthmusCrypto>** wallet only needs to check outputs that obviously belong to it! /s  
**\<IsthmusCrypto>** 4) Blockchain analysis to identify all MyMonero.com transactions that used high or paranoid mode. Partial writeup, but porting over to unsupervised ML methods to automatically pick out all the MyMonero txns from the main fungible cluster.  
**\<IsthmusCrypto>** 5) A lot of work on MAP infrastructure by @n3ptune - both backend database work and some slick UI/visualization  
**\<IsthmusCrypto>** And a misc pet project on timing how long it takes to sync the blockchain on different machines.  
**\<IsthmusCrypto>** (end)  
**\<suraeNoether>** #4 will be a paper that will be used as FUD; want to collab on an MRL bulletin and use our header and stuff so it's clear it's coming from MRL?  
**\<silur>** quantum-vrf is on it's way I had major advances and even figured out that i can do it in a designated verifier setup. also I've sent you my slides on RTRS for HCPP prague, did you have time to review it?  
**\<suraeNoether>** no, i have not, did you email it or mention it in chat?  
**\<silur>** you = suraeNoether & sarang  
**\<silur>** email it for both of you  
**\<silur>** on your protonmail addr  
**\<needmoney90>** IsthmusCrypto: for number 3, the vanity prefix can be deterministic with the private key as the seed, right?  
**\<suraeNoether>** just found it; when is the talk?  
**\<needmoney90>** So every new stealth address has a new prefix that can't be determined ahead of time without the private key  
**\<silur>** october 3  
**\<suraeNoether>** ok i will review it this week  
**\<needmoney90>** That's actually super cool  
**\<silur>** thanks  
**\<suraeNoether>** for #3 that forbids sending to a subaddress  
**\<suraeNoether>** since the subaddress recipient has to ask for a specific basepoint on the transaction key  
**\<suraeNoether>** which sucks  
**\<suraeNoether>** silur i am more interested in your quantum vrf to be honest :D hehe  
**\<IsthmusCrypto>** @suraeNoether - yea RE #4 I’ll keep you in the loop. Don’t want to give FUD fodder, so I am really hoping that MyMonero will fix it soon....  
**\<silur>** and I'd like your review on that I could send you the draft and we can eliminate my probably countless mistakes :)  
**\<IsthmusCrypto>** #3 was just a joke, although it does reflect a real threat model (using a few digits to encode which output is the true spender, or maybe use a few digits to mark part of a hash of the private key to deterministically fingerprint transactions \*from\* the same account.  
**\<IsthmusCrypto>** (would be malicious wallet software trying to communicate with no telemetry besides what is on the blockchain)  
**\<needmoney90>** I think it could actually be used for fast sync  
**\<needmoney90>** Without fungibility concerns  
**\<suraeNoether>** endogenic ^ can't really do anything about the older choices, but we can patch that up moving forward  
**\<sarang>** Hooray fixed plane. TTYL. Will be on after landing  
**\<suraeNoether>** prefixing keys makes them distinguishable by prefix, so i'm not sure what the goal of the idea is :P  
**\<needmoney90>** Surae, make the prefix deterministic  
**\<needmoney90>** Increment private key by 1 every tx, hash it, truncate, and use that as the prefix  
**\<needmoney90>** Without the private key you can't fingerprint the txes  
**\<binaryFate>** I think you still get a different prefix for each output no?  
**\<needmoney90>** That's a super naive method of course  
**\<needmoney90>** You do binaryfate, but when scanning the chain you can look for the next prefix  
**\<needmoney90>** Every time you find one, you increment and look for the next  
**\<binaryFate>** I mean within the same transaction  
**\<binaryFate>** And as you don't know the order, you can miss some  
**\<needmoney90>** Ah, yes  
**\<needmoney90>** If it's the same tx you can have a lookback  
**\<needmoney90>** That's not a huge deal imo  
**\<binaryFate>** true  
**\<needmoney90>** Sorry for doing research stuff in the meeting, carry on guys. I'll bring this to the lounge.  
**\<suraeNoether>** needmoney90: interesting... i need to thinka bout that. :P actually needmoney90 this is what the research meeting is for :D  
**\<binaryFate>** I've been finally getting to work on an idea I had since a long time, I think I mentioned it here a couple of times.  
**\<suraeNoether>** please go ahead!  
**\<silur>** yea I missed that and interested :D  
**\<binaryFate>** Broad idea is to study the age distribution of \*actual\* spendings of Monero users, with ultimately maybe proposing a better decoy output selection algorithm  
**\<sarang>** Go on  
**\<needmoney90>** If it's opt in, wouldn't the set of data we collect be skewed away from those who are super cautious about privacy?  
**\<binaryFate>** Maybe best to explain the approach is a simplified example: imagine all rings are of size 2 (one real + one decoy). The "real" distribution is unknown, but the "decoy" one is known from what the wallet software is doing (restricted to certain block ranges where we are confident an overly large percentage of users are using the same version)  
**\<binaryFate>** The result is a mixture, or (simplified) a weighted distribution. This is observable in the blockchain.  
**\<binaryFate>** By using the observable bit, and the known part of the weighted distribution, I want to estimate the unknown one, aka the real spending habits  
**\<binaryFate>** I'm writing an R package to do this, with an emphasis on graphically comparing what we should expect if users were spending "as we think" versus what we actually see from the blockchain  
**\<binaryFate>** so whatever results I get be done again in the future with the same procedure  
**\<binaryFate>** First results expecting soon (this week hopefully)  
**\<binaryFate>** This will also allow to check the Miller et al. gamma distribution fitting btw, which afaik nobody really cross-checked (even though it will make it into the next hard fork)  
**\<binaryFate>** (end)  
**\<gingeropolous>** so is this asking which inputs are outliers of the distribution the wallet is using?  
**\<binaryFate>** no, it's about the distributions, not the level of inputs. It's comparing "the situation we are modelling using [triangular/gamma] distribution" and "what we see in the blockchain"  
**\<gingeropolous>** gotcha  
**\<binaryFate>** Think of it as cutting through the noise to estimate the real spending habits, but it only gives you the distribution of it, no info on a single input  
**\<binaryFate>** We rank highly on plausible deniablity :) I'm trying to improve on the distribution/heuristic thing. There was very little studies to come up with first the triangular one then the gamma one.  
**\<binaryFate>** Anyway, I'll probably have a draft report in week or two to circulate.  
**\<suraeNoether>** this is a very interesting idea  
**\<suraeNoether>** i'm a little confused; where are you getting your data? your own wallet?  
**\<IsthmusCrypto>** It doesn't need a ground truth. It's just actual distribution minus decoy selection algorithm expectation, right?  
**\<endogenic>** IsthmusCrypto: fix the ability to use different ring sizes? the new apps and new web wallet do not allow you to pick, for that reason. i didn't expect we'd still have the old mymonero.com wallet up til now and totally forgot we have the mixin select there  
**\<endogenic>** just let me know next time :)  
**\<endogenic>** got so many things going on :  
**\<binaryFate>** IsthmusCrypto correct  
**\<endogenic>** will start to settle down soon i hope  
**\<suraeNoether>** IsthmusCrypto: ahhhhh i see, yeah, if i understand it correctly, that's a wonderful treasure trove of useful data. :P  
**\<suraeNoether>** oh man  
**\<endogenic>** anyway IsthmusCrypto can you really tell they are -MyMonero- transactions?  
**\<suraeNoether>** binaryFate: good freaking idea!  
**\<endogenic>** or just that they have a high ring size?  
**\<IsthmusCrypto>** The MyMonero fingerprint is based on the ringsize AND the decoy selection algorithm  
**\<binaryFate>** suraeNoether simplified example again (ring size 2): wallet is known to use unifom for decoy. Blockchain shows distribution X (and we know it's 0.5 wallet distrib + 0.5 user real spending). We can compare the two and infere a lot about real user spending  
**\<IsthmusCrypto>** The first is a good signpost to find candidates, then the second is the actual give-away  
**\<binaryFate>** I'm just getting interesting results as we speak, but prefer to clear things a bit before sending to anyone  
**\<endogenic>** IsthmusCrypto: just want you to know i've been motivating for the decoy selection algo change for a long time,  
**\<endogenic>** i'm discussing it internally again to get it done ...  
**\<endogenic>** we hve work on it  
**\<endogenic>** need to stabilize and deploy..  
**\<IsthmusCrypto>** Cool @edogenic. I haven't worried about it too much or rushed the research because the impending fixed ring size will remove half of the heuristic.  
**\<suraeNoether>** binaryFate: more generally: if we use a distribution F to pick ring members, the extent to which ring members on the blockchain vary from F is directly related to the true signers... really great approach  
**\<suraeNoether>** anyway  
**\<suraeNoether>** okay, anyone else have anything they want to chat about?  
**\<suraeNoether>** it's been a few weeks  
**\<binaryFate>** yep, and it's directly quantifiable by the ring sizes too  
**\<IsthmusCrypto>** Last thought - can we start recording MRL meetings alongside the other dev diaries? It would be good for accessibility and showcasing some of the best people/conversations in our community  
**\<IsthmusCrypto>** If somebody can show me where/how, I can take care of uploading them.  
**\<selsta>** IsthmusCrypto: they used to get uploaded  
**\<selsta>** or did they?  
**\<selsta>** anyway I plan on creating a IRC bot that auto uploads the meetings  
**\<suraeNoether>** IsthmusCrypto: i usually throw the logs up on my github, but i have been lazy lately; i'll set aside an hour later today to upload all the ones I have  
**\<suraeNoether>** if anyone wants to put them anywhere else, feel free, maybe we could throw them up on the getmonero.org page or something like that. i'll look into a few options  
**\<IsthmusCrypto>** 👍 I started thinking about this when the person showed up claiming that fixed ring sizes hadn't been publicly discussed  
**\<suraeNoether>** if anyone wants to take initiative and upload meeting logs that are missing before i get to them, that'd be a great contribution to MRL  
**\<suraeNoether>** only so many hours in a day :D  
**\<suraeNoether>** either way, i'll try to organize what i see available later today. my github is a mess  
**\<IsthmusCrypto>** Cool, I was thinking I could upload them here? (If that seems alright and somebody shows me how or wants to take initiative and do it themselves)  
**\<binaryFate>** go for it  
**\<endogenic>** good idea  
**\<IsthmusCrypto>** Do I just PR it to here? https://github.com/monero-project/monero-site/tree/master/\_posts  
**\<suraeNoether>** i believe that is correct; moneromooo or luigi1111 ?  
**\<selsta>** IsthmusCrypto: yes, but you have to convert the logs to markdown  
**\<suraeNoether>** ok, I believe we are over an hour here, so we'll wrap this up  
**\<suraeNoether>** any last notes/comments/concerns/questions?  
**\<suraeNoether>** i'm expecting my cross-chain paper to be done by the end of the month, i think; it's actually a lot simpler than the multisig paper  
**\<silur>** the cross-chain atomic swaps?  
**\<silur>** not quite, I remember it had a much cooler name  
**\<silur>** ring-confidential atomic swaps or something  
**\<moneromooo>** No, to https://repo.getmonero.org/  
**\<silur>** oh didn't even know about that thx  
