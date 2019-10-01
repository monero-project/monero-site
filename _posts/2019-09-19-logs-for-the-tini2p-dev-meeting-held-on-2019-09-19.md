---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-09-19
summary: Current project status, Roadmap, Meta issues, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**\<tini2p\_gitlab>** time of the meet  
**\<tini2p\_gitlab>** 0: Greetings    
**\<tini2p\_gitlab>** h  
**\<tini2p\_gitlab>** 1: What's been done  
**\<tini2p\_gitlab>** A lot  
**\<tini2p\_gitlab>** Finished tunnels impl, and merged into master  
**\<tini2p\_gitlab>** (with helpful review from @DavidBurkett)  
**\<tini2p\_gitlab>** I'm still used to being the only person working on the project, so have to habituate myself to a workflow that includes other people  
**\<tini2p\_gitlab>** started work on the router context (what ties all the pieces together)  
**\<DavidBurkett>** Don't change anything because of me. I'm slow and unreliable  
**\<DavidBurkett>** I'll catch up eventually, just keep doing what you're doing :)  
**\<tini2p\_gitlab>** in the process, came across some impl bugs in NTCP2 (fixed), updated NTCP2 to include a testnet v. mainnet netID, and started working on ECIES updates  
**\<tini2p\_gitlab>** no worries, I just meant that you're the first other than me to review my code :)  
**\<DavidBurkett>** Haha, got it  
**\<tini2p\_gitlab>** for the ECIES updates: there has been a lot of them  
**\<tini2p\_gitlab>** zzz pushed updates to move us to something much closer to standard Noise, and I love the changes  
**\<tini2p\_gitlab>** it's a bit of work to change my impl, but all the changes are for the better  
**\<tini2p\_gitlab>** the code is looking much cleaner now  
**\<tini2p\_gitlab>** the cryptographic guarantees are stronger and more clear as well, which is the bigger win imo  
**\<DavidBurkett>** :rocket: Do you have a link to zzz's updates?  
**\<tini2p\_gitlab>** you can follow my work in my context branch: https://gitlab.com/tini2p/tini2p/tree/context  
**\<DavidBurkett>** Ah perfect  
**\<tini2p\_gitlab>** yeah, zzz's updates are pushed to the main 144 proposal: https://geti2p.net/spec/proposals/144-ecies-x25519-aead-ratchet  
**\<tini2p\_gitlab>** we're still working out some kinks in the handshake, and will need to update the ratchet KDFs afterwards  
**\<tini2p\_gitlab>** we are getting \*\*much\*\* closer to finalizing the spec though, which is awesome  
**\<tini2p\_gitlab>** so, my impl may deviate from the spec a bit until we get everything figured out  
**\<tini2p\_gitlab>** we're trying to get as close to standard Noise as possible, while maintaining the necessary properties for ECIES-X25519 stated goals  
**\<DavidBurkett>** That's great news  
**\<tini2p\_gitlab>** definitely  
**\<tini2p\_gitlab>** :smile\_cat:  
**\<tini2p\_gitlab>** the downside to all that is I've spent a good amount of time refactoring, so don't have code that is ready for a release candidate  
**\<tini2p\_gitlab>** long-term it's for the best, in the short-term it's a slog to get to alpha release  
**\<tini2p\_gitlab>** which leads to the next item  
**\<tini2p\_gitlab>** 2: What's next  
**\<tini2p\_gitlab>** continue the refactors for ECIES-X25519  
**\<tini2p\_gitlab>** get something working for end-to-end crypto sessions, and work with zzz on fixing spec bugs (if/when they come up)  
**\<tini2p\_gitlab>** finish the context impl  
**\<tini2p\_gitlab>** create the docker testnet for local integration testing  
**\<tini2p\_gitlab>** idk how long the docker testnet will take, but I'm hoping something minimal will be fairly easy to setup  
**\<tini2p\_gitlab>** if it takes more than a day or two, I'll push an alpha release candidate without the testnet  
**\<tini2p\_gitlab>** the biggest hurdle I see for the testnet is populating the NetDB of the routers with the RouterInfos of the other routers in the testnet  
**\<tini2p\_gitlab>** I don't have reseed impled, so I'll have to do something manual  
**\<zlatinb>** you may find this useful: http://zzz.i2p/topics/2756-testnet-with-lxc-instructions  
**\<tini2p\_gitlab>** really hoping this is the last time I'll have to say this: pushing the alpha release date back another two weeks  
**\<tini2p\_gitlab>** awesome! thank you @zlatinb :)  
**\<zlatinb>** also talk to "obscuratus" on Irc2P, he has a mixed i2pd/java i2p testnet, also with lxc  
**\<tini2p\_gitlab>** right on, I'm hoping to do it with docker for eventual windows support  
**\<tini2p\_gitlab>** right now, tini2p only builds on linux. will be working on cross-platform builds post-alpha  
**\<tini2p\_gitlab>** there's probably a lot of crossover in approach to lxc, so I appreciate the resources. will definitely be reaching out to obscuratus  
**\<DavidBurkett>** Builds on mac also  
**\<DavidBurkett>** But of course, that's based on linux  
**\<DavidBurkett>** I nearly had it building on windows, but I got frustrated and quit :)  
**\<tini2p\_gitlab>** haha wow, thanks for build testing  
**\<tini2p\_gitlab>** yeah, I imagine the windows experience is pretty hellish atm  
**\<DavidBurkett>** np, wasn't intentional. I'm the 0.1% of devs who prefers windows  
**\<DavidBurkett>** So I tried there first  
**\<DavidBurkett>** It wasn't quite as bad as you might think, but 1 of the dependencies was pissing me off lol  
**\<tini2p\_gitlab>** noise-c?  
**\<DavidBurkett>** Yes, that's the one  
**\<tini2p\_gitlab>** yup  
**\<tini2p\_gitlab>** that's a bear  
**\<tini2p\_gitlab>** I'll be moving all the noise stuff into the project proper, and remove the noise-c lib  
**\<tini2p\_gitlab>** it's a great reference, but making it cross-platform is such a pain  
**\<DavidBurkett>** Excellent. Let me know when you want me to try building again  
**\<tini2p\_gitlab>** will do, I appreciate the offer  
**\<DavidBurkett>** :thumbsup:  
**\<tini2p\_gitlab>** long-term I hope to contribute a CMake build system to noise-c  
**\<tini2p\_gitlab>** atm that's low priority though  
**\<tini2p\_gitlab>** that will be extremely time-consuming, but I want to give something back to the project  
**\<tini2p\_gitlab>** rweather did a lot to help me understand Noise :)  
**\<tini2p\_gitlab>** so, that's more-or-less what I'll be working on: router context, ECIES updates, some NetDB stuff, docker testnet  
**\<tini2p\_gitlab>** 3: Questions/comments  
**\<tini2p\_gitlab>** alright, so that's the meeting  
**\<tini2p\_gitlab>** will do my best to get a release candidate out by next Thursday, and alpha release the following week  
**\<DavidBurkett>** Looking forward to it  
**\<tini2p\_gitlab>** :+1:  
**\<tini2p\_gitlab>** 4: Next meeting  
**\<tini2p\_gitlab>** 2019-10-03 18:00 UTC  
**\<tini2p\_gitlab>** holy shit, we're already almost in October  
**\<tini2p\_gitlab>** thanks all for attending  
**\<tini2p\_gitlab>** @tini2p\_gitlab twirls the gavel  
