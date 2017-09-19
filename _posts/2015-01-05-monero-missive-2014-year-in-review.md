---
layout: post
title: Monero Missive Special Edition - 2014 Year in Review 
summary: A review of everything Monero accomplished from its inception through to the end of 2014
tags: [monero missives, year in review, core, funding, accounts, usability, platforms, gui, exchanges, i2p]
author: Riccardo Spagni (fluffypony)
forum: https://forum.getmonero.org/1/news-and-announcements/134/monday-monero-missives-22-year-in-review-january-5th-2015
---

Hello, and welcome to our twenty-second Monero Monday Missive!

This is our first Missive for 2015, after a 2 week break over the end of December. We'd like to earnestly thank everyone for their support over the course of this year, and for joining us on the start of our Monero journey. We'd also like to take this opportunity to look back on the past 8 months, and see where we got to.

**State of Monero: 2014**

As an open-source project, Monero is built on the back of volunteers, contributors, and donations. So let's start with a financial report.

For donations received over the year: we received 21 636.40655 XMR spread over 4343 transactions, and 8.04559 BTC spread over 25 transactions. Thus our average XMR donation is around 5 XMR, and our average BTC donation is around 0.32 BTC. As most of our costs are BTC based, XMR donations were traded into BTC where necessary (typically through OTC trades and not on-market), giving us a rough total of all receipts of 39.536205689 BTC (in XMR donations) + 8.04559 BTC (in BTC donations) = 47.581795689 BTC.

Expenditure for the year comprised of 3 totals as some costs could not be settled in BTC or were preferably settled in XMR. Our expenditure was 190.513492 BTC + 1 891.31 XMR + US $5 732.80, which is around the 212 BTC mark. Thus the shortfall of 164.5 BTC was paid out of the Core Team's own pockets in the hopes of recovering the funds later on (ie. just in case anyone was wondering, not only do the core team not get paid at all, but we've put a significant amount of funds into Monero).

So, what did our ~212 BTC get spent on over the year? Or, in other words, what did we accomplish? Here's a bit of a taste before we dig into the nitty-gritty:

![Infographic](/blog/assets/2014-year-in-review/overview.jpg)

*Core Development*

Well, let's start by excluding a lot of development done in branches on forks, and focusing on the master branch of the git repo. We inherited the Monero project pretty much from the end of April, with [thankful_for_today's last commit on April 30th, 2014](https://github.com/monero-project/bitmonero/commit/e940386f9a8765423ab3dd9e3aabe19a68cba9f9).

In order to see what we did with some pragmatism we took two folders, one containing the Monero source on April 30th at that last commit, and one containing the Monero source on December 31st. We removed everything in the external/ folder, except the CMakeLists.txt, so that we weren't including external libraries in our count. We then used Araxis Merge to produce a diff report between the two folders (plus Github's compare tool to give us additional information). We then subtracted the license changes we made earlier this year (208 files were affected, which means that for each we have to remove 2 lines from the "removed" count, 1 line from the "changed" count, and 28 lines from the "inserted" count). The summary is below, and whilst it obviously precludes things like where we made several changes to the same line of code, or missteps we reverted, it gives a very general indication of the effort.

- 35 weeks of development (245 days) since Monero was inherited by the Core Team
- 594 separate commits
- 11 contributors
- 10 221 modified lines
- 12 706 new lines
- 32 lines removed

Now may be thinking "wow, that's like 94 lines of code a day!", but it's important to remember that included in this are documentation and code comments, mnemonic word lists for several languages, as well as changes made to Bytecoin early on that we merged in.

However, it doesn't diminish the gargantuan effort that went into the Monero core over the year, and we are truly grateful to all who have been involved. Some of the highlights of work that was committed to the Monero core master repo over the past 8 months, in chronological order, include -

April:

- got Monero building and running on OS X

May:

- removed purposely obfuscated hashing loop
- added a 'diff' daemon command to show current estimated difficulty and hash rate
- more hashing optimisations, including AES-NI support
- new wallet RPC commands: save_bc, getaddress; new daemon RPC commands: mining_status
- enabled checkpointing and checkpoint verification
- fixed the block reward penalty mechanism and dynamic block sizing
- new wallet RPC commands: incoming_transfers
- fixed exit flags, added --exit-after-cmd simplewallet flag

June:

- added payment IDs to simplewallet's 'transfer' RPC command
- added Doxyfile for code documentation
- refactored parts of simplewallet
- added Electrum-style mnemonics to simplewallet
- got Monero building and running on Arch Linux
- further improvements to hashing algorithm, including huge pages and AES-NI key expansion
- added tx auto-splitting and changed transaction creation semantics internally

