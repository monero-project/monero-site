---
layout: post
title: "Monero will undergo a network upgrade on 16th July, 2022"
summary: Announcement of the upcoming network upgrade (16th July, 2022)
tags: [community, protocol upgrade, core, crypto]
author: sethforprivacy
image: /blog/assets/2022-04-20-network-upgrade-july-2022/upgrades.png
---

<div align="center">
    <img src="{{ page.image }}" width="350px">
</div>

The next network upgrade will take place on **16th July, 2022** (block 2,668,888). Network upgrades are technically hard-forks and require all participants in the Monero network to update their software. The new software (**v0.18 "Fluorine Fermi"**) will be released one month before the network upgrade, on the **~16th of June**.

This network upgrade will introduce important new features like:

- A ring-size increase from 11 to 16 -- **the largest ever absolute increase in the base anonymity set** (read: plausible deniability, or base privacy) -- of every transaction on the network
- [Upgraded Bulletproofs algorithm, "Bulletproofs+"](https://www.getmonero.org/2020/12/24/Bulletproofs+-in-Monero.html), which will **reduce the typical transaction size by ~5-7%** and **improve typical verification performance by ~5-7%**, making every transaction lighter and faster
- [View tags, a brilliant way to **reduce wallet sync times by 30-40%**](https://localmonero.co/knowledge/view-tags-reduce-monero-sync-time)
- Fee changes, **improving the security and resilience of the network** to rapid changes in the fee market or attacks by malicious entities

The complete list of changes and improvements will be released along with the new binaries.

The logs of the meeting where the dates of the network upgrade were decided [are available on Github](https://github.com/monero-project/meta/issues/684).

To learn more about how Monero uses hard-forks to upgrade the network, you can read this article from LocalMonero: ["How Monero Uses Hard-Forks to Upgrade the Network"](https://localmonero.co/knowledge/network-upgrades)

### Common questions

**Q:** Hard-fork? Does this mean there will be a split and a new coin will be created?  
**A:** *No. Hard-forks in Monero are made to improve the base protocol, and are non-contentious. There will be no split and no new coin will be created.*

**Q:** What do I have to do to be prepared for this upgrade?  
**A:** *A new release will be announced before the network upgrade (around the 16th of June). You will only have to be using the updated software by the time the network upgrade occurs (16th July). To the end user, it will be like a simple software update.*

**Q:** How do I update my wallet/node?  
**A:** *Detailed instructions will be posted along with the software update, but basically users will need to simply replace their previous software (monerod, monero-wallet-cli, monero-wallet-gui) with the new version. That's it.*

**Q:** If I have my coins on a paper wallet, do I have to do something?  
**A:** *No. You will simply have to use an updated version of the Monero software when you will decide to move your coins.*

**Q:** If I have my coins on a hardware wallet, do I have to do something?  
**A:** *Yes, you will need to update the Monero app or device firmware from the manufacturer once the appropriate update is available. Always be sure you go straight to the official website of the manufacturer to get these updates!*

**Q:** Will there be any changes to the PoW algorithm?  
**A:** *No. The PoW algorithm will not be affected. Mining will work as before and miners won't need to update their software.*

If you have further questions about the hard-fork, please reach out in [r/MoneroSupport](https://www.reddit.com/r/monerosupport) or via [#monero on IRC or Matrix]({{ site.baseurl_root }}/community/hangouts/).
