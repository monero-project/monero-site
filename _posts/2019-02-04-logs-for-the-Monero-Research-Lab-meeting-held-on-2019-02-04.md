---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-02-04
summary: Network upgrade, MRL work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** OK, let's begin  
**\<sarang>** 1. GREETINGS  
**\<sarang>** hello everyone  
**\<ArticMine>** Hi  
**\<sgp\_>** hello!  
**\<Xeagu>** Hey!  
**\<chron0>** oi  
**\<sarang>** a special ping to moneromooo as well, since he has a PR that I wish to discuss  
**\<sarang>** Since it approaches, let's discuss 2. NETWORK UPGRADE REVIEW  
**\<xmrmatterbridge> \<serhack>** Hi!  
**\<sgp\_>** we know the topic is important since it's in ALL CAPS  
**\<suraeNoether>** hi guys!  
**\<sarang>** As linked in the agenda, the current plan for payment IDs has been subject to much discussion, so please read through the notes at that link  
**\<sarang>** I don't want to discuss opinions on that at this meeting, only to remind of what the timeline has been  
**\<needmoney90>** Hey!  
**\<sarang>** Of more pressing interest is the block size algorithm  
**\<Mochi101>** You guys going to introduce more tools for sub-addresses too?  
**\<Mochi101>** Like being able to query last sub-address generated?  
**\<sarang>** You may recall that we were looking at a few different options for block size scaling, to allow for growth while protecting from cheap spam  
**\<suraeNoether>** for the audience: The current pull request for changing the dynamic block size adjustment method is proposed by ArticMine (see PR 5124 here: https://github.com/monero-project/monero/pull/5124/files ) and it occurs to me that we are intricately in the weeds of fees, incentives, and block sizes right now.  
**\<sarang>** Mochi101: probably better for #monero-dev   
**\<Mochi101>** ah ok  
**\<suraeNoether>** I have concerns about this proposal for a few reasons.  
**\<sarang>** The reason I bring this up is because we have essentially two methods on the table: a simple dual-median approach, and the one linked in the PR which uses a long-term median weighting  
**\<sarang>** The PR contains moneromooo's implementation of the latter  
**\<ArticMine>** Actually There were 3 option for block weight scaling  
**\<ArticMine>** That were formalized  
**\<ArticMine>** 1) The double median  
**\<ArticMine>** 2) The double median with smooths change  
**\<sarang>** Please remind the room of the change for (2)  
**\<suraeNoether>** ^ thanks sarang :P  
**\<ArticMine>** 3) My last proposal that moneromooo implemented in PR 5124  
**\<suraeNoether>** i far prefer the dual median approach than PR 5124  
**\<ArticMine>** In the first option the full blockweight including the burst portion was used to scale the long term median  
**\<ArticMine>** This allowed the burst to work with scaling but had the problem of using the entire burst to scale the long term median  
**\<suraeNoether>** PR 5124 concerns me for a couple of reasons. firstly, demonstrating the long-term stability of it... proving that stability... is difficult, and finding parameters that seem to be good is an exercise in hand-tuning. additionally, it's not clear what we gain from using the more complicated method in the short term. if we are pushing more complicated code, it should be because we have a clear advantage from  
**\<suraeNoether>** using it, some clear efficiency or security gain  
**\<sarang>** Given an unbounded adversary, all proposals allow chain bloat of O(10-100 GB) over, say, a weeklong sustained max-bloat attack  
**\<sarang>** With resulting block sizes 15-30 MB  
**\<suraeNoether>** how much does it cost to do that in all the proposals?  
**\<ArticMine>** 2) smooth's modification was to not use the 50x burst in scaling the long term median  
**\<suraeNoether>** if all proposals have the same total consequence for the blockchain and the same approximate cost for the attacker, there is zero reason to use something complicated instead of something simple.  
**\<sarang>** O($1-10 M) depending on whether you assume the miners are purely breaking even or not  
**\<sarang>** Under ArticMine's 4x-rational-miner assumption, they scale 4x from that  
**\<ArticMine>** This had the serious problem of killing the burst over time.  
**\<moneromooo>** If all proposals have the same total consequence for the blockchain and the same approximate cost for the attacker, then you use "normal use" behaviour to select which one is the best.  
**\<moneromooo>** It's not enough to resist attacks, it must also be useful for normal use.  
**\<ArticMine>** My final proposal addressed the problem in both 1) and 2) b only using the portion of the block weight that would have been allowed under the long term median to scale the long term median  
**\<sarang>** ArticMine: does moneromooo's code accurately reflect your proposal?  
**\<sarang>** And does my Python code?  
**\<sarang>** I want to make absolutely sure we are all operating on the same assumptions for bloat and cost possibilities  
**\<sarang>** Otherwise we are debating unknowns  
**\<suraeNoether>** ^  
**\<moneromooo>** The python code I saw from... sarang I assume, can't recall now :) and my code agreed on the results when pushing blocks with the max allowed weight.  
**\<moneromooo>** Also agreed with some python code I made.  
**\<sarang>** For example, a recent change in minimum fee computation to include the long-term weight (and not short-term median) switches from applying the 4x penalty to using the min fee, for example  
**\<ArticMine>** sarang Your python code uses the penalty rather than 4x the penalty  
**\<sarang>** and that spiked the total cost  
**\<suraeNoether>** i am so wildly uncomfortable with this conversation, tbh  
**\<ArticMine>** But it was switched to 4x penalty  
**\<sarang>** Let's assume we are all talking about this paste: http://paste.debian.net/hidden/292e473f/  
**\<sarang>** Note line 56 please  
**\<Xeagu>** Whatever is implemented should have a clear way to explain to the rest of the ecosystem.  
**\<sarang>** It used the short-term median in the min fee computation, but was changed in line 57 to the lt-weight  
**\<sarang>** This spikes the total cost by order of magnitude, so clearly it means the min fee is applying, rather than the 4x penalty  
**\<sarang>** We should ensure that we are clear of this  
**\<sarang>** \*clear on this  
**\<sarang>** So my current questions are: ArticMine is this your intention? moneromooo is the current paste (not the commented-out line) what is in the PR?  
**\<moneromooo>** AFAIK, yes.  
**\<ArticMine>** The past reflect the rational miner so yes  
**\<ArticMine>** paste  
**\<moneromooo>** I do not agre with the rational miner comment though :P  
**\<sarang>** ArticMine: what about the difference between lines 56 and 57?  
**\<moneromooo>** A rational miner would also accept smaller fees, unless I can be convinced otherwise.  
**\<sarang>** That has a \_massive\_ effect on the cost assumption  
**\<ArticMine>** The difference is between 4x penalty and 1x  
**\<sarang>** No  
**\<sarang>** The difference between 56 and 57 is in how the min fee is scaling  
**\<sarang>** the penalty applies in the next line  
**\<suraeNoether>** there has not been an effort to formalize the design goals of our blocksize adjustment algorithm, so even if we have a new proposal, all we do is say "hmm, how fast can the blockchain grow? hmm how much does that cost?"  
**\<suraeNoether>**  we may as well be picking random functions and seeing if they do what we want them to do, if we aren't going to start with design principles or urgent needs first and move forward from there.  
**\<suraeNoether>** With that in mind, our primary urgent need is to prevent a bloatocalypse before the next fork. Keeping next block size at something like R\*Median(N) is still rational, we just need to boost N and decrease R to make it so that 6 months can't give us more than a certain growth over the trendline, selecting N to dictate how long the attacker needs to blow fees.  
**\<oneiric\_>** what is the practical urgency of implementing one of the suggested modifications to blocksize adjustment?  
**\<suraeNoether>**  in the meantime, I am willing to make a formal bet that the only reason we could possibly need a 50x boost in block size in the next 180 days is a bloat attack. i see no good reason to take the short-term xmas day factor into account for this immediate next hard fork, for a lot of design reasons  
**\<ArticMine>** No it is not  
**\<suraeNoether>** ArticMine: ??  
**\<ArticMine>** The urgency here is questionable at most  
**\<suraeNoether>** ArticMine: i absolutely disagree  
**\<oneiric\_>** so postponing for 1-2 forks is not the worst-case scenario?  
**\<suraeNoether>** i don't want to be chicken little here  
**\<suraeNoether>** the sky is falling yada yada  
**\<suraeNoether>** but guys, for essentially the cost of an apartment building, someone could take the monero blockchain and make it bigger than ethereum's  
**\<suraeNoether>** i find this to be an intolerably insecure property of our block size adjustment algorithm  
**\<suraeNoether>** it's a whim for the winklevii  
**\<ArticMine>** If we rush into this without taking into consideration the implication on Monero ability to scale we can destroy a critical component of Monero's social covenant  
**\<ArticMine>** Or cripple it  
**\<suraeNoether>** ArticMine: our social contract is to ensure that our currency remains functional  
**\<suraeNoether>** a 160GB blockchain is not functional  
**\<ArticMine>** It has been functional for 4 years  
**\<moneromooo>** The fees were just dropped to ~nothing recently though.  
**\<oneiric\_>** is there any indication that 160GB is near?  
**\<suraeNoether>** "the attack hasn't happened yet" != "the attack will not happen or is not incentivized to happen"  
**\<xmrmatterbridge> \<serhack>** ArticMine: Yes, but that does not mean that could work for the next years.  
**\<moneromooo>** Actually I take that back. It was still the same penalty.  
**\<suraeNoether>** since any change we make in this fork can be undone in the next fork, your argument about long term scaling and the social contract doesn't hold up  
**\<ArticMine>** This is a theoretical attack that is more expensive than a 51% attack  
**\<Xeagu>** Do we have simulations of upper bound organic growth in x time? Say Monero gets added to Open Bazaar or something - what is the realistic transaction growth we might expect?  
**\<suraeNoether>** it's about as expensive as a 51% attack, with the difference that it requires no hardware  
**\<suraeNoether>** xeagu no, we have no data on adoption rate into new markets, although we could ballpark some estimates of what we think are reasonable, we are still just hand-tuning our approach  
**\<ArticMine>** a 515 attack include the cost of hardware  
**\<ArticMine>** 51%  
**\<suraeNoether>** ArticMine: in order to pull off a 51% attack, i need i) the money and ii) some miners willing to take my bribe at the cost of the value of their xmr  
**\<suraeNoether>** in order to do a bloat attack, i just need a bunch of xmr outputs  
**\<ArticMine>** You have to pay for both  
**\<suraeNoether>** so the cost may be equivalent in terms of USD, but the social friction to one attack is much lower compared to the other  
**\<Xeagu>** One is permissionless  
**\<ArticMine>** So it the other  
**\<ArticMine>** is  
**\<suraeNoether>** ArticMine: nah, you need to go find miners to work with  
**\<ArticMine>** Rent the hard ware  
**\<suraeNoether>** even if you have to spin up AWS, that means you have to go through amazon  
**\<suraeNoether>** that isn't permissionless  
**\<suraeNoether>** anyway  
**\<ArticMine>** or buy it  
**\<suraeNoether>** we are going down a rabbit hole  
**\<sarang>** OK, so  
**\<suraeNoether>** I'm advocating that we merely modify our growth rate and sample size and then spend the next 6 months making a non-rushed decision  
**\<sarang>** What is on the table right now is a proposed PR, which you may or may not think is too complex  
**\<sarang>** I want to know that PR 5124 matches the linked paste  
**\<sarang>** and that the cost computation in the paste is accurate  
**\<sarang>** then we \_at least\_ know what the cost and bloat effects of 5124 are  
**\<ArticMine>** My point is we have created artificial urgency and as a consequence could destroy a critical component of Monero  
**\<suraeNoether>** articmine: tweaking R and N can not destroy a critical component of monero  
**\<suraeNoether>** but implementing a complicated blocksize adjustment algorithm with 18 parantheses that is hard to intuit or reason about? that could.  
**\<ArticMine>** That is the trouble with the artificial urgency  
**\<suraeNoether>** okay, i said my piece  
**\<moneromooo>** Having ArticMine's change in does not prevent it being changed later if something more appropriate is found. Which may be the case if suraeNoether does the study he advocated earlier.  
**\<sarang>** I am currently advocating for nothing, since I have received no satisfactory guidance about whether 5124 matches the numbers we have been basing assumptions on  
**\<ArticMine>** I am in the process of evaluating just that  
**\<moneromooo>** It matches the numbers for max sized blocks.  
**\<moneromooo>** I did not try non-max size blocks though. I will try that.  
**\<sarang>** ty ArticMine. In particular: please try switching between lines 56 and 57 and note the cost change  
**\<sarang>** and ensure we are comfortable with that  
**\<ArticMine>** In hour paste  
**\<ArticMine>** your  
**\<sarang>** moneromooo: right, the question is fee and cost, not blocksize, between those lines' changes  
**\<Xeagu>** If we implement ArticMine's change, can we also come up with a ELI5 explanation of what is going on?  
**\<sarang>** ArticMine: yes, 56-57 in my paste, linked again here: http://paste.debian.net/hidden/292e473f/  
**\<sarang>** Xeagu: yes  
**\<moneromooo>** Oh OK. I did not do anything with fee with my code.  
**\<sarang>** moneromooo: you had specifically requested the line 57 change  
**\<sarang>** IIRC  
**\<moneromooo>** s/do/test, log, etc/  
**\<moneromooo>** Yes, the change is what ArticMine suggested a while back to make the attack more expensive.  
**\<moneromooo>** (and I do not agree it does make it more expensive fwiw)  
**\<moneromooo>** That change is what the second commit in 5124 does.  
**\<ArticMine>** Yes 57 addresses maintenance cost of keeping the locks bloated  
**\<ArticMine>** Which is what I recommended  
**\<sarang>** OK, so in your opinion ArticMine, running that paste in its current form will provide the cost to an attacker, assuming rational miners  
**\<sarang>** ?  
**\<ArticMine>** Yes  
**\<sarang>** thank you  
**\<sarang>** note to moneromooo ^  
**\<moneromooo>** who still does not think it works  
**\<sarang>** At least we agree on the final bloat and blocksize :/  
**\<sarang>** (using the "attacker with infinite money and rage" model)  
**\<ArticMine>** This all comes back to suraeNoether point what are our design parameters?  
**\<sarang>** We have not formally defined them  
**\<suraeNoether>** after the meeting i'm going to host an impromptu brain session on that i think articmine  
**\<Xeagu>** Fwiw none of these measures seem to prevent slower bloat with min fee txs flooding the mempool and eventually getting confirmed over time  
**\<ArticMine>** Yes  
**\<suraeNoether>** i have some formal ideas  
**\<sarang>** OK, so let's move on for now perhaps. Right now we have the current scheme, and the PR, and a dual-median idea that's not in a PR  
**\<sarang>** After meeting, more discussion  
**\<sarang>** Output selection is also being worked on, with no final changes yet  
**\<sarang>** The idea being to weight block selection for ring decoys by the number of outputs, consistent with our gamma spend distribution  
**\<suraeNoether>** isthmus and i had some discussion on output selection  
**\<ArticMine>** If we are trying to minimize the risk of bloat without any other considerations then we end up destroying the adaptive blocksize  
**\<sarang>** ArticMine: let's discuss after meeting  
**\<ArticMine>** Sure  
**\<sarang>** Please go ahead with output selection suraeNoether   
**\<suraeNoether>** one thing isthmus pointed out is the classic problem with multi-input transactions  
**\<suraeNoether>** for example, if I produce a ring signature with ring  {A, B, C} and a ring signature with ring {D, E, F}  in the same transaction, and A and D both have the same age, then it's "obvious" who the true spender is  
**\<suraeNoether>** or rather, allows for heuristic'in  
**\<sarang>** monerocoinjoin helps to break this, fwiw  
**\<suraeNoether>** and after more and more discussion, i'm finally coming around on the idea of binning inputs  
**\<suraeNoether>** sarang ^ yes  
**\<sarang>** s/helps/could help someday  
**\<sarang>** The major issue at hand \_that was recently introduced\_ is biased coinbase selection (and biased selection in general)  
**\<Xeagu>** Input age heuristic for multi ring transactions is an interesting consideration  
**\<Inge->** 18:25 < ArticMine> is  
**\<sarang>** IMO we should iteratively first focus on removing some of the selection bias, and then later move to address other multi-in heuristics  
**\<Xeagu>** Got it  
**\<sarang>** Is there opposition to a move to a weighted selection that accounts for this bias?  
**\<Xeagu>** What is the biased coinbase selection problem?  
**\<sarang>** If you select a block and then an output within it, you are likely to have bad distributions that aren't representative of the whole chain, due to variance in block sizes  
**\<moneromooo>** The fewer outputs in a block, the more likely they are to be chosen as fake outs.  
**\<sarang>** If you weight based on # of outputs, you can remove this  
**\<sarang>** doing it efficiently is the tricky part, due to the gamma requirement  
**\<sarang>** I only bring it up here to see if there is opposition to moving to such an approach, and then later continuing to iterate if needed  
**\<Xeagu>** It's almost like you need extra decoy outputs as padding in each block so there is not much variance in total outputs between blocks  
**\<suraeNoether>** i can spend about 30 minutes today writing up some pseudocode if that helps with the distribution stuff...  
**\<sgp\_>** I think it's a good stopgap  
**\<suraeNoether>** xeagu no, extra decoy outputs have their own security problems  
**\<moneromooo>** No. Do not spam the chain.  
**\<suraeNoether>** ^  
**\<sarang>** Xeagu: we really don't  
**\<sarang>** weighting accounts for variance  
**\<sarang>** that's the point  
**\<Xeagu>** Noted  
**\<sarang>** suraeNoether: please write up your pseudocode ASAP, and I will as well  
**\<sarang>** this is not consensus, but the upgrade is a good time to do it if possible  
**\<suraeNoether>** yeah, essentially, for the stats nerds in the audience  
**\<moneromooo>** If someone tells me how to calculate the gamma CDF (or something that's close enough), I can do that code. It's the only thing I'm missing.  
**\<sarang>** moneromooo: this assumes you're recalculating the product (this block's gamma factor)\*(this block's weight) for each block, every time a new block arrives?  
**\<sarang>** that was the inefficiency I wanted to address  
**\<moneromooo>** Every time someone wants to make a tx. Which is hopefully less often.  
**\<sarang>** OK, but it's for the entire chain?  
**\<moneromooo>** OK. Good to have if you can, sure.  
**\<moneromooo>** Yes.  
**\<sarang>** got it  
**\<sarang>** there was talk about a cutoff point, but that renders old outputs detectable  
**\<moneromooo>** Well, technically the whole chain since rct started.  
**\<sarang>** heh sure  
**\<suraeNoether>** we are transitioning from "drawing randomly from an ideal distribution ignoring the current blockchain state (in terms of density of txns per block)" to "drawing randomly from a partially empirical distribution based both on an ideal distribution and the observation of the current blockchain state.  
**\<sarang>** so in fact that does allow a cutoff of sorts...  
**\<sarang>** Cool, we shall prioritize that to get it in before freeze  
**\<sarang>** Let's move to 3. OTHER WORK  
**\<sarang>** I continue to work on a few things listed in the agenda  
**\<moneromooo>** I'll use some interpolation as smooth suggested, so you'll have to calc gamma for 1/100 points or whatever in practice.  
**\<sarang>** in addition to the upgrade items  
**\<suraeNoether>** but i do want to go back to the multi-input thing this week, because i think it's a critical security concern that we have merely gotten used to because we've known about it for awhile and didn't have a solution for...  but we have more pressing stuff to take care of immediately  
**\<sarang>** Yes we do  
**\<sarang>** an interesting point is Dandelion, which I've been looking into more deeply  
**\<oneiric\_>** ^  
**\<sarang>** there was talk among btc devs about possible DoS avenues in the stem phase of routing  
**\<suraeNoether>** the more i read about dandelion++ the more i like it, but hte more i wish they stuck with a single +  
**\<sarang>** having to do with the mempool  
**\<sarang>** These may not apply to us, but I'm reading up on their concerns  
**\<sarang>** They also had issues relating to unconfirmed txs relying on each other that we don't care about  
**\<sarang>** Any specific questions for me regarding my agenda-listed items?  
**\<sarang>** My first priorities are upgrade items, of course  
**\<Xeagu>** Not mentioned is mining algo. Is that planning on being changed next fork?  
**\<sarang>** yes  
**\<moneromooo>** Yes.  
**\<sarang>** details tbd  
**\<Xeagu>** Got it  
**\<oneiric\_>** are the candidates known atm?  
**\<sarang>** I also consider that outside the scope of this room, for the most part  
**\<sarang>** I hear CN-R with tbd tweak(s)  
**\<oneiric\_>** thanks sarang  
**\<sarang>** OK, suraeNoether ?  
**\<sarang>** your updates?  
**\<suraeNoether>** Well, I finally realized how to formally hypothesize about the EAE attack in the bipartite graph setting for MRL11, which has allowed me to start writing up simulations  
**\<sarang>** neat!  
**\<suraeNoether>** basically: i'm assuming blocks arrive one at a time linearly for the sake of simplicity, i assume transaction density in each block is poisson distributed, and i assume each transaction is M-in, N-out according to some distribution I haven't selected yet (but will probably be empirical from our blockchain)  
**\<suraeNoether>** I do this for a number of blocks T, to simulate a fake blockchain that exists before the game begins  
**\<suraeNoether>** then, in addition to the random block density I just described, a single user is going to churn K times  
**\<sarang>** What timing distribution?  
**\<suraeNoether>** the wallet distribution  
**\<sarang>** define plz  
**\<sarang>** I mean, how often do they churn?  
**\<suraeNoether>** oh, i'm going to explore that as a parameter with K=1 to K=15 or so  
**\<sarang>** roger  
**\<suraeNoether>** then i'm going to run the matching algorithm and see the probability that the person "gets caught" meaning their transactions are labeled/matched  
**\<sarang>** sweet  
**\<suraeNoether>** we already have ideas on timing, so we can figure out how this scales to a big parallel process, and we can generate a confusion table  
**\<moneromooo>** Is this the same thing as a confusion matrix ?  
**\<suraeNoether>** yeash  
**\<suraeNoether>** yes\*  
**\<suraeNoether>** so the idea is to ask the question 'under certain user behavior, which is what we recommend for churn, what sort of security can someone practically expect?'  
**\<suraeNoether>** concretely  
**\<sarang>** Awesome, please keep us updated on the sim results. This will be very useful to those needing to churn safely  
**\<suraeNoether>** i also have an alternative model where only coinbase outputs are added to the system but they get sent with wait-times equal to the wallet distribution also  
**\<suraeNoether>** will do  
**\<Xeagu>** You testing if there is a limit to churning that begins to weaken security?  
**\<suraeNoether>** xeagu trying to formalize "how much should you churn for the following security level"  
**\<Xeagu>** Got it  
**\<suraeNoether>** it'd be interesting to see if churning too much gives it away  
**\<suraeNoether>** which is an old hypothesis of mine :D  
**\<sarang>** Anything else you're working on?  
**\<suraeNoether>** the blocksize dynamic adaptability problem, of course, and my December + January end of month report  
**\<sarang>** Neat  
**\<suraeNoether>** i like giving plenty of time for comments. \*cough\*  
**\<sarang>** Before we review action items, any specific directed questions, or other work to share?  
**\<suraeNoether>** oh i read a paper  
**\<suraeNoether>** oh oh  
**\<needmoney90>** Have you considered the alternative funding avenue discussed in Palo alto?  
**\<suraeNoether>** https://eprint.iacr.org/2018/379  
**\<sarang>** our old friend Liu  
**\<sarang>** needmoney90: remind the room of this funding avenue  
**\<needmoney90>** Patreon or a similar system  
**\<suraeNoether>** oh yes  
**\<needmoney90>** With the unfunded part going to the MFS  
**\<needmoney90>** Gives more assurance of future funding  
**\<sarang>** It would increase the funding timeline  
**\<suraeNoether>** needmoney90 brought up the idea of doing a patreon for MRL so that researchers can get a little bit of reliability in getting paid in USD  
**\<sarang>** Keep in mind we can now also request immediate MFS payout if this is clearly stated  
**\<suraeNoether>** i honestl haven't thought about it much, but the centralization risk of going through patreon is a concern... even though it's mitigated by the MFS  
**\<sarang>** suraeNoether: nobody has to use patreon  
**\<sarang>** they can donate via mfs  
**\<needmoney90>** Yup, this prevents the whole 'Will we get funded' thing, where you know you have a baseline level of contribution even if the MFS falls through  
**\<moneromooo>** What is MFS ?  
**\<sarang>** Nice. I'm not opposed to it as another option  
**\<sarang>** apparently the renaming for NewFFS  
**\<needmoney90>** Monero funding system  
**\<needmoney90>** It's no longer on a forum  
**\<sgp\_>** I thought it was the CCS  
**\<sarang>** -\_\_\_\_\_-  
**\<needmoney90>** No one told me :(  
**\<Xeagu>** For F\*\*\* Sake I liked FFS  
**\<sarang>** Anyway  
**\<oneiric\_>** lol  
**\<sarang>** To keep things tight, 5. ACTION ITEMS  
**\<sarang>** Deciding on block size algorithm, if any, should be a priority  
**\<sarang>** otherwise nothing will happen  
**\<sarang>** After meeting will be a chance to discuss formal requirements for this  
**\<sarang>** Next  
**\<sarang>** suraeNoether and I have different ideas on weighted output selection that need to be tested and shared for possible inclusion in the upgrade  
**\<sarang>** suraeNoether will be working on churn sims  
**\<sarang>** I will be trying my darndest to get back to the bulletproofs MPC, and understanding DoS risks in Dandelion routing  
**\<sarang>** Any last comments before we officially adjourn?  
**\<oneiric\_>** what are the chances of something like the btc key-reuse in monero?  
**\<sarang>** what does this mean  
**\<oneiric\_>** there was that paper recently about computing btc addresses iirc  
**\<moneromooo>** About weighted output selection: if I have the code for calculating gamma before any fancy opt is found, I can add the code already. Then add the fancy opts on top.  
**\<sarang>** ty moneromooo   
**\<sarang>** oneiric\_: linkylinky  
**\<sarang>** We can at least get a series approximation for later interpolation  
**\<oneiric\_>** https://eprint.iacr.org/2019/023.pdf  
**\<sarang>** any bias in that approximation will be a wash  
**\<sarang>** Ah yes. Don't use silly RNGs  
**\<moneromooo>** I'm fine with a way to compute an approximation.  
**\<oneiric\_>** right, but is monero vulnerable to that style of attack?  
**\<sarang>** Thanks, everyone. Meeting adjourned    
