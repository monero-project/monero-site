---
summary: 'Grupa podpisów kryptograficznych z przynajmniej jednym prawdziwym uczestnikiem, bez możliwości rozróżnienia, kto w danej grupie nim jest, ponieważ wszystkie podpisy figurują jako ważne'
terms: ["ring-signature", "ring-signatures", "podpis-pierścieniowy", "podpisem-pierścieniowym", "podpisu-pierścieniowego", "podpisie-pierścieniowym"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Podstawy

W kryptografii podpis pierścieniowy jest rodzajem podpisu cyfrowego, który
może być dokonany przez jakiegokolwiek członka grupy użytkowników, w której
każdy posiada klucz. Wiadomość opatrzona podpisem pierścieniowym jest
zatwierdzona przez kogoś z konkretnej grupy. Jedną z charakterystyk
bezpieczeństwa podpisu pierścieniowego jest to, że ustalenie klucz *którego*
członka grupy został użyty do podpisu jest obliczeniowo niewykonywalne.

Przykładowo, podpis pierścieniowy może zostać użyty do dostarczenia
anonimowego podpisu "wysokiej rangi urzędnika Białego Domu" bez wyjawiania,
który urzędnik rzeczywiście podpisał wiadomość. Anonimowość tego podpisu nie
może zostać unieważniona, a grupa stworzona do podpisu pierścieniowego może
być zaimprowizowana - nie wymaga żadnych wcześniejszych przygotowań.

### Aplikacja w Monero

Podpis pierścieniowy korzysta z twoich kluczy do @konta oraz numeru kluczy
publicznych pobranych z @łańcucha-bloków przy użyciu metody rozkładu
trójkątnego. Na przestrzeni czasu klucze mogą zostać użyte wielokrotnie, aby
tworzyć możliwe grupy podpisowe. W "pierścieniu" (grupie) możliwych osób
podpisujących wszyscy członkowie są równi i ważni. Nie ma możliwości, aby
zewnętrzny obserwator rozróżnił, który z członków jest przypisany do twojego
konta. Podpisy pierścieniowe zapewniają niewykrywalność wyników
transakcji. Ponadto nie ma problemów z zamienialnością Monero, ponieważ
każdy wynik transakcji jest wiarygodnie zaprzeczalny (sieć nie rozróżnia,
który z wyników został wydany lub nie wydany).

Aby dowiedzieć się, w jaki sposób Monero gwarantuje prywatność poprzez
domyślną niemożliwość przypisania transakcji do konta, przejdź do
@ukrytego-adresu.
