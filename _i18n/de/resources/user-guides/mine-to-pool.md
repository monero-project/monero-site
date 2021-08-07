{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Wallet

Bevor du startest, musst du bereits über ein konfiguriertes,
funktionierendes Wallet verfügen. Um Zahlungen auf dein Wallet senden zu
können, muss der Pool deine Wallet-Adresse kennen. Mehr Informationen
findest du in der ["Monero akzeptieren"-Anleitung]({{ site.baseurl
}}/get-started/accepting).

## Profitability

Vor dem Mining solltest du entscheiden, ob sich dieses für dich lohnt oder
ob es eher doch nicht rentabel ist. Du musst das für dich selbst und auf
Basis der anfallenden Stromkosten und deiner verfügbaren Hardware
entscheiden. Es gibt einige Seiten (wie etwa
[CryptoCompare](https://www.cryptocompare.com/mining/calculator/xmr)), auf
denen du Geschwindigkeit und Stromverbrauch deines Miners eingeben kannst,
um dir den Gewinn (oder Verlust) pro Woche/Monat anzeigen zu lassen.

## Download Miner

Der erste Schritt ist der Download der Mining-Software auf deinen Rechner.

### Windows

Der Entwickler von XMRig stellt vorgefertigte Binärdateien für
Windows-Nutzer bereit. Diese sind auf der [Versionsseite auf
GitHub](https://github.com/xmrig/xmrig/releases/latest) erhältlich.

Scrolle nach unten, bis du `xmrig-VERSION-msvc-win64.zip` siehst. Lade diese
Datei herunter und extrahiere das Archiv zu einem einprägsamen Ort, etwa
deinen Desktop.

### Ubuntu Linux

The XMRig developer provides pre-built binaries for Ubuntu Bionic (18.04)
and Focal (20.04). They may work on other Ubuntu versions, and on other
distributions, but this is not guaranteed.

Diese Binärdateien sind auf der [Versionsseite auf
GitHub](https://github.com/xmrig/xmrig/releases/latest) verfügbar.

Scroll down to 'Assets' until you see the correct version for your
system. Download this file, extract the archive somewhere memorable, like
your desktop.

### Other distributions and operative systems

Binaries are available for multiple distributions and operative systems, but
you can also build the miner by yourself. Take a loot at [XMrig's
docs](https://xmrig.com/docs/miner)

## Selecting a pool

Es gibt viele Pools, zwischen denen du dich entscheiden kannst. Du findest
eine Liste auf
[miningpoolstats.stream/monero](https://miningpoolstats.stream/monero).

Die Wahl eines größeren Pools bedeutet häufigere (aber kleinere)
Auszahlungen; wenn du allerdings einen kleineren Pool wählst, unterstützt
dies die Dezentralisierung des Netzwerks. [Miner werden keinerlei Ertrag
durch das Minen innerhalb eines kleineren Pools
verlieren](https://redd.it/g6uh2l).

## Configuring the miner

See the [official docs](https://xmrig.com/docs/miner/config), for
instructions and suggestions.

## Starting the miner

Windows-Nutzer können den Miner durch einen Doppelklick auf xmrig.exe
starten. Nutzer anderer Betriebssysteme sollten via `cd` in das XMRig
enthaltende Verzeichnis navigieren, `./xmrig` eingeben und Eingabe drücken.

Wenn du grüne Nachrichten siehst, die dir mitteilen, dass Freigaben
akzeptiert wurden, funktioniert alles - Glückwunsch!

## Troubleshooting

### Anti-virus keeps removing XMRig

Manche Antivirenprogramme markieren XMRig als Malware, weil es häufig auf
"infizierten" Rechnern installiert wird, um dadurch ohne das Einverständnis
des Besitzers mit diesen Computern minen zu können. Da es dein eigener
Rechner ist und du den Miner dazu einrichtest, für dich selbst zu minen,
kannst du XMRig sicher auf die Whitelist deines Antivirenprogramms setzen.

### Cannot read/set MSR

Bei manchen CPUs versucht XMRig es, die Leistung durch Deaktivierung
bestimmter Funktionen (etwa des Anweisungsprefetchers deines CPUs) zu
verbessern. Diese Vorgänge benötigen Administratorrechte beziehungsweise den
Gebrauch des Root-Kontos. Versuche, es mit einem Rechtsklick auf xmrig.exe
als Administrator auszuführen oder es auf anderen Systemen durch den Befehl
`sudo ./xmrig` zu starten.

### Algo not known

Suche in der "config.json"-Datei nach der Zeile, die `algo: null` enthält,
und ändere dies zu `algo: "rx/0"`. Standardmäßig wartet XMRig nun darauf,
dass der Pool mitteilt, welcher Hashing-Algorithmus verwendet werden soll.

### Huge Pages 0%

#### Allowing large pages on Windows

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
7. In the Local Security Setting – Lock pages in memory dialog box, click
   Add User or Group.
8. Wähle im Dialogfeld "Select Users, Service Accounts, or Groups"
   (Benutzer, Dienstkonten oder Gruppen auswählen) das Benutzerkonto [aus,
   unter welchem der Miner ausgeführt werden soll].
9. Starte den [Rechner neu, damit die Änderungen übernommen werden].

Es kann zudem sein, dass du den Miner als Administrator starten musst.

#### Allowing large pages on Linux

Beende zunächst den Miner (falls dieser laufen sollte) und führe die
folgenden Befehle aus, um große Seiten zu erlauben; danach starte den Miner
via Root:

	sudo sysctl -w vm.nr_hugepages=1168
	sudo ./xmrig

Es kann sein, dass du 1168 erhöhen musst; dies ist abhängig von der Anzahl
an NUMA-Nodes deines (deiner) CPUs.

#### Allowing large pages on macOS

Große Seiten werden auf macOS nicht unterstützt.

### Balance Not Increasing

Most pools are <abbr title="Pay Per Last N Shares">PPLNS</abbr> pools,
which means that you only get paid when a miner on the pool finds a
block. If the pool you are mining on is small, this can take a few
days to weeks.

Außerdem müssen Blöcke mehrfach bestätigt werden, bevor sie ausbezahlt
werden. Dafür werden 60 nachfolgende Blöcke (ungefähr zwei Stunden)
benötigt.

## Getting Help

An active Monero mining community on Reddit is
[/r/MoneroSupport](https://www.reddit.com/r/MoneroSupport/). You can also
join [#monero-pools on
Libera](https://web.libera.chat/?channel=#monero-pools) or Matrix
(#monero-pools:monero.social).

## Going Futher

* Erwäge den Gebrauch einer Subadresse ausschließlich für das
  Mining. Dadurch kannst du verhindern, dass deine Adresse mit
  unterschiedlichen Diensten verknüpft werden kann.
* [Erwäge den Gebrauch von Tor, um dich zum Pool zu
  verbinden](https://xmrig.com/docs/miner/tor) (oder auch zu einem
  versteckten Service-Pool wie HashVault, RespectXMR und MoneroOcean). Dies
  verbirgt etwaige Miningaktivität vor deinem Internetanbieter und
  verhindert, dass der Pool weiß, wer du genau bist.
