---
tags: ["kovri"]
terms: ["Base32-address", "Base32-addresses", "adresse-Base32", "adresses-Base32"]
summary: "Hachage encodé en Base32 d'une adresse Base64"
---

### Les Bases

Une adresse Base32 est une version encodée, plus courte, d'une adresse @I2P. L'adresse Base32 est la première partie d'un nom d'hôte `.b32.i2p`.

Exemple :

`i35yftyyb22xhcvghmev46t5knefur5v66qzekkajatwfwhyklvq.b32.i2p`

où

`i35yftyyb22xhcvghmev46t5knefur5v66qzekkajatwfwhyklvq` est l'adresse Base32.

### Informations détaillées

Finalement, une adresse Base32 est une chaîne de 52 caractères [représentation encodée en Base32](https://en.wikipedia.org/wiki/Base32) du hachage SHA-256 complet d'une @adresse-Base64 @I2P.

### Remarques

**Remarque : `.b32` n'est pas un sous-domaine de `.i2p`**
