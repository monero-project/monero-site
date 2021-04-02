{% include disclaimer.html translated="yes" translationOutdated="no" %}

# monerod

`monerod` jest oprogramowaniem daemona, które współpracuje z Monero. To program konsoli zarządzający łańcuchem bloków. Podczas gdy portfel Bitcoina zarządza zarówno kontem, jak i łańcuchem bloków, Monero rozdzielił je, aby `monerod` operował łańcuchem, a `monero-wallet-cli` kontem.

Ten przewodnik zakłada, że już założyłeś swoje konto VPS i używasz SSH do tunelowania do konsoli serwerowej.

## Linux, 64-bit (Ubuntu 16.04 LTS)

### Upewnij się, że port 18080 jest otwarty

`monerod` korzysta z tego portu do komunikacji z innymi węzłami w sieci Monero.

Przykład przy użyciu `ufw`: `sudo ufw allow 18080`
Przykład przy użyciu `iptables`: `sudo iptables -A INPUT -p tcp --dport 18080 -j ACCEPT`

### Ściągnij aktualne pliki binarne Centrum Monero

    wget https://downloads.getmonero.org/linux64

### Załóż folder i wypakuj pliki

    mkdir monero
    tar -xjvf linux64 -C monero

### Uruchom daemona

    cd monero
    ./monerod

### Opcje:

Pokaż całą listę opcji i ustawień:

    ./monerod --help

Uruchom daemona w tle:

    ./monerod --detach

Monitoruj rezultaty `monerod`, jeśli daemon jest uruchomiony:

    tail -f ~/.bitmonero/bitmonero.log

Utrzymuj VPS w bezpieczeństwie, korzystając z autoaktualizacji:

https://help.ubuntu.com/community/AutomaticSecurityUpdates


