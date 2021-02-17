{% include disclaimer.html translated="yes" translationOutdated="no" %}

Je kunt een portemonnee makkelijk herstellen met je privésleutels. Als je de benodigde gegevens hebt, kun je met deze handleiding je portemonnee volledig herstellen. Je hebt je wachtwoord NIET nodig voor herstellen met sleutels.

Wat je nodig hebt zijn ofwel 3 gegevens uit je portemonnee, ofwel het bestand met de extensie .keys waarin deze gegevens staan, plus het wachtwoord waarmee dit bestand is versleuteld. Je hebt deze 3 onderdelen van je portemonnee nodig:

1. **Adres**
2. **Geheime bestedingssleutel**
3. **Geheime alleen-lezen sleutel**


#### Opdrachtregel

Voer vervolgens deze opdracht uit:

`./monero-wallet-cli --generate-from-keys Nieuwe_Portemonnee.abc`

Vervolgens wordt er gevraagd gegevens in te voeren: het adres, de bestedingssleutel, de alleen-lezen sleutel en het nieuwe wachtwoord voor de opnieuw gegenereerde portemonnee.

Als je dit uitvoert met de juiste parameters, worden je portemonneebestanden opnieuw voor je gegenereerd en kun je een nieuw wachtwoord instellen.

Als je problemen tegenkomt, kun je `./monero-wallet-cli --help` uitvoeren om te zien welke opties beschikbaar zijn bij het starten van een portemonnee. Nadat je de portemonnee hebt geopend, kun je de opdracht `help` uitvoeren om de opdrachten weer te geven die beschikbaar zijn in de portemonnee.

#### Grafische interface

Start `monero-wallet-gui`. Als dit de eerste keer is dat je het start, ga dan naar de volgende stap. Zo niet, klik dan op `Annuleren`:

![openen annuleren](/img/resources/user-guides/en/restore_from_keys/cancel-opening.png)

Selecteer de gewenste taal `Nederlands`:

![taal kiezen](/img/resources/user-guides/en/restore_from_keys/choose-language.png)

Klik op `Een portemonnee herstellen met uw hersteltekst of sleutels`:

![herstellen kiezen](/img/resources/user-guides/en/restore_from_keys/choose-restore.png)

Selecteer `Herstel met sleutels`, geef een name en opslaglocatie op voor de portemonnee en vul de velden `Adres van account (openbaar)`, `Alleen-lezen sleutel (privé)` en `Bestedingssleutel (privé)` in. Eventueel kun je een `Herstelpunt (optioneel)` opgeven, zodat er niet hoeft te worden gezocht in oudere blokken. Klik vervolgens op de pijl naar rechts:

![portemonnee herstellen](/img/resources/user-guides/en/restore_from_keys/restore-wallet.png)

Geef je portemonnee op de volgende pagina een sterk wachtwoord en bevestig dit voordat je op de pijl naar rechts klikt:

![wachtwoord portemonnee](/img/resources/user-guides/en/restore_from_keys/wallet-password.png)

Geef de instellingen voor je node op en klik op de pijl naar rechts:

![instellingen node](/img/resources/user-guides/en/restore_from_keys/daemon-settings.png)

Klik op `GEBRUIK MONERO` om je herstelde portemonnee te gebruiken:

![klaar is kees](/img/resources/user-guides/en/restore_from_keys/all-set-up.png)
