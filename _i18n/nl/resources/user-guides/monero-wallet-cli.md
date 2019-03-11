{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
# monero-wallet-cli

`monero-wallet-cli` is de portemonnee-software die onderdeel uitmaakt van de Monero-code. Het is een consoleprogramma
waarmee je een account beheert. Terwijl een Bitcoin-portemonnee zowel een account als de blockchain beheert,
worden deze functies in Monero gescheiden: `monerod` beheert de blockchain en `monero-wallet-cli` beheert het account.

In deze handleiding wordt uitgelegd hoe je verschillende bewerking uitvoert met de interface van `monero-wallet-cli`. We nemen aan dat je de nieuwste versie van Monero gebruikt en al een account hebt gemaakt met behulp van andere handleidingen.


## Je saldo bekijken

Omdat we een ander programma dan de portemonnee gebruiken om met de blockchain te werken, moet `monero-wallet-cli` voor veel toepassingen
samenwerken met de node. Dit is bijvoorbeeld nodig om binnenkomende transacties voor je adres op te zoeken.
Wanneer `monero-wallet-cli` en `monerod` beide worden uitgevoerd, voer je `balance` in.

Voorbeeld:

Hiermee worden blokken uit de node opgehaald die de portemonnee nog niet gezien heeft, en wordt je saldo navenant
bijgewerkt. Dit proces wordt normaal ongeveer één keer per minuut in de achtergrond uitgevoerd. Zo geef je het saldo weer
zonder te vernieuwen:

    balance
    Balance: 64.526198850000, unlocked balance: 44.526198850000, including unlocked dust: 0.006198850000

In dit voorbeeld is `Balance` je totale saldo. De `unlocked balance` is het bedrag dat momenteel beschikbaar is om uit te geven. Voor nieuw ontvangen transacties zijn 10 bevestigingen op de blockchain nodig om ze te ontgrendelen. Met `unlocked dust` worden minuscule hoeveelheden *unspent outputs* bedoeld die als een soort stof in je account zijn terechtgekomen.

## Monero verzenden

Wat je nodig hebt is het standaardadres waaraan je wilt betalen (een lange tekenreeks die begint met een 4), en
eventueel een betalings-ID als de ontvangende partij daarom vraagt. In dat geval kan de begunstigde
ook een geïntegreerd adres opgeven, waarbij het standaardadres en de betalings-ID in één adres worden verpakt.

### Verzenden naar een standaardadres:

    transfer ADRES BEDRAG BETALINGSID

Vervang `ADRES` door het adres waaraan je wilt betalen, `BEDRAG` door hoeveel Monero je wilt betalen
en `BETALINGSID` door de betalings-ID die je hebt ontvangen. Betalings-ID's zijn optioneel. Als de ontvangende partij er geen nodig heeft, kun je
de ID gewoon weglaten.

### Verzenden naar een geïntegreerd adres:

    transfer ADRES BEDRAG

Hier is de betalings-ID opgenomen in het geïntegreerde adres.

### Het aantal outputs in een transactie opgeven:

    transfer RINGGROOTTE ADRES BEDRAG

Vervang `RINGGROOTTE` door het aantal outputs dat je wilt gebruiken. **Als je niets opgeeft is de standaardwaarde 11.** Het is beter om de standaardwaarde te gebruiken, maar je kunt eventueel een hoger aantal opgeven als ze meer outputs wilt meenemen. Hoe hoger het aantal, des te groter de transactie en des te hoger de transactiekosten.


## Monero ontvangen

Als je zelf een Monero-adres hebt, kun je gewoon je standaardadres aan iemand doorgeven.

Met de volgende opdracht krijg je je adres te zien:

    address

Aangezien Monero anoniem is, kun je niet zien van welk adres het geld dat je ontvangt afkomstig is. Als je
dat wilt weten, bijvoorbeeld om een betaling aan een klant te koppelen, moet je de afzender vragen
een betalings-ID te gebruiken. Dat is een willekeurige optionele tekenreeks dat wordt toegevoegd aan een transactie. Voor het gemak
kun je een adres genereren dat al een willekeurige betalings-ID bevat:

    integrated_address

Hierdoor wordt een willekeurige betalings-ID gegenereerd en krijg je een adres waarin je eigen account en de
betalings-ID worden samengevat. Het is ook mogelijk om een bepaalde betalings-ID te kiezen als je dat wilt:

    integrated_address 12346780abcdef00

Betalingen aan een geïntegreerd adres dat jij hebt gegenereerd gaan naar jouw account
met vermelding van die betalings-ID, zodat je betalingen kunt onderscheiden.


## Aan een derde bewijzen dat je iemand hebt betaald

Als je een verkoper betaalt, en de verkoper beweert dat hij/zij het geld niet heeft ontvangen, wil je misschien
aan een derde bewijzen dat je het geld wel degelijk hebt verzonden - of aan de verkoper zelf, als het een eerlijke
vergissing is. Monero is vertrouwelijk, dus je kunt niet zomaar je transactie aanwijzen op de blockchain,
want daar is niet te zien wie een transactie heeft verzonden of ontvangen. Maar je kunt iemand wel de privésleutel van een transactie
geven, zodat die kan zien of die transactie Monero naar dat
adres heeft verzonden. Houd er rekening mee dat het opslaan van deze transactiesleutels standaard is uitgeschakeld.
Je moet deze functie voor het verzenden inschakelen als je denkt dat je deze misschien nodig hebt:

    set store-tx-info 1

Je kunt de transactiesleutel van een eerdere transactie ophalen:

    get_tx_key 1234567890123456789012345678901212345678901234567890123456789012

Voer hierbij de ID in van de transactie waarvoor u de sleutel wilt hebben. Houd er rekening mee dat een betaling kan zijn gesplitst
in meer dan één transactie, zodat je meerdere sleutels nodig hebt. Vervolgens kun je de sleutel
of sleutels opsturen naar wie je het bewijs van je transactie wilt laten zien, met de
transactie-ID en het adres van de ontvanger erbij. Opmerking: als deze partij ook je eigen
adres kent, kan deze ook zien hoeveel wisselgeld je hebt teruggekregen.

Als je zelf de derde partij bent (dus als iemand aan jou wilt bewijzen dat hij/zij Monero naar een bepaald
adres heeft verzonden), kun je dat op deze manier controleren:

    check_tx_key TXID SLEUTEL ADRES

Vervang `TXID` door de transactie-ID, `SLEUTEL` door de transactiesleutel en `ADRES` door het doeladres
dat je hebt ontvangen. Vervolgens controleert monero-wallet-cli die transactie
en laat het weten hoeveel door deze transactie aan het opgegeven adres is betaald.


## Instellen dat je betalingen kunt bevestigen/annuleren

Als je een laatste kans wilt krijgen om een betaling te bevestigen of annuleren:

    set always-confirm-transfers 1


## Een betaling aan jou vinden

Als je een betaling met een bepaalde betalings-ID hebt ontvangen, kun je deze opzoeken:

    payments BETALINGSID

Je kunt ook meer dan één betalings-ID opgeven.

In het algemeen kun je binnenkomende en uitgaande betalingen bekijken:

    show_transfers

Je kunt een optionele blokhoogte opgeven om alleen recente transacties te ontvangen, en je kunt
alleen binnenkomende of uitgaande transactie opvragen. Bijvoorbeeld:

    show_transfers in 650000

levert alleen binnenkomende overboekingen na blok 650.000 op. Je kunt ook een bereik van blokhoogten
opgeven.

Als je wilt minen, kun je dat ook vanuit de portemonnee doen:

    start_mining 2

Hiermee gebruik je twee CPU-threads om te minen via de daemon. Let op: dit is solo minen;
het kan lang duren voordat je een blok vindt. Om te stoppen met minen:

    stop_mining

