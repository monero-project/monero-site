---
layout: moneropedia
entry: "Lease-Set"
tags: ["kovri"]
terms: ["LeaseSet", "LeaseSets"]
summary: "Zestaw wszystkich aktualnie zautoryzowanych leasów dla pojedynczego węzła docelowego I2P."
---

### Podstawy

Lease-Set jest zestawem zautoryzowanych @leasów (i pozostałych istotnych informacji) dla pojedynczego @węzła-docelowego sieci @I2P.

### Szczegółowe informacje

Lease Set zawiera:

- wszystkie aktualnie zautoryzowane leasy dla pojedynczego węzła docelowego
- publiczny klucz, według którego zaszyfrowane mogą być @wiadomości (zobacz: @trasowanie-czosnkowe)
- publiczny klucz podpisu, który może zostać użyty do unieważnienia danej wersji struktury

Lease Set jest jedną z dwóch struktur przechowywanych w @bazie-danych-sieci (drugą są @informacje-o-routerze) i zaszyfrowany jest funkcją SHA256 zawartego @węzła-docelowego.

### Adnotacje

Aby dowiedzieć się więcej, przejdź do strony [LeaseSet](https://geti2p.net/en/docs/how/network-database#leaseSet) @Java-I2P.
