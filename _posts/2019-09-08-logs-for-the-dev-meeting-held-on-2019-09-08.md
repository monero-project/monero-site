---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2019-09-08
summary: Development status, Code & ticket discussion, 0.15 release discussion, and miscellaneous
tags: [dev diaries, core, crypto]
author: el00ruobuob / moneromooo / rehrar
---

# Logs  

**\<rbrunner>** Looks like meeting will start in a few minutes. Stay tuned.  
**\<hyc>** time?  
**\<hyc>** who's already here?  
**\<moneromooo>** Well, it can start now. Who wants to say anything ?  
**\<vtnerd\_\_>** present  
**\<jtgrassie>** hola  
**\<rbrunner>** Hi  
**\<moneromooo>** I've been working on a "sync pruned blocks" patch, it's proving annoying to test but it's almost ready.  
**\<rbrunner>** Asking around until get the full block?  
**\<hyc>** I'm reworking the randomx integration patch, it has gotten ugly with the added tweaks over the past few months  
**\<moneromooo>** I do not understand that question.  
**\<hyc>** and currently the daemon mining support is broken  
**\<rbrunner>** I mean what means "sync pruned blocks"  
**\<moneromooo>** You asked for pruned blocks when you can, rather than full blocks that you'd then prune.  
**\<dEBRUYNE>** hyc: Could you define ugly?  
**\<rbrunner>** Ah, ok. Thans  
**\<rbrunner>** Thanks  
**\<hyc>** dEBRUYNE: two different code paths for main blocks vs altchain blocks  
**\<rehrar>** hello, apologies for tardiness  
**\<hyc>** ought to be able to consolidate it back into 1  
**\<hyc>** but need to step back and rethink the overall structure  
**\<moneromooo>** (it's to save network bandwidth btw, it doesn't save more db size)  
**\<rbrunner>** How does reworking of RandomX PR look in regard to the calendar?  
**\<hyc>** well, it always takes 2-3 days to test and verify that the network is behaving  
**\<jtgrassie>** fwiw hyc, current state of pr seems to be working now  
**\<rehrar>** It's September, do we have a hard fork date?  
**\<hyc>** jtgrassie: we haven't crossed a nother epoch boundary yet, I don't think  
**\<jtgrassie>** ^ good point  
**\<moneromooo>** No fork date yet.  
**\<rehrar>** We were thinking Octoberish though, no?  
**\<moneromooo>** We were.  
**\<hyc>** I would assume mid-October  
**\<hyc>** we ought to be nailing that date down  
**\<rehrar>** so in theory there is a hypothetical freeze coming mid September? :D  
**\<moneromooo>** Though the randomx code being still changed makes me nervous about mid october.  
**\<tevador>** hyc: for testing, you could shorten the epoch to 128 blocks, then you can test it in 2 hours  
**\<rehrar>** fluffypony luigi1111 ArticMine smooth binaryFate ?  
**\<hyc>** tevador: we did that when the PR was originally written. for some reason the current problems never showed up then.  
**\<dEBRUYNE>** hyc, tevador: The recent change were made after audit recommendations or?  
**\<hyc>** successfully mined millions of blocks with epoch=128  
**\<dEBRUYNE>** Recent changes to RandomX  
**\<tevador>** that was with a private testnet perhaps?  
**\<hyc>** dEBRUYNE: changes to RandomX itself are independent of the randomx integration patch  
**\<hyc>** tevador: true  
**\<tevador>** dEBRUYNE: most changes were made based on audit recommendations  
**\<dEBRUYNE>** I see. I guess if we need more time we can always push it back to end of October, but most people and services are expecting a fork in October  
**\<rehrar>** dEBRUYNE: are they though?  
**\<moneromooo>** Nobody expects a monero fork.  
**\<hyc>** we could always release with daemon mining disabled, and fix it up in a point release if we need to  
**\<hyc>** since xmrig is already available  
**\<rehrar>** I realize we don't have to go Verge vaporware extreme where we push back indefinitely, but I think people are used to some "delays" if it means code that works from the get go (hopefully)  
**\<rehrar>** especially if it's just a couple of weeks  
**\<hyc>** but I'm pretty sure I can get a new patch ready in the next couple days  
**\<tevador>** hyc: I think you could change the testnet epoch to 128 blocks even for public testing  
**\<rbrunner>** No mining in daemon would make me nervous, I have to admit  
**\<hyc>** tevador: yeah I guess we can try that.  
**\<endogenic>** hello all  
**\<rehrar>** dsc\_ or selsta here also?  
**\<hyc>** speeding up test verification to 2 hours would certainly help  
**\<endogenic>** i may be in and out  
**\<selsta>** yes  
**\<rbrunner>** Would also be a minor PR defeat, so to say, after telling everyboding about restoring everybody's capacity to mine  
**\<hyc>** my cat just died  
**\<endogenic>** :(  
**\<hyc>** ^ joke  
**\<endogenic>** o  
**\<rehrar>** I think launching with daemon mining is pretty crucial. Shows we are prepared and not reliant on just one software for it, no?  
**\<dEBRUYNE>** hyc: Oh, then we should still have plenty of time  
**\<dEBRUYNE>** There's like 6 weeks left until mid october  
**\<hyc>** ok then should be no problem  
**\<dEBRUYNE>** rbrunner: Yes I tend to agree. I'd prefer to release v0.15.0.0 with full functionality  
**\<rehrar>** selsta: what's the state of the GUI as we march toward this fork?  
**\<tevador>** yeah, we should make sure daemon mining is working, especially since there is not much difference in hashrate between xmrig and monerod  
**\<dEBRUYNE>** With respect to branching, I guess we just keep merging stuff into master until the RandomX pull request is ready?  
**\<moneromooo>** There's certainly more stuff to be merged atm.  
**\<rbrunner>** Pragmatic approach :)  
**\<selsta>** xiphon added simple mode public node discovery without a centralized service, I did some redesigned the balance card, dsc is working on i2p  
**\<hyc>** makes sense  
**\<jtgrassie>** we shouldn't release a pow change and it being reliant on some third party miner  
**\<selsta>** also small things  
**\<endogenic>** moneromooo: hyc i just got it  
**\<hyc>** lol  
**\<rehrar>** it seems like this is shaping up to be a standard Moenro fork :P  
**\<rehrar>** we'll have our standard debriefing afterward with our similar standard complaints  
**\<rehrar>** anything else currently being worked on?  
**\<tevador>** how long was the code freeze last time?  
**\<hyc>** oh well. the integration PR was pushed in May. if more people had been testing it since then we could've found this earlier  
**\<rbrunner>** Last time was quite rushed because of the "ASIC emergency"  
**\<hyc>** as it is, we found the problems on testnet, so that at least served its purpose  
**\<rbrunner>** Are the Wownero people running smoothly then? If yes, why?  
**\<hyc>** they aren't using daemon mining  
**\<rbrunner>** Oh  
**\<jtgrassie>** amuses me how the problem exists in loki and wow  
**\<rehrar>** does anyone take Wownero seriously as a testing bed? Serious question.  
**\<hoochu>** This problem is likely will not be detected unless someone mined 3 long altchains with epoch boundary in the middle privately and exposed them to hyc\`s testnet  
**\<hoochu>** \*would not be  
**\<sech1>** yes, mining issue only happens when there are long altchains across epoch boundary  
**\<hoochu>** I had another initial attempt when did that  
**\<moneromooo>** "long" means that one block on each side would not be enough to trigger ?  
**\<sech1>** not necessarily long, I guess they need to have different seed hashes  
**\<nioc>** RandomX was released for wow will only daemon mining, tthere were no 3rd party miners at first  
**\<tevador>** must be at least 64 blocks I think  
**\<sech1>** so 64 blocks is enough if split block is chosen carefully  
**\<hoochu>** I suppose enough but noone tried to expose them before daemon miner even started to mine epoch boundary block  
**\<moneromooo>** OK. I'll see if I can add tests for this.  
**\<hoochu>** There was a race  
**\<rbrunner>** That sounds like an awfully special situation  
**\<sech1>** yes  
**\<hyc>** yes, but one which any attacker can construct  
**\<hoochu>** And noone claims that he tested all possible special situations  
**\<sech1>** other than that, it works  
**\<hoochu>** But it's better test all of them  
**\<rbrunner>** Mining ahead 64 mainnet blocks? Good luck for that attacker :)  
**\<rbrunner>** But I understand of course.  
**\<hoochu>** rbrunner, you're wrong  
**\<sech1>** technically, you don't need 64 valid blocks to do it  
**\<hoochu>** mine 2 blocks before mainnet and expose them immediately  
**\<sech1>** just 64 blocks to trigged node to verify them  
**\<sech1>** and boom  
**\<sech1>** it's broken  
**\<hyc>** anyway we don't need to occupy the rest of the meeting with this  
**\<hyc>** discussion in -pow  
**\<rehrar>** kinda fascinating though  
**\<rehrar>** are there any questions about specific issues or PRs?  
**\<rbrunner>** Remember when PoW algorithms were easy and simple ...  
**\<rehrar>** no core team seems to be here though :/  
**\<hyc>** rbrunner: I suppose we'd have similar problems with any PoW scheme that references previous blocks  
**\<hoochu>** this problem exist due to complex dependencies in monerod and lack of people to know all of them to write correct code but not local small changes  
**\<hoochu>** \*that know all of them  
**\<moneromooo>** tewinget: if you're still working on loki: ^  
**\<rehrar>** is vtnerd here?  
**\<rehrar>** I think he said in one of the previous meetings that his networking stuff will probably not be ready in time, correct?  
**\<dEBRUYNE>** \<rehrar> so in theory there is a hypothetical freeze coming mid September? :D \<= I guess branching is technically a freeze right? Because typically only fixes go into the branch  
**\<rehrar>** though it doesn't need a hard fork for his stuff so it doesn't matter  
**\<dEBRUYNE>** rehrar: Yeah I think he said the dandellion++ stuff would not be ready in time  
**\<iDunk>** vtnerd\_\_: can you take a look please  https://paste.debian.net/hidden/bccdc3a2/  
**\<dEBRUYNE>** His white noise PR has been merged though  
**\<iDunk>** That's a MacOS depends build with Clang 3.7.1  
**\<rehrar>** was there anything else that needed discussing?  
**\<rehrar>** alright, so it looks like we can call it here for the meeting  
**\<rehrar>** discussion can obviously continue afterwards on various topics  
**\<rehrar>** I'll try to ping core team peeps to be present for next meeting since we're drawing very close to a fork  
