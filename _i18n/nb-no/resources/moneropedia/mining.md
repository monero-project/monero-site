---
summary: 'Prosessen av å kryptografisk beregne et matematisk bevis for en blokk som inneholder en rekke transaksjoner, som deretter legges til blokkjeden'
terms: ["mining", "miner", "miners", "utvinning", "utvinner", "utvinnere"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

Prosessen av å kryptografisk beregne et matematisk bevis for en blokk som
inneholder en rekke transaksjoner, som deretter legges til blokkjeden.

Utvinning er den distribuerte prosessen av å bekrefte transaksjoner på den
offentlige hovedboken som ikkeholder alle transaksjonene, altså
@blokkjeden. Monero-noder bruker blokkjeden til å skille legitime
transaksjoner fra forsøk på å bruke mynter om igjen som allerede har blitt
brukt et annet sted.

Monero er utelukkende drevet av «Proof of Work» («bevis på arbeid»). Den
bruker en utvinningsalgoritme som potensielt kan tilordnes milliarder av
enheter (alle moderne x86-CPU-er og mange GPU-er). Monero bruker en variant
av CryptoNight Proof of Work (PoW)-algoritmen, som er designet for å brukes
i vanlige CPU-er og GPU-er.

Den smarte utvinningsfunksjonen tillater transparent CPU-utvinning på
brukerens PC – fjernt unna den faktiske sentraliseringen av utvinningsgårder
og pool-utvinning – og bestreber å følge Satoshi Nakamotos opprinnelige
visjon om en ekte P2P-valuta.
