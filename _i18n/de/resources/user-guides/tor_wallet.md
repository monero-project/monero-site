{% include disclaimer.html translated="yes" translationOutdated="no" %}

Unten findest du eine beispielhafte Konfiguration, mit welcher es dir möglich ist, einen Monero-Hintergrunddienst (etwa auf einem Heim-Server oder VPS) zu betreiben, zu dem du dich von einem anderen Rechner, auf welchem dein Wallet läuft, verbinden kannst. Über das Anonymitätsnetzwerk Tor werden die für dein Wallet benötigten Transaktionsinformationen wiederhergestellt. Das Gute an dieser Herangehensweise ist, dass der Hintergrunddienst (`monerod`) allzeit betrieben werden und damit dauerhaft Blöcke senden/empfangen kann, während das Wallet lediglich bei Bedarf - wenn es Zugriff auf die gesamte Blockchain benötigt - zu diesem verbunden werden kann. [Monerujo](https://www.monerujo.io/) sollte auch via [Orbot](https://guardianproject.info/apps/org.torproject.android/) laufen. Da Tors versteckte Dienste Verschlüsselung und Authentifizierung bieten, kannst du dir sicher sein, dass deine RPC-Anmeldedaten nicht ins "Clear(net)" gesendet werden. Tor behebt außerdem Probleme (etwa im Zusammenhang mit Portweiterleitungen oder IP-Adressenwechseln), die häufig bei Privatservern auftreten - es funktioniert einfach. Diese Einrichtung verschleiert zudem den Umstand, dass du dich zu einem Monero-Remote-Node verbindest. Getestet wurde die Verbindung eines Mac-Laptops zu einem Linux-Remote-Node (Ubuntu 18.04.2) mit der Monero-Version `v0.15.0.1`.

## Erstelle einen versteckten Tor-Dienst für RPC

Stelle sicher, dass [Tor installiert ist](https://community.torproject.org/relay/setup/bridge/debian-ubuntu/) und richtig läuft. Fahre erst dann fort.

Der RPC-Server muss lediglich so eingerichtet werden, dass er als versteckter Dienst, hier auf Port `18081`, läuft.

Datei: `/etc/torrc`

```
HiddenServiceDir /var/lib/tor/monero-service/
HiddenServicePort 18081 127.0.0.1:18081
```
Starte Tor neu:
```
sudo systemctl restart tor@default
```

Stelle sicher, dass Tor richtig gestartet hat:
```
sudo systemctl status tor@default.service
```

Wenn soweit alles gut aussieht, mache eine Notiz des Namens des versteckten Dienstes (Onion-Adresse):
```
sudo cat /var/lib/tor/monero-service/hostname
```
Dieser wird ungefähr so wie "4dcj312uxag2r6ye.onion" aussehen. Du nutzt ihn weiter unten für `HIDDEN_SERVICE`.

### Hintergrunddienst für RPC einrichten

In diesem Beispiel wird Tor nicht zur Interaktion mit dem P2P-Netzwerk genutzt, sondern lediglich, um sich zum Monero-Node zu verbinden; dadurch wird nur der versteckte RPC-Dienst benötigt.

Datei: `~/.bitmonero/bitmonero.conf` (im Home-Verzeichnis des Monero-Nutzers)

```
no-igd=1
restricted-rpc=1
rpc-login=USERNAME:PASSWORD
```
(Denke dir einen NUTZERNAMEN und ein PASSWORT für den RPC aus)

Starte den Hintergrunddienst neu: `monerod stop_daemon; sleep 10; monerod --detach`

Stelle sicher, dass der Hintergrunddienst richtig gestartet hat:
```
tail -f ~/.bitmonero/bitmonero.log
```

## Von einem lokalen Wallet zu deinem Node verbinden

Stelle sicher, dass Tor lokal bei dir läuft, sodass du dich zum Tor-Netzwerk verbinden kannst. Auf dem Mac ist ein einfacher Weg dazu das simple Starten des Tor-Browsers und die Nutzung des Tor-Hintergrunddienstes.

Teste dann einen einfachen RPC-Befehl, etwa:
```
curl --socks5-hostname 127.0.0.1:9150 -u USERNAME:PASSWORD --digest -X POST http://HIDDEN_SERVICE.onion:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_info"}' -H 'Content-Type: application/json'
```
Ersetze `USERNAME`, `PASSWORD` und `HIDDEN_SERVICE` mit den obigen Werten. Ändere `9150` zu einem anderen Port ab, wenn von deinem lokalen Tor-Hintergrunddienst benötigt.

Wenn alles korrekt läuft, solltest du nach dem Ausführen des Befehls Infos zum Remote-Hintergrunddienst erhalten. Falls dem nicht so ist, füge ` -v ` an den Anfang an und teste dann, aus welchem Grund keine Verbindung hergestellt wird; überprüfe Firewalls, das Passwort etc.

Sobald alles funktioniert, kannst du via CLI-Wallet verbinden:
```
./monero-wallet-cli --proxy 127.0.0.1:9150 --daemon-host HIDDEN_SERVICE.onion --trusted-daemon --daemon-login USERNAME:PASSWORD --wallet-file ~/PATH/TO/YOUR/WALLET
```
Ersetze die Werte nach Bedarf.

## GUI

Wenn du daran interessiert bist, mit dem GUI via Tor herumzuexperimentieren, kannst du es mit `torsocks` versuchen (beachte jedoch, dass hierdurch Informationen durchsickern könnten - verlasse dich besser nicht darauf, wenn dein Leben von der Erhaltung deiner Anonymität abhängt). Dieses Beispiel bezieht sich auf MacOS, du kannst es nach Bedarf für das Linux-GUI anpassen:
```
torsocks --port 9150 /Applications/monero-wallet-gui.app/Contents/MacOS/monero-wallet-gui
```

Dies erlaubt dem GUI die Kommunikation mit dem Tor-Netzwerk. Sobald das GUI geöffnet und ein Wallet geladen ist, musst du es für die Verbindung zum Tor-Netzwerk einrichten. Dies tust du, indem du deine Onion-Adresse hier hinzufügst: "Einstellungen > Node > Remote-Node > Adresse".

Wir rechnen damit, dass in zukünftigen Versionen des GUI eine direkte Tor/I2P-Unterstützung eingebunden wird, sodass `torsocks` + Befehlszeile nicht benötigt werden.

# Zusätzliche Quellen

* [ANONYMITY_NETWORKS.md](https://github.com/monero-project/monero/blob/master/ANONYMITY_NETWORKS.md)
* [Using Tor](https://github.com/monero-project/monero#using-tor) (Monero README)