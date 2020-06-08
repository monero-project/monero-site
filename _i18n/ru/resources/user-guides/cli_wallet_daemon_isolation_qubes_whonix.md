{% include disclaimer.html translated="yes" translationOutdated="no" %}

С помощью [Qubes](https://qubes-os.org) + [Whonix](https://whonix.org) можно создать кошелек Monero, который не будет требовать подключения к сети и работать на фактически изолированной от демона Monero системе , у которого весь сетевой трафик будет проходить через сеть [Tor](https://torproject.org).

Qubes предоставляет гибкость, позволяющую легко создавать отдельные виртуальные машины для разных целей. Сначала нужно создать рабочую станцию Whonix для кошелька без подключения к сети. Далее, создается другая рабочая станция Whonix для демона, который будет использовать шлюз Whonix, так как это NetVM. Для обмена данными между кошельком и демоном можно использовать Qubes [qrexec](https://www.qubes-os.org/doc/qrexec3/).

Это безопаснее, чем другие популярные способы, в которых осуществляется маршрутизация трафика rpc кошельков поверх скрытой службы Tor или используется физическая изоляция, но при этом активна сеть для прямого подключения к демону. Таким образом, не требуется какое-либо сетевое соединение на кошельке, вы передаете весь трафик через сеть Tor.


## 1. [Создание виртуальной машины Whonix AppVM](https://www.whonix.org/wiki/Qubes/Install):

+ Используя шаблон рабочей станции Whonix, создаем две рабочие станции следующим образом:

  - Первая рабочая станция будет использоваться для вашего кошелька, она будет называться `monero-wallet-ws`. `NetVM` оставляем не установленным, выбирая `none`.

  - Вторая рабочая станция создается для демона `monerod`, она будет называться `monerod-ws`. `NetVM` устанавливаем для шлюза Whonix `sys-whonix`.

## 2. В виртуальной машине AppVM `monerod-ws` делаем следующее:

+ Загружаем, проверяем и устанавливаем программное обеспечение Monero.

```
user@host:~$ curl -O "https://downloads.getmonero.org/cli/monero-linux-x64-v0.11.1.0.tar.bz2" -O "https://getmonero.org/downloads/hashes.txt"
user@host:~$ gpg --recv-keys BDA6BD7042B721C467A9759D7455C5E3C0CDCEB9
user@host:~$ gpg --verify hashes.txt
gpg: Signature made Wed 01 Nov 2017 10:01:41 AM UTC
gpg:                using RSA key 0x55432DF31CCD4FCD
gpg: Good signature from "Riccardo Spagni <ric@spagni.net>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9
     Subkey fingerprint: 94B7 38DD 3501 32F5 ACBE  EA1D 5543 2DF3 1CCD 4FCD
user@host:~$ echo '6581506f8a030d8d50b38744ba7144f2765c9028d18d990beb316e13655ab248  monero-linux-x64-v0.11.1.0.tar.bz2' | shasum -c
monero-linux-x64-v0.11.1.0.tar.bz2: OK
user@host:~$ tar xf monero-linux-x64-v0.11.1.0.tar.bz2
user@host:~$ sudo cp monero-v0.11.1.0/monerod /usr/local/bin/
```
+ Создаем файл `systemd`.

```
user@host:~$ sudo gedit /home/user/monerod.service
```

Вставляем в него следующее содержимое:

```
[Unit]
Description=Monero Full Node
After=network.target

[Service]
User=user
Group=user

Type=forking
PIDFile=/home/user/.bitmonero/monerod.pid

ExecStart=/usr/local/bin/monerod --detach --data-dir=/home/user/.bitmonero \
    --no-igd --pidfile=/home/user/.bitmonero/monerod.pid \
    --log-file=/home/user/.bitmonero/bitmonero.log --p2p-bind-ip=127.0.0.1

Restart=always
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

+ Копируем файл `monero-wallet-cli` на виртуальную машину `monero-wallet-ws`.

```
user@host:~$ qvm-copy-to-vm monero-wallet-ws monero-v0.11.1.0/monero-wallet-cli
```

+ Добавляем демон `monerod` в автозагрузку, отредактировав файл `/rw/config/rc.local`.

```
user@host:~$ sudo gedit /rw/config/rc.local
```

Добавляем эти строки в конец текста:

```
cp /home/user/monerod.service /lib/systemd/system/
systemctl start monerod.service
```

Создаем исполняемый файл.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Создаем файл действий для rpc.

```
user@host:~$ sudo mkdir /rw/usrlocal/etc/qubes-rpc
user@host:~$ sudo gedit /rw/usrlocal/etc/qubes-rpc/user.monerod
```

Добавляем строку:

```
socat STDIO TCP:localhost:18081
```

+ Выключаем виртуальную машину `monerod-ws`.

## 3. В виртуальной машине AppVM `monero-wallet-ws` делаем следующее:

+ Перемещаем исполняемый файл `monero-wallet-cli`.

```
user@host:~$ sudo mv QubesIncoming/monerod-ws/monero-wallet-cli /usr/local/bin/
```

+ Редактируем файл `/rw/config/rc.local`.

```
user@host:~$ sudo gedit /rw/config/rc.local
```

Добавляем эту строку в конец документа:

```
socat TCP-LISTEN:18081,fork,bind=127.0.0.1 EXEC:"qrexec-client-vm monerod-ws user.monerod"
```

Создаем исполняемый файл.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Выключаем виртуальную машину `monero-wallet-ws`.

## 4. В `dom0` делаем следующее:

+ Создаем файл `/etc/qubes-rpc/policy/user.monerod`:

```
[user@dom0 ~]$ sudo nano /etc/qubes-rpc/policy/user.monerod
```

Добавляем следующую строку:

```
monero-wallet-ws monerod-ws allow
```
