{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Шаги:

1. Скачать [Monero CLI]({{  site.baseurl }}/downloads/#cli).
2. Скачать и разархивировать последнюю версию I2P-zero (не для GUI): https://github.com/i2p-zero/i2p-zero/releases
3. Запустить I2P-zero. Для этого войти в распакованную директорию I2P-zero и набрать: `router/bin/i2p-zero`
4. (необязательно) Найти свой случайным образом назначенный порт I2P. Для этого набрать: `router/bin/tunnel-control.sh router.externalPort`. Из соображений приватности не следует сообщать номер этого порта другим людям. Настроить брандмауэр так, чтобы он переадресовывал трафик на этот порт и чтобы ваш I2P-узел был доступным. Если у вас нет возможности разрешить входящие соединения, всё равно всё будет работать, но ваш I2P-узел не будет помогать I2P-сети в той мере, в какой мог бы.
5. Создать туннель SOCKS для исходящих I2P-соединений. Для этого набрать: `router/bin/tunnel-control.sh socks.create 8060`
6. Создать туннель сервера для входящих I2P-соединений. Для этого набрать:`router/bin/tunnel-control.sh server.create 127.0.0.1 8061`.
7. После ввода указанной выше команды I2P-адрес будет напечатан на командной строке с `.b32.i2p` в конце. Это ваш новый I2P-адрес.
8. Запустить monerod, набрав следующее и заменив `XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.b32.i2p` на ваш собственный I2P-адрес, который был создан при выполнении шага 6: `monerod --tx-proxy i2p,127.0.0.1:8060 --add-peer core5hzivg4v5ttxbor4a3haja6dssksqsmiootlptnsrfsgwqqa.b32.i2p --add-peer dsc7fyzzultm7y6pmx2avu6tze3usc7d27nkbzs5qwuujplxcmzq.b32.i2p --add-peer sel36x6fibfzujwvt4hf5gxolz6kd3jpvbjqg6o3ud2xtionyl2q.b32.i2p --add-peer yht4tm2slhyue42zy5p2dn3sft2ffjjrpuy7oc2lpbhifcidml4q.b32.i2p --anonymous-inbound XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.b32.i2p,127.0.0.1:8061 --detach`

Готово! Не следует менять адрес dsc****.b32.i2p на ваш собственный. Заменяется только XXXXXXX.b32.i2p. dsc****.b32.i2p является сид-узлом, который поможет вам открыть другие доступные через I2P узлы Monero.

## Настройка служб Linux для автоматического запуска monerod и I2P-zero

Если вы работаете под Linux, было бы полезно настроить систему так, чтобы всё запускалось автоматически, на тот случай, если машина когда-либо будет перезагружена. Для этого необходимо создать файлы службы systemd:

Примечание: следует позаботиться о замене номера версий в файлах, указанных ниже, на номера соответствующих загружаемых вами версий Monero и I2P-zero. Также необходимо заменить`<username>` и `<usergroup>` на используемые вами в Linux имя пользователя и имя пользовательской группы (при этом следует пользоваться командами `whoami` и `groups`, если вы их не знаете).

### /etc/systemd/system/i2pzero.service

````                                                
[Unit]
Description=i2pzero
After=network.target

[Service]
Type=simple
ExecStart=/home/<username>/i2p-zero-linux.v1.17/router/bin/i2p-zero
User=<username>
Group=<usergroup>

[Install]
WantedBy=multi-user.target
````

### /etc/systemd/system/monerod.service

````
[Unit]
Description=monerod
After=network.target

[Service]
Type=forking
PIDFile=/home/<username>/monerod.pid
ExecStart=/home/<username>/monero-x86_64-linux-gnu-v0.16.0.0/monerod --tx-proxy i2p,127.0.0.1:8060 --add-peer core5hzivg4v5ttxbor4a3haja6dssksqsmiootlptnsrfsgwqqa.b32.i2p --add-peer dsc7fyzzultm7y6pmx2avu6tze3usc7d27nkbzs5qwuujplxcmzq.b32.i2p --add-peer sel36x6fibfzujwvt4hf5gxolz6kd3jpvbjqg6o3ud2xtionyl2q.b32.i2p --add-peer yht4tm2slhyue42zy5p2dn3sft2ffjjrpuy7oc2lpbhifcidml4q.b32.i2p --anonymous-inbound XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.b32.i2p,127.0.0.1:8061 --detach --pidfile /home/<username>/monerod.pid
User=<username>
Group=<usergroup>

[Install]
WantedBy=multi-user.target
````

После создания этих двух файлов следует запустить:
````
systemctl daemon-reload
service i2pzero start
service monerod start
````

Чтобы увидеть, как работают эти службы, следует использовать команды `journalctl -u i2pzero` и `journalctl -u monerod`

## Running your own seed node (mipseed)

Запуск собственного сид-узла (mipseed)
Если вы хотите запустить собственный сид-узел (известный как 'mipseed'), чтобы помочь другим людям находить доступные через I2P узлы Monero, воспользуйтесь инструкциям, расположенными [в репозитории I2P-zero](https://github.com/i2p-zero/i2p-zero/blob/master/mipseed.md).

*Оригинальная версия этого руководства первоначально была загружена [в репозитории I2P-zero](https://github.com/i2p-zero/i2p-zero/blob/master/monerod-with-i2p-zero.md).*
