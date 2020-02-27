---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-01-28
summary: Ongoing work, MRL going to SBC, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>**	allrighty, well, it's 17 UTC  
**\<serhack>**	Hi!  
**\<suraeNoether>**	howdy everyone  
**\<ardyfy>**	HI  
**\<oneiric\_>**	ohiyo  
**\<Xeagu>**	Hey  
**\<learninandlurkin>**	Salutations  
**\<ArticMine>**	hi  
**\<suraeNoether>**	today, our agenda is here: https://github.com/monero-project/meta/issues/302  
**\<Mochi101>**	woohoo!  
**\<suraeNoether>**	allrighty, so let's begin with payment ID deprecation  
**\<Mochi101>**	Very sad.  
**\<suraeNoether>**	my understanding is that some folks are opposed to the proposed timeline for switching over to subaddresses  
**\<Mochi101>**	Don't you guys think that such drastic changes hurts Monero adoption?  
**\<Xeagu>**	It is new information to me that this was not already default  
**\<xiphon>**	Mochi101: payment id is actually what "hurts Monero adoption"  
**\<xiphon>**	^ standalone one  
**\<suraeNoether>**	mochi101 what drastic change are you referring to? deprecating payment IDs? or enforcing subaddresses?  
**\<Mochi101>**	Both actually.  
**\<learninandlurkin>**	Drastic changes is what Monero is all about. 6 month forks and whatnot.  
**\<ArticMine>**	I am in favor of this, the only possible issue I see is timing on which I am neutral  
**\<suraeNoether>**	in my opinion, switching to a system with fewer moving parts with fewer ways for users or wallet developers to accidentally screw up, this is a net win for monero users, the ecosystem in general.  
**\<gingeropolous>**	^^  
**\<Mochi101>**	Yes, Monero feels like a really high maintenance, needy girlfriend sometimes.  
**\<suraeNoether>**	i don't know about you, but "idiot proof" cryptography is sort of a myth, but it'd be really really great if we could take incremental steps toward systems with fewer complications glued on top just to make it work  
**\<Xeagu>**	In the unknown future, will Monero no longer require network upgrades every 6 months?  
**\<suraeNoether>**	xeagu i believe we are intending on keeping 6 month network upgrade schedules for the foreseeable future, with the intention of \*eventually\* slowing them down  
**\<suraeNoether>**	i don't know what timescale "eventually" means here, practically, though. fluffypony has mentioned it  before but I don't recall the timescale  
**\<Xeagu>**	Do you think a timeline would help those with concerns about that activity hurting adoption?  
**\<learninandlurkin>**	The unknown future is unknown  
**\<silur>**	I aggree that in the anctient security vs UX war we need to stick with security  
**\<silur>**	and moving/changing parts is a golden rule in crypto  
**\<silur>**	even if it's more surface for users to screw up  
**\<suraeNoether>**	ArticMine: thank you for supporting the change. i'm with you on both timeline and supporting the upgrade. i'm asking if anyone here has specific timeline objections they want to bring up; last I recall, sgp\_ had a great chart, but perhaps the discussions have changed a bit since then?  
**\<dEBRUYNE>**	UX issues stemming from payment IDs are predominantly caused by the long, unencrypted payment IDs. Thus, imo, it's imperative that we remove those  
**\<suraeNoether>**	^^  
**\<Mochi101>**	As far as I know there's not even any real documentation on subaddress generation, identifying the last index which has been used, etc.  
**\<Mochi101>**	That's pretty bad when you're going to force it.  
**\<sgp\_>**	Mochi101: https://github.com/monero-project/meta/issues/299  
**\<sgp\_>**	lots of details there, including a basic upgrade guide for services  
**\<suraeNoether>**	thanks for the link to the previous PayID discussion, sgp\_ ! i am bookmarking that rn  
**\<sgp\_>**	services have nearly half a year to upgrade, which is reasonable given the requirements. We have spoken to exchanges and payment processor services who think the timeline is aggressive but realistic  
**\<sgp\_>**	Mochi101: the logs for the meeting are also available at the same link  
**\<suraeNoether>**	sgp\_: cool! personally, I think this is a win for monero users in terms of privacy, a win for developers in terms of elegance, and a win for the ecosystem in terms of efficiency  
**\<sgp\_>**	I recommend you read them  
**\<Xeagu>**	I admit I don't understand how subaddresses work  
**\<suraeNoether>**	I don't want to speak for sarang; perhaps when he gets back he can jump in and provide an opinion.  
**\<Xeagu>**	There is a need in the market for distributed education  
**\<suraeNoether>**	Xeagu: the main idea is you take your wallet address (A,B) and you generate a family of addresses deterministically all sharing the same view key, and allowing you to mass-scan all the subaddresses simultaneously for incoming transactions  
**\<suraeNoether>**	it's a little more complciated than that because they don't \*actually\* share a view key  
**\<Mochi101>**	Thanks. But you're only seeing this from your "in the loop" perspective. I looked for information about this and couldn't find any in the places that I expected them to be. Really people using Monero should not have to search through GitHub to find this stuff. If it's a major issue like this it should be front and center on something like getmonero.org  
**\<suraeNoether>**	but they can all be \*scanned\* with a single view key  
**\<Xeagu>**	Yes I am confused on the order that subaddresses are selected during generation  
**\<Xeagu>**	If they are deterministic, no?  
**\<gingeropolous>**	is there anything research-y about payment IDs / encrypted / subaddresses at this point? I mean, its pretty solid that anything except subaddresses is sub-optimal, right?  
**\<suraeNoether>**	you use deterministic nonces while hashing, so they appear random but always come up to be the same  
**\<sgp\_>**	Xeagu: read this: https://medium.com/@anhdres/how-moneros-accounts-and-subaddresses-work-in-monerujo-4fa7df0a58e4  
**\<selsta>**	Mochi101: You should subscribe to the newsletter.  
**\<dEBRUYNE>**	Mochi101: It was announced on the mailing list  
**\<sgp\_>**	Yes, please join that. It's essential for staying up-to-date  
**\<Xeagu>**	Alright so basically I need to read through Mastering Monero again  
**\<suraeNoether>**	gingeropolous: yeah. this is a question (subaddresses) about key infrastructures. not really in doubt that subaddresses are objectively superior in terms of engineering and in terms of simplicity. keeping around old systems for no good reason is not going to help adoption.  
**\<suraeNoether>**	also as far as I understand it, the MRL contributors sgp and knaccc are both working on documentation  
**\<gingeropolous>**	right. it just seems at this point we gotta bite the bullet and go through the suck.  
**\<suraeNoether>**	we can continue this conversation after the meeting  
**\<Xeagu>**	Subaddresses mean you only really need to memorize a single wallet seed, as I understand it.  
**\<sgp\_>**	yes Xeagu, and best to table this discussion imo  
**\<Xeagu>**	Let's move on  
**\<suraeNoether>**	let's move along to the oh-so-contentious  block size scaling discussion  
**\<suraeNoether>**	articmine is currently validating some cost analyses by sarang  
**\<OWLisFLOWN>**	Sup n00bs  
**\<suraeNoether>**	i whipped up two ideas, one wacky and one not for block size debate, and i'll be contributing these two ideas to the mix to see about how it all fits together  
**\<suraeNoether>**	in terms of cost analyses  
**\<Xeagu>**	What are the two ideas?  
**\<ArticMine>**	I presented my overall proposal  
**\<suraeNoether>**	my first idea is a simple low-pass filter, and my complicated idea is inspired by some discontinuous reset models from neuroscience, which sounds fancy, but is in no way "modeling brains on the blockchain" or anything like that, please do not run away with my words  
**\<suraeNoether>**	ArticMine: yeah, i thought you and sarang were working together to make sure cost analyses were apples-to-apples comparisons?  
**\<ArticMine>**	https://paste.debian.net/hidden/556a3a8a/  
**\<suraeNoether>**	aha!  
**\<suraeNoether>**	thanks articmine  
**\<suraeNoether>**	that's articmine's proposal  
**\<Xeagu>**	Interesting okay. Can you explain the low-pass filter? I'd like to discuss the brains on the blockchain idea later.  
**\<ArticMine>**	There was one addition: We can use LongTermBlockWeight as opposed to BlockWeight in the fee calculation  
**\<suraeNoether>**	xeagu essentially all our proposals revolve around discrete-time dynamical systems, including my discontinuous reset idea.  so "how to update next\_max\_block\_size as a function of previous block sizes... so that the blockchain doesn't get caught in a feedback loop and blow up for a determined and moderately wealthy attacker?"  
**\<Xeagu>**	This is trying to determine future dynamic block size scaling?  
**\<suraeNoether>**	yep.  
**\<silur>**	wait  
**\<silur>**	I have a paper on this issue  
**\<suraeNoether>**	great!  
**\<suraeNoether>**	please link!  
**\<silur>**	it's originally for PoS  
**\<silur>**	but does address the problem  
**\<suraeNoether>**	i believe articmine's approach is good in the sense that it forces an attacker attempting to force bloat to drag out an attack over a long timescale in order to have a decent influence, which costs more and more money.  
**\<silur>**	of keeping this wealth blowup in check  
**\<silur>**	https://arxiv.org/abs/1809.07468v2  
**\<suraeNoether>**	interesting, thank you. i believe someone had an idea where miners vote on the max block size for the next N blocks using proof of work, but i haven't looked further into it yet  
**\<suraeNoether>**	wb sarang  
**\<Xeagu>**	I am not familiar with ArticMines proposal  
**\<suraeNoether>**	xeagu he linked it a moment ago, and sarang has been running simulations and comparing costs  
**\<silur>**	this one has a formula for how to calculate the next reward based on the current parameters  
**\<silur>**	maybe we can generalize it for blocksize?  
**\<Xeagu>**	I need it in ELI5 terms  
**\<ArticMine>**	interesting, thank you. i believe someone had an idea where miners vote on the max block size for the next N blocks using proof of work, but i haven't looked further into it yet] <--- This is one of many failed Bitcoin proposals  
**\<moneromooo>**	As long as we finalize ArticMine's proposal soon, before the fancy new stuff gets worked on :)  
**\<Xeagu>**	How does the dynamic block size change from its current state?  
**\<suraeNoether>**	ArticMine: also good to know  
**\<suraeNoether>**	xeagu right now  
**\<sarang>**	The newer proposals do away with the idea of a single median  
**\<suraeNoether>**	we allow next max block size to be 2\*Median(last N blocks)  
**\<suraeNoether>**	i forget N  
**\<moneromooo>**	Xeagu: https://paste.debian.net/hidden/556a3a8a/  
**\<moneromooo>**	100000  
**\<sarang>**	Details that have been previously reviewed can probably be discussed more deeply after meeting, IMO  
**\<Xeagu>**	moneromooo: that's too high level for me  
**\<moneromooo>**	And 1.4 IIRC, not 2.  
**\<Xeagu>**	I'll review other notes sure  
**\<suraeNoether>**	moneromooo: oh! that's good :D  
**\<suraeNoether>**	xeagu i'll get you after the meeting  
**\<sarang>**	atm, I am waiting to see what cost details are added by ArticMine to ensure we understand the relative cost of bloat under the different options  
**\<Xeagu>**	Okay  
**\<suraeNoether>**	basically: block size scaling is still under discussion, we are working on formalizing articmine's proposal and comparing it to our present proposal as well as at least one other proposal.  
**\<suraeNoether>**	and i think sarang and i can collaborate on a technical note describing all this  
**\<suraeNoether>**	moving along to MRL 11's status update: MRL 11 is essentially about traceability and linkability in Monero, and comparing techniques across multiple blockchains like Zcash + Monero together  
**\<suraeNoether>**	if you guys have seen matthew green and binaryfate and fluffypony sparring on twitter about ring sizes compared to the shielded pool in zcash  
**\<suraeNoether>**	this is that  
**\<Xeagu>**	Zcash doesn't scale  
**\<silur>**	ah :D  
**\<suraeNoether>**	the current status is that sarang passed it back to me more than a week ago, and i've been tinkering with simulations  
**\<ArticMine>**	My proposal uses the current 2x maximum for the short term median and 1.4x for the long term median  
**\<Xeagu>**	You can't let every transaction be shielded without huge data storage  
**\<suraeNoether>**	i want to simulate something like the following, and it's quite challenging to formalize this (i'm bringing my hangup to the crowd so you guys know what i'm stuck on)... I want to create a formal statistical hypothesis, and it's eluding me...  
**\<suraeNoether>**	essentially, i want to capture the EABE scenario that started this whole paper last year  
**\<suraeNoether>**	and churn  
**\<Xeagu>**	EABE scenario?  
**\<sarang>**	Poisoned outputs  
**\<Xeagu>**	Oh got it  
**\<suraeNoether>**	I want to generate a random blockchain (somehow) and embed within it the spending behavior masking "churn" between receiving a possibly "marked note" and then later trying to cash it out at a KYC/AML exchange  
**\<suraeNoether>**	then i want to apply our matching technique to see the probability that this behavior is caught, if someone is looking for it  
**\<Xeagu>**	But as I understand if you just show view key, the exchange will accept it  
**\<suraeNoether>**	xeagu that's the final vertex in the transaction graph  
**\<suraeNoether>**	there may be many intermediate vertices as you churn  
**\<suraeNoether>**	most importantly, we need somehow to gauge the entire confusion table; false positives, false negatives, true positives, and true negatives  
**\<Xeagu>**	Like how far back do exchanges care about poisoned outputs?  
**\<sarang>**	unknown  
**\<suraeNoether>**	and i can do this \*under certain hypotheses\* but i can't do it in general. all i really i want is a practical comparison of our technique to a real world scenario like a miner trying to hide that he's depositing a mined coin on an exchange  
**\<sarang>**	You should conservatively assume "all the way back"  
**\<sarang>**	Anyway, feels like we're getting off topic somewhat  
**\<Xeagu>**	Was regarding MRL 11  
**\<Xeagu>**	Traceability comparison  
**\<suraeNoether>**	so, to summarize MRL 11: we have an algorithm, we have timing estimates, we are working on simulations and comparisons of our technique across multiple blockchains at once, and we are basically gearing up to figure out how many churns is enough... or... alternatively... we are gearing up to figure out how to show the depth of the wastefulness of having a massive anonymity set like the whole zcash shielded  
**\<suraeNoether>**	pool  
**\<suraeNoether>**	sarang: think that was an okay summary? i don't want to speak for you  
**\<sarang>**	Yes, the computational bounds are the most interesting part IMO  
**\<suraeNoether>**	yeah, same actually  
**\<sarang>**	they set a framework for analyzing certain behavior  
**\<suraeNoether>**	the interesting thing to me is we were able to put lower bounds on how fast an attacker can generate a "guess" at a possible spend history  
**\<suraeNoether>**	bad news: it's pretty fast. good news: there are lots and lots of possible spend histories, like cryptographically many  
**\<suraeNoether>**	how much is the practical security compared to a zk-snark scenario? we'll find out  
**\<sarang>**	So you earlier discussed block size scaling (waiting on cost analysis)... did I also miss anything on output selection?  
**\<suraeNoether>**	spoiler: if both blockchains exist together at the same time, one with an opt-out transparent pool and both with users interacting at KYC/AML exchanges...  then security on both are wildly compromised  
**\<suraeNoether>**	sarang eek I forgot to add output selection to the agenda, that's my bad  
**\<sarang>**	OK, is now a good time for this?  
**\<suraeNoether>**	perfect time actually  
**\<sarang>**	Great  
**\<Xeagu>**	It's not on the agenda but I wanted to make sure we discussed the rumor of ASIC/FPGAS on the network.  
**\<sarang>**	moneromooo had asked me earlier about reviewing our windowing approach to gamma selection  
**\<sarang>**	He had an idea about further weighting selection probability of a block based on output count  
**\<sarang>**	with a possible goal of reducing the coinbase-to-non-coinbase ratio in rings to that of the whole chain  
**\<suraeNoether>**	xeagu we'll get to that in a sec, thanks for reminding me :\\  
**\<sarang>**	e.g. 6-10% of outputs are coinbase, so 6-10% of a ring should be as well  
**\<sarang>**	moneromooo can explain it better, but the idea would be to take the gamma probability of block selection and further weight by the block's output count, and then uniformly select within that block  
**\<sarang>**	I'm working up some code based on chain stats  
**\<sarang>**	but I'll put it out there for comment  
**\<suraeNoether>**	sarang #actually  
**\<suraeNoether>**	the distribution in the ring should be "whatever the probability that the next transaction is a coinbase output."  
**\<Xeagu>**	I think miners churning newly mined coins would help against poisoned outputs  
**\<suraeNoether>**	so if miners typically hodl for long long long times, then mimicing the distribution of the outputs that care coinbases will drastically over-sample the coinbase outputs.  
**\<suraeNoether>**	xeagu i agree  
**\<gingeropolous>**	\<sarang> e.g. 6-10% of outputs are coinbase, so 6-10% of a ring should be as well >>>>> but 99% of coinbase outputs are owned by about 15 people  
**\<suraeNoether>**	i think a lot of miners churn in order to mask that they are mining  
**\<suraeNoether>**	gingeropolous: exactly!  
**\<sarang>**	I know, but we have no good metric for "how many coinbase in a ring is ok"  
**\<suraeNoether>**	unfortunately we don't really have a way of estimating how often any given subsets of our blockchain are spent  
**\<sarang>**	Currently it's 1-3 outputs per ring on average that are coinbase  
**\<moneromooo>**	The idea I had is meant to (I think) make the selection process match the gamma from an ideal blockchain (ideal being, every block has the same number of outputs).  
**\<moneromooo>**	And indeed, in that particular case, the two distributions match.  
**\<moneromooo>**	The idea has two steps:  
**\<sarang>**	Nice, did you run sims?  
**\<moneromooo>**	- for each block, calculate its probability of being picked by the gamma distribution pick  
**\<moneromooo>**	- for each block, multiply that number by the number of outputs in that block  
**\<moneromooo>**	Then you just pick a random block from those weights using a discrete distribution.  
**\<moneromooo>**	I did not run sims, because I do not know how to calculate the first step.  
**\<suraeNoether>**	MOO  
**\<suraeNoether>**	you brilliant bastard  
**\<suraeNoether>**	you want to know why that works?  
**\<sarang>**	moneromooo had pointed out earlier that this also solves the issue of a fixed window size  
**\<moneromooo>**	Well, I see how it'd work by, er... intuition really. Why does it work ?  
**\<suraeNoether>**	you are estimating an empirical distribution: when you multiply that number by the number of outputs in the block, you are computing the expected number of outputs to be selected from that block. then you built a histogram and selected from that!  
**\<sarang>**	Yeah  
**\<suraeNoether>**	it's cool  
**\<suraeNoether>**	expectation as a linear operator  
**\<suraeNoether>**	fun stuff  
**\<suraeNoether>**	\*ahem\*  
**\<sarang>**	the scaling of coinbase outputs in this case is also independent of the gamma distribution, which I find neat  
**\<suraeNoether>**	very frequentist. hem hem  
**\<suraeNoether>**	yeah, you could use this with any underlying hypothetical distribution  
**\<sarang>**	I'm confirming that it does so, and writing up some sims to convince myself of it  
**\<suraeNoether>**	\\me eats oatmeal  
**\<sarang>**	kudos moneromooo, it's a clever approach that fixes the issues with windowing  
**\<gingeropolous>**	so there's still a probability that multiple coinbases will be selected, but because tiny blocks have low probability, we should expect less outputs selected from tiny blocks?  
**\<suraeNoether>**	it actually fixes several other things i'd been thinking about  
**\<suraeNoether>**	it's a great framework.  
**\<moneromooo>**	Thanks. Still needs a way to compute the first number. I fear it might involve integrals.  
**\<Xeagu>**	I don't understand :/  
**\<sarang>**	moneromooo: probably not =p  
**\<suraeNoether>**	gingeropolous: yeah, exactly. each output has a gamma age, and then you select from all outputs. rather than selecting an output age from a gamma and then selecting from all the outs with that age. subtle flipping of the order of things  
**\<sarang>**	I believe it should reduce the ring ratio to that of the whole chain  
**\<Xeagu>**	I don't know what gamma means  
**\<sgp\_>**	In the most extreme case, we can say 0 coinbase are necessary and force independent miners to churn their received funds if they care. Pools don't care and are the main cause of this debate. But there doesn't seem to be enough support for this, and it comes with other tradeoffs. I just think it's important to keep mentioning  
**\<moneromooo>**	A particular random distribution.  
**\<sarang>**	the way we select ring members using math Xeagu  
**\<gingeropolous>**	Xeagu, you can think of gamma as a droopy triangle  
**\<suraeNoether>**	xeagu there is a long statistical background on the gamma distribution. we'll catch you up after the meeting  
**\<gingeropolous>**	right triangle, 90 degrees on the right side. the hypotenuse is the droopy side  
**\<sarang>**	sgp\_: we can enforce coinbase-only rings as a first churn, but that doesn't solve the heuristic of "coinbase are bad"  
**\<sarang>**	it just moves it along the transaction graph a teeny bit  
**\<sarang>**	so I feel ya  
**\<suraeNoether>**	you flip a coin until you get a heads up and right down the number of flips. then you do that 10 times. then you add those wait-times-until-heads-up together  
**\<sgp\_>**	sarang: this would just accept "coinbases are bad" and not touch them whenever possible  
**\<Xeagu>**	So if gamma is a process (verb) how is it acting as an adjective modifying a noun (age)?  
**\<gingeropolous>**	i dunno what parameters we use, but https://en.wikipedia.org/wiki/Gamma\_distribution#/media/File:Gamma\_distribution\_pdf.svg  
**\<gingeropolous>**	i'd guess we look like the red line  
**\<suraeNoether>**	and then you ask "what is the probability that i got wait times of 3, 2, 0, 1, 1, 0, 1, 2, 1, 0?" that's essentially a gamma distribution  
**\<gingeropolous>**	Xeagu,  
**\<sarang>**	The heuristic would move from "coinbase in a ring are decoys" to "outputs generated in a coinbase-only ring are decoys"  
**\<suraeNoether>**	sarang i'm not sure i follow that  
**\<sarang>**	unless you convince miners to churn more out of the goodness of their pooled hearts  
**\<suraeNoether>**	oh i think i follow you  
**\<sarang>**	Right now you might throw out all coinbase ring members as decoys  
**\<sarang>**	Now you look back one step, and throw out an output generated from an obvious coinbase churn  
**\<sarang>**	You gain very little from this  
**\<suraeNoether>**	yeah, i think i follow yoiu  
**\<sarang>**	So I like the idea of shooting for a ring member ratio matching the chain  
**\<sarang>**	and this weighted approach should do that for us  
**\<sarang>**	to be confirmed by sanity-check sims!  
**\<suraeNoether>**	okay, so the output selection method proposed by moneromooo is actually a really clever way of computing expectations, and as a consequence, gives us a better output selection method. we should glance through the code, but i'm happy with that  
**\<suraeNoether>**	FPGA/ASIC stuff  
**\<sarang>**	Neat  
**\<suraeNoether>**	let's move along  
**\<suraeNoether>**	i hear some nonce distributions are non-uniform  
**\<sarang>**	and they recently changed as of the new year-ish  
**\<suraeNoether>**	fun  
**\<suraeNoether>**	so, i'm not really prepared to talk about monero POW and asic-resistance right now, tbqh  
**\<suraeNoether>**	i happened upon some reading this weekend on sponge constructions, so i'm currently on the path toward learning more about hash functions and pseudorandom functions  
**\<suraeNoether>**	but i don't have any thoughts i want to make public right now  
**\<suraeNoether>**	sarang?  
**\<suraeNoether>**	(i'm not keeping anything from anyone either, I harbor no secret opinions on this either)  
**\<sarang>**	I have been working on sims relating to output selection and block size, and continue side work on bulletproofs MPC and related things  
**\<sarang>**	I'll be attending the Stanford academic crypto conference this week  
**\<suraeNoether>**	Yeah, sarang and endogenic and i and isthmus will all be there  
**\<silur>**	\*not envy\*  
**\<suraeNoether>**	CONVENIENTLY i found my LAST FOUR MRL shirts, so you know  
**\<suraeNoether>**	i'll be forcing everyone to wear them for a photo  
**\<sarang>**	Does anyone else have work to share before we review action items?  
**\<Xeagu>**	I have to go  
**\<suraeNoether>**	i have been doing some reading on alternatives to ring signatures  
**\<Xeagu>**	Great meeting everyone  
**\<suraeNoether>**	i plan on writing up a technical note summarizing different options in different cryptographic hardness settings, timing and space comparisons  
**\<learninandlurkin>**	Alternatives without huge resource drain?  
**\<suraeNoether>**	learninandlurkin: so, some of that is tricky  
**\<sarang>**	that's always the kicker  
**\<suraeNoether>**	for example, i came across some short-integer-solution methods with lattices that are FAST AS HECK but HUGE  
**\<silur>**	oh yes  
**\<suraeNoether>**	the tradeoff isn't there yet, but it's worth summarizing it all  
**\<silur>**	my favorites  
**\<silur>**	they are also good for accumulators  
**\<silur>**	I have some demos on that  
**\<silur>**	been working with SIS for long  
**\<suraeNoether>**	silur ooh, i'd love to see a link of some sort  
**\<silur>**	I've got really into noncommutative crypto recently  
**\<suraeNoether>**	so i'll be summarizing i think four papers in the coming days, to communicate some of the options we have to the community  
**\<silur>**	it feels like a graveyard because except for the primitives everything is broken  
**\<sarang>**	Action items for this week?  
**\<silur>**	but I asessed all attacks and stuff that are still holding in the recent months  
**\<silur>**	main focus on zk stuff now  
**\<sarang>**	I am looking forward to ArticMine's sim code updates to reflect rational miner costs, which will allow us to assess our options for next upgrade  
**\<suraeNoether>**	my action items are: matching simulations and hypothesis testing, and my alternatives-to-ring-signatures-aren't-much-better technical note  
**\<learninandlurkin>**	I'll look forward to that suraeNoether. With ringsigs being our main weakness and also the main missing component of Grin (as compared to XMR) I think this are of research will have big implications.  
**\<silur>**	ringsigs are our main weakness?  
**\<silur>**	what happenned with RTRS?  
**\<sarang>**	It remains an option, but one that requires a lot of overhauling for still being ring sigs :.  
**\<sarang>**	:/  
**\<suraeNoether>**	silur: sarang has gotten them to be suitably fast with multiexponentiation so that we could, say, use ring sizes up to, say, 20-30.  however, there are some other sublinear schemes that are available, each with their own trade-offs, which is why i'm writing my paper  
**\<silur>**	wow  
**\<suraeNoether>**	i was hoping that once we broke a certain speed barrier, the path forward would be a no-brainer  
**\<silur>**	okay, I'll be waiting for it  
**\<silur>**	the paper I mean  
**\<suraeNoether>**	but we have certain issues we're dealing with and it's not totally clear whether overhauling the system for such a small ring size boost would be worth it if there could be another option with a relatively bigger boost eventually  
**\<sarang>**	well said  
**\<suraeNoether>**	replace that last word "eventually" with "presently"  
**\<suraeNoether>**	cool, /meeting  
