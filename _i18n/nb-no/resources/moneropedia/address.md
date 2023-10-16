---
summary: 'enten et alias, som for eksempel donate.getmonero.org, eller et sett med 95 tegn som begynner med en 4'
terms: ["address", "addresses", "adresse", "adresser"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

When you send Monero to someone you only need one piece of information, and
that is their Monero address. A *raw* Monero address is a set of 95
characters starting with a '4' or an '8'. The Monero donation address, for
instance, is
888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H.

Fordi disse adressene er lange og komplekse, vil du ofte støte på en
@OpenAlias-adresse i stedet. Monero-donasjoner kan for eksempel sendes til
donate@getmonero.org eller donate.getmonero.org.

Hvis du vil få din egen @OpenAlias-adresse, finnes informasjon om dette på
[OpenAlias-siden](https://openalias.org/).

### Integrert adresse

En integrert adresse er en adresse som er kombinert med en kryptert
@betalings-ID på 64-bit. En rå, integrert adresse består av 106 tegn.

### Inngående informasjon

Adressen er faktisk sammenlenkingen – i Base58-format – av den *offentlige*
@forbruksnøkkelen og *offentlige* @visningsnøkkelen, med nettverksbyten som
prefiks (nummer 18 for Monero) og de første fire bytene av Keccac-256-hashen
av hele strengen (brukt som sjekksum) som suffiks.
