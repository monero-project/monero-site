---
summary: 'En vert som er kanonisk innstilt til en adresse eller sett med adresser'
terms: ["Canonically-unique-host", "Kanonisk-unik-vert"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

En kanonisk-unik-vert er en [FQDN](https://en.wikipedia.org/wiki/FQDN) som
er kanonisk innstilt til en tilordnet adresse eller sett med adresser, og må
ikke forveksles med en @lokal-unik-vert.

### Inngående informasjon

En kanonisk-unik-vert er definert av eksterne, autoritative kilder;
vanligvis gjennom en [DNS](https://en.wikipedia.org/wiki/DNS). Når
vertsnavnet til en motpart avklares, må man mest sannsynlig bruke en ekstern
kilde for oppklaringen, med mindre man har følgende implementert:

- en databasefil tilsvarende en
[vertsfil](https://en.wikipedia.org/wiki/Hosts_(file))  - et løsningsprogram
for interne nettverk (som etter hvert foretar trekkforespørsler fra eksterne
kilder)

### Merknader

- Monero bruker primært en @kanonisk-unik-vert-resolusjon, mens @I2P kun
bruker en @lokal-unik-vert-resolusjon.  - @I2Ps og @Kovris selvtilordnede
toppnivå-domene er for tiden `.i2p`, og det er meningen at @Kovri kun
behandler/bruker
`.i2p`-[toppnivå-domenet](https://en.wikipedia.org/wiki/Top_level_domain)
