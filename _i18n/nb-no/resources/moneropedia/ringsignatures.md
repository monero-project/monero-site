---
summary: 'en gruppe kryptografiske signaturer med minst én ekte deltaker, men ingen måte å fastslå hvem i gruppen som er den ekte i og med at alle fremstår som gyldige'
terms: ["ring-signature", "ring-signatures", "ringsignatur", "ringsignaturer"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

I kryptografi er en ringsignatur en slags digital signatur som kan utføres
av et hvilket som helst medlem av en gruppe brukere der hver har nøkler. En
melding som er signert med en ringsignatur er derfor støttet av noen i en
bestemt gruppe mennesker. Én av sikkerhetsegenskapene av en ringsignatur er
at det er ulønnsomt å bruke regnekraft til å fastslå *hvilke* av
gruppemedlemmenes nøkler som ble brukt for å produsere signaturen.

En ringsignatur kan for eksempel brukes til å oppgi en anonym signatur fra
en «høytstående tjenestemann i Det hvite hus» uten å avsløre hvilken
tjenestemann som signerte meldingen. Ringsignaturer er et egnet bruksområde
for dette fordi anonymiteten til en ringsignatur ikke kan tilbakekalles, og
fordi gruppen tilknyttet en ringsignatur kan improviseres (som ikke krever
noe tidligere oppsett).

### Anvendelde for Monero

En ringsignatur benytter @kontonøklene dine og en rekke offentlige nøkler
(også kjent som utdata) som trekkes fra @blokkjeden ved å bruke en
triangulær fordelingsmetode. Tidligere utdata kan over tid brukes flere
ganger for å danne mulige signaturdeltakere. I en «ring» av mulige
underskrivere, er alle ringmedlemmer like og gyldige. En utenforstående kan
ikke fortelle hvilke av de mulige underskriverne i en signaturgruppe som
tilhører din @konto. Ringsignaturer sikrer med andre ord at
transaksjonsutdata er usporbare. Det er dessuten ingen
@fungibilitetsproblemer med Monero fordi hver transaksjonsutdata har en
plausibel benektelse (nettverket kan for eksempel ikke skille hvilke utdata
som er brukt eller ubrukt).

For å lese om hvordan Monero gir deg personvern som standard
(«unlinkability»), kan du lese i seksjonen om @stealth-adresser.
