---
summary: 'a new kind of range proofs replacing RingCT in transactions to obfuscate the amounts sent'
terms: ["bulletproofs", "bulletproof"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### 基础知识

引入环机密交易是为了混淆交易金额。@环机密交易的一个目标是证明@交易中的输入和输出之和为0，并且所有输出都是正数。
为了实现这个目标,构建了两种环签名:一个环签名为整个交易(证明输出之和为0)；另一组环签名为交易单位的子集(为了证明所有输出都是正数),然后组合在一起，最初使用 Schnorr 签名(后来被 Borromean 环签名所取代)。 
当它运行的时候，存在一个很大的缺点就是这种环机密交易的尺寸太大。

### 涉及到防弹协议

早在2017年，一个[斯坦福应用加密小组](https://crypto.stanford.edu/bulletproofs/)写了一篇[论文](https://eprint.iacr.org/2017/1066.pdf)，提出了一种新的范围证明，称为防弹协议。 

> 防弹证明是一种短的非交互式零知识证明，不需要可信的设置。

与 Borromean 或 Schnorr 签名不同，防弹协议作为范围证明非常高效。要证明一个大的数据集只需产生一个小的证明，而且这个证明的尺寸随着被证明数据的规模大小呈对数增长。 
这意味着在一个交易中，增加输出的数量只会略微增加证明的大小。 
防弹协议还具有这样一些优势，可以同时证明多个提交的数量在所需范围内。不需要分别证明每个输出到每个目标;整个交易金额可以被证明在一个更大的(但仍然非常小)防弹协议中。

### 彻底的审核过程及执行

由于防弹协议很新，而且小组制作的最初的实现虽然完成得很彻底，但是需要针对我们特定的用例进行重写，所以在门罗币中实现防弹协议并不是一件简单的事情。 
代码被编写了一遍又一遍，以遵循仍在不断被开发的新版防弹程序，但是一旦这个门罗币实现被完成，就应该非常小心地进行部署 
Therefore, the community started an auditing process. Researchers reached out to Benedikt Bünz, lead author of the Bulletproofs paper, and to [OSTIF](https://ostif.org/) an organization which helps open source technologies to improve and secure themselves.  
OSTIF directed the group to several organizations with the skills required to perform the audit. While one of them asked to be kept unnamed and was therefore put away from the process that needed to be public, two others (QuarksLab & Kudelski Security) were choosen to conduct the audit.  
Our 3 auditors were funded by the community to ensure that the
implementation did not contain any critical bugs or exploits.  The final
reports were released during the summer of 2018, with several useful
corrections and fixes suggested, and the final bulletproof implementation
has been added first to Monero Stagenet, and then to the main Monero network
during the October 2018 network upgrade.

自从防弹协议部署以来，平均交易尺寸已经下降了至少80%，交易费用也因而大幅下降。

更多与门罗币的防弹协议实现有关的解释，可以在 youtube fondajo 频道上 [与 Sarang Noether
的对话](https://www.youtube.com/watch?v=6lEWqIMLzUU) 当中找到。
