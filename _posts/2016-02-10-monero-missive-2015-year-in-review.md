---
layout: post
title: Monero Missive Special Edition - 2015 Year in Review 
summary: A review of everything Monero accomplished in 2015
tags: [monero missives, year in review, core, funding, accounts, usability, platforms, gui, exchanges, i2p, 0mq, kovri, blockchaindb]
author: Riccardo Spagni (fluffypony)
forum: https://forum.getmonero.org/1/news-announcements-and-editorials/2481/monero-missive-special-edition-2015-year-in-review
---

Hello, and welcome to a special edition of the Monero Missives: the 2015 Year in Review!

As you may know (or may not know:) we had an extremely busy January, which has led to this Missive taking its sweet time in being finalised.

## State of Monero: 2015

The past year has been an interesting one for Monero. There was something of a reckoning as speculators realised that Monero was never going to be a pump-and-dump, rushing out a flashy GUI and ill-conceived features with no regard to the security of the network or the safety of our users. Those that stuck it out have seen steady, constant progress and steady, constant community growth.

{:.text-center}
![Project Stats 2015 Overview](/blog/assets/2015-year-in-review/stats.jpg)

**Governance**

Over the course of 2015 we have considered Monero's governance model. In the context of cryptocurrencies and consensus systems, the term "governance" seems to be quite taboo. However, for anyone that has ever been involved in an open-source project, a lack of governance is as good as a death knell. An [excellent article](http://oss-watch.ac.uk/resources/governancemodels) on governance models is maintained by OSS Watch, and they point out the reason for this:

> There are almost as many variations of open source management strategies as there are open source projects. It is therefore critical that a project clearly communicates its policies and strategies to potential users and developers of the project’s outputs. A clear governance model also allows potential contributors to understand how they should engage with the project, what is expected of them and what protections are provided to ensure that their contributions will always be available to them. In addition, it describes the quality control processes that help to assure potential users of the viability of the project. The development and communication of a clear and concise governance model is one of the most important steps a project can take towards sustainability through open development.

