---
terms: ["view-key", "view-keys"]
summary: "one of two sets of private and public cryptographic keys that each account has, with the private view key required to view all transactions related to the account"
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}
### 基础知识

每个帐户拥有的两组私有和公开的加密密钥中的一组，要查看与该帐户相关的所有交易要使用私有的查看密钥。

门罗币提供了一个不透明的区块链（并具备一个显式保障系统，称之为@查看密钥），与任何其他不基于 CryptoNote 底层的加密货币所使用的透明区块链，形成了鲜明的对比。因此，门罗币被称为是 “默认隐私性的同时，具有可选透明性”。

每个门罗币地址都有一个可以共享的私有的查看密钥。通过共享一个查看私钥，用户可以查看该地址的每一笔转入的交易。然而，截至2017年6月，转出交易无法被查看。因此，不应该依赖于通过查看私钥显示的门罗币地址的余额。


