---
layout: moneropedia
entry: "Node"
terms: ["node", "nodes", "full-node", "full-nodes"]
summary: "a device on the Internet running the Monero software, with a full copy of the Monero blockchain, actively assisting the Monero network"
---

### The Basics

{{ page.summary | capitalize }}.

### More Information

Nodes participate in the Monero network and secure @transactions by enforcing the rules of the network. Nodes download the entire @blockchain to know what transactions have taken place. Nodes assist the network by relaying transactions to other nodes on the network. Nodes may also choose contribute to the Monero network by participating in crafting @blocks (this is called @mining). 

Mining is the process by which nodes create a block from the previously accepted block, transactions that are waiting to be processed in the @tx-pool, and the @coinbase. When a node believes it has crafted a valid block it will transmit the completed block to other nodes on the network and those nodes signal agreement by working on the next block in the chain. 

The rules that nodes follow are built into the Monero software; When all nodes agree about the rules to follow this is called @consensus). Consensus is necessary for a cryptocurrency because it is how the blockchain is built; If nodes don't agree about which blocks are valid, for example people who have not updated their Monero software, those nodes that don't agree will no longer be able to participate in the Monero network.

The Monero Core Team plans for a @hardforks every 6 months, to occur in September and March of each year. At that time, if you are running a node it must be updated to the most recent version of the Monero software or it will no longer be able to participate in the network. 

---

##### Other Resources
<sub>1. *Fluffypony gives a great explanation of why mandatory hardforks are good for Monero.* ([Monero Missives for the Week of 2016-06-20](https://getmonero.org/2016/06/20/monero-missive-for-the-week-of-2016-06-20.html))</sub>