Of course, we are primarily talking about the governance of the open-source project (ie. the source code in the [monero-project](https://github.com/monero-project/bitmonero) repositories and associated systems and structures). The Monero network itself cannot be governed, and as has already happened just after Monero's launch, the project can be forked and effectively taken over if the core project is no longer considered viable. If that is the case, why bother with governance at all? Over and above the reasons mentioned in the OSS Watch article, it is important to prevent a gridlock in decision making. There are going to be decisions in Monero's future that will be extremely difficult to make, and if there's no clear path as to *how* they can be made then the project is very unlikely to grow.

When considering a governance model for Monero our main aim has been to find a balance between pure community consensus on the one hand, and the Core Team operating as "benevolent dictators for life" on the other. Neither of these governance models are desirable on their own, but there is a mixture of the two that we feel is well-suited to Monero. It is effectively the workflow we used last year when a decision had to be made on whether or not to change Monero's emission curve (ultimately it was decided against doing so); this is the workflow for decision making:

- An idea is pitched by someone, whether via a Github issue, IRC in #monero-dev, the Monero Forum, or elsewhere, and discussion ensues. The preferred forums for discussion around an idea would be as a Github issue or a Monero Forum thread.
- If there are no major objections, or objections are responded to and the idea is refined accordingly, this will be deemed enough for "rough community consensus", or "lazy consensus". A good indicator of community consensus, in many instances, would be if it is an idea that requires funding, and the community successfully funds the effort.
- In the event of the community being unable to reach general consensus on the matter within a reasonable period of time (typically a couple of weeks to a few months, dependent upon the complexity of the idea), the matter will be referred to the Core Team.
- The Core Team will set a date for a meeting on the matter, normally to be held within a week or two. They will review all written material before the meeting.
- The meeting will be held between the members of the Core Team on IRC, openly visible to the community at large, and logs will be made available after. A maximum time limit will be set for the meeting.
- Members of the Core Team will be given an opportunity to state their views, vote (using the voting system detailed below), and discuss the matter at length, within the time limit of the meeting.
- To conclude the meeting, the members of the Core Team will tally the votes that have been cast on the matter during the discussion and forward the decision to the community.

{:.text-center}
![Governance Process Overview](/blog/assets/2015-year-in-review/governance-process.jpg)

The Core Team, as well as individual contributors, can participate in all related discussions, but their opinions are not absolute or perfect. Community members are encouraged to test and push arguments, regardless of who is making them, until they are satisfied that the idea or change is workable or worth the risks.

The voting system that the Core Team uses is based on the CentOS voting system. Votes are not cast permanently, so a member can cast a vote at the beginning of the meeting and change it several times throughout. In order from disagreement to agreement, the following votes can be cast:

- Veto vote (-1). This is generally discouraged, unless it is accompanied by substantive arguments rooted in project-relevant criteria (protecting the community, economic reasons, technical reasons)
- Reservations vote (-1 or 0). Either a neutral vote, or a negative vote, coupled with reservations and concerns that are stated with the vote.
- Stand aside vote (0). A neutral vote, which can be accompanied with some reservations, but which does not seek to block the vote.
- Supporting vote (+1). Supports the proposal / idea / change. The voter would be expected to also indicate whether or not they will personally assist in driving the effort if successful.

In the absence of any vetoes, the votes are tallied, which gives both the result of the vote as well as an indication of the amount of support (or lack thereof). If the votes add up to a negative or positive amount then the outcome is clear. If the votes add up to 0 that is normally an indication of no support and only small reservations, in which case the matter is not blocked by the vote, but it is also not particularly supported. In this event the Core Team may choose to hold another vote, optionally at a subsequent meeting a week or two later, if the matter is such that it requires more positive support.

Our hope is that this process will prevent Monero from falling prey to "design by committee", but also prevent "design by Wikipedia" or "design by the person with the loudest mouth / most eloquent writing". This process is currently up for discussion and comment; please feel free to provide input on it.

**Core Team**

Due to the formalisation of the governance of the project, and the clarification of the Core Team's role as stewards, members of the Core Team are expected to be active on an ongoing basis. If a member of the Core Team cannot be regularly active, it is expected that they will step down from their role on the Core Team; the remaining members can elect to replace them if they wish.

With that in mind, two members are no longer going to form part of the Core Team due to time constraints: *David Latapie* and *eizh*. Both of them have been part of Monero since its inception and the formation of the Core Team. We are immensely grateful for their efforts in the past, and any efforts from them in the future.

We have also elected two new members to the Core Team: *Franciso "ArticMine" Cabañas*, and *luigi1111*. Francisco is based in Canada, and holds a PhD in Physics and brings extensive business and non-profit experience to the table. He has actively researched and invested in cryptocurrencies since 2011, and focuses on the economic, social, regulatory, and long-term viability aspects of cryptocurrencies. luigi1111 hails from the Midwestern United States and is a sysadmin by day. He has been actively involved in several cryptocurrencies since 2013, and loves cryptography, probability, and English grammar.

We welcome them to the Core Team, and look forward to working with them both going forward.

**Finances**

Our financial situation has dramatically changed with the introduction of the Forum Funding System (FFS). We still have core expenses, some of which include the servers hosting our infrastructure, our test / build hosted machines, annual domain registration for core / MoneroPulse / MoneroSeeds domains, LibSyn's hosting and syndication of our Missives podcast, CloudFlare's services, our GitHub micro plan, and so on. We are quite grateful for those that have continued to send donations to the core fund, and where possible we have also used those to kickstart Forum Funding System fundraisers.

As mentioned in 2014's Year in Review, the founding members of the Core Team all put in a large portion of funds over the course of 2014, amounting to around 164.5 BTC, when donations were scarce. At this juncture we have not sought to recover those funds, as our focus is on building Monero up, recovering our donations at some later stage, if ever.

Some [highlights of the FFS over the year](https://forum.getmonero.org/9/work-in-progress) include:

- [tewinget's Documentation and Cleanup of Source Code](https://forum.getmonero.org/9/work-in-progress/2373/documentation-and-cleanup-of-source-code): raised 3600 XMR in 23 contributions; completed 3/4 milestones.
- [moneromoo's initial fundraiser for 6 months of work](https://forum.getmonero.org/22/completed-tasks/334/fund-a-developer-moneromoo-will-work-part-time-on-monero-for-260-hours-over-approx-6-months): raised over its target of 7800 XMR in 45 contributions; completed all 6 milestones.
- [moneromoo's second fundraiser for for about 10 additional months of work](https://forum.getmonero.org/9/work-in-progress/2410/a-continuation-for-all-purpose-programming-of-what-needs-to-get-done-in-monero): raised 18000 XMR in 21 contributions; completed 3/10 milestones thus far.
- [Shen Noether's translation of some of the website content into Chinese](https://forum.getmonero.org/9/work-in-progress/329/translation-of-content-on-getmonero-org-into-chinese): raised 950 XMR from a target of 600 XMR in 9 contributions; completed its milestone.
- [Shen Noether's fundraiser to complete the C++ implementation of RingCT](https://forum.getmonero.org/9/work-in-progress/2450/ring-ct-c-crypto): raised 3150 XMR in 13 contributions; has very nearly reached completion of all 7 of its milestones.
- [Wolf0's very efficient AMD miner](https://forum.getmonero.org/9/work-in-progress/2400/open-source-amd-miner-by-wolf0): raised 7750 XMR in 20 contributions; completed 6/7 milestones.
- (just sneaking a 2016 one in:) - [Ilya Kitaev's initial funding to complete the Monero Core GUI](https://forum.getmonero.org/9/work-in-progress/2476/the-official-qt-gui-project): raised just over its 14000 XMR target in a matter of hours; work has just begun.

In total, excluding the GUI fundraiser, the FFS raised just over 48260 XMR over the course of 2015. Virtually all of the fundraisers were for direct open-source code development, and no payouts were made until a milestone had been met, and the community had reviewed the code and confirmed that the milestone had been achieved.

We can safely say that the FFS has been a fantastic success thus far, and we hope to see more projects being funded of a development nature, as well as of a promotional and educational nature (such as community members covering their costs if they go speak at a conference).

The FFS exists in a centralised manner today, but in the future we hope to host it in a more decentralised fashion (eg. using Tahoe-LAFS) and couple it with future systems like MoneroID and MoneroTrust.

**Donation Addresses**

For general housekeeping purposes we have decided to roll-over the donation addresses every so often, perhaps every year or two. Please take note of the new address details below. We have updated the donate.getmonero.org OpenAlias and other references, but pool operators and anyone else that auto-donates will need to update their systems accordingly. We will maintain the old addresses for some time, but will likely only check them sporadically and move any funds to the new addresses.

Monero Donations: [44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A](monero:44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A?recipient_name=Monero%20Development&tx_description=Donation%20to%20Monero%20Core%20Team) (view key: f359631075708155cc3d92a32b75a7d02a5dcf27756707b47a2b31b21c389501)  
Bitcoin Donations: [1KTexdemPdxSBcG55heUuTjDRYqbC5ZL8H](bitcoin:1KTexdemPdxSBcG55heUuTjDRYqbC5ZL8H?label=Monero%20Development&message=Donation%20to%20Monero%20Core%20Team)

**Design and Development Goals**

During the course of 2015 we published a set of [Design and Development Goals](https://getmonero.org/design-goals/) focused not only on pure development, but also on research goals that the Monero Research Lab are pursuing. Typically the development goals are smaller, more immediate, and easier to achieve, whereas some of the research goals might not even be feasible, and others could take many years to find a suitable solution.

Nevertheless, over the course of 2015 we managed to complete 7 of the development goals and 2 of the research goals:

- *LMDB embedded database implementation*: the Lightning Memory-Mapped Database is the brainchild of Howard Chu, who has become quite actively involved in the Monero Project. Our implementation of LMDB in Monero has led to a truly massive reduction in memory usage of the daemon, down to well under 100mb of real memory in use, whilst still remaining exceptionally performant.
- *Daemonize*: instead of being forced to run the Monero daemon in the foreground, this effort allows for it to fork to the background, but still be able to interact with and query the daemon. On Windows computers it can even install itself as a system service.
- *BerkeleyDB fall-back database implementation*: initially this was added as an acid test for our generic blockchain database class, but proved useful when we hit LMDB issues on 32-bit and ARM systems (subsequently resolved).
- *32-bit and ARM support*: we lost 32-bit support when the in-RAM database started requiring more than 4gb of RAM. Thankfully, our blockchainDB work, as well as the LMDB and BDB implementations, brought this back, and allowed us to add ARM support as a bonus!
- *Various synchronisation improvements*: thanks to a vastly improved synchronisation mechanism a brand new Monero node can completely sync up with the network from scratch in as little as 45 minutes.
- *ØMQ and TLS support for RPC*: currently only available in the development branch, this is part of a series of underlying changes that will make Monero far more extensible and flexible in the future, and will allow for more secure integration for merchants and other developers.
- *Stealth & serialised payment IDs*: this started off as something that had to be researched and figured out, but thanks to some clever work by luigi1111 and others this is integrated in the 0.9 codebase.
- *RingCT*: as mentioned in Academic Research section, this goal has been achieved, and the C++ code for it is nearing completion.

In many ways Monero's long-term design goals represent a fundamental shift in focus. Monero's primary use, at this point, is as a private store of value and medium of exchange. But since Monero has a global, decentralised, censorship-resistant timestamping database, there is a world of functionality that can be bolted on top. Thus, the aim with Monero is for it to become more than just a private cryptocurrency; we want Monero to become an entire suite of easy-to-use tools and systems designed to enhance personal privacy.

**Releases**

During 2015 we kept our collective heads down, focusing on the gargantuan effort required to get the database implementation running smoothly and implement the MRL-0004 guidelines. This culminated in the release of Monero 0.9 *Hydrogen Helix* on the first day of 2016. A full list of the changes can be found on the release page: https://github.com/monero-project/bitmonero/releases/tag/v0.9.0

We'd like to extend our gratitude to the 19 contributors that invented, developed, hacked, wrote, tested, broke, fixed, and built Monero's core code over 2015: moneromooo-monero, warptangent, Thomas Winget, Riccardo Spagni, rfree, smooth, NoodleDoodle, Howard Chu, Sergey Kazenyuk, luigi1111, Shen Noether, Rostislav, Brendan Telzrow, Lex Kalinkin, sammy007, Wladimir van der Laan, David Vorick, roman, and meshpoint.

Over the year there were 904 commits made to the main Monero repository, plus quite a few more to the development branch. Using the same methodology we applied in the previous Year in Review, this means:

| Statistic | 2014 | 2015 | Total |
|---|---|---|---|
| Weeks of Development | 35 | 52 | 87 |
| Days of Development | 245 | 365 | 610 |
| Commits | 594 | 904 | 1498 |
| Contributors | 11 | 19 | 30 |
| Modified Lines | 10 221 | 5 342 | 15 563 |
| New Lines | 12 706 | 263 288 | 275 994 |
| Removed Lines | 32 | 514 | 546 |


**Academic Research**

The Monero Research Lab also had a busy 2015. Two main efforts were completed during the year:

- *[MRL-0004: Improving Obfuscation in the CryptoNote Protocol](https://lab.getmonero.org/pubs/MRL-0004.pdf)* - this was a major research effort that analysed the failures highlighted in [MRL-0001](https://lab.getmonero.org/pubs/MRL-0001.pdf), as well as uncovered some others, and presented a number of solutions to these. The solutions presented in MRL-0004 were incorporated in the Monero hardfork coming up in March, 2016.
- *[MRL-0005: Ring Signature Confidential Transactions for Monero](https://lab.getmonero.org/pubs/MRL-0005.pdf)* - based on [the excellent work of Bitcoin Core developer, Greg Maxwell](https://people.xiph.org/%7Egreg/confidential_values.txt), this couples Confidential Transactions with Monero's Ring Signatures, efficiently hiding transaction values on the blockchain, and thus crossing a major privacy threshold. Once implemented this will make Monero the first cryptocurrency in production and in use that cryptographically obscures transaction values, where the transaction inputs come from, and where the transaction outputs are going to.

**Kovri**

One of the areas that Monero has long been focusing on is disconnecting the link between a transaction and the IP address of the node that was first observed broadcasting it, as this information often reveals the IP address of the transaction originator. Severing this link is vital, and it is not merely enough to support this functionality optionally through networks like Tor; it needs to be native and an inherent part of the Monero protocol.

With that in mind, our work with members of the I2P community has progressed from initially being involved with i2pcpp, to i2pd, and finally to an initiative from a few months ago: the Kovri I2P Router. Initially forked from a branch of i2pd, the Kovri project stands on its own in the Monero stable. It is not a mere side project, but a large fully fledged open-source project.

Nearly 2300 commits from 37 contributors have lead to just under 30000 lines of code, and the effort is ongoing. You can follow Kovri's progress on the Github repo: [https://github.com/monero-project/kovri](https://github.com/monero-project/kovri)

**Monero Website**

At the beginning of 2015 we opened the Monero Forum. But we didn't stop there - the Monero website was also overhauled and released as a brand new site, powered by Jekyll, with a look-and-feel matching the Monero Forum. The website is open-source and can be found here: [https://github.com/monero-project/monero-site](https://github.com/monero-project/monero-site)

Since its inception, the Monero website has had over 320 commits from 14 contributors. The community has been fantastic at supporting the initiative and helping shape the information on the site. As we roll out new tools to make contributing to the site even easier, we can only expect this to grow.

**Looking Forward: 2016**

We accomplished a great deal in 2015, with ever more to do. In 2016 we are hoping to tick more items off of our Design and Development Goals, and continue the slow and steady move towards Monero becoming a privacy suite.

We hope you will continue with us on this journey, and we look forward to an excellent 2016!

Your Core Team - Riccardo "fluffypony" Spagni, luigi1111, NoodleDoodle, smooth, tacotime, Franciso "ArticMine" Cabañas, othe