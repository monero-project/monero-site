---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-03-26
summary: 0.10.3.1 release, light wallets, fireice-uk's proposal, and 0MQ
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

### Overview  

An overview [can be found on MoneroBase](https://monerobase.com/wiki/DevMeeting_2017-03-26).  

### Logs  

**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** ok so since the last meeting I guess the main thing is we tagged and released 0.10.3  
**\<fluffypony>** which we're about to deprecate  
**\<fluffypony>** lol  
**\<fluffypony>** are there any issues with 0.10.3 besides the cumulative block size thing?  
**\<fluffypony>** now's the time to point them out  
**\<hyc>** no idea, but I'm running a build from a couple days ago  
**\<Jaquee>** me too. no issues so far  
**\<johnalan>** Been running on OSX since yesterday. No issue.  
**\<fluffypony>** moneromooo: any idea why the issue seems to affect so few?  
**\<hundehausen>** Smart Mining is not working for me on newest macOS  
**\<moneromooo>** Dunno. Low level processor specifics I guess, but... shrug.  
**\<fluffypony>** hundehausen: it only works on Linux  
**\<fluffypony>** not on anything else  
**\<samsunggalaxyplayer>** I have smart mining running on Windows right now  
**\<Jaquee>** yeah. windows + linux iirc  
**\<Jaquee>** but not osx i think  
**\<luigi1112>** lunch time  
**\<fluffypony>** I like to pretend that Windows doesn't exist  
**\<fluffypony>** :-P  
**\<Jaquee>** lol  
**\<moneromooo>** What is it ?  
**\<fluffypony>** moneromooo: you open them to let air in  
**\<moneromooo>** Ah, doors.  
**\<hyc>** usually lets bugs in too  
**\<amiuhle>** smaller sized doors basically  
**\<gingeropolous>** drumroll  
**\<fluffypony>** lol hyc  
**\<btcltcxmrmaximal>** winblows sucks  
**\<hyc>** windows and doors in Ireland have no screens. I dunno what's with these people.  
**\<fluffypony>** anyhoo  
**\<fluffypony>** let's move on  
**\<fluffypony>** 3. Discussion of fireice-uk's proposal (as started in #1828  
**\<fluffypony>** I'd like to move this to Funding Required  
**\<fluffypony>** and fireice-uk updated the funding costs based on current pricing  
**\<fluffypony>** obviously there are some consensus-critical aspects to it, so I think it's worth discussing  
**\<moneromooo>** Wasn't this a wallet thing ?  
**\<btcltcxmrmaximal>** https://github.com/monero-project/monero/issues/1828  
**\<xmreric>** Yes. Speedup on Intel/AMD processors, which is helpful considering RingCT has slowed sync down.  
**\<fireice-uk>** it is a wallet thing (unless you want to use it somewhere else)  
**\<hyc>** ringCT has slowed wallet sync?  
**\<fluffypony>** moneromooo: if we replace SUPERCOP then it's consensus critical  
**\<vtnerd>** I don't see how ringct slowed down wallet sync ... ?  
**\<moneromooo>** Then no consensus issue. And if it proves good for a while, *then* it can be used in consensus.  
**\<pigeons>** xmreric: how has ringct slowed down sync?  
**\<xmreric>** I thought I had heard that from others  
**\<vtnerd>** the additional work comes when a output match is found  
**\<fluffypony>** so I guess wallets with thousands and thousands of ringct outputs?  
**\<xmreric>** https://monero.stackexchange.com/questions/3718/when-syncing-moneros-blockchain-from-scratch-why-does-it-begin-fast-and-end-sl  
**\<fluffypony>** xmreric: that's daemon, not wallet  
**\<fluffypony>** 1828 is a proposal for a wallet change  
**\<xmreric>** ok  
**\<vtnerd>** its more work on the node verifying the block, but not the wallet since its not reading it. I suppose there is some additional time for transmission/marshalling/unmarshalling, but this is smaller than any crypto  
**\<moneromooo>** The bottleneck's the daemon anyway.  
**\<btcltcxmrmaximal>** daemon sync time seems a lot more important than wallet sync time (in comparison) if our primary goal was to encourage more full nodes.  
**\<vertp>** Unless you're using a remote node, no?  
**\<hyc>** this complicates the build if we want a crypto/ subtree just for wallet and one just for daemon  
**\<moneromooo>** Hmm, fair point.  
**\<fluffypony>** ok so then here's a suggestion  
**\<Jaquee>** the amount of tx's/day is higher since the date around ringct was activated. So wallet sync slows down. but not really related to ringct  
**\<fluffypony>** what if we had cryptoopsbuilder run on build  
**\<fireice-uk>** build won't be more more complicated - just more symbols  
**\<fluffypony>** and use the existing stuff by default, but optionally use the newer SUPERCOP / whatever  
**\<fireice-uk>** my suggestion would be to use ge64* symbols for the new code  
**\<moneromooo>** BTW, is that not what you wanted to replace by... tweetnacl or whatver it was ?  
**\<fluffypony>** moneromooo: yes  
**\<fluffypony>** but only when TweetNaCl has finished formal verification  
**\<moneromooo>** And that proposal replaces it with this, or another replacement ?  
**\<moneromooo>** Alright...  
**\<hyc>** I'd prefer we just keep the generated code statically committed to git  
**\<hyc>** no idea what environment the builder might break on  
**\<fluffypony>** hyc: the builder is pretty simple (just splicing text really), but it does add a python dep to the build process  
**\<hyc>** yeah, let's not do that.  
**\<moneromooo>** fireice-uk: did you try running a wallet refresh without any crypto to see how much faster it was at best possible gain ? IIRC, my bottleneck is the daemon (SSD, though CoW fs).  
**\<fluffypony>** either way, in the long run I'd like to have a default "safe" crypto implementation, and an optional fast one  
**\<moneromooo>** s/without any crypto/with the actual tx scanning disabled/  
**\<fireice-uk>** moneromoo: bottleneck is the poor fetching from the daemon  
**\<moneromooo>** So changing the crypto won't do a thing right now, right ?  
**\<fireice-uk>** it somehow mananges not to max anything  
**\<fireice-uk>** that is the part 2  
**\<fireice-uk>** crypto is part 1  
**\<pigeons>** so likely this is a premature optimization for now  
**\<fireice-uk>** pigeons: want to swap round the order?  
**\<vertp>** why not swap the orders fireice-uk? And do daemon fetching optimization  
**\<fluffypony>** not a bad idea  
**\<moneromooo>** Oh ok. There are two things that should be easy win there: store non prunable separately, and maybe fetch a bunch of them at once (wallet refresh always has pretty much N..N+dN txes).  
**\<gingeropolous>** so part 2 is the actual optimization? and part 1 is... ?  
**\<moneromooo>** I wanted to do the daemon thing for a while, but looks like I won't have to :D  
**\<fireice-uk>** gingeropolous: part 1 is crypto optimziation, part 2 is parallelism opt  
**\<hyc>** but current discussion says crypto opt will be overshadowed by daemon  
**\<fluffypony>** ok so we swap them around and do part 2 first, and then revisit how to structure part 1 after that?  
**\<hyc>** makes sense  
**\<fluffypony>** fireice-uk: that sound ok?  
**\<moneromooo>** Well, that's my recollection of my particular machine anyway. Might differ for others.  
**\<fireice-uk>** my suggestion would be to do part 1 first - this way you can have a loot at it before merging  
**\<fireice-uk>** \*look  
**\<moneromooo>** I want to have a look at 2 also before merging.  
**\<hyc>** lol  
**\<vertp>** lol.  
**\<fireice-uk>** of course, but i assume 1 will require more time  
**\<fluffypony>** lol  
**\<vertp>** but if its has more immediate benefits, why not go with 2 first?  
**\<hyc>** yeah it's sounding like 1's benefits will be unmeasurable for now  
**\<vertp>** it makes even more sense to do part 2 first if it is less complex/faster to implement.  
**\<Jaquee>** +1  
**\<moneromooo>** Yes, do the easy wins first, and the possibly dangerous stuff might not be needed (and will only work on x8664 anyway AIUI).  
**\<fireice-uk>** ok, that's fine with me  
**\<moneromooo>** Keeping in mind you also need the full blocks to serve syncing peers.  
**\<vertp>** great!  
**\<fluffypony>** ok cool - I'll move the proposal to funding after the 0.10.3.1 tag  
**\<samsunggalaxyplayer>** so in like 3 months /s  
**\<fluffypony>** hah hah  
**\<fluffypony>** touché  
**\<vertp>** Since we are on a similar topic, could I bring up ZMQ? That should also speed up sync time/provide faster wallet func at some point no?  
**\<tewinget>** nah, fluffypony doesn't run on tewinget Time™  
**\<fluffypony>** vertp: it should provide better scalability for multiple wallets hitting the same daemon  
**\<fluffypony>** but I don't think it'll provide speed benefits beyond that  
**\<vertp>** so light-wallets. Is there anything new on that front tewinget.  
**\<tewinget>** agreed  
**\<tewinget>** well, I've been working on merging from upstream this morning  
**\<tewinget>** I think I've *just* got it sorted  
**\<hyc>** yay  
**\<vertp>** woo!  
**\<gingeropolous>** !!!!  
**\<johnalan>** Nice  
**\<fluffypony>** let's stick to the schedule plx  
**\<tewinget>** few things changed in core that threw wrenches in the merge >**>**  
**\<tewinget>** sorry fluffypony :)  
**\<vertp>** yes, sorry.  
**\<fluffypony>** ok so  
**\<fluffypony>** 4. Remote nodes (ie. a discussion of #605)  
**\<moneromooo>** Well, I was thinking about this, and I will do a wallet mode where a full wallet (ie, phone) can connect to a view wallet (ie, home server), and update from it. That should be super fast.  
**\<fluffypony>** moneromooo: that's exactly what vtnerd is doing  
**\<moneromooo>** tewinget: I think I kinda added a new RPC... a few days ago...  
**\<fluffypony>** so would be duplication of work  
**\<moneromooo>** Oh, OK.  
**\<johnalan>** Won't that only show incoming though?  
**\<fluffypony>** but let's back up a second  
**\<hyc>** so a wallet can sync from another wallet?  
**\<fluffypony>** because I think that maybe there's some value in the *idea* of 605  
**\<moneromooo>** In my idea, yes (really, transfer output data).  
**\<fluffypony>** but the specifics aren't great  
**\<fluffypony>** for eg.  
**\<moneromooo>** But I dunno what vtnerd is doing.  
**\<xmreric>** Lots of GUI users want this on some level or another.  
**\<xmreric>** I'm pretty big on emphasizing away from using remote nodes as best-practice.  
**\<fluffypony>** what if an unsynced daemon, when it has a wallet client requesting outputs from a certain height, picks a random peer and asks that peer for the data  
**\<xmreric>** But for people in developing nations, etc it's a good option to offer  
**\<samsunggalaxyplayer>** I know that we all want everyone to run a full node, but I imagine less than half actually will, and that percentage will only decrease over time with new, non-technical users  
**\<fluffypony>** ie. without range proofs / sigs / etc.  
**\<gingeropolous>** the random peer has its rpc open?  
**\<fluffypony>** the peer could lie, but the node will eventually know that it has  
**\<fluffypony>** gingeropolous: no  
**\<fluffypony>** we don't need RPC for this, we're already talking to the peer using the p2p protocol  
**\<moneromooo>** Why would the wallet request outputs for a given height, if the daemon isn't synced to that yet ?  
**\<fluffypony>** moneromooo: restored wallet, or loading a wallet file  
**\<Jaquee>** if the daemon isnt synced it shouldnt be used by the wallet  
**\<fluffypony>** or creating a new wallet  
**\<moneromooo>** Restored wallet would not, it has no idea about where it has outputs.  
**\<fluffypony>** moneromooo: restored from seed has a hardcoded restore height  
**\<guzzi>** It is similar to how hadoop works  
**\<moneromooo>** New wallet wouldn't either. They'd get that info from the daemon, who'd necessarily be synced up to that point.  
**\<guzzi>** Here is the first answer it may be wrong  
**\<moneromooo>** Unless you delete your blockchain after the wallet learns abvout those. But then, your problem.  
**\<fluffypony>** moneromooo: in each of the instances we either have a block height or we have a date that we can correlate  
**\<moneromooo>** Oh, you want *all* outputs ?  
**\<fluffypony>** from that height or date, yes  
**\<guzzi>** I like it. The attack would bre someone setting up a ton of fake nodes.  
**\<fluffypony>** basically have the daemon tunnel "remote node" functionality to a peer  
**\<moneromooo>** OK, so essentially, syncing the chain with no vcerification whatsoever.  
**\<fluffypony>** moneromooo: yes - "pre-syncing" it  
**\<fluffypony>** because the node will catch up, and then the wallet will know if outputs have been withheld  
**\<moneromooo>** I actually had an idea about this a few days ago, where you could sync to a daily set of key images and outputs. Daily, verifying nodes hash it into the blockchain.  
**\<guzzi>** Basically a no lock read  
**\<moneromooo>** So you can sync to that, check hash, then sync the last day's chain on top.  
**\<gingeropolous>** but this would leave the wallet in a state where it can't create transactions until proper sync'd?  
**\<fluffypony>** moneromooo: the problem with that model are the oracles  
**\<moneromooo>** It does require *some* trust, though.  
**\<moneromooo>** Go on ?  
**\<pigeons>** so the tricky part is the rules to make the block invalid if the miner lies  
**\<gingeropolous>** er, until the daemon is proper syncd?  
**\<fluffypony>** gingeropolous: the daemon could also tunnel requests for ring outputs or whatever  
**\<fluffypony>** the trust model is the same as using some random guy's remote node  
**\<Jaquee>** good idea. but still doesnt help users without enough disk or those on a slow connection  
**\<guzzi>** True  
**\<samsunggalaxyplayer>** That's what I proposed #602 for  
**\<samsunggalaxyplayer>** People who do not want to run a full node  
**\<pero>** i had a kind of mostly trustless idea for this  
**\<fluffypony>** people that don't want to run a full node at all have to then use something like the MyMonero apps using the MyMonero backend instead of their own  
**\<fluffypony>** or Exodus or Coinomi or whatever else exists  
**\<pero>** that would poll multiple nodes for the same outputs and verify them  
**\<pero>** and store those locally  
**\<fluffypony>** pero: that's even worse than a remote node  
**\<pero>** fluffypony: +1  
**\* pero** sees himself out  
**\<guzzi>** Or this and never sync tge daemon  
**\<guzzi>** Lol  
**\<rehrar>** What if the time connected to a remote node is limited? Just setting up the GUI it connects to a remote node, and they can use right away, while stuff is going on in the background? (Sorry, just an idea I had. Not a developer so I don't know if possible)  
**\<fluffypony>** the larger issue here is that we can't do something like SPV  
**\<fluffypony>** so we really have nothing between "run your own node" and "use a centralised service"  
**\<rehrar>** Stuff = syncing  
**\<ArticMine>** Should we looking at people connecting to their own remote node form say a mobile device?  
**\<fluffypony>** rehrar: that's exactly what I'm suggesting, but let the daemon "tunnel" the requests through  
**\<fluffypony>** ArticMine: the model here is people who don't want to run a node at all, not at home, not on a VPS, not at all  
**\<Jaquee>** rehrar: that's what #605 does  
**\<fluffypony>** we already have a solution for people who are willing to run a node  
**\<rehrar>** Sorry. A lot of the tech is going above my head to catch it all. :)  
**\<moneromooo>** Well, they can use paypal, and come back in 5 years.  
**\<rehrar>** Tech talk  
**\<Jaquee>** #605 connects to a remote node while local node is syncing  
**\<jacobjeweler>** I agree, fluffy. I think the real issue is people not having enough knwoledge to install nodes. An installer on windows and .deb in apt would increase full nodes immensly.  
**\<gingeropolous>** i like it. the pre-sync idea. using the daemon. it opens up the whole network as a source of remote nodes, which decentralizes the effort  
**\<xmreric>** What if all this work gets done, but then this audience just uses web/mobile wallets anyways  
**\<pigeons>** keep improving the ability for people to run their own node before making it easier for people to use a different model  
**\<gingeropolous>** and because the daemon *is* running  
**\<gingeropolous>** it will be synchronizing its own copy of the blockchain  
**\<fluffypony>** @xmreric that's the most likely outcome  
**\<hyc>** that is trickier  
**\<fluffypony>** people *are* going to use MyMonero / Exodus / Coinomi even if we have a magical remote node model that doesn't vampire the network  
**\<guzzi>** It could even hold part of the chain and randomly ask for missing parts  
**\<hyc>** block data sync'd this way will need to be stored differently than from regular syncing  
**\<pigeons>** peopl are going to use worse options than those even  
**\<fluffypony>** hyc: agreed  
**\<fluffypony>** pigeons: store on an exchange :-P  
**\<samsunggalaxyplayer>** I like the pre-sync as well. But until we have MyMonero/Edodus/Coinomi, people will use a remote node in an inefficient way  
**\<fluffypony>** @samsunggalaxyplayer then let's not make it easier by having a drop-down  
**\<gingeropolous>** ^  
**\<Jaquee>** why not make it easy while waiting for a better solution?  
**\<fluffypony>** remember that a lot of decisions we make today, we're stuck with for 5+ years  
**\<gingeropolous>** the effort wall to hack the system to use a remote node isn't that steep anyway  
**\<fluffypony>** Jaquee: because ^^  
**\<fluffypony>** people become reliant on quick fixes  
**\<hyc>** So somewhere we need the doc to say "you must have a computer with at least xx GB of disk space that you are willing to leave running 24/7"  
**\* tewinget** knows this, and as such leaves most decision making to fluffypony so he can be blamed in 5 years.  
**\<moneromooo>** Ah, tewinget the Wise.  
**\<endogenic>** in 2023  
**\<Jaquee>** i just don't think we should be holding back on UX just because we don't have a better solution yet  
**\<pigeons>** have a nice message, now that you have verified the blockchain, we notice you have been screwed, pick a better node next time  
**\<fluffypony>** lol  
**\<moneromooo>** Anyway, this has turned to a disparate set of confusing stuff now.  
**\<guzzi>** Lol  
**\<fluffypony>** Jaquee: the GUI is meant to operate with a full node that you operate, it's not a lightweight GUI  
**\<ArticMine>** Do we want to encourage people connecting to a untrusted random node  
**\<fluffypony>** ArticMine: no we don't  
**\<samsunggalaxyplayer>** Summary: for smart syncing with fluffy's "pre-sync" approach, against anything that makes using a remote node easier  
**\<guzzi>** For ppl who want to use a phone could it never sync?  
**\<cryptocomicon>** sounds like we need a monero node appliance, like the wifi router that everyone has in their house / flat  
**\<samsunggalaxyplayer>** I agree #602 is a short-term solution. I think it's better than telling people to go to MoneroWorld to get a random node, but if we have a better solution going forward, that's preferable  
**\<johnalan>** Good idea  
**\<hyc>** yes but wifi routers tend to be 32bit  
**\<jacobjeweler>** Thats why i think installer for windows and adding .deb to apt repositories will have it so people can be guided through an install and proper installation can be verified  
**\<guzzi>** And always use a random?  
**\<fluffypony>** guzzi: phone would be MyMonero + your own node / MyMonero backend OR Exodus OR Coinomi  
**\<gingeropolous>** and they're not cheap  
**\<guzzi>** Ok thanks  
**\<jacobjeweler>** Adoption rate will increase full node usage  
**\<fluffypony>** @JacobJeweler we're definitely working on improving that with the GUI  
**\<ArticMine>** I say make it easy for people to set up their own node to connect to. Appliance like  
**\<guzzi>** That is horse poop  
**\<fluffypony>** with the auto-update thing  
**\<pero>** perhaps there's room for an unofficial gui fork  
**\<guzzi>** No way ppl walñnt full nodes  
**\<fluffypony>** gingeropolous: http://imgur.com/a/3mMBE  
**\<gingeropolous>** in my mind the remote node thing has 2 components: 1) instant on 2) no blockchain storage.  
**\<fluffypony>** gingeropolous: pigeons is working on it  
**\<hyc>** right now the only way I see to make this easy is with kovri, so we can ignore firewall and port forwarding issues  
**\<fluffypony>** hyc: +1  
**\<gingeropolous>** we can address instant on with lots of things  
**\<gingeropolous>** we can't address no blockchain storage. And those that don't want to store the blockchain will always use some lighter weight thing, so ... i think im rambling.  
**\<jacobjeweler>** Good point hyc!  
**\<amiuhle>** How about creating SD card images with the blockchain preloaded for a specific monerod release. You'd "just" have to download the image, flash it and start up monerod  
**\<johnalan>** +1 hyc  
**\<amiuhle>** ah, like for the Pine64 or something similar  
**\<hyc>** pretty big downloads. they don't compress well at all.  
**\<hyc>** 13GB now  
**\<Jaquee>** and pine64 is to slow  
**\<johnalan>** Does it even have native AES?  
**\<fluffypony>** pine64 isn't too slow?  
**\<amiuhle>** hyc: didn't you say you're running your full node fine on yours?  
**\<hyc>** pine64 yes  
**\<pero>** pine64 can run a node  
**\<hyc>** yeah pine64 works ok as a fullnode. buy an expensive microSD  
**\<fluffypony>** alright  
**\<tewinget>** I'll brb in like 10 min, fyi  
**\<fluffypony>** let's move on  
**\<fluffypony>** 5. Code + ticket discussion / Q & A  
**\<Jaquee>** ok. so #605 will not be merged?  
**\<fluffypony>** (we can carry on discussing this after the Kovri meeting)  
**\<Jaquee>** all right  
**\<fluffypony>** Jaquee: no not with the drop down  
**\<hyc>** you can release the bootleg edition  
**\<fluffypony>** lol  
**\<amiuhle>** I've gotten the impression that there should be more unit tests from reading the last dev meeting  
**\<fluffypony>** amiuhle: yes  
**\<jacobjeweler>** Lets be honest, most users have windows. And harddisks that can easily fit the lmdb database. If you want great adoption and more full nodes on the network (people installing and usong their local node for gui/cli). Thats where the focus on something like an installer should be at.  
**\<amiuhle>** what if we at least request tests for new PRs?  
**\<moneromooo>** Then you won't get PRs.  
**\<vtnerd>** that would help, but could be frustrating in a few components  
**\<fluffypony>** amiuhle: we don't want PRs from new contributors mired in a list of things-the-PR-must-have  
**\<vtnerd>** for instance, I added some to epee::stringtools, but those are isolated functions so its easy to setup the test env  
**\<hyc>** some of this stuff won't be easily detected in tests anyway. race condition with mining blocks, etc.  
**\<fireice-uk>** one more thing regarding wallet2.cpp  
**\<jacobjeweler>** Sorry am on phone typing, slow to respond.  
**\<vtnerd>** hyc: yup. but figuring out a base framework for some areas might be helpful to get a baseline. but its decent chunk of work  
**\<fireice-uk>** it is already at an unwieldy 5kloc, what's the opinion on splitting it into smaller parts?  
**\<hyc>** can't detect some of these with code coverage testing either. code cov can't tell you about logic you're missing.  
**\<moneromooo>** Tests can be added after the fact btw.  
**\<moneromooo>** Is there a split that makes sense ?  
**\<moneromooo>** And 5k is wieldy for any sane editor.  
**\<fireice-uk>** moneomoo: takes 2gb+ to compile  
**\<hyc>** yeah I wouldn't worry about wallet2.cpp at the moment.  
**\<vtnerd>** mooo Im guessing vim ?  
**\<hyc>** 2GB+ to compile comes from all the boost headers and shit  
**\<moneromooo>** What I want is avoiding spamming the git log, as I use it a lot.  
**\<fireice-uk>** ok  
**\<moneromooo>** vim works fine with 5k, but most other editors are also not shit.  
**\<vtnerd>** fireice-uk: thats partially coming from the epee headers though, but some split may help a bit  
**\<moneromooo>** Or... I assume. 5k is not much.  
**\<hyc>** I've done the experiment before.  
**\<fluffypony>** bbedit handles it fine  
**\* anonimal** coughs  
**\<hyc>** splitting the file up to try to fit it under 2GB  
**\<fluffypony>** ok guys  
**\<fluffypony>** Kovri meeting  
**\<hyc>** made no diff. it's the headers, not the cpp source  
**\<fluffypony>** next meeting in 2 weeks, no time for Q&A, thanks for coming  