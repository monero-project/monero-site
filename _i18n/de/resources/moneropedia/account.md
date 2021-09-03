---
summary: 'Funktionsähnlich zu einem Bankkonto, enthält all deine gesendeten und empfangenen Transaktionen'
terms: ["account", "accounts", "wallet", "wallets", "Konto", "Konten", "Kontos", "Wallet", "Wallets"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

Für jene, die mit Moneros Vorgängern vertraut sind, wird zur Beschreibung
der Begriff *Wallet* geläufiger sein. Bei Monero nennen wir dies ein Konto,
welches ein privates, von einem Monero-Nutzer geführtes und in dessen Besitz
befindliches Konto ist.

Dein Konto enthält die @Transaktionen aller Monero, welche du gesendet und
empfangen hast. Dein Kontoguthaben ist die Summe aller Monero, die du
empfangen hast, abzüglich derer, die du gesendet hast. Bei der Nutzung von
Monero kannst du feststellen, dass dein Konto zwei Guthaben hat: ein
gesperrtes und ein offenes. Das offene Guthaben enthält Geldmittel, die
unmittelbar ausgegeben werden können, das gesperrte Guthaben enthält jene,
die nicht direkt ausgabebereit sind. Letzteres könnte beispielsweise daran
liegen, dass eine von dir empfangene Transaktion eine gesetzte
@Freigabedauer hat, oder dass du noch auf @Wechselgeld der von dir
gesendeten Monero wartest - beide Situationen könnten dazu führen, dass
dieses Guthaben für eine Weile gesperrt ist.

Ein entscheidender Unterschied zwischen traditioneller elektronischer
Währung und Monero ist, dass dein Konto, das im Normalfall auf deinem
Computer liegt, einzig und allein unter deiner Kontrolle ist und nicht von
anderen abgerufen werden kann, sofern du gut auf deine
[Sicherheit](#Auf-Sicherheit-achten) achtest.

### Multiple Konten

Mit dem Erstellen von Monero-Konten sind keine Kosten verbunden und es
werden keinerlei Gebühren erhoben (ausgenommen davon sind einzelne Gebühren
für @Transaktionen, welche an @Miner gehen).

Dies bedeutet, dass Einzelpersonen ohne Umstände ein privates Monero-Konto
für sich selbst, wie auch ein Gemeinschaftskonto mit dem Partner, und
zusätzlich individuelle Konten für ihre Kinder erstellen können. Auf die
gleiche Weise könnte ein Unternehmen für jede Abteilung oder jeden Bereich
separate Konten einrichten. Da Moneros Gebühren für @Transaktionen ziemlich
niedrig sind, ist es nicht sonderlich kostenintensiv, Gelder zwischen Konten
hin- und herzubewegen.

### Kryptografische Schlüssel

Monero vertraut stark auf ein kryptografisches Prinzip, welches als
*Public/Private-Key-Verschlüsselungssystem* oder *asymmetrisches
Kryptosystem* bekannt ist. Dies wird ausführlich in [diesem
Wikipedia-Artikel](https://de.wikipedia.org/wiki/Asymmetrisches_Kryptosystem)
erläutert.

Dein Konto basiert auf zwei Schlüsseln: einem @Spend-Key und einem
@View-Key. Das Besondere am @Spend-Key ist, dass es der einzige Schlüssel
ist, welcher zum Ausgeben deines Monero-Guthabens benötigt wird. Der
@View-Key hingegen erlaubt es dir, deine @Transaktionen Dritten
offenzulegen, beispielsweise zur Rechnungsprüfung oder zu
Buchhaltungszwecken. Diese Schlüssel spielen zudem eine wichtige Rolle
bezüglich der Privatsphäre von Moneros @Transaktionen.

Diese privaten Schlüssel müssen durch dich geschützt werden, um die
Privatsphäre deines Kontos zu erhalten. Die öffentlichen Schlüssel hingegen
sind - offensichtlich - öffentlich (sie sind Teil deiner
Monero-Kontoadresse). Mit regulären
Public-/Private-Key-Verschlüsselungssystemen könnte dir jemand eine mit
einem deiner öffentlichen Schlüssel verschlüsselte Nachricht schicken und
nur du wärst in der Lage, diese mit deinen privaten Schlüsseln zu
entschlüsseln.

### Dein Konto sichern

Wenn du dein eigenes Monero-Konto mit dem privaten @Spend-Key verwaltest,
bist allein du für die Sicherheit deiner Gelder
verantwortlich. Glücklicherweise gestaltet es Monero sehr einfach, dein
Konto zu sichern. Wenn du zum ersten Mal ein Monero-Konto erstellst, wird
dir ein einzigartiger @mnemonischer-Seed mitgeteilt, welcher aus 13 oder 25
Wörtern in der von dir gewählten Sprache besteht. **Dieser Seed ist das
Einzige, das du für dein Konto sichern musst**, es ist also unbedingt
erforderlich, dass er niedergeschrieben und sicher verstaut wird. Speichere
oder lagere ihn niemals in einer Ausführung oder an einem Ort, welche(r) es
jemand anderem erlauben könnte, ihn einzusehen!

```
List of available languages for your wallet's seed:
0 : Deutsch
1 : English
2 : Español
3 : Français
4 : Italiano
5 : Nederlands
6 : Português
7 : русский язык
8 : 日本語
9 : 简体中文 (中国)
10 : Esperanto
Enter the number corresponding to the language of your choice: 1
Generated new wallet: 4B15ZjveuttEaTmfZjLVioPVw7bfSmRLpSgB33CJbuC6BoGtZrug9TDAmhZEWD6XoFDGz55bgzisT9Dnv61sbsA6Sa47TYu
view key: 4130fa26463d9451781771a8baa5d0b8085c47c4500cefe4746bab48f1d15903
**********************************************************************
Your wallet has been generated.
To start synchronizing with the @daemon, use "refresh" command.
Use "help" command to see the list of available commands.
Always use "exit" command when closing monero-wallet-cli to save your
current session's state. Otherwise, you might need to synchronize
your wallet again (your wallet keys are NOT at risk in any case).

PLEASE NOTE: the following 25 words can be used to recover access to your wallet. Please write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.

aunt knuckle italics moisture hawk thorn iris abort
chlorine smog uphill glass aptitude nowhere sewage plywood
dual relic fierce divers anvil nodes bubble cabin abort
**********************************************************************
Starting refresh...
Refresh done, blocks received: 21939                            
Balance: 0.000000000000, unlocked balance: 0.000000000000
Background refresh thread started
[wallet 4B15Zj]: █
```

Wie das obige Beispiel zeigt, ist es unglaublich wichtig, diese Wörter an
sicheren Orten aufzubewahren. Solltest du etwa über deren Verlust bei dir
Zuhause besorgt sein, könntest du eine Kopie deines Seeds bei einem
Bevollmächtigten oder in einem Tresor- oder Bankschließfach lagern. Es wird
außerdem empfohlen, ihn so aufzubewahren, dass es nicht direkt ersichtlich
ist, dass es sich um deinen Seed handelt; das Einbinden der Wörter in einen
Brief oder Notizen ist empfehlenswert.

### Auf Sicherheit achten

Über das Sichern deines @mnemonischen-Seeds (wodurch dein Zugriff auf dein
Konto im Falle eines totalen Datenverlusts gewährleistet ist) hinaus ist es
ebenso wichtig, auf Sicherheit zu achten. Nutze ein sicheres Passwort, wenn
du ein lokales Monero-Konto erstellst (eines, das du nicht auf
[MyMonero](https://mymonero.com) oder anderen webbasierten Kontosystemen
verwendest).

Gib niemals das Passwort deines Monero-Kontos an jemanden weiter: Dies kann
dazu verwendet werden, auf die Monero auf deinem Computer zuzugreifen, ohne
deinen @mnemonischen-Seed kennen zu müssen. Stelle gleichermaßen sicher,
dass du ein aktives und aktualisiertes Antivirenprogramm hast, insbesondere
auf Windows-Computern. Sei schlussendlich vorsichtig, wenn du auf Links in
E-Mails oder auf unbekannten und nicht vertraulichen Webseiten klickst; auf
deinem Computer installierte Malware kann auf dem Rechner verweilen und auf
deinen Zugriff auf dein Monero-Konto warten, bevor es Gelder davon
entwendet.

### Dein Konto einem nächsten Angehörigen überlassen

Nächsten Angehörigen den Zugriff auf dein Monero-Konto zu ermöglichen ist
genauso leicht, wie ebendieses zu sichern. Überlasse ihnen in deinem
Testament einfach deinen @mnemonischen-Seed oder lagere diesen an einem
sicheren Ort, von welchem aus er bei der Vollziehung deines Testaments
übergeben wird. Ein entscheidender Vorteil hierbei ist, dass deine
Angehörigen nicht monatelang darauf warten müssen, dass ihnen Dritte Gelder
ausgeben.
