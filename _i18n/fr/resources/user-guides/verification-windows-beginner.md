{% include disclaimer.html translated="yes" translationOutdated="yes" %}

Les fichiers binaires Monero devrait être vérifiés avant extraction, installation ou utilisation de l'application Monero. C'est l'unique manière de vous assurer que vous utilisez le binaire officiel Monero. Si vous recevez un binaire contrefait (p. ex. hameçonnage, HDM, etc.), suivre ce guide vous évitera de vous faire piéger.

Pour protéger l'intégrité des binaires, l'équipe Monero fournit une liste cryptographiquement signée de tous les hachages [SHA256](https://en.wikipedia.org/wiki/SHA-2). Si le binaire que vous avez téléchargé a été altéré il produira un [hachage différent](https://en.wikipedia.org/wiki/File_verification) de celui fourni dans le fichier.

Voici un guide pour débutant pour le système d'exploitation Windows qui s'appuiera presque exclusivement sur des interfaces graphiques (GUI). Il couvrira tout le processus d'installation des applications requises, d'import de la clef de signature, de téléchargement des fichiers nécessaires et enfin de vérification de l'authenticité de votre binaire.

## Table des matières

### [1. Installateur de Gpg4win](#1-utiliser-linstallateur-de-gpg4win)
  - [1.1. Obtenir l'Installateur de Gpg4win](#11-obtenir-linstallateur-de-gpg4win)
    + [1.1.1. Télécharger Gpg4win](#111-télécharger-gpg4win)
    + [1.1.2. Lancer Gpg4win](#112-lancer-gpg4win)
  - [1.2. Utiliser l'Installateur Gpg4win](#12-utiliser-linstallateur-gpg4win)
### [2. Importer la Clef de Signature](#2-clef-de-signature-monero)
  - [2.1. Télécharger la Clef de Signature](#21-télécharger-la-clef-de-signature)
  - [2.2. Initialiser Kleopatra](#22-initialiser-kleopatra)
    + [2.2.1. Importer une Clef de Signature](#221-importer-une-clef-de-signature)
    + [2.2.2. Créer la Paire de Clefs](#222-creer-la-paire-de-clefs)
  - [2.3. Vérifier la Clef de Signature](#23-vérifier-la-clef-de-signature)
### [3. Vérifier le Fichier de Hachage](#3-verification-du-fichier-de-hachage)
  - [3.1. Télécharger le Fichier de Hachage](#31-télécharger-le-fichier-de-hachage)
  - [3.2. Vérifier le Fichier de Hachage](#32-vérifier-le-fichier-de-hachage)
### [4. Vérifier le Fichier Binaire](#4-verification-du-fichier-binaire)
  - [4.1. Télécharger le Binaire](#41-télécharger-le-binaire)
  - [4.2. Vérifier le Binaire](#42-vérifier-le-binaire)

## 1. Utiliser l'Installateur de Gpg4win

Cette rubrique couvre l'installation de l'application de cryptographie. Windows n'est pas livré avec les outils nécessaire à la vérification de vos binaires. Pour installer ces outils vous pouvez utiliser l'installateur Gpg4win.

### 1.1. Obtenir l'Installateur de Gpg4win

#### 1.1.1. Télécharger Gpg4win

Dans un navigateur internet, rendez-vous sur la page [gpg4win.org](https://gpg4win.org) et téléchargez l'installateur en cliquant sur le bouton vert.

![bouton télécharger gpg4win](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-downloadbutton.png)

Vous serez redirigé vers une page de dons. Si vous ne souhaitez pas faire une donation, sélectionnez `$0`, puis vous pourrez cliquer sur `Télécharger` (`Download`).

![page de don site gpg4win](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-donation.png)

Cliquez sur `Enregistrer le Fichier` (`Save File`).

![enregistrer le fichier site gpg4win](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile.png)

Choisissez un emplacement pour le téléchargement et cliquez sur `Enregistrer` (`Save`).

![emplacement téléchargement site gpg4win](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile-location.png)

#### 1.1.2. Lancer Gpg4win

Lorsque le téléchargement est terminé, l'afficher dans le dossier.

![afficher dans le dossier site gpg4win](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile-openfolder.png)

Double-cliquez sur l'exécutable gpg4win téléchargé pour le lancer.

![lancement gpg4win](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-launch.png)

### 1.2. Utiliser l'Installateur Gpg4win

Un avertissement de sécurité vous sera présenté, cliquez sur `Exécuter`.

![sécurité installateur gpg4win](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-security.png)

Sélectionnez votre langue et cliquez sur `OK`.

![langue installateur gpg4win](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-language.png)

Un écran de bienvenue apparaitra, cliquez sur `Suivant`.

![bienvenue installateur gpg4win](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-welcome.png)

Vous verrez alors la fenêtre de sélection des composants. Vous devrez avoir au minimum `Kleopatra` de sélectionné pour ce guide. Faites votre choix et cliquez sur `Next`.

![composants installateur gpg4win](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-components.png)

Il vaut mieux laisser le dossier d'installation par défaut, à moins que vous sachiez ce que vous faites. Faites votre choix et cliquez sur `Installer`.

![emplacement installateur gpg4win](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install.png)

L'installation est terminée, cliquez sur `Suivant`.

![completion installateur gpg4win](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-complete.png)

Cliquez sur `Terminer`.

![fin installateur gpg4win](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-finish.png)

## 2. Clef de Signature Monero

Cette rubrique couvre le téléchargement de la clef de signature Monero, la vérification que cette clef est correcte et l'import de la clef dans votre trousseau. Le fichier de hachage qui sera utilisé pour vérifier votre binaire est signé cryptographiquement avec la clef de signature Monero. Afin de vérifier la validité de ce fichier vous devez disposer de la variante publique de cette clef de signature.

### 2.1. Télécharger la Clef de Signature

Dans un navigateur internet, rendez-vous sur [la clef GPG de Fluffypony](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/fluffypony.asc), qu'il utilise pour signer les binaires Monero. Faites un clic droit sur la page et choisissez `Enregistrer sous...`.

![clic droit getkey](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_getkey-rightclick.png)

Laissez l'emplacement par défaut et cliquez sur `Enregistrer`.

![getkey save file](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_getkey-savefilename.png)

### 2.2. Initialiser Kleopatra

S'il s'agit de votre première utilisation de Kleopatra vous devrez créer votre propre paire de clefs.

Lancez Kleopatra.

![lancement kleo](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-launch.png)

#### 2.2.1. Importer une Clef de Signature

Cliquez sur `Importer...`.

![import démarrage kleo](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-importkey.png)

Allez dans le répertoire  `téléchargements`, sélectionnez `fluffypony.asc` et cliquez sur `Ouvrir`.

![emplacement clef démarrage kleo](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-import-location.png)

Démarrez le processus de certification de la clef en cliquant sur `Oui`.

![certif process démarrage kleo](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-startverifyprocess.png)

#### 2.2.2. Créer la Paire de Clefs

Démarrez le processus de création de clefs en cliquant sur `Oui`.

![création clefs démarrage kleo](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeysnow.png)

Renseignez quelques information pour `Nom` et `Adresse électronique` et cliquez sur `suivant`.

![infos clefs démarrage kleo](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeydetails.png)

Vérifiez les informations et cliquez sur `Créer`.

![vérifier infos clefs démarrage kleo](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-verifykeydetails.png)

Définissez un mot de passe et cliquez sur `OK`.

![définir mdp démarrage kleo](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeys-pinentry.png)

Cliquez sur `Terminer`.

![fin création clefs démarrage kleo](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-keycreate-success.png)

### 2.3. Vérifier la Clef de Signature

Contrôlez visuellement que l'empreinte de la clef appartenant à Riccardo Spagni est `BDA6BD7042B721C467A9759D7455C5E3C0CDCEB9`.

![certifier empreinte kleo](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-certify-fingerprint.png)

Si l'empreinte **EST** identique, cochez les cases et cliquez sur `Certifier`.

Si l'empreinte **N'EST PAS** identique, **NE POURSUIVEZ PAS.** Au lieu de cela, supprimez le fichier `fluffypony.asc` du répertoire `téléchargements` et retournez à la [rubrique 2.1](#21-télécharger-la-clef-de-signature).

Entrez votre mot de passe et cliquer sur `OK`.

![certifier mdp kleo](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-certify-pinentry.png)

Cliquez sur `Terminer`.

## 3. Vérification du Fichier de Hachage

Cette rubrique couvre le téléchargement du fichier signé des hachages valides et la vérification de son authenticité.

### 3.1. Télécharger le Fichier de Hachage

Dans un navigateur internet, rendez-vous sur la [page de haches getmonero.org](https://getmonero.org/fr/downloads/hashes.txt). Faites un clic droit sur la page et sélectionnez `Enregistrer sous...`.

![clic droit hachages](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-getmonero-rightclick.png)

Laissez l'emplacement par défaut et cliquez sur `Enregistrer`.

![enregistrer fichier hachages](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-getmonero-savename.png)

### 3.2. Vérifier le Fichier de Hachage

Dans Kleopatra cliquez sur le bouton `Déchiffrer / vérifier...`.

![bouton vérifier kleo hachages](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-verify-button.png)

Allez dans le répertoire `téléchargements`. Sélectionnez le fichier `hashes` et cliquez sur `Ouvrir`.

![ouvrir fichier kleo hachages](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-verify-button-filename.png)

Kleopatra vous indiquera si la signature du fichier est légitime.

Si la signature est **VALABLE** vous verrez ceci :

![bonne signature kleo hachages](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-goodsig.png)

Si la signature est **NON VALABLE** vous verrez ceci :

![mauvaise signature kleo hachages](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-badsig.png)

Si vous obtenez une signature **VALABLE**, cliquez sur `Ne pas tenir compte` et poursuivez.

Si vous obtenez une signature **NON VALABLE**, **NE POURSUIVEZ PAS.** Au lieu de cela, supprimez le fichier `hashes` du répertoire `téléchargements` et retournez à la [rubrique 3.1](#31-télécharger-le-fichier-de-hachage).

## 4. Vérification du Fichier Binaire

Cette rubrique couvre le téléchargement du binaire Monero et la vérification de son authenticité.

### 4.1. Télécharger le Binaire

Dans un navigateur internet, rendez-vous sur la [page de téléchargement getmonero.org](https://getmonero.org/fr/downloads/#windows). Sélectionnez le binaire approprié à votre système.

![binaire getmonero](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-windowsfiles.png)

Laissez `Enregistrer` sélectionné et cliquez sur `OK`.

![enregistrer binaire getmonero](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-save-file.png)

Laissez l'emplacement par défaut et cliquez sur `Enregistrer`.

![emplacement enregistrement binaire getmonero](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-save-location.png)

### 4.2. Vérifier le Binaire

Dans un gestionnaire de fichier, allez dans le répertoire `Téléchargements`. Ouvrez le fichier `hashes` avec un traitement de texte.

![ouvrir hashes.txt binaire](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-word-hashfile.png)

Ouvrir une invite de commande (`cmd.exe`).

![lancer terminal binaire](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-launch.png)

Allez dans le répertoire `Downloads` avec la commande : `cd Downloads`.

![cd cmd binaire](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-cd.png)

Calculez le hachage du binaire Monero avec la commande : `certUtil -hashfile monero-gui-win-x64-v0.12.0.0.zip SHA256` (Si vous avez téléchargé la version ligne de commande, remplacez par `monero-gui-win-x64-v0.12.0.0.zip` en conséquence).

![certutil cmd binaire](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-certutil.png)

Comparez le hachage entre l'invite de commande et le fichier de hachage. Ils doivent être identiques (les espaces peuvent être ignorés).

![comparer hachages binaire](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-word-cmd-compare.png)

Si votre hachage **EST** identique vous en avez terminé avec la vérification ! Vous avez la certitude que les fichiers Monero sont authentiques. Vous pouvez extraire et installer / utiliser les fichiers normalement.

Si votre hachage **N'EST PAS** identique, **NE POURSUIVEZ PAS.** Au lieu de cela, supprimez le binaire Monero du répertoire `téléchargements` et retournez à la [rubrique 4.1](#41-télécharger-le-binaire).
