{% include disclaimer.html translated="yes" translationOutdated="no" %}

Верификация двоичных файлов Monero производится до извлечения, установки или
использования программного обеспечения Monero. Это единственный способ
убедиться в том, что вы используете официальное программное обеспечение
Monero. Если вами был получен поддельный двоичный файл Monero (например,
фишинговый, MITM и т. д.), соблюдение правил, изложенных в данном
руководстве, поможет избежать обмана, связанного с использованием такого
файла.

Для защиты целостности двоичных файлов команда Monero обеспечивает
криптографически подписанный список всех хешей
[SHA256](https://en.wikipedia.org/wiki/SHA-2) Если загруженный вами двоичный
файл был изменён, он будет выдавать хеш,
[отличающийся](https://en.wikipedia.org/wiki/File_verification) от того, что
находится в файле.

Это руководство для продвинутых пользователей операционных систем Linux, Mac
и Windows, которое подразумевает использование командной строки. В нём
подробно рассматривается процесс установки необходимого программного
обеспечения, импорта ключа подписи, загрузки необходимых файлов и, наконец,
проверки аутентичности ваших двоичных файлов.

## Table of Contents:

### - [Install GnuPG](#installing-gnupg)

### - [Verify & Import Signing Key](#verify-and-import-signing-key)

### - [Download & Verify Hash File](#download-and-verify-hash-file)

### - [Download & Verify Binary](#download-and-verify-binary)

## Installing GnuPG

+ Для Windows: посетите [страницу загрузки
Gpg4win](https://gpg4win.org/download.html) и следуйте инструкциям по
установке.

+ Для Mac: посетите [страницу загрузки Gpgtools](https://gpgtools.org/) и
следуйте инструкциям по установке.

+ Для Linux: GnuPG устанавливается по умолчанию.

## Verify and Import Signing Key

В данном разделе будет рассмотрен вопрос получения ключа подписи Monero,
проверки его правильности и импорта ключа в GnuPG.

### Get Signing Key

Для Windows или Mac можно взять [GPG ключ
binaryfate](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/binaryfate.asc),
оторый он использует для подписи двоичных файлов Monero, и сохранить
страницу как `fluffypony.asc` в вашей исходной, «домашней» директории.

Для Linux можно загрузить ключ подписи binaryfate, используя следующую
команду:

```
wget -O binaryfate.asc
https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/binaryfate.asc
```

### Verify Signing Key

В случае со всеми операционными системами следует проверить отпечаток в
`binaryfate.asc` используя следующую команду в консоли:

``` gpg --keyid-format long --with-fingerprint binaryfate.asc ```


Следует проверить совпадение отпечатков:

```
pub   rsa4096/F0AF4D462A0BDF92 2019-12-12 [SCEA]
      Key fingerprint = 81AC 591F E9C4 B65C 5806  AFC3 F0AF 4D46 2A0B DF92
uid                           binaryFate <binaryfate@getmonero.org>
```

Если отпечаток **СОВПАДЕТ**, можно продолжать.

В случае **НЕСОВПАДЕНИЯ** отпечатка, **ПРОДОЛЖАТЬ НЕ СЛЕДУЕТ**. Вместо этого
необходимо удалить файл `binaryfate.asc` и вернуться к [пункту
2.1](#21-get-signing-key).

### Import Signing Key

Используя консоль, импортировать ключ подписи:

``` gpg --import binaryfate.asc ```

Если ключ импортируется впервые, выход должен выглядеть так:

```
gpg: key F0AF4D462A0BDF92: 2 signatures not checked due to missing keys
gpg: key F0AF4D462A0BDF92: public key "binaryFate <binaryfate@getmonero.org>" imported
gpg: Total number processed: 1
gpg:               imported: 1
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
```

Если же ключ импортировался до этого, то выход будет следующим:

```
gpg: key F0AF4D462A0BDF92: "binaryFate <binaryfate@getmonero.org>" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
```

## Download and Verify Hash File

В данном разделе рассматривается вопрос загрузки хеш-файла и проверки его
аутентичности.

### Get Hash File

В том случае, если установлена операционная система Windows или Mac, следует
перейти на страницу [хеш-файлов на getmonero.org]({{ site.baseurl_root
}}/downloads/hashes.txt) и сохранить её в своей домашней директории как
`hashes.txt`.

В том случае, если используется Linux, можно загрузить подписанный хеш-файл,
используя следующую команду:

``` wget -O hashes.txt https://www.getmonero.org/downloads/hashes.txt ```

### Verify Hash File

Хеш-файл подписывается ключом `81AC 591F E9C4 B65C 5806 AFC3 F0AF 4D46 2A0B
DF92`, что видно в выходе ниже.

В случае со всеми операционными системами следует проверить подпись
хеш-файла, введя следующую команду в консоль:

``` gpg --verify hashes.txt ```

Если файл является аутентичным (подлинным), выход будет выглядеть так:

```
gpg:                using RSA key 81AC591FE9C4B65C5806AFC3F0AF4D462A0BDF92
gpg: Good signature from "binaryFate <binaryfate@getmonero.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 81AC 591F E9C4 B65C 5806  AFC3 F0AF 4D46 2A0B DF92
```

Если в выходе видно, что подпись является **ПРАВИЛЬНОЙ**, как в примере,
показанном выше, можно продолжать.

Если подпись в выходе является **НЕПРАВИЛЬНОЙ**, **ПРОДОЛЖАТЬ НЕ СЛЕДУЕТ.**
Необходимо удалить файл `hashes.txt` и вернуться к [пункту
3.1](#31-get-hash-file).

## Download and Verify Binary

Этот раздел посвящён загрузке подходящего для вашей операционной системы
двоичного файла Monero, получению хеша `SHA256` для загруженного файла, а
также проверки правильности этого файла.

### Get Monero binary

On Windows or Mac, go to [getmonero.org]({{ site.baseurl_root }}/downloads/)
and download the correct file for your operating system. Save the file to
your home directory. **Do not extract the files yet.**

Для Linux можно загрузить инструменты командной строки, используя следующую
команду:

```
wget -O monero-linux-x64-v0.15.0.1.tar.bz2 https://downloads.getmonero.org/cli/linux64
```

### Binary Verification on Linux or Mac

Этапы проверки для Linux и Mac ничем не отличаются. Используя консоль,
необходимо получить хеш `SHA256` загруженного двоичного файла Monero. Для
примера в этом руководстве взят двоичный файл для `Linux 64-bit`
GUI. Следует заменить `monero-gui-linux-x64-v0.15.0.1.tar.bz2` на имя
двоичного файла, загруженного в соответствии с [пунктом
4.1](#41-get-monero-binary).

```
shasum -a 256 monero-linux-x64-v0.15.0.1.tar.bz2
```

Выход должен выглядеть так, как показано, но при этом он будет отличаться в
случае с каждым двоичным файлом. Хеш `SHA256` должен соответствовать
указанному в файле `hashes.txt` двоичного файла.

```
8d61f992a7e2dbc3d753470b4928b5bb9134ea14cf6f2973ba11d1600c0ce9ad 
monero-linux-x64-v0.15.0.1.tar.bz2
```

При **СОВПАДЕНИИ** хеша можно завершить работу с настоящим руководством!
Теперь файлы можно извлечь и установить.

В случае **НЕСОВПАДЕНИЯ** хеша, **ПРОДОЛЖАТЬ НЕ СЛЕДУЕТ.** Необходимо
удалить загруженный двоичный файл и вернуться к [пункту
4.1](#41-get-monero-binary).

### Binary Verification on Windows

Используя терминал, необходимо получить хеш `SHA256` загруженного двоичного
файла Monero. Для примера в этом руководстве взят двоичный файл для
`Windows, 64bit` GUI. Следует заменить `monero-gui-win-x64-v0.15.0.1.zip` на
имя двоичного файла, загруженного в соответствии с [пунктом
4.1](#41-get-monero-binary).

``` certUtil -hashfile monero-gui-win-x64-v0.15.0.1.zip SHA256 ```

Выход должен выглядеть так, как показано, но при этом он будет отличаться в
случае с каждым двоичным файлом. Хеш `SHA256` должен соответствовать
указанному в файле `hashes.txt` двоичного файла.

```
SHA256 hash of file monero-gui-win-x64-v0.12.0.0.zip: 4b 9f 31 68 6e ca
ad 97 cd b1 75 e6 57 4b f3 07 f8 d1 c4 10 42 78 25 f4 30 4c 21 da 8a ac 18
64 CertUtil: -hashfile command completed successfully. 
```

При **СОВПАДЕНИИ** хеша можно завершить работу с настоящим руководством!
Теперь файлы можно извлечь и установить.

В случае **НЕСОВПАДЕНИЯ** хеша, **ПРОДОЛЖАТЬ НЕ СЛЕДУЕТ.** Необходимо
удалить загруженный двоичный файл и вернуться к [пункту
4.1](#41-get-monero-binary).
