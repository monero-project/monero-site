---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2017-10-30
summary: Multisig, hash-based accumulators, blockchain protocols, quantum-hard shuffle PRNG, educational outreach, and miscellaneous
tags: [dev diaries, crypto, research]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<sarang>** Let's go  
**\<suraeNoether>** Welcome everyone, to our second official (third unofficial) research meeting. fluffypony dEBRUYNE luigi1111 knaccc  
**\<suraeNoether>** uhm... ArcticMine... uhm... who else should we ping? moneromooo  
**\<luigi1111w>** official counts toward unofficial?  
**\<suraeNoether>** endogenic  
**\<suraeNoether>** is an official meeting also unofficial? is it a subset relation? anyway  
**\<suraeNoether>** kenshi84 too  
**\<suraeNoether>** ok so, I don't really have an agenda. I want me and sarang to share with the group what we've been doing these past few weeks, and if anyone else has been doing any interesting research, let's talk about it  
**\<suraeNoether>** sarang, you wanna go first?  
**\<sarang>** Sure  
**\<sarang>** I've been working a lot of readings mainly on some interesting new stuff  
**\<sarang>** Hash-based accumulators are becoming a thing  
**\<sarang>** where you can use interesting pairing relations to prove membership or nonmembership in a set  
**\<sarang>** the nifty part is that the manager of the set is untrusted  
**\<suraeNoether>** you've mentioned those several times. are all hash-based accumulators based on pairings crypto?  
**\<suraeNoether>** or are you using pairing differently  
**\<sarang>** Oh, I mean the structure involves pairs of elements as opposed to single elements  
**\<suraeNoether>** ah, ok  
**\<sarang>** This is a newer structure that gives nice efficiencies  
**\<suraeNoether>** so can we use a hash-based accumulator without a trusted set-up to do something *akin* to ring signatures?  
**\<sarang>** That's my interest  
**\<sarang>** The security models would have to be analyzed in that new context  
**\<silur>** sarang does the order of these pairs have any effect on the security?  
**\<sarang>** None  
**\<silur>** okay  
**\<sarang>** What it does  
**\<sarang>** is give you a fast way of demonstrating membership or nonmembership  
**\<sarang>** by using the pairings akin to an ordering  
**\<hyc>** ... reminds me of bloom filters, fast set membership  
**\<suraeNoether>** hyc i'm sorry i forgot to ping you  
**\<hyc>** no prob  
**\<sarang>** I've also been continuing investigations into aggregate signatures, something surae brought to my attention a while back  
**\<sarang>** the idea being that you can compress a set of signatures down to a single one  
**\<suraeNoether>** hyc bloom filters do fast set non-membership, not fast set membership, but both are based on hashes  
**\<sarang>** Verification is still linear  
**\<sarang>** but space is constant  
**\<sarang>** There is of course a downside, which is that it requires a bilinear map between groups with particular properties  
**\<sarang>** It's apparently still an open question whether it's possible to construct an aggregate that doesn't require full linear verification  
**\<suraeNoether>** i didn't realize agg sigs used pairings  
**\<sarang>** The ones I've seen use bilinear maps to allow for third-party verification  
**\<sarang>** It's a clever and fairly simple setup  
**\<suraeNoether>** i found a few new sorts of signatures we maybe could look into, i have a list  
**\<sarang>** What gets into the weeds is the way the security models account for it all  
**\<sarang>** And there are some caveats dealing with repeated messages  
**\<sarang>** Of course, subaddys went out already  
**\<sarang>** SPECTRE is something that's on the radar for surae and I  
**\<suraeNoether>** andytoshi linked his slides about atomic swaps and at least one type of sig i'm not totally familiar with was mentioned, and I forget what it's called. Aggregator signatures? or something like that.  
**\<sarang>** And I'm still working on new work on proofs of proof-of-work  
**\<sarang>** that, if implemented ideally, could offer significant savings in blockchain space/analysis  
**\<sarang>** Logarithmically  
**\<suraeNoether>** the past several weeks, i've been putting several hours a day into multisig... current version I will link tomorrow. I have had to modify the scheme to take into account multiple outputs, which isn't a huge deal, but changed notation throughout the paper pretty significantly, so  
**\<sarang>** It's an ever-moving target  
**\<suraeNoether>** i will link the current version tomorrow after i give it yet another read-through  
**\<suraeNoether>** yeah, ring multisignatures are delicate  
**\<suraeNoether>** but i've also been looking into spectre, as sarang mentioned  
**\<suraeNoether>** i have a current working implementation on my github... but it takes quadratic time N^2 to organize N blocks  
**\<suraeNoether>** which is not scalable  
**\<sarang>** You wanna mention that email?  
**\<suraeNoether>** i contacted Sompolinsky, one of the authors  
**\<suraeNoether>** yeah  
**\<suraeNoether>** I asked about the constant-time implementation they claim, and he got back to me  
**\<suraeNoether>** my intuition about how to make this constant time was correct.... the algorithm can determine the order of leaves without any input from parents, grandparents, or grand\*parents of those leaves  
**\<suraeNoether>** so working from the leaves backwards, and only organizing a constant number of blocks is sufficient to get computation time down to constant  
**\<sarang>** But at a yet-to-be-analyzed cost  
**\<suraeNoether>** which is sort of a cheat  
**\<suraeNoether>** yes  
**\<suraeNoether>** there is an attack where someone purposely chooses a block deep into the blockDAG  
**\<suraeNoether>** this forces each node on the network to organize deeply into the blockDAG, which best case is a quadratic experience. pretty nasty.  
**\<suraeNoether>** my first thought was our traditional split between full nodes and lightweight nodes  
**\<sarang>** So it struck me as basically a DoS?  
**\<suraeNoether>** uhm... kinda. it's DoS in the sense that ostensibly *honest* blocks can be used in the attack  
**\<suraeNoether>** and it's not really an attack in a security sense, it's an attack that forces miners to blow CPU power  
**\<sarang>** Right  
**\<sarang>** That's what I mean  
**\<suraeNoether>** so my first thought was full nodes that organize the top 2% of the blockDAG all the time, and lightweight nodes that only go back a certain \# of generations from the leaves and avoid blocks too close to the genesis block  
**\<suraeNoether>** both sorts of nodes can do their thing in constant time. the full nodes will have larger constants, the lightweights will have smaller constants  
**\<sarang>** So this reminded me of the discussion from a while back about ignoring blocks that are old enough  
**\<sarang>** and the pros and cons of doing so...  
**\<suraeNoether>** well we already reject blocks if their timestamps are outliers  
**\<sarang>** So you think maybe the attack is irrelevant due to the time constraint?  
**\<suraeNoether>** the timestamp isn't really the problem, it's where the block is placed in the tree. and we can't really reject blocks that are too deep into the blockDAG, because I don't see a good way for two different miners to agree what "too deep" means  
**\<suraeNoether>** i think doing a full/light sort of split as above will avoid the attack for the most part, but it will tweak incentives  
**\<suraeNoether>** but it's ... tricky  
**\<suraeNoether>** anyway  
**\<suraeNoether>** that's what i've been doing  
**\<suraeNoether>** oh, on multisig, I mentioned this earlier this week, but i'm getting quite confident we'll be done with it pretty soon. code review is moving forward bit by bit (heh)  
**\<suraeNoether>** is anyone else working on any interesting projects? i know that we've had discussions in here recently about PRNG and such, and I'm curious about what people are working on  
**\<sarang>** Oooh yes, PRNG  
**\<sarang>** I have no further updates, since I'm not sure if the devs took any definitive action it  
**\<sarang>** There was also an observation about the use of keccak vs. SHA-3  
**\<silur>** I'm working on a quantum-hard shuffle that can be used to construct PRNG-s  
**\<suraeNoether>** silur: freaking awesome. by "working on" do you mean... writing a paper? working on code?  
**\<silur>** writing a paper  
**\<suraeNoether>** and what makes a shuffle "hard"? trying to un-shuffle?  
**\<sarang>** Determining the end state w/o going through all steps?  
**\<silur>** trying to reveal the previous state of the elements of the set  
**\<silur>** or "peeking under the cards"  
**\<sarang>** Nice, so it's a one-way function  
**\<suraeNoether>** yup  
**\<suraeNoether>** very cool  
**\<suraeNoether>** are you a student, a professor, a hobbyist, silur?  
**\<suraeNoether>** i still haven't read that shuffle paper you sent me :(  
**\<silur>** I'll be a prof from next september on crypto  
**\<sarang>** Congrats!  
**\<suraeNoether>** congratulations!  
**\<silur>** I'm at the edge of leaving ethereum foundation currently  
**\<silur>** thanks :)  
**\<sarang>** Any other interesting projects?  
**\<sarang>** Or suggestions on directions to go?  
**\<unknownids>** congrats!  
**\<suraeNoether>** i'm also reading up on succinct posets, which are ... a new datastructure. btw for anyone curious, every DAG induces a poset and every poset is a DAG  
**\<suraeNoether>** data structure\*  
**\<sarang>** Yeah, that poset paper looks quite interesting  
**\<suraeNoether>** they are significantly more compact than representing a DAG using upper triangular matrices, and they allow for constant time to determine whether one item precedes another  
**\<sarang>** I find the tradeoffs between storage and time to be always fascinating  
**\<suraeNoether>** so using those instead of the data structures i was coidng is going to lead to about a 75% reduction in computation time (but that's still quadratic...)  
**\<silur>** wow  
**\<suraeNoether>** https://arxiv.org/pdf/1204.1957.pdf  
**\<suraeNoether>** and lastly, one more thing i'm kind of casually thinking about is andytoshi's idea for outputs where "addresses change." my best idea so far is to have each output be addressed to a *set* of destination addresses, each with their own timelock, but all sharing a key image (somehow)(  
**\<suraeNoether>** really the challenge is to come up with a representation of a single key image for a single output but with multiple destination addresses each with their own timelock  
**\<suraeNoether>** or rather: this would be one possible solution to the atomic swap refund transaction problem andytoshi brought up the other day.  
**\<suraeNoether>** and that's all i have been working on  
**\<suraeNoether>** other than silur, is anyone working on anything fun?  
**\<suraeNoether>** or not fun as the case may be  
**\<sarang>** http://nick.mtvnimages.com/nick/promos-thumbs/videos/spongebob-squarepants/spongebob-squarepants-fun-song-16x9.jpg?maxdimension=&quality=0.60  
**\<suraeNoether>** okay  
**\<moneromooo>** About PRNG: I ported the Bitcoin PRNG to monero, it's on github if anyone is curious.  
**\<moneromooo>** I added a contentious patch, so that one will either go, or be modified.  
**\<suraeNoether>** is the PRNG the contentious part or?  
**\<moneromooo>** I added seeding from /dev/random at startup.  
**\<sarang>** Can you link moneromooo ?  
**\<suraeNoether>** oh i see heh  
**\<moneromooo>** smooth thinks it should only be done if getrandom is not used, so I'll probably do this.  
**\<suraeNoether>** i don't know enough about the various pros and cons of that approach to have an opinion  
**\<suraeNoether>** on an administrative level, sarang: any word on the weekend course for talented high school students thing? i'm going to contact folks at the local universities around me this week to feel out the possibilities for a 2018 1-week summer workshop for undergraduates.  
**\<moneromooo>** https://github.com/monero-project/monero/pull/2731  
**\<suraeNoether>** thanks moneromooo  
**\<sarang>** Ah yes, thanks for the reminder surae  
**\<sarang>** So there has been interest expressed in two school programs  
**\<suraeNoether>** if you want we can collab on the proposal for the springtime one  
**\<sarang>** One would be a longer-term effort to work with North Carolina STEM students  
**\<sarang>** A shorter but logistically-simpler one is with Duke University for a spring weekend course for gifted high schoolers  
**\<sarang>** That's a bit tougher due to the extremely short course time  
**\<suraeNoether>** yeah, i like the idea of spending a week or three with undergrads to teach them about crypto and maybe fork bitcoin or monero and mess with the code or something....  but i'm not so sure how much we can even do over one weekend with high school students  
**\<sarang>** So maybe it's better to nix the weekend course idea and try for the longer course?  
**\<sarang>** I don't have a good sense of the logistics required for that  
**\<sarang>** But I'm investigating still  
**\<sarang>** Another option is to do a Duke summer program that's 3 weeks long  
**\<suraeNoether>** sarang let's try to set aside a few hours this week to figure out logistics of this. i would love for the monero community to fund up some education programs. that's good PR for everyone, and starts a pipeline of education into the cryptocurrency world... but i don't want to burden the monero community unnecessarily (for one thing) and if we can get a university to devote some money to this too, it  
**\<suraeNoether>** adds legitimacy  
**\<sarang>** The Duke summer one wouldn't require any funding from the community  
**\<sarang>** since students are paying to go to it  
**\<suraeNoether>** ok, so we have the Duke TIPP thing as a possibility there to reduce the burden on the community  
**\<sarang>** Yep, and because they already have a supply of gifted students identified  
**\<suraeNoether>** and maybe the first summer we should do something like that rather than taking point ourselves on organizing the program  
**\<sarang>** Let's talk about that option  
**\<suraeNoether>** cool  
**\<sarang>** I've proposed new summer courses before. It's more involved than the weekend ones, but not bad at all  
**\<sarang>** We both meet the instructor qualifications  
**\<suraeNoether>** can you put out feelers in that direction and then we can talk about the responses you receive later this week?  
**\<sarang>** Can do  
**\<suraeNoether>** cool  
**\<sarang>** I need to find the timeline for new course proposals for the summer. We may have missed it already  
**\<suraeNoether>** oh, that would suck  
**\<sarang>** Yeah, I'll check  
**\<sarang>** They're always hunting for new STEM courses though  
**\<sarang>** So they might make an exception  
**\<sarang>** especially for me :D  
**\<suraeNoether>** ok, maybe make a call or shoot an email today then, keep me updated  
**\<suraeNoether>** okay, anyone else have anything they want to discuss?  
**\<sarang>** Just emailed the bosses  
**\<suraeNoether>** cool  
**\<suraeNoether>** Okay, well if no one has anything else for now  
**\<knaccc>** I was kinda wondering if you could give a brief explanation of whether bileanear pairings might be good for the future, for people like me who have no idea what it means  
**\<suraeNoether>** aha  
**\<sarang>** Surae, wanna take this?  
**\<suraeNoether>** actually not at all  
**\<knaccc>** hehe  
**\<suraeNoether>** ha  
**\<suraeNoether>** okay i will  
**\<sarang>** lol  
**\<suraeNoether>** ok knaccc so... bilinear crypto is essentially a way of taking an easy group and gluing it with  hard group into a pair. And you do operations on the pair of curve points instead of an individual curve point. tthis is on it's own, useless  
**\<silur>** surae you just opened a world before me saying that posets are isomorphic to DAGs how I didn't notice this \<3  
**\<suraeNoether>** silur my dissertation is aaaaaal about po-groups  
**\<suraeNoether>** if, however, you have a "bilinear pairing"  
**\<suraeNoether>** you can move stuff from one of these two groups to the other  
**\<knaccc>** so bilinear pairingss still use e.g. curve25519/ed25519?  
**\<sarang>** One useful case is aggregate signatures that use exponentiation  
**\<suraeNoether>** afaik there are not many curves compatible with bilinear pairing  
**\<sarang>** The transfer between groups is what allows for verification  
**\<suraeNoether>** hence CSW's weird meltdown on twitter  
**\<knaccc>** ah so it'd be a diffferent curve that would have to be used then?  
**\<sarang>** Yeah, it's an idealization right now  
**\<suraeNoether>** so, a really dumb way to describe it is: if i need to know something about (A,B+C), I can hit it with the bilinear pairing e and treat that like (A+C,B)  
**\<suraeNoether>** or rather  
**\<knaccc>** and what's an easy group vs hard group?  
**\<suraeNoether>** oh, like Zq versus X25519  
**\<knaccc>** oh i see  
**\<suraeNoether>** with bilinear pairings, the DDH problem is trivial to solve  
**\<sarang>** You can also look at hardness as meaning hardness assumptions of problems  
**\<sarang>** yeah  
**\<suraeNoether>** *nod*  
**\<sarang>** So the security definitions get really picky, for good reason  
**\<knaccc>** are you aware of any performance implications of bilinear pairings  
**\<suraeNoether>** yeah so, a linear function is one that behaves like this: f(a\*X + b\*Y) = a\*f(X) + b\*f(Y).  a *bilinear* function has two inputs instead of one, (a\*X+b\*Y, c\*Z + d\*W), and it behaves linearly in each coordinate  
**\<suraeNoether>** knaccc i am not  
**\<sarang>** It would depend on the groups and the mapping  
**\<sarang>** I think the current implementation limitations mean there hasn't been solid analysis on that yet  
**\<suraeNoether>** did everyone see Craig Wright embarassing himself about this stuff, btw? on reddit and twitter  
**\<sarang>** Also depends on our use case  
**\<sarang>** Signature aggregation is just one application that sparked our interest  
**\<sarang>** No!  
**\<sarang>** Link plz surae  
**\<knaccc>** can you define signature aggregation?  
**\<suraeNoether>** oh haha  
**\<suraeNoether>** https://www.reddit.com/r/Bitcoin/comments/79bnox/vitalik_and_uandytoshi_calling_out_csw_for_his/?utm_term=7fd17439-49d1-4d0f-90c7-a42272b3f896&utm_medium=search&utm_source=reddit&utm_name=frontpage&utm_content=1  
**\<suraeNoether>** CSW claims he invented bitcoin and he used the secp256k1 curve because it's compatible with bilinear pairings  
**\<silur>** ahahhaha :D  
**\<suraeNoether>** and while that is kind of technically true, you need to store 10^70 or more bits, you know, a number comparable to the number of particles in the universe  
**\<suraeNoether>** very entertaining read  
**\<suraeNoether>** knaccc sig aggregation is a way of taking one or more signatures and combining them into a single signature, aggregating them  
**\<knaccc>** for the purposes of saving space, verification time, both?  
**\<sarang>** knaccc you save space  
**\<sarang>** it's constant in the \# of sigs  
**\<sarang>** verification is currently linear  
**\<sarang>** there are implications for things like certificate chains etc.  
**\<knaccc>** ah that leads me to my last quick question: i think someone mentioned that it was 'provable' that verification time had to be always linear  
**\<suraeNoether>** well, ruffing proved that a ring sig scheme is linear in verification time  
**\<sarang>** Agg. sigs are not ring sigs  
**\<knaccc>** ah ok that was my question. it's ring signature specific then  
**\<knaccc>** aha  
**\<sarang>** They can be completely independent sigs  
**\<silur>** do we have the updated ruffCT paper?  
**\<knaccc>** i see  
**\<sarang>** and in fact the messages have to be distinct  
**\<knaccc>** cool thanks sarang suraeNoether  
**\<silur>** I started on overview on that but sarang and surae told me it's outdated  
**\<suraeNoether>** silur i can email you the copy i received from ruffing, but the bootle paper isn't private and ruffing's scheme is "Bootle + regular old multisig"  
**\<suraeNoether>** https://eprint.iacr.org/2015/643  
**\<suraeNoether>** silur the ruffCT scheme basically does this: for each output used in the signature, build a row of a matrix, entries are ring members. for each column of your resulting matrix, you should have a commitment to an amount, and the signature is essentially proving with an NIZK proof that you can open one of the commitments to zero  
**\<suraeNoether>** the idea is that you know the actual keys in one of those columns  
**\<suraeNoether>** but the code on the github is functional and up to date, and if you compare it to the bootle paper i'm pretty sure you'll be able to figure it out without me needing to ask ruffing for more permission to share his paper that says "DO NOT SHARE" on the top lol  
**\<silur>** okay thanks  
**\<suraeNoether>** okay, everyone, I think I'm going to call this meeting (seems like knaccc ran out of questions)  