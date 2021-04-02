{% include disclaimer.html translated="yes" translationOutdated="no" %}

# monerod

`monerod` is de daemon-software die onderdeel uitmaakt van de Monero-code. Het is een console-programma waarmee de blockchain wordt beheerd. Terwijl een Bitcoin-portemonnee zowel een account als de blockchain beheert, worden deze functies in Monero gescheiden: `monerod` beheert de blockchain en `monero-wallet-cli` beheert het account.

Deze handleiding gaat ervan uit dat je al een VPS-account hebt ingesteld en SSH gebruikt als tunnel om te communiceren met de serverconsole.

## Linux, 64-bits (Ubuntu 16.04 LTS)

### Zorg dat poort 18080 open staat

`monerod` gebruikt deze poort om te communiceren met andere nodes op het Monero-netwerk.

Voorbeeld als je `ufw` gebruikt: `sudo ufw allow 18080`
Voorbeeld als je `iptables` gebruikt: `sudo iptables -A INPUT -p tcp --dport 18080 -j ACCEPT`

### Download de huidige Monero Core-binaries

    wget https://downloads.getmonero.org/linux64

### Maak een directory aan en pak de bestanden uit.

    mkdir monero
    tar -xjvf linux64 -C monero

### Start de daemon

    cd monero
    ./monerod

### Opties:

Een lijst met alle opties en instellingen weergeven:

    ./monerod --help

De daemon starten als een achtergrondproces:

    ./monerod --detach

De uitvoer van `monerod` als achtergrondproces loggen:

    tail -f ~/.bitmonero/bitmonero.log

De VPS beveiligen met automatische updates:

https://help.ubuntu.com/community/AutomaticSecurityUpdates


