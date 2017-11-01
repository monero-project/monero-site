---
layout: ffs-cp
title: Release of new/updated pool software
author: Snipa22
amount: 800
date: February 2, 2017
---

### What

An updated pool for usage within the XMR community in order to help continue growing smaller pools within the Monero Community. This project was originally spawned off of the project by Wolf0 & OhGodAGirl to replace and improve the XMR Stratum, but provides a baseline to work from for more modern implementations of the pool software.

This also includes many features that are valuable to miners at this time, including support for Integrated Addresses, Payment ID Based payouts, Per-Worker Monitoring, and Per-Worker E-mail Notifications.

### Who

I'm Snipa on IRC, I've been a professional Linux sysadmin for the past 10-ish years, developing python based software for the past 4-5, and work primarily as a DevOps engineer in my full time position, maintaining servers and backend code, while providing project guidance for our main workflow at my FT position.

This has been my first serious foray into the XMR community, as well, into NodeJS, and while I've stumbled quite a bit, I feel like this is a product I am pleased to release to the community to play with and see how they like it as well.

I am a regular in the #monero-pools channel, and have provided assistance with things such as interim-pool fixes for the 127 transaction bug, information about the Claymore SSL implementation, and the certs (Unsigned certs ftw!) required for this implementation. I've also provided assistance to new pool ops looking to get up and going. I thoroughly believe that XMR is stronger for the small pool ops, and it's my goal to get this code out to make it easier and simpler to setup. I've also provided first-pass documentation on the current pool API's, as they're undocumented: [https://cryptonote-xmr-pool-api.restlet.io](https://cryptonote-xmr-pool-api.restlet.io/)

### Why

This was spawned as a pool target to replace the issues with Proportional payouts, such as pool hoppers, as used by Clintar and Zone117x's pools, allowing for better payouts for miners who are interested in long-term profit. This was also to be the target for the new Stratum Protocol as to be developed by Wolf0 & OhGodAGirl. This code leverages many stable NodeJS libraries, fixes to versions, and uses the current 6.x.x LTS release. This also offers a number of new ways to setup mining pools, including PPS and Solo mining, for miners who like to know exactly what they'll get paid, and miners who want to gamble and roll the dice while mining.

### The Proposal/Milestones

The bulk of this code is complete at this time, and is running a live pool at [https://xmrpool.net](https://xmrpool.net), which serves as the living, breathing example of what this pool is able to accomplish.

#### Milestone 1

Target: Release of the pool source in it's current form, including SQL schemas and all things required to setup and run the pool with minimal documentation.

At this point, I've put approximately 40-60 hours of work into the development of this pool, lost a small chunk of XMR to double-payout bugs (Which have been fixed), ordered approximately 1 BTC worth of NH hash time to stress test, load-test, and verify functionality of the pool on the production network. The API is decently well documented at: [https://cryptonote-pool-api.restlet.io/](https://cryptonote-pool-api.restlet.io/) and will be released in full Swagger format for anyone looking to integrate with the pool API.

As such, I'm setting a target of 600 XMR for this milestone, while high, this has been a very time consuming project. This is also conditionally to assist in paying out Mesh00 for his work on the frontend, and Wolf0 & OhGodAGirl to release the AES-NI sped-up version of the multi-hashing library that this pool takes full advantage of, allowing it to run on much smaller servers (VPS) while still doing extensive share verification and validation.

#### Milestone 2

Target: Finishing admin-related APIs and Frontend, moving to Websockets for statistical information and frontend data pushes, rather than pulls

At this time, the pool does not provide a dedicated admin interface or APIs, I have found these to be largely not-needed, as I am a full time system administrator. Overall, these should be fairly simple, as they're mostly accessing data that's in SQL anyway, as well as verifing wallet-state, etc. Adding websockets is non-trivial to a project of this nature, as the current architecture is not specifically designed to accept websockets, however, due to the use of LMDB and it's zero-copy systems, all of the core daemons share a universal cache that can be used readily to deal with passing data back and forth between applications.

As such, I am setting a target of 150 XMR for this milestone, to fund both frontend and backend work on this project.

#### Milestone 3

Target: Documenting and polishing the installation process

While not complex, and I have scripts for the deployment of this system in my multi-server environment, this would allow a new user to execute a single script to bring online a pool with a minimum of questions being asked. The goal here is to allow small pool ops to bring online pools more quickly. This is not required, and installation support will always be provided in #monero-pools

As such, I am setting a target of 50 XMR for this milestone.

### Closing

This FFS is mostly to help me recoup the time, funding provided into this project, and provide funding to those who have opted to help through this process.
