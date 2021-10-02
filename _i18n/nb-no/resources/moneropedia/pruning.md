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

- *Synkronisere en utrensket node fra bunn:* Da laster du ned og
synkroniserer kun 1/3 av hele blokkjeden.

- *Utrenske en eksisterende node:* Blokkjeden som allerede eksisterer vil
utrenskes, men dette vil ikke resultere i en mindre blokkjede. Den vil
istedenfor markere deler av filen som ledig, slik at fremtidig data benytter
den ledige lagringsplassen, noe som medfører at filen ikke vokser før den
ledige lagringsplassen blir knapp.

- *Opprette en ny, utrensket blokkjede fra en full en:* En full blokkjede
som du allerede har vil brukes for å opprette en ny, utrensket blokkjede.

Utrenskede noder er svært nyttige, og foretrekkes fremfor @eksterne noder,
men brukere bør, hvis mulig, kjøre en fullstendig node og kun velge å
utrenske hvis det er nødvendig.

«Databaseutrensking»-funksjonen [ble lagt
til](https://github.com/monero-project/monero/pull/4843) i januar 2019. Se
[blogginnlegget]({{ site.baseurl }}/2019/02/01/pruning.html) for mer
informasjon.
