{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Gegenstand und Warnung

Die meisten Anwender benötigen den Import der Blockchain nicht. Um Monero zu nutzen, musst du lediglich die Software starten, die sich dann mit dem Peer-to-Peer-Netzwerk synchronisiert. In der Regel ist dies deutlich schneller, als würdest du die Blockchain auf die hier beschriebene Weise herunterladen und importieren; du lädst dabei von vielen Peers anstelle von einem einzigen Server herunter, und der Monero-Hintergrunddienst verifiziert dann jeden Block direkt nach dem Eingang, anstelle nach dem Download alles separat zu überprüfen.

Die in dieser Anleitung beschriebene Option ist vorwiegend zur Entwicklung von Nutzen, ist aber auch dann hilfreich, wenn dich ein ungewöhnliches Problem vom üblichen Synchronisieren abhalten sollte.

Verwende **niemals** die gefährliche, ungeprüfte Importoption; diese ist ausschließlich für Experten gedacht. Insbesondere solltest du sie nicht bei einer aus dem Internet, einschließlich von der offiziellen Webseite heruntergeladen Blockchain verwenden. Nur wenn du a) eine Datei importierst, die du eigenhändig lokal exportiert hast *und* b) du absolut sicher bist, dass die Datei vor dem Exportieren gründlich und vollständig überprüft wurde, ist ihr Gebrauch wirklich sicher.

### Schritt 1

Lade die aktuelle Bootstrap von https://downloads.getmonero.org/blockchain.raw herunter. Wenn du die Blockchain aus einer anderen Quelle importierst, kannst du diesen Schritt überspringen.

### Schritt 2

Finde den Pfad, auf welchem die Monero-Software installiert ist. Meiner ist beispielsweise

`D:\monero-gui-0.10.3.1`

Je nach dem, welche Version der Software du heruntergeladen und wo du diese installiert hast, kann dein Pfad natürlich ein anderer sein.

### Schritt 3

Finde den Pfad deiner heruntergeladenen Blockchain. Bei mir war das

`C:\Users\KeeJef\Downloads\blockchain.raw`

Deiner kann abhängig davon, wo du die Blockchain abgespeichert hast, ein anderer sein.

### Schritt 4

Öffne die Befehlszeile. Dies tust du, indem du die Windows-Taste + R drückst und dann in das erscheinende Kästchen `CMD` eintippst und Eingabe drückst.

### Schritt 5

Mithilfe des CMD-Fensters musst du nun zum Pfad deiner Monero-Software navigieren. Das kannst du machen, indem du den folgenden Befehl eingibst:

`cd C:\YOUR\MONERO\PATH\HERE`

Das sollte bei dir in etwa so aussehen:

`cd D:\monero-gui-0.10.3.1`

Sollte deine Monero-Software auf einem anderen Laufwerk liegen, kannst du `DriveLetter:` verwenden; liegt die Software auf dem D:-Laufwerk, gibst du vor dem "cd"-Befehl `D:` ein.

### Schritt 6

In die Befehlszeile gibst du anschließend Folgendes ein:

`monero-blockchain-import --input-file C:\YOUR\BLOCKCHAIN\FILE\PATH\HERE`

Ich würde beispielsweise dies eintippen:

`monero-blockchain-import --input-file C:\Users\KeeJef\Downloads\blockchain.raw`

### Schritt 7

Nachdem die Blockchain die Synchronisation abgeschlossen hat, kannst du dein Monero-Wallet ganz normal öffnen. Die heruntergeladene "rohe" Blockchain (blockchain.raw) kann gelöscht werden.
