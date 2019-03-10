---
tags: ["kovri"]
terms: ["I2NP"]
summary: "The I2P Network Protocol: the mechanism in which I2NP messages are sent over the I2P network"
---

### The Basics

From @Java-I2P:

>
@I2NP manages the routing and mixing of messages between routers, as well as the selection of what transports to use when communicating with a peer for which there are multiple common transports supported

### In-depth information

From @Java-I2P:

>
@I2NP (@I2P Network Protocol) @messages can be used for one-hop, router-to-router, point-to-point @messages. By @encrypting and wrapping @messages in other @messages, they can be sent in a secure way through multiple hops to the ultimate @destination. @I2NP does not specify nor require any particular @transport layer but does require at least one @transport in use.

>
Whenever a @destination wants to send a message to to another @destination, it provides its local router with both the @destination structure and the raw bytes of the message to be sent. The router then determines where to send it, delivers it through outbound @tunnels, instructing the end point to pass it along to the appropriate inbound @tunnel, where it is passed along again to that @tunnel's end point and made available to the target for reception.

### Notes

Read more about the @I2NP [protocol](https://geti2p.net/en/docs/protocol/i2np) and [specification](https://geti2p.net/spec/i2np).
