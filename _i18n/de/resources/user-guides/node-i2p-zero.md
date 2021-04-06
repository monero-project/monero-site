{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Schritte:

1. Lade das [Monero-CLI-Wallet]({{  site.baseurl }}/downloads/#cli) herunter.
2. Lade und entpacke die letzte (nicht-GUI-)Version von I2P-zero: https://github.com/i2p-zero/i2p-zero/releases
3. Starte I2P-zero, indem du in das entpackte I2P-zero-Verzeichnis navigierst und `router/bin/i2p-zero` eingibst.
4. (Optional) Ermittle deinen dir zufällig zugeteilten I2P-Port, indem du `router/bin/tunnel-control.sh router.externalPort` eintippst. Aus Gründen der Privatsphäre solltest du diese Portnummer nicht an andere weitergeben. Gib Datenverkehr über diesen Port auf deiner Firewall frei, damit dein I2P-Node öffentlich erreichbar ist. Wenn du eingehende Verbindungen nicht ermöglichen kannst, funktioniert zwar alles weiterhin, allerdings wird dein I2P-Node das I2P-Netzwerk nicht mit seiner vollen Stärke unterstützen.
5. Erstelle einen SOCKS-Tunnel für ausgehende I2P-Verbindungen, indem du `router/bin/tunnel-control.sh socks.create 8060` eingibst.
6. Erstelle einen Servertunnel für eingehende I2P-Verbindungen, indem du `router/bin/tunnel-control.sh server.create 127.0.0.1 8061` eintippst.
7. Der obige Befehl resultiert in einer I2P-Adresse, welche mit `.b32.i2p`endet und in der Befehlszeile ausgegeben wird. Dies ist deine neue I2P-Adresse.
8. Starte Monerod durch die Eingabe des folgenden Befehls (`XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.b32.i2p`muss hierbei mit deiner eigenen, in Schritt 6 ausgegebenen I2P-Adresse ersetzt werden): `monerod --tx-proxy i2p,127.0.0.1:8060 --add-peer core5hzivg4v5ttxbor4a3haja6dssksqsmiootlptnsrfsgwqqa.b32.i2p --add-peer dsc7fyzzultm7y6pmx2avu6tze3usc7d27nkbzs5qwuujplxcmzq.b32.i2p --add-peer sel36x6fibfzujwvt4hf5gxolz6kd3jpvbjqg6o3ud2xtionyl2q.b32.i2p --add-peer yht4tm2slhyue42zy5p2dn3sft2ffjjrpuy7oc2lpbhifcidml4q.b32.i2p --anonymous-inbound XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.b32.i2p,127.0.0.1:8061 --detach`

Das war's! Ersetze nicht die dsc.b32.i2p-Adresse mit der deinen, sondern ausschließlich die XXXXXXX.b32.i2p-Adresse. Die dsc.b32.i2p-Adresse ist ein Seed-Node, der dir dabei hilft, andere via I2P zugängliche Monero-Nodes zu finden.

## Linux-Dienste so einrichten, dass Monerod und I2P-zero automatisch gestartet werden

Bei Verwendung von Linux kann es nützlich sein, es so einzurichten, dass bei einem Neustart des Geräts alles automatisch gestartet und betrieben wird. Dies erreichst du durch die Erstellung von systemd-Servicedateien:

Info: Stelle sicher, dass du die Versionsnummern in den untenstehenden Dateien mit den Versionsnummern der von dir heruntergeladenen Monero- und I2P-zero-Dateien ersetzt. Tausche ebenso den `<username>` und die `<usergroup>` mit deinen Linux-Benutzer- und Gruppennamen (falls du diese nicht kennst, kannst du sie mit den Befehlen `whoami` und `groups` herausfinden).

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

Starte nach der Erstellung dieser zwei Dateien Folgendes:
````
systemctl daemon-reload
service i2pzero start
service monerod start
````

Um den Output dieser Dienste anzusehen, kannst du `journalctl -u i2pzero` und `journalctl -u monerod` verwenden.

## Betreiben deines eigenen Seed-Nodes (Mipseed)

Solltest du deinen eigenen Seed-Node (auch bekannt als "Mipseed") betreiben und damit anderen helfen wollen, via I2P zugängliche Monero-Nodes zu finden, folge den Anweisungen im [I2P-zero-Repository](https://github.com/i2p-zero/i2p-zero/blob/master/mipseed.md).

*Die Originalversion dieser Anleitung wurde ursprünglich im [I2P-zero-Repository](https://github.com/i2p-zero/i2p-zero/blob/master/monerod-with-i2p-zero.md) hochgeladen.*