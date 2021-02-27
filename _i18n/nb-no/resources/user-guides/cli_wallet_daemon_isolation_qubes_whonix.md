{% include disclaimer.html translated="yes" translationOutdated="no" %}

Med [Qubes](https://qubes-os.org) + [Whonix](https://whonix.org) kan du ha en Monero-lommebok som er uten nettverking og som kjører på et virtuelt, isolert system fra Monero daemonen som har all sin trafikk tvunget over [Tor](https://torproject.org).

Qubes gir fleksibiliteten til å enkelt opprette VM-er for ulike formål. Du må først opprette en Whonix-arbeidsstasjon for lommeboken uten nettverking. Deretter en annen Whonix-arbeidsstasjon for daemonen som bruker din Whonix-port i og med at den er NetVM. For kommunikasjon mellom lommebøkene og daemon, kan du bruke Qubes [qrexec](https://www.qubes-os.org/doc/qrexec3/).

Dette er tryggere enn andre tilnærminger som ruter lommebokens rpc over en skjult Tor-service, eller en som bruker fysisk isolasjon men som fremdeles trenger nettverking for å koble seg til daemonen. På denne måten trenger du ikke en nettverksforbindelse til lommeboken. Du bevarer ressursene til Tor-nettverket, og det er også mindre latens.


## 1. [Opprett Whonix AppVM-er](https://www.whonix.org/wiki/Qubes/Install):

+ Opprett følgende to arbeidsstasjoner ved å bruke en Whonix-arbeidsstasjonmal:

  - Den første arbeidssstasjonen vil brukes for lommeboken din, og vil refereres til som `monero-wallet-ws`. Du må sette din `NetVM` til `none`.

  - Den andre arbeidsstasjonen vil være for `monerod`-daemonen, og vil refereres til som `monerod-ws`. Din `NetVM` må være satt til Whonix-porten `sys-whonix`.

## 2. I AppVM-en `monerod-ws`:

+ Last ned, verifiser og installer Monero-programvare.

```
user@host:~$ curl -O "https://downloads.getmonero.org/cli/monero-linux-x64-v0.11.1.0.tar.bz2" -O "{{ site.baseurl_root }}/downloads/hashes.txt"
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
+ Opprett en `systemd`-fil.

```
user@host:~$ sudo gedit /home/user/monerod.service
```

Lim inn følgende innhold:

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

+ Kopier `monero-wallet-cli` som er kjørbar til `monero-wallet-ws`-VM-en.

```
user@host:~$ qvm-copy-to-vm monero-wallet-ws monero-v0.11.1.0/monero-wallet-cli
```

+ Få `monerod` daemon til å kjøre på oppstart ved å redigere filen `/rw/config/rc.local`.

```
user@host:~$ sudo gedit /rw/config/rc.local
```

Legg til disse linjene nederst:

```
cp /home/user/monerod.service /lib/systemd/system/
systemctl start monerod.service
```

Gjør filen kjørbar.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Opprett en rpc-handlingsfil.

```
user@host:~$ sudo mkdir /rw/usrlocal/etc/qubesp-rpc
user@host:~$ sudo gedit /rw/usrlocal/etc/qubes-rpc/user.monerod
```

Legg til denne linjen:

```
socat STDIO TCP:localhost:18081
```

+ Skru av `monerod-ws`.

## 3. I AppVM-en `monero-wallet-ws`:

+ Flytt den eksekverbare `monero-wallet-cli`.

```
user@host:~$ sudo mv QubesIncoming/monerod-ws/monero-wallet-cli /usr/local/bin/
```

+ Rediger filen `/rw/config/rc.local`.

```
user@host:~$ sudo gedit /rw/config/rc.local
```

Legg til følgende linje nederst:

```
socat TCP-LISTEN:18081,fork,bind=127.0.0.1 EXEC:"qrexec-client-vm monerod-ws user.monerod"
```

Gjør filen eksekverbar.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Slå av `monero-wallet-ws`.

## 4. I `dom0`:

+ Opprett filen `/etc/qubes-rpc/policy/user.monerod`:

```
[user@dom0 ~]$ sudo nano /etc/qubes-rpc/policy/user.monerod
```

Legg til følgende linje:

```
monero-wallet-ws monerod-ws allow
```
