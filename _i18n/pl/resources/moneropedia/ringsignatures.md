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

A ring signature makes use of your @account keys and a number of public keys
(also known as outputs) pulled from the @blockchain using a gamma
distribution method. Over the course of time, past outputs could be used
multiple times to form possible signer participants. In a "ring" of possible
signers, all ring members are equal and valid. There is no way an outside
observer can tell which of the possible signers in a signature group belongs
to your @account. So, ring signatures ensure that transaction outputs are
untraceable. Moreover, there are no @fungibility issues with Monero given
that every transaction output has plausible deniability (e.g. the network
can not tell which outputs are spent or unspent).

Aby dowiedzieć się, w jaki sposób Monero gwarantuje prywatność poprzez
domyślną niemożliwość przypisania transakcji do konta, przejdź do
@ukrytego-adresu.
