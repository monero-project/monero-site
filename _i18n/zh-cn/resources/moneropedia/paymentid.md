---
summary: 'an optional flag that is added to identify transactions to merchants, consisting of 64 hexadecimal characters'
terms: ["payment-ID", "payment-IDs"]
---

{% include disclaimer.html translated="yes" translationOutdated="yes" %}

*Note:* Long Payment IDs have been removed since release 0.15; it's not possible to use them anymore. More info in the [blog post]({{ site.baseurl_root }}/2019/06/04/Long-Payment-ID-Deprecation.html) that announced their deprecation.

### 基础知识

支付ID是一个**任意**和**可选**交易附件，包含32字节（64个十六进制字符）或8字节（在集成地址的情况下）。

支付ID通常用于识别商家和交易所的交易：鉴于门罗币内置的固有隐私特性，其中一个公共地址通常用于转入的交易，支付ID对于将转入的款项与用户帐户绑定在一起尤其有用。

### 紧凑的支付ID和集成地址

自0.9 Hydrogen Helix
版本以来，支付ID可以加密并嵌入到一个支付地址中。这种类型的支付ID应该是64位的，并且使用只有发送方和接收方知道的随机一次性密钥进行加密。

### 创建一个支付ID

建议使用官方钱包的 `integrated_address` 命令自动生成包含紧凑支付ID的集成地址。如果你想使用命令行，你可以用一下方法生成支付ID:

为综合地址创建一个紧凑的支付ID:

```# openssl rand -hex 8```

创建一个老式的支付ID:

```# openssl rand -hex 32```
