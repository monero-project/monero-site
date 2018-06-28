#  Vérifier des binaires : Outils CLI pour Linux, Mac ou (Avancé)

Les fichiers binaires Monero devrait être vérifiés avant extraction, installation ou utilisation de l'application Monero. C'est l'unique manière de vous assurer que vous utilisez le binaire officiel Monero. Si vous recevez un binaire contrefait (p. ex. hameçonnage, HDM, etc.), suivre ce guide vous évitera de vous faire piéger.

Pour protéger l'intégrité des binaires, l'équipe Monero fournit une liste cryptographiquement signée de tous les hachages [SHA256](https://en.wikipedia.org/wiki/SHA-2). Si le binaire que vous avez téléchargé a été altéré il produira un [hachage différent](https://en.wikipedia.org/wiki/File_verification) de celui fourni dans le fichier.

Voici un guide avancé pour les systèmes d'exploitation Linux, Mac et Windows qui s'appuiera sur des lignes de commandes (CLI). Il couvrira tout le processus d'installation des applications requises, d'import de la clef de signature, de téléchargement des fichiers nécessaires et enfin de vérification de l'authenticité de votre binaire.

## Table des matières

### [1. Installer GnuPG](#1-installation-de-gnupg)
### [2. Vérifier & Importer la Clef de Signature](#2-vérifier-et-importer-la-clef-de-signature)
  + [2.1. Obtenir la Clef de Signature](#21-obtenir-la-clef-de-signature)
  + [2.2. Vérifier la Clef de Signature](#22-vérifier-la-clef-de-signature)
  + [2.3. Importer la Clef de Signature](#23-importer-la-clef-de-signature)

### [3. Télécharger & Vérifier le Fichier de Hachage](#3-télécharger-et-vérifier-le-fichier-de-hachage)
  + [3.1. Télécharger le Fichier de Hachage](#31-télécharger-le-fichier-de-hachage)
  + [3.2. Vérifier le Fichier de Hachage](#32-vérifier-le-fichier-de-hachage)

### [4.Télécharger & Vérifier les binaires](#4-télécharger-et-vérifier-les-binaires)
  + [4.1. Télécharger les binaires Monero](#41-télécharger-les-binaires-monero)
  + [4.2. Vérifier les binaires sur Linux et Mac](#42-vérifier-les-binaires-sur-linux-et-mac)
  + [4.3. Vérifier les binaires sur Windows](#43-vérifier-les-binaires-sur-windows)

## 1. Installation de GnuPG

+ Sur Windows, rendez-vous sur la [page de téléchargement de Gpg4win](https://gpg4win.org/download.html) et suivez les instructions d'installation.

+ Sur Mac, rendez-vous sur la [page de téléchargement de Gpgtools](https://gpgtools.org/) et suivez les instructions d'installation.

+ Sur Linux, GnuPG est installé par défaut.

## 2. Vérifier et Importer la Clef de Signature

Cette rubrique couvre le téléchargement de la clef de signature Monero, la vérification que cette clef est correcte et l'import de la clef dans GnuPG.

### 2.1. Obtenir la Clef de Signature

Sur Windows et Mac, rendez-vous sur [la clef GPG de Fluffypony](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/fluffypony.asc), qu'il utilise pour signer les binaires Monero et sauvegardez la page sous `fluffypony.asc` dans votre répertoire utilisateur.

Sur Linux, vous pouvez télécharger la clef de signature de Fluffypony en tapant la commande suivante :

```
wget -O fluffypony.asc https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/fluffypony.asc
```

### 2.2. Vérifier la Clef de Signature

Sur l'ensemble des systèmes d'exploitation, vérifiez l'empreinte de `fluffypony.asc` en tapant la commande suivante dans un terminal :

```
gpg --keyid-format long --with-fingerprint fluffypony.asc
```


Vérifiez que l'empreinte est bien :

```
pub  2048R/7455C5E3C0CDCEB9 2013-04-08 Riccardo Spagni <ric@spagni.net>
      Key fingerprint = BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9
sub  2048R/55432DF31CCD4FCD 2013-04-08
```

Si l'empreinte **EST** identique, vous pouvez continuer.

Si l'empreinte **N'EST PAS** identique, **NE POURSUIVEZ PAS.** Au lieu de cela, supprimez le fichier `fluffypony.asc` et retournez à la [rubrique 2.1](#21-obtenir-la-clef-de-signature).

### 2.3. Importer la Clef de Signature

Depuis un terminal, importez la clef de signature :

```
gpg --import fluffypony.asc
```

Si c'est la première fois que vous importez la clef, la sortie ressemblera à ceci :

```
gpg: key 0x7455C5E3C0CDCEB9: 2 signatures not checked due to missing keys
gpg: key 0x7455C5E3C0CDCEB9: public key "Riccardo Spagni <ric@spagni.net>" importe
d
gpg: Total number processed: 1
gpg:               imported: 1
gpg: no ultimately trusted keys found
```

Si vous avez déjà importé la clef précédemment, la sortie ressemblera à cela :

```
gpg: key 0x7455C5E3C0CDCEB9: "Riccardo Spagni <ric@spagni.net>" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
```

## 3. Télécharger et Vérifier le Fichier de Hachage

Cette rubrique couvre le téléchargement du fichier signé des hachages valides et la vérification de son authenticité.

### 3.1. Télécharger le Fichier de Hachage

Sur Windows et Mac, rendez-vous sur sur la [page de haches getmonero.org](https://getmonero.org/fr/downloads/hashes.txt) et sauvegardez la page sous `hashes.txt` dans votre répertoire utilisateur.

Sur Linux, vous pouvez télécharger le fichier de hachage en tapant la commande suivante :

```
wget -O hashes.txt https://getmonero.org/downloads/hashes.txt
```

### 3.2. Vérifier le Fichier de Hachage

Le fichier de hachage est signé avec la clef `94B7 38DD 3501 32F5 ACBE  EA1D 5543 2DF3 1CCD 4FCD`, qui est une sous-clef de la clef `BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9` (comme vous pouvez le voir dans la sortie ci-dessous).

Sur tous les systèmes d'exploitations, vérifiez la signature du fichier de hachage en tapant la commande suivante dans un terminal :

```
gpg --verify hashes.txt
```

Si le fichier est authentique, la sortie ressemblera à ceci :

```
gpg: Signature made Thu 05 Apr 2018 06:07:35 AM MDT
gpg:                using RSA key 94B738DD350132F5ACBEEA1D55432DF31CCD4FCD
gpg: Good signature from "Riccardo Spagni <ric@spagni.net>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9
     Subkey fingerprint: 94B7 38DD 3501 32F5 ACBE  EA1D 5543 2DF3 1CCD 4FCD
```

Si votre sortie affiche **Good signature** comme dans l'exemple, alors vous pouvez continuer.

Si vous voyez **BAD signature** dans la sortie, **NE POURSUIVEZ PAS.** Au lieu de cela, supprimez le fichier `hashes.txt` et retournez à la [rubrique 3.1](#31-télécharger-le-fichier-de-hachage).

## 4. Télécharger et Vérifier les binaires

Cette rubrique couvre le téléchargement du binaire Monero pour votre système d'exploitation, la récupération du hachage `SHA256` de votre téléchargement et la vérification de son authenticité.

### 4.1. Télécharger les binaires Monero

Sur Windows et Mac, rendez-vous sur [getmonero.org](https://getmonero.org/fr/downloads/) et téléchargez le fichier correspondant à votre système d'exploitation. enregistrez ce fichier dans votre répertoire utilisateur. **N'extrayez pas les fichiers pour le moment.**

Sur Linux, vous pouvez télécharger les outils ligne de commande avec la commande suivante :

```
wget -O monero-linux-x64-v0.12.2.0.tar.bz2 https://downloads.getmonero.org/cli/linux64
```

### 4.2. Vérifier les binaires sur Linux et Mac

Les étapes pour Linux et Mac sont les mêmes. Depuis un terminal, récupérez le hachage `SHA256` du binaire Monero téléchargé. A titre d'exemple, ce guide utilisera le binaire GUI `Linux, 64bit`. Remplacez `monero-gui-linux-x64-v0.12.0.0.tar.bz2` par le nom du binaire que vous aurez téléchargé dans la [rubrique 4.1](#41-télécharger-les-binaires-monero).

```
shasum -a 256 monero-gui-linux-x64-v0.12.0.0.tar.bz2
```

La sortie ressemblera à ceci, mais sera différente pour chaque binaire. Votre hachage `SHA256` deoit correspondre à celui indiqué dans le fichier `hashes.txt` pour votre binaire.

```
fb0f43387b31202f381c918660d9bc32a3d28a4733d391b1625a0e15737c5388  monero-gui-linux-x64-v0.12.0.0.tar.bz2
```

Si votre hachage **EST** identique vous en avez terminé avec la vérification ! Vous pouvez extraire et installer les fichiers.

Si votre hachage **N'EST PAS** identique, **NE POURSUIVEZ PAS.** Au lieu de cela, supprimez le binaire que vous avez téléchargé et retournez à la [rubrique 4.1](#41-télécharger-les-binaires-monero).

### 4.3. Vérifier les binaires sur Windows

Depuis un terminal, récupérez le hachage `SHA256` du binaire Monero téléchargé. A titre d'exemple, ce guide utilisera le binaire GUI `Windows, 64bit`. Remplacez `monero-gui-win-x64-v0.12.0.0.zip` par le nom du binaire que vous aurez téléchargé dans la [rubrique 4.1](#41-télécharger-les-binaires-monero).

```
certUtil -hashfile monero-gui-win-x64-v0.12.0.0.zip SHA256
```

La sortie ressemblera à ceci, mais sera différente pour chaque binaire. Votre hachage `SHA256` deoit correspondre à celui indiqué dans le fichier `hashes.txt` pour votre binaire.

```
SHA256 hash of file monero-gui-win-x64-v0.12.0.0.zip:
4b 9f 31 68 6e ca ad 97 cd b1 75 e6 57 4b f3 07 f8 d1 c4 10 42 78 25 f4 30 4c 21 da 8a ac 18 64
CertUtil: -hashfile command completed successfully.
```

Si votre hachage **EST** identique vous en avez terminé avec la vérification ! Vous pouvez extraire et installer les fichiers.

Si votre hachage **N'EST PAS** identique, **NE POURSUIVEZ PAS.** Au lieu de cela, supprimez le binaire que vous avez téléchargé et retournez à la [rubrique 4.1](#41-télécharger-les-binaires-monero).
