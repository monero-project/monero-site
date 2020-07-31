---
tags: ["kovri"]
terms: ["Network-Database"]
summary: "A distributed database which contains needed router information so the network can stay intact"
---

### 基础知识

@网络数据库是一个[分布式数据库](https://en.wikipedia.org/wiki/Distributed_database)，其中包含对等节点必须使用的路由器信息，这样网络才能保持完整。

### 深度信息

来自 @Java-I2P:

>
@I2P的@网络数据库是一个专门的分布式数据库，只包含两种类型的数据—路由器联系信息(@路由器信息)和@目标联系信息(@租约集)。每一段数据都由适当的一方签署，并由使用或存储它的任何人验证。此外，数据中还包含活跃的信息，允许删除不相关的条目，更新的条目替换旧的条目，以及抵御某些类型的攻击。

>
@网络数据库使用一种称为“@泛洪填充”的简单技术进行分布式，其中所有路由器的一个子集（称之为“@泛洪填充路由器”）维护分布式数据库。



### 备注

详情请阅读[网络数据库](https://geti2p.net/en/docs/how/network-database)。
