---
summary: 'either an alias, such as donate.getmonero.org, or a set of 95 characters starting with a 4'
terms: ["address", "addresses"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### 基础

When you send Monero to someone you only need one piece of information, and
that is their Monero address. A *raw* Monero address is a set of 95
characters starting with a '4' or an '8'. The Monero donation address, for
instance, is
888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H.

因为这些地址又长又复杂，所以您经常会遇到@OpenAlias地址。例如，Monero捐款可以发送到donate@getmonero.org或donate.getmonero.org。

如果您想获得自己的@OpenAlias地址，那么 [OpenAlias页面](https://openalias.org/). 上有一些信息。

### 集成地址

集成地址是与加密的64位@payment-ID相结合的地址。一个原始的集成地址长度为106个字符。

### 深度信息

地址实际上是*公开* @支付密钥 和 *公开* @查看密钥
的Base58格式的串联，前缀是网络字节(Monero的代号是18)，后缀是整个字符串的keccache-256散列的前四个字节(用作校验和)。
