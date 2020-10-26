{% include disclaimer.html translated="yes" translationOutdated="no" %}

Manchmal kann es passieren, dass dein Geld feststeckt - du hast gesperrtes Guthaben, das niemals freigegeben wird. So löst du das Problem:

- Lade dein Wallet in monero-wallet-cli.

- Tippe

> seed

in die Befehlszeile ein. Falls noch nicht geschehen, schreibe deinen 25-Wort-Seed nieder. Dies ist der beste Weg um sicherzustellen, dass du den Zugriff auf dein Vermögen nicht verlierst.

- Schließe monero-wallet-cli durch die Eingabe von

> exit

- Sichere alle dem Wallet zugehörigen Dateien. Diese beinhalten:

> yourwalletname.bin
> yourwalletname.bin.keys
> yourwalletname.bin.address.txt

Du kannst dies tun, indem du die Dateien in einen neuen Ordner kopierst.

Beim Erstellen deines Wallets könntest du einen Namen ohne das ".bin"-Element gewählt haben. In diesem Fall wird sich die Wallet-Datei schlicht "yourwalletname" (ohne ".bin") nennen.

- Lösche yourwallet.bin.

- Lade monero-wallet-cli und gib den Namen deines gerade gelöschten Wallets ein.

- Gib das Passwort ein. Das Wallet wird nun aktualisieren, danach wird dein gesperrtes Guthaben hoffentlich freigegeben und verfügbar sein.

