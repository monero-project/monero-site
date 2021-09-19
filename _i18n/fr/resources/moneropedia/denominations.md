---
summary: "Une dénomination ou coupure est une description exacte d'un montant d'une monnaie. Il s'agit souvent d'une sous-unité de la monnaie. Par exemple, traditionnellement, un centime est 1/100ème d'une unité de monnaie précise."
terms: ["denominations", "subunits", "tacoshi", "piconero", "nanonero", "micronero", "millinero", "centinero", "decinero","decanero","hectonero","kilonero","meganero","giganero", "dénominations", "coupures", "sous-unités"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### The Basics

Une dénomination ou coupure est une description exacte d'un montant d'une
monnaie. Il s'agit souvent d'une sous-unité de la monnaie. Par exemple,
traditionnellement, un centime est 1/100ème d'une unité de monnaie précise.

Les noms des coupures de Monero ajoutent le préfixe SI après suppression du
"mo" initial pour simplifier l'utilisation. Actuellement, la plus petite
unité de Monero est 1 piconero (0.000000000001 XMR).

### Coupures de Monero

|------------+----------+-------------------|
| Name       | Base 10  | Amount            |
|-----------:|:--------:| -----------------:|
| piconero   | 10^-12   | 0.000000000001    |
| nanonero   | 10^-9    | 0.000000001       |
| micronero  | 10^-6    | 0.000001          |
| millinero  | 10^-3    | 0.001             |
| centinero  | 10^-2    | 0.01              |
| decinero   | 10^-1    | 0.1               |
|============+==========+===================|
| **monero** | **10^0** | **1**             |
|============+==========+===================|
| decanero   | 10^1     | 10                |
| hectonero  | 10^2     | 100               |
| kilonero   | 10^3     | 1,000             |
| meganero   | 10^6     | 1,000,000         |
|------------+----------+-------------------|

### Informations détaillées

Le support des entrées utilisant le préfixe SI à [été ajouté au code de
Monero](https://github.com/monero-project/monero/pull/1826) le 3 Mars 2017
par [Moneromooo](https://github.com/moneromooo-monero). La plus petite unité
de Monero (10^-12 XMR) était initialement appelée un tacoshi en l'honeur de
l'utilisateur
[Tacotime](https://bitcointalk.org/index.php?action=profile;u=19270), un
contributeur de Monero de la première heure et fut plus tard renommé pour
simplicité d'usage et uniformité.

### Implementation dans monerod

La plus petite fraction d'un Monero dans l'actuelle implémentation de
monerod est également connu sous le nom d'@unité-atomique, qui est
actuellement un piconero.
