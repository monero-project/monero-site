---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-06-11
summary: MRL work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>** Greetings everyone!  
**\<endogenic>** ??  
**\<suraeNoether>** I'm Surae, and I'll be accompanying you on this mathematical journey today  
**\<suraeNoether>** Our agenda today is simple. 1. Greetings. 2. I'll give a brief update on the multisig paper, giving a brief update on MAGIC, and a brief talk about the recent paper on constant-sized ring sigs that made its rounds on twitter this morning.  
**\<suraeNoether>** 3. I'll open it up for any updates or projects anyone else is officially or unofficially working on  
**\<suraeNoether>** 4. Q&A  
**\<suraeNoether>** So, 1. Greetings everyone! say hello if you are sitting in on this one or lurking  
**\<suraeNoether>** okaaaaaaaaaay 2. Multisig paper will be done later this week, I'm just putting finishing touches on it before i send it out for review by some smarter parties than myself. it's a lot more clear and correct and compact now, and it actually makes some sense re: simulations and signing oracles. some details are still lacking, but that's what the rest of this week is for. https://v2.overleaf.com/read/bfjfkdgnhgvh  
**\<oneiric\_>** oh hi  
**\<suraeNoether>** MAGIC and MRL are going to have a presence at defcon this year, and I was hoping sgp\_[m] could say something about that, but it looks like I'm alone today, and that's okay. Hopefully we can sell some MAGIC t-shirts and start accepting donations.  
**\<suraeNoether>** We had some speedbumps to overcome in terms of getting MAGIC off the ground. CPAs and lawyers who didn't really have time for new clients who thought they could waste our time, etc.  
**\<binaryFate>** bonsoir  
**\<suraeNoether>** howdy oneiric\_ and binaryFate   
**\<suraeNoether>** I mentioned earlier about a constant-sized ring signature scheme in the random oracle model. it's actually a really neat scheme, but it uses bilinear pairings and takes a lot more verification time than our current set-up, so it isn't really suitable as a replacement. i did a little tweetstorm on it this morning you can see here. https://twitter.com/BGGoodell/status/1006203923827343361  
**\<UkoeHB>** Is there a white paper for it?  
**\<suraeNoether>** https://link.springer.com/article/10.1007/s11390-018-1838-z  
**\<suraeNoether>** not white  
**\<endogenic>** i linked it earlier  
**\<suraeNoether>** Let's see here, in addition to that, I have a script for a white-board video on cryptocurrencies that i am fleshing out. rehrar mentioned he would be willing to help when he gets back, and that could be fun and cool.  
**\<binaryFate>** I was quite offline last 3 days, didn't see the twitter storm. It's constant-size in space, right? How does it scale for verification time?  
**\<suraeNoether>**  in the meantime, i'm interested in doing a plausibility analysis of a RLWE-based version of Monero instead of a discrete logarithm-based version, but that's a longer-term thing. I've been taking notes on all the multisig papers i've been reading for a comprehensive literature review that i plan on publishing later this summer, too, and that's coming along nicely (although no links available yet)  
**\<suraeNoether>** binaryFate: it's a lot slower  
**\<suraeNoether>** same nubmer of exponentiations, but also a linear number of pairings operations  
**\<binaryFate>** Ok. First time someone comes up with a constant-size scheme without any sort of setup no? Neat even if not usable for us  
**\<suraeNoether>** yep!  
**\<suraeNoether>** Other than that, sarang and I posted the roadmap on github a few weeks ago, and we are still hoping for discussion and/or comments about additions or expansions to the topics listed. https://github.com/monero-project/research-lab/issues/29  
**\<binaryFate>** Sorry if I'm behind the curve, what's RLWE?  
**\<suraeNoether>** Ring-Learning-With-Errors, it is a hardness assumption that is thought to be resistant to quantum computers, and a lot of "lattice-based" crypto schemes rely on it  
**\<suraeNoether>** a lot of "lattice-based" ring signature schemes are available, too  
**\<binaryFate>** So that would be to use ring sigs resistant to quantum computers?  
**\<oneiric\_>** That's awesome surae, find anything interesting/potentially usable there?  
**\<suraeNoether>** oh, i don't know yet, i just know that most of the frameworks are available to be assembled together carefully  
**\<suraeNoether>** it's an interesting route of inquiry, but htat's all at this point  
**\<binaryFate>** How does that relate to plausible deniability (if a ring remains a ring, just using different underlying math)  
**\<suraeNoether>** binaryFate: the hope is merely to replicate all of monero's current capabilities in a setting where an adversary with a quantum computer is trying to peek in on amounts, or to cheat the system to mint money, or to try to forge signatures.  
**\<suraeNoether>** the signatures would still be ring signatures with plausible deniability as we currently have, just built with a scheme with a different hardness assumption  
**\<suraeNoether>** there's almost no point in having ring signatures in that setting though, even if they are QC-resistant to forgery, becuase a QC computer can enumerate the spending tree and find true spenders very efficiently; a QC-resistant privacy-focused currency, I think, really has to be built on large-anon set technology  
**\<suraeNoether>** otherwise you could use far less exotic QC-resistant signatures to accomplish the same deal  
**\<suraeNoether>** anyway, since we are probably going to have to switch to pairings or starks or something weird eventually anyway in order to get our large anon sets, i started thinking a little more broadly  
**\<suraeNoether>** UkoeHB: do you want to update us on ZTM?  
**\<suraeNoether>** maybe later today :D  
**\<suraeNoether>** Does anyone have any questions for me or MRL in general?  
**\<UkoeHB>** mostly proofreading and edits  
**\<suraeNoether>** Okay, well, if anyone has any questions or concerns for me, I'll be here for most of the rest of the day and you an always e-mail me at suraeNoether@protonmail.com  
**\<suraeNoether>** \</\\meeting  
**\<suraeNoether>** \<.,>d;fhadlf  
**\<oneiric\_>** lol, thanks for the information suraeNoether  
**\<UkoeHB>** here is latest draft https://www.pdf-archive.com/2018/06/11/zero-to-monero-first-edition-v0-20-3/zero-to-monero-first-edition-v0-20-3.pdf  
**\<suraeNoether>** thanks UkoeHB   
**\<suraeNoether>** and thanks to endogenic for throwing that link in earlier  
**\<UkoeHB>** aiming to close proofreading sunday night, then PR getmonero, for publish ~1 week later  
**\<UkoeHB>** unless proofreaders more time, then ill push it out  
**\<oneiric\_>** really tremendous work coming out of the research lab, as always. much excite for 2018-2019!  
**\<binaryFate>** thanks suraeNoether for the updates!  
