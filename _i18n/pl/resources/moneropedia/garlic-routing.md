---
layout: moneropedia
entry: "Garlic Routing"
tags: ["kovri"]
terms: ["trasowanie-czosnkowe", "trasowania-czosnkowego", "trasowaniu-czosnkowym", "trasowaniem-czosnkowym"]
summary: "Technologia trasowania (rutingu, rutowania) wdrożona w Kovri."
---

### Podstawy

Pojęcie *trasowanie czosnkowe* posiada wiele interpretacji. Aktualnie Monero definiuje je jako metodę, którą @Kovri i @I2P tworzą anonimową sieć nakładkową peerów internetowych opartą na @wiadomościach.

@Szyfrowanie-czosnkowe trasowania czosnkowego jest podobne do @szyfrowania-warstwowego w [trasowaniu cebulowym](https://en.wikipedia.org/wiki/Onion_routing) i efektywnie ukrywa adresy IP nadawcy oraz zabezpiecza informacje wysłane do @węzła-docelowego (i vice-versa).

### Historia

W formie pisanej pojęcie *garlic routing* pojawiło się w czerwcu 2000 roku w pracy dyplomowej Rogera Dingledine'a [Free Haven](http://www.freehaven.net/papers.html) (Sekcja 8.1.1) jako pochodna pojęcia "trasowanie cebulowe".

W październiku 2016 roku kanał [#tor-dev](https://oftc.net/WebChat/) zaproponował stworzenie pojęcia "trasowanie czosnkowe":

[Nick Mathewson](https://en.wikipedia.org/wiki/The_Tor_Project,_Inc):
>[Myślę, że chodziło o wymyślenie jakiejś rośliny, której struktura odwzorowywałaby topologię "nieszczelnej rury" sieci Tor, ale nie sądzę, że poprzestaniemy na jednej.]

[Roger Dingledine](https://en.wikipedia.org/wiki/Roger_Dingledine):
>Podczas burzy mózgów przy pisaniu "Free Haven" był moment, w którym opisywaliśmy mechanizmy trasowania i ktoś powiedział "trasowanie czosnkowe!" i wszyscy się zaśmiali. Byliśmy pewni, że wymyśliliśmy nową nazwę.

*Uwaga: na użycie cytowanych wypowiedzi wyrazili zgodę Nick Mathewson i Roger Dingledine*

### Szczegółowe informacje

W kategoriach technicznych, trasowanie czosnkowe w @Kovri i @I2P oznacza wszystkie poniższe:

- @szyfrowanie-warstwowe (podobnie do szyfrowania warstwowego w trasowaniu cebulowym)
- łączenie ze sobą wielu @wiadomości (tworzenie "ząbków czosnku")
- @szyfrowanie algorytmem ElGamal/AES

*Uwaga: mimo że [Tor](https://torproject.org/) korzysta z szyfrowania warstwowego, nie używa on algorytmu ElGamal i nie jest oparty na wiadomościach.*

**Czytaj więcej na stroine @szyfrowanie-czosnkowe.**

### Adnotacje

- W kategoriach trasowania cebulowego/czosnkowego, innym sposobem na wizualizację szyfrowania warstwowego jest zastąpienie cebuli/czosnku [matrioszką](https://en.wikipedia.org/wiki/Matryoshka_doll) - każda lalka jest blokadą posiadającym publiczny klucz do kolejnej lub poprzedniej lalki.
- Aby dowiedzieć się więcej na temat trasowania czosnkowego, przejdź do strony @Java-I2P w [trasowaniu czosnkowym](https://geti2p.net/en/docs/how/garlic-routing).
