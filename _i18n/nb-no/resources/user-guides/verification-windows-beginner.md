{% include disclaimer.html translated="yes" translationOutdated="no" %}

Verifisering av Monero-binærfilene bør gjøres i forkant av utpakking av filer, installering eller bruk av Monero-programvaren. Dette er den eneste måten å sikre at du bruker den offisielle Monero-binærfilen. Hvis du mottar en falsk binærfil (f.eks. ved phishing, MITM osv.), vil denne guiden beskytte deg fra å bli lurt til å bruke den.

For å beskytte integriteten til binærene, gir Monero-teamet en kryptografisk signert liste over alle [SHA256](https://en.wikipedia.org/wiki/SHA-2)-hashene. Hvis dine nedlastede binærfiler har blitt tuklet med, vil den produsere en [forskjellig hash](https://en.wikipedia.org/wiki/File_verification) fra den i filen.

Dette er en nybegynnerguide for Windows-operativsystemene og gjør nesten utelukkende bruk av GUI-er. Den leder deg gjennom prosessen av å installere den nødvendige programvaren, importere signeringsnøkkelen, nedlasting av de nødvendige filene og avslutningsvis å verifisere at binærfilene dine er autentiske.

## Innholdsfortegnelse

### [1. Bruk av Gpg4win-installatøren](#1-using-gpg4win-installer)
  - [1.1. Hvordan få tak i Gpg4win-installatøren](#11-getting-gpg4win-installer)
    + [1.1.1. Nedlasting av Gpg4win](#111-download-gpg4win)
    + [1.1.2. Oppstart av Gpg4win](#112-launch-gpg4win)
  - [1.2. Bruk av Gpg4win-installatøren](#12-use-gpg4win-installer)
### [2. Import av signeringsnøkkel](#2-monero-signing-key)
  - [2.1. Nedlasting av signeringsnøkkel](#21-download-signing-key)
  - [2.2. Initialisering av Kleopatra](#22-initialize-kleopatra)
    + [2.2.1. Import av signeringsnøkkel](#221-import-signing-key)
    + [2.2.2. Oppretting av nøkkelpar](#222-create-key-pair)
  - [2.3. Verifisering av signeringsnøkkel](#23-verify-signing-key)
### [3. Verifisering av hash-fil](#3-hash-file-verification)
  - [3.1. Nedlasting av hash-fil](#31-download-hash-file)
  - [3.2. Verifisering av hash-fil](#32-verify-hash-file)
### [4. Verifisering av binærfil](#4-binary-file-verification)
  - [4.1. Nedlasting av binærfiler](#41-download-binary)
  - [4.2. Verifisering av binærfiler](#42-verify-binary)

## 1. Bruk av Gpg4win-installatøren

Denne seksjonen tar for seg installasjon av den kryptografiske programvaren. Windows kommer ikke med de nødvendige verktøyene for å verifisere binærene dine. Du kan bruke Gpg4win-installatøren for å installere disse verktøyene.

### 1.1. Hvordan få tak i Gpg4win-installatøren

#### 1.1.1. Nedlasting av Gpg4win

Gå til [gpg4win.org](https://gpg4win.org) i nettleseren og last ned installatøren ved å trykke på den grønne knappen.

![gpg4win download button](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-downloadbutton.png)

Du vil tas til en donasjonsside. Hvis du ikke ønsker å donere, velger du `$0`, og deretter vil du kunne trykke på `Download` (Last ned).

![gpg4win donation site](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-donation.png)

Trykk på `Lagre filen`.

![gpg4win site save file](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile.png)

Velg et sted å laste ned filen til og trykk på `Lagre`.

![gpg4win site download site](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile-location.png)

#### 1.1.2. Oppstart av Gpg4win

Når nedlastingen er ferdig, kan du åpne mappen som filen ligger i.

![gpg4win site open folder](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile-openfolder.png)

Dobbeltklikk på den nedlastede, eksekverbare gpg4win-filen for å starte den.

![gpg4win launch](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-launch.png)

### 1.2. Bruk av Gpg4win-installatøren

Du vil bli fremlagt en sikkerhetsverifiseringsskjerm. Trykk på `Kjør`.

![gpg4win install security](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-security.png)

Velg språket ditt og trykk på `OK`.

![gpg4win install language](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-language.png)

En velkomstskjerm vil dukke opp. Trykk på `Neste`.

![gpg4win install welcome](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-welcome.png)

Nå vil du se skjermen med komponentutvalg. Du må minst huke av `Kleopatra` for denne guiden. Angi valgene dine og trykk på `Neste`.

![gpg4win install components](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-components.png)

Det er best å la det standard installasjonsstedet være som det er, med mindre du vet hva du gjør. Angi valgene dine og trykk deretter på `Installer`.

![gpg4win install location](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install.png)

Installasjonen er fullført. Trykk på `Neste`.

![gpg4win install completed](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-complete.png)

Trykk på `Ferdig`.

![gpg4win install completed](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-finish.png)

## 2. Monero-signeringsnøkkel

Denne seksjonen tar for seg nedlasting av Monero-signeringsnøkkelen, verifisering av at nøkkelen er riktig, og deretter import av nøkkelen til nøkkelringen din. Hash-filen som brukes til å verifisere binærfilene dine er kryptografisk signert med Monero-signeringsnøkkelen. For å kontrollere gyldigheten av denne filen, trenger du den offentlige versjonen av signeringsnøkkelen.

### 2.1. Nedlasting av signeringsnøkkel

Åpne nettleseren og gå til [binaryFates GPG key](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/binaryfate.asc), som han bruker for å signere Monero-binærer. Høyreklikk på siden og velg `Lagre side som`.

![getkey right click](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_getkey-rightclick.png)

La standardplasseringen være som den er og trykk på `Lagre`.

![getkey save file](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_getkey-savefilename.png)

### 2.2. Initialisering av Kleopatra

Hvis dette er første gang du bruker Kleopatra, må du opprette et nøkkelpar for deg selv.

Start Kleopatra.

![kleo launch](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-launch.png)

#### 2.2.1. Import av signeringsnøkkel

Trykk på `Import`.

![kleo firstrun import](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-importkey.png)

Gå inn i `Nedlastinger`-katalogen, velg `binaryfate`, og trykk på `Åpne`.

![kleo firstrun key location](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-import-location.png)

Start prosessen av å sertifisere nøkkelen ved å trykke på `Ja`.

![kleo firstrun start process](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-startverifyprocess.png)

#### 2.2.2. Oppretting av nøkkelpar

Start prosessen av nøkkelopprettelsen ved å trykke på `Ja`.

![kleo firstrun start key creation](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeysnow.png)

Legg inn noen detaljer under `Navn` og `E-post`, og trykk på `Neste`.

![kleo firstrun key details](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeydetails.png)

Verifiser detaljene og trykk på `Opprett`.

![Verifisering av nøkkeldetaljer for kleo firstrun](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-verifykeydetails.png)

Angi et passord og trykk på `OK`.

![kleo firstrun set key pass](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeys-pinentry.png)

Trykk på `Ferdig`.

![kleo firstrun finish create key](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-keycreate-success.png)

### 2.3. Verifisering av signeringsnøkkel

Sjekk visuelt at fingeravtrykket til nøkkelen som tilhører binaryFate er `81AC591FE9C4B65C5806AFC3F0AF4D462A0BDF92`.

![kleo certify fingerprint](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-certify-fingerprint.png)

Hvis fingeravtrykket **MATCHER**, trykk på `Sertifiser`.

Dersom fingeravtrykket til denne nøkkelen **IKKE MATCHER**, **IKKE FORTSETT**. Slett i stedet `binaryfate`-filen fra `Nedlastinger`-katalogen og gå tilbake til [seksjon 2.1](#21-download-signing-key).

Skriv inn passordet ditt og trykk på `OK`.

![kleo certify pass](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-certify-pinentry.png)

Trykk på `Ferdig`.

## 3. Verifisering av hash-fil

Denne seksjonen tar for seg nedlasting av den signerte filen med et kjent antall gode hasher og verifisering av dens autentisitet.

### 3.1. Nedlasting av hash-fil

Åpne en nettleser og gå til [hash-siden til getmonero.org]({{ site.baseurl_root }}/downloads/hashes.txt). Høyreklikk på siden og velg `Lagre siden som`.

![hashes right click](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-getmonero-rightclick.png)

La standardplasseringen være som den er og trykk på `Lagre`.

![hashes save file](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-getmonero-savename.png)

### 3.2. Verifisering av hash-fil

Trykk på `Decrypt/Verify`-knappen i Kleopatra.

![hashes kleo verify button](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-verify-button.png)

Naviger til `Nedlastinger`-katalogen. Velg `hashes`-filen, og trykk på `Åpne`.

![hashes kleo open file](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-verify-button-filename.png)

Kleopatra vil informere deg hvorvidt filsignaturen er gyldig.

Hvis signaturen er **GYLDIG**, vil du se dette:

![hashes kleo goodsig](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-goodsig.png)

Hvis signaturen er **UGYLDIG**, vil du se dette:

![hashes kleo badsig](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-badsig.png)

Hvis du mottar en **GYLDIG** signatur, trykk på `Forkast` og gå videre.

Hvis du mottar en **UGYLDIG** signatur, **IKKE FORTSETT.** Slett i stedet `hashes`-filen fra `Nedlastinger`-katalogen og gå tilbake til [seksjon 3.1](#31-download-hash-file).

## 4. Verifisering av binærfil

Denne seksjonen tar for seg nedlasting av Monero-binærfilene og verifisering av dens autentisitet.

### 4.1. Nedlasting av binærfiler

Åpne nettleseren og gå til [nedlastingssiden på getmonero.org]({{ site.baseurl_root }}/downloads/#windows). Velg den riktige binærfilen for systemet ditt.

![binary getmonero](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-windowsfiles.png)

La `Lagre fil` være huket av og trykk på `OK`.

![binary getmonero save](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-save-file.png)

La standardplasseringen være som den er og trykk på `Lagre`.

![binary getmonero save location](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-save-location.png)

### 4.2. Verifisering av binærfiler

I en filbehandler kan du navigere til `Nedlastinger`-katalogen. Åpne `hashes`-filen med et tekstbehandlingsprogram.

![binary open hashes.txt](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-word-hashfile.png)

Åpne en terminal (`cmd.exe`).

![binary launch term](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-launch.png)

Endre stien til `Nedlastinger`-katalogen med kommandoen: `cd Nedlastinger`.

![binary cmd cd](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-cd.png)

Beregn hashen til Monero-binærfilen med kommandoen: `certUtil -hashfile monero-gui-win-x64-v0.16.0.2.zip SHA256` (dersom du lastet ned en «kun kommandolinje»-versjon, bytt ut `monero-gui-win-x64-v0.16.0.2.zip` deretter).

![binary cmd certutil](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-certutil.png)

Sammenlikn hashen fra terminalen med den i hash-filen. De bør være like (du kan se bort fra mellomrom).

![binary compare hashes](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-word-cmd-compare.png)

Dersom hashen din **MATCHER**, er du ferdig med verifiseringen! Du kan være sikker på at Monero-filene du har er autentiske. Du kan pakke dem ut og installere/bruke filene som normalt.

Dersom hashen din **IKKE MATCHER**, **IKKE FORTSETT.** Slett i stedet Monero-binærfilen fra `Nedlastinger`-katalogen og gå tilbake til [seksjon 4.1](#41-download-binary).
