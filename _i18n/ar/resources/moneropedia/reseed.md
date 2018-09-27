---
tags: ["kovri"]
terms: ["Reseed"]
summary: "The method of which Kovri uses to bootstrap into the I2P network"
---

{% include untranslated.html %}
### The Basics

When you start @Kovri for the first time (or if it's been offline for a long time), @Kovri will need a list of peers to connect to so it can [bootstrap](https://en.wikipedia.org/wiki/Bootstrap) into the @I2P network. @Kovri gets these peers from a special file stored on a reseed server. On this file are all the various pieces of information @Kovri needs in order to connect with @I2P peers.

### In-depth information

@Kovri has a list of [hard-coded](https://en.wikipedia.org/wiki/Hard-coded) reseed servers available to fetch from. These servers securely serve an [SU3](https://geti2p.net/spec/updates#su3) file (signed with a cryptographic @signature) over @clearnet with [HTTPS](https://en.wikipedia.org/wiki/HTTPS). This SU3 file contains information that's used to verify both the integrity of the file and its content.

Aside from the technical elements needed to verify and process the file, the file's main contents consist of a series of @router-info files which @Kovri and @I2P routers use to locate and communicate with other @I2P peers. These peers are then stored into a @network-database.
