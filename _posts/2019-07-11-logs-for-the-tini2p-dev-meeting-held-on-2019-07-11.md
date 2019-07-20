---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-07-11
summary: Current project status, Roadmap, Meta issues, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**tini2p** 0: Greetings  
hi  
1: Update on alpha release  
planned on releasing the alpha version of tini2p yesterday, but ran into a number of bugs while writing the ECIES SessionManager and related tests  
some of them were holdovers from early LeaseSet2 code. a number of them though must have been the products of late-night coding or some other mystery  
either way, patches are in the ecies branch, where you can also see what I've been working on  
I'm going to take another couple weeks to finish up the remaining parts of ECIES, and implement ECIES tunnels according to the draft spec I wrote up: https://gitlab.com/tini2p/meta/blob/master/docs/ecies-tunnels.md  
  
**tini2p** I'll also be writing up spec patches for Prop144 ECIES to make it actually match a secure bi-directional protocol like is claimed  
currently, following the spec, it is a one-way protocol with inconsistencies for claims in the "Pairing and Binding" sections  
there are also large inefficiencies in the "pictures" that zzz added for HTTP GET and POST examples  
they are based on how ElGamal currently works, and imho we should not continue these design failings going forward  
there is no legitimate reason to codify the design flaw in specification  
  
**tini2p** for a review of a recent discussion with zzz on the subject: tini2p/meta#19  
best I can tell, the biggest reason zzz puts forward for a one-way protocol using one-way Noise handshake patterns is "that's how it works in ElGamal/AES+SessionTags" and "0-RTT means sending payloads with the first packet"  
the second reason about 0-RTT I can partially understand, but Noise specifies the IK (two-way pattern) for 0-RTT protocols  
payloads can be sent with the first part of the handshake, making it 0-RTT, even in zzz's definition. however, Noise also specifies finishing the handshake with a reply DH to get the full security benefits of the IK handshake  
see the tables in "Payload Security Properties": https://noiseprotocol.org/noise.html#payload-security-properties  
  
**tini2p** using the X one-way handshake (never finishing the IK pattern) as zzz suggests weakens the protocol, and leaves it vulnerable to Key Compromise Impersonation attacks  
it also leaves the protocol vulnerable to replay, and only guarantees forward secrecy for the sender  
imo, those are unacceptable for the streaming (bound) versions of ECIES. especially when we have the opportunity to add protections against those vulnerabilities by just adding the other half of a single round trip  
hopefully, zzz will accept the spec diffs, and ECIES-X25519-AEAD-Ratchets will be as strong as it can be  
  
**tini2p** over the next couple weeks then, I will be writing the spec diffs, implementing ECIES Tunnels, and hopefully releasing alpha  
fingers crossed I won't run into too many more bugs before then  
alpha release will likely only include ECIES-only tunnels, but may include the interop with current ElGamal tunnel building  
when ElGamal interop is in-place, tini2p routers will be able to build tunnels through existing ElGamal routers  
that is the goal at least  
there will still be no client features for alpha release, as I haven't even begun to work on the client-facing functionality  
the goal for alpha is to have end-to-end sessions through some form of tunnels with ECIES routers on both ends of the end-to-end session  
  
**tini2p** after that is working, I can move onto fuzz testing the living hell out of my implementation, building client features, doing global cleanup, and add logging, etc.  
logging actually may be left to client applications, TBD  
anyway, that's it for this short meeting  
will check in again next Thursday 2019-07-18 18:00 UTC  
@tini2p\_gitlab slides the gaffer slowly across the table  
