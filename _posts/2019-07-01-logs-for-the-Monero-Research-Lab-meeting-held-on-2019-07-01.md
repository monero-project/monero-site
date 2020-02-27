---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-07-01
summary: Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / suraeNoether
---

# Logs  

**\<suraeNoether>** agenda here: https://github.com/monero-project/meta/issues/362  
**\<rehrar>** howdy ho suraeNoether  
**\<suraeNoether>** heighty hi, neighborino  
**\<suraeNoether>** Good morning everyone!  
**\<suraeNoether>** let's get this research meeting started  
**\<suraeNoether>** Agenda is here, to refresh: https://github.com/monero-project/meta/issues/362  
**\<suraeNoether>** Sarang will not be joining us today  
**\<suraeNoether>** Before we get going, who all is here other than rehrar and myself?  
**\<moneromooo>** I am here, in read only mode.  
**\<suraeNoether>** isthmus is usually in meetings at this time, maybe he'll jump in later  
**\<rehrar>** chmod moneromooo 777  
**\<suraeNoether>** okay, we'll get going either way :D looks to be a short meeting  
**\<rehrar>** fixed, albeit drastically  
**\<suraeNoether>** So, firstly, Sarang posted his monthly research report, has been working on MLSAG speedups and some other CLSAG stuff, along with organizing for defcon  
**\<suraeNoether>** I have not posted my research reports yet because I've been running around post-konferenco trying to get some stuff finished, getting back into research and simulations, and learning a lot from TheCharlatan who, through some unfortunate mishaps with passports, is still in town after the kon :P  
**\<suraeNoether>** One thing I wanted to post with my reports was a post-mortem of the konferenco: total (final) attendee and sponsorship and speaker numbers, budget actuals, etc  
**\<suraeNoether>** Other than that, there was a Monero coffee chat right after the Konferenco that sgp hosted. I'm not sure where the link was, but we had a lot of folks from the konferenco live, a huge portion of the MAGIC board of directors... it was a great conversation  
**\<suraeNoether>** I'm anticipating making a push to my matching code either later today or tomorrow (TheCharlatan has helped me with a couple of development issues that were bogging me down)  
**\<suraeNoether>** Beyond that, I can answer questions on more details, but I want to pass it off to anyone else who's done any work in the past week they want to share  
**\<suraeNoether>** kennonero just asked two questions: first, when will CLSAG be merged, and second, has anything come up with the audits for CLSAG yet?  
**\<suraeNoether>** in answer to the first question, based on my last conversation with sarang we are optimistically (but unlikely) shooting for the next hard fork for CLSAG, but there is a good chance it will be put off till the next hardfork... sarang is currently the middle man between MRL and the auditors, so I probably shouldn't get into further detail for fear of putting words in his mouth  
**\<suraeNoether>** "middle man..." "contact person..."  
**\<TheCharlatan>** lol  
**\<rehrar>** there was a dev meeting yesterday  
**\<rehrar>** and in it we all thought it was unlikely CLSAG makes it in this hard fork  
**\<rehrar>** it's just really tight  
**\<suraeNoether>** ^ there we go  
**\<suraeNoether>** it is, it is  
**\<moneromooo>** OTOH the Random X reviews fell into place quick, so...  
**\<rehrar>** how are those going btw?  
**\<suraeNoether>** yeah, i do wish sarang and I had a conversation about audits before this meeting.  
**\<suraeNoether>** perhaps hyc is online and has some nontrivial info?  
**\<moneromooo>** He got the X41 report, but I heard no more beyond "we got what we asked for".  
**\<kennonero[m]>** suraeNoether: is there a vetting period for CLSAG security proof, or is it once the auditors are finished?  
**\<dEBRUYNE>** I am more worried about third party software than the core software getting up to date for CLSAG in time  
**\<rehrar>** "we got what we asked for" sounds kind of disappointed :P  
**\<TheCharlatan>** yeah, some lead time for third parties should be taken into account.  
**\<suraeNoether>** kennonero[m]: we haven't discussed that yet  
**\<moneromooo>** Whoever wants to code their own already has the source.  
**\<moneromooo>** (modulo yet another small speedup sarang wants to adD)  
**\<moneromooo>** Is anyone really doing their own beyond mymonero ?  
**\<suraeNoether>** if you ask me, the CLSAG scheme is not so different from MLSAG to be worried about the security (unforgeability), but it was sufficiently different that we couldn't "drop in" the security proof and a new one had to be written. but the proof doesn't have anything novel in it, and has all the same cryptographic assumptions as our present signatures...  
**\<endogenic>** moneromooo: lots of ppl actually  
**\<suraeNoether>** but on top of that, if we won't be able to get CLSAG into this hard fork and we have to push to the next hard fork anyway, that's still an additional 6 months of people looking at the proofs  
**\<endogenic>** but otoh more are being discovered of late to have been using our lib  
**\<moneromooo>** I find that hard to believe, but I'll accept that.  
**\<suraeNoether>** moneromooo: one of the interesting things about isthmus' talk was the statistical evidence of a whole ecology of monero code out there that doesn't match our reference code or mymonero either  
**\<endogenic>** i find it hard to accept lol  
**\<moneromooo>** suraeNoether: it'll be 5 months of nothing, plus one month of looking. Instead of being one month of looking now.  
**\<endogenic>** suraeNoether: i thought so too  
**\<suraeNoether>** one thing i would like to bring up is the "juvenile transaction" problem that isthmus brought up in that talk too  
**\<suraeNoether>** namely, it's convenient to be able to dump a bunch of transactions into the mempool all at once and walk away assured that eventually they will all be confirmed  
**\<suraeNoether>** but if a transaction is in the mempool and uses an output that hasn't expired it's lock time, i feel like htat transaction should be considered invalid  
**\<suraeNoether>** but then you have people who have to wait to create sequential transactions  
**\<endogenic>** consensus all the things  
**\<suraeNoether>** one question was "is there harm in allowing juvenile transactions to be hanging out in the mempool?"  
**\<endogenic>** sounds like it  
**\<suraeNoether>** a non-consensus way of helping things would make it so that such transactions \*aren't relayed until after the lock time is expired\*  
**\<moneromooo>** smooth may have an opinion on that.  
**\<suraeNoether>** i feel like it's a vector for the big bang attack or it will make flooding attacks way more simple or something like that  
**\<moneromooo>** If it's not mined yet, it can't take others with it, so it seems much less annoying.  
**\<moneromooo>** Good point. Currently the txpool is limited to... somehting like 300 MB I think. So you could make these unmineable txes with huge fees, but using an output locked for 10 years...  
**\<moneromooo>** And it'd muscle out all other txes -> empty blocks.  
**\<gingeropolous>** hold my beer, ima go pwn the monero network  
**\<moneromooo>** Could be a separate txpool for those I guess.  
**\<suraeNoether>** lolol  
**\<kennonero[m]>** moneromooo: would it be logical to split the mempool into txs that can be spent now?  
**\<moneromooo>** I'd have to think a lot more to decide whether it's logical I think.  
**\<suraeNoether>** it's an interesting problem and there aren't obvious immediate ways to look at the trade-offs  
**\<suraeNoether>** my favorite kind of problem  
**\<kennonero[m]>** And maybe add a tx expiry time, so that txs cannot be in the pool for longer than a day or so  
**\<moneromooo>** There is.  
**\<kennonero[m]>** Sure  
**\<TheCharlatan>** How about adding the locktime to the dandelion stem phase?  
**\<suraeNoether>** vtnerd ^  
**\<moneromooo>** What does this mean ?  
**\<suraeNoether>** well, in the stem phase of dandelion++ you hang onto transactions for a random period of time before you pass it down the stem  
**\<suraeNoether>** perhaps that random time could/should be >= the lock time of the transaction  
**\<moneromooo>** Even easier to DoS nodes then, no ?  
**\<suraeNoether>** hmmmm  
**\<suraeNoether>** i suppose in the sense that it requires/requests that miners hang onto a transaction longer before removing it from the mempool, so the pool would get bigger  
**\<suraeNoether>** okay, let's delay this discussion until after the meeting. too much in the weeds. :P but fun  
**\<suraeNoether>** does anyone else have any research or other devleopment they want to brag about?  
**\<suraeNoether>** Okay, so let's move onto action items, I guess!  
**\<moneromooo>** Oh, reminds me. You or sarang said there was a "secret paper" to be presented at the Monero konferenco that would add another possible MLSAG replacement ?  
**\<moneromooo>** Or was that DLSAG and I got confused?  
**\<suraeNoether>** ohhohoho so that was omniring  
**\<moneromooo>** OK.  
**\<suraeNoether>** that was secret until about 2 weeks before the konferenco  
**\<suraeNoether>** so we had two MLSAG replacement talks: lelantus and omniring. and we had 4 papers of interest: lelantus, omniring, ringct3.0, and Spartan  
**\<rehrar>** can we just implement them all?  
**\<rehrar>** or make a hodge podge of them like a soup and toss them in  
**\<suraeNoether>** we've already excluded spartan for lack of a ZK language being proven (although the others present such a language for each example and there will eventually be some compatibility)  
**\<suraeNoether>** i believe the batching for ringct3 and omniring ended up not panning out the way we had hoped, so our interest has zeroed in on lelantus (not a zerocoin joke when i started typing it, definitely a zerocoin joke by the time i was done typing it)  
**\<suraeNoether>** so rehrar: maybe? shrugemoji  
**\<suraeNoether>** it will be a stew of thermodynamics and money  
**\<suraeNoether>** Any questions before we move onto action items?  
**\<kennonero[m]>** \<suraeNoether "i believe the batching for ringc"> suraeNoether: For lelantus has there been any updates on the issue of having to send your received amount to yourself, so the original sender does not know when you spend?  
**\<suraeNoether>** nope kennonero[m] that's the unfortunate trade-off with lelantus that has not yet been solved  
**\<kennonero[m]>** Oh okay, thank you  
**\<suraeNoether>** okay, moving onto action items  
**\<suraeNoether>** My non-research things: konferenco post-mortem, research report, quarterly funding request. My research things: getting my github repo more orderly and pushing my Matching changes.  
**\<suraeNoether>** oh and reviewing 5707  
**\<suraeNoether>** Anyone else have any action items?  
**\<rehrar>** update on RandomX when we can find it  
**\<suraeNoether>** ^ i believe sarang will be on later today or tomorrow and he can bring us up to date on that. i may ask him to write a blog post describing the progress.  
**\<suraeNoether>** okay, let's call this meeting adjourned, and hope we can hear from isthmus and sarang later  
