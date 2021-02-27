{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Innholdsfortegnelse

* [1. Windows](#1-windows)
* [2. Mac OS X](#2-mac-os-x)
* [3. Linux](#3-linux)
* [4. Sluttmerknader](#4-a-few-final-notes)

### 1. Windows

Vi må først sørge for at vi er tilstrekkelig forberedt. Dette innebærer følgende:

1. Denne veiledningen antar at du allerede har initialisert Ledger-lommeboken din og således generert et mnemonisk frø på 24 ord.

2. Du må kjøre/bruke CLI v0.12.2.0, som du kan finne <a href="{{site.baseurl}}/downloads/">her</a>.

3. Du må installere Ledger Monero-appen og konfigurere systemet ditt. Veiledninger til dette kan du finne [her](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (spesielt seksjonene 3.1.1 og 3.2.3). I tillegg må du sørge for å sette nettverket til `Mainnet`

4. Ledgeren din må plugges inn, og Ledger Monero-appen må være i gang.

5. Enten din @daemon (`monerod.exe`) bør kjøre og helst være helt synkronisert, eller så må du koble til en ekstern node.

Nå som vi er ordentlig forberedt, la oss sette i gang!

1. Gå til katalogen/mappen der monerod.exe og monero-wallet-cli.exe ligger.

2. Åpne en ny ledetekst/powershell. Dette gjøres ved å først sørge for at markøren din ikke befinner seg på noen av filene og deretter trykke inn SHIFT + høyreklikke. Dette vil gi det et valg om å «Åpne kommandovinduet her». Hvis du bruker den siste versjonen av Windows 10, vil det gi deg et valg om å «åpne PowerShell-vinduet her».

3. Nå kan du taste inn:

`monero-wallet-cli.exe --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200` (Win 7 + 8)

`.\monero-wallet-cli.exe --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200` (Win 10)

Merk at dette er en plassholder for det faktiske lommeboknavnet. Hvis du for eksempel vil kalle lommeboken din for `MoneroWallet`, er kommandoen som følger:

`monero-wallet-cli.exe --generate-from-device MoneroWallet --subaddress-lookahead 3:200` (Win 7 + 8)

`.\monero-wallet-cli.exe --generate-from-device MoneroWallet --subaddress-lookahead 3:200` (Win 10)

4. CLI-en vil, etter at den ovennevnte kommandoen er utført, be deg om et passord. Sørg for å velge et sterkt passord og bekrefte det.

5. Ledgeren vil be deg om hvorvidt du vil eksportere de private nøklene eller ikke. Midlene dine kan først og fremst ikke bli kompromittert med kun den private visningsnøkkelen. Å eksportere den private visningsnøkkelen gjør at klienten (Monero v0.12.2.0 på PC-en) kan skanne etter blokker og se etter transaksjoner som tilhører lommeboken/adressen din. Hvis dette valget ikke brukes, vil enheten (Ledgeren) skanne etter blokker, noe som går betraktelig saktere. Det er imidlertid én ting å passe seg for. Det er at dersom systemet ditt blir kompromittert, vil den uvedkommende muligens kunne kompromittere din private nøkkel i tillegg, som er ødeleggende for personvern. Dette er praktisk talt umulig når den private visningsnøkkelen ikke eksporteres.

6. Du må muligens trykke på «Confirm» (Bekreft) to ganger før du kan fortsette.

7. Ledger Monero-lommeboken din vil nå genereres. Merk at dette kan ta opptil 5–10 minutter. Videre vil det ikke komme en umiddelbar tilbakemelding, verken på CLI-en eller Ledgeren.

8. `monero-wallet-cli` vil oppdateres. Vent til den er ferdig med å oppdatere.

Gratulerer. Du kan nå bruke Ledger Monero-lommeboken din sammen med CLI-en.

### 2. Mac OS X
Vi må først sørge for at vi er tilstrekkelig forberedt. Dette innebærer følgende:

1. Denne veiledningen antar at du allerede har initialisert Ledger-lommeboken din og således generert et mnemonisk frø på 24 ord.

2. Du må kjøre/bruke CLI v0.12.2.0, som du kan finne <a href="{{site.baseurl}}/downloads/">her</a>.

3. Du må installere Ledger Monero-appen og konfigurere systemet ditt. Veiledninger til dette kan du finne [her](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (spesielt seksjonene 3.1.1 og 3.2.2). I tillegg må du sørge for å sette nettverket til `Mainnet`.

4. Merk at veiledningen for systemkonfigurasjoner (seksjon 3.2.2) på Mac OS X er ganske innviklede og kan virke noe kronglete. tficharmers har opprettet en guide [her](https://monero.stackexchange.com/questions/8438/how-do-i-make-my-macos-detect-my-ledger-nano-s-when-plugged-in) som du kan bruke som hjelp.

5. Ledgeren din må plugges inn, og Ledger Monero-appen må være i gang.

6. Enten din daemon (`monerod`) bør kjøre og helst være helt synkronisert, eller så må du koble til en ekstern node.

Nå som vi er ordentlig forberedt, la oss sette i gang!

1. Bruk Finder til å finne hvor katalogen/mappen `monero-wallet-cli` (CLI v0.12.2.0) ligger.

2. Gå til skrivebordet ditt.

3. Åpne en terminal (hvis du ikke vet hvordan man åpner terminalen, kan du se [her](https://apple.stackexchange.com/a/256263)).

4. Dra `monero-wallet-cli` inn i terminalen. Det bør legge hele stien til terminalen. Ikke trykk på Enter.

5. Nå kan du taste inn:

`--generate-from-device <new-wallet-name> --subaddress-lookahead 3:200`

Merk at dette er en plassholder for det faktiske lommeboknavnet. Hvis du for eksempel vil kalle lommeboken din for `MoneroWallet`, er kommandoen som følger:

`--generate-from-device MoneroWallet --subaddress-lookahead 3:200`

Merk at den ovennevnte teksten vil føyes til stien til `monero-wallet-cli`. Før du trykker på Enter, bør terminalen din altså se slik ut:

`/full/path/to/monero-wallet-cli --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200`

Den fulle stien er den faktiske stien på din Mac OS X.

7.  CLI-en vil, etter at den ovennevnte kommandoen er utført, be deg om et passord. Sørg for å velge et sterkt passord og deretter bekrefte det.

8. Ledgeren vil be deg om hvorvidt du vil eksportere de private nøklene eller ikke. Midlene dine kan først og fremst ikke bli kompromittert med kun den private visningsnøkkelen. Å eksportere den private visningsnøkkelen gjør at klienten (Monero v0.12.2.0 på PC-en) kan skanne etter blokker og se etter transaksjoner som tilhører lommeboken/adressen din. Hvis dette valget ikke brukes, vil enheten (Ledgeren) skanne etter blokker, noe som går betraktelig saktere. Det er imidlertid én ting å passe seg for. Det er at dersom systemet ditt blir kompromittert, vil den uvedkommende muligens kunne kompromittere din private nøkkel i tillegg, som er ødeleggende for personvernet. Dette er praktisk talt umulig når den private visningsnøkkelen ikke eksporteres.

9. Du må muligens trykke på «Confirm» (Bekreft) to ganger før du kan fortsette.

10. Ledger Monero-lommeboken din vil nå genereres. Merk at dette kan ta opptil 5–10 minutter. Videre vil det ikke komme en umiddelbar tilbakemelding, verken på CLI-en eller Ledgeren.

11. `monero-wallet-cli` vil oppdateres. Vent til den er ferdig med å oppdatere.

12. Gratulerer. Du kan nå bruke Ledger Monero-lommeboken din sammen med CLI-en.

### 3. Linux
Vi må først sørge for at vi er tilstrekkelig forberedt. Dette innebærer følgende:

1. Denne veiledningen antar at du allerede har initialisert Ledger-lommeboken din og således generert et mnemonisk frø på 24 ord.

2. Du må kjøre/bruke CLI v0.12.2.0, som du kan finne <a href="{{site.baseurl}}/downloads/">her</a>.

3. Du må installere Ledger Monero-appen og konfigurere systemet ditt. Veiledninger til dette kan du finne [her](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (spesielt seksjonene 3.1.1 og 3.2.1). I tillegg må du sørge for å sette nettverket til `Mainnet`.

4. Ledgeren din må plugges inn, og Ledger Monero-appen bør være i gang.

5. Enten din daemon (`monerod`) bør kjøre og helst være helt synkronisert, eller så må du koble til en ekstern node.

Nå som vi er tilstrekkelig forberedt, la oss sette i gang!

1. Gå til katalogen/mappen der monero-wallet-cli og monerod ligger.

2. Åpne en ny terminal

3. Tast inn:

`./monero-wallet-cli --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200`

Merk at dette er en plassholder for det faktiske lommeboknavnet. Hvis du for eksempel vil kalle lommeboken din for `MoneroWallet`, er kommandoen som følger:

`./monero-wallet-cli --generate-from-device MoneroWallet --subaddress-lookahead 3:200`

4. CLI-en vil, etter at den ovennevnte kommandoen er eksekvert, be deg om et passord. Sørg for å velge et sterkt passord og deretter bekrefte det.

5. Ledgeren vil be deg om hvorvidt du vil eksportere de private nøklene eller ikke. Midlene dine kan først og fremst ikke bli kompromittert med kun den private visningsnøkkelen. Å eksportere den private visningsnøkkelen gjør at klienten (Monero v0.12.2.0 på PC-en) kan skanne etter blokker og se etter transaksjoner som tilhører lommeboken/adressen din. Hvis dette valget ikke brukes, vil enheten (Ledgeren) skanne etter blokker, noe som går betraktelig saktere. Det er imidlertid én ting å passe seg for. Det er at dersom systemet ditt blir kompromittert, vil den uvedkommende muligens kunne kompromittere din private nøkkel i tillegg, som er ødeleggende for personvern. Dette er praktisk talt umulig når den private visningsnøkkelen ikke eksporteres.

6. Du må muligens trykke på «Confirm» (Bekreft) to ganger før du kan fortsette.

7. Ledger Monero-lommeboken din vil nå genereres. Merk at dette kan ta opptil 5–10 minutter. Videre vil det ikke komme en umiddelbar tilbakemelding, verken på CLI-en eller Ledgeren.

8. `monero-wallet-cli` vil oppdateres. Vent til den er ferdig med å oppdatere.

Gratulerer. Du kan nå bruke Ledger Monero-lommeboken din sammen med CLI-en.

### 4. Noen sluttmerknader

1. Vi anbefaler på det sterkeste å først teste ut prosessen – med andre ord å først sende et lite beløp til lommeboken og deretter gjenopprette den (ved å bruke den ovennevnte veiledningen) for å bekrefte at du kan gjenopprette lommeboken. Merk at ved oppretting/gjenoppretting av lommeboken, bør du tilføye `--restore-height`-flagget (med blokkhøyden før høyden til den første transaksjonen til lommeboken din) til kommandoen i steg 3 (Windows), steg 5 (Mac OS X), eller steg 3 (Linux). Mer informasjon om gjenoppretting av høyde og hvordan å tilnærme det, kan du finne [her](https://monero.stackexchange.com/questions/7581/what-is-the-relevance-of-the-restore-height).

2. Hvis du bruker en ekstern node, kan du tilføye `--daemon-address host:port`-flagget til kommandoen i steg 3 (Windows), steg 5 (Mac OS X), eller steg 3 (Linux).

3. Hvis ønskelig, kan du manuelt justere `--subaddress-lookahead`-verdien. Den første verdien er antallet kontoer, og den andre verdien er antall underadresser per konto. Hvis du for eksempel vil forhåndsgenerere fem kontoer med 100 underadresse hver, kan du bruke `--subaddress-lookahead 5:100`. Husk at jo flere underadresser du genererer, jo lengre tar det for Ledgeren å opprette lommeboken din.

4. Du trenger bare å bruke `--generate-from-device`-flagget én gang (altså når du oppretter lommeboken). Deretter bruker du den i bunn og grunn som du vanligvis bruker CLI-en. Det innebærer å:
   1. Sørge for at Ledgeren din er plugget i og at Monero-appen er i gang.
   2. Åpne `monero-wallet-cli`.
   3. Legg inn lommeboknavnet til Ledger Monero-lommeboken din.
   4. Legge inn passordet for å åpne lommeboken.

   Dersom lommebokfilene til Ledgeren ikke befinner seg i samme katalog som `monero-wallet-cli`, bør du åpne `monero-wallet-cli` med `--wallet-file /path/to/wallet.keys/file`-flagget. Alternativt kan du kopiere Ledger-lommebokfilene til samme katalog som `monero-wallet-cli`.

5. Hvis du har flere spørsmål eller trenger hjelp, kan du legge igjen en kommentar på det opprinnelige [StackExchange](https://monero.stackexchange.com/questions/8503/how-do-i-generate-a-ledger-monero-wallet-with-the-cli-monero-wallet-cli)-svaret.

Forfatter: dEBRUYNE
Sekundærforfatter: el00ruobuob
