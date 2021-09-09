---
summary: 'Zbiornik transakcji, jego sekwencja tworzy łańcuch bloków'
terms: ["block", "blocks", "blok", "bloku", "blokiem", "bloków"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Podstawy

Blok jest zbiornikiem @transakcji, a każdy nowy blok dodawany jest do
@łańcucha-bloków przeciętnie co dwie minuty (zobacz stały
`DIFFICULTY_TARGET_V2` - cel trudności - zdefiniowany jako 120 sekund).

Bloki zawierają również specjalny rodzaj transakcji, @transakcję-coinbase,
która wypuszcza do sieci nowoutworzone Monero.

Bloki tworzone są w procesie @wydobycia. @węzeł, który efektywnie wydobył
blok, przekazuje go wszystkim węzłom z nim połączonym, które następnie
przekazujom go kolejnym, aż cała sieć Monero otrzyma nowy blok.

Bloki sfałszowane lub złe przeważnie nie mają szansy na powstanie, ponieważ
węzły zawsze weryfikują, czy ich transakcje nie przekraczają ogólnie
przyjętych norm obowiązujących wszystkie węzły, łącznie z potwierdzeniem
szyfrowanego @podpisu każdej płatności.
