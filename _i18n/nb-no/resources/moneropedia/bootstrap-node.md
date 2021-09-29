---
summary: 'En node som en daemon kobler til for å gi umiddelbar bruksnytte til lommebøker under synkronisering'
terms: ["bootstrap-node", "bootstrap-nodes", "oppstartsprogram-node", "oppstartsprogram-noder"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

@Daemonen som kjører på en lokal @node må synkronisere med andre @eksterne
noder. @Lommeboken kan fremdeles kobles til den lokale @noden mens den ikke
enda er fullstendig synkronisert, og den kan derfor ikke få tilgang til
@blokkene som ikke enda er synkronisert på den lokale @noden.

For at @lommeboken skal kunne brukes med én gang, bruker daemon en
oppstartsprogram-node på den lokale @noden som RPC-forespørselen fungerer
som proxy for, noe som gir tilgang til de manglende @blokkene.

Merk: svarene fra oppstartsprogram-noden kan være upålitelige.
