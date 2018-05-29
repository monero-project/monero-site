---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2017-10-22
summary: Discussion of open PRs and issues, MoneroIdent, Kovri & TOR, v0.11.0.1 (point) release, dedicated Monero hardware wallet, and miscellaneous
tags: [dev diaries, core, crypto]
author: dEBRUYNE / fluffypony
---

# Overview  

An overview can be found on [MoneroBase](https://monerobase.com/wiki/DevMeeting_2017-10-22).  

# Logs  

**\<rehrar>** Comma use is everything here.  
**\<fluffypony>** ok  
**\* fluffypony** fires up meeting issue  
**\<fluffypony>** 1. Greetings  
**\<fluffypony>** 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<fluffypony>** 4. Any additional meeting items  
**\<fluffypony>** 5. Confirm next meeting date/time  
**\<surae>** howdy!  
**\<fluffypony>** and an additional point that I guess we can put in between 3 and 4: "Should regular hardware development reporting and discussion be part of #monero-dev (biweekly meetings), #monero-community (biweekly meetings), or something else?"  
**\<msvb-lab>** Hello.  
**\<rbrunner>** Grüezi mitenand  
**\<rehrar>** I thought that could fall under 4., sorry  
**\<ArticMine>** hi  
**\<hyc>** hi  
**\<iDunk>** Hi.  
**\<endogenic>** Hi fluffypony!  
**\<rehrar>** hi endogenic  
**\<Jaquee>** hey  
**\<fluffypony>** ok  
**\<fluffypony>** moneromooo / hyc / luigi1111 you guys around?  
**\<hyc>** nope  
**\<moneromooo>** I'm here  
**\<endogenic>** o/ rehrar  
**\<fluffypony>** ok  
**\<fluffypony>** so moving on to 2. Brief review of what's been completed since the previous meeting  
**\<fluffypony>** loads of merges  
**\<fluffypony>** the big ones are lightweight wallet API support  
**\<fluffypony>** and subaddresses  
**\<endogenic>** Omg  
**\<surae>** at MRL, i wrote up a prototype for the spectre blockchain algorithm. i'm pushing it to my github later today. it is functional, but can be made prettier and more efficient, but it's pretty much ready for stress testing so we can really see whether it's a waste of energy or not  
**\<fluffypony>** we also have a number of PRs going into the 0.11 branch, specifically: 2478, 2493, 2514, 2632, 2639, 2654  
**\<fluffypony>** and then we'll tag and release 0.11.1  
**\<moneromooo>** yay ^\_^  
**\<hyc>** :D  
**\<surae>** the research-lab project has a PR waiting to be merged from my github on a similar note  
**\<fluffypony>** surae: ok cool I'll merge it now  
**\<hyc>** that spectre stuff sounds great  
**\<rehrar>** link to spectre stuff?  
**\<surae>** hyc they just roll with this idea of having 10 blocks a second, it's nutters  
**\<surae>** https://eprint.iacr.org/2016/1159.pdf  
**\<rehrar>** thanks  
**\<surae>** zooko mentioned it to me, btw. :P gotta give credit where credit is due  
**\<fluffypony>** ok moving on to 3  
**\<fluffypony>** 3. Code + ticket discussion / Q & A  
**\<hyc>** is the set of patches for 11.0.1 pretty well settled?  
**\<fluffypony>** unless there are some others beyond that list  
**\<moneromooo>** I just cherry picked the OpenBSD one earlier, but it's low impact.  
**\<fluffypony>** I'll add that to the list  
**\<fluffypony>** ok so then I'd like to bring up the latest Verge FUD for discussion  
**\<fluffypony>** for those that haven't seen it  
**\<fluffypony>** https://twitter.com/moneroident  
**\<fluffypony>** https://dotnetrussell.com/index.php/2017/10/21/locating-monero-users-via-transaction-broadcasts/  
**\<fluffypony>** https://github.com/DotNetRussell/MoneroUserScraper  
**\<fluffypony>** it's literally just netstat  
**\<moneromooo>** It'd be easier to just run print\_cn or print\_pl.  
**\<fluffypony>** and then it excludes some nodes that he decided are "server nodes" (whatever that means)  
**\<hyc>** lol  
**\<fluffypony>** moneromooo: too sophisticated  
**\<fluffypony>** lol  
**\<endogenic>** Lol  
**\<fluffypony>** that said, I have received several messages from people who are quite concerned that Monero is not private  
**\<surae>** well  
**\<fluffypony>** oh - there's also this fun article: https://bitsonline.com/monero-exploit-threatens-privacy/  
**\<fluffypony>** lol  
**\<surae>** i haven't seen these latest criticisms at all yet  
**\<surae>** but i have to ask  
**\<rbrunner>** The "fun article" is really bad  
**\<surae>** what is our policy going to be for writing responses to criticisms?  
**\<surae>** because  
**\<surae>** consider the miller and kumar papers, right? long papers. writing responses takes a long time...  
**\<pigeons>** DoS by stupid claims  
**\<endogenic>** rbrunner: looks more like a hit piece  
**\<fluffypony>** the anonymint post is even longer, and we largely ignored it  
**\<fluffypony>** because it was a massive waste of time  
**\<saddam>** If you don't want to be on his "list", just leave your monerod running 24/7  
**\<moneromooo>** I say ignore the obvious bullshit. People gonna pump and dump anyway.  
**\<surae>** not all their criticisms are false (although a lot are outdated), but my point is this: if someone writes a 1000 word article claiming something about monero's privacy, it will in general take 9000 words to "debunk" the false parts and explain why the true parts are either part of the design or already on our roadmap for improvement  
**\<endogenic>** Arent there other cases of having published this data anyway? Like monero node maps  
**\<hyc>** 'The amount of energy required to dispel bullshit is an order of magnitude greater than that required to propagate it'.  
**\<hyc>** 1 reply 1 retweet 0 likes  
**\<vtnerd>** wow, that article is really dumb  
**\<surae>** hyc ha, i was close with a factor of 9  
**\<endogenic>** So alternative to refutation is be like yeah get with the times  
**\<surae>** i liked the monero challenge thing  
**\<surae>** i *love* that idea  
**\<gingeropolous>** how close is i2p?  
**\<gingeropolous>** er, kovri  
**\<fluffypony>** gingeropolous: still a little ways away - but we'd still need to refute this criticism even if it was in place  
**\<endogenic>** Also want to know  
**\<endogenic>** gingeropolous:  
**\<fluffypony>** because aiui the way that Verge works is that it's only Tor or i2p  
**\<fluffypony>** which is open to isolation and Sybil attacks, but they don't care about that  
**\<moneromooo>** I'm not sure how this is complicated. If you want your IP to be hidden, use Tor. Like everyone else.  
**\<fluffypony>** moneromooo: in the same way that ZCash can say "if you want your transaction to be hidden use shielded addresses"  
**\<ArticMine>** Kovri will fix all of this anyway  
**\<pigeons>** there are people that try to connect to as many nodes as possible and record which transactions they first see relayed from those nodes, but that's not new  
**\<moneromooo>** Well, that is true, no ?  
**\<gingeropolous>** i mean, the only response is to explain how blockchains and the internet works  
**\<fluffypony>** yes - but if it's not the default mode then it's not worth talking about  
**\<moneromooo>** OK. Then we're not anonymous, and we'll be once kovri, done.  
**\<moneromooo>** Much easier than dealing with the bullshit ^\_^  
**\<surae>** fluffypony "we'd still need to refute this criticism" \<--- i totally disagree. this is not only a known issue, we are building kovri around solving it  
**\<pigeons>** if people were surprised by this its good they are aware of it  
**\<fluffypony>** anonimal: what are your thoughts on us spending some time building out the mixnet stuff, and bundling Tor until Kovri is ready?  
**\<fluffypony>** surae: their netstat bot would continue to publish node IPs and they'd continue to push that agenda  
**\<endogenic>** Surae: arent those two facts what makes refutation possible? :p  
**\<endogenic>** Make  
**\<moneromooo>** fluffypony: is that takes time, I'm against it. It's just wasting time for something which wasn't in good faith to begin with.  
**\<surae>** fluffypony: what refutation would get them to stop publishing node IPs?  
**\<moneromooo>** Or, at least, I won't waste my own time on it.  
**\<rehrar>** The only valid criticsm I think they have (but correct me if I'm wrong) is that in a country where Monero is 100% outlawed, the government could see an IP address connecting to the Monero network (can't see if/when transactions are sent though), and that person could get in trouble. But that's the only information they have, no?  
**\<Yohkii>** Just make a bot that does the same to verge, including where transactions come and go  
**\<Yohkii>** less effort  
**\<rbrunner>** Wouldn't they happily go on and publish Tor IP's anyway, people would not know these  
**\<fluffypony>** moneromooo: we have to build out the ipv4 / mixnet stuff anyway, we'd just be plugging Tor in instead of Kovri till Kovri is ready, so it's 95% useful work, 5% effort that will be replaced later  
**\<surae>** fluffypony: oh your recommended tactic here, then, is to first push tor until kovri is ready?  
**\<fluffypony>** surae: none - but a published refutation would allow us to point people to it - the getmonero.org post responding to the Miller paper is my go-to when people ask about it  
**\<fluffypony>** surae: yes that's what I was thinking  
**\<dEBRUYNE>** I can write a post fwiw  
**\<moneromooo>** OK, if it's shared stuff then that's good.  
**\<dEBRUYNE>** But would probably need some help on the really technical stuff  
**\<rbrunner>** Is it even technical? Internet 1x1: IPs!  
**\<gingeropolous>** im kinda confused - our proposed kovri implementation was gonna keep blocks on clearnet anyway, so this "attack" would still be able to "identify" monero users  
**\<moneromooo>** AIUI, it can do both.  
**\<gingeropolous>** are we just gonna switch too 100% kobri, all the time?  
**\<moneromooo>** Well, it will be able to do both :)  
**\<gingeropolous>** right. but the bandwidth.  
**\<dEBRUYNE>** gingeropolous: There was supposed to be i2p only | i2p/ip | ip only  
**\<fluffypony>** gingeropolous: yes that's what I was saying to surae  
**\<dEBRUYNE>** iirc  
**\<dEBRUYNE>** Also, iirc if you push blocks over i2p you might incur latency issues, which increases the probability of an orphan  
**\<fluffypony>** yes  
**\<pigeons>** which transactions came from which nodes/ips affects privacy more than knowing you run monero. if you relayed a block first, yeah it could make your pool a traget, but there are other mitigations for that  
**\<moneromooo>** Just post the URL in #monero  
**\<rbrunner>** I have a hunch the Verge people will use the log of this meeting to show that "Monero devs are in panic"...  
**\<fluffypony>** rbrunner: lol  
**\<endogenic>** Is this issue within sarang’s wheelhouse? I know he was looking into working on kovri  
**\<gingeropolous>** pigeons, yeah I get that. but this "criticism" doesn't even address that.  
**\<gingeropolous>** its just ermagerd ips  
**\<pigeons>** gingeropolous: well that isnt interesting  
**\<fluffypony>** gingeropolous: great summary  
**\<fluffypony>** lol  
**\<fluffypony>** ok well we'll wait for anonimal to comment on it, and we can go from there  
**\<gingeropolous>** i know. but ppl have tried to explain the cost of actual sybil using the public ips and trying to track txs with this "weakness"  
**\<fluffypony>** let's move on to 3. b.  
**\<fluffypony>** Should regular hardware development reporting and discussion be part of #monero-dev (biweekly meetings), #monero-community (biweekly meetings), or something else?  
**\<msvb-lab>** There are some good reasons that hardware development progress reports and discussion should be moved from the biweekly #monero-dev schedule (where the accepted forum proposal mandates.)  
**\<msvb-lab>** So unless anyone strongly objects, it's gone from now on and will become part of either (1) #monero-community meetings or (2) #monero-hardware meetings.  
**\<msvb-lab>** Whoever wants to know if it will be (1) or (2) should attend next week's #community meeting which will decide, okay?  
**\<moneromooo>** What's the difference between #monero-aparataro and #monero-hardware btw ?  
**\<moneromooo>** Both seem empty.  
**\<msvb-lab>** I created aparataro but then changed it to hardware.  
**\<moneromooo>** Ah OK.  
**\<msvb-lab>** ...since the IRC channel 'community' is english non esperanto.  
**\<msvb-lab>** So I wanted to be consistent there.  
**\<msvb-lab>** Speaking of esperanto, before the hardware story fades into the sunset, here's a new topic.  
**\<msvb-lab>** We tried and failed to give RFC-HWALLET-1 an esperanto name, so will rename our repository 'Sekura' to rfchwallet, okay?  
**\<msvb-lab>** github.com/monero-project/rfchwallet  
**\<endogenic>** I enjoy naming. I’ll let you know later if i have some suggestions  
**\<msvb-lab>** We need a person to handle surveying a number of related Monero groups in order to get a good name that doesn't conflict in any way.  
**\<msvb-lab>** No person is able to take this role, so if it appears it will be much later after risk of failure drops.  
**\<msvb-lab>** endogenic: Thanks  
**\<msvb-lab>** 73.  
**\<fluffypony>** ok endogenic is in charge of naming  
**\<fluffypony>** Chief Naming Officer  
**\<msvb-lab>** Ha.  
**\<endogenic>** 👷  
**\<hyc>** one of the hardest problems in CS. good man  
**\<msvb-lab>** Report on a privacy conference CCC puts on which I did a workshop at today after the meeting finishes.  
**\<msvb-lab>** There was Monero activity and considerable interest...  
**\<endogenic>** Now we just need to let them in on kovri and...  
**\<hyc>** next?  
**\<endogenic>** I think monero-hardware would be a better venue  
**\<endogenic>** For hardware specific mtgs  
**\<endogenic>** Status updates propagate anyway  
**\<msvb-lab>** endogenic: I'll let the #community folks know that's your opinion. They won't agree.  
**\<endogenic>** And maybe i can figure out a way to give michael op :p  
**\<endogenic>** Oh ok  
**\<msvb-lab>** op? An operation?  
**\<endogenic>** I guess all ffs mtgs now go in community lolol  
**\<endogenic>** Op -> operator status  
**\<msvb-lab>** Nice.  
**\<msvb-lab>** Even better, I want business cards like fluffypony.  
**\<fluffypony>** lol  
**\<fluffypony>** ok  
**\<fluffypony>** let's move on to 4. Any additional meeting items  
**\<fluffypony>** anything up for discussion?  
**\<moneromooo>** When are you releasing 0.11.0.1 ? Before tomorrowish ?  
**\<rehrar>** luigi is site repo maintainer now right?  
**\<fluffypony>** moneromooo: it'll be tomorrow - but I'll do the merges now and start building  
**\<fluffypony>** rehrar: yes  
**\<moneromooo>** OK, thanks.  
**\<redfish>** regarding https://github.com/monero-project/monero/issues/2545#issuecomment-337374284  
**\<redfish>** just wanted to put in a vote for db-safe to be the default during sync as well  
**\<fluffypony>** hyc: thoughts? ^^  
**\<redfish>** (i ended up running a node for months with a corrupt blockchain DB)  
**\<rbrunner>** Is the speed difference known on a typical PC?  
**\<hyc>** it'll beat most drives to shit. and be slow.  
**\<redfish>** we can add to the readme in the "Running monerod" section, that "you have an option to speed up, if you can be confident that the node will not fail while synching"  
**\<hyc>** I mean, most consumer storage devices will probably see premature death.  
**\<rbrunner>** Death by Monero :)  
**\<redfish>** hyc: why? it won't matter after sync, and sync is temporary  
**\<hyc>** ?  
**\<redfish>** didn't you say daemon is in db-safe mode after sync completes, already.  
**\<hyc>** yes  
**\<redfish>** so, why would increasing the load on the disk during the hours/few days of syncing make that big of a difference on the disk lifetime?  
**\<hyc>** during normal operation whenyou're already sync'd, you're getting 1 new data item per 2 minutes.  
**\<redfish>** (btw, sidenote: with slow disks, despite there being so little new data, it spends 90% of those 2 minutes reading)  
**\<gingeropolous>** hrm... perhaps we should make kovri the default network interface when it is ready. The only nodes that really could be affected by delays are pools. We should be private by default. If a pool wants to get gains by running over clearnet, they can run a flag. A regular user isn't affected if they are 2-4 minutes behind the current state.  
**\<redfish>** my disks right now are so slow, that the node actually can't keep up. (Disk usage is continuous, monerod in D state continously)  
**\<redfish>** but this is sidetracking. I'm still not clear on hyc's point about db-safe during sync being a disk killer.  
**\<hyc>** if you had more RAM it woukd have more cached, and less read load  
**\<redfish>** yeah, there's only 2GB, of which only ~1GB is free for the caching...  
**\<hyc>** but large number of IOs spread over 2 minutes is gentler than spit out as fast as possible  
**\<hyc>** SSDs need time for background wear-leveling to do its thing  
**\<fluffypony>** let's wind it down and continue this discussion after the meeting  
**\<redfish>** are you referring to operation after sync or during sync?  
**\<hyc>** ok  
**\<fluffypony>** is everyone happy with Nov 5th as the next meeting date ?  
**\<hyc>** sure  
**\<fluffypony>** ok cool - meeting over  