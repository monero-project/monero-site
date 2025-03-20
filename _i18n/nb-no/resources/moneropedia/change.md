---
summary: 'Monero som sendes som del av en transaksjon som tilbakeføres til kontoen din i stedet for å gå til en annen mottaker.'
terms: ["change", "veksel"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

Monero som sendes som del av en transaksjon som tilbakeføres til kontoen din
i stedet for å gå til en annen mottaker.

### Mer informasjon

@Lommeboken i Monero-programvaren lager veksel automatisk, men når du sender
en transaksjon, tar du en inndata som du kontrollerer og forteller
Monero-nettverket hva som skal gjøres med det. Inndataen er et «innskudd»
til kontoen din som du kan forbruke. Utdataene er delen av transaksjonen som
forteller Monero-nettverket hvor midlene skal sendes til.

Du har kanskje flere inndata i kontoen din, og i forskjellige benevnelser
(for eksempel: du har satt inn 0,5 XMR på fredag, og 0,75 XMR på lørdag). Så
når du har en transaksjon med en inndata på 0,5 XMR, men bare vil sende 0,1
XMR, vil transaksjonen din inkludere et gebyr som betales til @utvinneren og
en utdata på 0,1 XMR som går til mottakeren, og resten som du vil sende
tilbake til deg selv blir en utdata tilbake til deg (dette kalles for
«veksel»). Når transaksjonen er fullført, blir vekselet tilgjengelig for deg
som en inndata som du kan dele opp på nytt og sende med en ny transaksjon.
