---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-08-08
summary: Current project status, Roadmap, Meta issues, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**\<tini2p\_gitlab>** 0: Greetings  
**\<tini2p\_gitlab>** hi  
**\<tini2p\_gitlab>** 1: What's been done  
**\<tini2p\_gitlab>** Reworked a BuildRequestRecord, BuildReplyRecord, and TunnelBuildMessage to be templated based on symmetric crypto used (AES/ChaCha20)  
**\<tini2p\_gitlab>** reorged the commits, because the changes were verbose, and most (if not all) were for code added in the `tunnels` branch  
**\<tini2p\_gitlab>** Added `Hop`and `OutboundGateway` classes for tunnel message processing  
**\<tini2p\_gitlab>** `OutboundGateway` is still WIP, and will hopefully be finishing up today  
**\<tini2p\_gitlab>** didn't get nearly as much done as I had hoped, so scaling back my expectations a bit  
**\<tini2p\_gitlab>** going to push back alpha release two weeks  
**\<tini2p\_gitlab>** 2: What's next    
**\<tini2p\_gitlab>** will be finishing `OutboundGateway`, and implementing `OutboundEndpoint`, `InboundGateway`, and `InboundEndpoint`  
**\<tini2p\_gitlab>** those are the last of the message processing classes  
**\<tini2p\_gitlab>** dev is somewhat slow because I'm implementing AES + ChaCha tunnels simultaneously (which adds some headache), but it should be worth it in the long-term  
**\<tini2p\_gitlab>** ultimately, I think it is faster to do both simultaneously  
**\<tini2p\_gitlab>** after the processing classes, I'll start implementing tunnel pools and management classes  
**\<tini2p\_gitlab>** given the experience of the past couple weeks, pools + management could take a week each, so alpha may actually be a month away  
**\<tini2p\_gitlab>** hopefully not, and I'll do my best to complete them correctly as fast as possible. correctness takes priority over speed, though  
**\<tini2p\_gitlab>** 3: ECIES Status  
**\<tini2p\_gitlab>** development and discussion on 144 continues  
**\<tini2p\_gitlab>** there has been progress over the last couple meetings, and hopefully we're getting closer to consensus on what 144 goals + spec should be  
**\<tini2p\_gitlab>** zzz is insistent on unlimited 0-RTT messages, and reusing ephemeral key data for cached DH results  
**\<tini2p\_gitlab>** I think both are bad ideas  
**\<tini2p\_gitlab>** unlimited 0-RTT messages opens an attack vector for never completing the handshake, where a mitm on the reply tunnel drops Bob's New Session Reply messages  
**\<tini2p\_gitlab>** or allows the reply messages through, but blocks Alice's Existing Session messages  
**\<tini2p\_gitlab>** reusing ephemeral key data could lead to the same symmetric key being used to encrypt the New Session and New Session Reply payload sections  
**\<tini2p\_gitlab>** in a version of the spec that sends multiple New Session (Reply) messages, encrypting different payload sections with the same key material breaks ChaCha20-Poly1305  
**\<tini2p\_gitlab>** it's a fragile scheme, that requires a lot of analysis and care to get right  
**\<tini2p\_gitlab>** I'm proposing that instead of sending unlimited New Session and New Session Reply messages, we send one each, including up to the maximum data for one payload section (~60KB)  
**\<tini2p\_gitlab>** until the New Session Reply is received by Alice, she will drop any other messages from the client destined for Bob  
**\<tini2p\_gitlab>** somewhat outside the protocol, I'm suggesting Alice's router send a "please resend in X seconds/minutes" as a reply to the client until the session is established  
**\<tini2p\_gitlab>** similarly, if Bob's initial reply is too large to fit in one Payload section, Bob will send a "please resend after session established" message to Alice  
**\<tini2p\_gitlab>** Alice can then send a "reply was too large for initial message, please retry the request"  
**\<tini2p\_gitlab>** ^ can send that to the client  
**\<tini2p\_gitlab>** alternatively, Alice and Bob could queue messages until session establishment, but that could lead to resource exhaustion. less desirable and less secure  
**\<tini2p\_gitlab>** latest I2P LS2 meeting log: https://gitlab.com/tini2p/meta/issues/26  
**\<tini2p\_gitlab>** I'll likely be implementing the drop-until-secure, single New Session (Reply) scheme until we come to consensus on what to do  
**\<tini2p\_gitlab>** 4: Next meeting  
**\<tini2p\_gitlab>** 2019-08-22 18:00 UTC  
**\<tini2p\_gitlab>** @tini2p\_gitlab juggles baffer like a hacky sack  
**\<tini2p\_gitlab>** thinking further about the "resend request" message Bob sends when the reply is too large for a single payload section, Bob could include the original request in the message  
**\<tini2p\_gitlab>** Alice could then extract the request, and resend in the first Existing Session message  
