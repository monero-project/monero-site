---
tags: ["kovri"]
terms: ["Router-Info", "Router-infos"]
summary: "A data structure or file which contains an I2P peer's needed network information"
---

### The Basics

@Router-Info is a data structure (periodically written to a [binary file](https://en.wikipedia.org/wiki/Binary_file)) which contains all needed information to locate, identify, and communicate with an @I2P peer. @Router-Info includes IP address, router identity, other misc. technical details; is needed for @network-database and is published to @floodfill routers.

### In-depth information

In human-readable form, Router-Info may look like this:

```
Identity: [RouterIdentity:
Hash: nYZ5Qe7gQ-~QgfgJVRUG4c0JnVeVqzM~duUX1EGT1ek=
Certificate: [Certificate: type: Key certificate
Crypto type: 0
Sig type: 7 (EdDSA_SHA512_Ed25519)]
PublicKey: [PublicKey: size: 256]
SigningPublicKey: [SigningPublicKey EdDSA_SHA512_Ed25519: size: 32]
Padding: 96 bytes]
Signature: [Signature EdDSA_SHA512_Ed25519: size: 64]
Published: Sun Oct 09 01:34:59 UTC 2016
Options (5):
        [caps] = [LfR]
        [netId] = [2]
        [netdb.knownLeaseSets] = [37]
        [netdb.knownRouters] = [2435]
        [router.version] = [0.9.26]
Addresses (4):
[RouterAddress:
Type: SSU
Cost: 4
Options (5):
        [caps] = [BC]
        [host] = [2a01:e35:8b5c:b240:71a2:6750:8d4:47fa]
        [key] = [nYZ5Qe7gQ-~QgfgJVRUG4c0JnVeVqzM~duUX1EGT1ek=]
        [mtu] = [1472]
        [port] = [22244]]
[RouterAddress:
Type: NTCP
Cost: 9
Options (2):
        [host] = [2a01:e35:8b5c:b240:71a2:6750:8d4:47fa]
        [port] = [22244]]
[RouterAddress:
Type: SSU
Cost: 6
Options (4):
        [caps] = [BC]
        [host] = [88.181.203.36]
        [key] = [nYZ5Qe7gQ-~QgfgJVRUG4c0JnVeVqzM~duUX1EGT1ek=]
        [port] = [22244]]
[RouterAddress:
Type: NTCP
Cost: 11
Options (2):
        [host] = [88.181.203.36]
        [port] = [22244]]]
```

### Notes

For details and specification, visit @Java-I2P [Network Database](https://geti2p.net/en/docs/how/network-database) page.
