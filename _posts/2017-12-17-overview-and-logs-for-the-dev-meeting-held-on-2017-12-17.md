---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-12-17
summary: Discussion of open PRs and issues, Bulletproofs, March HF, dedicated HW wallet, and miscellaneous
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Overview  

An overview can be found on [MoneroBase](https://monerobase.com/wiki/DevMeeting_2017-12-17).  

# Logs  

**\<fluffypony>** 1. Greetings  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** 3. March hardfork items + code freeze  
**\<fluffypony>** 4. Code + ticket discussion / Q & A  
**\<fluffypony>** 5. Any additional meeting items  
**\<fluffypony>** 6. Confirm next meeting date/time  
**\<fluffypony>** I think we've done 1. so we'll skip it  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** well Bulletproofs went live on testnet  
**\<fluffypony>** so there's that  
**\<fluffypony>** and we merged some stuff  
**\<fluffypony>** moneromooo: anything in particular you want to highlight?  
**\<moneromooo>** Ah, whether to enable them for v7 or v8 on mainnet.  
**\<fluffypony>** that's the next point  
**\<fluffypony>** I meant anything in 2. you want to highlight :)  
**\<moneromooo>** Not in particular,  no.  
**\<HUCK45>** Hey all, I just saw that awesome project recently and a question came to my mind- why there isn’t any option for GPU mining instead of CPU? Browsers these days allow that, by webgl for example (depending on the user settings, but on default it uses gpu)  
**\<fluffypony>** HUCK45: we're in a meeting - feel free to take that to #monero  
**\<rehrar>** HUCK45 we're in a dev meeting right now. :) This'll have to wait.  
**\<suraeNoether>** as far as MRL is concerned: the math on bulletproofs seems tight, but the best test for cryptography is time  
**\<fluffypony>** ok so I'll highlight a few PRs  
**\<fluffypony>** suraeNoether: not there yet  
**\<suraeNoether>** oh woops  
**\<fluffypony>** #2878 tightens up --offline mode by disabling DNS lookups  
**\<fluffypony>** #2877 refactors a bunch of p2p stuff  
**\<fluffypony>** and then the obvious bug fixes and improvements  
**\<fluffypony>** Bulletproofs on testnet is in #2883  
**\<fluffypony>** which brings us to 3. March hardfork items + code freeze  
**\<fluffypony>** so v7 already has sorted inputs  
**\<fluffypony>** moneromooo: do you want to explain that?  
**\<moneromooo>** Sorted inputs? Or bp ?  
**\<moneromooo>** I assume bp. They're just a smaller sized range proof system.  
**\<fluffypony>** sorted inputs  
**\<fluffypony>** I assume everyone knows what BP is  
**\<moneromooo>** Well, just... sort inputs by their key image. Nothing more.  
**\<iDunk>** Is it like unsorted inputs, but sorted ?  
**\<fluffypony>** iDunk: kinda  
**\<gingeropolous>** and why sort?  
**\<moneromooo>** Kinda :)  
**\<fluffypony>** gingeropolous: that's the big question  
**\<iDunk>** Cool :)  
**\<gingeropolous>** :)  
**\<fluffypony>** it's to prevent metadata leaking  
**\<fluffypony>** eg. the specific wallet used for a tx  
**\<moneromooo>** To avoid broken implementations leak stuff. It'd be better for outputs (ie, always put change last, etc), but unfortunately it doesn't work for outputs as the keys depend on their index.  
**\<moneromooo>** It has become hairy after subaddresses unfortunately, at least for the small benefit.  
**\<luigi1111w>** which?  
**\<moneromooo>** What is the question ?  
**\<luigi1111w>** what is "it"  
**\<fluffypony>** ordering outputs  
**\<moneromooo>** inputs.  
**\<luigi1111w>** subaddress or multisig?  
**\<moneromooo>** I'll rephrase:  
**\<moneromooo>** The input sorting code has become hairy after subaddresses unfortunately, at least for the small benefit.  
**\<luigi1111w>** yes that was clear, just not why  
**\<luigi1111w>** well was clear after \<moneromooo> inputs.  
**\<moneromooo>** Because the sorting was internal to construct\_tx before, now it's changed in the caller as well.  
**\<luigi1111w>** ok  
**\<moneromooo>** So that means you have to order selected\_transfers too, and possible something else, can't recall exactly.  
**\<moneromooo>** Anyway, it's just minutiae particular to our wallet code.  
**\<luigi1111w>** btw, change being last doesn't leak metadata  
**\<moneromooo>** It doesn't leak that change is that ?  
**\<moneromooo>** It doesn't leak that change is last ?  
**\<luigi1111w>** right  
**\<luigi1111w>** or what wallet was used  
**\<moneromooo>** OK, it leaks that change is more likely to be last than otherwise.  
**\<luigi1111w>** is it?  
**\<luigi1111w>** what if a popular wallet puts it first  
**\<moneromooo>** x+epsilon > x, even if epsilon is very small.  
**\<moneromooo>** (assuming epsilon is positive)  
**\<fluffypony>** luigi1111w: the onus is on wallets to follow the pattern  
**\<luigi1111w>** what pattern  
**\<luigi1111w>** why is there a pattern  
**\<moneromooo>** I'm lost here, I'll wait.  
**\<luigi1111w>** me too :)  
**\<moneromooo>** Maybe ask your question again, rephrased :)  
**\<pigeons>** I guess if there is an intentional pattern, there won't be several accidental identifying ones  
**\<rbrunner>** Fingerprinting wallets?  
**\<luigi1111w>** my point is chnage isn't a fingerprinting pattern for wallets  
**\<luigi1111w>** well my new point, whatever  
**\<luigi1111w>** anyway it doesn't really matter as we're not doing it anyway  
**\<fluffypony>** ok let's talk about Bulletproofs then  
**\<fluffypony>** suraeNoether: your turn :)  
**\<suraeNoether>** whelp, i pretty much had my piece in terms of bulletproofs: there isn't a research-oriented approach to answer if they are ready for implementation.  
**\<suraeNoether>** the best test for crypto is use and time.  
**\<suraeNoether>** the math has been reviewed, looks tight. it may feel like it's being put into production too soon, but...  
**\<suraeNoether>** any time we implement something new, we take some risks in that regard  
**\<suraeNoether>** it looks to me like a no-brainer drop-in replacement for our current range proofs, and to sarang it seems fine. the coding is done.  
**\<msvb-mob>** suraeNoether: Is there a way to merge new features on testnet only?  
**\<msvb-mob>** Maybe a risk reduction strategy I mean?  
**\<suraeNoether>** afaik BP is already on testnet as of ... today?  
**\<moneromooo>** As of a week back or so.  
**\<suraeNoether>** ah there you go  
**\<msvb-mob>** So we have at least that granularity, okay.  
**\<luigi1111w>** I'm going through the code and have some questions  
**\<suraeNoether>** yeah, i mean  
**\<suraeNoether>** luigi1111w: sarang will be able to answer them tomorrow afaik.  
**\<rehrar>** Is the chance of finding meaningful vulnerabilities that much greater if we extend it out to September hard fork? Like, would the extra six months be an adequate amount of time if it was determined that the three months between now and March hardfork wasn't sufficient?  
**\<suraeNoether>** \^ this is actually sort of the tough spot we find ourselves in  
**\<suraeNoether>** thing is, there isn't a real monetary incentive to attack something like BP while its on testnet  
**\<luigi1111w>** attacking it on mainnet is catastrophic, however  
**\<suraeNoether>** yep  
**\<suraeNoether>** its like designing a new parachute  
**\<rbrunner>** Well, we could put bounties for Testnet attacks, no?  
**\<luigi1111w>** meh  
**\<rehrar>** It's simple. We make testnetcoin a 3B dollar project.  
**\<fluffypony>** sure, but then we shouldn't ever deploy anything  
**\<fluffypony>** :-P  
**\<fluffypony>** LOL rehrar  
**\<suraeNoether>** lol  
**\<suraeNoether>** eventually someone has to strap it onto their own backs and jump  
**\<suraeNoether>** is what i mean  
**\<fluffypony>** yes  
**\<fluffypony>** so here's my thinking  
**\<luigi1111w>** the people that could review and attack are pretty small in number  
**\<fluffypony>** we code freeze via a 0.12 branch in the next 2-ish weeks  
**\<fluffypony>** we include BP for the March HF  
**\<fluffypony>** we release test bins in Jan  
**\<fluffypony>** we re-measure our confidence towards the end of Jan / beginning of Feb  
**\<fluffypony>** if we're not happy with it we change it to v8  
**\<fluffypony>** or the opposite - put it in v8 and move it to v7 towards the end of Jan if we're confident  
**\<luigi1111w>** much more comfortable with the latter  
**\<luigi1111w>** though there's plenty of support for delaying v7 as well  
**\<rehrar>** I think delaying v7 by a couple months would be well worth it?  
**\<rehrar>** and even if the next fork is still held to September, we will still have the multi-input BP to merge, which is exciting, no?  
**\<fluffypony>** I don't think we should move fork dates  
**\<rehrar>** or were both single and multi output BPs being discussed right now?  
**\<moneromooo>** Single only.  
**\<fluffypony>** it's becoming increasingly difficult, and sticking to the predictable fork schedule is advantageous for exchanges, merchants, and pools  
**\<fluffypony>** (emergency hard forks aside)  
**\<moneromooo>** I'm reasonably sure most don't know in advance when the fork is supposed to be anyway.  
**\<luigi1111w>** ^^  
**\<rehrar>** other loser coins: "oh btw mister exchange, we're forking in like two weeks, please update software"  
**\<fluffypony>** moneromooo: they're starting to know  
**\<dEBRUYNE>** As long as they are notified well in advance I don't see a problem with pushing it back 1-2 months  
**\<dEBRUYNE>** Like moneromooo says, most probably don't even know we have one scheduled for march  
**\<fluffypony>** pushing it back by 1-2 months isn't enough time  
**\<luigi1111w>** it might be  
**\<luigi1111w>** although  
**\<fluffypony>** imho we're either happy with March or we need 6 additional months of testing  
**\<moneromooo>** How about 12 ?  
**\<rehrar>** It may be that in the future FP you might be right, but I think we're still small enough that we can pull a stunt like this without too many consequences  
**\<fluffypony>** moneromooo: we might need that, if our confidence level is low  
**\<moneromooo>** The confidence will stay low until 3 months before the fork, when people will start looking.  
**\<moneromooo>** Before 3 months, (almost) nobody will look.  
**\<suraeNoether>** if we give ourselves 6 months of testing for BPs  
**\<suraeNoether>** i'll tell you what'll happen  
**\<fluffypony>** lol  
**\<suraeNoether>** 5 months an 2 weeks will go by  
**\<fluffypony>** so then March it is?  
**\<moneromooo>** Now, if people did look for 6 months... then yes.  
**\<suraeNoether>** and then testing will begin  
**\<dEBRUYNE>** Pushing it back 6 months might perhaps result in it going down the priority list  
**\<moneromooo>** I'm ready to go for september if there is a good reason (ie, someone says they need the 6 months).  
**\<dEBRUYNE>** And then we just get the same # of months of review  
**\<fluffypony>** I'm happy with March, but I'm also open to having my mind changed  
**\<fluffypony>** I'm also reaching out to the paper authors to see if any of them are able to do an implementation review  
**\<moneromooo>** smooth thinks it's too early, for the record.  
**\<rbrunner>** Main argument?  
**\<moneromooo>** At 9 txes per block (monthly average now), I think BPs save ~ 2 GB per month.  
**\<dEBRUYNE>** I think you'll see more transactions once fees drop to an acceptable level though  
**\<dEBRUYNE>** So savings might be even more  
**\<Vespco>** March with aggressive promotion of testnet usage starting now. We can highlight the need on reddit and provide clear stack exchange instructions and .bins to attract more users  
**\<luigi1111w>** I don't think that helps  
**\<luigi1111w>** you need math and code people  
**\<luigi1111w>** we may have enough (not now, I mean within the next 3 months)  
**\<rehrar>** Ok, just so the discussion doesn't go on forever, and to summarize for anyone reading logs afterwards, there's three main camps here: 1. Launch BPs in March HF, 2. Launch BP's in September HF, 3. Delay March HF to something like a May HF and launch BPs then.  
**\<rehrar>** Of those three, I'd say 3 is reasonable  
**\<luigi1111w>** there are two other non-forking changes that people would like to see in a release too, subaddresses and multisig  
**\<luigi1111w>** former is in already  
**\<dEBRUYNE>** As the fork height isn't set yet, can't we reasses in 2 months?  
**\<luigi1111w>** latter "should" be (IMO) in the next release  
**\<dEBRUYNE>** And see if there has been adequate review  
**\<fluffypony>** luigi1111w: agreed  
**\<luigi1111w>** dEBRUYNE no we are trying to get releases out in reasonable time  
**\<luigi1111w>** ie, not the week before  
**\<moneromooo>** MS is going in soon. Just after I fix the core tests after last rebase :)  
**\<dEBRUYNE>** No I meant whether BP go in or not  
**\<dEBRUYNE>** \^ luigi1111w  
**\<Vespco>** Is GUI ready for multisig and subaaddresses?  
**\<dEBRUYNE>** Or is two months to late for that to decide?  
**\<luigi1111w>** yes  
**\<dEBRUYNE>** too\*  
**\<dEBRUYNE>** Ok  
**\<fluffypony>** dEBRUYNE: basically-final bins need to be out by Feb  
**\<fluffypony>** beginning-ish of Feb  
**\<luigi1111w>** by the time you decide and build the release you're at like one week  
**\<luigi1111w>** agree  
**\<dEBRUYNE>** But also, if we push back the fork 1-2 months, we have more time to release basically-final bins  
**\<luigi1111w>** well 2 months imo  
**\<luigi1111w>** so whenever in march  
**\<suraeNoether>** i think MRL's opinion is 2 1 3, to vote for a september hard fork. because if we are wrong, the cost is large. if we are correct, we save 12 G  
**\<suraeNoether>** grand scheme of things  
**\<luigi1111w>** in grand scheme you don't really save anything  
**\<dEBRUYNE>** If we don't include BP in March 2018, I suppose we can at least fix the fees :-P  
**\<luigi1111w>** since we "might as well" prune that data  
**\<luigi1111w>** later  
**\<suraeNoether>** luigi1111w: yeah, on a long enough time horizon  
**\<vtnerd>** prune the range proofs?  
**\<luigi1111w>** yes  
**\<fluffypony>** if we did 2, any opinions on reducing the base fee in the March HF? we can increase it again later if we need  
**\<vtnerd>** how would some future user verify inflation?  
**\<luigi1111w>** vtnerd if you desire to do that for your trust model, of course you don't prune  
**\<dEBRUYNE>** fluffypony: we need to tweak the penalty  
**\<vtnerd>** oh so this is like the bitcoin prune old blocks option  
**\<luigi1111w>** well you don't lose the hashability  
**\<suraeNoether>** fluffypony: I think dEBRUYNE may have thought about fee structures more than anyone else  
**\<fluffypony>** yes  
**\<luigi1111w>** JollyMort[m] :)  
**\<dEBRUYNE>** \^ would certainly beat me :P  
**\<suraeNoether>** fair  
**\<endogenic>** is it worth writing a paper on fee structure modeling etc?  
**\<luigi1111w>** longer term I think yes  
**\<luigi1111w>** but we certainly don't have time for march  
**\<dEBRUYNE>** Perhaps we could change the penalty exponent to \^3 instead of \^2  
**\<fluffypony>** suraeNoether: what would your comfort level change to if one or more of the paper's authors reviewed the implementation?  
**\<suraeNoether>** fluffypony: no, the implementation isn't the concern at all, in my mind at least  
**\<suraeNoether>** assuming it's passing unit tests  
**\<suraeNoether>** (which i think it is, iirc)  
**\<moneromooo>** It is.  
**\<dEBRUYNE>** What if the paper itself is "broken"? Only time will tell that I guess  
**\<suraeNoether>** there ya go. the question is whether or not someone clever can divide by zero and cause a big monero bang with bullet proofs .  
**\<suraeNoether>** dEBRUYNE:  \^ exactly  
**\<suraeNoether>** the best test for crypto is time  
**\<rehrar>** will an aggressive 'test bps on testnet' campaign do anything?  
**\<luigi1111w>** no  
**\<suraeNoether>** i don't think so  
**\<suraeNoether>** if someone found something  
**\<rehrar>** so then that's points for March HF isn't it?  
**\<suraeNoether>** it would be worht more for them to wait until it was implemented than to report it  
**\<rbrunner>** I think with no high-value target to attack nobody will aim at BP  
**\<luigi1111w>** I disagree with suraeNoether and would like the implementation reviewed  
**\<rehrar>** if we gain little value for waiting, then we shouldn't wait  
**\<suraeNoether>** luigi1111w: I dind't say i dind't want the implementation reviewed. fluffypony asked me if such a review would make me more comfortable with a March HF  
**\<luigi1111w>** then we still disagree  
**\<luigi1111w>** so it's fine :)  
**\<suraeNoether>** heh, okay. well at least we can agree that we both want the implementation reviewed one way or another  
**\<moneromooo>** (thanks stoffu btw, who did review it well)  
**\<suraeNoether>** stoffu is a silent hero  
**\<rehrar>** Meeting is coming to a close. Not necessarily to decide right now, but just to see where everyone is, can we have everyone that was in this conversation verbally state whether they prefer March or September for BPs?  
**\<fluffypony>** in terms of someone finding an issue in the math itself, I don't think that 6 months is a macro-enough timescale for that  
**\<fluffypony>** my preference would be March, pending peer review, or September + fee reduction failing that  
**\<rbrunner>** March: Only with BP live on mainnet you would ever get bright and bad people interested to break something  
**\<suraeNoether>** i have the reversed preference as fluffypony, plus i would like the authors to review the implementation in either case  
**\<suraeNoether>** i think sarang has the same preference as fluffypony though  
**\<vtnerd>** uh, so before meeting adjourns I'd like to prod https://github.com/monero-project/supercop/pull/1  
**\<moneromooo>** What we'd need is for people who may review it to tell is now when they would, and how much time they'd need... Not gonna happen most likely.  
**\<vtnerd>** unedited supercop code is all that is now  
**\<luigi1111w>** cool  
**\<pigeons>** pre-borromean ringct signature issue was found by 3rd party (and/after the monero team), so people do look at non-mainnet code. and also that incident shows how short timelines are scary  
**\<endogenic>** \^  
**\<fluffypony>** also msvb-mob wanted to say a couple of things about the HW wallet  
**\<suraeNoether>** pigeons: that's an extremely good point  
**\<msvb-mob>** Hardware team achieved a breakthrough today in manipulating the MCU factory bootloader without programming.  
**\<msvb-mob>** That means that future firmware developers can flash boards using DFU over USB.  
**\<msvb-mob>** DFU == Device Firmware Upgrade  
**\<fluffypony>** pigeons: good point  
**\<fluffypony>** msvb-mob: nice one!  
**\<msvb-mob>** In the near future we will ask for in depth advice from core development and MRL to confirm our design is on track.  
**\<msvb-mob>** Any questions? You can ask about 34C3 assembly as well.  
**\<moneromooo>** There is a factory bootloader ? As in, code you did not write ?  
**\<msvb-mob>** moneromooo: Yes, most hardware manufacturers (Nordic, STM, Maxim, TI) supply a default bootloader you can't get rid of.  
**\<msvb-mob>** And when they're nice, it's full of USB and DFU.  
**\<luigi1111w>** pigeons thanks, and that memory pushes me towards the wait camp  
**\<moneromooo>** That sounds like a great idea :/  
**\<msvb-mob>** Next topic.  
**\<luigi1111w>** meeting is basically over afaik  
**\<rbrunner>** Please don't forget the GUI wallet Windows installer and put it into service sometime after busy Christmas. I have a PR waiting that gives the last polish to the installer script, and after that it's really, really ready  
**\<fluffypony>** yep that's it  
**\<fluffypony>** one last thing  
**\<fluffypony>** next meeting would be Dec 31  
**\<fluffypony>** but I don't think anyone wants that  
**\<fluffypony>** so push out to Jan 14?  
**\<rehrar>** Monero New Year party?  
**\<msvb-mob>** If we do one week later, we synced again with community meetings.  
**\<luigi1111w>** is that what we want?  
**\<luigi1111w>** ok with both  
**\<rehrar>** you guys don't go anyways :P  
**\<luigi1111w>** and by ok I mean as not ok as normal  
**\<fluffypony>** msvb-mob: I'd prefer us unsynced, otherwise it's just too much on a weekend  
**\<fluffypony>** wife will murder me :-P  
**\<moneromooo>** Technically, that's still synced, but out of phase...  
**\* moneromooo** steps back  
**\<msvb-mob>** Nobody is protesting 14 Jan. I'm not opinionated, just wanted to mention the sync aspect.  
**\<fluffypony>** lol moneromooo  
**\<rehrar>** Ok 14 Jan it is  