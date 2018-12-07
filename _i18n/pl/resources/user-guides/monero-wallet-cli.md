{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
# monero-wallet-cli

`monero-wallet-cli` jest oprogramowaniem, które współpracuje z Monero. To program konsoli zarządzający kontem. Podczas gdy portfel Bitcoina zarządza zarówno kontem, jak i łańcuchem bloków, Monero rozdzielił je, aby `monerod`operował łańcuchem, a `monero-wallet-cli` kontem.

Ten przewodnik pokaże, jak wykonywać różne operacje w interfejsie `monero-wallet-cli`. Przewodnik zakłada, że używasz najnowszej wersji Monero i założyłeś już swoje konto zgodnie z instrukcjami.


## Sprawdzanie salda

Ponieważ zarządzanie łańcuchem bloków i portfelem odbywa się za pomocą różnych programów, wielokrotnie użycie `monero-wallet-cli` wymaga współpracy z daemonem. Obejmuje to również sprawdzanie płatności przychodzących na twój adres. Uruchamiając równocześnie `monero-wallet-cli` i `monerod`, wpisz `balance`.

Przykład:


Przyciągnie to bloki z daemona, których portfel jeszcze nie widział oraz zaktualizuje twoje saldo. Ten proces przeważnie odbywa się mniej więcej co minutę w tle. Aby zobaczyć saldo bez aktualizowania, wpisz:

    balance
    Balance: 64.526198850000, unlocked balance: 44.526198850000, including unlocked dust: 0.006198850000

W tym przypadku, `Balance` jest twoim saldem całkowitym. `unlocked balance` jest kwotą aktualnie dostępną do wydania. Nowe transakcje przychodzące wymagają 10 potwierdzeń zanim zostaną odblokowane. `unlocked dust` to bardzo mała liczba niewydanych wyników, które mogły się nagromadzić na twoim koncie.

## Wysyłanie monero

Będziesz potrzebował standardowego adresu, na który chcesz przesłać środki (długi ciąg zaczynający się na "4") oraz możliwe, że także numer identyfikacyjny odbiorcy, jeśli ten go wymaga. W takim przypadku, odbiorca może przekazać ci adres zintegrowany, który składa się z numeru identyfikacyjnego oraz adresu standardowego.

### Wysyłanie na adres standardowy:

    transfer ADDRESS AMOUNT PAYMENTID

Zamień `ADDRESS` na adres, na który chcesz dokonać płatności, `AMOUNT` na kwotę w Monero, jaką chcesz przesłać oraz `PAYMENTID` na numer identyfikacyjny, który podał ci odbiorca. Podanie numeru identyfikacyjnego jest opcjonalne, jeśli odbiorca ci go nie podał, po prostu go pomiń.

### Wysyłanie na adres zintegrowany:

    transfer ADDRESS AMOUNT

Numer identyfikacyjny w tym przypadku jest domniemany w adresie zintegrowanym.

### Precyzowanie liczby wyników transakcji:

    transfer RINGSIZE ADDRESS AMOUNT

Zamień `RINGSIZE` na numer wyników, jaki chcesz użyć. **Domyślny numer wyników, gdy niesprecyzowany, wynosi 11.** Dobrym pomysłem jest użycie numeru domyślnego, ale możesz zwiększyć go, gdy chcesz dołączyć więcej wyników. Im wyższy numer, tym większa transakcja i wyższe opłaty.

## Otrzymywanie Monero:

Jeśli posiadasz własny adres Monero, wystarczy przekazać nadawcy twój adres standardowy.

Swój adres znajdziesz pod funkcją:

    address

Ponieważ Monero jest anonimowe, nie zobaczysz adresu nadawcy. Jeżeli chcesz go poznać, na przykład, żeby podziękować konkretnemu klientowi, poproś nadawcę o użycie opcjonalnego numeru identyfikacyjnego, który może zostać przypisany transakcji. Aby uprościć życie, możesz wygenerować adres zintegrowany, który już zawiera losowy numer identyfikacyjny, za pomocą funkcji:

    integrated_address

Funkcja ta wygeneruje losowy numer identyfikacyjny i stworzy adres, który już zawiera twoje konto i numer identyfikacyjny tej płatności. Jeśli chcesz wybrać określony numer identyfikacyjny, użyj funkcji:

    integrated_address 12346780abcdef00

Płatności dokonane na adres zintegrowany wygenerowany z twojego konta przejdą na twoje konto wraz z załączonym numerem identyfikacyjnym, umożliwiając rozróżnienie transakcji.


## Udowadnianie płatności osobom trzecim:

Gdy dokonasz zapłaty, a odbiorca stwierdzi, że jej nie otrzymał, możesz udowodnić swoją płatność osobom trzecim lub samemu odbiorcy, jeśli po prostu popełnił on pomyłkę. Monero jest prywatne, a więc nie możesz po prostu wskazać na swoją transakcję w łańcuchu bloków, ponieważ nie da się rozróżnić, kto ją wysłał, a kto odebrał. Możesz jednak przekazać stronie prywatny klucz transakcji, aby strona rozpoznała, czy dokonana została płatność na dany adres. Zauważ, że zachowanie tych kluczy transakcji domyślnie jest wyłączone i musisz go włączyć przed dokonaniem płatności, jeśli uważasz, że będziesz ich potrzebował:

    set store-tx-info 1

Możesz przywróciń klucz tx z wcześniejszej transakcji:

    get_tx_key 1234567890123456789012345678901212345678901234567890123456789012

Wskaż numer identyfikacyjny transakcji, dla której chcesz otrzymań klucz. Pamiętaj, że płatność może zostać podzielona na więcej niż jedną transakcję, więc możesz potrzebować kilku kluczy. Następnie możesz przesłać otrzymany klucz lub klucze do osoby, której chcesz udowodnić dokonanie płatności, razem z numerem identyfikacyjnym transakcji i adresem odbiorcy. Zauważ, że strona trzecia, znając twój adres, będzie w stanie zobaczyć także, ile zwrotu otrzymałeś.

Jeżeli to ty jesteś stroną trzecią (to znaczy ktoś chce ci udowodnić, że przelał Monero na dany adres), sprawdź w ten sposób:

    check_tx_key TXID TXKEY ADDRESS

Zamień `TXID`, `TXKEY` i `ADDRESS` na, odpowiednio, numer identyfikacyjny transakcji, klucz transakcji oraz przekazany ci adres odbiorcy. monero-wallet-cli sprawdzi tę transakcję i poinformuje cię, ile Monero zostało przesłane na dany adres.


## Uzyskiwanie szansy na potwierdzenie lub anulowanie płatności:

Jeśli chcesz uzyskać ostatnią szansę na potwierdzenie płatności, użyj funkcji:

    set always-confirm-transfers 1


## Jak odnaleźć płatność przychodzącą:

Jeśli otrzymałeś płatność z użyciem określonego numeru identyfikacyjnego, wyszukaj go, wpisując:

    payments PAYMENTID

Możesz podań więcej niż jeden numer identyfikacyjny.

Najczęściej możesz przeglądać swoje płatności przychodzące i wychodzące za pomocą funkcji:

    show_transfers

Dodając wysokość łańcucha bloków, znajdziesz jedynie najnowsze transakcje. Możesz także wybrać tylko transakcje przychodzące lub tylko wychodzące. Na przykład:

    show_transfers in 650000

pokaże jedynie przychodzące płatności następujące po bloku 650000. Możesz także sprecyzować zakres wysokości.

Możesz zacząć wydobywać bezpośrednio z portfela, wpisując:

    start_mining 2

Wydobycie zacznie się za pomocą daemona i dwóch pasem. Zauważ, że jest to wydobycie samemu i może chwilę zająć znalezienie bloku. Aby zakończyć wydobycie, wpisz:

    stop_mining

