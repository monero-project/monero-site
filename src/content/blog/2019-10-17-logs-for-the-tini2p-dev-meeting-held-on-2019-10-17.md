---
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-10-17
summary: Current project status, Roadmap, Meta issues, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**\<tini2p_gitlab>** 0: Greetings  
**\<tini2p_gitlab>** h  
**\<tini2p_gitlab>** 1: What's been done  
**\<tini2p_gitlab>** last week was the alpha release of tini2p  
**\<tini2p_gitlab>** the router is still in its earliest stages, and things will still be changing fairly drastically as refactors and bug fixes are made  
**\<tini2p_gitlab>** tini2p routers are capable of building ECIES tunnels, and communicating end-to-end via ECIES-X25519  
**\<tini2p_gitlab>** NTCP2 (a tcp-like transport) is fully implemented  
**\<tini2p_gitlab>** cross-implementation testing is still needed to discover and remedy any bugs (if they exist)  
**\<tini2p_gitlab>** the router is also currently compiled with a testnet netID to mitigate any communication with mainnet routers  
**\<tini2p_gitlab>** using a testnet netID means custom compilation is required to communicate with mainnet I2P routers over NTCP2  
**\<tini2p_gitlab>** I haven't added the necessary build for mainnet because tini2p isn't ready yet, and I don't want to encourage usage which may be disruptive/harmful to the network  
**\<tini2p_gitlab>** I also began work on [ElGamal tunnel building](https://gitlab.com/tini2p/tini2p/commits/elg-tunnel) (basic encryption/decryption of BuildRequestRecords is more-or-less done)  
**\<tini2p_gitlab>** 2: What's next  
**\<tini2p_gitlab>** will continue work on ElGamal tunnel building  
**\<tini2p_gitlab>** the next steps are:  
**\<tini2p_gitlab>** - serializing/deserializing ElGamal BuildRequestRecords (slightly different from ECIES records)  
**\<tini2p_gitlab>** - deriving keys for ChaCha tunnels using the ElGamal shared secret  
**\<tini2p_gitlab>** - refactoring the router context to handle ElGamal tunnel building  
**\<tini2p_gitlab>** maybe it will go quickly, but it could take a couple weeks  
**\<tini2p_gitlab>** will also work on creating test vectors for i2pd and Java I2P for cross-impl ElGamal testing  
**\<tini2p_gitlab>** will bring up KDF discussion about deriving record keys using the ElGamal shared secret  
**\<tini2p_gitlab>** for AES tunnels, deriving record keys is likely unnecessary, since any saved space would be consumed with random padding  
**\<tini2p_gitlab>** for ChaCha tunnels, the saved space is necessary for transmitting the AEAD `receive` key to each hop  
**\<tini2p_gitlab>** the additional 32 bytes for the AEAD key will not fit in the current space allocated for "options/random padding"  
**\<tini2p_gitlab>** + the bytes for the options header + flags  
**\<tini2p_gitlab>** will also be adding fuzz test drivers for data structures with `deserialize` methods as I work on other features  
**\<tini2p_gitlab>** if the KDF changes for ElGamal records are unwanted/unworkable, ElGamal tunnels will only be able to use AES for layer encryption  
**\<tini2p_gitlab>** which would effectively mean any tunnel with one ElGamal hop must use AES layer encryption for the entire tunnel  
**\<tini2p_gitlab>** if the KDF changes are accepted, ElGamal tunnels will be able to use AES and/or ChaCha layer encryption  
**\<tini2p_gitlab>** for a review of AES layer encryption: https://geti2p.net/en/docs/tunnels/implementation  
**\<tini2p_gitlab>** and ChaCha layer encryption proposal: https://geti2p.net/spec/proposals/153-chacha20-layer-encryption  
**\<tini2p_gitlab>** 3: Questions / comments  
**\<tini2p_gitlab>** much love for the lurkers  
**\<tini2p_gitlab>** 4: Next meeting time  
**\<tini2p_gitlab>** 2019-10-31 18:00 UTC  
**\<tini2p_gitlab>** @tini2p_gitlab gavels the gavels like it's never been gavelled before
