---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-03-19
summary: MRL work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>** So research meeting, I guess, 1) Hello. 2) Sarang's stuff (he appears to not be on)... 3) my stuff. 4) anyone anything else is interested in, and 5) questions  
**\<suraeNoether>** looks like participation this week is a litlte weak. maybe it has something to do with the st patty's weekend or something  
**\<suraeNoether>** So, skipping directly to what i've been working on: I finished the multisig "submission" draft (here https://github.com/b-g-goodell/research-lab/blob/in-prep/publications/bulletins/MRL-0007-multisig/draft/MRL-0007-multisig.pdf )  
**\<suraeNoether>** i've gotten one email from someone about key cancellation, which I was able to explain  
**\<suraeNoether>** but i'm seeking all sorts of feedback, in particular about the veracity of my proofs  
**\<rehrar>** here  
**\<suraeNoether>** andytoshi if you wouldn't mind giving it a sanity check read-through and some brutally honest critiques before I push it out the door, I value your opinion. luigi1111  and moneromooo  the implementation in the paper doesn't exactly match the code, i'm splitting the code review into a second document  
**\<suraeNoether>** other than that, i've just been thinking about how to send an output to a \*subring\* of user keys instead of a single user key. and then any ring signature with a key image from the destination subring has authorization to sign a new signature  
**\<suraeNoether>** if i can figure out how to force the square peg/round hole, this is a way to have refund transactions  
**\<suraeNoether>** but it's not atrivial problem  
**\<suraeNoether>** i'm also thinking about how one could send to a "special" monero adress (special according to some TBD definition) that allows a sort of off-network ledger system to track asset issuance and transfer. sort of monero lightning, but not exactly  
**\<suraeNoether>** and the refund addresses are required for that to work out, so... yeah  
**\<suraeNoether>** basically, all theoretical week from me for a few days  
**\<suraeNoether>** ahrem  
**\<suraeNoether>** so, if anyone has any questions  
**\<suraeNoether>** we can call this a Q&A or something I guess. :P  
**\<suraeNoether>** or if anyone thinks we need to start looking into some specific stuff, we can chat about it  
**\<gingeropolous>** are u guys looking into PoW mods / changes / evolution?  
**\<suraeNoether>** there is a core team discussion that involves MRL that is kind of ongoing about PoW  
**\<gingeropolous>** gotcha. i just didn't know if you've formally looked into some things like ... ah some password hash that hyc brought up, or the thing merkle tree proof thing, etc  
**\<suraeNoether>** i haven't looked into any specific stuff recently... but i'm starting to be inclined toward abandoning the idea of asic resistance. in one sense, at least, it's a matter of willfully engaging in an arms race that, 7 years from now, will be (unless something changes) all but unwinnable  
**\<suraeNoether>** ah, that password hash document bothers me  
**\<suraeNoether>** i need to talk to sarang about it actually  
**\<suraeNoether>** it seems like a nice idea because you are 1) hashing 2) an RSA signature  
**\<suraeNoether>** there are some issues with trying to  boost a low-entropy space like the space of passwords to a high-entropy space  
**\<rehrar>** smooth's point that the centralization required to hard fork away from ASIC resistance isn't something that's what Monero stands for long term  
**\<moneromooo>** That sounds a lot like "abandoning the idea of freedom".  
**\<gingeropolous>** ^^  
**\<suraeNoether>** hahahha  
**\<suraeNoether>** ok well  
**\<suraeNoether>** think of it this way  
**\<gingeropolous>** yeah i was gonna say, if your pro asic, then as lord troll dev I banish u  
**\<suraeNoether>** lol no no i'm not pro-asic... or rather, i'm not pro-centralization  
**\<rehrar>** my opinion: https://www.reddit.com/r/Monero/comments/84vqkt/why\_is\_everyone\_so\_happy\_about\_making\_monero\_asic/dvsy5us/  
**\<suraeNoether>** i'm just not convinced that anti-asic = pro-decentralization in the long-run  
**\<rehrar>** centralization happens with asic resistance or asic friendliness, just in different ways  
**\<suraeNoether>** andytoshi made a very very good argument at one point that the most decentralized a PoW mining scheme \*can be\* is if it's been ASIC'd down to the thermodynamic equilibrium  
**\<suraeNoether>** right  
**\<gingeropolous>** well, i guess my point was to ask if you've investigated some of the wilder thoughts that have cropped up, like compiling as a PoW  
**\<moneromooo>** The long run is different from the near future. You can make different decisions for both, but you can't made decisions for the long term now without knowing how things develop.  
**\<suraeNoether>** what i'm primarily concerned about is preserving monero's censorship resistance, antifragility, etc all the buzzwords cryptotwitter loves  
**\<suraeNoether>** gingeropolous: i'm always looking into new schemes, if you find one send me a link! i haven't seen anything like compiling as PoW before  
**\<gingeropolous>** well no one has  
**\<rehrar>** Right moneromooo, which is why I support ASIC resistance in the short term, and probably sometime much further down the road when things have developed quite a bit, ASIC friendliness  
**\<suraeNoether>** moneromooo: correct. and in the short-run we have been rather dedicated to foiling ASIC rollouts and this I FULLY support  
**\<gingeropolous>** its fresh off the mindspring of the collective  
**\<gingeropolous>** so there's no link  
**\<rehrar>** if there ever comes a point where ASIC creation and distribution is much more decentralized than today (as determined by...?), then I would be in favor of switching to an ASIC-friendly algo  
**\<suraeNoether>** so let me be very clear  
**\<gingeropolous>** thats the general idea. I like the metric that fluffypony proposed - when ASICS are handed out as schwag at corporate events  
**\<madLyfe>** i can ask PoW and BP question?  
**\<suraeNoether>** I'm 100% behind the community's unspoken social contract that the path to centralization (whihc is inevitable) needs to sort of be \*linear\* in the amount of burnt resources.  
**\<suraeNoether>** yep madLyfe shoot  
**\<suraeNoether>** i feel like that was one of the more fun takeaways from the cryptonote initial design  
**\<rehrar>** I think this distinction is important though gingeropolous because otherwise people think ASIC resistance is the be-all-end-all of Monero security. And if they don't realize that it's a means to an end (decentralization and censorship resistance) then if/when we do come to a point that ASIC-friendliness is the better option, there will be hell to pay as people don't understand.  
**\<madLyfe>** is it in the cards to move towards CPU only PoW mining for the next HF? and for BPs, is it possible to apply in reverse? or prune? or make the chain size smaller?  
**\<moneromooo>** Define "in reverse".  
**\<luigi1111w>** not possible  
**\<luigi1111w>** possible to prune, absolutely  
**\<madLyfe>** well maybe not via BPs but to make the entire chain size smaller.  
**\<suraeNoether>** madLyfe: our recent work on the PoW algorithm is intended to foil ASICs that have already been taped out at the factory. the goal is to make monero as close to "all CPU mining" as possible (for the time being).  
**\<luigi1111w>** by pruning and certain trust models, yes  
**\<suraeNoether>** madLyfe: you mean like compressing the current blockchain? i echo what luigi1111w said  
**\<luigi1111w>** well different types of pruning for different trust models, heh  
**\<madLyfe>** is there an idea of what % of the chain could be shed?  
**\<suraeNoether>** although i'm fairly certain that gmaxwell's original proposal for masking amounts with confidential transactions, where he says that range proofs etc can eventually be discarded... this was a comment intended for a bitcoin-style rollout not a monero style rollout, so i'm not sure how much we'll be able to save on pruning  
**\<madLyfe>** ah  
**\<suraeNoether>** madLyfe rather than looking at % shaved off the current blockchain, we tend to focus on the marginal improvements like "how much faster or smaller can we make it going forward"  
**\<moneromooo>** With 100% pruning I can give you an idea, for a lower bound.  
**\<rehrar>** luigi1111w, as I don't have a lot of experience in this, what you're saying is that if a person is willing to trust certain things implicitly, then they are able to prune different parts of the blockchain depending on what things they trust, correct?  
**\<suraeNoether>** moneromooo: +1  
**\<suraeNoether>** rehrar: that is what luigi1111w is saying yeah  
**\<luigi1111w>** rehrar prune at different times  
**\<suraeNoether>** well i shouldn't speak for him  
**\<rehrar>** that'd be interesting  
**\<luigi1111w>** you can prune after verifying  
**\<luigi1111w>** or you could "sync pruned"  
**\<suraeNoether>** if you are willing to trust the past 3 months of blockchain info, and willing to trust that range profos aren't cheatable, you can get away with checking nothing but signatures for 90 dyas, for example  
**\<rehrar>** leave it up to the user to define what they are comfortable trusting and not, with some users choosing max convenience (basically 96%) and some users choosing to verify and store it all  
**\<rehrar>** moneromooo, could you give that number? I'd be interested to know.  
**\<luigi1111w>** note that basically all users already trust hashes for historical syncing  
**\<luigi1111w>** well basically all, I don't have numbers  
**\<moneromooo>** Hmm. Looks like 50 GB in prunable stuff. Looks a bit much.  
**\<rehrar>** perfect! Let's tell the community.  
**\<luigi1111w>** the chain isn't even 50 GB?  
**\<luigi1111w>** lol  
**\<suraeNoether>** rehrar: while that seems like an interesting idea on the surface, keep in mind we don't necessarily let users select everything based on their trust model. for example, they can't pick a curve with smaller group order because they are so trustworthy.  
**\<moneromooo>** It's 58 GB on my disk.  
**\<rehrar>** luigi1111w it adds more space to your hard drive  
**\<suraeNoether>** although it'd be \*very\* interesting to see a cryptocurrency where each transaction specifies \*everything\* including curves. :P heh  
**\<luigi1111w>** .hmm  
**\<luigi1111w>** 44.2GB on mine  
**\<moneromooo>** Yeah, that sounds a bit wrong.  
**\<rehrar>** suraeNoether but is this enforced at a protocol level?  
**\<moneromooo>** Ah, but I have a db where I split prunable/unprunable, and I have a prunable hashes table too.  
**\<rehrar>** or in our reference client implementations (sorry I am nub)  
**\<luigi1111w>** we only have one curve  
**\<luigi1111w>** and one group, really  
**\<luigi1111w>** so, yes (enforced)  
**\<rehrar>** k, if I'm too stupid just pat me on the head and move on :D  
**\<luigi1111w>** though one could certainly choose a lower scalar entropy if they desire  
**\<luigi1111w>** (ie, they are incredibly stupid)  
**\<luigi1111w>** ((yet somehow smart enough to set it up))  
**\<anonimal>** X)  
**\<suraeNoether>** rehrar: well, think about it like ring size  
**\<suraeNoether>** except instead of signer ambiguity, you're looking at transaction validity  
**\<suraeNoether>** if you allow users to trust less for greater convenience, you get american airports, TSA, border securiyt, and no more 4th amendment ... ahem what was I saying?  
**\<luigi1111w>** that does not sound like greater convenience -\_-  
**\<suraeNoether>** ikr?  
**\<suraeNoether>** so, i thought zkledger was silly until i realized it could be layered on top of or integrated into most Pedersen-commitment-based cryptocurrencies really nicely  
**\<luigi1111w>** moneromooo sorry just saw your comment  
**\<luigi1111w>** how can that be that much space  
**\<andytoshi>** suraeNoether: sorry, i stepped away. sure i can read over the multisig thing  
**\<moneromooo>** I think mdb\_stat is including free space in its pages count. I asked hyc,  
**\<luigi1111w>** prunable hashes should be like a few hundred MB  
**\<madLyfe>** thanks guys!  
**\<suraeNoether>** it allows a user to act like a "depositor" and specify a finite number of "banks" and execute transfers between these banks and prove it is all correct without revealing any information about that. at first i was like "ehhhh seems like a very fixed set-up that requires a trusted third party, etc etc." then i realized this allows a user to (1) declare and issue an asset, (2) declare a finite set of accounts  
**\<suraeNoether>** through which this asset will be be transferred, and (3) issue assets and transfer them around between these accounts with zkledger. use case: a large store wishes to issue gift cards. they act like a depositor, depositing XMR into a gift card zkledger,  declaring a finite set of banks/accounts, say one for each brick and mortar store, and updates the zkledger offchain with gift card transactions. later, they  
**\<suraeNoether>** can close the transaction by auditing the ledger and proving no XMR was created or destroyed.  
**\<madLyfe>** moneromooo: so you are saying the chain could be pruned to 17%ish of its current size?  
**\<moneromooo>** I am saying mdb\_stat is getting me weird results.  
**\<suraeNoether>** madLyfe: the take-away is that we have some pruning available if we had some folks carefully thinking about how to do it. :P  
**\<suraeNoether>** we all wear multiple hats here  
**\<suraeNoether>** oh ... uh... i guess we can say that concludes the meeting? :P oy, today was quite informal. \</meeting>  
