---
layout: post
title: Logs for the MRL Meeting Held on 2019-11-18
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** First, GREETINGS  
**\<sarang\>** Hello  
**\<hyc\>** heylo  
**\<mikerah\>** hello  
**\<sarang\>** For today's ROUNDTABLE, I have a few things of interest to share  
**\<sarang\>** Updates to the RingCT 3.0 analysis and code reflect its two provably-sound versions: https://github.com/SarangNoether/skunkworks/blob/sublinear/rct3.md  
**\<sarang\>** One version is the authors' padded-input version that implies some restrictions on the signer count  
**\<sarang\>** The other version is a backport I did of the exploit fix from their newer version to the original one, with corresponding changes to security proofs  
**\<sarang\>** Triptych analysis now reflects an optimized multi-signer version: https://github.com/SarangNoether/skunkworks/blob/sublinear/triptych.md  
**\<sarang\>** as does its code and the draft writeup  
**\<sarang\>** I have shared the writeup with a few additional researchers as well, in the hope of getting extra eyes on the soundness proof  
**\<sarang\>** The CLSAG paper was unfortunately rejected for the Financial Cryptography 2020 conference (which only had a 22% acceptance rate, according to the committee)  
**\<sarang\>** Here are the reviewer comments: https://gist.github.com/SarangNoether/e39db743c3260448c1d67c3622b43f4b  
**\<sarang\>** Reviewer A, who recommended rejection, made some detailed points about the security model: particularly how ambiguity and linkability are treated relative to some other papers  
**\<sarang\>** Once suraeNoether returns, I want to discuss the particulars of this  
**\<sarang\>** I'm not convinced that the more complete linkability treatment (which ties in ambiguity as well) is needed, given the use case  
**\<sarang\>** However, the recommendation for a more robust treatment of signer ambiguity is fair  
**\<sarang\>** The notes about the k-OMDL assumption being less common are also fair, but that's the best hardness assumption that was found for the proofs in question  
**\<sarang\>** Related to CLSAG:  Derek at OSTIF tells me that JP Aumasson, who quoted $7200 to review the paper, is available presently to do so, and it's not clear at the moment when he would be unavailable again  
**\<sarang\>** I didn't sense a lot of broad support for this earlier  
**\<sarang\>** Given that the FC2020 review comments just came back, the paper should be updated to reflect the notes before being sent off to anyone for additional review  
**\<sarang\>** So the timeline on this seems unclear right now  
**\<sarang\>** Does anyone else wish to share interesting news or research?  
**\<sarang\>** Righto  
**\<sarang\>** My ACTION items are to address CLSAG reviewer comments to update the preprint, finalize single-signer Triptych analysis and the associated preprint, continue working with others on whether multi-signer soundness is provable using known assumptions,  and examine the current state of suraeNoether's graph-matching work  
**\<sarang\>** What a quiet meeting =p  
**\<MalMen\>** normaly this meetings are you talking with suraeNoether :P (at least the lasts I watch)  
**\<MalMen\>** I am reading the links you posted, thank you for the heads up  
**\<sarang\>** selsta also posted this link elsewhere, which I found very interesting: https://medium.com/dragonfly-research/breaking-mimblewimble-privacy-model-84bcd67bfe52  
**\<sarang\>** Looking at a practical attack on Grin using network observation  
**\<MalMen\>** I did start to understud better how MW work with that research  
**\<MalMen\>** there is not much they can do about this kinda of attack unless users kinda of "coinjoin" the transactions with know peers before releasing them to the all network  
**\<MalMen\>** for what I did understund about it  
**\<sarang\>** It definitely highlights the importance of the network and propagation layer in transactions  
**\<kico\>** seems like using 8 peers only by default is kinda dangerous  
**\<sarang\>** vtnerd has been looking into the tricky interactions involved with integrating Dandelion++, I2P, Tor, and the like  
**\<kico\>** I mean for dandelion to work "properly"  
**\<MalMen\>** It should be possible to get some farly good level of privacy with MW, but the way the transactions are propagated would need to became more complex in order to ofuscate the way they are made  
**\<sarang\>** How so? Dandelion++ provides restrictions on stem neighbor selection for a given time epoch  
**\<MalMen\>** kinda of what Bitcoin think they can do on layer2 to obuscate the linkability on layer1  
**\<kico\>** I guess if one connects to more peers it increases the chance that it aggregates transactions before they're peered to the network for what I understood from that paper  
**\<sarang\>** A good lesson on how it's tricky to assume things about transactions before they reach the chain, I suppose  
**\<sarang\>** Well, anything else of interest to discuss before closing the meeting?  
**\<sarang\>** If anyone has thoughts or comments relating to the CLSAG reviewer notes, I'd be glad to hear them  
**\<MalMen\>** just one quick question from someone that dont know much abouth CLSAG  
**\<sarang\>** sure  
**\<MalMen\>** CLSAG will not make possible second layer networkds (missing the word here) ?  
**\<sarang\>** No, it doesn't introduce any new functionality toward that  
**\<sarang\>** Its only purpose is to make signatures smaller and a bit faster  
**\<sarang\>** Off-chain solutions are limited by a lack of scripting and ambiguity around useful things like non-interactive refunds, etc.  
**\<MalMen\>** there is something that can possibility second layer in the future for monero  yet or we still far from it ?  
**\<sarang\>** Introducing such things is tricky (DLSAG is one attempt, but suffers from a linking problem)  
**\<MalMen\>** ok, thank you for the heads up  
**\<sarang\>** If you are willing to work through the technical language and definitions, the DLSAG paper has some very clever constructions: https://eprint.iacr.org/2019/595  
**\<sarang\>** (disclaimer: I am a co-author on the paper, but did not come up with the original idea)  
**\<MalMen\>** Ok, I will take a look  
**\<sarang\>** It highlights how tricky it can be to enable swaps, payment channels, and the like, given the protocol and indistinguishability restrictions  
**\<sarang\>** Oh, I should also add that the DLSAG paper \_was\_ accepted to the FC2020 conferences  
**\<MalMen\>** oh, that is good  
**\<MalMen\>** I believe that it will be almost impossible to make any "Non-Interactive Refund Transactions" (just took it from the paper) seemless as the other transactions  
**\<sarang\>** DLSAG comes very close, but the linking problem is troublesome  
**\<MalMen\>** peraphs we would come to a place where we need to choose if we want to acept anything like DLSAG knowing its less private but allow us to have hotswaps and some kind of lightning network working  
**\<MalMen\>** or just keep with onechain transactions  
**\<sarang\>** I would not expect broad support for such a tradeoff, but who knows  
**\<sarang\>** And perhaps a new idea that \_does\_ solve the problem will arise at some point  
**\<MalMen\>** we hope so  
**\<sarang\>** Anyway, are there other topics of interest to bring up before closing the meeting?  
**\<MalMen\>** well, thats all from me, thanks for your time sarang \*  
**\<sarang\>** no problem  
**\<sarang\>** OK, the meeting is over! Thanks to everyone for attending  
