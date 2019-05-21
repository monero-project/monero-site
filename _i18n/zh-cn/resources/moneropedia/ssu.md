---
tags: ["kovri"]
terms: ["SSU"]
summary: "Secure Semi-reliable UDP: one of two Kovri transports"
---

### 基础知识

*安全半可靠UDP（用户数据报协议）*是@Kovri的两种加密@传输方式之一。


与@NTCP类似，@SSU的*主要*目的是通过@隧道安全地传输@网内@I2NP消息，但与@NTCP不同，@SSU功能仅通过加密的[UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol)。

### 深度信息

- 与@NTCP一样，@SSU也是面向连接的点对点数据传输
- 称为“半可靠”，因为@SSU将重复转发“未确认的”消息（达到最大数量则丢弃）。
- @SSU还提供了几个独特的服务（除了它作为@传输层的功能）:
  - IP检测（本地检测或使用[对等节点测试](https://geti2p.net/en/docs/transport/ssu#peerTesting)）
  - [网络地址转换](https://en.wikipedia.org/wiki/Network_address_translation)遍历  （使用[介绍人](https://geti2p.net/en/docs/transport/ssu#introduction)）
  - [防火墙](https://en.wikipedia.org/wiki/Firewall_%28computing%29)状态，如果执行，@SSU可以通知@NTCP如果外部地址或防火墙状态发生变化


### 备注

更多细节，请阅读@Java-I2P的[SSU](https://geti2p.net/en/docs/transport/ssu)