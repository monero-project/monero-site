---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-11-05
summary: Discussion of open PRs and issues, Bulletproofs, Monero Research Lab, MyMonero, Kovri, multisig, and miscellaneous
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<hyc>** looks like meeting time now. yes?  
**\<serhack>** yea, rehrar should start it  
**\<rehrar>** Now?  
**\<rehrar>** Oh shoot, that's right daylight savings thing.  
**\<sarang>** DST is dumb  
**\<suraeNoether>** world's. worst. policy.  
**\<rehrar>** ye  
**\<rehrar>** https://github.com/monero-project/meta/issues/133  
**\<sarang>** It got even worse when the U.S. congress decided to change when DST happened  
**\<rehrar>** 1. Greetings  
**\<sarang>** I was working at a government time lab that had to deal with that crap  
**\<ArticMine>** Hi  
**\<rehrar>** Who all is here?  
**\<vtnerd>** hello  
**\<hyc>** hi  
**\<sarang>** sarang  
**\<serhack>** hello  
**\<rehrar>** luigi1111, moneromooo, endogenic, othe, fluffypony  
**\<rehrar>** ping all the people!  
**\<endogenic>** hyc vtnerd sarang suraeNoether  
**\<serhack>** sgp, cryptochangements, erciccione  
**\<endogenic>** pigeons  
**\<suraeNoether>** howdy howdy  
**\<moneromooo>** here  
**\<pigeons>** hola, lets go  
**\<rehrar>** 2. Brief review of what's been completed since the previous meeting  
**\<rehrar>** What's been going down these past two weeks guys? For those who missed last meeting, you can update on the past month.  
**\<sgp>** Hey  
**\<hyc>** I suppose the obvious is 11.1 was released  
**\<rehrar>** MRL can give a brief mini-update if they want too, i know you guys have your own meetings, but just so everyone is in the loop :slightly\_smiling\_face:  
**\<rehrar>** ye! How'd we feel the release went? smoother than the last time? it was a bit rough then.  
**\<hyc>** probably moneromooo should give an opinion there. seemed slightly smoother but we still had some cmake/build issues  
**\<hyc>** stuff PR'd to master that should also have been PR'd to release and was overlooked  
**\<moneromooo>** Well, there were not man changes. But pony had some trouble, yes.  
**\<moneromooo>** Not sure what those were right now though.  
**\<suraeNoether>** at MRL, on my end, I've been making steady progress on multisig. the description needed to be expanded to take into account multiple inputs and outputs, and I'm including ringCT as a matter of completeness... I've been comparing code as I go. no major obstacles yet, but that probably just means i'm not totally understanding the code yet, but moneromooo and luigi have made themselves available for questions.  
**\<rehrar>** Ye. It'd be good to get his perspective. We can discuss that next meeting if he's here.  
**\<suraeNoether>** in addition to that, the grad student at U-Michigan Dearborn, Jeffrey Quesnelle, with whom I have a *draft* of a zk lit review paper in the wings... he contacted me again. as part of his master's thesis, he's essentially doing a zcash-link a la monerolink  
**\<suraeNoether>** he wanted my thoughts, I shared it with fluffypony, we gave him a bit of feedback. I don't know how public he wants the document, so I'm not sharing it around  
**\<sarang>** Do we want to say anything about SPECTRE and other blockchain topology constructions?  
**\<suraeNoether>** but it's... interesting. over 30% of zcash transactions are linkable under his model, and although zcash provides a level of plausible deniability, quesnelle's approach doesn't suffer similar sensitivity/specificity problems that monerolink suffered, so  
**\<hyc>** curious to see that. doesn't that imply that "zero knowledge" is a misnomer?  
**\<suraeNoether>** well  
**\<suraeNoether>** you can put your credit card in a zero knowledge black box  
**\<suraeNoether>** but if you took a picture and posted it on facebook after you take it out  
**\<serhack>** Dear guys, a message from micheal: we still need to change repository name from Sekura  
**\<suraeNoether>** the proofs in zcash themselves reveal nothing about the information embedded inside  
**\<suraeNoether>** but they glue this zk system to this transparent bitcoin-style system  
**\<rehrar>** Sarang, sure. Give us a quick SPECTRE treatment.  
**\<hyc>** so this is because they have transparent addresses still  
**\<suraeNoether>** essentially, they suffer from their own version of our EABE attack  
**\<suraeNoether>** but you could call it TZT  
**\<hyc>** makes sense  
**\<suraeNoether>** as far as spectre goes: sompolinsky, the author, and i had some brief correspondence, and he confirmed my ideas on bringing it into constant-time, and he confirmed an annoyance-based attack using that trick. i haven't finished coding up a prototype of it, though, because i've been working on multisig. i have some ideas on how to mitigate the annoyance-based attack, but... sarang and i discussed it a bit and  
**\<suraeNoether>** we aren't sure if *any blocks can ever be rejected* in a spectre system  
**\<ArticMine>** Is there also a timing element here?  
**\<suraeNoether>** arcticmine as far as i know the analysis inolved short-time-period transactions  
**\<sarang>** Well the definitions for transaction rejection are pretty straightforward  
**\<suraeNoether>** if you mean about the zcash-link  
**\<suraeNoether>** the validity of a block is not relevant, all blocks are accepted, all blocks find their place, in spectre... but putting a block deep into the dag causes everyone to take time to process where to place it, and worse any transactions inside are extremely likely to precede transactions after it, so you are burning people's CPU time to place a block that you suspect is already bogus  
**\<suraeNoether>** so, spectre has some things that require investigation, like difficulty and mining, etc, incentives for attacking the network...  
**\<sarang>** Yeah it struck me as almost a sort of DoS attack  
**\<suraeNoether>** and that's *my end* of MRL in the past few weeks: multisig and spectre. what about you, sarang?  
**\<sarang>** So something that has been intriguing me is a block level-based construction  
**\<sarang>** it adds a little more complexity to the idea of block pointers using the statistics of block headers  
**\<serhack>** great update suraeNoether  
**\<sarang>** The idea being that information about a certain number of blocks at given levels can allow a full node to prove to a light node information about its full blockchain without requiring full verification of all blocks  
**\<suraeNoether>** oooh  
**\<sarang>** So ideally, it takes care of "ignoring old blocks" and replaces it with "ignoring a lot of old blocks, but in a distributed way"  
**\<sarang>** This is not the first academic attempt at this  
**\<sarang>** But earlier attempts had subtle vulnerabilities to attacks  
**\<sarang>** So full nodes act as provers, and light nodes act as verifiers  
**\<sarang>** It requires minimal changes to the block pointer structure  
**\<suraeNoether>** oh, man, fantastic, knaccc and hyc and i have been having these ping-pong conversations on how safe it is, for example, to prune out range proofs or even more information that that alone... knowledge of statistical distribution of headers would provide a really strong statistical method of guaranteeing you are throwing away "sufficiently old" data or data with a sufficient amount of PoW behind it  
**\<sarang>** It's not even light nodes throwing away old data. It's being able to be provided with (potentially conflicting) subsets of the blockchain and be assured that an honest full node provided you with the correct one  
**\<sarang>** Essentially a "subset version" of Nakamoto consensus  
**\<hyc>** might help with nodes getting stuck on alternate forks too  
**\<suraeNoether>** oh, man  
**\<sarang>** The light nodes are always provided with a certain number of recent blocks  
**\<sarang>** and a certain number of blocks at each level, up to a point  
**\<sarang>** so it scales logarithmically  
**\<sarang>** The more I'm investigating the literature, the more I love it  
**\<suraeNoether>** sarang, how would you feel about organizing a youtube video lecture on these approaches? can be as long or as short as you like, i'm thinking white-board talk  
**\<sarang>** I've never done such a thing, but I could work something up  
**\<sarang>** Problem is the papers on this have some of the worst explanations of the data structures I've seen in a while  
**\<sarang>** I'm working up some better ones  
**\<sgp>** That would help people like me  
**\<rehrar>** I can help sarang.  
**\<sarang>** It's one of those things that, when diagrammed correctly, is actually really intuitive  
**\<rehrar>** With the videos.  
**\<sarang>** sweet  
**\<sarang>** Anyway, I've used up my time here =p  
**\<rehrar>** Ok, anyone else with updates?  
**\<hyc>** good stuff MRL  
**\<rehrar>** Ping Jaquee also  
**\<rehrar>** Indeed. Round of applause for MARK.  
**\<rehrar>** MRL. :P  
**\<rehrar>** Autocorrect.  
**\<endogenic>** +1  
**\<suraeNoether>** OH! one more thing about MRL: Sarang and I on monday are contacting the chair of a CS/Math department at a local 4-year university near me about a summer 2018 cryptocurrency workshop. I'm thinking 5-10 undergrads with nontrivial programming experience and at least one heavy math class under their belt (could be linear algebra, could be differential equations, could be intro to crypto but i think that's  
**\<suraeNoether>** generally heavier than early undergrad), for a 3-4 week course  
**\<suraeNoether>** I'm looking into seeing if the school would be willing to match funds raised by the community or something like that, and I certainly would donate  
**\<hyc>** sounds great  
**\<suraeNoether>** ok, now i'm done  
**\<suraeNoether>** sorry for taking up so much space during the meeting this week. :P heh  
**\<rehrar>** Maybe open donations up to the community to give too? Just a bit maybe.  
**\<endogenic>** rehrar: questions ok?  
**\<hyc>** shoot first, ask permission later  
**\<rehrar>** Of course.  
**\<endogenic>** anyone know what's left to do on zmq before can be merged? just rebase?  
**\<hyc>** client side PR was just resubmitted today  
**\<moneromooo>** The remaining patch was rebased. I think it does mention some testing is needed though.  
**\<endogenic>** oh that's great  
**\<endogenic>** oh one thing  
**\<endogenic>** i wanted to ask if we should have MRL review the kovri+monero address exchange  
**\<moneromooo>** What is the kovri+monero address exchange ?  
**\<endogenic>** you n nonimal were discussing it recently  
**\<moneromooo>** Ah, how to know where to connect to in the first place ?  
**\<endogenic>** mm  
**\<sarang>** ??  
**\<vtnerd>** endogenic : the zmq server can already be accessed/used (trunk/master builds)  
**\<endogenic>** vtnerd: i am so behind the times T\_T  
**\<endogenic>** sarang: it seemed fairly trivial to me  
**\<endogenic>** but then again i've been... trained... not to take such things lightly... :P  
**\<endogenic>** more confirmations = better  
**\<rehrar>** Ok. Can we move on, or is there anything else? :)  
**\<endogenic>** oh yes and can we have flare for sarang and surae on reddit? i might miss their comments w/o having pressed the friend button :P  
**\* endogenic** continues going down holiday wishlist…  
**\<dEBRUYNE>** endogenic: Sure, if they want a custom flair they can message u/shy  
**\<dEBRUYNE>** endogenic: Do you want to give an update on MyMonero?  
**\<endogenic>** hmm  
**\<endogenic>** sure  
**\<serhack>** great  
**\<endogenic>** i dunno if you guys know but tficharmers has been doing some design work on the official gui app  
**\<endogenic>** he also created a github issue with the feature suggestion of being able to work in other world currencies  
**\<endogenic>** and was gracious enough to work through the design with some other contributors a couple months ago  
**\<hyc>** via plugin?  
**\<endogenic>** i got around to implementing that in the iOS (Swift) app and am in the process of building it out on the JS side  
**\<endogenic>** i just tentatively grabbed the xmr exchange rates from cryptocompare.com  
**\<endogenic>** via client side polling while i wait for server to provide rates matrix  
**\<endogenic>** i've been daydreaming about the idea of transpiling some of my Swift strictly View code to JS  
**\<endogenic>** since we do have View.web, StackedNavigationView.web, etc…  
**\<endogenic>** but that's hardly priority :P  
**\<serhack>** I'm using it too  
**\<endogenic>** cryptocompare?  
**\<serhack>** ye  
**\<endogenic>** they seemed really cool from their site  
**\<tficharmers>** endogenic: cheers, but just to confirm that I haven’t looked at the gui for a while. I have spent the last few months on Moneroforcash.com  
**\<rehrar>** Ok. Anything more endogenic?  
**\<endogenic>** oh i meant "semi recently" :P  
**\<endogenic>** you submitted that whole high lvl design review thing  
**\<rehrar>** Guys, I'm terribly sorry, but something very important just came up that is going to require me to split for fifteen minutes.  
**\<endogenic>** yeah i mean i guess everyone probably already knows that the last update I heard from fp was that Apple said they received the MDC DUNS number but there was an issue in their developer portal or some such so he had to email them and is waiting to hear  
**\<rehrar>** We can do ticket discussion if you want in my absence.  
**\<endogenic>** MDC DUNS number mind you  
**\<endogenic>** MyMonero DUNS number still no status on  
**\<endogenic>** on receipt of \*  
**\<hyc>** mooo should probably take over for ticket discussion  
**\<endogenic>** anyway anyone's free to take the floor  
**\<rehrar>** Ye. Mooo? Wanna take from here plz?  
**\<moneromooo>** Well, those are usually "what do I merge ?", so since pony isn't here...  
**\<moneromooo>** I guess I could take the opportunity to shill the multisig branch, if someone wants to test ^\_^  
**\<endogenic>** yes let's hear moneromooo's holiday wishlist  
**\<moneromooo>** I don't have anything in particular to say about the pending patches, sorry.  
**\<rehrar>** Sorry all. Cya.  
**\<endogenic>** moneromooo: can you fill sarang in on the kovri address thing?  
**\<moneromooo>** It'd be an equivalent to the current A records pointing to... the seed nodes I think ?  
**\<hyc>** after that, we're on (4) Any additional meeting items  
**\<moneromooo>** If using kovri, I ugess you don't want to be using DNS for this ?  
**\<hyc>** so we should have some i2p seed nodes?  
**\<moneromooo>** Once you've got a (honest) peer, you can pull peer lists off it.  
**\<moneromooo>** Yes, they should be on both clear and i2p.  
**\<dEBRUYNE>** moneromooo: re: multsig, is there anything in particular you want tested?  
**\<endogenic>** moneromooo: not possible to do the same experiment twice  
**\<hyc>** I think there ought to be a threshold that cancels out his previous 1-patch contribution and removes his flair  
**\<serhack>** should I post anything related to my latest updates?  
**\<moneromooo>** dEBRUYNE: I suppose it's mostly "everything" :)  
**\<dEBRUYNE>** All right, so test and see if anything breaks basically :-P  
**\<moneromooo>** Yes.  
**\<hyc>** at least you only need to recompile the wallet. can use on existing testnet  
**\<moneromooo>** There are things you can't do, like signing messages for exmaple.  
**\<endogenic>** moneromooo: i wonder if testing multisig can be opened up to a hackathon  
**\<endogenic>** maybe via surae  
**\<dEBRUYNE>** moneromooo: you mean signing messages with the multisig address?  
**\<moneromooo>** Yes.  
**\<dEBRUYNE>** All right  
**\<dEBRUYNE>** serhack: go ahead :)  
**\<endogenic>** oops not surae, sgp  
**\<hyc>** ready to buy 10 lambos with testnet wallet and 2/3 multisig.  
**\<serhack>** https://imgur.com/a/iRcAw  
**\<serhack>** my latest job, I am working in redesign monero payment box  
**\<sgp>** @endogenic can you elaborate further?  
**\<endogenic>** sgp: i figure you might have a number of programmer friends who are interested in Monero or privacy etc  
**\<endogenic>** aren't there applications of programmatic access to multisig functions?  
**\<moneromooo>** Can you rephrase that ?  
**\<sgp>** I haven't really looked into running a hackathon before but one of my firends has done well in many of them  
**\<endogenic>** sgp: it's ezpz you just get some companies who have a technology to promote to participate and purchase the donuts and coffee :P  
**\<hyc>** oh, one point of clarification - surae is still working on his multisig review. so what's relation btw surae's work and the current PR?  
**\<endogenic>** and students have to pick one tech from N companies or something  
**\<sgp>** @endogeneic let's talk more about this outside the meeting  
**\<endogenic>** meeting is over!  
**\<endogenic>** :P  
**\<hyc>** hm would still like an answer to my question  
**\<serhack>** :slightly\_smiling\_face:  
**\<hyc>** and do we confirm next meeting 2 weeks from today?  
**\<TinusMars>** any thoughts on the bulletproof paper?  
**\<hyc>** many. still digesting.  
**\<TinusMars>** ok  
**\<ArticMine>** It needs to be evaluated by the MRL  
**\<rehrar>** Back. Super sorry. I see we still kinda going.  
**\<sarang>** Yeah  
**\<sarang>** Like all new developments, we are evaluating cautiously  
**\<TinusMars>** ok thanks  
**\<rehrar>** Next meeting 19th?  
**\<moneromooo>** hyc: AFAIK, surae and sarang worked on proofs of security, and now comparing existing multisig with their paper.  
**\<sarang>** aye  
**\<serhack>** yeah rehrar  
**\<hyc>** moneromooo: ok cool. so PR can't be merged until review is complete  