---
entry: P2Pool
summary: 'Peer to peer mining pool for Monero'
terms: ["P2Pool", "monero-p2pool"]
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

### The Basics

Monero P2Pool is a peer-to-peer Monero @mining pool developed by SChernykh
(also known as sech1). P2Pool was a concept first developed for the Bitcoin
blockchain but was never fully realized due to certain limitations, mainly
because it had a problem with orphaned @blocks which is solved in Monero
P2Pool with uncle blocks.

Unlike a traditional mining pool, P2Pool allows it's users to fully control
their own @node and what it mines. P2Pool has no central server that can be
shutdown/blocked because it uses a separate blockchain to @merge-mine with
Monero. It is designed so that all blocks found by the pool pay out to the
miners immediately which means that funds are never in custody of a single
party.

To accomplish this P2Pool uses PPLNS payout scheme which rewards miners only
once the block has been found by the pool; miners with a share in the PPLNS
window are rewarded directly via the @coinbase-transaction reward for the
block.

### More Information

P2Pool is a @sidechain to Monero, and P2Pool blocks are potentially Monero
@blocks. Each miner submits block templates that include a payout for all of
the miners that currently have shares in the PPLNS window. High quality
block templates are added to the P2Pool blockchain as blocks which count as
"shares" for the miner who found them.

If a block is good enough to be a Monero block it is also submitted to the
Monero network to be included in its blockchain. Once the Monero block is
confirmed by the network, those miners are directly paid in the
@coinbase-transaction because they were included already in the block
template.

If P2Pool "shares" are found at the same block height as an existing share,
it is included as an uncle block (worth 20% less than a normal share) so
miners still get paid for it (uncle blocks can be submitted up to 3 blocks
behind the current height and still be included).

### Technical Details

Monero P2Pool is written from scratch in C++. It uses the high-performance
libuv library so each node is able to handle thousands of concurrent miner
connections. There are 2160 blocks in the PPLNS window with a block time of
10 seconds (approximately 6 hours).

The number of blocks was chosen so that the minimum payout would be
approximately 0.0004 XMR (this amount was considered high enough that it
could be transferred with minimal fees). Each individual miner payout takes
only 38 bytes on the Monero blockchain.

### External Links

- [P2Pool source](https://github.com/SChernykh/p2pool)
- [P2Pool pool stats](https://p2pool.io)
- [P2Pool Observer (mining data)](https://p2pool.observer)
