---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-03-25
summary: Surae work, Sarang work, Output distribution and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** Our meeting begins presentyl  
**\<sarang>** Agenda is here, where logs will be posted as well: https://github.com/monero-project/meta/issues/320  
**\<suraeNoether>** good mornign everyone  
**\<el00ruobuob\_[m]>** hi  
**\<sarang>** 1. GREETINGS  
**\<rehrar>** heyo  
**\<sarang>** Thanks to everyone for attending today  
**\<[-mugatu-]>** o/  
**\<sarang>** Let's move to 2. ROUNDTABLE  
**\<sarang>** suraeNoether: care to go ahead and discuss your recent work?  
**\<oneiric\_>** hiyo  
**\<suraeNoether>** sure  
**\<suraeNoether>** so, in the past week i've been working on MRL-0011, which is rounding the corner of large-scale number crunching  
**\<suraeNoether>** MRL-0011 is the churn analysis/matching in bipartite graphs paper  
**\<suraeNoether>** i have the graph theoretic stuff passing unit tests, and i've written 1) a simulator that generates a blockchain and 2) an experimenter that tries to link transactions, and then compares it to the "ground truth."  
**\<suraeNoether>** these last two have not passed tests yet; my latest commit is here: https://github.com/b-g-goodell/mrl-skunkworks/tree/matching-powerpuff/Matching  
**\<suraeNoether>** the simulations are fairly closely linked with our output selection methods, and i'm going to insert more than one output selection method to compare them all  
**\<sarang>** Excellent. The idea of using the transaction graph to gain heuristic advantage is an annoying consequence of being decoy-based, and having a solid framework will be useful  
**\<suraeNoether>** the goal is to simulate a blockchain in which someone is churning or otherwise spending in an abnormal pattern,a nd we are going to assess the false pos/false negative rate of trying to de-anonymize this individual, and we are going to compare these to the anonymity set sizes ranging from monero-sized ring signatures to zcash sized snarks  
**\<suraeNoether>** coding this all up and testing it to make sure it does what we need it to do is taking more time than i had hoped, but now we have the possibility of making some formal recommendations on output selection algorithms and the practicable security of monero's plausible deniability  
**\<sarang>** Yeah, a broader question about output selection and transaction behavior has always been a sticking point IMO  
**\<suraeNoether>** oh, final update: the DLSAG paper is still being worked on by us and our co-authors but i think we are seeing some movement, and i'll let sarang talk about CLSAG stuff, since that's his bag right now  
**\<sarang>** Doing churn correctly, selecting outputs safely to avoid linking, etc.  
**\<suraeNoether>**   \*nod\*  
**\<sgp\_>** It's certainly a necessary piece of research the community can benefit from  
**\<suraeNoether>** oh oh, isthmus at noncesense research lab has put a fellow of insight's program onto "automated churn based on best practices," so i've been working with him on enumerating our currently known best practices  
**\<alexanarcho>** Is there any graphic representation of the transaction graph?  
**\<sarang>** Not that I know of  
**\<suraeNoether>** alexanarcho i have done no graphics, but my code at that link above dumps into a text file that hopefully is rather readable, and contains all the information to physically draw out a graph by hand (for a small example)  
**\<sarang>** There's always the danger of chasing heuristics with this stuff... but hitting the big ones is a good strategy  
**\<suraeNoether>** but, again, that simulator is not yet passing unit tests, so it's almost certain to act wonky right now  
**\<sgp\_>** suraeNoether: that discussion sounds interesting. I'm happy to lend a hand there  
**\<suraeNoether>** sgp\_: neat, let's chat with Isthmus\_ at the end of the meeting  
**\<sarang>** Any other work or news to share suraeNoether ?  
**\<suraeNoether>** uhm, monero konferenco update: the schedule is coming really soon(tm) like some time this week  
**\<sarang>** Excellent  
**\<suraeNoether>** we are essentially all full up for speakers, but i'm holding out for a few folks from the electronic frontier foundation, aviv zohar and yonatan sompolinsky (i think one of them are coming) and either benedikt bunz or his coauthor ben... i can't remember his name and i'm looking it up... (i have a verbal commitment that one of these two are coming to present too)  
**\<suraeNoether>** so if anyone wants to submit an abstract, now is last minute. :D  
**\<sarang>** Any specific questions for suraeNoether on anything he's discussed?  
**\<sarang>** righto  
**\<suraeNoether>** ben fisch\*  
**\<sarang>** I have been working much more on the CLSAG signature scheme brought up by RandomRun in the issue linked in the agenda  
**\<sarang>** I have three versions coded now (link in agenda)  
**\<sarang>** This scheme compresses ring signatures (probably a bad terminology, but oh well) by reducing the required number of scalars in the signature  
**\<sarang>** Recall that right now, we have two forms of MLSAG signatures: full and simple  
**\<sarang>** Full has an index linking issue when used with multiple inputs, so we only use it for single-input spends  
**\<sarang>** Simple signs each input separately, but has no index problem  
**\<sarang>** We can use CLSAG for both full and simple, and even extend it to multi-input full signatures if we decided to stop caring about index linking  
**\<sarang>** Sure, we can make the C stand for compact  
**\<sarang>** (it needed a name)  
**\<sarang>** Based on operation counts, we should see no performance hit in verification, and \_possibly\_ a slight improvement  
**\<suraeNoether>** if that's the case, then we actually save big time a year down the line  
**\<sarang>** Anyway, if we were to move to this, we'd save 320 bytes per input (at the current ring size)  
**\<sarang>** and it would require adding the new sign/verify scheme, as well as a new custom triple-scalarmult function to handle the expanded key operations  
**\<sarang>** but that's very straightforward  
**\<sarang>** Kudos to RandomRun for this clever idea  
**\<suraeNoether>** small changes in verification time now add up over the next year to hours or days of download+sync time, and are exponentially related to similar changes in space usage. the fact that we save space \*and\* verification time with this signature scheme adds up to crazy wacky gains over the next year...  
**\<sarang>** Confirming the verification savings or cost will require a more complete C++ implementation, of course. These are estimates based on operation counts and the new C++ triple-scalarmult that I added and tested  
**\<sarang>** Any specific questions on this?  
**\<oneiric\_>** any downsides?  
**\<crCr62U0>** the same question^  
**\<sarang>** We'd need a new security proof to account for the new key aggregation (similar to MuSig)  
**\<sarang>** But assuming this, and successful verification testing, it's a definite win  
**\<suraeNoether>** ^ that's a good question. i know group operations timing can be exploited to great effect, and i wonder if the triple scalar mult method is more or less vulnerable to side channel analysis by timing than our present method  
**\<sarang>** We already use variable timing for key operations  
**\<suraeNoether>** yeah, no reason to make it a lot worse, though  
**\<sarang>** this is a very straightforward extension to the double version we use now  
**\<sarang>** it's neither clever nor novel  
**\<sarang>** (the triple function, not CLSAG!)  
**\<suraeNoether>** okay, fair enough  
**\<sarang>** It would be nice if we could use CLSAG for multi-input with a single signature, but oh well  
**\<midipoet>** Is "key aggregation" the linking/combination of key images together to form a transaction? Sorry if dumb question  
**\<sarang>** (we'd save a huuuuge amount on space and time)  
**\<suraeNoether>** i believe the security proof of clsag is a straightforward thing; sarang do you want me to write up a proof for clsag's unforgeability some time this week, or should we wait to see where development goes on it first? iirc the key images changed in the past week or something like that? is that the case?  
**\<sarang>** Key aggregation puts the amount and output key operations into a single operation  
**\<sarang>** but does so in a way that prevents tomfoolery  
**\<oneiric\_>** is it desirable to make the functions constant time? if so, how much effort involved?  
**\<midipoet>** Understood  
**\<sarang>** We technically add a new "key image" for the amount commitments that isn't used in the same way  
**\<sarang>** Ah, relating to key images...  
**\<sarang>** There are 2 ways to do CLSAG key images  
**\<suraeNoether>** midipoet: yes. musig aggregated user keys to make n-of-n threshold keys. the result is each participant has a secret share and the group has an aggregated key from the combined secrets. clsag aggregates together the one-time/stealth keys with the pedersen commitments to the amount in a 2-of-2 way, and forgets the idea of a crowd of people doing it.  
**\<sarang>** One of them keeps the current key image format but adds a second one that doesn't need to be checked for linking (it's only to make the math work)  
**\<sarang>** Another version changes key image formats to use a fixed generator point, which could decrease verification time by a bit  
**\<sarang>** The timing differences are minor  
**\<suraeNoether>** minor like less than 1% difference or minor like same big-oh?  
**\<sarang>** Perhaps a few %  
**\<sarang>** We could even mix old and new key image styles, but this might make the proofs more complex  
**\<sarang>** Anyway, I think now is the time to write the proofs, now that we understand the different versions of this scheme  
**\<suraeNoether>** hmm. more than 1% difference in timing is sufficient enough to worry about in terms of the effective space savings. we may have to run some numbers  
**\<suraeNoether>** i'll start writing them later this week, then  
**\<sarang>** FWIW the current image format is x\*H(xG), and the alternate one is x\*H (for globally fixed point H)  
**\<sarang>** So you'd save by avoiding the hash-to-point and by precomputing multiples for the new generator H  
**\<sarang>** Anyway, I have both versions in the linked code  
**\<sarang>** Any other questions on CLSAG?  
**\<moneromooo>** The CN paper does not mention a particular reason for this extra H() ?  
**\<suraeNoether>** does knowing xG and xH provide an advantage in computing x, assuming G and H have an unknown discrete log wrt each other??  
**\<sarang>** I am mostly confident that the new format provides the same security, but not completely convinced  
**\<sarang>** The option still exists to use CLSAG with the current image format  
**\<sarang>** suraeNoether: that is exactly the case we have now, except H = H(X) is a function of the output key  
**\<suraeNoether>** let's look into this carefully  
**\<sarang>** Yes  
**\<sarang>** moneromooo: likely to avoid the structure associated with xX = (x^2)G  
**\<sarang>** Anyway: I am also continuing to work on test code for the Lelantus transaction protocol, and also deeper dives into other implementations of the Dandelion++ routing protocol  
**\<sarang>** I know of proposals/merges for this in Bitcoin, Grin, and Zcoin  
**\<suraeNoether>** oh i didn't realize you were implementing lelantus  
**\<suraeNoether>** neat  
**\<sarang>** I'm determining if it's feasible as is, or if its components have value elsewhere  
**\<sarang>** No plans to implement it, of course  
**\<sarang>** only investigating more closely  
**\<suraeNoether>** i'll be interested to see how it scales compared to our system, if there's a payoff point.  
**\<sarang>** I think there will be a sticking point with scaling commitment sets  
**\<sarang>** Finally, thanks to the community for supporting my current open funding request for the next few months  
**\<sarang>** That's all I have for now  
**\<sarang>** Does anyone else have new work or news to share for the roundtable?  
**\<oneiric\_>** been reading a lot on signature schemes and LEA for I2P related stuffs  
**\<sarang>** Anything of particular interest so far oneiric\_ ?  
**\<oneiric\_>** blake2b sha3 and ed25519ctx are being considered as replacements for sha2 in eddsa  
**\<oneiric\_>** LEA is particularly important for I2P because messages are signed, rather than H(m)  
**\<suraeNoether>** blake is a nice hash function  
**\<oneiric\_>** OpenSSL already has hooks for Sha3  
**\<suraeNoether>** plays nicely with the other hash functions, doesn't throw rocks  
**\<oneiric\_>** suraeNoether: agree, that's what i'd like too  
**\<oneiric\_>** if sha3 has the highest likelihood for adoption, that may be what gets used  
**\<oneiric\_>** EOF  
**\<sarang>** This is probably hard to quantify, but I wonder which has had the most analysis overall  
**\<oneiric\_>** my hunch would be sha3  
**\<sarang>** as would mine  
**\<sarang>** Anyway, that's just my idle musings :D  
**\<sarang>** thanks oneiric\_  
**\<oneiric\_>** but blake2 is really popular too, especially amongst we crypto nerds  
**\<oneiric\_>** :) np  
**\<sarang>** Let's combine them to make a new function: BLAH-3  
**\<sarang>** =p  
**\<suraeNoether>** i've been reading up on the parazoa extension of the keccak sponge, it's weird and interesting  
**\<oneiric\_>** lol  
**\<suraeNoether>** but that's my "funtime" ie post coffee preshower reading  
**\<sarang>** OK, let's move to 3. QUESTIONS  
**\<oneiric\_>** ooo sounds fancy  
**\<sarang>** Any general questions or observations on past, current, or ongoing research before we wrap up?  
**\<OsrsNeedsF2P>** Question regarding inputs. We had some discussions last night, but I wanted to bring up how if you only receive 1 input, you can only send 1 transaction at a time. sweep\_all works, but it would be better if there was more leniency altogether. Can this be done?  
**\<moneromooo>** It can be done, using the settings I mentioned yesterday.  
**\<sarang>** Specific qualms with sweep?  
**\<OsrsNeedsF2P>** sarang: User experience, and only official wallet supports  
**\<OsrsNeedsF2P>** moneromoo: do you have any suggestions on the parameters you were mentioning?  
**\<sarang>** Hmm, I wonder how much of this is a UX issue given the current support  
**\<moneromooo>** Sure, count to 5, value to 0.  
**\<moneromooo>** Of course outputs will dwindle to 1 if you're sending large amounts. In that case, split again.  
**\<OsrsNeedsF2P>** Is this a wallet level implementation, or is this something the RPC would handle on its own? (might be a dumb question)  
**\<moneromooo>** (which can be done at the same time as sending a tx to someone else)  
**\<moneromooo>** wallet  
**\<moneromooo>** The RPC would also do.  
**\<moneromooo>** Oh, speaking of RPC.  
**\<moneromooo>** https://github.com/monero-project/monero/pull/5331/commits/c7bfdc356618fd1ccbe0f87fd5009e944cd12e50 will allow people to extract blockchain data (ie, nonces, difficulty, block times, etc) and process them with python.  
**\<sarang>** Excellent  
**\<sarang>** pinging Isthmus\_ and associates, who may be particularly interested in this  
**\<sarang>** I look forward to testing this moneromooo  
**\<sarang>** Any other general questions?  
**\<sarang>** If not, we'll move to 4. ACTION ITEMS  
**\<sarang>** This week, I'll continue wrapping up the initial work on CLSAG, continue coding on Lelantus components, and finalize some observations on Dandelion++ routing  
**\<sarang>** suraeNoether: ?  
**\<sarang>** (a note that Dandelion is client-opt-in and doesn't require a fork, whereas CLSAG would be)  
**\<midipoet>** With regards dandelion++ afaik Grin have just release a rewrite of the code, of that is of any interest  
**\<sarang>** aye  
**\<suraeNoether>** hi sorry, i got distracted  
**\<oneiric\_>** link?  
**\<suraeNoether>** my action items involve some paperwork with dlsag and generating our simulation results for matching.  
**\<sarang>** They have extended their version to include some aspects of input-output collapsing (or whatever they call it)  
**\<suraeNoether>** i think there's a good chance we are going to be able to push mrl-11 out the door in the next few weeks  
**\<sarang>** Excellent; hopefully we can get the CLSAG proofs hammered out with ease  
**\<suraeNoether>** i think clsag proofs will be tomorrow afternoon, tbh  
**\<midipoet>** https://github.com/mimblewimble/grin/pull/2628  
**\<suraeNoether>** i'm blocking off my 2-5pm time for that sarang  
**\<oneiric\_>** thanks midipoet  
**\<midipoet>** yw  
**\<sarang>** Interesting that Grin wanted to address the stem/fluff phase per epoch and not per transaction  
**\<sarang>** This was a subtle point in the paper  
**\<sarang>** Anyway, other action items to wrap up?  
**\<sarang>** Well, thanks to everyone for attending today  
**\<sarang>** Logs will be posted to the agenda issue shortly  
**\<sarang>** We are now adjourned!