July:

- new wallet RPC command: get_bulk_payments; new daemon RPC command: get_connections
- new README, license changes to BSD 3-clause

August:

- optional height parameter for simplewallet refresh
- fixed wallet restore from seed
- new wallet RPC command: query_key; new wallet commands: seed, viewkey
- stopped a major spam attack dead in its tracks
- highly sophisticated attack causes the network to fork for 30 minutes, urgently and immediately patched

September:

- blob checkpointing added (over and above normal block hash checkpointing)
- got Monero building and running on FreeBSD
- major documentation of several C classes
- new versioning system to allow for rapid identification of build commit
- started enforcing GPG signed commits and merges, initial GPG keys added
- testnet launched
- dropped support for Visual Studio, added support for mingw-w64 + msys2
- DNS resolver (libunbound) added, initial OpenAlias support
- dynamic file-based checkpointing added
- multi-language mnemonics introduced for wallets
- new wordlists: Portuguese, and Spanish (first 4 letters unique)
- DNS checkpointing added for rapid checkpoint alert / enforcement

October:

- reworked log level choices
- new wordlists: English (first 3 letters unique), as well as Japanese (first 4 letters unique)
- PoW algorithm fully documented
- switched to RapidJSON for JSON parsing
- changed wallet file format (encrypted JSON)
- massive CMake overhaul begun by KitWare, the creators of CMake

November:

- per-kb transaction fees introduced
- CMake overhaul completed, dynamic and static builds finally working again on all platforms

December:

- bug fixes, bug fixes, and more bug fixes

*The Monero Research Lab*

Another major effort has been the Monero Research Lab, the MRL. In addition to the members of the core team, the triplets (Surae / Sarang / Shen Noether, obviously pseudonyms) spent months reviewing the CryptoNote whitepaper, publishing a synopsis of their review, and then building on that by doing extensive Monero research and finally producing several important research bulletins. From the ground-breaking chain reaction attacks in MRL-0001 to the deep dive explanation of Monero Ring Signatures in MRL-0003 (and the accompanying Python implementation) it has been 8 months of remarkable output for a group of people that at best only knew of each other very peripherally.

The Monero Research Lab members have also engaged regularly with Bitcoin researchers, including a mutually beneficial friendship with Andrew Poelstra who is included in the group of the "MRL Friends".

Between the whitepaper annotations, the review, and the MRL research bulletins published in 2014, 655 lines of python were released and over 25 000 words were written, all of which was the culmination of over 197 000 words spent in intense academic discussion.

The academics in the MRL also had an opportunity to meet up with Riccardo Spagni (fluffypony) and Tom Winget (tewinget) towards the end of the year, in a weekend of epic nerdiness that included a trip to a natural history museum and getting stuck on the side of the highway with no petrol due to a faulty gauge. Don't worry, the emergency petrol fill up wasn't paid for by donations;)

*Infrastructure*

The Monero web infrastructure consists of 4 key components: web hosting, testing infrastructure, seeding, and download hosting.

Our web hosting serves the Monero website, the Monero forum, the Monero Research Lab site, and so on.

Testing infrastructure consists of a Mac Mini hosted at MacStadium, as well as a beefy testing box hosted at Hetzner in Germany, on which we have a number of VMs for the various operating systems and variants we target. Our QA lead contributor, Gazby, who has recently started will be bringing the testing infrastructure up to scratch, and adding things like Jenkins for nightly builds and Gitian for deterministic signed releases.

Seeding infrastructure consists of several geographically separated boxes that keep the moneroseeds.se/ae.org/ch/li records updated with active seed nodes.

Download hosting consists of several servers scattered across the globe (3x USA, 2x UK, 1x Germany), and it serves all static content including the blockchain downloads, Monero binaries, MRL publications, and so on. The Monero blockchain alone is downloaded hundreds of times in a month, with our bandwidth usage regularly exceeding 2tb a month across the download nodes. Obviously this provision is not cheap, which is why your continued assistance to this project is greatly appreciated.

*OpenAlias*

An important project that the Monero Core Team created and developed is OpenAlias. Monero addresses are ugly, complex, and not really human readable. But then, too, so are Bitcoin addresses. Typically most cryptocurrencies attempt to solve this by having some sort of centralised register, say they've developed "aliasing", and call it a day. For Monero, this approach simply wasn't good enough.

