{% include disclaimer.html translated="yes" translationOutdated="no" %}

Mit [Qubes](https://qubes-os.org) + [Whonix](https://whonix.org) ist es möglich, ein nicht vernetztes Wallet in einem System zu betreiben, welches quasi vom Hintergrunddienst isoliert ist und seinen Datenverkehr über [Tor](https://torproject.org/de/) laufen lässt.

Qubes ermöglicht es, flexibel und einfach separate VMs für unterschiedliche Zwecke zu erstellen. Zunächst erstellst du eine Whonix-Workstation für das nicht vernetzte Wallet. Als Nächstes eine weitere Whonix-Workstation für den Hintergrunddienst, der dein Whonix-Gateway als seine NetVM nutzt. Zur Kommunikation zwischen Wallet und Hintergrunddienst kannst du Qubes' [Qrexec](https://www.qubes-os.org/doc/qrexec3/) nutzen.

Dies ist sicherer als andere Methoden, die etwa den RPC des Wallets durch einen durch Tor verborgenen Service leiten oder physisch isoliert sind, aber dennoch im Netzbetrieb sind, um zum Hintergrunddienst zu verbinden. Du benötigst auf diese Weise keine Netzwerkverbindung für dein Wallet, du schützt die Ressourcen des Tor-Netzwerks und es gibt weniger Verzögerung.

## 1. [Erstellen von Whonix-AppVMs](https://www.whonix.org/wiki/Qubes/Install):

+ Erstelle unter Verwendung einer Whonix-Workstation-Vorlage zwei Workstations auf die folgende Weise:

  - Die erste Workstation wird für dein Wallet genutzt und als `monero-wallet-ws` bezeichnet. `NetVM` wird hier auf `none` festgelegt.

  - Die zweite Workstation wird für den Hintergrunddienst `monerod` verwendet und als `monerod-ws` bezeichnet. `NetVM` ist in diesem Fall auf das Whonix-Gateway `sys-whonix` festgelegt. Stelle vor dem Fortfahren sicher, dass diese Workstation ausreichend privaten Speicher hat. Wie viel Speicher du benötigen wirst, kannst du schätzen, indem du die Größe der ["rohen" Blockchain]({{ site.baseurl }}/downloads/#blockchain) überprüfst. Behalte im Hinterkopf, dass die Blockchain mit der Zeit mehr Platz einnehmen wird.

## 2. In der AppVM `monerod-ws`:

+ Erstelle eine `systemd`-Datei.

```
user@host:~$ sudo nano /home/user/monerod.service
```

Füge die folgenden Inhalte ein:

```
[Unit]
Description=Monero Full Node
After=network.target

[Service]
User=user
Group=user

Type=forking
PIDFile=/home/user/.bitmonero/monerod.pid

ExecStart=/usr/bin/monerod --detach --data-dir=/home/user/.bitmonero \
    --no-igd --pidfile=/home/user/.bitmonero/monerod.pid \
    --log-file=/home/user/.bitmonero/bitmonero.log --p2p-bind-ip=127.0.0.1

Restart=always
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

+ Stelle durch Abändern der Datei `/rw/config/rc.local` ein, dass der `monerod`-Hintergrunddienst bei Systemstart ausgeführt wird.

```
user@host:~$ sudo nano /rw/config/rc.local
```

Füge die folgenden Zeilen am unteren Ende hinzu:

```
cp /home/user/monerod.service /lib/systemd/system/
systemctl start monerod.service
```

Mache die Datei lauffähig.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Erstelle eine RPC-Action-File.

```
user@host:~$ sudo mkdir /rw/usrlocal/etc/qubes-rpc
user@host:~$ sudo nano /rw/usrlocal/etc/qubes-rpc/user.monerod
```

Füge folgende Zeile hinzu:

```
socat STDIO TCP:localhost:18081
```

+ Fahre `monerod-ws` herunter.

## 3. In der AppVM `monero-wallet-ws`:

+ Bearbeite die Datei `/rw/config/rc.local`.

```
user@host:~$ sudo nano /rw/config/rc.local
```

Füge folgende Zeilen am unteren Ende hinzu:

```
socat TCP-LISTEN:18081,fork,bind=127.0.0.1 EXEC:"qrexec-client-vm monerod-ws user.monerod"
```

Mache die Datei lauffähig.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Fahre `monero-wallet-ws` herunter.

## 4. In `dom0`:

+ Erstelle die Datei `/etc/qubes-rpc/policy/user.monerod`:

```
[user@dom0 ~]$ sudo nano /etc/qubes-rpc/policy/user.monerod
```

Füge die folgende Zeile hinzu:

```
monero-wallet-ws monerod-ws allow
```
