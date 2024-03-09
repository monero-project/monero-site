---
summary: "L'Internet sur lequel les surcouches réseaux anonymes sont construites"
terms: ["Clearnet", "réseau-en-clair"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Les Bases

Lorsque vous utilisez Internet pour des choses comme lire des actualités,
e-mail, média sociaux, et même Monero, vous utilisez certainement une
connexion réseau *en clair*. Cela signifie que *toutes* vos connexions
peuvent être suivies, tracées et observées par :

- your [ISP](https://en.wikipedia.org/wiki/ISP)

- the website/service/person you're communicating with

- possibly a [Five Eyes](https://en.wikipedia.org/wiki/5_Eyes) capable
  entity

et même si vous utilisez
[HTTPS](https://fr.wikipedia.org/wiki/HyperText_Transfer_Protocol_Secure) ou
équivalent (qui *chiffre* votre transmission), votre passage n'est pas
masqué ni anonyme, et donc est *en clair*.

### Informations détaillées

Comme un [VPN](https://fr.wikipedia.org/wiki/R%C3%A9seau_priv%C3%A9_virtuel)
traditionnel ne peut pas vous épargner du réseau en clair (comme vous
utilisez toujours le réseau en clair (bien que vous soyez mieux mandaté que
sans un VPN)), vous devriez utiliser une *surcouche réseau anonyme* pour
éviter d'utiliser le réseau en clair directement :

- Java-I2P

- [Tor](https://torproject.org/)

Ces technologies vous protègent du réseau en clair en construisant un réseau
anonyme **par dessus** le réseau en clair pour garder vos transmissions à la
fois chiffrées **et** anonymes.

Voici un [diagramme interactif](https://www.eff.org/pages/tor-and-https)
précis fournit par l'[EFF](https://www.eff.org/) qui décrit comment **Tor**
se relie au *réseau en clair*. Le principe est également applicable (en
partie) à @Kovri et I2P en termes d'anonymat, à l'exception des points
suivants votre trafic ne quite jamais le réseau I2P
