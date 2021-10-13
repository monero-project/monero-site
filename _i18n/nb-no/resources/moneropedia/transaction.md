---
summary: 'En kryptografisk signert beholder som redegjør for overføringen av Monero til en mottaker (eller mottakere).'
terms: ["transaction", "transactions", "transaksjon", "transaksjoner"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

En kryptografisk signert beholder som redegjør for overføringen av Monero
til en mottaker (eller mottakere).

Parameterne til en transaksjon innholder én eller flere mottakeradresser med
tilhørende beløp og én parameter i @ringstørrelse som spesifiserer antall
utdata som er bundet til transaksjonen. Jo flere utdata som brukes, jo
høyere grad av forkludring er mulig – men det har sin pris. Siden en
transaksjon blir større med mer utdata, blir transaksjonskostnaden høyere.

Det er mulig å lage en transaksjon i frakoblet tilstand, noe som tilbyr
ytterligere personvernfordeler.

En transaksjon kan identifiseres unikt ved å bruke en valgfri
transaksjons-ID, som vanligvis representeres av en 32-bits streng (64
heksadesimale tegn).

### Inngående informasjon

Hver transaksjon trekker inn to nøkler: en offentlig @forbruksnøkkel og en
offentlig @visningsnøkkel. Destinasjonen for en utdata i en transaksjon er
faktisk en engangs offentlig nøkkel som er bereget ut fra disse to nøklene.

Når en lommebok skanner etter innkommende transaksjoner, skannes hver
transaksjon for å se om den er til «deg». Dette krever kun din private
visningsnøkkel og din offentlige forbruksnøkkel, og denne sjekken er
uforanderlig og kan ikke forfalskes. Du kan ikke motta transaksjoner og
identifisere dem uten en tilhørende privat visningsnøkkel.

For å bruke midlene, må du kalkulere en engangs privat forbruksnøkkel for
den utdataen. Dette gjøres nesten alltid automatisk av programvaren i
Monero-lommeboken din.
