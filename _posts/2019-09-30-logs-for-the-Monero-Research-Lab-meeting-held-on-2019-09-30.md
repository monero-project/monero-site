---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-09-30
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** Let's start! Agenda here: https://github.com/monero-project/meta/issues/395 (logs posted there after the meeting)  
**\<sarang>** GREETINGS  
**\<mikerah>** Hello  
**\<silur>** hi  
**\<gingeropolous>** hewro  
**\<sarang>** Is suraeNoether here?  
**\<suraeNoether>** howdy  
**\<suraeNoether>** hi, sorry, i'm going to be in and out this morning  
**\<kinghat>** o/  
**\<sarang>** ok  
**\<suraeNoether>** i can do a real quick rundown, but i have to go :(  
**\<charuto>** o/  
**\<sarang>** In that case, let's jump into the ROUNDTABLE with suraeNoether  
**\<suraeNoether>** okay, so  
**\<suraeNoether>** matching  
**\<suraeNoether>** i've been working on the code, and there were some structural problems, and then a failure-to-push-my-damn-commits failure of my local harddrive  
**\<suraeNoether>** it's proceeding... slowly  
**\<suraeNoether>** i've been sick a lot :(  
**\<suraeNoether>** other than that, i don't have anything to chat about right now  
**\<sarang>** What would you say the current state of matching simulations is?  
**\<suraeNoether>** i'm hoping to push some code later today on my simulations  
**\<suraeNoether>** non-functional  
**\<sarang>** And is there any part of it that could/should be worked on by others as well?  
**\<sarang>** Or of the corresponding theory?  
**\<suraeNoether>** the paper has been available and the codebase is available. the matching code itself is working, but my method of comparing it to some simulated ledger is what is taking awhile.  
**\<sgp\_>** I'm here from where Sarang should be :)  
**\<sarang>** >\_>  
**\<suraeNoether>** anyone can choose to simulate a ledger \*some other way\* and run my code  
**\<sarang>** Ah ok, got it  
**\<suraeNoether>** we even have speed numbers for our matching code from you  
**\<suraeNoether>** literally, it's a sanity check and comparing against known churn behaviors  
**\<sarang>** Righto, any questions for suraeNoether before he must go?  
**\<suraeNoether>** okay guys i have to go. expect a push later today. i'm also going back on solid food later today so who knows, maybe i'll have some burst of inspiration  
**\<sarang>** Feel better plz  
**\<sarang>** I've been working on several things this past week  
**\<charuto>** may good health and good fortune go your way mr surae  
**\<sarang>** First, the CLSAG paper is now submitted to Financial Cryptography 2020  
**\<sarang>** The preprints on the MRL archive and on IACR are updated  
**\<sarang>** Or rather, IACR has been updated and an MR exists for the MRL archive  
**\<sarang>** The DLSAG paper was also updated and submitted to the same conference  
**\<xmrmatterbridge> \<sgp\_>** https://eprint.iacr.org/2019/654  
**\<sarang>** Second, I'm still working with the author of Lelantus on some modifications to avoid its linking problem  
**\<sarang>** We'll have a short writeup soon about one possible way, but it doesn't work cleanly with one-time addresses in the way you might want it to  
**\<sarang>** There are some techniques involving Schnorr proofs that we still want to investigate  
**\<sarang>** Third, I am finalizing proof-of-concept code and spacetime analysis for the updated RCT3 preprint, which has interesting tradeoffs from the earlier version  
**\<xmrmatterbridge> \<rehrar>** exciting!  
**\<silur>** is the PoC code available somewhere?  
**\<sarang>** Besides fixing a big flaw, it aggregates proofs together... this means very small proofs at the expense of some verification  
**\<sarang>** Code (danger: not for production) is here: https://github.com/SarangNoether/skunkworks/tree/rct3/rct3  
**\<silur>** thanks  
**\<sarang>** I'll also run numbers on doing non-aggregated proofs, since that would effectively reverse the spacetime tradeoff  
**\<hyc>** ^ bets on which xmr fork deploys it first ...  
**\<sgp\_>** What is "some verification"?  
**\<sarang>** My initial estimates suggest a drop in size from 3.1 kB to perhaps 2.3 kB (2-in-2-out)  
**\<sarang>** Verification numbers TBD, but not too bad... considering the original 2-2 single verification estimate was 39 ms on a test machine, batched down to 13 ms  
**\<sarang>** Back-of-the-envelope is that batched 2-2 txns will see maybe 5% increase from the old version's time  
**\<sarang>** but again, you save 25% on space from the old version  
**\<sarang>** Pulling apart the aggregation will improve batching time by reusing generators  
**\<sarang>** but then space is back up again  
**\<sarang>** There are also some structural differences to the proofs that will mean somewhat higher times regardless  
**\<sarang>** More details once I have the actual numbers finished  
**\<sarang>** Fourth, my monthly report is posted here: https://repo.getmonero.org/monero-project/ccs-proposals/merge\_requests/77#note\_7393  
**\<sarang>** Fifth, I'll be joining rehrar and Daniel Kim to speak at World Crypto Conference later this month  
**\<sarang>** My talk is about the history of cryptographic constructions toward privacy-preserving transactions, and future research directions  
**\<sarang>** I'm starting it early to meet their particular deadlines  
**\<xmrmatterbridge> \<rehrar>** woot!  
**\<xmrmatterbridge> \<rehrar>** WCC represent  
**\<sarang>** I'm trying to think of some good analogies for why terms like "privacy coin" set the wrong baseline  
**\<sarang>** For example, you wouldn't visit someone's house and say "oh, you have one of those bathrooms with a door"  
**\<mikerah>** Try to frame it in terms of cash  
**\<sarang>** It should be the default!  
**\<xmrmatterbridge> \<sgp\_>** "This is a safe car"?  
**\<mikerah>** Cash is anonymous, debit/credit cards are tracked by your bank  
**\<xmrmatterbridge> \<rehrar>** the bathroom door is spot on  
**\<sarang>** Anyway, the talk is mainly about cryptography, but I like setting the stage briefly to give motivation for the cryptography  
**\<sarang>** And I'm a terrible designer, so I always take longer than expected to make presentations look not-too-horrible :/  
**\<xmrmatterbridge> \<rehrar>** sarang, bro just send to me?  
**\<sarang>** in all its TeX goodness :)  
**\<xmrmatterbridge> \<sgp\_>** your plain presentations are ok imo  
**\<xmrmatterbridge> \<rehrar>** test, is MM working in this room?  
**\<sarang>** hi rehrar  
**\<xmrmatterbridge> \<rehrar>** bloof  
**\<sarang>** So yeah, that's what I've been working on  
**\<sarang>** Any particular questions on those items?  
**\<xmrmatterbridge> \<serhack>** In my opinion, this should depend on audience sarang  
**\<xmrmatterbridge> \<rehrar>** nah  
**\<sarang>** serhack: how so?  
**\<sarang>** It's an audience of developers  
**\<xmrmatterbridge> \<rehrar>** though I have a Research Request (tm) for MRL as a whole  
**\<silur>** I'm so missing an audience of developers :D  
**\<sarang>** rehrar: go on  
**\<xmrmatterbridge> \<sgp\_>** I have a point to mention after  
**\<sarang>** ok  
**\<xmrmatterbridge> \<rehrar>** It's be asked before with varying degrees of intensity, but I'd like some research done on the 10 confirmation unlock time.  
**\<xmrmatterbridge> \<rehrar>** 10 confs was kinda chosen arbitrarily? Or did it have reasoning? Research on if this is the ideal number.  
**\<dEBRUYNE>** sarang: Have there been any noteworthy developments regarding the CLSAG audits?  
**\<sarang>** I see that as really being a question of network topology and propagation, as it relates to reorgs  
**\<xmrmatterbridge> \<rehrar>** Obviously the hope is to get the conf time down for spendable funds, but if research shows 10 is good (or even increase), well at least we have numbers to back it up  
**\<sarang>** I don't have particular data on this... best candidates for that are the noncesense folks  
**\<sarang>** dEBRUYNE: OSTIF is working to get the first code audit number (24750 USD) down  
**\<sarang>** the math audit number is currently 7200 USD  
**\<dEBRUYNE>** OK  
**\<dEBRUYNE>** Do we have only one offer for a code audit btw?  
**\<xmrmatterbridge> \<serhack>** sarang: probably you know this suggestion but I will never tire of repeating it. You have to capture attention of people, in any possible way. So, if you think the presentation graphic could be changed to improve the readability, go for it. If you think you have to remove text and to add more images, go for it.  
**\<nioc>** rehrar if you reduce the time to 5 minutes won't you just get questions like,  why I need to wait 5 minutes?  
**\<sarang>** AFAIK there is only the single code audit offer right now, but OSTIF is working on this  
**\<sarang>** Both to allow the possibility of multiple reviews (if desired) and to promote competition that could reduce the cost of each review  
**\<xmrmatterbridge> \<sgp\_>** This isn't high priority, but I'd like to see an analysis of the number of coinbase outputs in rings on average over time  
**\<sarang>** Ah, over the different selection algorithms?  
**\<sarang>** I agree that it would be interesting. I ran some numbers on super small datasets and it was a spread that maxed at 1-in-11 IIRC  
**\<sarang>** There is always the question of whether a consensus rule of "any ring w/ coinbase must be all coinbase" would be a net benefit  
**\<sarang>** I still hold that it shifts the resulting heuristic down the transaction graph one hop, but overall it's probably not a bad idea  
**\<xmrmatterbridge> \<sgp\_>** You know my view is that it's a net positive, but most people don't agree yet  
**\<silur>** I don't get the assumptions itself, aren't coinbases in rings can be used as inputs to any other tx?  
**\<silur>** won't making "any ring with coinbase must be all coinbase" that property nonexistent?  
**\<sarang>** One claim is that coinbase can be excluded as the true spend for "average transactiosn"  
**\<sarang>** as well as questions of pool behavior  
**\<sarang>** Prior to the last selection change, coinbase were being overselected as part of a broader weighting issue  
**\<sarang>** Now they're selected according to their on-chain frequency, but are otherwise not selected differently  
**\<sarang>** Of course, making all-coinbase rings means that you could now identify the outputs of those transactions as heuristically not true spenders where they are used  
**\<silur>** on firsth thought that doesn't seem too much of a practical privacy leak  
**\<sarang>** It was not good when they were being overselected, but in fact the over/underselection was technically occurring for all selection regions where block density was varied  
**\<sarang>** It was just that coinbase were far more visible as an effect of this  
**\<silur>** I see  
**\<sarang>** So right now you'll usually see 0-1 coinbase or so per ring, but there are certainly outliers with more  
**\<sarang>** Anyway, certainly something to keep thinking about. As with most things, it's probably a bit more subtle than it seems at first glance  
**\<sarang>** Back to the agenda... did anyone else have research to share?  
**\<sarang>** Or other questions?  
**\<sarang>** Right, then on to ACTION ITEMS  
**\<mikerah>** I have some questions related to what was discussed last week  
**\<sarang>** sure mikerah  
**\<sarang>** go ahead  
**\<mikerah>** Have you considered using Polynomial commitments  
**\<sarang>** For what?  
**\<mikerah>** In order to get a SNARK without trusted setup for ring signatures  
**\<sarang>** How so?  
**\<mikerah>** Current schemes that are coming out are using polynomial commitments in such a way that you can eliminate the need for a trusted setup  
**\<mikerah>** Halo and DARKs come to mine.  
**\<silur>** afaik those are more generic schemes than what's needed in practice here  
**\<sarang>** Well, Halo's big goal is recursive evaluation  
**\<mikerah>** These schemes aren't quantum secure and you get larger proof verification sizes as usual  
**\<sarang>** and it's not even close in terms of desired efficiency yet; early stages  
**\<kenshamir[m]>** \<mikerah "Halo and DARKs come to mine."> DARKs can be used, but the polynomial commitment scheme in Halo cannot from what I’ve read and tried  
**\<mikerah>** isn't halo's big goal recursive composition + no trusted setup  
**\<sarang>** yes  
**\<silur>** mikerah: quantum secure schemes have even larger proofs  
**\<silur>** usually 2kb+  
**\<silur>** at best  
**\<mikerah>** kenshamir: If I understand correctly, the polynomial commitment scheme in Halo is derived from Sonic.  
**\<mikerah>** silur: There's a lot of research going into quantum secure zk-SNARKs. Although proofs are prohibitely expensive, even more so than current schemes, I expected it to get better in the next 5-10 years  
**\<kenshamir[m]>** The paper on the commitment scheme for DARKs is not out yet, it uses class groups, so group sizes will be roughly the same as RSA, but verifier asymptotics will be sublinear  
**\<silur>** mikerah: I'm mainly into quantum-safe crypto so I also follow these researches. I'm more optimistic on the matter and expect that breaktrough much sooner :P  
**\<sarang>** In the interest of time, let's go ahead and wrap up this meeting; discussions can of course continue after  
**\<kenshamir[m]>** \<mikerah "kenshamir: If I understand corre"> I read it as a modification of inner product argument that is similar to bulletproofs, I’d need to read sonic though haha, only have ever skimmed it  
**\<kenshamir[m]>** The polynomial commitment scheme used in sonic is KZG10 IIRC  
**\<mikerah>** kenshamir: I also read it as that but if you skim through Halo, they present Sonic and then give the modifications to the sonic scheme in order to achieve amortized succintness  
**\<sarang>** I'll be working on WCC prep, RCT3 proof review and analysis numbers, and an idea RandomRun had for modifying the Triptych proof to support multiple inputs natively  
**\<sarang>** For log posting purposes, let's adjourn here and let conversations continue :D  
