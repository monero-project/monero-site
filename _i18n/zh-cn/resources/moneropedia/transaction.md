---
summary: 交易的参数包含一个或多个具有相应资金数额的收件人地址和一个@环尺寸参数，该参数指定绑定到交易的输出数量。使用的输出越多，混淆的程度就越高，但这是有代价的。因为交易越大输出越多，交易费也就越高。
terms: ["transaction", "transactions"]
---

{% include disclaimer.html translated="yes" translationOutdated="yes" %}

### 基础知识

交易的参数包含一个或多个具有相应资金数额的收件人地址和一个@环尺寸参数，该参数指定绑定到交易的输出数量。使用的输出越多，混淆的程度就越高，但这是有代价的。因为交易越大输出越多，交易费也就越高。

The parameters of a transaction contain one or more recipient addresses with
corresponding amounts of funds and a @ring-size parameter that specifies the
number outputs bound to the transaction. The more outputs that are used, a
higher degree of obfuscation is possible, but that comes with a cost. Since
a transaction gets larger with more outputs, the transaction fee will be
higher.

It is possible to form a transaction offline, which offers additional
privacy benefits.

惟一识别交易的方法是使用可选的支付ID，该ID通常由32字节字符串（64个十六进制字符）。

### 深度信息

每个交易都包含两个密钥：一个公开的@支付密钥和一个公开的@查看密钥。交易中输出的目标实际上是从这两个密钥计算出的一次性公钥。

当钱包扫描转入的交易时，每笔交易都会被扫描，以查看它是不是属于“你”的。这只需要您的私有的查看密钥和公开的支付密钥，并且该检查是不可变的，不能伪造。如果没有对应的查看私钥，您无法接收交易并标识它们。

为了使用这些资金，您必须为该输出计算一个一次性的支付私钥。这几乎总是由门罗币的钱包软件自动完成的。
