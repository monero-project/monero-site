{% include disclaimer.html translated="yes" translationOutdated="no" %}

# monerod

`monerod` er @daemon-programvaren som kommer med Monero-treet. Den er et konsollprogram og håndterer blokkjeden. Mens en bitcoin-lommebok håndterer både en konto og blokkjeden, separerer Monero disse: `monerod` håndterer blokkjeden og `monero-wallet-cli` håndterer kontoen.

Denne guiden antar at du allerede har satt opp VPS-konto og at du bruker SSH-en til å tunnelere til serverkonsollen.

## Linux, 64-bit (Ubuntu 16.04 LTS)

### Sørg for at port 18080 er åpen

`monerod` bruker denne porten til å kommunisere med andre noder i Monero-nettverket.

Eksempel hvis du bruker `ufw`: `sudo ufw allow 18080`
Eksempel hvis du bruker `iptables`: `sudo iptables -A INPUT -p tcp --dport 18080 -j ACCEPT`

### Last ned de gjeldende Monero Core-binærfilene

    wget https://downloads.getmonero.org/linux64

### Lag en katalog og pakk ut filene.

    mkdir monero
    tar -xjvf linux64 -C monero

### Start opp daemon

    cd monero
    ./monerod

### Valg:

For å vise en liste over alle valgene og innstillingene:

    ./monerod --help

For å starte opp daemon som bakgrunnsprosess:

    ./monerod --detach

For å overvåke utdataene til `monerod` hvis den kjører som daemon:

    tail -f ~/.bitmonero/bitmonero.log

Hold VPS-en sikker med autooppdateringer:

https://help.ubuntu.com/community/AutomaticSecurityUpdates


