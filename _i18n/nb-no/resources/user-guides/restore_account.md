{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Operativsystemer:  Windows, Linux, Mac

- Hent frem ditt @mnemoniske frø på 25 ord som du lagret da du opprettet din gamle Monero-@lommebok

### Kontoprogramvare:  monero-wallet-cli

- Åpne en ledetekst og naviger til disken og katalogen som inneholder monero-wallet-cli

- I ledeteksten taster du inn: `monero-wallet-cli --restore-deterministic-wallet`

- Når du trykker på enter, blir du bedt om et lommebokfilnavn. Gi lommeboken ditt et navn – et hvilket som helst navn holder

- Trykk på enter igjen, så blir du bedt om et passord. Gi lommeboken din et nytt og langt passord

- Trykk på enter igjen, så blir du bedt om å gjenta passordet

- Trykk på enter igjen, så blir du bedt om å legge inn det mnemoniske electrum-frøet på 25 ord som du fant fram tidligere

-  Du blir deretter tilskyndet med «Gjenopprett fra en spesifikk blokkjedehøyde (valgfritt, standard 0):» Standard-valget starter gjenopprettingsprosessen fra begynnelsen av Monero-blokkjeden. Hvis du ikke kjenner til den spesifikke blokkjedehøyden, trykker du bare på enter. (Å spesifisere en spesifikk blokkjedehøyde starter gjenopprettingsprosessen fra den spesifikke høyden. Hvis du vet ved hvilken blokkjedehøyde midlene dine har gjennomgått en transaksjon, sparer dette litt tid hva gjelder skanning.)

Etter du har tastet inn det mnemoniske frøet på 25 ord og har spesifisert blokkjedehøyden din, vil monero-wallet-cli generere den samme offentlige adressen og visningsnøkkelen som din gamle lommebok og begynne oppdateringsprosessen automatisk. (Vennligst vær tålmodig i og med at oppdateringsprosessen kan ta en stund.)

### Kontoprogramvare:  monero-wallet-gui

Start `monero-wallet-gui`. Hvis dette er første gang du har startet den, kan du gå til neste trinn. Ellers kan du trykke på `Avbryt`:

![cancel opening](/img/resources/user-guides/en/restore_account/cancel-opening.png)

Velg språket ditt (`Norsk`):

![choose language](/img/resources/user-guides/en/restore_account/choose-language.png)

Trykk på `Gjenopprett lommeboken fra nøkler eller mnemoniske frø`:

![choose restore](/img/resources/user-guides/en/restore_account/choose-restore.png)

Huk av `Gjenopprett fra nøkler`, gi lommeboken din et navn og lagringssted, og fullfør `Skriv inn ditt mnemoniske frø på 25 (eller 24) ord`. Alternativt kan du angi en `Gjenopprettingshøyde (valgfritt)` for å unngå skanning av de eldste blokkene. Deretter trykker du på `Høyre`-piltasten:

![restore wallet](/img/resources/user-guides/en/restore_account/restore-wallet.png)

På neste side kan du gi lommeboken din et sterkt passord og bekrefte det før du trykker på `Høyre`-piltasten:

![wallet password](/img/resources/user-guides/en/restore_account/wallet-password.png)

Spesifiser dine @daemon-innstillinger og trykk på `Høyre`-piltasten:

![daemon settings](/img/resources/user-guides/en/restore_account/daemon-settings.png)

Trykk på `BRUK MONERO` for å glede deg over din gjenopprettede lommebok:

![all set up](/img/resources/user-guides/en/restore_account/all-set-up.png)
