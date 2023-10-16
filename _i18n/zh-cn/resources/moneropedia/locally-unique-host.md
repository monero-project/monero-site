---
summary: 'A host defined by you and resolved only by you'
terms: ["Locally-unique-host"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### 基础知识

本地唯一主机是由**您**定义并仅由您解析的[完全限定域名](https://en.wikipedia.org/wiki/FQDN);
类似一个[域名解析文件](https://en.wikipedia.org/wiki/Hosts_(file))是如何执行的。不要与@标准唯一主机混淆。

### 深度信息

您可以选择共享您对主机解析方式的诠释（例如，“本地主机”总是解析为“127.0.0.1”），但是解析被不正规的执行（例如，其他人可以将“本地主机”映射到任意IP地址）。

在I2P网络中，公共订阅中的主机可以被认为是@标准唯一主机，但最终，您可以自由地重新定义它们。

### 备注

- Monero primarily uses @canonically-unique-host resolution while I2P only
  uses @locally-unique-host resolution.

- I2P's and @Kovri's assigned top-level domain is currently `.i2p` and
  @Kovri intends to only process/use the `.i2p` [top-level
  domain](https://en.wikipedia.org/wiki/Top_level_domain)
