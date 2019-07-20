---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-06-20
summary: Current project status, Roadmap, Meta issues, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**tini2p** Greetings  
hi  
apologies for the slightly late start  
1: What's been done  
Since last meeting, quite a bit has been done  
The KDF for each section of new session messages is complete  
as well as the new session message section data structures  
the new session message data structure itself, and the existing session message still need completion  
Elligator2 also needs impl, but I am saving that for after all the other moving parts are in place  

**tini2p** also got GitLab CI working, replacing the unused BitBucket + CircleCI setups  
Coveralls is still having a little issue reporting coverage (because of tini2p being header-only), so there is a little bit of work still to be done  
but unit and net tests are now being run for each merge request, which is a very nice improvement  
(was running them manually prior)  
some cleanup of the ChaCha20Poly1305 wrappers was needed to get in-place en/decryption working  
as well as some other global housekeeping, mostly focused on data blocks  

**tini2p** made upstream patches to I2P 144 spec in collaboration with zzz (many thanks)  
minor stuff, but important for getting ECIES working. will continue to submit patch diffs as work on ECIES and tunnels under ECIES continues  
last I2P ls2 meeting was a little short, but zzz and other I2P devs are focusing elsewhere atm for the upcoming Java I2P release.  
did some research into lock-free algorithms, and other thread-safe algorithms/data structures  

**tini2p** atm, there are no performance bottlenecks, or thread-safety issues that I know of. however, during actual workloads (once the routers are talking over tunnels), I suspect some issues might crop up. I want to get ahead of any issues cropping up, and am investigating the alternatives  
a non-trivial portion of the last two weeks has actually gone into reading papers (not all related to thread-safety), so it's work that doesn't show up directly in the code base  
2: What's next  
finishing up the remaining updates on ECIES (new/existing messages data structs), Elligator2 impl, ECIES session management impl  
the data structs may be finished end-of-day today / tomorrow, while Elligator2 impl and ECIES session management may take up the better part of the next two weeks  
depends on how long Elligator2 takes, as I want to make sure I do it right, and there is currently no canonical reference implementation  

**tini2p** that said, there are validation scripts from DJB & crew (written in Sage), so I will be using those to verify my impl  
the scripts will also need porting to C++, hence why the impl may take some time  
Elligator2 isn't strictly needed to get the moving parts in place, so I may save it for last in the ECIES impl. It is needed for DPI protection, so it will definitely need implementation  
other options were discussed (ChaCha20Poly1305 sym crypto using remote static public key as the symkey), but Elligator2 won out for various reasons  

**tini2p** one of the biggest being trial decryption is more effective for deobfuscation if using ChaCha20 (if DPI boxes know/guess remote static public key), where Elligator2 produces valid Curve25519 public keys for nearly all 32-byte strings  
Elligator2 is also slower than ChaCha20, so DPI decoding would also consume more resources than trial-decryption with ChaCha20  
After ECIES is complete, I will begin work on tunnels under ECIES, and writing a spec once a proof-of-concept impl is in place  
the spec (and PoC impl) will likely undergo many iterations, similar to the other specs involving big changes (see NTCP2 + ECIES itself)  
however, the goal is still to have tini2p routers communicating with each other over tunnels by alpha release (2019-07-10)  

**tini2p** this will be a rough sort of communication, since there will be no client, and the reseed setup will need to be manual, but small steps  
the goal is to have integration tests that perform the e2e communication, which may also be extendable to inter-router communication across I2P implementations (Java I2P, i2pd, ire, etc)  
post-alpha release, I will be working on cleaning up the implementation, continuing work on the tunnel spec, and working toward exposing an api for the client to consume  
some rough thoughts on the client api: basically a reduced SAMv3 to only handle streaming (since there won't be UDP until SSU2)  
SAMv3 will also require an I2CP impl (again reduced to only the streaming bits)  

**tini2p** the client implementation will go into it's own repository for separation of concerns + increased modularity  
so the period between alpha and beta release will be largely dedicated to client implementation  
blinded LS2 may also find its way in there, but given the design goals of tini2p, it will not be priority  
it is a nice-to-have though, and if enough users want it, I can be convinced to devote more attention to it  
all of that is months in the future though, and my immediate focus is on finishing ECIES + tunnels  
3: Questions/comments  
@tini2p\_gitlab crickets  

**tini2p** guess I'm back to being the only active meeting attendee  
4: Next meeting time  
2019-07-04 18:00 UTC  
alright, meeting adjourned  
see you lurkers next time  
@tini2p\_gitlab taps the gavel ever-so-lightly  

**tini2p** ah, looks like I forgot to mention Boost::ASIO replacement + LibreSSL-BearSSL swap. Those things are also planned to happen before alpha release  

**tini2p** apparently, I was a couple hours early for this meeting time. will stick around for a bit past 18:00, if there are any questions / comments  

**tini2p** yeah, so apologies for the early meet, but appears it really was just me again. will double-and-triple check the clocks for next meeting  

**kinghat** i read when i remember i just dont use gitter that often.  
