---
terms: ["commitments", "commitment", "pedersen", "pedersen-commitment", "pedersen-commitments"]
summary: "Pedersen commitments are cryptographic algorythms that allow a prover to commit to a certain value without revealing it or being able to change it"
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}
### 基础知识

佩德森承诺是一种密码算法，它允许验证者在不暴露或无法更改某个值的情况下提交该值。

当您使用门罗币时，您所花费的输入值和您发送的输出值，对每个人都是加密且不透明的，除了这些输出的接收者。佩德森承诺允许您在不透露交易金额的情况下发送门罗币。佩德森承诺还使人们能够验证区块链上的交易是有效的，而不是凭空创造门罗币。

### 它意味着什么

只要加密输出金额创建了,其中就包括一个输出给接收方和一个找零输出回到发送方,而未加密的交易费等于被支付的输入和，它是一个合法的交易，可以确认不是凭空创造门罗币。

佩德森承诺意味着可以验证的和是相等的，但是每个和的门罗币数量以及个体的输入和输出的门罗币值是不确定的。佩德森承诺还意味着，即使是一种输入与另一种输入的比例，或者一种输出与另一种输出的比例，也是无法确定的。

目前还不清楚哪些输入真正被使用，因为环签名列出了实际使用的输入和诱饵输入，因此您实际上并不知道需要对哪些输入佩德森承诺进行求和。这没关系，因为@环机密交易中，环签名只需要证明对于输入的一个组合，输出和等于输入和。由于数学上的原因，这是不可能伪造的。

### 深度信息

参见，门罗币研究实验室的 Shen Noether 撰写的[环机密交易论文](https://eprint.iacr.org/2015/1098.pdf)。
