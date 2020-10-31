{% include disclaimer.html translated="yes" translationOutdated="no" %}

Восстановление кошелька при помощи приватных ключей — довольно простой процесс. Если вы обладаете необходимой информацией, это руководство позволит вам полностью восстановить ваш кошелёк. Примечание: при восстановлении при помощи ключей пароль НЕ НУЖЕН.

Необходимо три элемента данных вашего кошелька или же файл с вашими ключами, в котором будет содержаться эта информация и пароль, позволяющий расшифровать её. Вам понадобится знание следующих 3 компонентов кошелька:

1. **Адрес**
2. **Секретный ключ траты**
3. **Секретный ключ просмотра**


#### CLI

Теперь следует ввести команду кошелька:

`./monero-wallet-cli --generate-from-keys New_Wallet_Name.abc`

После этого будет запрошен адрес, ключ траты, ключ просмотра и, наконец, новый пароль для заново сгенерированного кошелька.

При введении правильных параметров файлы вашего кошелька будут сгенерированы повторно, что позволит вам создать новый пароль.

Если у вас возникнут проблемы, команда `./monero-wallet-cli —help` позволит вам увидеть опции, доступные для запуска вашего кошелька. Как только вы войдёте в кошелёк, команда `help` выведет список команд, доступных для использования внутри кошелька.

#### GUI

Запустите `monero-wallet-gui`. Если вы запускаете его впервые, переходите к следующему шагу, в противном случае нажмите `Cancel` (Отменить):

![cancel opening](/img/resources/user-guides/en/restore_from_keys/cancel-opening.png)

Выберите нужный вам язык, например, `English(US)`:

![choose language](/img/resources/user-guides/en/restore_from_keys/choose-language.png)

Щёлкните `Restore wallet from keys or mnemonic seed` (Восстановить кошелёк на основе ключей или мнемонической фразы):

![choose restore](/img/resources/user-guides/en/restore_from_keys/choose-restore.png)

Выберите `Restore from keys` (Восстановить на основе ключей), укажите имя вашего кошелька и место, где он будет находиться, а также укажите `Account address (public)` (Адрес учётной записи (публичный)), `View key (private)` (Ключ просмотра (приватный)) и `Spend key (private)` (Ключ траты (приватный)). Дополнительно указать `Restore height (optional)` (Высоту восстановления (опционально)) во избежание сканирования старых блоков. Затем нажать стрелку вправо:

![restore wallet](/img/resources/user-guides/en/restore_from_keys/restore-wallet.png)

На следующей странице ввести сложный пароль для вашего кошелька и подтвердить его перед нажатием стрелки `Right` (Вправо):

![wallet password](/img/resources/user-guides/en/restore_from_keys/wallet-password.png)

Указать настройки демон-программы и нажать стрелку `Right` (Вправо):

![daemon settings](/img/resources/user-guides/en/restore_from_keys/daemon-settings.png)

Щёлкнуть `USE MONERO` (использовать Monero) и наслаждаться восстановленным кошельком:

![all set up](/img/resources/user-guides/en/restore_from_keys/all-set-up.png)
