---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-02-12
summary: Bulletproofs, auditing Bulletproofs, dedicated Monero conference, and miscellaneous
tags: [dev diaries, crypto, research]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<suraeNoether>** Allrighty everybody  
**\<sarang>** Gather 'round, everyone; it's almost time  
**\<suraeNoether>** Welcome welcome  
**\<ErCiccione>** hi research lab folks!  
**\<MoroccanMalinois>** hi  
**\<suraeNoether>** So we don't really have an agenda. I want to sort of go around the circle and see what folks have been working on.  Sarang and I blabbed a lot last week, so we can go last.  
**\<sarang>** Someone! Anyone!  
**\<serhack>** Hello!  
**\<ArticMine>** hi  
**\<sarang>** Orrrrr one of us can go if nobody volunteers?  
**\<ArticMine>** Please  
**\<gingeropolous>** i discovered "R shiny", a package that'll let me turn my R sims into little webpages so ppl can fiddle with them. Still working on wrapping it into my "code"  
**\<sarang>** Oh nice  
**\<suraeNoether>** oh actually  
**\<suraeNoether>** gingeropolous we should talk about that  
**\<suraeNoether>** because I have these simulations of a cryptocurrency network, blocks being propagated, each node tracks its own local blockchain and computes difficulty, modulating its own local block arrival rate  
**\<suraeNoether>** i built it so that i can test consensus rules like spectre or phantom or nakamoto, or difficulty computations, stuff like that  
**\<gingeropolous>** cool.  
**\<suraeNoether>** it'd be fantastic for that to fit into a webpage with animations  
**\<gingeropolous>** there have been a couple of cryptocurrency network simulators over the years... did u roll your own?  
**\<suraeNoether>** does your package take R code and execute it in the browser clientside? or does it take a transcript of a simulation from R and animates it?  
**\<suraeNoether>** yeah, i rolled my own  
**\<suraeNoether>** a lot of the simulators out there don't do what i want them to do, or do way too much  
**\<gingeropolous>** i honestly don't know if it'll do what I want yet. Generally, there's a web page where a user can plug in parameters and hit "go". Then the R script runs on the server, and when done, delivers the results  
**\<gingeropolous>** so it may not do a live animation, where u can tweak params on the fly  
**\<suraeNoether>** aaaah interesting, mine doesn't either, but you can program the parameters to change dynamically  
**\<gingeropolous>** but you could set timeframes and get output for a given timeframe  
**\<suraeNoether>** that's fantastic, we should talk more about that later  
**\<gingeropolous>** cool. i'll let u know when i get my dyn blocksize one wrapped  
**\* suraeNoether** thumbs up  
**\<suraeNoether>** cool, sarang, want to bring us up to speed on how your last week unrolled?  
**\<sarang>** Sure, plenty to discuss  
**\<sarang>** First up, BPs  
**\<sarang>** Updated paper was released that talks optimizations  
**\<sarang>** We've implemented them already (the ones we intended to, at least)  
**\<sarang>** I had worked up a BP tech note discussing how we differed from the original paper, but the new paper makes that obsolete  
**\<sarang>** I checked the new paper against our code and we're golden  
**\<sarang>** This will help the audit  
**\<sarang>** For the audit, Benedikt Buenz is interested and will be available soon  
**\<sarang>** Waiting on OSTIF SoWs from this week... other groups were less willing to share data publicly, which I do not like  
**\<sarang>** I'll put up an FFS to fund Benedikt and a pro group, with overruns going toward conferences or to general fund  
**\<sarang>** I'll be speaking at an intro cryptocurrency conference in Portland next month; funded by the organizers, so no FFS needed  
**\<sarang>** Either suraeNoether or I will likely speak at a large TEDx youth event in April  
**\<sarang>** PHANTOM paper (cousin to SPECTRE) was released and is under review  
**\<sarang>** Finally, summer course...  
**\<sarang>** there's an option for a single 3-week course or two 3-week courses. It'd be a full-time role, so I'm weighing the options for which to accept  
**\<sarang>** Opinions/comments/questions welcome for all of these things  
**\* sarang** drops the microphone  
**\<suraeNoether>** wow. any questions?  
**\<ErCiccione>** a ton of good news :)  
**\<sarang>** Soooooo how long should I be away this summer =p  
**\<sarang>** It's a lot of work to teach these intensive courses, but I've had a lot of students go on to do math/CS because of their summer course participation, so it works  
**\<serhack>** whoa, a lot of activities! amazing!  
**\<sarang>** Yeah, a busy month!  
**\<suraeNoether>** It'll probably be a nice 3-week break from directly working on bulletproofs, you'll enjoy having that intellectual shift in gears  
**\<ArticMine>** One the optimizations what is the good news bottom line on tx size and verification time? Since this affects fees blocksize etc  
**\<sarang>** So txn size is unchanged from the initial multi-output stuff we worked on  
**\<sarang>** For verification time I'll have to check the benchmarks... there are basically two classes of speedups there  
**\<sarang>** One is for established nodes... they'll use the multiexp operations we've introduced, which lead to much faster verification than the Borromeans  
**\<sarang>** The second is for new nodes... they can batch verify as many txns as they want very quickly  
**\<moneromooo>** It's set up to batch per block fwiw, so current nodes also benefit.  
**\<sarang>** Sure, but I assume much less  
**\<sarang>** I've considered the batch verification to really be for the new nodes, since they have a lot to work on  
**\<moneromooo>** Well, it's not set up to batch across blocks :)  
**\<sarang>** Did not know that!  
**\<suraeNoether>** on another note, someone brought up the question: why do our range proofs cover such a large size? which made me think of some of my own questions: isn't verification time for a range proof linear in the size of the set? And if so, would it really be 2\^-32 times faster to validate a range proof on [0, ..., 2\^32] than [0, ..., 2\^64]? i realized i have some gaps in my range proof knowledge  
**\<sarang>** Fortunately that's not a consensus thing, so a client could do that later  
**\<sarang>** moneromooo: why not batch across blocks for new nodes?  
**\<moneromooo>** More complicated.  
**\<sarang>** Ha, fair answer  
**\<moneromooo>** Besides, range proofs are only checked since last end of known hash data.  
**\<hyc>** (Hi all. just dropped in. Just finished giving a Monero lecture here at Ulster University in Belfast. So far doesn't look like I hooked any aspiring graduates...)  
**\<sarang>** hyc: still worth it!  
**\<suraeNoether>** hyc so i take it the fiddle is only *mythically* hypnotic, not literally, then?  
**\<suraeNoether>** so what's with the range proof set size? sarang? thoughts?  
**\<sarang>** So ArticMine the optimizations are for the verifier time, not for txn size in this case  
**\<sarang>** Well the only requirement is that the # of bits be a power of 2  
**\<hyc>** lol. I screwed up, played at end of talk instead of beginning ;)  
**\<sarang>** txn size is basically unaffected by this  
**\<sarang>** So it comes down to the increase in verifier time  
**\<sarang>** and the complexity of making the range size be height-dependent  
**\<ArticMine>** and verification still scales linearly with number of outputs so no real changes on fees ,, block weight / size etc  
**\<sarang>** Right, just with faster constants  
**\<ErCiccione>** uuh belfast, tiocfaidh ár lá hyc!  
**\<suraeNoether>** ok, so anyway  
**\<suraeNoether>** :)  
**\<sarang>** So  
**\<sarang>** Questions on the audit?  
**\<sarang>** Or speaking engagements?  
**\<sarang>** Or summer teaching?  
**\<sarang>** 3 weeks vs 6 weeks?  
**\<moneromooo>** I'd like to know when's the deadline to have a cleaned up patchset for BPs for the review. I've been busy elsewhere and kinda left it lying as is for the last... week or two.  
**\<moneromooo>** I lose track of time.  
**\<suraeNoether>** i haven't the foggiest idea, you're the person i would have asked. :P  
**\<sarang>** Well  
**\<suraeNoether>** oh actually  
**\<suraeNoether>** you meant for the code review  
**\<sarang>** Benedikt will be reviewing the Java code, so no worries there  
**\<sarang>** I want to have the other audit started within a month  
**\<moneromooo>** Yes. When do I need to have it ready and cleaned up :)  
**\<moneromooo>** OK.  
**\<sarang>** There's no real deadline; they'll start when we're ready  
**\<sarang>** But the OSTIF groups are being slow on SoW  
**\<sarang>** I've been told this week  
**\<sarang>** and then time to review, raise funds, and give them the go-ahead  
**\<sarang>** hence the month  
**\<hyc>** wait, auditing the java code? so we still need someone to verify that the C++ impl matches the java  
**\<sarang>** The only other change to be ported from Java since the last code I sent is just the code comments referencing paper lines, which are changed now  
**\<sarang>** hyc yes  
**\<sarang>** We're doing both  
**\<suraeNoether>** benedikt is doing the java, i believe OSTIF was going to do the C++  
**\<sarang>** Benedikt will verify that the Java matches the math  
**\<sarang>** since he did the math  
**\<hyc>** ok  
**\<sarang>** OSTIF group will do the C++ to the Java  
**\<sarang>** and the paper, to the extent they can  
**\<sarang>** I wanted overlap  
**\<suraeNoether>** there is some fault-tolerance value in checking two implementations instead of one  
**\<sarang>** Well, and Benedikt knows the math better than anybody, and had already done a separate more general Java working  
**\<suraeNoether>** Anyway, at my end of MRL, my work this past week was largely focused on multisig and musig. I expressed concern last week that our current multisig scheme is vulnerable to key cancellation. since then, luigi1111 has proven me wrong, which is fantastic: when we compute keys, we use an authentication procedure that ensures that a key-cancelling adversary can't both cancel keys and pass authentication  
**\<suraeNoether>** without violating the discrete log assumption.  
**\<suraeNoether>** but i'm still looking into musig's manner of computing keys, which is a way of computing aggregate keys without an authentication procedure in one step, which is nice, but not necessary  
**\<suraeNoether>** for our purposes  
**\<suraeNoether>** in addition to that, I've been communicating with Tim Ruffing and his colleague Russel Lai about an upcoming paper on their sublinear ring signatures that re-uses group elements and integers to reduce signature space and verification time, which is neat  
**\<suraeNoether>** more generally for sublinear ring signatures, though, I've been sort of casually looking into how one would implement a ring signature with an arithmetic circuit. so we can exploit the goodness of bulletproofs for our signatures also  
**\<sarang>** Yeah, revisiting that with the addition of some group operation optimizations will be intriguing  
**\<suraeNoether>** yeah, actually that brings up the following point  
**\<suraeNoether>** all the multi-exp optimizations that we have been enjoying with bulletproofs will make RTRS RingCT much faster as it is  
**\<suraeNoether>** we may need to do some benchmarking. no matter what, this sublinear ring signature idea seems to not want to die. :)  
**\<hyc>** yay, nice. and I suspected bulletproofs would do more for us, that's very interesting  
**\<sarang>** BPs have a lot of potential  
**\<suraeNoether>** knowing blockstream, they'll beat us to it, but hey  
**\<sarang>** Blockstream is working on the AC stuff quite heavily  
**\<sarang>** but their work is on a different curve and a different codebase  
**\<sarang>** a beautiful synergy  
**\<sarang>** plenty of upward mobility  
**\<sarang>** other business lingo like that  
**\<sarang>** Any other topics of interest?  
**\<sarang>** I think I've covered the major ones for m  
**\<sarang>** \*me  
**\<suraeNoether>** I already mentioned my cryptocurrency network simulation, which is a sort of sandbox to test things like SPECTRE and PHANTOM and variations in difficulty computations, and to test things like how network topology influence security of various proposals under various attack scenarios  
**\<suraeNoether>** which if anyone is interested, is here: https://github.com/b-g-goodell/research-lab/tree/master/source-code/Poisson-Graphs  
**\<sarang>** Poison graphs, eh?  
**\<sarang>** deadly  
**\<suraeNoether>** currently produces a transcript of events as the network evolves. the code needs better commetns and more detailed reports, and there is one known bug, but  
**\<suraeNoether>** and i took an issue out already with that bug  
**\<suraeNoether>** In addition to all that and the educational outreach Sarang mentioned, I've also been looking into the first monero conference idea more deeply  
**\<sarang>** I love the idea  
**\<gingeropolous>** any thoughts on difficulty algo?  
**\<ArticMine>** Excellent idea  
**\<sarang>** gingeropolous: let's chat about the state of that  
**\<suraeNoether>** I am scoping out a handful of locations this week. Most of the venues I've looked at cost between 7500 USD and 10k USD for two days. Catering would cost around 3k for two days, AV equipment will be at most a 3-4k, which is probably an over-estimate  
**\<suraeNoether>** if we provide travel support to, say, 9 speakers, and take them all out to dinner, that's an additional 4k or so  
**\<suraeNoether>** in total, not including web presence and advertising and printing up programs and stuff, we're looking at under 25k for the entire event  
**\<sarang>** How does that compare to the earlier estimates you had?  
**\<suraeNoether>** cheaper by a few thousand  
**\<sarang>** Nice  
**\<sarang>** Will you charge for tickets?  
**\<sarang>** to offset?  
**\<ArticMine>** What locations are you considering?  
**\<suraeNoether>** ArticMine: All the locations I'm looking into are in the Denver area  
**\<scoobybejesus>** How many potential attendees?  
**\<gingeropolous>** the right place for paranoia  
**\<suraeNoether>** initial numbers were 75-100, but i'm terrified of mis-estimating that  
**\<suraeNoether>** if this were a pharmaceutical conference, to get 100 attendees, you need to send out 3000 invitations or more  
**\<suraeNoether>** any cost above what I just quoted would be marketing costs  
**\<sarang>** I expect a lot of people will want to go, but travel will be their deciding factor  
**\<hyc>** lol. Who is the target audience, devs, general user community?  
**\<suraeNoether>** and I would prefer this to be a small technical sort of thing rather than a big flashy Dash-funded concert  
**\<suraeNoether>** i want folks to present technical talks on privacy-enhancing technologies in cryptocurrencies  
**\<sarang>** That part sounds like a lot of overlap with the Redacted conference that the Portland group is planning  
**\<gingeropolous>** can i pump my ico?  
**\<suraeNoether>** gingeropolous: I love Ice Cream Offerings, brother, you are more than welcome  
**\<gingeropolous>** please dedicate many thousands to ice cream catering  
**\<sarang>** Actually nvm suraeNoether, they've tooled their conference to be general/business privacy  
**\<ArticMine>** The question of protocol scaling in Monero vs virtually an other coin is significant  
**\<ArticMine>** any other  
**\<suraeNoether>** ArticMine: agreed, and we face some very unique challenges specific to our protocol  
**\<ArticMine>** and some significant advantages  
**\<suraeNoether>** So after I take a look at actual venues, I'll have it narrowed down to a few specific locations.  
**\<suraeNoether>** Does anyone have any questions for either me or Sarang, or did anyone hop in late and want to describe a project they've been working on?  
**\<sarang>** What's the event name?  
**\<suraeNoether>** i'm sure someone will come up with a good acronym  
**\<oneiric>** what is rough estimate for a date?  
**\<suraeNoether>** Summer 2019  
**\<sarang>** Kunvenante  
**\<sarang>** "gathering"  
**\<gingeropolous>** so... i think this conference is great... is there any chance we could get an event planner to do this? U two are way too overqualified and valuable, timewise....  
**\<gingeropolous>** unless this is a nice mental bikeride  
**\<suraeNoether>** I've been speaking with an event planner pro-bono actually  
**\<shillobear>** will carlos matos be a guest speaker?  
**\<suraeNoether>** all the numbers I gave you are from an e-mail form her  
**\<hyc>** nice  
**\<sarang>** gingeropolous: I absolutely do not want to plan a conference 0\_0  
**\<suraeNoether>** sarang \^  
**\<gingeropolous>** noice  
**\<suraeNoether>** and if we decide to go forward with it (it seems like everyone is okay with that) we'll contract out with her directly once things are a little more finalized  
**\<hyc>** sounds like a great idea.  
**\<hyc>** on that note I gotta bug out. ttyl  
**\<sarang>** Yeah we're just about at 18:00 now  
**\<sarang>** Last remarks?  
**\<suraeNoether>** good night and good luck!  
**\<suraeNoether>** or good morning!  
**\<oneiric>** sorry if dumb question, is the revised bulletproofs paper up somewhere?  
**\<sgp>** Sorry for missing the meeting. I read the logs and everything looks good to me :)  
**\<sarang>** oneiric: https://eprint.iacr.org/2017/1066.pdf  
**\<oneiric>** thanks sarang :)  
**\<sarang>** np  
**\<suraeNoether>** Kongreso Monero 2019  
**\<suraeNoether>** Monero Kongreso? :P  
**\<gingeropolous>** Kongrenero  
**\<gingeropolous>** portmanteau all the things  
**\<gingeropolous>** and then we can have an intro video to the tune of "Canyanero"  
**\<sarang>** excellent reference  
**\<suraeNoether>** Kongreso Monero Barolo?  
**\<gingeropolous>** i;ll work on organizing an overnight hackathon dj'd by boris brejcha, 10 PM to 6 AM.  