---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-04-01
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** OK, we'll begin shortly. Agenda is here: https://github.com/monero-project/meta/issues/325  
**\<sarang>** Logs from this channel will be posted as a comment to that GitHub issue shortly after the meeting is done  
**\<suraeNoether>** hi everyone!  
**\<sarang>** Hello all  
**\<suraeNoether>** nice topic choice btw  
**\<sgp\_>** hello  
**\<sarang>** 1. GREETINGS  
**\<Xeagu>** Hello!  
**\<sarang>** Since others may join over time, let's go ahead and jump to 2. ROUNDTABLE  
**\<sarang>** Jointly, suraeNoether and I have been working on formalization of the compact CLSAG signature scheme  
**\<suraeNoether>** muah ha ha  
**\<sarang>** The choice of how keys are aggregated likely affects the security proofs  
**\<sarang>** and this also affects the efficiency, so I'll continue investigating the effects of this  
**\<suraeNoether>** so, it turns out that one variant of CLSAG is easily provably secure assuming LSAGs are secure, and the variant initially proposed by randomrun is easily proven secure similarly to previous approaches...  
**\<sarang>** any thoughts to add on this suraeNoether since it's a project we're both on?  
**\<suraeNoether>** yep! so the fun part about this scheme is that it makes ring signatures with R ring members take up R+1 scalars only. previously it was 2R+1, I believe...  
**\<sarang>** The original proposal has slightly more efficient computation  
**\<suraeNoether>** yeah. and while this seems nice and all alone on it's face, but this is actually sort of a deeper compactification than I originally thought...  
**\<sarang>** The variant suraeNoether is thinking of would add perhaps 60 us of verification time (on my test machine)  
**\<suraeNoether>** \*nod\* that variant is the "easily proven secure" variant  
**\<sarang>** Yep  
**\<sarang>** Certainly worthwhile to get proofs for the original, to save that time  
**\<sarang>** I'm working on some modifications to the underlying C++ crypto plumbing to accommodate this  
**\<suraeNoether>** so, what's really cool about this is: using our previous signatures, we could pull off "colored coin" transactions in RingCT... but it felt like there could only be one color for the outputs, and the signatures were proportionally sized to the number of colors  
**\<sarang>** Nothing major, just a few straightforward extensions to what we have now  
**\<suraeNoether>** using this compactification, a really easily written version of colored ringct can be developed where all signatures are R+1-sized, regardless of teh number of colors  
**\<suraeNoether>** verification time will take the same amount of time as it would have before, but it removes the dependency of the signature size on the number of colors, which is neat  
**\<sarang>** Yeah, the key aggregation idea, coupled with optional changes to key image format, has a lot of neat directions to go  
**\<Xeagu>** Wait Monero colored coins?  
**\<suraeNoether>** i think i'm on page 6 of a new document describing all the above. proofs and stuff and all... it's pretty much written itself.  
**\<sarang>** Xeagu: only as a hypothetical  
**\<suraeNoether>** Xeagu it would be \*possible\* to implement it this way  
**\<suraeNoether>** i'm not recommending that we \*do\*  
**\<Xeagu>** Wow very interesting  
**\<suraeNoether>** i'm pointing out that one of the technical challenges involving scaling the blockchain to the number of colors has been removed  
**\<suraeNoether>** which is neat, but i'm not convinced Monero Gold and Monero Silver need to be a thing. :P  
**\<sarang>** For sure. No timeline on CLSAG integration yet, nor formal talk about whether or not we intend to  
**\<suraeNoether>** ^ although compactifying our present RingCT is a high priority, because it will save hours or more of sync time within only a year.  
**\<Xeagu>** Would such an implementation compete with Tari for digital assets?  
**\<sarang>** I don't think the project would want to target that use case  
**\<Xeagu>** Got it. Was just thinking that Counterparty works because of colored coins.  
**\<sarang>** but it's nice to have such a useful signature scheme available and understood  
**\<sarang>** Otherwise, I've been plugging away at an example implementation of the Lelantus transaction protocol, which was recently updated by its author  
**\<sarang>** so I'm going back to make changes etc.  
**\<sarang>** suraeNoether: other things to report?  
**\<suraeNoether>** oh i put an hour or two into a small new side project this weekend i'm thinking of calling SlyHash  
**\<Xeagu>** What is SlyHash?  
**\<suraeNoether>** i'm inventing it and naming it after sly and the family stone, the funk band. :P the goal of this project is to design a parazoa-based hash function as a toy (emphasis on toy) proof of work algorithm, with the goal of experimenting with power and timing properties, etc... parazoa is the generalization of the sponge approach used to design keccak  
**\<sarang>** You were investigating the applications of this as a VDF, correct?  
**\<suraeNoether>** yeah! hopefully. :P  
**\<Xeagu>** I don't know what keccak or VDF are  
**\<sarang>** Keccak is the algorithm that was used (slightly modified) as SHA-3  
**\<sarang>** a VDF is a verifiable delay function  
**\<suraeNoether>** but i want to design it to be really dumb to compute, like using permutation polynomials instead of ciphers for permutations, and so on. it's ... a dumb little side thing that may end up evolving into something more sophisticated (so maybe parazoa was a good choice), but for now i'm literally just measuring how close to "ideal" a randomly selected permutation polynomial of a specific form is. if i find a goo  
**\<suraeNoether>** one in the first 12.5 million cases, i'll implement it. if not, i'm throwing the project out the window  
**\<sarang>** neat  
**\<Xeagu>** Might consider designing such that it would be cheap/easy to ASIC  
**\<sarang>** Any questions for suraeNoether?  
**\<sarang>** OK, does anyone else have interesting work to share?  
**\<Xeagu>** Yes I have something  
**\<sarang>** sure  
**\<Xeagu>** A YouTube video I made  
**\<Xeagu>** https://youtu.be/7t6ikOnTbcM  
**\<sarang>** What is the topic?  
**\<Xeagu>** First of a series on something I call CrypARTgraphy  
**\<Xeagu>** Using art to encrypt messages  
**\<sarang>** Similar to the idea of steganography?  
**\<Xeagu>** Not quite no. More like combining related symbology and the relationship between ideas to create paralleled meaning.  
**\<sarang>** I'm not really sure what that means, I must admit  
**\<sarang>** (but I have not yet watched the video)  
**\<Xeagu>** I have some ideas for applying the math of ECC where the variables and prime numbers are substituted with ideas, objects, and art from stories or events  
**\<Xeagu>** Math is fundementally logic and stories (art) contain variables with logical relationships  
**\<sarang>** Thanks Xeagu  
**\<sgp\_>** I have a quick comment  
**\<sarang>** I know sgp\_ also had something to mention about the upcoming 5-year genesis block anniversary as well?  
**\<sarang>** aha go ahead  
**\<sgp\_>** Yes  
**\<sgp\_>** https://github.com/monero-project/meta/issues/324  
**\<sgp\_>** This isn't strictly research-related, but I would like the recommendations and participation of researchers in Monero's upcoming 5 year "Moneroversary"  
**\<sgp\_>** If you can comment your availability and desired events in the Github issue, that would be greatly appreciated  
**\<sgp\_>** that's all, unless there are any quick questions  
**\<sarang>** It would be neat to take a 30K foot view of how Monero has evolved technically over time  
**\<sarang>** What has been accomplished, and what still needs work  
**\<sgp\_>** Yes, I expect a good portion to cover Monero's history. Focusing on the technical changes over time is an area where you all can help :)  
**\<sarang>** OK, so that's about 2.5 weeks away  
**\<sarang>** thanks sgp\_  
**\<Xeagu>** Konferenco is about 2.5 months away  
**\<sgp\_>** yes, so the sooner I get feedback, the better  
**\<sarang>** Ah, so it is  
**\<sarang>** Attendance seems fairly sparse today, but does anyone else have research work to share?  
**\<sarang>** Otherwise we can move on with this (fairly quick) agenda  
**\<sgp\_>** oh one more thing  
**\<sgp\_>** moneromooo added the ability to "freeze" outputs. These don't show up in the wallet balance and will not be spent until "thawed" https://github.com/monero-project/monero/pull/5333  
**\<sarang>** Oh yes, this seems a good idea  
**\<sarang>** In case you fear an output may be "poisoned" via some kind of controlled spend  
**\<sgp\_>** precisely  
**\<suraeNoether>** that's super neat  
**\<sarang>** Not really a general solution, of course, but one definite way to avoid something you suspect is adversarial  
**\<sarang>** OK, on to 3. QUESTIONS  
**\<sarang>** Any general questions, or those relating to research discussed here?  
**\<suraeNoether>** why are they called elliptic curves  
**\<sarang>** -\_\_\_-  
**\<suraeNoether>** think i'm going to start a novelty twitter account called surae\_googling  
**\<sarang>** is the supermarket open today  
**\<Xeagu>** I'll follow  
**\<sarang>** heh  
**\<Xeagu>** It is April 1st  
**\<sarang>** Well, we can wrap up soon... on to 4. ACTION ITEMS  
**\<nioc>** surae\_ducking  
**\<sarang>** I will continue working on CLSAG stuff, to move the testing along  
**\<sarang>** and continue Lelantus investigation as available  
**\<sarang>** (but this is lower priority of course)  
**\<sarang>** suraeNoether: ?  
**\<suraeNoether>** i'm finishing up my tech note on teh security and benefits and applications of clsag and pass them onto sarang for review. i want them posted by the end of hte week since the scheme is so straightforward. i'm also going to seek inspiration: https://twitter.com/RikerGoogling/status/1112758935973322752  
**\<sarang>** sigh  
**\<sarang>** We are all April Fools on this day  
**\<sarang>** any other action items of note?  
**\<suraeNoether>** btw guys, i'm not kidding about CLSAG being useful for colored monero, even though its' april 1  
**\<suraeNoether>** my april 1 jokes are more like "haha i put almond milk in my wife's coffee instead of cow's milk, take that lady"  
**\<dEBRUYNE>** When are the conference tickets supposed to go up for sale btw?  
**\<suraeNoether>** dEBRUYNE: mere dozens of hours  
**\<suraeNoether>** the early bird tickets anyway  
**\<dEBRUYNE>** Cool  
**\<Xeagu>** Allergic to almonds  
**\<suraeNoether>** i'll post in here and -community and on reddit and twitter when they are available, and i'll ask for some amplification  
**\<dEBRUYNE>** Awesome  
**\<suraeNoether>** also i have the last pile of abstracts to go through and the schedule to finish organizing.  
**\<sarang>** All right, well thanks to everyone for attending this quick research meeting. Discussion on topics can of course continue, but let's go ahead and formally adjourn  
