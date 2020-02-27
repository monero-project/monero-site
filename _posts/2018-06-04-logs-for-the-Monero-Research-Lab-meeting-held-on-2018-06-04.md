---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-06-04
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<sarang>** I can stay ~15 min today  
**\<sarang>** poor cat  
**\<unknownids>** :)  
**\<sarang>** Coco hates car rides, needles, and strange places. This'll go great  
**\<philkode>** Hey guys  
**\<sarang>** yo  
**\<suraeNoether>** so we'll go with 1. greetings, 2. give sarang a brief platform to talk with us about what he'll be up to before he has to dip out, 3. i'll give the community an update on the unforgeability of LSTAGs, 3. we'll bring up churning and best practices infographics, 4. any other projects anyone wants to talk about  
**\<philkode>** Will be keeping one eye on the Apple WWDC keynote and one eye here  
**\<suraeNoether>** philkode: i'll post transcript after the meeting so no worries there  
**\<suraeNoether>** so, howdy everyone  
**\<sarang>** heyo  
**\<suraeNoether>** sarang, take it away~  
**\<sarang>** As has been discussed elsewhere, BP reviews are humming along  
**\<sarang>** moneromooo and I worked up the last big optimization we had hoped to get done for them  
**\<sarang>** increasing verification speed  
**\<sarang>** While I'm away I'll continue managing the review process as needed  
**\<sarang>** Everything is coming up Milhouse for the next upgrade  
**\<suraeNoether>** what's our "overall" verification speed improvement looking like, and do your changes only apply to the BP code for now?  
**\<suraeNoether>** i recall around 50% improvement in total? or am i misremembering?   
**\<sarang>** We're looking at up to >90% size benefits and >85% speed benefits for transactions  
**\<sarang>** depending on batching, size, etc.  
**\<suraeNoether>** freaking fantastic  
**\<suraeNoether>** you win the internet  
**\<sarang>** We'll get some "official" stats for public-facing publicity stuff  
**\<sarang>** And yes, this only applies to BPs for now  
**\<sarang>** but in theory any multiexp operation (besides aX+bY simple terms) could probably benefit from this  
**\<sarang>** But BPs are the big use case right now  
**\<suraeNoether>** this makes me want us to write our own 25519 library with pippinger and blackjack  
**\<sarang>** nopenopenope  
**\<suraeNoether>** i know, never roll your own crypto  
**\<suraeNoether>** it may be worth incentivizing the creation of test suites, though  
**\<sarang>** This was a case of good algorithm deployment, nothing more  
**\<suraeNoether>** not libraries themselves, but test suites for libraries  
**\<sarang>** but one that was on the back burner for a while  
**\<suraeNoether>** but that's another discussion  
**\<sarang>** Anyway, that's my Big News for today  
**\<suraeNoether>** gratzo  
**\<sarang>** Tests are available on mooo's branch  
**\<suraeNoether>** anyone have any questions for sarang?  
**\<sarang>** for anyone wanting to play with them  
**\<sarang>** https://github.com/moneromooo-monero/bitmonero/tree/bp-multi-aggregation-pippenger  
**\<sarang>** thanks to mooo for fast coding of my shit Python prototypes  
**\<sarang>** =p  
**\<suraeNoether>** mooo is actually seven dudes in singapore  
**\<sarang>** I often agree with this hypothesis  
**\<suraeNoether>** okay, if no one has any questions, i'll bring up a discovery i've made  
**\<iDunk>** That would explain memory lapses.  
**\<suraeNoether>** in terms of LSTAGs and unforgeability  
**\<philkode>** Those are amazing size and speed up figures, really well done guys  
**\<sarang>** ty philkode  
**\<suraeNoether>** yes, sarang and moneromooo are MVPs of the ... year so far  
**\<suraeNoether>** so, unforgeability: the Musig paper uses a double fork to accomplish their proof of unforgeability.  while working through a ring-signature version of the same approach, i realized something  
**\<sarang>** suraeNoether: wasn't it three forks?  
**\<sarang>** or was that changed with the fixes  
**\<suraeNoether>** it was 2 before and after the changes, whereas i initially thought we would need 3 for the ring signatures  
**\<sarang>** oh ok, must be thinking of something else, nvm  
**\<suraeNoether>** but, i was not just trying to do a ring signature version of the proof, but also a recursive-aggregation version, where keys have trees of family members, and as long as everyone is participating, they can cooperate to construct a signature simultaneously, in a big recursive signing party  
**\<suraeNoether>** now, one fact about unforgeability proofs is that they often use rewinding-on-success or forking to prove their unforgeability, and every time you do this, the security bound gets looser and looser  
**\<suraeNoether>** what i realized is that forking ring signatures the way i've been trying to do it, with trees of family histories of keys... the bound gets so freaking loose that you lose non-negligibility \*if the size of the family histories is a security parameter\*  
**\<suraeNoether>** in other words: the forking approach to proving unforgeability, afaik one of the only real ways to prove equivalence wiht the DL hardness problem, \*seems to not be sufficient to allow an attacker to get the DL\*  
**\<suraeNoether>** this \*suggests\* that violating the unforgeability of ring signatures is much harder than regular signatures  
**\<suraeNoether>** it's not a proof on the relation between hardness, but it means that classic proof techniques \*may fail\* to prove unforgeability for arbitrary recursive key aggregation  
**\<suraeNoether>** so, in other words: we have to fork once for each use of the honest key in the family history, which could be a big tree of re-uses of the same key, and in this case, the attacker can't present a forgery...  
**\<suraeNoether>** so, long story short: i'm looking into merely restricting things to the non-recursive case, proving it secure in that case and remarking on the crappiness of the bound (instead of forking twice as in musig, we have to fork 2+ringSize times in this case, so you have a really really loose security bound, but you still hav ea non-negligible advantage  
**\<suraeNoether>** and that's what i've been working on  
**\<suraeNoether>** I wanted to be explicit about this particular fact, because it may end up being useful later: rewind/forking lemmas applied recursively cause adversaries to lose non-negligible advantages very quickly  
**\<suraeNoether>** any questions in that regard before we start talking about churning and infographics and microsoft and github?  
**\<UkoeHB>** jw about your eta for the paper  
**\<sgp\_[m]>** That all went way over my head, but hopefully I can understand your work with churning!  
**\<UkoeHB>** Sounds like you have some interesting stuff to work with  
**\<suraeNoether>** UkoeHB: if i restrict the scope of this thing appropriately, i'll be posting a version of it later today that is a sketch of my intentions and then a more correct version of it later this week. I don't want this thing to take more time than the remainder of June.  
**\<UkoeHB>** Cool :)  
**\<suraeNoether>** and i've really pared this thing down, it's a lot smaller and more clear at this point  
**\<suraeNoether>** now churn  
**\<suraeNoether>** the biggest concern is that you receive some money from or send some money to an adversary (or first one then the other). if someone is "watching you," so to speak, then even if your transactions appear to look like background noise to the average observer and match the statistical pattern of the monero economy (somehow), the "watcher" can still sort of tell you are churning. they can look at an AML/KYC  
**\<suraeNoether>** exchange's records with a warrant, for example, and see that an abnormal \*number\* of your transactions reference one of their poison outputs, even if the depths and distribution of those references appear to look like background noise  
**\<suraeNoether>** to avoid this, even innocent parties have to reference these poison outputs \*quite often\*  
**\<suraeNoether>** one solution is that \*everyone always does a lot of churning.\*  
**\<suraeNoether>** not just people who care about securtiy  
**\<suraeNoether>** sort of like ring size minimums  
**\<suraeNoether>** i don't know how one could enforce that, thoguh  
**\<sgp\_>** I think the only way would be a large minimum (likely impractical) ringsize, yeah  
**\<sgp\_>** Difficult to force people to send transactions  
**\<suraeNoether>** not just a minimum ring size that is large, but some sort of structure that requires "you can send this to (A,B), but only if you send it through (X,Y) and (W,Z) first"  
**\<suraeNoether>** but if we do that  
**\<suraeNoether>** we're talking about a massive blockchain blowup  
**\<sgp\_>** hmm  
**\<sgp\_>** The input selection algorithm can't help with this?  
**\<erciccione\_[m]>** maybe a timed pop-up on the GUI-CLI saying: churning help your privacy, do you want to churn now? every week or so (i don't know how stupid this can sound)  
**\<suraeNoether>** input selection could be tweaked so that inputs are chosen with a probability that is inversely proportional to the number of references that have been made (so that no output goes long without being referenced a few times)  
**\<sgp\_>** I think that's more reasonable  
**\<suraeNoether>** erciccione\_[m]: we have to weigh the benefits of security against the increased weight of our blockchain in the long term, if we are going to go down that route  
**\<suraeNoether>** so, i'm going to write up a proposal on input selection algorithms  
**\<sgp\_>** Do you have an idea how many times you want each output referenced? Obviously the more the better all else being equal  
**\<suraeNoether>** simply the more the better  
**\<UkoeHB>** Outputs can't be referenced more than ringsize number of times on average  
**\<erciccione\_[m]>** shouldn't the ringsize become larger anyway after BP get implemented?  
**\<sgp\_>** It sounds like you're hoping for a ringsize increase too then  
**\<suraeNoether>** UkoeHB: \*can't\* be, or under mild assumptions, will asymptotically tend toward the ring size?  
**\<sgp\_>** Well, the average number of references depends on the average number of inputs and outputs in transactions  
**\<sgp\_>** There are likely more outputs than inputs on average, meaning that the references should be less than the ringsize over a long term  
**\<suraeNoether>** each output can be referenced at most R\*number of transactions ahead of it in the blockchain. so the total number of references would be R\*N + R\*N-1 + ... + R\*2 + R, so the maximum average would be R\*(N-1)/2 references (although the true average would be much smaller in general)  
**\<UkoeHB>** How could the average output be referenced more or less than ringsize, if total number of references is ringsize\*numouts?  
**\<sgp\_>** Of course there could be periods of mass consolidation where it could be the opposite  
**\<suraeNoether>** anyway, this is all a bit accessory to the point, which is that the probability that an output is selected should be jointly proportional to (1) 1/# of references that already exist and (2) the gamma distribution from bitcoin's age data (although combining data from litecoin would be helpful)  
**\<suraeNoether>** and probably only from the non-blackballed list  
**\<m2049r[m]>** dynamic ringsize is not an option based on which inputs are actually used?  
**\<UkoeHB>** It makes sense. Reduce reference spread  
**\<suraeNoether>** m2049r[m]: eh, I usually think about ring size only in terms of the minimum, because people really shouldn't be advertising their behavior by selecting out-of-the-ordinary ring sizes  
**\<sgp\_>** those two sound good suraeNoether  
**\<suraeNoether>** the question earlier about larger ring sizes  
**\<sgp\_>** and hope that people do the third  
**\<UkoeHB>** Could you poison outputs? Simply reference one a bunch of times so it becomes extremely improbable. Then, when you spend it, it's probably real  
**\<dEBRUYNE>** because people really shouldn't be advertising their behavior by selecting out-of-the-ordinary ring sizes <= A good argument to enforce static ring sizes after the next HF  
**\<suraeNoether>** UkoeHB: yes, you could, actually! nuts.  that's the consequence of using things like temporal heuristics and selection frequency to try to mask erratic human behavior :(  
**\<dEBRUYNE> \<UkoeHB>** Could you poison outputs? Simply reference one a bunch of times so it becomes extremely improbable. Then, when you spend it, it's probably real <= You could still reference it after spending it?  
**\<UkoeHB>** dEBRUYNE: if selection probability is 1/(prev references), someone can reference an output many times  
**\<UkoeHB>** reduces likelihood future references ARENT real  
**\<suraeNoether>** dEBRUYNE: NSA wants to know if an output has been spent. So they manufacture 1000 ring signatures referencing it. almost no one except the true spender will include it in any future ring signatures because it is 1000 times less likely to be selected at random. so after the nsa do this experiment, the first time the output in question appears on the blockchain is very likely a true spend  
**\<sgp\_>** "I send money to you, knowing which output I give you. Then I make 100 transactions with this output as a decoy, meaning the only likely other transaction that will include it is the real one"  
**\<suraeNoether>** it's real bad  
**\<suraeNoether>** it's a \*real bad idea.\*  
**\<UkoeHB>** maybe we just triple ring size after BP  
**\<dEBRUYNE>** sgp\_: But an observer doesn't know when it is used as decoy and when it is actually spent  
**\<suraeNoether>** it reverses the "guess newest" rule from monerolink and turns it into a "guess the last possible spender"  
**\<sgp\_>** dEBRUYNE right, but if the input selection algorithm is tweaked to prefer lesser-used outputs, then it may not be used outside of the actual transaction  
**\<suraeNoether>** dEBRUYNE: no, but an observer can be pretty sure that the output has been spent. besides, if 1000 transactions referencing an output P occur in a single block, and then a week later a single transaction with P occurs, that is strong circumstantial evidence that this attack occurred and the single lonely P from later in the week is likely the true spender  
**\<needmoney90>** Why not choose probabalistically between different selection algos  
**\<UkoeHB>** Or define a 'ring sig ambiguity tree' factor, analyze as function of ring size, and select a new ring size w/ justification. Instead of arbitrarily increasing  
**\<needmoney90>** One which prioritizes unused outputs, one which chooses uniformly  
**\<hyc>** why wouldn't attacker spread txs across many blocks?  
**\<needmoney90>** For example  
**\<dEBRUYNE>** suraeNoether: Why wouldn't he spend it in one of those 1000 transactions and reference it as decoy a week later?  
**\<sgp\_>** Some may be stronger than others. A uniform one falls under the shortfall where the newest is typically the real one, and this phenomemon will get worse over time  
**\<dEBRUYNE>** You have to account for the alternative scenario here as well  
**\<suraeNoether>** hyc \*shrug\* they may be impatient, or they may want to expose the true spender to the whole community maliciously instead of keeping the information to themselves. there are other attack models  
**\<UkoeHB>** I mean, new ring size that synergizes with a churn strat  
**\<needmoney90>** Sgp\_ the point was to have multiple selection strategies, where one is randomly chosen, and some of them have a chance to use a ring member previously used 100x  
**\<suraeNoether>** dEBRUYNE: the point is merely that this could be exploited to make it easier for an attacker to tell if a given output they don't control has been spent. that's all. the specific threat models aren't as important as the observation that it can be exploited \*somehow.\*  
**\<suraeNoether>** in other words: since output reference frequency can be adversarially controlled, we can't use it as part of our input selection method  
**\<needmoney90>** So someone using a ring member you poisoned by including it in a ring a lot doesn't mean they're the real spender  
**\<needmoney90>** They could have just used a selection algo that chose it  
**\<sgp\_>** I still think it is good to adapt the selection algorithm with this criteria in mind, perhaps only to a small extent though. Maybe a 10-20% preference  
**\<suraeNoether>** it does if all wallet software selects outputs \*in inverse proportion\* to frequency of spending  
**\<suraeNoether>** which is what we are talking about needmoney90   
**\<needmoney90>** Yes surae, I'm saying we can add multiple selection algos, where one of them doesn't choose with inverse proportion  
**\<needmoney90>** Even if a given tx only has a 10% chance of using it  
**\<UkoeHB>** sgp\_: even in that case, it gives block chain analysts more power to reduce effective ring sizes  
**\<needmoney90>** It adds plausible deniability  
**\<suraeNoether>** needmoney90: yes, okay,  but to give you an idea of the challenges we face here, let's reduce it to a simple case where we have two algorithms, A1 and A2  
**\<suraeNoether>** and we pick one with probability p and the other with probabiltiy 1-p  
**\<UkoeHB>** Any programmatic deviation from natural distribution can be analyzed  
**\<sgp\_>** Yeah, but only by ~1 or 2 UkoeHB. May be less than the reduced risk of some outputs being referenced few times  
**\<needmoney90>** It will be apparent which was used  
**\<needmoney90>** For sure  
**\<needmoney90>** Hm  
**\<suraeNoether>** now an attacker who has success with algorihtm A1 just needs to make the attack 1/p times  
**\<suraeNoether>** instead of only once  
**\<suraeNoether>** so, this brings us back towards plausible deniability, which is good  
**\<suraeNoether>** but it still isn't protection against the attack  
**\<needmoney90>** We can continue in lounge after the meeting, sorry to derail  
**\<suraeNoether>** if you have many algorithms, this increases the sample size the attacker needs to attack any one of them  
**\<UkoeHB>** sgp\_:  it might ok if we increase ring size dramatically  
**\<suraeNoether>** which is that plausible deniability, which is good, but still gamable  
**\<suraeNoether>** UkoeHB: any deviation from "natural" is identifiable, you are right, and the problem is we have small anonymity subsets chosen from a (still unfortunately rather small) anonymity superset  
**\<suraeNoether>** there merely isn't a good statistical mask for behavior here, the fix has to be to replace ring sizes  
**\<ArticMine>** You mean increase ring size  
**\<UkoeHB>** Any good prospects for escaping ring sigs?  
**\<suraeNoether>** erg.... replace ring signatures\*  
**\<ArticMine>** with ...  
**\<sgp\_>** Is there anything else that works without trust?  
**\<suraeNoether>** whatever comes next :)  
**\<suraeNoether>** there are untrusted stark set-ups that are slow  
**\<suraeNoether>** or use weird pairings  
**\<suraeNoether>** i'm looking into options  
**\<suraeNoether>** but the fact of the matter is, small anon sets will need to go for this problem to really be solved  
**\<suraeNoether>** in the meantime, churning isn't going to help you if all the transactions you deposit on your AML/KYC exchange originated somehow from a malicious watcher like the DEA or NSA or something  
**\<suraeNoether>** and churning more than 3-4 times is probably overkill if all you are worried about is helping flesh out our anonymity sets  
**\<gingeropolous>** so ... what should we put on getmonero.org regarding churning... ? :)  
**\<suraeNoether>** gingeropolous: give us a few days to write up a formal thing  
**\<gingeropolous>** cool  
**\<suraeNoether>** gingeropolous: because i want some specific numbers on how much you are really exposing yourself   
**\<sgp\_>** Can you give us a hint on the relationship between churning and ringsize? How significant is it?  
**\<UkoeHB>** exponential?  
**\<suraeNoether>** well, the naively computed anonymity set of a monero transaction tree of depth H with ring size R is approxiamtely O(R^H)  
**\<suraeNoether>** so  
**\<suraeNoether>** the question is "how many times are you going to pull a poison jelly bean out of this jar with R^H jelly beans in it, only one of which is poison?"  
**\<suraeNoether>** oh, "while grabbing R jelly beans at a handful?"  
**\<suraeNoether>** and these answers require some statistics involving the hypergeometric distribution, or binomial approximations...  
**\<UkoeHB>** I'm having flashbacks  
**\<suraeNoether>** hahah  
**\<suraeNoether>** let me summarize: churning 80 times wiht ring size 10 gives you more possibilities than the number of fundamental particles in teh universe  
**\<UkoeHB>** Ok we are at end of meeting so I'll jump in  
**\<suraeNoether>** churning 7 or 8 times with ring size 10 gives you more possibilities than the monero blockchain  
**\<suraeNoether>** but a lot of these are collisions  
**\<UkoeHB>** Final draft: open for edits and feedback. Plan to publish in 2 weeks  
**\<UkoeHB>** https://www.pdf-archive.com/2018/06/04/zero-to-monero-first-edition-v0-20/zero-to-monero-first-edition-v0-20.pdf  
**\<suraeNoether>** by "collisions" i mean 'the true anonymity set is much smaller.'  
**\<UkoeHB>** sarang will be happy to see pg 50 (57 of pdf)  
**\<suraeNoether>** if everyone on the network churned 2-3 times, we'd all be better off. anyone who lives in a sensitive land of security nightmares should churn maybe 8 times, but definitely shouldn't be using AML/KYC exchanges, and if they do, the vast majority of their deposits at those exchanges should \*not\* be sensitive.  
**\<sgp\_>** makes sense suraeNoether, given the selection algorithm  
**\<suraeNoether>** UkoeHB: good job, i'll try to read it before the end of the week  
**\<UkoeHB>** awesome thanks :)  
**\<suraeNoether>** i wanted to ask if folks were worried about github and microsoft and alternatives we may want to look into, but i think that can wait till later  
**\<suraeNoether>** anyone have any last questions before we finish up?  
**\<needmoney90>** Any official status updates on atomic swaps?  
**\<suraeNoether>** needmoney90: dual output ring signatures for refund transactions should enable atomic swaps, but there are some security concerns involved with those that will make it easier to determine spent outputs  
**\<suraeNoether>** so, there has been progress made, sarang wrote a technical note on the dual output sigs... but we are examining "what it means" for us to have two outputs with a differentiating/trigger block height.  
**\<suraeNoether>** it is too easy to see if one or the other has been spent based on block height, and introduces some temporal stuff: if a transaction happens right after a trigger block height for a ring member, that ring member is likely to be the true spender in a refund  
**\<ArticMine>** UkoeHB Great job. I was looking at the block size scaling part  
**\<suraeNoether>** if the block height is encrypted, there are different problems that show up  
**\<ArticMine>** This is on my reading list for this week  
**\<suraeNoether>** oooh, i like reading lists  
**\<suraeNoether>** okay, any other questions?  
**\<UkoeHB>** oops mistake in range proof verification. 63 is for A+B  
**\<suraeNoether>** okay, \</meeting> :D  
