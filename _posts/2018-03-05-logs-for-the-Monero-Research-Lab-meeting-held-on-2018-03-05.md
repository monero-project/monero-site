---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-03-05
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>** howdy everyone~  
**\<endogenic>** hello  
**\<suraeNoether>** Agenda is, as usual: I describe what I've done for the past week or so, and field questions, and Sarang does the same. If anyone else is working on projects, we want to hear about other people's contributions, too!  
**\<suraeNoether>** at any time, feel free to jump in and ask questions  
**\<sgp\_[m]>** hey  
**\<suraeNoether>** if it gets too chaotic, we'll try to rein it in  
**\<suraeNoether>** oh fluffypony forgot him  
**\<sarang>** Shall we begin?  
**\<suraeNoether>** Yep. How about you go first, brother noether  
**\<sarang>** Sure  
**\<sarang>** The BP audit fundraising FFS is ready and in Open Tasks, waiting for an admin to move to Funding Required  
**\<sarang>** We're setting a stretch goal of 3 auditors, and will fund as many as we raise funds for  
**\<sarang>** Kudelski is pushing back on payment in XMR, but I'm trying to get them to work with OSTIF  
**\<sarang>** If they do, we can pay OSTIF in XMR and they'll convert to USD and pay the auditor  
**\<fluffypony>** FFS has been moved  
**\<sarang>** Thanks fluffypony  
**\<sarang>** Otherwise we have to ensure that we can legally do the exchange to USD and pay them ourselves  
**\<sarang>** As soon as we have enough XMR for Bunz, we'll hire him  
**\<sarang>** then QuarksLab, then Kudelski  
**\<sarang>** If we can't reach an arrangement with Kudelski, we can replace them with X41, which will work with OSTIF for payment  
**\<sarang>** Other than that, working on some Pippenger stuff for fast multiexponentiation, reviewed a few papers regarding RingCT  
**\<sarang>** Posted my monthly report on r/Monero  
**\<sarang>** Those are the big things!  
**\<suraeNoether>** nice. Does anyone have any questions?  
**\<rehrar>** hiya  
**\<rehrar>** We're now in Funding Required btw  
**\<sarang>** yup yup  
**\<rehrar>** oh, didn't see fp's comment there  
**\<sarang>** https://giphy.com/gifs/excited-ron-paul-its-happening-rl0FOxdz7CcxO  
**\<sarang>** I'll be working with each auditor throughout the process, so this will occupy an known amount of my time for the next couple of months  
**\<suraeNoether>** I have a question, sarang, which is: what are you excited to work on now that the bulletproof range proof audit stuff is going to be spread around a bit?  
**\<sarang>** ah yes  
**\<sarang>** I'm looking forward to doing a more thorough analysis of operation optimization in our current stuff and in proposals like RingCT replacements  
**\<sarang>** and interested in RingCT futures in general  
**\<sarang>** Now that the blockchain will be smaller and verifications faster, anonymity has been moving to the forefront  
**\<suraeNoether>** neat. that leads me to questions about multi-exp optimization in our current scheme  
**\<suraeNoether>** like, in general, it seems like all our EC operations could be made much more speedy  
**\<suraeNoether>** across the board  
**\<sarang>** Depends on what types of operations you mean  
**\<sarang>** Multiexp? Sure  
**\<sarang>** The precise way depends on the size of the operations and curvepoints involved  
**\<sarang>** There's no single silver bullet that's always better  
**\<suraeNoether>** ah i see  
**\<sarang>** Using a combo of Bos-Coster and Straus handles a lot of cases  
**\<sarang>** Pippenger is next up, based on results from andytoshi et al. on their curve  
**\<suraeNoether>** I'd be very curious to see how much faster MLSAGs can get with more efficient operations  
**\<sarang>** The nice thing is that multiexp is probably biggest opportunity for savings, since the current scaling is so bad  
**\<sarang>** I'm pretty much done if someone else wishes to speak now  
**\<sarang>** I just like listening to the sound of my own keyboard  
**\<suraeNoether>** Well, this past week I got the multisig paper to the point where I am seeking feedback/corrections from community members. You can read the current version (main.tex) here. https://www.sharelatex.com/read/bfjfkdgnhgvh  
**\<suraeNoether>** I am confident that the bones of the thing are correct, but details need to be fleshed out  
**\<suraeNoether>** the C++ code appendix must still be reviewed  
**\<suraeNoether>** so i'm not seeking feedback on the appendix yet: i know it's wrong, and I have a list of ways its wrong  
**\<sarang>** There were a few rumblings on whether or not we'd like to take this audit momentum and keep applying it elsewhere, like to multisig  
**\<sarang>** Thoughts?  
**\<rehrar>** \*cough\*RingCT?\*cough\*  
**\<sarang>** I believe it'd be good for security and also excellent PR  
**\<sarang>** Ha yes rehrar that was also brought up for sure  
**\<suraeNoether>** I didn't know there were rumblings on that. i think a weak point of my presentation is the C++ code review, for sure  
**\<sarang>** informal rumblings  
**\<suraeNoether>** i actually think I have a pretty clever proof structure that I'm attempting this afternoon that may make things even smaller  
**\<rehrar>** rumblings sans top hats  
**\<andytoshi>** re BPs. in libsecp we use strauss then pippinger. we changed our prover from doing the recursive scheme to one that directly computes L and R with a big multiexp at each iteration, and got an almost 2x speedup  
**\<suraeNoether>** but, again, that's the \*theoretical\* end of the review  
**\<suraeNoether>** andytoshi dayumn brother  
**\<sarang>** andytoshi: nice!  
**\<andytoshi>** i think i can get a bit more by combining generators at some levels  
**\<sarang>** We did basically zero optimizations to the prover, since that's done once  
**\<sarang>** suraeNoether: auditing the implementation would be key  
**\<suraeNoether>** if we have money left over from the BP audit, I would be happy sitting on the leftover XMR for a month to see if we can get an audit of multi-ringCT out of a single funding round  
**\<sarang>** I very much doubt we'd have enough to fund another complete audit  
**\<sarang>** Might depend on price movement  
**\<suraeNoether>** eh, who knows where the market will be in a month  
**\<suraeNoether>** rihgt  
**\<suraeNoether>** that's all i'm saying  
**\<sarang>** But we could combine leftovers with a new FFS and ride the wave of support for audits  
**\<suraeNoether>** after reading through the C++ code, the only real complaint I had was to increase the # of rounds of chacha encryption  
**\<suraeNoether>** on another note, I'm writing up a brief technical note on sublinear ring signatures.   
**\<suraeNoether>** and why we haven't implemented them yet  
**\<suraeNoether>** or, to be more specific  
**\<suraeNoether>** The idea is this: (i) small anonymity sets are worse than large anonymity sets, (ii) authentication still requires touching all keys in the anonymity set at least once, leading to linear verification times, and (iii) improving the space-efficiency of a blockchain therefore interacts with this linear verification time in a way that produces a space-time trade-off, leading to (iv) a trade-off between  
**\<suraeNoether>** traceability and the space-time efficiency of the blockchain... and I want to discuss (v) several ways that several different currencies have handled this trade-off, and (vi) implications from cost of running an untraceable cryptocurrency network at scale on this time-space trade-off.  
**\<suraeNoether>** Other than working with sarang to get the multisig paper up to peer review shape, soliciting comments from the community on that, and working on this trade-off technical note, I've also been reading papers like Sarang.  
**\<sgp\_[m]>** What other currenices of notehave handled this tradeoff with ring signatures?  
**\<suraeNoether>** none, but other currencies have hadnled it without ring signatures, i.e. zcash  
**\<sarang>** The tradeoff I see is a replacement with proof structures requiring trusted setup  
**\<sarang>** yeah ^  
**\<sarang>** There was a paper out with suggestions for Monero, but they too involved a trusted-setup accumulator  
**\<sarang>** (and this fact was buried within the paper....)  
**\<andytoshi>** yeah, trusted setups are often really hard to find in papers  
**\<andytoshi>** academics seem to think it's not an important thing  
**\<andytoshi>** some academics\*  
**\<sarang>** I was surprised since the paper was specifically about Monero  
**\<sarang>** And our views on trust are pretty clear  
**\<andytoshi>** yeah that's weird  
**\<sarang>** I expect that's \_why\_ they buried it  
**\<andytoshi>** :|  
**\<sarang>** anyhoo  
**\<sarang>** suraeNoether: carry on...  
**\<suraeNoether>** So, papers: 1) Matthew Green shared his "squeezing crowds" paper, which is a constant-space way of describing the complete set of ring members in a transaction. Link here: https://isi.jhu.edu/~mgreen/mixing.pdf This is a non-trivial result that will help Monero scale eventually... but it solves a problem that isn't yet a problem and may not be for a long while  
**\<rehrar>** that new paper by Green?  
**\<suraeNoether>** great minds brother  
**\<sarang>** I know moneromooo had some concerns about transaction height in general  
**\<sarang>** but I can't speak for him  
**\<rehrar>** Does it have drawbacks if it was theoretically implemented tomorrow (i.e. not large ringsizes yet)?  
**\<moneromooo>** Oh that wasn't about the paper itself, just general about when I thought about this.  
**\<sarang>** right  
**\<sarang>** I'm working through the Green paper as well  
**\<suraeNoether>** rehrar literally all it does is \*describe the public keys for use in the signature.\* you still need to pull the public keys out of the blockchain and plug them into the verification equation.   
**\<moneromooo>** But in retrospect, if you include the height at which you make the sampling, it all goes away.  
**\<suraeNoether>** so this own't help us get larger rings.  
**\<moneromooo>** Given fake out list size is not our bottleneck, no. Maybe later.  
**\<sgp\_[m]>** Can you elaborate a little more on what the paper says?  
**\<suraeNoether>** sure, so they define a Recoverable Sampling Scheme  
**\<sarang>** It says you can use a keyed hash function to succinctly describe the ring members to be used in a transaction  
**\<suraeNoether>** so, say you want to construct a ring {A, B,  C}  
**\<suraeNoether>** rather than sending keys A, B, and C along with the transaction, you send information for constructing a hash function  
**\<suraeNoether>** if you compute a quick hash of the blockchain using that information, out pops the keys you want to use in the ring signature  
**\<luigi1111>** Sender grinds or what  
**\<sgp\_[m]>** All right, with you so far. Why does this have relatively small impact?  
**\<suraeNoether>** and their approach scales with the number of outputs, not the number of inputs. So \*describing\* a transaction with 1000 ring members and five outputs is 99% more efficient with an RSS than with our current scheme  
**\<suraeNoether>** but you still need the signature  
**\<suraeNoether>** and yous till need to verify it  
**\<suraeNoether>** and verifying the signature takes O(N) time. in this case, with 1000 ring members, it's implausible  
**\<suraeNoether>** well except for weirdos  
**\<moneromooo>** Should not need to grind, make a random + offset should be enough.  
**\<suraeNoether>** in general, you need ring sizes around 10-15 before the RSS scheme actually saves space  
**\<suraeNoether>** one may consider it a database trick for accessing keys efficiently, perhaps, rather than a privacy-enhancing thing  
**\<suraeNoether>** unless i've wholly misunderstood their paper  
**\<luigi1111>** Hmm moneromooo but that doesn't sound like a hash function  
**\<luigi1111>** Anyway doesn't matter  
**\<sgp\_[m]>** ok, thanks for the info  
**\<suraeNoether>** yeah  
**\<suraeNoether>** SO  
**\<sarang>** Yes suraeNoether it's just about descriptors for bandwidth savings over large sample sets  
**\<sarang>** and the use of a hash function means they get proofs of security out of it  
**\<sarang>** not privacy  
**\<suraeNoether>** in addition to that, I've been reading about arithmetic circuits, idly tinkering with my cryptocurrency network simulation tool, thinking about large anonymity sets  
**\<suraeNoether>** but Sarang and I kind of have an announcement, I guess. We are starting an educational non-profit called Multidisciplinary Academic Grants in Cryptocurrency. Our primary goal will be to provide scholarships to students, research grants to researchers, and infrastructure grants to schools.   
**\<rehrar>** whoa. And this is a 'separate from MRL' type thing?  
**\<sarang>** Legally separate, yah  
**\<suraeNoether>** yep. The original idea was to start a pipeline between the research world and the cryptocurrency world  
**\<binaryFate>** Nice! Do you see possible ties to the Monero FFS for scholarships and grants?  
**\<sarang>** We'll get the benefits of being a U.S. registered nonprofit  
**\<sarang>** binaryFate: abso-freaking-lutely  
**\<suraeNoether>** See, after attending several schools that seemed so resistant to cryptocurrencies, I think it's a shame that a lot of students won't be getting a decent education in cryptocurrencies, especially when we're talking about the future world economy  
**\<suraeNoether>** and after speakign with fluffypony and a partner in South Africa, I realized... like... for the cost of a year of college here in the US, that's... an entire schoolteacher's salary in South Africa  
**\<suraeNoether>** Chile has a similar situation going on  
**\<binaryFate>** cool idea  
**\<suraeNoether>** and if we can manage to encourage education in financial privacy, improve cryptocurrency literacy, etc etc, these are all good things for the economy as a whole...  
**\<sarang>** It also has the side benefit of helping Monero's image  
**\<sarang>** and letting community members give back in a different way  
**\<suraeNoether>** and not to mention: Monero's image as a contributor to education would be an extremely valuable thing for the future of Monero, in terms of development, interest, research, etc. HOW COOL will it be when the first principal investigator who received a MAGIC grant gets tenure or gets an award for a paper they wrote while being funded by us?  
**\<suraeNoether>** ha  
**\<suraeNoether>** again, great minds  
**\<sarang>** jinx  
**\<binaryFate>** Missed "MAGIC". Just do it already! :)  
**\<sarang>** The idea is that it's legally not tied to Monero (to keep things simple) but can be heavily funded anonymously by Monero community members  
**\<sarang>** and the 501(c)(3) structure will help integrate with institutions and schools better than some random group  
**\<sarang>** kudos to suraeNoether for doing all the legwork on this  
**\<sarang>** I'm just along for the ride  
**\<sarang>** binaryFate: yeah, MAGIC internet money...  
**\<sarang>** Worth noting for the scrupulous among us that donations may be tax-deductible if you're in the U.S.  
**\<suraeNoether>** Thing is, if you go visit a college campus, you'll notice something: the really sweet campuses, the beautiful ones, the country-club campuses... those are the ones that get funding from alumni. you would think that schools that are dumps, the president house is on fire and the dorms are rioting, these are the schools that should get funding. not how it usually goes. i would love it if MAGIC started  
**\<suraeNoether>** funding folks to go to community college and some of those folks ended up building world-changing stuff out of Monero.  
**\<suraeNoether>** and I would love it if the Monero community was responsible for building a library for some disadvantaged kids in south africa. :P  
**\<suraeNoether>** Not to mention, this gives us a legal vehicle to fund academic conferences for Monero  
**\<sarang>** ^^ yesss  
**\<suraeNoether>** So, that's the educational outreach "secrets in the works" that I've been keeping under my hat for a few weeks  
**\<sarang>** It definitely felt like accepting anonymous crypto to fund a nonprofit would rile up the government, but apparently not if you do it correctly  
**\<rehrar>** accept XVG?  
**\<sarang>** -\_\_\_\_\_-  
**\<sarang>** sure  
**\<suraeNoether>** Currently we have a partner in ZA and a partner at Clemson University who are interested in being board members, for the two very different ends of the spectrum  
**\<suraeNoether>** I am filing the paperwork to incorporate today  
**\<sarang>** MAGIC doesn't need to GAF about crypto politics  
**\<sarang>** If someone wants to donate to help students, awesome  
**\<sarang>** too bad zcash just announced their grant program too  
**\<sarang>** we want the spotlight =p  
**\<rehrar>** well that's all super cool. Glad that you guys are doing awesome things.  
**\<suraeNoether>** Oh, and one last thing: this paper was just put out only a few days ago. Has anyone read it yet? https://eprint.iacr.org/2018/241  
**\<rehrar>** easy sarang. Just make your grant program more grant-ier  
**\<rehrar>** and have free pizza. Spotlight all yours.  
**\<sarang>** suraeNoether: I have not yet  
**\<sarang>** Naturally suraeNoether will also be on the board?  
**\<andytoshi>** oof neha asked me to read that quite a while ago (before publication) and i forgot  
**\<suraeNoether>** ok, well is anyone else working on anything interesting they want to share? andytoshi i know you aren't a direct MRL contributor, but I'm certainly curious about what yall have been up to  
**\<andytoshi>** BP optimizations mainly  
**\<sarang>** I think he puts blocks into a stream or something  
**\<andytoshi>** lol  
**\<sarang>** but in very efficient ways  
**\<andytoshi>** i implemented an optimization from benedikt where we do one less recursion (so we expose two more scalars but save one L/R pair so it's a wash)  
**\<andytoshi>** this gives us a ~8% speedup in batch verification of single-range rangeproofs  
**\<sarang>** andytoshi: that's the one you discussed with me earlier?  
**\<andytoshi>** yeah i think so  
**\<rehrar>** So, I obviously have zero idea about this, but how long does an audit take to do?  
**\<sarang>** We're looking at up to a month each  
**\<sarang>** but the times overlap  
**\<rehrar>** Right.  
**\<sarang>** maybe a little more, maybe a little less  
**\<rehrar>** I ask this for two reasons, 1. for BP audits  
**\<rehrar>** but 2. what would it look like to devote a bit of MRL time to help audit codebases of other security-focused projects in the privacy space  
**\<rehrar>** i.e. Veracrypt, KeepassXC, etc.  
**\<rehrar>** it may not be at all feasible, obviously. But just thought I'd ask  
**\<sarang>** That's a huge undertaking  
**\<rehrar>** That's what I figured.  
**\<sarang>** and I think it's outside the scope of our intent  
**\<sarang>** Plus we're hardly an independent group  
**\<sarang>** so our results might be viewed as inherently biased  
**\<sarang>** That's really what groups like OSTIF are for  
**\<sarang>** Organizing audits of important tech  
**\<sarang>** (and it's why we're working with them now)  
**\<rehrar>** ok :)  
**\<sarang>** We're approaching the end time, and suraeNoether had to leave a bit early  
**\<sarang>** Any other topics of interest to bring up?  
**\<sarang>** OK!  
**\<sarang>** Thanks to everyone for joining in  
