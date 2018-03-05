---
layout: moneropedia
entry: "Szyfrowanie czosnkowe"
tags: ["kovri"]
terms: ["szyfrowanie-czosnkowe", "szyfrowaniu-czosnkowemu", "szyfrowaniem-czosnkowym", "szyfrowanie-warstwowe", "szyfrowaniem-warstwowym", "szyfrowaniu-warstwowemu", "szyfrowania-warstwowego"]
summary: "Szyfrowanie warstwowe wdrożone w Kovri / I2P"
---

### Podstawy

Szyfrowanie "czosnkowe" jest implementacją @szyfrowania-warstwowego opartego na @wiadomości w sieci @I2P (podobną do opartego na przepływie [trasowania cebulowego](https://en.wikipedia.org/wiki/Onion_routing)).

Poprzez @szyfrowanie wiadomości w warstwach, wiadomość jest prowadzona przez serię proxy, nie pozwalając na to, aby proxy (lub inny pośrednik) mógł odczytać jej treść. @Szyfrowanie-warstwowe jest główną charakterystyką @Kovri, @I2P oraz sieci [Tor](https://torproject.org) i jest podstawą dla zabezpieczenia anonimowości w tych sieciach warstwowych.

### Szczegółowe informacje

Głównymi różnicami pomiędzy Kovri/I2P a Tor w zakresie szyfrowania czosnkowego są:

- @Kovri/@I2P łączy wiele wiadomości razem, tworząc "ząbki czosnku"
- na "ząbek czosnku" może składać się dowolny numer wiadomości, a nie *tylko jedna* wiadomość
- @Kovri/@I2P korzysta z algorytmu [ElGamal](https://en.wikipedia.org/wiki/ElGamal)/[AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) dla wiadomości i transportu.

### Adnotacje

Aby dowiedzieć się więcej, przejdź do strony @trasowanie-czosnkowe.
