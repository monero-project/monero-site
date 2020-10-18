---
terms: ["address", "addresses", "adresse", "adresser"]
summary: "enten et alias, som for eksempel donate.getmonero.org, eller et sett med 95 tegn som starter med en 4"
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}
### Det grunnleggende

Når du sender Monero til noen, trenger du kun én opplysning, og det er Monero-adressen deres. En *rå* Monero-adresse er et sett med 95 tegn som starter med en '4'. Adressen til Monero-donasjonene er for eksempel <span class="long-term">888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H</span>.

Fordi disse adressene er lange og komplekse, vil du ofte støte på en OpenAlias-adresse i stedet. Monero-donasjoner kan for eksempel sendes til <span class="long-term">donate@getmonero.org</span> eller <span class="long-term">donate.getmonero.org</span>.

Hvis du vil få din egen OpenAlias-adresse, finnes informasjon om dette på [OpenAlias-siden](/the-monero-project/).

### Integrert adresse

En integrert adresse er en adresse som er kombinert med en kryptert betalings-ID på 64-bit. En rå, integrert adresse består av 106 tegn.

### Inngående informasjon

Adressen er faktisk sammenlenkingen – i Base58-format – av den *offentlige* forbruksnøkkelen og *offentlige* visningsnøkkelen, med nettverksbyten som prefiks (nummer 18 for Monero) og de første fire bytene av Keccac-256-hashen av hele strengen (brukt som sjekksum) som suffiks.