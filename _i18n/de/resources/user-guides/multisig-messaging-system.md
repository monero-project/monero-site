{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Inhaltsverzeichnis
- [Inhaltsverzeichnis](#inhaltsverzeichnis)
- [Einleitung](#einleitung)
- [Monero-Multisig zusammengefasst](#monero-multisig-zusammengefasst)
- [Die Architektur des MMS](#die-architektur-des-mms)
- [Das Benutzererlebnis des MMS](#das-benutzererlebnis-des-mms)
  - [Ein Nachrichtensystem](#ein-nachrichtensystem)
  - [Unterzeichner und Nachrichten](#unterzeichner-und-nachrichten)
- [Das MMS erhalten](#das-mms-erhalten)
- [PyBitmessage installieren und einrichten](#pybitmessage-installieren-und-einrichten)
- [Weitere PyBitmessage-Optimierungen](#weitere-pybitmessage-optimierungen)
- [Befehlsübersicht des MMS](#befehlsübersicht-des-mms)
- [Ein Wallet zur Nutzung mit MMS einrichten](#ein-wallet-zur-nutzung-mit-mms-einrichten)
  - [Adressen und Labels](#adressen-und-labels)
  - [CLI-Wallet starten](#cli-wallet-starten)
  - [MMS initialisieren](#mms-initialisieren)
  - [Unterzeichner einrichten](#unterzeichner-einrichten)
  - [Unterzeichner manuell einrichten](#unterzeichner-manuell-einrichten)
  - [Auto-Config](#auto-config)
  - [Unterzeichnerkonfiguration senden](#unterzeichnerkonfiguration-senden)
- [Multisig-Adresse herleiten](#multisig-adresse-herleiten)
- [Finanzausstattung des Multisig-Wallets](#finanzausstattung-des-multisig-wallets)
- [Wallets synchronisieren](#wallets-synchronisieren)
- [Multisig-Transaktionen erstellen](#multisig-transaktionen-erstellen)
- [Die Befehle im Detail](#die-befehle-im-detail)
  - [mms init](#mms-init)
  - [mms info](#mms-info)
  - [mms signer](#mms-signer)
  - [mms list](#mms-list)
  - [mms next](#mms-next)
  - [mms sync](#mms-sync)
  - [mms transfer](#mms-transfer)
  - [mms delete](#mms-delete)
  - [mms send](#mms-send)
  - [mms receive](#mms-receive)
  - [mms note](#mms-note)
  - [mms show](#mms-show)
  - [mms export](#mms-export)
  - [mms set](#mms-set)
  - [mms start\_auto\_config](#mms-start_auto_config)
  - [mms auto\_config](#mms-auto_config)
  - [mms stop\_auto\_config](#mms-stop_auto_config)
  - [mms send\_signer\_config](#mms-send_signer_config)
- [Sicherheit](#sicherheit)
  - [Nutzen von Verschlüsselung und Signaturen](#nutzen-von-verschlüsselung-und-signaturen)
  - [Kommunikation von MMS zu PyBitmessage](#kommunikation-von-mms-zu-pybitmessage)
  - [Identitätsbetrug](#identitätsbetrug)
  - [Von Angreifern kontrollierte Daten](#von-angreifern-kontrollierte-daten)
- [Fehlerbehebung](#fehlerbehebung)
  - [Synchronisierungsprobleme lösen](#synchronisierungsprobleme-lösen)
  - [Eine Transaktion an einen anderen Unterzeichner umleiten/weiterleiten](#eine-transaktion-an-einen-anderen-unterzeichner-umleiten/weiterleiten)
  - [Unkooperative Unterzeichner beim Synchronisieren ignorieren](#unkooperative-unterzeichner-beim-synchronisieren-ignorieren)
  - [Von abhandengekommenen oder doppelten Nachrichten wiederherstellen](#von-abhandengekommenen-oder-doppelten-nachrichten-wiederherstellen)
  - [Informationen von Unterzeichnern korrigieren/aktualisieren](#informationen-von-unterzeichnern-korrigieren/aktualisieren)
  - [Von Grund auf beginnen](#von-grund-auf-beginnen)
  - [Interaktionen von MMS/PyBitmessage](#interaktionen-von-mms/pybitmessage)

## Einleitung

Diese Anleitung behandelt das *Multisig Messaging System* (Multisig-Nachrichtensystem), kurz *MMS*. Dieses System strebt an, **Multisig-Transaktionen** für Monero und ähnliche, CryptoNote-basierte Kryptowährungen zu **vereinfachen**, indem der Austausch von Infos (etwa von Schlüsselsätzen) und die Synchronisation von Daten zwischen Wallets erleichtert werden. Zudem bietet es Unterstützung bezüglich des Arbeitsablaufs, indem Nutzer durch die verschiedenen Schritte geführt werden.

Bislang erscheint das MMS für Nutzer wie eine Reihe neuer Befehle im CLI-Wallet, was im Grunde keine Überraschung ist: Das CLI-Wallet ist derzeit die einzige Möglichkeit zur interaktiven Erstellung von Multisig-Transaktionen. Dies wird aber in Zukunft hoffentlich erweitert; das MMS wurde auch mit anderen Wallets (etwa dem Monero-GUI) im Hinterkopf entworfen.

Diese Anleitung umfasst einige übungsähnliche Punkte und sollte der Reihe nach durchgegangen werden, möglichst ohne die Kapitel vor dem *Die Befehle im Detail*-Teil zu überspringen.

Wenn du hohe Sicherheitsanforderungen hast und dir nicht sicher bist, ob ein Gebrauch des MMS für dich überhaupt infrage kommt, solltest du als Erstes das Kapitel *Sicherheit* lesen.

Die erste Version dieser Anleitung wurde um das Jahresende 2018 herum von René Brunner (*rbrunner7*), dem ursprünglichen Schöpfer des MMS, verfasst.

## Monero-Multisig zusammengefasst

Es wird vermutlich ziemlich schwer sein, das MMS zu verstehen, ohne wenigstens ein Grundverständnis davon zu haben, wie Multisig-Transaktionen bei Monero prinzipiell funktionieren. Daher hier nun eine kurze Übersicht, gemeinsam mit Infos bezüglich der in dieser Anleitung verwendeten *Terminologie*. Für noch mehr Details und weitere *fachspezifische* Erklärungen müsstest du dich woanders umsehen.

*Multisig* bedeutet, dass eine Transaktion mehrere Signaturen benötigt, bevor sie im Monero-Netzwerk eingereicht und ausgeführt werden kann. Anstelle eines einzigen Monero-Wallets, welches Transaktionen erstellt, signiert und absendet, hast du nun eine ganze Gruppe von Wallets, die zwecks Transaktion kollaborieren.

In dieser Anleitung werden diese Wallets - oder die sie kontrollierenden Personen, wenn du es so präferierst - *autorisierte Unterzeichner* genannt. Je nach Form des genutzten Multisigs müssen zur Validierung einer Transaktion nicht **alle** der autorisierten Unterzeichner, sondern nur eine Teilmenge dieser signieren. Die entsprechende Anzahl (die kleiner oder gleich der Anzahl autorisierter Unterzeichner ist) wird als *erforderliche Unterzeichner* bezeichnet.

Die üblicherweise genutzte Schreibweise ist *M/N*, wobei *M* für die Anzahl erforderlicher Unterzeichner und *N* für die Gesamtzahl autorisierter Unterzeichner steht. So wird bspw. die vermutlich nützlichste und beliebteste Multisig-Form als *2/3* geschrieben: Aus einer Gesamtsumme von **drei** autorisierten Unterzeichnern werden **zwei** beliebige Unterzeichner zur Validation einer Transaktion benötigt.

Bei technisch "einfacheren" Coins wie Bitcoin und dessen Abspaltungen ist der Ablauf von Multisig-Transaktionen wie folgt:

* Multisig-Wallets einrichten und die Multisig-Adresse herleiten
* Multisig-Wallets/die Multisig-Adresse mit Guthaben ausstatten, sodass überhaupt etwas ausgegeben werden kann
* So viele Multisig-Transaktionen durchführen, wie gewünscht

Monero fügt dem eine Art weiteren Schritt hinzu, der gleichsam wichtig für die interne Buchhaltung ist. Einfach gesagt komplizieren all die Mechanismen, die Monero-Transaktionen wahrlich privat machen, doch so einiges und führen zu der Notwendigkeit des Austauschs von Informationen zwischen Wallets, um diese dazu zu befähigen, ein- wie ausgehende Transaktionen richtig zu verarbeiten.

Das MMS nutzt den Begriff *syncing* ("Synchronisieren") für den Vorgang der Wiederherstellung der Betriebsbereitschaft, durch welchen Wallets nach dem Senden/Empfangen einer Transaktion auf neue Transaktionen vorbereitet werden. *multisig sync data* oder auch einfach *sync data* bezeichnet die Informationen, die dazu notwendigerweise ausgetauscht werden müssen. 

Die Schritte des Monero-Multisigs sehen also so aus:

* Multisig-Wallets einrichten und die Multisig-Adresse herleiten
* Multisig-Wallets/die Multisig-Adresse mit Guthaben ausstatten, sodass überhaupt etwas ausgegeben werden kann
* Wallets erstmalig synchronisieren
* Eine Multisig-Transaktion tätigen
* Wallets erneut synchronisieren
* Eine weitere Multisig-Transaktion tätigen und/oder Geld empfangen
* Wallets ein weiteres Mal synchronisieren
* ... 

Der Nutzen des MMS ist die Vereinfachung des Austauschs all dieser Datenpakete zwischen den Wallets. Außerdem wird Unterzeichnern mitgeteilt, in welchem Schritt des Arbeitsablaufs sie sich gerade befinden und was der nächste Schritt zum Fortfahren ist.

## Die Architektur des MMS

Das MMS besteht im Grunde aus drei Teilen:

* Einem Satz neuer Befehle im CLI-Wallet
* Einer laufenden Instanz von PyBitmessage, die für den Computer, auf welchem das CLI-Wallet läuft, erreichbar ist und im Namen des Wallets Nachrichten transportiert
* Internen Erweiterungen des Wallet-Codes, die pro Wallet eine neue `.mms`-Datei, die Nachrichten enthält, verwalten und mit PyBitmessage koppeln

[PyBitmessage](https://bitmessage.org/wiki/Main_Page) ist das derzeit einzige unterstützte Nachrichtentransportprogramm; das MMS "interagiert" nicht mit anderen Systemen. Du kannst weder E-Mails noch irgendein anderes der unzähligen Kommunikationsprogramme da draußen verwenden. Wenn dir PyBitmessage nicht gefällt oder du es aus etwaigen Gründen nicht betreiben kannst, wird es dir nicht möglich sein, die aktuelle Version des MMS zu nutzen.

Der Schöpfer des MMS hofft, dass du es zumindest ausprobierst: PyBitmessage ist komplett quelloffen, befindet sich in kontinuierlicher Entwicklung, hat genügend Nutzer, um den Nachrichtentransport beinahe jederzeit sicherzustellen und nimmt Privatsphäre sehr ernst - genau wie Monero.

Ein zukünftiges MMS wird hoffentlich auf Moneros "eigenem", privaten Kommunikationssystem ([Kovri](https://kovri.io/)) aufgebaut; wir sind aber wahrscheinlich immer noch eine ganze Weile von der Veröffentlichung einer breit verwendbaren Kovri-Version entfernt.

Kommunikationen des MMS sollten **sicher** sein: Das Bitmessage-System wird als sicher erachtet, da Informationen darüber, wer an wen Nachrichten sendet, komplett unsichtbar sind. Jeder Datenverkehr ist verschlüsselt. Für zusätzliche Sicherheit verschlüsselt das MMS auch alle Inhalte jeder Nachricht: Abgesehen vom Empfänger einer MMS-Nachricht kann niemand ihre Inhalte entschlüsseln und verwenden. Außerdem sind die Nachrichten signiert, wodurch der Empfänger sicher sein kann, dass sie von den richtigen Sendern stammen.

## Das Benutzererlebnis des MMS

Um **ohne** MMS das "Benutzererlebnis" des Multisigs im CLI-Wallet zu erfahren, kannst du bspw. [hier](https://taiga.getmonero.org/project/rbrunner7-really-simple-multisig-transactions/wiki/22-multisig-in-cli-wallet) und [hier](https://taiga.getmonero.org/project/rbrunner7-really-simple-multisig-transactions/wiki/23-multisig-in-cli-wallet) nachsehen.

Diese Seiten sind auch nützlich, um sich mit den Schritten von Multisig-Transaktionen im Allgemeinen vertraut zu machen. Das MMS wird weder die Schrittfolge ändern oder irgendeinen dieser Schritte überflüssig machen, aber es wird die Ausführung deutlich vereinfachen. Dabei wird das MMS dazu in der Lage sein, dir in den meisten Fällen automatisch und der Reihe nach die nächsten Schritte mitzuteilen.

### Ein Nachrichtensystem

Der allgemeine Ansatz der MMS ist ziemlich **ähnlich zur E-Mail**: Wenn du Nachrichten umhersendest, agieren die MMS-Befehle im CLI-Wallet als dein E-Mail-Client und erlauben es dir damit, Nachrichten zu senden, zu empfangen und außerdem ein Verzeichnis abgespeicherter Nachrichten zu unterhalten - in etwa wie ein kombinierter Postein- und ausgang.

Der Inhalt dieser Nachrichten umfasst natürlich all die Dinge, die zwischen den Wallets der Unterzeichner umhertransportiert werden müssen: Sätze von Schlüsseln, Synchronisationsdaten von Wallets und eben die zu signierenden und/oder im Netzwerk einzureichenden Transaktionen.

PyBitmessage wird hierbei für den tatsächlichen Nachrichtentransport genutzt und übernimmt damit die Aufgabe deines E-Mail-Servers. Sobald die Einrichtung abgeschlossen ist, läuft das Senden und Empfangen von Nachrichten komplett automatisch ab und benötigt damit keinen manuellen Eingriff.

Statt E-Mail-Adressen werden Monero-Adressen genutzt, welche die Ziele der Nachrichten kennen. Du schickst Nachrichten immer nur an autorisierte Unterzeichner: Mit einem 2/3-Multisig hast du bspw. lediglich zwei Partner, an die du etwas sendest.

Wie bei E-Mails müssen Personen nicht gleichzeitig online sein, damit der Nachrichtentransport funktioniert: PyBitmessage speichert Nachrichten für bis zu zwei Tage und gibt dir damit Zeit, sie abzurufen.

Im Allgemeinen ist dieser Ansatz ziemlich flexibel und robust: Solltest du zum Fortfahren Nachrichten mehrerer Unterzeichner benötigen, wartet das MMS, bis es all diese in seiner Liste empfangener Nachrichten findet. Hierbei ist die Empfangsreihenfolge unwichtig, wodurch ein ziemlich entspanntes Nutzererlebnis generiert wird.

Wenn dir ein Unterzeichner mitteilt, dass eine bestimmte Nachricht nicht angekommen oder gar verschwunden ist, kannst du sie jederzeit erneut senden, indem du sie in der Nachrichtenliste auswählst - genauso, als würdest du in einer ähnlichen Situation eine E-Mail erneut absenden.

### Unterzeichner und Nachrichten

Während also ein "normales" Monero-Wallet ohne MMS - einfach gesagt - drei Arten von Daten (Adressen, Konten und Transaktionen) managt, fügt das MMS zwei weitere hinzu: Unterzeichner und Nachrichten.

Für jedes einzelne Multisig-Wallet managt das MMS eine separate Liste *autorisierter Unterzeichner*. Mit einem 2/3-Multisig umfasst eine solche Liste **drei** Einträge. Technisch gesehen repräsentiert jeder Eintrag ein Monero-Wallet, das zum Signieren von Multisig-Transaktionen verwendbare Schlüssel enthält. Konzeptuell gesehen ist es wohl einfacher, sich eine Gruppe von drei Leuten (etwa dich und zwei Partner) als ebendiese "autorisierten Unterzeichner" vorzustellen. (Häufig werden diese drei Wallets tatsächlich von drei verschiedene Menschen kontrolliert; dies ist aber natürlich nicht immer der Fall.)

Das MMS unterhält außerdem eine einzelne Liste von *Nachrichten* pro Wallet, welche alle gesendeten und alle empfangenen Nachrichten enthält. Zwar ist die Liste autorisierter Unterzeichner in allen involvierten Wallets dieselbe, die Nachrichten unterscheiden sich jedoch. Je mehr autorisierte Unterzeichner vorhanden sind (die dir Nachrichten senden) und je länger du Transaktionen durchführst, desto mehr Nachrichten sammeln sich an.

## Das MMS erhalten

Jetzt gerade, während des Verfassens dieser Anleitung (Jahresende 2018), ist das MMS nur als Teil des aktuellsten Monero-Codes (der `master`-Zweig in Moneros [GitHub-Repository](https://github.com/monero-project/monero)) verfügbar. Um es zu nutzen, musst du diesen Quellcode prüfen und eigenständig kompilieren. Das geht am einfachsten auf einem Linuxsystem.

Mit dem nächsten Hardfork im Frühling 2019 wird das MMS zu einem integralen Bestandteil der Monero-Software: Du installierst Monero, du hast das MMS.

Ein Wort der Warnung: Zur Zeit des Verfassens führt die Nutzung der aktuellsten Entwicklungsversion Moneros zu keinerlei Konflikten und Problemen mit jeglicher regulärer Versionssoftware und heruntergeladener Blockchain auf demselben System. Dies könnte sich aber in der Zwischenzeit von jetzt bis zum Hardfork - besonders um die Zeit des Hardforks herum - ändern.

## PyBitmessage installieren und einrichten

Die Installation von PyBitmessage ist einfach: Du findest Links zu Downloads und Installationsanleitungen auf der [Seite des Bitmessage-Wiki](https://bitmessage.org/wiki/Main_Page). Dort sind Versionen für alle geläufigen, durch Monero unterstützten Betriebssysteme verfügbar: Linux, Windows und macOS.

Führe das Programm nach dem Installieren aus, richte eine Bitmessage-Adresse für dich ein und notiere diese, da du sie später zum Einrichten deines Multisig-Wallets benötigen wirst.

Mache dir keine Sorgen, wenn sich PyBitmessage nach dem ersten Start nicht gleich zum Bitmessage-Netzwerk zu verbinden scheint: Aufgrund des dezentralen Charakters dieses Netzwerks kann es bis zur ersten Verbindung eine ganze Weile dauern. Es scheint, als dauere dies häufig eine **halbe Stunde**.

Ebenso kann das Senden der allerersten Nachricht an eine brandneue Bitmessage-Adresse einige Zeit - manchmal eine weitere halbe Stunde - dauern, weil hier ein Schlüsselaustausch involviert ist. Sobald dieser abgeschlossen ist, werden Nachrichten üblicherweise innerhalb weniger Minuten und manchmal schon nach Sekunden zugestellt.

Du musst nicht mehr als eine Bitmessage-Adresse für dich einrichten. Du kannst problemlos mehrere Multisig-Wallets über eine **einzige** Adresse betreiben, weil das MMS die richtigen Nachrichten für die jeweils korrekten Wallets herausfiltert. Du kannst sogar dieselbe Adresse für "normale" Nachrichten verwenden; da das MMS schlicht jegliche Nachrichten, die nicht für ebenjenes gedacht sind, ignoriert, werden diese es nicht stören.

Die vorkonfigurierte PyBitmessage-Installation ist in Verbindung mit dem MMS zunächst nicht einsatzbereit. Da es anderen Programmen standardmäßig die Verwendung seines APIs verwehrt, muss die entsprechende Berechtigung erst explizit erteilt werden (aus Sicherheitsgründen ergibt dies natürlich Sinn).

Anleitungen bezüglich der **Freigabe des APIs** finden sich auf der [Bitmessage-Wiki-Seite zur "API reference"](https://bitmessage.org/wiki/API_Reference). Der hier gewählte Nutzername und das Passwort werden später als Befehlszeilenparameter für das CLI genutzt, damit der Log-in des MMS in PyBitmessage ermöglicht wird.

## Weitere PyBitmessage-Optimierungen

Die aktuelle, offizielle Freigabeversion 0.6.3.2 verfügt über eine eingebaute [Dandelion++-Protokollerweiterung](https://arxiv.org/abs/1805.11060), die das Netzwerk gegenüber Angriffen, in welchen versucht wird, durch Verfolgen des Nachrichtenflusses Sender und Empfänger von Nachrichten auszumachen, verstärkt. Unglücklicherweise scheint irgendwo ein Bug zu existieren, der zu sehr unterschiedlichen und extrem langen Nachrichtenübertragungszeiten führen kann - beim Verwenden des MMS ist das ziemlich unerfreulich.

Es besteht die Möglichkeit, Dandelion++ auszuschalten. Dies wird natürlich nicht empfohlen, kann für den Augenblick allerdings durchaus nützlich sein, um das MMS verwenden zu können:

* Lokalisiere die PyBitmessage-Konfigurationsdatei `keys.dat`
* Erstelle dort einen neuen, `[network]` genannten Abschnitt
* Füge zu diesem neuen Abschnitt folgende Zeile hinzu: `dandelion = 0`
* Starte PyBitmessage erneut

Als "guter Bürger" möchtest du anderen Bitmessage-Nodes eventuell den Zugriff auf deinen Node ermöglichen. Dies erreichst du durch Öffnen des Ports 8444. Hintergrundinformationen darüber findest du im [Bitmessage-FAQ](https://bitmessage.org/wiki/FAQ). Damit dein Client funktioniert, ist dies aber nicht unbedingt notwendig. 

## Befehlsübersicht des MMS

Es gibt lediglich **einen** neuen Befehl im CLI-Wallet, der den Zugriff auf das MMS ermöglicht und - ganz zweckmäßig - die Bezeichnung `mms` trägt. Allerdings hat dieser Befehl eine ganze Zahl an Unterbefehlen, mit denen die verschiedenen Funktionen des MMS bedient werden. Hier ist eine Liste dieser Befehle; jeder Befehl hat aber auch im späteren Verlauf dieser Anleitung sein eigenes, detailliertes Kapitel.

    init        MMS initialisieren und einstellen
    info        Aktuelle MMS-Einstellung anzeigen
    signer      Einen Unterzeichner durch ein Ein-Wort-Label, eine Transportadresse und eine Monero-Adresse bestimmen oder alle festgelegten Unterzeichner auflisten
    list        Alle Nachrichten auflisten
    next        Die nächste(n) potentielle(n) Multisig-bezogenen Aktion(en) gemäß Wallet-Status auswerten und wahlweise zeigen oder ausführen 
    sync        Erstellung von Multisig-Synchronisationsdaten ungeachtet des Wallet-Status, um nach besonderen Situationen, etwa Fehlern aufgrund "veralteter Daten", wiederherzustellen
    transfer    Übertragung mit MMS-Unterstützung einleiten; Argumente sind identisch mit üblichen "transfer"-Befehlen, für Infos dort nachsehen
    delete      Eine einzelne Nachricht durch Angabe ihrer ID löschen oder unter Verwendung von "all" alle Nachrichten löschen
    send        Eine einzelne Nachricht durch Angabe ihrer ID versenden oder alle ausstehenden Nachrichten senden
    receive     Unmittelbar auf zu empfangene Nachrichten überprüfen
    note        Eine einzeilige, durch ihr Label gekennzeichnete Notiz als Nachricht an einen Unterzeichner senden oder alle ungelesenen Notizen anzeigen
    show        Detaillierte Infos über eine einzelne Nachricht anzeigen
    export      Den Inhalt einer Nachricht in eine Datei exportieren
    set         Einstellungen festlegen; die einzige Option ist bislang 'auto-send'    
    start_auto_config   Den Auto-Config-Prozess im Wallet des Auto-Config-Managers durch Erstellen neuer Token starten
    auto_config         Auto-Config unter Verwendung des vom Auto-Config-Manager erhaltenen Token starten
    stop_auto_config    Jegliche Token löschen und Auto-Config-Prozess abbrechen  
    send_signer_config  Deine gesamte Unterzeichner-Konfiguration an alle anderen Unterzeichner senden

Du erhältst die Liste der Befehle durch Erteilen des `help mms`-Befehls. Durch `help mms <subcommand>` (bspw. `help mms next`) erhältst du Hilfestellung für einen bestimmten Unterbefehl. Alternativ kannst du `mms help <subcommand>` nutzen, wenn dir das natürlicher erscheint.

## Ein Wallet zur Nutzung mit MMS einrichten

### Adressen und Labels

Zwecks besserer Verständlichkeit hier einige grundlegende Fakten zum Adressieren von Unterzeichnern und Verweisen an ebendiese (bzw. ihre Wallets) via MMS:

Wenn du ein neues Wallet erstellst, bekommt dieses (natürlich) seine eigene, einzigartige, öffentliche Monero-Adresse. Konfigurierst du das Wallet später für Multisig, **ändert** das Wallet seine öffentliche Adresse in die gemeinsame Multisig-Adresse, welche du mit allen anderen autorisierten Unterzeichnern teilst, ab.

Das MMS nutzt über die gesamte Laufzeit des Wallets zum Adressieren die erste, "ursprüngliche", öffentliche Monero-Adresse, vor **und** nach dem Übergang zu Multisig. Es mag etwas verwirrend sein, dass ein Wallet irgendwie **zwei** öffentliche Adressen haben sollte; sobald die ursprüngliche Adresse in deine Unterzeichner-Einstellung integriert ist, musst du nicht mehr wirklich darüber nachdenken.

Das MMS verwendet *Labels*, die es dir erlauben, dich selbst und andere Unterzeichner zu benennen. Diese Labels nutzt das MMS, wenn es an Unterzeichner verweist. (In solcherlei Befehlen wäre es ziemlich mühselig, Monero- oder Bitmessage-Adressen zu verwenden.)

Labels müssen aus einem Wort bestehen und innerhalb eines einzelnen Wallets einzigartig sein. In einem späteren Beispiel innerhalb dieser Anleitung werden für ein 2/2-Multisig die Labels `alice` und `bob` genutzt.

### CLI-Wallet starten

Wenn du das CLI-Wallet zum Gebrauch mit dem MMS öffnest, existieren zwei neue (optionale) Befehlszeilenparameter, um zu PyBitmessage zu verbinden:

    --bitmessage-address	Use PyBitmessage instance at URL <arg>
    --bitmessage-login		Specify <arg> as username:password for PyBitmessage API

Wenn du auf dem gleichen Gerät sowohl PyBitmessage als auch das CLI-Wallet betreibst, ist die Voreinstellung des ersten Parameters ausreichend und es sollte nicht notwendig sein, eine andere Einstellung vorzunehmen. Wenn diese Voreinstellung trotz lokalen Betriebs nicht gefunden wird, kannst du versuchen, `http://localhost` oder `http://127.0.0.1` als Argument für den ersten Parameter zu verwenden.

Um dich zum richtigen Netzwerk zu verbinden, benötigst du daneben natürlich entweder `--testnet` oder `--stagenet`. Auch der Gebrauch von `--log-level 0` könnte nützlich sein: Das Wallet wird hierdurch angewiesen, detaillierte Infos in seine Logdatei zu schreiben, welche zum Finden von Bugs oder Problemen innerhalb des MMS hilfreich sein könnten.

Eine komplette Befehlszeile für das CLI-Wallet könnte also so aussehen:

    ./monero-wallet-cli --testnet --bitmessage-login mmstest:p4ssw0rd --log-level 0

### MMS initialisieren

Nach dem Erstellen eines neuen Wallets musst du es zunächst für den Gebrauch mit dem MMS vorbereiten, da es dir ohne diesen essenziellen ersten Schritt nicht möglich sein wird, jegliche MMS-Funktionen zu nutzen. Der entsprechende Befehl lautet `mms init`:

    mms init <required_signers>/<authorized_signers> <own_label> <own_transport_address>

`own_transport_address` ist die Bitmessage-Adresse, welche du in deinem eigenen PyBitmessage-Programm eingestellt hast. Ein kompletter `init`-Befehl könnte wie folgt aussehen:

    mms init 2/2 alice BM-2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e

Nutze diesen `init`-Befehl nur **ein Mal**: Eine zweite Ausführung würde das MMS durch Löschen jeglicher Unterzeichner-Informationen und Nachrichten neu initialisieren; abgesehen von besonderen Umständen ist dies nicht gewünscht. 

Wenn du einen MMS-Test schnellstmöglich durchführen möchtest, kannst du dein Wallet anweisen, das Passwort nur im technisch unbedingt notwendigen Fall abzufragen. Außerdem kannst du dem MMS befehlen, jede erstellte Nachricht direkt und ohne vorheriges Anzeigen abzusenden: 

    set ask-password 0
    mms set auto-send 1

(Beide Einstellungen sind in dem in dieser Anleitung angeführten 2/2-Multisig-Beispiel aktiviert.)

### Unterzeichner einrichten

Das MMS muss drei Infos eines jeden Unterzeichners wissen:

* Das Ein-Wort-*Label*, um an diesen Unterzeichner weiterzuleiten
* Die *Transportadresse*, was derzeit und bis zur Unterstützung anderer Nachrichtentransportsysteme die Bitmessage-Adresse ist
* Die *Monero-Adresse*, sprich die *ursprüngliche* Monero-Adresse des Wallets

(Siehe auch das vorhergehende Kapitel *Adressen und Labels*.)

Du musst die Unterzeichner nicht erst erstellen: Nach dem `mms init`-Befehl sind die bereits "da", obgleich bisher - mit Ausnahme von dir selbst - ohne jegliche Info. Die Befehle zum Einstellen der Unterzeichnerinformationen beziehen sich via Nummer auf die jeweiligen Unterzeichner, von eins bis hin zur Gesamtzahl der autorisierten Unterzeichner. Im folgenden 2/2-Multisig-Beispiel sind das also die Zahlen "1" und "2" für Unterzeichner mit den Namen "Alice" und "Bob" und damit den Labeln *alice* und *bob*.

Nach dem obigen, beispielhaftem Ausführen des `init`-Befehls würde die Unterzeichnerliste also so aussehen:

     # Label                Transport Address
       Auto-Config Token    Monero Address
     1 alice                BM-2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e
                            A1VRwm8HT8CgA5bSULDZKggR9Enc9enhWHNJuDXDK4wDD6Rwha3W7UG5Wu3YGwARTXdPw1AvFSzoNPBdiKfpEYEQP1b5cCH
    
     2 <not set>            <not set>
                            <not set>

Beachte, dass Unterzeichner Nr. 1 immer "du" bist, also dein eigenes Label, deine Transport- und deine Monero-Adresse. In Alice' Unterzeichnerliste wird Alice selbst als Nr. 1 und Bob als Nr. 2 aufgeführt sein. In Bobs Wallet wäre es dagegen genau umgekehrt.

Zum Vervollständigen der Unterzeichnerinformationen gibt es **drei Wege**: Du kannst diese manuell eingeben oder den vom MMS angebotenen Auto-Config-Vorgang (oder dessen "halbautomatische" Variante) nutzen. Bei 2/2 macht dies wohl keinen großen Unterschied bezüglich des Arbeitsaufwands, mit höheren Anzahlen von Unterzeichnern ist Auto-Config jedoch leichter und verlässlicher. Ein Vorteil von Auto-Config ist aufgrund der Nutzung von PyBitmessage in jedem Fall ein sicherer Adressentransport.

Wähle also **eine** Methode aus den drei folgenden Kapiteln (*Unterzeichner manuell einrichten*, *Auto-Config* und *Unterzeichnerkonfiguration senden*) aus:

### Unterzeichner manuell einrichten

Zur manuellen Eingabe der Unterzeichnerinformationen und zum Anzeigen der Unterzeichnerliste wird der Befehl `mms signer` ausgeführt:

	mms signer [<number> <label> [<transport_address> [<monero_address>]]]

Ohne Argument zeigt dieser Befehl die Unterzeichnerliste an. Mit mindestens einer Nummer und einem Label kannst du Infos über einen bestimmten Unterzeichner festlegen oder ändern. Ein kompletter Befehl, mit welchem jegliche Infos über Unterzeichner Nr. 2 festgelegt werden, könnte in etwa so aussehen:

	mms signer 2 bob BM-2cStcTfCx8D3McrMcmGZYZcF4csKcQT2pa 9yXKZ6UUdd8NnNN5UyK34oXV7zp7gjgZ4WTKHk8KzWsAAuyksfqoeRMLLkdWur85vnc1YL5E2rrMdPMHunA8WzUS9EL3Uoj

Zum späteren Abändern des Labels von Unterzeichner Nr. 2 könnte der Befehl wie folgt aussehen:

	mms signer 2 bob-the-builder

Bei dieser manuellen Methode ist es Sache der Unterzeichner, *wie* jeder die Adressen der jeweils anderen erfährt.

Lasse während der Eingabe von Unterzeichnerinformationen Sorgfalt walten: Jegliche Fehler (etwa falsche Bitmessage-Adressen) werden eine korrekte Transaktion wahrscheinlich später unmöglich machen.

Bevor du nun aber anfängst, Unterzeichnerinformationen über unsichere Kanäle wie IRC oder mithilfe gewöhnlicher, unverschlüsselter E-Mails auszutauschen, beachte bitte, dass diese Vorgehensweise bestimmte Gefahren mit sich bringen kann. Sollte jemand bspw. deine E-Mails abfangen und so an deine Adressen, die du eigentlich an einen Unterzeichner gesendet hast, gelangen, könnte sich diese Person als der jeweilige Unterzeichner ausgeben.

In einem Szenario mit einem 2/3-Multisig zwecks *Hinterlegung* besteht außerdem die Gefahr, dass Unterzeichner Bob neben seinem eigenen Wallet ein zweites für den vertrauenswürdigen Dritten Trent eröffnet und Alice dazu verleitet, alles an dieses anstatt an Trents eigentliches Wallet zu senden. Danach wäre Bob in der Lage, eigenständig zu transferieren und Coins von Alice zu stehlen.

Eine detailliertere Erklärung dieser zweiten Gefährdung findet sich gegen Ende der Anleitung im Kapitel *Sicherheit* oder auch [hier](https://taiga.getmonero.org/project/rbrunner7-really-simple-multisig-transactions/wiki/multisig-and-insecure-communication-channels). Auto-Config schwächt diese Gefahr in einem ganz guten Ausmaß ab.

Alice' vollständige Unterzeichnerliste sieht so aus:

     # Label                Transport Address
       Auto-Config Token    Monero Address
     1 alice                BM-2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e
                            A1VRwm8HT8CgA5bSULDZKggR9Enc9enhWHNJuDXDK4wDD6Rwha3W7UG5Wu3YGwARTXdPw1AvFSzoNPBdiKfpEYEQP1b5cCH
    
     2 bob                  BM-2cStcTfCx8D3McrMcmGZYZcF4csKcQT2pa
                            9yXKZ6UUdd8NnNN5UyK34oXV7zp7gjgZ4WTKHk8KzWsAAuyksfqoeRMLLkdWur85vnc1YL5E2rrMdPMHunA8WzUS9EL3Uoj

### Auto-Config

MMS-Auto-Config basiert auf den sogenannten *Auto-Config-Token*. Derlei Token haben stets eine Länge von elf Zeichen: die feste Reihung von "mms" gefolgt von acht Hexadezimalstellen. Beispiele für diese Art von Token sind `mms561832e3eb` und `mms62cb2b87e2`.

Der simple Trick: Diese Token sind im Gegensatz zu Bitmessage- und Monero-Adressen kurz genug, um sie leicht eintippen zu können und z.B. in halbwegs sicheren Nachrichten-Apps auf dem Smartphone oder via SMS zu übersenden, oder auch telefonisch zu übermitteln - auch nicht absolut sicher, aber immer noch weitaus sicherer als E-Mail oder IRC.

Der Arbeitsablauf ist einfacher, als es auf den ersten Blick erscheint; nachdem er einmal praktisch durchgegangen wurde, ergibt alles Sinn. Er läuft ab wie folgt:

* Ein Unterzeichner übernimmt Führung und Einrichtungsorganisation; im weiteren Verlauf *Manager* genannt
* Der Manager weist jedem Unterzeichner ein Label zu und fügt alle Label in die Unterzeichnerkonfiguration (entweder durch `mms signer`-Befehle oder als Argumente des `mms start_auto_config`-Befehls im nächsten Schritt) ein
* Der Manager nutzt den Befehl `mms start_auto_config` zum Erstellen von Auto-Config-Token für alle anderen Unterzeichner (jeweils ein eigener Token für jeden Unterzeichner)
* Der Manager übermittelt die Token an die entsprechenden Unterzeichner außerhalb des MMS
* Alle anderen Unterzeichner geben ihre Token mit dem Befehl `mms auto_config <token>` ein
* Die Wallets der Unterzeichner erstellen nun (bereits unter Verwendung von PyBitmessage) Nachrichten, mit welchen die eigene Adresse an das Wallet des Managers gesendet wird
* Sobald all diese Nachrichten im Wallet des Managers eingegangen sind, kann dieser wiederum durch Ausführen des Befehls `mms next` Nachrichten mit den gesammelten Unterzeichnerinformationen an alle anderen Unterzeichner senden
* Um ihre Unterzeichnerinformationen zu vervollständigen, verarbeiten die anderen Unterzeichner diese Nachrichten mit `mms next`

Mehrere Punkte sind hierbei beachtenswert. Eine manuelle Einrichtung mit bspw. fünf Unterzeichnern könnte in zwanzig anfänglichen Informationsübertragungen resultieren, wenn jeder der fünf Unterzeichner Adressen an vier andere schickt (5 x 4 = 20). Selbst bei einem schlaueren Ansatz, bei welchem eine Person zunächst alle Adressen sammelt und diese als komplette Liste an alle Unterzeichner sendet, würde es zwei mal vier und damit schlussendlich immer noch acht Informationsübertragungen benötigen. Mit Auto-Config gibt es lediglich **vier** solcher manuellen Übertragungen - vier Token, die vom Manager an die anderen Unterzeichner gesendet werden. Danach findet der Nachrichtenaustausch bereits über PyBitmessage statt.

Vielleicht wunderst du dich darüber, wie die Wallets der anderen Unterzeichner ihre Bitmessage-Adressen via PyBitmessage zurück an den Manager senden können. Beißt sich die Schlange hier nicht selbst in den Schwanz? Die Lösung: Es wird von jedem Token eine temporäre Wegwerf-Bitmessage-Adresse abgeleitet, die einzig und allein für diese Übertragung genutzt wird. Zwecks Verschlüsselung des Nachrichteninhalts werden zudem temporäre Schlüssel abgeleitet.

Bestandteil der erhöhten Sicherheit des Auto-Config-Vorgangs ist die Tatsache, dass jeder Unterzeichner seinen eigenen, individuellen Token erhält. Stelle schlicht sicher, dass Bob im Falle eines 2/3-Multisigs Trents eigenen Token nicht in die Finger bekommt; schon hat Bob keine Möglichkeit mehr, sich als Trent auszugeben und ein zweites Wallet zu erstellen, um jegliche Transaktionen auf eigene Faust zu signieren.

### Unterzeichnerkonfiguration senden

Nebst der vollen Auto-Config besteht mit dem Befehl `send_signer_config` eine zweite, alternative Möglichkeit, um die Einrichtung einfacher zu gestalten. Diese ist zwar weniger "automatisch", könnte aber aufgrund ihrer Transparenz innerhalb des Ablaufs präferiert werden.

Der Arbeitsablauf sieht wie folgt aus:

* Ein Unterzeichner übernimmt Führung und Einrichtungsorganisation; im weiteren Verlauf *Manager* genannt
* Der Manager erhält über Kanäle außerhalb des MMS, etwa via verschlüsselter und signierter E-Mail, von allen anderen Unterzeichnern die jeweiligen Adressen
* Der Manager gibt unter Verwendung der `mms member`-Befehle die kompletten Unterzeichnerinformationen in seinem Wallet ein
* Zum Senden der vervollständigten Informationen an alle anderen Unterzeichner nutzt der Manager den Befehl `mms send_signer_config`
* Die anderen Unterzeichner verarbeiten die die Unterzeichnerinformationen enthaltenden Nachrichten mit `mms next`

Außer für den Manager ist diese Option für alle Unterzeichner beinahe so komfortabel wie Auto-Config. Beachte jedoch, dass die Sicherheit eines so ausgeführten Systems von der Absicherung der Sendung von Infos an den Manager abhängt: Wenn einige Unterzeichner sich als mehrere einzelne Unterzeichner ausgeben können, werden diese in der Lage sein, mehrere Wallets zu kontrollieren und den gesamten Signierprozess zu untergraben. (Für weitere Infos über solcherlei Gefahren siehe Kapitel *Unterzeichner manuell einrichten*.)

## Multisig-Adresse herleiten

Grundsätzlich gibt es keine MMS-Befehle, mit denen bestimmte Schritte bezüglich Multisig-Transaktionen ausgeführt werden können (mit Ausnahme des Einleitens eines Transfers mit `mms transfer` und des Erzwingens der Synchronisierung mit `mms sync`). Du verwendest einfach den `mms next`-Befehl und das MMS führt den jeweils folgenden Schritt im "Multisig-Arbeitsablauf" aus. Ist noch nichts bereit (bspw. weil noch einige Nachrichten fehlen), wird dir der Grund dafür ausgegeben. 

Nachdem du nun alle Infos aller Unterzeichner, entweder manuell oder via Auto-Config, zusammengesammelt hast, erteilst du lediglich den `mms next`-Befehl. Durch diesen beginnt das MMS mit dem ersten notwendigen Schritt zur Etablierung bzw. Herleitung der Multisig-Adresse: Ermittle *Schlüsselsätze* für alle Gruppenmitglieder und setze Nachrichten auf, mit denen du diese Infos an die entsprechenden Mitglieder sendest. Der gesamte Vorgang könnte bei Alice wie folgt aussehen:

    [wallet A1VRwm]: mms next
    prepare_multisig
    MultisigV18uEUr5L7EvFDqKWvbnK2ys395ddRPuG6zaxNTwbDq3WoUNJtkPUPbRAEQKBaCC52g5iJXi8XUF4aUP9984hdFrHsP1y3W8yQkm
    YUSDYXzouhzd479tMmpL4LJKUoW5e54bubEg5E4J3BZtJQiGNzvVsiBKGAKgT7J4bcNN66Xq7hpL4V
    Send this multisig info to all other participants, then use make_multisig <threshold> <info1> [<info2>...] with others' multisig info
    This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet's participants 
      Id I/O  Authorized Signer              Message Type           Height   R Message State   Since                                   
       1 out  bob: BM-2cStcTfCx8D3McrMcmGZ.. key set                     0   0 ready to send   2018-12-26 07:46:21, 1 seconds ago      
    Queued for sending.

Die `prepare_multisig`-Ausgabe ist hier ein Hinweis darauf, dass das MMS funktioniert, indem eine Art "Verpackung" um den CLI-Befehl `prepare_multisig` "geschlagen" wird. Zur Bestätigung wird sogar die `MultisigV1`-Zeichenkette angezeigt. Du musst dies nun nicht manuell auf irgendeinem Weg an die Unterzeichner senden: Das MMS bereitet dazu eine Nachricht vor und sendet diese vollautomatisch.

Nachdem Alice den Schlüsselsatz von Bob erhalten hat, wird ein weiterer `mms next`-Befehl diesen verarbeiten und die Multisig-Adresse daraus herleiten:

    [wallet A1VRwm]: mms next
    make_multisig
    Wallet password: 
    2/2 multisig address: 9uWY5Kq6XocGGqUByp22ty4HYxj4CfjCXdRrZ24EKvYW2U7fudSzCvTRRT35tMNx5heQfqKmVmFjahWUZ1BENnzH8UvyVF7

Nach diesem Schritt kann es passieren, dass dein Wallet nicht mehr synchronisiert ist. Wenn dem so ist, führe einen kurzen `refresh` aus.

Im Falle eines unsymmetrischen M/N-Multisigs, mit M ungleich N (etwa bei 2/3), reicht ein Austausch der Schlüsselsätze von jedem Unterzeichner mit allen anderen Unterzeichnern nicht aus: Es wird verschiedene *Runden* geben, in welchen Schlüsselssätze ausgetauscht werden. Das MMS wird sich jedoch automatisch um fast alles kümmern: Es wartet zunächst, bis für ein bestimmtes Wallet die Schlüsselsätze aller Unterzeichner angekommen sind, und fährt dann erst fort. Ist eine weitere Runde des Austauschs notwendig, wird eine solche durch `mms next` eingeleitet. Wenn nicht, verarbeitet der Befehl die letzten Schlüsselsätze und erstellt daraus anschließend die Multisig-Adresse.

Möglicherweise wird eine zukünftige, verbesserte Version des MMS all dies vollautomatisch machen, indem sie alle notwendigen Schlüsselsätze ohne darüber hinausgehenden Eingriff umhersendet, bis die Multisig-Adresse eingerichtet ist. Aktuell musst du den Vorgang allerdings eigenständig durch Eingabe der `mms next`-Befehle anstoßen.

## Finanzausstattung des Multisig-Wallets

Mit der eingerichteten Multisig-Adresse kann das Wallet nun Gelder empfangen. Hierbei spielt weder das MMS noch Multisig allgemein eine Rolle: Sende einfach einige Coins an die Adresse, um später etwas zum Ausgeben zu haben, und warte auf deren Eingang in das Wallet.

## Wallets synchronisieren

Um wieder "in den Takt" zu kommen, müssen Multisig-Wallets zwecks Synchronisierens nach jedem Geldaus- oder -eingang einige Infos miteinander austauschen. Dies ist immer dann der Fall, wenn dir das CLI-Wallet etwas bezüglich *unvollständiger Schlüsselbilder* (wie etwa hier in dieser `balance`-Befehlsausgabe, eng. "partial key images") anzeigt:

    [wallet 9uWY5K]: balance
    Currently selected account: [0] Primary account
    Tag: (No tag assigned)
    Balance: 7.000000000000, unlocked balance: 7.000000000000 (Some owned outputs have partial key images - import_multisig_info needed)

Der "import_multisig_info needed"-Teil ist der wohl ermüdendste Aspekt von CyptoNote-Multisig-Transaktionen und erfordert einen ziemlichen Aufwand, bspw. im Falle von 3/3- oder 2/3-Multisig, bei welchen so schon jedes Mal insgesamt **sechs** Information herumgereicht werden müssen - und das nur, um den Empfang von Coins zu finalisieren und/oder nach einer Überweisung wieder transferieren zu können.

Wenigstens benötigt es beim MMS lediglich die Eingabe von `mms next`-Befehlen, bis alle Synchronisationsdaten gesendet und empfangen wurden und die Wallets wieder synchron(isiert) sind; du wirst automatisch durch die notwendigen Befehle - `export_multisig_info` und `import_multisig_info` - geleitet. Bei Alice sieht dies wie folgt aus:

    [wallet 9uWY5K]: mms next
    export_multisig_info
    Multisig info exported to MMS
      Id I/O  Authorized Signer              Message Type           Height   R Message State   Since                                   
       5 out  bob: BM-2cStcTfCx8D3McrMcmGZ.. multisig sync data          1   0 ready to send   2018-12-26 08:58:14, 0 seconds ago      
    Queued for sending.
    MMS received new message
      Id I/O  Authorized Signer              Message Type           Height   R Message State   Since                                   
       6 in   bob: BM-2cStcTfCx8D3McrMcmGZ.. multisig sync data          1   0 waiting         2018-12-26 08:59:45, 0 seconds ago      
    [wallet 9uWY5K]: mms next
    import_multisig_info
    Height 1117984, txid <b515082063a6242f1b62f21c80f95c90801f14ce3f48f51094d069e3580a78aa>, 7.000000000000, idx 0/0
    Multisig info imported03

Keine Sorge, wenn du solcherlei Synchronisationsnachrichten schon empfängst, bevor du die deinige überhaupt absenden konntest: Das MMS geht mit solcherlei Situationen ziemlich gut um, indem es die Daten zunächst sendet und erst danach verarbeitet.

Solltest du nicht weiterkommen, lies dir zunächst das Kapitel *Fehlerbehebung* durch: Es gibt bspw. die Möglichkeit, den Synchronisationsvorgang zu erzwingen - selbst, wenn `mms next` durcheinandergerät und denkt, dass das Synchronisieren nicht notwendig oder unmöglich ist.

## Multisig-Transaktionen erstellen

Um Multisig-Transaktionen einzuleiten, gibt es anstelle des normalen `transfer`-Befehls den Befehl `mms transfer`. Die MMS-Variante unterstützt alle Parametervariationen des normalen Befehls; für Hilfestellung kann also `help transfer` verwendet werden.

Dem MMS sind Subadressen und Konten relativ egal; welche Adresse du auch immer zum Senden (und Empfangen) von Transaktionen nutzen möchtest - das MMS interessieren nur die Daten, welche in einem bestimmten Vorgang erstellt wurden, der richtige Zeitpunkt, um diese zu verarbeiten und das Senden an den (oder die) richtigen Empfänger.

Wenn du nicht möchtest, dass deine Transaktionsdaten in Form gespeicherter Nachrichteninhalte Teil der `.mms`-Datei werden, kannst du den normalen `transfer`-Befehl nutzen. Dann ist es allerdings natürlich deine Aufgabe, die teilweise signierte Transaktion an den nächsten Unterzeichner zu übersenden.

Der `mms transfer`-Befehl beim MMS führt natürlich noch keinen Transfer durch, erzeugt jedoch eine teilsignierte Transaktion. Dies dehnt das Konzept von Nachrichten etwas aus, da `mms transfer` eine Nachricht an "mich", also den Besitzer des Wallets selbst, mit der teilsignierten Transaktion als Inhalt erstellt. Siehe unten die Nachricht Nr. 7 an Alice:

    [wallet 9uWY5K]: mms transfer 9zo5QDV9YivQ8Fdygt7BNdGo1c98yfAWxAz6HMwsf15Vf1Gkme9pjQG2Typ9JnBKv5goziC2MT93o3YDUfoWdU9XUinX5kS 5
    No payment id is included with this transaction. Is this okay?  (Y/Yes/N/No): y
    
    Transaction 1/1:
    Spending from address index 0
    Sending 5.000000000000.  The transaction fee is 0.000094300000
    Is this okay?  (Y/Yes/N/No): y
    Unsigned transaction(s) successfully written to MMS
    [wallet 9uWY5K]: mms list
      Id I/O  Authorized Signer              Message Type           Height   R Message State   Since                                   
      ...
       7 in   alice: BM-2cUVEbbb3H6ojddYQz.. partially signed tx         1   0 waiting         2018-12-26 09:10:42, 40 seconds ago     

Die Idee dahinter: In diesem Stadium - mit der ausstehenden Transaktion und in Abhängigkeit von der Anzahl der erforderlichen Unterzeichner - wird `mms next` in der Frage resultieren, was getan werden soll: Besonders im Falle einer 2/3-Multisig ist die Entscheidungsmöglichkeit darüber, **wohin** die Transaktion zwecks zweiter Signatur zur Validierung gesendet wird (also zu **welchem** der zwei möglichen Unterzeichner), essenziell.

Das könnte wie in diesem 2/4-Multisig-Fall aussehen:

    Unsigned transaction(s) successfully written to MMS
    [wallet 9vAbBk]: mms next
    Choose processing:
    1: Send the tx for signing to two: BM-2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e
    2: Send the tx for signing to three: BM-2cStcTfCx8D3McrMcmGZYZcF4csKcQT2pa
    3: Send the tx for signing to four: BM-2cUjNoSxPkUY7ho4sPcEA6Rr26jqcasKiE

Im Fall des 2/2-Multisig-Beispiels in dieser Anleitung gibt es allerdings keine Wahl: Die von Alice eingeleitete Transaktion muss an Bob als den einzig anderen autorisierten Unterzeichner gehen:

    [wallet 9uWY5K]: mms next
    Send tx
      Id I/O  Authorized Signer              Message Type           Height   R Message State   Since                                   
       8 out  bob: BM-2cStcTfCx8D3McrMcmGZ.. partially signed tx         1   0 ready to send   2018-12-26 09:29:30, 0 seconds ago      
    Queued for sending.

Nach dem Empfang signiert Bob, indem er schlicht `mms next` eingibt (ein bestimmter Signierbefehl existiert nicht):

    [wallet 9uWY5K]: mms next
    sign_multisig
    Loaded 1 transactions, for 7.000000000000, fee 0.000094300000, sending 5.000000000000 to
     9zo5QDV9YivQ8Fdygt7BNdGo1c98yfAWxAz6HMwsf15Vf1Gkme9pjQG2Typ9JnBKv5goziC2MT93o3YDUfoWdU9XUinX5kS, 1.999905700000 change to
     9uWY5Kq6XocGGqUByp22ty4HYxj4CfjCXdRrZ24EKvYW2U7fudSzCvTRRT35tMNx5heQfqKmVmFjahWUZ1BENnzH8UvyVF7, with min ring size 11,
     no payment ID. Is this okay? (Y/Yes/N/No): y
    Transaction successfully signed to file MMS, txid c1f603a9045f28b28f221eddf55be41e95f2ac7213384a32d35cadc0a8be3026
    It may be relayed to the network with submit_multisig

Ein weiterer `mms next`-Befehl resultiert für Bob in einer Wahlmöglichkeit; er kann die Transaktion entweder selbst im Netzwerk einreichen **oder** sie dazu an Alice zurücksenden:

    [wallet 9uWY5K]: mms next
    Choose processing:
    1: Submit tx
    2: Send the tx for submission to alice: BM-2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e
    Choice: 

Wie zuvor bereits erwähnt, musst du die Wallets nach dem Absenden und Verarbeiten der Transaktion zunächst synchronisieren, bevor du eine weitere Überweisung tätigen oder auch empfangen kannst. Beachte auch, dass es abgesehen von irgendwelchen Synchronisationsbedarfen eine Einschränkung von Monero-Multisig ist, dass du **strikt eine Transaktion nach der anderen** durchführen musst. Du kannst bspw. keine komplett signierten Transaktionen zum späteren Absenden beiseitelegen und dann eine neue Transaktion erstellen, um ebendiese zuerst zu senden. (In manchen solcher Szenarien ist das MMS nicht clever genug, dich vom Versuch abzuhalten; im Kapitel *Fehlerbehebung* kannst du nachlesen, wie du wiederherstellen kannst, indem du Nachrichten mit nicht verarbeitbar Transaktionen löschst und die Synchronisation erzwingst.)

Wie schon erwähnt kannst du die Speicherung deiner Transaktionsdaten aus der `.mms`-Datei vermeiden und dazu den normalen `transfer`-Befehl verwenden, es liegt dann allerdings auch in deinen Händen, die teilsignierte Transaktion an den nächsten Unterzeichner zu übermitteln. Beachte auch, dass das MMS ein "Cold-Signieren" nicht unterstützt; ein weiterer Grund, direkt den `transfer`-Befehl anstelle von `mms transfer` zu nutzen. Du kannst in Nachrichten enthaltene Transaktionsdaten jedoch mit dem Befehl `mms export` exportieren.

## Die Befehle im Detail

### mms init

    mms init <required_signers>/<authorized_signers> <own_label> <own_transport_address>

Beispiel:

    mms init 2/2 alice 2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e

Bereitet dein Wallet für den Gebrauch mit dem MMS vor. Dein eigenes Label und deine eigene Transportadresse kannst du später mit `mms signer` ändern. Die zwei Zahlen, die jeweils die Anzahl erforderlicher und autorisierter Unterzeichner angeben, können nicht ohne erneutes Ausführen des Befehls `mms init`, welcher jegliche Unterzeichnerinformationen und Nachrichten löscht, geändert werden. Dieser Befehl resultiert in der Erstellung zusätzlicher Dateien mit der Dateiendung `.mms` für dieses Wallet.

Für in Vorzeiten des MMS (bevor der MMS-Code in Monero integriert wurde) erstellte Wallets ist es nur möglich, das MMS zu initialisieren, wenn das Wallet noch nicht über Multisig verfügt. Bei Wallets, bei deren Erstellung der MMS-Code bereits enthalten war, kann das MMS auch trotz bereits bestehenden Multisigs initialisiert werden: Als das Wallet auf Multisig umgeschaltet wurde, wurde die ursprüngliche, vom MMS benötigte Monero-Adresse gesichert, bevor sie durch die gemeinschaftliche Multisig-Adresse ersetzt wurde.

Es gibt keinen Befehl zur Deaktivierung des MMS. Wenn du es bei einem bestimmten Wallet nicht mehr verwenden möchtest, kannst du einfach die `.mms`-Datei löschen oder diese zumindest aus dem Weg räumen.

### mms info

    mms [info]

Zur Anzeige, ob das MMS aktiv ist oder nicht, und falls ja, Einblendung der jeweiligen Anzahlen erforderlicher und autorisierter Unterzeichner. Dies ist der einzig zulässige MMS-Befehl bei Inaktivität des MMS.

### mms signer

    mms signer [<number> <label> [<transport_address> [<monero_address>]]]

Beispiele:

    mms signer
	mms signer 2 bob BM-2cStcTfCx8D3McrMcmGZYZcF4csKcQT2pa 9yXKZ6UUdd8NnNN5UyK34oXV7zp7gjgZ4WTKHk8KzWsAAuyksfqoeRMLLkdWur85vnc1YL5E2rrMdPMHunA8WzUS9EL3Uoj
	mms signer 2 bob-the-builder

Ohne Argument wird hiermit die Liste von Unterzeichnern und deren Infos (soweit bekannt) angezeigt. Bisher nicht eingestellte und damit unbekannte Dinge werden als `<not set>` angezeigt. Beachte, dass du Unterzeichner nicht erstellen musst und auch gar nicht kannst: Nach dem Ausführen von `mms init` "existieren" diese bereits, wenn auch ohne eingestellte Informationen. Ausgenommen davon ist der Unterzeichner Nr. 1, der immer "ich" bzw. das aktuelle Wallet selbst ist. Die Anzahl ist festgelegt; diese ist die im Zuge von `mms init` angegebene Anzahl an autorisierten Unterzeichnern.

Mit mindestens einer Zahl und einem Label als Argument können Unterzeichnerinformationen festgelegt oder bereits bestehende Infos geändert werden. Labels und Transportadressen können beliebig abgeändert werden; aus technischen Gründen ist es allerdings nur möglich, Monero-Adressen zu ändern, solange keine Nachrichten existieren. Schlimmstenfalls muss mit `mms init` komplett von Grund auf neu gestartet werden.

Zahlen starten bei 1 und gehen hoch bis zur Anzahl autorisierter Unterzeichner.

Ein *Label* muss ein einzelnes Wort sein. Um komplexere Labels, etwa `alice_in_wonderland`, zu erstellen, können Minuszeichen (-) oder Tiefstriche (_) verwendet werden. Labels müssen für alle Unterzeichner einzigartig sein. Es gibt für Labels keine festgelegte maximale Länge, manche Ausgaben könnten mit sehr langen Labels jedoch seltsam aussehen oder schwer lesbar sein.

Mit PyBitmessage als einzigem unterstützten Programm zum derzeitigen Nachrichtentransport kann eine *Transportadresse* gegenwärtig nur eine Bitmessage-Adresse wie etwa `BM-2cStcTfCx8D3McrMcmGZYZcF4csKcQT2pa` sein. Transportadressen werden vom MMS nicht hinsichtlich Satzbau oder Richtigkeit überprüft. Gibst du eine fehlgebildete Adresse an, zeigt dir PyBitmessage nur bei der ersten (versuchten) Verwendung eine Fehlermeldung an.

Wenn du eine falsche Adresse (sprich nicht die korrekte Adresse für den jeweiligen Unterzeichner) eingibst, wird sehr wahrscheinlich gar nichts passieren; die Nachrichten werden den für sie bestimmten Empfänger schlicht nicht erreichen. Wenn niemand über den Schlüssel für diese Adresse - mit einem auf den Empfang von Nachrichten in diesem Wallet eingerichteten Bitmessage-Client - verfügt, wird die Nachricht lediglich für eine Zeit lang im Bitmessage-Netzwerk "umherschweben" und schlussendlich ungültig werden.

### mms list

    mms list

Listet alle gespeicherten Nachrichten auf. Es gibt keines separaten Ein- und Ausgang; alle Nachrichten sind in einer einzelnen chronologischen Liste enthalten. Die Spalten im Detail:

* `Id`: Die einzigartige ID der Nachricht, unter deren Verwendung du dich in Befehlen wie `mms show` und `mms send` auf genau diese Nachricht beziehen kannst. Nachrichten-IDs zählen streng von 1 aufwärts. IDs gelöschter Nachrichten werden nicht wiederverwendet.
* `I/O`: Richtung der Nachrichten. `in` kennzeichnet eine empfangene, `out` eine gesendete Nachricht. Beachte, dass du im Falle mancher Nachrichtenformen eine Nachricht von dir selbst erhalten kannst, bspw. eine teilsignierte Transaktion, welche du selbst eingeleitet hast.
* `Authorized Signer`: Im Falle einer empfangenen Nachricht ist dies der Sender, bei einer gesendeten Nachricht der Empfänger. Aufgelistet sind das Label und, innerhalb der Höchstbreite der Spalte, die Transportadresse des Unterzeichners.
* `Message Type`: Der Typ einer Nachricht, welcher dir sagt, welche Art von Daten sie enthält. Eine komplette Liste möglicher Nachrichtentypen findet sich unten.
* `Height`: Die zur Zeit der Erstellung/des Empfangs gültige Anzahl von Transfers. Genutzt, um die "richtigen" Synchronisationsdatennachrichten zusammenzufassen, welche alle dieselbe "Höhe" für alle anderen Unterzeichner haben müssen, bevor erfolgreich synchronisiert werden kann. Für dich ist diese Höhe unwichtig, außer für Fälle, in denen etwas schiefgelaufen ist. Mehr Infos finden sich im Kapitel *Fehlerbehebung*.
* `R`: Benötigt ein Multisig-Typ (etwa 2/3) mehr als einen Durchgang des Austauschs von Schlüsseln, zeigt dies die Zahl der jeweiligen Runde, zu welcher ein Schlüsselsatz gehört, an. 0 für alle anderen Nachrichtentypen.
* `Message State`: Der aktuelle Status der Nachricht. `waiting` oder `sent` für ausgehende, `waiting` oder `processed` für eingehende Nachrichten. Diesen Status kannst du nicht direkt ändern; es ist immer das Ergebnis ausgeführter Befehle.
* `Since`: Zeitpunkt und Zeitspanne von/nach dem Erhalt des aktuellen Nachrichtenstatus. Zeitangaben in UTC, nicht Ortszeit. Wenn du eine Nachricht erneut sendest, wird dieser Zeitstempel nicht angepasst und zeigt weiterhin die Zeit des ersten Sendens an.

Die komplette Liste von Nachrichtentypen:

* `key_set`: Daten über Schlüssel, welche Wallets zum Erstellen von Multisig-Adressen miteinander austauschen müssen
* `additional_key_set`: Ein Schlüsselsatz für eine zusätzliche Schlüsselaustauschrunde (nach der ursprünglichen), wie für nichtsymmetrische Multisig-Typen (etwa 2/3) notwendig
* `multisig_sync_data`: Daten, die Wallets zur korrekten Interpretation aus- und eingehender Transaktionen austauschen müssen; siehe auch Kapitel *Wallets synchronisieren*
* `partially_signed_tx`: Eine Transaktion, die noch nicht die zum Absenden notwendige Anzahl von Signaturen (= Anzahl erforderlicher Unterzeichner) hat
* `fully_signed_tx`: Eine Transaktion mit einem vollständigen Satz erforderlicher Unterzeichner, fertig zum Absenden zum Monero-Netzwerk; jeder Unterzeichner könnte diese senden
* `note`: Eine Nachricht, die eine Anmerkung enthält; siehe Befehl `mms note`
* `signer_config`: Gesamtinformationen aller Unterzeichner, die als Teil eines Auto-Config-Vorgangs gesendet werden können oder aus einem `mms send_signer_config`-Befehl resultieren
* `auto_config_data`: Adressdaten eines Unterzeichners, welche nach Eingabe eines Tokens mit `mms auto_config` zurück an den Auto-Config-Manager gesendet werden

### mms next

    mms next [sync]

*Der* zentrale und vermutlich nützlichste Befehl des MMS: Überprüfe den Status des Wallets plus die empfangenen und gesendeten Nachrichten wie auch deren Status; entscheide dann, welcher der nächste auszuführende Schritt ist - und führe diesen anschließend aus.

Wenn du dir unsicher bist, kannst du einfach einen `mms next`-Befehl eingeben; das MMS führt daraufhin entweder den gemäß Moneros "Regeln des Multisig-Arbeitsablaufs" nachfolgenden Befehl aus oder sagt dir, worauf es zum Fortfahren wartet. Bei "gefährlichen" Dingen kannst du dich auf eine letzte Sicherheitsabfrage vor dem Eintreten der wirklichen Aktion verlassen. Schlimmstenfalls kann ein `mms next`-Befehl etwas früher als von dir geplant ausführen, ansonsten kann es so gut wie keinen Schaden anrichten.

Für viele Aktionen gibt es **keinen** bestimmten Befehl; `mms next` ist der **einzige** Weg, Dinge voranzutreiben. Suche nicht nach z.B. Befehlen zur selektiven Verarbeiten bestimmter Nachrichten: Wenn es an der Zeit ist, einige empfangene Nachrichten in der Warteschleife zu verarbeiten, wird der Befehl dies tun.

Interessanter- und vielleicht überraschenderweise ist es bei Monero **immer** klar, was hinsichtlich Multisig als Nächstes passieren muss. Ausgenommen hiervon sind der Fall teilsignierter Transaktionen, für welche du entscheiden kannst, an **welchen** Unterzeichner sie gehen sollen, und der Fall komplett signierter Transaktionen, die du selbst an das Netzwerk leiten oder zwecks Einreichens auch an einen anderen Unterzeichner senden kannst.

Eine besondere Form des Befehls - `mms next sync` - ist für den Fall, dass Synchronisationsdaten ausstehen, während das MMS "glaubt", im aktuellen Status nicht neu synchronisieren zu müssen und diese Daten demnach nicht verarbeitet - was falsch sein könnte. Mehr dazu findet sich im Kapitel *Fehlerbehebung*.

### mms sync

    mms sync

Manueller Start eines erzwungenen Synchronisationsdurchgangs, selbst, wenn das MMS nicht der Meinung ist, dass ein Austausch von Synchronisationsdaten gerade nicht notwendig ist. Mehr dazu im Kapitel *Fehlerbehebung*

### mms transfer

    mms transfer <transfer_command_arguments>

Initiation eines Transfers unter Kontrolle des MMS, mit dem Unterschied zum standardmäßigen `transfer`-Befehl, dass die resultierende teilsignierte Transaktion nicht auf eine Datei geschrieben wird, für die du später zuständig bist, sondern, dass eine die Transaktion enthaltende Nachricht ausgegeben wird. Nutze `mms next` nach `mms transfer`, um das MMS aufzufordern, die Nachricht tatsächlich zu verarbeiten. Das bedeutet, dass über einen Unterzeichner entschieden werden muss, an welchen diese Nachricht zwecks der nächsten Signatur gehen soll, und, dass dazu eine weitere Nachricht erstellt werden muss.

Die Befehle des `mms transfer`-Befehls sind exakt dieselben des standardmäßigen `transfer`-Befehls. Um mehr über die zahlreichen möglichen Parameter(-kombinationen) zu erfahren, kann mit `help transfer` die Befehlsinfo angezeigt werden.

Allgemein betrachtet interessieren Adressen, Subadressen und Konten das MMS nicht. Ungeachtet dessen, was du in diesem Bezug für einen `mms transfer`-Befehl festlegst, wird es immer eine einzelne neue Nachricht mit der teilsignierten Transaktion geben.

Selbst mit aktivem MMS kannst du noch immer den normalen `transfer`-Befehl ausführen; du bist dann schlicht bezüglich dieser Transaktion auf dich allein gestellt. Versuche, die richtige Befehlsvariante zu nutzen; `transfer` wird nicht nach der Bestätigung dessen fragen, ob du es tatsächlich anstelle von `mms transfer`verwenden möchtest. Wenn du `transfer` erteilt hast, aber eigentlich die MMS-Variante nutzen wolltest, ignoriere die geschriebene Transaktionsdatei und fahre einfach mit `mms transfer` fort.

Das MMS zeichnet (zumindest bisher) nicht auf, wie viele Signaturen eine Transaktion tatsächlich hat, wer bereits unterzeichnet hat und wer noch nicht. Wegen dieser Schwäche kann es passieren, dass Entscheidungen, die keinen Sinn ergeben, eingebunden werden, etwa die Entscheidung, eine teilsignierte Transaktion an jemanden zu senden, der bereits unterzeichnet hat.

Bei Multisig-Formen wie 2/2 oder 2/3 spielt dies kaum eine Rolle, aber je höher die Zahl autorisierter Unterzeichner ist, desto wichtiger kann es werden. Um alles richtig zu machen, wird ein wenig Aufmerksamkeit seitens der Unterzeichner benötigt. Im absoluten Sinne kannst du aber so oder so nicht wirklich etwas falsch machen: Das CLI-Wallet, genauer gesagt die intern durch das MMS aufgerufenen CLI-Befehle werden jegliche Versuche zum Ausführen ungültiger Aktionen ablehnen.

### mms delete

    mms delete (<message_id> | all)

Löschung einer einzelnen Nachricht unter Angabe ihrer Nachrichten-ID, oder Löschen aller Nachrichten unter Verwendung des `all`-Parameters. Einzelne Nachrichten werden ohne Bestätigung gelöscht, selbst wenn sie noch nicht gesendet oder noch nicht verarbeitet wurden. Eine gelöschte Nachricht ist endgültig vernichtet; die Löschung kann nicht ungeschehen gemacht werden und ist auch aus dem Speicher von PyBitmessage entfernt. (Solltest du eine Nachricht verloren haben, kannst du den Sender darum bitten, diese nochmal abzusenden.)

Es gibt Situationen, in welchen du Nachrichten löschen musst, die nicht verarbeitet wurden, als nicht verarbeitbar markiert wurden und nun den "Arbeitsablauf stören"; mehr im Kapitel *Fehlerbehebung*. Das Löschen ist außerdem nützlich, wenn dir jemand eine Nachricht erneut zusendet und die ursprüngliche Nachricht schließlich doch bei dir eintrifft.

Man könnte sagen, dass der Wert einer gesendeten oder verarbeiteten Nachricht selbst gar nicht wirklich hoch ist, da du sie niemals wieder benötigen wirst; für viele Nachrichten gibt es sowieso keine Befehle, um sie auf Abruf erneut verarbeiten zu können. Die Liste der Nachrichten selbst kann allerdings zur Anzeige dessen, was wann passiert ist, ziemlich nützlich sein, also lösche besser keine Nachrichten ohne wirklichen Grund.

### mms send

    mms send [<message_id>]

Beispiel:

    mms send 14

Ohne Parameter werden alle Nachrichten mit dem Status *ready to send* abgesendet. Mit einer Nachrichten-ID als Parameter wird die jeweilige Nachricht (erneut) gesendet. Die Möglichkeit, eine Nachricht erneut zu senden, ist Teil der "Benutzererfahrung des Nachrichtensystems" und sorgt für eine ziemlich robuste Verarbeitung, da es sehr wenige Situationen gibt, von welchen du nicht wiederherstellen kannst: Das Bitmessage-Netzwerk hat deine Nachricht gefressen? Kein Problem, sende sie erneut. PyBitmessage ist abgestürzt? Kein Problem, starte PyBitmessage neu und sende deine Nachricht nochmal ab.

Ob Nachrichten unmittelbar gesendet werden oder ob das MMS dafür zunächst nach einer Bestätigung fragt, hängt vom Wert des `auto-send`-Parameters ab (siehe `mms set`-Befehl). Gerade für Anfänger kann dies nützlich sein, da deutlicher ist, was eigentlich passiert. Ansonsten ergibt es beinahe niemals Sinn, das Senden aufzuschieben, weil etwas anderes zuerst abgeschickt werden muss.

"Senden" meint kein wirkliches Senden; das MMS leitet die Nachricht schlicht an PyBitmessage weiter und *dieses* Programm sendet sie dann tatsächlich. Das MMS kann keinerlei Rückmeldung dazu geben, ob eine Nachricht noch darauf wartet, ins Bitmessage-Netzwerk zu gelangen, oder ob sie bereits erloschen ist. Wenn du dir nicht sicher bist, überprüfe es direkt bei PyBitmessage.

Jegliche Fehler in Bitmessage-Adressen werden lediglich im Moment des Sendens aufgespürt; das MMS selbst überprüft diese Adressen nicht.

### mms receive

    mms receive

Eine unmittelbare Überprüfung auf empfangene Nachrichten erzwingen, oder genauer eine unmittelbare Anfrage des MMS an PyBitmessage bezüglich neuer Nachrichten erzwingen.

Das MMS überprüft auf neu eingehende Nachrichten mit der Frequenz, mit welcher das CLI-Wallet auf eingehende Transaktionen überprüft: einmal alle 90 Sekunden. Die Einstellung, mit welcher die automatische Überprüfung ein- oder ausschaltet werden kann, ist ebenfalls dieselbe: `auto-refresh`.

### mms note

    mms note [<label> <text>]

Beispiele:

    mms note
    mms note bob Did you already submit the last transaction?
    mms note alice Yes, just waiting for the next block :)

Ohne Parameter Anzeige jeglicher ungelesener Notizen. Mit Label und weiterem Text als Parameter kann der Text als Nachricht vom Typ `note` an den Unterzeichner mit dem entsprechenden Label versendet werden.

Sich gegenseitig Notizen direkt von einem Monero-Wallet zum Nächsten zu senden kann eine lustige Möglichkeit sein, um ohne zusätzliche Kanäle mit anderen Unterzeichnern zu kommunizieren.

Wenn du eine bestimmte Notiz lesen bzw. erneut lesen möchtest, nutze dazu den `mms show`-Befehl und schaue in die letzte Zeile mit dem Nachrichteninhalt, in diesem Falle der Text der Notiz.

### mms show

    mms show <message_id>

Detaillierte Informationen bezüglich der Nachricht unter Gebrauch der ID als Befehlsparameter anzeigen. Keine Anzeige von Binärnachrichteninhalten; nutze den `mms export`-Befehl und untersuche die resultierende Datei, wenn du einen solchen Nachrichteninhalt überprüfen musst.

### mms export

    mms export <message_id>

Den Inhalt einer Nachricht unter Angabe ihrer ID in eine Datei mit dem festen Namen `mms_message_content` in das aktuelle Verzeichnis exportieren. Eine bereits bestehende Datei wird hinweislos überschrieben.

Bisher gibt es kein `mms import`-Gegenstück.

### mms set

    mms set <option_name> [<option_value>]

Beispiel:

    mms set auto-send 1

Das Äquivalent des allgemeinen `set`-Befehls mit lediglich dem Namen einer Option und dem derzeitigen Wert ebendieser. Stelle diese Option mittels Eingabe ihres Optionsnamens und des Optionswerts auf den gegebenen Wert ein. 

Die bisher einzige MMS-spezifische Einstellung, welche dieser Befehl bewerkstelligt, ist die `auto-send`-Einstellung, mittels derer festgelegt wird, ob gesendete Nachrichten direkt nach ihrer Erstellung abgesendet werden oder das MMS vor dem Senden nach einer Bestätigung fragen soll (siehe auch `mms send`-Befehl). Sobald du mit dem MMS vertraut bist und dir der Umgang damit bequem von der Hand geht, könnte es eine gute Idee sein, `auto-send` für weniger Abfragen und eine schnellere Verarbeitung auf 1 festzulegen.

### mms start\_auto\_config

    mms start_auto_config [<label> <label> ...]

Beispiel:

    mms start_auto_config bob trent

Initiieren eines Auto-Config-Vorgangs im Wallet des "Config-Managers", indem Auto-Config-Token für jeden Unterzeichner außer "mir", sprich dem Ersten, erstellt werden. Führe einen `mms signer`-Befehl aus, um die Token anzuzeigen. Sicherheitsabfrage, weil es bereits Token für Unterzeichner in der Unterzeichnerkonfiguration gibt und Auto-Config daher bereits zu laufen scheint.

Der Manager muss nun diese Auto-Config-Token an die jeweiligen Unterzeichner außerhalb des MMS übermitteln. Beachte, dass diese Token sensible Informationen sind: Ein Token in Händen eines Nicht-Unterzeichners oder des falschen Unterzeichners wird diese Person dazu befähigen, sich als der rechtmäßige Unterzeichner auszugeben und so anstelle des eigentlichen Unterzeichners an allen Transaktionen teilzunehmen.

Voraussetzung des Startens von Auto-Config ist, dass *alle* Unterzeichner ein zugewiesenes Label haben. Die Idee dahinter ist, dass Auto-Config **dieselben** Labels in den Wallets aller Unterzeichner einrichtet, damit jedem klar ist, wer wer ist. (Lediglich die Reihenfolge der Unterzeichner wird in jedem Wallet unterschiedlich sein, weil der Besitzer eines Wallets stets Unterzeichner Nr. 1 ist.) Später ist es den Unterzeichnern freigestellt, unbeliebte Labels zu ändern, solange natürlich keine Gefahr besteht, andere Unterzeichner zu verwirren.

Du kannst im Vorfeld Labels für alle Unterzeichner mit dem `mms signer`-Befehl erstellen. Mit `mms start_auto_config` direkt geht das noch bequemer, indem alle Labels (außer das Label für "mich") in der richtigen Reihenfolge als Befehlsargumente aufgelistet werden.

Dieser Befehl kann im Grunde jederzeit erteilt werden, wobei es natürlich zu Beginn, wenn für die Wallets aller Unterzeichner bisher lediglich `mms init` ausgeführt wurde, am meisten Sinn ergibt.

Siehe Kapitel *Auto-Config* zwecks Beschreibung der diesem Befehl nachfolgenden Schritte.

### mms auto\_config

    mms auto_config <auto_config_token>

Beispiel:

    mms auto_config mms561832e3eb

Verarbeitet einen Auto-Config-Token, welchen du im Zuge eines Auto-Config-Vorgangs vom "Config-Manager" mittels eines angemessen sicheren Kommunikationskanals außerhalb des MMS erhalten hast (etwa via SMS, Nachrichten-App auf dem Smartphone, verschlüsselter E-Mail oder mittels Anruf). Jeder Unterzeichner erhält einen eigenen, individuellen Token. Behandle jegliche Auto-Config-Token des MMS wie eine vertrauliche Information.

Dies resultiert in einer Nachricht des Typs `auto-config data`, mit welcher deine Bitmessage- und deine Monero-Adresse an den Manager gesendet werden. (Die Übertragung dieser Nachricht ist bereits so sicher wie jede spätere MMS-Nachricht, solange niemand deinen Token kennt.)

Es besteht etwas Toleranz bei der Art und Weise, auf welche das MMS eingegebene Token interpretiert (z.B. beachtet es keinerlei Groß- oder Kleinschreibung), und jeglicher Tippfehler wird mit hoher Wahrscheinlichkeit in einem ungültigen Token resultieren und aufgespürt werden.

Wenn über die Verwendung von Auto-Config entschieden wurde, unterlasse es besser, irgendwelche Unterzeichnerinformationen manuell mit `mms signer` einzugeben. (Das MMS wird dies jedoch nicht verhindern.)

Siehe Kapitel *Auto-Config* für eine komplette Liste aller Schritte eines Auto-Config-Ablaufs.

### mms stop\_auto\_config

    mms stop_auto_config

Löschung jeglicher Auto-Config-Token der Unterzeichnerkonfiguration und daraus resultierend das Beenden jedes laufenden Auto-Config-Vorgangs.

Gelöschte Token können weder wiederhergestellt noch rekonstruiert werden, da sie zufällig sind. Wenn du als "Config-Manager" Token löschst bist du nicht mehr in der Lage, von anderen Unterzeichnern unter Verwendung dieser gelöschten Token gesendete Auto-Config-Nachrichten zu empfangen (aber auch niemand sonst wird sie empfangen). Jeder wird neue, von dir ausgegebene Token benötigen.


### mms send\_signer\_config

    mms send_signer_config

Manuelles Senden deiner gesamten Unterzeichnerkonfiguration in Form einer Nachricht des Typs `signer config` an alle anderen Unterzeichner. Nach dem Empfang deiner Nachricht können diese ihre Unterzeichnerkonfiguration mithilfe eines `mms next`-Befehls mit der deinen ersetzen. Davor wird es aber eine Sicherheitsabfrage geben.

Das Label jedes Unterzeichners wird mit dem von dir für ihn eingegebenen Label überschrieben, die eigenen Bitmessage- und Monero-Adressen werden jedoch aufbewahrt.

Dieser Befehl und seine Fähigkeit, eine bestimmte Unterzeichnerkonfiguration zu "übertragen", kann als Baustein für etwas wie ein "Halb-Auto-Config" dienen. Siehe auch Kapitel *Unterzeichnerkonfiguration senden*. Das Entsenden einer kompletten Unterzeichnerkonfiguration ist zudem Teil von Voll-Auto-Config, allerdings ohne Erfordernis eines separaten `mms send_signer_config`-Befehls.

## Sicherheit

Das MMS wurde mit Sorgfalt entwickelt und als ein System implementiert, das einen hohen Grad an Sicherheit bietet.

Dies war nicht besonders einfach: Monero-Multisig selbst ist bereits ein facettenreicher, um nicht zu sagen komplexer Prozess und daher nicht einfach zu sichern; darüber hinaus ist auch das MMS ein leistungsstarkes, um nicht zu sagen komplexes System. Es ist also kein Wunder, dass verschiedene eventuelle Sicherheitsprobleme bestehen.

Beachte, dass dies die **allererste** Version des MMS ist und es daher gut sein könnte, dass Menschen durch dessen Gebrauch in diversen Umständen neben den hier genannten Sicherheitsproblematiken auch neue Probleme aufdecken oder bekannte in ein anderes Licht stellen könnten. Dennoch besteht die begründete Hoffnung, dass das MMS im Grunde keine tiefgreifenden und irreparablen konzeptuellen Schwächen hat.

Kurz gesagt: Wenn du dir unsicher bist, verwende das MMS erst, nachdem du deine Multisig-Wallets selbstständig eingerichtet hast - vermutlich auf gesicherteren Wegen als sie das MMS bereitstellen könnte (nicht einfach, aber machbar).

### Nutzen von Verschlüsselung und Signaturen

Jeglicher Nachrichteninhalt wird entweder unter Verwendung der View-Keys der Monero-Wallets der Unterzeichner oder, im Falle von Auto-Config-Nachrichteninhalten, mit zufällig erstellten Schlüsseln derselben Stärke verschlüsselt. Angesichts der Tatsache, dass PyBitmessage selbst bereits alle Nachrichten verschlüsselt, mag dies ein wenig übertrieben scheinen. PyBitmessage ist jedoch erstens eine Fremdsoftware, der du eventuell nicht vertrauen möchtest, und zweitens ist das MMS mit dieser Funktion bereits zu einem gewissen Teil auf weniger sichere Kommunikationssysteme, die selbst nicht verschlüsseln, ausgerichtet.

Nachrichten werden durch den Sender mithilfe seines privaten View-Keys signiert. Dies wird zur Authentifizierung benötigt: Eine Nachricht eines Unterzeichners, die über keine gültige Signatur (welche nur der Unterzeichner selbst und niemand sonst getätigt haben könnte) verfügt, wird vom MMS abgelehnt werden. Außerdem sichert auch ein Hash den Nachrichteninhalt gegenüber jeglicher Änderungen. Letztlich werden nur Nachrichten von Unterzeichnern akzeptiert: Eine Nachricht von einer nicht in der Unterzeichnerkonfiguration gelisteten Monero-Adresse wird abgelehnt, selbst, wenn sie mit einer gültigen Signatur versehen ist.

Der View-Key wird zudem dazu verwendet, den Inhalt der `.mms`-Datei, welche die Unterzeichnerkonfiguration und alle gesendeten und empfangenen Nachrichten enthält, zu verschlüsseln.

Trotzdem sollte man wohl angesichts der Sicherheitsanforderungen von Datenübertragungen realistisch bleiben: Natürlich ist nicht gewollt, dass die diversen Datenpakete, die zwischen den Wallets der Unterzeichner hin- und herpendeln, in die falschen Hände gelangen; für einen Angreifer, der über einige dieser Daten verfügt, wäre es jedoch nicht einfach, einen wirklichen Schaden anzurichten. Letzten Endes ist es das Ziel von Multisig, dass nur eine Gruppe **kooperierender** Menschen eine Transaktion unterzeichnen und damit genehmigen und absenden kann. Ein Angreifer, der eine teilsignierte Transaktion in die Finger bekommt, wird nicht viel damit anfangen können.

(Ein Angreifer, der von Beginn an **jegliche Kommunikation** abhört, könnte vermutlich alle Schlüssel sammeln und ein voll funktionsfähiges Monero-"Single-Sig"-Wallet für diese Multisig-Adresse erstellen und Coins stehlen, wenn Daten nicht verschlüsselt wurden. Dies ist aber ein ziemlich drastisches Szenario - vom MMS gesendete Daten **sind** verschlüsselt.)

### Kommunikation von MMS zu PyBitmessage

Unglücklicherweise ist die Kommunikation zwischen MMS und PyBitmessage nicht verschlüsselt. Hierbei wird HTTP verwendet, nicht dessen verschlüsseltes Gegenstück HTTPS. Nachrichteninhalte werden natürlich **vor** der Übertragung von MMS an PyBitmessage verschlüsselt, und jegliche Änderungen des Inhalts würden beim Empfang der Nachricht aufgespürt. Ein "Zuhörer" könnte jedoch Informationen aus den "Metadaten" ziehen - etwa darüber, wer was an wen zu welchem Zeitpunkt sendet.

Solange dein Monero-Wallet gemeinsam mit dem MMS und PyBitmessage auf demselben Gerät läuft, ist dies an und für sich keine große Gefahr: Jeder, der eine solche, strikt lokale Kommunikation - `localhost` an `localhost` - abhören kann, ist bereits in deinem Computer; in dem Fall hast du wahrscheinlich eh schon verloren und der Trojaner, der den Verkehr zwischen MMS und PyBitmessage abhorcht, ist dann vermutlich deine letzte Sorge. 

Aufgrunddessen ist es keine gute Idee, eine PyBitmessage-Instanz einzurichten, die über das Internet erreichbar ist (wie eine Art "öffentlicher Node").

Es gibt zudem ein zweites Problem: Der PyBitmessage-API wird nur durch einen Nutzernamen und ein Passwort geschützt, welche als Klartext mit jeder HTTP-Anfrage übermittelt werden müssen. Für einen Angreifer wäre es nicht besonders schwer, Nutzernamen und Passwort abzufangen und Angriffe des DOS-Typs zu starten, etwa durch das Löschen aller Nachrichten in 10-Sekunden-Intervallen.

(Zur Verteidigung von PyBitmessage muss gesagt werden, dass es **nicht** als Server, der dem großen, weiten, bösen Internet gegenübertreten kann, sondern als ein lokal laufendes Programm entworfen wurde. Es ist nicht wirklich überraschend, dass bei der Ausführung außerhalb des angedachten Anwendungsfalls Problemen auftreten.)

### Identitätsbetrug

Wenn Alice, die Käuferin, und Bob, der Verkäufer, zur *Hinterlegung* ein 2/3-Multisig verwenden, wird es Trent als vertrauten Dritten geben, der im Falle von Problemen zwischen beiden Parteien vermitteln kann: Er kann entweder Alice durch das Signieren einer von ihr initiierten Transaktion helfen, ihr Geld zurückzubekommen, falls Bob nicht liefern sollte, oder ebendiesen unterstützen, wenn Alice die Ware mit großer Wahrscheinlichkeit erhalten hat, diese das aber abstreitet und sich weigert, die an Bob gehende Zahlung zu signieren.

In eine solche Situation der *Hinterlegung* wirst du tatsächlich **drei** verschiedene Personen einbinden wollen. Sollte es Bob irgendwie gelingen, sich Alice gegenüber als Trent auszugeben und zudem **zwei** verschiedene Wallets mit zwei Schlüsselsätzen einzurichten, wird er durch diesen Identitätsbetrug in der Lage sein, solcherlei 2/3-Multisig-Transaktionen selbst zu validieren.

Wie groß die Gefahr eines Identitätsbetrugs ist, liegt von dem Sicherheitslevel des ursprünglichen Austauschs der Schlüsselsätze ganz zu Beginn des Vorgangs ab, während die Wallets eingerichtet und schließlich in den Multisig-Modus umgestellt werden: Kannst du versichern, dass ausschließlich die richtigen Personen die richtigen Schlüsselsätze erhalten haben und sich somit niemand als jemand anderen ausgeben kann, dann ist alles in Ordnung. Wenn nicht, könntest du den Kürzeren ziehen.

Wenn du die vollen Möglichkeiten des MMS ausschöpfst, nutzt du es nicht nur zum Durchführen von Transaktionen, sondern bereits davor zum Austauschen der Schlüsselsätze unter allen Unterzeichnern. Besonders für höhere Typen von Multisig, wie etwa 2/4 mit zahlreichen Austauschrunden, kann dies wirklich hilfreich und weniger fehlerhaft als so mancher manuelle Ablauf sein. Es gilt also, einem möglichen Identitätsbetrug vom Sichern des Schlüsselaustauschs bis hin zum sicheren Einrichten von Unterzeichneradressen ins MMS vorzubeugen: Wenn Bob Alice auf irgendeine Weise dazu bringen kann, dass sie eine **seiner** Monero- und Bitmessage-Adressen anstelle der von Trent akzeptiert, hat er gewonnen.

Alle drei vom MMS unterstützten Methoden zum Einrichten von Unterzeichneradressen - Unterzeichner manuell einrichten, Auto-Config und das "halbautomatische" Senden vervollständigter Unterzeichnerinformationen - haben unterschiedliche, mit ihnen verbundene Risiken bezüglich Identitätsbetrugs. In den jeweiligen Kapiteln finden sich weitere Infos darüber: *Unterzeichner manuell einrichten*, *Auto-Config* und *Unterzeichnerkonfiguration senden*. 

Auto-Config ist bei Weitem am einfachsten zu sichern: Du musst nur ein winzigkleines Bisschen an Information - einen Auto-Config-Token mit elf Schriftzeichen - sicher an jeden Unterzeichner übersenden, und wenn du dies tun kannst, hast du schon gewonnen. (Der "Config-Manager" wird hier natürlich als vertrauenswürdig angenommen.)

Wenn sich das für dich alles zu kompliziert und deshalb nicht vertrauenswürdig anhört, hast du die Möglichkeit, ganz ohne das MMS Wallets einzurichten und Multisig-Adressen herzuleiten. Erst später kommt das MMS zwecks des bequemen Umhersendens teilsignierter Transaktionen, und um dich vom ermüdenden manuellen Synchronisieren nach jeder Transaktion zu befreien, ins Spiel. 

### Von Angreifern kontrollierte Daten

Es gibt zwei Situationen, in denen dein das MMS nutzende Wallet Daten eines anderen Unterzeichner empfängt und dieser andere Unterzeichner in böser Absicht versuchen könnte, dich zu betrügen oder dich dazu zu bringen, etwas Schädliches zu tun:

Notizen, wie sie vom `mms note`-Befehl übermittelt werden, können zum "Social Engineering" eingesetzt werden. Ein Angreifer könnte bspw. versuchen, jemanden mittels einer wie eine Fehlermeldung erscheinenden Notiz zu täuschen. Die technischen Möglichkeiten sind hier allerdings begrenzt: Notizen sind ausschließlich textlichen Inhalts. Zeigt das MMS eine Notiz an, filtert es Schriftzeichen mit ASCII-Codes von weniger als 32 Zeichen Länge und den Zeichen "<" und ">", die zum Konstruieren von möglicherweise interpretierbarem HTML oder XML genutzt werden könnten, heraus (sehr unwahrscheinlich im CLI-Wallet, aber etwas wahrscheinlicher in GUI-basierenden Wallets). Außerdem besteht für Notizen eine Längenbegrenzung.

Der zweite Weg ist ein Betrugsversuch mittels Labels, die durch den `mms send_signer_config`-Befehl gesendet werden. Bob könnte Alice als *Trent* und Trent als *Alice* labeln, die Unterzeichnerkonfiguration an Alice senden und diese irgendwie von deren Verwendung überzeugen. Das ist der Grund dafür, dass eine Nachricht des Typs `signer config` (falls außerhalb des Auto-Configs mit einem expliziten `mms send_signer_config`-Befehl gesendet) nicht sofort verarbeitet, sondern zunächst zusammen mit einer Sicherheitsabfrage angezeigt wird.

## Fehlerbehebung

### Synchronisationsprobleme lösen

Wie im Kapitel *Wallets synchronisieren* erklärt, benötigt Monero-Multisig nach dem Senden wie auch nach dem Empfangen von Transaktionen den Austausch einiger Daten zwischen Wallets. Diese werden im MMS *multisig sync data* genannt.

Manchmal geraten Dinge irgendwie "aus dem Takt". Es gibt vier mögliche Anzeichen dafür, dass dies passiert sein könnte:

* Der `balance`-Befehl zeigt eine Nachricht ("*Some owned outputs have partial key images - import\_multisig\_info needed*"), die sich "weigert", zu verschwinden.
* Das Wallet sagt dir: "*That signature was made with stale data*", und verweigert die Weiterverarbeitung einer Transaktion.
* Das Wallet teilt dir beim Versuch des Signierens einer Transaktion mit, dass Schlüssel fehlen.
* Das Wallet lastet dir an, versucht zu haben, Gelder doppelt zu senden, obwohl du (wahrscheinlich) nichts dergleichen getan hast.

In manchen solcher Fälle scheitert das MMS daran, das Problem zu erkennen, und teilt dir nach dem `mms next`-Befehl einfach mit, dass es nichts zu tun gibt, anstatt eine Synchronisationsrunde einzuleiten.

Aus diesem Grund gibt es einen Weg, die **Synchronisation** jederzeit zu **erzwingen**:

* Alle Unterzeichner erteilen zum Senden von Synchronisationsinfos anstelle des einfachen `mms next` einen `mms sync`-Befehl.
* Nach dem Empfang dieser Nachrichten erteilen alle Unterzeichner einen `mms next sync`-Befehl - beachte das zusätzliche Argument `sync`.

Damit die Synchronisation funktioniert, müssen alle Informationen von derselben "Höhe" sein, sprich mit einer von allen Unterzeichner-Wallets übereinstimmend aufgezeichneten Anzahl von Transfers: Wenn bspw. ein Unterzeichner eine Transaktion aus irgendeinem Grund nicht erhält und in diesem Stadium Synchronisationsinformationen versendet, werden diese für andere Unterzeichner mit kompletten Wallets nicht von Nutzen sein.

Falls das MMS noch nicht verarbeitete Nachrichten mit Synchronisationsdaten mit dem Status `waiting` zu ignorieren scheint, passiert dies höchstwahrscheinlich aus genau diesem Grund. Wenn du dir unsicher bist, überprüfe die Spalte `Height` in einer Nachrichtenliste, welche du mit `mms list` erhältst.

Es kommt vor, dass solche bisher nicht verarbeiteten Nachrichten, die schließlich "nicht mehr verarbeitbar" werden, dem `mms next`-Befehl ein Bein stellen. Wenn das passiert, kannst du mit `mms delete` jegliche Nachrichten mit zu niedriger Höhe löschen.

### Eine Transaktion an einen anderen Unterzeichner umleiten/weiterleiten

Wenn du in in Fällen wie 2/3-Multisig eine teilsignierte Transaktion an jemanden gesendet hast, es dir aber später anders überlegst und sie vielleicht an jemand anderen schicken möchtest, gibt es dazu einen kleinen Trick: Lokalisiere die **an dich** adressierte Nachricht des Typs `partially signed tx` und erteile einen `mms send`-Befehl für ebendiese Nachricht. Nach dem Empfang führst du `mms next` aus. Dir wird dann erneut die Wahl gegeben, was du mit dieser Nachricht machen möchtest.

Natürlich kannst du diese Transaktion auch ignorieren und eine neue initialisieren. Dabei solltest du nur beachten, dass diese neue Transaktion im späteren Verlauf auf eine Blockade stoßen könnte, wenn die erste **früher** als diese zweite komplett signiert an das Netzwerk weitergeleitet wird.

### Unkooperative Unterzeichner beim Synchronisieren ignorieren

Der normale Synchronisationsvorgang des MMS-Wallets geht davon aus, dass alle Unterzeichner kooperativ sind und nach dem Senden/Empfangen einer Transaktion Nachrichten mit Synchronisationsdaten versenden. `mms next` wartet daher solange, bis es diese Synchronisationsdatennachrichten (für dieselbe "Höhe") von **allen** anderen Unterzeichnern erhalten hat, und verarbeitet sie erst dann wie üblich.

Da *M* in Konfigurationen wie 2/3-Multisig kleiner als *N* ist, kannst du allerdings erfolgreich mit lediglich (Anzahl erforderlicher Unterzeichner minus 1) Synchronisationsnachrichten synchronisieren. `mms next` sagt dir Bescheid, sobald du diese untere Schwelle erreicht hast, und gibt dir zudem einen Hinweis zum Überschreiben und damit zum zeitigen Fortfahren: Verwende `mms next sync`.

Wenn du dennoch später weitere Nachrichten mit Synchronisationsdaten erhältst, lösche diese einfach mit `mms delete`: Sie sind unnötig und für dich nicht verarbeitbar und bringen im schlimmsten Fall die nächste Synchronisationsrunde durcheinander.

Initiierst du die Synchronisation, so erstellt das MMS üblicherweise Nachrichten an *alle* anderen Unterzeichner. Wenn du dies unterbinden und es anderen damit so schwer wie möglich machen möchtest, die Transaktion fortzuführen, stelle sicher, dass du `auto-send` auf "false" stellst, auf die erste Sendeaufforderung mit "No" antwortest und jegliche ungewollten Nachrichten manuell löschst, bevor du den Rest mit `mms send` verschickst.

### Von abhandengekommenen oder doppelten Nachrichten wiederherstellen

Wenn dir eine Nachricht aus irgendeinem Grund - etwa weil PyBitmessage an ihrer Lieferung scheitert oder du sie zu früh gelöscht hast - entgeht, bitte den Sender darum, die jeweilige Nachricht unter Verwendung des `mms send`-Befehls erneut zu senden.

Beachte, dass sich mehrfach gesendete Nachrichten auf der Empfangsseite *nicht* automatisch gegenseitig aufheben. Wenn du eine Nachricht z.B. aus schlichter Ungeduld erneut sendest, könnte der adressierte Unterzeichner zwei Nachrichten desselben Typs und mit demselben Inhalt empfangen.

Wenn die fehlende Nachrichte später nachträglich erscheint, ist das nicht gut; du kannst die Situation jedoch leicht lösen, indem du eine der zwei Kopien mit dem `mms delete`-Befehl beseitigst.

### Informationen von Unterzeichnern korrigieren/aktualisieren

Mit dem `mms signer`-Befehl kannst du ein Label (`bob`) ändern, wenn es dir nicht mehr gefällt: 

    mms member 2 bob-the-builder

Mit einem weiteren Argument kannst du Bitmessage-Adressen bei Bedarf ändern:

    mms member 2 bob BM-2cSrgmut9AD6bdU8b8GXd36iUYDjCS9xJb

Du kannst auf dieselbe Weise sogar Monero-Adressen ändern (natürlich mit Ausnahme deiner eigenen Adresse), allerdings mit der Beschränkung, dass dies nur funktioniert, solange es keine empfangenen Nachrichten gibt. Sobald Wallets im "Multisig-Modus" sind, ergibt es eh keinen Sinn mehr, Monero-Adressen zu ändern.

### Von Grund auf beginnen

Wenn bei einem Wallet der Zustand des MMS irreparabel beschädigt ist und du ganz von Grund auf beginnen möchtest oder du das MMS bei einem bestimmten Wallet nicht mehr verwenden willst, lokalisiere die Wallet-Dateien im Dateisystem und lösche die Datei mit der `.mms`-Dateierweiterung.

### Interaktion von MMS/PyBitmessage

Nachfolgend einige Details über die Interaktion zwischen dem MMS und PyBitmessage für ein besseres Verständnis dort möglicherweise auftretender Probleme:

Das MMS versucht, die Anzahl der Nachrichten, die sich in PyBitmessages Speicher anhäufen, zu limitieren und löscht sie. Zwecks verbesserter Zuverlässigkeit löscht es jedoch nicht direkt nach dem Empfang, sondern erst, nachdem eine Nachricht ihren Status von `waiting` zu `processed` geändert hat oder du sie aus dem Nachrichtenspeicher gelöscht hast. Manchmal "verwaisen" Nachrichten regelrecht, und dennoch hat das MMS keine Möglichkeit, sie zu löschen. Du kannst solcherlei Nachrichten sicher und interaktiv bei PyBitmessage selbst löschen.

Wenn du Auto-Config verwendest, werden in PyBitmessage automatisch neue Adressen/Identitäten für das MMS erstellt. Es versucht, diese nach der Fertigstellung der Einrichtung zu entferne. Beachte jedoch, dass die aktuelle PyBitmessage-Version gelöschte Adressen weiterhin bis zum nächsten Neustart des Programms anzeigt: Prinzipiell harmlos, aber doch irgendwie verwirrend.

Falls solche dynamischen Auto-Config-Adressen gar nicht entfernt werden (z.B. weil du im Vorfeld ein Wallet gelöscht hast und es in der aktuellen PyBitmessage-Version unglücklicherweise keinen einfachen Weg gibt, diese loszuwerden): Du musst dazu die `keys.dat`-Datei manuell lokalisieren und editieren, indem du die entsprechenden Zeilen (hoffentlich ohne Schädigung von irgendetwas anderem darin...) löschst.

Es scheint, als würden Nachrichten manchmal "feststecken" und nicht abgesendet werden; versuche es in solchen Fällen mit einem Neustart von PyBitmessage.