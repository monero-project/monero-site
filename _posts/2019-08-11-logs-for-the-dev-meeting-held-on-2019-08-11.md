---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2019-08-11
summary: Development status, Code & ticket discussion, and miscellaneous
tags: [dev diaries, core, crypto]
author: el00ruobuob / dEBRUYNE
---

# Logs  

**\<dEBRUYNE>** so dev meeting? :P  
**\<jtgrassie>** hi!  
**\<dEBRUYNE>** Who's here? hyc, vtnerd, sarang, suraeNoether, moneromooo, jtgrassie, luigi1111, fluffypony   
**\<rbrunner>** Certainly!  
**\<dEBRUYNE>** Probably forgetting a lot of people  
**\<dEBRUYNE>** Guess it's vacation time for a lot of people :-P  
**\<Guest16177>** here more or less  
**\<dEBRUYNE>** So what should we discuss?  
**\<kinghat>** o/  
**\<jtgrassie>** testnet->rx ?  
**\<jtgrassie>** as in when can we fork testnet to RandomX  
**\<rbrunner>** Maybe that would be good with moneromooo back from "frolocking amoung cows" or so  
**\<sarang>** Here, live from def con  
**\<rbrunner>** Def con party then? :)  
**\<sarang>** Very good attendance at the def con village this weekend, for sure  
**\<kinghat>** even being off the beaten path?  
**\<rbrunner>** Anyway, concerning RandomX: The reviews are all through, right?  
**\<sarang>** Yes, for sure  
**\<sarang>** Having free badges was a huge help  
**\<vtnerd\_\_>** ... present (too busy too lock at clock) ...  
**\<sarang>** https://ostif.org/four-audits-of-randomx-for-monero-and-arweave-have-been-completed-results/  
**\<dEBRUYNE>** I think what is left is to merge the RandomX PR from hyc and set a testnet fork date  
**\<hyc>** hey sorry, was afk. but yes  
**\<rbrunner>** Yes, nice to see all those "fixed" and "solved"  
**\<dEBRUYNE>** As a side note, thoughts on releasing 0.15 binaries in early september already?  
**\<dEBRUYNE>** Or would that be too short  
**\<hyc>** would probably need mooo's opinion there  
**\<hyc>** what's our outstanding PR count look like anyway?  
**\<dEBRUYNE>** I am thinking that we have freedom to release early as we do not have any last minute consensus changes  
**\<dEBRUYNE>** Quite a lot, but I am working with luigi to get the queue down :P  
**\<dEBRUYNE>** luigi & mooo\*  
**\<hyc>** cool  
**\<hyc>** a mid-Sept release date sounds plausible. basically 1 month from now?  
**\<dEBRUYNE>** Sounds like a decent target  
**\<dEBRUYNE>** It also gives services, users etc. a larger time frame to prepare  
**\<dEBRUYNE>** The forks with binaries 1 week in advance were admittedly quite hectic :-P  
**\<hyc>** so we would expect testnet to switch to randomx on that mid-Sept date  
**\<hyc>** on or around...  
**\<jtgrassie>** it would be nice to have testnet fork a little earlier to randomx imo  
**\<sarang>** There was some issue with another project's switch to RandomX, right?  
**\<sarang>** Was that an issue with a miner implementation?  
**\<hyc>** Loki. xmrig bug  
**\<hyc>** there are no issues with the monerod integration  
**\<dEBRUYNE>** What was the effect of the bug?  
**\<dEBRUYNE>** (in the miner that is)  
**\<hyc>** jtgrassie: so, switch over testnet earlier, but on self-compiled binaries maybe?  
**\<hyc>** dEBRUYNE: the miner didn't reinitialize the dataset when seed epoch changed  
**\<jtgrassie>** yes  
**\<hyc>** all blocks mined after that point were invalid, rejected by daemons  
**\<hyc>** restarting the miner would get it working until the next epoch  
**\<hyc>** but it was patched pretty quickly  
**\<dEBRUYNE>** Ah I see, so part of the network hashrate basically disappeared because they were mining invalid blocks  
**\<hyc>** yes  
**\<rbrunner>** So will those mid-September binaries now be the ones that do not support \*long\* payment id's anymore? I lost a little the overview  
**\<hyc>** no idea, haven't followed payment ID discussion  
**\<dEBRUYNE>** needmonero90: did Binance provide you with a timeline?  
**\<needmonero90>** https://usercontent.irccloud-cdn.com/file/IA4ai9LF/Screenshot\_20190811-102559\_Telegram.jpg  
**\<needmonero90>** https://usercontent.irccloud-cdn.com/file/eo22z2BE/Screenshot\_20190811-102608\_Telegram.jpg  
**\<needmonero90>** https://usercontent.irccloud-cdn.com/file/YcXsymNo/Screenshot\_20190811-102612\_Telegram.jpg  
**\<needmonero90>** There was the latest.  
**\<needmonero90>** I can upload the full convo to pastebin if you want it  
**\<sarang>** neat  
**\<rbrunner>** Yeah, sounds good  
**\<tat>** moneromooo: are there any infos on which exchanges would be able to receive/send to subaddresses after the mid September fork?  
**\<tat>** sorry i meant needmonero90  
**\<dEBRUYNE>** Anyone got contacts at bittrex or bitfinex? I tried reaching out to them on reddit, but did not get a response  
**\<needmonero90>** Bittrex can be contacted over their slack iirc  
**\<needmonero90>** At least a year and a half ago that was the case.  
**\<rbrunner>** Well, they also could contact \*us\*, at least in theory :)  
**\<tat>** would be good to create a list, i guess some exchanges will be concerned if removing the ability to use payment ids cribles them to get transactions from other exchanges  
**\<needmonero90>** Tat: I just took up the discussion with binance because someone had to do it, I don't have the list of other exchanges.  
**\<tat>** needmonero90: thx  
**\<needmonero90>** I will happily talk to whoever if we get a contact  
**\<needmonero90>** Just ping me their details  
**\<bibble>** Kraken important  
**\<needmonero90>** Kraken will be fine  
**\<bibble>** oh, great :)  
**\<needmonero90>** Least of our concerns on the exchange front  
**\<tat>** i think if at least 3-5 big exchanges would move to subaddresses, that would put some pressure on the rest and they probably follow within a reasonable timeframe  
**\<rbrunner>** Well, "reasonable timeframe" is almost over, with hardfork in mid-October, wouldn't you say?  
**\<rbrunner>** Maybe they are pretty quiet because they don't want let people look into their cards ...  
**\<tat>** rbrunner: we are talking of not using long payment id's anymore, integrated addresses would still work i guess, so most of the exchanges will still be able to work with that as is  
**\<rbrunner>** Ah, ok, right, misunderstood you  
**\<dEBRUYNE>** The most important thing is to get them off long payment IDs imo  
**\<rbrunner>** Certainly, if we don't support them anymore in 2 months  
**\<hyc>** so these exchanges aren't supporting integrated addrs yet?  
**\<tat>** hyc: it depends, i think poloniex uses integrated addresses, bitfinex uses 64 char payent id's  
**\<hyc>** yes, polo uses integrated  
**\<tat>** dEBRUYNE: do you think receiving of transactions with long payment id's will be still supported by the wallet  
**\<rbrunner>** Who would send those, and how?  
**\<tat>** i mean in theory you need to be able to resync, so to prevent that, the wallet would have to ignore all long payment id's from block height X  
**\<rbrunner>** Yes, the code is full of such switches "Starting from height x stop to do X and start do to Y"  
**\<rbrunner>** Daily business, so to say  
**\<tat>** rbrunner: is there really only one source for code of the monero wallet, is there any wallet implementation that isn't using monero c++ wallet core?  
**\<rbrunner>** I would guess that starting with the fork height the long payment just does not get decoded / delivered to the wallet anymore  
**\<rbrunner>** tat: Not sure about MyMonero's code  
**\<moneromooo>** I'm happy with testnet switching to randomx as soon as a patch is made fwiw.  
**\<rbrunner>** Otherwise I think it's pretty much a monoculture  
**\<moneromooo>** Pony's the one to get on board since seed nodes and his mining node will need to be updated then.  
**\<tat>** i mean if there is any wallet that will still send with long payment id's, it wont be too bad, since funds will still arrive but if you rely on that id to track incoming setlements you are screwed  
**\<moneromooo>** The wallet will ignore the payment id IIRC. It'll still get the money of course.  
**\<dEBRUYNE>** hyc: The big ones are binance, bittrex, bitfinex  
**\<dEBRUYNE>** needmonero90 is currently working with binance, I will try to get ahold of the other two somehow  
**\<hyc>** moneromooo: all that's needed before merging the existing randomX integration patch, then, is setting the block height for the testnet fork  
**\<moneromooo>** IIRC I put a command line switch somehwere to enable something there.  
**\<moneromooo>** (about payment id decoding)  
**\<tat>** i would say if an exchange is still using long payment id's and he switches within one month, and he is not able to process long payment id's anymore he will have two years of still receiving to those long payment'id since not all users get that change immediately  
**\<hyc>** they should've switched to integrated addrs 2 years ago ...  
**\<tat>** i think a command line switch would be pretty fair, with the emphasis on this feature will be deprecated, that would send the right signal  
**\<rbrunner>** What do you mean with "not all users get that change immediately"? Your software will stop to work after the hardfork, no?  
**\<hyc>** and it's their own obligation to notify their users if deposit addresses change  
**\<rbrunner>** Maybe I misunderstand, but this is not Bitcoin where the move to SegWit takes 5 years or so ...  
**\<moneromooo>** The wallet has been warning it's deprecated for a while.  
**\<tat>** hyc: so you are full positive that sending out with long payment ids will be impossible after the next hard fork  
**\<moneromooo>** It will likely be still possible.  
**\<jtgrassie>** fwiw, we have been stating long payment ids are deprcated for ages now. they are a problem for privacy and IMO removed asap.  
**\<moneromooo>** But if several large exchanges still use long payment ids close to the fork, I might be convinced to consensus ban them.  
**\<rbrunner>** "Close to the fork" ... being ... about today :)  
**\<moneromooo>** Oh.  
**\<needmonero90>** To elaborate, using them has required going to advanced settings and toggling a box saying "don't do this" before you could send for ages.  
**\<moneromooo>** Is there fork soon ? I missed the talk.  
**\<hyc>** mid-OCtober presumably  
**\<moneromooo>** We're liky july, no ?  
**\<rbrunner>** No, I mean, as far as big projects are concerned, 2 months pass in a blink of an eye  
**\<moneromooo>** August. Close enough.  
**\<moneromooo>** OK, true.  
**\<needmonero90>** I did give binance until October, so it would be nice not to go faster than that  
**\<moneromooo>** So "binance, bittrex, bitfinex" sounds like a lot indeed.  
**\<needmonero90>** Or I'll have to backpedal and apologize and politick  
**\<tat>** i totally support that point, but for the poor souls that use still long payment ids and continue to receive payments, after the fork with long payment ids, since some users/exchanges will still do so it will be case for customer suport every single time  
**\<rbrunner>** "Possible" does not mean "easy to do". Maybe would need your own doctored self-compiled software  
**\<jtgrassie>** exchanges and users won't ever stop using payment ids while they are still possible.  
**\<rbrunner>** Which would work because \*consensus\* would still allow the long id's  
**\<vtnerd\_\_>** to the above: mymonero is indeed not using the monero core wallet - it simply cannot actually  
**\<vtnerd\_\_>** the light wallet server and openmonero implementations are using parts but not the whole as well for the same reason  
**\<vtnerd\_\_>** but the payment id stuff is client side which has already moved away from long ids  
**\<tat>** i think making it impossible to send long payment ids, but have a switch that still allows to decode them would be a good move, possible fading that switch out over time  
**\<endogenic>** yeah our pure fns for long payment ids were actually deleted in mymonero core iirc  
**\<endogenic>** fwiw monero core can adopt that code  
**\<rbrunner>** I think long payment id's still floating around after the work is much less probable than some poor exchange not being able to receive payments at all  
**\<rbrunner>** s/work/fork  
**\<tat>** rbrunner: could be true, there is only a few wallets, if they all disallow that, and there is no hand woven code that push transactions to the network  
**\<hyc>** we have certainly seen oddball txns on the network before, which probably came from custom wallet code  
**\<hyc>** but I don't see that as our problem to manage  
**\<jtgrassie>** except it potentially weakens other users privacy  
**\<jtgrassie>** (e.g. if those odd tx outputs get used as decoys)  
**\<jtgrassie>** which is why i favor banning long payent ids at protocol level  
**\<hyc>** I'm a bit reluctant to do that since we still are keeping extradata itself  
**\<dEBRUYNE>** Banning in october seems a bit optimistic imo  
**\<hyc>** but if the official wallets have already disabled generating them by default, seems OK to me  
**\<rbrunner>** You do mean the long payment id's? Well, backing down now could set a bad precedent  
**\<moneromooo>** FWIW, to see what I've done: https://github.com/moneromooo-monero/bitmonero/commits/crash  
**\<hyc>** yes  
**\<moneromooo>** I don't remember exactly so can't give a tl;dr :)  
**\<moneromooo>** (grep for "payment" in the commit title)  
**\<hyc>** this? https://github.com/moneromooo-monero/bitmonero/commit/0951c3a9ad0c8376b8abd8908603166d7ffc174d  
**\<jtgrassie>** that one looks good to me  
**\<moneromooo>** Yes. There's at least another one a few commits earlier.  
**\<hyc>** I also see ignoring receivedo nes https://github.com/moneromooo-monero/bitmonero/commit/6aad370708c0c06c1091912fcc97dceaa09d5b75  
**\<rbrunner>** So standalone \*short\* id's are gone also, at least over RPC, if I read that code correctly.  
**\<rbrunner>** Only integrated over RPC  
**\<hyc>** yeah that all looks good to me  
**\<moneromooo>** Yes. They were never supposed to be supported. I added them because I'm an idiot. luigi was right.  
**\<rbrunner>** Now we just wait what bittrex, bitfinex say :)  
**\<rbrunner>** I still count on them not being stupid, just not noisy - working on it for quite some time already  
**\<hyc>** back to randomx - any suggestions for testnet fork date? 1 week from today? sooner? later?  
**\<moneromooo>** Whenever pony can be certain to have his nodes updated.  
**\<moneromooo>** So... mid november ?  
**\<hyc>** sigh...  
**\<rbrunner>** 2 weeks, for the next meeting?  
**\<moneromooo>** Oh. I did have some minor stuff I wanted to add for v12.  
