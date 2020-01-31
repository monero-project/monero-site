---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-02-19
summary: Multisig (paper), chain split (e.g. MoneroV), anonymity set, auditing options, and miscellaneous
tags: [dev diaries, crypto, research]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<suraeNoether>** allrighty, howdy everyone  
**\<suraeNoether>** topic Research meeting now  
**\<suraeNoether>** awww  
**\<sarang>** hullo  
**\<rehrar>** yeah!  
**\<suraeNoether>** so  
**\<sarang>** indeed  
**\<suraeNoether>** before we get going, does anyone have any questions?  
**\<rehrar>** pertaining to?  
**\<suraeNoether>** anything, really. :P  
**\<rehrar>** Are pancakes better with or without chocolate chips?  
**\<sarang>** Well, I see the two big topics right now are output identification (a la MoneroV) and PoW change  
**\<sarang>** at least for immediacy  
**\<rehrar>** *shuts up to let smart people talk*  
**\<suraeNoether>** oh, i think blueberries are better  
**\<suraeNoether>** but that's none of my business  
**\<suraeNoether>** yeah, i imagine at least some people have questions about how to keep their outputs safe with MoneroV and our PoW change discussion  
**\<sarang>** I think a related question that's valid is "what do we plan to do about this?"  
**\<suraeNoether>** but we can maybe hold that until the end of the discussion: basically, "what i've done this week" has been multisig. i have the paper down to low 20s pages, and i have one security proof left to complete, and i need to clean up the appendix describing our code.  
**\<suraeNoether>** sarang before we move onto the more obvious stuff, want to give us a brief review of your week?  
**\<sarang>** Sure, some course planning for the summer, reviewing SoWs and discussing with Benedikt, some paper reading  
**\<rehrar>** Sorry, couple questions on multisig paper. 1. ETA? 2. Submit for peer review?  
**\<sarang>** A lighter week than last  
**\<sarang>** Oh, and writing up a talk on privacy coins for next month  
**\<sarang>** (due this week)  
**\<suraeNoether>** 1) ETA ... i am hoping to finish it today. so quadruple that and maybe i'll be 10% correct. :P  
**\<suraeNoether>** we are definitely submitting it for peer review  
**\<rehrar>** Nice! It will be 'White' no more  
**\<suraeNoether>** i'm so close to finishign this thing, i'm hoping for mid-week to release the whitepaper version of it to the community and upload it (perhaps) to arxiv or something, after i get a brief review by sarang  
**\<sarang>** Yeah, BPASE work threw a temporary wrench at it  
**\<suraeNoether>** does anyone want to describe their work this week? I know chachasmooth has been learning about elliptic curves  
**\<sarang>** but that's the nature of research  
**\<sarang>** Well I am finalizing my privacy talk, which focuses on some definitions of privacy and compares privacy techologies used in coins today  
**\<sarang>** It focuses heavily on Monero but tries to do a fair assessment of the playing field  
**\<suraeNoether>** nice, i want to actually talk about a simplification of the EABE attack that is concerning to me  
**\<sarang>** I was also asked to lead a one-day short course on data analysis at the SciPy conference this year, so I'm using blockchain data as the project  
**\<sarang>** Some good PR and hopefully some interesting analysis we hadn't thought of before  
**\<sarang>** Anyway, go ahead suraeNoether  
**\<suraeNoether>** I'm thinking perhaps we need to put out a statement, because there is at least one very common scenario in which people think Monero is protecting them with signer ambiguity, but it really isn't  
**\<suraeNoether>** and it's the EAE attack, actually, where someone buying something from you is colluding with a KYC exchange  
**\<suraeNoether>** in this case, it should be obvious: Alice is surrounded by the KYC exchange, who knows her personal identity, address, etc, and also knows the one-time destination keys being used by Alice for these purchases they are making from you  
**\<suraeNoether>** once the KYC exchange has collected a sample size of deposits from Alice, that KYC exchange can look into the history of these deposits and identify one-time keys that were flagged from earlier.  
**\<sarang>** right  
**\<suraeNoether>** unless alice makes an extremely expensive churn, the appearance of these flagged outputs will occur in the history of these deposits more often than chance would dictate if the ring signatures were being randomly created by other users  
**\<suraeNoether>** there isn't a quick and easy solution to this, and users who are very concerned about their privacy should not send their monero to KYC exchanges  
**\<sarang>** I think it brings us back to the nature of ring signatures in general  
**\<sarang>** They're to offer plausible deniability  
**\<sarang>** but statistics will always be a problem unless ring sizes are very large  
**\<suraeNoether>** yes. it's objectively better than using something like bitcoin due to plausible deniability, but it's still concerning  
**\<rehrar>** does this potentially point to, somewhere down the line in the future, moving to a more bullet proof (pardon the pun) scheme?  
**\<sarang>** I think it has to  
**\<suraeNoether>** yeah  
**\<sarang>** Full anonymity set is the only guaranteed way to thwart statistical analysis  
**\<sarang>** This, the MoneroV thing, they all tie in to ring intersections and statistics  
**\<rehrar>** does STARKS also have full anonymity set?  
**\<suraeNoether>** one of the things fluffypony asked me to look into when i first began this was looking into things like zk-snark sidechains, so we have been considering this for awhile  
**\<suraeNoether>** they allegedly do, yes  
**\<andytoshi>** rehrar: STARKs is just a tech  
**\<sarang>** yes  
**\<suraeNoether>** ?  
**\<andytoshi>** it's for zero knowledge proofs  
**\<sarang>** The goal is just to prove the output is valid  
**\<andytoshi>** "full anonymity set" applies to some specific system  
**\<sarang>** right  
**\<rehrar>** ah, apologies  
**\<suraeNoether>** yeah, the implicit quesiton is "would we be using starks to implement a full anon set"  
**\<andytoshi>** the answer to that is no, it's not feasible. bulletproofs would be faster for that  
**\<andytoshi>** and smaller  
**\<andytoshi>** and BPs aren't quite there i think  
**\<sarang>** I mean, this problem isn't limited to us  
**\<suraeNoether>** starks is new, but so are BPs. i think BPs will allow us to get some impressively large anonymity sets  
**\<sarang>** There is not a good, efficient way to handle it... zcash has the same problem with different sacrifices  
**\<andytoshi>** yeah..pretty sure BPs have a faster prover than SNARKs  
**\<suraeNoether>** sarang \^ this is also correct, most users who use zcash make transactions they wish to be kept private as a z-transaction, but they end up depositing to KYC exchanges as t-transactions  
**\<rehrar>** so the answer is almost a social one, wherein people don't need to trade to KYC exchange, because they can purchase whatever they want in Monero  
**\<rehrar>** \*one of the answers  
**\<suraeNoether>** so, this is an *open problem* in some senses, but my point is this: the current wisdom about best practices is to churn a lot and you're good. but that's not the case without impractically large churns, and the best practice is merely to avoid KYC exchanges  
**\<andytoshi>** KYC has nothing to do with whether you publish your transaction data on a blockchain, think exchanges are just too lazy to implement z-transaction support  
**\<sarang>** Part of the social problem is an identification of what exactly you're trying to accomplish with hiding transactions  
**\<sarang>** At what point does "plausible deniability" fall apart in the face of ring statistics?  
**\<suraeNoether>** in general, if a business is a KYC business (say a local coffee shop who happens to know you), you still have a similar problem while using Monero. really the best advice is: if you like your privacy in Monero, don't send Monero to people who know your name  
**\<sarang>** that's not clear  
**\<suraeNoether>** sarang with a sufficiently large sample size, after the "attacker" has made a sufficiently large number of controlled purchass  
**\<rehrar>** I guess it may be more of a economics question, but is plausible deniability enough for fungibility than absolute anonymity? Because to answer sarang's question: for the common folk, fungibility would be what they're after  
**\<suraeNoether>** purchass = purchases, but purchass sounds like a really great stripper name  
**\<sarang>** rehrar: sure, but an exchange or police or whatever can decide when their analysis reveals a "probably bad" output  
**\<rehrar>** even if they don't know the word fungiblity :P No merchant or individual wants to go through the headache of checking each received coin for 'taintedness'  
**\<sarang>** it's the same issue with burden of proof in the court system, IMHO  
**\<suraeNoether>** rehrar: I believe plausible deniability with a large enough scope is fine.  
**\<sarang>** Right, but there is not a definition of "large enough"  
**\<sarang>** depends on the context  
**\<sarang>** nor is there a good definition of "plausible deniability"  
**\<gsee>** When Fluffy spoke at Coinbase, he suggested that maybe they would be more comfortable listing monero and meeting their KYC/AML requirements if they required users to provide their view keys.  Would that damage privacy of others?  
**\<suraeNoether>** gsee not at all, and in fact that's what the view key is sort of for  
**\<gsee>** what if they also required users to provide key images so to prove a wallet balance?  
**\<suraeNoether>** that would have pretty nasty consequences: coinbase would have a list of proven-spent transactions, reducing the effective ring sizes of all outputs  
**\<rehrar>** What would it take to get some good research done on 'large enough' and 'plausible deniability' definitions, or at least try to get ballpark stuff?  
**\<rehrar>** I think that's some pretty important stuff to be able to define within reason  
**\<suraeNoether>** well, my working definition of "large enough" works like this  
**\<gsee>** thanks suraeNoether, that's what I was thinking.  Just wanted to doublecheck.  
**\<suraeNoether>** let's say you churn N times with ring size R  
**\<gsee>** On a similar note, I have to prove our balances to auditors once a year.  Showing them view keys and key images might be a bad idea then.  
**\<suraeNoether>** this means you have R\^(N-1) independent ring signatures, each with R members. and the question is: if Eve knows Alice has A different outputs on the whole blockchain, whcih has B outputs, and if all outputs are selected for ring signatures at uniform randomly, *how likely is it that we see one of Alice's suspicious one-time keys appear in one of these R\^(N-1) ring signatures?*  
**\<suraeNoether>** how hard is it to *look like a random sequence of transactions?*  
**\<suraeNoether>** anyway rehrar, i've been looking into it for awhile  
**\<suraeNoether>** but for now i think we need to put out a statement that monero user keys interested in privacy should not be shared with a KYC exchange in any way  
**\<rehrar>** logistics question for me, the website guy: Do we want to put this and any future bulletins under the MRL page on the website?  
**\<rehrar>** Or just the repo is good enough with a link to it?  
**\<scoobybejesus>** When is it time for MoneroV talk?  I have a question.  Sort of a two-parter.  
**\<sarang>** Well, MoneroV is related  
**\<suraeNoether>** essentially, if we want like... concrete cryptographic security, we would need to churn... a lot  
**\<scoobybejesus>** Question: MoneroV key images. Let's say the MoneroV team chooses to acquiesce and change their key image by hashing another parameter (or something)...  
**\<scoobybejesus>** If their key images are a Monero-key-image-hashed-with-something-else, does that mean there is no way (discrete log-wise) to "tie" pre-fork Monero key images to their respective key images in MoneroV?  
**\<scoobybejesus>** Or - maybe a better way to ask - is there even a way to take an existing Monero key image, do something to it, have it be useful on the MoneroV chain as double-spend prevention, while still not being "tied" to the Monero key image from whence it came?  
**\<suraeNoether>** rehrar I'm unsure on that  
**\<suraeNoether>** scoobybejesus: we thought at first monerov could compute key images differently, but the algebra doesn't appear to work out without allowing double spends  
**\<suraeNoether>** without some sort of wizardry anyway  
**\<sarang>** Well with a hash scheme there would be no way to link them, no  
**\<sarang>** But \^ to what suraeNoether sez  
**\<suraeNoether>** the only way i know of to safely claim your monerov is to try to fashion the same ring on both chains  
**\<suraeNoether>** hmm, what about doubly hashing the point P?  
**\<suraeNoether>** nope, still have the double spend problem  
**\<sarang>** yup  
**\<sgp>** \^ assuming no chain reactions  
**\<andytoshi>** you can hash every known key image with a per-chain salt, then require users reveal only the hashed key image for future spends (and BP that they hashed the key image correctly)  
**\<andytoshi>** but that's waay more work than we can expect scammers to do  
**\<suraeNoether>** oh yeah, i suppose you are also assuming your fellow ring members are also computing identical rings on both chains  
**\<sarang>** oh andytoshi so you mean go back and retroactively update the used image list?  
**\<sarang>** interesting  
**\<suraeNoether>** andytoshi i almost feel like we should make it an easy to use utility so we can point to unsafe projects and say "how come they aren't using our safe-to-use BP utility to ensure they don't shit in the punchbowl"?  
**\<sarang>** suraeNoether: I don't think you can shame them like that  
**\<gsee>** should users consolidate outputs before the fork? just in case they're going to try to create the same ring on both chain, it would be easier to do with fewer outputs, right?  
**\<suraeNoether>** feels like an easy public relations way to deal with malicious shit in the future like this  
**\<suraeNoether>** gsee: sure, but you are (see above) relying on any ring members to do the same as you  
**\<sgp>** Perhaps, it is a social attack after all  
**\<suraeNoether>** if half of your ring members don't know what to do and spend their shit on both forks in a sloppy way, then your effective ring size shrinks in a chain reaction  
**\<suraeNoether>** because their output is now provably spent and can be removed from any rings referencing it  
**\<sgp>** And with ringsize 5, you would have to expect \~2/3 of transactions on MoneroV to use that tool  
**\<suraeNoether>** sounds about correct. seems like a real easy way to part fools from their money. fluffypony don't we have a public relations firm now?  
**\<suraeNoether>** monerov is a pretty brilliant social attack. probably not state actors because the result is a public de-anonymization instead of secretly gathering intel, but pretty brilliant  
**\<suraeNoether>** i could be convinced its the cryptonote guys  
**\<suraeNoether>** anyway, it is unsafe to use your key images on another chain, period  
**\<suraeNoether>** if you broadcast your key images in general, you are also opening yourself up to transaction censorship  
**\<gsee>** MoneroV might not be state sponsored, but the next one might be.  Or a state may decide to bid up the price of moneroV in order to entice people to spend their moneroV  
**\<suraeNoether>** yeah, maybe  
**\<suraeNoether>** it's just, in general, key images are sort of like commitments to a transaction. Opening the commitment, sharing the key image, is part of broadcasting a transaction. it shouldn't be seen as a standalone piece that can be treated separately like a view key  
**\<suraeNoether>** okay, so today we've spoken about my and sarang's work from this past week briefly, and we discussed the EAE attack (rehrar, pm me, don't make any changes until we've chatted with fluffypony and luigi1111  and moneromooo and others), and the MoneroV airdrop  
**\<rehrar>** no changes will be made  
**\<sgp>** I suppose now's a good time for me to ask if you think it's prudent to increase the ringsize to mitigate the damage of a chain split attack. If the costs are minimal compared to the benefits  
**\<sarang>** any other updates or questions about other non-pants-on-fire things?  
**\<suraeNoether>** I believe we can summarize the EAE attack as: don't use private money with non-private businesses (KYC exchanges in particular). in the meantime, I'm going to think about a threat model. and we can summarize the MoneroV airdrop as: don't use your Monero key images on the MoneroV blockchain. period.  
**\<andytoshi>** sgp: to increase the ringsize dramatically will require new tech (RTRS or BPs)  
**\<andytoshi>** just doubling it or something won't really help i think  
**\<suraeNoether>** to increase the ringsize moderately will not be a sufficient protection against the EAE problem  
**\<suraeNoether>** \^  
**\<gsee>** i have a question. Not sure if this is the best place/time to ask, so we can take it offline if necessary.  Is there any way to prove what my wallet's balance was on Dec 31st to an auditor if I have made transactions since then?  
**\<suraeNoether>** i believe we don't see a lot of benefit until we get ring sizes in the 20s, last time I ran computations, but don't quote me  
**\<sgp>** Won't help EAE, but would help chain split issue  
**\<andytoshi>** gsee: yes but you'll need provisions or something  
**\<andytoshi>** oh, no, just a view key + the public blockchain will be enough  
**\<suraeNoether>** it would probably be sufficient to reveal to an auditor the private transaction key for each transaction, but that reveals a lot more information to the auditor than if you reveal the key images that you've spent  
**\<moneromooo>** You see all incoming monero along with block heights, and you can scan the chain for the height a key image was spent, if any. So yes. The DB has no index for key image -> height-or-tx though, so slow.  
**\<iDunk>** If he spent from tha wallet, then change would appear as new income.  
**\<suraeNoether>** i imagine in most *legal* situations gsee, you could merely present a screenshot of your wallet balance  
**\<suraeNoether>** tbh  
**\<gsee>** that's what we're leaning towards right now. Actually having someone stand over my shoulder while I show the balance  
**\<suraeNoether>** but if you reveal your key images, again, you are proving some outputs as spent to an auditor, which reduces the effective ring size of any other signatures depending on your keys  
**\<suraeNoether>** gsee if that's an option, do it that way  
**\<suraeNoether>** requires no cryptographic trickery  
**\<suraeNoether>** meatspace is like... the best at keeping secrets  
**\<suraeNoether>** in practice,  most cryptographic protocols can be broken with a hammer or a 4 dollar wrench in a rather nasty sidechannel attack. :P  
**\<sarang>** So, what's everyone's priorities for the next week?  
**\<gsee>** ok. would be great if we could create better tools for the future that would let them verify independently.  Maybe that's not possible without leaking too much info; especially if one auditor becomes widely used.  
**\<sarang>** Since it's 18:00 now  
**\<suraeNoether>** mmmultisig brother. talking with a few venues for the monero conference this week.  
**\<suraeNoether>** oh i have an idea  
**\<sarang>** Does anyone see any immediate action items regarding MoneroV etc?  
**\<suraeNoether>** i feel like we need to put out a formal announcement on reddit or something  
**\<sarang>** So we have no formal suggestion on ringsize re: monerov?  
**\<suraeNoether>** ring size isn't going to help the monerov airdrop problem  
**\<sarang>** Yes just confirming  
**\<sarang>** So our messaging is consistent  
**\<suraeNoether>** i know we just put out a joint statement on PoW and key re-use  
**\<suraeNoether>** but i feel like MRL could write a reddit post like "Here's how to claim your Monerov safely: DON'T."  
**\<sarang>** But I'll get 10x the money!!111!!!  
**\<sarang>** While we're at it, I'll give you two shiny new nickels for that quarter you've got there  
**\<suraeNoether>** gsee: to prove to an auditor you have spent some transactions you can (in terms of easy and insecure to hard and secure): 1) hand them your view and spend private keys. after the audit is over, send yourself money to a new pair of keys so you don't have to worry about the old ones being used to spend. rely on meatspace legal structure to protect you from theft by the auditor.  this degrades not only  
**\<suraeNoether>** your security but the security of all ring signatures dependent on your outputs. 2) hand them the key images of your spent outputs. you don't need to worry about the auditor spending your money, but this still degrades both your security and other folks' security. 3) ??  
**\<scoobybejesus>** If there were a tool to produce identical rings... I haven't decided whether I'd take advantage.  Without that tool, I'm definitely not interested.  
**\<suraeNoether>** scoobybejesus: even then, if your other ring members go cash in and *don't* use that tool, your ring size just shrunk brother  
**\<scoobybejesus>** true that  ;)  
**\<suraeNoether>** okay, until next week  