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

Op Windows of een Mac: ga naar [Fluffypony's GPG-sleutel](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/binaryfate.asc), waarmee hij de Monero-binaries ondertekent, en sla de pagina op als `binaryfate.asc` in je homedirectory.

Op Linux kun je de ondertekeningssleutel van binaryFate downloaden door de volgende opdracht op te geven:

```
wget -O binaryfate.asc https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/binaryfate.asc
```

### 2.2. Ondertekeningssleutel verifiëren

Op alle besturingssystemen kun je de vingerafdruk van `binaryfate.asc` controleren door de volgende opdracht te geven in een terminal:

```
gpg --keyid-format long --with-fingerprint binaryfate.asc
```


Controleer of de vingerafdruk overeenkomt:

```
pub   rsa4096/F0AF4D462A0BDF92 2019-12-12 [SCEA]
      Key fingerprint = 81AC 591F E9C4 B65C 5806  AFC3 F0AF 4D46 2A0B DF92
uid                           binaryFate <binaryfate@getmonero.org>
```

Als de vingerafdruk **WEL** overeenkomt, kun je verder gaan.

**GA NIET VERDER** als de vingerafdruk **NIET** overeenkomt. Verwijder dan het bestand `binaryfate.asc` en ga terug naar [paragraaf 2.1](#21-get-signing-key).

### 2.3. Ondertekeningssleutel importeren

Importeer de ondertekeningssleutel in een terminal:

```
gpg --import binaryfate.asc
```

Als dit de eerste keer is dat je de sleutel hebt geïmporteerd, ziet de uitvoer er als volgt uit:

```
gpg: key F0AF4D462A0BDF92: 2 signatures not checked due to missing keys
gpg: key F0AF4D462A0BDF92: public key "binaryFate <binaryfate@getmonero.org>" imported
gpg: Total number processed: 1
gpg:               imported: 1
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
```

Als je de sleutel eerder hebt geïmporteerd, ziet de uitvoer er als volgt uit:

```
gpg: key F0AF4D462A0BDF92: "binaryFate <binaryfate@getmonero.org>" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
```

## 3. Hashbestand downloaden en verifiëren

In dit gedeelte leggen we uit hoe je het hashbestand downloadt en de authenticiteit verifieert.

### 3.1. Hashbestand ophalen

Op Windows of een Mac ga je naar het [hashbestand op getmonero.org]({{ site.baseurl }}/downloads/hashes.txt) en sla je de pagina op als `hashes.txt` in je homedirectory.

Op Linux kun je het ondertekende hashbestand downloaden door de volgende opdracht op te geven:

```
wget -O hashes.txt {{ site.baseurl }}/downloads/hashes.txt
```

### 3.2. Hashbestand verifiëren

Het hashbestand is ondertekend met de sleutel `81AC 591F E9C4 B65C 5806  AFC3 F0AF 4D46 2A0B DF92`, zoals weergegeven in de uitvoer hieronder.

Op alle besturingssystemen kun je de ondertekening van het hasbestand controleren door de volgende opdracht te geven in een terminal:

```
gpg --verify hashes.txt
```

Als het bestand authentiek is, ziet de uitvoer er als volgt uit:

```
gpg:                using RSA key 81AC591FE9C4B65C5806AFC3F0AF4D462A0BDF92
gpg: Good signature from "binaryFate <binaryfate@getmonero.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 81AC 591F E9C4 B65C 5806  AFC3 F0AF 4D46 2A0B DF92
```

Als er **Good signature** in de uitvoer staat, zoals in het voorbeeld, kun je verder gaan.

**GA NIET VERDER** als er **BAD signature** in de uitvoer staat. Verwijder dan het bestand `hashes.txt` en ga terug naar [paragraaf 3.1](#31-get-hash-file).

## 4. Binary downloaden en verifiëren

In dit gedeelte leggen we uit hoe je de Monero-binary voor je besturingssysteem downloadt, de `SHA256`-hash van je download ophaalt en verifieert dat deze correct is.

### 4.1. Monero-binary ophalen

Op Windows of een Mac ga je naar [getmonero.org]({{ site.baseurl }}/downloads/) en download je het juiste bestand voor je besturingssysteem. Sla het bestand op in je homedirectory. **Pak de bestanden nog niet uit.**

Op Linux kun je de opdrachtregelversie downloaden door de volgende opdracht op te geven:

```
wget -O monero-linux-x64-v0.15.0.1.tar.bz2 https://downloads.getmonero.org/cli/linux64
```

### 4.2. Binary verifiëren op Linux of Mac

De stappen op zowel Linux als Mac zijn hetzelfde. In een terminal bereken je de `SHA256`-hash van je gedownloade Monero-binary. Als voorbeeld gebruiken we hier het binaire bestand voor 64-bits Linux. Vervang `monero-gui-linux-x64-v0.15.0.1.tar.bz2` door de naam van het binaire bestand dat je hebt gedownload in [paragraaf 4.1](#41-get-monero-binary).

```
shasum -a 256 monero-linux-x64-v0.15.0.1.tar.bz2
```

De uitvoer ziet er uit als volgt, maar met verschillende details per binair bestand. Je `SHA256`-hash moet overeenkomen met de hash in het bestand `hashes.txt` van je binaire bestand.

```
8d61f992a7e2dbc3d753470b4928b5bb9134ea14cf6f2973ba11d1600c0ce9ad  monero-linux-x64-v0.15.0.1.tar.bz2
```

Als de hash **WEL** overeenkomt, ben je klaar met deze handleiding! Dan kun je de bestanden uitpakken en installeren.

**GA NIET VERDER** als de hash **NIET** overeenkomt. Verwijder dan de binary die je hebt gedowload en ga terug naar [paragraaf 4.1](#41-get-monero-binary).

### 4.3. Binary verifiëren op Windows

In een terminal bereken je de `SHA256`-hash van je gedownloade Monero-binary. Als voorbeeld gebruiken we hier het binaire bestand voor de 64-bits Windows GUI. Vervang `monero-gui-win-x64-v0.12.0.0.zip` door de naam van het binaire bestand dat je hebt gedownload in [paragraaf 4.1](#41-get-monero-binary).

```
certUtil -hashfile monero-gui-win-x64-v0.15.0.1.zip SHA256
```
De uitvoer ziet er uit als volgt, maar met verschillende details per binair bestand. Je `SHA256`-hash moet overeenkomen met de hash in het bestand `hashes.txt` van je binaire bestand.

```
SHA256 hash of file monero-gui-win-x64-v0.12.0.0.zip:
4b 9f 31 68 6e ca ad 97 cd b1 75 e6 57 4b f3 07 f8 d1 c4 10 42 78 25 f4 30 4c 21 da 8a ac 18 64
CertUtil: -hashfile command completed successfully.
```

Als de hash **WEL** overeenkomt, ben je klaar met deze handleiding! Dan kun je de bestanden uitpakken en installeren.

**GA NIET VERDER** als de hash **NIET** overeenkomt. Verwijder dan de binary die je hebt gedowload en ga terug naar [paragraaf 4.1](#41-get-monero-binary).
