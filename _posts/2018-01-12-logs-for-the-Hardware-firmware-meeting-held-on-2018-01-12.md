---
layout: post
title: Logs for the Hardware Firmware Meeting Held on 2018-01-12
summary: Discussion of the firmware for the dedicated hardware wallet and a discussion of Ledger's approach
tags: [dev diaries, crypto]
author: dEBRUYNE / fluffypony
---

# Logs  

**\<i-a>** Hello all, it is time for our firmware meeting to start. I am not sure if it is not too early to have a meeting like this, but let's see.  
**\<i-a>** Strange, there were so many people saying they have questions about code and now nobody is here:) So I will give a quick update on our project:  
**\<i-a>** Ok here is the quick update: USB communications is working, alse we can generate wallet by using internal random number generator (thanks god for m2049r, nice job)  
**\<i-a>** Maybe you have some recommendation how to move from here? My questions could look silly, but thats because I am personally just learning monero.  
**\<m2049r[m]>** :)  
**\<i-a>** On the other hand, there are other people working and maybe my questions could help also to them.  
**\<m2049r[m]>** is there anyone here who is actually taking part in this meeting besides us two?  
**\<hotoatmeal>** is the plan to use the same strategy that the ledger guy came up with, where private keys are sent (encrypted) from the device to the wallet?  
**\<qqitty>** CS noob looking to study xmr code this weekend. any design books/web guides to read like Huang's dissecting BTC?  
**\<hotoatmeal>** m2049r[m]: I'm mostly passively participating, until that question  
**\<dEBRUYNE>** m2049r[m]: Most people will probably just read until they want to say something :p  
**\<i-a>** hotoatmeal: We are here to speak about the plan.. I think if we want to do all the signing stuff in the device, we would need more memory.In case we need more memory, we will just setup a new device with bigger mcu.  
**\<m2049r[m]>** i would like an implementation where the keys never ever leave the device - we have to see if thats possible with the hardware constraints we have.  
**\<hotoatmeal>** I would like that too!  
**\<i-a>** It is still organic and you have perfect opportunity to bend the way how it is being developped:)  
**\<i-a>** Me too.  
**\<m2049r[m]>** there may be multiple implementations, with different roads to success.  
**\<hotoatmeal>** I don't yet understand how to find transaction outputs without revealing the view key  
**\<m2049r[m]>** without having studies the code i think it should be possible to hook into the code and have the device take over when keys are in play.  
**\<hotoatmeal>** if that's not possible, then the entire blockchain would have to be fed through the device over usb.... might be quite slow.  
**\<m2049r[m]>** (into the wallet client code)  
**\<m2049r[m]>** yes - but thats probably not a good idea - and were back to sending the keys to the client  
**\<hotoatmeal>** yeah :/  
**\<hotoatmeal>** too bad homeomorphic encryption systems are so slow  
**\<hotoatmeal>** otherwise you could trustlessly give the client an encrypted version of your view key, let it scan the blockchain for you, and provide the relevant txo's (also encrypted)  
**\<hotoatmeal>** and have the device decrypt the computed result  
**\<m2049r[m]>** i need to read up on how exactly the keys are used in the clients - any specific hint on where to get started?  
**\<hotoatmeal>** cryptonote paper is where I got started  
**\<hotoatmeal>** also looking at the ledger guy's patch  
**\<m2049r[m]>** i am not sure the communication to & from the device needs to be encrypted - are you worried about usb sniffers?  
**\<jbdatko>** hotoatmeal, can you link that patch?  
**\<m2049r[m]>** and if yes, whats the attack?  
**\<hotoatmeal>** so two separate things, both with different reasons for encryption  
**\<qqitty2>** Thanks @hotoatmeal. I'll go dive into the cryptonote WP  
**\<m2049r[m]>** cryptonote paper seems mostly vague  
**\<hotoatmeal>** ledger guy's patch encrypts the communication because it's transferring raw key data  
**\<hotoatmeal>** should be a no-brainer that that should be encrypted  
**\<luigi1111>** Paper is pretty clear unless you want implementation specifics  
**\<m2049r[m]>** heh yes  
**\<hotoatmeal>** this other thing about H-E, is a separate idea, and that's to allow someone else to scan the blockchain on your behalf, without revealing your view key to them (losing your privacy)  
**\<m2049r[m]>** paper is clear - i meant vague in the sense of implementation specifics  
**\<m2049r[m]>** H-E?  
**\<luigi1111>** I think you pretty much have to have client do the scanning  
**\<luigi1111>** Not the hw  
**\<hotoatmeal>** homeomorphic encryption  
**\<dEBRUYNE>** jbdatko: It's under open PRs on the monero repository  
**\<luigi1111>** Unless you have some hw acceleration it's just too slow  
**\<i-a>** luigi1111: yes but is there a way how to do it?  
**\<luigi1111>** How to do which  
**\<hotoatmeal>** i.e. someone else performs math on encrypted values that they can't see, and returns the result to you  
**\<i-a>** how to let PC scan the whole blockchain and prepare outgoing tx in a way, that the are sent to device just for signing.  
**\<luigi1111>** Sure  
**\<luigi1111>** The cold wallet signing basically does this already  
**\<hotoatmeal>** the problem is that H-E implementations of crypto algos are really really really slow  
**\<hotoatmeal>** like hours for a single round of AES  
**\<luigi1111>** That'd probably be slower than the device doing the scanning ^^  
**\<luigi1111>** :)  
**\<hotoatmeal>** yeah  
**\<i-a>** :(  
**\<hotoatmeal>** but in terms of mathematical purity / elegance... I really want that kind of solution to work :)  
**\<hotoatmeal>** jbdatko: https://github.com/monero-project/monero/pull/3095  
**\<i-a>** Ok, another question: If device did he whole scanning. How much memory we need on the device? I think that downlink from peers is usually slower than USB, so limitations is more in memory requirement at the device.  
**\<m2049r[m]>** how big of a problem would it be to reveal the viewkey to the client?  
**\<luigi1111>** Not memory  
**\<luigi1111>** Cpu  
**\<luigi1111>** I don't think it's an issue  
**\<luigi1111>** I mean it isn't perfect  
**\<luigi1111>** But it has the benefit of being workable  
**\<hotoatmeal>** revealing to the client just means that you can't have a non-daemon client  
**\<luigi1111>** Sure you can  
**\<i-a>** yes but it is fine for now I think.  
**\<luigi1111>** You could have a remote node  
**\<hotoatmeal>** well, yeah  
**\<luigi1111>** All the way to mymonero  
**\<m2049r[m]>** the client wallet cache - is that encrypted?  
**\<moneromooo>** Yes.  
**\<m2049r[m]>** thought so - so the device would need to do that as well.  
**\<hotoatmeal>** is it possible to give the client an image of the view key, and then have it search the blockchain for some subset of txo's that /might/ match (as a coarse filter)?  
**\<endogenic>** vtnerd  
**\<jbdatko>** hotoatmeal, thank you  
**\<hotoatmeal>** (reducing the amount of work the device has to do, but not giving up the full key data?)  
**\<m2049r[m]>** how would that work?  
**\<jbdatko>** AES accelerators on MCU are pretty good now, so depending on the MCU it might not be completely horrible (sorry I'm jumping in w/o knowing the full context)  
**\<endogenic>** hotoatmeal: mrl has been workin on this problem for some time  
**\<hotoatmeal>** endogenic: anything I'm saying known not to be worth pursuing? (by proofs that it doesn't work, or somesuch)  
**\<m2049r[m]>** we have space for secure elements on the board - things which can do aes and other things in hardware.  
**\<luigi1111w>** you need ed25519 acceleration  
**\<luigi1111w>** which I doubt exists  
**\<m2049r[m]>** yeah, except that.  
**\<hotoatmeal>** heh. now it needs an fpga  
**\<luigi1111w>** I don't really see any way around it  
**\<luigi1111w>** mymonero as a hw client would actually be quite desirable  
**\<luigi1111w>** and quite an upgrade  
**\<luigi1111w>** well it all depends on perspective :)  
**\<endogenic>** :)  
**\<luigi1111w>** the most secure/private arrangement would be user owned daemon -> wallet/client -> hw  
**\<luigi1111w>** but you can delegate the first two for privacy loss  
**\<luigi1111w>** well the first one isn't really privacy loss  
**\<i-a>** our nordic semiconductor candidate has ed25519 hw block, but we still didnt get them.  
**\<luigi1111w>** or a different type or of privacy  
**\<luigi1111w>** i-a that's interesting  
**\<luigi1111w>** I'd be curious to see perf numbers  
**\<m2049r[m]>** i-a but thats with an nda so we cant be open source, no?  
**\<luigi1111w>** for some usable ed25519 operation  
**\<i-a>** luigi1111w: nRF52840, it has secure crypto cell or something like that.  
**\<i-a>** Of course there are other problems, like a non open design and so on.  
**\<msvb-mob>** cryptocell is available without nda.  
**\<luigi1111w>** I mean something like signatures/sec  
**\<i-a>** another question is if this cryptocell ed25519 is fast enough to be usable.  
**\<luigi1111w>** that was my only question :)  
**\<i-a>** Unfortunately I dont know now. But I will try to find out. It seems like as-fast-as-possibe ed25529 od device is a must.  
**\<hotoatmeal>** do you have a ballpark for how fast it would have to be to be usable?  
**\<msvb-mob>** cec1702 has the cuve too.  
**\<i-a>** msvb-mob: nice, can we somehow determine their performance?  
**\<m2049r[m]>** they sortof claim its 10x a software solution but dont show numbers  
**\<luigi1111w>** software solution on that power of hw?  
**\<luigi1111w>** IDK, something similar to an older cpu  
**\<msvb-mob>** i-a: I don't know how to measure performance without testing the devices on real hardware, unfortunately.  
**\<i-a>** https://www.microchip.com/wwwproducts/en/CEC1702  
**\<i-a>** this is it \^  
**\<m2049r[m]>** thats the question luigi - its blabla  
**\<m2049r[m]>** can we GET real hardware?  
**\<luigi1111w>** :)  
**\<i-a>** msvb-mob: hmm:( are we going to have cec1702 to do some testing?  
**\<luigi1111w>** I think it would be really cool if such a device could be made  
**\<luigi1111w>** but I'm skeptical  
**\<msvb-mob>** m2049r[m]: I can send you a nRF52840-DK if you want.  
**\<luigi1111w>** we know the viewkey delegation works, at least  
**\<msvb-mob>** i-a: The nRF is easy (there's a devkit for that) but to test the CEC1702 we must make the boards ourselves first.  
**\<luigi1111w>** (mymonero and openmonero both use the exact same idea already)  
**\<msvb-mob>** I think the MCUs are already in my lab.  
**\<i-a>** msvb-mob: that is not a big deal, if you know the are comming, i can send you a board asap.  
**\<i-a>** (lets say gerbers on monday/tuesday)  
**\<i-a>** msvb-mob: what about nda on this cec1702? Or do they have some problem?  
**\<msvb-mob>** The CEC1702 is not NDA encumbered.  
**\<i-a>** perfect candidate -\_-  
**\<msvb-mob>** Yes, I think so too.  
**\<m2049r[m]>** the CEC1702 & the nRF52840 would replace our MCU?  
**\<i-a>** m2049r[m]: I think yes, because our mcu is lacking ed25519  
**\<msvb-mob>** m2049r[m]: They are both Cortex-M4 MCUs so they could do so. If they aren't large enough to contain transactions in memory or code in program storage we could use them as coprocessors probably.  
**\<msvb-mob>** Would be a bit weird.  
**\<m2049r[m]>** we have to see what they mean by ed25519. do we need just signing & verifying or do we also need curve arithmetic luigi1111w  
**\<luigi1111w>** signing and verifying sorta-mostly-ish include all the operations needed  
**\<luigi1111w>** I guess that's not really true  
**\<luigi1111w>** but the operations that need accelerated would be, mostly  
**\<m2049r[m]>** the data sheets says:  
**\<m2049r[m]>** Elliptic Curve point multiply with Curve25519  
**\<m2049r[m]>** The Edwards-curve Digital Signature Algorithm (EdDSA), using Curve25519  
**\<m2049r[m]>** (CEC1702)  
**\<iDunk>** ed25519 != Curve25519.  
**\<i-a>** nRF does both i think  
**\<i-a>** yes  
**\<i-a>** but cec1702 doesn't have ed25519:( or I cannot find it in datasheet.  
**\<m2049r[m]>** the nrf can create keys, sign & verify. "The generation is performed using EC Edwards ed25519 algorithm."  
**\<i-a>** cec1702 has only Curve25519  
**\<luigi1111w>** if they are going off of nacl or similar they have both  
**\<luigi1111w>** the signing is ed  
**\<luigi1111w>** and the box stuff is curve255  
**\<msvb-mob>** i-a: No ECDSA on CEC1702? I don't have the documents with me now.  
**\<i-a>** ok so to be clear:  
**\<i-a>** The Elliptic Curve Digital Signature Algorit  
**\<i-a>** hm (ECDSA), using all supported NIST curves  
**\<i-a>** he Edwards-curve Digital Signatur  
**\<i-a>** e Algorithm (EdDSA), using Curve25519  
**\<luigi1111w>** that could be naming issues though :)  
**\<i-a>** maybe ed25519 is hidden somewhere, but it isn explicitly mentioned, Curve25519 is mentioned.  
**\<i-a>** \*isnt  
**\<luigi1111w>** yeah they are often bundled together  
**\<m2049r[m]>** so you are saying we need new hardware in any case?  
**\<luigi1111w>** to attempt to "do everyone on device", yes (and I'm doubtful it's possible)  
**\<luigi1111w>** to do a client-delegated arrangement, no  
**\<hotoatmeal>** these slides say they can do ~1400 ECDH's /s on a cortex A8: https://cr.yp.to/talks/2012.11.29/slides.pdf  
**\<msvb-mob>** i-a: The ED25519 API is on pages 60-61 of the CEC/MEC Family Devices ROM API Users Guide.  
**\<i-a>** msvb-mob: thank you,)  
**\<msvb-mob>** For example ed25519\_valid\_sig (validate signature) is a function.  
**\<hotoatmeal>** and Ed25519 was only a bit slower  
**\<hotoatmeal>** what's the rough size of the blockchain, counted in txo's?  
**\<luigi1111w>** total size isn't that useful  
**\<luigi1111w>** size over past month much more so  
**\<hotoatmeal>** growth rate too  
**\<luigi1111w>** yeah with some assumed groth  
**\<luigi1111w>** growth  
**\<luigi1111w>** 200k txs last month  
**\<luigi1111w>** so maybe 450k outputs  
**\<luigi1111w>** double that at least gets you 1mi/mo  
**\<luigi1111w>** checking an output is something like 2x ECDH  
**\<hotoatmeal>** so it'll get slower by 20 mins, every month  
**\<hotoatmeal>** ouch  
**\<luigi1111w>** if you don't use it  
**\<luigi1111w>** but yeah  
**\<hotoatmeal>** (assuming you need to re-scan the entire chain each time... but maybe that can be cached)  
**\<luigi1111w>** there would be quite some catchup time  
**\<i-a>** not sure if relevant, but this could be ECDSA performance on CEC device: https://imgur.com/a/WQKqp  ?  
**\<luigi1111w>** if you leave it unplugged for some time  
**\<luigi1111w>** oh  
**\<luigi1111w>** I would sure assume you cache  
**\<luigi1111w>** if you don't it  
**\<luigi1111w>** it's pretty unworkable  
**\<hotoatmeal>** yeah  
**\<luigi1111w>** you'd have to leave it plugged in a few hours before you could spend each time :)  
**\<hotoatmeal>** the worst case of initializing a new device though is pretty bad  
**\<hotoatmeal>** though I guess you could just sweep everything to it, and ignore all of the chain that happened before then  
**\<luigi1111w>** restored device  
**\<luigi1111w>** new device has no txs  
**\<hotoatmeal>** right  
**\<hotoatmeal>** at least the restore point is something you can make note of, encrypt, and then store like any other backup  
**\<m2049r[m]>** are you suggesting we keep the chain/cache on the device?  
**\<luigi1111w>** no  
**\<luigi1111w>** definitely not the chain  
**\<luigi1111w>** I'm still skeptical it's workable at all, just exploring the idea  
**\<m2049r[m]>** gottit  
**\<hotoatmeal>** do bulletproofs change the costs here?  
**\<hotoatmeal>** s.do.will.  
**\<m2049r[m]>** do we have constraints about how big the device may be?  
**\<endogenic>** yes  
**\<luigi1111w>** hotoatmeal no  
**\<endogenic>** :P  
**\<luigi1111w>** m2049r[m] just tote a computer around  
**\<luigi1111w>** NP  
**\<luigi1111w>** "this is my hardware wallet"  
**\<m2049r[m]>** what if we use a rpi3 to do all the work & store the caches for all the wallets onboard?  
**\<m2049r[m]>** :)  
**\<endogenic>** now we're cookin with gas  
**\<luigi1111w>** it's pretty slow too  
**\<luigi1111w>** normal client scanning on computer seems pretty ok to me  
**\<m2049r[m]>** how fast does it need to be? do we want full USB3 speeds?  
**\<luigi1111w>** by compromising your computer, the hacker now compromises just your privacy  
**\<luigi1111w>** rather than  
**\<luigi1111w>** you know  
**\<luigi1111w>** all your money  
**\<i-a>** you can run node on rp3, so it probably isnt so slow..?  
**\<hotoatmeal>** m2049r[m]: delegating the viewkey to the computer means it doesn't have to be very quick at all  
**\<luigi1111w>** i-a how long does initial sync take  
**\<hotoatmeal>** (the device / usb, that is)  
**\<luigi1111w>** how long would it take to scan a restored wallet  
**\<m2049r[m]>** that would have been the first path to explore  
**\<i-a>** luigi1111w: ok, got it:/  
**\<endogenic>** i-a no no that's just bc node is fast... because it's asynchronous (now it's my turn to troll)  
**\<luigi1111w>** is an rpi significantly better than a normal computer?  
**\<luigi1111w>** m2049r[m] if you slim the data down to close to minimum I don't think bandwidth is much concern  
**\<luigi1111w>** lemme see  
**\<m2049r[m]>** so bottleneck is always computation then. and we want it fast so we dont take forever to sync up again.  
**\<luigi1111w>** I'd guess around 240 bytes per tx  
**\<m2049r[m]>** if we keep cache on device (sdcard or whatnot) then it can be shared between clients.  
**\<luigi1111w>** so even .25MBps would overwhelm the device most likely  
**\<m2049r[m]>** 240 either way?  
**\<luigi1111w>** no just computer->**device  
**\<hotoatmeal>** another idea: put the viewkey on a separate device that's always connected to a computer  
**\<msvb-mob>** There have been some requests for SD cards, so it would be nice to try to put one on at least the developer edition board (since it has more space.)  
**\<m2049r[m]>** yes - use a viewonly wallet.  
**\<msvb-mob>** m2049r[m]: Shift devices makes quite a nice hardware wallet (Bitbox) with a SD card.  
**\<endogenic>** do you guys suppose there's any reason why this isn't a match for the mymonero lightwallet server you run alongside the daemon?  
**\<luigi1111w>** I don't  
**\<endogenic>** i might be misunderstanding  
**\<luigi1111w>** I think it's great  
**\<luigi1111w>** it's also great for existing mymonero users (privacy issues notwithstanding, of course)  
**\<luigi1111w>** but I guess we're discussing the edge of what's possible  
**\<luigi1111w>** for having a device that does basically no delegation for maximal security and privacy in all cases  
**\<m2049r[m]>** you are saying to have the device connect to an openmonero instance?  
**\<luigi1111w>** or maybe just rainbows and unicorns  
**\<endogenic>** m2049r[m]: no  
**\<endogenic>** i was envisioning some sort of stripped down protocol...vtnerd and i are working on that anyway in the api overhaul  
**\<m2049r[m]>** ok, what are you saying?  
**\<luigi1111w>** he's talking about mymonero not openmonero  
**\<endogenic>** so if you're running your own local server  
**\<luigi1111w>** though in theory they are similar  
**\<endogenic>** which is written in C++ and in the monero-cli repo alongside the official daemon  
**\<endogenic>** it almost seems like it's more a question of protocol and transport  
**\<endogenic>** that is  
**\<endogenic>** if we really are talking about delegating scanning  
**\<endogenic>** of course you have the view key disclosure tradeoff but that's why you run your own server locally  
**\<m2049r[m]>** i thought mymonero was closed source and not for anyone to run their own?  
**\<luigi1111w>** it is  
**\<luigi1111w>** but it won't be for much longer  
**\<luigi1111w>** supposedly :)  
**\<endogenic>** yep  
**\<endogenic>** vtnerd's prioritized it recently  
**\<m2049r[m]>** heh  
**\<endogenic>** he hadnt been able to before  
**\<endogenic>** too many pesky users!  
**\<endogenic>** but anyway  
**\<endogenic>** this idea does seem to overlap with simplewallet/monero-gui's job too  
**\<luigi1111w>** the theory of mymonero locally vs gui/cli is pretty similar  
**\<luigi1111w>** yes  
**\<endogenic>** does that count as a jinx?  
**\<luigi1111w>** slow motion  
**\<endogenic>** mm  
**\<endogenic>** anyway, whatever software we need, we can build  
**\<endogenic>** might be a good idea to just ask what the ideal situation is for the capabilities we have on the hardware side then fill the gaps  
**\<m2049r[m]>** we agree that we need lots of well-performing ed25519 operations on the device - no matter which road is taken?  
**\<m2049r[m]>** and possibly some form of storage (sdcard,eMMC?)  
**\<luigi1111w>** m2049r[m] more is better  
**\<luigi1111w>** but it doesn't need to be "a lot" for the delegated road  
**\<luigi1111w>** which includes basically everything that's not "do it all on device"  
**\<luigi1111w>** whether local client or some mymonero type  
**\<m2049r[m]>** signing would be on device for example - how large are the messages to be signed / verified?  
**\<luigi1111w>** it does need to be able to hash some KBs yes  
**\<luigi1111w>** 50 max, maybe  
**\<luigi1111w>** theoretically more, but shouldn't really happen anymore, in most cases  
**\<m2049r[m]>** the cec1702 has 24k of "cryptographic ram" which seems to be the ram where cryptomagic happens.  
**\<m2049r[m]>** "in most cases" - one case is enough to break it though - so for such cases we would need a software solution to kick in and have the hardware do 99% of cases.  
**\<m2049r[m]>** (this is not a problem)  
**\<m2049r[m]>** do you have a particular testcase i could run just to see how slow the current device is performing?  
**\<luigi1111w>** no I mean you can just disallow  
**\<luigi1111w>** would need some research to really know how annoying that would be though  
**\<luigi1111w>** (problem comes from having many inputs)  
**\<luigi1111w>** ((I guess mining to the wallet could cause it))  
**\<luigi1111w>** m2049r[m] well if you have ed25519 code working on it  
**\<m2049r[m]>** i do  
**\<luigi1111w>** a simple scalarmult  
**\<m2049r[m]>** regardless of parameters?  
**\<luigi1111w>** random secret key  
**\<luigi1111w>** public key needs to be valid at least  
**\<luigi1111w>** or a simple scalarmult\_base if you have that  
**\<m2049r[m]>** including convesion from/to 256-bit scalars or the mult by itself?  
**\<luigi1111w>** including  
**\<cslashm>** m2049r[m]: hotoatmeal: Yes All secret value are passed encrypted from device to PC. When PC need perform operation with those values, there are retransmitted to the device  
**\<luigi1111w>** https://github.com/monero-project/monero/blob/master/src/crypto/crypto.cpp#L127  
**\<luigi1111w>** if you can match that  
**\<m2049r[m]>** ok - like the operation need to make a public key out of a secret key (eg. viewkey)?  
**\<luigi1111w>** yes  
**\<luigi1111w>** that includes a conversion from fe to bytes at the end  
**\<m2049r[m]>** i can do that. need to add time measuring stuff.  
**\<m2049r[m]>** will do that tomorrow and get back with results.  
**\<luigi1111w>** cool  
**\<luigi1111w>** might as well do arbitrary base too if it's not much more work  
**\<luigi1111w>** https://github.com/monero-project/monero/blob/master/src/crypto/crypto.cpp#L127  
**\<luigi1111w>** you can use any valid point for the pubkey param  
**\<luigi1111w>** I can give you one in hex if you want  
**\<luigi1111w>** or you can just gen one from the above function  
**\<m2049r[m]>** will pm you for more details  
**\<m2049r[m]>** cslashm: what encryption is used for the transmission of the keys over usb?  
**\<cslashm>** It will be AES128  
**\<cslashm>** the key will new at each app usage and dedicated to session when transfer is performed  
**\<cslashm>** But I try to send even encrypted the view and spend key  
**\<cslashm>** *not send*  
**\<m2049r[m]>** and the key exchange is DH?  
**\<cslashm>** which DH? The AES key never leave the device  
**\<m2049r[m]>** maybe i dont understand aes. isnt that symmetric? how does the pc decode the ciphertext?  
**\<cslashm>** PC never decode, I try to explain  
**\<luigi1111w>** he's using the pc for encrypted cache only it sounds like  
**\<luigi1111w>** but I don't think you need to send spend key ever  
**\<luigi1111w>** device has enough memory for that, surely  
**\<cslashm>** voila. PC is just a encrypted holder  
**\<cslashm>** The advantage is that it keep the secret at the right place  
**\<m2049r[m]>** a storage.  
**\<cslashm>** for exemple in RCT, it request n secret key, store in the right vector place, and when it use it, it resend the encrypted secret key to device, which decrypt and do the op  
**\<cslashm>** @luigi1111w: yes spend/view key never leave the device  
**\<cslashm>** I use special value 00..00 and FF...FF for them on PC side  
**\<m2049r[m]>** ok, gotta go - it's been great :)  
**\<cslashm>** basic idea is to hav no memory restriction, on easly follow the PC code evolution with minimal code device modification  
**\<cslashm>** *and easly* (end of day in FR :) )  
**\<dEBRUYNE>** cslashm: I've been wondering. Did you run any performance tests? For example, how long does it take to scan / refresh 10k blocks?  
**\<cslashm>** for now it's a OMG part  
**\<cslashm>** I start some perf test yes but didnot remenber  
**\<dEBRUYNE>** Approximately? :p  
**\<cslashm>** It is just impossible to rescan the whole blockchain  
**\<cslashm>** holdon, deep search in paper on my desk  
**\<dEBRUYNE>** Yeah, but that won't be necessary for 99% of the users :P  
**\<cslashm>** 10 min for 20 000 block, but app in -0O and level 4 log  
**\<cslashm>** wallet cli also in O0  
**\<dEBRUYNE>** I see, that doesn't seem too bad tbh  
**\<luigi1111w>** that is scanning by cli, not ledger, right?  
**\<cslashm>** Its acceptable if you dont move in vacation for 1 month without refresh :D  
**\<cslashm>** no wallet cli scan the bc but delegate all keyderivation/keyimage computation to ledger to no disclose the view key  
**\<dEBRUYNE>** well, 1 month is 22k blocks give or take  
**\<cslashm>** So for each block, device compute some scalmul and hash  
**\<dEBRUYNE>** So that'd be 10 minutes wait  
**\<luigi1111w>** you can't really use blocks  
**\<luigi1111w>** you have to use txs  
**\<luigi1111w>** are those current numbers  
**\<luigi1111w>** what will it look like if usage goes up (which it historically has)  
**\<luigi1111w>** I personally don't really see a lot of benefit for disclosing the viewkey  
**\<cslashm>** yes for each txes. basically scan involves get\_key\_derivation and generate\_key\_image, those two op are done by the device. The rest is done by the PC as usual  
**\<cslashm>** view key is so never disclose  
**\<cslashm>** So, I need to leave. Be back on monday. you can mail, PM reddit or put githib issue if you need long tech desc  