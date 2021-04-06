{% include disclaimer.html translated="yes" translationOutdated="no" %}

Vor dem Extrahieren, Installieren oder Nutzen der Monero-Software sollten die Monero-Binärdateien verifiziert werden, da du nur so sichergehen kannst, dass du tatsächlich die offiziellen Binärdateien von Monero verwendest. Solltest du (bspw. durch Phishing, eine MITM-Attacke etc.) eine gefälschte Binärdatei erhalten haben, schützt dich das Befolgen dieser Anleitung davor, zur Verwendung der falschen Dateien verleitet zu werden.

Das Team von Monero bietet zum Schutz der Integrität dieser Binärdateien eine kryptografisch signierte Liste aller [SHA256](https://de.wikipedia.org/wiki/SHA-2)-Hashwerte. Sollte deine heruntergeladene Binärdatei manipuliert worden sein, wird sie einen [Hashwert](https://en.wikipedia.org/wiki/File_verification) produzieren, welcher von dem in der Datei enthaltenen Wert abweicht.

Dies ist eine Anfängeranleitung für das Windows-Betriebssystem, die sich beinahe ausschließlich mit den GUIs befasst. Sie begleitet dich durch den gesamten Prozess: die Installation der erforderlichen Software, den Import des Signaturschlüssels, den Download der notwendigen Dateien und schließlich die Verifikation der Echtheit deiner Binärdatei.

## Inhaltsverzeichnis

### [1. Gpg4win-Installationsprogramm](#1-gpg4win-installationsprogramm)
  - [1.1. Download des Gpg4win-Installationsprogramms](#11-download-des-gpg4win-installationsprogramms)
    + [1.1.1. Gpg4win herunterladen](#111-gpg4win-herunterladen)
    + [1.1.2. Gpg4win starten](#112-gpg4win-starten)
  - [1.2. Gpg4win-Installationsprogramm verwenden](#12-gpg4win-installationsprogramm-verwenden)
### [2. Monero-Signaturschlüssel](#2-monero-signaturschlüssel)
  - [2.1. Signaturschlüssel herunterladen](#21-signaturschlüssel-herunterladen)
  - [2.2. Kleopatra initialisieren](#22-kleopatra-initialisieren)
    + [2.2.1. Signaturschlüssel importieren](#221-signaturschlüssel-importieren)
    + [2.2.2. Schlüsselpaar erstellen](#222-schlüsselpaar-erstellen)
  - [2.3. Signaturschlüssel verifizieren](#23-signaturschlüssel-verifizieren)
### [3. Verifikation der Hash-Datei](#3-verifikation-der-hash-datei)
  - [3.1. Hash-Datei herunterladen](#31-hash-datei-herunterladen)
  - [3.2. Hash-Datei verifizieren](#32-hash-datei-verifizieren)
### [4. Verifikation der Binärdatei](#4-verifikation-der-binärdatei)
  - [4.1. Binärdatei herunterladen](#41-binärdatei-herunterladen)
  - [4.2. Binärdatei verifizieren](#42-binärdatei-verifizieren)

## 1. Gpg4win-Installationsprogramm

Dieser Abschnitt behandelt die Installation der Kryptografie-Software. Windows ist nicht mit den zur Verifikation der Binärdatei benötigten Tools ausgestattet. Um diese Tools zu installieren, kannst du das Gpg4win-Installationsprogramm verwenden.

### 1.1. Download des Gpg4win-Installationsprogramms

#### 1.1.1. Gpg4win herunterladen

Gehe im Webbrowser auf [gpg4win.org](https://gpg4win.org) und lade das Installationsprogramm durch Anklicken des grünen Buttons herunter.

![gpg4win download button](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-downloadbutton.png)

Du wirst auf eine Spendenseite weitergeleitet. Wenn du nichts spenden möchtest, wähle `$0`. Danach kannst du auf `Download` klicken.

![gpg4win site donation](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-donation.png)

Klicke auf `Datei speichern`.

![gpg4win site save file](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile.png)

Wähle einen Zielort für den Download und wähle `Speichern`.

![gpg4win site download location](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile-location.png)

#### 1.1.2. Gpg4win starten

Öffne den darin enthaltenen Ordner, sobald der Download fertig ist.

![gpg4win site open folder](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile-openfolder.png)

Du startest die heruntergeladene Gpg4win-Programmdatei mittels Doppelklicks.

![gpg4win launch](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-launch.png)

### 1.2. Gpg4win-Installationsprogramm verwenden

Dir wird zwecks Verifizierung ein Sicherheitsbildschirm angezeigt. Klicke auf `Ausführen`.

![gpg4win installer security](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-security.png)

Wähle deine Sprache und klicke auf `OK`.

![gpg4win installer language](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-language.png)

Es erscheint ein Willkommensbildschirm, auf dem du auf `Weiter` klickst.

![gpg4win installer welcome](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-welcome.png)

Nun wird dir ein Bildschirm zwecks Auswahl der Komponenten angezeigt. Folgst du dieser Anleitung, muss hier zumindest `Kleopatra` ausgewählt bleiben. Klicke auf `Weiter`, nachdem du deine Auswahl getroffen hast.

![gpg4win installer components](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-components.png)

Wenn du nicht genau weißt, was du hier eigentlich machst, ist am besten, den voreingestellten Installationsort zu verwenden. Treffe deine Auswahl und klicke `Installieren`.

![gpg4win installer location](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install.png)

Die Installation ist damit abgeschlossen. Wähle `Weiter`.

![gpg4win installer complete](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-complete.png)

Klicke auf `Abschließen`.

![gpg4win installer finish](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-finish.png)

## 2. Monero-Signaturschlüssel

Dieser Abschnitt behandelt den Download des Monero-Signaturschlüssels, dessen Verifikation und schließlich den Import des Schlüssels auf deinen Schlüsselring. Die Hash-Datei, die zur Verifikation deiner Binärdatei verwendet wird, ist mit dem Monero-Signaturschlüssel kryptografisch signiert. Um die Validität dieser Datei zu überprüfen, musst du über die öffentliche Version des Signaturschlüssels verfügen.

### 2.1. Signaturschlüssel herunterladen

Besuche in einem Webbrowser [binaryFates GPG-Schlüssel](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/binaryfate.asc), den er zum Signieren von Moneros Binärdateien nutzt. Auf dieser Seite kannst du rechtsklicken und `Seite speichern unter` auswählen.

![getkey right click](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_getkey-rightclick.png)

Belasse es beim voreingestellten Speicherort und klicke auf `Speichern`.

![getkey save file](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_getkey-savefilename.png)

### 2.2. Kleopatra initialisieren

Falls dies das erste Mal ist, dass du Kleopatra verwendest, musst du zunächst ein eigenes Schlüsselpaar erstellen.

Starte Kleopatra.

![kleo launch](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-launch.png)

#### 2.2.1. Signaturschlüssel importieren

Klicke auf `Import`.

![kleo firstrun import](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-importkey.png)

Gehe ins `Downloads`-Verzeichnis, wähle `binaryfate` und klicke auf `Öffnen`.

![kleo firstrun key location](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-import-location.png)

Durch Klicken auf `Ja` startest du den Zertifikationsprozess des Schlüssels.

![kleo firstrun start process](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-startverifyprocess.png)

#### 2.2.2. Schlüsselpaar erstellen

Starte den Vorgang der Schlüsselerstellung durch einen Klick auf `Ja`.

![kleo firstrun start key create](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeysnow.png)

Fülle einige Angaben bezüglich `Name` und `Email` aus und klicke dann auf `Weiter`.

![kleo firstrun key details](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeydetails.png)

Überprüfe die Angaben und wähle `Erstellen`.

![kleo firstrun verify key details](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-verifykeydetails.png)

Erstelle ein Passwort und klicke auf `OK`.

![kleo firstrun set key pass](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeys-pinentry.png)

Klicke auf `Abschließen`.

![kleo firstrun finish create key](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-keycreate-success.png)

### 2.3. Signaturschlüssel verifizieren

Kontrolliere visuell, dass der Fingerabdruck des zu binaryFate gehörenden Schlüssels `81AC591FE9C4B65C5806AFC3F0AF4D462A0BDF92` ist.

![kleo certify fingerprint](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-certify-fingerprint.png)

Wenn der Fingerabdruck mit dem genannten **ÜBEREINSTIMMT**, klicke auf `Weiter`.

Wenn der Fingerabdruck mit dem genannten **NICHT ÜBEREINSTIMMT**, **FAHRE NICHT FORT**. Lösche die `binaryfate`-Datei aus dem `Downloads`-Verzeichnis und gehe zurück zum [Abschnitt 2.1](#21-signaturschlüssel-herunterladen).

Gib dein Passwort ein und wähle `OK`.

![kleo certify pass](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-certify-pinentry.png)

Klicke auf `Abschließen`.

## 3. Verifikation der Hash-Datei

Dieser Abschnitt behandelt den Download einer signierten Datei mit bekanntlich guten Hashes und die Verifikation ihrer Echtheit.

### 3.1. Hash-Datei herunterladen

Besuche in einem Webbrowser die [Hash-Seite von getmonero.org]({{ site.baseurl_root }}/downloads/hashes.txt). Wähle nach einem Rechtsklick auf der Seite die Option `Seite speichern unter`.

![hashes right click](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-getmonero-rightclick.png)

Belasse es beim voreingestellten Speicherort und klicke auf `Speichern`.

![hashes save file](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-getmonero-savename.png)

### 3.2. Hash-Datei verifizieren

Klicke in Kleopatra den `Decrypt/Verify`-Button.

![hashes kleo verify button](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-verify-button.png)

Navigiere zum `Downloads`-Verzeichnis. Wähle die `hashes`-Datei und klicke auf `Öffnen`.

![hashes kleo open file](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-verify-button-filename.png)

Kleopatra wird dich über die Gültigkeit der Dateisignatur in Kenntnis setzen.

Wenn die Signatur **GÜLTIG** ist, wirst du Folgendes sehen:

![hashes kleo goodsig](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-goodsig.png)

Wenn die Signatur **UNGÜLTIG** ist, wirst du Folgendes sehen:

![hashes kleo badsig](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-badsig.png)

Wenn du eine **GÜLTIGE** Signatur ausgegeben bekommst, wähle `Verwerfen` und fahre fort.

Wenn du eine **UNGÜLTIGE** Signatur ausgegeben bekommst, **FAHRE NICHT FORT**. Lösche die `hashes`-Datei aus dem `Downloads`-Verzeichnis und gehe zurück zum [Abschnitt 3.1](#31-hash-datei-herunterladen).

## 4. Verifikation der Binärdatei

Der folgende Abschnitt behandelt den Download der Monero-Binärdatei und deren Echtheitsverifizierung.

### 4.1. Binärdatei herunterladen

Besuche in einem Webbrowser die [Downloads-Seite von getmonero.org]({{ site.baseurl_root }}/downloads/#windows). Wähle die für dein System passende Binärdatei aus.

![binary getmonero](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-windowsfiles.png)

Lasse `Datei speichern` ausgewählt und klicke auf `OK`.

![binary getmonero save](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-save-file.png)

Belasse es beim voreingestellten Speicherort und klicke auf `Speichern`.

![binary getmonero save location](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-save-location.png)

### 4.2. Binärdatei verifizieren

Navigiere in einem Dateimanager zum `Downloads`-Verzeichnis. Öffne die `hashes`-Datei mit einem Textverarbeitungsprogramm.

![binary open hashes.txt](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-word-hashfile.png)

Öffne ein Terminal (`cmd.exe`).

![binary launch term](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-launch.png)

Wechsle unter Verwendung des Befehls `cd Downloads` ins `Downloads`-Verzeichnis.

![binary cmd cd](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-cd.png)

Berechne den Hashwert der Monero-Binärdatei mit folgendem Befehl: `certUtil -hashfile monero-gui-win-x64-v0.16.0.2.zip SHA256` (solltest du eine Version ausschließlich für die Befehlszeile heruntergeladen haben, ersetze `monero-gui-win-x64-v0.16.0.2.zip` dementsprechend).

![binary cmd certutil](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-certutil.png)

Vergleiche den Hashwert aus der Befehlszeile mit dem in der Hash-Datei; sie sollten gleich sein (Leerzeichen können ignoriert werden).

![binary compare hashes](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-word-cmd-compare.png)

Wenn die Hashwerte **ÜBEREINSTIMMEN**, bist du fertig mit der Verifikation! Du kannst dir nun sicher sein, dass deine Monero-Dateien echt sind. Die Dateien kannst du jetzt ganz normal extrahieren und installieren/nutzen.

Wenn die Hashwerte **NICHT ÜBEREINSTIMMEN**, **FAHRE NICHT FORT**. Lösche die Monero-Binärdatei aus dem `Downloads`-Verzeichnis und gehe zurück zum [Abschnitt 4.1](#41-binärdatei-herunterladen).
