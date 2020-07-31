---
tags: ["kovri"]
terms: ["Transports", "Transport"]
summary: "The two encrypted transport layers for Kovri"
---

### 基础知识

@I2P提供了两种加密传输层技术，允许@Kovri安全地使用[TCP/IP](https://en.wikipedia.org/wiki/Tcp/ip)连接。这些技术(@SSU和@NTCP)被称为*@传输*。

### 深度信息

@SSU加密了[UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol)， @NTCP加密了[TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)。它们在[传输层](https://en.wikipedia.org/wiki/Transport_layer)提供@加密，因此更高级别的@消息可以通过@I2P网络上的@隧道被发送。

### 备注

- 阅读关于@I2P的传输的内容在 [传输](https://geti2p.net/en/docs/transport) 页面
- 了解 [OSI模型](https://en.wikipedia.org/wiki/OSI_model) 中的传输层

