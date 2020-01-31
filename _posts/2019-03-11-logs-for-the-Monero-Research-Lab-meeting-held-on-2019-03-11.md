---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-03-11
summary: Network upgrade, Point release discussions, MRL work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** Our meeting begins presently  
**\<sarang>** Let's go ahead and get started. Agenda is here: https://github.com/monero-project/meta/issues/314  
**\<suraeNoether>** howdy everyone  
**\<sarang>** 1. GREETINGS  
**\<sarang>** hi  
**\<MRL-discord> \<Isthmus>** Hello! Biking, in soon.  
**\<parasew[m]>** hello!  
**\<sarang>** Let's recap 2. NETWORK UPGRADE  
**\<sarang>** Kudos to everyone for a successful first upgrade  
**\<sarang>** I don't recall when the second was slated to occur, since block arrival was stunted  
**\<sarang>** Any thoughts on the upgrade after the fact?  
**\<xmrmatterbridge> \<rehrar>** Hi  
**\<sarang>** I believe it was dEBRUYNE who wanted an upcoming meeting specifically to talk more deeply about the future of PoW  
**\<parasew[m]>** anyone monitored the "old chain"? if there have been this large amount of asics on there, and not turned off it should be visible  
**\<sarang>** I believe sgp\_ ran some blackball numbers on it  
**\<sarang>** and found essentially nothing of interest  
**\<sarang>** but as far as hashrate, I am not sure  
**\<sgp\_>** yeah, no chain reactions so far, very few known spent outputs through reused key images  
**\<sgp\_>** impact on network privacy so far is essentially 0  
**\<sarang>** sgp\_: were the key image reuse numbers for only v9 and v10?  
**\<sgp\_>** yes, just those two  
**\<sarang>** great, thanks  
**\<sarang>** Relating to this, we can also introduce 3. NEXT POINT RELEASE  
**\<sarang>** Not all desired non-consensus changes made it in to this release, so Sometime Soon (tm) will be a point release  
**\<sarang>** BP optimizations will be one nice addition  
**\<sarang>** I would like output selection to also be included... we talked about it at length at an earlier meeting  
**\<dEBRUYNE>** sarang: Correct. It's a topic with a lot of depth that requires an extensive discussion imo  
**\<sarang>** suraeNoether: do you have a current recommendation for output selection?  
**\<suraeNoether>** i'm running into problems testing the matching code, based on this problem too  
**\<sarang>** Here is a discussion of the different algorithms: https://github.com/monero-project/meta/issues/307#issuecomment-466514757  
**\<suraeNoether>** iirc the output lineup method performs quite well  
**\<sarang>** I prefer it among the others that were tested  
**\<sarang>** But it's a change that deserves more than two thumbs-up :)  
**\<suraeNoether>** there is no optimal solution, but some solutions are better than others and the output lineup method is more reasonable than the other proposals, and i have no new proposals to make (yet)  
**\<sarang>** I updated the sim code (link in agenda) to examine the output weighting in more details  
**\<sarang>** Hopefully the BP optimizations are less contenious  
**\<suraeNoether>** uhm i think i have one possible proposal that i want to chat about with you by side channel to hash out some details  
**\<sarang>** sure  
**\<sarang>** We should have a formal recommendation before whatever date is set for the point release code freeze  
**\<sarang>** Anything else relating to the point upgrade that ought to be discussed?  
**\<sarang>** ping moneromooo perhaps  
**\<xmrmatterbridge> \<rehrar>** I just want timelines. Nothing to say on content.  
**\<moneromooo>** hi  
**\<moneromooo>** What's the question ? :)  
**\<moneromooo>** I don't know about any date. Depends when we get all the stuff on master ready really.  
**\<sarang>** Anything relating to the next point release you'd like us to discuss?  
**\<moneromooo>** None that come to mind right now.  
**\<sarang>** ty  
**\<sarang>** In that case, let's move to 4. ROUNDTABLE  
**\<sarang>** suraeNoether: care to go first?  
**\<sarang>** OK, I can go first instead  
**\<suraeNoether>** ok  
**\<sarang>** aha, go ehead  
**\<suraeNoether>** heh  
**\<suraeNoether>** Well, my simulations for the matching code are to the point where i'm running a matching on some test data now to generate a confusion matrix.  
**\<suraeNoether>** i'm also editing the manuscript describing the whole process  
**\<suraeNoether>** one of the problems i'm running into is actually simulating our output selection in part because it's not clear which direction we are going yet  
**\<suraeNoether>** and it occurred to me that this could help inform our choice of output selection by seeing if one of these possibilities makes matching easier or harder  
**\<sarang>** IMO matching expect spend with proper weighting seems optimal enough from a purely timing perspective  
**\<sarang>** (leaving out questions of binning etc)  
**\<suraeNoether>** when i say easy or hard i don't mean in terms of time, because as we've seen matching is essentially super duper fast  
**\<suraeNoether>** i mean in terms of false negative and false positive rates  
**\<suraeNoether>** but you are 100% on that  
**\<sarang>** aw shucks  
**\<suraeNoether>** i'm working on a variety of other side things but i'm shooting for this matching paper to be complete and published some time in the next 2 months  
**\<sarang>** Excellent  
**\<suraeNoether>** if we get more speakers for the konferenco, then i won't be speaking, but otherwise i will probably be presenting on this at the konferenco  
**\<sarang>** Neat; anything else of interest to share?  
**\<suraeNoether>** that's all i have today, thanks!  
**\<sarang>** Righto  
**\<sarang>** I have a few things  
**\<xmrmatterbridge> \<learninandlurkin>** The line up is looking great btw! Fantastic effort for a first konferenco  
**\<suraeNoether>** catching up on lots of reaidng in algebraic geometry :D  
**\<sarang>** First, my next FFS/CCS will be posted soon  
**\<sarang>** As was discussed here, in -community, and elsewhere, the request will be for immediate payout  
**\<sarang>** This means both donors and I know the actual value of the donations  
**\<sarang>** Since this is a big change, any questions or comments on it?  
**\<sarang>** (presumably suraeNoether will be doing the same arrangement)  
**\<suraeNoether>** i'm in support of this, and i will indeed be mimicking this  
**\<sarang>** Folks who do not trust us to run with the money should, of course, not donate  
**\<sarang>** But my hope is that our records have shown we're good for it :D  
**\<binaryFate>** happy we came to that solution eventually, hopefully will be better for your guys  
**\<sarang>** Thanks to binaryFate and others for agreeing to this change  
**\<binaryFate>** yes the idea is that donors being careful should discourage randomers to do the same  
**\<sarang>** The CCS posting will \_very\_ clearly state the arrangement, so there is no confusion  
**\<binaryFate>** If you figure out the markdown  
**\<sarang>** Yes indeed  
**\<moneromooo>** Technically, it's within the existing rules as stated: one milestone, which consists of "sarang starts working" :)  
**\<sarang>** Second, the paper that suraeNoether and I have been collaborating with external researchers on (DLSAG et al.) is in final review now  
**\<sarang>** We've been asked not to share it before it's released as a preprint, as a courtesy to all authors  
**\<suraeNoether>** \*nod\*  
**\<sarang>** It has some great details on useful constructions that I'm sure we'll discuss at length after the preprint goes to IACR  
**\<sarang>** it'll be submitted for a conference as well  
**\<sarang>** Third, I wrote up some additional tests and code for Bulletproofs MPC  
**\<dEBRUYNE>** sarang: How does this work if the proposal is not fully funded yet when your period starts?  
**\<sarang>** Two options: either the bulk is paid out and it stays open until filled  
**\<sarang>** or it all sits there until fully funded  
**\<sarang>** I prefer the first, but am open to discussion  
**\<sarang>** Regarding Bulletproofs MPC, real\_or\_random had some great thoughts on this before the meeting (but I won't put him on the spot)  
**\<suraeNoether>** i imagine that the important part is laying out which way it goes in the proposal  
**\<sarang>** the question has to do with what a malicious player can do  
**\<sarang>** We chatted about the fact that an evil player could try to pull what amounts to a cancellation of partial proof elements, effectively setting the inputs to the hash that generates a F-S challenge  
**\<sarang>** I couldn't find a way that this could be used as an exploit, aside from obviously generated an invalid proof  
**\<sarang>** but the security proofs for BPs do require that F-S challenges are uniform  
**\<sarang>** I had neglected that point when I had thought about this earlier  
**\<sarang>** My strong suspicion is that proof elements are still uniformly distributed in the presence of a dishonest challenge due to the prover's randomness, and that you still get zk in this case (but not provably)  
**\<sarang>** Moral: if we do anything in the future that requires/desires this scheme, these things would need to be considered  
**\<sarang>** Any questions/comments relating to this?  
**\<sarang>** allrightythen  
**\<suraeNoether>** i think we should continue to ponder it and write something up formally about the BP MPC schemes  
**\<sarang>** Well that's the thing... there's really nothing to write formally  
**\<sarang>** You can probably solve all the theoretical woes by having all players commit to their proof elements before multicasting them  
**\<sarang>** then an honest prover is guaranteed uniform F-S challenges  
**\<xmrmatterbridge> \<learninandlurkin>** Sorry but I'm a little out of the loop here. What exactly are BP MPC for? something to do with multisig with BP?  
**\<suraeNoether>** it's nice to think about collectively computing BP range proofs, but I'm still v curious about the coinjoin approach that we are considering on the larger scale.  
**\<sarang>** Ideally, untrusted parties could generate single BPs for outputs  
**\<suraeNoether>**  after all, it's hard to even think about threat models unless we know how these things will be used in practice  
**\<sarang>** Sure, this is all pie-in-the-sky right now  
**\<suraeNoether>** learninandlurkin: collaborating with friends to compute a range proof for a coinjoin style transaction, so that the participants don't reveal their amounts to each other  
**\<sarang>** But yes, the threat model would be very different depending on how the rounds go  
**\<sarang>** Finally, suraeNoether had shown me this a while back: https://lelantus.io/lelantus.pdf  
**\<suraeNoether>** agreed on the commit-and-reveal; expensive but usually does the trick to ensure participants can't be rewound inappropriately  
**\<sarang>** An interesting application of some of the fundamentals behind Bulletproofs and the old StringCT scheme  
**\<xmrmatterbridge> \<learninandlurkin>** So... allowing multi-input transactions where each user doesn't know the amounts of the other inputs? Sounds useful  
**\<suraeNoether>** learninandlurkin hence our interest in nailing down threat models \*nod\*  
**\<sarang>** I've been playing around with some of the math in that paper to see what nuggets could be extracted  
**\<suraeNoether>** oh i had a brief thing to point out: isthmus and n3ptune at noncesense-research-lab answered one of my requests and we now have a complete empirical distribution of number of inputs and outputs per transaction  
**\<suraeNoether>** forgot to mention this:  
**\<sarang>** Neato, where is this distribution to be found?  
**\<suraeNoether>** https://github.com/noncesense-research-lab/tx\_in\_out\_distribution  
**\<suraeNoether>** the data surprised me  
**\<dEBRUYNE> \<sarang>** I prefer the first, but am open to discussion <= I'd be OK with the first, but perhaps it would be most convenient to use a rounded number  
**\<dEBRUYNE>** e.g. if 211 XMR is funded, pay out 200  
**\<sarang>** You won't believe what's in tx\_distribution\_in.csv!  
**\<dEBRUYNE>** Mebbe malware  
**\<dEBRUYNE>** :P  
**\<suraeNoether>** super heavy tails for one thing, and a rootkit for another  
**\<sarang>** dEBRUYNE: perhaps a full payout at date X, and then a second payout at either date Y or completion, whichever comes first  
**\<binaryFate> \<sarang>** I prefer the first, but am open to discussion <-- donors will have no incentive to fund in time, it will drag till the end of the period  
**\<sarang>** binaryFate: how would you do it?  
**\<binaryFate>** I like the incentive to donors of you proposing something and getting to work on it only if funded  
**\<xmrmatterbridge> \<learninandlurkin>** I imagine coinjoining going on would really complicate output selection. Or is there some idea where they work off each other to get rid of heuristics?  
**\<sarang>** Depends on how timely it is  
**\<suraeNoether>** learningandlurkin coinjoin brings a whole new nightmare to the party. does everyone bring their own mix-ins? certainly nothing is to stop a malicious party from coinjoining with a bunch of badly selected mix-ins  
**\<moneromooo>** A ring is one person only. Fake output selection is untouched.  
**\<sarang>** Well each input signs with its own ring  
**\<sarang>** ^  
**\<moneromooo>** That person makes their own ring, yes. Otherwise others would know which is the real out.  
**\<sarang>** The benefit is breaking the assumption of one-party control of outputs and the link to the input rings  
**\<binaryFate>** What about simple attack of using the same 10 decoys as one of the other participants?  
**\<suraeNoether>** ^  
**\<msvb-mob>** Is parasew, nevvton, or txmr in the channel?  
**\<binaryFate>** mmm you don't know which are decoys, nevermind ^^  
**\<sarang>** If this moves forward, hopefully we can determine the necessary practical security for BPs  
**\<sarang>** If we can't aggregate, they'd have to be separate for each output  
**\<suraeNoether>** my beard is getting very thoroughly stroked this morning. much to think about...  
**\<sarang>** I believe we'd get practical security without player commitments, but not provable  
**\<sarang>** Anyway: does anyone else wish to share interesting research before we close?  
**\<xmrmatterbridge> \<learninandlurkin>** Yes it sounds like the interplay between coinjoin and ringsigs will require some diagrams for me to ever understand. Could get complicated.  
**\<suraeNoether>** i think you would want a commit-and-reveal stage for everyone to see the ring members to prevent malicious ring intersection in the coinjoin  
**\<sarang>** MoneroCoinJoin: an easy 14-round process!  
**\<suraeNoether>** isthmus and i have been chatting about methods of extracting the true spend-time distribution from the monero blockchain without knowing exactly which outputs have been spent  
**\<suraeNoether>** that's a very nascent conversation, though I think it'll end up being a very straightforward project  
**\<sarang>** Discussions in #noncesense-research-lab I presume?  
**\<xmrmatterbridge> \<learninandlurkin>** so, truish spend-time distribution  
**\<binaryFate>** Are there regular meetings on this or just continuous discussion? I had been working on this at some point and have some code around aiming to graphically show the real spend distribution  
**\<sarang>** I've seen a few informal conversations in #noncesense-research-lab but didn't know if suraeNoether had something more formal  
**\<suraeNoether>** binaryFate: ah, no, this has been a casual conversation by side channel, but there is clearly interest  
**\<suraeNoether>** i'll start blabbing about it in here more publicly  
**\<sarang>** In the interest of time, let's review 6. ACTION ITEMS and then close to continue discussion afterword  
**\<binaryFate>** Ok don't hesitate to ping me on this  
**\<sarang>** I will be posting my CCS request soon, tidying up the output selection stuff for a recommendation, getting the DLSAG application paper reviewed and out the door, and playing around with that Lelantus paper when/if I get a chance  
**\<sarang>** suraeNoether: ?  
**\<suraeNoether>** CCS request, working on simulations and measurable numbers for matching, and looking into using our matching code to answer questions about output selection  
**\<sarang>** excellent  
**\<suraeNoether>** also casual github maintenance  
**\<sarang>** Any final questions or remarks before we adjourn?  
**\<xmrmatterbridge> \<learninandlurkin>** once you guys have made a recommendation for output selection  
**\<xmrmatterbridge> \<learninandlurkin>** and it gets implemented, what's the next big focus?  
**\<sarang>** There will be much to consider in the realm of refund and payment channels  
**\<xmrmatterbridge> \<learninandlurkin>** Ooh yes the refund ideas from a while back were really interesting  
**\<sarang>** and some aspects of output selection, like linking spends across rings in txns, is not solved yet  
**\<xmrmatterbridge> \<learninandlurkin>** Seems like a logical next area of research  
**\<sarang>** and if coinjoin works out, there will be a lot to consider with that  
**\<sarang>** Also transaction relay and network-level anonymity stuff that's still in progress  
**\<sarang>** To quote the Simpsons: "like the cleaning of a house... IT NEVER ENDS"  
**\<sarang>** But on that note, our meeting does end  
**\<sarang>** Thanks to everyone for attending. We're adjourned; let the conversations continue  
