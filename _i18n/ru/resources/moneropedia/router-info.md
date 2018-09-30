---
tags: ["kovri"]
terms: ["Router-Info", "Router-infos", "информация-маршрутизатора", "информации-маршрутизатора"]
summary: "Структура данных или файл, содержащий необходимую сетевую информацию I2P узла"
---

### Основная информация

@Информация-маршрутизатора представляет собой структуру (периодически записываемую в форме [двоичного файла](https://en.wikipedia.org/wiki/Binary_file)), содержащую всю информацию, необходимую для определения местонахождения и связи с одноранговым узлом @I2P. Информация маршрутизатора включает в себя IP-адрес, идентификационную информацию маршрутизатора, другие технические подробности, и она необходима для базы данных сети, а также публикуется для маршрутизаторов @заполнения.

### Углублённая информация

В удобной для восприятия человеком форме информация маршрутизатора может выглядеть так:

```
Identity: [RouterIdentity:
Hash: nYZ5Qe7gQ-~QgfgJVRUG4c0JnVeVqzM~duUX1EGT1ek=
Certificate: [Certificate: type: Key certificate
Crypto type: 0
Sig type: 7 (EdDSA_SHA512_Ed25519)]
PublicKey: [PublicKey: size: 256]
SigningPublicKey: [SigningPublicKey EdDSA_SHA512_Ed25519: size: 32]
Padding: 96 bytes]
Signature: [Signature EdDSA_SHA512_Ed25519: size: 64]
Published: Sun Oct 09 01:34:59 UTC 2016
Options (5):
        [caps] = [LfR]
        [netId] = [2]
        [netdb.knownLeaseSets] = [37]
        [netdb.knownRouters] = [2435]
        [router.version] = [0.9.26]
Addresses (4):
[RouterAddress:
Type: SSU
Cost: 4
Options (5):
        [caps] = [BC]
        [host] = [2a01:e35:8b5c:b240:71a2:6750:8d4:47fa]
        [key] = [nYZ5Qe7gQ-~QgfgJVRUG4c0JnVeVqzM~duUX1EGT1ek=]
        [mtu] = [1472]
        [port] = [22244]]
[RouterAddress:
Type: NTCP
Cost: 9
Options (2):
        [host] = [2a01:e35:8b5c:b240:71a2:6750:8d4:47fa]
        [port] = [22244]]
[RouterAddress:
Type: SSU
Cost: 6
Options (4):
        [caps] = [BC]
        [host] = [88.181.203.36]
        [key] = [nYZ5Qe7gQ-~QgfgJVRUG4c0JnVeVqzM~duUX1EGT1ek=]
        [port] = [22244]]
[RouterAddress:
Type: NTCP
Cost: 11
Options (2):
        [host] = [88.181.203.36]
        [port] = [22244]]]
```

### Примечания

С подробностями и спецификацией можно ознакомиться на странице @Java-I2P [Network Database](https://geti2p.net/en/docs/how/network-database).
