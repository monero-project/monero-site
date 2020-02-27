---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-12-31
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<sarang>** OK, probably low attendance today, but might as well see what folks are up to  
**\<sarang>** Hullo ll  
**\<sarang>** \*all  
**\<suraeNoether>** morning guys  
**\<sarang>** taptap this thing on?  
**\<endogenic>** good morning  
**\<suraeNoether>** howdy :D  
**\<dsc\_>** morn'  
**\<suraeNoether>** i'm actually excited for this meeting because its' been like two weeks  
**\<suraeNoether>** but i don't have much of an update, except "the matching paper is much \*shorter\* now"  
**\<suraeNoether>** :P  
**\<suraeNoether>** allrighty, so let's begin  
**\<sarang>** Heh, no problem  
**\<sarang>** I figure most people took it low this week anyway  
**\<sarang>** as tends to happen  
**\<suraeNoether>** as usual, we'll 1) open up with questions, 2) sarang and i will give some updates, and 3) we'll see if anyone else has been doing anything interesting  
**\<suraeNoether>** so, before we get fired up  
**\<suraeNoether>** who has some questions  
**\<suraeNoether>** ?  
**\<suraeNoether>** oh and, just before I forget: i want to bring the community up to speed on current thinking re: block size blowup  
**\<suraeNoether>** seems like no one has any burning questions  
**\<suraeNoether>** so, sarang, how about you jump in and give us a briefing on your holiday comings-and-goings  
**\<dsc\_>** Oh I have a question; what's the status on getting rid of / dealing with payment id  
**\<dsc\_>** (or integrated addresses, whatever the recent discussino was about)  
**\<endogenic>** dsc\_: i think we need to bring it up at a dev meeting  
**\<dsc\_>** ok cool  
**\<endogenic>** but i dont know  
**\<sarang>** There's general support for deprecation over time, but the question of how/when is still under active discussion  
**\<suraeNoether>** dsc\_: sgp\_ recently posted a draft blag post on the matter  
**\<sarang>** Right, but that should not be taken as any kind of consensus  
**\<suraeNoether>** i'm not sure how much further the discussion has gotten than the pastebin: https://www.irccloud.com/pastebin/cRwyJViz/monero%20scheduled%20address%20upgrade%20timeline%20%5Bdraft%5D  
**\<sarang>** very little  
**\<suraeNoether>** rihgt  
**\<suraeNoether>** this is still quite fluid  
**\<endogenic>** dunno sgp\_'s pretty good at representing that stuff :)  
**\<sarang>** Heh, very true  
**\<dsc\_>** cheers  
**\<sgp\_>** hello all  
**\<endogenic>** eyyyy  
**\<sarang>** Hi sgp\_  
**\<sarang>** Want to talk at all about your post draft?  
**\<sgp\_>** Sure. I outlined my best summary of how Monero will handle payment IDs going forward and how we got to that decision  
**\<sgp\_>** Of course, we all still need to agree  
**\<sarang>** I have been muddling over your post proposal  
**\<suraeNoether>** i just started reading it this mroning and i'm going to reserve my comments for later today  
**\<sarang>** A good deal of discussion centered around info leakage during multi-destination txns  
**\<sarang>** since there's only one payment ID per txn (kind of a PITA honestly)  
**\<sarang>** and not one per output, which is much simpler IMO  
**\<sgp\_>** This assumes unencrypted (standalone) payment ID prohibition in April 2019 and encrypted payment ID prohibition (use subaddresses instead) in April 2020  
**\<sarang>** To what extent do we have exchanges represented in the discussion?  
**\<sarang>** I operate on the assumption that no exchange reps are in any channels  
**\<sgp\_>** The most we've heard from any exchanges is from LocalMonero that helped initiate this discussion earlier this year afaik  
**\<sarang>** While I don't think we should make decisions based on exchange wishes, they represent a good chunk of user interaction  
**\<dsc\_>** To what extend would Sarang like to involve exchanges? I mean, probably most of us know some folk who work at exchanges, should an effort be made to get in contact?  
**\<sarang>** My thought has been as follows  
**\<sarang>** Exchanges need to do infrastructure work if we change pIDs  
**\<sarang>** and have little incentive to move to safer alternatives (e.g. subaddresses) without being required t  
**\<sarang>** to  
**\<sarang>** Setting a firm timeline is important, as is providing sufficient time to change  
**\<sarang>** There's almost certainly too few developers doing such things at exchanges  
**\<sgp\_>** I wrote up this post to help exchanges and other services be prepared, but we've had a historically difficult time reaching these services  
**\<dsc\_>** nice sgp\_  
**\<sarang>** One option has been doing wallet defaults only, and not consensus  
**\<sarang>** this at least makes most transactions more uniform  
**\<endogenic>** just in my personal view i dont think we need to worry too much about third parties… they're going to have to adapt  
**\<suraeNoether>** maybe part of our discussion should be to hold a call with some folks at exchanges or something like that, but my thoughts on the matter are in alignment with sarang's: the exchange will make whatever \*mandatory\* changes the core team decides upon, and it's not like they are going to be able to say "well, what if you guys did \*this\* instead, it'd be easier on us and it would lead to a better public key  
**\<suraeNoether>** infrastructure" or something. that's not their "mission" so to speak  
**\<sarang>** "we've had a historically difficult time reaching these services" <--- calls may be tough  
**\<endogenic>** who's going to pay us to reach out to them though? :)  
**\<sarang>** FFS to the rescue  
**\<sarang>** heh  
**\<dsc\_>** I can forward stuff to Kraken if neccesary  
**\<endogenic>** bah  
**\<endogenic>** the exchanges should  
**\<suraeNoether>** if monero moved to pairings based crypto tomorrow and we modified our whole key structure, they would groan, roll their eyes, curse our names, and then make the changes without publicly complaining at all  
**\<endogenic>** yes  
**\<endogenic>** agreed  
**\<sgp\_>** I may be able to talk to Circle and Poloniex. I have someone's email  
**\<sarang>** Cool. Step 1: make a damn decision  
**\<suraeNoether>** well, let's do a cursory reach-out. let's see if kraken, circle, and polo are willing to provide some feedback, even if it's "please don't make any changes for the love of god"  
**\<sarang>** unless we want exchange input well in advance of decisions  
**\<suraeNoether>** in the meantime, we'll prioritize a decision on this over the next few days  
**\<hyc>** polo has historically been pretty open to communication  
**\<endogenic>** feedback wont do harm  
**\<sgp\_>** We can still approve or reject this recommendation. Give them a pre-release of the press release of sorts  
**\<sarang>** that seems fair and in line with our transparency  
**\<suraeNoether>** yeah  
**\<dsc\_>** Cool. thanks guys.  
**\<sarang>** thanks sgp\_ for taking the reins on the public-facing side of this  
**\<sarang>** let's all review and think about options over the next few days as suraeNoether mentions  
**\<sgp\_>** I've received feedback from a few people. I'll make the changes to the doc this afternoon, but the overall message is the same  
**\<sarang>** esp. relating to timelines, consensus v wallet default, and the consequences on information leakage  
**\<suraeNoether>** okay, since we are on specific topics, before we move on to get sarang's research update, we may as well talk about the blocksize blowup thing  
**\<sgp\_>** One thing I claimed we are not doing: enforcing payment IDs. Are we in agreement here?  
**\<suraeNoether>** yes  
**\<sarang>** We can't effectively enforce encrypted IDs  
**\<sgp\_>** Cool, thanks  
**\<sarang>** and wallets can always be dumb about it anyway  
**\<sarang>** but having the default wallet do the right thing will help a great deal  
**\<suraeNoether>** okay, so regarding this blowup/dynamic block size problem  
**\<suraeNoether>** first: solutions are easy and numerous, each with pros and cons, but most involve magic numbers of some sort  
**\<suraeNoether>** for those of us in the audience, a magic number is \*arbitrarily chosen in code\*  
**\<sarang>** and consensus, which places a firm deadline on changes  
**\<suraeNoether>** yes  
**\<suraeNoether>** and this is sufficiently urgent of a problem that we should come up with \*some solution\* asap  
**\<sarang>** the gist of the problem: it's easy to blow up the block size by spending money, and it stays there  
**\<suraeNoether>** it's cheap to keep block size big, too  
**\<sarang>** yes  
**\<sarang>** There was a clever proposal to start the penalty \_below\_ the median  
**\<sarang>** to bring size down by default  
**\<sarang>** others involve (at the very least) a high cap that still avoids the crazy blowup possibilities  
**\<suraeNoether>** Options include but are not limited to  
**\<suraeNoether>** 1) change sample size of median block size to something very large like a year. pro: easy, ensures that an attacker has to be executing an attack for at least half a year before expecting any success. con: adds inflexibility to monero block size.  
**\<suraeNoether>** (it makes sense to make this increase in window size to be somehow proportional to our change in fees, to ensure that it doesn't cost \*less\* to attack today than before bulletproofs)  
**\<suraeNoether>** 2) add a momentum term to block size so that bigger changes are harder to effect. pro: also easy, improved flexibility. con: unlike median, determining the strength of an attacker required to execute the attack over a sustained period is a trickier question.  
**\<suraeNoether>** 3) change block size penalty to begin sub-median. pro: incentive against the attack! great! con: weak incentive, and a determined attacker is already blowing cash on this attack  
**\<sarang>** We should also consider the two parts to this: (1) getting the block size big, (2) keeping it big  
**\<suraeNoether>** yeah, we could add a rapid decay back to "small"  
**\<suraeNoether>** that requires lots of funds to counteract  
**\<suraeNoether>** 4) change block size dynamic updating to an \*additive\* update instead of a \*multiplicative update.\* Example: if median block size for the past N blocks is greater than some threshold, then change block size as S = S + diff\_S instead of S = r\*S for some r. Keep the \*decreases\* in blockchain size multiplicative. Pros: leads to an exponential decay in block size back to zero in the absence of demand, and leads  
**\<suraeNoether>** to at best a linear increase in block size in the presence of demand. Con: Not intuitive?  
**\<suraeNoether>** 5) limit the maximum change in block size over some time period by some factor. example: do not allow block size to grow more than 2x in a year. pro: easy to intuit, provides a cap on growth but still allows growth, etc. 2x a year is very fast exponential growth generally but we would have time to notice a bloat drift attack and maybe come up with other solutions. con: 2x a year is still very fast exponential  
**\<suraeNoether>** growth.  
**\<suraeNoether>** in all cases, we have to end up picking some magic numbers that would need to be justified to the community. example: why 2x a year instead of 1.05x a year, or 3x a year?  
**\<spaced0ut>** isn't prevention a little more important than the cure? rapid decays back would solve one issue but wasn't it determined someone could grow the chain 30TB or something quickly?  
**\<suraeNoether>** last I spoke to fluffypony about this, he said something like option (1) is most easy to get consensus on because we can justify a change based on the decreased fees. the change is pretty intuitive. with an 80% reduction in fees we could have a 5x increase in median sample size  
**\<sarang>** This needs a robust long-term solution, but also a short-term solution  
**\<suraeNoether>** spaced0ut: i agree with that sentiment  
**\<endogenic>** suraeNoether: imo the community doesn't need things justified to them so much as you have to consider them justified from a model pov - community looks to you  
**\<endogenic>** cause they'll be able to investigate what you propose  
**\<suraeNoether>** endogenic: i disagree. look at bitcoin block size debate or our current ring size debate. everyone wants a justification of the magic numbers proposed.  
**\<sarang>** FWIW the funds required to execute such a bloat attack to TB size are O(100K) USD IIRC  
**\<endogenic>** suraeNoether: monero != bitcoin tho.. big differences  
**\<sarang>** magic number != overall strategy tho  
**\<endogenic>** wow r u me  
**\<moneromooo>** If you ask for community consensus, you'll get the noisy ones to get their way, and they'll typically be short term profit people who \<backspace a bit>.  
**\<sarang>** I want developer consensus  
**\<endogenic>** ^  
**\<moneromooo>** Oh, then that's much better. If you include people like ArticMine in this.  
**\<sarang>** Everyone will/should agree that avoiding TB bloat is worth changing shit  
**\<moneromooo>** People Who We Know Have A Clue.  
**\<suraeNoether>** \*nod\* i agree with all the above, to be honest  
**\<sarang>** at the very least, getting a worst-case short-term fix (like a high cap) in place for spring is the necessary starting point  
**\<spaced0ut>** as long as the change clearly shows everything possible is being done to have to avoid setting a hard limit like BTC. not many will think negatively.  
**\<suraeNoether>** i think for the spring hard fork, we should try for (1) and (3) together. start penalty at 80% median, and increase median sample size window by 5x.  
**\<sarang>** spaced0ut: a hard limit while we actively determine a more robust solution isn't all bad  
**\<sarang>** but I see the point  
**\<suraeNoether>** but before we make that decision, i want to back-of-the-napkin the cost of the attack before and after the change  
**\<suraeNoether>** Isthmus has been helping with some of that  
**\<suraeNoether>** but we should also make a decision on this v soon, like end of week  
**\<sarang>** Isthmus has a technical note draft on it  
**\<suraeNoether>** the cost of changing block size dynamics a second time later this year is low; the cost of permanently bloated blockchain is much higher in my mind  
**\<sarang>** If we establish an idea, we can compare to his original analysis  
**\<sarang>** yes  
**\<sarang>** doing nothing is the worst option  
**\<suraeNoether>** sarang: yeah exctly.. when he's done sleeping and recovering from the past month of work. :P  
**\<sarang>** OK, for the sake of this discussion, let's work up a proposal for combining options 1 and 3 from suraeNoether's list above  
**\<sarang>** (not right now, but I mean as an initial proposal)  
**\<spaced0ut>** sarang, i agree. its probably the safest option for XMR's longevity really. that won't be fun to explain so that most people understand though  
**\<sarang>** that will make the attack slow and expensive, and bring block size back down after such an attack  
**\<suraeNoether>** yep. let's shoot for end of week for our proposal  
**\<sarang>** spaced0ut: it's easy if you say "the consequence of leaving it is TB blocks"  
**\<sarang>** people hate bloat already  
**\<spaced0ut>** yeah  
**\<sarang>** These options have little effect on the average user if done properly  
**\<suraeNoether>** we don't really have MIPs do we? :P  
**\<sarang>** nope  
**\<sarang>** Every Commit Is a MIP (tm)  
**\<suraeNoether>** that should be on a t-shirt with several cows coding on the back  
**\<suraeNoether>** paging rehrar[m] i'd buy several of those shirts  
**\<suraeNoether>** well, two  
**\<sarang>** So  
**\<sarang>** This week I've been doing lit review in between Festivus celebrations, and doing some documentation writeups  
**\<moneromooo>** The intent of the block size increase is to allow sustained spikes (to the extent it is not an oxymoron). A year's smoothing will prevent that from working.  
**\<sarang>** moneromooo: yes, but at the cost of our simple model failing to prevent sustained bloat  
**\<moneromooo>** That seems to be a false dichotomy.  
**\<sarang>** Should sustained spikes not also yield a corresponding cost?  
**\<suraeNoether>** moneromooo: ehhh it doesn't prevent it. it merely raises the bar for what is required to push block size up, so spikes have to be sustained longer for them to impact the base layer. but you are correct; any time we have a variable/dynamic capacity, this allows for bloat, but fixed capacity is inflexible  
**\<suraeNoether>** but to be perfectly honest, if we find ourselves in a situation where people are regularly waiting until the next block to stash a transaction because the current block is full...  
**\<moneromooo>** This is a negative question, so "sustained spikes should yield a corresponding cost".  
**\<suraeNoether>** then in this situation, we probably will have some lead time to correct our block size dynamics to prevent it from being a systemic load problem  
**\<moneromooo>** The point is, if ytou have to waiut for half a year for the thing to kick in, it's pointless for spikes.  
**\<suraeNoether>** moneromooo: well, we can try one of the other methods that are more immediately flexible, like a momentum term or whatever  
**\<suraeNoether>** or we could just make fees great again  
**\<hyc>** yes ^  
**\<sarang>** heh yes to which  
**\<suraeNoether>** on the other hand, we could just recognize the dynamic block size flexibility to be a long-term flexibility instead of somethign designed to handle short-term volume spikes  
**\<hyc>** fundamentally, the reason bloating the chain is cheap is because fees are cheap and XMR/fiat is cheap  
**\<suraeNoether>** hyc yes  
**\<spaced0ut>** Just throwing an incomplete idea out there. Has anyone thought about increasing fee's as block size increases then decreasing fees based on some median tx count?  
**\<suraeNoether>** spaced0ut: the idea of blocksize-dependent fees is one that is very interesting to me, but i haven't dived into the idea  
**\<suraeNoether>** but that allows for an attacker to bloat the blockchain and drive everyone else's fees up, ala the bitcoin bloat from ... whenever that was. 2017? sheeee  
**\<tnsepta>** i think that one was just lots of real transaction activity?  
**\<hyc>** yes, but the net effect is the same  
**\<hyc>** everyone else's fees go up, to get their txs mined  
**\<suraeNoether>** okay, we'll think about this a little harder this week and see what there is to see  
**\<suraeNoether>** brb  
**\<tnsepta>** which is what makes this problem hard, you have to increase the cost of bloat attack without also making transactions way too expensive  
**\<tnsepta>** two sides of the same coin  
**\<hyc>** I would say that's an impossibility  
**\<tnsepta>** of course it's impossible to do both at the same time, i mean it's hard to balance the two right  
**\<hyc>** you can't distinguish "real" txs from "bloat" txs  
**\<spaced0ut>** the truth has been said in here multiple times already. it just sucks to admit. unfortunately our chain isn't insanely expensive to attack right now. there has to be a limit. make it complex or simple but it comes down to size not cost. can't make cost high enough without making it expensive for legit use.  
**\<hyc>** standard tragedy of commons scenario  
**\<sarang>** and size is dependent only on usage, of course... if you need to get N txns on chain, it costs O(N) in size no matter what  
**\<sarang>** Aight, that's two items of priority: (1) fee structure; (2) payment ID timeline  
**\<sarang>** Any other work of note?  
**\<moneromooo>** I'm doing some more work on multiuser txes (the type you can use, eg, coinjoin with).  
**\<moneromooo>** That might be interetsing to people here ?  
**\<sarang>** go on...  
**\<tnsepta>** is there a benefit of doing coinjoin when we're already doing RCT?  
**\<moneromooo>** Yes. Even more privacy.  
**\<moneromooo>** And atomic multi user spends.  
**\<tnsepta>** ahh ok  
**\<hyc>** does it require all participants to be online at once?  
**\<moneromooo>** There \*might\* also be a way to have smaller range proofs, but I'm not sure.  
**\<moneromooo>** No.  
**\<sarang>** Go on...  
**\<moneromooo>** Well, yes if you want it to be fast :D  
**\<hyc>** I always want computers to be fast.  
**\<sarang>** What's the basic structure moneromooo ?  
**\<moneromooo>** I'm making it like multisig. You pass a file around, and write your things. 2N-1 comms though.  
**\<sarang>** afaik this is the first I've heard of your work  
**\<moneromooo>** atm, I've got a first N comms rounds with everyone adding their inputs/outputs, then another ~N with people signing after checking their I/O are what they specified.  
**\<hyc>** who would want to use this approach?  
**\<moneromooo>** People who want to use a coinjoin style tx, and people who want to atomically pay.  
**\<hyc>** passing this file around sounds like it carries sensitive info, what's the danger of exposing it prematurely?  
**\<moneromooo>** (ie, Alice and Bob want to pay Carol, but only if the other also does)  
**\<moneromooo>** Not much I think.  
**\<sarang>** you're effectively doing partial signatures?  
**\<moneromooo>** You create MGs for the outputs you own.  
**\<moneromooo>** So kinda yes.  
**\<sarang>** MG?  
**\<moneromooo>** I think that's a MLSAG.  
**\<sarang>** The smaller range proof idea would be an MPC on a bulletproof?  
**\<sarang>** which is possible, but we've never had a definite use case  
**\<moneromooo>** I don't know. That'll be your job to find out :P  
**\<sarang>** heh  
**\<sarang>** well fwiw, bulletproof mpc is a known construction  
**\<gingeropolous>** damn, missed the bloat thing. i like 1 and 2. I think 1 can be the quick easy fix for now... and if we can figure out the best double mechanism (#2) then we should probably switch to that, because that can allow for spikes  
**\<moneromooo>** tnsepta: if you have more than one user, it breaks down some of the analysis you can do since you can't assume all inputs have a common owner.  
**\<sarang>** moneromooo: is there a branch with any work? or is it just at the "here's the math" stage?  
**\<moneromooo>** There's a "multi" branch, which has a PoC in core\_tests.  
**\<moneromooo>** I've started working on the simplewallet tooling now.  
**\<spaced0ut>** Could the same attack used to expand blocksize and bloat the chain also be used to create an insane amount of identical mixins to the point that future tx would have a high chance of having 10 identical mixins and your real spend?  
**\<sarang>** How do you get so much done simultaneously moneromooo ?  
**\<sarang>** Surely you burn the candle at all ends  
**\<moneromooo>** I have four legs. Humans only use two hands to type.  
**\<sarang>** spaced0ut: what do you mean?  
**\<sarang>** Do you mean the ring union analysis method?  
**\<sarang>** it's extremely unlikely to occur without active selection  
**\<sarang>** Unless you mean that the adversary controls a large percentage of available outputs and therefore knows other true spends?  
**\<spaced0ut>** okay. i wasn't sure if that held true in a scenario where the chain grew 100x larger and an attacker was sending the exact same amount every time. i'm a noob on input selection  
**\<sarang>** In that case, sure, that's always a possibility for an attacker who wants to spam the chain  
**\<sarang>** Amounts are irrelevant  
**\<spaced0ut>** yes ofc. i worded that funny. you answered me though thanks  
**\<sarang>** roger  
**\<sarang>** moneromooo: your idea intrigues me, and I'll be interested to examine the details  
**\<sarang>** Well, we have come to the end of our allotted time  
**\<sarang>** Great discussion all around  
**\<sarang>** We'll each move into the future sometime today; let us know what it's like when you get there    
