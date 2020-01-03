{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
# Portemonnee isoleren van node met Qubes en Whonix

Met [Qubes](https://qubes-os.org) en [Whonix](https://whonix.org) kun je een Monero-portemonnee zonder netwerkverbinding uitvoeren op een virtueel systeem, geïsoleerd van de Monero-node, waarvan al het verkeer verplicht via [Tor](https://torproject.org) loopt.

Qubes biedt de flexibiliteit om eenvoudig afzonderlijke virtual machines voor verschillende doeleinden te maken. Eerst maak je een Whonix-werkstation voor de portemonnee, zonder netwerkverbinding. Vervolgens maak je een ander Whonix-werkstation dat je Whonix-gateway gebruikt als NetVM. Voor communicatie tussen de portemonnee en de node kun je gebruik maken van Qubes [qrexec](https://www.qubes-os.org/doc/qrexec3/).

Dit is veiliger dan andere benaderingen, waarbij de RPC van de portemonnee via een verborgen Tor-service wordt geleid, of fysieke isolatie wordt gebruikt, maar er nog steeds een netwerkverbinding nodig is voor communicatie met de node. Met deze methode is er helemaal geen netwerkverbinding nodig voor de portemonnee, ga je zuiniger om met het Tor-netwerk en is er minder vertraging.


## 1. [Maak Whonix AppVM's](https://www.whonix.org/wiki/Qubes/Install):

+ Met een sjabloon voor Whonix-werkstations maak je op de volgende manier twee werkstations:

  - Het eerste werkstation wordt gebruikt voor je portemonnee. We noemen het `monero-wallet-ws`. Hier stel je `NetVM` in op `none`.

  - Het tweede werkstation wordt gebruikt voor `monerod`, de daemon voor de node. We noemen het `monerod-ws`. Hier stel je `NetVM` in op de Whonix-gateway `sys-whonix`.

## 2. In de AppVM `monerod-ws`:

+ Download, verifieer en installeer de Monero-software.

```
user@host:~$ curl -O "https://downloads.getmonero.org/cli/monero-linux-x64-v0.11.1.0.tar.bz2" -O "{{ site.baseurl }}/downloads/hashes.txt"
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

+ Kopieer het uitvoerbare bestand `monero-wallet-cli` naar de VM `monero-wallet-ws`.

```
user@host:~$ qvm-copy-to-vm monero-wallet-ws monero-v0.11.1.0/monero-wallet-cli
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

+ Verplaats het uitvoerbare bestand `monero-wallet-cli`.

```
user@host:~$ sudo mv QubesIncoming/monerod-ws/monero-wallet-cli /usr/local/bin/
```

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
