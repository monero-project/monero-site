---
summary: 'en ny type rekkeviddebevis som tilslører det sendte beløpet ved å erstatte RingCT-er i transaksjoner'
terms: ["bulletproofs", "bulletproof"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

@RingCT-er ble introdusert for å tilsløre transaksjonsbeløpene. Ett mål med @RingCT-ene var å bevise at summen av inndataene fratrukket utdataene i @transaksjonen var lik 0, og at alle utdata var positive tall.  
For å oppnå dette ble to typer ringsignaturer opprettet: Én ringsignatur for hele transaksjonen (for å bevise at summen er 0), og et sett med ringsignaturer for undergruppene av transaksjonsdelene (for å bevise at utdataene er positive tall), og deretter kombinere dem ved å bruke Schnorr-signaturer (som senere ble byttet ut med Borromean-ringsignaturer).  
Mens den utførte jobben, viste det seg at den omfattende størrelsen på
ringCT-transaksjonene var en stor ulempe.

### Når det kommer til bulletproofs

I 2017 skrev en [krypto-gruppe på Stanford](https://crypto.stanford.edu/bulletproofs/) en [vitenskapelig artikkel](https://eprint.iacr.org/2017/1066.pdf) der de presenterte en ny type rekkeviddebevis, kalt bulletproofs.  

> Bulletproofs er korte, ikke-interaktive null-kunnskap-bevis som ikke krever et pålitelig oppsett.

I motsetning til Borromean- eller Schnorr-signaturer, er bulletproofs veldig effektive som rekkeviddebevis. Å bevise en stor datamengde genererer kun et lite bevis, og størrelsen på disse bevisene vokser logaritmisk med datastørrelsen som bevises.  
Å øke antallet inndata i en transaksjon med bulletproofs, øker bare størrelsen på beviset litt.  
Bulletproofs har også fordelen ved at det kan bevise at flere dedikerte
kontoer er i den ønskede rekkevidden på én gang. Det er ikke noe behov for å
bevise hver utdata til hver destinasjon i separate bevis; hele
transaksjonsbeløpet kan bevises i én større (men fremdeles veldig liten)
bulletproof.

### Gjennomgående revisjonsprosess og implementering

I og med at bulletproofs var veldig nytt og den opprinnelige implementeringen som ble gjort av gruppen – til tross for at den ble gjort grundig – trengte en omskrivning som var fokusert på vårt spesifikke bruksområde, var det ingen enkel sak å implementere bulletproof i Monero.  
Koden har blitt skrevet og omskrevet for å følge den nye versjonen av bulletproofs som fremdeles var under utvikling, men med én gang denne Monero-implenteringen var ferdig, måtte den resulterende utrullingen bli tatt hånd om med stor varsomhet.  
Samfunnet startet derfor en revisjonsprosess. Forskere tok kontakt med Benedikt Bünz, hovedforfatteren av Bulletproofs-artikkelen, og [OSTIF](https://ostif.org/) – en organisasjon som hjelper teknologier som bruker åpen kildekode med å forbedre og sikre seg.  
OSTIF rettet gruppen til flere organisasjoner som innehadde ferdighetene til å gjennomføre revisjonen. Mens én av dem ba om å forbli anonym og ble holdt utenfor prosessen som måtte være offentlig, ble to andre (QuarksLab og Kudelski Security) valgt til å foreta revisjonen.  
Våre tre revisorer ble finansiert av samfunnet til å undersøke om
implementeringen ikke inneholdt kritiske progamvarefeil, og ikke hadde
utnyttelsesområder.  De endelige rapportene ble utgitt sommeren 2018, med
flere nyttige foreslåtte korrigeringer og reparasjoner, og den endelige
bulletproof-implementeringen ble først lagt til Monero Stagenet og deretter
til Moneros hovednettverk under nettverksoppdateringen i oktober 2018.

Siden utrullingen av bulletproofs, har størrelsen på en gjennomsnittlig
transaksjon falt med minst 80 %, det samme gjelder transaksjonskostnadene.

Flere forklaringer på Moneros implementering av bulletproofs kan du finne på
YouTube i en [samtale med Sarang
Noether](https://www.youtube.com/watch?v=6lEWqIMLzUU).
