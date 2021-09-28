---
summary: '该标准允许你使用电子邮件或域名语法而不是地址付款。 例如：donate@getmonero.org 或 donate.getmonero.org'
terms: ["OpenAlias"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### 基础知识

门罗币核心团队发布了一个名为 OpenAlias 的标准，该标准允许更多人类可读的地址，并“解决”了 Zooko
三角（人性化-去中心化-安全）。OpenAlias可以用于任何加密货币，并且已经在门罗币、比特币（在最新的 Electrum 版本中）和
HyperStake 中实现了。

OpenAlias
旨在为快速变化的技术环境提供一种简化别名的方法。用户努力尝试，进入私有的、加密的安全基础设施和系统，然而他们中的许多人才刚刚开始记住朋友和家人的电子邮件地址。

作为正在进行的门罗币项目开发的一部分，我们问自己：如何为不熟悉加密货币的用户简化支付？门罗币的隐形地址至少有95个字符——长时间记忆它们是不现实的，并且要求某人向一个<95个字符长的字符串>发起付款只会导致混淆。

在最基本的层面上，OpenAlias是 FQDN（完全限定域名）上的一个 DNS 文本记录。通过将它跟与 DNS
相关的技术相结合，我们创建了一个别名标准，该标准对开发人员可扩展，对用户来说直观且熟悉，并且可以与中心化和去中心化的域系统交互操作。

该标准允许你使用电子邮件或域名语法而不是地址付款。 例如：donate@getmonero.org 或 donate.getmonero.org

更多信息可以在 [OpenAlias 网站](https://openalias.org)上找到。
