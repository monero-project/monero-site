{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Inhoud

* [1. Windows](#1-windows)
* [2. MacOS](#2-macos)
* [3. Linux](#3-linux)
* [4. Ten slotte](#4-ten-slotte)

### 1. Windows

Eerst moeten we ons voldoende voorbereiden. Daar is het volgende voor nodig:

1. We gaan ervan uit dat je je Ledger al hebt geïnitialiseerd en dus een hersteltekst van 24 woorden hebt gegenereerd.

2. Je moet versie CLI v0.12.2.0 of hoger van de opdrachtregel-interface (CLI) gebruiken. Die vind je <a href="{{site.baseurl}}/downloads/">hier</a>.

3. Je moet de Monero-app voor de Ledger installeren en je systeem configureren. Instructies vind je [hier](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (met name de paragrafen 3.1.1 en 3.2.3). Zorg er verder voor dat het netwerk is ingesteld op `Mainnet`.

4. Je Ledger moet zijn aangesloten en de Monero-app voor de Ledger moet worden uitgevoerd.

5. De daemon (`monerod.exe`) moet worden uitgevoerd en liefst volledig gesynchroniseerd zijn - of je maakt verbinding met een externe node.

Nu we ons voldoende hebben voorbereid, kunnen we beginnen.

1. Ga naar de directory/map waar monerod.exe en monero-wallet-cli.exe staan.

2. Open een nieuw venster voor de opdrachtregel/PowerShell. Dit doe je door met de rechtermuisknop in het venster te klikken, maar niet op een bestand, terwijl je de SHIFT-toets ingedrukt houdt. Dan krijg je de optie "Opdrachtvenster hier openen" in het contextmenu. Als je de nieuwste versie van Windows 10 gebruikt, krijg je de optie "Powershell-venster hier openen" te zien.

3. Typ nu het volgende:

`monero-wallet-cli.exe --generate-from-device <nieuwe-portemonnee> --subaddress-lookahead 3:200` (Win 7 + 8)

`.\monero-wallet-cli.exe --generate-from-device <nieuwe-portemonnee> --subaddress-lookahead 3:200` (Win 10)

De tekst tussen punthaken staat voor de naam die je aan de portemonnee geeft. Dus als je de portemonnee bijvoorbeeld `MoneroPortemonnee` noemt, ziet opdracht er als volgt uit:

`monero-wallet-cli.exe --generate-from-device MoneroPortemonnee --subaddress-lookahead 3:200` (Win 7 + 8)

`.\monero-wallet-cli.exe --generate-from-device MoneroPortemonnee --subaddress-lookahead 3:200` (Win 10)

4. Nadat je deze opdracht hebt uitgevoerd, wordt je gevraagd een wachtwoord in te voeren. Zorg dat je een sterk wachtwoord kiest en bevestig het nog een keer.

5. Vervolgens vraagt de Ledger of je de privésleutel wilt exporteren of niet. Allereerst: je geld kan niet worden ontvreemd met alleen de alleen-lezen privésleutel. Als je de alleen-lezen privésleutel exporteert, kan de client (op de computer - Monero v0.12.2.0) blokken doorzoeken om transacties te vinden die bij jouw portemonnee/adres horen. Als je deze optie niet inschakelt, zal de Ledger zelf in blokken zoeken. Dat werkt beduidend langzamer. Hier moeten we wel één waarschuwing bij geven. Als je systeem wordt gehackt, zou de aanvaller ook toegang kunnen krijgen tot je alleen-lezen privésleutel. Dat zou schadelijk voor je privacy zijn. Dit is praktisch onmogelijk als je de alleen-lezen privésleutel niet exporteert.

6. Mogelijk moet je twee keer op Bevestigen klikken om verder te gaan.

7. Nu wordt je Monero-portemonnee voor de Ledger gegenereerd. Dit kan 5 tot 10 minuten duren. Hierbij krijg je niet direct feedback in de CLI of op de Ledger.

8. `monero-wallet-cli` begint te vernieuwen. Wacht totdat het klaar is met vernieuwen.

Gefeliciteerd! Nu kun je je Monero-portemonnee voor de Ledger samen met de CLI gebruiken.

### 2. MacOS
Eerst moeten we ons voldoende voorbereiden. Daar is het volgende voor nodig:

1. We gaan ervan uit dat je je Ledger al hebt geïnitialiseerd en dus een hersteltekst van 24 woorden hebt gegenereerd.

2. Je moet versie CLI v0.12.2.0 of hoger van de opdrachtregel-interface (CLI) gebruiken. Die vind je <a href="{{site.baseurl}}/downloads/">hier</a>.

3. Je moet de Monero-app voor de Ledger installeren en je systeem configureren. Instructies vind je [hier](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (met name de paragrafen 3.1.1 en 3.2.2). Zorg er verder voor dat het netwerk is ingesteld op `Mainnet`.

4. De instructies voor het configureren van het systeem (paragraaf 3.2.2) op macOS zijn nogal uitgebreid - misschien ingewikkelder dan nodig is. Gelukkig kun je ook [de handleiding](https://monero.stackexchange.com/questions/8438/how-do-i-make-my-macos-detect-my-ledger-nano-s-when-plugged-in) van tficharmers raadplegen.

5. Je Ledger moet zijn aangesloten en de Monero-app voor de Ledger moet worden uitgevoerd.

6. De daemon (`monerod`) moet worden uitgevoerd en liefst volledig gesynchroniseerd zijn - of je maakt verbinding met een externe node.

Nu we ons voldoende hebben voorbereid, kunnen we beginnen.

1. Gebruik Finder om naar de directory/map te gaan waar `monero-wallet-cli` (CLI v0.12.2.0) staat.

2. Ga naar je bureaublad.

3. Open een nieuwe terminal (kijk [hier](https://apple.stackexchange.com/a/256263) als je niet weet hoe je een terminal opent).

4. Sleep `monero-wallet-cli` naar de terminal. Als het goed is, wordt het volledige pad nu in de terminal weergegeven. Druk niet op Enter.

5. Typ nu het volgende:

`--generate-from-device <nieuwe-portemonnee> --subaddress-lookahead 3:200`

De tekst tussen punthaken staat voor de naam die je aan de portemonnee geeft. Dus als je de portemonnee bijvoorbeeld `MoneroPortemonnee` noemt, ziet opdracht er als volgt uit:

`--generate-from-device MoneroPortemonnee --subaddress-lookahead 3:200`

De bovenstaande tekst wordt toegevoegd aan het pad van `monero-wallet-cli`. Dus je terminal moet er als volgt uitzien voordat je op Enter drukt:

`/volledig/pad/naar/monero-wallet-cli --generate-from-device <nieuwe-portemonnee> --subaddress-lookahead 3:200`

Daarbij is het volledige pad uiteraard het werkelijke pad op je Mac.

7. Nadat je deze opdracht hebt uitgevoerd, wordt je gevraagd een wachtwoord in te voeren. Zorg dat je een sterk wachtwoord kiest en bevestig het nog een keer.

8. Vervolgens vraagt de Ledger of je de privésleutel wilt exporteren of niet. Allereerst: je geld kan niet worden ontvreemd met alleen de alleen-lezen privésleutel. Als je de alleen-lezen privésleutel exporteert, kan de client (op de computer - Monero v0.12.2.0) blokken doorzoeken om transacties te vinden die bij jouw portemonnee/adres horen. Als je deze optie niet inschakelt, zal de Ledger zelf in blokken zoeken. Dat werkt beduidend langzamer. Hier moeten we wel één waarschuwing bij geven. Als je systeem wordt gehackt, zou de aanvaller ook toegang kunnen krijgen tot je alleen-lezen privésleutel. Dat zou schadelijk voor je privacy zijn. Dit is praktisch onmogelijk als je de alleen-lezen privésleutel niet exporteert.

9. Mogelijk moet je twee keer op Bevestigen klikken om verder te gaan.

10. Nu wordt je Monero-portemonnee voor de Ledger gegenereerd. Dit kan 5 tot 10 minuten duren. Hierbij krijg je niet direct feedback in de CLI of op de Ledger.

11. `monero-wallet-cli` begint te vernieuwen. Wacht totdat het klaar is met vernieuwen.

12. Gefeliciteerd! Nu kun je je Monero-portemonnee voor de Ledger samen met de CLI gebruiken.

### 3. Linux
Eerst moeten we ons voldoende voorbereiden. Daar is het volgende voor nodig:

1. We gaan ervan uit dat je je Ledger al hebt geïnitialiseerd en dus een hersteltekst van 24 woorden hebt gegenereerd.

2. Je moet versie CLI v0.12.2.0 of hoger van de opdrachtregel-interface (CLI) gebruiken. Die vind je <a href="{{site.baseurl}}/downloads/">hier</a>.

3. Je moet de Monero-app voor de Ledger installeren en je systeem configureren. Instructies vind je [hier](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (met name de paragrafen 3.1.1 en 3.2.1). Zorg er verder voor dat het netwerk is ingesteld op `Mainnet`.

4. Je Ledger moet zijn aangesloten en de Monero-app voor de Ledger moet worden uitgevoerd.

5. De daemon (`monerod`) moet worden uitgevoerd en liefst volledig gesynchroniseerd zijn - of je maakt verbinding met een externe node.

Nu we ons voldoende hebben voorbereid, kunnen we beginnen.

1. Ga naar de directory/map waar monero-wallet-cli en monerod staan.

2. Open een nieuwe terminal.

3. Typ nu het volgende:

`./monero-wallet-cli --generate-from-device <nieuwe-portemonnee> --subaddress-lookahead 3:200`

De tekst tussen punthaken staat voor de naam die je aan de portemonnee geeft. Dus als je de portemonnee bijvoorbeeld `MoneroPortemonnee` noemt, ziet opdracht er als volgt uit:

`./monero-wallet-cli --generate-from-device MoneroPortemonnee --subaddress-lookahead 3:200`

4. Nadat je deze opdracht hebt uitgevoerd, wordt je gevraagd een wachtwoord in te voeren. Zorg dat je een sterk wachtwoord kiest en bevestig het nog een keer.

5. Vervolgens vraagt de Ledger of je de privésleutel wilt exporteren of niet. Allereerst: je geld kan niet worden ontvreemd met alleen de alleen-lezen privésleutel. Als je de alleen-lezen privésleutel exporteert, kan de client (op de computer - Monero v0.12.2.0) blokken doorzoeken om transacties te vinden die bij jouw portemonnee/adres horen. Als je deze optie niet inschakelt, zal de Ledger zelf in blokken zoeken. Dat werkt beduidend langzamer. Hier moeten we wel één waarschuwing bij geven. Als je systeem wordt gehackt, zou de aanvaller ook toegang kunnen krijgen tot je alleen-lezen privésleutel. Dat zou schadelijk voor je privacy zijn. Dit is praktisch onmogelijk als je de alleen-lezen privésleutel niet exporteert.

6. Mogelijk moet je twee keer op Bevestigen klikken om verder te gaan.

7. Nu wordt je Monero-portemonnee voor de Ledger gegenereerd. Dit kan 5 tot 10 minuten duren. Hierbij krijg je niet direct feedback in de CLI of op de Ledger.

8. `monero-wallet-cli` begint te vernieuwen. Wacht totdat het klaar is met vernieuwen.

Gefeliciteerd! Nu kun je je Monero-portemonnee voor de Ledger samen met de CLI gebruiken.

### 4. Ten slotte

1. We raden je dringend aan het hele proces eerst te testen. Verzend een klein bedrag naar de Ledger en herstel het vervolgens (volgens de bovengenoemde handleiding) om te controleren of je de portemonnee kunt herstellen. Opmerking: bij het herstellen van de portemonnee moet je de parameter `--restore-height` (met een bloknummer vóór de hoogte van je eerste transactie naar de portemonnee) toevoegen aan de opdracht in stap 3 (Windows), stap 5 (macOS) of stap 3 (Linux). Meer informatie over de herstelhoogte en hoe je die kunt schatten vind je [hier](https://monero.stackexchange.com/questions/7581/what-is-the-relevance-of-the-restore-height).

2. Als je een externe node gebruikt, voeg je de parameter `--daemon-address host:port` toe aan de opdracht in stap 3 (Windows), stap 5 (macOS) of stap 3 (Linux).

3. Eventueel kun je de waarde voor `--subaddress-lookahead` handmatig afstellen. De eerste waarde is het aantal accounts en de tweede waarde is het aantal subadressen per account. Dus als je bijvoorbeeld 5 accounts met 100 subadressen vooraf wilt genereren, geef je `--subaddress-lookahead 5:100` op. Houd er rekening mee dat de Ledger er langer over doet om je portemonnee te maken naarmate je meer subadressen vooraf laat genereren.

4. Je hoeft de parameter `--generate-from-device` maar één keer te gebruiken (bij het aanmaken van een portemonnee). Daarna gebruik je de portemonnee net zoals je de CLI normaal zou gebruiken. Dat wil zeggen:
   1. Zorg dat je Ledger is aangesloten en dat de Monero-app wordt uitgevoerd.
   2. Open `monero-wallet-cli`.
   3. Voer de naam van je Monero-portemonnee voor de Ledger in.
   4. Voer het wachtwoord in om de portemonnee te openen.

   Als de portemonneebestanden op de Ledger niet in dezelfde directory staan als `monero-wallet-cli`, moet je `monero-wallet-cli` openen met de parameter `--wallet-file /pad/naar/bestand/portemonnee.keys`. Maar je kunt de bestanden van de Ledger-portemonnee ook kopiëren naar dezelfde directory als `monero-wallet-cli`.

5. Als je nog meer vragen hebt of hulp nodig hebt, kun je een reactie achterlaten op het oorspronkelijke [antwoord op StackExchange](https://monero.stackexchange.com/questions/8503/how-do-i-generate-a-ledger-monero-wallet-with-the-cli-monero-wallet-cli).
