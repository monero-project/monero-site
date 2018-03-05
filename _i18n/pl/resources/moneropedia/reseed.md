---
layout: moneropedia
entry: "Reseed"
tags: ["kovri"]
terms: ["Reseed"]
summary: "Metoda, za pomocą której Kovri uruchamia sieć I2P."
---

### Podstawy

Gdy uruchamiasz @Kovri po raz pierwszy (lub jeśli był wyłączony przez dłuższy czas), będzie on potrzebował listy peerów, z którymi się skontaktuje, aby dokonać [bootstrapu](https://en.wikipedia.org/wiki/Bootstrap) do sieci @I2P. Kovri bierze tę listę ze specjalnego pliku przechowywanego na serwerze reseed. W pliku tym znajdują się wszystkie informacje, których Kovri potrzebuje do połączenia się z peerami I2P.

### Szczegółowe informacje

Kovri posiada listę [mocno zakodowanych](https://en.wikipedia.org/wiki/Hard-coded) serwerów reseed, dostępnych aby z nich pobierać. Serwery te bezpiecznie serwują plik [SU3](https://geti2p.net/spec/updates#su3), opatrzony kryptograficznym @podpisem, ponad siecią @clearnet przy użyciu [HTTPS](https://en.wikipedia.org/wiki/HTTPS). Plik SU3 zawiera informacje służące do weryfikacji integralności pliku i jego zawartości.

Poza elementami technicznymi koniecznymi do weryfikacji i przetworzenia, plik ten zawiera przede wszystkim serię plików z @informacjami-o-routerze, których routery Kovri i I2P używają do lokalizacji i komunikacji z pozostałymi peerami I2P, którzy następnie zapisywani są w @bazie-danych-sieci.
