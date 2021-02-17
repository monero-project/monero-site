{% include disclaimer.html translated="yes" translationOutdated="no" %}

Die Wiederherstellung eines Wallets durch private Schlüssel ist ziemlich einfach. Wenn du die notwendigen Angaben hast, kannst du dein Wallet mit dieser Anleitung komplett wiederherstellen. Zur Info: Du benötigst NICHT dein Passwort, um dein Wallet durch die Schlüssel wiederherzustellen.

Du brauchst drei Angaben deines Wallets oder alternativ deine ".keys"-Dateien, welche sowohl diese Infos wie auch das Passwort zum Entschlüsseln enthalten. Die drei benötigten Bestandteile des Wallets sind:

1. **Adresse**
2. **Geheimer Spend-Key**
3. **Geheimer View-Key**


#### CLI

Führe dann den Wallet-Befehl aus:

`./monero-wallet-cli --generate-from-keys New_Wallet_Name.abc`

Als Nächstes wirst du nach der Adresse, dem Spend- und dem View-Key und schließlich nach einem neuen Passwort für das wiederhergestellte Wallet gefragt.

Führst du dies mit den richtigen Parametern aus, werden deine Wallet-Dateien neu generiert und dir wird ermöglicht, ein neues Passwort festzulegen.

Solltest du in irgendwelche Schwierigkeiten geraten, wird dir `./monero-wallet-cli --help` die bei Inbetriebnahme deines Wallets verfügbaren Optionen aufzeigen. Sobald du "in" deinem Wallet bist, kannst du dir durch den `help`-Befehl eine Liste von Hilfestellungen für die dir verfügbaren Befehle innerhalb des Wallets anzeigen lassen.

#### GUI

Starte `monero-wallet-gui`. Wenn du das Programm zum ersten Mal startest, gehe über zum nächsten Schritt, ansonsten wähle `Abbrechen`:

![cancel opening](/img/resources/user-guides/en/restore_from_keys/cancel-opening.png)

Wähle die für dich passende Sprache `Deutsch`:

![choose language](/img/resources/user-guides/en/restore_from_keys/choose-language.png)

Klicke auf `Stelle Wallet mit Schlüsseln oder mnemonischem Seed wieder her`:

![choose restore](/img/resources/user-guides/en/restore_from_keys/choose-restore.png)

Wähle `Mit Schlüsseln wiederherstellen`, lege Namen und Speicherstelle deines Wallets fest und vervollständige deine `Wallet-Adresse (öffentlich)`, den `View-Key (privat)` und `Spend-Key (privat)`. Um das Scannen der ältesten Blöcke zu umgehen, kannst du eine optionale `Wiederherstellungshöhe` festlegen. Klicke dann auf den `rechten` Pfeil:

![restore wallet](/img/resources/user-guides/en/restore_from_keys/restore-wallet.png)

Auf der nächsten Seite gibst du deinem Wallet ein starkes Passwort. Bestätige dieses, bevor du abermals auf den `rechten` Pfeil klickst:

![wallet password](/img/resources/user-guides/en/restore_from_keys/wallet-password.png)

Lege die Einstellungen deines Hintergrunddienstes fest und klicke dann erneut auf den `rechten` Pfeil:

![daemon settings](/img/resources/user-guides/en/restore_from_keys/daemon-settings.png)

Klicke auf `USE MONERO` und hab Spaß mit deinem wiederhergestellten Wallet:

![all set up](/img/resources/user-guides/en/restore_from_keys/all-set-up.png)
