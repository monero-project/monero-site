---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-03-26
summary: MRL work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>** Sarang is apparently en route from an airport and is not expected to make it for the meeting. So today i'll just babble a bit  
**\<suraeNoether>** and answer questions  
**\<rehrar>** Remind me, was he presenting at that Blockchain conference?  
**\<suraeNoether>** yes, that's why he's en route from the airport  
**\<suraeNoether>** he took it upon himself to disabuse some folks of some certain notions about hashgraph  
**\<suraeNoether>** which I think is neat  
**\<suraeNoether>** specifically, he's been reading a lot about graph-based currencies, and someone gave a rather misleading presentation, but Sarang's presentation (I believe) preceded it and it was an educational moment  
**\<suraeNoether>** but I shouldn't speak for him, I wasn't there. the conference organizers flew him out to give a presentation on behalf of MRL and I have confidence he did a great job representing us  
**\<rehrar>** Will it be posted online?  
**\<suraeNoether>** he can answer that later today. I don't know.  
**\<rehrar>** ok, thanks  
**\<suraeNoether>** So, before we proceed, does anyone have any other general questions for MRL?   
**\<sgp\_[m]>** Sorry I'm here but mostly distracted by class. Looking forward to hopefully viewing the presentation online  
**\<suraeNoether>** ok, neato burrito. So, basically this week I've 1) been putting some copy-editing changes into the multisig paper like spelling and references 2) working on models of the spend-time distributions vs. ring mixin selection distributions, and 3) while driving between albuquerque and denver, I think I came up with a novel ECC signature scheme from one-way functions (staring into the desert sun), but I'm not  
**\<suraeNoether>** putting a lot of effort into that until I have more of a handle on spend-time distributions  
**\<suraeNoether>** I've also 4) been building the MRL Research Roadmap for 2018. I need to discuss with sarang, but I think we'll be putting that out mid-May, because we want to have a complete look at what's going on  
**\<suraeNoether>** uhm, also I've spent an enormous amount of time this week on a certain project for MRL related to churning and the EAE scenario. details to come later on  
**\<hyc>** sounds cool  
**\<rehrar>** if hyc thinks it's cool, then it's cool  
**\<suraeNoether>** hyc and I have been chatting about an asic-unfriendly POW expansion, also  
**\<sgp\_[m]>** I'm highly looking forward to seeing your work with EAE  
**\<hyc>** yes and I'm now digging back into the bulletproofs paper to try to get more solid understanding  
**\<suraeNoether>** namely, if instead of a POW game like: find nonce x such that H(block || x) \* difficulty < target.... we can run a POW game like: find a nonce x such that, for a random bit of javascript J(x) that is loop-free, H(block || J(x))\*difficulty < target  
**\<suraeNoether>** this was the idea hyc originally brought to my attention, but verification requires executing the code, so I was thinking instead it could be a random arithmetic circuit instead. then you can present bulletproofs that you know the nonce x such that H(block || AC(x))\*difficulty < target efficiently  
**\<rehrar>** oh yeah, I remember you guys discussing something like that. Just to clarify for me cuz it was a bit confusing at the time. The idea is that CPUs and GPUs compile code better than ASICs would, correct?  
**\<hyc>** compile and execute  
**\<suraeNoether>** the idea is that if the code is random, then an asic will presumably not even be able to compile the code, let alone execute it, but a cpu is built to deal with arbitrary code  
**\<suraeNoether>** maybe this is a bad analogy, but I think of an ASIC as a big manufacturing factory, fully automated. it makes lemon cakes. the random code you just spit out asked for a rotisserie chicken  
**\<rehrar>** making it so that an ASIC would have to be built with a CPU, which defeats the purpose because might as well have a computer at that point, right?  
**\<hyc>** that's the general idea yes  
**\<rehrar>** great, I understand now. Thank you for explaining. :)  
**\<suraeNoether>** yeah, it shifts the bottleneck away from the highly asic'able hash to finding the nonce for the hash, kinda  
**\<suraeNoether>** which is quite clever  
**\<endogenic>** hack the planet!  
**\<rehrar>** if this idea pans out, we can even do some looking into seeing if the random stuff can do something useful as well?  
**\<hyc>** useful?  
**\<rehrar>** never mind, this is something I know too little about. Sorry. Plz continue.  
**\<hyc>** the code must be highly random and unpredictable  
**\<hyc>** if it does something useful, that can be ASIC'd  
**\<endogenic>** rehrar: use the heat to warm your chickens  
**\<hyc>** there ya go  
**\<rehrar>** can the chickens consume the arbitrary code?  
**\<ArticMine>** The random code can provide space heating and in many parts of the world that is useful  
**\<suraeNoether>** does anyone have any other questions? i can sketch out my new signature scheme if folks are curious, but it'd be more of an algebra discussion. :D  
**\<ArticMine>** Sure  
**\<suraeNoether>** Cool. So, definition: a cartesian square of groups is a set of four groups and four group homomorphisms arranged in a square satisfying \*one weird property\*  
**\<suraeNoether>** https://www.irccloud.com/pastebin/XXZjHHp0/  
**\<suraeNoether>** So the square looks like this  
**\<suraeNoether>** and the property is this: if group elements from B and C end up \*at the same element\* in D, then they must have \*come from\* the same element in A  
**\<endogenic>** scientists hate it!  
**\<suraeNoether>** denoting the top map f, the left map g, the rihgt map h, the bottom map j, this means: if there exist some b in B and c in C such that j(c) = h(b), then there exists some a in A such that b = f(a) and c = g(a)  
**\<suraeNoether>** so I'm going to set A to be my private key group Zq, and D to be my public key group G  
**\<suraeNoether>** and i'll just assume the middle groups B and C are also equal to my public key group  
**\<suraeNoether>** then a message M can give me a signature this way: from M, build a one-way map from Zq (private keys) to G (signatures) called SIGN and a one-way map from G (signatures) to G (public keys) called VER  
**\<suraeNoether>** to sign the message, I evaluate my private key SIGN(x) and get a group element, my signature. To validate this game from me, I evaluate VER at my signature and check that the result is my public key, VER(SIGN(x)) = X  
**\<suraeNoether>** so my signature is SIGN(x) and the function VER  
**\<suraeNoether>** each message M has a different pair of one-way functions SIGN and VER  
**\<suraeNoether>** to forge this, I need to find a group element S such that VER(S) = VER(SIGN(x)) for someone's honestly computed SIGN(x), but that requires breaking the one-way-ness of all the arrows in my square  
**\<suraeNoether>** \*this is all great in theory, but i have no implementation yet. :P\*  
**\<suraeNoether>** oh, i missed a word: in the definition of the cartesian square, the diagram has to be commutative. so if I traverse from A to D along one path (through B), I get the same result as if I had traversed the other path (through C)  
**\<suraeNoether>** and that is \*critical\*  
**\<suraeNoether>** so, to construct an implementation, I need a way to map from message space to the space of one-way group homomorphisms to get SIGN and VER, and then I need to mod out by the ideal generated by all the functions that don't satisfy the cartesian property  
**\<suraeNoether>** more recently cartesian squares (mid-late 20th century terminology) have been called "pullback diagrams," and I haven't found any descritpions in the literature of EC-based digital signatures based on them  
**\<suraeNoether>** that doesn't mean that this is a novel signature scheme, only that I haven't found any old references to them. I'm emailing around asking folks, and if anyone comes across anything, please let me know  
**\<suraeNoether>** to forge this... <--- also, i need to find a message M such that VER is the one-way function derived from M to compute a forgery  
**\<suraeNoether>** okay, abstract algebra/category theory lecture done. :P hehe  
**\<hyc>** whew ;)  
**\<suraeNoether>** ikr what a blowhard  
**\<suraeNoether>** also s/game/came  
**\<hyc>** I think I missed a part, can you explain again the bit after "now listen carefully" ?  
**\<suraeNoether>** "i think a few pages back, you missed a negative and the error propagates. I would have said something, but you were so excited about proving P=NP"  
**\<hyc>** lol  
**\<suraeNoether>** does anyone have any questions for MRL? I believe sarang is going to be posting another FFS to fund the third audit later today or something?  
**\<rehrar>** how much extra is going to be needed?  
**\<rehrar>** and did we sign off on anyone getting started already?  
**\<suraeNoether>** rehrar I don't know, and I don't know. i believe nioc was encouraging us to not worry about getting it funded and to just post it so we can get the process moving, but I don't want to speak for him.  
**\<rehrar>** got it  
**\<suraeNoether>** and sarang will be back later today to talk about that  
**\<suraeNoether>** days like today, i want to hire a suresh noether  
**\<suraeNoether>** okay, next meeting, I want to talk about planning the first monero conference, and planning travel for sarang and i to other conferences between now and then  
**\<suraeNoether>** i'm actually attending a bitcoin/blockchain event on april 25 in denver at one of the venues i'm looking at for the monero conference   
**\<suraeNoether>** and I have a few meetings next week about it too  
**\<suraeNoether>** other than that, I got nothing left to chat about  
**\<nioc>** rehrar: I believe Bunz and QuarksLab have already been signed  
**\<suraeNoether>** i also want to chat next week about how is everyone satisfied with MRL. I want to gauge the community on direction, depth, breadth, leadership, funding models/goals etc.  
**\<rehrar>** cool, thanks nioc  
**\<suraeNoether>** so, with that, i want folks to think about what you would say to me if you had me face-to-face. :D  
**\<rehrar>** oy, I need to talk with the two of you fairly soon. It's already Revuo time again.  
**\<suraeNoether>** rehrar i believe i'm dragging sarang out to denver for that blockchain event. make it up here around that time and maybe we can make it a MAGIC board member meeting + revuo intervuo.   
**\<suraeNoether>** we'll drag mike from the moneromonitor by. :P it'll be historic~  
**\<suraeNoether>** \</meeting>
