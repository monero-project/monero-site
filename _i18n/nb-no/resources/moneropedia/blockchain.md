---
summary: 'a distributed ledger of all transactions both past and present, without revealing who the funds came from or went to'
terms: ["blockchain", "blockchains", "blokkjede", "blokkjeder"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

En @blokkjede er en distribuert hovedbok som kontinuerlig vokser med en
bokføring av alle transaksjonene som har skjedd med en gitt
kryptovaluta. Denne databasen refereres ofte til som en hovedbok, fordi
dataene inneholder en stor liste over transaksjoner som har skjedd. I Monero
blir disse transaksjonene pakket sammen i «blokker» hvert 2. minutt (i
gjennomsnitt), og alle utvinnere og noder på nettverket har kopier av disse
blokkene.

### Moneros @blokkjede

I motsetning til Bitcoin og andre kryptovaluta, avslører ikke Moneros
@blokkjede hvor midlene i en transaksjon har kommet fra eller skal til, noe
som gir anonymitet og gjør valutaen fullstendig @fungibel. Beløpene til alle
transaksjonene skjules dessuten av en Monero-funksjon som kalles
@RingCT. For revisjons- og transparensformål, kan en bruker dele sin
@visningsnøkkel for å bevise at de kontrollerer en viss mengde med Monero.
