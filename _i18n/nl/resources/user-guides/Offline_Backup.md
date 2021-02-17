{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Besturingssystemen:  diverse Linux-versies en Windows 7/8

### Portemonneesoftware  Simplewallet

### Tool voor het maken van opstartbare schijven:  [Linux](http://www.pendrivelinux.com/),       [Windows](https://www.microsoft.com/en-us/download/windows-usb-dvd-download-tool)

### Monero-binaries downloaden:  [Binaire bestanden voor Monero]({{ site.baseurl }}/downloads/)

- Gebruik een willekeurige computer, desnoods de computer waar je normaal op werkt. Als je extra voorzichtig bent, is het handig om een oudere computer te gebruiken zonder wifi of bluetooth.

- Maak een opstartbare schijf voor Linux of Windows, en zet de Monero-binaries op dezelfde schijf of een tweede schrijf. (Maak voor Linux ook kopieën van de gedownloade afhankelijkheden die je nodig hebt, bijvoorbeeld libboost1.55 en miniupnpc.)

- Maak de netwerk-/internetkabels los van de computer, haal de wifi-kaart eruit of schakel de wifi en bluetooth uit op een laptop, voor zover dat mogelijk is.

- Start op met het besturingssysteem op de schijf en installeer eventueel de afhankelijkheden.

- Kopieer de Monero-binaries naar een RAM-schijf (/dev/shm in Linux, in Windows meestal een station Z: of zoiets op een opstartbare ISO).

- Voer de Monero-daemon niet uit. Gebruik in plaats daarvan monero-wallet-cli in een opdrachtregelvenster om een nieuw Monero-@account aan te maken.

- Geef een naam uit wanneer daarom gevraagd wordt. Het maakt niet uit wat voor naam.

- Typ 50 tot 100 willekeurige tekens wanneer om een wachtwoord wordt gevraagd. Maak je geen zorgen, je hoeft het wachtwoord niet te onthouden, als het maar LANG is.

- **ONMISBARE STAP**: Schrijf je hersteltekst (@mnemonic-seed) van 25 woorden op (op papier).  
**LET OP**:  Als je vergeet deze gegevens op te schrijven, kun je je geld voor altijd kwijtraken.

- Noteer je adres en je alleen-lezen sleutel (op je telefoon, op papier, op een andere computer, of waar je maar wilt).

- Schakel de computer uit, haal de accu eruit als die erin zit, en laat de computer een paar uur zonder stroom uit staan.

Je nieuwe account is in RAM gemaakt en de digitale bestanden zijn nu verdwenen. Zelfs een aanvaller die op een of andere manier deze gegevens zou krijgen, zou het lange wachtwoord missen om de portemonnee te openen. Voor het ontvangen van betalingen heb je je openbare adres, en je alleen-lezen sleutel om ze te bekijken. Voor toegang tot je portemonnee heb je je hersteltekst (@mnemonic-seed) van 25 woorden. Je kunt nu meerdere exemplaren hiervan opschrijven, waaronder een om elders te bewaren (bijvoorbeeld in een bankkluis).

Gerelateerd:  [Offline account-generator](http://moneroaddress.org/)
