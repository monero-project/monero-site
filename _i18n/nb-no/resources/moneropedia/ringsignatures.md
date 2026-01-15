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

A ring signature makes use of your @account keys and a number of public keys
(also known as outputs) pulled from the @blockchain using a gamma
distribution method. Over the course of time, past outputs could be used
multiple times to form possible signer participants. In a "ring" of possible
signers, all ring members are equal and valid. There is no way an outside
observer can tell which of the possible signers in a signature group belongs
to your @account. So, ring signatures ensure that transaction outputs are
untraceable. Moreover, there are no @fungibility issues with Monero given
that every transaction output has plausible deniability (e.g. the network
can not tell which outputs are spent or unspent).

For å lese om hvordan Monero gir deg personvern som standard
(«unlinkability»), kan du lese i seksjonen om @stealth-adresser.
