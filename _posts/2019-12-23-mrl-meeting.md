---
layout: post
title: Logs for the MRL Meeting Held on 2019-12-23
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<suraeNoether\>** we'll start with GREETINGS. hiya!  
**\<suraeNoether\>** mele kalikimaka, etc  
**\<suraeNoether\>** let's move along to the ROUNTABLE  
**\<suraeNoether\>** i know isthmus has been up to some interesting stuff with block sizes and fees, but he doesn't appear to be here. sarang, as usual, has been busy. you want to start, sarang?  
**\<sarang\>** Sure  
**\<sarang\>** I redid the CLSAG linkability and non-frameability definitions, theorems, and proofs  
**\<sarang\>** and then did a major reorganization of the preprint for clarity and style/format  
**\<sarang\>** It's ready for suraeNoether's review, and then posting  
**\<sarang\>** Additionally, the Triptych preprint draft is ready for suraeNoether to review as well  
**\<sarang\>** and then it can be posted  
**\<sarang\>** good times  
**\<suraeNoether\>** word, word  
**\<suraeNoether\>** does anyone have any questions for sarang?  
**\<sarang\>** Apparently not!  
**\<mikerah[m]\>** I have a question for the MRL team regarding L2 scaling for Monero: Are there any scalability solutions currently deployed on Monero? If not, why not?  
**\<sarang\>** I assume you mean off-chain?  
**\<mikerah[m]\>** I do mean off-chain  
**\<suraeNoether\>** not currently deployed. DLSAG and thring signatures are two fundamental pieces of off-chain scaling  
**\<suraeNoether\>** DLSAG is currently... uhm... accepted for publication? did iirc?  
**\<sarang\>** Accepted to FC2020  
**\<suraeNoether\>** that's a spicy meatball, yes  
**\<sarang\>** Awaiting some likely rewrites for definitions  
**\<sarang\>** Downside is that indistinguishable refund-compatible transactions don't play nicely with key image requirements  
**\<suraeNoether\>** mikerah[m]: requires some more research into how to ensure consistency in key image use  
**\<suraeNoether\>** ^  
**\<mikerah[m]\>** So, the current state of the art for monero is DLSAG, thring signatures and the Tari sidechain?  
**\<suraeNoether\>** tari sidechain is independent  
**\<sarang\>** Tari is a separate project  
**\<suraeNoether\>** but built on top of monero, from my understanding  
**\<sarang\>** No  
**\<suraeNoether\>** er... sidechain  
**\<suraeNoether\>** not \*on top of\*  
**\<sarang\>** IIRC they're doing a MW-based implementation  
**\<suraeNoether\>** oh  
**\<suraeNoether\>** news to me \*shrug\*  
**\<sarang\>** Hoping to do merge mining  
**\<sarang\>** But I have not been following their recent work  
**\<suraeNoether\>** ah  
\<suraeNoether "news to me \*shrug\*"\> Me too. I guess the association to fluffypony made me assume that it was Monero related  
**\<suraeNoether\>** well, for my part of the roundtable, my work this week was to start copy-editing triptych and clsag, and to work on my matching simulations. I just made a push this morning... https://github.com/b-g-goodell/mrl-skunkworks/tree/matching-buttercup/Matching  
**\<suraeNoether\>** anyone can run tracing.py and it will create a data folder, stash human-readable simulated monero transcripts inside...  
**\<sarang\>** mikerah[m]: to be clear, DLSAG is not deployed anywhere  
\<sarang "mikerah: to be clear, DLSAG is n"\> Thanks for the clarification.  
**\<suraeNoether\>** these transcripts say things like "Alice sends key NODE\_ID with ring members RING\_MEMBERS, authorizing the creation of outputs NEW\_NODE\_ID owned by Bob." It's a "ground truth" ledger.  
**\<suraeNoether\>** these transcripts also contain the accusations that Eve makes. "Eve thinks ring signature NODE\_ID belongs to Bob. In actuality, it belongs to Alice." sort of thing  
**\<suraeNoether\>** in theory, anyone can fire up tracing.py, tweak the parameters inside, and see the simulated ledger  
**\<suraeNoether\>** the ledger is working just fine  
**\<sarang\>** nice  
**\<suraeNoether\>** unfortunately, but also fortunately, once i put these transcripts into human readable format it became immediately obvious there was a problem with my Eve  
**\<suraeNoether\>** she is allegedly granted knowledge of her part of the graph, but she doesn't incorporate that knowledge into her matching solution appropriately.  
**\<suraeNoether\>** so the previous numbers i shared in here, which i took care to explain where provisional, are lower than what we can expect from a realistic eve.  
**\<suraeNoether\>** these problems were not being caught by my unit tests  
**\<sarang\>** What needs to be done to properly account for that?  
**\<suraeNoether\>** the run\_experiment function in tracing.py builds a dictionary called eve\_ownership, which is not utilized correctly, and allegedly deletes spurious ring members, but i have some evidence that this isn't being done correctly either  
**\<suraeNoether\>** what really needs to happen is that eve builds a sub-ledger by deleting all her known information, so that it's purely "uknown" data to Eve, before playing the matching game  
**\<suraeNoether\>** that, together with reporting her known information, would fix the problem  
**\<suraeNoether\>** since i have CLSAG and triptych to take care of, and since so much of this code is human readable at this point, i'm putting this project down until the new year  
**\<suraeNoether\>** especially since "the problem" is easily explainable and I can point to where it's occuring  
**\<suraeNoether\>** but, for example, if anyone wants to just simulate a ledger using different stochastic matrices or spendtime distributions, they can tweak the parameters inside of tracing.py and generate as many ledgers as they like  
**\<suraeNoether\>** and now you can read them like a story. the world's least interesting procedurally generated story.  
**\<suraeNoether\>** i'll be unavailable for the next 72 hours or so (family is coming into town) but i have CLSAG and triptych printed; i'm about 1/3 of the way marking up my copy of triptych  
**\<suraeNoether\>** that's all i have today. does anyone have any questions for me about that, or other questions on anything research-y?  
**\<sarang\>** When you're done with Triptych, will suggestions be added as Overleaf review comments?  
**\<suraeNoether\>** i was going to add some as comments and send the rest as an email to you  
**\<sarang\>** Great, thanks  
**\<sarang\>** You have the line-numbered version?  
**\<suraeNoether\>** yep  
**\<suraeNoether\>** okay, let's move onto ACTION ITEMS  
**\<suraeNoether\>** sarang?  
**\<sarang\>** I'll be addressing some multisig-related MPC stuff for RCT3 and Omniring  
**\<sarang\>** Then working on any necessary updates for CLSAG and/or Triptych based on review  
**\<sarang\>** and then getting both papers posted to IACR  
**\<suraeNoether\>** Helping sarang finish triptych and clsag; if i finish this before end-of-year, i'll go back to matching  
**\<sarang\>** Oh, a longer-term action item is to backport the CLSAG security model changes to DLSAG, but that's likely not this week  
**\<sarang\>** I don't recall the DLSAG reviewers mentioning it, but it should be done anyway  
**\<suraeNoether\>** allrighty  
**\<suraeNoether\>** unless anyone has any final quesitons  
**\<suraeNoether\>** i think we can adjourn  
**\<sarang\>** Happy Festivus!  
