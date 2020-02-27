---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-08-27
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<sarang>** The meeting starts presently  
**\<endogenic>** rbrunner: answer is there no?  
**\<sarang>** suraeNoether: care to begin?  
**\<suraeNoether>** oh gosh  
**\<suraeNoether>** lost track of time  
**\<suraeNoether>** Hi, everyone, my agenda today is 1) greetings, 2) description of the noether bros recent work, and 3) open up the lab to discussion. I wouldn't mind hearing from silur and IsthmusCrypto.  
**\<suraeNoether>** So, hi everyone  
**\<sarang>** hi  
**\<silur>** hi :)  
**\<rbrunner>** Hello there  
**\<suraeNoether>** This week I submitted our multisig paper to IACR, started reading the DLSAG paper by sarang and started writing up notes for thring confidential transactions and their applications to cross-chain atomic swaps  
**\<endogenic>** woop woop  
**\<suraeNoether>** waiting on a link from IACR  
**\<sarang>** So you'll be taking the DLSAG and extending?  
**\<suraeNoether>** sarang: if you don't mind. we could do two separate papers but I don't see a good reason for that, unless yours is already over 15 pages?  
**\<sarang>** I would also like comments on its current "technical note" form, for internal publication  
**\<suraeNoether>** yeah, for sure  
**\<sarang>** But yes, I would like to see it publishable elsewhere too  
**\<sarang>** Mine is ~7 IIRC  
**\<suraeNoether>** i feel like "Spender-ambiguous cross-chain atomic swaps of confidential assets" is a sexy title  
**\<sarang>** it is  
**\<suraeNoether>** yeah, i'll provide notes on that as a technical note, then i'll copypasta to a new doc for swaps  
**\<sarang>** Let's stay in close contact regarding the DLSAG work and extension  
**\<suraeNoether>** yes  
**\<sarang>** excellent  
**\<suraeNoether>** if you want to do more of the writing before handing it off to me, i think with our writing dynamic it may be appropriate to find a third author to "finish it off" so I don't spend months being a perfectionist  
**\<sarang>** Let's wait and see how it goes  
**\<sarang>** No need to put the cart before the LaTeX manuscript  
**\<suraeNoether>** i was basically going to take the appendix from "Enabling Blockchain Innovations with Pegged Sidechains" by Back, et al, describing cross-chain atomic swaps (initial suggestion by Tier Nolan) and write up a highly detailed version of it with thring signatures  
**\<suraeNoether>** so if you want to have more of a hand in writing it, i can put that down for a few days and give you a chance to put some words into it  
**\<sarang>** aye  
**\<suraeNoether>** cool. so, what have \*you\* been up to this week?  
**\<silur>** sorry is thring signatures a typo or the new name? :D  
**\<sarang>** I've been working with mooo to make BPs even faster  
**\<endogenic>** new name  
**\<suraeNoether>** Threshold Ring Signatures = thring signatures!  
**\<sarang>** I coded up an addition chain for scalar inversion that doesn't need the OpenSSL library  
**\<sarang>** and batch inversion that lets us compute a bunch of inverses speedy quick  
**\<suraeNoether>** Threshold Ring Confidential Transactions = Thring Confidential Transactions! Woooo!  
**\<sarang>** We're now seeing batched BP verification > 40x faster than borromean  
**\<suraeNoether>** jfc  
**\<silur>** wow  
**\<sarang>** So yeah, a bunch of new optimizations  
**\<rbrunner>** It something in the stuff that is planned to go online tomorrow on testnet?  
**\<sarang>** I'm also doing initial work toward off-chain safe balance computations  
**\<sarang>** rbrunner: the PR includes only some of the optimizations  
**\<sarang>** not all  
**\<suraeNoether>** i vote fixing ring sizes at 36 and keeping them fixed for a year while we look into sublinear optimizations. :P  
**\<endogenic>** it would be a good problem to have  
**\<sarang>** Unfortunately the prover is still 2x slower than borromean  
**\<moneromooo>** Oh, I bumped like 25% off the prover btw.  
**\<sarang>** lolwut  
**\<sarang>** go on  
**\<moneromooo>** Not looking at it anymore for now :)  
**\<sarang>** commit #?  
**\<moneromooo>** I took out 128 scalarmults IIRC.  
**\<suraeNoether>** jfc  
**\<sarang>** https://gph.is/1e0T1tY  
**\<suraeNoether>** oh, i wanted to add an item to the end of the agenda  
**\<endogenic>** lol sarang  
**\<moneromooo>** 81a65c30d667eaf5e4a1f0ecd1e64746b09cfdd7  
**\<suraeNoether>** 4) the possibility of an FFS for QuarksLabs to just audit our whole codebase.  
**\<sarang>** ty  
**\<sarang>** Aso  
**\<suraeNoether>** or some part of it  
**\<sarang>** \*Also  
**\<sgp\_>** hello everyone  
**\<sarang>** I want to keep working on trustless accumulators for safe balance computation with auditors  
**\<endogenic>** ^  
**\<endogenic>** sarangpls  
**\<sarang>** PIVX claims to be working on a form of this that's bulletproofs-compatible  
**\<suraeNoether>** sarang: do you have any links on that? i know we talked about that euclidean-ring based one  
**\<sarang>** I've also been chatting with Zcash devs on their knowledge of this field  
**\<sarang>** suraeNoether: the issue is efficiency when it comes to committed values  
**\<sarang>** BPs let us do this more or less for free  
**\<sarang>** You need to have an accumulator that you can prove was computed correctly with all outputs, and then provide proofs of membership of all the outputs you control, and show that the balances compute  
**\<sarang>** my goal is an off-chain solution that requires no protocol changes  
**\<sarang>** but also doesn't give the auditor direct knowledge of spend outs  
**\<sarang>** (modulo knapsack-type attacks)  
**\<sarang>** Our goal is \_not\_ to encourage users to reveal their key images, which is bad for privacy  
**\<sarang>** it should be to allow a user to safely prove a balance without showing key images  
**\<sarang>** hence the benefit of commitment-based trustless accumulators as one possible approach  
**\<suraeNoether>** i'm eager for any reading you have available for that, although i don't know when i'd get to it. :P  
**\<sarang>** I'll keep a running list  
**\<sarang>** Zcash team had good early discussion on this same problem, and I'm following their logs as a start  
**\<suraeNoether>** cool, consider it a literature review in prep :P  
**\<sarang>** yup  
**\<suraeNoether>** i wonder if a zk-ledger sidechain run by all the exchanges would work  
**\<sarang>** If PIVX figured this out, hot damn  
**\<suraeNoether>** not really trading tokens around but only committed balances  
**\<suraeNoether>** and zk-ledger is largely trustless, iirc  
**\<sarang>** In the approach in my head, Alice would share an accumulator that she filled with all outputs on the blockchain  
**\<suraeNoether>** and i don't see how it wouldn't be BP-able  
**\<sarang>** the auditor could verify that it was computed correctly  
**\<endogenic>** new type of lightning network? :P  
**\<suraeNoether>** strictly for auditing/compliance purposes... uhm.  
**\<sarang>** and using this she can construct zk proofs that her outputs either are or are not in the key image list  
**\<endogenic>** can i suggest another agenda item? ring sig replacements.. could it make sense to give research into that to another funded postdoc as a main project?  
**\<sarang>** depends  
**\<sarang>** right now there are no good solutions, and people are looking for them  
**\<silur>** khm RTRS  
**\<sarang>** the second we get trustless efficient general zk systems, this would be possible  
**\<silur>** hyrax?  
**\<sarang>** poor size/memory tradeoff IIRC  
**\<sarang>** all the trustless approaches I know of have terrible scaling  
**\<sarang>** it's that damn snark toxic waste that gives the proof polynomials structure in a zerocash setup  
**\<sarang>** and that's what gives you such good scaling  
**\<suraeNoether>** okay, so Silur, IsthmusCrypto, y'all have been busy  
**\<silur>** yep I'm slowly making tests for my RTRS demo at HCPP and patching up my mistakes  
**\<rbrunner>** RTRS being?  
**\<suraeNoether>** silur: i know i've asked you about PQ shuffles before, but I don't know much about pseudorandom generating objects on a theoretical level. Do you know of any introductory papers or textbooks you could suggest to us? I'm sure to put a few hours in some time in the next few months for my backburnered "cartesian square sig" project  
**\<suraeNoether>** RTRS is a version of sublinear ring confidential transactions based loosely on the Bootle paper "Short Accountable Ring Signatures"  
**\<suraeNoether>** or am i thinking about someone else with the PQ shuffle  
**\<sarang>** silur: any chance of sharing code, even privately?  
**\<silur>** also I had some advance with the RLWE VRF stuff kind of overkilled a whole section with modular and double-rounding reconcillation but maybe it will be helpful for a designated verifier setup  
**\<silur>** no I'm also working on PQ shuffles but bulletproofs kind of got ahead of me  
**\<silur>** and I still have to understand BP fully  
**\<silur>** because originally I went for the simple Neff shuffle model on a generalized Chaum-pedersen proof  
**\<sarang>** sharing the RTRS code I mean  
**\<silur>** yea it's on my github  
**\<silur>** https://github.com/Silur/libstringct  
**\<silur>** so because BP's are much more scalable I put the PQ-shuffle on a pause and try again when I understand BP at a level when I can confidently start to "port" them into a PQ setting  
**\<sarang>** neat  
**\<sarang>** Anything else of interest to share with the class  
**\<sarang>** Or IsthmusCrypto?  
**\<sgp\_>** sneurlax's tool is now easy to run  
**\<sgp\_>** I updated the blackball lists with MoneroV  
**\<sarang>** Excellent  
**\<sarang>** I hope this sees use and extension by others as well  
**\<sgp\_>** Any thoughts on making the pool lists available too? I know sneurlax was worried about releasing the code  
**\<sarang>** (for those who don't trust sgp\_ )  
**\<sarang>** Give me the arguments  
**\<sgp\_>** I can't speak on his behalf. I would release if I was him  
**\<sarang>** I'm generally a fan of making information available  
**\<sarang>** Might it influence pool behavior in a positive way?  
**\<sgp\_>** We will need some way to have this tool check for chain reactions with the regular blackball tool in the future  
**\<sgp\_>** sarang I already came up with an initial best practices guide for pools, but I need to refine it  
**\<moneromooo>** The pool thing is a guess though.  
**\<moneromooo>** Does it output some sane format (like a key per line or so) ?  
**\<sgp\_>** It outputs a single output per line in a .txt file  
**\<moneromooo>** OK, I can add reading that then.  
**\<sgp\_>** great! Ideally the pool tool could be run first, then the list can be added to the blackball tool as a set of bad outputs  
**\<sarang>** Is there a regular schedule envisioned for this?  
**\<sarang>** for the hosted version  
**\<sgp\_>** At the moment I'm just doing it when I have time. It's all manual at the moment  
**\<sarang>** seems a prime candidate for automation  
**\<sgp\_>** Probably a few times a month unless it's automated, yes  
**\<moneromooo>** I had this idea of having diffs made, then advertised in a TXT record like the release updates.  
**\<moneromooo>** Then the wallet could automatically download/merge.  
**\<sarang>** baller  
**\<moneromooo>** It would require the list maintainer to keep to rigid naming conventions for the diffs.  
**\<sgp\_>** moneromooo I believe there are two big features that would help with pool outputs: 1) an easily-selectable output selection option, such as "--selection-algo public-pool", 2) a wallet option to avoid selecting coinbase outputs for decoys, enabled by default (--coinbase-decoys false)  
**\<sgp\_>** we can streamline the blackball lists significantly if the coinbase outputs are excluded automatically  
**\<moneromooo>** I won't do that unless surae or sarang reckons it's a statistically advantageous thing to do.  
**\<sgp\_>** all right, but since the vast majority of coinbase outputs are mined by public pools, it's something to consider  
**\<sarang>** So you mean perform the statistically correct output selection (fitted gamma) but with avoided decoys  
**\<sarang>** including blackball+coinbase  
**\<moneromooo>** That means an attacker can know whether a given tx was made by a pool or not. At first glance, it diminishes your anonymity set.  
**\<sgp\_>** moneromooo can you expand on this reasoning? If you're referring to coinbase outputs, they know what transaction they are spent in anyway by the pool since the pool makes its transaction lists public  
**\<moneromooo>** If your tx has only two outs, then it \*might\* be good, but that's not immediately obvious.  
**\<moneromooo>** Oh, I forgot they do now. Dumb.  
**\<moneromooo>** Time to kick pools out ^\_^  
**\<sgp\_>** yeah, it's a situation where a ton of network info is public  
**\<sarang>** Is IsthmusCrypto here?  
**\<sgp\_>** So if you can attribute ~90% of coinbase outputs to specific transactions, we should at least consider setting the default wallet behavior to not include these outputs that will be bad ~90% of the time  
**\<endogenic>** anyone know if exploremonero.com is open source? i was a bit surprised to see they ask for the sec view key for checking txs  
**\<sgp\_>** endogenic I can't find it. Only the localization: https://github.com/GBKS  
**\<endogenic>** hmmmmm  
**\<endogenic>** btw i -think- i've identified anycoin as one of the wallets sending with ringsize 8  
**\<sarang>** damn off-by-one...  
**\<sarang>** So we have ten minutes remaining  
**\<sarang>** Does anyone else wish to share something of interest they are working on?  
**\<sarang>** moneromooo: can you comment on the expected status of BP updates relative to our release schedule?  
**\<moneromooo>** Do you mean "are BPs going in" ? If so, yes.  
**\<sarang>** I know there was a cutoff for PR review purposes  
**\<sarang>** I assume all that is going smoothly?  
**\<moneromooo>** The PR is reviewed and ready to go. The CNv2 changes were supposed to go in too, but the author dropped a large change yesterday :/  
**\<endogenic>** also interested. would be good to freeze at some point, if only for a good bit of testing lead time  
**\<moneromooo>** So that might push the merge a bit.  
**\<moneromooo>** If some of you are familiar with low level bit bashing and hashes, feel free to review ^\_^  
**\<sarang>** Yeah I've been following the tweak discussion a bit  
**\<endogenic>** how worthwhile will it be to have a final review of this code after the final cut ?  
**\<sarang>** Updates to BPs will be a point release I suppose?  
**\<endogenic>** i mean audit  
**\<moneromooo>** If you mean what's not in the current PR, I dunno yet, but it is fairly likely.  
**\<moneromooo>** Unless people want the speedups bad :)  
**\<sarang>** Eh  
**\<sarang>** Well, thanks to everyone for sharing  
**\<sarang>** We can adjourn now and keep discussions going as desired  
**\<sarang>** \</meeting>
