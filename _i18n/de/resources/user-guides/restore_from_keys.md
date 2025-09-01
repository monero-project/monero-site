{% include disclaimer.html translated="yes" translationOutdated="no" %}

Die Wiederherstellung eines Wallets durch private Schlüssel ist ziemlich
einfach. Wenn du die notwendigen Angaben hast, kannst du dein Wallet mit
dieser Anleitung komplett wiederherstellen. Zur Info: Du benötigst NICHT
dein Passwort, um dein Wallet durch die Schlüssel wiederherzustellen.

Du brauchst drei Angaben deines Wallets oder alternativ deine
".keys"-Dateien, welche sowohl diese Infos wie auch das Passwort zum
Entschlüsseln enthalten. Die drei benötigten Bestandteile des Wallets sind:

1. **Adresse**
2. **Geheimer Spend-Key**
3. **Geheimer View-Key**


#### CLI

Führe dann den Wallet-Befehl aus:

`./monero-wallet-cli --generate-from-keys New_Wallet_Name.abc`

Als Nächstes wirst du nach der Adresse, dem Spend- und dem View-Key und
schließlich nach einem neuen Passwort für das wiederhergestellte Wallet
gefragt.

Führst du dies mit den richtigen Parametern aus, werden deine Wallet-Dateien
neu generiert und dir wird ermöglicht, ein neues Passwort festzulegen.

Solltest du in irgendwelche Schwierigkeiten geraten, wird dir
`./monero-wallet-cli --help` die bei Inbetriebnahme deines Wallets
verfügbaren Optionen aufzeigen. Sobald du "in" deinem Wallet bist, kannst du
dir durch den `help`-Befehl eine Liste von Hilfestellungen für die dir
verfügbaren Befehle innerhalb des Wallets anzeigen lassen.

#### GUI

Starte `monero-wallet-gui`. Wenn du das Programm zum ersten Mal startest,
gehe über zum nächsten Schritt, ansonsten wähle `Abbrechen`:

![cancel
opening](/img/resources/user-guides/en/restore_from_keys/cancel-opening.avif)

Klicke auf `Stelle Wallet mit Schlüsseln oder mnemonischem Seed wieder her`:

![choose
restore](/img/resources/user-guides/en/restore_from_keys/choose-restore.avif)

Select `Restore from keys`, give your wallet a name & storage location, and
complete the `Account address (public)`, `View key (private)` & `Spend key
(private)`. Optionally, specify a `Restore height (optional)` to avoid
scanning of oldest blocks. Then click the `Next` button:

![restore
wallet](/img/resources/user-guides/en/restore_from_keys/restore-wallet.avif)

On the next page, give your wallet a strong password and confirm it before
clicking the `Next` button:

![wallet
password](/img/resources/user-guides/en/restore_from_keys/wallet-password.avif)

Specify your daemon settings and click the `Next` button:

![daemon
settings](/img/resources/user-guides/en/restore_from_keys/daemon-settings.avif)

Click on `Create wallet` to complete the restoration process:

![all set
up](/img/resources/user-guides/en/restore_from_keys/all-set-up.avif)
