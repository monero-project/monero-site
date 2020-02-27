---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2017-11-13
summary: Educational outreach, multisig, Bulletproofs (range proofs), RuffCT, and miscellaneous
tags: [dev diaries, crypto, research]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<suraeNoether>** Hi everyone! fluffypony, knaccc, luigi1111, anonimal, binaryFate, dEBRUYNE, endogenic, gingeropolous, hyc, JollyMort[m], moneromooo, nioc, smooth, stoffu, vtnerd... anyone else I'm forgetting to ping?  
**\<hyc>** hola  
**\<suraeNoether>** 2) I want someone to volunteer to put up meeting logs on either the monero-project github or my personal github (which would end up on monero-project after a few weeks) as well as maybe throwing up a vCal as sarang suggested. Anyone want to make this their "thing"? :P  
**\<suraeNoether>** I can download my logs and upload all the past meetings tomorrow morning after I get home  
**\<hyc>** I won't volunteer because I usually have a conflicting meeting in this time slot  
**\<suraeNoether>** but I want someone to make it their thing to improve reliability. It's easy for me to de-prioritize stuff like that in favor of other stuff  
**\<suraeNoether>** hyc that's fine, we could just try to all remind each other instead of it being one person's responsibility  
**\<suraeNoether>** any other announcements/administrivia?  
**\<suraeNoether>** oh, I'm going to add a point to the agenda: 4) educational outreach  
**\<sarang>** yes  
**\<suraeNoether>** enough is moving on that front for us to need to discuss it  
**\<sarang>** goog idea  
**\<suraeNoether>** bab execution?  
**\<andytoshi>** sarang: (sorry to interrupt the meeting) the dot product is a scalar op but you still need to do a multiexp to compute a vector pedersen commitment corresponding to each vector, to check that the commitments are correct  
**\<sarang>** yup, true  
**\<suraeNoether>** np andytoshi  
**\<suraeNoether>** these aren't super formal. if you can't tell  
**\<sarang>** We can chat more afterward about it if you want  
**\<suraeNoether>** office hours are probably a better term for it. :P  
**\<suraeNoether>** okay, 3) Projects. Sarang is clearly on bulletproofs...  
**\<sarang>** Yeah, gonna code up linear and log versions  
**\<silur>** sorry I missed this bulletproof stuff  
**\<sarang>** we have andytoshi present, which is very helpful  
**\<silur>** a quick overview on that line?  
**\<sarang>** Proposal in a recent paper about efficient and small range proofs  
**\<silur>** sounds nice  
**\<suraeNoether>** nice. i put spectre down 2 weeks ago so i can work on the multisig paper and code vetting. thigns are looking good. I'm pretty confident I will be ready to send it off somewhere (the void) by the end of the month  
**\<sarang>** Our current proofs are linear in size with the number of bits in the range  
**\<sarang>** Bulletproofs have a linear version but the main contribution is a logarithmic version  
**\<sarang>** We're gonna more carefully examine the verification complexity, which would likely be a deciding factor  
**\<suraeNoether>** why do they bother with the linear version? simply because they can? (anything worth proving is worth proving twice?)  
**\<sarang>** The logarithmic version uses a more complex argument, but you can basically drop it in to replace the linear part  
**\<andytoshi>** suraeNoether: the log version is a very clean modification of the linear version, which is simpler to understand  
**\<sarang>** it's a good buildup  
**\<andytoshi>** to go from linear to log it's literally "in the final step replace these two vectors with a log-sized proof that their dot product is this"  
**\<suraeNoether>** oh, nice\~!  
**\<suraeNoether>** that's elegant  
**\<sarang>** It's a cool idea  
**\<hyc>** in the final step, *magic*  
**\<andytoshi>** and this also lets them do a MPC for multiparty rangeproofs where everyone passes around full vectors then a coordinator aggregates into one log-sized proof, which results in constant number of rounds (3 or 4? unsure) vs log-many  
**\<sarang>** Yeah andytoshi y'all did an excellent job with very solid applications for aggregation  
**\<andytoshi>** thanks. the real magic was the stanford people, esp benedikt  
**\<hyc>** So MPC gets us multisig too?  
**\<sarang>** I'm super interested to see the efficiency comparisons when we finish them  
**\<andytoshi>** hyc: it gets aggregation of outputs which have different owners  
**\<andytoshi>** i'm not sure about multisig, that isn't covered  
**\<hyc>** ok  
**\<andytoshi>** good call, i should investigate this anyway for mimblewimble  
**\<sarang>** Yeah, I keep forgetting that it's also logarithmic in # of outputs  
**\<suraeNoether>** it's very helpful to have you here, andytoshi. I've been thinking about whether or not the bulletproof approach could apply *as a ring signature* by storing the signing keys in polynomial coefficients somehow. do you have any thoughts in that regard?  
**\<andytoshi>** suraeNoether: no clue, i've thought about it a bit and i don't see any obvious way to do it  
**\<suraeNoether>** ok. on another note, hyc as far as MPC for multisig goes....  
**\<suraeNoether>** currently the coordinating signer fashions the range proof without input from threshold members... after all, the range proof isn't really part of "getting permission from our multisig coalition members to send this transaction."  
**\<silur>** there is a method by peikert  
**\<hyc>** oh good point surae  
**\<silur>** I remember when I constructed the encrypted storage EIP for ethereum  
**\<suraeNoether>** i don't see a super good reason to distribute the range proof for the use cases we see in cryptocurrency right now  
**\<silur>** there is a "compression" algo by peikert for something like this  
**\<andytoshi>** if you have a coordinating signer that knows the opening of the commitments (which is what it sounds like if it can make a rangeproof) then you can keep doing that with bulletproofs  
**\<suraeNoether>** silur if you find a link i'd be curious  
**\<andytoshi>** suraeNoether: in MW the rangeproof keys are used for authentication, that's all  
**\<andytoshi>** but monero doesn't care about that  
**\<suraeNoether>** yeah, i'm very ignorant about MW, so I'll change my wording above to "use cases we see in Monero right now" as opposed to cryptocurrency in general  
**\<suraeNoether>** so, anyone else working on any research projects? After I'm done with multisig this month, I plan on going back to spectre and attempting some simulations on random networks  
**\<suraeNoether>** but that's low priority now that multisig is sooo close.  
**\<suraeNoether>** (the multisig paper, obv)  
**\<sarang>** I'm splitting time between proofs and outreach  
**\<sarang>** (which is #4 on agenda)  
**\<suraeNoether>** ok. knaccc, silur, anyone else?  
**\<suraeNoether>** well, let's talk about educational outreach then  
**\<silur>** still working on my quantum-shuffle  
**\<silur>** and possible usecase on PRNG  
**\<suraeNoether>** nice  
**\<suraeNoether>** i'm very interested in that  
**\<silur>** would love to have you as a reviewer :D  
**\<suraeNoether>** \*on another note, btw, before education...\* our H\_p has been pointed out to me as .... non-standard a few times. can anyone give me any documentation *at all* on it? i think we chatted about this early this week, but since i've been mainly working offline, I haven't been able to participate too much  
**\<knaccc>** sarang msged me some EC operation counts for bulletproofs  
**\<suraeNoether>** silur sure,just make sure you find at least three other reviewers too haha  
**\<knaccc>** i'll be looking at attempting a comparison  
**\<knaccc>** which should be fairly easy, and would not require coding  
**\<suraeNoether>** sarang, do you still need that done? i think you mentioned you had completed a timing analysis earlier?  
**\<sarang>** We know basic operation counts  
**\<knaccc>** actually we can pretty much state the answer now  
**\<suraeNoether>** oh ok, neat  
**\<knaccc>** so it's 5\*64 scalarmultbase ops  
**\<knaccc>** which is the heaviest part by far, assuming 64 bit range proofs  
**\<knaccc>** for bulletproofs this is  
**\<knaccc>** i.e. 320 scalarmultbases  
**\<knaccc>** vs 128 doublescalarmultbases for existing range proofs  
**\<knaccc>** so we need to look up some performance stats to get that comparison  
**\<andytoshi>** for verification you can do much better than that  
**\<andytoshi>** you can do it in 128  
**\<knaccc>** ooh nice  
**\<hyc>** and relative cost of doublescalarmultbase vs single?  
**\<knaccc>** that's perfact then, bulletproofs win!  
**\<sarang>** Yeah I messaged some stuff for the log version knaccc  
**\<suraeNoether>** allrighty then... did we ever "make a decision" on sandy2x knaccc?  
**\<andytoshi>** oh, maybe 132 or something  
**\<andytoshi>** idk per numbers for ed25519. you probably want a multiscalarmultbase  
**\<knaccc>** suraeNoether sandy2x is only applicable if we move to curve25519, which we would only do if we had variable base scalarmults, which we don't  
**\<suraeNoether>** oh, i think i had something written down someplace incorrectly, then  
**\<knaccc>** i'm sure sandy2x can be modified to work on ed25519 though  
**\<suraeNoether>** oh, but  
**\<knaccc>** i'm looking up those performance stats hyc did now  
**\<suraeNoether>** the reason we were looking into sandy2x was to see if the variable base scalarmults from RuffCT could be made faster, right?  
**\<andytoshi>** anyway you have 64 G bases, 64 H bases, 6 L bases, 6 R bases, plus the standard bases and you can precompute scalars for every one of them and do one multiexp with 141 bases  
**\<knaccc>** suraeNoether yes  
**\<andytoshi>** that's the inner product anyway. i haven't worked out the rangeproof, it'll add another small constant  
**\<suraeNoether>** nice andytoshi  
**\<knaccc>** ed25519 monero 10k timings  
**\<knaccc>** ge\_double\_scalarmult\_base\_vartime  2.282629  
**\<knaccc>** ge\_scalarmult  2.462409  
**\<knaccc>** ge\_scalarmult\_base  1.498808  
**\<knaccc>** all in seconds  
**\<silur>** noice  
**\<suraeNoether>** hyc knaccc so i guess what i'm asking is: have we gotten enough information about speeds in sandy2x to figure out whether we can actually use RuffCT in the near future? or has this officially been shelved for a few hard forks?  
**\<hyc>** knaccc, any thoughts?  
**\<knaccc>** so 132 scalarmults for bulletproofs has the compute cost of 142 doublescalarmultbases that existing Monero range proofs use  
**\<knaccc>** so it's comparable  
**\<sarang>** mhmm that's in line with the counts I found as well  
**\<knaccc>** suraeNoether ruffct I think I remember as having similar compute costs to existing MLSAGs if we switch from ed25519 to curve25519  
**\<sarang>** What should be the next step for bulletproofs then, so as not to duplicate effort?  
**\<knaccc>** because ruffct was 2x as heavy, but curve25519 is 0.5x the cost for variable base scalarmults  
**\<knaccc>** i.e. ruffcy doesn't help with compute costs, only with storage costs  
**\<knaccc>** and would involve a lot of extra complexity to have curve25519 and ed25519 coexisting  
**\<andytoshi>** knaccc: sorry, it's 141 not 132. and that's just for the inner product, i think there are a couple more for the full rangeproof  
**\<andytoshi>** but the existing rangeproofs have basically no room to do multiexp (or even double-exp), so we expect it to be faster anyway  
**\<andytoshi>** on secp we've gotten far enough in the analysis to say "build it and benchmark" because they're pretty damn close  
**\<knaccc>** andytoshi ah thanks, ok then so bulletproofs are 19% more compute intensive to verify than Monero range proofs  
**\<suraeNoether>** ouch  
**\<andytoshi>** if you use a separate scalarmultbase for every one  
**\<suraeNoether>** 19% is huge with an exponential space-time tradeoff....  
**\<knaccc>** andytoshi i'm not familiar with the terms multiexp / double-exp  
**\<andytoshi>** "exp" means "scalarmultbase  
**\<andytoshi>** "  
**\<knaccc>** ok, i see, as in exponent when written in alternate notation  
**\<andytoshi>** "yeah  
**\<knaccc>** and multiexp is what?  
**\<andytoshi>** knaccc: if you are doing a\*G + b\*H + c\*I + d\*J you can compute that way faster than computing the individual terms and adding. in libsecp we explored three algorithms, bos-coster, strauss and pippinger and found that strauss was fastest for small numbers of points while pippinger was fastest for large numbers. see https://github.com/bitcoin-core/secp256k1/pull/486  
**\<sarang>** andytoshi: what's the general scaling on that?  
**\<andytoshi>** N/log(N)  
**\<sarang>** OK nice  
**\<suraeNoether>** andytoshi i didn't know that... it makes sense, though... i need to look into that  
**\<sarang>** We do that what, 2n times in the inner product?  
**\<suraeNoether>** if that's the case, ruffct might could be sped up  
**\<sarang>** Er, 2log(n) times  
**\<andytoshi>** suraeNoether: https://github.com/bitcoin-core/secp256k1/pull/486  
**\<knaccc>** andytoshi ah interesting, are you familiar with the way that ed25519 makes multiexps faster than if curve25519 is used?  
**\<andytoshi>** sarang: you can precomute the scalars and do it just once. the paper does it 2log(n) times but this isn't necessary  
**\<knaccc>** i'm wondering if there is something special about in that regard  
**\<andytoshi>** knaccc: no, i think ed25519 has some specific speedups but the algos i know are curve-agnostic  
**\<knaccc>** sepcial about secp256k1 in that regard  
**\<suraeNoether>** andytoshi thanks for the link  
**\<andytoshi>** we do use our endomorphism to get a small speedup but otherwise everything we've done is curve-agnostic  
**\<knaccc>** because we know having investivated that multiexp is 2x faster (with 2 bases) on ed25519 than on curve25519, which is why Monero uses ed25519  
**\<knaccc>** it's helped by the twisted edwards curve for some reason  
**\<andytoshi>** yes, we don't get 2x for two points, we get something like a 30% speed improvement... but for thousands of points we were getting like a 7x improvement with some older code  
**\<suraeNoether>** knaccc: so verification time for sandy2x + curve25519 + ruffct's 2x-sized keys = (approximately) current implementation + ed25519 + our currently sized keys (per ring member, fo course)?  
**\<knaccc>** wow ok thanks. Did you have to write your own optimizations to achieve that, using the published approaches you mentioned? or were libraries available for all that stuff for your curve?  
**\<andytoshi>** knaccc: we wrote our own code, the fastest library for our curve is ours :)  
**\<knaccc>** suraeNoether c8rrect  
**\<knaccc>** andytoshi whoa kudos!  
**\<andytoshi>** knaccc: but you can check out bos-coster, it requires a heap implementation but it's easy to understand and implement, and djb has python code you can basically translate into C  
**\<knaccc>** lol you're too smart for planet earth. you have a warped sense of "easy" :)  
**\<andytoshi>** i did this as a first try, which gave impressive numbers, but not as good as strauss for small # of bases and not as good as pippenger for large # of bases, so we dropped it. i forget the exact numbers now  
**\<suraeNoether>** ok, i had no idea about these multiexp tricks andytoshi is describing... we might could make ruffct doable using those tricks, but i need to read the paper again. (I'm beginning to think a proper name would be Bootle CT, but does Bootle really need *more* things named after him? lol)  
**\<suraeNoether>** knaccc the solutions are all trivial once you know them. :P heh  
**\<knaccc>** heh ok  
**\<suraeNoether>** okay, NOW that we've gotten some technicals a little more out of the way... sarang, you want to describe the bangalore thing?  
**\<sarang>** OK so maybe a good step forward is some comparative testing with code for bulletproofs, which can include proposed speed improvements as part of the test code?  
**\<sarang>** (just to finish this discussion)  
**\<suraeNoether>** (yeah, i don't want to rush us through it...)  
**\<suraeNoether>** i agree with you sarang  
**\<sarang>** So about outreach, if we wanna talk that  
**\<sarang>** I got an offer for one of us to do a two-week cryptocurrency course in Bangalore next May  
**\<suraeNoether>** and while we are doing that, we should keep an eye on Bootle's short accountable ring sigs (ruffct, RTRS CT, whatever you want to call it) to see if we can use multiexp  
**\<suraeNoether>** yes  
**\<suraeNoether>** outreach  
**\<suraeNoether>** *one* of us?  
**\<sarang>** Still need to discuss getting a second person too  
**\<sarang>** For sure the expenses are all paid for one instructor  
**\<sarang>** Unsure about a second one, depending on how they hire in India vs. elsewhere  
**\<knaccc>** suraeNoether maybe i've misunderstood, but i didn't think andytoshi was saying that the optimizations would apply unless you had fixed bases  
**\<knaccc>** and RuffCT does not have fixed bases  
**\<knaccc>** it's all variable base scalarmults  
**\<suraeNoether>** my impression was that the speed-up came from computing the sum in toto all at once instead of computing each term individually and summing them one at a time  
**\<suraeNoether>** andytoshi, want to clarify? :P  
**\<knaccc>** andytoshi i.e. when you said "a\*G + b\*H + c\*I + d\*J", were you implying that G,H,I,J were fixed bases that were amenable to precomputation?  
**\<andytoshi>** ah, no  
**\<suraeNoether>** or is it enough to simply have those stored locally?  
**\<andytoshi>** it's enough to have them stored locally  
**\<sarang>** cool  
**\<knaccc>** oh whoa, that's awesome, thanks andytoshi  
**\<andytoshi>** strauss does some precomputation on the fly, so if they \_are\_ fixed bases you can cache this and get even more speedup  
**\<andytoshi>** but you don't need it (and neither pippinger nor bos-coster have any precomp)  
**\<sarang>** OK good, so we should certainly test this w/ bulletproofs simultaneously  
**\<sarang>** Anyway suraeNoether, any more questions/comments about the outreach thing?  
**\<knaccc>** andytoshi oh wait, when you said "stored locally", you meant precomputed and stored locally?  
**\<knaccc>** i.e. GHIJ all still need to be precomputed? which is costly?  
**\<andytoshi>** no  
**\<knaccc>** what does stored locally mean then  
**\<andytoshi>** idk, i was just copying the phrase from suraeNoether  
**\<andytoshi>** i meant literally nothing by it  
**\<sarang>** "You know what the points are"?  
**\<andytoshi>** yeah, i guess  
**\<sarang>** I get it  
**\<knaccc>** lol well if you don't know what the points are, how can you do anything at all? i'm so confused :)  
**\<sarang>** knaccc the answer would be "doesn't matter, but if it's possible to also precompute, cool"  
**\<sarang>** that's all  
**\<knaccc>** ok cool  
**\<knaccc>** that's great news then  
**\<andytoshi>** i don't know :P. anyway we use these for aggregate signatures where the bases are public keys that we definitely can't precompute, and our numbers come from this  
**\<suraeNoether>** all i meant was  
**\<suraeNoether>** well  
**\<suraeNoether>** i'm going to shut my mouth for a bit  
**\<suraeNoether>** because i haven't read the bootle paper recently and i don't want to mis-speak  
**\<suraeNoether>** sarang for india? no more questions for now....  
**\<suraeNoether>** my e-mail to a local university has not yet received a reply, either, but I sent it on a Thursday evening... if I don't receive a contact by middle of this week, i'm going to try to contact some of the other, more prestigious schools around me...  
**\<sarang>** Is there interest in getting two people there to teach?  
**\<sarang>** vs just one?  
**\<suraeNoether>** uhm  
**\<sarang>** If it's just one, there are no expenses for the community or other supporters  
**\<suraeNoether>** i wouldn't mind it, i think it would be fun  
**\<suraeNoether>** like, i know this is a weird thing to say but  
**\<sarang>** With two people, I don't know if they'd cover the second person  
**\<suraeNoether>** "wanna go to india and teach for 2 weeks?" "eh, i could take it or leave it. " hehe  
**\<suraeNoether>** i think it'd be fun  
**\<suraeNoether>** if it's politically costly or something in order to establish funding, i don't really have a dog in that fight  
**\<sarang>** Yes, and there are parts of the country (like India) where gifted students don't have great opportunities for this  
**\<sarang>** So we'd be doing the STEM world a big favor  
**\<suraeNoether>** maybe. india has more honors students than america has students  
**\<sarang>** Yes but in the U.S. it's easy to find challenging opportunities if you're gifted  
**\<sarang>** in India it is not  
**\<sarang>** and being labeled an "honors student" in your own school doesn't mean squat comparatively  
**\<suraeNoether>** ehrm  
**\<suraeNoether>** anyway, i see what you are saying  
**\<suraeNoether>** but also  
**\<suraeNoether>** on a non-teaching note  
**\<sarang>** My point is that doing this anywhere in the world is a good idea, but I think serving a place like India is a great idea  
**\<suraeNoether>** I was chatting with a friend who brought up the following idea, which I have been kicking around in my head for a few days.  Monero should take some charge in producing friendly, educational, currency-agnostic infographics and educational documents for people with varying levels of tech education  
**\<suraeNoether>** sure  
**\<sarang>** On cryptocurrency in general?  
**\<sarang>** Because CCs work in a lot of different ways  
**\<suraeNoether>** yep! thing is...  
**\<suraeNoether>** there's an analogy to compare against cars. every cryptocurrency (that isn't a shitcoin) seems to be doing something differently with very differetn design philosophies  
**\<suraeNoether>** but that's like  
**\<suraeNoether>** as if in 1860 the internal combustion engine was invented, attracted oodles of capital, and then *every manufacturing company in the world* created their own weird design of internal combustion  
**\<sarang>** We have some really nice Monero topic videos  
**\<suraeNoether>** it's... kind of insane  
**\<sarang>** Things like those?  
**\<suraeNoether>** we do  
**\<suraeNoether>** uhm  
**\<suraeNoether>** the sorts of things I was thinking about  
**\<suraeNoether>** range from educational infographics and youtube videos that are short and designed for a 13 year old with a limited attention span... all the way up to a computer science student who is just learning about these things for the first time but has some stuff under their belt...  
**\<suraeNoether>** all the way up to educational infographics for politicians and policy makers who are ignorant about tech in general  
**\<sarang>** How general though?  
**\<suraeNoether>** well, the short videos for younger people (or grand mothers) would be quite general  
**\<sarang>** You can lead a horse to crypto primitives, but can't make him put them together in every currency's way  
**\<suraeNoether>** hey, look, a saying that people should learn  
**\<suraeNoether>** well, actually that idiom is kinda terrible  
**\<suraeNoether>** but that's the point  
**\<suraeNoether>** but anyway  
**\<suraeNoether>** the problem with the idea is that it's so general and not well-specified  
**\<suraeNoether>** there needs to be a scope defined ahead of time  
**\<sarang>** Yes, I think scope is the biggest hurdle  
**\<suraeNoether>** but i like the idea of MRL kind of... providing non-tribalistic, educational descriptions of the cc space, for internet users that aren't necessarily computer scientists  
**\<sarang>** Because it gets really complex really fast  
**\<suraeNoether>** *nod*  
**\<suraeNoether>** anyway, that's all I have for discussion today  
**\<suraeNoether>** I'm a little impressed we actually took over an hour!  
**\<suraeNoether>** Does anyone have anything else they want to chat about?  
**\<suraeNoether>** okay, well  
**\<suraeNoether>** \/meeting  
**\<suraeNoether>** good job, everyone. :P  
**\<hyc>** more tribalism!!  
**\<hyc>** n/m  
**\<suraeNoether>** hehe  
**\<suraeNoether>** i mean, honestly  
**\<suraeNoether>** zcash's trusted setup and dash's masternodes  
**\<suraeNoether>** i wouldn't necessarily trust my life savings to a dash masternode  
**\<suraeNoether>** i certainly wouldn't trust my double-spend protection to a 6-person ceremony  
**\<sarang>** Different tools for different needs, I suppose  
**\<suraeNoether>** but these are solutions to cryptocurrency problems that come from different design philosophies with different traits and different security/threat models in mind  
**\<suraeNoether>** *nod* right  
**\<sarang>** I was listening to a radio news show that interviewed someone about the nature of Bitcoin  
**\<sarang>** He claimed that it was about "trusting the network"  
**\<sarang>** which I thought was utter BS  
**\<suraeNoether>** heh  
**\<sarang>** It's the exact opposite  
**\<knaccc>** suraeNoether they've figured out how to make it a 100,000 person ceremony now  
**\<sarang>** you trust \_nobody\_  
**\<suraeNoether>** knaccc yeah I saw that  
**\<suraeNoether>** well, maybe i need to come up wiht a more finite mission statement for this particular idea  
**\<suraeNoether>** anyway  
**\<suraeNoether>** okay, everyone  
**\<suraeNoether>** good meeting, good meeting, no one brought doughnuts, but hey  