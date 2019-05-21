---
tags: ["kovri"]
terms: ["NTCP"]
summary: "NIO-Based TCP (Non-blocking I/O based TCP): one of two Kovri transports"
---

### 基础知识

*基于NIO（非阻塞I/O）的TCP（传输控制协议）*是@Kovri的两种加密@传输之一。

与@SSU类似，@NTCP的*主要*目的是通过@隧道安全地传输@网内@I2NP消息，但与@SSU不同，@NTCP的功能仅通过加密的[TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)。

### 深度信息

 - 传递个别@I2NP消息（标准及时间同步）后:
   - TCP已经建立
   - 建立顺序已完成
 - 使用以下@加密:
   - 2048位 [Diffie-Hellman](https://en.wikipedia.org/wiki/Diffie-hellman)
   - [AES-256](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)/[CBC](https://en.wikipedia.org/wiki/Block_cipher_modes_of_operation)
 - 建立序列有以下*状态*:
   - 准备建立
   - 建立
   - 已建立或“建立完成”
 - 使用以下来自@网络数据库:
   - 传输名称:NTCP
   - 主机:IP （IPv4或IPv6）或主机名（缩写IPv6地址（带“::”）是允许的）
   - 端口:1024 - 65535


### 备注

更多详细信息，请阅读@Java-I2P的[NTCP](https://geti2p.net/en/docs/transport/ntcp)