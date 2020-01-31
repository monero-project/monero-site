---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-06-17
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** GREETINGS  
**\<parasew[m]>** hello!  
**\<sarang>** So much happening this week...  
**\<sarang>** suraeNoether: care to go first with your roundtable? Although I can probably guess what it'll be =p  
**\<suraeNoether>** yeah, just konferenco stuff this week  
**\<suraeNoether>** getting banners printed, etc  
**\<sarang>** super excited  
**\<suraeNoether>** there are THREE free volunteer tickets available for Konferenco  
**\<suraeNoether>** you just need to DM @moneroKon on twitter to set it up  
**\<sarang>** Take a look at banner, Michael!  
**\<suraeNoether>** exchange 6 hours of work-ish time for a free ticket to this killer event :D  
**\<suraeNoether>** Basically everything is coming crashing toward us like a freight train, but we have had everything set up and waiting for its arrival for a few weeks. working with sgp on streaming and video, etc. etc.  
**\<suraeNoether>** we were originally going to record the whole thing and put it on youtube, but sgp is rigging up a livestream for us, which is fantastic and saving us a few grand on A/V costs  
**\<sarang>** sounds... grand  
**\<suraeNoether>** other than that, i'm more here to answer questions today. i've been doing light reading for research, including piratechain and nipopow and re-reading omniring, but my productivity is going toward monkon right now  
**\<sarang>** cool  
**\<suraeNoether>** and to take some marching orders from sarang re: omni  
**\<sarang>** heh  
**\<suraeNoether>** and the comparative analysis paper mooo mentioned  
**\<sarang>** Any questions for suraeNoether?  
**\<sarang>** Now is a good time for Konferenco questions probably  
**\<sfhi>** Is the livestream from Monerokon going to be via Youtube?  
**\<suraeNoether>** i believe that is the case, yes  
**\<sarang>** Where will be the best place for non-attendees to get information about streams and videos and relevant links?  
**\<sarang>** Here? r/Monero?  
**\<suraeNoether>** the joint panel with zcon1 will be streamed by them, and i'm not sure which outlet they'll be using for that; i'm 99% sure they are also using youtube  
**\<sfhi>** From awareness perspective, youtube is certainly the best platform to gain views, assuming the video and audio quality are good of course  
**\<sfhi>** Okaya great  
**\<suraeNoether>** sarang absolutely, we'll be throwing more information up into the Monero Konferenco general megathread on reddit, including links to the streaming talks. hopefully some folks will be livetweeting and liveredditing (is that... is that a thing?) and linking to the videos  
**\<sarang>** Will slides be posted?  
**\<sarang>** (for those presenters who choose to / have the rights to)  
**\<sfhi>** sarang: Yeah, good question!  
**\<suraeNoether>** i believe sgp is currently working on rigging a way to actually integrate them with the stream, not merely post slides after the talks  
**\<sarang>** Neat... would still be nice to have posted too  
**\<sarang>** esp. for things like charts/plots  
**\<suraeNoether>** yes, i just need to seek permission from each speaker, which I will be doing when I start receiving their slides  
**\<sarang>** Cool!  
**\<sarang>** I like how BPASE did it, where they add links to the schedule  
**\<sarang>** Keeps it all easy to find  
**\<suraeNoether>** yeah, i liked that, too  
**\<suraeNoether>** in fact, i really hate the monkon website, but that's a problem for next year I think. :P  
**\<sarang>** Definitely a table view for schedule next time  
**\<sfhi>** Currently there are 46 student, 126 general and 43 platinium tickets left. Does anyone remember what was the original amount for each?  
**\<sarang>** or a more integrated platform for it  
**\<suraeNoether>** sfhi the venue has a capacity of 280, but i dont' recall exactly how many tickets i made available in each category. I \*think\* it was 50 for students and platinum and 150 for general  
**\<suraeNoether>** but i'm also having inventory issues with our backend and we have sold (a few) more tickets than are reflected there  
**\<suraeNoether>** i believe our attendance will be around 110 after we count speakers and sponsors  
**\<sfhi>** Alright thx, it seems that it just now that people are getting active and buying tickets (no surprise there)  
**\<sarang>** Not too shabby for a first run!  
**\<nioc>** could be wrong but it may have been 200/50/50  
**\<sfhi>** Okay  
**\<suraeNoether>** nioc that sounds more accurate and is closer to the numbers i'm seeing in my guest list.  
**\<sfhi>** Cannot attend personally, but very much looking forward to the livestream :)  
**\<sarang>** Any other questions for suraeNoether?  
**\<suraeNoether>** (one of my action items for AFTER the konferenco will be to make a post mortem, including financials, media outreach, stuff like that, so that next year 1) we can decentralize the thing so more people are working on it and 2) we can learn our lessons, etc, and make the second annual more of a splash.  
**\<suraeNoether>** but to be honest: i'm freaking thrilled at the attendance  
**\<sarang>** I've been working on a few things this week, all of which were action items for me  
**\<sgp\_>** That will be very useful  
**\<sarang>** First was getting my MonKon presentation done... very excited to share data on how our transactions have changed over time for efficiency  
**\<parasew[m]>** sgp\_ has been posting on meta to use the "frab" system for monero conferences and events in the future. i can highly recommend it, have been using it for the CCC and for other events already. imho something to look for in a longer term.  
**\<sarang>** I finished an analysis of the Lelantus transaction protocol, which now includes prototyping code for Monero-to-Lelantus output migration  
**\<sarang>** https://github.com/SarangNoether/skunkworks/blob/lelantus/lelantus/analysis.md  
**\<sarang>** Spend (i.e. not mint or migration) transactions are around 3-4 kB, plus ring representation  
**\<suraeNoether>** sarang, good job on that lelantus report  
**\<sarang>** Verification for a 2-2 txn is ~34 ms... and a batch works out to ~13 ms/txn  
**\<suraeNoether>** when you say "plus ring rep" do you mean "not including ring rep?" or do you mean "and that includes ring rep?"  
**\<sarang>** not including  
**\<sarang>** because that depends how it's done  
**\<suraeNoether>** is the improvement in verf time due to batching dependent on the number of txns being batched?  
**\<sarang>** Big giant scary caveat: every spend requires a churn  
**\<suraeNoether>** ^ important  
**\<sarang>** suraeNoether: yes, of course  
**\<sarang>** Many multiexp generators are shared  
**\<suraeNoether>** so when you say the batch works out to 13 ms/txn... oh that's per txn  
**\<sarang>** so the cost is amortized across all proofs for these generators  
**\<suraeNoether>** \*hits forehead\*  
**\<sarang>** I assume batched txns do \_not\_ share ring members  
**\<suraeNoether>** so that's room for increased speed, too  
**\<sarang>** btw those numbers are for 128-rings  
**\<suraeNoether>** can you give us some intuition about what about the lelantus protocol requires the churn? is it the key image?  
**\<sarang>** Increasing to, say, 1024-rings bumps the batch ver time to ~80 ms each  
**\<sarang>** Well, serial numbers for the commitments  
**\<sarang>** Those are revealed at spend time, and the original sender knows it too  
**\<sarang>** A churn is required so that sender no longer knows the serial number at next spend tiem  
**\<suraeNoether>** sarang, do you mind if i publicly share the report you just publicly shared?  
**\<sarang>** Yes, but... all the data contained therein has \_not\_ been verified by anyone else  
**\<sarang>** and in fact, I'd like one of your action items, suraeNoether, to be checking my math  
**\<sarang>** It's possible there are glaring problems with it  
**\<suraeNoether>** want me to do checking before i share it, then, instead of the other way around? :P  
**\<sarang>** Up to you!  
**\<sarang>** I have been working with one of the Omniring authors to do the same analysis for that construction  
**\<sarang>** that is not finished  
**\<sarang>** Finally, moneromooo has taken my CLSAG code and fully integrated it into a branch for testing  
**\<sarang>** moneromooo and I got it working for multisig and tweaked things a bit for non-malleability  
**\<sarang>** https://github.com/moneromooo-monero/bitmonero/commits/crash  
**\<sarang>** I am currently soliciting auditors for that code... no word yet  
**\<suraeNoether>** yay!  
**\<suraeNoether>** that's super exciting, sarang and moneromooo !  
**\<moneromooo>** (it'll be in a separate branch for review, it's just in crash for convenience for now)  
**\<sarang>** roger  
**\<rehrar>** may I ask a question/make a suggestion for MRLs consideration?  
**\<sarang>** As far as ACTION ITEMS go, mine is to complete the Omniring review, which will be a good check against the authors, who are doing the same  
**\<sarang>** rehrar: sure  
**\<rehrar>** Sorry if I'm dropping this at a poor time, but I am about to leave for something.  
**\<sarang>** np  
**\<rehrar>** One of the big issues we have had in the past with regards to definitive statements on privacy/fungibility is the fact that the "adversary" is always poorly defined.  
**\<sarang>** Yes, because formalizing it is very tricky when done precisely  
**\<rehrar>** Threat models are vast and varied, and so making a blanket statement about Monero's abilities to protect is fool hardy, and would lead to some believing it would help them when it wouldn't or ice versa  
**\<rehrar>** But not doing anything about this leaves us floating in a strange limbo like state where no claims are made, except for the ambiguous ones like "private digital money"  
**\<rehrar>** my suggestion is for the MRL to put out a bulletin or paper or whatever, where there common threat models are chosen (of varying severity), along with some assumptions about the adversaries in those models.  
**\<sarang>** Yeah, this has been brought up a few times  
**\<rehrar>** And Monero's ability to protect and keep things private is held against these three standards.  
**\<sarang>** Part of me cringes every time, because you end up making such specific threat models  
**\<suraeNoether>** it's worth noting, rehrar, that formalizing "the adversary" for ring confidential transactions is an active area of research. one of the reasons omniring is interesting (and one of ruffing's previous prints with a sublinear scheme) is that they were able to formalize a variety of threat models that had not yet been formalized  
**\<rehrar>** At the very least, this gives us something to point to  
**\<Isthmus>** I would be happy to contribute toward "an incomplete list of adversary models"  
**\<sarang>** The big issue is external data  
**\<sarang>** We can prove all sorts of things within the cryptography itself  
**\<sarang>** but throw in things like "my ISP and my exchange are in contact with the government" and all the formal analysis falls apart  
**\<rehrar>** sarang: right, but we don't know the extent of power the ambiguous "threat" has  
**\<rehrar>** still, despite this, I see projects like tor and I2p have stated threat models that they will defend against, with "no guarantees" for anything else  
**\<suraeNoether>** rehrar tor and I2p have literal security definitions to compare against  
**\<rehrar>** and I would like to see Monero, being a respectable privacy project like it is, have something similar  
**\<suraeNoether>** that's after several decades of research into private networking  
**\<suraeNoether>** and mixnets, and so on  
**\<rehrar>** hmmm...I see  
**\<suraeNoether>** in one sense, what you are describing is exactly our job at MRL  
**\<suraeNoether>** it just may take a \*loooong\* time  
**\<rehrar>** well this perspective is helpful then  
**\<suraeNoether>** in fact, some of the security models in the omni paper are relevant here  
**\<suraeNoether>** and one of my security models in my ongoing churn analysis is also relevant  
**\<sarang>** Yeah, you're taking many layers (signature schemes, proof of work, network layer, communication between colluding adversaries, graph analysis) and throwing them all together  
**\<suraeNoether>** compiling a comprehensive source for all this? very important work. but ...  
**\<suraeNoether>** but you are right: we should start collecting our security assumptions in a common and easily referenced locations so that we can point to them later  
**\<suraeNoether>** having anything in this regard is going to be better than completely ignoring it and being vague  
**\<sarang>** Still, I agree that it's good to think about. Part of why we did Breaking Monero was to try to peel apart some of these threats and explain them  
**\<suraeNoether>** ^ \*nod\*  
**\<rehrar>** I see. Thank you for the explanation.  
**\<rehrar>** I do see the gigantic difference between Tor and Monero fwiw  
**\<rehrar>** Tor is just networking/mixnet stuff, and that's just ONE FACET of Monero's security stuffs  
**\<rehrar>** anyways, just thought I'd pop that out for consideration (again, evidently)  
**\<sarang>** A very good topic to keep in mind, though  
**\<rehrar>** thank you for entertaining me in this matter. :)  
**\<rehrar>** have to split. Carry on.  
**\<sarang>** thanks rehrar, see ya  
**\<sarang>** My action items, besides giving a kickass MonKon talk, will be to continue Omniring analysis much in the same way that I did for Lelantus  
**\<sarang>** and to continue further review of the code in moneromooo's branch  
**\<sarang>** additional eyes on it, especially for multisig, would be welcome  
**\<sarang>** Also a huge thanks to everyone who supported my CCS funding request, either financially or in spirit  
**\<suraeNoether>** i'll review those numbers to the best of my ability today after I get back from a few printshops (banners and stuff)  
**\<suraeNoether>** OH GOD THE CCS  
**\<sarang>** ty suraeNoether   
**\<sarang>** Speaking of action items... what are yours, suraeNoether? :D  
**\<suraeNoether>** my action items are to write my research report for the past 90 days, request my funding for the next 90 days, to put on this conference, to review sarang's numbers, and to finally submit the thring signature paper to a peer-reviewed journal  
**\<sarang>** Were there any questions on my work the past week?  
**\<sarang>** (forgot to ask)  
**\<suraeNoether>** in the past 6 months, MRL has put out 3 signature papers (thring sigs, clsag, dlsag), is hosting a conference, has attended two workshops, has had a public presence at MCC, and has put out several episodes of breaking monero. this has been a good couple of months. good job sarang, good job sgp, good job isthmus, good job moneromooo, and everyone else who has contributed  
**\<sarang>** Plenty more to do :/  
**\<sarang>** but that's the point of research :D  
**\<sarang>** OK, anything else to cover before we formally adjourn?  
**\<sarang>** going once  
**\<suraeNoether>** OH OH  
**\<suraeNoether>** i think i mentioned it but i'll say it again  
**\<suraeNoether>** we have a few FREE volunteer tickets for konferenco. trade 6 hours of volunteer work checking people in and setting up tables, come to konferenco for free! DM @monerokon on twitter.  
**\<suraeNoether>** aaand now i'm done  
**\<Isthmus>** My action items are just finishing up slides and trying to not miss my flight  
**\<sarang>** heh, nice!  
**\<sarang>** OK, going twice...  
**\<Isthmus>** Ooh and brainstorming about incomplete adversary list  
**\<sarang>** going thrice...  
**\<sarang>** Adjourned!  
