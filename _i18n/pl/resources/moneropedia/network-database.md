---
layout: moneropedia
entry: "Baza danych sieci"
tags: ["kovri"]
terms: ["baza-danych-sieci", "bazie-danych-sieci", "bazą-danych-sieci"]
summary: "Rozproszona baza danych zawierająca potrzebne informacje na temat routera, aby sieć pozostała nienaruszona."
---

### Podstawy

Baza danych sieci jest [rozproszoną bazą danych](https://en.wikipedia.org/wiki/Distributed_database) zawierającą informacje na temat routera, które muszą być używane przez peerów, aby sieć pozostała nienaruszona.

### Szczegółowe informacje

Za: @Java-I2P:

>
Baza danych sieci @I2P jest specjalną rozproszoną bazą danych zawierającą tylko dwa rodzaje danych - informacje kontaktowe routera (@informacje-o-routerze) oraz  informacje kontaktowe @węzła docelowego (@LeaseSets). Każda informacja jest podpisana przez odpowiednią stronę i zweryfikowana przez kogokolwiek, kto jej używa lub ją przechowuje. Dodatkowo dane posiadają informacje na temat żywotności, zezwalając na odrzucenie nieistotnych wprowadzeń, nadpisywanie nowszych wprowadzeń nad starszymi oraz na ochronę przed pewnymi rodzajami ataków.

>
Baza danych sieci jest rozproszona poprzez prostą technikę zwaną "@floodfill", w której jest utrzymywana przez podzbiór wszystkich routerów, zwanych "routerami floodfill".

### Adnotacje

Aby dowiedzieć się więcej, przejdź do [bazy danych sieci](https://geti2p.net/en/docs/how/network-database).
