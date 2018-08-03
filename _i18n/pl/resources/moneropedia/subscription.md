---
entry: "Subskrypcja"
tags: ["kovri"]
terms: ["Subscription", "subskrypcja", "subskrypcji", "subskrypcją", "subskrypcję", "subsckrypcji"]
summary: "Plik używany przez książkę adresową zawierający hosty I2P sparowane z węzłami docelowymi I2P."
---

### Podstawy

Subskrypcja jest plikiem, który zawiera listę hostów `.i2p` sparowanych z odpowiednimi @węzłami-docelowymi. Subskrypcje używane są przez @książki-adresowe.

### Szczegółowe informacje

Podobnie do tego, jak [plik hostów](https://en.wikipedia.org/wiki/Hosts_(file)) łączy nazwę hostu internetowego z konkretnym adresem, subskrypcja przypisuje adres `.i2p` do @adresu-base64 poprzez użycie następującego formatu (bez spacji): `host=address`

Dokładniej, subskrypcja paruje @lokalnie-unikalny-host z @adresem-base64.

Przykład:

```
anonimal.i2p=AQZGLAMpI9Q0l0kmMj1vpJJYK3CjLp~fE3MfvE-e7KMKjI5cPOH6EN8m794uHJ6b09qM8mb9VEv1lVLEov~usVliTSXCSHuRBOCIwIOuDNU0AbVa4BpIx~2sU4TxKhoaA3zQ6VzINoduTdR2IJhPvI5xzezp7dR21CEQGGTbenDslXeQ4iLHFA2~bzp1f7etSl9T2W9RID-KH78sRQmzWnv7dbhNodMbpO6xsf1vENf6bMRzqD5vgHEHZu2aSoNuPyYxDU1eM6--61b2xp9mt1k3ud-5WvPVg89RaU9ugU5cxaHgR927lHMCAEU2Ax~zUb3DbrvgQBOTHnJEx2Fp7pOK~PnP6ylkYKQMfLROosLDXinxOoSKP0UYCh2WgIUPwE7WzJH3PiJVF0~WZ1dZ9mg00c~gzLgmkOxe1NpFRNg6XzoARivNVB5NuWqNxr5WKWMLBGQ9YHvHO1OHhUJTowb9X90BhtHnLK2AHwO6fV-iHWxRJyDabhSMj1kuYpVUBQAEAAcAAA==
```

1. `anonimal.i2p`jest @lokalnie-unikalnym-hostem
2. `=` jest separatorem
3. Wszystko pozostałe jest @adresem-base64

### Rodzaje subskrypcji

Istnieją dwa rodzaje plików subskrypcji w @Kovri: *publiczne* i *prywatne*.

Subskrypcja *publiczna*:
- jest używana podczas ładowania podstawowych usług, takich jak IRC, e-mail, Monero itd.
- jest statyczna i odświeżana co 12 godzin przez serwer @książki-adresowej Monero
- pozwala na bezpieczne dzielene się subskrypcją ze wszystkimi, ponieważ jest publicznie dostępna (każdy, kto posiada tę samą publiczną subskrypcję, będzie mógł również przypisać tę samą nazwę hosta do tego samego węzła docelowego, co ty).

Subskrypcja *prywatna*:
- jest używana wyłącznie przez ciebie i nie jest dzielona z innymi użytkownikami, chyba że wyraźnie zdecydujesz na jej upublicznienie
- plikiem domyślnym jest `private_hosts.txt` w twoim @katalogu-danych.

### Aktualizowanie prywatnej subskrypcji

Możesz skorzystać z @opcji-przeskakiwania, aby ręcznie zaktualizować swoją prywatną subskrypcję. Zaktualizowany plik zostanie następnie włączony do książki adresowej i gotowy do użycia.

### Adnotacje

Aby dowiedzieć się, w jaki sposób zapisać się do wielu subskrypcji, przejdź do [przewodnika dla użytkowników](https://github.com/monero-project/kovri/blob/master/doc/USER_GUIDE.md).
