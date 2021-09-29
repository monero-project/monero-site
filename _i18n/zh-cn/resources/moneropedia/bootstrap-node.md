---
summary: 'A node to which a daemon connects to give immediate usability to wallets while syncing'
terms: ["bootstrap-node", "bootstrap-nodes"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### 基础知识

运行在本地@节点上的守护进程必须与其他(远程)@节点们同步。当没有完全同步时，@钱包可能仍然连接到本地节点。但是，@钱包无法访问本地@节点上尚未同步的@区块。

为了允许@钱包立即可用，本地@节点上的守护进程使用RPC请求代理到的引导节点，从而访问丢失的@区块。

注意:来自引导节点的响应可能不可信。
