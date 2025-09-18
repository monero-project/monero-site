{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Wallet

Bevor du startest, musst du bereits über ein konfiguriertes,
funktionierendes Wallet verfügen. Um Zahlungen auf dein Wallet senden zu
können, muss der Pool deine Wallet-Adresse kennen. Mehr Informationen
findest du in der ["Monero akzeptieren"-Anleitung]({{ site.baseurl
}}/get-started/accepting).

##  Profitabilität

Vor dem Mining solltest du entscheiden, ob sich dieses für dich lohnt oder
ob es eher doch nicht rentabel ist. Du musst das für dich selbst und auf
Basis der anfallenden Stromkosten und deiner verfügbaren Hardware
entscheiden. Es gibt einige Seiten (wie etwa
[CryptoCompare](https://www.cryptocompare.com/mining/calculator/xmr)), auf
denen du Geschwindigkeit und Stromverbrauch deines Miners eingeben kannst,
um dir den Gewinn (oder Verlust) pro Woche/Monat anzeigen zu lassen.

##  Miner herunterladen

Der erste Schritt ist der Download der Mining-Software auf deinen Rechner.

### Windows

Der Entwickler von XMRig stellt vorgefertigte Binärdateien für
Windows-Nutzer bereit. Diese sind auf der [Versionsseite auf
GitHub](https://github.com/xmrig/xmrig/releases/latest) erhältlich.

Scrolle nach unten, bis du `xmrig-VERSION-msvc-win64.zip` siehst. Lade diese
Datei herunter und extrahiere das Archiv zu einem einprägsamen Ort, etwa
deinen Desktop.

###  Ubuntu (Linux)

Der Entwickler von XMRig stellt vorgefertigte Binärdateien für Ubuntu Bionic
(18.04) / Focal (20.04) bereit, die auch auf anderen Versionen von Ubuntu
und anderen Distributionen funktionieren könnten. Dies kann allerdings nicht
garantiert werden.

Diese Binärdateien sind auf der [Versionsseite auf
GitHub](https://github.com/xmrig/xmrig/releases/latest) verfügbar.

Scroll down to 'Assets' until you see the correct version for your
system. Download this file, extract the archive somewhere memorable, like
your desktop.

### Other distributions and operating systems

Binaries are available for various distributions and operating systems, but
you can also build the miner by yourself. Take a look at [XMrig's
docs](https://xmrig.com/docs/miner)

##  Einen Pool wählen

Es gibt viele Pools, zwischen denen du dich entscheiden kannst. Du findest
eine Liste auf
[miningpoolstats.stream/monero](https://miningpoolstats.stream/monero).

Die Wahl eines größeren Pools bedeutet häufigere (aber kleinere)
Auszahlungen; wenn du allerdings einen kleineren Pool wählst, unterstützt
dies die Dezentralisierung des Netzwerks. [Miner werden keinerlei Ertrag
durch das Minen innerhalb eines kleineren Pools
verlieren](https://redd.it/g6uh2l).

## Den Miner konfigurieren

See the [official docs](https://xmrig.com/docs/miner/config), for
instructions and suggestions.

## Den Miner starten

Windows-Nutzer können den Miner durch einen Doppelklick auf xmrig.exe
starten. Nutzer anderer Betriebssysteme sollten via `cd` in das XMRig
enthaltende Verzeichnis navigieren, `./xmrig` eingeben und Eingabe drücken.

Wenn du grüne Nachrichten siehst, die dir mitteilen, dass Freigaben
akzeptiert wurden, funktioniert alles - Glückwunsch!

## Fehlerbehebung

### Antivirenprogramm entfernt wiederholt XMRig

Manche Antivirenprogramme markieren XMRig als Malware, weil es häufig auf
"infizierten" Rechnern installiert wird, um dadurch ohne das Einverständnis
des Besitzers mit diesen Computern minen zu können. Da es dein eigener
Rechner ist und du den Miner dazu einrichtest, für dich selbst zu minen,
kannst du XMRig sicher auf die Whitelist deines Antivirenprogramms setzen.

### MSR kann nicht gelesen/eingerichtet werden

Bei manchen CPUs versucht XMRig es, die Leistung durch Deaktivierung
bestimmter Funktionen (etwa des Anweisungsprefetchers deines CPUs) zu
verbessern. Diese Vorgänge benötigen Administratorrechte beziehungsweise den
Gebrauch des Root-Kontos. Versuche, es mit einem Rechtsklick auf xmrig.exe
als Administrator auszuführen oder es auf anderen Systemen durch den Befehl
`sudo ./xmrig` zu starten.

### Algo nicht bekannt

Suche in der "config.json"-Datei nach der Zeile, die `algo: null` enthält,
und ändere dies zu `algo: "rx/0"`. Standardmäßig wartet XMRig nun darauf,
dass der Pool mitteilt, welcher Hashing-Algorithmus verwendet werden soll.

### Große Seiten 0%

#### Große Seiten auf Windows erlauben

Von
[MDSN](https://docs.microsoft.com/de-de/sql/database-engine/configure-windows/enable-the-lock-pages-in-memory-option-windows?view=sql-server-ver15)
in angepasster Form übernommen:

1. Klicke im Menü "Start" auf "Ausführen". Gebe "gpedit.msc" im Feld
   "Öffnen" ein.
2. Erweitere in der Konsole "Editor für lokale Gruppenrichtlinien" die
   Option "Computerkonfiguration" und dann "Windows-Einstellungen".
3. Erweitere "Sicherheitseinstellungen" und dann "Lokale Richtlinien".
4. Wähle den Ordner "Zuweisen von Benutzerrechten" aus.
5. Die Richtlinien werden im Detailbereich angezeigt.
6. Doppelklicke im Detailbereich auf "Sperren von Seiten im Speicher".
7. Klicke im Dialogfeld "Lokale Sicherheitseinstellung" > "Sperren von
   Seiten im Speicher auf Benutzer oder Gruppe hinzufügen".
8. Wähle im Dialogfeld "Select Users, Service Accounts, or Groups"
   (Benutzer, Dienstkonten oder Gruppen auswählen) das Benutzerkonto [aus,
   unter welchem der Miner ausgeführt werden soll].
9. Starte den [Rechner neu, damit die Änderungen übernommen werden].

Es kann zudem sein, dass du den Miner als Administrator starten musst.

#### Große Seiten auf Linux erlauben

Beende zunächst den Miner (falls dieser laufen sollte) und führe die
folgenden Befehle aus, um große Seiten zu erlauben; danach starte den Miner
via Root:

	sudo sysctl -w vm.nr_hugepages=1168
	sudo ./xmrig

Es kann sein, dass du 1168 erhöhen musst; dies ist abhängig von der Anzahl
an NUMA-Nodes deines (deiner) CPUs.

#### Große Seiten auf macOS erlauben

Große Seiten werden auf macOS nicht unterstützt.

### Guthaben erhöht sich nicht

Die meisten Pools sind <abbr title="Pay Per Last N Shares">PPLNS</abbr>-Pools. Dies bedeutet, dass du nur bezahlt wirst, wenn ein Miner im Pool einen Block findet. Wenn der Pool, innerhalb dessen du minest, klein ist, kann dies einige Tage bis hin zu Wochen dauern.

Außerdem müssen Blöcke mehrfach bestätigt werden, bevor sie ausbezahlt
werden. Dafür werden 60 nachfolgende Blöcke (ungefähr zwei Stunden)
benötigt.

## Hilfe erhalten

Es gibt auf Reddit eine aktive Monero-Mining-Community:
[/r/MoneroSupport](https://www.reddit.com/r/MoneroSupport/). Du kannst
außerdem [#monero-pools auf
Libera](https://web.libera.chat/?channel=#monero-pools) beitreten / Matrix
(#monero-pools:monero.social).

## Darüber hinausgehend

* Erwäge den Gebrauch einer Subadresse ausschließlich für das
  Mining. Dadurch kannst du verhindern, dass deine Adresse mit
  unterschiedlichen Diensten verknüpft werden kann.
* [Erwäge den Gebrauch von Tor, um dich zum Pool zu
  verbinden](https://xmrig.com/docs/miner/tor) (oder auch zu einem
  versteckten Service-Pool wie HashVault, RespectXMR und MoneroOcean). Dies
  verbirgt etwaige Miningaktivität vor deinem Internetanbieter und
  verhindert, dass der Pool weiß, wer du genau bist.
