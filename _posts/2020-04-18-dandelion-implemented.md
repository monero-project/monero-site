---
layout: post
title: "Another privacy-enhancing technology added to Monero: Dandelion++"
summary: Dandelion++ has been integrated and will be available in the next release
tags: [community]
author: ErCiccione
---

The Pull Request which adds Dandelion++ [has been merged](https://github.com/monero-project/monero/pull/6314). This new feature changes the way transactions are propagated to the network, making it much harder to link a transaction to an IP address.

The feature is now part of the code and will be included in the next release of the Monero software, but it's already possible to test it by compiling the CLI software from source (see [instructions on the repository](https://github.com/monero-project/monero#compiling-monero-from-source)). Be aware that to get improved privacy, a node running Dandelion++ needs to communicate with other Dandelion++ capable nodes.

For more detailed information about Dandelion++, how it works and how improves Monero user's privacy, read the article written by the Monero Outreach workgroup: ["Dandelion++ for Monero"](https://www.monerooutreach.org/stories/dandelion.html).
