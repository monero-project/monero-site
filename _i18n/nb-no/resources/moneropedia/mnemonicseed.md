---
summary: 'en ordfrase på 13 eller 25 ord som brukes til å sikkerhetskopiere en Monero-konto, tilgjengelig i en rekke språk'
terms: ["mnemonic-seed", "mnemonic", "mnemonisk frø", "mnemonisk"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

En ordfrase på 13 eller 25 ord som brukes til å sikkerhetskopiere en
Monero-konto, tilgjengelig i en rekke språk. Denne frasen på 25 ord (13 ord
ved MyMonero) inneholder all den nødvendig informasjonen til å se og bruke
midler i en Monero-@konto.

### Inngående informasjon

I den offisielle lommeboken består det mnemoniske frøet av 25 ord, der det
siste ordet brukes som en sjekksum. Disse ordene korresponderer til et
256-bits heltall, som er kontoens *private* @forbruksnøkkel. Den *private*
@visningsnøkkelen utledes ved å hashe den private forbruksnøkkelen med
Keccak-256, som produserer et ytterligere 256-bits heltall. De
korresponderende *offentlige* nøklene utledes deretter av de private
nøklene.

Ved å lagre det mnemoniske frøet på 25 ord på et trygt sted, har du en
sikkerhetskopi av din private nøkkel og således alle Monerojene dine. Å dele
denne nøkkelen på 25 ord er ensbetydende med å gi en annen person full
tilgang til midlene dine.

Det er ikke en god idé å lagre mer enn du har råd til å tape i en «varm
lommebok», med andre ord en lommebok som for øyeblikket er eller har vært
koblet til internett eller er lastet opp på enheter som har eller i
fremtiden kan kobles til internett eller en upålitelig kilde!

Ved å opprette en «kald» lommebok eller @papirlommebok, kan du lagre
Moneroene dine på en trygg måte.
