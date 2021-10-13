---
summary: 'Kryptograficznie podpisany zbiornik, który wyszczególnia transfer Monero do odbiorcy lub odbiorców.'
terms: ["transaction", "transactions", "transakcja", "transakcję", "transakcji", "transakcją", "transakcje", "transakcjom", "transakcjami"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Podstawy

Kryptograficznie podpisany zbiornik, który wyszczególnia transfer Monero do
odbiorcy lub odbiorców.

Parametry transakcji zawierają jeden lub więcej adresów odbiorcy wraz z
odpowiednimi kwotami oraz parametr @rozmiar-pierścienia, który określa
liczbę obcych wyjść powiązanych z transakcją. Im więcej wyjść, tym bardziej
możliwy wyższy poziom maskowania, jednak wiąże się to z pewnym
kosztem. Ponieważ transakcje stają się coraz większe i z większą liczbą
wyjść, opłaty za nie rosną.

Możliwe jest także tworzenie transakcji off-line, które daje ogromną korzyść
dla prywatności.

Transakcja może być zidentyfikowana jedynie przy użyciu opcjonalnego numeru
identyfikacji transakcji, który przeważnie jest 32-bajtowym ciągiem (64
znaków heksadecymalnych).

### Szczegółowe informacje

Każda transakcja wiąże się z dwoma kluczami: publicznym @kluczem-wydawania i
publicznym @kluczem-widoczności. Celem wyjścia w transakcji jest jednorazowy
klucz publiczny, złożony z tych dwóch kluczy.

Gdy portfel dokonuje skanowania w poszukiwaniu płatności przychodzących,
wszystkie transakcje są weryfikowane czy są przeznaczone dla ciebie. Wymaga
to jedynie twojego prywatnego klucza widoczności i twojego publicznego
klucza wydawania, a sprawdzanie to jest niezmienne i nie może być
sfałszowane. Nie możesz otrzymać płatności i zidentyfikować jej bez
odpowiedniego prywatnego klucza widoczności.

Aby wydać środki ze swojego konta, musisz stworzyć jednorazowy prywatny
klucz wydawania dla konkretnego wyjścia. Prawie zawsze jest to wykonywane
automatycznie przez oprogramowanie portfela Monero.
