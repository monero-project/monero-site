---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-06-25
summary: MyMonero/OpenMonero lightwallet support for the GUI, multisig, subaddresses, 0MQ, increasing default ring size
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Overview  

An overview [can be found on MoneroBase](https://monerobase.com/wiki/DevMeeting_2017-06-25).  

# Logs  

**\<tewinget>** I know it's a bit out of order, but I can go ahead and share what updates I have while we wait for fluffy.  
**\<moneromooo>** please do :)  
**\<tewinget>** I'm pretty knackered, so I'm afraid I won't have much useful input on the other topics anyway  
**\<tewinget>** alright, so apart from a couple minor tweaks I still plan to do (but which are by no means necessary I think), the daemon zmq rpc server should be ready to merge pending approval.  There are a few things I'd do differently were I to start again from scratch, and may go back and change later, but it's in pretty decent shape overall I think.  Still a good handful of unimplemented calls, but they're mostly fill-in-the-blank and low priority imo  
**\<endogenic>** nice  
**\<tewinget>** the wallet zmq rpc client (well, not explicitly wallet-only, but for the wallet) is coming along, but not quite to that same point.  
**\<vtnerd>** yeah I had some comments about the design at some point, but I think it something that could be discussed later  
**\<vtnerd>** plus moo may have disliked my C++ suggestions (for a good reason)  
**\<tewinget>** as far as I can tell, I'll be able to get what I set out to finish finished by the end of the month as planned.  
**\<vtnerd>** so the first cut should be able to push out when a new block is received ?  
**\<tewinget>** vtnerd: yeah, some of your suggestions are the things I considered doing differently, but the amount of re-doing didn't seem to be worth it short term.  
**\<pero>** im a bit concerned that there has been no new code merged and leaves us with potential for another month or so turnaround on the next iteration  
**\<tewinget>** so {block,tx}notify is something I'd like to have a prototype of working by end of month, but I don't think I'll have a polished solution quite then.  First week of July though.  
**\<vtnerd>** you did merge my one PR, right? it cut down on some boilerplate type specifying ...  
**\<tewinget>** pero: check again ;)  
**\<tewinget>** hadn't pushed stuff up yet because I had to do an annoying rebase  
**\<knaccc>** does zmq result in initial daemon sync speedup at all? or is it mainly for robustness  
**\<tewinget>** vtnerd: I believe so  
**\<vtnerd>** ok, I will follow that closely, because it matters for the mymonero backend  
**\<vtnerd>** or rather it helps the mymonero backend  
**\<medusa>** how is that progressing vtnerd ?  
**\<medusa>** we talk sometimes about it, since the GUi now run on android with lightwallet support, but the mymonero node tis the only node we can connect (for now)  
**\<tewinget>** I'll update here again some time Tuesday, by then I think I can have the wallet client stuff in good shape, giving me the rest of the week to work on notify stuffs.  
**\<vtnerd>** your question is too open-ended - what exactly on the backend did you hope to hear about?  
**\<pero>** well i dont really know what im looking for but i see some commits from may7 have been added  
**\<tewinget>** lemme look and make sure I pushed pero  
**\<dternyak>** you did - github just says may 7 cause its the oldest of your new commits  
**\<medusa>** whats the overall state ? is it soon finish, just started  
**\<dternyak>** the newest is from 1 hour ago  
**\<vtnerd>** I've got a written but not completely tested method for rapid tx querying via lmdb (instead of the mysql), and a re-worked algorithm that needs polishing to reduce write blocking on mysql (faster importing)  
**\<dternyak>** that for mymonero vtnerd?  
**\<vtnerd>** the x86 ASM (assembly wallet importing) is now live for about a month I think  
**\<pero>** ok so thats new stuff that can be reviewed?  
**\<vtnerd>** none of this has been pushed to mainline  
**\<medusa>** cool. cant wairt to run it myself  
**\<Jaquee>** vtnerd: i think medusa was referring to the updates in monero daemon.  
**\<vtnerd>** the x86 ASM stuff is closest, but I wanted to confirm that it was public domain code  
**\<Jaquee>** but afaik that work hasn't been started yet?  
**\<tewinget>** pero: yeah.  also, weird that the commits I had to touch up for rebase didn't get new timestamps...  
**\<vtnerd>** right, the biggie is that I did part 2 of fireice-uk FFS for the mymonero backend  
**\<Jaquee>** so openmonero will be the other option  
**\<Jaquee>** vtnerd: nice!  
**\<vtnerd>** or maybe it was part 1, I forget which. either it has been live (fluffypony would have to confirm)  
**\<vtnerd>** it doesn  
**\<vtnerd>** doesnt touch the existing crypto code, its all cmake magic (sorry hyc/moo) so its just a matter of some polish and reviewing licensing  
**\<vtnerd>** theres lots more speed improvements that can be done, but it will be interesting to get feedback from people first  
**\<vtnerd>** ric also discussed with me ways to open source the backend, but its probably a reworking that will get open sourced, not the current version  
**\<vtnerd>** somehow the mysql dependency will have to be punted before merging into mainline  
**\<vtnerd>** sorry for hijacing this tewinget  
**\<tewinget>** vtnerd: no worries, I was pretty well finished anyway :)  
**\<tewinget>** just hanging around to answer any questions for a bit longer before I go pass out  
**\<vtnerd>** I mean right now my main concerns are performance and better mempool integration on the backend (not necessarily merging into mainline)  
**\<medusa>** mhm  
**\<vtnerd>** so that anyone using the newer UI stuff with the backend should have a better experience (hopefully)  
**\<moneromooo>** Jaquee: do you want to tell us about your work ?  
**\<moneromooo>** Well, then. Anyone else doing interesting stuff who want to let us know ? :)  
**\<Jaquee>** sure. i've been working on adding lightwallet support to GUI. There are two PR's up already that will need some more work before they can be merged  
**\<moneromooo>** Sorry.  
**\<Jaquee>** i've also been working on the android and ios builds simultaneously  
**\<medusa>** also Jaquee fixed the nasty ominous "black screen" bug in the gui  
**\<Jaquee>** yeah. that too  
**\<vtnerd>** lightwallet == GUI that uses openmonero/mymonero backend ?  
**\<medusa>** yes  
**\<Jaquee>** exactly  
**\<medusa>** thats why i asked  
**\<medusa>** its all ready, owrks like a charm  
**\<medusa>** soon\*  
**\<Jaquee>** :)  
**\<pigeons>** i wonder what kind of load that puts on the remote load per user  
**\<pigeons>** \*remote node  
**\<pero>** tewinget: communication has been one of the fails here i believe so it would be helpful if you could add some note in the PR wrt progress and if there's anything someone can do now  
**\<tewinget>** pero: I can do that, sure.  
**\<vtnerd>** pigeons: thats what Im trying to improve  
**\<Jaquee>** pigeons: the lightwallet use mymonero/openmonero backend, not regular remote nodes (yet)  
**\<Jaquee>** and btw. my ffs has come to an end. Thanks for all contributions!  
**\<vtnerd>** yeah so eventually the pie-in-the-sky approach is a kovri pubkey that your phone connects to ?  
**\<medusa>** \<3  
**\<pigeons>** yes i mean on those mymonero/openmonero nodes  
**\<Jaquee>** i'll probably put up another ffs soon  
**\<unknownids>** wooo  
**\<binaryFate>** Jaquee dooooo it!  
**\<unknownids>** hope ya go  
**\<unknownids>** do\*  
**\<unknownids>** oh god  
**\<vtnerd>** pigeons: ideally people would be running these nodes only for a few people that know personally (IMO)  
**\<unknownids>** :(  
**\<pigeons>** vtnerd: yep. if the only node that people can connect to is mymonero, they will quickly kill it  
**\<medusa>** for now it is, but mymoner still charges a fee. without paying, so scanning  
**\<vtnerd>** come on pigeons, gotta have some "swag" ... mymonero can handle the load  
**\<Jaquee>** :D  
**\<pero>** thanks tewinget  
**\<endogenic>** vtnerd++  
**\<moneromooo>** Well, as for me, I added some fuzz testing. Turns out erikd had also started looking at that as well.  
**\<moneromooo>** It's running on GCC, not CLANG, though.  
**\<moneromooo>** Anyone else ?  
**\<knaccc>** kenshi84 has done fantastic work on implementing the subaddress scheme. There is now the concept of a wallet containing multiple "accounts", each with multiple "addresses" (a.k.a. subaddresses). It's now only a cat's whisker away from being ready for code review. https://github.com/monero-project/monero/pull/2056  
**\<moneromooo>** Very nice stuff ^\_^  
**\<medusa>** cool  
**\<Jaquee>** ^^  
**\<medusa>** how about release ? dont we need to do a testnet fork in advance ?  
**\<medusa>** dou you guys have a rough timeline in mind ?  
**\<knaccc>** subaddresses are a wallet only change  
**\<moneromooo>** For subaddresses, I don't think we'd need to.  
**\<sgp>** Just joining now. Thanks Jaquee and kenshi84 (and others of course)  
**\<medusa>** no i mean in general  
**\<medusa>** september fork is not far away  
**\<medusa>** when do we release ?  
**\<moneromooo>** Well, the only thing we'd need we don't have yet is the smaller range proofs, but I think we're kinda screwed now.  
**\<moneromooo>** All the rest is active on testnet I think.  
**\<knaccc>** why screwed? it's too late for the range proof reduction to make it into the september fork?  
**\<moneromooo>** Seems so.  
**\<ArticMine>** That was my question also  
**\<moneromooo>** Ah, there was also a question of whether to bump minimum mixin higher than was planned.  
**\<moneromooo>** It was supposed to go from 2 to 4.  
**\<binaryFate>** who's working on range proof reduction?  
**\<knaccc>** luigi  
**\<ArticMine>** So we are looking at 2018 for the smaller range proofs?  
**\* moneromooo** apologizes for having mugged luigi for multisig help  
**\<medusa>** whats exactly the issue ? too little time for now?  
**\<knaccc>** to be fair, it's not the kind of thing that any mistakes can be afforded to be made with  
**\<medusa>** he should just stop watching charts all day ^^  
**\<moneromooo>** Was there anything else than smaller range proofs, 2-\>4 min mixin, and mandatory rct for next fork ?  
**\<knaccc>**  something has to happen to get some consensus on the mandatory ring size change  
**\<pero>** there isnt consensus?  
**\<knaccc>** i've suggested 20, surae said he doesn't have a problem with that, but not much other commentary.  
**\<moneromooo>** I've not seen olarks for a while. Anyone has ?  
**\<knaccc>** the thread went dead https://github.com/monero-project/monero/issues/1673  
**\<pero>** maybe we should schedule a townhall type irc meeting  
**\<pero>** instead of intermittent back and forth in the ticket  
**\<knaccc>** other people just need to make their opinions known, not that many people have done so  
**\<medusa>** i cant judge waht the min mixing should be, but would like to see the pole that can judge it discuss it ofc  
**\<pero>** ^  
**\<medusa>** so i trust the experts  
**\<moneromooo>** Anyone else wants to say anything ?  
**\<medusa>** i think the miimum mixing is an important question. i cant help u guys discuss it  
**\<knaccc>** 2017-06-23 12:54:59 surae well, if raising the ring size from 3 to 20 results in 15% larger transactions, i have *no* problem endorsing increased minimum mix-ins *even without* taking churning into account. i've advocated that since the chain reaction paper, but lacking a specific attack vector, it was hard to justify the cost...  
**\<medusa>** but it shouldnt be done last minute  
**\<medusa>** now is the time  
**\<sgp>** I think most people including me are ok with any reasonable number \>10  
**\<moneromooo>** 15% means \~30% once we have the smaller range proofs.  
**\<knaccc>** moneromooo true. it's the price to get privacy in the E-\>A-\>B-\>E scenario unfortunately, in my opinion.  
**\<iDunk>** Why don't we just ban Eve and be done with it?  
**\<knaccc>** because it's how users make purchases while avoiding XMR/local currency exchange rate risk  
**\<knaccc>** which according to a particular vendor that posted on reddit was the almost exclusive pattern of behaviour of his clients  
**\<knaccc>** what i posted above btw was surae's comment, not my comment to surae  
**\<iDunk>** Which you probably solicited?  
**\<knaccc>** rubber hosed.  
**\<medusa>** ok guys, is that it ?  
**\<knaccc>** the premise is that my simulation shows that an EABE attack can only be mitigated if the anonymity set can reach 80,000 inputs. And that's not possible without intermediate transactions, and it'd take excessive intermediate transactions to achieve this unless the mandatory ring size is much higher than it currently is  
**\<knaccc>** it's a long github thread, I'll leave you all to read it at your collective leisure :)  