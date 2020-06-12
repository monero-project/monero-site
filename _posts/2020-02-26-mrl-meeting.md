---
layout: post
title: Logs for the MRL Meeting Held on 2020-02-26
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** Hello all, and welcome to the weekly research meeting  
**\<sarang\>** First, GREETINGS  
**\<sarang\>** Hi  
**\<UkoeHB\_\>** hi  
**\<ArticMine\>** hi  
**\<sarang\>** \*others  
**\<cankerwort\>** Peanut gallery quickly checking in to ask what the latest is on return addresses. Last I remember there was an idea to include a subaddress in the tx as a return address. Is that still being being considered?  
**\<sarang\>** It's always possible to include in tx\_extra, which is not consensus  
**\<sarang\>** and there was a space-minimizing proposal as well  
**\<sarang\>** AFAIK no one has coded such a thing yet  
**\<sarang\>** As always, there's a consideration of how optional behavior is bad for indistinguishability  
**\<sarang\>** Let's go ahead and start the ROUNDTABLE  
**\<sarang\>** Does anyone have research topics of interest to share?  
**\<sarang\>** I'll go ahead, then  
**\<sarang\>** First, the Stanford Blockchain Conference was held this past week  
**\<sarang\>** Here is a link to the schedule and recordings of talks for each day: https://cbr.stanford.edu/sbc20/  
**\<sarang\>** Second, a small PR on hash function domain separation was updated, and could always use extra eyes for review: https://github.com/monero-project/monero/pull/6338  
**\<sarang\>** Third, I made some updates to the structure of CLSAG signature verification code... by reducing the modularity of the signature verification routine to specifically include some commitment offsets, I was able to shave about 5% off the verification time  
**\<sarang\>** See this branch for details: https://github.com/SarangNoether/monero/tree/clsag-optimized  
**\<Isthmus\>** Any particular talks that you recommend from SBC?n  
**\<sgp\_\>** hello everyone, catching up on the chat so far  
**\<sarang\>** Florian's talk about Monero and Zcash side-channel analysis on Wednesday's stream is very good  
**\<sarang\>** All of session 4 on Wednesday is interesting  
**\<sarang\>** As is session 5 on Thursday  
**\<sarang\>** Fourth, I worked on similar improvements for MLSAG... however, this is trickier, since verification requires particular byte-representation hash inputs for backwards compatibility  
**\<sarang\>** The results for that aren't great: https://github.com/SarangNoether/monero/tree/mlsag-optimized  
**\<Isthmus\>** Ah I loved that paper  
**\<sarang\>** Yeah, kudos to Florian and collaborators for great work and responsible disclosure  
**\<sarang\>** Finally, another researcher contacted me with an idea for atomic swaps that might remove the need for a SHA-256 preimage proof  
**\<sarang\>** We're still working out the details, but it's an intriguing idea for which the necessary building blocks already exist  
**\<sarang\>** More information as we work on it!  
**\<UkoeHB\_\>** interesting, haven't heard from atoc in a while who was looking into that  
**\<sarang\>** Yeah... I don't want to provide more information until the researcher and I have discussed it (as a courtesy to them)  
**\<sarang\>** sorry  
**\<Isthmus\>** Respecting privacy is good ;- )  
**\<sarang\>** Anyway, those are my updates! Mostly code updates and testing  
**\<sarang\>** Does anyone else wish to share research of interest?  
**\<UkoeHB\_\>** thanks to sarang 's initial draft, tx knowledge proofs chapter is done (wip tag is off) for ztm2  
**\<UkoeHB\_\>** https://www.pdf-archive.com/2020/02/26/zerotomoneromaster-v1-0-30/zerotomoneromaster-v1-0-30.pdf  
**\<UkoeHB\_\>** chapter 9  
**\<Isthmus\>** Nice!  
**\<Isthmus\>** "An Axiomatic Approach to Block Rewards" https://arxiv.org/pdf/1909.10645.pdf  
**\<UkoeHB\_\>** sgp\_ may be interested in section 9.3 for audits  
**\<UkoeHB\_\>** reader beware various things arent implemented and are just theoretical  
**\<sarang\>** Yeah, the idea for a general audit framework is super interesting to me  
**\<sarang\>** and could be useful to reduce confusion about what proof types provide what information  
**\<sarang\>** Right now, it's sort of ad-hoc  
**\<cankerwort\>** ZtoM will contain unimplemented features and ideas from the roadmap?  
**\<sarang\>** Isthmus: that paper is on my literature review list!  
**\<UkoeHB\_\>** also made some updates/fixes to minimum fee change idea https://github.com/monero-project/research-lab/issues/70 @ArticMine  
**\<sgp\_\>** thanks for sharing! I will see if I can get feedback on it  
**\<UkoeHB\_\>** cankerwort part 2 'extensions' contains unimplemented features; saying they are roadmap is quite ambitious  
**\<sarang\>** One thing to note about the audit idea from UkoeHB\_ is that it requires proofs applying to \_all\_ transactions for which a given output appears in rings  
**\<sarang\>** which I suspect may require substantial engineering effort (as a guess)  
**\<UkoeHB\_\>** also proofs for every single tx in the chain  
**\<UkoeHB\_\>** for each normal address you own  
**\<sarang\>** but the benefits of this approach are worth investigation  
**\<sarang\>** IMO  
**\<UkoeHB\_\>** audits arent trivial for sure  
**\<cankerwort\>** Should be called "ZtoM... and beyond!"  
**\<UkoeHB\_\>** lol yeah  
**\<sgp\_\>** I'm familiar with some people who do Monero audits for businesses so I'll try and get their feedback  
**\<sarang\>** UkoeHB\_: fortunately the proofs are all off-chain anyway  
**\<sarang\>** So efficiency is much less of a consideration  
**\<UkoeHB\_\>** Id refrain from expecting anything in ZtM that isnt implemented to actually get implemented. They are just ideas  
**\<sarang\>** UkoeHB\_ and I had discussed this very topic earlier... about the intended purpose of ZtM  
**\<sarang\>** e.g. protocol spec, or something else  
**\<Isthmus\>** I think that flavoring it with the latest ideas and discussions will convey the lively R & D, provide helpful context, and leave an important historical record  
**\<Isthmus\>** In 10 years I want to sit down and nostalgically re-read the old "future work" sections  
**\<sarang\>** heh  
**\<sarang\>** Anything else to share UkoeHB\_?  
**\<sarang\>** (just to keep the meeting on track)  
**\<UkoeHB\_\>** dont think so  
**\<sarang\>** Cool, thanks for the update  
**\<sarang\>** Isthmus: you had chimed in earlier  
**\<sarang\>** Did you wish to continue with anything else?  
**\<Isthmus\>** Life has been hectic, so haven't had many Monero moments lately.  
**\<Isthmus\>** However  
**\<Isthmus\>** n3ptune was doing some data QC/QA and noticed that in a recent preliminary figure I had missed 100 recent transactions with no payment id (encrypted nor unencrypted)  
**\<Isthmus\>** But that's a minor difference  
**\<sarang\>** How recent is "recent"?  
**\<sarang\>** If you recall  
**\<Isthmus\>** Probably this version, but idk  
**\<Isthmus\>** It's only like a 0.5% change over the previously presented data  
**\<Isthmus\>** I've been working on a little design thought experiment, but it's still rough and maybe more -lounge appropriate  
**\<Isthmus\>** Otherwise, nothing else to report, that I can think of  
**\<sarang\>** Got it, thanks  
**\<sarang\>** I know suraeNoether said he was unavailable, but would provide an update later today on his recent work  
**\<sarang\>** He's been working on some interesting updates to linkable ring signature security models  
**\<sarang\>** I've been reviewing those as well  
**\<sarang\>** Does anyone else wish to share ongoing research?  
**\<sarang\>** Either specific to something mentioned here, or more generally  
**\<sarang\>** If not, we can move on to QUESTIONS  
**\<sarang\>** OK, looks like no questions so far  
**\<sarang\>** Let's move to ACTION ITEMS before closing the meeting  
**\<ArticMine\>** Feasibility of child pas for parent in Monero (child has parent as one of the mixins)  
**\<sarang\>** ?  
**\<ArticMine\>** pays  
**\<sarang\>** Can you elaborate, ArticMine ?  
**\<ArticMine\>** In Bitcoin a tx in the tx pool has to low a fee  
**\<sarang\>** "has to low a fee"?  
**\<ArticMine\>** A second tx is sent using the tx with to low a fee as an input  
**\<sarang\>** Sorry, I'm not following  
**\<sarang\>** ah  
**\<ArticMine\>** The miner miones both txs in a block  
**\<ArticMine\>** In the Monero case the child has the tx output of the parent as one of the mixins  
**\<ArticMine\>** can be real or fake  
**\<sarang\>** What is the specific question you're getting to?  
**\<Isthmus\>** Interesting interesting  
**\<ArticMine\>** Can this e done in Monero  
**\<ArticMine\>** be  
**\<UkoeHB\_\>** oh is it about what can be done if a tx is stuck since its fee is too low?  
**\<UkoeHB\_\>** e.g. make a new tx with more fee for it  
**\<ArticMine\>** Yes this can e part of the toolkit  
**\<ArticMine\>** be  
**\<ArticMine\>** but in addition to what I am looking at with the fees, etc  
**\<UkoeHB\_\>** we do have 10block lock time atm, so tx spending other tx output doesn't quite work, though there could be new rules around 'in the same block'  
**\<Isthmus\>** I actually think this seems very plausible  
**\<Isthmus\>** You wouldn't mine only the bump  
**\<Isthmus\>** And once the transaction is mined, the bump is unnecessary  
**\<Isthmus\>** The bump transaction should have exactly 2 outputs: a plaintext fee and an encrypted change output  
**\<Isthmus\>** And reference the first transaction by hash  
**\<UkoeHB\_\>** yeah  
**\<sarang\>** hmm  
**\<UkoeHB\_\>** Im wondering why not just remake the same tx  
**\<UkoeHB\_\>** with more fee  
**\<ArticMine\>** because of multi sig  
**\<UkoeHB\_\>** ah yeah  
**\<sarang\>** Huh, that's a very interesting question  
**\<Isthmus\>** Oh, and only 1 bump per transaction  
**\<Isthmus\>** You can broadcast more if you want, obviously  
**\<Isthmus\>** But only one bump can be claimed by the miner  
**\<Isthmus\>** So if you bump with 0.2 XMR then change your mind and send a 0.5 XMR bump, a miner would just ignore the smaller bump  
**\<ArticMine\>** Yes  
**\<ArticMine\>** but anyone can do the bump in Monero unlike Bitcoin  
**\<cankerwort\>** Why "becauae of multisig"?  
**\<Isthmus\>** You could design it either way: allow anybody to bump, or require a signature from the original sender to bump  
**\<Isthmus\>** (one of the original senders)  
**\<UkoeHB\_\>** sounds like it's possible, although would require protocol level changes (new transaction type, etc)  
**\<midipoet\>** wouldn't being able to do that (child pays for parent) drastically decrease the overall cost of the chain reaction attack?  
**\<ArticMine\>** You include the parent as one of the mixins  
**\<Isthmus\>** @UkoeHB\_ I'm only here for the protocol level changes :- P  
**\<cankerwort\>** Also the big bang attack presumably  
**\<ArticMine\>** The miner does know if the parent is real or not  
**\<UkoeHB\_\>** ArticMine I don't know if the parent needs to be a mixin, just include the parent tx hash as part of bump tx, an additional data field  
**\<ArticMine\>** That does not mine the parent  
**\<UkoeHB\_\>** It would be a new tx type  
**\<UkoeHB\_\>** 'bump tx'  
**\<ArticMine\>** Not really  
**\<UkoeHB\_\>** RCTTypeBumpIt  
**\<Isthmus\>** heh  
**\<sarang\>** lol  
**\<ArticMine\>** The point of child pays for parent is that in order to mine the child one has to mine the parent  
**\<sarang\>** right  
**\<sarang\>** But that seems straightforward to enforce, no?  
**\<ArticMine\>** In Bitcoin that means spending the output of the parent in the child  
**\<UkoeHB\_\>** I think you might get into weird 0-conf territory if can spend an output with 0-block lock time  
**\<Isthmus\>** @cankerwort yeah, though as long as the bump density [XMR per kB] is higher than transaction density [XMR per kB] then they would effectively take up less space (be less effective) for a big bang attack  
**\<UkoeHB\_\>** the 10block lock is there for a reason afaik  
**\<UkoeHB\_\>** just willy nilly  
**\<ArticMine\>** in Monero it means including it in the ring real or fake. The miner does no know  
**\<Isthmus\>** Yeah, I think the "bump" transaction needs to be a new type with exactly [fee delta + change] outputs and a new field referencing the transaction hash of the transaction to be accelerated  
**\<Isthmus\>** And everything is subject to the 10-block lock  
**\<UkoeHB\_\>** or you could make it an optional field in normal tx type, to reduce complexity  
**\<ArticMine\>** Both are mined in the same block so there is no issue with orphans  
**\<sarang\>** UkoeHB\_: not in extra, right?  
**\<sarang\>** for parsing etc.  
**\<UkoeHB\_\>** no, unless we start enforcing it  
**\<sarang\>** aye  
**\<UkoeHB\_\>** interesting idea articmine  
**\<cankerwort\>** Surely the delta could be as small as you like though? So it could be used to make big bang attack cheaper  
**\<UkoeHB\_\>** big bang is about total block weight  
**\<UkoeHB\_\>** still have to pay fee for bump tx too  
**\<cankerwort\>** Ie you are adding 2 transactions for one fee?  
**\<Isthmus\>** The fee in the bump has to cover both the weight of the bump itself and the original transaction  
**\<cankerwort\>** Ah  
**\<Isthmus\>** So if I have a 5 kB txn and a 2 kB bump, then the total fee has to incentivize the miner to include 7 kB  
**\<ArticMine\>** Yes enough to provide an incentive the miner  
**\<ArticMine\>** That is the point of child pas for parent also in Bitcoin  
**\<sarang\>** Quick note that we should try to finish up soon, since Konferenco has a meeting in a few minutes  
**\<ArticMine\>** pays  
**\<sarang\>** May we quickly review action items, and then continue discussion?  
**\<ArticMine\>** Yes of course  
**\<sarang\>** I'll be working on some review for vtnerd's 64-bit operation code  
**\<sarang\>** as well as some Triptych coding for timing purposes  
**\<sarang\>** Others?  
**\<sarang\>** OK, then let's formally adjourn for log posting purposes... please continue discussion!  
**\<sarang\>** Thanks to everyone for attending  
