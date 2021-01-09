{% include disclaimer.html translated="yes" translationOutdated="yes" %}

Con [Qubes](https://qubes-os.org) más [Whonix](https://whonix.org) puedes tener un monedero de Monero sin conexión a la red y en ejecución en un sistema virtualmente aislado del daemon de Monero que tiene todo su tráfico sobre [Tor](https://torproject.org).

Qubes brinda la flexibilidad de crear VMs separadas fácilmente para diferentes propósitos. Primero crearás una estación de trabajo Whonix para el monedero sin conexión a la red. Después, otra estación de trabajo Whonix para el daemon que usará la puerta Whonix como su NetVM. Para comunicación entre el monedero y el daemon puedes usar Qubes [qrexec](https://www.qubes-os.org/doc/qrexec3/).

Esto es más seguro que otros enfoques que trazan el rpc del monedero a un servicio de Tor oculto, o que utilizan aislamiento físico pero aun así tienen conexión a la red para conectarse al daemon. En este enfoque no necesitas ninguna conexión al monedero, conservas los recursos de la red de Tor y se tiene menos latencia.


## 1. [Crear AppVMs Whonix](https://www.whonix.org/wiki/Qubes/Install):

+ Utilizando una estación de trabajo Whonix, crea dos estaciones de trabajo como sigue:

  - La primera estación de trabajo se usará para tu monedero, se referirá a ella como  `monero-wallet-ws`. Tendrás `NetVM` ajustado como `none`.

  - La segunda estación de trabajo será para el daemon `monerod`, se referirá a ella como `monerod-ws`. Tendrás `NetVM` ajustado como la puerta Whonix `sys-whonix`. Before moving on, make sure this workstation has enough private storage. You can estimate how much space you need by checking the size of the [raw blockchain]({{ site.baseurl }}/downloads/#blockchain). Keep in mind that the blockchain will take up more space with time.

## 2. En la AppVM `monerod-ws`:

+ Crea un archivo `systemd`.

```
user@host:~$ sudo nano /home/user/monerod.service
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

+ Hacer ejecutable a `monerod` en arranque editando el archivo `/rw/config/rc.local`.

```
user@host:~$ sudo nano /rw/config/rc.local
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
user@host:~$ sudo nano /rw/usrlocal/etc/qubes-rpc/user.monerod
```

Agrega esta línea:

```
socat STDIO TCP:localhost:18081
```

+ Apaga `monerod-ws`.

## 3. En la AppVM `monero-wallet-ws`:

+ Edita el archivo `/rw/config/rc.local`.

```
user@host:~$ sudo nano /rw/config/rc.local
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
