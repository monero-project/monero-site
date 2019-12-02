---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-10-03
summary: Current project status, Roadmap, Meta issues, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**\<tini2p\_gitlab>** meet time    
**\<tini2p\_gitlab>** 0: Greetings  
**\<tini2p\_gitlab>** hi all  
**\<tini2p\_gitlab>** 1: What's been done  
**\<tini2p\_gitlab>** an incredible amount of refactoring, and router context impl  
**\<tini2p\_gitlab>** a lot of the early code that I wrote in the first months of the project has returned to bite me  
**\<tini2p\_gitlab>** I've spent a good amount of time correcting early design and implementation mistakes  
**\<tini2p\_gitlab>** work remains on the refactoring front, but it works  
**\<tini2p\_gitlab>** the real test will come with cross-implementation integration tests (post-alpha)  
**\<tini2p\_gitlab>** you can see my progress in the `context` branch: https://gitlab.com/tini2p/tini2p/tree/context  
**\<tini2p\_gitlab>** I have a bit more work to do cleaning things up, and making the context work without so much manual interaction  
**\<tini2p\_gitlab>** but tunnel messages, and end-to-end ECIES messaging works over localhost!  
**\<tini2p\_gitlab>** you can see for yourself here: https://gitlab.com/tini2p/tini2p/blob/context/tests/net\_tests/router/context.cc  
**\<tini2p\_gitlab>** notably, this test shows an end-to-end ECIES session over inbound and outbound tunnels: https://gitlab.com/tini2p/tini2p/blob/context/tests/net\_tests/router/context.cc#L402  
**\<tini2p\_gitlab>** you can also see that I'm manually adding tunnels, selecting which router infos are used for tunnel hops, and manually creating the LeaseSet  
**\<tini2p\_gitlab>** so all that needs to be automated, and wrapped in functions inside the router context itself  
**\<tini2p\_gitlab>** I'll be working on that for the remainder of today, and pushing an alpha release candidate today or tomorrow  
**\<tini2p\_gitlab>** I'll leave the alpha candidate open for review for one week before merging into master  
**\<tini2p\_gitlab>** I've also updated my ECIES impl to \*mostly\* match what is in the current revision of [144](https://geti2p.net/spec/proposals/144-ecies-x25519-aead-ratchet)  
**\<tini2p\_gitlab>** where there are TODOs and otherwise murky content, I've filled in the gaps  
**\<tini2p\_gitlab>** the proposal is still highly in flux, and I will continue to update my impl until we reach a stable spec  
**\<tini2p\_gitlab>** over the last few meetings, zzz, orignal, the rest of the I2P devs, and I have been making a lot of progress  
**\<tini2p\_gitlab>** zzz is dedicating time to the next I2P release, and will return focus to 144 afterward  
**\<tini2p\_gitlab>** they have stated an estimate for end-of-year for a stable spec/rollout in Java I2P impl code  
**\<tini2p\_gitlab>** I'm hoping to also be ready with some client code (I2CP, SAMv3, Reseed) around that time to do full integration tests with Java I2P and i2pd  
**\<tini2p\_gitlab>** (ire too if str4d is ready :)  
**\<tini2p\_gitlab>** after alpha, I'll also be implementing ElGamal tunnel building, so that tini2p users will be able to build tunnels through existing Java I2P and i2pd routers  
**\<tini2p\_gitlab>** after that, Reseed  
**\<tini2p\_gitlab>** between now and next week, I'll be working on more bug fixes, the automation of router context stuffs, and trying to put together instructions for running tini2p routers over a docker testnet  
**\<tini2p\_gitlab>** docker testnet may wait until after alpha release, since I have net-tests that show full end-to-end communication (even if it is only over localhost)  
**\<tini2p\_gitlab>** that was 2: What's next  
**\<tini2p\_gitlab>** :0  
**\<tini2p\_gitlab>** 3: Comments / questions  
**\<tini2p\_gitlab>** then that leaves  
**\<tini2p\_gitlab>** 4: Next meeting  
**\<tini2p\_gitlab>** will be a short update next week for alpha release: 2019-10-10 18:00 UTC  
**\<tini2p\_gitlab>** thanks for reading  
**\<tini2p\_gitlab>** @tini2p\_gitlab kick juggles the gaffer like a hacky-sack  
