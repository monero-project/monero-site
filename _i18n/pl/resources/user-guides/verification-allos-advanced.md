{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="false" version=page.version %}
#  Binary Verification: Linux, Mac, or Windows Using CLI Tools (Advanced)

Verification of the Monero binary files should be done prior to extracting, installing, or using the Monero software. This is the only way to ensure that you are using the official Monero software. If you receive a fake Monero binary (eg. phishing, MITM, etc.), following this guide will protect you from being tricked into using it.

To protect the integrity of the binaries the Monero team provides a cryptographically signed list of all the [SHA256](https://en.wikipedia.org/wiki/SHA-2) hashes. If your downloaded binary has been tampered with it will be produce a [different hash](https://en.wikipedia.org/wiki/File_verification) than the one in the file.

This is an advanced guide for Linux, Mac, or Windows operating systems and will make use of the command line. It will walk you through the process of installing the required software, importing the signing key, downloading the necessary files, and finally verifying that your binary is authentic.

## Table of Contents:

### [1. Install GnuPG](#1-installing-gnupg)
### [2. Verify & Import Signing Key](#2-verify-and-import-signing-key)
  + [2.1. Get Signing Key](#21-get-signing-key)
  + [2.2. Verify Signing key](#22-verify-signing-key)
  + [2.3. Import Signing key](#23-import-signing-key)
### [3. Download & Verify Hash File](#3-download-and-verify-hash-file)
  + [3.1. Get Hash File](#31-get-hash-file)
  + [3.2. Verify Hash File](#32-verify-hash-file)
### [4. Download & Verify Binary](#4-download-and-verify-binary)
  + [4.1. Get Monero Binary](#41-get-monero-binary)
  + [4.2. Binary Verification on Linux or Mac](#42-binary-verification-on-linux-or-mac)
  + [4.3. Binary Verification on Windows](#43-binary-verification-on-windows)

## 1. Installing GnuPG

+ On Windows, go to the [Gpg4win download page](https://gpg4win.org/download.html) and follow the instructions for installation.

+ On Mac, go to the [Gpgtools download page](https://gpgtools.org/) and follow the instructions for installation.

+ On Linux, GnuPG is installed by default.

## 2. Verify and Import Signing Key

This section will cover getting the Monero signing key, making sure it is correct, and importing the key to GnuPG.

### 2.1. Get Signing Key

On Windows or Mac, go to [Fluffypony's GPG key](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/fluffypony.asc), which he uses to sign the Monero binaries, and save the page as `fluffypony.asc` to your home directory.

On Linux, you can download Fluffypony's signing key by issuing the following command:

```
wget -O fluffypony.asc https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/fluffypony.asc
```

### 2.2. Verify Signing Key

On all operating systems, check the fingerprint of `fluffypony.asc` by issuing the following command in a terminal:

```
gpg --keyid-format long --with-fingerprint fluffypony.asc
```


Verify the fingerprint matches:

```
pub  2048R/7455C5E3C0CDCEB9 2013-04-08 Riccardo Spagni <ric@spagni.net>
      Key fingerprint = BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9
sub  2048R/55432DF31CCD4FCD 2013-04-08
```

If the fingerprint **DOES** match, then you may proceed.

If the fingerprint **DOES NOT** match, **DO NOT CONTINUE.** Instead delete the file `fluffypony.asc` and go back to [section 2.1](#21-get-signing-key).

### 2.3. Import Signing Key

From a terminal, import the signing key:

```
gpg --import fluffypony.asc
```

If this is the first time you have imported the key, the output will look like this:

```
gpg: key 0x7455C5E3C0CDCEB9: 2 signatures not checked due to missing keys
gpg: key 0x7455C5E3C0CDCEB9: public key "Riccardo Spagni <ric@spagni.net>" importe
d
gpg: Total number processed: 1
gpg:               imported: 1
gpg: no ultimately trusted keys found
```

If you have imported the key previously, the output will look like this:

```
gpg: key 0x7455C5E3C0CDCEB9: "Riccardo Spagni <ric@spagni.net>" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
```

## 3. Download and Verify Hash File

This section will cover downloading the hash file and verifying its authenticity.

### 3.1. Get Hash File

On Windows or Mac, go to the [hashes file on getmonero.org](https://getmonero.org/downloads/hashes.txt) and save the page as `hashes.txt` to your home directory.

On Linux, you can download the signed hashes file by issuing the following command:

```
wget -O hashes.txt https://getmonero.org/downloads/hashes.txt
```

### 3.2. Verify Hash File

The hash file is signed with key `94B7 38DD 3501 32F5 ACBE  EA1D 5543 2DF3 1CCD 4FCD`, which is a subkey of key `BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9` (as reflected in the output below).

On all operating systems, verify the signature of the hash file by issuing the following command in a terminal:

```
gpg --verify hashes.txt
```

If the file is authentic, the output will look like this:

```
gpg: Signature made Thu 05 Apr 2018 06:07:35 AM MDT
gpg:                using RSA key 94B738DD350132F5ACBEEA1D55432DF31CCD4FCD
gpg: Good signature from "Riccardo Spagni <ric@spagni.net>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9
     Subkey fingerprint: 94B7 38DD 3501 32F5 ACBE  EA1D 5543 2DF3 1CCD 4FCD
```

If your output shows **Good signature**, as in the example, then you may proceed.

If you see **BAD signature** in the output, **DO NOT CONTINUE.** Instead delete the file `hashes.txt` and go back to [section 3.1](#31-get-hash-file).

## 4. Download and Verify Binary

This section will cover downloading the Monero binary for your operating system, getting the `SHA256` hash of your download, and verifying that it is correct.

### 4.1. Get Monero binary

On Windows or Mac, go to [getmonero.org](https://getmonero.org/downloads/) and download the correct file for your operating system. Save the file to your home directory. **Do not extract the files yet.**

On Linux, you can download the command line tools by issuing the following command:

```
wget -O monero-linux-x64-v0.12.0.0.tar.bz2 https://downloads.getmonero.org/cli/linux64
```

### 4.2. Binary Verification on Linux or Mac

The steps for both Linux and Mac are the same. From a terminal, get the `SHA256` hash of your downloaded Monero binary. As an example this guide will use the `Linux, 64bit` GUI binary. Substitute `monero-gui-linux-x64-v0.12.0.0.tar.bz2` with the name of the binary that you downloaded in [section 4.1](#41-get-monero-binary).

```
shasum -a 256 monero-gui-linux-x64-v0.12.0.0.tar.bz2
```

The output will look like this, but will be different for each binary file. Your `SHA256` hash should match the one listed in the `hashes.txt` file for your binary file.

```
fb0f43387b31202f381c918660d9bc32a3d28a4733d391b1625a0e15737c5388  monero-gui-linux-x64-v0.12.0.0.tar.bz2
```

If your hash **DOES** match, then you are finished with the guide! You can extract the files and install.

If your hash **DOES NOT** match, **DO NOT CONTINUE.** Instead delete the binary you downloaded and go back to [section 4.1](#41-get-monero-binary).

### 4.3. Binary Verification on Windows

From a terminal, get the `SHA256` hash of your downloaded Monero binary. As an example this guide will use the `Windows, 64bit` GUI binary. Substitute `monero-gui-win-x64-v0.12.0.0.zip` with the name of the binary that you downloaded in [section 4.1](#41-get-monero-binary).

```
certUtil -hashfile monero-gui-win-x64-v0.12.0.0.zip SHA256
```
The output will look like this, but will be different for each binary file. Your `SHA256` hash should match the one listed in the `hashes.txt` file for your binary file.

```
SHA256 hash of file monero-gui-win-x64-v0.12.0.0.zip:
4b 9f 31 68 6e ca ad 97 cd b1 75 e6 57 4b f3 07 f8 d1 c4 10 42 78 25 f4 30 4c 21 da 8a ac 18 64
CertUtil: -hashfile command completed successfully.
```

If your hash **DOES** match, then you are finished with the guide! You can extract the files and install.

If your hash **DOES NOT** match, **DO NOT CONTINUE.** Instead delete the binary you downloaded and go back to [section 4.1](#41-get-monero-binary).
