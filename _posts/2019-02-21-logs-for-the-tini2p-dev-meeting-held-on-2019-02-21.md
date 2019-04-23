---
layout: post
title: Overview and Logs for the tini2p Dev Meeting Held on 2019-02-21
summary: Current project status, Roadmap, I2P proposal implementation, Funding, and miscellaneous
tags: [dev diaries, i2p, crypto]
author: el00ruobuob / oneiric
---

# Logs

**\<oneiric\_>** 0. Greetings    
**\<Corklander>** Hi  
**\<oneiric\_>** 1. Current project status / progress since last meeting  
**\<oneiric\_>** since last meeting, completed the basic components of the ntcp2 transport  
**\<oneiric\_>** began work on i2np, researched proposals 123 + 144, and did some code house-keeping  
**\<oneiric\_>** currently working on LeaseSet2 implementation, and other components needed for I2NP + ECIES-X25519  
**\<oneiric\_>** the project's main repo is also changed to gitlab  
**\<oneiric\_>** comments/questions?  
**\<Corklander>** Ohh... do you have the gitlab link?  
**\<oneiric\_>** https://gitlab.com/tini2p/tini2p  
**\<Corklander>** Thanks!  
**\<oneiric\_>** np  
**\<oneiric\_>** :)  
**\<oneiric\_>** that leads us into: 2. Short-term road map  
**\<oneiric\_>** looked into gitea for git hosting  
**\<oneiric\_>** will be setting up a host server, and mirror to gitlab  
**\<oneiric\_>** hoping the experience will be reproducible, so other projects can do the same  
**\<oneiric\_>** code is getting close to being able to communicate between routers  
**\<oneiric\_>** remaining pieces: tunnels, i2np, netdb  
**\<oneiric\_>** garlic encryption w/ ecies is probably the most complex, and all three components rely on proposals 123 + 144  
**\<oneiric\_>** will continue working on i2np + netdb, since a majority of those components can be completed with the stable parts of the mentioned proposals  
**\<oneiric\_>** hopefully ecies-x25519 will be ready when tunnel impl + garlic is necessary  
**\<oneiric\_>** comments/questions?  
**\<oneiric\_>** 3. I2P proposal implementation (123, 144)  
**\<oneiric\_>** https://geti2p.net/spec/proposals/123-new-netdb-entries  
**\<oneiric\_>** https://geti2p.net/spec/proposals/144-ecies-x25519-aead-ratchet  
**\<oneiric\_>** currently Java-I2P devs are working hard on #123  
**\<oneiric\_>** dev discussion is in #ls2 on Irc2P  
**\<oneiric\_>** and the dev forum  
**\<oneiric\_>** str4d will be presenting a revised spec for RedDSA used in ECIES-X25519  
**\<sgp\_>** hi all, sorry I'm late  
**\<oneiric\_>** no worries, hi sgp\_ o/  
**\<oneiric\_>** RedDSA is also needed for blinding keys in EncryptedLeaseSet2 entries  
**\<oneiric\_>** once str4d's revised spec is available, will begin implementing RedDSA  
**\<oneiric\_>** orignal\_ and zzz have both been really inviting, and i encourage anyone interested to join the discussion  
**\<oneiric\_>** comments/questions?  
**\<Corklander>** Do you know if there's info on when #i2p-dev discussions are scheduled?  
**\<oneiric\_>** for those interested, RedDSA is basically EdDSA with modified r generation  
**\<oneiric\_>** Corklander: there is a schedule on their development forum for dev meetings  
**\<oneiric\_>** most of the recent ones have been in #ls2 afaict  
**\<oneiric\_>** clearnet list of I2P meetings: https://geti2p.net/en/meetings/  
**\<oneiric\_>** ^ has links to .i2p forum  
**\<Corklander>** Thanks  
**\<oneiric\_>** np  
**\<oneiric\_>** #144 (ECIES-X25519) will follow #123 impl  
**\<oneiric\_>** a lot of code from ntcp2 will be reusable, though the business logic is different  
**\<oneiric\_>** block ordering, for example  
**\<oneiric\_>** 4. Project funding  
**\<oneiric\_>** will be posting a donation address on the monero reddit, tin2p-meta repo, and other places it makes sense  
**\<oneiric\_>** atm, don't feel it's right to request full-time funding from Monero community. would like to prove the project more first  
**\<oneiric\_>** for those that would like to support during these early days, you are deeply loved and appreciated  
**\<oneiric\_>** when the router is able to communicate with other routers, i will get more serious about fundraising  
**\<oneiric\_>** comments/questions?  
**\<Corklander>** What coins are you planning to accept?  
**\<oneiric\_>** xmr for now, and grin once i set up a wallet  
**\<oneiric\_>** wownero  
**\<oneiric\_>** ;)  
**\<oneiric\_>** 5. Confirm next meeting time  
**\<oneiric\_>** two weeks from today is really close to fork, maybe do three weeks from today, same time?  
**\<wowario>** nice  
**\<Corklander>** That works for me  
**\<oneiric\_>** ok, so that's 2019-03-14 18:00 UTC  
