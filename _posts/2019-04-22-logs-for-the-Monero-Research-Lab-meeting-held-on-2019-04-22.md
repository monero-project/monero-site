---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2019-04-22
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / sarang
---

# Logs  

**\<sarang>** OK, let's begin. Logs of this meeting will be posted to the GitHub link afterward  
**\<sarang>** 1. GREETINGS  
**\<sarang>** hello  
**\<sgp\_>** hello!  
**\<sarang>** I assume suraeNoether is also here  
**\<sarang>** I suppose we can move to 2. ROUNDTABLE  
**\<sarang>** The new output selection algorithm was put into a PR by moneromooo with some additional tests added; many thanks to moneromooo for that work  
**\<sarang>** and it's now merged  
**\<sarang>** This helps to mitigate the block weighting issues and provide better selection  
**\<sarang>** The attempted CLSAG proof reduction to LSAG was not successful because of the way key images are computed, unfortunately  
**\<sarang>** However, I've been working on applying the MLSAG proof techniques more directly  
**\<suraeNoether>** howdy, sorry  
**\<suraeNoether>** distrated  
**\<suraeNoether>** I'm here  
**\<sarang>** I'm still working with the Lelantus paper author, a Zcoin cryptographer, to offer some collaborative insight on efficiency gains  
**\<sarang>** Just about finished with test code refactoring, and some additional fixes  
**\<suraeNoether>** what sort of gains are you talking about there?  
**\<suraeNoether>** what is lelantus, and why is it interesting?  
**\<sarang>** It's a transaction protocol produced by a Zcoin researcher that uses some of the techniques that StringCT also used  
**\<sarang>** but with a more direct balance proof  
**\<sarang>** The paper suggested some batching speedups, but I observed that you could apply them much more broadly to the entire set of transaction proofs (there are several)  
**\<suraeNoether>** neat! are you two narrowing down on some concrete numbers for comparison in efficiency?  
**\<suraeNoether>** what sort of work remains, in that regard?  
**\<sarang>** A lot of the batching gains depend heavily on the anonymity set used  
**\<sarang>** and there are plenty of open questions about that  
**\<sarang>** But, for example, the bulk of a spend proof (ignoring balance proof and range proofs) for a 1024-size anonymity set is probably about 100 ms using Monero timing operations  
**\<suraeNoether>** wow  
**\<suraeNoether>** wowow  
**\<sarang>** This is purely back-of-the-envelope  
**\<suraeNoether>** for those in the audience, i tend to think of 50 ms is on the border of too slow  
**\<suraeNoether>** does 512 anon set take 50 ms?  
**\<suraeNoether>** is it logarithmic?  
**\<sarang>** mostly linear  
**\<sarang>** keep in mind that batching verification reduces the cost per proof  
**\<suraeNoether>** oh man, we should talk about the space-time tradeoff  
**\<sarang>** I don't have good numbers for that yet  
**\<suraeNoether>** asymptotically  
**\<sarang>** Yeah, I'll be working up a set of charts for this  
**\<suraeNoether>** fantastic.  
**\<sarang>** For reference, an MLSAG verification with 1024 ringsize takes 1.2 s  
**\<sarang>** Also the kind of batching that I'm thinking of as being most useful requires the batch to use the same decoy anonymity set  
**\<suraeNoether>** oh that's sort of an omniring property  
**\<sarang>** You still get some gains without this assumption, but not nearly to the same degree  
**\<suraeNoether>** which we'll be learning about at the konferenco, apparently :) real\_or\_random  
**\<sarang>** Using a common set means your multiexp operation uses the same generators across proofs (mostly)  
**\<suraeNoether>** of course, i haven't seen omniring yet...  
**\<sarang>** Anyway, other questions for me?  
**\<suraeNoether>** Good recap, sarang, thanks for describing it to us  
**\<suraeNoether>** \*claps\*  
**\<sarang>** Over to you suraeNoether  
**\<suraeNoether>** well, the past week has been busy for surae  
**\<sarang>** https://www.youtube.com/watch?v=0TeFrpLL4-E  
**\<suraeNoether>** MRL 11 update: I finally found the problem with my simulation code, which had to do with passing around an identity for objects like nodes and edges that can be used to retrieve the object, versus passing around the object itself. it's a silly and embarassing mistake, and it took me way too much time to figure out why things were going wrong. :P  
**\<suraeNoether>** I made a push this morning to my mrl-skunkworks powerpuff branch after finally realizing the problem  
**\<suraeNoether>** that includes the new experimenter class that is actually generating confusion tables... the data it spits out (information for a confusion table) is junk and incorrect, but it doesn't break anything, so I pushed it.... The overall infrastructure is at the point where it may be of interest to #noncesense-research-lab and Isthmus for independent work.  
**\<suraeNoether>** or anyone else who is interested  
**\<suraeNoether>** https://github.com/b-g-goodell/mrl-skunkworks/tree/matching-powerpuff/Matching  
**\<sarang>** What are your next steps for this (jumping ahead a bit)?  
**\<suraeNoether>** the main idea is this  
**\<suraeNoether>** how accurate is the matching approach as ring size scales up? how accurate is the matching approach as churn number increases? how can we use the answers to these questions to formulate best practices for monero churners?  
**\<sarang>** for sure  
**\<suraeNoether>** is there a way we can define some concrete threshold we want to attain?  
**\<sarang>** Understanding how ring size and some specified churn behaviors affect these matching heuristics can give a much clearer picture of what it would take to hit certain thresholds  
**\<suraeNoether>** anyway, that's my progress update on MRL11: soon^TM. I'm actually getting results without breaking anything, and now it's a matter of debugging the code and writing new tests to ensure that the results I'm getting are consistent  
**\<suraeNoether>** but I also have a collaborative update, as described in the agenda  
**\<suraeNoether>** long story short: Clemson University's School of Mathematical and Statistical Sciences is interested in starting a general center for blockchain and cryptocurrency studies.  
**\<suraeNoether>** and they are interested in involving Monero Research Lab in their efforts.  
**\<endogenic>** coolio  
**\<suraeNoether>** we have a few interesting research collaboration possibilities with clemson just stand-alone, new shiny blockchain center notwithstanding  
**\<suraeNoether>** mainly: Professor Shuhong Gao is in the middle of writing several papers that promise to be rather groundbreaking  
**\<suraeNoether>** one of these is reporting a purported attack upon two of the post-quantum nist candidate encryption algorithms  
**\<suraeNoether>** one of these is a new approach to fully homomorphic encryption  
**\<sarang>** sounds very interesting  
**\<suraeNoether>** previous attempts at FHE suffer weird problems. if you want to add two ciphertexts together, it's easy to retain the number of bits. but to do something like multiplication, you need a larger number of bits than either ciphertext... and so previous approahces sort of use this expanding scratchpad of bits and take up lots of space to perform a computation  
**\<suraeNoether>** gao has developed a way that improves the space efficiency by several orders of magnitude, bringing \*practical\* FHE into reality  
**\<suraeNoether>** his approaches use the RLWE cryptographic setting, which I've been looking into recently due to its speed (big keys but very fast algorithms)  
**\<sarang>** sounds suspiciously interesting  
**\<suraeNoether>** yeah, no kidding  
**\<suraeNoether>** he has four visiting scholars interested in blockchain and a handful of students, and the next thing on their plate is RLWE-based STARKs efficient enough for use in something like Monero  
**\<suraeNoether>** so, basically: I'm super excited about the possibility of collaborating with these folks!  
**\<sarang>** Nice  
**\<suraeNoether>** conflict of interest disclosure: Clemson flew me out to South Carolina last week and put me up in a hotel and fed me. I gave a talk. I received a per diem for food. This is all rather ordinary in that regard.  
**\<suraeNoether>** so, i'm encouraging that Clemson have a presence at the Monero Konferenco, to come meet members of the monero community in person  
**\<suraeNoether>** and I'm encouraging their graduate students to jump in on our research meetings  
**\<endogenic>** awesome!  
**\<sarang>** Totally; getting more researchers involved is great for the project  
**\<suraeNoether>** I want them to come to the Konferenco, meet some of the folks in the Monero community face to face, and contribute to Monero's development. I think this is a good thing both for Monero and Clemson University, and I think a more formal academic collaboration with Monero Research Lab is long overdue.  
**\<suraeNoether>** also, for what it's worth  
**\<suraeNoether>** the last time I was at clemson, speaking with people about cryptocurrency or privacy as a human right was a hard conversation to have  
**\<suraeNoether>** this time, the conversations went... very... very .... differently.  
**\<suraeNoether>** a lot changes in 3 years.  
**\<suraeNoether>** people are excited about this.  
**\<endogenic>** what would you say is the origin of the change in their reactoin?  
**\<endogenic>** fungibility?  
**\<suraeNoether>** uhm  
**\<endogenic>** cause the Snowden disclosures etc came out a long time ago  
**\<suraeNoether>** actually, i think it's structural  
**\<suraeNoether>** meaning: the right people are in control right now for this to move, if that makes sense  
**\<endogenic>** gotcha  
**\<sarang>** Any other new work to share suraeNoether ?  
**\<suraeNoether>** different people standing between the department and their goals than last time, like deans and provosts...  
**\<suraeNoether>** uhm, also, on a totally wild and weird research note  
**\<suraeNoether>** it turns out a homological algebra construction called Ext that Sarang and I studied in grad school together may be the key to forcing my silly signature scheme using commutative/cartesian squares from last year to work  
**\<suraeNoether>** so I'm discussing a paper with another clemson professor  
**\<sarang>** very clever  
**\<suraeNoether>** that's pretty close to the "pure math" end of the spectrum for this room, so i'm not sure whether i should talk about it before we have some more results  
**\<suraeNoether>** it turns out that Ext can be used to parameterize the zero function between two modules (like, for example, elliptic curve groups)  
**\<suraeNoether>** so we are trying to use that to hide information in a function from one to the other  
**\<suraeNoether>** it's... bizarre, and it might just work!  
**\<suraeNoether>** and tha'ts all I have other than action items  
**\<sarang>** neato  
**\<suraeNoether>** but this is round-table and perhaps andytoshi or real\_or\_random or ArticMine have some thoughts on stuff they've been working o.  
**\<sarang>** Does anyone else have research work of interest to share?  
**\<suraeNoether>** or anyone else, for that matter  
**\<sarang>** righto  
**\<sarang>** I guess we can move to 3. QUESTIONS and/or 4. ACTION ITEMS  
**\<endogenic>** eyyyyy  
**\<Isthmus>** \*late  
**\<suraeNoether>** oooh isthmus  
**\<suraeNoether>** do you have an update beefore we move onto 3?  
**\<Isthmus>** Been working on playing around with camel emission curves, though that window has probably shut for Monero  
**\<Isthmus>** Also, @n3ptune and I looked at single-transaction outputs in recentish history. There are O(1000) of them  
**\<Isthmus>** https://github.com/monero-project/monero/issues/5399  
**\<Isthmus>** https://usercontent.irccloud-cdn.com/file/YyM3h9KG/image.png  
**\<Isthmus>** TL;DR:  
**\<Isthmus>** There have been over 2500+ single-output transactions since 2017  
**\<Isthmus>** Single-output transactions (1OTXs) are a persistent intermittent phenomen  
**\<Isthmus>** \*phenomena  
**\<Isthmus>** There was a surge of 1OTXs around height 1562000  
**\<Isthmus>** 1OTXs are observed to this day (data includes 2019)  
**\<suraeNoether>** hm  
**\<sarang>** Could be made consensus, which has been brought up before without any movement  
**\<Isthmus>** They're also linked to a lot of other nasty heuristics - odd ring sizes, fees that stick out by an order of magnitude, etc.  
**\<sarang>** that spike is crazy  
**\<Isthmus>** Yeah, epic churn event. Should be pretty easy to dissect and trace, but I left that as an exercise for the reader.  
**\<endogenic>** bet that was sgp  
**\<sarang>** All right, let's go to action items  
**\<sarang>** suraeNoether: ?  
**\<sgp\_>** This should be consensus. Isthmus opened a GitHub issue, and I don't think anyone has voiced opposition to it  
**\<luigi1111w>** 2 output min is good  
**\<sarang>** absolutely  
**\<Isthmus>** Oh yea, if you have thoughts, leave them here: https://github.com/monero-project/monero/issues/5399  
**\<Isthmus>** Otherwise, good to move on  
**\<charuto>** could the spike on 1output transactions be somehow related to monero classic/original ? date seems to almost coincide.  
**\<sarang>** OK, in the interest of hitting our 1-hour target, I'll work up numbers for batch Lelantus verification at varying anonymity set sizes, and finish up some example code refactoring to complete that project  
**\<sarang>** I'm also looking into how a new transaction type could be used to transition RingCT outputs to this  
**\<sarang>** Submission of the DLSAG paper is finally happening  
**\<sarang>** suraeNoether: ?  
**\<suraeNoether>** woops, sorry, my action items all revolve around getting my simulations done and some confusion tables pushed out  
**\<sarang>** great, thanks  
**\<suraeNoether>** after that i can go do other things  
**\<sarang>** Thanks to Isthmus for opening that issue and getting the conversation started again on 1-out txns  
**\<Isthmus>** 👍  
**\<sarang>** Any other final thoughts before we adjourn and return to general discussion?  
**\<Isthmus>** Also, interesting hypothesis @charuto - might be connected. XMC forked off at 1546000 and the 1OTX spike is around 1560000  
**\<sarang>** OK, we are now adjourned! Logs will be posted to the GitHub issue shortly. Thanks to everyone for attending; let the discussions continue
