{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Steg 1: Å oppdrive Monero

Det er flere måter å oppdrive Monero på. Du kan utvinne det, veksle varer eller tjenester for det, eller du kan veksle andre kryptovalutaer og fiat-penger til XMR. Hvis du velger det siste, er den enkleste måten å gjøre det på å bruke en børs.

Det finnes flere børser som støtter Monero. Noen er sentraliserte, som vanligvis har mye likviditet og rask service, men som krever at du sender inn personlige opplysninger (KYC) før du kan begynne å handle der. Andre er desentraliserte og krever ikke identifikasjon, men har vanligvis mindre volum og kan være vanskeligere å bruke. Det finnes også tjenester som lar mennesker møte og handle uten at en tredjepart er involvert.

En ufullstendig liste over børser som støtter Monero finnes på vår [Forhandler-side]({{ site.baseurl }}/community/merchants/#exchanges).

## Steg 2: Last ned og opprett en papirlommebok på en sikker PC som ikke er koblet til internett.

Last ned @papirlommebokgeneratoren på: [moneroaddress.org](https://moneroaddress.org) og kopier den til en USB-minnepinne (direktelenke: [https://github.com/moneromooo-monero/monero-wallet-generator/archive/master.zip](https://github.com/moneromooo-monero/monero-wallet-generator/archive/master.zip)).

Pakk opp og åpne papirlommebokgeneratoren (monero-wallet-generator.html) i en nettleser på en (@airgap)-PC som ikke er koblet til internett som ikke tidligere har blitt brukt eller som har en ren installasjon av operativsystemet.

Papirlommeboken din vil inneholde fire viktige elementer:

- Offentlig Monero-@adresse: Den offentlige adressen brukes til å motta midler til @lommeboken. Du gir denne til de som vil sende midler til lommeboken din.

- @Mnemonisk Monero-frø: Det mnemoniske frøet er en metode å lagre hele lommeboken på som er enkelt gjenkjennelig for mennesker. Dette er alt du trenger for å gjenopprette lommeboken din senere.

- Monero-@forbruksnøkkel: Den private forbruksnøkkelen brukes til å sende midler fra lommebøkene.

- Monero-@visningsnøkkel: Den private visningsnøkkelen brukes til å se transaksjoner som går inn i lommeboken. Den brukes vanligvis til å sette opp en visningslommebok som kan se innkommende transaksjoner på blokkjeden i sanntid mens de sendes til en kald lommebok.

På dette stadiet har du mange valg. Du kan skrive ut lommeboken på papir, lagre den som PDF eller tekst på en USB-minnepinne, brenne den til CD/DVD osv. Du vil sannsynligvis ha minst to eller tre kopier som lagres sikkert på ulike steder. Hvis det lagres digitalt, bør alt krypteres med et sterkt passord. Hvis det lagres på papir, må lommeboken ikke vises til noen andre som kan lære seg de 25 ordene utenat eller ta bilde av lommeboken uten din tillatelse. Å sende noen et bilde av lommeboken er det samme som å gi bort alle pengene dine.

Uansett hvilken metode du velger, må du sørge for at det ikke finnes en kopi av Monero-lommeboken din på enheten du har brukt. Du må kanskje slette Monero-lommeboken på en trygg måte hvis du lagret den til en disk eller sørge for at printeren din ikke lagrer kopier av utskrifter.

*Hvis du mister tilgangen til Monero-papirlommeboken din, vil ikke Moneroene bli tilgjengelig for deg eller noen andre. Du vil ikke kunne gjenvinne dem!*

#### Sidemerknad

Mulighet for å kryptere et XMR-mnemonisk frø: https://xmr.llcoins.net/
Last ned html-siden og sett den på PC-en din som ikke er koblet til internett. Se delen om «Kryptering/avkoding av mnemoniske frø» og sørg for at du bruker «CN Add» med et godt passord. Takk til manicminer5.

## Steg 3: Send dine Moneroj til papirlommeboken

Nå som du har alt du trenger, er du klar til å sende dine XMR til papirlommeboken din. Bare send myntene til lommebok-adressen du skrev ned tidligere. Sørg for at adressen er riktig, selv om du har kopiert og limt den! Husk at hvis du sender myntene til en feil adresse, er det ingen måte å få dem tilbake på!

#### Merknader og hvordan å verifisere midler

Fordi Monero-blokkjeden er privat og usporbar, vil du ikke kunne sjekke din offentlige Monero-adresse og bekrefte at midlene har ankommet slik som med bitcoin. Dette er bra for personvern, men uheldig med tanke på bekvemmelighet.

For å sikkert verifisere midlene i lommeboken din, må du sette opp en visningslommebok. Dette er hvor visningsnøkkelen kommer inn i spill. For å opprette en visningslommebok, kan du se oppføringen: [Visningslommebok]({{site.baseurl}}/resources/user-guides/view_only.html)

For å verifisere at midlene *fremdeles* er i lommeboken din og ikke har blitt brukt, må du opprette en kald lommebok med den mnemoniske nøkkelen din (alle midlene dine) på en PC som ikke er koblet til internett og som har en oppdatert kopi av Monero-blokkjeden. Når du er ferdig, må du på en sikker måte slette lommeboken eller koble den til internett, og da blir det en «varm» lommebok.
