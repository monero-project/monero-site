---
summary: 'Internettet som anonyme overleggsnettverk er bygget på'
terms: ["Clearnet"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

Når du bruker internettet for ting som nyheter, e-post, sosiale medier og
til og med Monero, bruker du sannsynligvis en clearnet-tilkobling. Dette
betyr at *alle* tilkoblingene dine kan spores og overvåkes av:

- din [ISP](https://en.wikipedia.org/wiki/ISP)

- nettsiden/tjenesten/personen du kommuniserer med

- muligens en [Five Eyes](https://en.wikipedia.org/wiki/5_Eyes)-kapabel
enhet

Og selv om du bruker [HTTPS](https://en.wikipedia.org/wiki/HTTPS) eller
liknende (som *krypterer* overføringen din), er ruten din verken skjult
eller anonym. Den er altså «in the *clear*» (skjult og utenfor fare).

### Inngående informasjon

Fordi en tradisjonell [VPN](https://en.wikipedia.org/wiki/VPN) ikke kan
redde deg fra clearnet (i og med at du fremdeles bruker *clearnet* (selv om
du er mer sikret enn uten en VPN)), bør du bruke et *anonymt
overleggsnettverk* for å unngå å bruke clearnet direkte:

- Java-I2P

- [Tor](https://torproject.org/)

Disse teknologiene beskytter deg fra clearnet ved å bygge et anonymt
nettverk **over** clearnet med hensikt å holde overføringene dine både
krypterte **og** anonyme.

Her er et nøyaktig, [interaktivt
diagram](https://www.eff.org/pages/tor-and-https) gitt av
[EFF](https://www.eff.org/) som beskriver *clearnet* i sammenheng med
**Tor**. Konseptet gjelder også (til en viss grad) for @Kovri og @I2P hva
gjelder anonymitet, med unntaket av at trafikken din trenger aldri å forlate
@I2P-nettverket
