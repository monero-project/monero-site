---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-09-11
summary: brief update on 0MQ, RingCT, the hardfork schedule, and a new contributor, pigeons (sysops/devops)
tags: [dev diaries, core, crypto, 0mq]
author: dEBRUYNE / fluffypony
---

### Logs

**\<fluffypony>** Hi all  
**\<fluffypony>** I'm on my phone  
**\<ArticMine>** Hi all  
**\<tooquick_4u>** hello  
**\<DaveyJones>** NoodleDoodle, TheKoziTwo,  
**\<DaveyJones>** anyone else?  
**\<pigeons>** hola  
**\<DaveyJones>** luigi1112, listening or cruising ;)  
**\<DaveyJones>** jwinterm  
**\<fluffypony>** lol  
**\<fluffypony>** hyc and moneromooo are around afaik  
**\<tewinget>** fluffypony: if you wanna just give a list of things to cover, one of us can conduct the meeting.  (assuming you don't wanna have to type a shitload on your phone)  
**\<fluffypony>** Well I think let's start with 0MQ, tewinget  
**\<fluffypony>** Then you can talk and I don't have to  
**\<fluffypony>** :-P  
**\<tewinget>** well, I wanted to have more news, but I'm having to do a full distro upgrade to get a newer boost on this craptop, and the internet is slow as balls...so I don't really have much in the way of updates.  Soon™.  Need to merge RingCT stuff into my zmq branch, then make the new RingCT-related RPC calls (as well as updating any others as needed), then should be golden for basic implementation.  
**\<tewinget>** will try to get most of that done today or tomorrow.  
**\<fluffypony>** This is daemon only right now right?  
**\<tewinget>** daemon RPC, and a lib to use it that libwallet will call into.  
**\<fluffypony>** ok - and then next thing after daemon is buttoned up is a wallet 0MQ endpoint right?  
**\<tewinget>** but yes, for right now I'm working on the daemon's RPC.  Once that's in a good spot I can move onto wallet RPC.  Oh, and I think since the last dev meeting I redid the formatting of the RPC commands to get JSON-RPC 2.0 compliant.  
**\<fluffypony>** Ok so tewinget let me ask about the backwards-compatible stub  
**\<fluffypony>** Coz obviously we still need a stub for those that insist on touching the daemon using old RPC  
**\<fluffypony>** Is that just a matter of refactoring it out of the daemon?  
**\<tewinget>** well...so \*my* plan was to leave the old RPC in place until we decide "yea, that's for sure deprecated and gonna be removed now"  
**\<fluffypony>** That's fine - I meant as a later exercise  
**\<fluffypony>** Just trying to gauge the amount of effort it's going to take  
**\<tewinget>** hmm, well, a wrapper around the old RPC to hook into the new wouldn't be *too* hard...  
**\<tewinget>** just tedious  
**\<fluffypony>** I know it's tedious  
**\<fluffypony>** What if we made it generic  
**\<fluffypony>** Like it translated the RPC call directly  
**\<fluffypony>** If it fails pass the error back  
**\<fluffypony>** Oh wait that won't work  
**\<fluffypony>** The 0MQ calls are different  
**\<tewinget>** not hugely different, but different in some cases, yes.  with good reason...  
**\<fluffypony>** Ok so tedious because it requires everything implemented as a 0MQ client, got it  
**\<fluffypony>** As a practical matter  
**\<fluffypony>** We need to consider something like cppnetlib for TLS and auth  
**\<tewinget>** I'm trying to make switching costs as low as possible, but I can't make it nonzero.  
**\<fluffypony>** And implement that as a matter of some urgency, since the entire net_skeleton thing was a colossal waste of time  
**\<fluffypony>** Ok tks tewinget - anything else from your side?  
**\<tewinget>** yea, I might make TLS and auth a priority ahead of wallet RPC (since it will need auth anyway)  
**\<tewinget>** other than that, not really.  
**\<tewinget>** carry on.  
**\<moneromooo>** "I can't make it nonzero" <-- excellent!  
**\<fluffypony>** Hokay  
**\<fluffypony>** LOL  
**\<fluffypony>** Nice catch  
**\<hyc>** lol  
**\<fluffypony>** breaking: Monero contributor works for free!  
**\<hyc>** just tuning in, was teaking my ARM code  
**\<tewinget>** god dammit.  
**\<fluffypony>** Instant delivery!  
**\<tewinget>** well, moneromooo, I can't  
**\<tewinget>** because it has to use ZERO MQ  
**\<fluffypony>** Hah hah  
**\<tewinget>** #SavedIt  
**\<hyc>** :P  
**\<fluffypony>** #dadjokes  
**\<fluffypony>** At any rate  
**\<fluffypony>** I'd like to introduce pigeons  
**\<fluffypony>** He's recently started doing some stuff with me  
**\<fluffypony>** and he's kindly going to help us redo our sysops / devops  
**\<fluffypony>** For all projects, including Kovri  
**\<hyc>** nice  
**\<pigeons>** Hi guys. :)  
**\<moneromooo>** Hi  
**\<hyc>** hey there  
**\<fluffypony>** pigeons: tell us a bit about yourself or whatever  
**\<fluffypony>** "Long walks on the beach" and all that  
**\<hyc>** I guess the population explosion kinda demanded more ops  
**\<moneromooo>** I see what a sysop is, but not a devop.  
**\<pigeons>** I like pina coladas and getting lost in te rain. Ive been syadmin type stuff forever.  
**\<ArticMine>** Hi pigeons  
**\<fluffypony>** moneromooo: devops is like CI and build boxes and that  
**\<pigeons>** devops is the new term for brogrammers who use docker and jenkins CI etc  
**\<moneromooo>** Oh nice :)  
**\<fluffypony>** Hah hah  
**\<hyc>** I think a devop is a developer with rootpw on all production machines. sysaop's worst nightmare :P  
**\<fluffypony>** Devops-as-a-Service  
**\<fluffypony>** lol  
**\<pigeons>** but yeah im gonna try and get buildbot ci going the system chromium and some others use  
**\<pigeons>** get builds and tests for arm, windows, mac, freebsd, linux 32 64  
**\<fluffypony>** Also the immediate aim is to be able to push nightlies to the site  
**\<hyc>** nice  
**\<iDunk>** #1047 did this  
**\<iDunk>** oops  
**\<i2p-relay> {-guzzi}** hi pigeons  
**\<fluffypony>** So the broader community can test without waiting for fluffypony to build  
**\<pigeons>** eventually look at gitian style reproducible builds  
**\<hyc>** ARM is gonna be 3 distinct builds, ARMv6, ARMv7, ARMv8  
**\<hyc>** rapidly proliferating...  
**\<pigeons>** ok cool  
**\<fluffypony>** hyc: I think we'll have to drop ARMv6 for performance concerns  
**\<fluffypony>** If not now then soon  
**\<hyc>** ok, fair enough  
**\<fluffypony>** Also on that note  
**\<hyc>** yeah, the perf/watt just isn't there on ARMv6  
**\<fluffypony>** Am I correct in saying that QEMU is about the only way we're going to get arm7/8 build boxes?  
**\<fluffypony>** Or does anyone know of hosted native arm boxes?  
**\<hyc>** there's an ARM VPS provider out there  
**\<pigeons>** yeah what are they called again, there is one  
**\<tewinget>** someone recommended one to me just the other day, oddly enough...can't remember the name.  
**\<fluffypony>** lol  
**\<bitjedi>** awww. i still use my pi zero nodes  
**\<bitjedi>** which are arm v6  
**\<fluffypony>** bitjedi: they'll choke on RingCT  
**\<iDunk>** scaleway.com ?  
**\<hyc>** scaleways?  
**\<hyc>** yeah  
**\<bitjedi>** are u sure it's cpu and not io?  
**\<fluffypony>** Awesome  
**\<fluffypony>** Isn't scaleways native and not virtualised?  
**\<fluffypony>** I seem to vaguely recall  
**\<tewinget>** I think it was Scaleway  
**\<hyc>** hm, they claim bare metal, yeah  
**\<pigeons>** theres one ovhi or somone in scandanavia  
**\<fluffypony>** Ok  
**\<fluffypony>** Also the implication is that anyone relying on the Mac / 32-bit test boxes should expect an impending change  
**\<fluffypony>** I think anonimal primarily uses them  
**\<fluffypony>** Also we'll hopefully be able to provide broader access to test hardware in future  
**\<i2p-relay> {-anonimal}** * has yet to use 32-bit boxes  
**\<fluffypony>** Ok then FreeBSD  
**\<fluffypony>** Has anyone tried the WIP boost 1.60 port on BSD?  
**\<hyc>** haven't touched BSD in years  
**\<i2p-relay> {-anonimal}** Last I checked, build failed hard on freebsd for monero.  
**\<i2p-relay> {-anonimal}** Works with kovri.  
**\<fluffypony>** xmj is our resident BSD expert and even he hasn't touched boost 1.60  
**\<fluffypony>** If anyone wants to volunteer to play with that great  
**\<fluffypony>** We also need to start thinking about packaging  
**\<fluffypony>** lol relevant PR is relevant  
**\<fluffypony>** hyc how do you guys handle packaging for like Debian / Ubuntu?  
**\<hyc>** eh, OpenLDAP Project is source-code only, distros do their own packaging  
**\<fluffypony>** Coz my concern with farming it out is that we end up with old versions on old distros  
**\<i2p-relay> {-anonimal}** fluffypony: I was planning to work with the monero bsd build (only freebsd though) once we get kovri releases going  
**\<hyc>** yes, that's a pervasive problem with distros  
**\<fluffypony>** Tks anonimal - I'll also fiddle  
**\<fluffypony>** When I have time, so never :-P  
**\<fluffypony>** Ok next thing  
**\<fluffypony>** moneromooo: want to talk about the rct serialisation changes?  
**\<fluffypony>** And the impact on testnet  
**\<moneromooo>** It's finished. It's on github ready to merge. And it will need reorganizing on testnet, yes.  
**\<moneromooo>** So, I guess someone with hash power will have to pop N blocks till before v4, and mine.  
**\<moneromooo>** After a few daysm it'll reorg for everyone :)  
**\<moneromooo>** And we'll get to test deep reogs.  
**\<hyc>** so anyone mining testnet right now should stop  
**\<moneromooo>** Unless you want to test stuff.  
**\<iDunk>** i exported the raw blockchain up to 800499. that's before v3, right?  
**\<tewinget>** well that's not entirely necessary >\*\*\_>\*\*  
**\<moneromooo>** Yes.  
**\<iDunk>** and v4 is... ?  
**\<iDunk>** 802000 or so iirc ?  
**\<moneromooo>** 801220  
**\<jjiia>** XMR up or down  
**\<iDunk>** ah, k  
**\<fluffypony>** I think my miner is off atm  
**\<fluffypony>** it had that hiccup and I never fixed it coz stuff  
**\<moneromooo>** rct soon!  
**\<fluffypony>** ok so moneromooo  
**\<ArticMine>** It had to be done  
**\<MalMen>** are you guys forking the testnet ?  
**\<fluffypony>** when it loads the blockchain on the new code  
**\<MalMen>** im gonnad do a testnet classic  
**\<fluffypony>** it *should* freak out  
**\<i2p-relay> {-anonimal}** Is this the meeting where we can discusses CI for CD?  
**\<fluffypony>** and rollback?  
**\<fluffypony>** anonimal: CD? like compact discs?  
**\<i2p-relay> {-anonimal}** Laser-only releases  
**\<moneromooo>** It'll probably moan a bit, but not overly.  
**\<fluffypony>** :-P  
**\<fluffypony>** ok but what I mean is  
**\<fluffypony>** when we load a blockchain off disk we don't re-verify  
**\<MalMen>** the dev meeting is still going on or to late ?  
**\<fluffypony>** so will we have to manually pop blocks?  
**\<dEBRUYNE>** still going on MalMen   
**\<moneromooo>** Yes.  
**\<fluffypony>** ok so I'll merge tomorrow afternoon, gives us a day for review  
**\<moneromooo>** Just the miner. Others will just reorg when the miner passes the old chain's diff.  
**\<moneromooo>** (hopefully)  
**\<fluffypony>** and then I'll do some block-popping tomorrow night  
**\<fluffypony>** and hopefully deep reorgs  
**\<moneromooo>** luigi1112: btw, you'll want to read the latest get_transaction_hash and comment. It's still 3 parts.  
**\<fluffypony>** ok  
**\<fluffypony>** then the next thing is our hard fork date and the next release  
**\<fluffypony>** we're planning on finalising final bits and releasing 0.10 shortly  
**\<fluffypony>** but obviously RingCT (ie. v4 blocks) is not ready for even a final inclusion in this code freeze  
**\<fluffypony>** given that we're still making changes  
**\<fluffypony>** so I'd like some input from contributors and those present as to how to handle the v4 fork, since we have a couple of options  
**\<fluffypony>** either:  
**\<fluffypony>** 1. we leave v4 till March 2016  
**\<iDunk>** 2017  
**\<fluffypony>** tks 2017  
**\<fluffypony>** 2. we change the "complain about a fork" date to like end-of-November, with an aim to forking to v4 end of December  
**\<fluffypony>** so coded freeze beginning of December  
**\<fluffypony>** (this would make RCT transactions potentially available on mainnet from Jan 1)  
**\<fluffypony>** but obviously there's the risk of breakage  
**\<hyc>** maybe December is too soon, how about January?  
**\<fluffypony>** so if we had to do Jan, then when do we do v5?  
**\<fluffypony>** March is too close to Jan for v5, imho  
**\<ArticMine>** fluffypony My preference is 2, but my biggest concern is the amount of time left for finalization of development and testing  
**\<dEBRUYNE>** We don't necessarily have to decide the exact dates now, but I think option 2 would be best  
**\<fluffypony>** ok so what if we did 2, but then pushed the v5 fork to September next year  
**\<hyc>** if we have v4 in January then June/July would be OK  
**\<fluffypony>** that way RCT is available on mainnet early on, but if anything breaks we have 9 months to fix it  
**\<fluffypony>** hyc: I don't want to go too far away from our schedule  
**\<hyc>** ok  
**\<dEBRUYNE>** \<hyc> if we have v4 in January then June/July would be OK <= Fine with that too  
**\<DaveyJones>** sounds reasonable to me  
**\<dEBRUYNE>** Like I said, we can always decide on the exact dates later  
**\<fluffypony>** like this is major enough to warrant a change, but we should aim for a singular change  
**\<hyc>** so march/september is the cadence we're aiming for?  
**\<ArticMine>** Yes I like the idea of advancing V4 fork but keeping the v5 fork on schedule  
**\<tewinget>** I agree, singular deviation from the schedule is preferable.  
**\<hyc>** ok  
**\<fluffypony>** hyc: yep  
**\<dEBRUYNE>** fluffypony: most people will use Ring CT transactions anyway  
**\<fluffypony>** so we bring v4 a bit forward, and leave v5 as scheduled  
**\<lurker>** yes  
**\<fluffypony>** dEBRUYNE: we can always make it the non-default, like we did with transfer_new  
**\<hyc>** sounds good  
**\<dEBRUYNE>** yeah agree  
**\<ArticMine>** agree  
**\<fluffypony>** ok so we'll move the freak-out to early December, and actual fork block height will be decided at that code freeze  
**\<fluffypony>** but likely late Dec / early Jan or so  
**\<fluffypony>** and v5 stays for September 2017  
**\<fluffypony>** consensus: reached!  
**\<DaveyJones>** \o/  
**\<fluffypony>** (it's so easy when you're tiny and only like 5 people have to agree, lol)  
**\<fluffypony>** I think that's about it from my side, there's something else but I completely can't remember  
**\<fluffypony>** is there anything else that anyone wants to bring up?  
**\<ferretinjapan>** I dunno multisig for bitcoin was a bitch...  
**\<hyc>** current freeze, release date?  
**\<tewinget>** since Ilya's not here...  
**\<i2p-relay> {-anonimal}** I moved kovri logo decision agenda to the beginning of kovri meeting in 10'ish minutes so we can catch everyone before they leave  
**\<ferretinjapan>** that only had 8 guys  
**\<fluffypony>** ferretinjapan: lol  
**\<lurker>** a quick update on multisig preferably  
**\<moneromooo>** Do you want to wait for the fee change before binaries ?  
**\<fluffypony>** lurker: https://shnoe.wordpress.com/2016/03/22/ring-multisignature/  
**\<fluffypony>** it's whitepaper-only right now  
**\<kintaji>** fluffpony - the GUI wallet. Languages and regional variations.  
**\<fluffypony>** oh  
**\<Kermit_>** Hi guys can I ask about public wallet build release dates  
**\<fluffypony>** yes moneromooo thanks for reminding me  
**\<fluffypony>** tag->release->binaries will be in the coming week, hopefully  
**\<fluffypony>** there are two things still remaining  
**\<fluffypony>** 1. fee changes (lower min-fee, bind it to the inverse of the block median as suggested by ArticMine)  
**\<fluffypony>** 2. ideally, if anyone is up for it, we seriously need our DNSSEC check expanded to *actually* check from the root cert down, at the moment it's relying on the DNS server to send back a "secure" flag, which is breaking it on lots of routers  
**\<MalMen>** tewinget can you point me to the list of 0qm commands that you have already?  
**\<fluffypony>** and we rely on DNSSEC for MoneroSeeds and MoneroPulse  
**\<MalMen>** I have some sugestion  
**\<ArticMine>** moneromooo is coding the fee changes  
**\<fluffypony>** there's some time pressure on that, but it's not a huge piece of work, so if anyone is up for it then that would be appreciated  
**\<fluffypony>** if not it'll have to hold off till the next release  
**\<moneromooo>** Yes, I started looking at it this afternoon. Not a simple change, since it'll require a new RPC, and access to median block size calc in misc places.  
**\<fluffypony>** ok  
**\<dEBRUYNE>** fluffypony: would it be feasible to provide trezor binaries?   
**\<fluffypony>** dEBRUYNE: I haven't actually looked at it properly, and NoodleDoodle isn't around to give his opinion  
**\<dEBRUYNE>** I see, he's still working on the Ring CT bit, so probably better to wait until that is finished to provide them  
**\<fluffypony>** kintaji: re: languages / variants, I think we'll hold off on that a bit as there are large parts of the GUI that are non-functional right now  
**\<fluffypony>** Kermit_: do you mean the GUI wallet, or the next tagged release?  
**\<Kermit_>** Yes gui  
**\<kintaji>** fluffypony - Okay. Just to say there are some oddities with the current flag page. Can expand at a later time.  
**\<fluffypony>** Kermit_: not certain yet - I'll look at building beta binaries in the next week or so  
**\<Kermit_>** Thanks  
**\<fluffypony>** kintaji: yeah maybe best thing to do is drop it out the wizard initially  
**\<fluffypony>** and add it back in later on  
**\<tewinget>** MalMen: have a look at https://www.github.com/tewinget/bitmonero/tree/zmq-dev, file src/rpc/daemon_messages.h.  I need to do a bit of write-up, but that's a good place to start.  
**\<kintaji>** fluffypony - yep. sounds like a good idea.  
**\<fluffypony>** ok anything else or can we start the Kovri meeting?  
**\<hyc>** any other volunteers to test ARMv8 builds?  
**\<fluffypony>** oooh I will hyc  
**\<pero>** yea i can  
**\<hyc>** cool, I'll have atarball ready later tonight  
**\<MalMen>** tewinget you are writing your rcp calls with up letters right ?  
**\<pero>** fluffy i have centos 64bit on my rpi3 fyi  
**\<fluffypony>** hyc: is an R8 ARM processor an armv8?  
**\<fluffypony>** coz if so then I have a bunch of C.H.I.Ps lying around that I can test on  
**\<hyc>** I don't know what R8 is. what box is that?  
**\<tewinget>** MalMen: the class names are CamelCase, but the methods (currently) are "word_word_word".  No reason that can't change, of course.  
**\<MalMen>** ahhhh, nice  
**\<fluffypony>** AllWinner R8  
**\<MalMen>** I was in mind that you where using WordWordWord  
**\<hyc>** ok I see it  
**\<MalMen>** would sugest wordWordWord  
**\<fluffypony>** "Allwinner R8 is SoC designed based on A13 featuring one core Cortex-A8 ARM CPU with Cedar Engine VPU and Mali 400 GPU"  
**\<hyc>** nope . Cortex-A8 is ARMv7  
**\<fluffypony>** ah ok  
**\<fluffypony>** well that sucks  
**\<fluffypony>** hi meeting-bot!  
**\<tewinget>** MalMen: the method names (as in, the method field in the RPC call on the wire) are "word_word_word" to conform with the previous RPC, but I have no particular attachment to that format.  
**\<MalMen>** well, I am checking the bitcoin rcp and they use wordwordword, I think i like word_word_word better