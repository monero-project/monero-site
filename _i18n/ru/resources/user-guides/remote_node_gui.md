{% include disclaimer.html translated="no" translationOutdated="no" %}

## Убедитесь в том, что ваш кошелёк работает в продвинутом режиме

Чтобы использовать специализированный удалённый узел, ваш кошелек должен
находиться в продвинутом режиме. Простой режим (Simple mode) и Простой режим
с использованием узла начальной загрузки (bootstrap) не поддерживают эту
возможность.

Чтобы проверить, работает ли ваш кошелёк в продвинутом режиме, зайдите в `Настройки ` > `Информация` и проверьте `Режим кошелька`.

Если ваш кошелёк не находится в продвинутом режиме, вам нужно будет изменить
его (см. следующий шаг).

Если ваш кошелёк уже работает в продвинутом режиме, вы можете пропустить
следующий шаг.

![Wallet
mode](/img/resources/user-guides/en/remote_node/wallet_mode_info.avif){:width="600px"}

## Переключение вашего кошелька в продвинутый режим

Если ваш кошелёк открыт, вам нужно сначала закрыть его. Чтобы сделать это, перейдите в `Настройки` > `Кошёлек` > `Закрыть текущий кошелек`

![Close
Wallet](/img/resources/user-guides/en/remote_node/close_open_wallet.avif){:width="600px"}

Откроется главное меню: экран `Добро пожаловать в Monero`. В левом нижнем
углу нажмите кнопку `Изменить режим кошелька`, а на следующей странице
выберите `Расширенный режим`. Затем снова откройте файл кошелька.

![Change Wallet
Mode](/img/resources/user-guides/en/remote_node/change_wallet_mode.avif){:width="600px"}

![Advanced
Mode](/img/resources/user-guides/en/remote_node/advanced_mode.avif){:width="600px"}

## Finding a remote node

First, you will need to find a node to connect to.

It is important to note that there are publicly advertised remote nodes
which are run by malicious actors with the sole purpose of deanonymizing
users/outputs by, for example: - Linking @clearnet IP addresses to txid's.
- Providing bogus decoys to determine which output is the real spend.  - For
more information see [YouTube - Breaking Monero Episode 07: Remote
Nodes](https://www.youtube.com/watch?v=n6Bxp0k7Uqg)

It is highly recommended that you either A) Run your own node, or B) Use a
Trusted remote node - one that is controlled by someone that you trust.

Though highly discouraged, you may opt to use an untrusted remote node. To
maximize privacy, Tor or I2P nodes are preferred. The website
[monero.fail](https://monero.fail) has a list of such nodes.

## Configuring your wallet to connect to a custom remote node

При открытии вашего кошелька появится всплывающее окно с опцией `Использовать собственные настройки`. Нажмите на него, и вы будете перенаправлены на страницу `Настройки` > `Узел`.

Если вы не видите этого всплывающего окна, то перейдите на страницу `Настройки` > `Узел`.

![Configure Remote
Node](/img/resources/user-guides/en/remote_node/remote_node_config.avif){:width="600px"}

On the following page, select `Remote Node`.

In the `Address` field you will enter the address (or IP) of the node that
you want to connect to, and in `Port` field you will enter the port of the
node.

Example: If a node is listed as `node.getmonero.org:18089`, the address is
`node.getmonero.org` and the port is `18089`. Note:
`node.getmonero.org:18089` is for illustration purposes only. It is not a
real node address.

![Configure Remote Node
2](/img/resources/user-guides/en/remote_node/remote_node_config-2.avif){:width="600px"}

If the node requires authentication, you can enter the username in `Daemon
username` and the password in `Daemon password`.

Finally, click on the `Connect` button and wait for your wallet to connect.
