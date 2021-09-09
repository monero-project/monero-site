---
summary: 'A host that is canonically resolved to an address or set of addresses'
terms: ["Canonically-unique-host"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### 基础知识

一个标准唯一主机是一个[完全限定域名](https://en.wikipedia.org/wiki/FQDN)，它将规范地解析为一个指定的地址或一组地址。不要与@本地唯一主机混淆。

### 深度信息

一个标准唯一主机由远程权威来源定义;通常通过
[DNS](https://en.wikipedia.org/wiki/DNS)。在解析节点的主机名时，很可能使用外部源进行解析，除非以下文件已执行:

-一个类似于[域名解析文件](https://en.wikipedia.org/wiki/Hosts_(file))的数据库文件
-一个内部网络解析器(最终从外部来源获取)

### 备注

- 门罗币主要使用@标准唯一主机解析，而I2P只使用@本地唯一主机解析。 -
I2P和@Kovri的自定义顶级域名当前为`.i2p`，@Kovri只打算处理/使用 `.i2p`
[顶级域名](https://en.wikipedia.org/wiki/Top_level_domain)
