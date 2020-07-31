---
tags: ["kovri"]
terms: ["Reseed"]
summary: "The method of which Kovri uses to bootstrap into the I2P network"
---

### 基础知识

当您第一次启动@Kovri（或者它已经离线很长时间了）时，@Kovri将需要一个对等节点列表来连接，以便[引导](https://en.wikipedia.org/wiki/Bootstrap)进入@I2P网络。@Kovri从存储在补种服务器上的特殊文件中获取这些节点。在这个文件里是@Kovri为了与@I2P对等节点连接而需要的各种各样的信息。

### 深度信息

@Kovri有一个[硬编码](https://en.wikipedia.org/wiki/Hard-coded)补种服务器列表可以用于获取。这些服务器使用[HTTPS](https://en.wikipedia.org/wiki/HTTPS)在@明网上安全地提供一个[SU3](https://geti2p.net/spec/updates#su3)文件(通过加密@签名来签署)。这个SU3文件包含用于验证文件及其内容完整性的信息。

除了验证和处理该文件所需的技术元素之外，该文件的主要内容还包括一系列@路由器信息文件，@Kovri和@I2P路由器使用这些文件来定位并与其他@I2P对等节点通信。然后将这些对等节点存储到@网络数据库中。
