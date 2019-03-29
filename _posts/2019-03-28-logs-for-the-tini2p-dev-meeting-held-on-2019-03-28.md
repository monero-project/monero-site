---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-03-28
summary: Project infrastructure, Current status, Roadmap, I2P proposal implementation, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**\<oneiric\_>** 0. greets  
**\<oneiric\_>** hi  
**\<Corklander>** Hey!  
**\<endogenic>** o/  
**\<oneiric\_>** 1. Project infrastructure / DevOps  
**\<kinghat>** hi all  
**\<oneiric\_>** recently setup CircleCI, Docker and Bitbucket CI pipelines  
**\<oneiric\_>** going to try out Drone CI (integrates w/ GitLab), and decide on a final CI provider  
**\<oneiric\_>** will keep alternative configs in contrib/  
**\<oneiric\_>** got a basic Docker image setup with everything needed to build tini2p    
**\<oneiric\_>** need to fix net tests to be able to run in a container for accurate coverage stats  
**\<oneiric\_>** other than that, CI is more-or-less setup  
**\<oneiric\_>** will be experimenting/playing with gitea over the next weeks, and mirror GitLab to GitHub, BitBucket, and gitea  
**\<oneiric\_>** unfortunately lost access to tini2p account on GitHub, though still have push ability  
**\<oneiric\_>** main github repo is now: https://github.com/tnii2p-project/tini2p  
**\<Corklander>** 404 :(  
**\<oneiric\_>** derp  
**\<oneiric\_>** type  
**\<oneiric\_>** typo  
**\<oneiric\_>** my fingers are terrible today  
**\<oneiric\_>** https://github.com/tini2p-project/tini2p  
**\<Corklander>** Yea!  
**\<oneiric\_>** -\_-  
**\<oneiric\_>** lol  
**\<oneiric\_>** anyway  
**\<oneiric\_>** any questions/comments? i think that's all for infrastructure stuff.  
**\<Corklander>** Do you see any dependency problems with Drone CI or the other choices? (I haven't used them so I'm not sure about any restrictions/costs.)  
**\<oneiric\_>** most of them i've seen are basically the same  
**\<oneiric\_>** x free hours for builds, then monery  
**\<oneiric\_>** the integrations are the differentiators  
**\<oneiric\_>** circle works with github and bitbucket, drone works with gitlab  
**\<Corklander>** sry, have to go due to emrf, bbl  
**\<oneiric\_>** think there are webhook integrations on most/all major gitserver providers  
**\<oneiric\_>** anyway  
**\<oneiric\_>** ttyl  
**\<oneiric\_>** anything else on 1?  
**\<oneiric\_>** 2. Current project status / what's been done  
**\<oneiric\_>** spent a lot of time replacing crypto++ with libsodium + tiny-AES-c  
**\<oneiric\_>** then realized, "oh, i need an SSL lib"  
**\<oneiric\_>** so, added LibreSSL as a dependency for potential future Keccak patch, and replaced tiny-AES-c with SSL impl  
**\<oneiric\_>** that's in an open MR: https://gitlab.com/tini2p/tini2p/merge\_requests/2  
**\<oneiric\_>** finished with code cleanup, generic crypto/signature wrappers, and a basic experimental ECIES-X25519-AEAD-Ratchet impl  
**\<oneiric\_>** merged MR: https://gitlab.com/tini2p/tini2p/merge\_requests/1  
**\<oneiric\_>** currently working on generic wrappers for the proposed Blake2b EdDSA variants  
**\<oneiric\_>** which i will discuss in 4  
**\<oneiric\_>** questions/comments on 2?  
**\<endogenic>** awesome progress  
**\<oneiric\_>** will also hopefully be able to help zzz with ECIES testing (fingers-crossed)  
**\<oneiric\_>** thanks endogenic :)  
**\<oneiric\_>** 3. Short-term road map  
**\<oneiric\_>** implement the Blake2b sig variants to help other I2P projects with testing  
**\<oneiric\_>** implement tunnels + basic netdb  
**\<oneiric\_>** if lmdb interface is simple enough, will skip past doing blockfile format, and just use lmdb for addressbook/netdb needs  
**\<oneiric\_>** that's where i want to be anyway :)  
**\<oneiric\_>** adding alpha and beta milestones to the gitlab project  
**\<oneiric\_>** projected alpha release for 2019/07/10  
**\<oneiric\_>** with a beta following 3 months after  
**\<oneiric\_>** will see how this first cycle goes, but will try to keep to that release schedule, or shorten it if feasible  
**\<endogenic>** good plan  
**\<endogenic>** the minimum usable set is generally critical to keep in mind to avoid getting lost along the way  
**\<endogenic>** dont think that's a huge issue here given the name "tiny" though :)  
**\<endogenic>** good origins  
**\<oneiric\_>** yeah, if shorter, may do alpha (2 months) -> beta (2 months) -> point release  
**\<oneiric\_>** true, as part of 4. i'll talk about the current sig variant proposals, and which of those will end up in tini2p  
**\<oneiric\_>** which is actually a nice transition (smooth endogenic)  
**\<oneiric\_>** 4. I2P proposal implementation  
**\<oneiric\_>** https://geti2p.net/spec/proposals/123-new-netdb-entries  
**\<oneiric\_>** https://geti2p.net/spec/proposals/144-ecies-x25519-aead-ratchet  
**\<oneiric\_>** https://geti2p.net/spec/proposals/146-red25519  
**\<oneiric\_>** https://geti2p.net/spec/proposals/148-eddsa-blake2b-ed25519  
**\<oneiric\_>** we went over 123 and 144 last meeting, iirc  
**\<oneiric\_>** one thing that has changed, zzz has said he will be switching focus back to ECIES, and hammering out some spec details  
**\<oneiric\_>** so we are getting closer to a finalized spec, which will reduce code footprint  
**\<oneiric\_>** 146 and 148 are the new sig variant proposals  
**\<oneiric\_>** for eddsa  
**\<oneiric\_>** RedDSA is needed for blinding encrypted lease sets, and Blake2b variants are needed to protect against LEA attacks  
**\<oneiric\_>** Ed25519ctx was also suggested, and is being considered for LEA protection  
**\<oneiric\_>** personally, think Ed25519ctx is gross given the alternatives, but it's in an RFC  
**\<oneiric\_>** RFC 8032 to be specific  
**\<oneiric\_>** the hash function in RFC 8032 isn't specified, other than being a crypto-secure hashing function with 512-bits security  
**\<oneiric\_>** Blake2b satifies all criteria  
**\<oneiric\_>** for full details see the proposals and #ls2 meeting logs  
**\<oneiric\_>** so, my plan is to write generic wrappers for all variants, then keep whichever get accepted  
**\<oneiric\_>** right now, it's looking like RedDSA-Blake2b-EdDSA can be used for all places where a signature is needed  
**\<oneiric\_>** a lot is still up in the air though, and nothing has been finalized yet  
**\<oneiric\_>** any comments/questions on 4?  
**\<oneiric\_>** one more thing actually, EdDSA-Blake2b-Ed25519 could also be used everywhere a signature is used  
**\<oneiric\_>** afaiui EdDSA-Blake2b-Ed25519 can also do blinding needed for encrypted lease sets  
**\<oneiric\_>** 5. Confirm next meeting time  
**\<oneiric\_>** same time two weeks?  
**\<kinghat>** yup  
**\<oneiric\_>** right on, meeting over. thanks to all for attending  
