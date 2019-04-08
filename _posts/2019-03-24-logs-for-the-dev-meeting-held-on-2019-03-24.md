---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2019-03-24
summary: Future of PoW algorithm discussion
tags: [dev diaries, core, crypto]
author: el00ruobuob / dEBRUYNE
---

# Logs  

**\<dEBRUYNE>** It's 5:00 PM utc, let's begin  
**\<dEBRUYNE>** I made a few notes, that I think will be worthwhile to start the meeting  
**\<dEBRUYNE>** - The tweaks are inherently centralizing and potentially dangerous. They thus need to stop.  
**\<dEBRUYNE>** - Dual PoW, in its current form, is considered unsafe and therefore undesired.  
**\<dEBRUYNE>** - The path of least resistance seems to be adopting RandomX as soon as viably possible (October perhaps) and switching to SHA3 in case it fails (i.e. no pre-commitment to SHA3 unless RandomX fails) or switching to SHA3 when the tail emission starts.  
**\<dEBRUYNE>** - In order to be proactive, we need a back up plan in case RandomX fails. Preferred current back-up plan seems to be SHA3, as a RandomX failure would mean we've basically exhausted our options.  
**\<dEBRUYNE>** - In case RandomX fails, no further tweaks should be made.  
**\<dEBRUYNE>** - We need to come up with some heuristics that define failure. In my opinion, the easiest heuristic is ASIC miners taking over the network and thus driving out all other miners, thereby showing a significant efficiency advantage.  
**\<dEBRUYNE>** If anyone has remarks, please let them hear and let's start :)  
**\<moneromooo>** Tweaks are no more centralizing and potentially dangerous than randomx.  
**\<moneromooo>** If you disagree, you get to give arguments for it.  
**\<hyc>** randomX has been in development longer than 6 months  
**\<el00ruobuob\_[m]>** "ASIC miners taking over the network" would you use the "unknow hash" metric here?  
**\<hyc>** and won't be changing every 6 months  
**\<tevador>** I should add that there are ways in which RandomX could be tweaked in the future if it lasts a few year to match the progress in CPU design  
**\<fluffypony>** moneromooo: they are highly centralised, they require a small group of people to collaborate on it and dictate what the network should do  
**\<gingeropolous>** "the easiest heuristic is ASIC miners taking over the network" how will we get evidence of this? there's some thoughts that what we saw recently wasn't asics but some kind of fpga  
**\<vp11>** It might be hard to define how ASICs are in the network. Maybe if the top CPU in the market not becoming profitable anymore? That would mean no normal user should be profitable do we can assume ASICS are in the network  
**\<dEBRUYNE>** Also tweaks have to occur every 6 months, whereas RandomX envisions to be a long-term algorithm  
**\<moneromooo>** I dispute not the claim they are centralized, but the imlication that randomx is better because of it.  
**\<gingeropolous>** are the pow forks more or less centralizing than the consensus changes we've been making every 6 months regardless of PoW?  
**\<dEBRUYNE>** + we can let it get audited  
**\<dEBRUYNE>** gingeropolous: Definintely more in my opinion  
**\<fluffypony>** moneromooo: fair - I don't have strong feelings on RandomX  
**\<hyc>** re: ASIC miners taking over the network - are we relying on miners to self-report?  
**\<hyc>** "Hey, my profitability sucks, I'm abandoning XMR and mining something else now"  
**\<dEBRUYNE>** I don't think we should absolutely rely on that, but we can certainly take it into account as a factor  
**\<el00ruobuob\_[m]>** hyc, https://minexmr.com/pools.html should give a good idea of how profitable for random miner it is.  
**\<endogenic>** can we examine the question of whether randomx has as much flexibility in being tweaked as the existing algo?  
**\<sech1>** steep increase in hashrate (and profitability drop) without price changing is a strong indicator of more efficient hardware (ASICs)  
**\<ArticMine>** I see the reason behind tweaks as key here. Making a hard fork to improve the algorithm makes sense. Changing the algorithm for the sole purpose of breaking ASICs with no improvement is a no no  
**\<el00ruobuob\_[m]>** the more "unknown" source of hasrate there is, the worst it is.  
**\<moneromooo>** Ideally all hash rate would have an unknown source.  
**\<dEBRUYNE>** ^ I disagree with that one actually  
**\<dEBRUYNE>** It's an easy metric to be gamed  
**\<dEBRUYNE>** (was referring to el00ruobuob\_[m], not moneromooo)  
**\<fluffypony>** el00ruobuob\_[m]: profitability is trivially gamed  
**\<jtgrassie>** "unknown source" is a terrible metric.  
**\<gingeropolous>** ^  
**\<oneiric\_>** could have been private pools or temp switch of large mining farms too  
**\<el00ruobuob\_[m]>** so what kind of metric?  
**\<fluffypony>** el00ruobuob\_[m]: no clue, it's been ENTIRELY subjective thus far  
**\<jtgrassie>** It just means an unlisted pool or solo-miners  
**\<dEBRUYNE>** there's some thoughts that what we saw recently wasn't asics but some kind of fpga \<= Does that matter though? A single group secretly gaining the majority of the network hashrate is inherently bad  
**\<hyc>** ^ agreed with dEBRUYNE  
**\<dEBRUYNE>** el00ruobuob\_[m]: we're trying to discuss probable heuristics currently  
**\<oneiric\_>** it matters in the approach taken to counteract  
**\<hyc>** we don't care if it's ASICs or FPGAs, if it's not CPUs or GPUs it's a threat  
**\<gingeropolous>** ^, agreed, but ... it'd be nice to get specific  
**\<moneromooo>** Changing the algorithm to prevent a 51% makes sense to me. That is a definite, explicit improvement.  
**\<dEBRUYNE>** One more note I forgot to add, tevador recently changed some parameters for RandomX, which significantly improved verification time -> https://github.com/monero-project/meta/issues/316#issuecomment-475651654  
**\<gingeropolous>** is this the 4 gb to 1 gb switch?  
**\<oneiric\_>** if it was fpga, reaction should be different than a big cpu farm swatiching over  
**\<fluffypony>** that makes me happy  
**\<tevador>** verification time is on par or better than CN  
**\<dEBRUYNE>** gingeropolous: 2 GB iirc  
**\<tevador>** much better on low end hardware  
**\<hyc>** yes, 4GB to 2GB  
**\<fluffypony>** moneromooo: out of interest, what would it take to make you comfortable with RandomX?  
**\<rbrunner>** Yes, 4 GB was crazy  
**\<moneromooo>** I'm not sure. I also have not looked at it yet.  
**\<dEBRUYNE>** moneromooo: Whilst I agree, last time the entity had already gained the majority of the hashrate before we set a fork date with a new PoW tweak  
**\<dEBRUYNE>** Imo we were just praying at that point they wouldn't do anything malicious  
**\<needmoney90>** ^  
**\<needmoney90>** Agree, that was an uncomfortable period of time  
**\<fluffypony>** yeah  
**\<gingeropolous>** aye  
**\<moneromooo>** I'm not necessarily unfomfortable with it per se. I'm more opposed to the claim that it is less centralized and dangerous, at least without good arguments.  
**\<fluffypony>** that said, I don't think RandomX solves the economies of scale problem at all  
**\<hyc>** ^^ probably true  
**\<dEBRUYNE>** moneromooo: Arguably it is less centralized because we don't have to change it every 6 months  
**\<gingeropolous>** well, for me, the commodity hw PoW has an interesting thing in that scenario, right?  
**\<fluffypony>** ^^  
**\<needmoney90>** Switching the PoW at the same time as making consensus changes is basically forcing compulsory adoption of those changes, it centralizes everything with the devs  
**\<dEBRUYNE>** RandomX envisions to be an algorithm which can sustain ASIC resistance for a long time  
**\<moneromooo>** You're guessing as much as we did before.  
**\<needmoney90>** I've been thinking about this for a bit now  
**\<fluffypony>** gingeropolous: there is no such thing  
**\<ArticMine>** There is a good change it will lead to ASIC co existence rather than domination  
**\<gingeropolous>** if we supposedly had some massive hr gain and we're locked into randomx, someone could buy a bunch of server time etc.  
**\<fluffypony>** any "commodity hardware PoW" will cease to be "mostly commodity hardware" within short order if Monero continues to become increasingly valuable. it's a battle that is already lost, give it up.  
**\<gingeropolous>** if its gets to that situation in an asic dominated networ, what then?  
**\<dEBRUYNE>** ArticMine: Depends on what kind of efficiency gain they get though  
**\<ArticMine>** That is the fundamental key  
**\<dEBRUYNE>** I think this is a reasonable heuristic -> \<sech1> steep increase in hashrate (and profitability drop) without price changing is a strong indicator of more efficient hardware (ASICs)  
**\<dEBRUYNE>** Especially if it drives out all other miners  
**\<hyc>** ^ makes sense  
**\<gingeropolous>** what happens if , in a world where we go sha3, we figure out the network is pwned?  
**\<ErCiccione[m]>** dEBRUYNE: I agree that's the best way to look at it  
**\<fluffypony>** gingeropolous: pwned by whom? at 7nm the ASIC performance gap evens out  
**\<ArticMine>** It also means if I can say 30% of my home heating bill I mine but for only 0.5% why bother  
**\<ArticMine>** save  
**\<vp11>** But then, again, ASICS coexistence might even be desirable if they’re not hundreds times faster than the fastest cpu on market  
**\<moneromooo>** ASICs are good if they do not cause a party to have control over too much of the network hash rate.  
**\<ArticMine>** It is better than no ASICs  
**\<midipoet>** can i ask how likely it would be that someone develops an ASIC for SHA-3 with substantial efficiency gaines, before everyone else, patents it, secretely mines with it, and leads us to exactly the same situation with regards the potential for 51%?  
**\<fluffypony>** gingeropolous: and if a single entity amasses 70% of all the hashrate in existence at 7nm then, frankly, they have enough money to amass 70% of the hashrate regardless of what we do - depressing, but true  
**\<oneiric\_>** dEBRUYNE: that does make sense. sech1 what metric would one use to tell the difference b/w fpga & asic?  
**\<gingeropolous>** true fluffypony , true  
**\<dEBRUYNE>** oneiric\_: Arguably, if RandomX is dominated by FPGAs, it may make more sense to switch to SHA3  
**\<gingeropolous>** but its pow, so its a constant burn. so it would have to be a long fight  
**\<fluffypony>** midipoet: we're pretty close to 7nm, which means that improvements from competitors will be marginal - the braintrust in the big players is substantial  
**\<gingeropolous>** if its an asic world, its no different than a PoS world  
**\<sech1>** oneiric\_ FPGA can't be efficient at RandomX, forget it  
**\<ph4r05>** moneromooo: you are right about the "const size\_t len\_chunks"  
**\<gingeropolous>** asic dominated is PoS, there i said it  
**\<fluffypony>** gingeropolous: word  
**\<dEBRUYNE>** fluffypony: Especially with an algorithm such as SHA3  
**\<needmoney90>** dEBRUYNE: I'm not sure. FPGA commoditization is at least a discussion avenue that's relatively unexplored.  
**\<dEBRUYNE>** Which is one of the simplest algorithms  
**\<oneiric\_>** can you give some details?  
**\<needmoney90>** I realize they aren't even really  commoditized yet, which makes it more concerning  
**\<xmrmatterbridge> \<learninandlurkin>** Surely that heuristic could could be games easily. If the ASIC Dev knew we would switch to their preferred algorithm the moment there is a spike in HR, it would be in their interest to cause such a spike for delayed profits.  
**\<oneiric\_>** saw hyc's softcore post, is it for those reasons?  
**\<tevador>** dEBRUYNE: FPGAs cannot run RandomX at anywhere near CPU efficiency  
**\<sech1>** oneiric\_ yes  
**\<fluffypony>** learninandlurkin: which heuristic?  
**\<oneiric\_>** ok thanks  
**\<dEBRUYNE>** tevador, sech1: Thanks for clarifying  
**\<dEBRUYNE>** fluffypony: This one -> \<sech1> steep increase in hashrate (and profitability drop) without price changing is a strong indicator of more efficient hardware (ASICs)  
**\<fluffypony>** oh, yeah  
**\<fluffypony>** they could just hire a botnet to cause a spike  
**\<ArticMine>** fluffypony We need to consider 3D chips both on the ASIC and non ASIC side 7 nm is not a limit  
**\<dEBRUYNE>** fluffypony: Do you think there would be botnets out there that would be vastly bigger than Monero's total hashrate?  
**\<dEBRUYNE>** Because that's what needed to increase the hashrate steeply  
**\<oneiric\_>** guess my question applies now though, how would one tell the difference b/w fpga and asic being responsible for hash increase?  
**\<dEBRUYNE>** I am kind of skeptical about that  
**\<fluffypony>** ArticMine: 7nm is a pretty practical limit right now  
**\<hyc>** what would that botnet have been doing before they hired it? why would it not have been mining the whole time?  
**\<ArticMine>** but not long term  
**\<oneiric\_>** pre-cnr  
**\<fluffypony>** dEBRUYNE: no clue, maybe Craig Wright's supercomputer :-P  
**\<dEBRUYNE>** Hah  
**\<moneromooo>** Botnets spawn. It might not have existed before.  
**\<fluffypony>** hyc: could be hiring a few botnets that were doing other things before  
**\<ArticMine>** INTEL is looking at 3D for this ear  
**\<ArticMine>** year  
**\<midipoet>** gingeropolous:  if "asic dominated" is essentially POS - just in a different format, then i hate to say it, but its a very big waste of energy.  
**\<hyc>** oneiric\_: FPGA would be on par with GPU. not better. FPGA is irrelevant.  
**\<needmoney90>** For sure Hyc?  
**\<fluffypony>** midipoet: non-ASIC is essentially PoS  
**\<fluffypony>** midipoet: that's how economies of scale work  
**\<oneiric\_>** ok, so no way a fpga farm could have looked like asics?  
**\<fluffypony>** midipoet: the people with the most money win  
**\<tevador>** ArticMine: it's still many years away and no ASIC manufacturer will use immature technology  
**\<gingeropolous>** i meant in the attack vector. you buy asics once, they work, you own the network  
**\<ArticMine>** 3D is already in our cellphone  
**\<gingeropolous>** in a non-asic network, you develop asics, but others can do other stuff  
**\<gingeropolous>** i really don't understand keeping the keys to the system behind a locked door  
**\<midipoet>** fluffypony: not if the hardware requirements meant that mining could be a "side" process as apposed to a fixed process  
**\<fluffypony>** midipoet: we already tried background mining, nobody is going to do it  
**\<gingeropolous>** honestly, i can't get the argument, so i just gotta watch this from afar. good luck everyone!  
**\<fluffypony>** midipoet: even if they do, they will be out-competed by manufacturers spinning up boards with 36x embedded GPUs or whatever  
**\<fluffypony>** at ~some high marketcap it becomes feasible to do so  
**\<xmrmatterbridge> \<learninandlurkin>** In the interest of adding some structure to the debate/meeting, might it be a good idea if the RandomX folks can describe the state of RandomX, their own detailed opinions, maybe how close to audit-ready it is. Then everyone else can comment upon that and work from there?  
**\<ArticMine>** fluffypony At a high enough marketcap ASIC become competitive with RandomX I agree with that. the real question is by how much  
**\<rbrunner>** Yes, a state summary would be really nice  
**\<hyc>** tevador?  
**\<tevador>** we have more or less complete specification here: https://github.com/tevador/RandomX/blob/master/doc/specs.md  
**\<tevador>** also design notes: https://github.com/tevador/RandomX/blob/master/doc/design.md  
**\<sech1>** RandomX has working implementation and documentation  
**\<tevador>** + working code of course  
**\<sgp\_>** Can someone link the chart I made? It's a good overview  
**\<fluffypony>** ArticMine: it's not ASICs necessarily, could just be large custom boards with embedded GPUs suspended in oil, mining on "free" renewable energy in sub-zero climates, which leads to either (1) hashrate is dominated by a single entity, or (2) if commercialised it completely crowds out home miners  
**\<hyc>** I've been rustling the bushes of CPU/hardware design forums looking for reviewers/auditors  
**\<xmrmatterbridge> \<learninandlurkin>** But maybe for people who haven't poked their heads into #monero-pow in a while, what's recently been going on? I saw there were some interesting test results from many people  
**\<dEBRUYNE>** Would it be preferable if the community hired an audit firm to perform an audit of randomx? We could ask either kudelski or quarkslab  
**\<tevador>** code includes: reference interpreter (portable, but slow), x86 JIT compiler for fast verification and mining  
**\<dEBRUYNE>** Additionally, I think wownere is set to implement RandomX on their mainnet, which should yield some test data as well  
**\<fluffypony>** dEBRUYNE: are either of them well-suited to it?  
**\<dEBRUYNE>** fluffypony: Well, there's two reviews needed basically  
**\<fluffypony>** I wonder if Halong or Innosilicon or whoever would be up to audit it for pay  
**\<dEBRUYNE>** 1. We need to review the algorithm for bugs / exploits etc.  
**\<ArticMine>** fluffypony Yes I agree but again the question again becomes what is the advantage  
**\<hyc>** ^ good suggestion but I wonder about their incentive to be forthright / honest  
**\<dEBRUYNE>** 2. We need to review the algorithm with a view of how asic resistant it is  
**\<fluffypony>** hyc: true  
**\<xmrmatterbridge> \<learninandlurkin>** I think hardware experts would be needed as well as traditional code auditors, for sure  
**\<dEBRUYNE>** fluffypony: I think Tim Olsen wanted to provide a free review of RandomX  
**\<oneiric\_>** a prof crypto consulting firm with pow specialists would be good  
**\<tevador>** Tim Olson promised a free review, but hasn't delivered yet  
**\<fluffypony>** oneiric\_: there isn't really such a thing  
**\<oneiric\_>** erm  
**\<ArticMine>** The small player can get effective free electricity by displacing electric resistance heating for example  
**\<oneiric\_>** im almost certain there is  
**\<midipoet>** we should make one!  
**\<ArticMine>** or surplus solar power  
**\<midipoet>** lol  
**\<fluffypony>** oneiric\_: a "PoW specialist" ?  
**\<oneiric\_>** yeah pow been around for before cryptocurrency  
**\<fluffypony>** yes but largely ignored  
**\<oneiric\_>** surely there is a consultancy firm with such an expert  
**\<fluffypony>** Adam Back is about the closest you'll get to a PoW expert :-P  
**\<oneiric\_>** if that's accurate, we should get him  
**\<dEBRUYNE>** Btw, we also have to think about what course of action to take if we get a report from an expert that clearly states the algorithm wouldn't hold  
**\<xmrmatterbridge> \<learninandlurkin>** Surely that depends on the nature of the failure  
**\<jtgrassie>** I dont think we need a PoW expert, rather a hardware expert.  
**\<tevador>** depends on what you mean by wouldn't hold  
**\<sech1>** This expert should also propose ways to improve RandomX  
**\<jtgrassie>** ^ excatly  
**\<jtgrassie>** \*exactly  
**\<tevador>** Tim Olson said a good estimate of ASIC efficiency requires several months of work on the design and costs six figures  
**\<dEBRUYNE>** tevador: basically a large efficiency advantage that would surely drive out all other miners  
**\<oneiric\_>** jtgrassie: disagree, domain specialization is key in cryptanalysis  
**\<dEBRUYNE>** x4-x5 and you can be reasonably sure that all other miners are driven out  
**\<fluffypony>** jtgrassie: I agree  
**\<fluffypony>** jtgrassie: a hardware designer, someone who's actually built ASICs from algorithms  
**\<oneiric\_>** also would prefer outside the monero-sphere  
**\<oneiric\_>** someone known independent from the community  
**\<ArticMine>** x5 means a 20% rebate on my heating bill in XMR  
**\<dEBRUYNE>** fluffypony: The problem is to find someone reliable though :-P  
**\<jtgrassie>** oneiric\_: this is about efficiency to perform a hash though on certain hardware rather than consensus.  
**\<fluffypony>** I know that OhGodAGirl / Kristy-Leigh Minehan has glanced at it  
**\<xmrmatterbridge> \<learninandlurkin>** six figures? can the CCS take that in a bear market? might take longer than october lol  
**\<fluffypony>** and I can ask her how much she'd charge to give it a thorough look  
**\<oneiric\_>** its also about the cryptographic strength of a new hashing algo jtgrassie  
**\<fluffypony>** oneiric\_: cryptographically it's fine  
**\<dEBRUYNE>** oneiric\_: I think it uses well known algorithms  
**\<fluffypony>** the underlying hash is Keccak or whatever  
**\<dEBRUYNE>** tevador can probably clarify  
**\<tevador>** it uses Blake2b under the hood  
**\<oneiric\_>** has a pro cryptographer outside monero signed off on that?  
**\<fluffypony>** oneiric\_: it's pretty easy to see that internally  
**\<oneiric\_>** in unique and new ways  
**\<tevador>** basically we need 2 reviews: one will include only the specification and the other one will review the code for bugs  
**\<oneiric\_>** my point is, until an outside professional looks at it, would just be taking your word. no offense  
**\<fluffypony>** the contention isn't whether it correctly uses Blake2b, but whether it'll survive first passes by ASIC designers  
**\<hyc>** any auditor can do the bug review  
**\<xmrmatterbridge> \<learninandlurkin>** with hardware/ASIC/PoW "experts" being needed for the spec review?  
**\<midipoet>** and also a review by an ASIC designer, no?  
**\<dEBRUYNE>** tevador: I fear a specification review will still be somewhat subjective  
**\<fluffypony>** oneiric\_: there are enough people in this room that can confirm that, we don't need to waste time on that  
**\<dEBRUYNE>** Also a reviewer might miss stuff  
**\<dEBRUYNE>** We won't know how asic resistant it actually is until we see it in practice  
**\<oneiric\_>** again my point is they shouldn't be in this room  
**\<dEBRUYNE>** midipoet: that's basically specification review  
**\<midipoet>** dEBRUYNE: ok, thanks  
**\<hyc>** you really aren't going to know unless you pay a hardware design house to actually design an ASIC for it  
**\<oneiric\_>** the point of a review isn't to pat oneself on the back. it's to have a disinterested party look at the code/algos critically  
**\<hyc>** and see what it's projected performance and cost are  
**\<oneiric\_>** +1 to hyc's point  
**\<dEBRUYNE>** oneiric\_: That's basically covered by a code review  
**\<fluffypony>** oneiric\_: you're focusing on the wrong aspect - if you don't trust the people in this room to get something that basic right then you should be reviewing PRs, many of which have only my review on them before they're merged  
**\<ferretinjapan>** oneiric\_, not everyone in this room is on the same side. Theres plenty of sceptics alreay here.  
**\<midipoet>** is paying a HW deisgn house to design an ASIC out of the question?  
**\<dEBRUYNE>** One more thing we have to keep in mind is that we cannot stop the network and have to decide on what to do in October within a few months. Would people prefer another tweak or implementing RandomX (it is probably ready by then)?  
**\<oneiric\_>** ok, maybe what i said is coming off wrong. i didn't mean any devs didn't know how to use blake2b, that's dumb. i was saying whoever does the audit shouldn't be associated with monero-project at all  
**\<rbrunner>** Any idea of cost of that ASIC design? six figures?  
**\<fluffypony>** midipoet: they'd charge us for tape-out probably  
**\<dEBRUYNE>** I personally think the tweaks ought to stop, hence my preference for RandomX  
**\<fluffypony>** so call it $1m+  
**\<tevador>** just a 16 nm mask costs ~5M  
**\<dEBRUYNE>** oneiric\_: An external audit firm will be hired to review the code  
**\<fluffypony>** tevador: we can work at 28nm for this purpose, surely  
**\<hyc>** I would stop short of prodction, just get a design that runs in a simulator is fine  
**\<fluffypony>** it's just to get a feel on how it would perform  
**\<dEBRUYNE>** hyc: Even that would be quite costly I think  
**\<hyc>** yes, but probably under $1M  
**\<xmrmatterbridge> \<learninandlurkin>** So could we maybe get Tim Olson & Kristy-Leigh Minehan and whoever else people know into a meeting to talk about the practicalities of a spec review and/or ASIC commissioning?  
**\<dEBRUYNE>** I don't think the community would be able to fund $500k at the moment though  
**\<dEBRUYNE>** Especially given that we have a lot of other proposals seeking funding as well  
**\<hyc>** Tim has declined the project for pay  
**\<tevador>** funding an ASIC design for RandomX makes no sense  
**\<tevador>** we need some experts to review the specification  
**\<dEBRUYNE>** Hopefully Tim Olsen will provide the review soon, that would already set us a big step forward  
**\<rbrunner>** Well, and if the only way to get them to seriously review \*is\* making an ASIC design?  
**\<hyc>** tevador: so far we've had several experts give casual response. I'm not sure anything less rigorous than a working design will tell us more  
**\<oneiric\_>** an expert look at specs + design + impl could produce better results than a "casual response"  
**\<oneiric\_>** or you're paying the wrong firm  
**\<tevador>** the problem is finding those experts  
**\<oneiric\_>** agreed, doesn't seem easy  
**\<xmrmatterbridge> \<learninandlurkin>** what have those casual responses been like? any valuable and constructive suggestions so far? and negative responses?  
**\<tevador>** Linzhi already refused to make any comments about RandomX because they clearly don't want it adopted  
**\<rbrunner>** :)  
**\<xmrmatterbridge> \<learninandlurkin>** Just "we can 10x this, I swear", right?  
**\<hyc>** right  
**\<oneiric\_>** mebbe they can  
**\<tevador>** causal responses from Tim Olson were "you are on the right track"  
**\<midipoet>** ASIC designers would also have the incentive to tell you its an effective design, even it it wasnt.  
**\<oneiric\_>** yeah, another narrowing of the candidate field  
**\<hyc>** yes, we already touched on this. element of trust is lacking.  
**\<tevador>** also we have modified the design slightly based on critical reviews on one hardware forum  
**\<ArticMine>** or if they are hones refuse to comment  
**\<ArticMine>** honest  
**\<kovri-slack> \<woodser>** Just voicing my support for RandomX, being the best known asic resistant option we have.  If it fails an audit or in practice, and nothing better has come along, then I’d support throwing in the towel with an asic friendly algorithm.  
**\<xmrmatterbridge> \<learninandlurkin>** link? I doubt I'll understand it but could be valuable for the logs  
**\<xmrmatterbridge> \<learninandlurkin>** to the hardware forum discussion I mean  
**\<endogenic>** how about gmaxwell's criticisms of algos like randomx?  
**\<fluffypony>** woodser: ProgPoW has good pedigree too, so I would say it's among the best  
**\<dEBRUYNE>** fluffypony: There is some speculation ProgPow is finetuned for Nvidia though  
**\<tevador>** https://www.realworldtech.com/forum/?threadid=183905  
**\<kovri-slack> \<woodser>** @endogenic can you reference or elaborate on gmaxwell’s criticisms of algos like randomx?  
**\<xmrmatterbridge> \<learninandlurkin>** If we just wait for the inevitable collapse of ETH, we would have the option of switching to ProgPow without being minority chain! lol  
**\<tevador>** take those responses with a grain of salt, though  
**\<xmrmatterbridge> \<learninandlurkin>** thanks I'll bookmark for reading  
**\<tevador>** the only valuable thing was their criticism of the lack of branches in RandomX, which we have since fixed  
**\<hyc>** right, most of those responses are hand-waving. the devil is in the details, and none of them will account for the details.  
**\<rbrunner>** Hah, in 10 years we will have a Spectre-like bug in RandomX  
**\<hyc>** lol  
**\<onlycoffee>** didn't randomx change on their nonce grinding suggestion?  
**\<hyc>** randomX changed nonce approach based on gmaxwell critique  
**\<ferretinjapan>** rbrunner, that assumes monero is still around in 10 years :P  
**\<onlycoffee>** alright, so they did have some fair criticisms, which I think can be summarized as concerns over non-obvious "shortcuts" in the algorithm  
**\<hyc>** we're coming up on 50 minutes. what do we need to accomplish in this meeting? action items?  
**\<tevador>** more like shortcuts in the design of an ASIC  
**\<tevador>** compared to a CPU  
**\<tevador>** we should find reviewers  
**\<hyc>** I am still searching for reviewers  
**\<ArticMine>** can we come up with an action plan. or example RandomX if fail then SHA-3?  
**\<rbrunner>** I am a little wondering that nobody drives in and shouts bloody murder on behalf of GPU miners ...  
**\<dEBRUYNE>** ArticMine: That's one thing I wanted to discuss in this  meeting  
**\<hyc>**  ... due to the controversy around progpow I would prefer to avoid hiring Kristy-Leigh for this  
**\<vp11>** But then we need a very clear definition of “failure”  
**\<dEBRUYNE>** As far as I can see, the path of least resistance in the (Dev) community is either:  
**\<xmrmatterbridge> \<learninandlurkin>** Touching on a point dEBRUYNE brought up, if getting proper reviews/audits stalls and the network is rekt before October, could CN-R be tweaked as a stopgap?  
**\<vp11>** Because you don’t want people saying “oh well I don’t consider this as a failure” and divide the community.  
**\<jtgrassie>** ^ hyc ditto  
**\<dEBRUYNE>** - Implement RandomX, switch to SHA3 in case RandomX fails, do not precommit to a set date  
**\<dEBRUYNE>** or:  
**\<ferretinjapan>** vp11, indeed.  
**\<dEBRUYNE>** - Implement RandomX, switch to SHA3 in case RandomX fails, precommit to a set date for SHA3  
**\<dEBRUYNE>** vp11: The metric sech1 described is probably the best we can get in my opinion  
**\<ArticMine>** I would say  Implement RandomX, switch to SHA3 in case RandomX fails, do not precommit to a set date.  
**\<dEBRUYNE>** Also if an asic manufacturer, for some reason, publishes an actual device, we can compare efficiency numbers  
**\<rbrunner>** - Implement RandomX, do not yet pre-commit to any further action because too early / too unsecure?  
**\<dEBRUYNE>** rbrunner: We have to be proactive, not reactive imo  
**\<dEBRUYNE>** fluffypony explained why in the Github issue (#316)  
**\<oneiric\_>** rbrunner: gpu miners probably realize their concerns will be ignored anyway  
**\<xmrmatterbridge> \<learninandlurkin>** the second option seems like a contradiction because how can you only switch in the case of failure, yet also have a predetermined date to switch?  
**\<ferretinjapan>** proactive can't predicct the future is the problem there.  
**\<tevador>** it would be better to say there will be no reactive tweaks anymore, so we can at least see the ASIC being offered publicly...  
**\<fluffypony>** ferretinjapan: and reactive is centralised  
**\<fluffypony>** choose the lesser of two evils  
**\<dEBRUYNE>** learninandlurking: if it fails before the precommited date  
**\<kovri-slack> \<woodser>** I don’t see how we can commit to a date without knowing if it will be necessary  
**\<ferretinjapan>** fluffypony, indeed, theres always a tradeoff.  
**\<vp11>** I agree with not precommitting to a date. I think other coins are switching to SHA3 so manufacturers could start hw development without Monero precomitting  
**\<ErCiccione>** oneiric\_: why ignored? i noticed not many in the community seems to be against a cpu-only algo  
**\<hyc>** I'm with ArticMine, first option  
**\<moneromooo>** I \*really\* don't like this "centralised" pseudo argument, when the claimed point of centralization is to remove a greater centralization.  
**\<ferretinjapan>** the thing is you have more flexibility being reactive.  
**\<ArticMine>** GPU miners win vs ASIC and loose vs CPU. I am not sure they come out as looses with RandomX  
**\<jtgrassie>** hyc ArticMine +1  
**\<ferretinjapan>** proactive could see you walking off alciff too.  
**\<dEBRUYNE>** Being proactive also means a greater risk of community split imo  
**\<ferretinjapan>** cliff\*  
**\<oneiric\_>** ErCiccione: i noticed anyone voicing concerns about keeping gpu being ignored, ridiculed, or downvoted  
**\<dEBRUYNE>** Uh reactive\*  
**\<fluffypony>** moneromooo: there's serious regulatory risk with having a small group of people dictate changes to the network, at worst we're making sure nobody comes after you or I  
**\<oneiric\_>** those in control of this community give 0phux bout gpu miners  
**\<fluffypony>** oneiric\_: you're starting to sound like MoneroCrusher :-P  
**\<jtgrassie>** haha  
**\<oneiric\_>** exactly lol  
**\<moneromooo>** Are those risks particularly about PoW, or also about any other consensus change, or also about any major non-consensus change ?  
**\<fluffypony>** WHEN DUAL POW  
**\<oneiric\_>** and it begins  
**\<ErCiccione>** oneiric\_: that's not what i've seen, but i could have missed it. But we are having meetings and multiple discussions on multiple platforms, and i don't see their voice being silenced.  
**\<dEBRUYNE>** oneiric\_: As far as I can see, gpuminers are not totally alienated. sech1 estimated a CPU advantage of 2:1 and I think that gap can be closed further by a competent GPU miner developer  
**\<vp11>** Monero can express the intent to switch to SHA3 keeping the two variables that I don’t know the name an incognito which would let manufacturers get almost everything ready “just in case”. Other coins are switching to SHA3 so I don’t really see that much gain by precommitting to a date  
**\<dEBRUYNE>** Also GPUs are easier to scale  
**\<oneiric\_>** didn't say silenced  
**\<fluffypony>** moneromooo: particularly about PoW because of the need for last-minute changes (or secrecy on tweaks, equally undesireable)  
**\<dEBRUYNE>** vp11: Do you mean Monero will choose it's own custom parameters for SHA3?  
**\<oneiric\_>** dEBRUYNE: if thats true i'm all for it  
**\<dEBRUYNE>** will/can  
**\<fluffypony>** with non-PoW consensus changes we can plan them well in advance  
**\<vp11>** Yes dEBRUYNE  
**\<ArticMine>** fluffypony I agree which is why a hard fork change has to be justified by overall improvement in the algo  
**\<xmrmatterbridge> \<learninandlurkin>** surely these centralisation risks of forks would be somewhat mitigated by reproducible builds? Maybe that should be kicked up in the list of priorities  
**\<fluffypony>** learninandlurkin: nope, builds don't even factor into it  
**\<el00ruobuob\_[m]>** couldn't we: Implement randomX and precommit to a SHA3 ASIC, without a clearly defined date first? And set the date later?  
**\<vp11>** I think Tim Olson commented something about it in the github issue  
**\<dEBRUYNE>** vp11: Yes I remember, that would work I guess  
**\<dEBRUYNE>** Though that doesn't render any 'design' invalid  
**\<el00ruobuob\_[m]>** by later, i mean, in a 6 month to 1 year window  
**\<rbrunner>** I don't understand why people already want to set a fixed successor for RandomX. What if none is needed?  
**\<xmrmatterbridge> \<learninandlurkin>** fluffypony: could you explalin why not? Surely it lessens the fundamental reliance on "lead" maintainers and devs, and hence lowers the risks you were talking about?  
**\<kovri-slack> \<woodser>** wouldn’t SHA3 be unecessary if RandomX delivers all our hopes and dreams?  
**\<moneromooo>** I believe one of the "legal" tests for a decentralized cryptocurrency is that anyone has a chance at mining. Arguably, not trying to fix a party having >> 50% means we stop being such.  
**\<dEBRUYNE>** rbrunner: Again, in order to be proactive  
**\<vp11>** Precommitting to a date for me is akin as maybe finding the cure for a disease but kill your patient anyway.  
**\<dEBRUYNE>** woodser: Yes, but we still need a backup plan in case it fails  
**\<needmoney90>** rbrunner: The point is mainly signalling to the community that forking more than once a year has become untenable, and we need to make a choice if things break  
**\<ferretinjapan>** rbrunner, hence my concerns of "walking off a cliff" someone could manipulate such a timetable.  
**\<needmoney90>** many people assume things are fine  
**\<fluffypony>** learninandlurkin: it does nothing to lessen the reliance on maintainers and devs - even if every node compiled its own software they're still running software from a "central" repository dictated by the people who work on that  
**\<rbrunner>** Ok, the condition "if RandomX breaks" went missing. With that in I can agree  
**\<kovri-slack> \<woodser>** Agreed, then we’d need to clearly signal an action plan  
**\<needmoney90>** Yeah, If RandomX pans out I'm all in, but I'm being realistic that this is basically our last shot  
**\<needmoney90>** and the community needs to realize that  
**\<needmoney90>** the number of people advocating for a 4-6 month fork schedule is insane  
**\<needmoney90>** And they need to be let down gently  
**\<rbrunner>** A little behind that the whole concept of PoW is put into question, if you ask me  
**\<needmoney90>** thats a bigger discussion  
**\<rbrunner>** With no clear alternative in sight, of course  
**\<ferretinjapan>** needmoney90, that in itself can cause a schism.  
**\<ArticMine>** We cannot create a dependence on 4-6 months forks.  
**\<fluffypony>** needmoney90: I agree  
**\<sech1>** I think "RandomX failed" condition comes true only when there is no debate about it in the community at all. Like when hashrate spiked so much and for so long time that everyone gets 20% (at best) from money spent on electricity.  
**\<needmoney90>** With who? People who want to fork constantly?  
**\<needmoney90>** Let 'em, they wont keep our market cap  
**\<needmoney90>** they cant, we're too big  
**\<fluffypony>** ferretinjapan: anyone who wants 4 month forks are welcome to fork off  
**\<fluffypony>** :-P  
**\<rbrunner>** Lol  
**\<midipoet>** we could just let ASICS rule Monero, and move the whole community to a brand new implementation of MimbleWimble  
**\<ferretinjapan>** needmoney90, with trying to give a "gentle" ultimatum  
**\<needmoney90>** the only way to fork that often is to drop the market cap / ecosystem size  
**\<needmoney90>** go for it  
**\<ferretinjapan>** fluffypony, I've never advocated a 4 month fork schedule.  
**\<fluffypony>** ferretinjapan: was joke  
**\<needmoney90>** then you tacitly allow asics if randomx fails  
**\<tevador>** even if there was a 2x ASIC, it doesn't require the same response as a 50x ASIC  
**\<needmoney90>** If you advocate asic resistance and not a 4-month fork schedule, you're willfully ignoring reality  
**\<ferretinjapan>** iKnow :) but some people might think I'm opf that mind  
**\<fluffypony>** midipoet: MW is already coming via Tari, not sure if doubling down on that is helpful - also MW requires interactivity, where Monero does not, it would be a fundamentally different thing  
**\<dEBRUYNE>** sech1: Yeah that sounds reasonable  
**\<needmoney90>** this is not counting randomx of course\*  
**\<ferretinjapan>** needmoney90, aaaand theres the ulimatium :)  
**\<needmoney90>** RX is our prescription for asic resistance  
**\<moneromooo>** tevador: if randomx appeared to fail, would you want to continue trying to get a better algorithm, hypothetically ?  
**\<tevador>** depends on how it fails  
**\<midipoet>** fluffypony: ah i was just joking. i lked the idea od taking all our devs and community and starting on a 2nd/3rd generation tech.  
**\<needmoney90>** Mcash would be interesting, but they'll run into the same issues if they get big  
**\<tevador>** I wouldn't consider a 2x more efficient ASIC a failure  
**\<moneromooo>** If it fails by having a party suddenly seem to get close to 50% of the network hash rate.  
**\<needmoney90>** mooo, I think its a "we'll cross that bridge when we get to it" issue  
**\<tevador>** and we could still make annual PoW upgrade as new CPUs are introduced  
**\<moneromooo>** I'm not asking to start now :)  
**\<dEBRUYNE>** I'd be strongly opposed to an "annual PoW upgrade"  
**\<ArticMine>** a 2x ASIC is not a RandomX failure Would you accept a 50% rebate payable in XMR on your heating cost by running a peice of software on our computer? 30% 10% 5% 1% .1% This becomes the question  
**\<dEBRUYNE>** ArticMine: You also have to factor in that not everyone uses their miner for heating  
**\<ferretinjapan>** annual POW would probably be too late.  
**\<fluffypony>** dEBRUYNE: as would I  
**\<tevador>** dEBRUYNE: what time scale would you be comfortable with? no changes at all until the end of time?  
**\<needmoney90>** Anything under annual PoW is basically off the table right now  
**\<needmoney90>** barring emergency forks  
**\<needmoney90>** we can maybe get one more off  
**\<dEBRUYNE>** tevador: Yes, no changes  
**\<dEBRUYNE>** Reintroducing tweaks reintroduces the same risks smooth described here -> https://github.com/monero-project/monero/issues/3387#issue-304296870  
**\<xmrmatterbridge> \<learninandlurkin>** I think it is clear that even a perfect CPU favouring algorithm would eventually need to be changed, because CPUs will eventually change  
**\<dEBRUYNE>** Which we're trying to get away from with a long-term algorithm  
**\<ArticMine>** This is an example why 2x or even 10x may not be a failure. 100x Yes that is a failure  
**\<dEBRUYNE>** 10x will invariable drive out all other miners  
**\<tevador>** well, what if CPUs start routinely ship with 4 MB of cache per core  
**\<ArticMine>** There are a host of other situation where a small miner would have an advantage. Excess solar is another case  
**\<dEBRUYNE>** tevador: Aren't we then finding ourselves in a situation where new CPUs are more suitable for the algorithm than old CPUs?  
**\<sech1>** Botnets have 0 power costs, don't forget it. They can always compete with ASICs.  
**\<ArticMine>** 10x is marginal  
**\<dEBRUYNE>** I don't think that is necessarily a problem that requires tweaking  
**\<ferretinjapan>** I'll just say I think it's naieve to think that its "randomX because nothing else is viable in the future. Ever.".  
**\<rbrunner>** I'd like to throw in that looking far into the future is nice and all, but we have an urgent problem \*now\* - somebody owned our network, and maybe will again ...  
**\<needmoney90>** ferretinjapan: If you have any actionable directions as opposed to "its gotta exist because I want it", I'm all ears.  
**\<needmoney90>** we are all ears\*  
**\<ferretinjapan>** that kind if thinking eradicate all future innovateions ever.  
**\<dEBRUYNE>** sech1: Sure, but at some point they only own a negligible amount of the hashrate  
**\<dEBRUYNE>** In the last 3 months leading up to the hard fork, they were probably still mining, but probably owned only like 5-10%  
**\<xmrmatterbridge> \<learninandlurkin>** If newer generation widespread CPUs perform better than older simpler ones, then older simpler ones become a form of ASIC, right?  
**\<dEBRUYNE> \<ferretinjapan>** that kind if thinking eradicate all future innovateions ever. \<= That seems more like wishful thinking imo  
**\<ferretinjapan>** needmoney90, you didn't understand what I said. I said taking all options off the table forever is naieve.  
**\<xmrmatterbridge> \<learninandlurkin>** but yeah looking that far ahead is kinda pointless right now  
**\<needmoney90>** The ecosystem size and market cap are taking the options off the table, my dude  
**\<needmoney90>** we cant keep forking like this  
**\<ferretinjapan>** Dead2, Ring CT is wishful thinking?  
**\<ferretinjapan>** dEBRUYNE, ^  
**\<dEBRUYNE>** Arguably that's different than PoW algorithms  
**\<ferretinjapan>** the point is, things improve, even though you ccan't see an alternative right now.  
**\<sgp\_>** It's good to have an idea and plan even if it may change  
**\<ferretinjapan>** ^  
**\<needmoney90>** you're free to make a coin that forks constantly to resist asics, and piss off exchanges/wallet providers/the ecosystem.  
**\<fluffypony>** ferretinjapan: nobody is suggesting it will never change  
**\<hyc>** yeah, saying PoW will never change again is a bit shortsighted  
**\<fluffypony>** but I think planning for it to change regularly vs. planning for it to change infrequently are different  
**\<moneromooo>** I'd rather pissed off exchanges than a party with 51% of the hash rate.  
**\<ferretinjapan>** ^  
**\<needmoney90>** Suggesting you want asic resistance and also not being willing/able to fork more than once a year is a direct contradiction  
**\<needmoney90>** you need to choose one  
**\<fluffypony>** I also don't think that the Monero protocol should ossify because we need to constantly improve privacy  
**\<fluffypony>** but I do think that PoW should ossify, for reasons that I hope are obvious  
**\<ArticMine>** The difference is an improvement POW is no different in this respect. Endless tweaks with no improvement in POW is very different  
**\<needmoney90>** And we can't do the latter  
**\<ferretinjapan>** needmoney90, you're cutting off your nose to spite your face. You could very well box the entire network into a corner.  
**\<xmrmatterbridge> \<learninandlurkin>** A future where we have annual protocol upgrades which occasionally also involve a PoW upgrade to better reflect innovations in the CPU market sounds pretty good to me  
**\<dEBRUYNE>** ArticMine: sure, but imo we don't need to tweak if a new generation of CPUs simply outclasses the old generation of CPUs  
**\<needmoney90>** What are you even suggesting ferret?  
**\<dEBRUYNE>** Isn't that basically natural evolvement  
**\<xmrmatterbridge> \<learninandlurkin>** at a FIXED date  
**\<needmoney90>** You keep saying "no, reality sucks, choose a different reality"  
**\<needmoney90>** theres only one reality  
**\<hyc>** dEBRUYNE: yeah I basically agree with this  
**\<ferretinjapan>** needmoney90, I've already made myself clear. I said it above.  
**\<needmoney90>** fork every 4 months, I know  
**\<ArticMine>** So if we find a way to lower the ASIC advantage from say 5x to 1.5x with RandomX that is a valid "tweak"  
**\<needmoney90>** If you dont want 4-month forks, you dont want asic resistance  
**\<needmoney90>** asics will be de facto present on the network  
**\<dEBRUYNE>** ArticMine: How do you know that tweak will work out though?  
**\<dEBRUYNE>** Only practice will tell and we may be at risk of another manufacturer again gaining a x5 advantage  
**\<oneiric\_>** needmoney90: even with cnr?  
**\<needmoney90>** im not sure.  
**\<ArticMine>** One can test an verify ahead of time  
**\<needmoney90>** we'll see  
**\<sgp\_>** dEBRUYNE: I think this was a hypothetical example  
**\<dEBRUYNE>** In my opinion, if RandomX gets overrun by ASICs, we should just switch to an asic friendly algorithm and not try to apply band-aid  
**\<needmoney90>** but I'm suspecting its 4-6m  
**\<needmoney90>** and then asics are out again  
**\<dEBRUYNE>** ArticMine: Not fully, only practice can tell  
**\<ArticMine>** One can also argue intent  
**\<oneiric\_>** if cnr keeps at 6+ mo fork, that at least buys time for review + discussion about RandomX and other alternatives  
**\<sgp\_>** dEBRUYNE: I think it depends on the circumstances of it being overrun, but I largely agree except for bug-like fixes  
**\<kovri-slack> \<woodser>** also agreed  
**\<ArticMine>** If on the other hand the tweak leaves the ASIC advantage at 5x and only bricks the ASICs that is not a valid tweak  
**\<sgp\_>** Agreed  
**\<ArticMine>** This is the key difference Intent is critical  
**\<moneromooo>** It is, if the ASICs were, or were threating to be, at > 50% of the network hash rate.  
**\<dEBRUYNE>** We also have to weigh off the risks involved with a tweak against the risks of switching to SHA3 at that point  
**\<moneromooo>** It is a short term fix, but it is one nonetheless.  
**\<xmrmatterbridge> \<learninandlurkin>** MONERO 2039 NETWORK UPGRADE CHANGELOG: 1) Changed to QuantumX to lower the advantage of Quantum ASIC advantage, and slow the encroachment of the Terminator hoards.  
**\<fluffypony>** LOL  
**\<ArticMine>** moneromooo then one tweak followed by SHA-3  
**\<dEBRUYNE>** At that point it may be better to just introduce SHA3 in a few months  
**\<sgp\_>** ArticMine: yes, only as an emergency option to buy ~3 months before SHA3 if needed  
**\<oneiric\_>** lol skynet is online  
**\<dEBRUYNE>** It will be sufficient for manufacturers to tape out a device  
**\<dEBRUYNE>** Reacting to a party gaining the majority of the hashrate with tweaking may also raise the possibility of them acting maliciously  
**\<moneromooo>** I am far from confident SHA-3 will lead to a healthy non oligopolistic market. Though it might, but that's wholesale speculation.  
**\<midipoet>** ^  
**\<needmoney90>** I do not disagree mooo  
**\<moneromooo>** And it loses us the "ease of starting mining", for sure.  
**\<rbrunner>** Agree  
**\<midipoet>** at tpd  
**\<dEBRUYNE>** Don't disagree either, but I think it's a better option than trying to apply band-aid to RandomX in case it fails  
**\<hyc>** agreed. that's why I've opposed any plan that unconditionally says "we shift to SHA3"  
**\<dEBRUYNE>** To kind of conclude this subject, I think most are in favor of "- Implement RandomX, switch to SHA3 in case RandomX fails, do not precommit to a set date" right?  
**\<xmrmatterbridge> \<learninandlurkin>** It really really depends on the nature of the failure and the band-aid. Audits, audits, audits....  
**\<oneiric\_>** maybe, but maybe the market matures enough in the next 1-2 years that asic-friendliness makes sense. maybe it doesn't. agree with flexible algo for asic-friendly  
**\<midipoet>** unless we manfacture SHA-3 ASICS. but am not sure how that worked for SIA.  
**\<dEBRUYNE>** Band-aids are per definition tweaks, which we're arguably trying to get away from  
**\<dEBRUYNE>** midipoet: SIA is a poor example, they forked off other manufacturers that made more efficient devices  
**\<dEBRUYNE>** Also they used a relatively complex algorithm  
**\<fluffypony>** I'm of the opinion that we need to precommit to a SHA-3 date so that manufacturers start working towards it  
**\<jwinterm>** moneromooo: I agree, but I think I'm more confident that sha3 will lead to a non-oligopolistic market than I am that randomx will not lead to a single entity producing custom hw leading to that entity controlling 51% of the network hashrate  
**\<hyc>** fluffypony: there are already other coins using SHA3  
**\<fluffypony>** hyc: no, there really aren't  
**\<fluffypony>** Shitcoin #7 doesn't count  
**\<hyc>** why do manufacturers need to wait for us?  
**\<sgp\_>** Two tweak types: 1) narrow ASIC advantage, 2) break existing ASICs. I think most agree 1 is highly preferable to 2  
**\<jwinterm>** max keiser would like a word with you fluffypony  
**\<fluffypony>** lol jwinterm  
**\<needmoney90>** Fluffypony, keccack has some actual adoption  
**\<oneiric\_>** fluffypony: what about not committing to algo, and selecting one that has highest likelihood of adoption at the time of the decision?  
**\<needmoney90>** not top-20 adoption  
**\<vp11>** Band-aids are different from technological evolution too. ArticMine is correct that we should be open to improve the algorithm even if ASICS are not dominating. We don’t need a schedule for that nor a specific PoW fork. This could be added to a “normal” network upgrade.  
**\<dEBRUYNE>** vp11: "improvement" is a tweak  
**\<needmoney90>** nvm, keccack has no real adoption  
**\<dEBRUYNE>** And who can objectively determine that it is an improvement?  
**\<oneiric\_>** keccack is used by eth no?  
**\<needmoney90>** statement retracted its all garbage  
**\<fluffypony>** needmoney90: was about to say  
**\<fluffypony>** lol  
**\<xmrmatterbridge> \<learninandlurkin>** Not really a tweak if it's something like "Made the Randomness of RandomX more Random"  
**\<ArticMine>** fluffypony A few months is all manufactures need. Pre commit makes no sense if RandomX is working  
**\<dEBRUYNE>** I thikn a lot of people are underestimating the risks involved with a tweak  
**\<needmoney90>** ^^^^^^^^^  
**\<vp11>** These improvements can be tested in stagenet, test net, other coins, etc.  
**\<fluffypony>** ArticMine: for them to truly compete and reduce large differences they need more time  
**\<fluffypony>** the arms race is about being first to market  
**\<oneiric\_>** +1 for Articmine  
**\<jwinterm>** sha-3 ip is available through numerous asic producers (not just cryptocurrency asics), for instance: https://www.silexinsight.com/products/security/sha-3-ip-core/ or https://www.xilinx.com/products/intellectual-property/1-gex6yw.html  
**\<vp11>** Yes, improvements are tweaks if you want, but intent is different. Do you think Bill Gates was right when he said that 640k was enough for everyone? Evolution happens.  
**\<sgp\_>** dEBRUYNE: ironically I think we understand this better than ASICs given the past actions and observed behaviors  
**\<fluffypony>** by pre-committing we get rid of the "first to market" race  
**\<moneromooo>** jwinterm: based on particular reasons ?  
**\<jwinterm>** I think it would be trivial to turnaround an asic for sha-3 in under three months by simply licensing ip  
**\<dEBRUYNE>** sgp\_: The fact that some people are still advocating for them makes me think we don't  
**\<sech1>** fluffypony no one is going to work on SHA3 ASIC 2 years in advance, it's an eternity in crypto  
**\<jwinterm>** based on the experience with cryptonight and tweaks moneromooo mostly  
**\<moneromooo>** fluffypony: if it's all about being first to market, then we WILL end up with a monopoly.  
**\<dEBRUYNE> \<fluffypony>** the arms race is about being first to market \<= I don't think that is necessary a problem in the beginning  
**\<hyc>** and an eternity in silicon  
**\<dEBRUYNE>** As long as it doens't lead to a manufacturer dominating  
**\<tevador>** I don't think we need to precommit to a date for SHA-3 at the moment  
**\<dEBRUYNE>** moneromooo: most manufacturers have similar tape out times  
**\<tevador>** 6-month advance notice should be enough if we want to switch in the future  
**\<fluffypony>** sech1: I know, but I also don't see value in precommitting to a short-term date because then RandomX is largely pointless  
**\<sgp\_>** dEBRUYNE: I think it's important to distinguish between planned tweaks with the intent of breaking (current) and RandomX improvements. These have very different impacts and implications  
**\<vp11>** We’re already precommitting to the possibility of SHA3. Isn’t that enough? :)  
**\<fluffypony>** tevador: if RandomX is broken and someone manufacturers a 10x ASIC then it will be a panic-switch and NOBODY will be ready on the manufacturing side  
**\<fluffypony>** then it'll be the Bitcoin ASIC arms race all over again  
**\<needmoney90>** Vp11: it's a process, this is Signalling  
**\<xmrmatterbridge> \<learninandlurkin>** I'm general afraid of commitment, so I vote against committing to a date  
**\<el00ruobuob\_[m]>** vp11 +1  
**\<dEBRUYNE>** sgp\_: "Improvements" are still tweaks, same risks involved. Besides, who can objectively determine they are actually improvements?  
**\<needmoney90>** If it's not in the consensus layer, this is the best we can do  
**\<needmoney90>** Gauge consensus and get everyone on the same page  
**\<dEBRUYNE>** fluffypony: If that happens, we can plan a fork 6 months in the future I presume  
**\<oneiric\_>** having a set of viable alternative for backup makes more sense than precommiting to me  
**\<jtgrassie>** ^  
**\<ferretinjapan>** ^  
**\<dEBRUYNE>** Imo the only viable option if RandomX fails is SHA3  
**\<fluffypony>** dEBRUYNE: given the history I STRONGLY DOUBT everyone will be able to chill whilst someone takes over the hashrate  
**\<sgp\_>** dEBRUYNE: I disagree with grouping a possible 2 year off improvement that isn't rushed to have the same risks and annoyances that we have now  
**\<dEBRUYNE>** There's certainly a lot of overlap  
**\<oneiric\_>** dEBRUYNE: and if in 6-months something better comes up?  
**\<dEBRUYNE>** ^ sgp\_  
**\<vp11>** dEBRUYNE: who can objectively determine if the current improvements on the protocol are actual improvements? The answer should be because there are tests, research and audits. Why it should be different to pow research?  
**\<dEBRUYNE>** oneiric\_: It's a risk, but a slight one  
**\<dEBRUYNE>** vp11: That doesn't rule out the "improvement" yielding an advantage for an ASIC manufacturer  
**\<fluffypony>** ok so consider these two scenarios:  
**\<oneiric\_>** just don't see the harm in saying: "we'll fallback to one of SHA3, Blake2b, ChaCha, etc."  
**\<vp11>** That doesn’t rule out the improvement (on protocol) yielding a possibility of breaking the whole thing.  
**\<fluffypony>** 1. RandomX fails and a 10x ASIC appears, we decide to fork in 6 months and in the meantime a single manufacturer controls 90% of the hashrate  
**\<dEBRUYNE>** vp11: I don't see how that is related  
**\<fluffypony>** 2. We have precommited to SHA3 in 2 years. 6 months in, RandomX fails and a 10x ASIC appears, we decide to emergency fork in 8 weeks, and at least some manufacturers already have plans in place and can accelerate them.  
**\<fluffypony>** option 3 is no precommit + emergency fork, which is untenable  
**\<dEBRUYNE>** fluffypony: Do you think asic manufacturers will realistically start designing 18 months in advance?  
**\<dEBRUYNE>** I am kind of skeptical about that  
**\<tevador>** I don;t think anyone would make any work on SHA-3 ASIC 1.5 years in advance  
**\<mrantrax>** that would be a waste of time  
**\<rbrunner>** And what in those arguments speaks for SHA3? Why not piggyback on Bitcoin ASICs?  
**\<ArticMine>** In case 2 the creator of the 90% takeover starts making the SHA-3 ASIC since they know a head of time that is the fall back  
**\<moneromooo>** Because someone would have 99% of the hash rate.  
**\<ferretinjapan>** fluffypony, I'm for 3. otherwise, a miner could decide to game the network by hiring a huge botnet to spike the HR and fake RandomX asics, thus triggering a non-rollbackable switchover. Remember Miners do NOT like RandomX they'll be incentivised to nerf it.  
**\<fluffypony>** dEBRUYNE: they will start the process of raising money, designing, aiming for 7nm, etc  
**\<jwinterm>** rbrunner: that puts monero at the mercy of f2pool or whatever  
**\<vp11>** The same argument against the tweaks in PoW can be used against the tweaks in the protocol. If someone finds a better way to improve RandomX in the future (while we’re on it) we should consider implementing it in a responsible way, the same way we do for the protocol improvements.  
**\<vp11>** dEBRUYNE:  
**\<ArticMine>** Out of the frying pan 10x into the fire 100x  
**\<dEBRUYNE>** It's vastly different  
**\<oneiric\_>** if asic manufacturers can already do \<6 mo design on something as complicated as cryptonight, dont see sha3 asic taking more than a couple weeks  
**\<xmrmatterbridge> \<learninandlurkin>** Any announcement of a switch date relies on (SHA-3 ASICs produced to sell freely)>>(SHA-3 ASICs produced to mine fore profit at the moment of the fork)  
**\<fluffypony>** vp11: the argument being made is that RandomX is the be-all and end-all of ASICs  
**\<dEBRUYNE>** There's no way you can compare improvements in the protocol to "improvements" in the PoW algorithm  
**\<xmrmatterbridge> \<learninandlurkin>** so the a fair market emerging is quite an assumption, especially immediately  
**\<fluffypony>** sorry of ASIC resistance  
**\<vp11>** I just did :)  
**\<ArticMine>** fluffypony RandomX is not the be-all and end all of all ASICs far from it  
**\<hyc>** RandomX will kill single-purpose fixed function hardware. That's unequivocal.  
**\<tevador>** there are already SHA-3 designs available, ETH ASIC contains Keccak cores; the only investment would be the tapeout/mask which nobody would do 2 years in advance  
**\<fluffypony>** vp11: no, I mean that there is expected to not be a "better way to improve RandomX" much, if at all  
**\<hyc>** the only open question is how efficient you can make a programmable chip  
**\<moneromooo>** randomx is the best we have. But then 6 months ago (or wahtever) it was somehting else. Years ago it was CN. Maybe a better way will be found in the next year or two. Claiming randomx is the last now does not seem too productive. It might be the last you're willing to countenance, but that is another claim.  
**\<rbrunner>** There must be some logical contradiction somewhere in using RandomX first and already committing to SHA3  
**\<hyc>** rbrunner: agreed  
**\<hyc>** precommit to SHA3 before knowing how well randomX performed is illogical  
**\<ferretinjapan>** ^  
**\<rbrunner>** Or use it at all if SHA3 is so good ...  
**\<oneiric\_>** ^  
**\<jtgrassie>** agreed  
**\<fluffypony>** hyc: RandomX \*will\* eventually fail, though  
**\<ferretinjapan>** And theres incentives for miners to (pardon pun) undermine RandomX  
**\<fluffypony>** rbrunner: I'm for side-stepping it, but few others are  
**\<sech1>** fluffypony you can't be 100% sure about that  
**\<needmoney90>** Moneromooo: it's the last we can realistically use before we succumb to ASICs due to ecosystem size  
**\<sgp\_>** fluffypony: yes, which is why I think it's good to share an intent to switch if it breaks  
**\<dEBRUYNE>** fluffypony, sech1: Only practice will tell I guess  
**\<needmoney90>** Even if we find another option or two, the network will be de facto ASIC mined until then. And it would take a lot of time to switch over.  
**\<fluffypony>** sech1: yes, I can. It will not achieve its stated objective in the long run - a custom motherboard with a bunch of CPUs or GPUs on it is indistinguishable from an expensive ASIC.  
**\<hyc>** fluffypony: theoretically yes. Even if an ASIC was only 1% more efficient, there is presumably a marketcap value where it becomes profitable to build that ASIC  
**\<dEBRUYNE>** But it is prudent to have a back up plan in case it fails  
**\<hyc>** but those outcomes are far away  
**\<needmoney90>** Moneromooo in years past we had the benefit of being small/flexible, we could adapt rapidly  
**\<needmoney90>** We're kind of a billion dollars now  
**\<sech1>** fluffypony then we have different definitions of failure  
**\<tevador>** custom montherboard with a 1.5 efficiency advantage can hardly be called an ASIC  
**\<fluffypony>** needmoney90: we're over a billion Dollars in a bear market  
**\<ArticMine>** fluffypony hyc: RandomX \*will\* eventually fail, though \<---- that is very debatable It may well lead to co existence in the 1.5x to 10x range  
**\<fluffypony>** tevador: it's functionally equivalent  
**\<needmoney90>** I'm trying not to overstate things Fluffy.  
**\<tevador>** the last batches of ASICs were 10-50x more efficient  
**\<tevador>** that's a different situation  
**\<fluffypony>** ArticMine: 3x - 10x would be sufficient to allow a single manufacturer dominate hashrate  
**\<needmoney90>** Just pointing out the realoty that even if more asic resistant algos exist, we don't have the luxury of algo hopping more than once a year at this point  
**\<hyc>** that's really a different argument. it's always true that whatever the mechanism, the one with the deepest pockets can buy the most of them  
**\<moneromooo>** I don't see that as an impassable obstacle. Pissed off exchanges -> fewer exhanges; someone with > 50% hash rate -> pointless coin.  
**\<needmoney90>** Even then is reckless  
**\<sech1>** custom multi-cpu motherboard with 1.5x efficiency - no sense in keeping it in secret, much more sense in selling it to millions of miners  
**\<fluffypony>** sech1: no, keep it secret and mine for a while until you've made enough money, then blow off the dust and sell them  
**\<fluffypony>** that's the Bitmain Model (tm)  
**\<ferretinjapan>** the other thing is RandomX has ubiquity on it's side to balance out advantages ASICs can have.  
**\<needmoney90>** ?  
**\<sech1>** fluffypony this model doesn't work with only 1.5-3x efficiency  
**\<ferretinjapan>** ASIC manufacturers can't buy up ALL CPUs/GPUs.  
**\<ArticMine>** 3x is very debatable given the ETH experience 10x maybe  
**\<ArticMine>** This also assumes only one ASIC manufacturer for RandomX  
**\<needmoney90>** Articmine is it possible that the pos fork / difficulty bomb have delayed investment in asics  
**\<needmoney90>** Due to fears of their longevity on the network  
**\<dr-mike>** Current ETH ASICs available on the market are only 2.3x more efficient  
**\<xmrmatterbridge> \<learninandlurkin>** yes ubiquity is a powerful force in stopping a 51% attack. Maybe it's controversial but I'm actually in favour of botnets if they decentalize things with common hardware  
**\<ArticMine>** It did not. What is happening in ETH is the advantage is low 2x -4x  
**\<ArticMine>** Also while this is going on the CPU do not stay static  
**\<xmrmatterbridge> \<learninandlurkin>** The barrier to entry for building a botnet is potentially much lower than the one to build an ASIC farm  
**\<moneromooo>** Is Ethereum mining feasible on CPU ?  
**\<dr-mike>** no.  
**\<sgp\_>** If you don't mind, would it be all right if I focus the discussion more into a few main topics? We can more reliably debate about the pros and cons under different scenarios and help predict actions. Otherwise this conversation can go on forever.  
**\<dr-mike>** GPU advantage is well over 10x  
**\<ArticMine>** It is on GPU well after a year of ASICs  
**\<dEBRUYNE>** I think only practice can tell what kind of efficiency advantage will drive out other miners  
**\<ArticMine>** So you ave co existence GPU / ASIC which also leads to competition between ASIC manufactures. The very thing SHA-3 is trying to engineer  
**\<ArticMine>** have  
**\<xmrmatterbridge> \<learninandlurkin>** I think from reading this discussion that longer term plans are pretty much pointless until we've had some audits/reviews/testing of RandomX especially because people are against hard-coding failure by adding a date for SHA-3  
**\<moneromooo>** Then maybe if RandomX fails (to have small enough of a CPU-to-ASIC efficiciency gap), then switching to Ethereum's hash might be better than SHA-3. We lose a lot of ease of access, but it's still a lot better than ASIC or nohting.  
**\<moneromooo>** (once Ethereum is PoS, which it apparetnly is not yet)  
**\<dr-mike>** Sounds reasonable.  
**\<dEBRUYNE>** I am skeptical the asic advantage for ETH asics will remain at 2.3x though  
**\<ArticMine>** moneromooo That is a very interesting option if ETH goes POS  
**\<rbrunner>** Sounds reasonable today. Nobody knows about tomorrow.  
**\<ArticMine>** So another fall back  
**\<dr-mike>** dEBRUYNE, Me too.  
**\<tevador>** ETH ASIC with HBM will be 6x-10x more efficient than a GPU  
**\<hyc>** There are still a lot of factors. Even if ASICs can be 2-3x more efficient, they aren't produced in volumes that can challenge GPUs  
**\<sgp\_>** I think it will unfortunately become less reasonable over time, but it's an option. Ethereum also needs to actually make the switch of course  
**\<xmrmatterbridge> \<learninandlurkin>** (or if ETH just collapses)  
**\<hyc>** the ASIC companies are lower priority, don't get the same access to chip fabs as the bigger players  
**\<sgp\_>** hyc: plus the extra purposes of GPU/CPU and more stable market have added value that's hard to calculate  
**\<moneromooo>** Do you need a GPU to (feasibly) sync the Ethereum blockchain ?  
**\<ferretinjapan>** almost seem more rational to do a mashup of multiple POWs as a stopgap to ensure decentralisation if RandomX fails, :P  
**\<moneromooo>** Or, rather, anyone knows how much verifying a hash on CPU costs ?  
**\<smooth>** moneromooo: GPU is of no benefit to syncing ETH  
**\<xmrmatterbridge> \<learninandlurkin>** you need a time machine to feasibly syn the ETH blockchain  
**\<oneiric\_>** lol  
**\<tevador>** moneromooo: no, but you need a quad core CPU, 32 GB of RAM and an SSD  
**\<dEBRUYNE>** ^ Even then syncing will be quite difficilt  
**\<dEBRUYNE>** difficult\*  
**\<moneromooo>** It was a bad questiuon. The second question is what I intended :)  
**\<asymptotically>** ferretinjapan: i don't think that really works. see DASH or other coins that uses X11  
**\<ferretinjapan>** asymptotically, was half joking for the record.  
**\<dr-mike>** moneromooo, Syncing eth chain takes 8 hours on a beefy i7 with a ssd and a 100mbit/s connection. No gpu required.  
**\<ArticMine>** ... and you need to be near the ETH miners because of the 15 sec block time  
**\<dr-mike>** tevador, No you dont neewd 32GB ram, 4GB will do.  
**\<moneromooo>** I'm really interested in "if we had Ethereum's hash in monero, how much would the PoW verification cost". Hence why my first question was bad.  
**\<moneromooo>** Since ethereum has probably way more blocks than us, if 15 seconds.  
**\<tevador>** I think CPU verification of ethash is roughly 4 ms or so  
**\<moneromooo>** What's CN on a similar CPU ?  
**\<xmrmatterbridge> \<learninandlurkin>** to be clear, are we discussing ETHs current hash or ProgPow?  
**\<jwinterm>** ethhash  
**\<tevador>** CN is 12-15 ms on similar CPU  
**\<moneromooo>** Thanks.  
**\<dr-mike>** Why is ProgPow not an option for monero?  
**\<xmrmatterbridge> \<learninandlurkin>** although feasibly we could steal either as a back up plan once they go PoS  
**\<moneromooo>** It could be, if randomx fails.  
**\<hyc>** dr-mike: GPU-centric  
**\<oneiric\_>** not-invented-here  
**\<ArticMine>** if fluffypony were to mine an ETH block at home for me to mine also at home on top of his block there is ~500 msec for the speed of light and switching alone out of 15 sec  
**\<moneromooo>** (and no other suitable candidate is apparent)  
**\<hyc>** shrouded in controversy  
**\<dr-mike>** I agree RandomX should be given a chance, if it fails ProgPow is the next best thing.  
**\<hyc>** oneiric\_: not true, it \*was\* invented here.  
**\<tevador>** nvidia sponsored PoW  
**\<ArticMine>** Mega orphan risk  
**\<oneiric\_>** my mistake  
**\<rbrunner>** Why should RandomX fail and ProgPoW \*not\*?  
**\<rbrunner>** Isn't the basic approach the same?  
**\<hyc>** rbrunner yes  
**\<xmrmatterbridge> \<learninandlurkin>** No reason at all, but it's nice to know there are other PoW that can be stolen if RandomX fails and a stopgap is needed  
**\<dEBRUYNE>** If randomx fails, isn't progpow likely to fail as well?  
**\<moneromooo>** Progpow targets an arch that's already optimized to be massively parallel.  
**\<sgp\_>** learninandlurkin I think that's a good way of looking at it, a stopgap  
**\<rbrunner>** No shortage of stopgaps. Take basically anything, just different  
**\<moneromooo>** (though I do not know what it does)  
**\<dEBRUYNE>** learninandlurkin: not sure why we would need a stopgap at that point though  
**\<hyc>** rbrunner but progpow claims to fully utilize a GPU, as randomX claims to fully utilize a CPU. progpow actually doesn't use more than ~40% of a GPU tho  
**\<dEBRUYNE>** Imo it would be better to switch to asics then  
**\<crCr62U0>** How much does cost to pay ASIC manufacturer to build 10x more efficient miner of RandomX comparing to CPU?  
**\<crCr62U0>** 10e+6$?  
**\<tevador>** 10x more efficient? I don't think even whole AMD R&D budget would be enough  
**\<dEBRUYNE>** We're kind of digressing a bit from the original topics btw, I'd like to switch back to the initial points  
**\<rbrunner>** A bit? :)  
**\<oneiric\_>** if feasible randomx + progpow seems to solve a lot of controversy. though i don't know the technical consequence of something like that  
**\<dEBRUYNE>** First, does the randomx team think RandomX can be viably implemented in October?  
**\<dEBRUYNE>** And if so, would people prefer RandomX over another tweak?  
**\<xmrmatterbridge> \<learninandlurkin>** Linzhi already has one ready to go apparently  
**\<ArticMine>** tevador?  
**\<sgp\_>** dEBRUYNE: if it can be done, I prefer it over another tweak  
**\<hyc>** Pretty sure rnadomX will be ready codewise  
**\<hyc>** the only holdup now is reviewers  
**\<tevador>** it's definitely possible for Oct  
**\<dr-mike>** When can we have RandomX on a testnet?  
**\<dEBRUYNE>** If the code is reviewed, is randomx not better than another tweak?  
**\<moneromooo>** With the large caveat that I did not look at randomx yet, I think I'd prefer a CNv4 tweak about 5 months (rather than 6) after the past march fork first, then randomx.  
**\<crCr62U0>** All those reviewers are mute now.  
**\<sgp\_>** moneromooo: so you're looking for RandomX addition around January 2020?  
**\<moneromooo>** Unless randomx is 100% ready.  
**\<moneromooo>** Yes, sounds plausible.  
**\<dr-mike>** RandomX must be ready before October.  
**\<xmrmatterbridge> \<learninandlurkin>** Can we maybe get Outreach to bomb the whole internet with links to RandomX docs, just to get more eyes on it?  
**\<tevador>** daemon integration will be a bit more work than CNv4  
**\<dEBRUYNE>** moneromooo: Then it seems imperative for the community to ensure RandomX is 100% ready in october  
**\<sgp\_>** dEBRUYNE: yes, everything would need to be a go  
**\<dEBRUYNE>** In my opinion, it is achievable, we've got about 6-7 months left  
**\<oneiric\_>** \< will dedicate some time to RandomX review over the next weeks  
**\<jtgrassie>** learninandlurkin: I'd be highly suprosed if the Outreach team would find qualified reviewers.  
**\<jtgrassie>** \*supprised  
**\<tevador>** also we need to prepare: pool software and a reference miner  
**\<xmrmatterbridge> \<learninandlurkin>** Also maybe retitle the General Fund on CCS to "Desprately needed RandomX audit fund"  
**\<oneiric\_>** ^  
**\<dr-mike>** We should hite the same auditors ethereum hires for progpow.  
**\<dr-mike>** \*hire  
**\<jwinterm>** that seems fairly aggresive for oct release  
**\<jwinterm>** presumably you would want everything finalized by end of aug or so  
**\<oneiric\_>** dr-mike: has that already happened, or will happen?  
**\<jwinterm>** that's four or five months from now  
**\<dEBRUYNE>** jwinterm: Right, but according to tevador RandomX, in its current state, is basically ready  
**\<dEBRUYNE>** So we can use 4-5 months for testing and reviewing  
**\<dr-mike>** It will  happen in the next 2-3 weeks  
**\<hyc>** afaik ETH has only recently decided to o ahead with audits for progpow  
**\<moneromooo>** Did it not add loops like a week ago ? That seems like a large change for it to be ready yet.  
**\<oneiric\_>** has the auditor already been selected? if so, who?  
**\<tevador>** btw is there a need to rewrite RandomX into C for review?  
**\<tevador>** currently C++  
**\<xmrmatterbridge> \<learninandlurkin>** or 4-5 months of looking for reviewers and failing to raise the funds for it :( it's a possibility  
**\<dr-mike>** No, but it was given a GO, core devs will hire the auditors in the next 2-3 weeks and will notify the community.  
**\<ferretinjapan>** what would be the estimated cost to hire someone/some firm to do an independent review?  
**\<xmrmatterbridge> \<learninandlurkin>** Are the auditors for ProgPow just Nvidia?  
**\<oneiric\_>** thanks, look forward to seeing who they select, and reading the audit when it's finished  
**\<hyc>** tevador: probably not needed. that was just a personal preference of mine  
**\<dEBRUYNE> \<moneromooo>** Did it not add loops like a week ago ? That seems like a large change for it to be ready yet. \<= tevador, any comment on this?  
**\<moneromooo>** I'm not asking for it to stop improving btw :)  
**\<tevador>** not loops, one instruction was modified to jump back in such way that loops are impossible  
**\<moneromooo>** OK, branches.  
**\<tevador>** it was not a major change from my point of view  
**\<moneromooo>** I thought it did not have branches before. But admittedly I mostly follow the backlog quickly.  
**\<tevador>** yes, it did not have branches before  
**\<sech1>** branches were added in respose to critics on HW forum  
**\<tevador>** now there are branches with a fixed 1/128 probability  
**\<moneromooo>** OK, so now it has, but in such a way that it is always "safe". Right ?  
**\<tevador>** it was tuned to have almost no effect on CPU performance  
**\<hyc>** yes, safe, no loops  
**\<sech1>** yes, no infinite loops are possible with this type of branches  
**\<rbrunner>** So this is on the side of "nice to have", not "damn, how we could forget that"  
**\<tevador>** it should be easy to prove that it cannot have an infinite cycle  
**\<sech1>** tevador these branches are even designed to not trigger after they've triggered, loops are simply impossible  
**\<dr-mike>** rbrunner asking tough questions :)  
**\<tevador>** the main purupose is to take advantage of the commit/retire stages in CPUs  
**\<moneromooo>** My understanding is that programs won't be known in advance like what sech1 did with CNR. Correct ?  
**\<ferretinjapan>** dr-mike, someones gotta :)  
**\<tevador>** without this, ASIC could have a simplified pipeline  
**\<tevador>** moneromooo: 8 random programs per hash  
**\<tevador>** unique  
**\<sech1>** moneromooo it can be formally proved that branches are safe in RandomX, we made sure it's easy to do  
**\<moneromooo>** Are these 8 random programs per hash knowable in advance, or not ?  
**\<sech1>** No, they're generated on the fly  
**\<oneiric\_>** having a formal verification tool as a deliverable from the audit would be awesome  
**\<tevador>** no, you have to execute Nth program to find out the code for the N+1st program  
**\<moneromooo>** Well, that does not necessarily preclude knowing in advance.  
**\<tevador>** and the first program is generated from the block header  
**\<moneromooo>** Right. That does. Thanks.  
**\<tevador>** full block header hash  
**\<needmoney90>** Wait, why do loops matter?  
**\<rbrunner>** Branches  
**\<needmoney90>** I thought it just took program state after X instruction executions  
**\<rbrunner>** Not loops :)  
**\<hyc>** loops make runtimes too variable  
**\<tevador>** it's not so easy to have loops and keep approximately the same runtime per hash  
**\<moneromooo>** You can't do that (fast) without a hardware insns counter + exception.  
**\<tevador>** we tried in RandomJS and it was not pretty  
**\<needmoney90>** This is better suited for -Pow, sorry  
**\<moneromooo>** "that" being "program state after X instructions[s]".  
**\<hyc>** yeah we're off in the weeds here  
**\<needmoney90>** Carry on, I'll speak up if I have something useful to speak of  
**\<dEBRUYNE>** To sum up this point, people prefer RandomX in october as long as it is ready and audited.  
**\<notmike>** no  
**\<dr-mike>** yes.  
**\<notmike>** hard pass  
**\<hyc>** yes  
**\<jtgrassie>** yes  
**\<el00ruobuob\_[m]>** yep  
**\<sech1>** yes  
**\<tevador>** yes, except stoffu  
**\<ferretinjapan>** ^  
**\<ArticMine>** yes  
**\<dEBRUYNE>** Let me switch to another point I'd like to get a bit of a vote on. Like I said, the path of least resistance seems to be either:  
**\<needmoney90>** It's not just preference, the consensus is pretty much unanimous except for the gpu mining bloc  
**\<moneromooo>** I think so, the "ready and audited" being a bit subjective I suppose.  
**\<dEBRUYNE>** 1. RandomX -> Switch to SHA3 in case RandomX fails  
**\<dEBRUYNE>** 2. RandomX -> precommit to SHA3 on a set date  
**\<jwinterm>** I'd prefer going straight to sha-3 and being done with it, but obviously I'm in minority here with notmike and stoffu  
**\<dEBRUYNE>** Can I get a bit of a vote on this ^  
**\<hyc>** 1  
**\<dEBRUYNE>** If you don't like either options, you can abstain and mention it  
**\<dr-mike>** 3. None of the above ?  
**\<ArticMine>** 1  
**\<jtgrassie>** 1  
**\<tevador>** 1  
**\<el00ruobuob\_[m]>** 1  
**\<sech1>** 111  
**\<ferretinjapan>** abstain  
**\<jwinterm>** what does "fails" mean?  
**\<needmoney90>** 1, but with the caveat that failure be rigidly defined  
**\<jwinterm>** I don't know that I saw resolution on that term  
**\<ferretinjapan>** jwinterm, thats the million dollar question.  
**\<sech1>** jwinterm we spent first 40 minutes to discuss it  
**\<ferretinjapan>** its way too vague.  
**\<dEBRUYNE>** jwinterm: This basically ->  \<sech1> steep increase in hashrate (and profitability drop) without price changing is a strong indicator of more efficient hardware (ASICs)  
**\<hyc>** (if ETH has gone PoS by then, we could consider ETHash instead of SHA3. I'm still opposed to pre-committing to SHA3 in any form)  
**\<jwinterm>** in light of being too vague I'll go 2, probably would go 2 anyway tbh  
**\<rbrunner>** 1, but with no dedicated successor yet  
**\<moneromooo>** RandomX, and then (1) if we have another contender ready, switch to that, or (2) if the apparently ASICs seem to be barely getting to 50%, then a tweak, or (3) SHA-3.  
**\<sgp\_>** 1  
**\<dr-mike>** that sounds better moneromooo  
**\<ferretinjapan>** yeah, I' like moo's option better. Option M for me.  
**\<ErCiccione[m]>** 1  
**\<moneromooo>** And yes, ethhash maybe instead.  
**\<sgp\_>** Again, I think the failure is up for some discussion, especially the nature of it. I'm for switching to SHA3 if RandomX catastrophically fails for sure  
**\<xmrmatterbridge> \<learninandlurkin>** I vote for hyc's last comment  
**\<dEBRUYNE>** My personal preference is option 1 fwiw  
**\<ferretinjapan>** I think the consensus is theres not enough of a plan to have a consensus :P  
**\<xmrmatterbridge> \<learninandlurkin>** actually I vote for this -> \<moneromooo> RandomX, and then (1) if we have another contender ready, switch to that, or (2) if the apparently ASICs seem to be barely getting to 50%, then a tweak, or (3) SHA-3.  
**\<vtnerd\_\_\_>** Fwiw -> Sha3 precommit (2)  
**\<ArticMine>** There is a very strong consensus to proceed with RandomX at this point.  
**\<sgp\_>** Adding to this, there is about a 3 month turnaround time between when a failure is determined and Monero can move to SHA3, if that's the desired action. Monero can generally either use a stopgap for those months or wait it out  
**\<sgp\_>** I think the nature of the failure will determine which of the two actions are taken  
**\<sgp\_>** ASICs control 90%? Stopgap maybe warranted  
**\<vtnerd\_\_\_>** Randomx by October seems aggressive if daemon integration is complicated. And an x86 only optimized version is unfortunate  
**\<sgp\_>** ASICs at 20%, proven advantage and growing? Maybe wait it out  
**\<dEBRUYNE>** tevador: Would you be able to integrate randomx with the daemon as well?  
**\<xmrmatterbridge> \<learninandlurkin>** The nature of theoretical failures is the big limitation to planning beyond auditing RandomX REALLY REALLY well  
**\<hyc>** vtnerd\_\_\_: shouldn't take long to get an ARMv8 version going  
**\<moneromooo>** And then if we switch to SHA-3 and we end up with a laughing > 50% ASIC manufcaturer, what do we do ? Go home ? Resurrect Cryptonite and ask MRL to find how to make it private ?  
**\<vtnerd\_\_\_>** Eh, not April yet so might be doable  
**\<ferretinjapan>** sgp\_, yeah, "failure" could mean literally anything.  
**\<ArticMine>** The question I possible see is 1a RandomX if fail SHA-3 vs 1b RandomX if fail ETHhash / ProgPOW if fail SHA-3  
**\<sgp\_>** moneromooo: the switch to SHA3 should ideally be the final option, at least for a long while. We would probably out of options after that  
**\<jwinterm>** moneromooo: considering sia and decred each have at least three asic manufacturers and they are lower on the totem pole that seems unlikely, imo  
**\<vtnerd\_\_\_>** There seems to be plenty of fear driving the decisions which could result in a worse outcome  
**\<dEBRUYNE>** jwinterm: Plus both of those coins have more complex algorithms  
**\<jwinterm>** not by much, I think they both use variants of blake, which is another sha3 finalist I think  
**\<sgp\_>** The intent is that before the SHA3 switch, Monero can have resources that help meet the manufacturers halfway and lower the barriers to entry  
**\<moneromooo>** jwinterm: ok, 3 still seems not good though, but I suppose beggars can't be choosers...  
**\<tevador>** if one manufacturer is 2-3x more efficient that's exactly like a RandomX 'failure' situation, at least temporarily  
**\<jwinterm>** at least four for decred - ffminer, bitmain, innosilicon, and obelisk  
**\<sgp\_>** tevador: yes, I agree that the mere existence of ASICs isn't necessarily failure  
**\<dEBRUYNE>** tevador: I doubt any manufacturer will be 2-3x more effficient though at this stage  
**\<dEBRUYNE>** Especially with a friendly algorithm like SHA3  
**\<dEBRUYNE>** jwinterm: Thanks for correcting me  
**\<rbrunner>** Yeah, at some point PoW itself is a failure, even if that insight does not help much  
**\<ferretinjapan>** sgp\_, SHA3 might not be the best though. Its just the "safest/easiest" right now.  
**\<moneromooo>** ferretinjapan: for "ease of entry into ASIC manufacturer club" ? If you have better, feel free to list :)  
**\<sgp\_>** ferretinjapan: that's why I'm not for a set sunset date. We could say "switch to the best ASIC-friendly PoW algorithm" instead. But we would need to keep making resources for whatever that is to not be caught off-guard  
**\<DaveyJones>** +1 ^  
**\<ferretinjapan>** moneromooo, well, my money is on RandomX :P  
**\<tevador>** WhatsMiner is about 2x more efficient than Bitmain at SHA256 at 16 nm, so it's not impossible to have one manufacturer dominate even a simple algorithm  
**\<dEBRUYNE>** Arguably sha256 is relatively mroe complex though :p  
**\<dEBRUYNE>** more\*  
**\<nioc>** sgp +1  
**\<ferretinjapan>** But that said, who knows, QC could put a monkey wrench in SHA3 for all I know, and 5 -10 years later, and we're back here again.  
**\<moneromooo>** ph4r05: so {} inits to NULL for sure, right ?  
**\<dEBRUYNE>** To sum up this point, people mostly prefer this course of action -> "RandomX -> Switch to SHA3 in case RandomX fails", where I suppose SHA3 can be substituted by "an asic friendly algorithm"  
**\<sgp\_>** ferretinjapan: that's possible, which is why it's important to focus on the logic of the decisions rather than the specific implementations as much for these high-level discussions  
**\<sgp\_>** dEBRUYNE: yes, I think that's mostly fair  
**\<hyc>** dEBRUYNE: +1 with that modification  
**\<rbrunner>** Agree more or less  
**\<sech1>** yes, it doesn't have to be fixed at SHA3  
**\<sgp\_>** I added a summary of our thoughts a little over a week ago here: https://github.com/monero-project/meta/issues/316#issuecomment-472589586  
**\<ph4r05>** moneromooo: to be sure, I set it to null now  
**\<ferretinjapan>** sgp\_, not that I think QCs will be viable for a long time (if ever) but if we wanted to hedge against the possibility, RandomX would probably be much better than SHA3.  
**\<sgp\_>** You can substitute "SHA3" for "an ASIC-friendly algorithm" in it  
**\<dEBRUYNE>** On an administrative note, would people like for me to open a new issue on Github where we can further discuss stuff?  
**\<ferretinjapan>** Though I could be talking out my backside on that point...  
**\<dEBRUYNE>** One thing I'd like to see a more in depth discussion on is how to classify failure of RandomX  
**\<moneromooo>** Cool. It might well be it's for sure, I'm still confused by this construct :) Thanks.  
**\<hyc>** sure. new issue, summary from today  
**\<sgp\_>** dEBRUYNE: I recommend focusing the discussion on more specific points. Possibly several issues. Eg: what if RandomX fails day 1 of implementation?  
**\<sgp\_>** that way we can focus the discussions and cut through the general nonsense  
**\<moneromooo>** Then gmaxwell gets to laugh mercilessly at us for months :P  
**\<dEBRUYNE>** The previous ticket had a pretty good signal to noise ratio tbh  
**\<dEBRUYNE>** Until shortly before the end :p  
**\<sgp\_>** dEBRUYNE: yes, the last week was useless :(  
**\<dEBRUYNE>** That being said, I'll try to list some more specific points  
**\<ferretinjapan>** yeah, there'll probably be a whole spectrum of different "failures" you'd want to define.  
**\<sgp\_>** ferretinjapan: exactly  
**\<sgp\_>** fwiw, at the bottom of the chart I added "emergency tweak to break ASICs." I think we can have a good discussion about that  
**\<sgp\_>** some more background:  
**\<dEBRUYNE>** I'd like to conclude the meeting soon fwiw :-P  
**\<sgp\_>** this situation would be triggered if 1) Monero implemented RandomX, and 2) Monero doesn't have a good ability for a quick ASIC-friendly turnaround  
**\<dEBRUYNE>** I am goign to call an end to this meetings. Thanks all for coming and participating!  
**\<dEBRUYNE>** I'll create a new Github issue tomorrow where we can further discuss some stuff in detail  
**\<sgp\_>** Thanks dEBRUYNE for setting it up  
**\<el00ruobuob\_[m]>** Thank you all, i'll be posting those logs in a minute    
