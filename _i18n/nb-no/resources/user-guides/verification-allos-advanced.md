{% include disclaimer.html translated="yes" translationOutdated="no" %}

Verifisering av Monero-binærfilene bør gjøres i forkant av utpakking,
installering eller bruk av Monero-programvaren. Dette er den eneste måten å
sikre at du bruker den offisielle Monero-programvaren. Hvis du mottar en
falsk Monero-binærfil (f.eks. phishing, MITM osv.), vil denne veiledningen
hindre deg fra å bli lurt til å bruke den.

For å beskytte integriteten til binærfilene, gir Monero-teamet en
kryptografisk signert liste over alle
[SHA256](https://en.wikipedia.org/wiki/SHA-2)-hashene. Hvis din nedlastede
binærfil har blitt tuklet med, produserer den en [forskjellig
hash](https://en.wikipedia.org/wiki/File_verification) enn den i filen.

Dette er en avansert veiledning for Linux, Mac, eller Windows som gjør bruk
at kommandolinjen. Den leder deg gjennom prosessen av å installere den
nødvendige programvaren, importering av signaturnøkkelen, nedlasting av de
nødvendige filene, og til slutt verifisering av at binærfilene dine er
autentiske.

## Table of Contents:

### - [Install GnuPG](#installing-gnupg)

### - [Verify & Import Signing Key](#verify-and-import-signing-key)

### - [Download & Verify Hash File](#download-and-verify-hash-file)

### - [Download & Verify Binary](#download-and-verify-binary)

## Installing GnuPG

+ På Windows, gå til
[Gpg4win-nedlastingssiden](https://gpg4win.org/download.html) og følg
anvisningene for installasjon.

+ På Mac, gå til [Gpgtools-nedlastingssiden](https://gpgtools.org/) og følg
anvisningene for installasjon.

+ GnuPG installert som standard på Linux.

## Verify and Import Signing Key

Denne delen tar for seg hvordan man får tak i Monero-signaturnøkkelen,
hvordan man sikrer at den er riktig og hvordan man importerer nøkkelen til
GnuPG.

### Get Signing Key

På Windows eller Mac, gå til [binaryFates GPG
key](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/binaryfate.asc),
som han bruker til å signere Monero-binærfilene, og lagre siden som
`binaryfate.asc` til hjemkatalogen din.

På Linux kan du laste ned binaryFates signaturnøkkel ved å eksekvere
følgende kommando:

```
wget -O binaryfate.asc
https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/binaryfate.asc
```

### Verify Signing Key

På alle operativsystemer, kan du sjekke fingeravtrykket til `binaryfate.asc`
ved å eksekvere følgende kommando i en terminal:

``` gpg --keyid-format long --with-fingerprint binaryfate.asc ```


Verifiser fingeravtrykkene:

```
pub   rsa4096/F0AF4D462A0BDF92 2019-12-12 [SCEA]
      Key fingerprint = 81AC 591F E9C4 B65C 5806  AFC3 F0AF 4D46 2A0B DF92
uid                           binaryFate <binaryfate@getmonero.org>
```

Dersom fingeravtrykket **MATCHER**, kan du fortsette.

Dersom fingeravtrykket **IKKE MATCHER**, **IKKE FORTSETT.** Slett istedenfor
`binaryfate.asc`-filen og gå tilbake til [seksjon 2.1](#21-get-signing-key).

### Import Signing Key

Fra en terminal, importer signaturnøkkel:

``` gpg --import binaryfate.asc ```

Hvis dette er første gang du har importert nøkkelen, vil utdataen se ut noe
som dette:

```
gpg: key F0AF4D462A0BDF92: 2 signatures not checked due to missing keys
gpg: key F0AF4D462A0BDF92: public key "binaryFate <binaryfate@getmonero.org>" imported
gpg: Total number processed: 1
gpg:               imported: 1
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
```

Hvis du tidligere har importert nøkkelen, vil utdataen se slik ut:

```
gpg: key F0AF4D462A0BDF92: "binaryFate <binaryfate@getmonero.org>" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
```

## Download and Verify Hash File

Denne delen tar for seg nedlasting av hash-filen og å verifisere at den er
autentisk.

### Get Hash File

På Windows eller Mac, gå til [hashes-filen på getmonero.org]({{
site.baseurl_root }}/downloads/hashes.txt) og lagre siden som `hashes.txt`
til hjemkatalogen.

På Linux kan du laste ned filen med de signerte hashene ved å eksekvere
følgende kommando:

``` wget -O hashes.txt https://www.getmonero.org/downloads/hashes.txt ```

### Verify Hash File

Hashfilen signeres med nøkkelen `81AC 591F E9C4 B65C 5806 AFC3 F0AF 4D46
2A0B DF92`, som det framgår i utdataen under.

På alle operativsystemer kan du verifisere signaturen av hash-filen ved å
eksekvere følgende kommando i en terminal:

``` gpg --verify hashes.txt ```

Hvis filen er autentisk, vil utdataen se slik ut:

```
gpg:                using RSA key 81AC591FE9C4B65C5806AFC3F0AF4D462A0BDF92
gpg: Good signature from "binaryFate <binaryfate@getmonero.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 81AC 591F E9C4 B65C 5806  AFC3 F0AF 4D46 2A0B DF92
```

Dersom utdataen viser **Good signature**, som i eksempelet, kan du
fortsette.

Dersom du ser **BAD signature** i utdataen, **IKKE FORTSETT.** Slett
istedenfor `hashes.txt`-filen og gå tilbake til [seksjon
3.1](#31-get-hash-file).

## Download and Verify Binary

Denne delen tar for seg nedlasting av Monero-binærfilen for operativsystemet
ditt, å få `SHA256`-hashen til nedlastingen din, og å verifisere at den er
autentisk.

### Get Monero binary

On Windows or Mac, go to [getmonero.org]({{ site.baseurl_root }}/downloads/)
and download the correct file for your operating system. Save the file to
your home directory. **Do not extract the files yet.**

På Linux kan du laste ned kommandolinjeverktøyene ved å eksekvere følgende
kommando:

```
wget -O monero-linux-x64-v0.15.0.1.tar.bz2 https://downloads.getmonero.org/cli/linux64
```

### Binary Verification on Linux or Mac

Trinnene for både Linux og Mac er de samme. Fra en terminal, få
`SHA256`-hashen til den nedlastede Monero-binærfilen din. Som et eksempel
vil denne veiledningen bruke `Linux, 64bit`-GUI-binærfilen. Bytt ut
`monero-gui-linux-x64-v0.15.0.1.tar.bz2` med navnet på binærfilen som du
lastet ned i [seksjon 4.1](#41-get-monero-binary).

```
shasum -a 256 monero-linux-x64-v0.15.0.1.tar.bz2
```

Utdataen vil se slik ut, men den vil være forskjellige for hver
binærfil. Din `SHA256`-hash bør matche den som er oppført i
`hashes.txt`-filen for din binærfil.

```
8d61f992a7e2dbc3d753470b4928b5bb9134ea14cf6f2973ba11d1600c0ce9ad 
monero-linux-x64-v0.15.0.1.tar.bz2
```

Dersom hashen din **MATCHER**, er du ferdig med veiledningen! Du kan pakke
ut filene og installere.

Dersom hashen din **IKKE MATCHER**, **IKKE FORTSETT.** Slett i stedet
binærfilen du lastet ned og gå tilbake til [seksjon
4.1](#41-get-monero-binary).

### Binary Verification on Windows

Åpne en terminal og få `SHA256`-hash til din nedlastede Monero-binærfil. Som
et eksempel, vil denne veiledningen bruke `Windows,
64bit`-GUI-binærfilen. Bytt ut `monero-gui-win-x64-v0.15.0.1.zip` med navnet
på binæren som du lastet ned i [seksjon 4.1](#41-get-monero-binary).

``` certUtil -hashfile monero-gui-win-x64-v0.15.0.1.zip SHA256 ```

Utdataen vil se slik ut, men den vil være forskjellige for hver
binærfil. Din `SHA256`-hash bør matche den som er oppført i
`hashes.txt`-filen for din binærfil.

```
SHA256 hash of file monero-gui-win-x64-v0.12.0.0.zip: 4b 9f 31 68 6e ca
ad 97 cd b1 75 e6 57 4b f3 07 f8 d1 c4 10 42 78 25 f4 30 4c 21 da 8a ac 18
64 CertUtil: -hashfile command completed successfully. 
```

Dersom hashen din **MATCHER**, er du ferdig med veiledningen! Du kan pakke
ut filene og installere.

Dersom hashen din **IKKE MATCHER**, **IKKE FORTSETT.** Slett i stedet
binærfilen du lastet ned og gå tilbake til [seksjon
4.1](#41-get-monero-binary).
