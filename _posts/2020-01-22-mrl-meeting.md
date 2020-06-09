---
layout: post
title: Logs for the MRL Meeting Held on 2020-01-22
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** GREETINGS  
**\<binaryFate\>** hi!  
**\<sgp\_\>** hello  
**\<suraeNoether\>** Hi  
**\<koe\>** hiya  
**\<Isthmus\>** holla  
**\<sarang\>** Let's move to ROUNDTABLE  
**\<sarang\>** Isthmus: you posted some data on the agenda; care to discuss?  
**\<sarang\>** Link to data: https://github.com/monero-project/meta/issues/430#issuecomment-576455137  
**\<Isthmus\>** Sure  
**\<Isthmus\>** First, glanced at distribution of number of outputs on miner transactions  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/OB2UWpjs/image.png  
**\<Isthmus\>** This is mostly a historical novelty from back in the days of denominated XMR - since RingCT became mandatory at block 1400000 all miner transactions have been 1OTXs.  
**\<Isthmus\>** \*single-output coinbase transactions  
**\<sarang\>** So that chart is for \_all\_ miner txns?  
**\<sarang\>** Throughout all of time?  
**\<Isthmus\>** From genesis block to last week  
**\<Isthmus\>** Courtesy of n3ptune's magic database xD  
**\<Isthmus\>** Another mostly historic novelty - altruistic transaction selection by miners who would include many/large transactions in their blocks, incurring a coinbase penalty that is not offset by the added fees. (In other words, they would have had a higher total block payout by mining an empty block.)  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/0pcNROcT/image.png  
**\<Isthmus\>** color is size, starting at blue = small  
**\<Isthmus\>** This seems to not be a very common practice these days  
**\<Isthmus\>** Altruistic mining could be banned at the protocol level, but at the moment I'm not inclined to do so  
**\<koe\>** more advanced altruism based on suboptimal tx inclusion will involve more intensive analysis, which I provided pseudo code for this week, if that path is chosen  
**\<suraeNoether\>** Any comparison against partially filled blocks rather than empty blocks?  
**\<Isthmus\>** @koe yea do you want to jump in  
**\<sarang\>** Yeah koe please do  
**\<sarang\>** koe: if you have a link to the pseudocode can you include it here?  
**\<koe\>** well this week I: made pseudo code for Isthmus blockchain analysis, deep proofreads of several ZtM chapters, talked with cohcho and jtgrassie about uniformity of coinbase tx  
**\<koe\>** more or less improved a roadmap of future monero developments: https://justpaste.it/5io6e which we can talk about some items  
**\<koe\>** latest ztm2 draft, I have honestly been pushing off multisig edits, but not making no progress https://www.pdf-archive.com/2020/01/22/zerotomoneromaster-v1-0-20/zerotomoneromaster-v1-0-20.pdf  
**\<sarang\>** Enforcement of exact block rewards seems straightforward and a good idea  
**\<koe\>** pseodo code https://paste.debian.net/1127152/  
**\<sarang\>** Regarding ZtM, are there topics in progress for which you'd like particular information or assistance?  
**\<koe\>** currently working on multisig, and have already gone through most documentation available, but there are some things that aren't clear despite documents  
**\<koe\>** so if anyone knows about multisig, Id like to discuss with them  
**\<koe\>** otherwise will dive into code base  
**\<suraeNoether\>** I'm not super familiar with the code base, but I'm familiar with what it's supposed to abstractly represent  
**\<sarang\>** Thanks koe  
**\<suraeNoether\>** So if you have questions koe about how things are supposed to work (as compared to how things are currently implemented)  
**\<suraeNoether\>** Lmk  
**\<koe\>** ok Ill hit you up  
**\<sarang\>** Anything else of interest to share koe? You've clearly been busy!  
**\<koe\>** well there are all the things in the roadmap, in particular enforcing 1 output from coinbase (since Isthmus found literally all coinbase for 4 years have been single output), and possibly enforcing single-type ring membership (only coinbase ring emmbers, only rcttypebulletproof2 ring members) since 99.5% of coinbase are owned by pools who are easy  
**\<koe\>** to fingerprint  
**\<sarang\>** Single-type enforcement was brought up a few times by sgp\_ in the past as well  
**\<koe\>** see https://minexmr.com/pools.html where 99.5% of hash is accounted for  
**\<sarang\>** My concern was that a full segregation of coinbase outputs means certain heuristics are only moved "down chain" by a single hop  
**\<sarang\>** Meaning there's likely improvement for sure, but perhaps more marginal than desired  
**\<atoc\>** koe, do you still need proofreading of ZtM or are you good on that?  
**\<suraeNoether\>** I'm in favor of enforcing single output coonbase txns by consensus. I'm in favor of enforcing block reward. I'm tentaticely in favor of type-restricted rings.  
**\<koe\>** always need proofreading :)  even after it's published lmao, I've received some good emails that are incorporated in v2  
**\<sgp\_\>** I actually was going to re-introduce the topic again here to keep it on everyone's minds, so nice timing  
**\<sgp\_\>** related: https://medium.com/@JEhrenhofer/lets-stop-using-coinbase-outputs-da672ca75d43  
**\<atoc\>** koe, I am have some notes that I need to send you.  
**\<atoc\>** I will try to get them to you soon.  
**\<koe\>** ill look forward to them :)  (email me)  
**\<moneromooo\>** Enforcing single output coonbase txns would prevent p2pool.  
**\<atoc\>** will do :)  
**\<suraeNoether\>** Atoc, I believe that my mojojo branch is no longer bugging out, although data isn't being written to file how I want. The actual tracing game script I am running will be pushed soon(tm)  
**\<koe\>** jtgrassie is p2pool your project?  
**\<moneromooo\>** AFAIK nobody is doing it yet.  
**\<suraeNoether\>** But simulator is now successfully simulating a monero economy between Alice, Eve, and Bob to model flavors of EABE  
**\<atoc\>** cool suraeNoether I have been falling a bit behind and will catch up today and get you my thoughts  
**\<atoc\>** good to know the unit tests are working fine  
**\<atoc\>** Nice  
**\<suraeNoether\>** It's all good, I'll still be plugging away  
**\<sarang\>** Any other questions/comments for koe?  
**\<sgp\_\>** no specific questions, but I have a related topic for mining pools besides coinbase outputs when time allows  
**\<sarang\>** OK, first, is Isthmus back? He had to step away briefly  
**\<sarang\>** Isthmus: care to finish up your data?  
**\<Isthmus\>** Also, it's not "kicking the can down the road" depending on how you implement it  
**\<sarang\>** (then we can move to sgp\_)  
**\<Isthmus\>** But yea, moving on  
**\<sarang\>** Hold on  
**\<Isthmus\>** Discovered that everybody seems to use the miner\_tx differently, including some really strange stuff like many blocks with 60 B of null padding(??!) https://xmrchain.net/tx/7dfcc4e5d8bd772e3373e51d4140052121503d9b4f3cb6587251292bf06ced9a  
**\<sarang\>** Why would coinbase-only not do this?  
**\<sarang\>** If you assume the spend patterns would be sufficiently different, I agree  
**\<Isthmus\>** Uhm, I could get in the weeds with this  
**\<Isthmus\>** On like 4 levels  
**\<Isthmus\>** lol  
**\<Isthmus\>** From an \*on chain\* perspective, there's two questions we can ask  
**\<Isthmus\>** 1) Is this ring spending a coinbase  
**\<suraeNoether\>** \me pulls up lawn chair  
**\<Isthmus\>** 2) Which coinbase is this ring spending  
**\<Isthmus\>** #1 is hard to hide  
**\<Isthmus\>** #2 can be accomplished  
**\<Isthmus\>** making #2 unanswerable can be accomplished  
**\<Isthmus\>** I'm an evil exchange  
**\<Isthmus\>** With current system, I can fingerprint which pools my users belong to  
**\<Isthmus\>** Aah ha, this person makes monthly deposits that are 4-input transactions each spending from a ring with 62  B null padding, so I know that they have about 3000 H/s attached to minexmr.com  
**\<Isthmus\>** \*each spending from a coinbase whose miner tx\_extra has...  
**\<Isthmus\>** But with coinbase-only txns, we strip the pool-to-user link  
**\<sarang\>** fair  
**\<Isthmus\>** Sure, as an exchange I can look at each user, and their average number of coinbases per ring  
**\<Isthmus\>** And if it's more coinbases per average I could suspect that they're a miner  
**\<Isthmus\>** But that's about all  
**\<sgp\_\>** while there are some concerns with coinbase-only having only a layer of separation, I think the real benefits are being minimized slightly, especially to non-mining users  
**\<koe\>** also, coinbase is currently polluting normal tx rings, since a large proportion are identifiably spent/not spent  
**\<sarang\>** koe: the newer weighted selection algorithm does help this to an extent (relative only to tx weight, nothing else)  
**\<suraeNoether\>** One thing that is important about privacy is that third parties that have data like this are lawyer magnets. If an exchange couldn't possibly identify their mining user habits, they can't be hacked or subpoenaed to determine one of their customer's hash rates  
**\<Isthmus\>** In my ideal world, we have 13 ring members and two selection algorithms. Precisely 11 of the members are non-coinbase, selected with current algorithm. Precisely 2 of the members are coinbase(/coinbase-only) that are selected independently.  
**\<sgp\_\>** Isthmus: that would not be good for many reasons :)  
**\<sgp\_\>** notably, you need a set of at least 3  
**\<Isthmus\>** Oh, I'm not married to the numbers  
**\<Isthmus\>** Just making an example  
**\<Isthmus\>** (trying to avoid the misconception that adjusting our coinbase ring member selection algorithm will somehow be zero-sum with the rest of the anonymity set or users)  
**\<nioc\>** koe: I know that rbrunner (sp) made an implementation of multisig so it might be good to speak with him.  I don't see him online now and haven't seen him for a little while but should still be around  
**\<koe\>** on the other hand, I wonder if enforced ring types is too much like reacting to how people use it; although the same could be said for many other protocol rules  
**\<sarang\>** Anyway, I derailed Isthmus's discussion of his other data with this topic...  
**\<Isthmus\>** Also, let M be the minimum plausible age between any output and it's temporally closest ancestor coinbase  
**\<Isthmus\>** :- P  
**\<Isthmus\>** That can either be a plotable feature, or fixed for all transactions at zero  
**\<koe\>** nioc ok Ill reach out  
**\<Isthmus\>** I think n3ptune and I may plot this for all outputs just to show the point  
**\<Isthmus\>** Other two things on the agenda - encrypted unlock time, and tx\_extra in coinbases  
**\<Isthmus\>** I can get into these if people are interested  
**\<sarang\>** Sure, I saw your information about encrypted locks  
**\<sarang\>** (I also wish to address timelocks anyway\_  
**\<sarang\>** )  
**\<Isthmus\>** Cool, lemme copypasta real quick  
**\<Isthmus\>** Oh, and for the encrypted + enforced unlock time, we have to decide on a format. Currently, 3 things are being put in the unlock field:  
**\<Isthmus\>** Small integers like "12", presumably to be interpreted as height differences, i.e. "unlock in 12 blocks"  
**\<Isthmus\>** Large integers like "1980000", presumably to be interpreted as block heights  
**\<Isthmus\>** Very large integers like "1578561720", presumably to be interpreted as unix timestamps  
**\<Isthmus\>** While normally I'd be loathe to bring real world time onto the blockchain, I am inclined towards this approach: encrypted unlock time is a future timestamp recorded in unix seconds, and each ring must include a range proof comparing the unlock time to the oldest or youngest ring member (I haven't fully thought this through).  
**\<Isthmus\>** The minimum lock time of 10 is trivial for any outside observer/miner to enforce by delaying (or rejecting) transactions with rings containing members less than 10 blocks old. This requires no mathematical validation within the transaction.  
**\<Isthmus\>** The encrypted unlock time could actually be defined as timestamp - 1500000000 to save a bit of space by removing the offset from some of time between 1970 and deployment, but that could be overengineering.  
**\<sarang\>** We have a relatively efficient way to do encrypted timelocks, as introduced in DLSAG  
**\<moneromooo\>** Small integers are block heights. If you put 12 now, it's pointless.  
**\<suraeNoether\>** I'm 100% in support of encrypted lock times... I know that sarang has done some work into the requirements on that in addition to isthmus  
**\<sarang\>** The method is described here: https://github.com/SarangNoether/skunkworks/tree/timelock  
**\<sarang\>** It works as follows: outputs come equipped with a timelock Pedersen commitment (units aren't relevant for this at the moment)  
**\<moneromooo\>** Small integers are block heights. If you put 12 now, it's pointless."  Ahhahahaha that's what everybody is doing. Lemme make a plot real quick  
**\<sarang\>** Signatures come equipped with an auxiliary plaintext time that's chosen semi-at-random  
**\<sarang\>** as well as a particular auxiliary commitment  
**\<sarang\>** There is a range proof constructed using all these values, and CLSAG/MLSAG gets a new set of entries too  
**\<sarang\>** This maintains signer anonymity, shows the timelock has passed, but does not specifically reveal information about it  
**\<sarang\>** The cost for CLSAG is 1 new group element; the plaintext timelock is replaced by a plaintext intermediate value  
**\<sarang\>** and the auxiliary per-signature commitment is 1 new group element  
**\<binaryFate\>** does this mean the no-locktime transactions will be indistinguishable from locktime ones? Or just that the locktime ones will have an obfuscated time lock?  
**\<sarang\>** The rangeproofs can be worked into the existing bulletproofs, likely for free due to padding  
**\<Isthmus\>** Indistinguishable plz  
**\<sarang\>** Depends on how it's implemented  
**\<suraeNoether\>** indistinguishable would probably require no-locktime txns to have a dummy encrypted locktime  
**\<sarang\>** So the cost is 64 extra bytes per signature, and 32 bytes per extra timelocked output  
**\<sarang\>** Yep, you'd include zero locktime  
**\<sarang\>** and the rest of the process proceeds the same  
**\<sarang\>** So this is not free, but it's not terribly expensive either  
**\<sarang\>** Anyway, this information is to supplement what Isthmus brought up about how timelocks are handled now  
**\<binaryFate\>** It's completely offtopic but I personally like the idea that we can embed an arbitratry hash in a transaction in a way that is indistinguishable from other txs, for timestamping purposes.  
**\<binaryFate\>** Would only be half or a quarter of a hash in that case though  
**\<binaryFate\>** (using the encrypted time lock field)  
**\<Isthmus\>** @binaryFate if we add an enforced encrypted memo field, that would be a very good use case  
**\<suraeNoether\>** binaryFate: well, you could always pick your txn key as the Hp of some message. is that not what you mean?  
**\<binaryFate\>** it works too, but require you don't lose your local storage.  
**\<suraeNoether\>** sure. you want to be able to extract the message also, something like that?  
**\<binaryFate\>** just exhibit the message later on and point out to a past hash in the blockchain that timestamps it, without people taking notice this was a timestamping tx.  
**\<binaryFate\>** but if you have message you can get hash back, so tx key works perfectly I guess  
**\<suraeNoether\>** oh neat  
**\<binaryFate\>** anyway, sorry to derail  
**\<sarang\>** Isthmus: take it away :)  
**\<Isthmus\>** Derailing conversation is a key part of research! :- D  
**\<Isthmus\>** I think that's where 2/3 of our interesting stuff comes from  
**\<suraeNoether\>** \*nod\* i prefer these lively research meetings for sure  
**\<Isthmus\>** Anyways, last topic I had has been discussed significantly since I initially mentioned it. So I'll intro and then duck out of the way  
**\<sarang\>** You had some notes, Isthmus, on how timestamps are represented  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/Ovp9yP0j/image.png  
**\<sgp\_\>** I will most likely need to take off, so I'll bring up my other mining pool ring signature proposal (which I mentioned in the past) when I get back  
**\<atoc\>** @isthmus agreed, it seems that new ideas fluster that way.  
**\<Isthmus\>** Oh go @sgp\_  
**\<sgp\_\>** ah, so very fast  
**\<sgp\_\>** there are special ways we can construct rings for public mining pools to protect the "integrity" of outputs (make it no longer publicly known what transactions they are spent in)  
**\<sgp\_\>** for public mining pools that share transaction histories, it's clear which outputs are change outputs, which are later spent by the pools  
**\<sgp\_\>** to avoid this, public pools can select rings using exclusively decoys that they create as payments to miners  
**\<sgp\_\>** that way, outsiders have no way to distinguish the output from the other outputs given to miners. saves one output per payment, per public pool  
**\<sgp\_\>** this is not a consensus change, but it would require a separate "public pool selection mode" or similar  
**\<sgp\_\>** Isthmus: how? payouts won't be from coinbase outputs  
**\<Isthmus\>** Aah, maybe I was thinking of something slightly different  
**\<Isthmus\>** Carry on :- )  
**\<sgp\_\>** this protects pool change outputs from being known as spent by the pool in specific transactions  
**\<sgp\_\>** that's about it, just wanting to make sure this idea is resurrected, since I introduced it nearly 2 years ago now  
**\<sarang\>** Thanks sgp\_  
**\<sarang\>** In the interest of time, Isthmus please go ahead!  
**\<Isthmus\>** Everybody seems to use the miner\_tx differently, including some really strange stuff like many blocks with 60 B of null padding(??!) https://xmrchain.net/tx/7dfcc4e5d8bd772e3373e51d4140052121503d9b4f3cb6587251292bf06ced9a  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/tXHruCE0/image.png  
**\<Isthmus\>**  This has implications for privacy of all users. For example, I have a list of blocks mined by the pool that added 60 B null padding to each miner transaction. When this person creates multiple-input transactions to claim the reward, ring signatures offer them no protection.  
**\<Isthmus\>** (Multi input + miner fingerprint is statistically noisy, so we know when those outputs are really spent, and can rule them out as decoys in other transactions.)  
**\<Isthmus\>** To avoid fingerprinting, it's important that any implementation mimics the full hierarchy on any block. For example, if we accommodate {nonce, pool, proxy}, then every miner (including solo mining core software) should put random data in pool & proxy. Otherwise we've just made a fancier way to leave the same fingerprint. :-P  
**\<Isthmus\>** Anyways, others in this room have made a lot of progress on how to address this, so I'll let them jump in  
**\<sarang\>** Anyone have anything to add in particular to this?  
**\<suraeNoether\>** nope, but I have to get going  
**\<sarang\>** OK, suraeNoether: any brief update before you go?  
**\<sarang\>** Otherwise, no worries  
**\<koe\>** sarang is this the encrypted timelock? https://justpaste.it/2754y  
**\<suraeNoether\>** just that sarang and i have been having some extremely deep discussions about unforgeability in CLSAG and the crappiness of linkability models... we are nearing some very valuable improvements to d-CLSAG as written...  
**\<suraeNoether\>** i'll let him describe more; i've also gotten my matching simulations (apparently) working correctly on my matching-mojojo branch of mrl-skunkworks  
**\<suraeNoether\>** other than that, i have to get going  
**\<suraeNoether\>** sorry :(  
**\<suraeNoether\>** i'll drop in later today for more of an update  
**\<sarang\>** koe: you include the auxiliary timestamp in the signature's extra commitment in the model I worked up  
**\<sarang\>** Isthmus: anything else that you hoped to share?  
**\<sarang\>** (sorry, trying to ensure everyone gets a chance to finish their presentations)  
**\<Isthmus\>** Thanks, I'm outta new material  
**\<sarang\>** OK, thanks Isthmus  
**\<sarang\>** I worked up some stuff on timelocks (shared earlier), did a blag post with sgp\_ relating to supply auditing (to answer questions that often come up), and got into the weeds on security models relating to linkability  
**\<sarang\>** Linkability meaning the formal definition used in linkable ring signatures, not any particular transaction linking  
**\<sarang\>** koe: what you have may be algebraically equivalent; I'll take a look shortly  
**\<sarang\>** OK, did anyone else have something to share that was missed?  
**\<sarang\>** So many things to discuss today!  
**\<koe\>** well does anyone have thoughts on enforced sorted TLV format for the extra field? I have spammed up the channel a bit recently, with that topic  
**\<sarang\>** Can you recap the benefits and tradeoffs briefly, for those who didn't see the earlier discussion?  
**\<moneromooo\>** If someone wants to stuff some random data in there, it's as visible as now, no ?  
**\<koe\>** and pursuing coinbase extra field standardization by seeking an inter-pool committe  
**\<sarang\>** (note that monerologs.net has logs of this and other channels available)  
**\<moneromooo\>** What's an inter-pool commite ?  
**\<koe\>** committee between pools  
**\<koe\>** composed of  
**\<moneromooo\>** Oh you mean just talk to pool ops ?  
**\<koe\>** lol yeah  
**\<koe\>** these things are called standardization committees in industry  
**\<koe\>** benefits of enforced sorted TLV + guidelines for use: a) makes sure all implementations are using the same essential format for constructing extra fields, since without guidelines or structure each implementation is ad hoc; b) for those who are privacy minded, there will be a clear way to blend in with other like minded implementers (for example,  
**\<koe\>** who knew that the code base sorts field entries, but at least one live implementation does not?); c) leaves extra field almost as open ended as it is now, so those who choose opt-out privacy (choose to stand out from the crowd) for whatever reason, can still do so trivially  
**\<sarang\>** In the earlier discussions, were there particular opinions opposed to it?  
**\<sarang\>** If so, why?  
**\<koe\>** tradeoffs: a) it may have limited real impact on transaction indistinguishability, especially among coinbase tx if most pool operators aren't on board; b) implies no stricter enforcement of the field will be pursued (which would directly address questions of indistinguishability; c) so far as coinbase tx go, many pools publish their mined blocks  
**\<koe\>** (counter argument is Monero development is focused on on-chain, and can't concern too much off-chain activity)  
**\<sarang\>** Noted; thanks  
**\<sarang\>** Since you were interested also in the hidden timelock construction, any other thoughts on that as well (from your link above)  
**\<koe\>** actually I just felt inspired, and wanted to confirm my understanding  
**\<sarang\>** Keeping in mind that the range proof can be absorbed into the existing one, meaning no effective change in size or verification for that portion of it  
**\<sarang\>** Your construction appears algebraically equivalent to what I listed  
**\<koe\>** I dont know enough about CLSAG to make a real judgement  
**\<sarang\>** The CLSAG part could apply to MLSAG as well  
**\<koe\>** Perhaps if we knew how much timelock is being used in the wild  
**\<sarang\>** The only difference is how the commitment to zero is handled in the signature  
**\<sarang\>** In MLSAG it would be \_very\_ expensive, but in CLSAG it adds only a single auxiliary linking tag, and makes the verification multiexp a bit more expensive  
**\<koe\>** oh nice, I was imagining all those extra mlsag scalars  
**\<sarang\>** If people think it's worth seriously considering, I can get more precise timing estimates on those curve operations  
**\<sarang\>** Yeah, for CLSAG you don't add scalars  
**\<sarang\>** It is in no way worth it for MLSAG  
**\<sarang\>** either in size or extra verification  
**\<sarang\>** The current CLSAG data has some custom curve-op code for efficiency that wouldn't apply to this new 3-CLSAG timelock construction  
**\<sarang\>** (the Python code is not suitable for timing, only to see how it works)  
**\<sarang\>** Anyway  
**\<sarang\>** We're way over time  
**\<sarang\>** Anyone have ACTION ITEMS for this week they want to share?  
**\<sarang\>** (I find action items useful for me, to help prioritize and share those priorities)  
**\<atoc\>** I will continue working with Surae. Hopefully I can share more next week.  
**\<sarang\>** I have several... some additional work writing up comparisons of linkability definitions between a few papers, to get some timelock numbers (if it's seen as useful), and some data analysis relating to sublinear protocols  
**\<sarang\>** Oh, and one additional note... the IEEE S&B conference is coming up later this year  
**\<sarang\>** https://ieeesb.org/  
**\<sarang\>** Both suraeNoether and I are on the program committee  
**\<sarang\>** It's a great event, and is seeking papers  
**\<sarang\>** If you have some work that could be worth sharing, consider writing it up formally and submitting  
**\<atoc\>** Ok cool  
**\<sarang\>** (you should note any conflicts of interest with the program committee if you feel they apply to you)  
**\<sarang\>** I went to this event a while back, and it had great presentations (but was not streamed)  
**\<sarang\>** Any other comments, questions, or final remarks before we adjourn?  
**\<sarang\>** Normally there isn't so much to cover in one meeting; it's a great problem to have :D  
**\<sarang\>** Going once...  
**\<sarang\>** going twice...  
**\<koe\>** I will be focusing on ZtM2 multisig, which may be done by next meeting in which case Ill start in on bulletproofs; and anything else that comes up, perhaps work on updating the fee priority multipliers for surge situations (emails with ArticMine)  
**\<atoc\>** Last thing, I didn't realize IEE had Security and Privacy on Blockchain. That's pretty cool.  
**\<sarang\>** I'm happy to help with bulletproofs koe; I have a branch for it in my ZtM repo  
**\<sarang\>** atoc: it's a great event  
**\<koe\>** all in good time :)  
**\<sarang\>** I'm very happy to be asked to be on the committee :)  
**\<sarang\>** OK, thanks to everyone for attending, even though we went over the usual time  
**\<atoc\>** Yeah that's awesome!  
**\<sarang\>** Logs will be posted shortly to the GitHub issue  
**\<atoc\>** It was good. There was a lot of material.  
**\<sarang\>** Discussion can of course continue  
**\<sarang\>** (I just need a stopping point for the posted logs!)  
