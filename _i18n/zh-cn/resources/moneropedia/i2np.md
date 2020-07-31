---
tags: ["kovri"]
terms: ["I2NP"]
summary: "The I2P Network Protocol: the mechanism in which I2NP messages are sent over the I2P network"
---

### 基础知识

来自 @Java-I2P:

>
@I2NP管理路由器之间的路由以及消息混合，并且在与支持多种公共传输的对等节点通信时，选择使用什么方式传输。

### 深度信息

来自 @Java-I2P:

>
@I2NP （@I2P网络协议）@消息可以用于单跳、路由器到路由器、点对点@消息。通过@加密和在其他@消息中包裹@消息，可以通过多个跳转以安全的方式将它们发送到最终的@目标。@I2NP不指定也不要求任何特定的@传输层，但要求至少使用一次@传输。


>
无论何时@目标想要将消息发送到另一个@目标，它都会为其本地路由器提供@目标结构和要发送的消息的原始字节。然后路由器决定将它发送到哪里，通过出站@隧道交付它，指示端点将它传递到适当的入站@隧道，在那里它再次传递到该@隧道的端点，并提供给目标以供接收。

### 备注

阅读更多关于@I2NP[协议](https://geti2p.net/en/docs/protocol/i2np)和[规范](https://geti2p.net/spec/i2np)的信息。
