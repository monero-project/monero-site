---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-07-04
summary: Current project status, Roadmap, Meta issues, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**tini2p** hi all, meeting about to start in ~3min  
0: Greetings  
hi  
agenda: tini2p/meta#17  
1: What's been done  
ECIES-X25519-AEAD-Ratchet updates  
  
**tini2p** have been working with zzz on updating the proposal, and getting it closer to finalization  
got my code to match up with the current version of the spec  
we're at a little bit of a crossroads for how the new session handshake should happen, and how closely we should follow Noise  
I'm going to code up something that follows the N, XK, and IK patterns for One-Time, Unbound, and Bound sessions respectively  
that's more-or-less what's in the spec, but zzz and I haven't come to full agreement on exactly what that should look like in terms of our implementation  
so I'm going to code up something to get e2e sessions working, and if we come to consensus that it should be different, I'll change my code  
  
**tini2p** I still need to implement session management for ECIES, and Elligator2  
Elligator2 is going to require some work  
will talk more about that in the next agenda section  
I wrote up a draft spec for tunnels under ECIES: https://gitlab.com/tini2p/meta/blob/master/docs/ecies-tunnels.md and https://geti2p.net/spec/proposals/152-ecies-tunnels  
the formatting I did is a bit wonky on the I2P site (I'm new to the rst formatting)  
it's very much still in the draft phase, but gives me something to implement for the upcoming alpha release  
  
**tini2p** the goal of the spec is to gradually incorporate ECIES crypto into tunnel building and encryption, eventually phasing out ElGamal+AES  
the spec doesn't make changes to the current ElGamal+AES crypto, as those hops/gateways will be treated as not knowing about the changes in the document  
to ElGamal routers, ECIES hops should look like any other ElGamal router  
I'm going to finish up the session management work I have for ECIES and start implementing tunnels over the next week, hopefully finishing by alpha release  
also about 3/4 through with swapping in standalone-ASIO  
will also be moving Catch2 to a submodule to further reduce system dependencies  
  
**tini2p** BearSSL swap-in will be put on hold for the time being  
I may crib their constant-time AES implementation, depending on how easy it is to separate from the rest of the library  
all credits and licenses will remain intact, of course  
other than that, no SSL is needed in core atm, so an SSL/TLS dep doesn't really make sense  
it will be needed in client code (for downloading reseed files), but that is going to be a separate repo  
LibreSSL or WolfSSL will likely be used there, for compatibility with standalone-ASIO  
long ways away though  
So some of that kind of bled over into the next section  
2: What's next  
  
**tini2p** as I said, continued dev on the few remaining pieces of ECIES session management, and the bulk of the work for Tunnels  
Tunnels will be taking most of my time, and it will be a crunch to get it in by next Wednesday  
I will include net tests that communicate via tunnels across local host, and may be able to hack something together for an integration test running on separate machines  
the separate machine test will likely be very manual and not run in CI for the time being  
oh, and CI is working now using GitLab CI!  
After Tunnels and ECIES are in a working state, I will tag the first Alpha release  
  
**tini2p** Alpha release on 2019-07-10!  
(dev gods willing and kind)  
this release will not include any client functionality, and the router will be in a very rough state  
there is still a large amount of code cleanup, and added fuzz test suites that need to be added  
after release, my focus will be on writing fuzz tests, and fixing any bugs that uncovers  
I've done my best to follow safe coding practices, and write good code. This is C++, and a somewhat large codebase, though. So there are likely to be more than a few bugs  
As part of the testing effort, I will also be incorporating the Elligator2 hacspec validation script: https://tools.ietf.org/html/draft-irtf-cfrg-hash-to-curve-01#appendix-C.4  
  
**tini2p** this will be to validate whatever Elligator2 implementation I end up going with, likely https://github.com/Kleshni/Elligator-2 or adding wrappers around libSodium's implementation to handle Curve25519 and the inverse map  
not sure the Ed25519 implementation will work for Curve25519 by converting the points before and after applying the inverse map and map, but maybe it does  
luckily the hacspec script does Curve25519 Elligator2 map, so it can be used in a test to validate the implementation  
I would be more comfortable with a reference Curve25519 implementation, but none exists...  
  
**tini2p** the Kleshni code operates on Curve25519, and has a C implementation, so if it validates via the hacspec script for hash-to-point Elligator2 map, that may be the best way forward  
there still isn't a validation script for point-to-hash, nor a reference impl, nor reference test vectors, so I'm still very cautious about implementing  
many of my concerns would be soothed if those things existed  
such is life  
3: Questions / Comments  
@tini2p\_gitlab crickets  
  
**tini2p** right, so...  
4: Next meeting time  
There will be a short meeting next Thursday, 2019-07-11 18:00 UTC to discuss the success or failure of the Alpha release.  
If I'm not able to have Tunnels + ECIES working by next Wednesday, I will talk about a pushed-back release date.  
then there will be a regular meeting 2019-07-18 18:00 UTC, and meetings will return to every two weeks  
thanks to the new faces for joining the channel!  
  
**tini2p** feel free to interact as much or little as you please  
meeting over  
@tini2p\_gitlab throws the gavel in the air  
