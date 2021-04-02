{% include disclaimer.html translated="yes" translationOutdated="no" %}

En visningslommebok er en spesiell type lommebok som kun kan se innkommende transaksjoner. Siden den ikke holder på det mnemoniske frøet og private forbruksnøkkelen din, kan den ikke signere transaksjoner, og den kan ikke se utgående transaksjoner. Dette gjør dem spesielt interessante for

* å validere innkommende transaksjoner til kalde lommebøker eller maskinvarelommebøker
* å overvåke innkommende donasjoner til en innsamlingsaksjon
* utviklere som skriver programvarebibliotek for å validere betalinger

Visningslommebøker kan ikke signere transaksjoner, og de kan derfor ikke forbruke en saldo i seg selv. De kan imidlertid brukes som del av en frakoblet signering av en transaksjon ved å opprette usignerte transaksjoner som skal signeres i frakoblet tilstand i en kald enhet, og senere ved å sende den signerte transaksjonen til nettverket.

Hvis lommeboken din har utgående transaksjoner, vil den viste saldoen ikke være riktig. For å få en riktig saldo i en visningslommebok, må du importere de medfølgende nøkkelbildene til hver av lommebokens utdata.

Du kan også opprette en visningslommebok til en maskinvarelommebok, men denne typen visningslommebok støtter imidlertid ikke frakoblet signering av transaksjoner og import av nøkkelbilder.

For å opprette en visningslommebok, må du enten ha tilgang til en lommebok eller kjenne til hovedadressen og den private visningsnøkkelen fra en lommebok.

### CLI: Å opprette en visningslommebok fra en privat visningsnøkkel

Åpne en eksisterende lommebok og tast inn kommandoene `address` og `viewkey` for å vise lommebokens adresse og dens private (hemmelige) visningsnøkkel. Tast inn `exit` for å lukke lommeboken.

Etterpå kan du opprette en visningslommebok ved å taste inn `monero-wallet-cli --generate-from-view-key wallet-name`. Det siste argumentet blir filnavnet på den nye lommeboken din. Du vil bli bedt om `Standard address` og `View key` av lommeboken. Lim inn den opprinnelige adressen og private (hemmelige) visningsnøkkelen til lommeboken din. Etter det trykker du på enter og bekrefter et passord for den nye lommeboken din.

### GUI: Å opprette en visningslommebok fra en eksisterende lommebokfil

Hvis du har tilgang til den eksisterende lommeboken, kan du åpne lommeboken din og gå til `Innstillinger` > `Lommebok` > `Opprett en visningslommebok`:

![Settings](/img/resources/user-guides/en/view-only/settings.png)

Visningslommebokfilen vil opprettes i den samme katalogen, og bruker ditt gjeldende passord.

Alternativt kan du dobbeltklikke på `Vellykket`-vinduet for å kopiere meldingen, og deretter trykke på `OK` for å lukke det:

![Success](/img/resources/user-guides/en/view-only/Success.png)

### GUI: Å opprette en visningslommebok fra en privat visningsnøkkel

Hvis du ikke har tilgang til den eksisterende lommeboken, kan du opprette en visningslommebok ved å vite lommebokens hovedadresse og private visningsnøkkel.

For å gjøre dette, kan du gå til hovedmenyen og trykke på `Gjenopprett lommebok fra nøkler eller mnemonisk frø`:

![restore-view-only](/img/resources/user-guides/en/view-only/restore-view-only.png)

Legg inn et navn for visningslommebokfilen din. Alternativt kan du endre filplasseringen.

Velg `Gjenopprett fra nøkler`.

I feltet `Kontoadresse (offentlig)` legger du inn lommebokens hovedadresse som starter med en 4.

I feltet `Visningsnøkkel (privat)` legger du inn lommebokens private visningsnøkkel.

La `Forbruksnøkkel (privat)`-feltet være blankt.

Legg inn en `Dato for opprettelse av lommebok` eller `Gjenopprettingshøyde` hvis du har en (valgfritt).

Trykk på `Neste` for å opprette visningslommebokfilen din.
