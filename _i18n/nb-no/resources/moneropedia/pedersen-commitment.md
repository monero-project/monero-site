---
summary: 'Pedersen-forpliktelser er kryptografiske algoritmer som lar en beviser forplikte seg til en viss verdi uten å avsløre den eller kunne endre den'
terms: ["commitments", "commitment", "pedersen", "pedersen-commitment", "pedersen-commitments", forpliktelse", "forpliktelser", "pedersen-forpliktelse", "pedersen-forpliktelser"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

Pedersen-forpliktelser er kryptografiske algoritmer som lar en beviser
forplikte seg til en viss verdi uten å avsløre den eller kunne endre den.

Når du forbruker Monero, er verdien på inndataene du bruker og verdien på
utdataene du sender kryptert og ugjennomsiktig for alle, bortsett fra
mottakeren av hver av utdataene. Pedersen-forpliktelser lar deg sende Monero
uten å avsløre verdien på transaksjonene. Pedersen-forpliktelser gjør det
også mulig for folk å verifisere at transaksjoner på blokkjeden er gyldige
og at de ikke oppretter Monero ut av ingenting.

### Hva det innebærer

Så lenge de krypterte utdatabeløpene opprettes, som inkluderer en utdata for
mottakeren og en veksel-utdata tilbake til senderen, og det ukrypterte
transaksjonsgebyret er lik summen av inndataene som brukes, er det en
legitim transaksjon, og det kan bekreftes at det ikke opprettes Monero ut av
ingenting.

Pedersen-forpliktelser innebærer at summene kan verifiseres som like, men
Monero-verdien av hver av summene og Monero-verdien av inndataene og
utdataene hver for seg er ubestemte. Pedersen-forpliktelser innebærer også
at til og med forholdet mellom én inndata og en annen, eller én utdata og en
annen, er ubestemt.

Det er uklart hvilke inndata som virkelig forbrukes i og med at
ringsignaturen lister opp både ekte inndata som forbrukes og
avledningsinndata, og derfor kan du ikke vite for hvilke inndata
Pedersen-forpliktelsene må summeres. Men det er greit, fordi
@RingCT-ringsignaturen må bare bevise at utdataene er like for summen av
inndataene for én kombinasjon. Dette er, av matematiske årsaker, umulig å
forfalske.

### Inngående informasjon

Se mer informasjon i [Ring Confidential
Transactions-dokumentet](https://eprint.iacr.org/2015/1098.pdf), skrevet av
Shen Noether i Monero Forskningslaben.
