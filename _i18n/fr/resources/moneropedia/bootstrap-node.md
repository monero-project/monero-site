---
layout: moneropedia
entry: "Bootstrap-node"
terms: ["bootstrap-node", "bootstrap-nodes"]
summary: "A node to which a daemon connects to give immediate usability to wallets while syncing"
---

### The Basics

The daemon running on a local @node has to sync with other (remote) @nodes. While it is not fully synced, @wallet may still be connected to the local node. Therefore, the @wallet cannot access the @blocks that are bot yet synced on the local @node.

To allow the @wallet to be immediately usable, the daemon on the local @node uses a bootstrap node to which the RPC request are proxying to, giving access to the missing @blocks.

Note: the replies from the bootstrap node may be untrustworthy.
