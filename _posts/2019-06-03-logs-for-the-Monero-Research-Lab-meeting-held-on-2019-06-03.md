---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-06-03
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** OK, let's begin our meeting  
**\<sarang>** Hello  
**\<sarang>** Or rather, GREETINGS (according to the agenda)  
**\<suraeNoether>** howdydoodily neighborini  
**\<sarang>** Lots to talk about today  
**\<sarang>** Anyone else around today?  
**\<suraeNoether>** hrmm. :P we need a publicist, it seems  
**\<sarang>** Well, let's go ahead with ROUNDTABLE anyway  
**\<sarang>** The DLSAG paper is now on IACR as a preprint: https://eprint.iacr.org/2019/595  
**\<suraeNoether>** whoooo  
**\<sarang>** (the usual reminder that preprints are \_not\_ peer reviewed as a prereq to being on the archive)  
**\<needmoney90>** is this thing on  
**\<sarang>** yo  
**\<suraeNoether>** needmoney90: welcome  
**\<needmoney90>** I dont have much to say, but ill watch intently  
**\<sarang>** CLSAG is also available, currently in a monero-site MR: https://repo.getmonero.org/monero-project/monero-site/merge\_requests/1080  
**\<sarang>** It will be submitted to IACR once suraeNoether gives it one last read-through  
**\<wow-discord>** \<Crappyrules Ⓤ> lurking intensifies  
**\<suraeNoether>** ^ i'm reading through this sucker one more time before we submit to IACR, i'll be done later this afternoon  
**\<sarang>** Those are two big projects that we'll be glad to receive feedback on  
**\<suraeNoether>** not wow-discord, but the paper before it :P  
**\<sarang>** lol  
**\<sarang>** Any questions on DLSAG or CLSAG before we move on?  
**\<sarang>** righto  
**\<sarang>** A new sublinear transaction protocol, Omniring, was posted: https://eprint.iacr.org/2019/580  
**\<sarang>** suraeNoether and I had been looking over early versions of it, courtesy of the authors  
**\<sarang>** It's a very clever construction, but note that the batching numbers are incorrect  
**\<sarang>** I'm told those will be updated in a later revision  
**\<suraeNoether>** I spent this weekend on real\_or\_random et al's omniring paper, which is really elegant, imo. i'm also reading more about ringct3.0, lelantus, and spartan. sarang and i have our eyes on a comparison/state-of-the-art paper describing these different approaches and looking at concrete impacts on the monero chain if we upgrade protocols  
**\<Isthmus>** Hey, I’m intermittently here  
**\<suraeNoether>** neat, while we have you, do you want to jump in on the round table and describe what you've been working on?  
**\<sarang>** Yes, I've begun running the numbers we need for Lelantus, using my toy implementation of it  
**\<suraeNoether>** sarang is anyone working on a python implementation of omni for comparison purposes afayk?  
**\<Isthmus>** I’m just making new transaction tree tracing heuristics  
**\<sarang>** Isthmus: nice!  
**\<sarang>** Anything to share at this point?  
**\<Isthmus>** Step 1) Have gotten to the point of identifying wonky txns  
**\<Isthmus>** Step 2) upcoming: look for wonky transactions who contain similarly wonky ring members  
**\<Isthmus>** Which implies following true spend path with high probability  
**\<Isthmus>** Step 3) fix it so we don’t leak this info moving forward  
**\<sarang>** Are some of these heuristics a result of protocol choices?  
**\<sarang>** Or bad user behavior?  
**\<Isthmus>** Bad wallet behavior - wrong decoy Alto, etc  
**\<Isthmus>** Ooh gotta run into a meeting, back in a bit probably  
**\<sarang>** np  
**\<sarang>** To your question, suraeNoether   
**\<Isthmus>** \*algo  
**\<sarang>** it's probably not necessary to do a full implementation of Omniring to assess its complexity  
**\<sarang>** For Lelantus it was, since many building blocks were unspecified  
**\<sarang>** e.g. signatures  
**\<sarang>** Oh, another note... my research report for the previous month is available: https://repo.getmonero.org/monero-project/ccs-proposals/merge\_requests/34#note\_6373  
**\<suraeNoether>** I'm still drafting my research report, and I apologize to the community for the delay. Now that DLSAG and CLSAG are both "out the door," i'm summarizing my work immediately  
**\<sarang>** So yeah, a lot of joint work between suraeNoether and me, for getting CLSAG and DLSAG out the door  
**\<sarang>** and assessing these new sublinear proposals  
**\<sarang>** Does anyone else have research to share?  
**\<sarang>** or suraeNoether, if you have other things to share?  
**\<suraeNoether>** The next 20 days or so are going to come quickly with the konferenco. other than reviewing CLSAG later today, I'm putting paper-writing down until after the conference. the next few weeks will be conference planning primarily and coding for mrl12 secondarily (and keeping up on reading new research as it comes out), with the hopes of finishing mrl12 before the conference.  
**\<sarang>** Excellent  
**\<sarang>** I'm really excited for the conference  
**\<suraeNoether>** but i'm still going to be reading these sublinear protocol proposals and tinkerrrrring  
**\<sarang>** Neato  
**\<suraeNoether>** oh by the way  
**\<suraeNoether>** if you are speaking at the konferenco, please make sure you get your slides to me by June 20 so we can work them into a common slide deck  
**\<sarang>** Cool kids use PDFs for slides :D  
**\<suraeNoether>** and if any speakers have any questions, please feel free to shoot me emails..  I'm catching up on a konferenco backlog  
**\<sarang>** So, this moves to ACTION ITEMS already  
**\<sarang>** suraeNoether will be working to run the conference smoothly, giving the ok for CLSAG to be submitted to IACR, and doing MRL-12 stuffs  
**\<sarang>** (to summarize)  
**\<sarang>** I will be getting those papers up-to-date (on the MRL archive and on IACR), continuing sublinear assessment, and beginning some investigation into ristretto implementation details  
**\<suraeNoether>** yes, and konferenco speakers should make sure they get slides to me before June 20th. many of you hang out in this room :P  
**\<sarang>** I shall submit them to you once I write them :D  
**\<sarang>** but well in advance of the deadline  
**\<sarang>** Despite having many things to discuss, this meeting is going quite quickly  
**\<sarang>** Is there anything to discuss regarding sublinear schemes so far?  
**\<sarang>** One thing to note is that I haven't identified a way to make RCT3 compatible with our key images  
**\<sarang>** Omniring describes a way to do this, and I have a method for Lelantus  
**\<sarang>** Note that Lelantus (like DLSAG) would require a self-spend (i.e. a single churn) to avoid spend tracing  
**\<sarang>** Omniring does not have such a limitation  
**\<suraeNoether>** my understanding is that spartan lacks any transaction structure  
**\<suraeNoether>** so it'd be a ground-up protocol design  
**\<sarang>** Spartan is only a proving system, right  
**\<suraeNoether>** omniring surprised me about how simple it was, considering the heft of the paper, but most of it lies in new rigorous definitions of security, etc  
**\<sarang>** We do not have any kind of circuit-optimized Monero-specific transaction protocol at this time  
**\<sarang>** All of Lelantus, Omniring, and RCT3 provide a full transaction structure  
**\<rehrar>** I have a question for MRL after current discussion ends  
**\<sarang>** Sure, go ahead  
**\<suraeNoether>** well, i don't have more research to discuss, so fire away rehrar  
**\<sarang>** If it's not research related, we can adjourn first  
**\<rehrar>** my issue is with view keys, and while I suspect it's a UX issue, I just wanted to verify that by having MRL confirm my thoughts (or disconfirm them if it is MRL related)  
**\<suraeNoether>** in the words of sarang, 0\_o  
**\<rehrar>** One of the things that's not discussed much is the fact that "view keys" don't live up to their name and are fairly useless in their current form.  
**\<sarang>** In that you only inherently get incoming information?  
**\<rehrar>** Giving just a view key to someone doesn't do much in terms of accounting purposes.  
**\<rehrar>** yes  
**\<sarang>** Yes, it's a limitation for sure  
**\<rehrar>** you need key images  
**\<rehrar>** and I'm not aware of any tool that allows easy import/export of key images  
**\<moneromooo>** monero-wallet-cli  
**\<rehrar>** to make a REAL view key wallet  
**\<rehrar>** moneromooo: for non-nerds  
**\<rehrar>** I'm talking about Small Business Man Billy who wants to show his books to his accountant  
**\<rehrar>** I'm talking about Farmer Joe who needs to prove to the IRS something or other  
**\<rehrar>** these guys aren't going to use CLI  
**\<sarang>** So what you're asking for is a good user-friendly way to export the information that Billy's accountant can import to verify details?  
**\<moneromooo>** They're not going to use Monero in the first place :)  
**\<rehrar>** now, as I said, this may just be a UX thing, and only a matter of time until someone makes it easy, similar to exa wallet multi sig thing today  
**\<rehrar>** sarang: or if this is a limitation that must be adhered to period  
**\<rehrar>** moneromooo: it's a catch 22 bro, one of the reasons they  may not use monero is because of stuff like this, but stuff like this doesn't get fixed because they won't use monero  
**\<moneromooo>** Someone posted a way to make the view key also view outgoing txes IIRC. It's way down in the issues list in the monero repo.  
**\<sarang>** What limitation exactly?  
**\<sarang>** The need for key images at all?  
**\<sarang>** Or how convenient the software makes it to import/export?  
**\<rehrar>** sarang: more like what moneromooo is saying  
**\<sarang>** The key image requirement is currently a protocol limitation, for sure  
**\<rehrar>** a way to make view key also viewing outgoing  
**\<suraeNoether>** moneromooo: if there is a way to make the viewkey outgoing also, i haven't seen it and i'd love to. i've been thinking about it for awhile  
**\<rehrar>** without key images  
**\<sarang>** Yes, that's been a discussion over time, but hasn't been brought up in a while  
**\<sarang>** I recall seeing an idea (perhaps the one moneromooo is talking about)  
**\<sarang>** If anyone has the link, I'd like to refresh my understanding of it  
**\<ArticMine>** This if I recall came up last year over AML / KNC  
**\<sarang>** yes  
**\<suraeNoether>** i had this idea the other day: SBMB could publish an accumulator that contains his key images, in a way that allows the auditor to check if a given key image is in the accumulator, but the auditor has to trust that the accumulator was constructed faithfully (unless some protocol is used to prove fairness).  that plus the view key of the wallet allows the auditor to determine 1) all incoming XMR to that wallet  
**\<suraeNoether>** and 2) any outgoing viewkeys included, allowing the auditor to determine anupper bound remaining in the wallet  
**\<rehrar>** this would (imo) single-handedly would shoot Monero's real world use up incredibly  
**\<moneromooo>** https://github.com/monero-project/monero/issues/1070  
**\<suraeNoether>** for some auditors this would be enough, after all you have to trust that the client has actually provided access to all his wallets anyway  
**\<suraeNoether>** thanks moneromooo  
**\<sarang>** Yes, I believe this was the idea that I was vaguely remembering :)  
**\<sarang>** It would be very interesting to reconsider such an idea now that we have multiple ways to make signatures smaller  
**\<suraeNoether>** hmm  
**\<suraeNoether>** that's... very promising.  
**\<rehrar>** as a business man, something like this would be invaluable  
**\<moneromooo>** Note that smooth (IIRC) had misgivings since this gives more spying power to people with the view key.  
**\<suraeNoether>** but it would require a change to the transaction structure  
**\<rehrar>** and would make posting a view key for something like general fund and/or CCS wallet actually useful  
**\<suraeNoether>** unless the extra group element is stashed into tx\_extra and then... well, anyone can put anything in there so  
**\<sarang>** Right, there were concerns about how this affect other users' privacy in practice  
**\<suraeNoether>** wait, i'm not sure about this method  
**\<sfhi>** I agree with rehrar that this would be really valuable for accounting purposes  
**\<rehrar>** obviously if the reduction in privacy heavily outweights the benefits, then perhaps it should be solved on a UX level  
**\<ArticMine>** Can this not be brute forced by using all the existing key images in the blockchain?  
**\<sarang>** Well, regardless of the implications of the linked suggestion, broader thoughts about privacy-aware auditing should be ongoing  
**\<sarang>** Anything else specific to discuss while the meeting is ongoing?  
**\<sarang>** Righto  
**\<sarang>** Well, let's go ahead and adjourn, and let the general discussion continue  
**\<sarang>** Thanks to everyone for attending; logs will be posted to GitHub shortly  
