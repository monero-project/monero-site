{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Schritt 1: Monero beschaffen

Es gibt verschiedene Möglichkeiten, mit welchen du du Monero bekommen kannst. Du kannst Coins minen, sie gegen Güter oder Dienstleistungen eintauschen oder andere Kryptowährungen und Fiatgeld gegen XMR tauschen. Wenn du dich für Letzteres entscheidest, ist es wohl am praktischsten, dies an einer Börse zu machen.

Viele Börsen unterstützen Monero. Manche sind zentralisiert und haben in der Regel eine gute Liquidität und schnellen Service, benötigen von dir aber Angaben persönlicher Informationen, bevor der Handel stattfinden kann (KYC, zu deutsch: "Kenne deinen Kunden"). Einige Börsen sind dezentralisiert und benötigen keinerlei Identifikation, haben allerdings im Regelfall ein kleineres Volumen und können komplizierter zu nutzen sein. Es gibt außerdem Services, die es Personen erlauben, sich ohne Einbindung Dritter zur Abwicklung eines Handels zu treffen.

Eine unvollständige Liste von Börsen, die Monero unterstützen, findet sich auf unserer [Händlerseite]({{ site.baseurl }}/community/merchants/#exchanges).

## Schritt 2: Ein Paper-Wallet auf einem sicheren, mittels Airgap isolierten Computer herunterladen und erstellen

Lade einen Generator für @Paper-Wallets auf [moneroaddress.org](https://moneroaddress.org) herunter und kopiere ihn auf einen USB-Stick (direkter Link: [https://github.com/moneromooo-monero/monero-wallet-generator/archive/master.zip](https://github.com/moneromooo-monero/monero-wallet-generator/archive/master.zip)).

Entpacke den Paper-Wallet-Generator (monero-wallet-generator.html) und öffne ihn in einem Webbrowser auf einem mittels @Airgap isolierten Computer, der zuvor nicht verwendet worden ist oder auf welchem das Betriebssystem sauber neuinstalliert wurde.

Dein Paper-Wallet hat vier wichtige Dinge:

- Eine öffentliche Monero-@Adresse: Die öffentliche Adresse wird zum Empfangen von Geldern im @Wallet genutzt. Du gibst diese Adresse jedem, der Gelder auf dein Wallet senden wird.

- Moneros @mnemonischer-Seed: Der mnemonische Seed ist eine klar erkennbare Methode, mit welcher du dein Wallet sicherst. Mit diesem Seed hast du alles, was du brauchst, um dein Wallet zu einem späteren Zeitpunkt wiederherzustellen.

- Moneros @Spend-Key: Der private Spend-Key wird zum Senden von Geldern aus dem Wallet genutzt.

- Moneros @View-Key: Zum Anzeigen von auf dem Wallet eingehenden Transaktionen dient der private View-Key, welcher häufig zur Einrichtung eines View-Only-Wallets genutzt wird. Dieses kann eingehende Transaktionen live auf der Blockchain, während diese an ein Spar-Wallet ("Cold-Wallet") gesendet werden, einsehen.

An dieser Stelle hast du einige Möglichkeiten: Du kannst das Wallet auf Papier ausdrucken, es als PDF oder im Textdateiformat auf einem USB-Stick sichern, es auf eine CD oder DVD brennen etc. Sehr wahrscheinlich wirst du mindestens zwei oder drei Ausfertigungen an verschiedenen Orten aufbewahren wollen. Solltest du es in digitaler Form sichern, verschlüssele alles mit einem starken Passwort. Wenn du dein Wallet in Papierform aufbewahrst, zeige es niemandem, der sich die 25 Wörter - also deinen Seed - merken oder ohne dein Einverständnis ein Foto davon machen könnte. Jemandem ein Foto deines Wallets zu schicken ist das Gleiche, als würdest du dein gesamtes Guthaben verschenken.

Egal, welche Methode du wählst: Stelle sicher, dass keine Kopie deines Monero-Wallets auf dem von dir genutzten Gerät verbleibt. Eventuell musst du das Wallet sicher löschen, solltest du es auf einer Festplatte oder einem anderen Speichermedium gespeichert haben; auch solltest du sichergehen, dass dein Drucker keine Kopie in seinem Speicher sichert.

*Wenn du den Zugriff auf dein Monero-Paper-Wallet verlierst, werden die in ihm liegenden Monero niemals wieder dir oder irgendjemandem sonst zur Verfügung stehen.*

#### Randbemerkung

Möglichkeit zur Verschlüsselung eines mnemonischen Seeds von Monero: https://xmr.llcoins.net/
Lade die HTML-Seite und lege es auf deinen mittels Airgap isolierten Rechner. Überprüfe den Teil "Encrypt/Decrypt Mnemonic Seed" und stelle sicher, dass du "CN Add" mit einem geeigneten Passwort nutzt. Dank an manicminer5.

## Schritt 3: Sende deine Monero an dein Paper-Wallet

Jetzt, da du all das hast, was du brauchst, bist du bereit, deine XMR an dein Paper-Wallet zu senden. Schicke die Coins einfach an die von dir zuvor notierte Wallet-Adresse. Stelle sicher, dass die Adresse richtig ist - selbst, wenn du sie kopiert und eingefügt hast! Vergiss nicht, dass es keinen Weg zurück gibt, wenn du die Coins versehentlich an eine falsche Adresse schickst!

#### Anmerkungen und die Verifizierung von Guthaben

Weil Moneros Blockchain privat und nicht nachverfolgbar ist, wirst du nicht in der Lage sein, deine öffentliche Monero-Adresse darin ausfindig zu machen und zu bestätigen, dass etwaige Gelder eingegangen sind, so wie es dir bei Bitcoin möglich ist. Das ist zwar gut für deine Privatsphäre, aber schlecht für den Bedienkomfort.

Damit du deine empfangenen Gelder sicher verifizieren kannst, musst du ein View-Only-Wallet einrichten. Hier kommt der View-Key ins Spiel. Im Eintrag über [View-Only-Wallets]({{site.baseurl}}/resources/user-guides/view_only.html) finden sich mehr Informationen zu ihrer Erstellung.

Um diejenigen Gelder zu überprüfen, welche sich *noch immer in* deinem Wallet befinden und nicht ausgegeben wurden, musst du mit deinem mnemonischen Seed (mit deinem gesamten Guthaben) auf deinem Airgap-Computer (mit aktueller Kopie der Monero-Blockchain) ein Spar-Wallet erstellen. Wenn du fertig bist, musst du dieses Wallet sicher entfernen. Du kannst es stattdessen aber auch mit dem Internet verbinden und so zu einem Zahlungs-Wallet ("Hot-Wallet") werden lassen.