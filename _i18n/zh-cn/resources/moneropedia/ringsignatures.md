---
summary: 'a group of cryptographic signatures with at least one real participant, but no way to tell which in the group is the real one as they all appear valid'
terms: ["ring-signature", "ring-signatures"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### 基础知识

在密码学中，环形签名是一种数字签名，可以由一组用户中的任何成员执行，每个用户都有密钥。因此，一个带有环签名的消息是由特定人群中的某个人背书的。环签名的安全特性之一是，不能通过计算确定*哪个*组成员的密钥才是签名。

例如，环签名可以用来提供一种来自“白宫高级官员”的匿名签名，而不透露是哪位官员签署了这条信息。环签名适合这个应用，因为环签名的匿名性不能被撤销，而且一个环签名的是可以临时组成的（不需要预先设置）。

### 于门罗币的应用

一个环签名，由你的@账户密钥以及通过三角形分布方法从@区块链中提取的多个公钥（也称为输出）组成。随着时间的推移，可以多次使用过去的输出来形成可能的签名参与者。在可能的签名者的“环”中，所有的环成员都是平等和有效的。外部观察者无法知道签名组中哪些签名者属于您的@账户。因此，环签名确保交易输出不可跟踪。此外，门罗币不存在@可替换性的问题，因为每个交易输出都有合理的可否认性（例如，网络无法分辨哪些输出已使用或未使用）。

要了解门罗币如何在默认情况下提供隐私（不可链接性），请参见@混淆地址。
