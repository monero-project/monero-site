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

## Содержание:

1. [Install GnuPG](#installing-gnupg)

2. [Verify & Import Signing Key](#verify-and-import-signing-key)

3. [Download & Verify Hash File](#download-and-verify-hash-file)

4. [Download & Verify Binary](#download-and-verify-binary)

## Установка GnuPG

+ Для Windows: посетите [страницу загрузки
Gpg4win](https://gpg4win.org/download.html) и следуйте инструкциям по
установке.

+ Для Mac: посетите [страницу загрузки Gpgtools](https://gpgtools.org/) и
следуйте инструкциям по установке.

+ On Linux, GnuPG is installed by default.

## Верификация и импорт ключа подписи

В данном разделе будет рассмотрен вопрос получения ключа подписи Monero,
проверки его правильности и импорта ключа в GnuPG.

### Получение ключа подписи

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

### Верификация ключа подписи

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

If the fingerprint **DOES NOT** match, **DO NOT CONTINUE.** Instead delete
the file `binaryfate.asc` and go back to [section Get Signing
Key](#get-signing-key).

### Импорт ключа подписи

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

## Загрузка и верификация хеш-файла

В данном разделе рассматривается вопрос загрузки хеш-файла и проверки его
аутентичности.

### Получение хеш-файла

В том случае, если установлена операционная система Windows или Mac, следует
перейти на страницу [хеш-файлов на getmonero.org]({{ site.baseurl_root
}}/downloads/hashes.txt) и сохранить её в своей домашней директории как
`hashes.txt`.

В том случае, если используется Linux, можно загрузить подписанный хеш-файл,
используя следующую команду:

``` wget -O hashes.txt https://www.getmonero.org/downloads/hashes.txt ```

### Верификация хеш-файла

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

If you see **BAD signature** in the output, **DO NOT CONTINUE.** Instead
delete the file `hashes.txt` and go back to [section Get Hash
File](#get-hash-file).

## Загрузка и верификация двоичного файла

Этот раздел посвящён загрузке подходящего для вашей операционной системы
двоичного файла Monero, получению хеша `SHA256` для загруженного файла, а
также проверки правильности этого файла.

### Получение двоичного файла Monero

Если установлена операционная система Windows или Mac, необходимо перейти на
[getmonero.org]({{ site.baseurl_root }}/downloads/)  и загрузить
соответствующий используемой операционной системе файл, после чего сохранить
его в домашней директории. **На данном этапе файлы извлекать не следует.**

Для Linux можно загрузить инструменты командной строки, используя следующую
команду:

```
wget -O monero-linux-x64-v0.15.0.1.tar.bz2 https://downloads.getmonero.org/cli/linux64
```

### Верификация двоичного файла в Linux и Mac

The steps for both Linux and Mac are the same. From a terminal, get the
`SHA256` hash of your downloaded Monero binary. As an example this guide
will use the `Linux, 64bit` GUI binary. Substitute
`monero-gui-linux-x64-v0.15.0.1.tar.bz2` with the name of the binary that
you downloaded in [section Get Monero binary](#get-monero-binary).

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

If your hash **DOES NOT** match, **DO NOT CONTINUE.** Instead delete the
binary you downloaded and go back to [section Get Monero
binary](#get-monero-binary).

### Верификация двоичного файла под Windows

From a terminal, get the `SHA256` hash of your downloaded Monero binary. As
an example this guide will use the `Windows, 64bit` GUI binary. Substitute
`monero-gui-win-x64-v0.15.0.1.zip` with the name of the binary that you
downloaded in [section Get Monero binary](#get-monero-binary).

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

If your hash **DOES NOT** match, **DO NOT CONTINUE.** Instead delete the
binary you downloaded and go back to [section Get Monero
binary](#get-monero-binary).
