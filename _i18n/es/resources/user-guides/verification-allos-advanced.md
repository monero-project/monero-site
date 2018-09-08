{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
#  Verificación de Binarios: Linux, Mac, o Windows Usando las herramientas de la Consola de Comandos (Avanzado)

La verificación de los archivos binarios de Monero debería ser hecha antes de extraer, instalar o usar el software Monero. Esta es la única forma de asegurar que estás utilizando software oficial de Monero. Si recibes un falso binario Monero (e.g. phishing, MITM, entre otros), seguir esta guía te protegerá de ser engañado en usarlo.

Para proteger la integridad de los binarios el equipo de Monero provee con una lista criptográficamente firmada de todos los hashes [SHA256](https://en.wikipedia.org/wiki/SHA-2). Si tus binarios descargados han sido manipulados producirán un [hash diferente](https://en.wikipedia.org/wiki/File_verification) al que está en el archivo.

Esta es una guía avanzada para sistemas operativos Linux, Mac o Windows y hace uso de la consola de comandos. Te llevará por el proceso de instalar software requerido, importar la clave de firma, descargar los archivos necesarios, y finalmente verificar que tu binario es auténtico.

## Tabla de Contenidos:

### [1. Instalar GnuPG](#1-installing-gnupg)
### [2. Verificar e Importar Clave de Firma](#2-verify-and-import-signing-key)
  + [2.1. Obtener Clave de Firma](#21-get-signing-key)
  + [2.2. Verificar Clave de Firma](#22-verify-signing-key)
  + [2.3. Importar Clave de Firma](#23-import-signing-key)
### [3. Descargar y Verificar Archivo Hash](#3-download-and-verify-hash-file)
  + [3.1. Obtener Archivo Hash](#31-get-hash-file)
  + [3.2. Verificar Archivo Hash](#32-verify-hash-file)
### [4. Descargar y Verificar Binarios](#4-download-and-verify-binary)
  + [4.1. Obtener Binarios Monero](#41-get-monero-binary)
  + [4.2. Verificación de Binarios en Linux o Mac](#42-binary-verification-on-linux-or-mac)
  + [4.3. Verificación de Binarios en Windows](#43-binary-verification-on-windows)

## 1. Instalar GnuPG

+ En Windows, Ve a la página de descargas de [Gpg4win](https://gpg4win.org/download.html) y sigue las instrucciones para instalación.

+ En Mac, ve a la página de descargas de [Gpgtools](https://gpgtools.org/) y sigue las instrucciones para instalación.

+ En Linux, GnuPG ya está instalado por defecto.

## 2. Verificar e Importar Clave de Firma

Esta sección cubre la obtención de la clave de firma Monero, asegurar que sea correcta e importar la clave a GnuPG.

### 2.1. Obtener Clave de Firma

En Windows o Mac, ve a la [clave GPG de Fluffypony](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/fluffypony.asc), que utiliza para firmar los binarios Monero, y guarda la página como `fluffypony.asc` en tu directorio de inicio.

En Linux, puedes descargar la clave de firma de Fluffypony utilizando el siguiente comando:

```
wget -O fluffypony.asc https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/fluffypony.asc
```

### 2.2. Verificar la Clave de Firma

En todos los sistemas operativos, revisa la huella de `fluffypony.asc` utilizando el siguiente comando en una terminal:

```
gpg --keyid-format long --with-fingerprint fluffypony.asc
```

Verifica que la huella coincida:

```
pub  2048R/7455C5E3C0CDCEB9 2013-04-08 Riccardo Spagni <ric@spagni.net>
      Key fingerprint = BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9
sub  2048R/55432DF31CCD4FCD 2013-04-08
```

Si la firma **SÍ** coincide, entonces puedes continuar.

Si la firma **NO** coincide, **NO CONTINÚES.** En su lugar borra el archivo `fluffypony.asc` y regresa a la [sección 2.1](#21-get-signing-key).

### 2.3. Importar la Clave de Firma

Desde una terminal, importa la clave de firma:

```
gpg --import fluffypony.asc
```

Si es la primera vez que importas la clave, la salida se verá como esto:

```
gpg: key 0x7455C5E3C0CDCEB9: 2 signatures not checked due to missing keys
gpg: key 0x7455C5E3C0CDCEB9: public key "Riccardo Spagni <ric@spagni.net>" imported
gpg: Total number processed: 1
gpg:               imported: 1
gpg: no ultimately trusted keys found
```

Si ya has importado la clave previamente, la salida se verá como esto:

```
gpg: key 0x7455C5E3C0CDCEB9: "Riccardo Spagni <ric@spagni.net>" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
```

## 3. Descargar y Verificar el Archivo Hash

Esta sección cubre la descarga y verificación de autenticidad del archivo hash.

### 3.1. Obtener el Archivo Hash

En Windows o Mac, ve a los [archivos hash en getmonero.org](https://getmonero.org/downloads/hashes.txt) y guarda la página como `hashes.txt` en tu directorio de inicio.

En Linux, puedes descargar los hashes firmados utilizando el siguiente comando:

```
wget -O hashes.txt https://getmonero.org/downloads/hashes.txt
```

### 3.2. Verificar el Archivo Hash

El archivo hash está firmado con la clave `94B7 38DD 3501 32F5 ACBE  EA1D 5543 2DF3 1CCD 4FCD`, Que es una sub clave de `BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9` (como se observa en la salida abajo).

En todos los sistemas operativos, verifica la firma del archivo hash utilizando el siguiente comando en una terminal:

```
gpg --verify hashes.txt
```

Si el archivo es auténtico, la salida se verá como esto:

```
gpg: Signature made Thu 05 Apr 2018 06:07:35 AM MDT
gpg:                using RSA key 94B738DD350132F5ACBEEA1D55432DF31CCD4FCD
gpg: Good signature from "Riccardo Spagni <ric@spagni.net>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9
     Subkey fingerprint: 94B7 38DD 3501 32F5 ACBE  EA1D 5543 2DF3 1CCD 4FCD
```

Si la salida muestra **Good signature**, como en el ejemplo, puedes continuar.

Si ves **BAD signature** en la salida, **NO CONTINÚES.** En su lugar, borra el archivo `hashes.txt` y regresa a la [sección 3.1](#31-get-hash-file).

## 4. Descargar y Verificar Binarios

Esta sección cubrirá la descarga de los binarios Monero para tu sistema operativo, la obtención del hash `SHA256` para tu descarga, y verificar que este sea correcto.

### 4.1. Obtener Binarios Monero

En Windows o Mac, ve a [getmonero.org](https://getmonero.org/downloads/) y descarga el archivo correcto para tu sistema operativo. Guarda el archivo en tu directorio de inicio. **Aún no extraigas los archivos.**
On Windows or Mac, go to [getmonero.org](https://getmonero.org/downloads/) and download the correct file for your operating system. Save the file to your home directory. **Do not extract the files yet.**

En Linux, puedes descargar las herramientas de consola de comandos utilizando el siguiente comando:

```
wget -O monero-linux-x64-v0.12.0.0.tar.bz2 https://downloads.getmonero.org/cli/linux64
```

### 4.2. Verificación de Binarios en Linux o Mac

Los pasos para Linux o Mac son los mismos. Desde una terminal, obtén el hash `SHA256` de tu binario Monero descargado. Como ejemplo esta guía utiliza el binario GUI de `Linux, 64bit`. Reemplaza `monero-gui-linux-x64-v0.12.0.0.tar.bz2` con el nombre del binario que descargaste en la [sección 4.1](#41-get-monero-binary).

```
shasum -a 256 monero-gui-linux-x64-v0.12.0.0.tar.bz2
```

La salida se verá como esto, pero será diferente para cada archivo binario. Tu hash `SHA256` debe coincidir con el hash listado en el archivo `hashes.txt` para tu archivo binario.

```
fb0f43387b31202f381c918660d9bc32a3d28a4733d391b1625a0e15737c5388  monero-gui-linux-x64-v0.12.0.0.tar.bz2
```

Si tu hash **SÍ** coincide, Ḃentonces has terminado con la guía! Puedes extraer los archivos e instalarlos.

Si tu hash **NO** coincide, **NO CONTINÚES.** En su lugar, elimina el binario descargado y regresa a la [sección 4.1](#41-get-monero-binary).

### 4.3. Verificación de Binarios en Windows

Desde una terminal, obtén el hash `SHA256` de tu binario Monero descargado. Como ejemplo esta guía utiliza el binario GUI de `Windows, 64bit`. Reemplaza `monero-gui-win-x64-v0.12.0.0.zip` con el nombre del binario que descargaste en la [sección 4.1](#41-get-monero-binary).

```
certUtil -hashfile monero-gui-win-x64-v0.12.0.0.zip SHA256
```

La salida se verá como esto, pero será diferente para cada archivo binario. Tu hash `SHA256` debe coincidir con el hash listado en el archivo `hashes.txt` para tu archivo binario.

```
SHA256 hash of file monero-gui-win-x64-v0.12.0.0.zip:
4b 9f 31 68 6e ca ad 97 cd b1 75 e6 57 4b f3 07 f8 d1 c4 10 42 78 25 f4 30 4c 21 da 8a ac 18 64
CertUtil: -hashfile command completed successfully.
```

Si tu hash **SÍ** coincide, Ḃentonces has terminado con la guía! Puedes extraer los archivos e instalarlos.

Si tu hash **NO** coincide, **NO CONTINÚES.** En su lugar, elimina el binario descargado y regresa a la [sección 4.1](#41-get-monero-binary).
