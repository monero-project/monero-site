{% include disclaimer.html translated="yes" translationOutdated="no" %}

# monero-wallet-cli

`monero-wallet-cli` er lommebokprogramvaren som kommer sammen med Monero tree. Det er et konsollprogram og administrerer en konto. Mens en bitcoin-lommebok håndterer både en konto og blokkjeden, separerer Monero disse: `monerod` håndterer blokkjeden, og `monero-wallet-cli` håndterer kontoen.

Denne veiledningen viser deg hvordan man utfører ulike operasjoner fra `monero-wallet-cli`-UI-en. Veiledningen antar at du bruker den siste versjonen av Monero og allerede har opprettet en konto i henhold til de andre veiledningene.


## Å sjekke saldoen din

Fordi håndteringen av blokkjeden og lommeboken er separate programmer, må mye av bruken av `monero-wallet-cli` skje med @daemon. Dette omfatter å se etter innkommende transaksjoner til adressen din.
Når du kjører både `monero-wallet-cli` og `monerod`, kan du taste inn `balance.`

Eksempel:

Dette vil trekke blokker fra daemon som lommeboken enda ikke har sett og oppdatere saldoen slik at den samsvarer. Denne prosessen gjøres normalt i bakgrunnen, omtrent hvert minutt. For å se se saldoen uten å oppdatere:

    balance
    Balance: 64.526198850000, unlocked balance: 44.526198850000, including unlocked dust: 0.006198850000

I dette eksempelet er `Balance` din totale saldo. `unlocked balance` er beløpet som for øyeblikket er disponibelt. Nylig mottatte transaksjoner trenger 10 bekreftelser på blokkjeden før de låses opp. `unlocked dust` viser til veldig små beløp av ubrukte utdata som kan ha samlet seg opp på kontoen din.

## Å sende monero

Du vil trenge standardadressen som du vil sende til (en lang streng som begynner med '4'), muligens en betalings-ID, dersom mottakeren ber om det. I det siste tilfellet kan mottakeren i stedet gi deg en integrert adresse, der begge disse er pakket inn i én enkel adresse.

### Å sende til en standard adresse:

    transfer ADDRESS AMOUNT PAYMENTID

Bytt ut `ADDRESS` med adressen du vil sende til, `AMOUNT` med hvor mange monero du vil sende, og `PAYMENTID` med betalings-ID-en du ble gitt. Betalings-ID-er er valgfrie. Hvis mottakeren ikke trenger en, kan du bare sløyfe det.

### Å sende til en integrert adresse:

    transfer ADDRESS AMOUNT

Betalings-ID-en inngår i dette tilfellet i den integrerte adressen.

### Spesifiser antallet utdata for en transaksjon:

    transfer RINGSIZE ADDRESS AMOUNT

Bytt ut `RINGSIZE` med antallet utdata du vil bruke. **Hvis dette ikke angis, velges 11 som standard.** Det er en god idé å bruke standarden, men du kan øke antallet dersom du vil inkludere flere utdata. Jo høyere antallet, jo større er transaksjonen, og jo høyere gebyr trengs for transaksjonen.


## Å motta monero

Hvis du har din egen Monero-adresse, trenger du bare å gi din standardadresse til noen.

Du kan finne ut hva adressen din er med kommandoen:

    address

I og med at Monero er anonymt, vil du ikke se avsenders adresse som midlene du mottok kom fra. Hvis du vil vite det, for eksempel for å kreditere en spesifikk kunde, må du be senderen om å bruke en betalings-ID, som er en vilkårlig og valgfri merkelapp som festes til en transaksjon. For å gjøre livet enklere, kan du generere en adresse som allerede inkluderer en tilfeldig betalings-ID:

    integrated_address

Dette vil generere en tilfeldig betalings-ID og gi deg adressen som inkluderer din egen konto og den betalings-ID-en. Hvis du vil velge en spesiell betalings-ID, kan du også gjøre det:

    integrated_address 12346780abcdef00

Betalinger som gjøres til en integrert adresse som er generert fra kontoen din, går til din konto der den spesifikke betalings-ID-en festes slik at du kan skille betalinger fra hverandre.


## Å bevise til en tredjepart at du har betalt noen

Hvis du betaler en forhandler og forhandleren påstår å ikke ha mottatt midlene, må du kunne bevise for en tredjepart at du har sendt midlene – eller til og med til forhandleren, dersom det er en ærlig feil. Monero er privat, så du kan ikke bare vise til transaksjonen din i blokkjeden, i og med at man ikke kan fastslå hvem som har sendt det, og hvem som mottok det. Ved å forsyne parten med en «per-transaction»-privat nøkkel, kan den parten si hvorvidt den transaksjonen sendte monero til den bestemte adressen eller ikke. Merk at å lagre disse «per-transaction»-nøklene er deaktivert som standard, så du må aktivere det før du sender hvis du tror du kan få bruk for det:

    set store-tx-info 1

Du kan finne igjen tx-nøkkelen fra en tidligere transaksjon slik:

    get_tx_key 1234567890123456789012345678901212345678901234567890123456789012

Legg inn transaksjons-ID-en som du ønsker nøkkelen for. Husk at en betaling må splittes inn i mer enn én transaksjon, så du trenger kanskje flere nøkler. Du kan deretter sende den nøkkelen eller disse nøklene til hvem nå enn du vil sende bevis på transaksjonen din til sammen med transaksjons-ID-en og adressen du sendte til. Merk at denne tredjeparten også vil kunne se hvor mye veksel som ble sendt tilbake til deg dersom vedkommende kjenner til din adresse.

Hvis du er tredjeparten (altså om noen vil bevise til deg at de har sendt monero til en adresse), kan du sjekke det slik:

    check_tx_key TXID TXKEY ADDRESS

Bytt ut `TXID`, `TXKEY` og `ADDRESS` med henholdsvis transaksjons-ID-en, per-transaction-nøkkel og mottakeradressen som ble gitt til deg. monero-wallet-cli vil sjekke den transaksjonen og gi deg beskjed om hvor mye monero denne transaksjonen utbetalte til den oppgitte adressen.


## Mulighet til å bekrefte/avbryte betalinger

Hvis du vil få en siste bekreftelse når du sender en betaling:

    set always-confirm-transfers 1


## Hvordan å finne en betaling som skal til deg

Hvis du har mottatt en betaling ved bruk av en bestemt betalings-ID, kan du slå den opp: 

    payments PAYMENTID

Du kan også gi dem mer enn én betalings-ID.

Mer generelt kan du gjennomgå innkommende og utgående betalinger:

    show_transfers

Du kan gi en valgfri høyde for å kun liste opp nylige transaksjoner og kun be om innkommende eller utgående transaksjoner.

    show_transfers in 650000

vil for eksempel kun vise innkommende overføringer etter blokk 650 000. Du kan også gi et høydeintervall.

Hvis du vil utvinne, kan du gjøre det fra lommeboken:

    start_mining 2

Dette setter i gang utvinning på daemonen ved bruk at to tråder. Merk at dette er solo-utvinning, så det kan ta litt tid før du finner en blokk. For å stanse utvinningen:

    stop_mining
