---
tags: ["kovri"]
terms: ["LeaseSet", "LeaseSets"]
summary: "Contains all currently authorized Leases for a particular I2P Destination"
---

### 基础知识

一个租约集包含一组针对一个特定@目标的授权@租约（和其他相关信息）。

### 深度信息

租约集包含:

- 为一个特定@目标，目前授权的所有@租约
- 可以被加密的大蒜消息的公钥（参见@大蒜路由）
- 用于撤销此结构的特定版本的签名公钥

租约集是存储在@网络数据库中的两个结构之一（另一个是@路由器信息），其密钥来自所包括目标的SHA256。

### 备注

要了解更多细节，请阅读@Java-I2P的[租约集](https://geti2p.net/en/docs/how/network-database#leaseSet)
