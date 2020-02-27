---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-05-28
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>** sure~  
**\<suraeNoether>** Greetings everyone  
**\<suraeNoether>** welcome to the MRL Research meeting for the week  
**\<rbrunner>** Hi. Lurking for one here :)  
**\<sarang>** yo  
**\<suraeNoether>** mostly an informal discussion of what we've all been getting up to for the past week  
**\<ArticMine>** hi  
**\<jwinterm>** o/  
**\<sarang>** Happy Memorial Day to those who celebrate it today!  
**\<suraeNoether>** i know sarang has been discussing fees with myself and ArticMine, and we both have been talking about multisig with each other... does anyone want to put an item on the agenda?  
**\<suraeNoether>** otherwise, sarang and I can just describe what we've done this past week and get on to it, but i know some folks have been working on a lot of stuff  
**\<suraeNoether>** oh, man i forgot to ping UkoeHB   
**\<endogenic>** ya if i may, you should ping ppl at the start of the mtg  
**\<sarang>** Yes there is plenty to discuss for BPs, fees, and optimizations  
**\<suraeNoether>** endogenic: I pinged people about 20 minutes ago  
**\<suraeNoether>** but point taken  
**\<suraeNoether>** Sarang, how about you go first  
**\<sarang>** I worked with moneromooo to speed up BPs  
**\<suraeNoether>** we can let people jump in with questions  
**\<sarang>** Here is timing data for the expensive multiexp operations they use, to illustrate: https://imgur.com/a/rZB0vin  
**\<sarang>** The green bar, Pippenger, is the new one  
**\<sarang>** BPs start at 256 points, on the x-axis  
**\<suraeNoether>** cool!  
**\<endogenic>** suraeNoether: think both can be helpful  
**\<sarang>** Once we finish up some testing, BPs will use a combination of algorithms. The speedup on the operations has been clocked at 40% of the original  
**\<sarang>** The audits continue  
**\<sarang>** What really remains is determining fees, as was discussed last week  
**\<suraeNoether>** fluffypony knaccc luigi1111 anonimal andytoshi ArticMine binaryFate chachasmooth dEBRUYNE endogenic gingeropolous hyc iDunk IsthmusCrypto john\_alan JollyMort[m] jwinterm kenshi84 medusa\_ moneromooo MoroccanMalinois needmoney90 nioc nioc\_ othe philkode rehrar rrol[m] sgp\_[m] smooth sneurlax[m]1 stoffu TheCharlatan unknownids vtnerd waxwing  
**\<suraeNoether>** okay, so let's talk about fees really quick  
**\<sarang>** yes  
**\<suraeNoether>** since verification times are roughly constant across powers of 2 (in terms of number of outputs) and the space is proportional to the number of outputs, we can get a good simple fee model going  
**\<sarang>** This chart shows timings \_before\_ the new Pippenger optimizations: https://docs.google.com/spreadsheets/d/1HPk2a0atBqLqUlxQqBLiQXEJi-e1egIMYu3tS1NGHUo/edit#gid=0  
**\<sarang>** It's the same chart as I presented last week, but gives an idea of timings  
**\<suraeNoether>** say N = # outputs, and 2^(m-1) < N <= 2^m. then space is approximately N and verification time is approximately m = round(lg2(N)).   
**\<sarang>** The timings also do \_not\_ account for batch verification, since that depends on what size proofs a client has  
**\<sarang>** suraeNoether: space does not scale linearly with the # of outputs  
**\<ArticMine>** It essentially forces verification time as the major pricing element when comparing a 2 output proof with 2^N output proof  
**\<sarang>** Yes. Compared to Borromean, space is basically constant  
**\<sarang>** at least across the ranges we deal with  
**\<ArticMine>** 64 bytes for each additional factor of 2  
**\<ArticMine>** From the table  
**\<sarang>** yes, it's a very small increase  
**\<sarang>** but among all costs to consider, it's the smallest  
**\<suraeNoether>** wait, sarang, verificaiton time is O(N) and space is lg(N), right? according to that table we glanced at earlier  
**\<sarang>** For single verification, yes, but it scales with the next power of 2 from N  
**\<suraeNoether>** right  
**\<sarang>** We don't have the more general BPs that can handle any number of outputs cleanly  
**\<sarang>** (and we'd never get that change audited since it's tricky and not published)  
**\<suraeNoether>** so, my point is: if we consider space to be wasted download time, then everything is about time, not space-and-time  
**\<suraeNoether>** and so for fees  
**\<sarang>** more or less  
**\<suraeNoether>** we can either do space+time, and pick some constants a, b and charge fees a\*lg(N) + b\*N  
**\<suraeNoether>** or we can do space\*time and pick some constant a and charge fees a\*N\*lg(N)  
**\<ArticMine>** Yes we can convert between space and time. The question becomes the conversion factor  
**\<suraeNoether>** so, for a 2-in-2-out transaction  
**\<suraeNoether>** lg(N) = 1, N=2, so we charge a base fee of 2\*a  
**\<suraeNoether>** whatever we think is fair for that, say a = 1 piconero  
**\<ArticMine>** We have to modify the penalty formula this is critical  
**\<ArticMine>** To reflect the time component  
**\<ArticMine>** So converting time back to space is the simplest way  
**\<rehrar>** ok here  
**\<suraeNoether>** ArticMine: the time component is linear in number of outputs, and I think the penalty formula is already linear in the number of outputs?  
**\<ArticMine>** We can use the 2 output proof ans the starting point. Then add a space weight linear to the number of outputs to account for the time  
**\<suraeNoether>** wait, i'm getting myself confused here  
**\<sarang>** Are we accounting for the fact that a 9-proof and a 15-proof take the same verification time, roughly?  
**\<suraeNoether>** that's a hugely important observation  
**\<ArticMine>** The penalty formula is size based and includes all the transaction inputs  
**\<suraeNoether>** ArticMine: okay, so check this out  
**\<ArticMine>** We have to price 9 and 16 the same  
**\<suraeNoether>** ArticMine: the time to verify is approximately linear in size  
**\<suraeNoether>** ArticMine: in number of outputs i mean  
**\<ArticMine>** Time to verify is linear in outputs for each 2^N  
**\<ArticMine>** so 9 and 16 is the same  
**\<sarang>** It's linear in the number of outputs used, but we pad to ensure there are always 2^m  
**\<sarang>** We'd need the unpublished BP modifications to get rid of that requirement  
**\<ArticMine>** because of padding  
**\<suraeNoether>** assuming everything is being rounded up to the nearest power of 2, time = O(N outs). space = O(log(N outs)), essentially. so fees can be a\*N + b\*log(N). agreed or disagreed? if measured in atomic units of monero, we can write this as N + c\*log(N) if we like and if we want to pick c carefully.  
**\<sarang>** We do get much smoother time changes if we use separate proofs  
**\<sarang>** but at the cost of greater size  
**\<sarang>** This discussion is all assuming we require a single proof  
**\<suraeNoether>** i am not assuming that at all  
**\<suraeNoether>** i'm going proof-by-proof  
**\<sarang>** Well  
**\<sarang>** If we split proofs, each proof is an optimal size from a verification perspective  
**\<suraeNoether>** if every proof pays fees in proportion to both space and time, then there's an economic incentive for wallet software to find the best solutions for output management  
**\<sarang>** If we round, some are more optimal than others  
**\<suraeNoether>** if someone wants to make a sloppy BP, then \*fine\* let them pay for it by simply charging in proportion to number of outputs. is what i'm saying  
**\<ArticMine>** suraeNoether Yes size which determines penalty which in turn sets fees would follow a\*N + b\*log2(N)  
**\<suraeNoether>** ok so next question: how many fees should a 2-in, 2-out transaction incur? what about a 2-in, 4-out transaction?  
**\<ArticMine>** Though given the data I suspect that a\*N will be dominant  
**\<suraeNoether>** ArticMine: it will be  
**\<suraeNoether>** but since most txns are 2-in, 2-out, we're really over-optimizing the crap out of this  
**\<jwinterm>** is it only the number of outputs that affects the verification time for BPs?  
**\<suraeNoether>** all we need is a quick metric that asymptotically matches the cost in space and time. that's all we need. :P  
**\<ArticMine>** For 2 in 2 out there is not change from the current formula  
**\<sarang>** jwinterm: yes  
**\<ArticMine>** Since this will be used as the base tx size  
**\<suraeNoether>** okay, so call that fee F  
**\<suraeNoether>** and we set F = a\*2 + b\*1  
**\<sarang>** ArticMine: but I assume the prefactor will be smaller than currently  
**\<sarang>** Since we're dropping both verification time and space from the current txns  
**\<suraeNoether>** now for a 2-in 4-out transaction  
**\<suraeNoether>** oh, we don't want to do that one  
**\<suraeNoether>** we need linearly independent choices  
**\<suraeNoether>** so what about a 1-in, 2-out transaction?  
**\<suraeNoether>** ah, the fees will be the same  
**\<suraeNoether>** heh  
**\<suraeNoether>** okay, so what about a 3-output transaction?  
**\<suraeNoether>** for a 4-output transaction, they'll pay double, so we may as well make a 3-output transaction 50% more  
**\<ArticMine>** 3 out same as 4 out  
**\<suraeNoether>** oh ok  
**\<suraeNoether>** that works too  
**\<ArticMine>** The will pay double on the proof  
**\<ArticMine>** very likely but not on the rest of the tx  
**\<moneromooo> \<@suraeNoether>** but since most txns are 2-in, 2-out, we're really over-optimizing the crap out of this  
**\<moneromooo>** No, because this is a defense against attacks.  
**\<moneromooo>** So you have to consider the worst case here.  
**\<UkoeHB>** jumping in: yay new chapter  
**\<UkoeHB>** https://www.pdf-archive.com/2018/05/28/zero-to-monero-first-edition-v0-17/zero-to-monero-first-edition-v0-17.pdf  
**\<ArticMine>** Which is why we have to add a space penalty term for the spoace gains in say 2 out to 4 out 8 out etc  
**\<suraeNoether>** thanks UkoeHB   
**\<suraeNoether>** okay, so ArticMine and sarang, let's talk about fees after the meeting  
**\<ArticMine>** Sure  
**\<suraeNoether>** i don't want to waste a bunch of folks' time, but I think I have a formula  
**\<suraeNoether>** sarang, my understanding is you are taking June off to teach, correct? and that during that time you'll be volunteering your time at MRL to complete, for example, the bulletproof audit  
**\<sarang>** Yes, I'll be teaching a crypto course for Duke  
**\<sarang>** w/o FFS pay  
**\<sarang>** I'll be volunteering time to manage the BP udit  
**\<sarang>** \*audit  
**\<sarang>** If it ends up being more time than expected, I can adjust the next FFS accordingly  
**\<sarang>** The first week of June is BS training, so I'll be partially available  
**\<suraeNoether>** cool. UkoeHB care to share/describe your newest chapter in zero-to-monero?  
**\<UkoeHB>** blockchain  
**\<sarang>** lol  
**\<suraeNoether>** "blockchain" he said, with stars in his eyes  
**\<sarang>** short and sweet  
**\<UkoeHB>** and two new appendices: block content, genesis block  
**\<sarang>** If I were a VC, that statement alone would get you funding  
**\<UkoeHB>** lol  
**\<suraeNoether>** sarang i should have asked: do you have anything else you want to talk about before we move on?  
**\<sarang>** Did a little timing on the noninteractive refund stuff, turns out they're a little faster than typical signatures  
**\<sarang>** finished up the tech note, hoping for internal review before we release  
**\<suraeNoether>** oh yeah, i wanted to ask: think there's a way we could compute \*all\* our key image basepoints in a way that can exploit the speed-up you discovered?  
**\<suraeNoether>** sarang, can you also give us a link to your dual output tech note?  
**\<sarang>** https://www.sharelatex.com/read/vcyxgpntfsgz  
**\<sarang>** I don't know a great way to do it safely with just the single pubkey value  
**\<suraeNoether>** k  
**\<sarang>** If anything I'd rather find a way to reconstruct MLSAG to use other speedups  
**\<sarang>** but I've given almost zero thought to that  
**\<suraeNoether>** so, in the past week I've read this paper in detail (https://scholar.google.com/scholar?cluster=15619301617669058049&hl=en&as\_sdt=0,6) and this paper in detail (https://arxiv.org/abs/1503.08768) and this paper in detail (https://scholar.google.com/scholar?hl=en&as\_sdt=0%2C6&q=okamoto+beats+schnorr&btnG=) and this paper in detail (https://eprint.iacr.org/2018/068) to get to the bottom of this multisig  
**\<suraeNoether>** unforgeability proof  
**\<suraeNoether>** the long story short: I believe that by adding the commit-and-reveal phase of the musig appraoch to our ring signatures will result in a provably unforgeable scheme  
**\<sarang>** too bad they couldn't fix it without that phase  
**\<suraeNoether>** it's fine, i like that phase in general  
**\<sarang>** but it also improves the security assumptions  
**\<suraeNoether>** commitment isnt' scary, sarang  
**\<suraeNoether>** yes, it does  
**\<suraeNoether>** unfortunately, we fork all over the place  
**\<suraeNoether>** and depending on the constructions, things can get out of hand rather quickly  
**\<suraeNoether>** on the plus side, the paper is, once again... smaller than it was. :D  
**\<suraeNoether>** unfortunately i'm debugging some latex code so it's not viewable right now  
**\<suraeNoether>** that has basically been my whole life this past week, although I spent some time looking into what it would take for a zk-ledger-based sidechain to work merge-mined with monero  
**\<suraeNoether>** i believe a very private "banking system" with off-chain transaction processing through semi-trusted third parties could be a second layer on top of monero  
**\<suraeNoether>** but that's not where my mind has really been at, which has been on multisignature unforgeability proofs  
**\<suraeNoether>** sarang, I believe, will be posting his monthly report, as will I...  
**\<suraeNoether>** and later today, I'm helping advise zcash foundation on how to spend a quarter million of their dollars on grants  
**\<suraeNoether>** anyone have any questions?  
**\<sarang>** Yep, my report will go up later today, once I again remind myself how markdown works on various platforms  
**\<sarang>** I love how it's different EVERYWHERE  
**\<suraeNoether>** oh, and we have formalized our research roadmap from our meeting last week! i can't believe I forgot to metnion that  
**\<sarang>** aye  
**\<suraeNoether>** https://github.com/monero-project/research-lab/issues/29  
**\<suraeNoether>** if anyone has questions or concerns or comments, that's a good place to throw them  
**\<UkoeHB>** oh you can update z-to-m link with new draft :)  
**\<suraeNoether>** yay  
**\<IsthmusCrypto>** Nice roadmap. I'll definitely want to be in the loop for item 4, the "research infrastructure" - and I'll try to contribute myself.  
**\<suraeNoether>** good to hear :D  
**\<suraeNoether>** allright, well, let's finish this \</meeting> and talk about fees  
