{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Bevis betalinger

Når du sender penger til en part som omdiskuterer at betalingen har blitt gjort, må du kunne bevise at betalingen har skjedd.

Med bitcoin gjøres dette som regel ved å slå opp transaksjons-ID-en, der den opprinnelige adressen og sluttadressen vises sammen med transaksjonsbeløpet.

Monero er imidlertid privat. Disse opplysningene er ikke offentlig tilgjengelig på blokkjeden. Trinnene er derfor litt mer innviklet.

For å bevise til Charlie at hun har gjennomført en betaling til Bob, må Alice forsyne Charlie med tre opplysninger:

- Transaksjons-ID-en (som i bitcoin)
- Bobs adresse (som i bitcoin)
- Transaksjonsnøkkelen, noe som er nytt med Monero og andre CryptoNote-valutaer

Når Alice har gjennomført transaksjonen, ble en éngangsnøkkel automatisk generert for akkurat den ene transaksjonen.

#### CLI

Alice kan altså forespørre den i sin monero-wallet-cli (nytt navn for den gamle simplewallet):

> get_tx_key TXID

Alice må legge inn sin faktiske transaksjons-ID i stedet for denne TXID-plassholderen. Hvis alt går som det skal, vises éngangstransaksjonsnøkkelen.

Merk at dette kun vil fungere dersom monero-wallet-cli er satt opp til å lagre transaksjonsnøkler. For å dobbeltsjekke:

> set

Hvis den er satt til 0, setter du den til 1:

> set store-tx-info 1

#### GUI

Alice kan åpne sin monero-wallet-gui og gå til historikksiden for å se transaksjonsdetaljene sine:

![History](/img/resources/user-guides/en/prove-payment/history.png)

Her kan hun kopiere transaksjons-ID-en og Bobs adresse ved å trykke på hver av dem.
Deretter kan hun trykke på `P` for å få et betalingsbevis (transaksjonsnøkkel):

![Payment proof](/img/resources/user-guides/en/prove-payment/payment-proof.png)


---

Alice kan nå sende Charlie transaksjonsnøkkelen i tillegg til transaksjons-ID-en og Bobs adresse.

Merk: Hvis flere transaksjoner har blitt gjort, må dette gjentas for hver transaksjon.

### Sjekk betalinger

Charlie har nå mottatt de tre opplysningene og vil sikre at Alice forteller sannheten. På en oppdatert blokkjede, 

#### CLI

taster Charlie inn i monero-wallet-cli:

> check_tx_key TXID TXKEY ADDRESS

Opplysningene som Alice har oppgitt innsettes på en ryddig måte istedenfor plassholderne. monero-wallet-cli-en vil bruke transaksjonsnøkkelen til å avkode transaksjonen og viser hvor mye akkurat denne transaksjonen har sendt til denne adressen.

Charlie ønsker åpenbart å dobbeltsjekke med Bob at adressen virkelig er hans – på samme måte som med bitcoin.


#### GUI

Charlie vil åpne sin monero-wallet-gui og gå til Avansert > Bevis/Sjekk-siden for å fylle inn Sjekk-seksjonen med opplysningene som Alice har oppgitt:

![Check payment](/img/resources/user-guides/en/prove-payment/check-payment.png)

Å trykke på Sjekk vil deretter fortelle Charlie hvor mye akkurat denne transaksjonen har sendt til denne adressen og hvor mange bekreftelser transaksjonen hadde:

![Payment checked](/img/resources/user-guides/en/prove-payment/payment-checked.png)


---

Charlie ønsker åpenbart å dobbeltsjekke med Bob at adressen virkelig er hans – på samme måte som med bitcoin.

Merk: Hvis flere transaksjoner har blitt gjort, må dette gjentas for hver transaksjon.
