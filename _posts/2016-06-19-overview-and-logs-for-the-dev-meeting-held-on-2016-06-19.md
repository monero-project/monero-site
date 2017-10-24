---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-06-19
summary: C4, open PRs, and brief update on Ring CT and 0MQ
tags: [dev diaries, core, crypto, 0mq]
author: dEBRUYNE / fluffypony
---

### Overview (by Aerbax)

An overview [can be found on Hello Monero](https://hellomonero.com/article/monero-bi-weekly-dev-meeting-note-highlights-2016-06-19)

### Logs

**\<fluffypony>** ok  
**\<fluffypony>** hello and welcome  
**\<tewinget>** ack  
**\<wallet42>** Sup fluffypony  
**\<fluffypony>** so first things first  
**\<meeting-bot>** [anonimal] EinMByte: ^ Monero meeting now, Kovri in about an hour or so (just FYI)  
**\<fluffypony>** after the last meeting, which was mostly focused on C4, we bounced some of that around  
**\<fluffypony>** I think the spirit of C4 is good, and will help keep Monero inclusionary towards new contributors  
**\<fluffypony>** but moneromooo in particular disagreed with some of the specifics  
**\<fluffypony>** or where C4 is a little vague  
**\<fluffypony>** so what we're going to do is fork C4 from Unprotocols / yrashk into the Monero repo  
**\<meeting-bot>** [psi] c4?  
**\<fluffypony>** and we'll tweak it from there, keeping it in step with changes made upstream in Unprotocols  
**\<fluffypony>** psi: the Collaborative Code Construction Contract, see last meeting's minutes for an intro and discussion  
**\<meeting-bot>** [anonimal] Or Kovri's contributing guide.  
**\<fluffypony>** yup  
**\<fluffypony>** I think everyone is aware that this is security software we're dealing with  
**\<fluffypony>** and we can't be crazy and accept things that may contain backdoors  
**\<fluffypony>** but we also want some structure that makes contributors feel welcome, even if their contributions need some work and aren't up to a standard we'd like  
**\<fluffypony>** somewhere inbetween being completely permissive and miring contributions in PR hell is a nice balance, and we'll figure it out  
**\<ArticMine>** We need to balance security and making contributors welcome  
**\<fluffypony>** yup exactly  
**\<fluffypony>** ok so on to more fiddly code bits, less soft skills  
**\<fluffypony>** I was hoping tewinget could update us on the 0MQ work, which is about to go up on the forum for funding  
**\<tewinget>** ok  
**\<moneromooo>** My point was not security, it was more about the crazy wish to keep obvious crap in.  
**\<tewinget>** https://www.github.com/tewinget/bitmonero/tree/zmq-dev  \<-- there's the branch, gimme one min to take care of something then I can brief  
**\<fluffypony>** ok  
**\* fluffypony** plays hold music  
**\* tewinget** is typing  
**\* DaveyJones** just watches  
**\<tewinget>** ok, so far I've got cryptonote::classes to/from json for a majority of what will need to be serialized for RPC.  I have a couple of RPC calls actually written and working via ZMQ (get_height get_transactions, and key_images_spent)  
**\<tewinget>** that's more or less a summary of progress  
**\<tewinget>** as far as process  
**\<tewinget>** the idea is to try to create RPC as we want it to be, rather than trying to modify the existing structure, and then plug in backwards-compatibility later  
**\<fluffypony>** tewinget: so using the structure that is / was on the Wikia ?  
**\<meeting-bot>** [psi] to rehash, you are redoing monero's wire protocol to use zmq correct?  
**\<fluffypony>** psi: no, not wire protocol, that will use ZMTP (a part of the 0MQ project) and come later  
**\<tewinget>** psi: more or less, but a bit more than just that  
**\<tewinget>** oh  
**\<tewinget>** I mean, kinda wire, but not p2p yet  
**\<tewinget>** rpc  
**\<fluffypony>** this is redoing the communication between the node and "clients" like miners / mining pool software / wallets / etc.  
**\<meeting-bot>** [psi] kk  
**\<meeting-bot>** [psi] zmtp is still being drafted correct?  
**\<fluffypony>** nope all done, afaik: http://zmtp.org  
**\<tewinget>** \<fluffypony> tewinget: so using the structure that is / was on the Wikia ?  <-- well, yes, but also I was hoping to get some input today (not necessarily now) from anyone who would like to comment on the future of RPC  
**\<fluffypony>** it's already on v3  
**\<fluffypony>** ok so maybe one of the things we need to do now is move that design doc from the Wikia to the Github wiki  
**\<fluffypony>** wallet42: are you up to doing that, or busy travelling atm ?  
**\<tewinget>** I can say that the few commands I've done don't necessarily conform to any spec like json-rpc, but that's easy to change -- structure is currently placeholder while functionality is implemented  
**\<tewinget>** oh, one important detail I left out  
**\<tewinget>** I think it's best if the RPC is straight json.  This comes at a very, very minor cost in speed, but means that implementation in other languages will be far less intimidating for new contributors  
**\<tewinget>** and I know I don't personally plan to write libMonero for every language out there...  
**\<fluffypony>** oh I agree - the idea behind 0MQ is for a language to use 0MQ bindings and just be able to talk straight to the daemon  
**\<tewinget>** yup, and this way for any language that has json and zmq bindings, all one needs to do is give the language a cursory understanding of cryptonote structs  
**\<fluffypony>** if JSON is the way we want to do that that's fine, we can always modify it later to support Google's protobufs or something later on  
**\<tewinget>** https://paste.fedoraproject.org/379294/14659488/  <-- there's an example of get_transactions  
**\<tewinget>** it's also very nice to do ad-hoc testing via python :)  
**\<fluffypony>** cool  
**\<tewinget>** any thoughts, anyone?  
**\<wallet42>** fluffypony: In about 3 weeks im back in Berlin, right now i only have like 1 day a week. But yes the wiki will get more data as I am moving myself trough the code  
**\<wallet42>** Especially better wiki documentation of the datatypes/protocol  
**\<wallet42>** wiki.bitcoin.it/wiki/Protocol basically  
**\<fluffypony>** tewinget: how hard would it be to implement different schemes in future, like JSON / protobufs / ASN.1 BER ?  
**\<fluffypony>** wallet42: ok cool, thank you  
**\<tewinget>** fluffypony: wouldn't be too bad, I'm trying to make things pretty modular.  It wouldn't be too bad to make it a bit more generic than json  
**\<tewinget>** it's already 90% ready for that as-is  
**\<fluffypony>** kk  
**\<fluffypony>** alright, tewinget anything else or can we move on to the next thing ?  
**\<tewinget>** the ZMQ-side of things was pretty trivial tbh  
**\<tewinget>** oh, anyone averse to having a separate listening port for publish/subscribe such as "new_block_notify" etc?  
**\<fluffypony>** you mean a separate port for pub-sub than the IPC port ?  
**\<tewinget>** well, there will be a port for "request thing from daemon"  
**\<tewinget>** can't use the same port for publish/subscribe, I'm pretty sure  
**\<fluffypony>** I don't see a problem with that  
**\<tewinget>** without an unholy amount of added complexity that isn't worth at all  
**\<fluffypony>** one thing you may want to do is also look at Bitcoin's 0MQ effort  
**\<fluffypony>** I don't think wumpus is around at the moment  
**\<fluffypony>** but they've been pecking away at 0MQ for some time  
**\<moneromooo>** Isn't the point of 0MQ to abstract comms to allow things like that ?  
**\<fluffypony>** moneromooo: pub-sub is a different beast to control / request  
**\<tewinget>** 0MQ uses different socket types like Request-Reply, or Pub/Sub  
**\<fluffypony>** normally for pub-sub you're sending a request once and then receiving "push" notifications forever  
**\<tewinget>** and one socket can only be one type, and I don't think you can bind two sockets to the same port, as how would it route that?  
**\<fluffypony>** Bitcoin has walletnotify and blocknotify that work in that way  
**\<tewinget>** so using the same port for req-rep and pub-sub would require...well, no, just no  
**\<fluffypony>** it would end up looking gross like the RPC stuff at the moment  
**\<tewinget>** moreso, in fact  
**\<fluffypony>** different HTTP paths for the JSON and HTTP RPCs  
**\<tewinget>** \<fluffypony> alright, tewinget anything else or can we move on to the next thing ? <-- happy to give a few minutes for any comments from anyone, but other than that I think that's about it  
**\<fluffypony>** cool if anything pops up over the rest of the meeting then we can see  
**\<tewinget>** oh, and feel free to give feedback on the branch, I'll repaste the link in a sec.  Feedback here or via github is fine  
**\<tewinget>** https://www.github.com/tewinget/bitmonero/tree/zmq-dev  
**\<fluffypony>** ok next, moneromooo do you feel like giving an update on RingCT? looks like it's making nice headway :)  
**\<moneromooo>** It kinda works. I'm fixing bugs now.  
**\<fluffypony>** moneromooo: is it going to be a hard fork where all new transactions are v3 / ringCT, but they can spend pre-ringCT outs?  
**\<moneromooo>** They  
**\<fluffypony>** they = transactions  
**\<othe>** coinbase will use non-ringct tho?  
**\<fluffypony>** othe: yes afaik  
**\<moneromooo>** They'll be v2 and can spend either pre rct outputs or rct ones.  
**\<fluffypony>** moneromooo: ooooh, so a soft fork? :-P  
**\<moneromooo>** Hmm. I haven't thought about the distinction tbh.  
**\<moneromooo>** Theoretically, coinbase might not even need to be in the clear I think. Though it'd require some shen magic.  
**\<fluffypony>** I think it'd be a hard fork, because old nodes won't understand rct outs  
**\<fluffypony>** so we'd have to bump the block version anyway  
**\<ArticMine>** But will non RingCT other than coninbase transactions be valid?  
**\<moneromooo>** Oh they'd reject new txes, yes.  
**\<yrashk>** fluffypony: I'm thinking of an unprotocol for describing diverged unprotocols  
**\<yrashk>** So meta  
**\<fluffypony>** moneromooo: ok then that's hard fork  
**\<fluffypony>** lol yrashk  
**\<yrashk>** But I'm actually serious  
**\<yrashk>** :)  
**\<fluffypony>** yrashk: what's that Unprotocol for creating protocols with consensus?  
**\<tewinget>** ArticMine: I think post-fork that all non-coinbase tx will be ringCT, but I'm not sure.  
**\<moneromooo>** ArticMine: if you mean "will non RingCT outputs other than coninbase transactions be valid?", then I'd choose no, but it could be made either way.  
**\<yrashk>** fluffypony: COSS? There's nothing about consensus there  
**\<fluffypony>** yrashk: yes that - but it's about creating new protocols as a group, right ?  
**\<yrashk>** Kind of but very very lightweight  
**\<fluffypony>** kk  
**\<yrashk>** Which is a good thing generally  
**\<CFP>** Greetings fellas  
**\<fluffypony>** moneromooo: I tend to agree with you - coinbase txs is fine, but after that it should be rct only  
**\<CFP>** Crazyflashpie stoping by to say hello  
**\<yrashk>** fluffypony: are you interested to collaborate on the protocol divergence protocol? (PDP)  
**\<fluffypony>** hi CFP  
**\<CFP>** Looks like the # of nodes in China is climbing?  
**\<fluffypony>** yrashk: let's chat after the meeting, definitely interested in discussing it, as it's relevant to us  
**\<yrashk>** I can explain my motivations behind it  
**\<yrashk>** Today?  
**\<yrashk>** Ping me on telegram or here when ready  
**\<fluffypony>** kk  
**\<fluffypony>** ok next I just wanted to bounce through some open PRs  
**\<fluffypony>** #818 is still open pending luigi1111w / luigi1112 coming up with those spec changes, no rush there  
**\<ArticMine>** moneromooo I would expect non RingCT outputs other than coinbase to be invalid after a given block  
**\<fluffypony>** #775 is ready to be merged - moneromooo, just to double check, you're fine with that, right ?  
**\<ArticMine>** With the 6 month upgrade cycle built in  
**\<fluffypony>** ArticMine: agreed  
**\<luigi1112>** Yes I'll try to do that this week  
**\<moneromooo>** Yes. It's a wee bit spammier now in the logs, but other than that it's good to go.  
**\<fluffypony>** ok then #810, the caching thing, I'm still confused as to whether we must merge or not  
**\<moneromooo>** Not sure. I think enough said no.  
**\<fluffypony>** ok I'll close it, we can reopen later  
**\<moneromooo>** But then nobody patched the pool code :)  
**\<fluffypony>** and pools can manually pull that in if they need  
**\<fluffypony>** then the gcc 6.1 stuff - as I understand it there are more changes than what is covered in those two PRs  
**\<fluffypony>** so do we close the PRs and just note that "gcc 6.1 not supported yet"  
**\<meeting-bot> [anonimal]** Noooooooo.........  
**\<fluffypony>** or do we merge them in preparation for supporting 6.1 ?  
**\<meeting-bot> [anonimal]** Please nooooooo....  
**\<fluffypony>** lol anonimal  
**\<moneromooo>** If they'll be needed anyway...  
**\<meeting-bot> [anonimal]** This also re: #846?  
**\<moneromooo>** One of them is a superset of the other IIRC.  
**\<fluffypony>** anonimal: yeah, 846 and 845  
**\<meeting-bot> [anonimal]** radfish's work builds, so is the problem more eyes/more time to review?  
**\<fluffypony>** anonimal: it was more that I was travelling, so I don't really know which is the superset of which, and which to close / merge / bail out of entirely :-P  
**\<meeting-bot> [anonimal]** Oh, well I can spend some time this week giving input if that helps.  
**\<moneromooo>** 846 seems to be the superset.  
**\<tewinget>** PR X is a superset of PR Y seems like an odd situation to be in...  
**\<tewinget>** especially if both are open  
**\<fluffypony>** tewinget: quite  
**\<neosilky_>** I had to merge them to get the repo to compile as GCC 6.1 is default for Arch  
**\<fluffypony>** kk  
**\<meeting-bot> [anonimal]** re: that ^, I only merged #846 and builds fine.  
**\<meeting-bot> [anonimal]** I see the issue of both PR's being open, I can comment further this week after looking at them if they are still open by then.  
**\<neosilky_>** Yep, only needed #846. @tewinget should enable testing repo too :)  
**\<fluffypony>** ok then I'll close 845 and merge 846  
**\<meeting-bot> [anonimal]** Ok.  
**\<fluffypony>** then #856 I've reviewed and will merge  
**\<fluffypony>** #855 seems fine to me, I defer to hyc's knowledge of his own product ;)  
**\<fluffypony>** #863 seems fine too  
**\<fluffypony>** #862 - luigi1112 can I take your comment as a review?  
**\<moneromooo>** Oh. Let me change it now...  
**\<gingeropolous>** tewinget, i may try and put this in a comment on the https://www.github.com/tewinget/bitmonero/tree/zmq-dev , but is this the space wherein the daemon could have multiple rpc ports with different characteristics?  
**\<luigi1112>** I think it's fine yeah  
**\<moneromooo>** pushed  
**\<fluffypony>** k  
**\<meeting-bot> [anonimal]** Has there been any definitive decisions re: C4 since previous meeting? I know there are differing arguments.  
**\<fluffypony>** anonimal - yes, my comments at the beginning of the meeting, will let you know when the log is up if you missed them  
**\<tewinget>** gingeropolous: not entirely sure what you mean to ask there  
**\<meeting-bot> [anonimal]** "we'll figure it out" <-- was that it?  
**\<gingeropolous>** i.e., port 18081 would be full access, and 18082 could be less access.  
**\<fluffypony>** anonimal: yes basically the next step is fork ->** adjust accordingly ->** decide to abandon or adopt the iteration  
**\<gingeropolous>** right now if you want different permissions for remote access to the daemon, you need multiple daemons and multiple databases  
**\<othe>** isnt an auth system with permissons better for this  
**\<fluffypony>** gingeropolous: I'm of a mind that we need a finer distinction than "trusted daemon" and "not trusted"  
**\<fluffypony>** we need a proper ACL  
**\<fluffypony>** what othe said  
**\<fluffypony>** so shelve it as a thing to do later on  
**\<gingeropolous>** word  
**\<fluffypony>** ok I think that's it from my side - anything else before we move to the Kovri meeting?  
**\<tewinget>** glad someone else could answer that while I was rebooting.  Stupid computer crashes frequently, pretty sure it's hardware.  
**\<fluffypony>** tewinget: you should buy a Mac :-P  
**\<ArticMine>** No  
**\<tewinget>** fluffypony: I thought we were friends...  
**\<tewinget>** tbh if a newer Mac (not new, with that single port, but new-ish) landed on my lap I'd throw Linux on it and use it  
**\<tewinget>** but I'd never buy one, they're way too expensive for what they are.  
**\<othe>** actually the macbook pro are good value for money compared to other ultrabooks; anyway kovir next :p  
**\<fluffypony>** Pro Retina is great, although I've switched my Purism Librem 13 + Qubes for anything remotely sensitive  
**\<antanst1>** Hackintosh user here :-) It's pretty easy to install OSX if you choose hardware carefully.  
**\<antanst1>** works pretty much perfectly.  
**\<othe>** correct, also run a hackintosh desktop  
**\<ArticMine>** I see the software not the hardware as the issue with Mac  
**\<meeting-bot> * anonimal** has 8 year old hackbook pro running Arch :/  
**\<meeting-bot> [anonimal]** Still alive, surprisingly.  
**\<fluffypony>** nice