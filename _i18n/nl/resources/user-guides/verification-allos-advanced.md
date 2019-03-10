{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
# Binary verifiëren: Linux, Mac of Windows via opdrachtregel (geavanceerd)

Voordat je de Monero-software uitpakt, installeert en gebruikt, moet je de binaire bestanden van Monero verifiëren. Dit is de enige manier om er zeker van te zijn dat je de officiële Monero-software gebruikt. Als je een onecht Monero-binary ontvangt (bijvoorbeeld via phishing of een *man-in-the-middle attack*), voorkomt deze methode dat je er gebruik van maakt.

Het Monero-team stelt een cryptografisch ondertekende lijst beschikbaar met alle [SHA256](https://en.wikipedia.org/wiki/SHA-2)-hashes, om de integriteit van de binaries te garanderen. Als er met het gedownloade binaire bestand is geknoeid, levert het een [andere hash](https://nl.wikipedia.org/wiki/Hashfunctie) op dan in de lijst.

Dit is een geavanceerde handleiding voor de besturingssystemen Linux, Mac en Windows. Hierbij wordt de opdrachtregel gebruikt. We leggen stap voor stap uit hoe je de vereiste software installeert, de ondertekeningssleutel importeert, de benodigde bestanden downloadt en uiteindelijk verifieert dat je binaire bestand authentiek is.

## Inhoud

### [1. GnuPG installeren](#1-installing-gnupg)
### [2. Ondertekeningssleutel verifiëren en importeren](#2-verify-and-import-signing-key)
  + [2.1. Ondertekeningssleutel ophalen](#21-get-signing-key)
  + [2.2. Ondertekeningssleutel verifiëren](#22-verify-signing-key)
  + [2.3. Ondertekeningssleutel importeren](#23-import-signing-key)
### [3. Hashbestand downloaden en verifiëren](#3-download-and-verify-hash-file)
  + [3.1. Hashbestand ophalen](#31-get-hash-file)
  + [3.2. Hashbestand verifiëren](#32-verify-hash-file)
### [4. Binary downloaden en verifiëren](#4-download-and-verify-binary)
  + [4.1. Monero-binary ophalen](#41-get-monero-binary)
  + [4.2. Binary verifiëren op Linux of Mac](#42-binary-verification-on-linux-or-mac)
  + [4.3. Binary verifiëren op Windows](#43-binary-verification-on-windows)

## 1. GnuPG installeren

+ Op Windows ga je naar de [downloadpagina voor Gpg4win](https://gpg4win.org/download.html) en volg je de instructies voor het installeren.

+ Op een Mac ga je naar de [downloadpagina voor Gpgtools](https://gpgtools.org/) en volg je de instructies voor het installeren.

+ Op Linux is GnuPG standaard geïnstalleerd.

## 2. Ondertekeningssleutel verifiëren en importeren

In dit gedeelte leggen we uit hoe je de Monero-ondertekeningssleutel ophaalt, controleert of deze correct is en de sleutel importeert in GnuPG.

### 2.1. Ondertekeningssleutel ophalen

Op Windows of een Mac: ga naar [Fluffypony's GPG-sleutel](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/fluffypony.asc), waarmee hij de Monero-binaries ondertekent, en sla de pagina op als `fluffypony.asc` in je homedirectory.

Op Linux kun je de ondertekeningssleutel van Fluffypony downloaden door de volgende opdracht op te geven:

```
wget -O fluffypony.asc https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/fluffypony.asc
```

### 2.2. Ondertekeningssleutel verifiëren

Op alle besturingssystemen kun je de vingerafdruk van `fluffypony.asc` controleren door de volgende opdracht te geven in een terminal:

```
gpg --keyid-format long --with-fingerprint fluffypony.asc
```


Controleer of de vingerafdruk overeenkomt:

```
pub  2048R/7455C5E3C0CDCEB9 2013-04-08 Riccardo Spagni <ric@spagni.net>
      Key fingerprint = BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9
sub  2048R/55432DF31CCD4FCD 2013-04-08
```

Als de vingerafdruk **WEL** overeenkomt, kun je verder gaan.

**GA NIET VERDER** als de vingerafdruk **NIET** overeenkomt. Verwijder dan het bestand `fluffypony.asc` en ga terug naar [paragraaf 2.1](#21-get-signing-key).

### 2.3. Ondertekeningssleutel importeren

Importeer de ondertekeningssleutel in een terminal:

```
gpg --import fluffypony.asc
```

Als dit de eerste keer is dat je de sleutel hebt geïmporteerd, ziet de uitvoer er als volgt uit:

```
gpg: key 0x7455C5E3C0CDCEB9: 2 signatures not checked due to missing keys
gpg: key 0x7455C5E3C0CDCEB9: public key "Riccardo Spagni <ric@spagni.net>" importe
d
gpg: Total number processed: 1
gpg:               imported: 1
gpg: no ultimately trusted keys found
```

Als je de sleutel eerder hebt geïmporteerd, ziet de uitvoer er als volgt uit:

```
gpg: key 0x7455C5E3C0CDCEB9: "Riccardo Spagni <ric@spagni.net>" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
```

## 3. Hashbestand downloaden en verifiëren

In dit gedeelte leggen we uit hoe je het hashbestand downloadt en de authenticiteit verifieert.

### 3.1. Hashbestand ophalen

Op Windows of een Mac ga je naar het [hashbestand op getmonero.org](https://getmonero.org/downloads/hashes.txt) en sla je de pagina op als `hashes.txt` in je homedirectory.

Op Linux kun je het ondertekende hashbestand downloaden door de volgende opdracht op te geven:

```
wget -O hashes.txt https://getmonero.org/downloads/hashes.txt
```

### 3.2. Hashbestand verifiëren

Het hashbestand is ondertekend met de sleutel `94B7 38DD 3501 32F5 ACBE  EA1D 5543 2DF3 1CCD 4FCD`, een subsleutel van de sleutel `BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9` (zoals weergegeven in de uitvoer hieronder).

Op alle besturingssystemen kun je de ondertekening van het hasbestand controleren door de volgende opdracht te geven in een terminal:

```
gpg --verify hashes.txt
```

Als het bestand authentiek is, ziet de uitvoer er als volgt uit:

```
gpg: Signature made Thu 05 Apr 2018 06:07:35 AM MDT
gpg:                using RSA key 94B738DD350132F5ACBEEA1D55432DF31CCD4FCD
gpg: Good signature from "Riccardo Spagni <ric@spagni.net>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9
     Subkey fingerprint: 94B7 38DD 3501 32F5 ACBE  EA1D 5543 2DF3 1CCD 4FCD
```

Als er **Good signature** in de uitvoer staat, zoals in het voorbeeld, kun je verder gaan.

**GA NIET VERDER** als er **BAD signature** in de uitvoer staat. Verwijder dan het bestand `hashes.txt` en ga terug naar [paragraaf 3.1](#31-get-hash-file).

## 4. Binary downloaden en verifiëren

In dit gedeelte leggen we uit hoe je de Monero-binary voor je besturingssysteem downloadt, de `SHA256`-hash van je download ophaalt en verifieert dat deze correct is.

### 4.1. Monero-binary ophalen

Op Windows of een Mac ga je naar [getmonero.org](https://getmonero.org/downloads/) en download je het juiste bestand voor je besturingssysteem. Sla het bestand op in je homedirectory. **Pak de bestanden nog niet uit.**

Op Linux kun je de opdrachtregelversie downloaden door de volgende opdracht op te geven:

```
wget -O monero-linux-x64-v0.12.0.0.tar.bz2 https://downloads.getmonero.org/cli/linux64
```

### 4.2. Binary verifiëren op Linux of Mac

De stappen op zowel Linux als Mac zijn hetzelfde. In een terminal bereken je de `SHA256`-hash van je gedownloade Monero-binary. Als voorbeeld gebruiken we hier het binaire bestand voor 64-bits Linux. Vervang `monero-gui-linux-x64-v0.12.0.0.tar.bz2` door de naam van het binaire bestand dat je hebt gedownload in [paragraaf 4.1](#41-get-monero-binary).

```
shasum -a 256 monero-gui-linux-x64-v0.12.0.0.tar.bz2
```

De uitvoer ziet er uit als volgt, maar met verschillende details per binair bestand. Je `SHA256`-hash moet overeenkomen met de hash in het bestand `hashes.txt` van je binaire bestand.

```
fb0f43387b31202f381c918660d9bc32a3d28a4733d391b1625a0e15737c5388  monero-gui-linux-x64-v0.12.0.0.tar.bz2
```

Als de hash **WEL** overeenkomt, ben je klaar met deze handleiding! Dan kun je de bestanden uitpakken en installeren.

**GA NIET VERDER** als de hash **NIET** overeenkomt. Verwijder dan de binary die je hebt gedowload en ga terug naar [paragraaf 4.1](#41-get-monero-binary).

### 4.3. Binary verifiëren op Windows

In een terminal bereken je de `SHA256`-hash van je gedownloade Monero-binary. Als voorbeeld gebruiken we hier het binaire bestand voor de 64-bits Windows GUI. Vervang `monero-gui-win-x64-v0.12.0.0.zip` door de naam van het binaire bestand dat je hebt gedownload in [paragraaf 4.1](#41-get-monero-binary).

```
certUtil -hashfile monero-gui-win-x64-v0.12.0.0.zip SHA256
```
De uitvoer ziet er uit als volgt, maar met verschillende details per binair bestand. Je `SHA256`-hash moet overeenkomen met de hash in het bestand `hashes.txt` van je binaire bestand.

```
SHA256 hash of file monero-gui-win-x64-v0.12.0.0.zip:
4b 9f 31 68 6e ca ad 97 cd b1 75 e6 57 4b f3 07 f8 d1 c4 10 42 78 25 f4 30 4c 21 da 8a ac 18 64
CertUtil: -hashfile command completed successfully.
```

Als de hash **WEL** overeenkomt, ben je klaar met deze handleiding! Dan kun je de bestanden uitpakken en installeren.

**GA NIET VERDER** als de hash **NIET** overeenkomt. Verwijder dan de binary die je hebt gedowload en ga terug naar [paragraaf 4.1](#41-get-monero-binary).
