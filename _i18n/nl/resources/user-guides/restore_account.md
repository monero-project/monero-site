{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Besturingssystemen:  Windows, Linux, Mac

- Neem je hersteltekst (zie @mnemonic-seed) erbij die je hebt opgeslagen bij het maken van je oude Monero-portemonnee (zie @wallet).

### Software:  monero-wallet-cli

- Open een opdrachtregel en ga naar het station en de directory waar monero-wallet-cli staat

- Typ het volgende op de opdrachtregel:  `monero-wallet-cli --restore-deterministic-wallet`

- Nadat je op Enter hebt gedrukt, wordt er gevraagd een bestandsnaam voor je portemonnee op te geven.  Geef je portemonnee een nieuwe naam. Het maakt niet uit welke naam.

- Druk opnieuw op Enter. Er wordt gevraagd naar een wachtwoord.  Geef je portemonnee een nieuw, lang wachtwoord.

- Druk opnieuw op Enter. Er wordt gevraagd het wachtwoord te herhalen.

- Druk opnieuw op Enter. Je wordt gevraagd de hersteltekst van 25 woorden die je eerder hebt opgezocht in te voeren.

- Vervolgens wordt er gevraagd of je een herstelpunt wilt opgeven: "Restore from specific blockchain height (optional, default 0):" Het herstelproces begint standaard bij het begin van de Monero-blockchain. Als je geen specifieke hoogte van de blockchain weet, druk je gewoon op Enter. (Als je een herstelpunt opgeeft, wordt het herstelproces gestart vanaf die specifieke hoogte. Hiermee bespaar je tijd bij het opzoeken, als je weet op welke hoogte van de blockchain er voor het eerst geld is overgemaakt naar dit specifieke account.)

Nadat je de hersteltekst van 25 woorden hebt ingevoerd en een specifieke hoogte van de blockchain hebt opgegeven, wordt het openbare adres van je oude portemonnee gegenereerd en begint het vernieuwingsproces automatisch. (Even geduld alsjeblieft, want het vernieuwen kan een tijdje duren.)

### Software:  monero-wallet-gui

Start `monero-wallet-gui`. Als dit de eerste keer is dat je het start, ga dan naar de volgende stap. Zo niet, klik dan op `Annuleren`:

![openen annuleren](/img/resources/user-guides/en/restore_account/cancel-opening.png)

Selecteer de gewenste taal `Nederlands`:

![taal kiezen](/img/resources/user-guides/en/restore_account/choose-language.png)

Klik op `Een portemonnee herstellen met uw hersteltekst of sleutels`:

![herstellen kiezen](/img/resources/user-guides/en/restore_account/choose-restore.png)

Zorg dat `Herstel met hersteltekst` is ingeschakeld, geef een name en opslaglocatie op voor de portemonnee en vul het veld `Voer uw hersteltekst van 25 (of 24) woorden in` in. Eventueel kun je een `Herstelpunt (optioneel)` opgeven, zodat er niet hoeft te worden gezocht in oudere blokken. Klik vervolgens op de pijl naar rechts:

![portemonnee herstellen](/img/resources/user-guides/en/restore_account/restore-wallet.png)

Geef je portemonnee op de volgende pagina een sterk wachtwoord en bevestig dit voordat je op de pijl naar rechts klikt:

![wachtwoord portemonnee](/img/resources/user-guides/en/restore_account/wallet-password.png)

Geef de instellingen voor je node op en klik op de pijl naar rechts:

![instellingen node](/img/resources/user-guides/en/restore_account/daemon-settings.png)

Klik op `GEBRUIK MONERO` om je herstelde portemonnee te gebruiken:

![klaar is kees](/img/resources/user-guides/en/restore_account/all-set-up.png)
