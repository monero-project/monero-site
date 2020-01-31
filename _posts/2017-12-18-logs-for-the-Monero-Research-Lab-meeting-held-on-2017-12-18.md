---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2017-12-18
summary: MRL work, MRL 2018 forecast, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>** okay, everyone, I suppose we can start this research meeting  
**\<suraeNoether>** 1) Greetings, 2) What has everyone been doing? 3) What should 2018 look like for MRL, in your opinion?  
**\<andytoshi>** btw if i got a reviewer to look at the bp stuff (hypothetically) who wolud i ping about security issues  
**\<suraeNoether>** andytoshi: I think sarang  
**\<moneromooo>** And luigi1111w.  
**\<suraeNoether>** luigi1111w and moneromooo would also be good contacts  
**\<suraeNoether>** \*nod\*  
**\<suraeNoether>** So, hi everyone. sarang anonimal ArticMine dEBRUYNE endogenic gingeropolous JollyMort[m] pigeons othe silur stoffu unknownids vtnerd waxwing   
**\<suraeNoether>** I know sarang is moving so he may or may not be active this morning  
**\<suraeNoether>** Sarang and I are finishing up the multisig paper and then we'll be shopping it around to get thoughts from community members  
**\<sarang>** Hello  
**\<suraeNoether>** howdy~  
**\<sarang>** andytoshi: yeah any reviews could contact me  
**\<suraeNoether>** We have also been reading about the new untrusted-set-up zk-snark paper. I'm particularly interested to see if BPs can be dropped into that scheme.  
**\<sarang>** sarang.noether@protonmail.com is a good way to contact more privately  
**\<silur>** or darkwire.io for realtime  
**\<sarang>** suraeNoether: yes, there is a particular inner-product argument they use  
**\<silur>** surae you talking about hyrax?  
**\<sarang>** yes  
**\<suraeNoether>** silur yes  
**\<silur>** I will most likely be responsible for ZoKRates implementation  
**\<suraeNoether>** oh, at ethereum?  
**\<silur>** chris and vitalik seem to be too concerned about scalability  
**\<silur>** yea  
**\<silur>** but IMO hyrax witness size etc totally worth for kicking trusted setups  
**\<sarang>** It's certainly worth our looking into  
**\<sarang>** And I've found the paper to be quite good  
**\<sarang>** very solid lit review too  
**\<silur>** it's amazing  
**\<suraeNoether>** I don't care so much about sizes, I care more about validation times under the conditions we've been considering recently  
**\<sarang>** They explicitly consider validation complexity  
**\<suraeNoether>** yep  
**\<sarang>** which is a welcome addition  
**\<silur>** well hyrax is highly parallel  
**\<sarang>** mhmm  
**\<silur>** should be many times faster on first sight then simple Groth  
**\<sarang>** Very dependent on circuit parallelization  
**\<silur>** but haven't actually made any tests on that  
**\<silur>** I also got my attention on this  
**\<silur>** http://arxiv.org/abs/1712.04417v2  
**\<silur>** quite relevant on sharding, decentralized storage etc  
**\<sarang>** oh interesting  
**\<suraeNoether>** In addition to the authentication end of things, Sarang and I have also been working on an implementation of SPECTRE, the blockchain concencus algorithm here: https://eprint.iacr.org/2016/1159.pdf  
**\<sarang>** Yeah, constant time implementation of SPECTRE is quite interesting  
**\<silur>** wow  
**\<sarang>** Hinted at by the authors but not explicitly considered in the paper  
**\<suraeNoether>** My current constant-time implementation is on my github here https://github.com/b-g-goodell/research-lab/tree/in-prep/source-code/Spectre <--- it does not match the current SPECTRE algorithm so that it can operate in constant-time, but there are also some design choices I'm tinkering with in the original SPECTRE algorithm...   
**\<suraeNoether>** and, it doesn't pass unit tests yet (with or without the aforementioned tinkering)  
**\<suraeNoether>** but this appears to be the first implementation of spectre anywhere  
**\<sarang>** The unit tests are tricky with this  
**\<sarang>** Because the voting gets so complex very quickly  
**\<sarang>** and suraeNoether you found it doesn't always match intuition  
**\<suraeNoether>** Spectre uses insanely high block arrival rates, so I've been doing computations to maximize privacy (ring size) and transaction processing rate subject to a constraint of getting some minimum gain in new node sync time.  
**\<suraeNoether>**  i plan on using values from RTRS ringCT (or RuffCT), MLSAG signatures, borromean range proofs, and bulletproofs to determine what sort of rates we could rationally use in spectre while maintaining network security. I wouldn't mind throwing the new zk-snarks in there also  
**\<suraeNoether>** I've also attained some recent proofs into why some ideas I was previously researching just fundamentally aren't going to work  
**\<suraeNoether>** for example, in terms of Proof-of-Space, I am giving up the ghost for a few months or more, because one critical property of block validation is that it can't have \*progress\* like a progress bar. otherwise, the fastest/strongest always wins the next block.  
**\<suraeNoether>** and i think that PoS will tend toward a progress-bar-like block validation mechanism  
**\<suraeNoether>** a few other ideas I had can't work like that  
**\<suraeNoether>** i'm literally thinking of writing a blog post entitled "Apparently clever but inarbuably bad ideas for cryptocurrencies."  
**\<suraeNoether>** silur keep us informed on how Zokrates comes along  
**\<suraeNoether>** anyone else doing anything interesting?  
**\<sarang>** I'm enjoying zkSNARKs and SPECTRE and tweaks to BP efficiency and review  
**\<sarang>** and helping out w/ multisig review, which has gone well  
**\<sarang>** I'm moving this week and trying to balance that as well  
**\<suraeNoether>** Allrighty for 3) a few things. Firstly, i think we are going to follow the cue of #monero-dev meetings and postpone our next meeting. I'm going to say Monday Jan 8 (perhaps Mon the 1st is cruel). Secondly, for research meetings each week, perhaps sarang or I can present a paper we had read the previous week and try to describe how it works to the community.  
**\<sarang>** Ha just like a real lab group meting  
**\<suraeNoether>** ikr  
**\<suraeNoether>** but moreover  
**\<suraeNoether>** I want to know how everyone feels about the direction MRL should head in 2018  
**\<sarang>** As long as it doesn't turn into a Buzz Killington event: https://www.memecreator.org/static/images/memes/4440318.jpg  
**\<suraeNoether>** eh, this conversation could wait until our next meeting, I think.   
**\<unknownids>** ooo lab group https://i.imgur.com/ehgxi9o.png  
**\<suraeNoether>** oh man it's meme time, meeting adjourned ~ hehe  
