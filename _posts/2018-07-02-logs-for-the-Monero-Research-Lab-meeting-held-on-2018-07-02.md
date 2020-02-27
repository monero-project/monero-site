---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-07-02
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** First, greetings  
**\<needmoney90>** Yawns\*  
**\<sarang>** well, greetings  
**\<needmoney90>** Hopefully a little more people than the Dev meeting, but prolly not, because of the holidays  
**\<sarang>** For my sake at least, I'm very interested in the current state of folks' projects or undertakings  
**\<needmoney90>** Does Merkato count?  
**\<serhack>** Hi :)  
**\<serhack>** Does Mastering Monero count?  
**\<sarang>** fo sho  
**\<needmoney90>** Currently one of the next steps for Merkato is calculating the optimal spread, which is some fun math that scares me  
**\<sarang>** elaborate?  
**\<sneurlax>** Hi all, small update and that's it, I quit my job so I'm resuming work on my small project related to scraping mining pools.  I apologize it took so long, but my job got incredibly demanding incredibly quickly...  So I quit!  
**\<luigi1111w>** that's what I do when the going gets tough  
**\<needmoney90>** https://arxiv.org/pdf/1606.07381.pdf  
**\<needmoney90>** Starts on describing the optimal spread Calc  
**\<needmoney90>** I need to dive into it  
**\<sarang>** interesting!  
**\<sarang>** I finished up my teaching and also worked with the auditors more  
**\<sarang>** QL and Kudelski are finishing up reports  
**\<sarang>** There was, of course, also the twitteresearcher  
**\<hyc>** all hail twitter  
**\<sarang>** His notes about subgroup checking were also identified by our audit  
**\<sarang>** and will be incorporated into some easy checks on the code  
**\<silur>** as far for me on RTRS-StringCT I didn't have any advance on testing for the last 2 weeks :(  
**\<silur>** neither on Lattice-based bulletproofs  
**\<sarang>** suraeNoether sent me more details on sublinear ring sigs but that was just yesterday  
**\<sarang>** I'm sure he will have more to say on this  
**\<serhack>** I just need a technical feedback because I am not sure I wrote anything correctly in Mastering Monero. You can read by viewing this pdf https://masteringmonero.com/book/preview.pdf . Thanks! :)  Feel free to message me for any inputs!  
**\<silur>** yea that's why RTRS is on hold now, the scheme changed a lot since I started implementing  
**\<sarang>** yes indeedy  
**\<suraeNoether>** eek, time got away from me. sorry about that everyone! i'm here, i swear, i'm writing a document on blockdags and got excited :(  
**\<sarang>** The incorporation of an internal range proof is intriguing  
**\<sarang>** suraeNoether: what about blockdags?  
**\<sarang>** go on  
**\<suraeNoether>** oh, i think i have a "fast" version of a blockdag based approach to transactions sort of similar to spectre  
**\<suraeNoether>** i'm looking at convergence rates and such  
**\<sarang>** Ah, new work?  
**\<suraeNoether>** yeah. going into details, the problem with blockdag schemes is ordering blocks that aren't linked to each other (so-called "antichains")  
**\<sarang>** correct  
**\<sarang>** that's the hangup in computation  
**\<suraeNoether>** and i think I realized a structure built into the blockdag approach that allows for a rather fast linear ordering of otherwise unordered blocks  
**\<sarang>** that would be hugely useful!  
**\<suraeNoether>** in the end, if all these different metrics end up being equal, you end up hashing block headers either way, so the probability of two blocks having the same place in the line is negligible either way, and it should be quick  
**\<sarang>** What other projects have kept you busy during my absence suraeNoether ?  
**\<suraeNoether>** oh gosh, i made commits to my PoissonGraphs project, which allegedly spits out a human-readable cryptocurrency network simulation's transcript... and i've been communicating with tim ruffing about his new sublinear ring signature scheme...and I've been trying to get a handle on the multisig KOSK setting and UkoeHB's rewind/replay problem.  
**\<sarang>** excellent  
**\<sarang>** Anyone else with news or updates? I have a month of "lack of knowledge" to account for!  
**\<silur>** @suraeNoether pls relay any info on RTRS from ruffiing if available!  
**\<suraeNoether>** i believe we've spoken about the twitterstorm "problems with bulletproofs and ed25519" thing?   
**\<sarang>** yes  
**\<sarang>** Here's the lowdown  
**\<sarang>** I thought we were performing key checks at a lower level already, but I was mistaken  
**\<sarang>** After speaking with the auditors (who also noticed this), they recommended adding some checks  
**\<sarang>** for subgroup membership and point-at-infinity  
**\<sarang>** as well as checking for null scalars  
**\<sarang>** However  
**\<sarang>** They, like us, were unable to identify any way that the absence of such checks could be exploited  
**\<sarang>** But this is precisely why we audit  
**\<suraeNoether>** long story short: the bulletproof method uses a group of prime order. we use a group of composite order, and while we restrict all our keys to the prime order subgroup, we didn't have checks to guarantee that someone wasn't feeding non-subgroup elements into the bulletproof as inputs  
**\<sarang>** So, once we deploy bulletproofs, we can get to RTRS and make bulletproofs obsolete =p  
**\<sarang>** basically, yes  
**\<sarang>** it's an easy and fairly cheap thing to check  
**\<suraeNoether>** this leaves open the logical possibility that someone coudl produce a bulletproof that passes the verification algorithm correctly, but does not present a valid proof of the range of the argument. as sarang said, \*there is no way we have yet identified to do this.\* but \*it's a logical possibility\* and we deal in the realm of provable security in this here lab  
**\<sarang>** On a more irritating note, Benedikt indicated on twitter that he had not yet begun his review, which was not indicated in his communications to me, and I've been unable to reach him for details  
**\<suraeNoether>** sarang:  the new RTRS scheme with bulletproofs is faster than the scheme with their "included" range proofs  
**\<suraeNoether>** ...  
**\<sarang>** suraeNoether: ok, haven't looked into newRTRS at all  
**\<silur>** which new? :D  
**\<moneromooo>** By RTRS, you mean the new paper by Ruffing et al ?  
**\<silur>** there's like new-new-new-RTRS :D  
**\<sarang>** lol, the internal paper suraeNoether showed me  
**\<suraeNoether>** let's say RTRS2  
**\<suraeNoether>** it's actually... one sec  
**\<sarang>** the paper was marked to be for internal review only  
**\<suraeNoether>** LRRSTW signatures now. :D  
**\<sarang>** omg no more  
**\<suraeNoether>** different authors than RTRS  
**\<ArticMine>** What are the implications if any for verification cost vs 1) number of outputs, 2) number of rings?  
**\<suraeNoether>** ArticMine: number of rings = ring members?  
**\<sarang>** TBD  
**\<silur>** LRRSTW is even new for me  
**\<sarang>** they have some data  
**\<ArticMine>** yes  
**\<suraeNoether>** ArticMine: eyeballing their results, it looks like we can have 2.4kb, ring-sized 64 signatures that take as much time to verify as (approximately) one of our current ring signatures with ring size 16...  
**\<suraeNoether>** BUT  
**\<suraeNoether>** it's POSSIBLE that the verification time there needs to double  
**\<suraeNoether>** in which case we could go for 2.0kb, ring sized 32 signatures that take as much time to verify as one of our MLSAGs at ring size 8-10  
**\<sarang>** My view is that once we prototype it, we'll get a better sense of the op counts  
**\<suraeNoether>** note: these are actually really huge signatures  
**\<sarang>** and that will tell us verification times  
**\<sarang>** suraeNoether: agree?  
**\<suraeNoether>** sarang: sure, although there is a table of op counts in the back  
**\<ArticMine>** Is there a scaling issue when compared to tx size with increasing the number of ring members?  
**\<suraeNoether>** we can literally compute whether it's worth it to even prototype it  
**\<suraeNoether>** (and i'm doing that calculation this afternoon)  
**\<suraeNoether>** ArticMine: yes, these signatures are sublinear, are almost as fast as our current signatures... but their size constants are bigger than ours, and the sublinearity doesn't become worth it in terms of size until 10-12 ring members  
**\<ArticMine>** Subliner with tx size?  
**\<suraeNoether>** oh i thought you meant by ring member, excuse me  
**\<suraeNoether>** i'm not sure what you mean, then. signature size is related to both the number of inputs and outputs.  
**\<sarang>** Whats the level of incompatibility with what we're doing now?  
**\<iDunk>**  1 sig for all inputs (and outputs), IIRC from yesterday.  
**\<suraeNoether>** unsure yet, i'm optimistic that it doesn't requrie, for example, more group elements in the public key or antyhing like that  
**\<ArticMine>** My question relates to a possible attack by increasing the number of ring members where we are only measuring tx size  
**\<suraeNoether>** oh, if we made a decision like moving to these signatures, i would strongly recommend a fixed ring size, if that helps your thought process on the matter  
**\<sarang>** What would it take to allow \_either\_ signature type, depending on size, if the size were not fixed?  
**\<suraeNoether>** considering this as an option boils down to considering whether or not we are willing to commit to having large, slowish, but rather efficient (with respect to privacy) sigs  
**\<sarang>** just as a thought experiment  
**\<suraeNoether>** no idea  
**\<sarang>** OK  
**\<ArticMine>** Yes that would simplify the issue; however we could also add a weight parameter to increasing the number of ring members  
**\<sarang>** I'll be interested to actually look into this  
**\<sarang>** Moving forward for this month, what's everyone's priorities?  
**\<suraeNoether>** (i think in general keeping around multiple signature schemes is bad business)  
**\<sarang>** Mine are to finalize BPs and then move on to RTRS, while finishing up a few other writeups  
**\<silur>** @sarang it shouldn't take much effort in my opinion  
**\<sarang>** suraeNoether: sure, just a thought experiment  
**\<silur>** to support both  
**\<suraeNoether>** every time i need something to do for an afternoon, i look at the MRL roadmap  
**\<sarang>** I mean a bit longer-term  
**\<sarang>** to help long-range planning  
**\<sarang>** and help us complete things  
**\<silur>** as long as the implementation keeps it's orthogonal design it can be an opt-in  
**\<sarang>** it's easy to get sidetracked with fun new projects  
**\<silur>** temptation of math!  
**\<suraeNoether>** other than my weird blockdag approach, which i'll be sharing with sarang eventually, and my poissongraphs simulations, and multisig + kosk setting stuff... actually, i'm pretty full up. :P  
**\<sarang>** Nice!  
**\<suraeNoether>** and i'll talk about the blockdag stuff after the meeting in some more detail  
**\<sarang>** Yeah I'm interested  
**\<sarang>** dags are at  the top of my "I wish I had more time to do this" list  
**\<suraeNoether>** it's not clever, which is my strongest argument in its favor  
**\<sarang>** being not clever often means "easier to prove"  
**\<suraeNoether>** yep, and more secure, and lots of other things  
**\<sarang>** suraeNoether: what do you intend to do with RTRS2 this month?  
**\<sarang>** If the op counts they provide make sense, I'd be interested in prototyping to help my understanding better  
**\<suraeNoether>** step 1: understand how it works  
**\<sarang>** ^  
**\<suraeNoether>** step 2: if it's like RTRS1, step 2 is "abandon the project."  
**\<silur>** T\_T  
**\<silur>** RIP silur :D  
**\<sarang>** lolol  
**\<suraeNoether>** i regret to inform yall but i'm guessing 1) this scheme is as good as it gets without pairings based crypto or a weird RLWE scheme or something, and 2) i still think it's too slow for a mandatory every-transaction sort of deployment and 3) i don't think it's worth deploying without the always-on protection of 64-member rings. maybe. i don't know.  
**\<silur>** we talked about an RLWE-generalization months ago  
**\<silur>** so more likely ruffing found that too  
**\<sarang>** Well, we can use this month to find out  
**\<suraeNoether>** i think the variability in ring sizes is... well, it's not the biggest vulnerability, right, but it's a vulnerability and it's super low-hanging fruit: we should be mandating ring sizes to avoid inter-signature linking  
**\<suraeNoether>** i love my cat, and you should love my cat too. i got nothing else to contribute to this meeting except CAT LOVE.  
**\<sarang>** My cat is sitting on my lap with his paw on the keyboard  
**\<sarang>** ready to jump in should he become necessary here  
**\<sarang>** hyc: any developments on asic resistance?  
**\<sarang>** I have not been following that stuff this past month  
**\<sarang>** (or anyone else involved in this)  
**\<sarang>** (please chime in)  
**\<silur>** my last info on that is that cuckoo-cycle doesn't work for some reason  
**\<silur>** last time I got into that, it was the best known stuff  
**\<silur>** \*sad\*  
**\<suraeNoether>** silur hyc has been working on a proof of random code project  
**\<silur>** VRF? \*-\*  
**\<hyc>** sorry was on another call  
**\<suraeNoether>** i suppose one could imagine it as a VRF.  some random code is generated from a nonce, excecuted, the final state is hashed, and that's the nonce for the proof of work game. puts the burden not on hashing the final output for PoW, but in executing random code  
**\<hyc>** silur you can catch up here https://www.reddit.com/r/Monero/comments/8bshrx/what\_we\_need\_to\_know\_about\_proof\_of\_work\_pow/  
**\<suraeNoether>** hyc its ok we still love you  
**\<hyc>** my prototype is here github.com/hyc/randprog but already superseded by tevador's  
**\<hyc>** https://github.com/tevador/RandomJS  
**\<silur>** thanx hyc  
**\<hyc>** cuckoo-cycle breaks down because of some memory/time tradeoff  
**\<suraeNoether>** hyc when did tevador start working on that? haha  
**\<hyc>** e.g. double memory gives superlinear time acceleration  
**\<silur>** oh  
**\<hyc>** suraeNoether: shortly after I published PoC ;)  
**\<silur>** what about a VRF or rather VDF-based approach?  
**\<hyc>** VDF ? what are these acronyms  
**\<silur>** verifiable random/delay function  
**\<hyc>** I don't know of any good examples.  
**\<silur>** I have a DH and EC demo on VRF in a jupyter notebook I can upload it into the lab  
**\<silur>** repo  
**\<hyc>** cool  
**\<hyc>** Also, Wolf's colleagues have another variation on my idea, but tuned to GPUs  
**\<silur>** but it kind of sidetracks a lot from "asic-resistant pows" since it's not a pow  
**\<hyc>** https://github.com/ifdefelse/ProgPOW  
**\<hyc>** we had a good couple days' worth of email conversations leading into that one  
**\<hyc>** I'm disinclined to adopt it because I think it leaves CPUs out, and ignores the prevalence of smartphones in the userbase these days  
**\<sarang>** In the interest of time, are there any other updates before we officially close and continue discussion of these topics?  
**\<sarang>** I'll be giving a presentation in Portland in a couple of weeks on the importance of fungibility, so hopefully some good PR from that  
**\<hyc>** nice  
**\<sarang>** The usual disclosure that my travel/hotel are covered, so I'm not requesting any community funding for this  
**\<sarang>** I'll be glad to share the presentation here for comments  
**\<sarang>** OK, looks like the official topics list is exhausted, so I suppose we can officially adjourn and continue talking here  
**\<sarang>** keep up the good fight  
**\<suraeNoether>** <3 cool  
**\<sarang>** I'd be glad to hear more from hyc or suraeNoether about PoW and/or fun DAG stuff  
**\<suraeNoether>** \</meeting>
