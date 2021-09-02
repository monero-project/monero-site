---
summary: 'a container of transactions, a sequence of which forms a blockchain'
terms: ["block", "blocks"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### 基础知识

区块是@交易的容器，平均每2分钟就有一个新的区块被添加到@区块链当中(请参见定义为120秒的常量 `DIFFICULTY_TARGET_V2` )。

区块还包含一种特殊类型的交易@coinbase交易，它会将新创建的门罗币添加到网络中。

区块是通过@挖矿过程创建的，成功挖到区块的@节点，将它广播给连接到它的每个@节点们，每个@节点随后重新广播给连接它们的节点，直到整个门罗币网络接收到它。

假区块或坏区块通常不能被创建，因为接收区块的@节点们总是根据一组所有节点都遵守的一致规则来验证它们包含的@交易，包括验证每个交易上的加密@签名。
