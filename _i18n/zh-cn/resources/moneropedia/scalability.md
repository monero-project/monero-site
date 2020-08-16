---
terms: ["scalability"]
summary: "Growth potential of Monero, resources required, and methods of increasing efficiency"
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}
### 基础知识

门罗币没有硬编码的最大区块尺寸，这意味着与比特币不同，它没有防止扩展的 1MB 区块尺寸的限制。然而，该协议中内置了区块奖励惩罚机制，以避免区块尺寸的过度增长：将新区块的大小（new block's size，简称：NBS）与前100个区块的中值大小 M100 进行比较。如果NBS>M100，区块奖励在 NBS 超过 M100 多少的二次依赖关系中减少。例如，如果 NBS 比M100 大【10%、50%、80%、100%】，则名义区块奖励降低【1%、25%、64%、100%】。一般情况下，区块是不允许大于 2*M100 的，并且小于等于 60kB 的块是不会受到任何区块奖励惩罚。
