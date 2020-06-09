---
layout: post
title: Logs for the MRL Meeting Held on 2019-12-16
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** GREETINGS  
**\<suraeNoether\>** howdy!  
**\<suraeNoether\>** suppose we should move onto the roundtable?  
**\<sarang\>** Might as well  
**\<sarang\>** Who shall begin?  
**\<suraeNoether\>** I'm going to ping isthmus  
**\<suraeNoether\>** in the hopes that he can describe a bit of the data science work he's currently doing  
**\<Isthmus\>** n3ptune and I have been looking at block rewards  
**\<Isthmus\>** Lots of funky stuff going on  
**\<sarang\>** How so?  
**\<Isthmus\>** Isthmus is digging up figures  
**\<Isthmus\>** Here's a bad figure, and I'll try to have a nicer one by the end of the meeting  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/f9F4XDd3/image.png  
**\<Isthmus\>** x-axis is block height  
**\<Isthmus\>** y-axis is the total reward claimed by the miner  
**\<Isthmus\>** (fresh + fees)  
**\<Isthmus\>** The trend is basically our emission curve (the bottom of the traces)  
**\<Isthmus\>** The data points above the trend are miners who made good blocks with fees on top of reward  
**\<suraeNoether\>** exponential decay shape of the graph comes from our emission curve (fees are related to block reward). is the piecewise break from bulletproofs?  
**\<Isthmus\>** The anomalies below the line are what's interesting  
**\<Isthmus\>** There's a few distinct events that happened  
**\<Isthmus\>** For each, we can tell a few things:  
**\<Isthmus\>** Exactly which blocks were mined by that miner/pool/software  
**\<Isthmus\>** (linkability)  
**\<Isthmus\>** And exactly how long it took them to notice that they were making suboptimal blocks, and fix the software  
**\<Isthmus\>** You can tell a bit more by adding size as the color  
**\<Isthmus\>** https://usercontent.irccloud-cdn.com/file/HUoctx7I/image.png  
**\<Isthmus\>** Scale is blue to yellow  
**\<Isthmus\>** So there I've zoomed into a small section  
**\<Isthmus\>** Looking at the band from 1225000 to 1275000ish  
**\<Isthmus\>** It looks like the blocks claiming \*less\* reward than empty blocks are about the same size as those produced by others  
**\<suraeNoether\>** that graph is gorgeous bro  
**\<Isthmus\>** thx :- )  
**\<sarang\>** Odd behavior  
**\<sarang\>** The definition of suboptimal, you might say...  
**\<Isthmus\>** Yeah, because their sizes are about the same as the surrounding blocks, here are two guesses for what might be happening  
**\<Isthmus\>** Maybe other miners are making high-fee big blocks, and the ones below the trend are the suckers that make big blocks after the mempool has been tapped out for high-fee txns  
**\<Isthmus\>** But based on how bounded the second (anomalous) trend is, I think it might just be a software bug?  
**\<Isthmus\>** I just discovered this like 20 hours ago, so I haven't done full exploration  
**\<Isthmus\>** I'll be able to drill down into the blocks and actually figure out what was going on  
**\<Isthmus\>** (that's about where it's at right now)  
**\<sarang\>** It's really interesting to see it mapped out so clearly  
**\<suraeNoether\>** thanks so much, isthmus; it seems to me like i've read at least one paper about purposely claiming smaller rewards for a variety of game-theoretic reasons...  
**\<suraeNoether\>** i'm going to try to dig up at least one of htem  
**\<suraeNoether\>** i have so many questions about this  
**\<sarang\>** It would be good to know which particular software (if it's specific) leads to this, due to how common it appears to be  
**\<sarang\>** suraeNoether: your roundtable?  
**\<suraeNoether\>** yeah, sure: Matching. I \*think\* i'm \*one\* bug away from getting all the data i want. and I'm talking to Insight Data Science to throw a fellow at the simulation results to help me come up with best-practices recommendation  
**\<suraeNoether\>** my current bug is silly and strange, in that i'm not adding the number of nodes and edges my software is expecting. initially i thought this was a problem with computing the number of available ring members or something like that, but i'm still trying to figure it out  
**\<sarang\>** Do you have code ready that can reproduce it?  
**\<suraeNoether\>** it occurs in a random test in testSimulator.py, not any of my deterministic tests  
**\<suraeNoether\>** so i'm still hunting down exactly the conditions that lead to the bug, and attempting to isolate it as a new unit test  
**\<suraeNoether\>** the graph theoretic component is working perfectly, the analysis component exploring parameter space is working perfectly, but the simulator keeps hitting this snag and then we're off to the races  
**\<endogenic\>** oops, here  
**\<suraeNoether\>** welcome  
**\<endogenic\>** suraeNoether: you dont think V could make all those masks by himself even in 20 years though?  
**\<sarang\>** suraeNoether: is the currently-pushed code the version you're working with?  
**\<suraeNoether\>** yes, the commit i pushed this morning  
**\<suraeNoether\>** to matching-buttercup branch  
**\<suraeNoether\>** so, someone brought up by sidechannel the question about whether i should re-implement the sims in rust in the hopes that the improved explicit references of rust would help find the errors  
**\<sarang\>** Do you suspect that could be the origin of the errors?  
**\<suraeNoether\>** i think refactoring the whole codebase is a last-ditch effort for finding the bugs, though  
**\<sarang\>** If they're simply algorithmic mistakes, switching to Rust might not do anything  
**\<suraeNoether\>** no; i literally think i'm merely predicting the number of nodes and edges incorrectly based on the total nodeset as opposed to only the nodes that can be spent.  
**\<endogenic\>** have you tried log statements?  
**\<endogenic\>** secret weapon  
**\<suraeNoether\>** and i'm in the midst of tracking that down  
**\<Isthmus\>** Could you tweak the simulation to be 3 blocks long, 2 transactions per block, with spend pattern & ring member selection algorithm = pull from previous block  
**\<Isthmus\>** Would the issue persist and be easy to spot by eye?  
**\<sarang\>** endogenic: your suggestion reminded me of https://xkcd.com/451/ =p  
**\<endogenic\>** except that i am  
**\<endogenic\>** :P  
**\<sarang\>** Nono, the statement about logs!  
**\<sarang\>** Sorry, digression  
**\<suraeNoether\>** isthmus unfortunately i believe the problem may be in the ring selection algorithm i have written (which is only uniform at this point), so that would reduce the problem away  
**\<suraeNoether\>** but i'm attempting something similar next  
**\<suraeNoether\>** right now, debugger is my friend  
**\<suraeNoether\>** sarang, how about you?  
**\<endogenic\>** log statements are nice because you can let the whole thing run  
**\<sarang\>** Several things to mention  
**\<endogenic\>** debugger is also nice.  
**\<sarang\>** I modified the linkability and non-frameability definitions in Triptych, and would like to see if they can be directly used in CLSAG as well  
**\<sarang\>** I've come around on Backes' definition of linkability  
**\<sarang\>** I updated the CLSAG linkable anonymity definition, as well as its proof  
**\<sarang\>** Reviewed a paper by the Zcoin folks on hierarchical Groth commitment proofs  
**\<sarang\>** Looked over some changes that Zcoin made to fix a problem they had relating to Groth proofs (doesn't apply to Triptych)  
**\<sarang\>** Worked out some example code for doing inversion via an MPC for use in computing certain linking tag constructions  
**\<sarang\>** and wrote out some simple draft MPC ideas for RCT3 and Triptych, which for now assume honest-but-curious players  
**\<suraeNoether\>** nice!  
**\<sarang\>** The good news on MPC is that it's certainly possible to collaboratively compute the inverse-based key images used in those proving systems  
**\<sarang\>** The bad news is it requires something akin to Paillier encryption, which leads to some computational overhead  
**\<suraeNoether\>** hmmm are you looking into the MPC stuff for linking tag constructions due to the constructions and usage of linking tags in Triptych?  
**\<sarang\>** (note that my example code should \_not\_ be taken to be a secure Paillier implementation)  
**\<sarang\>** Yep, the MPC is to handle linking tags in Triptych, RCT3, and Omniring  
**\<sarang\>** Even though Omniring can use traditional linking tags, even that construction still requires an underlying inversion  
**\<sarang\>** There are also affine quantities to compute, but those are understood  
**\<suraeNoether\>** refresh my memory: which, if any, of those 3 require self-sends?  
**\<sarang\>** None of them  
**\<sarang\>** DLSAG and Lelantus would require this  
**\<endogenic\>** LELANTUS  
**\<suraeNoether\>** okay, so what, in your heart of hearts, are you hoping for from linking tags?  
**\<sarang\>** The problem, previously, was that it was not clear how to enable multisig support when the linking tags require a secret key inversion  
**\<suraeNoether\>** aaaaah  
**\<sarang\>** Now that there's an understood MPC to compute this, it means multisig support is feasible  
**\<suraeNoether\>** gotcha gotcha  
**\<suraeNoether\>** you had questions about multisig for me  
**\<sarang\>** The downside to the MPC is that Paillier can't take advantage of the efficient curve libraries we all know and love  
**\<suraeNoether\>** we can address them now or after the meeting if you like  
**\<silur\>** hoi sorry for being late  
**\<Isthmus\>** holla  
**\<suraeNoether\>** long time no see silur  
**\<endogenic\>** whatup silur  
**\<sarang\>** Paillier requires RSA modulus stuff (but there aren't issues with trusted setup etc.)  
**\<sarang\>** Encryption and decryption require exponentiation with variable modulus  
**\<sarang\>** So computationally-constrained devices would need to able to support this  
**\<sarang\>** s/to able/to be able  
**\<suraeNoether\>** so are we hoping for an MPC to compute inversion-based key images... such that the MPC is more consistent with the development history of monero/cryptonote? ie based on the DL setting in Ed25519 instead of RSA?  
**\<suraeNoether\>** or at least, one of the items on our "wish we had" list?  
**\<sarang\>** Such a thing would be great, but as you pointed out, getting the required homomorphicity would imply a DL break, or some such thing  
**\<silur\>** can you elaborate on "inversion based key images"?  
**\<silur\>** or shall I just review it from the log?  
**\<sarang\>** Key images / linking tags in newer proving systems use the form `(1/x)\*U`  
**\<suraeNoether\>** rather than x\*H(X)  
**\<suraeNoether\>** U is fixed, yes?  
**\<sarang\>** Here the division is an inverse, `x` is the secret key, and `U` is either globally fixed or depends on the proof statement  
**\<sarang\>** but it's public  
**\<suraeNoether\>** uhmmmm wait a moment:  
**\<sarang\>** It's globally fixed in the more efficient versions of the proving systems  
**\<suraeNoether\>** my comment had to do with an efficient group-to-scalar map that had any sort of homomorphicity built in  
**\<suraeNoether\>** oh oh oh  
**\<suraeNoether\>** i get what you are saying  
**\<sarang\>** For context: https://github.com/SarangNoether/skunkworks/tree/inverse-mpc  
**\<sarang\>** The inverse.py script shows how the process works, and the markdown documents describe one possible use for RCT3/Triptych (again, with many assumptions on the players)  
**\<sarang\>** The encryption homomorphicity is important for the MPC method that Gennaro and Goldfeder introduce  
**\<suraeNoether\>** so most generally, each person has a secret x\_i and there is a function f such that you want to compute f(x\_1, ..., x\_n)\*U with some friends. you were using f(x\_1, ..., x\_n) = 1/sum(x\_i) ?  
**\<suraeNoether\>** you know what: let's talk about this after the meeting  
**\<sarang\>** Yeah, better for after meeting  
**\<suraeNoether\>** so, isthmus, myself, and sarang have all brought the room up to speed. does anyone else want to talk about any monero-related research they are doing?  
**\<silur\>** can't we somehow exploit the bootle inner-product encryption with a killian randomization here somehow? the killian randomization preserves linear combinations so everything before multiplying with U is the same  
**\<silur\>** but individual inputs are useless  
**\<silur\>** and at the last step the same inner-product for the last vector reduces into a Z\_p element?  
**\<sarang\>** I don't see how to directly apply that to the share derivation in Gennaro  
**\<sarang\>** The multiplicative-share to additive-share method, I mean  
**\<sarang\>** (which is the point of their Paillier-based protocol)  
**\<silur\>** Oh the Genaroo-Goldfeder method IS a hard requirement  
**\<silur\>** then we can't inded :)  
**\<silur\>** I wasn't aware it's a must-have  
**\<sarang\>** Well, we don't \_need\_ to use Gennaro-Goldfeder  
**\<sarang\>** but it seems reasonably efficient and useful if you can accept the homomorphicity requirement  
**\<sarang\>** In the interest of time, let's move to ACTION ITEMS  
**\<sarang\>** Mine are to continue work on the MPC stuff, get CLSAG definitions ported as necessary (would like to discuss with suraeNoether as well), and get final review on the Triptych draft to get posted to IACR  
**\<silur\>** triptych? O.o  
**\<sarang\>** ?  
**\<suraeNoether\>** mine is to hunt down and kill my final bug, work on the churn report, review the triptych draft (finally) and continue chatting with isthmus about getting a data science fellow working with me on matching/churn  
**\<silur\>** I was not familiar with that, will look into  
**\<suraeNoether\>** it's a paper sarang is presently writing  
**\<silur\>** too much meetings missed :D  
**\<sarang\>** silur: Triptych is a linkable ring signature construction based on Groth 1-of-many commitment proofs  
\<3  
**\<sarang\>** Preprint draft forthcoming  
**\<sarang\>** There's a super-efficient version for which I can't reduce soundness to a known hardness assumption  
**\<sarang\>** If you want to take a look silur, most welcome  
**\<sarang\>** The less-efficient version does reduce nicely  
**\<silur\>** yea I'd be more than happy to look into  
**\<sarang\>** neat  
**\<sarang\>** OK, I suppose we can formally adjourn and continue discussions as desired  
