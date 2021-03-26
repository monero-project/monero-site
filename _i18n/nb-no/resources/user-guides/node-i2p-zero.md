{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Steg:

1. Last ned [Monero CLI]({{  site.baseurl }}/downloads/#cli).
2. Last ned og pakk ut den siste (ikke-GUI)-versjonen av I2P-zero: https://github.com/i2p-zero/i2p-zero/releases
3. Kjør I2P-zero ved å taste inn den i2p-zero-utpakkede katalogen og tast inn: `router/bin/i2p-zero`
4. (valgfritt) Finn din tilfeldig tildelte I2P-port ved å taste inn: `router/bin/tunnel-control.sh router.externalPort`. Av personvernhensyn avdekker vi ikke dette portnummeret til andre personer. Få brannmuren din til å videreføre trafikk gjennom denne porten slik at I2P-noden din er offentlig tilgjengelig. Hvis du ikke har mulighet til å tillate innkommende transaksjoner, vil alt fremdeles fungere, men I2P-noden din vil ikke hjelpe I2P-nettverket like mye som det hadde kunnet.
5. Opprett en socks-tunnel for utgående I2P-tilkoblinger ved å taste inn: `router/bin/tunnel-control.sh socks.create 8060`
6. Opprett en server-tunnel for innkommende I2P-tilkoblinger ved å taste inn: `router/bin/tunnel-control.sh server.create 127.0.0.1 8061`.
7. Kommandoen over vil resultere i en I2P-adresse som skrives ut til kommandolinjen, som ender med `.b32.i2p`. Dette er din nye I2P-adresse.
8. Kjør monerod ved å taste inn følgende kommando, og erstatt `XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.b32.i2p` med din egen I2P-adresse som ble skrevet ut i steg 6: `monerod --tx-proxy i2p,127.0.0.1:8060 --add-peer core5hzivg4v5ttxbor4a3haja6dssksqsmiootlptnsrfsgwqqa.b32.i2p --add-peer dsc7fyzzultm7y6pmx2avu6tze3usc7d27nkbzs5qwuujplxcmzq.b32.i2p --add-peer sel36x6fibfzujwvt4hf5gxolz6kd3jpvbjqg6o3ud2xtionyl2q.b32.i2p --add-peer yht4tm2slhyue42zy5p2dn3sft2ffjjrpuy7oc2lpbhifcidml4q.b32.i2p --anonymous-inbound XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.b32.i2p,127.0.0.1:8061 --detach`

Det var alt! Ikke bytt ut dsc****.b32.i2p-adressen med din egen, bare bytt ut XXXXXXX.b32.i2p. dsc****.b32.i2p-en er en frønode som hjelper deg med å oppdage andre I2P-tilgjengelige Monero-noder.

## Oppsett av Linux-tjenester slik at monerod og I2P-zero startes automatisk

Hvis du kjører Linux, er det nyttig å sette opp dette til å kjøre automatisk dersom maskinen noen gang startes på nytt. Du kan gjøre dette ved å opprette systemd-servicefiler:

Merk: sørg for å bytte ut versjonnumrene i filene under med versjonnumrene til monero og i2p-zero som du laster ned. Bytt også ut `<username>` og `<usergroup>` med din Linux-bruker og gruppenavn (bruk `whoami`- og `groups`-kommandoene hvis du ikke kjenner til dem).

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

Etter disse to filene er opprettet, eksekverer du:
````
systemctl daemon-reload
service i2pzero start
service monerod start
````

For å se utdataene til disse tjenestene, kan du bruke `journalctl -u i2pzero` og `journalctl -u monerod`

## Å kjøre din egen frønode (mipseed)

Hvis du vil kjøre din egen frønode (kjent som en 'mipseed') for å hjelpe andre med å oppdage I2P-tilgjengelige Monero-noder, kan du følge instruksjonene i [i2p-zero-arkivet](https://github.com/i2p-zero/i2p-zero/blob/master/mipseed.md).

*Den opprinnelige versjonen av denne guiden ble opprinnelig lastet opp i [i2p-zero-arkivet](https://github.com/i2p-zero/i2p-zero/blob/master/monerod-with-i2p-zero.md).*
