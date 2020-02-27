---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-11-05
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** Right right, let's begin our meeting now  
**\<sarang>** First, GREETINGS to/from all  
**\<sarang>** hello  
**\<sgp\_>** hello  
**\<sarang>** ping binaryFate dEBRUYNE endogenic hyc IsthmusCrypto gmaxwell gingeropolous moneromooo parasew[m] rehrar rrol[m] stoffu smooth UkoeHB etc  
**\<sarang>** small crowd today  
**\<parasew[m]>** hi  
**\<sarang>** Even so, RESEARCH UPDATE time  
**\<sarang>** I've done some rearranging with the Lab's public-facing presentation  
**\<sarang>** We'll be routing the old lab.getmonero.org to the new getmonero.org MRL landing page  
**\<sgp\_>** nice  
**\<rehrar>** I'm here  
**\<sarang>** This allows for translations of things like abstracts, and lets us PR new papers  
**\<sarang>** Once this gets merged over on monero-site (hint hint nudge nudge), the three newest MRL publications will appear there  
**\<sarang>** English translations only for those papers' abstracts, for the moment  
**\<sarang>** Anyway, PR is open there: https://repo.getmonero.org/monero-project/monero-site/merge\_requests/950  
**\<sarang>** Some format changes too; review if you like  
**\<sarang>** I've tossed a basic noninteractive musig implementation over to the sublinear prototyping code for testing purposes  
**\<sarang>** The usual lit review  
**\<sarang>** And a lot of investigations on output selection since the upgrade  
**\<sarang>** Any questions/comments on these items?  
**\<sgp\_>** do you think it would be useful to have another bulletproof-type video talking about the recent selection changes and possible options going forward? It could be much shorter, perhaps 20-30 minutes  
**\<sarang>** I don't consider there to be consensus on the best way to iterate on that  
**\<sarang>** so it's not clear what user benefit there would be, except "it's better than before, and we're working on it"  
**\<sarang>** :/  
**\<sgp\_>** it could be useful just to get the info out there. depends on user feedback I suppose  
**\<sgp\_>** most people probably don't care  
**\<sarang>** We certainly could, but I also don't want to cause unnecessary FUD  
**\<sarang>** My standard line has become "output selection is one layer we use to keep transactions safe; it's been iterated many times over the project's history, and continues to be"  
**\<sgp\_>** all right, we can move on then  
**\<sarang>** as with many heuristics, a suboptimal selection algorithm is not a spend proof  
**\<sarang>** ring signatures continue to do exactly what it says on the box  
**\<sarang>** I'm running a workshop in Chicago later this week, offering hands-on coding with some basic crypto constructions in Python, practicing RPC calls and explorer APIs, and maybe writing some C++ unit tests  
**\<sgp\_>** I'm really interested to hear how these technical workshops go  
**\<parasew[m]>** very nice, sarang.  
**\<sarang>** Folks will get a chance to implement Schnorr sigs and some commitment code  
**\<sarang>** Otherwise, I continue to move forward on ring sig code/tests, some graph analysis that moves our spent-output work forward to examine complexity, etc  
**\<sarang>** Does anyone else have topics of interest to discuss or ask about? Or doing some work that's of interest to the group?  
**\<suraeNoether>** hey everyone, sorry for my delay  
**\<sarang>** np  
**\<sarang>** I just finished my brief updates  
**\<sarang>** This is a good place to jump in  
**\<suraeNoether>** well, this weekend I spent time on matching and churn and benchmarking the known traceability attacks on monero, and how to translate similar attacks on zcash into this framework  
**\<suraeNoether>** worked on the paper for that a bit  
**\<suraeNoether>** chatted with rehrar on the phone regarding the monero konferenco  
**\<suraeNoether>** i'm starting to reach out to speakers for formal invitations  
**\<suraeNoether>** aaaand yeah, slow weekend, i've been ill :(  
**\<suraeNoether>** i'll hopefully be pushing a bipartite graph-theoretic benchmarking tool some time this week  
**\<suraeNoether>** hopefully first draft of this benchmark paper will be available by end of november  
**\<sarang>** This graph matching work is quite excellent  
**\<sarang>** It links the complexity of determining possible spends with computational problems in graph theory  
**\<suraeNoether>** yeah, we're getting very good information on the raw computational effort and time an adversary would have to spend to "unravel" monero  
**\<sarang>** Can you elaborate on the tool?  
**\<suraeNoether>** sur  
**\<suraeNoether>** sure\*  
**\<suraeNoether>** the tool is essentially going to compute maximal matchings on randomly generated graphs of specified properties (like number of nodes, connectivity, etc) with the intent of estimating, ballpark, the constants associated with big-oh timing  
**\<suraeNoether>** for those of you unfamiliar: https://en.wikipedia.org/wiki/Big\_O\_notation  
**\<sarang>** Which algorithm(s) in particular?  
**\<suraeNoether>** https://en.wikipedia.org/wiki/Hopcroft%E2%80%93Karp\_algorithm  
**\<sarang>** great  
**\<suraeNoether>** so, essentially, finding an optimal matching under some null model is the same as finding a maximal matching of a related graph, which is the same as finding augmenting paths for existing matching, and all that boils down to...  
**\<suraeNoether>** breadth-first searches  
**\<rehrar>** you guys are the bees knees  
**\<suraeNoether>** so the idea is this  
**\<sarang>** Oh, a quick housekeeping note (lest I forget) that suraeNoether and I have an open funding request for an upcoming Stanford academic conference... and there are other open requests in need of support too: https://forum.getmonero.org/8/funding-required  
**\<suraeNoether>** if we can estimate a ballpark constant k such that it takes, worst-case, k\*r\*n^1.5 units of time to find a maximal matching on an r-regular bipartite graph with 2n nodes in it, using a dumb computer with a dumb algorithm that isn't parallelized, we can begin estimating what a large-scale perfect matching disclosure attack would do to Monero. (see here:  
**\<suraeNoether>** https://link.springer.com/chapter/10.1007/978-3-540-70630-4\_2 )  
**\<suraeNoether>** this literally quantifies the urgency with which we need to replace ring signatures  
**\<suraeNoether>** i have some expectations of the results, but we'll see how it all unrolls  
**\<suraeNoether>** \*and for those who are interested\* that paper above is not one-to-one directly correlatable with Monero. comparing the results from that paper to our system is inappropriate for a handful of reasons  
**\<suraeNoether>** if anything, that paper seems more related to "what would happen if we did a fluffypony styled 30-day timed zcash sidechain?"  
**\<sarang>** but it's a great first approach  
**\<suraeNoether>** yeah, and i'm eager to apply the results therein with the zcash turnstile  
**\<fluffypony>** what's the zcash turnstile? I haven't been following recently with the CLI and GUI releases  
**\<sarang>** You can't go sprout to sapling  
**\<sarang>** you have to sent to transparent, and then to sapling  
**\<suraeNoether>** yep: sprout -> transparent -> sapling  
**\<sarang>** They plan to release a tool to help users not fuck it up, but I hear it won't be out for a couple months  
**\<sarang>** IMO it's a terrible idea to do it this way  
**\<sarang>** They call it "turnstile" to make it seem like Fancy Moon Math  
**\<suraeNoether>** nah, they called it that for auditing reasons  
**\<sarang>** Oh, I know why they want it  
**\<suraeNoether>** they want to demonstrate exactly as many zcash exist as intended  
**\<sarang>** but it's a terrible idea and the name softens it  
**\<suraeNoether>** security be damned, i guess. :P  
**\<sarang>** Not offering users help in doing it safely is dumb as rocks  
**\<binaryFate>** auditing reasons is an admission you don't trust your math/implementation  
**\<gmaxwell>** it's an implicit admission that they could be inflated...  
**\<sarang>** I did hear that they're backing off the "eventually make sprout unspendable" bandwagon  
**\<sarang>** so that's good  
**\<sarang>** (that was also dumb as rocks IMO)  
**\<suraeNoether>** agreed  
**\<suraeNoether>** anyway  
**\<sgp\_>** I offered to help them mitigate turnstile privacy loss. We'll see how good we can get, but it will be a bloodbath no matter what, especially since many people have already transitioned  
**\<gmaxwell>** thats a pretty big albatross though... an extra gigabyte of key data wallets need ot have to support it?  
**\<sarang>** They should have released the tool and clear instructions to use it  
**\<sarang>** gmaxwell: I consider deprecation of spend ability to be a huge violation of the "social contract" of the asset  
**\<suraeNoether>** sarang i'm not sure if they've backed off of that. saw zooko brag about backwards incompatibility on twitter. :P  
**\<sarang>** Ugh, I had read that they were \_not\_ looking toward deprecation. Boo  
**\<binaryFate>** ring signatures for turnstile would help and keep auditing possible :P  
**\<suraeNoether>** anyway, this is off-topic for the research meeting BUT point of the matter is that a modified version of the matching game applies to zcash and it's made more interesting by adding the existence of a second shielded pool  
**\<suraeNoether>** binaryFate: +1  
**\<suraeNoether>** i would invest in zcash and put it all into the sapling shielded pool, but i wouldn't be able to be confident they'll deprecate \*that\* shielded pool and force me through a transparent pool again in the future  
**\<suraeNoether>** they can promise that they are abandoning their transparent pool all they like  
**\<suraeNoether>** i'll believe it when i see it  
**\<sarang>** sure  
**\<suraeNoether>** seriously off topic  
**\<sarang>** But good to keep in mind our goals relative to what's happening in this space  
**\<sarang>** noooo  
**\<sarang>** -lounge  
**\<sarang>** Anyone else with Fun Things to share?  
**\<rehrar>** #monero-too-many-rooms-discussion  
**\<sarang>** stahp  
**\<suraeNoether>** i tried to get #monero-recipes off the ground, but noooo  
**\<suraeNoether>** ok, i guess unless folks have more to talk about  
**\<suraeNoether>** we can call this a /meeting  
