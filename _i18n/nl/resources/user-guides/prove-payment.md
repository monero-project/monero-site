{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Betalingen bewijzen

Wanneer iemand naar wie je geld hebt gestuurd beweert dat de betaling niet is uitgevoerd, moet je kunnen bewijzen dat je hebt betaald.

Met Bitcoin wordt dit meestal gedaan door de transactie-ID op te zoeken waarbij de bron- en doeladressen
en het betaalde bedrag worden weergegeven.

Monero is echter vertrouwelijk, dus die informatie is niet openbaar beschikbaar op de blockchain. Er zijn dus iets meer
stappen nodig.

Om aan Charlie te bewijzen dat ze een betaling heeft gedaan aan Bob moet Alice drie gegevens aan Charlie laten zien:

- de transactie-ID, net als bij Bitcoin
- het adres van Bob, net als bij Bitcoin
- de transactiesleutel, een nieuwe uitvinding bij Monero en andere Cryptonote-coins

Toen Alice de transactie uitvoerde, is er automatisch een sleutel speciaal voor deze transactie gegenereerd.

#### Opdrachtregel

Alice kan deze sleutel als volgt opvragen in monero-wallet-cli (voorheen simplewallet):

> get_tx_key TXID

Daarbij voert Alice haar transactie-ID in in plaats van TXID. Als het goed is, wordt de eenmalige transactiesleutel
weergegeven.

Dit werkt alleen als monero-wallet-cli is ingesteld op het bewaren van transactiesleutels. Controleer dit als volgt:

> set

Stel het in op 1 als de instelling 0 is:

> set store-tx-info 1

#### Grafische interface

Alice kan haar monero-wallet-gui openen en haar transactiedetails bekijken op de pagina Geschiedenis:

![Geschiedenis](/img/resources/user-guides/en/prove-payment/history.png)

Hier kan ze de transactie-ID en het adres van Bob kopiëren door erop te klikken.
Vervolgens kan ze op `P` klikken voor het bewijs van een betaling (de transactiesleutel):

![Bewijs van betaling](/img/resources/user-guides/en/prove-payment/payment-proof.png)


---

Nu kan Alice de transactiesleutel, de transactie-ID en het adres van Bob naar Charlie sturen.

Opmerking: als het om meerdere transacties gaat, moeten deze stappen worden herhaald voor elke transactie.

### Betalingen controleren

Nu heeft Charlie die drie gegevens ontvangen en wil hij controleren of Alice de waarheid vertelt. Daarvoor heeft hij een bijgewerkte
blockchain nodig.

#### Opdrachtregel

Charlie typt het volgende in monero-wallet-cli:

> check_tx_key TXID SLEUTEL ADRES

Daarbij vult hij de door Alice verstrekte gegevens in plaats van de variabelen in. monero-wallet-cli gebruikt de transactiesleutel
om de transactie te ontsleutelen en geeft weer hoeveel in deze transactie naar dit adres is verzonden.

Uiteraard zal Charlie bij Bob willen navragen of het adres inderdaad van hem is, net als bij Bitcoin.

#### Grafische interface

Charlie opent monero-wallet-gui en gaat naar de pagina Geavanceerd > Bewijzen/controleren om de gegevens van Alice in te vullen in het gedeelte Transactie controleren.

![Check payment](/img/resources/user-guides/en/prove-payment/check-payment.png)

Vervolgens klikt Charlie op Controleren om te zien hoeveel door deze transactie naar dit adres is verzonden, en hoeveel bevestigingen de transactie heeft.

![Betaling gecontroleerd](/img/resources/user-guides/en/prove-payment/payment-checked.png)


---

Uiteraard zal Charlie bij Bob willen navragen of het adres inderdaad van hem is, net als bij Bitcoin.

Opmerking: als het om meerdere transacties gaat, moeten deze stappen worden herhaald voor elke transactie.
