---
tags: ["kovri"]
terms: ["Router-Info", "Router-infos", "Info-des-routeurs", "Infos-des-routeurs"]
summary: "Une structure de données ou un fichier qui contient les informations réseau nécessaires pour un homologue I2P"
---

### Les Bases

Les @infos-des-routeurs sont une structure de données (périodiquement écrite dans un [fichier binaire](https://fr.wikipedia.org/wiki/Fichier_binaire)) qui contient toutes les informations nécessaires pour localiser, identifier et communiquer avec un homologue @I2P. Les @infos-des-routeurs inclues l'adresse IP, l'identité du routeur et d'autres détails techniques divers. Elle est nécessaire à la @base-de-données-réseau et est publiée aux routeurs @floodfill.

### Informations détaillées

Sous une forme lisible par l'homme, les Infos des routeurs ressemble à cela :

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
Type: USS
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
Type: USS
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

### Remarque

Pour de détails et spécifications, consultez la page [Base de donnée réseau](https://geti2p.net/fr/docs/how/network-database) de @I2P-Java.
