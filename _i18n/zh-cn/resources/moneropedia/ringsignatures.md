---
summary: 'a group of cryptographic signatures with at least one real participant, but no way to tell which in the group is the real one as they all appear valid'
terms: ["ring-signature", "ring-signatures"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### 基础知识

在密码学中，环形签名是一种数字签名，可以由一组用户中的任何成员执行，每个用户都有密钥。因此，一个带有环签名的消息是由特定人群中的某个人背书的。环签名的安全特性之一是，不能通过计算确定*哪个*组成员的密钥才是签名。

例如，环签名可以用来提供一种来自“白宫高级官员”的匿名签名，而不透露是哪位官员签署了这条信息。环签名适合这个应用，因为环签名的匿名性不能被撤销，而且一个环签名的是可以临时组成的（不需要预先设置）。

### 于门罗币的应用

A ring signature makes use of your @account keys and a number of public keys
(also known as outputs) pulled from the @blockchain using a gamma
distribution method. Over the course of time, past outputs could be used
multiple times to form possible signer participants. In a "ring" of possible
signers, all ring members are equal and valid. There is no way an outside
observer can tell which of the possible signers in a signature group belongs
to your @account. So, ring signatures ensure that transaction outputs are
untraceable. Moreover, there are no @fungibility issues with Monero given
that every transaction output has plausible deniability (e.g. the network
can not tell which outputs are spent or unspent).

要了解门罗币如何在默认情况下提供隐私（不可链接性），请参见@混淆地址。
