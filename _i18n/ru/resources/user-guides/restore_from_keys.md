{% include disclaimer.html translated="yes" translationOutdated="no" %}

Восстановление кошелька при помощи приватных ключей — довольно простой
процесс. Если вы обладаете необходимой информацией, это руководство позволит
вам полностью восстановить ваш кошелёк. Примечание: при восстановлении при
помощи ключей пароль НЕ НУЖЕН.

Необходимо три элемента данных вашего кошелька или же файл с вашими ключами,
в котором будет содержаться эта информация и пароль, позволяющий
расшифровать её. Вам понадобится знание следующих 3 компонентов кошелька:

1. **Адрес**
2. **Секретный ключ траты**
3. **Секретный ключ просмотра**


#### CLI

Теперь следует ввести команду кошелька:

`./monero-wallet-cli --generate-from-keys New_Wallet_Name.abc`

После этого будет запрошен адрес, ключ траты, ключ просмотра и, наконец,
новый пароль для заново сгенерированного кошелька.

При введении правильных параметров файлы вашего кошелька будут сгенерированы
повторно, что позволит вам создать новый пароль.

Если у вас возникнут проблемы, команда `./monero-wallet-cli —help` позволит
вам увидеть опции, доступные для запуска вашего кошелька. Как только вы
войдёте в кошелёк, команда `help` выведет список команд, доступных для
использования внутри кошелька.

#### GUI

Запустите `monero-wallet-gui`. Если вы запускаете его впервые, переходите к
следующему шагу, в противном случае нажмите `Cancel` (Отменить):

![cancel
opening](/img/resources/user-guides/en/restore_from_keys/cancel-opening.avif)

Щёлкните `Restore wallet from keys or mnemonic seed` (Восстановить кошелёк
на основе ключей или мнемонической фразы):

![choose
restore](/img/resources/user-guides/en/restore_from_keys/choose-restore.avif)

Select `Restore from keys`, give your wallet a name & storage location, and
complete the `Account address (public)`, `View key (private)` & `Spend key
(private)`. Optionally, specify a `Restore height (optional)` to avoid
scanning of oldest blocks. Then click the `Next` button:

![restore
wallet](/img/resources/user-guides/en/restore_from_keys/restore-wallet.avif)

On the next page, give your wallet a strong password and confirm it before
clicking the `Next` button:

![wallet
password](/img/resources/user-guides/en/restore_from_keys/wallet-password.avif)

Specify your daemon settings and click the `Next` button:

![daemon
settings](/img/resources/user-guides/en/restore_from_keys/daemon-settings.avif)

Click on `Create wallet` to complete the restoration process:

![all set
up](/img/resources/user-guides/en/restore_from_keys/all-set-up.avif)
