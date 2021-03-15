{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Operativsystemer:  Ulike versjoner av Linux og Windows 7 og 8

### Lommebokprogramvare:  Simplewallet

#### Ressurser for å opprette oppstartbare disker:  [Linux](http://www.pendrivelinux.com/),       [Windows](https://www.microsoft.com/en-us/download/windows-usb-dvd-download-tool)

#### Ressurser for Monero-binærfiler:  [Monero Binaries]({{ site.baseurl_root }}/downloads/)

- Bruk en hvilken som helst PC som du har liggende, selv din arbeidsstasjon. Du synes kanskje det er lettere å bruke en eldre PC som ikke har WiFi eller Bluetooth dersom du er spesielt paranoid

- Opprett en oppstartbar disk med Linux eller Windows, og sørg for at du har Monero-binærfilene på den samme disken eller på en sekundær disk (for Linux bør du sørge for at du også har lastet ned kopier av avhengighetsfilene du trenger, f.eks. libboost1.55 og miniupnpc)

- Koble fra nettverket og/eller internettkablene fra PC-en din og fysisk fjern WiFi-kortet eller skru om mulig av Wifi/Bluetooth

- Start opp i ditt oppstartbare operativsystem og installer avhengighetsfiler om nødvendig

- Kopier Monero-binærfilene til en RAM-disk (/dev/shm i Linux. Oppstartbare ISO-er i Windows har normalt en Z:-stasjon eller noe)

- Ikke kjør Monero @daemon. Bruk i stedet kommandolinjen, og bruk monero-wallet-cli for å opprette en ny Monero @konto

- Når du blir bedt om et navn, kan du gi det et. Det har uansett ikke noe å si

- Når du blir bedt om å oppgi et passord, tast inn 50–100 tilfeldige tegn. Ikke bekymre deg om at du ikke husker passordet, bare gjøre det LANGT

- **KRITISK TRINN**: Skriv ned (på papir) ditt @mnemoniske frø på 25 ord.
**ADVARSEL**:  Hvis du glemmer å skrive ned denne informasjonen, kan pengene dine gå tapt for alltid

- Skriv ned (på telefonen din, på papir, på en annen PC eller hvor enn du vil) adressen og visningsnøkkelen din

- Slå av PC-en, fjern batteriet om det er mulig, og la den være fysisk slått av i noen timer

Kontoen du har opprettet ble opprettet i RAM, og de digitale filene er nå utilgjengelige. Hvis en uvedkommende på en eller annen måte klarer å få tilgang til dataene, vil de mangle det lange passordet for å åpne det. Hvis du må motta betalinger, har du din offentlige adresse, og du har visningsnøkkelen om det blir behov for den. Hvis du trenger tilgang til den, har du ditt @mnemoniske frø på 25 ord, og du kan nå skrive ut flere kopier av den, inkludert en kopi som befinner seg på et annet område (f.eks. i en bankboks).

Relatert innhold:  [Offline kontogenerator](http://moneroaddress.org/)
