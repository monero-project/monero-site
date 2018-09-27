---
tags: ["kovri"]
terms: ["Router-Info", "Router-infos", "informacje-o-routerze", "informacjom-o-routerze", "informacjami-o-routerze", "informacji-o-routerze"]
summary: "Struktura danych lub plik zawierający potrzebne informacje sieciowe na temat peerów I2P."
---

### Podstawy

Informacje o routerze są strukturą danych (cyklicznie zapisywaną w [pliku binarnym](https://en.wikipedia.org/wiki/Binary_file)), która zawiera wszystkie informacje potrzebne do zlokalizowania, zidentyfikowania i skomunikowania się z peerem sieci @I2P. Zawiera ona adres IP, tożsammość routera i inne szczegóły techniczne potrzebne do @bazy-danych-sieci i jest publikowana do routerów @floodfill.

### Szczegółowe informacje

Czytelna forma informacji o routerze może wyglądać następująco:

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

### Adnotacje

Aby dowiedzieć się więcej na temat specyfikacji, przejdź do strony [Bazy Danych Sieci](https://geti2p.net/en/docs/how/network-database) @Java-I2P.
