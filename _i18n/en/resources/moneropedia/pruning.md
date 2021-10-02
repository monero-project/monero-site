---
terms: ["pruning"]
summary: "Feature that allows node operators to download and sync only 1/3 of the blockchain"
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

'Pruning' allows node operators to save 2/3 of storage space while keeping the full transaction history. Pruning works by removing 7/8 of unnecessary ring signature data. The 1/8 remaining data will be available to the other nodes and will be used to sync with the network. Other pruned nodes will have a random 1/8 of the data, which they will also make available to the network. There are no privacy or security downsides when using a pruned node.

There are three ways to prune:

- *Synchronize a pruned node from scratch:* You will download and sync only 1/3 of the full blockchain.

- *Prune an existing node:* The already existing blockchain will be pruned, but this will not result in a smaller blockchain. Instead, it will mark parts of the file as free, so that future data will use that free space, causing the file to not grow until free space grows scarce.

- *Create a new pruned blockchain from a full one:* A full blockchain that you already have will be used to create a new, pruned blockchain.

Pruned nodes are very useful and preferable to @remote-nodes, but if possible, users should run a full node and opt for pruning only in case if necessary.

The 'database pruning' feature [was added](https://github.com/monero-project/monero/pull/4843) on January 2019. See the [blog post]({{ site.baseurl }}/2019/02/01/pruning.html) for more information.
