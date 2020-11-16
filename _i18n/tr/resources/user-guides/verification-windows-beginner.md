{% include disclaimer.html translated="no" translationOutdated="no" %}

Verification of the Monero binary files should be done prior to extracting, installing, or using the Monero software. This is the only way to ensure that you are using the official Monero binary. If you receive a fake binary (eg. phishing, MITM, etc.), following this guide will protect you from being tricked into using it.

To protect the integrity of the binaries the Monero team provides a cryptographically signed list of all the [SHA256](https://en.wikipedia.org/wiki/SHA-2) hashes. If your downloaded binary has been tampered with it will be produce a [different hash](https://en.wikipedia.org/wiki/File_verification) than the one in the file.

This is a beginners guide for the Windows operating system and will make use of GUIs almost exclusively. It will walk you through the process of installing the required software, importing the signing key, downloading the necessary files, and finally verifying that your binary is authentic.

## Table of Contents

### [1. Gpg4win Installer](#1-using-gpg4win-installer)
  - [1.1. Getting Gpg4win Installer](#11-getting-gpg4win-installer)
    + [1.1.1. Download Gpg4win](#111-download-gpg4win)
    + [1.1.2. Launch Gpg4win](#112-launch-gpg4win)
  - [1.2. Use Gpg4win Installer](#12-use-gpg4win-installer)
### [2. Import Signing Key](#2-monero-signing-key)
  - [2.1. Download Signing Key](#21-download-signing-key)
  - [2.2. Initialize Kleopatra](#22-initialize-kleopatra)
    + [2.2.1. Import Signing Key](#221-import-signing-key)
    + [2.2.2. Create Key Pair](#222-create-key-pair)
  - [2.3. Verify Signing Key](#23-verify-signing-key)
### [3. Verify Hash File](#3-hash-file-verification)
  - [3.1. Download Hash File](#31-download-hash-file)
  - [3.2. Verify Hash File](#32-verify-hash-file)
### [4. Verify Binary File](#4-binary-file-verification)
  - [4.1. Download Binary](#41-download-binary)
  - [4.2. Verify Binary](#42-verify-binary)

## 1. Using Gpg4win Installer

This section will cover installing the cryptography software. Windows does not come with the tools required to verify your binary. To install these tools you can use the Gpg4win installer.

### 1.1. Getting Gpg4win Installer

#### 1.1.1. Download Gpg4win

In a web browser, go to [gpg4win.org](https://gpg4win.org) and download the installer by clicking the green button.

![gpg4win download button](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-downloadbutton.png)

You will be taken to a donation page. If you do not wish to donate select `$0`, then you will be able to click `Download`.

![gpg4win site donation](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-donation.png)

Click `Save File`.

![gpg4win site save file](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile.png)

Choose a download location, click `Save`.

![gpg4win site download location](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile-location.png)

#### 1.1.2. Launch Gpg4win

When the download is finished, open the containing folder.

![gpg4win site open folder](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile-openfolder.png)

Double click the downloaded gpg4win executable to launch.

![gpg4win launch](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-launch.png)

### 1.2. Use Gpg4win Installer

You will be presented with a security verification screen, click `Run`.

![gpg4win installer security](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-security.png)

Select your language, click `OK`.

![gpg4win installer language](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-language.png)

A welcome screen will appear, click `Next`.

![gpg4win installer welcome](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-welcome.png)

Now you will see the component selection screen, you must at least leave `Kleopatra` checked for this guide. Make your selections, click `Next`.

![gpg4win installer components](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-components.png)

It is best to leave the default installation location unless you know what you are doing. Make your selections, click `Install`.

![gpg4win installer location](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install.png)

Installation has completed, click `Next`.

![gpg4win installer complete](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-complete.png)

Click `Finish`.

![gpg4win installer finish](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-finish.png)

## 2. Monero Signing Key

This section will cover downloading the Monero signing key, verifying that the key is correct, and then importing the key to your keyring. The hash file that will be used to verify your binary is cryptographically signed with the Monero signing key. In order to check the validity of this file you must have the public version of the signing key.

### 2.1. Download Signing Key

In a web browser, go to [binaryFate's GPG key](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/binaryfate.asc), which he uses for signing the Monero binaries. Right click on the page, choose `Save Page As`.

![getkey right click](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_getkey-rightclick.png)

Leave the default location, click `Save`.

![getkey save file](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_getkey-savefilename.png)

### 2.2. Initialize Kleopatra

If this is your first time using Kleopatra you will have to create a key pair for yourself.

Launch Kleopatra.

![kleo launch](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-launch.png)

#### 2.2.1. Import Signing Key

Click `Import`.

![kleo firstrun import](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-importkey.png)

Enter the directory `Downloads`, select `binaryfate`, and click `Open`.

![kleo firstrun key location](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-import-location.png)

Start the process of certifying the key by clicking `Yes`.

![kleo firstrun start process](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-startverifyprocess.png)

#### 2.2.2. Create Key Pair

Start the process of key creation by clicking `Yes`.

![kleo firstrun start key create](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeysnow.png)

Fill in some details for `Name` and `Email`, click `Next`.

![kleo firstrun key details](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeydetails.png)

Verify details, click `Create`.

![kleo firstrun verify key details](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-verifykeydetails.png)

Set a password, click `OK`.

![kleo firstrun set key pass](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeys-pinentry.png)

Click `Finish`.

![kleo firstrun finish create key](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-keycreate-success.png)

### 2.3. Verify Signing Key

Visually check that the fingerprint of the key belonging to binaryFate is `81AC591FE9C4B65C5806AFC3F0AF4D462A0BDF92`.

![kleo certify fingerprint](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-certify-fingerprint.png)

If the fingerprint **DOES** match, click `Certify`.

If the fingerprint of this key **DOES NOT** match, **DO NOT CONTINUE**. Instead delete the file `binaryfate` from the `Downloads` directory and go back to [section 2.1](#21-download-signing-key).

Enter your password, click `OK`.

![kleo certify pass](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-certify-pinentry.png)

Click `Finish`.

## 3. Hash File Verification

This section will cover downloading the signed file of known good hashes and verifying its authenticity.

### 3.1. Download Hash File

In a web browser, go to the [getmonero.org hash page]({{ site.baseurl_root }}/downloads/hashes.txt). Right click the page, select `Save Page As`.

![hashes right click](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-getmonero-rightclick.png)

Leave the default location, click `Save`.

![hashes save file](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-getmonero-savename.png)

### 3.2. Verify Hash File

In Kleopatra, click the `Decrypt/Verify` button.

![hashes kleo verify button](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-verify-button.png)

Navigate to `Downloads` directory. Select `hashes` file, click `Open`.

![hashes kleo open file](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-verify-button-filename.png)

Kleopatra will inform you if the files signature is valid.

If the signature is **VALID** you will see this:

![hashes kleo goodsig](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-goodsig.png)

If the signature is **INVALID** you will see this:

![hashes kleo badsig](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-badsig.png)

If you receive a **VALID** signature, click `Discard` and move on.

If you receive an **INVALID** signature, **DO NOT CONTINUE.** Instead delete the file `hashes` from the `Downloads` directory and go back to [section 3.1](#31-download-hash-file).

## 4. Binary File Verification

This section will cover downloading the Monero binary and verifying its authenticity.

### 4.1. Download Binary

In a web browser, go to the [getmonero.org downloads page]({{ site.baseurl_root }}/downloads/#windows). Select the correct binary for your system.

![binary getmonero](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-windowsfiles.png)

Leave `Save File` selected, click `OK`.

![binary getmonero save](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-save-file.png)

Leave the default location, click `Save`.

![binary getmonero save location](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-save-location.png)

### 4.2. Verify Binary

In a file manager, navigate to `Downloads` directory. Open the file `hashes` with a word processor.

![binary open hashes.txt](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-word-hashfile.png)

Open a terminal (`cmd.exe`).

![binary launch term](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-launch.png)

Change to the `Downloads` directory with the command: `cd Downloads`.

![binary cmd cd](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-cd.png)

Calculate the hash of the Monero binary with the command: `certUtil -hashfile monero-gui-win-x64-v0.16.0.2.zip SHA256` (if you downloaded a command-line only version, replace `monero-gui-win-x64-v0.16.0.2.zip` accordingly).

![binary cmd certutil](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-certutil.png)

Compare the hash from the terminal with the one in the hash file. They should be the same (spaces can be ignored).

![binary compare hashes](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-word-cmd-compare.png)

If your hash **DOES** match then you are finished with verification! You can be sure the Monero files you have are authentic. You may extract and install/use the files normally.

If your hash **DOES NOT** match **DO NOT CONTINUE.** Instead delete the Monero binary from the `Downloads` directory and go back to [section 4.1](#41-download-binary).
