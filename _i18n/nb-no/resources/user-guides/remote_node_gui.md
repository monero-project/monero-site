{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Sjekk om lommeboken din er i avansert modus

For å bruke en tilpasset ekstern node, må lommeboken din være i avansert modus. Enkel modus og Enkel modus (oppstartmodus) støtter ikke denne funksjonen.

For å sjekke om lommeboken din er i avansert modus, kan du gå til `Innstillinger` > `Informasjon` og se `Lommebokmodus`. 

Hvis lommeboken din ikke er i avansert modus, må du endre den til avansert modus (se neste steg).

Hvis lommeboken din allerede er i avansert modus, kan du hoppe over neste steg.

![Wallet mode](/img/resources/user-guides/en/remote_node/wallet_mode_info.png){:width="600px"}

## Endre lommeboken din til avansert modus

Hvis lommeboken din er åpen, må du først lukke den. Gå til `Innstillinger` > `Lommebok` > `Lukk denne lommeboken`

![Close Wallet](/img/resources/user-guides/en/remote_node/close_open_wallet.png){:width="600px"}

Hovedmenyen (`Velkommen til Monero`-skjermen) vil åpnes. Nederst til venstre kan du trykke på `Endre lommebokmodus`-knappen, og på neste side velge `Avansert modus`. Etter det åpner du lommebokfilen din igjen.

![Change Wallet Mode](/img/resources/user-guides/en/remote_node/change_wallet_mode.png){:width="600px"}

![Advanced Mode](/img/resources/user-guides/en/remote_node/advanced_mode.png){:width="600px"}

## Å finne en offentlig, ekstern node

Først må du finne en offentlig, ekstern node å koble til. Nettsiden [moneroworld.com](https://moneroworld.com/#nodes) har noen flotte ressurser for å finne noder. Én av de letteste metodene er å bruke offentlige noder som kjøres av moneroworld, men de har også et verktøy for å finne tilfeldige noder.

## Å konfigurere lommeboken din til å koble til en tilpasset, offentlig ekstern node

Når du åpner lommeboken din, dukker en popup opp med alternativet `Bruk tilpassede innstillinger`. Trykk på den, så blir du videresendt til siden `Innstilliger` > `Node`. 

Hvis du ikke ser denne popupen, kan du gå til siden `Innstillinger` > `Node`.

![Configure Remote Node](/img/resources/user-guides/en/remote_node/remote_node_config.png){:width="600px"}

På denne siden velger du `Ekstern node`.

Under `Adresse` bør du fylle inn adressen til den eksterne noden som du vil koble til. Denne adressen ser kanskje ut som `node.moneroworld.com` eller så ser den ut som en hvilken som helst IP-adresse. 

Under `Port` bør du fylle inn porten til den eksterne noden. Hvis en ekstern node er oppført som `node.moneroworld.com:18089`, er adressen `node.moneroworld.com` og porten er `18089`. Standardporten er `18081`, men den kan variere avhengig av noden du er koblet til.

Hvis din eksterne node krever autentisering, kan du legge inn et brukernavn i `Daemon-brukernavn` og et passord i `Daemon-passord`.

Avslutningsvis kan du trykke på `Koble til`-knappen og vente på at lommeboken din kobler seg til.
