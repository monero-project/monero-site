---
layout: post
title: "General Fund Transparency Report (June 2021 - March 2023)"
summary: A report on the usage of XMR in the General Fund managed by the Core Team. Covers between 16th of June 2021 to 1st of March 2023.
tags: [community, core]
author: binaryFate
---

# Monero General Fund Transparency Report

Welcome to the March 2023 transparency report of the "General Fund" (GF), presenting data until March 1st 2023.

The Core Team escrows the Monero General Fund; I am currently the person taking care of this.

If you are new to Monero and more familiar with other "crypto" projects, let me first clarify some things:  
The Core Team is not paid (Monero has no "dev tax") and they are not in any way, shape or form entitled to any part of the coin supply (Monero has no "premine"). The GF is funded entirely by donations from our community. The Core Team including myself perform all tasks strictly as volunteers.

What is the purpose of the General Fund?

Firstly, pay for the infrastructure needed to support a grassroot community-driven project. That is, the servers and services used to allow people to interact, communicate, develop code and produce content, build, host, download securely, etc. Nowadays we often find sponsors to cover most of the infrastructure costs, even if often just few months at a time. A list of these (past and present) sponsors can be found [here](https://www.getmonero.org/community/sponsorships/).

Secondly, the GF is used to support Community Crowdfunding System (CCS) proposals at the discretion of the Core Team. "At the discretion" is not meant to be opaque or arbitrary. Using the GF, the agreed policy of the Core Team is to support CCS proposals considered _fundamental_ to the Monero project: development of the core Monero software, key research pieces (ex: Seraphis), and key community-organised events such as the annual Monero conference. When donors do not have the desire, time or knowledge to research projects in detail, they can donate to the GF and entrust the Core Team with this task.

In case you do not have the time to go through all details presented here yourself, just know that all spending within the GF is tracked and reported.

Is there a more specific way to support Monero?

Check the [Community Crowdfunding System](https://ccs.getmonero.org/) if you want to support specific proposals put forward by contributors.

## Wallet access

[Fluffypony](https://www.reddit.com/user/fluffyponyza) and I have the seed for the GF wallet. When Fluffy was placed into custody in the US, [I mentioned](https://twitter.com/binaryFate/status/1422336732435947521) that I had moved the funds to a wallet he did not have access to. I created a secondary wallet (GF2) that simply contains the bulk of the funds. I regularly spill funds over from GF to GF2 when there is too much in GF, and only spend from GF for simplicity of tracking. Hence there was no outgoing transaction from GF2, which effectively acts as a saving wallet so far. The primary wallet (GF) remains the same, as it has the donation address everyone knows.

Note that multisig was not an option due to some serious vulnerabilities we were aware of. We may re-evaluate this in the future.

If something were to happen to me, I have put measures in place and the relevant seeds would be recovered by other members of the Core Team.

## Wallets transparency

The Monero General Fund donation address is: `888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H`. The secret view key is: `f359631075708155cc3d92a32b75a7d02a5dcf27756707b47a2b31b21c389501`. Note you need to use the base address for restoring a view-only wallet, it is: `44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A`.

You can also have a look at the GF2 wallet with `47Q7HtVaKZKKfxEwK1qJgDdutgxYu892b1qu34Yy1Fow5m1hPQCpQNx6cBTc6tgJDvdggtHqssfybH5AJSaud7t3DffrAXw` and `5c58e403ec2076594f4791b0322ad4b8720ad6bedfafee03aa3ff97f7b1a540f`.

Additionally you can verify their outgoing transactions and their exact balances as of March 1st 2023, using the exported key images (see links further).

The Bitcoin donation address is: `1KTexdemPdxSBcG55heUuTjDRYqbC5ZL8H`, you do not need a view key to track it or verify its balance ;)

## Balances

Current balance in GF wallets: `8452.852736506467` XMR, and `0.21521815` BTC

This balance has been consistently increasing over the last ~20 months since last report (16th of June 2021).

Assuming I did not mess up my spreadsheet game, we have:

*   Spent since last report: `515.856180207752` XMR
    
*   Received since last report: `3331.12968748522` XMR
    

## Some notes

*   Last October we received a massive (2500 XMR) donation, and the donor expressed the intent of purchasing the domain Monero.com. After discussions with the current owner of that domain, we did not come to an agreement. If the person who donated 2500 XMR were to reach out to me, I am willing to refund this donation to them, as an exception. For practical reasons, this offer will not stand indefinitely, so I will set a deadline of 1st of September 2023 for this person to contact me directly and prove themselves cryptographically.
    
*   The repayments to me are because I covered some servers for many months out of pocket (at some point being $15k down), while we were missing and unsure about some sponsors. For the record, I had mentioned these repayments in several public community meetings before executing on them.
    
*   At times there were some CCS proposals that I would have deemed fundamental and been happy to support using the GF. However, for opsec reasons I do not always have daily or quick access to the GF, and these proposals were quickly funded whole by the community. A good problem to have :)
    

## Links

See [this spreadsheet](https://downloads.getmonero.org/GF_wallet_report_March_2023.ods) with all wallets transactions exported via "export\_transfers", and annotations for outgoing ones.

You can find key images for the GF wallet [here](https://downloads.getmonero.org/GF_wallet_key_images_until_20230301) and for the GF2 wallet [here](https://downloads.getmonero.org/GF_wallet2_key_images_until_20230301).

I hope this is useful to the community and I will be happy to answer further questions.