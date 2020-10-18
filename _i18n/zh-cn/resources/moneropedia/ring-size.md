---
terms: ["ring-size"]
summary: "total number of possible signers in a ring signature"
---

{% include disclaimer.html translated="yes" translationOutdated="yes" %}
### 基础知识

环尺寸是指@环签名中可能的签名者的总数。如果为一个给定的@交易选择了一个4的环尺寸，这意味着除了“实际”输出之外，还要有3个外部输出。一个较大的环尺寸通常比一个较小的环尺寸能提供的隐私性更多。然而，为交易反复使用一个奇数的、可识别的环尺寸可能会使交易显得突出。

`环尺寸 = 外部输出 + 1（您的输出）`
