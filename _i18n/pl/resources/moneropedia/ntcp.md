---
layout: moneropedia
entry: "NTCP"
tags: ["kovri"]
terms: ["NTCP"]
summary: "Protokół Kontroli Transmisji oparty na nieblokowaniu wejścia/wyjścia: jeden z dwóch środków transportów Kovri."
---

### Podstawy

*Protokół Kontroli Transmisji oparty na nieblokowaniu wejścia/wyjścia (NTCP)* jest jednym z dwóch szyfrowanych środków @transportu w @Kovri.

Podobnie do @SSU, *głównym* przeznaczeniem NTCP jest bezpieczny transport @wiadomości @in-net w sieci @I2NP poprzez @tunele, jednak w odróżnieniu od SSU, NTCP działa jedynie za pomocą zaszyfrowanego [Protokołu Kontroli Transmisji](https://en.wikipedia.org/wiki/Transmission_Control_Protocol).

### Szczegółowe informacje

 Przekazuje pojedyncze wiadomości I2NP, po tym jak:
   - został ustanowiony Protokół Kontroli Transmisji
   - została ukończona sekwencja ustanowienia
 Korzysta z następujących @szyfrowań:
   - 2048-bitowy [Diffie-Hellman](https://en.wikipedia.org/wiki/Diffie-hellman)
   - [AES-256](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)/[CBC](https://en.wikipedia.org/wiki/Block_cipher_modes_of_operation)
Sekwencja ustanowienia składa się z następujących *stanów*:
   - Pre-ustanowienie
   - ustanowienie
   - Post-ustanowienie or "Ustanowione"
 Korzysta z następujących charakterystyk @bazy-danych-sieci:
   - Nazwa środka transportu: NTCP
   - Host: IP (IPv4 lub IPv6) lub nazwa hosta (skrócony adres IPv6 (wraz z "::") jest dozwolony)
   - Port: 1024 - 65535

### Adnotacje

Aby dowiedzieć się więcej, przejdź do strony [NTCP](https://geti2p.net/en/docs/transport/ntcp) @Java-I2P.
