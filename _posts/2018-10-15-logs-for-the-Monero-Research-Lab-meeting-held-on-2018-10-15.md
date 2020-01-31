---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-10-15
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** LET US BEGIN  
**\<suraeNoether>** yes hello  
**\<sgp\_>** Hello  
**\<kovri-slack> \<oneiric>** hullo  
**\<suraeNoether>** today i want to chat about research and the monero konferenco, and... that's my agenda. if folks want to add to the list, shout out~  
**\<sarang>** hi  
**\<sarang>** Where to begin?  
**\<suraeNoether>** well, firstly  
**\<suraeNoether>** who wants to come give a 20-40 minute chat at the Monero Konferenco? I'd like each workgroup to have at least one representative  
**\<hyc>** when/where is that going to be?  
**\<sarang>** I'll do one  
**\<suraeNoether>** Good question, hyc! Right now it's looking to be one of the weekends between April 27 and June 15 in Denver, Colorado. invited speakers will be reimbursed for their travel costs  
**\<suraeNoether>** assuming the community decides to fund my proposal, that is  
**\<hyc>** cool  
**\<sarang>** Can reimbursement be in XMR?  
**\<suraeNoether>** I'm leaning toward April 27, personally  
**\<sarang>** Or are there weird legally things with that  
**\<kovri-slack> \<oneiric>** I could do one, or defer to anonimal if he wanted to do one  
**\<suraeNoether>** yes, reimbursement can be done in XMR, it just makes accounting moderately more annoying, but no legal issues  
**\<sarang>** cool  
**\<suraeNoether>** and i'm happy to do that  
**\<sarang>** Because fiat reimbursement is always a baffling and lengthy ordeal  
**\<suraeNoether>** well oneiric i wanted a session of several talks on networking privacy. i'd love to have both you and anonimal come speak  
**\<kovri-slack> \<oneiric>** :)  
**\<suraeNoether>** i also want to invite people not directly related to the monero ecosystem  
**\<parasew[m]>** i will also try and come there! as i could not make it to defcon sadly  
**\<sarang>** suraeNoether: are there plans to arrange for streaming or quality recording?  
**\<sgp\_>** Yeah, we need that  
**\<suraeNoether>** i really want to give folks who are up and coming a chance to speak at this event; we can invite really big name people to come talk, but i feel like their careers are already pretty well laid out before them, so it'd be nice to get some outside researchers who are more tangential to the crypto celebrity scene  
**\<sarang>** May I recommend hiring an outside group to handle that, and \_not\_ venue staff  
**\<suraeNoether>** sarang, one option laid out in the budget is a section on audio/visual rental and web streaming and costs; a local place that does webcast-style AV presentations regularly would charge around 5kUSD for such an event.  
**\<sarang>** Or at the very least getting someone with professional experience as an audio engineer  
**\<sarang>** cool!  
**\<suraeNoether>** i posted last week on the forums for the FFS under ideas  
**\<suraeNoether>** i haven't gotten comments. :P  
**\<sarang>** oops  
**\<sarang>** that's my bad  
**\<sarang>** I thought I had read something on recording but it's easier to just ask you and be lazy  
**\<sarang>** ty  
**\<suraeNoether>** not a problem, rehrar was mentioning something about cyphermarket and sponsorship and free toys and t-shirts  
**\<suraeNoether>** so i'm thinking we move the idea into "open discussion" and update from there  
**\<suraeNoether>** if folks have recommendations for speakers, we are assuming a decent travel cost on average for speakers, so if we can get a handful of relatively small-cost local-ish speakers, we can also have a decent budget for flying people out from further away  
**\<parasew[m]>** there are a lot of contacts from the open source hardware association in denver (open source hardware summit was there last year); i could reach out to ppl (audio engineer, etc.)  
**\<sgp\_>** Yeah, my RT Frontier flight is only ~$200 :)  
**\<suraeNoether>** i'm thinking a formal call for papers may be in order  
**\<suraeNoether>** sgp\_: excellente, come give a taaaaalk on blackballin brother  
**\<suraeNoether>** let us have a meeting of the minds  
**\<suraeNoether>** all the minds  
**\<sarang>** sgp\_: but you're flying Frontier, so you'll pay one way or another.... =p  
**\<suraeNoether>** sarang zing  
**\<suraeNoether>** more like zi... ziring..  
**\<suraeNoether>** nah  
**\<suraeNoether>** okay, onto research  
**\<sarang>** Buy us a Monero jet and I'll fly everyone there  
**\<sgp\_>** Lmao  
**\<suraeNoether>** last week, sarang and I concluded that, for now, RuPol may be too risky for us to implement, given the layers of development required  
**\<suraeNoether>** essentially un-vettable at this stage  
**\<suraeNoether>** once things are more clear, we can actually benchmark it  
**\<sarang>** The level of complexity required for verification computation is also unclear  
**\<sarang>** The authors left many, many implementation details out of their paper  
**\<sarang>** It suffices to say that there is a lot of annoying math still to be worked out  
**\<suraeNoether>** but for now, it relies on a previously described scheme that has it's own typographical errors, etc, and at this point even workign out a single example by hand requires beautiful-mind-level of whiteboards on the walls  
**\<suraeNoether>** so we are falling back on ruffct for now to see how much the multiexp speedups we learned about during bulletproof implementations could help  
**\<sarang>** I've returned to our older RuffCT scheme, working to backport what we've learned from BPs about optimizations and batching  
**\<sarang>** jinx  
**\<suraeNoether>** im finna shutup now  
**\<sarang>** heh  
**\<sarang>** We can certainly speed up some operations on individual spend proofs, and that's cool  
**\<sarang>** But  
**\<sarang>** The possibility of batching some parts of verification are quite intriguing  
**\<sarang>** especially relating to fixed group points  
**\<sarang>** I'm running some code and tests on this presently  
**\<suraeNoether>** in addition to all that, i've been working on the churn paper to formalize the threat model we discussed last week  
**\<sarang>** Also, I've finished some updated blackball testing  
**\<suraeNoether>** that's going... really well, and i hope to have a draft to the community in a few days  
**\<sarang>** My hunch is that we'll see those papers published with shitty information  
**\<sarang>** and the associated bad press  
**\<suraeNoether>** sarang i will want to dip into your blackball info in writing this to illustrate the negligibility of the gains from heuristic methods  
**\<suraeNoether>** i disagree, i think the papers weren't sufficiently FUD-dy to really be worried about it, as long as they clarify "newly found" versus "total found"  
**\<sgp\_>** Sounds like a good co-op  
**\<suraeNoether>** but, you know, matt green says we have "fake privacy" so  
**\<suraeNoether>** :P  
**\<kovri-slack> \<oneiric>** lol, really?  
**\<suraeNoether>** yeah some tweet from awhile ago \*shrug\*  
**\<sarang>** The Zcash mentality is that we offer shitty obfuscation  
**\<sarang>** I tend to not really pay attention to it  
**\<suraeNoether>** we happen to agree that ring signatures suck and they need to be replaced with something with larger anonymity set sizes  
**\<gingeropolous>** when ringsize 42  
**\<suraeNoether>** which is why sarang and I never really let go of the sublinear  
**\<sarang>** Those papers did a terrible job of differentiating things that are time-based or blockheight-based  
**\<suraeNoether>** no big deal  
**\<sgp\_>** Has anyone seen this new paper? https://eprint.iacr.org/2018/962  
**\<suraeNoether>** we saw a draft, not the final thing, i'm withholding judgement  
**\<suraeNoether>** sgp\_: i have seen this thing, but i have not yet read that thing  
**\<suraeNoether>** i need to learn about aurora and this thing  
**\<sgp\_>** Basically Zerocash applied to computations, no?  
**\<sarang>** trusted setup  
**\<sgp\_>** Just call them "trusted computations" :p  
**\<sarang>** lol  
**\<hyc>** still quite expensive, <2 minutes generation time  
**\<sarang>** the setup is buried deep w/in the paper  
**\<sarang>** gmaxwell noted it in p15  
**\<hyc>** pls ignore the men behind the curtain  
**\<sgp\_>** Sounds like a typical trusted setup response  
**\<suraeNoether>** trusted setup reminds me of the phrase "military grade encryption"  
**\<kovri-slack> \<oneiric>** lol, shady indeed  
**\<sarang>** Nah  
**\<sarang>** People brag about military encryption  
**\<suraeNoether>** no no  
**\<sarang>** They hide the setup deep within a definition  
**\<suraeNoether>** the phrase military grade encryption is usually a tongue-in-cheek reference to a plaintext message  
**\<sarang>** =p  
**\<hyc>** lol  
**\<sarang>** rot26  
**\<hyc>** smeaphore at least  
**\<kinghat>** are we military grade? or moar better?  
**\<hyc>** semaphore, or morse  
**\<suraeNoether>** sarang that reminds me  
**\<sarang>** ?  
**\<sgp\_>** We used a Caesar's Cypher, totally secure. Roman military-grade  
**\<suraeNoether>** i really really want to create a cryptocurrency like monero but replacing the bernstein group with an absurdly small group, like order 7000-ish or something, and with a tiny-output hash function  
**\<suraeNoether>** just let people go wild in forging signatures  
**\<suraeNoether>** just see what happens  
**\<suraeNoether>** "when forgecoin moon?"  
**\<suraeNoether>** etc  
**\<sarang>** I'd like to see a version that uses a curve group with cofactor 1  
**\<suraeNoether>** ring size 2  
**\<suraeNoether>** anyway  
**\<sarang>** yeah  
**\<hyc>** that can be the next generation of useless ethereum token  
**\<suraeNoether>** so, that's my life for this week: ruffct with sarang and the churn paper, and fantasizing about rubiks-cubes-sized groups as a joke cryptocurrency  
**\<suraeNoether>** ohhhh man implementing a rubiks cube on top of ethereum would be \*such a waste of resources you guys\*  
**\<sarang>** Yup, I'll be finishing up unit tests on optimized ruffct to get a better idea of batching  
**\<suraeNoether>** proving you are making each permutation omg  
**\<suraeNoether>** put it on the ledger forever man  
**\<sarang>** There was a neat paper I linked earlier about some optimized curve operations  
**\<sarang>** they found some better EC formulas in certain special cases  
**\<sgp\_>** Ethereum Plays Rubik's Cube  
**\<hyc>** hm... rubkis cube solvers are pretty fast these days. would be funny to advertise a rubiks cube-based key system  
**\<suraeNoether>** oh yes, i am eager to read that. it seems to be strictly related to optimizations obtained from utilizing analytic formula/expressions for multiexp  
**\<suraeNoether>** for example, if you have point P = (x, y) and point Q = (z, w) on the ed25519 curve, we define P+Q using the equations of the elliptic curve, the twisted edwards polynomial equations  
**\<sarang>** They discuss some neat work on better addition chains  
**\<suraeNoether>** so if you want something like 3P + 4Q very often, you can expand that polynomial expression and exploit the structure within those analytic expressions to speed up the computations  
**\<sarang>** Goes to show that this is not a totally solved area of research  
**\<sarang>** I don't see it being terribly useful here, mind you  
**\<sarang>** Anyone else with something fun to share about recent work, questions, ideas?  
**\<sarang>** Here's a link to my quick port of ruffct to my python library: https://github.com/SarangNoether/research-lab/tree/pyruff  
**\<sarang>** It's more or less a direct port of the java stuff that will be refactored as needed  
**\<sarang>** prototyping only; don't use it anywhere that counts  
**\<suraeNoether>** oh, I wanted to point out: Vtnerd is asking for a very reasonable amount of USD/hour to construct a tor-based RPC tool for monero (or something like that), and his FFS is under "ideas" right now  
**\<suraeNoether>** i wanted to express my support for that proposal  
**\<sarang>** Tell me more about this in relation to kovri  
**\<sarang>** ELI5  
**\<rehrar>** Would RuffCT be pretty drop in as well? Or would it take large amounts of work to get it in?  
**\<sarang>** It'd be some work to safely transition old outputs  
**\<sarang>** that's part of the prototyping process  
**\<suraeNoether>** afaict this is going to be a parallel thing, independent of kovri  
**\<suraeNoether>** but also since it's not inventing new protocols, it should proceed with easier-to-anticipate milestones  
**\<suraeNoether>** some folks are of the opinion that multiple tools are beneficial; when it comes to tor, i2p, kovri... i tend to think the most beneficial tools will eventually see the most use  
**\<sarang>** rehrar: actual practical ruffct is still a bit pie-in-the-sky; but that's part of our job  
**\<sarang>** it has implications on things like address size, for example  
**\<sarang>** but we're learning what we can from it  
**\<sgp\_>** Only point I need to make is that if we want to get anywhere with blackball research, someone needs to update the pool tool and sneurlax is busy  
**\<rehrar>** regarding Tor, I think it would be beneficial to Monero to have the option to run over Tor  
**\<sarang>** MRL: Putting The Skunk In Skunkworks  
**\<sarang>** sgp\_: link to current work?  
**\<suraeNoether>** rehrar: ruffct as-is requires an additional user key, which would bring us to either 3 group elements as your public key, or 4, depending on how you interpret the ruffct paper, and so we may end up doubling our key length (which doubles verification time from loading keys!)  
**\<suraeNoether>** sgp\_: any ideas? or does anyone want to help sgp\_ out with the pool tool?  
**\<gmaxwell>** suraeNoether: you can change the constants in the curve equation and get a tiny group with basically no other changes in the code, there are tests in libsecp256k1 that work that way.  
**\<sgp\_>** https://github.com/sneurlax/xmreuse  
**\<suraeNoether>** gmaxwell: delightful :)  
**\<kovri-slack> \<oneiric>** yeah, having a public node over tor would be nice. even a hybrid of p2p over tor, rpc over i2p would be sweet  
**\<sarang>** gmaxwell: you are referring to a cofactor-1 curve?  
**\<sarang>** oh nvm, you mean group size  
**\<hyc>** we have moneroworld nodes on tor  
**\<rehrar>** Of course it's possible to run Monero over Tor with some finagling. But how cool would it be to run over tor with a command or button press?  
**\<rehrar>** Qubes-Whonix is a good way right now btw  
**\<sarang>** perhaps we first get the moneroworld nodes upgraded at all...  
**\<suraeNoether>** okay, for me, final thoughts... please make comments on the Denver Monero Konferenco FFS here, and we will move it up to Open Discussion: https://forum.getmonero.org/6/ideas/90909/surae-noether-first-denver-monero-konferenco-spring-2019 and for this conference, PLEASE please let me know if you know of someone who I absolutely MUST INVITE TO SPEAK. If you have a favorite speaker, let me know by emailing  
**\<suraeNoether>** surae.noether@protonmail.com   
**\<suraeNoether>** I'll be sending out first-round invitation emails in the next week or so  
**\<suraeNoether>** or just email me because i'm lonely  
**\<hyc>** lol. I can cook up a talk  
**\<hyc>** by next spring we should have a much better idea of whether/how well randomJS will work  
**\<sarang>** If there isn't a talk on RandomJS there will be riots  
**\<rehrar>** heck, I may start a Riot anyways  
**\<hyc>** lol  
**\<rehrar>** it's a decent little app on the Matrix protocol  
**\<rehrar>** #nerdjokes  
**\<suraeNoether>** cool, we can have a session on hardware and proof of work and maybe invite some asic or fpga manufacturers  
**\<hyc>** ah a mini-track, yeah  
**\<kovri-slack> \<oneiric>** head-to-head debate hyc v. timolson?  
**\<sarang>** Other questions or research topics?  
**\<hyc>** though if we've done our work right, no asic/fpga guys will want to speak to us ever again  
**\<sarang>** heh  
**\<kovri-slack> \<oneiric>** was reading up on ML techniques, would LSTM/regression be helpful for blackball analysis?  
**\<sarang>** I don't think so  
**\<sarang>** Given our ring sizes and the actual risks involved, we understand it decently well  
**\<sarang>** Things like forks will always be more of an issue than random selection errors  
**\<sarang>** if that's what you mean oneiric  
**\<sarang>** Even a deterministic approach to identify spent rings reveals relatively few, and each of these has a negligible effect on other rings  
**\<kovri-slack> \<oneiric>** kind of, I meant applying the learning algo to new forks rather than tuning by hand. I might be misunderstanding blackballing though  
**\<sarang>** The risk from forks is spending on both forks, which reveals your spend  
**\<sarang>** on-chain risks involve things like pool outputs and set-theoretic analysis  
**\<sarang>** The goal of blackballing is to identify \_definitely\_ spent outs  
**\<sarang>** and that's a hard game to play that gives you progressively lesser benefits over time  
**\<sarang>** I suppose we can begin to wrap up the official meeting  
**\<kovri-slack> \<oneiric>** ok, thanks sarang  
**\<sarang>** Thoughts on anything that people would like to see investigated for this next week?  
**\<sarang>** oneiric: I think some people worry that their outputs can get "caught up" in a blackball list, but this isn't the case  
**\<sarang>** The methods we use only determine if it's provable that an output is already spent, which does not affect anyone's funds  
**\<gmaxwell>** (the name 'blackball' is really kind of unfortunate.)  
**\<sarang>** gmaxwell: agreed  
**\<sarang>** I've been using the term "spent note" in my paper drafts  
**\<sarang>** I'd prefer something like that or "dead output"  
**\<gmaxwell>** Spent Note List (SNL) would hae been much better.  
**\<sarang>** We could update it each week, in a Weekend Update  
**\<kovri-slack> \<oneiric>** Live from New York..  
**\<gmaxwell>** Well, sunday is a day of rest so one should do it on saturday, but perhaps as late as possible..  
**\<gmaxwell>** :P  
**\<sarang>** Well, thanks to everyone for participating in our meeting; we are now adjourned, and informal convos shall continue  
