---
tags: ["kovri"]
terms: ["encryption", "encrypted", "encrypting", "decryption", "decrypted", "decrypting"]
summary: "The process of encoding messages or information in a way that only authorized parties can decode and read"
---

### 基础知识

来自[加密](https://en.wikipedia.org/wiki/Encryption):

>
在密码学中，加密是对消息或信息进行编码的过程，只有经过授权的一方才能解码和读取发送的内容。加密本身并不阻止拦截，而是拒绝向拦截方提供消息内容。

### 深度信息

来自[加密](https://en.wikipedia.org/wiki/Encryption):

>
 在加密方案中，打算通信的信息或消息（称为*明文*）使用加密算法加密，生成只有解密后才能读取的密文。出于技术原因，加密方案通常使用由算法生成的伪随机加密密钥。原则上可以在不拥有密钥的情况下解密消息，但是，对于设计良好的加密方案，解密需要庞大的计算资源和技巧。经授权的接收方可以使用发送方提供的密钥轻松解密消息，而未经授权的拦截方则不能。

>
加密的目的是确保只有被授权访问数据的人（例如文本消息或文件）才能使用解密密钥读取数据。未经授权的人可以被排除在外，因为他或她没有所需的密钥，没有密钥就不可能读取加密的信息。



### Kovri

@Kovri实施了多种类型的加密在*至少* 4种基本性能中：

- @补种的引导
- @大蒜路由：三层加密(@大蒜加密)用于验证@消息是否安全传递到收件人/对等节点/@目标
- @隧道加密：大蒜消息通过@隧道传递，并由@隧道网关加密到@隧道端点
- @传输层加密防止在[媒体层](https://en.wikipedia.org/wiki/OSI_model)解密@消息

有关@Kovri和@I2P中使用的各类型的加密和加密@签名的详细信息，请访问@Java-I2P的[密码学](https://geti2p.net/spec/cryptography)。
