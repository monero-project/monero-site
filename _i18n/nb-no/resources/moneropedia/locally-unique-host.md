---
summary: 'En vert som er definert av deg og som kun kan oppløses av deg'
terms: ["Locally-unique-host", "lokal unik vert"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

En lokal unik vert er en såkalt [FQDN](https://en.wikipedia.org/wiki/FQDN)
som er definert av **deg** og kun oppløst av deg; på liknene måte hvordan en
[vertsfil](https://en.wikipedia.org/wiki/Hosts_(file)) implementeres. Den må
ikke forveksles med en kanonisk unik vert.

### Inngående informasjon

Du har muligheten til å dele din tolkning av hvordan verten blir oppløst
(`localhost` oppløses for eksempel alltid til `127.0.0.1`), men resolusjonen
fullbyrdes ikke kanonisk (noen andre kan for eksempel mappe `localhost` til
en vilkårlig IP-adresse).

Verter i et offentlig abonnement kan betraktes som @kanonisk unike verter i
@I2P-nettverket, men du står til syvende og sist fritt til å omdefinere dem
slik du ønsker.

### Merknader

- Monero bruker i hovedsak @kanonisk unik vert-oppløsning, mens @I2P kun
bruker @lokal unik vert-oppløsning.

- @I2P-er og @Kovrier som er tilordnet toppnivådomener er for tiden `.i2p`,
og @Kovri har kun til hensikt å behandle/bruke
`.i2p`-[toppnivådomenet](https://en.wikipedia.org/wiki/Top_level_domain)
