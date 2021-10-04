---
summary: 'totalt antall mulige underskrivere i en ringsignatur'
terms: ["ring-size", "ringstørrelse"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunnleggende

Ringstørrelse refererer til det totale antallet underskrivere i en
@ring-signatur. Før utgivelsen av [0.13.0 "Beryllium Bullet"]({{
site.baseurl }}/2018/10/11/monero-0.13.0-released.html), var det mulig å
velge et vilkårlig antall underskrivere (av og til med minstegrenser). Med
0.13-utgivelsen, ble det bestemt å sette dette tallet til 11 for å tvinge
gjennom transaksjonsensartethet.

`Ring size (11) = foreign outputs (10) + your output (1)`

Fremmede utdata (foreign outputs) kalles som regel for «avledninger»
(decoys), og antallet avledninger ble tidligere kalt for «mixin»-størrelsen.
