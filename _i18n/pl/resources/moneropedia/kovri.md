---
tags: ["kovri"]
terms: ["Kovri"]
summary: "Implementacja routera C++ dla Monero w sieci I2P."
---

### Podstawy

[Kovri](https://github.com/monero-project/kovri/) jest wdrożeniem sieci @I2P w języku C++. Obecnie jest on w dynamicznym rozwoju i nie został jeszcze zintegrowany z Monero. Po zintegorwaniu Kovri z twoim @węzłem Monero, transakcje będą jeszcze bezpieczniejsze.

### Szczegółowe informacje

Kovri będzie chronił ciebie i Monero przed:

- atakami partycjonowania @węzłów
- powiązaniem pojedynczego numeru identyfikacyjnego transakcji z twoim adresem IP
- wydobywaniem i/lub uruchamianiem węzła w wysoce kontrowersyjnych środowiskach
- wyciekami metadanych (np. wyszukiwania @OpenAlias)

... i wiele więcej.

Przeczytaj [anonimową propozycję FFS](https://forum.getmonero.org/9/work-in-progress/86967/anonimal-s-kovri-full-time-development-funding-thread), aby dowiedzieć się więcej szczegółów oraz na temat argumentacji projektu. Przeczytaj również FAQ i Przewodniki dla Użytkowników w [folderze Kovri](https://github.com/monero-project/kovri/).

### Terminologia @Kovri / @I2P

#### Klient + Interfejs Programowania Aplikacji

- @książka-adresowa
- @adres-base32
- @adres-base64
- @zasadniczy-unikalny-host
- @Eepsite (@ukryty-serwis, @strona-czosnkowa, @serwis-czosnkowy)
- @I2PControl
- @opcja-przeskakiwania
- @lokalnie-unikalny-host
- @Reseed
- @Subskrypcja

#### Core + Router

- @Clearnet
- @katalog-danych
- @węzeł-docelowy
- @szyfrowanie
- @Floodfill
- @szyfrowanie-czosnkowe
- @trasowanie-czosnkowe
- @I2NP
- @In-net
- @Java-I2P
- @szyfrowanie-warstwowe
- @Lease
- @LeaseSet
- @wiadomość
- @NTCP
- @baza-danych-sieci
- @informacje-o-routerze
- @SSU
- @Transport
- @Tunel
