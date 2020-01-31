---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-05-21
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<sarang>** Let's begin the meetin  
**\<suraeNoether>** sure  
**\<rehrar>** ye  
**\<suraeNoether>** i have a list of stuff i want to bring up  
**\<suraeNoether>** but let's start with the simple stuff  
**\<suraeNoether>** sarang: updates on BP audits?  
**\<sneurlax[m]1>** hi all, I had a death in the family on the  14th so I have been travelling this week and have not made any progress on anything, really :(  
**\<sneurlax[m]1>** I will remind you that I've reached out to ehanoc and will be working with them on python code but yeah, delays delays delays  
**\<sarang>** Sure, so the audits are underway, will be checking in tomorrow with the groups for updates  
**\<sarang>** Noting to report yet  
**\<sarang>** sneurlax[m]1: sorry to hear that :(  
**\<suraeNoether>**  sneurlax I am sorry to hear about that. :(  
**\<ArticMine>** What are the expected time lines for each group/  
**\<sarang>** Looking at mid-July all around  
**\<suraeNoether>** not bad  
**\<sarang>** Yeah given that they work on a lot of projects  
**\<suraeNoether>** sarang: what have you been working on for the past 2 weeks?  
**\<sarang>** Otherwise, I've written up a noninteractive refund scheme in collaboration w/ Purdue folks  
**\<sarang>** will be doing a formal journal paper for submission too  
**\<suraeNoether>** ah yeah, that's on my lsit of stuff to read today  
**\<suraeNoether>** nice  
**\<sarang>** Have been keeping up with some Zcash flaws and plenty of other papers that came through the pipe  
**\<sarang>** and advanced course prep for the upcoming crypto course  
**\<suraeNoether>** i've started keeping a monthly "works cited/read" list  
**\<suraeNoether>** any other updates?  
**\<sarang>** Nice, I also include my reading list in updates  
**\<sarang>** Also some good talk in here about BPs and fees  
**\<sarang>** which needs to be settled soon  
**\<sarang>** Can't deploy without consensus on the new fee structure  
**\<rehrar>** this fees thing is not something we can keep saying 'we need to talk about this soon'  
**\<rehrar>** it needs to get talked about ASAP  
**\<suraeNoether>** Allright, so when Sarang and I were in london, we started hashing out (heh) a list of things for MRL to tackle in the upcoming year. we've been late on the research road map because... well, because there are lots of possible forks in the road, so to speak, and it's not clear which are dead ends, and which the community would like us to pursue. and near the top of the list is BP fee structure  
**\<suraeNoether>** let's talk about it immediately after the meeting  
**\<sarang>** rehrar: yes, we need concrete proposals with actual values  
**\<ArticMine>** Once we have final figures on size and verification efficiency we can finalize on fees / blocksize  
**\<suraeNoether>** before i get to my big list: has anyone else been working on anything interesting? I don't want to downplay the contributions of other folks  
**\<endogenic>** well vtnerd has, a little  
**\<suraeNoether>** oh?  
**\<endogenic>** he was looking into xmr <> btc swaps  
**\<sarang>** UkoeHB worked up a great draft of his tech explanation of transactions  
**\<endogenic>** he came up with a funny method by which you'd have to burn your btc priv key :P  
**\<sarang>** endogenic: there were all sorts of curve issues tho  
**\<endogenic>** called it the sony method  
**\<endogenic>** yeah  
**\<UkoeHB>** I did?  
**\<endogenic>** oh yeah didn't koe have something to gift surae? : P  
**\<sarang>** UkoeHB: yeah, your extension of the magnus stuff, not sure if the latest work was before or after surae's departure  
**\<UkoeHB>** Ah yes give me abt 10mins  
**\<endogenic>** oh, one thing from my recent trip was noting a strong interest in ring sig alternatives research  
**\<endogenic>** fwiw  
**\<suraeNoether>** kurt magnus contacted me asking me for my comments before I left, and I was confused because I thought UkoeHB \*took over\* that paper from kurt, but kurt appears to think it's two separate projects now? maybe y'all should chat about that together...  
**\<suraeNoether>** endogenic: seems like very few folks in the community oppose the idea of replacing ring signatures with something else  
**\<endogenic>** suraeNoether: no i just meant people are excited about specific alternatives like starks  
**\<UkoeHB>** Don't know surae kurt is rather curt  
**\<endogenic>** rather than saying 'oh this is a problem'  
**\<suraeNoether>** oh he spelled it with a k when he first  got on irc \*shrug\*  
**\<suraeNoether>** okay, so here's the list of stuff on my general MRL "todo" list:  
**\<suraeNoether>** 1. BP fee models.  
**\<suraeNoether>** 2. Transaction graph python library (see sneurlax[m]1 comment above)  
**\<suraeNoether>** 3. Sarang and I would both like a full technical report on "what happens if PRNG is terrible in Monero? Failure model and effects analysis sort of deal.  
**\<suraeNoether>** 4. Codifying Monero's best practices guidelines into a nice infographic. I believe sgp and rehrar have put some effort into this so far.  
**\<suraeNoether>** 5. Monero Standards in general. We have lots of source material to start gathering these together, and I would like to get MOST of this done before next month; describing the current state of monero before BPs go live is probably going to be valuable later on.  
**\<sarang>** 6. Payment channel infrastructure and prereqs  
**\<endogenic>** ^  
**\<moneromooo>** Ooooh yes please :)  
**\<sarang>** We have some good work on 6 so far, but no definite path forward atm  
**\<suraeNoether>** 7. network simulation library for testing things like consensus algorithms and difficulty metrics. (I am off-and-on working with a friend at University of New Mexico on using population-ecology models to look at mining incentives, etc)  
**\<sarang>** There's more work on the actual channel implementation that's being worked on w/ Purdue folks, but those drafts aren't released yet  
**\<suraeNoether>** 8. Ric's zk-s(t,n)ark zidechain proposal  
**\<sarang>** at their request  
**\<suraeNoether>** 9. I would like to write a paper on using heuristic analyses for constructing "ground truth" transaction graphs in private cryptocurrencies, and the common pitfalls that crop up from statistical points of view  
**\<suraeNoether>** (for example, my common sensitivity vs. specificity complaint)  
**\<suraeNoether>** 10. Churn analysis (ties with 9)  
**\<sarang>** (and with 2)  
**\<sarang>** Having the library will give really useful data into the churn models  
**\<suraeNoether>** 11. I have written here "curve optimizations," but I feel like the ones we intend to use should be included in the monero standards... but it could be helpful for other projects for us to make a technical note about them  
**\<suraeNoether>** in particular, seeing where we can cram them in elsewhere seems like a good idea  
**\<sarang>** good ideas all around  
**\<suraeNoether>** 12. General literature reviews (this is an ongoing thing, but since Sarang and I are constantly reading, we may as well start compiling our thoughts into common documents!). This ranges from zero knowledge proofs, to hash-based signatures, to reviews on pairings-based approaches  
**\<rehrar>** I may have missed it, but was the multisig paper sent off for review?  
**\<sarang>** There was a recent flaw in MuSig that IIRC will affect one of suraeNoether's proof strategies  
**\<suraeNoether>** no: the flaws in the musig paper apply to my security proof too, so we are now... reading... a lot.  
**\<sarang>** this happened during his absence  
**\<suraeNoether>** this isn't to say that they were proven insecure  
**\<sarang>** The MuSig fix is to add another communication round  
**\<sarang>** it hardens the proofs substantially  
**\<suraeNoether>** but merely that it's been proven that a proof of the security \*cannot exist\* under standard assumptions  
**\<suraeNoether>** subtle point, but important  
**\<sarang>** Yeah, and it snuck past a lot of people  
**\<endogenic>** phew big list in any case  
**\<suraeNoether>** a lot of very smart people  
**\<suraeNoether>** 13. New elliptic curves. \*if we think it is valuable,\* and I think it is, I think we should reach out to folks for developing a family of suitable ECs that are compatible with 25519  
**\<sarang>** Before I leave to do my crypto course, I'll continue the payment work w/ Purdue primarily, as well as get a bunch of educational material onto GitHub  
**\<rehrar>** you'll be gone for one month sarang?  
**\<sarang>** 3 weeks  
**\<suraeNoether>** this is the sort of thing that could be a whole masters thesis, so that alone would be a sufficient project to require funding, I think... and there are dangers in rolling our own crypto, making our own libraries... so this is a bit controversial  
**\<rehrar>** alright, great  
**\<sarang>** one week is dumbass training that'll be "multitasking" =p  
**\<sarang>** I'll also continue the audit coordination work during that time  
**\<suraeNoether>** great  
**\<sarang>** Otherwise it's full time teaching (not getting FFS during the month) so I'll have limited availability  
**\<rehrar>** are they paying you in Dash?  
**\<sarang>** but it's good outreach and PR  
**\<sarang>** lol  
**\<sarang>** fiat, those fools  
**\<sarang>** I'll assign groups to each of our MRL goals secretly =p  
**\<suraeNoether>** this huge list, is varying in urgency depending on items. i think BP fees, churn analysis + txn graph modeling, and the monero standards are the most important in my mind. almost everything else on the list would be great to tick off the list before another year is up  
**\<suraeNoether>** but these are \*broad MRL goals.\*  
**\<rehrar>** \*applause\*  
**\<suraeNoether>** not a checklist of things I personally feel responsible for and need to get done (which is why multisig wasn't included on this list.) it's a roadmap list  
**\<suraeNoether>** so, my question is  
**\<sarang>** It's my personal desire to see a path set toward payment channels within the next couple of network upgrades  
**\<suraeNoether>** ah yeah, i think that's super important too  
**\<sarang>** depending on quality of proposals  
**\<UkoeHB>** speaking of that  
**\<UkoeHB>** tadah new chapter  
**\<sarang>** go on...  
**\<UkoeHB>** https://www.pdf-archive.com/2018/05/21/zero-to-monero-first-edition-v0-14/zero-to-monero-first-edition-v0-14.pdf  
**\<suraeNoether>** good! i will read that today too  
**\<sarang>** multisig!  
**\<sarang>** excellent UkoeHB  
**\<sarang>** I will also review  
**\<suraeNoether>** SO! Does anyone want to add anything to the MRL broad goals for the 2018/2019 year?  
**\<rehrar>** wow, that looks comprehensive.  
**\<sarang>** Any new proposals contained in that UkoeHB, or just descriptions?  
**\<endogenic>** suraeNoether: is that list ordered by priority or just generally?  
**\<UkoeHB>** m-of-n and details on how to nest multisigs inside each other  
**\<sarang>** great  
**\<UkoeHB>** some conventions  
**\<suraeNoether>** endogenic: it's very loosely ordered by the order that sarang and I thought of them after meeting philkode at green man in london. :D  
**\<rehrar>** I think we're excited about BPs as an on-chain optimization, and we're looking for off-chain optimizations, but I think keeping a casual look at other opportunities for on-chain optimization is quite important. Not the least reason for doing so is to help quell the BTC/BCH debate from within our halls.  
**\<UkoeHB>** and a walkthrough of all implications for monero transactions  
**\<endogenic>** suraeNoether: kk  
**\<sarang>** rehrar: totally, but optimizations to the level people \_really\_ want are not immediately forthcoming  
**\<suraeNoether>** rehrar: one of the items on my list is "sublinear ring signatures," but because of this: we need to write a technical note to the community on why we don't intend on pursuing \*that route\* of on-chain optimizations.  
**\<suraeNoether>** so add that as 14  
**\<suraeNoether>** "14. explain why we don't have logarithmic ring signatures, and investigate other on-chain optimizations."  
**\<sarang>** 14 is pretty straightforward to do  
**\<rehrar>** If people see that we are pursuing both on and off chain optimizations it will hopefully keep the braindead squealing to a minimum  
**\<suraeNoether>** well half of it is easy. :D  
**\<suraeNoether>** thanks for that addition, rehrar, I agree  
**\<suraeNoether>** anyone else have any suggestions for the MRL roadmap for the next year?  
**\<rehrar>** sorry, I obviously don't have high opinions of people who adamantly hold to one side or the other of the BTC/BCH debate :P  
**\<rehrar>** 15. Stupid contracts  
**\<suraeNoether>** ha  
**\<sarang>** Well having payment channel infrastructure available and understood will be a Good Thing even without a definite intent to move to large off-chain operations  
**\<suraeNoether>** maybe the slogan of MRL should be something like "Don't be intellectually dishonest." In line with google's now-defunct code of conduct  
**\<UkoeHB>** oh and a one-key lstag for generating shared key images with zero-trust  
**\<rehrar>** you'd think so wouldn't you sarang?  
**\<sarang>** I would  
**\<rehrar>** if you'd kept up with the debates, you'd see that even good ideas, if proposed by 'the other side', become evil ideas  
**\<sarang>** MRL: ruining everything since 20xx  
**\<rehrar>** "a social/technical/something else attack"  
**\<rehrar>** that's going on the t shrit  
**\<suraeNoether>** UkoeHB: what page should i read that on, and are you comfortable with us using a lot of your document for the monero standards? (i've asked before but I want to verify)  
**\<rehrar>** suraeNoether and/or sarang can these MRL roadmap goals be sent to me ASAP. I'd like to make a little simple graphic to share with the community.  
**\<sarang>** Sure we'll work them up into something more formal on GitHub  
**\<rehrar>** as well, anything that has been completed in the past year should go on the roadmap section of the website  
**\<sarang>** agreed  
**\<rehrar>** which desperately needs updating :P  
**\<rehrar>** https://getmonero.org/resources/roadmap/  
**\<sarang>** I'll need to run in about 5-10 min, btw  
**\<rehrar>** we still in 2017  
**\<sarang>** suraeNoether: can we talk formal roadmap in about an hour?  
**\<suraeNoether>** okay, so now that the roadmap discussion is out of the way: I plan on reading about BIP47 today for endogenic, reading sarang's dual output paper with the purdue guys, and reading zero to monero again... and then after I've done those three finite tasks, I'll start reading the criticisms of the musig proof and continuing with multisig. and hten I'm going to write up my FFS for June-July-August because, like  
**\<suraeNoether>** an idiot, i'm off the usual fiscal year again :(   
**\<suraeNoether>** suraeNoether:   
**\<suraeNoether>** yes  
**\<suraeNoether>** sarang\* yes  
**\<suraeNoether>** when you get back we'll talk about fees + roadmap  
**\<sarang>** suraeNoether: sarang  
**\<sarang>** sarang: suraeNoether  
**\<suraeNoether>** heh  
**\<sarang>** anything else before I head out? (parking metre is dumb)  
**\<suraeNoether>** go fix your meter bruh  
**\<rehrar>** serious request here  
**\<suraeNoether>** also move to a place where you don't have meters  
**\<rehrar>** can I get profile shots of both suraeNoether and sarang  
**\<sarang>** ikr  
**\<rehrar>** top of head to upper chest  
**\<ArticMine>** One fees I do have a preliminary proposal ideas  
**\<suraeNoether>** rehrar: are you making us those fake passports you promised? :D  
**\<rehrar>** I'll talk with both of you about it later  
**\<ArticMine>** When is later?  
**\<suraeNoether>** ArticMine: do you have them written up, by chance, or is it going to be a platonic dialogue to talk about them?  
**\<ArticMine>** I have not written it up yet but it is coming  
**\<suraeNoether>** ArticMine: he meant about the pictures. we can talk about fees as soon as sarang gets back  
**\<suraeNoether>** i want him to be able to ask questions  
**\<suraeNoether>** like, live  
**\<rehrar>** ArticMine: by later I mean the profile shots  
**\<ArticMine>** but one question that came up is verification times  
**\<ArticMine>** This was a very valid point raised by smooth  
**\<moneromooo>** performance\_tests show you verification times for various cases. The only thing that I know will change it is Pippenger, if it gets coded.  
**\<suraeNoether>** ArticMine: yeah, i wanted to do fees proportional to both expected ver time and space, but i feel like someone shot me down when i suggested ms-kB metric  
**\<suraeNoether>** but i don't recall  
**\<ArticMine>** It more an understanding on what verification times will be with current tech  
**\<UkoeHB>** surae the table of contents should have everything. i don't recall you asking, but sure do whatever you want with it :)  
**\<suraeNoether>** ah, yeah, we'll have to estimate, and it's hardware dependent but the info-theoretic lower bound on the number of operations isn't, and we can use that instead  
**\<ArticMine>** and this will require the optimizations  
**\<suraeNoether>** UkoeHB: if you seek peer review publication, we'll have to probably make sure that rights are reserved or blah blah so the monero project doesn't get sued by the publication company for copy-pasting a document you helped write while volunteering at MRL. :P  
**\<ArticMine>** That is where copy left comes in  
**\<suraeNoether>** ArticMine: well, the lower bound will be impelmentation-independent. like, "we know we have to check \*at least\* this many group elements, and therefore... " sort of argument  
**\<UkoeHB>** is there any benefit to getting it peer reviewed?  
**\<suraeNoether>** Last thing I wanted to mention as part of the meeting is MAGIC, the non-profit that sarang, myself, rehrar, sgp\_[m], and my wife are starting. we are currently waiting on communications from our lawyer and CPA re: filing our 1023. my wife is on the phone with him this morning taking notes, and we'll probably make a more formal update later today or at least before the end of the week. the main trouble has  
**\<suraeNoether>** been finding CPAs and attorneys with the sufficient interest to learn about cryptocurrency law, etc  
**\<ArticMine>** Yes but is that a valid basis for pricing vs size, or can ti be handled instead with a clawback / weight idea  
**\<suraeNoether>** UkoeHB: eh, i merely thought that was your intention for the docuemnt.  
**\<rehrar>** interesting indeed  
**\<endogenic>** get scooby on your board man  
**\<suraeNoether>** why scooby? is he a laywer?   
**\<suraeNoether>** paging scoobybejesus  
**\<endogenic>** well you said CPA  
**\<rehrar>** I miss sarang already  
**\<endogenic>** not to doxx him..  
**\<scoobybejesus>** :D  
**\<endogenic>** lol scooby you dont mind me volunteering your life do you? :P  
**\<endogenic>** but anyway surae he may be able to point you in some direction  
**\<suraeNoether>** that would be helpful  
**\<suraeNoether>** right now it's our attorney calling all his CPA friends and getting shot down it looks like. :P but we will see  
**\<UkoeHB>** It's to be educational more than anything  
**\<scoobybejesus>** i snoop around the lounge, so i'll at least be sure to put in my two cents when appropriate  
**\<UkoeHB>** Learning crypto and monero is haphazard and frustrating with no formal approach  
**\<rehrar>** UkoeHB: people can only teach you about "hodling" nowadays  
**\<suraeNoether>** cool thanks scoobybejesus   
**\<suraeNoether>** UkoeHB: agreed, and you and me and sarang should chat about textbooks.  
**\<scoobybejesus>** i hesitate to provide to much firm advice in this crypto wild west we're in, but i can sure help with understanding context and the like  
**\<suraeNoether>** sool  
**\<suraeNoether>** cool\*  
**\<suraeNoether>** Allright, anything else anyone want to bring up for MRL? especially anyone who feels they have helped fund MRL and they have something they want to say?  
**\<rehrar>** Nah.  
**\<suraeNoether>** okay, well, \</meeting>  
