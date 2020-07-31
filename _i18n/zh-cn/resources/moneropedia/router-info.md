---
tags: ["kovri"]
terms: ["Router-Info", "Router-infos"]
summary: "A data structure or file which contains an I2P peer's needed network information"
---

### 基础知识

@路由器信息是一个数据结构（定期写入[二进制文件](https://en.wikipedia.org/wiki/Binary_file)），其中包含定位、标识和与@I2P对等节点通信所需的所有信息。@路由器信息包括IP地址、路由器标识和其他各种各样的技术细节;用于@网络数据库，并发布到@泛洪填充路由器。

### 深度信息

以人类可读的形式表现，路由器信息可能是这样的：

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

### 备注

有关详细信息和规范，请访问@Java-I2P [网络数据库](https://geti2p.net/en/docs/how/networkdatabase)页面。