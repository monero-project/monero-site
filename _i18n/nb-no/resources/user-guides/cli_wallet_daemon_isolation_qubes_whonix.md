{% include disclaimer.html translated="yes" translationOutdated="no" %}

Med [Qubes](https://qubes-os.org) + [Whonix](https://whonix.org) kan du ha en Monero-lommebok som er uten nettverking og som kjører på et virtuelt, isolert system fra Monero daemonen som har all sin trafikk tvunget over [Tor](https://torproject.org).

Qubes gir fleksibiliteten til å enkelt opprette VM-er for ulike formål. Du må først opprette en Whonix-arbeidsstasjon for lommeboken uten nettverking. Deretter en annen Whonix-arbeidsstasjon for daemonen som bruker din Whonix-port i og med at den er NetVM. For kommunikasjon mellom lommebøkene og daemon, kan du bruke Qubes [qrexec](https://www.qubes-os.org/doc/qrexec3/).

Dette er tryggere enn andre tilnærminger som ruter lommebokens rpc over en skjult Tor-service, eller en som bruker fysisk isolasjon men som fremdeles trenger nettverking for å koble seg til daemonen. På denne måten trenger du ikke en nettverksforbindelse til lommeboken. Du bevarer ressursene til Tor-nettverket, og det er også mindre latens.


## 1. [Opprett Whonix AppVM-er](https://www.whonix.org/wiki/Qubes/Install):

+ Opprett følgende to arbeidsstasjoner ved å bruke en Whonix-arbeidsstasjonmal:

  - Den første arbeidsstasjonen vil brukes for lommeboken din, og vil refereres til som `monero-wallet-ws`. Du må sette din `NetVM` til `none`.

  - Den andre arbeidsstasjonen vil være for `monerod`-daemonen, og vil refereres til som `monerod-ws`. Din `NetVM` må være satt til Whonix-porten `sys-whonix`. Før du går videre må du sørge for at denne arbeidsstasjonen har nok privat lagringsplass. Du kan anslå hvor mye lagringsplass du trenger ved å sjekke størrelsen på den [rå blokkjeden]({{ site.baseurl }}/downloads/#blockchain). Husk at blokkjeden over tid vil bruke oppta lagringsplass.

## 2. I AppVM-en `monerod-ws`:

+ Opprett en `systemd`-fil.

```
user@host:~$ sudo nano /home/user/monerod.service
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

ExecStart=/usr/bin/monerod --detach --data-dir=/home/user/.bitmonero \
    --no-igd --pidfile=/home/user/.bitmonero/monerod.pid \
    --log-file=/home/user/.bitmonero/bitmonero.log --p2p-bind-ip=127.0.0.1

Restart=always
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

+ Få `monerod` daemon til å kjøre på oppstart ved å redigere filen `/rw/config/rc.local`.

```
user@host:~$ sudo nano /rw/config/rc.local
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
user@host:~$ sudo nano /rw/usrlocal/etc/qubes-rpc/user.monerod
```

Legg til denne linjen:

```
socat STDIO TCP:localhost:18081
```

+ Skru av `monerod-ws`.

## 3. I AppVM-en `monero-wallet-ws`:

+ Rediger filen `/rw/config/rc.local`.

```
user@host:~$ sudo nano /rw/config/rc.local
```

Legg til følgende linje nederst:

```
socat TCP-LISTEN:18081,fork,bind=127.0.0.1 EXEC:"qrexec-client-vm monerod-ws user.monerod"
```

Gjør filen kjørbar.

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