To understand why it is important one must first understand "[Zooko's Triangle](http://en.wikipedia.org/wiki/Zooko's_triangle)". Zooko Wilcox-O'Hearn, the incredible brain that contributed so much to the Tahoe-LAFS distributed file system (and which was first released May 2nd, 2007), posited that any naming or aliasing system has three goals or desirable traits (and we're just going to quote Wikipedia here) -

- Human-meaningful: The quality of meaningfulness and memorability to the users of the naming system. Domain names and nicknaming are naming systems that are highly memorable.
- Decentralized: The lack of a centralized authority for determining the meaning of a name. Instead, measures such as a Web of trust are used.
- Secure: The quality that there is one, unique and specific entity to which the name maps. For instance, domain names are unique because there is just one party able to prove that they are the owner of each domain name.

Zooko initially concluded that it was impossible for a naming system to have all 3, and at best it could hope to have 2 of the 3. Subsequently, systems such as Namecoin and Twister proved that it was, in fact, possible to have all 3.

Despite that, most of the aliasing / naming implementations that exist today seem to fail on the decentralised aspect (eg. requiring that a block is solved to register an alias centralises it in the hands of the large mining pools, and also limits the number of aliases that can be created a day), and almost always fail on the long-term goal of "human-meaningful".

We say the latter because a limited aliasing system where globally unique nicknames are chosen invariably devolves to a post-land-grab scenario where so many variants of "bob" have been acquired that a user is forced to chose bob0923840129832 as his alias, which really doesn't solve the naming issue at all. In addition, it forces the cryptocurrency creator to be the one responsible for solving alias disputes, and in many cases aliases are permanent and cannot be changed if you lose your private key.

OpenAlias is different. Not only does it "square Zooko's triangle" (still a unique and difficult to accomplish task), but it allows for the offloading of decentralisation to Namecoin or GNUnet or similar, whilst still allowing for the offloading of conflict resolution to existing systems such as ICANN's ADR (Alternative Dispute Resolution). Best of all, it leverages the fact that so many people and companies *already own their own domain names*, so there is no need for additional complexity.

Monero has implemented OpenAlias on quite a basic level, and will be improving its support as time goes on. The OpenAlias project has also not been standing still, and has been working on several sub-projects.

*GUI and Database*

With the two attacks we thwarted in 2014, the GUI development had to take a bit of a backseat. On the other hand, the blockchain database implementation has progressed nicely, and is currently being rebased to the latest master and tests are being updated and created for it.

The GUI code alone already consists of 5 213 lines of QML and over 100 lines of C++, and that is well before anything is wired up. The blockchainDB code consists of over 60 commits on the implementation alone (over and above the tons of commits to create the generic classes and implement all the functionality prior to that), with over 5 500 lines of code already part of it. It truly has been a monumental engineering task.

*Monero Forum*

A project guided and directed by the Core Team, although primarily written by a contributor (Eddieh), the forum grew out of an interesting need. On the one hand, Monero is still in its infancy, and the Monero sub-Reddit would likely have sufficed for quite some time. On the other hand, there was a general pressure for us to have our own forum, our own home.

So why didn't we just use something off-the-shelf? There were several reasons. The primary reason is that most forum software (SimpleMachines, phpBB, Vanilla, etc.) is either too clunky or too old to really be workable in a modern context. And, too, it would be something we would have to live with for a long time (see: Bitcointalk, for instance). Customising existing forum software to suit our needs would not have been cheap (see: Bitcointalk again). Thus a decision was made to see if we could find someone to pursue creating something fresh for us as a peripheral exercise.

After 6311 lines of PHP, 1226 lines of CSS, and 135 lines of JavaScript, we're proud of what we've produced. Instead of using antiquated content systems like BBCode, we have MarkDown. Instead of pages and pages of threads, we have infinite scrolling and threaded views. Instead of fundamentally flawed trust systems like "default trust" we have a synchronised copy of the Bitcoin-OTC Web of Trust, allowing users with existing WoT accounts to immediately have their trust groups accessible on the Monero Forum for trading. Instead of only meaningless sorting by date (which we have!) we have posts sorted by weight. Since weight is a product both of post age, insightful/irrelevant votes, and your trust relationship to the poster, you are already able to visit a thread and only see comments that are relevant to you, with all other comments collapsed. We are actively massaging more usefulness out of the weighting, but it is core and fundamental to the forum.

Obviously this is a project that still has a LONG way to go to reach maturity. With that in mind, don't forget that you are key to this: if there's something about the forum you don't like, or a feature you want, or a bug you've found, put it in the Meta section of the forum (until we have a github repo that you can post issues to).

