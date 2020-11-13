---
terms: ["remote-node", "remote-nodes", "ekstern node", "eksterne noder"]
summary: "Noder som ikke kjører i samme maskin som lommeboken. Med åpne, eksterne noder kan man bruke Monero-nettverket med en gang"
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}
En node som ikke kjører på samme lokale maskin hvor Monero-lommeboken befinner seg, kalles for en «ekstern node», og kan være privat eller åpen.


En **privat, ekstern node** kjører ikke på den lokale maskinen din, men du har full kontroll over den. Et klassisk eksempel er en node som kjører på en VPS eller server. Den noden befinner seg ikke på den lokale maskinen din, men du har full kontroll over den. Du kan til og med beslutte å gjøre den om til en offentlig node og la folk koble seg til den.

En **Åpen, ekstern node** kan brukes av folk som av personlige grunner (vanligvis på grunn av maskinvarekrav, diskplass eller tekniske ferdigheter), ikke kan eller vil kjøre sin egen node og foretrekker å stole på en offentlig tilgjengelig en på Monero-nettverket. Åpne, eksterne noder refereres ofte til som «eksterne noder».

Å bruke en åpen node lar deg foreta umiddelbare transaksjoner uten behov for å laste ned blokkjeden og synkronisere til Monero-nettverket først, men på bekostning av kontrollen over personvernet ditt. Monero-samfunnet foreslår å alltid at du kjører din egen node for å oppnå den største graden av personvern og for å hjelpe med å desentralisere nettverket.

### Offentlige noder

Åpne noder er fine fordi de, som nevnt over, lar folk som ikke kjører sin egen node umiddelbart delta i Monero-nettverket. Det er to hovedmåter å koble til en åpen node: Enten få noen til å dele sin offentlige node med deg ved å be dem om å «åpne den» og gi deg IP-adressen og porten sin, eller ved å bruke en offentlig node.

Offentlige noder kan nås i nettverket via to systemer:

- **Nodeaggregatorer**, som i bunn og grunn er lister over åpne, eksterne noder. Operatørene av disse nodene bestemte seg for å legge dem til aggregatoren slik at folk kan bruke dem. Aggregatoren gir en enkel nettadresse til personen som vil bruke en ekstern node. Denne nettadressen kobles til en av nodene i listen og må settes inn i Monero-lommeboken (GUI eller CLI). Lommeboken kontakter deretter en av nodene som avledes av nettadressen og lar sluttbrukeren umiddelbart motta og sende transaksjoner. Én av de mest kjent nodeaggregatorene er [MoneroWorld](https://moneroworld.com/#nodes).
- **Opprinnelige offentlige noder**. Dette er ett av de kuleste nye funksjonene som Monero-utviklerne har funnet på for å forbedre brukeropplevelsen og for å gjøre det lettere å koble til nettverket. Daemon lar en gjøre en node offentlig ved å legge til `--public-node`-flagget. På denne måten vil det annonseres på P2P-nettverket, og folk vil kunne koble til den (eller til en annen offentlig node som annonserer seg selv på samme måte) ved å bruke det tilhørende valget i GUI- og CLI-lommebøkene.

Vær oppmerksom på at det kan være risikabelt å bruke offentlige, eksterne noder. Nodeoperatører kan lenke transaksjoner til IP-adresser. Disse risikoene kan reduseres, men du bør alltid unngå å bruke dem hvis du har mulighet. Kjør din egen node!