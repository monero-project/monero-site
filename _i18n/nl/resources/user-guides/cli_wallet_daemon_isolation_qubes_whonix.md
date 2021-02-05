{% include disclaimer.html translated="yes" translationOutdated="yes" %}

Met [Qubes](https://qubes-os.org) en [Whonix](https://whonix.org) kun je een Monero-portemonnee zonder netwerkverbinding uitvoeren op een virtueel systeem, geïsoleerd van de Monero-node, waarvan al het verkeer verplicht via [Tor](https://torproject.org) loopt.

Qubes biedt de flexibiliteit om eenvoudig afzonderlijke virtual machines voor verschillende doeleinden te maken. Eerst maak je een Whonix-werkstation voor de portemonnee, zonder netwerkverbinding. Vervolgens maak je een ander Whonix-werkstation dat je Whonix-gateway gebruikt als NetVM. Voor communicatie tussen de portemonnee en de node kun je gebruik maken van Qubes [qrexec](https://www.qubes-os.org/doc/qrexec3/).

Dit is veiliger dan andere benaderingen, waarbij de RPC van de portemonnee via een verborgen Tor-service wordt geleid, of fysieke isolatie wordt gebruikt, maar er nog steeds een netwerkverbinding nodig is voor communicatie met de node. Met deze methode is er helemaal geen netwerkverbinding nodig voor de portemonnee, ga je zuiniger om met het Tor-netwerk en is er minder vertraging.


## 1. [Maak Whonix AppVM's](https://www.whonix.org/wiki/Qubes/Install):

+ Met een sjabloon voor Whonix-werkstations maak je op de volgende manier twee werkstations:

  - Het eerste werkstation wordt gebruikt voor je portemonnee. We noemen het `monero-wallet-ws`. Hier stel je `NetVM` in op `none`.

  - Het tweede werkstation wordt gebruikt voor `monerod`, de daemon voor de node. We noemen het `monerod-ws`. Hier stel je `NetVM` in op de Whonix-gateway `sys-whonix`. Before moving on, make sure this workstation has enough private storage. You can estimate how much space you need by checking the size of the [raw blockchain]({{ site.baseurl }}/downloads/#blockchain). Keep in mind that the blockchain will take up more space with time.

## 2. In de AppVM `monerod-ws`:

+ Maak een `systemd`-bestand.

```
user@host:~$ sudo gedit /home/user/monerod.service
```

Plak de volgende gegevens:

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

+ Zorg dat de daemon `monerod` wordt uitgevoerd bij het opstarten door het bestand `/rw/config/rc.local` te bewerken.

```
user@host:~$ sudo gedit /rw/config/rc.local
```

Voeg onderaan deze regels toe:

```
cp /home/user/monerod.service /lib/systemd/system/
systemctl start monerod.service
```

Maak het bestand uitvoerbaar.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Maak het RPC-actiebestand.

```
user@host:~$ sudo mkdir /rw/usrlocal/etc/qubes-rpc
user@host:~$ sudo gedit /rw/usrlocal/etc/qubes-rpc/user.monerod
```

Voeg deze regel toe:

```
socat STDIO TCP:localhost:18081
```

+ Sluit `monerod-ws` af.

## 3. In de AppVM `monero-wallet-ws`:

+ Bewerk het bestand `/rw/config/rc.local`.

```
user@host:~$ sudo gedit /rw/config/rc.local
```

Voeg onderaan deze regel toe:

```
socat TCP-LISTEN:18081,fork,bind=127.0.0.1 EXEC:"qrexec-client-vm monerod-ws user.monerod"
```

Maak het bestand uitvoerbaar.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Sluit `monero-wallet-ws` af.

## 4. In `dom0`:

+ Maak het bestand `/etc/qubes-rpc/policy/user.monerod`:

```
[user@dom0 ~]$ sudo nano /etc/qubes-rpc/policy/user.monerod
```

Voeg deze regel toe:

```
monero-wallet-ws monerod-ws allow
```
