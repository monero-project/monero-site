{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Inhaltsverzeichnis

* [Windows](#windows)
* [Mac OS X](#mac-os-x)
* [Linux](#linux)
* [Schlussbemerkungen](#Schlussbemerkungen)

### Windows

Zunächst muss sichergestellt werden, dass wir ausreichend vorbereitet sind. Dazu gehören die folgenden Punkte:

- Diese Anleitung setzt voraus, dass du dein Ledger-Wallet bereits eröffnet und damit einen 24 Worte umfassenden mnemonischen Seed generiert hast. 

- Du musst CLI v0.12.2.0 ausführen/nutzen. Dies findest du <a href="{{site.baseurl}}/downloads/">hier</a>.

- Du musst die Ledger-App von Monero installieren und dein System einrichten. Du findest Anleitungen dazu [hier](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (speziell in den Abschnitten 3.1.1 und 3.2.3). Zusätzlich solltest du sicherstellen, dass das Netzwerk auf `Mainnet` festgelegt ist.

- Während die Ledger-App von Monero bereits läuft, muss nun dein Ledger angeschlossen werden.

- Es sollte entweder dein (vorzugsweise vollständig synchronisierter) Hintergrunddienst (`monerod.exe`) laufen oder eine Verbindung zu einem Remote-Node hergestellt werden.

Jetzt, da wir ausreichend vorbereitet sind, können wir beginnen!

- Gehe in das Verzeichnis oder in den Ordner, in welchem monerod.exe und monero-wallet-cli.exe abgespeichert sind.

- Öffne eine neue Befehlszeile oder PowerShell. Dies kannst du tun, indem du zunächst sicherstellst, dass dein Cursor nicht auf einer der Dateien liegt, und dann mit der gedrückten Umschalttaste rechtsklickst. Dir wird nun die Option "Befehlszeile hier öffnen" angezeigt. Die letzte Version von Windows 10 bietet außerdem die Option "PowerShell-Fenster hier öffnen".

- Tippe nun Folgendes ein:

`monero-wallet-cli.exe --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200` (Win 7 + 8)

`.\monero-wallet-cli.exe --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200` (Win 10)

Beachte, dass `<new-wallet-name>` schlicht der Platzhalter des tatsächlichen Namens deines Wallets ist. Wenn du dein Wallet beispielsweise `MoneroWallet` nennen möchtest, würde der Befehl folgendermaßen aussehen:

`monero-wallet-cli.exe --generate-from-device MoneroWallet --subaddress-lookahead 3:200` (Win 7 + 8)

`.\monero-wallet-cli.exe --generate-from-device MoneroWallet --subaddress-lookahead 3:200` (Win 10)

- Nachdem der vorige Befehl ausgeführt wurde, wird dich das CLI zur Passworteingabe auffordern. Stelle sicher, dass du ein starkes Passwort verwendest und dieses anschließend bestätigst.

- Der Ledger wird dich nun fragen, ob du den privaten View-Key exportieren möchtest oder nicht. Zuallererst: Dein Guthaben kann nicht mit dem privaten View-Key allein gefährdet werden. Der Export des privaten View-Keys ermöglicht es dem Client (auf dem Computer - Monero v0.12.2.0), durch Scannen von Blöcken nach etwaigen, deinem Wallet oder deiner Adresse zugehörigen Transaktionen zu suchen. Wird diese Option nicht genutzt, scannt das Gerät (Ledger) die Blöcke, was deutlich langsamer sein wird. Es gibt jedoch einen Vorbehalt: Wird dein System gefährdet, ist der Gegner möglicherweise in der Lage, auch deinen privaten View-Key und damit deine Privatsphäre zu gefährden. Wenn der private View-Key nicht exportiert wird, ist ein Schaden nahezu unmöglich.

- Eventuell musst du zweimal bestätigen, bevor fortgefahren wird.

- Die Erstellung deines Monero-Ledger-Wallets wird nun fertiggestellt. Beachte, dass dies fünf bis zehn Minuten dauern kann. Es wird außerdem keine direkte Rückmeldung, weder im CLI noch im Ledger, geben.

- `monero-wallet-cli` startet nun den Aktualisierungsvorgang. Warte, bis dieser vollständig abgeschlossen wurde.

Glückwunsch, du kannst dein Monero-Ledger-Wallet nun in Verbindung mit dem CLI verwenden!

### Mac OS X

Zunächst muss sichergestellt werden, dass wir ausreichend vorbereitet sind. Dazu gehören die folgenden Punkte:

- Diese Anleitung setzt voraus, dass du dein Ledger-Wallet bereits eröffnet und damit einen 24 Worte umfassenden mnemonischen Seed generiert hast. 

- Du musst CLI v0.12.2.0 ausführen/nutzen. Dies findest du <a href="{{site.baseurl}}/downloads/">hier</a>.

- Du musst die Ledger-App von Monero installieren und dein System einrichten. Du findest Anleitungen dazu [hier](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (speziell in den Abschnitten --1 und --2). Zusätzlich solltest du sicherstellen, dass das Netzwerk auf `Mainnet` festgelegt ist.

- Beachte, dass die Anleitungen der Systemkonfiguration (Abschnitt --2) für Mac OS X ziemlich ausführlich sind und etwas kompliziert erscheinen könnten. Glücklicherweise hat tficharmers eine [Anleitung](https://monero.stackexchange.com/questions/8438/how-do-i-make-my-macos-detect-my-ledger-nano-s-when-plugged-in) erstellt, die du begleitend verwenden kannst.

- Während die Ledger-App von Monero bereits läuft, muss nun dein Ledger angeschlossen werden.

- Es sollte entweder dein (vorzugsweise vollständig synchronisierter) Hintergrunddienst (`monerod.exe`) laufen oder eine Verbindung zu einem Remote-Node hergestellt werden.

Jetzt, da wir ausreichend vorbereitet sind, können wir beginnen!

- Gehe via Finder in das Verzeichnis oder den Ordner, in dem `monero-wallet-cli` (CLI v0.12.2.0) eingespeichert ist.

- Gehe auf deinen Desktop.

- Öffne ein neues Terminal (wenn du nicht weißt, wie man ein solches öffnet, schaue [hier](https://apple.stackexchange.com/a/256263)).

- Ziehe `monero-wallet-cli` ins Terminal. Dies sollte den gesamten Pfad zum Terminal hinzufügen. Drücke nicht auf Eingabe.

- Tippe nun Folgendes ein:

`--generate-from-device <new-wallet-name> --subaddress-lookahead 3:200`

Beachte, dass `<new-wallet-name>` schlicht der Platzhalter des tatsächlichen Namens deines Wallets ist. Wenn du dein Wallet beispielsweise `MoneroWallet` nennen möchtest, würde der Befehl folgendermaßen aussehen:

`--generate-from-device MoneroWallet --subaddress-lookahead 3:200`

Beachte, dass der zuvor genannte Text dem Pfad des `monero-wallet-cli` angehängt wird. Bevor du also die Eingabetaste betätigst, sollte dein Terminal wie folgt aussehen:

`/full/path/to/monero-wallet-cli --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200`

Dieser gesamte Pfad ist, ganz intuitiv, der tatsächliche Pfad auf deinem Mac OS X.

- Nachdem der vorige Befehl ausgeführt wurde, wird dich das CLI zur Eingabe eines Passworts auffordern. Stelle sicher, dass du ein starkes Passwort verwendest und dieses anschließend bestätigst.

- Der Ledger wird dich nun fragen, ob du den privaten View-Key exportieren möchtest oder nicht. Zuallererst: Dein Guthaben kann nicht mit dem privaten View-Key allein gefährdet werden. Der Export des privaten View-Keys ermöglicht es dem Client (auf dem Computer - Monero v0.12.2.0), durch Scannen von Blöcken nach etwaigen, deinem Wallet oder deiner Adresse zugehörigen Transaktionen zu suchen. Wird diese Option nicht genutzt, scannt das Gerät (Ledger) die Blöcke, was deutlich langsamer sein wird. Es gibt jedoch einen Vorbehalt: Wird dein System gefährdet, ist der Gegner möglicherweise in der Lage, auch deinen privaten View-Key und damit deine Privatsphäre zu gefährden. Wenn der private View-Key nicht exportiert wird, ist ein Schaden nahezu unmöglich.

- Eventuell musst du zweimal bestätigen, bevor fortgefahren wird.

- Die Erstellung deines Monero-Ledger-Wallets wird nun fertiggestellt. Beachte, dass dies fünf bis zehn Minuten dauern kann. Es wird außerdem keine direkte Rückmeldung, weder im CLI noch im Ledger, geben.

- `monero-wallet-cli` startet nun den Aktualisierungsvorgang. Warte, bis dieser vollständig abgeschlossen wurde.

- Glückwunsch, du kannst dein Monero-Ledger-Wallet nun in Verbindung mit dem CLI verwenden!

### Linux

Zunächst muss sichergestellt werden, dass wir ausreichend vorbereitet sind. Dazu gehören die folgenden Punkte:

- Diese Anleitung setzt voraus, dass du dein Ledger-Wallet bereits eröffnet und damit einen 24 Worte umfassenden mnemonischen Seed generiert hast. 

- Du musst CLI v0.12.2.0 ausführen/nutzen. Dies findest du <a href="{{site.baseurl}}/downloads/">hier</a>.

- Du musst die Ledger-App von Monero installieren und dein System einrichten. Du findest Anleitungen dazu [hier](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (speziell in den Abschnitten --1 und --1). Zusätzlich solltest du sicherstellen, dass das Netzwerk auf `Mainnet` festgelegt ist.

- Während die Ledger-App von Monero bereits läuft, muss nun dein Ledger angeschlossen werden.

- Es sollte entweder dein (vorzugsweise vollständig synchronisierter) Hintergrunddienst (`monerod.exe`) laufen oder eine Verbindung zu einem Remote-Node hergestellt werden.

Jetzt, da wir ausreichend vorbereitet sind, können wir beginnen!

- Gehe in das Verzeichnis oder den Ordner, in welchem monero-wallet-cli und Monerod eingespeichert sind.

- Öffne ein neues Terminal.

- Tippe nun Folgendes ein:

`./monero-wallet-cli --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200`

Beachte, dass `<new-wallet-name>` schlicht der Platzhalter des tatsächlichen Namens deines Wallets ist. Wenn du dein Wallet beispielsweise `MoneroWallet` nennen möchtest, würde der Befehl folgendermaßen aussehen:

`./monero-wallet-cli --generate-from-device MoneroWallet --subaddress-lookahead 3:200`

- Nachdem der vorige Befehl ausgeführt wurde, wird dich das CLI zur Passworteingabe auffordern. Stelle sicher, dass du ein starkes Passwort verwendest und dieses anschließend bestätigst.

- Der Ledger wird dich nun fragen, ob du den privaten View-Key exportieren möchtest oder nicht. Zuallererst: Dein Guthaben kann nicht mit dem privaten View-Key allein gefährdet werden. Der Export des privaten View-Keys ermöglicht es dem Client (auf dem Computer - Monero v0.12.2.0), durch Scannen von Blöcken nach etwaigen, deinem Wallet oder deiner Adresse zugehörigen Transaktionen zu suchen. Wird diese Option nicht genutzt, scannt das Gerät (Ledger) die Blöcke, was deutlich langsamer sein wird. Es gibt jedoch einen Vorbehalt: Wird dein System gefährdet, ist der Gegner möglicherweise in der Lage, auch deinen privaten View-Key und damit deine Privatsphäre zu gefährden. Wenn der private View-Key nicht exportiert wird, ist ein Schaden nahezu unmöglich.

- Eventuell musst du zweimal bestätigen, bevor fortgefahren wird.

- Die Erstellung deines Monero-Ledger-Wallets wird nun fertiggestellt. Beachte, dass dies fünf bis zehn Minuten dauern kann. Es wird außerdem keine direkte Rückmeldung, weder im CLI noch im Ledger, geben.

- `monero-wallet-cli` startet nun den Aktualisierungsvorgang. Warte, bis dieser vollständig abgeschlossen wurde.

Glückwunsch, du kannst dein Monero-Ledger-Wallet nun in Verbindung mit dem CLI verwenden!

### Schlussbemerkungen

- Wir empfehlen dringlichst, den gesamten Prozess zunächst zu testen. Dies kannst du machen, indem du einen kleinen Betrag an dein Wallet schickst und es daraufhin (unter Verwendung der vorliegenden Anleitung) wiederherstellst. Dadurch überprüfst du, ob die Wiederherstellung deines Wallet tatsächlich funktioniert. Beachte, dass du bei der Neuerstellung/Wiederherstellung des Wallets das `--restore-height`-Flag (mit einer Blockhöhe vor deiner ersten Transaktion auf das Wallet) in Schritt 3 (Windows, Linux) oder Schritt 5 (Mac OS X) anhängen solltest. Weitere Informationen bezüglich der Wiederherstellungshöhe und der Annäherung an diese finden sich [hier](https://monero.stackexchange.com/questions/7581/what-is-the-relevance-of-the-restore-height).

- Wenn du einen Remote-Node verwendest, hänge das `--daemon-address host:port`-Flag an den Befehl in Schritt 3 (Windows, Linux) oder Schritt 5 (Mac OS X) an.

- Sofern gewünscht, kannst du den`--subaddress-lookahead`-Wert justieren. Der erste Wert ist die Anzahl von Konten und der zweite die Anzahl von Subadressen je Konto. Wenn du also beispielsweise fünf Konten mit jeweils 100 Subadressen erstellen möchtest, nutzt du dazu `--subaddress-lookahead 5:100`. Denke daran, dass der Ledger durch die Generierung von mehr Subadressen auch entsprechend mehr Zeit benötigt, um dein Wallet zu erstellen.

- Du verwendest das `--generate-from-device`-Flag nur einmal (nämlich bei der Erstellung des Wallets). Danach verwendest du im Grunde alles ähnlich zu dem, wie du das CLI auch üblicherweise nutzt. Das heißt:
   - Stelle sicher, dass der Ledger angeschlossen ist und die Monero-App läuft.
   - Öffne `monero-wallet-cli`.
   - Gib den Namen deines Monero-Ledger-Wallets ein.
   - Gib das Passwort ein, um das Wallet zu öffnen.

   Sollten die Ledger-Wallet-Dateien nicht in demselben Verzeichnis wie `monero-wallet-cli` gespeichert sein, solltest du `monero-wallet-cli` mit dem `--wallet-file /path/to/wallet.keys/file`-Flag öffnen. Alternativ kannst du die Dateien auch in das Verzeichnis, in welchem `monero-wallet-cli` liegt, kopieren.

- Wenn du weitere Fragen hast oder Unterstützung benötigst, hinterlasse einen Kommentar unter der ursprünglichen Frage auf [StackExchange](https://monero.stackexchange.com/questions/8503/how-do-i-generate-a-ledger-monero-wallet-with-the-cli-monero-wallet-cli).
