---
tags: ["kovri"]
terms: ["encryption", "encrypted", "encrypting", "decryption", "decrypted", "decrypting", "szyfrowanie", "szyfrowania", "szyfrowaniu", "zaszyfrowany", "zaszyfrowana", "zaszyfrowanej", "zaszyfrowanemu", "zaszyfrowaną", "zaszyfrowanego", "odszyfrowanie", "rozszyfrowanie", "odszyfrowana", "odszyfrowany", "odszyfrowanej", "odszyfrowanego", "odszyfrowanemu", "odszyfrowaną", "rozszyfrowana", "rozszyfrowany", "rozszyfrowanego", "rozszyfrowanemu", "rozszyfrowanej", "rozszyfrowaną", "szyfrowań"]
summary: "Proces kodowania wiadomości lub informacji w taki sposób, że tylko upoważnione osoby mogą je odkodować i odczytać."
---

### Podstawy

Za Wikipedią: [Szyfrowanie](https://en.wikipedia.org/wiki/Encryption):

>
W kryptografii szyfrowanie jest procesem kodowania wiadomości lub informacji w taki sposób, że tylko upoważnione osoby mogą je odkodować i odczytać. Szyfrowanie samo w sobie nie zapobiega przechwyceniu, ale chroni treść wiadomości przed osobą przechwycającą.

### Szczegółowe informacje

Za Wikipedią: [Szyfrowanie](https://en.wikipedia.org/wiki/Encryption):

>
W schemacie szyfrowania zamierzony komunikat lub wiadomość (nazywana *zwykłym tekstem*) jest szyfrowany przy użyciu algorytmu tworzącego szyfrogram, który może być odczytany jedynie po rozszyfrowaniu. Ze względów technicznych schemat szyfrowania zazwyczaj używa
pseudolosowego klucza wygenerowanego przez algorytm. Zasadniczo jest możliwe odczytanie wiadomości bez odpowiedniego klucza, jednak w przypadku dobrze zaplanowanego schematu potrzebne są znaczne umiejętności oraz zasoby obliczeniowe. Upoważniony odbiorca odczyta wiadomość bez problemu za pomocą klucza dostarczonego przez twórcę.

>
Celem szyfrowania jest zapewnienie, że jedynie osoba upoważniona do dostępu do danych, np. wiadomości tekstowej lub pliku, będzie mogła je odczytać za pomocą klucza. Ktoś nieupoważniony i bez dostępu do klucza zostanie wyłączony z dostępu do informacji.

### Kovri

@Kovri wprowadza wiele rodzajów szyfrowania z *przynajmniej* czterema podstawowymi zdolnościami:

- @Reseed dla bootstrappingu
- @trasowanie-czosnkowe: trzy warstwy szyfrowania (@szyfrowanie-czosnkowe) są użyte w celu weryfikacji bezpieczeństwa dostarczania @wiadomości do odbiorców, peerów lub @węzłów-docelowych
- szyfrowanie @tunelowe: wiadomości "czosnkowe" są przesyłane przez @tunel i szyfrowane przez furtkę @tunelu aż do punktu końcowego @tunelu
- szyfrowanie warstwy @transportowej zapobiega rozszyfrowaniu wiadomości w [warstwie medialnej](https://en.wikipedia.org/wiki/OSI_model)

Aby dowiedzieć się więcej na temat rodzajów szyfrowania oraz @podpisów kryptograficznych używanych w @Kovri i @I2P, odwiedź stronę o  [kryptografii] @Java-I2P (https://geti2p.net/spec/cryptography).
