---
layout: post
title: Deprecating Monero's Custom Transaction Unlock Time
summary: Announcing the deprecation of Monero's Custom Transaction Unlock Time feature
tags: [announcements, community]
author: Justin Berman (j-berman)
---

Please be advised, the [Custom Transaction Unlock Time feature](https://www.getmonero.org/resources/moneropedia/unlocktime.html) is set to be deprecated at consensus with FCMP++. There is already a relay rule in place today that prevents nodes from accepting and relaying transactions with a Custom Unlock Time to the transaction pool ([source](https://github.com/monero-project/monero/pull/9151)). This is a formal announcement that the feature would be deprecated altogether with the FCMP++ fork, and **new** transactions with Custom Unlock Time set would not be able to enter the chain even if a miner mines them.

**All transactions created after June 1, 2026, and with an Unlock Time set to unlock after the FCMP++ fork, would unlock immediately when the FCMP++ fork block hits the chain.**

If we see a large influx of **new** Unlock Time transactions created between now and date June 1, 2026, the feature may be deprecated earlier than June 1, 2026. Deprecating avoids complications with the FCMP++ wallet integration, enabling a smoother wallet experience for all users. Note that a FCMP++ fork date is not set at the time this is written.

This change **will not** affect transactions **already created**. If you, a user, created a transaction in the past with an Unlock Time set to a future date (even years from today), then you are **not** affected by this change. Your transaction will unlock based on the Unlock Time you set when you created the transaction. This change will **only** affect **new** transactions.

### Why Deprecate?

The feature has caused a number of security, privacy, and fungibility issues over the years, and its known benefits do not outweigh its significant cons. Deprecating the feature has been discussed and supported for many years (see [here](https://github.com/monero-project/research-lab/issues/78), [here](https://github.com/monero-project/research-lab/issues/125), [here](https://www.reddit.com/r/Monero/comments/1amomjj/timelocks_let_us_finally_retire_a_rarely_used_and/), and [here](https://www.reddit.com/r/Monero/comments/1kgttsa/comment/mr3ioa0/)). [Merchant software has neglected to check the Unlock Time on received Monero, and incorrectly assumed that the Monero received is spendable, leading to losses](https://github.com/monero-project/research-lab/issues/78#issuecomment-925312477). [Transactions with Custom Unlock Time stick out in the chain like a sore thumb,  harming both privacy and fungibility](https://thecharlatan.ch/Monero-Unlock-Time-Privacy/). And the feature provides [no known major benefit](https://github.com/monero-project/research-lab/issues/78#issuecomment-924622985) that is not achievable through some other means (for example, see Time-Lock Puzzles described in the [PayMo paper](https://eprint.iacr.org/2020/1441.pdf)).

It is a common misconception that Monero's Unlock Time is useful for known atomic swap or payment channel protocols. To date, no scheme has been specified that utilizes Monero's Unlock Time feature. Bitcoin's Hash Time Locked Contracts (HTLCs), for example, have unique capabilities that render them useful in atomic swap and payment channel protocols, that Monero's Unlock Time feature does not have.

FCMP++ capable wallets are slated to keep a rolling cache of locked Monero outputs, so that wallets will be able to construct FCMP++ transactions without revealing any identifying information about their own outputs to nodes. See more on the design [here](https://github.com/monero-project/research-lab/issues/78#issuecomment-2415324570). The Unlock Time feature presents a Denial of Service vector because the cache could grow unbounded. Deprecating the feature now enables releasing FCMP++ capable wallets with no concern for this attack vector, enabling a smoother wallet experience for all users.
