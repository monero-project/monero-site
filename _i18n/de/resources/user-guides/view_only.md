{% include disclaimer.html translated="yes" translationOutdated="no" %}

Ein View-Only-Wallet ist eine spezielle Form des Wallets, die ausschließlich eingehende Transaktionen einsehen kann. Da es weder deinen mnemonischen Seed noch deinen privaten Spend-Key enthält, kann es keine Transaktionen signieren und keine ausgehenden Transaktionen einsehen. Diese Eigenschaften machen es besonders nützlich für:

* die Überprüfung von auf Cold-Wallets oder Hardware-Wallets eingehenden Transaktionen
* das Beobachten eingehender Spenden für eine Fundraising-Kampagne
* Entwickler beim Erstellen von Programmbibliotheken zum Validieren von Zahlungen

View-Only-Wallets können keine Transaktionen signieren und damit auch kein Guthaben eigenständig ausgeben. Sie können jedoch in den Prozess des Offline-Signierens einer Transaktion eingebunden werden, indem unsignierte Transaktionen erstellt, später in einem Cold-Gerät offline-signiert und anschließend, als nun signierte Transaktionen, ans Netzwerk gesendet werden. 

Sollte dein Wallet ausgehende Transaktionen enthalten, wird das Guthaben nicht korrekt angezeigt werden. Um das korrekte Guthaben in einem View-Only-Wallet angezeigt zu bekommen, musst du die zugehörigen Schlüsselbilder eines jeden Outputs des Wallets importieren.

Du kannst auch ein View-Only-Wallet eines Hardware-Wallets erstellen, allerdings unterstützt ein solches weder das Offline-Signieren von Transaktionen noch den Import von Schlüsselbildern.

Um ein View-Only-Wallet zu erstellen, benötigst du entweder den Zugriff auf ein Wallet oder musst die Hauptadresse und den privaten View-Key eines Wallets kennen.

### CLI: Ein View-Only-Wallet von einem privaten View-Key erstellen

Öffne ein bestehendes Wallet und gib die Befehle `address` und `viewkey` ein, um dir die Adresse und den privaten (geheimen) View-Key des Wallets anzeigen zu lassen. Tippe zum Schließen des Wallets `exit` ein.

Als Nächstes erstellst du dein View-Only-Wallet, indem du `monero-wallet-cli --generate-from-view-key wallet-name` eingibst. Hierbei ist das letzte Argument der Dateiname deines neuen Wallets. Das Wallet fragt dich anschließend nach `Standardadresse` und `View-Key`; hier fügst du die Adresse und den privaten (geheimen) View-Key deines ursprünglichen Wallets ein. Als Letztes gibst du ein Passwort für dein neues Wallet ein und bestätigst dieses.

### GUI: Ein View-Wallet von der Datei eines bestehenden Wallets erstellen

Wenn du auf das bereits bestehende Wallet zugreifen kannst, öffne es und gehe über `Einstellungen` > `Wallet` > `View-Only-Wallet erstellen`:

![settings](/img/resources/user-guides/en/view-only/settings.png)

Die View-Only-Wallet-Datei wird innerhalb desselben Verzeichnisses und unter Verwendung deines derzeitigen Passworts erstellt.

Optional kannst du das `Erfolg`-Fenster zum Kopieren der Nachricht doppelt anklicken und anschließend auf `OK` klicken, um es zu schließen:

![Success](/img/resources/user-guides/en/view-only/Success.png)

### GUI: Ein View-Only-Wallet von einem privaten View-Key erstellen

Solltest du keinen Zugriff auf das bestehende Wallet haben, kannst du ein View-Only-Wallet erstellen, wenn du dessen Hauptadresse und privaten View-Key kennst.

Dazu klickst du im Hauptmenü auf `Stelle Wallet mit Schlüsseln oder mnemonischem Seed wieder her`:

![restore-view-only](/img/resources/user-guides/en/view-only/restore-view-only.png)

Gib einen Namen für die Datei deines View-Only-Wallets ein. Optional kannst du den Speicherort der Datei ändern.

Wähle `Mit Schlüsseln wiederherstellen` aus.

Im `Wallet-Adresse (öffentlich)`-Feld gibst du die Hauptadresse deines Wallets ein (diese beginnt mit einer 4).

Im `View-Key (privat)`-Feld gibst du den privaten View-Key deines Wallets ein.

Spare das `Spend-Key (privat)`-Feld aus.

Gib ein `Erstellungsdatum des Wallets` oder eine `Wiederherstellungshöhe` ein, sofern du eine dieser Informationen hast (optional).

Klicke auf `Weiter`, um deine View-Only-Wallet-Datei zu erstellen.