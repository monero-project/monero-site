---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-06-18
summary: MRL work, DefCon plans, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>** fluffypony knaccc luigi1111 anonimal binaryFate chachasmooth dEBRUYNE endogenic erciccione\_[m] gingeropolous hyc iDunk isthmuscrypto john\_alan JollyMort[m] jwinterm kenshi84 kerber m2049r[m] moneromooo MoroccanMalinois needmoney90 nioc othe philkode pigeons rehrar rrol[m] sarang sgp\_[m] stoffu unknownids vtnerd waxwing, research meeting in three minutes~  
**\<suraeNoether>** and of course UkoeHB who is already here and aware :D  
**\<silur>** it's time \\o/  
**\<ArticMine>** Hi  
**\<rehrar>** hi  
**\<suraeNoether>** 1. Greetings! 2. Work from this past week. I was hoping to chat about BP fees and where they are currently at, i wanted to update folks on the multisignature paper and literature review, I wanted to share a few links to papers I'm reading... and open up the floor to anyone else doing anything fun and math and crypto related. 3. Plans for this upcoming week and defcon?  
**\<suraeNoether>** So, hi everyone :D  
**\<suraeNoether>** does anyone want to add anything to our little makeshift agenda before we get goin?  
**\<suraeNoether>** okay, cool  
**\<suraeNoether>** as far as bulletproofs go, apparently Quarkslab will be done by the end of the week and Benedikt has begun work (I think). Quarkslab has apparently found a few small optimizations, but no bugs so far (but that could be outdated info)  
**\<suraeNoether>** ArticMine: do you want to bring the community up to speed on where we are currently sitting in terms of bulletproofs fees? you've led the charge for a lot of that discussion  
**\<rehrar>** yay ArticMine  
**\<ArticMine>** I have the basic concept down  
**\<ArticMine>** Replacement of the blcoksize with block weight  
**\<ArticMine>** That is linear with an increase in verification time  
**\<suraeNoether>** i believe the last time we talked about this, taking space and time together into account led to a formula that was like n + log(n) in number of outputs.  by picking fees based on n only, this means we are slightly under-compensating miners for large bulletproofs and slightly overcompensating them for smaller ones, leading to a weak batching incentivization without distorting our ideas of cost paid by the  
**\<suraeNoether>** miner in both space and time. since the space paid is logarithmic, its impact is rather small, even for large bulletproofs.  
**\<ArticMine>** This will replace the blocksize in the determination of the penalty. Fees then follow from the penalty based weight calculation using the current formula  
**\<suraeNoether>** \*nod\* are we not modifying the current formula to make overall fees lower?  
**\<ArticMine>** We are not modifying the formula  however the weight will be a lot lower than our current blocksize  
**\<ArticMine>** So we still have to change the minimum fee  
**\<ArticMine>** For a 2 output transaction the block weight will equal the block size  
**\<suraeNoether>** ah i see  
**\<suraeNoether>** we should get a formal description of our proposed bulletproof fee structure out to the community so they can start discussing it soon  
**\<suraeNoether>** so I'll try to put 2-3 hours into that this week  
**\<ArticMine>** What really matters is that as the number of outputs the weight scales linearly with number of outputs  
**\<ArticMine>** I expect to have a formal description out by the middle to the end of next week  
**\<suraeNoether>** cool, let us know if you need more hands  
**\<ArticMine>** After the weekend I expect to have 2-3 days I can dedicate to this  
**\<ArticMine>** There are a lot of details  
**\<suraeNoether>** we have some folks who are interested in contributing to MRL but don't necessarily have a project, so there are lots of eyes we can put on it as well  
**\<suraeNoether>** Allright, moving on  
**\<suraeNoether>** I've been discussing our multisig scheme with UkoeHB and a few other folks. I have contacted one of the musig authors about an issue UkoeHB brought up. It's... causing me sufficient pause to reach out. Essentially, my first (and second and third) reading of the scheme seems to allow for a replay attack  
**\<silur>** our multisig scheme ?= RTRS multisig?  
**\<moneromooo>** no, threshold sigs.  
**\<suraeNoether>** the musig scheme + our scheme. it \*seems\* to allow an honest adversary to be cloned or rewound in a way that may be dangerous. of course, in the musig paper there is a whole section on derandomization and not re-using signature data... this is a \*known issue\* but I'm not sure if their security model is sufficient.   
**\<suraeNoether>** our threshold scheme, not RTRS  
**\<suraeNoether>** so, due to this, i've gone back to some older papers on multisignatures and simulation theory to look into it  
**\<suraeNoether>** right now i'm reading a primer on simulation theory by Lindell, who is a good author and has written a rather comprehensive document on the matter  (pdf link https://eprint.iacr.org/2016/046.pdf)  
**\<suraeNoether>** and i've gone back to some of the original certificate authority and/or KOSK assumption papers because their security models are highly relevant  
**\<suraeNoether>** https://hovav.net/ucsd/dist/agg-sig.pdf  
**\<suraeNoether>** during all this, by the way, I'm taking copious notes on multisignature schemes and old papers for a future literature review  
**\<dEBRUYNE>** ArticMine: Great to hear (about the fee stuff). I, however, hope we're not making it unnecessarily complex  
**\<ArticMine>** The concepts are very simple and elegant if we work at the protocol level and change the penalty from block size to block weight  
**\<suraeNoether>** dEBRUYNE: eh, essentially we are merely changing the fee structure to count the outputs in a block instead of absolute size in bits, or bytes, or kb, or what have you, that's the core idea of the change  
**\<ArticMine>** Strictly speaking we are changing the penalty formula to take into account ^  
**\<suraeNoether>** other than that (deep diving into the simulation theory and the dark corners of the multisig world), I wanted to see what other folks are working on (silur?), and maybe chat about defcon first, a monero conference second, and a MAGIC conference in privacy technologies third. things seem so quiet around here without sarang  
**\<ArticMine>** The fees then follow with essentially no change other than the minimum fee to account fro the much lower overall weight  
**\<rehrar>** sarang was the heart and soul of MRL  
**\<ArticMine>** A very important distinction is that the penalty formula is consensus while the fees are not  
**\<rehrar>** read: was  
**\<ArticMine>** was?  
**\<silur>** I'm continuing my RTRS implementation  
**\<rehrar>** was talking to suraeNoether, ArticMine  
**\<silur>** HCPP invited me to make a demo there  
**\<suraeNoether>** silur are you implementing that on github? have a link?  
**\<silur>** RTRS still needs heavy testing, i kinda tend to do 'if it compiles it's ready'  
**\<silur>** sure  
**\<silur>** https://github.com/Silur/libstringct  
**\<suraeNoether>** tim ruffing contacted me, their scheme has been modified and they are coming out with a newer version of it. as a sample, their signatures are about 1.12 kb for a ring size of 64  
**\<suraeNoether>** thanks silur   
**\<rehrar>** how long is verification for that ring size?  
**\<silur>** great to hear, although the current docs are already outdated  
**\<silur>** would be nice to have that paper out :D  
**\<silur>** are there any sketches on the mods?  
**\<suraeNoether>** he has been loose with details silur, but he contacted me about it tuesday last week and he said he'd get me the paper this week. maybe, maybe not. :P it's how research goes, even at universities like saarlang  
**\<suraeNoether>** rehrar: no idea, i don't wnat to speculate  
**\<suraeNoether>** rehrar but my knee jerk instinct is "about as much time as an LSAG with 128 ring members"  
**\<ArticMine>** Also are there any non linear with size verification times  
**\<suraeNoether>** or "no less than" instead of "about as much time as"  
**\<suraeNoether>** ArticMine: not with a usual ring signature model. technically you could count zk-snarks as sublinear verification time ring signatures that require a trusted set-up, but htere is nothing in the chasm/gulf between our untrusted set-up hash-based ring signatures and the zk-snark world  
**\<suraeNoether>** everything with RTRS has to take around double the amount of time for each group operation, since keys are double in length... and our hash-based set-up is pretty much as close to an information-theoretic minimum allowable in terms of "number of group operations" in order to compute a ring signature, we are very optimal in that regard, very few wasted computations... so "best case" RTRS will be double the  
**\<suraeNoether>** verification time of an LSAG  
**\<suraeNoether>** so, uh... what's up with defcon  
**\<ArticMine>** The bottom line we do not have to deal with a situation similar with bulletproof verification times  
**\<suraeNoether>** who all is going to be at defcon?  
**\<ArticMine>** I am  
**\<ArticMine>** I am alos giving a talk related to the fee question  
**\<ArticMine>** also  
**\<suraeNoether>** nice  
**\<suraeNoether>** i heard something about a booth  
**\<suraeNoether>** i believe that sarang and I both declined actually having an MRL booth, but I'm happy to sit around at the monero booth for awhile, presuming... we have a booth (and now the word booth is meaningless, it's been said too much.  like the word kiosk)  
**\<rehrar>** hmmm....then there was a misunderstanding  
**\<rehrar>** I thought it was "we'd man the booth if there was one, but not for the whole time cuz we want to enjoy the conference"  
**\<rehrar>** I'll communicate and change that right away if I was incorrect.  
**\<suraeNoether>** oh, no, i think i'm mis-remembering  
**\<suraeNoether>** we can totally do a booth  
**\<suraeNoether>** i need to make a t-shirt or something  
**\<rehrar>** it'd probably be split with Kovri temporally  
**\<suraeNoether>** turf warrrrr  
**\<rehrar>** I don't think MRL needs to prepare anything special unless you guys want to  
**\<rehrar>** just sitting at the table and fielding questions would be sufficient  
**\<suraeNoether>** but i want a t shirt ;(  
**\<suraeNoether>** wait that's winking  
**\<suraeNoether>** i meant :\*(  
**\<suraeNoether>** semicolons are so hard to use correctly  
**\<rehrar>** we'll get you a tshirt, but it may not be what you expect  
**\<rehrar>** ;P  
**\<rehrar>** anyways, nothing else regarding defcon as far as I know  
**\<suraeNoether>** okay, so, in terms of other conferences, we originally had this idea to have the first Monero conference in Denver next spring, perhaps funded or hosted by the MAGIC non-profit (me, rehrar, sgp, and sarang and some non-monero-related people)  
**\<suraeNoether>** but we are trying to keep MAGIC more or less separate from Monero, (we are looking for some non-monero members to be on the board) becuase it's an educational organization, not a project-oriented one  
**\<suraeNoether>** so we are going to host the MAGIC conference as a general privacy enhancing technology conference instead  
**\<suraeNoether>** and all funding for that will be through MAGIC, we won't be starting an FFS for that  
**\<suraeNoether>** totally independent  
**\<suraeNoether>** BUT  
**\<suraeNoether>** the monero community deserves a freaking technical conference!  
**\<suraeNoether>** so i wanted to get the community's thoughts on starting a Monero conference-specific FFS. If I took charge of this, I would hire an event organizer to take care of a lot of it and spend time trying to get speakers for the conference.  
**\<silur>** FFS?  
**\<suraeNoether>** forum funding system  
**\<silur>** oooh  
**\<endogenic>** cool, go for it  
**\<silur>** great  
**\<silur>** really sorry I gotta run  
**\<silur>** best to y'all  
**\<suraeNoether>** ta silur  
**\<suraeNoether>** okay, the way i figure it, the monero conference is a good use of MRL resources and time, so I'll post it under ideas with the current estimated price tag and we'll see what happens from there. i think anything over-funded should go to the general fund  
**\<suraeNoether>** well, we're rounding up on the hour here  
**\<suraeNoether>** does anyone have any questions?  
**\<suraeNoether>** maybe about the proceedings at MRL, what's going on recently and what's going to be going on over the next few weeks, any other general questions?  
**\<suraeNoether>** (my favorite color is blue and i'm probably a taurus and i like long walks on the beach)  
**\<rehrar>** hmmm...  
**\<rehrar>** I think I'm a gemini, would we work well together?  
**\<rehrar>** Or am I a something else?  
**\<dEBRUYNE>** ArticMine: Sounds interesting. Looking forward to the details of your fee proposal  
**\<nioc\_>** a question earlier from the lounge >>  \<lenovuh> some while ago, was there a discussion about letting new nodes bootstrap the blockchain quickly, that required new crypto techniques, afaik? i might have this completely wrong, but think i read about it in the research-lab channel  
**\<m2049r[m]>** if the meeting is over i would like to get back to the topic of exposing the index of a subaddress - from what i understood there are mixed statements about this. it may be a problem and it may not be. ??!?  
**\<suraeNoether>** nioc\_: not sure about htat  
**\<suraeNoether>** yeah, we can call this meeting over :D  
**\<suraeNoether>** thanks everyone \</meeting>  
