---
layout: moneropedia
entry: "SSU"
tags: ["kovri"]
terms: ["SSU"]
summary: "Secure Semi-reliable UDP: one of two Kovri transports"
---

### The Basics

*Secure Semi-reliable UDP* is one of two encrypted @transports for @Kovri.

Similar to @NTCP, @SSU's *primary* purpose is to securely transmit @in-net @I2NP messages through @tunnels but, unlike @NTCP, @SSU functions solely over encrypted [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol).

### In-depth information

- Like @NTCP, @SSU is a connection-oriented, point-to-point data transport
- Termed *semi-reliable* because @SSU will repeatedly retransmit *unacknowledged* messages (up to maximum number then dropped)
- @SSU also provides several unique services (in addition to its function as a @transport layer):
  - IP detection (local inspection or with [peer testing](https://geti2p.net/en/docs/transport/ssu#peerTesting))
  - [NAT](https://en.wikipedia.org/wiki/Network_address_translation) traversal (using [introducers](https://geti2p.net/en/docs/transport/ssu#introduction))
  - [Firewall](https://en.wikipedia.org/wiki/Firewall_%28computing%29) status and, if implemented, @SSU can notify @NTCP if the external address or firewall status changes

### Notes

For further details, read @Java-I2P's [SSU](https://geti2p.net/en/docs/transport/ssu)
