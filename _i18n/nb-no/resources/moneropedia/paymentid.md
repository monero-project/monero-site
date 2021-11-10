---
summary: 'et valgfritt flagg bestående av 64 heksadesimaltegn som er lagt til for å identifisere transaksjoner til forhandlere'
terms: ["payment-ID", "payment-IDs", "betalings-ID", "betalings-ID-er"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

*Merknad:* Lange betalings-ID-er har blitt fjernet etter 0.15-utgivelsen, så det er ikke mulig å bruke dem lenger. Mer informasjon kan du finne i [blogginnlegget]({{ site.baseurl_root }}/2019/06/04/Long-Payment-ID-Deprecation.html) som kunngjorde at det ble avskrevet.

### Det grunnleggende

Betalings-ID er et **vilkårlig** og **valgfritt** transaksjonsvedlegg som
består av 32 bytes (64 heksadesimaltegn) eller 8 bytes (i tilfelle ved
integrerte adresser).

Betalings-ID-en brukes vanligvis til å identifisere transaksjoner til
forhandlere og børser: Gitt de intrinsiske personvernfunksjonene som er
bygget inn i Monero, der en enkel offentlig adresse vanligvis brukes for
innkommende transaksjoner, er betalings-ID-en spesielt nyttig når det kommer
til å knytte innkommende betalinger med brukerkontoer.

### Kompakte betalings-ID-er og integrerte adresser

Siden 0.9 Hydrogen Helix-versjonen, kan betalings-ID-er krypteres og bygges
inn i en betalingsadresse. Betalings-ID-er av denne typen bør være 64-bits
og er kryptert med en tilfeldig éngangsnøkkel som kun senderen og mottakeren
kjenner til.

### Å opprette en betalings-ID

Det er anbefalt å bruke den offisielle lommebokens
`integrated_address`-kommando for å automatisk generere integrerte adresser
som inneholder kompakte betalings-ID-er. Hvis du vil bruke kommandolinjen,
kan du generere betalings-ID-er på følgende måte:

Å opprette en kompakt betalings-ID for en integrert adresse:

```# openssl rand -hex 8```

Å opprette en gammeldags betalings-ID:

```# openssl rand -hex 32```
