---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-07-18
summary: Current project status, Roadmap, Meta issues, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**tini2p** 0: Greetings  
hi  
1: What's been done  
Not a lot code-wise, spent quite a bit of time working on spec proposals  
zzz made some updates to 144 examples, and my suggestions for a NewSessionReply are being reviewed  
as of today, here is a diff with my suggestions: https://gitlab.com/snippets/1876476  
  
**David Burkett**   
  
**tini2p** hi   

**David Burkett** Don't mind me. Just listening in and hoping to learn something :)  
  
**tini2p** :) right on, glad to have you here  
feel free to ask questions or make comments on anything  
  
**David Burkett**   
  
**tini2p** here are my latest updates to the ECIES Tunnels draft proposal: https://geti2p.net/spec/proposals/152-ecies-tunnels  
got some feedback from zzz today, so will make a couple more additions  
will more or less be moving forward with the changes in the 144 diffs, and the 152 draft  
will hopefully have something working by next Thursday  
then alpha release  
the release will be a bit ugly (code-wise), and will likely change quite a bit between alpha and beta release  
but the core functionality will be in place, and at the least building end-to-end sessions will be possible through tini2p routers  
  
**David Burkett**  That's excellent!  
  
**tini2p** it is NOT recommended to build connections on live networks, or contexts that require strong privacy  
given that tini2p is in the earliest stages, there are likely bugs, and there will be very few routers running tini2p  
  
**David Burkett** Will close my PR to bitcoin core and await further maturation :)  
  
**tini2p** :)  
what do you mean? use it for all the things :P in all seriousness it still needs a lot of work before recommending use to other projects  
  
**David Burkett** just trolling lol  
  
**tini2p** if I get interop working with ElGamal tunnels working, technically it would be possible to build tunnels through existing I2P routers  
I will add a test network netid to prevent interaction with the live network by default  
  
**David Burkett** That's what I'm looking forward to...I think. So many protocols, it's a lot to wrap my head around  
  
**tini2p** so, it means you could build outbound and inbound tunnels using existing I2P routers as intermediary hops  
the ends of the end-to-end session would still need to be tini2p routers, until we get 144 fully fleshed out  
i.e. you won't be able to connect to existing I2P destinations  
  
**David Burkett** Still fine with me. So the "tunnels" would be the same protocol as existing destinations, but the "sessions" would be a different protocol?  
Or am I wildly incorrect  
  
**tini2p** even the interop with existing I2P routers as tunnel hops is a maybe, and remains to be tested  
so lets take the situation where router A wants to talk to router B  
router A builds and outbound tunnel with outbound endpoint of OA  
router b builds an inbound tunnel with inbound gateway IB  
A and B will need to be tini2p routers  
  
**David Burkett** G  
got it  
  
**tini2p** the routers between A and OA, and B and IB can be tini2p or existing I2P/i2pd routers  
OA and IB can be tini2p/I2P/i2pd as well  
that's the goal anyway, integration and end-to-end tests on a test network still need to be done  
that's why I'll be adding a test network netid to prevent interacting with the live I2P mainnet by default  
  
**David Burkett** So if a p2p project decided to use tini2p, it could only communicate with other peers running i2p, but theoretically, it would get the anonymity set of the i2p network as a whole, correct?  
  
**tini2p** it will require the user to change the code and recompile  
if I can get tunnel interop working it would be able to use the existing anonymity set for tunnel building  
  
**David Burkett** :thumbsup: Understood  
  
**tini2p** however, it may still be possible to detect tini2p destinations, so may still have a limited anonymity set in that way  
for full tini2p stealth mode, it would require using blinded leaseset2 published to netdb  
I haven't implemented blinded leaseset2, and they aren't live for I2P or i2pd yet either  
  
**David Burkett** I don't necessarily need to hide participation, so that would be fine. But it would be difficult to detect which participants are communicating with each other, correct?  
  
**tini2p** though I think i2pd has made a ton of progress there  
tini2p hop participants in tunnels should look like any other I2P hop to existing non-tini2p routers  
  
**David Burkett** excellent  
  
**tini2p** they will be distinguishable to tini2p tunnel creators  
that should change if 152 is adopted network wide, but that is still a long way off  
we're still in the earliest stages of discussing 152  
long way from seeing implementation and adoption by other implementations  
if it is at all  
  
**David Burkett** Ah, using the context I just gained from this discussion, I now at least understand what's being proposed in 144 & 152. So thanks!  
  
**tini2p** awesome, happy to help!  
144 is closer to adoption, and when the spec is finalized, tini2p will be able to connect to any destination implementing the spec  
zzz has longer estimates than I do for finalization though, so TBD  
152 might get split into two proposals, one for tunnel building changes, one for tunnel layer encryption  
there appear to be less concerns with tunnel building, and the changes for tunnel layer encryption introduce Blowfish as a new crypto primitive for nonce encryption  
  
