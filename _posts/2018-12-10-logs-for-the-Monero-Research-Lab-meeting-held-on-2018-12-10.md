---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-12-10
summary: Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** OK, it's about time to begin our meeting  
**\<sarang>** Greetings to everyone; who's here?  
**\<sgp\_>** hello  
**\<engelmensch\_>** hi  
**\<sarang>** ping binaryFate endogenic gingeropolous hyc Isthmus moneromooo nioc parasew[m] rehrar smooth stoffu etc  
**\<endogenic>** hello  
**\<sarang>** suraeNoether will be away today  
**\<sarang>** First off, updates on recent work  
**\<sarang>** another tech note (MRL-0010) is merged to -site along with several others that now appear  
**\<sarang>** https://getmonero.org/resources/research-lab/  
**\<sarang>** soon lab.getmonero.org will direct there as well  
**\<sarang>** MRL-0011 deals with graph matching and is being finalized  
**\<sarang>** Along those lines, some interesting lit review  
**\<sarang>** An older paper on quantum-resistant accumulators: https://eprint.iacr.org/2017/1154  
**\<sarang>** One on highly expressive accumulator proofs: http://legacydirs.umiacs.umd.edu/~zhangyp/papers/accum.pdf  
**\<sarang>** Publication of a paper we saw as a talk in London, about using nested merkle trees to avoid evil remote nodes: http://legacydirs.umiacs.umd.edu/~zhangyp/papers/accum.pdf  
**\<sarang>** whoops, wrong paste: https://ieeexplore.ieee.org/abstract/document/8406557/  
**\<sarang>** And the paper discussed this morning about cross-chain stats: https://arxiv.org/abs/1812.02808  
**\<hyc>** cool stuff  
**\<sarang>** Besides those, I'm reviewing additional non-published stuff, one of which is an alternate proposal for return addresses  
**\<sarang>** sgp\_ suggested doing a youtube series called Breaking Monero  
**\<sarang>** each short episode would talk about a common method of monero analysis  
**\<engelmensch\_>** to help the DHS ;) ?  
**\<sarang>** heh  
**\<sgp\_>** want me to paste the initial description ideas?  
**\<sarang>** please do sgp\_  
**\<sgp\_>** I didn't update yet with your feedback  
**\<sarang>** that's fine  
**\<sgp\_>** https://www.irccloud.com/pastebin/XI0H2aU9/Breaking%20Monero%20Ideas  
**\<sarang>** I think doing this will speak well to our transparency and get ahead of low-quality research  
**\<sgp\_>** I also think it will help Monero research be more approachable to those who do not idle here all day  
**\<sarang>** Any thoughts after reading this? (Or on my previous statements about lit review and MRL papers?)  
**\<sarang>** ^^  
**\<engelmensch\_>** is there a plan to add paper references to the episodes=  
**\<engelmensch\_>** ?  
**\<sarang>** We could  
**\<sgp\_>** engelmensch\_: good idea. would take preparation, but would be worth it  
**\<sarang>** Eh, or just short episode notes on a corresponding reddit post  
**\<sarang>** Episode 0: A Preprint is Not Peer Review  
**\<sarang>** The thought was to start the series next week  
**\<sarang>** 15 minute-ish episodes, perhaps  
**\<sarang>** informal  
**\<sgp\_>** exactly. keep it pretty short to keep user attention  
**\<sarang>** Anyway, be thinking about ideas and presentation. Consider them a shorter series similar to the Bulletproofs fireside chat that sgp\_ and I did a while back  
**\<sgp\_>** initial timeline is announce next week, create most content in early Jan  
**\<sarang>** ah ok, nvm then  
**\<engelmensch\_>** any plans for video visualisations? that might help a lot to grasp the problem. or else a whiteboard  
**\<sarang>** I misunderstood  
**\<sgp\_>** first intro episode next week  
**\<sgp\_>** yes, will include visualizations  
**\<sarang>** the finest stick figures that paint can offer!  
**\<engelmensch\_>** ;)  
**\<sgp\_>** pretty much  
**\<sarang>** But IMO that's fine  
**\<sarang>** Too much flash and people will accuse you of being up to something  
**\<hyc>** that's quite a list of episodes. looks good  
**\<sarang>** "Here you go, now shut up about chain analysis"  
**\<engelmensch\_>** not flash, but having too many references in you brain might break stuff, so a diagram is quite useful  
**\<sarang>** agreed  
**\<sarang>** On a funding note, FFS for suraeNoether and me have been posted for Q1 2019  
**\<sarang>** and related to this, a rep from the Loki Foundation contacted me and said their group is interested in funding a researcher in fiat  
**\<sarang>** they've offered 15000 USD for this  
**\<sarang>** the escrow system is not set up for this, so any researcher who took them up on this would do so separately from FFS  
**\<sarang>** I'd be interested to know people's thoughts on the idea of having a researcher partly paid by FFS and partly in fiat by this organization  
**\<sgp\_>** up to the individual I suppose  
**\<sarang>** Their original hope was to help out someone new, which would be great if we could find such a person  
**\<sarang>** but they said that given the market and current FFS needs, they'd be open to doing this for me and/or surae  
**\<notmike>** If only such a person existed!  
**\<sarang>** The latter would obviously be a big change  
**\<sarang>** I'm personally open to the idea, provided the community can be assured that there are no extra strings attached to the fiat  
**\<sarang>** and that research directions aren't being influenced  
**\<sarang>** Anyway, those are my updates. Does anyone else have work of interest to share?  
**\<engelmensch\_>** in my opinion it looks the same as other funded researchers contributing to the comunity  
**\<sarang>** Agreed, but community funding carries a certain onus  
**\<notmike>** Any updates on konferenco?  
**\<engelmensch\_>** I try to write up a simulation based security proof for the ringct  
**\<sarang>** suraeNoether has been planning, but I do not know of updates (and he is away for the morning)  
**\<sarang>** engelmensch\_: in what way?  
**\<notmike>** What happened to the coral reef project?  
**\<engelmensch\_>** in a semi-honest model and then hope to GMW compile it to the malicious model  
**\<sarang>** What aspect of ringct?  
**\<endogenic>** notmike how is that remotely appropriate for this channel? does anyone else find notmike disruptive?  
**\<endogenic>** trying to have a meeting here  
**\<engelmensch\_>** I want to show that the commitment do not leak any more information, as an attacker would find out anyway  
**\<notmike>** excuse me endogenic can you take a step back and try to calm down, please  
**\<endogenic>** no  
**\<notmike>** I'm just curious as are many others about where the monero from the FFS is goin  
**\<notmike>** If you haven't noticed this is something many are asking.  
**\<sarang>** we can discuss that shortly if you don't mind  
**\<endogenic>** go ask on reddit then. this is not your personal attention seeking venue  
**\<sarang>** engelmensch\_: the amount commitments?  
**\<notmike>** Nor have I tried to make it that guy. You should really try to calm yourself. :/  
**\<engelmensch\_>** yes the amount commitments and the intermeidate stuff in the single, in my setting also the color commitments  
**\<sarang>** well the commitment itself is a pedersen commitment, not much info gained there  
**\<sarang>** is it something particular to the signature definition you're looking at?  
**\<engelmensch\_>** not sure if I can only reduce the security of my contruction to the current monero  
**\<engelmensch\_>** I use the MLSAG as a blackbox  
**\<sarang>** Interesting  
**\<sarang>** We'll be glad to help as needed  
**\<engelmensch\_>** but for my paper I'd like a formal proof that it's sound and secure. And the best way to do this was via a simulation based proof  
**\<sarang>** notmike: non-research FFS requests are outside of MRL's scope  
**\<engelmensch\_>** at least, that was what a prof told me who is into it  
**\<sarang>** OK  
**\<sarang>** The existing analysis was essentially a 2-D version of the Liu proofs  
**\<engelmensch\_>** yes, I saw this for the MLSAG and just reference it  
**\<notmike>** sarang: well, consider the Loki Foundation's offer. There should be a serious effort to draw in other researchers before any consideration is made of paying present researchers with that cash.  
**\<sarang>** We don't want to spread community donations too thin  
**\<sgp\_>** at the moment even moneromooo's FFS has been open for a few days  
**\<sarang>** If current researchers get fully funded, it makes more sense to investigate someone else  
**\<notmike>** Its not clear that this would happen from bringing in other researchers, or that fully funding present researchers is the best use of the funds.  
**\<sarang>** It's up to donors to decide what to do with their money  
**\<endogenic>** notmike: i am calm. nice try though  
**\<engelmensch\_>** is there a preprint/draft of MRL-0011?  
**\<sarang>** engelmensch\_: privately, yes, but it's not in a state for public release yet  
**\<engelmensch\_>** ok  
**\<sarang>** it needs only a few more days  
**\<sarang>** then will be posted to github and -site  
**\<sarang>** One issue with bringing in other researchers is that most folks with training in this field are employed already, or are grad students  
**\<engelmensch\_>** because we're writing a grant proposal to investigate cross-layer effects of privacy preserving p2p entworks and privacy preserving applications ontop of them  
**\<sarang>** engelmensch\_: this work is purely about graph analysis  
**\<sarang>** I'll be interested to see your simulation work on this engelmensch\_  
**\<sarang>** Any other news or work of interest to share?  
**\<engelmensch\_>** it might be related, as we did some work with DC nets on the p2p layer which also create some sort of anonymity set as the ringsig  
**\<sarang>** hmm ok, let's talk after meeting about details  
**\<engelmensch\_>** sorry if I'm too verbose  
**\<sarang>** no prob  
**\<sarang>** Hmm well it seems the well of information has run dry a bit early today  
**\<sarang>** I suppose we could discuss more about engelmensch\_'s work given the timing  
**\<sarang>** How do you see our analysis complementing the grant proposal?  
**\<engelmensch\_>** by graph analysis I suppose it's tx graph analysis?  
**\<sarang>** Our work is an examination of formalizing ring sigs as graph structures, and examining the computational complexity of proposing spend histories  
**\<sarang>** it also can tie into other heuristics, like the guess-newest output heuristic  
**\<engelmensch\_>** ok, and how does this hold, if you get auxiliary information from the p2p layer?  
**\<sarang>** You can use heuristic information, like output age or presumably probabilities from p2p layer, to optimize your history selection  
**\<sarang>** and for identified outputs, you can simply remove them from the graph altogether as you might expect  
**\<sarang>** none of it is provable, of course, and the complexity is huge  
**\<engelmensch\_>** jup. my effort on provable stuff was only considering 1 tx  
**\<sarang>** Ah ok, this is a more global analysis  
**\<sarang>** but it could be examined for smaller sets  
**\<engelmensch\_>** the idea behind simulation based based sec proofs is that you create an ideal world, where there is e.g. a trusted third party and then you compare the views of different parties to the real ones. And if there is an algorithm which can create the view of an actor without access to it's secrets, it is considered secure  
**\<engelmensch\_>** I'm in the process of understanding how these proofs actually work from: https://eprint.iacr.org/2016/046.pdf  
**\<engelmensch\_>** maybe written down it makes more sense. I'm happy to have a working implementation of it in the meantime from postponing the theory work  
**\<sarang>** Awesome  
**\<sarang>** Well, looks like good work in progress on that analysis  
**\<sarang>** We should have the first graph paper finished in a few days for review  
**\<sarang>** There's definitely room to expand it to a second one as well  
**\<engelmensch\_>** I'm happy to review it  
**\<sarang>** That'd be excellent  
**\<sarang>** I'll post it here when it's a good state  
**\<sarang>** Original plan was to include a broader scope, but we dialed it back a bit and are removing some stuff  
**\<sarang>** surae also has some code relating to it  
**\<engelmensch\_>** cool  
**\<sgp\_>** Side note: I made this post yesterday regarding attackers collecting IP broadcast data by running nodes: https://medium.com/@JEhrenhofer/attacker-collection-of-ip-metadata-27032e736371  
**\<sgp\_>** m2049r got back to me with an estimate gingeropolous: 3183 Monero nodes, 64 of them with port 18089 open, 56 of those on the proper block height  
**\<sarang>** Conclusions?  
**\<sgp\_>** Attackers can run x many nodes to connect to y clients directly, therefore learning more about the transaction broadcast process  
**\<sgp\_>** s/y clients/y other nodes  
**\<engelmensch\_>** yes. there are some modified clients which connect to all possible nodes and do not relay any pending TX to figure out the timings when they receive the tx  
**\<engelmensch\_>** this can be used to deduce the topology  
**\<engelmensch\_>** we plan on running such a node  
**\<engelmensch\_>** it is also useful to get metrics for 0-confirmation clients  
**\<sarang>** sgp\_ had some estimates posted to reddit/twitter based on this  
**\<engelmensch\_>** how long is a good time to wait before you can be sure that a TX will most likely be included in a block  
**\<m2049r>** since each node reports who its connected to, the topology is clear. or what do you mean engelmensch\_ ?  
**\<engelmensch\_>** no. when you collect the timings of when you get a tx from a node, you can infer the latency between nodes. If you do this with planetlab and have low latency to most peers and GPS timestamping, this gives you pretty good latency estimates  
**\<sarang>** the IP information is a good indicator for the importance of i2p/tor routing  
**\<sgp\_>** Yes. For my research, the next step is estimating the impact that server providers can have  
**\<sgp\_>** m2049r is there a way to do an org lookup on these IPs?  
**\<engelmensch\_>** you can use the location ISP database  
**\<engelmensch\_>** that gives you decent results  
**\<engelmensch\_>** http://lite.ip2location.com/  
**\<sgp\_>** Cool, didn't know about this specific service  
**\<engelmensch\_>** I played with it, when I was using zmap to scan 0.0.0.0/0 and knocked on some ports  
**\<engelmensch\_>** it's a nice way to visualise, but should also serve well to track clients  
**\<sarang>** So engelmensch\_ you are more interested in latency-based topology, as opposed to sgp\_'s interest in ip data from nodes?  
**\<sarang>** if I'm understanding the difference properly  
**\<sgp\_>** At the moment I've done no research with latency  
**\<sarang>** right  
**\<engelmensch\_>** we are 2 PhD students, I'm more on the blockchain layer and my colleague is more network oriented, so he leads this direction  
**\<engelmensch\_>** but atm he wants to have a latency graph  
**\<sarang>** engelmensch\_: is your interest more about adversarial data, or about propagation statistics?  
**\<engelmensch\_>** when you have the propagation statistics, you can motivate a lot of research why latency is important. e.g. if you use a DS network to disseminate pending TX (to hide your position) it has to reach all nodes in an appropriate amout of time  
**\<engelmensch\_>** so there are a lot of really good privacy preserving networks, but they normally have n² messages and therefore are unusable  
**\<sgp\_>** fwiw I have a connection here at Minnesota to Professor Hopper, who does Tor latency and bandwidth research iirc. Could be a useful person to talk to  
**\<sgp\_>** https://www-users.cs.umn.edu/~hoppernj/  
**\<engelmensch\_>** I saw a lot of analysis from the guys in sardinia: http://blockchain.unica.it/  
**\<engelmensch\_>** It's getting late in Europe ;) I'll read up later  
**\<sarang>** Thanks for joining engelmensch\_  
**\<engelmensch\_>** thanks for all the input and discussion  
**\<m2049r>** http://lite.ip2location.com/ looks pretty good - is there a catch?  
**\<sarang>** I guess we never formally adjourned, but thanks to everyone for joining  
**\<sarang>** Seems the order of the day is network analysis  
