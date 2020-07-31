---
tags: ["kovri"]
terms: ["Garlic-Encryption", "Layered-Encryption"]
summary: "Layered encryption as implemented in Kovri / I2P"
---

### 基础知识

@大蒜加密是@I2P实现的基于@消息的@分层加密（类似于基于流的[洋葱路由](https://en.wikipedia.org/wiki/Onion_routing)）。

通过分层@加密@消息，这允许@消息通过一系列代理路由，而不允许代理（或任何中介）读取@信息的内容。@分层加密是@Kovri、@I2P和[Tor](https://torproject.org)中的一个基本特性，也是在这些覆盖网络中保护匿名性的基石。

### 深度信息

对于@大蒜加密，@Kovri/@I2P与Tor的主要区别是:

- @Kovri/@I2P将多条@消息捆绑在一起，形成大蒜“蒜瓣”
  - 一个“蒜瓣”中可以包含任意数量的消息，而不是*只有*一条消息
- @Kovri/@I2P使用[ElGamal](https://en.wikipedia.org/wiki/ElGamal)/[AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) @加密@消息并@传输


### 备注

有关详细信息，请参见@大蒜路由。
