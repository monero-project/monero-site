---
layout: post
title: Logs for the MRL Meeting Held on 2020-03-25
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** GREETINGS  
**\<sarang\>** hi  
**\<seddd\>**: o/  
**\<UkoeHB\_\>** hi  
**\<SerHack\>** hi  
**\<sarang\>** Moving on, then, to ROUNDTABLE  
**\<sarang\>** Who wishes to share research of interest?  
**\<ArticMine\>** Hi  
**\<sarang\>** I can share a few things  
**\<sarang\>** I've completed some formal peer review for the IEEE S&B proceedings  
**\<sarang\>** and worked on analysis for a linkable ring signature construction in IACR 2020/333  
**\<sarang\>** it claimed to be more efficient than CLSAG  
**\<sarang\>** However, the numbers assumed an insecure key image construction  
**\<sarang\>** The authors have already posted a revision, but it doesn't include numbers or new security proofs for the modified construction  
**\<sarang\>** Besides this, here's an update on some other projects...  
**\<sarang\>** For CLSAG, I am still waiting on the final go-ahead from suraeNoether, who is a coauthor on the paper  
**\<sarang\>** I finished code optimization and made a PR to moneromooo's branch, which has some nice verification speedups  
**\<sarang\>** For Triptych-1, its preprint has been updated at IACR 2020/018  
**\<sarang\>** An MPC construction for key images is completed, and multisig/join analysis is still underway  
**\<sarang\>** For Triptych-2, its preprint has been posted at IACR 2020/312  
**\<sarang\>** Multisig/join analysis is still underway  
**\<sarang\>** That's all for me  
**\<sarang\>** Any particular questions or comments?  
**\<nioc\>** how much verification speeedup for CLSAG?  
**\<seddd\>**: Do you need any more eyes on the CLSAG PR?  
**\<sarang\>** It's around 4-5%  
**\<nioc\>** nice  
**\<sarang\>** seddd: That would be welcome, once moneromooo integrates the new changes into the branch  
**\<seddd\>**: Ok, let me know, and I'll review  
**\<sarang\>** that'd be great  
**\<moneromooo\>** I did, I can push.  
**\<sarang\>** Oh excellent  
**\<ArticMine\>** 4-5% reduction in size? Verification time?  
**\<sarang\>** The only real changes from the paper's description is a modification to the public parameters that go into the challenge hashes, which allows for the speedup to happen  
**\<sarang\>** ArticMine: verification time  
**\<sarang\>** I didn't bother with generation stuff, since that's less important  
**\<sarang\>** Size is identical  
**\<sarang\>** The PR includes new performance tests with better direct comparison to MLSAG, if that's useful to anyone  
**\<seddd\>**: moneromooo: link?  
**\<ArticMine\>** So is this the version that is going for audit?  
**\<moneromooo\>** Not yet.  
**\<sarang\>** Presumably, but that's up to the audit workgroup  
**\<moneromooo\>** I'm rebasing it to master now, then will run tests, then push, then post a link.  
**\<sarang\>** moneromooo: excellent, then the CI workflow will operate properly  
**\<seddd\>**: awesome, many thanks   
**\<sarang\>** Any other questions for me?  
**\<sarang\>** Or does anyone else wish to share research topics?  
**\<seddd\>**: Mb but it involves pow of another coin, not sure appropriate  
**\<sarang\>** Perhaps suited for after the meeting  
**\<seddd\>**: Definitely  
**\<selsta\>** who is the audit workgroup? sgp?  
**\<sarang\>** sgp\_ has been working to coordinate  
**\<sarang\>** As far as the CLSAG paper goes, if I don't hear from suraeNoether, eventually I suppose we'll just have to release the revised version without him  
**\<sarang\>** But I would prefer not to do that, since he's a coauthor  
**\<seddd\>**: Is suraeNoether not around rn?  
**\<sarang\>** He hasn't enabled public viewing on the overleaf version, and I don't have access rights to do that unfortunately  
**\<sarang\>** No, he is not around right now AFAIK  
**\<seddd\>**: k  
**\<sarang\>** Well, to respect everyone's time, I suppose we can move to ACTION ITEMS  
**\<UkoeHB\_\>** update from me: proofreading is extended to this weekend as comments are trickling in at the last moment :p; I have received several good feedbacks so far  
**\<sarang\>** Ah ok, go ahead UkoeHB\_  
**\<UkoeHB\_\>** current proofreading version is here https://www.pdf-archive.com/2020/03/22/zerotomoneromaster-v1-1-2/zerotomoneromaster-v1-1-2.pdf  
**\<UkoeHB\_\>** that's all  
**\<sarang\>** Great, thanks  
**\<sarang\>** My action items are to complete my proofreading of Zero to Monero (it's been delayed; my apologies)  
**\<sarang\>** and to work on some Triptych-2 MPC math  
**\<sarang\>** Anyone else?  
**\<hyc\>** "research only, not for production use" inb4 sumo releases it and claims to be first  
**\<UkoeHB\_\>** oh right, I made a small update to Janus mitigation  
**\<sarang\>** hyc: ?  
**\<sgp\_\>** UkoeHB\_: cool,, what?  
**\<seddd\>**: lul hyc  
**\<hyc\>** sorry, catching up from a couple days ago  
**\<UkoeHB\_\>** https://github.com/monero-project/research-lab/issues/62#issuecomment-603079784  
**\<seddd\>**: imagines sumo as yt commenter: "FIRST"  
**\<sgp\_\>** UkoeHB\_: none of that is implemented correct?  
**\<sarang\>** Off topic, folks!  
**\<UkoeHB\_\>** correct  
**\<seddd\>**: srry  
**\<sarang\>** IIRC, the last time Janus mitigations were discussed in a dev meeting, there seemed to be mixed support  
**\<UkoeHB\_\>** my action item is to go through all proofreading comments, and then this weekend finalize a for-publication version  
**\<UkoeHB\_\>** sarang part of that seemed to be related to exactly how many pub keys and janus base keys it would require  
**\<UkoeHB\_\>** full Janus mitigation would require: 1 Janus base key per transaction, #pub keys = #outputs for ALL transactions (not just tx with subaddresses as is the case now)  
**\<sarang\>** yep  
**\<seddd\>**: sounds like a lot of overhead, is that one of the main objections?  
**\<UkoeHB\_\>** there is partial Janus mitigation, where normal addresses and subaddresses are split up; in other words, don't mitigate linking of normal addresses with subaddresses; that way only tx with subaddresses would need the janus base key  
**\<UkoeHB\_\>** however, even with partial mitigation a lot more subaddress tx would be revealed as subaddress, as there are currently some optimizations that hide subaddress tx among normal tx  
**\<UkoeHB\_\>** while with full migitation, normal address tx and subaddress tx would be universally indistinguishable  
**\<UkoeHB\_\>** which iirc sarang was in favor of even outside of Janus  
**\<seddd\>**: +1 for the latter  
**\<sarang\>** Yeah, encouraging/enforcing indistinguishability is useful  
**\<UkoeHB\_\>** the main objective is solving the Janus attack  
**\<UkoeHB\_\>** which is currently undetectable  
**\<sarang\>** yes  
**\<seddd\>**: so what are the opposing arguments?  
**\<sarang\>** Transaction size is increased  
**\<sarang\>** that's a big counterargument  
**\<sarang\>** (literally)  
**\<seddd\>**: :)  
**\<sarang\>** So as happens always, there's a tradeoff on complexity (in this case, size and protocol changes) and indistinguishability  
**\<sarang\>** s/always/often  
**\<sarang\>** Worth noting that with CLSAG, standard tx size already drops from ~2.5 kB to ~1.9 kB  
**\<sarang\>** so there's some wiggle room  
**\<seddd\>**: are there potentially more compact full Janis mitigations?  
**\<sarang\>** Each added scalar/group element adds 32 bytes  
**\<seddd\>**: Janus\*  
**\<UkoeHB\_\>** this is the smallest known mitigation  
**\<ArticMine\>** Tx size is increased by how much?  
**\<UkoeHB\_\>** on average, about 2.2\*32 bytes per transaction  
**\<UkoeHB\_\>** assuming 2.2 is the average output count  
**\<UkoeHB\_\>** wait no, 32 + 1.2\*32  
**\<UkoeHB\_\>** same thing lol  
**\<seddd\>**: What about encoding the extra basepoint in smth like a lookup table, where base points are indexed by the first 8? bytes  
**\<UkoeHB\_\>** actually a tiny bit less than that, taking into account current subaddress tx  
**\<ArticMine\>** So 64 bytes for a typical tx  
**\<UkoeHB\_\>** yeah basically  
**\<ArticMine\>** So if the security issue is verified I do not see an issue here  
**\<UkoeHB\_\>** seddd, the base key must be generated by transaction authors  
**\<UkoeHB\_\>** under the current construction, not sure if there are any other ways to do it  
**\<sarang\>** ArticMine: the math checks out on the fix  
**\<seddd\>**: Ok so unknowable ahead, gotcha  
**\<seddd\>**: will read more in the issue you linked  
**\<sarang\>** Probably time to bring it up in dev meeting again  
**\<UkoeHB\_\>** seddd there might be something to that (using a fixed janus base key of some kind), Ill ponder it a bit  
**\<sarang\>** Any other action items to bring up?  
**\<seddd\>**: UkoeHB\_ that's kind of what I was thinking, or a fixed set of usable bases  
**\<seddd\>**: Happy to collaborate, this is an interesting problem  
**\<sarang\>** for sure  
**\<sarang\>** OK, let's go ahead and wrap things up for this meeting; discussions can of course continue after we adjourn  
**\<sarang\>** Any last topics of general interest for the meeting?  
**\<sarang\>** Righto! Meeting adjourned  
**\<sarang\>** thanks to everyone for attending  
