{% include disclaimer.html translated="yes" translationOutdated="no" %}

Å gjenopprette en lommebok fra pivate nøkler er ganske enkelt. Hvis du har
den nødvendige informasjonen, kan du med denne guiden gjenopprette
lommeboken din fullstendig. Merk: du trenger IKKE passordet ditt for å
gjenopprette fra nøkler.

Du trenger tre stykker data fra lommeboken din eller din .keys-fil som
bevarer denne informasjonen og passordet for å avkode det. De tre
lommebokkomponentene du trenger er:

1. **Adresse**
2. **Hemmelig forbruksnøkkel**
3. **Hemmelig visningsnøkkel**


#### CLI

Kjør deretter lommebokkommandoen:

`./monero-wallet-cli --generate-from-keys New_Wallet_Name.abc`

Etter det blir du spurt om adressen, forbruksnøkkelen, visningsnøkkelen og
til slutt det nye passordet for den regenererte lommeboken.

Å kjøre denne kommandoen med de riktige parameterne vil generere
lommebokfilene dine på nytt for deg og la deg sette et nytt passord.

Hvis du møter på problemer, vil kommandoen `./monero-wallet-cli --help` vise
deg dine tilgjengelige valge ved oppstart av lommeboken. Når du er inni
lommeboken din, kan du kjøre `help`-kommandoen som vil gi deg en liste over
de tilgjengelige hjelpekommandoene i lommeboken din.

#### GUI

Start `monero-wallet-gui`. Hvis dette er første gang du har startet den, kan
du gå til neste trinn. Ellers kan du trykke på `Avbryt`:

![cancel
opening](/img/resources/user-guides/en/restore_from_keys/cancel-opening.avif)

Trykk på `Gjenopprett lommeboken fra nøkler eller mnemoniske frø`:

![choose
restore](/img/resources/user-guides/en/restore_from_keys/choose-restore.avif)

Select `Restore from keys`, give your wallet a name & storage location, and
complete the `Account address (public)`, `View key (private)` & `Spend key
(private)`. Optionally, specify a `Restore height (optional)` to avoid
scanning of oldest blocks. Then click the `Next` button:

![restore
wallet](/img/resources/user-guides/en/restore_from_keys/restore-wallet.avif)

On the next page, give your wallet a strong password and confirm it before
clicking the `Next` button:

![wallet
password](/img/resources/user-guides/en/restore_from_keys/wallet-password.avif)

Specify your daemon settings and click the `Next` button:

![daemon
settings](/img/resources/user-guides/en/restore_from_keys/daemon-settings.avif)

Click on `Create wallet` to complete the restoration process:

![all set
up](/img/resources/user-guides/en/restore_from_keys/all-set-up.avif)
