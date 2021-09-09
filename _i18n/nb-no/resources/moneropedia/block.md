---
summary: 'en beholder av transaksjoner, en sekvens som danner en blokkjede'
terms: ["block", "blocks", "blokk", "blokker"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

En blokk er en beholder av @transaksjoner, der en ny blokk legges til
@blokkjeden hvert 2. minutt i gjennomsnitt (se konstant
`DIFFICULTY_TARGET_V2` (vanskelighetsmål), som er definert som 120
sekunder).

Blokker inneholder også en spesiell transaksjonstype, nemlig
@coinbase-transaksjonen, som legger til nylig opprettede Monero til
nettverket.

Blokker dannes gjennom en prosess av @utvinning, og @noden som suksessfullt
utvinner blokken, kringkaster den til hver av @nodene som er koblet til den,
som deretter kringkaster blokken videre helt til hele Monero-nettverket har
mottatt den.

Falske eller dårlige blokker kan generelt ikke opprettes, i og med at @noder
som mottar blokker alltid verifiserer @transaksjonene de inneholder mot et
sett med konsensusregler som alle noder føyer seg etter, blant annet
validering av kryptografiske @signaturer på hver transaksjon.
