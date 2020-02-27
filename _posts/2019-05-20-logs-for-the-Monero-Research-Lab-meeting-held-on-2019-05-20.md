---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-05-20
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / suraeNoether
---

# Logs  

**\<suraeNoether>** allright everyone  
**\<suraeNoether>** welcome to our weekly research meeting  
**\<suraeNoether>** sarang is a bit behind this morning, but we'll begin anyhow  
**\<suraeNoether>** agenda is here  
**\<suraeNoether>** https://github.com/monero-project/meta/issues/345  
**\<suraeNoether>** we'll begin with: GREETINGS!  
**\<suraeNoether>** howdy everyone, I'm surae  
**\<suraeNoether>** anyone else here?  
**\<sarang>** Hi, sorry to be late  
**\<sarang>** Preparing for travel today  
**\<sarang>** How's it going, all?  
**\<suraeNoether>** i feel like a roundtable requires more than two people, otherwise it may be more like a linetable amiright  
**\<sarang>** Eh, no worries. Plenty to catch up on  
**\<sarang>** Let's move on to roundtable anyway  
**\<sarang>** May I go first, with a few tiny things?  
**\<sarang>** Then plenty of CLSAG talk  
**\<suraeNoether>** fire away brother  
**\<sarang>** Neato  
**\<sarang>** I'm working with the author of the output-flooding paper so he can get new results using correct network assumptions  
**\<sarang>** I've been working on the CLSAG proofs/definitions with suraeNoether (more on that to follow)  
**\<sarang>** Assisting hyc et al. with the RandomX audit logistics and planning  
**\<sarang>** And a bit more (but not much more) work on the MoJoin scheme  
**\<sarang>** That is all!  
**\<sarang>** Any questions on those prior to suraeNoether's update?  
**\<moneromooo>** I suppose the "not much more" means there's no solution yet for a values ?  
**\<sarang>** Not without some trust in the dealer (or a designated player)  
**\<sarang>** And now, on to suraeNoether   
**\<suraeNoether>** well, I spent this week writing a new definition of unforgeability for linkable ring signature schemes for the clsag paper, and reading updates on the dlsag paper  
**\<sarang>** That CLSAG definition is surprisingly subtle  
**\<suraeNoether>** clsag is looking like a 15-20% reduction in rate of growth of blockchain size, 15-20% improvement in verification speed, and we are formally proving signer ambiguity in a way that I think hasn't been done yet  
**\<sarang>** To sum up the earlier work, what remains on the proofs in your opinion? (I'll be reviewing its current state today on an aeroplane)  
**\<suraeNoether>** the only proof that remains right now is the proof for signer ambiguity and reducing it to the DDH problem  
**\<suraeNoether>** but i think it may be another weird variant like k-one-more DDH  
**\<sarang>** Eh, even so  
**\<suraeNoether>** our unforgeability reduces to k-one-more discrete logarithm, for example  
**\<sarang>** yup  
**\<suraeNoether>** there has been a back and forth between sarang, myself, and randomrun on the final proof and the utility of the colored coins section  
**\<sarang>** RandomRun mentioned a possibility for shifting the auxiliary key over to the other side of the hash  
**\<sarang>** key(s)  
**\<sarang>** (in the case of multi-type colored transactions)  
**\<suraeNoether>** oh yeah, he also noticed a way to aggregate all these dummy key images and it's possible he just made it even freaking smaller  
**\<sarang>** I'm not totally convinced of this just yet  
**\<suraeNoether>** i want it to be true  
**\<sarang>** Heh  
**\<sarang>** But essentially classifying the signing and aux keys by their linkability status is interesting  
**\<suraeNoether>** oh, also, i have printed the new ringct3.0 paper that was put on IACR this morning, and i imagine that will be a big topic of conversation at this informal monero workshop sarang and I are meeting up at  
**\<sarang>** Yes, it uses a Bulletproofs-style proving system  
**\<sarang>** and, if correct, is an honest-to-goodness trustless ring signature transaction system  
**\<sarang>** Link: https://eprint.iacr.org/2019/508  
**\<suraeNoether>** at this point, we have a handful of sublinear ring signature proposals and proving systems on the table for upgrading to Monero 2.0  
**\<suraeNoether>** i don't think "electric bugaloo" translates to esperanto well  
**\<suraeNoether>** but that's sort of what I would like to come out of MRL over the next 6-9 months  
**\<sarang>** What do we all think about the CLSAG timeline, realistically speaking?  
**\<sarang>** Presumably we'd be freezing for Carbon Crab in August  
**\<sarang>** If we desire to get CLSAG audited, that's additional time  
**\<sarang>** I would prefer to release the paper draft as soon as we have the proofs done (and before adding in other extra goodness, like multi-type transactions)  
**\<suraeNoether>** well, everything is proven except a single theorem in an appendix, so i'd be comfortable releasing a draft of it today with "DRAFT" plastered all over it, presuming you and randomrun are cool with that  
**\<suraeNoether>** i think it's possible that after you read the appendix, youare of the opinon that the proof is unnecessary, but i'd rather err on the side of having it and removing it rather than excluding it  
**\<sarang>** That's a great timeline  
**\<suraeNoether>** either way, i can't imagine the draft will not be finished before the end of the monero workshop this week, and if we are going to get it audited, we should move on that sooner rather than later  
**\<sarang>** It would be nice to get it in for Carbon Crab, but better to wait if it would mean rushing  
**\<sarang>** Such an audit would likely be fairly cheap, since the base code changes are quite minimal and straightforward  
**\<suraeNoether>** actually  
**\<suraeNoether>** i feel like the clsag change is far-reaching, and the scope of an audit could be... well, let's talk about that  
**\<sarang>** How so? There are two sides: the math, and the implementation  
**\<suraeNoether>** well, consider implementing bulletproofed range proofs  
**\<suraeNoether>** drop-in replacement for a little black box that sits inside our code  
**\<sarang>** The basic signature functions (and their underlying crypto changes) amount to surprisingly little  
**\<sarang>** and you can almost trace line-by-line the changes from MLSAG  
**\<suraeNoether>** except it's not for a single small drop-in black box part of a bigger machine  
**\<sarang>** It almost is  
**\<suraeNoether>** it \*is\* the machine, in a certain sense  
**\<sarang>** Well, that'd be up to an auditor to gauge the complexity of  
**\<suraeNoether>** i'm not arguing against an audit, i'm merely wondering aloud about the scope  
**\<sarang>** At any rate, once we're confident in it, I can contact some reviewers to get estimates  
**\<sarang>** I'd say from the transaction model (full vs simple) onward  
**\<sarang>** So, once you hit where MLSAG is directly called, the scope ends  
**\<sarang>** This tests whether the security is at \_least\_ as good as MLSAG  
**\<sarang>** Anyway, that's more of a future discussion TBH  
**\<suraeNoether>** well, we're going to need more formal specifications for CLSAG for use in such an audit either way, and i agree it's water not yet under this bridge  
**\<sarang>** Any other intriguing work to share suraeNoether ?  
**\<sarang>** The workshop will certainly bring many more interesting things to the next meeting  
**\<suraeNoether>** MRL11 has seen no progress since last week due to the time crunch of clsag and dlsag, but it's a really high priority for me due to the privacy of our users  
**\<suraeNoether>** i'd love to put signature scheme downs and work on sims  
**\<sarang>** Well, an action item is surely to get CLSAG pushed out for more review  
**\<suraeNoether>** yes  
**\<sarang>** I shall have to leave momentarily to head to an aeroport  
**\<suraeNoether>** any questions for me or sarang?  
**\<sarang>** But my action items are to get CLSAG finished up, and continue working on that output flooding data... as well as the workshop this week  
**\<moneromooo>** If that new rct3.0 system uses BPs, presumably it lends itself well to multiexps, and then gets to be faster too (pro rata) ?  
**\<moneromooo>** ie, still linear, but nice constants ?  
**\<sarang>** Possibly  
**\<sarang>** There may be issues with generators  
**\<suraeNoether>** moneromooo: i'm very excited to compare rct3.0 with a super secret paper sarang and i have been reading for a week or so  
**\<sarang>** At least for batching  
**\<suraeNoether>** personally i like having more than one sample of similar techniques because it makes it seem like generalizing is easier  
**\<suraeNoether>** anyway  
**\<moneromooo>** Ah, the secret rct.3.14159 paper...  
**\<suraeNoether>** fractional ring sizes are the future  
**\<suraeNoether>** differentiable signatures are also the future  
**\<suraeNoether>** the future of today's tomorrow... yesterday.^tm  
**\<moneromooo>** One could say... differentiable signatures are integral to the future ?  
**\<suraeNoether>** damn  
**\<suraeNoether>** moneromooo is the best of us  
**\<moneromooo>** In stupid puns at least.  
**\<suraeNoether>** okay, since sarang has to take off for el aeropuerto and i, also, need to pack  
**\<suraeNoether>** i say we bring today's meeting to a close  
**\<suraeNoether>** i'll see some of you in person tonight and tomorrow. :P  
