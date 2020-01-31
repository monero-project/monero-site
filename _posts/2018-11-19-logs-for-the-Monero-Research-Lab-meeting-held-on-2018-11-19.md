---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-11-19
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<sarang>** heyo  
**\<sgp\_>** hello  
**\<serhack>** Hi surae!  
**\<suraeNoether>** good timing :D  
**\<vtnerd>** hi  
**\<suraeNoether>** i decided to not look at screens this weekend, because i got like 5 migraines last week, and i made it from the hours of 8am saturday to 1pm saturday  
**\<suraeNoether>** but i still felt like a totally new person :D  
**\<suraeNoether>** anyone have any questions before we begin?  
**\<sarang>** Welcome suraeNewther  
**\<suraeNoether>** nice  
**\<suraeNoether>** \\nick suraEyeOfNewt  
**\<suraeNoether>** damn  
**\<sarang>** s/\\\\/\\//  
**\<sarang>** Shall we begin?  
**\<suraeNoether>** omg that should be on a t-shirt with MRL's logo  
**\<suraeNoether>** yes  
**\<gingeropolous>** how many rings can a ring signature ring if a ring signature can ring rings?  
**\<suraeNoether>** let's begin  
**\<suraeNoether>** that's actually the subtitle of nick van saberhagen's autobiography  
**\<sarang>** Who shall start with updates?  
**\<suraeNoether>** Allright, we've gotten greetings out of the way. Sarang: how is that timing code going? still on iteration 18?  
**\<sarang>** Nope, 19  
**\<suraeNoether>** Sarang is currently running some timing experiments for me on matching bipartite graphs  
**\<suraeNoether>** okay, for it to complete 20, i estimate it will be done in mid december, so i say we don't fall prey to the sunk cost fallacy  
**\<suraeNoether>** i'm going to re-rig the code and run it over a smaller sample of the parameter space and get some results  
**\<sarang>** Want to give your update suraeNoether first?  
**\<sarang>** cool  
**\<sarang>** Getting some hard numbers with scaling information will be useful  
**\<suraeNoether>** Sure: Right now my time is being spent describing this bipartite matching graph problem that traceability problems in monero boil down to  
**\<sarang>** very useful  
**\<sarang>** having a complete description in terms of graph theory is marvelous to have  
**\<suraeNoether>** the idea is simple. if someone were to try to trace the monero blockchain, they would at least have to perform the following matching task. that sort of idea  
**\<suraeNoether>** and we have known bounds on the complexity for that matching task  
**\<sarang>** Exactly, and now some code to get an idea of scaling  
**\<sarang>** at least order of magnitude  
**\<suraeNoether>** this is all in the pursuit of a formal model of de-anonymizing a "mixing with an anonymity set" style anonymity system like that of Monero.  
**\<suraeNoether>** i've begun writing how we can use this approach + zcash turnstile to place bounds on the difficulty of de-anonymizing zcash as well  
**\<suraeNoether>** i should have a draft of the monero portion of this paper done by the end of November  
**\<sarang>** sexxy  
**\<suraeNoether>** sarang has already seen it and (if i do say so myself) it's a pretty fun paper actually  
**\<sarang>** Very much so  
**\<suraeNoether>** if it wasn't for the fact that's \*criticizing\* monero just like MRL-0001, i'd be very excited about writing it  
**\<sarang>** Have you informed Zcash of the possible applicability to their project, so they can draft a blog post about it? =p  
**\<suraeNoether>** i'm confident that this will make monero better, however, by formalizing some of our concerns that were previously only qualitative  
**\<suraeNoether>** sarang not formally, i may have brought it up with zooko in person before  
**\<sgp\_>** any way I can get a draft copy?  
**\<sarang>** We should be good neighbors and let them know  
**\<sarang>** sgp\_: it's all super early  
**\<suraeNoether>** sgp\_: yes, i actually want your thoughts becauset his is relevant to pools and mining and i want your recommendations, too, sgp  
**\<sgp\_>** cool  
**\<suraeNoether>** so, that's my MRL update. Sarang, what have you been up to?  
**\<sarang>** A few things  
**\<sarang>** First, housekeeping for monero-site updates to migrate our papers over, and add the new ones  
**\<sarang>** Second, more lit review on graph theory approaches to anonymity  
**\<sarang>** Third, reviewing some other papers relating to ring sigs and zk proving  
**\<sarang>** Fourth, fixing and writing up a cross-curve discrete log equality proving system  
**\<sarang>** there's also working toy code for that, using ed25519 and ed448  
**\<sarang>** This allows you to use "discrete log preimages" across curves or groups arbitrarily  
**\<sarang>** provided the spaces are big enough (they are)  
**\<sarang>** Here's the writeup, for those curious: https://v2.overleaf.com/read/jcyscybzhzmy  
**\<sarang>** Note that I did not invent this, but this is the first correct writeup I've seen and I wanted one for completeness  
**\<sarang>** That's about it for me  
**\<suraeNoether>** sarang has been on fire btw  
**\<sarang>** As in, running around with my hair on fire, sure!  
**\<suraeNoether>** if you guys haven't noticed, he's implemented several toy implementations of various crypto schemes in the past two months alone  
**\<suraeNoether>** you have hair?  
**\<sarang>** Not anymore, it burned off  
**\<suraeNoether>** nice  
**\<sarang>** So going forward, this paper (and others) will be on getmonero.org  
**\<sarang>** A few newer papers are in the PR pipeline  
**\<sarang>** Questions on any of my stuff?  
**\<suraeNoether>** the only other topics on my mind are only half research-related: 1) research: the post-thanksgiving Monero face-to-face being hosted by Tari bringing sarang and endogenic and i together in Nashville again... I heard a rumor someone else important was coming :D 2) not really research: the coin center privacy workshop in December I'm considering attending, 3) research: the Monero Konferenco, and...  
**\<suraeNoether>** well, the last bit is related to my nonprofit whihc is a selfish thing to bring up so I'll leave that alone  
**\<endogenic>** too l8  
**\<endogenic>** bring it up anyway  
**\<suraeNoether>** heh  
**\<suraeNoether>** okay  
**\<suraeNoether>** so, for 1) as folks may know, Tari has paid the expenses required to get sarang, endogenic, and i face to face for a meeting before... and they are doing it again, and it is looking like it may become a quarterly thing  
**\<sarang>** I suspect funding may be stalled a bit while belts tighten :/  
**\<endogenic>** oh btw i drive in  
**\<suraeNoether>** this is largely a research powwow over a few days, at the last meeting this whole bipartite matching thing was initially estimated and it kicked off my current research paper  
**\<suraeNoether>** and i should say: it's not just Tari, it's also MyMonero  
**\<endogenic>** one of these next ones i'm going to try to get surae to stay at my house ^\_^  
**\<suraeNoether>** We aren't burdening the community financially with these meetings, but we also want the community to learn of our financials in this way, to prevent accusations of opacity  
**\<suraeNoether>** For 2) I really want to go to this thing on some levels, but i am concerned coin center is going to look to me as a voice of the Monero community. I'm not sure if they want me to come if I'm coming as a private individual not as an individual representing Monero  
**\<suraeNoether>** Isthmus was already nice enough to offer a place to stay for me in SFO so the only financial cost would be a plane ticket  
**\<suraeNoether>** it seemed to me like folks were lukewarm on the idea of me attending last time I brought it up  
**\<suraeNoether>** trying to sense the temperature now that folks have had a week or two to sit on the idea  
**\<sarang>** In terms of funding, it seems to have more value for the space as a whole, rather than just for the Monero community  
**\<sarang>** I suspect you're right about the "voice of Monero" thing, but I don't know how bad of a thing that is  
**\<suraeNoether>** yeah, and I would go on my own dime  
**\<sarang>** I remain disappointed that this is a "be in person or don't have a say" thing  
**\<sarang>** but that's neither here nor there  
**\<suraeNoether>** for 3), the Monero Konferenco: we are sitting almost at 20% funded. https://forum.getmonero.org/8/funding-required/90909/surae-noether-first-denver-monero-konferenco-spring-2019  
**\<sarang>** that's impressive  
**\<suraeNoether>** i know, right?  
**\<suraeNoether>** that'll be enough to put a deposit down on a location  
**\<sarang>** I assume you'll wait until funding is closer to guaranteed before deposits?  
**\<sarang>** to the extent possible, that is  
**\<suraeNoether>** i'm concerned about waiting until it's totally funded for stuff like that, and I can't think of an easy quick solution. maybe rehrar has some thoughts  
**\<nioc>** suraeNoether:  I see that there are no milestones in the FFS for payout  
**\<suraeNoether>** nioc yeah, we should consider how to structure that asap  
**\<suraeNoether>** because a milestone like putting a deposit down on a location requires the money before the milestone occurs  
**\<sarang>** I think nioc's point is good particularly because of the natural payouts that are needed for this  
**\<sarang>** yeah  
**\<suraeNoether>** so perhaps we invert the milestones  
**\<sarang>** suraeNoether: what's the downside to waiting, besides the risk of losing venue?  
**\<suraeNoether>** i could make a milestone post to request funding to complete a milestone  
**\<sarang>** I think that's fine  
**\<suraeNoether>** sarang: volatility in price over the long term makes the actual funding receive much more variable  
**\<sarang>** There's no independent way for donors to verify the milestones happened anyway  
**\<sarang>** unless you posted receipts and such  
**\<suraeNoether>** we'll be posting contracts signed with venues and receipts, etc, all of which are very easily faked, unfortunately  
**\<sarang>** Yeah, that's unavoidable  
**\<sarang>** I think people understand this  
**\<suraeNoether>** curious parties could always call the literal venues themselves and check, I suppose  
**\<sarang>** Goal should be to maximize transparency and accountability within the limits of the unique circumstances  
**\<suraeNoether>** so, how shall we go about doing this? Should I edit the funding request post to include all this information? I feel like that's changing the terms of the request after we received donations already, which isn't necessarily fair to the previous donors  
**\<sarang>** As long as you're doing the same things with the money, updating for more clear scheduling seems entirely reasonable  
**\<nioc>** sarang:  I believe it's up to core not the community to verify receipts  
**\<nioc>** since they release the funds  
**\<sarang>** nioc: I only mean this in the sense that most funding requests have a tangible,  publicly-verifiable work output  
**\<suraeNoether>** maybe fluffypony luigi1111 binaryFate or ArticMine could weigh in on this.  
**\<sarang>** Whereas this is a bit different  
**\<nioc>** not that you couldn't make it public  
**\<suraeNoether>** thanks for that observation, sarang  
**\<suraeNoether>** okay, i'm going to edit the current funding request post to include a handful of milestones and a description of how we are going to invert the milestone process for this event  
**\<sarang>** I think a payout with a clear understanding of what happens with it (e.g. venue deposit) and some kind of immediate transparency for a modicum of verification (e.g. invoices and core team verifies somehow) makes sense  
**\<sarang>** Donors likely already implicitly assumed something along these lines  
**\<sarang>** The "work output" is a conference next year :)  
**\<luigi1111>** I would look for community agreement if there seemed to be anything "shady"  
**\<sarang>** Plus suraeNoether already has to have evidence of this for corporate tax purposes anyway  
**\<sarang>** cool cool  
**\<suraeNoether>** one milestone can be a deposit on a venue, AV stuff, caterer and (if appropriate) a deal at a hotel so attendees can get a discount. another milestone can be purchase of flights and hotels for speakers.  a final milestone can be for the remainder of the cost of the event to pay for things like media, publicity, printing pamphlets and posters, assembling shwag bags, etc  
**\<suraeNoether>** thanks for the input luigi1111 i believe you are 100% correct  
**\<parasew[m]>** we will be testing a few things at the 35C3 (Monero at the Chaos Communication Congress 27.-30.dec) which could be valuable for the conferenco: submission management, streaming, etc. will let everyone know when there is something to see!  
**\<suraeNoether>** we mentioned having defcon-style badges from the hardware team, but i think we are going to hold off on those until the second year. this will keep our costs down and allow the HW team to focus on the wallet, etc  
**\<sarang>** ^ good idea, on both counts  
**\<suraeNoether>** parasew[m]: regarding the 35c3 conference, if sarang sgp and myself all want to come (I do!) we need to make our post for travel funds this afternoon  
**\<suraeNoether>** i'm holding off on renewing my passport until after it so i don't have to worry about not getting my passport back in time  
**\<suraeNoether>** rehrar sarang and sgp\_ are you guys still interested in going to 35c3  
**\<suraeNoether>** ?  
**\<parasew[m]>** suraeNoether: sure! yes! (my planning got heavily delayed but the stage and everything got confirmed yesterday)  
**\<sarang>** I was just checking my schedule yesterday, and it simply will not work for me due to family commitments  
**\<sarang>** (the timing of the event is awful)  
**\<parasew[m]>** timing indeed is a problem  
**\<suraeNoether>** it really is. flights are super expensive on the 26th and 25th in general  
**\<sarang>** I had hoped that I could work around the family stuff, but it's not possible  
**\<sarang>** Plus my brother, sarangbro, is expecting a kiddo during that week  
**\<sarang>** very exciting  
**\<luigi1111>** nice name  
**\<sarang>** ikr  
**\<luigi1111>** we welcome sarangbrokid  
**\<sarang>** in olden tymes, they'd have invented a new last name, like sarangson  
**\<parasew[m]>** best wishes to sarangbro+sarangbro\_junior! :)  
**\<suraeNoether>** yes :D  
**\<sarang>** BTW, IACR has been chock full of interesting relevant papers lately  
**\<suraeNoether>** yes. yes it ihas.  
**\<sarang>** I have a long list for this week  
**\<sarang>** I try to hit up lit review weekly but some weeks it gets just bonkers there  
**\<suraeNoether>** btw  
**\<suraeNoether>** everyone, i really think sarang needs a vacation  
**\<suraeNoether>** like five days of no computer screens and some sun or something, and he barely takes weekends off  
**\<suraeNoether>** sarang is a very driven person  
**\<sarang>** psh, do any of us?  
**\<suraeNoether>** ikr  
**\<sarang>** It's like Newman, who once opined that the mail never stops  
**\<suraeNoether>** thing is, you see Ethereum people on twitter bragging about working 18 hours a day and you know they are producing some straight up crap in those conditions.  
**\<sarang>** I suspect many of us will be effectively taking time off around Christmahannukwanzaka  
**\<sarang>** for one reason or another  
**\<suraeNoether>** OH there is one FFS i would like to direct everyone's attention to  
**\<sarang>** ?  
**\<suraeNoether>** TheCharlatan is proposing development of reproducible builds here: https://forum.getmonero.org/6/ideas/91098/funding-for-development-of-reproducible-builds  
**\<sarang>** outreach?  
**\<suraeNoether>** I strongly support this FFS project, and I think it would be a nice security gain for Monero  
**\<sarang>** These have been desired for a while  
**\<sarang>** So the whole request is for 6 XMR?  
**\<suraeNoether>** yep, and i don't think it's out of line with endogenic's recent efforts to encourage reworking/refactoring Monero (i'm almost certainly mischaracterizing Endo's goals)  
**\<suraeNoether>** it appears he's only asking us to pay for his VPS  
**\<sarang>** I don't know the details of repro build complexity, but that seems like a great deal  
**\<sarang>** unless we can get VPS support for free, as some others had indicated  
**\<suraeNoether>** ^ he works at Shift, the hardware wallet developer, and he started gridcoin, and admittedly wildly insecure but super fun cryptocurrency experiment  
**\<suraeNoether>** or at least, when i met him, he was doing work with Shift  
**\<suraeNoether>** anyway  
**\<suraeNoether>** I have no further information to report  
**\<suraeNoether>** although I'm always interested in getting community feedback in general  
**\<sarang>** cool  
**\<sarang>** Any other fun news to report  
**\<sarang>** ?  
**\<suraeNoether>** aha, so MAGIC received its first non-board member donation today, so I'm totally energized to encourage folks interested in contributing to MAGIC to check out what we are about at https://www.magicgrants.org ... we are an educational and scientific non-profit focused on scholarships and research grants in cryptocurrencies.  
**\<suraeNoether>** our scholarship program will be open starting in January and we are currently fundraising for next year  
**\<suraeNoether>** if we were in a bubble I'd say "hey, come reduce your tax burden possibly" but I'm fully aware of the current state of the market. :P  
**\<sarang>** lol  
**\<parasew[m]>** this is amazing, congrats for magic!  
**\<sarang>** I must take off shortly to meet up with someone  
**\<suraeNoether>** thank you! hopefully we can reduce the financial burden of studying cryptocurrencies for students while also incentivizing universities to make cryptocurrency curricula  
**\<suraeNoether>** and eventually? build primary schools, libraries, and computer labs in the developing world  
**\<suraeNoether>** can't have a crypto infrastructure without comptuers (technically a false statement, but theory and practice disagree here :P)  
**\<suraeNoether>** but since that's not research related and is a coin-agnostic project, it may be one of the last times I bring it up during an MRL research meeting  
**\<suraeNoether>** okay  
**\<suraeNoether>** i believe we are good to go on today's meeting  
**\<suraeNoether>** EVERYONE. you must know this: i love you  
