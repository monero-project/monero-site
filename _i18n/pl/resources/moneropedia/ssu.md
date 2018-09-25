---
tags: ["kovri"]
terms: ["SSU"]
summary: "Bezpieczny Semi niezawodny Protokół Pakietów Użytkownika: jeden z dwóch środków transportu Kovri."
---

### Podstawy

*Bezpieczny Semi niezawodny Protokół Pakietów Użytkownika (SS UDP)* jest jednym z dwóch szyfrowanych środków @transportu w @Kovri.

Podobnie do @NTCP, głównym przeznaczeniem NTCP jest bezpieczny transport @wiadomości @in-net w sieci @I2NP poprzez @tunele, jednak w odróżnieniu od NTCP, SSU działa jedynie za pomocą zaszyfrowanego [Protokołu Pakietów Użytkownika](https://en.wikipedia.org/wiki/User_Datagram_Protocol).

### Szczegółowe informacje

- Tak jak i NTCP, SSU jest zorientowanym na połączenie środkiem transportu danych od punktu do punktu
- Pojęcie *semi-niezawodny* bierze się z ciągłej retransmisji *niepotwierdzonych* wiadomości (aż do maksymalnej liczby, a następnie spada)
- SSU dostarcza również wiele pojedynczych usług (poza swoją główną funkcją jako warstwy transportowej):
  - wykrywanie IP (poprzez kontrolę lokalną lub za pomocą [testu peerów](https://geti2p.net/en/docs/transport/ssu#peerTesting))
  - [Translacja Adresów Sieciowych](https://en.wikipedia.org/wiki/Network_address_translation) przy użyciu [introduktorów](https://geti2p.net/en/docs/transport/ssu#introduction)
  - status [Firewall](https://en.wikipedia.org/wiki/Firewall_%28computing%29) oraz, jeśli wdrożone, SSU może informować NTCP o zmianie statusu adresu zewnętrznego lub firewalla

### Adnotacje

Aby dowiedzieć się więcej, przejdź do strony [SSU](https://geti2p.net/en/docs/transport/ssu) @Java-I2P.
