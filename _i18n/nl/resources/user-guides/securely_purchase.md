{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
## Monero kopen en veilig opslaan

Dit is een handleiding voor het aanschaffen en veilig opslaan van Monero, geschreven in juni 2017.

#### Stap 1. Koop Bitcoin

Je kunt op allerlei manieren Bitcoin kopen. Twee min of meer betrouwbare bedrijven zijn op dit moment Xapo <http://www.xapo.com/> en Coinbase <http://www.coinbase.com/>. Hiervoor is het nodig om een kopie van je identiteitsbewijs (paspoort, rijbewijs of identiteitskaart) te uploaden. Verificatie van je identiteit kan 2 tot 10 dagen duren (of langer).  Controleer de reputatie van een exchange voordat je een grote aankoop doet.  Xapo gebruikt elektronische overboekingen en Coinbase gebruikt bankoverschrijvingen (ACH in de VS).  Xapo zal waarschijnlijk sneller werken dan Coinbase.  Coinbase biedt ook de mogelijkheid om "instant" kleine bedragen te kopen met een betaalpas, maar rekent hoge kosten voor deze optie. Nadat je Bitcoin hebt gekocht, kun je ze omwisselen voor Monero.

#### Stap 2. Download en maak een papieren portemonnee (paper wallet) op een veilige computer die niet verbonden is met internet.

Download de *paper wallet generator* op https://moneroaddress.org en kopieer deze naar een USB-stick. (Directe link: https://github.com/moneromooo-monero/monero-wallet-generator/archive/master.zip).

Pak de *paper wallet generator* uit en open deze (monero-wallet-generator.html) in een browser op een offline computer die nog nooit is gebruikt, of waarop het besturingssysteem opnieuw is geïnstalleerd.

De papieren portemonnee bestaat uit vier belangrijke onderdelen:

Openbaar Monero-adres
Het openbare adres wordt gebruikt om geld in de portemonnee te ontvangen.  Je kunt dit adres aan iedereen geven die jou wil betalen.

Monero-hersteltekst
Met de hersteltekst wordt de hele portemonnee opgeslagen op een manier die begrijpelijk is voor mensen.  Dit is alles wat je nodig hebt om later je portemonnee te herstellen.

Privé-bestedingssleutel
De privé-bestedingssleutel wordt gebruikt om geld vanuit de portemonnee te verzenden.

Privé alleen-lezen sleutel
De privé alleen-lezen sleutel is bedoeld om te bekijken welke transacties worden ontvangen door de portemonnee. Deze wordt vaak gebruikt om een alleen-lezen portemonnee voor *cold storage* (koude opslag) te maken, zodat je direct op de blockchain kunt zien welke transacties daar binnenkomen.

Op dit punt heb je allerlei opties.  Je kunt de portemonnee op papier afdrukken, opslaan als een PDF of een tekstbestand op een USB-stick, op een cd of dvd branden enzovoort. Het wordt aangeraden om tenminste twee of drie exemplaren op verschillende plekken op te slaan.  Versleutel alles met een sterk wachtwoord als je de portemonnee digitaal bewaart.  Als je de portemonnee op papier bewaart, laat hem dan niet zien aan iemand die je hersteltekst van 25 woorden kan onthouden of zonder je toestemming een foto van de portemonnee kan maken.  Iemand een foto van de portemonnee sturen is hetzelfde als al het geld weggeven.

Welke methode je ook kiest, zorg ervoor dat er geen exemplaar van de Monero-portemonnee achterblijft op het apparaat dat je hebt gebruikt.  Eventueel moet je de Monero-portemonnee veilig verwijderen als je hem op een schijf hebt opgeslagen, of controleren of je printer geen exemplaar heeft opgeslagen in zijn geheugen.

*Als je de toegang tot je papieren Monero-portemonnee kwijtraakt, ben je de Monero die erop staan voorgoed kwijt.  Niemand kan je helpen om ze terug te krijgen!*

#### Kanttekening
Je kunt een XMR-hersteltekst versleutelen met:
https://xmr.llcoins.net/
Download de html-pagina en breng die naar je offline computer. Vink de optie "Encrypt/Decrypt Mnemonic Seed" aan en gebruik "CN Add" met een degelijk wachtwoord. Met dank aan manicminer5.



#### Stap 3. Wissel je Bitcoin om voor Monero en laat je Monero naar je papieren portemonnee sturen.

Ga op je computer met een internetverbinding naar www.shapeshift.io. Kies "Bron: Bitcoin", "Doel: Monero" en "Snel".

Klik op Doorgaan.

Je Monero adres (bestemmingsadres)
Plak hier het openbare Monero-adres uit je papieren portemonnee in het tekstvak waar "Je Monero adres" staat.   Maar wacht even: je openbare Monero-adres staat op een offline computer (toch?) dus je kunt het niet kopiëren en plakken.  Kopieer het met de hand, of kopieer alleen het openbare adres naar een lege USB-stick.

Je Bitcoin adres voor het omgewisselde bedrag
Voer een Bitcoin-adres in dat eigendom van jou is, zodat je daar een terugbetaling kunt ontvangen als er een probleem is met de transactie.  Het is erg belangrijk dat je een openbaar Bitcoin-adres invoert dat eigendom van jou is en waar je geld kunt ontvangen.  Bij Xapo en Coinbase heet dit een Receive Address (ontvangstadres). Het kan af en toe gewijzigd worden.

Payment Id
Laat Payment Id (Betalings-ID) leeg als je Monero naar je eigen portemonnee of papieren portemonnee verzendt.

Ga akkoord met de voorwaarden en klik op de schuifknop "Bewaren Adres?" om er een herbruikbaar adres van te maken.  

Klik op "Transactie starten".

Stortingsadres (het openbare Bitcoin-adres van Shapeshift.io dat alleen is bestemd voor het ontvangen van je geld)
In het nieuwe scherm dat wordt weergegeven kopieer je het stortingsadres onder "Verzonden naar dit adres" naar je klembord (selecteer het en druk op Ctrl-C of klik op Bewerken - Plakken).  Via dit adres verzend je Bitcoin van Xapo/Coinbase naar Shapeshift.io.

Ga naar je Xapo- of Circle-account en zoek de knop Transfer of Send op. Plak het Bitcoin-stortingsadres in het veld Destination en voer in hoeveel Bitcoin je wilt laten omwisselen voor Monero.  Het bedrag moet binnen het door Shapeshift.io opgegeven bereik voor Minimaal inlegbedrag en Maximaal inlegbedrag vallen.  Klik op Send en autoriseer indien nodig de transactie.

Nadat het verzenden is gestart door Xapo/Coinbase, moet je wachten terwijl de transactie op de Bitcoin-blockchain wordt vastgelegd en bevestigd.  Dit kan minuten of uren duren.  Je kunt controleren of de betaling is verzonden door het stortingsadres bij Shapeshift.io op te zoeken op blockchain.info.  Daar wordt je transactie naar Shapeshift.io weergegeven.

Nadat je Bitcoin-transactie is bevestigd, begint Shapeshift.io met het omwisselen van Bitcoin (BTC) voor Monero (XMR) op een van de exchanges. Wanneer dat klaar is, wordt je Monero verzonden naar het adres van je papieren portemonnee voor cold storage.  Dit kan minuten tot uren duren.  Neem contact op met Shapeshift.io als er een probleem is.  Hun ondersteuning is goed.

Wanneer de transactie volgens de webpagina van Shapeshift.io is voltooid, zou je Monero in je papieren portemonnee moeten hebben.


### Opmerkingen en het verifiëren van je saldo
Omdat de Monero-blockchain vertrouwelijk en niet volgbaar is, kun je niet je openbare Monero-adres opzoeken om te bevestigen dat het geld is aangekomen, zoals je met Bitcoin zou kunnen doen.  Dit is goed voor je privacy, maar minder gemakkelijk.

Je hebt een alleen-lezen portemonnee nodig om veilig te controleren of je geld is aangekomen in je portemonnee.  Daarvoor heb je die alleen-lezen sleutel bewaard. Zie de handleiding voor het maken van een alleen-lezen portemonnee: [Een alleen-lezen portemonnee maken]({{site.baseurl}}/resources/user-guides/view_only.html)

Om te controleren of het geld *nog steeds in* je portemonnee zit en niet uitgegeven is, moet je een 'koude' portemonnee (cold wallet) maken met je hersteltekst (voor al je geld) op een offline computer waar een bijgewerkt exemplaar van de Monero-blockchain op staat. Wanneer je daarmee klaar bent, moet je de portemonnee veilig wissen of met internet verbinden zodat het een 'hot wallet' wordt.



