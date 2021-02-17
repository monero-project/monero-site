---
terms: ["remote-node", "remote-nodes"]
summary: "Nodes which are not running in the same machine as the wallet. Open remote nodes allow to use the Monero network immediately"
---

{% include disclaimer.html translated="no" translationOutdated="no" %}
A @node that doesn't run on the same local machine where the Monero @wallet is located is called "Remote Node" and can be private or open.

A **private remote node** doesn't run on your local machine, but you have full control over it. A classic example is a node running on a VPS or a server. That node is not on your local machine, but you have full control over it. You can even decide to make it become an open node, allowing people to connect to it.

An **Open remote node** can be used by people who, for their own reasons (usually because of hardware requirements, disk space, or technical abilities), cannot/don't want to run their own node and prefer to relay on one publicly available on the Monero network. Open remote nodes are often simply referred as "remote nodes".

Using an open node will allow to make a @transaction instantaneously, without the need to download the @blockchain and sync to the Monero network first, but at the cost of the control over your privacy. the Monero community suggests to always run your own node to obtain the maximum privacy possible and to help decentralize the network.

### Public Nodes

Open nodes are cool because, as we said above, allow people who are not running their own node to immediately join the Monero network. There are 2 main ways to connect to an open node: Simply get somebody to share with you their node, by asking them to "open it" and provide you with IP address and port, or use a public one.

Public nodes are reachable in the network using two systems:

- **Node aggregators**, which are basically lists of open remote nodes. The operators of those nodes decided to add them to the aggregator so that other people can use them. The aggregator will provide to the person who want to use a remote node a simple URL. This URL connects to one of the nodes in the list and will need to be inserted in the Monero wallet (GUI or CLI). The wallet will then contact one of the nodes provided by the URL and will allow the end user to immediately receive and send transactions. One of the most famous node aggregators is [MoneroWorld](https://moneroworld.com/#nodes).
- **Native public nodes**. This is one of the new coolest features the Monero devs came up with to improve the user experience and to make easier to connect to the network. The CLI wallet allow to make a node public by simply adding the flag `--public-node`. Doing so, it will be advertised on the P2P network and people will be able to connect to it (or to another public node advertising itself in the same way) using the related option in the GUI and CLI wallets.

Be aware that using public remote nodes can be risky. Node operators can link transactions to IP addresses. These risks can be mitigated, but you should always avoid using them if you have the possibility. Run your own node!