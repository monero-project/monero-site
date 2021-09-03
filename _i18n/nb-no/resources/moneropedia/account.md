---
summary: 'similar in function to a bank account, contains all of your sent and received transactions'
terms: ["account", "accounts", "wallet", "wallets"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

De som kjenner til Moneros forgjengere, vil være bedre kjent med begrepet
*lommebok* i denne beskrivelsen. I Monero kaller vi dette for en konto, og
det er en privat konto, eid og styrt av en Monero-bruker.

Kontoen din inneholder alle Monero-@transaksjonene du har sendt og
mottatt. Kontosaldoen din er summen av alle Moneroene du har mottatt,
fratrukket Moneroene du har mottatt. Når du bruker Monero, legger du kanskje
merke til at kontoen din har to saldoer – en låst og en ulåst saldo. Den
ulåste saldoen inneholder midler som kan brukes umiddelbart, og den låste
saldoen inneholder midler som ikke kan brukes med én gang. Kanskje du motta
en transaksjon som har en forhåndsinnstilt @opplåsningstid, eller kanskje du
har sendt noen Monero og venter på at @vekslepengene kommer tilbake til
lommeboken din. Begge er situasjoner som kan føre til at midler låses i en
viss periode.

Hovedforskjellen mellom tradisjonell elektronisk valuta og Monero er at det
bare er du som har kontroll over kontoen din, vanligvis via PC-en, og at
ingen andre kan få tilgang til den dersom du [tar gode
forholdsregler](#practicing-good-security).

### Flere kontoer

Det er ingen kostnader forbundet med å opprette en Monero-konto, og du vil
ikke belastes noen gebyrer, bortsett fra individuelle @transaksjonsgebyrer
som går til @utvinnere.

Dette betyr at man enkelt kan opprette en Monero-konto for seg selv, i
tillegg til en felleskonto som kan deles med en partner og individuelle
kontoer for barna deres. På tilsvarende måte kan et foretak opprette
separate kontoer for hver avdeling eller gruppe. Siden Moneros
@transaksjonskostnader er svært lave, er det rimelig å forflytte midler
mellom kontoer.

### Kryptografiske nøkler

Monero avhenger i stor grad av et kryptografisk prinsipp kalt *kryptografi
med offentlig/privat nøkkel* eller *asymmetrisk kryptografi*, som er grundig
forklart i [denne
Wikipedia-artikkelen](https://en.wikipedia.org/wiki/Public-key_cryptography).

Kontoen din er basert på to nøkler – en @forbruksnøkkel og en
@visningsnøkkel. @Forbruksnøkkelen er spesiell i og med at det er den eneste
nøkkelen som trengs for å bruke Monero-midlene dine, mens @visningsnøkkelen
lar deg avsløre alle @transaksjonene dine til en tredjepart, for eksempel
for revisjons- eller bokføringsøyemed. Disse nøklene i kontoen din spiller
også en viktig rolle i Moneros @transaksjonspersonvern.

De private nøklene for begge disse må beskyttes av deg for å opprettholde
personvernet til kontoen din. De offentlige nøklene, derimot, er åpenbart
offentlige (de utgjør en del av Monero-kontoadressen din). I normal
kryptografi med offentlige/private nøkler, kan noen sende deg en privat
melding ved å kryptere den med en av dine offentlige nøkler, og da ville du
ha vært den eneste som kunne ha avkodet den med dine private nøkler.

### Sikkerhetskopiering av kontoen din

Når du administrerer din egen Monero-konto med den private
@forbruksnøkkelen, er du eneansvarlig for sikkerheten til midlene
dine. Monero gjør det heldigvis veldig lett å sikkerhetskopiere kontoen
din. Når du oppretter en Monero-konto for første gang, vil du gis et unikt
@mnemonisk frø tilknyttet kontoen din som består av 13 eller 25 ord i det
språket du foretrekker. **Dette frøet er det eneste du trenger for å
sikkerhetskopiere kontoen din**, og derfor er det avgjørende at det skrives
ned og lagres på et trygt sted. Aldri lagre dette frøet på en måte eller på
et sted som gjør at andre kan se det!

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

Som eksempelet over indikerer, er det svært viktig å lagre disse ordene på
trygge beliggenheter. Hvis du er bekymret over risikoen for tap i hjemmet
for eksempel, ønsker du kanskje å lagre en ekstra kopi av frøet ditt hos
advokaten din eller i en bankboks. Det anbefales også at det lagres på en
måte som ikke gjør det åpenbart at det er ditt frø, så det tilrådes å skrive
det ned i et brev eller blant andre notater.

### Å ta gode forholdsregler

Utover å sikkerhetskopiere det @mnemoniske frøet ditt slik at du har tilgang
til kontoen din hvis det skulle oppstå et kritisk datatap, er det også mulig
å ta gode forholdsregler. Bruk et sikkert passord når du oppretter en lokal
Monero-konto (som ikke er brukt på [MyMonero](https://mymonero.com) eller
andre nettbaserte kontosystemer).

Aldri gi passordet til Monero-kontoen din til noen, i og med at dette kan
brukes til å få tilgang til Moneroene på PC-en din uten å trenge å vite det
@mnemoniske frøet ditt. Tilsvarende bør du sørge for at du har et oppdatert
og aktivt antivirusprogram, spesielt på Windows-PC-er. Avslutningsvis bør du
være forsiktig når du trykker på lenker i e-poster eller på ukjente eller
upålitelige nettsider, i og med at skadevare som er installerert på PC-en
din kan sitte og vente på at du går inn i Monero-kontoen din før de tømmer
midlene.

### Å la kontoen tilfalle dine nærmeste pårørende

Å la Monero-kontoen din tilfalle dine nærmeste er like lett som å
sikkerhetskopiere Monero-kontoen din. Bare legg det @mnemoniske frøet til
dem i testamentet ditt eller lagre det på et trygt sted slik at det vil gis
til dem under fullbyrdelsen av testamentet ditt. En stor fordel ved dette er
at dine nærmeste pårørende ikke må vente i månedsvis på at en tredjepart
frigjør midlene til dem.
