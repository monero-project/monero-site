---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2019-05-05
summary: Development status, Code & ticket discussion, and miscellaneous
tags: [dev diaries, core, crypto]
author: el00ruobuob / rehrar
---

# Logs  

**\<xmrmatterbridge> \<rehrar>** Meeting?  
**\<rbrunner>** It would be time for one, yes  
**\<rehrar>** 1. Meetings Greetings  
**\<rehrar>** h'lo  
**\<moneromooo>** We're waiting for 5509 to be finished before branching.  
**\<rehrar>** that's how moneromooo always says hello, don't worry  
**\<hyc>** hi  
**\<rehrar>** 2. What's been done since the previous meeting?  
**\<rbrunner>** ... a month ago, if I remember correctly  
**\<rehrar>** Something like that. :P So in theory at least a few things got done.  
**\<rehrar>** is dsc\_ dEBRUYNE selsta around give a gui update?  
**\<rehrar>** and maybe moneromooo can say something, although he kind of did already  
**\<moneromooo>** hi  
**\<dEBRUYNE>** I am here  
**\<dEBRUYNE>** Suppose I can give a quick GUI update  
**\<rehrar>** please do  
**\<dEBRUYNE>** The white theme got merged finally! It also includes a lot of other UI improvements  
**\<dEBRUYNE>** Trezor support has been finalized  
**\<dEBRUYNE>** We've also updated the QT version to 5.9.7, because QT 5.7 was kind of holding us back due to a few bugs being present in it  
**\<dEBRUYNE>** Also QT 5.9.7 allows us to use more features etc.  
**\<dEBRUYNE>** An update popup was also implemented, it basically checks whether a new version is available and shows a little pop up if yes  
**\<dEBRUYNE>** Fiat pricing will also be merged soon^tm, note that it will be turned off by default  
**\<dEBRUYNE>** Update popup can be seen here fwiw -> https://github.com/monero-project/monero-gui/pull/2100  
**\<dEBRUYNE>** Other than that, the usual lots of optimizations and bug fixes :P  
**\<dEBRUYNE>** We're essentially ready for the upcoming release too  
**\<dEBRUYNE>** Just need to merge a few remaining PRs, wait for the translations, and do some testing  
**\<dEBRUYNE>** That's kind of it I guess :p  
**\<dEBRUYNE>** Oh one more thing, for 0.15 we'll be revamping the send page / flow to make it more intuitive -> https://github.com/monero-project/monero-gui/issues/2148  
**\<rbrunner>** Looks like it will be a interesting release  
**\<rehrar>** Awesome. And where's the core software in the process of point release? they are planning to have one, right?  
**\<rehrar>** oh, well moneromooo did kind of state at the start  
**\<dEBRUYNE>** Yeah after 5509 is resolved we're branching as far as I know  
**\<moneromooo>** It just needs vtnerd to review (and hopefully not say it's total shite and needs rewriting :P)  
**\<rehrar>** and then waiting on pony shenanigans?  
**\<rbrunner>** Is it sure already that it will have the version 0.14.1.0?  
**\<rbrunner>** If yes, I can make the few trivial updates for the installer for that  
**\<moneromooo>** Almost certainly.  
**\<moneromooo>** But there will likely be 0.14.0.1 etc soon afterwards.  
**\<rbrunner>** You mean 0.14.1.1?  
**\<dsc\_>** Ill focus on: pruning/moneroseed handler/automatic mining from within the GUI next, after that TOR/I2P  
**\<moneromooo>** Yes, I do, thanks.  
**\<rehrar>** sad dsc\_. Mobile one day?  
**\<dEBRUYNE>** moneromooo: Are we building directly after branching or will there be some time for testing first?  
**\<dsc\_>** rehrar: Where's my Librem dev kit? :)  
**\<moneromooo>** Both I think.  
**\<dEBRUYNE>** Oki  
**\<dEBRUYNE>** Anyone from the RandomX team here to provide an update?  
**\<dEBRUYNE>** tevador, sech1, hyc?  
**\<rehrar>** dsc\_: I'll literally beg on the streets for you to get one  
**\<selsta>** 19:15 \<rehrar> sad dsc\_. Mobile one day? \<-- We don’t really have resources for mobile atm.  
**\<hyc>** sure  
**\<hyc>** randomx code freeze was april39  
**\<hyc>** 30  
**\<hyc>** we have 2 review proposals and a 3rd team isprepping one  
**\<hyc>** I have a preliminary randomx integration with monerod in my github repo  
**\<hyc>** tevador is still playing with cpu optimizations  
**\<rehrar>** the review proposals will require XMR, yes?  
**\<rehrar>** via CCS?  
**\<hyc>** sech1 has nearly finished a CUDAversion  
**\<hyc>** yes  
**\<rehrar>** let me know if you guys require any help getting the CCS proposal up for them  
**\<rbrunner>** Will be intesting to see how fast CUDA will be  
**\<hyc>** thanks. waiting for 3rd proposal  
**\<sech1>** I estimate CUDA version will have the same hashrate on RandomX as with Cryptonight, maybe even faster  
**\<sech1>** It's like 80% complete now  
**\<rehrar>** this is kind of really exciting stuff, and I'm super giddy that Monero (via you guys) are on the forefront of this  
**\<rbrunner>** Is that earlier than originally feared / planned?  
**\<hyc>** rbrunner wdy mean  
**\<rbrunner>** The CUDA version. I am a little surprised it's almost ready already  
**\<sech1>** It's not hard to implement  
**\<rbrunner>** But somebody must do it :)  
**\<sech1>** But the remaining 20% might take longer, it's the hardest part to do without losing much hashrate  
**\<hyc>** yes, so it's beingdone  
**\<hyc>** lol. the last 20% always takes the most time...  
**\<rbrunner>** True that  
**\<rehrar>** hyc any time frame on the 3rd team proposal?  
**\<rehrar>** and kind of the CCS in general?  
**\<rehrar>** this probably won't get in this upcoming fork, correct?  
**\<hyc>** I suppose we'll see the 3rd proposal this week  
**\<hyc>** we'll present all 3 for discussion in this channel, decide what to move forward on  
**\<sech1>** You can watch my progress with CUDA version here: https://github.com/SChernykh/RandomX\_CUDA/  
**\<hyc>** if we have reviews completed by July I think we can roll out in October  
**\<hyc>** I expect to have fully working testnet monerod in time for monerokon  
**\<dEBRUYNE>** rehrar: I don't see why not if we have integration ready + reviews finished by the end of June  
**\<rehrar>** That's awfully exciting. Thanks for sharing the news on this.  
**\<dEBRUYNE>** The october fork is then still ~3.5 months away  
**\<rehrar>** so I guess I shouldn't  buy any more GPUs at the moment for my little 2 GPU miner  
**\<hyc>** as sech1 noted, GPU hashrate will be comparable to cryptonight  
**\<hyc>** but CPU rate is much higher than cryptonight  
**\<dEBRUYNE>** I guess we'll see GPU mining as long as it is profitable  
**\<hyc>** yeah, no reason why not    
**\<hyc>** anyone interested in writing minig  
**\<hyc>** mining code can get current rev from randomx repo  
**\<hyc>** final docs/specs arethere now  
**\<sech1>** actually, it's the dev branch of randomx repo which is up to date  
**\<hyc>** ^ tevador says all merged to master now  
**\<sech1>** nice  
**\<rehrar>** I have a mac (for website testing). Maybe I can give it a shot.  
**\<rehrar>** But I'd have to build from source, right?  
**\<moneromooo>** Yes.  
**\<moneromooo>** Or I guess you can grab a binary from that PR.  
**\<dsc\_>** what does 'SSL' between wallet and daemon mean?  
**\<dsc\_>** between monero-wallet-cli and monerod?  
**\<moneromooo>** Data sent back and forth gets encrypted.  
**\<moneromooo>** Yes.  
**\<vtnerd\_>** moneromooo : I have a mac for testing too  
**\<dsc\_>** gotcha. Ill try to test..  
**\<vtnerd\_>** the issue is that I think I have a custom openssl build instead of whatever comes with the system, which is probably what you want to be tested ?  
**\<moneromooo>** Well, mostly, but a custom one can't be bad either. Might find some corner case.  
**\<rehrar>** moneromooo: I'll put it in the Revuo as well as a volunteer opportunity?  
**\<rehrar>** though it'd help to have instructions on how to test  
**\<rehrar>** maybe I can talk with you later and do a write up  
**\<moneromooo>** Well, I kinda hope it'll be done and merged within a day now that vtnerd's around to review ^\_^  
**\<rehrar>** ah, I see.  
**\<rehrar>** no worries then  
**\<moneromooo>** Thanks though  
**\<rehrar>** alright, any other meeting items?  
**\<rehrar>** Just the logs of this meeting (if/when posted) will be enough to excite the community I think  
**\<rehrar>** pump back up to 500 dollah  
**\<rehrar>** jk jk don't ban  
**\<rehrar>** Alright, if there's nothing else, I think we can call it here. thanks for the check in everyone.  
**\<hyc>** byebye  
**\<rbrunner>** Thanks  
