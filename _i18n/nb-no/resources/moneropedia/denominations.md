---
summary: 'En valør er en egnet beskrivelse av en valutamengde. Den er ofte en underenhet av valutaen. En cent er for eksempel tradisjonelt sett 1/100 av en spesiell valutaenhet).'
terms: ["denominations", "subunits", "valører", "underenheter", "tacoshi", "piconero", "nanonero", "micronero", "millinero", "centinero", "decinero", "decanero", "hectonero", "kilonero", "meganero", "giganero"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

En valør er en egnet beskrivelse av en valutamengde. Den er ofte en
underenhet av valutaen. En cent er for eksempel tradisjonelt sett 1/100 av
en spesiell valutaenhet).

Valørnavnene til Monero sløyfer «mo»-delen og legger til SI-prefikser for å
gjøre det enkelt. Den minste Monero-enheten er faktisk 1 piconero
(0,000000000001 XMR).

### Moneros valører

|------------+----------+-------------------|
| Navn       | Base 10  | Mengde            |
|-----------:|:--------:| -----------------:|
| piconero   | 10^-12   | 0,000000000001    |
| nanonero   | 10^-9    | 0,000000001       |
| micronero  | 10^-6    | 0,000001          |
| millinero  | 10^-3    | 0,001             |
| centinero  | 10^-2    | 0,01              |
| decinero   | 10^-1    | 0,1               |
|============+==========+===================|
| **monero** | **10^0** | **1**             |
|============+==========+===================|
| decanero   | 10^1     | 10                |
| hectonero  | 10^2     | 100               |
| kilonero   | 10^3     | 1000             |
| meganero   | 10^6     | 1 000 000         |
|------------+----------+-------------------|

### Inngående informasjon

Støtte for inndata ved å bruke SI-prefikser ble [lagt til Monero
kodebasen](https://github.com/monero-project/monero/pull/1826) 3. mars 2017
av [Moneromooo](https://github.com/moneromooo-monero). Den minste
Monero-enheten (10^-12 XMR) ble opprinnelig kalt en tacoshi, til ære for
brukeren
[Tacotime](https://bitcointalk.org/index.php?action=profile;u=19270), som
var en tidlig bidragsyter i Monero, og ble i ettertid gitt et nytt navn for
å gjøre det brukervennlig og konsekvent.

### Monerod-implementering

Den minste brøkdelen av Monero som er i monerod-implementeringen er også
kjent som en @atomisk enhet, som for øyeblikket er én piconero.
