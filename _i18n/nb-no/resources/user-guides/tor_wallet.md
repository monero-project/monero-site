{% include disclaimer.html translated="yes" translationOutdated="no" %}

Under viser vi deg et eksempel på konfigurasjon som lar deg kjøre en Monero @daemon (f.eks. på en hjemmeserver eller VPS) som du kan koble til fra en annen PC som kjører lommeboken din. Vi gjør dette over Tor-nettverket for å gjenfinne informasjon om transaksjoner som lommeboken din trenger. Fordelene ved denne tilnærmingen er at daemon (`monerod`) kan være på hele tiden mens blokker sendes/mottas mens lommeboken kan kobles til ved behov og få tilgang til hele blokkjeden. [Monerujo](https://www.monerujo.io/) bør også fungere via [Orbot](https://guardianproject.info/apps/org.torproject.android/).  Fordi Tor-nettverket gir kryptering og autentisering, kan du være sikker på at RPC-akkreditivene dine ikke lekkes. Tor løser også ofte problemer som man kan se på hjemmeservere tilknyttet port-videresending, endring av IP-adresser osv. – det bare virker. Dette oppsettet vil også tilsløre det faktum at du kobler deg til en ekstern Monero-node. Det er testet med Monero `v0.15.0.1`, der en lommebok fra en bærbar MAC kobles til en ekstern Linux-node (Ubuntu 18.04.2).

## Å opprette et Tor-nettverk for RPC

Sørg for at [Tor er installert](https://community.torproject.org/relay/setup/bridge/debian-ubuntu/) og kjører på riktig måte før du fortsetter.

Vi trenger kun å konfigurere RPC-tjenesten til å kjøre som en skjult tjeneste her på `18081`.

Fil: `/etc/torrc`

```
HiddenServiceDir /var/lib/tor/monero-service/
HiddenServicePort 18081 127.0.0.1:18081
```
Start Tor på nytt:
```
sudo systemctl restart tor@default
```

Sørg for at Tor har startet opp riktig:
```
sudo systemctl status tor@default.service
```

Hvis alt ser bra ut, kan du lage et notat av navnet på den skjulte tjenesten (onion-adressen):
```
sudo cat /var/lib/tor/monero-service/hostname
```
Den vil se ut som dette: 4dcj312uxag2r6ye.onion -- bruk denne for `HIDDEN_SERVICE` under.

### Å konfigurere Daemon til å tillate RPC

I dette eksempelet bruker vi ikke Tor til å samhandle med p2p-nettverket, men kun for å koble til en Monero-node, så det er kun RPC-skjulte tjenester som trengs.

Fil: `~/.bitmonero/bitmonero.conf` (i hjemkatalogen til Monero-brukeren)

```
no-igd=1
restricted-rpc=1
rpc-login=USERNAME:PASSWORD
```
(Finn på et brukernavn (USERNAME) og passord (PASSWORD) som brukes med RPC-en)

Start daemon på nytt: `monerod stop_daemon; sleep 10; monerod --detach`

Sørg for at daemon startet ordentlig:
```
tail -f ~/.bitmonero/bitmonero.log
```

## Å koble til en node fra en lokal lommebok

Sørg for at du har Tor som kjører lokalt slik at du kan koble til Tor-nettverket. En enkel måte på Macen er å bare starte Tor-nettleseren og bruke Tor dens daemon.

Deretter kan du teste en enkel RPC-kommando, f.eks.:
```
curl --socks5-hostname 127.0.0.1:9150 -u USERNAME:PASSWORD --digest -X POST http://HIDDEN_SERVICE.onion:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_info"}' -H 'Content-Type: application/json'
```
Bytt ut `USERNAME`, `PASSWORD`, og `HIDDEN_SERVICE` med verdiene over. Endre `9150` til en annen port hvis det trengs av din lokale Tor daemon.

Når du utfører kommandoen, bør du få litt informasjon om den eksterne daemonen hvis alt fungerer som det skal. Hvis ikke, kan du legge til en ` -v ` i begynnelsen og prøve å feilsøke hvorfor den ikke kobler seg til. Sjekk brannmurer, passord osv.

Når den fungerer, kan du koble til ved å bruke CLI-lommeboken din:
```
./monero-wallet-cli --proxy 127.0.0.1:9150 --daemon-host HIDDEN_SERVICE.onion --trusted-daemon --daemon-login USERNAME:PASSWORD --wallet-file ~/PATH/TO/YOUR/WALLET
```
Bytt ut verdiene over etter behov.

## GUI

Hvis du er interessert i å eksperimentere med GUI-en over Tor, kan du prøve `torsocks` (merk at denne kan lekke informasjon -- ikke stol på den hvis livet ditt avhenger av å opprettholde anonymitet).  Her er et eksempel på MacOS. Juster verdiene etter behov for Linux GUI-en:
```
torsocks --port 9150 /Applications/monero-wallet-gui.app/Contents/MacOS/monero-wallet-gui
```

Dette lar GUI-en kommunisere med Tor-nettverket. Når GUI-en er åpen og lommeboken lastet inn, må du konfigurere den til å koble til Tor-nettverket ditt ved å legge til onion-adressen din i: "Innstillinger > Node > Ekstern node > Adresse".

I fremtidige versjoner av GUI-en forventer vi å legge til direkte støtte for Tor/I2P slik at `torsocks` + kommandolinjen ikke trengs.

# Flere ressurser

* [ANONYMITY_NETWORKS.md](https://github.com/monero-project/monero/blob/master/ANONYMITY_NETWORKS.md)
* [Hvordan bruke Tor](https://github.com/monero-project/monero#using-tor) (Monero README)
