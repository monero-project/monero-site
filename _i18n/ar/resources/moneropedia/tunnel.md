---
tags: ["kovri"]
terms: ["Tunnel", "Tunnels"]
summary: "Uni-directional virtual paths that pass messages through a defined sequence of I2P routers"
---

{% include untranslated.html %}
### The Basics

When you communicate over @I2P (visit an @eepsite / use a @garlic-service), you'll first need to connect to a peer by using @transports and then build virtual *tunnels*. These virtual tunnels are temporary, uni-directional paths that pass information through a defined sequence of @I2P routers to your @destination. Tunnels are built, and then used, with layered @garlic-encryption and are a general-purpose mechanism to transport all @I2NP @messages.

Each peer builds, at a minimum, *two* uni-directional tunnels: one for **outbound traffic**, and one for **inbound traffic**. These tunnels are classified as either **inbound tunnels** (where @messages come toward the creator of the tunnel) or **outbound tunnels** (where the tunnel creator sends @messages away from the creator of the tunnel). Thus, *four* tunnels are required for a single round-trip @message and reply to your @destination (two for your, two for your destination).

### In-depth information

From @Java-I2P:

>
Within I2P, @messages are passed in one direction through a virtual tunnel of peers, using whatever means are available to pass the @message on to the next hop. Messages arrive at the tunnel's gateway, get bundled up and/or fragmented into fixed-size @tunnel @messages, and are forwarded on to the next hop in the tunnel, which processes and verifies the validity of the @message and sends it on to the next hop, and so on, until it reaches the @tunnel endpoint. That endpoint takes the messages bundled up by the gateway and forwards them as instructed - either to another router, to another tunnel on another router, or locally.

>
Tunnels all work the same, but can be segmented into two different groups - inbound tunnels and outbound tunnels. The inbound tunnels have an untrusted gateway which passes messages down towards the tunnel creator, which serves as the tunnel endpoint. For outbound tunnels, the tunnel creator serves as the gateway, passing messages out to the remote endpoint.

>
The tunnel's creator selects exactly which peers will participate in the tunnel, and provides each with the necessary configuration data. They may have any number of hops. It is the intent to make it hard for either participants or third parties to determine the length of a tunnel, or even for colluding participants to determine whether they are a part of the same tunnel at all (barring the situation where colluding peers are next to each other in the tunnel).

### Notes

From @Java-I2P:

>
@I2P is an inherently packet switched network, even with these tunnels, allowing it to take advantage of multiple tunnels running in parallel, increasing resilience and balancing load. Even though the tunnels within I2P bear a resemblance to a circuit switched network, everything within I2P is strictly message based - tunnels are merely accounting tricks to help organize the delivery of messages. No assumptions are made regarding reliability or ordering of messages, and retransmissions are left to higher levels (e.g. I2P's client layer streaming library).

### Documentation

For specification and detailed documentation, visit the [Tunnel-Routing](https://geti2p.net/en/docs/how/tunnel-routing) and [Tunnel-Implementation](https://geti2p.net/en/docs/tunnels/implementation) page.
