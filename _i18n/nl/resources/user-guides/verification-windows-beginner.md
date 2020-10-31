{% include disclaimer.html translated="yes" translationOutdated="yes" %}

Voordat je de Monero-software uitpakt, installeert en gebruikt, moet je de binaire bestanden van Monero verifiëren. Dit is de enige manier om er zeker van te zijn dat je de officiële Monero-binaries gebruikt. Als je een onecht binair bestand ontvangt (bijvoorbeeld via phishing of een *man-in-the-middle attack*), voorkomt deze methode dat je er gebruik van maakt.

Het Monero-team stelt een cryptografisch ondertekende lijst beschikbaar met alle [SHA256](https://en.wikipedia.org/wiki/SHA-2)-hashes, om de integriteit van de binaries te garanderen. Als er met het gedownloade binaire bestand is geknoeid, levert het een [andere hash](https://nl.wikipedia.org/wiki/Hashfunctie) op dan in de lijst.

Dit is een handleiding voor beginners die Windows als besturingssysteem gebruiken. Bijna alle gebruikte software heeft een grafische interface. We leggen stap voor stap uit hoe je de vereiste software installeert, de ondertekeningssleutel importeert, de benodigde bestanden downloadt en uiteindelijk verifieert dat je binaire bestand authentiek is.

## Inhoud

### [1. Gpg4win-installatieprogramma](#1-using-gpg4win-installer)
  - [1.1. Gpg4win-installatieprogramma ophalen](#11-getting-gpg4win-installer)
    + [1.1.1. Gpg4win downloaden](#111-download-gpg4win)
    + [1.1.2. Gpg4win starten](#112-launch-gpg4win)
  - [1.2. Gpg4win-installatieprogramma gebruiken](#12-use-gpg4win-installer)
### [2. Ondertekeningssleutel importeren](#2-monero-signing-key)
  - [2.1. Ondertekeningssleutel downloaden](#21-download-signing-key)
  - [2.2. Kleopatra initialiseren](#22-initialize-kleopatra)
    + [2.2.1. Ondertekeningssleutel importeren](#221-import-signing-key)
    + [2.2.2. Sleutelpaar aanmaken](#222-create-key-pair)
  - [2.3. Ondertekeningssleutel verifiëren](#23-verify-signing-key)
### [3. Hashbestand verifiëren](#3-hash-file-verification)
  - [3.1. Hashbestand downloaden](#31-download-hash-file)
  - [3.2. Hashbestand verifiëren](#32-verify-hash-file)
### [4. Binair bestand verifiëren](#4-binary-file-verification)
  - [4.1. Binary downloaden](#41-download-binary)
  - [4.2. Binary verifiëren](#42-verify-binary)

## 1. Gpg4win-installatieprogramma gebruiken

In dit gedeelte leggen we uit hoe je de cryptografische software gebruikt. De hulpmiddelen die je nodig hebt om binaries te verifiëren worden niet meegeleverd met Windows. Met het Gpg4win-installatieprogramma kun je deze tools installeren.

### 1.1. Gpg4win-installatieprogramma ophalen

#### 1.1.1. Gpg4win downloaden

Ga in een browser naar [gpg4win.org](https://gpg4win.org) en download het installatieprogramma door op de groene knop te klikken.

![downloadknop gpg4win](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-downloadbutton.png)

Er wordt een donatiepagina geopend. Als je niets wilt doneren, selecteer je `$0`. Daarna kun je op `Download` klikken.

![gpg4win site donatie](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-donation.png)

Klik op `Bestand opslaan`.

![gpg4win site bestand opslaan](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile.png)

Kies een opslaglocatie en klik op `Opslaan`.

![gpg4win site locatie download](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile-location.png)

#### 1.1.2. Gpg4win starten

Open de map met het bestand wanneer het downloaden klaar is.

![gpg4win site map openen](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile-openfolder.png)

Dubbelklik op het uitvoerbare bestand gpg4win.exe om het te starten.

![gpg4win starten](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-launch.png)

### 1.2. Gpg4win-installatieprogramma gebruiken

Er wordt een scherm met een beveiligingswaarschuwing weergegeven. Klik hier op `Uitvoeren`.

![gpg4win installatie beveiliging](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-security.png)

Selecteer je taal en klik op `OK`.

![gpg4win installatie taal](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-language.png)

Er wordt een welkomstscherm weergegeven. Klik op `Volgende`.

![gpg4win installatie welkom](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-welcome.png)

Nu krijg je een scherm te zien voor het selecteren van onderdelen. Laat in ieder geval `Kleopatra` aangevinkt staan voor deze handleiding. Geef je keuze aan en klik op `Volgende`.

![gpg4win installatie onderdelen](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-components.png)

Je kunt het beste de standaard-installatielocatie laten staan, tenzij je weet wat je doet. Geef je keuze aan en klik op `Installeren`.

![gpg4win installatie locatie](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install.png)

De installatie is voltooid. Klik op `Volgende`.

![gpg4win installatie voltooid](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-complete.png)

Klik op `Finish`.

![gpg4win installatie voltooien](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-finish.png)

## 2. Monero-ondertekeningssleutel

In dit gedeelte leggen we uit hoe je de Monero-ondertekeningssleutel downloadt, verifieert dat de sleutel correct is en de sleutel importeert in je sleutelring. Het hashbestand wordt gebruikt om te verifiëren dat je binaire bestand cryptografisch is ondertekend met de Monero-ondertekeningssleutel. Om de geldigheid van dit hashbestand te controleren heb je de openbare versie van de ondertekeningssleutel nodig.

### 2.1. Ondertekeningssleutel downloaden

Ga in een browser naar de [de GPG-sleutel van Fluffypony](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/fluffypony.asc), waarmee hij de Monero-binaries ondertekent. Klik met de rechtermuisknop op de pagina en klik vervolgens op `Pagina opslaan als`.

![sleutel ophalen contextmenu](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_getkey-rightclick.png)

Laat de standaardlocatie staan en klik op `Opslaan`.

![sleutel ophalen bestand opslaan](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_getkey-savefilename.png)

### 2.2. Kleopatra initialiseren

Als dit de eerste keer is dat je Kleopatra gebruikt, moet je een sleutelpaar voor jezelf maken.

Start Kleopatra.

![kleo starten](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-launch.png)

#### 2.2.1. Ondertekeningssleutel importeren

Klik op `Importeren`.

![kleo eerste keer importeren](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-importkey.png)

Open de map `Downloads`, selecteer `fluffypony` en klik op `Openen`.

![kleo eerste keer locatie sleutel](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-import-location.png)

Start het certificeren van de sleutel door op `Ja` te klikken.

![kleo eerste keer proces starten](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-startverifyprocess.png)

#### 2.2.2. Sleutelpaar aanmaken

Start het aanmaken van de sleutel door op `Ja` te klikken.

![kleo eerste keer sleutel aanmaken starten](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeysnow.png)

Vul iets in voor `Naam` en `E-mail` en klik op `Volgende`.

![kleo eerste keer gegevens sleutel](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeydetails.png)

Verifieer de details en klik op `Aanmaken`.

![kleo eerste keer gegevens sleutel verifiëren](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-verifykeydetails.png)

Stel een wachtwoord in en klik op `OK`.

![kleo eerste keer wachtwoord sleutel instellen](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeys-pinentry.png)

Klik op `Finish`.

![kleo eerste keer sleutel aanmaken voltooien](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-keycreate-success.png)

### 2.3. Ondertekeningssleutel verifiëren

Controleer visueel dat de sleutel van Riccardo Spagni de vingerafdruk `BDA6BD7042B721C467A9759D7455C5E3C0CDCEB9` heeft.

![kleo vingerafdruk certificeren](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-certify-fingerprint.png)

Klik op `Certify` als de vingerafdruk **WEL** overeenkomt.

**GA NIET VERDER** als de vingerafdruk van deze sleutel **NIET** overeenkomt. Verwijder dan het bestand `fluffypony` uit de map `Downloads` en ga terug naar [paragraaf 2.1](#21-download-signing-key).

Voer je wachtwoord in en klik op `OK`.

![kleo certificeren wachtwoord](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-certify-pinentry.png)

Klik op `Finish`.

## 3. Hashbestand verifiëren

In dit gedeelte leggen we uit hoe je het ondertekende bestand met bekende goede hashes downloadt en de authenticiteit verifieert.

### 3.1. Hashbestand downloaden

Ga in een browser naar de [hashpagina op getmonero.org]({{ site.baseurl }}/downloads/hashes.txt). Klik met de rechtermuisknop op de pagina en klik vervolgens op `Pagina opslaan als`.

![hashes contextmenu](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-getmonero-rightclick.png)

Laat de standaardlocatie staan en klik op `Opslaan`.

![hashes bestand opslaan](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-getmonero-savename.png)

### 3.2. Hashbestand verifiëren

Klik in Kleopatra op de knop `Ontcijferen/verifiëren`.

![hashes kleo knop verifiëren](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-verify-button.png)

Ga naar de map `Downloads`. Selecteer het bestand `hashes` en klik op `Openen`.

![hashes kleo bestand openen](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-verify-button-filename.png)

Kleopatra geeft nu aan of de ondertekening van de bestanden geldig is.

Als de ondertekening **GELDIG** is, zie je het volgende:

![hashes kleo goede handtekening](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-goodsig.png)

Als de ondertekening **ONGELDIG** is, zie je het volgende:

![hashes kleo foute handtekening](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-badsig.png)

Als je een **GELDIGE** ondertekening hebt ontvangen, klik je op `Discard` en ga je verder.

**GA NIET VERDER** als je een **ONGELDIGE** ondertekening hebt ontvangen. Verwijder dan het bestand `hashes` uit de map `Downloads` en ga terug naar [paragraaf 3.1](#31-download-hash-file).

## 4. Binair bestand verifiëren

In dit gedeelte leggen we uit hoe je de Monero-binary downloadt en de authenticiteit verifieert.

### 4.1. Binary downloaden

Ga in een browser naar de [downloadpagina op getmonero.org]({{ site.baseurl }}/downloads/#windows). Selecteer het juiste binaire bestand voor je systeem.

![binary getmonero](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-windowsfiles.png)

Laat `Bestand opslaan` ingeschakeld en klik op `OK`.

![binary getmonero opslaan](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-save-file.png)

Laat de standaardlocatie staan en klik op `Opslaan`.

![binary getmonero opslaan locatie](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-save-location.png)

### 4.2. Binary verifiëren

Ga in een bestandenverkenner naar de map `Downloads`. Open het bestand `hashes` in een tekstverwerker.

![binary hashes.txt openen](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-word-hashfile.png)

Open een opdrachtregel (`cmd.exe`).

![binary opdrachtregel openen](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-launch.png)

Ga naar de map `Downloads` met de opdracht: `cd Downloads`.

![binary cmd cd](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-cd.png)

Bereken de hash van de Monero-binary met de opdracht: `certUtil -hashfile monero-gui-win-x64-v0.11.1.0.zip SHA256` (of vervang `monero-gui-win-x64-v0.11.1.0.zip` door een andere bestandsnaam als je de opdrachtregelversie hebt gedownload).

![binary cmd certutil](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-certutil.png)

Vergelijk de hash in de opdrachtregel met de hash in het hashbestand. De hashes horen hetzelfde te zijn. De spaties kun je negeren.

![binary hashes vergelijken](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-word-cmd-compare.png)

Als de hash **WEL** overeenkomt, ben je klaar met de verificatie! Dan ben je er zeker van dat de Monero-bestanden die je hebt ontvangen authentiek zijn. Je kunt de bestanden verder op de normale manier uitpakken, installeren en gebruiken.

**GA NIET VERDER** als de hash **NIET** overeenkomt. Verwijder dan de Monero-binary uit de map `Downloads` en ga terug naar [paragraaf 4.1](#41-download-binary).
