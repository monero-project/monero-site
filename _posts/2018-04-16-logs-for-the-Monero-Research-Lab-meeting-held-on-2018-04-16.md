---
layout: post
title: Logs for the Monero Research Lab Meeting Held on 2018-04-16
summary: Sarang work, Surae work, and miscellaneous
tags: [dev diaries, crypto, research]
author: el00ruobuob / surae
---

# Logs  

**\<suraeNoether>** allrighty  
**\<suraeNoether>** well hello everyone  
**\<suraeNoether>** oh man how could i forget hyc  
**\<sarang>** grettings  
**\<suraeNoether>** Sarang, you want to kick us off? What have you been working on?  
**\<sarang>** Sure  
**\<sarang>** I've been working on the churn analysis paper suraeNoether began, looking at definitions and models etc.  
**\<sarang>** The paper on FruitChains was also brought to my attention again  
**\<suraeNoether>** this is my first time seeing it  
**\<sarang>** It's an interesting scheme intended to reduce the effectiveness of pooled mining  
**\<sarang>** there's an overhead in block data, unfortunately  
**\<suraeNoether>** interesting  
**\<sarang>** but it ensures more fair mining and reduces the effectiveness of selfish mining attacks  
**\<sarang>** What isn't as clear is the way reward incentives are done, since it's a sort of distributed reward system  
**\<sarang>** We did a review of our JS PRNG  
**\<sarang>** after a posting on some shitty ones (we're fine)  
**\<suraeNoether>** yes! such drama haha  
**\<sarang>** Looked at zerocoin attacks  
**\<sarang>** and more of the usual audit administrivia  
**\<sarang> \</update>**  
**\<suraeNoether>** how is the audit going?  
**\<suraeNoether>** what stage of the process are we at for each auditor?   
**\<sarang>** As planned; we're in the queue for each reviewer  
**\<sarang>** I have a kickoff meeting w/ Kudelski tomorrow morning  
**\<suraeNoether>** i think this might be the first time we'll actually end up getting this discussion into the meeting notes on github  
**\<sarang>** I will say that the FruitChains idea is intriguing if only because of the disincentive to pooled mining  
**\<sarang>** especially after our ASIC shenanigans  
**\<sarang>** the paper says "orange is the new block"  
**\<hyc>** I see the resistance to selfish mining as pretty important too  
**\<sarang>** Oh yes, that property is also nice for sure  
**\<suraeNoether>** hyc i agree, especially after seeing a huge ecology of selfish mining and block withholding attacks at BPASE  
**\<hyc>** also, BTC is unlikely to ever pursue it. "Too complicated to code"  
**\<suraeNoether>** cool beans, cool beans. i've spent the past month basically reading crypto papers, writing code, and writing papers. i'm now back knee-deep in multisig, and i think i'm going to make some recommendations for changes instead of trying to merely describe our current system, since the c++ review was going to be in a second paper anyway...  
**\<suraeNoether>** but in the past few weeks, i invented a signature scheme. i lack an implementation, but i am still going to seek publication (because maybe someone else can come upw ith an implementation)  
**\<sarang>** In the grand scheme of things, the addition of fruits isn't a \_huge\_ overhead in space, but it'd need to be considered  
**\<sarang>** What's the coding you're up to suraeNoether ?  
**\<suraeNoether>** anyone curious about that can see it here: https://www.sharelatex.com/read/sbjpykftgxkn ...   
**\<suraeNoether>** still doing the Poisson graph simulation thing in the evenings  
**\<sarang>** sounds like an excellent work-life balance =p  
**\<suraeNoether>** in addition to that, I started writing up some notes on using a Kolmogorov-smirnov test as a basis for difficulty adjustment... and then i realized it'd be nice and fun to write a "difficulty adjustment as a statistical inference problem" paper  
**\<suraeNoether>** and with those sims, i'll be able to test various hypotheses about UMVUEs and such  
**\<suraeNoether>** but that's sort of my side thing the past few weeks.  i've been putting a lot of energy into churn and multisig  
**\<koe\_>** surae is there an updated multisig pdf I can look at?  
**\<koe\_>** the one from a month ago has some issues but if you fixed them then all good  
**\<suraeNoether>** koe\_ wednesday. and yeah, there have been some drastic changes since then  
**\<hyc>** difficulty? have you been talking to @zawy12 ? https://github.com/monero-project/monero/pull/2887  
**\<suraeNoether>** hyc i've read through a lot of that, and zawy12 will be heavily cited in my work  
**\<hyc>** cool  
**\<suraeNoether>** let's see here...  
**\<suraeNoether>** I've also spent time organizing the first board meeting for MAGIC, April 27 in Denver. sgp and rehrar and myself and sarang and my wife will all be there, and we'll be doing it at one of the possible monero conference locations so we can kinda scope it out  
**\<suraeNoether>** maybe we'll all go out and look at several locations and take pictures and rate the places by ratio of distance-to-taco-place by distance-to-hotels  
**\<sarang>** yessir  
**\<suraeNoether>** oh, and effing taxes  
**\<sarang>** Aren't those fun?  
**\<sarang>** Any updates from others?  
**\<hyc>** last weekend I cobbled together my PoW PoC  
**\<hyc>** literally slapped together while reading a tutorial on JS syntax  
**\<suraeNoether>** gonna fork monero? do an airdrop?  
**\<rehrar>** I wanted to launch hyccoin from it, but he wasn't ecstatic about it  
**\<koe\_>** it would be nice to publish my report on transactions soon, if surae can get a chance to look through it this week  
**\<suraeNoether>** give me a link right quick  
**\<suraeNoether>** i'll add it to my high priority before Wednesday thing  
**\<koe\_>** https://github.com/UkoeHB/Monero-RCT-report  
**\<hyc>** in the next couple weeks I plan to rewrite it into something closer to production quality. the current version produces wildly inconsistent random programs (very small to very large) and we want something a bit more uniform in length/runtime  
**\<sarang>** koe\_: it's a nice update  
**\<suraeNoether>** oh koe wait are you kurt magnus also? or are you two just collaborating?  
**\<koe\_>** ill add some edits ive made over the last week soon, so its all up to date  
**\<koe\_>** I took over the report ffrom him  
**\<koe\_>** haven't heard from him in weeks idk  
**\<suraeNoether>** huh.   
**\<suraeNoether>** Okay, so, basically my whole life right now is dedicated to 1) multisig, 2) reading koe's thing by wednesday, and 3) getting ready for LONDON NEXT WEEK  
**\<suraeNoether>** oh my GOD you community members who donated ROCK and kick ASS  
**\<sarang>** ^  
**\<sarang>** I'll put on my Fancy Jacket so I can represent us well  
**\<suraeNoether>** If anyone is going to find themselves in london on Monday next week  
**\<rehrar>** hyc, when you do that, can we launc the test coin? :D  
**\<suraeNoether>** let's get some fish and chips and wear bowler hats together  
**\<sarang>** suraeNoether: do I have to start carrying my phone in my left pocket instead of my right?  
**\<hyc>** rehrar absolutely, I will launch my own testnet. pre-ICO announcement right here right now.  
**\<suraeNoether>** Okay, anyone have any other discussion points?  
**\<jwinterm>**  instead of directly storing the records m inside the blockchain, the records are put inside “fruits” denoted f  
**\<suraeNoether>** sarang i recommend not bringing your phone to police states, but that's none of my business  
**\<sarang>** jwinterm: yes  
**\<sarang>** fruits and blocks are mined at the same time  
**\<jwinterm>** I'm just going over the paper quickly now  
**\<sarang>** but reference different things in the chain  
**\<sarang>** and mining rewards are distributed over a segment  
**\<rehrar>** please inform me hyc, I want to be among the first to hold these coins  
**\<hyc>** lol okeydoke  
**\<unknownids>** how many wowneros for a hycoin  
**\<suraeNoether> \</meeting>**  
**\<suraeNoether>** lol  
**\<suraeNoether>** OH! No meeting next Monday  
**\<suraeNoether>** Sarang and I will be bowler-hatting  
**\<suraeNoether>** in old london-town  
**\<hyc>** funfun  
**\<sarang>** I assume it'll go much like The Prisoner  
**\<sarang>** and we'll end up on some island  
**\<sarang>** until we spill the beans on Monero  
