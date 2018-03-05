---
layout: moneropedia
entry: "Zasadniczy unikalny host"
tags: ["kovri"]
terms: ["zasadniczy-unikalny-host", "zasadniczego-unikalnego-hosta", "zasadniczym-unikalnym-hoście"]
summary: "Host ogólnie przyjęty jako przypisany do adresu lub zestawu adresów".
---

### Podstawy

Zasadniczy unikalny host jest [Pełną, Jednoznaczną Nazwą Domenową] (https://en.wikipedia.org/wiki/FQDN), która kanonicznie tłumaczy dany adres lub zestaw adresów. Nie należy jej mylić z @lokalnym-unikalnym-hostem.

### Szczegółowe informacje

Zasadniczy unikalny host jest definiowany przez zdalne autorytatywne źródła,  przeważnie za pomocą [Systemu Nazw Domenowych](https://en.wikipedia.org/wiki/DNS). Podczas rozwiązywania nazwy hosta peera najprawdopodobniej użyjesz zewnętrznego źródła do rozwiązania, chyba że zaimplementowano jedno z następujących:

- plik bazy danych podobny do [plików hosta](https://en.wikipedia.org/wiki/etc/hosts)
- rezolwera wewnętrznej sieci (który pobiera z zewnętrznych źródeł).

### Adnotacje

- Monero głównie używa zasadniczego unikalnego hosta, podczas gdy @I2P korzysta jedynie z @lokalnego-unikalnego-hosta.
- Własną przypisaną domeną najwyższego poziomu sieci I2P i Kovri jest obecnie `.i2p`, a Kovri planuje używać jedynie [domeny najwyższego poziomu] `.i2p`(https://en.wikipedia.org/wiki/Top_level_domain).
