---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-04-11
summary: Current project status, Roadmap, Meta issues, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**tini2p** hi all, meeting in ~10 min.  
**tini2p** Meeting agenda:  
Greetings  
Proposals + status updates  
Short-term goals  
Meta issues  
Confirm next meeting time  
**kinghat** hola  
**tini2p** bueno @k1nghat  
Greetings  
looks taken care of ;)  
Proposals + status updates  
agh, effin markdown  
**tini2p** Ecies updates  
zzz has made another round of updates to Proposal 144 (ECIES-X25519-AEAD-Ratchet), including:  
  
KDF 1, 2 & 3 for new session message  
More fleshed out handshake protocol  
Elligator2 for point obfuscation in new session message part 1  
LeaseSet2 basic implementation tini2p/tini2p!4.  
  
For full implementation, need to implement a blinding signature scheme  
Which scheme to implement:  
Red25519 (Ed25519-based scheme on prime-order subgroup)  
Ed25519-Blinded (Ed25519-based scheme from tor)  
XEdDSA-Gimli/Blake2b/Sha3/Sha512 (X25519-based scheme on prime-order Montgomery curve)  
in Signal spec, hash is an unspecified, crypto-secure hashing function  
Sha512 is the default in spec, Gimli is the default in libHydrogen  
Have heard some concern voiced over implementing new proposals, with no backwards compat to current protocols.  
  
I understand the want to have a router that can talk to routers on those older protocols.  
Service is better on old stuff, until new stuff is widely propagated, old stuff is known to work, etc.  
  
The main goals of this project are to implement a minimal, secure I2P router library, and promote/develop the new I2P protocols.  
  
I've even considered splitting off tini2p into separate libraries, each using only one end-to-end crypto and one signing scheme.  
  
However, I'm only one person, and currently the sole developer on this project.  
  
ElGamal and DSA are being shelved soon(tm).  
  
There are also existing router implementations that handle backwards compatibility very well, use those for talking to old stuff.  
  
Updated Prop. 144  
any questions/comments?  
ok, onto the next  
**tini2p** 3: Short-term goals  
Short-term goals  
With the new end-to-end crypto & blinded signature schemes, it's necessary to take on a crypto library as a full dependency.  
The high-level public APIs are great for standard use, but fall short when implementing new crypto (by design).  
Adding a crypto library as a submodule dependency will grant full control over the internals, and exposing new APIs.  
  
LibreSSL  
Great support and documentation for X25519 EC arithmetic  
Internal EC functions are low-level enough to implement needed schemes  
Has enough other crypto to be the sole crypto library used in tini2p  
EC arithmetic done on Montgomery curve, no bi-map swapping  
Blake2b and/or Sha3 would be ported from OpenSSL (if needed)  
potential for upstream patches  
patches are unlikely to be included (code bloat)  
libSodium  
Support for X25519 EC arithmetic, but very limited/high-level (as intended)  
X25519 maths are wrappers around ref10 and Ed25519 (faster, secure (as LibreSSL)?)  
X25519 ref10 math is available, but implementing Elligator2 inverse map requires special care  
All EC arithmetic done on Ed25519  
Convert input(s) to Ed25519 point(s), do stuff, convert result to X25519 point  
libHydrogen  
Could act as a replacement for libSodium  
First-class support for X25519 arithmetic (it's the only crypto primitive for signing/encryption)  
Uses Gimli for a generic hashing function  
Would serve as basis for an XEdDSA-Gimli-384 signature proposal  
X25519 maths are low-level enough to be useful for building ECIES-X25519  
Very small code footprint  
All above libraries are unlikely to adopt schemes used in I2P, which means maintaining a local fork dependency for any custom crypto.  
  
str4d mentioned working on a potential new C crypto library based (at least in part, iirc) on dalek design.  
FWIR, the new library would be low-level enough to implement new schemes, while still providing some protections to the user.  
  
For the near-to-mid future:  
  
Experiment w/ adding libHydrogen as a dependency, replacing uses of Blake2b with Gimli  
Implement XEdDSA and ECIES primitives inside (libHydrogen, LibreSSL), and expose simple API  
Write wrappers around libHydrogen API, if it's already low-level enough for XEdDSA + ECIES  
Slightly hesitant to add LibreSSL as a full dependency due to library size.  
LibreSSL is much smaller than OpenSSL, but much larger than libHydrogen.  
If tini2p can make due with LibreSSL/OpenSSL as a system dependency, it will be much better for overall project/binary size.  
That being said, if LibreSSL is a local fork, all unecessary bits can be removed with care (when such concerns become important).  
  
Usually leave request open for aprox. 1 week, gives a chance for others to review, and to come back to it with fresh eyes for final self-review.  
  
Outside of crypto concerns, will be working on Tunnels + NetDb, which are largely independent of crypto concerns  
ugh repeating muhself  
any questions/comments?  
**kinghat** im here, i just for the most part dont know what it all means. more of a cheerleader! :P  
**tini2p** heh, feel free to ask questions kinghat  
or, can get you some pom-poms ;)  
4: Meta issues  
Setting up CI on GitLab.  
Working on adding webhooks to the gitter, so those interested can stay updated.  
Setting up IRC bouncer/server  
^ listed in rough order of priority  
CI should be the most simple, just haven't dedicated time to it  
same with the webhooks for this gittter room  
The IRC bouncer requires funds + time, and is fairly low-priority  
costs are purely for hosting  
**kinghat** check out thelounge.chat  
**tini2p** Would like to have a presence on IRC, but other things are taking precedence. Especially since other means of public communication are available.  
will do, thanks @k1nghat  
**kinghat** i also have a VPS host my own thelounge, could probably setup an account if needed.  
**tini2p** sure, but that doesn't really solve the problem  
have had other offers for people to host my IRC bouncer. personally not comfortable with that, though i appreciate the offers  
it really just comes down to paying for a VPS, and setting up a bouncer. simple, but annoying and costs funds  
**kinghat** im in the us. i pay hetzer $2.50 a month for the VPS.  
**tini2p** anyway, focus over the next two weeks will be implementing basic NetDb, updating ECIES implementation, and starting I2NP/Tunnels  
$2.50 a month that i don't need to spend atm  
**kinghat** sure, just letting you know its the cheapest ive found.  
or just host it at home for $free50.  
**tini2p** of course :)  
anyway, spam and other bullshit have made IRC an annoying place to hang out. not in a hurry to rejoin  
i'm on Irc2P, here on gitter, reddit, Wire... how many ways do people need to contact me?  
5: Confirm next meeting time  
Same time, two weeks? So, 2019-04-25 @ 18:00 UTC  
**tini2p** alright, end of meeting, thanks to all for attending  
which means you @k1nghat  
;)
