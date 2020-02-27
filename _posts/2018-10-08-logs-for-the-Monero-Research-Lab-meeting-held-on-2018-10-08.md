---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-10-08
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** Let's begin!  
**\<suraeNoether>** fluffypony knaccc luigi1111 luigiafk sarang andytoshi anonimal ArticMine binaryFate dEBRUYNE endogenic ErCiccione ferretinjapan gingeropolous gmaxwell hyc iDunk IsthmusCrypto john\_alan jwinterm kenshi84 kerber\_ medusa\_ moneromooo MoroccanMalinois naughtyfox needmoney90 oneiric\_ OhGodAGirl philkode pigeons rehrar rrol[m] sgp\_ smooth sneurlax stoffu unknownids vtnerd waxwing  
**\<suraeNoether>** meeting time! woo! i'll get banned from freenode eventually by calling everyone's name  
**\<rehrar>** just in time  
**\<suraeNoether>** So, greetings everyone  
**\<rehrar>** got back from the dentist  
**\<suraeNoether>** gross  
**\<kovri-slack> \<oneiric>** hallo  
**\<suraeNoether>** did you bring snakes and butter  
**\<sgp\_>** hello  
**\<rehrar>** wat?  
**\<laXity>** Im just lurking  
**\<suraeNoether>** rehrar: adventure time reference, nothing to see here  
**\<suraeNoether>** okay, so today I want sarang and myself to discuss what we're working on presently, and then i want to chat about the topics i mentioned before: 1) research, 2) conferences, 3) collaboration, 4) funding  
**\<sarang>** righto  
**\<suraeNoether>** 5) privacy/efficiency tradeoffs  
**\<suraeNoether>** before we begin, though  
**\<suraeNoether>** I like the idea that we employed last time where people can be free to ask questions before we begin  
**\<suraeNoether>** (i mean in general, you are free to ask questions)  
**\<suraeNoether>** but, before we start: who has questions in general for MRL?  
**\<rehrar>** When Monero scale?  
**\<gingeropolous>** when GUI?  
**\<suraeNoether>** how much does a piconero weigh  
**\<sarang>** when 0.13  
**\<suraeNoether>** oooh that's a better question  
**\<sarang>** But anyway  
**\<sarang>** Shall I talk research?  
**\<rehrar>** yes  
**\<suraeNoether>** yep, fire away sarang  
**\<sarang>** Well, suraeNoether and I were sent a couple of draft papers from some researchers regarding spent outputs and blackballing  
**\<sarang>** There's some formalization of the set theory that we already developed  
**\<sarang>** and some parts of the results that are presented in a way that is FUD-inducing  
**\<sarang>** "XX% of outputs are traceable!!!!1!"  
**\<suraeNoether>** of course, 99% of those were announced in monerolink. :P  
**\<sarang>** So we worked through those, offered to work with the researchers, no word back from them except "we will look into it"  
**\<suraeNoether>** or 100\*(1-p) for some reasonably small p, i believe they managed to find an additional, ... I think about a single day's worth of transactions in total, from teh whole blockchain, iirc  
**\<sarang>** I'm working to get some updated blackball stats on our own to compare  
**\<sarang>** they have an O(N^2) method for identifying more outputs, but this is negligible as always  
**\<sarang>** At the very least, we'll have up to date data to refute if they publish their work as-is  
**\<sarang>** Aside from that, suraeNoether and I have been continuing work on sublinear ring sigs for feasibility  
**\<suraeNoether>** they reinvented several wheels that we've worked on in the past 3 months here at MRL, which is actually a good thing, because it lends credence to our results to have some independent and similar results pop up  
**\<rehrar>** like RuffCT type stuff?  
**\<sarang>** yiss  
**\<sarang>** I have a shitty version of their clustering algo on my repo  
**\<suraeNoether>** well, RuPol. RuffCT was the first one we had presented to us (also by Ruffing et al, but with a different "et al")  
**\<suraeNoether>** the clustering algorithm has to do with this blackball paper, not sublinear ring sigs  
**\<sarang>** yes  
**\<sarang>** As sgp\_ has mentioned before, forks and pools will be the BB things to focus on anyway  
**\<rehrar>** so is the new sublinear stuff looking more promising than the Ruff Stuff?  
**\<sarang>** unfortunately those are not verifiable by the user  
**\<sarang>** rehrar: unclear  
**\<sarang>** it's clever but very complex  
**\<suraeNoether>** that's what we are trying to figure out: it appears to be more efficient, asymptotically, but until we have a working implementation, it's hard to tell  
**\<rehrar>** like me  
**\<suraeNoether>** yes  
**\<sarang>** heh  
**\<sarang>** There is a lot of math left out of the paper, so it's a thing we're working on in parallel to other things that come up  
**\<rehrar>** cool. Sounds lit.  
**\<rehrar>** #litmaths  
**\<suraeNoether>** last week I split our MRL research roadmap into a sequence of separate github issues (#30 and higher I believe) https://github.com/monero-project/research-lab/issues  
**\<suraeNoether>** nope, #31 and higher  
**\<suraeNoether>** and I've spent a bit of time on my lightning-for-monero paper, but not nearly enough, as this RuPol thing is a nasty rabbit hole  
**\<rehrar>** is MRL going to transition to gitlab also?  
**\<IsthmusCrypto>** I'm at the SF Blockchain Week Epicenter today & tomorrow on behalf of #noncesense-research-lab -- ping me if you're around and want to meet up for coffee/drink/chat. I'll be back with a million new ideas soon.  
**\<sarang>** rehrar: I have no big preference  
**\<suraeNoether>** rehrar: i have no control over the research-lab git, actually. :P  
**\<suraeNoether>** so if all workgroups migrate, we'll presumably migrate too? \*shrug\*  
**\<rehrar>** also personal repos, but that can be after the meeting  
**\<sgp\_>** yeah sarang and I have been talking about blackball, and it's my opinion that we need the public pool data working with the blackball tool to test for chain reactions before we proceed further  
**\<equim[m]>** I have a question. Would the blackball cause such kind of attack? Mallory knows an output belongs to Alice and wants to trace when it is spent. He makes N transactions with each of them exactly N ring members, and each of them contains Alice's target output as decoy. If the blackball get in effects, then the next time the target output apears, it must be Alice's real output.  
**\<sarang>** One conclusion sgp\_ and I share is that understanding the statistics can help guide best practices going forward  
**\<sgp\_>** if pool transactions are mostly unimportant, then we probably only need to use the blackball tool as an indicator of netowkr health. no one would use it typically  
**\<sarang>** equim[m]: the on-chain set theory stuff is for provably spent outs  
**\<sarang>** it's not possible to "get caught" with that  
**\<sarang>** Mallory couldn't make those signatures anyway  
**\<sgp\_>** if pool transactions ARE important, we need to bump ringsize, avoid coinbase decoys by default in wallet clients, or have everyone use a blackball list  
**\<sgp\_>** you can see our recommendations hinge on the importance of pool data  
**\<sarang>** option 1 is expensive, option 2 is possible (but could fingerprint), and option 3 is not verifiable  
**\<sgp\_>** (or at least mine do, I don't mean to speak for sarang)  
**\<suraeNoether>** equim[m]: short answer is no, long answer requires more explanation, but primarily: the probability that allice \*happens\* to select all used up ring members is very low unless someone was flooding the network with transactions, and at that point, the attack is costly  
**\<sarang>** My opinion is that we need the data for this  
**\<sarang>** and moving toward getting that data is the first step  
**\<suraeNoether>** i think the blackball thing is a big red herring waste of time, and i've said this beforfe  
**\<sarang>** it is for set theory stuff  
**\<sarang>** for pools it is unclear until we have data to show one way or another  
**\<suraeNoether>** i think i've sketched out my argument about how, even in the next 10 years, it's unlikely to impact even a single ring signature, so i'm still highly skeptical  
**\<sarang>** Hence getting pool chain rxn data  
**\<sarang>** then we can lay it to rest one way or the other  
**\<suraeNoether>** if the back of the napkin is that pessimistic, i think spending even an hour collecting data is wasting time, but i've said that before too  
**\<suraeNoether>** i disagree: this shit will never be laid to rest until people just admit that it has no practical impact  
**\<nioc>** AIUI mooo thinks it's bad to include pool txs in the BB list  
**\<suraeNoether>** the EAE attack and ring sizes in general are far more fearsome  
**\<suraeNoether>** and far more worthy places for us to spend our limited time  
**\<suraeNoether>** nioc: do you recall moneromooo's justificaiton for that?  
**\<sarang>** Not saying we should add them. Saying that we should see what effect they have so we can decide if/how to move forward  
**\<suraeNoether>** sgp\_: i heard a rumor that you had started including heuristically linked outputs in the blackball list, or outputs that aren't necessarily \*provably\* spent. is that true?  
**\<nioc>** sarang:  yes  
**\<moneromooo>** I don't really like this. (1) they're not proven spent, (2) it means it strips away non pool miners' ring signaturity when they spend.  
**\<suraeNoether>** sarang: would you mind opening an issue up on the research-lab git on this topic so we can have a public discussion about it that is referrable later without combing through meeting logs?  
**\<sarang>** I'll defer to sgp\_ since this is really his baby. I'm just an interested party who would like to know the results of the analysis  
**\<sgp\_>** moneromooo we can talk about the implications, but the effectiveness of these pool ring signatures is already 0  
**\<suraeNoether>** sgp\_ any word on my previous question?  
**\<suraeNoether>** re: blackball list and non-provably spent outputs?  
**\<sgp\_>** suraeNoether sneurlax's tool looks at coinbase outputs and the sent transactions to see which outptus could have been spent in the transaction  
**\<sarang>** the current codebase's bb tool will not do heuristics on its own  
**\<sgp\_>** I believe it's a heuristic using data the pool provides, and it takes this data with the assumption it's correct  
**\<suraeNoether>** so... \*yes\* the tool blackballs outputs that are not provably spent?  
**\<sgp\_>** so if a pool mis-reported, the tool would report different results  
**\<sarang>** sgp\_: he's asking if your hosted list contains any non-proven  
**\<sgp\_>** the current tool that ships with Monero now does not  
**\<suraeNoether>** i strongly recommend against any blackballing for any outputs that are not provably spent  
**\<sgp\_>** right now, the site has 3 list categories  
**\<equim[m]>** So if everyone is using blackball, then one can easily make others mark a target output as spent (N transactions with N ring size) that is actually not spent?  
**\<suraeNoether>** it is critical that the blackball list be independently verifiable  
**\<sgp\_>** one for all chain data with chain splits, another with only rct data with chain splits, and a third separate category for pool data  
**\<sarang>** equim[m]: you cannot generate signatures that blackball another person's output  
**\<equim[m]>** Yes that's my point  
**\<suraeNoether>** equim[m] I'm not understanding your question  
**\<suraeNoether>** would you mind clarifying?  
**\<sgp\_>** a user could verify the first two by running XMR, XMO, XMV nodes locally  
**\<equim[m]>** Okay, I think I need to read up more first.  
**\<sarang>** equim[m]: if you generate N identical rings of N outputs with valid sigs, it means you controlled all N of them  
**\<sgp\_>** fwiw I don't recommend a user should use a blackball list. I think we should use the findings of the blackball list to pursue other options to mitigate the data that would need to potentially be stored there  
**\<moneromooo>** equim[m]: you cannot make N rings with N outputs, one of which being not yours.  
**\<equim[m]>** Oh I got it, just missed that.  
**\<equim[m]>** rings need to be identical  
**\<sgp\_>** sneurlax's tool essentially creates a list of outputs that the pool controls at any one given time, then sees if it can attribute these outputs to specific ring signatures  
**\<sgp\_>** I still think we need to table this discussion until we can test for possible chain reactions with pool data, which means updating the output format for sneurlax's tool  
**\<sarang>** Yes, I think a useful action item is to get this data, run rxns, and compare to our base data to see what the effects might be  
**\<sarang>** just like it's useful to have data on previous forks to better understand what, if any, risk is present  
**\<sgp\_>** yeah, and if the impact is small, we forget about it. if it's large, we need to discuss options  
**\<sarang>** Yep, use the data to inform best practices  
**\<sarang>** So  
**\<sarang>** suraeNoether: any research to report in addition to what's been discussed?  
**\<suraeNoether>** sorry, had to get the door  
**\<suraeNoether>** So, other than a modest amount of progress on my lightning paper, and workign with Sarang on this sublinear RuPol scheme, I have done a lot more administrative stuff this week  
**\<suraeNoether>** so i want to move onto a bit of that adminstrative crap regarding conferences  
**\<suraeNoether>** actually  
**\<suraeNoether>** collaboration is a bit more research themed  
**\<suraeNoether>** so, there is some good news and bad news on the collaboration/grant front  
**\<suraeNoether>** the short summary is this: after speaking with three separate univeristy research foundations on Friday  
**\<suraeNoether>** there simply is not a structure in place for universities to accept research funding from a crowdfunded animal like our own  
**\<suraeNoether>** this is both good news and bad news  
**\<suraeNoether>** the bad news is it'll be six months at least, if not longer, before we can start interacting wtih universities in a way that requires funding  
**\<suraeNoether>** the good news is that all three of those universities are extremely eager to start working these things into their foundation's policies  
**\<suraeNoether>** so, for example, the researcher Gao at Clemson: even if we wanted to, we couldn't really offer any money (beyond bug bounties, etc) for their collaboration  
**\<endogenic>** is it really a good idea for MRL to be in the grant giving business? is there anything the FFS system could not accomplish for such candidates?  
**\<rehrar>** endogenic: being actually funded for one  
**\<rehrar>** ba dum tsh  
**\<suraeNoether>** this relieves a possible burden on the community; in the meantime, CURF (clemosn university research foundation) is going to start working (partly with me at MAGIC) doing research on how to start making this a thing, because everyone at these universities agree this is not going away any time soon  
**\<sarang>** I thought the Clemson group might be interested in non-funded collaboration  
**\<sarang>** thereby removing the burden from the community  
**\<suraeNoether>** and that's the best news, is that they are  
**\<sarang>** and the PITA of funding  
**\<endogenic>** rehrar: why does everyone keep saying that  
**\<suraeNoether>** endogenic: the best jokes require explanation  
**\<rehrar>** cuz funding is taking a while for other stuff. It's just cuz people are funded out after funding mooo, sarang, and suraeNoether  
**\<suraeNoether>** of course, providing some incentives for that research like travel funding,e tc, these things can be accomplished through the FFS, endogenic... kinda! but not really... because every single university requires a cut of all such funding, and they refuse to accept such funding from a crowdfunded anon crowd style animal  
**\<rehrar>** admittedly, those are our greatest assets, but they require good amounts of Momos, so the other ones are struggling a bti atm  
**\<rehrar>** \*bit  
**\<sarang>** yep  
**\<sarang>** I think the correct avenue is non-funded collab  
**\<suraeNoether>** so the short answer is that right now, it doesn't matter if it's in MRL's best interest to be a source of funding, because we literally can't do it  
**\<sarang>** We already have university groups publishing on Monero  
**\<suraeNoether>** yep  
**\<rehrar>** I'm going to make it my personal mission to make Momos a thing for Monero in the same way bucks and paper is for dollars  
**\<suraeNoether>** all about the momos  
**\<endogenic>** i think.. it does matter.. because if it's not in mrl's interest then we don't have to become nonprofit administrators with the ffs funding we have.  
**\<suraeNoether>** so, that actually puts a nail in a coffin that i very much wanted to either be nailed shut or aired out in the daylight, i was uncomfortable with whatever was inside banging on a loose lid  
**\<suraeNoether>** so to speak  
**\<endogenic>** "every single university requires a cut of all such funding, and they refuse to accept such funding from a crowdfunded anon crowd style animal" hmm  
**\<endogenic>** how about from individuals?  
**\<suraeNoether>** that's a different animal  
**\<endogenic>** we just have individuals who are willing to deanonymize themselves say who they are  
**\<suraeNoether>** well  
**\<endogenic>** you can even feature 'em  
**\<suraeNoether>** another option is, for example, OSTIF  
**\<suraeNoether>** but for now, adding this layer of grief I think is not worth it, even if there are interested parties who could throw their weight toward our project; MRL has other goals and priorities and we don't want to spread ourselves too thin... and the answers I got from the foundations I spoke with are good enough reasons to abandon the idea for at least a few semesters  
**\<sarang>** Keep in mind that whoever is giving the grant is paying a lot extra for administration  
**\<suraeNoether>** 50% in fact  
**\<sarang>** yes  
**\<suraeNoether>** well, between 33% and 50% depending on the university  
**\<sarang>** researchers don't see a dime of that  
**\<suraeNoether>** yep  
**\<suraeNoether>** heh  
**\<suraeNoether>** so, that's going on a longer-term back burner  
**\<suraeNoether>** another thing I wanted to talk about is the Monero Konferenco  
**\<sarang>** So I agree with the sentiment that FFS shouldn't fund university grants, but we should be receptive to helping good researchers apply for funding, and also keep collaborating for free with groups we know are interested  
**\<suraeNoether>** especially researchers who have contributed to the project already  
**\<endogenic>** sarang: if ffs proposals for grants had more trouble getting funded than those which didnt have admin fees attached then i think that could create a market to lower admin fees  
**\<suraeNoether>** endogenic: my experience, to be frank, is that almost any university will climb over their own grandmother, so to speak, for more funding, so you may not be wrong. however, these institutions are oftentimes very... slow... to... make... decisions... regarding new technology especially  
**\<suraeNoether>** but anyway, unless folks have questions, let's move along to conference talk  
**\<suraeNoether>** re: the Monero Konferenco, I finally have all the quotes for costs that I need to post the funding request, and I want everyone's advice on how to proceed  
**\<rehrar>** MoneroKon!  
**\<suraeNoether>** long story short I've boiled down our possibilities to at least two, if not three possible locations, all that are roughly within the same range of price and amenities. However, one of those locations is the University of Colorado in Denver, which has some... interesting requirements... for the events held there. And there is a possiblity that they have to turn us down if we are not a "society" like SIAM or  
**\<suraeNoether>** AMS (for the same reason that grants can't be accepted)  
**\<suraeNoether>** all that needs to happen there is one professor decide to "sponsor" the event, but then there are issues with a public university endorsing our little conference, and whether that is even allowed  
**\<rehrar>** so...probably best not to do it there then? Or is that the best of the bunch price-wise?  
**\<suraeNoether>** so, depending on my communications with them this week, it may simply not be possible to do it there. I've already gotten proposals from the Colorado Convention Center and the University of Denver, both of which have some sub-optimal properties  
**\<suraeNoether>** it's not only the best of the bunch price-wise, I think, but also: you can take the lightrail from the airport to the location, which is embedded in the 16th street mall, which is a bit of a tourist location. lots of restaurants and hotels, etc  
**\<suraeNoether>** and there are bike share stations all around, etc  
**\<endogenic>** rehrar thinking about your previous mention of people being funded-out .. tbh we have a lot more funding sources than those who are aware of the ffs system but they cant donate monero because they dont have any. we need to open the funding platform to those who visit then drop off  
**\<suraeNoether>** this meeting is not about the FFS  
**\<suraeNoether>** and I would really like to move on  
**\<suraeNoether>** we are coming up on an hour already. :P  
**\<suraeNoether>** but i guess the meeting really IS about FFS  
**\<endogenic>** it's my fault  
**\<rehrar>** so maybe THEY might not be able to market our event  
**\<rehrar>** but can WE do it?  
**\<rehrar>** is there a cryptocurrency club in that university?  
**\<suraeNoether>** oh, marketing is totally aside; the issue is that by sponsoring the event (which they require for the event to be held on their campus) is an implicit endorsement BUT THAT'S A REALLY GOOD QUESTION REHRAR!  
**\<sgp\_>** +1 rehrar  
**\<suraeNoether>** i know that three professors there are currently chatting with each other about this to decide how to approach the topic  
**\<suraeNoether>** they haven't contacted me directly yet, though, and I will email the chair of their department back  
**\<suraeNoether>** however, locations aside: we have numbers for funding requests, and I want folks' advice on moving forward for this  
**\<rehrar>** My honest opinion is, if this can be hammered out relatively quickly, then let's try for there. If not, then we should find another place. The truth is so much depends on the venue that it's super hard, if not impossible in some areas, to plan further without knowing the venue  
**\<suraeNoether>** I feel like having more than one funding round would be wise, where we can cash out as we go. this could prevent something like asking for the single big chunk all at once and then failign to fund the entire thing, even though we could still throw a kcikass event for 80% of funding, or even 60%, as long as we plan around it  
**\<suraeNoether>** has that sort of thing been done through the Monero FFS yet?  
**\<suraeNoether>** also, if we can get a sponsorship, say from Cake Wallet or Tari or something like that, over-funding could be returned to the community through the general fund or whatever  
**\<sarang>** what is the amount of the "big chunk"  
**\<rehrar>** I 100% support those terms  
**\<rehrar>** The idea that you ask for 100% of what is needed, and then ask for sponsors after.  
**\<rehrar>** And specify in the FFS that any extra funding will be kept for next year's conference  
**\<rehrar>** there is no guarantee of sponsors  
**\<gingeropolous>** this may or may not have been thought of or talked about above, but if MRL can't do university stuff because its a total PITA etc, one resource that could be created is a research facilitator  
**\<rehrar>** that's just my opinion though  
**\<suraeNoether>** my initial numbers were 54,150 USD to 72,900 USD, but i was assuming wedding-level costs of a venue. with our newest numbers, the cost will be closer to 52k USD to 59k USD  
**\<gingeropolous>** i.e., if there's a researcher at a university who wants to do monero research, we can provide grant templates or boilerplate crap or letters of support  
**\<rehrar>** I'm not sure how wise several funding rounds is though  
**\<gingeropolous>** for the university researchers grant application etc  
**\<suraeNoether>** gingeropolous: that's a very interesting idea that we can start looking at over the next few months  
**\<rehrar>** depending on how quickly it moves through the system and gets funded each time, it might be too long to get stuff done  
**\<sarang>** I still think we need to do a better job of reaching out to groups that have already done Monero research  
**\<gingeropolous>** yeah, it shouldn't hit any beaurocratic nightmare hurdles  
**\<suraeNoether>** rehrar: that's a fair point  
**\<rehrar>** I think make an FFS for 65k  
**\<gingeropolous>** bureaucratic  
**\<rehrar>** roughly 10% of wiggle room there for price movements  
**\<suraeNoether>** okay, and we can make it clear that excess funding will be used for next year's conference  
**\<suraeNoether>** now, for transparency reasons  
**\<suraeNoether>** I'll be throwing this conference, contacting speakers, hiring the conference coordinator, etc  
**\<suraeNoether>** the coordinator will be taking care of most of the grunt work  
**\<rehrar>** I'm down to help in whatever capacity (management, coordination, or otherwise) that you need me for  
**\<rehrar>** as well as design, obviously  
**\<suraeNoether>** in order to avoid liability, I've started an LLC called colorado crypto conferences LLC, so that I can distribute funds to organizers, venues, etc, without it coming out of my personal bank accounts, etc  
**\<suraeNoether>** thanks for volunteering for this rehrar!  
**\<suraeNoether>** we'll definitely take you up on that. I wouldn't mind having t-shirts or shwag bags  
**\<suraeNoether>** so, does anyone object to me opening an FFS for 65kUSD for this? I can post 100% of all bookkeeping information for CCCLLC for transparency  
**\<suraeNoether>** and comply with any other wishes the community has for transparency  
**\<rehrar>** start there, and get feedback. I think it should be more than fine. :)  
**\<kovri-slack> \<oneiric>** sounds like a great idea, +1  
**\<suraeNoether>** fantastic  
**\<sarang>** How much does the coordinator get paid?  
**\<sarang>** (due to the conflict of interest there)  
**\<suraeNoether>** 9000 USD. Approximately 100 man-hours of work. Justification: Typical per-hour fees for event organization at a firm are between 125-250 USD per hour. The project organizer is low-balling herself for this cost specifically because she is related to me. Around 10 of these hours she anticipates can be spent seeking out sponsors for the conference to mitigate our costs, as well.  
**\<suraeNoether>** she just finished organizing a conference for Johnson and Johnson and she received over 20 for the same amount of time and work she expects for this.  
**\<rehrar>** I think all that is needed for this justification is quotes from a couple other people of the same job  
**\<endogenic>** ^ that doesnt work  
**\<rehrar>** no?  
**\<endogenic>** at least not without showing their work will turn out just as well  
**\<endogenic>** yup  
**\<endogenic>** i say leave it to the community to ask  
**\<rehrar>** ok  
**\<suraeNoether>** it's not a complete look, but it's fairly standard to find 3-4 quotes from several parties as an investigation into "fair market value" and then select from there  
**\<endogenic>** of course  
**\<endogenic>** not sure why youre on the hook to justify it though if youve done your research and are doing something for the community  
**\<endogenic>** it's an easy thing to find a quote for  
**\<sarang>** I'll have a couple of quick unrelated blackball stats when we're finished up here  
**\<sarang>** endogenic: I think it's ethically important because he's related to the organizer he currently plans to hire  
**\<endogenic>** how does showing quotes ameliorate that? :P  
**\<suraeNoether>** endogenic: it's a good faith thing  
**\<sarang>** yeah  
**\<endogenic>** you're not recommending her rate imo  
**\<suraeNoether>** i'm not, she selected her rate  
**\<rehrar>** this is true, endogenic.  
**\<rehrar>** And if another coordinator wants to come in, prove their past work, and undercut, nothing is stopping them.  
**\<rehrar>** but onus on them  
**\<suraeNoether>** the fact is: it's a very easy thing to temper any appearance of impropriety, and so we should  
**\<sarang>** suraeNoether: what does the total estimate assume about entry fees?  
**\<suraeNoether>** I assumed nothing about fees.  
**\<suraeNoether>** here is the section I was going to include on that.  
**\<sarang>** Cool, so it assumes people show up fo free?  
**\<suraeNoether>** \*Registration fees.\* Charging attendees is optional here and we should discuss the benefits (free and open access to Monero conferences is something we value?) and the costs (random crazy people and ICO shillsters will almost certainly walk in off the street!). It's worth pointing out that the event will \*not\* pay for itself unless we charge more than 1000 USD per ticket and we have full attendance.  
**\<suraeNoether>** currently looking at 50-70 attendees, so charging, say, 40 bucks for entry would only partially mitigate our total costs  
**\<sarang>** Does the LLC's tax burden come into play with any of this?  
**\<rehrar>** We can discuss what it would look like to charge a small amount to partially mitigate costs, and give tickets for free to anyone who asks nicely.:D  
**\<suraeNoether>** sarang: if the LLC makes any profit, it passes through to me and i pay personal taxes on it; my goal is to save a bit of cash for next year's conference, extract taxes from that part set aside, and then ensure that the remainder is spent on expenses for this year, so that i personally never feel any burden or liability from this.  
**\<nioc>** you will get more than 50-70 attendees and there should be some cost for them  
**\<sarang>** OK, so charging entry fees doesn't mess with that  
**\<suraeNoether>** nioc not if i only sell 70 tickets :)  
**\<suraeNoether>** sarang correct  
**\<sarang>** got it  
**\<suraeNoether>** all my venue costs look at around 600-650 a day, but are based on no more than 150 people  
**\<sarang>** how many days?  
**\<rehrar>** are we only planning for 50-70 because that's the sizes of the veue  
**\<suraeNoether>** 1.5  
**\<rehrar>** \*venue  
**\<sarang>** Will there be a story about the afterparty on mashable?  
**\<suraeNoether>** 50-70 for measuring interest the first year, and to keep the topics and audience in the technical, rather than ICO/business end...  also because it's easier to scale a small event up than throw a big event htat no one shows up to... not to mention, fluffypony has discussed with me throwing a monero conference preceding the magical crypto friends conference he is planning in NY, and I \*imagine\* that's going to  
**\<suraeNoether>** be a larger scale event.  
**\<suraeNoether>** most of these universities have so much room for events like these we can scale up relatively easily without paying \*too much\* more  
**\<rehrar>** interesting  
**\<rehrar>** if we get flooded with people, we can see about just purchasing a bit more space? :D  
**\<rehrar>** anyways, let's do what you've planned. See how it goes.  
**\<suraeNoether>** especially at a university, yes  
**\<suraeNoether>** but we would need several months lead time on estimates of crowd sizes  
**\<suraeNoether>** okay, rehrar's opinion is good enough for me  
**\<suraeNoether>** :D  
**\<suraeNoether>** okay, any last questions before I pivot to a controversial opinion I'm strongly interested in peddling on everyone here?  
**\<sarang>** Sure, but let's speedy things up  
**\<sarang>** we're way over  
**\<rehrar>** no questions, give opinion  
**\<suraeNoether>** okay, the main thing is this: we have a responsibility to our users. they use our currency in some cases to protect their own livelihoods from tyrannical etc etc  
**\<sarang>** yes  
**\<suraeNoether>** in some cases, monero is a matter of life and death  
**\<suraeNoether>** due to this, I believe we need to start shifting our attitude about development at Monero away from efficiency and towards security  
**\<suraeNoether>** and due to this, I believe we should move to a fixed but large ring size, like 45.  
**\<sarang>** Do we have data to back up such a choice?  
**\<sarang>** I believe our job is to provide users the best efficiency for what we see as reasonable and necessary security/privacy  
**\<suraeNoether>** if it turns out that, in 6 months time, a more efficient scheme comes along, then we would see a drop in our sizes and verification times, similar to our bulletproof thing, which is a PR win for us, and in the meantime, we would be taking the cautious route.  
**\<suraeNoether>** short answer to that sarang is: kinda  
**\<sarang>** If users who need us can't join the network reasonably, we've failed them  
**\<suraeNoether>** yes, if we go too large, network security is compromised by new nodes choosing other coins  
**\<sarang>** "The chain is now 400 GB" is a bad statement to give them  
**\<sarang>** I think this hearkens back to the need for a better understanding of threat models  
**\<suraeNoether>** so we are stuck between a rock (loose security with efficiency and speed, lots of network security but weaker untraceability claims) vs. a hard place (tight secuirty for a coin that no one uses properly, a la pre-sapling zcash)  
**\<sarang>** If ring size is made less relevant by a better understanding of, e.g. churn and controlled spends under certain threat models, that's good data  
**\<suraeNoether>** yeah, but what about users who don't churn?  
**\<sarang>** That's the need for understanding our threat models better  
**\<rehrar>** churning is an active choice to protect yourself  
**\<gingeropolous>** i like the idea of shifting focus towards security.... but that seems to go hand-in-hand with efficiency.  
**\<rehrar>** every step you make a user take for themselves, you will see significant drop off in people who do it  
**\<gingeropolous>** then again, monero (the entity) didn't give two shits about efficiency when it went to RingCT  
**\<sarang>** What I mean is that if we can establish that a large ring increase has measurable benefits for users under reasonable threat models, that's a conversation worth having  
**\<suraeNoether>** actually gingeropolous that is one of hte best points: we added these huge slow range proofs without hesitation, and then we had a big PR win for making them more efficient.  
**\<suraeNoether>** we should just assume the following threat model: anyone we transact with is transacting with an AML/KYC exchange, who can be assumed to have godlike, state-level computational power because a government serving them a warrant leads to that  
**\<sarang>** There was a big benefit to CT... can we point to such a benefit with a large increase?  
**\<suraeNoether>** now, if you are pinned, EAE style, between two adversaries, ain't no ring size that will help  
**\<suraeNoether>** so the only reasonable threat model we can really work with is EBABE where you may not be transacting directly with AML/KYC but people on either side of you are  
**\<rehrar>** I think the assumption of EABE for current standard use is not unfounded  
**\<suraeNoether>** ^ bingo  
**\<rehrar>** and I think a threat model of EABE is probably the one to operate under  
**\<rehrar>** BUT  
**\<rehrar>** since we cannot see Monero's stuff  
**\<rehrar>** we should analyze how people use altcoins  
**\<rehrar>** like Litecoin or Dash  
**\<rehrar>** see if it tends to go EABE  
**\<nioc>** wownero just forked and their static ringsize is now 22.  Don't know if they will have any stats that would be of interest to "us"  
**\<rehrar>** and extrapolate from that to Monero  
**\<kovri-slack> \<oneiric>** what do EAE and EABE stand for?  
**\<sarang>** That use could be waaaay different  
**\<rehrar>** sarang: we do the same for sending patterns and selecting ring members though  
**\<sarang>** Eve-Alice-Eve and Eve-Alice-Bob-Eve  
**\<suraeNoether>** oneiric\_: EAE is "eve-alice-eve" where eve is an evil exchange and you are alice. other non-E letters are other users who may or may not be malicious  
**\<sarang>** rehrar: we have some Monero data for that too  
**\<rehrar>** ok  
**\<sarang>** based on deduced spends  
**\<kovri-slack> \<oneiric>** ok, thanks sarang and suraeNoether  
**\<sarang>** but something like exchange interaction might be way different for a private coin  
**\<suraeNoether>** so sarang keeps asking "can we point to a benefit" and the answer is "we can point to a point at which ring size increases are no longer helpful, which is around 45, and we can point to some weak results on, say, how many transaction histories exist." for example, I just found a theorem that proves that there must be twice as many transaction histories as their are output keys, but finding all of them is  
**\<suraeNoether>** progressively harder and harder as ring sizes increase  
**\<sarang>** OK, let's formalize this, determine how exchange interactions affect it (to the extent that we can), and then go from there  
**\<rehrar>** ^  
**\<sarang>** The question of formalization and hard numbers always comes up when this gets discussed  
**\<rehrar>** see the mathz  
**\<sarang>** but it hasn't happened yet  
**\<suraeNoether>** okay; i'm not trying to convince people today, i just want our community to start thinking about the formalization components of this and longer-term thinking for the safety of our users  
**\<sarang>** This has been on our radar for a long time  
**\<sarang>** Until we have the math for it, I think it's a very hard sell  
**\<rehrar>** perhaps one of you community paid MRL researchers should get this formalization done ;)  
**\<sarang>** ikr  
**\<suraeNoether>** that's one of my in-prep papers  
**\<sarang>** suraeNoether: it was my understanding that you already had informal versions of this  
**\<suraeNoether>** ^  
**\<sarang>** I think it should be a priority  
**\<suraeNoether>** yeah, that's where my priorities are shifting, but that also includes looking at the sublinear papers  
**\<suraeNoether>** because if they are sufficiently efficient (heh) we don't actually even have an argument, y'know?  
**\<sarang>** Yeah, they go hand-in-hand  
**\<rehrar>** the sublinear papers are for increasing efficiency of larger ringsizes though, correct?  
**\<sarang>** But I consider this more important than, say, lightning and cross-chain stuff  
**\<sarang>** rehrar: size efficiency, yes  
**\<rehrar>** I understand they go together, but I think priority should be on establishing usage patterns to establish a threat model  
**\<sarang>** agreed  
**\<rehrar>** I believe Monero has been operating for a dangerously long time without a specified threat model  
**\<sarang>** Well, and our ring increases have to some extent been based on "bigger is better"  
**\<sarang>** we're long past the point of chain reaction style threats  
**\<rehrar>** and so, while efficiencies to ring sizes are good, I think the establishment of the threat model is imperative to all future research in this area  
**\<sarang>** (exactly 5 post-CT outputs are blackball-worthy from on-chain analysis)  
**\<rehrar>** as a community member, I would propose that both sarang and suraeNoether work together on hammering out this formalization before further work proceeds  
**\<rehrar>** this will further legitimize Monero in the privacy/security industry.  
**\<gingeropolous>** i mean we could just go to 45, and then let optimization take its natural course  
**\<rehrar>** At the moment, I can see the criticisms from other people that see the lack of a defined threat model as proof that we are flying by the seat of our pants  
**\<gingeropolous>** ala RingCT  
**\<suraeNoether>** my primary concern is that repeated analyses of a system that uses small anonymity set sizes (sub-millions) can be very powerful in reducing effective anonymity set sizes, regardless of the threat model  
**\<sarang>** We could also require users to use a different burner laptop from a different IP for every transaction, but that doesn't mean it's necessarily helpful  
**\<rehrar>** gingeropolous: doesn't solve the problem of threat modeling and formalization. and Monero is better than that  
**\<suraeNoether>** and the "sub-millions" thing is essentially a non-starter for obvious reasons  
**\<gingeropolous>** "who needs action when you've got words"  
**\<suraeNoether>** heh  
**\<rehrar>** who needs either when you have math  
**\<rehrar>** which guides the action and discussion  
**\<sarang>** A good start will be formalizing the ring size informal stuff, hammering out churn wait times as a heuristic killer, and going from there, perhaps?  
**\<rehrar>** right now we have not the math  
**\<rehrar>** yes ^  
**\<rehrar>** for me, as a recommendation from a community member, this is priority number 1  
**\<rehrar>** can't speak for others obviously  
**\<sarang>** I think it answers "how can we use Monero safely right now" so we can move to "how can we make Monero better for tomorrow"  
**\<suraeNoether>** okay, I'm going to formalize a single-hop (EABE) and double-hop (EBABE) pair of threat models, write up my formal definition of fungibility, demonstrate it implies anonymity, show that neither zcash nor monero satisfy my definition of fungibility, demonstrate a churn model that brings us closer to fungibility, and i'll share that document with the community. that will be my top priority this week  
**\<rehrar>** thank you suraeNoether  
**\<sarang>** baller  
**\<rehrar>** from a research perspective  
**\<suraeNoether>** also, can we change the term "blackball" to "marked notes?" :P  
**\<sarang>** This doesn't even need to be journal-worthy  
**\<rehrar>** to me, this is even bigger than BPs  
**\<rehrar>** and will be the biggest thign to come out of MRL this year  
**\<sarang>** but we need a base for our recommendations  
**\<kovri-slack> \<oneiric>** serious win  
**\<sarang>** Let's collaborate as much as is useful, suraeNoether  
**\<scoobybejesus>** i'm sure the formalization will pretty much write itself...  /s  
**\<suraeNoether>** allright, before we end the meeting: any final questions, comments, concerns? I need to write my summary of my september work and post it, so I apologize to the community for my delay (again)  
**\<sarang>** I ran some new blackball stats to compare to our author friends  
**\<rehrar>** nope. Great meeting. Gotta split. Bai.  
**\<sarang>** Finding their results are comparable to ours  
**\<sarang>** Importantly, our analysis methods show exactly 5 post-CT outputs are bad  
**\<sarang>** whereas about 68% of pre-CT outputs are bad  
**\<suraeNoether>** good to know :D  
**\<sarang>** this accounts only for on-chain stuff (no forks, pools, etc)  
**\<sarang>** I'm going to add this to our tech note to shut people up about "OMG OUTPUTS ARE TRACED"  
**\<gingeropolous>** yeah 5 of them!  
**\<sarang>** modern transactions are not vulnerable to this crap  
**\<gingeropolous>** and like all of pre-ct  
**\<suraeNoether>** on a totally different note, i'm in a weird funding trap because I was an idiot earlier this year, and I don't have funding for december. sarang and I were going to request funding for Jan-March simultaneously: do you guys think I should ask for Dec-March or should I request december separately, or what? I tried to get back on the quarter system earlier this year and then idiotically got back off it again. :\\  
**\<rehrar>** just do four months  
**\<rehrar>** now I really gotta split  
**\<sarang>** bai  
**\<suraeNoether>** ok <3 rehrar   
