{% include disclaimer.html translated="yes" translationOutdated="no" %}

Верификацию двоичных файлов Monero следует производить до извлечения, установки или использования программного обеспечения Monero. Это единственный способ гарантированно убедиться в том, что вы используете официальный двоичный файл Monero. Если вами был получен фальшивый файл (фишинговый, MITM и т. д.), лучше воспользоваться этим руководством, чтобы такой файл не навредил вам.

Для защиты целостности двоичных файлов командой Monero используется криптографически подписанный список хешей [SHA256](https://en.wikipedia.org/wiki/SHA-2). Если скачанный вами двоичный файл изменён каким-либо образом, его хеш [будет отличатся](https://en.wikipedia.org/wiki/File_verification) от того, что указан в файле.

Это руководство предназначено для новичков, использующих операционную систему Windows, и предполагает использование GUI. Руководство описывает процесс установки необходимого программного обеспечения, импорта подписывающих ключей, скачивания необходимых файлов и, наконец, верификации аутентичности вашего двоичного файла.

## Содержание

### [1. Установка Gpg4win](#1-using-gpg4win-installer)
  - [1.1. Получение программы установки Gpg4win](#11-getting-gpg4win-installer)
    + [1.1.1. Загрузка Gpg4win](#111-download-gpg4win)
    + [1.1.2. Запуск Gpg4win](#112-launch-gpg4win)
  - [1.2. Работа с программой установки Gpg4win](#12-use-gpg4win-installer)
### [2. Импорт ключа подписи](#2-monero-signing-key)
  - [2.1. Загрузка ключа подписи](#21-download-signing-key)
  - [2.2. Запуск утилиты Kleopatra](#22-initialize-kleopatra)
    + [2.2.1. Импорт ключа подписи](#221-import-signing-key)
    + [2.2.2. Создание пары ключей](#222-create-key-pair)
  - [2.3. Верификация ключа подписи](#23-verify-signing-key)
### [3. Верификация хеш-файла](#3-hash-file-verification)
  - [3.1. Загрузка хеш-файла](#31-download-hash-file)
  - [3.2. Верификация хеш-файла](#32-verify-hash-file)
### [4. Верификация двоичного файла](#4-binary-file-verification)
  - [4.1. Загрузка двоичного файла](#41-download-binary)
  - [4.2. Верификация двоичного файла](#42-verify-binary)

## 1. Программа установки Gpg4win

В этом разделе рассматривается процесс установки криптографического программного обеспечения. Windows не имеет инструментов, необходимых для верификации вашего двоичного файла. Чтобы установить эти инструменты можно воспользоваться программой установки Gpg4win.

### 1.1. Где взять программу установки Gpg4win

#### 1.1.1. Загрузка Gpg4win

В веб-браузере следует зайти на сайт [gpg4win.org](https://gpg4win.org) и нажатием зелёной кнопки скачать программу установки.

![gpg4win download button](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-downloadbutton.png)

Вы попадёте на страницу пожертвований. Если вы не собираетесь делать пожертвование, следует выбрать `$0`, после чего можно будет нажать на кнопку `Download` (Загрузить)

![gpg4win site donation](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-donation.png)

Нажмите `Save File` (Сохранить файл).

![gpg4win site save file](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile.png)

Выберите место для сохранения файла и нажмите `Save` (Сохранить).

![gpg4win site download location](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile-location.png)

#### 1.1.2. Запуск Gpg4win

Как только загрузка файла будет завершена, откройте папку, в которую он был сохранён.

![gpg4win site open folder](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-site-savefile-openfolder.png)

Двойным кликом запустите исполняемый файл gpg4win.

![gpg4win launch](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-launch.png)

### 1.2. Работа с программой установки Gpg4win

Должен появиться экрана проверки безопасности, в нём следует нажать `Run` (Запустить).

![gpg4win installer security](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-security.png)

Выберите язык и нажмите `ОК`.

![gpg4win installer language](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-language.png)

Появится экран приветствия. Нажмите `Next` (Далее).

![gpg4win installer welcome](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-welcome.png)

Теперь должен появиться экран выбора компонентов. Для продолжения работы в соответствии с данным руководством необходимо выбрать хотя бы `Kleopatra`, а затем нажать `Next` (Далее).

![gpg4win installer components](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-components.png)

Если вы не уверены в том, что делаете, лучше оставить место установки без изменений (используемое по умолчанию). После того, как место установки будет выбрано, нажать `Install` (Установить).

![gpg4win installer location](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install.png)

После того, как установка будет завершена, нажмите `Next` (Далее).

![gpg4win installer complete](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-complete.png)

Нажмите `Finish` (Завершить).

![gpg4win installer finish](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_gpg4win-install-finish.png)

## 2. Импорт подписывающего ключа Monero

В этом разделе описан процесс загрузки подписывающего ключа Monero, верификации правильности ключа и последующего импорта ключа в ваш набор ключей. Файл хешей, используемый для верификации вашего двоичного файла, криптографически зашифрован при помощи подписывающего ключа Monero. Чтобы проверить правильность этого файла вам понадобится публичная версия подписывающего ключа.

### 2.1. Загрузка подписывающего ключа

В веб-браузере необходимо перейти по ссылке [binaryFate's GPG key](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/binaryfate.asc), который используется для подписи двоичных файлов Monero. Кликом правой кнопки мыши необходимо выбрать `Save Page As` (Сохранить страницу как).

![getkey right click](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_getkey-rightclick.png)

Оставьте место для загрузки, используемое по умолчанию, без изменений и нажмите `Save` (Сохранить).

![getkey save file](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_getkey-savefilename.png)

### 2.2. Запуск утилиты Kleopatra

Если вы впервые пользуетесь Kleopatra, вам придётся создать для себя пару ключей.

Запустите Kleopatra.

![kleo launch](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-launch.png)

#### 2.2.1. Импорт подписывающего ключа

Нажмите `Import` (Импортировать).

![kleo firstrun import](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-importkey.png)

Перейдите в директорию `Downloads` (Загрузки), выберите `binaryfate` и нажмите `Open` (Открыть).

![kleo firstrun key location](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-import-location.png)

Запустите процесс сертификации ключа нажатием `Yes` (Да).

![kleo firstrun start process](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-startverifyprocess.png)

#### 2.2.2. Создание пары ключей

Запустите процесс создания ключа нажатием `Yes` (Да).

![kleo firstrun start key create](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeysnow.png)

Введите информацию, заполнив поля `Name` (Имя) и `Email` (Электронная почта), нажмите `Next` (Далее).

![kleo firstrun key details](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeydetails.png)

Проверить указанную информацию и нажмите `Create` (Создать).

![kleo firstrun verify key details](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-verifykeydetails.png)

Введите пароль и нажмите `OK`.

![kleo firstrun set key pass](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-createkeys-pinentry.png)

Нажмите `Finish` (Завершить).

![kleo firstrun finish create key](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-firstrun-keycreate-success.png)

### 2.3. Верификация подписывающего ключа

Визуально проверить, соответствует ли отпечаток ключа, принадлежащего binaryFate, `81AC591FE9C4B65C5806AFC3F0AF4D462A0BDF92`.

![kleo certify fingerprint](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-certify-fingerprint.png)

Если отпечаток **СООТВЕТСТВУЕТ** отпечатку, нажать `Certify` (Далее).

Если отпечаток **НЕ СООТВЕТСТВУЕТ**, продолжать дальнейшие выполнение пунктов инструкции **НЕ СЛЕДУЕТ**. Необходимо удалить `binaryfate` из директории `Downloads` и повторить действия, описанные в [пункте 2.1](#21-download-signing-key).

Введите свой пароль и нажмите `OK`.

![kleo certify pass](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_kleopatra-certify-pinentry.png)

Нажмите `Finish` (Завершить).

## 3. Верификация хеш-файла

В этом разделе рассматривается процесс загрузки подписанного файла с гарантировано правильными хешами и проверка его подлинности.

### 3.1. Загрузка хеш-файла

В веб-браузере следует перейти на [страницу хешей на getmonero.org](https://getmonero.org/downloads/hashes.txt). Кликом правой кнопки мыши выбрать `Save Page As` (Сохранить страницу как).

![hashes right click](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-getmonero-rightclick.png)

Оставьте место для загрузки, используемое по умолчанию, без изменений и нажмите `Save` (Сохранить).

![hashes save file](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-getmonero-savename.png)

### 3.2. Верификация хеш-файла

В утилите Kleopatra нажать кнопку `Decrypt/Verify` (Расшифровать/проверить).

![hashes kleo verify button](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-verify-button.png)

Указать путь к директории `Downloads`, выбрать файл `hashes` и нажать `Open` (Открыть).

![hashes kleo open file](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-verify-button-filename.png)

Kleopatra сообщит, является ли подпись файла действительной.

Если подпись **ЯВЛЯЕТСЯ** действительной, вы увидите следующее:

![hashes kleo goodsig](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-goodsig.png)

Если же подпись **НЕ ЯВЛЯЕТСЯ** действительной, вы увидите это:

![hashes kleo badsig](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_hashes-kleo-badsig.png)

Если вами была получена **ДЕЙСТВИТЕЛЬНА** подпись, нажмите `Discard` (Не учитывать) и продолжайте.

Если вами была получена **НЕДЕЙСТВИТЕЛЬНАЯ** подпись, продолжать **НЕ СЛЕДУЕТ**. Вместо этого необходимо удалить файл `hashes` из директории `Downloads` и вернуться к действиям, описанным в [пункте 3.1](#31-download-hash-file).

## 4. Верификация двоичного файла

В этом разделе описан процесс загрузки двоичного файла Monero и верификации его аутентичности.

### 4.1. Загрузка двоичного файла

В веб-браузере следует перейти на [страницу загрузки файлов getmonero.org](https://getmonero.org/downloads/#windows) и выбрать правильный файл для вашей системы.

![binary getmonero](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-windowsfiles.png)

Выберите `Save File` (Сохранить файл) и нажмите `OK`.

![binary getmonero save](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-save-file.png)

Оставьте место для загрузки, используемое по умолчанию, без изменений и нажмите `Save` (Сохранить).

![binary getmonero save location](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-getmonero-save-location.png)

### 4.2. Верификация двоичного файла

В файловом менеджере выберите директорию `Downloads` и откройте файл `hashes` при помощи текстового редактора.

![binary open hashes.txt](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-word-hashfile.png)

Откройте консоль (`cmd.exe`).

![binary launch term](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-launch.png)

Изменить путь на директорию `cd Downloads`, измените директорию на `Downloads`

![binary cmd cd](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-cd.png)

Вычислите хеш двоичного файла Monero при помощи команды `certUtil -hashfile monero-gui-win-x64-v0.16.0.2.zip SHA256` (если вы загрузили версию, предполагающую только использование командной строки, замените `monero-gui-win-x64-v0.16.0.2.zip`, именем скачанного файла кошелька).

![binary cmd certutil](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-cmd-certutil.png)

Сравните хеш, полученный при помощи командной строки, с хешем из файла хешей. Они должны совпадать (пробелы можно не учитывать).

![binary compare hashes](/img/resources/user-guides/en/verify_binary_windows_beginner/verify-win_binary-word-cmd-compare.png)

Если хеши **СОВПАДАЮТ**, значит, верификация успешно пройдена! Вы можете быть уверены в том, что имеющиеся у вас двоичные файлы Monero аутентичны. Вы спокойно можете извлекать/устанавливать и пользоваться ими.

Если хеши **НЕ СОВПАДАЮТ**, продолжать **НЕ СЛЕДУЕТ**. Вместо этого необходимо удалить двоичный файл Monero из директории `Downloads` и вернуться к действиям, описанным в [пункту 4.1](#41-download-binary).
