---
entry: "Network Database"
tags: ["kovri"]
terms: ["Network-Database"]
summary: "A distributed database which contains needed router information so the network can stay intact"
---

### The Basics

@network-database is a [distributed database](https://en.wikipedia.org/wiki/Distributed_database) which contains router information that peers must use so the network can stay intact.

### In-depth information

From @Java-I2P:

>
@I2P's @network-database is a specialized distributed database, containing just two types of data - router contact information (@Router-Infos) and @destination contact information (@LeaseSets). Each piece of data is signed by the appropriate party and verified by anyone who uses or stores it. In addition, the data has liveliness information within it, allowing irrelevant entries to be dropped, newer entries to replace older ones, and protection against certain classes of attack.

>
The @network-database is distributed with a simple technique called "@floodfill", where a subset of all routers, called "@floodfill routers", maintains the distributed database.

### Notes

Read [Network-Database](https://geti2p.net/en/docs/how/network-database) for details.
