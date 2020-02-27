---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-03-18
summary: Sarang work, Surae work, Output distribution and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** 1. GREETINGS  
**\<sarang>** Hello all  
**\<suraeNoether>** greetings!  
**\<xmrmatterbridge> \<worriedrise>** Hello  
**\<xmrmatterbridge> \<oneiric>** hidere  
**\<suraeNoether>** worriedrise: i'm pretty sure i can prove that it's an interaction-free instantiation of thring signatures without much effort at all. i spent about an hour working on that proof this weekend, but i haven't uploaded it anywhere yet  
**\<sarang>** Let's discuss it shortly per the agenda  
**\<sarang>** Since it should warrant plenty of discussion  
**\<sarang>** 2. ROUNDTABLE  
**\<xmrmatterbridge> \<worriedrise>** I am looking forward to seeing it  
**\<sarang>** We have been discussing output selection quite a bit, and should prepare to make a recommendation for the next point release  
**\<sarang>** The output age distribution for selections made by the different options are reasonably close to each other under usual chain conditions  
**\<sarang>** At this point I'm going to recommend the output-lineup method  
**\<sarang>** Any thoughts on this?  
**\<suraeNoether>** for now, i favor the lineup method, until we have established a better alternative, or better metrics for analysis  
**\<xmrmatterbridge> \<worriedrise>** I am fine with that  
**\<sarang>** Neat  
**\<moneromooo>** For the output lineup method, the parameters (assuming you still use a gamma) are going to be very different.  
**\<sarang>** They use the same 2-day mean, but with an average output age determined by the chain (or some portion thereof)  
**\<moneromooo>** And they depend on how many outputs there are in the blocks. That seems to be fundamentally wrong to me, even though it seems to work in practice...  
**\<moneromooo>** I feels like overfitting/  
**\<sarang>** I don't know a better approach that meets our needs  
**\<sarang>** The point is they use averaging to smooth out density fluctuations  
**\<suraeNoether>** whatever method we end up selecting, we will have to re-estimate our selection parameters, since the distribution technically won't be gamma, for sure  
**\<suraeNoether>** the sensitivity to blockchain density is actually a feature not a bug imho  
**\<sarang>** Under the famine condition, for example, the averaging means that older outputs are favored more than the 2-day mean would currently do  
**\<moneromooo>** I had expected gamma to stay.  
**\<sarang>** The exp-gamma selection would stya  
**\<sarang>** but the parameters use an average output age  
**\<suraeNoether>** to sarang's point about famine: real-life spend-time distributions are very much sensitive to blockchain density and vice versa. a famine condition as sarang describes is "what happens if people start spending less and less, or with greater intervals of time between spends?" the answer \*should\* be that older outputs appear in ring signatures more often  
**\<sarang>** I invite people to play around with the algorithms and chain conditions with my simulation code  
**\<suraeNoether>** to moo's point: we are still trying to approximate a gamma distribution in terms of the age of one of the next outputs to be confirmed on-chain.  
**\<xmrmatterbridge> \<worriedrise>** Is anyone looking into the metrics of how many times an output is used in a ring? That should give us soe good insights  
**\<suraeNoether>** but either way, we should probably run our own analysis on spend-times and see if the parameters reported in the monerolink paper are sitll reasonable  
**\<sarang>** IIRC the statistical average tends toward the fixed ringsize  
**\<sarang>** At any rate, if people want to do more analysis, now is the time so we have a solid scheme ready for next release  
**\<sarang>** Otherwise: there's working bulletproofs MPC test code now, but the security guarantees depend heavily on the number of rounds and the presence or absence of player precommitments to their values to avoid cancellations  
**\<suraeNoether>** worriedrise and sarang: the average number of uses per key with a fixed ring size of R and N total ring signatures is <= R. Why? assume each ring signature has R members, and there are N ring signatures in total. There are at least N keys (one for each ring signature) so the average number of uses per key is total number of uses (N\*R) divided by total number of keys (there are N or more of these). So the  
**\<suraeNoether>** average uses per key is at most R.  
**\<suraeNoether>** gratz on working bulletproofs MPC; to be precise you mean "bulletproofed range proof MPCs" correct? not arbitrary bulletproofed statements?  
**\<sarang>** range proofs  
**\<suraeNoether>** neat  
**\<sarang>** but the idea extends to general proofs  
**\<xmrmatterbridge> \<worriedrise>** Average, yes. But the question is are there rings being over/under-selected?  
**\<sarang>** for sure  
**\<xmrmatterbridge> \<worriedrise>** And how bad is the problem  
**\<suraeNoether>** so sarang you've been reading more on lelantus?  
**\<sarang>** Yes, and playing around with some of the schemes they use  
**\<sarang>** Modifications to BPs and a Groth sigma protocol  
**\<sarang>** Nothing to report except that  
**\<sarang>** My funding request is open for funding now, and is about 1/3 complete!  
**\<suraeNoether>** do you have plans or ideas on how to assess scaling of the lelantus ringct versus ours?  
**\<sarang>** Yes, more careful op counts and a better understanding of how to handle commitments in the Groth protocol  
**\<sarang>** it's still very pie-in-the-sky at this point  
**\<suraeNoether>** okay; need anything from me in your reading about it?  
**\<sarang>** suraeNoether: your updates?  
**\<sarang>** not at this point  
**\<suraeNoether>** okay, so my work this past week has revolved primarily around simulations for my matching code, which i want to describe briefly  
**\<suraeNoether>** basically, i'm trying to simulate a blockchain under "realistic enough" circumstances and embed within this simulation some abnormal behavior that an analyzer may be interested in seeking out with machine learning or something like that  
**\<suraeNoether>** for example, if we want to model the classic EABE controlled purchase weekly of some illicit stuff, this would correspond to embedding a periodic signal into this blockchain  
**\<suraeNoether>** for another example, what if a specific vendor is merely impatient and spends more rapidly than other vendors? drawing from an exponential distribution instead of a gamma, or something along those lines  
**\<suraeNoether>** the goal is for my matching algorithm to try  to find this embedded signal and see how good it is at this task, both in terms of false positives and false negatives  
**\<suraeNoether>** this can be loosely compared to the methods used in monerolink for testing those approaches, with a major exception: the goal here is to estimate the power of the statistical test over a wide range of hypotheses, while all the "background noise" is behaving \*just as one would expect with our wallet distributions.\*  
**\<suraeNoether>** so i want to sit down with sarang later today to discuss output selection simulation methods. after all, if we suspect we'll be implementing one of four different schemes, it makes sense to implement these in the simulations and test their performance... but it's very easy to go overboard with such tests and over-engineering a big experiment  
**\<suraeNoether>** i want to come up with a very precise set of tests to get to the heart of what we want to test and what information we need in order to make informed decisions and move forward  
**\<suraeNoether>** on teh plus side, we are ending up with a pretty rigorous simulation suite for simulating monero blockchains.  
**\<sarang>** nice  
**\<xmrmatterbridge> \<worriedrise>** Could we keep track of a counter to keep track of how outputs may be over/under-selected, as I mentioned before?  
**\<suraeNoether>** my other updates involve dlsag security stuff and reading about generalizations of the keccak sponge construction to the family of parazoa hash functions. but those are less interesting: the first paper is nearing completion, and the second is pie-in-the-sky  
**\<xmrmatterbridge> \<worriedrise>** I believe this may be a good goal  
**\<moneromooo>** I think you can do that with one of the tools in src/blockchain\_utilities  
**\<sarang>** worriedrise: how would this data affect your opinion on output selection?  
**\<xmrmatterbridge> \<worriedrise>** If we can find certain outputs that are consistently being under selected, that is more likely to be the true soender  
**\<xmrmatterbridge> \<worriedrise>** spender  
**\<xmrmatterbridge> \<worriedrise>** And conversely  
**\<xmrmatterbridge> \<worriedrise>** I believe that might be already happening with the approach of choosing uniformly on small blocks, not just to coinbase outputs  
**\<sarang>** We're certainly seeing outputs being selected with improper weighting based on block size, no doubt  
**\<xmrmatterbridge> \<worriedrise>** Coinbase outputs are just easy to spot, which is why people noticed them  
**\<sarang>** The numbers for output-lineup are much better on that  
**\<sarang>** My sim tool can provide those numbers  
**\<suraeNoether>** so, that's an interesting heuristic, actually, worriedrise, but i'm not too worried about it for the following reason  
**\<sarang>** e.g. how often are outputs in blocks of size X selected relative to their occurrence on the chain  
**\<xmrmatterbridge> \<worriedrise>** Yes, but we should check if further methods don't do that as well inadvertently  
**\<sarang>** What do you mean? We can check those numbers for all the proposed methods  
**\<sarang>** just run the sim tool, choosing your preferred selection method and preferred chain density condition  
**\<sarang>** (including the real chain)  
**\<xmrmatterbridge> \<worriedrise>** I believe we can. I was not sure we were  
**\<sarang>** Ah ok  
**\<sarang>** I added that functionality a week or two ago to the tool  
**\<sarang>** Feel free to run it if you want to play around with the results  
**\<sarang>** (link in agenda)  
**\<xmrmatterbridge> \<worriedrise>** Thanks. I hadn't seen it  
**\<sarang>** np  
**\<suraeNoether>** so, basically my primary lack of concern comes from variance  
**\<xmrmatterbridge> \<worriedrise>** How about for the actual blockchain, do we have that data?  
**\<suraeNoether>** if average ring use is <= 11 when we have a fixed ring size 11, the variance in use per output is going to be \*huge\* compared to 11  
**\<sarang>** worriedrise: that data meaning...  
**\<suraeNoether>** the power of that heuristic would be absolutely awful  
**\<sarang>** The chain density, or the frequency of selections based on poor weighting?  
**\<xmrmatterbridge> \<worriedrise>** Agreed. But we can see the problem with coinbase outputs. Maybe looking at the data we can see it with other outputs too  
**\<xmrmatterbridge> \<worriedrise>** The data of outputs use in the actual blockchain. Maybe you have that already  
**\<xmrmatterbridge> \<worriedrise>** Not just for the simulations  
**\<sarang>** I don't have data for how frequently outputs from small blocks are overselected  
**\<sarang>** I have data for how the current selection scheme performs under simulated selections from the actual chain  
**\<xmrmatterbridge> \<worriedrise>** That should be good enough for now. I am still curious though :)  
**\<suraeNoether>** we can chase heuristics all day long; let's move along for now  
**\<suraeNoether>** yeah  
**\<xmrmatterbridge> \<worriedrise>** Okay  
**\<suraeNoether>** worriedrise: nothing stopping you from compiling some data and taking a gander and seeing if any conclusions can be drawn  
**\<suraeNoether>** i'm in favor of more data, generally  
**\<xmrmatterbridge> \<worriedrise>** I don't know how to do that, but I will look into it and see what I can do.  
**\<sarang>** suraeNoether: anything else to report from your update?  
**\<suraeNoether>** nothing to report yet, although I suspect a draft of the matching paper is incoming some time this week (but i said that last week too)  
**\<sarang>** righto  
**\<sarang>** worriedrise/randomrun had an idea for making MLSAGs shorter: https://github.com/monero-project/research-lab/issues/52  
**\<sarang>** This has grown into an idea for general MLSAGs that applies a kind of key aggregation  
**\<sarang>** Care to comment or discuss worriedrise?  
**\<xmrmatterbridge> \<worriedrise>** Sure  
**\<xmrmatterbridge> \<worriedrise>** That is just something that seemed reasonable, but I have no security proofs at this time  
**\<suraeNoether>** for simple ringct transactions, the approach uses a Musig-style key aggregation with LSAG signatures to construct a RingCT, instead of using MLSAG signatures to construct RingCT. The overall size of the signatures are smaller, although verification time takes as much time (roughly) as previously.  
**\<xmrmatterbridge> \<worriedrise>** The idea is to use a hashed linear combination to aggregate keys  
**\<xmrmatterbridge> \<worriedrise>** into a single signing key  
**\<xmrmatterbridge> \<worriedrise>** Linkability is harder  
**\<sarang>** right  
**\<sarang>** at worst, it would require a new image format  
**\<sarang>** at best, a second image-style point, correct?  
**\<suraeNoether>** the unforgeability proof because of the structure of this, essentially boils down to a very similar proof to the proof of security for the thring signatures paper (https://eprint.iacr.org/2018/774.pdf)  
**\<suraeNoether>** linkability \*is\* harder  
**\<xmrmatterbridge> \<worriedrise>** Correct, but that may work well with the previous one  
**\<suraeNoether>** \*nod\*  
**\<xmrmatterbridge> \<worriedrise>** Have you been able to write down how that would work, without changing the key image?  
**\<sarang>** You mean the general form?  
**\<sarang>** I have not  
**\<xmrmatterbridge> \<worriedrise>** I would love to see that bc it would work for DLSAGs s well  
**\<sarang>** The specific initial form would work with the existing key image, by adding the second point as you mentioned in the post  
**\<xmrmatterbridge> \<worriedrise>** I see  
**\<sarang>** But I have only just started examining the scheme in detail today!  
**\<xmrmatterbridge> \<worriedrise>** Yes, but just for aggregating the amount component  
**\<xmrmatterbridge> \<worriedrise>** It seems to me that we need different sets of constants for different key images, as it stands  
**\<xmrmatterbridge> \<worriedrise>** But with the change to the key image, they all aggregate together  
**\<xmrmatterbridge> \<worriedrise>** The problem is that that doesn't work for DLSAGs as they are right now  
**\<sarang>** right  
**\<xmrmatterbridge> \<worriedrise>** Since their key images are not defined over a common point  
**\<xmrmatterbridge> \<worriedrise>** I am trying to see a way  
**\<xmrmatterbridge> \<worriedrise>** Would love suggestions :)  
**\<sarang>** It is a very clever idea regardless  
**\<xmrmatterbridge> \<worriedrise>** Thanks  
**\<sarang>** Once this meeting is over, I will be continuing to review it  
**\<xmrmatterbridge> \<worriedrise>** It still looks too good to be true. Please double chack that carefully  
**\<xmrmatterbridge> \<worriedrise>** Great  
**\<sarang>** Any questions for worriedrise on this?  
**\<sarang>** We will certainly continue to keep investigating it  
**\<suraeNoether>** Brief update on Konferenco: we are beginning to purchase travel tickets for speakers  
**\<suraeNoether>** tickets to the konferenco will be on sale soon(tm)  
**\<suraeNoether>** if anyone wants to submit an abstract, please don't hesitate! konferenco.xyz  
**\<sarang>** very excited!  
**\<suraeNoether>** we have a great lineup of speakers, and we need more!  
**\<sarang>** Perhaps we can convince worriedrise/randomrun :D  
**\<xmrmatterbridge> \<worriedrise>** I saw you will be in NY in May too  
**\<xmrmatterbridge> \<worriedrise>** Another conference  
**\<h4sh3d[m]>** What kind of speaker are you looking for?  
**\<suraeNoether>** we are having more speakers added later today, by the way; i believe we may have someone from the human rights foundation and/or an activist working in venezuela to come speak, and we are having the executive director at coincenter, Jerry Brito, come speak, too  
**\<suraeNoether>** h4sh3d[m]: any technical content related to monero or privacy enhancing technologies in general are welcome  
**\<suraeNoether>** we are having some speakers on the social impacts of these technologies too; scholarly work only, no ICOs, a gathering of intelleckshuals  
**\<suraeNoether>** basically: if you have an idea for an abstract, you may as well submit it  
**\<suraeNoether>** worriedrise: i will be at MCC yes  
**\<sarang>** lucky suraeNoether !  
**\<suraeNoether>** i have a feeling i'll be put to work organizing. :P  
**\<xmrmatterbridge> \<worriedrise>** Since we are talking about other technologies, what do you think of the idea of having monero addresses as Bitmessage addresses, as I proposed  
**\<xmrmatterbridge> \<worriedrise>** https://github.com/monero-project/research-lab/issues/51  
**\<xmrmatterbridge> \<worriedrise>** I saw that there is an issue with the order of encryption and authentication  
**\<sarang>** Seems clever if used correctly!  
**\<xmrmatterbridge> \<worriedrise>** But assuming we get over that  
**\<xmrmatterbridge> \<worriedrise>** Thank  
**\<suraeNoether>** yeah, it shouldnt' be too rough, i just haven't sat down and thought about it yet  
**\<xmrmatterbridge> \<worriedrise>** Would you care to explain what the problem is  
**\<suraeNoether>** the easy way to fix it is with a tailored key structure  
**\<suraeNoether>** okay, so basically  
**\<suraeNoether>** when you are encrypting and authenticating, you don't want to authenticate-and-then-encrypt, followed by verification-then-decryption  
**\<suraeNoether>** er.. followed by decryption-then-verification i mean  
**\<sarang>** (swap the latter version)  
**\<sarang>** yeah  
**\<suraeNoether>** this is a bad way to do things because you end up decrypting something without knowing who it came from  
**\<suraeNoether>** if, on the other hand, the ciphertext is signed by the authenticating key, you know whoever signed it approves of the ciphertext  
**\<suraeNoether>** so first you check the signature, then you decrypt  
**\<nioc>** no idea if it has any relevance but I believe it was rbrunner that was using bitmessage for his multisig scheme (MMS)  
**\<xmrmatterbridge> \<worriedrise>** What is wrong with not knowing who it came from?  
**\<xmrmatterbridge> \<worriedrise>** Can't you stablish that later?  
**\<xmrmatterbridge> \<worriedrise>** Once you see the key?  
**\<suraeNoether>** well, here's an example  
**\<sarang>** You wouldn't know if the encrypted message had been altered  
**\<suraeNoether>** of why the implementation is dangerous  
**\<xmrmatterbridge> \<worriedrise>** I would know that is was signed by the accompanying key. Are you saying I wouldn't know if the key was switched?  
**\<suraeNoether>** the extreme and silly example is "what if an app developer decrypts the ciphertext and starts executing it as code while checking in parallel that the signature is valid? then you are running arbitrary code without knowledge of what's in it or whatever." and this seems like it has an easy fix, right, is that the developer should be doing things in the other order...  
**\<xmrmatterbridge> \<worriedrise>** At first contact, I would just have to take wahtever key it was given, but from that point on, I would know whether further messges are signed by the same person  
**\<suraeNoether>** but actually, the answer is no, the encrypt/decrypt should be going in the other order so a bad developer can't make that mistake  
**\<suraeNoether>** this is using a silly but very malicious example  
**\<suraeNoether>** there are more harmless examples like sarang's mention that you don't know if the ciphertext is actually going to decrypt to the intended plaintext.  
**\<suraeNoether>** and to be frank, that's the root of the problem  
**\<moneromooo>** What is an app developer fails to check for signature check fail and starts executing the ciphertext as code ?  
**\<suraeNoether>** ciphertext is indistinguishable from white noise, so their code would do nothing with high probability :D  
**\<sarang>** what a ride that would be  
**\<moneromooo>** The ciphertext is under attacker control.  
**\<suraeNoether>** https://link.springer.com/chapter/10.1007/3-540-44448-3\_41 worriedrise this paper is pretty seminal in the area  
**\<xmrmatterbridge> \<worriedrise>** I see. I have to think more about that one. I wonder how that problem is handled in Bitmessage currently  
**\<suraeNoether>** moneromooo: ah yeah, that's true, but at that point your developer is merely executing random code it's received from an extra party  
**\<moneromooo>** That was what you assumed too :)  
**\<sarang>** In the interest of time, let's review action items and then continue further discussion  
**\<sarang>** I will keep talking with suraeNoether about output selection if he has additional thoughts/concerns, will review the MLSAG change in detail, and continue toying around with Lelantus  
**\<sarang>** and watch my funding request =p  
**\<suraeNoether>** hm moneromooo no, in my example, the developer decrypts first :D  
**\<sarang>** suraeNoether: your action items for the week?  
**\<suraeNoether>** 1) funding request, 2) monthly report for last month, 3) simulations, 4) dlsag security, 5) reduced mlsag security  
**\<suraeNoether>** oh and fun reading on parazoa  
**\<sarang>** Neato  
**\<sarang>** Any final questions or remarks before we formally adjourn?  
**\<sarang>** Thanks for joining us worriedrise today  
**\<xmrmatterbridge> \<worriedrise>** My pleasure. Thnks for having me  
**\<sarang>** Thanks to everyone for attending. We are now adjourned!    
