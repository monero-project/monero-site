{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Den erweiterten Modus des Wallets überprüfen

Um einen benutzerdefinierten Remote-Node zu nutzen, muss sich dein Wallet im erweiterten Modus befinden. Weder der einfache Modus noch der einfache Modus (Bootstrap) unterstützen diese Funktion. 

Um zu überprüfen, ob sich dein Wallet im erweiterten Modus befindet, gehe zu `Einstellungen` > `Info` und sieh den `Wallet-Modus` ein.

Sollte dein Wallet noch nicht im erweiterten Modus sein, musst du zu diesem wechseln (siehe nächster Schritt).

Wenn dein Wallet bereits im erweiterten Modus ist, kannst du den nächsten Schritt überspringen.

![Wallet mode](/img/resources/user-guides/en/remote_node/wallet_mode_info.png){:width="600px"}

## In den erweiterten Modus wechseln

Wenn dein Wallet geöffnet ist, musst du es zunächst schließen. Gehe zu `Einstellungen` > `Wallet` > `Dieses Wallet schließen`.

![Close Wallet](/img/resources/user-guides/en/remote_node/close_open_wallet.png){:width="600px"}

Das Hauptmenü (`Willkommen bei Monero`-Maske) öffnet sich. Unten links klickst du zunächst auf den `Walletmodus ändern`-Button und wählst auf der nächsten Seite die Option `Erweiterter Modus` aus. Anschließend öffnest du deine Wallet-Datei erneut.

![Change Wallet Mode](/img/resources/user-guides/en/remote_node/change_wallet_mode.png){:width="600px"}

![Advanced Mode](/img/resources/user-guides/en/remote_node/advanced_mode.png){:width="600px"}

## Einen öffentlichen Remote-Node finden

Als Erstes musst du einen öffentlichen Remote-Node finden, zu dem du dich verbinden kannst. Einige gute Ressourcen zum Auffinden von Nodes sind auf der [moneroworld.com](https://moneroworld.com/#nodes)-Seite gelistet. Eine der einfachsten Methoden wäre es wohl, einen von Moneroworld betriebenen öffentlichen Remote-Node zu nutzen; dort gibt es aber auch ein Tool zum Aufspüren zufälliger Nodes.

## Das Wallet zwecks Verbindung zu einem benutzerdefinierten Remote-Node konfigurieren

Beim Öffnen deines Wallets erscheint ein Fenster mit der Option `Benutzerdefinierte Einstellungen verwenden`. Wenn du diese auswählst, wirst du über `Einstellungen` zu `Node` geleitet.

Wenn dieses Pop-up nicht erscheint, gehe direkt über `Einstellungen` zur `Node`-Seite.

![Configure Remote Node](png/remote_node/remote_node_config.png){:width="600px"}

Wähle auf dieser Seite `Remote-Node`.

Bei `Adresse` trägst du die Adresse des Remote-Nodes, zu welchem du dich verbinden möchtest, ein. Diese kann in etwa wie `node.moneroworld.com` oder jedwede IP-Adresse aussehen.

Bei `Port` trägst du den Port des Remote-Nodes ein. Wenn ein Node unter `node.moneroworld.com:18089` gelistet ist, ist die Adresse `node.moneroworld.com` und der Port ist `18089`. Der standardmäßig voreingestellte Port ist `18081`, er kann aber je nach gewähltem Node variieren. 

Sollte dein Remote-Node einer Authentifizierung bedürfen, kannst du einen Nutzernamen in `Benutzername des Hintergrunddienstes` und ein Passwort in `Passwort des Hintergrunddienstes` eingeben.
 
Abschließend klickst du auf den `Verbinden`-Button und wartest darauf, dass sich dein Wallet verbindet.