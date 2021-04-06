{% include disclaimer.html translated="yes" translationOutdated="no" %}

# Monerod

`monerod` ist die Hintergrunddienst-Software, die mit der Monero-Basissoftware einhergeht. Es ist ein Konsolenprogramm, das die Blockchain managt. Während ein Bitcoin-Wallet gleichzeitig das Konto wie auch die Blockchain managt, ist dies bei Monero separiert: `monerod` bewerkstelligt die Blockchain und `monero-wallet-cli` das Konto.

Diese Anleitung setzt voraus, dass du bereits einen VPS-Account angelegt hast und dich via SSH-Tunnel zur Server-Konsole verbinden kannst. 

## Linux, 64-bit (Ubuntu 16.04 LTS)

### Stelle sicher, dass Port 18080 geöffnet ist

`monerod` nutzt diesen Port zur Kommunikation mit anderen Nodes innerhalb des Monero-Netzwerks.

Beispiel bei Verwendung von `ufw`: `sudo ufw allow 18080`
Beispiel bei Verwendung von `iptables`: `sudo iptables -A INPUT -p tcp --dport 18080 -j ACCEPT`

### Lade die aktuelle Monero-Kernsoftware herunter

    wget https://downloads.getmonero.org/linux64

### Erstelle ein Verzeichnis und extrahiere die Dateien

    mkdir monero
    tar -xjvf linux64 -C monero

### Starte den Hintergrunddienst

    cd monero
    ./monerod

### Optionen:

Zeige eine Liste aller Optionen und Einstellungen an:

    ./monerod --help

Starte den Hintergrunddienst als Hintergrundprozess:

    ./monerod --detach

Überwache den Output von `monerod`, sofern als Hintergrunddienst betrieben:

    tail -f ~/.bitmonero/bitmonero.log

Erhalte die Sicherheit des VPS durch automatische Aktualisierungen:

https://help.ubuntu.com/community/AutomaticSecurityUpdates


