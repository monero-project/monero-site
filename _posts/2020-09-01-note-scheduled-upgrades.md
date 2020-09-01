---
layout: post
title: A note on scheduled protocol upgrades
summary: Elaboration of the reduction in frequency of scheduled protocol upgrades.
tags: [community]
author: dEBRUYNE, Justin Ehrenhofer, and community members
---

Lately, there has been some misconception about the scheduled protocol upgrade policy as well as the original intent of the policy. The goal of this post is to provide further clarity to stakeholders.

Approximately five years ago, a somewhat formal policy was introduced to provide clarity to the ecosystem with respect to protocol upgrades. The policy essentially outlined that consensus changes would be introduced every six months on a set schedule (whilst allowing for potential reduction in frequency in case of substantial ecosystem growth). Consistently, Monero has performed protocol upgrades regularly in the past to introduce new privacy features or strengthen existing ones. Additionally, various consensus changes such as adjusting the dynamic block size algorithm, improving verification performance, and reducing the size of the range proofs ([with Bulletproofs]({{ site.baseurl }}/resources/moneropedia/bulletproofs.html)) were introduced. An overview can found in table A1 in the appendix. These consensus improvements have allowed Monero to improve considerably. As a result, Monero today is completely different than it was in 2014.

For a brief amount of time (between April 2018 and March 2019), these consensus updates additionally included changes to the proof-of-work algorithm (so-called tweaks) to preserve ASIC-resistance. We note, however, that these tweaks were merely meant as a stopgap until a long-term algorithm could be implemented. [RandomX]({{ site.baseurl }}/resources/moneropedia/randomx.html) currently fulfills this role and therefore no further changes to the mining algorithm are planned for the foreseeable future.

Over the last few years, the Monero ecosystem has grown substantially. Monero is supported by multiple third-party wallets, several hardware wallet providers, as well as a plethora of services and exchanges. As a result, maintaining a six-month schedule of protocol upgrades is increasingly difficult and effectively became untenable. Furthermore, continuing this upgrade pace may be detrimental to the ecosystem or inhibit its growth.

The community now feels that the Monero project and protocol have matured sufficiently to warrant a slower frequency; there is loose consensus that balancing the needs of the ecosystem with expectations for consensus changes and feature updates will mean protocol upgrades occur at an interval of about nine to twelve months. Clear advance notice will be given to ecosystem participants to encourage and aid development, testing, and deployment. The aim is to maintain this policy and assess its viability periodically based on the growth of the ecosystem.

**Appendix - Table A1 - Overview of major releases and protocol upgrades**

| Version Number | Name | Protocol Upgrade Date | Consensus Version | PoW Algorithm |
| --- | --- | --- | --- | --- |
| Genesis Block | - | 2014-04-18 | v1 | CryptoNight |
| 0.9 | Hydrogen Helix | 2016-03-20 | v2 | CryptoNight |
| 0.10 | Wolfram Warptangent | 2016-09-24 | v3 | CryptoNight |
| 0.10.1 | Wolfram Warptangent | 2017-01-05 | v4 | CryptoNight |
| 0.10.3 | Wolfram Warptangent | 2017-04-15 | v5 | CryptoNight |
| 0.11 | Helium Hydra | 2017-09-15 | v6 | CryptoNight |
| 0.12 | Lithium Luna | 2018-04-06 | v7 | CryptoNight v1|
| 0.13 | Beryllium Bullet | 2018-10-18 | v8+v9 | CryptoNight v2 |
| 0.14 | Boron Butterfly | 2019-03-09 | v10+v11 | CryptoNight-R |
| 0.15 | Carbon Chamaeleon | 2019-11-30 | v12 | RandomX |
| 0.16 | Nitrogen Nebula | No Protocol Upgrade| v12 | RandomX |
| 0.17 | TBD | 2020-10-TBD | v13 | RandomX |