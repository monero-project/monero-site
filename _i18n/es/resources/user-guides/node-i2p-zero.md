{% include disclaimer.html translated="no" translationOutdated="no" %}

## Steps:

1. Descarga la [CLI de Monero]({{ site.baseurl }}/downloads/#cli).
2. Download and unzip the latest (non-GUI) version of I2P-zero:
   https://github.com/i2p-zero/i2p-zero/releases
3. Ejecuta I2P-zero ingresando el directorio i2p-zero descomprimido y
   escribiendo: `router/bin/i2p-zero`
4. (opcional) Averigua el puerto I2P que te fue asignado de manera aleatoria
   escribiendo: `router/bin/tunnel-control.sh router.externalPort`. Por
   razones de privacidad, no reveles este número de puerto a otras
   personas. Ordénale a tu firewall que redireccione el tráfico a través de
   este puerto para que tu nodo I2P sea públicamente accesible. Si no tienes
   la habilidad para permitir conexiones entrantes, todo funcionará de igual
   manera, pero tu nodo I2P no ayudará a la red I2P tanto como podría.
5. Crea un túnel socks para las conexiones I2P salientes escribiendo:
   `router/bin/tunnel-control.sh socks.create 8060`
6. Crea un servidor túnel para las conexiones I2P entrantes escribiendo:
   `router/bin/tunnel-control.sh server.create 127.0.0.1 8061`.
7. El comando de arriba provocará que se imprima una dirección I2P en la
   línea de comandos, que terminará en `.b32.i2p`. Esta es tu nueva
   dirección I2P.
8. Ejecuta monerod escribiendo lo siguiente, reemplazando
   `XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.b32.i2p` con tu propia dirección I2P que
   fue impresa en el paso 6: `monerod --tx-proxy i2p,127.0.0.1:8060
   --add-peer core5hzivg4v5ttxbor4a3haja6dssksqsmiootlptnsrfsgwqqa.b32.i2p
   --add-peer dsc7fyzzultm7y6pmx2avu6tze3usc7d27nkbzs5qwuujplxcmzq.b32.i2p
   --add-peer sel36x6fibfzujwvt4hf5gxolz6kd3jpvbjqg6o3ud2xtionyl2q.b32.i2p
   --add-peer yht4tm2slhyue42zy5p2dn3sft2ffjjrpuy7oc2lpbhifcidml4q.b32.i2p
   --anonymous-inbound XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.b32.i2p,127.0.0.1:8061
   --detach`

That's it! Do not replace the dsc****.b32.i2p address with yours, only
replace the XXXXXXX.b32.i2p one. The dsc****.b32.i2p is a seed node that
will help you discover other I2P-accessible monero nodes.

## Setting up Linux services so that monerod and I2P-zero are automatically started

Si estás corriendo Linux, sería útil que configures todo esto para que corra
automáticamente por si la máquina alguna vez es reiniciada. Puedes hacer
este creando archivos de servicio systemd:

Note: take care to replace version numbers in the files below with the version numbers of monero and i2p-zero that you download. Also replace `<username>` and `<usergroup>` with your Linux user and group names (use `whoami` and `groups` commands if you don't know them).

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

After creating these two files, run:
````
systemctl daemon-reload
service i2pzero start
service monerod start
````

Para ver la salida de estos servicios, usa `journalctl -u i2pzero` y
`journalctl -u monerod`

## Running your own seed node (mipseed)

If you want to run your own seed node (known as a 'mipseed') to help other
people discover I2P-accessible Monero nodes, follow instructions [in the
i2p-zero repo](https://github.com/i2p-zero/i2p-zero/blob/master/mipseed.md).

*The original version of this guide was originally uploaded on the [i2p-zero repository](https://github.com/i2p-zero/i2p-zero/blob/master/monerod-with-i2p-zero.md).*
