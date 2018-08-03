---
entry: "Adres"
terms: ["address", "addresses", "adres", "adresu", "adresie"]
summary: "Alias nazwy adresu, np. donate.getmonero.org lub zestaw 95 znaków zaczynający się od 4"
---

### Podstawy

Gdy wysyłasz do kogoś Monero, potrzebujesz jedynie jednej informacji, a jest nią adres Monero tej osoby. Jest to ciąg 95 znaków zaczynający się od "4". Przykładowo adres darowizn Monero to <span class="long-term">44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A</span>.

Ponieważ adresy są długie i skomplikowane, często zamiast niego spotkasz adres @OpenAlias, na przykład darowizny Monero mogą być wysyłane na adres <span class="long-term">donate@getmonero.org</span> or <span class="long-term">donate.getmonero.org</span>.

Jeśli chcesz stworzyć swój adres OpenAlias, znajdziesz więcej informacji na [stronie OpenAlias](/knowledge-base/openalias).

### Adres zintegrowany

Adres zintegrowany to adres, w którego skład wchodzi zaszyfrowany 64-bitowy @numer-identyfikacyjny-płatności. Adres zintegrowany składa się z 106 znaków.

### Szczegółowe informacje

Adres jest powiązaniem *publicznego* @klucza-wydawania z *publicznym* @kluczem-widoczności w formacie Base58, poprzedzonym bajtem sieci (numer 18 dla Monero) i zakończony pierwszymi czterema bajtami hasza Keccac-256 z całej linii (używanymi jako suma kontrolna).
