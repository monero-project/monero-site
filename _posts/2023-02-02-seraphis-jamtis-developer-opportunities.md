---
layout: post
title: Developer Opportunities at the Monero Project
summary: Join the Monero dev community to implement the two brand-new technologies Seraphis and Jamtis 
tags: [community, development, seraphis, jamtis, ccs, magic]
author: René Brunner (rbrunner7)
---

### Overview

Monero is a cryptocurrency started in 2014. It's often called a *privacy coin*: Transaction senders, receivers and amounts are all not visible to outsiders on the blockchain, in stark contrast to most other cryptocurrencies, including Bitcoin. However, many proponents do not primarily see privacy as an end in itself but something that is needed for Monero for being able to function as a true electronic version of cash. For an introduction see [What is Monero](https://www.getmonero.org/get-started/what-is-monero/).

The Monero dev community is currently implementing two brand-new technologies called *Seraphis* and *Jamtis* to improve privacy further and add functionality. According to some still very rough estimates those may be ready to bring into service with a hardfork in 2 years' time. Quite a lot of new code needs to get implemented, and a lot of existing code modified and adjusted; it's probably the biggest single coding related project for the currency ever.

Does that sound like something you may want to work on? Can you write sophisticated C++ code, or are you able to learn to do so "on the job", and ready to work as a member of an open source dev team? Then please have a closer look.

There is no company behind the Monero Project to manage dev work; it's an open source project as true as they get nowadays. It doesn't depend on VC companies openly involved in financing either that could force the project into directions that benefit themselves more than the Monero users. "Meritocracy" may be pretty grand and a bit overused as a concept, but if your work has merit you will get your code merged into software that is used to manage a cryptocurrency with a market valuation in the billions of USD.

### Project Background

Monero came into existence in 2014 when a group of 7 devs forked the code of a cryptocurrency called *Bytecoin* to start a new, independent blockchain with a fresh genesis block. Its starting point was therefore a moderately large C++ codebase built from scratch since maybe 2011 to implement a new privacy coin technology called *CryptoNote* for the first time.

Over time many features and privacy enhancements were added, and today the code has grown to maybe something like tripple original size. Given how many different people worked on the code for many years already, and given the true open source style of development where nobody can just dictate things, the code is still in reasonable shape. There are nevertheless parts with a size and a complexity that makes them struggle to fit within the original framework that still largely stands.

We have [developer documentation](https://www.getmonero.org/resources/developer-guides/), but unfortunately there is nothing that documents the overall code structure, or the hierarchy of classes, or gives a high-level overview of the functionality. This together with the fact that C++ is not the easiest of programming languages when it comes to understand a large codebase makes it a bit difficult for new devs to find their way around; but on the other hand the "culture" among the devs is very welcoming and supporting to people who are serious to contribute.

You find the project [on GitHub](https://github.com/monero-project). The most important repository is the one with the core software, e.g. the Monero *daemon* that spans up the network and manages the blockchain, see [its repository](https://github.com/monero-project/monero). You find the "places to be" like the dev-oriented Libera.chat IRC channel *#monero-dev* on the ["Hangouts" page](https://www.getmonero.org/community/hangouts/).

### Seraphis and Jamtis

A group of Monero devs started to work on two brand-new and sizeable technologies called *Seraphis* and *Jamtis* which will improve the privacy of Monero transactions further and will solve many problems regarding current functionality. Those devs get support from the inventor of Seraphis, [UkoeHB](https://github.com/UkoeHB), and the inventor of Jamtis, [Tevador](https://github.com/tevador). The resulting cryptocurrency will be quite different from today's Monero, although existing users will be offered a seamless upgrade path, and funds from all the way back to 2014 remain fully spendable indefinitely.

Over the course of about one year UkoeHB built a library that implements all the cryptography behind Seraphis and contains code to create transactions. You find it [in UkoeHB's repository](https://github.com/UkoeHB/monero/tree/seraphis_lib/src/seraphis).

Work has now started on the so-called *Seraphis wallet* that will make heavy use of the Seraphis library. *wallet* in this context does not mean an app that end users run to manage their XMR, but that component of the Monero core code that such apps will build on. The main functionality of that component: Reading and writing wallet files that contain keys and all owned outputs, scanning the blockchain for incoming transactions, building new transactions and submitting them to the network.

The current plan is to fully replace *wallet2*, the existing component doing all this. This will require a lot of adjustments in the rest of the Monero core codebase, and of course reworking all wallet apps that depend on it. For more details [check the wiki](https://github.com/seraphis-migration/strategy/wiki).

### Financial Matters

There is no company behind the Monero Project, it has no employees: Devs seeking more or less conventional employment best look elsewhere. It does not actively seek venture capital either. Monero runs on contributions from people that basically work "for free", and on donations from the broader community to finance larger tasks.

One of these funding methods is the *CCS*, the *Community Crowdfunding System*. You can find more details [on the website](https://ccs.getmonero.org/).

Basically anybody can write a proposal for it, and if it gets positive feedback it moves to the funding stage where of course success depends on whether donators will find the proposed work and goal worthwhile.

Realistically however it's pretty hard to get a proposal accepted if you are all new to Monero, nobody in the community knows you yet and you have never contributed anything so far. Much is about trust and demonstrated abilities, as it typically is the case in open source projects.

The CCS has a long history of successfully funded and executed tasks.

Another option for funding Monero related work is the [MAGIC Monero Fund](https://magicgrants.org/funds/monero). Its nature is quite different from the CCS as it's a USA-registered 501(c)(3) charity. This enables tax-deductible (for citizens of the USA) donations in a variety of methods, and the option of USD-denominated payouts. There is also an additional requirement that fund recipients must verify their identity. The CCS allows its fund recipients to remain anonymous, yet only handles XMR.

### Conclusion

There will be a lot of interesting work for devs that want to join the Monero project, for a long time. It may be a bit unusual as a "place" to work at, and for getting rich probably look elsewhere, but on the other hand think about it: Where else can you make a difference for a multi-billion-dollar venture that may become important in the future and make a difference, whoever you are, from wherever you are, regardless of education, only based on your knowledge and your willingness to make useful contributions?
