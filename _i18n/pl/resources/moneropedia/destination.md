---
entry: "Węzeł docelowy"
tags: ["kovri"]
terms: ["Destination", "Destinations", "węzeł-docelowy", "węzła-docelowego", "węźle-docelowym", "węzłów-docelowych"]
summary: "Adres internetowy będący punktem końcowym, zarówno lokalnym jak i odległym."
---

### Podstawy

Węzeł docelowy jest adresem końcowym sieci @I2P, z którym chcesz się połączyć, np. stroną internetową w sieci I2P, serwisem lub węzłem Monero. Może on także uwzględniać *węzeł docelowy lokalny*, którego pozostali użytkownicy także muszą się połączyć aby nawiązać komunikację (podobnie jak w @clearnecie twój adres IP jest przekazany stronie podczas połączenia, aby wiadomo było *dokąd* wysłać informacje zwrotne).

### Szczegółowe informacje

Węzeł docelowy I2P może być zakodowany w @adresie-base32 lub @adresie-base64. Większość użytkowników przejmie się jedynie adresem Base32 lub nazwą hosta `.i2p`, podczas gdy, wewnętrznie, @Kovri i @książka-adresowa korzystają z @adresu-base64. Ostatecznie wszystkie węzły docelowe w I2p są 516-bajtowymi kluczami (lub dłuższymi):

`256-byte public key + 128-byte signing key + a null certificate = 516 bytes in Base64 representation`

Uwaga: certyfikaty nie zostały tu użyte, ale gdyby były, klucze byłyby jeszcze dłuższe.
