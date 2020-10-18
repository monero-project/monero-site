---
tags: ["kovri"]
terms: ["Adressebok"]
summary: "Lar deg besøke I2P-nettsteder/-tjenester som har .i2p-domenet"
---

### Det grunnleggende

For å kunne bla i I2P-sider eller -tjenester med Kovri, trenger du en adressebok. En adressebok lar deg oversette I2P-nettsider/-tjenester som bruker `.i2p` [top-level domain](https://en.wikipedia.org/wiki/Top_level_domain) inn i en adresse som I2P-nettverket vil forstå.

Uten en adressebok, sitter du fast og må bruke en base32-adresse hver gang du besøker en I2P-nettside/-tjeneste – og det er ikke noe gøy!

### Inngående informasjon

I og med at [DNS](https://en.wikipedia.org/wiki/DNS) ikke finnes på I2P-nettverket, bruker Kovri **ikke** DNS eller andre typer kanonisk-unik-vert-oppløsning. Kovri parrer i stedet en lokal-unik-vert til en base64-adresse-destinasjon i et abonnement. Så snart adresseboken din er fylt med et abonnement, kan du gjøre din favoritt-`.i2p`-domeneside om til en anvendelig I2P-destinasjon.

### Å opprette en adressebok

Installasjonen din vil som standard komme med et standard, offentlig abonnement kalt `hosts.txt` i data-katalogen din. Når Kovri starter, laster det inn dette abonnementet og henter eventuelle andre abonnementer som du har spesifisert. Når disse er lastet inn, vil adresseboken din fylles på en hensiktsmessig måte. For detaljer om hvordan å håndtere abonnenter, kan du lese mer i abonnement-delen.

### Å oppdatere addresseboken

Det er for tiden flere måter å oppdatere adresseboken din på:

1. Bruk en jump-tjeneste til å sette inn I2P-adressene i adresseboken din
2. Bruk en jump-tjeneste til å kopiere/lime inn en adresse i ditt private abonnement
3. Legg til eller fjern et privat abonnement manuelt

**Merk: Kovri er under kontinuerlig utvikling. I fremtiden *vil* det finnes enklere måter å oppdatere adresseboken på.**

### Adressebok/Navnespesifikasjon

For spesifikasjonsdetaljer og mer, kan du besøke [Adressebok og navnespesifikasjon](https://geti2p.net/en/docs/naming)
