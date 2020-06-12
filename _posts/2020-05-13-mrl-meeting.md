---
layout: post
title: Logs for the MRL Meeting Held on 2020-05-13
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** First, GREETINGS  
**\<sarang\>** Hi  
**\<binaryFate\>** hello!  
**\<Isthmus\>** Heyo  
**\<h4sh3d[m]\>** Hello  
**\<ArticMine\>** Hi  
**\<sarang\>** Next up is ROUNDTABLE  
**\<rehrar\>** hi  
**\<sarang\>** Does anyone have research of interest to share with the group?  
**\<sarang\>** I know Isthmus just mentioned something before we started  
**\<Isthmus\>** Hey everybody. I incorporated y'all's feedback on the research proposal (thanks for your input), updated version here: https://repo.getmonero.org/monero-project/ccs-proposals/-/merge\_requests/142  
**\<Isthmus\>** Most of the changes are in the Roadmap section  
**\<Isthmus\>** For phase 1 we've switched to a very formal enumeration of adversary capabilities and Monero features of interest, and will document possible issues and solutions along the lines of:  
**\<Isthmus\>** "Monero's [component] is vulnerable to [impact] by a hypothetical adversary that can leverage [algorithm]. In general, the solution must meet [requirements]. Current relevant methods include [cryptosystem] which would require [migration process] and has [tradeoffs] that would prevent implementation until [device bandwidth/resource threshold] is widely available."  
**\<Isthmus\>** Throughout this entire project, the community will receive updates during the weekly #monero-research-lab meetings. During phase 3 however, several specific documents (the key deliverables from this research) will be freely published:  
**\<Isthmus\>** 1. User-friendly writeup: This community-facing writeup will provide an approachable explanation of how hypothetical quantum computers may impact Monero, and possible future mitigations. The writeup should minimize FUD and provide the context that these vulnerabilities apply to almost all cryptocurrencies (not only Monero).  
**\<Isthmus\>** 2. Technical documentation: An MRL position paper to distill key information for (current and future) researchers and developers. The writeup should formally describe vulnerabilities, and highlight potential strategies and solutions, noting their tradeoffs. Code snippets may be included if appropriate for pedagogical purposes or clarity.  
**\<Isthmus\>** 3. Non-technical 1-pager: An ELI5 / TL;DR summary will be provided for journalists, Monero Outreach, etc. This blurb will discuss risks and myths with no technical jargon, with key takeaways that a broad audience will appreciate.  
**\<Isthmus\>** Results and updates will be also disseminated via Twitter threads, Reddit posts, and Breaking Monero videos. :- )  
**\<Isthmus\>** (ends notes)  
**\<Isthmus\>** Oh, I'll X-post the proposal to Reddit today  
**\<sarang\>** I like the change in scope, particularly focusing on communicating the current state of the protocol  
**\<sarang\>** Moving away from specific things like implementations and proofs-of-concept for changes seems wise, especially considering that the state of the art will change  
**\<Isthmus\>** ^ yep  
**\<Isthmus\>** It's important to note that many current post-quantum cryptography candidates require large proofs and significant computational resources, and will thus not be suitable for immediate deployment. For this reason, understanding broad strategies and their tradeoff will be more useful than specific implementations. Thankfully, consumer device capabilities increase over time, and researchers continue to  
**\<Isthmus\>** discover new faster/smaller proving systems, so these practical barriers are temporary.  
**\<sarang\>** Were there any questions for Isthmus about this proposal? (Comments could also be made on the proposal itself to reach a wider audience)  
**\<rehrar\>** nop  
**\<sarang\>** OK, does anyone else wish to share research of interest?  
**\<sarang\>** If not, I have a few items to share  
**\<h4sh3d[m]\>** Yes, I have something  
**\<h4sh3d[m]\>** Earlier someone posted this: https://gist.github.com/RubenSomsen/8853a66a64825716f51b409be528355f  
**\<sarang\>** Ah yes, the atomic swap idea  
**\<h4sh3d[m]\>** I had a closer look. The interesting part is the usage of ECDSA adaptor signature  
**\<sarang\>** Avoids the use of hash preimage proofs IIRC?  
**\<sarang\>** (I have yet to examine it in detail)  
**\<h4sh3d[m]\>** Yes, the protocol is very close what I already shared here  
**\<h4sh3d[m]\>** But with the idea of using a cross group dl-proof with an ECDSA adaptor signature might work  
**\<sarang\>** At the very least, a cross-group DL equivalence proof is very straightforward  
**\<sarang\>** and exists today  
**\<h4sh3d[m]\>** Yes, that's why it's interesting =)  
**\<h4sh3d[m]\>** The new part for me is this: https://lists.linuxfoundation.org/pipermail/lightning-dev/2019-November/002316.html  
**\<sarang\>** Is that link related to the gist?  
**\<Isthmus\>** Very cool  
**\<sarang\>** Ah, the link is from the gist  
**\<h4sh3d[m]\>** Yes, it's the first link "single signer ECDSA adaptor signatures" in the Gist  
**\<sarang\>** got it  
**\<sarang\>** I'm excited to work it out in detail!  
**\<h4sh3d[m]\>** With this, we can put one half of the monero key as the adaptor `Y` (or the other half depending if the swap succeed or not)  
**\<h4sh3d[m]\>** I'd be happy to work on this too. As zkao mentioned it earlier we are thinking about a proposal if it make sense  
**\<sarang\>** Having more eyes on ideas like this is definitely a good thing  
**\<sarang\>** Thanks for sharing this h4sh3d[m] (and zkao earlier as well!)  
**\<sarang\>** Were there any questions for h4sh3d[m] ?  
**\<h4sh3d[m]\>** Cool, I'll continue posting my findings here in the next days.  
**\<sarang\>** Thanks, please do  
**\<sarang\>** I wanted to finish up some work on next-gen transaction protocols, so I wrote up a proof-of-concept C++ implementation of Arcturus: https://github.com/SarangNoether/monero/tree/arcturus  
**\<rehrar\>** weeeeee!!!!  
**\<sarang\>** The usual disclaimer that it has not undergone any kind of review, and should be considered unsafe for production use  
**\<sarang\>** However, I got timing data from it  
**\<sarang\>** I had to rewrite the performance tests for Triptych, MLSAG, and CLSAG for better comparison since Arcturus integrates balance checking directly into the proof (and the others do not)  
**\<sarang\>** The results, which I'll paste in just a sec, show that transaction input/output structure plays a role in the overall timing results  
**\<sarang\>** Here is data for 1-in-2-out transactions: https://usercontent.irccloud-cdn.com/file/KZxENlzN/timing-1-2.png  
**\<sarang\>** Here is data for 2-in-2-out transactions: https://usercontent.irccloud-cdn.com/file/Ww2hDEbo/timing-2-2.png  
**\<sarang\>** These account for the total verification time for signature/proof verification and balance checks  
**\<sarang\>** but does not include range proof verification (that's the same for all protocols)  
**\<sarang\>** You can get the same data by choosing the appropriate performance test parameters on my `clsag-device` branch (for MLSAG \_and\_ CLSAG), `triptych` branch (for Triptych), and `arcturus` branch (for Arcturus)  
**\<sarang\>** The grey lines are centered at the 11-MLSAG point to show the current timing  
**\<binaryFate\>** it looks super close to Triptych, any hunch how it would look like for more-inputs and/or more-outputs?  
**\<sarang\>** At higher ring sizes, Triptych and Arcturus should stay very close, as the balance check component becomes less relevant overall  
**\<sarang\>** The difference mainly arises from whether the balance check group operations are separated (in Triptych) or included in a single multiscalar multiscalar operation with the rest of the proof (in Arcturus)  
**\<sarang\>** and that difference goes away at higher ring sizes  
**\<sarang\>** The real benefit is in transaction size  
**\<sarang\>** I thought I already had Arcturus included in plot data, but it turns out I don't... I'll work that out right after the meeting and post it here  
**\<sarang\>** Unrelated to this, I'm coordinating a statement of work for the CLSAG audit with OSTIF and Teserakt, the audit firm that the audit workgroup recommended  
**\<sarang\>** Were there any other questions for me on these topics?  
**\<moneromooo\>** Oooooh ^\_^  
**\<sarang\>** Does anyone else have topics to discuss for the roundtable, before we move on?  
**\<Isthmus\>** Hmm, I just remembered a showerthought to generate seashell avatars based on transforming heterogeneously-structured transaction metadata into a signature string, and then running that through surae's visual hash function...  
**\<Isthmus\>** I'll try to prototype it this weekend so I can share examples next week (kind of hard to describe abstractly)  
**\<sarang\>** Oh man, I remember that seashell work! It's been a while  
**\<Isthmus\>** Yeah, that's a throwback. I forked Surae's repo back in 2018 and turned it into a notebook, but never connected it to Monero input data. https://github.com/Mitchellpkt/seashells/blob/master/seashells\_notebook.ipynb  
**\<sarang\>** I suppose we can move on to ACTION ITEMS and finish up the meeting if there isn't anything else to discuss  
**\<selsta\>** I wish we could display seashells in CLI wallet.  
**\<sarang\>** I'll be incorporating some changes to my in-memory key encryption PR, looking into that swap proposal in greater detail, and updating the Arcturus security model for conference submission  
**\<sarang\>** Anyone else?  
**\<h4sh3d[m]\>** I'll study more in details adaptor for ECDSA and rewrite the concerned parts of the atomic swap paper.  
**\<sarang\>** You mean updating your original write-up?  
**\<h4sh3d[m]\>** yes  
**\<sarang\>** Excellent  
**\<sarang\>** All right, I suppose we can adjourn; thanks to everyone for participating!  
**\<sarang\>** Logs will be posted shortly to the agenda issue  
