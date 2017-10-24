---
layout: post
title: Overview and Logs for the Dev Meeting Held on 2016-11-27
summary: Brief update on next point release, Ring CT, 0MQ (and authentication), GUI, and crypto libs
tags: [dev diaries, core, crypto, 0mq]
author: dEBRUYNE / fluffypony
---

### Overview  

An overview [can be found on Hello Monero](https://hellomonero.com/article/monero-dev-meeting-note-highlights-and-transcript-2016-11-27).   

### Logs  

**\<tewinget>** ugh, I wanted to stay up for the dev meeting, but I just...can't.  
**\<tewinget>** I'll put an update here in a minute or two though, someone can paste it for me perhaps.  
**\<fluffypony>** tks tewinget  
**\<tewinget>** so the daemon and wallet talk via zmq now (yay!)  
**\<tewinget>** both have the requisite command line parameters.  I added new ones for the daemon since I'm leaving the old RPC in place for now, but that's specifics that can change on a whim, of course.  
**\<tewinget>** (parameters like bind port/address and such)  
**\<tewinget>** don't have any rpc security features like user agent and what-not put in yet, that'll come with time.  
**\<tewinget>** modifications to wallet to use new rpc are "complete", but not working yet.  needs iteration.  was working on that now, but I'm fucking exhausted, hence the not staying up for the meeting.  
**\<moneromooo>** user-agent was a quick fix anyway. It should not be merged in 0MQ. Proper auth should be done instead.  
**\<tewinget>** once I get *that* ironed out, I'll put together some simple documentation on what the rpc calls look like  
**\<moneromooo>** And ty and good night :)  
**\<tewinget>** my python script is a bit broken, but I updated one of the functions to work  
**\<tewinget>** (because I changed it to be JSON-RPC 2.0 compliant)  
**\<tewinget>** I'll pastebin that and paste a link here in a sec  
**\<tewinget>** hard_fork_info() is the one that uses the jsonrpc format, others can be easily modified to comply  
**\<tewinget>** err...that more or less sums things up, I think.  any qvestions?  
**\<tewinget>** https://paste.fedoraproject.org/490609/57957148/  
**\<tewinget>** need python's zmq libs, of course, and zmq version 4ish should suffice as far as OS libs for building  
**\<tewinget>** I'll stay up a few more minutes in case anyone has any questions, but I do need to go and sleep.  
**\<ferretinjapan>** yo  
**\<fluffypony>** welcome, welcome  
**\<fluffypony>** ok so  
**\<fluffypony>** since we last met  
**\<Jaquee>** hi  
**\<fluffypony>** there have been quite a few merge sessions  
**\<fluffypony>** or merge sesh's as I like to call them  
**\<fluffypony>** coz, you know, when you've been a maintainer as long as I have, you learn to give things little names otherwise you'll go mad  
**\<Jaquee>** lol  
**\<fluffypony>** there have been some major reworks to the threading model, courtesy of vtnerd  
**\<fluffypony>** who also split part of monero-wallet-cli off into monero-wallet-rpc  
**\<fluffypony>** (which we had previously done on the old dev branch, as you may recall)  
**\<fluffypony>** gingeropolous started pushing more code than a troll dev should, so he's kinda progressed beyond that  
**\<fluffypony>** moneromooo shot down bug after bug  
**\<fluffypony>** kenshi84 started working on one-time addresses without using the integrated address format we currently have  
**\<fluffypony>** @NanoAkron also fixed some errant armv8 things  
**\<fluffypony>** and then on the Monero Core side tons of fixes, small and large, primarily by moneromooo and Jaquee  
**\<fluffypony>** abrkn also had their first PR merged to Monero Core, so welcome to a new contributor  
**\<fluffypony>** xmr-eric also had a pair of PRs, so he's almost at 5 PRs which is excellent  
**\<fluffypony>** as it stands right now there is a weird segfault occurring occasionally, at least on macOS  
**\<fluffypony>** and possibly other operating systems  
**\<fluffypony>** this is a blocker to the next tagged release  
**\<ferretinjapan>** ubuntu as well^  
**\<fluffypony>** also running LMDB in "fast" mode may be unsuitable for Windows - hyc, what are your thoughts on that?  
**\<asok>** debian also ^  
**\<hyc>** still gathering data  
**\<hyc>** asked that user what happened oin his prior run, whether PC crashed etc  
**\<fluffypony>** ok - so that's a possible blocker to the tagged release  
**\<fluffypony>** and then in new, relevant info, Shen has begun a thorough review of the RingCT implementation  
**\<fluffypony>** and already there are a couple of nigglies, some carried across from his rough implementation  
**\<fluffypony>** so this means we will have to have a mandatory tagged release out before the Jan hard fork  
**\<moneromooo>** yay!  
**\<fluffypony>** given that there are 2-3 blockers to the tagged release, and given its nature, we will likely release it alongside the GUI  
**\<fluffypony>** so that we get a fair degree of pre-fork adoption  
**\<ArticMine>** That makes a lot of sense  
**\<fluffypony>** in the meantime  
**\<fluffypony>** pigeons is setting up links to built binaries on the buildbot infrastructure  
**\<fluffypony>** and I'll set forwarders up or something for those  
**\<fluffypony>** so that people will be able to grab nightlies of both Monero and Monero Core  
**\<fluffypony>** this is not a small amount of work, but it should make it a LOT easier for non-developers to test  
**\<fluffypony>** and we need ongoing functional testing, over and above test suite regressions  
**\<fluffypony>** speaking of which; the next step on that is to run and publish performance test data on a per-PR basis  
**\<fluffypony>** so we can spot performance improvements / regressions  
**\<fluffypony>** last thing that I want to open the floor to  
**\<fluffypony>** is issue 1271  
**\<fluffypony>** https://github.com/monero-project/monero/issues/1271  
**\<fluffypony>** opened by paragonie-scott  
**\<fluffypony>** currently we hit /dev/urandom for a random seed, basically  
**\<fluffypony>** and then use the Keccak sponge function for random numbers thereafter  
**\<fluffypony>** a userland PRNG is not ideal, but this doesn't really represent an attack surface that an attacker can take advantage of right now  
**\<fluffypony>** to alleviate this we need to pick a crypto lib, and slowly start using it in various parts of the application  
**\<fluffypony>** refactoring out the in-source implementations we currently have for most things  
**\<fluffypony>** the only two really worth considering are CryptoC++ and libsodium  
**\<fluffypony>** if anonimal is around, maybe he can tell us why Kovri settled on cryptocpp  
**\<i2p-relay> {-olark}** What about TweetNaCl?  
**\<fluffypony>** oh yes  
**\<fluffypony>** so  
**\<fluffypony>** TweetNaCl is great for the core crypto bits where the most important thing is getting it verifiably right  
**\<fluffypony>** TweetNaCl's simplicity lends itself towards formal verification  
**\<fluffypony>** a larger library like libsodium or cryptocpp will NEVER be formally verified  
**\<hyc>** I'm not convinced of the original argument. userland PRNGs are not a liability  
**\<hyc>** and haveged itself was recently recommended on crypto list http://www.metzdowd.com/pipermail/cryptography/2016-November/030930.html  
**\<fluffypony>** hyc: I agree, but there's also nothing wrong with just hitting /dev/urandom each time  
**\<i2p-relay> {-anonimal}** Since there is a heavy reliance on crypto, and most of the implementation was already written with crypto++ in mind (though it is more 'abstracted' now), any swap-out of crypto would *not* be worth the benefits gained.  
**\<fluffypony>** haveged would still be of benefit there as it affects the chain from /dev/random -> /dev/urandom  
**\<moneromooo>** There's a tendency for security researchers to hype every small thing too, fwiw.  
**\<hyc>** hitting /dev/urandom every time leaves an obvious footprint. I suppose it's more of an issue for closed-source s/w  
**\<fluffypony>** hyc: yeah - for Monero a root user would be able to trivially trap for any obfuscation we add  
**\<hyc>** IME, reverse engineering closed source, it's harder to break a PRNG n a binary with no symbols and no syscalls  
**\<hyc>** but yeah, not relevant for open source  
**\<ArticMine>** Yes but we are not implementing DRM here  
**\<i2p-relay> {-anonimal}** * was responding to fluffypony's ping for kovri, what wasn't an endorsement or argument for/against anything for monero  
**\<i2p-relay> {-anonimal}** s/what/that/  
**\<fluffypony>** anonimal: sure, but it's advantageous if Kovri and Monero use the same lib  
**\<hyc>** less code to maintain, yeah  
**\<hyc>** bigger impact if a flaw is found  
**\<fluffypony>** (for functions TweetNaCl doesn't have, or where performance greater than TweetNaCl's is required)  
**\<fluffypony>** sure, but we're not protecting ourselves by using libsodium vs. cryptocpp  
**\<fluffypony>** unless we know in advance that one will have an implementation flawthat the other won't  
**\<endogenic>** is a C++ dep an issue going into the future with talk of porting to pure C?  
**\<i2p-relay> {-anonimal}** Can someone give a tl;dr of all crypto schemes required by monero (aside from ed25519, keccak, and any PRNG concern)?  
**\<fluffypony>** blake256, chacha8, groestl, skein, jh, keccak  
**\<hyc>** cryptonight uses keccak, groestl,  
**\<hyc>** yeah what fluffy said  
**\<fluffypony>** lol  
**\<moneromooo>** There's all the stuff in crypto-ops.c  
**\<fluffypony>** moneromooo: that's covered by TweetNaCl  
**\<fluffypony>** ie. covered by SUPERCOP  
**\<hyc>** I presume we're gonna support TLS on rpc connections too?  
**\<moneromooo>** Do you mean that it'd be still used if we were to change to cryptocpp ?  
**\<fluffypony>** hyc: kinda - vtnerd is working on it atm  
**\<fluffypony>** we're going to have easy instructions on TLS wrappers, and then authentication on the RPC layer  
**\<fluffypony>** moneromooo: yes  
**\<moneromooo>** Why change, then ?  
**\<moneromooo>** If it's only part change, I mean.  
**\<fluffypony>** \<vtnerd> I wanted to mention that I would recommend _not_ adding SSL support directly to the codebase. I think using SSH tunneling or a SSL proxy like hitch would be better. I can write a guide and some basic strategies if you have someone in particular that wants the rpc stream encrypted  
**\<fluffypony>** \<vtnerd> one of the advantages is not having to configure all of the keys, etc. I'm thinking about adding a warning that can only be suppressed with a CLI option or user-input if someone binds to a non-loopback IP  
**\<i2p-relay> {-anonimal}** I used that argument for kovri last year, it was quickly shot down by str4d and zzz.  
**\<vtnerd>** https://github.com/varnish/hitch  
**\<fluffypony>** moneromooo: to get away from the in-source implementations that are mostly obscure or not massively common  
**\<vtnerd>** i2p-relay: do you recall the arguments against doing it that way?  
**\<i2p-relay> {-anonimal}** Expecting users to use a guide or 3rd party is probably not a good idea.  
**\<i2p-relay> {-anonimal}** vtnerd: there may be a log pasted in a closed github issue  
**\<hyc>** I would just use stunnel, it's already proven and pretty simple  
**\<i2p-relay> {-anonimal}** Basically what I just said.  
**\<moneromooo>** It's a lot easier to do the wrong thing thogh.  
**\<fluffypony>** I think if we can detect and warn users that their behaviour is unsafe, but here's what they can do to fix it, that's enough  
**\<moneromooo>** The same users that asked a question that I had answers with a red message when bitmonerod stopped, but they had somehow missed ? :)  
**\<i2p-relay> {-anonimal}** openssl is a dependency for kovri anyway, implementing tls/ssl sockets is trivial. Are we talking more about than sockets though?  
**\<vtnerd>** if SSL support is integrated public keys still have to be generated, stored, and then copied remotely ... so its still frustrating  
**\<fluffypony>** moneromooo: what if it won't start when bound to an external IP, unless you pass a flag to override it?  
**\<hyc>** that's life. we can write a certificate generator/mini-CA  
**\<moneromooo>** Maybe. I don't know near enough about this to have a useful opinion anyway.  
**\<hyc>** I already have one I wrote for OpenLDAP back in 2000 (mini-CA)  
**\<vtnerd>** CA key still has to be distributed ...  
**\<moneromooo>** CA key ?  
**\<hyc>** CA cert, not key  
**\<i2p-relay> {-anonimal}** Certs for whom?  
**\<vtnerd>** its still just a public key  
**\<i2p-relay> {-anonimal}** Is there an open issue for this with discussion so I catch up?  
**\<pigeons>** my understanding is that one reason bitcoin is removing integrated tls support from their rpc server is to discourage people from exposing that surface to the internet when they don't have the resources to give it the same review as p2p/etc interfaces  
**\<hyc>** on a personal node, you only care that your personal clients can connect. you generate your own CA, a server cert for your node, and a client cert for your wallets.  
**\<pigeons>** but for monero, there is already remote daemon support so perhaps not relevant  
**\<i2p-relay> {-anonimal}** Oh, personal nodes, ok thanks hyc.  
**\<hyc>** and you use full cert verification in both directions, to prevent any foreign apps from connecting.  
**\<fluffypony>** hmmmm  
**\<vtnerd>** which can be done with SSH easily too  
**\<i2p-relay> {-anonimal}** Not everyone has access to ssh nor know how to use ssh.  
**\<hyc>** yeah, if you're going to keep a long running ssh tunnel alive  
**\<vtnerd>** I haven't seen an easy way to "auto-configure" because the clients still need to know server pub key  
**\<hyc>** node and client need a copy of the CA cert  
**\<vtnerd>** I guess blindly accepting the cert is better ?  
**\<fluffypony>** with TLS clients can just approve a fingerprint  
**\<fluffypony>** then it's a visual comparison to a self-signed cert's fingerprint  
**\<pigeons>** tofu seems acceptable to people, despite its weaknesses  
**\<hyc>** ugh.  
**\<pigeons>** i know  
**\<hyc>** if you're going to document best practice for TLS, don't document shortcuts. that's garbage.  
**\<fluffypony>** we're bikeshedding - we need to put a peg in the sand and make a decision, even if it's the wrong decision  
**\<fluffypony>** I'm in favour of not building things and ripping them out later  
**\<fluffypony>** but rather not having them until there is an overwhelming demand for it  
**\<moneromooo>** erf  
**\<hyc>** yeah, fine. no built-in TLS support for now  
**\<moneromooo>** I'd be fine with that plus the --force-plaintext-bind-to-non-local-ip  
**\<fluffypony>** we'll use the fail-on-start method if there are RPC bindings to non-loopback addresses, and we'll have a guide that documents hitch and stunnel  
**\<vtnerd>** I already have a patch ready that forces a user to confirm if the rpc-bind-ip is not loopback  
**\<fluffypony>** hyes  
**\<fluffypony>** vtnerd: can we make it fail-unless-overridden-by-flag?  
**\<fluffypony>** we're trying to avoid interaction on the daemon  
**\<vtnerd>** the patch has both. Without the flag set it prompts the user  
**\<vtnerd>** --confirm-external-bind  
**\<moneromooo>** Maybe test if stdin is tty, fail if not.  
**\<moneromooo>** Oh, wait, windows. Nevermind.  
**\<hyc>** sounds like just fail without the flag is simpler  
**\<vtnerd>** definitely. will do then  
**\<vtnerd>** that is_yes patch is less useful now, but I guess it did cleanup simpler_wallet.cpp some  
**\<moneromooo>** Next thing. Did shen give an idea when he might have a first pass of things that need fixing ?  
**\<moneromooo>** I have time to fix, and we're pressed for time :D  
**\<fluffypony>** othe: ^^  
**\<fluffypony>** ok  
**\<fluffypony>** we wait for othe  
**\<moneromooo>** Later, then.  
**\<fluffypony>** in the meantime - anyone want to bring up anything else?  
**\<fluffypony>** oh - also, if anyone has any strong opinions on the crypto lib we should be using, now is a good time to mention them  
**\<fluffypony>** my inclination is to cryptocpp for a few reasons  
**\<fluffypony>** https://en.wikipedia.org/wiki/Comparison_of_cryptography_libraries is a good starting point if anyone wants to compare it to the others  
**\<pero>** i had some discussion points wrt to the gooey if no one else has anything  
**\<fluffypony>** pero: go ahead  
**\<pero>** i think the navigation menu might need a 2nd level  
**\<fluffypony>** medusa_ / dEBRUYNE ^^  
**\<fluffypony>** slash Jaquee  
**\<pero>** perhaps an advanced or something to that effect to house verify payment and sign/verify  
**\<pero>** those are features that are not going to be very often  
**\<pero>** especially sign/verify  
**\<pero>** sign/verify needs to be renamed to 'Signatures' i think  
**\<pero>** it's kind of confusing with 'verify payment'  
**\<pero>** but i think if they were thrown into an Advanced top-level tab then there would be less possible confusion for most users  
**\<pero>** the other thing- what's up with that qt title bar?  
**\<pero>** isnt that best left for the OS to handle  
**\<moneromooo>** IIRC, people slightly preferred keeping it.  
**\<pero>** i dont think 'preferring' makes it the right decision  
**\<hyc>** oh, as a point of curiosity - monerod runs quite happily on a phone even on 2G. using --out-peers 2.  
**\<hyc>** hardly any bandwidth used.  
**\<pero>** i have 2 titlebars in gnome  
**\<pero>** is that the case for all OSs?  
**\<iDunk>** no  
**\<fluffypony>** no  
**\<pero>** doesnt apple have it's buttons on the left side?  
**\<moneromooo>** I have two too. But then I have a special setup.  
**\<fluffypony>** then it's a bug  
**\<fluffypony>** moneromooo: you *are* special  
**\<fluffypony>** :-P  
**\<fluffypony>** 2 minutes and then I bring up meeting bot, so let's wrap this up  
**\<Jaquee>** i agree on using the os default  
**\* fluffypony** hates the OS default  
**\<pero>** we're also going against OS-specific consistent user experience  
**\<moneromooo>** ... wat...  
**\<Jaquee>** and that we need to work on the ux.  
**\<pero>** against their design standards  
**\<Jaquee>** yes  
**\<i2p-relay> {-olark}** re: crypto libraries, imo, use TweetNaCl for what you can. Cryptopp for everything else.  
**\<hyc>** agree with pero - app should leave widgets to user's window manager  
**\<fluffypony>** olark: agreed  
**\<hyc>** title bar included  
**\<fluffypony>** we don't want it looking like it's from 1995 tho :-P  
**\<hyc>** we don't want it looking different from everything else on their desktop  
**\<fluffypony>** I'd prefer that the Monero Core app is consistent across platforms  
**\<hyc>** it was a pretty jarring experience for me running it on windows  
**\<pero>** well it's just a titlebar  
**\<fluffypony>** ok let's discuss it later, meeting bot coming online  
**\<Jaquee>** ok  
**\<pero>** it's not going to consistent - some platforms might have it maximized  
**\<pero>** like on mobile  