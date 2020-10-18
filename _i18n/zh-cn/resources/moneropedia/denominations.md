---
terms: ["denominations", "subunits", "tacoshi", "piconero", "nanonero", "micronero", "millinero", "centinero", "decinero","decanero","hectonero","kilonero","meganero","giganero"]
summary: "A denomination is a proper description of a currency amount. It is oftentimes a sub-unit of the currency. For example, traditionally a cent is 1/100th of a particular unit of currency.)"
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}
### 基础知识

面额是对货币数量的恰当描述。它通常是货币的一个次级单位。例如，传统上一分钱是特定货币单位的百分之一。

门罗币命名面额的方式为，去掉前面代表门罗币的 “mo”--英文（“门”---中文），后添加SI(国际标准单位前缀)，以便于使用。实际上，门罗币的最小单位是1皮罗（0.000000000001 XMR）。

### 门罗币的面额

|-----------+----------+-------------------|
|  名称      | 十进制    | 数值              |
|-----------|:-------- :| ----------------:|
| 皮罗       | 10^-12   | 0.000000000001    |
| 纳罗       | 10^-9    | 0.000000001       |
| 微罗       | 10^-6    | 0.000001          |
| 毫罗       | 10^-3    | 0.001             |
| 厘罗       | 10^-2    | 0.01              |
| 分罗       | 10^-1    | 0.1               |
|============+==========+===================|
| **门罗币** | **10^0** | **1**             |
|============+==========+===================|
| 十罗       | 10^1     | 10                |
| 百罗       | 10^2     | 100               |
| 千罗       | 10^3     | 1,000             |
| 兆罗       | 10^6     | 1,000,000         |
|------------+----------+-------------------|

### 深度信息

2017年3月3日，[Moneromooo](https://github.com/moneromooo-monero)将使用国际标准前缀的输入支持[添加到Monero代码库](https://github.com/moneromooo-monero)。

门罗币最小的单位(10^-12 XMR)最初被称为tacoshi，以纪念用户[Tacotime](https://bitcointalk.org/index.php?action=profile;u=19270)，一名门罗币的早期贡献者。后来为了便于使用和一致性而重新命名。

### Monerod 实现

当前 monerod 实现中门罗币的最小分数也称为原子单位，它目前是一个皮罗。


