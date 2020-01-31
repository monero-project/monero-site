---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-09-09
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** GREETINGS  
**\<suraeNoether>** howdy!  
**\<ArticMine>** Hi  
**\<xmrmatterbridge> \<worriedrise>** Hello  
**\<sarang>** For our ROUNDTABLE, I can go first  
**\<sarang>** A meta-note is that my next funding request needs feedback to determine if/when it should be opened: https://repo.getmonero.org/monero-project/ccs-proposals/merge\_requests/96  
**\<sarang>** Aside from that, I've been working on inner-product proofs from IACR 944, which I know kenshamir[m] has also been working on  
**\<sarang>** Some neat efficiency things going on with those: https://github.com/SarangNoether/skunkworks/tree/944-ipa-nozk/ipa-nozk  
**\<sarang>** I've received plenty of edits/feedback to get the CLSAG paper submitted by its deadline  
**\<suraeNoether>** \*thumbs up for clsag\*  
**\<sarang>** And our friend RandomRun had a neat idea for applying a Groth proving system to transactions, detailed in a GitHub issue: https://github.com/monero-project/research-lab/issues/56  
**\<suraeNoether>** that proving system is also the basis for bootle's sublinear ring signatures, which was the basis for RTRS once upon a time  
**\<sarang>** The sizes are pretty big, but it may be possible to use some tricks from another paper to shrink them down  
**\<suraeNoether>** it's a strong foundational paper  
**\<sarang>** Yeah, it's used in Lelantus too  
**\<sarang>** That's my two cents so far  
**\<sarang>** suraeNoether: ?  
**\<mikerah>** Hello  
**\<suraeNoether>** my updates involve 1) matching, 2) proof of knowledge of signatures, and 3) looking at omniring as a general proving system for various uses  
**\<suraeNoether>** re: 1) i've made a bunch of local commits that i'll be squashing and pushing in a day or so  
**\<suraeNoether>** re: 2) i've identified a few of the foundational papers i'll be using to make my argument  
**\<suraeNoether>** re: 3) is a lot of reading and asking sarang questions  
**\<sarang>** neat  
**\<sarang>** Before we do questions and discussion, any other interesting work to share?  
**\<suraeNoether>** that's pretty much it so far; i have a stack of papers i've annihilated in the past few weeks, ranging from BOLT to bilinear pairings papers, but a lot of it has been background reading  
**\<sarang>** All right, we can also do QUESTIONS now  
**\<sarang>** suraeNoether: sounded from earlier like the PoKoS would likely require pairing operations?  
**\<mikerah>** I have a question. A few weeks back, I came on here asking about minimal smart contracts. I'm still doing some thinking about this. It doesn't seem like monero has any form of storage. Is this correct?  
**\<sarang>** What do you mean by storage?  
**\<suraeNoether>** yeah, all the foundational stuff i've found ranges from "easy" to "moderate" in the pairings setting, but has zero solutions at all for the DL setting. so i'm looking sort of into how to solve some of these problems in the DL setting. If i make progress on that front, it'd be of independent interest to the larger research community \*AND\* it would allow for some weeeeird stuff in Monero  
**\<kenshamir[m]>** suraeNoether: I was reading the bulletin and saw this issue: "Tech note/MRL bulletin on placing STARKs inside bulletproofs"  
**\<kenshamir[m]>** Is there anymore information regarding this?  
**\<kenshamir[m]>** Issue: 43  
**\<mikerah>** @kenshamir: How would fitting a STARK inside a bulletproof work? I can see the opposite working, though.  
**\<suraeNoether>** kenshamir[m]: I wanted to write a technical note re: that topic, or i want someone else to write it. i'm interested in the details behind placing a Sapling-style statement inside of a bulletproof. this is work that the zcash folks have done already, apparently, but i want a formal write-up. it's a common idea a lot of folks have, so it'd be nice to have a document to point to re: efficiency etc  
**\<sarang>** AFAIK the zcash-related work was simply estimating sizes/times based on circuit complexity  
**\<suraeNoether>** mikerah: a bulletproof can prove statements about inner products about vectors. so you can take a Sapling-style statement and formalize it in a bulletproof  
**\<suraeNoether>** sarang: indeedily do, neighborino, that's my recollection as well  
**\<sarang>** Well, bulletproofs can prove things about circuits natively :)  
**\<sarang>** The range proofs that are commonly used are a less general application  
**\<suraeNoether>** \*nod\*  
**\<sarang>** (but are more efficient)  
**\<mikerah>** @sarang: storage as in extra space in a transaction that one can take advantage of for random stuff. Bitcoin blocks have extra space that people have used in the past to store messages. In Ethereum, there's calldata.  
**\<mikerah>** \*extra space in a block  
**\<sarang>** There's an arbitrary data field that's also used to store certain transaction information and payment IDs  
**\<sarang>** tx\_extra  
**\<suraeNoether>** we have tx\_extra, but storing anything but uniform random data in it can lead to de-anonymization  
**\<sarang>** aye  
**\<sarang>** (or if not uniform random, "typical" data)  
**\<suraeNoether>** yeah  
**\<suraeNoether>** i should caveat that  
**\<sarang>** There have been ideas in the past for things like return addresses etc  
**\<suraeNoether>** if any data is stored in tx\_extra, it should be encrypted  
**\<mikerah>** I see. I will continue thinking about this see if I can come up with something, eventually  
**\<ArticMine>** This begs the question how does one enforce encryption for tx\_extra?  
**\<sarang>** should != must  
**\<Inge->** What is the length limitation of tx\_extra?  
**\<xmrmatterbridge> \<worriedrise>** Have you looked into dual outputs for Lelantus? Maybe if instead using the hash of the signing key, it took the hash of two signing keys S = Hs(P||Q), then also perhaps the commitments for the timelock could be stored in triple commitment? I haven't thought much about it though.  
**\<sarang>** Inge-: AFAIK there is no hard cap (aside from any block-specific limits etc.)  
**\<sarang>** worriedrise: interesting, but why a triple commitment?  
**\<sarang>** That commitment could be stored as a standard Pedersen commitment along with the new outputs, could it not?  
**\<xmrmatterbridge> \<worriedrise>** It could indeed. It would be one more point to store is all  
**\<suraeNoether>** "This begs the question how does one enforce encryption for tx\_extra?" \<-- add a tx\_extra\_valid field, change tx\_extra to a pair of group elements, use switch commitments in tx\_extra and in tx\_extra\_valid store a proof of knowledge of the opener of the commitment. if you stash plaintext in tx\_extra, you won't be able to open it as a commitment... that'd be one way. but i don't think enforcing it is  
**\<suraeNoether>** necessarily a good idea...  
**\<suraeNoether>** ArticMine: ^  
**\<ArticMine>** There is a possible attack vector if unencrypted data in tx\_extra is enforced or an incentive is provided. This came up in the payment id discussion  
**\<suraeNoether>** \*nod\* but enforcing that stuff in tx\_extra "looks uniform" can only go so far before head-meets-brick-wall  
**\<kenshamir[m]>** Reading a bit slow; sarang For rangeproofs, are you looking to switch out the inner product argument being used currently in bulletproofs for the one being used in 944?  
**\<sarang>** Oh, I was just tooling around with it  
**\<kenshamir[m]>** For the record, I think previously I mentioned 944 modifying bulletproofs inner product proof�, but bulletproofs is an inner product argument� also  
**\<kenshamir[m]>** Oh right  
**\<sarang>** ?  
**\<kenshamir[m]>** \<sarang "?"> In case I said it in a previous monero meeting, not sure  
**\<sarang>** Yeah, I was playing around with the algebra needed to get the 944 IPA playing nicely with the optimized verification in BP  
**\<sarang>** righto  
**\<sarang>** It sounds like the 944 authors did implementations of the BP range proofs with both inner product arguments, and claimed a fairly substantial speedup, if I'm reading correctly  
**\<sarang>** A much bigger speedup than I'd expect  
**\<ArticMine>** suraeNoether Right one can enforce encryption but one cannot prevent out of bounds publication of the decryption key  
**\<kenshamir[m]>** \<sarang "It sounds like the 944 authors d"> Yep, I am trying to verify this against Dalek's implementation, but I have paused as something in the paper does not make sense to me at the moment  
**\<sarang>** kenshamir[m]: what's that?  
**\<kenshamir[m]>** Hopefully, I can get an asnwer on it and benchmark against Dalek's optimised implementation  
**\<kenshamir[m]>** \<sarang "kenshamir: what's that?"> The \\Gamma\_{i} that is mentioned multiple times  
**\<kenshamir[m]>** Which is of size n-2 x n-2  
**\<sarang>** I assume, for example, that the 944 authors didn't unroll the IPA recursion in verification  
**\<kenshamir[m]>** Only holds on quadratic equation  
**\<kenshamir[m]>** I originally thought that it would hold n-2 quadratic equations  
**\<sarang>** Why would this be important for the underlying non-zk IPA?  
**\<kenshamir[m]>** \<sarang "I assume, for example, that the "> Yep, I will need to implement your code in order to make the benchmarks fair because Dalek's code does this  
**\<sarang>** My suspicion is that the unrolled recursion wipes out almost all of the speedup  
**\<sarang>** Since most of the optimizations appear to be in scalar operations only  
**\<kenshamir[m]>** \<sarang "Why would this be important for "> It does not make sense to me that a matrice only holds one equation, unless there is something I have misunderstand  
**\<sarang>** But this doesn't affect any uses of \_only\_ the underlying non-zk IPA, correct?  
**\<sarang>** So you don't mean that misunderstanding is a holdup for testing of the IPA for rangeproofs alone?  
**\<kenshamir[m]>** \<sarang "My suspicion is that the unrolle"> Plus Dalek use a batch\_invert function for Scalars, so this may absolutely be the case  
**\<sarang>** Yeah, we also batch the inversions  
**\<sarang>** so it's really just a single inversion and some scalar-scalar multiplications (which are essentially free)  
**\<kenshamir[m]>** \<sarang "So you don't mean that misunders"> I implemented the code using dense matrices, which is really in-efficient. I think there will be a big difference if we can store n-2 equations in one matrice, versus storing n-2 matrices of size `n-2 x n-2`  
**\<sarang>** Right, but if you're only testing a swap of the inner product argument in the bulletproofs rangeproof, you don't need any of the "higher-level" protocols  
**\<sarang>** the non-zk IPA stands on its own  
**\<kenshamir[m]>** \<sarang "Right, but if you're only testin"> Oh right, I get what you mean  
**\<sarang>** This is what I assume that table at the end of 944 was doing  
**\<sarang>** For the general applications, totally  
**\<sarang>** I think we're on the same page :D  
**\<kenshamir[m]>** I was thinking of benchmarking 944 rangeproof vs bulletproofs. But you are correct, in that we also need to benchmark 944s IPA\_Nozk vs bulletproofs IPA  
**\<sarang>** The paper seems to have both  
**\<sarang>** Perhaps the latter benchmarks were only in the extended 944 paper (I'd have to check)  
**\<sarang>** but no matter reallly  
**\<sarang>** AFAICT the last timing table is just swapping the non-zk IPA  
**\<kenshamir[m]>** Yeah it had both, the benchmarks show that they are basically the same once bulletproofs uses  IPA\_NoZK  
**\<kenshamir[m]>** Yeah  
**\<sarang>** Although the speedup was still impressive from just IPA\_NoZK (hence wanting to know if unrolling makes it irrelevant)  
**\<sarang>** something like ~30% IIRC?  
**\<sarang>** which seems absurd  
**\<kenshamir[m]>** Yeah, it was in that ballpark  
**\<sarang>** Still, worth a shot anyway to confirm :)  
**\<sarang>** Probably will be worth writing to the authors to note this  
**\<kenshamir[m]>** I will also test the normal IPA\_NOZK without multi-exp versus bulletproofs with multiexp  
**\<sarang>** I'll send them my unrolling algorithm too, to provide better benchmarks  
**\<sarang>** Multiexp will be huge, of course, in any of the applications  
**\<sarang>** when the size gets large  
**\<kenshamir[m]>** They used a generic library too, so this could play a role in the benchmarks  
**\<kenshamir[m]>** Not sure how/if though  
**\<kenshamir[m]>** \<sarang "when the size gets large"> Yep  
**\<sarang>** Yeah, but that shouldn't matter, ideally, if they did parallel implementations  
**\<sarang>** But hey, that's part of the point of a preprint, I suppose  
**\<sarang>** Get feedback and additional info!  
**\<sarang>** Perhaps we can collaborate on feedback to the authors, kenshamir[m]   
**\<sarang>** once we have numbers on this stuff  
**\<sarang>** I think it would be useful in their paper to note these things  
**\<kenshamir[m]>** \<sarang "Perhaps we can collaborate on fe"> Yep that would be great  
**\<sarang>** awesome  
**\<kenshamir[m]>** Yeah, because this was one of the more important contributions of the paper  
**\<sarang>** for sure  
**\<kenshamir[m]>** The proof system was also great  
**\<sarang>** 10/10 would verify?  
**\<sarang>** =p  
**\<kenshamir[m]>** :D  
**\<sarang>** In the interest of time, are there other questions?  
**\<sarang>** OK!  
**\<sarang>** On to ACTION ITEMS before we close  
**\<sarang>** I'll be continuing several things: proving systems, benchmarks, paper submission  
**\<sarang>** Feel free to comment on the proposed funding request, to determine if it should be opened  
**\<sarang>** suraeNoether: your action items?  
**\<suraeNoether>** ah, yes, sorry about that: squashing a bunch of commits for matching, to whip thring signatures into shape for the FC conference, and to start putting my ideas on POKOS down  
**\<suraeNoether>** but mainly matching, because that is so close to giving good results  
**\<sarang>** Awesome! Any other action items to share before we close?  
**\<suraeNoether>** just that i love all of you  
**\<suraeNoether>** be sure to comment on sarang's proposal request/comment period  
**\<kenshamir[m]>** 😳  
**\<sarang>** Aw shucks  
**\<sarang>** Thanks to everyone for participating! Logs will be posted to GitHub shortly  
