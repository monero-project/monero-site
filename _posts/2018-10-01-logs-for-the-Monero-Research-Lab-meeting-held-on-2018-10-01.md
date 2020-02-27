---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-10-01
summary: Surae work, Sarang work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** Hello everyone; greetings abound  
**\<hyc>** hola  
**\<sarang>** suraeNoether informs me his flight was delayed and he plans to join late if at all  
**\<sarang>** Let's briefly go around the (apparently small) table and review anything of interest from this past week  
**\<sarang>** I have finalized a few small lingering projects, like a couple of papers: one on dual-key signatures, and another on the set theory of spent outputs  
**\<silur>** hope I'm not to late hi all  
**\<oneiric\_>** jai  
**\<sarang>** and am returning to larger projects like sublinear ring sigs that were delayed due to the network upgrade prep  
**\<sarang>** I have some other news regarding external research, but I will save that until others speak about their work  
**\<silur>** yaaay sarang on rtrs \\o/  
**\<sarang>** On behalf of suraeNoether I'll say that there is a draft of an MRL ethics and conflicts statement; comments requested: https://github.com/monero-project/research-lab/issues/31  
**\<sarang>** We want to make sure that our contributors are clear about their conflicts, which is sorely lacking in our field and especially in other projects  
**\<sarang>** hyc or silur or oneiric\_ anything of interest?  
**\<sarang>** (apologies for my slow responses due to shitty wifi)  
**\<hyc>** we had a decent discussion in here about PoW algorithms  
**\<sarang>** yes indeed, so good that it was relayed to reddit  
**\<hyc>** and the threat of finding shortcuts in e.g. RandomJS  
**\<sarang>** hyc what are your conclusions from that discussion?  
**\<hyc>** there's 2 considerations - one is that long sequences of source instructions could be automatically recognized/templated  
**\<hyc>** and these templates could then be condensed into ASIC blocks  
**\<sarang>** That decreases quickly due to randomization, no?  
**\<sarang>** ideally  
**\<hyc>** the other is that if the generated code has nonuniform difficulty, a miner could detect harder nonces and skip them  
**\<hyc>** and presumably choose only easy nonces, and crunch them much faster than a vanilla miner  
**\<hyc>** I suppose this is playing with the law of averages; if you only search 1/1000th of the search space, and can do it 1000x faster, you should be able to beat regular miners  
**\<hyc>** sarang: yes, ideally the randomization prevents recognizable sequences from recurring  
**\<sarang>** (we've been to the moon something like 7 times, but wireless networking is apparently impossible)  
**\<sarang>** Does this affect your design principles going forward?  
**\<hyc>** these 2 points are actually in opposition: we could guarantee perfectly uniform difficulty  
**\<hyc>** but that requires limiting the possible generated output to some strictly defined parameters  
**\<hyc>** and that will make the output templatable :P  
**\<sarang>** What if we switch to some kind of "hash-function" with a uniform output?  
**\<sarang>** lololol  
**\<silur>** I dig into multilinear pairing in lattices to form a PQ-HIBBE. Also I'll make sure to follow this guide @sarang at HCPP, originally I didn't even want them to write MRL below my name :D  
**\<silur>** but I do have some interest conflicts and make that clear in my interview  
**\<sarang>** There are no formal standards to claiming MRL as a byline, but including it should imply that the main MRL peeps are in agreement  
**\<silur>** I don't know wheter this actually applies to those not funded by the community?  
**\<sarang>** and typically we only publish under MRL when we do releases to the main site  
**\<sarang>** If you're publishing on the side, I would personally recommend not including such a byline  
**\<sarang>** I'm often careful to say that I "work with MRL", not "for MRL"  
**\<sarang>** since nobody works "for MRL"  
**\<silur>** publish like research papers or software?  
**\<sarang>** anything  
**\<sarang>** People may attribute a certain level of researcher consensus to anything bearing The Name  
**\<sarang>** Our six papers on lab.getmonero.org are probably the only "official-ish" papers we have out  
**\<sarang>** This is all my opinion, btw  
**\<sarang>** I don't speak for anyone else  
**\<endogenic>** "People may attribute a certain level of researcher consensus to anything bearing The Name" well put  
**\<sarang>** e.g. when I speak, I have a whole slide stating that I don't formally represent MRL or Monero in my talks  
**\<silur>** this is kinda gödelic :D  
**\<endogenic>** hyc: can we find anyone to run those simulations?  
**\<silur>** yea I should include that in my HCPP slide too  
**\<sarang>** If we were a formal organization I think it would be different, but since we're a loose group that has a certain amount of sway, I want us to be hella careful about representation  
**\<sarang>** I don't even include the MRL logo  
**\<hyc>** endogenic: nobody has contacted me yet. I'll have some time to set it up myself after next week  
**\<oneiric\_>** is this similar to usual "these are my opinions not my employers" disclaimer?  
**\<sarang>** except at the end to include a link to it for people to see  
**\<sarang>** oneiric\_: basically  
**\<sarang>** "All views in this presentation are those of the author, and do not necessarily represent those of the Monero Project, Monero Research Lab, or their associated communities or contributors."  
**\<sarang>** Media doesn't know what our loose group actually means  
**\<oneiric\_>** :) much formal  
**\<sarang>** I don't blame them, but I also don't wanna muddle things  
**\<moneromooo>** "Any inference you make are you own problem"  
**\<sarang>** lol  
**\<sarang>** Anyway, silur you are free to do as you wish, these are solely my views =p  
**\<silur>** but I totally agree so I'll include this in my talk and iterview too :)  
**\<sarang>** Yes, especially for interviews  
**\<sarang>** make sure they know you speak only for yourself  
**\<sarang>** the ethics statement draft specifically addresses this  
**\<hyc>** "I thought we were an autonomous collective"  
**\<sarang>** yeah, but media assumes we're some devious entity  
**\<silur>** there was one time when after the interview they published me as a monero developer even though I stated in the recording that im not :/  
**\<sarang>** I always keep in mind not to say anything to a journalist that I'm not comfortable having twisted beyond recognition =p  
**\<sarang>** lol hyc I totally missed your reference :(  
**\<sarang>** So hyc continues his design work toward ASIC-proof random code  
**\<sarang>** silur wades the murky waters of cryptofame  
**\<sarang>** suraeNoether waits patiently at an aeroport  
**\<sarang>** As was discussed yesterday, I received some paper drafts from external researchers  
**\<endogenic>** "I'm not comfortable having twisted beyond recognition" i know that feel  
**\<sarang>** they basically duplicated all our blackballing and set theory work  
**\<sarang>** formalized it quite nicely  
**\<sarang>** and plan to publish  
**\<sarang>** As a professional courtesy I can't share the papers themselves, but they contain no shocking results  
**\<oneiric\_>** did they say if they would cite MRL?  
**\<sarang>** I'm drafting a response to them, asking them to acknowledge that we already knew all this  
**\<oneiric\_>** nice  
**\<sarang>** I assume the cryptomedia will latch onto this, just like the other shitpapers about "output attacks" we already knew about  
**\<sarang>** Granted, this paper is really quite good  
**\<sarang>** I have a few quibbles about how they present things  
**\<sarang>** If anything, I'm peeved that all these academicians work in their silos and don't bother asking "hey, did you folks already do this work?"  
**\<sarang>** and then we're left on the defensive, fielding annoying questions  
**\<sarang>** My response passive-aggressively says that I wish they would have contacted us, so as not to duplicate other work and waste their own time  
**\<sarang>** I hope they agree to collaborate with us, and not claim that their work was unknown  
**\<sarang>** I'll share my response before I send it  
**\<sarang>** They do have a nice algorithm for identifying more spent outputs; it's one I also came up with but never finished coding  
**\<hyc>** perhaps we don't need to press so hard on that point - it's good to have independent reproduction/confirmation of our work  
**\<sarang>** I agree on that point; I only ask them to change the wording a bit  
**\<sarang>** so as not to unintentionally mislead readers  
**\<sarang>** and their results essentially mirror our blackball results  
**\<sarang>** so that's good  
**\<sarang>** And keep in mind that ideally, scientific reproduction is done with full acknowledgement to other work, with comparisons  
**\<sarang>** I get that they only looked into published former work, but not bothering to reach out strikes me as lazy  
**\<sarang>** I'd like researchers to stop doing that  
**\<sarang>** Any questions/comments regarding this?  
**\<hyc>** agreed  
**\<hyc>** this is open source, you're supposed to communicate with the community  
**\<sarang>** Yeah, it's a weird intersection between the academic community and the OSS community  
**\<sarang>** But hey, hopefully these folks continue to work with us; they did great analysis  
**\<oneiric\_>** I saw moneromooo jokingly bring up an smt solver. how hard/useful would plugging in a blackball finding algo into an smt solver?  
**\<sarang>** unclear  
**\<sarang>** We already have algorithms to catch all spent sets up to whatever size our computers can do  
**\<sarang>** So for the upcoming week, I'll be working with these researchers, perhaps integrating their/my algorithm into code (unclear if it's actually that useful), and continuing bigger projects  
**\<sarang>** I'm sure new things will start on fire that will require attention =p  
**\<oneiric\_>** awesome, thanks sarang  
**\<sarang>** One thing of future interest: Tari Labs paid travel for suraeNoether and endogenic and I to do an in-person research session in Nashville, and they'll be funding such a thing in November again  
**\<endogenic>** Tari Labs didn't pay for my travel  
**\<sarang>** Ooh true, thank you  
**\<endogenic>** they did take us to a few nice dinners though :)  
**\<endogenic>** they being Naveen  
**\<sarang>** There was no additional stipend-type funding, and they do not set research directions  
**\<sarang>** But are supporters of MRL and Monero  
**\<endogenic>** and actually technically I guess I paid for hotel :)  
**\<sarang>** I wanted to make this clear for transparency... they have also offered to bring up to 2 others to such a meeting as we see fit  
**\<sarang>** In-person research is incredibly effective, and I like the idea  
**\<sarang>** suraeNoether says he has a researcher in mind who has interest in zk-stark applications, but has not previously worked with MRL  
**\<sarang>** I don't know the person and have no opinion either way about bringing this person to such a meeting  
**\<sarang>** Other ideas for people to bring?  
**\<endogenic>** let's bring hyc  
**\<sarang>** I should add... they agreed to fund travel within the U.S. only, due to cost  
**\<sarang>** the unfortunate side to a global project, I suppose, is lack of proximity for in-person events  
**\<sarang>** I'm sure suraeNoether will have more to add when he returns  
**\<sarang>** but the idea is simply to have space/time to wax poetic about what MRL is working on  
**\<endogenic>** there's a whiteboard too  
**\<sarang>** the best research tool  
**\<endogenic>** minutes are taken  
**\<hyc>** ah good, no serious gathering can be without a whiteboard  
**\<sarang>** heh  
**\<sarang>** I'm also saying all this to ensure that folks are in the know about the nature of the meeting and its funding  
**\<sarang>** I appreciate the support of Tari Labs, but they (and everyone else) can pry research independence from my cold, dead hands  
**\<sarang>** Anyway... anything else of interest that anyone wishes to share?  
**\<endogenic>** it'd be a good idea imo for everyone in the community to know they can put something on MRL's agenda for the meeting  
**\<sarang>** Oh absolutely  
**\<endogenic>** and this is probably a good place to leave suggestions  
**\<sarang>** I'm sure that big topics of interest will be ring signatures, spent output analysis, cross-chain fundamentals, payment channels, and general talk of trustless zero-knowledge applications  
**\<sarang>** If there are no other issues to discuss, we can begin to wrap up the formal meeting  
**\<sarang>** suraeNoether must still be delayed, but I'm sure he'll be on when his plane lands in Opsec USA  
**\<silur>** I'd put trustless IBE on that table and i'll dig somewhat deeper into that  
**\<silur>** making key-exchange in crypto payments easier is I think a key adoption step  
**\<sarang>** IBE?  
**\<sarang>** acronyms are my downfall  
**\<silur>** identity based encrytion (for signatures of course)  
**\<sarang>** ah yes  
**\<sarang>** good call  
**\<sarang>** silur: do you have particular interest in attending an in-person research meeting (if based in the U.S.)?  
**\<sarang>** you don't have to reveal your location here, obv  
**\<silur>** I am interested but you know about my stateless situation :D  
**\<silur>** don't know how that works in the US  
**\<silur>** I only have 50% success of leaving my country even within the EU  
**\<sarang>** it was really only a question of how much the supporters were willing to fund, and I suppose any visa issues that might arise (can't speak to that)  
**\<sarang>** perhaps we could arrange some kind of remote participation, this hasn't been worked out yet  
**\<sarang>** OK, let's formally adjourn  
**\<sarang>** thanks everyone  
**\<silur>** thanks  
**\<hyc>** ttyl  
**\<endogenic>** we just need to get one of these for silur and hyc and maybe moneromooo http://www.doublerobotics.com  
**\<endogenic>** and i guess a lackey to write on the whiteboard for them  
**\<sarang>** Heh  
**\<oneiric\_>** thnx  
**\<suraeNoether>** aaaaah six minutes  
**\<suraeNoether>** damn  
**\<suraeNoether>** hi guys  
**\<hyc>** lol  
**\<silur>** oh hey  
**\<hyc>** surae can buy the post-meeting beers  
**\<endogenic>** hyc you have to come to nashville for that  
**\<silur>** so I'm kindof outdated with our education lead  
**\<silur>** we started to talk about that around may I think  
**\<suraeNoether>** sarang i disagree that they contain no shocking results: i was shocked that their global solution is harder than NP (it's #P apparently) but I haven't gotten deeply enough into the paper to see if they've \*proven\* it or just have strong evidence of it  
**\<suraeNoether>** so, news from the education front is... twofronted  
**\<suraeNoether>** firstly, i got my mentee assigned to me for the she256 mentorship program, and depending on my conversations with her, she'll be joining us in the chat room.   
**\<suraeNoether>** secondly, i have gotten more communication from the crypto-brick-string group at clemson  
**\<suraeNoether>** he gave me some price ballparks for what it would look like to fund grants/consultation at Clemson, which is less important before the community decides to move forward with funding; i explained how we fund things essentially on a quarterly basis to avoid various problems with volatility, and he stopped describing it as grants and more as consultation...   
**\<suraeNoether>** he also said "Regardless of the Monero funding status for Spring 2019, I plan to teach a graduate class for Modern Cryptography, AND teach a research topic course on blockchains and applications (more like a seminar, but meet twice a week, this is related to my NSF grant)."  
**\<suraeNoether>** (for the record, NSF grants in the math community are pretty rare, and the fact that he regularly snags them is an indicator of the quality of his work)  
**\<suraeNoether>** he also asked a question I want to pass on to the community: "One question for you: In my course announcement, I would like to mention the possible collaboration and funding from Monero Research Lab  as an advertisement in order to attract good students from Math and CS to join the team.  Is this ok with you? "  
**\<suraeNoether>** sarang ^ thoughts?  
**\<suraeNoether>** any \*funders\* of the MRL have any thoughts?  
