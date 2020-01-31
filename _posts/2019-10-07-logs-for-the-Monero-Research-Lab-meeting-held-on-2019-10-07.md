---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-10-07
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** GREETINGS  
**\<suraeNoether>** howdy!  
**\<ArticMine>** hi  
**\<sarang>** I suppose we can jump into ROUNDTABLE discussion  
**\<sarang>** suraeNoether: ?  
**\<suraeNoether>** sure; I've been working on my matching code. I fixed a few bad unit tests, i fixed a problem that was making the code take O(n^2) time and now it takes O(n) time... the challenger code and the parameter space explorer code are nearing completion, and my simulations are still misbehaving  
**\<sarang>** Any ideas what exactly is misbehaving?  
**\<suraeNoether>** i'm also beginning to read about an idea by randomrun and thinkinga bout security proofs for it  
**\<suraeNoether>** well, no, that's what's strange. i have unit tests that check things like "check that the correct number of nodes are added to the graph", and they all pass those things... but then the integrated simulation as a whole produces a bad output file  
**\<suraeNoether>** which is why i posted the stupid gif the other day of "two unit tests, no integration test"  
**\<sarang>** I see  
**\<suraeNoether>** but i'm working on it, and i have a few clues... and six more unit tests i'm coding up this afternoon  
**\<sarang>** excellent  
**\<suraeNoether>** i also want to bring up the topics that isthmus posted on github  
**\<sarang>** Let's save those until he returns  
**\<suraeNoether>** but we should hold off till the end of the meeting to chat about those  
**\<suraeNoether>** \*nod\* he may not return, though, and we should chat about it in public today eventually either way  
**\<sarang>** I've worked on a few things this past week  
**\<sarang>** I collaborated with Aram on a Lelantus update: https://lelantus.io/enabling-untraceable-anonymous-payments.pdf  
**\<sarang>** It seems to solve the sender tracing issue, but at the cost of proper one-time addressing  
**\<suraeNoether>** hmm \*taps chin\*  
**\<sarang>** Trying to fix both at the same time keeps running into a wall involving Pedersen generators  
**\<suraeNoether>** i'm very interested to spend some time catching up on that trade-off  
**\<sarang>** So we're looking at possible ways to use Schnorr representation proof tricks here... nothing so far though  
**\<sarang>** Aside from that, I updated the RCT3 proof-of-concept code and spacetime analysis to reflect the new version of the preprint that was released  
**\<sarang>** They compress the spend proof across inputs, but this incurs some major cost in padding inputs  
**\<sarang>** Unfortunately, undoing that compression doesn't play nicely with their integrated balance proof  
**\<sarang>** As in, (number of spends)\*(size of anonymity set) must be a power of 2, or padded to one  
**\<suraeNoether>** iirc lelantus originally used a tree structure, yeah? is that why?  
**\<sarang>** Is what why?  
**\<suraeNoether>** is that why they require padding inputs to powers of two?  
**\<sarang>** RCT3, not Lelantus  
**\<sarang>** It has to do with the inner-product argument that it uses for compression  
**\<suraeNoether>** gack, got them confused~ nevermind, i retract my question  
**\<suraeNoether>** ah, that makes sense too  
**\<sarang>** It would be nice to get separate spend proofs if only to avoid this padding issue  
**\<sarang>** but that would require redoing security proofs etc.  
**\<sarang>** Finally, I've been working more on some ideas RandomRun had for Triptych involving balance proofs and multiple spends  
**\<sarang>** I have a simple version of the Groth proving system that supports proving knowledge of multiple commitment openings to zero, along with linking  
**\<sarang>** but haven't done any security proofs (in particular, I have some questions about the uniqueness requirements on certain proof elements)  
**\<sarang>** Getting balance integrated is tricky, and that's what I'm working on now  
**\<suraeNoether>** is there any write-up anywhere you and/or RR are willing to share with the public, or is this still too much "in prep"?  
**\<sarang>** His ideas are listed in the GitHub issue here: https://github.com/monero-project/research-lab/issues/56  
**\<sarang>** and the work-in-progress code is here, but very unfinished: https://github.com/SarangNoether/skunkworks/tree/lrs/lrs  
**\<suraeNoether>** gotcha  
**\<sarang>** and very probably insecure as written  
**\<sarang>** Right now it's just at the playing-around-with-the-algebra stage, to see what's useful/possible  
**\<suraeNoether>** it's good to clarify that before some other coin goes and implements it :P  
**\<sarang>** Anyway, kudos to RandomRun on some really clever ideas to extend that Groth proving system  
**\<sarang>** TBH it's probably worth a short paper on its own  
**\<sarang>** Right now (if proven secure, mind you) it turns Groth's idea for a ring signature into a linkable ring signature  
**\<sarang>** If the balance proof extension works, then we're really cooking  
**\<sarang>** Efficiency TBD  
**\<sarang>** While we wait for Isthmus to return, I can wrap up by saying my ACTION ITEMS for the week are trying to get balances working in Triptych, finishing a presentation on transaction protocols, and getting caught up on some lit review  
**\<suraeNoether>** good timing bruh  
**\<sarang>** Isthmus: we didn't talk about your items at all  
**\<sarang>** Care to go over them now?  
**\<Isthmus>** Sure  
**\<Isthmus>** One of the things I've been pondering about is how to assess the appropriate (safe) lock time  
**\<Isthmus>** Here is one possible framework for the conversation: https://github.com/noncesense-research-lab/lock\_time\_framework/blob/master/writeup/lock\_time\_framework.pdf  
**\<Isthmus>** Since the lock time only needs to be longer than reorg events, we can approach the question systematically by enumerating the list of things that cause alternative blocks, assessing the maximum plausible length of alternative chains that they could produce, and buffer that with a safety term  
**\<sarang>** Enumerating the expected sources of reorganizations is a good idea, now that you have some empirical data on latency-based reorgs  
**\<Isthmus>** My goal is to take the conversation out of the realm of intuition, towards addressing specific things that we can model/discuss/etc. :- )  
**\<sarang>** I seem to recall some talk a long while ago about individual nodes that had observed much longer reorgs, but I assume these were not global?  
**\<sarang>** (for some definition of global)  
**\<Isthmus>** Well, that was back when there were ASICs on the network  
**\<suraeNoether>** i'm inclined toward T2 or T3. the selection of an enforced lock time to ban inarguably-too-short txn times is easy and has an immediate benefit to the system. analysis paralysis while selecting an "optimal" lock time isn't desirable, and having the enforced lock time in place - even if we don't change the current lock time - is critically important  
**\<Isthmus>** Yeah, (should we enforce lock time?) and (how long should lock time be?) are two distinct questions  
**\<suraeNoether>** so, here's the deal  
**\<sarang>** There seemed to be good support for consensus enforcement of whatever value is chosen  
**\<sgp\_>** Is it worth exploring privacy implications as well? It could be that the longer the lock time, the better it is for network privacy to some extent  
**\<suraeNoether>** sgp\_: this is especially true if the lock time is longer than the median spend-time  
**\<suraeNoether>** but that's not a desirable lock time  
**\<suraeNoether>** for obvious reasons  
**\<suraeNoether>** so, the deal i'm thinking is that it's easy to discern what is \*unacceptably long\* or short in lock times  
**\<suraeNoether>** a lock time of two blocks is too short, a lock time of 90 days is too long, for sure  
**\<sgp\_>** I don't think it needs to be the main topic (chain re-orgs are more important imo), but it's worth considering  
**\<sgp\_>** I think we will have a tough time reducing it from 10 honestly for UX reasons  
**\<suraeNoether>** i guess my question is  
**\<suraeNoether>** does anyone have an argument in favor of using a value \*other than 10\*  
**\<sgp\_>** \*tough time increasing it  
**\<sgp\_>** suraeNoether: I would like to justify a smaller number for UX reasons if possible  
**\<suraeNoether>** i wouldn't dare lower it further than 10  
**\<sgp\_>** Isthmus's document outlines a basic framework for coming up with a number  
**\<sgp\_>** suraeNoether: based on what though?  
**\<suraeNoether>** or let me rephrase that, because "i wouldn't dare" is a bit dramatic  
**\<suraeNoether>** sgp\_: well, we've witnessed many re-orgs length longer than 10. they are downright \*common\*  
**\<suraeNoether>** moreover, spend-times that are lower than 20 minutes are \*extremely\* noticable in a txn graph  
**\<suraeNoether>** if a sequence of very fast chained txns occur in a row, you can almost bet your ass that they're the same person churning.  
**\<ArticMine>** The question in my mind is what is an acceptable risk probability for T2, and T3  
**\<suraeNoether>** ArticMine: that was the question that popped into my mind  
**\<sgp\_>** that's what I was referring to from the privacy angle  
**\<suraeNoether>** \*nod\*  
**\<sarang>** Do you happen to know the corresponding threshold for Bitcoin's choice of typical lock time?  
**\<sarang>** I don't, off the top of my head  
**\<suraeNoether>** ^ sgp\_ or ArticMine or isthmus?  
**\<sgp\_>** nope  
**\<suraeNoether>** hm  
**\<Isthmus>** I'm avoiding commenting on any particular numbers until we decide on a framework for discussing  
**\<suraeNoether>** personally i would find it helpful to have those numbers in deciding the framework  
**\<sarang>** Here's a writeup that I'd seen before: https://bitcoil.co.il/Doublespend.pdf  
**\<dEBRUYNE>** sarang: Bitcoin has no lock time for normal transactions  
**\<dEBRUYNE>** You can essentially chain unconfirmed transactions  
**\<suraeNoether>** dEBRUYNE: thanks that's important to know, too. :P  
**\<sarang>** Page 8 shows some example data based on hashrate and confirmations using Bitcoin as an example  
**\<Isthmus>** Chicken/egg, don't need numbers for the framework  
**\<sgp\_>** I see your point Isthmus  
**\<Isthmus>** Does buffering the lock time to be greater than the worst case plausible scenario make sense as a framework?  
**\<sarang>** dEBRUYNE: but most clients use the 6-confirmation rule for "confirmed" transactions  
**\<suraeNoether>** Isthmus: if we did this, our lock time would have to be >> 23  
**\<sarang>** I was curious about that particular choice's assumptions  
**\<suraeNoether>** iirc we saw a 23-block reorg recently  
**\<dEBRUYNE>** It is a soft rule essentially  
**\<dEBRUYNE>** You can easily overrule it  
**\<sgp\_>** Let's consider a 3 standard deviation scenario  
**\<sarang>** dEBRUYNE: right, but I'm simply curious to make a comparison  
**\<Isthmus>** Lock\_time = Safety\*(max(len\_latency, len\_51%, len\_selfish...))  
**\<Isthmus>** So if you're saying that would be 23  
**\<Isthmus>** You're saying lock  
**\<Isthmus>** lock\_time = 23  
**\<Isthmus>** What are you using as your value for the Safety term?  
**\<Isthmus>** And which term in the max are you looking at?  
**\<suraeNoether>** ah, good questions  
**\<Isthmus>** I never suggested any value for the safety term, so I'm trying to figure out how we got to 23 :- P  
**\<suraeNoether>** no no  
**\<suraeNoether>** that's not the 23  
**\<suraeNoether>** i'm saying max(...) > 23, because we've seen 23 within the last year  
**\<Isthmus>** Woah, I totally missed that  
**\<Isthmus>** When?  
**\<suraeNoether>** so whatever number we select needs to be > safety\*23  
**\<Isthmus>** We can fish it out of the NRL logs  
**\<sarang>** That was from a single node report, no?  
**\<suraeNoether>** sarang: \*shrug\* even if it was 15, or 12, safety\*12 for any safety > 1 is going to be bigger than 20, generally  
**\<sgp\_>** That's why I think looking at all reogs and using 3sd longer than normal or something like that is a more practical number  
**\<suraeNoether>** my point is: if we look at how common re-orgs are, and if we want to protect against those, we need unreasonably long lock times that risk slowing down the monero economy  
**\<sarang>** sgp\_: all observed reorgs, regardless of assumed origin (latency, high-hashpower entity, etc.)?  
**\<sgp\_>** sarang: I would need to go deeper into the numbers, but I just want to see what the numbers are without some of the outliers  
**\<Isthmus>** I've been out of the loop, so I'm not disagreeing. But wowza, I hadn't seen anything \*global\* greater than length 2 since we switched to CryptoNoteR  
**\<suraeNoether>** sgp\_: \*nod\* we should look at the distribution of re-org times, though, and decide on a rigorous statistic instead of picking 3\*stdev, but your point is 100% correct  
**\<sgp\_>** that's the overall point I want to convey  
**\<ArticMine>** I suggest a risk based approach. Starting with who bears the risk?  
**\<sgp\_>** eg: if there was 1 reog at 20 and every other one is \<3, that's important to know  
**\<sarang>** I think using data and methods from the Bitcoin community for risk estimates of high-hashpower entities would be useful as one data point  
**\<sgp\_>** Isthmus: in terms of the framework however, I think we need to add some privacy implications  
**\<Isthmus>** True, though the Gini coefficient for BTC hashrate is probably much more lopsided that Monero's distribution  
**\<sgp\_>** shrinking the lock time likely has adverse privacy implications  
**\<sgp\_>** and it also have positive UX implications  
**\<ArticMine>** There are some significant differences in Bitcoin: 1) Great Firewall of China 2) 10 min blocks  
**\<Inge->** Better UX at the cost of privacy sounds like ... not-Monero.  
**\<Isthmus>** I suspect (and I may totally backtrack this later...) that the fact we flip coins every 2 minutes rather than every 10 minutes may mean we reach stable equilibrium faster  
**\<sgp\_>** Inge-: it's about the tradeoff. No one would use a coin with a lock time of 100 days  
**\<Isthmus>** SLOWNERO  
**\<Isthmus>** YESSSS  
**\<suraeNoether>** ^ nah, it's like using a smooth/exponential curve for a mortgage versus discretized timesteps using monthly annualization formulas: one approximates the other, but you converge at the same rate  
**\<suraeNoether>** wrt 2 minus vs 10  
**\<suraeNoether>** okay, let's operate briefly assuming that the longest reasonable "natural" re-org is 6 blocks. it's smaller than our current lock time, longer htan isthmus' global data, and matches satoshi's arbitrary selection.  
**\<suraeNoether>**  if we pick safety = 2 or 3, we are still looking at 12 or 18 lock time, not shorter than 10.  
**\<suraeNoether>** now, if we recall, block re-orgs don't always happen naturally and can take place due to adversarial behavior, using the longest one in history is incomplete  
**\<suraeNoether>**  why? the attacker may hold off, biding their time on a real attack, until their attack power is most likely to lead to success.  Seeing only a few re-orgs of length 2-6 in the entire history of monero doesn't mean that an adversary can't force a 30-length re-org, as an example, so while the monero archival stuff that isthmus has been running is helpful  
**\<suraeNoether>** i dunno, i feel like this is an unnecessary rabbit hole  
**\<sgp\_>** "past performance does not indicate future results." But I still like seeing how the network performs under normal scenarios  
**\<suraeNoether>** or at least: why try to select a number other than 10 before the next hard fork?  
**\<suraeNoether>** sgp\_: well... \*historical\* scenarios anyway  
**\<ArticMine>** So do we just stay with 10?  
**\<sgp\_>** let's agree on the framework first :)  
**\<sgp\_>** if we don't agree on anything, the status quo will remain (10)  
**\<Isthmus>** Oh totally NOT trying to adjust this by the next fork  
**\<Isthmus>** This is going to take us like 3 months to discuss  
**\<suraeNoether>** oh, then if that's the case  
**\<Isthmus>** I was just responding to the ping from last meeting  
**\<Isthmus>** I think enforce at 10 for this upcoming upgrade  
**\<Isthmus>** Ahhahaha  
**\<Isthmus>** Re @suraeNoether "this is an unnecessary rabbit hole",  As MRL, if we are going to inform lock time, we HAVE to go down three rabbit holes. 1) What's the longest plausible natural reorg, 2) What's the longest plausible attack, 3) what margin of error do we want?  
**\<Isthmus>** I literally don't think there's a way to address the question if we're not willing to consider these  
**\<Isthmus>** (I think... there may be some clever way to circumvent this...)  
**\<suraeNoether>** i'm saying there is not a way to address this problem  
**\<Isthmus>** What do you think about additive safety term versus multiplicative?  
**\<sgp\_>** suraeNoether: I agree on a theory level, but not on a practical level  
**\<suraeNoether>** sgp\_: yeah, i'm saying theoretically, there is no optimal solution. in practice, there will be a whole host of solutions that are "good enough" that have different tradeoffs between them depending on threat models  
**\<sgp\_>** ....have you worked on Monero before? lol  
**\<suraeNoether>** this is why isthmus is using the word plausible here  
**\<suraeNoether>** ...  
**\<sgp\_>** yeah it's a tradeoff, but we need to pick one, and there's potential reason to believe (with evidence) that a number other than 10 is best  
**\<suraeNoether>** \*cough\* there is no best solution  
**\<sgp\_>** I'm open to changing the number with the right evidence  
**\<Isthmus>** Maybe we can circle back to this next week with more recent numbers from the archival network regarding global events  
**\<ArticMine>** Is it not possible to take a risk based approach for a framework?  
**\<Isthmus>** @ArticMine yes, please share ideas :- )  
**\<ArticMine>** 1) % hashrate of attacker  
**\<ArticMine>** 2) Who bears the impact  
**\<ArticMine>** 3) Type of impact ie double spend, privacy  
**\<ArticMine>** One should be able to derive risk provabilities  
**\<Isthmus>** Some of #1 may be captured in Eq 3. Or at least I tried.  
**\<Isthmus>** https://usercontent.irccloud-cdn.com/file/iRNSWEPW/image.png  
**\<sarang>** Again, that Bitcoin-related paper does this type of hashrate-threshold analysis  
**\<ArticMine>** Yes this is the type of analysis I mean  
**\<suraeNoether>** 1) lock times > 50 or \< 10 are extremely bad ideas for opposing reasons.  
**\<suraeNoether>** 2) This leaves a narrow band of a half of a single order of magnitude.  not a lot of wiggle room.  
**\<suraeNoether>** 3) going from 10 to 15 is extremely unlikely to have a dramatic or concrete impact on privacy; this is a 10 minute difference when we are speaking of distributions with medians around a day and a half  
**\<suraeNoether>** 4)  Going from 10 to 40 is going to have huge impacts  on our economy, and would have to be justified by a veritable mountain of evidence  
**\<suraeNoether>** i look at this as willfully entering into analysis paralysis just because we have the data to answer questions about some very specific hypotheses  
**\<sarang>** In the interest of time, may we table this and return when folks have had a chance to review the relevant analysis?  
**\<sgp\_>** yes please  
**\<sarang>** Isthmus had one other item to discuss  
**\<Isthmus>** So, I might not have 100% of the technical details right, so feel free to jump in with corrections:  
**\<sarang>** It was the question of tx pubkey representation, since its use is different between primary and subaddresses  
**\<Isthmus>** Yes, that.  
**\<Isthmus>** The ability for an external observer to ascertain whether there were any subaddresses included in the construction of a transaction  
**\<Isthmus>** Leaks information about the recipient  
**\<moneromooo>** Or sender.  
**\<sarang>** For some reason I thought that unique pubkeys were always used now, regardless of address type, to reduce distinguishability... but I need to check this  
**\<Isthmus>** Yes, and/or sender  
**\<dEBRUYNE>** sarang: Sure, that is fair, but in that instance I would set it to zero  
**\<sgp\_>** This is the first I am hearing of this  
**\<moneromooo>** Actually... I'm not sure. The logic is a bit different for change IIRC...  
**\<suraeNoether>** i'm a bit confused...  
**\<moneromooo>** I hit that when I tried to add custom change addresses.  
**\<suraeNoether>** isthmus do you have a small toy example you could show us?  
**\<Isthmus>** Nope, I have no clue how the constructions differ  
**\<sarang>** suraeNoether: for subaddress destinations, you use a unique tx pubkey  
**\<Isthmus>** Well wait  
**\<Isthmus>** Maybe I can fish up an example  
**\<Isthmus>** Does tx\_extra = (empty) imply no subaddresses were involved?  
**\<Isthmus>** In that case I can just hit a block explorer  
**\<sarang>** tx\_extra stores tx pubkey, which is always included  
**\<suraeNoether>** sarang: do you mean the tx pubkey is encoded differently?  
**\<suraeNoether>** oh oh  
**\<suraeNoether>** yeah  
**\<sarang>** yes  
**\<suraeNoether>** aha  
**\<Isthmus>** Mmmmm  
**\<sarang>** It's derived differently for primary and subaddresses  
**\<sarang>** It's possible to use only one pubkey for multiple non-subaddress destinations  
**\<sarang>** but this implies distinguishability  
**\<Isthmus>** ^^^^  
**\<suraeNoether>** hmm  
**\<sarang>** I thought this had been changed to be unique per destination all the time, for this reason  
**\<suraeNoether>** sarang i am beginning to recall this conversation and using a unique key per destination, and we didn't like that it revaled the number of dest addresses, or something...  
**\<sarang>** Unique per output, is what I should have said  
**\<sgp\_>** why would the # of dest addresses be different than the number f outputs, unless someone is doing terrible churn?  
**\<suraeNoether>** \*shrug\* users do dumb stuff all the time for dumb reasons  
**\<sarang>** I will confer with moneromooo and examine code to see what the current default behavior is  
**\<Isthmus>** +1  
**\<moneromooo>** I purposefully shut up after what I said above since stoffu will know for sure, and I don't.  
**\<Isthmus>** Cool, I think we can probably stick a pin in this, research over the week, and circle back with more concrete details about distinguishability under the current design.  
**\<ArticMine>** +1  
**\<sarang>** OK, any other action items before we adjourn?  
**\<sarang>** Righto, thanks to everyone for participating  
