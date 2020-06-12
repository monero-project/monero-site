---
layout: post
title: Logs for the MRL Meeting Held on 2020-04-01
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** GREETINGS  
**\<ArticMine\>** Hi  
**\<Isthmus\>** Heya  
**\<Isthmus\>** Sorry I fell asleep last week  
**\<sarang\>** I'm feeling a bit under the weather today, so I'll try to keep things short and sweet if possible  
**\<sarang\>** No problem Isthmus  
**\<sarang\>** Let's move on to ROUNDTABLE  
**\<sarang\>** My list is short but hopefully interesting  
**\<sarang\>** The CLSAG preprint has been revised and updated on the IACR archive  
**\<sarang\>** Link: https://eprint.iacr.org/2019/654  
**\<sarang\>** New security model and proofs  
**\<UkoeHB\_\>** Oh hi forgot about this :p  
**\<sarang\>** Alongside this, the code has been updated to make it easier to include trezor/ledger support  
**\<sarang\>** Plumbing for device support: https://github.com/SarangNoether/monero/commit/94a7daad0f53074a28dbfb39c0ed1d68d5c40e86  
**\<sarang\>** Support for ledger, courtesy of cslashm: https://github.com/SarangNoether/monero/pull/1  
**\<sarang\>** Smaller items are proofreading for UkoeHB\_'s Zero to Monero update, and finalizing a PR for hash function domain separation, along with the usual literature review  
**\<sarang\>** Does anyone have particular questions, or otherwise have research of interest to share?  
**\<sarang\>** I see that Isthmus has just added to the agenda issue  
**\<Isthmus\>** https://user-images.githubusercontent.com/21246742/78165574-c14f9500-7408-11ea-8ae5-7d695b4321d3.png  
**\<Isthmus\>** n3ptune and I have been exploring tx\_extra some more  
**\<sarang\>** neat  
**\<Isthmus\>** A few months ago @UkoeHB\_ suggested that the \*ordering\* of tags might leak some information  
**\<Isthmus\>** This intuition turned out to be correct  
**\<n3ptune\>** link to the issue: https://github.com/monero-project/research-lab/issues/61  
**\<Isthmus\>** If we look at tx\_extra in the wild since 1978433 (v12) we see 8 different ways that tags are assembled  
**\<sarang\>** Enforcing an ordering and certain fields makes sense for uniformity; I wonder what the added time complexity would be for parsing overall  
**\<sarang\>** This also ties in with an idea for Janus mitigation, which would enforce a per-transaction Janus transaction key and per-output tx pubkeys  
**\<Isthmus\>** +1  
**\<sarang\>** And, FWIW, there was a PR yesterday from moneromooo with an idea for an encrypted-memo-type addition to extra: https://github.com/monero-project/monero/pull/6410  
**\<sarang\>** (I have concerns about that one)  
**\<Isthmus\>** I would support encrypted memo if \*length\* and \*inclusion\* enforced in protocol. :- )  
**\<Isthmus\>** Zcash has a 512 byte encrypted memo on all z2z transactions, and people are having a lot of fun with it  
**\<Isthmus\>** (mostly whimsical fun at the moment, but I expect fun applications to follow)  
**\<sarang\>** Of course, this seems to overlap in functionality somewhat with encrypted pIDs  
**\<Isthmus\>** Oh yea, could just roll the PID into the memo  
**\<sarang\>** But yes, I agree that if included, length should be enforced for uniformity  
**\<Isthmus\>** Would it be per txn or per output?  
**\<UkoeHB\_\>** Im a bit skeptical about scope creep, since Monero is money, not random messages  
**\<ArticMine\>** and kept small  
**\<UkoeHB\_\>** or email  
**\<ArticMine\>** or a replacement for twitter  
**\<sarang\>** AIUI that PR requires a single non-change output  
**\<sarang\>** at least from my initial read of the code  
**\<sarang\>** Its use in Zcash is per-output, I believe  
**\<ArticMine\>** Can we actually do away with this messaging entirely?  
**\<sarang\>** ?  
**\<UkoeHB\_\>** Isthmus's research indicates that even though the extra field is technically open ended, in practice people arent implementing random things  
**\<UkoeHB\_\>** supporting random messages with core code would directly lead to more random things in the chain  
**\<Isthmus\>** Wait can we clarify "random"  
**\<Isthmus\>** Do we mean a fixed tag that supports arbitrary payload  
**\<UkoeHB\_\>** non-standard  
**\<UkoeHB\_\>** I guess 'memo field' implies to me 'any random message you feel like'  
**\<Isthmus\>** Ideally encrypted  
**\<sarang\>** To clarify, this PR uses chacha to encrypt with the DH shared secret, including padding as needed to hit certain size resolution  
**\<atoc\>** what are pros of including memo field?  
**\<sarang\>** but it's not possible to enforce that the data are actually encrypted  
**\<UkoeHB\_\>** does chacha index each chunk in some way (so no two chunks are likely to be the same)?  
**\<ArticMine\>** That is my question  
**\<sarang\>** I think the goal was to enable encrypted recipient data as desired, to reduce the likelihood of non-standard inclusion of data in extra  
**\<sarang\>** UkoeHB\_: the chunks are appended before passing to chacha  
**\<sarang\>** If I'm reading the PR correctly, the chunking is just to enforce size resolution  
**\<Isthmus\>** From a technical/statistical info leak standpoint, we should either have \*no\* messages, or an encrypted message on \*every\* transactions. Which option we choose is partially a UX/design conversation.  
**\<sarang\>** And at that point, you basically have a larger pID setup  
**\<Isthmus\>** Yea  
**\<sarang\>** Which was part of my concern  
**\<Isthmus\>** Is there no way to mathematically verify that a field is encrypted?  
**\<sarang\>** Not for the network AFAIK  
**\<sarang\>** Nor is it possible in Zcash either  
**\<sarang\>** It is possible to assure the \_recipient\_ that if they can decrypt properly, the data were encrypted as expected  
**\<Isthmus\>** Ohhh yea that's how that works  
**\<sarang\>** But otherwise, it's just uniformly distributed data  
**\<UkoeHB\_\>** I think that encryption or not isn't a concern, since implementers should want to harmonize with other implementations. The core impl would encrypt, so others would too  
**\<ArticMine\>** All of this begs the question do we need this memo filed and even extra  
**\<sarang\>** So the worst case in Zcash is that you throw a bunch of unencrypted junk into a tx that gets accepted by the network, but that the recipient won't properly decrypt  
\< I would be very happy to do away with both  
**\<UkoeHB\_\>** ArticMine: I think ultimately the extra field is useful when/if hard forks are no longer feasible.  
**\<sarang\>** At the very least, enforcing ordering as UkoeHB\_ listed in their issue would help a lot of this  
**\<sarang\>** certainly not all cases though  
**\<UkoeHB\_\>** Imagine if Janus attack wasn't discovered until after hard forks stopped happening. We'd be in Bitcoin's situation of absolute chaos  
**\<UkoeHB\_\>** (i.e. if no extra field for wiggle room)  
**\<ArticMine\>** How would extra help  
**\<Isthmus\>** Geez, if that happened I think the issue is ossification  
**\<UkoeHB\_\>** wallets can implement janus mitigation on their own, since it's technically unverifiable anyway  
**\<Isthmus\>** I'd like to proactively avoid a situation like that by keeping an agile codebase, not having an anything-goes tx\_extra field  
**\<Isthmus\>** Anyways, lots of different pros & cons to consider for each possibility  
**\<sarang\>** The question at this point, I think, is to decide whether doing order enforcement (e.g. TLV) is something that a develop wishes to take on  
**\<sarang\>** Which ties in to whether enforcement of a consistent Janus mitigation is desirable (I think yes, it is)  
**\<UkoeHB\_\>** After next gen tx protocol gets implemented, I imagine the stuff that can go in a hard fork will drop off quite a bit. Rather than losing the ability to make hard forks, we might just run out of hard forks to make. Once the expectation of making periodic hard forks fades away, subsequent hard forks will become much more difficult (also the case if adoption rises concurrently).  
**\<sarang\>** Network upgrades also have the probable advantage of encouraging client upgrades  
**\<Isthmus\>** Yeah "we might just run out of hard forks to make" is a different situation from encountering an issue (e.g. Janus) and not forking  
**\<sarang\>** which provide other non-consensus fixes and benefits  
**\<Isthmus\>** Regardless, let's separate the metadata question (should we enforce ordered TLV) from feature questions (should we have a memo field)  
**\<sarang\>** Well, TLV enforcement has a big effect on non-standard data, since it requires a stated type  
**\<UkoeHB\_\>** I did make pseudo code for enforced sorted TLV, about 200lines  
**\<sarang\>** yes  
**\<sarang\>** But I mean that the features and the layout enforcement are closely intertwined here  
**\<UkoeHB\_\>** Current code already mostly does sorted tlv by default  
**\<UkoeHB\_\>** So all that needs to change is in tx validation  
**\<Isthmus\>**   
**\<atoc\>** nice  
**\<sarang\>** OK, so I think what should be brought up in -dev is a well-considered position for 3 things related to extra  
**\<sarang\>** 1. Decision on TLV enforcement, and responsibility for implementation  
**\<atoc\>** koe, what's your github  
**\<sarang\>** 2. Decision on Janus mitigation, and implementation  
**\<sarang\>** 3. Musings on the new encrypted-memo idea  
**\<UkoeHB\_\>** atoc https://github.com/monero-project/research-lab/issues/61  
**\<sarang\>** My position is 1: yes, 2: yes, 3: not unless enforced uniformly (and then it runs up against ePIDs)  
**\<Isthmus\>** 1: agree, 2: agree, 3: agree  
**\<sarang\>** Anyway, good things to consider here  
**\<gingeropolous\>** is the janus mitigation the thing with the subaddresses?  
**\<sarang\>** Yes  
**\<UkoeHB\_\>** Janus https://github.com/monero-project/research-lab/issues/62  
**\<sarang\>** Enforcing a mitigation has the added advantage of making the number of tx pubkeys uniform  
**\<Isthmus\>** !!!  
**\<Isthmus\>** yesplz  
**\<gingeropolous\>** ima just throw it out there to play devils advocate, dunno if its been stated before. What about reverting to not having subaddresses?  
**\<sarang\>** So you have one Janus-specific tx pubkey per transaction, and a separate additional pubkey per output  
**\<fuwa\>** is it possible to replace tx extra completely with memo, so you don't need to sort anything  
**\<sarang\>** You'd need to remove all non-recipient-specific data from memo  
**\<sarang\>** Which IIRC moneromooo said would be a significant engineering effort  
**\<sarang\>** Extra isn't an inherent problem if uniformity is reasonably enforced  
**\<Isthmus\>** Oh, I was wondering something actually  
**\<Isthmus\>** Suppose we decide that each transaction should contain X, Y, and Z  
**\<UkoeHB\_\>** gingeropolous: then Janus would no longer be a problem. That's about it afaik  
**\<Isthmus\>** What's the performance difference between having 3 separate fields versus having 1 field with 3 enforced objects  
**\<sarang\>** That's a good question, and I'm not sure  
**\<gingeropolous\>** right. so i guess the underlying question is whether subaddresses are worth it.  
**\<sarang\>** The scanning benefit is huge for large sets of addresses  
**\<sarang\>** Hash lookups are much faster than doing multiple scans of all transactions per address  
**\<sarang\>** and Janus checks are only needed for transactions that are already identified as being destined for you  
**\<sarang\>** (and those checks are quite fast anyway)  
**\<sarang\>** Also note that MLSAG -\> CLSAG drops average tx size by 600 bytes already  
**\<sarang\>** s/average/typical  
**\<ArticMine\>** Like 2 in 2 out  
**\<sarang\>** Yes, a 2-2 tx drops already from ~2.5 kB to ~1.9 kB  
**\<sarang\>** So Janus mitigation adds something like about 64 bytes back in  
**\<sarang\>** (more for multi-output)  
**\<sarang\>** Meaning there's already plenty of wiggle room  
**\<gingeropolous\>** well here's hoping its the last mitigation for subaddresses.  
**\<atoc\>** that's a pretty good drop  
**\<ArticMine\>** We can increase the ring size  
**\<UkoeHB\_\>** meeting is getting toward the end, so Ill add my update here: ztm2 should be ready to publish this weekend, I'm finishing up my last proofreading atm  
**\<sarang\>** UkoeHB\_: great!  
**\<UkoeHB\_\>** might take a bit for getmonero to update though, so we will see when I post about it  
**\<atoc\>** koe - i sent you an email but to reiterate it's looking really good  
**\<UkoeHB\_\>** yeah saw that :)  
**\<sarang\>** Since the hour is indeed almost up, does anyone else wish to share any topics of interest?  
**\<Isthmus\>** https://www.reddit.com/r/Monero/comments/fnhm6u/maam\_monero\_ask\_anything\_monday\_march\_23\_2020/flbbt45?utm\_source=share&utm\_medium=web2x  
**\<Isthmus\>** ^ thoughts?  
**\<Isthmus\>** I'm looking for projects for Fellows to work on, wondering if that seems like a good candidate  
**\<sarang\>** That sounds like a question for -dev or -gui TBH!  
**\<Isthmus\>** I could also have one of the software engineers implement ordered TLV if -dev wants somebody else to tackle it  
**\<Isthmus\>** Oh yea, good point  
**\<Isthmus\>** Any wish list projects for MRL? I have 2 software engineers, 1 mathematician, and some data scientists that are open to working on Monero stuff  
**\<atoc\>** Isthmus this seems good. i am willing to help but probably can't commit too much atm  
**\<sarang\>** Isthmus: perhaps pop over to -dev after meeting and let the channel know that a Fellow might be able to tackle TLV  
**\<sarang\>** see what the responses are  
**\<sarang\>** I bet moneromooo will have better knowledge of the effects that parsing would have on performance overall  
**\<UkoeHB\_\>** well this never got much traction but Im still a fan https://github.com/monero-project/research-lab/issues/59 could be a lot of work idk  
**\<sarang\>** Isthmus: I know this important PR needed review... https://github.com/monero-project/supercop/pull/3  
**\<sarang\>** and if any Fellows have sufficient interest, the new CLSAG security model in the paper could use some eyes  
**\<sarang\>** Anyway, let's start to wrap up  
**\<ArticMine\>** I'll cover the fee, penalty and median proposal in the next meeting. By then I'll have most of this finalized  
**\<sarang\>** Any ACTION ITEMS to share?  
**\<sarang\>** Great ArticMine  
**\<atoc\>** @sarang i'll probably ping you tomorrow to go over some zkp ideas for atomic swap  
**\<sarang\>** I'll be doing some work on an older preprint, reviewing some ideas in a draft preprint that were sent to me by another researcher, and returning to some Triptych code  
**\<UkoeHB\_\>** there are two other big projects: fully-formed audit functionality, and extensive updates to multisig; mentioned those to TheCharlatan but they really are beasts I expect  
**\<atoc\>** i have some resources i'd like to share  
**\<sarang\>** for sure  
**\<Isthmus\>** We can close up the meeting, but I'm curious later if anybody has speculation around what's going on with https://xmrchain.net/search?value=f6cff1edd1a7861ed13d494dd4ae7c4a7f42b5c3bf91457310d2166722c1316f  
**\<Isthmus\>** It has an unknown tag type, and the length is recorded incorrectly  
**\<UkoeHB\_\>** are you sure it's a length and not a value byte?  
**\<Isthmus\>** Not sure, that's why I'm asking  
**\<sarang\>** All right, let's go ahead and adjourn for timing purposes, but discussions can of course continue  
**\<sarang\>** Thanks to everyone for attending!  
**\<sarang\>** Logs posted shortly on the GitHub agenda issue  
