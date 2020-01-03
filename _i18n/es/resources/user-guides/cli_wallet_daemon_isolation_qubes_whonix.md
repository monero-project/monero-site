{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
# Aislamiento de Monedero CLI/Daemon con Qubes + Whonix

Con [Qubes](https://qubes-os.org) más [Whonix](https://whonix.org) puedes tener un monedero de Monero sin conexión a la red y en ejecución en un sistema virtualmente aislado del daemon de Monero que tiene todo su tráfico sobre [Tor](https://torproject.org).

Qubes brinda la flexibilidad de crear VMs separadas fácilmente para diferentes propósitos. Primero crearás una estación de trabajo Whonix para el monedero sin conexión a la red. Después, otra estación de trabajo Whonix para el daemon que usará la puerta Whonix como su NetVM. Para comunicación entre el monedero y el daemon puedes usar Qubes [qrexec](https://www.qubes-os.org/doc/qrexec3/).

Esto es más seguro que otros enfoques que trazan el rpc del monedero a un servicio de Tor oculto, o que utilizan aislamiento físico pero aun así tienen conexión a la red para conectarse al daemon. En este enfoque no necesitas ninguna conexión al monedero, conservas los recursos de la red de Tor y se tiene menos latencia.


## 1. [Crear AppVMs Whonix](https://www.whonix.org/wiki/Qubes/Install):

+ Utilizando una estación de trabajo Whonix, crea dos estaciones de trabajo como sigue:

  - La primera estación de trabajo se usará para tu monedero, se referirá a ella como  `monero-wallet-ws`. Tendrás `NetVM` ajustado como `none`.

  - La segunda estación de trabajo será para el daemon `monerod`, se referirá a ella como `monerod-ws`. Tendrás `NetVM` ajustado como la puerta Whonix `sys-whonix`.

## 2. En la AppVM `monerod-ws`:

+ Descarga, verifica e instala el software de Monero.

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
+ Crea un archivo `systemd`.

```
user@host:~$ sudo gedit /home/user/monerod.service
```

Pega el siguiente contenido:

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

+ Copia el ejecutable `monero-wallet-cli` al VM `monero-wallet-ws`.

```
user@host:~$ qvm-copy-to-vm monero-wallet-ws monero-v0.11.1.0/monero-wallet-cli
```

+ Hacer ejecutable a `monerod` en arranque editando el archivo `/rw/config/rc.local`.

```
user@host:~$ sudo gedit /rw/config/rc.local
```

Agrega estas líneas al final:

```
cp /home/user/monerod.service /lib/systemd/system/
systemctl start monerod.service
```

Hacer ejecutable el archivo.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Crear archivo de acción rpc.

```
user@host:~$ sudo mkdir /rw/usrlocal/etc/qubes-rpc
user@host:~$ sudo gedit /rw/usrlocal/etc/qubes-rpc/user.monerod
```

Agrega esta línea:

```
socat STDIO TCP:localhost:18081
```

+ Apaga `monerod-ws`.

## 3. En la AppVM `monero-wallet-ws`:

+ Mueve el ejecutable `monero-wallet-cli`.

```
user@host:~$ sudo mv QubesIncoming/monerod-ws/monero-wallet-cli /usr/local/bin/
```

+ Edita el archivo `/rw/config/rc.local`.

```
user@host:~$ sudo gedit /rw/config/rc.local
```

Agrega la siguiente línea al final:

```
socat TCP-LISTEN:18081,fork,bind=127.0.0.1 EXEC:"qrexec-client-vm monerod-ws user.monerod"
```

Hacer ejecutable el archivo.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Apaga `monero-wallet-ws`.

## 4. En `dom0`:

+ Crea el archivo `/etc/qubes-rpc/policy/user.monerod`:

```
[user@dom0 ~]$ sudo nano /etc/qubes-rpc/policy/user.monerod
```

Agrega la siguiente línea:

```
monero-wallet-ws monerod-ws allow
```
