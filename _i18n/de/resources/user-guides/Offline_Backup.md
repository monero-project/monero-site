{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Betriebssysteme:  Verschiedene Linux-Versionen und Windows 7, 8

### Wallet-Software:  Simplewallet

#### Quelle zur Erstellung eines bootfähigen Speichermediums:  [Linux](http://www.pendrivelinux.com/),       [Windows](https://www.microsoft.com/en-us/download/windows-usb-dvd-download-tool)

#### Quelle für Monero-Software:  [Monero-Software]({{ site.baseurl }}/downloads/)

- Nimm irgendeinen Computer, der bei dir herumliegt, oder auch deinen regulären Rechner. Solltest du besonders paranoid sein, findest du es vielleicht besser, einen alten Computer ohne Bluetooth- oder WLAN-Funktion zu nutzen.

- Erstelle ein bootfähiges Linux- oder Windows-Speichermedium und stelle sicher, dass die Monero-Software auf diesem oder einem anderen Medium gespeichert ist (bei Linux solltest du sichergehen, dass du außerdem Kopien der benötigten Abhängigkeiten, wie z.B. libboost1.55 und miniupnpc, heruntergeladen hast).

- Trenne die Netzwerk- und/oder die Internetkabel von deinem Computer, entferne die WLAN-Platine oder schalte bei Möglichkeit die WLAN-/Bluetooth-Funktion eines Laptops aus.

- Fahre dein bootfähiges Betriebssystem hoch und installiere bei Bedarf die Abhängigkeiten.

- Kopiere die Monero-Software auf eine RAM-Festplatte (/dev/shm bei Linux; bootfähige Windows-ISOs haben in der Regel ein "Z:"-Laufwerk oder Ähnliches).

- Betreibe keinen Monero-Hintergrunddienst. Stattdessen kannst du durch die Befehlszeile mit dem Befehl "monero-wallet-cli" ein neues Monero-@Konto erstellen.

- Wenn nach einem Namen gefragt wird, kannst du einfach irgendeinen eingeben. Der gewählte Name spielt keine große Rolle.

- Wenn nach einem Passwort gefragt wird, tippe etwa 50 bis 100 zufällige Charakter ein. Wenn du dir das Passwort nicht merken kannst, keine Sorge - es soll einfach nur LANG sein.

- **DER ENTSCHEIDENDE SCHRITT**:  Schreibe deinen 25 Wörter umfassenden @mnemonischen-Seed (auf Papier) nieder.
**WARNUNG**:  Solltest du vergessen, diese Information aufzuschreiben, könnten deine Gelder für immer verloren gehen.

- Schreibe deine Adresse und deinen View-Key (auf deinem Telefon, auf Papier, einem anderen Rechner - wo auch immer du möchtest) nieder.

- Schalte den Computer aus, wenn es eine Batterie gibt, entferne diese bei Möglichkeit, und lasse deinen Rechner für einige Stunden ausgeschaltet.

Das Konto, das du erstellt hast, wurde im RAM erstellt. Die digitalen Dateien sind jetzt nicht abrufbar. Sollte ein Angreifer es irgendwie schaffen, an diese Daten zu gelangen, fehlt ihm immer noch das lange Passwort, um es öffnen zu können. Wenn du Zahlungen erhalten möchtest, hast du deine öffentliche Adresse und bei Bedarf deinen View-Key. Wenn du auf dein Konto zugreifen willst, hast du deinen 25 Wörter umfassenden @mnemonischen-Seed, von welchem du nun mehrere Kopien (einschließlich einer in bspw. einem Bankschließfach hinterlegten analogen Kopie) anfertigen kannst. 

Siehe auch: [Offline Konto-Generator](http://moneroaddress.org/)
