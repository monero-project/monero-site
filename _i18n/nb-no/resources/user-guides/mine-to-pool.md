{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Wallet

Før du begynner, må du allerede ha en konfigurert lommebok som
virker. Monero-poolen må vite lommebokadressen din for å kunne sende
betalinger dit. Se [Å ta imot Monero-guiden]({{
site.baseurl}}/get-started/accepting) for mer informasjon.

## Profitability

Før du utvinner, bør du avgjøre om det er verdt det eller ikke for deg. Du
må avgjøre dette på egenhånd, på grunnlag strømkostnadene og maskinvaren du
har. Det finnes mange nettsteder, som
f.eks. [CryptoCompare](https://www.cryptocompare.com/mining/calculator/xmr),
som lar deg legge inn hastigheten og strømforbruket på utvinneren din, og
den viser seg også forventet profitt (eller tap) per uke/måned.

## Download Miner

Det første steget er å laste ned utvinningsprogramvaren til PC-en din.

### Windows

XMRig-utvikleren gir forhåndsbyggede binærfiler for Windows-brukere. De er
tilgjengelige på [GitHub
release-siden](https://github.com/xmrig/xmrig/releases/latest).

Bla ned til du ser `xmrig-VERSION-msvc-win64.zip`. Last ned denne filen og
pakk ut arkivene til et sted du husker, som f.eks. skrivebordet ditt.

### Ubuntu Linux

The XMRig developer provides pre-built binaries for Ubuntu Bionic (18.04)
and Focal (20.04). They may work on other Ubuntu versions, and on other
distributions, but this is not guaranteed.

Disse binærfilene er tilgjengelig på [GitHub
release-siden](https://github.com/xmrig/xmrig/releases/latest).

Scroll down to 'Assets' until you see the correct version for your
system. Download this file, extract the archive somewhere memorable, like
your desktop.

### Other distributions and operative systems

Binaries are available for multiple distributions and operative systems, but
you can also build the miner by yourself. Take a loot at [XMrig's
docs](https://xmrig.com/docs/miner)

## Selecting a pool

Det er mange pools å velge blant. Du kan finne en liste på
[miningpoolstats.stream/monero](https://miningpoolstats.stream/monero).

Å velge en større pool betyr at du vil se hyppigere (men mindre)
utbetalinger, men å velge en mindre pool holder nettverket
desentralisert. [Utvinnere vil ikke miste inntekt ved å utvinne på en mindre
pool](https://redd.it/g6uh2l).

## Configuring the miner

See the [official docs](https://xmrig.com/docs/miner/config), for
instructions and suggestions.

## Starting the miner

Windows-brukere kan dobbeltklikke på xmrig.exe. Brukere til andre
operativsystemer bør bruke `cd`-kommandoen til de ender opp i mappen som
inneholder XMRig, og deretter taste inn `./xmrig` etterfulgt av enter.

Hvis du ser grønne meldinger som sier at andelene har blitt godkjent –
gratulerer, alt funker!

## Troubleshooting

### Anti-virus keeps removing XMRig

Noen antivirus flagger XMRig som skadevare fordi den ofte utplasseres i
PC-en for å infisere PC-en din til å utvinne uten eierens samtykke. I og med
at dette er din PC og du konfigurerer utvinneren til å utvinne for deg, er
det trygt å legge XMRig til antivirus-tillatelseslisten din.

### Cannot read/set MSR

På noen CPU-er prøver XMRig å øke ytelsen ved å deaktivere visse funksjoner
som forhåndshenting av instruksjonene til CPU-en din. Disse operasjonene
krever root/administrator, så prøv å høyreklikke på xmrig.exe og kjøre den
som administrator eller kjøre `sudo ./xmrig` på andre systemer.

### Algo not known

Finn linjen i config.json som sier `algo: null` og endre den til `algo:
"rx/0"`. XMRig forventer som standard at poolen forteller den hvilken
hashing-algoritme som skal benyttes.

### Huge Pages 0%

#### Allowing large pages on Windows

Tatt fra
[MSDN](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/enable-the-lock-pages-in-memory-option-windows?view=sql-server-ver15):

1. Gå til Start-menyen og trykk «Kjør». Tast inn `gpedit.msc` i den åpne
   boksen.
2. I redigeringskonsollen for lokale grupperetningslinjer, må du utvide
   datakonfigurasjonen og deretter utvide Windows-instillingene.
3. Utvid sikkerhetsinnstillingene og utvid deretter lokale retningslinjer.
4. Velg den tildelte mappen for brukerrettigheter.
5. Retningslinjene vil vises i detaljruta.
6. I ruten dobbeltklikker du på «Lock pages in Memory» (Lås sider i minnet).
7. In the Local Security Setting – Lock pages in memory dialog box, click
   Add User or Group.
8. Legg til en konto under «Velg brukere»-, «Tjenestekontoer»- eller
   «Gruppedialog»-boksen som du vil kjøre utvinneren på.
9. Start på nytt for at endringene skal tre i kraft.

Du må også kanskje starte utvinneren som administrator.

#### Allowing large pages on Linux

Til å begynne med, kan du stoppe utvinneren (hvis den er i gang), kjøre
følgende kommandoer for å muliggjøre store sider, og deretter starte
utvinneren som root:

	sudo sysctl -w vm.nr_hugepages=1168
	sudo ./xmrig

Du må kanskje øke til 1168, avhengig av hvor mange NUMA-noder CPU-en(e) din
har.

#### Allowing large pages on macOS

Store sider støttes ikke på macOS.

### Balance Not Increasing

Most pools are <abbr title="Pay Per Last N Shares">PPLNS</abbr> pools,
which means that you only get paid when a miner on the pool finds a
block. If the pool you are mining on is small, this can take a few
days to weeks.

Eventuelle blokker som blir funnet må i tillegg modnes før de kan
utbetales. Dette tar 60 blokker (omlag to timer).

## Getting Help

An active Monero mining community on Reddit is
[/r/MoneroSupport](https://www.reddit.com/r/MoneroSupport/). You can also
join [#monero-pools on
Libera](https://web.libera.chat/?channel=#monero-pools) or Matrix
(#monero-pools:monero.social).

## Going Futher

* Vurder å bruke en underadresse kun for utvinning for å hindre at adressen
  din blir lenket til forskjellige tjenester.
* [Vurder å bruke Tor til å koble til
  poolen](https://xmrig.com/docs/miner/tor) (eller til en skjult
  tjenestepool som HashVault, RespectXMR og MoneroOcean). Dette skjuler
  utvinningaktiviten fra ISP-en din og hindrer at poolen får kjennskap til
  hvem du er.
