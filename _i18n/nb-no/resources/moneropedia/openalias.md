---
summary: 'En standard som lar deg bruke en e-post eller domenesyntaks istedenfor en adresse for å betale noen, f.eks. donate@getmonero.org eller donate.getmonero.org'
terms: ["OpenAlias"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

Monero-kjerneteamet lanserte en standard, kalt OpenAlias, som tillater mer
lettleste adresser, og gjør Zookos trekant «til en firkant». OpenAlias kan
brukes for enhver kryptovaluta, og er allerede implementert i Monero,
Bitcoin (i den seneste Electrum-versjonen) og HyperStake.

OpenAlias prøver å gi en måte å forenkle oppretting og bruk av aliser i et
teknologiklima som stadig er i endring. Brukere prøver å krysse broen til
private og kryptografisk sikre infrastrukturer og systemer, men mange av dem
har såvidt begynte å huske e-postadressene til vennene og familien sin.

Som del av den pågående utviklingen av Monero-kryptovalutaprosjektet, spurte vi oss selv: Hvordan kan vi forenkle betalinger for brukere som ikke er vant med krytovaluta? Moneros stealth-adresser har en lengde på minst 95 tegn – å huske dem er ikke er alternativ, og å spørre noen om å sende en betaling til en <95-character-string> vil bare føre til forvirring.

OpenAlias er i bunn og grunn en TXT-DNS-oppføring på en FQDN (fullt
kvalifisert domenenavn). Ved å kombinere dette med DNS-relaterte
teknologier, har vi opprettet en alias-standard som er utvidbar for
utviklere, intuitiv og kjent for brukere, og som kan kjøres sammen med både
sentraliserte og desentraliserte domenesystemer.

En standard som lar deg bruke en e-post eller domenesyntaks istedenfor en
adresse for å betale noen, f.eks. donate@getmonero.org eller
donate.getmonero.org.

Du kan finne mer informasjon på [OpenAlias-nettsiden](https://openalias.org)
