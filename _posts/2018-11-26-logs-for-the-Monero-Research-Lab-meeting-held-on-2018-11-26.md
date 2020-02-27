---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-11-26
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<sarang>** It's just about time to begin our meeting  
**\<rehrar>** hope you're having all of the fun  
**\<sarang>** all ofit  
**\<suraeNoether>** allllright everyone, let's begin  
**\<suraeNoether>** Greetings from MRL.  
**\<sarang>** heyo  
**\<suraeNoether>** before we really get rolling, does anyone have any questions to open the meeting wiht?  
**\<IRS>** o/  
**\<sarang>** I assume this meeting will be reasonably short, given U.S. Thanksgiving was last week and some of our folks are from U.S.  
**\<suraeNoether>** fire away  
**\<suraeNoether>** okay  
**\<endogenic>** the IRS will never call or IRC you  
**\<suraeNoether>** assuming no questions, let's get going I guess. sarang, want to share what you worked on for the past week or so?  
**\<sarang>** Sure  
**\<sarang>** I have a few things  
**\<sarang>** First, there was interest expressed in possibly getting another researcher on board  
**\<sarang>** It would get funded, but we'd need someone qualified and available  
**\<sarang>** So this is more of a "if you know people, send them our way"  
**\<sarang>** The second thing is that I'm working with those outside researchers from Australia on their spent-output stuff  
**\<sarang>** Turns out they didn't invent the ideas on their papers :/ but it's good formalization  
**\<suraeNoether>** (to be clear, sarang means an outside group has approached us offering to fund a new researcher)  
**\<gingeropolous>** ^ wow  
**\<Inge->** sweet  
**\<sarang>** Third, still working more on cross-curve discrete log stuff  
**\<rehrar>** what level of researcher are you looking for? full time?  
**\<sarang>** We could easily fund full time, but part time is better than no time  
**\<spaced0ut>** an academic group?  
**\<sarang>** No, it's a foundation  
**\<sarang>** Anyway, just throwing a line out there  
**\<suraeNoether>** rehrar: take what we can get? we have a huge list of todos and all of us have full plates.  
**\<rehrar>** well that's awesome  
**\<suraeNoether>** I kind of feel like research does the following  
**\<suraeNoether>** if human knowledge is a circle (think venn diagram), then the circumference is the interface with the unknown, and adding to the circle of knowledge just makes the circumference bigger  
**\<suraeNoether>** so the problem is that if we add additional people without a firmly defined scope, I fear we will have a mission creep sort of thing happening  
**\<suraeNoether>** i'm eager to have more hands and eyes on our project, for sure  
**\<sarang>** Sure, but that doesn't mean we can't set a reasonable number of desired peeps  
**\<suraeNoether>** ^ yep  
**\<sarang>** For the limited current scope we have, I think at least one more person would be very useful  
**\<sarang>** But again, cart before the horse  
**\<suraeNoether>** I just think we should kick some ideas around on coming up with a more concrete scope  
**\<suraeNoether>** so let's chat about that later, maybe? we have time to chat about it, for sure  
**\<sarang>** First, does evenlessmoney (stick with a handle, dude!) want to talk about bloat?  
**\<evenlessmoney>** yes, let me repost my message  
**\<sarang>** ty  
**\<suraeNoether>** so we can move on for now, but this has come up in several research meetings before, the prospect of adding to the MRL crew... so we should formalize our ideas about it this week  
**\<sarang>** ArticMine chimed in earlier about it, FWW  
**\<sarang>** FWIW  
**\<evenlessmoney>** The block size adjustment algorithm has been on my mind in recent weeks. I was asked in another chat what the biggest caveats were with the dynamic block size, and after thinking about it, I concluded that a motivated attacker could pay the extra fee to bump the block size, and then maintain a perpetual low cost flood of transactions to bloat the utxo set.  
**\<evenlessmoney>** https://link.medium.com/OrG5th051R  
**\<evenlessmoney>** This article underscores the need for our nodes to remain syncable to the masses, it is doubly important that Monero remains syncable on commodity hardware long run, considering the privacy implications a remote node brings.  
**\<evenlessmoney>** After some deliberation, I think capping block size in the code may be necessary, and that allowing it to be dynamic with no upper bound is dangerous. I would love to hear some input from people who are more informed than me on the matter.  
**\<evenlessmoney>** articmine mentioned that he doesnt think that this is an issue, but I had a second question afterwards  
**\<suraeNoether>** one moment let me process this  
**\<ArticMine>** Reading the article  
**\<evenlessmoney>** which involved the centralization of nodes - if our block size has too quick a growth rate, nodes cant sync on commodity hardware  
**\<evenlessmoney>** which is what that article points out  
**\<evenlessmoney>** most of the network would be forced to use remote nodes, unless I'm misunderstanding  
**\<gingeropolous>** its a long article. TL/DR is ethereum is becoming unsyncable and therefore will become centralized  
**\<spaced0ut>** at first glance. if possible to make the attack more expensive is an option it might be worth looking at vs capping the block size. does anyone really want to go there right now?  
**\<evenlessmoney>** its worse for Monero IMO, because we really want to stress users running their own nodes  
**\<gingeropolous>** and any network that becomes unsyncable becomes centralized  
**\<evenlessmoney>** for privacy's sake, not even decentralization  
**\<suraeNoether>** spaced0ut: one option is to add a nonlinear term to fees. another option is to add a momentum term to block size adjustment, or a resistance term, so to speak. however...  
**\<suraeNoether>** evenlessmoney: when we changed our fees, we did make such an attack much less expensive to carry out, but I don't think it's particularly an issue... if folks think it is, we can maybe consider some simulations, etc, and add a resistance  term to dynamic block size. this would prevent the block size from responding extremely elastically to network demand...  
**\<suraeNoether>** but we can all see how that leads to an opposite problem, right, where the block size is too rigid and can't change with demand?  
**\<ArticMine>** First unlike Ethereum and Bitcoin Cash there is a cost to bloating the Monero blockchain that is comparable to a 51% attack  
**\<evenlessmoney>** Not on a continuous basis  
**\<evenlessmoney>** only to raise the block size  
**\<evenlessmoney>** once the size is up, you can perpetually fill those blocks with bloat txes for cheap  
**\<ArticMine>** You havee to get it there in the first place  
**\<ArticMine>** have  
**\<gingeropolous>** and any pool can mine those txs in  
**\<evenlessmoney>** You can do a couple percent a block  
**\<evenlessmoney>** its not very expensive when you ratchet it over a few days  
**\<suraeNoether>** evenlessmoney: cheaper than before, but not free, and maintaining a long-term flood is non-trivially expensive, even for super cheap monero fees  
**\<evenlessmoney>** I'm more worried about baseline activity being that high  
**\<evenlessmoney>** and cheap  
**\<evenlessmoney>** in this situation  
**\<evenlessmoney>** if Monero becomes the de facto BTC alternative  
**\<suraeNoether>** in my mind, I don't see this as a practical attack. people have to blow their Monero in order to drag monero's blockchain down... seems like an incentivization problem, not a security problem. and going the opposite direction, by making monero block size more rigid, presents other scaling problems  
**\<spaced0ut>** can we calculate the cost to double the size over time periods in between hard forks? or even calculate the cost to add a terabyte to the size?  
**\<ArticMine>** The cost of bloating to a given size is close to independent of the rate of bloat. One can pay all at once or over time  
**\<suraeNoether>** there are a few options to address this, that don't require deep changes nor totally fixed block sizes, i'm just not convinced of the power of an attacker, and ArticMine's fact re: cost of bloating is a really important factor  
**\<gingeropolous>** well one thing to point out is that the median 100 is a parameter from the original implementation  
**\<suraeNoether>** one option: momentum/resistance term, so that increasing block size is harder the further it is away from some fixed "ideal", which we can always change later  
**\<gingeropolous>** and those guys didn't think some things through fully, so I think its fine to question the block growth rate  
**\<suraeNoether>** another option: coupling block size with past block sizes in a moving average sort of way. similar to the momentum trick  
**\<suraeNoether>** gingeropolous: I agree with that statement  
**\<rehrar>** evenlessmoney: if this attack does turn out to be practical though, would a solution be to have to continue to pay a fee to keep the block size above default?  
**\<evenlessmoney>** its not even an 'attack' so much as popularity  
**\<suraeNoether>** another option: change the timescale of blocksize adjustment so that going up in block size requires a lot of statsitical evidence and, lacking htat, we have a rapid exponential decay back to baseline, or something like that  
**\<gingeropolous>** ^^  
**\<suraeNoether>** rehrar: yeah, having a fee penalty proportional to the difference between the current block size and the "resting" size would do the trick  
**\<rehrar>** I think the biggest issue here is that one you pay the fee to bump the blocksize, as long as the block remains full, it's free to keep it at that blocksize, correct?  
**\<ArticMine>** In creasing the median to more that 100 block will make this attack way more expensive and if the new median is chosen carefully will have little impact overall  
**\<evenlessmoney>** there is no additional cost that I am aware of rehrar  
**\<suraeNoether>** rehrar: that summarizes the potential issue. i'm not sure if it's an issue. :P  
**\<suraeNoether>** after all, there's an argument: if they are paying fees, it ain't spam  
**\<rehrar>** so my suggestion of miners having to continuously pay a fee for any blocksize above default is I think beneficial from a incentivization perspective, because it makes sure that blocks absolutely need to be that large  
**\<rehrar>** or they start slipping back down  
**\<gingeropolous>** rehrar, but that kind of breaks the scaling  
**\<spaced0ut>** does anyone have some idea how how much money we're talking to perform this attack? are we looking to be safe vs nation states?  
**\<gingeropolous>** someone ran some python on this recently  
**\<ArticMine>** That is actually the case now since one does not get a rebate for mining below the effective median  
**\<gingeropolous>** Isthmus, where u at  
**\<suraeNoether>** i would like us to stop calling this an attack. It's not like a DOS attack or something like that.  
**\<spaced0ut>** well it actually could be a DOS if well funded enough and nodes can't sync right?  
**\<ArticMine>** I agree.  
**\<suraeNoether>** how could you distinguish it from healthy usage without a lot of real-life extra information?  
**\<rehrar>** this is the big issue, and where a lot of criticism of Bitcoin comes in  
**\<ArticMine>** A DDOS against node is actually a weakness of fixed blocksize coins such as Bitcoin  
**\<rehrar>** if Bitcoin tx goes up, some will say it's a spam attack, and some will say it's adoption  
**\<rehrar>** and we simply do not have an oracle able to differentiate  
**\<suraeNoether>** okay, let's do this  
**\<rehrar>** and even if there was a reliable one, it would probably not be a decentralized one  
**\<ArticMine>** There were spam attacks in Bitcoin to drive up fees. This works if hte block are full since most of the spam ts are not mined  
**\<ArticMine>** But they cost andwith to the nodes  
**\<gingeropolous>** to me it seems there is a small list of useful information needed to address the issue: 1) cost of attack, in XMR, to get to 3 GB / block in one day per Isthmus "\<Isthmus> 00:44 By the end of the 1st day: 3 goddamn GB per block"  
**\<ArticMine>** bandwith  
**\<suraeNoether>** let's just do some back of the napkin calculations today and see what we see. then we can talk about it more. :P  
**\<suraeNoether>** why 3 GB/block?  
**\<rehrar>** yes, concrete numbers are needed  
**\<ArticMine>** Compare the cost to a 51% attack  
**\<gingeropolous>** 2) current node processing ability. What is the existing blocksize tipping point for processing  
**\<sarang>** Yes, without numbers or simulations (e.g. the work Isthmus and others have done) in this discussion, all this is speculation without data  
**\<rehrar>** we may not be "academics" like Zcash (according to Snowden)  
**\<gingeropolous>** suraeNoether, 3 GB / block because thats what Isthmus ran if you do the maximum possible expansion  
**\<rehrar>** but we can still pretend to math, at least  
**\<suraeNoether>** gingeropolous: wait do you mean "by the end of one day, block sizes could be 3Gb?"  
**\<gingeropolous>** i.e., if you max out the equation, you can get to 3 GB / block in 1 day  
**\<suraeNoether>** hmm  
**\<suraeNoether>** yeah, let's merely estimate how much that would literally cost someone  
**\<sarang>** I'd like to see this done on testnet  
**\<suraeNoether>** ooooh  
**\<suraeNoether>** yeah, why simulate it if you can just simulate it? :P  
**\<sarang>** we literally have a toy network available  
**\<ArticMine>** Sure and pay 4x the reward. Why not just do a 51% attack?  
**\<sarang>** that we can nuke  
**\<gingeropolous>** im just parroting Isthmus 's work  
**\<moneromooo>** Don't spam testnet.  
**\<gingeropolous>** https://usercontent.irccloud-cdn.com/file/UHG4yi8G/image.png  
**\<sarang>** make a new testnet, toynet  
**\<gingeropolous>** axis lbels be damned apaprently  
**\<endogenic>** spamnet  
**\<suraeNoether>** we need a testtestnet?  
**\<spaced0ut>** do it on wow  
**\<endogenic>** we shall have our own testnet! with spam, and DOS attacks!  
**\<rehrar>** ^  
**\<evenlessmoney>** ooh, yes  
**\<evenlessmoney>** wownero pls  
**\<rehrar>** let's finally make them useful for something  
**\<evenlessmoney>** they're good for memes..  
**\<sarang>** Anyway, this discussion hasn't really produced much IMO  
**\<ArticMine>** In any case the parameter I would look at if this is an issue is the median number of blocks.  
**\<gingeropolous>** ^^  
**\<ArticMine>** for an increase  
**\<evenlessmoney>** We can look into running some simulations  
**\<evenlessmoney>** anyone got a cache of testnero?  
**\<evenlessmoney>** needtestnero90  
**\<gingeropolous>** ugh, lets not make testnet a pain to use  
**\<Isthmus>** Hey, sorry for belated response. I'm on phone, at work, can't really hang in meeting, but just saw all the pings  
**\<Isthmus>** https://github.com/noncesense-research-lab/Blockchain\_big\_bang/blob/master/Isthmus\_Bx\_big\_bang\_model.ipynb  
**\<Isthmus>** Updated simulations are there  
**\<evenlessmoney>** I'll speak with isthmus (we can maybe get together), we can talk about simulations and stuff  
**\<ArticMine>** But keep in mind if a 51% attack is cheaper then what is the point of this attack?  
**\<evenlessmoney>** and report back next meeting or something  
**\<suraeNoether>** ArticMine: medians require 50% violation of data before the median shifts (breakdown point... https://en.wikipedia.org/wiki/Robust\_statistics )  
**\<Isthmus>** https://usercontent.irccloud-cdn.com/file/EziXrd38/image.png  
**\<gingeropolous>** a 51% attack costs energy, this attack costs units of account  
**\<suraeNoether>** ArticMine: i don't think it's cheaper  
**\<moneromooo>** smooth had a good suggestion, to have the penalty start before the median, so you'd get penalty free till, say, 90% of the median. This would cause a natural shrinking if the txpool is full of low fee txes.  
**\<evenlessmoney>** oh  
**\<evenlessmoney>** thats smart too  
**\<evenlessmoney>** I like that one, one of my big issues has been that its basically free (base tx cost) to keep block sizes up atm  
**\<suraeNoether>** isthmus, the axes of your graph are transparent on my computer and i can't read them. :P  
**\<gingeropolous>** hell, someone could find a flaw in monero, print a bajillion monero, and then bring the network to its knees for nothin  
**\<Isthmus>** https://usercontent.irccloud-cdn.com/file/X1So57dJ/image.png  
**\<Isthmus>** Sorry, is that legiblbe?  
**\<evenlessmoney>** ginger thats a threat if they get infinite monero no matter what our algo is  
**\<Isthmus>** 51% and bloat are two totally unrelated attacks that accomplish different things. It's an apples/oranges comparison  
**\<suraeNoether>** is graph over a day? Isthmus  
**\<suraeNoether>** yeah i can read it now  
**\<Isthmus>** Or maybe that was already discussed more earlier, I'm not caught up on scrollback and need to hop back to work  
**\<ArticMine>** ut unites of account translate into energy via the lock reward  
**\<suraeNoether>** ArticMine: the 51% attack requires hardware/POW. this bloat issue requires only cash, like a POS attack  
**\<suraeNoether>** you can attack the network without being a miner if you have the capital using this approach  
**\<ArticMine>** It is not like a POS attack because in this case hte cash is burned  
**\<suraeNoether>** true, but it is like a POS attack because all it requires is capital  
**\<suraeNoether>** not hardware  
**\<spaced0ut>** wow 200k eur for 10TB in 2 days  
**\<Isthmus>** Ok, I gotta bounce back to work. All of the info & FAQ are in that notebook, although it's a very rough draft that I had written up for internal use.  
**\<ArticMine>** POS can use borrowed capital  
**\<Isthmus>** There are probably some small bugs, feel free to fix it. :- 0  
**\<gingeropolous>** thanks Isthmus  
**\<suraeNoether>** Isthmus: sorry to bother you, i just want to make sure i understand: does that mean 1 million euros can drive the monero blockchain to be more than 1 million gigs in size?  
**\<suraeNoether>** within a DAY?  
**\<Isthmus>** I think it might take 2 days to get to 10 TB  
**\<Isthmus>** But essentially.  
**\<Isthmus>** This is taking into account the exponential accumulation  
**\<suraeNoether>** wow. thanks  
**\<ArticMine>** You are maxing out the penalty?  
**\<suraeNoether>** okay, let me think about this more, but now I've shifted my opinion  
**\<Isthmus>** Yes, totally override the penalty to make block ~2\*(median of last 100) for every block. It's very petal to the metal, deliberately sized attack  
**\<gingeropolous>** yes, median 10k  
**\<ArticMine>** Then it is 4x the lock reward  
**\<ArticMine>** block  
**\<suraeNoether>** I think we should have a term in our fees that is proportional to a super-linear function of the difference between current block size and a "target" block size, say 1MB right now  
**\<spaced0ut>** what about raising the cost to increase again if the block size has recently increased in X amount of blocks?  
**\<spaced0ut>** drastically raising maybe  
**\<ArticMine>** Fees are driven by the penalty  
**\<rehrar>** spaced0ut: in the event of rapid adption (should it ever happen), this would cripple the network for quite some time  
**\<ArticMine>** So one needs to look at the penalty function.  
**\<ArticMine>** The simplest an lees disruptive is to increase the 100 block median  
**\<ArticMine>** less  
**\<spaced0ut>** well assuming this hasn't happened before we can probably get pretty good data (maybe even from btc also) on the upper bound of how rapid real adoption could be. just a thought  
**\<spaced0ut>** the size shouldnt need to double 10 times in a row  
**\<evenlessmoney>** we risk the BTC people moving here en masse  
**\<evenlessmoney>** or the ecosystem moving in  
**\<gingeropolous>** and i ultimately think increase the 100 block median won't affect UX drastically. It will actually drive a fee market. Current activity is very burst-like.  
**\<gingeropolous>** so delays will eventually clear  
**\<gingeropolous>** and those needing priority can get it  
**\<gingeropolous>** but if the network actually demonstrates a need for larger blocks, they come into existence  
**\<gingeropolous>** and we somehow work a long tail into the decay  
**\<lurkinandlearnin>** surely rapid adoption shouldn't be catered to above long term survivability against this type of attack  
**\<ArticMine>** The only downside to increasing the median I can see is that the network may not e able to adapt to seasonal changes such as December  
**\<evenlessmoney>** its not even an attack, if we get too popular and fees are too cheap for large blocks, we risk nodes becoming unsyncable  
**\<evenlessmoney>** the unbounded block size is concerning imo  
**\<suraeNoether>** increasing sample size for the median over 100 blocks will make such a drift attack slower (and therefore cost a lot more, because you have to do it over more and more blocks) but linearly slower. and is a rigid sort of decision, as ArticMine mentions re: December. Adding a nonlinear term to our fees seems sensible to me.  
**\<evenlessmoney>** forcing average users to sync against remote nodes due to bandwidth constraints is dangerous  
**\<sarang>** Yes evenlessmoney that's the whole point of Isthmus's posting  
**\<spaced0ut>** if anyone needs to be secure against nation states it's XMR  
**\<gingeropolous>** im interested to see what Isthmus 's multistate memory thing is  
**\<rehrar>** but...and I hate to say it like this, hasn't this already been kinda known for a while?  
**\<ArticMine>** Yes ut how do you enforce non linear fees?  
**\<rehrar>** Because we have a dynamic blocksize, we can scale with adoptin  
**\<suraeNoether>** multi-term memory sounds like moving averages of different spans of time to me  
**\<moneromooo>** "secure against nation states" is ridiculous. They could fuck with us anytime they wanted to already.  
**\<ArticMine>** That is the whole point  
**\<rehrar>** although taht would mean maybe going up to several GB block sizes.  
**\<spaced0ut>** moneromooo, fair enough but shouldn't that be the goal?  
**\<suraeNoether>** rehrar: yeah, but just like a lot of other monero problems, we are learning about the size/scale of the issue.  
**\<suraeNoether>** i agree with moneromooo :P  
**\<sarang>** rehrar: yes, this has been known for a while  
**\<evenlessmoney>** we didnt have hard numbers from isthmus until recently either  
**\<evenlessmoney>** its been a bit more nebulous  
**\<ArticMine>** A fixed block size has been proven to be a disaster for Bitcoin and as recent events have demonstrated for Bitcoin cash  
**\<evenlessmoney>** Time will tell whether Bitcoin's decision was a disaster. I think the jury is still out.  
**\<gingeropolous>** my thinking is, there is a hard cap. Its 2X the current blocksize. I really think we need a long perspective on the median. Like 6 months. however many blocks that is  
**\<spaced0ut>** +  
**\<suraeNoether>** gingeropolous what if we have a dynamic soft cap that is determined by a long time-scale measurement? :P  
**\<gingeropolous>** thats prolly the multistate thing :)  
**\<ArticMine>** My take is that  increasing the median is the way to address this concern provided it is legitimate.  
**\<ArticMine>** By legitimate I mean a cost comparison with a 51% attack  
**\<lurkinandlearnin>** That sounds good to me. I would rather the network slow down in the rare december-like situation that someone being able to inflate the blockchain to unusable levels for less than the "cost" (however you quantify that because they are different) of a 51% attack  
**\<spaced0ut>** definitely  
**\<ArticMine>** Long medians with say a 6 month time frame will not lead to Bitcoin's problems  
**\<moneromooo>** A 51% attack is recoverable from. That one seems not.  
**\<ArticMine>** It depends on what the 51% attack does  
**\<gingeropolous>** i think the problem, like the 51%, is that the cost is dynamic and unpredictable. I.e., it cost less to 51% the monero network 3 years ago. We don't know what the hardware will be in 5 years, or the state of network. The protocol needs to be hardware agnostic as much as it can  
**\<rehrar>** with the volatility of Monero, this thing is unpredictable too  
**\<rehrar>** since it requiers unit of account, this "attack" can be done while Monero is dirt cheap, and the effects stick around  
**\<rehrar>** even if Monero goes way up and this isn't feasible anymore  
**\<ArticMine>** ^^ es it has to be hardware agnostic  
**\<ArticMine>** Yes  
**\<suraeNoether>** i'm in agreement with articmine for now. both: 1) we need to estimate costs for 51% vs. bloat and 2) a long-time-scale soft cap seems super smart, especially considering how bursty the network is in general  
**\<lurkinandlearnin>** Also because this resembles a PoS attack, you have to remember that it could be done for "free" if people/whales/exchanges are stolen/compromised  
**\<sarang>** Sounds like a long-scale median increase is an adjustment that, while probably suboptimal, is better understood  
**\<suraeNoether>** we can make it even softer by using that long-time-scale soft cap as the anchor point for a nonlinear penalty term  
**\<gingeropolous>** so we gonna use a magic number or see if we can get an emergent one  
**\<rehrar>** and even softer if we wrap the solution in fur  
**\<ArticMine>** There is a lot of room between 3.4 hours and 6 months to tune the median  
**\<ArticMine>** and make it optimmal  
**\<suraeNoether>** ArticMine: given the 50% breakdwon point of medians...  
**\<suraeNoether>** if we did 6 months, that implies that at least 3 months of \*all monero transactions\* would have to be bloat transactions  
**\<suraeNoether>** for someone to raise the soft cap over time  
**\<sarang>** Isthmus: would be nice to see the effects of a long-term median in your sims  
**\<sarang>** IMO that's the best approach to this analysis right now  
**\<suraeNoether>** moreover, if we don't actually cap anything but add a nonlinear penalty to block reward for block sizes above the "soft cap" chosen by a long-time-scale-median, temporary fluctuations in economic activity would be handled relatively easily  
**\<suraeNoether>** we'll seek out more information  
**\<suraeNoether>** and try to come up with a write-up  
**\<suraeNoether>** after isthmus and noncesense have had their way with some analyses  
**\<rehrar>** that's smart suraeNoether  
**\<lurkinandlearnin>** Maybe finding medians/"target values" and softcaps might be an actual legitimate application of some TA haha  
**\<suraeNoether>** lurkinandlearnin: other way around :D  
**\<suraeNoether>** there are no legitimate applications of TA, but there are legitimate applications of statistics \*for use in\* TA :P hehe  
**\<ArticMine>** A hybrid approach could be used to deal with seasonal issue. Essentially a stiff penalty over the long term median  
**\<suraeNoether>** shit, we can easily do a seasonal model, too  
**\<suraeNoether>** https://machinelearningmastery.com/sarima-for-time-series-forecasting-in-python/  
**\<suraeNoether>** we wouldn't be using this for forecasting  
**\<endogenic>** sarima noether  
**\<ArticMine>** That implies baking in an eternal event  
**\<lurkinandlearnin>** Yes that's what I mean. The whole point of the TA bullshit is to find patterns which would "look" reasonable given past results (and to claim this somehow predicts them). Whereas we want to put limits on what "looks reasonable" to apply incentives. Right?  
**\<gingeropolous>** ima throw it out there... i think we should target this for protocol change spring 2019 fork  
**\<gingeropolous>** if we have something fancy, great. If not, we just pick a larger median.  
**\<suraeNoether>** gingeropolous: i'm fine with that. i think the large sample size median is going ot have some rigidity problems with the network, i'll work with isthmus to write something up maybe  
**\<sarang>** Cool, I think that sums things up nicely for now, until we have data on this  
**\<gingeropolous>** a rigid network is more useful than a broken one :)  
**\<sarang>** In the interest of time, any other topics to discuss with the whole group?  
**\<suraeNoether>** gingeropolous: sure :D  
**\<suraeNoether>** okay, other than that  
**\<suraeNoether>** over thanksgiving: i read papers on accumulators and learned some more about STARKs  
**\<suraeNoether>** and sarang is still running some matching code for timing purposes  
**\<suraeNoether>** my matching paper is coming along :D  
**\<suraeNoether>** aaaand I don't have anythign else to talk about  
**\<suraeNoether>** sarang? anything else? does anyone else have interesting projects they want to chat about? even if its not formally for MRL or kovri or monero specifically  
**\<sarang>** Perhaps to sum up our meeting, does anyone have goals for the next network upgrade? This ties in with our earlier discussion  
**\<suraeNoether>** ^ good question!  
**\<endogenic>** ring size increase?  
**\<suraeNoether>** hold on that until i have more information from matching. :P  
**\<sarang>** Seems like a change to handle bloat would be good, PoW tweak...  
**\<hyc>** everyone here following tevador's RandomX ?  
**\<sarang>** and any recommendations from the matching that are urgent  
**\<lurkinandlearnin>** IMO goals should be getting rid of the payment ID/integrated address/subaddress confusion and what was discussed today  
**\<sarang>** Nuking payment IDs is a longer-term issue IMO  
**\<sarang>** Setting a timeline is more reasonable  
**\<gingeropolous>** its just standing up to exchanges  
**\<sarang>** RIght  
**\<endogenic>** we should deprecate and kill long pids for sure  
**\<gingeropolous>** i think a timeline was proposed but never agreed on  
**\<lurkinandlearnin>** exchanges laziness shouldn't slow down the improvement of the network  
**\<gingeropolous>** ^^  
**\<sarang>** But if we don't set a timeline, we become Zcash with their "deprecate transparent addresses SOMEDAY"  
**\<moneromooo>** Whether or not to add IPv6 connectivity might be relevant. IPv4 scarcity is said to be a barrier to Sybils. How much though, I don't know.  
**\<lurkinandlearnin>** is it reasonable to have a goal of having only subaddresses by the next September upgrade?  
**\<hyc>** as an enforced consensus rule?  
**\<sarang>** I don't have enough knowledge of exchange timelines to say  
**\<sarang>** hyc: yes  
**\<gingeropolous>** imo, deprecating pids isn;t an MRL thing  
**\<sarang>** We've already said "please don't use them"  
**\<pigeons>** the client could just make choices about how to diversify its connections if IPv6 is used  
**\<sarang>** gingeropolous: yeah, only bringing it up because I asked about upgrade goals :D  
**\<moneromooo>** Only works for outgoing connections.  
**\<suraeNoether>** i feel like you are correct gingeropolous but I want to shy away from the "not my problem" effect  
**\<hyc>** doesn't adopting i2p expose us to the same Sybil possibilities?  
**\<moneromooo>** I don't know enough to say.  
**\<suraeNoether>** okay, so it seems like we have hit all our major points  
**\<hyc>** very long addresses, and you have no way to know where they originate from  
**\<hyc>** worse than IPv6 in that regard  
**\<suraeNoether>** and we can continue chatting about ipv4 and ipv6 and medians for the rest of the day  
**\<suraeNoether>** but i think that's sufficient for our meeting today :D  
**\<sarang>** Great, so action items are to get Isthmus and friends to examine median changes, and be thinking about upgrade  
**\<moneromooo>** Oh. One other thing that's related:  
**\<sarang>** sure  
**\<moneromooo>** If the blockchain is split in N stripes, such that every peer selects a random stripe (that is, 4096 blocks every N\*4096). What is the optimal value of N (too small means you save less storage, too large means it gets harder to find the data you need to sync).  
**\<evenlessmoney>** Do we use Bitcoin's default peer limit of 8?  
**\<evenlessmoney>** If so, that should be factored in to n  
**\<moneromooo>** 8 outgoing peers, unlimited incoming IIRC.  
**\<sarang>** The optimal value depends on our metric, I suppose  
**\<moneromooo>** OK. That was a bad question. A better question was "what is the best metric".  
**\<suraeNoether>** hmm  
**\<hyc>** I think it's just a question of, how much space do you need to save  
**\<suraeNoether>** moneromooo: i feel like N < 3 risks byzantine consensus problems  
**\<gingeropolous>** well, the goal is to save space, but the problem is that is a dynamic question for each user  
**\<sarang>** If we assume good connectivity and number of peers, the number could be decently high  
**\<hyc>** yes, and dynamic for the overall chain too since it continues to grow  
**\<gingeropolous>** someone thats not gonna run software that takes up 80 gigs probably still won't run it if it takes up 40  
**\<moneromooo>** suraeNoether: I do not understand.  
**\<hyc>** In my blocktree ramblings I was envisioning 256-way branching  
**\<suraeNoether>** moneromooo: i'm imagining each miner as being a member of one of N coalitions of possibly dishonest participants  
**\<moneromooo>** Ah, one thing I neglected to mention: the pruned data is just range proofs and smaller bits. Not the whole chain.  
**\<suraeNoether>** if everyone in control of one strip is totally dishonest, that information is no longer really accessible  
**\<suraeNoether>** hmm  
**\<suraeNoether>** this is a nontrivial problem  
**\<sarang>** Yeah moneromooo brings up the question of "is old enough prunable data \_safe\_ to remove"  
**\<sarang>** which is related  
**\<suraeNoether>** moneromooo: I don't think we can pick a number without some knowledge of the underlying network topology  
**\<gingeropolous>** this type of thing is ... unprecedented, right? Therefore, it might be the kind of thing that requires measurement. Once implemented, will nodes advertise which portions of the chain they keep?  
**\<gingeropolous>** and therefore, the network could be crawled to obtain a census of adoption of this approach?  
**\<moneromooo>** Yes, nodes adertise. And don't have to stripe if they want to keep all.  
**\<gingeropolous>** right.  
**\<hyc>** ... I would deterministically automate it. e.g., MAC address of first network interface & MASK = stripe #  
**\<gingeropolous>** so, the thing we may want to measure is how many nodes join the network with N.  
**\<hyc>** or some other already-visible node ID.  
**\<gingeropolous>** so, say we start with N of 8, we could measure the increase nodecount that are using 8. Or maybe start with 4.  
**\<gingeropolous>** because thats the goal, right? increase number of nodes?  
**\<hyc>** back to moneromoo's clarification - this isn't striping the entire blockchain. just the prunable stuff, range proofs.  
**\<hyc>** so aside from someone bootstrapping a new node, this has no real impact on data availability  
**\<hyc>** wallets talking to nodes that they trust won't see any change at all  
**\<suraeNoether>** i have a question for moneromooo : if we pick N = 8 and six months later want to change it to N = 11 or something weird, how much of a PITA is that? it means that miners need to pull a different stripe, that means a lot of data can be deleted and some new data needs to be downloaded...  
**\<suraeNoether>** i guess my question is: what's the cost of picking a \*bad\* N for implementation?  
**\<hyc>** there are consistent hashing algorithms to minimize that problem  
**\<moneromooo>** It'd be kinda of a pita. Changing to 16 would be less so, as it's kinda made to allow this (would need some extra code though).  
**\<hyc>** minimize the amount of reshuffling needed when N changes  
**\<suraeNoether>** moneromooo: that's why i picked 11 :P coprime. heh  
**\<moneromooo>** Also, picking 11 means divisions all the time.  
**\<suraeNoether>** let's tell wownero to pick 24, and we pick 6, and we figure out the difference :P  
**\<hyc>** stick to powers of 2  
**\<suraeNoether>** (bad approach)  
**\<suraeNoether>** hyc: or at least prime powers of some sort. makes changing it easier  
**\<moneromooo>** BTW, if anyone wants to try a sync from scratch using the crash branch (which simulates this) is welcome ^\_^  
**\<suraeNoether>** carbon crab incoming. :P  
**\<suraeNoether>** cesium crab  
**\<suraeNoether>** anyway  
**\<sarang>** OK, I think we can officially call the meeting  
