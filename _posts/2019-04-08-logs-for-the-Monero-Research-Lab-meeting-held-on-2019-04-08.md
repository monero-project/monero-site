---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-04-08
summary: Sarang work, Surae work, Output distribution and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<suraeNoether>** come to think of it, though, I'm not sure who else is working on it  
**\<sarang>** OK, our weekly meeting begins shortly  
**\<sarang>** Agenda: https://github.com/monero-project/meta/issues/327  
**\<dotkc>** suraeNoether: I'd enjoy a meeting if you pass through ATL on your upcoming clemson visit  
**\<sarang>** Let's go ahead and begin since it's about time to start  
**\<sarang>** 1. GREETINGS  
**\<sarang>** hello all  
**\<sarang>** Who's here today?  
**\<rehrar>** hi  
**\<sgp\_>** hello  
**\<ArticMine>** hi  
**\<suraeNoether>** holaa  
**\<sarang>** Welcome to dotkc, who is fairly new to our channels  
**\<sarang>** Let's jump into 2. ROUNDTABLE  
**\<sarang>** I have a few things to share  
**\<sarang>** First, I have an example branch (link in agenda) of a C++ implementation of CLSAG ring signatures, along with basic timing tests for our current ringsize  
**\<suraeNoether>** WHEEE!  
**\<sarang>** On my test machine, an 11-member MLSAG (current scheme) takes 13.0 ms to verify  
**\<suraeNoether>** clsag is so cool man  
**\<sarang>** If we move to CLSAG, an 11-signature takes 10.6 ms to verify  
**\<sarang>** If we modify the hash coefficients (more later on that), it increases to 11.1 ms  
**\<sarang>** This means that if we take these numbers as correct, CLSAG gives us smaller \_and\_ faster signatures  
**\<sarang>** Note that the linked branch is for example purposes only  
**\<sarang>** There are a few new underlying functions that would need review  
**\<suraeNoether>** a 15% gain in verification time, after a year of blockchain growth, is equivalent to a really large gain in overall download+sync time, saving future nodes the time it takes to start mining monero... and that's true even if we boost ring sizes moderately to ring size 13-14, based on sarang's numbers: we will still have an overall gain in download+sync time after a year. i'm not sure if i recommend that yet,  
**\<suraeNoether>** though.  
**\<suraeNoether>** tiny changes in verification time mean huge swings in space capacity, if we count download+sync time as our metric.  
**\<sarang>** Reminder that the space savings are 320 bytes per spent input (each spent input is a separate signature)  
**\<ArticMine>** How does size compare?  
**\<sarang>** ^^  
**\<suraeNoether>** it will be delightful to see the graph of monero blockchain size over time one year from clsag implementation  
**\<suraeNoether>** that'll be the good nooch  
**\<sarang>** Any questions or comments on CLSAG as it currently stands?  
**\<sarang>** There is currently no decision to use this, nor a timeline  
**\<sarang>** There is also a Python example implementation: https://github.com/SarangNoether/skunkworks/blob/clsag/clsag/clsag.py  
**\<ArticMine>** So a typical tx with two outputs has a ~620 byte savings  
**\<sarang>** correct  
**\<sarang>** Er, 2 inputs  
**\<sarang>** These savings are per spent input (and therefore per signature)  
**\<suraeNoether>** oh fwiw  
**\<suraeNoether>** i have a quick comment  
**\<sarang>** Go ahead suraeNoether !  
**\<suraeNoether>** the difference between sarang's 11.1 ms version and 10.6 ms version is that the 11.1 ms version is provably unforgeable as long as LSAG is unforgeable. it's a drop-in version of musig key aggregation (andytoshi ^) for use in confidential transactions, and the proof is very easy  
**\<suraeNoether>** for the 10.6 ms version, i'm still tinkering with the proof of unforgeability.  
**\<suraeNoether>** but it's less trivial to prove  
**\<sarang>** exactly  
**\<suraeNoether>** and, fwiw, this is one of the first times in my life i've seen a literal engineering example of the gap between the theoretical and the application :P  
**\<hyc>** very cool  
**\<sarang>** Right now the timing code has a flag where you can choose which version you want to examine  
**\<suraeNoether>** it's kind of neat  
**\<sarang>** Anyway, please play around with CLSAG if you find it interesting  
**\<hyc>** ^^ more techies need that lightbulb moment  
**\<sarang>** Next up: Dandelion\_\_  
**\<sarang>** s/\_\_/++  
**\<ArticMine>** What is the impact of ring size?  
**\<sarang>** ArticMine: it uses 1 additional scalar per ring member (as opposed to 2)  
**\<suraeNoether>** ArticMine: we could increase ring size to 13-14 and see similar verificaiton times as our present ring sizes.  
**\<sarang>** verification increases linearly  
**\<suraeNoether>** afaik  
**\<sarang>** Yes, once we hit ringsize 13-14, we hit the same verification time as an 11-MLSAG  
**\<sarang>** (approximately)  
**\<sarang>** If desired, I can make up a chart with sizes and times  
**\<ArticMine>** Still the space saving is significant  
**\<sarang>** yes  
**\<sarang>** and it's faster  
**\<sgp\_>** sarang: a quick, rough estimate chart is good enough for me  
**\<sarang>** FWIW, an n-CLSAG will always be faster than an n-MLSAG  
**\<sarang>** The original question was comparing n-CLSAG to 11-MLSAG  
**\<sarang>** and of course there's a crossover point  
**\<sarang>** Anyhoo, we've talked informally about Dandelion++  
**\<sarang>** I have links to a proposed BIP on this, as well as an updated PR for Grin about it  
**\<sarang>** If we want to move forward with Dandelion++ as part of our txn routing, there are some design choices to make  
**\<suraeNoether>** d++ is going to be a topic of conversation i believe by vtnerd at the konferenco (ping)  
**\<sarang>** Yes, and the usual reminder that it is \_not\_ a replacement for network-level solutions like Tor/I2P  
**\<sarang>** Grin changed their implementation such that a node does not fluff/stem on a per-txn basis, but on a per-epoch basis  
**\<sarang>** this is what the original paper says  
**\<sarang>** the BIP does not address this (and I believe is incorrect)  
**\<sarang>** Grin's implementation is a little more complex than ours would need to be, since they perform txn aggregation  
**\<suraeNoether>** sarang: can you provide a few helpful links for the record?  
**\<sarang>** links to BIP/Grin in agenda  
**\<suraeNoether>** i'm curious on the details of grin's implementation vs the bip  
**\<suraeNoether>** ah great thanks  
**\<sarang>** Original D++ paper: https://arxiv.org/abs/1805.11060  
**\<sarang>** Any questions on D++?  
**\<sarang>** I want to see it implemented in Monero  
**\<suraeNoether>** i do too  
**\<suraeNoether>** i believe the epochal approach taken by grin is the correct one, but maybe there's an argument out there for the difference  
**\<suraeNoether>** i wonder if andytoshi or gmaxwell would chime in  
**\<sarang>** The epoch approach is correct according to the paper  
**\<sarang>** So at each epoch, the node flips a weighted coin to decide which "mode" it is in: fluff or stem  
**\<andytoshi>** i don't know anything about dandelion, sorry :)  
**\<sarang>** all txns are routed according to that (unless the node detects a black-hole attack)  
**\<sarang>** andytoshi: I did reach out once in -wizards to ask about the BIP, but didn't hear anything :/  
**\<sarang>** perhaps others have discussed it elsewhere, who knows  
**\<sarang>** The last thing I have to share is that moneromooo prepared PR 5389 (link in agenda) regarding output selection  
**\<sarang>** it uses the "output lineup" method we've discussed here at length  
**\<sarang>** Review on the method/PR would be most welcome  
**\<sarang>** That's all for me right now... suraeNoether, your report?  
**\<suraeNoether>** great, so I have a few updates  
**\<suraeNoether>** first things first: monero konferenco registration is now open on https://monerokon.com  
**\<suraeNoether>** second things second: as I mentioned right before the meeting, next week I'm headed out to Clemson University to give a talk and meet with some colleagues  
**\<suraeNoether>** I'm meeting with Gao, the lead researcher there in their blockchain group  
**\<suraeNoether>** in addition to that, my top priority right now is my most-old project rihgt now, which is MRL-11 and my matching simulations + churn analysis  
**\<sarang>** (and let's discuss churn in more detail after your report too)  
**\<suraeNoether>** given the recent conversation with dotkc and sgp\_ about automated churn, this priority is tippy top  
**\<sgp\_>** I cannot stress enough how important MRL-11 is  
**\<sarang>** Yeah, before we discuss that in depth, do you have anything not related to it to share suraeNoether ?  
**\<dotkc>** I have a colleague who might be a great fit to jump in and help MRL-11 efforts  
**\<suraeNoether>** not yet: after the meeting i want to have a public discussion about the various behaviors we want to test  
**\<sarang>** Righto  
**\<sarang>** So yes, let's talk churn  
**\<suraeNoether>** i have the infrastructure of matching done and the infrastructure for monte carlo simulations of a blockchain graph done  
**\<sarang>** dotkc: you had posted in r/Monero a few things regarding a tool your group is working on; can you introduce yourself to the room?  
**\<sarang>** and sgp\_ and dotkc have discussed it at length on r/Monero and earlier in this room  
**\<dotkc>** i'm nobody, it's a hobby project that materialized into code and my colleagues and I talk a lot about privacy so here we are to help  
**\<sarang>** (since dotkc is new here, a reminder that these meeting logs are made public afterward, FYI)  
**\<dotkc>** I'm aware and thank you for pointing it out  
**\<sarang>** np  
**\<sarang>** Can you describe your tool briefly?  
**\<dotkc>** we started by gathering every shred of churn-related discussion from around the community  
**\<dotkc>** plus our basic familiarity with several chain analysis and network monitoring techniques  
**\<dotkc>** the intention is to join you all in researching privacy wrt churn and help users employ "less bad" practices  
**\<dotkc>** we don't need to reach "best practices" to improve the network, imo  
**\<sarang>** The intention of the software tool, from my understanding in reading earlier logs, is to automate certain churn practices according to guidelines that are being developed  
**\<sarang>** and that there is a donation component of some kind to support projects  
**\<dotkc>** and I'm definitely not going to be manually throwing tons of churn-like transactions onto the network for analysis so our first step was making a tool to automate that  
**\<sarang>** this particular point seemed more controversial  
**\<dotkc>** donations were certainly controversial. I think many of you will find the concept easier to swallow if you look at the code and see how we have padded donations with sweep\_single  
**\<dotkc>** then, instead of thinking donation, think possibly-safer-spend  
**\<sarang>** What particular churn-related heuristics do you wish to avoid with this automation?  
**\<dotkc>** maybe this technique would be better employed to enable a user to reveal less in a transaction to a potential adversary  
**\<sarang>** One reason we don't have any formal churn recommendations yet is because of a lack of complete understanding of relevant heuristics that might be employed  
**\<sarang>** Some would be timing-based, others purely graph-based, etc.  
**\<dotkc>** a few we discussed with @isthmus last week are avoiding sweep\_all combining unrelated outputs without any clear benefit to doing so  
**\<sarang>** Can you discuss the specific heuristics you want to mitigate or avoid  
**\<sarang>** ?  
**\<dotkc>** 1. sweep\_all combining unrelated  
**\<sarang>** (some of this is in GitHub/reddit, but I'd like to hear a summary here too)  
**\<dEBRUYNE>** Personal opinion, your tool won't thrive if the donation stuff (where a third output is created) isn't removed  
**\<dotkc>** 2. a bunch of sweep\_single in a short period of time, from the same IP, relayed to same neighbors, blah blah blah  
**\<dotkc>** thanks dEBRUYNE, i moved it to an optional flag after discussions here yesterday  
**\<dotkc>** let's take a step back. I don't propose dots living on as a stand alone tool.  
**\<dEBRUYNE>** Why can't the donation be part of the churn btw?  
**\<dotkc>** it's a tool to research churn that is likely to die in 2 ways  
**\<sarang>** And it's certainly a good idea to limit such network tests to testnet until better studied  
**\<dEBRUYNE>** dotkc: Normally a sweep\_all with 1 input would create 2 outputs, one that goes back to the sender, and one that is sent to a random address  
**\<dotkc>** 1. churn found to promote privacy: we'll move these techniques into main wallet  
**\<dEBRUYNE>** What if you'd replace that random address with the donation address?  
**\<dEBRUYNE>** Then you'd avoid having 3 output transactions  
**\<sgp\_>** dEBRUYNE: that's what they were doing iirc  
**\<dotkc>** 2. churn found to harm privacy, dots helps destroy the delusion of churn==privacy that surrounds this community (particularly less intermediate users)  
**\<dEBRUYNE>** I guess that may still provide some leakage, but would be better  
**\<dEBRUYNE>** churn==privacy that surrounds this community \<= I disagree. I think most of the community is aware that abusing certain features such as churn can hurt one's privacy  
**\<sarang>** A concern relating to donation was also that donation to a view-enabled address provides public information relating to churn transactions  
**\<dotkc>** yeah, we don't do 3 output transactions, i'm not sure who tossed that into the discussion. seems like they were talking about some old wallet  
**\<dEBRUYNE>** sarang: That would be a concern yeah  
**\<sgp\_>** It was an example of some observable donation behavior someone else attempted that had similar privacy consequences  
**\<dotkc>** our "donate" is like this 1. sweep\_single 2. spend (donate) 3. sweep the change  
**\<dotkc>** which, IF, and that's a big if, churn has benefits then this technique would be the safest way to spend XMR  
**\<dotkc>** since we do a pre-spend churn, then spend, then churn the change  
**\<sarang>** I question the kinds of fingerprints this could leave in the transaction graph  
**\<sarang>** and need to think about it more  
**\<sgp\_>** dotkc: for the reasons I mentioned yesterday, including donated outputs in any step of the process is incrementally worse for privacy. It would be better to churn those 3 times without donation. I think the pressure to include this donation feature is getting us started on the wrong foot  
**\<dotkc>** totally agree  
**\<suraeNoether>** i'm in complete agreement with sgp\_  
**\<xmrmatterbridge> \<oneiric>** random time delays b/w pre-spend -> spend -> change-churn ?  
**\<sarang>** Good point; we can certainly talk about general churn strategies independently of donation  
**\<dotkc>** please remember that it's OPTIONAL and in a very clearly defined test & research tool that is recommended for testnet  
**\<suraeNoether>** churn is going to be difficult enough to nail down security details for without trying to model donations built into the process  
**\<suraeNoether>** dotkc: please understand  
**\<sarang>** Random time delays are certainly important for mitigating timing heuristics  
**\<suraeNoether>** we are recommending against it due to the privacy properties of monero that make everyone's privacy sensitive to everyone else's choices.  
**\<sarang>** Graph-specific heuristics would depend also on transaction rates (and appearance of outputs in other decoy rings, etc.)  
**\<suraeNoether>** if some users optionally want to donate, great, they can construct a transaction on their own to make a donation and do it normally; you are talking about inserting a step into a non-security process designed for security  
**\<suraeNoether>** this is like trying to build auto-donations into monero's key exchanges for some reason  
**\<sarang>** Right, let's discuss general churn without the donation idea  
**\<suraeNoether>** or like riding a tractor on hallucinogens, or dividing by zero. you can do it, you can do a lot of things, doesn't mean you should.  
**\<suraeNoether>** so, speaking of churn and modeling it  
**\<midipoet>** i am so lost with the talk of 'donations'  
**\<sarang>** Right, let's forget about the idea of embedding donations within churn for now  
**\<suraeNoether>** i'm simulating an economy where every output is born in a coinbase transaction or a regular transaction. Coinbase transactions have a fixed probability p of being sent to some "marked" party.  
**\<sgp\_>** I think that's a good idea  
**\<suraeNoether>** all other transactions either take all marked inputs or all not marked inputs  
**\<dotkc>** most of you seem hung up on the "donate" part, which is why i ask you to consider the same algorithm employed as a "spend" instead  
**\<suraeNoether>** a transaction with non-marked inputs has a fixed probability of q of being sent to the same marked party  
**\<dotkc>** like if you want to pay someone and you know their wallet will eventually become compromised  
**\<dotkc>** it's the same problem as if you send to a donation address with open view key  
**\<suraeNoether>** why would you send money to someone who you suspect will lose their wallet password?  
**\<suraeNoether>** or give it to a malicious party?  
**\<sgp\_>** dotkc: yes, but you are suggesting a donation as a PART of the churn PROCESS, not as a payment after you already churn your funds  
**\<xmrmatterbridge> \<oneiric>** people should be cautious of who they donate to, research required  
**\<suraeNoether>** okay check it, i want to have some discussion about formal statistical modeling, and i want to stop talking about donations  
**\<sarang>** yes please  
**\<suraeNoether>** dotkc: let's chat more about this after the research meeting  
**\<suraeNoether>** for now let's talk statistics  
**\<sgp\_>** I really think we should put discussion about donations aside, since it seems like we are going to keep talking in circles. We can come back to it outside of meeting time  
**\<sarang>** ^  
**\<suraeNoether>** i'm simulating a ledger where every output is born in a coinbase transaction or a regular transaction. Coinbase transactions have a fixed probability p of being sent to some "marked" party.  
**\<xmrmatterbridge> \<oneiric>** routing out all the fakes in crypto would be a great research tool  
**\<dotkc>** in either case, we want to be able to spend to someone without our privacy depending on them keeping their wallet private  
**\<suraeNoether>** all other transactions either take all marked inputs or all not marked inputs  
**\<suraeNoether>** a transaction with non-marked inputs has a fixed probability of q of being sent to the same marked party  
**\<suraeNoether>** now when an output is created, a lifespan for that output is randomly selected  
**\<suraeNoether>** if the output is not marked, the lifespan is drawn from the wallet spend-time distribuiton  
**\<suraeNoether>** when a block rolls around, all the outputs flagged as "to be spent' are bundled into transactions using the empirical distribution fo number of inputs and outputs provided by n3ptune, isthmus at #noncesense-research-lab  
**\<suraeNoether>** and the process repeats itself  
**\<suraeNoether>** the parameters that vary from simulation to simulation is "what does the marked party do with their outputs?"  
**\<suraeNoether>** in the churn case with a fixed wait-time between churns, the answer is "send to yourself N times, waiting h blocks between sends each time"  
**\<sarang>** After this process, how is the resulting graph evaluated?  
**\<suraeNoether>** in the churn case where the churner waits the wallet spend-time distribution (which is statistically identical to the background economy in this simulation), and churns a very large number of times N, it should be clear that an adversary will have zero advantage in identifying the churner  
**\<midipoet>** churn is a verb  
**\<suraeNoether>** "churn case" is a noun. :D  
**\<suraeNoether>** once a simulation is generated, the adversary runs the matching algorithm and we have another set of parameters to test: which models the adversary uses to try to find the true spend pattern  
**\<suraeNoether>** So there are two choices i have to make about how this goes: first, i select the distribution the marked party is spending  from. second, i select the model the adversary is going to use to try to match transactions. Then the confusion table I get out of it answers the question "using this adversary's model, X, when the marked party uses model Y, how good is the matching algorithm?"  
**\<suraeNoether>** and for each of these choices, i can generate a confusion table  
**\<sarang>** Right, and I think what needs to be nailed down is what the adversary is using for its models  
**\<suraeNoether>** precisely  
**\<suraeNoether>** which is why i want sgp\_'s input, for one thing  
**\<sarang>** Some are timing-based, which can be avoided by proper delay times  
**\<suraeNoether>** but the problem is the adversary can use any heuristic they like to construct a model.  
**\<sarang>** Others are purely graph-based, and depend heavily on outputs' use in decoys and the links between true/fake-change outputs in the graph  
**\<xmrmatterbridge> \<oneiric>** is this spend problem, at least partially, addressed by Dandelion++?  
**\<suraeNoether>** BUT! this idea that if the churner is using the background distribution is one side of the coin. I claim this in addition: as the model Y diverges from the wallet spend-time distribution, the quality of the results will become more robust against variations in the choice of X, i.e.\\ as long as you aren't too far off from the spend-time distribution, you are mostly indistinguishable, but if your behavior is  
**\<suraeNoether>** very far off, you are an easy target.  
**\<sarang>** D++ only affects how the relay process works  
**\<suraeNoether>** oneiric nah, this has everything to do with the ledger and totally ignores the minnig network  
**\<sarang>** it does introduce slight delays, sure  
**\<sarang>** but these are very minor  
**\<xmrmatterbridge> \<oneiric>** re: obfuscating true spend time + origin  
**\<suraeNoether>** oneiric this is essentially ledger forensics in the environment of ring signatures. :P  
**\<sarang>** D++ helps against network-wide observation, not targeted observation  
**\<midipoet>** am i understanding this simulation correctly, in that outputs are in perpetual motion (churned)?  
**\<xmrmatterbridge> \<oneiric>** ah, think i understand, thanks. has to be dealt with at sig level  
**\<dotkc>** i propose naming such behavior maintenance churn  
**\<midipoet>** we'll end up with butter  
**\<suraeNoether>** midipoet: in my model, yeah, that's how i'm modeling the economy to generate a fake blockchain  
**\<dotkc>** and i do agree with @suraeNoether that under his analysis, the appropriate timing makes such moves difficult to unmask  
**\<suraeNoether>** after all, the goal of selecting a wallet distribution is that all otuptus will have ages drawn from it (not possible, but the goal)  
**\<suraeNoether>** either way, the way i have this experiment set up, it is \*necessarily\* true that the case in which the churner matches the wallet distribution for N churns in a row will enjoy indistinguishability and the probability of any one edge being traced is R^-N, so we can think of this as an idealized model anyway  
**\<dotkc>** this does still neglect many real-world considerations  
**\<suraeNoether>** Using a birthday attack argument, a churn with length > 23 is "sufficient." but that's huge, and I suspect we will have, in practice much lower bounds.  
**\<xmrmatterbridge> \<oneiric>** is it safe to neglect for now, and gradually ramp up to more real-world-like conditions?  
**\<suraeNoether>** dotkc: we can model various heuristics using my above approach under the "model X" component of my little rant  
**\<sarang>** To what extent have we established a set of candidate heuristics?  
**\<suraeNoether>** so the best help i can get for this is ^  
**\<suraeNoether>** bingo  
**\<suraeNoether>** before i can finish typing, sarang for the win  
**\<sarang>** A framework is great, but extremely limited without something to test  
**\<sgp\_>** they can then be tested using the "made-up" blockchain to find the ground truth  
**\<sarang>** I propose that dotkc and suraeNoether work more closely on identifying such heuristics to examine, whether temporal or purely graph-based or whatever  
**\<sarang>** Having totally separate research paths for this is likely a waste of resources  
**\<dotkc>** agreed and willing  
**\<sarang>** and I do agree with sgp\_ (and others) that getting this nailed down should be considered a priority  
**\<suraeNoether>** right now i'm testing 1) periodic non-random spends, like a magazine subscription, 2) a single exponential wait time, like an impatient churner, but which has some of the statistical characteristics of our wallet spend-time distribution 3) gamma distribution, but tweaking expected wait time up and down smoothly to see the sensitivity of the confusion table to the difference between expected wait times  
**\<sarang>** I appreciate your interest and willingness to bring this up dotkc  
**\<xmrmatterbridge> \<oneiric>** maybe 4) uniform-random over some given range?  
**\<suraeNoether>** 3) also corresponds to an impatient (or paranoid!) churner, but in a way that seems more apples-to-apples  
**\<dotkc>** might i propose a few small wins the community might enjoy while the more comprehensive research continues?  
**\<suraeNoether>** oneiric cool, i'll throw 4) uniform on there  
**\<sgp\_>** oneiric yes that's a nice simple one to test  
**\<sarang>** What do you mean dotkc ?  
**\<xmrmatterbridge> \<oneiric>** :)  
**\<sgp\_>** suraeNoether: I'll PM you at some point with a list  
**\<suraeNoether>** ^ bingo bango  
**\<moneromooo>** Not sure if it helps, but I have an old patch that split txes to have one input at a time, and sent them at poisson delayed intervals.  
**\<dotkc>** top of most search engines is a credible-looking post recommending sweep\_all. that most certainly links outputs  
**\<sarang>** BTW dotkc are you a developer on the dots code?  
**\<dotkc>** there is plenty of advice around the community to churn for privacy and thousands of people view that sweep\_all advice (if the page's counter is to be trusted)  
**\<dotkc>** the developer, yes  
**\<sarang>** Well, I certainly am of the opinion that there is no thorough, well-tested churn advice at this point  
**\<suraeNoether>** ^  
**\<suraeNoether>** it's a rock and hard place  
**\<dotkc>** i agree with that  
**\<dotkc>** but could we agree on anythign that's definitely bad?  
**\<sarang>** It's fighting against a somewhat unknown set of heuristics (somewhat)  
**\<sarang>** That's an interesting way to look at it dotkc  
**\<dotkc>** removing even one "most certainly bad" case is progress that would support user privacy  
**\<sarang>** agreed  
**\<suraeNoether>** i think the best practice is to spend at the "ground truth" background economy rate of spending, but that's literally impossible to determine. the next best solution is massive anonymity sets so timing analysis on the inputs fails. as the zcash example demonstrates, that doesn't do much for the output end of things.  
**\<sarang>** Well, the idea of sweep\_all vs single, for example  
**\<suraeNoether>** but i'm testing that hypothesis  
**\<dotkc>** i was deliberate in aiming at "less bad" with my short term goals for dots  
**\<sarang>** as mentioned, linking outputs is a profoundly bad thing (in general, too)  
**\<sarang>** and very tough until/unless we enable coinjoin  
**\<suraeNoether>** dotkc: the worst thing that could be implemented is periodic behavior  
**\<suraeNoether>** dotkc deterministically periodic i mean  
**\<sarang>** suraeNoether: worst in terms of timing, perhaps  
**\<sarang>** not necessarily in terms of other metadata (in/out counts, for example)  
**\<suraeNoether>** yeah, and the vast majority of my work is based on timing alone.  
**\<suraeNoether>** but periodic behavior stands out in a power spectrum like a novice at a nudist colony  
**\<sarang>** Graph structure certainly interweaves with timing, but there's plenty beyond that too  
**\<dotkc>** i agree with you both that sweep\_all linkages and trivial temporal linkages seem very bad  
**\<sarang>** I consider output linking to be extremely hard to avoid, since it's an inherent part of multi-input txns  
**\<sgp\_>** it depends on the circumstances, but yes sweep\_all is bad if you don't want these outputs associated  
**\<moneromooo>** If you don't want them associated, use two accounts ?  
**\<sgp\_>** moneromooo: yeah, always keep your outputs separate if you can :)  
**\<sarang>** dotkc had included some multi-account ideas in GitHub as well, IIRC  
**\<dotkc>** this is progress, we've nearly agreed on at least one "bad" behavior!  
**\<sarang>** In the interest of time, let's briefly wrap up and then continue discussion afterward  
**\<sarang>** Let's jump to 4. ACTION ITEMS  
**\<dotkc>** @sarang: you are correct  
**\<sarang>** one sec dotkc  
**\<suraeNoether>** dotkc: periodic behavior or any behavior in timing that is fundamentally unlike the "background rate" of spending will stick out statistically. repetitive behavior is super super linkable. i can tell you that with 100% confidence.  
**\<sarang>** Besides contributing to the churn discussion to assist suraeNoether et al. with frameworks, I am finalizing CLSAG material as well as an unfortunate snag in DLSAG security that we're trying to address  
**\<sarang>** suraeNoether: your action items?  
**\<suraeNoether>**  my action items: simulations for MRL-11. sgp\_ was going to send me some links to possible behaviors to investigate. continuing commentary and thought on dlsag and the clsag security proof. uhm...  
**\<suraeNoether>** i'll probably do a little bit of recreational coding like spectre later this week after i've put some more hours into matching  
**\<sarang>** great  
**\<sarang>** Seems all are in agreement that matching/churn should be a priority that's been put to the backburner too long  
**\<sarang>** Thanks to everyone for attending. We're now adjourned; logs will be posted to the github issue shortly  
**\<sarang>** Let the discussion continue!  
