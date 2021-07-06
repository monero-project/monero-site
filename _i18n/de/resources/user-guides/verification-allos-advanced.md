{% include disclaimer.html translated="yes" translationOutdated="no" %}

Vor dem Extrahieren, Installieren oder Nutzen der Monero-Software sollten
die Monero-Binärdateien verifiziert werden, da du nur so sichergehen kannst,
dass du tatsächlich die offiziellen Binärdateien von Monero
verwendest. Solltest du (bspw. durch Phishing, eine MITM-Attacke etc.) eine
gefälschte Binärdatei erhalten haben, wird dich das Befolgen dieser
Anleitung davor schützen, zum Gebrauch der falschen Dateien verleitet zu
werden.

Das Team von Monero bietet zum Schutz der Integrität dieser Binärdateien
eine kryptografisch signierte Liste aller
[SHA256](https://de.wikipedia.org/wiki/SHA-2)-Hashwerte. Sollte deine
heruntergeladene Binärdatei manipuliert worden sein, wird sie einen
[Hashwert](https://en.wikipedia.org/wiki/File_verification) produzieren,
welcher von dem in der Datei enthaltenen Wert abweicht.

Dies ist eine fortgeschrittene Anleitung für Linux-, Mac- oder
Windows-Betriebssysteme und macht Gebrauch von der Befehlszeile. Sie
begleitet dich durch den gesamten Prozess: die Installation der
erforderlichen Software, den Import des Signaturschlüssels, den Download der
notwendigen Dateien und schließlich die Verifikation der Echtheit deiner
Binärdatei.

## Table of Contents:

### - [Install GnuPG](#installing-gnupg)

### - [Verify & Import Signing Key](#verify-and-import-signing-key)

### - [Download & Verify Hash File](#download-and-verify-hash-file)

### - [Download & Verify Binary](#download-and-verify-binary)

## Installing GnuPG

+ Auf Windows: Besuche die [Download-Seite von
Gpg4win](https://gpg4win.org/download.html) und folge der
Installationsanleitung.

+ Auf Mac: Besuche die [Download-Seite von Gpgtools](https://gpgtools.org/)
und folge der Installationsanleitung.

+ Auf Linux: GnuPG ist bereits vorinstalliert.

## Verify and Import Signing Key

Dieser Abschnitt behandelt den Erhalt des Monero-Signaturschlüssels, dessen
Verifikation und den Import zu GnuPG.

### Get Signing Key

Auf Windows oder Mac: Besuche [binaryFates
GPG-Schlüssel](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/binaryfate.asc),
den er zur Signatur der Monero-Binärdateien verwendet, und speichere die
Seite als `binaryfate.asc` in deinem "Home"-Verzeichnis.

Auf Linux: Du kannst binaryFates Signaturschlüssel durch das Erteilen
folgenden Befehls herunterladen:

```
wget -O binaryfate.asc
https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/binaryfate.asc
```

### Verify Signing Key

Auf allen Betriebssystemen: Überprüfe den Fingerabdruck von `binaryfate.asc`
durch die Eingabe folgenden Befehls in ein Terminal:

``` gpg --keyid-format long --with-fingerprint binaryfate.asc ```


Überprüfe die Übereinstimmung der Fingerabdrücke:

```
pub   rsa4096/F0AF4D462A0BDF92 2019-12-12 [SCEA]
      Key fingerprint = 81AC 591F E9C4 B65C 5806  AFC3 F0AF 4D46 2A0B DF92
uid                           binaryFate <binaryfate@getmonero.org>
```

Wenn die Fingerabdrücke **ÜBEREINSTIMMEN**, kannst du fortfahren.

Wenn die Fingerabdrücke **NICHT ÜBEREINSTIMMEN**, **FAHRE NICHT
FORT**. Lösche die `binaryfate.asc`-Datei und gehe zurück zum [Abschnitt
2.1](#21-signaturschlüssel-herunterladen).

### Import Signing Key

Importiere den Signaturschlüssel unter Gebrauch eines Terminals:

``` gpg --import binaryfate.asc ```

Falls dies das erste Mal ist, dass du den Schlüssel importiert hast, wird
der Output wie folgt aussehen:

```
gpg: key F0AF4D462A0BDF92: 2 signatures not checked due to missing keys
gpg: key F0AF4D462A0BDF92: public key "binaryFate <binaryfate@getmonero.org>" imported
gpg: Total number processed: 1
gpg:               imported: 1
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
```

Falls du den Schlüssel zuvor bereits importiert hast, wird der Output
folgendermaßen aussehen:

```
gpg: key F0AF4D462A0BDF92: "binaryFate <binaryfate@getmonero.org>" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
```

## Download and Verify Hash File

Der folgende Abschnitt behandelt den Download und die Echtheitsverifizierung
der Hash-Datei.

### Get Hash File

Auf Windows oder Mac: Gehe zur [Hashes-Datei auf getmonero.org]({{
site.baseurl_root }}/downloads/hashes.txt) und speichere die Seite unter
`hashes.txt` in deinem "Home"-Verzeichnis.

Auf Linux: Du kannst die signierte Hash-Datei durch Eingabe des folgenden
Befehls herunterladen:

``` wget -O hashes.txt https://www.getmonero.org/downloads/hashes.txt ```

### Verify Hash File

Die Hash-Datei ist, wie im unten angezeigten Output, mit dem Schlüssel `81AC
591F E9C4 B65C 5806 AFC3 F0AF 4D46 2A0B DF92` signiert.

Auf allen Betriebssystemen: Verifiziere die Signatur der Hash-Datei durch
Eingabe folgenden Befehls in ein Terminal:

``` gpg --verify hashes.txt ```

Wenn die Datei echt ist, wird der Output wie folgt aussehen:

```
gpg:                using RSA key 81AC591FE9C4B65C5806AFC3F0AF4D462A0BDF92
gpg: Good signature from "binaryFate <binaryfate@getmonero.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 81AC 591F E9C4 B65C 5806  AFC3 F0AF 4D46 2A0B DF92
```

Zeigt dein Output wie im Beispiel **Good signature** an, kannst du
fortfahren.

Wenn es **BAD signature** ausgibt, **FAHRE NICHT FORT**. Lösche die
`hashes.txt`-Datei und gehe zurück zum [Abschnitt
3.1](#31-hash-datei-herunterladen).

## Download and Verify Binary

Dieser Abschnitt behandelt den Download der Monero-Binärdatei für dein
Betriebssystem, den Erhalt des `SHA256`-Hashs deines Downloads und dessen
Echtheitsverifizierung.

### Get Monero binary

On Windows or Mac, go to [getmonero.org]({{ site.baseurl_root }}/downloads/)
and download the correct file for your operating system. Save the file to
your home directory. **Do not extract the files yet.**

Auf Linux: Du kannst die Befehlszeilen-Tools durch die Eingabe folgenden
Befehls herunterladen:

```
wget -O monero-linux-x64-v0.15.0.1.tar.bz2 https://downloads.getmonero.org/cli/linux64
```

### Binary Verification on Linux or Mac

Für Linux und Mac sind diese Schritte dieselben. Erhalte durch ein Terminal
den `SHA256`-Hashwert deiner heruntergeladenen Monero-Binärdatei. Als
Beispiel wird in dieser Anleitung die `Linux, 64bit`-Binärdatei des GUIs
verwendet. Ersetze `monero-gui-linux-x64-v0.15.0.1.tar.bz2` durch den Namen
der von dir in [Abschnitt 4.1](#41-monero-binärdatei-herunterladen)
heruntergeladenen Binärdatei.

```
shasum -a 256 monero-linux-x64-v0.15.0.1.tar.bz2
```

Der Output wird für jede Binärdatei unterschiedlich ausfallen, jedoch in
etwa wie folgt aussehen. Dein `SHA256`-Hashwert sollte mit einem der in der
`hashes.txt`-Datei deiner Binärdatei aufgelisteten Hashwerte übereinstimmen.

```
8d61f992a7e2dbc3d753470b4928b5bb9134ea14cf6f2973ba11d1600c0ce9ad 
monero-linux-x64-v0.15.0.1.tar.bz2
```

Wenn dein Hashwert mit einem der aufgelisteten **ÜBEREINSTIMMT**, bist du
mit dieser Anleitung fertig! Du kannst die Dateien nun extrahieren und
installieren.

Wenn dein Hashwert **NICHT** mit einem der gelisteten **ÜBEREINSTIMMT**,
**FAHRE NICHT FORT**. Lösche die von dir heruntergeladene Binärdatei und
gehe zurück zum [Abschnitt 4.1](#41-monero-binärdatei-herunterladen).

### Binary Verification on Windows

Erhalte durch ein Terminal den `SHA256`-Hashwert deiner heruntergeladenen
Monero-Binärdatei. Als Beispiel nutzt diese Anleitung die `Windows,
64bit`-Binärdatei des GUIs. Ersetze `monero-gui-win-x64-v0.15.0.1.zip` durch
den Namen der von dir in [Abschnitt
4.1](#41-monero-binärdatei-herunterladen) heruntergeladenen Binärdatei.

``` certUtil -hashfile monero-gui-win-x64-v0.15.0.1.zip SHA256 ```

Der Output wird für jede Binärdatei unterschiedlich ausfallen, jedoch in
etwa wie folgt aussehen. Dein `SHA256`-Hashwert sollte mit einem der in der
`hashes.txt`-Datei deiner Binärdatei aufgelisteten Hashwerte übereinstimmen.

```
SHA256 hash of file monero-gui-win-x64-v0.12.0.0.zip: 4b 9f 31 68 6e ca
ad 97 cd b1 75 e6 57 4b f3 07 f8 d1 c4 10 42 78 25 f4 30 4c 21 da 8a ac 18
64 CertUtil: -hashfile command completed successfully. 
```

Wenn dein Hashwert mit einem der aufgelisteten **ÜBEREINSTIMMT**, bist du
mit dieser Anleitung fertig! Du kannst die Dateien nun extrahieren und
installieren.

Wenn dein Hashwert **NICHT** mit einem der gelisteten **ÜBEREINSTIMMT**,
**FAHRE NICHT FORT**. Lösche die von dir heruntergeladene Binärdatei und
gehe zurück zum [Abschnitt 4.1](#41-monero-binärdatei-herunterladen).
