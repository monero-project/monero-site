---
summary: 'automatiske engangsadresser for hver transaksjon'
terms: ["stealth-address", "stealth-addresses", "stealth-adresse", "stealth-adresser"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

Stealth-adresser er en viktig del av Moneros iboende personvern. De tillater
og krever at senderen oppretter tilfeldige engangsadresser for hver
@transaksjon på vegne av mottakeren. Mottakeren kan publisere kun én adresse
og allikevel få alle innkommende betalinger til å gå til unike adresser på
@blokkjeden hvor de ikke kan lenkes tilbake til enten mottakerens publiserte
adresse eller adresser til andre transaksjoner. Ved å bruke
stealth-adresser, kan kun senderen og mottakeren fastslå hvor en betaling
ble sendt til.

Når du oppretter en Monero-konto, får du en privat @visningsnøkkel, en
privat @forbruksnøkkel og en offentlig adresse. @Forbruksnøkkelen brukes til
å sende betalinger, @visningsnøkkelen brukes til å vise innkommende
transaksjoner som er bestemt for kontoen din, og den offentlige adressen er
for å motta betalinger. Både @forbruksnøkkelen og @visningsnøkkelen brukes
til å bygge Monero-adressen din. Du kan ha en «kun visning»-lommebok som kun
bruker @visningsnøkkelen. Denne funksjonen kan også brukes i bokførings-
eller revisjonsøyemed, men er for tiden upålitelig fordi den ikke kan spore
utgående transaksjoner. Du kan bestemme hvem som kan se Monero-saldoen din
ved å dele @visningsnøkkelen din. Monero er privat som standard, men kan
etter eget valg også være delvis gjennomsiktig!

Alt dette håndteres av programvaren når man bruker Monero-lommeboken. Å
sende Monero er like lett som å legge inn en destinasjonsadresse og beløpet
og å trykke på «Send». For å motta Monero, gir du bare senderen din
offentlige adresse.

For å lære om hvordan Monero hindrer sporingshistorikk (usporbarhet), kan du
se seksjonen om @ring-signaturer.
