---
summary: 'En funksjon som lar nodeoperatører laste ned og synkronisere bare 1/3 av blokkjeden'
terms: ["pruning", "utrensking"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

«Utrensking» lar nodeoperatører lagre 2/3 med lagringsplass mens de
fremdeles har tilgang til hele transaksjonshistorikken. Utrensking fungerer
ved å fjerne 7/8 av de unødvendige ringsignaturdataene. Den gjenstående 1/8
med data blir tilgjengelig for de andre nodene og vil brukes til å
synkroniseres med nettverket. Andre utrenskede noder vil ha en tilfeldig 1/8
av dataene som de også gjør tilgjengelig til nettverket. Det finnes ingen
ulemper hva gjelder personvern eller sikkerhet når man bruker en utrensket
node.

Det er tre måter å utrenske på:

- *Synchronize a pruned node from scratch:* You will download and sync only
  1/3 of the full blockchain.

- *Prune an existing node:* The already existing blockchain will be pruned,
  but this will not result in a smaller blockchain. Instead, it will mark
  parts of the file as free, so that future data will use that free space,
  causing the file to not grow until free space grows scarce.

- *Create a new pruned blockchain from a full one:* A full blockchain that
  you already have will be used to create a new, pruned blockchain.

Utrenskede noder er svært nyttige, og foretrekkes fremfor @eksterne noder,
men brukere bør, hvis mulig, kjøre en fullstendig node og kun velge å
utrenske hvis det er nødvendig.

«Databaseutrensking»-funksjonen [ble lagt
til](https://github.com/monero-project/monero/pull/4843) i januar 2019. Se
[blogginnlegget]({{ site.baseurl }}/2019/02/01/pruning.html) for mer
informasjon.
