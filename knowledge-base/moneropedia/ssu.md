---
layout: moneropedia
entry: "SSU"
tags: ["kovri"]
terms: ["SSU"]
summary: "I2P's Secure Semi-reliable UDP layer"
---

### The Basics

*Secure Semi-reliable UDP* (SSU) is one of two encrypted @transport layers for @Kovri/@I2P.

SSU's *primary* purpose is to securely transmit @in-net @I2NP messages through @tunnels over encrypted [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol).

### In-depth information

- Much like its @NTCP counterpart, SSU is a connection-oriented, point-to-point data transport
- Termed *semi-reliable* because SSU will repeatedly retransmit *unacknowledged* messages (up to maximum number then dropped)
- SSU also provides several unique services (in addition to its function as a @transport layer):
  - IP detection (local inspection + peer testing)
  - NAT traversal (using introducers)
  - Firewall status
  - If implemented, SSU can notify NTCP if the external address or firewall status changes

### Notes

For further details, read @Java-I2P's [SSU](https://geti2p.net/en/docs/transport/ssu)