**tini2p** tini2p and ECIES routers need the tunnel building changes to build through existing I2P ElGamal routers, but can use existing tunnel layer encryption for passing/encrypting messages to existing tunnel participants  
e.g. there is no way for an ECIES identity to encrypt to an ElGamal identity (no X25519-ElGamal key exchange algo exists)  
  
**David Burkett** Why Blowfish?  
  
**tini2p** how 152 proposes solving this is using an ElGamal identity to encrypt build records to existing ElGamal hops, and an ECIES identity for ECIES hops  
Blowfish is a 64-bit block symmetric cipher, which is normally a bad idea with new protocols  
  
**David Burkett** So 152 == Prefer ECIES, but support both for interoperability?  
  
**tini2p** however, it is only used to encrypt nonces used for ChaCha20 tunnel layer encryption  
re: interop, mostly yes. though at first, ElGamal will be preferred in practicality, given they are the entirety of the available hops atm  
  
**David Burkett** And if a single nonce is compromised, ChaCha20 still remains relatively secure compared to other stream ciphers. So that makes sense  
  
**tini2p** the only existing practical attack against Blowfish is the Sweet32 birthday attack, which gets block collision in ~2^32 blocks  
yeah if the nonce gets compromised, it doesn't affect the ChaCha20 encryption  
  
**David Burkett** O, then why does Schneier discourage it? Just because it's only 64 bytes?  
\*bits :)  
  
**tini2p** nonce compromise does allow two non-consecutive tunnel hops to know they are in the same tunnel, which has some consequences for I2P  
64-bit block ciphers are not as good as 128-bit+ block ciphers when using it for full confidentiality, yeah  
  
**David Burkett** Gotcha, I think I've seen him recommend threefish over blowfish before, even though both are 64-bit. O well, I digress. Carry on  
  
**tini2p** in this case though, we need Blowfish for it's 64-bit block size because ChaCha20 only has a max of 96-bit nonces  
(in the ietf version)  
threefish is 64-bit?  
if so, I'll change it to threefish  
  
**David Burkett** I believe, let me check  
  
**tini2p** the 64-bit block is what's important, so if there is a stronger algo supporting 64-bit block size, I'll use that  
  
**David Burkett** https://en.wikipedia.org/wiki/Threefish  
Looks like it  
  
**tini2p** :rocket: so nice, thank you!!!  
honestly preferred something stronger than Blowfish, so will look into threefish, and it's support in crypto libs  
  
**David Burkett** Please confirm though. When it comes to crypto, all 'facts' come straight from my backside.  
  
**tini2p** sure, I will investigate  
  
**David Burkett**   
  
**tini2p** While nonce compromise doesn't destroy the crypto system, it does leak info to attackers that could enable strong attacks between non-consecutive tunnel hops  
  
**David Burkett** Makes sense  
  
**tini2p** i.e. if E -> H -> G are tunnel hops, and E + G are colluding attackers, compromising H's nonce would allow E + G to know they are in the same tunnel  
it doesn't fully destroy the anonymity of using tunnel proxies, but severely compromises it  
so want to protect against it as much as possible  
why I set the limit of tunnel messages to 2^31, so that Sweet32 attacks against Blowfish aren't possible  
though even 2^30 messages will never be practically reached in 10 minute tunnels  
it's on the order of millions of messages per second  
existing tunnel layer encryption uses double encryption with AES256/ECB for tunnel IVs to defeat the described confirmation attack  
duplicate IVs are also rejected, further protecting against the attack  
going to run some tests on that, but makes sense atm  
  
**tini2p** i.e. see if observable patterns can be detected in IVs that only change a bit or two  
if they can, then the changes for tunnel layer encryption become much more important  
  
**David Burkett** There shouldn't be any observable patterns. If changing 1 bit is in any way detectable, the cipher failed  
  
**tini2p** my hypothesis going into it though is that they can't  
right  
ECB has its problems, but hopefully it isn't that broken  
2: What's next  
we basically just covered what I'll be working on over the next week  
goal is to get an ECIES impl in place following the 144 diffs, work on solidifying the 152 proposal, and getting a tunnel impl in place  
  
**tini2p** it may only be possible to do ECIES-to-ECIES tunnels by next Thursday, but sometimes miraculous things happen :)  
  
**David Burkett** Indeed. Good luck!  
  
**tini2p** thanks   
3: Comments / Questions  
4: Next Meeting  
2019-07-25 18:00 UTC  
will be discussing alpha release, and then resuming 2-week meeting schedule  
meeting over!  
  
**David Burkett** Thanks @tini2p\_gitlab!  
@tini2p\_gitlab bangs a squeaky toy gavel  
  
**tini2p** thanks for attending!  
