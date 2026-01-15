{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Sjekk om lommeboken din er i avansert modus

For å bruke en tilpasset ekstern node, må lommeboken din være i avansert
modus. Enkel modus og Enkel modus (oppstartmodus) støtter ikke denne
funksjonen.

For å sjekke om lommeboken din er i avansert modus, kan du gå til `Innstillinger` > `Informasjon` og se `Lommebokmodus`.

Hvis lommeboken din ikke er i avansert modus, må du endre den til avansert
modus (se neste steg).

Hvis lommeboken din allerede er i avansert modus, kan du hoppe over neste
steg.

![Wallet
mode](/img/resources/user-guides/en/remote_node/wallet_mode_info.avif){:width="600px"}

## Endre lommeboken din til avansert modus

Hvis lommeboken din er åpen, må du først lukke den. Gå til `Innstillinger` > `Lommebok` > `Lukk denne lommeboken`

![Close
Wallet](/img/resources/user-guides/en/remote_node/close_open_wallet.avif){:width="600px"}

Hovedmenyen (`Velkommen til Monero`-skjermen) vil åpnes. Nederst til venstre
kan du trykke på `Endre lommebokmodus`-knappen, og på neste side velge
`Avansert modus`. Etter det åpner du lommebokfilen din igjen.

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

Når du åpner lommeboken din, dukker en popup opp med alternativet `Bruk tilpassede innstillinger`. Trykk på den, så blir du videresendt til siden `Innstilliger` > `Node`.

Hvis du ikke ser denne popupen, kan du gå til siden `Innstillinger` > `Node`.

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
