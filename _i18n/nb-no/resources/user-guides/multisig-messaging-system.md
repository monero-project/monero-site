{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Innholdsfortegnelse
- [Innholdsfortegnelse](#innholdsfortegnelse)
- [Introduksjon](#introduksjon)
- [Monero Multisig i et nøtteskall](#monero-multisig-i-et-nøtteskall)
- [Arkitekturen til MMS](#arkitekturen-til-mms)
- [Brukeropplevelsen til MMS](#brukeropplevelsen-til-mms)
  - [Et meldingssystem](#et-meldingssystem)
  - [Signerere og meldinger](#signerere-og-meldinger)
- [Å få tak i MMS](#å-få-tak-i-mms)
- [Installasjon og konfigurering av PyBitmessage](#installasjon-og-konfigurering-av-pybitmessage)
- [Ytterligere PyBitmessage-justeringer](#ytterligere-pybitmessage-justeringer)
- [MMS-kommandooversikt](#mms-kommandooversikt)
- [Konfigurering av lommebok for bruk med MMS](#konfigurering-av-lommebok-for-bruk-med-mms)
  - [Adresser og merkelapper](#adresser-og-merkelapper)
  - [Å kjøre CLI-lommeboken](#å-kjøre-cli-lommeboken)
  - [Initialisering av MMS](#initialisering-av-mms)
  - [Konfigurering av signerere](#konfigurering-av-signerere)
  - [Manuell konfigurering av signerere](#manuell-konfigurering-av-signerere)
  - [Auto-Config](#auto-config)
  - [Sending av signererkonfigurasjon](#sending-av-signererkonfigurasjon)
- [Etablering av Multisig-adresse](#etablering-av-multisig-adresse)
- [Finansiering av Multisig-lommeboken](#finansiering-av-multisig-lommeboken)
- [Synkronisering av lommebøker](#synkronisering-av-lommebøker)
- [Å foreta Multisig-transaksjoner](#å-foreta-multisig-transaksjoner)
- [Kommandoene i detalj](#kommandoene-i-detalj)
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
- [Sikkerhet](#sikkerhet)
  - [Bruk av kryptering og signaturer](#bruk-av-kryptering-og-signaturer)
  - [Kommunikasjon mellom MMS og PyBitmessage](#kommunikasjon-mellom-mms-og-pybitmessage)
  - [Etterligning](#etterligning)
  - [Angrepskontrollerte data](#angrepskontrollerte-data)
- [Feilsøking](#feilsøking)
  - [Å løse synkroniseringsproblemer](#å-løse-synkroniseringsproblemer)
  - [Omdirigering av en transaksjon til en annen signerer](#omdirigering-av-en-transaksjon-til-en-annen-signerer)
  - [Ignorering av usamarbeidsvillige signerere under synkronisering](#ignorering-av-usamarbeidsvillige-signerere-under-synkronisering)
  - [Gjenoppretting av tapte eller dupliserte meldinger](#gjenoppretting-av-tapte-eller-dupliserte-meldinger)
  - [Korrigering/oppdatering av signererinformasjon](#korrigering--oppdatering-av-signererinformasjon)
  - [Å starte fra bunn](#å-starte-fra-bunn)
  - [Interaksjoner med MMS/PyBitmessage](#interaksjoner-med-mms--pybitmessage)

## Introduksjon

Denne veiledningen beskriver *Multisig Messaging System* (Multisig-meldingssytemet), herved forkortet som *MMS*. Det er et system som har som mål å **forenkle multisig-transaksjoner** for Monero og tilsvarende CryptoNote-baserte kryptovalutaer ved å gjøre det lettere å utveksle informasjon som nøkkelsett, synkronisere data mellom lommebøker og å tilby «arbeidsflytsupport» som veileder deg gjennom de ulike stegene.

MMS-en presenterer seg for brukeren som et sett med mye kommandoer i CLI-lommeboken. Dette er ikke overraskende, i og med at CLI-lommeboken for tiden uansett er den eneste måten å foreta multisig-transaksjoner på. Dette vil forhåpentligvis utvides i fremtiden; MMS-en ble designet med andre lommebøker i tankene, som f.eks. Monero GUI-lommeboken.

Denne veiledningen har noen veiledningsaktige aspekter og er ment for å leses i rekkefølge. Det er best å ikke hoppe over noen kapitler før kapittelet *Kommandoene i detalj*.

Hvis du har høye krav angående sikkerhet og ikke er sikker på hvorvidt å bruke MMS i det hele tatt er aktuelt for deg, bør du først lese kapittelet *Sikkerhet*.

Denne første versjonen av manualen ble skrevet i slutten 2018 av René Brunner (*rbrunner7*), som er den opprinnelige forfatteren bak MMS.

## Monero Multisig i et nøtteskall

Det vil sannsynligvis være vanskelig å forstå MMS-en uten en grunnleggende forståelse av hvordan Monero multisig-transaksjoner fungerer i praksis. Her er en kort oversikt med informasjon om *terminologien* som denne manualen bruker. For mer detaljer og flere *tekniske* forklaringer, må du kikke et annet sted.

*Multisig* innebærer at en transaksjon trenger flere signaturer før den kan sendes til Monero-nettverket og iverksettes. I stedet for én Monero-lommebok som oppretter, signerer og sender transaksjoner, trenger du en gruppe lommebøker og samarbeid dem i mellom for å foreta transaksjoner.

I denne veiledningen kalles de lommebøkene – eller eventuelt personene som kontrollerer dem – for *autoriserte signerere*. Avhengig av hvilken multisig som brukes, må ikke **alle** autoriserte signerere signere før en transaksjon blir gyldig, men kun en delmengde av dem. Det korresponderende tallet (som er lik eller mindre enn antallet autoriserte signerere) kalles for *nødvendige signerere*.

Den vanlige betegnelsen som brukes her er *M/N*, der *M* står for antallet nødvendige signerere og *N* står for det totale antallet autoriserte signerere. Den mest nyttige og populære multisig-typen er for eksempel skrevet som *2/3*: Av totalt **tre** autoriserte signerere, trengs for eksempel kun **to** for å foreta en transaksjon.

For teknisk «enkle» mynter som bitcoin og deres forker, består multisig-transaksjoner av følgende trinn:

* Konfigurasjon av multisig-lommebøkene og etablering av multisig-adressen
* Finansiere multisig-lommebøkene/-adressene slik at det er noe å bruke til å begynne med
* Foreta så mange multisig-transaksjoner man vil

Monero legger også til enda et steg som er nødvendig for intern «bokføring». Enkelt forklart er alle mekanismene som gjør Monero-transaksjonene private komplisert av natur og fører til et behov for å utveksle informasjon mellom lommebøker slik at man kan behandle transaksjoner på en riktig måte – både innkommende og utgående.

MMS-en bruker uttrykket *synkronisering* for prosessen som gjør lommebøkene klare til å foreta transaksjoner igjen etter å ha sendt eller mottatt transaksjoner, og *multisig synkroniseringsdata* eller bare «*sync data*» for informasjonen som må utveksles for å oppnå dette.

Så stegene for Monero multisig ser slik ut:

* Konfigurasjon av multisig-lommebøkene og etablering av multisig-adressen
* Finansiere multisig-lommebøkene/-adressene slik at det er noe å bruke til å begynne med
* Synkronisere lommebøkene for første gang
* Foreta én multisig-transaksjon
* Synkronisere lommebøkene på nytt
* Foreta enda en multisig-transaksjon og/eller motta flere midler
* Synkronisere lommebøkene igjen
* ...

«Verdien» av MMS-en gjør det lett og smertefritt å utveksle alle disse datapakkene mellom lommebøkene og å fortelle signererne ved hvilket stadium av «arbeidsflyten» de for tiden er på og hva som er det neste steget for å fortsette.

## MMS-ens arkitektur

MMS-en består i hovedsak av tre deler:

* Et sett med nye kommandoer i CLI-lommeboken
* En lastet instans av PyBitmessage som kan nås fra PC-en som kjører CLI-lommeboken, og som gjør transport av meldinger på vegne av lommeboken.
* Interne kodeutvidelser til lommebokkoden som håndterer en ny `.mms`-fil per lommebok med meldinger i den og som er koblet til med PyBitmessage

[PyBitmessage](https://bitmessage.org/wiki/Main_Page) er for øyeblikket det eneste støttede programmet for meldingstransport, da MMS-en ikke «snakker» til andre systemer. Du kan ikke bruke e-post eller noen av de mange andre tilgjengelige kommunikasjonsprogrammene der ute. Hvis du ikke liker PyBitmessage eller av en eller annen grunn ikke kan kjøre den, vil du ikke kunne bruke den gjeldende versjonen av MMS-en.

Forfatteren av MMS-en håper at du vil gi den et forsøk: PyBitmessage har åpen kildekode, er under kontinuerlig utvikling, har nok brukere til å nesten enhver tid sikre transport av meldinger, og tar personvern svært seriøst – akkurat som Monero.

En fremtidig MMS vil forhåpentligvis bli bygget på [Kovri](https://kovri.io/), Moneros «opprinnelige», private kommunikasjonssystem, men det gjenstår sannsynligvis fremdeles litt tid før en Kovri-utgivelse er klar for omfattende bruk.

MMS-kommunikasjon bør være **trygt**: Bitmessage-systemet er betraktet som trygt, i og med at det ikke er synlig hvem som sender en melding til hvem, og all trafikk er kryptert. For ytterligere sikkerhet, krypterer MMS-en også alt meldingsinnhold: Ingen bortsett fra mottakeren av en MMS-melding kan avkode og bruke innholdet, og meldingene er signerte, noe som betyr at mottakeren kan være sikker på at det har kommet fra riktig sender.

## Brukeropplevelsen til MMS

For å se «brukeropplevelsen» til multisig i CLI-lommeboken **uten** MMS, kan du f.eks. se [her](https://taiga.getmonero.org/project/rbrunner7-really-simple-multisig-transactions/wiki/22-multisig-in-cli-wallet) go [her](https://taiga.getmonero.org/project/rbrunner7-really-simple-multisig-transactions/wiki/23-multisig-in-cli-wallet).

Disse sidene er også nyttige for å gjøre deg kjent med stegene for multisig-transaksjoner generelt, i og med at MMS-en ikke endrer rekkefølgen på stegene eller gjør dem overflødige, men gjør utførelsen betraktelig lettere. MMS-ene vil i de fleste tilfeller dessuten automatisk kunne fortelle deg det neste steget.

### Et meldingssystem

Den generelle tilnærmingen til MMS-en er veldig **lik e-poster**: Du kan sende rundt meldinger med MMS-kommandoen som er stilt inn i CLI-lommeboken som spiller en rolle i e-postklienten din, noe som lar deg sende meldinger, motta meldinger og administrere en liste med lagrede meldinger som en slags kombinert innboks og utboks.

Innholdet i disse meldingene er selvfølgelig alle de tingene som må transporteres mellom lommebøkene til signererne: nøkkelsett, synkroniseringsdata for lommebøkene og transaksjoner som skal signeres og/eller sendes til nettverket.

PyBitmessage brukes for transporteringen av meldingen og spiller derfor en viktig rolle i e-posttjeneren din. Når konfigureringen er ferdig, går det å sende og motta meldinger helt automatisk (altså ingen manuell inngripen er nødvendig).

Du bruker ikke e-postadresser, men Monero-adresser for å fortelle hvor meldingene bær gå til, og du trenger kun å sende meldinger til andre autoriserte signerere. Med 2/3 multisig, trenger du f.eks. bare to parter for å sende midler.

I likhet med e-post, trenger man ikke være på nett samtidig for at meldingsoverføringen skal virker: PyBitmessage lagrer meldinger i opptil to dager, noe som gir deg tid til å hente dem.

Tilnærmingen er generelt fleksibelt og robust: Hvis du trenger meldinger fra flere signerere for å fortsette, vil MMS-en vente til den finner alle i listen over mottatte meldinger, og rekkefølgen på mottakelsen har heller ikke noe å si, noe som resulterer i en opplevelse fri for stress.

Hvis en annen signerer forteller deg at en bestemt melding ikke ankom eller gikk tapt, kan du når som helst sende den igjen ved å plukke den opp fra meldingslisten slik du vanligvis hadde sendt en e-post på nytt i en liknende situasjon.

### Signerere og meldinger

Så der en «normal» Monero-lommebok uten MMS kun håndterer tre typer data (adresser, kontoer og transaksjoner), legger MMS-en til to til: Signerere og meldinger.

MMS-en håndterer, for hver separate multisig-lommebok, en liste over *autoriserte signerere*. Med 2/3 multisig, består den listen av **tre** oppføringer. På et teknisk nivå representerer hver oppføring en Monero-lommebok som inneholder nøkler som kan brukes til å signere multisig-transaksjoner. På et konseptuelt nivå er det lettere å forestille seg en gruppe med tre personer, f.eks. deg selv og to partnere, som de «autoriserte signererne». (Det vil ofte være spesielt tre personer som kontrollerer de tre lommebøkene, men ikke alltid, selvfølgelig.)

MMS-en håndterer også en enkel liste med *meldinger* per lommebok: Alle meldingene du sender pluss alle meldingene du motta. Mens listen over autoriserte signerere er den samme i alle de involverte lommebøkene, skiller meldingene seg selvfølgelig fra hverandre. Jo flere autoriserte signerere det er som kan sende deg en melding, og jo lengre du foretar transaksjoner, jo flere meldinger vil samle seg opp.

## Å få tak i MMS-en

Per dags dato (slutten av 2018), er MMS-en kun tilgjengelig som del av den siste Monero-koden (`master`-grenen i Moneros [GitHub-arkiv](https://github.com/monero-project/monero)). For å bruke det, må du kontrollere kildekoden og kompilere den på egenhånd. Det er lettest å gjøre dette på et Linux-system.

Med den neste hardforken som kom våren 2019, ble MMS-en en integrert, standard del av Monero-programvaren: Du har det når du installerer Monero.

Men en liten advarsel: Å bruke den siste Monero-versjonen fører per dags dato ikke til konflikter og komplikasjoner med vanlig utgitt Monero-programvare og nedlastet blokkjede på samme system, men det kan ha endret seg da hardforken fant sted.

## Installasjon og konfigurering av PyBitmessage

Å installere PyBitmessage er lett nok: Du finner lenker til å laste ned og installeringsinstrukser på [Bitmessage Wiki-hjemmesiden](https://bitmessage.org/wiki/Main_Page). Det finnes versjoner for alle de store operativsystemene som Monero også støtter: Linux, Windows, og macOS.

Etter du har installert programmet, installer og konfigurer en Bitmessage-adresse for deg selv og noter den ned, fordi du vil senere trenge den for å konfigurere multisig-lommeboken din.

Ikke bekymre deg om det virker som PyBitmessage ikke kobler seg til Bitmessage-nettverket når du kjører det for første gang. Grunnet den desentraliserte naturen til det nettverket, kan det ta litt tid før du kan koble til. Det virker som dette ofte tar en **halvtime**.

Å sende den alle første meldingen til en ny Bitmessage-adresse, kan på tilsvarende måte ta enda en halvtime fordi det involverer en viktig utveksling. Når den viktige utvekslingen er ferdig, leveres meldinger typisk innen noen minutter, og i andre tilfeller sekunder.

Du trenger ikke å konfigurere mer enn én Bitmessage-adresse for deg selv. Du kan kjøre flere multisig-lommebøker over en **enkel** adresse uten noen problemer fordi MMS-en vil kunne plukke ut de riktige meldingene for de riktige lommebøkene. Du kan til og med fortsette å bruke den samme adressen for «normale» meldinger; disse vil ikke forstyrre MMS-en, den vil ganske enkelt ignorere eventuelle meldinger som ikke er tiltenkt den.

Når PyBitmessage-installasjonen din er ferdig, er den enda ikke klar for å brukes med MMS-en fordi den som standard ikke tillater at andre programmer brukes API-en. Du er nødt til å aktivere dette (som av sikkerhetshensyn er logisk).

Du finner instruksjoner om hvordan man **aktiverer API-en** på [Bitmessage wikis API-side](https://bitmessage.org/wiki/API_Reference). Du må senere bruke brukernavnet og passordet som du valgt her som kommandolinjeparametere for CLI-lommeboken slik at MMS-en vil kunne logge inn på PyBitmessage.

## Ytterligere PyBitmessage-justeringer

Den gjeldende, offisielle versjonen 0.6.3.2 har en innebygget [Dandelion++-protokollutvidelse](https://arxiv.org/abs/1805.11060) som gjør nettverket mer hardfør mot angrep som prøver å spore meldingsflyten for å finne ut hvem som har sendt en melding til hvem. Det virker dessverre som at det fremdeles har en programfeil ett eller annet sted som kan føre til svært varierende og veldig lange meldingsoverføringstider som er ganske uheldig når man bruker MMS-en.

Det er en måte å skru Dandelion++ av på som generelt selvfølgelig ikke anbefales, men som er nyttig for å bruke MMS-en per dags dato:

* Finn PyBitmessages config-fil `keys.dat`
* Lag en ny seksjon der som heter `[network]`
* Legg til følgende linje til denne nye seksjonen: `dandelion = 0`
* Start PyBitmessage på nytt

Som en «god borger», bør du vurdere å åpne PC-en din for tilgang fra andre Bitmessage-noder til din node ved å åpne port 8444. Du finner bakgrunnsinformasjon om det i deres [Ofte stilte spørsmål](https://bitmessage.org/wiki/FAQ). Dette er imidlertid ikke strengt nødvendig for at klienten din skal fungere.

## MMS-kommandooversikt

Det finnes kun **én** ny kommando som gir tilgang til MMS-en, kalt `mms`. Den kommandoen har imidlertid en rekke underkommandoer for å håndtere alle de forskjellige funksjonene til MMS-en. Her er en liste over kommandoene. Hver kommando har sitt eget kapittel senere i manualen:

    init        Initialiserer og konfigurerer MMS-en
    info        Viser gjeldende MMS-konfigurasjon
    signer      Definerer en signerer ved å tildele en merkelapp på ett enkelt ord, transportadresse og en Monero-adresse, eller lister opp alle definerte signerere
    list        Lister alle meldinger
    next        Evaluerer de(n) neste mulige multisig-handlingen(e) i henhold til lommebokens status, eksekvererbarhet og valgtilbud 
    sync        Tvinger generering av synkroniseringsdata for multisig, uavhengig av lommebokstatus, for gjenoppretting fra spesielle situasjoner som «foreldet data»-feilmeldinger
    transfer    Initierer overføring med MMS-støtte; argumenter er identiske til normale «transfer»-kommandoer. For mer informasjon, du se mer der
    delete      Sletter en enkel melding ved å oppgi ID-en, eller sletter alle meldinger ved å bruke 'all'
    send        Sender en enkel melding ved å oppgi ID-en, eller sender alle ventende meldinger
    receive     Sjekker umiddelbart etter nye, innkommende meldinger
    note        Sender en beskjed på én linje til en signerer, identifisert av merkelappen, eller viser alle uleste beskjeder
    show        Viser detaljert informasjon om en enkel melding
    export      Eksporterer innholdet av en melding til en fil
    set         Angir valg, der 'auto-send' så langt er den eneste

    start_auto_config   Starter auto-config-prosessen på auto-config-eierens lommebok ved å opprette nye tokens
    auto_config         Starter auto-config ved å bruke tokenen som ble mottatt av auto-config-eieren
    stop_auto_config    Sletter eventuelle tokens og avslutter en auto-config-prosess
    send_signer_config  Sender din komplette signererkonfigurasjon til alle andre signerere
    
Du får listen over kommandoer ved å eksekvere `help mms`, og hjelp til en bestemt underkommando ved å bruke `help mms <underkommando>`, f.eks. `help mms next`. Du kan alternativt bruke `mms help <underkommando>` hvis den føles mer naturlig.

## Konfigurering av lommebok for bruk med MMS

### Adresser og merkelapper

For bedre forståelse av noen grunnleggende fakta om å adressere og henvise til signerere (eller lommebøkene deres) i MMS-en:

Hvis du oppretter en ny lommebok, blir den (så klart) en egen en, med en unik Monero-adresse. Hvis du senere konfigurerer lommeboken for multisig, **endrer** lommeboken sin offentlige adresse til den vanlige multisig-adressen som du deler med alle de andre autoriserte signererne.

MMS-en bruker den første, «originale» offentlige Monero-adressen over hele livsløpet til lommeboken for adressering før **og** etter den «går over til» multisig. Det kan være litt forvirrende at en lommebok bør ha **to** offentlige adresser, men når du har fått den opprinnelige adressen i signererkonfigurasjonen din, kan du mer eller mindre glemme den.

MMS-en bruker merkelapper som lar deg navngi deg selv og andre signerere, og MMS-kommandoen brukes når det refereres til signerere. (Å bruke Monero-adresser eller Bitmessage-adresser i slike kommandoer hadde vært ganske så ubeleilig.)

Merkelapper bør være på ett ord, og de må være unike innad i én enkel lommebok. Eksempelet som følger senere i denne veiledningen bruker merkelappene `alice` og `bob` ved 2/2 multisig.

### Å kjøre CLI-lommeboken

Når du starter CLI-lommeboken for bruk med MMS-en, finnes følgende to nye (valgfrie) kommandolinjeparametere for å koble til PyBitmessage:

    --bitmessage-address	Use PyBitmessage instance at URL <arg>
    --bitmessage-login		Specify <arg> as username:password for PyBitmessage API

Hvis du kjører PyBitmessage på samme maskin som CLI-lommeboken, holder standardverdien for den første parameteren, og du bør ikke trenge å endre på innstillingene. Hvis det ikke virker som den finner den, til tross for å ha kjørt lokalt, kan du prøve å bruke `http://localhost` eller `http://127.0.0.1` som argument for den første parameteren.

Bortsett fra det, trenger du selvfølgelig også enten `--testnet` eller `--stagenet` for å koble til det riktige nettverket. Det kan også være nyttig å bruke `--log-level 0`: Dette instruerer lommeboken til å skrive detaljert info til loggfilen som kan hjelpe med å finne programfeil eller andre problemer med MMS-en.

En komplett kommandolinje for CLI-lommeboken kan altså se slik ut:

    ./monero-wallet-cli --testnet --bitmessage-login mmstest:p4ssw0rd --log-level 0

### Initialisering av MMS-en

Etter å ha opprettet en ny lommebok, må du initialisere den for bruk med MMS-en; uten det essensielle førstetrinnet vil du ikke kunne bruke MMS-funksjonene. Kommandoen for å gjøre dette er `mms init`:

    mms init <required_signers>/<authorized_signers> <own_label> <own_transport_address>

`own_transport_address` er Bitmessage-adressen som du konfigurerte i ditt eget PyBitmessage-program. En full `init`-kommando kan se slik ut:

    mms init 2/2 alice BM-2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e

Bruk kun denne `init`-kommandoen **én gang**: Å eksekvere den én gang til reinitialiserer MMS-en fullstendig ved å slette eventuell signererinformasjon og meldinger, noe du ikke ønsker, bortsett fra i spesielle tilfeller.

Hvis du vil gjennomgå en MMS-test så raskt som mulig, kan du instruere lommeboken om å be om passordet kun når det er strengt nødvendig av tekniske årsaker og be MMS-en om å sende eventuelle genererte meldinger umiddelbart i stedet for å spørre om det i forkant:

    set ask-password 0
    mms set auto-send 1

(Begge disse innstillingene er aktive under 2/2 multisig-eksempelet som er vist i denne veiledningen.)

### Konfigurering av signerere

For hver signerer, er det tre ting MMS-en trenger å vite:

* Ordet *merkelapp* som du bruker for å henvise til signereren
* *Transport-adressen*, som for øyeblikket betyr deres Bitmessage-adresse så lenge dette er det eneste støttede meldingstransportsystemet
* *Monero-adressen*, altså den «opprinnelige» Monero-adressen til lommeboken deres

(Se også kapittelet over som heter *Adresser og merkelapper*.)

Du trenger ikke å opprette signerere; de er allerede «der» etter `mms init`-kommandoen, men det ikke finnes informasjon om dem ennå, bortsett fra om deg. Kommandoene for å sette signererinformasjonen går etter nummer: 1 opptil det totale antallet autoriserte signerere, altså 1 og 2 i følgende 2/2 multisig-eksempel der signererne heter *Alice* og *Bob*, og altså med merkelappene *alice* og *bob*.

Etter eksempelet over, skal `init`-kommandoen gi en liste over signerere og se slik ut:

     # Label                Transport address
       Auto-Config Token    Monero address
     1 alice                BM-2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e
                            A1VRwm8HT8CgA5bSULDZKggR9Enc9enhWHNJuDXDK4wDD6Rwha3W7UG5Wu3YGwARTXdPw1AvFSzoNPBdiKfpEYEQP1b5cCH
    
     2 <not set>            <not set>
                            <not set>

Merk at signerer #1 alltid er «jeg», altså din egen merkelapp, transportadresse og Monero-adresse. Så i signererlisten vil #1 være Alice og #2 være Bob, mens i Bobs lommebok er det omvendt.

Det finner **tre måter** å fullføre signererinformasjon på: Du kan enten legge den inn manuelt eller du kan bruke auto-config-mekanismen som MMS-en tilbyr, som har en ekstra «semiautomatisk» variant. Med 2/2 er det så vidt en forskjell i innsats, men med høyere antall signerere, er auto-config lettere og mer pålitelig. En fordel med auto-config er uansett at det gir sikker transport av adresser fordi PyBitmessage brukes.

Så velg **én** metode fra de tre følgende kapitlene *Manuell konfigurering av signerere*, *Auto-Config* og *Sending av signererkonfigurasjon*:

### Manuell konfigurering av signerere

Kommandoen for å manuelt legge inn signererinformasjon og vise listen over signerere er `mms signer`:

	mms signer [<number> <label> [<transport_address> [<monero_address>]]]

Uten noen argumenter viser kommandoen listen over signerere. Med minst et tall og en merkelapp, kan du velge eller endre informasjon om en spesifikk signerer. En full kommando for å angi alt om signerer #2 kan se slik ut:

	mms signer 2 bob BM-2cStcTfCx8D3McrMcmGZYZcF4csKcQT2pa 9yXKZ6UUdd8NnNN5UyK34oXV7zp7gjgZ4WTKHk8KzWsAAuyksfqoeRMLLkdWur85vnc1YL5E2rrMdPMHunA8WzUS9EL3Uoj

En kommando for å senere kun endre merkelappen på signerer #2 kan være:

	mms signer 2 bob-the-builder

Med denne manuelle metoden er det opp til signererne *hvordan* de alle blir kjent med hverandres adresser.

Vær forsiktig mens du taster inn signererinformasjonen: Eventuelle feil som feil Bitmessage-adresser vil sannsynligvis gjøre det umulig å foreta en riktig transaksjon senere.

Før du setter i gang med å utveksle signererinformasjon over usikre kanaler som IRC eller ren, ukryptert e-post, bør du merke deg at det er visse farer i å gjøre det. Hvis noen for eksempel kan snappe opp e-postene dine og få tak i adressene som du sender til en signerer, kan den personen imitere signereren.

Det er også en fare for at signerer Bob i et 2/3 multisig-scenario for *escrow* kan sette opp en ytterligere lommebok for den betrodde tredjeparten Trent i tillegg til sin egen og lure Alice til å sende alt til denne lommeboken istedenfor Trents lommebok. Etter dette vil Bob kunne foreta transaksjoner på egenhånd og stjele mynter fra Alice.

Du kan finne en mer detaljert forklaring av denne faren i kapittelet *Sikkerhet* mot slutten av bruksanvisningen eller [her](https://taiga.getmonero.org/project/rbrunner7-really-simple-multisig-transactions/wiki/multisig-and-insecure-communication-channels). Auto-config reduserer denne faren til en viss grad.

Alices komplette signererliste ser slik ut:

     # Label                Transport Address
       Auto-Config Token    Monero Address
     1 alice                BM-2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e
                            A1VRwm8HT8CgA5bSULDZKggR9Enc9enhWHNJuDXDK4wDD6Rwha3W7UG5Wu3YGwARTXdPw1AvFSzoNPBdiKfpEYEQP1b5cCH
    
     2 bob                  BM-2cStcTfCx8D3McrMcmGZYZcF4csKcQT2pa
                            9yXKZ6UUdd8NnNN5UyK34oXV7zp7gjgZ4WTKHk8KzWsAAuyksfqoeRMLLkdWur85vnc1YL5E2rrMdPMHunA8WzUS9EL3Uoj

### Auto-Config

MMS auto-config er basert på såkalte *auto-config-tokens*. Slike tokens har alltid en lengde på 11 tegn, den faste strengen «mms» etterfulgt av 8 heksadesimale tegn. Eksempler på slike tokens er `mms561832e3eb` og `mms62cb2b87e2`.

Det grunnleggende trikset: I motsetning til Bitmessage-adresser og Monero-adresser, er disse tokenene korte nok til å enkelt taste dem inn og f.eks. bruke forholdsvis sikre meldingsapper eller SMS på smarttelefon for å sende dem eller diktere dem over telefonen. Dette er ikke 100 prosent sikkert, men fremdeles mye sikrere enn e-post eller IRC.

Arbeidsflyten er som følger – Det er enklere enn det ser ut til. Gjennomgå det for å øve på det, så blir det nok klarere:

* Én signerer tar for seg jobben med å lese og organisere konfigurasjonen, og kalles for *leder*
* Lederen tildeler en merkelapp til hver signerer og legger alle merkelapper inn i signererkonfigurasjonen, enten ved å bruke `mms signer`-kommandoer eller ved å oppgi dem som argumenter til `mms start_auto_config`-kommandoen i neste steg
* Lederen bruker kommandoen `mms start_auto_config` for å generere auto-config-tokener for alle andre signerere, og én distinkt token per signerer
* Lederen sender tokenene videre til sine respektive signerere utenfor MMS-en
* Alle andre signerere legger inn tokenen sin med `mms auto_config <token>`
* Lommebøkene deres vil generere meldinger som sender adressene deres til lederens lommebok som allerede bruker PyBitmessage
* Så snart alle meldingene ankommer, kan lederen igjen sende meldinger til alle andre signerere som inneholder den fullstendige signererinformasjonen ved å eksekvere `mms next`
* De andre signererne behandler de meldingene for å fullføre sin signererinformasjon med `mms next`

Flere punkter er viktige å merke seg. Manuell konfigurasjon med f.eks. 5 signerere kan innebære at 5 ganger 4 = 20 opprinnelige, manuelle informasjonsoverføringer dersom hver av de 5 signererne sender adresser til 4 andre. Selv en lurere tilnærming med noen som først samler alle adressene og sender den komplette listen til alle andre, ville tatt 4 pluss 4 = 8 informasjonsoverføringer. Med auto-config finnes det kun **4** slike manuelle overføringer – 4 tokens fra lederen ut til de andre signererne; etter det stadiet sendes meldingene allerede over PyBitmessage.

Du lurer kanskje på hvordan lommebøkene til andre signerere kan sende sine Bitmessage-meldinger tilbake til lederen ved å bruke PyBitmessage. Biter ikke slangen sin egen hale? Løsningen: En midlertidig, «engangs»-Bitmessage-adresse utledes av hver token og brukes kun for denne overføringen, og midlertidige nøkler utledes i tillegg for å kryptere meldingsinnholdet.

En del av den økte sikkerheten til auto-config-prosessen er at hver signerer får sin egen, distinkte token. I 2/3 multisig må man bare sørge for at Bob ikke kan få tak i Trents egen token, og Bob har allerede ingen måte å «etterlikne» Trent og sette opp en ytterligere lommebok for å kunne signere transaksjoner på egenhånd.

### Sending av signererkonfigurasjon

Bortsett fra fullstendig auto-config, finnes det en annen, alternativ måte å gjøre konfigurasjonen lettere på som er basert på kommandoen `send_signer_config`. Den er mindre «automatisk», men du foretrekker den kanskje fordi det som skjer etterpå er synligere.

Her er arbeidsflyten som følger:

* Én signerer tar for seg jobben med å lese og organisere konfigurasjonen, og kalles for *leder*
* Lederen mottar adressene fra alle andre signerere over kanaler utover MMS-en, f.eks. kryptert og signert e-post
* Lederen legger inn komplett signererinformasjon i lommebøkene deres ved å bruke `mms member`-kommandoene
* Lederen bruker `mms send_signer_config`-kommandoen for å send den komplette informasjonen til alle de andre signererne
* De andre signererne behandler de meldingene for å fullføre sin signererinformasjon med `mms next`

For alle signerere, bortsett fra lederen, er dette omtrent så beleilig som auto-config. Merk at sikkerheten til systemet imidlertid avhenger av å sikre å sende informasjon til lederen: Hvis en signerer kan fremstille seg ikke som seg selv, men som andre signerere også, vil de kunne kontrollere flere lommebøker og undergrave hele signeringsprosessen. (Se også kapittelet *Manuell konfigurering av signerere* for mer om slike farer.)

## Etablering av Multisig-adressen

Det finnes generelt ingen MMS-kommandoer for å eksekvere bestemte steg knyttet til multisig-transaksjoner (med unntak av å starte en overføring ved å bruke `mms transfer`og tvinge synkronisering med `mms sync`). Du bruker bare `mms next`-kommandoen, og så vil MMS-en gjøre det som befinner seg i neste «multisig-arbeidsflyt», og om ingenting er klart, f.eks. fordi noen meldinger fremdeles mangler, vil den fortelle deg grunnen til at ingenting er «neste» enda.

Så etter du har fullført informasjonen om alle signerere, enten manuelt eller gjennom auto-config, utfører du bare en `mms next`-kommando, så vil MMS-en starte med det første steget som trengs for å etablere multisig-adressen: Kalkuler *nøkkelsett* for alle koalisjonsmedlemmer og sett opp meldinger for å sende disse til dem. Hele scenarioet kan se slik ut for Alice:

    [wallet A1VRwm]: mms next
    prepare_multisig
    MultisigV18uEUr5L7EvFDqKWvbnK2ys395ddRPuG6zaxNTwbDq3WoUNJtkPUPbRAEQKBaCC52g5iJXi8XUF4aUP9984hdFrHsP1y3W8yQkm
    YUSDYXzouhzd479tMmpL4LJKUoW5e54bubEg5E4J3BZtJQiGNzvVsiBKGAKgT7J4bcNN66Xq7hpL4V
    Send this multisig info to all other participants, then use make_multisig <threshold> <info1> [<info2>...] with others' multisig info
    This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet's participants 
      Id I/O  Authorized Signer              Message Type           Height   R Message State   Since                                   
       1 out  bob: BM-2cStcTfCx8D3McrMcmGZ.. key set                     0   0 ready to send   2018-12-26 07:46:21, 1 seconds ago      
    Queued for sending.

`prepare_multisig`-utdataen her er et hint om at MMS-en fungerer ved å sette inn en slags «innpakker» rundt CLI-lommebokens `pepare_multisig`-kommando. Den viser til og med `MultisigV1`-strengen for bekreftelse. Du trenger nå ikke å sende den manuelt til den andre signerere: MMS-en forbereder en melding for dette og sender den på en fullstendig automatisk måte. 

Etter Alice mottar Bobs nøkkelsett, vil en ytterligere `mms next`-kommando behandle den og etablere multisig-adressen:

    [wallet A1VRwm]: mms next
    make_multisig
    Wallet password: 
    2/2 multisig address: 9uWY5Kq6XocGGqUByp22ty4HYxj4CfjCXdRrZ24EKvYW2U7fudSzCvTRRT35tMNx5heQfqKmVmFjahWUZ1BENnzH8UvyVF7

Lommeboken kan være usynkronisert etter dette steget; hvis den er det, gjør en rask `refresh`.

I tilfelle av ikke-symmetrisk M/N multisig, der M er ulik N (f.eks. som i 2/3), er det ikke tilstrekkelig at hver signerer sender ett nøkkelsett til de andre signererne: Det vil være flere *runder* med utveksling av nøkkelsett. MMS-en vet imidlertid om dette og vil automatisk ta hånd om nesten alt: For en bestemt lommeboken venter den til nøkkelsettene til alle andre signerere har ankommet før den fortsetter. Hvis det er nødvendig med enda en runde med nøkkelutvekslinger, vil `mms next` sette i gang en ny en. Hvis ikke, vil kommandoen behandle det siste nøkkelsettet/-settene og etablere multisig-adressen.

Det er mulig at en fremtidig forbedret versjon av MMS-en vil gjøre dette på en helautomatisk måte, f.eks. ved å sende alle nødvendige nøkkelsett rundt uten ytterligere innvending frem til multisig-adressen er konfigurert. Inntil videre må du imidlertid fremskynde ting ved å eksekvere `mms next`-kommandoene.

## Finansiering av Multisig-lommeboken

Når multisig-adressen er etablert, er lommeboken nå klar til å motta midler. Her spiller ikke MMS-en noen rolle, ei heller multisig: Bare overfør noen mynter til adressen slik at du har noe å overføre ut av den senere, og vent til de ankommer.

## Synkronisering av lommebøker

Hver gang etter å ha mottatt eller sendt mynter, må multisig-lommebøkene utveksle informasjon med hverandre for å «bli synkronisert» igjen. Dette er tilfellet når enn CLI-lommeboken forteller deg om *delvise nøkkelbilder* som i denne `balance`-kommandoutdataen:

    [wallet 9uWY5K]: balance
    Currently selected account: [0] Primary account
    Tag: (No tag assigned)
    Balance: 7.000000000000, unlocked balance: 7.000000000000 (Some owned outputs have partial key images - import_multisig_info needed)

«import_multisig_info needed»-delen er kanskje den kjedeligste delen ved CryptoNote multisig-transaksjoner, og koster litt arbeid, f.eks. ved 3/3 eller 2/3 multisig der det allerede er **seks** biter med informasjon som må sendes rundt hver gang, bare for å sluttføre mottakelsen av noen mynter og/eller kunne overføre igjen etter en overføring.

Med MMS-en er det i det minste bare et spørsmål om å eksekvere `mms next`-kommandoene helt til all synkronisert data er sendt og mottatt og lommebøkene blir synkronisert igjen: Den veileder deg automatisk gjennom de nødvendige `export_multisig_info`- og `import_multisig_info`-kommandoene. Her ser du igjen hvordan Alice ser dette:

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

Ikke bekymre deg om du mottar slike synkroniseringsmeldinger fra andre signerere allerede før du er i stand til å sende dine: MMS-en vil håndtere denne situasjonen ganske bra og sende først og behandle etterpå.

Sjekk kapittelet *Feilsøking* hvis du sitter fast: Det er f.eks. en måte å tvinge synkronisering, selv om `mms next` blir forvirret og tror at synkronisering ikke er nødvendig eller mulig.

## Å gjøre Multisig-transaksjoner

For å initialisere multisig-transaksjoner, finnes kommandoen `mms transfer` istedenfor den normale `transfer`-kommandoen. MMS-varianten støtter alle parametervariasjoner av den normale kommandoen. Så for å få hjelp, bruke du altså `help transfer`.

MMS-en bryr seg ikke om underadresser og kontoer; hvilke adresser du bruker for å sende (og motta) transaksjoner, den bryr seg bare om data som den bestemte hendelsen lager, om det riktige øyeblikket å behandle de på og om å sende det til riktig mottaker(e).

Hvis du ikke liker at transaksjonsdataene blir del av `.mms`-filen i form av lagret meldingsinnhold, kan du bruke den normale `transfer`-kommandoen, men da er det selvfølgelig ditt ansvar å sende den delvis signerte transaksjonen til neste signerer.

Med multisig gjør selvsagt ikke `mms transfer`-kommandoen at man overfører noe enda, men den produserer istedenfor en delvis signert transaksjon. Denne utvider meldingskonseptet noe fordi `mms transfer` produserer en melding til «meg», dvs. eieren av lommeboken, med den delvis signerte transaksjonen som innhold. Sjekk melding #7 under til Alice: 

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

Ideen bak dette er som følger: I dette stadiet, med de ventende transaksjonene, og avhengig av det nødvendige antallet signerere, vil `mms next` resultere i spørsmålet om hva man skal gjøre med det: Spesielt i tilfellet ved 2/3 multisig, er det avgjørende å kunne fastslå **hvor** man skal sende transaksjonen for den andre signaturen som vil gjøre den gyldig, dvs. for **hvilke** av de to signererne.

Dette kan se slik ut i et tilfelle av 2/4 multisig:

    Unsigned transaction(s) successfully written to MMS
    [wallet 9vAbBk]: mms next
    Choose processing:
    1: Send the tx for signing to two: BM-2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e
    2: Send the tx for signing to three: BM-2cStcTfCx8D3McrMcmGZYZcF4csKcQT2pa
    3: Send the tx for signing to four: BM-2cUjNoSxPkUY7ho4sPcEA6Rr26jqcasKiE

I tilfelle av 2/2 multisig-eksempelet i denne veiledningen, er det imidlertid ikke noe valg: Transaksjonen som ble startet av Alice må gå til Bob som den eneste andre autoriserte og nødvendige signereren:

    [wallet 9uWY5K]: mms next
    Send tx
      Id I/O  Authorized Signer              Message Type           Height   R Message State   Since                                   
       8 out  bob: BM-2cStcTfCx8D3McrMcmGZ.. partially signed tx         1   0 ready to send   2018-12-26 09:29:30, 0 seconds ago      
    Queued for sending.

Etter å ha mottatt det, signerer Bob ikke med en dedikert signeringskommando som ikke finnes, men ganske enkelt ved å bruke `mms next`:

    [wallet 9uWY5K]: mms next
    sign_multisig
    Loaded 1 transactions, for 7.000000000000, fee 0.000094300000, sending 5.000000000000 to
     9zo5QDV9YivQ8Fdygt7BNdGo1c98yfAWxAz6HMwsf15Vf1Gkme9pjQG2Typ9JnBKv5goziC2MT93o3YDUfoWdU9XUinX5kS, 1.999905700000 change to
     9uWY5Kq6XocGGqUByp22ty4HYxj4CfjCXdRrZ24EKvYW2U7fudSzCvTRRT35tMNx5heQfqKmVmFjahWUZ1BENnzH8UvyVF7, with min ring size 11,
     no payment ID. Is this okay? (Y/Yes/N/No): y
    Transaction successfully signed to file MMS, txid c1f603a9045f28b28f221eddf55be41e95f2ac7213384a32d35cadc0a8be3026
    It may be relayed to the network with submit_multisig

En annen `mms next` resulterer ikke i et valg for Bob, fordi han kan enten sende inn transaksjonen til nettverket på egenhånd, **eller** sende den tilbake til Alice for å gjøre det:

    [wallet 9uWY5K]: mms next
    Choose processing:
    1: Submit tx
    2: Send the tx for submission to alice: BM-2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e
    Choice: 

Etter transaksjonen er sendt inn til nettverket og behandlet, må du synkronisere lommebøkene før du kan foreta en ny overføring. Merk også at det er en begrensning av Monero multisig, uavhengig av eventuelle synkroniseringsbehov, at du må gjøre **én transaksjon etter den andre i rekkefølge**. Du kan for eksempel ikke legge bort fullt signerte transaksjoner for å sende dem inn senere og allerede starte en ny en for å sende den først. (MMS-en er i enkelte scenarioer ikke smart nok til å hindre at du prøver det. Se *Feilsøking*-kapittelet om hvordan du kan rette opp i det ved å slette meldinger som inneholder transaksjoner som ikke kan behandles og deretter tvinge synkronisering.)

Du kan, som allerede nevnt, holde transaksjonsdataene dine utenfor `.mms`-filen i form av lagret meldingsinnhold og bruke den normale `transfer`-kommandoen, men da er det selvfølgelig ditt ansvar å sende den delvis signerte transaksjonen til den neste signereren. Merk også at MMS-en ikke støtter kald signering; det er også en grunn til å bruke `transfer` direkte, istedenfor `mms transfer`. Du kan imidlertid eksportere transaksjonsdata som er inneholdt i en melding med `mms export`-kommandoen.

## Kommandoene i detalj

### mms init

    mms init <required_signers>/<authorized_signers> <own_label> <own_transport_address>

Eksempel:

    mms init 2/2 alice 2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e

Gjør klar en lommebok som skal brukes med MMS-en. Du kan senere endre merkelappen din og din egen transportadresse ved å bruke `mms signer`, men de to tallene, nødvendige signerere og autoriserte signerere kan ikke endres uten å eksekvere `mms init` igjen som sletter all signererinformasjon og meldinger. Kommandoen fører til opprettelsen av en ytterligere fil med en forlengelse av `.mms` for lommeboken.

For lommebøker som er opprettet «før MMS fantes» (før MMS-koden ble inkludert i Monero), er det kun mulig å initialisere MMS-en dersom lommeboken ikke enda er multisig. For lommebøker som er opprettet med en Monero-kode som allerede er der, er det mulig å initialisere, selv med lommebokens multisig: Når lommeboken ble byttet til multisig, ble den «opprinnelige» Monero-adressen som trengs av MMS-en lagret før den rakk å bli byttet av de vanlige multisig-adressene.

Det er ingen kommando for å deaktivere MMS-en. Hvis du ikke lenger vil bruke den for en bestemt lommebok, kan du bare slette `.mms`-filen eller i det minste flytte den ut av veien.

### mms info

    mms [info]

Viser hvorvidt MMS-en er aktiv eller ikke, og hvis den er det, viser den antallet nødvendige signerere og antallet autoriserte signerere. Dette er den eneste MMS-kommandoen som er tillatt når MMS-en er inaktiv.

### mms signer

    mms signer [<number> <label> [<transport_address> [<monero_address>]]]

Eksempler:

    mms signer
	mms signer 2 bob BM-2cStcTfCx8D3McrMcmGZYZcF4csKcQT2pa 9yXKZ6UUdd8NnNN5UyK34oXV7zp7gjgZ4WTKHk8KzWsAAuyksfqoeRMLLkdWur85vnc1YL5E2rrMdPMHunA8WzUS9EL3Uoj
	mms signer 2 bob-the-builder

Uten argumentet, vises listen over signerere og deres informasjon i den grad det er kjent. Ting som ikke er satt og derfor fremdeles ukjent, vises som `<not set`>. Merk at du ikke trenger og ikke kan opprette signerere: Etter `mms init` «finnes» de allerede, selv om de er uten informasjon, med unntak av signerer #1 som alltid er «meg», dvs. den gjeldende lommeboken. Antallet deres er fast, det er antallet autoriserte signerere som angitt med `mms init`.

Med minst et tall og en merkelapp som argument, kan man sette informasjon om en signerer, eller endre eventuell informasjon som allerede er satt. Du står alltid fritt til å endre merkelapper og transportere adresser, men Monero-adresser kan av tekniske årsaker kun endres så lenge det ikke finnes meldinger. I verste fall kan du eksekvere `mms init` på nytt og starte fra bunn.

Tallene starter på 1 og går opp til antallet autoriserte signerere.

En *merkelapp* på være et enkelt ord. Bruk tegn som minus "-" eller understrek "-" for å skrive mer komplekse merkelapper som f.eks. `alice_in_wonderland`. Merkelappene må være unike for alle signerere. Det er ingen fast, maksimal lengde for merkelapper, men noen utdata vil se rare ut eller bli vanskelige å lese med svært lange merkelapper.

En *transportadresse* kan for tiden kun være en Bitmessage-adresse som f.eks. `BM-2cStcTfCx8D3McrMcmGZYZcF4csKcQT2pa`, der PyBitmessage er det eneste støttede programmet for reell meldingstransport. Transportadresser sjekkes ikke for syntaks eller gyldighet av MMS-en; hvis du legger inn en ødelagt adresse, vil du kun senere få en feilmelding fra PyBitmessage etter første (forsøket på) bruk.

Hvis du legger inn en feil adresse, dvs. ikke den riktige adressen for den respektive signereren, vil sannsynligvis ingenting skje. Meldingene vil bare ikke nå den tiltenkte mottakeren; hvis ingen holder nøkkelen for den adressen – med en Bitmessage-klient som er konfigurert for å motta meldinger til den – vil meldingene bare «flyte rundt» Bitmessage-nettverket en stund og til slutt utløpe.

### mms list

    mms list

Lister alle lagrede meldinger. Det finnes ingen separat innboks og utboks; alle meldingene befinner seg i en enkel, kronologisk liste. Kolonnene er som følger:

* `Id`: Den unike ID-en til meldingen som du kan bruke til å vise til meldingen i kommandoer som `mms show` og `mms send`. Meldings-ID-er teller strengt oppover fra 1. ID-er til slettede meldinger blir ikke «resirkulert».
* `I/O`: Meldingsretning. `in` angir en melding som du har mottatt og `out` en melding som du har sendt. Merk at du for enkelte meldingstyper kan motta en melding fra deg selv, f.eks. en delvis signert transaksjon som du selv har startet.
* `Authorized Signer`: Ved en mottatt melding, senderen, og ved en sendt melding, mottakeren. Merkelappene og signererens transportadresse er oppført (innenfor kolonnens breddegrense).
* `Message Type`: Meldingstypen som forteller hva slags data den inneholder. Se under for en komplett liste over mulige meldingstyper.
* `Height`: Antall overføringer som er inneholdt i lommeboken ved tidspunktet på opprettelsen eller mottakelsen av meldingen. Brukes til å synkronisere de «riktige» synkroniseringsdatameldingene, der alle må være fra samme «høyde» for alle andre signerere, bortsett fra før synkronisering kan være vellykket. Denne høyden er uviktig for deg, bortsett i tilfeller der noe har gått galt; Se *Feilsøking*-kapittelet for mer informasjon.
* `R`: Antall runder med nøkkelutvekslinger som et nøkkelsett tilhører dersom multisig-typen krever mer enn én runde til å begynne med, som f.eks. 2/3. 0 for alle andre meldingstyper.
* `Message State`: Den nåværende statusen på meldingen. `waiting` eller `sent` for utgående meldinger, `waiting` eller `processed` for innkommende meldinger. Du kan ikke endre denne statusen direkte, da den alltid er et resultat av eksekveringen av kommandoer.
* `Since`: Tidspunktet og tidsrommet som meldingen fikk sin gjeldende meldingsstatus på. Tidspunktene er i UTC, ikke lokaltid. Hvis du sender en melding på nytt, er dette tidsstempelet ikke justert og fortsetter å vise tidspunktet til den første meldingen.

Den komplette listen over meldingstyper:

* `key_set`: Data om hvor mange nøkler som lommebøker må utveksle med hverandre for å etablere multisig-adresser
* `additional_key_set`: Et nøkkelsett for en ytterligere runde med nøkkelutvekslinger etter den opprinnelige, som er nødvendig for ikke-symmetriske multisig-typer som f.eks. 2/3
* `multisig_sync_data`: Data som lommebøker må utveksle med hverandre for å tolke innkommende og utgående transaksjoner på en riktig og fullstendig måte. Se også kapittelet *Synkronisering av lommebøker*
* `partially_signed_tx`: En transaksjon som enda ikke har det nødvendige antallet signaturer (= antall nødvendige signerere) til å fullføre den.
* `fully_signed_tx`: En transaksjon med et fullt sett med nødvendige signaturer som er klare for å bli sendt inn til Monero-nettverket; alle signerere kan sende inn dette
* `note`: En melding som inneholder en beskjed. Se kommandoen `mms note`
* `signer_config`: Full informasjon om alle signerere som skal sendes som del av en auto-config-prosess eller som resultat av en `mms send_signer_config`-kommando
* `auto_config_data`: Adressedata fra en signerer som skal sendes tilbake til auto-config-lederen etter å ha lagt inn en token med `mms auto_config`

### mms next

    mms next [sync]

*Den mest* og sannsynligvis mest brukte MMS-kommandoen: Sjekker statusen på lommeboken, i tillegg til de mottatte og sendte meldingene og meldingsstatusene deres, og fastlår hvilken handling som er den neste som skal eksekveres for deretter å eksekvere den.

Under tvil, utsteder du bare en `mms next`-kommando; MMS-en vil enten eksekvere den neste riktige kommandoen i henhold til Moneros «regler for multisig-arbeidsflyt» eller fortelle deg hva den venter på før den kan fortsette. For «farlige» ting, kan du regne med tilskyndelser om bekreftelser før det virkelig skjer noe. I verste fall kan en `mms next` eksekvere noe litt tidligere enn du ønsket, men ellers kan det ikke gjøre særlig skade.

Merk for hvor mange handlinger det ikke finnes **noen** dedikert kommando, og `mms next` er den **eneste** måten å la ting gå fremover på. Ikke se etter f.eks. kommandoer for å selektivt behandle visse meldinger på: Hvis det er tid til å behandle noen mottatte meldinger i *venter*-status, vil kommandoen gjøre det.

Interessant og kanskje overraskende nok, er det i Monero **alltid** klart hva som er det neste som må skje når det kommer til multisig, bortsett i tilfeller av delvis signerte transkasjoner der du kan bestemme **hvilken** signerer å sende dem til, og i tilfeller av fullt signerte transaksjoner der du selv kan sende inn til nettverket eller sende dem til en annen signerer for at de skal sende det inn.

Den spesielle kommandoformen `mms next sync` er for tilfeller der synkroniseringsdata venter som MMS-en i seg selv ikke kan behandle fordi den «tror» lommeboken er i en status som ikke trenger ny synkronisering – som kan være feil. Mer om dette kan du se i kapittelet *Feilsøking*.

### mms sync

    mms sync

Starter manuelt en runde med tvangssynkronisering, dvs. hvis MMS-en er av den oppfatning at ingen utveksling av synkroniseringsdata er nødvendig. Mer om dette kan du finne i kapittelet *Feilsøking*.
 
### mms transfer

    mms transfer <transfer_command_arguments>

Starter en overføring under MMS-ens kontroll, der forskjellen mellom den og standard `transfer`-kommandoen er at den resulterende, delvis signerte transaksjonen ikke blir skrevet til en fil som du må gjøre noe med selv, men at en melding som inneholder transaksjonen vil resulterer i det. Bruk `mms next` etter `mms transfer` for å be MMS-en om å faktisk behandle meldingen, noe som videre innebærer å bestemme hvilken signerer å sende den til for neste signatur, og å opprette enda en melding for dette.

Argumentene til `mms transfer`-kommandoen er nøyaktig de samme som de av den standard `transfer`-kommandoen. Sjekk informasjonen om den kommandoen med `help transfer` for å lære alt om de forskjellige, mulige parameterene og parameterkombinasjonene.

Mer at MMS-en generelt ikke bryr seg om adresser, underadresser og kontoer. Uavhengig av hva du spesifiserer, vil det alltid være en enkel, ny melding som inneholder den delvis signerte transaksjonen.

Selv med MMS-en aktiv, kan du fremdeles bruke den standard `transfer`-kommandoen; da må du rett og slett håndtere transaksjonen på egenhånd. Prøv å bruke den riktige kommandovarianten; `transfer` vil ikke be om bekreftelse, enten du planlegger å bruke den i stedet for `mms transfer`. Hvis du eksekverte `transfer`, men egentlig ønsket MMS-varianten, kan du ignorere den skriftlige transaksjonen og bare fortsette med `mms transfer`.

MMS-en holder ikke, i hvert fall ikke enda, tritt med hvor mange signaturer en transaksjon faktisk har, og hvor mange som allerede har signert og ikke. På grunn av denne svakheten kan den inkludere valg som ikke gir mening, f.eks. et valg om å sende en delvis signert transaksjon til noen som allerede har signert.

Dette betyr lite med multisig-typer som 2/2 eller 2/3, men jo høyere antallet autoriserte signerere, jo mer kritisk kan dette bli. Litt oppmerksomhet av signerere er nødvendig for å gjøre det riktig. Du kan imidlertid ikke gjøre noe feil i absolutt forstand: CLI-lommeboken, eller nærmere bestemt CLI-kommandoene som utføres internt av MMS-en, vil avvise eventuelle forsøk på å utføre ugyldige handlinger.

### mms delete

    mms delete (<message_id> | all)

Sletter en enkel melding gitt dens meldings-ID eller sletter alle meldinger ved å bruke `all`-parameteren. Enkle meldinger vil slettes uten bekreftelse, selv om den ikke enda er sendt eller behandlet. En slettet melding er borte for alltid, og det går an ikke å angre dette, og den er også borte fra PyBitmessages lagring. (Hvis du mister en melding, kan du be senderen om å sende den til deg på nytt.)

Det er situasjoner der du må tømme ved å slette meldinger som ikke ble behandlet, som ble ubehandlbare og som nå «forstyrrer arbeidsflyten»; Se kapittel *Feilsøking* for mer. Å slette er også nyttig når noen sender deg en melding på nytt og den opprinnelige meldingen endelig når deg på et senere tidspunkt.

Du kan si at verdien av en sendt eller behandlet melding i seg selv ikke er så høy, fordi du i de fleste tilfeller ikke vil trenge dem igjen, og for mange meldinger finnes det uansett ingen kommandoer for å behandle dem igjen ved behov. Men listen over meldinger kan i seg selv være ganske verdifull for å se hva og når noe har skjedd, så det kan være lurt å ikke slette meldinger om du ikke har en god grunn til det.

### mms send

    mms send [<message_id>]

Eksempel:

    mms send 14

Sender en hvilken som helst melding uten parameter i status *klar til å sendes*. Med en meldings-ID som parameter, kan man sende den bestemte meldingen eller sende den på nytt. Å kunne sende en melding på nytt er del av «UX-meldingssystemet» og skaper en ganske robust behandling fordi det er veldig få situasjoner som du ikke kan gjenopprette: Bitmessage-nettverket spiste meldingen din? Ikke noe problem, bare send den på nytt. PyBitmessage krasjet? Ikke noe problem, bare start den på nytt og send meldingen din på nytt.

Hvorvidt meldinger sendes umiddelbart eller MMS-en ber om bekreftelse for å gjøre det, avhenger først av verdien av `auto-send`-parameteren; se `mms set`-kommandoen. Å få hver melding til å sende på den måten kan være nyttig for nybegynnere fordi det er lettere å se hva som skjer; på en annen side gir det nesten aldri mening å utsette å sende fordi noe annet må sendes først.

«Å sende» betyr ikke egentlig å sende; MMS-en sender bare inn meldingen til PyBitmessage, og det er *det* programmet som faktisk sender. MMS-en kan ikke gi noe tilbakemelding om hvorvidt en melding fremdeles venter på å gå ut til Bitmessage-nettverket eller om det allerede har blitt sendt ut. Om du er i tvil, kan du se i PyBitmessage.

Eventuelle feil i Bitmessage-adressene vil kun oppdages når det sendes; MMS-en i seg selv sjekker ikke de adressene.

### mms receive

    mms receive

Tvinger en umiddelbar sjekk etter mottatte meldinger, eller mer nøyaktig tvinger en umiddelbar forespørsel av MMS-en til PyBitmessage om hvorvidt det finnes noen nye meldinger.

MMS-en ser etter nye, innkommende meldinger med samme frekvens som CLI-lommeboken ser etter innkommende transaksjoner: Én gang hver 90. sekund. Og innstillingen for å avgjøre hvorvidt å sjekke automatisk eller ikke, er også den samme: `auto-refresh`.

### mms note

    mms note [<label> <text>]

Eksempler:

    mms note
    mms note bob Did you already submit the last transaction?
    mms note alice Yes, just waiting for the next block :)

Uten parametere viser eventuelle notater som enda ikke er lest. Med en merkelapp og ytterligere tekst som parametere, kan teksten sendes som en melding av typen `note` til signereren med merkelappen.

Å sende notater til hverandre direkte fra én Monero-lommebok til den neste kan være en morsom måte å unngå å måtte bruke tradisjonelle kommunikasjonskanaler for å snakke med signerere.

Hvis du vil lese et bestemt notat eller lese det om igjen, kan du bruke `mms show`-kommandoen og se på den siste linjen med meldingsinnhold, i dette tilfelle teksten i notatet.

### mms show

    mms show <message_id>

Viser detaljert informasjon om meldingen med ID-en som brukes som kommandoparameter. Nyttig for å lese notater eller å lese dem om igjen. Hvis binærmeldingsinnhold ikke vises; bruk `mms export`-kommandoen og inspiser den resulterende filen hvis du trenger å sjekke et slikt meldingsinnhold.

### mms export

    mms export <message_id>

Eksporterer innholdet av meldingen med den gitte ID-en til en fil med det faste navnet `mms_message_content` i den gjeldende katalogen. En allerede eksisterende fil vil overskrives i det stille.

Det finnes enda ingen motpart til `mms import`-kommandoen.

### mms set

    mms set <option_name> [<option_value>]

Eksempel:

    mms set auto-send 1

Tilsvarende MMS-ens generelle `set`-kommando. Kun navnet på et valg viser den gjeldende verdien på det valget. Hvis navnet og verdien på navnet er satt, gis den gitte verdien til valget.

Den eneste MMS-spesifikke innstillingen så langt som denne kommandoen håndterer er `auto-send`-innstillingen. Hvis de oppsatte meldingene ikke er sendt ut automatisk rett etter de ble opprettet, men MMS-en ber om bekreftelse først. Se også `mms send`-kommandoen. Så snart du er kjent med MMS-en og komfortabel med å bruke den, kan det være en god idé å sette `auto-send` til 1 for å få mindre tilskyndelser og hurtigere fremgang.

### mms start\_auto\_config

    mms start_auto_config [<label> <label> ...]

Eksempel:

    mms start_auto_config bob trent

Starter en auto-config-prosess i lommeboken til «config-lederen» ved å opprette auto-config-tokens for hver signerer bortsett fra «meg», dvs. den første, og utfører en `mms signer`-kommando for å vise tokensene. Den ber om bekreftelse dersom auto-config tilsynelatende allerede kjører, fordi det allerede finnes tokens for signerere i signererkonfigurasjonen.

Lederen må overføre auto-config-tokensene til de respektive signererne utenfor MMS-en. Mer at disse tokensene består av sensitiv informasjon: En token i hånden på en ikke-signerer eller i hånden på en feil signerer vil gjøre at den personen kan imitere den rettmessige signereren, dvs. ta del i alle transaksjonene i stedet for signereren.

En forutsetning for å starte auto-config er at *alle* signerere har fått tildelt en merkelapp. Ideen er at auto-config etablerer de **samme** merkelappene i lommebøkene til alle signerere for å gjøre det klart for alle hvem som er hvem. (Kun rekkefølgen til signererne i hver lommebok vil være annerledes fordi eieren av lommeboken alltid vil være signerer #1.) Senere står signererne fritt til å endre merkelappene de ikke liker så lenge det ikke er fare for at det forvirrer signerere, så klart.

Du kan etablere merkelapper for alle signerere ved å på forhånd bruke `mms signer`-kommandoen, eller enklere med `mms start_auto_config`-kommandoen ved å liste opp alle merkelapper bortsett fra merkelappen for «meg» i riktig rekkefølge som kommandoargumenter.

Kommandoen kan i bunn og grunn eksekveres når som helst, selv om det selvfølgelig gir mest mening i begynnelsen der det for lommeboken til alle signererne kun er `mms init`-kommandoene som har blitt eksekvert.

Sjekk kapittelet *Auto-Config* for en beskrivelse av følgende steg etter denne kommandoen.

### mms auto\_config

    mms auto_config <auto_config_token>

Eksempel:

    mms auto_config mms561832e3eb

Behandler en auto-config-token som du mottok fra «config-lederen» i løpet av en auto-config-prosess gjennom en rimelig sikker kommunikasjonskanal utenfor MMS-en, dvs. SMS, meldingsapp på smarttelefon, kryptert e-post eller telefonanrop. Hver signerer får sin egen, distinkte token. Behandle alle MMS-auto-config-tokens som konfidensiell informasjon.

Dette vil resultere i en melding av typen `auto-config data` som kan sendes til din Bitmessage-adresse og din Monero-adresse som kan sendes til lederen. (Overføring av den meldingen er allerede så sikker som en senere MMS-melding, såfremt ingen andre kjenner til din token.)

Det er litt overbærenhet i måten MMS-en tolker innkommende tokens (de skiller f.eks. ikke mellom store og små bokstaver), og skrivefeil vil svært sannsynlig resultere i en ugyldig token og oppdages.

Hvis det ble bestemt å gjøre auto-config, er det best å avstå fra å legge inn signererinformasjon manuelt på egenhånd med `mms signer`. (MMS-en vil imidlertid ikke hindre det.)

Se kapittelet *Auto-Config* for en komplett liste over alle stegene i en auto-config-prosess.

### mms stop\_auto\_config

    mms stop_auto_config

Slett eventuelle auto-config-tokens fra signererkonfigurasjonen og stopp på den måten eventuelle auto-config-prosesser som kjører.

Slettede tokens kan ikke gjenopprettes eller konstruerer på nytt, i og med at de er tilfeldige. Hvis du er «config-lederen» og sletter tokens, vil du aldri kunne motta auto-config-meldinger igjen som andre signerere sender til deg ved å bruke de slettede tokensene. (Ingen andre vil imidlertid motta dem heller.) Alle vil trenge nye tokens som er utstedt av deg.

### mms send\_signer\_config

    mms send_signer_config

Denne kommandoen sender manuelt din komplette signererkonfigurasjon til alle andre signerere som meldinger av typen `signer config`. Etter å ha mottatt melding din, vil de kunne erstatte signererkonfigurasjonen sin med din med en `mms next`-kommando. Det kommer en sikkerhetstilskyndelse før dette skjer.

Hver signerer og vil få sin merkelappen sin overskrevet med merkelappen du la inn for dem, men sin egen Bitmessage- og Monero-adresse vil bevares.

Denne kommandoen og dens mulighet til å «kringkaste» en bestemt signererkonfigurasjon kan tjene som en byggestein for noe som en «semi-auto-config». Se også kapittelet *Sending av signererkonfigurasjon*. Å sende uten en komplett signererkonfigurasjon er også en del av en helautomatisk konfigurasjon, selv om man ikke trenger en separat `mms send_signer_config`-kommando for det.

## Sikkerhet

MMS-en ble nøye utformet og implementert som et system som tilbyr en høy grad av sikkerhet.

Noe som for øvrig ikke var spesielt lett: Monero multisig er i seg selv allerede en mangesidig, om ikke annet kompleks situasjon, og derfor ikke triviell å sikre, og MMS-en er et kraftfull, for ikke å nevne komplekst system, så det er ikke rart at det finnes forskjellige mulige sikkerhetsproblemer.

Mer at dette er den **første** versjonen av MMS-en, og det kan være slik at folk som bruker den på forskjellige måter vil avdekke nye sikkerhetsproblemer utover de som er nevnt her eller la noen av dem vises i et annet lys. Det er imidlertid grunn til håp om at MMS-en ikke har noen dype og grunnleggende «ureparerbare», konseptuelle mangler.

Kortversjon: Hvis du er i tvil, begynn kun å bruke MMS-en etter du har konfigurert multisig-lommebøkene dine på egenhånd, og formodentlig på sikrere måter enn MMS-en kan tilby (ikke trivielt, men gjennomførbart). Hvis i enda mer tvil, ikke bruk MMS-en.

### Bruk av kryptering og signaturer

Alt meldingsinnhold krypteres ved å enten bruke Monero-visningsnøklene til signerernes Monero-lommebøker eller med tilfeldig genererte nøkler av samme styrke i tilfelle av auto-config-meldingsinnhold. Dette kan virke litt overdrevent med tanke på at PyBitmessage allerede krypterer alle meldingene selv, men PyBitmessage er for det første en tredjepartsprogramvare som du kanskje ikke vil stole på, og for det andre er MMS-en med denne funksjonen til en viss grad allerede forberedt på mindre sikre kommunikasjonssystemer som ikke krypterer seg selv.

Meldinger signeres av senderen ved å bruke sine private nøkler. Dette brukes for autentisering: MMS-en vil avvise en melding fra en signerer som ikke bærer en gyldig signatur som kun den signereren, og ingen andre kunne ha laget. En hash sikrer dessuten meldingsinnholdet mot eventuelle endringer. Avslutningsvis er det kun meldinger fra signerere som godtas: En melding fra en Monero-adresse som ikke er oppført i signererkonfigurasjonen blir avvist, selv om den bærer en gyldig signatur.

Visningsnøkkelen brukes også til å kryptere innholdet av `.mms`-filen som inneholder signererkonfigurasjon og alle sendte og mottatte meldinger.

Hva gjelder dataoverføringssikkerhetskrav, bør man fremdeles sannsynligvis holde seg realistisk: Du ønsker selvfølgelig ikke at de ulike datapakkene som blir stokket frem og tilbake mellom signerernes lommebøker ender opp i feil hender, men det hadde ikke vært lett å påføre ordentlig skade for en angriper som har kontroll på noen av disse dataene. Hele poenget med multisig er tross alt at kun en gruppe mennesker som **samarbeider** kan signere og sende inn en transaksjon. En angriper som får tak i en delvis signert transaksjon, vil ikke kunne gjøre mye med den.

(En angriper som tjuvlytter på **all kommunikasjon** fra begynnelsen, kan sannsynligvis, dersom dataene ikke var kryptert, samle inn alle nøklene og bygge en velfungerende Monero-«enkel-sig»-lommebok for multisig-adressen og stjele myntene, men det er et drastisk scenario, og data som sendes av MMS-en **er** kryptert.)

### Kommunikasjon mellom MMS og PyBitmessage

Kommunikasjon mellom MMS og PyBitmessage er dessverre ikke kryptert. Her brukes HTTP, ikke den krypterte motparten, HTTPS. Meldingsinnhold er selvsagt kryptert **før** MMS-en overfører en melding til PyBitmessage, og eventuelle endringer i innhold ville ha blitt oppdatert når meldinger mottas, men noen som lytter kan snappe opp ting fra «metadataen»: Hvem som sender hva til hvem, og når.

Så lenge Monero-lommeboken din med MMS og PyBitmessage kjører på samme maskin, er det ikke en stor fare i seg selv, fordi alle som kan lytte til en slik strengt lokal kommunikasjon `localhost` til `localhost` sitter allerede inni PC-en din, og da har du nok tapt uansett, og da er trojanen som lytter til trafikken mellom MMS-en og PyBitmessage det siste du trenger å bekymre deg om.

Men på grunn av dette, er det ingen god idé å sette opp en PyBitmessage-instans som kan nås over internett, som en slags «offentlig node».

Det er også et annet problem: PyBitmessage-API-en er kun sikret av et brukernavn og et passord som må overføres i klartekst for hver HTTP-forespørsel. Det er ikke vanskelig for en angriper å plukke opp brukernavn og passord og starte et slags DOS-angrep, f.eks. ved å slette alle meldinger i intervaller på 10 sekunder.

(I PyBitmessages forsvar må det nevnes at det **ikke** var designet som en server som kan møte det store, vide internett, men som et program som man kjører lokalt; det er ikke særlig overraskende at å kjøre det utenfor dets tiltenkte bruk kan føre til problemer.)

### Etterligning

Hvis Alice (kjøperen) og Bob (selgeren) bruker 2/3 multisig for *escrow*, vil Trent være den pålitelige tredjepersonen som kan megle i tilfelle problemer og enten hjelpe Alice med å få pengene sine tilbake dersom Bob ikke leverer ved å signere en transaksjon som ble startet av Alice, eller hjelpe Bob med å få pengene sine dersom Alice tilsynelatende har mottatt godene sine, men later som annet og nekter å signere betalingen til Bob.

I denne *escrow*-situasjonen ønsker du egentlig **tre** adskilte personer i spill. Hvis Bob på noen måte kan *etterlikne* Trent ved å utgi seg for å være ham, etterlikne for Alice å være både Bob og Trent og sette opp **to** forskjellige lommebøker med to sett med nøkler, vil Bob kunne gjøre disse 2/3 multisig-transaksjonene gyldig helt alene og dermed jukse.

Hvor stor denne faren ved å etterlikne er, avhenger av hvor sikker den opprinnelige utvekslingen av nøkkelsett er ved begynnelsen av hele prosessen når man konfigurerer lommebøkene og endelig «går multisig»: Hvis du kan forsikre om at kun de riktige personene får de riktige nøkkelsettene og ingen kan utgi seg for å være en annen, er alt i orden. Hvis ikke, kan du tape.

Hvis du bruker alle kapabilitetene til MMS-en, bruker du den ikke bare til å foreta transaksjoner med, men allerede før for å utveksle nøkkelsett mellom alle signerere. Spesielt for høyere former for multisig som 2/4 med flere runder med nøkkelutveksling, er dette svært hjelpsomt og innehar en mindre fare for å begå feil enn noen manuelle prosesser. Så oppgaven med å forebygge etterlikning går over fra å sikre utvekslingen av nøkler til å sette opp en signerer-adresse i MMS-en på en sikker måte: Hvis Bob noen måte kan lure Alice til å godta én av **hans** Monero- og Bitmessage-adresser i stedet for Trent sine, har han vunnet.

De tre måtene å sette opp signereradresser som MMS-en støtter, manuell konfigurering av signerere, auto-config og «semiautomatisk» sending av fullført signererinformasjon, har alle forskjellige risikoer knyttet til dem hva gjelder etterlikning. Sjekk de respektive kapitlene *Manuell konfigurering av signerere*, *Auto-Config* og *Sending av signererinformasjon* for mer informasjon om dette.

Auto-config er utvilsomt det enkleste å sikre: Du trenger bare en liten del med informasjon og en auto-config-token på 11 tegn for å sende sikkert til hver signerer, og hvis du kan gjøre det, har du allerede vunnet. («Config-lederen» antar selvsagt å være pålitelig.)

Hvis alt dette høres for komplisert og derfor upålitelig ut for deg, har du muligheten til å konfigurere lommebøker og etablere multisig-adressen mens du utelater MMS-en helt og kun bruker den senere for å komfortabelt sende delvis signerte transaksjoner rundt og avløse deg fra de langtekkelige, manuelle synkroniseringene av lommebøkene etter hver transaksjon.

### Angrepskontrollerte data

Det er to situasjoner der lommeboken din som bruker MMS mottar data fra en annen signerer, der den andre signereren, hvis vedkommende handler med onde hensikter, kan prøve å bedra deg eller lure deg til å gjøre noe skadelig:

Notater som sendes med `mms note`-kommandoen kan brukes for «sosialteknikk». En angriper kunne f.eks. ha prøvd å formulere et notat som ser ut som en feilmelding i et forsøk på å svindle. De tekniske mulighetene her er imidlertid ganske begrensende: Notater begrenser seg strengt til tekst, og når de vises, filtrerer MMS-en ut tegn som inneholder ASCII-koder som har en lengde på under 32 tegn og de to tegnene < og > som kan brukes til å bygge HTML eller XML som på en eller annen måte kan tolkes (veldig usannsynlig i CLI-lommeboken, men noe mer sannsynlig i GUI-baserte lommebøker). Notatene har også en grense på maksimal lengde.

Den andre måten er et forsøk på å svindle med merkelapper som sendes gjennom `mms send_signer_config`. Bob kan merke Alice som *trent* og Trent som *alice*, sende den signererkonfigurasjonen til Alice og slik overtale henne til å bruke den. Dette er grunnen til at en melding av typen `signer config`, hvis den sendes utenfor auto-config med en tydelig `mms send_signer_config`, ikke behandles med en gang, men først vises sammen med en bekreftelsesmelding.

## Feilsøking

### Å løse synkroniseringsproblemer

Som forklart i kapittelet *Synkronisering av lommebøker*, krever Monero multisig utveksling av noen data mellom lommebøkene etter å ha sendt, i tillegg til å ha mottatt transaksjoner, som i MMS-en kalles for *multisig-synkroniseringsdata.

Av og til går ting ut av synk. Det er fire mulige tegn på at dette kan ha skjedd:

* `balance`-kommandoen viser meldingen *Enkelte eide utdata har delvise nøkkelbilder - import\_multisig\_info trengs* som «nekter å forsvinne»
* Lommeboken melder om at *Den signaturen ble laget med foreldet data* og nekter å behandle en transaksjon ytterligere
* Lommeboken gjør deg oppmerksom på om manglende nøkler når du prøver å signere en transaksjon
* Lommeboken anklager deg for forsøk på dobbeltforbruk der du sannsynligvis ikke har prøvd på noe slikt

I noen tilfeller mislykkes MMS-en i å bli oppmerksom på problemet og forteller deg bare etter `mms next` at det ikke er noe å gjøre, annet enn å starte en synkroniseringsrunde.

På grunn av dette, finnes det en måte å når som helst **tvinge synkronisering**:

* Alle signerere eksekverer en `mms sync`-kommando i stedet for å bare ta `mms next` for å sende synkroniseringsinformasjon til hverandre
* Etter å ha mottatt disse meldingene, eksekverer alle signerere en `mms next sync`-kommando. Merk det ekstra argumentet `sync`

For at synkroniseringen skal virke, må all informasjon være fra samme «høyden», dvs. produsert med samme antall overføringer som er registrert i lommeboken til alle signerere: Hvis for eksempel én signerer ikke mottar en transaksjon og sender ut synkroniseringsinformasjon i denne tilstanden, vil det ikke ha noen verdi til andre signerere som har fullstendige lommebøker.

Hvis det virker som MMS-en ignorerer synkroniseringsdata som enda ikke er behandlet i `waiting`-status, gjør den det mest sannsynlig av denne grunnen. Hvis du er i tvil, kan du sjekke `Height`-kolonnen i en meldingsliste som du henter med `mms list`.

Av og til kan slike meldinger som enda ikke er behandlet og som har blitt ubehandlbare, «spenne ben på» `mms next`-kommandoen. Hvis dette skjer, kan du bruke `mms delete` for å slette eventuelle meldinger som har en for lav høyde.

### Omdirigering av en transaksjon til en annen signerer

Hvis du i tilfeller som 2/3 multisig har sendt en delvis tx til noen, men senere angrer og heller vil sende den til en annen, finnes et lite triks for å gjøre dette: Finn meldingen av typen `partially signed tx` som er adressert **til deg selv** og eksekver en `mms send`-kommando for den meldingen. Etter den er mottatt, foretar du en `mms next`. Du vil fremdeles bli gitt et valg igjen om hva du vil gjøre med den.

Du står selvfølgelig fritt til å ignorere den transaksjonen og starte en ny en. Bare vit at denne nye transaksjonen senere kan støte på en veisperring hvis den første blir fullt signert og sendt inn til nettverket **før** den andre transaksjonen.

### Ignorering av usamarbeidsvillige signerere under synkronisering

Den normale synkroniseringsprosessen for MMS-lommeboken antar at alle signerere samarbeider og sender ut synkroniseringsdatameldinger etter å ha sendt eller mottatt en transaksjon. `mms next` vil som regel derfor vente til den har synkroniseringsdatameldinger (for den samme «høyden») fra **alle** andre signerere før de blir behandlet.

Der *M* er mindre enn *N* i konfigurasjoner som 2/3 multisig, kan du imidlertid synkronisere med kun (antall nødvendige signerere minus 1) synkroniseringsmeldinger. `mms next` vil fortelle deg når du har nådd denne lavere terskelen og gi et hint om hvordan å overkjøre og fortsette tidlige: Bruk `mms next sync`.

Hvis du senere mottar mer synkroniseringsdatameldinger, kan du dog slette dem med `mms delete`: De trengs ikke og er ubehandlbare for deg, og i verste fall vil de rote til hele neste synkroniseringsrunden.

Hvis du setter i gang en synkronisering, vil MMS-en vanligvis opprette meldinger til *alle* andre signerere. Hvis du vil hindre dette for å gjøre det så vanskelig som mulig for andre signerere å foreta ytterligere transaksjoner, må du sørge for å sette `auto-send` til «false», svare «No» når du først blir bedt om å sende, og manuelt slette eventuelle uønskede meldinger før resten sendes ut med `mms send`.

### Gjenoppretting av tapte eller dupliserte meldinger

Hvis du av en eller annen grunn går glipp av en melding fordi PyBitmessage ikke klarte å levere den eller fordi du slettet den for tidlig, kan du spørre senderen av meldingen om å sende den igjen ved å bruke `mms send`-kommandoen.

Merk at meldinger som sendes flere ganger *ikke* automatisk nuller hverandre ut på mottakerenden. Hvis du sender på nytt, f.eks. bare fordi noen er utålmodig, kan den adresserte signereren ende opp med å motta *to* meldinger av samme type med samme innhold.

Hvis den manglende meldingen senere vises, er ikke det bra, men du kan løse dette enkelt ved å bruke en `mms delete`-kommando og bli kvitt én av de to kopiene.

### Korrigering/oppdatering av signererinformasjon

Du kan bruke `mms signer`-kommandoen for å endre en merkelapp `bob` som du ikke lenger liker:

    mms member 2 bob-the-builder

Med ett argument til kan du ved behov endre Bitmessage-adresser:

    mms member 2 bob BM-2cSrgmut9AD6bdU8b8GXd36iUYDjCS9xJb

Du kan til og med endre Monero-adresser på samme måte (med unntak av din egen, selvfølgelig), men med en begrensning, så lenge det ikke finnes noen mottatte meldinger. Så snart lommebøkene er av typen multisig, gir det ikke lenger mening å endre noen Monero-adresser lenger allikevel.

### Å starte fra bunn

Hvis statusen på MMS-en for en lommebok er forkludret til den grad det ikke kan fikses og du ønsker å starte fra bunn, eller om du vil stoppe ved å bruke MMS-en for en bestemt lommebok, kan du finne lommebokfilene i filsystemet og bare slette filen som inneholder `.mms`-utvidelsen.

### Interaksjoner med MMS/PyBitmessage

Her er noen detaljer om interaksjonen mellom MMS-en og PyBitmessage for å bedre forstå eventuelle problemer som kan oppstå der:

MMS-en prøver å begrense antallet meldinger som hoper seg opp i PyBitmessages lagring og sletter dem. For forbedret pålitelighet, sletter den imidlertid ikke rett etter å ha allerede mottatt, men kun etter en melding endrer statusen fra `waiting` (venter) til `processed` (behandlet), eller om du sletter den fra meldingslagringen. Av og til blir meldinger foreldreløse, og MMS-en har ingen sjanse til å slette dem; du kan trygt slette slike meldinger interaktivt i PyBitmessage.

Hvis du bruker auto-config, vil nye adresser/identiteter automatisk opprettes i PyBitmessage for MMS-en. Den prøver å slette disse etter å ha fullført config, men merk at den gjeldende versjonen av PyBitmessage fortsetter å vise slettede adresser frem til det beste programmet starter på nytt: I prinsippet ufarlig, men allikevel noe forvirrende.

Hvis slike dynamisk auto-config-adresser ikke slettes i det hele tatt, f.eks. fordi du sletter en lommebok i forkant, virker det dessverre som det ikke er noen enkel måte i den nåværende PyBitmessage-versjonen å bli kvitt dem: Du vil måtte manuelt finne og redigere `keys.dat`-filen og slette de tilhørende linjene (og forhåpentligvis ikke forårsake skade på noe annet inni der …)

Av og til virker det som meldinger blir sittende fast og ikke blir sendt ut. I slike tilfeller kan du prøve å starte PyBitmessage på nytt.
