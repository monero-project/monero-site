---
tags: ["kovri"]
terms: ["Garlic-Routing"]
summary: "Routing technology as implemented in Kovri"
---

### 基础知识

术语*@大蒜路由*有复杂的历史有不同的解读。按照目前的情况，门罗币将*@大蒜路由*定义为@Kovri和@I2P创建的基于@消息的互联网对等节点匿名覆盖网络的方法。

@大蒜路由的@大蒜加密类似于[洋葱路由](https://en.wikipedia.org/wiki/Onion_routing)的@分层加密，它有效地隐藏了发送方的IP地址，并确保从发送方发送到@目标的信息是安全的（反之亦然）。

### 历史

早在2000年6月，Roger Dingledine的[自由港硕士论文](http://www.freehaven.net/papers.html)（第8.1.1节）就以书面形式提出了*@大蒜路由*一词，该词源于“洋葱路由”一词。

就在2016年10月，[#tor-开发人员](https://oftc.net/WebChat/)对术语*@大蒜路由*的创建提供了一些见解:

[Nick Mathewson](https://en.wikipedia.org/wiki/The_Tor_Project,_Inc):

>我认为曾经试想过一种植物，其结构类似于'漏水管'拓扑结构，但我不认为我们曾经确定了一种。

[Roger Dingledine](https://en.wikipedia.org/wiki/Roger_Dingledine):

>在自由港的头脑风暴中，有一瞬间我们描述了一个路由机制，有人说“大蒜路由!”，大家都笑了。
所以我们肯定这个名字是我们在那个时候发明的。

*注:尼克·马修森（Nick Mathewson）和罗杰·丁格尔丁（Roger Dingledine）同意使用上述引用*


### 深度信息

在技术术语中，对于@Kovri和@I2P， *@大蒜路由*可以解释为以下任何/所有内容:

- @分层加密（类似于洋葱路由中的@分层加密）
- 将多个@消息捆绑在一起（大蒜瓣）
- ElGamal/ AES @加密

*注意:虽然[Tor](https://torproject.org/)使用@分层加密，但是Tor不使用ElGamal，也不是基于消息的。*

**阅读更多信息，请查看@大蒜加密**

### 备注

-在洋葱/大蒜路由方面，分层@加密的另一种设想是用一个[俄罗斯套娃](https://en.wikipedia.org/wiki/Matryoshka_doll)替换洋葱/大蒜-每个外部/内部套娃都有一个锁和下一个/前一个套娃的公钥

-有关大蒜路由的更多技术细节，请阅读[大蒜路由](https://geti2p.net/en/docs/how/garlic-routing)上的@Java-I2P条目。