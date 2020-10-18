---
terms: ["change"]
summary: "Monero sent as part of a transaction, that returns to your account instead of going to another recipient"
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}
### 基础知识

门罗币发送作为交易的一部分，它将返回到您的帐户，而不是发送到另一个接收者。

### 深度信息

门罗币软件中的@钱包会自动产生找零，但当您发送一笔交易时，您正在接收一个您控制的输入，并告诉门罗币网络如何处理它。该输入是一笔“存款”进入到你的帐户，你可以花掉它。输出是交易的一部分，它告诉门罗币网络将资金发送到哪里。


您的帐户中可能有多种不同面值的输入(例如:周五存入0.5 XMR，周六存入0.75 XMR)。所以,当交易中有一个输入面额是0.5 XMR,但你只想发送0.1 XMR出去,交易将包括一笔手续费用于支付@矿工,输出为0.1 XMR发送给接收者,其余你想发回给自己的部分，将成为一个输出返回你的钱包(这就是所谓的“找零”)。一旦交易完成，找零将作为一笔输入供您使用，您可以通过一笔新的交易，再次分割或发送该输入。
