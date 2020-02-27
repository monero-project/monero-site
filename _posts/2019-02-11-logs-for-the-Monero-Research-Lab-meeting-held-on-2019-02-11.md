---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-02-11
summary: Network upgrade, MRL work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** 1. GREETINGS  
**\<sarang>** What a day; hello  
**\<Xeagu>** Hey everyone  
**\<oneiric\_>** hallo  
**\<suraeNoether>** howdy  
**\<ArticMine>** hello  
**\<sarang>** I have not been able to follow the last couple of days' updates (was involved in an accident) but much has happened  
**\<sarang>** Leading us to 2. NETWORK UPGRADE  
**\<sarang>** A surprise announcement in -dev yesterday means the upgrade is set for earlier than had been expected  
**\<sarang>** There is not currently a good central resource for what exactly is changing  
**\<sarang>** Anyone with knowledge is welcome to summarize here  
**\<sarang>** We should all be on the same page when asked  
**\<moneromooo>** new PoW, new block weight algorithm, more notifications, payment id changes, ability to spend unmixable outs (broke at v10) and smaller ringct sigs.  
**\<moneromooo>** s/v10/v8/  
**\<sarang>** Smaller sigs != changes to output structure?  
**\<Xeagu>** What is the new block weigh algo?  
**\<Xeagu>** \*weight  
**\<moneromooo>** Yesh... it's knaccc's changes for deterministic mask and less amount bits.  
**\<sarang>** ty  
**\<moneromooo>** The new block weight algorithm is the one from ArticMine that has been discussed here for a while.  
**\<sarang>** PR 5124 still?  
**\<ArticMine>** Yes  
**\<oneiric\_>** why is everything moving up, and not just pow changes?  
**\<moneromooo>** Yes.  
**\<moneromooo>** Because people did not want two forks.  
**\<Xeagu>** Okay so future to-do is explaining that block weight algo in simple terms for the Masses  
**\<sarang>** "It helps us accommodate short-term behavior while protecting against bloat"  
**\<Xeagu>** I understand the why but not the how.  
**\<sarang>** The how is in the PR and the Python code  
**\<sarang>** You can only explain algorithm so much before you get to "look at the algorithm"  
**\<moneromooo>** By allowing short term spikes but keeping a longer term median to push things down.  
**\<Xeagu>** We need explainable, English terms on how the algorithm works. I believe such goals are possible.  
**\<oneiric\_>** is there an option to push back the non-critical changes to a feature "fork" in summer/fall?  
**\<sarang>** I'd be glad to put the Python toy code onto GitHub  
**\<moneromooo>** Yes.  
**\<sarang>** oneiric\_: there are non-consensus changes that will have to be deployed later  
**\<sarang>** moneromooo: is there a timeline estimate for when those will go in?  
**\<Xeagu>** I'll read the Python code and try to understand / explain it  
**\<oneiric\_>** thinking about concentrating community review resources around pow and consensus changes  
**\<sarang>** e.g. output selection, BP speedups  
**\<moneromooo>** No, but fluffypony said he'd be fine doing it shortly after the fork.  
**\<sarang>** At least there's no fire to get it done ASAP  
**\<moneromooo>** sarang's python code's also in 5124 as a test.  
**\<endogenic>** oneiric\_: it'd be helpful for wallets like mymonero as well .. i'd love if we were able to be told in a more concentrated manner what we have to remain compatible with.. it's hard to keep on top of all the changes and logs sometimes  
**\<sarang>** and separately in this paste, which I'll put on github: http://paste.debian.net/hidden/c101e46d/  
**\<endogenic>** mymonero's the only wallet that actually reimplements Monero rather than uses wallet2 directly afaik though  
**\<moneromooo>** endogenic: all the consensus changes are included in the magic-beans-0.13 branch.  
**\<endogenic>** that's a lot of code to review though..  
**\<endogenic>** and it's not clear what's a blocker / compat issue  
**\<moneromooo>** I'll list the commits you have to care about:  
**\<endogenic>** just from a review  
**\<Xeagu>** I'd also like to understand the payment id changes  
**\<sarang>** 1. Avoid encrypted payment IDs. 2. Really avoid unencrypted payment IDs  
**\<moneromooo>** 5818191fd2a47246b26cdc1f67a9a500d26ea2ac 81cb665926bce82c3e89977c33c6d4230a427362 dddebcf92437c93e94f65ea9594c1fb797e4f4b8 3472e6d196a2bf86289a86035d916c84e11136ea  
**\<moneromooo>** That should be pretty minimal.  
**\<moneromooo>** endogenic: ^  
**\<endogenic>** thanks mooo - lifesaver as usual  
**\<sarang>** sgp\_ is working up a formal announcement  
**\<Xeagu>** sarang: so this is part of phasing out payment ids?  
**\<sarang>** but an earlier draft of it was incorrect  
**\<sarang>** Xeagu: sure  
**\<endogenic>** it could be good for the growth of the ecosystem to have a central place to post these sorts of things  
**\<suraeNoether>** xeagu: presently we allow any sort of payid, either encrypted or unencrypted, or people can use subaddresses instead. for reasons including elegance and "we want our transactions to be indistinguishable from each other" we are pushing to get rid of both encrypted and unencrypted payids, since subaddresses technically can hit all the same use cases  
**\<suraeNoether>** endogenic: i agree  
**\<Xeagu>** suraeNoether: golden. Thank you  
**\<sarang>** So if anyone asks, this decision was made after some private discussion between Core Team and select devs  
**\<moneromooo>** About payment ids, the changes \*in this coming fork\* are: make it annoying to specify a long payment id, and auto include a short one if none is used.  
**\<Xeagu>** Ability to spend unmixable outputs? What does this mean?  
**\<sarang>** I presume we can/should point affected parties to -dev for more details  
**\<sarang>** I believe this only affects certain pre-CT outputs  
**\<sarang>** (i.e. denominated outputs)  
**\<ArticMine>** This was broken recently?  
**\<moneromooo>** It means that if you have an unspent pre-rct output of amount A, and the chain has fewer than 11 outputs of this amount, you could not spend it (bug). This is now fixed.  
**\<Xeagu>** Got it. This makes sense.  
**\<moneromooo>** It was broken when the ring size was fixed at 11. I did not leave a special case for these.  
**\<sarang>** Xeagu: most users would have been unaffected by this, and now nobody will be affected by it  
**\<ArticMine>** That makes sense  
**\<sarang>** Any other questions for moneromooo/ArticMine regarding the accelerated upgrade?  
**\<endogenic>** mooo, as well, not having these things in the monero-project repo can be very confusing for many  
**\<Xeagu>** Cool. And finally smaller ringct sigs. This is intuitive.  
**\<moneromooo>** endogenic: I don't understand, can you rephrase ?  
**\<suraeNoether>** i have questions about the block size thing but i'm either going to wait till later today or take it to PM with AM (hahhah)  
**\<endogenic>** moneromooo: as they're in your fork  
**\<sarang>** suraeNoether: can you give the gist of your question at least?  
**\<moneromooo>** Those patches are also all in master.  
**\<sarang>** Unless it isn't relevant to the group  
**\<endogenic>** oh  
**\<moneromooo>** er, no  
**\<moneromooo>** Sorry. Either in master or in PRs :)  
**\<endogenic>** hmmm  
**\<sarang>** The formal writeup should include the PR numbers  
**\<moneromooo>** I think only ArticMine's changes are yet to be merged.  
**\<sarang>** Or moneromooo will end up repeating himself many times  
**\<sarang>** !  
**\<sarang>** oh ok  
**\<moneromooo>** Too late sarang :D  
**\<sarang>** ^  
**\<sarang>** OK, last call for network upgrade questions  
**\<learninandlurkin>** I have question: is there any hope of having the blocksize algorithm incentivize shrinking blocksize over time when the blocks are consistently not full, before the fork?  
**\<moneromooo>** No.  
**\<sarang>** no  
**\<moneromooo>** It was considered.  
**\<sarang>** it's an interesting idea, but not tested  
**\<learninandlurkin>** Fair enough. I think that would be a useful iteration on the algo for the next fork. Not critical to stopping bloat attacks I guess.  
**\<sarang>** learninandlurkin: continue lurking until the next fork, and learnin :D  
**\<suraeNoether>** sarang: i want a good example of a dynamical situation in which the AM method of blocksize adjustment has some desirable property over the simple two-median method  
**\<sarang>** I personally like the idea, depending on the consequences of it  
**\<sarang>** Ah ok, yeah probably a good question for ArticMine after meeting  
**\<sarang>** (I will be interested to hear the answer)  
**\<suraeNoether>** i like the idea of the incentivzation approach learninandlurkin mentions  
**\<learninandlurkin>** sarang: eventually I will actually drop a nice contribution, if all goes to plan... (forever lurking and learning though)  
**\<sarang>** Until then, 3. OTHER WORK  
**\<smooth>** suraeNoether: what is this "simple two-median method"? I would describe articmine's method as precisely a simple two-median method  
**\<sarang>** This week, I have been working on output selection, some timing information for a forthcoming paper on signatures, Breaking Monero recording, and learning from the recent Zcash disclosure  
**\<sarang>** An interesting result is that, using an empirical chain distribution, a slight tweak to the output selection to use the window approach better can fix the coinbase-per-ring problem  
**\<sarang>** Right now, we use a small window of blocks to pick outputs, but we don't use the entire window necessarily  
**\<sarang>** If we used the entire window, it smooths the selection process much more  
**\<suraeNoether>** smooth: let's carry hold on that conversation until after the meeting. block size conversations are a black hole and we want to get to other things  
**\<sarang>** For this week, I will continue with output selection experiments and try to finish up the Bulletproofs MPC that keeps getting delayed  
**\<sarang>** Any questions from me, before suraeNoether shares?  
**\<suraeNoether>** sarang why use a windowing method instead of a precise selection method like the one I presented last week? simpler to implement given our current code?  
**\<moneromooo>** There's no rush whatsoever about that BP MPC fwiw  
**\<Xeagu>** I was at TabConf with Rehrar and Midipoet. More marketing than MRL but an important element of information distribution I think.  
**\<sarang>** I'm not saying that I favor the full-window method as optimal  
**\<sarang>** Only that it's a very simple change  
**\<sarang>** it's one of several numerical experiments  
**\<suraeNoether>** gotcha  
**\<sarang>** So if the timeline were rushed, I'd support it as a temporary fix  
**\<sarang>** But yesterday's announcement removes that fire  
**\<sarang>** I'll be posting all the sims to github  
**\<Xeagu>** Would planning the Monero Konference be MRL relevant?  
**\<sarang>** Probably at the end, sure  
**\<sarang>** or after  
**\<sarang>** suraeNoether: do you wish to share now?  
**\<suraeNoether>** allright, my work this past week has been 1) simulations for matching 2) computations for output selection, and 3) some proofs for a semisecret project that has an impending deadline, after which I believe it will no longer be secret.  
**\<suraeNoether>** xeagu yeah that's a good meeting ender actually  
**\<sarang>** suraeNoether's security proofs are related to the timing data I'm working on; it's for a paper in collaboration with other researchers that will be submitted shortly for a conference  
**\<suraeNoether>** next week, sarang and endogenic and I are meeting in nashville for another monero workshop/face-to-face worktime  
**\<sarang>** The secrecy has nothing to do with vulnerabilities or flaws, only professional courtesy for the submission process  
**\<endogenic>** they will be doing a talk at the Nashville Blockchain Meetup as well on 2/20 for anyone interested  
**\<sarang>** Will the talks be recorded endogenic ?  
**\<endogenic>** at WeWork around.. i think. 5-6pm  
**\<suraeNoether>** ah yeah i forgot about that  
**\<suraeNoether>** i'm excited for that  
**\<endogenic>** i've been trying to find out.. i think so. if not, we can get a camera  
**\<sarang>** Cool. Would be fun to stream/post if it works out  
**\<suraeNoether>** between now and then i have several doctor's appointments, some personal business to attend to, and immediately after that trip, i have a surgical procedure, so my presence online is going to be 50/50 over the next few days, unfortunately; my goal is to finish my matching sims before the trip to nashville, and i \*have\* to finish proofs by then  
**\<sarang>** If not, oh well  
**\<learninandlurkin>** If it in collaboration with another group, this means it will not be published as/with the other MRL papers?  
**\<sarang>** We can certainly link to the preprint if we want  
**\<suraeNoether>** learninandlurkin: this one, similar to the thring signature paper, is intended for peer review publicatin  
**\<Xeagu>** I might be able to make it to the 2/20 Nashville meetup  
**\<sarang>** and the preprint is always publicly freely available  
**\<suraeNoether>** oh i should pick a journal and submit that this week, too  
**\<sarang>** In general, we should probably submit more of our future MRL stuff to the IACR preprint archive for broader distribution  
**\<sarang>** Any other questions for suraeNoether ?  
**\<suraeNoether>** sarang agreed  
**\<learninandlurkin>** Makes sense but I think there should be links to those papers on the page with all the MRL stuff, if possible  
**\<sarang>** Yup, for sure  
**\<learninandlurkin>** awesome  
**\<suraeNoether>** oh, and i have a bunch of monero konferenco stuff happening this week like signing a contract for our venue and starting to nail down plane tickets for speakers.  
**\<sarang>** The thing sig preprint was separately published on MRL site with our fancy logo, just for fun  
**\<sarang>** Keep in mind that we generally cannot repost final journal copies of any papers  
**\<sarang>** only preprints  
**\<sarang>** However, we'll try to do open release with journals if it's reasonable cost  
**\<hyc>** journals = racket ...  
**\<sarang>** ikr  
**\<learninandlurkin>** arXiv not an option?  
**\<sarang>** Yes, but only for preprints  
**\<learninandlurkin>** what hyc said ++++  
**\<sarang>** arxiv ~ IACR  
**\<sarang>** More journals are moving to open access, at least for a fee  
**\<Xeagu>** I'm working on a speaker proposal submission for the Konferenco  
**\<sarang>** Excellent  
**\<sarang>** Anyone who wishes to apply to speak should do so!  
**\<sarang>** https://monerokon.com/  
**\<suraeNoether>** yep!  
**\<sarang>** Any other recent research to share from anyone?  
**\<oneiric\_>** cant help reading that url in cutesie anime voice  
**\<sarang>** heh  
**\<sarang>** suraeNoether also got conference.money and konferenco.xyz  
**\<oneiric\_>** \*monero kun\* wmw  
**\<sarang>** I'm shocked that conference.money was available  
**\<sarang>** OK, looks like no other big research to cover. So, let's first go over action items for the week, and then open up to questions about earlier/other topics  
**\<learninandlurkin>** Seperate from research: with you guys getting hit by bikes and having surgery, please take time to relax/recover. Y'all need it.  
**\<endogenic>** ^  
**\<sarang>** Yeah, getting hit on my bike was... unpleasant  
**\<sarang>** Dealing with insurers is... also unpleasant  
**\<endogenic>** are you ok, btw?  
**\<sarang>** Fortunately, I'm recovering very well. Nothing fractured, just a hurt-like-hell situation for a while  
**\<sarang>** moneromooo: ArticMine: anything needed from MRL for the upcoming surprise fork?  
**\<Xeagu>** Lost all your private keys in a tragic biking accident  
**\<sarang>** YES  
**\<sarang>** I mean, NO  
**\<suraeNoether>** xeagu that's what happens when you use brain wallets and then get your head knocked around  
**\<suraeNoether>** lose your privkeys  
**\<suraeNoether>** fosho  
**\<sarang>** My action items for the week are to finalize and post the sim code for (a) block size analysis, and (b) output selection  
**\<moneromooo>** I don't think so, unless you want to review the patches.  
**\<sarang>** as well as the stuff for this collaboration paper (will post when the preprint is up)  
**\<moneromooo>** Or suggest new unit tests.  
**\<sarang>** moneromooo: got it  
**\<sarang>** suraeNoether: your action items?  
**\<sarang>** (I know "action items" sounds super corporate, but I find them useful)  
**\<suraeNoether>** i need to finish these proofs for this deadline  
**\<suraeNoether>** that's my top priority  
**\<sarang>** The proofs are also interesting for our current signatures, it seems  
**\<suraeNoether>** i have a few other action items, but if i get those proofs done before heading to nashville, i'll be satisfied  
**\<sarang>** OK, I think that wraps those up nicely. Any questions relating to meeting topics, before we formally adjourn?  
**\<oneiric\_>** does MRL have contacts in academia/industry that are PoW experts?  
**\<sarang>** (formally adjourn just means "end the paste of logs")  
**\<sarang>** Ooh, good question  
**\<sarang>** I don't know many hardware architecture experts, personally  
**\<sarang>** The ones I know of are otherwise employed  
**\<oneiric\_>** would any be open to a bounty/audit-style engagement?  
**\<sarang>** Hmm interesting idea  
**\<oneiric\_>** even if not full-time?  
**\<sarang>** What would be the timeline?  
**\<sarang>** I can bring it up in other channels and see if anyone bites  
**\<oneiric\_>** for this fork, too late. thinking going forward though  
**\<sarang>** right  
**\<sarang>** I like the idea  
**\<sarang>** If the person is trusted enough not to blab to manufacturers...  
**\<sarang>** Any other questions on earlier meeting subjects?  
**\<oneiric\_>** maybe, proposed pow 1-2 month before impl, with minor tweaks disclosed for review 1-2 week before impl  
**\<sarang>** That sounds reasonable  
**\<oneiric\_>** alright, thanks sarang  
**\<sarang>** Most questions on the upcoming upgrade are probably best suited for -dev, FWIW  
**\<sarang>** I know nothing more than has been talked about here/there  
**\<learninandlurkin>** I did ask earlier but if there's no time it's fine: I'd just like to hear MRL's opinions on multi-algorithm PoWs  
**\<sarang>** I do not support such a scheme in the forms that I've seen so far  
**\<strofenig>** what prevents asic building on both pow algos?  
**\<sarang>** It changes the incentives, economics, and structure of attacks, often in subtle and tricky ways  
**\<sarang>** A great resource is the multi-month Zcash thread on their research into this  
**\<sarang>** Conclusion: not sufficiently studied or safe to deploy on their network  
**\<sarang>** I believe this is the relevant thread, which is a good read: https://github.com/zcash/zcash/issues/3672  
**\<learninandlurkin>** I only ask because there's some shilling of the idea and I know very little of it  
**\<sgp\_>** I love that discussion  
**\<learninandlurkin>** oh cool  
**\<learninandlurkin>** I'll dive into that then  
**\<sarang>** I recommend anyone read it before proposing such a scheme  
**\<sarang>** For that topic, I like the Mencken quote: "For every complex problem there is an answer that is clear, simple, and wrong"  
**\<sarang>** OK, last call for questions before we adjourn  
**\<moneromooo>** Can you speed up BPs some more ?  
**\<sarang>** Sigh, FINE  
**\<moneromooo>** Thank you!  
**\<sarang>** Thanks to everyone for attending. Logs for this meeting will be posted to the GitHub agenda issue  
**\<sarang>** Feel free to continue discussion, but we are now adjourned  
**\<oneiric\_>** \\./    
