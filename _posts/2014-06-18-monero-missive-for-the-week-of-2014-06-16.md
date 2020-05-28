---
layout: post
title: Monero Missive for the Week of 2014-06-16
summary: Monero number 1 on the MintPal voting list, whitepaper annotations released and peer review started, initial transaction splitting test
tags: [monero missives, exchanges, research, usability, gui]
author: Riccardo Spagni (fluffypony)
---

Hello, and welcome to our third Monero Missive.

**Major Updates**

1. We've been stalling this week's Missive on purpose, because we were hoping it would happen...and it happened! We got to number 1 on the MintPal voting list in a week - which is quite an achievement. There was quite a stack of paid-for votes (more than normal for a cryptocurrency on the MintPal voting list), which is surprising, but it definitely helped catapult us up front.  
An [interesting graph on CryptVote](http://cryptvote.com) shows the meteoric climb (XMR is the blue line):  
![](https://i.imgur.com/GfQ67Tz.jpg){: .center-image }

2. We are immensely grateful for the work the CryptoNote developers have put into the protocol, but their whitepaper is unfortunately lacking in peer reviews. To that end, we have taken it upon ourselves to peer review the whitepaper, and to release the peer review as an annotated whitepaper.  
The two primary peer reviewers are not part of the Monero core team, and are highly qualified academics in the fields of mathematics and cryptography. They are assisted by some of the Monero core team who have a similar computer science academic background. Due to the nature of the Monero project both of the primary peer reviewers have chosen to work under a pseudonym. In a later missive we'll introduce them more formally, but for the moment we wanted to release the current copy of the annotated whitepaper for everyone to take a look at. If you'd like to provide your input on the annotations, please feel free to email any comments to dev@getmonero.org  
The latest annotated whitepaper can be downloaded here: http://downloads.getmonero.org/whitepaper_annotated.pdf. Please bear in mind that it is only up to page 8 in the CryptoNote whitepaper at present, so the annotation does cut short there:)

3. We have completed initial work and testing on transaction auto-splitting (thanks to tewinget's tireless work). Now, if you have too many inputs for your transaction, simplewallet will automatically try to split your transfer up to as many as 30 transactions. It will prompt you first and let you know the total fees before just sending it, of course:  
![](https://i.imgur.com/IyG3Uq0.jpg){: .center-image }  
This feature requires more testing, and is NOT in the main code base yet. If you're able to build Monero, please grab it from fluffypony's repo here, and build and test: https://github.com/fluffypony/bitmonero - you won't need to build tests or change the daemon, it's just simplewallet's operation that has changed. Please do not try this with the RPC API yet, this needs the CLI at the moment.

4. We have had a lot of people asking about the progress of the GUI wallet. We'd like to reiterate that there are a great number of core and fundamental things that need to be worked on *before* we can get lots and lots of users flocking in. Some of the core necessities that we're working on at breakneck pace are: QoS to reduce the bandwidth demand on full nodes (as everyone will be running a full node at this stage anyway), segregation of wallet functions in order to create a far more robust system for exchanges and merchants to use, [Gitian-based builds](http://gitian.org) for everyone's safety and to ensure binaries are safe (safer, really), moving blockchain storage to an embedded database, fixing the now-infamous "ABSTRACT_SERVER_SEND_QUE_MAX_COUNT" (in big red letters!) error that is quite harmless but everyone freaks out about, and so on.

   These are issues at Monero's core that we're working on, and we need to have these in place and fixed before a GUI wallet is widely dispersed, otherwise there will be massive resource constraints placed on user's systems. We're not here to win a race against other cryptocurrencies. We're here to to continue to push out great features and stable and reliable code, in a way that will make sure Monero is around for decades and not just a flash-in-the-pan.