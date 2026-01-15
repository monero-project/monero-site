{% include disclaimer.html translated="yes" translationOutdated="no" %}

Je kunt een portemonnee makkelijk herstellen met je privésleutels. Als je de
benodigde gegevens hebt, kun je met deze handleiding je portemonnee volledig
herstellen. Je hebt je wachtwoord NIET nodig voor herstellen met sleutels.

Wat je nodig hebt zijn ofwel 3 gegevens uit je portemonnee, ofwel het
bestand met de extensie .keys waarin deze gegevens staan, plus het
wachtwoord waarmee dit bestand is versleuteld. Je hebt deze 3 onderdelen van
je portemonnee nodig:

1. **Adres**
2. **Geheime bestedingssleutel**
3. **Geheime alleen-lezen sleutel**


#### CLI

Voer vervolgens deze opdracht uit:

`./monero-wallet-cli --generate-from-keys Nieuwe_Portemonnee.abc`

Vervolgens wordt er gevraagd gegevens in te voeren: het adres, de
bestedingssleutel, de alleen-lezen sleutel en het nieuwe wachtwoord voor de
opnieuw gegenereerde portemonnee.

Als je dit uitvoert met de juiste parameters, worden je portemonneebestanden
opnieuw voor je gegenereerd en kun je een nieuw wachtwoord instellen.

Als je problemen tegenkomt, kun je `./monero-wallet-cli --help` uitvoeren om
te zien welke opties beschikbaar zijn bij het starten van een
portemonnee. Nadat je de portemonnee hebt geopend, kun je de opdracht `help`
uitvoeren om de opdrachten weer te geven die beschikbaar zijn in de
portemonnee.

#### GUI

Start `monero-wallet-gui`. Als dit de eerste keer is dat je het start, ga
dan naar de volgende stap. Zo niet, klik dan op `Annuleren`:

![cancel
opening](/img/resources/user-guides/en/restore_from_keys/cancel-opening.avif)

Klik op `Een portemonnee herstellen met uw hersteltekst of sleutels`:

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
