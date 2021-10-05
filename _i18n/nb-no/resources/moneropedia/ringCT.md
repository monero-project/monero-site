---
summary: 'en måte å skjule beløpet som sendes i en Monero-transaksjon'
terms: ["ringCT", "ring-CT"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

RingCT, kort for «Ring Confidential Transactions», er hvordan
transaksjonsbeløp skjules i Monero.

Ring CT ble implementert i blokk #1220516 i januar 2017. Denne funksjonen
ble obligatorisk for alle transaksjonene på nettverket etter september 2017.

RingCT introduserer en forbedret versjon av @ring-signaturer som kalles «A
Multi-layered Linkable Spontaneous Anonymous Group signature», som åpner for
skjulte beløp, opprinnelser og destinasjoner til transaksjoner med rimelig,
verifiserbar og pålitelig generering av mynter.

For mer informasjon, kan du lese dokumentet til oppretteren, Shen Noether,
[her](https://eprint.iacr.org/2015/1098).
