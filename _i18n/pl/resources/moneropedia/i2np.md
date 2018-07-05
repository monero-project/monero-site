---
entry: "I2NP"
tags: ["kovri"]
terms: ["I2NP"]
summary: "Protokół sieci I2P: mechanizm, za pomocą ktąrego wiadomości I2NP są przesyłane do sieci I2P."
---

### Podstawy

Za: @Java-I2P:

>
@I2NP zarządza trasowaniem i mieszaniem wiadomości pomiędzy routerami oraz wybiera rodzaj transportu gdy komunikacja z peerem może się odbyć za pomocą wielu środków.

### Szczegółowe informacje

Za: @Java-I2P:

>
@wiadomości I2NP (Protokół Sieci I2P) mogą zostać użyte do pojedynczego hopu, router-to-router lub point-to-point. Poprzez @szyfrowanie oraz zawieranie wiadomości w innych wiadomościach, możliwe jest wysyłanie ich bezpieczną drogą przez wiele hopów aż do @węzła końcowego. I2NP nie uściśla ani nie wymaga żadnej konkretnej warstwy @transportu, ale wymaga użycia przynajmniej jednego środka.

>
Za każdym razem gdy węzeł końcowy chce wysłać wiadomość do innego węzła końcowego, udostępnia on swój lokalny router ze strukturą węzła końcowego oraz surowe bajty wiadomości, która ma być wysłana. Następnie router decyduje dokąd ją wysłać, dostarcza ją poprzez wychodzące @tunele, informując punkt końcowy, aby przekazał ją do odpowiedniego tunelu przychodzącego, gdzie zostaje ona przekazana ponownie do tunelu punktu końcowego i udostępniona odbiorcy.

### Adnotacje

Przeczytaj więcej o [protokole I2NP](https://geti2p.net/en/docs/protocol/i2np) oraz jego [specyfikacjach](https://geti2p.net/spec/i2np).
