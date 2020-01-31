---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-06-25
summary: MRL work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>** let's get this partay starteeeeed  
**\<suraeNoether>** Agenda today: 1. Greetings. 2. Brief MRL update. 3. Show and tell! 4. Who's going to defcon?  
**\<suraeNoether>** hi everyone  
**\<oneiric\_>** hullo  
**\<suraeNoether>** Okay, 2. I have finally posted all our meetings logs here: https://github.com/b-g-goodell/research-lab/tree/master/meta/research-meeting-logs  
**\<suraeNoether>** I didn't want to fork the whole meta repo just to keep track of our research meeting logs, so I just started a folder  
**\<isthmuscrypto>** Greetings!  
**\<suraeNoether>** if anyone objects or wants to make PRs to monero-project's meta repo to track our logs, I'm fine with that, too, but this is easiest for me to deal with.  
**\<needmoney90>** Morning all  
**\<sgp\_[m]>** Hello  
**\<suraeNoether>** morning isthmuscrypto  and needmoney90   
**\<suraeNoether>** Another update, Sarang will be back next week I believe  
**\<suraeNoether>** Other than that, Sarang and I will be at defcon, and we are excited to meet up with folks  
**\<sgp\_[m]>** They're more accessible if they are posted as a blog post on getmonero. Probably some value there  
**\<suraeNoether>** sgp\_[m]: would I make a PR to the monero-site repo then?  
**\<binaryFate>** hello  
**\<sgp\_[m]>** There are some open PRs now for the community meetings. Best to use those as a template  
**\<suraeNoether>** so the answer is yes, and to use those as a template? I haven't done any blog posts through the repo before, so I'm not sure exactly what the procedure is. :P  
**\<selsta>** they require markdown change  
**\<suraeNoether>** I'll look around and take care of it later today  
**\<sgp\_[m]>** Basically yes. It's not very difficult  
**\<suraeNoether>** cool, then easy thing to check off my list later  
**\<suraeNoether>** So, 3. Show and tell. Silur is here, isthmuscrypto is here, and both of them are working on rather interesting projects I'd like to hear about.  
**\<silur>** I'm struggling with testing my RTRS lib, and now got into VDFs, verifiable delay functions and trying to generalize them for lattices  
**\<suraeNoether>** i didn't catch isthmuscrypto's original description of his generalized adversarial networks, when he mentioned it for the first time a few weeks ago  
**\<silur>** and of course as usual lattices are more interesting than testing but I need to have RTRS done for HCPP :/  
**\<suraeNoether>** oooh VDFs are super super interesting to me  
**\<isthmuscrypto>** Hi @suraeNoether https://github.com/Mitchellpkt/BlockchainAnalysisGAN  
**\<silur>** I have a general VRF construction for DH and EC, PoC ready (I can share the notebook) and a blockchain is already adapting it, working on the lattice VRF now  
**\<isthmuscrypto>** I'm tied up in a meeting for the next 50 minutes and sneaking the MRL meeting on the side, so I'll be intermittent in responding.  
**\<suraeNoether>** ah silur, that's a conference I would have loved to attend if I had heard of it a few months earlier.  
**\<silur>** so my next step is to make the same for VDFs  
**\<suraeNoether>** that's awesome, silur!  
**\<silur>** I'm sure we can figure something out  
**\<silur>** about HCPP  
**\<suraeNoether>** oh, no, i literally can't attend, but maybe next year.   
**\<suraeNoether>** oh that brings up something: I was thinking maybe we could start taking issues out on the monero-project/research-lab repo for conferences that the community might want us to attend  
**\<suraeNoether>** a lot of them I'm willing to go to out of pocket because they are great experiences, but keeping track of the wide world of conference calendars can be challenging  
**\<isthmuscrypto>** " track of the wide world of conference calendars can be challenging" < sounds like we need a decentralized solution xD  
**\<silur>** MARKET GAP! :D  
**\<suraeNoether>** tokenize it!  
**\<silur>** ICO it  
**\<oneiric\_>** lol  
**\<rehrar>** hi  
**\<suraeNoether>** is it unreasonable to ask: if folks hear about a technical conference, literally anywhere in the world, at which MRL should have a presence, open up an issue about it on the monero-project/research-lab repo?  
**\<suraeNoether>** hi rehrar   
**\<silur>** so brings me back to a interesting bottleneck I can't overcome for weeks for all my current work  
**\<silur>** VDF, IVC, VRF, Bulletproofs....  
**\<silur>** ACs  
**\<silur>** I don't have any experience for arithmetization of boolean circuits  
**\<silur>** anyone willing to help out on that?  
**\<silur>** maybe not a meeting subject, let's go on with the agenda and get back on it later :D  
**\<suraeNoether>** well funny thing about that silur  
**\<suraeNoether>** boolean circuits are arithmetic circuits already, just not contrariwise  
**\<suraeNoether>** which is one of my favorite -wise suffixed words  
**\<silur>** well in Gf(2)  
**\<silur>** but most protocols need a galois field with a large prime base so I thought bulletproofs won't work ever on Gf(2)  
**\<suraeNoether>** ah that's what you meant  
**\<silur>** anyway I'm stuck now with QSP-s and a little less-efficient snark stuff to experiment with BPs  
**\<suraeNoether>** well, we'll chat about it later  
**\<silur>** yea sorry for holdin' the meeting :D  
**\<suraeNoether>** does anyone else have any interesting work they want to talk about? My work this past week has been into zero knowledge proofs and extractability requirements and schnorr signatures. primary reference of the week is this one (pdf link https://link.springer.com/content/pdf/10.1007/3-540-48071-4\_28.pdf)  
**\<suraeNoether>** primarily, I'm thinking it's possible we don't need to worry about the KOSK setting with only minor adjustments to our current scheme, and if that's the case, all the musig key computation and all the commit-and-reveal nonsense just goes away  
**\<suraeNoether>** in which case the whole paper will \*AGAIN\* collapse to something smaller  
**\<suraeNoether>** but I need some sanity checks from folks with more knowledge in the field of complexity theory  
**\<suraeNoether>** Other than that, I recently finished advising the ZCash Foundation in giving out 250kUSD in grants, I'm working on encrypted memo fields in Monero transactions, and I've been writing up my backlog statements of work. I've already broken 160 hours this month, but I like this job a whole lot so I'm not really taking weekends until I start feeling burnt out.  
**\<silur>** usual cryptographer's calendar :D  
**\<suraeNoether>** oh, earlier this week I made some commits to my PoissonGraph simulations (see here https://github.com/b-g-goodell/research-lab/tree/simple/source-code/Poisson-Graphs/new) which are \*inches\* away from successfully producing human-readable transcripts describing cryptocurrency network simulations.  
**\<suraeNoether>** The sim suite is for testing difficulty algorithms, consensus algorithms, and dynamical properties of the network.   
**\<suraeNoether>** a friend who just got a job at the university of Exeter (inspiration for Hogwarts) is interested in writing a population ecology-inspired paper demonstrating how ethereum can effectively prey upon bitcoin's hashrate by rewarding bitcoin block-withholding attacks using ethereum smart contracts.  
**\<silur>** wow this is awesome  
**\<isthmuscrypto>** o\_0  
**\<suraeNoether>** https://arxiv.org/abs/1805.08832  
**\<suraeNoether>** this paper is sort of the foundation of that idea  
**\<suraeNoether>** well  
**\<suraeNoether>** one part of the foundation  
**\<oneiric\_>** +1000 on the sim network research suraeNoether!  
**\<silur>** oh yea I saw a paper based on this .... "vulnerability"?  
**\<silur>** https://eprint.iacr.org/2018/581  
**\<suraeNoether>** yes, exactly  
**\<suraeNoether>** that's another part of the foundation, but i haven't been able to find the reference recently, thank you  
**\<suraeNoether>** i forgot that was mccrory  
**\<suraeNoether>** also a nice guy  
**\<suraeNoether>** hmm, published june 6  
**\<suraeNoether>** i must have seen him talk about this   
**\<suraeNoether>** Allright, next meeting agenda point: who's going to defcon?  
**\<rehrar>** I am  
**\<rehrar>** and all of you should also  
**\<suraeNoether>** yay, i think most of the board of directors of MAGIC will be there, if not all of us  
**\<suraeNoether>** we should all go out for a dinner  
**\<silur>** but... it's in the... USA :'(  
**\<suraeNoether>** ugh, no kidding  
**\<rehrar>** 'murica  
**\<suraeNoether>** who wants to start a sea-cooled, solar-powered mining farm with me on the pacific coast of Costa Rica?  
**\<oneiric\_>** yes please  
**\<oneiric\_>** :)  
**\<suraeNoether>** who wants to fund it?  
**\<oneiric\_>** Elon Musk  
**\<suraeNoether>** good ole' elon  
**\<suraeNoether>** okay  
**\<silur>** i'm still thinking about defcon, also I have another blockchain security conf in vegas in october that I'm invited as a speaker but still couldn't get my head over getting into US  
**\<silur>** last year I think 2 ppl got arrested at defcon?  
**\<silur>** the wannacry and the election machine guy  
**\<sgp\_[m]>** ooh what conference?  
**\<rehrar>** just surround them so po po can't get to them  
**\<rehrar>** civil disobedience of whatever  
**\<suraeNoether>** if you are invited as a speaker, the conference should be able to write you a letter requesting a temporary visa for your visit, but i'm not sure if hungary is on the list of countries that need temporary visas even for a conference visit. i would assume so, because we have shut our borders to friggin canada  
**\<silur>** it's more complicated than that, I'm stateless  
**\<suraeNoether>** !  
**\<suraeNoether>** good freaking luck  
**\<silur>** https://www.hoshocon.com/  
**\<rehrar>** does being stateless suck?  
**\<rehrar>** it sucks that you wouldn't be able to get into USA :/  
**\<suraeNoether>** being stateless is a desirable state for a hash-based signature scheme.  
**\<rehrar>** they should see about holding Defcon in Canada  
**\<sgp\_[m]>** Ugh Tues-Thurs  
**\<suraeNoether>** should we hold the monero conference in another country?  
**\<silur>** HCPP last year had a "secret" monero meeting, I met a dev guy there  
**\<silur>** he was giving away SO MANY stickers  
**\<silur>** so I guess HCPP is ideal :P  
**\<suraeNoether>** Okay, so anyway  
**\<suraeNoether>** :D  
**\<oneiric\_>** hold monero conf in Liberland: http://www.liberland.org/  
**\<suraeNoether>** Let's call this meeting what it is: done  
**\<suraeNoether>** \</meeting>
