---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-07-25
summary: Current project status, Roadmap, Meta issues, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**tini2p** 0: Greetings  
hello all  
1: What's been done  
merged ECIES updates for 144 updates + my spec suggestions: tini2p/tini2p!12  
had a long discussion about 144 at this week's LS2 meeting: tini2p/meta#23  
getting closer to a solid spec there, though there is still quite a bit to get done / come to consensus on  
more updates to 152, and got rid of Blowfish: https://gitlab.com/snippets/1878282  

**tini2p** basically, instead of using Blowfish for nonce encryption, tunnel gateways will keep a nonce counter  
they advance the counter for every set of tunnel messages, concatenate the counter to the random tunnelNonce, and participants use the counter to ChaCha20 encrypt the tunnelNonce  
participants don't change the counter value, but do need to verify it against an independent Bloom filter  
there may be a fancy way to validate uniqueness of the counter without a separate Bloom filter, or save space by having a sliding Bloom filter with fewer elements that advances as it becomes full, TBD  
the naive way is just to have two Bloom filters though: one for the tunnelNonces, one for the counters  

**tini2p** unfortunately had to spend more time than I wanted working on specs this last week, so didn't make as much progress on code as I wanted  
began work on ECIES tunnels, and have the BuildRequestRecord and BuildReplyRecord basically done: https://gitlab.com/tini2p/tini2p/tree/tunnels  
2: What's next  
I'll be spending the remainder of today working on tunnels, trying to get them "finished" (aka functional)  
if I can't get them done today, I'll push back alpha release one more week. will do all I can to complete the work on end-to-end communication through tunnels  
I could just "ship it" today, but tunnels aren't complete. I would really like to have an end-to-end functional setup in alpha release, even without interop with existing I2P network  

**tini2p** even with interop, I will be setting a testnet netid, so communication with the main I2P network would require custom compilation  
so, my focus will be on getting ECIES tunnels working with ECIES-only tunnels, and using the new layer encryption proposed in 152  
hopefully, that will be finished by next week  
after that, I will implement mixed tunnels with ElGamal participants, and the existing tunnel layer encryption  
3: Questions / comments  

**tini2p** 4: Next meeting time  
2019-08-08 18:00 UTC  
if I'm able to make alpha release by next Thurday, I'll make an announcement in here as well.  
no meeting next week otherwise  

**David Burkett** :thumbsup: Keep up the good work @tini2p_gitlab  

**tini2p** thanks @DavidBurkett :smile:  

**David Burkett** If you ever need me to help test anything, I'll gladly do so. Just let me know.  

**tini2p** will do, thanks for the offer!!  
thanks to all for attending / reading  
meeting over  
