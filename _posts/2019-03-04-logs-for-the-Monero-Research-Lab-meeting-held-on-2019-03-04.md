---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-03-04
summary: Sarang work, Surae work, SamsungGalaxyPlayer proposal and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** Shall we begin?  
**\<sarang>** 1. GREETINGS  
**\<sarang>** Hello everyone  
**\<oneiric\_>** hullo  
**\<sarang>** Let's go over our usual 2. ROUNDTABLE  
**\<sarang>** In the spirit of fairness and generosity, I will go first :D  
**\<sarang>** I posted my February monthly report (see agenda for link); comments welcome  
**\<sarang>** Besides the things listed there, I have initial working code for a Bulletproofs MPC (link in agenda also)  
**\<sarang>** moneromooo has been toying around with the idea of a coinjoin-type scheme, for which this MPC would be efficient and useful  
**\<sarang>** It still needs a lot of additional testing and work, but the initial code is operational  
**\<sarang>** And along with suraeNoether, still making edits and fixes to an upcoming paper in collaboration with other researchers for submission  
**\<sarang>** This week I'll be doing some MPC code cleanup and adversarial unit tests  
**\<sarang>** Any questions for me on these topics?  
**\<suraeNoether>** i have one  
**\<oneiric\_>** link for repo?  
**\<sarang>** Link at the agenda: https://github.com/monero-project/meta/issues/309  
**\<oneiric\_>** thanks :)  
**\<sarang>** the code is in super early stages  
**\<suraeNoether>**  the bulletproof coinjoin-style mpc: is this described in any level of detail anywhere outside of the bulletproofs paper? i think i get how bulletproofed MPC works, but if they are intended for use in a coinjoin-style way with Monero, i would like to see an explanation of how  
**\<sarang>** Ah good point. The BP paper only described the MPC protocol, and hinted at applications  
**\<sarang>** moneromooo has been working on the Monero-specific coinjoin at his "multi" branch  
**\<suraeNoether>** has coinjoin ringct been described outside of code?  
**\<sarang>** Not that I know of. It's on my list :D  
**\<suraeNoether>** got it  
**\<sarang>** FWIW having the bulletproofs code refactored to allow for MPC is a good idea anyway  
**\<suraeNoether>** agreed  
**\<sarang>** It turns the usual multi-output proof into a trivial MPC with one player  
**\<sarang>** and of course the verifier is completely unchanged  
**\<suraeNoether>** i'm not trying to imply that the MPC work is not important or unrelated to monero; it is both important and related. i just wanted to see what had been written.  
**\<suraeNoether>** my update is simple, too.  
**\<suraeNoether>** I'm working on my February report right now. i am working on  my funding request for next quarter. sarang and i are both working into our proposals one big change from previous proposals: primarily a pay-up-front clause to prevent MRL researchers from having their paychecks degrade over the funding period.  
**\<sarang>** Ooh good point on the new funding model  
**\<sarang>** We discussed this publicly a lot  
**\<suraeNoether>** in addition to that, i've passed the proofs-stuff back to our co-authors, who i'm chatting with almost daily on the publication; our deadlines have been pushed back twice now, so i asked for permission to explain what we are working on, and I got a "little bit" of consent, so  
**\<suraeNoether>** basically, sarang and i have been working with two authors on formalizing the DLSAG stuff, and i've been working on security proofs while sarang has been working on getting timing results for comparing to vanilla monero ringct  
**\<sarang>** Yeah, the paper has specific constructions for payment channels et al.  
**\<suraeNoether>** (one of the reasons i wanted a written description of bulletproof coinjoin is to see how well it will mesh with the new scheme  
**\<sarang>** Oh interesting. I hadn't thought of that part  
**\<suraeNoether>** yeah, long story short: the primitives required in monero for a lightning network  
**\<sarang>** The bulletproofs MPC protocol is independent of how the coinjoin signatures are done, FWIW  
**\<suraeNoether>** sarang: right, the bulletproofs mpc is merely to securely compute a range proof collaboratively, right, wihtout revealing your hidden values to your cosigners  
**\<sarang>** righto  
**\<sarang>** But I get your point  
**\<suraeNoether>** in addition to that, my plate this week consists of 1) reading about flyclient and making a proposal (if any, even if it is to ignore flyclient), 2) matching simulations are finally moving a little bit after some late night saturday work, and 3) my feb report + next quarter funding request  
**\<suraeNoether>** that finishes up my brief roundtable update  
**\<suraeNoether>** i would love to hear from anyone else who has done any research this past week. isthmus is always on fire with productivity (poor guy has 3rd degree burns)  
**\<suraeNoether>** oh i'm looking at the agenda here and we have sgp\_  
**\<suraeNoether>** i believe sgp suggested a different input selection algorithm for pools: https://github.com/monero-project/monero/issues/5222  
**\<sgp\_>** yes, thanks suraeNoether for the link to the Github discussion  
**\<sgp\_>** this discussion is only around the public POOL selection algorithm, not the selection algorithm for other users  
**\<sgp\_>** I expect this to be non-controversial and to have no negative impact on any party, but if you feel otherwise, I'd love your comment in the issue  
**\<sgp\_>** Unless there are any questions, we can keep going  
**\<suraeNoether>** some of the thoughts presented in your github discussion reflect some of the thoughts that isthmus has had on the matter with multi-input transactions, so I actually think this discussion is a little more broad than you suspect  
**\<suraeNoether>**  but also: since input selection isn't consensus, any pool could \*decide\* to do this  
**\<sgp\_>** it could be. this concept as I presented it has been thrown around since early 2018  
**\<moneromooo>** I'd like to have a confirmation that it does not harm anything else before I code it up.  
**\<moneromooo>** (from sarang and/or surae)  
**\<suraeNoether>**  the problem as I see it is that it reduces things in the following way  
**\<sarang>** I have looked over it briefly this morning but want to think about it in more detail  
**\<suraeNoether>** if we have a ring size N\*M, and the average number of outputs per transaction is M, and ring members are selected by transaction instead of by input, there is a strong argument that this reduces the effective ring size to N.  
**\<suraeNoether>** the true ring size is N\*M, but there are only N transactions included as ring memb ers  
**\<sarang>** Right, it's a version of binning  
**\<sarang>** and if you can eliminate a bin provably or heuristically, it's a problem  
**\<sgp\_>** I argue the typical drawbacks of binning do not apply here, since the public pools make all of the transaction details public anyway  
**\<sgp\_>** Ring signatures could provide 0 protection and the pools wouldn't be worse off  
**\<suraeNoether>** uhm well  
**\<suraeNoether>** the concern isn't these public pool's privacy  
**\<suraeNoether>** it's their behavior negatively impacting the privacy of other participatns in the monero ecosystem  
**\<sgp\_>** The goal isn't to restore the effective ringsize of the pool rings. It's to preserve the integrity of the pool outputs used in other rings  
**\<sarang>** right  
**\<suraeNoether>** sgp\_: here's my problem, as i see it  
**\<suraeNoether>** another problem anyway  
**\<suraeNoether>** let's say i am a pool and i have 3 xmr and i want to send 1xmr each to: (1) miner alice and (2) miner bob and (3) myself as change  
**\<suraeNoether>** er... 3 outputs  
**\<suraeNoether>** assume each output is 1xmr  
**\<sgp\_>** got it :)  
**\<suraeNoether>** under your proposal, i construct 3 separate ring signatues, all of which contain all 3 of these outputs  
**\<suraeNoether>** moreover, i'm a public pool  
**\<suraeNoether>** anyone will be able to see that all 3 outputs have been spent  
**\<sgp\_>** wait a sec  
**\<suraeNoether>** i have outputs A, B, and C. I want to send A to alice, B to bob, and C to charlie. they all came from the same transaction, so i have to include A, B and C in my rings  
**\<suraeNoether>** if i want to send all 3, this guarantees anyone can see they have been spent  
**\<sgp\_>** this input selection algorithm proposal is meant to handle the change outputs, not the source (eg: coinbase). Those require another more aggressive change  
**\<sgp\_>** I'm slightly confused by how you are handling these outputs  
**\<sgp\_>** If you have 3 XMR in output A, you create a transaction to Alice, Bob, yourself with outputs B, C, D  
**\<sgp\_>** Then you create your next transaction with ring {B, C, D}  
**\<sgp\_>** to make unclear which of B,C,D is the change output  
**\<suraeNoether>** no, that's not what i mean, i misspoke, let me try again really quick  
**\<sgp\_>** under this current proposal, A is known to be spent still. it doesn't fix that problem  
**\<suraeNoether>** ughhhh you know what i need to think about this more, because the pool won't have 3 outputs from a single transaction. it's a pool, so it'll have a bunch of single outputs, each from individual transactions  
**\<suraeNoether>** so my example falls apart  
**\<suraeNoether>** but i think we should think about it a bit more  
**\<suraeNoether>** oh but i suppose it could have a bunch of change transactions  
**\<suraeNoether>** okay, i can manufature a problematic exmaple, but let's do it after the meeting  
**\<sarang>** roger  
**\<sarang>** Does anyone else have research of interest to share?  
**\<sgp\_>** sure, and I'm not saying this is a perfect solution that defends against all heuristics, but it's an incremental improvement over the status quo in every case I've found so far. doesn't mean there aren't more. move on :)  
**\<sarang>** We can also merge this with 3. QUESTIONS from anyone on any research-related topic  
**\<oneiric\_>** some questions on kdf interaction, but maybe off-topic  
**\<sarang>** Fire away; we have time  
**\<oneiric\_>** so, i2p is considering reddsa from zcash as an offline signing algo  
**\<oneiric\_>** reddsa has a unique way of generating blinding material 'alpha' to generate new blinded pravte key  
**\<oneiric\_>** other than that, identical to eddsa  
**\<sarang>** OK, I wasn't familiar with this construction  
**\<oneiric\_>** looking for a link to alpha generation, one moment  
**\<oneiric\_>** https://geti2p.net/spec/proposals/123-new-netdb-entries#blinding-calculations  
**\<oneiric\_>** and the proposed red25519: https://geti2p.net/spec/proposals/146-red25519  
**\<suraeNoether>** okay  
**\<oneiric\_>** is there anything obviously dangerous, or gotchas that you can see?  
**\<sarang>** So the difference is the deterministic derivation of the private key offset alpha  
**\<oneiric\_>** sarang yeah that's how i understand it  
**\<sarang>** Well if an adversary is able to gain any advantage in determining the hash inputs used to derive alpha, not good  
**\<oneiric\_>** they have control over the destination, but its hashed  
**\<suraeNoether>** oneiric\_:  seems like the strength of it relies up on the "secret" input  
**\<suraeNoether>** someone who uses an empty secret (or just "0" or a badly selected password or something), then someone could brute force lots of destinations and datetimes and keep them all in a big table and look them up when needed  
**\<oneiric\_>** oh, yeah that's bad. totally undermines the point of the scheme  
**\<suraeNoether>** the next question down is whether they should switch to SHA256 and the answer is "no" because afaik hkdf is basically hmac used as a kdf, and that's what i've been advocating for about a year  
**\<suraeNoether>** wow "afaik hkdf hmac kdf"  
**\<oneiric\_>** what would you suggest as an alternative for alpha generation, or are there checks one could do to prevent bad selection?  
**\<oneiric\_>** blake2b sane alternative, yeah?  
**\<suraeNoether>**  oneiric\_ i don't think there is a protection against using crappy randomness  
**\<suraeNoether>** the hash function selected isn't a big deal as long as HKDF is correctly implemented as an HMAC, even crappy hash functions can produce indistinguishable results  
**\<suraeNoether>**  but let's say you got clever and you said  
**\<suraeNoether>** "instead of using secret, let's use HKDF(secret) or SHA256(secret)!" but then you can still be brute forced and you need some salt... which kicks the randomness can down the road to the salt.  
**\<sarang>** In the interest of time, let's finish up and move discussion outside of the formal meeting time  
**\<sarang>** 4. ACTION ITEMS  
**\<oneiric\_>** absolutely appreciate both your inputs sarang and suraeNoether  
**\<sarang>** I will review sgp\_'s proposal in more detail, finish up MPC code and more robust tests, and hopefully get that DLSAG-related paper out the door so we can post publicly  
**\<gingeropolous>** so I'm curious on where MRL stands on SPECTRE and, in general, switching from nakamoto-consensus. Was there a write-up from the previous investigation? I'm particularly interested because if monero ever actually achieves a strong decentralized network with many miners, the existing consensus system could make things really unstable. So I guess one possible area of investigation is how capable is nakamoto-consensus in a strong  
**\<gingeropolous>** decentralized network? I.e., if we had 3k nodes, all solo mining at 200 h/s, with transactions coming randomly from all the nodes, how well would the network actually function? Would it just be reorging constantly, with broken ring sigs causing txs to drop from existence?  
**\<sarang>** Later this month I'll post my next funding request, which as suraeNoether will have upfront payment to hedge against volatility  
**\<gingeropolous>** sorry, was waiting for something and hit enter  
**\<sarang>** both SPECTRE and PHANTOM have scaling issues  
**\<sarang>** and different guarantees  
**\<sarang>** there was a proposal to do a sort of hybrid between them, but AFAIK it has not been formally analyzed  
**\<suraeNoether>** gingeropolous: spectre is neat for a few reasons but crappy for scaling (although that part is totally mitigatable with const-time spectre). the neat stuff about spectre is that it's robust against partitions of the network  
**\<suraeNoether>** in nakamoto consensus, if the network is split into two pieces, both sides continue on and write to their ledgers...  
**\<suraeNoether>** but when they re-merge, only the writes on one side of the split ever become final  
**\<suraeNoether>**  (except for the non-conflicting ones)  
**\<suraeNoether>** in spectre, on the other hand, writes made on both sides of the split have a chance of being merged into the "complete" ledger  
**\<suraeNoether>** so in that sense, together with some probability arguments, it's more robust than nakamoto  
**\<sarang>** I still remain bullish on an eventual general graph-based consensus mechanism  
**\<suraeNoether>** same. as tony arcieraierhal on twitter likes to complain about, the nakamoto consensus isn't actually a very good "solution" to byzantine consensus because of the partitioning property described above.  
**\<suraeNoether>** https://en.wikipedia.org/wiki/CAP\_theorem : nakamoto scores low on the P in CAP  
**\<sarang>** suraeNoether: your action items for this week?  
**\<suraeNoether>** spectre sacrifices C for P, i think  
**\<suraeNoether>** 1) feb  report. 2) FFS request for next quarter. 3) matching simulations. 4) dlsag paper modifications. 5) reading about flyclient and mmr. i've back-burnered const-time spectre  
**\<suraeNoether>** sarang: your action items?  
**\<sarang>** Sounds good  
**\<sarang>** Any final comments before we formally wrap up?  
**\<sarang>** Ah, I already stated mine!  
**\<sarang>** I will review sgp\_'s proposal in more detail, finish up MPC code and more robust tests, and hopefully get that DLSAG-related paper out the door so we can post publicly  
**\<suraeNoether>** oh i see that at the top of the section now  
**\<sarang>** OK, thanks to everyone for attending. We are now adjourned!  
**\<suraeNoether>** allrighty. same bat time, same bat place.  
