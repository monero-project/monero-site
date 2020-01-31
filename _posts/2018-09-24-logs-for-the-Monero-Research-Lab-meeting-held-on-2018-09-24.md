---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-09-24
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<oneiric\_>** thanks for the ping :)  
**\<scoobybejesus>** 👍  
**\<binaryFate>** hi  
**\<dEBRUYNE>** hi  
**\<vtnerd>** hi  
**\<MoroccanMalinois>** hi  
**\<rehrar>** heyo  
**\<suraeNoether>** allrighty  
**\<suraeNoether>** Now that greetings are out of the way  
**\<suraeNoether>** as usual, we are basically just going over what we've done last week and what we want to go over this week, and to open up the table for questions and suggestions  
**\<suraeNoether>** but today i want to reverse the usual order  
**\<nioc>** hmmm  
**\<suraeNoether>** i want people who have questions or suggestions to be able to speak up at the beginning  
**\<suraeNoether>** so they don't have to sit around hearing about groups etc before they are allowed to give us their thoughts  
**\<suraeNoether>** nioc i knew i forgot at least one person :D sorry  
**\<nioc>** np my comment was about the order  
**\<suraeNoether>** so. \*crosses legs\* who has some thoughts for the MRL guys?  
**\<sarang>** Anyone? Bueller?  
**\<oneiric\_>** are cancellable signatures possible with monero?  
**\<nioc>** I see that the BPs were just tweaked,  are we all set now?  
**\<silur>** you mean (un)denyable signatures?  
**\<silur>** \*(un)deniable  
**\<oneiric\_>** I mean, one is part of a multisig, but before the multisig is fully signed, can one cancel their part of the multisig?  
**\<sarang>** nioc: a verification tweak, for a belt-and-suspenders approach to curve points  
**\<suraeNoether>** oneiric\_: i don't think cancellability in the way you describe it is particularly necessary...   
**\<suraeNoether>** if you bail on a multisig signing?  
**\<suraeNoether>** no information is leaked; there may be a record of your communication between the other signers, though, and that's really the more dangerous part of things, from the point of view of IRL opsec  
**\<oneiric\_>** ok, how else would you bail out after initially signing?  
**\<suraeNoether>** and there isn't anything in the protocol that prevents you performing the multisig signing ceremony in a "bad" way, if htat makes sense  
**\<suraeNoether>** you just stop  
**\<suraeNoether>** if you mean "i want to retract a signature that has already been computed," I don't think that... is... practical...  
**\<oneiric\_>** adds too many moving parts?  
**\<suraeNoether>** uh, well, if it's already computed and can later be revoked  
**\<endogenic>** maybe a type of tx which has two stages of confirmation.. during first stage, it could be canceled with another tx by same signer?  
**\<suraeNoether>** if it's already computed and later can be revoked, does this mean you need a revocation signature in a later block that refers to the original signature? etc. i'm not sure exaclty how all of it would work  
**\<suraeNoether>** and i'm not sure what the use case would be  
**\<suraeNoether>** generally we want our transactions to be signed and done, for finality and liveness reasons  
**\<suraeNoether>** retracting a transaction that you've already executed... I imagine that's maybe something that \*could\* be done on a lightning like system between honest parties without issue  
**\<suraeNoether>** i can't think about how to implement it on the base layer without a lot of problems  
**\<oneiric\_>** revocation would happen before tx is fully signed, use-case is for an automatic funding of an FFS wallet  
**\<sarang>** there was a similar suggestion for a 2-of-3 with a trusted mediator  
**\<suraeNoether>** ah; in that case, if you don't want to make the transaction, just \*don't finish signing it.\*  
**\<suraeNoether>** if you already pre-signed it and haven't broadcasted it, then don't broadcast it and delete it  
**\<suraeNoether>** if it's already broadcast? don't... don't do that?  
**\<oneiric\_>** ok that makes sense. my thinking on this might not be the clearest. was thinking of people signing multisig to show support, but if something changes their mind before the tx is complete, being able to revoke their part of the signature  
**\<endogenic>** people could show support by posting proof of funds  
**\<suraeNoether>** ah, yeah, that's not necessary; their pre-signatures or partial signatures can't be used to construct a complete signature, so you show your initial support by participating in the first round of interaction, and you revoke your support, so to speak, by not participating in the second round of interaction  
**\<oneiric\_>** oooo, that's way smoother, thanks suraeNoether :)  
**\<suraeNoether>** i can think of another case, though, that could be helpful, and i'm going to state it so we start percolating on the idea in the back of our heads  
**\<silur>** this might actually introduce some problems on blockchains  
**\<suraeNoether>** let's say you relay a new transaction that can't be mined for 1440 blocks, and has a locktime of 2880 blocks, so that the soonest it can be mined is tomorrow and the soonest it can be spent is the day after... should someone be able to broadcast a revocation of that transaction in the next 1440 blocks so that miners don't include it? the answer, I think, is yes, this is possible, but I also think that there  
**\<suraeNoether>** isn't a good way to \*enforce it.\*  
**\<suraeNoether>** so it'd be, at best, asking miners politely to not mine the transaction  
**\<suraeNoether>** there could be some workarounds maybe, but we'll think about it and move onto other topics  
**\<suraeNoether>** nioc had a question on the BP tweaks, but sarang you didn't mention if we anticipate more tweaks or not  
**\<suraeNoether>** you just said what they were  
**\<sarang>** I don't anticipate others  
**\<suraeNoether>** cool  
**\<suraeNoether>** anyone else have any other questions?  
**\<endogenic>** does it make sense to do questions also after updates given?  
**\<sarang>** sure  
**\<suraeNoether>** cool. Last week I worked more on my Fulmo Network (lightning in esperanto) paper, and I anticipate making it available for public perusal later this week or early next week... I read through Sarang's DLSAG paper, which is important to the Fulmo paper, and I'm going through donut and Pedro Moreno-Sanchez' similar paper (in prep, but we got an early copy earlier this year)  
**\<suraeNoether>** I'm intending on reading hte M/N multisig thing; I haven't gotten to Silur's slides for HPCC yet  
**\<suraeNoether>** (I'm so sorry)  
**\<silur>** np, I had help from sarang  
**\<suraeNoether>** I also have had some lovely conversations with Dr. Shuhong Gao at Clemson University regarding the possibility of some informal collaborations between MRL and Clemson in the future, which would be fun and great  
**\<sarang>** nice  
**\<endogenic>** coolio  
**\<oneiric\_>** right on  
**\<suraeNoether>** I also am waiting on a few more quotes from  venues for the Monero Konferenco, named by rehrar (I kind of like Monero in the Mountains, or Ring Signatures on the Rockies, but tbqh, Monero Konferenco has a Mortal Kombat feel to it, and I kinda love it)  
**\<suraeNoether>** The remainder of this week? More DLSAG, more fulmo, more research into accumulators... OH OH OH  
**\<suraeNoether>** I also have a question for the community, but I'll wait until Sarang has gone and anyone else who wants to contribute  
**\<oneiric\_>** dun dun dun dada dun.. Monero Kooooonferenco!!  
**\<sarang>** Sure  
**\<endogenic>** can we pls work in some lotr references like Council of Elrond?  
**\<suraeNoether>** NO  
**\<sarang>** Wrote up a draft of a tech note on generalizing our knowledge about provably spent outputs  
**\<sarang>** mainly because it covers several other ways we test for this, and shows why it's a hard problem (for us and adversaries)  
**\<sarang>** Tweaking the DLSAG stuff based on suraeNoether's comments (and his desire to work the foundations into his work)  
**\<sarang>** There was a late tweak to BPs to handle some ways we were doing a scalar conversion that were subtly incorrect  
**\<spaced0ut>** oneiric\_, always dressed and ready for Mortal Kombat  
**\<sarang>** Also: I was asked to present on attack surfaces and privacy research at a Kyiv hackathon... wondering the group's thoughts on me taking like 5-6 days to do this  
**\<sarang>** I like the hackathon approach to getting the word out  
**\<oneiric\_>** that sounds like a very cool thing  
**\<sarang>** Yeah, it's a big time investment but fortunately I work remotely anyway, amirite?  
**\<suraeNoether>** will you be needing financial support for it, or would those organizers be compensating you?  
**\<nioc>** https://forum.getmonero.org/7/open-tasks/90857/sarang-re-present-at-kyiv-hackathon  
**\<sarang>** They're compensating flight and some hotel. With local transportation, M&IE, and hotel, it'd run about 9 XMR community funding  
**\<nioc>** cheap  
**\<suraeNoether>** oh hehe  
**\<sarang>** Would be nice to reach out to that part of the world, getting technical folks thinking about and hacking on Monero  
**\<sarang>** Anyway, open to comments  
**\<sarang>** it'd be in a couple of weeks  
**\<endogenic>** do you know anyone there?  
**\<sarang>** I believe msvb is also speaking there about hardware  
**\<sarang>** This group actually approached us at our defcon village  
**\<silur>** oh this reminds me, david chaum will be present at HCPP  
**\<silur>** \*\*shittin' brix\*\*  
**\<oneiric\_>** seriously?! so excite!  
**\<suraeNoether>** Sarang and I were curious about whether the community would want to fund us for the Berlin conference, but I'm having a hard time finding the website. i'll bring it up next week  
**\<sarang>** I don't think I'll be doing Berlin  
**\<sarang>** I'm all traveled out  
**\<suraeNoether>** Does anyone else have any projects they want to discuss?  
**\<sarang>** and the timing is not great  
**\<sarang>** I'm working on some other minor stuff about curvepoint checking  
**\<sarang>** small optimization stuff  
**\<endogenic>** dang, i wanna go surae  
**\<silur>** I got into a spaghetti of proofs on my quantumVRF not much advance there  
**\<endogenic>** i'll keep an eye out  
**\<suraeNoether>** Another bit of work; sgp and I are contributing to a friend's educational outreach project. the idea is to provide a privacy breakdown of all the different privacy coins out there, at a level that someone with some computer science and/or math experience can understand, but without requiring a Masters or PhD to get  
**\<suraeNoether>** I'm not sure exactly how public that is, but I plan on putting a few hours into some writing on that later this week, especially in the Monero sections  
**\<endogenic>** nice  
**\<sarang>** oh interesting  
**\<sarang>** Well I take it there's no big opposition to speaking to Kyiv  
**\<vegasbaby>** It would be great to see an honest and even approach to comparing the major privacy currencies  
**\<suraeNoether>** oh, sarang, I'm sorry, I didn't mean to switch topics; I got the sense that no one in the room objected  
**\<suraeNoether>** but I'll stfu for a moment  
**\<sarang>** Heh no, I think people were done commenting  
**\<endogenic>** it's a risk..  
**\<sarang>** ?  
**\<endogenic>** but i dont think anyone objects to the benefits  
**\<sarang>** Risk in what way  
**\<rehrar>** you could be hit on  
**\<sarang>** Oof  
**\<sarang>** A risk worth taking I'm sure  
**\<endogenic>** well, suppose you traveled with a partner…i think it's reasonable to say you'd be safer  
**\<sarang>** That isn't the case tho  
**\<suraeNoether>** you can always be \*safer\* by staying home  
**\<suraeNoether>** anyway  
**\<oneiric\_>** is Kiev that dangerous?  
**\<suraeNoether>** my understanding is that kyiv has very low levels of violent crime except when alcohol is involved. :P  
**\<binaryFate>** I was there, in general it's ok. But there has been a case of a CEO of a crypto company kidnapped for a ransom  
**\<sarang>** Well I'm not overly concerned  
**\<sarang>** From what I've heard  
**\<sarang>** I'm a lowly mathematologist  
**\<rehrar>** sarang you need to let me know about the cards so I can get you necessary files before you go  
**\<sarang>** Just a mere scientician  
**\<IsthmusCrypto>** \<\< opens FFS page to fund a bodyguard for @sarang in Kiev >>  
**\<IsthmusCrypto>** @suraeNoether - that document sounds great, and I'm looking forward to reading it. I love to see cross-project collaborations like these. Building bridges and knowledge sharing makes everybody stronger.  
**\<sarang>** Should I request the FFS get opened for that event travel?  
**\<suraeNoether>** i belive you should, sarang  
**\<sarang>** It's quite new but the event is soon  
**\<crCr62U0>** Are there any longterm research tasks that can be done by independent individual except find some vulnerabilities & exploit them?  
**\<sarang>** Hark! Requesting eventually FFS migration  
**\<sarang>** Yes  
**\<endogenic>** what if sarang were held for ffs ransom? :P  
**\<rehrar>** sarang: checking with Devin no about migration. He's doing a lot of good work. QR codes will be implemented, an API, and more  
**\<endogenic>** i know i would donate  
**\<endogenic>** crCr62U0: yes absolutely  
**\<vegasbaby>** wait what  
**\<vegasbaby>** Donations for FFS rework?!?  
**\<vegasbaby>** Plz let me give my money :D  
**\<suraeNoether>** okay, last topic I want to discuss is... a little out of the blue, and Sarang and I want some input from the community regarding a Conflicts of Interest Policy for MRL, or some sort of ethics policy....  
**\<suraeNoether>**  We really bend over backwards to state in our papers that our research is paid for in Monero, for the same reason that doctors funded by pharma companies \*are ethically obligated\* to disclose those conflicts of interest.  
**\<suraeNoether>** However, as everyone is aware, there is an epidemic of unethically plausible reporting.  
**\<suraeNoether>** We see very often  that Coin X is being described in Magazine Y, and they interview researchers P, Q, and R, some of whom are paid in Coin X, and this conflict is not described in the article.  
**\<crCr62U0>** I'm asking about longterm in order to have time to learn something; It's difficulty to be successful in shortterm tasks due to lack of experience and mind abilities.  
**\<suraeNoether>** we suspect that putting out such a policy, even though it is totally nonbinding, since we are a headless entity with no authorities... we think that putting out such a policy would goad other coins to do something similar, to put out their own ethics policies  
**\<crCr62U0>** \*to be competitive(successful) among others  
**\<suraeNoether>** crCr62U0: your question about research tasks that the community can contribute to... let's get back to that in a moment. we are overflowing with problems to solve and infrastructure in the coding department that would make our research lives easier  
**\<endogenic>** crCr62U0: yes, to contribute you need to know a little about monero first, then you'll find some problems there. one of them is replacing ringsigs with something better than zksnarks  
**\<endogenic>** suraeNoether: sounds good to me  
**\<suraeNoether>** so if you need something to do, we can definitely point you in a direction none of us currently have time for :D  
**\<binaryFate>** suraeNoether it's a great idea. Regardless of what other coins are doing, making the ethic already there in Monero/MRL more visible and clear to the outside world is a net positive.  
**\<suraeNoether>** i agree, binaryFate   
**\<sarang>** As to research, it's problematic  
**\<sarang>** There's a big learning curve to do big bluesky work  
**\<sarang>** but there are smaller projects that someone doesn't have to be a broad expert to complete  
**\<sarang>** or at least participate in  
**\<sarang>** e.g. I'd love to abstract more of our cryptographic functions properly so we can move to more standard and tested libraries  
**\<suraeNoether>** can we talk about the never-ending list of to-do in a moment? it's a big list  
**\<sarang>** sure  
**\<suraeNoether>** okay, so my question to the community is  
**\<IsthmusCrypto>** @suraeNoether I hadn't thought about the disclosure before, and I think you have a good point. And while the headless entity cannot enforce it, it does protect the headless entity.  
**\<IsthmusCrypto>**  In the unlikely case that some Monero dev or researcher presents unethically without full disclosure, we can point to that as a violation of community policy. Meaning that the person was communicating in a sketchy way, and not the community acting in a sketchy way.  
**\<sarang>** It also helps guide other projects to the same idea, I hope  
**\<sarang>** and is a statement about our intent to do honest work  
**\<suraeNoether>** so my question to the community is simple: what do we want to see in our ethics policy?  
**\<sarang>** I think the biggest thing is disclosure of funding specifically tailored around research/dev for Monero  
**\<sarang>** e.g. "Sarang Noether receives Monero community funding, paid in XMR, to do full-time R&D for the Monero Research Lab, a workgroup of the Monero Project"  
**\<suraeNoether>** i think MRL researchers should not go off and start their own coins while working at MRL, even if they do so fairly  
**\<sarang>** ehhhhh  
**\<sarang>** should it be that broad?  
**\<sarang>** What are our ultimate goals for it?  
**\<silur>** woopsie  
**\<endogenic>** that seems a little over reaching to me  
**\<endogenic>** i think at the last it has to require disclosure of material facts  
**\<endogenic>** at the least  
**\<suraeNoether>** maybe not, but my goal in that regard is: i don't want someone claiming they work for/at MRL while they are shilling/pumping their own project  
**\<sarang>** I would care to know if a Monero researcher does have their own coin  
**\<suraeNoether>** okay, if we stick with disclosure, i'm cool with that, too  
**\<suraeNoether>** maybe  
**\<silur>** oh yea that policy was actually active in ethereum foundation too  
**\<sarang>** I think it's all about keeping people informed  
**\<suraeNoether>** i don't know  
**\<sarang>** silur: linky?  
**\<endogenic>** if facts are visible then the community can handle things on their own  
**\<silur>** to the policy mail? :D  
**\<sarang>** I like that people don't need to question our motives for doing this. And I think the policy should continue to reassure people of this  
**\<sarang>** silur: yeah, or whatever the policy is  
**\<sarang>** I know nothing about it  
**\<silur>** I don't know whether ming (that time she was our CEO) published it anywhere  
**\<sarang>** Do we know what other projects are doing?  
**\<sarang>** Maybe that's a start before drafting our own  
**\<silur>** we just received collectively a mail about that  
**\<sarang>** See what's out there, if anything  
**\<sarang>** Take what we like from it, avoid what we don't  
**\<sarang>** I don't want fall into the "not invented here" trap. Let's build on it  
**\<IsthmusCrypto>** This is very thought provoking conversation. I don't think a hard ban is quite appropriate - and I don't mind if one of the MRL researchers makes small contributions to other currencies as long as it's not interfering with completion of MRL duties. (see building bridges comment from earlier). But there should be some constraints/transparency.  
**\<silur>** I'll look it up sarang  
**\<sarang>** Well, and researchers \_do\_ collaborate  
**\<sarang>** We don't want to discourage that  
**\<sarang>** We should encourage it, with disclosure  
**\<IsthmusCrypto>** And I do like the ideas in the brief example statement from @sarang regarding conflict of interest disclosure. I think that "supported by funding from the Monero community" is more important than "paid in Monero"  
**\<sarang>** IsthmusCrypto: agreed  
**\<sarang>** generally  
**\<silur>** totally agreed  
**\<suraeNoether>** agreed on that too  
**\<sarang>** I don't even care about constraints. If the community doesn't like what the disclosure implies about someone's conflicts, that's up to them to decide  
**\<sarang>** But give people open information so they can decide for themselves how to interpret someone's motives or actions, eh?  
**\<rehrar>** My recommendation to you both would be to draft a document and present it to the community rather than trying to do something by community design  
**\<sarang>** Yeah, based on what we know from elsewhere  
**\<rehrar>** And if there are high quality suggestions to be added, they will filter to the top  
**\<sarang>** We're surely not the first open-source project to consider this  
**\<rehrar>** use your best judgement and include what you think should be there. The community can fill in gaps after it is proposed  
**\<sarang>** righto  
**\<silur>** basically EF did it in a way that it was okay to do advising and help in other coins under your own name but only that  
**\<rehrar>** in the end, MRL is its own workgroup, and is free to set its own internal rules  
**\<silur>** so the whitepaper shouldht have \_MRL member\_  
**\<silur>** it worked quite well  
**\<suraeNoether>** rehrar: I've been working on the draft for a few days, and I wanted to seek input to see if a high signal-to-noise ratio on a specific topic floated during the discussion before the document is really ready to show off to people  
**\<endogenic>** "MRL is its own workgroup" <<<  
**\<sarang>** Well, that's another question entirely  
**\<sarang>** there's no legal status to MRL... anyone can claim to be "part of it"  
**\<silur>** sounds quite contradicting from me for I violated that policy ^^"  
**\<rehrar>** I had spoken with sarang a bit about formalizing the MRL a little bit, just so random people can't nab the name "MRL Researcher" and use it on stuff when they don't contribute  
**\<endogenic>** i don't think so sarang  
**\<sarang>** endogenic: they can, it's only based on reputation really  
**\<sarang>** and participation  
**\<sarang>** and that reputation is basically all internal to the project  
**\<endogenic>** i mean no legal status  
**\<rehrar>** this arm of Monero is honestly the one that would be under the most scrutiny apart from the coding, so I think it's quite important  
**\<IsthmusCrypto>** (that reminds me, I will be uploading meeting notes once I get a break from a current metaphorical tsunami at work)  
**\<endogenic>** historically, the community has either hired Noethers directly or the Noethers have published something for monero that the rest of the Noethers agree on .. is that incorrect anywhere?  
**\<endogenic>** i would have to speak to an attorney or two about legal status, copyright, etc  
**\<suraeNoether>** endogenic: no, I had almost zero interaction with shen regarding ringct. :P MRL is even more headless than your description  
**\<sarang>** At the very least, we have no formal guidelines for putting "Monero Research Lab" as a title/tagline  
**\<endogenic>** yeah but who published his paper on MRL  
**\<suraeNoether>** i dunno, fluffypony?  
**\<sarang>** It just really hasn't been tested by anyone  
**\<sarang>** (yet)  
**\<rehrar>** I would like to make a proposal to do a weak formalization of MRL. Basically acknowledging sarang and suraeNoether as the leaders of the workgroup, whether or not they are paid by the FFS.  
**\<sarang>** I assume core team put it up  
**\<endogenic>** exactly.. so it's in the first category  
**\<fluffypony>** anyone can be part of MRL  
**\<fluffypony>** it's self-assembling  
**\<suraeNoether>** rehrar: I feel like we're treading into governance territory, and if we are doing that, i would like a title like "Paladin Exemplar" or "Necrophage Elitus"  
**\<sarang>** I understand what rehrar is getting at though  
**\<sarang>** We're very public-facing  
**\<suraeNoether>** yes, for sure  
**\<sarang>** I'd like "Man About Town" for my title  
**\<sarang>** Right now it's based on your reputation w/in the community. But people outside the community don't track that  
**\<suraeNoether>** okay, let's put the ethics document on the side burner, we'll get back to it next week; in the meantime, if anyone doesn't object, i'm going to just go tattoo my pgp keys on my forehead and that'll be MRL's authentication  
**\<rehrar>** my proposed formalization doesn't put anything on membership (anyone can join and contribute) but does put a bit of a hierarchy in terms of "these people are putting out random stuff, suraeNoether sarang, is this MRL work?"  
**\<sarang>** nor should they  
**\<suraeNoether>** rehrar: understood  
**\<rehrar>** exactly sarang  
**\<fluffypony>** "putting out MRL work" == merged into the research-lab repo  
**\<rehrar>** doing something like this is saying the community has vetted and found these two, so you don't have to vet  
**\<fluffypony>** and those merges are controlled  
**\<fluffypony>** the same way anyone can work on Monero's source code  
**\<sarang>** True, but is the concern more about claiming representation from others rehrar?  
**\<fluffypony>** doesn't mean we'll merge something that introduces a backdoro  
**\<fluffypony>** \*backdoor  
**\<rehrar>** fluffypony: or will we...?  
**\<binaryFate>** backdoro is esperanto for backdoor  
**\<fluffypony>** lol  
**\<rehrar>** sarang: unsure yet. Admittedly the concern is vaguely defined, so no action should be taken as of now until the "threats" are better defined  
**\<suraeNoether>** we'll start with the ethics policy document  
**\<silur>** I'll dig up our EF version and forward to suraeNoether and sarang  
**\<sarang>** ty silur  
**\<suraeNoether>** one simple method is for Sarang and I to publish an accumulator of PGP keys that we consider "valid" MRL keys; when you ssee a document signed wiht a key, you check if it's in the public accumulator. If it is, great, you know we approved it. If not, you know someone is tryign to push out an MRL paper early (or just lying about their own credentials)  
**\<suraeNoether>** but we can think about it more between now and next week  
**\<suraeNoether>** i like the idea of a simple ethics/conflict of interest policy  
**\<sarang>** We really should sign those  
**\<IsthmusCrypto>** I'd be happy to put on my UncagedPotential hat and review any drafts of the policies.  
**\<fluffypony>** git already supports GPG signing  
**\<sarang>** or at least post to github with signed commits  
**\<sarang>** fluffypony: lol, read my mind  
**\<fluffypony>** I don't think you need to over complicate it beyond that  
**\<sarang>** good point  
**\<suraeNoether>** yeah, i agree  
**\<binaryFate>** was there any such attempt of claiming MRL relations for unethical or random reasons? Or is this all abstract discussion?  
**\<suraeNoether>** binaryFate: when sarang and i met endo in person at the beginning fo this month, we discussed the general phenomena i described regarding too-plausible reporting that doesn't display conflicts of interest. nothing about \*monero\* right now is drifting us in that direction, it was just an idea we had about the overall cryptocurrency space.  
**\<sarang>** I think binaryFate means the MRL formalization comments  
**\<suraeNoether>** right, all of this is coming from that one discussion; the answer is no, there have not been any attempts to impersonate me or sarang yet, afaik  
**\<sarang>** Shall we address the idea of to-do?  
**\<sarang>** it was brought up earlier  
**\<silur>** yea I was waiting for that :D  
**\<sarang>** (we are over time, if anyone needs to go)  
**\<suraeNoether>** here is our current "road map" with some things ticked off. It could be slightly out of date. https://github.com/monero-project/research-lab/issues/29  
**\<suraeNoether>** in general, I would really really like a transaction tree visualization tool  
**\<suraeNoether>** or something that scrapes statistics from teh monero blockchain in genreal  
**\<suraeNoether>** From the cryptographic point of view, we are interested in replacing ring signatures with something that has decently large anonymity sets, no trusted set-ups (say ZK-STARKs)...  
**\<suraeNoether>** but the replacement must be sufficiently efficient in both space and verification time that total time-to-download-and-verify the blockchain (an up-front cost for new members to join the network) is manageable over the next several years, and preferably should also have greater security claims than computational unforgeability.   
**\<sarang>** More pointedly, I have been thinking lately about the state of our current primitives and their implementations  
**\<sarang>** IMO we should be offloading to tested libraries far more  
**\<suraeNoether>** i agree with that statement, and anywhere that we aren't, should be filled with unit tests.  
**\<suraeNoether>** From a stochastic processes point of view, consensus models lack a rigorous description as "adversarial" or game-theoretic, such that participants have some control over the distribution of the outcomes, financial interests, and payoffs, etc.  If you are a statistics sort of person, that could be fun.   
**\<suraeNoether>** One interesting thing that is almost a computer-science exercise and could land anyone "on the map," so to speak, would be to place the Zerocash Sapling ZK-SNARKs inside the bulletproofs of Bunz, Bootle, Boneh, et al.   
**\<suraeNoether>** Anyone who can manage to do that will essentially see money thrown at them to work on these projects forever, and will see their work implemented live on multi-billion dollar currencies within a year.  
**\<endogenic>** we should put this in a doc on a repo or somethin  
**\<suraeNoether>** From an applied algebra point of view, we are more-and-more interested in RLWE settings and their post-quantum resistance properties, and personally, I've recently been reading about using Euclidean rings to construct untrusted accumulators.  
**\<silur>** yaaaay  
**\<suraeNoether>** oh, i need to publish the Q4 roadmap by the end of this month, endo, and i'll be including this stuff in there  
**\<silur>** I was actually just wondering whether my RLWE fanatism will be extingiused here  
**\<silur>** with the roadmap  
**\<suraeNoether>** i copy-pasted some of the list above from my communications with Clemson recently. :P  
**\<sarang>** These should be open issues on github probably  
**\<suraeNoether>** the roadmap is an open issue  
**\<suraeNoether>** and it consolidates all this into a list  
**\<silur>** suraeNoether: around may we had a brief discussion about how bulletproofs could be even more efficient with RLWE  
**\<silur>** we should really see that to the end  
**\<suraeNoether>** silur: https://eprint.iacr.org/2018/637 for some RLWE fully homomorphic stuff :P  
**\<suraeNoether>** i don't recall that discussion, and i haven't thought \*at all\* about how LWE or RLWE could be used in bulletproofs  
**\<silur>** these cipher expansions are supa-dupa small O.o  
**\<silur>** thanks for tha paper  
**\<suraeNoether>** okay, i think this was a pretty good meeting. Anyone have objections to beginning the closing ceremony of our research meeting?  
**\<silur>** also will you have some time to share your leads on this RLWE untrusted accumulator stuff? I don't really see the connection now  
**\<IsthmusCrypto>** I have a Q or two about the notes at the GitHub, but that can happen post-meeting  
**\<suraeNoether>** no, no, the untrusted accumulator is with euclidean rings (like polynomial rings) https://kodu.ut.ee/~lipmaa/papers/lip12b/cl-accum.pdf  
**\<suraeNoether>** the FHE encryption uses RLWE  
**\<suraeNoether>** IsthmusCrypto: eh, the closing ceremony is "people gradually losing interest and walking away from their computers" so fire away buddy  
