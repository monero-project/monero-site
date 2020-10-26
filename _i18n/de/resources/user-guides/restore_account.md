{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Betriebssysteme:  Windows, Linux, Mac

- Rufe deinen 25 Wörter umfassenden @mnemonischen Seed, welchen du im Zuge der Erstellung deines alten Monero-@Wallets gesichert hast, ab.

### Konto-Software:  monero-wallet-cli

- Öffne die Befehlszeile und navigiere zu dem Laufwerk und Verzeichnis, in welchem monero-wallet-cli liegt.

- Gib `monero-wallet-cli --restore-deterministic-wallet` in die Befehlszeile ein.

- Sobald du auf Eingabe drückst, wirst du dazu aufgefordert, einen Wallet-Dateinamen einzugeben. Gib deinem Wallet einen Namen (irgendein beliebiger reicht aus).

- Nach der erneuten Betätigung der Eingabetaste wirst du aufgefordert, ein Passwort einzugeben. Gib deinem Wallet ein neues und langes Passwort.

- Drücke erneut auf Eingabe; die Wiederholung des Passwortes wird gefordert.

- Nach erneuter Betätigung der Eingabetaste wirst du aufgefordert, deinen 25 Worte umfassenden mnemonischen Seed (nach Electrum-Art), welchen du zuvor abgerufen hast, einzugeben.

- Dir wird anschließend "Wiederherstellung von konkreter Blockchainhöhe (optional, 0 voreingestellt):" angezeigt. Der Wiederherstellungsprozess startet gemäß Standardeinstellung ganz zu Beginn der Blockchain. Wenn du die konkrete Blockchainhöhe nicht kennst, drücke einfach auf Eingabe. (Das Festsetzen einer konkreten Blockchainhöhe startet den Wiederherstellungsprozess ab ebendieser Höhe. Das spart ein wenig Zeit im Scanprozess, vorausgesetzt du kennst die Blockchainhöhe bei der ersten Transaktion dieses Kontos.)

Nachdem du die 25 Wörter und damit deinen mnemonischen Seed eingegeben und deine konkrete Blockchainhöhe gewählt hast, wird monero-wallet-cli dieselbe öffentliche Adresse und denselben View-Key deines alten Wallets generieren und den Aktualisierungsvorgang automatisch starten. (Bitte gedulde dich ein wenig; der Aktualisierungsvorgang kann eine Weile dauern.)

### Konto-Software:  monero-wallet-gui

Starte `monero-wallet-gui`. Gehe über zum nächsten Schritt, falls du das Programm zum ersten Mal startest, ansonsten wähle `Abbrechen`:

![cancel opening](png/restore_account/cancel-opening.png)

Wähle die für dich passende Sprache `Deutsch`:

![choose language](png/restore_account/choose-language.png)

Klicke auf `Stelle Wallet mit Schlüsseln oder mnemonischem Seed wieder her`:

![choose restore](png/restore_account/choose-restore.png)

Lasse `Mit mnemonischem Seed wiederherstellen` ausgewählt, lege Namen und Speicherstelle deines Wallets fest und vervollständige den Teil `Gebe deinen, aus 25 (oder 24) Wörtern bestehenden, mnemonischen Seed ein`. Um das Scannen der ältesten Blöcke zu umgehen, kannst du eine optionale `Wiederherstellungshöhe` festlegen. Klicke dann auf den `rechten` Pfeil:

![restore wallet](png/restore_account/restore-wallet.png)

Auf der nächsten Seite gibst du deinem Wallet ein starkes Passwort. Bestätige dieses, bevor du erneut auf den `rechten` Pfeil klickst:

![wallet password](png/restore_account/wallet-password.png)

Lege die Einstellungen deines Hintergrunddienstes fest und klicke abermals auf den `rechten` Pfeil:

![daemon settings](png/restore_account/daemon-settings.png)

Klicke auf `USE MONERO` und hab Spaß mit deinem wiederhergestellten Wallet:

![all set up](png/restore_account/all-set-up.png)
