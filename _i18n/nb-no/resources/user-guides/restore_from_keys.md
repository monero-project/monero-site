{% include disclaimer.html translated="yes" translationOutdated="no" %}

Å gjenopprette en lommebok fra pivate nøkler er ganske enkelt. Hvis du har den nødvendige informasjonen, kan du med denne guiden gjenopprette lommeboken din fullstendig. Merk: du trenger IKKE passordet ditt for å gjenopprette fra nøkler.

Du trenger tre stykker data fra lommeboken din eller din .keys-fil som bevarer denne informasjonen og passordet for å avkode det. De tre lommebokkomponentene du trenger er:

1. **Adresse**
2. **Hemmelig forbruksnøkkel**
3. **Hemmelig visningsnøkkel**


#### CLI

Kjør deretter lommebokkommandoen:

`./monero-wallet-cli --generate-from-keys New_Wallet_Name.abc`

Etter det blir du spurt om adressen, forbruksnøkkelen, visningsnøkkelen og til slutt det nye passordet for den regenererte lommeboken.

Å kjøre denne kommandoen med de riktige parameterne vil generere lommebokfilene dine på nytt for deg og la deg sette et nytt passord.

Hvis du møter på problemer, vil kommandoen `./monero-wallet-cli --help` vise deg dine tilgjengelige valge ved oppstart av lommeboken. Når du er inni lommeboken din, kan du kjøre `help`-kommandoen som vil gi deg en liste over de tilgjengelige hjelpekommandoene i lommeboken din.

#### GUI

Start `monero-wallet-gui`. Hvis dette er første gang du har startet den, kan du gå til neste trinn. Ellers kan du trykke på `Avbryt`:

![cancel opening](/img/resources/user-guides/en/restore_from_keys/cancel-opening.png)

Velg språket ditt (`Norsk`):

![choose language](/img/resources/user-guides/en/restore_from_keys/choose-language.png)

Trykk på `Gjenopprett lommeboken fra nøkler eller mnemoniske frø`:

![choose restore](/img/resources/user-guides/en/restore_from_keys/choose-restore.png)

Velg `Gjenopprett fra nøkler`, gi lommeboken din et navn og lagringssted, og fullfør `Kontoadresse (offentlig)`, `Visningsnøkkel (privat)` og `Forbruksnøkkel (privat)`. Alternativt kan du angi en `Gjenopprettingshøyde (valgfritt)` for å unngå skanning av de eldste blokkene. Deretter trykker du på `Høyre`-piltasten:

![restore wallet](/img/resources/user-guides/en/restore_from_keys/restore-wallet.png)

På neste side kan du gi lommeboken din et sterkt passord og bekrefte det før du trykker på `Høyre`-piltasten:

![wallet password](/img/resources/user-guides/en/restore_from_keys/wallet-password.png)

Spesifiser dine daemon-innstillinger og trykk på `Høyre`-piltasten:

![daemon settings](/img/resources/user-guides/en/restore_from_keys/daemon-settings.png)

Trykk på `BRUK MONERO` for å glede deg over din gjenopprettede lommebok:

![all set up](/img/resources/user-guides/en/restore_from_keys/all-set-up.png)
