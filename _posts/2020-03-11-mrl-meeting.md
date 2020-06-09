---
layout: post
title: Logs for the MRL Meeting Held on 2020-03-11
tags: [dev diaries, crypto, research]
author: asymptotically / Sarang
---

# Logs

**\<sarang\>** OK, let's begin the meeting!  
**\<sarang\>** Agenda is here: https://github.com/monero-project/meta/issues/445  
**\<sarang\>** Logs will be posted there after the meeting  
**\<suraeNoether\>** good morning  
**\<sarang\>** First on the list, GREETINGS  
**\<sarang\>** hi  
**\<sarang\>** Note that because of a recent time change for the United States and elsewhere, these meetings will take place at 17:00 UTC instead of 18:00 UTC  
**\<ArticMine\>** hi  
**\<Isthmus\>** heya sarang and artic  
**\<sarang\>** I suppose we can move on to ROUNDTABLE  
**\<sarang\>** Who wishes to share research topics of interest?  
**\<vtnerd\>** hi  
**\<UkoeHB\_\>** Hi  
**\<suraeNoether\>** well  
**\<suraeNoether\>** i want to give a brief two-part update  
**\<sarang\>** Go ahead suraeNoether!  
**\<suraeNoether\>** firstly, personally: i'm going to have to take a break from monero for a few weeks while i get this medical stuff figured out. importantly: i'm not stopping work. I just don't know how much time i can actually contribute practically.  
**\<sarang\>** Oof, sorry to hear this. I hope everything goes well for you suraeNoether  
**\<ArticMine\>** sorry to hear this. I hope all goes well  
**\<suraeNoether\>** secondly: my research into matching is a hydra where fixing one bug is revealing handfuls of more bugs, and i'm getting super frustrated with it. this is particularly important work for a few reasons, but for right now i don't anticipate movement any time soon. one of the reasons that this has become so frustrating to me is that certain threats to monero that are going to become more likely over the  
**\<suraeNoether\>** next several years to be presenting themselves that make the answers that lie within this work \*lower priority\* than other things. i mean this very specifically in the following sense  
**\<suraeNoether\>** everyone should know that our anonymity reduces to something like the one-more decisional diffie hellman problem, and our unforgeability reduces to something like one-more discrete logarithm  
**\<suraeNoether\>** both of these are known to not be hard for quantum adversaries, and while quantum computers are not yet practical...  
**\<suraeNoether\>** it doesn't matter what ring size we use if china goes "manhattan project" on quantum computers and turns their resulting computing power on de-anonymizing privacy coins in secret.  
**\<suraeNoether\>** my work on matching would give us answers to questions like "how large should ring sizes be \*assuming the underlying problem that our anonymity rests upon is hard to solve\*" but we know that this problem is only going to be hard over the short term  
**\<sarang\>** FWIW such a "quantum adversary" could wreak havoc on basically the entire global internet  
**\<suraeNoether\>** indeed ^ but that's in fact exactly all the more reason to become resistant to a quantum adversary sooner rather than later  
**\<UkoeHB\_\>** How realistic is a quantum adversary?  
**\<ArticMine\>** ^ I agree  
**\<suraeNoether\>** if it takes 3 years to migrate to a quantum-secure system, and we hope something like clsag or triptych has a 3 year shelf life, then we should be looking at what will be practical 6 years from now  
**\<sarang\>** In the shorter term, understanding the effects of ring size on matching-type analysis is useful for knowing how large to make ring size for a next-gen protocol  
**\<Isthmus\>** Uhm  
**\<Isthmus\>** Would an adversary with a quantum computer break ring signatures or just decrypt the transactions?  
**\<suraeNoether\>** both: they can compute the discrete log of every one-time key and then they just own all of monero  
**\<Isthmus\>** Yeah, I'd just do that.  
**\<suraeNoether\>** yeah  
**\<suraeNoether\>** so like  
**\<sarang\>** Once you have key discrete logs, you can check key images  
**\<suraeNoether\>** matching: important. investigating quantum-secure schemes: higher priority, even over a relatively short 3-year term  
**\<suraeNoether\>** so every time i kill a bug in my matching code, i become more painfully aware: i'm fighting the wrong hydra  
**\<sarang\>** I still think it's very valuable  
**\<Isthmus\>** Yeah, we've been doing some quantum vs crypto experiments at Insight lately  
**\<suraeNoether\>** long story short, i'm prsently working on a summary-of-knowledge of quantum-resistant RingCT-type protocols, 3 of which have been proposed in the past 3 years  
**\<sarang\>** Otherwise, "bigger rings are better" is a qualitative statement  
**\<suraeNoether\>** just for community education reasons  
**\<suraeNoether\>** sarang: absolutely agreed  
**\<sarang\>** My recent work on Triptych-2 and chain simulations shows, as expected, that ring size has a large effect on verification complexity  
**\<UkoeHB\_\>** Can you also evaluate how realistic a quantum adversary is? I recall general skepticism of them ever materializing  
**\<sarang\>** So choosing the smallest rings that do the job is important  
**\<suraeNoether\>** UkoeHB\_: yeah, so basically here's a qualitative answer to that question  
**\<Isthmus\>** We're already working on 5 [actual] qbits  
**\<Isthmus\>** (Insight working on IBM equipment)  
**\<Isthmus\>** Expecting this to scale in the next few years  
**\<suraeNoether\>** you may recall the sensationalist headlines a few months ago: https://www.eurekalert.org/pub\_releases/2020-02/aps-teo022720.php  
**\<suraeNoether\>** quantum supremacy is probably a bad term but  
**\<suraeNoether\>** before these researchers did what they did, the \*fastest way to figure out what a quantum computer can do\* would be to \*simulate it on a classical computer\*  
**\<sarang\>** Quantum supremacy is a poor metric for usefulness IMO  
**\<sarang\>** Such problems are typically highly contrived  
**\<suraeNoether\>** because of these guys' work, that is no longer the case: there now exist quantum computers that cannot be simulated more quickly than they can operate. this is a critical benchmark for scaling quantum  
**\<Isthmus\>** @surae should I just loop in my quantum/crypto engineer for a few weeks, so you can focus on the matching hydra?  
**\<Isthmus\>** They're already looking into the schemes, and would probably be happy to work on Monero  
**\<suraeNoether\>** google's bristlecone has 72 qubits running  
**\<suraeNoether\>** isthmus: let's set up a call for later this week  
**\<vtnerd\>** well I have to say it ... quantum computers are BS, they just spin hyperbole but go nowhere. There was a discussion about this on metzdowd  
**\<Isthmus\>** Given retroactive denonymization doesn't really matter if they're 5 or 15 years off, we gotta hustle to protect Monero users in 2020  
**\<suraeNoether\>** do you mean like computers based on quantum principles will never work, vtnerd? can you clarify?  
**\<suraeNoether\>** isthmus ^ bingo  
**\<vtnerd\>** someone discussed the progress made on metzdowd. Its been very little over 25+ years  
**\<vtnerd\>** the researchers have alwasy been just on the edge of making it a reality  
**\<suraeNoether\>** okay well  
**\<suraeNoether\>** the researchers into QC i've spoken with disagree  
**\<suraeNoether\>** and that's an appeal to authority  
**\<vtnerd\>** admitedly this isn't my expertise, but theres time tradeoffs investigating these QC resitistent systems  
**\<suraeNoether\>** but i think it's absolutely silly to say that very little progress has occurred over 25 years, and it's even sillier to assume that no progress will be made ala cold fusion, and i think it's even sillier to propose that we, say, avoid quantum-secure implementations rather than looking into the costs and benefits and time horizons of implementing them  
**\<vtnerd\>** and the one thing thats bizarre, is when someone builds a QC system, we basically ahve to reboot on general purpose computing projects, no? Like one year out are they even cracking crypto?  
**\<suraeNoether\>** well, i don't want to take more time on this: my update is that i have to step back from monero for awhile, and i'm looking into RLWE-based ring signatures  
**\<Isthmus\>** Y'all know the tech cycle. Many-year winters leads to the most exciting explosions. AI, crypto, quantum... the pattern repeats  
**\<suraeNoether\>** i'll still be presenting at meetings and coming by and stuff  
**\<suraeNoether\>** for folks who are interested, the wikipedia article on the timeline of quantum computing has lots of good info  
**\<sarang\>** OK thanks suraeNoether  
**\<sarang\>** I have a few things to share  
**\<sarang\>** First, CLSAG  
**\<sarang\>** I've completed review of suraeNoether's security model updates  
**\<sarang\>** suraeNoether: I've left several Overleaf review comments for you  
**\<sarang\>** Along with that, I migrated some recent CLSAG verification optimization code to moneromooo's branch, along with relevant unit and performance tests  
**\<sarang\>** Saves about 5% on verification, which seemed worth it  
**\<sarang\>** Relating to Triptych: I made a minor update to the original Triptych-1 preprint for readability, but also completed the Triptych-2 preprint  
**\<sarang\>** Here is a link to the Triptych-2 preprint on Overleaf: https://www.overleaf.com/read/ynfkhykjfvrd  
**\<sarang\>** I'd appreciate any review on it prior to posting to the IACR archive  
**\<sarang\>** Unrelated to these, I've been catching up with literature review  
**\<sarang\>** and, as a program committee member for the IEEE S&B conference, I'm reviewing submissions  
**\<suraeNoether\>** i'll take a look at your comments and read through triptych 2: electric bugaloo  
**\<sarang\>** Thanks suraeNoether  
**\<sarang\>** IMO the CLSAG review is top priority  
**\<selsta\>** Did you contact Teserakt?  
**\<sarang\>** I'd like to wait on confirming a schedule until we have this paper done  
**\<sarang\>** Otherwise we risk losing the availability again due to delays  
**\<sarang\>** Anyone who wants to review the CLSAG optimizations can see this branch: https://github.com/SarangNoether/monero/commits/clsag-mooo  
**\<sarang\>** Finally, my funding proposal needs feedback on GitLab before it's decided whether to open it: https://repo.getmonero.org/monero-project/ccs-proposals/-/merge\_requests/131  
**\<sarang\>** That's all for me today  
**\<sarang\>** Does anyone else wish to present, or have questions?  
**\<suraeNoether\>** i propose that we fund sarang  
**\<suraeNoether\>** but no  
**\<suraeNoether\>** no questions  
**\<Isthmus\>** I propose that we fund surae  
**\<sarang\>** Heh, then leave a reaction or comment on gitlab!  
**\<Isthmus\>** I've been wrestling with a weird conundrum  
**\<sarang\>** Go on  
**\<Isthmus\>** I'm thinking about modifying my wallet to only select decoys from transactions generated by the core wallet  
**\<Isthmus\>** But then that in and of itself becomes a subtle heuristic  
**\<sarang\>** Ah, so using fingerprinting to pick the most "standard" decoys?  
**\<Isthmus\>** Not "most"  
**\<Isthmus\>** Something either looks like the core wallet, or provably isn't  
**\<sarang\>** Heh, yeah, it kicks the fingerprinting can slightly down the road  
**\<Isthmus\>** I guess if almost everybody used only outputs generated by the core wallet, then it wouldn't be a heuristic to fingerprint me  
**\<Isthmus\>** \*outputs that cannot be proven to have not originated from the core wallet  
**\<Isthmus\>** ^ to be very specific  
**\<sarang\>** got it  
**\<Isthmus\>** Eh, I dunno. Don't really have a solution. It was just funny that I worked on it for a it before realizing that it becomes its own heuristic xD  
**\<Isthmus\>** Anyways, nothing much from me. I've had about 20 minutes per week for Monero lately  
**\<Isthmus\>** But in May, we're gonna have some long talks and clean house  
**\<sarang\>** ?  
**\<Isthmus\>** Have 7 heuristics that have now partitioned out upwards of 20 different implementations.  
**\<Isthmus\>** Most of which I've shared in MRL already  
**\<UkoeHB\_\>** 20 sounds like a lot  
**\<UkoeHB\_\>** monero is really doing well if there are 20  
**\<Isthmus\>** That's unfiltered for time.  
**\<Isthmus\>** Going to clean it to recent blocks and see what's in the wild \*now\*  
**\<sarang\>** So some might be updates to the same implementations?  
**\<Isthmus\>** It's at least 3 right now,  
**\<Isthmus\>** Yeah, that's why I'm not really sweating the 20  
**\<Isthmus\>** I think it's 3-5 in current era  
**\<Isthmus\>** Which is pleasantly(?) surprising  
**\<Isthmus\>** But yea, with absolutely no time to work on it now, hard to put together a full writeup  
**\<Isthmus\>** But will definitely circle back in the next 2 months  
**\<sarang\>** Sounds good!  
**\<sarang\>** Anyone else wish to share any research?  
**\<UkoeHB\_\>** hi, ztm2 proofreading draft is updated (with feedback from sarang about bulletproofs, and also the clawback formula regarding tx weights) https://www.pdf-archive.com/2020/03/11/zerotomoneromaster-v1-1-1/zerotomoneromaster-v1-1-1.pdf  
**\<UkoeHB\_\>** 2 more weeks for proofreading  
**\<sarang\>** Good feedback so far overall?  
**\<UkoeHB\_\>** also, looked into next-gen tx key image generation for multisig (sarang has a solution for it), and it seems like inversion key images wont greatly disrupt multisig transaction flows (especially escrowed markets, which is a big deal)  
**\<UkoeHB\_\>** Not much feedback so far  
**\<UkoeHB\_\>** But it's 152 pages so not surprising  
**\<UkoeHB\_\>** that's all from me  
**\<sarang\>** OK, let's move on to ACTION ITEMS for the next week or so  
**\<sarang\>** I'll await final word on my CLSAG review notes  
**\<UkoeHB\_\>** wondering if ArticMine has progress on fees  
**\<sarang\>** Continue working on Triptych  
**\<Isthmus\>** Why did it switch from 02 to 20?  
**\<Isthmus\>** oops  
**\<ArticMine\>** Yes I do  
**\<Isthmus\>** ignore that  
**\<sarang\>** Go ahead ArticMine!  
**\<ArticMine\>** I am looking at making the penalty free one also dynamic and using the long term median to control it  
**\<ArticMine\>** Also slowing down the fall in the long term median to match the constraint on the rise  
**\<sgp\_\>** just got caught up  
**\<ArticMine\>** So it does not go from say 3000000 bytes 300000 bytes in one shot  
**\<ArticMine\>** The new dynamic penalty free one would track the long term median at say 20 - 25% of the long term median  
**\<Isthmus\>** Ooh interesting  
**\<ArticMine\>** This will provide predictable fee over time  
**\<sarang\>** Will you have a specific proposal for this, intended for a network upgrade?  
**\<ArticMine\>** The models I am looking at is a sharp drop, followed by a fiat banking crisis that creates a very sharp rise  
**\<ArticMine\>** Yes  
**\<sarang\>** OK, any final thoughts or topics before we wrap up this hour?  
**\<suraeNoether\>** be kind to each other  
**\<suraeNoether\>** just be excellent  
**\<suraeNoether\>** you animals  
**\<sarang\>** All right, thanks to everyone for attending. Adjourned!  
