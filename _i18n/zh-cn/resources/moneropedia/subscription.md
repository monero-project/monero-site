---
tags: ["kovri"]
terms: ["Subscription"]
summary: "A file used by address book which contains I2P hosts paired with I2P destinations"
---

### 基础知识

订阅是一个包含 `.i2p` 主机列表与各自的@目标配对的文件。订阅由@地址薄使用。

### 深度信息

类似于[域名解析文件](https://en.wikipedia.org/wiki/Hosts_(file))可以将互联网主机名映射到指定的地址，订阅匹配一个 `.i2p` 地址到@base64地址，使用以下格式（不允许空格）： `host=address`

更具体地说，订阅将配对一个@本地唯一主机到@base64地址。

例如:

```
anonimal.i2p=AQZGLAMpI9Q0l0kmMj1vpJJYK3CjLp~fE3MfvE-e7KMKjI5cPOH6EN8m794uHJ6b09qM8mb9VEv1lVLEov~usVliTSXCSHuRBOCIwIOuDNU0AbVa4BpIx~2sU4TxKhoaA3zQ6VzINoduTdR2IJhPvI5xzezp7dR21CEQGGTbenDslXeQ4iLHFA2~bzp1f7etSl9T2W9RID-KH78sRQmzWnv7dbhNodMbpO6xsf1vENf6bMRzqD5vgHEHZu2aSoNuPyYxDU1eM6--61b2xp9mt1k3ud-5WvPVg89RaU9ugU5cxaHgR927lHMCAEU2Ax~zUb3DbrvgQBOTHnJEx2Fp7pOK~PnP6ylkYKQMfLROosLDXinxOoSKP0UYCh2WgIUPwE7WzJH3PiJVF0~WZ1dZ9mg00c~gzLgmkOxe1NpFRNg6XzoARivNVB5NuWqNxr5WKWMLBGQ9YHvHO1OHhUJTowb9X90BhtHnLK2AHwO6fV-iHWxRJyDabhSMj1kuYpVUBQAEAAcAAA==
```

1. `anonimal.i2p` 是@本地唯一主机
2. `=` 是分隔符
3. 剩下的就是@base64地址

### 订阅类型


对于@Kovri，有两种类型的订阅文件：*公开*和*私有*。

*公共*订阅:

-用于启动时使用基本服务（IRC，电子邮件，门罗币等）

-是静态的，每12小时从门罗币的@地址薄服务器刷新一次

-允许您安全地与所有人共享订阅，因为它是公开可用的 （任何共享相同公共订阅的人，也可以将相同的主机名解析到与您相同的目标）

*私有*订阅:

-仅供您使用，除非您明确选择共享文件，否则不会与他人共享

-默认文件是 `private_hosts.txt` 在你的@数据目录中

### 更新私有订阅

您可以使用@跳转服务，手动更新您的私有订阅。更新后的订阅将被送入@地址薄供您使用。

### 备注

要了解如何订阅多个订阅，请参见[用户指南](https://gitlab.com/kovri-project/kovri-docs/blob/master/i18n/en/user_guide.md)。
