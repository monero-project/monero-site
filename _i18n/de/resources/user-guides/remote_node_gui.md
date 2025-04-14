{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Den erweiterten Modus des Wallets überprüfen

Um einen benutzerdefinierten Remote-Node zu nutzen, muss sich dein Wallet im
erweiterten Modus befinden. Weder der einfache Modus noch der einfache Modus
(Bootstrap) unterstützen diese Funktion.

Um zu überprüfen, ob sich dein Wallet im erweiterten Modus befindet, gehe zu `Einstellungen` > `Info` und sieh den `Wallet-Modus` ein.

Sollte dein Wallet noch nicht im erweiterten Modus sein, musst du zu diesem
wechseln (siehe nächster Schritt).

Wenn dein Wallet bereits im erweiterten Modus ist, kannst du den nächsten
Schritt überspringen.

![Wallet
mode](/img/resources/user-guides/en/remote_node/wallet_mode_info.avif){:width="600px"}

## In den erweiterten Modus wechseln

Wenn dein Wallet geöffnet ist, musst du es zunächst schließen. Gehe zu `Einstellungen` > `Wallet` > `Dieses Wallet schließen`.

![Close
Wallet](/img/resources/user-guides/en/remote_node/close_open_wallet.avif){:width="600px"}

Das Hauptmenü (`Willkommen bei Monero`-Maske) öffnet sich. Unten links
klickst du zunächst auf den `Walletmodus ändern`-Button und wählst auf der
nächsten Seite die Option `Erweiterter Modus` aus. Anschließend öffnest du
deine Wallet-Datei erneut.

![Change Wallet
Mode](/img/resources/user-guides/en/remote_node/change_wallet_mode.avif){:width="600px"}

![Advanced
Mode](/img/resources/user-guides/en/remote_node/advanced_mode.avif){:width="600px"}

## Finding a remote node

First, you will need to find a node to connect to.

It is important to note that there are publicly advertised remote nodes
which are run by malicious actors with the sole purpose of deanonymizing
users/outputs by, for example: - Linking @clearnet IP addresses to txid's.
- Providing bogus decoys to determine which output is the real spend.  - For
more information see [YouTube - Breaking Monero Episode 07: Remote
Nodes](https://www.youtube.com/watch?v=n6Bxp0k7Uqg)

It is highly recommended that you either A) Run your own node, or B) Use a
Trusted remote node - one that is controlled by someone that you trust.

Though highly discouraged, you may opt to use an untrusted remote node. To
maximize privacy, Tor or I2P nodes are preferred. The website
[monero.fail](https://monero.fail) has a list of such nodes.

## Configuring your wallet to connect to a custom remote node

Beim Öffnen deines Wallets erscheint ein Fenster mit der Option `Benutzerdefinierte Einstellungen verwenden`. Wenn du diese auswählst, wirst du über `Einstellungen` zu `Node` geleitet. 

Wenn dieses Pop-up nicht erscheint, gehe direkt über `Einstellungen` zur `Node`-Seite.

![Configure Remote
Node](/img/resources/user-guides/en/remote_node/remote_node_config.avif){:width="600px"}

On the following page, select `Remote Node`.

In the `Address` field you will enter the address (or IP) of the node that
you want to connect to, and in `Port` field you will enter the port of the
node.

Example: If a node is listed as `node.getmonero.org:18089`, the address is
`node.getmonero.org` and the port is `18089`. Note:
`node.getmonero.org:18089` is for illustration purposes only. It is not a
real node address.

![Configure Remote Node
2](/img/resources/user-guides/en/remote_node/remote_node_config-2.avif){:width="600px"}

If the node requires authentication, you can enter the username in `Daemon
username` and the password in `Daemon password`.

Finally, click on the `Connect` button and wait for your wallet to connect.