*The Monero Missives*

Our first Missive was put out on Monday, June 2nd, 2014, and has been instrumental in collating and bringing together various little snippets and pieces of work and threads every week. In the 30 weeks from that first one till the end of the year we put them on pause for 4 weeks during the attacks in August, and took a 2 week break at the end of the year. The remaining 24 weeks had 21 Missives in them, giving quite a bit of coverage and keeping our userbase as informed as possible. Some Missives are easy and only take us two or three hours to put together.

Some Missives are substantially harder due to time constraints, dependencies, research (see: this Missive you're reading, for instance;) or just the sheer amount of stuff that is going on. In total, the 21 Missives we put out over the past 8 months contained nearly 16 000 words over 689 sentences!

And just for fun, this Missive took several days to put together (not all day, every day, mind you) and unsurprisingly ends up being our largest Missive by far, at 3 450 words and 111 sentences!

*Other Core Team Projects*

The two other projects the Core Team released in the year are the Monero DNS seeder (xmr-seeder), and URS, a Unique Ring Signature signing tool written in Go. Both of them are active contributions to the Monero infrastructure, and continue to be useful and fundamental on a daily basis.

**External Projects: 2014**

The Monero Core team and core contributors obviously aren't the only ones working on Monero-related projects. Some highlights from the year include:

*[Node CryptoNote Pool](https://github.com/zone117x/node-cryptonote-pool)*

When Monero first started there was no open-source pool software for it. Through the collective efforts of zone117x and lucasjones, an open-source pool was developed and released. It was an incredible undertaking, given the monstrous lack of documentation and code comments in the CryptoNote source, and we owe them a debt of thanks.

*[i2pd Development Partnership](https://github.com/PrivacySolutions/i2pd)*

Initially this started as a partnership with the i2p team, with a view to getting i2pcpp to a workable stage. When i2pcpp stalled, and on advice from the i2p team, we form the Privacy Solutions working group between Monero, AnonCoin, members of the i2p team, and the i2pd developers.

The focus for the past few months has been on i2pd, which has made amazing progress. Since the launch of the PrivacySolutions partnership at the end of July, a series of 692 commits has brought i2pd up to a stage where it can maintain relatively stable connections to the i2p network.

*[ForkGuard](http://forkguard.com) and [MoneroClub](https://www.moneroclub.com)*

Both services launched and operated by Atrides, ForkGuard provides realtime information on the current block height for pools and services that run full Monero nodes, and MoneroClub is a listing of localised Monero and fiat OTC trade offers. Atrides isn't stopping there, and for his next project he's looking to produce a Monero fork of OpenBazaar!

*[MyMonero](https://mymonero.com)*

Owned by Riccardo Spagni (fluffypony) and Risto Pietilä (rpietila), and operated by fluffypony, MyMonero is the first web-based client for Monero. In doing so it closes a major end-user usability gap, and goes a long way towards making Monero useful and usable.

*[Crypto Kingdom](https://bitcointalk.org/index.php?topic=819073.0)*

Created and started by his lordship, King Risto, Crypto Kingdom is a retro-style virtual world game where players can interact, build, create, and so on. An online playable version is in the works, and as Monero is driving the in-game resources and currency it is well on its way to becoming a fully-fledged microeconomy!

**Looking Forward: 2015**

We have a lot in the pipeline for 2015. A few things that we'd like to highlight that you can look forward to:

- more MRL academic goodness, including some of the work started at our MRL mini-meetup from 2014
- a finalised, working, tested blockchain DB implementation using LMDB
- i2p integration
- some additional blockchain DB implementations
- finalisation and release of the Monero core GUI
- the release of smart mining functionality
- the finalisation of a complete overhaul of the RPC functionality
- HTTPS and simple auth support for RPC servers
- a new, unified, well-documented RPC interface
- blocknotify and walletnotify equivalents in the daemon and wallet client
- a complete replacement of the wallet/server IPC with 0MQ
- multi-signature transactions
- open-sourcing the Monero Forum software
- the release of some OpenAlias sub-projects

And, undoubtedly, much more both for Monero core and related external projects.

Of course, none of this would be possible without donations from our users, and we are most appreciative and grateful to those that have donated thus far. We hope that over the next year you will continue to help and assist us - and don't forget our donation addresses are powered by OpenAlias, both XMR and BTC donation addresses are on donate.getmonero.org

Thank you for a great 2014, and here's to a great 2015!

Your Core Team - Riccardo "fluffypony" Spagni, smooth, othe, David Latapie, tacotime, NoodleDoodle, eizh