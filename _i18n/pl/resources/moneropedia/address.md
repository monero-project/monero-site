---
summary: 'Alias nazwy adresu, np. donate.getmonero.org lub zestaw 95 znaków zaczynający się od 4'
terms: ["address", "addresses", "adres", "adresu", "adresie"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Podstawy

Gdy wysyłasz do kogoś Monero, potrzebujesz jedynie jednej informacji, a jest
nią adres Monero tej osoby. Jest to ciąg 95 znaków zaczynający się od
"4". Przykładowo adres darowizn Monero to
888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H.

Ponieważ adresy są długie i skomplikowane, często zamiast niego spotkasz
adres @OpenAlias, na przykład darowizny Monero mogą być wysyłane na adres
donate@getmonero.org or donate.getmonero.org.

Jeśli chcesz stworzyć swój adres OpenAlias, znajdziesz więcej informacji na
[stronie OpenAlias](https://openalias.org/).

### Adres zintegrowany

Adres zintegrowany to adres, w którego skład wchodzi zaszyfrowany 64-bitowy
@numer-identyfikacyjny-płatności. Adres zintegrowany składa się z 106
znaków.

### Szczegółowe informacje

Adres jest powiązaniem *publicznego* @klucza-wydawania z *publicznym*
@kluczem-widoczności w formacie Base58, poprzedzonym bajtem sieci (numer 18
dla Monero) i zakończony pierwszymi czterema bajtami hasza Keccac-256 z
całej linii (używanymi jako suma kontrolna).
